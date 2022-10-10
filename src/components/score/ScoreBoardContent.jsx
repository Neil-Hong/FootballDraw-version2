import * as THREE from "three";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useCursor, MeshReflectorMaterial, Image, Text, Environment, Scroll, Text3D } from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import getUuid from "uuid-by-string";
import font from "../../assets/fonts/FZYaoTi_Regular.json";

import "./ScoreBoard.styles.scss";

const GOLDENRATIO = 1.61803398875;
const ScoreBoardContent = ({ images }) => {
    return (
        <div className="videoContainer">
            <Suspense fallback={null}>
                <Canvas gl={{ alpha: false }} dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
                    <color attach="background" args={["#191920"]} />
                    <fog attach="fog" args={["#191920", 0, 15]} />
                    <Environment preset="city" />
                    <group position={[0, -0.5, 0]}>
                        <Frames images={images} />
                        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                            <planeGeometry args={[50, 50]} />
                            <MeshReflectorMaterial
                                blur={[300, 100]}
                                resolution={2048}
                                mixBlur={1}
                                mixStrength={40}
                                roughness={1}
                                depthScale={1.2}
                                minDepthThreshold={0.4}
                                maxDepthThreshold={1.4}
                                color="#101010"
                                metalness={0.5}
                            />
                        </mesh>
                    </group>
                </Canvas>
            </Suspense>
        </div>
    );
};

function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
    const ref = useRef();
    const clicked = useRef();
    const [, params] = useRoute("/item/:id");
    const [, setLocation] = useLocation();
    useEffect(() => {
        clicked.current = ref.current.getObjectByName(params?.id);
        if (clicked.current) {
            clicked.current.parent.updateWorldMatrix(true, true);
            clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
            clicked.current.parent.getWorldQuaternion(q);
        } else {
            p.set(0, 0, 5.5);
            q.identity();
        }
    });
    useFrame((state, dt) => {
        state.camera.position.lerp(p, 0.025);
        state.camera.quaternion.slerp(q, 0.025);
    });
    return (
        <group
            ref={ref}
            onClick={(e) => (
                e.stopPropagation(), setLocation(clicked.current === e.object ? "/" : "/item/" + e.object.name)
            )}
            onPointerMissed={() => setLocation("/")}
        >
            {images.map((props) => <Frame key={props.url} {...props} /> /* prettier-ignore */)}
        </group>
    );
}

function Frame({ url, c = new THREE.Color(), ...props }) {
    const [hovered, hover] = useState(false);
    const [rnd] = useState(() => Math.random());
    const image = useRef();
    const frame = useRef();
    const name = getUuid(url);
    const text = props.title;
    const text2 = props.Etitle;
    const text3 = props.name;
    const text4 = props.Ename;
    const text5 = props.score;
    const text6 = props.Escore;
    const text7 = props.number;
    console.log(props);
    useCursor(hovered);
    useFrame((state) => {
        image.current.material.zoom = 1 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
        image.current.scale.x = THREE.MathUtils.lerp(image.current.scale.x, 0.85 * (hovered ? 0.85 : 1), 0.1);
        image.current.scale.y = THREE.MathUtils.lerp(image.current.scale.y, 0.9 * (hovered ? 0.905 : 1), 0.1);
        frame.current.material.color.lerp(c.set(hovered ? "orange" : "white"), 0.1);
    });
    return (
        <group {...props}>
            <mesh
                name={name}
                onPointerOver={(e) => (e.stopPropagation(), hover(true))}
                onPointerOut={() => hover(false)}
                scale={[1, GOLDENRATIO, 0.05]}
                position={[0, GOLDENRATIO / 2, 0]}
            >
                <boxGeometry />
                <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
                <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
                    <boxGeometry />
                    <meshBasicMaterial toneMapped={false} fog={false} />
                </mesh>
                <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
            </mesh>
            {/* <Scroll html>
          <h1>{text}</h1>
        </Scroll> */}
            <Text3D maxWidth={0.1} font={font} position={[0.55, GOLDENRATIO - 0.1, 0]} scale={0.1}>
                {text}
                <meshNormalMaterial />
            </Text3D>
            <Text3D maxWidth={0.1} font={font} position={[0.55, GOLDENRATIO - 0.2, 0]} scale={0.05}>
                {text2}
                <meshNormalMaterial />
            </Text3D>
            <Text3D maxWidth={0.1} font={font} position={[0.55, GOLDENRATIO - 0.4, 0]} scale={0.1}>
                {text3}
                <meshNormalMaterial />
            </Text3D>
            <Text3D maxWidth={0.1} font={font} position={[0.55, GOLDENRATIO - 0.5, 0]} scale={0.05}>
                {text4}
                <meshNormalMaterial />
            </Text3D>
            <Text3D maxWidth={0.1} font={font} position={[0.55, GOLDENRATIO - 0.7, 0]} scale={0.1}>
                {text5}
                <meshNormalMaterial />
            </Text3D>
            <Text3D maxWidth={0.1} font={font} position={[0.55, GOLDENRATIO - 0.8, 0]} scale={0.05}>
                {text6}
                <meshNormalMaterial />
            </Text3D>
            <Text3D maxWidth={0.1} font={font} position={[1.05, GOLDENRATIO - 0.75, 0]} scale={0.1}>
                {text7}
                <meshNormalMaterial />
            </Text3D>
        </group>
    );
}

export default ScoreBoardContent;

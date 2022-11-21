import * as THREE from "three";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Reflector, Text, useTexture, useGLTF, Html, Text3D } from "@react-three/drei";

import "./entrance.styles.scss";
import font from "../../assets/fonts/FZYaoTi_Regular.json";
import Button from "./Button";

export default function App() {
    return (
        <div style={{ height: "900px", width: "100%" }}>
            <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 15 }}>
                <color attach="background" args={["black"]} />
                <fog attach="fog" args={["black", 15, 20]} />

                <Suspense fallback={null}>
                    <group position={[0, -1, 0]}>
                        <Carla rotation={[0, Math.PI - 0.4, 0]} position={[-1.2, 0, 0.6]} scale={[0.26, 0.26, 0.26]} />
                        <VideoText position={[0, 1.3, -2]} />
                        <Text3D maxWidth={1} font={font} position={[0.3, 0.7, -1]} scale={0.1}>
                            一年一度的韭菜盛宴,除了"纯粹"还是"纯粹"
                        </Text3D>
                        <Text3D maxWidth={1} font={font} position={[0.3, 0.5, -1]} scale={0.08}>
                            Annually Leek Cup, it was pure, all about money
                        </Text3D>
                        <Text3D maxWidth={1} font={font} position={[0.3, 0.3, -1]} scale={0.1}>
                            “世界杯？狗都不看,"纯粹"的足球盛宴还得是韭菜杯”
                        </Text3D>
                        <Text3D maxWidth={1} font={font} position={[0.3, 0.1, -1]} scale={0.08}>
                            Bullshit World Cup, top soccer events only in the Leek Cup
                        </Text3D>
                        <Text3D maxWidth={1} font={font} position={[1.4, 0.05, 3]} scale={0.05}>
                            感谢雪儿后援会自立三群鼎力支持
                        </Text3D>
                        <Html>
                            <Button />
                        </Html>
                        <Ground />
                    </group>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[0, 10, 0]} intensity={0.3} />
                    <directionalLight position={[-50, 0, -40]} intensity={0.7} />
                    <Intro />
                </Suspense>
            </Canvas>
        </div>
    );
}

function Carla(props) {
    const { scene } = useGLTF("/carla-draco.glb");
    return <primitive object={scene} {...props} />;
}

function VideoText(props) {
    const [video] = useState(() =>
        Object.assign(document.createElement("video"), {
            src: "/reviewVideo.mp4",
            crossOrigin: "Anonymous",
            loop: true,
            muted: true,
        })
    );
    useEffect(() => void video.play(), [video]);
    return (
        <Text font="/Inter-Bold.woff" fontSize={0.8} letterSpacing={-0.06} {...props}>
            84452 Leek Cup
            <meshBasicMaterial toneMapped={false}>
                <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
            </meshBasicMaterial>
        </Text>
    );
}

function Ground() {
    const [floor, normal] = useTexture([
        "/SurfaceImperfections003_1K_var1.jpg",
        "/SurfaceImperfections003_1K_Normal.jpg",
    ]);
    return (
        <Reflector
            blur={[400, 100]}
            resolution={512}
            args={[10, 10]}
            mirror={0.5}
            mixBlur={6}
            mixStrength={1.5}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
            {(Material, props) => (
                <Material
                    color="#a0a0a0"
                    metalness={0.4}
                    roughnessMap={floor}
                    normalMap={normal}
                    normalScale={[2, 2]}
                    {...props}
                />
            )}
        </Reflector>
    );
}

function Intro() {
    const [vec] = useState(() => new THREE.Vector3());
    return useFrame((state) => {
        state.camera.position.lerp(vec.set(-0.5, 2, 14), 0.05);
        state.camera.lookAt(0, 0, 0);
    });
}

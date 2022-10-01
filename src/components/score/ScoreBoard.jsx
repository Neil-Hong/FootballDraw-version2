import React from "react";
import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Preload, ScrollControls, Scroll, useScroll, Image, useFBO, PerspectiveCamera } from "@react-three/drei";

import AC from "../../assets/images/AC.png";
import Barcelona from "../../assets/images/Barcelona.png";
import Chelasea from "../../assets/images/Chelsea.png";
import MC from "../../assets/images/MC.png";
import NF from "../../assets/images/NF.png";
import Porto from "../../assets/images/Porto.png";
import PSG from "../../assets/images/PSG.png";
import CP from "../../assets/images/CP.png";
import RealMadrid from "../../assets/images/RealMadrid.png";
import Arsenal from "../../assets/images/Arsenal.png";
import SB29 from "../../assets/images/SB29.png";
import DerbyCounty from "../../assets/images/DerbyCounty.png";
import Bayern from "../../assets/images/Bayern.png";
import Juventus from "../../assets/images/Juventus.png";
import BVB09 from "../../assets/images/Dortmund.png";
import MU from "../../assets/images/MU.png";
import cantona from "../../assets/images/cantona.jpg";

import "./ScoreBoard.styles.scss";

function Images() {
    const { width, height } = useThree((state) => state.viewport);
    const data = useScroll();
    const group = useRef();
    useFrame(() => {
        group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
        group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
        group.current.children[2].material.zoom = 1 + data.range(1 / 3, 1 / 3) / 3;
        group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
        // group.current.children[4].material.zoom = 1 + data.range(1.25 / 3, 1 / 3) / 1;
        // group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3;
        // group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3);
        // group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
    });
    return (
        <group ref={group}>
            <Image position={[-1.5, 0, 0]} scale={[3, height - 2, 1]} url={AC} />
            <Image position={[2.5, -height + 2, 1]} scale={[2, 2, 1]} url={MC} />
            <Image position={[-2.3, -height + 2, 2]} scale={[1.3, 2, 1]} url={NF} />
            <Image position={[-0.9, -height - 1, 3]} scale={[1.3, 1.3, 1]} url={cantona} />
            {/* <Image position={[0.75, -height, 3.5]} scale={1.5} url={CP} />
            <Image position={[0, -height * 1.5, 2.5]} scale={[1.5, 3, 1]} url={PSG} />
            <Image position={[0, -height * 2 - height / 4, 0]} scale={[width, height / 2, 1]} url={SB29} /> */}
        </group>
    );
}

const ScoreBoard = () => {
    return (
        <div className="videoContainer">
            <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
                <Suspense fallback={null}>
                    <ScrollControls damping={4} pages={3}>
                        <Scroll>
                            <Images />
                        </Scroll>
                        <Scroll html>
                            <h1
                                style={{
                                    position: "relative",
                                    left: "118vh",
                                    top: "20vh",
                                    fontSize: "40px",
                                    // writingMode: "vertical-lr",
                                }}
                            >
                                卫冕冠军
                            </h1>
                            <h1
                                style={{
                                    position: "relative",
                                    top: "19vh",
                                    left: "119vh",
                                }}
                            >
                                Defening Champion
                            </h1>
                            <h1
                                style={{
                                    position: "relative",
                                    top: "19vh",
                                    left: "118vh",
                                }}
                            >
                                AC米兰
                            </h1>
                            <h1
                                style={{
                                    position: "relative",
                                    top: "19vh",
                                    left: "118vh",
                                }}
                            >
                                A.C. Milan
                            </h1>
                            <h1
                                style={{
                                    position: "absolute",
                                    top: "110vh",
                                    left: "75vh",
                                    writingMode: "vertical-lr",
                                }}
                            >
                                亚军
                            </h1>
                            <h1
                                style={{
                                    position: "absolute",
                                    top: "112vh",
                                    left: "76vh",
                                    fontSize: "28px",
                                }}
                            >
                                First RunnerUp
                            </h1>
                            <h1
                                style={{
                                    position: "absolute",
                                    top: "110vh",
                                    left: "111vh",
                                    writingMode: "vertical-lr",
                                }}
                            >
                                季军
                            </h1>
                            <h1
                                style={{
                                    position: "absolute",
                                    top: "112vh",
                                    left: "112vh",
                                    fontSize: "28px",
                                }}
                            >
                                Second RunnerUp
                            </h1>
                            <h1
                                style={{
                                    position: "absolute",
                                    top: "150vh",
                                    left: "20vh",
                                    writingMode: "vertical-lr",
                                }}
                            >
                                卫冕金靴
                            </h1>
                            <h1
                                style={{
                                    position: "absolute",
                                    top: "152vh",
                                    left: "28.5vh",
                                    fontSize: "28px",
                                }}
                            >
                                Golden Boot
                            </h1>
                            <h1
                                style={{
                                    position: "absolute",
                                    top: "164vh",
                                    left: "22vh",
                                    writingMode: "vertical-lr",
                                }}
                            >
                                坎通纳
                            </h1>
                            <h1
                                style={{
                                    position: "absolute",
                                    top: "165vh",
                                    left: "27vh",
                                    fontSize: "28px",
                                }}
                            >
                                Cantona
                            </h1>
                            <h1 style={{ position: "absolute", top: "198.5vh", left: "0.5vw", fontSize: "40vw" }}>
                                home
                            </h1>
                        </Scroll>
                    </ScrollControls>
                    <Preload />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ScoreBoard;

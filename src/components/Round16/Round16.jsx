import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./round16.styles.scss";

import AC from "../../assets/images/AC.png";
import Barcelona from "../../assets/images/Barcelona.png";
import Chelasea from "../../assets/images/Chelsea.png";
import MC from "../../assets/images/MC.png";
import Liverpool from "../../assets/images/Liverpool.png";
import PSG from "../../assets/images/PSG.png";
import CP from "../../assets/images/CP.png";
import RealMadrid from "../../assets/images/RealMadrid.png";
import Arsenal from "../../assets/images/Arsenal.png";
import SB29 from "../../assets/images/SB29.png";
import Villarreal from "../../assets/images/Villarreal_CF.png";
import Bayern from "../../assets/images/Bayern.png";
import MU from "../../assets/images/MU.png";
import Sunderland from "../../assets/images/Sunderland.png";
import InterMilan from "../../assets/images/InterMilan.png";
import NewCastel from "../../assets/images/Newcastle.png";
import Wolverhampton from "../../assets/images/Wolverhampton.png";
import Lazio from "../../assets/images/Lazio.png";
import Aston_Villa from "../../assets/images/Aston_Villa.png";
import Southampton from "../../assets/images/Southampton.png";
import Brighton from "../../assets/images/Brighton.png";
import Brugge from "../../assets/images/Club_Brugge.png";
import Frankfurt from "../../assets/images/Frankfurt.png";
import Birmingham from "../../assets/images/Birmingham.png";
import drawVideo from "../../assets/video/drawVideo.mp4";

import themeMusic from "../../assets/audio/theme.mp3";

const Round16 = () => {
    const [randomArr, setRandomArr] = useState([]);
    const [randomArr2, setRandomArr2] = useState([]);
    const [showRegulation, setShowRegulation] = useState(false);
    const [arr, setArr] = useState([]);
    const [count, setCount] = useState(1);
    const [arr2, setArr2] = useState([]);
    const [count2, setCount2] = useState(1);
    const [flag, setFlag] = useState(true);
    const [flag2, setFlag2] = useState(true);

    const groupA = {
        1: { name: "Real Madrid", img: RealMadrid },
        2: { name: "Club Brugge KV", img: Brugge },
        3: { name: "Chelasea", img: Chelasea },
        4: { name: "Villarreal CF", img: Villarreal },
        5: { name: "Birmingham City F.C.", img: Birmingham },
        6: { name: "Brighton & Hove Albion F.C.", img: Brighton },
        7: { name: "Southampton F.C.", img: Southampton },
        8: { name: "Liverpool F.C.", img: Liverpool },
        9: { name: "Wolverhampton", img: Wolverhampton },
        10: { name: "NewCastel ", img: NewCastel },
        11: { name: "A.C. Milan", img: AC },
        12: { name: "FC Bayern Munich", img: Bayern },
    };
    const groupB = {
        1: { name: "Sunderland A.F.C.", img: Sunderland },
        2: { name: "Manchester United", img: MU },
        3: { name: "Crystal Palace F.C.", img: CP },
        4: { name: "Stade Brestois 29", img: SB29 },
        5: { name: "Paris Saint-Germain F.C.", img: PSG },
        6: { name: "Manchester City", img: MC },
        7: { name: "Eintracht Frankfurt", img: Frankfurt },
        8: { name: "S.S. Lazio", img: Lazio },
        9: { name: "Aston Villa F.C.", img: Aston_Villa },
        10: { name: "FC Barcelona", img: Barcelona },
        11: { name: "Arsenal F.C.", img: Arsenal },
        12: { name: "InterMilan", img: InterMilan },
    };

    const rangeRam = function (range, count) {
        const ramArr = [];
        const result = [];

        for (let i = range[0]; i <= range[1]; i++) {
            ramArr.push(i);
        }

        for (; count > 0; count--) {
            const ram = Math.floor(Math.random() * (ramArr.length - 1));

            result.push(ramArr[ram]);

            ramArr[ram] = ramArr[ramArr.length - 1];
            ramArr.pop();
        }

        return result;
    };
    const getArr = async () => {
        const test = await rangeRam([1, 12], 12);
        setRandomArr(test);
    };
    const getArr2 = async () => {
        const test = await rangeRam([1, 12], 12);
        setRandomArr2(test);
    };

    const scrollAnimate = () => {
        var scroll =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            // IE Fallback, you can even fallback to onscroll
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        var elementsToShow = document.querySelectorAll(".r-match-table-1");

        function loop() {
            elementsToShow.forEach(function (element) {
                if (isElementInViewport(element)) {
                    element.classList.add("scale-in-hor-center");
                } else {
                    element.classList.remove("scale-in-hor-center");
                }
            });

            scroll(loop);
        }

        // Call the loop for the first time
        loop();
        // Helper function from: http://stackoverflow.com/a/7557433/274826
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                (rect.top <= 0 && rect.bottom >= 0) ||
                (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
                (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
            );
        }
    };
    useEffect(() => {
        getArr();
        getArr2();
        scrollAnimate();
    }, []);
    const handleDrawA = () => {
        setCount(count + 1);
        setArr([...arr, count]);
        if (arr) {
            setTimeout(() => {
                setFlag(false);
            }, 5000);
        }
        for (let i = 2; i < 14; i++) {
            if (count === i) {
                var selectedElement = document.querySelector(`.info-${i - 1}`);
                selectedElement.classList.add("whiteBackground");
            }
        }
    };

    const handleResetA = () => {
        setCount(1);
        setArr([]);
        // const newRandom = rangeRam([1, 4], 4);
        // setRandomArr(newRandom);
        getArr();
        // getArr2();
    };

    const handleDrawB = () => {
        setCount2(count2 + 1);
        setArr2([...arr2, count2]);
        if (arr2) {
            setTimeout(() => {
                setFlag2(false);
            }, 5000);
        }
        for (let i = 2; i < 14; i++) {
            if (count2 === i) {
                var selectedElement = document.querySelector(`.info2-${i - 1}`);
                selectedElement.classList.add("whiteBackground");
            }
        }
    };

    const handleResetB = () => {
        setCount2(1);
        setArr2([]);

        getArr2();
    };
    // if (
    //     randomArr[0] === randomArr2[0] ||
    //     randomArr[1] === randomArr2[1] ||
    //     randomArr[2] === randomArr2[2] ||
    //     randomArr[3] === randomArr2[3]
    // ) {
    //     getArr2();
    // }

    const handleShowRegulation = () => {
        setShowRegulation(!showRegulation);
    };
    return (
        <div className="ScoreBoard">
            <ReactAudioPlayer src={themeMusic} autoPlay loop={true} volume={0.3} />
            <h1>2022-2023赛季 84452韭菜杯 第二轮抽签仪式</h1>
            <h2>2022-2023 Season &nbsp;&nbsp;84452 LEEK CUP DRAW CEREMONY ROUND 2</h2>
            <h1>胜者组抽签池</h1>
            <h2>Upper Bracket Round 2</h2>
            <div className="stageContainer-container">
                <div className="stageContainer">
                    <div class="stage">
                        <div class="control">
                            <div class="imgWrap">
                                <div class="img img1">
                                    <img src={groupA[1].img} alt={groupA[1].name} />
                                </div>
                                <div class="img img2">
                                    <img src={groupA[2].img} alt={groupA[2].name} />
                                </div>
                                <div class="img img3">
                                    <img src={groupA[3].img} alt={groupA[3].name} />
                                </div>
                                <div class="img img4">
                                    <img src={groupA[4].img} alt={groupA[4].name} />
                                </div>
                                <div class="img img5">
                                    <img src={groupA[5].img} alt={groupA[5].name} />
                                </div>
                                <div class="img img6">
                                    <img src={groupA[6].img} alt={groupA[6].name} />
                                </div>
                                {/* <div class="img img7">
                                <img src={Southampton} alt="Southampton" />
                            </div>
                            <div class="img img8">
                                <img src={Lazio} alt="Lazio" />
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stageContainer">
                    <div class="stage">
                        <div class="control">
                            <div class="imgWrap">
                                <div class="img img1">
                                    <img src={groupA[7].img} alt={groupA[7].name} />
                                </div>
                                <div class="img img2">
                                    <img src={groupA[8].img} alt={groupA[8].name} />
                                </div>
                                <div class="img img3">
                                    <img src={groupA[9].img} alt={groupA[9].name} />
                                </div>
                                <div class="img img4">
                                    <img src={groupA[10].img} alt={groupA[10].name} />
                                </div>
                                <div class="img img5">
                                    <img src={groupA[11].img} alt={groupA[11].name} />
                                </div>
                                <div class="img img6">
                                    <img src={groupA[12].img} alt={groupA[12].name} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="draw-round2">
                <div className="club-bracket">
                    <h1>1-0 胜者组</h1>
                    <h3>Upper Bracket R2</h3>
                    <div>
                        <img src={groupA[1].img} alt={groupA[1].name} />
                        <img src={groupA[2].img} alt={groupA[2].name} />
                        <img src={groupA[3].img} alt={groupA[3].name} />
                        <img src={groupA[4].img} alt={groupA[4].name} />
                    </div>
                    <div>
                        <img src={groupA[5].img} alt={groupA[5].name} />
                        <img src={groupA[6].img} alt={groupA[6].name} />
                        <img src={groupA[7].img} alt={groupA[7].name} />
                        <img src={groupA[8].img} alt={groupA[8].name} />
                    </div>
                    <div>
                        <img src={groupA[9].img} alt={groupA[9].name} />
                        <img src={groupA[10].img} alt={groupA[10].name} />
                        <img src={groupA[11].img} alt={groupA[11].name} />
                        <img src={groupA[12].img} alt={groupA[12].name} />
                    </div>
                </div>
                {arr[0] === 1 ? (
                    flag ? (
                        <video controls={false} autoPlay muted className="videoContainer" style={{ top: "30%" }}>
                            <source src={drawVideo} type="video/mp4"></source>
                        </video>
                    ) : null
                ) : null}
                <div className="r-match-table">
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info-1">
                            <div>
                                {arr.includes(2) ? (
                                    randomArr[0] ? (
                                        <img src={groupA[randomArr[0]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr.includes(2) ? (randomArr[0] ? groupA[randomArr[0]].name : null) : null}</div>
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-1-info info-2">
                            <div>
                                {arr.includes(3) ? (
                                    randomArr[1] ? (
                                        <img src={groupA[randomArr[1]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr.includes(3) ? (randomArr[1] ? groupA[randomArr[1]].name : null) : null}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info-3">
                            <div>
                                {arr.includes(4) ? (
                                    randomArr[2] ? (
                                        <img src={groupA[randomArr[2]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr.includes(4) ? (randomArr[2] ? groupA[randomArr[2]].name : null) : null}</div>
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-1-info info-4">
                            <div>
                                {arr.includes(5) ? (
                                    randomArr[3] ? (
                                        <img src={groupA[randomArr[3]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr.includes(5) ? (randomArr[3] ? groupA[randomArr[3]].name : null) : null}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info-5">
                            <div>
                                {arr.includes(6) ? (
                                    randomArr[4] ? (
                                        <img src={groupA[randomArr[4]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr.includes(6) ? (randomArr[4] ? groupA[randomArr[4]].name : null) : null}</div>
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-1-info info-6">
                            <div>
                                {arr.includes(7) ? (
                                    randomArr[5] ? (
                                        <img src={groupA[randomArr[5]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr.includes(7) ? (randomArr[5] ? groupA[randomArr[5]].name : null) : null}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info-7">
                            <div>
                                {arr.includes(8) ? (
                                    randomArr[6] ? (
                                        <img src={groupA[randomArr[6]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr.includes(8) ? (randomArr[6] ? groupA[randomArr[6]].name : null) : null}</div>
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-1-info info-8">
                            <div>
                                {arr.includes(9) ? (
                                    randomArr[7] ? (
                                        <img src={groupA[randomArr[7]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr.includes(9) ? (randomArr[7] ? groupA[randomArr[7]].name : null) : null}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info-9">
                            <div>
                                {arr.includes(10) ? (
                                    randomArr[8] ? (
                                        <img src={groupA[randomArr[8]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr.includes(10) ? (randomArr[8] ? groupA[randomArr[8]].name : null) : null}</div>
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-1-info info-10">
                            <div>
                                {arr.includes(11) ? (
                                    randomArr[7] ? (
                                        <img src={groupA[randomArr[9]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr.includes(11) ? (randomArr[9] ? groupA[randomArr[9]].name : null) : null}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info-11">
                            <div>
                                {arr.includes(12) ? (
                                    randomArr[10] ? (
                                        <img src={groupA[randomArr[10]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr.includes(12) ? (randomArr[10] ? groupA[randomArr[10]].name : null) : null}</div>
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-1-info info-12">
                            <div>
                                {arr.includes(13) ? (
                                    randomArr[11] ? (
                                        <img src={groupA[randomArr[11]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr.includes(13) ? (randomArr[11] ? groupA[randomArr[11]].name : null) : null}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ScoreBoard-button-container">
                {/* <button className="drawButton" onClick={handleShowRegulation}>
                    {showRegulation ? "收起" : "抽签规则"}
                    <br /> {showRegulation ? "Hide" : "Draw Regulation"}
                </button> */}
                <button className="drawButton" onClick={handleDrawA}>
                    抽签
                    <br />
                    Draw
                </button>
                <button className="drawButton" onClick={handleResetA}>
                    重新抽签
                    <br /> Redraw
                </button>
            </div>

            <h1>败者组抽签池</h1>
            <h2>Lower Bracket Round 2</h2>
            <div className="stageContainer-container">
                <div className="stageContainer">
                    <div class="stage">
                        <div class="control">
                            <div class="imgWrap">
                                <div class="img img1">
                                    <img src={groupB[1].img} alt={groupB[1].name} />
                                </div>
                                <div class="img img2">
                                    <img src={groupB[2].img} alt={groupB[2].name} />
                                </div>
                                <div class="img img3">
                                    <img src={groupB[3].img} alt={groupB[3].name} />
                                </div>
                                <div class="img img4">
                                    <img src={groupB[4].img} alt={groupA[4].name} />
                                </div>
                                <div class="img img5">
                                    <img src={groupB[5].img} alt={groupB[5].name} />
                                </div>
                                <div class="img img6">
                                    <img src={groupB[6].img} alt={groupB[6].name} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stageContainer">
                    <div class="stage">
                        <div class="control">
                            <div class="imgWrap">
                                <div class="img img1">
                                    <img src={groupB[7].img} alt={groupB[7].name} />
                                </div>
                                <div class="img img2">
                                    <img src={groupB[8].img} alt={groupB[8].name} />
                                </div>
                                <div class="img img3">
                                    <img src={groupB[9].img} alt={groupB[9].name} />
                                </div>
                                <div class="img img4">
                                    <img src={groupB[10].img} alt={groupB[10].name} />
                                </div>
                                <div class="img img5">
                                    <img src={groupB[11].img} alt={groupB[11].name} />
                                </div>
                                <div class="img img6">
                                    <img src={groupB[12].img} alt={groupB[12].name} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="draw-round2">
                <div className="club-bracket">
                    <h1>0-1 败者组</h1>
                    <h3>Lower Bracket R2</h3>
                    <div>
                        <img src={groupB[1].img} alt={groupB[1].name} />
                        <img src={groupB[2].img} alt={groupB[2].name} />
                        <img src={groupB[3].img} alt={groupB[3].name} />
                        <img src={groupB[4].img} alt={groupB[4].name} />
                    </div>
                    <div>
                        <img src={groupB[5].img} alt={groupB[5].name} />
                        <img src={groupB[6].img} alt={groupB[6].name} />
                        <img src={groupB[7].img} alt={groupB[7].name} />
                        <img src={groupB[8].img} alt={groupB[8].name} />
                    </div>
                    <div>
                        <img src={groupB[9].img} alt={groupB[9].name} />
                        <img src={groupB[10].img} alt={groupB[10].name} />
                        <img src={groupB[11].img} alt={groupB[11].name} />
                        <img src={groupB[12].img} alt={groupB[12].name} />
                    </div>
                </div>
                {arr2[0] === 1 ? (
                    flag2 ? (
                        <video controls={false} autoPlay muted className="videoContainer" style={{ top: "80%" }}>
                            <source src={drawVideo} type="video/mp4"></source>
                        </video>
                    ) : null
                ) : null}
                <div className="r-match-table">
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info2-1">
                            <div>
                                {arr2.includes(2) ? (
                                    randomArr2[0] ? (
                                        <img src={groupB[randomArr2[0]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr2.includes(2) ? (randomArr2[0] ? groupB[randomArr2[0]].name : null) : null}</div>
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-1-info info2-2">
                            <div>
                                {arr2.includes(3) ? (
                                    randomArr2[1] ? (
                                        <img src={groupB[randomArr2[1]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr2.includes(3) ? (randomArr2[1] ? groupB[randomArr2[1]].name : null) : null}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info2-3">
                            <div>
                                {arr2.includes(4) ? (
                                    randomArr2[2] ? (
                                        <img src={groupB[randomArr2[2]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr2.includes(4) ? (randomArr2[2] ? groupB[randomArr2[2]].name : null) : null}</div>
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-1-info info2-4">
                            <div>
                                {arr2.includes(5) ? (
                                    randomArr2[3] ? (
                                        <img src={groupB[randomArr2[3]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr2.includes(5) ? (randomArr2[3] ? groupB[randomArr2[3]].name : null) : null}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info2-5">
                            <div>
                                {arr2.includes(6) ? (
                                    randomArr2[4] ? (
                                        <img src={groupB[randomArr2[4]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr2.includes(6) ? (randomArr2[4] ? groupB[randomArr2[4]].name : null) : null}</div>
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-1-info info2-6">
                            <div>
                                {arr2.includes(7) ? (
                                    randomArr2[5] ? (
                                        <img src={groupB[randomArr2[5]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr2.includes(7) ? (randomArr2[5] ? groupB[randomArr2[5]].name : null) : null}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info2-7">
                            <div>
                                {arr2.includes(8) ? (
                                    randomArr2[6] ? (
                                        <img src={groupB[randomArr2[6]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr2.includes(8) ? (randomArr2[6] ? groupB[randomArr2[6]].name : null) : null}</div>
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-1-info info2-8">
                            <div>
                                {arr2.includes(9) ? (
                                    randomArr[7] ? (
                                        <img src={groupB[randomArr2[7]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr2.includes(9) ? (randomArr2[7] ? groupB[randomArr2[7]].name : null) : null}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info2-9">
                            <div>
                                {arr2.includes(10) ? (
                                    randomArr[8] ? (
                                        <img src={groupB[randomArr2[8]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr2.includes(10) ? (randomArr2[8] ? groupB[randomArr2[8]].name : null) : null}</div>
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-1-info info2-10">
                            <div>
                                {arr2.includes(11) ? (
                                    randomArr2[7] ? (
                                        <img src={groupB[randomArr2[9]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>{arr2.includes(11) ? (randomArr2[9] ? groupB[randomArr2[9]].name : null) : null}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info2-11">
                            <div>
                                {arr2.includes(12) ? (
                                    randomArr2[10] ? (
                                        <img src={groupB[randomArr2[10]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>
                                {arr2.includes(12) ? (randomArr2[10] ? groupB[randomArr2[10]].name : null) : null}
                            </div>
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-1-info info2-12">
                            <div>
                                {arr2.includes(13) ? (
                                    randomArr2[11] ? (
                                        <img src={groupB[randomArr2[11]].img} alt="logo" />
                                    ) : null
                                ) : null}
                            </div>
                            <div>
                                {arr2.includes(13) ? (randomArr2[11] ? groupB[randomArr2[11]].name : null) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ScoreBoard-button-container">
                {/* <button className="drawButton" onClick={handleShowRegulation}>
                    {showRegulation ? "收起" : "抽签规则"}
                    <br /> {showRegulation ? "Hide" : "Draw Regulation"}
                </button> */}
                <button className="drawButton" onClick={handleDrawB}>
                    抽签
                    <br />
                    Draw
                </button>
                <button className="drawButton" onClick={handleResetB}>
                    重新抽签
                    <br /> Redraw
                </button>
            </div>
            {showRegulation ? (
                <div className="regulations">
                    <h1 style={{ textAlign: "center" }}>抽签规则</h1>
                    <h2 style={{ textAlign: "center" }}>Draw Regulations</h2>
                    <h2 style={{ textAlign: "center" }}>淘汰赛抽签规则遵循UEFA 2022/23欧冠最新抽签规则</h2>
                    <h3 style={{ textAlign: "center" }}>
                        The draw respected the following principles, in accordance with the 2022/23 UEFA Champions
                        League Regulations.
                    </h3>
                    <h3 style={{ textAlign: "center" }}>
                        详情请参考，Source: https://www.uefa.com/uefachampionsleague/draws/{" "}
                    </h3>
                    <br />
                    <h2>1. 同小组规避，即各小组第一只能抽取其他小组第二</h2>
                    <h3>1. Group winners were drawn against runners-up from a different group.</h3>
                    <h2>2. 抽取的小组第二率先踢主场</h2>
                    <h3>2. The runners-up play the first leg at home.</h3>
                    <h2>
                        3. 不再有客场进球优势规则,
                        若两回合比分相同，则进行2个15分钟的加时赛定胜负，若加时赛完毕比分仍相同则进行点球决胜负，胜者进入淘汰赛下一轮
                    </h2>
                    <h3>
                        3. No more Champion League away goals rule. If the aggregate-goal score after two legs is tied,
                        there will be two 15-minute periods of extra time. And if no further goals are scored during
                        extra time, a penalty-kick shootout will take place to determine which team advances.
                    </h3>
                    <h2>4. 结合韭菜杯实际情况，同协会规避原则不适用</h2>
                    <h3>
                        4. According to the Leek Cup actual scenario, 'Clubs from the same association could not be
                        drawn against each other' regulation will not be applied.
                    </h3>
                    <h2 style={{ color: "red" }}>5. 本次抽签规则最终解释权归84452所有。</h2>
                    <h3 style={{ color: "red" }}>5. All rights reserved by 84452.</h3>
                </div>
            ) : null}

            {/* <div className="wrapper">
                <div className="table-container">
                    <div className="tb1-1">Logo</div>
                    <div className="line1"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1"></div>
                    <div className="tb1-1">logo</div>
                    <div className="tb1-2">A1</div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div className="tb1-2">E1</div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div className="line1"></div>
                    <div className="tb1-1">
                        {randomArr[0] ? <img src={groupA[randomArr[0]].img} alt="a-1" /> : null}
                    </div>
                    <div className="line1"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1"></div>
                    <div className="tb1-1">
                        {randomArr[2] ? <img src={groupA[randomArr[2]].img} alt="a-2" /> : null}
                    </div>
                    <div className="line1 line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>

                    <div className="tb1-2">{randomArr[0] ? groupA[randomArr[0]].name : null}</div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div className="tb1-2">{randomArr[2] ? groupA[randomArr[2]].name : null}</div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="tb1-1">Logo</div>
                    <div className="line1-column line1"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div className="line1"></div>
                    <div className="tb1-1">logo</div>
                    <div className="tb1-2">A2</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="tb1-2">E2</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div className="line1"></div>
                    <div className="tb1-1">Logo</div>
                    <div className="line1"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1"></div>
                    <div className="tb1-1">Logo</div>
                    <div className="line1 line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div className="tb1-2">TBD-Q1</div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div className="tb1-2">TBD-Q3</div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="tb1-1">Logo</div>
                    <div className="line1"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1"></div>
                    <div className="tb1-1">logo</div>
                    <div className="tb1-2">B1</div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div className="tb1-2">F1</div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div className="line1"></div>
                    <div className="tb1-1">
                        {randomArr2[0] ? <img src={groupB[randomArr2[0]].img} alt="b-1" /> : null}
                    </div>
                    <div className="line1-column line1"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div className="line1"></div>
                    <div className="tb1-1">
                        {randomArr2[2] ? <img src={groupB[randomArr2[2]].img} alt="b-3" /> : null}
                    </div>
                    <div className="line1 line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div className="tb1-2">{randomArr2[0] ? groupB[randomArr2[0]].name : null}</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="tb1-2">{randomArr2[2] ? groupB[randomArr2[2]].name : null}</div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="tb1-1">Logo</div>
                    <div className="line1-column line1"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div className="line1"></div>
                    <div className="tb1-1">logo</div>
                    <div className="tb1-2">B2</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="tb1-2">F2</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div className="line1"></div>
                    <div className="tb1-1">Logo</div>
                    <div className="line1"></div>
                    <div className="line1"></div>
                    <div className="tb1-1">Logo</div>
                    <div className="line1 line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div className="tb1-2">final</div>
                    <div></div>
                    <div></div>
                    <div className="tb1-2">final2</div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="tb1-1">Logo</div>
                    <div className="line1"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1"></div>
                    <div className="tb1-1">Logo</div>
                    <div className="tb1-2">C1</div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div className="tb1-2">G1</div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div className="line1"></div>
                    <div className="tb1-1">
                        {randomArr[1] ? <img src={groupA[randomArr[1]].img} alt="a-3" /> : null}
                    </div>
                    <div className="line1"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1"></div>
                    <div className="tb1-1">
                        {randomArr[3] ? <img src={groupA[randomArr[3]].img} alt="a-4" /> : null}
                    </div>
                    <div className="line1 line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div className="tb1-2">{randomArr[1] ? groupA[randomArr[1]].name : null}</div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div className="tb1-2">{randomArr[3] ? groupA[randomArr[3]].name : null}</div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="tb1-1">Logo</div>
                    <div className="line1 line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div className="line1"></div>
                    <div className="tb1-1">Logo</div>
                    <div className="tb1-2">C2</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="tb1-2">G2</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div className="line1"></div>
                    <div className="tb1-1">logo</div>
                    <div className="line1 line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div className="line1"></div>
                    <div className="tb1-1">logo</div>
                    <div className="line1 line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div className="tb1-2">TBD-Q2</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="tb1-2">TBD-Q4</div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="tb1-1">Logo</div>
                    <div className="line1"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1"></div>
                    <div className="tb1-1">Logo</div>
                    <div className="tb1-2">D1</div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div className="tb1-2">H1</div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div className="line1"></div>
                    <div className="tb1-1">
                        {randomArr2[1] ? <img src={groupB[randomArr2[1]].img} alt="b-2" /> : null}
                    </div>
                    <div className="line1 line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div className="line1"></div>
                    <div className="tb1-1">
                        {randomArr2[3] ? <img src={groupB[randomArr2[3]].img} alt="b-4" /> : null}
                    </div>
                    <div className="line1-column line1"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div className="tb1-2">{randomArr2[1] ? groupB[randomArr2[1]].name : null}</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="tb1-2">{randomArr2[3] ? groupB[randomArr2[3]].name : null}</div>
                    <div className="line1-column"></div>
                    <div></div>
                    <div></div>
                    <div className="tb1-1">Logo</div>
                    <div className="line1 line1-column"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="line1-column"></div>
                    <div className="line1"></div>
                    <div className="tb1-1">Logo</div>
                    <div className="tb1-2">D2</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="tb1-2">H2</div>
                </div>
            </div> */}
        </div>
    );
};

export default Round16;

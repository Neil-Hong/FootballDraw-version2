import React, { useEffect, useState } from "react";
import "./round4.styles.scss";

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
import road from "../../assets/images/WinnerRoad.png";

import themeMusic from "../../assets/audio/theme.mp3";

const Round4 = () => {
    const [input, setInput] = useState({
        t1: null,
        t2: null,
        t3: null,
        t4: null,
        t5: null,
        t6: null,
        t7: null,
        t8: null,
        t9: null,
        t10: null,
        t11: null,
        t12: null,
        t13: null,
        t14: null,
        t15: null,
        t16: null,
        t17: null,
        t18: null,
    });
    const groupA = {
        1: { name: "Wolverhampton Wanderers F.C.", img: Wolverhampton },
        2: { name: "Villarreal CF", img: Villarreal },
        3: { name: "FC Bayern Munich", img: Bayern },
        4: { name: "Aston Villa F.C.", img: Aston_Villa },
        5: { name: "Arsenal F.C.", img: Arsenal },
        6: { name: "Sunderland A.F.C.", img: Sunderland },
    };
    const groupB = {
        1: { name: "Liverpool F.C.", img: Liverpool, goals: input.t1 },
        2: { name: "Manchester United F.C.", img: MU },
        3: { name: "Paris Saint-Germain F.C.", img: PSG },
        4: { name: "S.S. Lazio", img: Lazio },
        5: { name: "Brighton & Hove Albion F.C.", img: Brighton },
        6: { name: "FC Barcelona", img: Barcelona },
        7: { name: "A.C. Milan", img: AC },
        8: { name: "Crystal Palace F.C.", img: CP },
        9: { name: "NewCastel ", img: NewCastel },
        10: { name: "Chelasea", img: Chelasea },
        11: { name: "Manchester City", img: MC },
        12: { name: "Birmingham City F.C.", img: Birmingham },
        13: { name: "Club Brugge KV", img: Brugge },
        14: { name: "Stade Brestois 29", img: SB29 },
        15: { name: "Southampton F.C.", img: Southampton },
        16: { name: "Inter Milan", img: InterMilan },
        17: { name: "Eintracht Frankfurt", img: Frankfurt },
        18: { name: "Real Madrid", img: RealMadrid },
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setInput({ ...input, [e.target.name]: value });
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
        scrollAnimate();
    }, []);
    if (input.t1 && input.t2) {
        if (input.t1 > input.t2) {
            document.querySelector(".info2-1").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-1").classList.remove("greenBackground");
        }
        if (input.t2 > input.t1) {
            document.querySelector(".info2-2").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-2").classList.remove("greenBackground");
        }
    }
    if (input.t3 && input.t4) {
        if (input.t3 > input.t4) {
            document.querySelector(".info2-3").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-3").classList.remove("greenBackground");
        }
        if (input.t4 > input.t3) {
            document.querySelector(".info2-4").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-4").classList.remove("greenBackground");
        }
    }
    if (input.t5 && input.t6) {
        if (input.t5 > input.t6) {
            document.querySelector(".info2-5").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-5").classList.remove("greenBackground");
        }
        if (input.t6 > input.t5) {
            document.querySelector(".info2-6").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-6").classList.remove("greenBackground");
        }
    }
    if (input.t7 && input.t8) {
        if (input.t7 > input.t8) {
            document.querySelector(".info2-7").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-7").classList.remove("greenBackground");
        }
        if (input.t8 > input.t7) {
            document.querySelector(".info2-8").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-8").classList.remove("greenBackground");
        }
    }
    if (input.t9 && input.t10) {
        if (input.t9 > input.t10) {
            document.querySelector(".info2-9").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-9").classList.remove("greenBackground");
        }
        if (input.t10 > input.t9) {
            document.querySelector(".info2-10").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-10").classList.remove("greenBackground");
        }
    }
    if (input.t11 && input.t12) {
        if (input.t11 > input.t12) {
            document.querySelector(".info2-11").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-11").classList.remove("greenBackground");
        }
        if (input.t12 > input.t11) {
            document.querySelector(".info2-12").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-12").classList.remove("greenBackground");
        }
    }
    if (input.t13 && input.t14) {
        if (input.t13 > input.t14) {
            document.querySelector(".info2-13").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-13").classList.remove("greenBackground");
        }
        if (input.t14 > input.t13) {
            document.querySelector(".info2-14").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-14").classList.remove("greenBackground");
        }
    }
    if (input.t15 && input.t16) {
        if (input.t15 > input.t16) {
            document.querySelector(".info2-15").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-15").classList.remove("greenBackground");
        }
        if (input.t16 > input.t15) {
            document.querySelector(".info2-16").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-16").classList.remove("greenBackground");
        }
    }
    if (input.t17 && input.t18) {
        if (input.t17 > input.t18) {
            document.querySelector(".info2-17").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-17").classList.remove("greenBackground");
        }
        if (input.t18 > input.t17) {
            document.querySelector(".info2-18").classList.add("greenBackground");
        } else {
            document.querySelector(".info2-18").classList.remove("greenBackground");
        }
    }

    return (
        <div className="ScoreBoard">
            <h1>2022-2023赛季 84452韭菜杯 第四轮</h1>
            <h2>2022-2023 Season &nbsp;&nbsp;84452 LEEK CUP DRAW ROUND 4</h2>
            <img src={road} alt="road" />

            <div className="draw-round2-4" style={{ marginTop: "40px" }}>
                <div className="club-bracket" style={{ backgroundColor: "green" }}>
                    <h1>晋级池</h1>
                    <h2>Playoff Bracket Round 4</h2>
                    <div>
                        <img src={groupA[1].img} alt={groupA[1].name} />
                        <img src={groupA[2].img} alt={groupA[2].name} />
                        <img src={groupA[3].img} alt={groupA[3].name} />
                    </div>
                </div>
                <div className="club-bracket" style={{ backgroundColor: "red" }}>
                    <h1>淘汰池</h1>
                    <h2>Eliminated Bracket Round 4</h2>
                    <div>
                        <img src={groupA[4].img} alt={groupA[4].name} />
                        <img src={groupA[5].img} alt={groupA[5].name} />
                        <img src={groupA[6].img} alt={groupA[6].name} />
                    </div>
                </div>
            </div>
            <div className="ScoreBoard-button-container">
                <a className="drawButton" href={"/stats"}>
                    技术统计
                    <br />
                    Stats
                </a>
            </div>
            <h1>第四轮对阵</h1>
            <h2>Round 4 Match Table</h2>
            <div className="stageContainer-container">
                <div className="stageContainer4">
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
                                <div class="img img7">
                                    <img src={groupB[7].img} alt={groupB[7].name} />
                                </div>
                                <div class="img img8">
                                    <img src={groupB[8].img} alt={groupB[8].name} />
                                </div>
                                <div class="img img9">
                                    <img src={groupB[9].img} alt={groupB[9].name} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stageContainer4">
                    <div class="stage">
                        <div class="control">
                            <div class="imgWrap">
                                <div class="img img1">
                                    <img src={groupB[10].img} alt={groupB[10].name} />
                                </div>
                                <div class="img img2">
                                    <img src={groupB[11].img} alt={groupB[11].name} />
                                </div>
                                <div class="img img3">
                                    <img src={groupB[12].img} alt={groupB[12].name} />
                                </div>
                                <div class="img img4">
                                    <img src={groupB[13].img} alt={groupB[13].name} />
                                </div>
                                <div class="img img5">
                                    <img src={groupB[14].img} alt={groupB[14].name} />
                                </div>
                                <div class="img img6">
                                    <img src={groupB[15].img} alt={groupB[15].name} />
                                </div>
                                <div class="img img7">
                                    <img src={groupB[16].img} alt={groupB[16].name} />
                                </div>
                                <div class="img img8">
                                    <img src={groupB[17].img} alt={groupB[17].name} />
                                </div>
                                <div class="img img9">
                                    <img src={groupB[18].img} alt={groupB[18].name} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="draw-round2-4">
                <div className="r-match-table">
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info2-1">
                            <div>
                                <img src={groupB[1].img} alt="m1" />
                            </div>
                            <div>{groupB[1].name}</div>
                            <input type="number" name="t1" value={input.t1} onChange={handleChange} />
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-2-info info2-2">
                            <input type="number" name="t2" value={input.t2} onChange={handleChange} />
                            <div>
                                <img src={groupB[2].img} alt="m2" />
                            </div>
                            <div>{groupB[2].name}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info2-3">
                            <div>
                                <img src={groupB[3].img} alt="m3" />
                            </div>
                            <div>{groupB[3].name}</div>
                            <input type="number" name="t3" value={input.t3} onChange={handleChange} />
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-2-info info2-4">
                            <input type="number" name="t4" value={input.t4} onChange={handleChange} />
                            <div>
                                <img src={groupB[4].img} alt="m4" />
                            </div>
                            <div>{groupB[4].name}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info2-5">
                            <div>
                                <img src={groupB[5].img} alt="m5" />
                            </div>
                            <div>{groupB[5].name}</div>
                            <input type="number" name="t5" value={input.t5} onChange={handleChange} />
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-2-info info2-6">
                            <input type="number" name="t6" value={input.t6} onChange={handleChange} />
                            <div>
                                <img src={groupB[6].img} alt="m6" />
                            </div>
                            <div>{groupB[6].name}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info2-7">
                            <div>
                                <img src={groupB[7].img} alt="m7" />
                            </div>
                            <div>{groupB[7].name}</div>
                            <input type="number" name="t7" value={input.t7} onChange={handleChange} />
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-2-info info2-8">
                            <input type="number" name="t8" value={input.t8} onChange={handleChange} />
                            <div>
                                <img src={groupB[8].img} alt="m8" />
                            </div>
                            <div>{groupB[8].name}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info2-9">
                            <div>
                                <img src={groupB[9].img} alt="m9" />
                            </div>
                            <div>{groupB[9].name}</div>
                            <input type="number" name="t9" value={input.t9} onChange={handleChange} />
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-2-info info2-10">
                            <input type="number" name="t10" value={input.t10} onChange={handleChange} />
                            <div>
                                <img src={groupB[10].img} alt="m10" />
                            </div>
                            <div>{groupB[10].name}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info2-11">
                            <div>
                                <img src={groupB[11].img} alt="m11" />
                            </div>
                            <div>{groupB[11].name}</div>
                            <input type="number" name="t11" value={input.t11} onChange={handleChange} />
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-2-info info2-12">
                            <input type="number" name="t12" value={input.t12} onChange={handleChange} />
                            <div>
                                <img src={groupB[12].img} alt="m12" />
                            </div>
                            <div>{groupB[12].name}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info2-13">
                            <div>
                                <img src={groupB[13].img} alt="m13" />
                            </div>
                            <div>{groupB[13].name}</div>
                            <input type="number" name="t13" value={input.t13} onChange={handleChange} />
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-2-info info2-14">
                            <input type="number" name="t14" value={input.t14} onChange={handleChange} />
                            <div>
                                <img src={groupB[14].img} alt="m14" />
                            </div>
                            <div>{groupB[14].name}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info2-15">
                            <div>
                                <img src={groupB[15].img} alt="m5" />
                            </div>
                            <div>{groupB[15].name}</div>
                            <input type="number" name="t15" value={input.t15} onChange={handleChange} />
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-2-info info2-16">
                            <input type="number" name="t16" value={input.t16} onChange={handleChange} />
                            <div>
                                <img src={groupB[16].img} alt="m16" />
                            </div>
                            <div>{groupB[16].name}</div>
                        </div>
                    </div>
                    <div className="r-match-table-1">
                        <div className="r-match-table-1-info info2-17">
                            <div>
                                <img src={groupB[17].img} alt="m7" />
                            </div>
                            <div>{groupB[17].name}</div>
                            <input type="number" name="t17" value={input.t17} onChange={handleChange} />
                        </div>
                        <div>vs</div>
                        <div className="r-match-table-2-info info2-18">
                            <input type="number" name="t18" value={input.t18} onChange={handleChange} />
                            <div>
                                <img src={groupB[18].img} alt="m18" />
                            </div>
                            <div>{groupB[18].name}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Round4;

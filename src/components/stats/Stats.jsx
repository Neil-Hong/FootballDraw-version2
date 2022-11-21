import React, { useEffect } from "react";
import CountUp from "react-countup";

import "./stats.styles.scss";
import match from "../../assets/images/pitch.svg";
import nets from "../../assets/images/net.svg";
import Lewandowski from "../../assets/images/Lewandowski.jpg";
import Rooney from "../../assets/images/Rooney.png";
import Gullit from "../../assets/images/Gullit.png";
import Dalglish from "../../assets/images/Dalglish.png";
import van_Persie from "../../assets/images/van-Persie.png";
import Gomez from "../../assets/images/Mario-Gomez.png";
import cantona from "../../assets/images/cantona2.png";
import Cruyff from "../../assets/images/Cruyff.png";
import edg from "../../assets/images/edg.png";
import Nedvěd from "../../assets/images/Nedvěd.png";
import ronaldinho from "../../assets/images/ronaldinho.png";
import Saka from "../../assets/images/Saka.jpg";
import De_Bruyne from "../../assets/images/De-Bruyne.png";
import question from "../../assets/images/Question.png";
import Carrasco from "../../assets/images/Carrasco.png";
import Azp from "../../assets/images/azp.png";
import Dias from "../../assets/images/Dias.png";
import Lampard from "../../assets/images/Lampard.png";
import Tchouameni from "../../assets/images/Tchouameni.png";
import Seedorf from "../../assets/images/Seedorf.png";
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
import henry from "../../assets/images/henry.png";
import Crouch from "../../assets/images/Crouch.png";
import Mbappé from "../../assets/images/Mbappé.png";
import road from "../../assets/images/WinnerRoad.png";
import Eusébio from "../../assets/images/Eusébio.png";
import Ronaldo from "../../assets/images/Ronaldo.png";
import Eto from "../../assets/images/Eto.png";
import Antony from "../../assets/images/Antony.png";
import Torres from "../../assets/images/Torres.png";
import Hugo from "../../assets/images/Hugo.png";

const Stats = () => {
    const teams = {
        1: { name: "A.C. Milan", img: AC },
        2: { name: "Manchester City F.C.", img: MC },
        3: { name: "Chelsea F.C.", img: Chelasea },
        4: { name: "Paris Saint-Germain F.C.", img: PSG },
        5: { name: "FC Barcelona", img: Barcelona },
        6: { name: "Liverpool F.C.", img: Liverpool },
        7: { name: "Crystal Palace F.C.", img: CP },
        8: { name: "Sunderland A.F.C.", img: Sunderland },
        9: { name: "Manchester United F.C.", img: MU },
        10: { name: "FC Bayern Munich", img: Bayern },
        11: { name: "Real Madrid CF", img: RealMadrid },
        12: { name: "Arsenal F.C.", img: Arsenal },
        13: { name: "Birmingham City F.C.", img: Birmingham },
        14: { name: "Eintracht Frankfurt", img: Frankfurt },
        15: { name: "Stade Brestois 29", img: SB29 },
        16: { name: "Villarreal CF", img: Villarreal },
        17: { name: "Inter Milan", img: InterMilan },
        18: { name: "Newcastle United", img: NewCastel },
        19: { name: "Wolverhampton Wanderers F.C.", img: Wolverhampton },
        20: { name: "S.S. Lazio", img: Lazio },
        21: { name: "Aston Villa F.C.", img: Aston_Villa },
        22: { name: "Southampton F.C.", img: Southampton },
        23: { name: "Brighton & Hove Albion F.C.", img: Brighton },
        24: { name: "Club Brugge KV", img: Brugge },
    };

    const scrollAnimate = (name) => {
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
        var elementsToShow = document.querySelectorAll(name);

        function loop() {
            elementsToShow.forEach(function (element) {
                if (isElementInViewport(element)) {
                    element.classList.add("scale-up-hor-left");
                } else {
                    element.classList.remove("scale-up-hor-left");
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
        scrollAnimate(".bar");
        scrollAnimate(".playerCard-container");
    }, []);
    return (
        <div className="stats">
            <h1>2022-2023赛季 84452韭菜杯</h1>
            <h2>2022-2023 Season &nbsp;&nbsp;84452 LEEK CUP </h2>
            <h1>技术统计(截至第三轮)</h1>
            <div className="stats-title">
                <h3>Stats</h3>
                <h3>数据来源：工具人（里指导）</h3>
            </div>

            <div className="stats-container">
                <div className="stats-card">
                    <p style={{ textAlign: "start", fontSize: "24px" }}>Matches</p>
                    <div className="stats-card-content">
                        <div style={{ textAlign: "start" }}>
                            <div className="stats-card-content-number">
                                <div style={{ fontSize: "32px" }}>
                                    <CountUp start={0} end={39} duration={2} />
                                </div>
                                <div style={{ lineHeight: "18px" }}>/70</div>
                            </div>
                            <div className="small-content">Matches played</div>
                        </div>
                        <div>
                            <img src={match} alt="matchSvg" />
                        </div>
                    </div>
                    <hr />
                    {/* <div style={{ marginTop: "auto", marginBottom: "auto" }}> */}
                    <div className="bar"></div>
                    {/* </div> */}
                </div>
                <div className="stats-card">
                    <p style={{ textAlign: "start", fontSize: "24px" }}>Goals</p>
                    <div className="stats-card-content">
                        <div style={{ textAlign: "start" }}>
                            <div className="stats-card-content-number">
                                <div style={{ fontSize: "32px" }} id="totalGoals">
                                    <CountUp end={257} duration={2} />
                                </div>
                            </div>
                            <div className="small-content">Total goals</div>
                        </div>
                        <div>
                            <img src={nets} alt="netsSvg" />
                        </div>
                    </div>
                    <hr />
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div>
                            <div style={{ fontSize: "32px", textAlign: "start" }}>
                                <CountUp start={0} end={6.46} duration={2} decimals={2} />
                            </div>
                            <div className="small-content">Goals per match</div>
                        </div>
                        <div>
                            <div style={{ fontSize: "32px", textAlign: "start" }}>
                                <CountUp end={13.66} duration={2} decimals={2} />
                            </div>
                            <div className="small-content">Minutes per goal</div>
                        </div>
                    </div>
                </div>
                <div className="stats-card">
                    <p style={{ textAlign: "start", fontSize: "24px" }}>Assists</p>
                    <div className="stats-card-content">
                        <div style={{ textAlign: "start" }}>
                            <div className="stats-card-content-number">
                                <div style={{ fontSize: "32px" }}>
                                    <CountUp start={0} end={175} duration={2} />
                                </div>
                            </div>
                            <div className="small-content">Total assits</div>
                        </div>
                        <div>
                            <img src={nets} alt="netsSvg" />
                        </div>
                    </div>
                    <hr />
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div>
                            <div style={{ fontSize: "32px", textAlign: "start" }}>
                                <CountUp start={0} end={4.49} duration={2} decimals={2} />
                            </div>
                            <div className="small-content">Assists per match</div>
                        </div>
                        <div>
                            <div style={{ fontSize: "32px", textAlign: "start" }}>
                                <CountUp start={0} end={19.6} duration={2} decimals={1} />
                            </div>
                            <div className="small-content">Minutes per assists</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="stats-player-container">
                <div className="playerCard-container">
                    <div className="goal">&nbsp;&nbsp;Goals</div>
                    <div className="playerCard">
                        <div className="playerCard-row1">1</div>
                        <div className="playerCard-row1-1">
                            <img src={Lewandowski} alt="stat-1" />
                            <div>Lewandowski</div>
                        </div>
                        <div className="playerCard-row1">7</div>
                        <div>2</div>
                        <div className="playerCard-row1-2">
                            <img src={Ronaldo} alt="stat-2" />
                            <div>Ronaldo</div>
                        </div>
                        <div>6</div>
                        <div>2</div>
                        <div className="playerCard-row1-2">
                            <img src={Dalglish} alt="stat-3" />
                            <div>Dalglish</div>
                        </div>
                        <div>6</div>
                        <div>3</div>
                        <div className="playerCard-row1-2">
                            <img src={Eto} alt="stat-4" />
                            <div>Eto'o</div>
                        </div>
                        <div>5</div>
                        <div>3</div>
                        <div className="playerCard-row1-2">
                            <img src={Crouch} alt="stat-4" />
                            <div>Crouch</div>
                        </div>
                        <div>5</div>
                        <div>3</div>
                        <div className="playerCard-row1-2">
                            <img src={Antony} alt="stat-5" />
                            <div>Antony</div>
                        </div>
                        <div>5</div>
                    </div>
                </div>
                <div className="playerCard-container">
                    <div className="goal">&nbsp;&nbsp;Assists</div>
                    <div className="playerCard">
                        <div className="playerCard-row1">1</div>
                        <div className="playerCard-row1-1">
                            <img src={cantona} alt="stat-1" />
                            <div>Cantona</div>
                        </div>
                        <div className="playerCard-row1">7</div>
                        <div>2</div>
                        <div className="playerCard-row1-2">
                            <img src={Cruyff} alt="stat-2" />
                            <div>Cruyff</div>
                        </div>
                        <div>6</div>
                        <div>3</div>
                        <div className="playerCard-row1-2">
                            <img src={edg} alt="stat-3" />
                            <div>Ødegaard</div>
                        </div>
                        <div>4</div>
                        <div>3</div>
                        <div className="playerCard-row1-2">
                            <img src={Nedvěd} alt="stat-4" />
                            <div>Nedvěd</div>
                        </div>
                        <div>4</div>
                        <div>3</div>
                        <div className="playerCard-row1-2">
                            <img src={Torres} alt="stat-4" />
                            <div>Torres</div>
                        </div>
                        <div>4</div>
                        <div>3</div>
                        <div className="playerCard-row1-2">
                            <img src={Hugo} alt="stat-5" />
                            <div>Hugo Sánchez</div>
                        </div>
                        <div>4</div>
                    </div>
                </div>
                <div className="playerCard-container">
                    <div className="goal">&nbsp;&nbsp;Red Cards</div>
                    <div className="playerCard">
                        <div className="playerCard-row1">1</div>
                        <div className="playerCard-row1-1">
                            <img src={De_Bruyne} alt="stat-1" />
                            <div style={{ fontSize: "16px" }}>De Bruyne(2000万) </div>
                        </div>
                        <div className="playerCard-row1">1</div>
                        <div>1</div>
                        <div className="playerCard-row1-2">
                            <img src={Saka} alt="stat-2" />
                            <div>Saka</div>
                        </div>
                        <div>1</div>
                        <div>2</div>
                        <div className="playerCard-row1-2">
                            <img src={question} alt="stat-3" />
                            <div>TBD</div>
                        </div>
                        <div>?</div>
                        <div>2</div>
                        <div className="playerCard-row1-2">
                            <img src={question} alt="stat-4" />
                            <div>TBD</div>
                        </div>
                        <div>?</div>
                        <div>2</div>
                        <div className="playerCard-row1-2">
                            <img src={question} alt="stat-4" />
                            <div>TBD</div>
                        </div>
                        <div>?</div>
                        <div>2</div>
                        <div className="playerCard-row1-2">
                            <img src={question} alt="stat-5" />
                            <div>TBD</div>
                        </div>
                        <div>?</div>
                    </div>
                </div>
                <div className="playerCard-container">
                    <div className="goal">&nbsp;&nbsp;Yellow Cards</div>
                    <div className="playerCard">
                        <div className="playerCard-row1">1</div>
                        <div className="playerCard-row1-1">
                            <img src={Seedorf} alt="stat-1" />
                            <div>Seedorf</div>
                        </div>
                        <div className="playerCard-row1">2</div>
                        <div>1</div>
                        <div className="playerCard-row1-2">
                            <img src={Eusébio} alt="stat-2" />
                            <div>Eusébio</div>
                        </div>
                        <div>2</div>
                        <div>2</div>
                        <div className="playerCard-row1-2">
                            <img src={Lampard} alt="stat-3" />
                            <div>Lampard</div>
                        </div>
                        <div>1</div>
                        <div>2</div>
                        <div className="playerCard-row1-2">
                            <img src={Dias} alt="stat-4" />
                            <div>Dias</div>
                        </div>
                        <div>1</div>
                        <div>2</div>
                        <div className="playerCard-row1-2">
                            <img src={Tchouameni} alt="stat-4" />
                            <div>Tchouameni</div>
                        </div>
                        <div>1</div>
                        <div>2</div>
                        <div className="playerCard-row1-2">
                            <img src={Azp} alt="stat-5" />
                            <div>Azpilicueta</div>
                        </div>
                        <div>1</div>
                    </div>
                </div>
                <div className="playerCard-container">
                    <div className="goal">&nbsp;&nbsp;Club Goals</div>
                    <div className="playerCard">
                        <div className="playerCard-row1">1</div>
                        <div className="playerCard-row1-1">
                            <img src={teams[4].img} alt="stat-1" />
                            <div style={{ fontSize: "18px" }}>{teams[4].name}</div>
                        </div>
                        <div className="playerCard-row1">16</div>
                        <div>2</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[15].img} alt="stat-2" />
                            <div>{teams[15].name}</div>
                        </div>
                        <div>14</div>
                        <div>3</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[1].img} alt="stat-3" />
                            <div style={{ fontSize: "18px" }}>{teams[1].name}</div>
                        </div>
                        <div>13</div>
                        <div>3</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[16].img} alt="stat-4" />
                            <div>{teams[16].name}</div>
                        </div>
                        <div>13</div>
                        <div>3</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[2].img} alt="stat-4" />
                            <div>{teams[2].name}</div>
                        </div>
                        <div>13</div>
                        <div>3</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[22].img} alt="stat-5" />
                            <div>{teams[22].name}</div>
                        </div>
                        <div>13</div>
                    </div>
                </div>
                <div className="playerCard-container">
                    <div className="goal" style={{ fontSize: "26px" }}>
                        &nbsp;&nbsp;Club Goals Conceded(失球)
                    </div>
                    <div className="playerCard">
                        <div className="playerCard-row1">1</div>
                        <div className="playerCard-row1-1">
                            <img src={teams[21].img} alt="stat-1" />
                            <div>{teams[21].name}</div>
                        </div>
                        <div className="playerCard-row1">17</div>
                        <div>1</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[8].img} alt="stat-2" />
                            <div>{teams[8].name}</div>
                        </div>
                        <div>17</div>
                        <div>1</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[12].img} alt="stat-3" />
                            <div>{teams[12].name}</div>
                        </div>
                        <div>17</div>
                        <div>2</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[23].img} alt="stat-4" />
                            <div style={{ fontSize: "18px" }}>{teams[23].name}</div>
                        </div>
                        <div>15</div>
                        <div>3</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[24].img} alt="stat-4" />
                            <div>{teams[24].name}</div>
                        </div>
                        <div>14</div>
                        <div>3</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[20].img} alt="stat-5" />
                            <div>{teams[20].name}</div>
                        </div>
                        <div>14</div>
                    </div>
                </div>
                <div className="playerCard-container">
                    <div className="goal" style={{ fontSize: "20px" }}>
                        &nbsp;&nbsp;Least Club Goals Conceded (最少失球)
                    </div>
                    <div className="playerCard">
                        <div className="playerCard-row1">1</div>
                        <div className="playerCard-row1-1">
                            <img src={teams[10].img} alt="stat-1" />
                            <div style={{ fontSize: "18px" }}>{teams[10].name}</div>
                        </div>
                        <div className="playerCard-row1">2</div>
                        <div>2</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[11].img} alt="stat-2" />
                            <div>{teams[11].name}</div>
                        </div>
                        <div>5</div>
                        <div>3</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[19].img} alt="stat-3" />
                            <div style={{ fontSize: "18px" }}>{teams[19].name}</div>
                        </div>
                        <div>7</div>
                        <div>3</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[18].img} alt="stat-4" />
                            <div>{teams[18].name}</div>
                        </div>
                        <div>7</div>
                        <div>4</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[16].img} alt="stat-4" />
                            <div>{teams[16].name}</div>
                        </div>
                        <div>8</div>
                        <div>4</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[7].img} alt="stat-5" />
                            <div>{teams[7].name}</div>
                        </div>
                        <div>8</div>
                    </div>
                </div>
                <div className="playerCard-container">
                    <div className="goal">&nbsp;&nbsp;Goals Differential(净胜球)</div>
                    <div className="playerCard">
                        <div className="playerCard-row1">1</div>
                        <div className="playerCard-row1-1">
                            <img src={teams[10].img} alt="stat-1" />
                            <div style={{ fontSize: "18px" }}>{teams[10].name}</div>
                        </div>
                        <div className="playerCard-row1">9</div>
                        <div>2</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[4].img} alt="stat-2" />
                            <div>{teams[4].name}</div>
                        </div>
                        <div>6</div>
                        <div>3</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[16].img} alt="stat-3" />
                            <div>{teams[16].name}</div>
                        </div>
                        <div>5</div>
                        <div>4</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[2].img} alt="stat-4" />
                            <div>{teams[2].name}</div>
                        </div>
                        <div>4</div>
                        <div>4</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[19].img} alt="stat-4" />
                            <div style={{ fontSize: "18px" }}>{teams[19].name}</div>
                        </div>
                        <div>4</div>
                        <div>5</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[18].img} alt="stat-5" />
                            <div>{teams[18].name}</div>
                        </div>
                        <div>3</div>
                    </div>
                </div>
                <div className="playerCard-container">
                    <div className="goal">&nbsp;&nbsp;Goals Against(净负球)</div>
                    <div className="playerCard">
                        <div className="playerCard-row1">1</div>
                        <div className="playerCard-row1-1">
                            <img src={teams[8].img} alt="stat-1" />
                            <div style={{ fontSize: "18px" }}>{teams[8].name}</div>
                        </div>
                        <div className="playerCard-row1">-9</div>
                        <div>2</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[3].img} alt="stat-2" />
                            <div>{teams[3].name}</div>
                        </div>
                        <div>-7</div>
                        <div>3</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[21].img} alt="stat-3" />
                            <div style={{ fontSize: "18px" }}>{teams[21].name}</div>
                        </div>
                        <div>-6</div>
                        <div>4</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[23].img} alt="stat-4" />
                            <div style={{ fontSize: "18px" }}>{teams[23].name}</div>
                        </div>
                        <div>-5</div>
                        <div>5</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[12].img} alt="stat-4" />
                            <div>{teams[12].name}</div>
                        </div>
                        <div>-4</div>
                        <div>6</div>
                        <div className="playerCard-row1-2">
                            <img src={teams[20].img} alt="stat-5" />
                            <div>{teams[20].name}</div>
                        </div>
                        <div>-3</div>
                    </div>
                </div>
            </div>
            <div>
                <img src={road} alt="roadMap" />
            </div>
        </div>
    );
};

export default Stats;

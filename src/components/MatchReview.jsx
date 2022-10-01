import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./MatchReview.styles.scss";
import milan from "../assets/images/AC.png";
import cantona from "../assets/images/cantona.jpg";
import gullit from "../assets/images/Gullit.jpg";
import carlos from "../assets/images/carlos.jpg";
import puyol from "../assets/images/Puyol.jpg";
import kounde from "../assets/images/Koundé.jpg";
import essein from "../assets/images/essein.jpg";

import VideoJS from "./video";

const MatchReview = () => {
    const navigate = useNavigate();

    const videoJsOptions = {
        autoplay: "any",
        controls: true,
        preload: "auto",
        responsive: true,
        width: 900,

        sources: [
            {
                src: "/reviewVideo.mp4",
                type: "video/mp4",
            },
        ],
    };

    useEffect(() => {
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
        var elementsToShow = document.querySelectorAll(".cardContainer");

        function loop() {
            elementsToShow.forEach(function (element) {
                if (isElementInViewport(element)) {
                    element.classList.add("is-visible");
                } else {
                    element.classList.remove("is-visible");
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
    }, []);
    return (
        <div className="container">
            <div className="title">
                <div></div>
                <div>
                    <h1>赛事回顾</h1>
                    <h2>Leek Cup Review</h2>
                </div>
                <div>
                    <h3>数据&视频来源: 鱼吧用户M1Nmin</h3>
                    <h3>Source: https://yuba.douyu.com/p/495607051644161807 </h3>
                </div>
            </div>
            {/* <video controls={true} autoPlay style={{ width: "700px", marginLeft: "auto", marginRight: "auto" }}>
                <source src={realMadridDraw} type="video/mp4"></source>
            </video> */}
            <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <VideoJS options={videoJsOptions}></VideoJS>
            </div>

            <div className="cardContainer">
                <div className="content">
                    <div>
                        <h1>卫冕冠军</h1>
                        <h2>Defending Champion</h2>
                    </div>
                    <div>
                        <h1>AC米兰</h1>
                        <h2>Milan</h2>
                    </div>
                </div>
                <img src={milan} alt="milan" />
            </div>
            <div className="statics-container">
                <div className="cardContainer">
                    <div className="goldenBoot">
                        <div className="content">
                            <div>
                                <h1>卫冕金靴</h1>
                                <h2>Golden Boot</h2>
                            </div>
                            <div>
                                <h1>坎通纳</h1>
                                <h2>Cantona</h2>
                            </div>
                            <div>
                                <h1>进球数</h1>
                                <h2>Goals</h2>
                            </div>
                            <div>
                                <h1>11</h1>
                            </div>
                        </div>

                        <img src={cantona} alt="cantona" />
                    </div>
                </div>

                <a className="btn" href="/draw">
                    开始抽签
                    <br />
                    Start
                </a>
                <div className="cardContainer">
                    <div className="goldenBoot">
                        <div className="content">
                            <div>
                                <h1>卫冕助攻王</h1>
                                <h2>Best Assists</h2>
                            </div>
                            <div>
                                <h1>古力特</h1>
                                <h2>Gullit</h2>
                            </div>
                            <div>
                                <h1>助攻数</h1>
                                <h2>Assists</h2>
                            </div>
                            <div>
                                <h1>7</h1>
                            </div>
                        </div>
                        <img src={gullit} alt="gullit" />
                    </div>
                </div>
            </div>
            <div className="cardContainer">
                <div className="yellowCard">
                    <div className="content">
                        <div>
                            <h1>卫冕脏王</h1>
                            <h2>Fouls King</h2>
                        </div>
                        <div>
                            <h2>排名不分先后</h2>
                        </div>
                        <div className="cardTotals">
                            <div>
                                <h1>黄牌数</h1>
                                <h2>Yellow Cards</h2>
                            </div>
                            <div>
                                <h1>3</h1>
                            </div>
                        </div>
                        <div className="players">
                            <div>
                                <h1>埃辛</h1>
                                <h2>Essien</h2>
                                <img src={essein} alt="essein" />
                            </div>
                            <div>
                                <h1>普约尔</h1>
                                <h2>Puyol</h2>
                                <img src={puyol} alt="puyol" />
                            </div>
                            <div>
                                <h1>孔德</h1>
                                <h2>Koundé</h2>
                                <img src={kounde} alt="Koundé" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cardContainer">
                <div className="redCard">
                    <div className="content">
                        <div>
                            <h1>卫冕脏王之王</h1>
                            <h2>Fouls God</h2>
                        </div>
                        <div>
                            <h1>卡洛斯</h1>
                            <h2>Carlos</h2>
                        </div>
                        <div>
                            <h1>红牌数</h1>
                            <h2>Red Cards</h2>
                        </div>
                        <div>
                            <h1>2</h1>
                        </div>
                    </div>
                    <img src={carlos} alt="carlos" />
                </div>
            </div>
            <div style={{ height: "150px" }}></div>
        </div>
    );
};

export default MatchReview;

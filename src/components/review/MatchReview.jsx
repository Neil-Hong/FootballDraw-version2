import React, { useState } from "react";

import "./MatchReview.styles.scss";
import VideoJS from "../video";
import ScoreBoard from "../score/ScoreBoard";

const MatchReview = () => {
    const [flag, setFlag] = useState(false);

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
    const handleReview = () => {
        setFlag(!flag);
    };
    return (
        <div className="container">
            <h1>2022-2023赛季 84452韭菜杯抽签仪式</h1>
            <h2>2022-2023 Season &nbsp;&nbsp;84452 LEEK CUP DRAW CEREMONY</h2>
            <div className="title">
                <div></div>
                <div>
                    <h1>赛事回顾</h1>
                    <h2>Leek Cup Review</h2>
                </div>
                <div>
                    <h3>
                        数据&视频来源: 鱼吧用户M1Nmin <br />
                        若侵删
                    </h3>
                    <h3>Source: https://yuba.douyu.com/p/495607051644161807 </h3>
                </div>
            </div>
            <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <VideoJS options={videoJsOptions}></VideoJS>
            </div>

            <div className="statics-container">
                <a className="btn" href="/draw">
                    开始抽签
                    <br />
                    Start
                </a>
                <a className="btn" href="/round16">
                    进入第二轮
                    <br />
                    Round 2
                </a>
                <a className="btn" href="/round3">
                    进入第三轮
                    <br />
                    Round 3
                </a>
                <a className="btn" href="/stats">
                    技术统计
                    <br />
                    Stats
                </a>
                <a className="btn" href="/round4">
                    进入第四轮
                    <br />
                    Round 4
                </a>
                <button className="btn" onClick={handleReview}>
                    赛事回顾
                    <br />
                    Match Review
                </button>
            </div>
            {flag ? <ScoreBoard /> : null}
            <div style={{ height: "150px" }}></div>
        </div>
    );
};

export default MatchReview;

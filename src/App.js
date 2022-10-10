import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.styles.scss";
import MatchReview from "./components/review/MatchReview";
import Draw from "./components/draw/Draw";
import ScoreBoard from "./components/score/ScoreBoard";

function App() {
    return (
        <div className="App">
            <h1>2022-2023赛季 84452韭菜杯抽签仪式</h1>
            <h2>2022-2023 Season &nbsp;&nbsp;84452 LEEK CUP DRAW CEREMONY</h2>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MatchReview />} />
                    <Route path="/draw" element={<Draw />} />
                    <Route path="/score" element={<ScoreBoard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.styles.scss";
import MatchReview from "./components/review/MatchReview";
import Draw from "./components/draw/Draw";
import ScoreBoard from "./components/score/ScoreBoard";
import Entrance from "./components/entrance/Entrance";
import Round16 from "./components/Round16/Round16";
import Draw2 from "./components/draw/Draw2";
import Round3 from "./components/round3/Round3";
import Stats from "./components/stats/Stats";
import Test from "./Test";
import Round4 from "./components/round4/Round4";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/entrance" element={<MatchReview />} />
                    <Route path="/draw" element={<Draw2 />} />
                    {/* <Route path="/draws" element={<Draw />} /> */}
                    <Route path="/round16" element={<Round16 />} />
                    <Route path="/round3" element={<Round3 />} />
                    <Route path="/round4" element={<Round4 />} />
                    <Route path="/stats" element={<Stats />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/" element={<Entrance />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

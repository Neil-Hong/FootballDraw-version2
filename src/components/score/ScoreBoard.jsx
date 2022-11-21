import React, { Suspense } from "react";
import ScoreBoardContent from "./ScoreBoardContent";

import AC from "../../assets/images/AC.png";
import MC from "../../assets/images/MC.png";
import cantona from "../../assets/images/cantona.jpg";
import gullit from "../../assets/images/Gullit.jpg";
import essien from "../../assets/images/essein.jpg";
import carlos from "../../assets/images/carlos.jpg";
import puyol from "../../assets/images/Puyol.jpg";
import kounde from "../../assets/images/Koundé.jpg";

const ScoreBoard = () => {
    const images = [
        // Front
        {
            position: [0, 0, 1.5],
            rotation: [0, 0, 0],
            url: AC,
            title: "卫冕冠军",
            Etitle: "Defending Champion",
            name: "AC米兰",
            Ename: "A.C. Milan",
            score: null,
            Escore: null,
            number: null,
        },
        // Back
        {
            position: [1, 0, 1],
            rotation: [0, 0, 0],
            url: MC,
            title: "亚军",
            Etitle: "Second Runner-up",
            name: "曼城",
            Ename: "Manchester City F.C.",
            score: null,
            Escore: null,
            number: null,
        },
        // { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) },
        // // Left

        {
            position: [-2.15, 0, 1.5],
            rotation: [0, Math.PI / 2.5, 0],
            url: cantona,
            title: "卫冕金靴",
            Etitle: "Golden Boot",
            name: "坎通纳",
            Ename: "Cantona",
            score: "进球数",
            Escore: "Goals",
            number: "11",
        },
        {
            position: [-3, 0, 2.75],
            rotation: [0, Math.PI / 2.5, 0],
            url: essien,
            title: "卫冕脏王-1",
            Etitle: "Fouls King-1",
            name: "埃辛",
            Ename: "Essien",
            score: "黄牌数",
            Escore: "Yellow Cards",
            number: "3",
        },
        // { position: [-3.5, 0, 2], rotation: [0, Math.PI / 2.5, 0], url: pexel(327482) },
        {
            position: [-3.5, 0, 4.3],
            rotation: [0, Math.PI / 2.5, 0],
            url: puyol,
            title: "卫冕脏王-2",
            Etitle: "Fouls King-2",
            name: "普约尔",
            Ename: "Puyol",
            score: "黄牌数",
            Escore: "Yellow Cards",
            number: "3",
        },
        {
            position: [-3.5, 0, 5.5],
            rotation: [0, Math.PI / 2.5, 0],
            url: kounde,
            title: "卫冕脏王-3",
            Etitle: "Fouls King-3",
            name: "孔德",
            Ename: "Koundé",
            score: "黄牌数",
            Escore: "Yellow Cards",
            number: "3",
        },
        // // Right
        // { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(227675) },
        {
            position: [2.4, 0, 1.5],
            rotation: [0, -Math.PI / 2.5, 0],
            url: gullit,
            title: "卫冕助攻王",
            Etitle: "Best Assits",
            name: "古力特",
            Ename: "Gullit",
            score: "助攻数",
            Escore: "Assits",
            number: "7",
        },
        {
            position: [3.2, 0, 2.75],
            rotation: [0, -Math.PI / 2.5, 0],
            url: carlos,
            title: "卫冕脏王之王",
            Etitle: "Fouls God",
            name: "卡洛斯",
            Ename: "Carlos",
            score: "红牌数",
            Escore: "Red Cards",
            number: "2",
        },
    ];
    return (
        <div>
            <Suspense fallback={null}>
                <ScoreBoardContent images={images} />
            </Suspense>
        </div>
    );
};

export default ScoreBoard;

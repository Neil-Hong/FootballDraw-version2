// import React, { useEffect, useState } from "react";
// import ReactAudioPlayer from "react-audio-player";

// import "./Draw.styles.scss";
// import AC from "../../assets/images/AC.png";
// import Barcelona from "../../assets/images/Barcelona.png";
// import Chelasea from "../../assets/images/Chelsea.png";
// import MC from "../../assets/images/MC.png";
// import NF from "../../assets/images/NF.png";
// import Porto from "../../assets/images/Porto.png";
// import PSG from "../../assets/images/PSG.png";
// import CP from "../../assets/images/CP.png";
// import RealMadrid from "../../assets/images/RealMadrid.png";
// import Arsenal from "../../assets/images/Arsenal.png";
// import SB29 from "../../assets/images/SB29.png";
// import Villarreal from "../../assets/images/Villarreal_CF.png";
// import Bayern from "../../assets/images/Bayern.png";
// import Juventus from "../../assets/images/Juventus.png";
// import BVB09 from "../../assets/images/Dortmund.png";
// import MU from "../../assets/images/MU.png";
// import drawScene from "../../assets/images/draw.png";
// import themeMusic from "../../assets/audio/theme.mp3";
// import drawVideo from "../../assets/video/drawVideo.mp4";
// import realMadridDraw from "../../assets/video/realMadridDraw.mp4";

// const Draw = () => {
//     const teams = {
//         1: { name: "A.C. Milan", img: AC },
//         2: { name: "Manchester City F.C.", img: MC },
//         3: { name: "Chelsea F.C.", img: Chelasea },
//         4: { name: "Paris Saint-Germain F.C.", img: PSG },
//         5: { name: "FC Barcelona", img: Barcelona },
//         6: { name: "FC Porto", img: Porto },
//         7: { name: "Crystal Palace F.C.", img: CP },
//         8: { name: "Nottingham Forest F.C.", img: NF },
//         9: { name: "Manchester United F.C.", img: MU },
//         10: { name: "FC Bayern Munich", img: Bayern },
//         11: { name: "Real Madrid CF", img: RealMadrid },
//         12: { name: "Arsenal F.C.", img: Arsenal },
//         13: { name: "Borussia Dortmund", img: BVB09 },
//         14: { name: "Juventus F.C.", img: Juventus },
//         15: { name: "Stade Brestois 29", img: SB29 },
//         16: { name: "Villarreal CF", img: Villarreal },
//     };
//     const [randomArr, setRandomArr] = useState([]);
//     const [count, setCount] = useState(1);
//     const [arr, setArr] = useState([]);
//     const [flag, setFlag] = useState(true);

//     const rangeRam = function (range, count) {
//         const ramArr = [];
//         const result = [];

//         for (let i = range[0]; i <= range[1]; i++) {
//             ramArr.push(i);
//         }

//         for (; count > 0; count--) {
//             const ram = Math.floor(Math.random() * (ramArr.length - 1));

//             result.push(ramArr[ram]);

//             ramArr[ram] = ramArr[ramArr.length - 1];
//             ramArr.pop();
//         }

//         return result;
//     };

//     const handleDraw = () => {
//         setCount(count + 1);
//         setArr([...arr, count]);
//         if (arr) {
//             setTimeout(() => {
//                 setFlag(false);
//             }, 5000);
//         }
//     };

//     const handleReset = () => {
//         setCount(1);
//         setArr([]);
//         const newRandom = rangeRam([1, 16], 16);
//         setRandomArr(newRandom);
//         setFlag(true);
//     };

//     useEffect(() => {
//         const getArr = async () => {
//             const test = await rangeRam([1, 16], 16);
//             setRandomArr(test);
//         };
//         getArr();

//         var scroll =
//             window.requestAnimationFrame ||
//             window.webkitRequestAnimationFrame ||
//             window.mozRequestAnimationFrame ||
//             window.msRequestAnimationFrame ||
//             window.oRequestAnimationFrame ||
//             // IE Fallback, you can even fallback to onscroll
//             function (callback) {
//                 window.setTimeout(callback, 1000 / 60);
//             };
//         var elementsToShow = document.querySelectorAll(".tableContainer");

//         function loop() {
//             elementsToShow.forEach(function (element) {
//                 if (isElementInViewport(element)) {
//                     element.classList.add("is-visible");
//                 } else {
//                     element.classList.remove("is-visible");
//                 }
//             });

//             scroll(loop);
//         }

//         // Call the loop for the first time
//         loop();

//         // Helper function from: http://stackoverflow.com/a/7557433/274826
//         function isElementInViewport(el) {
//             var rect = el.getBoundingClientRect();
//             return (
//                 (rect.top <= 0 && rect.bottom >= 0) ||
//                 (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
//                     rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
//                 (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
//             );
//         }
//     }, []);

//     return (
//         <div className="drawPageContainer">
//             <ReactAudioPlayer src={themeMusic} autoPlay loop={true} />
//             <h1>2022-2023赛季 84452韭菜杯抽签仪式</h1>
//             <h2>2022-2023 Season &nbsp;&nbsp;84452 LEEK CUP DRAW CEREMONY</h2>
//             <div className="title">
//                 <h1>参赛队伍巡礼</h1>
//                 <h2>Clubs in the draw</h2>
//             </div>
//             <div className="stageContainer">
//                 <div class="stage">
//                     <div class="control">
//                         <div class="imgWrap">
//                             <div class="img img1">
//                                 <img src={AC} alt="AC" />
//                             </div>
//                             <div class="img img2">
//                                 <img src={Barcelona} alt="Barcelona" />
//                             </div>
//                             <div class="img img3">
//                                 <img src={Chelasea} alt="Chelasea" />
//                             </div>
//                             <div class="img img4">
//                                 <img src={MC} alt="MC" />
//                             </div>
//                             <div class="img img5">
//                                 <img src={NF} alt="NF" />
//                             </div>
//                             <div class="img img6">
//                                 <img src={Porto} alt="Porto" />
//                             </div>
//                             <div class="img img7">
//                                 <img src={PSG} alt="psg" />
//                             </div>
//                             <div class="img img8">
//                                 <img src={CP} alt="CP" />
//                             </div>
//                             {/* <div class="img img9">
//                             <img src={RealMadrid} alt="RealMadrid" />
//                         </div>
//                         <div class="img img10">
//                             <img src={Arsenal} alt="Arsenal" />
//                         </div>
//                         <div class="img img12">
//                             <img src={SB29} alt="SB29" />
//                         </div>
//                         <div class="img img12">
//                             <img src={BVB09} alt="BVB09" />
//                         </div>
//                         <div class="img img13">
//                             <img src={DerbyCounty} alt="DerbyCounty" />
//                         </div>
//                         <div class="img img14">
//                             <img src={Bayern} alt="Bayern" />
//                         </div>
//                         <div class="img img15">
//                             <img src={Juventus} alt="Juventus" />
//                         </div>
//                         <div class="img img16">
//                             <img src={MU} alt="MU" />
//                         </div> */}
//                         </div>
//                     </div>
//                 </div>
//                 <div class="stage">
//                     <div class="control">
//                         <div class="imgWrap">
//                             <div class="img img1">
//                                 <img src={RealMadrid} alt="RealMadrid" />
//                             </div>
//                             <div class="img img2">
//                                 <img src={Arsenal} alt="Arsenal" />
//                             </div>
//                             <div class="img img3">
//                                 <img src={SB29} alt="SB29" />
//                             </div>
//                             <div class="img img4">
//                                 <img src={BVB09} alt="BVB09" />
//                             </div>
//                             <div class="img img5">
//                                 <img src={Villarreal} alt="Villarreal" />
//                             </div>
//                             <div class="img img6">
//                                 <img src={Bayern} alt="Bayern" />
//                             </div>
//                             <div class="img img7">
//                                 <img src={Juventus} alt="Juventus" />
//                             </div>
//                             <div class="img img8">
//                                 <img src={MU} alt="MU" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <img src={drawScene} className="drawImage" alt="drawScene" />

//             <div style={{ display: "flex", flexDirection: "row" }}>
//                 {" "}
//                 <button className="drawButton" onClick={handleDraw}>
//                     抽签
//                     <br /> Draw
//                 </button>
//                 {arr[0] === 1 ? (
//                     flag ? (
//                         <video controls={false} autoPlay muted style={{ width: "700px" }}>
//                             <source src={drawVideo} type="video/mp4"></source>
//                         </video>
//                     ) : null
//                 ) : null}
//                 <button className="drawButton" onClick={handleReset}>
//                     重新抽签
//                     <br /> Redraw
//                 </button>
//             </div>

//             <div className="groupSection">
//                 <div className="tableContainer">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th colspan="2">Group A</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td style={{ color: "transparent" }}>
//                                     {arr.includes(2) ? (
//                                         randomArr[0] ? (
//                                             <img className="tableImg" src={teams[randomArr[0]].img} alt="logo" />
//                                         ) : null
//                                     ) : null}
//                                 </td>
//                                 <td>{arr.includes(2) ? (randomArr[0] ? teams[randomArr[0]].name : null) : null}</td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     {arr.includes(3) ? (
//                                         randomArr[1] ? (
//                                             <img className="tableImg" src={teams[randomArr[1]].img} alt="logo" />
//                                         ) : null
//                                     ) : null}
//                                 </td>
//                                 <td>{arr.includes(3) ? (randomArr[1] ? teams[randomArr[1]].name : null) : null}</td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     {arr.includes(4) ? (
//                                         randomArr[2] ? (
//                                             <img className="tableImg" src={teams[randomArr[2]].img} alt="logo" />
//                                         ) : null
//                                     ) : null}
//                                 </td>
//                                 <td>{arr.includes(4) ? (randomArr[2] ? teams[randomArr[2]].name : null) : null}</td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     {arr.includes(5) ? (
//                                         randomArr[3] ? (
//                                             <img className="tableImg" src={teams[randomArr[3]].img} alt="logo" />
//                                         ) : null
//                                     ) : null}
//                                 </td>
//                                 <td>{arr.includes(5) ? (randomArr[3] ? teams[randomArr[3]].name : null) : null}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="empty"></div>
//                 <div className="tableContainer">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th colspan="2">Group B</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>
//                                     {arr.includes(6) ? (
//                                         randomArr[4] ? (
//                                             <img className="tableImg" src={teams[randomArr[4]].img} alt="logo" />
//                                         ) : null
//                                     ) : null}
//                                 </td>
//                                 <td>{arr.includes(6) ? (randomArr[4] ? teams[randomArr[4]].name : null) : null}</td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     {arr.includes(7) ? (
//                                         randomArr[5] ? (
//                                             <img className="tableImg" src={teams[randomArr[5]].img} alt="logo" />
//                                         ) : null
//                                     ) : null}
//                                 </td>
//                                 <td>{arr.includes(7) ? (randomArr[5] ? teams[randomArr[5]].name : null) : null}</td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     {arr.includes(8) ? (
//                                         randomArr[6] ? (
//                                             <img className="tableImg" src={teams[randomArr[6]].img} alt="logo" />
//                                         ) : null
//                                     ) : null}
//                                 </td>
//                                 <td>{arr.includes(8) ? (randomArr[6] ? teams[randomArr[6]].name : null) : null}</td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     {arr.includes(9) ? (
//                                         randomArr[7] ? (
//                                             <img className="tableImg" src={teams[randomArr[7]].img} alt="logo" />
//                                         ) : null
//                                     ) : null}
//                                 </td>
//                                 <td>{arr.includes(9) ? (randomArr[7] ? teams[randomArr[7]].name : null) : null}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="empty"></div>
//                 <div className="tableContainer">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th colspan="2">Group C</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>
//                                     {arr.includes(10) ? (
//                                         randomArr[8] ? (
//                                             <img className="tableImg" src={teams[randomArr[8]].img} alt="logo" />
//                                         ) : null
//                                     ) : null}
//                                 </td>
//                                 <td>{arr.includes(10) ? (randomArr[8] ? teams[randomArr[8]].name : null) : null}</td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     {arr.includes(11) ? (
//                                         randomArr[9] ? (
//                                             <img className="tableImg" src={teams[randomArr[9]].img} alt="logo" />
//                                         ) : null
//                                     ) : null}
//                                 </td>
//                                 <td>{arr.includes(11) ? (randomArr[9] ? teams[randomArr[9]].name : null) : null}</td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     {arr.includes(12) ? (
//                                         randomArr[10] ? (
//                                             <img className="tableImg" src={teams[randomArr[10]].img} alt="logo" />
//                                         ) : null
//                                     ) : null}
//                                 </td>
//                                 <td>{arr.includes(12) ? (randomArr[10] ? teams[randomArr[10]].name : null) : null}</td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     {arr.includes(13) ? (
//                                         randomArr[11] ? (
//                                             <img className="tableImg" src={teams[randomArr[11]].img} alt="logo" />
//                                         ) : null
//                                     ) : null}
//                                 </td>
//                                 <td>{arr.includes(13) ? (randomArr[11] ? teams[randomArr[11]].name : null) : null}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="empty"></div>
//                 <div className="tableContainer">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th colspan="2">Group D</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>
//                                     {arr.includes(14) ? (
//                                         randomArr[12] ? (
//                                             <img className="tableImg" src={teams[randomArr[12]].img} alt="logo" />
//                                         ) : null
//                                     ) : null}
//                                 </td>
//                                 <td>{arr.includes(14) ? (randomArr[12] ? teams[randomArr[12]].name : null) : null}</td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     {arr.includes(15) ? (
//                                         randomArr[13] ? (
//                                             <img className="tableImg" src={teams[randomArr[13]].img} alt="logo" />
//                                         ) : null
//                                     ) : null}
//                                 </td>
//                                 <td>{arr.includes(15) ? (randomArr[13] ? teams[randomArr[13]].name : null) : null}</td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     {arr.includes(16) ? (
//                                         randomArr[14] ? (
//                                             <img className="tableImg" src={teams[randomArr[14]].img} alt="logo" />
//                                         ) : null
//                                     ) : null}
//                                 </td>
//                                 <td>{arr.includes(16) ? (randomArr[14] ? teams[randomArr[14]].name : null) : null}</td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     {arr.includes(17) ? (
//                                         randomArr[15] ? (
//                                             <img className="tableImg" src={teams[randomArr[15]].img} alt="logo" />
//                                         ) : null
//                                     ) : null}
//                                 </td>
//                                 <td>{arr.includes(17) ? (randomArr[15] ? teams[randomArr[15]].name : null) : null}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//             <div style={{ height: "150px" }}></div>
//         </div>
//     );
// };

// export default Draw;

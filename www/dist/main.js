/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./www/src/emitted/main.js":
/*!*********************************!*\
  !*** ./www/src/emitted/main.js ***!
  \*********************************/
/***/ (() => {

eval("\nlet data;\nlet px = 2, py = 3;\nlet ctx;\nlet imgGoal;\nlet imgLuggage;\nlet imgWall;\nlet imgWorker;\n//8x14\n/*\ndata = [\n    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],\n    [6,6,6,6,6,0,0,0,6,6,6,6,6,6,6,6,6,6,6,6],\n    [6,6,6,6,6,2,0,0,6,6,6,6,6,6,6,6,6,6,6,6],\n    [6,6,6,6,6,0,0,2,6,6,6,6,6,6,6,6,6,6,6,6],\n    [6,6,6,0,0,2,0,0,2,0,6,6,6,6,6,6,6,6,6,6],\n    [6,6,6,0,6,0,6,6,6,0,6,6,6,6,6,6,6,6,6,6],\n    [6,0,0,0,6,0,6,6,6,0,6,6,6,6,0,0,1,1,6,6],\n    [6,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,1,1,6,6],\n    [6,6,6,6,6,0,6,6,6,6,0,6,0,6,0,0,1,1,6,6],\n    [6,6,6,6,6,0,0,0,0,0,0,6,6,6,6,6,6,6,6,6],\n    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]\n]\n*/\ndata = [\n    [6, 6, 6, 6, 0],\n    [6, 1, 0, 6, 6],\n    [6, 0, 2, 0, 6],\n    [6, 0, 0, 0, 6],\n    [6, 6, 6, 6, 6]\n];\n/**\n * 初期化関数\n */\nlet init = () => {\n    let canvas = document.getElementById(\"soko\");\n    ctx = canvas.getContext(\"2d\");\n    onkeydown = mykeydown;\n    imgGoal = document.getElementById(\"imgGoal\");\n    imgLuggage = document.getElementById(\"imgLuggage\");\n    imgWall = document.getElementById(\"imgWall\");\n    imgWorker = document.getElementById(\"imgWorker\");\n    repaint();\n};\nlet repaint = () => {\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, 800, 440);\n    for (let y = 0; y < data.length; y++) {\n        for (let x = 0; x < data[y].length; x++) {\n            if (data[y][x] & 0x1) {\n                ctx.drawImage(imgGoal, x * 40, y * 40, 40, 40);\n            }\n            if (data[y][x] & 0x2) {\n                ctx.drawImage(imgLuggage, x * 40, y * 40, 40, 40);\n            }\n            if (data[y][x] == 6) {\n                ctx.drawImage(imgWall, x * 40, y * 40, 40, 40);\n            }\n        }\n    }\n    ctx.drawImage(imgWorker, px * 40, py * 40, 40, 40);\n};\nlet mykeydown = (e) => {\n    let dx0 = px, dx1 = px, dy0 = py, dy1 = py;\n    switch (e.keyCode) {\n        case 37:\n            dx0--;\n            dx1 -= 2;\n            break;\n        case 38:\n            dy0--;\n            dy1 -= 2;\n            break;\n        case 39:\n            dx0++;\n            dx1 += 2;\n            break;\n        case 40:\n            dy0++;\n            dy1 += 2;\n            break;\n    }\n    if ((data[dy0][dx0] & 0x2) == 0) {\n        //荷物なし＆壁なし -> 進む\n        px = dx0;\n        py = dy0;\n    }\n    else if ((data[dy0][dx0] & 0x6) == 2) {\n        //進行方向に荷物あり\n        if ((data[dy1][dx1] & 0x2) == 0) {\n            //荷物なし＆壁なし→進む\n            data[dy0][dx0] ^= 2; //隣の荷物をクリア\n            data[dy1][dx1] |= 2; //更に先に荷物をセット\n            px = dx0;\n            py = dy0;\n        }\n    }\n    repaint();\n};\n\n\n//# sourceURL=webpack://my-webpack-project/./www/src/emitted/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./www/src/emitted/main.js"]();
/******/ 	
/******/ })()
;
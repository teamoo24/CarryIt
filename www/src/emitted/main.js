"use strict";
let data;
let px = 12, py = 8;
let ctx;
let imgGoal;
let imgLuggage;
let imgWall;
let imgWorker;
data = [
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [6, 6, 6, 6, 6, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [6, 6, 6, 6, 6, 2, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [6, 6, 6, 6, 6, 0, 0, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [6, 6, 6, 0, 0, 2, 0, 0, 2, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [6, 0, 0, 0, 6, 0, 6, 6, 6, 0, 6, 6, 6, 6, 0, 0, 1, 1, 6, 6],
    [6, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 6, 6],
    [6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 0, 6, 0, 6, 0, 1, 1, 6, 6, 6],
    [6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
];
/**
 * 初期化関数
 */
let init = () => {
    let canvas = document.getElementById("soko");
    imgGoal.src = "";
    ctx = canvas.getContext("2d");
};
let repaint = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 800, 440);
    for (let y = 0; y < data.length; y++) {
        for (let x = 0; x < data[y].length; x++) {
            if (data[y][x] & 0x1) {
            }
        }
    }
};
let mykeydown = (e) => {
    let dx0 = px, dx1 = px, dy0 = py, dy1 = py;
    switch (e.keyCode) {
        case 37:
            dx0--;
            dx1 -= 2;
            break;
        case 38:
            dy0--;
            dy1 -= 2;
            break;
        case 39:
            dx0++;
            dx1 += 2;
            break;
        case 40:
            dy0++;
            dy1 += 2;
            break;
    }
    if ((data[dy0][dx0] & 0x2) == 0) {
        //荷物なし＆壁なし -> 進む
        px = dx0;
        py = dy0;
    }
    else if ((data[dy0][dx0] & 0x6) == 2) {
        //進行方向に荷物あり
        if ((data[dy1][dx1] & 0x2) == 0) {
            //荷物なし＆壁なし→進む
            data[dy0][dx0] ^= 2; //隣の荷物をクリア
            data[dy1][dy1] |= 2; //更に先に荷物をセット
            px = dx0;
            py = dy0;
        }
        repaint();
    }
};

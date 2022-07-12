let data:Array<Array<number>>;
let px:number = 12,py:number = 8;
let ctx:CanvasRenderingContext2D;

data = [
    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
    [6,6,6,6,6,0,0,0,6,6,6,6,6,6,6,6,6,6,6,6],
    [6,6,6,6,6,2,0,0,6,6,6,6,6,6,6,6,6,6,6,6],
    [6,6,6,6,6,0,0,2,6,6,6,6,6,6,6,6,6,6,6,6],
    [6,6,6,0,0,2,0,0,2,0,6,6,6,6,6,6,6,6,6,6],
    [6,0,0,0,6,0,6,6,6,0,6,6,6,6,0,0,1,1,6,6],
    [6,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,1,1,6,6],
    [6,6,6,6,6,0,6,6,6,6,0,6,0,6,0,1,1,6,6,6],
    [6,6,6,6,6,0,0,0,0,0,0,6,6,6,6,6,6,6,6,6],
    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]
]

/**
 * 初期化関数
 */
let init = () => {
    let canvas = <HTMLCanvasElement>document.getElementById("soko");
    ctx = canvas.getContext("2d");
}

let repaint = () => {
        
}

let mykeydown = (e:any) => {
    let dx0 = px,dx1 = px, dy0 = py, dy1 = py;
    switch(e.keyCode) {
        case 37:dx0--;dx1-=2;
            break;
        case 38:dy0--;dy1-=2;
            break;
        case 39:dx0++;dx1+=2;
            break;
        case 40:dy0++;dy1+=2;
            break; 
    }

    if((data[dy0][dx0]&0x2)==0) {
        //荷物なし＆壁なし -> 進む
            px = dx0;
            py = dy0;
    } else if((data[dy0][dx0]&0x6)==2){
        //進行方向に荷物あり
        if((data[dy1][dx1]&0x2)==0) {
            //荷物なし＆壁なし→進む
            data[dy0][dx0]^=2;//隣の荷物をクリア
            data[dy1][dy1]|=2 //更に先に荷物をセット
            px=dx0;
            py=dy0;
        }
        repaint();
    }
    
} 

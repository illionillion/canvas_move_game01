/**
 * 描画処理
 */
function drawing() {
    let animationId= setInterval(() => {
        // switch (game_state) {
        //     case "init":;
        //         drawtitle()
        //         break;
        //     case "stop":

        //         break;
        //     case "play":
        //         drawing();
        //         break;
        
        //     default:
        //         break;
        // }
        console.log(game_state);
        if (game_state=="stop") {
            clearInterval(animationId);
        }

        ctx.clearRect(0, 0, cnvs.width, cnvs.height);

        ctx.fillStyle="red";
        ctx.fillRect(Enemy["x"],Enemy["y"],20,20)
        enemymove();
        ctx.fillStyle="black";
        Playermove(buttoncheckX);
        Playermove(buttoncheckY);
        Playermove(buttoncheckXY);
        keymove(keycheckX);
        keymove(keycheckY);
        ctx.fillRect(Mydata["x"],Mydata["y"],20,20)
        const myTop    = Mydata["y"];
        const myBottom = Mydata["y"] + 20;
        const myLeft   = Mydata["x"];
        const myRight  = Mydata["x"] + 20;
    
        const targetTop    = Enemy["y"];
        const targetBottom = Enemy["y"] + 20;
        const targetLeft   = Enemy["x"];
        const targetRight  = Enemy["x"] + 20;
    
        if ((myTop < targetBottom && targetTop < myBottom) && (myLeft < targetRight && targetLeft < myRight)) {
            if (hitcheck) {
                // alert("good");
                // console.log("hit");
                hitcount++;
                document.getElementById("countarea").innerHTML=hitcount;
                // console.log(hitcount);
                hitcheck=false;
            }
        }else{
            hitcheck=true;
        }

    }, 10);



}

function drawtitle() {
    //文字のスタイルを指定
	ctx.font = '32px serif';
	ctx.fillStyle = '#404040';
	//文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter
	ctx.textBaseline = 'center';
	ctx.textAlign = 'center';
    ctx.fillText("ゲーム",cnvs.width/2,cnvs.height/2);
    ctx.fillText("Enterか開始ボタンで開始・停止",cnvs.width/2,cnvs.height/2+40);
    ctx.fillText("矢印キーかボタンタッチで移動",cnvs.width/2,cnvs.height/2+80);
}
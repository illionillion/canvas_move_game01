/**
 * 描画処理
 */
function drawing() {
    // ゲーム開始音
    let hiteffect=new Audio("./audio/Onmtp-Inspiration05-mp3/Onmtp-Inspiration05-3.mp3");
                hiteffect.play();
                hiteffect=null;
    let animationId= setInterval(() => {

        // console.log(game_state);
        if (game_state=="stop") {
            clearInterval(animationId);
            drawpause();
            // 一時停止音
            let hiteffect=new Audio("./audio/Onmtp-Inspiration05-mp3/Onmtp-Inspiration05-2.mp3");
                hiteffect.play();
                hiteffect=null;
            return;
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

        ctx.font = '16px serif';
        ctx.fillStyle = '#404040';
        //文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter
        // ctx.textBaseline = 'center';
        ctx.textAlign = 'center';
        ctx.fillText("ヒット数："+hitcount,60,20);

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
                // document.getElementById("countarea").innerHTML=hitcount;
                
                // console.log(hitcount);
                hitcheck=false;

                //ヒット音鳴らす
                // console.log(audioObj);
                let hiteffect=new Audio("./audio/Onmtp-Inspiration05-mp3/Onmtp-Inspiration05-1.mp3");
                hiteffect.play();
                hiteffect=null;
            }
        }else{
            hitcheck=true;

            // audioObj.pause();
            // audioObj.currentTime=0;
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

function drawpause() {
    //文字のスタイルを指定
	ctx.font = '32px serif';
	ctx.fillStyle = '#404040';
	//文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter
	ctx.textBaseline = 'center';
	ctx.textAlign = 'center';
    ctx.fillText("PAUSE",cnvs.width/2,cnvs.height/2);
}
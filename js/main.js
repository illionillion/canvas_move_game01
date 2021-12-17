"use strict";
let data={"x":0,"y":0};
let cnvs;
let countX=0;
let countY=0;
let flagX=true;
let flagY=true;

let buttoncheckX;
let buttoncheckY;
let keycheckX;
let keycheckY;
let hitcheck;
let hitcount=0;

window.onload=function(){

    document.getElementById("left_btn").onmousedown=function(){buttoncheckOn(this)};
    document.getElementById("left_btn").onmouseup=function(){buttoncheckOff(this)};
    document.getElementById("right_btn").onmousedown=function(){buttoncheckOn(this)};
    document.getElementById("right_btn").onmouseup=function(){buttoncheckOff(this)};
    document.getElementById("up_btn").onmousedown=function(){buttoncheckOn(this)};
    document.getElementById("up_btn").onmouseup=function(){buttoncheckOff(this)};
    document.getElementById("down_btn").onmousedown=function(){buttoncheckOn(this)};
    document.getElementById("down_btn").onmouseup=function(){buttoncheckOff(this)};
    document.getElementById("left_btn").onpointerdown=function(){buttoncheckOn(this)};
    document.getElementById("left_btn").onpointerleave=function(){buttoncheckOff(this)};
    document.getElementById("right_btn").onpointerdown=function(){buttoncheckOn(this)};
    document.getElementById("right_btn").onpointerleave=function(){buttoncheckOff(this)};
    document.getElementById("up_btn").onpointerdown=function(){buttoncheckOn(this)};
    document.getElementById("up_btn").onpointerleave=function(){buttoncheckOff(this)};
    document.getElementById("down_btn").onpointerdown=function(){buttoncheckOn(this)};
    document.getElementById("down_btn").onpointerleave=function(){buttoncheckOff(this)};

    cnvs=document.getElementById("cnv");
    const ctx=cnvs.getContext("2d");
    countY=(cnvs.height/2)/2;
    if (data["x"]==0||data["y"]==0) {
        data["x"]=cnvs.width/2;
        data["y"]=cnvs.height/2;

    }

    setInterval(() => {
        ctx.clearRect(0, 0, cnvs.width, cnvs.height);

        ctx.fillStyle="red";
        ctx.fillRect(countX,countY,20,20)
        enemymove();
        ctx.fillStyle="black";
        move(buttoncheckX);
        move(buttoncheckY);
        keymove(keycheckX);
        keymove(keycheckY);
        ctx.fillRect(data["x"],data["y"],20,20)
        const myTop    = data["y"];
        const myBottom = data["y"] + 20;
        const myLeft   = data["x"];
        const myRight  = data["x"] + 20;
      
        const targetTop    = countY;
        const targetBottom = countY + 20;
        const targetLeft   = countX;
        const targetRight  = countX + 20;
      
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
window.document.addEventListener('keydown', event => {
        typekeydown(event);
});
window.document.addEventListener('keyup', event => {
        typekeyup(event);
});
/**
 * キーが押されたとき
 * @param {*} ev キーボード 
 */
function typekeydown(ev) {
    if (ev.key=="ArrowLeft"||ev.key=="ArrowRight") {
        keycheckX=ev.key;
    } else {
        keycheckY=ev.key;
    }
}
/**
 * キーが離されたとき
 * @param {*} ev キーボード 
 */
function typekeyup(ev) {
    keycheckX="";
    keycheckY="";
}
/**
 * キーボードでプレイヤーを動かす処理
 * @param {*} ev 押されてるキー
 */
function keymove(ev) {
    switch (ev) {
        case "ArrowLeft":
            move(document.getElementById("left_btn"));
            break;
        case "ArrowRight":
            move(document.getElementById("right_btn"));
            break;
        case "ArrowUp":
            move(document.getElementById("up_btn"));
            break;
        case "ArrowDown":
            move(document.getElementById("down_btn"));
            break;

        default:
            break;
    }
}
/**
 * ボタンが押されたとき
 * @param {*} val HTML要素 
 */
function buttoncheckOn(val) {
    if (val.dataset.value=="ArrowLeft"||val.dataset.value=="ArrowRight") {
        buttoncheckX=val;
    }else{
        buttoncheckY=val;
    }
}
/**
 * ボタンが離されたとき
 * @param {*} val HTML要素 
 */
function buttoncheckOff(val) {
    buttoncheck="";
}
/**
 * プレイヤーを動かす
 * @param {*} ele HTML要素
 * @returns なし
 */
function move(ele){
    // console.log(ele);
    if (!ele) {
        return;
    }
    // console.log(data);
    switch (ele.dataset.value) {
        case "left":
            // console.log(data["x"]-10);
            if (data["x"]-10>=0) {
                data["x"]-=10;
            }

            break;
    
        case "right":
            if (data["x"]+10<=cnvs.width-20) {
                data["x"]+=10;
            }

            break;

        case "up":
            if (data["y"]-10>=0) {
                data["y"]-=10;
            }

            break;
        case "down":
            if (data["y"]+10<=cnvs.height-20) {
                data["y"]+=10;
            }

            break;
    
        default:
            break;
    }
}

/**
 * 敵を動かす
 */
function enemymove() {

    if (countX>=cnvs.width-20) {
        flagX=false;
    }else if(countX<=0){
        flagX=true;
    }

    if (countY>=cnvs.height-20) {
        flagY=false;
    }else if(countY<=0){
        flagY=true;
    }

    if (flagX) {
        countX+=2;
    }else{
        countX-=2;
    }

    if (flagY) {
        countY+=2;
    }else{
        countY-=2;
    }

}
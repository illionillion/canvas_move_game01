"use strict";
let data={"x":0,"y":0};
let cnvs;
let countX=0;
let countY=0;
let flagX=true;
let flagY=true;

let buttoncheck;
let keycheck;

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
        move(buttoncheck);
        keymove(keycheck);
        ctx.fillRect(data["x"],data["y"],20,20)
    
    }, 10);

}
window.document.addEventListener('keydown', event => {
        typekeydown(event);
});
window.document.addEventListener('keyup', event => {
        typekeyup(event);
});

function typekeydown(ev) {
    keycheck=ev.key;
}
function typekeyup(ev) {
    keycheck="";
}
function keymove(ev) {
    switch (ev) {
        case "ArrowUp":
            move(document.getElementById("up_btn"));
            break;
        case "ArrowDown":
            move(document.getElementById("down_btn"));
            break;
        case "ArrowLeft":
            move(document.getElementById("left_btn"));
            break;
        case "ArrowRight":
            move(document.getElementById("right_btn"));
            break;
    
        default:
            break;
    }
}

function buttoncheckOn(val) {
    buttoncheck=val;
}
function buttoncheckOff(val) {
    buttoncheck="";
}
function move(ele){
    // console.log(ele);
    if (!ele) {
        return;
    }
    console.log(data);
    switch (ele.dataset.value) {
        case "left":
            console.log(data["x"]-10);
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
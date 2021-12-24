"use strict";
let Mydata={"x":0,"y":0}; //プレイヤーの座標

let cnvs; //キャンバス格納用
let ctx;

let Enemy={"x":0,"y":0}; //敵の座標
let flagX=true;
let flagY=true;

let buttoncheckX;
let buttoncheckY;
let buttoncheckXY;
let keycheckX;
let keycheckY;
let hitcheck;
let hitcount=0;
let game_state="init";
window.onload=function(){


    addEvents();

    cnvs=document.getElementById("cnv");
    ctx=cnvs.getContext("2d");
    Enemy["y"]=(cnvs.height/2)/2;
    if (Mydata["x"]==0||Mydata["y"]==0) {
        Mydata["x"]=cnvs.width/2;
        Mydata["y"]=cnvs.height/2;

    }
    drawtitle()

    document.getElementById("start_stop_btn").addEventListener("click",function(){
        check_status();
    })

}

function check_status(val) {
    switch (game_state) {
        case "init":
            game_state="play";
            document.getElementById("start_stop_btn").value="停止";
            drawing();
            break;
        case "stop":
            game_state="play";
            document.getElementById("start_stop_btn").value="停止";
            drawing();
            break;
        case "play":
            game_state="stop";
            document.getElementById("start_stop_btn").value="開始";
            break;
    
        default:
            break;
    }

}
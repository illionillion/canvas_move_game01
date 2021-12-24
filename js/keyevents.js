/**
* キーが押されたとき
* @param {*} ev キーボード 
*/
function typekeydown(ev) {
    // console.log(ev.key);
    if (ev.key=="ArrowLeft"||ev.key=="ArrowRight") {
        keycheckX=ev.key;
    } else if(ev.key=="ArrowUp"||ev.key=="ArrowDown"){
        keycheckY=ev.key;
    }else if(ev.key=="Enter"){
        check_status();
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
            Playermove(document.getElementById("left_btn"));
            break;
        case "ArrowRight":
            Playermove(document.getElementById("right_btn"));
            break;
        case "ArrowUp":
            Playermove(document.getElementById("up_btn"));
            break;
        case "ArrowDown":
            Playermove(document.getElementById("down_btn"));
            break;

        default:
            break;
    }
}
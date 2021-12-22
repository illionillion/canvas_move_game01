/**
 * イベント登録
 */
function addEvents() {
    document.getElementById("left_btn").onmousedown=function(){buttoncheckOn(this)};
    document.getElementById("left_btn").onmouseup=function(){buttoncheckOff(this)};
    document.getElementById("right_btn").onmousedown=function(){buttoncheckOn(this)};
    document.getElementById("right_btn").onmouseup=function(){buttoncheckOff(this)};
    document.getElementById("up_btn").onmousedown=function(){buttoncheckOn(this)};
    document.getElementById("up_btn").onmouseup=function(){buttoncheckOff(this)};
    document.getElementById("left_up_btn").onmousedown=function(){buttoncheckOn(this)};
    document.getElementById("left_up_btn").onmouseup=function(){buttoncheckOff(this)};
    document.getElementById("right_up_btn").onmousedown=function(){buttoncheckOn(this)};
    document.getElementById("right_up_btn").onmouseup=function(){buttoncheckOff(this)};
    document.getElementById("down_btn").onmousedown=function(){buttoncheckOn(this)};
    document.getElementById("down_btn").onmouseup=function(){buttoncheckOff(this)};
    document.getElementById("left_down_btn").onmousedown=function(){buttoncheckOn(this)};
    document.getElementById("left_down_btn").onmouseup=function(){buttoncheckOff(this)};
    document.getElementById("right_down_btn").onmousedown=function(){buttoncheckOn(this)};
    document.getElementById("right_down_btn").onmouseup=function(){buttoncheckOff(this)};
    document.getElementById("left_btn").onpointerdown=function(){buttoncheckOn(this)};
    document.getElementById("left_btn").onpointerleave=function(){buttoncheckOff(this)};
    document.getElementById("right_btn").onpointerdown=function(){buttoncheckOn(this)};
    document.getElementById("right_btn").onpointerleave=function(){buttoncheckOff(this)};
    document.getElementById("up_btn").onpointerdown=function(){buttoncheckOn(this)};
    document.getElementById("up_btn").onpointerleave=function(){buttoncheckOff(this)};
    document.getElementById("left_up_btn").onpointerdown=function(){buttoncheckOn(this)};
    document.getElementById("left_up_btn").onpointerleave=function(){buttoncheckOff(this)};
    document.getElementById("right_up_btn").onpointerdown=function(){buttoncheckOn(this)};
    document.getElementById("right_up_btn").onpointerleave=function(){buttoncheckOff(this)};
    document.getElementById("down_btn").onpointerdown=function(){buttoncheckOn(this)};
    document.getElementById("down_btn").onpointerleave=function(){buttoncheckOff(this)};
    document.getElementById("left_down_btn").onpointerdown=function(){buttoncheckOn(this)};
    document.getElementById("left_down_btn").onpointerleave=function(){buttoncheckOff(this)};
    document.getElementById("right_down_btn").onpointerdown=function(){buttoncheckOn(this)};
    document.getElementById("right_down_btn").onpointerleave=function(){buttoncheckOff(this)};

    window.document.addEventListener('keydown', event => {
        typekeydown(event);
    });
    window.document.addEventListener('keyup', event => {
        typekeyup(event);
    });
}
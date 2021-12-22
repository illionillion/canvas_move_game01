/**
 * ボタンが押されたとき
 * @param {*} val HTML要素 
 */
 function buttoncheckOn(val) {
    document.getElementById("buttons").ontouchstart=function(e){
        console.log(e.touches.length);
        // alert(e.touches.length);
    }
    // console.log(val);
    if (val.dataset.value=="ArrowLeft"||val.dataset.value=="ArrowRight") {
        buttoncheckX=val;
    }else if(val.dataset.value=="ArrowUp"||val.dataset.value=="ArrowDown"){
        buttoncheckY=val;
    }else{
        buttoncheckXY=val;
    }
}
/**
 * ボタンが離されたとき
 * @param {*} val HTML要素 
 */
function buttoncheckOff(val) {
    if (val.dataset.value=="ArrowLeft"||val.dataset.value=="ArrowRight") {
        buttoncheckX="";
    }else if(val.dataset.value=="ArrowUp"||val.dataset.value=="ArrowDown"){
        buttoncheckY="";
    }else{
        buttoncheckXY="";
    }
}
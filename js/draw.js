/**
 * 描画処理
 */
function drawing() {

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
}
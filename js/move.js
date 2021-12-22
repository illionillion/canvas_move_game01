/**
 * プレイヤーを動かす
 * @param {*} ele HTML要素
 * @returns なし
 */
 function Playermove(ele){
    // console.log(ele);
    if (!ele) {
        return;
    }
    // console.log(data);
    switch (ele.dataset.value) {
        case "left":
            // console.log(data["x"]-10);
            if (Mydata["x"]-10>=0) {
                Mydata["x"]-=10;
            }

            break;
    
        case "right":
            if (Mydata["x"]+10<=cnvs.width-20) {
                Mydata["x"]+=10;
            }

            break;

        case "up":
            if (Mydata["y"]-10>=0) {
                Mydata["y"]-=10;
            }

            break;
        case "down":
            if (Mydata["y"]+10<=cnvs.height-20) {
                Mydata["y"]+=10;
            }

            break;
        case "left_up":
            if (Mydata["x"]-10>=0&&Mydata["y"]-10>=0) {
                Mydata["x"]-=10;
                Mydata["y"]-=10;
            }

            break;
        case "right_up":
            if (Mydata["x"]+10<=cnvs.width-20&&Mydata["y"]-10>=0) {
                Mydata["x"]+=10;
                Mydata["y"]-=10;
            }

            break;
        case "left_down":
            if (Mydata["x"]-10>=0&&Mydata["y"]+10<=cnvs.height-20) {
                Mydata["x"]-=10;
                Mydata["y"]+=10;
            }

            break;
        case "right_down":
            if (Mydata["x"]+10<=cnvs.width-20&&Mydata["y"]+10<=cnvs.height-20) {
                Mydata["x"]+=10;
                Mydata["y"]+=10;
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

    if (Enemy["x"]>=cnvs.width-20) {
        flagX=false;
    }else if(Enemy["x"]<=0){
        flagX=true;
    }

    if (Enemy["y"]>=cnvs.height-20) {
        flagY=false;
    }else if(Enemy["y"]<=0){
        flagY=true;
    }

    if (flagX) {
        Enemy["x"]+=2;
    }else{
        Enemy["x"]-=2;
    }

    if (flagY) {
        Enemy["y"]+=2;
    }else{
        Enemy["y"]-=2;
    }

}
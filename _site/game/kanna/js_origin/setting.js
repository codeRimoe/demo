// Call the canvas
var main = document.getElementById("mainCanvas");
var mainctx = main.getContext("2d");
var state = document.getElementById("stateCanvas");
var statectx = state.getContext("2d");

var con=document.getElementById("con");

resize = function () {
    var scale=Math.min(document.body.clientWidth/CBW,window.innerHeight/CBH-0.25);
    con.style.zoom=scale;
    if(device.mobile()){
        switch(window.orientation) {
            case 0:screentype=0;break;//down
            case 180:screentype=2;break;//up
            case -90:screentype=1;break;//right Landscape: turned 90 degrees counter-clockwise
            case 90:screentype=3;break;//left
        }
    }
}


var CBH=600,CBW=1080,bexptime=150,maxwt=300,wk=50;
var inithp=10,initspd=5,initboom=8,initzz=5;
var inithp_M=5,initspd_M=3;
var ttt=0,ppp=1,mmm=0,hhh=0,los=1,wt=maxwt,boomnum=initboom,allkill=0;

var reftime=12;
var boomcd=200;
var bakacd=5000;
var boomper=1;

// Handle keyboard controls
var keysDown = {};
addEventListener("keydown", function (e) {
                 keysDown[e.keyCode] = true;
                 }, false);

addEventListener("keyup", function (e) {
                 delete keysDown[e.keyCode];
                 switch (e.keyCode){
                 case 13:if(mmm&&los){ppp=pause(mainctx,statectx,ppp);}else if(!mmm){mmm=1;}break;
                 case 27:if((!ppp)||(!los)){reset(),menu(mainctx,statectx);}break;
                 case 72:if(!mmm){hhh++,hhh%=2,menu(mainctx,statectx);}break;
                 }
                 }, false);

var screentype=0;
if(device.mobile()){
    window.addEventListener("deviceorientation", function(event) {
                            var x = (event.beta+180)%360-180;  // In degree in the range [-180,180]
                            var y = (event.gamma+90)%180-90; // In degree in the range [-90,90]
                            if(x>5)
                                keysDown[37+(3+screentype)%4] = true;
                            else if(x<-5)
                                keysDown[37+(1+screentype)%4] = true;
                            else if(x<5&&x>-5){
                                if(keysDown[37+(1+screentype)%4])delete keysDown[37+(1+screentype)%4];
                                if(keysDown[37+(3+screentype)%4])delete keysDown[37+(3+screentype)%4];
                            }
                            
                            if(y>5)
                                keysDown[37+(2+screentype)%4] = true;
                            else if(y<-5)
                                keysDown[37+(0+screentype)%4] = true;
                            else if(y<5&&y>-5){
                                if(keysDown[37+(2+screentype)%4])delete keysDown[37+(2+screentype)%4];
                                if(keysDown[37+(0+screentype)%4])delete keysDown[37+(0+screentype)%4];
                            }
                            }, true);
    
    c1.onclick = function(){
        if(!mmm)
            mmm=1;
        if((ppp&&los&&mmm)&&(boomper--==1))
            kanna.setB(boom_pool);
        if((!ppp)||(!los))
            reset(),menu(mainctx,statectx);
    };
    
    c2.onclick = function(){
        if(!mmm)
            hhh++,hhh%=2,menu(mainctx,statectx);
        if(mmm&&los)
            ppp=pause(mainctx,statectx,ppp);
    };

}

touch = function (A,B,dis){
    var dx = Math.abs(A.x-B.x);
    var dy = Math.abs(A.y-B.y);
    if(Math.max(dx,dy)<dis)
        return true;
    return false;
}

pause = function(mainctx,statectx,ppp){
    if(ppp){
        mainctx.drawImage(pausepic, 0, 0);
        statectx.clearRect(0, 0, CBW, 100);
        statectx.drawImage(pbg[0], 0, 0);
        return 0;
    }
    else return 1;
}

lose = function(mainctx,statectx){
    alert("Game Over! You Lose!\nKill:"+allkill+"   Time:"+(maxwt-wt));
    mainctx.drawImage(losepic, 0, 0);
    statectx.drawImage(pbg[1], 0, 0);
    los=0;
}

win = function(mainctx,statectx){

    alert("Congratulations! You Win!\nKill:"+allkill+"   Time:"+(maxwt-wt));
    mainctx.drawImage(winpic, 0, 0);
    statectx.drawImage(pbg[1], 0, 0);
    los=0;
}

menu = function(mainctx,statectx){
    mainctx.drawImage(sbgmain[hhh], 0, 0);
    statectx.clearRect(0, 0, CBW, 100);
    statectx.drawImage(sbgst[0], 0, 0);
}

reset = function(){
    keysDown={};
    ttt=0,ppp=1,mmm=0,hhh=0,los=1,wt=maxwt,boomnum=initboom,allkill=0;
    kanna = new K(kimg,CBW/2-128,CBH/2-128,inithp,initspd,initboom,[0,0,0,0],0);
    kobayashi = new X(ling,5,0);
    baka_pool = [];
    boom_pool = [];
    for(i = 0; i < kanna.boom;i++)
        boom_pool.push(new B(bing,-233,-233,0,0));
}

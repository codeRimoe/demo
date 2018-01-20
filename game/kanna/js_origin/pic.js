
var kimg = [new Image(),new Image()];
var ming = [new Image(),new Image(),new Image(),new Image()];
var bing = [new Image(),new Image(),new Image(),new Image(),new Image(),new Image()];
var ling = [new Image(),new Image()];
var stpic =[new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()];
var losepic=new Image();
var winpic=new Image();
var pausepic=new Image();
var sbgmain = [new Image(),new Image()];
var sbgst = [new Image(),new Image()];
var pbg=[new Image(),new Image()];
var stbg = new Image();
var bg = new Image();

kimg[0].src = "images/figure/kn.png";
kimg[1].src = "images/figure/kn2.png";
ling[0].src = "images/figure/xl.png";
ling[1].src = "images/figure/xl2.png";
ming[0].src = "images/figure/tr1.png";
ming[1].src = "images/figure/tr2.png";
ming[2].src = "images/figure/tr3.png";
ming[3].src = "images/figure/tr4.png";
bing[0].src = "images/boom/boom1.png";
bing[1].src = "images/boom/boom2.png";
bing[2].src = "images/boom/boom3.png";
bing[3].src = "images/boom/boom4.png";
bing[4].src = "images/boom/boom5.png";
bing[5].src = "images/boom/boom6.png";
stpic[0].src = "images/state/udoff.png";
stpic[1].src = "images/state/sdoff.png";
stpic[2].src = "images/state/disoff.png";
stpic[3].src = "images/state/dzoff.png";
stpic[4].src = "images/state/udon.png";
stpic[5].src = "images/state/sdon.png";
stpic[6].src = "images/state/dison.png";
stpic[7].src = "images/state/dzon.png";

if(device.mobile()){
    losepic.src = "images/mobile/lose.png";
    winpic.src = "images/mobile/win.png";
    pausepic.src = "images/mobile/ppp.png";
    pbg[0].src = "images/mobile/pbg.png";
    pbg[1].src = "images/mobile/ebg.png";
    sbgmain[0].src = "images/mobile/menu.png";
    sbgmain[1].src = "images/mobile/help.png";
    sbgst[0].src = "images/mobile/sbg.png";
    sbgst[1].src = "images/mobile/hbg.png";
}
else {
    losepic.src = "images/pc/lose.png";
    winpic.src = "images/pc/win.png";
    pausepic.src = "images/pc/ppp.png";
    pbg[0].src = "images/pc/pbg.png";
    pbg[1].src = "images/pc/ebg.png";
    sbgmain[0].src = "images/pc/menu.png";
    sbgmain[1].src = "images/pc/help.png";
    sbgst[0].src = "images/pc/sbg.png";
    sbgst[1].src = "images/pc/hbg.png";
}

stbg.src = "images/bg.png";
bg.src = "images/background.png";

var kanna = new K(kimg,CBW/2-128,CBH/2-128,inithp,initspd,initboom,[0,0,0,0],0);
var kobayashi = new X(ling,5,0);
var baka_pool = [];
var boom_pool = [];
for(i = 0; i < kanna.boom;i++)
    boom_pool.push(new B(bing,-233,-233,0,0));
statectx.font="30px Arial";
mainctx.font="56px Arial";

sbgmain[0].onload = function main(){
    mainctx.drawImage(sbgmain[0], 0, 0);
    statectx.drawImage(sbgst[0], 0, 0);
    refTimer = setInterval(function () {
        resize();
        if (ppp&&los&&mmm){
            mainctx.clearRect(0, 0, 1200, 675);
            mainctx.drawImage(bg, 0, 0);
            kobayashi.draw(mainctx);
            bakaCheck(kanna,baka_pool);
            boomCheck(kanna,boom_pool,baka_pool,mainctx);
            Xcheck(kobayashi,kanna,baka_pool);
            if((32 in keysDown)&&(boomper--==1))
                kanna.setB(boom_pool);
            moveM(kanna,mainctx);
            kanna.move(mainctx);
                           
            statectx.clearRect(0, 0, 1200, 100);
            statectx.drawImage(stbg, 0, 0);
            for (var i = 0; i < kanna.hp; i++)
                statectx.drawImage(kimg[0], 88+i*41, 13, 32 ,32);
            for (var i = inithp-1; i >= kanna.hp; i--)
                statectx.drawImage(kimg[1], 88+i*41, 13, 32 ,32);
            for (var i = 0; i < kobayashi.hp; i++)
                statectx.drawImage(ling[0], 615+i*41, 54, 32 ,32);
            for (var i = initzz-1; i >= kobayashi.hp; i--)
                statectx.drawImage(ling[1], 615+i*41, 54, 32 ,32);
              
            statectx.fillStyle="#2c4040";
            allkill=0;
            for (var i = 0; i < kanna.kill.length; i++){
                allkill+=kanna.kill[i];
                statectx.fillText(kanna.kill[i],170+82*i,83,32);
            }
            
            statectx.fillText(wt , 954, 83);
            statectx.fillText(boomnum , 954, 40);
            statectx.fillStyle="#207846";
            statectx.fillText(allkill,457,83,32);
                           
            for (var i = 0; i < kanna.st.length; i++)
                 statectx.drawImage(stpic[(kanna.st[i]>0?4:0)+i], 656+i*41, 14, 32 ,32);
                           
            if(kanna.hp<=0||kobayashi.hp<=0)lose(mainctx,statectx);
            if(allkill>=wk||wt<=0)win(mainctx,statectx);
        }
    }, reftime );
    
    bakaTimer = setInterval(function () {
        if (ppp&&los&&mmm)
            addM(baka_pool,ming,inithp_M,initspd_M);
        if(kanna.sum>0)kanna.img=kimg[1];
        else kanna.img=kimg[0];
    }, bakacd );
    
    boomSlowTimer = setInterval(function () {
        boomper=1;
    }, boomcd );
    
    stateTimer = setInterval(function () {
        ttt++;
        if (ppp&&los&&mmm){
            kanna.stCheck();
            kobayashi.stCheck();
        }
        else if(!ppp){
            statectx.clearRect(0, 0, 1200, 100);
            statectx.drawImage(pbg[ttt%2], 0, 0);
        }
        else if(!mmm){
            statectx.clearRect(0, 0, 1200, 100);
            statectx.drawImage(sbgst[ttt%2], 0, 0);
        }
        if(wt>0)wt--;
    }, 1000 );
    
}

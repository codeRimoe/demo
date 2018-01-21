//obj B
var B = function (image,x,y,hp,st){
    this.rot=Math.floor(5*Math.random());
    this.img = image[this.rot];
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.st=st;
};

B.prototype.draw = function (ctx) {
    ctx.drawImage(this.img, this.x-16, this.y-16, 32 ,32);
};

B.prototype.explode = function (ctx) {
    if(this.hp<=0){
        if(this.x>0&&this.y>0){
            this.x = -233;
            this.y = -233;
        }
    }
    else if(this.hp>0){
        this.hp--;
    }
    if (ppp&&los&&mmm){
        this.rot++
        this.img=bing[this.rot%6];
    }
    this.draw(ctx);
};

boomCheck = function(K,boom_pool,baka_pool,ctx){
    boomnum=0;
    for(i = 0; i < K.boom;i++){
        if(boom_pool[i].hp<=0)boomnum++;
        boom_pool[i].explode(mainctx);
        for(j = 0; j < baka_pool.length;j++){
            if(touch(boom_pool[i],baka_pool[j],22+2*baka_pool[j].hp)){
                boom_pool[i].hp=0;
                baka_pool[j].hp-=1;
                if(baka_pool[j].hp<=0){
                    switch(baka_pool[j].type){
                        case 0:K.kill[1]++;break;
                        case 1:K.kill[3]++;break;
                        case 2:K.kill[2]++;break;
                        case 3:K.kill[0]++;break;
                    }
                }
            }
        }
    }
}

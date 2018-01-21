var X = function (image,hp,st){
    this.img = image;
    this.hp = hp;
    this.st=st;
    this.x=CBW/2;
    this.y=CBH/2;
};

X.prototype.draw = function (ctx) {
    var i=this.st>0?1:0;
    ctx.drawImage(this.img[i], CBW/2-16, CBH/2-16, 32 ,32);
};

Xcheck = function(X,K,baka_pool){
    if((!X.st)&&(touch(X,K,64))){
        X.st=20;
        X.hp--;
    }
    for(i = 0; i<baka_pool.length;i++)
        if((!X.st)&&(touch(X,baka_pool[i],54+2*baka_pool[i].hp))){
            X.st=20;
            X.hp--;
            baka_pool[i].hp=0;
            break;
        }
}

X.prototype.stCheck = function(){
    if(this.st>0)
        this.st-=1;
    else
        this.st=0;
}

//obj M

var M = function (image,x,y,hp,spd,type){
    this.img = image[type];
    this.x = x;
    this.y = y;
    this.type = type;
    this.hp = hp;
    this.spd = spd;
};

M.prototype.draw = function (ctx) {
    ctx.drawImage(this.img, this.x-16, this.y-16, 12+4*this.hp ,12+4*this.hp);
};

M.prototype.move = function (K,ctx) {
    if(this.hp>0){
        var dis_mid = (this.x-400)^2+(this.y-225)^2;
        var dis_K = (this.x-K.x)^2+(this.y-K.y)^2;
        var xx=400,yy=225;
        //if(dis_mid<dis_K){
            xx=K.x;
            yy=K.y;
        //}
        var dt=Math.atan(Math.abs(xx-this.x)/Math.abs(yy-this.y));
        var dir = -1;
        if((xx>=this.x)&&(yy>this.y))dir = 0;
        if((xx<=this.x)&&(yy>this.y))dir = 1;
        if((xx<this.x)&&(yy<=this.y))dir = 2;
        if((xx>this.x)&&(yy<=this.y))dir = 3;

        var theta = Math.PI/2*dir+dt+Math.random()*Math.PI/10;
        this.x += Math.cos(theta)*this.spd;
        this.y += Math.sin(theta)*this.spd;
        if(this.y<=40)this.y=40;
        if(this.y>=CBH-24)this.y=CBH-24;
        if(this.x<=58)this.x=58;
        if(this.x>=CBW-12)this.x=CBW-12;
    }
    else if(this.hp<=0){
        if((this.x>=0)||(this.y>0)){
            this.x = -2333;
            this.y = -2333;
        }
    }
    this.draw(ctx);
};

addM = function(baka_pool,image,hp,spd){
    var side = Math.ceil((Math.random()*4));
    var birthX = (side%2)*Math.random()*CBW+(side==4)*CBW;
    var birthY = (!(side%2))*Math.random()*CBH+(side==3)*CBH;
    var i = 0;
    side = Math.floor((Math.random()*4));
    for(;i < baka_pool.length;i++)
        if (baka_pool[i].hp<=0){
            baka_pool[i].hp=inithp_M+Math.floor(4*Math.random())-2;
            baka_pool[i].x=birthX;
            baka_pool[i].y=birthY;
            baka_pool[i].spd=spd;
            baka_pool[i].type=side;
            baka_pool[i].img=image[side];
            break;
        }
    if(i>=baka_pool.length)
        baka_pool.push(new M(image,birthX,birthY,hp,spd,side));
    return 1;
}

moveM = function(K,ctx){
    for(i=0;i<baka_pool.length;i++)
        baka_pool[i].move(K,ctx);
}

bakaCheck = function(K,baka_pool){
    for(i = 0; i<baka_pool.length;i++)
        if((touch(K,baka_pool[i],22+2*baka_pool[i].hp))&&(K.st[0]==0)){
            switch(baka_pool[i].type){
                case 0:if(K.st[1]==0)K.st[1]=5;break;
                case 1:if(K.st[2]==0)K.st[2]=4;break;
                case 2:if(K.st[3]==0)K.st[3]=2;break;
                case 3:K.hp-=1;K.st[0]=3;break;
            }
            baka_pool[i].hp=0;
        }
}

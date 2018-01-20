//obj K
var K = function (image,x,y,hp,spd,boom,st){
    this.img = image[0];
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.spd = spd;
    this.boom = boom;
    this.st=st;
    this.kill=[0,0,0,0];
    this.sum=0;
};

K.prototype.draw = function (ctx) {
    ctx.drawImage(this.img, this.x-16, this.y-16, 32 ,32);
};

K.prototype.move = function (ctx) {
       //stop [ud,spdown,rew,dizz,]
    this.sum=0;
    this.spd = initspd;
    if(this.st[0])
        this.sum++;
    if(this.st[1]) {
        this.spd = initspd - 3 ;
        this.sum ++;
    }
    if(this.st[2]){
        this.spd *= -1 ;
        this.sum ++;
    }
    if(this.st[3]){
        this.spd = 0 ;
        this.sum ++;
    }
    this.y += (38 in keysDown)*(-this.spd)+(40 in keysDown)*this.spd;
    this.x += (37 in keysDown)*(-this.spd)+(39 in keysDown)*this.spd;
    if(this.y<=48)this.y=48;
    if(this.y>=CBH-48)this.y=CBH-48;
    if(this.x<=48)this.x=48;
    if(this.x>=CBW-48)this.x=CBW-48;
    if(kanna.sum>0)kanna.img=kimg[1];
    else kanna.img=kimg[0];
    this.draw(ctx);
};

K.prototype.setB = function (B) {
    for(i=0;i<B.length;i++){
        if(B[i].hp<=0){
            B[i].x = this.x;
            B[i].y = this.y;
            B[i].hp = bexptime;
            break;
        }
    }
};

K.prototype.stCheck = function(){
    for(i=0;i<this.st.length;i++){
        if(this.st[i]>0){
            this.st[i]-=1;
        }
        else{
            this.st[i]=0;
        }
    }
}

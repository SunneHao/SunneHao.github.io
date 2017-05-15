// var boxs=document.querySelector(".box-zhong");
var bigbox=document.querySelector(".bigbox");
var open=document.querySelector(".open");
var start=document.querySelector(".start");
start.onclick=function () {
    bigbox.style.display="none";
    open.style.display="block";
};

var deifen=document.querySelector(".scor");
var guan=document.querySelector(".guan");
var life=document.querySelector(".life");
var stop=document.querySelector(".box2");
class Game{
    constructor(main,scor,guan,life){// 创建属性对象
        this.main=main;
        this.num=3;
        this.obj={};
        this.scorele=scor;
        this.scor=0;
        this.guan=0;
        this.guanele=guan;
        this.speed=5;
        this.height=window.innerHeight;
        this.lifeele=life;
        this.life=5;
        this.bestScore = localStorage.bestScore ? JSON.parse(localStorage.bestScore) : [];
        var st;
    }
    bb(){
        var div=document.createElement("div");//创建一个元素
        div.className="letter";
        do {
            var rn = Math.floor(Math.random() * 26 + 65);//去65~90的随机数
            var le = String.fromCharCode(rn);       //将Asall码转化为单词
        }while (this.obj[le]);
        div.style.background="url(img/"+le+".png) no-repeat center";       //将创建的元素插入到HTML中
        do{
            var rl=Math.random()*1500;
        }while (this.check1(rl));
        div.style.left=rl+"px";
        var rt=-Math.random()*200;
        div.style.top=rt+"px";
        this.obj[le]={left:rl,top:rt,el:div};
        this.main.appendChild(div);
    }

    check1(left){
        for(var i in this.obj){
            if(this.obj[i].left-100<left&&left<this.obj[i].left+100){
                return true;
            }
        }
    }
    play1() {
        for(var i=0;i<this.num;i++){
            this.bb();
        }
        this.move();
        this.keydown();
        game.startControl=false;
    }
    move(){
        this.st=setInterval(function () {
            for(var i in this.obj){
                var t=this.obj[i].top;
                t+=this.speed;
                this.obj[i].top=t;
                this.obj[i].el.style.top=t+"px";
                if(t>this.height){
                    this.life--;
                    this.lifeele.innerHTML=this.life;
                    this.main.removeChild(this.obj[i].el);
                    delete this.obj[i];
                    this.bb();
                    if(this.life==0){
                        this._gameover();
                        return;
                    }
                }
            }
        }.bind(this),50);
    }
    _gameover(){
        alert(`游戏结束！得分为${this.scor}`);
        this.main.innerHTML=null;
        this.obj={};
        this.speed=5;
        this.scor=0;
        this.life=5;
        this.guan=1;
        this.lifeele.innerHTML=5;
        this.height=window.innerHeight;
        this.startControl=true;
        clearInterval(this.st);

    }
    keydown(){
        document.onkeydown=function (e) {
            var keycode=e.keyCode;
            var h=String.fromCharCode(keycode);
            if(this.obj[h]){
                this.main.removeChild(this.obj[h].el);
                delete this.obj[h];
                this.bb();
                this.scor++;
                this.scorele.innerHTML=this.scor;
                if(this.scor%10==0){
                }
                this._upguan();
            }
        }.bind(this)
    }
    _upguan(){
        this.guan++;
        this.guanele.innerHTML=this.guan;
        if(this.guan<=3){
            this.num++;
            this.bb();
        }else{
            this.speed++;
        }

    }
    stop(){
        clearInterval(this.st);
    }
    play(){
        this.move();
        this.keydown();
    }
}
var main=document.querySelector(".main");
var game=new Game(main,deifen,guan,life);
var starts=document.querySelector(".box1");
game.startControl=true;
starts.onclick=function () {
    if(game.startControl){
        game.play1();
    }
};
var flag=true;
stop.onclick=function () {
    if(flag){
        game.stop();
        document.onkeydown=null;
        // stop.innerHTML="继续"
    }else{
        // stop.innerHTML="暂停";
        game.play();
    }
    flag=!flag;
};

var ph=document.querySelector(".paihang");
var phtn=document.querySelector(".downs");
var mask=document.querySelector(".mask");
ph.onclick=function () {
    mask.style.display="block";
};
phtn.onclick=function () {
    mask.style.display="none";
};
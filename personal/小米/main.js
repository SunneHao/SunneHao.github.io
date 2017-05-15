var banner=document.querySelector(".banner");
var banners=document.querySelectorAll(".banner .zhutu1");
var hzs=document.querySelectorAll(".yuan .dian");
var zuojian=document.querySelector(".jiantou");
var youjian=document.querySelector(".jiantou1");
var jt=document.querySelector(".jt-left");
var jts=document.querySelector(".jt-right");
var hxk=document.querySelector(".hxk");
var newhzs=hzs[0];
var newbanners=banners[0];
Array.from(hzs).forEach(function (ele,index) {
    ele.onmousemove=function () {
        newhzs.style.background="#394662";
        this.style.background="#fff";
        newhzs=this;
        newbanners.style.zIndex=1;
        newbanners.style.opacity=0;
        banners[index].style.zIndex=2;
        banners[index].style.opacity=1;
        newbanners=banners[index];
        num=index;
    }
});
var num=0;
var t=setInterval(move,2000);
function move() {
    num++;
    if(num==-1){
        num=hzs.length-1;//等于-1时候变成最后一张
    }
    if(num==6){
        num=0;
    }
    newhzs.style.background="#394662";
    hzs[num].style.background="#fff";
    newhzs=hzs[num];
    newbanners.style.zIndex=1;
    newbanners.style.opacity=0;
    banners[num].style.zIndex=2;
    banners[num].style.opacity=1;
    newbanners=banners[num];
}
banner.onmousemove=function () {
    clearInterval(t);
};
banner.onmouseout=function () {
    t=setInterval(move,2000);
};
zuojian.onclick=function () {
    num-=2;//move是自动播放下一张现在想要返回上一张的话就是num-2
    move()
};
youjian.onclick=function () {
    move()
};

jt.onclick=function () {
  hxk.style.marginLeft=-1226+"px";
};
jts.onclick=function () {
  hxk.style.marginLeft=0;
  hxk.style.marginRight=1226+"px";
};
var num1=0;
var t1=setInterval(move1,5000);
function move1() {
    num1++;
    if(num1%2!=0){
        hxk.style.marginLeft=-1226+"px";
        jt.style.opacity=0;
        jts.style.opacity=1;
    }else{
        hxk.style.marginLeft=0;
        jts.style.opacity=0;
        jt.style.opacity=1;
    }
}

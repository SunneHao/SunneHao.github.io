var banner=document.querySelector(".banner");
var banners=document.querySelectorAll(".banner .zhutu");
var hzs=document.querySelectorAll(".hz .dian");
var zuojian=document.querySelector(".banner2");
var youjian=document.querySelector(".banner3");
var newhzs=hzs[0];
var newbanners=banners[0];
Array.from(hzs).forEach(function (ele,index) {
    ele.onmousemove=function () {
        newhzs.style.background="#fff";
        this.style.background="red";
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
    newhzs.style.background="#fff";
    hzs[num].style.background="red";
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


var lists=document.querySelectorAll(".lists>li");
var seclists=document.querySelectorAll(".seclist");
var arr=[];
Array.from(seclists).forEach(function (ul,index) {
    var lis=ul.querySelectorAll("li");
    //console.log(lis)
    var height=lis.length*40-20;
    arr.push(height);
});
Array.from(lists).forEach(function (li,i) {
    li.onmouseover=function () {
        seclists[i].style.height=arr[i]+"px"
    };
    li.onmouseout=function () {
        seclists[i].style.height=0;
    };
});

var weixin=document.querySelector(".weixin");
var wxbox=document.querySelector(".wxbox");
weixin.onmousemove=function () {
    wxbox.style.display="block";
};
weixin.onmouseout=function () {
    wxbox.style.display="none";
};

var top=document.querySelector(".guding");
top.onclick=function(){
    animate(document.body,{scrollTop:0},300);
};
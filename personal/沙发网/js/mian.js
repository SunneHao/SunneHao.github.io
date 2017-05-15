var banner=document.querySelector(".bannertu");
var tps=document.querySelectorAll(".tu");
var num=0;
var newtps=tps[0];
var t=setInterval(move,4000);
function move() {
    num++;
    if(num==2){
        num=0;
    }
    newtps.style.opacity=0;
    newtps.style.zInde=1;
    tps[num].style.opacity=1;
    tps[num].style.zIndex=2;
    newtps=tps[num];
}
banner.onmousemove=function () {
    clearInterval(t)
};
banner.onmouseout=function () {
  t=setInterval(move,4000)
};
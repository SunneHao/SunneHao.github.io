
function creak(aa,bb) {
    t=setInterval(getTime,1000);
    $(".flagnum").html("flag:"+aa);
    do{
        $(".box").empty();
        for (var i=0;i<10;i++){
            for(var j=0;j<10;j++){
                var isLei=Math.random()>bb;
                $("<div>")
                    .addClass(function () {
                        if(isLei){
                            return "inner lei"
                        }else{
                            return "inner"
                        }
                    })
                    .attr("id",i+"-"+j)
                    .data("pos",{x:i,y:j})
                    .mousedown(mousedownEvent)
                    .appendTo(".box")
            }
        }
    }while($(".lei").length!=aa);
}
// creak(10,0.9);
function Restart() {
        aa=newaa;
        clearInterval(t);
        ticker=0;
        if(aa==10){
            creak(10,0.9);
        }else{
            creak(15,0.85);
        }
        $(".flagnum").html("flag:"+newaa);
}
$(".open").click(function () {
    Restart();
});
$(".again").click(function () {
    Restart();
    $(".gameover").css("display","none")
});
$(".guit").click(function () {
    window.close();
});
function mousedownEvent(e) {
    if(e.which==1){
        leftclick.call(this);
    }else{
        rightclick.call(this);
    }
}
function leftclick() {
    if($(this).hasClass("flag")){
        return;
    }
    if($(this).hasClass("lei")){
        $(".lei").addClass("show");
        alert("点到雷了！");
        $(".gameover").css("display","block");
        clearInterval(t);
    }else{
        $(this).addClass("num");
        var pos=$(this).data("pos");
        var n=0;
        for(var i=pos.x-1;i<=pos.x+1;i++){
            for(var j=pos.y-1;j<=pos.y+1;j++){
                if($("#"+i+"-"+j).hasClass("lei")){
                    n++
                }
            }
        }
    }
    $(this).html(n);
    if(n==0){
        for(var i=pos.x-1;i<=pos.x+1;i++){
            for(var j=pos.y-1;j<=pos.y+1;j++){
                var obj=$("#"+i+"-"+j);
                if(obj.length==1&&!obj.hasClass("num")){
                    leftclick.call(obj[0]);
                }
            }
        }
    }
}
var aa;
var newaa=0;
function rightclick() {
    if($(this).hasClass("num")){
        return;
    }
    if($(this).hasClass("flag")){
        $(this).removeClass("flag");
        aa++;
    }else{
        aa--;
        console.log(aa);
        if(aa<0){
            aa++;
            alert("错误");
            return
        }
        $(this).addClass("flag");
        if(aa==0){
            if($(".flag").filter(".lei").length==newaa){
                alert("成功!");
                clearInterval(t);
            }else{
                alert("请重新选择")
            }
        }

    }
    $(".flagnum").html("flag:"+aa);
}
$(document).on("contextmenu",function (e) {
    e.preventDefault();
});
var ticker=0;
var min=0;
var sec=0;
var time=$(".time");
var t;
function getTime() {
    min = Math.floor(ticker/60);
    sec = (ticker-(min*60))+'';
    if(sec.length == 1) {sec = "0"+sec}
    ticker++;
    time.html(min+":"+sec);
}
// t= setInterval(getTime, 1000);
$(".anniu").click(function () {
    aa=newaa=10;
    $(".mask").css("display","none");
    $(".flagnum").html("flag:"+10);
    creak(10,0.9);
});
$(".anniu1").click(function () {
    aa=newaa=15;
    ticker=0;
    $(".mask").css("display","none");
    $(".flagnum").html("flag:"+15);
    creak(15,0.85);
});
$(".guan").click(function () {
    ticker=0;
    clearInterval(t);
    $(".mask").css("display","block")
});

//排行榜
$(".paihangbox").click(function () {
   $(".paihang").toggleClass("lol")
});
var inner=$(".skill2");
var content=$(".skill1");
var jt=$(".jt");
var jt1=$(".jt1");
jt1.click(function () {
    inner.css("transition","all 1s ease");
    inner.css("left",-1057);
});
jt.click(function () {
    // inner.css("transition","all 1s ease");
    inner.css("left",0);
});

	var banner=document.querySelector(".banner");
	var banner1=document.querySelectorAll(".banner1 img");
	var lb=document.querySelectorAll(".lunbobox ul li");
	var obj=lb[0];
	var obj1=banner1[0];
	var colorArr=["#134FD8","#E8E8E8","#E8E8E8","#FB8001","#E8E8E8","#FEEC27"];
	Array.from(lb).forEach(function (ele,index) {
		ele.onmouseover=function () {
			num=index;
			banner.style.background=colorArr[num];
			obj.style.background="#F1F1F1";
			lb[num].style.background="#A2A2A2";
			obj=lb[num];
			obj1.style.zIndex=1;
			obj1.style.opacity=0.5;
			banner1[index].style.zIndex=2;
			banner1[index].style.opacity=1;
			obj1=banner1[index];
		}
	});
	var num=0;
	var t=setInterval(move,2000);
	function move() {
		num++;
		if(num==lb.length){
			num=0;
		}
		banner.style.background=colorArr[num];
		obj.style.background="#F1F1F1";
		lb[num].style.background="#A2A2A2";
		obj=lb[num];
		obj1.style.zIndex=1;
		obj1.style.opacity=0.5;
		banner1[num].style.zIndex=2;
		banner1[num].style.opacity=1;
		obj1=banner1[num];
	}
	banner.onmouseover=function () {
		clearInterval(t);
	};
	banner.onmouseout=function () {
		t=setInterval(move,2000);
	};


	var cons=document.querySelectorAll(".main-middle1-top li");
	var btns=document.querySelectorAll(".main-middle1-zhong1");
	var masks1=document.querySelectorAll(".mask");
	var container=document.querySelector(".main-middle1");
	var inner=document.querySelector(".inner");
	var leftjt=document.querySelector(".left-jt");
	var rightjt=document.querySelector(".right-jt");
	var num2=0;
	function zuoyou() {
		num2++;
		if(num2==2){
			num2=0;
		}
		inner.style.marginLeft=-488*num2+"px";
	}
	leftjt.style.display="none";
	leftjt.onclick=function () {
		num2-=2;
		zuoyou();
		leftjt.style.display="none";
		rightjt.style.display="block";
	};
	rightjt.onclick=function () {
		zuoyou();
		rightjt.style.display="none";
		leftjt.style.display="block";
	};
	Array.from(btns).forEach(function (ele,index) {
		ele.onmouseover=function () {
			num1=index;
			for(var i=0;i<btns.length;i++){
				cons[i].style.display="none";
				masks1[i].style.opacity="0";
			}
//			this.style.color="red";
			cons[index].style.display="block";
			masks1[index].style.opacity="1";
		};
		ele.onmouseout=function () {
			masks1[index].style.opacity="1";
		}
	});
	var num1=0;
	var t1=setInterval(move1,2000);
	function move1() {
		num1++;
		if(num1==btns.length){
			num1=0;
		}
//		zuoyou();
		for(var i=0;i<btns.length;i++){
//			btns[i].style.color="#000";
			cons[i].style.display="none";
			masks1[i].style.opacity="0";
		}
		cons[num1].style.display="block";
		masks1[num1].style.opacity="1";
	}
	container.onmouseover=function () {
		clearInterval(t1);
	};
	container.onmouseout=function () {
		t1=setInterval(move1,2000);
	};

	var divs=document.querySelectorAll(".zhezhao1");
	var masks=document.querySelectorAll(".zhezhao2");
	Array.from(divs).forEach(function (v,i) {
		v.onmouseover=function () {
			masks[i].style.opacity="1";
		};
		v.onmouseout=function () {
			masks[i].style.opacity="0";
		};
	});

	var lis = document.querySelectorAll(".header-right99");
	var seclists = document.querySelectorAll(".header-right1-1");
	var arr=[];//用来保存每一个ul的高度
	Array.from(seclists).forEach(function (ul) {
		let lis=ul.querySelectorAll("li");
		let height=lis.length*30;
		arr.push(height);
	});
	Array.from(lis).forEach(function (li,index) {
		li.onmouseover=function () {
			seclists[index].style.height=arr[index]+"px";
		};
		li.onmouseout=function () {
			seclists[index].style.height=0+"px";
		}
	});



	var gudingleft=document.querySelector(".guding-left");
	var tps=document.querySelector(".topbar");
	window.onscroll=function () {
		var obj=document.body;
		var st=obj.scrollTop;
		if(st>690){
			tps.style.top="0";
			gudingleft.style.height="332px";
			gudingleft.style.width="35px";

		}else{
			tps.style.top="-50px";
			gudingleft.style.width="0";
			gudingleft.style.height="0";
		}
	};

//侧栏飞入效果
var boxs=document.querySelectorAll(".aaa");
var tips=document.querySelectorAll(".tip");
var t5;
Array.from(boxs).forEach(function (box,index) {
	hover(box,function () {
		clearTimeout(t5);
		t5=setTimeout(function () {
			tips[index].classList.add("fly");
		},300);
	},function () {
		clearTimeout(t5);
		if(tips[index].classList.contains("fly")){
			tips[index].classList.remove("fly");
			tips[index].classList.add("hide");
		}
	});
});
Array.from(tips).forEach(function (tip) {
	tip.addEventListener("animationend",function () {//addEventListener 是添加事件的方法
		if(tip.classList.contains("hide")){
			tip.classList.remove("hide");
		}
	});
});
//返回顶部
var totop=document.querySelector(".totop");

totop.onclick=function () {
	animate(document.body,{scrollTop:0},300);
};
//左侧栏跳转页面高度
//console.clear();
var tts=document.querySelectorAll(".tts");
var jjg=document.querySelectorAll(".mimi");
Array.from(tts).forEach(function (ele,index) {
	var st8=jjg[index].offsetTop;
	//console.log(st1)
	ele.onclick=function () {
		animate(document.body,{scrollTop:st8+500},300);
	};
});
//下拉
var yi=document.querySelector(".header-right3");
var xiala=document.querySelector(".menu-bd");
yi.onmousemove=function () {
	xiala.style.display="block";
};
yi.onmouseout=function () {
	xiala.style.display="none";
};
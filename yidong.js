$(function(){
		var box=$(".banner-middle")[0];
		var imgs=$(".img");
		var circles=$(".circle");
		var one=$(".selected");
		var right=$(".right")[0];
		var left=$(".left")[0];
		var n=0;
		var next=0;
		var flag=true;
		var t=setInterval(move,2000);
		function move(){
			if(!flag){
				return;
			}
			flag=false;
			next=n+1;
			if(next>=imgs.length){
				next=0;
			}
			for(var i=0;i<imgs.length;i++){
				circles[i].style.background="#ccc";
				
			}
			imgs[n].style.opacity=1;
			imgs[next].style.opacity=0;
			circles[next].style.background="red";
			imgs[next].style.zIndex=1;
			animate(imgs[n],{opacity:0},1000);
			animate(imgs[next],{opacity:1},1000,function(){flag=true});
			n=next;
		}
		function move1(){
			if(!flag){
				return;
			}
			flag=false;
			next=n-1;
			if(next<0){
				next=imgs.length-1;
			}
			for(var i=0;i<imgs.length;i++){
				circles[i].style.background="#ccc";
				imgs[n].style.opacity=1;
				imgs[next].style.opacity=0;
			}
			circles[next].style.background="red";
			imgs[next].style.zIndex=1;
			animate(imgs[n],{opacity:0},1000);
			animate(imgs[next],{opacity:1},1000,function(){flag=true});
			n=next;
		}
		box.onmouseover=function(){
			clearInterval(t);
			left.style.display="block"
		    right.style.display="block"
		}
		box.onmouseout=function(){
			t=setInterval(move,3000);
			left.style.display="none"
		    right.style.display="none"
		}
		right.onclick=function(){
			move();
		}
		left.onclick=function(){
			move1();
		}
		for(var i=0;i<imgs.length;i++){
			circles[i].index=i;
			circles[i].onclick=function(){
				for(var j=0;j<circles.length;j++){
					circles[j].style.background="#ccc";
					imgs[n].style.opacity=1;
				    imgs[this.index].style.opacity=0;
				}
					circles[this.index].style.background="red";
					imgs[this.index].style.zIndex=1;
					animate(imgs[n],{opacity:0},1000);
					animate(imgs[this.index],{opacity:1},1000);
					n=this.index;
		    }
		}



		var box1=$(".lunbo")[0];
		var zuo=$(".left1")[0];
		var you=$(".right1")[0];
		var flag=true;
		var m=setInterval(dong,5000)
		function dong(){
			if(!flag){
				return;
			}
			flag=false;
			var img=getFirst(box1);
			animate(box1,{left:-294},200,function(){
				box1.appendChild(img);
				box1.style.left=0;
				flag=true;
			})
		}
		function dong1(){
			if(!flag){
				return;
			}
			flag=false;
			var img=getFirst(box1);
			var img1=getLast(box1);
			insertBefore(img1,img);
			box1.style.left=-294+"px";
			animate(box1,{left:0},200,function(){
				flag = true;
			})
		}
		$(".active")[0].onmouseover=function(){
			clearInterval(m);
			zuo.style.display="block";
	 		you.style.display="block";
		}
		$(".active")[0].onmouseout=function(){
			m=setInterval(dong, 1500);
			zuo.style.display="none";
	 		you.style.display="none";
		}
		zuo.onclick=function(){
			dong();
		}
		you.onclick=function(){
			dong1()
		}



       var  mune=$(".nav-lis"); 
	   var  mune2=$(".hid");
	    for(var i=0;i<mune.length;i++){
	    mune[i].index=i;
	    mune[i].onmouseover=function(){    
	      for(var j=0;j<mune2.length;j++){
	      mune2[j].style.display="none";
	    }
	      mune2[this.index].style.display="block";
	   }
	   mune[i].onmouseout=function(){
	   mune2[this.index].style.display="none";
	   }

     } 

    


    var headlogin=$("#headlogin");
    var loghid=$(".loghid")[0];
    headlogin.onmouseover=function(){
        loghid.style.display="block";
    }
    headlogin.onmouseout=function(){
        loghid.style.display="none";
    }


    var yingyeting=$("#yingyeting");
    var erweima=$(".erweima")[0];
    yingyeting.onmouseover=function(){
        erweima.style.display="block";
    }
    yingyeting.onmouseout=function(){
        erweima.style.display="none";
    }






	})

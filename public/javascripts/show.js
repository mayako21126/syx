$(function(){
    function offset(ele){//计算任意DOM元素距离文档的左或上的绝对偏移
        var l=ele.offsetLeft;
        var t=ele.offsetTop;
        var p=ele.offsetParent;
        while(p){
            if(window.navigator.userAgent.indexOf("MSIE 8")>-1){
                l+=p.offsetLeft;//加上上一级的边框
                t+=p.offsetTop;
            }else{
                l+=p.offsetLeft+p.clientLeft;//加上上一级的边框
                t+=p.offsetTop+p.clientTop;
            }
            p=p.offsetParent;
        }
        return {left:l,top:t}

    }
    var p= 0,t=0;
    $(window).scroll(function(){
        p=$(this).scrollTop();
        if(t<p){//向下
        if(t>=544)
        {
            $(".animateP").addClass("animated fadeInUp displayon");
          
        }
        if(t>=700)
        {
             $(".animateT").addClass("animated rollIn displayon");
        }
           // $(".rongNav").removeClass("showNav");
			//alert(t+""+p);
        }else{//向上
            if(p<=544){
				 $(".animateP").removeClass("animated fadeInUp displayon");
             //   $(".rongNav").removeClass("showNav");
            }else{
                if(p<=700)
                {
                     $(".animateT").removeClass("animated rollIn displayon");
                }
				//alert(t+""+p);
              //  $(".rongNav").addClass("showNav");
            }
        }
        setTimeout(function(){
            t=p;
        },0);
    });

});
function setFrameHeight(){
    var fra=document.querySelector("header>iframe");
    var topY;
    var header=document.querySelector("header");
    /*fra.onmouseover=function(e){
        e.stopPropagation();
        //leftX=e.offsetX;
        topY=e.clientY;
       console.log(topY);
        if(topY>=80&&topY<=161){
            fra.style.height="491px";

        }else{
            fra.style.height="161px";
        }
    }*/
    //设置iframe的高度
    header.onmouseenter=function(){
        fra.style.height="491px";
    }
   header.onmouseleave=function(){
        fra.style.height="161px";
   }
    
   //header中的链接
    var headerContent=fra.contentWindow.document.documentElement;
    var contactUs=headerContent.querySelector(".top .right span:nth-child(1) a");
    contactUs.onclick=function(){
        location.href="contactUs.html";
    }
    var meishitianxia=headerContent.querySelector(".top .right span:nth-child(3) a");
    meishitianxia.onclick=function(){
        location.href="https://www.meishichina.com";
    }
    var navs=headerContent.querySelectorAll(".menu #navBd li a");
    for(var nav of navs){
        nav.onclick=function(){
            var nav=this;
            if(nav.innerHTML=="网站首页"){
                location.href="index.html";
            }else if(nav.innerHTML=="走进美食"){
                location.href="comefood.html";
            }else if(nav.innerHTML=="区域美食"){
                location.href="quyu.html";
            }else if(nav.innerHTML=="饮食健康"){
                location.href="foodhealth.html";
            }else if(nav.innerHTML=="饮食文化"){
                location.href="foodculture.html";
            }else if(nav.innerHTML=="联系我们"){
                location.href="contactUs.html";
            }
        }
    }
    var downnavs=headerContent.querySelectorAll(".menu #navBd li dl a")
    for(var downnav of downnavs){
        downnav.onclick=function(){
            var downnav=this;
            if(downnav.innerHTML=="健康饮食"){
                location.href="foodhealth.html"
            }else if(downnav.innerHTML=="营养美食"){
                location.href="healthfood.html"
            }else if(downnav.innerHTML=="饮食文化"){
                location.href="foodculture.html"
            }else if(downnav.innerHTML=="饮食历史"){
                location.href="foodhistory.html"
            }else if(downnav.innerHTML=="用餐规范"){
                location.href="healthfood.html"
            }else{
                location.href="quyu.html"
            }
        }
    }
}

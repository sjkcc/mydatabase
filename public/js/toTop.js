var my_retop=document.getElementsByClassName("my_retop")[0];
var img=document.querySelector(".my_retop img");
var scrool;
window.onscroll=function(){
    scrool=document.documentElement.scrollTop;
    if(scrool>500) {
        my_retop.style.bottom = "10%";
        my_retop.style.opacity=1;
    }else{
        my_retop.style.bottom = "80%";
        my_retop.style.opacity=0;
    }
}
my_retop.onclick=function(){
    my_retop.style.transition="800ms";
    var timer=setInterval(function(){
        document.documentElement.scrollTop=scrool-scrool/5;
        if(scrool<=0){
            clearInterval(timer)
        }
    },30)
}/**
 * Created by web on 2019/6/15.
 */

$(window).scroll(function(){
    if(scrollY>50){
        $(".headthfoodmain .title").css("top",50)
    }else{
        $(".headthfoodmain .title").css("top",170)
    }
})
var $text=$(".headthfoodmain .text");
//var text=document.querySelectorAll(".headthfoodmain .text div:nth-child(2n)");
$text.on("click",".texttitle",function(){
    //$(this).next().toggleClass("in");
    if($(this).next().is(".in")){
        $(this).next().removeClass("in");
    }else{
        $(this).next().addClass("in").siblings(".content").removeClass("in");
    }
}
)


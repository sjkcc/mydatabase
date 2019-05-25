$(function () {
    menu(); //菜单
  });
function menu(){
    //nav初始化选中
    var navCurr = $("#navCurr");
    $("#navSelected").css("left", navCurr[0].offsetLeft);

    //nav里的链接hover效果
    $("#navBd li").hover(function () {
        if (!!$("#navSelected").stop(true).animate({ left: $(this)[0].offsetLeft }, 400, "easeOutBack")) {
            $(this).siblings().removeClass("ov").end().addClass("ov");
            $(this).find("a").hide().fadeIn(300);
        }
        $(this).children("dl").slideDown(300);

    }, function () {
        $(this).removeClass("ov");
        $("#navCurr").addClass("ov");
        $("#navSelected").stop(true).animate({ left: navCurr[0].offsetLeft }, 300, "easeOutBack");
        $(this).find("dl").stop(true, true).slideUp(100, 0);
    }
	);

}



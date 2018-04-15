//侧边栏点击事件
$('.two').click(function(){
    $(this).next().slideToggle();
    $(this).parent().siblings().find('.erJ').slideUp();
});

$(".erJ a").click(function(){
    $(this).css({"border-left":"3px solid #ea2020"});
    $(this).siblings().css({"border-left":"3px solid #f0f9fd"});
});
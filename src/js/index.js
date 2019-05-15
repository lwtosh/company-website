
// 导航栏
$(window).scroll( function () {
    if ($(window).scrollTop() > 150) {
        $('#mu-header').addClass('mu-fixed-nav'); 
        console.log(2)     
	    } else {
            $('#mu-header').removeClass('mu-fixed-nav');
            console.log(3)
        }
        // console.log($(window).scrollTop())
});
 
$(function(){
    $.scrollUp({
        scrollName:"scrollUp",
        topDistance:"300",
        topSpeed:300,
        animation:"fade",
        animationInSpeed:200,
        animationOutSpeed:200,
        scrollText:'<span class="glyphicon glyphicon-arrow-up yc"></span>',
        activeOverlay:!1
    });
})

// 导航
$('#service').hover(function(){
    $('#box').fadeIn("show")
})
$('#box').mouseleave(function(){
    $('#box').fadeOut('hide')
})

// 功能
$('.gongneng-list').hover(function(i){
    　$('.gongneng-list').eq($(this).index()).addClass('colors').siblings().removeClass('colors')
},function(){
    $('.gongneng-list').removeClass('colors');
})  

$('.gongneng-list2').hover(function(i){
    　$('.gongneng-list2').eq($(this).index()).addClass('colors').siblings().removeClass('colors')
},function(){
    $('.gongneng-list2').removeClass('colors');
})  

// 交易
$('.xingshi-text').hover(function(i){
    　$('.xingshi-text').eq($(this).index()).addClass('yinying').siblings().removeClass('yinying')
},function(){
    $('.xingshi-text').removeClass('yinying');
})
// 区块链技术
$('.p-desc').mouseover(function(i){
    　$('.p-desc').eq($(this).index()).css('background-color',"#fff").siblings().css('background-color',"rgba(255, 255, 255, 0.1)")
    //   $('.p-right-title').eq($(this).index()).css('color','#333').siblings().css('color','#fff')
    //   $('.p-right-tet').eq($(this).index()).css('color','#666').siblings().css('color','#fff')
})
$('.p-desc').mouseleave(function(i){
 $('.p-desc').css('background-color',"rgba(255, 255, 255, 0.1)");
    $('.p-right-tet').css()
})

$('.blockfbox li').mouseover(function () {
    $(this).addClass('active').siblings('li').removeClass('active');
});

$(function() {
    $("#zixun a").hover(function() {
        if ($(this).prop("className") == "weixin_area") {
            $(this).children("img.hides").show();
        } else {
            $(this).children("div.hides").show();
            $(this).children("img.shows").hide();
            $(this).children("div.hides").animate({marginRight: '0px'}, '0');
        }
    }, function() {
        if ($(this).prop("className") == "weixin_area") {
            $(this).children("img.hides").hide();
        } else {
            $(this).children("div.hides").animate({marginRight: '-103px'}, 0, function() {
                $(this).hide();
                $(this).next("img.shows").show();
            });
        }
    });

    $("#top_btn").click(function() {
        $("html,body").animate({scrollTop: 0}, 600);
    });

    //右侧导航 - 二维码
    $(".weixin_area").hover(function() {
        $(this).children(".weixin").show();
    },function(){
        $(this).children(".weixin").hide();
    })
    // $(".weixin_area").hover(function() {
    //     $(this).children(".weixin").show();
    // },function(){
    //     $(this).children(".weixin").hide();
    // })
    $('#remove').click(function(){
    $('#advisory').fadeOut().hide()
    console.log(22)
    })
   $('#now-1').click(function(){
    $('#advisory').fadeOut().hide()
    })
});




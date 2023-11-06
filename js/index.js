$('.menu').click(function(e){
    e.preventDefault();
    $('.mognb').css({
        'left': '0'
    });
});

$('.language').click(function(e){
    e.preventDefault();
    $(this).children('.lanList').stop().slideToggle();
    $('.arrow').toggleClass("active");
    $(this).toggleClass('active');
    $('.selected').toggleClass('active');
});

$('.gnbClose').click(function(e){
    e.preventDefault();
    $('.mognb').css({
        'left':'-100%'
    })
});

$('h3').click(function(){
    $(this).siblings('ul').stop().slideToggle()
    .parent().siblings().children('ul')
    .stop().slideUp();

    // $(this).toggleClass('active').
    // parent().siblings().children('h3')
    // .removeClass('active');
});

$('.gallery .item').mouseover(function(){
    $(this).find('.subItem').css({
        'display': 'flex'
    });
}).mouseout(function(){
    $(this).find('.subItem').css({
        'display': 'none'
    });
});

$('.story button').click(function(){
    let i = $(this).index();

    $(this).addClass('active').siblings().removeClass('active');

    if(i == 0){
        $('.infoCon').css({
            'display':'flex'
        });
        $('.answerCon').css({
            'display':'none'
        });
        $('.newsCon').css({
            'display':'none'
        });
    } else if(i == 1){
        $('.answerCon').css({
            'display':'flex'
        });
        $('.infoCon').css({
            'display':'none'
        });
        $('.newsCon').css({
            'display':'none'
        });
    } else if(i == 2){
        $('.newsCon').css({
            'display':'flex'
        });
        $('.infoCon').css({
            'display':'none'
        });
        $('.answerCon').css({
            'display':'none'
        });
    }
});

$('.fItem').click(function(){
    $('.fList').stop().slideToggle();
    $('.fArrow').toggleClass("active");
});

$('.top').click(function(e){
    e.preventDefault();
    $('html,body').animate({
        'scrollTop':0
    },1000);
});

$(window).mousewheel(function(e,d){
    if(d>0) {
        
    } else if(d<0){
        $(window).scroll(function(){
            let scr = $(window).scrollTop();

            if(scr >= 0 && scr < 500) {
                $('.top').css({
                    'display':'none'
                });
            } else {
                $('.top').css({
                    'display':'block'
                });
            }
        });
    }
});

$('.pcgnb ul li').mouseover(function(){
    $('header .hWrap').css({
        'backgroundColor':'#fff',
        'borderBottom': '1px solid #111'
    });
    $('.pcgnb ul li').find('.pcsubGnb').addClass('active');
}).mouseout(function(){
    $('header .hWrap').css({
        'backgroundColor':'rgba(255,255,255,0.45)',
        'border': 0
    });
    $('.pcgnb ul li').find('.pcsubGnb').removeClass('active');
});
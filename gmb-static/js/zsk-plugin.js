//头部滚动
$(function(){
    $('.header').css({
        top:'30px'
    });
    $(window).scroll(function(){
        if($('.header').offset().top>40){
            $('.top-marks').fadeOut(200);
            $('.header').css({
                top:'0px'
            });
        }else{
            $('.top-marks').fadeIn(200);
            $('.header').css({
                top:'30px'
            });
        }
    });
    //右侧导航栏
    var menuRight = $('#cbp-spmenu-s2');
    $('.showRightPush').bind('click',function(){
        if($(menuRight).hasClass('cbp-spmenu-open')){
            menuRightHide();
            //$('.showRightPush').removeClass('icon-bar-3d');
        }else{
            menuRightShow();
            //$('.showRightPush').addClass('icon-bar-3d');
        }

    });
    $('.cbp-close').bind('click',function(){
        menuRightHide();
        //$('.showRightPush').removeClass('icon-bar-3d');
    });

    function menuRightShow(){
        $(menuRight).addClass('cbp-spmenu-open');
        $(this).addClass('active');
        $('body').addClass('cbp-spmenu-push-toleft');

        $('.header,.top-marks').css({
            'transform':'translateX(-240px)',
            'WebkitTransform':'translateX(-240px)',
            'MozTransform':'translateX(-240px)'
        });
    }
    function menuRightHide(){
        $(this).removeClass('active');
        $('body').removeClass('cbp-spmenu-push-toleft');
        $(menuRight).removeClass('cbp-spmenu-open');
        $('.header,.top-marks').css({
            'transform':'translateX(0)',
            'WebkitTransform':'translateX(0px)',
            'MozTransform':'translateX(0px)'
        });
    }
    //顶部搜索
    $('.btn-search').on('click',function(){
        $('.gome-search').addClass('gome-search-hasHeight');
    });
    $('.gome-search .search-close').on('click',function(){
        $('.gome-search').removeClass('gome-search-hasHeight');
    });
    $(document).on('click',function(e){
        var aTarget= $(e.target);
        if(aTarget.closest('.header,#cbp-spmenu-s2').length==0){
            $('.gome-search').removeClass('gome-search-hasHeight');
            menuRightHide();
        }
    });
   
});

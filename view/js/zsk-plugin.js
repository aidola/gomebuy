//头部滚动

$(function(){
    FastClick.attach(document.body);//移动端使用

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
        $('.gome-search').removeClass('gome-search-hasHeight');
        if($(menuRight).hasClass('cbp-spmenu-open')){
            menuRightHide();
        }else{
            menuRightShow();
        }

    });
    $('.cbp-close').bind('click',function(){
        menuRightHide();
    });

    function menuRightShow(){
        $(menuRight).addClass('cbp-spmenu-open');
        $(this).addClass('active');
        $('body').addClass('cbp-spmenu-push-toleft');

         $('.header,.top-marks').css({
            left: '-240px'
        })
    }
    function menuRightHide(){
        $(this).removeClass('active');
        $('body').removeClass('cbp-spmenu-push-toleft');
        $(menuRight).removeClass('cbp-spmenu-open');
         $('.header,.top-marks').css({
            left: '0px'
        })
    }

    //顶部搜索
    $('.btn-search').on('click',function(){
        //判断设备类型
        var u = navigator.userAgent;
        //var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        var isPhone = common.browserRedirect();
        if(isPhone == 'phone'){
            window.scrollTo(0,0);
            $('#mySearch').modal({
                keyboard: true,
                backdrop: true,
                show: true
            });
           
            $('#searchtxt').focus();

        }else{
            $('body').css({
                'height':'auto',
                'overflow-y':'scroll'
            });
            $('.gome-search').addClass('gome-search-hasHeight');
            $('#headSearch').focus();
        }
    });
    $('#mySearch .search-close').on('click',function(){
        $('#searchtxt').val('');
    });

    $('#mySearch').on('show.bs.modal', function () {
        $('body').on('touchmove',function(e){
            e.preventDefault();
        });
    });
    $('#mySearch').on('hide.bs.modal', function () {
        $('body').on('touchmove',function(event){
            if(event && event.preventDefault){
                window.event.returnValue = true;
            }
        });
    });

    $('.btn-search').on('click',function(){
        menuRightHide();
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

    //点击搜索事件
    $('#headSearch').keyup(function(e){
        if(e.keyCode == 13){
            var value=$(this).val();
            if($.trim(value) == ''){
                window.location.href="http://gomebuy"+cookieDomain+"/lookup";
            }else{
                window.location.href="http://gomebuy"+cookieDomain+"/lookup?q="+encodeURI(encodeURI(value));
                value='';
            }
        }
    });
    $('#mySearch .search-btn').click(function(){
        var value=$('#searchtxt').val();
        if($.trim(value) == ''){
            window.location.href="http://gomebuy"+cookieDomain+"/lookup";
        }else{
            window.location.href="http://gomebuy"+cookieDomain+"/lookup?q="+encodeURI(encodeURI(value));
            value='';
        }
    });

});

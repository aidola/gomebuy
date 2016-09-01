;(function (tpl) {

    //请求ajax地址
    var ajaxUrl = {
        con: 'http://gomebuy'+cookieDomain+'/api/data/zjdetail.do',
        list:'http://gomebuy'+cookieDomain+'/api/data/zjdetailgoods.do',
        addShare: 'http://gomebuy' + cookieDomain + '/api/data/addShare.do',//分享
        cookieUrl: 'http://ss' + cookieDomain + '/item/v1/cookie/atgregion/flag/public/ipWrite'
    };

    var globalVal =  {
        goodsCategoryId: '',
        pageNo: 0,
        atgregion:''//区域
    };

    //专辑详情页内容区
    var zjDetailCon = {
        //初始化
        init: function () {
            var _this = this;
            _this.getData();
        },
        //通过ajax获取数据
        getData: function () {
            var _this = this;

            //此处放ajax内容
            var request_data = {
                Url: ajaxUrl.con,
                RequestData: {
                    "id": $page.id
                },
                BeforeSend: common.loadingShow,
                Complete: common.loadingHide,
                Callback: _this.renderLists
            };
            common.getAjax(request_data);
        },

        //处理数据,生成页面
        renderLists: function (json) {
            $('.zj-container .album-content').append(tpl.zjdetailcon(json));//内容区
            if (json.data.articleInfo.content) {
                $('#zjDetailList').before(tpl.detailtxt(json));
            }
            //分享
            gomebuyShareTo.init($page.id, json.data.articleInfo.title);
            $('#prod-box-marks-btns .dropdown-menu-gmb').html(tpl.tablist(json));//列表tab标题
            $('.btn-dropdown-point').html($('.dropdown-menu-gmb>li.active').find('a').html());
            $('.dropdown-menu-gmb>li').on('click', function () {
                $(this).addClass('active').siblings().removeClass('active');
                $('.btn-dropdown-point').html($(this).find('a').html());

            });
            common.skipDetail('.relateList a');
            $('.relatedNative a').each(function () {
                var id = $(this).attr('num');
                if (id) {
                    var href = 'http://gomebuy' + cookieDomain + '/zjdetail/' + id;
                    $(this).attr('href', href);
                }
            })

            globalVal.goodsCategoryId = $('#prod-box-marks-btns .dropdown-menu-gmb>li.active').attr('num');
            operateCookie.init();//存取cookie

            /*$('.prod-box-marks-btns').css({
             width:($('.prod-box-marks-btns').children().outerWidth()+6)*$('.prod-box-marks-btns').children().length+'px'
             });*/

        }
    };
    //列表区
    var zjDetailList = {
        //初始化
        init: function () {
            var _this = this;
            _this.tabLoadEnd = false;
            _this.dropload = null;
            _this.fnDropLoad();
            _this.event();

        },
        //处理数据,生成页面
        fnDropLoad: function () {
            var _this = this;
            _this.dropload = $('#imgTxtListW').dropload({
                scrollArea: window,//滑动区域
                domDown: {                                                          // 下方DOM
                    domClass: 'dropload-down',
                    domRefresh: '<div class="dropload-refresh">滚动加载更多</div>',
                    domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
                    domNoData: '<div class="dropload-noData">没有更多了</div>'
                },
                distance: 10,//拉动距离
                threshold: $("#prod-box-marks").offset().top,//提前加载距离
                loadDownFn: function (me) {
                    globalVal.pageNo++;
                    if (_this.tabLoadEnd) {

                        // 锁定
                        me.lock();
                        // 无数据
                        me.noData();
                        me.resetload();
                        return false;
                    }
                    var request_data = {
                        Url: ajaxUrl.list,
                        RequestData: {
                            "id": $page.id,
                            "goodsCategoryId": globalVal.goodsCategoryId,
                            "pageNo": globalVal.pageNo,
                            "pageSize": 10,
                            "areaCode":globalVal.atgregion
                        },
                        Callback: _this.renderLists
                    };
                    $.ajax({
                        type: 'post',
                        url: request_data.Url,
                        data: request_data.RequestData || {},
                        dataType: 'json',
                        timeout: 5000,
                        success: function (data) {
                            _this.renderLists(data, me);

                        },
                        error: function (req, error) {
                            me.lock();
                            //me.resetload();
                        }
                    })
                }
            });
        },

        //处理数据,生成页面
        renderLists: function (json, obj) {
            var _this = this;
            if (globalVal.pageNo == json.data.page.totalPage) {
                _this.tabLoadEnd = true;
            }
            var masNode = $('#imgTxtListW .imgTxtList');
            var msnry;
            if (json.data.page.list && json.data.page.list.length > 0) {

                masNode.append(tpl.detaillist(json.data));
                common.detailProductUrl( $('#imgTxtListW .item .detailHref'));
                masNode.imagesLoaded(function () {

                    msnry = new Masonry(masNode[0], {
                        columnWidth: '#imgTxtListW .item',
                        itemSelector: '#imgTxtListW .item'
                    });
                    if(json.data.page.list.length<10) {
                        _this.dropload.lock();
                        _this.dropload.noData();
                        _this.dropload.resetload();
                    }else {
                        obj.resetload();
                    }
                   
                });
            } else {
                _this.dropload.lock();
                _this.dropload.noData();
                _this.dropload.resetload();
            }
        },

        event: function () {
            var _this = this;
            var oldCur = 0;

            $('#prod-box-marks-btns .dropdown-menu-gmb>li').on('click', function () {
                var $index = $(this).index();
                if (oldCur == $index) {
                    return false;
                }
                //$(this).addClass('btn-sky').siblings().removeClass('btn-sky');

                globalVal.goodsCategoryId = $('#prod-box-marks-btns .dropdown-menu-gmb>li.active').attr('num');

                $('#imgTxtListW .imgTxtList').html('').height(0);
                globalVal.pageNo = 0;
                _this.tabLoadEnd = false;
                oldCur = $index;
                _this.dropload.unlock();
                _this.dropload.noData(false);
                _this.dropload.resetload();

            });
        }


    };

    //存cookie和取cookie
    var operateCookie = {
        init: function() {
            var _this = this;
            _this.getData();
        },
        getData:function() {
            $.ajax({
                type:'get',
                url:ajaxUrl.cookieUrl,
                dataType:'jsonp',
                jsonpName:'ipWrite',
                jsonpCallback:'ipWrite',
                timeout:10000,
                success:function(data){
                    var atgregion = $.cookie("atgregion")||"11010200|北京市朝阳区(五环里)全部区域|11010000|11000000|110102001";
                    globalVal.atgregion=atgregion.split("|")[0];
                    zjDetailList.init();//列表初始化
                },
                error:function(req,error){
//                    console.log(error)
                }
            });
        }
    }

    //返回顶部
    $('.go-top').goTop();

    zjDetailCon.init();//内容区

    

})(GTPL);
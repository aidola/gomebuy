;
(function (tpl) {

    //请求ajax地址
    var ajaxUrl = {
        topic: 'http://gomebuy' + cookieDomain + '/api/data/topic.do',
        topicList: 'http://gomebuy' + cookieDomain + '/api/data/topiclist.do',
        addShare: 'http://gomebuy' + cookieDomain + '/api/data/addShare.do'//分享
    };

    //title和内容
    var titC = {
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
                Url: ajaxUrl.topic,
                RequestData: {
                    id: $page.id
                },
                BeforeSend: common.loadingShow,
                Complete: common.loadingHide,
                Callback: _this.renderLists
            };
            common.getAjax(request_data);
        },
        //处理数据,生成页面
        renderLists: function (json) {
            $('.week-titlew').html(tpl.topictitle(json.data.articleInfo));
            $('.under-info-time').each(function(){
                common.filterDate($(this));
            });
            $('#exhibition').html(json.data.articleInfo.content);
            //分享
            gomebuyShareTo.init($page.id,json.data.articleInfo.title);
            $('#toOldTopic').attr('href', 'http://gomebuy' + cookieDomain + '/oldtopic');
        }
    };

    //往期列表
    var topicList = {
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
                Url: ajaxUrl.topicList,
                RequestData: {
                    "pageNo": '1',
                    "pageSize": "4"
                },
                Callback: _this.renderLists
            };
            common.getAjax(request_data);
        },

        //处理数据,生成页面
        renderLists: function (json) {
            //console.log($page.id);

            $('#demoSlider1').html(tpl.imglist(json.data.page));
            $('#demoSlider1>.imglist a').each(function () {
                var num = $(this).attr('num');
                var href = 'http://gomebuy' + cookieDomain + '/topic/' + num + '-1.html';
                $(this).attr('href', href);
            });
            //$('#demoSlider1').attr('href',href);
        }

    };

    titC.init();//初始化标题和内容
    topicList.init();//往期列表
    //返回顶部
    $('.go-top').goTop();

    //$('#demoSlider1').html(tpl.imglist(json.data.articleInfo));

})(GTPL);

;(function(tpl) {
	
    //请求ajax地址
	var ajaxUrl = {
		list: 'http://gomebuy'+cookieDomain+'/api/data/detail.do',
		want: 'http://gomebuy'+cookieDomain+'/api/data/addWant.do',
        addShare: 'http://gomebuy' + cookieDomain + '/api/data/addShare.do',//分享
        cookieUrl: 'http://ss' + cookieDomain + '/item/v1/cookie/atgregion/flag/public/ipWrite'
	};
	var globalVal =  {
        atgregion:''//区域
    };

	//内容区函数
	var fnDetail = {
		//初始化
		init: function() {
			var _this = this;
			_this.getData();
		},
		//通过ajax获取数据
		getData: function() {
			var _this = this;

			//此处放ajax内容
	        var request_data = {
	            Url:ajaxUrl.list,
	            RequestData:{
	            	"id":$page.id
	            },
	            BeforeSend: function(){$('.loadingWrap').show()},
	            Complete: function(){$('.loadingWrap').hide()},
	            Callback: _this.renderLists
	        };
	        common.getAjax(request_data);
		},

		//处理数据,生成页面
		renderLists: function(json) {
			var _this = this;
			
			if(json.data) {
				$('#loadingWrap').hide();
				if(json.data.type=='jiadian') {//显示知识库详情
					document.title = json.data.articleInfo.title;
					$('.zsk-more').show();
					$('.zsk-more-article-container').append(tpl.detailCon(json.data));
					gomebuyShareTo.init($page.id,json.data.articleInfo.title);//分享
					$('.under-info-time').each(function(){
						common.filterDate($(this));
					});
					$('.zsk-more-list').html(tpl.zskList(json.data));
					$('#articleW').before(tpl.channel(json.data));
					$('#articleW').before(tpl.linkList(json));
					common.detailProductUrl( $('.zsk-more-list .detailHref') );
					$('#articleW').before(tpl.ad(json));
					$('#articleW').html(tpl.rearticle(json.data));
					if($('.parameterOl').length) {
						$('.parameterOl').each(function() {
							var arr = $(this).children().eq(0).html().split('|');
							var str = '';							
							for(var i=0; i<arr.length; i++) {
								str += '<li class="col-lg-6 col-md-6 col-sm-6 col-xs-6">'+arr[i]+'</li>';
							}
							$(this).html(str);
						})
					}
				}else{//显示玩家详情
					$('.wj-more').show();
					document.title = json.data.articleInfo.title;
					$('.wj-more-article').append(tpl.detailCon(json.data));
					gomebuyShareTo.init($page.id,json.data.articleInfo.title);//分享
					$('.under-info-time').each(function(){
						common.filterDate($(this));
					});
					$('#articleWj').before(tpl.channel(json.data));
					$('#articleWj').before(tpl.wjGoodsList(json));
					common.detailProductUrl( $('.right-list').eq(1).find('.detailHref'));
					$('#articleWj').before(tpl.ad(json));

					$('#articleWj').html(tpl.rearticle(json));
					fnWant.init();//我也想要
				}
				common.skipDetail('.right-article-list ul a');
			}
		}
	};
	
	//======我也想要
	var fnWant = {
		//初始化
		init: function() {
			var _this = this;
			_this.event();
		},
		//通过ajax获取数据
		getData: function() {
			
			var _this = this;

			//此处放ajax内容
	        var request_data = {
	            Url:ajaxUrl.want,
	            RequestData:{
	            	"id":$page.id
	            },
	            Callback: _this.renderLists
	        };
	        common.getAjax(request_data);
		},

		//处理数据,生成页面
		renderLists: function(json) {
			$('#iWant').prev().find('b').html(json.data.want);
		},

		//我也想要事件
		event: function() {
			var _this = this;
			$('.right-list').one('click','#iWant',function() {
				_this.getData();

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
                    fnDetail.init();//初始化内容区
                },
                error:function(req,error){
//                    console.log(error)
                }
            });
        }
    }

	//返回顶部
    $('.go-top').goTop();

   
    operateCookie.init();//存取cookie

})(GTPL);
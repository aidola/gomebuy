
;(function(tpl){

	//请求ajax地址
	var ajaxUrl = {
        searchlist: 'http://gomebuy'+cookieDomain+'/api/data/search.do',
		article: 'http://gomebuy'+cookieDomain+'/api/data/hotlist.do'
	};

	var globalVal =  {
		pageNo: 1,
		totalPage: 1,
		initPageS: true,
        sortField:'publish_time'
	};


	//列表区
	var list = {
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
	            Url:ajaxUrl.searchlist,
                type:'get',
	            RequestData:{
                    "title":$page.id||'',
	            	"pageNo": globalVal.pageNo,
	                "pageSize":"10",
                    "sortField":globalVal.sortField
	            },
	            BeforeSend: common.loadingShow,
	            Complete: common.loadingHide,
	            Callback: _this.renderLists
	        };
	        common.getAjax(request_data);
		},

		//处理数据,生成页面
		renderLists: function(json) {

			globalVal.totalPage = json.data.page.totalPage;
            $('#searchResult').html(json.data.page.total);//搜索总条数
			$('#searchList').html(tpl.search(json.data.page));//列表区
			$('.under-info-time').each(function(){
				common.filterDate($(this));
			});
			
			common.skipDetail('#searchList a');

			if(globalVal.initPageS) {
				pages.initStyle();
				globalVal.initPageS = false;
			}

		}

	};

	//分页效果
	var pages = {
		init: function(){
			var _this = this;
			_this.initStyle();
			_this.events();
		},
		//初始化分页样式
		initStyle: function() {
			var _this = this;
			globalVal.pageNo = 1;
			$('#index-pages').show();
			if(globalVal.totalPage == 0 ||globalVal.totalPage == 1) {
				$('#index-pages').css('visibility','hidden');
				return false;
			}
			$('#index-pages').css('visibility','visible');
			$('#index-pages button').eq(0).addClass('btn-forbidden').prop('disabled',true);
			$('.next-btn').removeClass('btn-forbidden').prop('disabled',false);
		},

		events: function() {
			var _this = this;
			_this.pageEvent();
		},

		//分页事件
		pageEvent: function() {
			$('#index-pages button').on('click',function() {
				$('html, body').scrollTop(20);
				$('#searchList').html('');
				if($(this).hasClass('pre-btn')) {
					$('.next-btn').removeClass('btn-forbidden').prop('disabled',false);
					globalVal.pageNo --;
					if(globalVal.pageNo == 1) {
						list.init();
						$(this).addClass('btn-forbidden').prop('disabled',true);
						return false;
					}

				}else if ($(this).hasClass('next-btn')) {
					$('.pre-btn').removeClass('btn-forbidden').prop('disabled',false);
					globalVal.pageNo ++;
					if(globalVal.pageNo == globalVal.totalPage) {
						list.init();
						$(this).addClass('btn-forbidden').prop('disabled',true);
						return false;
					}
				}
				
				list.init();
			});
		}

	};

	//热门文章
	var hotlist = {
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
	            Url:ajaxUrl.article,
	            RequestData:{
	            	"pageSize": '5',
	            	"firstCatalogId":'1'
	            	//'secondCatalogId': $page.id,
	            	//'thirdCatalogId': $page.num
	            },
	            Callback: _this.renderLists
	        };
	        common.getAjax(request_data);
		},

		//处理数据,生成页面
		renderLists: function(json) {
			$('#articleW').html(tpl.article(json.data));//热门文章
			common.skipDetail('.right-article-list ul a');
		}
	};


    //返回顶部
    $('.go-top').goTop();

	list.init();//初始化列表
	pages.init();//分页效果
	hotlist.init();//热门文章

})(GTPL);
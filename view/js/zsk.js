
;(function(tpl){
	//请求ajax地址
	var ajaxUrl = {
		list: 'http://gomebuy'+cookieDomain+'/api/data/jdlist.do',
		nav: 'http://gomebuy'+cookieDomain+'/api/data/findCategory.do',
		article: 'http://gomebuy'+cookieDomain+'/api/data/hotlist.do'
	};

	var globalVal =  {
		pageNo: 1,
		totalPage: 1,
		initPageS: true,//用于重置分页效果，因为需要先请求完list接口才能确定是否要显示分页
		sortField:'publish_time'//默认是最新字段 count是热门
	};

	//初始化导航栏
	var fnNav = {
		//初始化
		init: function() {
			var _this = this;
			_this.getData();
			_this.navEvent();
		},
		//通过ajax获取数据
		getData: function() {
			var _this = this;

			//此处放ajax内容
	        var request_data = {
	            Url:ajaxUrl.nav,
	            RequestData:{
	            	"type":'jiadian'
	            },
	            Callback: _this.renderLists
	        };
	        common.getAjax(request_data);
		},

		//处理数据,生成页面
		renderLists: function(json) {
			$('.textlink-bar').html(tpl.nav(json.data));//导航区
			$('.textlink-bar .headNav li a').each(function(i) {
				var id = $(this).attr('num');
				if(id) {
					if(id == $page.id) {
						$(this).parent().addClass('active').siblings().removeClass('active');
						$('.textlink-bar .pin-selected').html($(this).html());
					}
					var href = 'http://gomebuy'+cookieDomain+'/jd/'+id+'-0'+'.html';
					$(this).attr('href',href);
				}

			})
		},

		//导航栏点击事件
		navEvent: function() {
			var _this = this;
			$('.textlink-bar').on('click','.headNav li',function() {

				var idx = $(this).index();//获取索引值
				//给当前li添加样式并移除其他li的active样式
				$(this).addClass('active').siblings('li').removeClass('active');
				//判断大屏显示时，小屏的下拉所对应的列表要是active状态，反之亦然。
				if($(this).parent().is('.textlink-bar-list')) {
					$('.textlink-bar .dropdown-menu li').eq(idx).addClass('active').siblings('li').removeClass('active');
				}else {
					$('.textlink-bar .textlink-bar-list li').eq(idx).addClass('active').siblings('li').removeClass('active');
				}

				//小屏左边显示当前li里的内容
				var text = $(this).find('a').html();
				$('.pin-selected').html(text);

				//跳转页面


			})
		}
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
	            Url:ajaxUrl.list,
	            RequestData:{
	            	"pageNo": globalVal.pageNo,
	                "pageSize":"10",
	                "secondCatalogId": $page.id,
	                "thirdCatalogId":$page.num,
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
			$('#zskList').html(tpl.zsklist(json.data));//列表区
			$('.under-info-time').each(function(){
				common.filterDate($(this));
			});
			common.skipDetail('#zskList a');

			//频道和广告
			if($('.right-list .zsk-right-01').length>0) {
				$('.right-list .zsk-right-01').remove();
			}
			$('#articleW').before(tpl.channel(json.data));//频道
			$('#articleW').before(tpl.ad(json));//广告

			if(globalVal.initPageS) {
				pages.initStyle();
				globalVal.initPageS = false;
			}

		}

	};

	//分页和最新以及热门点击效果
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
			$('#index-pages .next-btn').removeClass('btn-forbidden').prop('disabled',false);
		},

		events: function() {
			var _this = this;
			_this.pageEvent();
			_this.sortEvent();
		},

		//分页事件
		pageEvent: function() {
			$('#index-pages button').on('click',function() {
				$('#zskList').html('');
				$('html, body').scrollTop(20);
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
		},

		//最新和热门点击事件
		sortEvent: function() {
			var _this = this;
			var oldCur = 0;
			$('.textlink-bar').on('click','.btn-sharp-edge',function() {
				var $index = $(this).index();
				if(oldCur == $index ) {return false;}
				$(this).addClass('btn-sky').siblings().removeClass('btn-sky');
				oldCur = $index;
				globalVal.initPageS = true;
				globalVal.sortField = ($index == 0? 'publish_time' : 'count');
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
	            	"firstCatalogId":'1',
	            	'secondCatalogId': $page.id,
	            	'thirdCatalogId': $page.num
	            },
	            Callback: _this.renderLists
	        };
	        common.getAjax(request_data);
		},

		//处理数据,生成页面
		renderLists: function(json) {
			$('#articleW').html(tpl.article(json));//热门文章
			common.skipDetail('.right-article-list ul a');
		}
	};

	fnNav.init();//初始化导航栏
	list.init();//初始化列表
	pages.init();//分页和最新以及热门点击效果
	hotlist.init();//热门文章

})(GTPL);
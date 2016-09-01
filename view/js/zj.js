
;(function(tpl){

	//请求ajax地址
	var ajaxUrl = {
		list: 'http://gomebuy'+cookieDomain+'/api/data/zjlist.do',
		nav: 'http://gomebuy'+cookieDomain+'/api/data/findCategory.do'
	}

	var globalVal =  {
		pageNo: 1,
		totalPage: 1,
		initPageS: true,
		sortField:'publish_time'//默认是最新字段 count是热门
	}

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
	            	"type":'zhuanji'
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
					var href = 'http://gomebuy'+cookieDomain+'/zj/'+id+'-0'+'.html';
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
				var text = $(this).find('a').text();
				$('.pin-selected').text(text);

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
			var masNode =$('.zj-more-list .img-txt-content');
			var msnry;
			masNode.html(tpl.zjlist(json.data));//列表区
			$('.zj-more-list a').each(function(i){
				var id = $(this).attr('num');
				if(id) {
					var href = 'http://gomebuy'+cookieDomain+'/zjdetail/'+id;
					$(this).attr('href',href);
				}
			});
			masNode.imagesLoaded( function () {
                msnry = new Masonry(masNode[0], {
                    columnWidth: '.zj-more-list .img-txt-content .item',
                    itemSelector: '.zj-more-list .img-txt-content .item'
                });
	        });
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
				$('html, body').scrollTop(20);
				$('.zj-more-list .img-txt-content').html('');
				
				if($(this).hasClass('pre-btn')) {
					$('.next-btn').removeClass('btn-forbidden').prop('disabled',false);
					globalVal.pageNo --;
					if(globalVal.pageNo == 1) {
						list.init();
						$(this).addClass('btn-forbidden').prop('disabled',true);
						return false;
					}

				}else if ($(this).hasClass('next-btn')) {
					globalVal.pageNo ++;
					$('.pre-btn').removeClass('btn-forbidden').prop('disabled',false);
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
			})
		}

	};

	fnNav.init();//初始化导航栏
	list.init();//初始化列表
	pages.init();//分页和最新以及热门点击效果

})(GTPL);
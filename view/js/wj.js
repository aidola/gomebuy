
;(function(tpl) {
	
    //请求ajax地址
	var ajaxUrl = {
		list: 'http://gomebuy'+cookieDomain+'/api/data/wjlist.do',
		nav: 'http://gomebuy'+cookieDomain+'/api/data/findCategory.do'
	}

	var globalVal =  {
		pageNo: 0,
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
	            	"type":'wanjia'
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
					var href = 'http://gomebuy'+cookieDomain+'/wj/'+id+'-0'+'.html';
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

				//跳转页面


			})
		}
	};
	//列表区
	var list = {
		//初始化
		init: function() {
			var _this = this;
			_this.tabLoadEnd = false;
			_this.dropload=null;
			_this.fnDropLoad();
			_this.sortEvent();
		},

		//处理数据,生成页面
		fnDropLoad: function() {
			var _this = this;
			_this.dropload = $('#p-imgTxtListW').dropload({
				scrollArea : window,//滑动区域
				domDown : {                                                          // 下方DOM
		            domClass   : 'dropload-down',
		            domRefresh : '<div class="dropload-refresh">滚动加载更多</div>',
		            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
		            domNoData  : '<div class="dropload-noData">没有更多了</div>'
		        },
		        distance: 50,//拉动距离
	    		threshold: 300,//提前加载距离
	    		loadDownFn: function(me) {
	    			globalVal.pageNo ++;
	    			if(_this.tabLoadEnd) {
			        	// 锁定
			            me.lock();
			            // 无数据
			            me.noData();
			            me.resetload();
			            return false;
			        }
	    			var request_data = {
			            Url:ajaxUrl.list,
			            RequestData:{
			            	"pageNo": globalVal.pageNo,
			                "pageSize":"10",
			                "secondCatalogId": $page.id,
			                "thirdCatalogId":$page.num,
			                "sortField":globalVal.sortField
			            },
			            Callback: _this.renderLists
			        };
			        $.ajax({
					    type: 'post',
					    url: request_data.Url,
					    data: request_data.RequestData||{},
					    dataType: 'json',
					    timeout: 5000,
					    success:function(data){
					        _this.renderLists(data,me);
					        
					    },
					    error:function(req,error){
					    	me.lock();
					    	//me.resetload();
					    }
					})
	    		}
			});
		},

		//处理数据,生成页面
		renderLists: function(json,obj) {
			var _this = this;
			if(globalVal.pageNo == json.data.page.totalPage) {
                _this.tabLoadEnd = true;
            }
			var masNode =$('#p-imgTxtListW .imgTxtList');
			var msnry;
			if(json.data.page.list && json.data.page.list.length>0) {
				masNode.append(tpl.wjlist(json.data));
				common.skipDetail('#p-imgTxtListW .imgTxtList a');
				masNode.imagesLoaded( function () {

	                msnry = new Masonry(masNode[0], {
	                    columnWidth: '#p-imgTxtListW .item',
	                    itemSelector: '#p-imgTxtListW .item'
	                });
	            
	                obj.resetload();
	            });
            }else {
            	_this.dropload.lock();
                _this.dropload.noData();
                _this.dropload.resetload();
            }
		},

		//最新和热门点击事件
		sortEvent: function() {
			var _this = this;
			var oldCur = 0;
			$('.textlink-bar').on('click','.btn-sharp-edge',function() {

				var $index = $(this).index();
				if(oldCur == $index ) {return false;}
				$(this).addClass('btn-sky').siblings().removeClass('btn-sky');
				globalVal.pageNo = 0;
				_this.tabLoadEnd = false;
				$('#p-imgTxtListW .imgTxtList').html('').height(0);
				_this.dropload.unlock();
                _this.dropload.noData(false);
                _this.dropload.resetload();
				oldCur = $index;
				globalVal.sortField = ($index == 0? 'publish_time' : 'count');
			})
		}

	};


	//返回顶部
    $('.go-top').goTop();

   fnNav.init();//初始化导航栏
   list.init();//列表初始化

})(GTPL);

;(function(tpl) {

    //请求ajax地址
	var ajaxUrl = {
		list: 'http://gomebuy'+cookieDomain+'/api/data/topiclist.do'
	}

	var globalVal =  {
		pageNo: 0
	}

	//列表区
	var list = {
		//初始化
		init: function() {
			var _this = this;
			_this.tabLoadEnd = false;
			_this.dropload=null;
			_this.fnDropLoad();
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
			                "pageSize":"10"
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
				masNode.append(tpl.topiclist(json.data.page));
				masNode.find('.item a').each(function() {
					var id = $(this).attr('num');
					if(id) {
						var href = 'http://gomebuy'+cookieDomain+'/topic/'+id+'-1.html';
						$(this).attr('href',href);
					}
				})
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
		}

	};


	//返回顶部
    $('.go-top').goTop();

   list.init();//列表初始化

})(GTPL);
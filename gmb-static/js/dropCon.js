
function setEletem(start,end,data,me) {
	var result = '';
	for (var i = start; i < end; i++) {
		result += '<div class="col-xs-12 col-sm-6 col-md-4 detail-list-box animate">'+
                '<div class="thumbnail">'+
                    '<a href=""><img src="'+data[i].preview+'" class="img-responsive" width="" alt=""></a>'+
                    '<div class="caption">'+
                        '<h3>¥3738.00</h3>'+
                        '<p><a href="">美国爱适易E100进口厨房食物垃圾处理器生活垃圾粉碎机垃圾处理机</a></p>'+
                        '<p class="grey-tip">无刀片研磨技术，更加安全可靠，全国联保，免费安装</p>'+
                    '</div>'+
                '</div>'+
            '</div>';
        if((i + 1) >= data.length){
            // 锁定
            me.lock();
            // 无数据
            me.noData();
            break;
        }
	}

	return result;
}


$(function() {
	//getAjax(NUM);
	var counter = 0;
    // 每页展示n个
	var num=6;
	
    var pageStart = 0,pageEnd = 0;

	var dropload = $('.imgTxtListW').dropload({
	    scrollArea : window,//滑动区域
        domDown : {                                                          // 下方DOM
            domClass   : 'dropload-down',
            domRefresh : '<div class="dropload-refresh">滚动加载更多</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
            domNoData  : '<div class="dropload-noData">暂无数据</div>'
        },
	    distance: 50,//拉动距离
	    threshold: 1000,//提前加载距离
	    loadDownFn : function(me){//下方function
	    	$.ajax({
                type: 'GET',
                url: 'js/data.json',
                dataType: 'json',
                success:function(data) {
                	var result = '';
                    counter++;
                    pageEnd = num * counter;
                    pageStart = pageEnd - num;
			    	result = setEletem(pageStart, pageEnd,data,me);
			       // 为了测试，延迟1秒加载
		            setTimeout(function(){
		                 $('#imgTxtList').append(result);
	                    // 每次数据加载完，必须重置
		                me.resetload();
                        
		            },1000);

                },
                error: function(xhr, type){
                    alert('Ajax error!');
                    // 即使加载出错，也得重置
                    me.resetload();
                }
	    	});
	    }
	});
    


})

	
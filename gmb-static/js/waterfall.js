
function setEletem(start,end,data,me,itemIndex) {
	var result = '';
    var newItemContainer = $('<div/>');
	for (var i = start; i < end; i++) {
		newItemContainer.append('<div class="col-xs-12 col-sm-6 col-md-4 item">'+
                '<div class="thumbnail item-con">'+
                    '<img src="'+data[i].preview+'" class="img-responsive" width="" alt="">'+
                    '<div class="caption">'+
                        '<h3>¥3738.00</h3>'+
                        '<p>美国爱适易E100进口厨房食物垃圾处理器生活垃圾粉碎机垃圾处理机</p>'+
                        '<div class="grey-tip">'+data[i].title+'</div>'+
                    '</div>'+
                '</div>'+
            '</div>');
        if((i + 1) >= data.length){
            $('.imgTxtListW .imgTxtList').eq(itemIndex).attr('tabLoadEnd','true');
            // 锁定
            me.lock();
            // 无数据
            me.noData();
            break;
        }
	}

	return newItemContainer.find('.item');
}


$(function() {
    var itemIndex = 0;
	var counter = 0;
    var num = 4;
    var pageStart = 0,pageEnd = 0;
    var $container = $('.imgTxtList');
    
    $('#imgTxtListW .imgTxtList').attr('tabLoadEnd','false');
    //点击事件
    $('#prod-box-marks .btn').on('click',function() {
        var $this = $(this);
        itemIndex = $this.index();
        var tabLoadEnd = $('#imgTxtListW .imgTxtList').eq(itemIndex).attr('tabLoadEnd');
        $this.addClass('btn-sky').siblings().removeClass('btn-sky');
        $('#imgTxtListW .imgTxtList').eq(itemIndex).show().siblings('.imgTxtList').hide();

        if(tabLoadEnd == 'false'){
            // 解锁
            dropload.unlock();
            dropload.noData(false);
        }else{
            // 锁定
            dropload.lock('down');
            dropload.noData();
        }
        // 重置
        dropload.resetload();
    })

	var dropload = $('#imgTxtListW').dropload({
	    scrollArea : window,//滑动区域
        domDown : {                                                          // 下方DOM
            domClass   : 'dropload-down',
            domRefresh : '<div class="dropload-refresh">滚动加载更多</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
            domNoData  : '<div class="dropload-noData">没有更多了</div>'
        },
	    distance: 50,//拉动距离
	    threshold: 300,//提前加载距离
	    loadDownFn : function(me){//下方function
            if(itemIndex == '0') {
                $.ajax({
                    type: 'GET',
                    url: 'js/data.json',
                    dataType: 'json',
                    success:function(data) {
                        counter++;
                        pageEnd = num * counter;
                        pageStart = pageEnd - num;
                        var newItemContainer = setEletem(pageStart, pageEnd,data,me,itemIndex);
                        var masNode =$('#imgTxtListW .imgTxtList').eq(itemIndex);
                        var msnry;
                        masNode.append(newItemContainer);
                        masNode.imagesLoaded( function () {

                            msnry = new Masonry(masNode[0], {
                                columnWidth: '.imgTxtList1 .item',
                                itemSelector: '.imgTxtList1 .item'
                            });

                             me.resetload();
                        });
                    },
                    error: function(xhr, type){
                        alert('Ajax error!');
                        // 即使加载出错，也得重置
                        me.resetload();
                    }
                });
            }else if(itemIndex == '1') {
                $.ajax({
                    type: 'GET',
                    url: 'js/data1.json',
                    dataType: 'json',
                    success:function(data) {
                       var newItemContainer = $('<div/>');
                        for (var i = 0; i < data.length; i++) {
                            newItemContainer.append('<div class="col-xs-12 col-sm-6 col-md-4 item">'+
                                    '<div class="thumbnail  item-con">'+
                                        '<img src="'+data[i].preview+'" class="img-responsive" width="" alt="">'+
                                        '<div class="caption">'+
                                            '<h3>¥3738.00</h3>'+
                                            '<p>美国爱适易E100进口厨房食物垃圾处理器生活垃圾粉碎机垃圾处理机</p>'+
                                            '<div class="grey-tip">'+data[i].title+'</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>');
                        }


                        var masNode =$('#imgTxtListW .imgTxtList').eq(itemIndex);
                        var msnry;
                        masNode.append(newItemContainer.find('.item'));
                        masNode.imagesLoaded( function () {
                            /*newItemContainer.masonry({
                                columnWidth: '.imgTxtList .item',
                                itemSelector: '.imgTxtList .item'
                            });*/
                            msnry = new Masonry(masNode[0], {
                                columnWidth: '.imgTxtList2 .item',
                                itemSelector: '.imgTxtList2 .item'
                            });

                             me.resetload();
                        });
                       // 为了测试，延迟1秒加载
                        /*setTimeout(function(){
                             $('.imgTxtListW .imgTxtList').eq(itemIndex).append(result);
                            // 每次数据加载完，必须重置
                            me.resetload();
                        },1000);*/

                    },
                    error: function(xhr, type){
                        alert('Ajax error!');
                        // 即使加载出错，也得重置
                        me.resetload();
                    }
                });
            }
	    }
	});

})


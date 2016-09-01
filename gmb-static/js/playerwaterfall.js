
function setEletem(start,end,data,me,itemIndex) {
	var result = '';
    var newItemContainer = $('<div/>');
	for (var i = start; i < end; i++) {
		newItemContainer.append('<div class="col-xs-12 col-sm-6 col-md-4 item">'+
                '<span class="che-green"><i class="glyphicon glyphicon-shopping-cart" style="vertical-align: middle;"></i></span>'+
                '<div class="thumbnail item-con">'+
                    '<img src="'+data[i].preview+'" class="img-responsive" width="" alt="">'+
                    '<div class="caption">'+
                        '<p>美国爱适易E100进口厨房食物垃圾处理器生活垃圾粉碎机垃圾处理机</p>'+
                        '<div class="grey-tip clearfix"><span class="pull-left"><i class="color-native" style="font-size: 14px;">374</i>人想要</span><div class="pull-right"><span class="glyphicon glyphicon-tag color-grey"></span><span class="label color-grey small">家居生活</span></div></div>'+
                    '</div>'+
                '</div>'+
            '</div>');
        if((i + 1) >= data.length){
            $('.p-imgTxtListW .imgTxtList').eq(itemIndex).attr('tabLoadEnd','true');
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
    var dropload;
    var itemIndex = 0;
    var oldItemIndex = 0;
    var tabLoadEnd = 'false';
	var counter = 0;
    var num = 8;
    var pageStart = 0,pageEnd = 0;
    
    //点击事件
    $('#player-nav li').attr('tabLoadEnd','false').on('click',function() {
        var $this = $(this);
        itemIndex = $this.index();
        
        $this.addClass('active').siblings().removeClass('active');
        tabLoadEnd =$(this).attr('tabLoadEnd');

        if(oldItemIndex != itemIndex) {
            fnRestData(tabLoadEnd);
        }

       oldItemIndex = itemIndex;
    })
   //最新 热门事件
    $('#newestHot').data('num',0).find('a').on('click',function() {
        $(this).addClass('btn-sky').siblings().removeClass('btn-sky');
        var num = $(this).parent().data('num');
        var $index = $(this).index();
        if(num != $index) {
            fnRestData(tabLoadEnd);
        }
        $(this).parent().data('num',$index);

    })
    function fnRestData(tabLoadEnd) {
        $('#p-imgTxtListW .imgTxtList').html('').height(0);
        if(itemIndex == 0) {
            counter = 0;
            pageStart = 0,pageEnd = 0;
        }

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

    }

	dropload = $('#p-imgTxtListW').dropload({
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
                    url: 'data/api/data',
                    dataType: 'json',
                    success:function(data) {
                        counter++;
                        pageEnd = num * counter;
                        pageStart = pageEnd - num;
                        var newItemContainer = setEletem(pageStart, pageEnd,data,me,itemIndex);
                        var masNode =$('#p-imgTxtListW .imgTxtList');
                        var msnry;
                        masNode.append(newItemContainer);
                        masNode.imagesLoaded( function () {

                            msnry = new Masonry(masNode[0], {
                                columnWidth: '#p-imgTxtListW .item',
                                itemSelector: '#p-imgTxtListW .item'
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
            }else {
                $.ajax({
                    type: 'GET',
                    url: 'data/api/data1',
                    dataType: 'json',
                    success:function(data) {
                       var newItemContainer = $('<div/>');
                        for (var i = 0; i < data.length; i++) {
                            newItemContainer.append('<div class="col-xs-12 col-sm-6 col-md-4 item">'+
                                    '<span class="che-green"><i class="glyphicon glyphicon-shopping-cart" style="vertical-align: middle;"></i></span>'+
                                    '<div class="thumbnail  item-con">'+
                                        '<img src="'+data[i].preview+'" class="img-responsive" width="" alt="">'+
                                        '<div class="caption">'+
                                            '<p>美国爱适易E100进口厨房食物垃圾处理器生活垃圾粉碎机垃圾处理机</p>'+
                                            '<div class="grey-tip clearfix"><span class="pull-left"><i class="color-native" style="font-size: 14px;">374</i>人想要</span><div class="pull-right"><span class="glyphicon glyphicon-tag color-grey small"></span><span class="label color-grey small">家居生活</span></div></div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>');
                        }


                        var masNode =$('#p-imgTxtListW .imgTxtList');
                        var msnry;
                        masNode.append(newItemContainer.find('.item'));
                        masNode.imagesLoaded( function () {
                            
                            msnry = new Masonry(masNode[0], {
                                columnWidth: '#p-imgTxtListW .item',
                                itemSelector: '#p-imgTxtListW .item'
                            });

                             me.resetload();
                        });
                    },
                    error: function(xhr, type){
                        console.log('1 error!');
                        // 即使加载出错，也得重置
                        me.resetload();
                    }
                });
            }
	    }
	});
})


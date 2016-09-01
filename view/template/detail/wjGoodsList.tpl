<div class="zsk-right-01">
{{if data.goodsList && data.goodsList.length>0 }}
    <img src="${data.goodsList[0].imgUrl}" class="big100-img" alt=""/>
    <p class="small">${data.goodsList[0].productDetail}</p>
	{{each(i,item) data.goodsList}}
		{{if item.gomeProduct}}
    	<p class="price-menu-p clearfix"><a  class="detailHref" dataurl="${item.productId}-${item.skuId}.html" href=""><span class="price color-native pull-left">¥${item.gomeProduct.salePrice.toFixed(2)}</span><span class="price-from pull-left">${item.gomeProduct.shopName || '国美自营'}</span><span class="pull-right che-green"><i class="glyphicon glyphicon-shopping-cart"></i></span></a></p>
		{{/if}}
	{{/each}}
   
{{/if}}
{{if data.articleInfo }}
     <p class="price-want clearfix"><span class="">有<b class="color-native">${data.articleInfo.want||0}</b>人想要</span><a id="iWant" href="javascript:;" class="btn pull-right">我也想要</a></p>
{{/if}}
</div>
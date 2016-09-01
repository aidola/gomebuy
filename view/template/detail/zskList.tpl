{{if goodsList && goodsList.length>0 }}
 <div class="zsk-more-list-header">
    <h3>推荐商品</h3>
</div>
<ul class="rec-list">
{{each(i,item) goodsList}}

    {{if item.gomeProduct}}
        <li class="row">
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <a class="detailHref" dataurl="${item.productId}-${item.skuId}.html" href=""><img src="${item.gomeProduct.imgHref}_210.jpg
    " class="img-responsive big100-img" alt=""/></a>
            </div>
            <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                <h5 class="rec-tit"><a class="detailHref" dataurl="${item.productId}-${item.skuId}.html" href="">${item.gomeProduct.displayName}</a></h5>
                <div class="row rec-subtit">
                    <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                        <span class="m-price text-bold color-native">¥${item.gomeProduct.salePrice.toFixed(2)}&nbsp;</span>
                    </div>
                    <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">
                        <span class="m-from">${item.gomeProduct.shopName || '国美自营'}</span>
                    </div>
                    <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">
                        <span class="m-com">好评度<i class="color-native">${item.appraiseGoodNum||0}%</i></span>
                        <span class="m-com"><i class="color-native">${item.appraiseTotalNum||0}</i>人评价</span>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6 btn-buy">
                        <a dataurl="${item.productId}-${item.skuId}.html" href="" class="detailHref btn btn-default">立即购买</a>
                    </div>
                </div>
                <hr/>
                
                {{if item.productDetail}}
                    {{if item.productDetail.indexOf('|') !=-1}}
                        <ol class="row parameter-list parameterOl">
                            <li class="col-lg-6 col-md-6 col-sm-6 col-xs-6">${item.productDetail}</li>
                        </ol>
                    {{else}}
                       <p class="parameter-list" style="padding:15px 15px 15px 0;color: rgb(153, 153, 153);font-size: 10px;list-style: disc; line-height: 1.5em; padding-left: 0;">${item.productDetail}</p>
                    {{/if}}
                {{/if}}
                 </ol>
            </div>
        </li>
    {{/if}}
{{/each}}
</ul>
{{/if}}
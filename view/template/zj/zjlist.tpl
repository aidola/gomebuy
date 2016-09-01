{{if page.list && page.list.length>0}}
{{each(i,item) page.list}}
<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 item">
    <div class="img-txt-list">
        <a num="${item.id}" class="linkUrl"><img src="${item.iconUrl}" class="big100-img" alt="">
	        <h3>${item.title}</h3>
	        <p>${item.metaDescription}</p>
	        <div class="eye-link-wrap">
	            <span class="iconWrap"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span><em>${item.count||0}</em></span>
	            <span class="iconWrap"><span class="glyphicon glyphicon-share-alt" aria-hidden="true"></span><em>${item.shareTimes||0}</em></span>
	        </div>
	        {{if item.hasGoods && item.goodsList && item.goodsList.length>0}}
		        <div class="row list-wrap">
		            <div class="hidden-xs hidden-sm col-md-3 col-lg-3">
		                <div class="list-box list-txt">
		                    <div class="stance"></div>
		                    <div class="list-txt-c">
		                        <div>
		                            <strong class="">${item.goodsCount}<span class="small">款</span></strong>
		                            <p><span class="label label-danger">推荐商品</span></p>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            
		            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 list-wrap-parent">
		                <ul class="row list-wrap">
		                {{each(j,imglist) item.goodsList}}
		                	{{if j<3}}
		                		{{if imglist.gomeProduct}}
				                    <li class="list col-xs-4 col-sm-4 col-md-4 col-lg-4">
				                        <div class="list-box">
				                            <img src="${imglist.gomeProduct.imgHref}_120.jpg
	">
				                        </div>
				                    </li>
			                    {{/if}}
		                    {{/if}}
		                    {{/each}}
		                </ul>
		            </div>
		        </div>
	        {{/if}}
        </a>
    </div>
</div>
{{/each}}
{{/if}}
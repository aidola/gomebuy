{{if page.list && page.list.length>0}}
{{each(i, item) page.list}}
	{{if item.gomeProduct}}
		<div class="col-xs-12 col-sm-6 col-md-4 item">
			<a class="detailHref" dataurl="${item.productId}-${item.skuId}.html" href="">
				<div class="thumbnail item-con">
					<img src="${item.gomeProduct.imgHref}_400.jpg" class="img-responsive">
					<div class="caption">
						<h3>¥${item.gomeProduct.salePrice.toFixed(2)}</h3>
						<p>${item.gomeProduct.displayName}</p>
						<div class="grey-tip">${item.productDetail}</div>
					</div>
				</div>
			</a>
		</div>
	{{/if}}
{{/each}}
{{/if}}
{{if page.list && page.list.length>0}}
{{each(i, item) page.list}}
	<div class="col-xs-12 col-sm-6 col-md-4 item">
		<a num="${item.id}" href="javascript:;">
			{{if item.hasGoods}}
				<span class="che-green" title="国美在线有售"><i class="glyphicon glyphicon-shopping-cart" style="vertical-align: middle;"></i></span>
			{{/if}}
			<div class="thumbnail item-con">
				<img src="${item.iconUrl}" class="img-responsive">
				<div class="caption">
					<p>${item.metaDescription}</p>
					<div class="grey-tip clearfix">
						<span class="pull-left"><i class="color-native" style="font-size: 14px;">${item.want||0}</i>人想要</span>
						{{if item.tagList && item.tagList.length>0}}
						<div class="pull-right  hidden-xs">
							<span class="glyphicon glyphicon-tag color-grey"></span>
							{{each(j, tag) item.tagList}}
							{{if j<2}}
								<span class="label color-grey small">${tag.tagName}</span>
							{{/if}}
							{{/each}}
						</div>
						{{/if}}
					</div>
				</div>
			</div>
		</a>
	</div>
{{/each}}
{{/if}}
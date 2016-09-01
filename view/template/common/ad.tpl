{{if data.ad && data.ad.length>0}}
{{each(i,item) data.ad}}
{{if item && item.lastAdDetail}}
	<div class="zsk-right-01">
	    <a href="${item.lastAdDetail.tolink}"><img src="${item.lastAdDetail.imgUrl}" class="img-responsive img-thumbnail" alt=""/></a>
	</div>
{{/if}}
{{/each}}
{{/if}}
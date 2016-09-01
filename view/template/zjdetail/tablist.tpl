

{{if data.goodsCategoryList && data.goodsCategoryList.length }}
{{each(i,item) data.goodsCategoryList}}
 	{{if i == 0}} 
 		<li tabLoadEnd="false" num="${item.id}" class="active"><a href="javascript:;">${item.categoryname}</a></li>
 	{{else}} 
		<li tabLoadEnd="false" num="${item.id}" class=""><a href="javascript:;">${item.categoryname}</a></li>
 	{{/if}}
{{/each}}
{{/if}}


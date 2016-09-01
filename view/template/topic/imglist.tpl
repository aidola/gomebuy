{{if list}}
    {{if list.length>0}}
        {{each(i, item) list}}
            <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 imglist">
                <a num="${item.id}" href="javascript:;"><img src="${item.topImgUrl}"></a>
            </div>
        {{/each}}
    {{/if}}
{{/if}}
{{if list}}
    {{if list.length>0}}
    {{each(i, item) list}}
        <div class="col-xs-12 col-sm-6 col-md-4 item">
            <a num="${item.id}" href="javascript:;">
                <div class="thumbnail item-con">
                    <img src="${item.topImgUrl}" class="img-responsive">
                </div>
            </a>
        </div>
    {{/each}}
    {{/if}}
{{/if}}

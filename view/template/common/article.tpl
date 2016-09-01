{{if data.hotlist && data.hotlist.length>0}}
<div class="zsk-right-02 right-article-list">
    <div class="page-header small-page-header">
        <h4 class="modal-title text-bold">热门文章</h4>
    </div>
    <ul>
    {{each(i, item) data.hotlist}}
    <li>
        <div class="row small-row">
            <div class="hidden-xs hidden-sm hidden-md col-lg-4 padding-little">
                <a num="${item.id}" href="javascript:;"><img src="${item.iconUrl}" class="img-responsive"/></a>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                <dl>
                    <dt><a num="${item.id}" href="javascript:;">${item.title}</a></dt>
                    <dd class="small color-grey">${item.metaDescription}</dd>
                </dl>
            </div>
        </div>
    </li>
    {{/each}}
    </ul>
 </div>
{{/if}}
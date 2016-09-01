
{{if list}}
    {{if list.length>0}}
        {{each(i, item) list}}
        <li>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <dl>
                        <dt><a num="${item.id}"  href="javascript:;">${item.title}</a></dt>
                        <dd>${item.metaDescription}</dd>
                    </dl>
                    <hr/>
                    <div class="under-info row">
                        <div class="under-info-time col-xs-7 col-sm-7 col-md-7 col-lg-7 small">${item.publishTime}</div>
                        {{if item.tagList && item.tagList.length>0}}
                            <div class="under-info-marks col-xs-5 col-sm-5 col-md-5 col-lg-5 text-right hidden-xs">
                                <span class="glyphicon glyphicon-tag color-grey small"></span>
                                {{each(j,tag) item.tagList}}
                                    {{if j<2}}  
                                        <span class="label color-grey small">${tag.tagName}</span>
                                    {{/if}}
                                {{/each}}
                            </div>
                        {{/if}}
                    </div>
                </div>
            </div>
        </li>
        {{/each}}
    {{/if}}
{{/if}}
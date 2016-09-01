    <div class="zsk-more-title">
        <div class="zsk-more-subtitle overflow-ellipsis">
            <h4 class="overflow-ellipsis">${articleInfo.title}</h4>
            <div class="under-info row bdshare-parent">
                <div class="under-info-time col-xs-5 col-sm-3 col-md-3 col-lg-2 small">${articleInfo.publishTime}</div>
                {{if articleInfo.tagList && articleInfo.tagList.length>0}}
                <div class="under-info-marks col-xs-7 col-sm-6 col-md-7 col-lg-8 hidden-xs" style="position:relative; top:-2px;">
                    <span class="glyphicon glyphicon-tag color-grey small"></span>
					{{each(i,item) articleInfo.tagList}}
                    {{if i<2}}  
                        <span class="label color-grey small">${item.tagName}</span>
                    {{/if}}
                    {{/each}}
                </div>
                {{/if}}
                <!--分享到-->
                <div class="bdsharebuttonbox hidden-xs col-sm-3 col-md-2 col-lg-2" data-tag="share_1">
                    <span class="small color-grey sharetoText">分享到&nbsp;</span>
                    <a class="bds_tsina" data-cmd="tsina"></a>
                    <a class="bds_weixin" data-cmd="weixin"></a>
                    <a class="bds_count" data-cmd="count" style="display:none"></a>
                </div>
            </div>
        </div>
    </div>
    <hr/>
    <div class="zsk-more-content">
        {{html articleInfo.content}}
    </div>
    <hr/>

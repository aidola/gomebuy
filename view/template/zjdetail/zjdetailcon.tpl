{{if data.articleInfo}}
<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
    <div class="zsk-more-title">
        <div class="zsk-more-subtitle overflow-ellipsis">
            <h4 class="overflow-ellipsis">${data.articleInfo.title}</h4>
            <div class="under-info row bdshare-parent">
                <div class="under-info-num col-xs-12 col-sm-9 col-md-9 col-lg-10 small">
                    <span><i class="glyphicon glyphicon-eye-open"></i><i class="num color-native">${data.articleInfo.count||0}</i></span>
                    <span><i class="glyphicon glyphicon-share-alt"></i><i class="num color-native">${data.articleInfo.shareTimes||0}</i></span>
                </div>
                <!--分享到-->
                <div class="bdshare-box hidden-xs col-sm-3 col-md-3 col-lg-2">
                    <div class="bdsharebuttonbox bdshare-button-style0-16" data-tag="share_1">
                        <span class="small color-grey sharetoText">分享到&nbsp;</span>
                        <a class="bds_tsina" data-cmd="tsina"></a>
                        <a class="bds_weixin" data-cmd="weixin"></a>
                        <a class="bds_count" data-cmd="count" style="display:none"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <img src="${data.articleInfo.iconUrl}" class="text-img100" width="" alt="">
    <p class="text-sty">${data.articleInfo.metaDescription}</p>
</div>
{{/if}}
<div class="hidden-xs col-sm-4 col-md-4 col-lg-4">
    {{if data.relatedArticleList && data.relatedArticleList.length}}
    <div class="album-common-list">
        <h3 class="color-native">选购常识</h3>
        <ul class="relateList">
        {{each(i,item) data.relatedArticleList}}
            <li><a num="${item.id}" href="">${item.title}</a></li>
        {{/each}}
        </ul>
    </div>
    {{/if}}
  	{{if data.relatedZJList && data.relatedZJList.length}}
    <div class="album-common-list">
        <h3 class="color-native">相关专辑</h3>
        <ul class="relatedNative">
        {{each(i,item) data.relatedZJList}}
            <li><a num="${item.id}" href="">${item.title}</a></li>
        {{/each}}
        </ul>
    </div>
    {{/if}}
    {{if data.ad && data.ad.length}}
    <div class="album-common-list">
        <h3 class="color-native">相关活动</h3>
        <ul>
        {{each(i,item) data.ad}}
            <li><a href="${item.lastAdDetail.tolink}">${item.lastAdDetail.name}</a></li>
        {{/each}}
        </ul>
    </div>
    {{/if}}
</div>
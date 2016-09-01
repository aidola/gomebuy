<div class="pull-left">
    <div class="textlink-bar-label">${catalog.name}</div>
</div>
<span class="pin-selected hidden-lg hidden-md hidden-sm">${catalog.subCatalog[0].name}</span>
<div class="pull-left hidden-xs">
    <ul class="textlink-bar-list headNav">
    {{if catalog.subCatalog && catalog.subCatalog.length>0}}
    {{each(i, item) catalog.subCatalog}}
        {{if i == 0}}
            <li class="active" ><a num="${item.id}" href="javascript:;">${item.name}</a></li>
        {{else i<6}}
            <li ><a num="${item.id}" href="javascript:;">${item.name}</a></li>
        {{/if}}
    {{/each}}
    {{/if}}
    </ul>
</div>
<div class="pull-right btn-group hidden-lg hidden-md hidden-sm">
    <button type="button" class="btn btn-sky btn-dropdown-edge dropdown-toggle btn-dropdown-point" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="point3">...</span></span>
    </button>
    <ul class="dropdown-menu dropdown-menu-gmb headNav">
    {{if catalog.subCatalog && catalog.subCatalog.length>0}}
    {{each(i, item) catalog.subCatalog}}
        {{if i == 0}}
            <li class="active"><a num="${item.id}" href="javascript:;">${item.name}</a></li>
        {{else i<6}}
            <li><a num="${item.id}" href="javascript:;">${item.name}</a></li>
        {{/if}}
    {{/each}}
    {{/if}}
    </ul>
</div>
<div class="hidden-xs pull-right textlink-bar-tab">
    <div class="btn-group">
        <a href="javascript:;" class="btn btn-default btn-sky btn-sharp-edge">最新</a>
        <a href="javascript:;" class="btn btn-default btn-sharp-edge">热门</a>
    </div>
</div>

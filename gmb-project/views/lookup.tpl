{% import "widget/gmb.macro.tpl" as mgmb %}
<!doctype html>
<html lang="en">
<head>
	{{ mgmb.normalHead(config,"搜索结果")}}
</head> 
<body class="navbar-fixed-top-padding cbp-spmenu-push">

	{% include "widget/head.tpl" %}
	<div class="container">
	    <div class="container-fluid zsk-article-list-container search-container padding60th">
	        <div class="search-result">共找到 <span class="color-native" id="searchResult"></span> 条搜索结果</div>
	        <div class="loadingWrap" id="loadingWrap">
        		<span class="loading"></span>加载中...
        	</div>
	        <div class="row">
	            <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 zsk-left">
	            	
	                <ul id="searchList">
	                </ul>
	                
	                <!--上下页-->
	                <nav>
	                    <ul class="pager index-pages" id="index-pages">
	                        <li><button class="btn pre-btn"><i class="glyphicon glyphicon-menu-left"></i>&nbsp;上一页</button></li>
	                        <li><button class="btn next-btn">下一页&nbsp;<i class="glyphicon glyphicon-menu-right"></i></button></li>
	                    </ul>
	                </nav>
	            </div>
	            <div class="hidden-xs col-sm-3 col-md-3 col-lg-3 zsk-right right-list ">
	                <div id="articleW">
	               		
	               	</div>
	            </div>
	        </div>
	    </div>
	</div>	
	
	{% include "widget/foot.tpl" %}
	{% include "widget/go-top.tpl" %}
	{% include "widget/global.tpl" %}
	<script src="{{ config.jsServer }}/??/{% include "widget/head-js.tpl" %}"></script>
	<script>
        var $page = {
            id: '{{id}}',
            num: '{{num}}'
        };
    </script>
	{{ mgmb.scripts(config,[
	    "gmpro/1.0.0/gmbuy/1.0.0/js/go_top.min.js"
	    ,"gmpro/1.0.0/gmbuy/1.0.0/templatefn/tpl-lookup.min.js"
	    ,"gmpro/1.0.0/gmbuy/1.0.0/js/lookup.min.js"
	]) }}
</body>
</html>











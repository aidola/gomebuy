{% import "widget/gmb.macro.tpl" as mgmb %}
<!doctype html>
<html lang="en">
<head>
	{{ mgmb.normalHead(config,"知识库详情")}}
</head> 
<body class="navbar-fixed-top-padding cbp-spmenu-push">

	{% include "widget/head.tpl" %}

	<!-- 知识库详情 -->
	<div class="container zsk-more" style="display: none;">
	    <div class="container-fluid zsk-article-container padding60th">
	    	
	        <div class="row">
	            <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 zsk-left zsk-more-article">
	                <div class="zsk-more-article-container">
	                	<div class="loadingWrap" id="loadingWrap">
        					<span class="loading"></span>加载中...
        				</div>
	                </div>
	                <div class="container-fluid zsk-more-list">

	                </div>
	            </div>
	            <div class="hidden-xs col-sm-3 col-md-3 col-lg-3 zsk-right right-list">
	                
	                
	                <div id="articleW">
	               		
	               	</div>
	            </div>
	        </div>
	    </div>

	</div>

	<!-- 玩家详情 -->
	<div class="container wj-more" style="display: none;">
	    <div class="container-fluid zsk-article-container padding60th">
			    	
	        <div class="row">
	            <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 zsk-left wj-more-article">
	            	<div class="loadingWrap" id="loadingWrap">
		        		<span class="loading"></span>加载中...
		        	</div>
	            </div>
	            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 zsk-right right-list">
	                <div id="articleWj">
	               		
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
			id: '{{id}}'
		};
	</script>
	{{ mgmb.scripts(config,[
	    "gmpro/1.0.0/gmbuy/1.0.0/js/go_top.min.js"
	    ,"gmlib/cookie/1.0.0/cookie.min.js"
	    ,"gmpro/1.0.0/gmbuy/1.0.0/templatefn/tpl-detail.min.js"
	    ,"gmpro/1.0.0/gmbuy/1.0.0/js/detail.min.js"
	]) }}
	
</body>
</html>











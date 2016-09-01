{% import "widget/gmb.macro.tpl" as mgmb %}
<!doctype html>
<html lang="en">
<head>
	{{ mgmb.normalHead(config,"知识库")}}

</head> 
<body class="navbar-fixed-top-padding cbp-spmenu-push">

	{% include "widget/head.tpl" %}
	<div class="container">
	    <div class="zsk-marks-container">
	        <div class="textlink-bar page-header clearfix">
	           
	        </div>
	    </div>
	    <div class="loadingWrap" id="loadingWrap">
	        <span class="loading"></span>加载中...
	    </div>
	    <div class="container-fluid zsk-article-list-container">
	        <div class="row">
	            <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 zsk-left">
	                <ul id="zskList">
	                </ul>
	                
	                <!--上下页-->
	                <nav>
	                    <ul class="pager index-pages" id="index-pages">
	                        <li><button class="btn pre-btn btn-forbidden"><i class="glyphicon glyphicon-menu-left"></i>&nbsp;上一页</button></li>
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
	{% include "widget/global.tpl" %}
	<script src="{{ config.jsServer }}/??/{% include "widget/head-js.tpl" %}"></script>
	<script>
		var $page = {
			id: '{{id}}',
			num: '{{num}}'
		};
	</script>
	{{ mgmb.scripts(config,[
	    "gmpro/1.0.0/gmbuy/1.0.0/templatefn/tpl-zsk.min.js"
	    ,"gmpro/1.0.0/gmbuy/1.0.0/js/zsk.min.js"
	]) }}

	</script>
</body>
</html>











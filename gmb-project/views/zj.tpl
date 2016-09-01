{% import "widget/gmb.macro.tpl" as mgmb %}
<!doctype html>
<html lang="en">
<head>
	{{ mgmb.normalHead(config,"专辑")}}
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
	    <div class="container-fluid zj-more-list">
	        <div class="row img-txt-content">
	           
	        </div>
	    </div>
	    
	    <!--上下页-->
	    <nav>
	        <ul class="pager index-pages" id="index-pages">
	            <li><button class="btn pre-btn"><i class="glyphicon glyphicon-menu-left"></i>&nbsp;上一页</button></li>
	            <li><button class="btn next-btn">下一页&nbsp;<i class="glyphicon glyphicon-menu-right"></i></button></li>
	        </ul>
	    </nav>
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
        "gmpro/1.0.0/gmbuy/1.0.0/js/imagesLoaded.min.js"
        ,"gmpro/1.0.0/gmbuy/1.0.0/js/masonry.min.js"
        ,"gmpro/1.0.0/gmbuy/1.0.0/templatefn/tpl-zj.min.js"
        ,"gmpro/1.0.0/gmbuy/1.0.0/js/zj.min.js"
	]) }}
	
</body>
</html>











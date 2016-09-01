{% import "widget/gmb.macro.tpl" as mgmb %}
<!doctype html>
<html lang="en">
<head>
	{{ mgmb.normalHead(config,"知家周刊")}}
</head> 
<body class="navbar-fixed-top-padding cbp-spmenu-push">

	{% include "widget/head.tpl" %}
	<div class="container">
	    <div class="container-fluid weekly-container">
		    <div class="loadingWrap" id="loadingWrap" style="background: #fff;">
	        	<span class="loading"></span>加载中...
	        </div>
	        <div class="week-titlew">
	        </div>

	        <div class="week-list-exhibition" id="exhibition">
	        </div>
	           
	        <div class="flexisel-wrap">
	            <div class="titlew clearfix">
	                <h5 class="pull-left">往期专题</h5>
	                <a class="pull-right" href="{{ config.domain }}/oldtopic">更多<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a>
	            </div>
	            
	            <div id="demoSlider1" class="row">

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
	    ,"gmpro/1.0.0/gmbuy/1.0.0/templatefn/tpl-topic.min.js"
	    ,"gmpro/1.0.0/gmbuy/1.0.0/js/topic.min.js"
	]) }}
</body>
</html>











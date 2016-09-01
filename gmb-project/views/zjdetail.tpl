{% import "widget/gmb.macro.tpl" as mgmb %}
<!doctype html>
<html lang="en">
<head>
	{{ mgmb.normalHead(config,"专辑详情")}}
</head> 
<body class="navbar-fixed-top-padding cbp-spmenu-push">
	{% include "widget/head.tpl" %}
	<div class="container zj-container">
		
	    <div class="container-fluid album-box">
	        <div class="row album-content">
	        	<div class="loadingWrap" id="loadingWrap">
        			<span class="loading"></span>加载中...
        		</div>
	        </div>
	    </div>
	    <div class="container-fluid prod-box" id="zjDetailList">
	    	<div class="prod-box-marks" id="prod-box-marks">
                <div class="prod-box-marks-btns" id="prod-box-marks-btns">
                    <span class="marks-label">推荐商品</span>
                    <span class="glyphicon glyphicon-triangle-bottom arrow-down"></span>
                    <button type="button" class="dropdown-toggle btn-dropdown-point" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">全部</span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-gmb">
                    </ul>
                </div>
	    	</div>
			<div class="container-fluid" id="imgTxtListW">
				<div class="row imgTxtList"></div>
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
        ,"gmpro/1.0.0/gmbuy/1.0.0/js/imagesLoaded.min.js"
        ,"gmpro/1.0.0/gmbuy/1.0.0/js/masonry.min.js"
        ,"gmpro/1.0.0/gmbuy/1.0.0/js/dropload.min.js"
        ,"gmpro/1.0.0/gmbuy/1.0.0/templatefn/tpl-zjdetail.min.js"
        ,"gmpro/1.0.0/gmbuy/1.0.0/js/zjdetail.min.js"
	]) }}
	
</body>
</html>











{% import "widget/gmb.macro.tpl" as mgmb %}
<!doctype html>
<html lang="en">
<head>
	{{ mgmb.normalHead(config,"往期专题")}}
</head> 
<body class="navbar-fixed-top-padding cbp-spmenu-push">

	{% include "widget/head.tpl" %}
	<div class="container padding60th">
	    <div class="container-fluid prod-box">
	        <div class="container-fluid" id="p-imgTxtListW">
	            <div  class="row imgTxtList active">
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
		//,"gmpro/1.0.0/gmbuy/1.0.0/js/dropload.min.js"
	</script>
	{{ mgmb.scripts(config,[
        "gmpro/1.0.0/gmbuy/1.0.0/js/go_top.min.js"
        ,"gmpro/1.0.0/gmbuy/1.0.0/js/imagesLoaded.min.js"
        ,"gmpro/1.0.0/gmbuy/1.0.0/js/masonry.min.js"
        ,"gmpro/1.0.0/gmbuy/1.0.0/js/dropload.min.js"
        ,"gmpro/1.0.0/gmbuy/1.0.0/templatefn/tpl-oldtopic.min.js"
        ,"gmpro/1.0.0/gmbuy/1.0.0/js/oldtopic.min.js"
	]) }}

</body>
</html>











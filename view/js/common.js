
;var common = {
	getAjax:function(option){

		$.ajax({
		    type: option.Type || 'post',
		    url: option.Url,
		    data: option.RequestData||{},
		    dataType: option.dataType||'json',
		    timeout: 5000,
		    beforeSend: function(){
		        if(option.BeforeSend){
		            option.BeforeSend();
		        }
		    },
		    success:function(data){
		        if(option.Callback){
		            option.Callback(data);
		        }
		    },
		    error:function(req,error){
		        if(option.fnError) {
		            option.fnError();
		        }
		    },
		    complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
		        /*if(status=='timeout'){//超时,status还有success,error等值的情况
		        }*/
		        if(option.Complete) {
		            option.Complete();
		        }
		    }
		})
	},

	//过滤时间
	filterDate: function(obj) {
		var html = parseFloat(obj.html());
		var date=new Date(html);
		var Y = date.getFullYear() + '-';
		var M = this.addZero(date.getMonth()+1) + '-';
		var D = this.addZero(date.getDate()) + ' ';
		var h = this.addZero(date.getHours()) + ':';
		var m = this.addZero(date.getMinutes());
		//var s = this.addZero(date.getSeconds());
		obj.html(Y+M+D+h+m);
	},
	//增加0
	addZero: function(n) {
		return n<10 ? ('0'+n) : (''+n);
	},

	//加载loading显示
	loadingShow: function() {
		$('#loadingWrap').show();
	},

	//加载loading隐藏
	loadingHide: function() {
		$('#loadingWrap').hide();
	},

	//a链接跳转
	skipDetail: function(sele,suffix) {
		$(sele).each(function() {
			var id = $(this).attr('num');
			if(id) {
				var href = 'http://gomebuy'+cookieDomain+'/detail/'+id+'.html';
				$(this).attr('href',href);
			}
		})
	},

	//埋码js
	gmbuyCode:function() {
		s.pageName="购明白";
		s.channel="购明白";
		s.prop1="购明白";
		s.prop2="购明白";
		s.prop3="购明白";
		s.prop4="购明白";
		var s_code=s.t();
		if(s_code)document.write(s_code);
	},
	//拼产品详情页地址
	detailProductUrl: function(objs) {
		objs.each(function() {
            var dataurl = $(this).attr('dataurl');
            var equipment = common.browserRedirect();
            var url = '';
            if(equipment == 'phone') {
                url =  'http://m'+cookieDomain+'/product-'+dataurl;
            }else{
                 url =  'http://item'+cookieDomain+'/'+dataurl;
            }
            $(this).attr('href',url);
            
        })
	},

	//判断是PC还是移动
	browserRedirect:function () {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            return 'phone';
        } else {
            return 'pc';
        }
    }

};

var gomebuyShareTo = {
    //初始化
    init: function (id,artTit) {
        var _this = this;
        _this.id = id;
        _this.addShare= 'http://gomebuy' + cookieDomain + '/api/data/addShare.do';//分享
        _this.shareConfig(artTit);

    },
    //回调函数 -> 在用户点击分享按钮之前执行代码
    SetShareUrl:function(cmd, config) {

        config.bdUrl = window.location.href;
        config.cmd=cmd;

        gomebuyShareTo.getData();

        //console.log(config);
        return config;
    },

    //分享
    shareConfig: function(artTit) {
        var _this = this;
        //插件的配置部分，onBeforeClick回调，主要用于获取动态的文章ID
        window._bd_share_config = {
            "common": {
                onBeforeClick: _this.SetShareUrl
                ,"bdSnsKey": {}
                ,"bdText": document.title+'--'+artTit
                ,"bdMini": "2"
                ,"bdMiniList": false
                ,"bdPic": ""
                ,"bdStyle": "0"
                ,"bdSize": "16"
            },
            "share" : [{
                "bdSize" : 20
            }]
        };
        //插件的JS加载部分
        with (document) 0[(getElementsByTagName('head')[0] || body)
            .appendChild(createElement('script'))
            .src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='
            + ~(-new Date() / 36e5)];
    },
    //通过ajax获取数据
    getData: function () {
        var _this = this;

        //此处放ajax内容
        var request_data = {
            Url: _this.addShare,
            RequestData: {
                id:_this.id
            },
            Callback: _this.renderLists
        };
        common.getAjax(request_data);
    },

    //返回分享次数

    renderLists: function (json) {
        var count=json.data.shareTimes;
        console.log(count);
    }
};

//埋码函数调用
common.gmbuyCode();

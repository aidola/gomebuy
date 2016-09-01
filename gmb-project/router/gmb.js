var express=require("express");
var gomeConfig=require("./gomeConfig.js");
var connectLog=require("../util/connectLog.js");
var router=express();
var year = new Date().getFullYear();
//基础配置信息
router.use(function(req,res,next){
	if(req.query.debug){
		req.cartconfig=gomeConfig.debug;
	}else{
		req.cartconfig=gomeConfig.normal
	}
	next();
});

//以下当获取不到参数时给一个0值用于ajax判断是否需要传值
//======知识库列表页
function zsk(req,res){
	res.render("zsk.tpl",{
		id:req.params.id||'',
		num: req.params.num||'',
		year: year,
		config:req.cartconfig
	});
}


//======玩家页
function wj(req,res){
	res.render("wj.tpl",{
		id:req.params.id||'',
		num: req.params.num||'',
		year: year,
		config:req.cartconfig
	});
}


//======知家周刊页
function topic(req,res){
	res.render("topic.tpl",{
		id:req.params.id||'',
		num: req.params.num||'',
		year: year,
		config:req.cartconfig
	});
}



//======知识库或玩家详情页
function detail(req,res){

	console.log(req.params.id)
	res.render("detail.tpl",{
		id:req.params.id||'',
		year: year,
		config:req.cartconfig
	});
}

//======搜索结果页
function lookup(req,res){
	res.render("lookup.tpl",{
		id: req.query.q||'',
		year: year,
		config:req.cartconfig
	});
}

//======往期周刊页
function oldtopic(req,res){
	res.render("oldtopic.tpl",{
		year: year,
		config:req.cartconfig
	});
}

//======专辑列表页
function zj(req,res){
	res.render("zj.tpl",{
		id:req.params.id||'',
		num: req.params.num||'',
		year: year,
		config:req.cartconfig
	});
}

//======专辑详情页
function zjdetail(req,res){
	res.render("zjdetail.tpl",{
		id:req.params.id||'',
		year: year,
		config:req.cartconfig
	});
}



router.get("/",zj); //专辑
router.get("/jd",zsk);//知识库
router.get("/jd/:id-:num.html",zsk);//知识库
router.get("/wj",wj);//玩家
router.get("/wj/:id-:num.html",wj);//玩家
router.get("/topic",topic);//知家周刊
router.get("/topic/:id-:num.html",topic);//知家周刊
router.get("/detail/:id.html",detail);//知识库或玩家详情页
router.get(/^\/lookup(.*)$/,lookup);//搜索
router.get("/oldtopic",oldtopic);//往期周刊
router.get("/zj",zj);//专辑
router.get("/zj/:id-:num.html",zj);//专辑
router.get("/zjdetail/:id",zjdetail);//专辑详情
module.exports=router;

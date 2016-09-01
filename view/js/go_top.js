/*
	name:   返回顶部功能
	author: Lids
	date:   2015年11月4日09:43:23
*/
$.fn.goTop=function(){
	this.each(function(){
		function goTop(){
			goTop.timer=setInterval(function(){
				var curPosition=document.documentElement.scrollTop || document.body.scrollTop;
				curPosition-=100;
				if(curPosition>0){
					window.scrollTo(0,curPosition);
				}else{
					window.scrollTo(0,0);
					clearInterval(goTop.timer);
				}
				
			},1);
		}
		this.style.opacity='0';
        this.style.filter='alpha(opacity=0)';
        this.style.cursor='pointer';
        this.style.transition='all ease.3s';
        this.style.WebkitTransition='all ease.3s';
        this.style.MozTransition='all ease.3s';
        var _this=this;
		if(window.navigator.userAgent.indexOf('MSIE 6.0')!=-1){
			this.style.position='absolute';
		}else{
			window.onscroll=window.onresize=function(){
				var sCrollTop=document.documentElement.scrollTop||document.body.scrollTop;
				if(sCrollTop>400){
                    _this.style.opacity='1';
                    _this.style.filter='alpha(opacity=100)';
                    _this.onclick=function(){
						goTop();
					};
				}else{
                    _this.style.opacity='0';
                    _this.style.filter='alpha(opacity=0)';
				}
			};
			
		}		
	});
};

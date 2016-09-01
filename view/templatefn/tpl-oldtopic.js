var GTPL={}
$.extend({
	encode: function( text ) {
		return ("" + text).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;");
	}
})

GTPL.topiclist=function(data){ var $fn=function (jQuery,$item
/**/) {
var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('');if((typeof(list)!=='undefined' && (list)!=null) && (typeof(list)==='function'?(list).call($item):(list))){__.push('      ');if((typeof(list.length>0)!=='undefined' && (list.length>0)!=null) && (typeof(list.length>0)==='function'?(list.length>0).call($item):(list.length>0))){__.push('      ');if(typeof(list)!=='undefined' && (list)!=null){$.each((typeof(list)==='function'?(list).call($item):(list)),function(i, item){with(this){__.push('          <div class="col-xs-12 col-sm-6 col-md-4 item">              <a num="');if(typeof(item.id)!=='undefined' && (item.id)!=null){__.push($.encode((typeof(item.id)==='function'?(item.id).call($item):(item.id))));}__.push('" href="javascript:;">                  <div class="thumbnail item-con">                      <img src="');if(typeof(item.topImgUrl)!=='undefined' && (item.topImgUrl)!=null){__.push($.encode((typeof(item.topImgUrl)==='function'?(item.topImgUrl).call($item):(item.topImgUrl))));}__.push('" class="img-responsive">                  </div>              </a>          </div>      ');}});}__.push('      ');}__.push('  ');}__.push('');}return __;
};return $fn($,{data:data||{}}).join('')};

GTPL.wjlist=function(data){ var $fn=function (jQuery,$item
/**/) {
var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('');if((typeof(list)!=='undefined' && (list)!=null) && (typeof(list)==='function'?(list).call($item):(list))){__.push('      ');if((typeof(list.length>0)!=='undefined' && (list.length>0)!=null) && (typeof(list.length>0)==='function'?(list.length>0).call($item):(list.length>0))){__.push('      ');if(typeof(list)!=='undefined' && (list)!=null){$.each((typeof(list)==='function'?(list).call($item):(list)),function(i, item){with(this){__.push('          <div class="col-xs-12 col-sm-6 col-md-4 item">              <a num="');if(typeof(item.id)!=='undefined' && (item.id)!=null){__.push($.encode((typeof(item.id)==='function'?(item.id).call($item):(item.id))));}__.push('" href="javascript:;">                  <div class="thumbnail item-con">                      <img src="');if(typeof(item.topImgUrl)!=='undefined' && (item.topImgUrl)!=null){__.push($.encode((typeof(item.topImgUrl)==='function'?(item.topImgUrl).call($item):(item.topImgUrl))));}__.push('" class="img-responsive">                  </div>              </a>          </div>      ');}});}__.push('      ');}__.push('  ');}__.push('');}return __;
};return $fn($,{data:data||{}}).join('')};
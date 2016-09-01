<div class="container-fluid navbar-fixed-top top-marks">
    <div class="container">
        <img src="{{ config.imageServer }}/gmpro/1.0.0/gmbuy/1.0.0/images/tiger-ico.png" class="tiger-ico" alt=""/>
        <a href="http://www.gome.com.cn/" class="small">国美在线</a>
    </div>
</div>
<header class="container-fluid navbar-fixed-top header">
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-7 padding-left0"><a class="navbar-brand navbar-brand-gmb padding-left0" href="http://gomebuy{{ config.cookieDomain }}/zj/"><img src="{{ config.imageServer }}/gmpro/1.0.0/gmbuy/1.0.0/images/u167.png" width="120" alt=""></a></div>
                <div class="col-lg-8 col-md-8 col-sm-7 hidden-xs navbar navbar-default index-nav">
                    <ul class="nav navbar-nav navbar-right gmb-nav">
                        <li class="" role="presentation"><a href="http://gomebuy{{ config.cookieDomain }}/zj/"><span class="glyphicon glyphicon-globe color-native"></span>专辑</a></li>
                        <li role="presentation"><a href="http://gomebuy{{ config.cookieDomain }}/jd/"><span class="glyphicon glyphicon-book color-native"></span>知识库</a></li>
                        <li role="presentation"><a href="http://gomebuy{{ config.cookieDomain }}/topic/"><span class="glyphicon glyphicon-bell color-native"></span>知家周刊</a></li>
                        <li role="presentation"><a href="http://gomebuy{{ config.cookieDomain }}/wj/"><span class="glyphicon glyphicon-tent color-native"></span>玩家</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-5 text-right search-collapse">
                    <button class="btn-search btn-search-collapse" data-target="#mySearch"><i class="glyphicon glyphicon-search color-danger color-native"></i></button>
                    <button type="button" class="btn-collapse btn-search-collapse showRightPush" id="toRight">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
            </div>
        </div>
        <div class="gome-search">
            <div class="container">
                <div class="input-group">
                    <input type="text" placeholder="输入关键词查找.." class="form-control" id="headSearch" />
                    <span class="input-group-addon search-close"><i class="glyphicon glyphicon-remove"></i></span>
                </div>
            </div>
        </div>
    </div>
</header>
<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu-s2">
    <h3>
        <img src="{{ config.imageServer }}/gmpro/1.0.0/gmbuy/1.0.0/images/u168.png" alt=""/>
        <button type="button" class="btn-collapse btn-search-collapse cbp-close">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
    </h3>
    <a href="http://gomebuy{{ config.cookieDomain }}/zj/">专辑<span class="glyphicon glyphicon-menu-right pull-right"></span></a>
    <a href="http://gomebuy{{ config.cookieDomain }}/jd/">知识库<span class="glyphicon glyphicon-menu-right pull-right"></span></a>
    <a href="http://gomebuy{{ config.cookieDomain }}/topic/">知家周刊<span class="glyphicon glyphicon-menu-right pull-right"></span></a>
    <a href="http://gomebuy{{ config.cookieDomain }}/wj/">玩家<span class="glyphicon glyphicon-menu-right pull-right"></span></a>
</nav>

<div class="modal fade" id="mySearch" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title text-center" id="myModalLabel">搜索一下</h4>
            </div>
            <div class="modal-body">
                <div class="input-group">
                    <input type="text" placeholder="输入关键词查找.." id="searchtxt" class="form-control" autofocus />
                    <span class="input-group-addon search-close"><i class="glyphicon glyphicon-remove"></i></span>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-sky search-btn">搜索</button>
            </div>
        </div>
    </div>
</div>
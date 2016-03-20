TorrentStream.MagicPlayerWindow = function(conf)
{
    var LANG_RU = {
        turnOffPictures: "Turn off",
        plugin_not_enabled: "Для работы Magic Player Вам необходимо включить<br/>Ace Stream P2P Multimedia Plug-in",
        missing_engine: "Для проигрывания контента вам необходимо установить программное обеспечение Ace Stream и/или запустить приложение<br/>Ace Stream Media Center",
        install: "Установить",
        enableInstruction: "Инструкция"
    };
    
    var LANG_EN = {
        turnOffPictures: "Turn off",
        plugin_not_enabled: "To use Magic Player you have to enable<br/>Ace Stream P2P Multimedia Plug-in",
        missing_engine: "To play content you have to install Ace Stream software and/or launch <br/> Ace Stream Media Center app",
        install: "Install",
        enableInstruction: "Instruction"
    };
    
    var undefined,
        $ = TorrentStream.jQuery,
        _self = this,
        _contextDocument,
        _pluginContainer,
        _player,
        _lang = LANG_EN,
        _locale = "en";
        
    if(typeof AWE_getLocale === "function") {
        AWE_getLocale(function(locale) {
                console.log("got locale from host extension: " + locale);
                _locale = locale;
                if(_locale && _locale.substring(0, 2) == "ru") {
                    _lang = LANG_RU;
                }
                else {
                    _lang = LANG_EN;
                }
        });
    }
    else {
        console.log("use default locale: en");
        _locale = "en";
    }
    
    // init
    var defaultConf = {
        lang: null,
        langId: "auto",
        picturesSettings: {},
        debug: false
    };
    
    conf = TorrentStream.Utils.extend(defaultConf, conf);
    _lang = TorrentStream.Utils.extend(_lang, conf.lang);
    _contextDocument = conf._contextDocument || document;
    
    createWindow();
    attachEvents();
    
    // public method
    this.getPluginContainer = function() {
        return _pluginContainer;
    };
    
    this.attachPlayer = function(player) {
        _player = player;
    };
    
    this.showPlayer = function(callback) {
        hideEmbedElements();
        
        $("#x-acestream-magicplayer-window").show();
        
        if(typeof callback == 'function') {
            callback.call(_self);
        }
    };
    
    this.closePlayer = function() {
        showEmbedElements();
        
        $("#x-acestream-magicplayer-window").hide();
        
        if(_player) {
            _player.destroy();
            _player = null;
        }
    };
    
    this.missingEngine = function() {
        $("#x-acestream-magicplayer-window").addClass("no-plugin");
    };
    
    this.pluginNotEnabled = function() {
        $("#x-acestream-magicplayer-window").addClass("no-plugin disabled");
    };
    
    this.displayAceStreamLink = function(contentId) {
        var containerHeight = $(_pluginContainer).height(),
            containerWidth = $(_pluginContainer).width(),
            left = containerWidth / 2 - 64,
            top = containerHeight / 2 - 64;
            
        $(_pluginContainer).append('<a href="acestream://' + contentId + '" style="color: #fff; font-size: 48px; text-decoration: none; font-weight: bold; position: absolute; left: '+left+'px; top: '+top+'px;"><img src="http://static.acestream.org/magicplayer/logo/128.png" width="128" height="128" /></a>');
    };
    
    // private methods
    function createWindow()
    {
        // cleanup any previous windows
        $("#x-acestream-magicplayer-window").remove();
        
        var windowWidth,
            windowHeight,
            playerWidth,
            playerHeight,
            playerTop = 0,
            windowType,
            html;
            
        try {
            windowHeight = _contextDocument.defaultView.innerHeight;
        }
        catch(e) {
            windowHeight = window.innerHeight;
        }
        
        try {
            windowWidth = _contextDocument.defaultView.innerWidth;
        }
        catch(e) {
            windowWidth = window.innerWidth;
        }
        
        if(conf.picturesSettings.showRight || conf.picturesSettings.showBottom) {
            playerWidth = 1005;
            playerHeight = 627;
            
            if(windowWidth >= playerWidth && windowHeight >= playerHeight) {
                playerTop = (windowHeight - playerHeight) / 2;
                windowType = 'dialog';
            }
            else {
                windowType = 'fullscreenMini';
            }
        }
        else {
            playerWidth = 738;
            playerHeight = 573;
            windowType = 'dialogNA';
            
            if(windowHeight >= playerHeight) {
                playerTop = (windowHeight - playerHeight) / 2;
            }
            else {
                playerTop = 0;
            }
        }
        
        _log("createWindow: windowWidth=" + windowWidth + " windowHeight=" + windowHeight + " windowType=" + windowType + " playerWidth=" + playerWidth + " playerHeight=" + playerHeight + " playerTop=" + playerTop);
        
        var disablePicturesButton;
        if(conf.picturesSettings.disableUrl) {
            disablePicturesButton = '<a class="magic-btn" href="' + conf.disableUrl + '" target="_blank">' + _lang.turnOffPictures + '</a>';
        }
        else {
            disablePicturesButton = '';
        }
        
        if(windowType == 'dialog') {
            html =
                '<div id="x-acestream-magicplayer-window">'+
                    '<div class="overlay-background"></div>'+
                    '<div class="big-screen" style="top: ' + playerTop + 'px;">'+
                        '<div class="top-panel">'+
                            '<div class="magic-logo"></div>'+
                            '<div class="magic-title">Magic Player</div>'+
                            '<div id="magicplayer-button-close" class="magic-close"></div>'+
                        '</div>'+
                        '<div class="center">'+
                            '<div id="torrentstream-info">'+
                                '<div class="missing-engine">'+
                                    '<p>' + _lang.missing_engine + '</p>'+
                                    '<a href="http://info.acestream.org/#/install" class="install-btn" target="_blank">' + _lang.install + '</a>'+
                                '</div>'+
								'<div class="not-enabled">'+
                                    '<p>' + _lang.plugin_not_enabled + '</p>'+
                                    '<a href="http://info.acestream.org/#/plugin/enable" class="install-btn" target="_blank">' + _lang.enableInstruction + '</a>'+
                                '</div>'+
                            '</div>'+
                            '<div id="torrentstream-player-container">'+
                                '<div id="torrentstream-player"></div>'+
                                '<div class="player-line"></div>'+
                            '</div>'+
                            '<div class="side-picture">'+
                            '<div class="pictures">' + (conf.picturesSettings.showRight ? getPicturesHtml(windowType, 'right', conf.picturesSettings.rightWidth, conf.picturesSettings.rightHeight) : '') + '</div>'+
                                disablePicturesButton+
                            '</div>'+
                        '</div>'+
                        '<div class="bottom-picture">' + (conf.picturesSettings.showBottom ? getPicturesHtml(windowType, 'bottom', 728, 90) : '') + '</div>'+
                    '</div>'+
                '</div>';
        }
        else if(windowType == 'dialogNA') {
            html =
                '<div id="x-acestream-magicplayer-window" class="nopictures">'+
                    '<div class="overlay-background"></div>'+
                    '<div class="big-screen" style="top: ' + playerTop + 'px;">'+
                        '<div class="top-panel">'+
                            '<div class="magic-logo"></div>'+
                            '<div class="magic-title">Magic Player</div>'+
                            '<div id="magicplayer-button-close" class="magic-close"></div>'+
                        '</div>'+
                        '<div class="center">'+
                            '<div id="torrentstream-info">'+
                                '<div class="missing-engine">'+
                                    '<p>' + _lang.missing_engine + '</p>'+
                                    '<a href="http://info.acestream.org/#/install" class="install-btn" target="_blank">' + _lang.install + '</a>'+
                                '</div>'+
								'<div class="not-enabled">'+
                                    '<p>' + _lang.plugin_not_enabled + '</p>'+
                                    '<a href="http://info.acestream.org/#/plugin/enable" class="install-btn" target="_blank">' + _lang.enableInstruction + '</a>'+
                                '</div>'+
                            '</div>'+
                            '<div id="torrentstream-player-container">'+
                                '<div id="torrentstream-player"></div>'+
                                '<div class="player-line"></div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';
        }
        else if(windowType == 'fullscreenMini') {
            html = 
                '<div id="x-acestream-magicplayer-window" class="fullscreen-mini">'+
                    '<div class="overlay-background"></div>'+
                    '<div class="big-screen">'+
                        '<div class="top-panel">'+
                            '<div class="magic-logo"></div>'+
                            '<div class="magic-title">Magic Player</div>'+
                            '<div id="magicplayer-button-close" class="magic-close"></div>'+
                        '</div>'+
                        '<div class="center">'+
                            '<div id="torrentstream-info">'+
                                '<div class="missing-engine">'+
                                    '<p>' + _lang.missing_engine + '</p>'+
                                    '<a href="http://info.acestream.org/#/install" class="install-btn" target="_blank">' + _lang.install + '</a>'+
                                '</div>'+
								'<div class="not-enabled">'+
                                    '<p>' + _lang.plugin_not_enabled + '</p>'+
                                    '<a href="http://info.acestream.org/#/plugin/enable" class="install-btn" target="_blank">' + _lang.enableInstruction + '</a>'+
                                '</div>'+
                            '</div>'+
                            '<div id="torrentstream-player-container">'+
                                '<div id="torrentstream-player"></div>'+
                                '<div class="player-line"></div>'+
                            '</div>'+
                            '<div class="side-picture">'+
                                '<div class="pictures">' + (conf.picturesSettings.showRight ? getPicturesHtml(windowType, 'right', conf.picturesSettings.rightWidth, conf.picturesSettings.rightHeight) : '') + '</div>'+
                                disablePicturesButton+
                            '</div>'+
                            '<div class="container"><div class="bottom-picture">' + (conf.picturesSettings.showBottom ? getPicturesHtml(windowType, 'bottom', 468, 60) : '') + '</div></div>'+
                        '</div>'+
                    '</div>'+
                '</div>';
        }
        $("body").append(html);
        
        _pluginContainer = document.getElementById("torrentstream-player");
    };
    
    function attachEvents()
    {
        $("#magicplayer-button-close").click(function() {
                _self.closePlayer();
        });
    };
    
    function getPicturesHtml(windowType, placement, width, height)
    {
        var url, params, p;
        var defaultParams = {
            t: windowType,
            p: placement,
            w: width,
            h: height,
            r: Math.random()
        };
        
        params = defaultParams;
        url = "http://magicplayer.torrentstream.org/picture.php?";
        for(p in params) {
            url += p + "=" + encodeURIComponent(params[p]) + "&";
        }
            
        return '<iframe src="' + url + '" width="' + width + '" height="' + height + '" class="magicplayer-picture" style="border: none;" scrolling="no"></iframe>';
    };
    
    function showEmbedElements() {
        var objects = _contextDocument.getElementsByTagName('embed');
        setTimeout(function () {
                var i;
                for (i=0; i<objects.length; i++) {
                    if (objects[i].type == 'application/x-shockwave-flash') {
                        objects[i].style['visibility'] = 'visible';
                    }
        }}, 700);
        $('iframe', _contextDocument).each(function() { $(this).css("visibility", "visible"); });
        $('object', _contextDocument).each(function() { $(this).css("visibility", "visible"); });
    };
    
    function hideEmbedElements() {
        var i;
        var objects = _contextDocument.getElementsByTagName('embed');
        for (i=0; i<objects.length; i++) {
            if (objects[i].type == 'application/x-shockwave-flash') {
                objects[i].style['visibility'] = 'hidden';
            }
        }
        $('iframe', _contextDocument).each(function() {
                if(!$(this).hasClass("magicplayer-picture")) {
                    $(this).css("visibility", "hidden");
                }
        });
        $('object', _contextDocument).each(function() { $(this).css("visibility", "hidden"); });
    };
    
    function _log(msg)
    {
        if(!conf.debug) {
            return;
        }
        
        try {
            if(!msg) {
                msg = "";
            }
            msg = "Controls::" + msg;
            console.log(msg);
        }
        catch(e) {}
    };
};

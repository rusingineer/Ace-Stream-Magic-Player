// ==UserScript==
// @name        Magic Player
// @namespace   acestream
// @author      Ace Stream
// @homepageURL http://awe.acestream.me/scripts/acestream/Magic_Player
// @description Watch torrents online
// @version     1.0.13.1
// @grant       GM_log
// @grant       AWE_getLocale
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       AWE_engineStatus
// @grant       AWE_getAvailablePlayers
// @grant       AWE_openInPlayer
// @grant       AWE_registerContextMenuCommand
// @noframes
// @include     http://*.*/*
// @include     https://thepiratebay.*
// @include     https://kickass.unblocked.la*
// @include     https://*limetorrents.*
// @include     https://eztv.ag*
// @include     https://*nyaa.*
// @require     https://raw.githubusercontent.com/rusingineer/Ace-Stream-Magic-Player/master/script_map.js
// @require     http://awe-static.acestream.me/vendor/jquery/jquery-1.7.min.js
// @require     http://awe-static.acestream.me/lib/ts/core.js?5
// @require     http://awe-static.acestream.me/lib/ts/jquery_wrapper.js
// @require     http://awe-static.acestream.me/lib/ts/player.js?7
// @require     http://awe-static.acestream.me/lib/ts/magicplayer.js?1
// @require     http://awe-static.acestream.me/lib/ts/button.js
// @require     http://awe-static.acestream.me/handlers/rutor.js?9
// @require     http://awe-static.acestream.me/handlers/rutracker.js?8
// @require     http://awe-static.acestream.me/handlers/1337x.js?5
// @require     http://awe-static.acestream.me/handlers/adminko.js
// @require     http://awe-static.acestream.me/handlers/animelayer.js?1
// @require     http://awe-static.acestream.me/handlers/animereactor.js
// @require     http://awe-static.acestream.me/handlers/arenabg.js?1
// @require     http://awe-static.acestream.me/handlers/baibako.js?1
// @require     http://awe-static.acestream.me/handlers/bakabt.js?1
// @require     http://awe-static.acestream.me/handlers/beeretracker.js
// @require     http://awe-static.acestream.me/handlers/berloga.js
// @require     http://awe-static.acestream.me/handlers/bete.js
// @require     http://awe-static.acestream.me/handlers/big-boss.js
// @require     http://awe-static.acestream.me/handlers/bigfangroup.js
// @require     http://awe-static.acestream.me/handlers/bigtorrent.js
// @require     http://awe-static.acestream.me/handlers/bithq.js
// @require     http://awe-static.acestream.me/handlers/bithumen.js
// @require     http://awe-static.acestream.me/handlers/bitmanija.js
// @require     http://awe-static.acestream.me/handlers/bitsnoop.js
// @require     http://awe-static.acestream.me/handlers/bitsoup.js
// @require     http://awe-static.acestream.me/handlers/btscene.js
// @require     http://awe-static.acestream.me/handlers/coda.js
// @require     http://awe-static.acestream.me/handlers/dark-os.js
// @require     http://awe-static.acestream.me/handlers/demonoid.js
// @require     http://awe-static.acestream.me/handlers/dimeadozen.js
// @require     http://awe-static.acestream.me/handlers/divxtotal.js
// @require     http://awe-static.acestream.me/handlers/dontracker.js
// @require     http://awe-static.acestream.me/handlers/dxp.js
// @require     http://awe-static.acestream.me/handlers/elitetorrent.js
// @require     http://awe-static.acestream.me/handlers/estrenosdtl.js
// @require     http://awe-static.acestream.me/handlers/ex.js?1
// @require     http://awe-static.acestream.me/handlers/extratorrent.js
// @require     http://awe-static.acestream.me/handlers/eztv.js
// @require     http://awe-static.acestream.me/handlers/fast-torrent.js
// @require     http://awe-static.acestream.me/handlers/fasttorrent.js
// @require     http://awe-static.acestream.me/handlers/fat.js
// @require     http://awe-static.acestream.me/handlers/fenopy.js
// @require     http://awe-static.acestream.me/handlers/fex.js
// @require     http://awe-static.acestream.me/handlers/filebag.js
// @require     http://awe-static.acestream.me/handlers/filebase.js
// @require     http://awe-static.acestream.me/handlers/file.lu.js
// @require     http://awe-static.acestream.me/handlers/freekino.js
// @require     http://awe-static.acestream.me/handlers/free-torrents.js
// @require     http://awe-static.acestream.me/handlers/frenchtorrentdb.js
// @require     http://awe-static.acestream.me/handlers/fulldls.js
// @require     http://awe-static.acestream.me/handlers/goldenshara.js?5
// @require     http://awe-static.acestream.me/handlers/hdclub.js
// @require     http://awe-static.acestream.me/handlers/hdclub.org.js
// @require     http://awe-static.acestream.me/handlers/hdreactor.js
// @require     http://awe-static.acestream.me/handlers/hilm.js
// @require     http://awe-static.acestream.me/handlers/hqclub.js
// @require     http://awe-static.acestream.me/handlers/hq-video.js
// @require     http://awe-static.acestream.me/handlers/jc-club.js
// @require     http://awe-static.acestream.me/handlers/jesus-torrent.js
// @require     http://awe-static.acestream.me/handlers/kat.js
// @require     http://awe-static.acestream.me/handlers/katushka.js
// @require     http://awe-static.acestream.me/handlers/kinokopilka.js
// @require     http://awe-static.acestream.me/handlers/kinoshek.js
// @require     http://awe-static.acestream.me/handlers/kinozal.js
// @require     http://awe-static.acestream.me/handlers/kinsburg.js
// @require     http://awe-static.acestream.me/handlers/limetorrents.js
// @require     http://awe-static.acestream.me/handlers/linkomanija.js
// @require     http://awe-static.acestream.me/handlers/lostfilm.js
// @require     http://awe-static.acestream.me/handlers/masters-tb.js
// @require     http://awe-static.acestream.me/handlers/maxnet.js
// @require     http://awe-static.acestream.me/handlers/mediastore.js
// @require     http://awe-static.acestream.me/handlers/mininova.js
// @require     http://awe-static.acestream.me/handlers/monova.js
// @require     http://awe-static.acestream.me/handlers/movietorrents.js
// @require     http://awe-static.acestream.me/handlers/multiestrenos.js
// @require     http://awe-static.acestream.me/handlers/mytorrento.js
// @require     http://awe-static.acestream.me/handlers/newtorr.js
// @require     http://awe-static.acestream.me/handlers/nice-media.js
// @require     http://awe-static.acestream.me/handlers/nigma.js
// @require     http://awe-static.acestream.me/handlers/nnm.js
// @require     http://awe-static.acestream.me/handlers/nnportal.js
// @require     http://awe-static.acestream.me/handlers/novafilm.js
// @require     http://awe-static.acestream.me/handlers/novaset.js
// @require     http://awe-static.acestream.me/handlers/nyaa.js
// @require     http://awe-static.acestream.me/handlers/oday.js
// @require     http://awe-static.acestream.me/handlers/opensharing.js
// @require     http://awe-static.acestream.me/handlers/opentorrent.js
// @require     http://awe-static.acestream.me/handlers/picktorrent.js
// @require     http://awe-static.acestream.me/handlers/piratbit.js
// @require     http://awe-static.acestream.me/handlers/pirat.ca.js
// @require     http://awe-static.acestream.me/handlers/planefilm.js
// @require     http://awe-static.acestream.me/handlers/powertracker.js
// @require     http://awe-static.acestream.me/handlers/pravtor.js
// @require     http://awe-static.acestream.me/handlers/publichd.js
// @require     http://awe-static.acestream.me/handlers/rarbg.js
// @require     http://awe-static.acestream.me/handlers/rgfootball.js
// @require     http://awe-static.acestream.me/handlers/riper.js
// @require     http://awe-static.acestream.me/handlers/rt-tracker.js
// @require     http://awe-static.acestream.me/handlers/rustorka.js
// @require     http://awe-static.acestream.me/handlers/scenefz.js
// @require     http://awe-static.acestream.me/handlers/seedpeer.js
// @require     http://awe-static.acestream.me/handlers/starbit.js
// @require     http://awe-static.acestream.me/handlers/stepashka.js
// @require     http://awe-static.acestream.me/handlers/streamzone.js
// @require     http://awe-static.acestream.me/handlers/sumotorrent.js
// @require     http://awe-static.acestream.me/handlers/take.fm.js
// @require     http://awe-static.acestream.me/handlers/tapochek.js
// @require     http://awe-static.acestream.me/handlers/tfile.js
// @require     http://awe-static.acestream.me/handlers/thepiratebay.js
// @require     http://awe-static.acestream.me/handlers/toloka.js
// @require     http://awe-static.acestream.me/handlers/torlock.js
// @require     http://awe-static.acestream.me/handlers/tormovies.js
// @require     http://awe-static.acestream.me/handlers/torrent73.js
// @require     http://awe-static.acestream.me/handlers/torrentbit.js
// @require     http://awe-static.acestream.me/handlers/torrentdownloads.js
// @require     http://awe-static.acestream.me/handlers/torrentfunk.js
// @require     http://awe-static.acestream.me/handlers/torrentom.js
// @require     http://awe-static.acestream.me/handlers/torrentreactor.js
// @require     http://awe-static.acestream.me/handlers/torrents.by.js
// @require     http://awe-static.acestream.me/handlers/torrents.js
// @require     http://awe-static.acestream.me/handlers/torrentsmd.js
// @require     http://awe-static.acestream.me/handlers/torrents.net.js
// @require     http://awe-static.acestream.me/handlers/torrentzap.js
// @require     http://awe-static.acestream.me/handlers/torrnado.js
// @require     http://awe-static.acestream.me/handlers/torrnado-ru.js
// @require     http://awe-static.acestream.me/handlers/treckera-net.js
// @require     http://awe-static.acestream.me/handlers/uatracker.js
// @require     http://awe-static.acestream.me/handlers/undelete.js
// @require     http://awe-static.acestream.me/handlers/uniongang.js
// @require     http://awe-static.acestream.me/handlers/unionpeer.js
// @require     http://awe-static.acestream.me/handlers/uraltrack.js
// @require     http://awe-static.acestream.me/handlers/vertor.js
// @require     http://awe-static.acestream.me/handlers/x-torrents.js
// @require     http://awe-static.acestream.me/handlers/yify.js
// @require     http://awe-static.acestream.me/handlers/yourbittorent.js
// @require     http://awe-static.acestream.me/handlers/youtor.js
// @require     http://awe-static.acestream.me/handlers/zamunda.js
// @require     http://awe-static.acestream.me/handlers/zlofenix.js
// @require     http://awe-static.acestream.me/handlers/zoneland.js
// @resource    css_magicplayer http://awe-static.acestream.me/css/magicplayer.css?1
// @resource    css_buttons http://awe-static.acestream.me/css/ts-buttons.css?2
// @resource    css_dropdown http://awe-static.acestream.me/css/ts-dropdown.css?1
// ==/UserScript==

var DEBUG = true;
var AFFILIATE_ID = 11;
var ZONE_ID = 588;

var content_id_cache_ = {};
var added_styles_ = {};

magicplayer = TorrentStream.Utils.extend(magicplayer, {
    // last known engine version
    engineVersion: 0,
    //TODO: implement localized messages
    getLocalizedMessage: function(id) {
        if(id == "extensions_magicplayer_txt_loading_file") {
            return "Loading...";
        }
        else {
            return id;
        }
    },
    log: function(msg) {
        if(DEBUG) {
            try {
                GM_log(msg);
            }
            catch(e) {}
        }
    },
    loadPackage: function(packageId) {
        if(packageId == "ts-white-screen") {
            addStyleOnce("css_magicplayer");
            addStyleOnce("css_buttons");
        }
    },
    openInDefaultPlayer: function(details) {
        magicplayer.log("openInDefaultPlayer: details=" + JSON.stringify(details));
        showSpinner();
        
        // Logic:
        // if plugin is installed and enabled, run it
        // if plugin is installed, but not enabled, show warning
        // if plugin is not installed then check engine status
        // if engine is not running (status==0) then show warning
        // if old engine is running (no media server API), then get content id and try to open acestream:// link
        // if new engine is running then open content in the default player
        
        // check whether plugin is installed
        var availablePlugin = TorrentStream.Utils.detectPluginExt();
        
        if(availablePlugin.type !== 0) {
            // plugin is installed
            if(availablePlugin.enabled) {
                // open in web player
                hideSpinner();
                TorrentStream.Utils.showPopupPlayer(details);
            }
            else {
                hideSpinner();
                showWarngingWindow("plugin-not-enabled");
            }
        }
        else {
            // plugin is not installed, check engine
            AWE_engineStatus(function(engineStatus) {
                magicplayer.log("openInDefaultPlayer: engine status: " + JSON.stringify(engineStatus));
                
                if(engineStatus.version === 0) {
                    // engine is not running
                    hideSpinner();
                    showWarngingWindow("missing-engine");
                }
                else {
                    var playFunction;
                    
                    if(engineStatus.version >= 3003200) {
                        // new engine running, open in default desktop player
                        needContentId = (details.dataType == "torrentUrl" && details.downloadTorrent);
                        playFunction = function(contentId, transportFileUrl) {
                            var params = {};
                            if(contentId) {
                                params.content_id = contentId;
                            }
                            if(transportFileUrl) {
                                params.transport_file_url = transportFileUrl;
                            }
                            AWE_openInPlayer(params, undefined, function(response) {
                                    hideSpinner();
                            });
                        };
                    }
                    else {
                        // old engine running
                        needContentId = (details.dataType != "contentId");
                        playFunction = function(contentId, transportFileUrl) {
                            hideSpinner();
                            window.location.href = "acestream://" + contentId;
                        };
                    }
                    
                    if(!needContentId) {
                        // call playFunction now
                        var contentId, transportFileUrl;
                        if(details.dataType == "contentId") {
                            contentId = details.data;
                        }
                        else if(details.dataType == "torrentUrl") {
                            transportFileUrl = details.data;
                        }
                        playFunction(contentId, transportFileUrl);
                    }
                    else {
                        // get content id
                        var _url = details.data;
                        if(content_id_cache_[_url]) {
                            GM_log("got content id from cache: id=" + content_id_cache_[_url] + " url=" + _url);
                            playFunction(content_id_cache_[_url], null);
                        }
                        else {
                            GM_log("download transport file to get content id");
                            downloadTorrent({
                                    url: _url,
                                    method: details.usePost ? "POST" : "GET",
                                    onsuccess: function(data) {
                                        getContentIdFromServer({
                                                type: 'torrentRaw',
                                                data: TorrentStream.Utils.base64_encode(data),
                                                affiliateId: AFFILIATE_ID,
                                                zoneId: ZONE_ID,
                                                params: details.params
                                        },
                                        function(response) {
                                            if(response.success) {
                                                GM_log("got content id from server: " + response.contentId);
                                                content_id_cache_[_url] = response.contentId;
                                                playFunction(response.contentId, null);
                                            }
                                            else {
                                                hideSpinner();
                                                alert("Failed to get content id");
                                            }
                                        });
                                    },
                                    onerror: function(errmsg) {
                                        hideSpinner();
                                        alert(errmsg);
                                    }
                            });
                        }
                    }
                }
            });
        }
    },
    renderDropdown: function(anchor, details) {
        var $ = TorrentStream.jQuery,
            $anchor = $(anchor),
            offset = $anchor.offset(),
            top,
            left,
            right,
            containerId,
            $container;
            
        addStyleOnce("css_dropdown");
        function _fill() {
            if(details.dataType == "torrentUrl" && details.downloadTorrent) {
                var _url = details.data;
                if(content_id_cache_[_url]) {
                    details.dataType = "contentId";
                    details.data = content_id_cache_[_url];
                    details.downloadTorrent = false;
                    if(DEBUG) {
                        GM_log("got content id from cache: id=" + details.data + " url=" + _url);
                    }
                }
                else {
                    var _method = details.usePost ? "POST" : "GET";
                    if(DEBUG) {
                        GM_log("download transport file to get content id");
                    }
                    downloadTorrent({
                            url: _url,
                            method: _method,
                            onsuccess: function(data) {
                                getContentIdFromServer({
                                        type: 'torrentRaw',
                                        data: TorrentStream.Utils.base64_encode(data),
                                        affiliateId: AFFILIATE_ID,
                                        zoneId: ZONE_ID,
                                        params: details.params
                                    },
                                    function(response) {
                                        if(response.success) {
                                            if(DEBUG) {
                                                GM_log("got content id from server: " + response.contentId);
                                            }
                                            content_id_cache_[_url] = response.contentId;
                                            details.dataType = "contentId";
                                            details.data = response.contentId;
                                            details.downloadTorrent = false;
                                            _fill();
                                        }
                                        else {
                                            _hide();
                                            alert("Failed to get content id");
                                        }
                                    });
                            },
                            onerror: function(errmsg) {
                                _hide();
                                alert(errmsg);
                            }
                    });
                    return;
                }
            }
            
            var $list = $("<ul>"),
                $item;
                
            $container.empty();
            
            // check whether plugin is installed
            var availablePlugin = TorrentStream.Utils.detectPluginExt();
            if(availablePlugin.type != 0 && availablePlugin.enabled) {
                $item = $('<li><a href="#">Open in web player</a></li>');
                $item.click(function() {
                        _hide();
                        TorrentStream.Utils.showPopupPlayer(details);
                        return false;
                });
                $list.append($item);
            }
            
            var params = {};
            if(details.dataType == "contentId") {
                params.content_id = details.data;
            }
            if(details.dataType == "torrentUrl") {
                params.transport_file_url = details.data;
            }
            
            AWE_getAvailablePlayers(params, function(response) {
                    if(response && response.players) {
                        for(i = 0; i < response.players.length; i++) {
                            $item = $('<li><a href="#">'+response.players[i].name+'</a></li>');
                            $item.data("player-id", response.players[i].id);
                            $item.click(function() {
                                    AWE_openInPlayer(params, $(this).data("player-id"));
                                    _hide();
                                    return false;
                            });
                            $list.append($item);
                        }
                        
                        $item = $('<li><a href="#">Add to playlist</a></li>');
                        $item.click(function() {
                                addEnginePlaylistItem(params);
                                _hide();
                                return false;
                        });
                        $list.append($item);
                    }
            });
            
            $container.append($list);
        }
            
        function _show() {
            _fill();
            $container.show().data("visible", true);
        }
            
        function _hide() {
            $container.hide().data("visible", false);
        }
        
        function _toggle() {
            if($container.data("visible")) {
                _hide();
            }
            else {
                _show();
            }
        }
            
        containerId = $anchor.data("magicplayer-dropdown-id");
        if(containerId) {
            // already created
            $container = $("#" + containerId);
            GM_log("got dropdown container: id=" + containerId + " count=" + $container.size());
            _toggle();
        }
        else {
            // create new container
            containerId = "magicplayer-dropdown-container-" + Math.random().toString().replace(".", "");
            GM_log("create dropdown container: id=" + containerId);
            $container = $('<div>').attr("id", containerId).addClass("magicplayer-dropdown-container");
            
            top = (offset.top + $anchor.height()) + "px";
            if(offset.left + 200 < $(window).width()) {
                left = offset.left + "px";
                right = "auto";
            }
            else {
                left = (offset.left + $anchor.width() - 200) + "px";
                right = "auto";
            }
            
            $container.css({
                    position: "absolute",
                    top: top,
                    left: left,
                    right: right,
                    backgroundColor: "#fff",
                    padding: "10px",
                    width: "200px",
                    height: "auto",
                    zIndex: "999999",
            });
            $anchor.data("magicplayer-dropdown-id", containerId);
            $("body").prepend($container);
            _show();
            
            $(document).click(function(event) {
                    if(!$(event.target).closest($container).size() && !$(event.target).closest($anchor).size()) {
                        if(DEBUG) {
                            GM_log("hide dropdown container on document click");
                        }
                        _hide();
                    }
            });
        }
    },
    renderButton: function(details) {
        if(DEBUG) {
            GM_log("renderButton: engineVersion=" + magicplayer.engineVersion + " details=" + JSON.stringify(details));
        }
        
        var $ = TorrentStream.jQuery,
            buttonConf,
            container,
            caretContainer,
            playContainer,
            icon,
            text,
            caret,
            baseWidth,
            showDropdown,
            caretPadding = 7,
            playPadding = 15;
            
        buttonConf = details.button;
        delete details.button;
        
        // don't show drop down when engine is not running
        showDropdown = (magicplayer.engineVersion >= 3003200);
        buttonConf.caretPosition = buttonConf.caretPosition || "left";
        buttonConf.color = buttonConf.color || "grey";
        buttonConf.text = buttonConf.text || "Воспроизвести";
        buttonConf.title = buttonConf.title || "Воспроизвести онлайн";
            
        container = document.createElement("div");
        playContainer = document.createElement("div");
        icon = document.createElement("i");
        if(buttonConf.style == "text") {
            text = document.createElement("span");
        }
        if(showDropdown) {
            caretContainer = document.createElement("div");
            caret = document.createElement("span");
        }
        
        container.className = "magicplayer-button";
        if(buttonConf.color == "blue") {
            container.className += " magicplayer-button-blue";
        }
        else {
            container.className += " magicplayer-button-grey";
        }
        
        if(showDropdown && buttonConf.caretPosition == "right") {
            container.className += " magicplayer-right";
        }
        
        // baseWidth - width without margins and paddings
        if(buttonConf.style == "big") {
            container.className += " magicplayer-big";
            baseWidth = 40;
            caretPadding = 4;
        }
        else if(buttonConf.style == "text") {
            container.className += " magicplayer-text";
            caretPadding = 4;
        }
        else if(buttonConf.style == "small") {
            container.className += " magicplayer-small";
            baseWidth = 34;
            caretPadding = 4;
        }
        else if(buttonConf.style == "small-16") {
            container.className += " magicplayer-small-16";
            baseWidth = 26;
            caretPadding = 2;
        }
        playContainer.className = "magicplayer-play";
        if(showDropdown) {
            caretContainer.className = "magicplayer-dropdown";
        }
        icon.className = "magicplayer-icon";
        if(buttonConf.style == "big") {
            icon.className += " magicplayer-icon-30";
        }
        else if(buttonConf.style == "text") {
            icon.className += " magicplayer-icon-24";
        }
        else if(buttonConf.style == "small") {
            icon.className += " magicplayer-icon-24";
        }
        else if(buttonConf.style == "small-16") {
            icon.className += " magicplayer-icon-16";
        }
        if(showDropdown) {
            caret.className = "magicplayer-caret";
        }
        if(buttonConf.style == "text") {
            text.innerHTML = buttonConf.text;
        }
        
        // custom styling
        if(buttonConf.playPadding !== undefined) {
            playPadding = buttonConf.playPadding;
        }
        if(showDropdown) {
            //if(buttonConf.caretPadding !== undefined) {
            //    caretPadding = buttonConf.caretPadding;
            //}
        }
        else {
            caretPadding = 0;
        }
        
        if(baseWidth) {
            container.style.width = (baseWidth + caretPadding*2 + playPadding) + "px";
        }
        if(showDropdown) {
            if(buttonConf.caretPosition == "right") {
                container.style.paddingLeft = playPadding + "px";
                caretContainer.style.marginLeft = playPadding + "px";
            }
            else {
                container.style.paddingRight = playPadding + "px";
                caretContainer.style.marginRight = playPadding + "px";
            }
            caretContainer.style.paddingRight = caretPadding + "px";
            caretContainer.style.paddingLeft = (caretPadding-1) + "px";
        }
        else {
            container.style.width = "auto";
            container.style.paddingRight = container.style.paddingLeft = playPadding + "px";
        }
        
        if(buttonConf.title) {
            icon.setAttribute("title", buttonConf.title);
        }
        
        playContainer.appendChild(icon);
        if(buttonConf.style == "text") {
            playContainer.appendChild(text);
        }
        container.appendChild(playContainer);
        if(showDropdown) {
            caretContainer.appendChild(caret);
            container.appendChild(caretContainer);
        }
        
        $(playContainer).click(function() {
                magicplayer.openInDefaultPlayer(details);
        });
        if(showDropdown) {
            $(caretContainer).click(function() {
                    magicplayer.renderDropdown(caretContainer, details);
            });
        }
        
        return container;
    }
});

function showWarngingWindow(windowId) {
    magicplayer.log("showWarngingWindow: id=" + windowId);
    var window = new TorrentStream.MagicPlayerWindow({
            debug: true
    });
    
    if(windowId == "missing-engine") {
        window.showPlayer(function() {
                this.missingEngine();
        });
    }
    else if(windowId == "plugin-not-enabled") {
        window.showPlayer(function() {
                this.pluginNotEnabled();
        });
    }
}

function showSpinner(conf) {
    if(document.getElementById("magicplayer-spinner")) {
        return;
    }
    
    var spinner = document.createElement("div");
    spinner.id = "magicplayer-spinner";
    spinner.setAttribute('style', 'z-index:1000000;position:fixed;left:39%;top:0px;width:22%;height:50px;background-color:#424242;text-align:center;font-size:25px;line-height:50px;color:#eaeaea;;font-family:Open Sans,Arial,Tahoma;');
    spinner.innerHTML = magicplayer.getLocalizedMessage("extensions_magicplayer_txt_loading_file");
    document.body.appendChild(spinner);
    
    if(conf && conf.useTsButton) {
        TorrentStream.Button.start();
    }
};

function hideSpinner(conf) {
    var spinner = document.getElementById("magicplayer-spinner");
    if(spinner) {
        spinner.parentNode.removeChild(spinner);
    }
    
    if(conf && conf.useTsButton) {
        TorrentStream.Button.stop();
    }
};
    
function addStyleOnce(styleId)
{
    if(!added_styles_[styleId]) {
        GM_addStyle(GM_getResourceText(styleId));
        added_styles_[styleId] = 1;
    }
}

function addEnginePlaylistItem(details)
{
    var $ = TorrentStream.jQuery,
        d = document,
        iframe_id = "acestream-iframe-playlist-add-item";

    if(d.getElementById("acestream-iframe-playlist-add-item")) {
        GM_log("addEnginePlaylistItem: iframe already exists");
        return;
    }

    var params = {};
    params['method'] = 'playlist_add_item';
    if(details.title)
        params['title'] = details.title;
    if(details.content_id)
        params['content_id'] = details.content_id;
    if(details.magnet)
        params['magnet'] = details.magnet;
    if(details.infohash)
        params['infohash'] = details.infohash;
    if(details.transport_file_url)
        params['transport_file_url'] = details.transport_file_url;
    
    var iframe = d.createElement("iframe");
    iframe.id = iframe_id;
    iframe.src = "http://127.0.0.1:6878/server/iframe?" + $.param(params);
    iframe.style.position = "fixed";
    iframe.style.top = "50px";
    iframe.style.left = "50%";
    iframe.style.marginLeft = "-325px";
    iframe.style.width = "650px";
    iframe.style.height = "445px";
    iframe.style.zIndex = "9999999";
    iframe.style.border = "none";
    d.body.appendChild(iframe);
    
    var overlay = d.createElement("div");
    overlay.id = iframe_id + "-overlay";
    overlay.style.position = "fixed";
    overlay.style.left = "0";
    overlay.style.top = "0";
    overlay.style.right = "0";
    overlay.style.bottom = "0";
    overlay.style.backgroundColor = "#000000";
    overlay.style.opacity = "0.9";
    overlay.style.zIndex = "999999";
    d.body.appendChild(overlay);
}

function acestreamEventListener(event) {
    if(event.data.acestream) {
        var msg = event.data.acestream.msg;
        if(msg === 'close_iframe_playlist_add_item') {
            var iframe = document.getElementById("acestream-iframe-playlist-add-item");
            if(iframe) {
                iframe.parentNode.removeChild(iframe);
            }
            var overlay = document.getElementById("acestream-iframe-playlist-add-item-overlay");
            if(overlay) {
                overlay.parentNode.removeChild(overlay);
            }
        }
    }
}

function downloadTorrent(details)
{
    details.method = details.method || "GET";
    var headers = details.headers || {};
    if(DEBUG) {
        GM_log("downloadTorrent: method=" + details.method + " url=" + details.url + " referer=" + location.href);
    }
    headers['Referer'] = location.href;
    GM_xmlhttpRequest({
        method: details.method,
        url: details.url,
        headers: headers,
        overrideMimeType: "text/plain; charset=x-user-defined",
        onerror: function(response) {
            if(typeof details.onerror === "function") {
                details.onerror.call(null, "Failed to download torrent");
            }
        },
        onload: function(response) {
            if(response.status == 200) {
                var validResponse = false,
                    contentType = null;

                // parse headers and find content type
                if(response.responseHeaders) {
                    var headers = response.responseHeaders.split("\r\n");
                    for(var i=0, len=headers.length; i < len; i++) {
                        if(headers[i].indexOf("Content-Type: ") === 0) {
                            contentType = headers[i].substring(14);
                        }
                    }
                }

                // check response content type
                if(contentType) {
                    if(contentType.indexOf("application/x-bittorrent") != -1) {
                        validResponse = true;
                    }
                    else if(contentType.indexOf("application/octet-stream") != -1) {
                        validResponse = true;
                    }
                    else if(contentType.indexOf("application/x-force-download") != -1) {
                        validResponse = true;
                    }
                    else if(contentType.indexOf("text/plain; charset=x-user-defined") != -1) {
                        validResponse = true;
                    }
                }
                else {
                    validResponse = true;
                }

                if(validResponse) {
                    if(typeof details.onsuccess === "function") {
                        details.onsuccess.call(null, response.responseText);
                    }
                }
                else {
                    if(typeof details.onerror === "function") {
                        details.onerror.call(null, "Failed to download torrent");
                    }
                }
            }
            else {
                if(typeof details.onerror === "function") {
                    details.onerror.call(null, "Failed to download torrent: " + response.status + " " + response.statusText);
                }
            }
        }
    });
}
    
function getContentIdFromServer(request, sendResponse)
{
    var method, arguments = {};

    if(request.type == 'torrentUrl') {
        method = 'addUrl';
        arguments["url"] = request.data;
    }
    else if(request.type == 'torrentRaw') {
        method = 'addData';
        arguments["data"] = request.data;
    }
    else {
        GM_log("getContentId: unknown request type: " + request.type);
        sendResponse({
            success: false
        });
        return;
    }

    arguments["affiliate_id"] = request.affiliateId;
    arguments["zone_id"] = request.zoneId;
    if(request.params && request.params.httpSeeds) {
        arguments["http_seeds"] = request.params.httpSeeds;
    }

    var requestData = {
        method: method,
        arguments: arguments
    };
    GM_log("getContentIdFromServer");
    GM_xmlhttpRequest({
        method: "POST",
        url: "http://api.torrentstream.net/upload/json",
        data: JSON.stringify(requestData),
        timeout: 30000,
        headers: [
            "Content-Type: application/json"
        ],
        onload: function(response) {
            var data;
            
            if(DEBUG) {
                GM_log("getContentIdFromServer:onload: status=" + response.status);
            }

            if(response.status == 200) {
                try {
                    data = JSON.parse(response.responseText);
                }
                catch(e) {
                    data = null;
                }

                if(data !== null && typeof data === "object" && data.success) {
                    sendResponse({
                        success: true,
                        contentId: data.id
                    });
                }
                else {
                    sendResponse({
                        success: false
                    });
                }
            }
            else {
                sendResponse({
                    success: false
                });
            }
        },
        onerror: function(response) {
            GM_log("getContentIdFromServer:onerror: response", response);
            sendResponse({
                success: false
            });
        }
    });
}

TorrentStream.Utils.showPopupPlayer = function(conf) {
    
    var availablePlugin = TorrentStream.Utils.detectPluginExt();
    if(availablePlugin.type == 0 || !availablePlugin.enabled) {
        TorrentStream.Utils.log("showPopupPlayer: plugin not installed");
        magicplayer.openInDefaultPlayer(conf);
        return;
    }
    
    if(typeof conf !== 'object') {
        conf = {};
    }
    
    if(typeof conf.data !== 'string') {
        throw "showPopupPlayer: bad data: " + conf.data;
    }
    
    if(typeof conf.dataType !== 'string') {
        throw "showPopupPlayer: bad data type: " + conf.datadataType;
    }
    
    TorrentStream.Utils.log("showPopupPlayer: type=" + conf.dataType + " data=" + conf.data);
    
    var defaultConf = {
        useTsButton: false,
        downloadTorrent: false,
        debug: false,
        headers: {},
    };
    conf = TorrentStream.Utils.extend(defaultConf, conf);
    
    if(conf.cookies) {
        var _cookie_parts = [];
        for(var _cookie_name in conf.cookies) {
            _cookie_parts.push(_cookie_name + "=" + conf.cookies[_cookie_name]);
        }
        conf.headers['Cookie'] = _cookie_parts.join(";");
        GM_log("set cookie: " + conf.headers['Cookie']);
    }
    
    if(conf.useTsButton) {
        TorrentStream.Button.init();
    }
    
    function _showPlayer(picturesSettings, type, data) {
        
        TorrentStream.Utils.log("_showPlayer: picturesSettings=" + picturesSettings + " type=" + type);
        window.TorrentStream_popupPlayer = new TorrentStream.MagicPlayerWindow({
                picturesSettings: picturesSettings,
                debug: conf.debug
        });
        
        window.TorrentStream_popupPlayer.showPlayer(function() {
                var controls = this;
                try {
                    var player = new TorrentStream.Player(this.getPluginContainer(), {
                            useInternalControls: true,
                            debug: conf.debug,
                            bgColor: "#2b2b2b",
                            onLoad: function() {
                                this.registerEventHandler(controls);
                                controls.attachPlayer(this);
                                
                                var mediaConf = {
                                    autoplay: true,
                                    affiliateId: AFFILIATE_ID,
                                    zoneId: ZONE_ID
                                };
                                
                                if(type == 'torrentUrl') {
                                    this.loadTorrent(data, mediaConf);
                                }
                                else if(type == 'torrentRaw') {
                                    this.loadRawTorrent(data, mediaConf);
                                }
                                else if(type == 'contentId') {
                                    this.loadPlayer(data, mediaConf);
                                }
                            }
                    });
                }
                catch(e) {
                    TorrentStream.Utils.log("_showPlayer:exception: " + e);
                    if(e == "plugin_not_installed") {
                        controls.missingEngine();
                    }
                    else if(e == "plugin_not_enabled") {
                        controls.pluginNotEnabled();
                    }
                }
        });
    };
    
    function checkPictures(type, data) {
        
        function _onRequestFinished(response) {
            var picturesSettings;

            TorrentStream.Utils.log("showPopupPlayer: check pictures response: success=" + response.success);
            hideSpinner(conf);

            if(response.success) {
                picturesSettings = response;
            }
            else {
                picturesSettings = {
                    showRight: true,
                    showBottom: true,
                    rightWidth: 240,
                    rightHeight: 400,
                    disableButton: null
                };
            }

            _showPlayer(picturesSettings, type, data);
        }
        
        showSpinner(conf);
        var key = "123";
        GM_xmlhttpRequest({
            method: "GET",
            url: "http://magicplayer-api.torrentstream.org/checkpictures?key=" + key + "&v=" + GM_info.script.version + "&r=" + Math.random(),
            timeout: 10000,
            onload: function(response) {
                if(response.status == 200) {
                    var data;

                    try {
                        data = JSON.parse(response.responseText);
                    }
                    catch(e) {
                        data = null;
                    }

                    if(data !== null && typeof data === "object") {
                        _onRequestFinished({
                            success: true,
                            showRight: data.show1,
                            showBottom: data.show2,
                            rightWidth: data.rwidth,
                            rightHeight: data.rheight,
                            disableUrl: data.disableUrl
                        });
                    }
                    else {
                        _onRequestFinished({
                            success: false
                        });
                    }
                }
                else {
                    _onRequestFinished({
                        success: false
                    });
                }
            },
            onerror: function(response) {
                _onRequestFinished({
                    success: false
                });
            }
        });
    };
    
    function getContentId(type, data, params) {
        showSpinner(conf);
        getContentIdFromServer({
                type: type,
                data: data,
                affiliateId: AFFILIATE_ID,
                zoneId: ZONE_ID,
                params: params
            },
            function(response) {
                TorrentStream.Utils.log("showPopupPlayer: getContentId response: success=" + response.success + " contentId=" + response.contentId);
                
                if(response.success) {
                    checkPictures('contentId', response.contentId);
                }
                else {
                    checkPictures(type, data);
                }
            });
    };
    
    if(conf.downloadTorrent) {
        
        if(conf.dataType !== 'torrentUrl') {
            throw "showPopupPlayer: cannot download this data type: " + conf.dataType;
        }
        
        TorrentStream.Utils.log("showPopupPlayer: download torrent: url=" + conf.data);
        
        function _onDownloadSuccess(data) {
            if(conf.getContentId) {
                getContentId('torrentRaw', TorrentStream.Utils.base64_encode(data), conf.params);
            }
            else {
                checkPictures('torrentRaw', TorrentStream.Utils.base64_encode(data));
            }
        };
        
        function _onDownloadFailed(errmsg) {
            hideSpinner(conf);
            if(errmsg) {
                alert(errmsg);
            }
        };
        
        showSpinner(conf);
        downloadTorrent({
            url: conf.data,
            method: conf.usePost ? "POST" : "GET",
            headers: conf.headers,
            onsuccess: _onDownloadSuccess,
            onerror: _onDownloadFailed
        });
    }
    else if(conf.getContentId) {
        getContentId(conf.dataType, conf.data, conf.params);
    }
    else {
        checkPictures(conf.dataType, conf.data);
    }
};

function getHandlers(url)
{
    var handlers = [];
    for(var i = 0; i < magicplayer.script_map.length; i++) {
        item = magicplayer.script_map[i];
        if(item.pattern && (new RegExp(item.pattern)).test(url)) {
            GM_log("getHandlers: got match: url=" + url + " handler=" + item.handler);
            if(item.handler) {
                handlers.push(item.handler);
            }
        }
    }
    return handlers;
};

// entry point
(function() {
        AWE_registerContextMenuCommand("Watch online", function(transportFileUrl) {
                magicplayer.loadPackage("ts-white-screen");
                magicplayer.openInDefaultPlayer({
                        dataType: 'torrentUrl',
                        data: transportFileUrl,
                        downloadTorrent: true
                });
        },
        "W",
        function(url, callback) {
            if(url && (new RegExp("^http(s)?://")).test(url)) {
                GM_log("contextmenu: send HEAD request: url=" + url + " referer=" + document.location.href);
                GM_xmlhttpRequest({
                        method: "HEAD",
                        url: url,
                        headers: {"Referer": document.location.href},
                        onload: function(response) {
                            if(response.status == 200) {
                                if(response.responseHeaders && (response.responseHeaders.indexOf("Content-Type: application/x-bittorrent") >= 0 || response.responseHeaders.indexOf("Content-Type: application/octet-stream") >= 0)) {
                                    callback(true, url);
                                }
                            }
                        }
                });
            }
            else {
                callback(false);
            }
        });
        
        var i,
            handlers = getHandlers(location.href),
            toRun = [];
        for(i=0; i < handlers.length; i++) {
            if(typeof magicplayer.handlers[handlers[i]] === 'function') {
                addEventListener("message", acestreamEventListener, false);
                toRun.push(handlers[i]);
            }
        }
        if(toRun.length) {
            AWE_engineStatus(function(engineStatus) {
                    GM_log("got engine status on start: status=" + JSON.stringify(engineStatus));
                    
                    // remember last engine version
                    magicplayer.engineVersion = engineStatus.version;
                    for(i=0; i < toRun.length; i++) {
                        GM_log("execute handler: " + toRun[i]);
                        var features = {};
                        if(engineStatus.version >= 3003200) {
                            features.externalPlayers = true;
                        }
                        magicplayer.handlers[toRun[i]].call(null, features);
                    }
            });
        }
})();

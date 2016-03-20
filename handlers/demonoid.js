magicplayer.addHandler("demonoid", function(features) {
    GM_log("start demonoid: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            var d = document;
			var b = $("#fslispc", d).find(".pad9px_left:first").find(".ctable_content_no_pad:first").find(".tone_3_bl:first").find("b:first");
			var c = $(b).html();
			if (c=="Music" || c=="Music Videos" || c=="TV" || c=="Movies" || c=="Japanese Anime" || c=="Audio Books") {
                return true;
            }
            return false;
        }
        
        if(canEmbed()) {
            var d = document;
			var port = "";
			$('a[href^="/files/download/"]', d).each(function(e) {
				var url = $(this).attr('href');
				$table = $('<table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td class="ctable_top_left" height="30" width="22"><img height="1" width="22" src="http://www.demonoid.me'+port+'/images/p.gif"></td><td class="ctable_header" width="100%">Play online this torrent</td><td class="ctable_top_right" height="30" width="10"><img height="1" width="10" src="http://www.demonoid.me'+port+'/images/p.gif"></td></tr></tbody></table><table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td class="ctable_content demonoid-me" width="100%"></td></tr></tbody></table><table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td class="ctable_bottom_left" height="11" width="22"><img height="1" width="22" src="http://www.demonoid.me'+port+'/images/p.gif"></td><td class="ctable_bottom" width="100%"><img height="10" width="1" src="http://www.demonoid.me'+port+'/images/p.gif"></td><td class="ctable_bottom_right" height="11" width="10"><img height="1" width="10" src="http://www.demonoid.me'+port+'/images/p.gif"></td></tr></tbody></table><img height="7" width="1" src="http://www.demonoid.me'+port+'/images/p.gif">', d);	
				$a1 = $('<br/><br/><a href="#" class="watch_demonoid text">You will play online the content of the torrent-file in original quality</a>', d).click(function(e) {
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://demonoid.me"+port+url
                    });
				});
				$a2 = $('<a href="#" class="watch_demonoid"><span class="img"></span>Click here to play the torrent online</a>', d).click(function(e) {
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://demonoid.me"+port+url
                    });
				});
				$('#fslispc td.ctable_header:contains("Download this torrent")', d).parent().parent().parent().before($table);
				$('.demonoid-me', d).append($a2).append($a1);
			});
        }
});


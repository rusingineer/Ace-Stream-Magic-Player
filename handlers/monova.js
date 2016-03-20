magicplayer.addHandler("monova", function(features) {
    GM_log("start monova: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			var cat = $("#main div.location", d).html();
			if(!/Movies|Music|Anime|TV|Audio/.test(cat)) {
				return true;
			}
			$('a[href^="http://www.monova.org/download/torrent/"]').each(function(){
				var url = $(this).attr("href");
				$div = $('<div class="monova"></div>', d)
				$h2 = $('<h2><a href="#" class="watch_moniva">P2P Online</a></h2>', d).click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: url,
                            useTsButton: true,
                            downloadTorrent: true,
                            crossDomainDownload: false
                    });
				});
				$text = $('<p>You will play online the content of the torrent-file in the original quality</p>', d);
				$button = $('<div id="torrentstream-button" class="button60"><div class="rotate"></div></div>', d).click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: url,
                            useTsButton: true,
                            downloadTorrent: true,
                            crossDomainDownload: false
                    });
				});
				$div.append($button).append($h2).append($text);
				$(this).parent().parent().after($div).after("<br/>");
			});	
        }
});
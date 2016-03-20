magicplayer.addHandler("take.fm", function(features) {
    GM_log("start take.fm: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="/movies/"]').each(function(){
				var url = $(this).attr("href");
				if($(this).children().hasClass('download_arrow')){
					$divUp = $('<div class="takeFM"></div>', d);
					$div = $('<div></div>', d)
					$a = $('<a href="#" class="watch_takeFM">P2P Online</a>', d).click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://take.fm"+url,
								downloadTorrent: true
						});
					});
					$text = $('<span class="small">You will play online the content of the torrent-file in the original quality</span>', d);
					$button = $('<div id="torrentstream-button" class="button60"><div class="rotate"></div></div>', d).click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://take.fm"+url,
								downloadTorrent: true,
								useTsButton: true
						});
					});
					$div.append($a);
					$divUp.append($button).append($div).append($text);
					$(this).parent().parent().append($divUp).append("<p></p>");
				}
			});	
        }
});

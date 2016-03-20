magicplayer.addHandler("coda", function(features) {
    GM_log("start coda: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a.link[href^="/albums/"]', d).each(function(e) {
				var url = $(this).attr('href');
				$div = $('<div class="coda box"><p class="small bottom">You will play online the content of the torrent-file in its original quality</p></div>', d);
				$h = $('<h3 class="bottom"></h3>', d);
				$button = $('<div id="torrentstream-button" class="button60"><div class="rotate"></div></div>', d);
				$a = $('<a href="#" class="watch_coda link"><u>P2P Online</u></a>', d).click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://coda.fm"+url,
							downloadTorrent: true,
                            useTsButton: true
                    });
				});
				$a.prepend($button);
				$h.append($a);
				$div.prepend($h);
				$(this).parent().parent().after($div);
			});
        }
});

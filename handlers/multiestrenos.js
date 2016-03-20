magicplayer.addHandler("multiestrenos", function(features) {
    GM_log("start multiestrenos: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="/uploads/torrents/"]', d).each(function(e) {
				var url = $(this).attr('href');
				$div = $('<div class="multiestrenos"></div>', d);
				$a = $('<a href="#" class="watch_multiestrenos"><div id="torrentstream-button" class="button45"><div class="rotate"></div></div></a>', d).click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://www.multiestrenos.com"+url,
							downloadTorrent: true,
                            useTsButton: true
                    });
				});
				$text = $('<span class="text">Jugar online</span>', d);
				$a.append($text);
				$div.append($a);
				$(this).parent().parent().prepend($div);
			});
        }
});

magicplayer.addHandler("bakabt", function(features) {
    GM_log("start bakabt: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			var d = document;
			var body = d.body;
			$('a[href^="download/"]:first', d).each(function(e) {
				if(/title="(Manga|Artbook)/.test($('#statistics', d).html())) {
					return true;
				}
				
				var url = $(this).attr('href');
				
				$div = $('<div class="bakabt download_link"></div>');
				var button = magicplayer.renderButton({
				        button: {
				            style: "big",
				            playPadding: 7,
                            caretPosition: "left",
                            caretPadding: 10,
				        },
				        dataType: 'torrentUrl',
						data: "http://bakabt.me/"+url,
						downloadTorrent: true
				});
				
				$a = $('<a href="#"><span class="text">P2P Online</span><br/><span class="infohash">Play online content of the torrent-file in its original quality</span></a>');
				
				$div.append(button).append($a);
				$(this).after($div);
			});
        }
});

magicplayer.addHandler("treckera-net", function(features) {
    GM_log("start treckera-net: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			var cat1 = $('.news_category').html();
			var cat2 = $('#dle-speedbar').html();
			if(!/(films_xvid|films_dvd|films_hdtv|anime_xvid|anime_dvd|anime_hdtv|music|videoclips)/.test(cat1 || cat2)) {
				return true;
			}
			
			$('a[href^="http://treckera.net/engine/download.php?id="]').each(function(e) {
				var url = $(this).attr('href');
				$div = $('<div class="scriptcode treckera-net"></div>');
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            //playPadding: 5,
                            //color: "blue",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "Воспроизвести онлайн в оригинальном качестве",
                            //title: "Воспроизвести онлайн"
				        },
				        dataType: 'torrentUrl',
						data: url,
						downloadTorrent: true
				});
				
				$div.append(button);
				$(this).parent().parent().after($div);
			});
        }
});
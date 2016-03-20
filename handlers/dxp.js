magicplayer.addHandler("dxp", function(features) {
    GM_log("start dxp: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="download.php?id="]', d).each(function(e) {
				var cat = $('div.triangle-border2', d).html();
				if(!/avi|mpeg4|mkv|flv|mp3|flac|dvd|hdtv|hd|rip|mp4|blue-ray|tv/i.test(cat)) {
					return true;
				}
				var url = $(this).attr('href');
				$div = $('<div class="dxp example-right"></div>', d);
				var button = magicplayer.renderButton({
				        button: {
				            style: "big",
				            playPadding: 10,
                            caretPosition: "left",
                            caretPadding: 10,
				        },
				        dataType: 'torrentUrl',
						data: "http://tracker.dxp.ru/"+url,
						downloadTorrent: true,
						useTsButton: true
				});
				$(button).addClass('fixed');
				
				$a = $('<a href="#" class="watch_dxp details-title"></a>');
				$text = $('<b>Воспроизвести онлайн содержимое torrent-файла в оригинальном качестве</b>', d);
				$a.append($text);
				$div.append(button).append($a);
				$(this).parent().parent().after($div);
			});
        }
});
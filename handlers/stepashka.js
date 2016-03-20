magicplayer.addHandler("stepashka", function(features) {
    GM_log("start stepashka: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            $('a[href^="/engine/download.php?id="]').each(function(e) {
				var url = $(this).attr('href');
				$div = $('<div class="stepashka torrent"></div>');
				$text = $('<div class="info_d1">Воспроизвести онлайн в оригинальном качестве</div>');
				$c = $('<div class="info_c"></div>');
				$down = $('<div class="download"></div>');
				$d = $('<div class="info_d"></div>');
				$a = $('<a href="#" class="watch_stepashka"></a>').click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
						dataType: 'torrentUrl',
						data: "http://torrents.stepashka.com"+url,
					});
				});
				$d.append($text);
				$a.append($c).append($down).append($d);
				$div.append($a);
				$(this).parent().parent().parent().before($div);
			});
        }
});

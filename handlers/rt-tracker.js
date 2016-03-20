magicplayer.addHandler("rt-tracker", function(features) {
    GM_log("start rt-tracker: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
        if(canEmbed()) {
			$('a[href^="http://rt-tracker.org/download/"]:first').each(function(e) {
				var url = $(this).attr('href');
				var cat = $('.ui-tabs-panel tr:contains("Категория торента:")').html();
				if(!/(1-Filmy|4-Muzyka|7-Multfilmy|5-Anime|9-Serialy|10-Sport-i-Zdorove)/.test(cat)) {
					return true;
				}
				
				$div = $('<div class="rt-tracker"></div>');
				$button = $('<div id="torrentstream-button" class="button45"><div class="rotate"></div></div>');
				$a = $('<a href="#">Воспроизвести торрент онлайн в оригинальном качестве</a>').click(function(e) {
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
						dataType: 'torrentUrl',
						data: url,
						useTsButton: true
					});
				});
				$a.prepend($button);
				$div.append($a);
				$(this).parent().after($div);
			});
        }
});
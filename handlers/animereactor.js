magicplayer.addHandler("animereactor", function(features) {
    GM_log("start animereactor: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
        if(canEmbed()) {
			$('a[href^="/freedl/"]').each(function(e) {
				var url = $(this).attr('href');
				if($(this).parent().is('td')) {					
					var cat = $(this).parent().parent().parent().parent().prev().html();
					if(/arru\/(4|7|6)/.test(cat)) {
						return true;
					}
					
					$a = $('<a href="#" alt="Воспроизвести онлайн" class="animereactor"></a>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: "http://free.animereactor.ru" + url
						});
					});
					$(this).before($a);
				}
				else if($(this).parent().is('h2') && $(this).children().hasClass('ttr')) {
					var cat = $('#cont .r.arr').html();
					if(/arru\/(4|7|6)/.test(cat)) {
						return true;
					}
					
					$a = $('<a href="#" alt="Воспроизвести онлайн" class="animereactor"></a>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: "http://free.animereactor.ru" + url
						});
					});
					$(this).before($a);
				}
			});
        }
});

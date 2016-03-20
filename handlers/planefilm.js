magicplayer.addHandler("planefilm", function(features) {
    GM_log("start planefilm: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			/*var cat = $('.details .torrent_detailed').html();
			if(!/torrents\/type:(movies|music)/.test(cat)) {
				return true;
			}*/
			
			$('a[href^="http://planefilm.ru/_ld"]').each(function(e) {
				var url = $(this).attr('href');
				$td = $('<td class="planefilm"></td>');
				$a = $('<a href="#"><span class="img"></span></a>').click(function(e) {
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: url,
							downloadTorrent: true
					});
				});
				$td.append($a);
				$(this).parent().after($td);
				
				$(this).parent().parent().parent().find('td:contains("Скачать")').after('<td class="planefilm"><span>P2P Online</span></td>');
				$(this).parent().parent().parent().find('td').css({'width':'12.5%'});
			});
        }
});

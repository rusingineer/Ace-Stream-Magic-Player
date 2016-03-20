magicplayer.addHandler("maxnet", function(features) {
    GM_log("start maxnet: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
		
        if(canEmbed()) {
			$('a[href^="download.php?id="]').each(function(e){
				var url = $(this).attr('href');
				if($(this).children().is('img')) {
					var cat = $(this).parent().parent().html();
					if(/(Фильмы XviD \/ DivX|Фильмы HDTV, Blu-Ray|Фильмы DVD5 \/ DVD9|Трейлеры|Сериалы|ТВ-Шоу \/ Телепрограммы|Аниме|Мультфильмы|Музыка|Спорт)/.test(cat)) {
						$a = $('<td><a href="#" class="maxnet"><span class="img small"></span></a></td>').click(function(e) {
							e.preventDefault();
							TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://tracker.maxnet.ua/" + url,
								downloadTorrent: true
							});
						});
						$(this).parent().after($a);
					}
					else {
						$td = $('<td></td>');
						$(this).parent().after($td);
					}
				}
				else {
					var cat = $('.outer table td.heading:contains("Тип")').parent().html();
					if(!/(Фильмы XviD \/ DivX|Фильмы HDTV, Blu-Ray|Фильмы DVD5 \/ DVD9|Трейлеры|Сериалы|ТВ-Шоу \/ Телепрограммы|Аниме|Мультфильмы|Музыка|Спорт)/.test(cat)) {
						return false;
					}
					$tr = $('<tr><td class="heading" width="10%" valign="middle" align="right">P2P Online</td></tr>');
					$a = $('<td><a href="#" class="maxnet"><span class="img"></span>Воспроизвести онлайн в оригинальном качестве</a></td>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: "http://tracker.maxnet.ua/" + url,
							downloadTorrent: true
						});
					});
					$tr.append($a);
					$(this).parent().parent().after($tr);
				}
            });
			
			$('table.embedded img[src="pic/files.gif"]').parent().parent().before('<td class="colhead" align="center"><font color="white">P2P</font></td>');
        }
});
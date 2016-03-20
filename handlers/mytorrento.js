magicplayer.addHandler("mytorrento", function(features) {
    GM_log("start mytorrento: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			var location = window.location;
			if(/browse/.test(location)) {
				alert('1');
				$('a[href^="download.php?id="]').each(function(e) {
					alert('1top');
					var cat = $(this).parent().parent().html();
					if(!/(музыка|фильмы|клипы|tv|аниме|ххх|сериалы|документалки)/.test(cat)) {
						return true;
					}
					
					var url = $(this).attr('href');
					
					$td = $('<td width="15%" align="center" class="mytorrento browse"></td>');
					$a = $('<a href="#" class="index"><span class="img"></span>P2P Online</a>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: "http://mytorrento.ru/" + url,
							downloadTorrent: true
						});
					});
					$td.append($a);
					$(this).parent().before($td);
				});
			}
			else {
				alert('mytor');
				$('a[href^="download.php?id="]:first').each(function(e) {
					alert('my');
					var cat = $(this).parent().parent().parent().find('td.heading:contains("Категория")').parent().html();
					if(!/(Фильмы \/ AVI|Аниме|Мультфильмы|DVD \/ Фильмы|XXX фильмы|Клипы \/ Ролики \/ Приколы|Музыка \/ Мультимедиа|TV \/ Документалки|Сериалы| Фильмы \/ HDTV \/ HD \/ Blu-Ray)/.test(cat)) {
						return true;
					}
					
					var url = $(this).attr('href');
					
					$tr = $('<tr class="mytorrento"><td class="heading" width="10%" align="right"><b>P2P Online</b></td></tr>');
					$td = $('<td></td>');
					var button = magicplayer.renderButton({
							button: {
								style: "small-16",
								playPadding: 5,
								//color: "blue",
								//caretPosition: "left",
								//caretPadding: 4,
								//text: "Смотреть онлайн",
								//title: "Воспроизвести онлайн"
							},
							dataType: 'torrentUrl',
							data: "http://www.fasttorrent.ru"+url,
							downloadTorrent: true
					});
					$a = $('<a href="#" class="index"><span class="img"></span>Воспроизвести онлайн в оригинальном качестве</a>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: "http://mytorrento.ru/" + url,
							downloadTorrent: true
						});
					});
					$td.append($a);
					$tr.append($td);
					//$(this).parent().parent().after($tr);
				});
			}
        }
});
magicplayer.addHandler("fat", function(features) {
    GM_log("start fat: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="download.php?id="]', d).each(function(e) {
				var url = $(this).attr("href");
				var link = $(this);
				if($(this).hasClass('index')) {
					var cat = $("tr td.heading:contains('Тип')").parent().find("td:last").html();
					cat = $.trim(cat);
					var pos = cat.indexOf("/");
					if(pos !== -1) {
						cat = cat.substring(0, pos);
					}
					var allowed = ['TB', 'Музыка', 'Аниме', 'Мультфильмы', 'Клипы', 'Фильмы', 'Старенькое добренькое', 'DVD'];
					if($.inArray(cat, allowed) == -1) {
						return true;
					}
					$tr = $('<tr class="fat"><td class="heading" width="10%" align="right">P2P Онлайн</td></tr>', d);
					$td = $('<td align="left"></td>', d);
					$text = $('<b>Воспроизвести онлайн содержимое torrent-файла в оригинальном качестве</b>', d);
					$a = $('<a href="#" title="Воспроизвести онлайн" class="watch_fat index"><span class="img"></span></a>', d).click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://fat.lv/"+url,
								downloadTorrent: true
						});
					});
					$a.append($text);
					$td.append($a);
					$tr.append($td);
					link.parent().parent().after($tr);
				} else {
					var cat = $(this).parent().parent().html();
					if(!/cat=(40|39|5|159|43|41|36|162|161|166|193|160|44|165|74|163|164|72|75|78|29|71|144|23|145|49|52|51|20|48|60|58|53|59|54|50|57|148|151|150|1|147|157|155|158|152|156|153|149|154|95|94|83|37|96|125|123|126|127|124|128|82|122|182|184|185|192|181|191|189|186|190|187|183|188|169|172|171|179|168|178|176|173|177|174|170|175)[^\d]+/.test(cat)) {
						return true;
					}
					$a = $('<a href="#" title="Воспроизвести онлайн" class="watch_fat fat"></a>', d).click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://fat.lv/"+url,
								downloadTorrent: true
						});
					});
					$(this).after($a);
				}
			});
        }
});

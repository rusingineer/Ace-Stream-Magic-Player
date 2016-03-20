magicplayer.addHandler("zamunda", function(features) {
    GM_log("start zamunda: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="download.php/"]', d).each(function(e) {
				var url = $(this).attr("href");
				if($(this).hasClass("index")) {
					var cat = $(this).parent().parent().parent().html();
					var reg = new RegExp("Blu-ray|XXX|Анимации|Видео|Музика|Клипове|Сериали|Спорт|Филми|Хентай|Animation|Video|Clips|Music|Serial|Sport|Movies|Hentai");
					if(!reg.test(cat)) {
						return true;
					}
					$tr = $('<tr class="zamunda"><td class="rowhead" width="1%">P2P Online</td></tr>', d);
					$td = $('<td width="99%" align="left"></td>', d);
					$text = $('<b>Play online in the original quality</b>', d);
					$a = $('<a href="#" class="watch_zamunda"><span class="img"></span></a>', d).click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://zamunda.net/"+url,
								downloadTorrent: true
						});
					});
					$a.append($text);
					$td.append($a);
					$tr.append($td);
					$(this).parent().parent().after($tr);
				} else {
					if(!/cat=(42|9|25|33|35|23|6|30|29|34|7|41|20|5|19|24|31|28|27)(\D|$)/.test($(this).parent().parent().html())) {
						return true;
					}
					$a = $('<a href="#" class="watch_zamunda zamunda"><span class="img"></span></a>', d).click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://zamunda.net/"+url,
								downloadTorrent: true
						});
					});
					$(this).after($a);
				}
			});
        }
});

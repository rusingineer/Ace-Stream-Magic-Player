magicplayer.addHandler("bitmanija", function(features) {
    GM_log("start bitmanija: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			var href = window.location.href;
			$('a[href^="download.php?id="]', d).each(function(e) {
				var url = $(this).attr('href');
				if(/torrents/.test(href)) {
					var cat = $(this).parent().parent().html();
					if(!/category=(11|2|14|23|31|24|16|27|26|15|5|28|29)(\D|$)/.test(cat)) {
						$(this).parent().after('<td></td>');
						return true;
					} else {
						$td = $('<td class="lista bitmanija" align="center"></td>', d);
						$a = $('<a href="#" class="watch_bitmanija"><span class="img"></span></a>', d).click(function(e) {
							e.preventDefault(); 
							TorrentStream.Utils.showPopupPlayer({
									dataType: 'torrentUrl',
									data: "http://bitmanija.net/"+url,
									downloadTorrent: true,
									useTsButton: true
							});
						});
						$td.append($a);
						$(this).parent().after($td);
					}
				} else if(/details/.test(href)) {
					var cat = $(this).parent().parent().parent().html();
					if(!/Filmai|DVD-R|Muzika|Sportas|Muzikos klipai|Anime|Serialai|Animacija|TVRip|Dokumentika/.test(cat)) {
						return true;
					}
					$tr = $('<tr><td class="header" align="right">P2P Online</td></tr>', d);
					$td = $('<td class="lista bitmanija" align="left"></td>', d);
					$text = $('<span>Zaisti internete, kaip ir pirminiame</span>', d);
					$a = $('<a href="#" class="watch_bitmanija"><span class="img"></span></a>', d).click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://bitmanija.net/"+url,
								downloadTorrent: true,
								useTsButton: true
						});
					});
					$a.append($text);
					$td.append($a);
					$tr.append($td);
					$(this).parent().parent().after($tr);
				}
			});
			
			if (/torrents/.test(href)){
				$('table.lista td.header:contains("Pa")', d).after('<td class="header" align="center">P2P</td>');
			}
        }
});

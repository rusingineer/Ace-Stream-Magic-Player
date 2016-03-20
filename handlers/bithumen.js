magicplayer.addHandler("bithumen", function(features) {
    GM_log("start bithumen: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="download.php/"]', d).each(function(e) {
				var url = $(this).attr('href');
				if ($(this).parent().prev().hasClass('cati')) {
					var cat = $(this).parent().parent().find("td:first a:first").attr("href").replace("?cat=", "");
					if (/4|31|21|22|32|1|36|28|29/.test(cat)) {
						return true;
					}
					$a = $('<a href="#" title="Play Online" class="watch_bithuman bithuman"></a>', d).click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://bithumen.be/"+url,
								downloadTorrent: true
						});
					});
					$(this).after($a);
				} else if ($(this).parent().prev().hasClass('heading')) {
					
					var cat = $('a[href^="browse.php?cat="]:first').attr("href").replace("browse.php?cat=", "");;
					if (/4|31|21|22|32|1|36|28|29/.test(cat))
						return true;
					
					$tr = $('<tr class="bithumen-td"><td class="heading" valign="top" align="right">P2P Online</td></tr>', d);
					$td = $('<td width="99%" align="left" colspan="2"></td>', d);
					$text = $('<span>Play Online</span>', d);
					$a = $('<a href="#" class="watch_bithuman"><span class="img"></span></a>', d).click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://bithumen.be/"+url,
								downloadTorrent: true
						});
					});
					$a.append($text);
					$td.append($a);
					$tr.append($td);
					$(this).parent().parent().after($tr);
				}
			});
        }
});

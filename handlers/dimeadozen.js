magicplayer.addHandler("dimeadozen", function(features) {
    GM_log("start dimeadozen: features=" + JSON.stringify(features));
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
				$tr = $('<tr class="dimeadozen"><td class="header" width="1%" valign="top" align="right">P2P Online</td></tr>', d);
				$td = $('<td class="text" width="99%" valign="top" align="left"></td>', d);
				$a = $('<a href="#" class="watch_dimeadozen sublink"><span class="img"></span></a>', d).click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://www.dimeadozen.org/"+url,
                            downloadTorrent: true,
                            useTsButton: true
                    });
				});
				$text = $('<span>Play online the content of the torrent-file in its original quality</span>', d);
				$a.append($text);
				$td.append($a);
				$tr.append($td);
				$(this).parent().parent().after($tr);
			});
        }
});

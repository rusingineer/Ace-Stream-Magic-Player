magicplayer.addHandler("bithq", function(features) {
    GM_log("start bithq: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="download.php/"]', d).each(function(e) {
				if(!/1001 MYMSBYD|DVD-R|CD-R|Adult|FIFA World Cup|High Quality|Low Quality/.test($(this).parent().parent().parent().html())) {
					return true;
				}
				var url = $(this).attr('href');
				$tr = $('<tr class="bithq"><td id="tortbldetl" width="1%" align="right">P2P Online:</td></tr>', d);
				$td = $('<td id="tortbldetr" width="99%" align="left"></td>', d);
				$text = $('<b>Play online the content of the torrent-file in its original quality</b>', d);
				$a = $('<a href="#" class="watch_bithq index"><span class="img"></span></a>', d).click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: "http://www.bithq.org/"+url,
							downloadTorrent: true
					});
				});
				$a.append($text);
				$td.append($a);
				$tr.append($td);
				$(this).parent().parent().after($tr).after('<tr><td height="2" colspan="2"></td></tr>');
			});
        }
});

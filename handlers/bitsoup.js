magicplayer.addHandler("bitsoup", function(features) {
    GM_log("start bitsoup: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
        if(canEmbed()) {
			$('a[href^="download.php/"]').each(function(e) {	
				var url = $(this).attr('href');
				if($(this).hasClass('index')) {
					var cat = $(this).parent().parent().parent().find('tr:contains("Type")').html();
					if(!/(Anime|Audiobooks|Movies\/DVD-R|Movies\/XviD|Music Videos|Music\/Albums|>x264)/.test(cat)) {
						return true;
					}
					$tr = $('<tr><td class="rowhead" width="1%">P2P Online</td></tr>');
					$td = $('<td width="99%" align="left"></td>');
					$a = $('<a href="#" class="index bitsoup"><span class="img"></span>Play online the torrent file in its original quality</a>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: "http://www.bitsoup.org/" + url,
							downloadTorrent: true
						});
					});
					$td.append($a);
					$tr.append($td);
					$(this).parent().parent().after($tr);
				}
				else {
					var cat = $(this).parent().parent().html();
					$td = $('<td align="center"></td>');
					$a = $('<a href="#" class="ts-bitsoup"></a>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: "http://www.bitsoup.org/" + url,
							downloadTorrent: true
						});
					});
					if(/cat=(23|5|20|19|29|6|41)/.test(cat)) {
						$td.append($a)
						$(this).parent().after($td);
					}
					else {
						$(this).parent().after($td);
					}
				}
			});
			
			if(/ts-bitsoup/.test($('body').html())) {
				$('.koptekst td.menubar:contains("DL")').after('<td class="menubar"><b>P2P</b></td>');
			}
        }
});
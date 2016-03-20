magicplayer.addHandler("torrentom", function(features) {
    GM_log("start torrentom: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
		
        if(canEmbed()) {
			$('a[href^="/download.php?id="]').each(function(e){
				var url = $(this).attr('href');
					$td = $('<td align="center"></td>');
					$a = $('<a href="#" class="torrentom"><span class="img"></span></a>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: "http://torrentom.com" + url,
							downloadTorrent: true
						});
					});
					$td.append($a);
					$(this).parent().after($td);
            });
			
			$('.colhead:contains("Скачать")').after('<td class="colhead" align="center" width="36">P2P Online</td>');
        }
});
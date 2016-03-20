magicplayer.addHandler("streamzone", function(features) {
    GM_log("start streamzone: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
        if(canEmbed()) {
			$('a[href^="http://streamzone.org/tracker"]').each(function(e) {
				var url = $(this).attr('href');
				if(/torrent/.test(url) && $(this).children().is('img')) {
					$tr = $('<tr valign="center"></tr>');
					$td = $('<td style="background-color: #DEE3E7;" colspan="2"></td>');
					$h2  = $('<h2 class="streamzone"></h2>');
					$button = $('<div id="torrentstream-button" class="button45"><div class="rotate"></div></div>');
					$a = $('<a href="#">Воспроизвести торрент онлайн в оригинальном качестве</a>').click(function(e) {
						e.preventDefault();
							TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: url,
								useTsButton: true
						});
					});
					$a.prepend($button);
					$h2.append($a);
					$td.append($h2);
					$tr.append($td);
					$(this).parent().parent().parent().after($tr);
				}
			});
        }
});
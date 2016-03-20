magicplayer.addHandler("undelete", function(features) {
    GM_log("start undelete: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			var cat = $('td.nav.w100').html();
			if(!/f=(373|11|128|18|12|362|101|137|35|140|16|56|76|58|60|119|126|120|211|447|228|229|230|51|499|130|666|674|142|287|686|291|689|693|694|295|149|515|45)[^\d]+/.test(cat)) {
				return true;
			}
			
			$('a[href^="http://undelete.tv/download.php?id="]:first').each(function(e) {
				var url = $(this).attr('href');
				$a = $('<a href="#" class="undelete" alt="Воспроизвести онлайн"></a>').click(function(e) {
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: url,
							downloadTorrent: true
					});
				});
				$(this).after($a);
			});
			
			$('a[href^="download.php?id="]:first').each(function(e) {
				var url = $(this).attr('href');
				$td = $('<td class="tCenter pad_6" width="15%" rowspan="4"></td>');
				$button = $('<div id="torrentstream-button" class="button60"><div class="rotate"></div></div>');
				$a = $('<a href="#" class="genmed">Воспроизвести онлайн</a>').click(function(e) {
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: "http://undelete.tv/" + url,
							downloadTorrent: true
					});
				});
				$a.prepend($button);
				$td.append($a);
				$(this).parent().after($td);
				
				$(this).parent().parent().parent().find('td[colspan="3"], th[colspan="3"]').each(function() {
					$(this).attr({colspan:'4'});
				});
			});
        }
});

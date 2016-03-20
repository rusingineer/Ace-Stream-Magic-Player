magicplayer.addHandler("publichd", function(features) {
    GM_log("start publichd: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
        if(canEmbed()) {
			$('a[href^="download.php?id="]').each(function(e) {	
				var url = $(this).attr('href');
				
				if($(this).children().is('img')) {
					var cat = $(this).parent().parent().html();
					
					$td = $('<td align="center" class="lista" width="20"></td>');
					$a = $('<a href="#" class="publichd"><span class="img"></span></a>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: "http://publichd.eu/" + url
						});
					});
					if($(this).parent().hasClass('lista')) {
						if(!/category=(25|26|27)/.test(cat)) {
							$td.append($a);
							$(this).parent().after($td);
						}
						else {
							$(this).parent().after($td);
						}
					}
					else {
						if(/category=(25|26|27)/.test(cat)) {
							return true;
						}
						
						$(this).after($a);
						$(this).parent().attr({width:"75"})
						$('.publichd .img').css({'margin':'0 2px 0px'});
					}
				}
				else {
					var cat = $(this).parent().parent().parent().parent().find('td.headercc:contains("Category")').parent().html();
					if(/Games/.test(cat)) {
						return true;
					}
					
					$tr = $('<tr><td class="headercc" align="right" valign="top"><b>P2P Online</b></td></tr>');
					$td = $('<td align="left" class="floock"></td>');
					$a = $('<a href="#" class="publichd"><span class="img"></span>Play online the torrent-file in its original quality</a>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: "http://publichd.eu/" + url
						});
					});
					$td.append($a);
					$tr.append($td);
					$(this).parent().parent().parent().after($tr);
				}
			});
        }
		
		if(/publichd/.test($('body').html())) {
			$('td.header:contains("Dl")').after('<td class="header" width="1%" align="center">P2P</td>');
		}
});
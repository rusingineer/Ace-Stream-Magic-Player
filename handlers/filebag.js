magicplayer.addHandler("filebag", function(features) {
    GM_log("start filebag: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			$('a[href^="download.php?id="]').each(function(e) {			
				if(!/Login/.test($('#register').html())) {
					if(/Type/.test($(this).parent().parent().parent().html())) {
						var cat = $(this).parent().parent().parent().find('td.rowhead:contains("Type")').parent().html();
					}
					else {
						var cat = $(this).parent().parent().parent().find('td.rowhead:contains("Tips")').parent().html();
					}
					
					if(!/(Anime|Movies\/HDTV|Music\/MP3|TV\/rips|Cartoons|Movies\/Lat|Movies\/Rus|Movies\/Documentary|Music\/Clips|Movies\/Eng|Music\/HQ|Sport)/.test(cat)) {
						return true;
					}
					
					var url = $(this).attr('href');
					$tr = $('<tr><td class="rowhead" width="1%" style="vertical-align: middle;"><span style="font-size: 110%;">P2P Online</span></td></tr>');
					$td = $('<td class="filebag" width="99%"></td>');
					var button = magicplayer.renderButton({
							button: {
								style: "text",
								//playPadding: 5,
								//color: "blue",
								caretPosition: "left",
								caretPadding: 10,
								text: "Play online in the original quality",
								//title: "Воспроизвести онлайн"
							},
							dataType: 'torrentUrl',
							data: "http://www.8club.org/" + url,
							downloadTorrent: true
					});
					$(button).addClass('fixed');
					
					$td.append(button);
					$tr.append($td);
					$(this).parent().parent().after($tr);
				}
			});
        }
});
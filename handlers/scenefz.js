magicplayer.addHandler("scenefz", function(features) {
    GM_log("start scenefz: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
        if(canEmbed()) {
			$('a[href^="download/"]').each(function(e) {
				var url = $(this).attr('href'); 
				
				if($(this).parent().hasClass('tableb') && $(this).children().is('img')) {
					//alert('1');
					var cat = $(this).parent().parent().html();
					if(/(games|soft|docs|mobile|xxx)/.test(cat)) {
						return true;
					}
					
					$td = $('<td class="tableb"></td>');
					var button = magicplayer.renderButton({
				        button: {
				            style: "small-16",
				            playPadding: 5,
                            title: "Play online torrent file in its original quality"
				        },
				        dataType: 'torrentUrl',
						downloadTorrent: true,
						data: "http://scenefz.net/" + url
					});
					$(button).addClass('fixed scenefz');
					
					$td.append(button);
					$(this).parent().after($td);
				}
				else if($(this).hasClass('index')) {
					var cat = $(this).parent().parent().parent().find('td.tableb:contains("Type")').next().html();
					if(/(games|soft|docs|mobile|xxx)/i.test(cat)) {
						return true;
					}
					
					$tr = $('<tr><td class="tableb" width="1%">P2P Online</td></tr>');
					$td = $('<td class="tableb" width="99%" align="left"></td>');
					var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "Play online torrent file in its original quality",
				        },
				        dataType: 'torrentUrl',
						downloadTorrent: true,
						data: "http://scenefz.net/" + url
					});
					$(button).addClass('fixed');
					
					$td.append(button);
					$tr.append($td);
					$(this).parent().parent().after($tr);
				}
			});
        }
});
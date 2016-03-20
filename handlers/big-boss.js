magicplayer.addHandler("big-boss", function(features) {
    GM_log("start big-boss: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
        if(canEmbed()) {
			$('a[href^="download.php?id="]').each(function(e) {
				var url = $(this).attr('href');
				
				if($(this).parent().is('td')) {
					var cat = $(this).parent().parent().html();
					$td = $('<td align="center" class="lista"></td>');
					var button = magicplayer.renderButton({
				        button: {
				            style: "small-16",
				            playPadding: 5,
                            title: "P2P Play Online"
				        },
				        dataType: 'torrentUrl',
						data: "http://big-boss-tracker.net/" + url
					});
					$(button).addClass('fixed big-boss');
					
					if(/category=(46|47|45|50|15|48|11|14|43|44|13|18|42|49|27|17|16)/.test(cat)) {
						$td.append(button);
						$(this).parent().after($td);
					}
					else {
						$(this).parent().after($td);
					}
				}
				else if($(this).parent().is('center')) {
					var cat = $(this).parent().parent().parent().parent().find('tr:contains("Category")').html();
					magicplayer.log(cat);
					if(!/Boxset|HDTV|Anime|Bluray \/ HD Movies|TV|3D Movies|DVD-R|Documentary|Cartoon|x264|XVID-DIVX|HD Lite|Music DVD-R|Music-Lossless|Discography|Video|mp3/.test(cat)) {
						return true;
					}
					
					$tr = $('<tr><td class="header" align="right">Play Online</td></tr>');
					$td = $('<td class="fuckit" valign="top" style="text-align:center;"></td>');
					
					var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "P2P Play Online",
				        },
				        dataType: 'torrentUrl',
						data: "http://big-boss-tracker.net/" + url
					});
					$(button).addClass('fixed');
					
					$td.append(button);
					$tr.append($td);
					$(this).parent().parent().parent().after($tr);
				}
			});
			
			if(/big-boss/.test($('body').html())) {
				$('table.lista td.header:contains("Dl")').after('<td class="header">P2P</td>');
			}
        }
});
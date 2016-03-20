magicplayer.addHandler("linkomanija", function(features) {
    GM_log("start linkomanija: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
		
        if(canEmbed()) {
            $('a[href^="download.php?id="]').each(function(e){
				var url = $(this).attr('href');
				var cat;
				if($(this).parent().is('span')) {
					cat = $(this).parent().parent().parent().parent().html();
					if(!/TV|Movies|DVD|HDTV|Music|Documentaries|Sports|Anime/.test(cat)) {
						return true;
					}
					$tr = $('<tr><td class="rowhead" style="width: 1%">P2P Online</tr>');
					$td = $('<td class="rowhead linkomanija" style="width:99%;"></td>');
					var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "Play online the torrent file in its original quality",
				        },
				        dataType: 'torrentUrl',
						data: "http://www.linkomanija.net/" + url,
						downloadTorrent: true
					});
					$(button).addClass('fixed');
					
					$td.append(button);
					$tr.append($td);
					$(this).parent().parent().parent().after($tr);
				}
				else {
					cat = $(this).parent().parent().html();
					if(!/TV|Movies|DVD|HDTV|Music|Documentaries|Sports|Anime/.test(cat)) {
						return true;
					}
					var button = magicplayer.renderButton({
				        button: {
				            style: "small-16",
				            playPadding: 5,
				        },
				        dataType: 'torrentUrl',
						data: "http://www.linkomanija.net/" + url,
						downloadTorrent: true
					});
					$(button).addClass('fixed linkomanija');
					
					$(this).before(button);
				}
            });
        }
});
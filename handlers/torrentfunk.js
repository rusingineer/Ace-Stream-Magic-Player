magicplayer.addHandler("torrentfunk", function(features) {
    GM_log("start torrentfunk: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
        if(canEmbed()) {
			$('a[href^="/tor/"]').each(function(e) {
				var url = $(this).attr('href');
				var cat = $('div.torname:contains("TORRENT SUMMARY")').next().next().html();
				if(!/(music|movies|television|anime|tv).html/.test(cat)) {
					return true;
				}
				$td = $('<td align="center" width="25%"></td>');
				
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            playPadding: 10,
                            //color: "blue",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "P2P Online",
                            //title: "Воспроизвести онлайн"
				        },
				        dataType: 'torrentUrl',
						data: "http://www.torrentfunk.com" + url
				});
				$(button).addClass('torrentfunk');
				
				$td.append(button);
				$(this).parent().after($td);
				
				$(this).parent().parent().find('td').attr({width:'25%'});
			});
        }
});
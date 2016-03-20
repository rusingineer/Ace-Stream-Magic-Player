magicplayer.addHandler("torrentbit", function(features) {
    GM_log("start torrentbit: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="/get/"]:first', d).each(function(e) {
				var url = $(this).attr('href');
				if($(this).parent().is("td")) {
					var cat = $(this).parent().parent().parent().html();
					if(!/cat\/(Movies|Anime|Music|Series)/.test(cat)) {
						return true;
					}
					$tr = $('<tr class="torrentbitNet"><th>P2P Online:</th></tr>', d);
					$td = $('<td colspan="2"></td>', d);
					var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "You will play online the content of the torrent-file in the original quality",
				        },
				        dataType: 'torrentUrl',
						data: "http://www.torrentbit.net"+url
					});
					$(button).addClass('fixed');
					
					$td.append(button);
					$tr.append($td);
					$(this).parent().parent().after($tr);
				}
			});
        }
});

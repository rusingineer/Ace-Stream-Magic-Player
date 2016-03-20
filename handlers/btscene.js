magicplayer.addHandler("btscene", function(features) {
    GM_log("start btscene: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
           $('a[href^="/torrentdownload.php?id="]:first').each(function(e) {
				var url = $(this).attr('href');
				var cat = $('.analytics_container .container_left p:first').html();
				if(!/href="\/cat\/id\/(3|6|1|2)\//.test(cat)) {
					if(!/href="\/subcat\/id\/(22)\//.test(cat)) {
						return true;
					}
				}
				$div = $('<div class="btscene"></div>');
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
							playPadding: 30,
                            caretPadding: 20,
                            text: "Play Online in the original quality",
				        },
				        dataType: 'torrentUrl',
						data: "http://www.btstor.cc"+url,
						downloadTorrent: true,
						useTsButton: true
				});
				$div.append(button);
				
				$(button).addClass('fixed');
				$(this).parent().before($div);
			});
        }
});
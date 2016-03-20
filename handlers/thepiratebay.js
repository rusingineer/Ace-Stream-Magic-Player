magicplayer.addHandler("thepiratebay", function(features) {
    GM_log("start thepiratebay: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
	//alert('start');
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
        if(canEmbed()) {
            $('a[href^="//piratebaytorrents.info/"]').each(function(e) {
				
				var found = false;
				$(this).parent().parent().find("td:first").each(function() {
					if ($(this).hasClass("vertTh")) {
						if (/\/browse\/(101|102|103|104|199|201|202|203|204|205|206|207|208|299|501|502|503|504|505|506|599)/.test($(this).html())) {
							found = true;
						}
					}
				});
				if (!found) return true;
				
				var url = $(this).attr('href');
				if ($(this).prev().hasClass('detName') || /magnet/.test($(this).prev().attr("href")))  {
					$a = $('<a href="#" title="P2P online" class="watch_piratbay piratbay"><span></span></a>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http:" + url
						});
					});
					$(this).after($a);
				} 
			});
			
			$('a[href^="//piratebaytorrents.info/"]:first').each(function(e) {
				var url = $(this).attr('href');
				var cat = $('a[href^="/browse/"]:first').attr("href");
				if (!/\/browse\/(101|102|103|104|199|201|202|203|204|205|206|207|208|299|501|502|503|504|505|506|599)/.test(cat)) {
					return true;
				}
				if ($(this).parent().hasClass('download')) {
					$div = $('<div class="piratbay"></div>');
					$button = $('<a href="#" title="P2P Online" class="watch_piratbay"><div id="torrentstream-button" class="button60"><div class="rotate"></div></div></a>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http:" + url,
								useTsButton: true
						});
					});
					$text = $('<p>Play online the content of the torrent-file in its original quality</p>');
					$div.append($button).append($text);
					$(this).parent().before($div);
				} 
			});
        }
});

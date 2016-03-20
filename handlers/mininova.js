magicplayer.addHandler("mininova", function(features) {
    GM_log("start mininova: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			if(!/cat\/(5|4|8)|sub\/(99|51|85|413|629)(\D|$)/.test($("#location", d).html())) {
				return true;
			}
			$('a[href^="/get/"]', d).each(function(e) {
				if($(this).parent().is('h2')) {
					var url = $(this).attr('href');
					$div = $('<div id="mininova"></div>', d);
					var button = magicplayer.renderButton({
				        button: {
				            style: "big",
				            playPadding: 10,
                            //color: "blue",
                            caretPosition: "left",
                            caretPadding: 10,
                            //text: "Смотреть онлайн",
                            title: "Play online"
				        },
				        dataType: 'torrentUrl',
						data: "http://www.mininova.org"+url,
						useTsButton: true
					});
					$(button).addClass('fixed');
					
					$h2 = $('<h2></h2>', d);
					$a = $('<span>P2P Online</span>');
					$p = $('<p class="text">Play online the content of the torrent-file in its original quality</p>', d);
					$h2.append($a);
					$div.append(button).append($h2).append($p);
					
					var parent = $(this).parent().parent().parent().attr('id');
					if(/usageopts/.test(parent)) {
						$("div#usageopts", d).append($div);
					} else if(/content/.test(parent)){
						$(this).parent().parent().after($div);
					}
				}
			});
        }
});

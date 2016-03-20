magicplayer.addHandler("hdreactor", function(features) {
    GM_log("start hdreactor: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            var body = document.body;
             if(!/>Developer</.test(body.innerHTML)) {
                return true;
            }
            return false;
        }
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="/engine/download.php?id="]', d).each(function(e) {
				var url = $(this).attr('href');
				$container = $("<div class='title hdreactor'></div>");
				$a = $('<a href="#" class="watch_hdreactor"><div class="info_c"></div></a>', d).click(function(e) {
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://hdreactor.org" + url,
							useTsButton: true
                    });
				});
				$button = $('<div class="ts_box"></div>', d);
				$text = $("<div class='info_d'><div class='info_d1'>Воспроизвести онлайн в оригинальном качества</div></div>", d);
				
				$a.append($button).append($text);
				$container.append($a);
				$(this).parent().before($container);
			});
        }
});

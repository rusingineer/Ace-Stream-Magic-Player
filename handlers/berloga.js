magicplayer.addHandler("berloga", function(features) {
    GM_log("start berloga: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
        if(canEmbed()) {
           var d = document;
			$('.file a', d).each(function(e) {
				var url = $(this).attr('href');
				if(/dn1.berloga.net|dn0.berloga.net/.test(url) && !/rar|zip|iso/.test(url)) {
					var cat = $('.news_top').html();
					if(!/category=(1|2|7)/.test(cat)) {
						return true;
					}
					$div = $('<div class="file berloga"></div>');
					$button = $('<a href="#" title="Воспроизвести онлайн" class="watch_berloga"><div class="torrentstream-button"> </div></a>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: url,
								downloadTorrent: true,
								useTsButton: true
						});
					});
					$text = $('<p>P2P Онлайн воспроизведение в оригинальном качестве</p>');
					$button.append($text);
					$div.append($button);
					$(this).parent().after($div);
					$("div.news div.file").css({'padding':'1px'});
				}
			});
        }
});

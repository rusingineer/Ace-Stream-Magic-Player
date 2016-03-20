magicplayer.addHandler("movietorrents", function(features) {
    GM_log("start movietorrents: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="/download/"]', d).each(function(e) {
				var url = $(this).attr('href');
				$button = $('<div class="img"></div>', d);
				$a = $('<a href="#" class="movietor watch_movietorrents"><span>Play online</span></a>', d).click(function(e) {
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://www.movietorrents.me"+url
                    });
				});
				$a.prepend($button);
				$(this).after($a);
			});
        }
});

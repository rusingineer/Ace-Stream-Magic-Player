magicplayer.addHandler("picktorrent", function(features) {
    GM_log("start picktorrent: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
		function hideMP() {
			if($('#torrentstream-button').size()) {
				$('#torrentstream-button').each(function() {
					$(this).parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			var cat = $('#a-download tr:contains("Category:") td', d).html();
			if(!/TV Shows|Movies|Video|Music|Adult|Anime|ru/i.test(cat)) {
				return true;
			}
			$('a[href^="/torrent/"]', d).each(function(e) {
				var url = $(this).attr('href');
				$h1 = $('<h1 class="picktorrent download-head"><span class="head_desc">P2P Online</span><br/></h1>', d);
				$text = $('<a href="#">You will play online the content of the torrent-file in the original quality</a>', d).click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://www.picktorrent.com"+url
                    });
					magicplayer.log("http://www.picktorrent.com"+url);
				});
				$button = magicplayer.renderButton({
				        button: {
				            style: "big",
				            playPadding: 10,
				        },
				        dataType: 'torrentUrl',
						data: "http://www.picktorrent.com"+url,
						useTsButton: true
				});
				$h1.append($text).prepend($button);
				$(this).parent().before($h1);
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});
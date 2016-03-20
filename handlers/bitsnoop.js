magicplayer.addHandler("bitsnoop", function(features) {
    GM_log("start bitsnoop: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="http://torrage.com/torrent/"]', d).each(function(e) {
				alert('1');
				if(!/Video|Audio/i.test($('#torrentHeader div:first a', d).html())) {
					return true;
				}
				var url = $(this).attr('href');
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            playPadding: 10,
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "Play online",
				        },
				        dataType: 'torrentUrl',
                        data: url
				});
				$add = $('<br/> <span class="bitsnoop-info">You will play online the content of the torrent-file in original quality</span><br/><br/>', d);
				
				$(this).before(button).before($add);
			});
			
			$('a[href^="http://torcache.net/torrent/"]').each(function(e) {
				if(!/Video|Audio/i.test($('#torrentHeader div:first a', d).html())) {
					return true;
				}
				var url = $(this).attr('href');
				
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            playPadding: 10,
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "Play online",
				        },
				        dataType: 'torrentUrl',
                        data: url
				});
				$add = $('<br/> <span class="bitsnoop-info">You will play online the content of the torrent-file in original quality</span><br/><br/>', d);
				
				$(this).before(button).before($add);
			});
        }
});

magicplayer.addHandler("1337x", function(features) {
    GM_log("start 1337x: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
    
    function canEmbed() {
        return true;
    }
        
	function hideMP() {
		if($('.watch_torrentsmd').size()) {
			$('.watch_torrentsmd').each(function() {
				$(this).parent().parent().remove();
			});
		}
	}
    
    if(canEmbed()) {
        var d = document;
        var body = d.body;
        
		if (!/(Movies|Anime|Music|TV|XXX)/.test($('.category-detail', d).html())) {
            return true;
        }
        
		$('a[href^="http://torcache.net/torrent/"]:first', d).each(function(e) {
				var url = $(this).attr('href');
				$li = $('<li class="awe-1337x"></li>');
				
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            playPadding: 30,
                            caretPosition: "left",
                            caretPadding: 18,
                            text: "P2P Play Online",
                            title: "Play online in original quality"
				        },
				        dataType: 'torrentUrl',
						data: url
				});
				
				$li.append(button);
				$(this).parent().parent().append($li);
		});
			
		setTimeout(hideMP, 0);
		setTimeout(hideMP, 500);
		setTimeout(hideMP, 1000);
		setTimeout(hideMP, 5000);
	}
});
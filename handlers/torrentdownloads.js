magicplayer.addHandler("torrentdownloads", function(features) {
    GM_log("start torrentdownloads: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            var body = document.body;
            return true;
        }
        
        if(canEmbed()) {
			$('a[href^="http://itorrents.org/torrent/"]').each(function(e) {
				if(!/(Audio|TV Shows|Movies|Music|Anime)/i.test($(".inner_container").html())) {
					return true;
				}
				var url = $(this).attr('href');
				$li = $('<li class="torrentdownloads"></li>');
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            caretPadding: 10,
				            caretPosition: 'left',
							text: "Play online",
				        },
				        dataType: 'torrentUrl',
						data: url
				});
				$(button).addClass('fixed');
				$li.append(button);
				
				$(this).parent().parent().prepend($li);
			});
        }
});


magicplayer.addHandler("limetorrents", function(features) {
    GM_log("start limetorrents: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        function canEmbed() {
            var body = document.body;
            if (/<a href="\/browse-torrents\/(Movies|TV-shows|Music|Anime)">/.test($(".torrentinfo", document).html())) {
                return true;
            }
            return false;
        }
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="http://itorrents.org/torrent/"]:first', d).each(function(e) {
				var url = $(this).attr('href');
				$divMain = $('<div class="limetor"></div>', d);
				$div = $('<div class="dltorrent"></div>', d);
				var button = magicplayer.renderButton({
					button: {
						style: "text",
						caretPosition: "left",
						caretPadding: 15,
						text: "Play online in the original quality",
					},
					dataType: 'torrentUrl',
                    data: url
				});
				$(button).addClass('fixed');
				
				$div.prepend(button);
				$divMain.append($div);
				$(this).parent().parent().before($divMain);
			});
        }
});

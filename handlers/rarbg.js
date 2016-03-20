magicplayer.addHandler("rarbg", function(features) {
    GM_log("start rarbg: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        function canEmbed() {
			if (/href="\/torrents\?category=(4|23|24|25|26|14|15|16|17|18|19|20|21|22|11|44)[^\d]+/.test(document.body.innerHTML)) {
				return true;
			}
            return false;
        }
        
        if(canEmbed()) {
			var d = document;
			var body = d.body;
			$('a[href^="/download.php?id="]', d).each(function(e) {
				var url = $(this).attr('href');
				$tr = $('<tr class="rarbg"><td class="header2" align="right">P2P Online:</td></tr>', d)
				$td = $('<td class="lista" valign="middle"></td>', d);
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            caretPosition: "left",
                            caretPadding: 10,
                            text: "You will play online the content of the torrent-file in the original quality",
				        },
				        dataType: 'torrentUrl',
						data: "http://rarbg.com"+url,
						downloadTorrent: true
				});
				$(button).addClass('fixed');
				$td.append(button);
				$tr.append($td);
				$(this).parent().parent().after($tr);
			});
        }
});

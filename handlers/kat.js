magicplayer.addHandler("kat", function(features) {
    GM_log("start kat: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
 
	var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
		if(canEmbed()) {
			$('.downloadButtonGroup a[href^="//torcache.net/torrent/"]:first').each(function(e) {
				if(!/href="\/(movies|tv|anime|xxx|music)\/"/.test($('span[id^="cat_"]').html())) {
					return true;
				}
				
				var url = $(this).attr('href');
				var fixed_url = url.replace('.torrent?title=[','/%5B').replace(']','%5D')+'.torrent';
				$span = $('<span><em class="buttonPic"><span class="img"></span></em>Play online</span>')
				$button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            caretPosition: "left",
                            playPadding: 25,
                            caretPadding: 15,
                            text: "Play online",
				        },
						dataType: 'torrentUrl',
						downloadTorrent: true,
						data: 'http:' + fixed_url
				});
				$(this).after($button).after('<br/><br/>');
			});
        }
});
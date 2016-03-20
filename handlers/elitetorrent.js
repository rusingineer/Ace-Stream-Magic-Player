magicplayer.addHandler("elitetorrent", function(features) {
    GM_log("start elitetorrent: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			if(!/Consolas|Juegos PC|Otros|Programas/.test($('.info-descarga').html())) {
				return true;
			}
			return false;
        }
		
        if(canEmbed()) {
            $('a[href^="/get-torrent/"]').each(function(e){
                var url = $(this).attr('href');
				magicplayer.log("URL >>> "+url);
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            //playPadding: 5,
                            //color: "blue",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "P2P Play Online",
                            //title: "Воспроизвести онлайн"
				        },
				        dataType: 'torrentUrl',
                        data: "http://www.elitetorrent.net" + url,
						useTsButton: true
				});
				$(button).addClass('fixed elitetorrent');
				
				$(this).after(button);
            });
        }
});
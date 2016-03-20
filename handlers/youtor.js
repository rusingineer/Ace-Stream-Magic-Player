magicplayer.addHandler("youtor", function(features) {
    GM_log("start youtor: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
		
        if(canEmbed()) {
			$('a[href^="/engine/download.php?id="]').each(function(e){
				var url = $(this).attr('href');
					$div = $('<div class="title youtor"></div>');
			
					var button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            //playPadding: 5,
                            //color: "blue",
                            //caretPosition: "left",
                            caretPadding: 20,
                            text: "Воспроизвести торрент онлайн в оригинальном качестве",
                            title: "Воспроизвести онлайн"
				        },
				        dataType: 'torrentUrl',
						data: "http://youtor.org/" + url,
						downloadTorrent: true
					});
					
					$div.append(button);
					
					$(this).parent().before($div);
            });
        }
});
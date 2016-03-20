magicplayer.addHandler("hqclub", function(features) {
    GM_log("start hqclub: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			//alert('a');
            var d = document;
			var body = d.body;
			$('a[href^="http://bt.hqclub.net/torrents/"]', d).each(function(e) {
				var url = $(this).attr('href');
				$div = $('<div class="hqclub"></div>', d);
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            caretPadding: 15,
                            text: "Воспроизвести онлайн содержимое torrent-файла в оригинальном качестве",
				        },
				        dataType: 'torrentUrl',
						data: url,
						useTsButton: true
				});
				
				$div.append(button);
				$(this).after($div).after('<br/><br/>');
			});
        }
});

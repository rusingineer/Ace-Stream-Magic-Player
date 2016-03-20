magicplayer.addHandler("nigma", function(features) {
    GM_log("start nigma: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			
            var d = document;
			var body = d.body;
			$('a[href^="link.php?url=http://"]', d).each(function(e) {
				var url = $(this).attr('href');
				if($(this).children().is('b')) {
					$div = $('<div class="nigma"></div>');
					var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "Воспроизвести онлайн в оригинальном качестве",
				        },
				        dataType: 'torrentUrl',
						//downloadTorrent: true,
						data: url.replace('link.php?url=','')
					});
					$(button).addClass('fixed');
					
					$div.append(button);
					$(this).parent().after($div);
				}
			});
        }
});

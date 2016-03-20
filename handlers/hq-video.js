magicplayer.addHandler("hq-video", function(features) {
    GM_log("start hq-video: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            var body = document.body;
            return true;
        }
        
        if(canEmbed()) {
			var d = document;
			$('a[href^="http://forum.hq-video.org/attachment.php?attachmentid="]').each(function(e) {
				var url = $(this).attr('href');
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            //playPadding: 5,
                            //color: "blue",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "Play Online",
                            //title: "Воспроизвести онлайн"
				        },
				        dataType: 'torrentUrl',
                        data: url,
						downloadTorrent: true
				});
				$(button).addClass('fixed');
				$div = $('<div class="forum-hq-video"></div>');
				$a = $('<a href="#" class="">Воспроизвести онлайн в оригинальном качестве</a>');
				
				$div.append(button).append($a);
				$(this).after($div);
				
				$(this).parent().css({'height':'150px'});
			});
        }
});

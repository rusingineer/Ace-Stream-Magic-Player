magicplayer.addHandler("filebase", function(features) {
    GM_log("start filebase: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
		function hideMP() {
			if($('.filebase').size()) {
				$('.filebase').each(function() {
					$(this).remove();
				});
			}
		}
        
        if(canEmbed()) {
            $('a[href^="http://www.filebase.ws/download.php?id="]').each(function(e) {
				var cat = $('#torrent_info .info:last').html();
				
				if(/Системные требования|Инструкция к установке|Установка|Язык интерфейса|Версия|Формат:<\/b> (JPG|PDF|DJVU|PNG|GIF)|DJVU/i.test(cat)) {
					return true;
				}
				
				var url = $(this).attr('href');
				$div = $('<div class="title"></div>');
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPadding: 10,
                            text: "Воспроизвести онлайн в оригинальном качестве",
				        },
				        dataType: 'torrentUrl',
						data: url,
						downloadTorrent: true
				});
				$(button).addClass('fixed');
				$div.append(button);
				$(this).parent().after($div);
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

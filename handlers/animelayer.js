magicplayer.addHandler("animelayer", function(features) {
    GM_log("start animelayer: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
		function hideMP() {
			if($('.watch_animelayer').size()) {
				$('.watch_animelayer').each(function() {
					if($(this).hasClass('animelayer')) {
						$(this).remove();
					}
					else {
						$(this).parent().parent().remove();
					}
				});
			}
		}
        
        if(canEmbed()) {
			var d = document;
			var body = d.body;
			$('a[href^="/download.php?id="]:first', d).each(function(e) {
				if(/Manga/.test($(this).parent().parent().parent().html()))
					return true;
				var url = $(this).attr('href');
				
				$tr = $('<tr class="animelayer"><td class="heading" width="10%" valign="top" align="right">P2P Онлайн</td></tr>', d);
				$td = $('<td valign="top" align="left"></td>', d);
				
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "Воспроизвести онлайн в оригинальном качестве",
				        },
				        dataType: 'torrentUrl',
						data: "http://animelayer.ru"+url,
						downloadTorrent: true
				});
				$(button).addClass('fixed');
				
				$td.append(button);
				$tr.append($td);
				$(this).parent().parent().after($tr);
			});
			
			$('a[href^="/download.php?id="]', d).each(function(e) {
				if(/cat=9/.test($(this).parent().parent().html())) {
					return true;
				}
				var url = $(this).attr('href');
				if($(this).children().is("img")) {	
					var button = magicplayer.renderButton({
				        button: {
				            style: "small-16",
				            playPadding: 5,
                            caretPadding: 5,
				        },
				        dataType: 'torrentUrl',
						data: "http://animelayer.ru"+url,
						downloadTorrent: true
					});
					$(button).addClass('fixed');
					
					$(this).after(button);
				}
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

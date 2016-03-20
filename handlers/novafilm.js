magicplayer.addHandler("novafilm", function(features) {
    GM_log("start novafilm: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
		function hideMP() {
			if($('.watch_novafilm').size()) {
				$('.watch_novafilm').each(function() {
					$(this).parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="/download/"]', d).each(function(e) {
				var url = $(this).attr('href');
				if($(this).parent().hasClass("container-dwnload")) {
					$div = $('<div class="container-P2Pplay"></div>', d);
					var button = magicplayer.renderButton({
				        button: {
				            style: "big",
				            playPadding: 5,
				        },
				        dataType: 'torrentUrl',
						data: "http://novafilm.tv"+url,
						downloadTorrent: true
					});
					$(button).addClass('novafilm');
					$div.append(button);
					$(this).parent().after($div);
				} else if($(this).parent().hasClass("w30 vamiddle")){
					
					$td = $('<td class="w30 vamiddle"></td>', d);
					var button = magicplayer.renderButton({
				        button: {
				            style: "big",
				            playPadding: 5,
				        },
				        dataType: 'torrentUrl',
						data: "http://novafilm.tv"+url,
						downloadTorrent: true
					});
					$td.append(button);
					$(this).parent().after($td);
				} else if($(this).hasClass("orange")) {
					$p = $("<p></p>", d);
					$big = $("<big class='nova'></big>", d);
					$b = $("<strong>Смотреть онлайн</strong>", d);
					var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            text: "Смотреть онлайн",
				        },
				        dataType: 'torrentUrl',
						data: "http://novafilm.tv"+url,
						downloadTorrent: true
					});
					$big.append(button);
					$p.append($big);
					$(this).parent().parent().after($p);
				}
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

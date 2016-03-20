magicplayer.addHandler("nice-media", function(features) {
    GM_log("start nice-media: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
        if(canEmbed()) {
			
			$('a[href^="/download.php?id="]').each(function(e) {
				var url = $(this).attr('href');
				var login = $('.navbar-inner .container ').html();
				
				if(/(Логин|Пароль)/.test(login)) {
					$a = $('<a href="#" class="nice-media">[<span class="img"></span> Воспроизвести онлайн] </a>').click(function(e) {
						e.preventDefault();
						var height = $('body').height();
						$alert = $(
							'<div class="ts-overlay"></div>'+
							'<div class="ts-alert">'+
							'<a href="#" class="ts-close" onClick="window.location.reload()"></a>'+
							'<span class="red">Внимание!</span>'+
							'Чтобы запустить плеер, вам нужно войти в систему.'+
							'</div>'
						);
						$('body').prepend($alert);
						var left = ($('body').width() - $('.ts-alert').width())/2;
						var top = ($(window).height() - $('.ts-alert').height())/2;
						$('.ts-alert').css({'left':left,'top':top});
					});
					$(this).before($a);
				}
				else {
					var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            text: "Воспроизвести онлайн",
				        },
				        dataType: 'torrentUrl',
						data: "http://nice-media.ru" + url,
						downloadTorrent: true
					});
					$(button).addClass('nice-media');
					
					$(this).before(button);
				}
			});
			
			$('a[href^="download.php?id="]').each(function(e) {
				var url = $(this).attr('href');
				var button = magicplayer.renderButton({
					button: {
						style: "text",
						caretPosition: "left",
						caretPadding: 10,
						text: "Смотреть онлайн",
					},
					dataType: 'torrentUrl',
					data: "http://nice-media.ru/" + url,
					downloadTorrent: true
				});
				$(button).addClass('nice-media-btn');
				
				$(this).before(button);
			});
        }
});
magicplayer.addHandler("kinokopilka", function(features) {
    GM_log("start kinokopilka: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
		function hideMP() {
			if($('.kinokopilka').size()) {
				$('.kinokopilka').each(function() {
					$(this).remove();
				});
			}
		}
        
        if(canEmbed()) {
           $('a[href^="/x/"]').each(function(e) {
				if ($(this).hasClass("link")) {
					var url = $(this).attr('href');
					var login = $('#welcome').html();
				
					if(/\/login/.test(login) && !/logout/.test(login)) {
						var href = $('#welcome a[href="/login"]').attr('href');
						$a = $('<a href="#" class="awe-kinokopilka">Воспроизвести онлайн</a>').click(function(e) {
							e.preventDefault();
							var height = $('body').height();
							$alert = $(
								'<div class="ts-overlay"></div>'+
								'<div class="ts-alert">'+
								'<a href="' + href + '" class="ts-close"></a>'+
								'<span class="red">Внимание!</span>'+
								'Чтобы запустить плеер, вам нужно войти в систему.'+
								'</div>'
							);
							$('body').prepend($alert);
							var left = ($('body').width() - $('.ts-alert').width())/2;
							var top = ($(window).height() - $('.ts-alert').height())/2;
							$('.ts-alert').css({'left':left,'top':top});
						});
						$(this).after($a);
					}
					else {
						var button = magicplayer.renderButton({
							button: {
								style: "text",
								caretPosition: "left",
								text: "Воспроизвести онлайн",
							},
							dataType: 'torrentUrl',
							data: "http://www.kinokopilka.tv"+url,
							downloadTorrent: true
						});
						$(button).addClass('fixed');
						$(this).after(button);
					}
				}
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

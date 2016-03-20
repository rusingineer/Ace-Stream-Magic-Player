magicplayer.addHandler("uatracker", function(features) {
    GM_log("start uatracker: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
		
        if(canEmbed()) {
			var cat = $('table.status_panel td:contains("Раздел:")').html();
			if(!/Фильмы|Музыка|Сериалы/.test(cat)) {
				return true;
			}
			$('a[href^="download.php?id="]').each(function(e){
				var url = $(this).attr('href');
				var login = $('.field_bg').html();
				
				if($(this).hasClass('menu')) {
					if(/login/.test(login)) {
						$a = $('<a href="#" class="menu uatracker">P2P Play online<span class="img"></span></a>').click(function(e) {
							e.preventDefault();
							var height = $('body').height();
							$alert = $(
								'<div class="ts-overlay"></div>'+
								'<div class="ts-alert">'+
								'<a href="signup.php" class="ts-close"></a>'+
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
									caretPadding: 10,
									text: "P2P Play online",
								},
								dataType: 'torrentUrl',
								data: "http://uatracker.net/" + url,
								downloadTorrent: true
						});
						$(button).addClass('fixed');
						
						$(this).before(button);
					}
				}
				else if($(this).children().is('img')) {
					var button = magicplayer.renderButton({
							button: {
								style: "small-16",
								playPadding: 5,
								title: "Play online"
							},
							dataType: 'torrentUrl',
							data: "http://uatracker.net/" + url,
							downloadTorrent: true
					});
					$(button).addClass('fixed uatracker');
						
					$(this).after(button);
				}
            });
        }
});
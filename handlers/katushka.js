magicplayer.addHandler("katushka", function(features) {
    GM_log("start katushka: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
		
        if(canEmbed()) {
			$('a[href^="/download.php?id="]').each(function(e){
				var url = $(this).attr('href');
				var login = $('.login').html();
				if(/login.php/.test(login) && !/logout/.test(login)) {
					var href = $('.login a[href="/login.php"]').attr('href');
					$a = $('<a href="#" alt="Воспроизвести онлайн" class="katushka"></a>').click(function(e) {
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
					$(this).before($a);	
				}
				else {
					$td = $('<td class="play"></td>');
					var button = magicplayer.renderButton({
				        button: {
				            style: "small",
				            playPadding: 5,
                            caretPosition: "left",
                            title: "Воспроизвести онлайн"
				        },
				        dataType: 'torrentUrl',
						data: "http://katushka.net" + url,
						downloadTorrent: true
					});
					$(button).addClass('katushka');
					
					$td.append(button);
					
					$(this).parent().before($td);
				}
			});
        }
});
magicplayer.addHandler("oday", function(features) {
    GM_log("start oday: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
		function hideMP() {
			if($('.watch_0day').size()) {
				$('.watch_0day').each(function() {
					$(this).parent().parent().parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="download.php?id="]', d).each(function(e) {
				var url = $(this).attr('href');
				var login = $('div.post2').html();
				
				if($(this).parent().is('div')) {
					var cat = $(".darkrow1").html();
					cat = $.trim(cat);
					var allowed = ['Фильмы', 'DVD / Мультфильмы', 'HD / Документальное', 'Мультфильмы', 'DVD / Документальное', 'Мультсериалы', 'Музыка / Аудио', 'TV / Сериалы', 'Аниме', 'Музыка / Видео', 'HD / Сериалы', 'Документальное', 'HD / Фильмы', 'TV / Передачи', 'DVD / Фильмы', 'HD / Мультфильмы', 'Спорт'];
					if($.inArray(cat, allowed) == -1) {
						return true;
					}
					
					$tr = $('<tr><td class="darkrow1" valign="top" align="right">P2P Онлайн</td></tr>', d);
					$td = $('<td class="row2" valign="top" align="left"></td>', d);
					$div = $('<div class="oday"></div>', d);
					
					if(/login/.test(login) && !/logout/.test(login)) {
						var href = $('#welcome a[href="/login"]').attr('href');
						$a = $('<a class="index" href="#"><span class="img"></span>Воспроизвести онлайн в оригинальном качестве</a>', d).click(function(e) {
							e.preventDefault();
							var height = $('body').height();
							$alert = $(
								'<div class="ts-overlay"></div>'+
								'<div class="ts-alert">'+
								'<a href="http://tracker.0day.kiev.ua/login.php" class="ts-close"></a>'+
								'<span class="red">Внимание!</span>'+
								'Чтобы запустить плеер, вам нужно войти в систему.'+
								'</div>'
							);
							$('body').prepend($alert);
							var left = ($('body').width() - $('.ts-alert').width())/2;
							var top = ($(window).height() - $('.ts-alert').height())/2;
							$('.ts-alert').css({'left':left,'top':top});
						});	
						$div.append($a);					
					}
					else {
						var button = magicplayer.renderButton({
							button: {
								style: "text",
								caretPosition: "left",
								caretPadding: 10,
								text: "Воспроизвести онлайн в оригинальном качестве",
							},
							dataType: 'torrentUrl',
							data: "http://tracker.0day.kiev.ua/"+url,
							downloadTorrent: true
						});
						$(button).addClass('fixed');
						$div.append(button);
					}
					
					$td.append($div);
					$tr.append($td);
					$(this).parent().parent().parent().after($tr);
				}
				else if($(this).parent().is('td')) {
					if(/login/.test(login) && !/logout/.test(login)) {
						return true;
					}
					var cat = $(this).parent().parent().html();
					if(/cat=(33|37|18|17|32|31|25|39|48|46)/.test(cat)) {
						return true;
					}
					
					var button = magicplayer.renderButton({
						button: {
							style: "small-16",
							playPadding: 5,
							caretPadding: 5,
							title: "Воспроизвести онлайн"
						},
						dataType: 'torrentUrl',
						data: "http://tracker.0day.kiev.ua/"+url,
						downloadTorrent: true
					});
					$(button).addClass('fixed awe-oday');
					
					$(this).after(button);
				}
			});
			
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});
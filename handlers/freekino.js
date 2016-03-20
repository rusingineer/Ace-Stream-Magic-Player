magicplayer.addHandler("freekino", function(features) {
    GM_log("start freekino: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
        if(canEmbed()) {
			var login;
			$('td.block').each(function() {
				if(/Привет/.test($(this).html())) {
					login = $(this).parent().parent().parent().next().html();
				}
			});
			$('a[href^="/download.php?id="]').each(function(e) {
					var url = $(this).attr('href');
					var cat = $(this).parent().parent().html();
					if(!/category\/(films|clips|films-hdtv|sport|music|films-dvd|documentary|serial|tv-program|anime|cartoon-films)/.test(cat)) {
						return true;
					}
					
					if(/\/takelogin.php/.test(login) && !/logout/.test(login)) {
						$a = $('<a href="#" class="freekino"><span class="img"></span></a>').click(function(e) {
							e.preventDefault();
							var height = $('body').height();
							$alert = $(	
								'<div class="ts-overlay"></div>'+
								'<div class="ts-alert">'+
								'<a href="http://freekino.org/login.php" class="ts-close"></a>'+
								'<span class="red">Внимание!</span>'+
								'Чтобы запустить плеер, вам нужно войти в систему.'+
								'</div>'
							);
							$('body').prepend($alert);
							var left = ($('body').width() - $('.ts-alert').width())/2;
							var top = ($(window).height() - $('.ts-alert').height())/2;
							$('.ts-alert').css({'left':left,'top':top});
						});
						
					}
					else {
						$a = $('<a href="#" class="freekino"><span class="img"></span></a>').click(function(e) {
							e.preventDefault();
							magicplayer.log(">>> http://freekino.org"+url);
							TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://freekino.org"+url,
								downloadTorrent: true
							});
						});
					}
					$(this).after($a);
			});
			
			$('a[href^="download.php?id="]:first').each(function() {
				var url = $(this).attr('href');
				var cat = $(this).parent().parent().parent().find('tr:contains("Тип")').html();
				var reg = new RegExp("Фильмы|Клипы|Фильмы HDTV|Спорт|Музыка|Фильмы DVD|Документалки|Сериалы|ТВ программы|Аниме|Мультфильмы");
				var wrong = new RegExp("Фильмы/Игры PSP");
				if(!reg.test(cat) || wrong.test(cat)) {
					return true;
				}
				$tr = $('<tr><td class="heading" width="10%" valign="top" align="right">P2P Online</td></tr>');
				$td = $('<td valign="top" align="left"></td>');
				if(!/logout/.test($('body').html())) {
					$a = $('<a href="#" class="freekino"><span class="img"></span>Воспроизвести торрент онлайн в оригинальном качестве</a>').click(function(e) {
						e.preventDefault();
						var height = $('body').height();
						$alert = $(	
							'<div class="ts-overlay"></div>'+
							'<div class="ts-alert">'+
							'<a href="http://freekino.org/login.php" class="ts-close"></a>'+
							'<span class="red">Внимание!</span>'+
							'Чтобы запустить плеер, вам нужно войти в систему.'+
							'</div>'
						);
						$('body').prepend($alert);
						var left = ($('body').width() - $('.ts-alert').width())/2;
						var top = ($(window).height() - $('.ts-alert').height())/2;
						$('.ts-alert').css({'left':left,'top':top});
					});
					
				}
				else {
					$a = $('<a href="#" class="freekino"><span class="img"></span>Воспроизвести торрент онлайн в оригинальном качестве</a>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: "http://freekino.org/"+url,
							downloadTorrent: true
						});
					});
				}
				$td.append($a);
				$tr.append($td);
				$(this).parent().parent().after($tr);
			});
        }
});

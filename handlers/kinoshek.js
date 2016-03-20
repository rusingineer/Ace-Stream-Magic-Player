magicplayer.addHandler("kinoshek", function(features) {
    GM_log("start kinoshek: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="download.php?id="]', d).each(function(e) {
				var url = $(this).attr('href');
				if ($(this).parent().hasClass('a_load')) {
					var play = " Играть!";
					var cat = $(this).parent().parent().parent().parent().html();
					if(!/avi|mkv|mp4|mpeg4|flv|HDTVRip|HDTV|mp3|flac/i.test(cat)) {
						return true;
					}
					$div = $('<div class="kinoshek a_load"></div>', d);
					var login = $('.auth_top').html();
					if(/takelogin.php/.test(login) && !/logout/.test(login)) {
						$a = $('<a href="#" title="Воспроизвести онлайн" class="watch_kinoshek"><span class="img"><span></a>', d).click(function(e) {
							e.preventDefault();
							var height = $('body').height();
							var href = $('.auth_top a:contains("Регистрация")').attr('href');
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
					}
					else {
						$a = $('<a href="#" title="Воспроизвести онлайн" class="watch_kinoshek"><span class="img"><span></a>', d).click(function(e) {
							e.preventDefault(); 
							TorrentStream.Utils.showPopupPlayer({
									dataType: 'torrentUrl',
									data: "http://kinoshek.net/"+url,
									downloadTorrent: true
							});
						});
					}
					$text = $('<span>'+ play +'</span>', d);
					$a.append($text);
					$div.append($a);
					$(this).parent().after($div);
					$(this).parent().parent().css({'width':'160px'});
				} else if($(this).parent().prev().hasClass('heading')) {
					var cat = $(this).parent().parent().parent().find("td.heading:contains('Тип')").next().html();
					var tag = $(this).parent().parent().parent().find("a[href^='browse.php?tag=']").html();
					cat = $.trim(cat);
					var allowed = ['Фильмы', 'Фильмы HD', 'Клипы', 'Сериалы', 'Музыка', 'Спорт', 'Аниме', 'Мультфильмы', 'Ролики', 'аудиокниги'];
					if($.inArray(cat, allowed) == -1 && $.inArray(tag, allowed) == -1)  {
						return true;
					}
					$tr = $('<tr class="kinoshek-tr"><td class="heading" width="10%" valign="center" align="right">P2P Онлайн</td></tr>', d);
					$td = $('<td valign="center" align="left"></td>', d);
					$a = $('<a href="#" title="Воспроизвести онлайн" class="watch_kinoshek index"></a>', d).click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://kinoshek.net/"+url,
								downloadTorrent: true
						});
					});
					$text = $('<span class="img"></span> <span>Воспроизвести онлайн содержимое torrent-файла в оригинальном качестве</span>', d);
					$a.append($text);
					$td.append($a);
					$tr.append($td)
					$(this).parent().parent().after($tr);
				}
			});
        }
});

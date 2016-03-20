magicplayer.addHandler("file.lu", function(features) {
    GM_log("start file.lu: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="/download/"]', d).each(function(e) {
				var cat = $(".fName a[href^='/browse/pub/']").html();
				cat = $.trim(cat);
				var allowed = ['Аниме', 'Аудио книги', 'Муз. Клипы', 'Музыка', 'Мультфильмы', 'Спорт', 'ТВРип', 'Фильмы'];
				if($.inArray(cat, allowed) == -1) {
					return true;
				}
				var url = $(this).attr('href');
				if($(this).parent().hasClass('C')) {
					$td = $('<td class="file-lu C"></td>', d);
					$a = $('<a href="#" title="Воспроизвести онлайн" class="watch_file-lu"></a>', d).click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://www.file.lu"+url,
								downloadTorrent: true
						});
					});
					$td.append($a);
					$(this).parent().after($td);
				} else if($(this).hasClass('download')) {
					var login = $('#topMenu').html();
					if(/login.html/.test(login) && !/logout/.test(login)) {
						$a = $('<a href="#" title="Воспроизвести онлайн" class="watch_file-lu file-lu">Play online</a>', d).click(function(e) {
							e.preventDefault();
							var height = $('body').height();
							$alert = $(
								'<div class="ts-overlay"></div>'+
								'<div class="ts-alert">'+
								'<a href="' + url + '" class="ts-close"></a>'+
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
						$a = $('<a href="#" title="Воспроизвести онлайн" class="watch_file-lu file-lu">Play online</a>', d).click(function(e) {
							e.preventDefault(); 
							TorrentStream.Utils.showPopupPlayer({
									dataType: 'torrentUrl',
									data: "http://www.file.lu"+url,
									downloadTorrent: true
							});
						});
					}
					$button = $('<span></span>', d)
					$a.prepend($button);
					$(this).after($a);	
				}
			});
			$('table.bordered th.designed:last', d).after('<th class="designed">&nbsp;</th>');
        }
});

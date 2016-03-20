magicplayer.addHandler("jesus-torrent", function(features) {
    GM_log("start jesus-torrent: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
		
        if(canEmbed()) {
		   $('a[href^="download.php?id="]').each(function(e){
				var url = $(this).attr('href');
				var login = $('#meny .artmenu').html();
				
				var cat = $(this).parent().parent().parent().find('tr:contains("Тип")').html();
				if(!/Видео проповеди|Документальные фильмы|Дискографии|Музыка отечественная|Аудио проповеди|Для семейного просмотра|Музыка зарубежная|Аудиокниги|Фильмы DVD|Мультфильмы|Музыкальное видео|Фильмы XviD\/Mpeg\/и другие/.test(cat)) {
					return true;
				}
				$tr = $('<tr><td class="heading" width="10%" align="right">P2P Online</tr>');
				$td = $('<td class="jesus-torrent" align="left"></td>');
				if(!/my.php/.test(login)) {
					$a = $('<span><a href="#" class="index"><span class="img"></span>Play online the torrent file in its original quality</a></span>').click(function(e) {
						e.preventDefault();
						var height = $('body').height();
						$alert = $(
							'<div class="ts-overlay"></div>'+
							'<div class="ts-alert">'+
							'<a href="http://jesus-torrent.ru/signup.php" class="ts-close"></a>'+
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
					$a = $('<span><a href="#" class="index"><span class="img"></span>Play online the torrent file in its original quality</a></span>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: "http://jesus-torrent.ru/" + url,
							downloadTorrent: true
						});
					});
				}
				$td.append($a);
				$tr.append($td);
				//$(this).parent().parent().after($tr);
            });
        }
});
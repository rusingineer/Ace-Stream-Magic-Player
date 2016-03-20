magicplayer.addHandler("jc-club", function(features) {
    GM_log("start jc-club: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			$('a[href^="download.php?id="]:first').each(function(e) {
				var url = $(this).attr('href');
				if($(this).hasClass('index')) {
					var cat = $(this).parent().parent().find('td.heading').html();
					if(!/cat=(45|3|46|5|6|49|43|2|48|27|29|42|4|7|41|19|1|51|39|8|44)[^\d]+/.test(cat)) {
						return true;
					}
				
					$tr = $('<tr><td class="heading" width="10%" align="right">P2P Онлайн</td></tr>');
					$td = $('<td height="35"></td>');
					
					var login = $('.mainouter td:first').html();
				
					if(/takelogin.php/.test(login) && !/logout/.test(login)) {
						$a = $('<a href="#" class="jc-club"><span class="img"></span><span>Воспроизвести онлайн в оригинальном качестве</span></a>').click(function(e) {
							e.preventDefault();
							var height = $('body').height();
							$alert = $(
								'<div class="ts-overlay"></div>'+
								'<div class="ts-alert">'+
								'<a href="http://torrent.jc-club.org.ua/login.php" class="ts-close"></a>'+
								'<span class="red">Внимание!</span>'+
								'Чтобы запустить плеер, вам нужно войти в систему.'+
								'</div>'
							);
							$('body').prepend($alert);
							var left = ($('body').width() - $('.ts-alert').width())/2;
							var top = ($(window).height() - $('.ts-alert').height())/2;
							$('.ts-alert').css({'left':left,'top':top});
						});
						$td.append($a);
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
								data: "http://torrent.jc-club.org.ua/"+url,
								downloadTorrent: true
						});
						$(button).addClass('fixed');
						
						$td.append(button);
					}
					
					$tr.append($td);
					$(this).parent().parent().after($tr);
				}
			});
			
			$('a[href^="download.php?id="]').each(function(e) {
				var url = $(this).attr('href');
				var cat = $(this).parent().parent().find('td:first').html();
				if(!/cat=(45|3|46|5|6|49|43|2|48|27|29|42|4|7|41|19|1|51|39|8|44)[^\d]+/.test(cat)) {
					return true;
				}
				
				if(!$(this).hasClass('index')) {
					var login = $('.mainouter td:first').html();
					if(/takelogin.php/.test(login) && !/logout/.test(login)) {
						$a = $('<a href="#" class="jc-club small"><span class="img"></span></a>').click(function(e) {
							e.preventDefault();
							var height = $('body').height();
							$alert = $(
								'<div class="ts-overlay"></div>'+
								'<div class="ts-alert">'+
								'<a href="http://torrent.jc-club.org.ua/login.php" class="ts-close"></a>'+
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
						$a = $('<a href="#" class="jc-club small"><span class="img"></span></a>').click(function(e) {
							e.preventDefault();
							TorrentStream.Utils.showPopupPlayer({
									dataType: 'torrentUrl',
									data: "http://torrent.jc-club.org.ua/"+url,
									downloadTorrent: true
							});
						});
					}
					$(this).after($a);
				}
			});
        }
});

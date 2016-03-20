magicplayer.addHandler("bete", function(features) {
    GM_log("start bete: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            var body = document.body;
            if (/forumdisplay\.php\?f=(1004|1038|1292|1432|1014|1054|1224|1005|1109|1153|1089|1099)/.test(body.innerHTML)) {
                return true;
            }
            return false;
        }
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="attachment.php?atta"]', d).each(function(e) {
				var url = $(this).attr('href');
				$tr = $('<tr><td><span class="bete"></span></td></tr>', d);
				$td = $('<td width="100%"></td>', d);
				var login = $('div.usermenu').html();
				if(/login.php/.test(login) && !/logout/.test(login)) {
					$a = $('<a href="#" class="watch_bete">Воспроизвести онлайн</a>', d).click(function(e) {
						e.preventDefault();
						var height = $('body').height();
						var href = $('#mainmenu a:contains("Регистрация")').attr('href');
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
					$a = $('<a href="#" class="watch_bete">Воспроизвести онлайн</a>', d).click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://bete.tv/"+url,
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


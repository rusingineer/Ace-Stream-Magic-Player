magicplayer.addHandler("uniongang", function(features) {
    GM_log("start uniongang: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="download.php?id="]', d).each(function(e) {
				var url = $(this).attr('href');
				$tr = $('<tr><td class="heading" width="10%" valign="top" align="right">P2P Онлайн</td></tr>', d);
				$td = $('<td valign="top" align="left" class="uniongang"></td>', d);
				
				var login = $('.mainouter .blok').html();
				if(/takelogin.php/.test(login) && !/logout/.test(login)) {
					$a = $('<a href="#" title="Воспроизвести онлайн" class="watch_uniongang index"><span id="ts-button-icon16" style="margin-right: 5px;"></span><b>Воспроизвести онлайн в оригинальном качестве</b></a>', d).click(function(e) {
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
					$a = $('<a href="#" title="Воспроизвести онлайн" class="watch_uniongang index"><span id="ts-button-icon16" style="margin-right: 5px;"></span><b>Воспроизвести онлайн в оригинальном качестве</b></a>', d).click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://uniongang.tv/"+url,
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

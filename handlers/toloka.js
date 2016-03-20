magicplayer.addHandler("toloka", function(features) {
    GM_log("start toloka: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="download.php?id="]', d).each(function(e) {
				if(!/f(117|118|190|225|119|157|120|136|338|8|98|185)(\D|$)/.test($('.nav', d).html())) {
					return true;
				}
				var url = $(this).attr('href');
				$('table.btTbl tr.row6_torrent td', d).attr({colspan:"4"});
				$('table.btTbl tr.row6_torrent_down td', d).attr({colspan:"4"});
				$('table.btTbl td[width="70%"]', d).attr({width:"60%"});
				$('table.btTbl td.gensmall', d).attr({width:"10%"});
				var play = "";
				
				if(/f=(8|98|185)(\D|$)/.test($('span.nav', d).html())) {
					play = "Слухати";
				} else {
					play = "Дивитись";
				}
				
				$td = $('<td class="toloka gensmall" width="10%" rowspan="6" align="center"></td>', d);
				var login = $('ul.nav_top').html();
				if(/login.php/.test(login) && !/logout/.test(login)) {
					var href = $('ul.nav_top a[href^="http://toloka.hurtom.com/login.php"]').attr('href');
					$button = $('<a href="#" title="Дивитись онлайн" class="watch_toloka"><div id="torrentstream-button" class="button60"><div class="rotate"></div></div></a>', d).click(function(e) {
						e.preventDefault();
						var height = $('body').height();
						$alert = $(
							'<div class="ts-overlay"></div>'+
							'<div class="ts-alert">'+
							'<a href="' + href + '" class="ts-close"></a>'+
							'<span class="red">Увага!</span>'+
							'Вам потрібно увійти в систему, щоб запустити плеєр'+
								'</div>'
						);
						$('body').prepend($alert);
						var left = ($('body').width() - $('.ts-alert').width())/2;
						var top = ($(window).height() - $('.ts-alert').height())/2;
						$('.ts-alert').css({'left':left,'top':top});
					});		
				}
				else {
					if(!$(this).parent().hasClass('gensmall')) {
						var $button = magicplayer.renderButton({
							button: {
								style: "big",
								title: "Воспроизвести онлайн"
							},
							dataType: 'torrentUrl',
							data: "http://toloka.to/"+url,
							downloadTorrent: true,
							useTsButton: true
						});
						
						$td.append($button);
						$(this).parent().parent().parent().after($td);
					}
				}
			});
        }
});

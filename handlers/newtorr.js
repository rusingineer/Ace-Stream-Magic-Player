magicplayer.addHandler("newtorr", function(features) {
    GM_log("start newtorr: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			//alert('start');
            var d = document;
			var body = d.body;
			$('a[href^="/download/"]', d).each(function(e) {
				var url = $(this).attr('href');
				if($(this).parent().hasClass('lista1')) {
					var cat = $('#contentBody a[title^="Категория"]', d).attr('href');
					
					if(/category\/(316|287|288|285|286|284|283|281|280|277|413|432|437|447|449|452|471|485|344|345|346|347|348|349|350|411|355|356|357|424|425|427|457|434|435|436|406|374|375|384)(\d|$)/.test(cat)) {
						return true;
					}
					
					$tr = $('<tr class="newtorr"><td class="header" align="right">P2P Онлайн</td></tr>', d);
					$td = $('<td align="left" style="line-height: 45px;"></td>', d);
					
					
					var login = $('#TabbedPanels1').html();
					if(/\/login/.test(login) && !/logout/.test(login)) {
						$button = $('<div id="torrentstream-button" class="button45"><div class="rotate"></div></div>', d);
						
						$a = $('<a href="#" class="watch_newtorr index"></a>', d).click(function(e) {
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
						
						$text = $('<b>Воспроизвести онлайн содержимое torrent-файла в оригинальном качестве</b>', d);
						$a.append($button).append($text);
						$td.append($a);
					}
					else {
						var button = magicplayer.renderButton({
							button: {
								style: "text",
								caretPosition: "left",
								caretPadding: 10,
								text: "Воспроизвести онлайн содержимое torrent-файла в оригинальном качестве",
							},
							dataType: 'torrentUrl',
							data: "http://newtorr.org"+url,
							useTsButton: true,
							downloadTorrent: true
						});
						
						$td.append(button);
					}
					$(button).addClass('fixed');
					
					$tr.append($td);
					$(this).parent().parent().after($tr);
				} else if($(this).parent().hasClass('lista2')){
					var cat = $(this).parent().find("small").html();
					if(/category\/(316|287|288|285|286|284|283|281|280|277|413|432|437|447|449|452|471|485|344|345|346|347|348|349|350|411|355|356|357|424|425|427|457|434|435|436|406|374|375|384)/.test(cat)) {
						return true;
					}
					var button = magicplayer.renderButton({
						button: {
							style: "small-16",
							playPadding: 5,
							title: "Воспроизвести онлайн"
						},
						dataType: 'torrentUrl',
						data: "http://newtorr.org"+url,
						downloadTorrent: true
					});
					$(button).addClass('fixed');
					
					$(this).after(button);
				}
			});
        }
});


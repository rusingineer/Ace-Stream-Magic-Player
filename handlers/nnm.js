magicplayer.addHandler("nnm", function(features) {
    GM_log("start nnm: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
		function hideMP() {
			if($('.watch_nnm-club').size()) {
				$('.watch_nnm-club').each(function() {
					$(this).parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
            $('a[href^="download.php?id="]').each(function(e) {
				var url = $(this).attr('href');
				if($(this).parent().is('b')) {
					var cat = $('span.nav a[href="index.php"]').parent().html();
					var reg = new RegExp("724|229|726|216|318|220|224|254|256|264|768|769|713|576|603|610|620|624|628|638|641|645|322|323|324|325|326|327|328|329|330|313|331|436|437|438|496|141|663|461");
					if (!reg.test(cat)) {
					   return true;
					}
					
					$('.btTbl[width="95%"] td[colspan="3"]').attr({colspan: "4"});
					$('.btTbl[width="95%"] .row1:first td[width="70%"]').attr({width: "55%"});
					$div = $('<div></div>');
					var button = magicplayer.renderButton({
				        button: {
				            style: "big",
                            caretPosition: "left",
                            caretPadding: 10,
				        },
				        dataType: 'torrentUrl',
						data: "http://nnm-club.me/forum/"+url,
						downloadTorrent: true
					});
					$div.append(button);
					$(button).addClass('fixed');
					$(this).parent().parent().parent().prepend('<br/>').prepend($div);
				}
				else if($(this).parent().is('div')) {
					if(!$(this).children().length == 0) {
						var cat = $(this).parent().parent().parent().parent().find('td.pcatHead').html();
						var reg = new RegExp("Книги|Программы|Игры|КПК и Мобильные|Разное");
						
						if(reg.test(cat)) {
							return true;
						}
						
						$div = $('<div class="nnm"></div>');
						var button = magicplayer.renderButton({
							button: {
								style: "small-16",
								playPadding: 10,
								caretPosition: "left",
								caretPadding: 10,
							},
							dataType: 'torrentUrl',
							data: "http://nnm-club.me/forum/"+url,
							downloadTorrent: true
						});
						$div.append(button);
						$(button).addClass('fixed');
						$(this).parent().before($div);
					}
				}
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});


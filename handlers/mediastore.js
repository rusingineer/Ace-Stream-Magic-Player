magicplayer.addHandler("mediastore", function(features) {
    GM_log("start mediastore: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
		function hideMP() {
			if($('.watch_online_mediastore').size()) {
				$('.watch_online_mediastore').each(function() {
					$(this).parent().parent().remove();
				});
			}
		}
		
        if(canEmbed()) {
			var d = document;
			$('a[href^="download.php/"]:first', d).each(function(e) {
				var cat = $("a[href^='browse.php?cat=']").html();
				var allowed = ['Документальные Фильмы', 'Мультфильмы', 'Фильмы HDTV', 'Клипы', 'Наше Кино', 'Телепередачи', 'Фильмы СССР', 'Переводы Гоблина', 'Фильмы', 'Аниме', 'Музыка Зарубежная', 'Фильмы DVD5', 'Аудио Книги', 'Музыка Русская', 'Сериалы', 'Фильмы DVD9'];
				if($.inArray(cat, allowed) == -1) {
					return true;
				}
				
				var url = $(this).attr('href');
				$tr = $('<tr><td class="rowhead">P2P Онлайн</td></tr>', d);
				$td = $('<td align="left" class="mediastore"></td>', d);
				$button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            caretPosition: "left",
                            caretPadding: 15,
                            text: "Воспроизвести онлайн в оригинальном качестве",
				        },
						dataType: 'torrentUrl',
                        data: "http://mediastore.in.ua/"+url
				});
				$td.append($button);
				$($button).addClass("fixed");
				$tr.append($td);
				$('table[width="750"] tr:first', d).after($tr);
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

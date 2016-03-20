magicplayer.addHandler("x-torrents", function(features) {
    GM_log("start x-torrents: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            $('a[href^="/get/"]:first').each(function(e) {
				var cat = $("td.heading:contains('Тип')").next().html();
				cat = $.trim(cat);
				var allowed = ['Музыка', 'Аниме', 'Видео для КПК', 'DVD', 'Видео Клипы', 'Фильмы', 'Мультфильмы', 'HDTV', 'TV', 'Мелодии для КПК', 'Док. фильмы'];
				if($.inArray(cat, allowed) == -1) {
					return true;
				}
				var url = $(this).attr('href');
				$tr = $('<tr><td class="heading" width="10%" valign="top" align="right">P2P Онлайн</td></tr>');
				$td = $('<td class="x-torrents" align="left" valign="top"></td>');
				$a = $('<a href="#" class="watch_xtorrents">Воспроизвести онлайн в оригинальном качестве</a>').click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://x-torrents.org"+url,
                            downloadTorrent: true
                    });
				});
				$button = $('<span></span>');
				$a.prepend($button);
				$td.append($a);
				$tr.append($td);
				$(this).parent().parent().after($tr);
			});
        }
});

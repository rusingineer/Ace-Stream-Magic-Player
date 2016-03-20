magicplayer.addHandler("dark-os", function(features) {
    GM_log("start dark-os: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			$('a[href^="download.php?id="]').each(function(e) {
				var cat = $('.fon_forum td.nav:first').html();
				if(!/f=(57|85|378|377|92|675|788|70|475|827|456|101|270|537|546|552|558|562|571|575|580|584|588|599|608|614|620|624|633|637|642|646|650|826|447|445|664|455|446|272|495|500|501|502|503|769|504|787|942|955|968)[^\d]+/.test(cat)) {
					return true;
				}
				
				var url = $(this).attr('href');
				$td = $('<td class="tCenter pad_6 dark-os" width="15%" rowspan="6"></td>');
				$a = $('<a href="#"><span>Воспроизвести онлайн</span></a>').click(function(e) {
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://dark-os.com/"+url,
							useTsButton: true,
							downloadTorrent: true
                    });
				});
				$button = $('<div id="torrentstream-button" class="button60"><div class="rotate"></div></div><br/>');
				$a.prepend($button);
				$td.append($a);
				$(this).parent().parent().find('td:last').remove();
				$(this).parent().after($td);
				
				$('tr.row3').children().attr({colspan:'4'});
			});
        }
});

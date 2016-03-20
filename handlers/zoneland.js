magicplayer.addHandler("zoneland", function(features) {
    GM_log("start zoneland: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="download.php?id="]', d).each(function(e) {
				if(!/f=(294|295|645|649|328|329|653|296|297|13|969|1042|659|673|674|675|676|149|761|762|763|790|764|788|765|1027|222|235|369|250|258|267|276|806|897|272|278|642|551|978|702|704|705|703|708|301)/.test($('td.nav.w100', d).html())) {
					return true;
				}
				var url = $(this).attr('href');
				$('table.attach.bordered.med tr.row3 th', d).attr({colspan:"4"});
				$('table.attach.bordered.med tr.row3 td', d).attr({colspan:"4"}).css({'border-top':'none'});
				$('table.attach.bordered.med td[width="70%"]', d).attr({width:"60%"});
				$('table.attach.bordered.med td[rowspan="7"]', d).attr({width:"10%"}).attr({rowspan:'6'}).css({'border-bottom':'none'});
					
				$td = $('<td class="zoneland tCenter pad_6" width="10%" rowspan="6"></td>', d);
				$button = $('<a href="#" title="Воспроизвести онлайн" class="watch_zoneland genmed"><div id="torrentstream-button" class="button60"><div class="rotate"></div></div></a>', d).click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://zoneland.ru/forum/"+url,
                            downloadTorrent: true,
                            useTsButton: true
                    });
				});
				$text = $('<b>Воспроизвести онлайн</b>', d);
				$button.append($text);
				$td.append($button);
				$(this).parent().parent().after($td);
			});
        }
});

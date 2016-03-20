magicplayer.addHandler("powertracker", function(features) {
    GM_log("start powertracker: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			if (/f=(440|1358|1|100|274|106|305|92|158|162|66|176|282|1222|1232|1241|980|1023|1419|920|931|941|952|957|962|967|654|655|656|657|660|661|663|664|1293|1294|1292|1276|525|14)(\D|$)/.test($("td.nav.w100", d).html())) {
				return true;
			}
			return false;
        }
        
        if(canEmbed()) {
           var d = document;
			$('a[href^="download.php?id="]', d).each(function(e) {
				var url = $(this).attr('href');
				$('table.attach.bordered.med tr th', d).attr({colspan:"4"});
				$('table.attach.bordered.med td[colspan="3"]', d).attr({colspan:"4"});
				$('table.attach.bordered.med td[width="70%"]', d).attr({width:"60%"});
				$('table.attach.bordered.med td[rowspan="6"]', d).attr({width:"10%"});
				
				$td = $('<td class="powertracker tCenter pad_6" width="10%" rowspan="5"></td>', d);
				$button = $('<a href="#" title="Воспроизвести онлайн" class="watch_powertracker genmed"><div id="torrentstream-button" class="button60"><div class="rotate"></div></div></a>', d).click(function(e) {
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://powertracker.org/"+url,
                            downloadTorrent: true,
                            useTsButton: true
                    });
				});
				$text = $('<p>Воспроизвести онлайн</p>', d);
				$button.append($text);
				$td.append($button);
				$(this).parent().after($td);
			});
        }
});

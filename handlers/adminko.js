magicplayer.addHandler("adminko", function(features) {
    GM_log("start adminko: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            var body = document.body;
            if (/f=(455|459|466|474|540|517|483|492|479|481|795|831|847|848|801|813|808|809|810|811|812|820|872|506|514|46|55|62|69|79|91|101|102|105|106|113|624|115|119|120|121|179|194|195|312|317|316|315|314|313|237|239|241|242|243|244|245|567)(\D|$)/.test(body.innerHTML)) {
                return true;
            }
            return false;
        }
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="download.php?id="]', d).each(function(e) {
				var url = $(this).attr('href');
				$('table.attach.bordered.med tr.row3 th', d).attr({colspan: "4"});
				$('table.attach.bordered.med td[colspan="3"]', d).attr({colspan: "4"});
				$('table.attach.bordered.med td[width="70%"]', d).attr({width: "50%"});
				$td = $('<td class="tCenter pad_6" width="10%" rowspan="4"></td>', d);
				$button = $('<div id="torrentstream-button" class="button60"><div class="rotate"></div></div>', d).click(function(e) {
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://torrents.adminko.org/"+url,
							useTsButton: true,
							downloadTorrent: true
                    });
				});
				$a = $('<a href="#" class="genmed watch_adminko"><b>Воспроизвести</b></a>', d);
				$a.prepend($button);
				$td.append($a);
				$(this).parent().after($td);
			});
        }
});

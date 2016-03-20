magicplayer.addHandler("torrents.by", function(features) {
    GM_log("start torrents.by: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			if (/vf(246|392|69|42|4|68|245|778|457|121|71|72|73|685|67|689|5|449|721|993|722|723|724|744|8|9|122|75|77|831|319)[^\d]+/.test($(".nav.w100", document).html())) {
				return true;
			}
			return false;
        }
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="dl"]', d).each(function(e) {
				var url = $(this).attr('href');
				
				$td = $('<td class="torrentsBy tCenter pad_6" width="15%" rowspan="3"></td>', d);
				$button = $('<a href="#" class="watch_torrents genmed"><div id="torrentstream-button" class="button60"> <span class="circle"></span> <span class="progress"></span> <div class="button"> <span class="icon play"></span>	<span class="icon pause"></span> </div> </div></a>', d).click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://torrents.by/forum/"+url,
                            downloadTorrent: true,
                            useTsButton: true
                    });
				});
				$text = $('<b>Воспроизвести онлайн</b>', d);
				$button.append($text);
				$td.append($button);
				$("table.attach.bordered.med tr.row1", d).each(function() {
					if(/Размер/.test($(this).html())){
						$(this).append($td);
					}
				});
			});
        }
});

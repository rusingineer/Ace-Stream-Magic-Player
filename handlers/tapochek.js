magicplayer.addHandler("tapochek", function(features) {
    GM_log("start tapochek: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="download.php?id="]:first', d).each(function(e) {
				if(!/c=(5|15)|f=(693|684|678|685|680|113)/.test($('td.nav.w100', d).html())) {
					return true;
				}
				var url = $(this).attr('href');
				$('table.attach.bordered.med tr.row3 th', d).attr({colspan:"4"});
				$('table.attach.bordered.med tr.row3 td', d).attr({colspan:"4"});
				$('table.attach.bordered.med tr.row4 th', d).attr({colspan:"4"});
				$('table.attach.bordered.med tr.row4 td', d).attr({colspan:"4"});
				$('table.attach.bordered.med td[width="70%"]', d).attr({width:"60%"});
				$('table.attach.bordered.med td[rowspan="6"]', d).attr({width:"10%"});
				
				$td = $('<td class="tapochek tCenter pad_6" width="10%" rowspan="6"></td>', d);
				$button = $('<a href="#" title="Воспроизвести онлайн" class="watch_tapochek genmed"><div id="torrentstream-button" class="button60"> <span class="circle"></span> <span class="progress"></span> <div class="button"> <span class="icon play"></span>	<span class="icon pause"></span> </div> </div></a>', d).click(function(e) {
				//$button = $('<a href="#" title="Воспроизвести онлайн" class="watch_tapochek genmed"><div class="torrentstream-button"> </div></a>', d).click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://tapochek.net/"+url,
                            downloadTorrent: true,
                            useTsButton: true
                    });
				});
				$text = $('<b>Воспроизвести онлайн</b>', d);
				$button.append($text);
				$td.append($button);
				$(this).parent().after($td);
			});
        }
});

magicplayer.addHandler("beeretracker", function(features) {
    GM_log("start beeretracker: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="./download/file.php?id="]:first', d).each(function(e) {
				var url = $(this).attr('href');
				$('a[href^="http://icq.refer.ru/sendicq/"]', d).parent().parent().parent().parent().parent().parent().attr({width: "60%"});
				$td = $('<td class="beeretracker" width="15%" align="center"></td>', d);
				//$button = $('<div id="torrentstream-button" class="watch_beeretracker button60"> <span class="circle"></span> <span class="progress"></span> <div class="button"> <span class="icon play"></span>	<span class="icon pause"></span> </div> </div>', d).click(function(e) {
				$button = $('<div id="torrentstream-button" class="button60"><div class="rotate"></div></div>', d).click(function(e) {
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://beeretracker.net/"+url,
							downloadTorrent: true,
							useTsButton: true
                    });
				});
				$a = $('<a href="#"><b>Воспроизвести</b></a>', d);
				$a.prepend($button);
				$td.append($a);
				$(this).parent().parent().parent().after($td);
			});
        }
});

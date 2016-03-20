magicplayer.addHandler("hdclub", function(features) {
    GM_log("start hdclub: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        alert('a');
		function hideMP() {
			if($('.watch_hdclub').size()) {
				$('.watch_hdclub').each(function() {
					$(this).parent().parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="download.php?id="]:first', d).each(function(e) {
				var url = $(this).attr('href');
				$tr = $('<tr><td class="heading" valign="top" align="right"><span class="hdclub"></span>P2P Online</td></tr>', d);
				$td = $('<td class="heading_r"></td>', d);
				$a = $('<a href="#" class="index"><b>Воспроизвести онлайн в оригинальном качестве</b></a>', d).click(function(e) {
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://tracker.hdclub.com.ua/"+url,
							downloadTorrent: true
                    });
				});
				$td.append($a);
				$tr.append($td);
				$(this).parent().parent().after($tr);
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

magicplayer.addHandler("kinozal", function(features) {
    GM_log("start kinozal: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        function canEmbed() {
            var body = document.body;
            return true;
        }
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="http://dl.kinozal.tv/download.php?id="]', d).each(function(e) {
				var url = $(this).attr('href');
				$tr = $('<tr><td>Воспроизвести онлайн содержимое торрента в оригинальном качестве</td></tr>', d);
				$td = $('<td width="210" nowrap=""></td>', d);
				
				$button = magicplayer.renderButton({
					button: {
						style: "text",
						caretPosition: "left",
						caretPadding: 10,
						playPadding: 28,
					},
					dataType: 'torrentUrl',
					data: url,
					downloadTorrent: true
				});
				
				$td.append('<br/>').append($button);
				$tr.prepend($td);
				$(this).parent().parent().after($tr);
			});
        }
});
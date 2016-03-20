magicplayer.addHandler("sumotorrent", function(features) {
    GM_log("start sumotorrent: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="http://www.sumotorrent.sx/download/"]', d).each(function(e) {
				var url = $(this).attr('href');
				if($(this).parent().hasClass('downloadTorrent')) {
					var cat = $('.torrentInfo', d).html();
					if (!/\/cat_(4|9|3|8|10)\.html/.test(cat) && !/search\/(6\/(110|105)|5\/(90|91|92|10039))/.test(cat)) {
						return true;
					}
					$divOuter = $('<div style="float:left;"></div>', d);
					$div = $('<div class="sumotorrent-play"></div>', d);
					var button = magicplayer.renderButton({
				        button: {
				            style: "big",
				            playPadding: 10,
                            caretPosition: "left",
                            caretPadding: 10,
                            title: "Play Online"
				        },
				        dataType: 'torrentUrl',
						data: url.replace("download","torrent_download"),
						useTsButton: true
					});
					$(button).addClass('fixed');
					$text = $('<div class="text"><span class="play">Play Online</span><span class="small">in the original quality</span></div>', d);
					
					$div.append(button).append($text);
					$divOuter.append($div);
					$(this).parent().parent().after($divOuter);
					$('div.addMenu', d).css({'margin-left':'0'});
					$('div.directStreamingText', d).css({'width':'auto'});
				}
			});
        }
});
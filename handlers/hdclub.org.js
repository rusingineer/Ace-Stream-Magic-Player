magicplayer.addHandler("hdclub.org", function(features) {
    GM_log("start hdclub.org: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
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
				$tr = $('<tr><td class="heading" valign="top" align="right">P2P онлайн</td></tr>', d);
				$td = $('<td class="heading_r"></td>', d);
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "Воспроизвести онлайн в оригинальном качестве",
				        },
				        dataType: 'torrentUrl',
						data: "http://hdclub.org/"+url,
						downloadTorrent: true
				});
				$(button).addClass('fixed');
				$td.append(button);
				$tr.append($td);
				$(this).parent().parent().after($tr);
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

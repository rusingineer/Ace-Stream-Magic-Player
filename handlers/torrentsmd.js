magicplayer.addHandler("torrentsmd", function(features) {
    GM_log("start torrentsmd: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        function canEmbed() {
            var body = document.body;
			var html = $("#categtagInactivList").html();
			if(/categtags=(89|100|90|94|97|96|98|313|314|99)[^\d]+/.test(html)) {
                return true;
            }
            return false;
        }
        
		function hideMP() {
			if($('.watch_torrentsmd').size()) {
				$('.watch_torrentsmd').each(function() {
					$(this).parent().parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="download.php?id="]', d).each(function(e) {
				var url = $(this).attr('href');
				$tr = $('<tr><td class="rowhead">P2P Онлайн</td></tr>', d);
				$td = $('<td align="left" class="torrentsmd"></td>', d);
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            playPadding: 10,
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "Воспроизвести онлайн в оригинальном качестве",
				        },
				        dataType: 'torrentUrl',
						data: "http://www.torrentsmd.com/"+url,
						downloadTorrent: true
				});
				$td.append(button);
				$tr.append($td);
				$(this).parent().parent().parent().after($tr);
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

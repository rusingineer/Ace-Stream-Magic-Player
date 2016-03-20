magicplayer.addHandler("bigfangroup", function(features) {
    GM_log("start bigfangroup: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
		function hideMP() {
			if($('.watch_bigfan').size()) {
				$('.watch_bigfan').each(function() {
					$(this).parent().parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="download.php?id="]', d).each(function(e) {
				var url = $(this).attr('href');
				if ($(this).parent().hasClass('indented')) {
					if(/cat=(5|38|1|9)(\D|$)/.test($(this).parent().parent().html())) {
						return true;
					}
					var button = magicplayer.renderButton({
				        button: {
				            style: "small-16",
				            playPadding: 5,
                            title: "Воспроизвести онлайн"
				        },
						dataType: 'torrentUrl',
						data: "http://bigfangroup.org/"+url,
						downloadTorrent: true
					});
					$(this).after(button);
				}
				else if($(this).parent().is("h1")) {
					var cat = $(this).parent().parent().parent().parent().html();
					if(/cat=(5|38|1|9)(\D|$)/.test(cat)) {
						return true;
					}
					$tr = $('<tr><td class="heading" width="10%" valign="top" align="right">P2P Онлайн</td></tr>', d);
					$td = $('<td valign="top" align="left"></td>', d);
					$button = $('<span></span>', d);
					var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "Воспроизвести онлайн в оригинальном качестве",
				        },
						dataType: 'torrentUrl',
						data: "http://bigfangroup.org/"+url,
						downloadTorrent: true
					});
					$(button).addClass('fixed');
					
					$td.append(button);
					$tr.append($td);
					$(this).parent().parent().parent().after($tr);
				}
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

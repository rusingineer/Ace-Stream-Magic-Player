magicplayer.addHandler("divxtotal", function(features) {
    GM_log("start divxtotal: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        function canEmbed() {
			return true;
        }
        
		function hideMP() {
			if($('.watch_divxtotal').size()) {
				$('.watch_divxtotal').each(function() {
					$(this).parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
			$('a[href^="/download.php?id="]').each(function(e) {
				var url = $(this).attr('href');
				if ($(this).parent().parent().hasClass('ficha_link_det')) {
					$h3 = $('<h3></h3>');
					var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            caretPadding: 15,
                            text: "Play Online",
                            title: "Play Online"
				        },
				        dataType: 'torrentUrl',
						data: "http://www.divxtotal.com"+url,
						useTsButton: true
					});
					$h3.append(button);
					$(button).addClass('fixed');
					$(this).parent().after($h3);
				}
			});
			
			$('a[href^="/torrents_tor/"]').each(function(e) {
				var url = $(this).attr('href');
				if($(this).parent().hasClass('capitulodescarga')) {
					var button = magicplayer.renderButton({
				        button: {
				            style: "small-16",
				            playPadding: 5,
				        },
				        dataType: 'torrentUrl',
						data: "http://www.divxtotal.com"+url,
						useTsButton: true
					});
					
					$(this).after(button);
					$(button).addClass('fixed');
				}
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});
magicplayer.addHandler("estrenosdtl", function(features) {
    GM_log("start estrenosdtl: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
		function hideMP() {
			if($('.watch_estrenosdtl').size()) {
				$('.watch_estrenosdtl').each(function() {
					$(this).parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
            $('a[href^="http://www.estrenosdtl.com/torrents/"]').each(function(e) {
				var url = $(this).attr('href');
				$b = $('<b class="awe-estrenosdtl"></b>')
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "Play Online",
				        },
						dataType: 'torrentUrl',
                        data: url
				});
				$(button).addClass('fixed');
				
				$b.append(button);
				$(this).parent().parent().after($b);
			});
			
            $('a[href^="http://www.divxtotal.com/torrents_tor/"]').each(function(e) {
				var url = $(this).attr('href');
				$b = $('<b class="estrenosdtl"></b>')
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "Play Online",
				        },
						dataType: 'torrentUrl',
                        data: url
				});
				$(button).addClass('fixed');
				
				$b.append(button);
				$(this).parent().parent().after($b);
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

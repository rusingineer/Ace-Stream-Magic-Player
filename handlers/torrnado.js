magicplayer.addHandler("torrnado", function(features) {
    GM_log("start torrnado: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        if(canEmbed()) {
            $('a[href^="http://ws.torrnado.com.ua/torrinfo/download.php?n=http://www.torrnado.com.ua/"]').each(function(e) {
				var cat = $('.eDetails-bottom12').html();
				if(!/load\/(16|35|20|24|21|19|23|42|43|53|44|50|49|47|48)/.test(cat)) {
					return true;
				}
				var url = $(this).attr("href");
				$div = $('<div class="torrnado"></div>');
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            //playPadding: 5,
                            //color: "blue",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "Воспроизвести онлайн",
                            //title: "Воспроизвести онлайн"
				        },
				        dataType: 'torrentUrl',
                        data: url
				});
				
				$div.append(button);
				$(this).parent().after($div);
			});
        }
});
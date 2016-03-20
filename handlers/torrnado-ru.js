magicplayer.addHandler("torrnado-ru", function(features) {
    GM_log("start torrnado-ru: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            $('a[href^="./download/file.php?id="]:first').each(function(e) {
				var cat = $('ul.linklist.navlinks li.icon-home').html();
				if(!/f=(20|285|4|235)[^\d]+/.test(cat)) {
					return true;
				}
				
				var url = $(this).attr('href');
				$dd = $('<dd class="torrnado-ru"></dd>');
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "Воспроизвести онлайн в оригинальном качестве",
				        },
				        dataType: 'torrentUrl',
						data: "http://www.torrnado.ru"+url.replace('.',''),
						downloadTorrent: true,
						useTsButton: true
				});
				
				$dd.append(button);
				$(this).parent().after($dd);
			});
        }
});
magicplayer.addHandler("riper", function(features) {
    GM_log("start riper: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            if (/href="http:\/\/riper.am\/(tv|serials|novinki-kino|films-multiks|music|anime)\/"/.test(document.body.innerHTML)){
				return true;
			}
			return false;
        }
        
		function hideMP() {
			if($('.watch_riper').size()) {
				$('.watch_riper').each(function() {
					$(this).parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
			$('a[href^="./download/file.php?id="]:first').each(function(e) {
				var url = $(this).attr('href');
				if(!$(this).parent().parent().hasClass('icon')) {
					$td = $('<td align="center"></td>');
					var button = magicplayer.renderButton({
				        button: {
				            style: "big",
                            caretPadding: 10,
                            title: "Воспроизвести онлайн"
				        },
				        dataType: 'torrentUrl',
						data: "http://riper.am"+url.replace(".","").replace("&adkeys=1",""),
						downloadTorrent: true,
						useTsButton: true
					});
					$td.append(button);
					$(this).parent().after($td);
				}
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});
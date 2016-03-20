magicplayer.addHandler("baibako", function(features) {
	GM_log("start baibako: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			$('a[href^="download.php?id="]').each(function(e) {
				var url = $(this).attr('href');
				if($(this).children().is("b")) {
					var button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            playPadding: 10,
                            //color: "blue",
                            caretPosition: "left",
                            caretPadding: 7,
                            text: "СМОТРЕТЬ онлайн",
                            //title: "Воспроизвести онлайн"
				        },
				        dataType: 'torrentUrl',
						data: "http://baibako.tv/"+url,
						downloadTorrent: true
					});
					$(button).addClass('baibako');
					
					$(this).after(button);
					
				} else if($(this).children().is("img")) {
					$td = $('<td align="center" class="baibako"></td>');
					var button = magicplayer.renderButton({
				        button: {
				            style: "small-16",
				            playPadding: 5,
                            //color: "blue",
                            //caretPosition: "left",
                            //caretPadding: 4,
                            //text: "Смотреть онлайн",
                            //title: "Воспроизвести онлайн"
				        },
				        dataType: 'torrentUrl',
						data: "http://baibako.tv/"+url,
						downloadTorrent: true
					});
					$td.append(button);
					$(this).parent().after($td);
				}
			});
			
			if(/baibako/.test($('body').html())) {
				$('.table.table-bordered td[width="22"]').after('<td class="baibako" align="center" width="18"><span class="img"></span></td>');
			}
        }
});
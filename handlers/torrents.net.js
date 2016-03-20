magicplayer.addHandler("torrents.net", function(features) {
    GM_log("start torrents.net: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
		function hideMP() {
			if($('#torrentstream-button').size()) {
				$('#torrentstream-button').each(function() {
					$(this).parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
			var login = $('.topmenu').html();
			
			if(!/login.php/.test(login)) {
			
				$('a[href^="download.php?id="]').each(function(e) {
					var url = $(this).attr('href');
					var self = this;
					$('.bordered .row3 th').attr({colspan: "4"});
					$('.bordered .row3 td').attr({colspan: "4"});
					$('.bordered .row1.tCenter td').attr({colspan: "4"});
					$('.bordered th.row7').attr({colspan: "4"});
					$(this).parent().parent().attr({width: "15%"});
					$td = $('<td class="tCenter pad_6 torrents_Net" width="15%" rowspan="4"></td>');
					var button = magicplayer.renderButton({
							button: {
								style: "big",
								playPadding: 10,
								caretPadding: 10,
								title: "Воспроизвести онлайн"
							},
							dataType: 'torrentUrl',
							data: "http://torrents.net.ua/forum/"+url,
							useTsButton: true,
							downloadTorrent: true
					});
					
					$td.append(button);
					$(this).parent().after($td);
				});
				
			}
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

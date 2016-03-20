magicplayer.addHandler("yourbittorent", function(features) {
    GM_log("start yourbittorent: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
		function hideMP() {
			if($('.yourbittorent').size()) {
				$('.yourbittorent').each(function() {
					$(this).remove();
				});
			}
		}
        
        if(canEmbed()) {
            $('a[href^="/down/"]').each(function(e) {
				var url = $(this).attr('href');
				$tr = $('<tr class="awe-yourbittorent"><td align="center" colspan="2" class="text">Play online the torrent file in its original quality</td></tr>');
				$td = $('<td width="236" align="center"></td>');
				var button = magicplayer.renderButton({
				        button: {
				            style: "big",
				            playPadding: 25,
                            caretPosition: "left",
                            caretPadding: 15,
                            title: "Play online the torrent file in its original quality"
				        },
				        dataType: 'torrentUrl',
						data: 'http://yourbittorrent.com' + url
				});
				
				$td.append(button);
				$tr.prepend($td);
				$(this).parent().parent().before($tr);
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

magicplayer.addHandler("tormovies", function(features) {
    GM_log("start tormovies: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            $('a[href^="http://torrage.com/torrent/"]').each(function(e) {
				var url = $(this).attr("href");
				$td = $('<td class="torrentMagnet tormovies"></td>');
				$a = $('<a href="#" class="watch_tormovies"><span class="img"></span>Online</a>').click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: url
                    });
				});
				$td.append($a);
				$(this).parent().parent().append($td);
			});
			$('#torrent_table th[width="440px"]').attr({width:"365px"});
			$("#torrent_table tr:first").append('<th width="75px">P2P</th>');
        }
});
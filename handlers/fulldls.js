magicplayer.addHandler("fulldls", function(features) {
    GM_log("start fulldls: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            $('a[href^="/download-"]').each(function(e) {
				var url = $(this).attr('href');
				if(!/(anime|movies|albums|tv|audio|mvideos)/i.test(url)) {
					return true;
				}
				$a = $('<a href="#" class="watch_fulldls fulldls"></a>').click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://www.fulldls.com"+url
                    });
				});
				$(this).before($a);
			});
			/*
			$('a[href^="download-"]').each(function(e) {
				var url = $(this).attr('href');
				if(!/(anime|movies|albums|tv|audio|mvideos)/i.test(url)) {
					return true;
				}
				$tr = $('<tr class="fulldls"></tr>');
				$td1 = $('<td id="bmico"></td>');
				$button = $('<div id="torrentstream-button" class="button45"><div class="rotate"></div></div>').click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://www.fulldls.com/"+url,
                            useTsButton: true
                    });
				});
				$td1.append($button);
				$td2 = $('<td id="bmidescr"></td>');
				$span = $('<span id="dwl"></span>');
				$a = $('<a href="#" class="watch_fulldls link_black">P2P Online</a>').click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://www.fulldls.com/"+url
                    });
				});
				$span.append($a);
				$i = $('<i>You will play online the content of the torrent-file in its original quality</i>');
				$td2.append($span).append('<br/>').append($i);
				
				$tr.append($td1).append($td2);
				$(this).parent().parent().parent().after($tr);
			});	
			*/
        }
});

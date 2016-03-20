magicplayer.addHandler("kinsburg", function(features) {
    GM_log("start kinsburg: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
        if(canEmbed()) {
			$('a[href^="/download/torrent/"]').each(function(e) {
				var url = $(this).attr('href'); 
					
				$a = $('<a href="#" class="kinsburg"></a>').click(function(e) {
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							downloadTorrent: true,
							data: "http://kinsburg.ru" + url
					});
				});
				$(this).before($a);
			});
        }
});
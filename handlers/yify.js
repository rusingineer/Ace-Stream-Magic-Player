magicplayer.addHandler("yify", function(features) {
    GM_log("start yify: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			$('a[href^="http://yts.re/download/"]').each(function(e) {
				var url = $(this).attr('href');
				if($(this).hasClass('std-btn-small')) {
					$a = $('<a href="#" class="yify std-btn-small"><b class="img"></b>P2P Online <span></span></a>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: url,
								downloadTorrent: true
						});
					});
					$(this).after($a);
				}
				else if($(this).hasClass('std-btn')) {
					$a = $('<a href="#" class="yify std-btn"><b class="img"></b>P2P Play Online<span></span></a>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: url,
								downloadTorrent: true
						});
					});
					$(this).after($a);
				}
			});
        }
});

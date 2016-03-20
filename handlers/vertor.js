magicplayer.addHandler("vertor", function(features) {
    GM_log("start vertor: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return false;
        }
        
        if(canEmbed()) {
            $('a[href^="/download?id="]').each(function(e) {
				var url = $(this).attr('href');
				if($(this).parent().hasClass("ico")) {
					var cat = $(this).parent().parent().html();
					if(!/cat\/(1|5|6|8)(\D|$)/.test(cat)) {
						return true;
					}
					$a = $('<a href="#" class="watch_vertor vertor"><span class="img"></span></a>').click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: 'http://vertor.eu' + url
						});
					});
					$(this).after($a);
				} else if(/torrent/.test($(this).html())) {
					var cat = $('#content ul.place').html();
					if(!/(movies)/.test(cat)) {
						return true;
					}
					$li = $('<li class="vertor bt"></li>');
					$a = $('<a href="#">P2P Online</a>').click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: url,
								useTsButton: true
						});
					});
					$text = $('<span>play online in the original quality</span>');
					$button = $('<div id="torrentstream-button" class="button45"><div class="rotate"></div></div>');
					$a.append($button);
					$li.append($a).append("<br/>").append($text);
					$(this).parent().after($li);
				}
			});
        }
});

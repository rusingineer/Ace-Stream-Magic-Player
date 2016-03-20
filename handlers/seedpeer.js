magicplayer.addHandler("seedpeer", function(features) {
    GM_log("start seedpeer: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            $('a[href^="/download/"]').each(function(e) {
				var url = $(this).attr('href');
				var cat = $('#subtext').html();
				if(!/browse.html#(1|6|3|2)(\D|$)/.test(cat)) {
					return true;
				}
				if(/rar/i.test(url)) {
					return true;
				}
				$div = $('<div class="seedpeer"></div>');
				$a = $('<a href="'+ url +'" class="watch_seedpeer"></a>').click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://www.seedpeer.me"+url,
							downloadTorrent: true,
							crossDomainDownload: false,
                            useTsButton: true
                    });
				});
				$button = $('<div id="torrentstream-button" class="button60"><div class="rotate"></div></div>');
				$span = $('<span class="spanDownload">P2P Online</span>');
				$a.append($button).append($span);
				
				$divInner = $('<div class="dTSub"><span class="normalText">You will play online the content of the torrent-file in its original quality</span></div>');
				
				$div.append($a).append($divInner);
				
				$(this).parent().after($div);
			});
        }
});

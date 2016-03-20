magicplayer.addHandler("torrents", function(features) {
    GM_log("start torrents: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="down/"]').each(function(){
				var url = $(this).attr("href");
				var upper = $(this).parent().parent().parent().parent().parent();
				var head = upper.find("div.table-heading").html();
				if(/Category/.test(head)) {
					var cat = $(this).parent().parent().html();
				} else {
					var cat = upper.html();
				}
				if(!/Television|Movies|Music|Anime/.test(cat)) {
					return true;
				}
				$a = $('<a href="#" class="watch_torrents torrentsNet"><span class="img"></span></a>', d).click(function(e){
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: "http://www.torrents.net/"+url
					});
				});
				$(this).after($a);
			});	
			
			$('a[href^="http://www.torrents.net/down/"]').each(function(){
				var url = $(this).attr("href");
				var cat = $(this).parent().html();
				if(!/Singles|wma|dvdscr|dvdrip|album|Videos|avi|Movie|TCRip|XviD|Mp3|flac|mp4|HD|DVDSCREENER|MaxSpeed|BluRay/i.test(cat)) {
					return true;
				}
				$text = $('<b>P2P Online</b><span>Play online in the original quality</span>', d);
				$a = $('<a href="#" class="watch_torrents torrentsNet btn2-download"></a>', d).click(function(e){
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: url,
							useTsButton: true
					});
				});
				$a.append($text);
				$(this).before($a);
			});	
        }
});

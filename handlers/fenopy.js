magicplayer.addHandler("fenopy", function(features) {
    GM_log("start fenopy: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            $('img[alt="Download this file with Torrent"]').each(function(e) {
				
				var cat1 = $(this).parent().parent().parent().parent().parent().prev().html();
				var cat2 = $(this).parent().parent().parent().html();
				if(!/(Movie|Music|TV Shows|Anime|Video)/i.test(cat1) && !/(Movies|Music|TV Shows|Anime|Videos)(\b)/i.test(cat2)) {
					return true;
				}
				var reg = /location\.href='([^']+)'/.exec($(this).parent().parent().html());
				var url = reg[1];
				var a = $(this).parent();
				$a = $('<a href="#" class="watch_fenopy fenopy"><img class="ttip" alt="Play online in the original quality" src="http://torrentstream.org/extension/img/new/ts_16.png"></a>').click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://fenopy.se"+url
                    });
				});
				$(this).parent().after($a);
			});
			if(/watch_fenopy/.test($('#search_table').html())) {
				$('th[width="78"]').attr({width:"93"});
			}
			
			$('div.main_bt a').each(function() {
				if(!/Movie|Music|TV Shows|Anime|Video/i.test($('#breadcrumb').html())) {
					return true;
				}
				
				var cat = $(this).attr('href');
				if(/torcache.net\/torrent\//.test(cat)) {
					var url = window.location.href;
					$a = $('<a href="#" class="watch_fenopy bt ttip fenopy"><span class="img"></span> Play Online</a>').click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: url+'==/download.torrent'
						});
					});
					$(this).after($a);
				}
				else if(/\/torrent\//.test(cat)) {
					var url = $(this).attr('href');
					$a = $('<a href="#" class="watch_fenopy bt ttip fenopy"><span class="img"></span> Play Online</a>').click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://fenopy.se"+url
						});
					});
					$(this).after($a);
				}
			});
        }
});
magicplayer.addHandler("hilm", function(features) {
    GM_log("start hilm: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="/tfiles/download/"]', d).each(function(e) {
				var url = $(this).attr('href');
				$a = $('<a href="#" class="watch_hilm hilm"><span></span>Смотреть</a>', d).click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://www.hilm.ru"+url
                    });
				});
				$(this).after($a);
			});
        }
});

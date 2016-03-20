magicplayer.addHandler("torrentzap", function(features) {
    GM_log("start torrentzap: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="/download/"]', d).each(function(e) {
				var url = $(this).attr('href');
				if($(this).parent().hasClass("downbuts")) {
					var cat = $(this).parent().parent().html();
					if(!/Movies|Anime|Music|TV shows|Audio/.test(cat)) {
						return true;
					}		
					$a = $('<a href="#" class="watch_torrentzap torrentzapDown"><span class="img"></span></a>', d).click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://torrentzap.com"+url
						});
					});
					$text = $('<span class="text">P2P Play Online</span>', d);
					$a.append($text);
					$(this).before($a);
					$a.after('<br/>');
				} else if($(this).parent().is("td")) {
					var cat = $(this).parent().parent().parent().parent().parent().prev().html();
					if(!/Movies|Anime|Music|TV shows|Audio/.test(cat)) {
						return true;
					}
					$a = $('<a href="#" class="watch_torrentzap torrentzap"><span class="img"></span></a>', d).click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://torrentzap.com"+url
						});
					});
					$(this).parent().prepend($a);
				}
			});
        }
});

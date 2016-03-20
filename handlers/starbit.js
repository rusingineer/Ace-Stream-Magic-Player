magicplayer.addHandler("starbit", function(features) {
    GM_log("start starbit: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			$('a[href^="download.php?id="]:first').each(function(e) {
				var cat = $('td.nav.w100').html();
				if(!/f=(2|34|10|16|22|29|65|42|48|57|93|53|100|107|114|71|77|87|210|121|133|150|157|172|180|187|395|371|390)[^\d]+/.test(cat)) {
					return true;
				}
			
				var url = $(this).attr('href');
				$a = $('<a href="#" class="genmed starbit" alt="Воспроизвести онлайн"></a>').click(function(e) {
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
                            dataType: 'torrentUrl',
                            data: "http://starbit.org/"+url,
							downloadTorrent: true
                    });
				});
				$(this).after($a);
			});
        }
});

magicplayer.addHandler("torrent73", function(features) {
    GM_log("start torrent73: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			$('.title a[href^="http://torrent73.ru/load"]').each(function(e) {						
				var cat = $('#container div.full3:first').html();
				if(!/load\/(45|48|55|51)/.test(cat)) {
					return true;
				}
					
				var url = $(this).attr('href');
				
				$div1 = $('<div class="full17" style="margin: 7px 0;"></div>');
				$div2 = $('<div class="full18"></div>');
				$div3 = $('<div class="title"></div>');
				$a = $('<a href="#"><div class="info_c"></div></a>').click(function(e) {
					e.preventDefault();
					TorrentStream.Utils.showPopupPlayer({
						dataType: 'torrentUrl',
						data: url,
						downloadTorrent: true
					});
				});
				$btn = $('<div class="torrent73"></div>');
				$text = $('<div class="info_d"><div class="info_d1">Воспроизвести онлайн в оригинальном качестве</div></div>');
				$a.append($btn).append($text);
				$div3.append($a);
				$div2.append($div3);
				$div1.append($div2);
				$(this).parent().parent().parent().after($div1);
				
				$('.full13').css({'height':'230px'});
				$('.full14').css({'min-height':'200px'});
				$('.full15').css({'height':'50px'});
			});
        }
});
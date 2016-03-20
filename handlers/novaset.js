magicplayer.addHandler("novaset", function(features) {
    GM_log("start novaset: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			$('a[href^="download.php?id="]').each(function(e) {
				var url = $(this).attr('href');
				var login = $('#header').html();
				
				
				var cat = $(".b-content td.header:contains('Категория')").parent().html();
				if(!/(DVD-R|HDTV|Documentary|XviD|Anime|TV|Blu-Ray|BG audio|Sport|x264|BgAnime|Russian|Bike Show|FLAC|DTS|PopFolk mp3|DVD Music|Mp3|Music Video|Audio|ТV- BG. Audio)/.test(cat)) {
					return true;
				} 
				$tr = $('<tr><td class="header" align="right">P2P Online</td></tr>');
				$td = $('<td class="lista novaset" align="left" valign="top" style="text-align:left;"></td>');
				$text = $('<span class="text">Play online in the original quality</span>');
				if(/login/.test(login)) {
					var href = $('#welcome a[href="/login"]').attr('href');
					$a = $('<a href="#" class="style5 watch_novaset"><span class="img"></span></a>').click(function(e) {
						e.preventDefault();
						var height = $('body').height();
						$alert = $(
							'<div class="ts-overlay"></div>'+
							'<div class="ts-alert">'+
							'<a href="#" class="ts-close" onClick="window.location.reload()"></a>'+
							'<span class="red">Attention!</span>'+
							'You need to login into the site to start the player.'+
							'</div>'
						);
						$('body').prepend($alert);
						var left = ($('body').width() - $('.ts-alert').width())/2;
						var top = ($(window).height() - $('.ts-alert').height())/2;
						$('.ts-alert').css({'left':left,'top':top});
					});
					
				}
				else {
					$a = $('<a href="#" class="style5 watch_novaset"><span class="img"></span></a>').click(function(e) {
						e.preventDefault(); 
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: "http://www.novaset.net/"+url,
								downloadTorrent: true
						});
					});
				}
				$a.prepend($text);
				$td.append($a);
				$tr.append($td);
				$(this).parent().parent().after($tr);
			});
        }
});

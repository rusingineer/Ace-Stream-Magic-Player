magicplayer.addHandler("masters-tb", function(features) {
    GM_log("start masters-tb: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
		
        if(canEmbed()) {
			$('table.mainouter a').each(function(e){
				var url = $(this).attr('href');
				
				if($(this).hasClass('index') && /download.php/.test(url)) {
					if($(this).children().is('img')) {
						magicplayer.log("URL >>> ");
						
						var cat = $(this).parent().parent().find('a[href^="browse.php?cat="]').attr('href');
						$td = $('<td></td>');
						var button = magicplayer.renderButton({
							button: {
								style: "small-16",
								playPadding: 5,
							},
							dataType: 'torrentUrl',
							data: "http://masters-tb.com/" + url,
							downloadTorrent: true
						});
						$(button).addClass('fixed masters-tb-a');
						
						if(/(23|6|12|33|52|35|7|32|55|36|28|34|20|37|30|19|29|54)/.test(cat)) {
							$td.append(button);
							$(this).parent().after($td);							
						}
						else {
							$(this).parent().after($td);
						} 
					}
					else {
						var cat = $(this).parent().parent().parent().html();
						var reg = new RegExp("Филми|Анимации|Музика|Сериали|TV Show");
						if(!reg.test(cat)) {
							return true;
						}
						$tr = $('<tr><td class="rowhead" width="1%">P2P Online</tr>');
						$td = $('<td class="rowhead masters-tb"></td>');
						var button = magicplayer.renderButton({
							button: {
								style: "text",
								caretPosition: "left",
								caretPadding: 10,
								text: "Play online the torrent file in its original quality",
							},
							dataType: 'torrentUrl',
							data: "http://masters-tb.com/" + url,
							downloadTorrent: true
						});
						$(button).addClass('fixed');
						
						$td.append(button);
						$tr.append($td);
						$(this).parent().parent().after($tr);
					}
				}
			});
			
			if(/masters-tb-a/.test($('body').html())) {
				$('td.colhead:contains("DL")').after('<td class="colhead">P2P</td>');
			}
        }
});
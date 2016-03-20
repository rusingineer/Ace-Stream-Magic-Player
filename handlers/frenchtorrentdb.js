magicplayer.addHandler("frenchtorrentdb", function(features) {
    GM_log("start frenchtorrentdb: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
        if(canEmbed()) {
			$('a[href^="/?section=DOWNLOAD&id="]').each(function(e) {
				var url = $(this).attr('href'); 
				
				if($(this).hasClass('dl_link')) {
					var cat = $(this).parent().html();
					if(!/parent_cat_id=(4|5|7|22|23|29|31|12|36|13|37|39|42|43|16|2|21|30|10|20|44|1)(\D|$)/.test(cat)) {
						return true;
					}
					
					$a = $('<a href="#" class="dl_link frenchtorrentdb"><span class="img"></span>P2P Online</a>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								downloadTorrent: true,
								data: "http://www.frenchtorrentdb.com" + url
						});
					});
					$(this).after($a);
					$(this).parent().next().css({'padding-top':'20px'})
				}
				else if($(this).parent().hasClass('torrents_download')) {
					var cat = $(this).parent().parent().html();
					if(/parent_cat_id=(4|5|7|22|23|29|31|12|36|13|37|39|42|43|16|2|21|30|10|20|44|1)(\D|$)/.test(cat)) {
						$a = $('<li class="frenchtorrentdb"><span class="img"></span></li>').click(function(e) {
							e.preventDefault();
							TorrentStream.Utils.showPopupPlayer({
									dataType: 'torrentUrl',
									downloadTorrent: true,
									data: "http://www.frenchtorrentdb.com" + url
							});
						});
					}
					else {
						$a = $('<li class="frenchtorrentdb"></li>');
					}
					
					$(this).parent().after($a);
					
					$(this).parent().prev().css({'width':'25px'});
				}
			});
			
			if(/frenchtorrentdb/.test($('body').html())) {
				$('.data_head span:contains("DL")').after('<span>P2P</span>');
				$('.data_head span:contains("DL")').prev().css({'width':'25px'});
			}
        }
});
magicplayer.addHandler("nyaa", function(features) {
    GM_log("start nyaa: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
	
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
		function hideMP() {
			if($('th.tlistplay:contains("P2P")').size()) {
				$('th.tlistplay:contains("P2P")').each(function() {
					$('th.tlistthtwo').css({'width':'52%'});
					$(this).remove();
				});
			}
		}
        
        if(canEmbed()) {
            $('a[href^="https://www.nyaa.eu/?page=download"]').each(function(e) {
				var url = $(this).attr('href');
				if($(this).parent().hasClass('viewdownloadbutton')) {
					if(!/Anime|Lossy Audio|Lossless Audio|Live Action/i.test($('.viewcategory a').html())) {
						return true;
					}
					if(/rar|zip|iso/i.test($('table.viewtable').html())) {
						return true;
					}
					$div = $('<div class="viewdownloadbutton awe-nyaa"></div>');
					var button = magicplayer.renderButton({
							button: {
								style: "text",
								caretPosition: "left",
								caretPadding: 10,
								text: "Play online",
								title: "Play online"
							},
							dataType: 'torrentUrl',
							data: url
					});
					
					$div.append(button);
					$(this).parent().after($div);
				} else if($(this).parent().hasClass('tlistdownload')) {
					if(!/Anime|Lossy Audio|Lossless Audio|Live Action/i.test($(this).parent().parent().find('.tlisticon a').attr('title'))) {
						$(this).parent().after('<td class="blank"></td>');
						return true;
					} else if(/rar|zip|iso/i.test($(this).parent().parent().html())) {
						$(this).parent().after('<td class="blank"></td>');
						return true;
					} else {
						$td = $('<td class="awe-nyaa" align="center"></td>');
						var button = magicplayer.renderButton({
								button: {
									style: "small-16",
									playPadding: 5,
									title: "Play online"
								},
								dataType: 'torrentUrl',
								data: url
						});
						$td.append(button);
						$(this).parent().after($td);
					}
				}
			});
			if($('.awe-nyaa').size()) {
				$('th.tlistthtwo').css({'width':'50%'});
				$('th.tlistththree').after('<th class="tlistplay" align="center">Online</th>');
			}
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

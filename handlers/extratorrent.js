magicplayer.addHandler("extratorrent", function(features) {
    GM_log("start extratorrent: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            return true;
        }
        
		function hideMP() {
			if($('.watch_extratorrent').size()) {
				$('.watch_extratorrent').each(function() {
					$(this).parent().parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
            $('a[href^="/torrent_download/"]:first').each(function(e) {
				var cat = $('td.tabledata1:contains("Category:")').parent().html();
				if(!/Music|Movies|TV|Anime/.test(cat)) {
					return false;
				}
				var url = $(this).attr('href');
				$tr = $('<tr><td class="tabledata1" width="150">P2P Online</td></tr>');
				$td = $('<td class="tabledata0 extratorrent" colspan="2"></td>');
				$button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "Play online in original quality",
				        },
						dataType: 'torrentUrl',
                        data: "http://extratorrent.com"+url.replace("torrent_", "")
				});
				$td.append($button);
				$($button).addClass('fixed');
				$tr.append($td);
				$(this).parent().parent().after($tr);
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});


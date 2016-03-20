magicplayer.addHandler("zlofenix", function(features) {
    GM_log("start zlofenix: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="http://zlotracker.org/download/"]', d).each(function(e) {
			var url = $(this).attr("href");
			var cat = $(this).html();
			if(/torrent.png/.test(cat)) {
				//var inCat = $(this).parent().parent().find("td:first").html();
				var inCat = $(".post_wrap").html();
				if(!/mp3|MP-3|avi|mkv|flv|avc|flac|mpeg4|mpeg-4|mp4|HDTVRip|МР3|BDRip|DVDRip|TV|HDRip|WEBRip/i.test(inCat)) {
					return true;
				}
				var button = magicplayer.renderButton({
				        button: {
				            style: "small",
				            //playPadding: 5,
                            //color: "blue",
                            caretPosition: "left",
                            caretPadding: 7,
                            //text: "Online",
                            title: "Воспроизвести онлайн в оригинальном качестве"
				        },
						dataType: 'torrentUrl',
                        data: url
				});
				$(this).after(button).after('<br/>');
			} else if(/icon_download.gif/.test(cat)) {
				if(!/cat(1|57|15|55|17|18|19|20|21|22|23|24|25|26|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52)(\D|$)/.test($(this).parent().parent().html())) {
					$(this).parent().after("<td></td>");
					return true;
				} else {
					$td = $('<td class="zlofenix"></td>', d);
					var button = magicplayer.renderButton({
				        button: {
				            style: "small-16",
				            playPadding: 3,
                            caretPadding: 5,
				        },
				        dataType: 'torrentUrl',
						data: url
					});
					$td.append(button);
					$(this).parent().after($td);
				}
			}
			});
			
			$(".zlo_table.reborn_table th:contains('DL')", d).after("<th>P2P</th>");
        }
});

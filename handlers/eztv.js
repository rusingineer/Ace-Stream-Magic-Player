magicplayer.addHandler("eztv", function(features) {
    GM_log("start eztv: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            var body = document.body;
            return true;
        }
        
        if(canEmbed()) {
			$('a[href^="https://zoink.ch/torrent"]').each(function(e) {
				var url = $(this).attr('href');
				
				if($(this).parent().hasClass('forum_thread_post')) {
					var button = magicplayer.renderButton({
						button: {
							style: "small-16",
							playPadding: 5,
							caretPadding: 7,
							title: "Play online the torrent file in its original quality",
						},
						dataType: 'torrentUrl',
						data: url
					});
					$(button).addClass('eztv');
					
					$(this).after(button);
				}
				else if($(this).parent().parent().parent().parent().parent().hasClass('episode_left_column')) {
					$title = $('<tr class="awe-title"><td class="section_post_header">Play Online</td></tr>');
					$tr = $('<tr class="awe-button"></tr>');
					$td = $('<td valign="top"></td>');
					var button = magicplayer.renderButton({
						button: {
							style: "text",
                            caretPosition: "left",
							caretPadding: 10,
							text: "Play online",
						},
						dataType: 'torrentUrl',
						data: url
					});
					$(button).addClass('fixed');
					
					$td.append(button);
					$tr.append($td);
					
					$(this).parent().parent().after($tr).after($title);
				}
			});
		}
});

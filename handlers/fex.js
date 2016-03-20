magicplayer.addHandler("fex", function(features) {
    GM_log("start fex: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            var body = document.body;
            return true;
        }
        
        if(canEmbed()) {
			var d = document;
			$('a[href^="/get/"]', d).each(function(e) {
				var title = $(this).attr('title');
				var cutted_title = title.replace(/.+\./, '');
				var format = utils.fileExtension(cutted_title);
				if (format != 0) {
					var $tr = $(this).parent().parent();
					var url = $tr.find('a[href^="/torrent/"]').attr("href");
					if (url) {
						var txtbutton = "";
						if (format == 1)
							txtbutton = "смотреть";
						else if (format == 2)
							txtbutton = "слушать";
						$button = $('<span id="ts-button-icon30"></span>', d);
						$span = $('<span class="r_button_small ex"></span>', d);
						
						var id = url.replace('/torrent/', '')
						var arrHttpSeeds = [];
						$tr.find('a[href^="/load/'+id+'?fs_id="]').each(function() {
								var s = 'http://fex.net' + $(this).attr("href");
								arrHttpSeeds.push(s);
						});
						if(arrHttpSeeds.length == 0) {
							arrHttpSeeds = undefined;
						}
						
						var button = magicplayer.renderButton({
							button: {
								style: "text",
								playPadding: 10,
								caretPadding: 10,
								text: txtbutton,
							},
							dataType: 'torrentUrl',
							data: "http://www.ex.ua" + url
						});
						
						$span.append(button);
						$(this).parent().siblings('td[width="110"]').append($span);
					}
				}
			});
        }
});

magicplayer.addHandler("ex", function(features) {
    GM_log("start ex: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            var body = document.body;
            return true;
        }
        
		function hideMP() {
			if($('.watch_online_exua').size()) {
				$('.watch_online_exua').each(function() {
					$(this).remove();
				});
			}
		}
        
        if(canEmbed()) {
			var d = document;
			$('a[href^="/get/"]', d).each(function(e) {
				var title = $(this).attr('title');
				if(!title) {
					return true;
				}
				
				var ext, type;
				
				// get extension from title
				var matches = (new RegExp('\\.([^\\.]+)$')).exec(title);
				if(matches) {
					ext = matches[1];
					console.log(">>> title=" + title + " ext=" + ext);
					
					type = TorrentStream.Utils.contentTypeByExtension(ext);
				}
				
				if(type === 'video' || type === 'audio') {
					var $tr = $(this).parent().parent();
					var url = $tr.find('a[href^="/torrent/"]').attr("href");
					if (url) {
						var txtbutton = "";
						if (type == 'audio') {
							txtbutton = "слушать";
						}
						else {
							txtbutton = "смотреть";
						}
						$button = $('<span id="ts-button-icon30"></span>', d);
						$span = $('<span class="r_button_small ex"></span>', d);
						
						var id = url.replace('/torrent/', '')
						var httpSeeds = [], getContentId = false;
						$tr.find('a[href^="/load/'+id+'?fs_id="]').each(function() {
								var s = 'http://www.ex.ua' + $(this).attr("href");
								httpSeeds.push(s);
						});
						
						if(httpSeeds.length) {
						    getContentId = true;
						}
						
						var button = magicplayer.renderButton({
							button: {
								style: "text",
								playPadding: 10,
								caretPadding: 10,
								text: txtbutton,
							},
							downloadTorrent: true,
							dataType: 'torrentUrl',
							data: "http://www.ex.ua" + url,
							getContentId: getContentId,
							params: {
								httpSeeds: httpSeeds
							}
						});
						
						$span.append(button);
						$(this).parent().siblings('td[width="110"]').attr({width:'150'}).append($span);
					}
				}
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

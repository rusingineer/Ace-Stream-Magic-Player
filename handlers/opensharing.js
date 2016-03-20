magicplayer.addHandler("opensharing", function(features) {
    GM_log("start opensharing: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        function canEmbed() {
            if (/href="\/(seriali|kino|tv|multiki|anime|audio|animation|serials|music)/.test($('#details', d).html())) {
                    return true;
            }
            return false;
        }
		
		function hideMP() {
			if($('.watch_online_opensharing').size()) {
				$('.watch_online_opensharing').each(function() {
					$(this).parent().remove();
				});
			}
		}
		
        if(canEmbed()) {
			$('img[src="//w30.am15.net/img/ie_img_fix.gif"]').parent().hide();
			var d = document;
			var result = /href="\/(seriali|kino|tv|multiki|anime|audio|animation|serials|music)/.exec($('#details', d).html());
			var txtbutton = "Смотреть";
			
			if (result[1] == "music" || result[1] == "audio")
				txtbutton = "Слушать";
				
			$('a[href^="/download/"]:first', d).each(function(e) {
				var url = $(this).attr('href');
				$div = $('<div class="opensharing"></div>', d);
				$button = magicplayer.renderButton({
				        button: {
				            style: "big",
                            caretPosition: "left",
				        },
				        dataType: 'torrentUrl',
						data: "http://opensharing.org"+url,
						useTsButton: true
				});
				$text = $('<span class="text">'+txtbutton+' онлайн в оригинальном качестве</span>')
				
				$div.append($button).append($text);
				$(this).parent().after($div);
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});
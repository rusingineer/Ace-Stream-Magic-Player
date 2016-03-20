magicplayer.addHandler("lostfilm", function(features) {
    GM_log("start lostfilm: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            var body = document.body;
            return true;
        }
        
		function hideMP() {
			if($('a:contains("P2P play online")').size()) {
				$('a:contains("P2P play online")').each(function() {
					$(this).parent().parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
			var window = document.defaultView;
			$("a[href^='http://tracktor.in/']").each(function(e) {
				var url = $(this).attr('href');
				if(!$(this).parent().is('td')) {
					return true;
				}
				$tr = $('<tr></tr>');
				var button = magicplayer.renderButton({
				        button: {
				            style: "big",
				            playPadding: 5,
				        },
				        dataType: 'torrentUrl',
                        data: url
				});
				$btn = $('<td width="55" align="center"></td>');
				$btn.append(button);
				
				var txt = $(this).parent().html();
				$td = $('<td></td>');
				$a = $('<span style="font-size:18px;font-weight:bold;">Play online</span><br/>');
				$span = $('<span style="font-size:12px;">Смотреть торрент онлайн в оригинальном качестве</span>');
				$td.append($a).append($span);
				$tr.append($btn).append($td);
				$(this).parent().parent().after($tr);
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

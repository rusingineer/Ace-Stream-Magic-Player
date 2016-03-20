magicplayer.addHandler("dontracker", function(features) {
    GM_log("start dontracker: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
		function hideMP() {
			if($('.watch_dontracker').size()) {
				$('.watch_dontracker').each(function() {
					$(this).parent().parent().remove();
				});
			}
		}
		
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="/get/"]', d).each(function(e) {
				if(!/f=(1|2|83|89|224|5|67|49|52|51|152|47|55|167|61)(\D|$)/.test($('td.nav.w100', d).html()))
					return true;
				if(/f=198/.test($('td.nav.w100', d).html()))
					return true;
				var url = $(this).attr('href');
				
				$('table.attach.bordered.med tr.row3 th', d).attr({colspan:"4"});
				$('table.attach.bordered.med tr.row3 td', d).attr({colspan:"4"});
				$td = $('<td width="15%" rowspan="5" valign="top"></td>', d);
				$div = $('<div class="css3 tCenter awe-dontracker"></div>', d);
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            playPadding: 7,
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "Воспроизвести",
                            title: "Воспроизвести онлайн"
				        },
				        dataType: 'torrentUrl',
						data: "http://dontracker.ru"+url,
						downloadTorrent: true
				});
				
				$div.append(button);
				$td.append($div);
				$(this).parent().parent().before($td);
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

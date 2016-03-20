magicplayer.addHandler("rgfootball", function(features) {
    GM_log("start rgfootball: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
		function hideMP() {
			if($('.watch_rgfootball').size()) {
				$('.watch_rgfootball').each(function() {
					$(this).parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="download.php?id="]:first', d).each(function(e) {
				if(/f=(86|43|182|163|166|43)/.test($('td.nav.w100', d).html())) {
					return true;
				}
				var url = $(this).attr('href');
				$('table.attach.bordered.med tr.row3 th', d).attr({colspan:"4"});
				$('table.attach.bordered.med tr.row3 td', d).attr({colspan:"4"});
				$('table.attach.bordered.med th.row7', d).attr({colspan:"4"});
				$('table.attach.bordered.med td[width="70%"]', d).attr({width:"60%"});
				$('table.attach.bordered.med td[rowspan="6"]', d).attr({width:"10%"});
				$('table.attach.bordered.med td[rowspan="6"]', d).attr({rowspan:"5"});
				
				$td = $('<td class="rgfootball tCenter pad_6" width="10%" rowspan="5"></td>', d);
				var button = magicplayer.renderButton({
				        button: {
				            style: "big",
                            caretPadding: 10,
                            title: "Воспроизвести онлайн"
				        },
				        dataType: 'torrentUrl',
						data: "http://rgfootball.net/"+url,
						downloadTorrent: true,
						useTsButton: true
				});
				$td.append(button);
				$(this).parent().after($td);
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

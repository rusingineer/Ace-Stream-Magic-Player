magicplayer.addHandler("free-torrents", function(features) {
    GM_log("start free-torrents: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        function canEmbed() {
			if (/href="indexer\.php\?c=(6|17|4|30|1015|19|28)[^\d+]/.test(document.body.innerHTML)) {
				return true;
			}
            return false;
        }
        
		function hideMP() {
			if($('.watch_freetorrents').size()) {
				$('.watch_freetorrents').each(function() {
					$(this).parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a.genmed[href^="http://dl.free-torrents.org/forum/dl.php?id="]', d).each(function(e) {
				var url = $(this).attr('href');
				$('table.attach.bordered.med tr.row3 th', d).attr({colspan:"4"});
				$('table.attach.bordered.med td[colspan="3"]', d).attr({colspan:"4"});
				$('table.attach.bordered.med td[width="70%"]', d).attr({width:"60%"});
				$('table.attach.bordered.med td[rowspan="6"]', d).attr({width:"10%"});
				$('table.attach.bordered.med td[rowspan="6"]', d).attr({rowspan:"5"});
				
				$td = $('<td class="free-torrents tCenter pad_6" width="10%" rowspan="5"></td>', d);
				
				$button = magicplayer.renderButton({
				        button: {
				            style: "big",
				            playPadding: 10,
				        },
				        dataType: 'torrentUrl',
						data: url,
						downloadTorrent: true,
						useTsButton: true
				});
				$td.append($button);
				$(this).parent().parent().after($td);
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

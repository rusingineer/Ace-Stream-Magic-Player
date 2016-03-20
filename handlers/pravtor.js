magicplayer.addHandler("pravtor", function(features) {
    GM_log("start pravtor: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="download.php?id="]', d).each(function(e) {
				if(!/f=(111|31|32|34|47|61|130|157|158|15|17|19|16|38|87|20|21|22|26|137|40|46|23|24|145|69|70|110|108|126|127|62)(\D|$)/.test($('td.nav.w100', d).html())) {
					return true;
				}
				var url = $(this).attr('href');
				$('table.attach.bordered.med tr.row3 th', d).attr({colspan:"4"});
				$('table.attach.bordered.med th.row7', d).attr({colspan:"4"});
				$('table.attach.bordered.med tr.row3 td', d).attr({colspan:"4"});
				$('table.attach.bordered.med td[width="70%"]', d).attr({width:"55%"});
				$td = $('<td class="pravtor tCenter pad_6" width="15%" rowspan="4"></td>', d);
				
				var button = magicplayer.renderButton({
				        button: {
				            style: "big",
                            caretPadding: 10,
                            title: "Воспроизвести онлайн"
				        },
				        dataType: 'torrentUrl',
						data: "http://pravtor.ru/"+url,
						downloadTorrent: true,
						useTsButton: true
				});
				
				$td.append(button);
				$(this).parent().after($td);
			});
        }
});

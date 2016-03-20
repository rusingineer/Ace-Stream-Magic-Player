magicplayer.addHandler("unionpeer", function(features) {
    GM_log("start unionpeer: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
		function hideMP() {
			if($('#torrentstream-button').size()) {
				$('#torrentstream-button').each(function() {
					$(this).parent().parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
			$('a[href^="/dl.php?t="]').each(function(e) {
				if(!/8|9|18|21|811/.test($('td.nav.w100').html()))
					return true;
				if(/214|848/.test($('td.nav.w100').html()))
					return true;
					
				var url = $(this).attr('href');
				
				$('table.attach.bordered.med tr.row3 th').attr({colspan:"4"});
				$('table.attach.bordered.med tr.row3 td').attr({colspan:"4"});
				$('table.attach.bordered.med tr.row4 th').attr({colspan:"4"});
				$('table.attach.bordered.med tr.row4 td').attr({colspan:"4"});
				$('table.attach.bordered.med td[width="70%"]').attr({width:"60%"});
				$('table.attach.bordered.med td[rowspan="3"]').attr({width:"10%"});
				
				$td = $('<td class="awe-unionpeer tCenter pad_6" width="10%" rowspan="4"></td>');
				var button = magicplayer.renderButton({
				        button: {
				            style: "big",
                            caretPadding: 10,
                            title: "Воспроизвести онлайн"
				        },
				        dataType: 'torrentUrl',
						data: "http://unionpeer.org" + url,
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
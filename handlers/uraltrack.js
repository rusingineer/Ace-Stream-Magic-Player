magicplayer.addHandler("uraltrack", function(features) {
    GM_log("start uraltrack: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            $('a[href^="dl.php?id="]').each(function(e) {
				var cat = $('.nav.w100').html();
				if(!/f=(515|63|64|65|66|69|423|656|94|97|100|141|142|700|724|742|748|224|241|251|257|264|270|281|286|292|297|302|306|197|207|208|212|213|214|215|216|587|218|219|220|222|170|177|184|191|195|385|407)(\D|$)/.test(cat)) {
					return false;
				}
				
				var url = $(this).attr('href');
				$('table.attach.bordered.med tr.row3 th').attr({colspan:"4"});
				$('table.attach.bordered.med tr.row3 td').attr({colspan:"4"});
				$('table.attach.bordered.med tr.row4 th').attr({colspan:"4"});
				$('table.attach.bordered.med tr.row4 td').attr({colspan:"4"});
				$('table.attach.bordered.med td[width="70%"]').attr({width:"60%"});
				$('table.attach.bordered.med td[rowspan="4"]').attr({width:"10%"});
				
				$td = $('<td class="uraltrack tCenter pad_6" width="10%" rowspan="4"></td>');
				var button = magicplayer.renderButton({
				        button: {
				            style: "big",
				            //playPadding: 5,
                            //color: "blue",
                            //caretPosition: "left",
                            caretPadding: 10,
                            //text: "Смотреть онлайн",
                            title: "Воспроизвести онлайн"
				        },
						dataType: 'torrentUrl',
						data: "http://uraltrack.net/"+url,
						downloadTorrent: true
				});
				$td.append(button);
				$(this).parent().after($td);
			});
        }
});
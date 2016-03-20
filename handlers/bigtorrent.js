magicplayer.addHandler("bigtorrent", function(features) {
    GM_log("start bigtorrent: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="/engine/download.php?id="]', d).each(function(e) {
				var url = $(this).attr('href');
				$('table#aka47 tr.row3 td', d).attr({colspan:"4"});
				$('table#aka47 td[width="70%"]', d).attr({width:"60%"});
				$td = $('<td class="bigtorrent gensmall" width="10%" align="center" style="padding: 5px" rowspan="7"></td>', d);
				
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
						data: "http://bigtorrent.org" + url,
						useTsButton: true
				});
				
				$td.append(button);
				$(this).parent().parent().after($td);
				
				var cat = window.location;
				var play = "";
				if(/video/.test(cat)) {
					play = "Смотреть";
				} else {
					play = "Слушать";
				}
				
				var small_button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            playPadding: 5,
                            caretPadding: 10,
                            text: play,
                            title: "Воспроизвести онлайн"
				        },
						dataType: 'torrentUrl',
						data: "http://bigtorrent.org" + url,
						useTsButton: true
				});
				$a = $('<a href="#" class="bigtorrent"></a>');
				
				$a.append(small_button);
				$('a[href="#aka47"]', d).after($a);
			});
        }
});

magicplayer.addHandler("rustorka", function(features) {
    GM_log("start rustorka: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			if (/f=(15|1116|579|18|580|1052|452|39|40|41|189|1225|1226|1227|1252|1081|44|51|659|658|657|1161|656|655|654|650|643|146|151|155|160|169|240|247|254|717|471|478|490|495|669|508|512|516|519|730|523|525|526|668|530|543|549|553|343|1140|1266|1193)[^\d]+/.test($("td.nav.w100").html())) {
				return true;
			}
            return false;
        }
        
		function hideMP() {
			if($('.watch_rustorka').size()) {
				$('.watch_rustorka').each(function() {
					$(this).parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
            var d = document;
			var body = d.body;
			$('a[href^="download.php?id="]', d).each(function(e) {
				var url = $(this).attr('href');
				$('table.attach.bordered.med tr.row3 th', d).attr({colspan:"4"});
				$('table.attach.bordered.med tr.row3 td', d).attr({colspan:"4"});
				$('table.attach.bordered.med tr.row4 th', d).attr({colspan:"4"});
				$('table.attach.bordered.med tr.row4 td', d).attr({colspan:"4"});
				$('table.attach.bordered.med td[width="70%"]', d).attr({width:"60%"});
				$('table.attach.bordered.med td[rowspan="6"]', d).attr({width:"10%"});
				
				$td = $('<td class="rustorka tCenter pad_6" width="10%" rowspan="6"></td>', d);
				var button = magicplayer.renderButton({
				        button: {
				            style: "big",
                            caretPadding: 10,
                            title: "Воспроизвести онлайн"
				        },
				        dataType: 'torrentUrl',
						data: "http://www.rustorka.com/forum/"+url,
						downloadTorrent: true,
						useTsButton: true
				});
				$td.append(button);
				$(this).parent().parent().after($td);
			});
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

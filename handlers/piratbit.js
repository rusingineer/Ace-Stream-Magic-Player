magicplayer.addHandler("piratbit", function(features) {
    GM_log("start piratbit: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			var html = $('.nav.w100').html();
			if (/(19|3|1516|9|13|286|138|139|120|80|79|81|82|431|818|21|22|168|20|24|25|778|51|1292|1359|1358|1341|1342|904|920|936|959|979|988|1003|1018|1027|1042|1156|1166|1181|1196|1205|1215|1225|1069|1086|1106|1122|1132|1140|1326|651|670|671|668|1630|1631)[^\d]+/.test($('.breadcrumb').html())) {
				return true;
			} 
            return false;
        }
        
		function hideMP() {
			if($('.watch_piratbit').size()) {
				$('.watch_piratbit').each(function() {
					$(this).parent().remove();
				});
			}
		}
        
        if(canEmbed()) {
			var login = $('.topmenu form[action="/login.php"]');
			if(!login.size()) {
				$('a[href^="/dl.php?id="]:first').each(function(e) {
					if($(this).hasClass('small')) {
						return true;
					}
					var url = $(this).attr('href');
					$('table.tor.bordered.med th.row8').attr({colspan:"4"});
					$('table.tor.bordered.med tr.row8.tCenter td').attr({colspan:"4"});
					$('table.tor.bordered.med td[width="70%"]').attr({width:"60%"});
					$td = $('<td class="tCenter pad_6 piratbit" width="10%" rowspan="6"></td>');
					var button = magicplayer.renderButton({
				        button: {
				            style: "big",
                            caretPadding: 10,
                            title: "Воспроизвести онлайн"
				        },
				        dataType: 'torrentUrl',
						data: "http://piratbit.net" + url,
						downloadTorrent: true,
						useTsButton: true
					});
					$td.append(button);
					$(this).parent().after($td);
				});
			}
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});
magicplayer.addHandler("tfile", function(features) {
    GM_log("start tfile: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            var body = document.body;
            return true;
        }
		
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="download.php?id="]', d).each(function(){
				if($(this).hasClass('dlb')) {
					var cat = $('a.nav[href="index.php"]', d).parent().html();
					if(/f=(1381|1220|1057|1053|1050|452|378|325|318|283|264|263|262|261|509|260|508|259|258|371|1051|359|357|1250|356|358|734|1052|735|1136|1130|1129|1128|1127|1126|1125|1095|1094|1055|1054|999|792|791|789|788|787|786|785|1135|1134|1124|1123|1122|1121|1120|1072|1096|1330|451|415|416|417|1329|1082|485|1373|1371|1077|1080|1222|281|280|282|1233|1283|844|1006|995|983|991|988|990|993|989|994|1218|1216|1217|715|1327|1326|1325|1233|488|562|483|704|482|480|481|453|489|1338|1337|1335|220|530|221|222|1075|1087|1086|1085|1092|1091|1090|1089|1347|1346|1350|1349|1348|1351|1352|1355|1354|1353|1358|1357|1356|1361|1359|1360|1362|1364|1369|1365|1368|1367|1370|1366)(\d|\b)/.test(cat)) {
						return true;
					}
					
					var txtbutton = "Смотреть";
					if(/f=(1200|1199|1114|1202|1201|1115|1204|1203|1116|1206|1205|474|473|1208|1207|1117|1118|531|504|1214|479|478|477|1213|476|475|315|190|1210|1209|493|1212|1211|1198|503|502|879|1215|1196|1137|1133|1132|1131|794|793|279|1093|1336)(\d|\b)/.test(cat)) {
						txtbutton = "Слушать";
					}
					$('#tdl th:contains("Торрент-файл")', d).after('<th class="Mtfile-th" width="200">'+txtbutton+' онлайн</th>');
					$('#tdl tr:last td:last', d).after('<td></td>');
					
					var url = $(this).attr('href');
					$td = $('<td class="tfile-td"></td>', d);
					var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: txtbutton+" онлайн",
				        },
				        dataType: 'torrentUrl',
						data: "http://tfile.me/forum/"+url,
						downloadTorrent: true
					});
					$(button).addClass('tfile');
					
					$(this).after(button);
				}
			});
        }
});
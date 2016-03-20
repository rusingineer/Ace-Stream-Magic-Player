magicplayer.addHandler("pirat.ca", function(features) {
    GM_log("start pirat.ca: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			if(/f=(786|2307|123|2|964|20|1459|24|26|1443|2402|28|38|1437|926|938|355|42|1452|1880|1883|1881|1906|2336|1849|1850|1851|1852|1854|1855|1856|1857|1858|1859|1860|1861|1868|1879|1884|1887|1888|1889|1890|1895|1863|1864|1865|1866|75)(\D|$)/.test($(".nav.w100").html())) {
				return true;
			}
			return false;
        }
        
        if(canEmbed()) {
            var d = document;
			$('a[href^="download.php?id="]', d).each(function(e) {
				var url = $(this).attr("href");
				$button = $('<span class="img"></span>', d);
				$a = $('<a href="#" title="Воспроизвести онлайн" class="piratca watch"></a>', d).click(function(e) {
					e.preventDefault(); 
					TorrentStream.Utils.showPopupPlayer({
							dataType: 'torrentUrl',
							data: "http://pirat.ca/"+url,
							downloadTorrent: true
					});
				});
				$a.append($button);
				$(this).before($a);
				if(/f=(1880|1883|1881|1906|2336|1849|1850|1851|1852|1854|1855|1856|1857|1858|1859|1860|1861|1868|1879|1884|1887|1888|1889|1890|1895|1863|1864|1865|1866|75)(\D|$)/.test($(".nav.w100").html())) {
					$(".piratca").removeClass("watch");
					$(".piratca").addClass("play");
				}
			});
        }
});

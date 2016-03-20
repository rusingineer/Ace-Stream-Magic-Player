magicplayer.addHandler("rutracker", function(features) {
    GM_log("start rutracker: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var t, $ = TorrentStream.jQuery;

    function canEmbed() {
        var body = document.body;
        if(/viewforum\.php\?f=(7|22|124|511|93|2198|352|4|921|33|46|24|255|1608|2004|2009|9|189|911|2100|395|1263|610|1581|1556|406|409|405|1125|1849|408|1760|416|1215|413|1698|1716|1732|722|1752|1781|1821|1807|1808|1809|1810|1811|1812|2366|2389|2327|2324|2328|2507|2512)/.test(body.innerHTML) && !/\.\/viewforum.php\?f=(705|281|1386)/.test(body.innerHTML)) {
            return true;
        }
        else {
            return false;
        }
    }
        
	function hideMP() {
		if($('.watch_online_rutracker').size()) {
			$('.watch_online_rutracker').each(function() {
				$(this).remove();
			});
		}
	}

    if(canEmbed()) {
		var body = document.body;
        var result = /viewforum\.php\?f=(7|22|124|511|93|2198|352|4|921|33|46|24|255|1608|2004|2009|9|189|911|2100|395|1263|610|1581|1556|406|409|405|1125|1849|408|1760|416|1215|413|1698|1716|1732|722|1752|1781|1821|1807|1808|1809|1810|1811|1812|2366|2389|2327|2324|2328|2507|2512)/.exec(body.innerHTML);
        var aud_arr = new Array('395','1263','406','409','405','1125','1849','408','1760','416','1215','413','1698','1716','1732','722','1752','1821','1807','1808','1809','1810','1811','2389','2327','2324','2328');
        var textbutton;                                      
        
        if ($.inArray(result[1], aud_arr) !== -1) {
            textbutton = "Слушать";
        }
        else {
            textbutton = "Воспроизвести";
        }

        $('tr.row3 td').attr({colspan: "4"});
        $('a[href^="http://dl.rutracker.org/forum/dl.php?t="]:first').each(function(e){
            var url = $(this).attr('href');
            var topicId = url.slice(url.lastIndexOf('=') + 1);
            var self = this;
            $td = $('<td rowspan="4" width="15%" align="center" class="tCenter pad_6"></td>');
			
            /*
			var button = magicplayer.renderButton({
					button: {
						style: "big",
						caretPadding: 10,
						title: "Воспроизвести онлайн"
					},
					dataType: 'torrentUrl',
					data: url,
					downloadTorrent: true,
					useTsButton: true,
			});
			$(button).attr('onmouseover','BB.Cookies.set(\'bb_dl\', '+topicId+', \'SESSION\');')
			$td.append(button);
			*/
			
			if(features.externalPlayers) {
				$a = $('<a href="#" class="dl-link" onmouseover="BB.Cookies.set(\'bb_dl\', '+topicId+', \'SESSION\');">'+textbutton+'</a>').click(function(e) {
					e.preventDefault();
					magicplayer.openInDefaultPlayer({
						dataType: 'torrentUrl',
						data: url,
						downloadTorrent: true,
						useTsButton: true,
						usePost: true
					});
				});
				
				$dropdown = $('<div class="ace-dropdown"><b class="caret"></b></div>').click(function(e) {
					e.preventDefault();
					magicplayer.renderDropdown(this, {
						dataType: 'torrentUrl',
						data: url,
						downloadTorrent: true,
						useTsButton: true,
						usePost: true
					});
				});
				$button = $('<div id="torrentstream-button" class="button30" onmouseover="BB.Cookies.set(\'bb_dl\', '+topicId+', \'SESSION\');"> <div class="rotate"></div></div>');
				$dropdown.prepend($button);
				$td.append($dropdown).append($a);
			}
			else {
				$a = $('<a href="#" class="dl-link" onmouseover="BB.Cookies.set(\'bb_dl\', '+topicId+', \'SESSION\');">'+textbutton+'</a>').click(function(e) {
					e.preventDefault();
					magicplayer.openInDefaultPlayer({
						dataType: 'torrentUrl',
						data: url,
						downloadTorrent: true,
						useTsButton: true,
						usePost: true
					});
				});

				$button = $('<div id="torrentstream-button" class="button45" onmouseover="BB.Cookies.set(\'bb_dl\', '+topicId+', \'SESSION\');"> <div class="rotate"></div></div>').click(function(e) {
					e.preventDefault();
					magicplayer.openInDefaultPlayer({
						dataType: 'torrentUrl',
						data: url,
						downloadTorrent: true,
						useTsButton: true,
						usePost: true
					});
				});
				$td.append($button).append($a);
			}
			
            $('tr.row1:first').append($td);
        });
			
		setTimeout(hideMP, 0);
		setTimeout(hideMP, 500);
		setTimeout(hideMP, 1000);
		setTimeout(hideMP, 5000);
    }
});

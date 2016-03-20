magicplayer.addHandler("opentorrent", function(features) {
    GM_log("start opentorrent: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            var body = document.body;
            if(/f=(15|14|81|210|155|77|722|549|98|58|135|169|16|211|96|97|59|554|555|556|557|558|559|585|589|608|609|610|73|69|36|125|170|218|375|35|215|213|86|85|527|83|263|82|75|409|691)(\d|\b)/.test($('span.nav').html())) {
                return true;
            }
				return false;
        }
        
        if(canEmbed()) {
            $('a[href^="download.php?id="]').each(function(e){
                var url = $(this).attr('href');
                $td = $('<td rowspan="3" class="c3 opentorrent"></td>');
                
				var button = magicplayer.renderButton({
				        button: {
				            style: "big",
                            caretPadding: 10,
                            title: "Воспроизвести онлайн"
				        },
				         dataType: 'torrentUrl',
						data: "http://opentorrent.ru/" + url,
						downloadTorrent: true,
						useTsButton: true
				});
				$(button).addClass('fixed');
                
                $td.append(button);
                $(this).parent().parent().after($td);
            });
			
			$('tr.row3 td[colspan="3"]').attr({colspan:'4'});
			$('tr.row3:last td:last').attr({colspan:'3'});
        }
});
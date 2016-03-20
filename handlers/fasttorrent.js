magicplayer.addHandler("fasttorrent", function(features) {
    GM_log("start fasttorrent: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            var body = document.body;
            return true;
        }
        
		function hideMP() {
			if($('.watch_online_fasttorrent').size()) {
				$('.watch_online_fasttorrent').each(function() {
					$(this).parent().remove();
				});
				$('.upload-header .right.c7').prev().remove();
			}
		}
		
        if(canEmbed()) {
            var d = document;
			$('.upload-header .c1').css({'width':'65px'});
			$('.upload-header .c2').css({'width':'185px'});
			$('.upload-header .c3').css({'width':'62px'});
			$('.upload-header .c4').css({'width':'81px', 'font-size':'85%'});
			$('.upload-header .c5').css({'width':'50px'});
			$('.upload-header .c6').css({'width':'49px', 'font-size':'85%'});
			
			$('.upload1 a[href^="/download/torrent/"]', d).each(function(e) {
				var url = $(this).attr('href');
				$td = $('<div class="c7"></div>', d);
				var button = magicplayer.renderButton({
				        button: {
				            style: "small-16",
				            playPadding: 5,
				        },
				        dataType: 'torrentUrl',
                        data: "http://www.fasttorrent.ru"+url,
                        downloadTorrent: true
				});
				$td.append(button);
				$(this).parent().after($td);
			});
			$('.upload-header .right.c7').text('P2P').before('<div class="c7"></div>');
			
			setTimeout(hideMP, 0);
			setTimeout(hideMP, 500);
			setTimeout(hideMP, 1000);
			setTimeout(hideMP, 5000);
        }
});

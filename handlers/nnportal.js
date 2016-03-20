magicplayer.addHandler("nnportal", function(features) {
    GM_log("start nnportal: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
		
        if(canEmbed()) {
			$('a[href^="./torrent.php?mode=download&t="]:first').each(function(e){
				var url = $(this).attr('href');
				var cat = $('.nav_bar .breadcrumbs').html();
				
				if(!/kino-video-i-tv-f2009|multfilmi-f2497|seriali-f2010|anime-f2011|audioknigi-f9|videouroki-f121|komputernie-videouroki-f2379|sport-f2013|muzika-f2014|elektronnaya-muzika-f2015|mnogokanalnaya-i-lossless-muzika-f2016/.test(cat)) {
					return true;
				}
				if(/art-f1800|manga-f1799/.test(cat)) {
					return true;
				}
				
				if($(this).parent().is('DIV')) {
					var className = $(this).parent().attr('class');
					$div = $('<div class="'+ className +' nnportal"></div>');
					
					var login = $('#mega_menu').html();
					if(/mode=login/.test(login) && !/logout/.test(login)) {
						$a = $('<a href="#"><span class="img"></span><br/><b>P2P Смотреть онлайн</b></a>').click(function(e) {
							e.preventDefault();
							var height = $('body').height();
							$alert = $(
								'<div class="ts-overlay"></div>'+
								'<div class="ts-alert">'+
								'<a href="http://nnportal.org/portal/ucp.php?mode=login" class="ts-close"></a>'+
								'<span class="red">Внимание!</span>'+
								'Чтобы запустить плеер, вам нужно войти в систему.'+
								'</div>'
							);
							$('body').prepend($alert);
							var left = ($('body').width() - $('.ts-alert').width())/2;
							var top = ($(window).height() - $('.ts-alert').height())/2;
							$('.ts-alert').css({'left':left,'top':top});
						});
						$div.append($a);
					}
					else {
						var button = magicplayer.renderButton({
								button: {
									style: "big",
									//playPadding: 5,
									//color: "blue",
									//caretPosition: "left",
									caretPadding: 10,
									//text: "P2P Смотреть онлайн",
									//title: "Воспроизвести онлайн"
								},
								dataType: 'torrentUrl',
								data: "http://nnportal.org/portal" + url.replace('.',''),
								downloadTorrent: true
						});
						//$(button).addClass('nnportal');
						
						$div.append(button);
					}
					
					$(this).parent().after($div);
					$(this).parent().parent().addClass('as-container');
				}
            });
        }
});
magicplayer.addHandler("torrentreactor", function(features) {
    GM_log("start torrentreactor: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			$('a#download-url').each(function(e) {
				var url = $(this).attr('href');
				if($(this).parent().hasClass('btn-group')){
					var button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            //playPadding: 5,
                            //color: "blue",
                            caretPosition: "left",
                            caretPadding: 10,
                            text: "P2P Online",
                            //title: "Воспроизвести онлайн"
				        },
				        dataType: 'torrentUrl',
						data: url
					});
					
					$(this).parent().before(button);
				}
			});
			//$('.buttons-top .btn-220').css({'width':'155px'});
        }
});
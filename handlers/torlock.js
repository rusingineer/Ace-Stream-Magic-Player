magicplayer.addHandler("torlock", function(features) {
    GM_log("start torlock: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
	var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			if(!/Movies|Television|Music|Anime/.test($(".well dl.dl-horizontal:contains('CATEGORY')").html())) {
				return true;
			}
			var d = document;
			$('a[href^="/tor/"]').each(function(e) {
				var url = $(this).attr('href');
				$div = $('<div class="col-md-3 col-sm-3 torlock" style="text-align:center"></div>');
				$button = magicplayer.renderButton({
				        button: {
				            style: "text",
				            //playPadding: 5,
                            //color: "blue",
                            caretPosition: "left",
                            caretPadding: 15,
                            text: "Play",
                            title: "P2P Play Online"
				        },
				        dataType: 'torrentUrl',
						data: "http://www.torlock.com" + url,
						useTsButton: true
				});
				
				$div.append($button);
				$(this).parent().parent().find('.col-md-4').removeClass('col-md-4 col-sm-4').addClass('col-md-3 col-sm-3');
				
				$(this).parent().parent().prepend($div);
			});
        }
});

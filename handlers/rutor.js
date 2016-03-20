magicplayer.addHandler("rutor", function(features) {
    GM_log("start rutor: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
    
    function canEmbed() {
        if((new RegExp('href="\/(seriali|kino|tv|multiki|anime|audio|nashe_kino|jumor|nauchno_popularnoe|sport)"')).test($('#details').html())) {
            return true;
        }
        return false;
    }
	
	function hideMP() {
		if($('.watch_online_rutor').size()) {
			$('.watch_online_rutor').each(function() {
				$(this).parent().remove();
			});
		}
	}
    
    if(canEmbed()) {
        var result = (new RegExp('href="\/(seriali|kino|tv|multiki|anime|audio|nashe_kino|jumor|nauchno_popularnoe|sport)"')).exec($('#details').html());
        var txtbutton = "Смотреть";
        if (result[1] == "audio") {
            txtbutton = "Слушать";
        }
        
        var $newFormat = $('#download a[href^="http://new-rutor.org/parse/d.rutor.org/download/"]');
        var $oldFormat = $('#download a[href^="http://d.rutor.org/download"]');
        var $links, newFormat;
        
        if($newFormat.size()) {
            newFormat = true;
            $links = $newFormat;
        }
        else {
            newFormat = false;
            $links = $oldFormat;
        }
        
        $links.each(function(e){
                var url = $(this).attr('href');
                
                if(newFormat) {
                    $('div.rutor_block').remove();
                }
                
                $div = $('<div></div>').addClass("x-acestream-awe-container").addClass("rutor");
                
                /*
				var button = magicplayer.renderButton({
				        button: {
				            style: "text",
                            caretPosition: "left",
                            caretPadding: 15,
                            text: txtbutton+' онлайн в оригинальном качестве',
				        },
				        dataType: 'torrentUrl',
						data: url,
						useTsButton: true
				});
				$(button).addClass('fixed');
                
                if(newFormat) {
                    $div.html(button);
                }
                else {
                    $div.append(button);
                    $(this).parent().after($div);
                }
                */
                
                if(features.externalPlayers) {
					$dropdown = $('<div class="ace-dropdown"><b class="caret"></b></div>').click(function(e) {
						e.preventDefault();
						magicplayer.renderDropdown(this, {
								dataType: 'torrentUrl',
								data: url,
								useTsButton: true
						});
					})
					$button = $('<div id="torrentstream-button" class="button30"></div>');
					$dropdown.prepend($button);
					
					$link = $('<a href="#">'+txtbutton+' онлайн</a>').click(function(e) {
							e.preventDefault();
							magicplayer.openInDefaultPlayer({
									dataType: 'torrentUrl',
									data: url,
									useTsButton: true
							});							
					});
					
					$a = $('<div id="ace-features"></div>');			
					$a.append($dropdown).append($link);
				}
				else {
					$a = $('<a href="#">'+txtbutton+' онлайн в оригинальном качестве</a>').click(function(e) {
							e.preventDefault();
							TorrentStream.Utils.showPopupPlayer({
									dataType: 'torrentUrl',
									data: url,
									useTsButton: true
							});							
					});
					$button = $('<div id="torrentstream-button" class="button45"><div class="rotate"></div></div>');
					$a.prepend($button);
				}
				
				if(newFormat) {
                    $div.html($a);
                }
                else {
                    $div.append($a);
                    $(this).parent().after($div);
                }
                
                // insert button only once
                return false;
        });
		
		setTimeout(hideMP, 0);
		setTimeout(hideMP, 500);
		setTimeout(hideMP, 1000);
		setTimeout(hideMP, 5000);
    }
});


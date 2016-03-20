magicplayer.addHandler("arenabg", function(features) {
    GM_log("start arenabg: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
			return true;
        }
        
        if(canEmbed()) {
			var cat = $('table.table-details').html();
			if(!/torrents\/type:(movies|music)/.test(cat)) {
				return true;
			} 
			
			$('a.btn-block[href^="/download/"]').each(function(e) {
				var url = $(this).attr('href');
				$row = $('<div class="row"></div>');
				if(features.externalPlayers) {
					$features = $('<div id="ace-features" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 arena_12 ace-arenabg"></div>');
					$dropdown = $('<span class="ace-dropdown"><i class="ts-24"></i><b class="caret"></b></span>').click(function(e) {
						e.preventDefault();
						magicplayer.renderDropdown(this, {
								dataType: 'torrentUrl',
								data: 'http://arenabg.ch' + url,
								downloadTorrent: true
						});
					});
					
					$link = $('<a href="#"><span>Play online content in original quality</span></a>').click(function(e) {
						e.preventDefault();
						magicplayer.openInDefaultPlayer({
								dataType: 'torrentUrl',
								data: 'http://arenabg.ch' + url,
								downloadTorrent: true
						});
					});
					$features.append($dropdown).append($link);
					$row.append($features);
				} else {
					$col = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 arena_12 ace-arenabg"></div>');
					$a = $('<a href="#" class="download-button btn btn-arena mb5 btn-block" alt=""><i class="ts-24"></i><span>Play online content in original quality</span></a>').click(function(e) {
						e.preventDefault();
						TorrentStream.Utils.showPopupPlayer({
								dataType: 'torrentUrl',
								data: 'http://arenabg.ch' + url,
								downloadTorrent: true
						});
					});
					$col.append($a);
					$row.append($col);
				}
				$(this).parent().parent().after($row);
			});
        }
});

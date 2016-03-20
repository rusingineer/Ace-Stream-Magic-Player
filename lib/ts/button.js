(function() {
		var $ = TorrentStream.jQuery,
            _degree = 0;
            _timer = null,
            doc = document;
        
        function ts_button_stop_progress(doc) {
            if (_timer) {
                clearInterval(_timer);
                _timer = null;
            }
        }
		
		function bindHover() {
            $('#torrentstream-button .rotate', doc).hover( 
                function() {
                    if (_timer === null) {
						_timer = setInterval(function() {
								++_degree;
								var srotate = "rotate(" + _degree + "deg)";
								$('#torrentstream-button .rotate', doc).css({'-moz-transform': srotate, '-webkit-transform': srotate, '-o-transform': srotate, '-ms-transform': srotate, 'transform': srotate});
						}, 1);
					}
                },
                function() { 
                    ts_button_stop_progress(doc);
                }
                );
        };
        
        TorrentStream.Button = {
			init: function(){  
                TorrentStream.Utils.log("tsbutton:init");
            },
			
            start: function() {
                if (_timer === null) {
                    _timer = setInterval(function() {
                            ++_degree;
                            var srotate = "rotate(" + _degree + "deg)";
                            $('#torrentstream-button .rotate', doc).css({'-moz-transform': srotate, '-webkit-transform': srotate, '-o-transform': srotate, '-ms-transform': srotate, 'transform': srotate});
                    }, 1);
                }
            },
            
            stop: function() {
                ts_button_stop_progress(doc);
                _degree = 0;
                $('#torrentstream-button .rotate', doc).css({'-moz-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)', '-o-transform': 'rotate(0deg)', '-ms-transform': 'rotate(0deg)', 'transform': 'rotate(0deg)'});
            }
        };
        /*
        var $ = TorrentStream.jQuery,
            _degree = 0;
            _timer = null,
            doc = document;
        
        function ts_button_stop_progress(doc) {
            if (_timer) {
                clearInterval(_timer);
                _timer = null;
            }
        }
        
        function bindHover() {
            $('#torrentstream-button .button', doc).hover( 
                function() {
                    $('#torrentstream-button .button .play', doc).addClass('hover'); 
                },
                function() { 
                    $('#torrentstream-button .button .play', doc).removeClass('hover'); 
                }
                );
        };
        
        TorrentStream.Button = {
            init: function(){  
                TorrentStream.Utils.log("tsbutton:init");
                bindHover(doc);
                
                $("#torrentstream-button .button", doc).bind('mousedown', function() {
                        $(this).bind('mouseleave', function() {
                                $(this).unbind('mouseleave');
                                bindHover(doc);
                        });
                });
                
                $("#torrentstream-button .button", doc).bind('mouseup', function() {
                        $(this).unbind('mouseleave');
                        bindHover(doc);
                });
            },
            
            start: function() {
                if (_timer === null) {
                    $("#torrentstream-button", doc).addClass( "play" ).css('background-color', '#000');
                    _timer = setInterval(function() {
                            ++_degree;
                            var srotate = "rotate(" + _degree + "deg)";
                            $('#torrentstream-button .progress', doc).css({'-moz-transform': srotate, '-webkit-transform': srotate, '-o-transform': srotate, '-ms-transform': srotate, 'transform': srotate});
                    }, 25);
                }
            },
            
            stop: function() {
                $("#torrentstream-button", doc).removeClass( "play" ).css('background-color', '#3399CC');
                
                ts_button_stop_progress(doc);
                _degree = 0;
                $('#torrentstream-button .progress', doc).css({'-moz-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)', '-o-transform': 'rotate(0deg)', '-ms-transform': 'rotate(0deg)', 'transform': 'rotate(0deg)'});
                $('#torrentstream-button .circle', doc).removeClass( "rotate" );
            }
        };
		*/
})();
magicplayer.addHandler("goldenshara", function(features) {
    GM_log("start goldenshara: features=" + JSON.stringify(features));
    magicplayer.loadPackage("ts-white-screen");
    
    var $ = TorrentStream.jQuery;
        
        function canEmbed() {
            /*if (/viewforum\.php\?f=(944|945|688|4|2|958|5|941|723|727|749|728|722|748|637|636|685|6|689|718|717|227|243|259|322|323|59|324|325|326|327|328|329|330|44|60|454|455|456|457|51|530|531|57|532|533|534)[^\d]+/.test($(".nav.w100").html())) {
                    return true;
            }*/
            return true;
        }
		
        if(canEmbed()) {
			$('a[href^="download.php?id"]').each(function(e) {
				var cat = $("table.w100").html();
				var reg = new RegExp("Кино|Фильмы|Релизы R.G. GoldenShara|Эротика|Киношлягеры СССР|Трейлеры|В гостях у сказки|Мультфильмы|Аниме|Сериалы производства СНГ|Зарубежные сериалы|Развлекательные телепередачи и шоу, приколы и юмор|Документальные фильмы и телепередачи|Спортивные фильмы и телепередачи|Аудиокниги|Обучение иностранным языкам|Видеоуроки и обучающие интерактивные DVD|Боевые искусства (Видеоуроки)|Компьютерные видеоуроки и обучающие интерактивные DVD|Джаз и Блюз|Классическая музыка|Поп музыка, Eurodance, Disco|Фольклор, Народная и Этническая музыка|New Age, Relax, Meditative & Flamenco|Рэп, Хип-Хоп, R'n'B|Reggae, Ska, Dub|Саундтреки и Караоке|Шансон, Авторская и Военная песня|Музыка других жанров|Trance, Goa Trance, Psy-Trance, PsyChill, Ambient Dub,Drum & Bass, Jungle, Breakbeat|House, Techno, Hardcore, Hardstyle, Jumpstyle|Drum & Bass, Jungle, Breakbeat, Dubstep, IDM|Chillout, Lounge, Downtempo, Trip-Hop|Traditional Electronic, Ambient, Experimental|Industrial, Noise, EBM, Dark Electro, Aggrotech, Synthpop, New Wave|Электронная музыка (Видео, DVD , HD Video)|Зарубежный Rock|Зарубежный Metal|Зарубежные Alternative, Punk, Independent|Отечественный Рок|Многоканальная музыка и собственные оцифровки (Рок)|Видео, DVD Video, HD Video (Рок-музыка)", "i");
				if(!reg.test(cat)) {
					return true;
				}
				
				var url = $(this).attr('href');
				if (url != null) {
					$button = magicplayer.renderButton({
				        button: {
				            style: "big",
                            caretPadding: 10,
				        },
				        dataType: 'torrentUrl',
						data: location.protocol + "//" + location.host + "/" + url,
						downloadTorrent: true
					});
					$($button).addClass('fixed');
					$(this).before($button).before('<hr>');
				}
			});
        }
});

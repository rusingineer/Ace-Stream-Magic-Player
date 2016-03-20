var magicplayer = {
    handlers: {},
    addHandler: function(name, handler) {
        magicplayer.handlers[name] = handler;
    }
};

magicplayer.script_map = [
	{
	    hpattern: '^http(s)?://([^\\.]+\\.)?(new-rutor|rutor)\\(.org|.info|.is)',
        pattern: '^http(s)?://([^\\.]+\\.)?(new-rutor|rutor)\\(.org/torrent/|.info/torrent/|.is/torrent/)\\d+',
        handler: 'rutor'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?rutracker\\.org',
        pattern: '^http(s)?://([^\\.]+\\.)?rutracker\\.org/forum/viewtopic\\.php\\?t=\\d+',
        handler: 'rutracker',
    },
    {
        pattern: '^http(s)?://([^\\.]+\\.)?tfile\\.me/forum/viewtopic\\.php\\?t=\\d+',
        handler: 'tfile'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?opensharing\\.org',
        pattern: '^http(s)?://([^\\.]+\\.)?opensharing\\.org/torrent/\\d+',
        handler: 'opensharing'
    },
    {
        pattern: '^http(s)?://([^\\.]+\\.)?hq-video\\.org',
        handler: 'hq-video'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?fasttorrent\\.ru',
        pattern: '^http(s)?://([^\\.]+\\.)?fasttorrent\\.ru/film/[\\s\\S]+\\.html',
        handler: 'fasttorrent'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?fast-torrent\\.ru',
        pattern: '^http(s)?://([^\\.]+\\.)?fast-torrent\\.ru/film/[\\s\\S]+\\.html',
        handler: 'fast-torrent'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?mediastore\\.in\\.ua',
        pattern: '^http(s)?://([^\\.]+\\.)?mediastore\\.in\\.ua/details\\.php\\?id=\\d+',
        handler: 'mediastore'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?goldenshara\\.(org|com|net)',
        pattern: '^http(s)?://([^\\.]+\\.)?goldenshara\\.(org|com|net)/viewtopic\\.php\\?t=\\d+',
        handler: 'goldenshara'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?ex\\.ua',
        pattern: '^http(s)?://([^\\.]+\\.)?ex\\.ua/(view/)?\\d+',
        handler: 'ex'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?fex\\.net',
        pattern: '^http(s)?://([^\\.]+\\.)?fex\\.net\\/view\\/\\d+',
        handler: 'fex'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?kinozal\\.tv',
        pattern: '^http(s)?://([^\\.]+\\.)?kinozal\\.tv/details\\.php\\?id=\\d+',
        handler: 'kinozal'
    },
	/*
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?kickass\\.unblocked\\.la',
        pattern: '^http(s)?://([^\\.]+\\.)?kickass\\.unblocked\\.la',
        handler: 'kat'
    },
	*/
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?extratorrent\\.(com|cc)',
        pattern: '^http(s)?://([^\\.]+\\.)?extratorrent\\.(com|cc)/torrent/\\d+',
        handler: 'extratorrent'
    },
	/*
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?torrentreactor\\.(net|com)',
        pattern: '^http(s)?://([^\\.]+\\.)?torrentreactor\\.(net|com)',
        handler: 'torrentreactor'
    },
	*/
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?torrentdownloads\\.',
        pattern: '^http(s)?://([^\\.]+\\.)?torrentdownloads\\.',
        handler: 'torrentdownloads'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?eztv\\.(it|ag)',
        pattern: '^http(s)?://([^\\.]+\\.)?eztv\\.(it|ag)',
        handler: 'eztv'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?tracker\\.0day\\.kiev\\.ua',
        pattern: '^http(s)?://([^\\.]+\\.)?tracker\\.0day\\.kiev\\.ua',
        handler: 'oday'
    },
	/*
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?demonoid\\.me(:8888)',
        pattern: '^http(s)?://([^\\.]+\\.)?demonoid\\.me(:8888)?/files/details/\\d+',
        handler: 'demonoid'
    },
	*/
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?nnm-club\\.me',
        pattern: '^http(s)?://([^\\.]+\\.)?nnm-club\\.me',
        handler: 'nnm'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?retre\\.org',
        pattern: '^http(s)?://([^\\.]+\\.)?retre\\.org',
        handler: 'lostfilm'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?novafilm\\.tv',
        pattern: '^http(s)?://([^\\.]+\\.)?novafilm\\.tv/(show|torrent|do/browse)',
        handler: 'novafilm'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?kinokopilka\\.tv',
        pattern: '^http(s)?://([^\\.]+\\.)?kinokopilka\\.tv/movies/\\d+',
        handler: 'kinokopilka'
    },
	/*
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?torrents\\.net',
        pattern: '^http(s)?://([^\\.]+\\.)?torrents\\.net',
        handler: 'torrents'
    },
	*/
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?torrents\\.net\\.ua',
        pattern: '^http(s)?://([^\\.]+\\.)?torrents\\.net\\.ua',
        handler: 'torrents.net'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?uniongang\\.tv',
        pattern: '^http(s)?://([^\\.]+\\.)?uniongang\\.tv/details\\.php\\?id=\\d+',
        handler: 'uniongang'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?torrentsmd\\.com',
        pattern: '^http(s)?://([^\\.]+\\.)?torrentsmd\\.com/details\\.php\\?id=\\d+',
        handler: 'torrentsmd'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?hdclub\\.org',
        pattern: '^http(s)?://([^\\.]+\\.)?hdclub\\.org/details\\.php\\?id=\\d+',
        handler: 'hdclub.org'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?yourbittorrent\\.com',
        pattern: '^http(s)?://([^\\.]+\\.)?yourbittorrent\\.com/torrent/\\d+',
        handler: 'yourbittorent'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?www\\.limetorrents\\.cc',
        pattern: '^http(s)?://([^\\.]+\\.)?www\\.limetorrents\\.cc',
        handler: 'limetorrents'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?thepiratebay\\.',
        pattern: '^http(s)?://([^\\.]+\\.)?thepiratebay\\.',
        handler: 'thepiratebay'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?piratbit\\.net',
        pattern: '^http(s)?://([^\\.]+\\.)?piratbit\\.net/',
        handler: 'piratbit'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?rustorka\\.com',
        pattern: '^http(s)?://([^\\.]+\\.)?rustorka\\.com/forum/viewtopic\\.php\\?t=\\d+',
        handler: 'rustorka'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?rarbg\\.(com|to)',
        pattern: '^http(s)?://([^\\.]+\\.)?rarbg\\.(com|to)/torrent/',
        handler: 'rarbg'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?free-torrents\\.org',
        pattern: '^http(s)?://([^\\.]+\\.)?free-torrents\\.org/forum/viewtopic\\.php\\?t=\\d+',
        handler: 'free-torrents'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?riper\\.am',
        pattern: '^http(s)?://([^\\.]+\\.)?riper\\.am',
        handler: 'riper'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?filebase\\.ws',
        pattern: '^http(s)?://([^\\.]+\\.)?filebase\\.ws/torrents/.+/\\d+',
        handler: 'filebase'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?www\\.nyaa\\.(eu|se)',
        pattern: '^http(s)?://([^\\.]+\\.)?www\\.nyaa\\.(eu|se)',
        handler: 'nyaa'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?toloka\\.to',
        pattern: '^http(s)?://([^\\.]+\\.)?toloka\\.to',
        handler: 'toloka'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?1337x\\.(org|to)',
        pattern: '^http(s)?://([^\\.]+\\.)?1337x\\.(org|to)/torrent/\\d+',
        handler: '1337x'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?rgfootball\\.net',
        pattern: '^http(s)?://([^\\.]+\\.)?rgfootball\\.net/viewtopic\\.php\\?t=\\d+',
        handler: 'rgfootball'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?unionpeer\\.org',
        pattern: '^http(s)?://([^\\.]+\\.)?unionpeer\\.org/(viewtopic\\.php\\?t=\\d+|topic)',
        handler: 'unionpeer'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?bigfangroup\\.org',
        pattern: '^http(s)?://([^\\.]+\\.)?bigfangroup\\.org/(details\\.php\\?id=\\d+|browse\\.php)',
        handler: 'bigfangroup'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?dontracker\\.ru',
        pattern: '^http(s)?://([^\\.]+\\.)?dontracker\\.ru/viewtopic\\.php\\?t=\\d+',
        handler: 'dontracker'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?bitsnoop\\.com',
        pattern: '^http(s)?://([^\\.]+\\.)?bitsnoop\\.com/.+\\.html',
        handler: 'bitsnoop'
    },
	/*
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?bithumen\\.be',
        pattern: '^http(s)?://([^\\.]+\\.)?bithumen\\.be',
        handler: 'bithumen'
    },
	*/
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?estrenosdtl\\.com',
        pattern: '^http(s)?://([^\\.]+\\.)?estrenosdtl\\.com',
        handler: 'estrenosdtl'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?divxtotal\\.com',
        pattern: '^http(s)?://([^\\.]+\\.)?divxtotal\\.com/(series|peliculas|musica)',
        handler: 'divxtotal'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?(btscene|bts|btstor)\\.(eu|org|to|cc)',
        pattern: '^http(s)?://([^\\.]+\\.)?(btscene|bts|btstor)\\.(eu|org|to|cc)',
        handler: 'btscene'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?sumotorrent\\.(sx|com)',
        pattern: '^http(s)?://([^\\.]+\\.)?sumotorrent\\.(sx|com)',
        handler: 'sumotorrent'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?picktorrent\\.com',
        pattern: '^http(s)?://([^\\.]+\\.)?picktorrent\\.com/download/',
        handler: 'picktorrent'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?bakabt\\.me',
        pattern: '^http(s)?://([^\\.]+\\.)?bakabt\\.me',
        handler: 'bakabt'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?animelayer\\.ru',
        pattern: '^http(s)?://([^\\.]+\\.)?animelayer\\.ru/(browse\\.php|details\\.php\\?id=\\d+)',
        handler: 'animelayer'
    },
	/*
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?www\\.bithq\\.org',
        pattern: '^http(s)?://([^\\.]+\\.)?www\\.bithq\\.org/details\\.php\\?id=\\d+',
        handler: 'bithq'
    },
	*/
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?dxp\\.ru',
        pattern: '^http(s)?://([^\\.]+\\.)?dxp\\.ru/(details\\.php\\?id=|torrent-)\\d+',
        handler: 'dxp'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?hqclub\\.net',
        pattern: '^http(s)?://([^\\.]+\\.)?hqclub\\.net/category/.+html',
        handler: 'hqclub'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?pravtor\\.ru',
        pattern: '^http(s)?://([^\\.]+\\.)?pravtor\\.ru/viewtopic\\.php\\?t=\\d+',
        handler: 'pravtor'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?dimeadozen\\.org',
        pattern: '^http(s)?://([^\\.]+\\.)?dimeadozen\\.org/torrents-details\\.php\\?id=\\d+',
        handler: 'dimeadozen'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?bigtorrent\\.org',
        pattern: '^http(s)?://([^\\.]+\\.)?bigtorrent\\.org/(video|music|raznoe|pron)/',
        handler: 'bigtorrent'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?newtorr\\.(kz|org)',
        pattern: '^http(s)?://([^\\.]+\\.)?newtorr\\.(kz|org)/(torrent|search|index)',
        handler: 'newtorr'
    },
	/*
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?zamunda\\.net',
        pattern: '^http(s)?://([^\\.]+\\.)?zamunda\\.net/(browse\\.php|details\\.php\\?id=\\d+)',
        handler: 'zamunda'
    },
	*/
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?zlotracker\\.org',
        pattern: '^http(s)?://([^\\.]+\\.)?zlotracker\\.org',
        handler: 'zlofenix'
    },
	/*
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?torrents\\.by',
        pattern: '^http(s)?://([^\\.]+\\.)?torrents\\.by/forum/viewtopic\\.php',
        handler: 'torrents.by'
    },
	*/
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?baibako\\.tv',
        pattern: '^http(s)?://([^\\.]+\\.)?baibako\\.tv/(browse\\.php|details\\.php\\?id=\\d+)',
        handler: 'baibako'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?mininova\\.org',
        pattern: '^http(s)?://([^\\.]+\\.)?mininova\\.org/tor/',
        handler: 'mininova'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?torlock\\.com',
        pattern: '^http(s)?://([^\\.]+\\.)?torlock\\.com/torrent/',
        handler: 'torlock'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?torrentbit\\.net',
        pattern: '^http(s)?://([^\\.]+\\.)?torrentbit\\.net',
        handler: 'torrentbit'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?nigma\\.ru',
        pattern: '^http(s)?://([^\\.]+\\.)?nigma\\.ru',
        handler: 'nigma'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?www\\.elitetorrent\\.net',
        pattern: '^http(s)?://([^\\.]+\\.)?www\\.elitetorrent\\.net/torrent/',
        handler: 'elitetorrent'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?www\\.linkomanija\\.net',
        pattern: '^http(s)?://([^\\.]+\\.)?www\\.linkomanija\\.net/(browse|details)',
        handler: 'linkomanija'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?katushka\\.net',
        pattern: '^http(s)?://([^\\.]+\\.)?katushka\\.net/torrent/(serial|films|music|books/audio|sport)',
        handler: 'katushka'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?masters-tb\\.com',
        pattern: '^http(s)?://([^\\.]+\\.)?masters-tb\\.com/(details|browse)',
        handler: 'masters-tb'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?opentorrent\\.ru',
        pattern: '^http(s)?://([^\\.]+\\.)?opentorrent\\.ru/viewtopic',
        handler: 'opentorrent'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?torrentfunk\\.com',
        pattern: '^http(s)?://([^\\.]+\\.)?torrentfunk\\.com',
        handler: 'torrentfunk'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?big-boss-tracker\\.net',
        pattern: '^http(s)?://([^\\.]+\\.)?big-boss-tracker\\.net',
        handler: 'big-boss'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?nice-media\\.ru',
        pattern: '^http(s)?://([^\\.]+\\.)?nice-media\\.ru',
        handler: 'nice-media'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?scenefz\\.net',
        pattern: '^http(s)?://([^\\.]+\\.)?scenefz\\.net',
        handler: 'scenefz'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?torrnado\\.ru',
        pattern: '^http(s)?://([^\\.]+\\.)?torrnado\\.ru',
        handler: 'torrnado-ru'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?yify-torrent\\.org',
        pattern: '^http(s)?://([^\\.]+\\.)?yify-torrent\\.org',
        handler: 'yify'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?torrent\\.jc-club\\.org\\.ua',
        pattern: '^http(s)?://([^\\.]+\\.)?torrent\\.jc-club\\.org\\.ua',
        handler: 'jc-club'
    },
	/*
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?arenabg\\.ch',
        pattern: '^http(s)?://([^\\.]+\\.)?arenabg\\.ch',
        handler: 'arenabg'
    },
	*/
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?treckera\\.net',
        pattern: '^http(s)?://([^\\.]+\\.)?treckera\\.net',
        handler: 'treckera-net'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?www\\.8club\\.org',
        pattern: '^http(s)?://([^\\.]+\\.)?www\\.8club\\.org/details\\.php',
        handler: 'filebag'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?uatracker\\.net/',
        pattern: '^http(s)?://([^\\.]+\\.)?uatracker\\.net/',
        handler: 'uatracker'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?youtor\\.org',
        pattern: '^http(s)?://([^\\.]+\\.)?youtor\\.org/(films|music|serials|cartoons|tvshows)/',
        handler: 'youtor'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?uraltrack\\.net',
        pattern: '^http(s)?://([^\\.]+\\.)?uraltrack\\.net/viewtopic\\.php',
        handler: 'uraltrack'
    },
    {
        hpattern: '^http(s)?://([^\\.]+\\.)?nnportal\\.org',
        pattern: '^http(s)?://([^\\.]+\\.)?nnportal\\.org/tracker/',
        handler: 'nnportal'
    }
];

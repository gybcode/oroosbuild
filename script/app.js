(function(){
  'use strict';
  angular.module('app', [
    'ui.router',
    'ngCookies',
    'ngMaterial',
    'ngAnimate'
  ])
})();
(function() {
	'use strict';

	angular
		.module('app')
		.config(Config);

	/* @ngInject */
	Config.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider', '$mdThemingProvider'];
	function Config($urlRouterProvider, $stateProvider, $locationProvider, $mdThemingProvider) {
		//$locationProvider.html5Mode(true);
		// theming
		$mdThemingProvider.theme('myCustom')
			.primaryPalette('GE-Grey', {
				'hue-1': '900',
				'hue-2': '300',
				'hue-3': '50'
			})
		.accentPalette('GE-Blue', {
			'hue-1': '900',
			'hue-2': '500',
			'hue-3': 'A200'
		});
		    // PALETTs
    $mdThemingProvider.definePalette('GE-Blue', {
      '50': '#c3e1ff',
      '100': '#77baff',
      '200': '#3f9eff',
      '300': '#007af6',
      '400': '#006bd8',
      '500': '#005cb9',
      '600': '#004d9a',
      '700': '#003e7c',
      '800': '#002e5d',
      '900': '#001f3f',
      'A100': '#c3e1ff',
      'A200': '#77baff',
      'A400': '#006bd8',
      'A700': '#003e7c',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 A100 A200'
    });

    $mdThemingProvider.definePalette('GE-Red', {
      '50': '#ffffff',
      '100': '#f8cccf',
      '200': '#f29aa1',
      '300': '#ea5b66',
      '400': '#e6404c',
      '500': '#e32533',
      '600': '#cf1b28',
      '700': '#b41723',
      '800': '#99141d',
      '900': '#7d1018',
      'A100': '#ffffff',
      'A200': '#f8cccf',
      'A400': '#e6404c',
      'A700': '#b41723',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 300 A100 A200'
    });

    $mdThemingProvider.definePalette('GE-Green', {
      '50': '#d4ffb7',
      '100': '#a7ff6b',
      '200': '#85ff33',
      '300': '#5fea00',
      '400': '#52cc00',
      '500': '#46ad00',
      '600': '#3a8e00',
      '700': '#2d7000',
      '800': '#215100',
      '900': '#143300',
      'A100': '#d4ffb7',
      'A200': '#a7ff6b',
      'A400': '#52cc00',
      'A700': '#2d7000',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 300 400 A100 A200 A400'
    });

    $mdThemingProvider.definePalette('GE-Orange', {
      '50': '#ffffff',
      '100': '#fff0de',
      '200': '#ffd6a6',
      '300': '#ffb45e',
      '400': '#ffa640',
      '500': '#ff9821',
      '600': '#ff8a02',
      '700': '#e37a00',
      '800': '#c46900',
      '900': '#a65900',
      'A100': '#ffffff',
      'A200': '#fff0de',
      'A400': '#ffa640',
      'A700': '#e37a00',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 300 400 500 600 700 A100 A200 A400 A700'
    });

    $mdThemingProvider.definePalette('GE-Yellow', {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#fffaca',
      '300': '#fff382',
      '400': '#fff064',
      '500': '#ffed45',
      '600': '#ffea26',
      '700': '#ffe708',
      '800': '#e8d200',
      '900': '#cab600',
      'A100': '#ffffff',
      'A200': '#ffffff',
      'A400': '#fff064',
      'A700': '#ffe708',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 300 400 500 600 700 800 900 A100 A200 A400 A700'
    });

    $mdThemingProvider.definePalette('GE-Grey', {
      '50': '#dcdcdc',
      '100': '#b5b5b5',
      '200': '#999999',
      '300': '#767676',
      '400': '#666666',
      '500': '#575757',
      '600': '#484848',
      '700': '#383838',
      '800': '#292929',
      '900': '#1a1a1a',
      'A100': '#dcdcdc',
      'A200': '#b5b5b5',
      'A400': '#666666',
      'A700': '#383838',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 A100 A200'
    });

		$mdThemingProvider.setDefaultTheme('myCustom');
		// routing
		$urlRouterProvider.otherwise('/home');
		$stateProvider.
			state('dashboard', {
				templateUrl: './components/dashboard/dashboard.html',
				controller: 'DashboardController',
				controllerAs: 'vm'
			})
      .state('dashboard.oroos', {
				url:'/questions',
        params: {
          q: null
        },
				templateUrl: './components/oroos/oroos.html',
				controller: 'OroosController',
				controllerAs: 'vm'
			})
			.state('dashboard.home', {
				url:'/home',
				templateUrl: './components/home/home.html',
				controller: 'HomeController',
				controllerAs: 'vm'
			});
	}
})();
(function() {
'use strict';

  angular
    .module('app')
    .controller('DashboardController', DashboardController);

  DashboardController.inject = ['$state'];
  function DashboardController($state) {
    var vm = this;

    activate();

    ////////////////

    function activate() {
      $state.go('dashboard.home');
    }
  }
})();
(function() {
'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.inject = ['$state'];
  function HomeController($state) {
    var vm = this;
    vm.start = start;

    function start(){
      $state.go('dashboard.oroos', {"q":1});
    }

    activate();

    ////////////////

    function activate() { }
  }
})();
(function () {
  'use strict';

  angular
    .module('app')
    .controller('OroosController', OroosController);

  OroosController.inject = ['$state', '$stateParams'];
  function OroosController($state, $stateParams) {
    var vm = this;
    vm.next = next;
    vm.subs = [];
    vm.sub = [];
    vm.st = st;
    function st(){
      $state.go('dashboard.home');
    }
    function next() {
      if(vm.q > 6){
        if(vm.rating == 5){
          $state.go('dashboard.oroos', { "q": (vm.q + 3 < 25 ? vm.q + 3 : 25) });
        } else {
          $state.go('dashboard.oroos', { "q": (vm.q + 1 < 25 ? vm.q + 1 : 25) });
        }
      } else {
        $state.go('dashboard.oroos', { "q": (vm.q + 1 < 25 ? vm.q + 1 : 25) });
      }
    }
    vm.aid = [
      "Kérjük, értékelje, hogy az alábbi párhuzamos állítások közül melyik milyen mértékben igaz Önre! Amelyik állításhoz közelebb érzi a véleményét, a skálán ahhoz közelebbi számot válasszon!",
      "Kérjük, értékelje 1-től 5-ig, hogy a felsorolt állításokkal mennyire ért egyet a GE P&W oroszlányi gyárára  (továbbiakban „Gyár”), végzett munkájára vonatkozóan!",
      "Kérjük, értékelje 1-től 5-ig, hogy a felsorolt tényezők mennyire fontosak az Ön számára a munkavégzés során!",
      "Kérjük, minősítse 1-től 5-ig a tényezőket az alapján, hogy véleménye szerint ezek a tényezők mennyire jellemzőek a GE P&W oroszlányi gyárára (továbbiakban „Gyár”), az Ön munkáltatójára! "
    ];
    vm.questions = [
      {
        title: "1",
        left: "Úgy gondolom, hogy pontosan annyit teljesítek, amennyit elvárnak tőlem",
        right: "Úgy gondolom, hogy rendszeresen magasabb szinvonalú teljesítményt nyújtok (minőségben, eredményességben) az elvártnál"
      },
      {
        title: "2",
        left: "A munkám elvégzésén kívül nem fordítok extra időt, energiát a vállalatra",
        right: "Rendszeresen teszek a normál munkámon kívül extra erőfeszítéseket a vállalat érdekében"
      },
      {
        title: "3",
        left: "Az utóbbi időben megfordult a fejemben, hogy új munkahelyet kellene keresnem",
        right: "Nem gondolok arra, hogy munkahelyet váltsak"
      },
      {
        title: "4",
        left: "Jelenlegi munkahelyemet nem ajánlanám szívesen ismerőseimnek, barátaminak",
        right: "Szívesen ajánlanám ismerőseimnek, barátaminak jelenlegi munkahelyemet"
      },
      {
        title: "5",
        left: "A megszokott, jól bevált módszerek szerint dolgozom, nem próbálkozom új megoldásokkal",
        right: "Saját hatáskörömben, a munkakörömön belül rendszeresen keresem a hatékonyabb megoldási lehetőségeket"
      },
      {
        title: "6",
        left: "Munkám minősége olykor - különböző okok miatt - kifogásolható",
        right: "Munkámat minden esetben a lehető legmagasabb minőségben végzem"
      },
      {
        title: "7",
        question: "Elégedett vagyok a Gyárban a munkavégzésem körülményeivel"
      },
      {
        title: "7.A",
        question: "Mennyire fontosak az Ön számára ÁLTALÁBAN az alábbi tényezők?",
        questions: [
          "Fontos számomra, hogy vezetőmmel rendszeresen beszéljünk arról, hogy mit várnak el tőlem",
          "Fontos számomra, hogy munkavégzésem helye biztonságos legyen",
          "Fontos számomra a kulturált, tiszta, higiénikus környezetben történő munkavégzés",
          "Fontos számomra, hogy tudjam, hoygan kell jelenteni a munkahelyi baleseteket",
          "Fontos számomra, hogy a vállalat biztosítsa a munkavégzéshez szükséges ismeretek megszerzését (tréningek és vizsgalehetőségek)",
          "Fontos számomra, hogy megfelelő védőeszközök álljanak rendelkezésre a bitzonságos munkvégzéshez",
          "Fontos számomra, hogy munkámat önállóan végezhessem"
        ]
      },
      {
        title: "7.B",
        question: "Ön szerint mennyire jellemzóek az alábbi állítások a Gyárban végzett munkája során?",
        questions: [
          "Jelenlegi munkám során rendszeresen beszélünk a vezetőmmel arról, hogy mit várnak el tőlem",
          "A Gyárban mukavégzésem helye biztonságos",
          "A Gyárban kulturált, tiszta, higiénikus környezetben (iroda, szociális helyiségek, öltözők stb.) végzem a munkámat",
          "Tisztában vaogy azzal, hogyan kell jelenteni a munkahelyi baleseteket",
          "A Gyár biztosítja, hogy megszerezhessem a munkavégzésemhez szükséges ismereteket",
          "A Gyár biztosítja a megfelelő védőezsközöket a munkavégzésemhez",
          "Munkámat önállóan végzem a Gyárban"
        ]
      },
      {
        title: "8",
        question: "Elégedett vagyok a Gyárban a juttatásaimmal"
      },
      {
        title: "8.A",
        question: "Mennyire fontosak az Ön számára ÁLTALÁBAN az alábbi tényezők?",
        questions: [
          "Fontos számomra a más elhelyezkedési lehetőséghez viszonyított versenyképes bérezési / juttatási csomag",
          "Fontos számomra, hogy a vállalatnál, ahol dolgozom, különbséget tegyenek a jól és rosszul teljesítők között",
          "Fontos számomra a munkahely biztonsága (ne fenyegessen a munkahelyem megszűnésének veszélye)",
          "Fontos, hogy a bérezésa felelőséggel és az elvégzett munkával arányos legyen",
          "Fontos számomra az anyagi kiszámíthatóság",
          "Fontos számomra, hogy értsem a teljesítmény bónuszom számításának módját",
          "Fontos számomra, hogy értsem a betegszabadság milyen módon befolyásolja a teljesítmény bónuszomat"
        ]
      },
      {
        title: "8.B",
        question: "Ön szerint mennyire jellemzóek az alábbi állítások a Gyárban végzett munkája során?",
        questions: [
          "A bérezési / juttatási csomagom más elhelyezkedési lehetőségekhez képest versenyképes",
          "A Gyárban különbséget tesznek a jól. és rosszul teljesítők között",
          "A GYárban a munkahelyem biztonságban van (nem fenyeget a munkahelyem megszűnésének a veszélye)",
          "A Gyárban a bérezés a felelőséggel és az elvégzett munkával arányosan történik",
          "Számomra azért is fontos, hogy a Gyárban dolgozhatok, mert minden hónap elején megkapom a fizetésemet",
          "Értem, hogy hogyan számítják ki a telesítmény bónuszomat",
          "Értem, hogy a betegszabadság milyen módon befolyásolja a teljesítmény bónuszomat"
        ]
      },
      {
        title: "9",
        question: "A Gyárban végzett munkám során elégedett vagyok a szakmai fejlődési és a munka - magánélet összehangolási lehetőségeimmel"
      },
      {
        title: "9.A",
        question: "Mennyire fontosak az Ön számára ÁLTALÁBAN az alábbi tényezők?",
        questions: [
          "Fontos számomra, hogy a munkavégzésem időbeosztása kiszámítható legyen",
          "Fontos számomra, hogy elegendő tréning induljon a szakmai előmenetelhez / kategóriaváltáshoz",
          "Fontos számomra, hogy a munkám és a magán életem összehangolható legyen",
          "Fontos számomra, hogy időben vizsgát tehessek",
          "Fontos számomra, hogy a rendelkezésemre álló minden szakmai képességemet, tudásomat használni tudjam a napi munkám során",
          "Fontos számomra, hogy időben tudomás szerezzek a belső álláslehetőségekről és a jelentkezés módjáról"
        ]
      },
      {
        title: "9.B",
        question: "Ön szerint mennyire jellemzóek az alábbi állítások a Gyárban végzett munkája során?",
        questions: [
          "A Gyárban a munkvégzésem időbeosztása kiszámítható",
          "A Gyárban elegendő tréninget kapok a szakmai előremenetelhez / kategóriaváltáshoz",
          "A Gyárban végzett munkám és a magánéletem harmonikus, összehangolható",
          "Alkalmam van vizsgáimat időben letenni",
          "A jelenlegi munkámban a rendelkezésemre álló minden szakmai képességemet, tudásomat használni tudom",
          "A Gyárban időben tudomást szerzek a belső álláslehetőségekről és a jelentkezés módjáról"
        ]
      },
      {
        title: "10",
        question: "A Vezetők a Gyárban igazságosan, egyenlően bánnak a munkatársakkal"
      },
      {
        title: "10.A",
        question: "Mennyire fontosak az Ön számára ÁLTALÁBAN az alábbi tényezők?",
        questions: [
          "Fontos számomra az elvégzett munka erkölcsi megbecsülése",
          "Fontos számomra visszajelzést kapni a munkavégzésem minőségéről",
          "Fontos, hogy a vezetés meghallgassa és figyelembe vegye a munkatársak, beosztottak véleményét",
          "Fontos, hogy a vállalat vezetése igazságos legyen a munkatrásakkal (ne legyen kivételezés)",
          "Fontos számomra, hogy a vezetőim a munkatársakat megbecsüljék, tiszteljék"
        ]
      },
      {
        title: "10.B",
        question: "Ön szerint mennyire jellemzóek az alábbi állítások a Gyárban végzett munkája során?",
        questions: [
          "A Gyárban fontos az elvégzett munka erkölcsi megbecsülése (dícséret a jó munkáért)",
          "Rendszeresen kapok visszajelzést a munkavégzésem minőségéről",
          "A közvetlen vezetőm meghallgatja és figyelembe veszi a munkatársak, beosztottak véleményét",
          "A Gyár vezetése nem kivételezik (igazságosan ítéli meg a munkatársakat)",
          "A menedzsment tagjai, a vezetőim a munkatársakat megbecsülik, tisztelik"
        ]
      },
      {
        title: "11",
        question: "A Gyárban szervezetten folyik a munka"
      },
      {
        title: "11.A",
        question: "Mennyire fontosak az Ön számára ÁLTALÁBAN az alábbi tényezők?",
        questions: [
          "Fontos számomra, hogy a munka feladataimat el tudjam végezni a rendelkezésre álló munkaidő alatt (reális standard idők, normaidők legyenek)",
          "Fontos, hogy a rendelkezésemre álljon a munkavégzéshez szükséges és megfelelő információ",
          "Fontos, hogy a rendelkezésemre álljanak a munkvégzéshez szükséges és megfelelő eszközök",
          "Fontos számomra, hogy a vállaltnál, ahol dologozom, a munkafolyamatok jól szervezettek legyenek, biztosítsák a hatékony és biztonságos munkvégzés lehetőségét",
          "Fontos a szervezeti egységek közötti jó együttműködés"
        ]
      },
      {
        title: "11.B",
        question: "Ön szerint mennyire jellemzóek az alábbi állítások a Gyárban végzett munkája során?",
        questions: [
          "A Gyárba kiadott napi feladataimat el tudom végezni a rendelkezésre álló munkaidő alatt (standard idők, normaidők reálisan vannak megállapítva)",
          "Rendelkezésemre áll a munkavégzéshez szükséges és megfelelő információ",
          "Rendelkezésemre állnak a munkavégzéshez szükséges és megfelelő eszközök",
          "A munkafolyamatok jól szervezettek, biztosítják a hatékony és biztonságos munkvégzés lehetőségét",
          "A Gyárban a szervezeti egységek közötti együttműködés jó"
        ]
      },
      {
        title: "12",
        question: "A Gyárban befogadó a légkör és segítik egymást a kollégák"
      },
      {
        title: "12.A",
        question: "Mennyire fontosak az Ön számára ÁLTALÁBAN az alábbi tényezők?",
        questions: [
          "Az együttműködés fontos a munkatársak között (csapatmunka)",
          "Fontos számomra, hogy a munkavállalók a munkahelyen kívül is összetartsanak",
          "Fontos számomra, hogy kapjak a kollégáktól szakmai támogatást, segítséget",
          "Fontos számomra, hogy a csapat, amelynek tagja vagyok, befogadja az újonnan érkező munkatársakat",
          "Fontos számomra, hogy büszkeséggel tekintsek az elvégzett munkámra"
        ]
      },
      {
        title: "12.B",
        question: "Ön szerint mennyire jellemzóek az alábbi állítások a Gyárban végzett munkája során?",
        questions: [
          "A Gyárban jó az együttműködés (a csapatmunka) a munkatársak között",
          "A munkavállalók a Gyáron kívül is összetartanak",
          "A Gyárban a kollégák támogatják az új kollégákat is, tanulunk egymástól",
          "A Gyárban a csapatom, amelynek tagja vagyok, befogadja az újonnan érkező munkatársakat",
          "Büszke vagyok a Gyárban végzett munkámra"
        ]
      }
    ];

    activate();

    ////////////////

    function activate() {
      vm.q = $stateParams['q'];
    }
  }
})();
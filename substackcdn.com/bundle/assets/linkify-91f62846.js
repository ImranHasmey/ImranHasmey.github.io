import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var a = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            n = new Error().stack;
        n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "f91f28ac-9745-40a3-8682-3fe42d087688", a._sentryDebugIdIdentifier = "sentry-dbid-f91f28ac-9745-40a3-8682-3fe42d087688")
    } catch (r) {}
})();
var p = {},
    q = {};
q.__esModule = !0;
q.inherits = Wa;

function Wa(a, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        o = Object.create(a.prototype);
    for (var s in r) o[s] = r[s];
    return o.constructor = n, n.prototype = o, n
}
var V = {};
V.__esModule = !0;
var Fa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a
    } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
    },
    y = {
        defaultProtocol: "http",
        events: null,
        format: Na,
        formatHref: Na,
        nl2br: !1,
        tagName: "a",
        target: Va,
        validate: !0,
        ignoreTags: [],
        attributes: null,
        className: "linkified"
    };
V.defaults = y;
V.Options = Ca;
V.contains = Xa;

function Ca(a) {
    a = a || {}, this.defaultProtocol = a.hasOwnProperty("defaultProtocol") ? a.defaultProtocol : y.defaultProtocol, this.events = a.hasOwnProperty("events") ? a.events : y.events, this.format = a.hasOwnProperty("format") ? a.format : y.format, this.formatHref = a.hasOwnProperty("formatHref") ? a.formatHref : y.formatHref, this.nl2br = a.hasOwnProperty("nl2br") ? a.nl2br : y.nl2br, this.tagName = a.hasOwnProperty("tagName") ? a.tagName : y.tagName, this.target = a.hasOwnProperty("target") ? a.target : y.target, this.validate = a.hasOwnProperty("validate") ? a.validate : y.validate, this.ignoreTags = [], this.attributes = a.attributes || a.linkAttributes || y.attributes, this.className = a.hasOwnProperty("className") ? a.className : a.linkClass || y.className;
    for (var n = a.hasOwnProperty("ignoreTags") ? a.ignoreTags : y.ignoreTags, r = 0; r < n.length; r++) this.ignoreTags.push(n[r].toUpperCase())
}
Ca.prototype = {
    resolve: function(n) {
        var r = n.toHref(this.defaultProtocol);
        return {
            formatted: this.get("format", n.toString(), n),
            formattedHref: this.get("formatHref", r, n),
            tagName: this.get("tagName", r, n),
            className: this.get("className", r, n),
            target: this.get("target", r, n),
            events: this.getObject("events", r, n),
            attributes: this.getObject("attributes", r, n)
        }
    },
    check: function(n) {
        return this.get("validate", n.toString(), n)
    },
    get: function(n, r, o) {
        var s = void 0,
            i = this[n];
        if (!i) return i;
        switch (typeof i == "undefined" ? "undefined" : Fa(i)) {
            case "function":
                return i(r, o.type);
            case "object":
                return s = i.hasOwnProperty(o.type) ? i[o.type] : y[n], typeof s == "function" ? s(r, o.type) : s
        }
        return i
    },
    getObject: function(n, r, o) {
        var s = this[n];
        return typeof s == "function" ? s(r, o.type) : s
    }
};

function Xa(a, n) {
    for (var r = 0; r < a.length; r++)
        if (a[r] === n) return !0;
    return !1
}

function Na(a) {
    return a
}

function Va(a, n) {
    return n === "url" ? "_blank" : null
}
var L = {},
    N = {};
N.__esModule = !0;
N.stateify = N.TokenState = N.CharacterState = void 0;
var wa = q;

function Oa() {
    return function(a) {
        this.j = [], this.T = a || null
    }
}
var xa = Oa();
xa.prototype = {
    defaultTransition: !1,
    on: function(n, r) {
        if (n instanceof Array) {
            for (var o = 0; o < n.length; o++) this.j.push([n[o], r]);
            return this
        }
        return this.j.push([n, r]), this
    },
    next: function(n) {
        for (var r = 0; r < this.j.length; r++) {
            var o = this.j[r],
                s = o[0],
                i = o[1];
            if (this.test(n, s)) return i
        }
        return this.defaultTransition
    },
    accepts: function() {
        return !!this.T
    },
    test: function(n, r) {
        return n === r
    },
    emit: function() {
        return this.T
    }
};
var va = (0, wa.inherits)(xa, Oa(), {
        test: function(n, r) {
            return n === r || r instanceof RegExp && r.test(n)
        }
    }),
    Za = (0, wa.inherits)(xa, Oa(), {
        jump: function(n) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
                o = this.next(new n(""));
            return o === this.defaultTransition ? (o = new this.constructor(r), this.on(n, o)) : r && (o.T = r), o
        },
        test: function(n, r) {
            return n instanceof r
        }
    });

function Ja(a, n, r, o) {
    for (var s = 0, i = a.length, u = n, A = [], d = void 0; s < i && (d = u.next(a[s]));) u = d, s++;
    if (s >= i) return [];
    for (; s < i - 1;) d = new va(o), A.push(d), u.on(a[s], d), u = d, s++;
    return d = new va(r), A.push(d), u.on(a[i - 1], d), A
}
N.CharacterState = va;
N.TokenState = Za;
N.stateify = Ja;
var t = {},
    oa = {};
oa.__esModule = !0;

function ae() {
    return function(a) {
        a && (this.v = a)
    }
}
oa.createTokenClass = ae;
t.__esModule = !0;
t.AMPERSAND = t.CLOSEPAREN = t.CLOSEANGLEBRACKET = t.CLOSEBRACKET = t.CLOSEBRACE = t.OPENPAREN = t.OPENANGLEBRACKET = t.OPENBRACKET = t.OPENBRACE = t.WS = t.TLD = t.SYM = t.UNDERSCORE = t.SLASH = t.MAILTO = t.PROTOCOL = t.QUERY = t.POUND = t.PLUS = t.NUM = t.NL = t.LOCALHOST = t.PUNCTUATION = t.DOT = t.COLON = t.AT = t.DOMAIN = t.Base = void 0;
var Ra = oa,
    ee = q,
    ya = (0, Ra.createTokenClass)();
ya.prototype = {
    toString: function() {
        return this.v + ""
    }
};

function g(a) {
    var n = a ? {
        v: a
    } : {};
    return (0, ee.inherits)(ya, (0, Ra.createTokenClass)(), n)
}
var ne = g(),
    re = g("@"),
    te = g(":"),
    oe = g("."),
    ie = g(),
    se = g(),
    le = g(`
`),
    ce = g(),
    ue = g("+"),
    fe = g("#"),
    ge = g(),
    he = g("mailto:"),
    de = g("?"),
    ve = g("/"),
    me = g("_"),
    pe = g(),
    be = g(),
    Oe = g(),
    xe = g("{"),
    ye = g("["),
    Ee = g("<"),
    Ae = g("("),
    Le = g("}"),
    Se = g("]"),
    Te = g(">"),
    Ne = g(")"),
    ke = g("&");
t.Base = ya;
t.DOMAIN = ne;
t.AT = re;
t.COLON = te;
t.DOT = oe;
t.PUNCTUATION = ie;
t.LOCALHOST = se;
t.NL = le;
t.NUM = ce;
t.PLUS = ue;
t.POUND = fe;
t.QUERY = de;
t.PROTOCOL = ge;
t.MAILTO = he;
t.SLASH = ve;
t.UNDERSCORE = me;
t.SYM = pe;
t.TLD = be;
t.WS = Oe;
t.OPENBRACE = xe;
t.OPENBRACKET = ye;
t.OPENANGLEBRACKET = Ee;
t.OPENPAREN = Ae;
t.CLOSEBRACE = Le;
t.CLOSEBRACKET = Se;
t.CLOSEANGLEBRACKET = Te;
t.CLOSEPAREN = Ne;
t.AMPERSAND = ke;
L.__esModule = !0;
L.start = L.run = L.TOKENS = L.State = void 0;
var w = N,
    l = t,
    Ce = we(l);

function we(a) {
    if (a && a.__esModule) return a;
    var n = {};
    if (a != null)
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r]);
    return n.default = a, n
}
var ka = "aaa|aarp|abarth|abb|abbott|abbvie|abc|able|abogado|abudhabi|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|aetna|af|afamilycompany|afl|africa|ag|agakhan|agency|ai|aig|aigo|airbus|airforce|airtel|akdn|al|alfaromeo|alibaba|alipay|allfinanz|allstate|ally|alsace|alstom|am|americanexpress|americanfamily|amex|amfam|amica|amsterdam|analytics|android|anquan|anz|ao|aol|apartments|app|apple|aq|aquarelle|ar|arab|aramco|archi|army|arpa|art|arte|as|asda|asia|associates|at|athleta|attorney|au|auction|audi|audible|audio|auspost|author|auto|autos|avianca|aw|aws|ax|axa|az|azure|ba|baby|baidu|banamex|bananarepublic|band|bank|bar|barcelona|barclaycard|barclays|barefoot|bargains|baseball|basketball|bauhaus|bayern|bb|bbc|bbt|bbva|bcg|bcn|bd|be|beats|beauty|beer|bentley|berlin|best|bestbuy|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|blanco|blockbuster|blog|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bofa|bom|bond|boo|book|booking|boots|bosch|bostik|boston|bot|boutique|box|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|calvinklein|cam|camera|camp|cancerresearch|canon|capetown|capital|capitalone|car|caravan|cards|care|career|careers|cars|cartier|casa|case|caseih|cash|casino|cat|catering|catholic|cba|cbn|cbre|cbs|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chase|chat|cheap|chintai|chloe|christmas|chrome|chrysler|church|ci|cipriani|circle|cisco|citadel|citi|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|comcast|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cookingchannel|cool|coop|corsica|country|coupon|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruise|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|data|date|dating|datsun|day|dclk|dds|de|deal|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|discover|dish|diy|dj|dk|dm|dnp|do|docs|doctor|dodge|dog|doha|domains|dot|download|drive|dtv|dubai|duck|dunlop|duns|dupont|durban|dvag|dvr|dz|earth|eat|ec|eco|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epost|epson|equipment|er|ericsson|erni|es|esq|estate|esurance|et|etisalat|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|extraspace|fage|fail|fairwinds|faith|family|fan|fans|farm|farmers|fashion|fast|fedex|feedback|ferrari|ferrero|fi|fiat|fidelity|fido|film|final|finance|financial|fire|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|flir|florist|flowers|fly|fm|fo|foo|food|foodnetwork|football|ford|forex|forsale|forum|foundation|fox|fr|free|fresenius|frl|frogans|frontdoor|frontier|ftr|fujitsu|fujixerox|fun|fund|furniture|futbol|fyi|ga|gal|gallery|gallo|gallup|game|games|gap|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|george|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glade|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|godaddy|gold|goldpoint|golf|goo|goodhands|goodyear|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|grocery|group|gs|gt|gu|guardian|gucci|guge|guide|guitars|guru|gw|gy|hair|hamburg|hangout|haus|hbo|hdfc|hdfcbank|health|healthcare|help|helsinki|here|hermes|hgtv|hiphop|hisamitsu|hitachi|hiv|hk|hkt|hm|hn|hockey|holdings|holiday|homedepot|homegoods|homes|homesense|honda|honeywell|horse|hospital|host|hosting|hot|hoteles|hotels|hotmail|house|how|hr|hsbc|ht|htc|hu|hughes|hyatt|hyundai|ibm|icbc|ice|icu|id|ie|ieee|ifm|ikano|il|im|imamat|imdb|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|intel|international|intuit|investments|io|ipiranga|iq|ir|irish|is|iselect|ismaili|ist|istanbul|it|itau|itv|iveco|iwc|jaguar|java|jcb|jcp|je|jeep|jetzt|jewelry|jio|jlc|jll|jm|jmp|jnj|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|juniper|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kindle|kitchen|kiwi|km|kn|koeln|komatsu|kosher|kp|kpmg|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|ladbrokes|lamborghini|lamer|lancaster|lancia|lancome|land|landrover|lanxess|lasalle|lat|latino|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|lefrak|legal|lego|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|lilly|limited|limo|lincoln|linde|link|lipsy|live|living|lixil|lk|loan|loans|locker|locus|loft|lol|london|lotte|lotto|love|lpl|lplfinancial|lr|ls|lt|ltd|ltda|lu|lundbeck|lupin|luxe|luxury|lv|ly|ma|macys|madrid|maif|maison|makeup|man|management|mango|map|market|marketing|markets|marriott|marshalls|maserati|mattel|mba|mc|mckinsey|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|merckmsd|metlife|mg|mh|miami|microsoft|mil|mini|mint|mit|mitsubishi|mk|ml|mlb|mls|mm|mma|mn|mo|mobi|mobile|mobily|moda|moe|moi|mom|monash|money|monster|mopar|mormon|mortgage|moscow|moto|motorcycles|mov|movie|movistar|mp|mq|mr|ms|msd|mt|mtn|mtr|mu|museum|mutual|mv|mw|mx|my|mz|na|nab|nadex|nagoya|name|nationwide|natura|navy|nba|nc|ne|nec|net|netbank|netflix|network|neustar|new|newholland|news|next|nextdirect|nexus|nf|nfl|ng|ngo|nhk|ni|nico|nike|nikon|ninja|nissan|nissay|nl|no|nokia|northwesternmutual|norton|now|nowruz|nowtv|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|observer|off|office|okinawa|olayan|olayangroup|oldnavy|ollo|om|omega|one|ong|onl|online|onyourside|ooo|open|oracle|orange|org|organic|origins|osaka|otsuka|ott|ovh|pa|page|panasonic|panerai|paris|pars|partners|parts|party|passagens|pay|pccw|pe|pet|pf|pfizer|pg|ph|pharmacy|phd|philips|phone|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pioneer|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pnc|pohl|poker|politie|porn|post|pr|pramerica|praxi|press|prime|pro|prod|productions|prof|progressive|promo|properties|property|protection|pru|prudential|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|qvc|racing|radio|raid|re|read|realestate|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|reliance|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|richardli|ricoh|rightathome|ril|rio|rip|rmit|ro|rocher|rocks|rodeo|rogers|room|rs|rsvp|ru|rugby|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsclub|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|save|saxo|sb|sbi|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scjohnson|scor|scot|sd|se|search|seat|secure|security|seek|select|sener|services|ses|seven|sew|sex|sexy|sfr|sg|sh|shangrila|sharp|shaw|shell|shia|shiksha|shoes|shop|shopping|shouji|show|showtime|shriram|si|silk|sina|singles|site|sj|sk|ski|skin|sky|skype|sl|sling|sm|smart|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|sr|srl|srt|st|stada|staples|star|starhub|statebank|statefarm|statoil|stc|stcgroup|stockholm|storage|store|stream|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiftcover|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|talk|taobao|target|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|tdk|team|tech|technology|tel|telecity|telefonica|temasek|tennis|teva|tf|tg|th|thd|theater|theatre|tiaa|tickets|tienda|tiffany|tips|tires|tirol|tj|tjmaxx|tjx|tk|tkmaxx|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tr|trade|trading|training|travel|travelchannel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubank|ubs|uconnect|ug|uk|unicom|university|uno|uol|ups|us|uy|uz|va|vacations|vana|vanguard|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|vig|viking|villas|vin|vip|virgin|visa|vision|vista|vistaprint|viva|vivo|vlaanderen|vn|vodka|volkswagen|volvo|vote|voting|voto|voyage|vu|vuelos|wales|walmart|walter|wang|wanggou|warman|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weibo|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|winners|wme|wolterskluwer|woodside|work|works|world|wow|ws|wtc|wtf|xbox|xerox|xfinity|xihuan|xin|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--30rr7y|xn--3bst00m|xn--3ds443g|xn--3e0b707e|xn--3hcrj9c|xn--3oq18vl8pn36a|xn--3pxu8k|xn--42c2d9a|xn--45br5cyl|xn--45brj9c|xn--45q11c|xn--4gbrim|xn--54b7fta0cc|xn--55qw42g|xn--55qx5d|xn--5su34j936bgsg|xn--5tzm5g|xn--6frz82g|xn--6qq986b3xl|xn--80adxhks|xn--80ao21a|xn--80aqecdr1a|xn--80asehdb|xn--80aswg|xn--8y0a063a|xn--90a3ac|xn--90ae|xn--90ais|xn--9dbq2a|xn--9et52u|xn--9krt00a|xn--b4w605ferd|xn--bck1b9a5dre4c|xn--c1avg|xn--c2br7g|xn--cck2b3b|xn--cg4bki|xn--clchc0ea0b2g2a9gcd|xn--czr694b|xn--czrs0t|xn--czru2d|xn--d1acj3b|xn--d1alf|xn--e1a4c|xn--eckvdtc9d|xn--efvy88h|xn--estv75g|xn--fct429k|xn--fhbei|xn--fiq228c5hs|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--fjq720a|xn--flw351e|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--fzys8d69uvgm|xn--g2xx48c|xn--gckr3f0f|xn--gecrj9c|xn--gk3at1e|xn--h2breg3eve|xn--h2brj9c|xn--h2brj9c8c|xn--hxt814e|xn--i1b6b1a6a2e|xn--imr513n|xn--io0a7i|xn--j1aef|xn--j1amh|xn--j6w193g|xn--jlq61u9w7b|xn--jvr189m|xn--kcrx77d1x4a|xn--kprw13d|xn--kpry57d|xn--kpu716f|xn--kput3i|xn--l1acc|xn--lgbbat1ad8j|xn--mgb9awbf|xn--mgba3a3ejt|xn--mgba3a4f16a|xn--mgba7c0bbn0a|xn--mgbaakc7dvf|xn--mgbaam7a8h|xn--mgbab2bd|xn--mgbai9azgqp6j|xn--mgbayh7gpa|xn--mgbb9fbpob|xn--mgbbh1a|xn--mgbbh1a71e|xn--mgbc0a9azcg|xn--mgbca7dzdo|xn--mgberp4a5d4ar|xn--mgbgu82a|xn--mgbi4ecexp|xn--mgbpl2fh|xn--mgbt3dhd|xn--mgbtx2b|xn--mgbx4cd0ab|xn--mix891f|xn--mk1bu44c|xn--mxtq1m|xn--ngbc5azd|xn--ngbe9e0a|xn--ngbrx|xn--node|xn--nqv7f|xn--nqv7fs00ema|xn--nyqy26a|xn--o3cw4h|xn--ogbpf8fl|xn--p1acf|xn--p1ai|xn--pbt977c|xn--pgbs0dh|xn--pssy2u|xn--q9jyb4c|xn--qcka1pmc|xn--qxam|xn--rhqv96g|xn--rovu88b|xn--rvc1e0am3e|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--tckwe|xn--tiq49xqyj|xn--unup4y|xn--vermgensberater-ctb|xn--vermgensberatung-pwb|xn--vhquv|xn--vuq861b|xn--w4r85el8fhu5dnra|xn--w4rs40l|xn--wgbh1c|xn--wgbl6a|xn--xhq521b|xn--xkc2al3hye2a|xn--xkc2dl3a5ee0h|xn--y9a3aq|xn--yfro4i67o|xn--ygbi2ammx|xn--zfr164b|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|you|youtube|yt|yun|za|zappos|zara|zero|zip|zippo|zm|zone|zuerich|zw".split("|"),
    Ea = "0123456789".split(""),
    ia = "0123456789abcdefghijklmnopqrstuvwxyz".split(""),
    _a = [" ", "\f", "\r", "	", "\v", " ", " ", "᠎"],
    b = [],
    f = function(n) {
        return new w.CharacterState(n)
    },
    E = f(),
    ma = f(l.NUM),
    z = f(l.DOMAIN),
    $ = f(),
    pa = f(l.WS);
E.on("@", f(l.AT)).on(".", f(l.DOT)).on("+", f(l.PLUS)).on("#", f(l.POUND)).on("?", f(l.QUERY)).on("/", f(l.SLASH)).on("_", f(l.UNDERSCORE)).on(":", f(l.COLON)).on("{", f(l.OPENBRACE)).on("[", f(l.OPENBRACKET)).on("<", f(l.OPENANGLEBRACKET)).on("(", f(l.OPENPAREN)).on("}", f(l.CLOSEBRACE)).on("]", f(l.CLOSEBRACKET)).on(">", f(l.CLOSEANGLEBRACKET)).on(")", f(l.CLOSEPAREN)).on("&", f(l.AMPERSAND)).on([",", ";", "!", '"', "'"], f(l.PUNCTUATION));
E.on(`
`, f(l.NL)).on(_a, pa);
pa.on(_a, pa);
for (var ha = 0; ha < ka.length; ha++) {
    var Re = (0, w.stateify)(ka[ha], E, l.TLD, l.DOMAIN);
    b.push.apply(b, Re)
}
var Pa = (0, w.stateify)("file", E, l.DOMAIN, l.DOMAIN),
    Ma = (0, w.stateify)("ftp", E, l.DOMAIN, l.DOMAIN),
    Da = (0, w.stateify)("http", E, l.DOMAIN, l.DOMAIN),
    Ua = (0, w.stateify)("mailto", E, l.DOMAIN, l.DOMAIN);
b.push.apply(b, Pa);
b.push.apply(b, Ma);
b.push.apply(b, Da);
b.push.apply(b, Ua);
var _e = Pa.pop(),
    Pe = Ma.pop(),
    Me = Da.pop(),
    De = Ua.pop(),
    sa = f(l.DOMAIN),
    la = f(l.PROTOCOL),
    Ue = f(l.MAILTO);
Pe.on("s", sa).on(":", la);
Me.on("s", sa).on(":", la);
b.push(sa);
_e.on(":", la);
sa.on(":", la);
De.on(":", Ue);
var Ie = (0, w.stateify)("localhost", E, l.LOCALHOST, l.DOMAIN);
b.push.apply(b, Ie);
E.on(Ea, ma);
ma.on("-", $).on(Ea, ma).on(ia, z);
z.on("-", $).on(ia, z);
for (var da = 0; da < b.length; da++) b[da].on("-", $).on(ia, z);
$.on("-", $).on(Ea, z).on(ia, z);
E.defaultTransition = f(l.SYM);
var Be = function(n) {
        for (var r = n.replace(/[A-Z]/g, function(K) {
                return K.toLowerCase()
            }), o = n.length, s = [], i = 0; i < o;) {
            for (var u = E, A = null, d = 0, R = null, T = -1; i < o && (A = u.next(r[i]));) u = A, u.accepts() ? (T = 0, R = u) : T >= 0 && T++, d++, i++;
            if (!(T < 0)) {
                i -= T, d -= T;
                var k = R.emit();
                s.push(new k(n.substr(i - d, d)))
            }
        }
        return s
    },
    ze = E;
L.State = w.CharacterState;
L.TOKENS = Ce;
L.run = Be;
L.start = ze;
var S = {},
    O = {};
O.__esModule = !0;
O.URL = O.TEXT = O.NL = O.EMAIL = O.MAILTOEMAIL = O.Base = void 0;
var H = oa,
    Z = q,
    G = t;

function je(a) {
    return a instanceof G.DOMAIN || a instanceof G.TLD
}
var I = (0, H.createTokenClass)();
I.prototype = {
    type: "token",
    isLink: !1,
    toString: function() {
        for (var n = [], r = 0; r < this.v.length; r++) n.push(this.v[r].toString());
        return n.join("")
    },
    toHref: function() {
        return this.toString()
    },
    toObject: function() {
        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "http";
        return {
            type: this.type,
            value: this.toString(),
            href: this.toHref(n)
        }
    }
};
var qe = (0, Z.inherits)(I, (0, H.createTokenClass)(), {
        type: "email",
        isLink: !0
    }),
    He = (0, Z.inherits)(I, (0, H.createTokenClass)(), {
        type: "email",
        isLink: !0,
        toHref: function() {
            return "mailto:" + this.toString()
        }
    }),
    Ke = (0, Z.inherits)(I, (0, H.createTokenClass)(), {
        type: "text"
    }),
    Ge = (0, Z.inherits)(I, (0, H.createTokenClass)(), {
        type: "nl"
    }),
    $e = (0, Z.inherits)(I, (0, H.createTokenClass)(), {
        type: "url",
        isLink: !0,
        toHref: function() {
            for (var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "http", r = !1, o = !1, s = this.v, i = [], u = 0; s[u] instanceof G.PROTOCOL;) r = !0, i.push(s[u].toString().toLowerCase()), u++;
            for (; s[u] instanceof G.SLASH;) o = !0, i.push(s[u].toString()), u++;
            for (; je(s[u]);) i.push(s[u].toString().toLowerCase()), u++;
            for (; u < s.length; u++) i.push(s[u].toString());
            return i = i.join(""), r || o || (i = n + "://" + i), i
        },
        hasProtocol: function() {
            return this.v[0] instanceof G.PROTOCOL
        }
    });
O.Base = I;
O.MAILTOEMAIL = qe;
O.EMAIL = He;
O.NL = Ge;
O.TEXT = Ke;
O.URL = $e;
S.__esModule = !0;
S.start = S.run = S.TOKENS = S.State = void 0;
var Ia = N,
    x = O,
    Ye = Qe(x),
    e = t;

function Qe(a) {
    if (a && a.__esModule) return a;
    var n = {};
    if (a != null)
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r]);
    return n.default = a, n
}
var c = function(n) {
        return new Ia.TokenState(n)
    },
    ca = c(),
    Ba = c(),
    za = c(),
    Aa = c(),
    ja = c(),
    C = c(),
    ua = c(),
    J = c(x.URL),
    qa = c(),
    Ha = c(x.URL),
    h = c(x.URL),
    Y = c(),
    aa = c(),
    ea = c(),
    na = c(),
    ra = c(),
    P = c(x.URL),
    M = c(x.URL),
    D = c(x.URL),
    U = c(x.URL),
    Q = c(),
    W = c(),
    F = c(),
    X = c(),
    B = c(),
    La = c(),
    fa = c(x.EMAIL),
    Ka = c(),
    We = c(x.EMAIL),
    _ = c(x.MAILTOEMAIL),
    ba = c(),
    j = c(),
    ga = c(),
    Ga = c(),
    Fe = c(x.NL);
ca.on(e.NL, Fe).on(e.PROTOCOL, Ba).on(e.MAILTO, za).on(e.SLASH, Aa);
Ba.on(e.SLASH, Aa);
Aa.on(e.SLASH, ja);
ca.on(e.TLD, C).on(e.DOMAIN, C).on(e.LOCALHOST, J).on(e.NUM, C);
ja.on(e.TLD, h).on(e.DOMAIN, h).on(e.NUM, h).on(e.LOCALHOST, h);
C.on(e.DOT, ua);
B.on(e.DOT, La);
ua.on(e.TLD, J).on(e.DOMAIN, C).on(e.NUM, C).on(e.LOCALHOST, C);
La.on(e.TLD, fa).on(e.DOMAIN, B).on(e.NUM, B).on(e.LOCALHOST, B);
J.on(e.DOT, ua);
fa.on(e.DOT, La);
J.on(e.COLON, qa).on(e.SLASH, h);
qa.on(e.NUM, Ha);
Ha.on(e.SLASH, h);
fa.on(e.COLON, Ka);
Ka.on(e.NUM, We);
var v = [e.DOMAIN, e.AT, e.LOCALHOST, e.NUM, e.PLUS, e.POUND, e.PROTOCOL, e.SLASH, e.TLD, e.UNDERSCORE, e.SYM, e.AMPERSAND],
    m = [e.COLON, e.DOT, e.QUERY, e.PUNCTUATION, e.CLOSEBRACE, e.CLOSEBRACKET, e.CLOSEANGLEBRACKET, e.CLOSEPAREN, e.OPENBRACE, e.OPENBRACKET, e.OPENANGLEBRACKET, e.OPENPAREN];
h.on(e.OPENBRACE, aa).on(e.OPENBRACKET, ea).on(e.OPENANGLEBRACKET, na).on(e.OPENPAREN, ra);
Y.on(e.OPENBRACE, aa).on(e.OPENBRACKET, ea).on(e.OPENANGLEBRACKET, na).on(e.OPENPAREN, ra);
aa.on(e.CLOSEBRACE, h);
ea.on(e.CLOSEBRACKET, h);
na.on(e.CLOSEANGLEBRACKET, h);
ra.on(e.CLOSEPAREN, h);
P.on(e.CLOSEBRACE, h);
M.on(e.CLOSEBRACKET, h);
D.on(e.CLOSEANGLEBRACKET, h);
U.on(e.CLOSEPAREN, h);
Q.on(e.CLOSEBRACE, h);
W.on(e.CLOSEBRACKET, h);
F.on(e.CLOSEANGLEBRACKET, h);
X.on(e.CLOSEPAREN, h);
aa.on(v, P);
ea.on(v, M);
na.on(v, D);
ra.on(v, U);
aa.on(m, Q);
ea.on(m, W);
na.on(m, F);
ra.on(m, X);
P.on(v, P);
M.on(v, M);
D.on(v, D);
U.on(v, U);
P.on(m, P);
M.on(m, M);
D.on(m, D);
U.on(m, U);
Q.on(v, P);
W.on(v, M);
F.on(v, D);
X.on(v, U);
Q.on(m, Q);
W.on(m, W);
F.on(m, F);
X.on(m, X);
h.on(v, h);
Y.on(v, h);
h.on(m, Y);
Y.on(m, Y);
za.on(e.TLD, _).on(e.DOMAIN, _).on(e.NUM, _).on(e.LOCALHOST, _);
_.on(v, _).on(m, ba);
ba.on(v, _).on(m, ba);
var ta = [e.DOMAIN, e.NUM, e.PLUS, e.POUND, e.QUERY, e.UNDERSCORE, e.SYM, e.AMPERSAND, e.TLD];
C.on(ta, j).on(e.AT, ga);
J.on(ta, j).on(e.AT, ga);
ua.on(ta, j);
j.on(ta, j).on(e.AT, ga).on(e.DOT, Ga);
Ga.on(ta, j);
ga.on(e.TLD, B).on(e.DOMAIN, B).on(e.LOCALHOST, fa);
var Xe = function(n) {
    for (var r = n.length, o = 0, s = [], i = []; o < r;) {
        for (var u = ca, A = null, d = null, R = 0, T = null, k = -1; o < r && !(A = u.next(n[o]));) i.push(n[o++]);
        for (; o < r && (d = A || u.next(n[o]));) A = null, u = d, u.accepts() ? (k = 0, T = u) : k >= 0 && k++, o++, R++;
        if (k < 0)
            for (var K = o - R; K < o; K++) i.push(n[K]);
        else {
            i.length > 0 && (s.push(new x.TEXT(i)), i = []), o -= k, R -= k;
            var Qa = T.emit();
            s.push(new Qa(n.slice(o - R, o)))
        }
    }
    return i.length > 0 && s.push(new x.TEXT(i)), s
};
S.State = Ia.TokenState;
S.TOKENS = Ye;
S.run = Xe;
S.start = ca;
p.__esModule = !0;
p.tokenize = p.test = p.scanner = p.parser = p.options = p.inherits = p.find = void 0;
var Ve = q,
    Ze = V,
    Je = Sa(Ze),
    an = L,
    $a = Sa(an),
    en = S,
    Ya = Sa(en);

function Sa(a) {
    if (a && a.__esModule) return a;
    var n = {};
    if (a != null)
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r]);
    return n.default = a, n
}
Array.isArray || (Array.isArray = function(a) {
    return Object.prototype.toString.call(a) === "[object Array]"
});
var Ta = function(n) {
        return Ya.run($a.run(n))
    },
    nn = function(n) {
        for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, o = Ta(n), s = [], i = 0; i < o.length; i++) {
            var u = o[i];
            u.isLink && (!r || u.type === r) && s.push(u.toObject())
        }
        return s
    },
    rn = function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
            o = Ta(n);
        return o.length === 1 && o[0].isLink && (!r || o[0].type === r)
    };
p.find = nn;
p.inherits = Ve.inherits;
p.options = Je;
p.parser = Ya;
p.scanner = $a;
p.test = rn;
p.tokenize = Ta;
export {
    p as l
};
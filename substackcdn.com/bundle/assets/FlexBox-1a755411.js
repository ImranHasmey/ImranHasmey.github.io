var Ke = Object.defineProperty,
    et = Object.defineProperties;
var tt = Object.getOwnPropertyDescriptors;
var J = Object.getOwnPropertySymbols;
var me = Object.prototype.hasOwnProperty,
    pe = Object.prototype.propertyIsEnumerable;
var ue = (e, t, r) => t in e ? Ke(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    c = (e, t) => {
        for (var r in t || (t = {})) me.call(t, r) && ue(e, r, t[r]);
        if (J)
            for (var r of J(t)) pe.call(t, r) && ue(e, r, t[r]);
        return e
    },
    H = (e, t) => et(e, tt(t));
var w = (e, t) => {
    var r = {};
    for (var n in e) me.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && J)
        for (var n of J(e)) t.indexOf(n) < 0 && pe.call(e, n) && (r[n] = e[n]);
    return r
};
var ge = (e, t, r) => new Promise((n, o) => {
    var i = s => {
            try {
                a(r.next(s))
            } catch (l) {
                o(l)
            }
        },
        _ = s => {
            try {
                a(r.throw(s))
            } catch (l) {
                o(l)
            }
        },
        a = s => s.done ? n(s.value) : Promise.resolve(s.value).then(i, _);
    a((r = r.apply(e, t)).next())
});
import {
    by as be,
    cy as Z,
    gu as _e,
    gv as rt,
    cZ as K,
    h as he,
    p as nt,
    b3 as fe,
    gr as it,
    y as u,
    bH as v,
    t as ot,
    E as _t,
    bd as at,
    q as st,
    D as dt,
    r as lt,
    a3 as ct
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d1954528-5506-47f3-b830-03967d878c94", e._sentryDebugIdIdentifier = "sentry-dbid-d1954528-5506-47f3-b830-03967d878c94")
    } catch (r) {}
})();
var ke = {
    exports: {}
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(e) {
    (function() {
        var t = {}.hasOwnProperty;

        function r() {
            for (var n = [], o = 0; o < arguments.length; o++) {
                var i = arguments[o];
                if (i) {
                    var _ = typeof i;
                    if (_ === "string" || _ === "number") n.push(i);
                    else if (Array.isArray(i)) {
                        if (i.length) {
                            var a = r.apply(null, i);
                            a && n.push(a)
                        }
                    } else if (_ === "object")
                        if (i.toString === Object.prototype.toString)
                            for (var s in i) t.call(i, s) && i[s] && n.push(s);
                        else n.push(i.toString())
                }
            }
            return n.join(" ")
        }
        e.exports ? (r.default = r, e.exports = r) : window.classNames = r
    })()
})(ke);
var ut = ke.exports;
const N = be(ut),
    ae = "preferred_language",
    se = Z({
        language: "en",
        baseLanguage: "en",
        preferredLanguage: _e.get(ae),
        iString: (e, ...t) => e,
        iContext: (e, t) => t,
        iPlural: (e, t, r) => r > 1 ? t : e,
        iTemplate: (e, ...t) => rt(e, ...t),
        iCombo: (e, t, r, n, ...o) => t,
        setPreferredLanguage: e => {}
    });
se.displayName = "I18NContext";

function we() {
    return K(se)
}

function mn({
    children: e,
    language: t = "en",
    preferredLanguage: r
}) {
    const [n, o] = he(() => r);
    nt(() => {
        n ? _e.set(ae, n) : _e.remove(ae)
    }, [n]);
    const i = fe(() => {
        const _ = n || t;
        return c({
            language: _,
            baseLanguage: t,
            preferredLanguage: n,
            setPreferredLanguage: s => {
                ot(_t.PREFERRED_LANGUAGE_SET, {
                    from: _,
                    to: s,
                    surface: "writer-signup"
                }), o(s)
            }
        }, it.i(_))
    }, [t, n]);
    return u(se.Provider, {
        value: i
    }, e)
}

function pn(e) {
    const t = v((r, n) => {
        const o = we();
        return u(e, H(c(c({}, o), r), {
            ref: n
        }))
    });
    return t.displayName = `withI18NContext(${e.displayName||e.name||"Anonymous"})`, t
}
const mt = e => {
        const t = document.createElement("ROOT");
        return t.innerHTML = e, t
    },
    xe = (e, t, r) => {
        let n = "";
        const o = _ => Array.isArray(_) && _.length === 2 && _[1] === null;
        return (Array.isArray(e) && !o(e) ? e : [e]).forEach(_ => {
            if (!_) n += "";
            else if (_.type) {
                const a = t.length + 1;
                t.push(_), n += `<C${a}>${xe(_.props.children||[],t,r)}</C${a}>`
            } else if (o(_)) {
                const a = _[0];
                n += `%${r.length+1}`, r.push(a)
            } else n += _
        }), n
    },
    pt = (e, t) => {
        const r = mt(e),
            n = o => {
                const i = [];
                return o.forEach(_ => {
                    var a, s;
                    if ((a = _.nodeName) != null && a.startsWith("C")) {
                        const l = Number(_.nodeName.replace("C", "")) - 1,
                            m = t[l];
                        if (!m) return;
                        const g = (s = _.childNodes) != null && s.length ? n(_.childNodes) : [],
                            h = at(m, m.props, g);
                        i.push(h)
                    } else {
                        const l = _.data || "";
                        i.push(l)
                    }
                }), i
            };
        return n(r.childNodes || [])
    };

function gt(e) {
    for (var t = -1, r = e == null ? 0 : e.length, n = 0, o = []; ++t < r;) {
        var i = e[t];
        i && (o[n++] = i)
    }
    return o
}
var yt = gt;
const bt = be(yt);
const ht = "_flexGrow_1729d_230",
    ft = "_flexAuto_1729d_233",
    kt = "_flexFill_1729d_236",
    wt = "_ellipsis_1729d_262",
    z = {
        "border-transparent": "_border-transparent_1729d_1",
        "border-top-transparent": "_border-top-transparent_1729d_4",
        "border-bottom-transparent": "_border-bottom-transparent_1729d_7",
        "border-left-transparent": "_border-left-transparent_1729d_10",
        "border-right-transparent": "_border-right-transparent_1729d_13",
        "border-y-transparent": "_border-y-transparent_1729d_16",
        "border-unset": "_border-unset_1729d_21",
        "border-detail": "_border-detail_1729d_25",
        "border-top-detail": "_border-top-detail_1729d_28",
        "border-bottom-detail": "_border-bottom-detail_1729d_31",
        "border-left-detail": "_border-left-detail_1729d_34",
        "border-right-detail": "_border-right-detail_1729d_37",
        "border-y-detail": "_border-y-detail_1729d_40",
        "border-detail-themed": "_border-detail-themed_1729d_44",
        "border-top-detail-themed": "_border-top-detail-themed_1729d_47",
        "border-bottom-detail-themed": "_border-bottom-detail-themed_1729d_50",
        "border-left-detail-themed": "_border-left-detail-themed_1729d_53",
        "border-right-detail-themed": "_border-right-detail-themed_1729d_56",
        "border-y-detail-themed": "_border-y-detail-themed_1729d_59",
        "border-accent-themed": "_border-accent-themed_1729d_64",
        "border-top-accent-themed": "_border-top-accent-themed_1729d_67",
        "border-bottom-accent-themed": "_border-bottom-accent-themed_1729d_70",
        "border-left-accent-themed": "_border-left-accent-themed_1729d_73",
        "border-right-accent-themed": "_border-right-accent-themed_1729d_76",
        "border-y-accent-themed": "_border-y-accent-themed_1729d_79",
        "border-accent-red": "_border-accent-red_1729d_84",
        "border-top-accent-red": "_border-top-accent-red_1729d_87",
        "border-bottom-accent-red": "_border-bottom-accent-red_1729d_90",
        "border-left-accent-red": "_border-left-accent-red_1729d_93",
        "border-right-accent-red": "_border-right-accent-red_1729d_96",
        "border-y-accent-red": "_border-y-accent-red_1729d_99",
        "border-detail-dashed-themed": "_border-detail-dashed-themed_1729d_104",
        "border-top-detail-dashed-themed": "_border-top-detail-dashed-themed_1729d_107",
        "border-bottom-detail-dashed-themed": "_border-bottom-detail-dashed-themed_1729d_110",
        "border-left-detail-dashed-themed": "_border-left-detail-dashed-themed_1729d_113",
        "border-right-detail-dashed-themed": "_border-right-detail-dashed-themed_1729d_116",
        "border-y-detail-dashed-themed": "_border-y-detail-dashed-themed_1729d_119",
        "border-detail-dashed": "_border-detail-dashed_1729d_104",
        "border-top-detail-dashed": "_border-top-detail-dashed_1729d_107",
        "border-bottom-detail-dashed": "_border-bottom-detail-dashed_1729d_110",
        "border-left-detail-dashed": "_border-left-detail-dashed_1729d_113",
        "border-right-detail-dashed": "_border-right-detail-dashed_1729d_116",
        "border-y-detail-dashed": "_border-y-detail-dashed_1729d_119",
        "border-radius-xs": "_border-radius-xs_1729d_144",
        "border-radius-sm": "_border-radius-sm_1729d_147",
        "border-radius-md": "_border-radius-md_1729d_150",
        "border-radius-lg": "_border-radius-lg_1729d_153",
        "border-radius-full": "_border-radius-full_1729d_156",
        "divider-detail": "_divider-detail_1729d_160",
        "bg-unset": "_bg-unset_1729d_166",
        "bg-primary": "_bg-primary_1729d_169",
        "bg-secondary": "_bg-secondary_1729d_172",
        "bg-tertiary": "_bg-tertiary_1729d_175",
        "bg-elevated": "_bg-elevated_1729d_178",
        "bg-elevated-secondary": "_bg-elevated-secondary_1729d_184",
        "bg-utility-tooltip": "_bg-utility-tooltip_1729d_187",
        "bg-glass-inverted-medium": "_bg-glass-inverted-medium_1729d_190",
        "bg-glass-inverted-thick": "_bg-glass-inverted-thick_1729d_195",
        "bg-glass-thick": "_bg-glass-thick_1729d_200",
        "bg-accent-primary": "_bg-accent-primary_1729d_205",
        "bg-accent-cyan": "_bg-accent-cyan_1729d_208",
        "bg-accent-purple": "_bg-accent-purple_1729d_211",
        "bg-accent-blue": "_bg-accent-blue_1729d_214",
        "bg-accent-red": "_bg-accent-red_1729d_220",
        "bg-accent-orange": "_bg-accent-orange_1729d_223",
        "bg-white": "_bg-white_1729d_226",
        flexGrow: ht,
        flexAuto: ft,
        flexFill: kt,
        "overflow-hidden": "_overflow-hidden_1729d_240",
        "overflowY-auto": "_overflowY-auto_1729d_243",
        "overflowX-auto": "_overflowX-auto_1729d_246",
        "overflowX-hidden": "_overflowX-hidden_1729d_249",
        "scrollBar-hidden": "_scrollBar-hidden_1729d_253",
        ellipsis: wt,
        "sizing-border-box": "_sizing-border-box_1729d_268",
        "pullX-4": "_pullX-4_1729d_272",
        "pullX-6": "_pullX-6_1729d_276",
        "pullX-8": "_pullX-8_1729d_280",
        "pullX-12": "_pullX-12_1729d_284",
        "pullX-16": "_pullX-16_1729d_288",
        "pullX-20": "_pullX-20_1729d_292",
        "pullX-24": "_pullX-24_1729d_296",
        "pullX-32": "_pullX-32_1729d_300",
        "pullX-40": "_pullX-40_1729d_304",
        "pullX-48": "_pullX-48_1729d_308",
        "pullX-56": "_pullX-56_1729d_312",
        "pullX-64": "_pullX-64_1729d_316",
        "pullX-80": "_pullX-80_1729d_320",
        "pullX-120": "_pullX-120_1729d_324"
    },
    xt = "_reset_1k90y_1",
    zt = "_ellipsis_1k90y_247",
    Bt = "_nowrap_1k90y_254",
    $t = "_clamp_1k90y_259",
    Nt = "_paragraph_1k90y_436",
    vt = "_meta_1k90y_442",
    Ht = "_digit_1k90y_445",
    Ct = "_marketingHeading1_1k90y_450",
    St = "_marketingHeading2_1k90y_455",
    It = "_marketingHeading3_1k90y_460",
    Xt = "_marketingHeading4_1k90y_465",
    Mt = "_marketingHeading5_1k90y_470",
    At = "_marketingQuote_1k90y_475",
    Ot = "_marketingSubtitle_1k90y_480",
    Ft = "_marketingBody_1k90y_485",
    p = {
        reset: xt,
        "align-left": "_align-left_1k90y_10",
        "align-center": "_align-center_1k90y_13",
        "align-right": "_align-right_1k90y_16",
        "text-wrap-balance": "_text-wrap-balance_1k90y_20",
        "size-inherit": "_size-inherit_1k90y_29",
        "size-11": "_size-11_1k90y_35",
        "size-12": "_size-12_1k90y_40",
        "size-13": "_size-13_1k90y_45",
        "size-14": "_size-14_1k90y_50",
        "size-15": "_size-15_1k90y_55",
        "size-17": "_size-17_1k90y_60",
        "size-19": "_size-19_1k90y_65",
        "size-20": "_size-20_1k90y_70",
        "size-24": "_size-24_1k90y_75",
        "size-30": "_size-30_1k90y_80",
        "size-36": "_size-36_1k90y_85",
        "line-height-16": "_line-height-16_1k90y_92",
        "line-height-20": "_line-height-20_1k90y_95",
        "line-height-24": "_line-height-24_1k90y_98",
        "line-height-28": "_line-height-28_1k90y_101",
        "line-height-30": "_line-height-30_1k90y_104",
        "line-height-32": "_line-height-32_1k90y_107",
        "line-height-36": "_line-height-36_1k90y_110",
        "line-height-44": "_line-height-44_1k90y_113",
        "font-display": "_font-display_1k90y_118",
        "font-text": "_font-text_1k90y_121",
        "font-serif": "_font-serif_1k90y_124",
        "font-monospace": "_font-monospace_1k90y_128",
        "font-meta": "_font-meta_1k90y_131",
        "font-digit": "_font-digit_1k90y_134",
        "font-emoji": "_font-emoji_1k90y_137",
        "font-pub-headings": "_font-pub-headings_1k90y_140",
        "font-pub-body": "_font-pub-body_1k90y_145",
        "font-marketing": "_font-marketing_1k90y_148",
        "font-mono": "_font-mono_1k90y_128",
        "weight-light": "_weight-light_1k90y_156",
        "weight-regular": "_weight-regular_1k90y_159",
        "weight-medium": "_weight-medium_1k90y_162",
        "weight-semibold": "_weight-semibold_1k90y_165",
        "weight-bold": "_weight-bold_1k90y_168",
        "weight-heavy": "_weight-heavy_1k90y_171",
        "font-style-italic": "_font-style-italic_1k90y_175",
        "color-inherit": "_color-inherit_1k90y_180",
        "color-primary": "_color-primary_1k90y_183",
        "color-secondary": "_color-secondary_1k90y_186",
        "color-tertiary": "_color-tertiary_1k90y_189",
        "color-success": "_color-success_1k90y_192",
        "color-error": "_color-error_1k90y_195",
        "color-substack": "_color-substack_1k90y_198",
        "color-bg-light": "_color-bg-light_1k90y_201",
        "color-pub-primary-text": "_color-pub-primary-text_1k90y_204",
        "color-pub-secondary-text": "_color-pub-secondary-text_1k90y_207",
        "color-pub-tertiary-text": "_color-pub-tertiary-text_1k90y_210",
        "color-pub-accent": "_color-pub-accent_1k90y_213",
        "color-pub-accent-inverse": "_color-pub-accent-inverse_1k90y_216",
        "color-accent-red": "_color-accent-red_1k90y_219",
        "color-accent-purple": "_color-accent-purple_1k90y_222",
        "color-accent-cyan": "_color-accent-cyan_1k90y_225",
        "color-accent-blue": "_color-accent-blue_1k90y_228",
        "color-white": "_color-white_1k90y_237",
        "transform-uppercase": "_transform-uppercase_1k90y_242",
        ellipsis: zt,
        nowrap: Bt,
        clamp: $t,
        "clamp-1": "_clamp-1_1k90y_265",
        "clamp-2": "_clamp-2_1k90y_268",
        "clamp-3": "_clamp-3_1k90y_271",
        "clamp-4": "_clamp-4_1k90y_274",
        "clamp-5": "_clamp-5_1k90y_277",
        "clamp-8": "_clamp-8_1k90y_280",
        "decoration-underline": "_decoration-underline_1k90y_285",
        "decoration-none": "_decoration-none_1k90y_288",
        "decoration-hover-underline": "_decoration-hover-underline_1k90y_298",
        "decoration-line-through": "_decoration-line-through_1k90y_307",
        "pb-0": "_pb-0_1k90y_312",
        "pb-4": "_pb-4_1k90y_315",
        "pb-8": "_pb-8_1k90y_318",
        "pb-12": "_pb-12_1k90y_324",
        "pb-16": "_pb-16_1k90y_327",
        "pb-20": "_pb-20_1k90y_330",
        "pb-24": "_pb-24_1k90y_333",
        "pb-28": "_pb-28_1k90y_336",
        "pb-32": "_pb-32_1k90y_339",
        "pl-0": "_pl-0_1k90y_343",
        "pl-4": "_pl-4_1k90y_346",
        "pl-8": "_pl-8_1k90y_349",
        "pl-12": "_pl-12_1k90y_355",
        "pl-16": "_pl-16_1k90y_358",
        "pl-20": "_pl-20_1k90y_361",
        "pl-24": "_pl-24_1k90y_364",
        "pl-28": "_pl-28_1k90y_367",
        "pl-32": "_pl-32_1k90y_370",
        "pr-0": "_pr-0_1k90y_374",
        "pr-4": "_pr-4_1k90y_377",
        "pr-8": "_pr-8_1k90y_380",
        "pr-12": "_pr-12_1k90y_386",
        "pr-16": "_pr-16_1k90y_389",
        "pr-20": "_pr-20_1k90y_392",
        "pr-24": "_pr-24_1k90y_395",
        "pr-28": "_pr-28_1k90y_398",
        "pr-32": "_pr-32_1k90y_401",
        "pt-0": "_pt-0_1k90y_405",
        "pt-4": "_pt-4_1k90y_408",
        "pt-8": "_pt-8_1k90y_411",
        "pt-12": "_pt-12_1k90y_417",
        "pt-16": "_pt-16_1k90y_420",
        "pt-20": "_pt-20_1k90y_423",
        "pt-24": "_pt-24_1k90y_426",
        "pt-28": "_pt-28_1k90y_429",
        "pt-32": "_pt-32_1k90y_432",
        paragraph: Nt,
        meta: vt,
        digit: Ht,
        marketingHeading1: Ct,
        marketingHeading2: St,
        marketingHeading3: It,
        marketingHeading4: Xt,
        marketingHeading5: Mt,
        marketingQuote: At,
        marketingSubtitle: Ot,
        marketingBody: Ft
    };

function Pt(e) {
    var t, r;
    return e == null ? [null, null] : typeof e == "object" ? [(t = e.desktop) != null ? t : null, (r = e.mobile) != null ? r : null] : [e, null]
}
const P = v(function(dn, Je) {
    var ce = dn,
        {
            display: t,
            as: r,
            className: n,
            direction: o,
            flex: i,
            inline: _,
            wrap: a,
            gap: s,
            opacity: l,
            width: m,
            height: g,
            maxWidth: h,
            maxHeight: y,
            minWidth: B,
            minHeight: k,
            margin: x,
            padding: $,
            paddingX: X,
            paddingY: C,
            paddingTop: S,
            paddingBottom: M,
            paddingLeft: T,
            paddingRight: W,
            pointerEvents: E,
            userSelect: R,
            justifyContent: D,
            alignItems: ee,
            alignSelf: L,
            style: G,
            border: te,
            borderTop: Q,
            borderBottom: re,
            borderLeft: le,
            borderRight: U,
            borderY: ne,
            radius: I,
            divider: O,
            shadow: A,
            bg: F,
            overflow: V,
            overflowY: q,
            overflowX: Y,
            scrollBar: He,
            sizing: Ce,
            ellipsis: Se,
            pullX: Ie,
            textAlign: Xe,
            textWrap: Me,
            fontSize: Ae,
            fontWeight: Oe,
            color: Fe,
            decoration: Pe,
            font: je,
            fontStyle: Te,
            isParagraph: We,
            lineHeight: Ee,
            textTransform: Re,
            nowrap: De,
            clamp: Le,
            position: Ge,
            inset: Qe,
            cursor: Ue,
            zIndex: Ve,
            top: qe
        } = ce,
        Ye = w(ce, ["display", "as", "className", "direction", "flex", "inline", "wrap", "gap", "opacity", "width", "height", "maxWidth", "maxHeight", "minWidth", "minHeight", "margin", "padding", "paddingX", "paddingY", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "pointerEvents", "userSelect", "justifyContent", "alignItems", "alignSelf", "style", "border", "borderTop", "borderBottom", "borderLeft", "borderRight", "borderY", "radius", "divider", "shadow", "bg", "overflow", "overflowY", "overflowX", "scrollBar", "sizing", "ellipsis", "pullX", "textAlign", "textWrap", "fontSize", "fontWeight", "color", "decoration", "font", "fontStyle", "isParagraph", "lineHeight", "textTransform", "nowrap", "clamp", "position", "inset", "cursor", "zIndex", "top"]);
    const Ze = r != null ? r : "div";
    return u(Ze, c({
        ref: Je,
        className: N(ze({
            display: t,
            direction: o,
            flex: i,
            inline: _,
            wrap: a,
            gap: s,
            opacity: l,
            width: m,
            height: g,
            maxWidth: h,
            maxHeight: y,
            minWidth: B,
            minHeight: k,
            margin: x,
            padding: $,
            paddingX: X,
            paddingY: C,
            paddingTop: S,
            paddingBottom: M,
            paddingLeft: T,
            paddingRight: W,
            pointerEvents: E,
            userSelect: R,
            justifyContent: D,
            alignItems: ee,
            alignSelf: L,
            border: te,
            borderTop: Q,
            borderBottom: re,
            borderLeft: le,
            borderRight: U,
            borderY: ne,
            radius: I,
            divider: O,
            shadow: A,
            bg: F,
            overflow: V,
            overflowY: q,
            overflowX: Y,
            scrollBar: He,
            sizing: Ce,
            ellipsis: Se,
            pullX: Ie,
            textAlign: Xe,
            textWrap: Me,
            fontSize: Ae,
            fontWeight: Oe,
            color: Fe,
            decoration: Pe,
            font: je,
            fontStyle: Te,
            isParagraph: We,
            lineHeight: Ee,
            textTransform: Re,
            nowrap: De,
            clamp: Le,
            position: Ge,
            inset: Qe,
            cursor: Ue,
            zIndex: Ve,
            top: qe
        }), n),
        style: G
    }, Ye))
});

function ze(le) {
    var U = le,
        {
            reset: e = !0,
            color: t,
            bg: r,
            flex: n,
            inline: o,
            border: i,
            borderTop: _,
            borderBottom: a,
            borderLeft: s,
            borderRight: l,
            borderY: m,
            radius: g,
            divider: h,
            overflow: y,
            overflowY: B,
            overflowX: k,
            scrollBar: x,
            sizing: $,
            ellipsis: X,
            pullX: C,
            textAlign: S,
            textWrap: M,
            decoration: T,
            font: W,
            fontSize: E,
            fontStyle: R,
            fontWeight: D,
            isParagraph: ee,
            lineHeight: L,
            textTransform: G,
            nowrap: te,
            clamp: Q
        } = U,
        re = w(U, ["reset", "color", "bg", "flex", "inline", "border", "borderTop", "borderBottom", "borderLeft", "borderRight", "borderY", "radius", "divider", "overflow", "overflowY", "overflowX", "scrollBar", "sizing", "ellipsis", "pullX", "textAlign", "textWrap", "decoration", "font", "fontSize", "fontStyle", "fontWeight", "isParagraph", "lineHeight", "textTransform", "nowrap", "clamp"]);
    const ne = bt(Object.entries(re).flatMap(([I, O]) => {
        var A;
        return I = (A = jt[I]) != null ? A : I, Array.isArray(I) ? I.map(F => [F, O]) : [
            [I, O]
        ]
    }).flatMap(([I, O]) => {
        const [A, F] = Pt(O).map(V => {
            var q, Y;
            return (Y = (q = oe[I]) == null ? void 0 : q.call(oe, V)) != null ? Y : V
        });
        return [A != null && `pc-${I}-${A}`, F != null && `pc-mobile-${I}-${F}`]
    })).join(" ");
    return N("pencraft", ne, {
        [z.flexGrow]: n === "grow",
        [z.flexFill]: n === "fill",
        [z.flexAuto]: n === "auto"
    }, e && "pc-reset", r != null && z[`bg-${r}`], o && "pc-display-inline-flex", i && z[`border-${i}`], _ && z[`border-top-${_}`], a && z[`border-bottom-${a}`], s && z[`border-left-${s}`], l && z[`border-right-${l}`], m && z[`border-y-${m}`], g != null && `pc-borderRadius-${g}`, h != null && z[`divider-${h}`], y && z[`overflow-${y}`], B && z[`overflowY-${B}`], k && z[`overflowX-${k}`], x && z[`scrollBar-${x}`], $ && z[`sizing-${$}`], X && z.ellipsis, C && z[`pullX-${C}`], t && p[`color-${t}`], S && p[`align-${S}`], M && p[`text-wrap-${M}`], L && p[`line-height-${L}`], W && p[`font-${W}`], E && p[`size-${E}`], R && p[`font-style-${R}`], D && p[`weight-${D}`], G && p[`transform-${G}`], te && p.nowrap, Q && `${p.clamp} ${p[`clamp-${Q}`]}`, T && p[`decoration-${T}`], ee && p.paragraph)
}
const ie = ze;

function gn(i, o) {
    var _ = i,
        {
            displayName: e,
            className: t,
            variants: r
        } = _,
        n = w(_, ["displayName", "className", "variants"]);
    const a = o == null ? void 0 : o.styles,
        s = N(ie(n), t, a),
        l = r && Object.fromEntries(Object.entries(r).map(([B, k]) => [B, Object.fromEntries(Object.entries(k).map(([x, $]) => [x, ie($)]))])),
        m = l && Object.keys(l),
        g = o != null ? o : "div",
        h = (X, $) => {
            var C = X,
                {
                    className: B,
                    css: k
                } = C,
                x = w(C, ["className", "css"]);
            return u(g, H(c({}, x), {
                ref: $,
                className: N(s, B, k && ie(k))
            }))
        },
        y = v(l && m ? ($, x) => {
            var X = $,
                {
                    className: B
                } = X,
                k = w(X, ["className"]);
            let C = "";
            for (const S of m) {
                const M = k[S];
                M != null && (C += ` ${l[S][M]}`)
            }
            return h(c({
                className: N(B, C)
            }, k), x)
        } : h);
    return y.displayName = e, y.styles = s, y
}

function yn(n) {
    var o = n,
        {
            className: e,
            displayName: t
        } = o,
        r = w(o, ["className", "displayName"]);
    const i = v((l, s) => {
        var m = l,
            {
                className: _
            } = m,
            a = w(m, ["className"]);
        return u(P, H(c(c({}, r), a), {
            ref: s,
            className: N(e, _)
        }))
    });
    return i.displayName = t, i
}
const jt = {
        radius: "borderRadius",
        direction: "flexDirection",
        wrap: "flexWrap",
        paddingX: ["paddingLeft", "paddingRight"],
        paddingY: ["paddingTop", "paddingBottom"],
        shadow: "boxShadow"
    },
    oe = {
        justifyContent: e => e === "end" || e === "start" ? `flex-${e}` : e,
        alignItems: e => e === "end" || e === "start" ? `flex-${e}` : e
    },
    b = _ => {
        var a = _,
            {
                className: e,
                align: t,
                size: r,
                weight: n,
                transform: o
            } = a,
            i = w(a, ["className", "align", "size", "weight", "transform"]);
        i = H(c({}, i), {
            textAlign: t != null ? t : i.textAlign,
            textTransform: o != null ? o : i.textTransform,
            fontSize: r != null ? r : i.fontSize,
            fontWeight: n != null ? n : i.fontWeight
        });
        const {
            iString: s,
            language: l
        } = we();
        let m = i.children;
        if (i.translated && l !== "en") {
            const g = [],
                h = [],
                y = xe(i.children, g, h),
                B = s(y, ...h);
            if (B && B !== y) try {
                m = pt(B, g)
            } catch (k) {
                console.log(`Could not translate ${y}`, k)
            }
        }
        return u(P, H(c({
            className: N(p.reset, e)
        }, i), {
            children: m
        }))
    },
    bn = e => u(b, c({
        as: "span"
    }, e));

function f(n) {
    var o = n,
        {
            className: e,
            displayName: t
        } = o,
        r = w(o, ["className", "displayName"]);
    const i = v((l, s) => {
        var m = l,
            {
                className: _
            } = m,
            a = w(m, ["className"]);
        return u(b, H(c(c({}, r), a), {
            ref: s,
            className: N(e, _)
        }))
    });
    return i.displayName = t, i
}
const Tt = f({
        as: "h1",
        font: "display",
        size: 36,
        weight: "bold",
        lineHeight: 44
    }),
    Wt = f({
        as: "h2",
        font: "display",
        size: 30,
        lineHeight: 36,
        weight: "bold"
    }),
    Et = f({
        as: "h3",
        font: "display",
        size: 24,
        lineHeight: 28,
        weight: "bold"
    }),
    Rt = f({
        as: "h4",
        font: "display",
        size: 20,
        lineHeight: 24,
        weight: "bold"
    }),
    Dt = f({
        font: "text",
        size: 19,
        lineHeight: 26,
        weight: "regular"
    }),
    Lt = {
        font: "text",
        fontSize: 17,
        lineHeight: 24,
        fontWeight: "regular"
    },
    Gt = f(Lt),
    Qt = {
        font: "text",
        fontSize: 15,
        lineHeight: 20,
        fontWeight: "regular"
    },
    Ut = f(Qt),
    Vt = {
        font: "text",
        fontSize: 13,
        lineHeight: 20,
        fontWeight: "regular"
    },
    qt = f(Vt),
    Yt = f({
        font: "text",
        size: 11,
        lineHeight: 20,
        weight: "regular",
        color: "secondary"
    }),
    Jt = f({
        font: "meta",
        size: 11,
        lineHeight: 20,
        weight: "medium",
        transform: "uppercase",
        color: "secondary",
        className: p.meta
    }),
    Zt = f({
        font: "digit",
        size: 12,
        lineHeight: 20,
        weight: "bold",
        transform: "uppercase",
        className: p.digit
    }),
    Kt = f({
        font: "serif",
        size: 19,
        lineHeight: 30,
        weight: "regular",
        className: p.serif
    }),
    hn = f({
        as: "a",
        decoration: "hover-underline"
    });
f({
    as: "span"
});
const er = f({
        font: "text",
        color: "primary",
        className: p.marketingBody
    }),
    tr = f({
        as: "h1",
        weight: "regular",
        className: p.marketingHeading1
    }),
    rr = f({
        as: "h2",
        weight: "medium",
        className: p.marketingHeading2
    }),
    nr = f({
        as: "h3",
        weight: "medium",
        className: p.marketingHeading3
    }),
    ir = f({
        as: "h4",
        weight: "medium",
        className: p.marketingHeading4
    }),
    or = f({
        as: "h5",
        weight: "bold",
        className: p.marketingHeading5
    }),
    _r = f({
        as: "h4",
        weight: "regular",
        textAlign: "center",
        className: p.marketingQuote
    }),
    ar = f({
        as: "h4",
        size: 30,
        weight: "regular",
        className: p.marketingSubtitle
    });
b.H1 = Tt;
b.H2 = Wt;
b.H3 = Et;
b.H4 = Rt;
b.B1 = Dt;
b.B2 = Gt;
b.B3 = Ut;
b.B4 = qt;
b.B5 = Yt;
b.Meta = Jt;
b.Digit = Zt;
b.Serif = Kt;
b.MarketingBody = er;
b.MarketingHeading1 = tr;
b.MarketingHeading2 = rr;
b.MarketingHeading3 = nr;
b.MarketingHeading4 = ir;
b.MarketingHeading5 = or;
b.MarketingQuote = _r;
b.MarketingSubtitle = ar;
var ye;
const sr = typeof window != "undefined" ? (ye = window._preloads) == null ? void 0 : ye.publicationSettings : {},
    Be = e => ({
        getSettingFor: r => {
            if (!r || !e) return null;
            const n = e[r];
            return n === void 0 ? null : n
        }
    }),
    de = Z(H(c({}, Be(sr)), {
        changeSetting: () => Promise.resolve(void 0)
    }));
de.displayName = "PublicationSettingsContext";
const fn = e => {
    const t = v((r, n) => {
        const o = dr();
        return u(e, H(c(c({}, o), r), {
            ref: n
        }))
    });
    return t.displayName = `withPubSettingsContext(${e.displayName||e.name||"Anonymous"})`, t
};

function kn({
    settings: e = {},
    children: t
}) {
    const [r, n] = he(e), o = _ => ge(this, null, function*() {
        n(c(c({}, r), _));
        try {
            yield st("/api/v1/publication_settings", {
                method: "PUT",
                json: _
            })
        } catch (a) {
            console.error(a)
        }
    }), i = fe(() => H(c({}, Be(r)), {
        changeSetting: o
    }), [r]);
    return u(de.Provider, {
        value: i
    }, t)
}

function dr() {
    return K(de)
}
const lr = Z({
        isStatic: !1,
        isAmp: !1,
        isFreeSubscribed: !0,
        isFreemail: !0,
        siteConfigValues: {},
        isPledged: !1
    }),
    cr = e => {
        const n = e,
            {
                ampProps: t
            } = n,
            r = w(n, ["ampProps"]);
        return K(lr).isAmp ? u("amp-img", c(c({}, t), r)) : u("img", c({}, r))
    },
    wn = B => {
        var k = B,
            {
                name: e,
                svgParams: t,
                isStatic: r,
                height: n,
                fill: o,
                stroke: i,
                version: _ = 4,
                strokeWidth: a = 1.8,
                strokeLinecap: s,
                strokeLinejoin: l,
                alt: m,
                additionalStaticParams: g = {},
                children: h
            } = k,
            y = w(k, ["name", "svgParams", "isStatic", "height", "fill", "stroke", "version", "strokeWidth", "strokeLinecap", "strokeLinejoin", "alt", "additionalStaticParams", "children"]);
        const x = n ? (t.width || 1) * n / (t.height || 1) : t.width || 1,
            $ = n || t.height || 1;
        return r ? u(cr, c(c({
            src: dt(lt(`/icon/${e}`, {
                v: _ || 4,
                height: $ * 2,
                fill: o,
                stroke: i,
                strokeWidth: a * 2,
                strokeLinecap: s,
                strokeLinejoin: l
            }), x * 2, {
                format: "png",
                crop: "scale"
            }),
            width: x,
            height: $,
            style: {
                maxWidth: `${x}px`
            },
            alt: m || ""
        }, g), y)) : u("svg", c({
            role: "img",
            style: n ? {
                height: `${$}px`,
                width: `${x}px`
            } : void 0,
            width: x,
            height: $,
            viewBox: t.viewBox || `0 0 ${t.width} ${t.height}`,
            fill: o || t.fill || "none",
            strokeWidth: a || typeof a == "number" ? Number(a) : typeof t.strokeWidth == "number" ? t.strokeWidth : 1,
            stroke: i || t.stroke || "#000",
            strokeLinecap: s,
            strokeLinejoin: l,
            xmlns: "http://www.w3.org/2000/svg"
        }, y), u("g", null, u("title", null, m || ""), h))
    };

function ur({
    theme: e,
    children: t
}) {
    return u($e.Provider, {
        value: e
    }, u(P, {
        display: "contents",
        className: e
    }, t))
}
const $e = Z("");

function mr() {
    return K($e)
}

function xn({
    children: e
}) {
    const t = mr();
    return u("div", {
        className: t
    }, e)
}
const pr = "_pubTheme_spvfj_1",
    gr = {
        pubTheme: pr
    };

function yr({
    children: e
}) {
    return u(ur, {
        theme: gr.pubTheme
    }, e)
}
const br = "_hiddenInput_4g4um_1",
    hr = {
        hiddenInput: br
    },
    fr = ({
        children: e
    }) => u("div", {
        className: hr.hiddenInput
    }, e),
    kr = "_buttonBase_mui51_1",
    wr = "_button_mui51_1",
    xr = "_grow_mui51_32",
    zr = "_buttonOld_mui51_37",
    Br = "_buttonOldColors_mui51_56",
    $r = "_priority_primary_mui51_57",
    Nr = "_priority_secondary_mui51_63",
    vr = "_priority_tertiary_mui51_69",
    Hr = "_priority_destructive_mui51_75",
    Cr = "_buttonNew_mui51_83",
    Sr = "_button2_mui51_117",
    Ir = "_size_sm_mui51_119",
    Xr = "_size_md_mui51_127",
    Mr = "_size_lg_mui51_135",
    Ar = "_iconButtonBase_mui51_145 _buttonBase_mui51_1",
    Or = "_rounded_mui51_155",
    Fr = "_iconButton_mui51_145 _iconButtonBase_mui51_145 _buttonBase_mui51_1",
    Pr = "_size_24_mui51_166",
    jr = "_size_32_mui51_169",
    Tr = "_size_36_mui51_172",
    Wr = "_size_40_mui51_175",
    Er = "_size_48_mui51_178",
    Rr = "_size_56_mui51_181",
    Dr = "_media_mui51_216",
    Lr = "_priority_twitter_mui51_294",
    Gr = "_priority_facebook_mui51_300",
    Qr = "_fill_empty_mui51_319",
    Ur = "_fill_filled_mui51_374",
    Vr = "_outline_none_mui51_418",
    qr = "_fill_outline_mui51_522",
    Yr = "_inverted_mui51_574",
    Jr = "_fill_borderless_mui51_599",
    Zr = "_textButton_mui51_617",
    Kr = "_hiddenInput_mui51_621",
    en = "_iconButton2_mui51_631 _iconButtonBase_mui51_145 _buttonBase_mui51_1",
    tn = "_size_xs_mui51_638",
    d = {
        buttonBase: kr,
        button: wr,
        grow: xr,
        buttonOld: zr,
        buttonOldColors: Br,
        priority_primary: $r,
        priority_secondary: Nr,
        priority_tertiary: vr,
        priority_destructive: Hr,
        buttonNew: Cr,
        button2: Sr,
        size_sm: Ir,
        size_md: Xr,
        size_lg: Mr,
        iconButtonBase: Ar,
        rounded: Or,
        iconButton: Fr,
        size_24: Pr,
        size_32: jr,
        size_36: Tr,
        size_40: Wr,
        size_48: Er,
        size_56: Rr,
        "color_primary-text": "_color_primary-text_mui51_192",
        "priority_primary-mono": "_priority_primary-mono_mui51_210",
        media: Dr,
        "priority_primary-theme": "_priority_primary-theme_mui51_252",
        "priority_secondary-theme": "_priority_secondary-theme_mui51_258",
        "priority_secondary-outline": "_priority_secondary-outline_mui51_269",
        priority_twitter: Lr,
        priority_facebook: Gr,
        "priority_primary-empty": "_priority_primary-empty_mui51_307",
        fill_empty: Qr,
        fill_filled: Ur,
        outline_none: Vr,
        fill_outline: qr,
        inverted: Yr,
        fill_borderless: Jr,
        textButton: Zr,
        hiddenInput: Kr,
        iconButton2: en,
        size_xs: tn
    },
    j = v((m, l) => {
        var g = m,
            {
                onClick: e,
                href: t,
                localNavigation: r,
                newTab: n,
                className: o,
                resetCss: i,
                state: _,
                replace: a
            } = g,
            s = w(g, ["onClick", "href", "localNavigation", "newTab", "className", "resetCss", "state", "replace"]);
        const h = t ? y => {
            e && (e.call(y.target, y), y.defaultPrevented) || ct(t, {
                event: y,
                local_navigation: r,
                newTab: n,
                replace: a,
                state: _
            })
        } : e;
        return u(P, H(c({
            as: "button",
            ref: l,
            tabIndex: 0,
            type: "button"
        }, s), {
            className: N("pencraft", o, i && d.buttonBase),
            onClick: h,
            "data-href": t
        }))
    });
j.displayName = "UnstyledButton";
const rn = {
        small: "sm",
        medium: "md",
        large: "lg"
    },
    Ne = v(function(g, m) {
        var h = g,
            {
                className: t,
                priority: r = "primary",
                size: n = "md",
                rounded: o,
                disabled: i,
                leading: _,
                trailing: a,
                children: s
            } = h,
            l = w(h, ["className", "priority", "size", "rounded", "disabled", "leading", "trailing", "children"]);
        return u(j, c({
            className: N(t, d.buttonBase, d.button, d.buttonNew, d.button2, d[`priority_${r}`], d[`size_${n}`], o && d.rounded, _ != null && d.hasLeading, a != null && d.hasTrailing),
            disabled: i,
            ref: m
        }, l), _, s, a)
    });
Ne.displayName = "Button";
const nn = v((m, l) => {
    var g = m,
        {
            className: e,
            priority: t = "primary",
            size: r = "md",
            rounded: n,
            disabled: o,
            leading: i,
            trailing: _,
            children: a
        } = g,
        s = w(g, ["className", "priority", "size", "rounded", "disabled", "leading", "trailing", "children"]);
    return u(Ne, c({
        className: N(e, d.media, n && d.rounded),
        priority: t,
        size: r,
        disabled: o,
        ref: l,
        leading: i,
        trailing: _,
        children: a
    }, s))
});
nn.displayName = "MediaButton";
const ve = v((_, i) => {
    var a = _,
        {
            className: e,
            size: t = "md",
            priority: r = "secondary",
            rounded: n = !1
        } = a,
        o = w(a, ["className", "size", "priority", "rounded"]);
    return u(j, c({
        ref: i,
        className: N(e, d.iconButton2, d.buttonNew, t != null && d[`size_${t}`], r && d[`priority_${r}`], n && d.rounded)
    }, o))
});
ve.displayName = "IconButton";
const on = v((i, o) => {
    var _ = i,
        {
            className: e,
            size: t = "md",
            priority: r = "primary"
        } = _,
        n = w(_, ["className", "size", "priority"]);
    return u(ve, c({
        ref: o,
        className: N(e, d.media, d[`size_${t}`], d[`priority_${r}`]),
        size: t,
        priority: r
    }, n))
});
on.displayName = "MediaIconButton";
const zn = v(function($, x) {
        var X = $,
            {
                className: t,
                priority: r = "primary",
                size: n = "md",
                fill: o = "filled",
                outline: i,
                rounded: _,
                disabled: a,
                grow: s,
                leftIcon: l,
                rightIcon: m,
                allCaps: g,
                children: h,
                hiddenInput: y,
                justifyContent: B = "center"
            } = X,
            k = w(X, ["className", "priority", "size", "fill", "outline", "rounded", "disabled", "grow", "leftIcon", "rightIcon", "allCaps", "children", "hiddenInput", "justifyContent"]);
        var M;
        n = (M = rn[n]) != null ? M : n;
        const C = r.endsWith("-themed");
        let S = u(j, c({
            className: N(t, d.buttonBase, d.button, d.buttonOld, d.buttonOldColors, d[`priority_${r}`], d[`size_${n}`], d[`fill_${o}`], i && d.outline_none, _ && d.rounded, s && d.grow, l != null && d.hasLeftIcon, m != null && d.hasRightIcon, B && "pc-justifyContent-center"),
            disabled: a,
            ref: x
        }, k), l, g ? u(b.Meta, null, h) : h, m, y && u(fr, null, y));
        return S = C ? u(yr, null, S) : S, S
    }),
    Bn = v((m, l) => {
        var g = m,
            {
                className: e,
                size: t = 40,
                priority: r = "secondary",
                color: n,
                fill: o = "empty",
                rounded: i = !0,
                inverted: _,
                grow: a
            } = g,
            s = w(g, ["className", "size", "priority", "color", "fill", "rounded", "inverted", "grow"]);
        return u(j, c({
            ref: l,
            className: N(e, d.iconButton, d.buttonOldColors, t != null && d[`size_${t}`], r && d[`priority_${r}`], n && d[`color_${n}`], o && d[`fill_${o}`], _ && d.inverted, a && d.grow, i && d.rounded)
        }, s))
    }),
    _n = v(function(t, r) {
        return u(P, H(c({}, t), {
            display: t.display || "flex",
            ref: r
        }))
    }),
    an = _n,
    $n = an,
    sn = v(function(t, r) {
        return u(P, H(c({}, t), {
            display: t.display || "flex",
            direction: "column",
            ref: r
        }))
    }),
    Nn = sn;
export {
    P as B, Nn as C, lr as E, an as F, fr as H, mn as I, on as M, zn as O, de as P, $n as R, wn as S, b as T, j as U, sn as a, _n as b, N as c, fn as d, kn as e, Ne as f, hn as g, Bn as h, ve as i, yr as j, se as k, bt as l, bn as m, dr as n, ze as o, yn as p, ie as q, Qt as r, gn as s, cr as t, we as u, d as v, pn as w, ur as x, xn as y, f as z
};
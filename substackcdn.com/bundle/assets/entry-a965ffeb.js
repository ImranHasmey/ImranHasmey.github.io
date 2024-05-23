var V = Object.defineProperty;
var U = Object.getOwnPropertySymbols;
var q = Object.prototype.hasOwnProperty,
    Q = Object.prototype.propertyIsEnumerable;
var B = (t, o, r) => o in t ? V(t, o, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[o] = r,
    M = (t, o) => {
        for (var r in o || (o = {})) q.call(o, r) && B(t, r, o[r]);
        if (U)
            for (var r of U(o)) Q.call(o, r) && B(t, r, o[r]);
        return t
    };
import {
    bF as l,
    i as D,
    k as S,
    gl as Z,
    gm as ee,
    gn as te,
    gj as ne,
    go as oe,
    gp as re,
    gq as ae,
    gr as ie,
    ea as se,
    r as le,
    e4 as ce,
    y as pe,
    fW as x,
    gs as de
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            o = new Error().stack;
        o && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[o] = "17645bd0-4840-46ab-81e9-cac76d988cf2", t._sentryDebugIdIdentifier = "sentry-dbid-17645bd0-4840-46ab-81e9-cac76d988cf2")
    } catch (r) {}
})();
typeof window != "undefined" && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.13.1", l, {
    Fragment: D,
    Component: S
});
var j = {};

function w(t) {
    return t.type === D ? "Fragment" : typeof t.type == "function" ? t.type.displayName || t.type.name : typeof t.type == "string" ? t.type : "#text"
}
var v = [],
    E = [];

function Y() {
    return v.length > 0 ? v[v.length - 1] : null
}
var G = !1;

function N(t) {
    return typeof t.type == "function" && t.type != D
}

function d(t) {
    for (var o = [t], r = t; r.__o != null;) o.push(r.__o), r = r.__o;
    return o.reduce(function(_, u) {
        _ += "  in " + w(u);
        var c = u.__source;
        return c ? _ += " (at " + c.fileName + ":" + c.lineNumber + ")" : G || (G = !0, console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")), _ + `
`
    }, "")
}
var _e = typeof WeakMap == "function";

function X(t) {
    return t ? typeof t.type == "function" ? X(t.__) : t : {}
}
var ue = S.prototype.setState;
S.prototype.setState = function(t, o) {
    return this.__v == null && this.state == null && console.warn(`Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.

` + d(Y())), ue.call(this, t, o)
};
var fe = S.prototype.forceUpdate;

function y(t) {
    var o = t.props,
        r = w(t),
        _ = "";
    for (var u in o)
        if (o.hasOwnProperty(u) && u !== "children") {
            var c = o[u];
            typeof c == "function" && (c = "function " + (c.displayName || c.name) + "() {}"), c = Object(c) !== c || c.toString ? c + "" : Object.prototype.toString.call(c), _ += " " + u + "=" + JSON.stringify(c)
        }
    var h = o.children;
    return "<" + r + _ + (h && h.length ? ">..</" + r + ">" : " />")
}
S.prototype.forceUpdate = function(t) {
        return this.__v == null ? console.warn(`Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.

` + d(Y())) : this.__P == null && console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + d(this.__v)), fe.call(this, t)
    },
    function() {
        (function() {
            var e = l.__b,
                n = l.diffed,
                a = l.__,
                s = l.vnode,
                p = l.__r;
            l.diffed = function(i) {
                N(i) && E.pop(), v.pop(), n && n(i)
            }, l.__b = function(i) {
                N(i) && v.push(i), e && e(i)
            }, l.__ = function(i, f) {
                E = [], a && a(i, f)
            }, l.vnode = function(i) {
                i.__o = E.length > 0 ? E[E.length - 1] : null, s && s(i)
            }, l.__r = function(i) {
                N(i) && E.push(i), p && p(i)
            }
        })();
        var t = !1,
            o = l.__b,
            r = l.diffed,
            _ = l.vnode,
            u = l.__e,
            c = l.__,
            h = l.__h,
            O = _e ? {
                useEffect: new WeakMap,
                useLayoutEffect: new WeakMap,
                lazyPropTypes: new WeakMap
            } : null,
            m = [];
        l.__e = function(e, n, a, s) {
            if (n && n.__c && typeof e.then == "function") {
                var p = e;
                e = new Error("Missing Suspense. The throwing component was: " + w(n));
                for (var i = n; i; i = i.__)
                    if (i.__c && i.__c.__c) {
                        e = p;
                        break
                    }
                if (e instanceof Error) throw e
            }
            try {
                (s = s || {}).componentStack = d(n), u(e, n, a, s), typeof e.then != "function" && setTimeout(function() {
                    throw e
                })
            } catch (f) {
                throw f
            }
        }, l.__ = function(e, n) {
            if (!n) throw new Error(`Undefined parent passed to render(), this is the second argument.
Check if the element is available in the DOM/has the correct id.`);
            var a;
            switch (n.nodeType) {
                case 1:
                case 11:
                case 9:
                    a = !0;
                    break;
                default:
                    a = !1
            }
            if (!a) {
                var s = w(e);
                throw new Error("Expected a valid HTML node as a second argument to render.	Received " + n + " instead: render(<" + s + " />, " + n + ");")
            }
            c && c(e, n)
        }, l.__b = function(e) {
            var n = e.type,
                a = X(e.__);
            if (t = !0, n === void 0) throw new Error(`Undefined component passed to createElement()

You likely forgot to export your component or might have mixed up default and named imports` + y(e) + `

` + d(e));
            if (n != null && typeof n == "object") throw n.__k !== void 0 && n.__e !== void 0 ? new Error("Invalid type passed to createElement(): " + n + `

Did you accidentally pass a JSX literal as JSX twice?

  let My` + w(e) + " = " + y(n) + `;
  let vnode = <My` + w(e) + ` />;

This usually happens when you export a JSX literal and not the component.

` + d(e)) : new Error("Invalid type passed to createElement(): " + (Array.isArray(n) ? "array" : n));
            if (n !== "thead" && n !== "tfoot" && n !== "tbody" || a.type === "table" ? n === "tr" && a.type !== "thead" && a.type !== "tfoot" && a.type !== "tbody" && a.type !== "table" ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + y(e) + `

` + d(e)) : n === "td" && a.type !== "tr" ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + y(e) + `

` + d(e)) : n === "th" && a.type !== "tr" && console.error("Improper nesting of table. Your <th> should have a <tr>." + y(e) + `

` + d(e)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + y(e) + `

` + d(e)), e.ref !== void 0 && typeof e.ref != "function" && typeof e.ref != "object" && !("$$typeof" in e)) throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [` + typeof e.ref + `] instead
` + y(e) + `

` + d(e));
            if (typeof e.type == "string") {
                for (var s in e.props)
                    if (s[0] === "o" && s[1] === "n" && typeof e.props[s] != "function" && e.props[s] != null) throw new Error(`Component's "` + s + '" property should be a function, but got [' + typeof e.props[s] + `] instead
` + y(e) + `

` + d(e))
            }
            if (typeof e.type == "function" && e.type.propTypes) {
                if (e.type.displayName === "Lazy" && O && !O.lazyPropTypes.has(e.type)) {
                    var p = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
                    try {
                        var i = e.type();
                        O.lazyPropTypes.set(e.type, !0), console.warn(p + "Component wrapped in lazy() is " + w(i))
                    } catch (g) {
                        console.warn(p + "We will log the wrapped component's name once it is loaded.")
                    }
                }
                var f = e.props;
                e.type.__f && delete(f = function(g, I) {
                        for (var k in I) g[k] = I[k];
                        return g
                    }({}, f)).ref,
                    function(g, I, k, J, R) {
                        Object.keys(g).forEach(function(P) {
                            var b;
                            try {
                                b = g[P](I, P, J, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")
                            } catch ($) {
                                b = $
                            }
                            b && !(b.message in j) && (j[b.message] = !0, console.error("Failed prop type: " + b.message + (R && `
` + R() || "")))
                        })
                    }(e.type.propTypes, f, 0, w(e), function() {
                        return d(e)
                    })
            }
            o && o(e)
        }, l.__h = function(e, n, a) {
            if (!e || !t) throw new Error("Hook can only be invoked from render methods.");
            h && h(e, n, a)
        };
        var A = function(e, n) {
                return {
                    get: function() {
                        var a = "get" + e + n;
                        m && m.indexOf(a) < 0 && (m.push(a), console.warn("getting vnode." + e + " is deprecated, " + n))
                    },
                    set: function() {
                        var a = "set" + e + n;
                        m && m.indexOf(a) < 0 && (m.push(a), console.warn("setting vnode." + e + " is not allowed, " + n))
                    }
                }
            },
            z = {
                nodeName: A("nodeName", "use vnode.type"),
                attributes: A("attributes", "use vnode.props"),
                children: A("children", "use vnode.props.children")
            },
            H = Object.create({}, z);
        l.vnode = function(e) {
            var n = e.props;
            if (e.type !== null && n != null && ("__source" in n || "__self" in n)) {
                var a = e.props = {};
                for (var s in n) {
                    var p = n[s];
                    s === "__source" ? e.__source = p : s === "__self" ? e.__self = p : a[s] = p
                }
            }
            e.__proto__ = H, _ && _(e)
        }, l.diffed = function(e) {
            if (e.__k && e.__k.forEach(function(i) {
                    if (typeof i == "object" && i && i.type === void 0) {
                        var f = Object.keys(i).join(",");
                        throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + f + `}.

` + d(e))
                    }
                }), t = !1, r && r(e), e.__k != null)
                for (var n = [], a = 0; a < e.__k.length; a++) {
                    var s = e.__k[a];
                    if (s && s.key != null) {
                        var p = s.key;
                        if (n.indexOf(p) !== -1) {
                            console.error('Following component has two or more children with the same key attribute: "' + p + `". This may cause glitches and misbehavior in rendering process. Component: 

` + y(e) + `

` + d(e));
                            break
                        }
                        n.push(p)
                    }
                }
        }
    }();
let W = null;

function ye() {
    var t;
    typeof window != "undefined" && ((t = window == null ? void 0 : window.navigator) != null && t.sendBeacon) && (window.navigator.sendBeacon = window.navigator.sendBeacon.bind(window.navigator)), Z(), ee(), te(), ne(), oe(() => {
        const o = W;
        W = null, o && o.length > 0 && re(o)
    })
}
const Te = {
        SUBSTACK: "substack",
        PUBLISHER: "publisher"
    },
    Oe = {
        NECESSARY: "Necessary",
        PERFORMANCE: "Performance",
        FUNCTIONALITY: "Functionality"
    },
    C = {
        ANONYMOUS_ID: "ajs_anonymous_id",
        AB_TESTING_ID: "ab_testing_id",
        AB_EXPERIMENT_SAMPLED: "ab_experiment_sampled",
        LIKELY_LOGGED_IN: "substack.lli",
        VISIT_ID: "visit_id",
        HIDE_COOKIE_BANNER: "hideCookieBanner",
        INTRO_POPUP_LAST_HIDDEN_AT: "intro_popup_last_hidden_at",
        LIKE_UPSELL_LAST_SHOWN_AT: "like_upsell_last_shown_at",
        SESSION_SID: "substack.sid",
        DISABLE_HTML_PIXELS: "disable_html_pixels",
        DISABLE_EXPERIMENTS: "disable_experiments",
        COOKIE_STORAGE_KEY: "cookie_storage_key"
    },
    Ae = M({
        GA_TRACKING: "_ga_tracking-substack",
        GA_TAG_MANAGER: "_ga_tag_manager-substack",
        EXPERIMENTS: "experiments-substack",
        AWSALB: "AWSALB-substack",
        MUX_DATA: "muxData-substack",
        DATADOG_S: "_dd_s-substack",
        CF_CLEARENCE: "cf_clearance-substack",
        CF_BM: "__cf_bm-substack",
        FULLSTORY_UID: "fs_uid-substack",
        ZENDESK_ID: "__zlcmid-substack"
    }, C),
    ke = {
        GA_TRACKING: "_ga_tracking-publisher",
        GA_TAG_MANAGER: "_ga_tag_manager-publisher",
        FB_PIXEL: "fb_pixel-publisher",
        TWITTER_PIXEL: "twitter_pixel-publisher",
        PARSELY_PIXEL: "parsely_pixel-publisher"
    };
var F, K;
typeof window != "undefined" && ((K = (F = window._preloads) == null ? void 0 : F.user) != null && K.is_global_admin);
const he = "entry";
let T;

function Ne(t) {
    var o;
    if (T) throw new Error("Cannot re-render the things");
    T = t, window._preloads && (window._preloads.original_url = window.location.href), ye(), be(), me(), ge(), (o = window._preloads) != null && o.language && typeof window._preloads.customPublicationThemePreviewId == "undefined" && ae.indexOf(window._preloads.language) > -1 && window.fetch ? we(L, window._preloads.language) : L(), Ee()
}

function we(t, o) {
    fetch(`/api/v1/i18n/translations?language=${o}`, {
        method: "GET"
    }).then(r => r.json()).then(r => {
        ie.l(o, r)
    }).finally(() => {
        t()
    })
}

function Ce(t) {
    let o = !1;
    if (typeof window._preloads == "object" && window._preloads !== null)
        for (const r in t)(typeof t[r] == "object" && t[r] !== null || t[r] !== window._preloads[r]) && (window._preloads[r] = t[r], o = !0);
    o && L()
}

function me() {
    const t = se(window.location.href);
    if (!t.token && !t.lli || !window.history.replaceState) return;
    delete t.token, delete t.lli;
    const o = `${le(window.location.pathname,t)}${window.location.hash}`;
    window.history.replaceState({}, document.title, o)
}

function ge() {
    if (!window.history || !window.history.pushState || !window.scrollTo) return;
    const t = window.history.pushState;
    history.pushState = function(o, r, _) {
        var h;
        const u = t.apply(history, arguments);
        return ((h = o == null ? void 0 : o.resetScroll) != null ? h : !0) && _.indexOf("#") === -1 && window.scrollTo(0, 0), u
    }
}

function L() {
    if (!T) return;
    const t = document.getElementById(he);
    ce(pe(T, {
        initialData: window._preloads
    }), t || document.body)
}

function be() {
    if (typeof window._analyticsConfig == "object" && window._analyticsConfig !== null && !window._analyticsConfig.anonymousId) {
        let t;
        try {
            t = JSON.parse(x.get(C.ANONYMOUS_ID))
        } catch (o) {}
        t || (t = de(), x.set(C.ANONYMOUS_ID, JSON.stringify(t), {
            expires: 365
        })), window._analyticsConfig.anonymousId = t
    }
}

function Ee() {
    var t;
    !(console != null && console.log) || window.location.hostname.includes(".localhost") || window.location.pathname.startsWith("/embed") || (t = window._preloads.user) != null && t.is_global_admin || console.log(`%c
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░ SUBSTACK WANTS YOU ░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░▒▒▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓▓▓▓▓▒░░░░░░░░░░░░░░░░░░░░░░▒▓▓▓▓▓░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░ TO BUILD A BETTER BUSINESS MODEL FOR WRITING ░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                   https://substack.com/jobs
`, "font-family:monospace")
}
export {
    Te as C, ke as P, C as S, Oe as a, Ae as b, Ne as e, Ce as s
};
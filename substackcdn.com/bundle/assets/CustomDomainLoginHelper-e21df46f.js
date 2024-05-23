var c = Object.defineProperty,
    h = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty,
    _ = Object.prototype.propertyIsEnumerable;
var o = (a, e, t) => e in a ? c(a, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : a[e] = t,
    d = (a, e) => {
        for (var t in e || (e = {})) I.call(e, t) && o(a, t, e[t]);
        if (s)
            for (var t of s(e)) _.call(e, t) && o(a, t, e[t]);
        return a
    },
    u = (a, e) => h(a, p(e));
import {
    k as b,
    d as l,
    c8 as y,
    t as g,
    E as f,
    g5 as w,
    u as E,
    al as D,
    g6 as L,
    y as R,
    aI as S
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    g as k,
    b as T
} from "./free_email_form-1d3fc4be.js";
(function() {
    try {
        var a = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            e = new Error().stack;
        e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "f281fff0-6a25-44a3-bad0-09da7712275b", a._sentryDebugIdIdentifier = "sentry-dbid-f281fff0-6a25-44a3-bad0-09da7712275b")
    } catch (t) {}
})();
const M = 1e3 * 60 * 60 * 24,
    m = "domain-redirect-time";
class O extends b {
    constructor(e, t) {
        super(e, t), this.state = u(d({}, e.initialData), {
            triedSigningIn: l("triedSigningIn")
        })
    }
    componentDidMount() {
        const e = this.loadedWithLikelyLoggedInParam() ? "param" : null;
        e && !this.shouldBlockLoginRedirect() ? this.attemptLoginRedirect({
            source: e
        }) : this.useIframe() && window.addEventListener("message", t => this.handleFrameMessage(t)), y("triedSigningIn")
    }
    shouldBlockLoginRedirect() {
        var t;
        const e = parseInt(k(m, 0));
        return this.state.block_auto_login || !((t = this.state.pub) != null && t.custom_domain) || this.state.user || typeof window == "undefined" || Date.now() - e <= M || this.state.triedSigningIn
    }
    handleFrameMessage(e) {
        var i, r, n;
        if (((i = e.data) == null ? void 0 : i.type) !== "frame-state") return;
        const t = !this.shouldBlockLoginRedirect() && ((r = e.data) == null ? void 0 : r.loggedInAtSubstack);
        g(f.FRAME_MESSAGE_HANDLED, {
            loggedInAtSubstack: (n = e.data) == null ? void 0 : n.loggedInAtSubstack,
            loggedInAtCustomDomain: !!this.state.user,
            attemptRedirect: t
        }), t && this.attemptLoginRedirect({
            source: "cookie"
        })
    }
    attemptLoginRedirect({
        source: e
    } = {}) {
        var i;
        g(f.CUSTOM_DOMAIN_LOGIN_REDIRECT_ATTEMPTED, {
            fromParam: e === "param",
            source: e
        }), T(m, `${Date.now()}`);
        let t = w({
            useOriginalUrl: !0
        });
        this.props.initialData.hide_intro_popup && (t = E(t, {
            hide_intro_popup: !0
        })), location.href = D({
            for_pub: (i = this.state.pub) == null ? void 0 : i.subdomain,
            justTrying: !0,
            redirect: t
        })
    }
    loadedWithLikelyLoggedInParam() {
        return typeof window != "undefined" && window._preloads.original_url && !!l(window._preloads.original_url, "lli")
    }
    useIframe() {
        var t, i;
        return !(typeof window == "undefined" || this.loadedWithLikelyLoggedInParam() || !((t = this.state.pub) != null && t.custom_domain) || L((i = window == null ? void 0 : window.location) == null ? void 0 : i.href))
    }
    render() {
        return this.useIframe() ? R("iframe", {
            src: `${S()}/channel-frame`,
            className: "channel-frame",
            width: "0",
            height: "0"
        }) : null
    }
}
export {
    O as C
};
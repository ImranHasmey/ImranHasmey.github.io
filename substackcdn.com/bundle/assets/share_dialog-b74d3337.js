var i1 = Object.defineProperty,
    a1 = Object.defineProperties;
var o1 = Object.getOwnPropertyDescriptors;
var Y = Object.getOwnPropertySymbols,
    s1 = Object.getPrototypeOf,
    ye = Object.prototype.hasOwnProperty,
    ke = Object.prototype.propertyIsEnumerable,
    n1 = Reflect.get;
var ee = (t, i, a) => i in t ? i1(t, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : t[i] = a,
    c = (t, i) => {
        for (var a in i || (i = {})) ye.call(i, a) && ee(t, a, i[a]);
        if (Y)
            for (var a of Y(i)) ke.call(i, a) && ee(t, a, i[a]);
        return t
    },
    h = (t, i) => a1(t, o1(i));
var q = (t, i) => {
    var a = {};
    for (var o in t) ye.call(t, o) && i.indexOf(o) < 0 && (a[o] = t[o]);
    if (t != null && Y)
        for (var o of Y(t)) i.indexOf(o) < 0 && ke.call(t, o) && (a[o] = t[o]);
    return a
};
var te = (t, i, a) => (ee(t, typeof i != "symbol" ? i + "" : i, a), a);
var Ie = (t, i, a) => n1(s1(t), a, i);
var P = (t, i, a) => new Promise((o, s) => {
    var n = d => {
            try {
                u(a.next(d))
            } catch (l) {
                s(l)
            }
        },
        r = d => {
            try {
                u(a.throw(d))
            } catch (l) {
                s(l)
            }
        },
        u = d => d.done ? o(d.value) : Promise.resolve(d.value).then(n, r);
    u((a = a.apply(t, i)).next())
});
import {
    h as M,
    p as oe,
    t as v,
    E as y,
    x as j,
    e4 as r1,
    y as e,
    q as K,
    g$ as l1,
    e3 as c1,
    ae as u1,
    aj as d1,
    a4 as m1,
    aa as Me,
    r as U,
    b8 as h1,
    h0 as p1,
    gG as f1,
    bJ as C1,
    dx as g1,
    i as T,
    o as se,
    D as V,
    bx as ne,
    b4 as ie,
    dW as De,
    ac as Ue,
    bk as re,
    h1 as le,
    b2 as He,
    k as ce,
    aV as b1,
    gb as _1,
    aI as w1,
    fd as v1,
    a8 as J,
    cR as y1,
    dO as k1,
    by as I1,
    bH as N1,
    H as L1,
    a7 as ue,
    bC as P1
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    g as ae,
    b as G
} from "./free_email_form-1d3fc4be.js";
import {
    S as C,
    c as D,
    w as S1,
    u as Fe,
    T as b,
    a as de,
    F as x,
    t as E1,
    k as x1,
    B as M1
} from "./FlexBox-1a755411.js";
import {
    M as D1,
    a as W
} from "./Menu-5342012d.js";
import {
    B as N,
    R as Ve
} from "./user-e16f1619.js";
import {
    P as me
} from "./modal-5dbf091c.js";
import {
    c as U1
} from "./x-fc38e969.js";
import {
    F as Be
} from "./free_email_form.module-135823b4.js";
import {
    P as Ae
} from "./_baseEach-63ad03e0.js";
import {
    a as H1
} from "./Select-f97196dc.js";
import {
    i as F1,
    D as V1
} from "./_baseIteratee-fbbabc87.js";
import {
    u as B1
} from "./dropdown_menu_typed-c164b42b.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            i = new Error().stack;
        i && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[i] = "c14886ad-c7e0-46d2-91ac-085d956d63e2", t._sentryDebugIdIdentifier = "sentry-dbid-c14886ad-c7e0-46d2-91ac-085d956d63e2")
    } catch (a) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A1 = U1("ImagePlus", [
        ["path", {
            d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",
            key: "31hg93"
        }],
        ["line", {
            x1: "16",
            x2: "22",
            y1: "5",
            y2: "5",
            key: "ez7e4s"
        }],
        ["line", {
            x1: "19",
            x2: "19",
            y1: "2",
            y2: "8",
            key: "1gkr8c"
        }],
        ["circle", {
            cx: "9",
            cy: "9",
            r: "2",
            key: "af1f0g"
        }],
        ["path", {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
            key: "1xmnt7"
        }]
    ]),
    Ne = () => {};

function T1(t, i = null, a = Ne, o = null) {
    const [s, n] = M(t ? O1(t, i, o) : !1);
    return oe(() => {
        const d = () => {
            n(!0)
        };
        if (t) {
            document.addEventListener(`dismiss: ${t}`, d, !1);
            const l = ae(`${t}-seen-count`) || 0;
            (!o || l < o) && G(`${t}-seen-count`, l + 1)
        }
        return () => {
            document.removeEventListener(`dismiss: ${t}`, d)
        }
    }, [t]), t ? [s, () => {
        a(), v(y.DASHBOARD_ACTION_BOX_DISMISSED, {
            key: t
        }), G(t, new Date().toString()), n(!0);
        const l = new Event(`dismiss: ${t}`);
        document.dispatchEvent(l)
    }] : [!0, Ne]
}

function O1(t, i, a) {
    let o;
    const s = typeof window == "undefined" ? new Date().toString() : ae(t),
        n = typeof window == "undefined" ? 0 : ae(`${t}-seen-count`),
        r = s || a && n >= a;
    return r && i ? o = j(s).add(i, "second").isAfterNow() : o = !!(s || r), o
}
const Te = (t, {
        timeout: i = 5e3,
        className: a = "",
        dismissable: o = !1,
        beforeDismiss: s = null
    } = {}, n) => {
        n = n || document.body;
        const r = document.createElement("div");
        r.setAttribute("id", "toast"), r.setAttribute("role", "alert"), a && r.classList.add(a), n.appendChild(r);
        const u = () => {
            s && s(), r.classList.remove("in"), setTimeout(() => {
                r.remove()
            }, 500)
        };
        r1([e("p", null, t), o && e("a", {
            className: "dismiss",
            onClick: u
        }, "Dismiss")], r), setTimeout(() => {
            r.classList.add("in")
        }), !o && setTimeout(u, i)
    },
    Z1 = ({
        children: t,
        className: i,
        dismissKey: a,
        dismissDurationInSeconds: o,
        beforeDismiss: s,
        container: n
    }) => {
        const [r, u] = T1(a, o, s);
        if (!r) return Te(t, {
            className: i,
            beforeDismiss: u,
            dismissable: !0
        }, n)
    },
    ti = ({
        user: t,
        pub: i,
        container: a
    }) => {
        if (!(!t || !i || !t.is_subscribed)) return e(R1, {
            pub: i,
            container: a
        })
    },
    $1 = t => {
        if (t && t.cardExpiresAt) {
            const i = j(t.expiry).subtract(c1, "day"),
                a = j(t.cardExpiresAt),
                o = j().add(12, "day");
            return a.isBefore(i) && i.isBefore(o)
        }
        return !1
    },
    R1 = ({
        pub: t,
        container: i
    }) => {
        const [a, o] = M(null);
        if (oe(() => {
                K("/api/v1/subscription").then(s => o(s)).catch(s => {
                    console.error("Failed to fetch subscription data: ", s)
                })
            }, []), $1(a)) return e(Z1, {
            className: "urgent",
            dismissKey: "card-expiring-toast.dismissed",
            dismissDurationInSeconds: 1 * l1,
            beforeDismiss: () => {
                v(y.CARD_EXPIRED_WARNING_DISMISSED, {
                    type: "toast"
                })
            },
            container: i
        }, "Your credit card is expiring soon.", " ", e("a", {
            href: "/account/billing",
            native: !0,
            onClick: () => {
                v(y.UPDATE_EXPIRED_CARD_LINK_CLICKED, {
                    type: "toast"
                })
            }
        }, "Update your card"), ` before you lose access to ${t.name}`, ".")
    };

function S(t, i, a) {
    const {
        shareUrl: o,
        post: s,
        pub: n,
        selectionId: r,
        utm_campaign: u,
        utm_medium: d,
        event: l = y.SHARE_LINK_CLICKED,
        trackParams: p = {}
    } = a;
    v(l, c(h(c({
        name: t,
        post_id: s ? s.id : null
    }, r ? {
        selection_id: r
    } : {}), {
        source: u,
        utm_medium: d
    }), p));
    const f = i(o);
    f && typeof f == "string" && (f.startsWith("http") ? window.open(f, "_blank") : document.location.href = f), G(`${n==null?void 0:n.subdomain} shared`, !0)
}

function W1(t) {
    const {
        pub: i,
        post: a,
        sharingSelfPub: o,
        shareName: s
    } = t, n = (i == null ? void 0 : i.twitter_screen_name) || i && p1[i.subdomain];
    let r = s;
    i && o ? r = "I just started a Substack! You can subscribe to it here" : (i && !a && (r = `Subscribe to ${r}`), n && (!a || i && (!a.publishedBylines.length || a.publishedBylines.some(u => u.id === i.author_id))) && (r += `, by @${n}`)), S("twitter", u => f1({
        url: u,
        text: r
    }), t)
}

function j1(t) {
    S("linkedin", i => U("https://www.linkedin.com/sharing/share-offsite/", {
        url: i
    }), t)
}

function K1(t) {
    S("reddit", i => U("https://www.reddit.com/submit/", {
        url: i,
        title: t.shareName
    }), t)
}

function J1(t) {
    S("hackernews", i => U("https://news.ycombinator.com/submitlink", {
        url: i,
        title: t.shareName
    }), t)
}

function Y1(t) {
    S("pinterest", i => U("https://www.pinterest.com/pin/create/button", {
        u: i,
        description: t.shareName
    }), t)
}

function q1(t) {
    var a;
    const {
        iString: i
    } = I18N.i(((a = t.pub) == null ? void 0 : a.language) || "en");
    S("copy", o => (C1(o), !1), t), t.skipToast || Te(i("Link copied to clipboard"))
}

function G1(t) {
    S("email", i => U("mailto:", {
        subject: t.shareName,
        body: i
    }), t)
}

function X1(t) {
    S("notes", i => U(g1({
        message: i
    })), t)
}

function Q1(t) {
    S("facebook", i => U("https://www.facebook.com/sharer/sharer.php", {
        u: i
    }), t)
}

function Le(t = {}) {
    const {
        post: i,
        pub: a,
        profile: o
    } = t;
    return i ? i.title : a ? a.name : o ? `${o.name} on Substack` : document.title
}

function Pe(t, i = {}) {
    const {
        pub: a,
        post: o,
        clip: s,
        comments: n,
        commentId: r,
        selectionId: u,
        profile: d,
        user: l,
        utm_campaign: p,
        medium: f,
        referral_token: w,
        useCustomDomainOverOpen: I,
        params: E
    } = i, L = c(c({
        r: l != null && l.id ? u1(l) : w,
        selection: u,
        utm_campaign: p || (o ? "post" : d ? "profile" : a ? "pub" : s ? "clip" : "unknown"),
        utm_medium: f || d1.web,
        utm_source: t,
        comments: n != null && n.length ? !0 : void 0,
        commentId: r
    }, s ? {
        clipId: s.id
    } : {}), E);
    return a != null && a.subdomain && (o != null && o.slug) && !s ? m1(a.subdomain, o.slug, {
            params: L,
            hostOverride: I && a.custom_domain ? Me(a) : null
        }) : U(`${o?h1(a,o,{comments:!!(n!=null&&n.length),commentId:r,clipId:s==null?void 0:s.id}):a?`
            $ {
                a.base_url
            }
            /`:typeof window!="undefined"?window.location.href.split("?")[0]:""}`,L)}const z1=t=>e(C,h(c({},t),{name:"LinkedInShareIcon",svgParams:{height:24,width:24,stroke:"none",viewBox:"0 0 72 72"}}),e("g",{fill:"none","fill-rule":"evenodd",stroke:"none"},e("path",{d:"M36,72 L36,72 C55.882251,72 72,55.882251 72,36 L72,36 C72,16.117749 55.882251,-3.65231026e-15 36,0 L36,0 C16.117749,3.65231026e-15 -2.4348735e-15,16.117749 0,36 L0,36 C2.4348735e-15,55.882251 16.117749,72 36,72 Z",fill:"#007EBB"}),e("path",{d:"M59,57 L49.959375,57 L49.959375,41.6017895 C49.959375,37.3800228 48.3552083,35.0207581 45.0136719,35.0207581 C41.3785156,35.0207581 39.4792969,37.4759395 39.4792969,41.6017895 L39.4792969,57 L30.7666667,57 L30.7666667,27.6666667 L39.4792969,27.6666667 L39.4792969,31.6178624 C39.4792969,31.6178624 42.0989583,26.7704897 48.3236979,26.7704897 C54.5455729,26.7704897 59,30.5699366 59,38.4279486 L59,57 Z M20.372526,23.8257036 C17.4048177,23.8257036 15,21.4020172 15,18.4128518 C15,15.4236864 17.4048177,13 20.372526,13 C23.3402344,13 25.7436198,15.4236864 25.7436198,18.4128518 C25.7436198,21.4020172 23.3402344,23.8257036 20.372526,23.8257036 Z M15.8736979,57 L24.958724,57 L24.958724,27.6666667 L15.8736979,27.6666667 L15.8736979,57 Z",fill:"#FFF",stroke:"none"}))),et=t=>e(C,h(c({},t),{name:"DotDotDotIcon",svgParams:{height:100,width:100}}),e("circle",{cx:"23",cy:"50",r:"9"}),e("circle",{cx:"50",cy:"50",r:"9"}),e("circle",{cx:"77",cy:"50",r:"9"})),tt=t=>e(C,h(c({},t),{name:"HackerNewsIcon",svgParams:{height:24,width:24,stroke:"none",viewBox:"0 0 512 512"}}),e("rect",{width:"512",height:"512",fill:"#f60"}),e("path",{fill:"#fff",d:"M124 91h51l81 162 81-164h51L276 293v136h-40V293z"})),it=t=>e(C,h(c({},t),{name:"ImageIcon",svgParams:{height:52.13,width:63.67}}),e("path",{d:"M58.55,52.13H5.13A5.13,5.13,0,0,1,0,47V5.13A5.13,5.13,0,0,1,5.13,0H58.55a5.13,5.13,0,0,1,5.13,5.13V47A5.13,5.13,0,0,1,58.55,52.13ZM5.13,4A1.13,1.13,0,0,0,4,5.13V47a1.13,1.13,0,0,0,1.13,1.13H58.55A1.13,1.13,0,0,0,59.67,47V5.13A1.13,1.13,0,0,0,58.55,4Z"}),e("path",{d:"M12.08,43.46H51.59A1.69,1.69,0,0,0,53,40.77l-5.45-7.4A1.69,1.69,0,0,0,45,33.15l-5.6,5.33-13-17.65a1.69,1.69,0,0,0-2.78.08l-13,19.94A1.69,1.69,0,0,0,12.08,43.46Z"}),e("circle",{cx:"44.13",cy:"15.12",r:"5.93"})),at=t=>e(C,h(c({},t),{name:"LucideTabNotesFilled",svgParams:{height:24,width:24}}),e("path",{d:"M6.785 1.92766C5.45134 1.57031 4.08049 2.36176 3.72314 3.69543L0.444815 15.9303C0.0874636 17.264 0.878901 18.6348 2.21255 18.9922L5.37495 19.8396V7.66664C5.37495 6.40099 6.40096 5.37498 7.66661 5.37498H19.4723C19.3299 5.30548 19.1788 5.24858 19.0201 5.20604L6.785 1.92766Z",fill:t.fill,stroke:"none"}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.44161 7.4C7.86632 7.4 7.39995 7.86637 7.39995 8.44167V22.1081C7.39995 22.6834 7.86631 23.1498 8.4416 23.1498L22.1083 23.15C22.6836 23.15 23.1499 22.6836 23.1499 22.1083V8.44167C23.1499 7.86637 22.6836 7.4 22.1083 7.4H8.44161ZM10.3999 9.65C9.84766 9.65 9.39995 10.0977 9.39995 10.65C9.39995 11.2023 9.84766 11.65 10.3999 11.65H18.3999C18.9522 11.65 19.3999 11.2023 19.3999 10.65C19.3999 10.0977 18.9522 9.65 18.3999 9.65H10.3999ZM10.3999 14.15C9.84766 14.15 9.39995 14.5977 9.39995 15.15C9.39995 15.7023 9.84766 16.15 10.3999 16.15H15.3999C15.9522 16.15 16.3999 15.7023 16.3999 15.15C16.3999 14.5977 15.9522 14.15 15.3999 14.15H10.3999Z",fill:t.fill,stroke:"none"})),ot=t=>e(C,h(c({},t),{name:"PinterestIcon",svgParams:{height:24,width:24,stroke:"none",viewBox:"0 0 144 144"}}),e("g",null,e("g",null,e("path",{"shape-rendering":"geometricPrecision",fill:"#BD081C",style:{stroke:"none"},d:`M71.9,5.4C35.1,5.4,5.3,35.2,5.3,72c0,28.2,17.5,52.3,42.3,62c-0.6-5.3-1.1-13.3,0.2-19.1
            c1 .2 - 5.2, 7.8 - 33.1, 7.8 - 33.1 s - 2 - 4 - 2 - 9.9 c0 - 9.3, 5.4 - 16.2, 12 - 16.2 c5 .7, 0, 8.4, 4.3, 8.4, 9.4 c0, 5.7 - 3.6, 14.3 - 5.5, 22.2 c - 1.6, 6.6, 3.3, 12, 9.9, 12 c11 .8, 0, 20.9 - 12.5, 20.9 - 30.5 c0 - 15.9 - 11.5 - 27.1 - 27.8 - 27.1 c - 18.9, 0 - 30.1, 14.2 - 30.1, 28.9 c0, 5.7, 2.2, 11.9, 5, 15.2 c0 .5, 0.7, 0.6, 1.2, 0.5, 1.9 c - 0.5, 2.1 - 1.6, 6.6 - 1.8, 7.5 c - 0.3, 1.2 - 1, 1.5 - 2.2, 0.9 c - 8.3 - 3.9 - 13.5 - 16 - 13.5 - 25.8 c0 - 21, 15.3 - 40.3, 44 - 40.3 c23 .1, 0, 41, 16.5, 41, 38.4 c0, 22.9 - 14.5, 41.4 - 34.5, 41.4 c - 6.7, 0 - 13.1 - 3.5 - 15.3 - 7.6 c0, 0 - 3.3, 12.7 - 4.1, 15.8 c - 1.5, 5.8 - 5.6, 13 - 8.3, 17.5 c6 .2, 1.9, 12.8, 3, 19.7, 3 c36 .8, 0, 66.6 - 29.8, 66.6 - 66.6 C138 .5, 35.2, 108.7, 5.4, 71.9, 5.4 z `})))),st=t=>e(C,h(c({},t),{name:"RedditIcon",svgParams:{height:24,width:24,stroke:"none",viewBox:"0 0 256 256"}}),e("g",{style:"stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;",transform:"translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"},e("circle",{cx:"45",cy:"45",r:"45",style:"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,69,0); fill-rule: nonzero; opacity: 1;",transform:"  matrix(1 0 0 1 0 0) "}),e("path",{d:"M 75.011 45 c -0.134 -3.624 -3.177 -6.454 -6.812 -6.331 c -1.611 0.056 -3.143 0.716 -4.306 1.823 c -5.123 -3.49 -11.141 -5.403 -17.327 -5.537 l 2.919 -14.038 l 9.631 2.025 c 0.268 2.472 2.483 4.262 4.955 3.993 c 2.472 -0.268 4.262 -2.483 3.993 -4.955 s -2.483 -4.262 -4.955 -3.993 c -1.421 0.145 -2.696 0.973 -3.4 2.204 L 48.68 17.987 c -0.749 -0.168 -1.499 0.302 -1.667 1.063 c 0 0.011 0 0.011 0 0.022 l -3.322 15.615 c -6.264 0.101 -12.36 2.025 -17.55 5.537 c -2.64 -2.483 -6.801 -2.36 -9.284 0.291 c -2.483 2.64 -2.36 6.801 0.291 9.284 c 0.515 0.481 1.107 0.895 1.767 1.186 c -0.045 0.66 -0.045 1.32 0 1.98 c 0 10.078 11.745 18.277 26.23 18.277 c 14.485 0 26.23 -8.188 26.23 -18.277 c 0.045 -0.66 0.045 -1.32 0 -1.98 C 73.635 49.855 75.056 47.528 75.011 45 z M 30.011 49.508 c 0 -2.483 2.025 -4.508 4.508 -4.508 c 2.483 0 4.508 2.025 4.508 4.508 s -2.025 4.508 -4.508 4.508 C 32.025 53.993 30.011 51.991 30.011 49.508 z M 56.152 62.058 v -0.179 c -3.199 2.405 -7.114 3.635 -11.119 3.468 c -4.005 0.168 -7.919 -1.063 -11.119 -3.468 c -0.425 -0.515 -0.347 -1.286 0.168 -1.711 c 0.447 -0.369 1.085 -0.369 1.544 0 c 2.707 1.98 6.007 2.987 9.362 2.83 c 3.356 0.179 6.667 -0.783 9.407 -2.74 c 0.492 -0.481 1.297 -0.47 1.779 0.022 C 56.655 60.772 56.644 61.577 56.152 62.058 z M 55.537 54.34 c -0.078 0 -0.145 0 -0.224 0 l 0.034 -0.168 c -2.483 0 -4.508 -2.025 -4.508 -4.508 s 2.025 -4.508 4.508 -4.508 s 4.508 2.025 4.508 4.508 C 59.955 52.148 58.02 54.239 55.537 54.34 z",style:"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;",transform:" matrix(1 0 0 1 0 0) ","stroke-linecap":"round"}))),nt=t=>e(C,h(c({},t),{name:"ShareCopyLinkIcon",svgParams:{height:16,width:20}}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.1303 0.000379039C10.9833 -0.00959082 9.87819 0.431464 9.05309 1.22855L9.04556 1.23593L7.79145 2.48303C7.50587 2.767 7.50453 3.22877 7.78844 3.51441C8.07235 3.80004 8.53401 3.80139 8.81959 3.51741L10.0698 2.27423C10.6194 1.74503 11.3546 1.45229 12.1177 1.45892C12.8824 1.46556 13.6139 1.77236 14.1546 2.31323C14.6954 2.8541 15.0021 3.58577 15.0087 4.35065C15.0154 5.11353 14.7229 5.84857 14.1943 6.39829L12.0116 8.58145L12.0115 8.58155C11.7159 8.87739 11.36 9.10617 10.9682 9.25237C10.5764 9.39857 10.1577 9.45878 9.74051 9.42889C9.32337 9.39901 8.91752 9.27975 8.55051 9.07918C8.1835 8.87862 7.8639 8.60146 7.6134 8.26649C7.3722 7.94396 6.91526 7.87807 6.5928 8.11933C6.27034 8.36059 6.20447 8.81763 6.44567 9.14016C6.82142 9.64261 7.30082 10.0584 7.85134 10.3592C8.40186 10.66 9.01062 10.8389 9.63634 10.8838C10.2621 10.9286 10.8901 10.8383 11.4779 10.619C12.0656 10.3997 12.5994 10.0565 13.0429 9.61274L15.2302 7.42494L15.2391 7.4159C16.036 6.59062 16.4769 5.48529 16.467 4.33797C16.457 3.19066 15.9969 2.09316 15.1858 1.28185C14.3746 0.470545 13.2774 0.0103489 12.1303 0.000379039ZM7.29806 5.11625C6.67234 5.07142 6.0443 5.16173 5.45654 5.38103C4.86882 5.60031 4.33502 5.94355 3.89153 6.38727L1.70423 8.57506L1.69534 8.5841C0.898438 9.40939 0.457483 10.5147 0.467451 11.662C0.477418 12.8094 0.937512 13.9069 1.74864 14.7182C2.55976 15.5295 3.65701 15.9897 4.80407 15.9996C5.95113 16.0096 7.05622 15.5685 7.88132 14.7715L7.89035 14.7626L9.13717 13.5155C9.42192 13.2307 9.42192 12.7689 9.13717 12.4841C8.85243 12.1993 8.39077 12.1993 8.10602 12.4841L6.86392 13.7265C6.31432 14.2552 5.57945 14.5477 4.81675 14.5411C4.05204 14.5344 3.32054 14.2276 2.77979 13.6868C2.23904 13.1459 1.93231 12.4142 1.92566 11.6494C1.91904 10.8865 2.21146 10.1514 2.74011 9.60172L4.92287 7.41846C5.21854 7.12262 5.57437 6.89384 5.96621 6.74763C6.35805 6.60143 6.77674 6.54123 7.19389 6.57111C7.61104 6.601 8.01688 6.72026 8.38389 6.92082C8.75091 7.12138 9.0705 7.39855 9.32101 7.73352C9.56221 8.05605 10.0191 8.12194 10.3416 7.88068C10.6641 7.63942 10.7299 7.18238 10.4887 6.85985C10.113 6.3574 9.63359 5.94165 9.08307 5.64081C8.53255 5.33997 7.92378 5.16107 7.29806 5.11625Z"})),rt=t=>e(C,h(c({},t),{name:"ShareEmailIcon",svgParams:{height:16,width:21}}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.22192 2.20503C2.36754 1.77115 2.78269 1.45455 3.26639 1.45455H17.9332C18.4169 1.45455 18.8321 1.77118 18.9777 2.2051L10.5999 8.02107L2.22192 2.20503ZM2.16639 3.94198V13.4545C2.16639 14.0529 2.66307 14.5455 3.26639 14.5455H17.9332C18.5365 14.5455 19.0332 14.0529 19.0332 13.4545V3.94206L11.0204 9.50462C10.7679 9.67991 10.4318 9.67991 10.1793 9.50462L2.16639 3.94198ZM20.4999 2.55809V13.4545C20.4999 14.8562 19.3465 16 17.9332 16H3.26639C1.85304 16 0.699707 14.8562 0.699707 13.4545V2.54545C0.699707 1.14379 1.85304 0 3.26639 0H17.9332C19.3407 0 20.4904 1.13441 20.4998 2.52818C20.5 2.53816 20.5001 2.54813 20.4999 2.55809Z"})),lt=t=>e(C,h(c({},t),{name:"ShareFacebookIcon",svgParams:{height:17,width:16}}),e("path",{d:"M10.6543 1.38723C10.3533 0.960814 9.95383 0.61341 9.48976 0.374567C9.02902 0.137956 8.51908 0.0130716 8.00115 0.0100098C7.86087 0.0101844 7.72354 0.0502687 7.60519 0.125581C7.48684 0.200893 7.39237 0.308324 7.3328 0.435326L5.00368 5.67077H3.029C2.72335 5.66964 2.42059 5.73003 2.13876 5.84833C1.85692 5.96663 1.60177 6.14043 1.38849 6.35938C1.16707 6.57502 0.991841 6.83346 0.873459 7.11897C0.755078 7.40447 0.696022 7.71108 0.699885 8.02014V13.691C0.699885 14.3087 0.945273 14.9012 1.38207 15.338C1.81886 15.7747 2.41128 16.0201 3.029 16.0201H13.348C13.8951 16.021 14.425 15.8283 14.8438 15.4762C15.2626 15.1241 15.5434 14.6352 15.6366 14.0961L16.6493 8.4252C16.7252 8.09192 16.7252 7.74582 16.6493 7.41254C16.566 7.08205 16.4104 6.7742 16.1936 6.51128C15.9746 6.25 15.7017 6.03926 15.3936 5.89355C15.0762 5.7467 14.7306 5.67068 14.3809 5.67077H10.5328L11.0391 4.37457C11.2397 3.88784 11.3162 3.35894 11.2619 2.83533C11.1853 2.30894 10.9763 1.81065 10.6543 1.38723ZM4.75052 14.5518H3.029C2.91049 14.5525 2.79303 14.5296 2.68349 14.4844C2.57394 14.4392 2.47452 14.3726 2.39102 14.2885C2.23609 14.1199 2.14945 13.8997 2.14799 13.6708V8.02014C2.14913 7.901 2.17389 7.78328 2.22082 7.67377C2.26775 7.56427 2.33592 7.46515 2.4214 7.38216C2.50369 7.29576 2.60267 7.22698 2.71233 7.17998C2.822 7.13298 2.94007 7.10874 3.05938 7.10874H4.7809L4.75052 14.5518ZM10.6746 7.05811H14.3809C14.5145 7.05821 14.6462 7.08942 14.7657 7.14925C14.8875 7.20532 14.9948 7.28845 15.0796 7.39229C15.1675 7.49052 15.2301 7.60871 15.2619 7.73659C15.2922 7.8665 15.2922 8.00162 15.2619 8.13153L14.2493 13.8024C14.2087 14.017 14.094 14.2106 13.9252 14.3492C13.7619 14.4812 13.558 14.5528 13.348 14.5518H6.19862V6.45052L8.43659 1.38723H8.52773C8.9042 1.50037 9.23304 1.73413 9.4636 2.05252C9.69416 2.37092 9.81365 2.75627 9.80368 3.14925C9.8181 3.39741 9.78015 3.64583 9.69229 3.87836L9.23659 5.04292C9.15397 5.273 9.12623 5.51921 9.15558 5.76191C9.1877 6.00427 9.27425 6.23623 9.40875 6.44039C9.5535 6.6376 9.74028 6.80017 9.95558 6.91634C10.1774 7.03206 10.4244 7.0912 10.6746 7.08849V7.05811Z"})),ct=t=>e(C,h(c({},t),{name:"TwitterShareIcon",svgParams:{height:24,width:24,stroke:"none",viewBox:"0 0 512 512"}}),e("rect",{width:"512",height:"512",fill:"#1da1f2"}),e("path",{fill:"#fff",d:"M437 152a72 72 0 01-40 12a72 72 0 0032-40a72 72 0 01-45 17a72 72 0 00-122 65a200 200 0 01-145-74a72 72 0 0022 94a72 72 0 01-32-7a72 72 0 0056 69a72 72 0 01-32 1a72 72 0 0067 50a200 200 0 01-105 29a200 200 0 00309-179a200 200 0 0035-37"})),ut=t=>e(C,h(c({},t),{name:"AuthorBadgeIcon",svgParams:{height:15,width:12,viewBox:"0 0 12 15"}}),e("path",{d:"M3.50002 2.58453C3.33335 3.58454 2.50001 5.58455 1 7.08456L6 14.5","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round"}),e("circle",{cx:"6.00019",cy:"8.58503",r:"1.00001","stroke-width":"1"}),e("path",{d:"M3 0.5V2.58469H9.00004V0.5","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M8.49998 2.58453C8.66665 3.58454 9.49999 5.58455 11 7.08456L6 14.5","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M6.00012 9.58484L6.00012 14.5849","stroke-width":"1"})),Oe=t=>e(C,h(c({},t),{name:"BannedIcon",svgParams:{height:100,width:100},additionalStaticParams:{preserveAspectRatio:"none"}}),e("circle",{cx:"50",cy:"50",stroke:"#000000",r:100/2-4,strokeWidth:"8"}),e("line",{x1:"20",y1:"20",x2:"80",y2:"80",stroke:"#000000",strokeWidth:"8"})),dt=t=>e(C,h(c({},t),{name:"FoundingBadgeIcon",svgParams:{height:14,width:14,viewBox:"0 0 14 14"}}),e("circle",{cx:"3.93749",cy:"5.97916",r:"3.4375"}),e("path",{d:"M8.39583 9.49273C8.39583 11.3912 6.85681 12.9302 4.95833 12.9302C3.05985 12.9302 1.52083 11.3912 1.52083 9.49273C1.52083 7.59425 3.05985 6.05523 4.95833 6.05523C6.85681 6.05523 8.39583 7.59425 8.39583 9.49273Z"}),e("path",{d:"M12.4792 9.49273C12.4792 11.3912 10.9402 12.9302 9.04172 12.9302C7.14324 12.9302 5.60422 11.3912 5.60422 9.49273C5.60422 7.59425 7.14324 6.05523 9.04172 6.05523C10.9402 6.05523 12.4792 7.59425 12.4792 9.49273Z"}),e("circle",{cx:"6.99999",cy:"3.9375",r:"3.4375"}),e("circle",{cx:"10.0625",cy:"5.97916",r:"3.4375"})),mt=a=>{var o=a,{fill:t}=o,i=q(o,["fill"]);return e(C,h(c({},i),{name:"CheckboxCheckmarkIcon",svgParams:{viewBox:"0 0 16 13",height:16,width:13,fill:t||"white"}}),e("path",{d:"M5.71444 12.6276L0 6.9132L1.61147 5.30173L5.71444 9.39327L14.389 0.71875L16.0004 2.34165L5.71444 12.6276Z",stroke:t||"white"}))},ht=({name:t,label:i,info:a,checked:o,disabled:s,onChange:n,isRow:r=!0,className:u})=>{const d=e(T,null,e("span",{className:D("big-checkbox",{checked:o,disabled:s}),onClick:()=>!s&&(n==null?void 0:n(!o)),onKeyDown:l=>{l.key===" "&&(n==null||n(!o))},role:"checkbox","aria-checked":o,"aria-label":i||t,tabIndex:0},e(mt,{fill:"#ffffff"})));return e("label",{className:D("big-checkbox-input",u,{"big-checkbox-input-row":r})},!r&&d,e("div",{onClick:()=>{(i||a)&&!s&&(n==null||n(!o))}},i,a&&e("div",{className:"info"},a)),r&&d,e("input",{type:"hidden",name:t,"data-testid":t,value:String(o)}))},pt=({photoUrl:t,newPhotoUrl:i,newPhotoOrientation:a,updatePhoto:o})=>{const s=se(null),n=()=>P(void 0,null,function*(){const r=s.current.files[0];if(s.current.value="",!r){o({newPhotoUrl:null,newPhotoOrientation:null});return}let u;try{u=yield re(r)}catch(l){console.error("Failed to get data URL from file:",l),alert(l.message);return}let d;try{d=yield le(r)}catch(l){console.error("Failed to extract EXIF data from file:",l)}o({newPhotoUrl:u,newPhotoOrientation:d})});return e("div",{className:"profile-photo-wrap"},t&&e("div",{className:"profile-photo-image",style:{backgroundImage:`
            url($ {
                i || V(t, 144)
            })
            `,transform:ie(a)}}),!t&&e("div",{className:"profile-photo-image",style:{backgroundImage:`
            url($ {
                V(ne, 144)
            })
            `,transform:ie(a)}}),e(N,{onClick:()=>{(De()||Ue())&&s.current.click()}},e("input",{ref:s,type:"file",name:"photo",accept:"image/*",onChange:n}),e("div",{className:"add-photo-fab",onClick:r=>{r.preventDefault(),s.current.click()}},e(A1,{size:20,color:"var(--color-light-primary)"}))))},ft=t=>e(C,h(c({},t),{name:"TwitterIcon",svgParams:{height:24,width:24}}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.99998 3.01998C4.80189 3.01998 3.01998 4.80189 3.01998 6.99998V17C3.01998 19.1981 4.80189 20.98 6.99998 20.98H17C19.1981 20.98 20.98 19.1981 20.98 17V6.99998C20.98 4.80189 19.1981 3.01998 17 3.01998H6.99998ZM0.97998 6.99998C0.97998 3.67523 3.67523 0.97998 6.99998 0.97998H17C20.3247 0.97998 23.02 3.67523 23.02 6.99998V17C23.02 20.3247 20.3247 23.02 17 23.02H6.99998C3.67523 23.02 0.97998 20.3247 0.97998 17V6.99998Z"}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.4982 8.89054C11.8532 8.7949 11.1944 8.90507 10.6157 9.20538C10.0369 9.50569 9.56756 9.98085 9.27441 10.5633C8.98126 11.1457 8.87922 11.8057 8.98281 12.4495C9.0864 13.0933 9.39034 13.688 9.85141 14.149C10.3125 14.6101 10.9072 14.9141 11.5509 15.0176C12.1947 15.1212 12.8547 15.0192 13.4372 14.726C14.0196 14.4329 14.4948 13.9635 14.7951 13.3848C15.0954 12.806 15.2056 12.1473 15.1099 11.5023C15.0123 10.8444 14.7058 10.2353 14.2355 9.76498C13.7652 9.29468 13.1561 8.9881 12.4982 8.89054ZM9.78664 7.60766C10.7015 7.13297 11.7427 6.95883 12.7622 7.11001C13.8021 7.26422 14.7649 7.74881 15.5083 8.49219C16.2516 9.23557 16.7362 10.1983 16.8904 11.2383C17.0416 12.2578 16.8675 13.299 16.3928 14.2138C15.9181 15.1286 15.167 15.8705 14.2464 16.3339C13.3258 16.7972 12.2825 16.9585 11.265 16.7948C10.2474 16.631 9.30739 16.1506 8.57861 15.4218C7.84984 14.6931 7.36941 13.753 7.20567 12.7355C7.04193 11.7179 7.20322 10.6746 7.66659 9.75402C8.12996 8.83341 8.87181 8.08235 9.78664 7.60766Z"}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16.6 6.5001C16.6 6.00304 17.0029 5.6001 17.5 5.6001H17.51C18.007 5.6001 18.41 6.00304 18.41 6.5001C18.41 6.99715 18.007 7.4001 17.51 7.4001H17.5C17.0029 7.4001 16.6 6.99715 16.6 6.5001Z"})),Ct=t=>e(C,h(c({},t),{name:"LinkedinIcon",svgParams:{height:24,width:24}}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.35951 21.3538V8.96983H2.24333V21.3538H6.35951V21.3538ZM4.3014 7.27902C5.7368 7.27902 6.63021 6.32807 6.63021 5.13966C6.60346 3.9245 5.7368 2.99994 4.32863 2.99994C2.92061 2.99994 2 3.9245 2 5.13966C2 6.32807 2.89322 7.27902 4.27457 7.27902H4.30132H4.3014Z"}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.63708 21.3538H12.7532V14.4381C12.7532 14.0679 12.78 13.6982 12.8887 13.4336C13.1862 12.6941 13.8635 11.9282 15.0006 11.9282C16.4901 11.9282 17.0859 13.0639 17.0859 14.7286V21.3538H21.2017V14.253C21.2017 10.4492 19.171 8.67924 16.4629 8.67924C14.2423 8.67924 13.2675 9.92041 12.7259 10.7658H12.7533V8.96983H8.6372C8.69121 10.1319 8.6372 21.3538 8.6372 21.3538H8.63708Z"})),gt=t=>e(C,h(c({},t),{name:"TikTokIcon",svgParams:{height:24,width:24}}),e("path",{d:"M16.116 9.21952C17.4074 10.1422 18.9893 10.685 20.698 10.685V7.3988C20.3746 7.39887 20.0521 7.36517 19.7357 7.29818V9.8849C18.0272 9.8849 16.4455 9.34204 15.1537 8.41946V15.1257C15.1537 18.4805 12.4328 21.1999 9.07645 21.1999C7.82413 21.1999 6.66015 20.8215 5.69324 20.1725C6.79681 21.3003 8.33583 21.9999 10.0385 21.9999C13.395 21.9999 16.1161 19.2805 16.1161 15.9256V9.21952H16.116V9.21952ZM17.303 5.90412C16.6431 5.18348 16.2097 4.25219 16.116 3.22261V2.79993H15.2041C15.4336 4.10853 16.2165 5.22652 17.303 5.90412ZM7.8161 17.5981C7.44737 17.1149 7.24811 16.5238 7.24901 15.916C7.24901 14.3816 8.49357 13.1376 10.029 13.1376C10.3152 13.1375 10.5996 13.1813 10.8723 13.2678V9.9081C10.5536 9.86445 10.232 9.84591 9.91048 9.85271V12.4677C9.63757 12.3812 9.35299 12.3373 9.06677 12.3376C7.53132 12.3376 6.28683 13.5815 6.28683 15.1161C6.28683 16.2011 6.9089 17.1405 7.8161 17.5981Z",fill:"#FF004F"}),e("path",{d:"M15.1539 8.41939C16.4456 9.34197 18.0274 9.88483 19.7359 9.88483V7.29811C18.7822 7.09507 17.938 6.59696 17.3032 5.90412C16.2166 5.22645 15.4338 4.10846 15.2043 2.79993H12.8091V15.9255C12.8036 17.4556 11.5612 18.6946 10.0291 18.6946C9.12617 18.6946 8.32406 18.2645 7.81606 17.5981C6.90893 17.1405 6.28686 16.2011 6.28686 15.1161C6.28686 13.5817 7.53135 12.3376 9.0668 12.3376C9.36099 12.3376 9.64454 12.3834 9.91051 12.4678V9.85278C6.61317 9.92087 3.9613 12.6137 3.9613 15.9255C3.9613 17.5788 4.62168 19.0775 5.69347 20.1726C6.66039 20.8215 7.82437 21.2 9.07669 21.2C12.4331 21.2 15.154 18.4804 15.154 15.1257V8.41939H15.1539Z",fill:"white"}),e("path",{d:"M19.7368 7.29817V6.59874C18.8768 6.60004 18.0337 6.35933 17.3041 5.90411C17.95 6.61089 18.8005 7.09822 19.7368 7.29817ZM15.2052 2.79999C15.1833 2.67493 15.1664 2.54904 15.1548 2.42268V2H11.8476V15.1257C11.8423 16.6556 10.6 17.8946 9.06768 17.8946C8.61782 17.8946 8.19308 17.7879 7.81694 17.5983C8.32494 18.2645 9.12705 18.6946 10.0299 18.6946C11.5619 18.6946 12.8046 17.4558 12.8099 15.9256V2.79999H15.2052ZM9.91152 9.85284V9.10824C9.63518 9.07049 9.35658 9.05155 9.07763 9.05169C5.72098 9.05162 3 11.7712 3 15.1257C3 17.2288 4.06939 19.0822 5.69442 20.1725C4.62262 19.0775 3.96225 17.5787 3.96225 15.9255C3.96225 12.6138 6.61404 9.92093 9.91152 9.85284Z",fill:"#00F2EA"})),bt=t=>e(C,h(c({},t),{name:"TwitterIcon",svgParams:{height:24,width:24}}),e("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})),_t=t=>e(C,h(c({},t),{name:"YoutubeIcon",svgParams:{height:24,width:24}}),e("path",{d:"M21.582 6.07467C21.352 5.21467 20.674 4.53667 19.814 4.30667C18.254 3.88867 12 3.88867 12 3.88867C12 3.88867 5.746 3.88867 4.186 4.30667C3.326 4.53667 2.648 5.21467 2.418 6.07467C2 7.63467 2 11.8887 2 11.8887C2 11.8887 2 16.1427 2.418 17.7027C2.648 18.5627 3.326 19.2407 4.186 19.4707C5.746 19.8887 12 19.8887 12 19.8887C12 19.8887 18.254 19.8887 19.814 19.4707C20.675 19.2407 21.352 18.5627 21.582 17.7027C22 16.1427 22 11.8887 22 11.8887C22 11.8887 22 7.63467 21.582 6.07467ZM10 15.3527V8.42467L16 11.8887L10 15.3527Z"})),wt=({sub:t,onSetVisibility:i,source:a})=>{const o=t.publication;return e("div",{className:"edit-sub-visibility-row"},e("div",{className:"left"},e(Ae,{pub:o,logo_url:o.logo_url||o.author_photo_url}),e("span",null,o.name)),e("div",{className:"right"},e(ht,{checked:t.visibility==="public",onChange:()=>i(t.visibility==="public"?"private":"public")})))},ii=({profile:t,onFinalizeVisibility:i,onSetVisibility:a,source:o})=>{const{iString:s}=Fe();if(!t)return;const n=t.subscriptions.every(({visibility:l})=>l==="public"),r=()=>{a(t.subscriptions.reduce((l,{publication:p})=>h(c({},l),{[p.id]:n?"private":"public"}),{})),v(y.PROFILE_EDITED,{type:"visibility_toggled_all",for:"reads",count:t.subscriptions.length})},u=l=>p=>{a(t.subscriptions.reduce((f,{visibility:w,publication:I})=>h(c({},f),{[I.id]:I.id===l.id?p:w}),{})),v(y.PROFILE_EDITED,{type:"read_visibility_toggled",visibility:p})},d=e("button",{className:"small",onClick:r},s(n?"Hide all":"Show all"));return e("div",{className:"edit-sub-visibility-form"},e("div",{className:"bulk-action-row"},d),e("div",{className:"edit-sub-visibility-frame"},t.subscriptions.map(l=>e(wt,{sub:l,onSetVisibility:u(l.publication),source:o}))),e("div",{className:"modal-ctas"},e(N,{className:"primary",onClick:i},s("Done"))))};class vt extends ce{constructor(i,a){var o;super(i,a),this.formRef=b1(),this.state={newName:null,newHandle:null,newBio:null,newEmail:i.user&&i.user.is_magic?i.user.email:null,selectedSocial:"instagram"},i.isPostInvite&&!((o=i.user)!=null&&o.has_publication)&&(this.state.createPublication=!0)}componentDidMount(){var i,a,o;this.props.autoSubmit&&(this.isComplete()?(i=this.formRef.current)==null||i.handleSubmit():(o=(a=this.props).onAutoSubmitFailed)==null||o.call(a))}isComplete(){const{user:i,needsPhoto:a}=this.props;return i&&!i.is_magic&&i.name&&(!a||i.photo_url)}onFileInputChanged(){return P(this,null,function*(){const i=this.fileInput.files[0];if(this.fileInput.value="",!i){this.setState({newPhotoUrl:null,newPhotoOrientation:null});return}let a;try{a=yield re(i)}catch(s){console.error("Failed to get data URL from file:",s),alert(s.message);return}let o;try{o=yield le(i)}catch(s){console.error("Failed to extract EXIF data from file:",s)}this.setState({newPhotoUrl:a,newPhotoOrientation:o})})}onError(i){var a,o,s;this.props.autoSubmit&&!this.state.autoSubmitFailed&&(this.setState({autoSubmitFailed:!0}),(o=(a=this.props).onAutoSubmitFailed)==null||o.call(a)),this.setState({sentLoginEmail:!1}),((s=i.response)==null?void 0:s.status)===401&&this.sendLoginEmail()}createDefaultPublication(i,a){return P(this,null,function*(){const{iTemplate:o}=this.props;try{const s=yield K("/api/v1/publication/suggestion"),n=a||o`
            $ {
                i
            }
            on Substack `;yield K("/api/v1/publication",{method:"post",json:{name:i,subdomain:s.subdomain,hero_text:n,tos:!0}})}catch(s){v(y.DEFAULT_PUBLICATION_CREATION_FAILED),console.log("couldn't set up a default publication",s)}})}sendLoginEmail(){return P(this,null,function*(){const i=this.state.newEmail||this.props.freeSignupEmail;if(!(this.state.loading||!i)){this.setState({loading:!0});try{yield K("/api/v1/email-login",{method:"post",json:{email:i,redirect:document.location.href}}),this.setState({sentLoginEmail:!0})}catch(a){console.error("Failed send login email:",a)}this.setState({loading:!1})}})}render({className:i,user:a,numVisibleSubscriptions:o,numSubscriptions:s,freeSignup:n,freeSignupEmail:r,initialPhotoUrl:u,needsPhoto:d,optionalPhoto:l,showHandle:p=!0,token:f,text:w,onSuccess:I,prepareData:E,pageTitle:L,primaryEligiblePublications:H,isPostInvite:k,complete:_,profileExists:O,onSkip:Z,onEditReadVisibility:$,barebones:F,onEditRecommendations:pe,numRecommendationsToMake:fe,noSubscribeCta:Re,style:We,iString:g,iPlural:Q,showSocialHandle:je},{newPhotoUrl:Ce,newPhotoOrientation:Ke,newName:Je,newHandle:Ye,newEmail:ge,loading:qe,sentLoginEmail:Ge,sentAccountConfirmationEmail:Xe,newBio:be,createPublication:_e,selectedSocial:B,selectedSocialHandle:Qe}){const z=Ce||u||_1(a,{noFallbackToSignedOut:!0}),ze=typeof L=="string"?L:this.isComplete()?g("Update your profile"):g("Create your profile"),we=Je||a&&a.name||"",e1=Ye||(a==null?void 0:a.handle)||"",ve=typeof be=="string"?be:a&&a.bio||"",t1=(m,R)=>P(this,null,function*(){if(m.body.emailConfirmationRequired){this.setState({sentAccountConfirmationEmail:!0});return}_e&&(yield this.createDefaultPublication(we,ve)),I(m,R)});return e("div",{className:D("profile-updater",i),style:We},e("h2",{className:"page-title profile-updater-title"},ze),(z||d||l)&&e(pt,{photoUrl:z,newPhotoUrl:Ce,newPhotoOrientation:Ke,updatePhoto:({newPhotoOrientation:m,newPhotoUrl:R})=>this.setState({newPhotoOrientation:m,newPhotoUrl:R}),onFileInputChanged:()=>this.onFileInputChanged()}),e(Be,{ref:this.formRef,method:"put",action:"/api/v1/user/profile",prepareData:E,onSuccess:t1,onError:m=>this.onError(m),noInlineErrors:!0,loading:qe,autoLock:!0},e("label",{htmlFor:"name"},g("Name (Required)")),e("input",{autoFocus:!0,type:"text",className:"profile-name",placeholder:g("Type your name..."),name:"name",id:"name",value:we,onInput:m=>this.setState({newName:m.target.value})}),p&&e(T,null,e("label",{htmlFor:"handle"},g("Handle")),e("input",{type:"text",className:"profile-name",placeholder:g("Type your handle..."),name:"handle",id:"handle",value:e1,onInput:m=>this.setState({newHandle:m.target.value})})),!F&&e("label",{htmlFor:"bio"},"Bio"),!F&&e("textarea",{className:"profile-bio",placeholder:g("Say something about yourself..."),name:"bio",id:"bio",value:ve,onInput:m=>this.setState({newBio:m.target.value})}),je&&e(de,{gap:8},e("label",{htmlFor:"socialNetwork"},"Where else can you be found? (optional)"),e(x,{gap:8},e(H1,{name:"socialNetwork",value:B,onChange:m=>{this.setState({selectedSocial:m})},style:{width:130}},e("option",{value:"twitter",selected:B==="twitter"},e(x,{gap:4},e(bt,{height:20}),e(b.B4,null,"Twitter"))),e("option",{value:"instagram",selected:B==="instagram"},e(x,{gap:4},e(ft,{height:20}),e(b.B4,null,"Instagram"))),e("option",{value:"tiktok",selected:B==="tiktok"},e(x,{gap:4},e(gt,{height:20}),e(b.B4,null,"Tiktok"))),e("option",{value:"linkedin",selected:B==="linkedin"},e(x,{gap:4},e(Ct,{height:20}),e(b.B4,null,"Linked-In"))),e("option",{value:"youtube",selected:B==="youtube"},e(x,{gap:4},e(_t,{height:20}),e(b.B4,null,"Youtube")))),e("input",{style:{height:46},type:"text",className:"profile-social",placeholder:g("@yourhandle"),name:"socialHandle",value:Qe,onInput:m=>{this.setState({selectedSocialHandle:m.target.value})}}))),k&&e("input",{type:"hidden",name:"needs_bio",value:"true"}),k&&e("div",{className:"bio-guest-tip"},g("Tip: this will be shown at the bottom of your guest post")),k&&H&&(a==null?void 0:a.has_publication)&&H.length>1&&e(T,null,e("label",null,g("Publication to display")),e("div",{className:"primary-publication-selector"},H.map((m,R)=>e("label",{className:"publication-selector-row",for:`
            primary - radio - $ {
                m.id
            }
            `},e("input",{id:`
            primary - radio - $ {
                m.id
            }
            `,type:"radio",name:"primary_publication_user_id",value:m.id,checked:R===0}),e(Ae,{pub:m.publication,logo_url:V(m.publication.logo_url,28*2,{height:28*2,crop:"fill"}),linkify:!1,size:28,title:m.publication.name}),e("div",{className:"primary-publication-name"},m.publication.name))))),(!a||a.is_magic)&&!r&&!k&&e("input",{type:"email",className:"profile-email",placeholder:"Your email…",name:"email",value:ge,onInput:m=>this.setState({newEmail:m.target.value})}),!Re&&!(a&&(a.is_subscribed||a.is_free_subscribed)||n)&&e("label",{className:"profile-signup-checkbox"},e("input",{type:"checkbox",name:"free_signup",defaultChecked:!0})," ",g("Subscribe to the newsletter")),k&&!(a!=null&&a.has_publication)&&e("label",{className:"profile-signup-checkbox"},e("input",{type:"checkbox",name:"create_publication",id:"create-publication-checkbox",checked:_e,onChange:m=>this.setState({createPublication:m.target.checked})}),g("Create a Substack publication for me")),e("input",{type:"hidden",name:"confirmation_redirect_pathname",value:document.location.pathname}),e("input",{type:"hidden",name:"photo_url",value:z}),e("input",{type:"hidden",name:"user_id",value:(a==null?void 0:a.id)||""}),e("input",{type:"hidden",name:"needs_photo",value:!!d}),e("input",{type:"hidden",name:"token",value:f}),_&&e("input",{type:"hidden",name:"complete",value:!0}),e("div",{id:"error-container"},Ge&&e(b,{as:"div",translated:!0,className:"error other-error"},"If you have an account with us, we've sent an email to ",e("b",null,I18N.p(ge))," with a link that you can use to sign in."),Xe&&e("div",{className:"error other-error"},g("We have sent you a confirmation email. Please check your inbox before continuing."))),e("p",{className:D("left",{hidden:!(typeof o=="number"&&s>0&&$)})},O?Q("1 subscription is displayed on your profile","%1 subscriptions are displayed on your profile",o):Q("1 subscription will be displayed on your profile","%1 subscriptions will be displayed on your profile",o)," ","(",e("a",{onClick:$},g("edit")),")"),!O&&pe&&fe>0&&e("p",{className:"left second"},Q("1 recommendation will be made on your publication","%1 recommendations will be made on your publication",fe)," ","(",e("a",{onClick:pe},"edit"),")"),e("div",{className:"modal-ctas"},e("p",{className:D("skip",{hidden:!Z})},e("a",{className:"small",onClick:Z||(()=>{})},g("Skip for now"))),e(N,{className:"primary",type:"submit"},w||g("Save")),k&&e(T,null,e("input",{type:"hidden",name:"accept_tos",value:"true"}),e(b,{translated:!0,as:"div",className:"agreement-note"},"By signing up you agree to Substack’s"," ",e("a",{href:`
            $ {
                w1()
            }
            /pa`,target:"_blank",rel:"noopener"},"publisher agreement"))))))}}const yt=S1(vt);class kt extends me{renderChildren(){const n=this.props,{ref:i,onBeforeClose:a,contributor:o}=n,s=q(n,["ref","onBeforeClose","contributor"]);return e("div",{className:"profile-updater-modal"},o?e(It,h(c({},s),{onSuccess:()=>this.close(!0)})):e(yt,h(c({},s),{onSuccess:()=>this.close(!0)})))}}const It=({profile:t,user:i,pub:a,onSuccess:o,isOwnProfile:s})=>{const n=se(),{iString:r,iTemplate:u}=Fe(),[d,l]=M(null),[p,f]=M(null),w=d||t&&t.photo_url,[I,E]=M(t.name),[L,H]=M(t.bio),k=()=>P(void 0,null,function*(){var $;const _=($=n.current)!=null&&$.files?n.current.files[0]:null;if(n.value="",!_){l(null),f(null);return}let O;try{O=yield re(_)}catch(F){console.error("Failed to get data URL from file:",F),alert(F.message);return}let Z;try{Z=yield le(_)}catch(F){console.error("Failed to extract EXIF data from file:",F)}l(O),f(Z)});return e("div",{className:"profile-updater"},e("h2",{className:"page-title profile-updater-title"},"Edit contributor profile"),e("div",{className:"profile-photo-wrap"},w&&e("div",{className:"profile-photo-image",style:{backgroundImage:`url(${d||V(t.photo_url,144)})`,transform:ie(p)}}),e(N,{onClick:()=>{(De()||Ue())&&n.click()}},!w&&r("Set photo"),e("input",{ref:n,type:"file",name:"photo",accept:"image/ * ",onChange:()=>k()}))),e(Be,{method:"
            patch ",action:`/api/v1/publication/users/${t.id}`,onSuccess:o,autoLock:!0},e("
            input ",{type:"
            text ",className:"
            profile - name ",placeholder:"
            Contributor 's name…",name:"name",value:I,onInput:_=>E(_.target.value)}),e("textarea",{className:"profile-bio",placeholder:"Contributor'
            s bio… ",name:"
            bio ",value:L,onInput:_=>H(_.target.value)}),e("
            input ",{type:"
            hidden ",name:"
            photo_url ",value:w}),e("
            span ",{className:"
            notice "},e(b,{translated:!0,as:"
            p "},e("
            b ",null,"
            Note: "),"
            This is a contributor profile, viewable by ",I18N.p(a.name),"
            's readers."),s&&e(b,{translated:!0,as:"p"},"You may also edit your"," ",e("a",{native:!0,href:`${He(i)}`},"personal profile"),".")),e(N,{className:"primary",type:"submit"},r("Update profile"))))},Nt=({root:t=null,threshold:i=0,rootMargin:a}={})=>{if(typeof window=="undefined"||typeof IntersectionObserver=="undefined")return[null,null];const[o,s]=M(null),[n,r]=M(null),u=se(new IntersectionObserver(([d])=>s(d),{root:t,threshold:i,rootMargin:a}));return oe(()=>{var p;const d=(p=n==null?void 0:n.base)!=null&&p.addEventListener?n.base:n!=null&&n.addEventListener?n:null,{current:l}=u;return l.disconnect(),d&&l.observe(d),()=>l.disconnect()},[n]),[r,o]},Lt=92;class Pt extends ce{componentDidMount(){this.props.manualLoad||this.loadProfileUser()}componentDidUpdate(i){!this.props.manualLoad&&i.profileUser.id!==this.props.profileUser.id&&(this.setState({profileUser:null}),this.loadProfileUser())}loadProfileUser(){return P(this,null,function*(){if(!this.state.loadingProfile){this.setState({loadingProfile:!0});try{const i=yield K(`/api/v1/user/${this.props.profileUser.id}/profile`);this.setState({profileUser:i})}catch(i){console.error("Failed to load profile:",i)}this.setState({loadingProfile:!1})}})}getProfileUser(){return this.state.profileUser||this.props.profileUser}render({pub:i}){var o;const a=((o=this.getProfileUser().publications)==null?void 0:o.filter(s=>s.id!==i.id))||[];return e("div",{className:`user-profile ${this.props.isBanned?"banned":""}`},e(xt,{photo_url:J(this.getProfileUser()),banned:this.props.isBanned,email:this.getProfileUser().email,pub:i}),e("div",{className:"user-profile-name"},this.getProfileUser().name),e("div",{className:"user-profile-status"},this.getProfileUser().id===i.author_id?e("b",null,"Author of ",i.name):this.getProfileUser().subscribed_at?`Subscriber to ${i.name} since ${j(this.getProfileUser().subscribed_at).standardDate()}`:" "),a.length>0&&e("div",{className:"user-profile-publication"},"Author of"," ",v1(a.map(s=>e("a",{href:s.base_url,native:!0},s.name)))),this.props.isBanned&&e("div",{className:"user-profile-banned"},"Banned from commenting on ",i.name))}}class St extends me{onBeforeOpen(){this.profile.loadProfileUser()}renderChildren(){const o=this.props,{ref:i}=o,a=q(o,["ref"]);return e("div",{className:"user-profile-modal"},e(Pt,c({ref:s=>this.profile=s,manualLoad:!0},a)))}}const Et=({children:t,email:i,pub:a})=>e("a",{target:"_blank",href:y1(a,i)},t),xt=({photo_url:t,size:i=Lt,banned:a=!1,email:o="",className:s="",pub:n=null,children:r=void 0})=>{const u=e("img",{className:"user-profile-head",height:i,width:i,src:V(t,i*2,{height:i*2,crop:"fill"})});return e("div",{className:D(s,"profile-image-wrapper")},o&&n?e(Et,{email:o,pub:n},u):u,a&&e(Oe,{height:i}),r)},Mt=33;class A extends ce{constructor(){super(...arguments);te(this,"onClick",a=>{if(this.props.onClick)this.props.onClick(a);else if(this.props.modalProfile)a.preventDefault(),a.stopPropagation(),this.profileShown||(this.profileShown=!0,v(y.USER_HEAD_CLICKED,{is_self:this.isSelf()})),this.state.includeProfile?this.profile.open():this.setState({includeProfile:!0},()=>this.profile.open());else return!1})}static getSubject(a){return a?a.author_id?{id:a.author_id,name:a.author_name,photo_url:J(a,{preferAuthorPhoto:!0}),publications:a.subdomain?[a]:[]}:a.user_id?{id:a.user_id,name:a.name,photo_url:J(a),publications:[]}:{id:a.id,name:a.name,photo_url:J(a),publications:[]}:{id:null,name:null,photo_url:ne,publications:[]}}static hasCustomProfilePhoto(a){return!!A.getSubject(a).photo_url}isSelf(){return this.props.user&&this.props.user.id===A.getSubject(this.props.subject).id||!this.props.subject}profileUrl(){return this.props.url?this.props.url:this.props.isAuthor?k1(A.getSubject(this.props.subject),this.props.pub,{base:this.props.isStatic}):He(A.getSubject(this.props.subject))}onBeforeProfileClose(a){if(a)if(this.props.onEdit)this.props.onEdit();else return document.location.reload(),!1}render({subject:a,pub:o,user:s,badge:n,freeSignup:r,freeSignupEmail:u,token:d,isStatic:l,size:p,modalProfile:f,isBanned:w,lazy:I,tooltip:E,noLink:L,className:H}){p=p||Mt;const k=A.getSubject(a);return e("div",{className:D("user-head",{banned:w},H)},L?e(Se,{photo_url:k.photo_url,size:p,isStatic:l,isBanned:w,lazy:I,badge:n,tooltip:E,className:"default-pointer"}):e("a",{href:l||!f?this.profileUrl():null,onClick:this.onClick},e(Se,{photo_url:k.photo_url,size:p,isStatic:l,isBanned:w,lazy:I,badge:n,tooltip:E})),this.props.modalProfile&&!l&&typeof window!="undefined"&&this.state.includeProfile&&(this.isSelf()?e(kt,{ref:_=>this.profile=_,user:s,freeSignup:r,freeSignupEmail:u,needsPhoto:!0,token:d,onBeforeClose:_=>this.onBeforeProfileClose(_)}):e(St,{ref:_=>this.profile=_,profileUser:k,pub:o,isBanned:w})))}}const Se=({photo_url:t,size:i,isStatic:a,isBanned:o,lazy:s,badge:n,tooltip:r,style:u,children:d,className:l})=>{const p=!t&&!!d,f={founding:e(dt,{height:14,width:14,stroke:"var(--print_on_pop)",strokeWidth:1,title:r}),author:e(ut,{height:14,width:14,stroke:"var(--print_on_pop)",title:r})}[n];return e("div",{className:D("profile-img-wrap",l)},p?d:s?e(Dt,{photo_url:t,size:i,isStatic:a,badge:n,style:u}):e(Ut,{photo_url:t,size:i,isStatic:a,badge:n,style:u}),f&&e("div",{className:"profile-img-badge",title:r},f),o&&e(Oe,null))},Ze=(t,i)=>V(t,i*2,{height:i*2,crop:"fill"}),Dt=({photo_url:t,size:i,isStatic:a,badge:o,style:s})=>{const[n,r]=Nt({}),u=!r||r.isIntersecting?t:ne;return e(he,{url:Ze(u,i),size:i,ref:n,badge:o,isStatic:a,style:s})},Ut=({photo_url:t,size:i,isStatic:a,badge:o,style:s})=>e(he,{url:Ze(t,i),size:i,badge:o,isStatic:a,style:s}),he=({url:t,size:i,isStatic:a,ref:o,badge:s,className:n})=>a?e(E1,{className:n,src:V(t,i*2,{height:i*2,crop:"fill"}),ref:o,height:i,width:i,alt:s||""}):e(Ve,{className:n,src:t,imageProps:{height:i*2,crop:"fill"},maxWidth:i*2,ref:o,alt:s||""}),Ht=({imageUrl:t,alt:i,size:a,className:o})=>e(he,{className:`user-photo ${o||""}`,url:t,badge:i,size:a});var Ft=F1;function Vt(t,i){return Ft(t,i)}var Bt=Vt;const Ee=I1(Bt),$e=N1((t,i)=>e(N,h(c({},t),{className:"share-action",forwardedRef:i}),e("div",{className:"action-icon"},e(et,null)),e(b.B4,{translated:!0,color:"secondary"},"Other"))),At=({pub:t,post:i,profile:a,comment:o})=>{let s=typeof document!="undefined"?document.title:"",n="",r="";const u=Me(t).replace(/^https?:\/\//,"").replace(/\/$/);return o?(s=o.name?`Comment by ${o.name} on ${t.name}`:`Comment on ${t.name}`,n=P1(o.body,100),r=i.cover_image||null):i?(s=i.title||i.draft_title,n=u,r=i.cover_image||null):t?(s=t.name,n=u,r=t.logo_url):a&&(s=a.name,n=a.bio,r=J(a)),e(x,{className:`social-preview-box ${i?"post":t?"pub":"user"}`,radius:"md",border:"detail",padding:8},e("div",{className:"social-image-box"},(i||t)&&r&&e(Ve,{className:"social-image",src:r,alt:"",maxWidth:120,loading:"lazy"}),!i&&!t&&r&&e(Ht,{className:"social-image",imageUrl:r,size:52}),!r&&e(it,{className:"social-image-default"})),e(de,{paddingLeft:12,paddingY:8},e(b.H4,null,s),e(b.B4,{color:"secondary"},n)))},X=class X extends me{constructor(i,a){super(i,a),this.noFullscreen=!0}shouldComponentUpdate(i,a){return!Ee(this.props,i)||!Ee(this.state,a)}open(){return P(this,null,function*(){const i="direct",a={title:Le(c({},this.props)),url:this.props.shareUrl||Pe(i,c({medium:this.state.medium},this.props))};if(L1()&&navigator.share&&navigator.canShare&&navigator.canShare(a))try{yield navigator.share(a),v(y.NATIVE_SHARE_SUCCESS,{medium:this.state.medium||this.props.medium||"web",post_id:this.props.post?this.props.post.id:null,utm_campaign:this.state.utm_campaign||this.props.utm_campaign||"default"}),G(`${this.props.pub.subdomain} shared`,!0);return}catch(o){if(o.name==="AbortError")return;v(y.NATIVE_SHARE_FAILED,{errorName:o.name,errorMessage:o.message})}Ie(X.prototype,this,"open").call(this)})}fromEmail(){this.setState({medium:"email"},()=>{this.open()})}getClassName(){return"share-dialog"}onBeforeOpen(){this.setState({showButtons:!0})}onOpen(){v(y.SHARE_DIALOG_OPENED,{medium:this.state.medium||this.props.medium||"web",post_id:this.props.post?this.props.post.id:null,utm_campaign:this.state.utm_campaign||this.props.utm_campaign||ue.default})}onClose(){this.setState({copied:!1,utm_campaign:null})}renderChildren({post:i,pub:a,profile:o,comments:s,commentId:n,shareUrl:r,sharePrompt:u}){const d=s||n?"discussion":i?"post":a?"publication":o?"profile":null,l=u||(d?this.context.iTemplate`Share this ${d}`:this.context.iString("Share")),p=s&&n&&s.find(f=>f.id===n);return e(T,null,e("div",{className:"share-dialog-title"},l),e(de,{gap:32,paddingX:24,paddingTop:32,paddingBottom:48},(i||a||o)&&e(At,{post:i,pub:a,profile:o,comment:p}),e(Tt,h(c({utm_campaign:this.state.utm_campaign},this.props),{shareName:Le(c({},this.props)),shareUrl:r||Pe(null,c({medium:this.state.medium},this.props))}))))}};te(X,"contextType",x1);let xe=X;function Tt(t){const i=()=>{var o;(o=t.onChange)==null||o.call(t)},a=e(T,null,e(W,{onClick:()=>{j1(c({},t)),i()},icon:e(z1,null)},"Linkedin"),e(W,{onClick:()=>{K1(c({},t)),i()},icon:e(st,null)},"Reddit"),e(W,{onClick:()=>{J1(c({},t)),i()},icon:e(tt,null)},"Hacker News"),e(W,{onClick:()=>{Y1(c({},t)),i()},icon:e(ot,null)},"Pinterest"),e(W,{onClick:()=>{W1(c({},t)),i()},icon:e(ct,null)},"Twitter"));return e(x,{className:"share-dialog-buttons-wrapper",justifyContent:"space-between",gap:8},e(N,{onClick:()=>{q1(c({},t)),i()},className:"share-action"},e("div",{className:"action-icon"},e(nt,null)),e(b.B4,{translated:!0,color:"secondary"},"Copy link")),e(N,{className:"share-action",onClick:()=>{Q1(c({},t)),i()}},e("div",{className:"action-icon"},e(lt,null)),e(b.B4,{translated:!0,color:"secondary"},"Facebook")),e(N,{className:"share-action",onClick:()=>{G1(c({},t)),i()}},e("div",{className:"action-icon"},e(rt,null)),e(b.B4,{translated:!0,color:"secondary"},"Email")),!t.disableNotes&&e(N,{className:"share-action",onClick:()=>{X1(c({},t)),i()}},e("div",{className:"action-icon"},e(at,null)),e(b.B4,{color:"secondary"},"Note")),t.useCustomMenu?e(Ot,c({},t),a):e(D1,{layerOptions:{triggerOffset:-20},className:"share-dialog-network-menu",trigger:e($e,null),onOpen:()=>{v(y.SHARE_DIALOG_MORE_OPTION_CLICKED,{medium:t.medium||"web",post_id:t.post?t.post.id:null,utm_campaign:t.utm_campaign||ue.default})}},a))}const Ot=t=>{const[i,a]=B1();return e(M1,{onClick:()=>{a(),v(y.SHARE_DIALOG_MORE_OPTION_CLICKED,{medium:t.medium||"web",post_id:t.post?t.post.id:null,utm_campaign:t.utm_campaign||ue.default})}},e($e,null),e(V1,{attachOnActive:!0,className:"share-dialog-network-menu custom-pub-theme-share-dialog-network-menu",noTail:!0,ref:i,useDrawerOnMobile:!0},t.children))};export{ht as B,et as D,ii as E,dt as F,A1 as I,z1 as L,ti as M,Se as P,xe as S,bt as T,xt as U,_t as Y,it as a,Nt as b,At as c,Tt as d,kt as e,nt as f,O1 as g,Pe as h,Ee as i,Le as j,W1 as k,X1 as l,j1 as m,Q1 as n,yt as o,G1 as p,Ct as q,gt as r,q1 as s,Te as t,T1 as u,ft as v,A as w,S as x,rt as y};
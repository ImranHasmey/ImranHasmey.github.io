var Gs = Object.defineProperty,
    Xs = Object.defineProperties;
var Js = Object.getOwnPropertyDescriptors;
var st = Object.getOwnPropertySymbols;
var hn = Object.prototype.hasOwnProperty,
    gn = Object.prototype.propertyIsEnumerable;
var Dt = (t, s, n) => s in t ? Gs(t, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[s] = n,
    I = (t, s) => {
        for (var n in s || (s = {})) hn.call(s, n) && Dt(t, n, s[n]);
        if (st)
            for (var n of st(s)) gn.call(s, n) && Dt(t, n, s[n]);
        return t
    },
    O = (t, s) => Xs(t, Js(s));
var pe = (t, s) => {
    var n = {};
    for (var o in t) hn.call(t, o) && s.indexOf(o) < 0 && (n[o] = t[o]);
    if (t != null && st)
        for (var o of st(t)) s.indexOf(o) < 0 && gn.call(t, o) && (n[o] = t[o]);
    return n
};
var He = (t, s, n) => (Dt(t, typeof s != "symbol" ? s + "" : s, n), n);
var se = (t, s, n) => new Promise((o, a) => {
    var i = c => {
            try {
                l(n.next(c))
            } catch (u) {
                a(u)
            }
        },
        r = c => {
            try {
                l(n.throw(c))
            } catch (u) {
                a(u)
            }
        },
        l = c => c.done ? o(c.value) : Promise.resolve(c.value).then(i, r);
    l((n = n.apply(t, s)).next())
});
import {
    h as k,
    p as B,
    y as e,
    s as bt,
    i as z,
    cy as wt,
    cZ as we,
    o as le,
    aD as Ue,
    b3 as zn,
    bT as Zs,
    dJ as Qs,
    t as V,
    E,
    fY as jn,
    U as Je,
    aj as Yt,
    fl as eo,
    hk as to,
    fd as no,
    dO as fn,
    x as so,
    br as Gt,
    hT as Xt,
    hA as Ot,
    i9 as oo,
    ia as ao,
    b8 as Pe,
    u as We,
    r as Un,
    a3 as Wn,
    du as ae,
    bJ as Ze,
    a$ as Qe,
    gG as io,
    bO as ro,
    dx as lo,
    aV as co,
    k as Kn,
    h7 as Ft,
    d$ as uo,
    D as ut,
    hU as po,
    ib as mo,
    ic as ho,
    C as go,
    A as qn,
    a7 as fo,
    dl as yn,
    aa as _n,
    cG as yo,
    cE as _o,
    bL as Cn,
    c2 as bn,
    gS as Ke,
    aL as Co,
    a4 as bo,
    H as wo,
    es as vo,
    ap as Yn,
    id as Gn,
    eq as ko,
    ho as So,
    bH as Po,
    f2 as vt,
    gy as Xn,
    bf as Jn,
    fs as Io,
    fp as Zn,
    gF as No,
    hO as To,
    ie as xo,
    q as wn,
    ig as Eo,
    aX as vn,
    bC as Mo,
    b2 as Lo,
    M as Bo
} from "./tracking-376cff7a.js";
import {
    u as D,
    F as S,
    T as w,
    a as v,
    O as de,
    h as Qn,
    c as x,
    S as ge,
    B as Fe,
    l as Jt,
    b as Y,
    k as Do,
    o as Fo,
    p as Ao,
    U as es,
    M as Ro
} from "./FlexBox-1a755411.js";
import {
    a as Zt,
    E as ts,
    f as Oo,
    I as ns,
    C as $o,
    b as Vo
} from "./CommentBody-36a2d638.js";
import {
    i as kt,
    L as Ho
} from "./isOnReader-b27f4ba9.js";
import {
    aE as fe,
    by as ss,
    V as $t,
    t as zo,
    L as Vt,
    aY as jo,
    bw as Uo,
    bn as Wo,
    k as Ko,
    bz as qo,
    l as Yo,
    aK as Go,
    B as Xo,
    h as os,
    G as as,
    $ as Qt,
    bA as Jo,
    bB as Zo,
    a1 as Ht,
    aB as Qo,
    bC as ea,
    bD as ta,
    p as na,
    C as sa,
    M as oa,
    ai as aa,
    U as is,
    W as ia,
    a5 as ra,
    a6 as la,
    aC as ca,
    a2 as rs,
    a7 as ua,
    ag as da,
    a9 as pa,
    u as ma,
    bE as ha
} from "./homepage_hooks-47e7a4e7.js";
import {
    V as zt,
    i as Ie,
    j as ls,
    P as Ne,
    k as ga,
    a as fa,
    L as ya,
    l as _a,
    f as Ca,
    e as cs,
    g as ba,
    c as wa,
    A as va
} from "./AlertDialog-d9b964a5.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    d as us,
    V as ka,
    m as M,
    a2 as Sa,
    av as Pa,
    j as Ia,
    aw as qe,
    H as Na,
    N as Ta,
    n as St
} from "./ProfileHoverCard-c8bfb61a.js";
import {
    R as en,
    B as pt,
    a as xa,
    u as Ea
} from "./user-e16f1619.js";
import {
    P as Ma,
    A as ds
} from "./_defineProperty-105d261c.js";
import {
    u as Pt
} from "./useResponsive-08e338a7.js";
import {
    c as J,
    X as La
} from "./x-fc38e969.js";
import {
    T as Ae,
    u as Ba,
    b as Da
} from "./Tooltip-86d56346.js";
import {
    M as kn,
    r as tn,
    P as Fa,
    a as ps
} from "./_baseEach-63ad03e0.js";
import {
    _ as Aa
} from "./decodeHtmlEntitiesFast-d19e2d0c.js";
import {
    C as nn
} from "./chevron-right-925bdc12.js";
import {
    c as mt
} from "./traverse-bb97748e.js";
import {
    h as jt,
    t as Ut
} from "./share_dialog-b74d3337.js";
import {
    D as ht
} from "./Divider-0a4efe7e.js";
import {
    a as X,
    M as ms,
    b as Ra
} from "./Menu-5342012d.js";
import {
    u as sn,
    T as De,
    C as hs
} from "./HoverCard-cbdee1d2.js";
import {
    L as gt
} from "./link-90872791.js";
import {
    D as Ye
} from "./download-8a01f574.js";
import {
    g as Oa,
    b as $a
} from "./free_email_form-1d3fc4be.js";
import {
    M as Sn,
    a as Va,
    S as Ha
} from "./Modal-ab851ad1.js";
import {
    k as gs
} from "./keyBy-bc7e2f81.js";
import {
    g as fs,
    P as za
} from "./podcast_apps-4f303ac3.js";
import {
    D as ja
} from "./_baseIteratee-fbbabc87.js";
import {
    u as Ua
} from "./dropdown_menu_typed-c164b42b.js";
import {
    a as Wa,
    C as Ka
} from "./Select-f97196dc.js";
import {
    S as ys
} from "./SubstackLogoIcon-3ca41075.js";
import {
    f as qa
} from "./publication-1bbad178.js";
import {
    r as _s
} from "./routeClick-cd1b3f9b.js";
import {
    T as Ya
} from "./Textarea-ed5c1b37.js";
import {
    P as Cs,
    T as bs,
    a as Ga
} from "./TextLink-9c0e1c8b.js";
import {
    M as Xa,
    T as Ja
} from "./Unit-93a04fbc.js";
import {
    UserBadge as Za
} from "./UserBadge-a694a663.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            s = new Error().stack;
        s && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[s] = "ede15de2-45e0-4bf2-a723-5053e2ff848f", t._sentryDebugIdIdentifier = "sentry-dbid-ede15de2-45e0-4bf2-a723-5053e2ff848f")
    } catch (n) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wt = J("AlertCircle", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "8",
        y2: "12",
        key: "1pkeuh"
    }],
    ["line", {
        x1: "12",
        x2: "12.01",
        y1: "16",
        y2: "16",
        key: "4dfq90"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qa = J("CheckCircle", [
    ["path", {
        d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
        key: "g774vq"
    }],
    ["path", {
        d: "m9 11 3 3L22 4",
        key: "1pflzl"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ei = J("Gauge", [
    ["path", {
        d: "m12 14 4-4",
        key: "9kzdfg"
    }],
    ["path", {
        d: "M3.34 19a10 10 0 1 1 17.32 0",
        key: "19p75a"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ti = J("Image", [
    ["rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn"
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
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ni = J("Maximize", [
    ["path", {
        d: "M8 3H5a2 2 0 0 0-2 2v3",
        key: "1dcmit"
    }],
    ["path", {
        d: "M21 8V5a2 2 0 0 0-2-2h-3",
        key: "1e4gt3"
    }],
    ["path", {
        d: "M3 16v3a2 2 0 0 0 2 2h3",
        key: "wsl5sc"
    }],
    ["path", {
        d: "M16 21h3a2 2 0 0 0 2-2v-3",
        key: "18trek"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const si = J("Minimize", [
    ["path", {
        d: "M8 3v3a2 2 0 0 1-2 2H3",
        key: "hohbtr"
    }],
    ["path", {
        d: "M21 8h-3a2 2 0 0 1-2-2V3",
        key: "5jw1f3"
    }],
    ["path", {
        d: "M3 16h3a2 2 0 0 1 2 2v3",
        key: "198tvr"
    }],
    ["path", {
        d: "M16 21v-3a2 2 0 0 1 2-2h3",
        key: "ph8mxp"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pn = J("MoreVertical", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "1",
        key: "41hilf"
    }],
    ["circle", {
        cx: "12",
        cy: "5",
        r: "1",
        key: "gxeob9"
    }],
    ["circle", {
        cx: "12",
        cy: "19",
        r: "1",
        key: "lyex9k"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oi = J("Pause", [
    ["rect", {
        width: "4",
        height: "16",
        x: "6",
        y: "4",
        key: "iffhe4"
    }],
    ["rect", {
        width: "4",
        height: "16",
        x: "14",
        y: "4",
        key: "sjin7j"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ai = J("PictureInPicture2", [
    ["path", {
        d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",
        key: "daa4of"
    }],
    ["rect", {
        width: "10",
        height: "7",
        x: "12",
        y: "13",
        rx: "2",
        key: "1nb8gs"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ii = J("RotateCcw", [
    ["path", {
        d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
        key: "1357e3"
    }],
    ["path", {
        d: "M3 3v5h5",
        key: "1xhq8a"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ri = J("Rss", [
    ["path", {
        d: "M4 11a9 9 0 0 1 9 9",
        key: "pv89mb"
    }],
    ["path", {
        d: "M4 4a16 16 0 0 1 16 16",
        key: "k0647b"
    }],
    ["circle", {
        cx: "5",
        cy: "19",
        r: "1",
        key: "bfqh0e"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const li = J("SkipForward", [
    ["polygon", {
        points: "5 4 15 12 5 20 5 4",
        key: "16p6eg"
    }],
    ["line", {
        x1: "19",
        x2: "19",
        y1: "5",
        y2: "19",
        key: "futhcm"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const In = J("Trash2", [
    ["path", {
        d: "M3 6h18",
        key: "d0wm0j"
    }],
    ["path", {
        d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
        key: "4alrt4"
    }],
    ["path", {
        d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
        key: "v07s0e"
    }],
    ["line", {
        x1: "10",
        x2: "10",
        y1: "11",
        y2: "17",
        key: "1uufr5"
    }],
    ["line", {
        x1: "14",
        x2: "14",
        y1: "11",
        y2: "17",
        key: "xtxkd"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ci = J("Volume1", [
    ["polygon", {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
        key: "16drj5"
    }],
    ["path", {
        d: "M15.54 8.46a5 5 0 0 1 0 7.07",
        key: "ltjumu"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ui = J("Volume", [
    ["polygon", {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
        key: "16drj5"
    }]
]);

function di({
    category: t,
    language: s = "en"
}) {
    const {
        iString: n
    } = I18N.i(s);
    switch (t) {
        case "hate":
            return n("Hate");
        case "private_information":
            return n("Private information");
        case "plagiarism":
            return n("Plagiarism");
        case "impersonation":
            return n("Impersonation");
        case "illegal_activity":
            return n("Illegal activity");
        case "spam":
            return n("Spam");
        case "pornography":
            return n("Pornography");
        case "other":
            return n("Other");
        default:
            return console.error("unrecognized category", t), n("Other")
    }
}
const pi = "_link_14atu_1",
    mi = "_confirmModal_14atu_6",
    hi = "_confirmDescription_14atu_11",
    Le = {
        link: pi,
        confirmModal: mi,
        confirmDescription: hi
    },
    gi = ["Select a reason", "hate", "private_information", "plagiarism", "impersonation", "illegal_activity", "spam", "pornography", "other"],
    b1 = ["Select a reason", "impersonation", "spam", "pornography", "other"],
    fi = ({
        category: t,
        language: s = "en"
    }) => {
        const {
            iString: n
        } = I18N.i(s);
        switch (t) {
            case "Select a reason":
                return n("Select a reason");
            default:
                return di({
                    category: t,
                    language: s
                })
        }
    };

function yi({
    isOpen: t,
    pub: s,
    onClose: n,
    onSubmit: o = () => Promise.resolve(),
    canReportToAdmins: a = !1,
    reasons: i = gi
}) {
    var b;
    const [r, l] = k(i[0]), {
        iString: c,
        language: u
    } = D(), [d, p] = k(null), [h, m] = k(!1), [f, _] = k(!1), [g, y] = k(!a), {
        popToast: C
    } = sn();
    return B(() => {
        t && (l(i[0]), y(!a))
    }, [t, a, i]), B(() => {
        _(g ? r !== i[0] : !!d)
    }, [g, r, d, i]), a && !s ? (console.error("Must supply pub if reporting to pub admins is possible"), null) : e(z, null, e(Sn, {
        isOpen: t,
        onClose: n,
        disableCloseOnBackdropClick: h || g
    }, e(v, {
        paddingTop: 20,
        paddingX: 20,
        gap: 20
    }, e(S, {
        justifyContent: "space-between",
        alignItems: "start"
    }, e(v, {
        width: 48,
        height: 48,
        bg: "accent-red",
        justifyContent: "center",
        alignItems: "center",
        radius: "full"
    }, e(Wt, {
        size: 24,
        color: "var(--color-accent-red)"
    })), e(Qn, {
        "aria-label": "Options",
        size: 32,
        fill: "empty",
        onClick: n
    }, e(La, {
        size: 20
    }))), e(_i, {
        onReportToSubstackClicked: () => {
            y(!0)
        },
        reportingToSubstack: g,
        pub: s != null ? s : null
    }), g && e(z, null, e(v, {
        gap: 8
    }, e(w.B4, {
        weight: "bold",
        translated: !0
    }, "Reason"), e(Wa, {
        value: r,
        onChange: P => {
            l(P)
        }
    }, i.map(P => e("option", {
        value: P,
        key: P
    }, fi({
        category: P,
        language: u
    })))))), e(v, {
        gap: 8
    }, e(S, {
        justifyContent: "space-between"
    }, g ? e(w.B4, {
        weight: "bold",
        translated: !0
    }, "Additional details") : e(w.B4, {
        weight: "bold",
        translated: !0
    }, "Reason"), g && e(w.B4, {
        color: "secondary",
        translated: !0
    }, "Optional")), e(Ya, {
        onChange: P => {
            p(P.currentTarget.value || null)
        },
        placeholder: c("Describe why you're reporting this...")
    }))), e(kn, {
        includeDivider: !1,
        alignment: "center",
        primaryButton: e(de, {
            disabled: !f,
            priority: "destructive",
            onClick: () => {
                m(!0)
            }
        }, c("Submit"))
    })), e(Sn, {
        className: Le.confirmModal,
        isOpen: h,
        onClose: () => {
            m(!1)
        }
    }, e(Va, {
        title: e(S, {
            justifyContent: "center"
        }, e(w.H4, {
            weight: "bold",
            translated: !0
        }, "Submit report?")),
        description: e(v, {
            className: Le.confirmDescription
        }, g ? e(w.B3, {
            color: "secondary",
            translated: !0
        }, "Reported content will be reviewed and removed if it violates our Content Guidelines.") : e(w.B3, {
            color: "secondary",
            translated: !0
        }, "Your report and profile will be shared with the admins of ", e("strong", null, I18N.p((b = s == null ? void 0 : s.name) != null ? b : "")))),
        includeClose: !1
    }), e(kn, {
        includeDivider: !1,
        alignment: "center",
        primaryButton: e(de, {
            priority: "destructive",
            onClick: () => se(this, null, function*() {
                m(!1);
                try {
                    yield o({
                        reportCategory: g ? r : null,
                        details: d,
                        reportedToSubstack: g
                    })
                } catch (P) {
                    console.error("could not submit report", P);
                    const N = bt(P),
                        T = N && N.startsWith("Something went wrong") ? N : `Something went wrong: ${N}`;
                    C(() => e(De, {
                        text: T
                    }));
                    return
                }
                C(() => e(De, {
                    text: "Your report was submitted",
                    Icon: Qa
                }))
            })
        }, c("Report")),
        secondaryButton: e(de, {
            priority: "secondary",
            onClick: () => {
                m(!1)
            }
        }, c("Cancel"))
    })))
}

function _i({
    reportingToSubstack: t,
    pub: s,
    onReportToSubstackClicked: n
}) {
    var o, a;
    return t ? e(v, {
        gap: 8
    }, e(w.H4, {
        translated: !0
    }, "Report to Substack"), e(w.B3, {
        translated: !0,
        color: "secondary"
    }, "Report content that violates Substack's", " ", e("a", {
        className: Le.link,
        href: "https://substack.com/content",
        target: "_blank",
        rel: "noreferrer"
    }, "Content Guidelines"), " ", "below. Your report is only viewed by our staff. Find additional reporting options and information in our", " ", e("a", {
        className: Le.link,
        href: "https://support.substack.com/hc/en-us/articles/23248646000532",
        target: "_blank",
        rel: "noreferrer"
    }, "Trust and Safety Help Center"), ".")) : e(z, null, e(v, {
        gap: 8
    }, e(w.H4, {
        translated: !0
    }, "Report to the ", I18N.p((o = s == null ? void 0 : s.name) != null ? o : ""), " admins"), e(v, {
        gap: 16
    }, e(w.B3, {
        color: "secondary",
        translated: !0
    }, "Your report and profile will be shared with the admins of ", e("strong", null, I18N.p((a = s == null ? void 0 : s.name) != null ? a : "")), ", since at Substack we believe publication owners are best able to moderate their communities."), e(w.B3, {
        translated: !0,
        color: "secondary"
    }, "If you believe something violates Substack's", " ", e("a", {
        className: Le.link,
        href: "https://substack.com/content",
        target: "_blank",
        rel: "noreferrer"
    }, "Content Guidelines"), ", you can", " ", e("a", {
        className: Le.link,
        onClick: () => {
            n()
        }
    }, "report it to Substack"), " ", "instead."))))
}
const ws = wt(() => {});

function w1({
    children: t
}) {
    const [s, n] = k(null), o = () => n(null);
    return e(ws.Provider, {
        value: n
    }, t, e(yi, {
        isOpen: !!s,
        onClose: o,
        pub: s == null ? void 0 : s.pub,
        canReportToAdmins: s == null ? void 0 : s.canReportToAdmins,
        onSubmit: (...a) => se(this, null, function*() {
            return o(), s == null ? void 0 : s.onSubmit(...a)
        })
    }))
}

function Ci() {
    return we(ws)
}
const bi = "_videoPlayer_5atec_1",
    wi = "_video_5atec_1",
    Nn = {
        videoPlayer: bi,
        video: wi
    };

function vi(t) {
    const [s, n] = k(null);
    return B(() => {
        const o = r => {
                if (!r || r.length === 0) return;
                const l = r[0];
                if (l && l.target) {
                    const {
                        width: c
                    } = l.contentRect;
                    n(c)
                }
            },
            a = new ResizeObserver(o),
            i = t.current;
        return i && a.observe(i), () => {
            a.disconnect()
        }
    }, [t]), s
}

function ki({
    mediaUpload: t,
    composing: s
}) {
    const {
        isMobile: n
    } = fe(), o = le(null), a = le(null), i = vi(a);
    ss({
        videoPlayerRef: o,
        showPaywall: !1,
        disable: !1
    });
    const {
        isHidden: r,
        onShow: l
    } = Zt(!!t.explicit), {
        iString: c
    } = D();
    let u = null;
    t.width !== null && t.height !== null && (u = t.width / t.height);
    let d = {};
    if (n) {
        const p = i != null ? i : 295;
        d = u ? u > 1 ? {
            width: `${p}px`,
            height: `${p/u}px`
        } : {
            height: "300px",
            width: `${300*u}px`
        } : {}
    } else if (u) {
        const p = i || (s ? 408 : 520);
        d = u ? u > 1 ? {
            width: `${p}px`,
            height: `${p/u}px`
        } : {
            height: "400px",
            width: `${400*u}px`
        } : {}
    }
    return e(v, {
        width: "full",
        ref: a
    }, e(v, {
        style: d
    }, e($t, {
        ref: o,
        mediaUpload: t,
        startMuted: !0,
        autoPlay: s,
        renderPlayButton: () => e(zt, {
            isPlaying: !1,
            size: n ? 40 : 56
        }),
        pub: null,
        videoPlayerClassName: Nn.videoPlayer,
        videoClassName: Nn.video,
        omitBackgroundColor: !0,
        stopPropagation: !0,
        noKeyboardShortcuts: !0
    }), !s && r && e(ts, {
        radius: "md",
        onShow: l,
        description: c("This video was hidden by your settings.")
    })))
}
var je = (t => (t.Removed = "removed", t.Unavailable = "unavailable", t.BlockedYou = "blocked-you", t.YouBlocked = "you-blocked", t.YouMuted = "you-muted", t))(je || {});

function Si(t) {
    return t.type === "missing"
}
var ne = {
        fullscreenEnabled: 0,
        fullscreenElement: 1,
        requestFullscreen: 2,
        exitFullscreen: 3,
        fullscreenchange: 4,
        fullscreenerror: 5,
        fullscreen: 6
    },
    Tn = ["webkitFullscreenEnabled", "webkitFullscreenElement", "webkitRequestFullscreen", "webkitExitFullscreen", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"],
    xn = ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"],
    En = ["msFullscreenEnabled", "msFullscreenElement", "msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"],
    Q = typeof window != "undefined" && typeof window.document != "undefined" ? window.document : {},
    oe = "fullscreenEnabled" in Q && Object.keys(ne) || Tn[0] in Q && Tn || xn[0] in Q && xn || En[0] in Q && En || [],
    Pi = {
        requestFullscreen: function(t) {
            return t[oe[ne.requestFullscreen]]()
        },
        requestFullscreenFunction: function(t) {
            return t[oe[ne.requestFullscreen]]
        },
        get exitFullscreen() {
            return Q[oe[ne.exitFullscreen]].bind(Q)
        },
        get fullscreenPseudoClass() {
            return ":" + oe[ne.fullscreen]
        },
        addEventListener: function(t, s, n) {
            return Q.addEventListener(oe[ne[t]], s, n)
        },
        removeEventListener: function(t, s, n) {
            return Q.removeEventListener(oe[ne[t]], s, n)
        },
        get fullscreenEnabled() {
            return !!Q[oe[ne.fullscreenEnabled]]
        },
        set fullscreenEnabled(t) {},
        get fullscreenElement() {
            return Q[oe[ne.fullscreenElement]]
        },
        set fullscreenElement(t) {},
        get onfullscreenchange() {
            return Q[("on" + oe[ne.fullscreenchange]).toLowerCase()]
        },
        set onfullscreenchange(t) {
            return Q[("on" + oe[ne.fullscreenchange]).toLowerCase()] = t
        },
        get onfullscreenerror() {
            return Q[("on" + oe[ne.fullscreenerror]).toLowerCase()]
        },
        set onfullscreenerror(t) {
            return Q[("on" + oe[ne.fullscreenerror]).toLowerCase()] = t
        }
    };
const me = Pi;

function Ii() {
    var t = k(!1),
        s = t[0],
        n = t[1],
        o = le(null);
    B(function() {
        var r = function() {
            n(me.fullscreenElement === o.current)
        };
        return me.addEventListener("fullscreenchange", r),
            function() {
                return me.removeEventListener("fullscreenchange", r)
            }
    }, []);
    var a = Ue(function() {
            if (me.fullscreenElement) return me.exitFullscreen().then(function() {
                return me.requestFullscreen(o.current)
            });
            if (o.current) return me.requestFullscreen(o.current)
        }, []),
        i = Ue(function() {
            return me.fullscreenElement === o.current ? me.exitFullscreen() : Promise.resolve()
        }, []);
    return zn(function() {
        return {
            active: s,
            enter: a,
            exit: i,
            node: o
        }
    }, [s, a, i])
}
var Ni = function(s) {
    var n = s.handle,
        o = s.onChange,
        a = s.children,
        i = s.className,
        r = [];
    return i && r.push(i), r.push("fullscreen"), n.active && r.push("fullscreen-enabled"), B(function() {
        o && o(n.active, n)
    }, [n.active]), Zs.createElement("div", {
        className: r.join(" "),
        ref: n.node,
        style: n.active ? {
            height: "100%",
            width: "100%"
        } : void 0
    }, a)
};
const Ti = ({
        idleAfter: t = 3e3,
        element: s
    }) => {
        const [n, o] = k(!1);
        return B(() => {
            const a = s != null ? s : window;
            let i;
            const r = () => {
                    o(!0)
                },
                l = zo(() => {
                    o(!1), clearTimeout(i), i = setTimeout(r, t)
                }, 500),
                c = () => {
                    document.hidden || l()
                };
            return i = setTimeout(r, t), a.addEventListener("mousemove", l), a.addEventListener("mousedown", l), a.addEventListener("resize", l), a.addEventListener("keydown", l), a.addEventListener("touchstart", l), a.addEventListener("wheel", l), s || document.addEventListener("visibilitychange", c), () => {
                a.removeEventListener("mousemove", l), a.removeEventListener("mousedown", l), a.removeEventListener("resize", l), a.removeEventListener("keydown", l), a.removeEventListener("touchstart", l), a.removeEventListener("wheel", l), s || document.removeEventListener("visibilitychange", c), clearTimeout(i)
            }
        }, [s, t]), {
            isIdle: n
        }
    },
    xi = "_inlineIconContainer_3lfbh_55",
    ue = {
        "container--audio": "_container--audio_3lfbh_1",
        "container--video": "_container--video_3lfbh_7",
        "container--animated": "_container--animated_3lfbh_13",
        "container--animated-in": "_container--animated-in_3lfbh_18",
        "icon-container": "_icon-container_3lfbh_22",
        "content-top": "_content-top_3lfbh_31",
        "content-bottom": "_content-bottom_3lfbh_40",
        inlineIconContainer: xi,
        "restart-button": "_restart-button_3lfbh_62"
    },
    ft = ({
        inlineIcon: t,
        isFreeSubscribed: s,
        post: n,
        pub: o,
        variant: a,
        onRestart: i,
        isPostPreview: r
    }) => {
        var C;
        const {
            iString: l,
            iTemplate: c
        } = D(), {
            isMobile: u
        } = fe(), [d, p] = k(!1), h = !!i, m = (C = Qs(o)) != null ? C : "Founding Member";
        let f = n.audience === "founding" ? c `${m} episode` : l("Paid episode"),
            _ = n.audience === "founding" ? c `The full episode is only available to ${m} subscribers` : c `The full episode is only available to paid subscribers of ${o.name}`;
        o.id === 2309160 && (f = l("Watch the film"), _ = "Subscribe or purchase as a 1-month rental to continue.");
        const g = l(a === "video" ? "Subscribe to watch" : "Subscribe to listen"),
            y = l(a === "video" ? "Upgrade to watch" : "Upgrade to listen");
        return B(() => {
            V(E.FREE_PREVIEW_PAYWALL_SHOWN, {
                post_id: n.id
            })
        }, [n.id]), B(() => {
            h && setTimeout(() => {
                p(!0)
            }, 10)
        }, [h]), e(S, {
            className: x(ue.container, {
                [ue["container--video"]]: a === "video",
                [ue["container--audio"]]: a === "audio",
                [ue["container--animated"]]: h,
                [ue["container--animated-in"]]: d
            }),
            inset: 0,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            onClick: b => {
                b.stopPropagation(), b.preventDefault()
            },
            "data-testid": "paywall"
        }, e(v, {
            alignItems: "center",
            gap: u ? 12 : 16,
            paddingX: 24
        }, e(v, {
            alignItems: "center",
            className: ue["content-top"],
            gap: u ? 12 : 16
        }, !t && e(S, {
            className: ue["icon-container"],
            alignItems: "center",
            color: "white",
            justifyContent: "center",
            radius: "sm"
        }, e(Vt, {
            size: u ? 16 : 24
        })), e(v, {
            alignItems: "center",
            gap: u ? 0 : 4
        }, e(S, {
            alignItems: "center",
            gap: 8
        }, t && e(S, {
            className: ue.inlineIconContainer,
            alignItems: "center",
            justifyContent: "center",
            radius: "sm"
        }, e(Vt, {
            size: 16
        })), e(w.B3, {
            as: "h3",
            color: "white",
            weight: "semibold"
        }, f)), e(w.B4, {
            color: "white",
            opacity: 80,
            align: "center"
        }, _))), e(S, {
            className: ue["content-bottom"],
            gap: 16
        }, i && e(de, {
            className: ue["restart-button"],
            fill: "outline",
            onClick: () => {
                V(E.FREE_PREVIEW_PAYWALL_RESTART_BUTTON_CLICKED, {
                    post_id: n.id
                }), i()
            }
        }, e(S, {
            alignItems: "center",
            gap: 12
        }, e(ii, {
            size: 16
        }), l("Restart"))), e(de, {
            priority: "primary-theme",
            localNavigation: !1,
            href: jn(o, {
                simple: !0,
                next: document.location.href,
                utm_source: Je.showsPaywall,
                utm_medium: Yt.web,
                utm_content: n.id
            }),
            disabled: r
        }, s ? y : g))))
    },
    Be = ({
        children: t
    }) => e(S, {
        alignItems: "center",
        bg: "glass-inverted-medium",
        color: "white",
        gap: 8,
        paddingY: 4,
        paddingX: 8,
        radius: "sm",
        "data-testid": "audio-player-preview-label"
    }, e(Vt, {
        size: 12
    }), e(w.Meta, {
        color: "white"
    }, t)),
    vs = t => {
        const [s, n] = k(0);
        return B(() => {
            const o = () => {
                t && n(t.currentTime)
            };
            if (t) return t.addEventListener("timeupdate", o), () => {
                t.removeEventListener("timeupdate", o)
            }
        }, [t]), s
    },
    Ei = "_container_1afp9_1",
    Mi = "_text_1afp9_13",
    Li = "_speaker_1afp9_33",
    ve = {
        container: Ei,
        text: Mi,
        "container-full-screen": "_container-full-screen_1afp9_25",
        "text-full-screen": "_text-full-screen_1afp9_29",
        speaker: Li,
        "highlight-word": "_highlight-word_1afp9_37",
        "captions-small": "_captions-small_1afp9_41",
        "text-small": "_text-small_1afp9_45"
    },
    Bi = ({
        videoEle: t,
        mediaUpload: s,
        handle: n,
        subtitles: o,
        showCaptions: a,
        withHighlight: i,
        size: r = "md"
    }) => {
        const [l, c] = k([]), [u, d] = k({
            segment: null,
            wordIndex: -1
        }), {
            segment: p,
            wordIndex: h
        } = u, m = vs(t);
        B(() => {
            if (t) {
                const _ = t.currentTime,
                    g = l.find(C => _ >= C.start && _ <= C.end),
                    y = g != null ? g : null;
                if (!i) {
                    d({
                        wordIndex: -1,
                        segment: y
                    });
                    return
                }
                if (y) {
                    let C = -1;
                    for (let b = 0; b < y.words.length; b++) {
                        if (_ >= y.words[b].start && _ <= y.words[b].end) {
                            C = b;
                            break
                        } else if (_ < y.words[b].start) break;
                        C = b
                    }
                    d({
                        wordIndex: C,
                        segment: y
                    })
                } else d({
                    wordIndex: -1,
                    segment: y
                })
            }
        }, [t, o, l.length, m]), B(() => {
            var _, g;
            (_ = s == null ? void 0 : s.transcription) != null && _.cdn_url && fetch((g = s == null ? void 0 : s.transcription) == null ? void 0 : g.cdn_url).then(y => y.json()).then(y => {
                c(y.map(C => O(I({}, C), {
                    words: C.words ? C.words : []
                })))
            }).catch(y => console.error("Error fetching transcription:", y))
        }, [s, o, a]);
        const f = () => e("div", null, p == null ? void 0 : p.words.map((_, g) => e("span", {
            key: g,
            className: x({
                [ve["highlight-word"]]: g <= h && i || !i
            })
        }, _.word.startsWith(" ") ? _.word : ` ${_.word}`)));
        return !a || !l.length ? null : p ? e("div", {
            className: x(ve.container, {
                [ve["container-full-screen"]]: n.active,
                [ve["captions-small"]]: r === "sm"
            })
        }, p && e("div", {
            className: x(ve.text, {
                [ve["text-full-screen"]]: n.active,
                [ve["text-small"]]: r === "sm"
            })
        }, f())) : null
    },
    Di = t => e(ge, I({
        name: "ClosedCaptionsFilledIcon",
        svgParams: {
            height: 16,
            width: 20,
            stroke: "#808080"
        }
    }, t), e("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M0 2.51429C0 1.12568 1.14532 0 2.55814 0H17.4419C18.8547 0 20 1.12568 20 2.51429V13.4857C20 14.8743 18.8547 16 17.4419 16H2.55814C1.14532 16 0 14.8743 0 13.4857V2.51429ZM12.6776 7.9987V8.60503C12.6776 8.91696 12.7142 9.17954 12.7874 9.3928C12.8638 9.60605 12.972 9.76837 13.1121 9.87977C13.2553 9.98799 13.4272 10.0421 13.6277 10.0421C13.8251 10.0421 13.9906 9.99436 14.1242 9.89887C14.2579 9.8002 14.3582 9.66811 14.425 9.5026C14.4919 9.3371 14.5253 9.1509 14.5253 8.94401H16.4207V9.09201V9.23524C16.4207 9.7254 16.2997 10.1535 16.0578 10.5195C15.8191 10.8824 15.4881 11.1641 15.0648 11.3646C14.6415 11.5651 14.1561 11.6654 13.6086 11.6654C12.9657 11.6654 12.4214 11.538 11.9758 11.2834C11.5334 11.0288 11.1976 10.6723 10.9684 10.214C10.7393 9.75246 10.6247 9.21137 10.6247 8.59071V8.00347C10.6247 7.37963 10.7393 6.83854 10.9684 6.38021C11.1976 5.92188 11.5334 5.56699 11.9758 5.31554C12.4214 5.06091 12.9657 4.93359 13.6086 4.93359C14.0192 4.93359 14.3964 4.99089 14.7401 5.10547C15.0839 5.21687 15.3799 5.3792 15.6281 5.59245C15.8796 5.8057 16.0737 6.06192 16.2106 6.36111C16.3507 6.6603 16.4207 6.99609 16.4207 7.36849V7.51172V7.65017H14.5253C14.5253 7.44329 14.4919 7.25709 14.425 7.09158C14.3582 6.92607 14.2579 6.79557 14.1242 6.70009C13.9906 6.6046 13.8251 6.55686 13.6277 6.55686C13.4272 6.55686 13.2553 6.61256 13.1121 6.72396C12.972 6.83218 12.8638 6.99291 12.7874 7.20616C12.7142 7.41942 12.6776 7.68359 12.6776 7.9987ZM6.23177 8.60503V7.9987C6.23177 7.68359 6.26837 7.41942 6.34158 7.20616C6.41797 6.99291 6.52619 6.83218 6.66623 6.72396C6.80946 6.61256 6.98134 6.55686 7.18186 6.55686C7.3792 6.55686 7.5447 6.6046 7.67839 6.70009C7.81207 6.79557 7.91233 6.92607 7.97917 7.09158C8.04601 7.25709 8.07943 7.44329 8.07943 7.65017H9.97483V7.51172V7.36849C9.97483 6.99609 9.9048 6.6603 9.76476 6.36111C9.62789 6.06192 9.43374 5.8057 9.18229 5.59245C8.93403 5.3792 8.63802 5.21687 8.29427 5.10547C7.95052 4.99089 7.57335 4.93359 7.16276 4.93359C6.51982 4.93359 5.97555 5.06091 5.52995 5.31554C5.08753 5.56699 4.75174 5.92188 4.52257 6.38021C4.2934 6.83854 4.17882 7.37963 4.17882 8.00347V8.59071C4.17882 9.21137 4.2934 9.75246 4.52257 10.214C4.75174 10.6723 5.08753 11.0288 5.52995 11.2834C5.97555 11.538 6.51982 11.6654 7.16276 11.6654C7.71021 11.6654 8.1956 11.5651 8.61892 11.3646C9.04225 11.1641 9.37326 10.8824 9.61198 10.5195C9.85388 10.1535 9.97483 9.7254 9.97483 9.23524V9.09201V8.94401H8.07943C8.07943 9.1509 8.04601 9.3371 7.97917 9.5026C7.91233 9.66811 7.81207 9.8002 7.67839 9.89887C7.5447 9.99436 7.3792 10.0421 7.18186 10.0421C6.98134 10.0421 6.80946 9.98799 6.66623 9.87977C6.52619 9.76837 6.41797 9.60605 6.34158 9.3928C6.26837 9.17954 6.23177 8.91696 6.23177 8.60503Z",
        fill: "white",
        strokeWidth: .25
    })),
    Fi = t => e(ge, I({
        name: "ClosedCaptionsIcon",
        svgParams: {
            height: 16,
            width: 20,
            stroke: "#808080"
        }
    }, t), e("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M0 2.51429C0 1.12568 1.14532 0 2.55814 0H17.4419C18.8547 0 20 1.12568 20 2.51429V13.4857C20 14.8743 18.8547 16 17.4419 16H2.55814C1.14532 16 0 14.8743 0 13.4857V2.51429ZM2.55814 1.37143C1.91595 1.37143 1.39535 1.8831 1.39535 2.51429V13.4857C1.39535 14.1169 1.91595 14.6286 2.55814 14.6286H17.4419C18.0841 14.6286 18.6047 14.1169 18.6047 13.4857V2.51429C18.6047 1.8831 18.0841 1.37143 17.4419 1.37143H2.55814Z",
        fill: "white",
        "stroke-width": "0.25"
    }), e("path", {
        d: "M12.1858 7.94143V8.6719C12.1858 9.03793 12.2336 9.34826 12.329 9.60289C12.4277 9.85752 12.5694 10.0501 12.754 10.1806C12.9418 10.3111 13.1661 10.3763 13.4271 10.3763C13.6563 10.3763 13.8536 10.3286 14.0192 10.2331C14.1878 10.1344 14.3183 10.0008 14.4106 9.83206C14.5029 9.66337 14.5555 9.4708 14.5682 9.25437H16.0626C16.0626 9.2862 16.0626 9.31802 16.0626 9.34985C16.0626 9.38168 16.0626 9.41192 16.0626 9.44057C16.053 9.88617 15.9321 10.2777 15.6997 10.615C15.4705 10.9492 15.1586 11.2102 14.7639 11.398C14.3693 11.5826 13.9205 11.6749 13.4176 11.6749C12.8097 11.6749 12.294 11.5524 11.8707 11.3073C11.4506 11.0622 11.1307 10.7153 10.9111 10.2665C10.6946 9.81774 10.5864 9.2846 10.5864 8.66713V7.94143C10.5864 7.32077 10.6962 6.78605 10.9159 6.33727C11.1355 5.8853 11.4553 5.53677 11.8755 5.29169C12.2988 5.04661 12.8128 4.92407 13.4176 4.92407C13.7964 4.92407 14.1449 4.97818 14.4632 5.0864C14.7814 5.19143 15.0584 5.34421 15.2939 5.54473C15.5294 5.74525 15.714 5.98556 15.8477 6.26565C15.9846 6.54256 16.0562 6.85289 16.0626 7.19664C16.0626 7.22847 16.0626 7.2603 16.0626 7.29213C16.0626 7.32077 16.0626 7.34942 16.0626 7.37807H14.5682C14.5555 7.15526 14.5014 6.95633 14.4059 6.78128C14.3136 6.60622 14.1847 6.46936 14.0192 6.37069C13.8536 6.26883 13.6563 6.21791 13.4271 6.21791C13.1661 6.21791 12.9433 6.28634 12.7587 6.4232C12.5741 6.55688 12.4325 6.75104 12.3338 7.00567C12.2352 7.2603 12.1858 7.57222 12.1858 7.94143Z",
        fill: "white",
        "stroke-width": "0.25"
    }), e("path", {
        d: "M5.87381 7.94143V8.6719C5.87381 9.03793 5.92155 9.34826 6.01704 9.60289C6.1157 9.85752 6.25734 10.0501 6.44195 10.1806C6.62974 10.3111 6.85413 10.3763 7.11513 10.3763C7.34429 10.3763 7.54163 10.3286 7.70714 10.2331C7.87583 10.1344 8.00633 10.0008 8.09863 9.83206C8.19094 9.66337 8.24345 9.4708 8.25618 9.25437H9.75054C9.75054 9.2862 9.75054 9.31802 9.75054 9.34985C9.75054 9.38168 9.75054 9.41192 9.75054 9.44057C9.74099 9.88617 9.62004 10.2777 9.3877 10.615C9.15853 10.9492 8.84661 11.2102 8.45193 11.398C8.05726 11.5826 7.60847 11.6749 7.10558 11.6749C6.49765 11.6749 5.98202 11.5524 5.5587 11.3073C5.13856 11.0622 4.81868 10.7153 4.59907 10.2665C4.38263 9.81774 4.27441 9.2846 4.27441 8.66713V7.94143C4.27441 7.32077 4.38422 6.78605 4.60384 6.33727C4.82346 5.8853 5.14334 5.53677 5.56348 5.29169C5.9868 5.04661 6.50083 4.92407 7.10558 4.92407C7.48434 4.92407 7.83286 4.97818 8.15115 5.0864C8.46944 5.19143 8.74635 5.34421 8.98188 5.54473C9.21741 5.74525 9.40202 5.98556 9.5357 6.26565C9.67256 6.54256 9.74418 6.85289 9.75054 7.19664C9.75054 7.22847 9.75054 7.2603 9.75054 7.29213C9.75054 7.32077 9.75054 7.34942 9.75054 7.37807H8.25618C8.24345 7.15526 8.18934 6.95633 8.09386 6.78128C8.00156 6.60622 7.87265 6.46936 7.70714 6.37069C7.54163 6.26883 7.34429 6.21791 7.11513 6.21791C6.85413 6.21791 6.63133 6.28634 6.44672 6.4232C6.26212 6.55688 6.12048 6.75104 6.02181 7.00567C5.92314 7.2603 5.87381 7.57222 5.87381 7.94143Z",
        fill: "white",
        "stroke-width": "0.25"
    })),
    Ai = "_playerButton_725cs_1",
    Ri = {
        playerButton: Ai
    },
    be = o => {
        var a = o,
            {
                children: t,
                className: s
            } = a,
            n = pe(a, ["children", "className"]);
        return e(Qn, I({
            priority: "primary-empty",
            rounded: !1,
            size: 36,
            fill: "empty",
            className: x(Ri.playerButton, s)
        }, n), t)
    },
    Oi = ({
        showCaptions: t,
        setShowCaptions: s,
        isFocused: n,
        disabled: o,
        disableShortcuts: a
    }) => {
        const {
            iString: i
        } = D(), r = l => {
            s(l), l ? localStorage.setItem("video_player:show_captions", "true") : localStorage.removeItem("video_player:show_captions")
        };
        return B(() => {
            const l = localStorage.getItem("video_player:show_captions") === "true";
            t !== l && s(l)
        }, []), Ie("c", () => r(!t), n && !a), e(Ae, {
            text: i(`Closed Captions / Subtitles ${a?"":"(c)"}`),
            hoverOptions: {
                delayEnter: 100,
                delayLeave: 100
            }
        }, e(be, {
            onClick: () => r(!t),
            disabled: o
        }, t ? e(Di, null) : e(Fi, null)))
    },
    $i = ({
        handle: t,
        isFocused: s,
        disableShortcuts: n = !1
    }) => {
        const o = () => t.active ? t.exit() : t.enter();
        return Ie("f", o, s && !n), e(Ae, {
            text: t.active ? `Exit full screen ${n?"":"(f)"}` : `Full screen ${n?"":"(f)"}`,
            hoverOptions: {
                delayEnter: 100,
                delayLeave: 100
            }
        }, e(be, {
            onClick: o
        }, t.active ? e(si, {
            size: 18
        }) : e(ni, {
            size: 18
        })))
    },
    Vi = ({
        justified: t,
        post: s,
        pub: n,
        user: o,
        onChange: a,
        onToggleMenu: i
    }) => {
        const r = s.type === "restack";
        return e(jo, {
            allowEdit: !r,
            editButtonIsLast: !0,
            hideComments: !eo({
                publication: n,
                post: s
            }) || r,
            hideReactions: !n.community_enabled || r,
            hideShare: r,
            isStatic: !1,
            justified: t,
            labelStyle: "counts-or-none",
            post: s,
            pub: n,
            hideFeedRestackButton: r,
            showRestackButton: !r,
            style: "compressed",
            user: o,
            position: "pub-preview",
            onChange: a,
            onToggleMenu: i
        })
    },
    ks = wt({
        getPubPinInfo: () => ({
            showPin: !1
        }),
        getSectionPinInfo: () => ({
            showPin: !1
        })
    }),
    Hi = () => we(ks),
    v1 = ({
        children: t,
        pub: s,
        showPubPins: n,
        showSectionPins: o
    }) => {
        const a = Ue(({
                post: r
            }) => {
                var l;
                return {
                    showPin: n && !!((l = r.pins) != null && l.includes(s.id))
                }
            }, [s.id, n]),
            i = Ue(({
                post: r
            }) => ({
                showPin: o && r.is_section_pinned
            }), [o]);
        return e(ks.Provider, {
            value: {
                getPubPinInfo: a,
                getSectionPinInfo: i
            }
        }, t)
    },
    zi = "_date_ld490_1",
    ji = "_pub_ld490_5",
    Ui = "_icon_ld490_13",
    Wi = "_iconClamped_ld490_26",
    Ki = "_link_ld490_34",
    qi = "_dividerChar_ld490_43",
    he = {
        date: zi,
        pub: ji,
        icon: Ui,
        iconClamped: Wi,
        link: Ki,
        dividerChar: qi
    },
    Te = ({
        clamp: t,
        post: s,
        pub: n
    }) => {
        const {
            getPubPinInfo: o,
            getSectionPinInfo: a
        } = Hi(), {
            highlightByline: i
        } = ls(), {
            showPin: r
        } = o({
            post: s
        }), {
            showPin: l
        } = a({
            post: s
        }), c = r || l, u = to(s), {
            iTemplate: d,
            language: p
        } = D();
        return e(w.Meta, {
            color: "pub-secondary-text",
            clamp: t,
            display: "inline"
        }, c && e("div", {
            className: he.icon
        }, e(Ko, {
            size: 12
        })), Gt(s.audience) && !Xt({
            post: s
        }) && e("div", {
            className: x(he.icon, t && he.iconClamped)
        }, e(Wo, {
            audience: s.audience,
            size: 12
        })), s.restacked_pub_name ? e(z, null, e("span", {
            className: he.pub
        }, d `Published on ${s.restacked_pub_name}`), " ", e("span", {
            className: he.dividerChar
        }, "•"), " ") : null, e("time", {
            className: he.date,
            dateTime: so(s.post_date).toISOString()
        }, Uo({
            post: s,
            showDatetime: !1,
            language: p
        })), s.type !== "restack" && u.length > 0 && n.bylines_enabled && e(z, null, " ", e("span", {
            className: he.dividerChar
        }, "•"), " ", e(w, {
            as: "span",
            color: i ? "pub-accent" : void 0
        }, no(u.map(h => t ? e("a", {
            className: he.link,
            href: fn(h),
            onClick: m => m.stopPropagation()
        }, h.name) : e(us, {
            subject: h,
            utmSource: "byline"
        }, e("a", {
            className: he.link,
            href: fn(h),
            onClick: m => m.stopPropagation()
        }, h.name))), {
            noBreakSpace: !0
        }))))
    },
    on = wt({
        url: "",
        linkToComments: !1
    }),
    It = 3 / 2,
    an = 16 / 9,
    et = ({
        align: t,
        clamp: s,
        lineHeight: n = 20,
        maxLength: o = 152,
        paddingBottom: a,
        post: i,
        size: r = 14
    }) => {
        const {
            url: l
        } = we(on);
        return e(v, {
            paddingBottom: a
        }, e(w, {
            as: "a",
            align: t,
            href: l,
            clamp: s,
            color: "primary",
            font: "text",
            size: r,
            lineHeight: n
        }, Aa(Ot(i.description, o))))
    },
    Yi = n => {
        var o = n,
            {
                stroke: t = "black"
            } = o,
            s = pe(o, ["stroke"]);
        return e(ge, O(I({}, s), {
            name: "ThreadIcon",
            svgParams: {
                height: 19,
                width: 19
            }
        }), e("path", {
            d: "M10.4286 3H8.57143C5.49441 3 3 5.49441 3 8.57143C3 10.2355 4.16477 12.1934 5.32143 13.2143V16L11.3571 14.1429C14.6071 13.067 16 10.9973 16 8.57143C16 5.49441 13.5056 3 10.4286 3Z",
            stroke: t,
            "stroke-linejoin": "round"
        }))
    },
    Mn = {
        sm: {
            size: 15,
            lineHeight: 20
        },
        md: {
            size: 19,
            lineHeight: 26
        },
        lg: {
            size: 30,
            lineHeight: 36
        },
        mobileMd: {
            size: 17,
            lineHeight: 24
        },
        mobileLg: {
            size: 30,
            lineHeight: 36
        }
    },
    Gi = {
        sinocism: {
            sm: {
                size: 13,
                lineHeight: 20
            },
            md: {
                size: 16,
                lineHeight: 24
            },
            lg: {
                size: 27,
                lineHeight: 36
            },
            mobileMd: {
                size: 16,
                lineHeight: 24
            },
            mobileLg: {
                size: 27,
                lineHeight: 36
            }
        }
    },
    Xi = ({
        preset: t,
        pub: s
    }) => (s ? I(I({}, Mn), Gi[s.subdomain]) : Mn)[t],
    Ji = "_icon_13lbo_1",
    Zi = {
        icon: Ji,
        "iconVideo-16": "_iconVideo-16_13lbo_8",
        "iconVideo-20": "_iconVideo-20_13lbo_11",
        "iconVideo-28": "_iconVideo-28_13lbo_14",
        "iconVideo-32": "_iconVideo-32_13lbo_18"
    },
    xe = ({
        align: t,
        clamp: s,
        maxLength: n = 140,
        noIcons: o,
        paddingBottom: a,
        post: i,
        preset: r,
        preventOrphans: l,
        pub: c
    }) => {
        const {
            url: u,
            linkToComments: d
        } = we(on), {
            lineHeight: p,
            size: h
        } = Xi({
            preset: r,
            pub: c
        }), m = h >= 28;
        return e(v, {
            paddingBottom: a
        }, e(w, O(I({}, u ? {
            as: "a",
            href: u
        } : null), {
            align: t,
            clamp: s,
            color: "pub-primary-text",
            font: "pub-headings",
            "data-testid": "post-preview-title",
            style: {
                fontSize: h,
                lineHeight: `${p}px`
            }
        }), i.type === "thread" && !o && e(Yi, {
            height: m ? 26 : 17,
            className: Zi.icon
        }), d && i.type !== "thread" && "Comments on: ", l ? oo(Ot(i.title, n)) : Ot(i.title, n)))
    },
    Qi = "_container_11rkr_1",
    er = "_containerNoImage_11rkr_5",
    tr = "_image_11rkr_9",
    nr = "_content_11rkr_17",
    ot = {
        container: Qi,
        containerNoImage: er,
        image: tr,
        content: nr
    },
    Ss = ({
        actions: t,
        isSmall: s,
        post: n,
        pub: o
    }) => {
        const {
            isTablet: a
        } = fe(), i = !!ao(n);
        return e("div", {
            className: x(ot.container, {
                [ot.containerNoImage]: !i
            })
        }, i && e(Ne, {
            className: ot.image,
            imageAspectRatio: s ? It : an,
            imageWidth: 1280,
            isBelowTheFold: !1,
            playButtonSize: 72,
            post: n,
            squareImageSize: "large"
        }), e(v, {
            className: ot.content,
            alignItems: "center",
            justifyContent: "center",
            paddingX: i ? 32 : 64,
            paddingTop: i ? 24 : 64,
            paddingBottom: i ? 0 : 64
        }, e(xe, {
            align: "center",
            clamp: 3,
            paddingBottom: 8,
            post: n,
            preset: a ? "mobileLg" : "lg",
            preventOrphans: !0,
            pub: o
        }), e(et, {
            post: n,
            align: "center",
            size: 17,
            lineHeight: 24,
            clamp: 3,
            paddingBottom: 16
        }), e(Te, {
            post: n,
            pub: o
        }), e(v, {
            paddingTop: 16
        }, t({
            justified: !1
        }))))
    },
    sr = t => e(Ss, O(I({}, t), {
        isSmall: !0
    })),
    or = "_image_1qgos_1",
    ar = {
        image: or
    },
    ir = ({
        actions: t,
        hideImage: s,
        imageAspectRatio: n,
        post: o,
        pub: a
    }) => e(v, null, !s && e(Ne, {
        pub: a,
        post: o,
        className: ar.image,
        imageWidth: 1250,
        imageAspectRatio: n === "wide" ? an : It,
        isBelowTheFold: !1,
        playButtonSize: 72,
        squareImageSize: "large"
    }), e(v, {
        flex: "grow",
        alignItems: "center",
        justifyContent: "center",
        paddingX: 16,
        paddingTop: 32,
        paddingBottom: 0
    }, e(xe, {
        align: "center",
        clamp: 4,
        paddingBottom: 8,
        post: o,
        preset: "lg",
        preventOrphans: !0,
        pub: a
    }), e(et, {
        post: o,
        align: "center",
        size: 17,
        lineHeight: 24,
        clamp: 2,
        paddingBottom: 16
    }), e(Te, {
        post: o,
        pub: a
    }), e(v, {
        paddingTop: 16
    }, t({
        justified: !1
    })))),
    rr = "_container_1fgo0_1",
    lr = "_image_1fgo0_31",
    At = {
        container: rr,
        "container--no-image": "_container--no-image_1fgo0_21",
        image: lr
    },
    cr = ({
        actions: t,
        hideImage: s,
        post: n,
        pub: o
    }) => {
        const {
            isMobile: a
        } = fe();
        let i = !!o.community_enabled;
        return s && !a && (i = !1), e("div", {
            className: x(At.container, {
                [At["container--no-image"]]: s
            })
        }, e(v, {
            gap: 8,
            position: "relative"
        }, e(xe, {
            clamp: 3,
            post: n,
            preset: a ? "mobileMd" : "md",
            pub: o
        }), e(et, {
            clamp: 2,
            post: n,
            size: 15,
            lineHeight: s ? 24 : 20
        }), e(Te, {
            post: n,
            pub: o
        })), !s && (n.cover_image ? e("div", null, e(Ne, {
            className: At.image,
            imageAspectRatio: a ? 1 : It,
            imageWidth: a ? 150 : 320,
            isBelowTheFold: !0,
            playButtonSize: a ? 32 : 40,
            post: n,
            pub: o,
            squareImageSize: "small"
        })) : e("div", null)), t({
            justified: i
        }))
    },
    ur = "_image_11uoi_1",
    dr = {
        image: ur
    },
    pr = ({
        actions: t,
        post: s,
        pub: n
    }) => {
        const o = !!n.community_enabled;
        return e(v, null, e(S, {
            gap: 12,
            paddingBottom: 8,
            flex: "grow"
        }, e(v, {
            flex: "grow"
        }, e(xe, {
            post: s,
            clamp: 2,
            preset: "sm",
            paddingBottom: 4,
            pub: n
        }), e(Te, {
            clamp: 1,
            post: s,
            pub: n
        })), e(Ne, {
            className: dr.image,
            hidePlaceholder: !0,
            hideTimestamp: !0,
            imageWidth: 150,
            imageAspectRatio: 1,
            isBelowTheFold: !1,
            playButtonSize: 32,
            post: s
        })), t({
            justified: o
        }))
    },
    mr = "_image_11uoi_1",
    hr = {
        image: mr
    },
    gr = ({
        post: t,
        pub: s
    }) => e(S, {
        gap: 16
    }, e(Ne, {
        className: hr.image,
        hidePlaceholder: !0,
        hideTimestamp: !0,
        imageWidth: 150,
        imageAspectRatio: 1,
        isBelowTheFold: !1,
        post: t,
        playButtonSize: 32
    }), e(v, {
        flex: "grow"
    }, e(xe, {
        post: t,
        clamp: 2,
        preset: "sm",
        paddingBottom: 4,
        pub: s
    }), e(Te, {
        clamp: 1,
        post: t,
        pub: s
    }))),
    fr = "_image_1p12y_1",
    yr = {
        image: fr
    },
    _r = ({
        actions: t,
        hidePlaceholder: s,
        post: n,
        pub: o
    }) => {
        const a = !!o.community_enabled;
        return e(v, null, n.cover_image && e(Ne, {
            post: n,
            className: yr.image,
            imageWidth: 1250,
            imageAspectRatio: an,
            isBelowTheFold: !1,
            hidePlaceholder: s,
            playButtonSize: 72,
            squareImageSize: "large"
        }), e(v, {
            flex: "grow",
            justifyContent: "center",
            paddingX: 16,
            paddingTop: 16
        }, e(v, {
            gap: 8,
            paddingBottom: 12
        }, e(xe, {
            clamp: 3,
            post: n,
            preset: "mobileLg",
            preventOrphans: !0,
            pub: o
        }), e(et, {
            post: n,
            size: 15,
            lineHeight: 20,
            clamp: 3
        }), e(Te, {
            post: n,
            pub: o
        })), t({
            justified: a
        })))
    },
    Cr = "_image_1h54b_1",
    br = {
        image: Cr
    },
    wr = ({
        actions: t,
        post: s,
        pub: n
    }) => {
        const {
            hideSubtitlesOnGrid: o
        } = ls(), a = !!n.community_enabled;
        return e(v, null, e(Ne, {
            className: br.image,
            imageAspectRatio: It,
            imageWidth: 600,
            isBelowTheFold: !0,
            playButtonSize: 56,
            post: s,
            pub: n,
            squareImageSize: "medium"
        }), e(v, {
            flex: "grow",
            gap: 8,
            paddingTop: 12
        }, e(v, {
            gap: 4
        }, e(xe, {
            clamp: 3,
            post: s,
            preset: "md",
            pub: n
        }), !o && e(et, {
            clamp: 1,
            post: s
        }), e(Te, {
            post: s,
            pub: n
        })), t({
            justified: a
        })))
    },
    vr = "_container_1tbj4_1",
    kr = "_actions_1tbj4_24",
    at = {
        container: vr,
        "container--menu-open": "_container--menu-open_1tbj4_10",
        actions: kr,
        "actions--menu-open": "_actions--menu-open_1tbj4_29"
    },
    Sr = {
        jumbo: Ss,
        "jumbo-small": sr,
        large: ir,
        listing: cr,
        mini: pr,
        "mini-episode": gr,
        "mobile-hero": _r,
        square: wr
    },
    k1 = ({
        disableInteractive: t,
        hideImage: s,
        imageAspectRatio: n,
        linkToComments: o,
        variant: a,
        post: i,
        pub: r,
        testid: l,
        user: c,
        utm: u,
        onChange: d,
        onClick: p
    }) => {
        const {
            isMobile: h
        } = fe(), [m, f] = k(!1), _ = Ue(({
            active: b
        }) => {
            f(b)
        }, []), g = Sr[a];
        if (!g) return console.warn(`PostPreview: ${a} not implemented`), null;
        const y = Ps({
                linkToComments: !!o,
                post: i,
                pub: r,
                utm: u
            }),
            C = b => {
                p && p(b), !t && Wn(y, {
                    event: b
                })
            };
        return e(on.Provider, {
            value: {
                url: y,
                linkToComments: !!o
            }
        }, e(v, {
            className: x(at.container, {
                [at["container--menu-open"]]: m
            }),
            "data-testid": l,
            radius: "sm",
            padding: h ? 0 : 8,
            onClick: C
        }, e(g, {
            hideImage: s,
            imageAspectRatio: n,
            post: i,
            pub: r,
            actions: ({
                justified: b
            }) => i.type === "restack" ? null : e(v, {
                className: x(at.actions, {
                    [at["actions--menu-open"]]: m
                })
            }, e(Vi, {
                justified: b,
                post: i,
                pub: r,
                user: c,
                onChange: d != null ? d : () => {},
                onToggleMenu: _
            }))
        })))
    },
    Ps = ({
        linkToComments: t,
        post: s,
        pub: n,
        utm: o
    }) => t ? Pe(n, s, {
        comments: !0
    }) : s.type === "video" ? We(s.canonical_url, {
        autoPlay: !0
    }) : o ? Un(s.canonical_url, {
        utm: o
    }) : s.canonical_url,
    Pr = "_fullWidth_15p4p_1",
    Ir = "_container_15p4p_7",
    Nr = "_space_15p4p_18",
    it = {
        fullWidth: Pr,
        container: Ir,
        "thumbnail-duration": "_thumbnail-duration_15p4p_12",
        space: Nr
    },
    Tr = ({
        pub: t,
        postId: s,
        isFocused: n,
        disableShortcuts: o = !1
    }) => {
        var d, p, h, m;
        const [a, i] = k(!1), [r, l] = k(null), c = f => {
            if (!r || !t) return;
            V(E.VIDEO_NEXT_VIDEO_BUTTON_CLICKED, {
                postId: r.id,
                pubId: t.id
            });
            const _ = Ps({
                linkToComments: !1,
                post: r,
                pub: t,
                utm: "next-episode"
            });
            Wn(_, {
                event: f
            })
        };
        B(() => {
            (() => se(void 0, null, function*() {
                var y, C, b;
                const _ = yield tn.get("/api/v1/recent_posts").query({
                    episodes_only: !0
                }), g = ((y = _.body) != null ? y : []).findIndex(P => P.id === s);
                l((b = (C = _.body) == null ? void 0 : C[g + 1]) != null ? b : void 0)
            }))()
        }, []), Ie("shift+n", () => c(), n && !o);
        const u = (r == null ? void 0 : r.cover_image) || (r == null ? void 0 : r.podcast_episode_image_url);
        return e("div", {
            style: {
                position: "relative"
            },
            onMouseEnter: () => i(!0),
            onMouseLeave: () => i(!1)
        }, a && u && e(v, {
            position: "absolute",
            className: it.container
        }, e(v, {
            bg: "glass-inverted-medium",
            radius: "sm",
            style: {
                cursor: "pointer"
            },
            paddingY: 8,
            paddingX: 12,
            gap: 4,
            onClick: c,
            onMouseEnter: () => i(!0),
            onMouseLeave: () => i(!1)
        }, e(S, {
            gap: 16
        }, e(v, {
            gap: 2,
            flex: "grow"
        }, e(w.Meta, {
            color: "white",
            opacity: 80
        }, "Next Up"), e(w.B4, {
            color: "white"
        }, r.title)), e(S, {
            alignItems: "center"
        }, e(nn, {
            color: "white",
            size: 24
        }))), e("div", {
            style: {
                position: "relative"
            }
        }, e(en, {
            className: it.fullWidth,
            src: u,
            alt: r.title,
            maxWidth: 200,
            imageProps: {
                height: 200 * 9 / 16,
                smartCrop: !0
            },
            radius: "sm"
        }), e(S, {
            className: it["thumbnail-duration"],
            bg: "glass-inverted-medium",
            position: "absolute",
            radius: "sm"
        }, e(w.Meta, {
            color: "white",
            lineHeight: 20
        }, ae((m = (h = (d = r.videoUpload) == null ? void 0 : d.duration) != null ? h : (p = r.podcastUpload) == null ? void 0 : p.duration) != null ? m : 0))))), e(Fe, {
            className: it.space
        })), e(be, {
            disabled: !r
        }, e(li, {
            size: 18,
            fill: "white",
            onClick: c
        })))
    },
    xr = ({
        videoRef: t,
        isFocused: s,
        disableShortcuts: n
    }) => {
        const [o, a] = k(!1), i = () => se(void 0, null, function*() {
            var r;
            if (t.current) try {
                document.pictureInPictureElement ? yield document.exitPictureInPicture(): yield(r = t.current.player) == null ? void 0 : r.requestPictureInPicture()
            } catch (l) {
                console.error("Failed to toggle PiP mode:", l)
            }
        });
        return B(() => {
            var c, u;
            const r = () => a(!0),
                l = () => a(!1);
            return t.current && ((c = t.current.player) == null || c.addEventListener("enterpictureinpicture", r), (u = t.current.player) == null || u.addEventListener("leavepictureinpicture", l)), () => {
                var d, p;
                t.current && ((d = t.current.player) == null || d.removeEventListener("enterpictureinpicture", r), (p = t.current.player) == null || p.removeEventListener("leavepictureinpicture", l))
            }
        }, [t]), Ie("i", i, s && !n), e(Ae, {
            text: `Picture in Picture ${n?"":"(i)"}`,
            hoverOptions: {
                delayEnter: 100,
                delayLeave: 100
            }
        }, e(be, {
            onClick: i
        }, e(ai, {
            size: 18
        })))
    };

function Is() {
    const t = sn();
    return s => {
        Ze(s), t.popToast(n => e(De, O(I({}, n), {
            text: "Link copied",
            Icon: gt
        })))
    }
}
const Ns = ({
        url: t,
        onLinkClicked: s
    }) => {
        const {
            iString: n
        } = D();
        return e(X, {
            icon: e(Go, null),
            onClick: () => {
                window.open(Un("https://www.facebook.com/sharer/sharer.php", {
                    u: t
                }), "_blank"), s == null || s("facebook")
            }
        }, n("Share to Facebook"))
    },
    Ts = ({
        url: t,
        twitterText: s,
        onLinkClicked: n
    }) => {
        const {
            iString: o
        } = D();
        return e(X, {
            icon: e(Xo, null),
            onClick: () => {
                window.open(io({
                    url: t,
                    text: s || ""
                }), "_blank"), n == null || n("twitter")
            }
        }, o("Share to X"))
    },
    xs = ({
        url: t,
        onLinkClicked: s
    }) => {
        const {
            iString: n
        } = D(), o = Is();
        return e(X, {
            icon: e(gt, null),
            onClick: () => {
                t && (o(t), s == null || s("copy"))
            }
        }, n("Copy link"))
    },
    Er = ({
        url: t,
        onLinkClicked: s
    }) => {
        const {
            iString: n
        } = D(), o = os();
        return e(X, {
            icon: e(as, null),
            onClick: () => {
                o.open({
                    restackUrl: t || ""
                }), s == null || s("notes")
            }
        }, n("Share to Notes"))
    },
    S1 = t => {
        const {
            url: s,
            onLinkClicked: n
        } = t;
        Qe();
        const o = Ns(t),
            a = Ts(t),
            i = xs(t),
            r = Er(t);
        return Jt([i, e(Mr, {
            url: s,
            onShare: () => {
                n == null || n("chat")
            }
        }), e(ht, {
            paddingX: 8
        }), r, o, a])
    };

function Mr({
    url: t,
    onShare: s
}) {
    const {
        iString: n
    } = D(), o = qo();
    return e(X, {
        icon: e(Yo, null),
        onClick: () => {
            o.open({
                linkAttachmentUrl: t,
                source: "share_post"
            }), s == null || s()
        }
    }, n("Send as message"))
}
const Lr = "_timelineContainer_hf2lm_1",
    Br = "_timeline_hf2lm_1",
    Dr = "_timelineHover_hf2lm_17",
    Fr = "_progress_hf2lm_22",
    Ar = "_progressHover_hf2lm_28",
    Rr = "_tooltip_hf2lm_32",
    Or = "_timelineLabelContainer_hf2lm_48",
    $r = "_timelineTimeTooltip_hf2lm_53",
    Vr = "_timelineThumbnail_hf2lm_58",
    Hr = "_timelineThumbnailSmall_hf2lm_62",
    zr = "_thumbnailContainer_hf2lm_66",
    jr = "_textInput_hf2lm_72",
    _e = {
        timelineContainer: Lr,
        timeline: Br,
        timelineHover: Dr,
        progress: Fr,
        progressHover: Ar,
        tooltip: Rr,
        timelineLabelContainer: Or,
        timelineTimeTooltip: $r,
        timelineThumbnail: Vr,
        timelineThumbnailSmall: Hr,
        thumbnailContainer: zr,
        textInput: jr
    },
    rn = (t = 0) => {
        const s = Math.floor(t / 3600),
            n = Math.floor(t % 3600 / 60),
            o = Math.floor(t % 60);
        return s ? `${s}:${n<10?"0":""}${n}:${o<10?"0":""}${o}` : `${n}:${o<10?"0":""}${o}`
    },
    Ur = ({
        videoRef: t,
        mediaUpload: s,
        pub: n,
        post: o,
        onShareMenuOpen: a,
        onShareMenuClose: i,
        size: r
    }) => {
        var nt, Ve;
        const {
            isClipping: l,
            setIsClipping: c
        } = (nt = we(Qt)) != null ? nt : {}, {
            iString: u
        } = D(), [d, p] = k(!0), [h, m] = k(null), [f, _] = k(0), [g, y] = k(!1), [C, b] = k(!1), [P, N] = k(0), [T, R] = k(0), [$, A] = k(0), [U, ie] = k(0), G = le(null), H = le(null), Z = le(null), L = ga(s), K = () => {
            var F, W, q;
            if ((F = t.current) != null && F.player) {
                const re = 100 / ((W = t.current) == null ? void 0 : W.player.duration) * ((q = t.current) == null ? void 0 : q.player.currentTime);
                _(re)
            }
            G.current = window.requestAnimationFrame(K)
        }, ce = F => {
            var q;
            let W = 0;
            if (Z.current) {
                const re = Z.current.getBoundingClientRect(),
                    Lt = (F.clientX - re.left) / re.width * 100;
                W = mt(0, Lt, 100)
            }
            _(W), (q = t.current) != null && q.player && (t.current.player.currentTime = t.current.player.duration * (W / 100))
        }, ee = F => {
            F.preventDefault(), y(!0), ce(F), document.addEventListener("mousemove", ye), document.addEventListener("mouseup", j), document.addEventListener("selectstart", te)
        }, ye = F => {
            ce(F)
        }, j = () => {
            y(!1), document.removeEventListener("mousemove", ye), document.removeEventListener("mouseup", j), document.removeEventListener("selectstart", te)
        }, te = F => {
            g && F.preventDefault()
        }, Ee = () => {
            Math.abs(T - U) > .1 ? (ie(F => F + (T - F) * .1), H.current = window.requestAnimationFrame(Ee)) : (ie(T), H.current && window.cancelAnimationFrame(H.current))
        }, Re = F => {
            var un, dn, pn, mn;
            const {
                x: W,
                width: q
            } = (dn = (un = Z.current) == null ? void 0 : un.getBoundingClientRect()) != null ? dn : {
                x: 0,
                width: 0
            };
            R((F.clientX - W) / q * 100);
            const re = L ? L.tile_width / L.tile_height * 100 : 100,
                Lt = 10,
                cn = ((re != null ? re : 0) + Lt) / 2 / ((mn = (pn = Z.current) == null ? void 0 : pn.getBoundingClientRect().width) != null ? mn : 1) * 100,
                Bt = h ? h / P * 100 : null,
                Ys = mt(Bt != null ? Bt : T, cn, 100 - cn);
            A(Ys), H.current || Ee()
        };
        B(() => (G.current = window.requestAnimationFrame(K), () => {
            G.current !== null && window.cancelAnimationFrame(G.current), H.current !== null && window.cancelAnimationFrame(H.current)
        }), [t]), B(() => {
            var W;
            const F = () => {
                var q;
                (q = t.current) != null && q.player && !isNaN(t.current.player.duration) && N(t.current.player.duration)
            };
            return t.current && ((W = t.current.player) == null || W.addEventListener("durationchange", F)), () => {
                var q;
                t.current && ((q = t.current.player) == null || q.removeEventListener("durationchange", F))
            }
        }, [t]);
        const Oe = (Ve = L == null ? void 0 : L.tiles) != null ? Ve : [],
            Nt = h ? h / P * 100 : T * P / 100,
            $e = Oe.length ? Jo(Oe, Nt) : null,
            Tt = () => {
                p(!1), a == null || a(), V(E.POST_SHARE_BUTTON_CLICKED, {
                    position: "video_timeline",
                    post_id: o == null ? void 0 : o.id
                })
            },
            xt = () => {
                p(!0), m(null), i == null || i()
            },
            tt = r === "sm" ? 75 : 100,
            Et = r === "sm" ? 0 : 8,
            Mt = r === "sm" ? "xs" : "sm";
        return e(S, {
            ref: Z,
            onMouseDown: ee,
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1),
            onMouseMove: Re,
            flex: "grow",
            position: "relative",
            className: _e.timelineContainer,
            cursor: "pointer"
        }, e("div", {
            className: _e.timeline
        }, C && e("div", {
            className: _e.timelineHover,
            style: {
                width: `${T}%`,
                height: "100%"
            }
        }), e("div", {
            className: x(_e.progress, {
                [_e.progressHover]: C
            }),
            style: {
                width: `${f}%`,
                height: "100%"
            }
        })), !l && e(v, {
            position: "absolute",
            className: _e.thumbnailContainer,
            style: {
                position: "absolute",
                left: `${$}%`,
                opacity: C ? 1 : 0
            }
        }, e(v, {
            bg: "glass-inverted-medium",
            radius: Mt,
            padding: Et,
            gap: 4
        }, d && e(S, {
            justifyContent: "center",
            alignItems: "center",
            onMouseEnter: () => b(!1)
        }, e("div", {
            style: {
                position: "relative"
            }
        }, L && $e && e(Zo, {
            storyboard: L,
            imageUrl: L.url,
            displayHeight: tt,
            displayWidth: L.tile_width / L.tile_height * tt,
            x: $e.x,
            y: $e.y,
            className: x(_e.timelineThumbnail, {
                [_e.timelineThumbnailSmall]: r === "sm"
            })
        }))), r !== "sm" && e(Wr, {
            onShareMenuOpen: Tt,
            onShareMenuClose: xt,
            timestamp: h,
            pub: n,
            post: o,
            size: r,
            trigger: e(S, null, d && e(S, {
                cursor: "pointer",
                gap: 8,
                flex: "grow",
                paddingY: 4,
                onClick: () => {
                    var F, W, q, re;
                    (W = (F = t.current) == null ? void 0 : F.player) != null && W.paused || (re = (q = t.current) == null ? void 0 : q.player) == null || re.pause(), m(T * P / 100)
                },
                justifyContent: "center"
            }, e(Ht, {
                color: "white",
                size: 20
            }), e(w.B4, {
                color: "white",
                weight: "semibold"
            }, u("Share from "), rn(T * P / 100))))
        }))))
    };

function Wr({
    pub: t,
    post: s,
    trigger: n,
    timestamp: o,
    onShareMenuOpen: a,
    onShareMenuClose: i,
    size: r
}) {
    var b, P, N, T, R;
    const [l, c] = k(o), {
        setIsClipping: u
    } = (b = we(Qt)) != null ? b : {}, d = l ? {
        timestamp: l.toFixed(1)
    } : {};
    B(() => {
        c(o)
    }, [o]);
    const p = jt(null, {
            post: s,
            pub: t,
            useCustomDomainOverOpen: !0,
            params: d
        }),
        {
            iString: h
        } = D(),
        m = {
            url: p,
            onLinkClicked: $ => {
                V(E.SHARE_LINK_CLICKED, I({
                    type: $,
                    post_id: s == null ? void 0 : s.id
                }, d))
            }
        },
        f = Ns(m),
        _ = Ts(m),
        g = xs(m),
        y = Kr(m),
        C = Jt([g, r !== "sm" ? e(ro, {
            configKey: "clipper_v2",
            value: !0
        }, e(X, {
            icon: e(Ye, null),
            onClick: () => {
                V(E.SHARE_LINK_CLICKED, I({
                    type: "download_clip",
                    post_id: s == null ? void 0 : s.id
                }, d)), u == null || u(!0)
            }
        }, h("Download clip"))) : null, e(Qo, {
            url: m.url,
            onShare: () => {
                var $;
                ($ = m.onLinkClicked) == null || $.call(m, "chat")
            }
        }), e(ht, {
            paddingX: 8
        }), y, f, _]);
    return e(ms, {
        trigger: n,
        useMobileBottomSheet: !0,
        mobileBottomSheetTitle: h("Share"),
        maxHeight: 350,
        layerOptions: {
            placement: "top-center"
        },
        onOpen: a,
        onClose: i
    }, C, e(ht, null), e(ea, {
        initialTime: l != null ? l : 0,
        onChange: c,
        maxTime: (R = (T = (P = s == null ? void 0 : s.videoUpload) == null ? void 0 : P.duration) != null ? T : (N = s == null ? void 0 : s.podcastUpload) == null ? void 0 : N.duration) != null ? R : null
    }))
}
const Kr = ({
        url: t,
        onLinkClicked: s
    }) => {
        const {
            iString: n
        } = D();
        return e(X, {
            icon: e(as, null),
            onClick: () => {
                window.open(lo({
                    message: t != null ? t : ""
                }), "_blank"), s == null || s("notes")
            }
        }, n("Share to Notes"))
    },
    qr = ({
        videoRef: t
    }) => {
        const [s, n] = k(0);
        return B(() => {
            let o;
            const a = () => {
                var i;
                (i = t.current) != null && i.player && (n(t.current.player.currentTime), o = requestAnimationFrame(a))
            };
            return t.current && (o = requestAnimationFrame(a)), () => {
                cancelAnimationFrame(o)
            }
        }, [t]), e(w.Digit, {
            size: 14,
            color: "white"
        }, rn(s))
    },
    Yr = ({
        videoRef: t
    }) => {
        const [s, n] = k(0);
        return B(() => {
            var a, i;
            const o = () => {
                var r;
                (r = t.current) != null && r.player && !isNaN(t.current.player.duration) && n(t.current.player.duration)
            };
            return t.current && ((i = (a = t.current) == null ? void 0 : a.player) == null || i.addEventListener("durationchange", o)), () => {
                var r, l;
                t.current && ((l = (r = t.current) == null ? void 0 : r.player) == null || l.removeEventListener("durationchange", o))
            }
        }, [t]), e(w.Digit, {
            size: 14,
            color: "white"
        }, rn(s))
    },
    Gr = ({
        videoRef: t
    }) => e(S, {
        justifyContent: "center",
        alignItems: "center",
        gap: 4
    }, e(qr, {
        videoRef: t
    }), e(w.Digit, {
        size: 14,
        color: "white"
    }, "/"), e(Yr, {
        videoRef: t
    })),
    P1 = t => {
        const [s, n] = k(0), [o, a] = k(!1);
        return B(() => {
            var r;
            const i = (r = t.current) == null ? void 0 : r.player;
            if (i) {
                const l = p => {
                        typeof p.target.currentTime == "number" && n(p.target.currentTime)
                    },
                    c = () => a(!0),
                    u = () => a(!1),
                    d = () => a(!1);
                return i.addEventListener("timeupdate", l), i.addEventListener("play", c), i.addEventListener("pause", u), i.addEventListener("ended", d), !i.paused && !o && a(!0), () => {
                    i.removeEventListener("timeupdate", l), i.removeEventListener("play", c), i.removeEventListener("pause", u), i.removeEventListener("ended", d)
                }
            }
        }, [t, t.current]), {
            currentTime: s,
            isPlaying: o
        }
    },
    Xr = t => {
        const [s, n] = k(!1);
        return B(() => {
            var a;
            const o = (a = t.current) == null ? void 0 : a.player;
            if (o) {
                const i = () => n(!0),
                    r = () => n(!1),
                    l = () => n(!1);
                return o.addEventListener("play", i), o.addEventListener("pause", r), o.addEventListener("ended", l), !o.paused && !s && n(!0), () => {
                    o.removeEventListener("play", i), o.removeEventListener("pause", r), o.removeEventListener("ended", l)
                }
            }
        }, [t]), s
    },
    Jr = ({
        videoRef: t,
        isFocused: s,
        disableShortcuts: n
    }) => {
        const o = Xr(t),
            a = () => {
                var l, c;
                return (c = (l = t.current) == null ? void 0 : l.player) == null ? void 0 : c.play()
            },
            i = () => {
                var l, c;
                return (c = (l = t.current) == null ? void 0 : l.player) == null ? void 0 : c.pause()
            },
            r = () => o ? i() : a();
        return Ie("k", r, s && !n), Ie(" ", r, s), e(Ae, {
            text: o ? `Pause ${n?"":"(k)"}` : `Play ${n?"":"(k)"}`,
            hoverOptions: {
                delayEnter: 100,
                delayLeave: 100
            }
        }, e(be, {
            onClick: r
        }, o ? e(oi, {
            fill: "white",
            size: 18
        }) : e(fa, {
            fill: "white",
            size: 18
        })))
    },
    Zr = ({
        isSettingsOpen: t,
        setIsSettingsOpen: s
    }) => t ? e(be, null, e(Pn, {
        size: 18,
        onClick: () => s(!t)
    })) : e(Ae, {
        text: "Settings",
        hoverOptions: {
            delayEnter: 100,
            delayLeave: 100
        }
    }, e(be, null, e(Pn, {
        size: 18,
        onClick: () => s(!t)
    }))),
    Qr = "_seetingsMenu_15ngb_1",
    el = "_menuItem_15ngb_5",
    Ge = {
        seetingsMenu: Qr,
        menuItem: el
    },
    tl = ({
        videoRef: t,
        dismiss: s
    }) => {
        const n = o => {
            var a;
            (a = t.current) != null && a.player && (t.current.player.playbackRate = o, localStorage.setItem("video_player:playbackRate", o.toString())), s()
        };
        return e(v, {
            gap: 4,
            flex: "grow"
        }, [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2].map(o => {
            var a, i;
            return e(S, {
                className: Ge.menuItem,
                padding: 8,
                justifyContent: "space-between",
                alignItems: "center",
                onClick: () => n(o)
            }, e(w.B4, {
                font: "text",
                size: 12,
                lineHeight: 16,
                weight: "regular",
                color: "white"
            }, o, "x"), o === ((i = (a = t.current) == null ? void 0 : a.player) == null ? void 0 : i.playbackRate) && e(hs, {
                size: 16,
                color: "white"
            }))
        }))
    },
    Es = {
        en: "English",
        es: "Spanish"
    },
    nl = ({
        options: t = [],
        subtitles: s,
        setSubtitles: n,
        dismiss: o
    }) => {
        const a = i => {
            n(i), localStorage.setItem("video_player:subtitles", i || ""), o()
        };
        return e(v, {
            gap: 4,
            flex: "grow"
        }, [null, ...t].map(i => {
            var r;
            return e(S, {
                className: Ge.menuItem,
                paddingY: 8,
                paddingX: 16,
                justifyContent: "space-between",
                alignItems: "center",
                onClick: () => a(i)
            }, e(w.B4, {
                font: "text",
                size: 12,
                lineHeight: 16,
                weight: "regular",
                color: "white"
            }, (r = Es[i != null ? i : ""]) != null ? r : "None"), s === i && e(hs, {
                size: 16,
                color: "white"
            }))
        }))
    },
    rt = ({
        title: t,
        icon: s,
        selection: n,
        onClick: o
    }) => e(S, {
        className: Ge.menuItem,
        padding: 8,
        justifyContent: "space-between",
        alignItems: "center",
        onClick: o
    }, e(S, {
        gap: 8,
        alignItems: "center"
    }, s, e(w.B4, {
        color: "white",
        font: "text",
        size: 12,
        lineHeight: 16,
        weight: "regular"
    }, t)), e(S, null, e(w.B4, {
        color: "white",
        font: "text",
        size: 12,
        lineHeight: 16,
        weight: "regular"
    }, n))),
    sl = ({
        videoRef: t,
        post: s,
        pub: n,
        podcastUpload: o,
        subtitles: a,
        setSubtitles: i,
        setIsSettingsOpen: r
    }) => {
        var b, P, N;
        const {
            iString: l
        } = D(), [c, u] = k(!1), [d, p] = k(!1), h = co(), m = vs((b = t.current) == null ? void 0 : b.player), f = Is(), [_, g] = k([]), y = () => {
            if (!s || !n) return;
            const T = jt(null, {
                post: s,
                pub: n,
                useCustomDomainOverOpen: !0
            });
            f(T), V(E.SHARE_LINK_CLICKED, {
                name: "copy",
                source: "player",
                post_id: s.id
            })
        }, C = () => {
            if (!s || !n) return;
            const T = m ? {
                    timestamp: m.toFixed(1)
                } : {},
                R = jt(null, {
                    post: s,
                    pub: n,
                    useCustomDomainOverOpen: !0,
                    params: T
                });
            f(R), V(E.SHARE_LINK_CLICKED, I({
                name: "copy",
                source: "player",
                post_id: s.id
            }, T))
        };
        return B(() => {
            const T = localStorage.getItem("video_player:subtitles") || null;
            i(T)
        }, []), B(() => {
            var T, R;
            if ((T = o == null ? void 0 : o.transcription) != null && T.signed_captions) {
                const A = ((R = o.transcription.signed_captions) != null ? R : []).map(U => U.language);
                g(A), a && !A.includes(a) && i(null)
            }
        }, [o, a]), B(() => {
            var $, A;
            const T = parseFloat(localStorage.getItem("video_player:playbackRate") || "1"),
                R = () => {
                    var U;
                    (U = t.current) != null && U.player && (t.current.player.playbackRate = T)
                };
            return ($ = t.current) != null && $.player && ((A = t.current.player) == null || A.addEventListener("loadedmetadata", R)), () => {
                var U;
                t.current && ((U = t.current.player) == null || U.removeEventListener("loadedmetadata", R))
            }
        }, [t]), ta(h, () => {
            u(!1), p(!1), r(!1)
        }), e(v, {
            paddingY: 8,
            ref: h,
            gap: 4,
            flex: "grow",
            className: x(Ge.seetingsMenu, {
                [Ge.slideOut]: c
            })
        }, c && e(tl, {
            videoRef: t,
            dismiss: () => u(!1)
        }), d && e(nl, {
            options: _,
            subtitles: a,
            setSubtitles: i,
            dismiss: () => p(!1)
        }), !c && !d && e(v, {
            gap: 4,
            flex: "grow"
        }, e(rt, {
            title: l("Playback speed"),
            icon: e(ei, {
                size: 16,
                color: "white"
            }),
            onClick: () => u(!0),
            selection: `${(N=(P=t.current)==null?void 0:P.player)==null?void 0:N.playbackRate}x`
        }), _.length > 0 && e(rt, {
            title: l("Subtitles"),
            icon: e(ya, {
                size: 16,
                color: "white"
            }),
            onClick: () => p(!0),
            selection: Es[a != null ? a : ""]
        }), s && n && e(z, null, e(rt, {
            title: l("Share post"),
            icon: e(Ht, {
                size: 16,
                color: "white"
            }),
            onClick: y
        }), e(rt, {
            title: l("Share post at current time"),
            icon: e(Ht, {
                size: 16,
                color: "white"
            }),
            onClick: C
        }))))
    },
    ol = "_mainContainer_1ii65_1",
    al = "_volumeBarContainer_1ii65_6",
    il = "_volumeBar_1ii65_6",
    rl = "_volumeLevel_1ii65_26",
    lt = {
        mainContainer: ol,
        volumeBarContainer: al,
        volumeBar: il,
        volumeLevel: rl
    },
    ll = ({
        videoRef: t,
        isFocused: s,
        disableShortcuts: n
    }) => {
        const [o, a] = k(0), [i, r] = k(!1), [l, c] = k(!1), u = le(null), d = g => {
            var C;
            let y = 0;
            if (u.current) {
                const b = u.current.getBoundingClientRect(),
                    P = (g.clientX - b.left) / b.width;
                y = mt(P, 0, 1), a(y), localStorage.setItem("video_player:volume", y.toString()), (C = t.current) != null && C.player && (t.current.player.volume = y)
            }
            i && y > 0 && _()
        }, p = g => {
            g.preventDefault(), c(!0), d(g), document.addEventListener("mousemove", h), document.addEventListener("mouseup", m), document.addEventListener("selectstart", f)
        }, h = g => {
            c(!0), d(g)
        }, m = () => {
            c(!1), document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", m), document.removeEventListener("selectstart", f)
        }, f = g => {
            l && g.preventDefault()
        };
        B(() => {
            var y, C, b, P, N;
            const g = parseFloat((y = localStorage.getItem("video_player:volume")) != null ? y : "");
            if (r((P = (b = (C = t.current) == null ? void 0 : C.player) == null ? void 0 : b.muted) != null ? P : !1), !isNaN(g)) {
                const T = mt(g, 0, 1);
                a(T), (N = t.current) != null && N.player && (t.current.player.volume = T)
            }
            return () => {
                document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", m), document.removeEventListener("selectstart", f)
            }
        }, []);
        const _ = () => {
            var g;
            (g = t.current) != null && g.player && (t.current.player.muted = !i, r(!i))
        };
        return Ie("m", _, s && !n), e(S, {
            className: lt.mainContainer,
            justifyContent: "center",
            alignItems: "center"
        }, e(Ae, {
            text: i ? `Unmute ${n?"":"(m)"}` : `Mute ${n?"":"(m)"}`,
            hoverOptions: {
                delayEnter: 100,
                delayLeave: 100
            }
        }, e(be, {
            onClick: _
        }, i ? e(ka, {
            size: 18
        }) : o > .6 ? e(_a, {
            size: 18
        }) : o > .3 ? e(ci, {
            size: 18
        }) : e(ui, {
            size: 18
        }))), e(S, {
            className: lt.volumeBarContainer,
            justifyContent: "center",
            alignItems: "center",
            onMouseDown: p
        }, e("div", {
            className: lt.volumeBar,
            ref: u
        }, e("div", {
            className: lt.volumeLevel,
            style: {
                width: `${o*100}%`
            }
        }))))
    },
    cl = "_bottomControlsContainer_18jmo_1",
    ul = "_bottomInnerControlsContainer_18jmo_12",
    dl = "_backDrop_18jmo_17",
    pl = "_captionsContainer_18jmo_30",
    ml = "_centerControlsContainer_18jmo_38",
    hl = "_settingsControlsContainer_18jmo_50",
    gl = "_settingsControlsBox_18jmo_59",
    fl = "_topOverlaysContainer_18jmo_65",
    yl = "_bottomOverControlsContainer_18jmo_78",
    _l = "_castStatus_18jmo_89",
    ke = {
        bottomControlsContainer: cl,
        bottomInnerControlsContainer: ul,
        backDrop: dl,
        captionsContainer: pl,
        centerControlsContainer: ml,
        settingsControlsContainer: hl,
        settingsControlsBox: gl,
        topOverlaysContainer: fl,
        bottomOverControlsContainer: yl,
        castStatus: _l
    },
    Cl = ({
        videoRef: t,
        pub: s,
        post: n,
        mediaUpload: o,
        podcastUpload: a,
        handle: i,
        isActive: r,
        isFocused: l,
        clippingMode: c = !1,
        hasPaywall: u = !1,
        hideNextVideoButton: d = !1,
        onShareMenuOpen: p,
        onShareMenuClose: h,
        disableShortcuts: m = !1,
        size: f = "md"
    }) => {
        var ie, G;
        const _ = le(null),
            [g, y] = k(!1),
            [C, b] = k(!1),
            [P, N] = k(null),
            T = Qe().getConfigFor("clipper_v2");
        B(() => {
            c && R(!0)
        }, [c]);
        const R = H => {
                b(H), H && (A != null && A.length) && (N(A[0].language), V(E.VIDEO_CLOSED_CAPTIONS_BUTTON_CLICKED, {
                    language: A[0].language
                }))
            },
            $ = H => {
                N(H), !H && C ? b(!1) : H && !C && b(!0)
            };
        B(() => {
            r || y(!1)
        }, [r]);
        const A = (G = (ie = a == null ? void 0 : a.transcription) == null ? void 0 : ie.signed_captions) != null ? G : [],
            U = A.length > 0;
        return e("div", {
            ref: _,
            style: {
                zIndex: c ? 10 : g ? 1 : 0
            }
        }, i.active ? e("div", {
            className: ke.topOverlaysContainer,
            style: {
                opacity: r ? 1 : 0,
                transform: r ? "translateY(0)" : "translateY(-20%)"
            }
        }, e(S, {
            justifyContent: "space-between",
            paddingBottom: 32
        }, e(S, {
            padding: 16
        }), e(S, {
            padding: 16
        }))) : null, e("div", null), e("div", {
            className: ke.settingsControlsContainer,
            style: {
                opacity: g && r ? 1 : 0,
                pointerEvents: g ? "auto" : "none"
            }
        }, e(v, null, e(S, {
            className: ke.settingsControlsBox
        }, e(sl, {
            videoRef: t,
            post: n,
            pub: s,
            podcastUpload: a,
            subtitles: P,
            setSubtitles: $,
            setIsSettingsOpen: y
        })), e("div", {
            style: {
                height: "60px"
            }
        }))), e("div", {
            className: ke.bottomControlsContainer,
            style: {
                transform: r ? "translateY(0)" : "translateY(40px)"
            }
        }, e("div", {
            className: ke.backDrop,
            style: {
                opacity: r ? 1 : 0
            }
        }), e(v, {
            flex: "grow",
            gap: 8,
            paddingY: 4
        }, t.current && a && !u && e("div", {
            className: ke.captionsContainer
        }, e(Bi, {
            videoEle: t.current.player,
            mediaUpload: a,
            handle: i,
            subtitles: P,
            showCaptions: C,
            withHighlight: T && c,
            size: f
        })), e("div", {
            className: ke.bottomInnerControlsContainer,
            style: {
                opacity: r ? 1 : 0
            }
        }, e(v, {
            flex: "grow"
        }, e(S, {
            flex: "grow",
            paddingBottom: 4
        }, e(Ur, {
            videoRef: t,
            mediaUpload: o,
            pub: s,
            post: n,
            onShareMenuOpen: p,
            onShareMenuClose: h,
            size: f
        })), e(S, {
            paddingX: 4
        }, e(Y, {
            gap: 8,
            alignItems: "center"
        }, e(Jr, {
            videoRef: t,
            isFocused: l,
            disableShortcuts: m
        }), !d && o.post_id && e(Tr, {
            pub: s,
            postId: o.post_id,
            isFocused: l,
            disableShortcuts: m
        }), e(ll, {
            videoRef: t,
            isFocused: l,
            disableShortcuts: m
        }), e(Gr, {
            videoRef: t
        })), e(Y, {
            flex: "grow"
        }), e(Y, {
            gap: 8,
            alignItems: "center"
        }, e(Oi, {
            showCaptions: C,
            setShowCaptions: R,
            isFocused: l,
            disabled: !U || u,
            disableShortcuts: m
        }), e(xr, {
            videoRef: t,
            isFocused: l,
            disableShortcuts: m
        }), e($i, {
            handle: i,
            isFocused: l,
            disableShortcuts: m
        }), e(Zr, {
            isSettingsOpen: g,
            setIsSettingsOpen: y
        }))))))))
    },
    bl = "_videoContainer_16l1g_7",
    wl = "_overflow_16l1g_18",
    vl = "_notesVideoContainer_16l1g_22",
    Ce = {
        "preview-label-container": "_preview-label-container_16l1g_1",
        videoContainer: bl,
        overflow: wl,
        notesVideoContainer: vl
    },
    kl = ({
        disableAutoPlay: t = !1,
        isFreeSubscribed: s,
        isSubscribed: n,
        mediaUpload: o,
        post: a,
        pub: i,
        rounded: r,
        startMuted: l,
        variant: c = "notes",
        videoType: u = "post"
    }) => {
        var H, Z, L, K, ce;
        const {
            isClipping: d,
            setIsClipping: p
        } = (H = we(Qt)) != null ? H : {}, {
            iString: h
        } = D(), {
            isMobile: m
        } = fe(), [f, _] = k(!1), g = le(null), y = Gt(a.audience) && !n, C = ((Z = o.preview_duration) != null ? Z : 0) > 0, b = y && (!C || f);
        ss({
            videoPlayerRef: g,
            showPaywall: b,
            disable: t
        });
        const P = !m,
            N = le(null),
            [T, R] = k(!1),
            {
                isIdle: $
            } = Ti({
                idleAfter: 2e3,
                element: N.current
            }),
            A = Ii(),
            U = Ca(N),
            ie = Qe().getConfigFor("clipper_v2"),
            G = () => {
                var ee;
                (ee = g.current) != null && ee.player && (_(!1), g.current.player.currentTime = 0, g.current.player.play())
            };
        return e(Fe, {
            position: "relative",
            radius: r ? "sm" : void 0,
            onClick: ee => {
                ee.stopPropagation(), ee.preventDefault()
            }
        }, ie ? e(Ni, {
            handle: A,
            className: Ce.fullScreenContainer
        }, e("div", {
            className: x(Ce.videoContainer, {
                [Ce.overflow]: d,
                [Ce.notesVideoContainer]: c === "notes",
                [Ce.inboxVideoContainer]: c === "inbox"
            })
        }, e($t, {
            ref: g,
            doNotResetOnEnd: !0,
            hidePlayButton: b,
            mediaUpload: o,
            noControls: b && !y || P,
            noKeyboardShortcuts: !0,
            post: a,
            pub: i,
            startMuted: l,
            onFinishVideo: () => {
                _(!0)
            },
            renderPlayButton: () => e(zt, {
                isPlaying: !1,
                size: m ? 40 : 56
            }),
            clippingMode: d,
            clippingModeRef: N,
            onClippingModeCancel: () => p == null ? void 0 : p(!1),
            videoType: u,
            usePreview: y && C,
            videoPlayerClassName: Ce.videoPlayer
        }), e(Cl, {
            videoRef: g,
            videoContainerRef: N,
            pub: i,
            post: a,
            mediaUpload: o,
            podcastUpload: o == null ? void 0 : o.extractedAudio,
            isActive: (L = T || !$ || d) != null ? L : !1,
            isFocused: U,
            clippingMode: d,
            handle: A,
            hasPaywall: y,
            hideNextVideoButton: !0,
            onShareMenuOpen: () => R(!0),
            onShareMenuClose: () => R(!1),
            disableShortcuts: !0,
            size: c === "notes" ? "sm" : "md"
        })), C && !b && !n && e("div", {
            className: Ce["preview-label-container"]
        }, e(Be, null, h("Preview"), " • ", ae((K = o.preview_duration) != null ? K : 0))), b && e(ft, {
            post: a,
            pub: i,
            isFreeSubscribed: s,
            variant: "video",
            onRestart: C ? G : void 0
        })) : e(z, null, e($t, {
            ref: g,
            doNotResetOnEnd: !0,
            hidePlayButton: b,
            mediaUpload: o,
            noControls: b && !y,
            post: a,
            pub: i,
            startMuted: l,
            onFinishVideo: () => {
                _(!0)
            },
            renderPlayButton: () => e(zt, {
                isPlaying: !1,
                size: m ? 40 : 56
            }),
            videoType: u,
            usePreview: y && C
        }), C && !b && !n && e("div", {
            className: Ce["preview-label-container"]
        }, e(Be, null, h("Preview"), " • ", ae((ce = o.preview_duration) != null ? ce : 0))), b && e(ft, {
            post: a,
            pub: i,
            isFreeSubscribed: s,
            variant: "video",
            onRestart: C ? G : void 0
        })))
    },
    Kt = t => e(ge, O(I({}, t), {
        name: "Back15Icon",
        svgParams: {
            width: 20,
            height: 22,
            viewBox: "0 0 20 22",
            stroke: "none",
            fill: "white"
        }
    }), e("path", {
        d: "M0 11.8557C0 13.2164 0.260417 14.4989 0.78125 15.7034C1.30208 16.9078 2.02148 17.969 2.93945 18.887C3.85742 19.7984 4.91536 20.5146 6.11328 21.0354C7.31771 21.5562 8.60026 21.8166 9.96094 21.8166C11.3216 21.8166 12.6009 21.5562 13.7988 21.0354C15.0033 20.5146 16.0645 19.7984 16.9824 18.887C17.9004 17.969 18.6198 16.9078 19.1406 15.7034C19.6615 14.4989 19.9219 13.2164 19.9219 11.8557C19.9219 10.6578 19.7168 9.51846 19.3066 8.43773C18.8965 7.357 18.3236 6.38044 17.5879 5.50805C16.8587 4.62914 16.0026 3.89672 15.0195 3.31078C14.043 2.71833 12.985 2.30818 11.8457 2.08031V0.693592C11.8457 0.342029 11.7448 0.12393 11.543 0.039295C11.3411 -0.0453404 11.1068 0.00674294 10.8398 0.195545L7.72461 2.37328C7.49674 2.52953 7.38281 2.71182 7.38281 2.92015C7.38281 3.12849 7.49674 3.31403 7.72461 3.47679L10.8301 5.6643C11.097 5.85961 11.3314 5.91495 11.5332 5.83031C11.7415 5.73916 11.8457 5.51781 11.8457 5.16625V3.77953C12.7702 3.98786 13.6198 4.33943 14.3945 4.83422C15.1758 5.32901 15.8529 5.93448 16.4258 6.65062C17.0052 7.36677 17.4544 8.16755 17.7734 9.05297C18.0924 9.93187 18.252 10.8661 18.252 11.8557C18.252 13.008 18.0371 14.0888 17.6074 15.0979C17.1842 16.1005 16.5918 16.9827 15.8301 17.7444C15.0749 18.4996 14.196 19.0888 13.1934 19.512C12.1908 19.9416 11.1133 20.1565 9.96094 20.1565C8.80859 20.1565 7.72786 19.9416 6.71875 19.512C5.71615 19.0888 4.83398 18.4996 4.07227 17.7444C3.31706 16.9827 2.72461 16.1005 2.29492 15.0979C1.87174 14.0888 1.66016 13.008 1.66016 11.8557C1.66016 10.9312 1.80339 10.0523 2.08984 9.21898C2.3763 8.37914 2.77669 7.61416 3.29102 6.92406C3.80534 6.23396 4.40755 5.64151 5.09766 5.14672C5.29948 4.99698 5.42643 4.81469 5.47852 4.59984C5.53711 4.385 5.50456 4.17666 5.38086 3.97484C5.25716 3.77953 5.07812 3.66234 4.84375 3.62328C4.60938 3.57771 4.38477 3.6363 4.16992 3.79906C3.33008 4.40453 2.59766 5.12719 1.97266 5.96703C1.34766 6.80036 0.86263 7.71833 0.517578 8.72094C0.172526 9.71703 0 10.762 0 11.8557ZM7.10938 15.8596C7.29818 15.8596 7.44792 15.801 7.55859 15.6838C7.66927 15.5601 7.72461 15.3941 7.72461 15.1858V9.02367C7.72461 8.76976 7.66602 8.58096 7.54883 8.45726C7.43164 8.32706 7.26237 8.26195 7.04102 8.26195C6.9043 8.26195 6.77734 8.28799 6.66016 8.34008C6.54297 8.38565 6.39648 8.46703 6.2207 8.58422L4.88281 9.49242C4.77214 9.57055 4.6875 9.65844 4.62891 9.75609C4.57682 9.84724 4.55078 9.94815 4.55078 10.0588C4.55078 10.2216 4.60612 10.3616 4.7168 10.4787C4.82747 10.5959 4.96094 10.6545 5.11719 10.6545C5.21484 10.6545 5.29622 10.6415 5.36133 10.6155C5.42643 10.5894 5.5013 10.5406 5.58594 10.469L6.52344 9.78539H6.50391V15.1858C6.50391 15.3876 6.55924 15.5504 6.66992 15.6741C6.7806 15.7978 6.92708 15.8596 7.10938 15.8596ZM12.0703 15.9768C12.8776 15.9768 13.5254 15.7392 14.0137 15.2639C14.5085 14.7821 14.7559 14.1474 14.7559 13.3596C14.7559 12.6435 14.5378 12.0543 14.1016 11.592C13.6654 11.1298 13.099 10.8987 12.4023 10.8987C12.0898 10.8987 11.7839 10.9703 11.4844 11.1135C11.1914 11.2567 10.9798 11.4521 10.8496 11.6995H10.8984L11.0742 9.49242H13.9941C14.1374 9.49242 14.2611 9.44034 14.3652 9.33617C14.4759 9.232 14.5312 9.09528 14.5312 8.92601C14.5312 8.76325 14.4759 8.63305 14.3652 8.53539C14.2611 8.43122 14.1374 8.37914 13.9941 8.37914H10.8789C10.3646 8.37914 10.0846 8.64932 10.0391 9.18969L9.82422 12.0022C9.80469 12.2431 9.85352 12.4254 9.9707 12.5491C10.0879 12.6662 10.2539 12.7248 10.4688 12.7248C10.625 12.7248 10.752 12.7053 10.8496 12.6662C10.9473 12.6272 11.0645 12.5556 11.2012 12.4514C11.39 12.2821 11.5658 12.1617 11.7285 12.0901C11.8913 12.012 12.0703 11.9729 12.2656 11.9729C12.6432 11.9729 12.9492 12.1031 13.1836 12.3635C13.418 12.6174 13.5352 12.956 13.5352 13.3791C13.5352 13.8088 13.4017 14.1636 13.1348 14.4436C12.8678 14.7235 12.5326 14.8635 12.1289 14.8635C11.8359 14.8635 11.5723 14.7886 11.3379 14.6389C11.1035 14.4827 10.9245 14.2776 10.8008 14.0237C10.7292 13.9 10.6478 13.8056 10.5566 13.7405C10.4655 13.6689 10.3581 13.633 10.2344 13.633C10.0716 13.633 9.93815 13.6851 9.83398 13.7893C9.73633 13.8935 9.6875 14.0302 9.6875 14.1995C9.6875 14.2646 9.69401 14.3297 9.70703 14.3948C9.72005 14.4599 9.73958 14.525 9.76562 14.5901C9.89583 14.9416 10.1628 15.2606 10.5664 15.5471C10.9766 15.8336 11.4779 15.9768 12.0703 15.9768Z"
    })),
    qt = t => e(ge, O(I({}, t), {
        name: "Forward30Icon",
        svgParams: {
            width: 20,
            height: 22,
            viewBox: "0 0 20 22",
            stroke: "none",
            fill: "white"
        }
    }), e("path", {
        d: "M13.1738 15.9615C13.7142 15.9615 14.1829 15.802 14.5801 15.483C14.9837 15.1574 15.2962 14.705 15.5176 14.1255C15.7454 13.5461 15.8594 12.8658 15.8594 12.0845C15.8594 11.2968 15.7454 10.6099 15.5176 10.024C15.2962 9.43803 14.9837 8.9823 14.5801 8.65678C14.1829 8.33126 13.7142 8.1685 13.1738 8.1685C12.6335 8.1685 12.1615 8.33126 11.7578 8.65678C11.3542 8.97579 11.0417 9.42827 10.8203 10.0142C10.599 10.6001 10.4883 11.2902 10.4883 12.0845C10.4883 12.8658 10.599 13.5461 10.8203 14.1255C11.0417 14.705 11.3542 15.1574 11.7578 15.483C12.1615 15.802 12.6335 15.9615 13.1738 15.9615ZM6.875 15.9615C7.64323 15.9615 8.27148 15.7531 8.75977 15.3365C9.25456 14.9133 9.50195 14.3729 9.50195 13.7154C9.50195 13.2401 9.35221 12.83 9.05273 12.4849C8.75326 12.1333 8.3724 11.9315 7.91016 11.8794V11.9283C8.28125 11.8632 8.59701 11.6613 8.85742 11.3228C9.12435 10.9843 9.25781 10.5969 9.25781 10.1607C9.25781 9.57475 9.03971 9.09624 8.60352 8.72514C8.17383 8.35405 7.61719 8.1685 6.93359 8.1685C6.34115 8.1685 5.82357 8.3215 5.38086 8.62749C4.93815 8.92697 4.66471 9.31108 4.56055 9.77983C4.54753 9.83842 4.53776 9.89376 4.53125 9.94585C4.52474 9.99793 4.52148 10.05 4.52148 10.1021C4.52148 10.2779 4.57031 10.4211 4.66797 10.5318C4.77214 10.6425 4.90885 10.6978 5.07812 10.6978C5.35156 10.6978 5.54036 10.5448 5.64453 10.2388C5.74219 9.93282 5.89518 9.7017 6.10352 9.54545C6.31185 9.38269 6.57878 9.30131 6.9043 9.30131C7.24935 9.30131 7.52604 9.39572 7.73438 9.58452C7.94922 9.76681 8.05664 10.0077 8.05664 10.3072C8.05664 10.6197 7.94922 10.8801 7.73438 11.0884C7.51953 11.2902 7.23958 11.3912 6.89453 11.3912H6.47461C6.31185 11.3912 6.18164 11.4432 6.08398 11.5474C5.98633 11.6451 5.9375 11.7818 5.9375 11.9576C5.9375 12.1203 5.98633 12.257 6.08398 12.3677C6.18815 12.4719 6.31836 12.524 6.47461 12.524H6.93359C7.35026 12.524 7.67904 12.6281 7.91992 12.8365C8.16081 13.0448 8.28125 13.3215 8.28125 13.6665C8.28125 13.9986 8.14779 14.2785 7.88086 14.5064C7.62044 14.7277 7.28841 14.8384 6.88477 14.8384C6.53971 14.8384 6.25 14.757 6.01562 14.5943C5.78125 14.4315 5.60872 14.1971 5.49805 13.8912C5.43945 13.7284 5.36458 13.6112 5.27344 13.5396C5.18229 13.468 5.07161 13.4322 4.94141 13.4322C4.77865 13.4322 4.64193 13.4875 4.53125 13.5982C4.42708 13.7089 4.375 13.8521 4.375 14.0279C4.375 14.08 4.37826 14.1353 4.38477 14.1939C4.39128 14.246 4.40104 14.2981 4.41406 14.3501C4.51823 14.8059 4.80469 15.19 5.27344 15.5025C5.74219 15.8085 6.27604 15.9615 6.875 15.9615ZM13.1738 14.7798C12.7441 14.7798 12.3991 14.5389 12.1387 14.0572C11.8848 13.5754 11.7578 12.9179 11.7578 12.0845C11.7578 11.2317 11.8848 10.5643 12.1387 10.0826C12.3926 9.59428 12.7376 9.35014 13.1738 9.35014C13.61 9.35014 13.9518 9.59103 14.1992 10.0728C14.4531 10.5546 14.5801 11.2251 14.5801 12.0845C14.5801 12.9179 14.4531 13.5754 14.1992 14.0572C13.9453 14.5389 13.6035 14.7798 13.1738 14.7798ZM9.96094 21.8111C11.3216 21.8111 12.6009 21.5507 13.7988 21.0298C15.0033 20.509 16.0645 19.7928 16.9824 18.8814C17.9004 17.9634 18.6198 16.9022 19.1406 15.6978C19.6615 14.4934 19.9219 13.2108 19.9219 11.8501C19.9219 10.7564 19.7493 9.71147 19.4043 8.71538C19.0592 7.71277 18.5742 6.7948 17.9492 5.96147C17.3242 5.12163 16.5918 4.39897 15.752 3.7935C15.5371 3.63074 15.3125 3.57215 15.0781 3.61772C14.8438 3.65678 14.6647 3.77397 14.541 3.96928C14.4173 4.17111 14.3815 4.37944 14.4336 4.59428C14.4922 4.80913 14.6224 4.99142 14.8242 5.14116C15.5143 5.63595 16.1165 6.2284 16.6309 6.9185C17.1452 7.60861 17.5456 8.37358 17.832 9.21342C18.1185 10.0468 18.2617 10.9257 18.2617 11.8501C18.2617 13.0025 18.0469 14.0832 17.6172 15.0923C17.194 16.0949 16.6016 16.9771 15.8398 17.7388C15.0846 18.494 14.2025 19.0832 13.1934 19.5064C12.1908 19.9361 11.1133 20.1509 9.96094 20.1509C8.80859 20.1509 7.73112 19.9361 6.72852 19.5064C5.72591 19.0832 4.84375 18.494 4.08203 17.7388C3.32682 16.9771 2.73438 16.0949 2.30469 15.0923C1.88151 14.0832 1.66992 13.0025 1.66992 11.8501C1.66992 10.7043 1.88151 9.63009 2.30469 8.62749C2.73438 7.61837 3.32682 6.73621 4.08203 5.981C4.83724 5.21928 5.71615 4.62358 6.71875 4.19389C7.72135 3.7642 8.79883 3.54936 9.95117 3.54936V1.8892C8.59049 1.8892 7.30794 2.14962 6.10352 2.67045C4.9056 3.19129 3.84766 3.91069 2.92969 4.82866C2.01823 5.74663 1.30208 6.80782 0.78125 8.01225C0.260417 9.21017 0 10.4895 0 11.8501C0 13.2108 0.260417 14.4934 0.78125 15.6978C1.30208 16.9022 2.02148 17.9634 2.93945 18.8814C3.85742 19.7928 4.91536 20.509 6.11328 21.0298C7.31771 21.5507 8.60026 21.8111 9.96094 21.8111ZM8.07617 0.697798V5.17045C8.07617 5.51551 8.17708 5.73361 8.37891 5.82475C8.58724 5.90939 8.82487 5.8573 9.0918 5.6685L12.207 3.481C12.4284 3.33126 12.5391 3.15223 12.5391 2.94389C12.5456 2.72905 12.4349 2.5435 12.207 2.38725L9.10156 0.199751C8.82812 0.00443892 8.58724 -0.0476444 8.37891 0.0435014C8.17708 0.128137 8.07617 0.346236 8.07617 0.697798Z"
    })),
    Sl = n => {
        var o = n,
            {
                fill: t = "white"
            } = o,
            s = pe(o, ["fill"]);
        return e(ge, O(I({}, s), {
            name: "PodcastEmbedPauseIcon",
            svgParams: {
                width: 13,
                height: 16,
                viewBox: "0 0 13 16",
                stroke: "none",
                fill: t
            }
        }), e("path", {
            d: "M4 0H1C0.447715 0 0 0.447715 0 1V15C0 15.5523 0.447715 16 1 16H4C4.55228 16 5 15.5523 5 15V1C5 0.447715 4.55228 0 4 0Z"
        }), e("path", {
            d: "M11.9998 0H8.99976C8.44747 0 7.99976 0.447715 7.99976 1V15C7.99976 15.5523 8.44747 16 8.99976 16H11.9998C12.552 16 12.9998 15.5523 12.9998 15V1C12.9998 0.447715 12.552 0 11.9998 0Z"
        }))
    },
    Pl = n => {
        var o = n,
            {
                fill: t = "white"
            } = o,
            s = pe(o, ["fill"]);
        return e(ge, O(I({}, s), {
            name: "PodcastEmbedPlayIcon",
            svgParams: {
                width: 14,
                height: 16,
                viewBox: "0 0 14 16",
                stroke: "none",
                fill: t
            }
        }), e("path", {
            d: "M12.8563 6.71384C13.8273 7.29645 13.8273 8.70372 12.8563 9.28632L2.27174 15.637C1.27196 16.2369 1.11076e-07 15.5167 1.62041e-07 14.3508L7.17238e-07 1.64937C7.68203e-07 0.483426 1.27196 -0.236744 2.27174 0.363129L12.8563 6.71384Z"
        }))
    },
    Ln = "AudioPlayer.playbackRate",
    Il = 5,
    Bn = {
        utm_source: Je.twitter,
        utm_medium: Yt.social,
        utm_campaign: fo.twitterEmbed
    };
class Nl extends Kn {
    constructor(s) {
        super(s)
    }
    shouldComponentUpdate(s) {
        return this.props.currentPlaybackRate !== s.currentPlaybackRate || this.props.setPlaybackRate !== s.setPlaybackRate
    }
    render() {
        const {
            currentPlaybackRate: s,
            setPlaybackRate: n
        } = this.props;
        return e("select", {
            className: "audio-player-playback-rate",
            dir: "rtl",
            onInput: o => n(Number(o.target.value))
        }, e("option", {
            value: "1",
            selected: s === 1
        }, "1x"), e("option", {
            value: "1.25",
            selected: s === 1.25
        }, "1.25x"), e("option", {
            value: "1.5",
            selected: s === 1.5
        }, "1.5x"), e("option", {
            value: "1.75",
            selected: s === 1.75
        }, "1.75x"), e("option", {
            value: "2",
            selected: s === 2
        }, "2x"))
    }
}
class Ms extends Kn {
    constructor(n, o) {
        super(n, o);
        He(this, "setPlaybackRate", n => {
            this.state.playbackRate !== n && (this.player && (this.player.playbackRate = n), this.setState({
                playbackRate: n
            }), $a(Ln, n))
        });
        He(this, "maybeAppendIframeVisitId", n => {
            var a;
            const o = (a = mo()) == null ? void 0 : a.id;
            return o && (n = We(n, {
                src_iid: o
            })), n
        });
        He(this, "openEpisodePage", () => {
            let n = this.props.post.canonical_url;
            n = this.maybeAppendIframeVisitId(n), n = We(n, Bn), window.open(n, "_blank")
        });
        this._onGlobalPlay = this.onGlobalPlay.bind(this), this._onUnload = this.onUnload.bind(this), this._onMouseMove = this.onMouseMove.bind(this), this._onTouchStart = this.onTouchStart.bind(this), this._onTouchMove = this.onTouchMove.bind(this), this._onDragEnd = this.onDragEnd.bind(this), this._onCanPlay = this.onCanPlay.bind(this), this._onPlay = this.onPlay.bind(this), this._onPause = this.onPause.bind(this), this._onTimeUpdate = this.onTimeUpdate.bind(this), this._onRateChange = this.onRateChange.bind(this), this._onWaiting = this.onWaiting.bind(this), this._onPlaying = this.onPlaying.bind(this), this.state = {
            playbackRate: n.playbackRate || Oa(Ln, 1),
            currentTime: 0,
            waiting: !0,
            duration: n.duration || void 0,
            lastDragClearedAt: null
        }
    }
    componentDidMount() {
        var n, o;
        (n = Ft) == null || n.on("play", this._onGlobalPlay), typeof window != "undefined" && window.addEventListener("beforeunload", this._onUnload, !1), document.body && (document.body.addEventListener("mousemove", this._onMouseMove, !1), document.body.addEventListener("mouseup", this._onDragEnd, !1), document.body.addEventListener("touchmove", this._onTouchMove, {
            passive: !1
        }), document.body.addEventListener("touchend", this._onDragEnd, !1), document.body.addEventListener("touchcancel", this._onDragEnd, !1)), this.player && (this.player.volume = 1, this.player.playbackRate = this.state.playbackRate, this.player.addEventListener("canplay", this._onCanPlay), this.player.addEventListener("play", this._onPlay), this.player.addEventListener("pause", this._onPause), this.player.addEventListener("timeupdate", this._onTimeUpdate), this.player.addEventListener("ratechange", this._onRateChange), this.player.addEventListener("waiting", this._onWaiting), this.player.addEventListener("playing", this._onPlaying)), this.progressBar && this.progressBar.addEventListener("touchstart", this._onTouchStart, {
            passive: !0
        }), this.onTimeUpdate(), this.props.onGetDuration && !isNaN((o = this.player) == null ? void 0 : o.duration) && this.props.onGetDuration(this.player.duration), uo(ut("/img/audio-player-pause.png", 96))
    }
    componentWillUnmount() {
        var n;
        (n = Ft) == null || n.off("play", this._onGlobalPlay), typeof window != "undefined" && window.removeEventListener("beforeunload", this._onUnload, !1), document.body && (document.body.removeEventListener("mousemove", this._onMouseMove, !1), document.body.removeEventListener("mouseup", this._onDragEnd, !1), document.body.removeEventListener("touchmove", this._onTouchMove, !1), document.body.removeEventListener("touchend", this._onDragEnd, !1), document.body.removeEventListener("touchcancel", this._onDragEnd, !1)), this.player && (this.player.removeEventListener("canplay", this._onCanPlay), this.player.removeEventListener("play", this._onPlay), this.player.removeEventListener("pause", this._onPause), this.player.removeEventListener("timeupdate", this._onTimeUpdate), this.player.removeEventListener("ratechange", this._onRateChange), this.player.removeEventListener("waiting", this._onWaiting), this.player.removeEventListener("playing", this._onPlaying)), this.progressBar && this.progressBar.removeEventListener("touchstart", this._onTouchStart)
    }
    componentDidUpdate(n, o) {
        if (!this.state.playing && typeof this.state.waiting == "number" && typeof o.waiting != "number" && this.track(E.AUDIO_BUFFERING_STARTED), this.state.playing && !o.playing && !this.state.waiting && typeof o.waiting == "number" && this.track(E.AUDIO_BUFFERING_COMPLETED, {
                buffering_duration: Date.now() - o.waiting
            }), this.state.playing && Math.floor(this.state.currentTime) !== Math.floor(o.currentTime) && Math.floor(this.state.currentTime) % Il === 0 && this.track(E.AUDIO_PLAYBACK_CONTINUED, {
                current_time: Math.floor(this.state.currentTime),
                feature: this.props.feature
            }), !this.state.playing && o.playing && this.player && this.player.ended && (this.props.onFinishAudio && this.props.onFinishAudio(), this.track(E.AUDIO_PLAYBACK_COMPLETE)), this.props.updateOnEveryFrame && this.state.playing && !o.playing) {
            const a = () => {
                this.onTimeUpdate(), this.loopId = requestAnimationFrame(a)
            };
            this.loopId = requestAnimationFrame(a)
        }
        this.props.updateOnEveryFrame && !this.state.playing && o.playing && cancelAnimationFrame(this.loopId)
    }
    onCanPlay() {
        this.props.onGetDuration && this.props.onGetDuration(this.player.duration), this.onTimeUpdate()
    }
    onPlay() {
        var n;
        (n = Ft) == null || n.emit("play", this), this.setState({
            playing: !0
        })
    }
    onPause() {
        this.setState({
            playing: !1,
            waiting: !1
        })
    }
    onTimeUpdate() {
        if (!(!this.player || !isFinite(this.player.duration))) {
            if (this.player.currentTime > this.player.duration) {
                this.player.currentTime = this.player.duration;
                return
            }
            this.state.duration !== this.player.duration || this.state.currentTime !== this.player.currentTime ? (this.setState({
                duration: this.player.duration || this.props.duration,
                currentTime: this.player.currentTime,
                waiting: !1
            }), this.props.onTimeUpdate && this.props.onTimeUpdate({
                duration: Math.max(this.state.duration || 0, this.player.duration || this.props.duration || 0),
                currentTime: this.player.currentTime
            })) : this.setState({
                waiting: !1
            })
        }
    }
    onRateChange() {
        this.player && this.state.playbackRate !== this.player.playbackRate && this.setState({
            playbackRate: this.player.playbackRate
        })
    }
    onWaiting() {
        this.setState({
            waiting: Date.now()
        })
    }
    onPlaying() {
        this.setState({
            playing: !0,
            waiting: !1
        })
    }
    onMouseDown(n) {
        this.onDragStart(n.clientX)
    }
    onMouseMove(n) {
        this.onDragMove(n.clientX)
    }
    onTouchStart(n) {
        n.touches && n.touches.length > 0 && this.onDragStart(n.touches[0].pageX)
    }
    onTouchMove(n) {
        typeof this.state.dragTime == "number" && n.preventDefault(), n.touches && n.touches.length > 0 && this.onDragMove(n.touches[0].pageX)
    }
    onDragStart(n) {
        typeof this.state.dragTime != "number" && this.setDragTime(n)
    }
    onDragMove(n) {
        typeof this.state.dragTime == "number" && this.setDragTime(n)
    }
    onDragEnd() {
        this.clearDragTime()
    }
    onUnload(n) {
        const {
            iString: o
        } = this.context;
        this.state.playing && (n.returnValue = o("If you close this the audio will stop. Are you sure you want to navigate away from this page?"))
    }
    onGlobalPlay(n) {
        this !== n && this.player && !this.player.paused && (this.track(E.CLICKED_PAUSE_BUTTON, {
            implicit: !0,
            feature: this.props.feature
        }), this.player.pause())
    }
    togglePlayback() {
        return se(this, null, function*() {
            const {
                iString: n
            } = this.context;
            if (this.player)
                if (this.player.paused) {
                    this.track(E.CLICKED_PLAY_BUTTON, {
                        feature: this.props.feature
                    });
                    try {
                        yield this.player.play()
                    } catch (o) {
                        if (o.name === "NotSupportedError") alert(n("Failed to play this media: it may not be supported by this browser."));
                        else throw o
                    }
                } else this.track(E.CLICKED_PAUSE_BUTTON, {
                    feature: this.props.feature
                }), yield this.player.pause()
        })
    }
    skipBack() {
        if (this.player) {
            const n = Math.max(0, this.state.currentTime - 15);
            this.track(E.SEEKED_AUDIO, {
                new_time: n,
                source: "skip"
            }), this.player.currentTime = n
        }
    }
    skipForward() {
        if (this.player) {
            const n = Math.min(this.state.duration, this.state.currentTime + 30);
            this.track(E.SEEKED_AUDIO, {
                new_time: n,
                source: "skip"
            }), this.player.currentTime = n
        }
    }
    setDragTime(n) {
        if (!this.props.src || !this.state.duration || !this.player || !document.body || !document.body.getBoundingClientRect) return;
        const o = document.body.getBoundingClientRect(),
            a = this.progressBar.getBoundingClientRect(),
            i = a.left - o.left,
            r = a.right;
        let c = (Math.max(i, Math.min(r, n)) - i) / (r - i) * this.state.duration;
        this.isDragTimeCloseToCurrentTime(c) && (c = this.state.currentTime), this.setState({
            dragTime: c
        })
    }
    clearDragTime() {
        if (typeof this.state.dragTime != "number") return;
        const n = this.state.dragTime;
        this.track(E.SEEKED_AUDIO, {
            new_time: n,
            source: "slider"
        }), this.isDragTimeCloseToCurrentTime(n) ? this.setState({
            dragTime: null
        }) : (this.setState({
            currentTime: n,
            dragTime: null,
            lastDragClearedAt: performance.now()
        }), this.player && (this.player.currentTime = n))
    }
    isDragTimeCloseToCurrentTime(n) {
        if (this.props.preventSnappingToCurrentTime || typeof this.state.currentTime != "number") return !1;
        let o;
        return this.state.duration < 10 ? o = 0 : this.state.duration < 30 ? o = 3 : o = 5, Math.abs(this.state.currentTime - n) < o
    }
    track(n, o = {}) {
        const a = this.props.metricsPost;
        a && V(n, Object.assign({
            post_id: a.id,
            publication_id: a.publication_id,
            is_podcast_free_preview: po(a),
            current_time: this.state.currentTime ? Math.floor(this.state.currentTime) : 0,
            duration: this.state.duration ? Math.floor(this.state.duration) : 0,
            playback_rate: this.state.playbackRate
        }, o))
    }
    render({
        src: n,
        autoPlay: o,
        pub: a,
        post: i,
        isFancy: r,
        showCTAs: l,
        metricsPost: c,
        addToPodcastLink: u,
        isPaywalled: d,
        render: p
    }) {
        const {
            iString: h
        } = this.context;
        if (p) {
            const {
                dragTime: m,
                duration: f,
                currentTime: _,
                playbackRate: g
            } = this.state, y = typeof m == "number" ? m : _;
            return e(z, null, p({
                isPaywalled: d,
                progress: f ? (typeof m == "number" ? m : _) / f : 0,
                currentTime: f ? ae(y) : "--:--",
                dragTime: typeof m == "number" ? ae(m) : null,
                remainingTime: f ? `-${ae(f-Math.min(y,f))}` : "--:--",
                isPlaying: this.state.playing,
                playbackRate: g,
                progressBarOnMouseDown: C => {
                    this.onMouseDown(C)
                },
                progressBarRef: C => {
                    this.progressBar = C
                },
                setPlaybackRate: C => {
                    this.setPlaybackRate(C)
                },
                skipBack: () => {
                    this.skipBack()
                },
                skipForward: () => {
                    this.skipForward()
                },
                togglePlayback: () => {
                    this.togglePlayback()
                }
            }), n && !d && e("audio", {
                ref: C => {
                    this.player = C
                },
                src: n,
                autoPlay: o
            }, h("Audio playback is not supported on your browser. Please upgrade.")))
        }
        return r ? this.renderFancy({
            src: n,
            autoPlay: o,
            pub: a,
            post: i,
            metricsPost: c,
            showCTAs: l
        }) : this.renderOriginal({
            src: n,
            autoPlay: o,
            pub: a,
            metricsPost: c,
            addToPodcastLink: u
        })
    }
    renderFancy({
        src: n,
        autoPlay: o,
        pub: a,
        post: i,
        showCTAs: r
    }) {
        const {
            iString: l
        } = this.context, c = ho(a, i);
        return e(z, null, e("div", {
            className: "audio-player-wrapper-fancy"
        }, e("div", {
            className: "audio-player"
        }, e("div", {
            className: "audio-player-substack-logo audio-player-clickable",
            onClick: this.openEpisodePage
        }, e(Ha, {
            color: "#F8F8F8"
        })), e("div", {
            className: "audio-player-hero-image-container audio-player-clickable",
            onClick: this.openEpisodePage
        }, c && e("img", {
            className: "audio-player-hero-image audio-player-clickable",
            src: ut(c, 500, {
                height: 500,
                crop: "fill"
            }),
            onClick: this.openEpisodePage
        })), e("div", {
            className: "audio-player-title audio-player-clickable",
            onClick: this.openEpisodePage
        }, i.title), e("div", {
            className: "audio-player-subtitle audio-player-clickable",
            onClick: this.openEpisodePage
        }, i.subtitle), n && e("audio", {
            "data-testid": "audio-element",
            ref: u => this.player = u,
            src: n,
            autoPlay: o
        }, l("Audio playback is not supported on your browser. Please upgrade.")), this.renderProgressFancy(this.props, this.state), this.renderButtonsFancy(this.props, this.state), r && e("div", {
            className: "btn-group"
        }, e(pt, {
            className: "bold text-gray-foreground",
            newTab: !0,
            onClick: this.openEpisodePage
        }, l("View post")), e(pt, {
            className: "primary bold subscribe-btn",
            href: this.maybeAppendIframeVisitId(go(a, O(I({}, Bn), {
                simple: !0,
                next: Pe(a, i)
            }))),
            newTab: !0
        }, qn(a))))))
    }
    renderOriginal({
        src: n,
        autoPlay: o,
        pub: a,
        addToPodcastLink: i
    }) {
        const {
            iString: r
        } = this.context;
        return e("div", {
            className: "audio-player-wrapper"
        }, e("div", {
            className: "audio-player"
        }, n && e("audio", {
            ref: l => this.player = l,
            src: n,
            autoPlay: o
        }, r("Audio playback is not supported on your browser. Please upgrade.")), this.renderButtons(this.props, this.state), this.renderProgress(this.props, this.state)), i && !a.hide_podcast_feed_link && e("div", {
            className: "audio-player-add-to-podcast-link",
            href: i
        }, e("a", {
            href: i,
            target: "_blank",
            rel: "noopener"
        }, r("Listen in podcast app"))))
    }
    renderButtonsFancy({
        src: n,
        href: o
    }, {
        playing: a,
        waiting: i,
        playbackRate: r
    }) {
        return e("div", {
            className: "audio-player-buttons"
        }, e("button", {
            className: "audio-player-backward",
            "aria-pressed": "false",
            onClick: () => this.skipBack()
        }, e(Kt, {
            className: "skip-icon"
        })), e("button", {
            className: x("audio-player-play", {
                pause: "playing",
                waiting: i
            }),
            "aria-pressed": "false",
            onClick: () => this.togglePlayback()
        }, a ? e(Sl, {
            className: "playback-icon pause",
            fill: "#1C110B"
        }) : e(Pl, {
            className: "playback-icon play",
            fill: "#1C110B"
        })), e("button", {
            className: "audio-player-forward",
            "aria-pressed": "false",
            onClick: () => this.skipForward()
        }, e(qt, {
            className: "skip-icon"
        })))
    }
    renderButtons({
        src: n,
        href: o,
        isStatic: a
    }, {
        playing: i,
        waiting: r,
        playbackRate: l
    }) {
        return e("div", {
            className: "audio-player-buttons"
        }, e("table", {
            className: "custom"
        }, e("tr", null, e("td", {
            className: "audio-player-buttons-spacing"
        }, " "), e("td", {
            className: "audio-player-backward"
        }, e("a", {
            role: "button",
            className: "button",
            tabIndex: "0",
            "aria-pressed": "false",
            href: o || "javascript:void(0)",
            onClick: () => this.skipBack()
        }, e(Kt, {
            className: "skip-icon",
            fill: "#3c3c3c",
            height: "30",
            isStatic: a
        }))), e("td", {
            className: `audio-player-play ${i?"pause":""} ${r?"waiting":""}`
        }, e("a", {
            className: "button",
            role: "button",
            tabIndex: "0",
            "aria-pressed": "false",
            href: o || "javascript:void(0)",
            onClick: () => this.togglePlayback()
        }, e("img", {
            src: ut(i ? "/img/audio-player-pause.png" : "/img/audio-player-play.png", 96)
        }))), e("td", {
            className: "audio-player-forward"
        }, e("a", {
            role: "button",
            className: "button",
            tabIndex: "0",
            "aria-pressed": "false",
            href: o || "javascript:void(0)",
            onClick: () => this.skipForward()
        }, e(qt, {
            className: "skip-icon",
            fill: "#3c3c3c",
            height: "30",
            isStatic: a
        }))), e("td", {
            className: "audio-player-buttons-spacing"
        }, " "))), n && e(Nl, {
            currentPlaybackRate: l,
            setPlaybackRate: this.setPlaybackRate
        }))
    }
    renderProgress({}, {
        duration: n,
        currentTime: o,
        dragTime: a
    }) {
        return e("div", {
            className: "audio-player-progress"
        }, e("table", {
            className: "custom"
        }, e("tr", null, e("td", {
            className: "audio-player-progress-past"
        }, n ? ae(o) : "--:--"), e("td", {
            ref: i => this.progressBar = i,
            className: "audio-player-progress-bar",
            onMouseDown: i => this.onMouseDown(i)
        }, e("div", {
            className: "audio-player-progress-bar-track"
        }), e("div", {
            className: "audio-player-progress-bar-filled",
            style: `width:${n?100*(typeof a=="number"?a:o)/n:0}%`
        }), e("div", {
            className: "audio-player-progress-bar-current",
            style: `left:${n?100*o/n:0}%`
        }), e("div", {
            className: "audio-player-progress-bar-button",
            style: `left:${n?100*(typeof a=="number"?a:o)/n:0}%`
        }), typeof a == "number" && e("div", {
            className: "audio-player-progress-bar-popup",
            style: `left:${n?100*a/n:0}%`
        }, ae(a))), e("td", {
            className: "audio-player-progress-left"
        }, n ? `-${ae(n-Math.min(o,n))}` : "--:--"))))
    }
    renderProgressFancy({}, {
        duration: n,
        currentTime: o,
        dragTime: a,
        lastDragClearedAt: i
    }) {
        const r = typeof a == "number",
            l = i ? performance.now() - i < 50 : !1;
        return e(z, null, e("div", {
            className: "audio-player-progress"
        }, e("div", {
            ref: c => this.progressBar = c,
            className: "audio-player-progress-bar",
            onMouseDown: c => this.onMouseDown(c)
        }, e("div", {
            className: "audio-player-progress-bar-track"
        }), e("div", {
            className: "audio-player-progress-bar-filled",
            style: {
                width: `${n?100*(r?a:o)/n:0}%`
            }
        }), e("div", {
            className: x("audio-player-progress-bar-current", {
                "audio-player-progress-bar-current-placeholder": r,
                "audio-player-progress-bar-current-disable-animations": l
            }),
            style: `left:${n?100*o/n:0}%`
        }), r && e("div", {
            className: "audio-player-progress-bar-current audio-player-progress-bar-current-dragging",
            style: `left:${n?100*a/n:0}%`
        }), r && e("div", {
            className: "audio-player-progress-bar-popup",
            style: `left:${n?100*a/n:0}%`
        }, ae(a)))), e("div", {
            className: "audio-player-time-wrapper"
        }, e("div", {
            className: "audio-player-progress-past"
        }, n ? ae(o) : "--:--"), e("div", {
            className: "audio-player-progress-left"
        }, n ? `-${ae(n-Math.min(o,n))}` : "--:--")))
    }
}
He(Ms, "contextType", Do);
const Ls = ({
        pub: t,
        podcastUpload: s,
        section: n,
        thumbnailInfo: o,
        useSection: a
    }) => {
        if (a) {
            const p = n ? yn(t, {
                section: n
            }) : _n(t);
            return n ? {
                artUrl: n.logo_url,
                backgroundUrl: n.cover_photo_url,
                description: n.description,
                paidArtUrl: null,
                title: n.name,
                url: p
            } : {
                artUrl: t.logo_url,
                backgroundUrl: t.cover_photo_url,
                description: null,
                paidArtUrl: null,
                title: t.name,
                url: p
            }
        }
        const {
            title: i,
            description: r,
            artUrl: l,
            paidEpisodeArtUrl: c
        } = n && !a ? yo({
            pub: t,
            section: n
        }) : _o({
            pub: t
        }), u = n ? yn(t, {
            section: n
        }) : _n(t);
        let d = l;
        if (s && o && o.thumbnail_id > 1) {
            const p = Cn(O(I({}, s), {
                id: o.media_upload_id,
                post_id: o.post_id,
                thumbnail_id: o.thumbnail_id
            }));
            p && (d = p)
        } else if (s && s.thumbnail_id > 1) {
            const p = Cn(s);
            p && (d = p)
        }
        return {
            artUrl: l,
            backgroundUrl: d,
            description: r,
            paidArtUrl: c != null ? c : null,
            title: i,
            url: u
        }
    },
    yt = [{
        key: "apple_podcasts",
        label: "Apple Podcasts",
        fieldName: "apple_podcasts_url"
    }, {
        key: "spotify",
        label: "Spotify",
        fieldName: "spotify_url"
    }, {
        key: "spotify_for_paid_users",
        label: "Spotify",
        fieldName: "spotify_for_paid_users_url"
    }, {
        key: "youtube_music",
        label: "YouTube Music",
        fieldName: "youtube_music_url"
    }, {
        key: "youtube",
        label: "YouTube",
        fieldName: "youtube_url"
    }, {
        key: "overcast",
        label: "Overcast",
        fieldName: "overcast_url"
    }, {
        key: "pocket_casts",
        label: "Pocket Casts",
        fieldName: "pocket_casts_url"
    }],
    Dn = ({
        platform: t,
        feedUrl: s,
        isApple: n,
        isMobile: o
    }) => s ? t === "apple_podcasts" && n ? `podcast://${bn(s)}` : t === "overcast" && o ? `overcast://x-callback-url/add?url=${encodeURIComponent(s)}` : t === "pocket_casts" && o ? `pktc://subscribe/${bn(s)}` : null : null;

function Tl({
    showLinks: t,
    userIsSubscribed: s
}) {
    return s && t.spotify_for_paid_users_url ? {
        label: "Spotify",
        platform: "spotify_for_paid_users",
        url: t.spotify_for_paid_users_url
    } : !s && t.spotify_url ? {
        label: "Spotify",
        platform: "spotify",
        url: t.spotify_url
    } : t.spotify_open_access_url ? {
        label: "Spotify",
        platform: "spotify",
        url: t.spotify_open_access_url
    } : null
}
const xl = ({
        feedUrl: t,
        isApple: s,
        isMobile: n,
        showLinks: o,
        userIsSubscribed: a
    }) => {
        var c;
        const i = [],
            r = gs(yt, "key");
        let l = !1;
        for (const u of yt) {
            if (["spotify", "spotify_for_paid_users", "spotify_open_access"].includes(u.key)) {
                if (l) continue;
                const p = Tl({
                    showLinks: o,
                    userIsSubscribed: a
                });
                if (p) {
                    i.push(p), l = !0;
                    continue
                }
            }
            let d;
            a && u.key !== "youtube" ? d = Dn({
                platform: u.key,
                feedUrl: t,
                isApple: s,
                isMobile: n
            }) : d = (c = o[u.fieldName]) != null ? c : Dn({
                platform: u.key,
                feedUrl: t,
                isApple: s,
                isMobile: n
            }), d && i.push({
                label: r[u.key].label,
                platform: u.key,
                url: d
            }), u.key === "spotify" && o.spotify_open_access_url && i.push({
                label: "Spotify",
                platform: "spotify_open_access",
                url: o.spotify_open_access_url
            })
        }
        return i
    },
    I1 = ({
        feedUrl: t,
        isApple: s,
        isMobile: n,
        render: o,
        showLinks: a,
        user: i,
        analyticsSource: r = "shows_episode_page"
    }) => {
        const l = gs(yt, "key");
        return Jt([...xl({
            feedUrl: t,
            isApple: s,
            isMobile: n,
            showLinks: a,
            userIsSubscribed: !!(i != null && i.is_subscribed)
        }).map(c => {
            const u = c.platform === "spotify_open_access" ? "Spotify" : l[c.platform].label;
            return o({
                key: c.platform,
                label: u,
                url: c.url,
                onClick: () => {
                    V(E.PODCAST_APP_LINK_CLICK, {
                        appName: u,
                        feedUrl: t,
                        url: c.url,
                        source: r
                    }), n || window.open(c.url, "_blank")
                }
            })
        }), t && o({
            key: "rss",
            label: "RSS Feed",
            url: t,
            onClick: () => {
                V(E.PODCAST_FEED_URL_COPIED, {
                    feedUrl: t,
                    source: r
                }), Ut("RSS feed URL copied"), Ze(t)
            }
        })])
    },
    El = {
        apple_podcasts: ["https://podcasts.apple.com/", "https://itunes.apple.com/"],
        overcast: ["https://overcast.fm/"],
        pocket_casts: ["https://pca.st/"],
        spotify: ["https://open.spotify.com/"],
        spotify_for_paid_users: ["https://open.spotify.com/"],
        youtube: ["https://youtube.com/", "https://www.youtube.com/"],
        youtube_music: ["https://music.youtube.com/"]
    },
    Ml = ({
        platform: t,
        url: s,
        language: n
    }) => {
        const {
            iString: o,
            iTemplate: a
        } = I18N.i(n), i = El[t];
        return i.every(r => !s.startsWith(r)) ? {
            isValid: !1,
            message: a `Invalid URL. URL should start with "${i[0]}"`
        } : s.length > 255 ? {
            isValid: !1,
            message: o("URL can't be longer than 255 characters")
        } : {
            isValid: !0,
            message: null
        }
    },
    N1 = ({
        showLinks: t,
        language: s = "en"
    }) => {
        const n = {};
        let o = !1;
        for (const a of yt) {
            const i = t[a.fieldName];
            if (!i) continue;
            const {
                isValid: r,
                message: l
            } = Ml({
                platform: a.key,
                url: i,
                language: s
            });
            !r && l && (n[a.fieldName] = l, o = !0)
        }
        return o ? n : null
    },
    T1 = ({
        pub: t,
        section: s,
        spotifySettings: n
    }) => Ll({
        showLinks: s ? s.showLinks : t.show_links,
        spotifySettings: n
    }),
    Ll = ({
        showLinks: t,
        spotifySettings: s
    }) => {
        const n = {
            apple_podcasts_url: null,
            overcast_url: null,
            pocket_casts_url: null,
            spotify_url: null,
            spotify_for_paid_users_url: null,
            youtube_url: null,
            youtube_music_url: null,
            spotify_open_access_url: null
        };
        if (s && (n.spotify_open_access_url = s.spotify_show_url), !t) return n;
        for (const o of t) {
            const a = `${o.platform}_url`;
            n[a] = o.url
        }
        return n
    },
    Bs = "https://support.substack.com/hc/en-us/articles/4519588148244-How-do-I-listen-to-episodes-on-my-podcast-app-",
    x1 = "comments-for-scroll",
    Me = {
        "pub-logo": "_pub-logo_lhear_1",
        "pub-logo--32": "_pub-logo--32_lhear_6",
        "pub-logo--48": "_pub-logo--48_lhear_11",
        "pub-logo--56": "_pub-logo--56_lhear_16",
        "pub-logo--76": "_pub-logo--76_lhear_21",
        "pub-logo--border-white": "_pub-logo--border-white_lhear_26"
    },
    Bl = ({
        border: t,
        isFreemail: s,
        isStatic: n,
        post: o,
        pub: a,
        section: i,
        size: r = 48,
        url: l,
        useSection: c
    }) => {
        const u = Ke({
                post: o
            }),
            {
                artUrl: d,
                paidArtUrl: p,
                url: h
            } = Ls({
                pub: a,
                section: i,
                useSection: c
            }),
            m = Fo({
                shadow: "lg"
            });
        let f;
        return n && u && o ? f = s ? d : p != null ? p : d : c ? f = d != null ? d : o == null ? void 0 : o.podcast_episode_image_url : o && (o != null && o.podcastUpload || o != null && o.videoUpload || o != null && o.podcast_url) ? f = o.podcast_episode_image_url : f = d, e(Fa, {
            className: x(m, Me["pub-logo"], {
                [Me["pub-logo--32"]]: r === 32,
                [Me["pub-logo--48"]]: r === 48,
                [Me["pub-logo--56"]]: r === 56,
                [Me["pub-logo--76"]]: r === 76,
                [Me["pub-logo--border-white"]]: t === "white"
            }),
            href: l != null ? l : h,
            isStatic: n,
            pub: a,
            logo_url: f,
            noMargin: !0,
            size: r
        })
    },
    Dl = "_header_2121e_1",
    Fl = {
        header: Dl
    },
    Al = ({
        isDisabled: t,
        post: s,
        postTitle: n,
        pub: o,
        section: a,
        showTitle: i,
        showUpgradeButton: r,
        variant: l
    }) => {
        const {
            iString: c
        } = D();
        return e(S, {
            className: Fl.header,
            alignItems: "center",
            alignSelf: "start",
            gap: l === "mini" ? 12 : 16,
            opacity: t ? 20 : void 0,
            pointerEvents: t ? "none" : void 0
        }, e(Bl, {
            post: s,
            pub: o,
            section: a,
            size: l === "mini" ? 32 : 76
        }), e(v, {
            minWidth: 0
        }, l !== "mini" && e(w.Meta, {
            color: "white",
            ellipsis: !0,
            overflow: "hidden",
            opacity: l === "notes-embed" ? 50 : 80
        }, i), e(w.B3, O(I({
            color: "white",
            ellipsis: !0,
            overflow: "hidden",
            weight: "semibold"
        }, l === "mini" ? {
            size: 14,
            lineHeight: 20
        } : null), {
            style: {
                maxWidth: 460
            }
        }), n), r && l !== "mini" && e(S, {
            paddingTop: 8
        }, e(de, {
            "data-testid": "free-podcast-url-cta",
            href: jn(o, {
                simple: !0,
                next: document.location.href,
                utm_source: Je.showsAudioPlayerHeader,
                utm_medium: Yt.web,
                utm_content: s == null ? void 0 : s.id
            }),
            localNavigation: !1,
            size: "sm",
            onClick: () => {
                V(E.LISTEN_AD_FREE_CLICKED, {
                    post_id: s == null ? void 0 : s.id,
                    section_id: a == null ? void 0 : a.id,
                    source: "audio-player"
                })
            }
        }, c("Listen ad-free"))), l === "notes-embed" && e(S, {
            alignItems: "center",
            gap: 4
        }, e(w.B4, {
            opacity: 50,
            color: "white",
            translated: !0
        }, "View post"), e(nn, {
            style: {
                opacity: .5,
                color: "#fff"
            },
            size: 16
        }))))
    },
    Ds = t => e(ge, O(I({}, t), {
        name: "CopyIcon",
        svgParams: {
            height: 15,
            width: 15
        }
    }), e("rect", {
        x: "4",
        y: "1",
        width: "10.2862",
        height: "10.2862",
        rx: "1"
    }), e("rect", {
        x: "1",
        y: "4",
        width: "10.2862",
        height: "10.2862",
        rx: "1"
    })),
    Rl = n => {
        var o = n,
            {
                strokeWidth: t = 1.5
            } = o,
            s = pe(o, ["strokeWidth"]);
        return e(ge, O(I({}, s), {
            strokeWidth: t,
            name: "SendIcon",
            svgParams: {
                height: 20,
                width: 20,
                viewBox: "0 0 20 20"
            }
        }), e("path", {
            d: "M18.3332 1.66699L12.4998 18.3337L9.1665 10.8337L1.6665 7.50033L18.3332 1.66699Z",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        }), e("path", {
            d: "M18.3332 1.66699L9.1665 10.8337",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        }))
    },
    Fs = ({
        className: t,
        pub: s,
        utmSource: n
    }) => {
        const o = typeof window != "undefined" ? window.location.href : "",
            a = Co(s, {
                params: {
                    utm_source: n,
                    simple: !0,
                    next: o
                }
            });
        return e(pt, {
            className: x("primary tw-text-sm tw-font-semibold", t),
            href: a
        }, qn(s))
    },
    As = "hide_media_download_option",
    E1 = ({
        feedUrl: t,
        post: s,
        pub: n,
        sectionId: o,
        hasAccessToPrivatePodcastFeed: a,
        fileSrc: i,
        icon: r
    }) => {
        const [l, c] = k(!1), [u, d] = Ua(), {
            iString: p
        } = D();
        return e("div", {
            className: "tw-relative"
        }, e("div", {
            className: x("tw-font-sans audio-button tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-gap-3 tw-rounded tw-border tw-border-solid tw-px-5 tw-py-3 tw-text-sm tw-font-semibold tw-text-pub-secondary-text tw-transition-colors sm:tw-py-2", l ? "tw-border-pub-detail-dark" : "tw-border-pub-detail-light hover:tw-border-pub-detail"),
            role: "button",
            onClick: d
        }, r, e("span", {
            className: "sm:tw-hidden"
        }, p("Open in player")), e("span", {
            className: "tw-hidden sm:tw-block"
        }, p("Listen on")), e(Ka, {
            className: "tw-hidden tw-fill-pub-secondary-text tw-stroke-pub-secondary-text sm:tw-block",
            height: 4
        })), e(Ol, {
            feedUrl: t,
            menuRef: u,
            post: s,
            pub: n,
            sectionId: o,
            onToggle: c,
            hasAccessToPrivatePodcastFeed: a,
            fileSrc: i
        }))
    },
    Fn = ({
        feedUrl: t,
        pub: s,
        post: n
    }) => {
        V(E.PODCAST_APP_LINK_CLICK, {
            appName: "Substack App",
            feedUrl: t
        }), document.location.href = bo(s == null ? void 0 : s.subdomain, n == null ? void 0 : n.slug, {
            redirect: "app-marketing",
            source: "podcast-dropdown"
        })
    },
    Ol = ({
        feedUrl: t,
        menuRef: s,
        post: n,
        pub: o,
        sectionId: a,
        onToggle: i,
        hasAccessToPrivatePodcastFeed: r,
        fileSrc: l
    }) => {
        const c = wo(),
            u = () => {
                V(E.PODCAST_FEED_URL_COPIED), Ze(t), alert("Copied")
            };
        return e(ja, {
            ref: s,
            noTail: !0,
            noList: !0,
            noPlace: !0,
            useDrawerOnMobile: !0,
            className: "tw-right-0 tw-border-pub-wash tw-bg-pub-background tw-p-0 tw-font-sans tw-transition sm:tw-max-w-none",
            wrapperClassName: "tw-max-h-[90vh]",
            onToggle: ({
                active: d
            }) => {
                V(E.PODCAST_LISTEN_ON_CLICKED), i(d)
            }
        }, c ? e(Hl, {
            feedUrl: t,
            pub: o,
            onCopyFeed: u,
            onClickSubstackApp: () => Fn({
                feedUrl: t,
                pub: o,
                post: n
            }),
            hasAccessToPrivatePodcastFeed: r,
            fileSrc: l
        }) : e(zl, {
            feedUrl: t,
            pub: o,
            sectionId: a,
            onCopyFeed: u,
            onClickSubstackApp: () => Fn({
                feedUrl: t,
                pub: o,
                post: n
            }),
            hasAccessToPrivatePodcastFeed: r,
            fileSrc: l
        }))
    },
    Rs = ({
        fileSrc: t
    }) => Yn(As) ? null : e(Xe, {
        onClick: () => {
            Gn(We(t, {
                download: !0
            }))
        }
    }, e("div", {
        className: "tw-flex tw-w-6 tw-justify-center"
    }, e(Ye, null)), e("span", null, "Download MP3")),
    $l = () => {
        const t = ["Podcast Addict"],
            s = ["Apple Podcasts"];
        return fs({
            spotifySettings: null
        }).filter(n => ko() ? s.includes(n.name) : t.includes(n.name))
    },
    Vl = () => {
        const t = ["Apple Podcasts"],
            s = [];
        return fs({
            spotifySettings: null
        }).filter(n => So() ? t.includes(n.name) : s.includes(n.name))
    },
    Hl = ({
        feedUrl: t,
        pub: s,
        onCopyFeed: n,
        onClickSubstackApp: o,
        hasAccessToPrivatePodcastFeed: a,
        fileSrc: i
    }) => {
        var l;
        const {
            iString: r
        } = D();
        return e("div", {
            className: "tw-px-2 tw-pt-5 tw-pb-6"
        }, e("div", {
            className: "tw-mb-2 tw-px-2 tw-text-xl tw-font-bold tw-text-pub-primary-text"
        }, r("Listen in app")), e(Xe, {
            onClick: o
        }, e("div", {
            className: "tw-flex tw-w-6 tw-justify-center"
        }, e(ys, null)), e("span", null, r("Substack App"))), t && $l().map(({
            name: c,
            icon: u,
            onClick: d
        }) => e(Xe, {
            key: c,
            onClick: () => {
                V(E.PODCAST_APP_LINK_CLICK, {
                    appName: c,
                    feedUrl: t
                }), d(t)
            }
        }, e("img", {
            src: u,
            alt: `${c} logo`,
            className: "tw-w-6"
        }), e("span", {
            className: "tw-whitespace-nowrap"
        }, c))), i && e(Rs, {
            fileSrc: i
        }), t ? e("div", {
            className: "tw-px-2 tw-pt-2"
        }, e("div", {
            className: "tw-mb-4 tw-text-base tw-font-bold"
        }, r("Private RSS feed")), e("div", {
            className: "tw-mb-6 tw-text-sm tw-text-pub-secondary-text"
        }, r("Listen to paid episodes on your favorite podcast app with your private RSS feed."), " ", e(Ct, null)), e("div", null, e(_t, {
            className: "tw-w-full",
            onClick: n
        }, e(Ds, {
            className: "tw-stroke-pub-secondary-text"
        }), e("span", null, r("Copy link"))))) : a ? e("div", {
            className: "tw-mt-3 tw-border-0 tw-border-t tw-border-solid tw-border-pub-detail-light tw-px-2 tw-pt-6 tw-text-sm"
        }, e("div", {
            className: "tw-mb-2 tw-font-bold"
        }, r("Private RSS feed")), e("div", {
            className: "tw-mb-6 tw-text-pub-secondary-text"
        }, r("Listen to paid episodes on your favorite podcast app with your private RSS feed.")), e("div", null, e(Os, {
            pub: s
        }))) : e("div", {
            className: "tw-mt-3 tw-border-0 tw-border-t tw-border-solid tw-border-pub-detail-light tw-px-2 tw-pt-6 tw-text-sm"
        }, e("div", {
            className: "tw-mb-2 tw-font-bold"
        }, "Subscribe to ", (l = s.podcast_title) != null ? l : "this podcast"), e("div", {
            className: "tw-mb-6 tw-text-pub-secondary-text"
        }, r("Subscribe now to get a private link for listening in your favorite podcast player or listen in the Substack app."), " ", e(Ct, null)), e(Fs, {
            className: "tw-w-full",
            pub: s,
            utmSource: "podcast_post_listen_on"
        })))
    },
    zl = ({
        feedUrl: t,
        pub: s,
        sectionId: n,
        onCopyFeed: o,
        onClickSubstackApp: a,
        hasAccessToPrivatePodcastFeed: i,
        fileSrc: r
    }) => {
        const [l, c] = k(!1), [u, d] = k(null), {
            iString: p,
            iTemplate: h
        } = D(), m = () => se(void 0, null, function*() {
            try {
                V(E.PODCAST_EMAIL_LINK_CLICKED), yield tn.post("/api/v1/subscription/send_podcast_email").send({
                    section_id: n
                }), alert(p("Email sent")), c(!0)
            } catch (f) {
                console.error("Failed to send podcast setup email:", f), d(f)
            }
        });
        return e("div", {
            className: "tw-min-w-[280px] tw-px-2 tw-py-2"
        }, e("div", {
            className: "tw-border-0 tw-border-b tw-border-solid tw-border-pub-detail-light tw-pb-2"
        }, e(Xe, {
            onClick: a
        }, e("div", {
            className: "tw-flex tw-w-6 tw-justify-center"
        }, e(ys, null)), e("span", null, "Substack App")), t && Vl().map(({
            name: f,
            icon: _,
            onClick: g
        }) => e(Xe, {
            key: f,
            onClick: () => {
                V(E.PODCAST_APP_LINK_CLICK, {
                    appName: f,
                    feedUrl: t
                }), g(t)
            }
        }, e("img", {
            src: _,
            alt: `${f} logo`,
            className: "tw-w-6"
        }), e("span", {
            className: "tw-whitespace-nowrap"
        }, f))), r && e(Rs, {
            fileSrc: r
        })), e("div", {
            className: "tw-p-2 tw-pt-4 tw-text-sm"
        }, t ? e(z, null, e("div", {
            className: "tw-mb-2 tw-font-bold"
        }, p("Your private RSS feed")), e("div", {
            className: "tw-mb-6 tw-text-pub-secondary-text"
        }, p("Copy your RSS link and paste it in your podcast app."), " ", e(Ct, null)), e("div", {
            className: "tw-flex tw-gap-2"
        }, e(_t, {
            onClick: o
        }, e(Ds, {
            className: "tw-stroke-pub-secondary-text",
            strokeWidth: 1.5
        }), e("span", null, p("Copy link"))), e(_t, {
            onClick: m,
            disabled: l
        }, e(Rl, {
            className: "tw-stroke-pub-secondary-text"
        }), e("span", null, p("Email link")))), u && e("div", {
            className: "tw-mt-2 tw-text-red-600"
        }, bt(u))) : i ? e(z, null, e("div", {
            className: "tw-mb-2 tw-font-bold"
        }, p("Your private RSS feed")), e("div", {
            className: "tw-mb-6 tw-text-pub-secondary-text"
        }, p("Listen to paid episodes on your favorite podcast app with your private RSS feed.")), e("div", null, e(Os, {
            pub: s
        }))) : e(z, null, e("div", {
            className: "tw-mb-2 tw-font-bold"
        }, p("Get a private RSS link for listening")), e("div", {
            className: "tw-mb-6 tw-text-pub-secondary-text"
        }, s.podcast_title ? h `Subscribe to ${s.podcast_title} to get a private link for listening in your favorite podcast player.` : p("Subscribe to this podcast to get a private link for listening in your favorite podcast player."), " ", e(Ct, null)), e(Fs, {
            pub: s,
            utmSource: "podcast_post_listen_on"
        }))))
    },
    Xe = o => {
        var a = o,
            {
                children: t,
                href: s
            } = a,
            n = pe(a, ["children", "href"]);
        const i = "tw-box-border tw-flex tw-items-center tw-gap-3 tw-whitespace-nowrap tw-rounded tw-py-3 tw-px-2 tw-text-base tw-font-bold tw-text-pub-primary-text tw-transition-colors hover:tw-bg-pub-wash sm:tw-gap-2 sm:tw-py-2 sm:tw-text-sm sm:tw-font-medium";
        return s ? e("a", I({
            className: x("tw-no-underline", i),
            href: s
        }, n), t) : e("div", I({
            className: x("tw-cursor-pointer", i),
            role: "button"
        }, n), t)
    },
    _t = ({
        children: t,
        className: s = "",
        disabled: n = !1,
        onClick: o
    }) => e(pt, {
        className: x("outline-grayscale tw-flex tw-items-center tw-justify-center tw-gap-3 tw-border-pub-detail-light tw-text-sm tw-font-medium tw-text-pub-secondary-text hover:tw-border-pub-detail", s),
        onClick: o,
        disabled: n
    }, t),
    Ct = () => {
        const {
            iString: t
        } = D();
        return e("a", {
            href: Bs,
            target: "_blank",
            rel: "noopener",
            className: "tw-text-pub-accent"
        }, t("Learn about RSS."))
    },
    Os = ({
        pub: t
    }) => {
        const {
            iString: s
        } = D();
        return e(_t, {
            className: "tw-w-full",
            onClick: () => {}
        }, e(na, {
            className: "tw-stroke-pub-secondary-text tw-no-underline",
            href: vo(t),
            onClick: () => {}
        }, s("Set up feed")))
    },
    jl = "_icon_192j7_1",
    Ul = "_popoverContainer_192j7_12",
    Wl = "_popoverLayer_192j7_17",
    Kl = "_dropdownItem_192j7_21",
    dt = {
        icon: jl,
        popoverContainer: Ul,
        popoverLayer: Wl,
        dropdownItem: Kl
    },
    ql = ({
        audioFileUrl: t,
        feedUrl: s,
        isPrivateFeed: n,
        sectionId: o,
        user: a
    }) => e(za, {
        className: dt.popoverContainer,
        layerClassName: dt.popoverLayer,
        content: e(Yl, {
            audioFileUrl: t,
            feedUrl: s,
            isPrivateFeed: n,
            sectionId: o,
            user: a
        }),
        preferPlacement: "bottom-start"
    }, e(ps, {
        className: dt.icon,
        size: 24
    })),
    Yl = ({
        audioFileUrl: t,
        feedUrl: s,
        isPrivateFeed: n,
        sectionId: o,
        user: a
    }) => {
        const {
            iString: i
        } = D(), [r, l] = k(!1), [c, u] = k(null), d = Yn(As), p = () => se(void 0, null, function*() {
            try {
                V(E.PODCAST_EMAIL_LINK_CLICKED), yield tn.post("/api/v1/subscription/send_podcast_email").send({
                    section_id: o
                }), Ut(i("Email sent")), l(!0)
            } catch (m) {
                u(m)
            }
        }), h = () => {
            V(E.PODCAST_FEED_URL_COPIED), Ze(s), Ut(i("RSS feed copied"))
        };
        return e(Fe, {
            style: {
                maxWidth: 285
            }
        }, e(v, {
            gap: 4
        }, t && !d && e(An, {
            icon: e(Ye, {
                size: 16
            }),
            onClick: () => {
                Gn(We(t, {
                    download: !0
                }))
            }
        }, i("Download MP3")), s && e(An, {
            icon: e(ri, {
                size: 16
            }),
            onClick: h
        }, i(n ? "Your private RSS feed" : "RSS feed"))), a && s && e(z, null, e(ht, {
            paddingY: 8,
            priority: "detail-themed"
        }), e(v, {
            gap: 12,
            padding: 8
        }, e(w.B4, {
            color: "pub-primary-text"
        }, i("Copy your RSS link and paste it in your podcast app."), " ", e(Gl, null)), e(S, {
            gap: 8
        }, e(de, {
            fill: "outline",
            leftIcon: e(sa, {
                size: 16
            }),
            priority: "secondary-theme",
            onClick: h
        }, i("Copy link")), e(de, {
            disabled: r,
            fill: "outline",
            leftIcon: e(oa, {
                size: 16
            }),
            priority: "secondary-theme",
            onClick: p
        }, i("Email link"))), c && e(w.B4, {
            color: "error"
        }, bt(c)))))
    },
    An = ({
        children: t,
        icon: s,
        onClick: n
    }) => e(S, {
        className: dt.dropdownItem,
        alignItems: "center",
        color: "pub-primary-text",
        gap: 12,
        padding: 12,
        radius: "sm",
        onClick: n
    }, s, e(w.B4, {
        color: "pub-primary-text"
    }, t)),
    Gl = () => {
        const {
            iString: t
        } = D();
        return e(w.B4, {
            as: "a",
            href: Bs,
            target: "_blank",
            rel: "noopener",
            color: "pub-accent"
        }, t("Learn about RSS."))
    },
    Xl = "_playbackRate_8pw72_16",
    ze = {
        "skip-button": "_skip-button_8pw72_1",
        "skip-icon": "_skip-icon_8pw72_5",
        playbackRate: Xl
    },
    ct = [{
        value: 1,
        display: "1"
    }, {
        value: 1.25,
        display: "1.25"
    }, {
        value: 1.5,
        display: "1.5"
    }, {
        value: 1.75,
        display: "1.75"
    }, {
        value: 2,
        display: "2"
    }],
    Jl = ({
        audioFileUrl: t,
        feedUrl: s,
        isPlaying: n,
        isPrivateFeed: o,
        playbackRate: a,
        sectionId: i,
        user: r,
        onChangePlaybackRate: l,
        onSkipBack: c,
        onSkipForward: u,
        onTogglePlayback: d
    }) => {
        const {
            isMobile: p
        } = fe(), h = p ? 28 : 32, m = ct.findIndex(({
            value: f
        }) => f === a);
        return e(S, {
            gap: 20,
            alignItems: "center",
            justifyContent: "space-between"
        }, e(S, {
            style: {
                width: 60
            },
            justifyContent: "center",
            onClick: () => {
                const f = (m + 1) % ct.length;
                l(ct[f].value)
            }
        }, e(w.B1, {
            className: ze.playbackRate,
            color: "white",
            font: "text",
            weight: "medium"
        }, ct[m].display, "×")), e(S, {
            gap: p ? 20 : 32,
            alignItems: "center"
        }, c && e("div", {
            onClick: c,
            role: "button",
            className: ze["skip-button"]
        }, e(Kt, {
            className: ze["skip-icon"],
            height: h
        })), e(cs, {
            size: p ? 56 : 72,
            isPlaying: n,
            onTogglePlayback: d
        }), u && e("div", {
            onClick: u,
            role: "button",
            className: ze["skip-button"]
        }, e(qt, {
            className: ze["skip-icon"],
            height: h
        }))), e(S, {
            style: {
                width: 60
            },
            justifyContent: "center",
            alignItems: "center"
        }, e(ql, {
            audioFileUrl: t,
            feedUrl: s,
            isPrivateFeed: o,
            sectionId: i,
            user: r
        })))
    },
    Zl = "_timestamp_1mnsx_1",
    Ql = "_track_1mnsx_5",
    Se = {
        timestamp: Zl,
        "track-container": "_track-container_1mnsx_5",
        track: Ql,
        "track-played": "_track-played_1mnsx_21",
        "track-drag-time": "_track-drag-time_1mnsx_30",
        "track-handle": "_track-handle_1mnsx_41"
    },
    ec = ({
        containerRef: t,
        currentTime: s,
        dragTime: n,
        hideStartingTimestamp: o,
        remainingTime: a,
        progress: i,
        onMouseDown: r
    }) => e(S, {
        alignItems: "center",
        flex: "grow",
        gap: 12
    }, !o && e(w.Meta, {
        className: Se.timestamp,
        color: "white"
    }, s), e("div", {
        ref: t,
        className: Se["track-container"],
        onMouseDown: r
    }, e("div", {
        className: Se.track
    }), e("div", {
        className: Se["track-played"],
        style: {
            width: `${i*100}%`
        }
    }), n && e(w.Meta, {
        className: Se["track-drag-time"],
        style: {
            left: `${i*100}%`
        }
    }, n), e("div", {
        className: Se["track-handle"],
        style: {
            left: `${i*100}%`
        }
    })), e(w.Meta, {
        className: Se.timestamp,
        color: "white"
    }, a)),
    tc = "_backgroundImage_11xim_1",
    nc = "_backgroundBlur_11xim_7",
    sc = "_backgroundDarkenRight_11xim_12",
    Rn = {
        backgroundImage: tc,
        backgroundBlur: nc,
        backgroundDarkenRight: sc
    },
    oc = ({
        backgroundUrl: t,
        blurAmount: s,
        isBlurred: n,
        palette: o
    }) => e(z, null, t && e(Rt, {
        className: Rn.backgroundImage,
        style: t ? {
            backgroundImage: `url(${ut(t)})`
        } : void 0
    }), n && e(Rt, {
        style: I({
            WebkitBackdropFilter: `blur(${s}px) brightness(0.85)`,
            backdropFilter: `blur(${s}px) brightness(0.85)`
        }, ba({
            palette: o,
            withDefault: !1
        }))
    }), !n && e(Rt, {
        className: Rn.backgroundDarkenRight
    })),
    Rt = Ao({
        position: "absolute",
        inset: 0,
        radius: "md"
    }),
    ac = "_controlsCentered_feddw_1",
    ic = "_track_feddw_7",
    On = {
        controlsCentered: ac,
        track: ic
    },
    rc = ({
        isFreeSubscribed: t,
        isSubscribed: s,
        isTesting: n,
        post: o,
        pub: a,
        section: i,
        variant: r
    }) => {
        const [l, c] = k(!1), u = le(null), d = !s && Gt(o.audience);
        if (!o.podcastUpload) return null;
        const p = Xt({
                post: o
            }),
            h = o.podcastUpload.is_free_preview || Ke({
                post: o
            }),
            m = !p && d && (l || !h && r !== "notes-embed") && !Ke({
                post: o
            }),
            f = () => {
                var _;
                (_ = u.current) != null && _.player && (c(!1), u.current.player.currentTime = 0, u.current.player.play())
            };
        return e(z, null, e(ln, {
            audioFileUrl: o.podcast_url,
            audioPlayerRef: u,
            metricsPost: o,
            hidePreviewUI: p,
            paywallComponent: m ? e(ft, {
                inlineIcon: r === "notes-embed",
                isFreeSubscribed: t,
                post: o,
                pub: a,
                variant: "audio",
                onRestart: h ? f : void 0
            }) : void 0,
            podcastDuration: o.podcast_duration,
            podcastUpload: o.podcastUpload,
            post: o,
            postId: o.id,
            postTitle: o.title,
            pub: a,
            section: i,
            showPaidLabel: d && !h,
            user: null,
            variant: r,
            onFinishAudio: () => {
                c(!0)
            }
        }), n && e("button", {
            onClick: () => {
                c(!0)
            }
        }, "finish audio"))
    },
    M1 = ({
        audioPlayerRef: t,
        hasPaywall: s,
        feedUrl: n,
        isPrivateFeed: o,
        isServingFreePodcastUrl: a,
        post: i,
        pub: r,
        section: l,
        ufiComponent: c,
        user: u
    }) => {
        var g;
        const [d, p] = k(!1), h = Xt({
            post: i
        }), m = ((g = i.podcastUpload) == null ? void 0 : g.is_free_preview) || Ke({
            post: i
        }), f = !h && s && (!m || d) && !Ke({
            post: i
        }), _ = () => {
            var y;
            (y = t.current) != null && y.player && (p(!1), t.current.player.currentTime = 0, t.current.player.play())
        };
        return e(ln, {
            audioFileUrl: i.podcast_url,
            audioPlayerRef: t,
            feedUrl: n,
            hidePreviewUI: h,
            isPrivateFeed: o,
            isServingFreePodcastUrl: a,
            metricsPost: i,
            paywallComponent: f ? e(ft, {
                isFreeSubscribed: !!(u != null && u.is_free_subscribed),
                post: i,
                pub: r,
                variant: "audio",
                onRestart: m ? _ : void 0
            }) : void 0,
            podcastDuration: i.podcast_duration,
            podcastUpload: i.podcastUpload,
            post: i,
            postId: i.id,
            postTitle: i.title,
            pub: r,
            section: l,
            ufiComponent: c,
            user: u,
            variant: "episode-page",
            onFinishAudio: () => {
                p(!0)
            }
        })
    },
    L1 = ({
        audioFileUrl: t,
        hasFreePodcastUrlSet: s,
        postTitle: n,
        podcastDuration: o,
        podcastPreviewUpload: a,
        podcastUpload: i,
        pub: r,
        section: l,
        editComponent: c
    }) => e(ln, {
        audioFileUrl: t,
        hasFreePodcastUrlSet: s,
        metricsPost: null,
        hidePreviewUI: !1,
        postId: null,
        postTitle: n,
        podcastDuration: o,
        podcastPreviewUpload: a,
        podcastUpload: i,
        post: null,
        pub: r,
        section: l,
        user: null,
        variant: "editor",
        editComponent: c
    }),
    lc = {
        "episode-page": 400,
        editor: 320,
        "notes-embed": 160,
        "notes-full": 250
    },
    ln = ({
        audioFileUrl: t,
        audioPlayerRef: s,
        feedUrl: n,
        hasFreePodcastUrlSet: o,
        hidePreviewUI: a,
        hideUfi: i,
        isPrivateFeed: r,
        isServingFreePodcastUrl: l,
        metricsPost: c,
        postId: u,
        postTitle: d,
        podcastDuration: p,
        pub: h,
        podcastUpload: m,
        section: f,
        showPaidLabel: _,
        podcastPreviewUpload: g,
        post: y,
        ufiComponent: C,
        editComponent: b,
        paywallComponent: P,
        variant: N,
        user: T,
        onFinishAudio: R
    }) => {
        var j, te;
        const {
            isMobile: $
        } = fe(), {
            iString: A
        } = D(), U = f ? (j = f.podcastPalette) != null ? j : null : (te = h.podcastPalette) != null ? te : null, {
            title: ie,
            backgroundUrl: G,
            artUrl: H
        } = Ls({
            pub: h,
            podcastUpload: m,
            section: f,
            thumbnailInfo: m != null && m.full_podcast_info && u ? {
                post_id: u,
                media_upload_id: m.full_podcast_info.media_upload_id,
                thumbnail_id: m.full_podcast_info.thumbnail_id
            } : null
        }), Z = lc[N], L = $ || N === "notes-embed", K = !!P, ce = H === G, ee = !!b, ye = (m == null ? void 0 : m.is_free_preview) || g;
        return e(Ms, {
            ref: s,
            duration: p,
            metricsPost: c,
            src: t,
            preventSnappingToCurrentTime: !0,
            pub: h,
            updateOnEveryFrame: p < 5 * 60,
            onFinishAudio: R,
            render: ({
                currentTime: Ee,
                dragTime: Re,
                isPlaying: Oe,
                playbackRate: Nt,
                progress: $e,
                progressBarRef: Tt,
                progressBarOnMouseDown: xt,
                remainingTime: tt,
                setPlaybackRate: Et,
                skipBack: Mt,
                skipForward: nt,
                togglePlayback: Ve
            }) => {
                var F;
                return e(Fe, {
                    position: "relative",
                    style: {
                        minHeight: $ ? Math.min(200, Z) : Z
                    }
                }, e(oc, {
                    backgroundUrl: G,
                    blurAmount: N === "notes-embed" ? 40 : 120,
                    isBlurred: ce,
                    palette: U
                }), e(v, {
                    position: "absolute",
                    inset: 0,
                    justifyContent: L ? "space-between" : void 0
                }, e(S, {
                    alignItems: "stretch",
                    flex: L ? void 0 : "grow",
                    justifyContent: "space-between"
                }, (!L || !K) && e(Fe, {
                    padding: L || N === "notes-full" ? 16 : 24,
                    paddingBottom: N === "notes-embed" ? 0 : void 0,
                    overflow: "hidden"
                }, e(Al, {
                    isDisabled: K,
                    pub: h,
                    section: f,
                    post: y,
                    postTitle: d,
                    showUpgradeButton: l,
                    showTitle: ie,
                    variant: N === "notes-embed" ? "notes-embed" : $ || N === "notes-full" ? "mini" : "regular"
                })), !L && !K && !i && C && e(S, {
                    alignItems: "center",
                    paddingX: 24
                }, C), b != null ? b : null), !K && N !== "notes-embed" && e(v, {
                    paddingX: 16,
                    position: L ? void 0 : "absolute",
                    className: x({
                        [On.controlsCentered]: !L
                    })
                }, e(Jl, {
                    audioFileUrl: t,
                    feedUrl: n,
                    isPlaying: Oe,
                    isPrivateFeed: !!r,
                    playbackRate: Nt,
                    sectionId: f ? f.id : null,
                    user: T,
                    onChangePlaybackRate: Et,
                    onSkipBack: Mt,
                    onSkipForward: nt,
                    onTogglePlayback: Ve
                })), (!L || !K) && e(S, {
                    className: x(On.track),
                    alignItems: "center",
                    gap: 16,
                    opacity: K ? 20 : void 0,
                    padding: L || N === "notes-full" ? 16 : 24,
                    paddingTop: N === "notes-embed" ? 8 : void 0,
                    pointerEvents: K ? "none" : void 0,
                    onClick: W => {
                        _ || (W.stopPropagation(), W.preventDefault())
                    }
                }, ye && ee && g && e(Be, null, qa((F = g.duration) != null ? F : 0)), ye && !a && !ee && e(Be, null, A("Preview")), _ && e(Be, null, A("Paid")), o && e(Be, null, A("Free url set")), e(ec, {
                    containerRef: Tt,
                    currentTime: Ee,
                    dragTime: Re,
                    hideStartingTimestamp: $,
                    progress: $e,
                    remainingTime: tt,
                    onMouseDown: xt
                }), N === "notes-embed" && e(cs, {
                    isPlaying: Oe,
                    size: 40,
                    onTogglePlayback: Ve
                }))), P)
            }
        })
    };

function cc({
    text: t,
    icon: s,
    hotkeys: n
}) {
    const o = Pt(),
        {
            layerProps: a,
            triggerProps: i,
            transitionProps: r,
            renderLayer: l,
            shouldShow: c
        } = Ba();
    return {
        triggerProps: o || !t ? null : i,
        layer: c && l(e(Da, {
            transitionProps: r,
            tooltipProps: a,
            text: t,
            icon: s,
            hotkeys: n
        }))
    }
}
const uc = Po((l, r) => {
        var c = l,
            {
                className: t,
                active: s,
                disabled: n,
                permalink: o,
                tooltip: a
            } = c,
            i = pe(c, ["className", "active", "disabled", "permalink", "tooltip"]);
        const u = cc({
            text: a
        });
        return e(Y, I({
            flex: "grow",
            justifyContent: o ? "center" : "start",
            alignItems: "center"
        }, u.triggerProps), u.layer, e(es, I({
            className: x(M.actionButton, t, s && M.active, n && M.disabled, o && M.permalink),
            resetCss: !0,
            ref: r,
            disabled: n
        }, i)))
    }),
    dc = wt(void 0);

function pc() {
    return we(dc)
}
const mc = ["post_like", "post_restack", "comment_like"];

function B1({
    user: t,
    post: s,
    comment: n,
    onClick: o,
    utm_content: a,
    publication: i,
    item: r
}) {
    var p;
    const l = (n == null ? void 0 : n.date) || (s == null ? void 0 : s.post_date),
        {
            iString: c
        } = D(),
        d = !!Qe().getConfigFor("feed_item_source_debug_mode") && r && "trackingParameters" in r;
    return e(Xa, null, e(Y, {
        gap: 8,
        alignItems: "center",
        flex: "grow"
    }, e(w, {
        as: "span",
        weight: "medium"
    }, e(Cs, {
        user: t,
        onClick: o,
        utm_source: Je.substackFeedItem,
        utm_content: a
    }, t.name)), e(Za, {
        className: M.userBadge,
        tier: t.bestseller_tier,
        userId: t.id,
        tooltipOnHover: !0,
        size: "sm"
    }), l && e(gc, {
        timestamp: l,
        comment: n
    }), d && ("item_source" in r.trackingParameters ? e("span", null, r.trackingParameters.item_source === "model" ? e("div", {
        className: x(M.greenDot, M.dot),
        title: c("Model")
    }) : (p = r.trackingParameters.item_source) != null && p.includes("db") ? e("div", {
        className: x(M.purpleDot, M.dot),
        title: c("DB")
    }) : e("div", {
        className: x(M.dot, M.silverDot),
        title: c("Other")
    })) : e("span", null, e("div", {
        className: x(M.dot, M.yellowDot),
        title: c("no source info")
    })))), e(Y, {
        maxHeight: 20,
        gap: 12,
        alignItems: "center"
    }, e(fc, {
        publication: i != null ? i : void 0,
        post: s != null ? s : void 0,
        comment: n,
        item: r
    })))
}
const hc = new Intl.DateTimeFormat(void 0, {
    dateStyle: "medium",
    timeStyle: "short"
});

function gc({
    timestamp: t,
    comment: s,
    post: n,
    publication: o
}) {
    return e(bs, {
        href: s ? vt(s, {
            noBase: kt
        }) : n ? Xn(o, n) : void 0,
        title: hc.format(Jn(t).toDate()),
        ellipsis: !1,
        color: "secondary"
    }, e(Ja, {
        timestamp: t
    }))
}

function fc({
    publication: t,
    post: s,
    comment: n,
    item: o,
    permalink: a
}) {
    var ce, ee, ye;
    const i = sn(),
        r = aa(),
        l = pc(),
        c = is(),
        u = ia(),
        {
            iString: d
        } = D(),
        [p, h] = k(!1),
        m = xa(),
        f = Ci(),
        {
            getConfigFor: _
        } = Qe(),
        {
            modal: g,
            open: y
        } = ra({
            comment: n || void 0
        }),
        C = (ee = (ce = n == null ? void 0 : n.ancestor_path) == null ? void 0 : ce.split(".").filter(Boolean).map(Number).map(j => u.comments.get(j))) != null ? ee : [],
        b = n ? Io(n) : t && s ? Zn(t, s) : {
            id: 0,
            name: "void"
        },
        P = Sa(b, {
            surface: r
        }),
        N = Pa(b, r),
        T = Ea({
            pathname: `/api/v1/comment/${(ye=n==null?void 0:n.id)!=null?ye:0}`,
            method: "DELETE",
            json: {
                publication_id: t == null ? void 0 : t.id
            }
        }),
        R = () => se(this, null, function*() {
            if (!n || (h(!1), T.isLoading)) return;
            const j = yield T.refetch();
            if (j instanceof Error) {
                alert(bt(j));
                return
            }
            i.popToast(te => e(De, O(I({}, te), {
                text: "Note deleted",
                Icon: In
            }))), c({
                type: "comment_delete",
                payload: {
                    publication: t,
                    post: s,
                    comment: n
                }
            })
        }),
        $ = os(),
        A = () => se(this, null, function*() {
            n && $.open({
                editComment: n,
                tabId: l
            })
        }),
        U = () => {
            const j = n ? vt(n) : s ? Xn(t, s) : null;
            Ze(j), i.popToast(te => e(De, O(I({}, te), {
                text: "Link copied",
                Icon: gt
            })))
        },
        ie = () => {
            o && da(o, r, "menu", {
                tabId: l
            })
        },
        G = () => {
            i.popToast(j => e(De, O(I({}, j), {
                text: "Downloading image...",
                Icon: Ye
            })))
        },
        H = !!s && o && "context" in o && mc.includes(o.context.type),
        Z = [e(X, {
            icon: e(gt, null),
            onClick: U
        }, "Copy Link"), !n && s && e(yc, {
            post: s
        }), _("embeds_enabled") && e(X, {
            icon: e(la, null),
            onClick: () => {
                y()
            }
        }, d("Embed note")), ...N, n ? e(X, {
            icon: e(Ye, null),
            onClick: G,
            href: No(n.id),
            target: "_blank",
            download: !0
        }, d("Save as image")) : null, To(m, n) && e(X, {
            icon: e(wa, null),
            onClick: A
        }, "Edit")].filter(Boolean),
        L = [...P, n && xo(m, n) ? e(X, {
            icon: e(Wt, null),
            priority: "destructive",
            onClick: () => {
                const j = !!n.publication_id;
                f({
                    pub: t,
                    canReportToAdmins: j,
                    onSubmit: Oe => se(this, [Oe], function*({
                        reportCategory: te,
                        details: Ee,
                        reportedToSubstack: Re
                    }) {
                        yield wn(`/api/v1/comment/${n.id}/report`, {
                            method: "POST",
                            json: I({
                                details: Ee,
                                reportCategory: te,
                                reportedToSubstack: Re
                            }, j ? {
                                publication_id: n.publication_id
                            } : {})
                        })
                    })
                })
            }
        }, "Report") : H ? e(X, {
            icon: e(Wt, null),
            priority: "destructive",
            onClick: () => {
                f({
                    pub: t,
                    canReportToAdmins: !1,
                    onSubmit: Ee => se(this, [Ee], function*({
                        reportCategory: j,
                        details: te
                    }) {
                        yield wn(`/api/v1/publications/${t==null?void 0:t.id}/posts/${s.id}/report`, {
                            method: "POST",
                            json: {
                                details: te,
                                reportCategory: j
                            }
                        })
                    })
                })
            }
        }, "Report") : null, Eo(m, n, {
            pub: t,
            post: s,
            parentComments: C
        }) && e(X, {
            icon: e(In, null),
            priority: "destructive",
            onClick: () => h(!0)
        }, "Delete")].filter(Boolean),
        K = [Z.length !== 0 && Z, L.length !== 0 && e(Ra, null, L)];
    return K.length === 0 ? null : e(z, null, _("embeds_enabled") && g, e(ms, {
        trigger: e(uc, {
            "aria-label": "share",
            permalink: a,
            className: M.more
        }, e(ps, {
            strokeWidth: 2.5
        })),
        useMobileBottomSheet: !0,
        mobileBottomSheetTitle: "More",
        maxHeight: 350,
        onOpen: ie
    }, K), e(va, {
        isOpen: p,
        title: "Delete note?",
        body: "This will permanently remove this note from Substack. It cannot be undone.",
        customPrimaryButton: e(de, {
            priority: "destructive",
            onClick: R
        }, "Delete"),
        secondaryButton: e(de, {
            priority: "secondary",
            onClick: () => h(!1)
        }, "Cancel"),
        onClose: () => h(!1)
    }))
}

function yc(n) {
    var o = n,
        {
            post: t
        } = o,
        s = pe(o, ["post"]);
    const a = $s(t);
    return e(X, I({
        icon: t.is_saved ? e(ca, null) : e(rs, null),
        onClick: a
    }, s), t.is_saved ? "Unsave" : "Save")
}

function $s(t) {
    const s = is(),
        n = ua();
    return () => {
        const a = t.id,
            i = !t.is_saved;
        pa(a, i, {
            surface: "reader"
        }), n(i), s({
            type: "post_save",
            payload: {
                postId: a,
                isSaved: i
            }
        })
    }
}

function _c({
    post: t,
    publication: s,
    readOnly: n,
    onClick: o,
    onSavePostClick: a
}) {
    var _, g;
    const i = Pt(),
        r = $s(t),
        {
            isHidden: l,
            onShow: c
        } = Zt(!!(s.explicit || t.explicit || t.cover_image_is_explicit || (_ = t.videoUpload) != null && _.explicit)),
        {
            isPaid: u,
            isFreeSubscribed: d
        } = Ia(s.id),
        p = t.cover_image,
        h = t.videoUpload,
        m = t.podcastUpload && !t.videoUpload;
    let f;
    if (h && t.videoUpload) f = e(kl, {
        disableAutoPlay: l,
        isFreeSubscribed: d,
        isSubscribed: u,
        mediaUpload: t.videoUpload,
        post: t,
        pub: s,
        startMuted: !0,
        videoType: "feed"
    });
    else if (m) {
        const y = t.section_id && s.sections && (g = s.sections.find(C => C.id === t.section_id)) != null ? g : null;
        f = e(rc, {
            isFreeSubscribed: d,
            isSubscribed: u,
            post: t,
            pub: s,
            section: y,
            variant: "notes-embed"
        })
    } else t.cover_image && (f = e(Fe, {
        position: "relative"
    }, e(Ro, {
        className: x(M.save),
        size: "sm",
        rounded: !0,
        onClick: y => {
            y.preventDefault(), y.stopPropagation(), r(), a && a(t.is_saved ? "unsave" : "save")
        }
    }, e(rs, {
        size: 16,
        fill: t.is_saved ? "white" : "none"
    })), e(en, {
        className: M.postImage,
        imageProps: {
            smartCrop: !0,
            aspect: i ? "3:2" : "2:1"
        },
        src: t.cover_image,
        maxWidth: 500 * 2
    })));
    return e(St, null, e(v, {
        as: n ? "div" : "a",
        className: M.post,
        position: "relative",
        bg: "primary",
        border: "detail",
        radius: "md",
        onClick: y => {
            o && o(), !n && kt && _s(y, Pe(s, t, {
                noBase: !0,
                feedViewer: !0
            }))
        },
        href: n ? void 0 : Pe(s, t, {
            feedViewer: !1
        }),
        minWidth: 0,
        target: qe() ? "_blank" : void 0
    }, f, !m && e(v, {
        gap: 4,
        padding: 12,
        borderTop: p ? "detail" : "transparent"
    }, e(Y, {
        gap: 8,
        paddingBottom: 4,
        alignItems: "center",
        minWidth: 0
    }, e(Ma, {
        pub: s,
        size: 20,
        radius: "xs"
    }), e(w.Meta, {
        ellipsis: !0
    }, n ? s.name : qe() ? e(Na, {
        target: "_blank",
        href: vn(s)
    }, s.name) : e(Ta, {
        href: vn(s)
    }, s.name))), e(w.B3, {
        clamp: i ? 1 : 2,
        color: "primary",
        weight: "medium"
    }, t.title), e(w.B4, {
        clamp: 2,
        color: "secondary"
    }, t.description)), l && e(ts, {
        onShow: c,
        description: "This post was hidden by your settings."
    })))
}
const $n = "ListFormat" in Intl && new Intl.ListFormat(void 0, {
    style: "short",
    type: "conjunction"
});

function D1(t) {
    return $n ? $n.format(t) : t.join(", ")
}
const Vn = "ListFormat" in Intl && new Intl.ListFormat(void 0, {
    style: "long",
    type: "conjunction"
});

function Cc(t) {
    return Vn ? Vn.format(t) : t.join(", ")
}
const Hn = "notes_quote_attachment";

function bc({
    attachment: t,
    readOnly: s,
    onClick: n
}) {
    var f, _;
    const o = Pt(),
        {
            postSelection: a,
            post: i,
            publication: r,
            author: l
        } = t,
        c = l != null ? l : Zn(r, i),
        u = (_ = (f = i.publishedBylines) == null ? void 0 : f.map(g => g.name)) != null ? _ : [],
        d = u.length > 1 ? Cc(u) : null,
        p = I({}, c);
    d && (p.name = d);
    const h = ma({
            publication: r,
            subscriptionSource: Hn,
            publicationName: r.name
        }),
        m = e(ds, {
            size: 36,
            user: c
        });
    return e(v, {
        className: M.quote,
        as: s ? "div" : "a",
        border: "detail",
        radius: "md",
        onClick: g => {
            n && n(), !o && kt && !s && _s(g, Pe(r, i, {
                noBase: !o,
                feedViewer: !o,
                urlParams: {
                    selection: a.id
                }
            }))
        },
        href: s ? void 0 : Pe(r, i, {
            feedViewer: !1,
            urlParams: {
                selection: a.id
            }
        })
    }, e(v, {
        padding: {
            mobile: 12,
            desktop: 16
        },
        borderBottom: "detail"
    }, e(w, {
        font: "serif",
        className: x(M.quoteText, o && M.mobile)
    }, "“", wc(a.text), "”")), e(Y, {
        className: M.quoteBottom,
        alignItems: "center",
        paddingX: o ? 12 : 16,
        paddingY: o ? 8 : 12,
        gap: 12
    }, e(Y, {
        gap: 12,
        flex: "grow",
        alignItems: "center",
        minWidth: 0
    }, s ? m : e(us, {
        subject: c,
        dontStopPropagation: !0,
        utmSource: "feed"
    }, m), e(v, {
        minWidth: 0,
        flex: "grow"
    }, e(w.B4, {
        weight: "medium",
        ellipsis: !0
    }, s ? c.name : e(Ga, {
        user: p,
        ellipsis: !0,
        utm_source: Hn
    })), e(Y, {
        gap: 6,
        minWidth: 0
    }, e(w.B4, {
        color: "secondary",
        ellipsis: !0
    }, i.title), h.showCta && e(z, null, e(w.B4, {
        color: "secondary",
        ellipsis: !0
    }, "∙"), e(w.B4, {
        color: h.isSubscribed ? "secondary" : "substack"
    }, e(bs, {
        href: "javascript:void",
        onClick: s ? void 0 : h.isSubscribed ? h.unsubscribe : h.subscribe
    }, h.isSubscribed ? "Subscribed" : "Subscribe")))))), e(nn, {
        size: 24,
        color: "var(--color-secondary)"
    })))
}

function wc(t) {
    return t.replace(/[“]/g, "‘").replace(/[”]/g, "’").replace(/["]/g, "'")
}

function Vs(t, s, {
    nodeTypes: n
} = {}) {
    var a, i;
    if (!t || (n && !Array.isArray(n) && (n = [n]), t.type && (!n || n.includes(t.type) || n.includes(t.type.name)) && s(t) === !1)) return;
    const o = ((a = t.content) == null ? void 0 : a.length) > 0 ? t.content : ((i = t.content) == null ? void 0 : i.childCount) > 0 ? t.content.content : [];
    for (const r of o) Vs(r, s, {
        nodeTypes: n
    })
}
const Hs = ["listItem", "codeBlock", "heading", "paragraph"];

function zs(t) {
    var n, o;
    let s = 0;
    if (t)
        if (t.content && t.content.length > 0)
            for (const a of t.content) s += zs(a);
        else s += (o = (n = t.text) == null ? void 0 : n.length) != null ? o : 0;
    return s
}

function vc(t) {
    let s = 0;
    return Vs(t, n => {
        Hs.includes(n.type) && (n.type === "codeBlock" && n.content ? n.content.forEach(o => {
            var a, i;
            o.type === "text" && (s += ((i = ((a = o.text) != null ? a : "").match(/\n/g)) != null ? i : []).length + 1)
        }) : s++)
    }), s
}

function js(t, {
    limit: s = 420
} = {}) {
    var i, r, l, c;
    let n = null,
        o = 0,
        a = !1;
    if (t)
        if (s <= 0) a = !0;
        else if (t.content && t.content.length > 0) {
        n = O(I({}, t), {
            content: []
        });
        for (const u of t.content) {
            const d = js(u, {
                limit: s - o
            });
            if (d.doc) {
                if ((i = n.content) == null || i.push(d.doc), o += d.length, d.isTruncated) {
                    a = !0;
                    break
                }
            } else {
                a = !0;
                break
            }
        }
    } else n = O(I({}, t), {
        text: (r = Mo(t.text, s)) != null ? r : void 0
    }), o += (c = (l = n.text) == null ? void 0 : l.length) != null ? c : 0, t.text !== n.text && (a = !0);
    return {
        doc: n,
        length: o,
        isTruncated: a
    }
}

function Us(t, s) {
    var r;
    const n = [];
    let o = !1,
        a = 0;
    for (const l of (r = t.content) != null ? r : []) {
        if (l.type && Hs.includes(l.type)) {
            if (a++, a === s) {
                o = !0, n.push(l);
                break
            }
        } else if (l.content) {
            const c = Us(l, s - a);
            if (a += c.blockCount, c.isTruncated) {
                n.push(c.doc), o = !0;
                break
            }
        }
        n.push(l)
    }
    const i = O(I({}, t), {
        content: n
    });
    return t.text && (i.text = t.text.split(/\n/g).slice(0, s).join(`
`)), {
        doc: i,
        blockCount: a,
        isTruncated: o
    }
}
const kc = 300,
    Sc = 420,
    Pc = 9,
    Ic = 12;

function Nc(t, {
    charactersTruncateTo: s = kc,
    charactersTruncateIfOver: n = Sc,
    linesTruncateTo: o = Pc,
    linesTruncateIfOver: a = Ic
} = {}) {
    return zn(() => {
        var h;
        const i = (h = t == null ? void 0 : t.body_json) != null ? h : t != null && t.body ? Tc(t.body) : null,
            r = Ws(i),
            l = zs(r) > n,
            c = vc(r) > a;
        if (!r || !(l || c)) return {
            bodyJson: r,
            truncatedBodyJson: r,
            isTruncated: !1
        };
        let u = r,
            d = !1;
        if (l) {
            const m = js(u, {
                limit: s
            });
            u = m.doc, d = m.isTruncated
        }
        let p = !1;
        if (c && u) {
            const m = Us(u, o);
            u = m.doc, p = m.isTruncated
        }
        return {
            bodyJson: r,
            truncatedBodyJson: u,
            isTruncated: d || p
        }
    }, [t == null ? void 0 : t.body, t == null ? void 0 : t.body_json])
}

function Tc(t) {
    return {
        type: "doc",
        attrs: {
            schemaVersion: "v1"
        },
        content: t.split(`

`).map(s => ({
            type: "paragraph",
            content: [{
                type: "text",
                text: s
            }]
        }))
    }
}

function Ws(t) {
    var n, o;
    let s = null;
    if (t)
        if (s = O(I({}, t), {
                content: void 0,
                text: void 0
            }), t != null && t.content) {
            s.content = [];
            for (const a of t.content) {
                const i = Ws(a);
                i && s.content.push(i)
            }
        } else {
            const a = (n = t.marks) == null ? void 0 : n.find(i => i.type === "link");
            (o = a == null ? void 0 : a.attrs) != null && o.href ? s.text = Oo(a.attrs.href) : s.text = t.text
        }
    return s
}

function xc({
    attachments: t,
    readOnly: s,
    isRestack: n,
    isDm: o,
    onAttachmentClick: a,
    onSavePostClick: i,
    utm_content: r
}) {
    if (t.length === 0) return null;
    const l = t.filter(u => u.type === "image"),
        c = t.filter(u => u.type !== "image");
    return e(z, null, l.length > 0 && e(ns, {
        readOnly: s || qe(),
        isRestack: n,
        isDm: o,
        assets: l.map(u => ({
            src: u.imageUrl,
            explicit: u.explicit
        }))
    }), c.map(u => e(Ks, {
        attachment: u,
        readOnly: s,
        isRestack: n,
        isDm: o,
        onAttachmentClick: a,
        onSavePostClick: i,
        utm_content: r
    })))
}

function Ks({
    attachment: t,
    readOnly: s,
    isRestack: n,
    isDm: o,
    onAttachmentClick: a,
    onSavePostClick: i,
    utm_content: r
}) {
    var l;
    return fe(), Si(t) ? e(Mc, {
        attachment: t,
        readOnly: s,
        isRestack: n,
        onAttachmentClick: a,
        utm_content: r
    }) : t.type === "image" ? e(ns, {
        readOnly: s,
        isRestack: n,
        isDm: o,
        assets: [t.imageUrl],
        onClick: a
    }) : t.type === "link" ? e(qs, I({
        readOnly: s,
        onClick: a,
        isExplicit: t.explicit
    }, t.linkMetadata)) : t.type === "comment" ? e(Lc, {
        readOnly: s,
        publication: (l = t.publication) != null ? l : void 0,
        comment: t.comment,
        onAttachmentClick: a,
        utm_content: r,
        isDm: o
    }) : t.type === "post" ? t.postSelection ? e(bc, {
        readOnly: s,
        attachment: t,
        onClick: a
    }) : e(_c, {
        readOnly: s,
        publication: t.publication,
        post: t.post,
        onClick: a,
        onSavePostClick: i
    }) : t.type === "publication" ? e(Dc, {
        readOnly: s,
        publication: t.publication,
        onClick: a
    }) : t.type === "video" ? e(ki, {
        key: t.mediaUpload.id,
        mediaUpload: t.mediaUpload,
        composing: !1
    }) : e(Ec, {
        attachment: t
    })
}

function Ec({}) {
    return e(Y, null)
}

function Mc({
    attachment: t,
    readOnly: s,
    isRestack: n,
    onAttachmentClick: o,
    utm_content: a
}) {
    const i = [je.YouBlocked, je.YouMuted].includes(t.reason) && !!t.hidden_attachment,
        [r, l] = k(!1);
    return r && t.hidden_attachment ? e(Ks, {
        attachment: t.hidden_attachment,
        readOnly: s,
        isRestack: n,
        onAttachmentClick: o,
        utm_content: a
    }) : e(St, null, e(Y, {
        bg: "primary",
        border: "detail",
        justifyContent: i ? "space-between" : "center",
        alignItems: "center",
        radius: "md",
        padding: 16
    }, e(w.B4, {
        color: "secondary",
        align: "center"
    }, t.reason === je.YouBlocked ? "This note is from someone you blocked." : t.reason === je.YouMuted ? "This note is from someone you've hidden." : "This attachment is not available."), i && e(es, {
        resetCss: !0,
        onClick: () => {
            var c;
            ha(t.id, t.reason, {
                noteId: (c = t.hidden_attachment) == null ? void 0 : c.id
            }), l(!0)
        }
    }, e(w, {
        weight: "bold",
        size: 14,
        color: "secondary"
    }, "Show"))))
}

function Lc({
    comment: t,
    publication: s,
    readOnly: n,
    onAttachmentClick: o,
    utm_content: a,
    isDm: i
}) {
    return e(St, null, e(v, {
        className: M.post,
        as: n ? "div" : "a",
        bg: "primary",
        border: "detail",
        radius: "md",
        href: n ? void 0 : vt(t),
        onClick: () => o == null ? void 0 : o({
            commentId: t.id
        }),
        padding: 12,
        gap: 8,
        target: qe() ? "_blank" : void 0
    }, e(Bc, {
        comment: t,
        publication: s,
        readOnly: n,
        onAttachmentClick: o,
        utm_content: a,
        isDm: i
    })))
}

function Bc({
    comment: t,
    publication: s,
    readOnly: n,
    onAttachmentClick: o,
    utm_content: a,
    isDm: i
}) {
    var c, u, d, p, h;
    const {
        truncatedBodyJson: r
    } = Nc(t, {
        charactersTruncateTo: 280,
        charactersTruncateIfOver: 280
    }), l = (u = t.user) != null ? u : t.user_id ? {
        id: t.user_id,
        name: (c = t.name) != null ? c : ""
    } : null;
    return e(z, null, l && e(Y, {
        gap: 8,
        alignItems: "center"
    }, e(Ho, {
        href: Lo(l, {
            noBase: kt,
            utm_content: Bo.substackFeedItem,
            utm_source: a != null ? a : void 0
        }),
        target: qe() ? "_blank" : void 0,
        showBack: !0
    }, e(ds, {
        size: 20,
        user: l
    })), e(Y, {
        alignItems: "center",
        gap: 8
    }, e(w.B4, {
        weight: "medium"
    }, n ? l.name : e(Cs, {
        user: l,
        utm_source: Je.substackFeedItem,
        utm_content: a
    }, l.name)), e(Fc, {
        comment: t
    }))), t.body && e(w.B4, {
        className: M.feedCommentBodyInner
    }, t.hidden ? s && e("i", null, "This comment is only visible to paid subscribers of", " ", s.name) : r && e($o, {
        content: r
    })), ((p = (d = t.attachments) == null ? void 0 : d.length) != null ? p : 0) > 0 && e(xc, {
        isRestack: !0,
        isDm: i,
        attachments: (h = t.attachments) != null ? h : [],
        onAttachmentClick: o,
        utm_content: a
    }))
}

function Dc({
    publication: t,
    readOnly: s,
    onClick: n
}) {
    var o;
    return e(qs, {
        image: (o = t.logo_url) != null ? o : void 0,
        title: t.name,
        description: t.hero_text,
        url: t.base_url,
        onClick: n,
        host: t.base_url.replace(/^https?:\/\//, ""),
        readOnly: s,
        isExplicit: t.explicit
    })
}

function qs({
    image: t,
    title: s,
    description: n,
    url: o,
    host: a,
    readOnly: i,
    isExplicit: r,
    onClick: l
}) {
    const c = Pt(),
        {
            isHidden: u,
            onShow: d
        } = Zt(!!r);
    return e(St, null, e(Y, {
        className: M.post,
        position: "relative",
        padding: 12,
        gap: 12,
        as: i ? "div" : "a",
        bg: "primary",
        border: "detail",
        radius: "md",
        href: i ? void 0 : o,
        onClick: l,
        rel: "nofollow noopener ugc",
        target: "_blank"
    }, e(v, {
        gap: 2,
        flex: "grow",
        minWidth: 0
    }, e(w.Meta, {
        color: "secondary",
        ellipsis: !0
    }, a), c ? e(w.B4, {
        clamp: 1
    }, s) : e(w.B3, {
        clamp: 2,
        weight: "medium"
    }, s), n && e(w.B4, {
        as: "p",
        color: "secondary",
        clamp: c ? 1 : 2
    }, n)), t ? e(en, {
        className: x(M.linkImage, c && M.mobile),
        src: t,
        maxWidth: 96 * 2,
        imageProps: {
            smartCrop: !0,
            aspect: "1:1"
        }
    }) : e(Y, {
        alignItems: "center",
        justifyContent: "center",
        radius: "md",
        className: x(M.linkImage, M.linkImagePlaceholder, c && M.mobile)
    }, e(ti, null)), u && e(Vo, {
        onShow: d
    })))
}

function Fc({
    post: t,
    comment: s
}) {
    return e(w.B4, {
        color: "secondary"
    }, Jn((s == null ? void 0 : s.date) || (t == null ? void 0 : t.post_date)).fromNowShort())
}

function F1(t) {
    var s;
    switch (t.type) {
        case "post":
            return t.postSelection ? Pe(t.publication, t.post, {
                urlParams: {
                    selection: t.postSelection.id
                }
            }) : t.post.canonical_url;
        case "comment":
            return vt(t.comment);
        case "publication":
            return t.publication.base_url;
        case "link":
            return (s = t.linkMetadata.url) != null ? s : null;
        default:
            return null
    }
}
export {
    Cl as $, Ms as A, v1 as B, Qa as C, xl as D, Xi as E, xc as F, xe as G, Ls as H, ti as I, Bl as J, Ps as K, Fn as L, Pn as M, ki as N, I1 as O, oi as P, M1 as Q, ii as R, Rl as S, In as T, Bs as U, Xr as V, Ti as W, ft as X, Be as Y, Ii as Z, Ni as _, Wt as a, F1 as a0, Kt as a1, qt as a2, Ci as a3, E1 as a4, Yi as a5, vs as a6, L1 as a7, Bc as a8, rc as a9, kl as aa, Ds as b, N1 as c, yt as d, Nc as e, Vs as f, T1 as g, Is as h, yi as i, dc as j, _c as k, uc as l, fc as m, gc as n, Vn as o, b1 as p, w1 as q, It as r, $s as s, D1 as t, P1 as u, B1 as v, pc as w, S1 as x, x1 as y, k1 as z
};
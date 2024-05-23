var Ud = Object.defineProperty,
    Fd = Object.defineProperties;
var jd = Object.getOwnPropertyDescriptors;
var bs = Object.getOwnPropertySymbols;
var Qi = Object.prototype.hasOwnProperty,
    Zi = Object.prototype.propertyIsEnumerable;
var zr = (n, t, e) => t in n ? Ud(n, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : n[t] = e,
    k = (n, t) => {
        for (var e in t || (t = {})) Qi.call(t, e) && zr(n, e, t[e]);
        if (bs)
            for (var e of bs(t)) Zi.call(t, e) && zr(n, e, t[e]);
        return n
    },
    V = (n, t) => Fd(n, jd(t));
var te = (n, t) => {
    var e = {};
    for (var s in n) Qi.call(n, s) && t.indexOf(s) < 0 && (e[s] = n[s]);
    if (n != null && bs)
        for (var s of bs(n)) t.indexOf(s) < 0 && Zi.call(n, s) && (e[s] = n[s]);
    return e
};
var at = (n, t, e) => (zr(n, typeof t != "symbol" ? t + "" : t, e), e);
var K = (n, t, e) => new Promise((s, o) => {
    var i = l => {
            try {
                c(e.next(l))
            } catch (u) {
                o(u)
            }
        },
        a = l => {
            try {
                c(e.throw(l))
            } catch (u) {
                o(u)
            }
        },
        c = l => l.done ? s(l.value) : Promise.resolve(l.value).then(i, a);
    c((e = e.apply(n, t)).next())
});
import {
    B as Ke,
    a as Hd,
    u as hr,
    T as ce,
    C as wc,
    H as Vd,
    w as Jo
} from "./HoverCard-cbdee1d2.js";
import {
    u as ot,
    a as X,
    O as ue,
    T as I,
    b as gt,
    j as pr,
    S as Ht,
    B as Gt,
    F as ht,
    c as $,
    h as hn,
    f as de,
    E as Yo,
    k as vc,
    P as Sc,
    I as zd,
    U as Cc,
    i as Wn,
    w as rs,
    n as Ko,
    d as Wd
} from "./FlexBox-1a755411.js";
import {
    y as r,
    D as Oe,
    g0 as Gd,
    U as bt,
    bC as fr,
    hz as Jd,
    X as xc,
    gL as Nc,
    o as At,
    f2 as Ws,
    cS as Yd,
    x as _t,
    hA as Xo,
    fp as Kd,
    bL as kc,
    a3 as Se,
    du as Xd,
    h as D,
    p as lt,
    hB as ta,
    hC as Gs,
    hD as Qd,
    hE as Zd,
    hF as th,
    hG as eh,
    ga as nh,
    aa as mr,
    bq as Dt,
    i as it,
    hH as sh,
    d$ as rh,
    eS as Q,
    by as Ec,
    bh as Tc,
    fw as Pc,
    hI as oh,
    cT as ih,
    t as W,
    E as G,
    al as Me,
    hJ as ah,
    ao as me,
    cZ as Tn,
    W as ch,
    f0 as Ac,
    cy as os,
    b8 as Ft,
    r as Xe,
    C as Ae,
    aj as Et,
    bg as lh,
    ea,
    hK as uh,
    fa as Lc,
    aD as Mt,
    bJ as Ic,
    k as he,
    d as mn,
    ag as dh,
    A as Ue,
    bn as hh,
    a7 as oe,
    g9 as Nt,
    hL as ph,
    bI as Oc,
    aH as gr,
    bo as fh,
    u as Ce,
    q as br,
    dZ as ho,
    d_ as mh,
    b as Mc,
    gG as gh,
    aV as ae,
    hM as na,
    g1 as bh,
    g2 as _h,
    co as sa,
    bB as yh,
    a4 as wh,
    dJ as ye,
    fY as Js,
    hN as vh,
    hy as Dc,
    b3 as Rc,
    a6 as $c,
    cR as qc,
    ap as Gn,
    hO as Sh,
    hg as yn,
    s as Je,
    hP as Ch,
    hi as xh,
    b2 as Qo,
    M as Zo,
    dD as Bc,
    fU as Wr,
    aI as Nh,
    hQ as _r,
    c5 as Uc,
    hR as kh,
    hS as Eh,
    ck as Th,
    cl as Ph,
    b$ as Gr,
    cj as Jr,
    fT as pn,
    cq as Ah,
    hk as Pe,
    gQ as yr,
    fl as Fc,
    fd as ti,
    dO as Jn,
    br as wr,
    hT as jc,
    eR as Lh,
    be as Ih,
    H as Oh,
    hU as Ys,
    hV as Mh,
    gS as ra,
    bD as Dh,
    hW as Rh,
    ds as oa,
    hX as $h,
    g_ as qh,
    az as ia,
    a9 as Hc,
    a2 as Bh,
    hY as aa,
    hZ as Uh,
    h_ as Fh,
    fR as jh,
    fQ as Hh,
    h$ as Vh,
    bA as zh,
    aL as Vc,
    dl as Wh,
    d4 as Gh,
    i0 as Jh,
    R as Yh
} from "./tracking-376cff7a.js";
import {
    M as zc,
    r as dt,
    P as vr,
    i as pe,
    j as Kh,
    a as Wc,
    C as Xh
} from "./_baseEach-63ad03e0.js";
import {
    S as Qh,
    u as Zh
} from "./uniq-0ace9f40.js";
import {
    b1 as is,
    b2 as Gc,
    b3 as re,
    b4 as qe,
    b5 as tp,
    b6 as It,
    ah as ep,
    ag as np,
    b7 as Jc,
    Z as Pn,
    a1 as ei,
    aE as sp,
    b8 as rp,
    V as An,
    b9 as op,
    ba as ip,
    bb as ap,
    bc as Yc,
    l as cp,
    L as ni,
    bd as lp,
    h as si,
    r as up,
    y as dp,
    B as hp,
    I as pp,
    R as fp,
    S as ca,
    be as mp,
    bf as Kc,
    bg as Qe,
    X as gp,
    k as bp,
    a3 as _p,
    n as $s,
    bh as Xc,
    bi as yp,
    c as wp,
    p as vp,
    bj as la,
    aQ as Sp,
    j as Qc,
    aO as Cp,
    bk as ua,
    bl as xp,
    bm as Np,
    b0 as Zc,
    aY as po,
    bn as kp,
    bo as tl,
    bp as Ep,
    m as el,
    bq as da,
    br as Tp,
    bs as Pp,
    aS as Ap,
    bt as Lp,
    bu as Ip,
    bv as fo,
    bw as Op,
    Q as Mp,
    a4 as nl,
    bx as Dp,
    a$ as sl,
    aM as Rp
} from "./homepage_hooks-47e7a4e7.js";
import {
    u as wn,
    R as tn,
    a as Ln,
    g as $p,
    B as ie
} from "./user-e16f1619.js";
import {
    T as Ks
} from "./TextLink-9c0e1c8b.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    L as qp,
    u as Bp,
    T as rl,
    C as Up,
    t as Fp,
    r as jp,
    F as Hp
} from "./FollowPrompt-e47c3e0a.js";
import {
    r as Vp,
    u as In
} from "./useResponsive-08e338a7.js";
import {
    c as en,
    X as ri
} from "./x-fc38e969.js";
import {
    e as zp,
    F as Wp,
    a0 as Gp,
    a1 as Jp,
    a2 as Yp,
    A as oi,
    C as Kp,
    T as Xp,
    u as Qp,
    a as Zp,
    a3 as tf,
    a4 as ii,
    a5 as ef
} from "./Attachments-84a6967e.js";
import {
    P as $n,
    F as ai,
    a7 as nf,
    d as vn,
    e as sf,
    au as rf
} from "./ProfileHoverCard-c8bfb61a.js";
import {
    f as of
} from "./publication-1bbad178.js";
import {
    A as af,
    b as cf,
    a as lf,
    u as uf,
    U as df
} from "./CommunityPostView-c90ac03a.js";
import {
    D as Fe
} from "./Divider-0a4efe7e.js";
import {
    T as hf
} from "./TextInput-c03c69d6.js";
import {
    M as as,
    a as kt,
    S as pf
} from "./Menu-5342012d.js";
import {
    P as ol
} from "./plus-3216546d.js";
import {
    A as il
} from "./align-left-a2ee54ed.js";
import {
    D as ci
} from "./download-8a01f574.js";
import {
    S as ff
} from "./search-166a516b.js";
import {
    a as mf,
    b as gf,
    A as bf,
    c as _f,
    u as yf,
    C as wf
} from "./ShareAssetButtons-11c2be43.js";
import {
    C as vf
} from "./chevron-down-6d7770f2.js";
import {
    s as al,
    F as li,
    g as Sf,
    b as _s
} from "./free_email_form-1d3fc4be.js";
import {
    P as cs
} from "./modal-5dbf091c.js";
import {
    F as cl,
    u as ll,
    e as ul,
    j as ha,
    w as Cf
} from "./free_email_form.module-135823b4.js";
import "./profile-a781fd85.js";
import {
    u as xf
} from "./app_install_modal-64fe70fd.js";
import {
    A as ui
} from "./Avatar-723c95b0.js";
import {
    U as Nf
} from "./unlock-12d676d9.js";
import {
    S as kf,
    F as Sr,
    c as Ef
} from "./facepile-b2a8f169.js";
import {
    E as Tf
} from "./experimentsAndSiteConfigContext-a6aeed82.js";
import {
    UserBadge as Cr
} from "./UserBadge-a694a663.js";
import {
    p as Pf
} from "./partition-c66fa872.js";
import {
    B as Af,
    L as Lf,
    h as If,
    x as Of,
    i as Mf,
    S as xr,
    U as Df,
    e as Rf,
    w as mo,
    t as dl
} from "./share_dialog-b74d3337.js";
import {
    S as $f,
    m as qf,
    c as Bf,
    w as qs,
    g as Xs,
    x as Uf,
    y as Ff,
    z as jf,
    M as Hf,
    v as go,
    A as Vf,
    B as zf,
    N as Wf
} from "./NewsletterIcon-ea4c71c4.js";
import {
    a as Gf,
    M as Jf,
    P as Yf
} from "./Portal-f12cb990.js";
import {
    I as hl
} from "./info-e9da097c.js";
import {
    h as Yn,
    c as di,
    V as Kf,
    H as Xf
} from "./AlertDialog-d9b964a5.js";
import {
    T as Qf,
    d as Zf
} from "./textarea-b8862a3a.js";
import {
    A as pl,
    C as tm
} from "./_defineProperty-105d261c.js";
import {
    a as hi,
    D as em
} from "./_baseIteratee-fbbabc87.js";
import {
    T as nm
} from "./Textarea-ed5c1b37.js";
import {
    b as ls,
    a as Qs,
    M as Ze,
    c as sm
} from "./Modal-ab851ad1.js";
import "./Select-f97196dc.js";
import {
    A as fl,
    V as Ye
} from "./arrow-right-c1e00e5a.js";
import {
    M as ml
} from "./mention-8372bb04.js";
import {
    a as rm,
    S as om
} from "./ReaderReferralTiers-be527730.js";
import {
    i as im
} from "./isOnReader-b27f4ba9.js";
import {
    A as am
} from "./arrow-left-e952265a.js";
import {
    d as cm
} from "./debounce-f31b8252.js";
import {
    _ as jt
} from "./decodeHtmlEntitiesFast-d19e2d0c.js";
import {
    C as gl
} from "./chevron-right-925bdc12.js";
import {
    N as bl
} from "./NoteReplyIcon-3ff0a340.js";
import {
    C as lm
} from "./CommentBody-36a2d638.js";
import {
    b as um,
    M as dm,
    T as hm,
    C as pm
} from "./Unit-93a04fbc.js";
import {
    U as fm
} from "./UserBadgeIconOnly-381365d6.js";
import {
    f as _l
} from "./formatNumber-b899aca4.js";
import {
    ImageViewerModal as pi
} from "./ImageViewerModal-9148cb63.js";
import {
    V as mm,
    C as gm
} from "./VideoVerticalMenu-5e94a5f9.js";
import {
    M as bm
} from "./toInteger-b5ddb910.js";
import {
    u as fi
} from "./publication-6fec99b2.js";
import {
    b as _m,
    c as ym
} from "./chat-f6285661.js";
import {
    U as wm
} from "./UpgradeToDmModal-6dec1ea0.js";
import {
    R as pa
} from "./Recipe-39f1ef19.js";
import {
    u as vm
} from "./link_copy_toast-1ffe3674.js";
import {
    L as Zs
} from "./link-90872791.js";
import {
    M as Sm,
    a as Cm
} from "./MathJax-7a5e2dbd.js";
import {
    S as xm
} from "./Progress-629d3819.js";
import {
    C as Nm
} from "./CloseIcon-90eee5fe.js";
import {
    w as km
} from "./postPingbackTracker-c6b6d289.js";
import {
    b as Em
} from "./post_metadata-a1624a3e.js";
(function() {
    try {
        var n = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "2f2d6658-ae61-4d2e-b35f-e8f8a920ebd4", n._sentryDebugIdIdentifier = "sentry-dbid-2f2d6658-ae61-4d2e-b35f-e8f8a920ebd4")
    } catch (e) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tm = en("Calendar", [
    ["path", {
        d: "M8 2v4",
        key: "1cmpym"
    }],
    ["path", {
        d: "M16 2v4",
        key: "4m81vk"
    }],
    ["rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2",
        key: "1hopcy"
    }],
    ["path", {
        d: "M3 10h18",
        key: "8toen8"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pm = en("Clapperboard", [
    ["path", {
        d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",
        key: "1tn4o7"
    }],
    ["path", {
        d: "m6.2 5.3 3.1 3.9",
        key: "iuk76l"
    }],
    ["path", {
        d: "m12.4 3.4 3.1 4",
        key: "6hsd6n"
    }],
    ["path", {
        d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",
        key: "ltgou9"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Am = en("Gift", [
    ["rect", {
        x: "3",
        y: "8",
        width: "18",
        height: "4",
        rx: "1",
        key: "bkv52"
    }],
    ["path", {
        d: "M12 8v13",
        key: "1c76mn"
    }],
    ["path", {
        d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
        key: "6wjy6b"
    }],
    ["path", {
        d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
        key: "1ihvrl"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lm = en("PauseCircle", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["line", {
        x1: "10",
        x2: "10",
        y1: "15",
        y2: "9",
        key: "c1nkhi"
    }],
    ["line", {
        x1: "14",
        x2: "14",
        y1: "15",
        y2: "9",
        key: "h65svq"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Im = en("Pencil", [
    ["path", {
        d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",
        key: "5qss01"
    }],
    ["path", {
        d: "m15 5 4 4",
        key: "1mk7zo"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Om = en("Trash", [
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
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mm = en("UserPlus", [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }],
        ["line", {
            x1: "19",
            x2: "19",
            y1: "8",
            y2: "14",
            key: "1bvyxn"
        }],
        ["line", {
            x1: "22",
            x2: "16",
            y1: "11",
            y2: "11",
            key: "1shjgl"
        }]
    ]),
    Dm = '!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();',
    Rm = "_webContainer_13la3_1",
    $m = "_container_13la3_16",
    qm = "_emailWrapper_13la3_29",
    Bm = "_text_13la3_34",
    Um = "_title_13la3_37",
    Fm = "_button_13la3_42",
    ln = {
        webContainer: Rm,
        container: $m,
        emailWrapper: qm,
        text: Bm,
        title: Um,
        button: Fm
    };

function jm({
    pub: n,
    subdomain: t
}) {
    const {
        iString: e
    } = ot();
    return r(X, {
        className: ln.webContainer,
        alignItems: "center",
        border: "detail-themed",
        radius: "md",
        padding: 20,
        gap: 16,
        as: "a",
        href: bo(t),
        target: "_blank",
        "data-component-name": "CommunityChatEmbed"
    }, r(ui, {
        size: 64,
        imageUrl: Oe(n.author_photo_url),
        border: !0
    }), r(X, {
        gap: 4,
        alignItems: "center"
    }, r(I.H3, {
        translated: !0,
        as: "div",
        color: "pub-primary-text"
    }, "Join ", I18N.p(n.author_name), "’s subscriber chat"), r(I.B4, {
        translated: !0,
        color: "pub-secondary-text"
    }, "Available in the Substack app and on web")), r(X, {
        alignSelf: "stretch"
    }, r(ue, {
        priority: "primary-theme",
        href: bo(t)
    }, e("Join chat"))))
}

function Hm({
    pub: n,
    subdomain: t
}) {
    const {
        iString: e
    } = ot();
    return r("a", {
        className: ln.emailWrapper,
        href: bo(t),
        "data-component-name": "EmailCommunityChatEmbed"
    }, r("div", {
        className: ln.container
    }, r(is, {
        size: 64,
        src: Oe(n.author_photo_url),
        framed: !0
    }), r("div", {
        className: ln.text
    }, r(I.H3, {
        translated: !0,
        className: ln.title,
        as: "div",
        color: "pub-primary-text"
    }, "Join ", I18N.p(n.author_name), "’s subscriber chat"), r(I.B4, {
        translated: !0,
        color: "pub-secondary-text"
    }, "Available in the Substack app and on web")), r(Gc, {
        tableClassName: ln.button
    }, e("Join chat"))))
}

function bo(n) {
    return Gd({
        pubKey: n,
        utm_source: bt.chatEmbed
    })
}
const Vm = "_bubbleStack_fw4jv_1",
    zm = "_bubble_fw4jv_1",
    Wm = "_img_fw4jv_14",
    Gm = "_linkImg_fw4jv_21",
    Jm = "_paywallBubble_fw4jv_28 _bubble_fw4jv_1",
    Nr = {
        bubbleStack: Vm,
        bubble: zm,
        img: Wm,
        linkImg: Gm,
        paywallBubble: Jm
    };

function Ym({
    communityPost: n,
    is_freemail: t,
    author: e,
    cta: s,
    withAttribution: o,
    attributionText: i,
    hideReply: a,
    truncateBodyAt: c
}) {
    var d;
    const l = !n || t && n.audience === "only_paid";
    let u = null;
    return !l && n.body && (u = c ? fr(n.body, c) : n.body), r(It, {
        gap: 12,
        verticalAlign: "top"
    }, r(is, {
        src: (d = e == null ? void 0 : e.photo_url) != null ? d : "",
        size: 40
    }), r(re, {
        gap: 4,
        style: {
            lineHeight: 0
        }
    }, o && r(af, {
        isStatic: !0,
        text: i || `From ${e!=null&&e.name?Jd(e.name):"Substack user"} subscriber chat`
    }), l ? r(Km, null) : [n.type === "media" && n.media_assets ? n.media_assets.slice(0, 1).map(h => r(Xm, {
        key: h.url,
        asset: h
    })) : n.type === "link" && r(Qm, {
        communityPost: n
    }), u && r(_o, null, r("span", null, r(I, {
        as: "span",
        weight: "bold"
    }, e ? e.name : "Substack writer"), " ", u))], !a && r(_o, null, r(qe, null, r("tr", null, r("td", {
        align: "left"
    }, r(I, {
        as: "span",
        color: "secondary"
    }, "Reply...")), r("td", {
        align: "right"
    }, r(gl, {
        size: 20,
        stroke: "var(--color-secondary}"
    }))))), s && r(tp, {
        fullWidth: !0,
        href: s.url
    }, s.text), s && s.blurb && r("div", null, r(I, {
        color: "secondary",
        align: "center",
        size: 14,
        lineHeight: 20
    }, s.blurb))))
}

function _o(n) {
    return r("div", k({
        className: Nr.bubble
    }, n))
}

function Km() {
    return r("div", {
        className: Nr.paywallBubble,
        style: {
            backgroundImage: `url(${Oe("/img/community/paywall-pixels-light.png")})`
        }
    }, r(I.Meta, null, "SUBSCRIBERS ONLY"))
}

function Xm({
    asset: n
}) {
    var e;
    return r("img", {
        className: Nr.img,
        width: 400,
        src: Oe((e = n.url) != null ? e : "", 400 * 2, {
            crop: "limit",
            height: 400 * 2
        })
    })
}

function Qm({
    communityPost: n
}) {
    var i, a;
    const {
        link_metadata: t,
        link_url: e
    } = n, s = (a = (i = t == null ? void 0 : t.url) != null ? i : e) != null ? a : "";
    let o;
    try {
        const c = new URL(s);
        o = `${c.host}${c.pathname}${c.search}${c.hash}`
    } catch (c) {
        o = s
    }
    return r(_o, null, r(qe, {
        style: {
            width: "400px"
        }
    }, r("tr", null, r("td", {
        align: "left",
        style: {
            verticalAlign: "top"
        }
    }, (t == null ? void 0 : t.title) && r(I, {
        font: "serif",
        lineHeight: 24
    }, t.title), r(I.Meta, {
        color: "secondary"
    }, o)), r("td", {
        width: "16"
    }), r("td", {
        align: "right"
    }, (t == null ? void 0 : t.image) && r("img", {
        className: Nr.linkImg,
        src: Oe(t.image, 72 * 2, {
            height: 72 * 2,
            smartCrop: !0
        })
    })))))
}
const Zm = "_container_1mvat_1",
    tg = "_emailWrapper_1mvat_13",
    yo = {
        container: Zm,
        emailWrapper: tg
    };

function eg({
    postId: n
}) {
    var o;
    const {
        error: t,
        result: e
    } = wn({
        pathname: `/api/v1/community/posts/${n}`,
        auto: !0,
        deps: [n]
    }), s = t instanceof xc && t.response.status === 402 && ((o = t.body) == null ? void 0 : o.status) === "PAID_SUBSCRIPTION_REQUIRED" ? t.body : null;
    return r(gt, {
        as: "a",
        className: yo.container,
        target: "_blank",
        href: Nc({
            postId: n,
            utm_source: bt.threadEmbed
        }),
        "data-component-name": "CommunityPostEmbed"
    }, s ? r(cf, {
        author: s.user
    }) : t ? "Error" : e && r(lf, {
        author: e.user,
        communityPost: e.communityPost,
        withAttribution: !0,
        isReadOnly: !0
    }))
}

function ng(n) {
    const {
        postId: t
    } = n;
    return r("a", {
        className: yo.emailWrapper,
        href: Nc({
            postId: t,
            utm_source: bt.threadEmbed,
            modal: "1"
        }),
        "data-component-name": "EmailCommunityPostEmbed"
    }, r("div", {
        className: yo.container
    }, r(Ym, V(k({}, n), {
        withAttribution: !0
    }))))
}
const sg = "_container_crmqc_1",
    rg = "_note_crmqc_5",
    wo = {
        container: sg,
        note: rg
    };

function og({
    commentId: n
}) {
    const {
        isLoading: t,
        error: e,
        result: s
    } = wn({
        pathname: `/api/v1/reader/comment/${n}`,
        auto: !0,
        deps: [n]
    });
    return e instanceof xc ? e.getMessage() : !s || t ? r(ag, null) : r(ig, {
        feedItem: s.item
    })
}

function ig({
    feedItem: n
}) {
    var l, u, d, h, p;
    const {
        comment: t,
        parentComments: e
    } = n, {
        truncatedBodyJson: s
    } = zp(t), o = e[e.length - 1], i = (l = t.attachments) == null ? void 0 : l.find(f => f.type !== "image"), a = (u = t.attachments) == null ? void 0 : u.filter(f => f.type === "image"), c = At(null);
    return Gf(c, () => ep(n, "post-embed"), {
        threshold: .2
    }), r(X, {
        justifyContent: "center",
        alignItems: "center",
        paddingX: 20,
        className: wo.container
    }, r(pr, null, r(gt, {
        as: "a",
        target: "_blank",
        href: Ws(t),
        gap: 12,
        border: "detail",
        bg: "primary",
        radius: "md",
        padding: {
            mobile: 16,
            desktop: 20
        },
        style: {
            textDecoration: "none",
            width: "560px",
            maxWidth: "100%"
        },
        className: wo.note,
        ref: c
    }, r(gt, {
        flex: "auto"
    }, r(um, {
        user: t
    })), r(X, {
        minWidth: 0,
        gap: 8,
        flex: "grow"
    }, r(X, {
        minWidth: 0,
        flex: "grow"
    }, r(dm, null, r(I, {
        as: "span",
        weight: "semibold"
    }, t.name), r(fm, {
        tier: t.user_bestseller_tier
    }), r(hm, {
        timestamp: t.date
    })), o && r(I.B5, null, "Replying to ", o.name), r(X, {
        gap: 12,
        flex: "grow"
    }, r(pm, null, s && r(lm, {
        content: s
    })), r(Wp, {
        attachments: i ? [i] : a || [],
        readOnly: !0,
        onAttachmentClick: ({
            commentId: f
        } = {}) => np(n, "post-embed", "attachment", {
            extraEventProps: {
                commentId: f
            }
        }),
        utm_content: n.entity_key
    }))), r(gt, {
        justifyContent: "space-between",
        alignItems: "center"
    }, r(ys, {
        icon: r(Jc, {
            height: 16,
            fill: "none",
            strokeWidth: 2.5,
            stroke: "var(--color-secondary)"
        }),
        count: (d = t.reaction_count) != null ? d : 0
    }), r(ys, {
        icon: r(bl, {
            height: 16,
            strokeWidth: 2.5,
            stroke: "var(--color-secondary)"
        }),
        count: (h = t.children_count) != null ? h : 0
    }), r(ys, {
        icon: r(Pn, {
            height: 16,
            strokeWidth: 2.5,
            stroke: "var(--color-secondary)"
        }),
        count: (p = t.restacks) != null ? p : 0
    }), r(ys, {
        icon: r(ei, {
            height: 16,
            strokeWidth: 2.5,
            stroke: "var(--color-secondary)"
        }),
        count: 0
    }))))))
}

function ys({
    icon: n,
    count: t
}) {
    return r(gt, {
        gap: 8,
        paddingTop: 6,
        flex: "grow",
        alignItems: "center"
    }, n, r(I.Digit, {
        color: "secondary"
    }, t > 0 && _l(t)))
}

function ag() {
    return r(pr, null, r(X, {
        justifyContent: "center",
        alignItems: "center",
        paddingX: 20,
        style: {
            margin: "20px 0"
        },
        "data-component-name": "CommentViewPlaceholder"
    }, r(gt, {
        gap: 12,
        border: "detail",
        bg: "primary",
        radius: "md",
        padding: {
            mobile: 16,
            desktop: 20
        },
        style: {
            textDecoration: "none",
            width: "560px",
            maxWidth: "100%"
        },
        flex: "grow",
        className: wo.note
    }, r($n, {
        type: "circle",
        size: 48
    }), r(X, {
        gap: 12,
        flex: "grow"
    }, r($n, {
        height: 16,
        width: `${Math.random()*(100-20)+20}%`
    }), r($n, {
        height: 16,
        width: `${Math.random()*(100-20)+20}%`
    }), r($n, {
        height: 16,
        width: `${Math.random()*(100-20)+20}%`
    }), r($n, {
        height: 16,
        width: `${Math.random()*(100-20)+20}%`
    })))))
}
const cg = n => r(Ht, V(k({}, n), {
        name: "MoreIcon",
        svgParams: {
            height: 24,
            width: 24,
            fill: n.fill,
            stroke: n.stroke,
            strokeWidth: n.strokeWidth
        }
    }), r("path", {
        d: "M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
    }), r("path", {
        d: "M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
    }), r("path", {
        d: "M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
    })),
    lg = "_note_qk0le_1",
    ug = {
        note: lg
    };

function dg({
    comment: n,
    utmSource: t,
    hideUfi: e,
    commentLinkUrl: s
}) {
    var d, h, p, f, g, m, _, y, b;
    if (!n) return r(I.B3, {
        "data-component-name": "EmailCommentEmbedError",
        translated: !0
    }, "Could not load comment");
    const o = (d = n.attachments) == null ? void 0 : d.find(S => S.type === "image"),
        i = (h = n.attachments) == null ? void 0 : h.find(S => S.type === "post"),
        a = i == null ? void 0 : i.postSelection,
        c = (p = n.attachments) == null ? void 0 : p.find(S => S.type !== "image"),
        l = c && Gp(c),
        u = (f = n.attachments) == null ? void 0 : f.find(S => S.type === "video");
    return r(Gt, {
        as: "a",
        href: s != null ? s : Ws(n, {
            urlParams: {
                utm_source: t
            }
        }),
        display: "block",
        padding: 16,
        radius: "md",
        border: "detail",
        color: "primary",
        className: ug.note,
        "data-component-name": "EmailCommentEmbed"
    }, r(It, {
        style: {
            width: "100%"
        },
        verticalAlign: "top",
        gap: 12,
        growLastChild: !0
    }, r(is, {
        src: (m = n.photo_url) != null ? m : Yd((g = n.user_id) != null ? g : 0),
        size: 48
    }), r(re, {
        gap: 12,
        style: {
            lineHeight: 1,
            width: "100%"
        }
    }, r(Gt, null, r(I.B3, null, r(I, {
        as: "span",
        weight: "semibold"
    }, n.name), " ", r(I, {
        as: "span",
        color: "secondary"
    }, _t(n.date).fromNowShort())), r(I.B3, null, Xo(n.body, 420))), i && a && r(I.B3, null, r(hg, {
        attachment: i,
        selection: a
    })), l && !i && r(I.B4, {
        color: "accent-cyan"
    }, l), u && r(fg, {
        attachment: u
    }), o && r(pg, {
        attachment: o
    }), !e && r(qe, {
        width: "100%",
        style: {
            width: "100%"
        }
    }, r("tr", null, r("td", {
        width: "20%"
    }, r(Jc, {
        width: 16,
        height: 16,
        strokeWidth: 1.5,
        stroke: qn,
        style: ws,
        fill: "none",
        isStatic: !0
    }), r(Yr, {
        count: (_ = n.reaction_count) != null ? _ : 0
    })), r("td", {
        width: "20%"
    }, r(bl, {
        height: 16,
        width: 16,
        strokeWidth: 1.5,
        stroke: qn,
        style: ws,
        isStatic: !0
    }), r(Yr, {
        count: (y = n.children_count) != null ? y : 0
    })), r("td", {
        width: "20%"
    }, r(Pn, {
        height: 16,
        width: 16,
        strokeWidth: 1.5,
        stroke: qn,
        style: ws,
        isStatic: !0
    }), r(Yr, {
        count: (b = n.restacks) != null ? b : 0
    })), r("td", {
        width: "20%"
    }, r(cg, {
        height: 16,
        width: 16,
        strokeWidth: 2,
        stroke: qn,
        fill: qn,
        style: ws,
        isStatic: !0
    })))))))
}
const ws = {
    display: "inline-block",
    verticalAlign: "middle"
};

function Yr({
    count: n
}) {
    return r(I.B4, {
        size: 12,
        as: "span",
        weight: "semibold",
        color: "secondary",
        style: {
            marginLeft: 4
        }
    }, n > 0 ? _l(n) : " ")
}
const qn = "#808080";

function hg({
    attachment: n,
    selection: t
}) {
    return r(Gt, {
        padding: 12,
        radius: "md",
        bg: "secondary"
    }, r(I, {
        color: "secondary",
        font: "serif",
        fontStyle: "italic",
        lineHeight: 24
    }, Xo(t.text.replaceAll("“", "‘").replaceAll("”", "’"), 180), "” — ", Kd(n.publication, n.post).name))
}

function pg({
    attachment: n
}) {
    return r(Gt, {
        as: "img",
        src: Oe(n.imageUrl, 400 * 2, {
            crop: "limit",
            height: 400 * 2
        }),
        width: 400,
        radius: "md",
        style: {
            maxHeight: 600,
            objectFit: "cover",
            margin: 0
        }
    })
}

function fg({
    attachment: n
}) {
    const e = n.mediaUpload;
    return r(Gt, {
        as: "img",
        src: kc(e, {
            isStatic: !0,
            variant: "shows"
        }),
        width: 400,
        radius: "md",
        style: {
            maxHeight: 600,
            objectFit: "cover",
            margin: 0
        }
    })
}
const mg = "_avatar_1kg9y_1",
    gg = "_badge_1kg9y_5",
    bg = "_container_1kg9y_13",
    _g = "_header_1kg9y_19",
    yg = "_emailButton_1kg9y_23",
    wg = "_cta_1kg9y_32",
    un = {
        avatar: mg,
        badge: gg,
        container: bg,
        header: _g,
        emailButton: yg,
        cta: wg
    },
    vg = ({
        avatarUrl: n,
        name: t,
        url: e
    }) => {
        const {
            iString: s
        } = ot();
        return r(re, {
            gap: 12,
            style: {
                padding: "16px",
                border: "1px solid #E0E0E0",
                borderRadius: "8px",
                margin: "0 auto 20px"
            }
        }, r(It, {
            gap: 12
        }, r(is, {
            src: n,
            size: 40
        }), r(re, null, r(I.H4, {
            translated: !0,
            size: 14,
            paddingBottom: 4,
            color: "pub-primary-text"
        }, "Book a meeting with ", I18N.p(t)), r(I.B4, {
            translated: !0,
            color: "pub-secondary-text"
        }, "Schedule a meeting"))), r(Gc, {
            tableClassName: un.emailButton,
            href: e
        }, s("Book meeting")))
    },
    Sg = ({
        avatarUrl: n,
        name: t,
        url: e
    }) => {
        const {
            iString: s
        } = ot();
        return r(gt, {
            direction: {
                mobile: "column",
                desktop: "row"
            },
            radius: "md",
            padding: 24,
            alignItems: "center",
            className: un.container,
            justifyContent: "space-between",
            "data-component-name": "MeetingEmbed"
        }, r(ht, {
            className: un.header,
            gap: 16,
            paddingBottom: {
                mobile: 20,
                desktop: 0
            }
        }, r(ui, {
            className: un.avatar,
            imageUrl: n,
            size: 40,
            badge: r("div", {
                className: un.badge
            }, r(Tm, {
                color: "white",
                size: 12
            })),
            badgePosition: "bottom-right"
        }), r("div", null, r(I.H4, {
            translated: !0,
            paddingBottom: 4,
            color: "pub-primary-text"
        }, "Book a meeting with ", I18N.p(t)), r(I.B4, {
            translated: !0,
            color: "pub-secondary-text"
        }, "Schedule a meeting"))), r(ue, {
            className: un.cta,
            priority: "primary-theme",
            onClick: () => {
                Se(e, {
                    newTab: !0
                })
            }
        }, s("Book meeting")))
    },
    Cg = n => r(Ht, V(k({}, n), {
        name: "PlayIconRound",
        svgParams: {
            height: 24,
            width: 24
        }
    }), r("path", {
        className: "outer-circle",
        d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), r("path", {
        className: "inner-triangle",
        d: "M10 8L16 12L10 16V8Z",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })),
    xg = n => r(Ht, V(k({}, n), {
        name: "VoiceoverIcon",
        svgParams: {
            height: 24,
            width: 24,
            viewBox: "0 0 24 24"
        },
        fill: "none"
    }), r("path", {
        d: "M11.8518 3.31518C12.2459 4.26329 13.551 7.10985 14.4542 8.3467C15.3764 9.60967 12.8285 9.95184 12 10.5",
        "stroke-width": "1.5",
        "stroke-linecap": "round"
    }), r("path", {
        d: "M12 10.5C12 10.5 12.4662 11.2332 12.7627 11.7326C13.0592 12.232 13 12.5 11.5 13C10.7772 13.2409 9.5 13.5 9.5 13.5C10.3447 13.9272 12.2664 14.1393 12.4041 14.3167C12.763 14.779 12.3241 15.4618 11.8617 15.8208C11.3994 16.1797 12.0724 18.7353 10.5 19.5C8.9276 20.2647 5.70772 19.432 3 18",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), r("path", {
        d: "M18.5 6.5L20.3544 4.8526",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), r("path", {
        d: "M18.5 15.5L20.3544 17.2545",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), r("path", {
        d: "M19.5 11.0326L22 11.0326",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })),
    Ng = "_themedSelectOption_n3weu_1",
    kg = "_noUnderline_n3weu_23",
    Eg = "_podcastPaywallMenuButton_n3weu_27",
    Tg = "_paywallMenuDropdown_n3weu_33",
    Pg = "_paywallMenuDropdownItem_n3weu_37",
    Ag = "_paywallMenuDropdownIcon_n3weu_43",
    Lg = "_paywallMenuDropdownItemTop_n3weu_48",
    Ig = "_paywallMenuDropdownDeleteItem_n3weu_54",
    Og = {
        themedSelectOption: Ng,
        noUnderline: kg,
        podcastPaywallMenuButton: Eg,
        paywallMenuDropdown: Tg,
        paywallMenuDropdownItem: Pg,
        paywallMenuDropdownIcon: Ag,
        paywallMenuDropdownItemTop: Lg,
        paywallMenuDropdownDeleteItem: Ig
    };
var Mg = (n => (n.Embed = "Embed audio", n.Voiceover = "Add voiceover", n.Podcast = "Audio", n.PodcastPreview = "Podcast free version", n.VideoPodcast = "Video", n.ShareQuote = "Share quote", n))(Mg || {}),
    Dg = (n => (n.Embed = "Upload or record an audio file embedded into the text.", n.Voiceover = "Upload or record a new voiceover: an audio version of your post.", n.Podcast = "Create a new audio post by uploading or recording an audio file.", n.PodcastPreview = "Upload a file that will appear to free users on the website and in their feeds.", n.VideoPodcast = "Create a new video post by uploading or recording a video file. The audio from your video will be delivered to podcast players if selected in the publish settings.", n.ShareQuote = "Upload or record an audio file that will be used as a share quote.", n))(Dg || {}),
    Rg = (n => (n[n.PubAccent = 0] = "PubAccent", n[n.PubFull = 1] = "PubFull", n[n.Substack = 2] = "Substack", n))(Rg || {});
const mi = ({
        containerRef: n,
        currentTime: t,
        remainingTime: e,
        progress: s,
        onMouseDown: o,
        shouldCollapseOnMobile: i = !1,
        theme: a = 1
    }) => r("div", {
        className: "tw-flex tw-grow tw-items-center tw-gap-3 tw-font-meta tw-text-sm tw-text-substack-primary sm:tw-gap-3"
    }, r("div", {
        className: $("tw-min-w-[40px] tw-text-right", {
            "tw-hidden sm:tw-block": i
        })
    }, t), r("div", {
        ref: n,
        className: $("tw-relative tw-h-5 tw-grow ", {
            "tw-ml-2 sm:tw-ml-0": i
        }),
        onMouseDown: o
    }, r("div", {
        className: $("audio-progress-bar tw-absolute tw-top-2 tw-right-0 tw-left-0 tw-h-1 tw-rounded", {
            "tw-bg-pub-detail": a === 1,
            "tw-bg-substack-detail": a !== 1
        })
    }), r("div", {
        className: $("tw-absolute tw-top-2 tw-left-0 tw-h-1 tw-rounded-l-full", {
            "tw-bg-pub-accent": a !== 2,
            "tw-bg-substack-accent": a === 2
        }),
        style: {
            width: `${s*100}%`
        }
    }), r("div", {
        className: $("audio-playhead tw-absolute tw-ml-[-10px] tw-h-4 tw-w-4 tw-rounded-full tw-border-2 tw-border-solid ", {
            "tw-border-pub-background": a === 1,
            "tw-border-substack-bg": a !== 1,
            "tw-bg-substack-accent": a === 2,
            "tw-bg-pub-accent": a !== 2
        }),
        style: {
            left: `${s*100}%`
        }
    })), r("div", {
        className: "tw-min-w-[40px]"
    }, e)),
    vs = [{
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
    gi = ({
        onSetPlaybackRate: n,
        playbackRate: t,
        className: e
    }) => {
        const s = vs.findIndex(({
            value: o
        }) => o === t);
        return r("div", {
            onClick: () => {
                const o = (s + 1) % vs.length;
                n(vs[o].value)
            },
            className: e
        }, vs[s].display, "×")
    },
    $g = ({
        isPlaying: n,
        onSkipBack: t,
        onSkipForward: e,
        onTogglePlayback: s
    }) => r("div", {
        className: "tw-flex tw-items-center tw-justify-center tw-gap-4"
    }, t && r("div", {
        onClick: t,
        role: "button",
        className: "tw-cursor-pointer"
    }, r(Jp, {
        className: "tw-block tw-fill-pub-primary-text tw-transition-opacity sm:tw-opacity-70 sm:hover:tw-opacity-100"
    })), r("div", {
        className: $("tw-relative tw-flex tw-h-16 tw-w-16 tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-full tw-bg-pub-accent tw-transition-transform hover:tw-scale-105"),
        onClick: s,
        role: "button"
    }, n ? r("div", {
        className: "tw-flex tw-h-6 tw-w-6 tw-justify-between"
    }, r("div", {
        className: "tw-h-full tw-w-1/3 tw-rounded-sm tw-bg-pub-accent-inverse"
    }), r("div", {
        className: "tw-h-full tw-w-1/3 tw-rounded-sm tw-bg-pub-accent-inverse"
    })) : r(Yn, {
        className: "tw-relative tw-left-0.5 tw-fill-pub-accent-inverse",
        stroke: "none",
        height: 24
    })), e && r("div", {
        onClick: e,
        role: "button",
        className: "tw-cursor-pointer"
    }, r(Yp, {
        className: "tw-block tw-fill-pub-primary-text tw-transition-opacity sm:tw-opacity-70 sm:hover:tw-opacity-100"
    }))),
    yl = n => r(oi, V(k({}, n), {
        metricsPost: n.post,
        feature: "Embed audio",
        render: ({
            currentTime: t,
            isPlaying: e,
            progress: s,
            progressBarRef: o,
            progressBarOnMouseDown: i,
            remainingTime: a,
            playbackRate: c,
            setPlaybackRate: l,
            togglePlayback: u
        }) => r("div", {
            "data-component-name": "AudioEmbedPlayer",
            "data-drag-handle": "",
            className: "audio-embed tw-my-4 tw-box-border tw-flex tw-w-full tw-select-none tw-items-center tw-gap-4 tw-space-y-0 tw-rounded-full tw-bg-pub-wash tw-p-4 tw-font-sans sm:tw-gap-5"
        }, r(gi, {
            onSetPlaybackRate: l,
            playbackRate: c,
            className: "audio-button tw-w-12 tw-cursor-pointer tw-rounded-full tw-border tw-border-solid tw-border-pub-detail-light tw-py-1 tw-text-center tw-font-meta tw-text-sm tw-font-semibold tw-leading-none tw-text-pub-secondary-text hover:tw-border-pub-detail"
        }), r("div", {
            className: "tw-flex tw-w-full tw-flex-wrap"
        }, n.label && r("div", {
            className: "tw-basis-full tw-pb-2 tw-text-ssm tw-font-semibold tw-text-pub-primary-text"
        }, n.label), r("div", {
            className: "tw-flex tw-w-full tw-items-center tw-justify-between tw-gap-2 sm:tw-gap-4"
        }, r(mi, {
            currentTime: t,
            remainingTime: a,
            containerRef: o,
            progress: s,
            onMouseDown: i
        }))), r("div", {
            className: "audio-embed-play-button tw-relative tw-flex tw-h-12 tw-w-12 tw-shrink-0 tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-border-solid tw-border-pub-detail tw-bg-pub-background tw-transition-transform hover:tw-scale-105",
            onClick: u,
            role: "button"
        }, e ? r("div", {
            className: "tw-flex tw-h-5 tw-w-4 tw-justify-between"
        }, r("div", {
            className: "pause-icon tw-h-full tw-w-1/3 tw-rounded-sm tw-bg-pub-accent"
        }), r("div", {
            className: "pause-icon tw-h-full tw-w-1/3 tw-rounded-sm tw-bg-pub-accent"
        })) : r(Yn, {
            className: "tw-relative tw-left-[.1rem] tw-fill-pub-accent",
            stroke: "none",
            height: 18
        })))
    })),
    wl = ({
        pub: n,
        post: t,
        duration: e,
        label: s
    }) => {
        var i;
        const {
            iString: o
        } = ot();
        return r("table", {
            "data-component-name": "AudioEmbedPlayerStatic",
            className: "tw-w-full tw-rounded-full tw-bg-substack-wash"
        }, r("tr", null, r("td", {
            className: "tw-text-center tw-font-meta tw-text-ssm tw-uppercase tw-text-substack-primary"
        }, r("a", {
            href: t == null ? void 0 : t.canonical_url,
            className: $("tw-block tw-w-full tw-p-4 tw-text-substack-primary", Og.noUnderline)
        }, r(Cg, {
            className: "tw-w-max-4 tw-mr-2 tw-inline-block tw-w-4 tw-align-middle",
            stroke: (i = n.theme) == null ? void 0 : i.background_pop_color,
            isStatic: !0
        }), r("span", {
            className: "tw-align-middle"
        }, fr(s, 10) || o("Listen now"), " · ", Xd(e || 0))))))
    },
    qg = n => {
        const t = Vp.useMediaQuery({
                maxWidth: 631
            }),
            e = `/api/v1/audio/upload/${n.mediaUploadId}/src`,
            {
                iString: s,
                iTemplate: o
            } = ot();
        return r(oi, V(k({}, n), {
            src: e,
            feature: "Add voiceover",
            metricsPost: n.post,
            render: ({
                isPaywalled: i,
                currentTime: a,
                isPlaying: c,
                progress: l,
                progressBarRef: u,
                progressBarOnMouseDown: d,
                remainingTime: h,
                playbackRate: p,
                setPlaybackRate: f,
                togglePlayback: g
            }) => r("div", {
                className: "tw-mb-6 tw-flex sm:tw-gap-1"
            }, r("div", {
                className: "tw-hidden tw-h-20 tw-shrink-0 tw-basis-20 tw-items-center tw-justify-center tw-rounded-md tw-bg-pub-wash tw-fill-pub-primary-text tw-text-pub-primary-text sm:tw-flex"
            }, r(xg, {
                className: "tw-stroke-pub-secondary-text"
            })), r("div", {
                className: "tw-box-border tw-flex tw-h-20 tw-w-full tw-select-none tw-items-center tw-gap-3 tw-space-y-0 tw-rounded-l-md tw-rounded-r-[64px] tw-bg-pub-wash  tw-p-4 tw-font-sans"
            }, i ? r("div", {
                className: "tw-flex tw-w-full tw-flex-wrap tw-justify-center tw-text-ssm tw-text-pub-secondary-text sm:tw-text-sm"
            }, s("Upgrade to paid to play voiceover")) : r("div", {
                className: "tw-flex tw-w-full tw-flex-wrap"
            }, r("div", {
                className: "tw-basis-full tw-pb-2 tw-text-ssm tw-font-semibold tw-uppercase tw-text-pub-secondary-text"
            }, s("Article voiceover")), r("div", {
                className: "tw-flex tw-w-full tw-items-center tw-justify-between tw-gap-2 "
            }, r(gi, {
                onSetPlaybackRate: f,
                playbackRate: p,
                className: "tw-w-12 tw-cursor-pointer tw-rounded-full tw-border tw-border-solid tw-border-pub-detail-light tw-py-1 tw-text-center tw-font-meta tw-text-sm tw-font-semibold tw-leading-none tw-text-pub-secondary-text hover:tw-border-pub-detail"
            }), r(mi, {
                currentTime: a,
                remainingTime: h,
                containerRef: u,
                progress: l,
                onMouseDown: d,
                shouldCollapseOnMobile: !0
            }))), i ? r("div", {
                className: "tw-relative tw-flex tw-h-14 tw-w-14 tw-shrink-0 tw-cursor-not-allowed tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-border-solid tw-border-pub-detail tw-bg-pub-background tw-transition-transform"
            }, r(Yn, {
                className: "tw-relative tw-left-[.15rem] tw-fill-pub-detail",
                stroke: "none",
                height: t ? 20 : 24
            })) : r("div", {
                className: "tw-relative tw-flex tw-h-14 tw-w-14 tw-shrink-0 tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-border-solid  tw-border-pub-detail tw-bg-pub-background tw-transition-transform hover:tw-scale-105",
                onClick: g,
                role: "button"
            }, c ? r("div", {
                className: "tw-flex tw-h-5 tw-w-5 tw-justify-between"
            }, r("div", {
                className: "tw-h-full tw-w-1/3 tw-rounded-sm tw-bg-pub-accent"
            }), r("div", {
                className: "tw-h-full tw-w-1/3 tw-rounded-sm tw-bg-pub-accent"
            })) : r(Yn, {
                className: "tw-relative tw-left-[.15rem] tw-fill-pub-accent",
                stroke: "none",
                height: 20
            }))))
        }))
    },
    Qit = ({
        isOpen: n,
        onDismiss: t,
        onDeleteAudio: e
    }) => {
        const {
            iString: s
        } = ot();
        return r(Ze, {
            isOpen: n,
            onClose: t
        }, r(Qs, {
            includeClose: !1,
            title: s("Something went wrong...")
        }), r(ls, null, s("Unfortunately, there was a problem with your audio file upload. We'll investigate, but in the meantime, please try again, and we apologize for the inconvenience.")), r(zc, {
            includeDivider: !1,
            alignment: "default",
            primaryButton: r(Ke, {
                onClick: t,
                variant: "primary"
            }, s("Got it"))
        }))
    },
    Bg = n => parseFloat(n).toFixed(2),
    Ug = ({
        symbol: n,
        prependSymbol: t = !1,
        isStatic: e = !1
    }) => {
        const s = `/api/v1/price/${n}`,
            [o, i] = D(null),
            [a, c] = D(null),
            [l, u] = D(!1);
        return lt(() => {
            (() => K(void 0, null, function*() {
                try {
                    const h = yield dt.get(s);
                    if (h.body) {
                        if (h.body.status === "not_found") {
                            u(!0);
                            return
                        }
                        i(h.body.price), c(h.body.change_pct)
                    }
                } catch (h) {
                    u(!0)
                }
            }))()
        }, [s]), !t && n.startsWith("$") && (n = n.slice(1)), e ? r("span", null, r("a", {
            "data-component-name": "CashtagStatic",
            href: `${ta(n)}`
        }, n, " ")) : l ? r("span", null, n, " ") : r("a", {
            className: $("cashtag", {
                neutral: a == 0,
                positive: a && parseFloat(a) > 0,
                negative: a && parseFloat(a) < 0
            }),
            target: "_blank",
            rel: "noopener",
            href: `${ta(n)}`,
            "data-attrs": JSON.stringify({
                symbol: n
            }),
            "data-component-name": "Cashtag"
        }, `${n.toUpperCase()} `, r("span", null, r("span", null, r("span", {
            className: $("delta")
        }, `${Bg(a||0)}%`, !a || parseFloat(a) > 0 ? String.fromCharCode(8593) : String.fromCharCode(8595)))))
    },
    Fg = ({
        href: n,
        children: t
    }) => n ? r("a", {
        href: n,
        target: "_blank",
        rel: "noopener",
        style: {
            textDecoration: "none"
        }
    }, t) : t,
    jg = "_mediaNodeView_12pqc_1",
    Hg = "_staticView_12pqc_20",
    Vg = "_staticImageWrap_12pqc_28",
    zg = "_left_12pqc_29",
    Wg = "_right_12pqc_33",
    Gg = "_imageContainer_12pqc_38",
    Jg = "_large_12pqc_42",
    Yg = "_full_12pqc_46",
    Kg = "_caption_12pqc_50",
    Xg = "_placeholder_12pqc_58",
    Qg = "_inlineCaptionEditor_12pqc_69",
    Zg = "_horizontalResizeHandle_12pqc_73",
    tb = "_mediaControlButtons_12pqc_74",
    eb = "_active_12pqc_120",
    nb = "_mediaControlTextEditor_12pqc_130",
    sb = "_hasCaption_12pqc_139",
    rb = "_zoom_12pqc_152",
    ob = "_pointer_12pqc_156",
    zt = {
        mediaNodeView: jg,
        "align-left": "_align-left_12pqc_7",
        "align-center": "_align-center_12pqc_11",
        "align-right": "_align-right_12pqc_15",
        staticView: Hg,
        staticImageWrap: Vg,
        left: zg,
        right: Wg,
        imageContainer: Gg,
        large: Jg,
        full: Yg,
        caption: Kg,
        placeholder: Xg,
        static: "_static_12pqc_20",
        inlineCaptionEditor: Qg,
        horizontalResizeHandle: Zg,
        mediaControlButtons: tb,
        active: eb,
        mediaControlTextEditor: nb,
        hasCaption: sb,
        zoom: rb,
        pointer: ob
    },
    ib = ({
        align: n,
        width: t
    }) => {
        const e = {};
        if (n === "center" || t === "100%" || t >= Gs) return e;
        const s = n === "left" ? "paddingRight" : "paddingLeft";
        return e[s] = Gs - t, e
    },
    ab = ({
        src: n,
        alt: t,
        title: e,
        width: s,
        height: o,
        align: i,
        href: a,
        captionHtml: c
    }) => {
        const l = s === "100%" ? Gs : s;
        return r("div", {
            className: $(zt.staticView),
            "data-component-name": "Image3Static"
        }, r(Fg, {
            href: a
        }, r("div", {
            style: ib({
                align: i,
                width: s
            }),
            className: $(zt.staticImageWrap)
        }, r("img", {
            width: l,
            height: o,
            src: Oe(n, 2 * Gs),
            alt: t
        }), !c && e && r("div", {
            className: $(zt.caption, zt.static)
        }, e), !!c && r("div", {
            className: $(zt.caption, zt.static),
            dangerouslySetInnerHTML: {
                __html: c
            }
        }))))
    },
    cb = ({
        src: n,
        alt: t,
        title: e,
        width: s,
        size: o,
        align: i,
        href: a,
        captionHtml: c
    }) => {
        const l = Qd("post"),
            u = a || (l ? n : null),
            [d, h] = D(!1),
            p = At(null),
            f = () => {
                a ? window.open(a, "_blank") : l && u ? window.open(u, "_blank") : h(!0)
            },
            g = () => {
                switch (o) {
                    case "large":
                        return eh;
                    case "full":
                        return typeof window != "undefined" ? window.innerWidth : th;
                    default:
                        return s === "100%" ? Zd : s
                }
            };
        return r("figure", {
            className: $(zt.mediaNodeView, i && zt[`align-${i}` || ""]),
            "data-component-name": "Image3Dynamic"
        }, r(ht, {
            className: $(zt.imageContainer, zt[o], {
                [zt.pointer]: u,
                [zt.zoom]: !u
            }),
            onClick: f
        }, r(X, {
            gap: 8
        }, r(tn, {
            className: zt[o],
            src: n,
            alt: t,
            title: e,
            maxWidth: g(),
            imageRef: p,
            useRetinaSizing: !0,
            imageIsFixedWidth: !1
        }), !c && !!e && r("figcaption", {
            "data-component-name": "Image3DynamicTitle",
            className: zt.caption
        }, e), !!c && r("figcaption", {
            "data-component-name": "Image3DynamicCaption",
            className: zt.caption,
            dangerouslySetInnerHTML: {
                __html: c
            }
        }))), r(pi, {
            showModal: d,
            modalContent: [{
                attrs: {
                    src: n,
                    alt: t,
                    title: e
                }
            }],
            onClose: () => h(!1),
            step: 0
        }))
    },
    lb = "_imageGallery_4il70_1",
    ub = "_canEdit_4il70_8",
    db = "_editGalleryWrap_4il70_16",
    hb = "_editGallery_4il70_16",
    pb = "_imageCaption_4il70_58",
    fb = "_image_4il70_1",
    mb = "_zoom_4il70_72",
    gb = "_imageRow_4il70_79",
    bb = "_inbox_4il70_111",
    _b = "_imageGalleryWrap_4il70_111",
    yb = "_imageWrap_4il70_111",
    wb = "_small_4il70_111",
    vb = "_medium_4il70_115",
    Qt = {
        imageGallery: lb,
        static: "_static_4il70_5",
        canEdit: ub,
        editGalleryWrap: db,
        editGallery: hb,
        imageCaption: pb,
        image: fb,
        zoom: mb,
        imageRow: gb,
        "length-2": "_length-2_4il70_82",
        inbox: bb,
        imageGalleryWrap: _b,
        imageWrap: yb,
        small: wb,
        medium: vb
    },
    fa = (n, t) => t === 1 ? "large" : t === 2 || t === 4 ? "medium" : t % 3 === 0 ? "small" : t === 5 || t === 7 ? n <= 2 ? "small" : "medium" : n <= 5 ? "small" : "medium",
    vl = {
        small: 237,
        medium: 360,
        large: 728
    },
    ma = ({
        src: n,
        size: t,
        onSelectImage: e,
        useViewer: s = !1,
        alt: o
    }) => {
        const i = () => {
            s && e()
        };
        return r(tn, {
            src: n,
            alt: o,
            maxWidth: 2 * vl[t],
            className: $(Qt.image, Qt[t], s && Qt.zoom),
            onClick: i
        })
    },
    Sb = (n, t = "", e = "") => {
        const s = [];
        for (const o in n) {
            const i = n[o],
                {
                    height: a = 0,
                    width: c = 0
                } = nh(i.src) || {},
                l = `(${Number(o)+1} of ${n.length})`,
                u = {
                    src: i.src,
                    height: a,
                    width: c,
                    alt: `${e} ${l}`,
                    title: `${t} ${l}`
                };
            s.push({
                attrs: u
            })
        }
        return s
    },
    Cb = ({
        onEditGallery: n,
        editGalleryRef: t
    }) => r(gt, {
        justifyContent: "center",
        alignItems: "center",
        className: Qt.editGalleryWrap
    }, r(hi, {
        ref: t,
        noList: !0
    }, r(X, {
        onClick: n,
        justifyContent: "center",
        alignItems: "center",
        className: Qt.editGallery
    }, r(di, {
        height: 20
    })))),
    xb = ({
        node: n,
        editor: t
    }) => {
        const {
            gallery: e
        } = n.attrs, s = n.attrs.isEditor || t, {
            caption: o,
            alt: i
        } = e, a = e.images.map((S, x) => V(k({}, S), {
            idx: x
        })), c = typeof window != "undefined" && !window.location.pathname.startsWith("/publish"), [l, u] = D(!1), [d, h] = D(0), p = At(null), f = a.length === 1, g = Sb(a, o), m = S => {
            h(S), u(!0)
        }, _ = () => {
            document.dispatchEvent(new Event("editSelectedImageGallery"))
        };
        if (a.length === 0) return null;
        const y = S => {
                var x, w;
                s && (S ? (x = p.current) == null || x.open() : (w = p.current) == null || w.close())
            },
            b = Sl(a);
        return r("figure", {
            className: $(Qt.imageGallery, s && Qt.canEdit),
            onMouseEnter: () => y(!0),
            onMouseLeave: () => y(!1),
            "data-drag-handle": !0,
            "data-component-name": "ImageGallery"
        }, s && e && r(Cb, {
            onEditGallery: _,
            editGalleryRef: p
        }), r(X, {
            gap: 8
        }, f ? r(ma, {
            src: a[0].src,
            alt: i,
            caption: o,
            size: fa(0, 1),
            onSelectImage: () => m(0),
            useViewer: c
        }) : b.map(S => r(gt, {
            className: $(Qt.imageRow, Qt[`length-${S.length}`]),
            gap: 8
        }, S.map(x => r(ma, {
            src: x.src,
            alt: i,
            caption: o,
            size: fa(x.idx, a.length),
            onSelectImage: () => m(x.idx),
            useViewer: c
        })))), o && r("figcaption", {
            className: Qt.imageCaption
        }, o)), r(pi, {
            showModal: l,
            modalContent: g,
            onClose: () => u(!1),
            step: d
        }))
    },
    Nb = ({
        node: n
    }) => {
        const {
            gallery: t
        } = n.attrs;
        if (!t) return null;
        const {
            alt: e,
            staticGalleryImage: s,
            caption: o
        } = t;
        return s ? r("div", {
            className: $(Qt.static, Qt.imageGallery),
            "data-component-name": "ImageGalleryStatic"
        }, r("img", {
            src: Oe(s.src, 2 * vl.large),
            alt: e
        }), o && r("div", {
            className: $(Qt.imageCaption, Qt.static)
        }, o)) : null
    };

function Sl(n) {
    const t = n.length === 4 ? 2 : 3;
    let e = [n.slice(0, t)];
    const s = n.slice(t);
    return s.length > 0 && (e = e.concat(Sl(s))), e
}
const Cl = n => r(Ht, V(k({
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, n), {
        name: "LucideStarIcon",
        svgParams: {
            height: 24,
            width: 24
        }
    }), r("polygon", {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    })),
    kb = "_referralsTierCard_mpkr1_1",
    Eb = {
        referralsTierCard: kb
    },
    Tb = ({
        tierNumber: n,
        rewardDescription: t,
        numReferralsRequired: e,
        pub: s
    }) => {
        const [o, i] = D([]), a = () => K(void 0, null, function*() {
            const {
                body: h
            } = yield dt.get("/api/v1/reader_referrals/tiers");
            i(h.tiers)
        }), {
            iString: c
        } = ot();
        if (lt(() => {
                a()
            }, []), !n || !t || !s.id) return r("div", {
            "data-component-name": "ReferralsTierCardError"
        });
        const l = o[n - 1],
            u = l ? l.reward_type === "custom" ? l.reward_description : c(rm[l.reward_type]) : t,
            d = l ? l.num_referrals_required : e;
        return d ? r(X, {
            "data-component-name": "ReferralsTierCard",
            className: "milestone-tier-card",
            justifyContent: "start",
            border: "detail-themed",
            radius: "md",
            padding: 20,
            gap: 16,
            target: "_blank"
        }, r("div", {
            className: "tier-stars-container"
        }, Array(n).fill(0).map((h, p) => r(Cl, {
            width: 20,
            height: 20,
            strokeWidth: 2,
            stroke: s.theme_var_background_pop || "#FF6719",
            fill: s.theme_var_background_pop || "#FF6719",
            key: p
        }))), r(X, {
            gap: 4
        }, r(I.H4, null, u), r(I.Meta, {
            translated: !0
        }, "Tier ", I18N.p(n), " reward - ", I18N.p(d), " Referrals")), r(ht, {
            alignItems: "center"
        }, r(vr, {
            pub: s,
            logo_url: s.logo_url,
            size: 24
        }), r(I.Meta, {
            color: "primary",
            as: "a",
            href: mr(s),
            decoration: "none",
            weight: "bold"
        }, s.name))) : r("div", {
            "data-component-name": "ReferralsTierCardError"
        })
    },
    Pb = ({
        tierNumber: n,
        pub: t
    }) => !n || !t.id ? r("div", null) : r("a", {
        href: `${Dt.LEADERBOARD_URL}&utm_source=${bt.rewardEmail}`,
        className: Eb.referralsTierCard
    }, r(re, {
        gap: 16
    }, r(It, {
        style: {
            lineHeight: 0
        },
        gap: 4
    }, Array(n).fill(0).map((e, s) => r(Cl, {
        width: 20,
        height: 20,
        strokeWidth: 2,
        key: s,
        stroke: t.theme_var_background_pop || "#FF6719",
        fill: t.theme_var_background_pop || "#FF6719",
        isStatic: !0
    }))), r(re, {
        gap: 4
    }, r(I.H4, null, Dt.REWARD_DESCRIPTION), r(I.Meta, {
        translated: !0
    }, "Tier ", I18N.p(n), " reward - ", I18N.p(Dt.NUM_REFERRALS_REQUIRED), " Referrals")), r(It, {
        verticalAlign: "middle"
    }, r(vr, {
        isStatic: !0,
        pub: t,
        logo_url: t.logo_url,
        size: 24
    }), r(I.Meta, {
        color: "primary",
        as: "a",
        href: mr(t),
        decoration: "none",
        weight: "bold"
    }, t.name)))),
    Ab = "_container_1fu4e_1",
    Lb = "_containerAnimated_1fu4e_7",
    Ss = {
        container: Ab,
        containerAnimated: Lb,
        "silhouette-scroll": "_silhouette-scroll_1fu4e_1"
    },
    dn = ({
        animated: n = !0,
        width: t,
        height: e,
        aspectRatio: s,
        className: o
    }) => s ? r("div", {
        style: `aspect-ratio:${s}`
    }, r("div", {
        className: $(Ss.container, o, {
            [Ss.containerAnimated]: n
        }),
        style: {
            width: t,
            height: e != null ? e : "100%"
        }
    })) : r("div", {
        className: $(Ss.container, o, {
            [Ss.containerAnimated]: n
        }),
        style: {
            width: t,
            height: e
        }
    }),
    Ib = "_editVideoEmbedWrap_168ek_1",
    Ob = "_imageGallery_168ek_6",
    Mb = "_editVideoEmbed_168ek_1",
    Db = "_videoPlaceholder_168ek_14",
    Rb = "_videoScrollTarget_168ek_20",
    $b = "_video_168ek_14",
    qb = "_videoPlayer_168ek_33",
    Bb = "_videoEmbed_168ek_37",
    Ub = "_videoPlaceholderSilhouette_168ek_43",
    $e = {
        editVideoEmbedWrap: Ib,
        imageGallery: Ob,
        editVideoEmbed: Mb,
        videoPlaceholder: Db,
        videoScrollTarget: Rb,
        video: $b,
        videoPlayer: qb,
        videoEmbed: Bb,
        videoPlaceholderSilhouette: Ub
    },
    Fb = ({
        mediaUploadId: n,
        post: t,
        pub: e,
        isEditor: s = !1
    }) => {
        var P, A;
        const o = At(),
            {
                iString: i
            } = ot(),
            {
                isMobile: a
            } = sp(),
            {
                mediaUpload: c,
                loading: l,
                error: u,
                refetch: d
            } = rp({
                mediaUploadId: n
            }),
            [h, p] = D(!1),
            [f, g] = D(!1),
            [m, _] = D(!1),
            [y, b] = D(null),
            S = () => {
                y && (clearTimeout(y), b(null)), g(!0)
            },
            x = () => {
                if (typeof window != "undefined") {
                    const M = window.setTimeout(() => {
                        g(!1)
                    }, 0);
                    b(M)
                }
            };
        lt(() => () => {
            typeof window != "undefined" && y && window.clearTimeout(y)
        }, [y]);
        const w = () => {
            var M;
            d(), c && rh(kc(c)), (M = o.current) != null && M.player && o.current.player.load(), p(!1)
        };
        return lt(() => {
            var O;
            const M = T => {
                T.preventDefault()
            };
            return typeof window != "undefined" && ((O = o.current) != null && O.player) && h && window.document.addEventListener("dragstart", M), () => {
                var T;
                typeof window != "undefined" && ((T = o.current) != null && T.player) && window.document.removeEventListener("dragstart", M)
            }
        }, [h, o]), r("div", {
            "data-component-name": "VideoEmbedPlayer",
            id: sh({
                mediaUploadId: n
            }),
            className: $e.videoScrollTarget,
            onMouseEnter: S,
            onMouseLeave: x
        }, l ? r(dn, {
            className: $e.videoPlaceholderSilhouette
        }) : u || !c ? r("div", {
            className: $e.videoPlaceholder
        }, i("Could not load video.")) : r(it, null, r("div", {
            className: $($e.videoEmbed, s && $e.canEdit)
        }, r(An, {
            ref: o,
            mediaUpload: c,
            isStatic: !1,
            className: $({
                [$e.canEdit]: s
            }),
            pub: e,
            noPreview: h,
            renderPlayButton: () => r(Kf, {
                isPlaying: !1,
                size: a ? 56 : 72
            }),
            stopPropagation: !0,
            videoType: "embed",
            videoPlayerClassName: $e.videoPlayer,
            videoClassName: $e.video
        }), s && (f || h || m) && r(Hd, null, r(mm, {
            key: n,
            videoPlayer: (P = o.current) != null ? P : null,
            pub: null,
            mediaUpload: c,
            onOpenThumbnail: () => p(!0),
            onOpenSettings: null,
            onThumbnailUpdated: w,
            onOpenFreePreview: null,
            onRemoveFreePreview: null,
            onRemoveMedia: null,
            active: !h,
            onSelected: M => _(!!M)
        }), h && ((A = o.current) == null ? void 0 : A.player) && r(gm, {
            videoPlayerRef: o.current.player,
            videoUpload: c,
            active: h,
            onCancel: w,
            onUpdate: w
        })))))
    };
var xl = {},
    kr = {},
    Er = {},
    Tr = {};
const jb = {
    0: 65533,
    128: 8364,
    130: 8218,
    131: 402,
    132: 8222,
    133: 8230,
    134: 8224,
    135: 8225,
    136: 710,
    137: 8240,
    138: 352,
    139: 8249,
    140: 338,
    142: 381,
    145: 8216,
    146: 8217,
    147: 8220,
    148: 8221,
    149: 8226,
    150: 8211,
    151: 8212,
    152: 732,
    153: 8482,
    154: 353,
    155: 8250,
    156: 339,
    158: 382,
    159: 376
};
var Hb = Q && Q.__importDefault || function(n) {
    return n && n.__esModule ? n : {
        default: n
    }
};
Object.defineProperty(Tr, "__esModule", {
    value: !0
});
var ga = Hb(jb),
    Vb = String.fromCodePoint || function(n) {
        var t = "";
        return n > 65535 && (n -= 65536, t += String.fromCharCode(n >>> 10 & 1023 | 55296), n = 56320 | n & 1023), t += String.fromCharCode(n), t
    };

function zb(n) {
    return n >= 55296 && n <= 57343 || n > 1114111 ? "�" : (n in ga.default && (n = ga.default[n]), Vb(n))
}
Tr.default = zb;
const Wb = "Á",
    Gb = "á",
    Jb = "Ă",
    Yb = "ă",
    Kb = "∾",
    Xb = "∿",
    Qb = "∾̳",
    Zb = "Â",
    t_ = "â",
    e_ = "´",
    n_ = "А",
    s_ = "а",
    r_ = "Æ",
    o_ = "æ",
    i_ = "⁡",
    a_ = "𝔄",
    c_ = "𝔞",
    l_ = "À",
    u_ = "à",
    d_ = "ℵ",
    h_ = "ℵ",
    p_ = "Α",
    f_ = "α",
    m_ = "Ā",
    g_ = "ā",
    b_ = "⨿",
    __ = "&",
    y_ = "&",
    w_ = "⩕",
    v_ = "⩓",
    S_ = "∧",
    C_ = "⩜",
    x_ = "⩘",
    N_ = "⩚",
    k_ = "∠",
    E_ = "⦤",
    T_ = "∠",
    P_ = "⦨",
    A_ = "⦩",
    L_ = "⦪",
    I_ = "⦫",
    O_ = "⦬",
    M_ = "⦭",
    D_ = "⦮",
    R_ = "⦯",
    $_ = "∡",
    q_ = "∟",
    B_ = "⊾",
    U_ = "⦝",
    F_ = "∢",
    j_ = "Å",
    H_ = "⍼",
    V_ = "Ą",
    z_ = "ą",
    W_ = "𝔸",
    G_ = "𝕒",
    J_ = "⩯",
    Y_ = "≈",
    K_ = "⩰",
    X_ = "≊",
    Q_ = "≋",
    Z_ = "'",
    ty = "⁡",
    ey = "≈",
    ny = "≊",
    sy = "Å",
    ry = "å",
    oy = "𝒜",
    iy = "𝒶",
    ay = "≔",
    cy = "*",
    ly = "≈",
    uy = "≍",
    dy = "Ã",
    hy = "ã",
    py = "Ä",
    fy = "ä",
    my = "∳",
    gy = "⨑",
    by = "≌",
    _y = "϶",
    yy = "‵",
    wy = "∽",
    vy = "⋍",
    Sy = "∖",
    Cy = "⫧",
    xy = "⊽",
    Ny = "⌅",
    ky = "⌆",
    Ey = "⌅",
    Ty = "⎵",
    Py = "⎶",
    Ay = "≌",
    Ly = "Б",
    Iy = "б",
    Oy = "„",
    My = "∵",
    Dy = "∵",
    Ry = "∵",
    $y = "⦰",
    qy = "϶",
    By = "ℬ",
    Uy = "ℬ",
    Fy = "Β",
    jy = "β",
    Hy = "ℶ",
    Vy = "≬",
    zy = "𝔅",
    Wy = "𝔟",
    Gy = "⋂",
    Jy = "◯",
    Yy = "⋃",
    Ky = "⨀",
    Xy = "⨁",
    Qy = "⨂",
    Zy = "⨆",
    tw = "★",
    ew = "▽",
    nw = "△",
    sw = "⨄",
    rw = "⋁",
    ow = "⋀",
    iw = "⤍",
    aw = "⧫",
    cw = "▪",
    lw = "▴",
    uw = "▾",
    dw = "◂",
    hw = "▸",
    pw = "␣",
    fw = "▒",
    mw = "░",
    gw = "▓",
    bw = "█",
    _w = "=⃥",
    yw = "≡⃥",
    ww = "⫭",
    vw = "⌐",
    Sw = "𝔹",
    Cw = "𝕓",
    xw = "⊥",
    Nw = "⊥",
    kw = "⋈",
    Ew = "⧉",
    Tw = "┐",
    Pw = "╕",
    Aw = "╖",
    Lw = "╗",
    Iw = "┌",
    Ow = "╒",
    Mw = "╓",
    Dw = "╔",
    Rw = "─",
    $w = "═",
    qw = "┬",
    Bw = "╤",
    Uw = "╥",
    Fw = "╦",
    jw = "┴",
    Hw = "╧",
    Vw = "╨",
    zw = "╩",
    Ww = "⊟",
    Gw = "⊞",
    Jw = "⊠",
    Yw = "┘",
    Kw = "╛",
    Xw = "╜",
    Qw = "╝",
    Zw = "└",
    tv = "╘",
    ev = "╙",
    nv = "╚",
    sv = "│",
    rv = "║",
    ov = "┼",
    iv = "╪",
    av = "╫",
    cv = "╬",
    lv = "┤",
    uv = "╡",
    dv = "╢",
    hv = "╣",
    pv = "├",
    fv = "╞",
    mv = "╟",
    gv = "╠",
    bv = "‵",
    _v = "˘",
    yv = "˘",
    wv = "¦",
    vv = "𝒷",
    Sv = "ℬ",
    Cv = "⁏",
    xv = "∽",
    Nv = "⋍",
    kv = "⧅",
    Ev = "\\",
    Tv = "⟈",
    Pv = "•",
    Av = "•",
    Lv = "≎",
    Iv = "⪮",
    Ov = "≏",
    Mv = "≎",
    Dv = "≏",
    Rv = "Ć",
    $v = "ć",
    qv = "⩄",
    Bv = "⩉",
    Uv = "⩋",
    Fv = "∩",
    jv = "⋒",
    Hv = "⩇",
    Vv = "⩀",
    zv = "ⅅ",
    Wv = "∩︀",
    Gv = "⁁",
    Jv = "ˇ",
    Yv = "ℭ",
    Kv = "⩍",
    Xv = "Č",
    Qv = "č",
    Zv = "Ç",
    t1 = "ç",
    e1 = "Ĉ",
    n1 = "ĉ",
    s1 = "∰",
    r1 = "⩌",
    o1 = "⩐",
    i1 = "Ċ",
    a1 = "ċ",
    c1 = "¸",
    l1 = "¸",
    u1 = "⦲",
    d1 = "¢",
    h1 = "·",
    p1 = "·",
    f1 = "𝔠",
    m1 = "ℭ",
    g1 = "Ч",
    b1 = "ч",
    _1 = "✓",
    y1 = "✓",
    w1 = "Χ",
    v1 = "χ",
    S1 = "ˆ",
    C1 = "≗",
    x1 = "↺",
    N1 = "↻",
    k1 = "⊛",
    E1 = "⊚",
    T1 = "⊝",
    P1 = "⊙",
    A1 = "®",
    L1 = "Ⓢ",
    I1 = "⊖",
    O1 = "⊕",
    M1 = "⊗",
    D1 = "○",
    R1 = "⧃",
    $1 = "≗",
    q1 = "⨐",
    B1 = "⫯",
    U1 = "⧂",
    F1 = "∲",
    j1 = "”",
    H1 = "’",
    V1 = "♣",
    z1 = "♣",
    W1 = ":",
    G1 = "∷",
    J1 = "⩴",
    Y1 = "≔",
    K1 = "≔",
    X1 = ",",
    Q1 = "@",
    Z1 = "∁",
    tS = "∘",
    eS = "∁",
    nS = "ℂ",
    sS = "≅",
    rS = "⩭",
    oS = "≡",
    iS = "∮",
    aS = "∯",
    cS = "∮",
    lS = "𝕔",
    uS = "ℂ",
    dS = "∐",
    hS = "∐",
    pS = "©",
    fS = "©",
    mS = "℗",
    gS = "∳",
    bS = "↵",
    _S = "✗",
    yS = "⨯",
    wS = "𝒞",
    vS = "𝒸",
    SS = "⫏",
    CS = "⫑",
    xS = "⫐",
    NS = "⫒",
    kS = "⋯",
    ES = "⤸",
    TS = "⤵",
    PS = "⋞",
    AS = "⋟",
    LS = "↶",
    IS = "⤽",
    OS = "⩈",
    MS = "⩆",
    DS = "≍",
    RS = "∪",
    $S = "⋓",
    qS = "⩊",
    BS = "⊍",
    US = "⩅",
    FS = "∪︀",
    jS = "↷",
    HS = "⤼",
    VS = "⋞",
    zS = "⋟",
    WS = "⋎",
    GS = "⋏",
    JS = "¤",
    YS = "↶",
    KS = "↷",
    XS = "⋎",
    QS = "⋏",
    ZS = "∲",
    tC = "∱",
    eC = "⌭",
    nC = "†",
    sC = "‡",
    rC = "ℸ",
    oC = "↓",
    iC = "↡",
    aC = "⇓",
    cC = "‐",
    lC = "⫤",
    uC = "⊣",
    dC = "⤏",
    hC = "˝",
    pC = "Ď",
    fC = "ď",
    mC = "Д",
    gC = "д",
    bC = "‡",
    _C = "⇊",
    yC = "ⅅ",
    wC = "ⅆ",
    vC = "⤑",
    SC = "⩷",
    CC = "°",
    xC = "∇",
    NC = "Δ",
    kC = "δ",
    EC = "⦱",
    TC = "⥿",
    PC = "𝔇",
    AC = "𝔡",
    LC = "⥥",
    IC = "⇃",
    OC = "⇂",
    MC = "´",
    DC = "˙",
    RC = "˝",
    $C = "`",
    qC = "˜",
    BC = "⋄",
    UC = "⋄",
    FC = "⋄",
    jC = "♦",
    HC = "♦",
    VC = "¨",
    zC = "ⅆ",
    WC = "ϝ",
    GC = "⋲",
    JC = "÷",
    YC = "÷",
    KC = "⋇",
    XC = "⋇",
    QC = "Ђ",
    ZC = "ђ",
    t0 = "⌞",
    e0 = "⌍",
    n0 = "$",
    s0 = "𝔻",
    r0 = "𝕕",
    o0 = "¨",
    i0 = "˙",
    a0 = "⃜",
    c0 = "≐",
    l0 = "≑",
    u0 = "≐",
    d0 = "∸",
    h0 = "∔",
    p0 = "⊡",
    f0 = "⌆",
    m0 = "∯",
    g0 = "¨",
    b0 = "⇓",
    _0 = "⇐",
    y0 = "⇔",
    w0 = "⫤",
    v0 = "⟸",
    S0 = "⟺",
    C0 = "⟹",
    x0 = "⇒",
    N0 = "⊨",
    k0 = "⇑",
    E0 = "⇕",
    T0 = "∥",
    P0 = "⤓",
    A0 = "↓",
    L0 = "↓",
    I0 = "⇓",
    O0 = "⇵",
    M0 = "̑",
    D0 = "⇊",
    R0 = "⇃",
    $0 = "⇂",
    q0 = "⥐",
    B0 = "⥞",
    U0 = "⥖",
    F0 = "↽",
    j0 = "⥟",
    H0 = "⥗",
    V0 = "⇁",
    z0 = "↧",
    W0 = "⊤",
    G0 = "⤐",
    J0 = "⌟",
    Y0 = "⌌",
    K0 = "𝒟",
    X0 = "𝒹",
    Q0 = "Ѕ",
    Z0 = "ѕ",
    tx = "⧶",
    ex = "Đ",
    nx = "đ",
    sx = "⋱",
    rx = "▿",
    ox = "▾",
    ix = "⇵",
    ax = "⥯",
    cx = "⦦",
    lx = "Џ",
    ux = "џ",
    dx = "⟿",
    hx = "É",
    px = "é",
    fx = "⩮",
    mx = "Ě",
    gx = "ě",
    bx = "Ê",
    _x = "ê",
    yx = "≖",
    wx = "≕",
    vx = "Э",
    Sx = "э",
    Cx = "⩷",
    xx = "Ė",
    Nx = "ė",
    kx = "≑",
    Ex = "ⅇ",
    Tx = "≒",
    Px = "𝔈",
    Ax = "𝔢",
    Lx = "⪚",
    Ix = "È",
    Ox = "è",
    Mx = "⪖",
    Dx = "⪘",
    Rx = "⪙",
    $x = "∈",
    qx = "⏧",
    Bx = "ℓ",
    Ux = "⪕",
    Fx = "⪗",
    jx = "Ē",
    Hx = "ē",
    Vx = "∅",
    zx = "∅",
    Wx = "◻",
    Gx = "∅",
    Jx = "▫",
    Yx = " ",
    Kx = " ",
    Xx = " ",
    Qx = "Ŋ",
    Zx = "ŋ",
    tN = " ",
    eN = "Ę",
    nN = "ę",
    sN = "𝔼",
    rN = "𝕖",
    oN = "⋕",
    iN = "⧣",
    aN = "⩱",
    cN = "ε",
    lN = "Ε",
    uN = "ε",
    dN = "ϵ",
    hN = "≖",
    pN = "≕",
    fN = "≂",
    mN = "⪖",
    gN = "⪕",
    bN = "⩵",
    _N = "=",
    yN = "≂",
    wN = "≟",
    vN = "⇌",
    SN = "≡",
    CN = "⩸",
    xN = "⧥",
    NN = "⥱",
    kN = "≓",
    EN = "ℯ",
    TN = "ℰ",
    PN = "≐",
    AN = "⩳",
    LN = "≂",
    IN = "Η",
    ON = "η",
    MN = "Ð",
    DN = "ð",
    RN = "Ë",
    $N = "ë",
    qN = "€",
    BN = "!",
    UN = "∃",
    FN = "∃",
    jN = "ℰ",
    HN = "ⅇ",
    VN = "ⅇ",
    zN = "≒",
    WN = "Ф",
    GN = "ф",
    JN = "♀",
    YN = "ﬃ",
    KN = "ﬀ",
    XN = "ﬄ",
    QN = "𝔉",
    ZN = "𝔣",
    tk = "ﬁ",
    ek = "◼",
    nk = "▪",
    sk = "fj",
    rk = "♭",
    ok = "ﬂ",
    ik = "▱",
    ak = "ƒ",
    ck = "𝔽",
    lk = "𝕗",
    uk = "∀",
    dk = "∀",
    hk = "⋔",
    pk = "⫙",
    fk = "ℱ",
    mk = "⨍",
    gk = "½",
    bk = "⅓",
    _k = "¼",
    yk = "⅕",
    wk = "⅙",
    vk = "⅛",
    Sk = "⅔",
    Ck = "⅖",
    xk = "¾",
    Nk = "⅗",
    kk = "⅜",
    Ek = "⅘",
    Tk = "⅚",
    Pk = "⅝",
    Ak = "⅞",
    Lk = "⁄",
    Ik = "⌢",
    Ok = "𝒻",
    Mk = "ℱ",
    Dk = "ǵ",
    Rk = "Γ",
    $k = "γ",
    qk = "Ϝ",
    Bk = "ϝ",
    Uk = "⪆",
    Fk = "Ğ",
    jk = "ğ",
    Hk = "Ģ",
    Vk = "Ĝ",
    zk = "ĝ",
    Wk = "Г",
    Gk = "г",
    Jk = "Ġ",
    Yk = "ġ",
    Kk = "≥",
    Xk = "≧",
    Qk = "⪌",
    Zk = "⋛",
    tE = "≥",
    eE = "≧",
    nE = "⩾",
    sE = "⪩",
    rE = "⩾",
    oE = "⪀",
    iE = "⪂",
    aE = "⪄",
    cE = "⋛︀",
    lE = "⪔",
    uE = "𝔊",
    dE = "𝔤",
    hE = "≫",
    pE = "⋙",
    fE = "⋙",
    mE = "ℷ",
    gE = "Ѓ",
    bE = "ѓ",
    _E = "⪥",
    yE = "≷",
    wE = "⪒",
    vE = "⪤",
    SE = "⪊",
    CE = "⪊",
    xE = "⪈",
    NE = "≩",
    kE = "⪈",
    EE = "≩",
    TE = "⋧",
    PE = "𝔾",
    AE = "𝕘",
    LE = "`",
    IE = "≥",
    OE = "⋛",
    ME = "≧",
    DE = "⪢",
    RE = "≷",
    $E = "⩾",
    qE = "≳",
    BE = "𝒢",
    UE = "ℊ",
    FE = "≳",
    jE = "⪎",
    HE = "⪐",
    VE = "⪧",
    zE = "⩺",
    WE = ">",
    GE = ">",
    JE = "≫",
    YE = "⋗",
    KE = "⦕",
    XE = "⩼",
    QE = "⪆",
    ZE = "⥸",
    tT = "⋗",
    eT = "⋛",
    nT = "⪌",
    sT = "≷",
    rT = "≳",
    oT = "≩︀",
    iT = "≩︀",
    aT = "ˇ",
    cT = " ",
    lT = "½",
    uT = "ℋ",
    dT = "Ъ",
    hT = "ъ",
    pT = "⥈",
    fT = "↔",
    mT = "⇔",
    gT = "↭",
    bT = "^",
    _T = "ℏ",
    yT = "Ĥ",
    wT = "ĥ",
    vT = "♥",
    ST = "♥",
    CT = "…",
    xT = "⊹",
    NT = "𝔥",
    kT = "ℌ",
    ET = "ℋ",
    TT = "⤥",
    PT = "⤦",
    AT = "⇿",
    LT = "∻",
    IT = "↩",
    OT = "↪",
    MT = "𝕙",
    DT = "ℍ",
    RT = "―",
    $T = "─",
    qT = "𝒽",
    BT = "ℋ",
    UT = "ℏ",
    FT = "Ħ",
    jT = "ħ",
    HT = "≎",
    VT = "≏",
    zT = "⁃",
    WT = "‐",
    GT = "Í",
    JT = "í",
    YT = "⁣",
    KT = "Î",
    XT = "î",
    QT = "И",
    ZT = "и",
    t2 = "İ",
    e2 = "Е",
    n2 = "е",
    s2 = "¡",
    r2 = "⇔",
    o2 = "𝔦",
    i2 = "ℑ",
    a2 = "Ì",
    c2 = "ì",
    l2 = "ⅈ",
    u2 = "⨌",
    d2 = "∭",
    h2 = "⧜",
    p2 = "℩",
    f2 = "Ĳ",
    m2 = "ĳ",
    g2 = "Ī",
    b2 = "ī",
    _2 = "ℑ",
    y2 = "ⅈ",
    w2 = "ℐ",
    v2 = "ℑ",
    S2 = "ı",
    C2 = "ℑ",
    x2 = "⊷",
    N2 = "Ƶ",
    k2 = "⇒",
    E2 = "℅",
    T2 = "∞",
    P2 = "⧝",
    A2 = "ı",
    L2 = "⊺",
    I2 = "∫",
    O2 = "∬",
    M2 = "ℤ",
    D2 = "∫",
    R2 = "⊺",
    $2 = "⋂",
    q2 = "⨗",
    B2 = "⨼",
    U2 = "⁣",
    F2 = "⁢",
    j2 = "Ё",
    H2 = "ё",
    V2 = "Į",
    z2 = "į",
    W2 = "𝕀",
    G2 = "𝕚",
    J2 = "Ι",
    Y2 = "ι",
    K2 = "⨼",
    X2 = "¿",
    Q2 = "𝒾",
    Z2 = "ℐ",
    tP = "∈",
    eP = "⋵",
    nP = "⋹",
    sP = "⋴",
    rP = "⋳",
    oP = "∈",
    iP = "⁢",
    aP = "Ĩ",
    cP = "ĩ",
    lP = "І",
    uP = "і",
    dP = "Ï",
    hP = "ï",
    pP = "Ĵ",
    fP = "ĵ",
    mP = "Й",
    gP = "й",
    bP = "𝔍",
    _P = "𝔧",
    yP = "ȷ",
    wP = "𝕁",
    vP = "𝕛",
    SP = "𝒥",
    CP = "𝒿",
    xP = "Ј",
    NP = "ј",
    kP = "Є",
    EP = "є",
    TP = "Κ",
    PP = "κ",
    AP = "ϰ",
    LP = "Ķ",
    IP = "ķ",
    OP = "К",
    MP = "к",
    DP = "𝔎",
    RP = "𝔨",
    $P = "ĸ",
    qP = "Х",
    BP = "х",
    UP = "Ќ",
    FP = "ќ",
    jP = "𝕂",
    HP = "𝕜",
    VP = "𝒦",
    zP = "𝓀",
    WP = "⇚",
    GP = "Ĺ",
    JP = "ĺ",
    YP = "⦴",
    KP = "ℒ",
    XP = "Λ",
    QP = "λ",
    ZP = "⟨",
    tA = "⟪",
    eA = "⦑",
    nA = "⟨",
    sA = "⪅",
    rA = "ℒ",
    oA = "«",
    iA = "⇤",
    aA = "⤟",
    cA = "←",
    lA = "↞",
    uA = "⇐",
    dA = "⤝",
    hA = "↩",
    pA = "↫",
    fA = "⤹",
    mA = "⥳",
    gA = "↢",
    bA = "⤙",
    _A = "⤛",
    yA = "⪫",
    wA = "⪭",
    vA = "⪭︀",
    SA = "⤌",
    CA = "⤎",
    xA = "❲",
    NA = "{",
    kA = "[",
    EA = "⦋",
    TA = "⦏",
    PA = "⦍",
    AA = "Ľ",
    LA = "ľ",
    IA = "Ļ",
    OA = "ļ",
    MA = "⌈",
    DA = "{",
    RA = "Л",
    $A = "л",
    qA = "⤶",
    BA = "“",
    UA = "„",
    FA = "⥧",
    jA = "⥋",
    HA = "↲",
    VA = "≤",
    zA = "≦",
    WA = "⟨",
    GA = "⇤",
    JA = "←",
    YA = "←",
    KA = "⇐",
    XA = "⇆",
    QA = "↢",
    ZA = "⌈",
    tL = "⟦",
    eL = "⥡",
    nL = "⥙",
    sL = "⇃",
    rL = "⌊",
    oL = "↽",
    iL = "↼",
    aL = "⇇",
    cL = "↔",
    lL = "↔",
    uL = "⇔",
    dL = "⇆",
    hL = "⇋",
    pL = "↭",
    fL = "⥎",
    mL = "↤",
    gL = "⊣",
    bL = "⥚",
    _L = "⋋",
    yL = "⧏",
    wL = "⊲",
    vL = "⊴",
    SL = "⥑",
    CL = "⥠",
    xL = "⥘",
    NL = "↿",
    kL = "⥒",
    EL = "↼",
    TL = "⪋",
    PL = "⋚",
    AL = "≤",
    LL = "≦",
    IL = "⩽",
    OL = "⪨",
    ML = "⩽",
    DL = "⩿",
    RL = "⪁",
    $L = "⪃",
    qL = "⋚︀",
    BL = "⪓",
    UL = "⪅",
    FL = "⋖",
    jL = "⋚",
    HL = "⪋",
    VL = "⋚",
    zL = "≦",
    WL = "≶",
    GL = "≶",
    JL = "⪡",
    YL = "≲",
    KL = "⩽",
    XL = "≲",
    QL = "⥼",
    ZL = "⌊",
    tI = "𝔏",
    eI = "𝔩",
    nI = "≶",
    sI = "⪑",
    rI = "⥢",
    oI = "↽",
    iI = "↼",
    aI = "⥪",
    cI = "▄",
    lI = "Љ",
    uI = "љ",
    dI = "⇇",
    hI = "≪",
    pI = "⋘",
    fI = "⌞",
    mI = "⇚",
    gI = "⥫",
    bI = "◺",
    _I = "Ŀ",
    yI = "ŀ",
    wI = "⎰",
    vI = "⎰",
    SI = "⪉",
    CI = "⪉",
    xI = "⪇",
    NI = "≨",
    kI = "⪇",
    EI = "≨",
    TI = "⋦",
    PI = "⟬",
    AI = "⇽",
    LI = "⟦",
    II = "⟵",
    OI = "⟵",
    MI = "⟸",
    DI = "⟷",
    RI = "⟷",
    $I = "⟺",
    qI = "⟼",
    BI = "⟶",
    UI = "⟶",
    FI = "⟹",
    jI = "↫",
    HI = "↬",
    VI = "⦅",
    zI = "𝕃",
    WI = "𝕝",
    GI = "⨭",
    JI = "⨴",
    YI = "∗",
    KI = "_",
    XI = "↙",
    QI = "↘",
    ZI = "◊",
    tO = "◊",
    eO = "⧫",
    nO = "(",
    sO = "⦓",
    rO = "⇆",
    oO = "⌟",
    iO = "⇋",
    aO = "⥭",
    cO = "‎",
    lO = "⊿",
    uO = "‹",
    dO = "𝓁",
    hO = "ℒ",
    pO = "↰",
    fO = "↰",
    mO = "≲",
    gO = "⪍",
    bO = "⪏",
    _O = "[",
    yO = "‘",
    wO = "‚",
    vO = "Ł",
    SO = "ł",
    CO = "⪦",
    xO = "⩹",
    NO = "<",
    kO = "<",
    EO = "≪",
    TO = "⋖",
    PO = "⋋",
    AO = "⋉",
    LO = "⥶",
    IO = "⩻",
    OO = "◃",
    MO = "⊴",
    DO = "◂",
    RO = "⦖",
    $O = "⥊",
    qO = "⥦",
    BO = "≨︀",
    UO = "≨︀",
    FO = "¯",
    jO = "♂",
    HO = "✠",
    VO = "✠",
    zO = "↦",
    WO = "↦",
    GO = "↧",
    JO = "↤",
    YO = "↥",
    KO = "▮",
    XO = "⨩",
    QO = "М",
    ZO = "м",
    tM = "—",
    eM = "∺",
    nM = "∡",
    sM = " ",
    rM = "ℳ",
    oM = "𝔐",
    iM = "𝔪",
    aM = "℧",
    cM = "µ",
    lM = "*",
    uM = "⫰",
    dM = "∣",
    hM = "·",
    pM = "⊟",
    fM = "−",
    mM = "∸",
    gM = "⨪",
    bM = "∓",
    _M = "⫛",
    yM = "…",
    wM = "∓",
    vM = "⊧",
    SM = "𝕄",
    CM = "𝕞",
    xM = "∓",
    NM = "𝓂",
    kM = "ℳ",
    EM = "∾",
    TM = "Μ",
    PM = "μ",
    AM = "⊸",
    LM = "⊸",
    IM = "∇",
    OM = "Ń",
    MM = "ń",
    DM = "∠⃒",
    RM = "≉",
    $M = "⩰̸",
    qM = "≋̸",
    BM = "ŉ",
    UM = "≉",
    FM = "♮",
    jM = "ℕ",
    HM = "♮",
    VM = " ",
    zM = "≎̸",
    WM = "≏̸",
    GM = "⩃",
    JM = "Ň",
    YM = "ň",
    KM = "Ņ",
    XM = "ņ",
    QM = "≇",
    ZM = "⩭̸",
    tD = "⩂",
    eD = "Н",
    nD = "н",
    sD = "–",
    rD = "⤤",
    oD = "↗",
    iD = "⇗",
    aD = "↗",
    cD = "≠",
    lD = "≐̸",
    uD = "​",
    dD = "​",
    hD = "​",
    pD = "​",
    fD = "≢",
    mD = "⤨",
    gD = "≂̸",
    bD = "≫",
    _D = "≪",
    yD = `
`,
    wD = "∄",
    vD = "∄",
    SD = "𝔑",
    CD = "𝔫",
    xD = "≧̸",
    ND = "≱",
    kD = "≱",
    ED = "≧̸",
    TD = "⩾̸",
    PD = "⩾̸",
    AD = "⋙̸",
    LD = "≵",
    ID = "≫⃒",
    OD = "≯",
    MD = "≯",
    DD = "≫̸",
    RD = "↮",
    $D = "⇎",
    qD = "⫲",
    BD = "∋",
    UD = "⋼",
    FD = "⋺",
    jD = "∋",
    HD = "Њ",
    VD = "њ",
    zD = "↚",
    WD = "⇍",
    GD = "‥",
    JD = "≦̸",
    YD = "≰",
    KD = "↚",
    XD = "⇍",
    QD = "↮",
    ZD = "⇎",
    tR = "≰",
    eR = "≦̸",
    nR = "⩽̸",
    sR = "⩽̸",
    rR = "≮",
    oR = "⋘̸",
    iR = "≴",
    aR = "≪⃒",
    cR = "≮",
    lR = "⋪",
    uR = "⋬",
    dR = "≪̸",
    hR = "∤",
    pR = "⁠",
    fR = " ",
    mR = "𝕟",
    gR = "ℕ",
    bR = "⫬",
    _R = "¬",
    yR = "≢",
    wR = "≭",
    vR = "∦",
    SR = "∉",
    CR = "≠",
    xR = "≂̸",
    NR = "∄",
    kR = "≯",
    ER = "≱",
    TR = "≧̸",
    PR = "≫̸",
    AR = "≹",
    LR = "⩾̸",
    IR = "≵",
    OR = "≎̸",
    MR = "≏̸",
    DR = "∉",
    RR = "⋵̸",
    $R = "⋹̸",
    qR = "∉",
    BR = "⋷",
    UR = "⋶",
    FR = "⧏̸",
    jR = "⋪",
    HR = "⋬",
    VR = "≮",
    zR = "≰",
    WR = "≸",
    GR = "≪̸",
    JR = "⩽̸",
    YR = "≴",
    KR = "⪢̸",
    XR = "⪡̸",
    QR = "∌",
    ZR = "∌",
    t4 = "⋾",
    e4 = "⋽",
    n4 = "⊀",
    s4 = "⪯̸",
    r4 = "⋠",
    o4 = "∌",
    i4 = "⧐̸",
    a4 = "⋫",
    c4 = "⋭",
    l4 = "⊏̸",
    u4 = "⋢",
    d4 = "⊐̸",
    h4 = "⋣",
    p4 = "⊂⃒",
    f4 = "⊈",
    m4 = "⊁",
    g4 = "⪰̸",
    b4 = "⋡",
    _4 = "≿̸",
    y4 = "⊃⃒",
    w4 = "⊉",
    v4 = "≁",
    S4 = "≄",
    C4 = "≇",
    x4 = "≉",
    N4 = "∤",
    k4 = "∦",
    E4 = "∦",
    T4 = "⫽⃥",
    P4 = "∂̸",
    A4 = "⨔",
    L4 = "⊀",
    I4 = "⋠",
    O4 = "⊀",
    M4 = "⪯̸",
    D4 = "⪯̸",
    R4 = "⤳̸",
    $4 = "↛",
    q4 = "⇏",
    B4 = "↝̸",
    U4 = "↛",
    F4 = "⇏",
    j4 = "⋫",
    H4 = "⋭",
    V4 = "⊁",
    z4 = "⋡",
    W4 = "⪰̸",
    G4 = "𝒩",
    J4 = "𝓃",
    Y4 = "∤",
    K4 = "∦",
    X4 = "≁",
    Q4 = "≄",
    Z4 = "≄",
    t3 = "∤",
    e3 = "∦",
    n3 = "⋢",
    s3 = "⋣",
    r3 = "⊄",
    o3 = "⫅̸",
    i3 = "⊈",
    a3 = "⊂⃒",
    c3 = "⊈",
    l3 = "⫅̸",
    u3 = "⊁",
    d3 = "⪰̸",
    h3 = "⊅",
    p3 = "⫆̸",
    f3 = "⊉",
    m3 = "⊃⃒",
    g3 = "⊉",
    b3 = "⫆̸",
    _3 = "≹",
    y3 = "Ñ",
    w3 = "ñ",
    v3 = "≸",
    S3 = "⋪",
    C3 = "⋬",
    x3 = "⋫",
    N3 = "⋭",
    k3 = "Ν",
    E3 = "ν",
    T3 = "#",
    P3 = "№",
    A3 = " ",
    L3 = "≍⃒",
    I3 = "⊬",
    O3 = "⊭",
    M3 = "⊮",
    D3 = "⊯",
    R3 = "≥⃒",
    $3 = ">⃒",
    q3 = "⤄",
    B3 = "⧞",
    U3 = "⤂",
    F3 = "≤⃒",
    j3 = "<⃒",
    H3 = "⊴⃒",
    V3 = "⤃",
    z3 = "⊵⃒",
    W3 = "∼⃒",
    G3 = "⤣",
    J3 = "↖",
    Y3 = "⇖",
    K3 = "↖",
    X3 = "⤧",
    Q3 = "Ó",
    Z3 = "ó",
    t5 = "⊛",
    e5 = "Ô",
    n5 = "ô",
    s5 = "⊚",
    r5 = "О",
    o5 = "о",
    i5 = "⊝",
    a5 = "Ő",
    c5 = "ő",
    l5 = "⨸",
    u5 = "⊙",
    d5 = "⦼",
    h5 = "Œ",
    p5 = "œ",
    f5 = "⦿",
    m5 = "𝔒",
    g5 = "𝔬",
    b5 = "˛",
    _5 = "Ò",
    y5 = "ò",
    w5 = "⧁",
    v5 = "⦵",
    S5 = "Ω",
    C5 = "∮",
    x5 = "↺",
    N5 = "⦾",
    k5 = "⦻",
    E5 = "‾",
    T5 = "⧀",
    P5 = "Ō",
    A5 = "ō",
    L5 = "Ω",
    I5 = "ω",
    O5 = "Ο",
    M5 = "ο",
    D5 = "⦶",
    R5 = "⊖",
    $5 = "𝕆",
    q5 = "𝕠",
    B5 = "⦷",
    U5 = "“",
    F5 = "‘",
    j5 = "⦹",
    H5 = "⊕",
    V5 = "↻",
    z5 = "⩔",
    W5 = "∨",
    G5 = "⩝",
    J5 = "ℴ",
    Y5 = "ℴ",
    K5 = "ª",
    X5 = "º",
    Q5 = "⊶",
    Z5 = "⩖",
    t8 = "⩗",
    e8 = "⩛",
    n8 = "Ⓢ",
    s8 = "𝒪",
    r8 = "ℴ",
    o8 = "Ø",
    i8 = "ø",
    a8 = "⊘",
    c8 = "Õ",
    l8 = "õ",
    u8 = "⨶",
    d8 = "⨷",
    h8 = "⊗",
    p8 = "Ö",
    f8 = "ö",
    m8 = "⌽",
    g8 = "‾",
    b8 = "⏞",
    _8 = "⎴",
    y8 = "⏜",
    w8 = "¶",
    v8 = "∥",
    S8 = "∥",
    C8 = "⫳",
    x8 = "⫽",
    N8 = "∂",
    k8 = "∂",
    E8 = "П",
    T8 = "п",
    P8 = "%",
    A8 = ".",
    L8 = "‰",
    I8 = "⊥",
    O8 = "‱",
    M8 = "𝔓",
    D8 = "𝔭",
    R8 = "Φ",
    $8 = "φ",
    q8 = "ϕ",
    B8 = "ℳ",
    U8 = "☎",
    F8 = "Π",
    j8 = "π",
    H8 = "⋔",
    V8 = "ϖ",
    z8 = "ℏ",
    W8 = "ℎ",
    G8 = "ℏ",
    J8 = "⨣",
    Y8 = "⊞",
    K8 = "⨢",
    X8 = "+",
    Q8 = "∔",
    Z8 = "⨥",
    t$ = "⩲",
    e$ = "±",
    n$ = "±",
    s$ = "⨦",
    r$ = "⨧",
    o$ = "±",
    i$ = "ℌ",
    a$ = "⨕",
    c$ = "𝕡",
    l$ = "ℙ",
    u$ = "£",
    d$ = "⪷",
    h$ = "⪻",
    p$ = "≺",
    f$ = "≼",
    m$ = "⪷",
    g$ = "≺",
    b$ = "≼",
    _$ = "≺",
    y$ = "⪯",
    w$ = "≼",
    v$ = "≾",
    S$ = "⪯",
    C$ = "⪹",
    x$ = "⪵",
    N$ = "⋨",
    k$ = "⪯",
    E$ = "⪳",
    T$ = "≾",
    P$ = "′",
    A$ = "″",
    L$ = "ℙ",
    I$ = "⪹",
    O$ = "⪵",
    M$ = "⋨",
    D$ = "∏",
    R$ = "∏",
    $$ = "⌮",
    q$ = "⌒",
    B$ = "⌓",
    U$ = "∝",
    F$ = "∝",
    j$ = "∷",
    H$ = "∝",
    V$ = "≾",
    z$ = "⊰",
    W$ = "𝒫",
    G$ = "𝓅",
    J$ = "Ψ",
    Y$ = "ψ",
    K$ = " ",
    X$ = "𝔔",
    Q$ = "𝔮",
    Z$ = "⨌",
    t6 = "𝕢",
    e6 = "ℚ",
    n6 = "⁗",
    s6 = "𝒬",
    r6 = "𝓆",
    o6 = "ℍ",
    i6 = "⨖",
    a6 = "?",
    c6 = "≟",
    l6 = '"',
    u6 = '"',
    d6 = "⇛",
    h6 = "∽̱",
    p6 = "Ŕ",
    f6 = "ŕ",
    m6 = "√",
    g6 = "⦳",
    b6 = "⟩",
    _6 = "⟫",
    y6 = "⦒",
    w6 = "⦥",
    v6 = "⟩",
    S6 = "»",
    C6 = "⥵",
    x6 = "⇥",
    N6 = "⤠",
    k6 = "⤳",
    E6 = "→",
    T6 = "↠",
    P6 = "⇒",
    A6 = "⤞",
    L6 = "↪",
    I6 = "↬",
    O6 = "⥅",
    M6 = "⥴",
    D6 = "⤖",
    R6 = "↣",
    $6 = "↝",
    q6 = "⤚",
    B6 = "⤜",
    U6 = "∶",
    F6 = "ℚ",
    j6 = "⤍",
    H6 = "⤏",
    V6 = "⤐",
    z6 = "❳",
    W6 = "}",
    G6 = "]",
    J6 = "⦌",
    Y6 = "⦎",
    K6 = "⦐",
    X6 = "Ř",
    Q6 = "ř",
    Z6 = "Ŗ",
    tq = "ŗ",
    eq = "⌉",
    nq = "}",
    sq = "Р",
    rq = "р",
    oq = "⤷",
    iq = "⥩",
    aq = "”",
    cq = "”",
    lq = "↳",
    uq = "ℜ",
    dq = "ℛ",
    hq = "ℜ",
    pq = "ℝ",
    fq = "ℜ",
    mq = "▭",
    gq = "®",
    bq = "®",
    _q = "∋",
    yq = "⇋",
    wq = "⥯",
    vq = "⥽",
    Sq = "⌋",
    Cq = "𝔯",
    xq = "ℜ",
    Nq = "⥤",
    kq = "⇁",
    Eq = "⇀",
    Tq = "⥬",
    Pq = "Ρ",
    Aq = "ρ",
    Lq = "ϱ",
    Iq = "⟩",
    Oq = "⇥",
    Mq = "→",
    Dq = "→",
    Rq = "⇒",
    $q = "⇄",
    qq = "↣",
    Bq = "⌉",
    Uq = "⟧",
    Fq = "⥝",
    jq = "⥕",
    Hq = "⇂",
    Vq = "⌋",
    zq = "⇁",
    Wq = "⇀",
    Gq = "⇄",
    Jq = "⇌",
    Yq = "⇉",
    Kq = "↝",
    Xq = "↦",
    Qq = "⊢",
    Zq = "⥛",
    tB = "⋌",
    eB = "⧐",
    nB = "⊳",
    sB = "⊵",
    rB = "⥏",
    oB = "⥜",
    iB = "⥔",
    aB = "↾",
    cB = "⥓",
    lB = "⇀",
    uB = "˚",
    dB = "≓",
    hB = "⇄",
    pB = "⇌",
    fB = "‏",
    mB = "⎱",
    gB = "⎱",
    bB = "⫮",
    _B = "⟭",
    yB = "⇾",
    wB = "⟧",
    vB = "⦆",
    SB = "𝕣",
    CB = "ℝ",
    xB = "⨮",
    NB = "⨵",
    kB = "⥰",
    EB = ")",
    TB = "⦔",
    PB = "⨒",
    AB = "⇉",
    LB = "⇛",
    IB = "›",
    OB = "𝓇",
    MB = "ℛ",
    DB = "↱",
    RB = "↱",
    $B = "]",
    qB = "’",
    BB = "’",
    UB = "⋌",
    FB = "⋊",
    jB = "▹",
    HB = "⊵",
    VB = "▸",
    zB = "⧎",
    WB = "⧴",
    GB = "⥨",
    JB = "℞",
    YB = "Ś",
    KB = "ś",
    XB = "‚",
    QB = "⪸",
    ZB = "Š",
    tU = "š",
    eU = "⪼",
    nU = "≻",
    sU = "≽",
    rU = "⪰",
    oU = "⪴",
    iU = "Ş",
    aU = "ş",
    cU = "Ŝ",
    lU = "ŝ",
    uU = "⪺",
    dU = "⪶",
    hU = "⋩",
    pU = "⨓",
    fU = "≿",
    mU = "С",
    gU = "с",
    bU = "⊡",
    _U = "⋅",
    yU = "⩦",
    wU = "⤥",
    vU = "↘",
    SU = "⇘",
    CU = "↘",
    xU = "§",
    NU = ";",
    kU = "⤩",
    EU = "∖",
    TU = "∖",
    PU = "✶",
    AU = "𝔖",
    LU = "𝔰",
    IU = "⌢",
    OU = "♯",
    MU = "Щ",
    DU = "щ",
    RU = "Ш",
    $U = "ш",
    qU = "↓",
    BU = "←",
    UU = "∣",
    FU = "∥",
    jU = "→",
    HU = "↑",
    VU = "­",
    zU = "Σ",
    WU = "σ",
    GU = "ς",
    JU = "ς",
    YU = "∼",
    KU = "⩪",
    XU = "≃",
    QU = "≃",
    ZU = "⪞",
    tF = "⪠",
    eF = "⪝",
    nF = "⪟",
    sF = "≆",
    rF = "⨤",
    oF = "⥲",
    iF = "←",
    aF = "∘",
    cF = "∖",
    lF = "⨳",
    uF = "⧤",
    dF = "∣",
    hF = "⌣",
    pF = "⪪",
    fF = "⪬",
    mF = "⪬︀",
    gF = "Ь",
    bF = "ь",
    _F = "⌿",
    yF = "⧄",
    wF = "/",
    vF = "𝕊",
    SF = "𝕤",
    CF = "♠",
    xF = "♠",
    NF = "∥",
    kF = "⊓",
    EF = "⊓︀",
    TF = "⊔",
    PF = "⊔︀",
    AF = "√",
    LF = "⊏",
    IF = "⊑",
    OF = "⊏",
    MF = "⊑",
    DF = "⊐",
    RF = "⊒",
    $F = "⊐",
    qF = "⊒",
    BF = "□",
    UF = "□",
    FF = "⊓",
    jF = "⊏",
    HF = "⊑",
    VF = "⊐",
    zF = "⊒",
    WF = "⊔",
    GF = "▪",
    JF = "□",
    YF = "▪",
    KF = "→",
    XF = "𝒮",
    QF = "𝓈",
    ZF = "∖",
    t7 = "⌣",
    e7 = "⋆",
    n7 = "⋆",
    s7 = "☆",
    r7 = "★",
    o7 = "ϵ",
    i7 = "ϕ",
    a7 = "¯",
    c7 = "⊂",
    l7 = "⋐",
    u7 = "⪽",
    d7 = "⫅",
    h7 = "⊆",
    p7 = "⫃",
    f7 = "⫁",
    m7 = "⫋",
    g7 = "⊊",
    b7 = "⪿",
    _7 = "⥹",
    y7 = "⊂",
    w7 = "⋐",
    v7 = "⊆",
    S7 = "⫅",
    C7 = "⊆",
    x7 = "⊊",
    N7 = "⫋",
    k7 = "⫇",
    E7 = "⫕",
    T7 = "⫓",
    P7 = "⪸",
    A7 = "≻",
    L7 = "≽",
    I7 = "≻",
    O7 = "⪰",
    M7 = "≽",
    D7 = "≿",
    R7 = "⪰",
    $7 = "⪺",
    q7 = "⪶",
    B7 = "⋩",
    U7 = "≿",
    F7 = "∋",
    j7 = "∑",
    H7 = "∑",
    V7 = "♪",
    z7 = "¹",
    W7 = "²",
    G7 = "³",
    J7 = "⊃",
    Y7 = "⋑",
    K7 = "⪾",
    X7 = "⫘",
    Q7 = "⫆",
    Z7 = "⊇",
    tj = "⫄",
    ej = "⊃",
    nj = "⊇",
    sj = "⟉",
    rj = "⫗",
    oj = "⥻",
    ij = "⫂",
    aj = "⫌",
    cj = "⊋",
    lj = "⫀",
    uj = "⊃",
    dj = "⋑",
    hj = "⊇",
    pj = "⫆",
    fj = "⊋",
    mj = "⫌",
    gj = "⫈",
    bj = "⫔",
    _j = "⫖",
    yj = "⤦",
    wj = "↙",
    vj = "⇙",
    Sj = "↙",
    Cj = "⤪",
    xj = "ß",
    Nj = "	",
    kj = "⌖",
    Ej = "Τ",
    Tj = "τ",
    Pj = "⎴",
    Aj = "Ť",
    Lj = "ť",
    Ij = "Ţ",
    Oj = "ţ",
    Mj = "Т",
    Dj = "т",
    Rj = "⃛",
    $j = "⌕",
    qj = "𝔗",
    Bj = "𝔱",
    Uj = "∴",
    Fj = "∴",
    jj = "∴",
    Hj = "Θ",
    Vj = "θ",
    zj = "ϑ",
    Wj = "ϑ",
    Gj = "≈",
    Jj = "∼",
    Yj = "  ",
    Kj = " ",
    Xj = " ",
    Qj = "≈",
    Zj = "∼",
    tH = "Þ",
    eH = "þ",
    nH = "˜",
    sH = "∼",
    rH = "≃",
    oH = "≅",
    iH = "≈",
    aH = "⨱",
    cH = "⊠",
    lH = "×",
    uH = "⨰",
    dH = "∭",
    hH = "⤨",
    pH = "⌶",
    fH = "⫱",
    mH = "⊤",
    gH = "𝕋",
    bH = "𝕥",
    _H = "⫚",
    yH = "⤩",
    wH = "‴",
    vH = "™",
    SH = "™",
    CH = "▵",
    xH = "▿",
    NH = "◃",
    kH = "⊴",
    EH = "≜",
    TH = "▹",
    PH = "⊵",
    AH = "◬",
    LH = "≜",
    IH = "⨺",
    OH = "⃛",
    MH = "⨹",
    DH = "⧍",
    RH = "⨻",
    $H = "⏢",
    qH = "𝒯",
    BH = "𝓉",
    UH = "Ц",
    FH = "ц",
    jH = "Ћ",
    HH = "ћ",
    VH = "Ŧ",
    zH = "ŧ",
    WH = "≬",
    GH = "↞",
    JH = "↠",
    YH = "Ú",
    KH = "ú",
    XH = "↑",
    QH = "↟",
    ZH = "⇑",
    t9 = "⥉",
    e9 = "Ў",
    n9 = "ў",
    s9 = "Ŭ",
    r9 = "ŭ",
    o9 = "Û",
    i9 = "û",
    a9 = "У",
    c9 = "у",
    l9 = "⇅",
    u9 = "Ű",
    d9 = "ű",
    h9 = "⥮",
    p9 = "⥾",
    f9 = "𝔘",
    m9 = "𝔲",
    g9 = "Ù",
    b9 = "ù",
    _9 = "⥣",
    y9 = "↿",
    w9 = "↾",
    v9 = "▀",
    S9 = "⌜",
    C9 = "⌜",
    x9 = "⌏",
    N9 = "◸",
    k9 = "Ū",
    E9 = "ū",
    T9 = "¨",
    P9 = "_",
    A9 = "⏟",
    L9 = "⎵",
    I9 = "⏝",
    O9 = "⋃",
    M9 = "⊎",
    D9 = "Ų",
    R9 = "ų",
    $9 = "𝕌",
    q9 = "𝕦",
    B9 = "⤒",
    U9 = "↑",
    F9 = "↑",
    j9 = "⇑",
    H9 = "⇅",
    V9 = "↕",
    z9 = "↕",
    W9 = "⇕",
    G9 = "⥮",
    J9 = "↿",
    Y9 = "↾",
    K9 = "⊎",
    X9 = "↖",
    Q9 = "↗",
    Z9 = "υ",
    tV = "ϒ",
    eV = "ϒ",
    nV = "Υ",
    sV = "υ",
    rV = "↥",
    oV = "⊥",
    iV = "⇈",
    aV = "⌝",
    cV = "⌝",
    lV = "⌎",
    uV = "Ů",
    dV = "ů",
    hV = "◹",
    pV = "𝒰",
    fV = "𝓊",
    mV = "⋰",
    gV = "Ũ",
    bV = "ũ",
    _V = "▵",
    yV = "▴",
    wV = "⇈",
    vV = "Ü",
    SV = "ü",
    CV = "⦧",
    xV = "⦜",
    NV = "ϵ",
    kV = "ϰ",
    EV = "∅",
    TV = "ϕ",
    PV = "ϖ",
    AV = "∝",
    LV = "↕",
    IV = "⇕",
    OV = "ϱ",
    MV = "ς",
    DV = "⊊︀",
    RV = "⫋︀",
    $V = "⊋︀",
    qV = "⫌︀",
    BV = "ϑ",
    UV = "⊲",
    FV = "⊳",
    jV = "⫨",
    HV = "⫫",
    VV = "⫩",
    zV = "В",
    WV = "в",
    GV = "⊢",
    JV = "⊨",
    YV = "⊩",
    KV = "⊫",
    XV = "⫦",
    QV = "⊻",
    ZV = "∨",
    tz = "⋁",
    ez = "≚",
    nz = "⋮",
    sz = "|",
    rz = "‖",
    oz = "|",
    iz = "‖",
    az = "∣",
    cz = "|",
    lz = "❘",
    uz = "≀",
    dz = " ",
    hz = "𝔙",
    pz = "𝔳",
    fz = "⊲",
    mz = "⊂⃒",
    gz = "⊃⃒",
    bz = "𝕍",
    _z = "𝕧",
    yz = "∝",
    wz = "⊳",
    vz = "𝒱",
    Sz = "𝓋",
    Cz = "⫋︀",
    xz = "⊊︀",
    Nz = "⫌︀",
    kz = "⊋︀",
    Ez = "⊪",
    Tz = "⦚",
    Pz = "Ŵ",
    Az = "ŵ",
    Lz = "⩟",
    Iz = "∧",
    Oz = "⋀",
    Mz = "≙",
    Dz = "℘",
    Rz = "𝔚",
    $z = "𝔴",
    qz = "𝕎",
    Bz = "𝕨",
    Uz = "℘",
    Fz = "≀",
    jz = "≀",
    Hz = "𝒲",
    Vz = "𝓌",
    zz = "⋂",
    Wz = "◯",
    Gz = "⋃",
    Jz = "▽",
    Yz = "𝔛",
    Kz = "𝔵",
    Xz = "⟷",
    Qz = "⟺",
    Zz = "Ξ",
    tW = "ξ",
    eW = "⟵",
    nW = "⟸",
    sW = "⟼",
    rW = "⋻",
    oW = "⨀",
    iW = "𝕏",
    aW = "𝕩",
    cW = "⨁",
    lW = "⨂",
    uW = "⟶",
    dW = "⟹",
    hW = "𝒳",
    pW = "𝓍",
    fW = "⨆",
    mW = "⨄",
    gW = "△",
    bW = "⋁",
    _W = "⋀",
    yW = "Ý",
    wW = "ý",
    vW = "Я",
    SW = "я",
    CW = "Ŷ",
    xW = "ŷ",
    NW = "Ы",
    kW = "ы",
    EW = "¥",
    TW = "𝔜",
    PW = "𝔶",
    AW = "Ї",
    LW = "ї",
    IW = "𝕐",
    OW = "𝕪",
    MW = "𝒴",
    DW = "𝓎",
    RW = "Ю",
    $W = "ю",
    qW = "ÿ",
    BW = "Ÿ",
    UW = "Ź",
    FW = "ź",
    jW = "Ž",
    HW = "ž",
    VW = "З",
    zW = "з",
    WW = "Ż",
    GW = "ż",
    JW = "ℨ",
    YW = "​",
    KW = "Ζ",
    XW = "ζ",
    QW = "𝔷",
    ZW = "ℨ",
    tG = "Ж",
    eG = "ж",
    nG = "⇝",
    sG = "𝕫",
    rG = "ℤ",
    oG = "𝒵",
    iG = "𝓏",
    aG = "‍",
    cG = "‌",
    bi = {
        Aacute: Wb,
        aacute: Gb,
        Abreve: Jb,
        abreve: Yb,
        ac: Kb,
        acd: Xb,
        acE: Qb,
        Acirc: Zb,
        acirc: t_,
        acute: e_,
        Acy: n_,
        acy: s_,
        AElig: r_,
        aelig: o_,
        af: i_,
        Afr: a_,
        afr: c_,
        Agrave: l_,
        agrave: u_,
        alefsym: d_,
        aleph: h_,
        Alpha: p_,
        alpha: f_,
        Amacr: m_,
        amacr: g_,
        amalg: b_,
        amp: __,
        AMP: y_,
        andand: w_,
        And: v_,
        and: S_,
        andd: C_,
        andslope: x_,
        andv: N_,
        ang: k_,
        ange: E_,
        angle: T_,
        angmsdaa: P_,
        angmsdab: A_,
        angmsdac: L_,
        angmsdad: I_,
        angmsdae: O_,
        angmsdaf: M_,
        angmsdag: D_,
        angmsdah: R_,
        angmsd: $_,
        angrt: q_,
        angrtvb: B_,
        angrtvbd: U_,
        angsph: F_,
        angst: j_,
        angzarr: H_,
        Aogon: V_,
        aogon: z_,
        Aopf: W_,
        aopf: G_,
        apacir: J_,
        ap: Y_,
        apE: K_,
        ape: X_,
        apid: Q_,
        apos: Z_,
        ApplyFunction: ty,
        approx: ey,
        approxeq: ny,
        Aring: sy,
        aring: ry,
        Ascr: oy,
        ascr: iy,
        Assign: ay,
        ast: cy,
        asymp: ly,
        asympeq: uy,
        Atilde: dy,
        atilde: hy,
        Auml: py,
        auml: fy,
        awconint: my,
        awint: gy,
        backcong: by,
        backepsilon: _y,
        backprime: yy,
        backsim: wy,
        backsimeq: vy,
        Backslash: Sy,
        Barv: Cy,
        barvee: xy,
        barwed: Ny,
        Barwed: ky,
        barwedge: Ey,
        bbrk: Ty,
        bbrktbrk: Py,
        bcong: Ay,
        Bcy: Ly,
        bcy: Iy,
        bdquo: Oy,
        becaus: My,
        because: Dy,
        Because: Ry,
        bemptyv: $y,
        bepsi: qy,
        bernou: By,
        Bernoullis: Uy,
        Beta: Fy,
        beta: jy,
        beth: Hy,
        between: Vy,
        Bfr: zy,
        bfr: Wy,
        bigcap: Gy,
        bigcirc: Jy,
        bigcup: Yy,
        bigodot: Ky,
        bigoplus: Xy,
        bigotimes: Qy,
        bigsqcup: Zy,
        bigstar: tw,
        bigtriangledown: ew,
        bigtriangleup: nw,
        biguplus: sw,
        bigvee: rw,
        bigwedge: ow,
        bkarow: iw,
        blacklozenge: aw,
        blacksquare: cw,
        blacktriangle: lw,
        blacktriangledown: uw,
        blacktriangleleft: dw,
        blacktriangleright: hw,
        blank: pw,
        blk12: fw,
        blk14: mw,
        blk34: gw,
        block: bw,
        bne: _w,
        bnequiv: yw,
        bNot: ww,
        bnot: vw,
        Bopf: Sw,
        bopf: Cw,
        bot: xw,
        bottom: Nw,
        bowtie: kw,
        boxbox: Ew,
        boxdl: Tw,
        boxdL: Pw,
        boxDl: Aw,
        boxDL: Lw,
        boxdr: Iw,
        boxdR: Ow,
        boxDr: Mw,
        boxDR: Dw,
        boxh: Rw,
        boxH: $w,
        boxhd: qw,
        boxHd: Bw,
        boxhD: Uw,
        boxHD: Fw,
        boxhu: jw,
        boxHu: Hw,
        boxhU: Vw,
        boxHU: zw,
        boxminus: Ww,
        boxplus: Gw,
        boxtimes: Jw,
        boxul: Yw,
        boxuL: Kw,
        boxUl: Xw,
        boxUL: Qw,
        boxur: Zw,
        boxuR: tv,
        boxUr: ev,
        boxUR: nv,
        boxv: sv,
        boxV: rv,
        boxvh: ov,
        boxvH: iv,
        boxVh: av,
        boxVH: cv,
        boxvl: lv,
        boxvL: uv,
        boxVl: dv,
        boxVL: hv,
        boxvr: pv,
        boxvR: fv,
        boxVr: mv,
        boxVR: gv,
        bprime: bv,
        breve: _v,
        Breve: yv,
        brvbar: wv,
        bscr: vv,
        Bscr: Sv,
        bsemi: Cv,
        bsim: xv,
        bsime: Nv,
        bsolb: kv,
        bsol: Ev,
        bsolhsub: Tv,
        bull: Pv,
        bullet: Av,
        bump: Lv,
        bumpE: Iv,
        bumpe: Ov,
        Bumpeq: Mv,
        bumpeq: Dv,
        Cacute: Rv,
        cacute: $v,
        capand: qv,
        capbrcup: Bv,
        capcap: Uv,
        cap: Fv,
        Cap: jv,
        capcup: Hv,
        capdot: Vv,
        CapitalDifferentialD: zv,
        caps: Wv,
        caret: Gv,
        caron: Jv,
        Cayleys: Yv,
        ccaps: Kv,
        Ccaron: Xv,
        ccaron: Qv,
        Ccedil: Zv,
        ccedil: t1,
        Ccirc: e1,
        ccirc: n1,
        Cconint: s1,
        ccups: r1,
        ccupssm: o1,
        Cdot: i1,
        cdot: a1,
        cedil: c1,
        Cedilla: l1,
        cemptyv: u1,
        cent: d1,
        centerdot: h1,
        CenterDot: p1,
        cfr: f1,
        Cfr: m1,
        CHcy: g1,
        chcy: b1,
        check: _1,
        checkmark: y1,
        Chi: w1,
        chi: v1,
        circ: S1,
        circeq: C1,
        circlearrowleft: x1,
        circlearrowright: N1,
        circledast: k1,
        circledcirc: E1,
        circleddash: T1,
        CircleDot: P1,
        circledR: A1,
        circledS: L1,
        CircleMinus: I1,
        CirclePlus: O1,
        CircleTimes: M1,
        cir: D1,
        cirE: R1,
        cire: $1,
        cirfnint: q1,
        cirmid: B1,
        cirscir: U1,
        ClockwiseContourIntegral: F1,
        CloseCurlyDoubleQuote: j1,
        CloseCurlyQuote: H1,
        clubs: V1,
        clubsuit: z1,
        colon: W1,
        Colon: G1,
        Colone: J1,
        colone: Y1,
        coloneq: K1,
        comma: X1,
        commat: Q1,
        comp: Z1,
        compfn: tS,
        complement: eS,
        complexes: nS,
        cong: sS,
        congdot: rS,
        Congruent: oS,
        conint: iS,
        Conint: aS,
        ContourIntegral: cS,
        copf: lS,
        Copf: uS,
        coprod: dS,
        Coproduct: hS,
        copy: pS,
        COPY: fS,
        copysr: mS,
        CounterClockwiseContourIntegral: gS,
        crarr: bS,
        cross: _S,
        Cross: yS,
        Cscr: wS,
        cscr: vS,
        csub: SS,
        csube: CS,
        csup: xS,
        csupe: NS,
        ctdot: kS,
        cudarrl: ES,
        cudarrr: TS,
        cuepr: PS,
        cuesc: AS,
        cularr: LS,
        cularrp: IS,
        cupbrcap: OS,
        cupcap: MS,
        CupCap: DS,
        cup: RS,
        Cup: $S,
        cupcup: qS,
        cupdot: BS,
        cupor: US,
        cups: FS,
        curarr: jS,
        curarrm: HS,
        curlyeqprec: VS,
        curlyeqsucc: zS,
        curlyvee: WS,
        curlywedge: GS,
        curren: JS,
        curvearrowleft: YS,
        curvearrowright: KS,
        cuvee: XS,
        cuwed: QS,
        cwconint: ZS,
        cwint: tC,
        cylcty: eC,
        dagger: nC,
        Dagger: sC,
        daleth: rC,
        darr: oC,
        Darr: iC,
        dArr: aC,
        dash: cC,
        Dashv: lC,
        dashv: uC,
        dbkarow: dC,
        dblac: hC,
        Dcaron: pC,
        dcaron: fC,
        Dcy: mC,
        dcy: gC,
        ddagger: bC,
        ddarr: _C,
        DD: yC,
        dd: wC,
        DDotrahd: vC,
        ddotseq: SC,
        deg: CC,
        Del: xC,
        Delta: NC,
        delta: kC,
        demptyv: EC,
        dfisht: TC,
        Dfr: PC,
        dfr: AC,
        dHar: LC,
        dharl: IC,
        dharr: OC,
        DiacriticalAcute: MC,
        DiacriticalDot: DC,
        DiacriticalDoubleAcute: RC,
        DiacriticalGrave: $C,
        DiacriticalTilde: qC,
        diam: BC,
        diamond: UC,
        Diamond: FC,
        diamondsuit: jC,
        diams: HC,
        die: VC,
        DifferentialD: zC,
        digamma: WC,
        disin: GC,
        div: JC,
        divide: YC,
        divideontimes: KC,
        divonx: XC,
        DJcy: QC,
        djcy: ZC,
        dlcorn: t0,
        dlcrop: e0,
        dollar: n0,
        Dopf: s0,
        dopf: r0,
        Dot: o0,
        dot: i0,
        DotDot: a0,
        doteq: c0,
        doteqdot: l0,
        DotEqual: u0,
        dotminus: d0,
        dotplus: h0,
        dotsquare: p0,
        doublebarwedge: f0,
        DoubleContourIntegral: m0,
        DoubleDot: g0,
        DoubleDownArrow: b0,
        DoubleLeftArrow: _0,
        DoubleLeftRightArrow: y0,
        DoubleLeftTee: w0,
        DoubleLongLeftArrow: v0,
        DoubleLongLeftRightArrow: S0,
        DoubleLongRightArrow: C0,
        DoubleRightArrow: x0,
        DoubleRightTee: N0,
        DoubleUpArrow: k0,
        DoubleUpDownArrow: E0,
        DoubleVerticalBar: T0,
        DownArrowBar: P0,
        downarrow: A0,
        DownArrow: L0,
        Downarrow: I0,
        DownArrowUpArrow: O0,
        DownBreve: M0,
        downdownarrows: D0,
        downharpoonleft: R0,
        downharpoonright: $0,
        DownLeftRightVector: q0,
        DownLeftTeeVector: B0,
        DownLeftVectorBar: U0,
        DownLeftVector: F0,
        DownRightTeeVector: j0,
        DownRightVectorBar: H0,
        DownRightVector: V0,
        DownTeeArrow: z0,
        DownTee: W0,
        drbkarow: G0,
        drcorn: J0,
        drcrop: Y0,
        Dscr: K0,
        dscr: X0,
        DScy: Q0,
        dscy: Z0,
        dsol: tx,
        Dstrok: ex,
        dstrok: nx,
        dtdot: sx,
        dtri: rx,
        dtrif: ox,
        duarr: ix,
        duhar: ax,
        dwangle: cx,
        DZcy: lx,
        dzcy: ux,
        dzigrarr: dx,
        Eacute: hx,
        eacute: px,
        easter: fx,
        Ecaron: mx,
        ecaron: gx,
        Ecirc: bx,
        ecirc: _x,
        ecir: yx,
        ecolon: wx,
        Ecy: vx,
        ecy: Sx,
        eDDot: Cx,
        Edot: xx,
        edot: Nx,
        eDot: kx,
        ee: Ex,
        efDot: Tx,
        Efr: Px,
        efr: Ax,
        eg: Lx,
        Egrave: Ix,
        egrave: Ox,
        egs: Mx,
        egsdot: Dx,
        el: Rx,
        Element: $x,
        elinters: qx,
        ell: Bx,
        els: Ux,
        elsdot: Fx,
        Emacr: jx,
        emacr: Hx,
        empty: Vx,
        emptyset: zx,
        EmptySmallSquare: Wx,
        emptyv: Gx,
        EmptyVerySmallSquare: Jx,
        emsp13: Yx,
        emsp14: Kx,
        emsp: Xx,
        ENG: Qx,
        eng: Zx,
        ensp: tN,
        Eogon: eN,
        eogon: nN,
        Eopf: sN,
        eopf: rN,
        epar: oN,
        eparsl: iN,
        eplus: aN,
        epsi: cN,
        Epsilon: lN,
        epsilon: uN,
        epsiv: dN,
        eqcirc: hN,
        eqcolon: pN,
        eqsim: fN,
        eqslantgtr: mN,
        eqslantless: gN,
        Equal: bN,
        equals: _N,
        EqualTilde: yN,
        equest: wN,
        Equilibrium: vN,
        equiv: SN,
        equivDD: CN,
        eqvparsl: xN,
        erarr: NN,
        erDot: kN,
        escr: EN,
        Escr: TN,
        esdot: PN,
        Esim: AN,
        esim: LN,
        Eta: IN,
        eta: ON,
        ETH: MN,
        eth: DN,
        Euml: RN,
        euml: $N,
        euro: qN,
        excl: BN,
        exist: UN,
        Exists: FN,
        expectation: jN,
        exponentiale: HN,
        ExponentialE: VN,
        fallingdotseq: zN,
        Fcy: WN,
        fcy: GN,
        female: JN,
        ffilig: YN,
        fflig: KN,
        ffllig: XN,
        Ffr: QN,
        ffr: ZN,
        filig: tk,
        FilledSmallSquare: ek,
        FilledVerySmallSquare: nk,
        fjlig: sk,
        flat: rk,
        fllig: ok,
        fltns: ik,
        fnof: ak,
        Fopf: ck,
        fopf: lk,
        forall: uk,
        ForAll: dk,
        fork: hk,
        forkv: pk,
        Fouriertrf: fk,
        fpartint: mk,
        frac12: gk,
        frac13: bk,
        frac14: _k,
        frac15: yk,
        frac16: wk,
        frac18: vk,
        frac23: Sk,
        frac25: Ck,
        frac34: xk,
        frac35: Nk,
        frac38: kk,
        frac45: Ek,
        frac56: Tk,
        frac58: Pk,
        frac78: Ak,
        frasl: Lk,
        frown: Ik,
        fscr: Ok,
        Fscr: Mk,
        gacute: Dk,
        Gamma: Rk,
        gamma: $k,
        Gammad: qk,
        gammad: Bk,
        gap: Uk,
        Gbreve: Fk,
        gbreve: jk,
        Gcedil: Hk,
        Gcirc: Vk,
        gcirc: zk,
        Gcy: Wk,
        gcy: Gk,
        Gdot: Jk,
        gdot: Yk,
        ge: Kk,
        gE: Xk,
        gEl: Qk,
        gel: Zk,
        geq: tE,
        geqq: eE,
        geqslant: nE,
        gescc: sE,
        ges: rE,
        gesdot: oE,
        gesdoto: iE,
        gesdotol: aE,
        gesl: cE,
        gesles: lE,
        Gfr: uE,
        gfr: dE,
        gg: hE,
        Gg: pE,
        ggg: fE,
        gimel: mE,
        GJcy: gE,
        gjcy: bE,
        gla: _E,
        gl: yE,
        glE: wE,
        glj: vE,
        gnap: SE,
        gnapprox: CE,
        gne: xE,
        gnE: NE,
        gneq: kE,
        gneqq: EE,
        gnsim: TE,
        Gopf: PE,
        gopf: AE,
        grave: LE,
        GreaterEqual: IE,
        GreaterEqualLess: OE,
        GreaterFullEqual: ME,
        GreaterGreater: DE,
        GreaterLess: RE,
        GreaterSlantEqual: $E,
        GreaterTilde: qE,
        Gscr: BE,
        gscr: UE,
        gsim: FE,
        gsime: jE,
        gsiml: HE,
        gtcc: VE,
        gtcir: zE,
        gt: WE,
        GT: GE,
        Gt: JE,
        gtdot: YE,
        gtlPar: KE,
        gtquest: XE,
        gtrapprox: QE,
        gtrarr: ZE,
        gtrdot: tT,
        gtreqless: eT,
        gtreqqless: nT,
        gtrless: sT,
        gtrsim: rT,
        gvertneqq: oT,
        gvnE: iT,
        Hacek: aT,
        hairsp: cT,
        half: lT,
        hamilt: uT,
        HARDcy: dT,
        hardcy: hT,
        harrcir: pT,
        harr: fT,
        hArr: mT,
        harrw: gT,
        Hat: bT,
        hbar: _T,
        Hcirc: yT,
        hcirc: wT,
        hearts: vT,
        heartsuit: ST,
        hellip: CT,
        hercon: xT,
        hfr: NT,
        Hfr: kT,
        HilbertSpace: ET,
        hksearow: TT,
        hkswarow: PT,
        hoarr: AT,
        homtht: LT,
        hookleftarrow: IT,
        hookrightarrow: OT,
        hopf: MT,
        Hopf: DT,
        horbar: RT,
        HorizontalLine: $T,
        hscr: qT,
        Hscr: BT,
        hslash: UT,
        Hstrok: FT,
        hstrok: jT,
        HumpDownHump: HT,
        HumpEqual: VT,
        hybull: zT,
        hyphen: WT,
        Iacute: GT,
        iacute: JT,
        ic: YT,
        Icirc: KT,
        icirc: XT,
        Icy: QT,
        icy: ZT,
        Idot: t2,
        IEcy: e2,
        iecy: n2,
        iexcl: s2,
        iff: r2,
        ifr: o2,
        Ifr: i2,
        Igrave: a2,
        igrave: c2,
        ii: l2,
        iiiint: u2,
        iiint: d2,
        iinfin: h2,
        iiota: p2,
        IJlig: f2,
        ijlig: m2,
        Imacr: g2,
        imacr: b2,
        image: _2,
        ImaginaryI: y2,
        imagline: w2,
        imagpart: v2,
        imath: S2,
        Im: C2,
        imof: x2,
        imped: N2,
        Implies: k2,
        incare: E2,
        in: "∈",
        infin: T2,
        infintie: P2,
        inodot: A2,
        intcal: L2,
        int: I2,
        Int: O2,
        integers: M2,
        Integral: D2,
        intercal: R2,
        Intersection: $2,
        intlarhk: q2,
        intprod: B2,
        InvisibleComma: U2,
        InvisibleTimes: F2,
        IOcy: j2,
        iocy: H2,
        Iogon: V2,
        iogon: z2,
        Iopf: W2,
        iopf: G2,
        Iota: J2,
        iota: Y2,
        iprod: K2,
        iquest: X2,
        iscr: Q2,
        Iscr: Z2,
        isin: tP,
        isindot: eP,
        isinE: nP,
        isins: sP,
        isinsv: rP,
        isinv: oP,
        it: iP,
        Itilde: aP,
        itilde: cP,
        Iukcy: lP,
        iukcy: uP,
        Iuml: dP,
        iuml: hP,
        Jcirc: pP,
        jcirc: fP,
        Jcy: mP,
        jcy: gP,
        Jfr: bP,
        jfr: _P,
        jmath: yP,
        Jopf: wP,
        jopf: vP,
        Jscr: SP,
        jscr: CP,
        Jsercy: xP,
        jsercy: NP,
        Jukcy: kP,
        jukcy: EP,
        Kappa: TP,
        kappa: PP,
        kappav: AP,
        Kcedil: LP,
        kcedil: IP,
        Kcy: OP,
        kcy: MP,
        Kfr: DP,
        kfr: RP,
        kgreen: $P,
        KHcy: qP,
        khcy: BP,
        KJcy: UP,
        kjcy: FP,
        Kopf: jP,
        kopf: HP,
        Kscr: VP,
        kscr: zP,
        lAarr: WP,
        Lacute: GP,
        lacute: JP,
        laemptyv: YP,
        lagran: KP,
        Lambda: XP,
        lambda: QP,
        lang: ZP,
        Lang: tA,
        langd: eA,
        langle: nA,
        lap: sA,
        Laplacetrf: rA,
        laquo: oA,
        larrb: iA,
        larrbfs: aA,
        larr: cA,
        Larr: lA,
        lArr: uA,
        larrfs: dA,
        larrhk: hA,
        larrlp: pA,
        larrpl: fA,
        larrsim: mA,
        larrtl: gA,
        latail: bA,
        lAtail: _A,
        lat: yA,
        late: wA,
        lates: vA,
        lbarr: SA,
        lBarr: CA,
        lbbrk: xA,
        lbrace: NA,
        lbrack: kA,
        lbrke: EA,
        lbrksld: TA,
        lbrkslu: PA,
        Lcaron: AA,
        lcaron: LA,
        Lcedil: IA,
        lcedil: OA,
        lceil: MA,
        lcub: DA,
        Lcy: RA,
        lcy: $A,
        ldca: qA,
        ldquo: BA,
        ldquor: UA,
        ldrdhar: FA,
        ldrushar: jA,
        ldsh: HA,
        le: VA,
        lE: zA,
        LeftAngleBracket: WA,
        LeftArrowBar: GA,
        leftarrow: JA,
        LeftArrow: YA,
        Leftarrow: KA,
        LeftArrowRightArrow: XA,
        leftarrowtail: QA,
        LeftCeiling: ZA,
        LeftDoubleBracket: tL,
        LeftDownTeeVector: eL,
        LeftDownVectorBar: nL,
        LeftDownVector: sL,
        LeftFloor: rL,
        leftharpoondown: oL,
        leftharpoonup: iL,
        leftleftarrows: aL,
        leftrightarrow: cL,
        LeftRightArrow: lL,
        Leftrightarrow: uL,
        leftrightarrows: dL,
        leftrightharpoons: hL,
        leftrightsquigarrow: pL,
        LeftRightVector: fL,
        LeftTeeArrow: mL,
        LeftTee: gL,
        LeftTeeVector: bL,
        leftthreetimes: _L,
        LeftTriangleBar: yL,
        LeftTriangle: wL,
        LeftTriangleEqual: vL,
        LeftUpDownVector: SL,
        LeftUpTeeVector: CL,
        LeftUpVectorBar: xL,
        LeftUpVector: NL,
        LeftVectorBar: kL,
        LeftVector: EL,
        lEg: TL,
        leg: PL,
        leq: AL,
        leqq: LL,
        leqslant: IL,
        lescc: OL,
        les: ML,
        lesdot: DL,
        lesdoto: RL,
        lesdotor: $L,
        lesg: qL,
        lesges: BL,
        lessapprox: UL,
        lessdot: FL,
        lesseqgtr: jL,
        lesseqqgtr: HL,
        LessEqualGreater: VL,
        LessFullEqual: zL,
        LessGreater: WL,
        lessgtr: GL,
        LessLess: JL,
        lesssim: YL,
        LessSlantEqual: KL,
        LessTilde: XL,
        lfisht: QL,
        lfloor: ZL,
        Lfr: tI,
        lfr: eI,
        lg: nI,
        lgE: sI,
        lHar: rI,
        lhard: oI,
        lharu: iI,
        lharul: aI,
        lhblk: cI,
        LJcy: lI,
        ljcy: uI,
        llarr: dI,
        ll: hI,
        Ll: pI,
        llcorner: fI,
        Lleftarrow: mI,
        llhard: gI,
        lltri: bI,
        Lmidot: _I,
        lmidot: yI,
        lmoustache: wI,
        lmoust: vI,
        lnap: SI,
        lnapprox: CI,
        lne: xI,
        lnE: NI,
        lneq: kI,
        lneqq: EI,
        lnsim: TI,
        loang: PI,
        loarr: AI,
        lobrk: LI,
        longleftarrow: II,
        LongLeftArrow: OI,
        Longleftarrow: MI,
        longleftrightarrow: DI,
        LongLeftRightArrow: RI,
        Longleftrightarrow: $I,
        longmapsto: qI,
        longrightarrow: BI,
        LongRightArrow: UI,
        Longrightarrow: FI,
        looparrowleft: jI,
        looparrowright: HI,
        lopar: VI,
        Lopf: zI,
        lopf: WI,
        loplus: GI,
        lotimes: JI,
        lowast: YI,
        lowbar: KI,
        LowerLeftArrow: XI,
        LowerRightArrow: QI,
        loz: ZI,
        lozenge: tO,
        lozf: eO,
        lpar: nO,
        lparlt: sO,
        lrarr: rO,
        lrcorner: oO,
        lrhar: iO,
        lrhard: aO,
        lrm: cO,
        lrtri: lO,
        lsaquo: uO,
        lscr: dO,
        Lscr: hO,
        lsh: pO,
        Lsh: fO,
        lsim: mO,
        lsime: gO,
        lsimg: bO,
        lsqb: _O,
        lsquo: yO,
        lsquor: wO,
        Lstrok: vO,
        lstrok: SO,
        ltcc: CO,
        ltcir: xO,
        lt: NO,
        LT: kO,
        Lt: EO,
        ltdot: TO,
        lthree: PO,
        ltimes: AO,
        ltlarr: LO,
        ltquest: IO,
        ltri: OO,
        ltrie: MO,
        ltrif: DO,
        ltrPar: RO,
        lurdshar: $O,
        luruhar: qO,
        lvertneqq: BO,
        lvnE: UO,
        macr: FO,
        male: jO,
        malt: HO,
        maltese: VO,
        Map: "⤅",
        map: zO,
        mapsto: WO,
        mapstodown: GO,
        mapstoleft: JO,
        mapstoup: YO,
        marker: KO,
        mcomma: XO,
        Mcy: QO,
        mcy: ZO,
        mdash: tM,
        mDDot: eM,
        measuredangle: nM,
        MediumSpace: sM,
        Mellintrf: rM,
        Mfr: oM,
        mfr: iM,
        mho: aM,
        micro: cM,
        midast: lM,
        midcir: uM,
        mid: dM,
        middot: hM,
        minusb: pM,
        minus: fM,
        minusd: mM,
        minusdu: gM,
        MinusPlus: bM,
        mlcp: _M,
        mldr: yM,
        mnplus: wM,
        models: vM,
        Mopf: SM,
        mopf: CM,
        mp: xM,
        mscr: NM,
        Mscr: kM,
        mstpos: EM,
        Mu: TM,
        mu: PM,
        multimap: AM,
        mumap: LM,
        nabla: IM,
        Nacute: OM,
        nacute: MM,
        nang: DM,
        nap: RM,
        napE: $M,
        napid: qM,
        napos: BM,
        napprox: UM,
        natural: FM,
        naturals: jM,
        natur: HM,
        nbsp: VM,
        nbump: zM,
        nbumpe: WM,
        ncap: GM,
        Ncaron: JM,
        ncaron: YM,
        Ncedil: KM,
        ncedil: XM,
        ncong: QM,
        ncongdot: ZM,
        ncup: tD,
        Ncy: eD,
        ncy: nD,
        ndash: sD,
        nearhk: rD,
        nearr: oD,
        neArr: iD,
        nearrow: aD,
        ne: cD,
        nedot: lD,
        NegativeMediumSpace: uD,
        NegativeThickSpace: dD,
        NegativeThinSpace: hD,
        NegativeVeryThinSpace: pD,
        nequiv: fD,
        nesear: mD,
        nesim: gD,
        NestedGreaterGreater: bD,
        NestedLessLess: _D,
        NewLine: yD,
        nexist: wD,
        nexists: vD,
        Nfr: SD,
        nfr: CD,
        ngE: xD,
        nge: ND,
        ngeq: kD,
        ngeqq: ED,
        ngeqslant: TD,
        nges: PD,
        nGg: AD,
        ngsim: LD,
        nGt: ID,
        ngt: OD,
        ngtr: MD,
        nGtv: DD,
        nharr: RD,
        nhArr: $D,
        nhpar: qD,
        ni: BD,
        nis: UD,
        nisd: FD,
        niv: jD,
        NJcy: HD,
        njcy: VD,
        nlarr: zD,
        nlArr: WD,
        nldr: GD,
        nlE: JD,
        nle: YD,
        nleftarrow: KD,
        nLeftarrow: XD,
        nleftrightarrow: QD,
        nLeftrightarrow: ZD,
        nleq: tR,
        nleqq: eR,
        nleqslant: nR,
        nles: sR,
        nless: rR,
        nLl: oR,
        nlsim: iR,
        nLt: aR,
        nlt: cR,
        nltri: lR,
        nltrie: uR,
        nLtv: dR,
        nmid: hR,
        NoBreak: pR,
        NonBreakingSpace: fR,
        nopf: mR,
        Nopf: gR,
        Not: bR,
        not: _R,
        NotCongruent: yR,
        NotCupCap: wR,
        NotDoubleVerticalBar: vR,
        NotElement: SR,
        NotEqual: CR,
        NotEqualTilde: xR,
        NotExists: NR,
        NotGreater: kR,
        NotGreaterEqual: ER,
        NotGreaterFullEqual: TR,
        NotGreaterGreater: PR,
        NotGreaterLess: AR,
        NotGreaterSlantEqual: LR,
        NotGreaterTilde: IR,
        NotHumpDownHump: OR,
        NotHumpEqual: MR,
        notin: DR,
        notindot: RR,
        notinE: $R,
        notinva: qR,
        notinvb: BR,
        notinvc: UR,
        NotLeftTriangleBar: FR,
        NotLeftTriangle: jR,
        NotLeftTriangleEqual: HR,
        NotLess: VR,
        NotLessEqual: zR,
        NotLessGreater: WR,
        NotLessLess: GR,
        NotLessSlantEqual: JR,
        NotLessTilde: YR,
        NotNestedGreaterGreater: KR,
        NotNestedLessLess: XR,
        notni: QR,
        notniva: ZR,
        notnivb: t4,
        notnivc: e4,
        NotPrecedes: n4,
        NotPrecedesEqual: s4,
        NotPrecedesSlantEqual: r4,
        NotReverseElement: o4,
        NotRightTriangleBar: i4,
        NotRightTriangle: a4,
        NotRightTriangleEqual: c4,
        NotSquareSubset: l4,
        NotSquareSubsetEqual: u4,
        NotSquareSuperset: d4,
        NotSquareSupersetEqual: h4,
        NotSubset: p4,
        NotSubsetEqual: f4,
        NotSucceeds: m4,
        NotSucceedsEqual: g4,
        NotSucceedsSlantEqual: b4,
        NotSucceedsTilde: _4,
        NotSuperset: y4,
        NotSupersetEqual: w4,
        NotTilde: v4,
        NotTildeEqual: S4,
        NotTildeFullEqual: C4,
        NotTildeTilde: x4,
        NotVerticalBar: N4,
        nparallel: k4,
        npar: E4,
        nparsl: T4,
        npart: P4,
        npolint: A4,
        npr: L4,
        nprcue: I4,
        nprec: O4,
        npreceq: M4,
        npre: D4,
        nrarrc: R4,
        nrarr: $4,
        nrArr: q4,
        nrarrw: B4,
        nrightarrow: U4,
        nRightarrow: F4,
        nrtri: j4,
        nrtrie: H4,
        nsc: V4,
        nsccue: z4,
        nsce: W4,
        Nscr: G4,
        nscr: J4,
        nshortmid: Y4,
        nshortparallel: K4,
        nsim: X4,
        nsime: Q4,
        nsimeq: Z4,
        nsmid: t3,
        nspar: e3,
        nsqsube: n3,
        nsqsupe: s3,
        nsub: r3,
        nsubE: o3,
        nsube: i3,
        nsubset: a3,
        nsubseteq: c3,
        nsubseteqq: l3,
        nsucc: u3,
        nsucceq: d3,
        nsup: h3,
        nsupE: p3,
        nsupe: f3,
        nsupset: m3,
        nsupseteq: g3,
        nsupseteqq: b3,
        ntgl: _3,
        Ntilde: y3,
        ntilde: w3,
        ntlg: v3,
        ntriangleleft: S3,
        ntrianglelefteq: C3,
        ntriangleright: x3,
        ntrianglerighteq: N3,
        Nu: k3,
        nu: E3,
        num: T3,
        numero: P3,
        numsp: A3,
        nvap: L3,
        nvdash: I3,
        nvDash: O3,
        nVdash: M3,
        nVDash: D3,
        nvge: R3,
        nvgt: $3,
        nvHarr: q3,
        nvinfin: B3,
        nvlArr: U3,
        nvle: F3,
        nvlt: j3,
        nvltrie: H3,
        nvrArr: V3,
        nvrtrie: z3,
        nvsim: W3,
        nwarhk: G3,
        nwarr: J3,
        nwArr: Y3,
        nwarrow: K3,
        nwnear: X3,
        Oacute: Q3,
        oacute: Z3,
        oast: t5,
        Ocirc: e5,
        ocirc: n5,
        ocir: s5,
        Ocy: r5,
        ocy: o5,
        odash: i5,
        Odblac: a5,
        odblac: c5,
        odiv: l5,
        odot: u5,
        odsold: d5,
        OElig: h5,
        oelig: p5,
        ofcir: f5,
        Ofr: m5,
        ofr: g5,
        ogon: b5,
        Ograve: _5,
        ograve: y5,
        ogt: w5,
        ohbar: v5,
        ohm: S5,
        oint: C5,
        olarr: x5,
        olcir: N5,
        olcross: k5,
        oline: E5,
        olt: T5,
        Omacr: P5,
        omacr: A5,
        Omega: L5,
        omega: I5,
        Omicron: O5,
        omicron: M5,
        omid: D5,
        ominus: R5,
        Oopf: $5,
        oopf: q5,
        opar: B5,
        OpenCurlyDoubleQuote: U5,
        OpenCurlyQuote: F5,
        operp: j5,
        oplus: H5,
        orarr: V5,
        Or: z5,
        or: W5,
        ord: G5,
        order: J5,
        orderof: Y5,
        ordf: K5,
        ordm: X5,
        origof: Q5,
        oror: Z5,
        orslope: t8,
        orv: e8,
        oS: n8,
        Oscr: s8,
        oscr: r8,
        Oslash: o8,
        oslash: i8,
        osol: a8,
        Otilde: c8,
        otilde: l8,
        otimesas: u8,
        Otimes: d8,
        otimes: h8,
        Ouml: p8,
        ouml: f8,
        ovbar: m8,
        OverBar: g8,
        OverBrace: b8,
        OverBracket: _8,
        OverParenthesis: y8,
        para: w8,
        parallel: v8,
        par: S8,
        parsim: C8,
        parsl: x8,
        part: N8,
        PartialD: k8,
        Pcy: E8,
        pcy: T8,
        percnt: P8,
        period: A8,
        permil: L8,
        perp: I8,
        pertenk: O8,
        Pfr: M8,
        pfr: D8,
        Phi: R8,
        phi: $8,
        phiv: q8,
        phmmat: B8,
        phone: U8,
        Pi: F8,
        pi: j8,
        pitchfork: H8,
        piv: V8,
        planck: z8,
        planckh: W8,
        plankv: G8,
        plusacir: J8,
        plusb: Y8,
        pluscir: K8,
        plus: X8,
        plusdo: Q8,
        plusdu: Z8,
        pluse: t$,
        PlusMinus: e$,
        plusmn: n$,
        plussim: s$,
        plustwo: r$,
        pm: o$,
        Poincareplane: i$,
        pointint: a$,
        popf: c$,
        Popf: l$,
        pound: u$,
        prap: d$,
        Pr: h$,
        pr: p$,
        prcue: f$,
        precapprox: m$,
        prec: g$,
        preccurlyeq: b$,
        Precedes: _$,
        PrecedesEqual: y$,
        PrecedesSlantEqual: w$,
        PrecedesTilde: v$,
        preceq: S$,
        precnapprox: C$,
        precneqq: x$,
        precnsim: N$,
        pre: k$,
        prE: E$,
        precsim: T$,
        prime: P$,
        Prime: A$,
        primes: L$,
        prnap: I$,
        prnE: O$,
        prnsim: M$,
        prod: D$,
        Product: R$,
        profalar: $$,
        profline: q$,
        profsurf: B$,
        prop: U$,
        Proportional: F$,
        Proportion: j$,
        propto: H$,
        prsim: V$,
        prurel: z$,
        Pscr: W$,
        pscr: G$,
        Psi: J$,
        psi: Y$,
        puncsp: K$,
        Qfr: X$,
        qfr: Q$,
        qint: Z$,
        qopf: t6,
        Qopf: e6,
        qprime: n6,
        Qscr: s6,
        qscr: r6,
        quaternions: o6,
        quatint: i6,
        quest: a6,
        questeq: c6,
        quot: l6,
        QUOT: u6,
        rAarr: d6,
        race: h6,
        Racute: p6,
        racute: f6,
        radic: m6,
        raemptyv: g6,
        rang: b6,
        Rang: _6,
        rangd: y6,
        range: w6,
        rangle: v6,
        raquo: S6,
        rarrap: C6,
        rarrb: x6,
        rarrbfs: N6,
        rarrc: k6,
        rarr: E6,
        Rarr: T6,
        rArr: P6,
        rarrfs: A6,
        rarrhk: L6,
        rarrlp: I6,
        rarrpl: O6,
        rarrsim: M6,
        Rarrtl: D6,
        rarrtl: R6,
        rarrw: $6,
        ratail: q6,
        rAtail: B6,
        ratio: U6,
        rationals: F6,
        rbarr: j6,
        rBarr: H6,
        RBarr: V6,
        rbbrk: z6,
        rbrace: W6,
        rbrack: G6,
        rbrke: J6,
        rbrksld: Y6,
        rbrkslu: K6,
        Rcaron: X6,
        rcaron: Q6,
        Rcedil: Z6,
        rcedil: tq,
        rceil: eq,
        rcub: nq,
        Rcy: sq,
        rcy: rq,
        rdca: oq,
        rdldhar: iq,
        rdquo: aq,
        rdquor: cq,
        rdsh: lq,
        real: uq,
        realine: dq,
        realpart: hq,
        reals: pq,
        Re: fq,
        rect: mq,
        reg: gq,
        REG: bq,
        ReverseElement: _q,
        ReverseEquilibrium: yq,
        ReverseUpEquilibrium: wq,
        rfisht: vq,
        rfloor: Sq,
        rfr: Cq,
        Rfr: xq,
        rHar: Nq,
        rhard: kq,
        rharu: Eq,
        rharul: Tq,
        Rho: Pq,
        rho: Aq,
        rhov: Lq,
        RightAngleBracket: Iq,
        RightArrowBar: Oq,
        rightarrow: Mq,
        RightArrow: Dq,
        Rightarrow: Rq,
        RightArrowLeftArrow: $q,
        rightarrowtail: qq,
        RightCeiling: Bq,
        RightDoubleBracket: Uq,
        RightDownTeeVector: Fq,
        RightDownVectorBar: jq,
        RightDownVector: Hq,
        RightFloor: Vq,
        rightharpoondown: zq,
        rightharpoonup: Wq,
        rightleftarrows: Gq,
        rightleftharpoons: Jq,
        rightrightarrows: Yq,
        rightsquigarrow: Kq,
        RightTeeArrow: Xq,
        RightTee: Qq,
        RightTeeVector: Zq,
        rightthreetimes: tB,
        RightTriangleBar: eB,
        RightTriangle: nB,
        RightTriangleEqual: sB,
        RightUpDownVector: rB,
        RightUpTeeVector: oB,
        RightUpVectorBar: iB,
        RightUpVector: aB,
        RightVectorBar: cB,
        RightVector: lB,
        ring: uB,
        risingdotseq: dB,
        rlarr: hB,
        rlhar: pB,
        rlm: fB,
        rmoustache: mB,
        rmoust: gB,
        rnmid: bB,
        roang: _B,
        roarr: yB,
        robrk: wB,
        ropar: vB,
        ropf: SB,
        Ropf: CB,
        roplus: xB,
        rotimes: NB,
        RoundImplies: kB,
        rpar: EB,
        rpargt: TB,
        rppolint: PB,
        rrarr: AB,
        Rrightarrow: LB,
        rsaquo: IB,
        rscr: OB,
        Rscr: MB,
        rsh: DB,
        Rsh: RB,
        rsqb: $B,
        rsquo: qB,
        rsquor: BB,
        rthree: UB,
        rtimes: FB,
        rtri: jB,
        rtrie: HB,
        rtrif: VB,
        rtriltri: zB,
        RuleDelayed: WB,
        ruluhar: GB,
        rx: JB,
        Sacute: YB,
        sacute: KB,
        sbquo: XB,
        scap: QB,
        Scaron: ZB,
        scaron: tU,
        Sc: eU,
        sc: nU,
        sccue: sU,
        sce: rU,
        scE: oU,
        Scedil: iU,
        scedil: aU,
        Scirc: cU,
        scirc: lU,
        scnap: uU,
        scnE: dU,
        scnsim: hU,
        scpolint: pU,
        scsim: fU,
        Scy: mU,
        scy: gU,
        sdotb: bU,
        sdot: _U,
        sdote: yU,
        searhk: wU,
        searr: vU,
        seArr: SU,
        searrow: CU,
        sect: xU,
        semi: NU,
        seswar: kU,
        setminus: EU,
        setmn: TU,
        sext: PU,
        Sfr: AU,
        sfr: LU,
        sfrown: IU,
        sharp: OU,
        SHCHcy: MU,
        shchcy: DU,
        SHcy: RU,
        shcy: $U,
        ShortDownArrow: qU,
        ShortLeftArrow: BU,
        shortmid: UU,
        shortparallel: FU,
        ShortRightArrow: jU,
        ShortUpArrow: HU,
        shy: VU,
        Sigma: zU,
        sigma: WU,
        sigmaf: GU,
        sigmav: JU,
        sim: YU,
        simdot: KU,
        sime: XU,
        simeq: QU,
        simg: ZU,
        simgE: tF,
        siml: eF,
        simlE: nF,
        simne: sF,
        simplus: rF,
        simrarr: oF,
        slarr: iF,
        SmallCircle: aF,
        smallsetminus: cF,
        smashp: lF,
        smeparsl: uF,
        smid: dF,
        smile: hF,
        smt: pF,
        smte: fF,
        smtes: mF,
        SOFTcy: gF,
        softcy: bF,
        solbar: _F,
        solb: yF,
        sol: wF,
        Sopf: vF,
        sopf: SF,
        spades: CF,
        spadesuit: xF,
        spar: NF,
        sqcap: kF,
        sqcaps: EF,
        sqcup: TF,
        sqcups: PF,
        Sqrt: AF,
        sqsub: LF,
        sqsube: IF,
        sqsubset: OF,
        sqsubseteq: MF,
        sqsup: DF,
        sqsupe: RF,
        sqsupset: $F,
        sqsupseteq: qF,
        square: BF,
        Square: UF,
        SquareIntersection: FF,
        SquareSubset: jF,
        SquareSubsetEqual: HF,
        SquareSuperset: VF,
        SquareSupersetEqual: zF,
        SquareUnion: WF,
        squarf: GF,
        squ: JF,
        squf: YF,
        srarr: KF,
        Sscr: XF,
        sscr: QF,
        ssetmn: ZF,
        ssmile: t7,
        sstarf: e7,
        Star: n7,
        star: s7,
        starf: r7,
        straightepsilon: o7,
        straightphi: i7,
        strns: a7,
        sub: c7,
        Sub: l7,
        subdot: u7,
        subE: d7,
        sube: h7,
        subedot: p7,
        submult: f7,
        subnE: m7,
        subne: g7,
        subplus: b7,
        subrarr: _7,
        subset: y7,
        Subset: w7,
        subseteq: v7,
        subseteqq: S7,
        SubsetEqual: C7,
        subsetneq: x7,
        subsetneqq: N7,
        subsim: k7,
        subsub: E7,
        subsup: T7,
        succapprox: P7,
        succ: A7,
        succcurlyeq: L7,
        Succeeds: I7,
        SucceedsEqual: O7,
        SucceedsSlantEqual: M7,
        SucceedsTilde: D7,
        succeq: R7,
        succnapprox: $7,
        succneqq: q7,
        succnsim: B7,
        succsim: U7,
        SuchThat: F7,
        sum: j7,
        Sum: H7,
        sung: V7,
        sup1: z7,
        sup2: W7,
        sup3: G7,
        sup: J7,
        Sup: Y7,
        supdot: K7,
        supdsub: X7,
        supE: Q7,
        supe: Z7,
        supedot: tj,
        Superset: ej,
        SupersetEqual: nj,
        suphsol: sj,
        suphsub: rj,
        suplarr: oj,
        supmult: ij,
        supnE: aj,
        supne: cj,
        supplus: lj,
        supset: uj,
        Supset: dj,
        supseteq: hj,
        supseteqq: pj,
        supsetneq: fj,
        supsetneqq: mj,
        supsim: gj,
        supsub: bj,
        supsup: _j,
        swarhk: yj,
        swarr: wj,
        swArr: vj,
        swarrow: Sj,
        swnwar: Cj,
        szlig: xj,
        Tab: Nj,
        target: kj,
        Tau: Ej,
        tau: Tj,
        tbrk: Pj,
        Tcaron: Aj,
        tcaron: Lj,
        Tcedil: Ij,
        tcedil: Oj,
        Tcy: Mj,
        tcy: Dj,
        tdot: Rj,
        telrec: $j,
        Tfr: qj,
        tfr: Bj,
        there4: Uj,
        therefore: Fj,
        Therefore: jj,
        Theta: Hj,
        theta: Vj,
        thetasym: zj,
        thetav: Wj,
        thickapprox: Gj,
        thicksim: Jj,
        ThickSpace: Yj,
        ThinSpace: Kj,
        thinsp: Xj,
        thkap: Qj,
        thksim: Zj,
        THORN: tH,
        thorn: eH,
        tilde: nH,
        Tilde: sH,
        TildeEqual: rH,
        TildeFullEqual: oH,
        TildeTilde: iH,
        timesbar: aH,
        timesb: cH,
        times: lH,
        timesd: uH,
        tint: dH,
        toea: hH,
        topbot: pH,
        topcir: fH,
        top: mH,
        Topf: gH,
        topf: bH,
        topfork: _H,
        tosa: yH,
        tprime: wH,
        trade: vH,
        TRADE: SH,
        triangle: CH,
        triangledown: xH,
        triangleleft: NH,
        trianglelefteq: kH,
        triangleq: EH,
        triangleright: TH,
        trianglerighteq: PH,
        tridot: AH,
        trie: LH,
        triminus: IH,
        TripleDot: OH,
        triplus: MH,
        trisb: DH,
        tritime: RH,
        trpezium: $H,
        Tscr: qH,
        tscr: BH,
        TScy: UH,
        tscy: FH,
        TSHcy: jH,
        tshcy: HH,
        Tstrok: VH,
        tstrok: zH,
        twixt: WH,
        twoheadleftarrow: GH,
        twoheadrightarrow: JH,
        Uacute: YH,
        uacute: KH,
        uarr: XH,
        Uarr: QH,
        uArr: ZH,
        Uarrocir: t9,
        Ubrcy: e9,
        ubrcy: n9,
        Ubreve: s9,
        ubreve: r9,
        Ucirc: o9,
        ucirc: i9,
        Ucy: a9,
        ucy: c9,
        udarr: l9,
        Udblac: u9,
        udblac: d9,
        udhar: h9,
        ufisht: p9,
        Ufr: f9,
        ufr: m9,
        Ugrave: g9,
        ugrave: b9,
        uHar: _9,
        uharl: y9,
        uharr: w9,
        uhblk: v9,
        ulcorn: S9,
        ulcorner: C9,
        ulcrop: x9,
        ultri: N9,
        Umacr: k9,
        umacr: E9,
        uml: T9,
        UnderBar: P9,
        UnderBrace: A9,
        UnderBracket: L9,
        UnderParenthesis: I9,
        Union: O9,
        UnionPlus: M9,
        Uogon: D9,
        uogon: R9,
        Uopf: $9,
        uopf: q9,
        UpArrowBar: B9,
        uparrow: U9,
        UpArrow: F9,
        Uparrow: j9,
        UpArrowDownArrow: H9,
        updownarrow: V9,
        UpDownArrow: z9,
        Updownarrow: W9,
        UpEquilibrium: G9,
        upharpoonleft: J9,
        upharpoonright: Y9,
        uplus: K9,
        UpperLeftArrow: X9,
        UpperRightArrow: Q9,
        upsi: Z9,
        Upsi: tV,
        upsih: eV,
        Upsilon: nV,
        upsilon: sV,
        UpTeeArrow: rV,
        UpTee: oV,
        upuparrows: iV,
        urcorn: aV,
        urcorner: cV,
        urcrop: lV,
        Uring: uV,
        uring: dV,
        urtri: hV,
        Uscr: pV,
        uscr: fV,
        utdot: mV,
        Utilde: gV,
        utilde: bV,
        utri: _V,
        utrif: yV,
        uuarr: wV,
        Uuml: vV,
        uuml: SV,
        uwangle: CV,
        vangrt: xV,
        varepsilon: NV,
        varkappa: kV,
        varnothing: EV,
        varphi: TV,
        varpi: PV,
        varpropto: AV,
        varr: LV,
        vArr: IV,
        varrho: OV,
        varsigma: MV,
        varsubsetneq: DV,
        varsubsetneqq: RV,
        varsupsetneq: $V,
        varsupsetneqq: qV,
        vartheta: BV,
        vartriangleleft: UV,
        vartriangleright: FV,
        vBar: jV,
        Vbar: HV,
        vBarv: VV,
        Vcy: zV,
        vcy: WV,
        vdash: GV,
        vDash: JV,
        Vdash: YV,
        VDash: KV,
        Vdashl: XV,
        veebar: QV,
        vee: ZV,
        Vee: tz,
        veeeq: ez,
        vellip: nz,
        verbar: sz,
        Verbar: rz,
        vert: oz,
        Vert: iz,
        VerticalBar: az,
        VerticalLine: cz,
        VerticalSeparator: lz,
        VerticalTilde: uz,
        VeryThinSpace: dz,
        Vfr: hz,
        vfr: pz,
        vltri: fz,
        vnsub: mz,
        vnsup: gz,
        Vopf: bz,
        vopf: _z,
        vprop: yz,
        vrtri: wz,
        Vscr: vz,
        vscr: Sz,
        vsubnE: Cz,
        vsubne: xz,
        vsupnE: Nz,
        vsupne: kz,
        Vvdash: Ez,
        vzigzag: Tz,
        Wcirc: Pz,
        wcirc: Az,
        wedbar: Lz,
        wedge: Iz,
        Wedge: Oz,
        wedgeq: Mz,
        weierp: Dz,
        Wfr: Rz,
        wfr: $z,
        Wopf: qz,
        wopf: Bz,
        wp: Uz,
        wr: Fz,
        wreath: jz,
        Wscr: Hz,
        wscr: Vz,
        xcap: zz,
        xcirc: Wz,
        xcup: Gz,
        xdtri: Jz,
        Xfr: Yz,
        xfr: Kz,
        xharr: Xz,
        xhArr: Qz,
        Xi: Zz,
        xi: tW,
        xlarr: eW,
        xlArr: nW,
        xmap: sW,
        xnis: rW,
        xodot: oW,
        Xopf: iW,
        xopf: aW,
        xoplus: cW,
        xotime: lW,
        xrarr: uW,
        xrArr: dW,
        Xscr: hW,
        xscr: pW,
        xsqcup: fW,
        xuplus: mW,
        xutri: gW,
        xvee: bW,
        xwedge: _W,
        Yacute: yW,
        yacute: wW,
        YAcy: vW,
        yacy: SW,
        Ycirc: CW,
        ycirc: xW,
        Ycy: NW,
        ycy: kW,
        yen: EW,
        Yfr: TW,
        yfr: PW,
        YIcy: AW,
        yicy: LW,
        Yopf: IW,
        yopf: OW,
        Yscr: MW,
        yscr: DW,
        YUcy: RW,
        yucy: $W,
        yuml: qW,
        Yuml: BW,
        Zacute: UW,
        zacute: FW,
        Zcaron: jW,
        zcaron: HW,
        Zcy: VW,
        zcy: zW,
        Zdot: WW,
        zdot: GW,
        zeetrf: JW,
        ZeroWidthSpace: YW,
        Zeta: KW,
        zeta: XW,
        zfr: QW,
        Zfr: ZW,
        ZHcy: tG,
        zhcy: eG,
        zigrarr: nG,
        zopf: sG,
        Zopf: rG,
        Zscr: oG,
        zscr: iG,
        zwj: aG,
        zwnj: cG
    },
    lG = "Á",
    uG = "á",
    dG = "Â",
    hG = "â",
    pG = "´",
    fG = "Æ",
    mG = "æ",
    gG = "À",
    bG = "à",
    _G = "&",
    yG = "&",
    wG = "Å",
    vG = "å",
    SG = "Ã",
    CG = "ã",
    xG = "Ä",
    NG = "ä",
    kG = "¦",
    EG = "Ç",
    TG = "ç",
    PG = "¸",
    AG = "¢",
    LG = "©",
    IG = "©",
    OG = "¤",
    MG = "°",
    DG = "÷",
    RG = "É",
    $G = "é",
    qG = "Ê",
    BG = "ê",
    UG = "È",
    FG = "è",
    jG = "Ð",
    HG = "ð",
    VG = "Ë",
    zG = "ë",
    WG = "½",
    GG = "¼",
    JG = "¾",
    YG = ">",
    KG = ">",
    XG = "Í",
    QG = "í",
    ZG = "Î",
    tJ = "î",
    eJ = "¡",
    nJ = "Ì",
    sJ = "ì",
    rJ = "¿",
    oJ = "Ï",
    iJ = "ï",
    aJ = "«",
    cJ = "<",
    lJ = "<",
    uJ = "¯",
    dJ = "µ",
    hJ = "·",
    pJ = " ",
    fJ = "¬",
    mJ = "Ñ",
    gJ = "ñ",
    bJ = "Ó",
    _J = "ó",
    yJ = "Ô",
    wJ = "ô",
    vJ = "Ò",
    SJ = "ò",
    CJ = "ª",
    xJ = "º",
    NJ = "Ø",
    kJ = "ø",
    EJ = "Õ",
    TJ = "õ",
    PJ = "Ö",
    AJ = "ö",
    LJ = "¶",
    IJ = "±",
    OJ = "£",
    MJ = '"',
    DJ = '"',
    RJ = "»",
    $J = "®",
    qJ = "®",
    BJ = "§",
    UJ = "­",
    FJ = "¹",
    jJ = "²",
    HJ = "³",
    VJ = "ß",
    zJ = "Þ",
    WJ = "þ",
    GJ = "×",
    JJ = "Ú",
    YJ = "ú",
    KJ = "Û",
    XJ = "û",
    QJ = "Ù",
    ZJ = "ù",
    tY = "¨",
    eY = "Ü",
    nY = "ü",
    sY = "Ý",
    rY = "ý",
    oY = "¥",
    iY = "ÿ",
    Nl = {
        Aacute: lG,
        aacute: uG,
        Acirc: dG,
        acirc: hG,
        acute: pG,
        AElig: fG,
        aelig: mG,
        Agrave: gG,
        agrave: bG,
        amp: _G,
        AMP: yG,
        Aring: wG,
        aring: vG,
        Atilde: SG,
        atilde: CG,
        Auml: xG,
        auml: NG,
        brvbar: kG,
        Ccedil: EG,
        ccedil: TG,
        cedil: PG,
        cent: AG,
        copy: LG,
        COPY: IG,
        curren: OG,
        deg: MG,
        divide: DG,
        Eacute: RG,
        eacute: $G,
        Ecirc: qG,
        ecirc: BG,
        Egrave: UG,
        egrave: FG,
        ETH: jG,
        eth: HG,
        Euml: VG,
        euml: zG,
        frac12: WG,
        frac14: GG,
        frac34: JG,
        gt: YG,
        GT: KG,
        Iacute: XG,
        iacute: QG,
        Icirc: ZG,
        icirc: tJ,
        iexcl: eJ,
        Igrave: nJ,
        igrave: sJ,
        iquest: rJ,
        Iuml: oJ,
        iuml: iJ,
        laquo: aJ,
        lt: cJ,
        LT: lJ,
        macr: uJ,
        micro: dJ,
        middot: hJ,
        nbsp: pJ,
        not: fJ,
        Ntilde: mJ,
        ntilde: gJ,
        Oacute: bJ,
        oacute: _J,
        Ocirc: yJ,
        ocirc: wJ,
        Ograve: vJ,
        ograve: SJ,
        ordf: CJ,
        ordm: xJ,
        Oslash: NJ,
        oslash: kJ,
        Otilde: EJ,
        otilde: TJ,
        Ouml: PJ,
        ouml: AJ,
        para: LJ,
        plusmn: IJ,
        pound: OJ,
        quot: MJ,
        QUOT: DJ,
        raquo: RJ,
        reg: $J,
        REG: qJ,
        sect: BJ,
        shy: UJ,
        sup1: FJ,
        sup2: jJ,
        sup3: HJ,
        szlig: VJ,
        THORN: zJ,
        thorn: WJ,
        times: GJ,
        Uacute: JJ,
        uacute: YJ,
        Ucirc: KJ,
        ucirc: XJ,
        Ugrave: QJ,
        ugrave: ZJ,
        uml: tY,
        Uuml: eY,
        uuml: nY,
        Yacute: sY,
        yacute: rY,
        yen: oY,
        yuml: iY
    },
    aY = "&",
    cY = "'",
    lY = ">",
    uY = "<",
    dY = '"',
    _i = {
        amp: aY,
        apos: cY,
        gt: lY,
        lt: uY,
        quot: dY
    };
var Pr = Q && Q.__importDefault || function(n) {
    return n && n.__esModule ? n : {
        default: n
    }
};
Object.defineProperty(Er, "__esModule", {
    value: !0
});
var hY = Pr(Tr),
    pY = Pr(bi),
    ba = Pr(Nl),
    fY = Pr(_i);

function Jt(n) {
    return n === " " || n === `
` || n === "	" || n === "\f" || n === "\r"
}

function Zt(n, t, e) {
    var s = n.toLowerCase();
    return n === s ? function(o, i) {
        i === s ? o._state = t : (o._state = e, o._index--)
    } : function(o, i) {
        i === s || i === n ? o._state = t : (o._state = e, o._index--)
    }
}

function nn(n, t) {
    var e = n.toLowerCase();
    return function(s, o) {
        o === e || o === n ? s._state = t : (s._state = 3, s._index--)
    }
}
var mY = Zt("C", 23, 16),
    gY = Zt("D", 24, 16),
    bY = Zt("A", 25, 16),
    _Y = Zt("T", 26, 16),
    yY = Zt("A", 27, 16),
    wY = nn("R", 34),
    vY = nn("I", 35),
    SY = nn("P", 36),
    CY = nn("T", 37),
    xY = Zt("R", 39, 1),
    NY = Zt("I", 40, 1),
    kY = Zt("P", 41, 1),
    EY = Zt("T", 42, 1),
    TY = nn("Y", 44),
    PY = nn("L", 45),
    AY = nn("E", 46),
    LY = Zt("Y", 48, 1),
    IY = Zt("L", 49, 1),
    OY = Zt("E", 50, 1),
    MY = Zt("#", 52, 53),
    DY = Zt("X", 55, 54),
    RY = function() {
        function n(t, e) {
            this._state = 1, this._buffer = "", this._sectionStart = 0, this._index = 0, this._bufferOffset = 0, this._baseState = 1, this._special = 1, this._running = !0, this._ended = !1, this._cbs = e, this._xmlMode = !!(t && t.xmlMode), this._decodeEntities = !!(t && t.decodeEntities)
        }
        return n.prototype.reset = function() {
            this._state = 1, this._buffer = "", this._sectionStart = 0, this._index = 0, this._bufferOffset = 0, this._baseState = 1, this._special = 1, this._running = !0, this._ended = !1
        }, n.prototype._stateText = function(t) {
            t === "<" ? (this._index > this._sectionStart && this._cbs.ontext(this._getSection()), this._state = 2, this._sectionStart = this._index) : this._decodeEntities && this._special === 1 && t === "&" && (this._index > this._sectionStart && this._cbs.ontext(this._getSection()), this._baseState = 1, this._state = 51, this._sectionStart = this._index)
        }, n.prototype._stateBeforeTagName = function(t) {
            t === "/" ? this._state = 5 : t === "<" ? (this._cbs.ontext(this._getSection()), this._sectionStart = this._index) : t === ">" || this._special !== 1 || Jt(t) ? this._state = 1 : t === "!" ? (this._state = 15, this._sectionStart = this._index + 1) : t === "?" ? (this._state = 17, this._sectionStart = this._index + 1) : (this._state = !this._xmlMode && (t === "s" || t === "S") ? 31 : 3, this._sectionStart = this._index)
        }, n.prototype._stateInTagName = function(t) {
            (t === "/" || t === ">" || Jt(t)) && (this._emitToken("onopentagname"), this._state = 8, this._index--)
        }, n.prototype._stateBeforeClosingTagName = function(t) {
            Jt(t) || (t === ">" ? this._state = 1 : this._special !== 1 ? t === "s" || t === "S" ? this._state = 32 : (this._state = 1, this._index--) : (this._state = 6, this._sectionStart = this._index))
        }, n.prototype._stateInClosingTagName = function(t) {
            (t === ">" || Jt(t)) && (this._emitToken("onclosetag"), this._state = 7, this._index--)
        }, n.prototype._stateAfterClosingTagName = function(t) {
            t === ">" && (this._state = 1, this._sectionStart = this._index + 1)
        }, n.prototype._stateBeforeAttributeName = function(t) {
            t === ">" ? (this._cbs.onopentagend(), this._state = 1, this._sectionStart = this._index + 1) : t === "/" ? this._state = 4 : Jt(t) || (this._state = 9, this._sectionStart = this._index)
        }, n.prototype._stateInSelfClosingTag = function(t) {
            t === ">" ? (this._cbs.onselfclosingtag(), this._state = 1, this._sectionStart = this._index + 1) : Jt(t) || (this._state = 8, this._index--)
        }, n.prototype._stateInAttributeName = function(t) {
            (t === "=" || t === "/" || t === ">" || Jt(t)) && (this._cbs.onattribname(this._getSection()), this._sectionStart = -1, this._state = 10, this._index--)
        }, n.prototype._stateAfterAttributeName = function(t) {
            t === "=" ? this._state = 11 : t === "/" || t === ">" ? (this._cbs.onattribend(), this._state = 8, this._index--) : Jt(t) || (this._cbs.onattribend(), this._state = 9, this._sectionStart = this._index)
        }, n.prototype._stateBeforeAttributeValue = function(t) {
            t === '"' ? (this._state = 12, this._sectionStart = this._index + 1) : t === "'" ? (this._state = 13, this._sectionStart = this._index + 1) : Jt(t) || (this._state = 14, this._sectionStart = this._index, this._index--)
        }, n.prototype._stateInAttributeValueDoubleQuotes = function(t) {
            t === '"' ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = 8) : this._decodeEntities && t === "&" && (this._emitToken("onattribdata"), this._baseState = this._state, this._state = 51, this._sectionStart = this._index)
        }, n.prototype._stateInAttributeValueSingleQuotes = function(t) {
            t === "'" ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = 8) : this._decodeEntities && t === "&" && (this._emitToken("onattribdata"), this._baseState = this._state, this._state = 51, this._sectionStart = this._index)
        }, n.prototype._stateInAttributeValueNoQuotes = function(t) {
            Jt(t) || t === ">" ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = 8, this._index--) : this._decodeEntities && t === "&" && (this._emitToken("onattribdata"), this._baseState = this._state, this._state = 51, this._sectionStart = this._index)
        }, n.prototype._stateBeforeDeclaration = function(t) {
            this._state = t === "[" ? 22 : t === "-" ? 18 : 16
        }, n.prototype._stateInDeclaration = function(t) {
            t === ">" && (this._cbs.ondeclaration(this._getSection()), this._state = 1, this._sectionStart = this._index + 1)
        }, n.prototype._stateInProcessingInstruction = function(t) {
            t === ">" && (this._cbs.onprocessinginstruction(this._getSection()), this._state = 1, this._sectionStart = this._index + 1)
        }, n.prototype._stateBeforeComment = function(t) {
            t === "-" ? (this._state = 19, this._sectionStart = this._index + 1) : this._state = 16
        }, n.prototype._stateInComment = function(t) {
            t === "-" && (this._state = 20)
        }, n.prototype._stateAfterComment1 = function(t) {
            t === "-" ? this._state = 21 : this._state = 19
        }, n.prototype._stateAfterComment2 = function(t) {
            t === ">" ? (this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2)), this._state = 1, this._sectionStart = this._index + 1) : t !== "-" && (this._state = 19)
        }, n.prototype._stateBeforeCdata6 = function(t) {
            t === "[" ? (this._state = 28, this._sectionStart = this._index + 1) : (this._state = 16, this._index--)
        }, n.prototype._stateInCdata = function(t) {
            t === "]" && (this._state = 29)
        }, n.prototype._stateAfterCdata1 = function(t) {
            t === "]" ? this._state = 30 : this._state = 28
        }, n.prototype._stateAfterCdata2 = function(t) {
            t === ">" ? (this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2)), this._state = 1, this._sectionStart = this._index + 1) : t !== "]" && (this._state = 28)
        }, n.prototype._stateBeforeSpecial = function(t) {
            t === "c" || t === "C" ? this._state = 33 : t === "t" || t === "T" ? this._state = 43 : (this._state = 3, this._index--)
        }, n.prototype._stateBeforeSpecialEnd = function(t) {
            this._special === 2 && (t === "c" || t === "C") ? this._state = 38 : this._special === 3 && (t === "t" || t === "T") ? this._state = 47 : this._state = 1
        }, n.prototype._stateBeforeScript5 = function(t) {
            (t === "/" || t === ">" || Jt(t)) && (this._special = 2), this._state = 3, this._index--
        }, n.prototype._stateAfterScript5 = function(t) {
            t === ">" || Jt(t) ? (this._special = 1, this._state = 6, this._sectionStart = this._index - 6, this._index--) : this._state = 1
        }, n.prototype._stateBeforeStyle4 = function(t) {
            (t === "/" || t === ">" || Jt(t)) && (this._special = 3), this._state = 3, this._index--
        }, n.prototype._stateAfterStyle4 = function(t) {
            t === ">" || Jt(t) ? (this._special = 1, this._state = 6, this._sectionStart = this._index - 5, this._index--) : this._state = 1
        }, n.prototype._parseNamedEntityStrict = function() {
            if (this._sectionStart + 1 < this._index) {
                var t = this._buffer.substring(this._sectionStart + 1, this._index),
                    e = this._xmlMode ? fY.default : pY.default;
                Object.prototype.hasOwnProperty.call(e, t) && (this._emitPartial(e[t]), this._sectionStart = this._index + 1)
            }
        }, n.prototype._parseLegacyEntity = function() {
            var t = this._sectionStart + 1,
                e = this._index - t;
            for (e > 6 && (e = 6); e >= 2;) {
                var s = this._buffer.substr(t, e);
                if (Object.prototype.hasOwnProperty.call(ba.default, s)) {
                    this._emitPartial(ba.default[s]), this._sectionStart += e + 1;
                    return
                } else e--
            }
        }, n.prototype._stateInNamedEntity = function(t) {
            t === ";" ? (this._parseNamedEntityStrict(), this._sectionStart + 1 < this._index && !this._xmlMode && this._parseLegacyEntity(), this._state = this._baseState) : (t < "a" || t > "z") && (t < "A" || t > "Z") && (t < "0" || t > "9") && (this._xmlMode || this._sectionStart + 1 === this._index || (this._baseState !== 1 ? t !== "=" && this._parseNamedEntityStrict() : this._parseLegacyEntity()), this._state = this._baseState, this._index--)
        }, n.prototype._decodeNumericEntity = function(t, e) {
            var s = this._sectionStart + t;
            if (s !== this._index) {
                var o = this._buffer.substring(s, this._index),
                    i = parseInt(o, e);
                this._emitPartial(hY.default(i)), this._sectionStart = this._index
            } else this._sectionStart--;
            this._state = this._baseState
        }, n.prototype._stateInNumericEntity = function(t) {
            t === ";" ? (this._decodeNumericEntity(2, 10), this._sectionStart++) : (t < "0" || t > "9") && (this._xmlMode ? this._state = this._baseState : this._decodeNumericEntity(2, 10), this._index--)
        }, n.prototype._stateInHexEntity = function(t) {
            t === ";" ? (this._decodeNumericEntity(3, 16), this._sectionStart++) : (t < "a" || t > "f") && (t < "A" || t > "F") && (t < "0" || t > "9") && (this._xmlMode ? this._state = this._baseState : this._decodeNumericEntity(3, 16), this._index--)
        }, n.prototype._cleanup = function() {
            this._sectionStart < 0 ? (this._buffer = "", this._bufferOffset += this._index, this._index = 0) : this._running && (this._state === 1 ? (this._sectionStart !== this._index && this._cbs.ontext(this._buffer.substr(this._sectionStart)), this._buffer = "", this._bufferOffset += this._index, this._index = 0) : this._sectionStart === this._index ? (this._buffer = "", this._bufferOffset += this._index, this._index = 0) : (this._buffer = this._buffer.substr(this._sectionStart), this._index -= this._sectionStart, this._bufferOffset += this._sectionStart), this._sectionStart = 0)
        }, n.prototype.write = function(t) {
            this._ended && this._cbs.onerror(Error(".write() after done!")), this._buffer += t, this._parse()
        }, n.prototype._parse = function() {
            for (; this._index < this._buffer.length && this._running;) {
                var t = this._buffer.charAt(this._index);
                this._state === 1 ? this._stateText(t) : this._state === 12 ? this._stateInAttributeValueDoubleQuotes(t) : this._state === 9 ? this._stateInAttributeName(t) : this._state === 19 ? this._stateInComment(t) : this._state === 8 ? this._stateBeforeAttributeName(t) : this._state === 3 ? this._stateInTagName(t) : this._state === 6 ? this._stateInClosingTagName(t) : this._state === 2 ? this._stateBeforeTagName(t) : this._state === 10 ? this._stateAfterAttributeName(t) : this._state === 13 ? this._stateInAttributeValueSingleQuotes(t) : this._state === 11 ? this._stateBeforeAttributeValue(t) : this._state === 5 ? this._stateBeforeClosingTagName(t) : this._state === 7 ? this._stateAfterClosingTagName(t) : this._state === 31 ? this._stateBeforeSpecial(t) : this._state === 20 ? this._stateAfterComment1(t) : this._state === 14 ? this._stateInAttributeValueNoQuotes(t) : this._state === 4 ? this._stateInSelfClosingTag(t) : this._state === 16 ? this._stateInDeclaration(t) : this._state === 15 ? this._stateBeforeDeclaration(t) : this._state === 21 ? this._stateAfterComment2(t) : this._state === 18 ? this._stateBeforeComment(t) : this._state === 32 ? this._stateBeforeSpecialEnd(t) : this._state === 38 ? xY(this, t) : this._state === 39 ? NY(this, t) : this._state === 40 ? kY(this, t) : this._state === 33 ? wY(this, t) : this._state === 34 ? vY(this, t) : this._state === 35 ? SY(this, t) : this._state === 36 ? CY(this, t) : this._state === 37 ? this._stateBeforeScript5(t) : this._state === 41 ? EY(this, t) : this._state === 42 ? this._stateAfterScript5(t) : this._state === 43 ? TY(this, t) : this._state === 28 ? this._stateInCdata(t) : this._state === 44 ? PY(this, t) : this._state === 45 ? AY(this, t) : this._state === 46 ? this._stateBeforeStyle4(t) : this._state === 47 ? LY(this, t) : this._state === 48 ? IY(this, t) : this._state === 49 ? OY(this, t) : this._state === 50 ? this._stateAfterStyle4(t) : this._state === 17 ? this._stateInProcessingInstruction(t) : this._state === 53 ? this._stateInNamedEntity(t) : this._state === 22 ? mY(this, t) : this._state === 51 ? MY(this, t) : this._state === 23 ? gY(this, t) : this._state === 24 ? bY(this, t) : this._state === 29 ? this._stateAfterCdata1(t) : this._state === 30 ? this._stateAfterCdata2(t) : this._state === 25 ? _Y(this, t) : this._state === 26 ? yY(this, t) : this._state === 27 ? this._stateBeforeCdata6(t) : this._state === 55 ? this._stateInHexEntity(t) : this._state === 54 ? this._stateInNumericEntity(t) : this._state === 52 ? DY(this, t) : this._cbs.onerror(Error("unknown _state"), this._state), this._index++
            }
            this._cleanup()
        }, n.prototype.pause = function() {
            this._running = !1
        }, n.prototype.resume = function() {
            this._running = !0, this._index < this._buffer.length && this._parse(), this._ended && this._finish()
        }, n.prototype.end = function(t) {
            this._ended && this._cbs.onerror(Error(".end() after done!")), t && this.write(t), this._ended = !0, this._running && this._finish()
        }, n.prototype._finish = function() {
            this._sectionStart < this._index && this._handleTrailingData(), this._cbs.onend()
        }, n.prototype._handleTrailingData = function() {
            var t = this._buffer.substr(this._sectionStart);
            this._state === 28 || this._state === 29 || this._state === 30 ? this._cbs.oncdata(t) : this._state === 19 || this._state === 20 || this._state === 21 ? this._cbs.oncomment(t) : this._state === 53 && !this._xmlMode ? (this._parseLegacyEntity(), this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData())) : this._state === 54 && !this._xmlMode ? (this._decodeNumericEntity(2, 10), this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData())) : this._state === 55 && !this._xmlMode ? (this._decodeNumericEntity(3, 16), this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData())) : this._state !== 3 && this._state !== 8 && this._state !== 11 && this._state !== 10 && this._state !== 9 && this._state !== 13 && this._state !== 12 && this._state !== 14 && this._state !== 6 && this._cbs.ontext(t)
        }, n.prototype.getAbsoluteIndex = function() {
            return this._bufferOffset + this._index
        }, n.prototype._getSection = function() {
            return this._buffer.substring(this._sectionStart, this._index)
        }, n.prototype._emitToken = function(t) {
            this._cbs[t](this._getSection()), this._sectionStart = -1
        }, n.prototype._emitPartial = function(t) {
            this._baseState !== 1 ? this._cbs.onattribdata(t) : this._cbs.ontext(t)
        }, n
    }();
Er.default = RY;
var yi = {
        exports: {}
    },
    gn = typeof Reflect == "object" ? Reflect : null,
    _a = gn && typeof gn.apply == "function" ? gn.apply : function(t, e, s) {
        return Function.prototype.apply.call(t, e, s)
    },
    Bs;
gn && typeof gn.ownKeys == "function" ? Bs = gn.ownKeys : Object.getOwnPropertySymbols ? Bs = function(t) {
    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
} : Bs = function(t) {
    return Object.getOwnPropertyNames(t)
};

function $Y(n) {
    console && console.warn && console.warn(n)
}
var kl = Number.isNaN || function(t) {
    return t !== t
};

function Ct() {
    Ct.init.call(this)
}
yi.exports = Ct;
yi.exports.once = FY;
Ct.EventEmitter = Ct;
Ct.prototype._events = void 0;
Ct.prototype._eventsCount = 0;
Ct.prototype._maxListeners = void 0;
var ya = 10;

function Ar(n) {
    if (typeof n != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n)
}
Object.defineProperty(Ct, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return ya
    },
    set: function(n) {
        if (typeof n != "number" || n < 0 || kl(n)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + n + ".");
        ya = n
    }
});
Ct.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
Ct.prototype.setMaxListeners = function(t) {
    if (typeof t != "number" || t < 0 || kl(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
    return this._maxListeners = t, this
};

function El(n) {
    return n._maxListeners === void 0 ? Ct.defaultMaxListeners : n._maxListeners
}
Ct.prototype.getMaxListeners = function() {
    return El(this)
};
Ct.prototype.emit = function(t) {
    for (var e = [], s = 1; s < arguments.length; s++) e.push(arguments[s]);
    var o = t === "error",
        i = this._events;
    if (i !== void 0) o = o && i.error === void 0;
    else if (!o) return !1;
    if (o) {
        var a;
        if (e.length > 0 && (a = e[0]), a instanceof Error) throw a;
        var c = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
        throw c.context = a, c
    }
    var l = i[t];
    if (l === void 0) return !1;
    if (typeof l == "function") _a(l, this, e);
    else
        for (var u = l.length, d = Il(l, u), s = 0; s < u; ++s) _a(d[s], this, e);
    return !0
};

function Tl(n, t, e, s) {
    var o, i, a;
    if (Ar(e), i = n._events, i === void 0 ? (i = n._events = Object.create(null), n._eventsCount = 0) : (i.newListener !== void 0 && (n.emit("newListener", t, e.listener ? e.listener : e), i = n._events), a = i[t]), a === void 0) a = i[t] = e, ++n._eventsCount;
    else if (typeof a == "function" ? a = i[t] = s ? [e, a] : [a, e] : s ? a.unshift(e) : a.push(e), o = El(n), o > 0 && a.length > o && !a.warned) {
        a.warned = !0;
        var c = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        c.name = "MaxListenersExceededWarning", c.emitter = n, c.type = t, c.count = a.length, $Y(c)
    }
    return n
}
Ct.prototype.addListener = function(t, e) {
    return Tl(this, t, e, !1)
};
Ct.prototype.on = Ct.prototype.addListener;
Ct.prototype.prependListener = function(t, e) {
    return Tl(this, t, e, !0)
};

function qY() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function Pl(n, t, e) {
    var s = {
            fired: !1,
            wrapFn: void 0,
            target: n,
            type: t,
            listener: e
        },
        o = qY.bind(s);
    return o.listener = e, s.wrapFn = o, o
}
Ct.prototype.once = function(t, e) {
    return Ar(e), this.on(t, Pl(this, t, e)), this
};
Ct.prototype.prependOnceListener = function(t, e) {
    return Ar(e), this.prependListener(t, Pl(this, t, e)), this
};
Ct.prototype.removeListener = function(t, e) {
    var s, o, i, a, c;
    if (Ar(e), o = this._events, o === void 0) return this;
    if (s = o[t], s === void 0) return this;
    if (s === e || s.listener === e) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete o[t], o.removeListener && this.emit("removeListener", t, s.listener || e));
    else if (typeof s != "function") {
        for (i = -1, a = s.length - 1; a >= 0; a--)
            if (s[a] === e || s[a].listener === e) {
                c = s[a].listener, i = a;
                break
            }
        if (i < 0) return this;
        i === 0 ? s.shift() : BY(s, i), s.length === 1 && (o[t] = s[0]), o.removeListener !== void 0 && this.emit("removeListener", t, c || e)
    }
    return this
};
Ct.prototype.off = Ct.prototype.removeListener;
Ct.prototype.removeAllListeners = function(t) {
    var e, s, o;
    if (s = this._events, s === void 0) return this;
    if (s.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : s[t] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete s[t]), this;
    if (arguments.length === 0) {
        var i = Object.keys(s),
            a;
        for (o = 0; o < i.length; ++o) a = i[o], a !== "removeListener" && this.removeAllListeners(a);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (e = s[t], typeof e == "function") this.removeListener(t, e);
    else if (e !== void 0)
        for (o = e.length - 1; o >= 0; o--) this.removeListener(t, e[o]);
    return this
};

function Al(n, t, e) {
    var s = n._events;
    if (s === void 0) return [];
    var o = s[t];
    return o === void 0 ? [] : typeof o == "function" ? e ? [o.listener || o] : [o] : e ? UY(o) : Il(o, o.length)
}
Ct.prototype.listeners = function(t) {
    return Al(this, t, !0)
};
Ct.prototype.rawListeners = function(t) {
    return Al(this, t, !1)
};
Ct.listenerCount = function(n, t) {
    return typeof n.listenerCount == "function" ? n.listenerCount(t) : Ll.call(n, t)
};
Ct.prototype.listenerCount = Ll;

function Ll(n) {
    var t = this._events;
    if (t !== void 0) {
        var e = t[n];
        if (typeof e == "function") return 1;
        if (e !== void 0) return e.length
    }
    return 0
}
Ct.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Bs(this._events) : []
};

function Il(n, t) {
    for (var e = new Array(t), s = 0; s < t; ++s) e[s] = n[s];
    return e
}

function BY(n, t) {
    for (; t + 1 < n.length; t++) n[t] = n[t + 1];
    n.pop()
}

function UY(n) {
    for (var t = new Array(n.length), e = 0; e < t.length; ++e) t[e] = n[e].listener || n[e];
    return t
}

function FY(n, t) {
    return new Promise(function(e, s) {
        function o(a) {
            n.removeListener(t, i), s(a)
        }

        function i() {
            typeof n.removeListener == "function" && n.removeListener("error", o), e([].slice.call(arguments))
        }
        Ol(n, t, i, {
            once: !0
        }), t !== "error" && jY(n, o, {
            once: !0
        })
    })
}

function jY(n, t, e) {
    typeof n.on == "function" && Ol(n, "error", t, e)
}

function Ol(n, t, e, s) {
    if (typeof n.on == "function") s.once ? n.once(t, e) : n.on(t, e);
    else if (typeof n.addEventListener == "function") n.addEventListener(t, function o(i) {
        s.once && n.removeEventListener(t, o), e(i)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof n)
}
var Ml = yi.exports;
const Zit = Ec(Ml);
var HY = Q && Q.__extends || function() {
        var n = function(t, e) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(s, o) {
                s.__proto__ = o
            } || function(s, o) {
                for (var i in o) o.hasOwnProperty(i) && (s[i] = o[i])
            }, n(t, e)
        };
        return function(t, e) {
            n(t, e);

            function s() {
                this.constructor = t
            }
            t.prototype = e === null ? Object.create(e) : (s.prototype = e.prototype, new s)
        }
    }(),
    VY = Q && Q.__importDefault || function(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    };
Object.defineProperty(kr, "__esModule", {
    value: !0
});
var zY = VY(Er),
    WY = Ml,
    cn = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]),
    St = new Set(["p"]),
    wa = {
        tr: new Set(["tr", "th", "td"]),
        th: new Set(["th"]),
        td: new Set(["thead", "th", "td"]),
        body: new Set(["head", "link", "script"]),
        li: new Set(["li"]),
        p: St,
        h1: St,
        h2: St,
        h3: St,
        h4: St,
        h5: St,
        h6: St,
        select: cn,
        input: cn,
        output: cn,
        button: cn,
        datalist: cn,
        textarea: cn,
        option: new Set(["option"]),
        optgroup: new Set(["optgroup", "option"]),
        dd: new Set(["dt", "dd"]),
        dt: new Set(["dt", "dd"]),
        address: St,
        article: St,
        aside: St,
        blockquote: St,
        details: St,
        div: St,
        dl: St,
        fieldset: St,
        figcaption: St,
        figure: St,
        footer: St,
        form: St,
        header: St,
        hr: St,
        main: St,
        nav: St,
        ol: St,
        pre: St,
        section: St,
        table: St,
        ul: St,
        rt: new Set(["rt", "rp"]),
        rp: new Set(["rt", "rp"]),
        tbody: new Set(["thead", "tbody"]),
        tfoot: new Set(["thead", "tbody"])
    },
    Kr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]),
    va = new Set(["math", "svg"]),
    Sa = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]),
    GY = /\s|\//,
    JY = function(n) {
        HY(t, n);

        function t(e, s) {
            var o = n.call(this) || this;
            return o._tagname = "", o._attribname = "", o._attribvalue = "", o._attribs = null, o._stack = [], o._foreignContext = [], o.startIndex = 0, o.endIndex = null, o.parseChunk = t.prototype.write, o.done = t.prototype.end, o._options = s || {}, o._cbs = e || {}, o._tagname = "", o._attribname = "", o._attribvalue = "", o._attribs = null, o._stack = [], o._foreignContext = [], o.startIndex = 0, o.endIndex = null, o._lowerCaseTagNames = "lowerCaseTags" in o._options ? !!o._options.lowerCaseTags : !o._options.xmlMode, o._lowerCaseAttributeNames = "lowerCaseAttributeNames" in o._options ? !!o._options.lowerCaseAttributeNames : !o._options.xmlMode, o._tokenizer = new(o._options.Tokenizer || zY.default)(o._options, o), o._cbs.onparserinit && o._cbs.onparserinit(o), o
        }
        return t.prototype._updatePosition = function(e) {
            this.endIndex === null ? this._tokenizer._sectionStart <= e ? this.startIndex = 0 : this.startIndex = this._tokenizer._sectionStart - e : this.startIndex = this.endIndex + 1, this.endIndex = this._tokenizer.getAbsoluteIndex()
        }, t.prototype.ontext = function(e) {
            this._updatePosition(1), this.endIndex--, this._cbs.ontext && this._cbs.ontext(e)
        }, t.prototype.onopentagname = function(e) {
            if (this._lowerCaseTagNames && (e = e.toLowerCase()), this._tagname = e, !this._options.xmlMode && Object.prototype.hasOwnProperty.call(wa, e))
                for (var s = void 0; wa[e].has(s = this._stack[this._stack.length - 1]); this.onclosetag(s));
            (this._options.xmlMode || !Kr.has(e)) && (this._stack.push(e), va.has(e) ? this._foreignContext.push(!0) : Sa.has(e) && this._foreignContext.push(!1)), this._cbs.onopentagname && this._cbs.onopentagname(e), this._cbs.onopentag && (this._attribs = {})
        }, t.prototype.onopentagend = function() {
            this._updatePosition(1), this._attribs && (this._cbs.onopentag && this._cbs.onopentag(this._tagname, this._attribs), this._attribs = null), !this._options.xmlMode && this._cbs.onclosetag && Kr.has(this._tagname) && this._cbs.onclosetag(this._tagname), this._tagname = ""
        }, t.prototype.onclosetag = function(e) {
            if (this._updatePosition(1), this._lowerCaseTagNames && (e = e.toLowerCase()), (va.has(e) || Sa.has(e)) && this._foreignContext.pop(), this._stack.length && (this._options.xmlMode || !Kr.has(e))) {
                var s = this._stack.lastIndexOf(e);
                if (s !== -1)
                    if (this._cbs.onclosetag)
                        for (s = this._stack.length - s; s--;) this._cbs.onclosetag(this._stack.pop());
                    else this._stack.length = s;
                else e === "p" && !this._options.xmlMode && (this.onopentagname(e), this._closeCurrentTag())
            } else !this._options.xmlMode && (e === "br" || e === "p") && (this.onopentagname(e), this._closeCurrentTag())
        }, t.prototype.onselfclosingtag = function() {
            this._options.xmlMode || this._options.recognizeSelfClosing || this._foreignContext[this._foreignContext.length - 1] ? this._closeCurrentTag() : this.onopentagend()
        }, t.prototype._closeCurrentTag = function() {
            var e = this._tagname;
            this.onopentagend(), this._stack[this._stack.length - 1] === e && (this._cbs.onclosetag && this._cbs.onclosetag(e), this._stack.pop())
        }, t.prototype.onattribname = function(e) {
            this._lowerCaseAttributeNames && (e = e.toLowerCase()), this._attribname = e
        }, t.prototype.onattribdata = function(e) {
            this._attribvalue += e
        }, t.prototype.onattribend = function() {
            this._cbs.onattribute && this._cbs.onattribute(this._attribname, this._attribvalue), this._attribs && !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname) && (this._attribs[this._attribname] = this._attribvalue), this._attribname = "", this._attribvalue = ""
        }, t.prototype._getInstructionName = function(e) {
            var s = e.search(GY),
                o = s < 0 ? e : e.substr(0, s);
            return this._lowerCaseTagNames && (o = o.toLowerCase()), o
        }, t.prototype.ondeclaration = function(e) {
            if (this._cbs.onprocessinginstruction) {
                var s = this._getInstructionName(e);
                this._cbs.onprocessinginstruction("!" + s, "!" + e)
            }
        }, t.prototype.onprocessinginstruction = function(e) {
            if (this._cbs.onprocessinginstruction) {
                var s = this._getInstructionName(e);
                this._cbs.onprocessinginstruction("?" + s, "?" + e)
            }
        }, t.prototype.oncomment = function(e) {
            this._updatePosition(4), this._cbs.oncomment && this._cbs.oncomment(e), this._cbs.oncommentend && this._cbs.oncommentend()
        }, t.prototype.oncdata = function(e) {
            this._updatePosition(1), this._options.xmlMode || this._options.recognizeCDATA ? (this._cbs.oncdatastart && this._cbs.oncdatastart(), this._cbs.ontext && this._cbs.ontext(e), this._cbs.oncdataend && this._cbs.oncdataend()) : this.oncomment("[CDATA[" + e + "]]")
        }, t.prototype.onerror = function(e) {
            this._cbs.onerror && this._cbs.onerror(e)
        }, t.prototype.onend = function() {
            if (this._cbs.onclosetag)
                for (var e = this._stack.length; e > 0; this._cbs.onclosetag(this._stack[--e]));
            this._cbs.onend && this._cbs.onend()
        }, t.prototype.reset = function() {
            this._cbs.onreset && this._cbs.onreset(), this._tokenizer.reset(), this._tagname = "", this._attribname = "", this._attribs = null, this._stack = [], this._cbs.onparserinit && this._cbs.onparserinit(this)
        }, t.prototype.parseComplete = function(e) {
            this.reset(), this.end(e)
        }, t.prototype.write = function(e) {
            this._tokenizer.write(e)
        }, t.prototype.end = function(e) {
            this._tokenizer.end(e)
        }, t.prototype.pause = function() {
            this._tokenizer.pause()
        }, t.prototype.resume = function() {
            this._tokenizer.resume()
        }, t
    }(WY.EventEmitter);
kr.Parser = JY;
var wi = {},
    Ot = {},
    On = Q && Q.__extends || function() {
        var n = function(t, e) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(s, o) {
                s.__proto__ = o
            } || function(s, o) {
                for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (s[i] = o[i])
            }, n(t, e)
        };
        return function(t, e) {
            n(t, e);

            function s() {
                this.constructor = t
            }
            t.prototype = e === null ? Object.create(e) : (s.prototype = e.prototype, new s)
        }
    }(),
    vo = Q && Q.__assign || function() {
        return vo = Object.assign || function(n) {
            for (var t, e = 1, s = arguments.length; e < s; e++) {
                t = arguments[e];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o])
            }
            return n
        }, vo.apply(this, arguments)
    };
Object.defineProperty(Ot, "__esModule", {
    value: !0
});
Ot.cloneNode = Ot.Element = Ot.NodeWithChildren = Ot.ProcessingInstruction = Ot.Comment = Ot.Text = Ot.DataNode = Ot.Node = void 0;
var YY = new Map([
        ["tag", 1],
        ["script", 1],
        ["style", 1],
        ["directive", 1],
        ["text", 3],
        ["cdata", 4],
        ["comment", 8]
    ]),
    vi = function() {
        function n(t) {
            this.type = t, this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null
        }
        return Object.defineProperty(n.prototype, "nodeType", {
            get: function() {
                var t;
                return (t = YY.get(this.type)) !== null && t !== void 0 ? t : 1
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n.prototype, "parentNode", {
            get: function() {
                return this.parent
            },
            set: function(t) {
                this.parent = t
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n.prototype, "previousSibling", {
            get: function() {
                return this.prev
            },
            set: function(t) {
                this.prev = t
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n.prototype, "nextSibling", {
            get: function() {
                return this.next
            },
            set: function(t) {
                this.next = t
            },
            enumerable: !1,
            configurable: !0
        }), n.prototype.cloneNode = function(t) {
            return t === void 0 && (t = !1), Ci(this, t)
        }, n
    }();
Ot.Node = vi;
var Lr = function(n) {
    On(t, n);

    function t(e, s) {
        var o = n.call(this, e) || this;
        return o.data = s, o
    }
    return Object.defineProperty(t.prototype, "nodeValue", {
        get: function() {
            return this.data
        },
        set: function(e) {
            this.data = e
        },
        enumerable: !1,
        configurable: !0
    }), t
}(vi);
Ot.DataNode = Lr;
var Dl = function(n) {
    On(t, n);

    function t(e) {
        return n.call(this, "text", e) || this
    }
    return t
}(Lr);
Ot.Text = Dl;
var Rl = function(n) {
    On(t, n);

    function t(e) {
        return n.call(this, "comment", e) || this
    }
    return t
}(Lr);
Ot.Comment = Rl;
var $l = function(n) {
    On(t, n);

    function t(e, s) {
        var o = n.call(this, "directive", s) || this;
        return o.name = e, o
    }
    return t
}(Lr);
Ot.ProcessingInstruction = $l;
var Si = function(n) {
    On(t, n);

    function t(e, s) {
        var o = n.call(this, e) || this;
        return o.children = s, o
    }
    return Object.defineProperty(t.prototype, "firstChild", {
        get: function() {
            var e;
            return (e = this.children[0]) !== null && e !== void 0 ? e : null
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lastChild", {
        get: function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : null
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "childNodes", {
        get: function() {
            return this.children
        },
        set: function(e) {
            this.children = e
        },
        enumerable: !1,
        configurable: !0
    }), t
}(vi);
Ot.NodeWithChildren = Si;
var ql = function(n) {
    On(t, n);

    function t(e, s, o) {
        o === void 0 && (o = []);
        var i = n.call(this, e === "script" ? "script" : e === "style" ? "style" : "tag", o) || this;
        return i.name = e, i.attribs = s, i.attribs = s, i
    }
    return Object.defineProperty(t.prototype, "tagName", {
        get: function() {
            return this.name
        },
        set: function(e) {
            this.name = e
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "attributes", {
        get: function() {
            var e = this;
            return Object.keys(this.attribs).map(function(s) {
                return {
                    name: s,
                    value: e.attribs[s]
                }
            })
        },
        enumerable: !1,
        configurable: !0
    }), t
}(Si);
Ot.Element = ql;

function Ci(n, t) {
    switch (t === void 0 && (t = !1), n.type) {
        case "text":
            return new Dl(n.data);
        case "directive":
            {
                var e = n;
                return new $l(e.name, e.data)
            }
        case "comment":
            return new Rl(n.data);
        case "tag":
        case "script":
        case "style":
            {
                var s = n,
                    o = t ? Ca(s.children) : [],
                    i = new ql(s.name, vo({}, s.attribs), o);
                return o.forEach(function(l) {
                    return l.parent = i
                }),
                i
            }
        case "cdata":
            {
                var a = n,
                    o = t ? Ca(a.children) : [],
                    c = new Si("cdata", o);
                return o.forEach(function(u) {
                    return u.parent = c
                }),
                c
            }
        case "doctype":
            throw new Error("Not implemented yet: ElementType.Doctype case")
    }
}
Ot.cloneNode = Ci;

function Ca(n) {
    for (var t = n.map(function(s) {
            return Ci(s, !0)
        }), e = 1; e < t.length; e++) t[e].prev = t[e - 1], t[e - 1].next = t[e];
    return t
}(function(n) {
    var t = Q && Q.__createBinding || (Object.create ? function(c, l, u, d) {
            d === void 0 && (d = u), Object.defineProperty(c, d, {
                enumerable: !0,
                get: function() {
                    return l[u]
                }
            })
        } : function(c, l, u, d) {
            d === void 0 && (d = u), c[d] = l[u]
        }),
        e = Q && Q.__exportStar || function(c, l) {
            for (var u in c) u !== "default" && !Object.prototype.hasOwnProperty.call(l, u) && t(l, c, u)
        };
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.DomHandler = void 0;
    var s = Ot;
    e(Ot, n);
    var o = /\s+/g,
        i = {
            normalizeWhitespace: !1,
            withStartIndices: !1,
            withEndIndices: !1
        },
        a = function() {
            function c(l, u, d) {
                this.dom = [], this._done = !1, this._tagStack = [], this._lastNode = null, this._parser = null, typeof u == "function" && (d = u, u = i), typeof l == "object" && (u = l, l = void 0), this._callback = l != null ? l : null, this._options = u != null ? u : i, this._elementCB = d != null ? d : null
            }
            return c.prototype.onparserinit = function(l) {
                this._parser = l
            }, c.prototype.onreset = function() {
                var l;
                this.dom = [], this._done = !1, this._tagStack = [], this._lastNode = null, this._parser = (l = this._parser) !== null && l !== void 0 ? l : null
            }, c.prototype.onend = function() {
                this._done || (this._done = !0, this._parser = null, this.handleCallback(null))
            }, c.prototype.onerror = function(l) {
                this.handleCallback(l)
            }, c.prototype.onclosetag = function() {
                this._lastNode = null;
                var l = this._tagStack.pop();
                !l || !this._parser || (this._options.withEndIndices && (l.endIndex = this._parser.endIndex), this._elementCB && this._elementCB(l))
            }, c.prototype.onopentag = function(l, u) {
                var d = new s.Element(l, u);
                this.addNode(d), this._tagStack.push(d)
            }, c.prototype.ontext = function(l) {
                var u = this._options.normalizeWhitespace,
                    d = this._lastNode;
                if (d && d.type === "text") u ? d.data = (d.data + l).replace(o, " ") : d.data += l;
                else {
                    u && (l = l.replace(o, " "));
                    var h = new s.Text(l);
                    this.addNode(h), this._lastNode = h
                }
            }, c.prototype.oncomment = function(l) {
                if (this._lastNode && this._lastNode.type === "comment") {
                    this._lastNode.data += l;
                    return
                }
                var u = new s.Comment(l);
                this.addNode(u), this._lastNode = u
            }, c.prototype.oncommentend = function() {
                this._lastNode = null
            }, c.prototype.oncdatastart = function() {
                var l = new s.Text(""),
                    u = new s.NodeWithChildren("cdata", [l]);
                this.addNode(u), l.parent = u, this._lastNode = l
            }, c.prototype.oncdataend = function() {
                this._lastNode = null
            }, c.prototype.onprocessinginstruction = function(l, u) {
                var d = new s.ProcessingInstruction(l, u);
                this.addNode(d)
            }, c.prototype.handleCallback = function(l) {
                if (typeof this._callback == "function") this._callback(l, this.dom);
                else if (l) throw l
            }, c.prototype.addNode = function(l) {
                var u = this._tagStack[this._tagStack.length - 1],
                    d = u ? u.children : this.dom,
                    h = d[d.length - 1];
                this._parser && (this._options.withStartIndices && (l.startIndex = this._parser.startIndex), this._options.withEndIndices && (l.endIndex = this._parser.endIndex)), d.push(l), h && (l.prev = h, h.next = l), u && (l.parent = u), this._lastNode = null
            }, c.prototype.addDataNode = function(l) {
                this.addNode(l), this._lastNode = l
            }, c
        }();
    n.DomHandler = a, n.default = a
})(wi);
var Mn = {};
(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.Doctype = n.CDATA = n.Tag = n.Style = n.Script = n.Comment = n.Directive = n.Text = n.Root = n.isTag = n.ElementType = void 0;
    var t;
    (function(s) {
        s.Root = "root", s.Text = "text", s.Directive = "directive", s.Comment = "comment", s.Script = "script", s.Style = "style", s.Tag = "tag", s.CDATA = "cdata", s.Doctype = "doctype"
    })(t = n.ElementType || (n.ElementType = {}));

    function e(s) {
        return s.type === t.Tag || s.type === t.Script || s.type === t.Style
    }
    n.isTag = e, n.Root = t.Root, n.Text = t.Text, n.Directive = t.Directive, n.Comment = t.Comment, n.Script = t.Script, n.Style = t.Style, n.Tag = t.Tag, n.CDATA = t.CDATA, n.Doctype = t.Doctype
})(Mn);
var Kn = {},
    xi = {},
    ee = {},
    sn = {},
    mt = {},
    rn = Q && Q.__extends || function() {
        var n = function(t, e) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(s, o) {
                s.__proto__ = o
            } || function(s, o) {
                for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (s[i] = o[i])
            }, n(t, e)
        };
        return function(t, e) {
            if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            n(t, e);

            function s() {
                this.constructor = t
            }
            t.prototype = e === null ? Object.create(e) : (s.prototype = e.prototype, new s)
        }
    }(),
    Hn = Q && Q.__assign || function() {
        return Hn = Object.assign || function(n) {
            for (var t, e = 1, s = arguments.length; e < s; e++) {
                t = arguments[e];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o])
            }
            return n
        }, Hn.apply(this, arguments)
    };
Object.defineProperty(mt, "__esModule", {
    value: !0
});
mt.cloneNode = mt.hasChildren = mt.isDocument = mt.isDirective = mt.isComment = mt.isText = mt.isCDATA = mt.isTag = mt.Element = mt.Document = mt.NodeWithChildren = mt.ProcessingInstruction = mt.Comment = mt.Text = mt.DataNode = mt.Node = void 0;
var Pt = Mn,
    KY = new Map([
        [Pt.ElementType.Tag, 1],
        [Pt.ElementType.Script, 1],
        [Pt.ElementType.Style, 1],
        [Pt.ElementType.Directive, 1],
        [Pt.ElementType.Text, 3],
        [Pt.ElementType.CDATA, 4],
        [Pt.ElementType.Comment, 8],
        [Pt.ElementType.Root, 9]
    ]),
    Ni = function() {
        function n(t) {
            this.type = t, this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null
        }
        return Object.defineProperty(n.prototype, "nodeType", {
            get: function() {
                var t;
                return (t = KY.get(this.type)) !== null && t !== void 0 ? t : 1
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n.prototype, "parentNode", {
            get: function() {
                return this.parent
            },
            set: function(t) {
                this.parent = t
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n.prototype, "previousSibling", {
            get: function() {
                return this.prev
            },
            set: function(t) {
                this.prev = t
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n.prototype, "nextSibling", {
            get: function() {
                return this.next
            },
            set: function(t) {
                this.next = t
            },
            enumerable: !1,
            configurable: !0
        }), n.prototype.cloneNode = function(t) {
            return t === void 0 && (t = !1), ki(this, t)
        }, n
    }();
mt.Node = Ni;
var Ir = function(n) {
    rn(t, n);

    function t(e, s) {
        var o = n.call(this, e) || this;
        return o.data = s, o
    }
    return Object.defineProperty(t.prototype, "nodeValue", {
        get: function() {
            return this.data
        },
        set: function(e) {
            this.data = e
        },
        enumerable: !1,
        configurable: !0
    }), t
}(Ni);
mt.DataNode = Ir;
var Bl = function(n) {
    rn(t, n);

    function t(e) {
        return n.call(this, Pt.ElementType.Text, e) || this
    }
    return t
}(Ir);
mt.Text = Bl;
var Ul = function(n) {
    rn(t, n);

    function t(e) {
        return n.call(this, Pt.ElementType.Comment, e) || this
    }
    return t
}(Ir);
mt.Comment = Ul;
var Fl = function(n) {
    rn(t, n);

    function t(e, s) {
        var o = n.call(this, Pt.ElementType.Directive, s) || this;
        return o.name = e, o
    }
    return t
}(Ir);
mt.ProcessingInstruction = Fl;
var Or = function(n) {
    rn(t, n);

    function t(e, s) {
        var o = n.call(this, e) || this;
        return o.children = s, o
    }
    return Object.defineProperty(t.prototype, "firstChild", {
        get: function() {
            var e;
            return (e = this.children[0]) !== null && e !== void 0 ? e : null
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lastChild", {
        get: function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : null
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "childNodes", {
        get: function() {
            return this.children
        },
        set: function(e) {
            this.children = e
        },
        enumerable: !1,
        configurable: !0
    }), t
}(Ni);
mt.NodeWithChildren = Or;
var jl = function(n) {
    rn(t, n);

    function t(e) {
        return n.call(this, Pt.ElementType.Root, e) || this
    }
    return t
}(Or);
mt.Document = jl;
var Hl = function(n) {
    rn(t, n);

    function t(e, s, o, i) {
        o === void 0 && (o = []), i === void 0 && (i = e === "script" ? Pt.ElementType.Script : e === "style" ? Pt.ElementType.Style : Pt.ElementType.Tag);
        var a = n.call(this, i, o) || this;
        return a.name = e, a.attribs = s, a
    }
    return Object.defineProperty(t.prototype, "tagName", {
        get: function() {
            return this.name
        },
        set: function(e) {
            this.name = e
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "attributes", {
        get: function() {
            var e = this;
            return Object.keys(this.attribs).map(function(s) {
                var o, i;
                return {
                    name: s,
                    value: e.attribs[s],
                    namespace: (o = e["x-attribsNamespace"]) === null || o === void 0 ? void 0 : o[s],
                    prefix: (i = e["x-attribsPrefix"]) === null || i === void 0 ? void 0 : i[s]
                }
            })
        },
        enumerable: !1,
        configurable: !0
    }), t
}(Or);
mt.Element = Hl;

function Vl(n) {
    return (0, Pt.isTag)(n)
}
mt.isTag = Vl;

function zl(n) {
    return n.type === Pt.ElementType.CDATA
}
mt.isCDATA = zl;

function Wl(n) {
    return n.type === Pt.ElementType.Text
}
mt.isText = Wl;

function Gl(n) {
    return n.type === Pt.ElementType.Comment
}
mt.isComment = Gl;

function Jl(n) {
    return n.type === Pt.ElementType.Directive
}
mt.isDirective = Jl;

function Yl(n) {
    return n.type === Pt.ElementType.Root
}
mt.isDocument = Yl;

function XY(n) {
    return Object.prototype.hasOwnProperty.call(n, "children")
}
mt.hasChildren = XY;

function ki(n, t) {
    t === void 0 && (t = !1);
    var e;
    if (Wl(n)) e = new Bl(n.data);
    else if (Gl(n)) e = new Ul(n.data);
    else if (Vl(n)) {
        var s = t ? Xr(n.children) : [],
            o = new Hl(n.name, Hn({}, n.attribs), s);
        s.forEach(function(l) {
            return l.parent = o
        }), n.namespace != null && (o.namespace = n.namespace), n["x-attribsNamespace"] && (o["x-attribsNamespace"] = Hn({}, n["x-attribsNamespace"])), n["x-attribsPrefix"] && (o["x-attribsPrefix"] = Hn({}, n["x-attribsPrefix"])), e = o
    } else if (zl(n)) {
        var s = t ? Xr(n.children) : [],
            i = new Or(Pt.ElementType.CDATA, s);
        s.forEach(function(u) {
            return u.parent = i
        }), e = i
    } else if (Yl(n)) {
        var s = t ? Xr(n.children) : [],
            a = new jl(s);
        s.forEach(function(u) {
            return u.parent = a
        }), n["x-mode"] && (a["x-mode"] = n["x-mode"]), e = a
    } else if (Jl(n)) {
        var c = new Fl(n.name, n.data);
        n["x-name"] != null && (c["x-name"] = n["x-name"], c["x-publicId"] = n["x-publicId"], c["x-systemId"] = n["x-systemId"]), e = c
    } else throw new Error("Not implemented yet: ".concat(n.type));
    return e.startIndex = n.startIndex, e.endIndex = n.endIndex, n.sourceCodeLocation != null && (e.sourceCodeLocation = n.sourceCodeLocation), e
}
mt.cloneNode = ki;

function Xr(n) {
    for (var t = n.map(function(s) {
            return ki(s, !0)
        }), e = 1; e < t.length; e++) t[e].prev = t[e - 1], t[e - 1].next = t[e];
    return t
}(function(n) {
    var t = Q && Q.__createBinding || (Object.create ? function(l, u, d, h) {
            h === void 0 && (h = d);
            var p = Object.getOwnPropertyDescriptor(u, d);
            (!p || ("get" in p ? !u.__esModule : p.writable || p.configurable)) && (p = {
                enumerable: !0,
                get: function() {
                    return u[d]
                }
            }), Object.defineProperty(l, h, p)
        } : function(l, u, d, h) {
            h === void 0 && (h = d), l[h] = u[d]
        }),
        e = Q && Q.__exportStar || function(l, u) {
            for (var d in l) d !== "default" && !Object.prototype.hasOwnProperty.call(u, d) && t(u, l, d)
        };
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.DomHandler = void 0;
    var s = Mn,
        o = mt;
    e(mt, n);
    var i = /\s+/g,
        a = {
            normalizeWhitespace: !1,
            withStartIndices: !1,
            withEndIndices: !1,
            xmlMode: !1
        },
        c = function() {
            function l(u, d, h) {
                this.dom = [], this.root = new o.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof d == "function" && (h = d, d = a), typeof u == "object" && (d = u, u = void 0), this.callback = u != null ? u : null, this.options = d != null ? d : a, this.elementCB = h != null ? h : null
            }
            return l.prototype.onparserinit = function(u) {
                this.parser = u
            }, l.prototype.onreset = function() {
                this.dom = [], this.root = new o.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null
            }, l.prototype.onend = function() {
                this.done || (this.done = !0, this.parser = null, this.handleCallback(null))
            }, l.prototype.onerror = function(u) {
                this.handleCallback(u)
            }, l.prototype.onclosetag = function() {
                this.lastNode = null;
                var u = this.tagStack.pop();
                this.options.withEndIndices && (u.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(u)
            }, l.prototype.onopentag = function(u, d) {
                var h = this.options.xmlMode ? s.ElementType.Tag : void 0,
                    p = new o.Element(u, d, void 0, h);
                this.addNode(p), this.tagStack.push(p)
            }, l.prototype.ontext = function(u) {
                var d = this.options.normalizeWhitespace,
                    h = this.lastNode;
                if (h && h.type === s.ElementType.Text) d ? h.data = (h.data + u).replace(i, " ") : h.data += u, this.options.withEndIndices && (h.endIndex = this.parser.endIndex);
                else {
                    d && (u = u.replace(i, " "));
                    var p = new o.Text(u);
                    this.addNode(p), this.lastNode = p
                }
            }, l.prototype.oncomment = function(u) {
                if (this.lastNode && this.lastNode.type === s.ElementType.Comment) {
                    this.lastNode.data += u;
                    return
                }
                var d = new o.Comment(u);
                this.addNode(d), this.lastNode = d
            }, l.prototype.oncommentend = function() {
                this.lastNode = null
            }, l.prototype.oncdatastart = function() {
                var u = new o.Text(""),
                    d = new o.NodeWithChildren(s.ElementType.CDATA, [u]);
                this.addNode(d), u.parent = d, this.lastNode = u
            }, l.prototype.oncdataend = function() {
                this.lastNode = null
            }, l.prototype.onprocessinginstruction = function(u, d) {
                var h = new o.ProcessingInstruction(u, d);
                this.addNode(h)
            }, l.prototype.handleCallback = function(u) {
                if (typeof this.callback == "function") this.callback(u, this.dom);
                else if (u) throw u
            }, l.prototype.addNode = function(u) {
                var d = this.tagStack[this.tagStack.length - 1],
                    h = d.children[d.children.length - 1];
                this.options.withStartIndices && (u.startIndex = this.parser.startIndex), this.options.withEndIndices && (u.endIndex = this.parser.endIndex), d.children.push(u), h && (u.prev = h, h.next = u), u.parent = d, this.lastNode = null
            }, l
        }();
    n.DomHandler = c, n.default = c
})(sn);
var Ei = {},
    Kl = {},
    Le = {},
    Mr = Q && Q.__importDefault || function(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    };
Object.defineProperty(Le, "__esModule", {
    value: !0
});
Le.decodeHTML = Le.decodeHTMLStrict = Le.decodeXML = void 0;
var So = Mr(bi),
    QY = Mr(Nl),
    ZY = Mr(_i),
    xa = Mr(Tr),
    tK = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
Le.decodeXML = Xl(ZY.default);
Le.decodeHTMLStrict = Xl(So.default);

function Xl(n) {
    var t = Ql(n);
    return function(e) {
        return String(e).replace(tK, t)
    }
}
var Na = function(n, t) {
    return n < t ? 1 : -1
};
Le.decodeHTML = function() {
    for (var n = Object.keys(QY.default).sort(Na), t = Object.keys(So.default).sort(Na), e = 0, s = 0; e < t.length; e++) n[s] === t[e] ? (t[e] += ";?", s++) : t[e] += ";";
    var o = new RegExp("&(?:" + t.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
        i = Ql(So.default);

    function a(c) {
        return c.substr(-1) !== ";" && (c += ";"), i(c)
    }
    return function(c) {
        return String(c).replace(o, a)
    }
}();

function Ql(n) {
    return function(e) {
        if (e.charAt(1) === "#") {
            var s = e.charAt(2);
            return s === "X" || s === "x" ? xa.default(parseInt(e.substr(3), 16)) : xa.default(parseInt(e.substr(2), 10))
        }
        return n[e.slice(1, -1)] || e
    }
}
var ne = {},
    Zl = Q && Q.__importDefault || function(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    };
Object.defineProperty(ne, "__esModule", {
    value: !0
});
ne.escapeUTF8 = ne.escape = ne.encodeNonAsciiHTML = ne.encodeHTML = ne.encodeXML = void 0;
var eK = Zl(_i),
    tu = nu(eK.default),
    eu = su(tu);
ne.encodeXML = iu(tu);
var nK = Zl(bi),
    Ti = nu(nK.default),
    sK = su(Ti);
ne.encodeHTML = oK(Ti, sK);
ne.encodeNonAsciiHTML = iu(Ti);

function nu(n) {
    return Object.keys(n).sort().reduce(function(t, e) {
        return t[n[e]] = "&" + e + ";", t
    }, {})
}

function su(n) {
    for (var t = [], e = [], s = 0, o = Object.keys(n); s < o.length; s++) {
        var i = o[s];
        i.length === 1 ? t.push("\\" + i) : e.push(i)
    }
    t.sort();
    for (var a = 0; a < t.length - 1; a++) {
        for (var c = a; c < t.length - 1 && t[c].charCodeAt(1) + 1 === t[c + 1].charCodeAt(1);) c += 1;
        var l = 1 + c - a;
        l < 3 || t.splice(a, l, t[a] + "-" + t[c])
    }
    return e.unshift("[" + t.join("") + "]"), new RegExp(e.join("|"), "g")
}
var ru = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
    rK = String.prototype.codePointAt != null ? function(n) {
        return n.codePointAt(0)
    } : function(n) {
        return (n.charCodeAt(0) - 55296) * 1024 + n.charCodeAt(1) - 56320 + 65536
    };

function Dr(n) {
    return "&#x" + (n.length > 1 ? rK(n) : n.charCodeAt(0)).toString(16).toUpperCase() + ";"
}

function oK(n, t) {
    return function(e) {
        return e.replace(t, function(s) {
            return n[s]
        }).replace(ru, Dr)
    }
}
var ou = new RegExp(eu.source + "|" + ru.source, "g");

function iK(n) {
    return n.replace(ou, Dr)
}
ne.escape = iK;

function aK(n) {
    return n.replace(eu, Dr)
}
ne.escapeUTF8 = aK;

function iu(n) {
    return function(t) {
        return t.replace(ou, function(e) {
            return n[e] || Dr(e)
        })
    }
}(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.decodeXMLStrict = n.decodeHTML5Strict = n.decodeHTML4Strict = n.decodeHTML5 = n.decodeHTML4 = n.decodeHTMLStrict = n.decodeHTML = n.decodeXML = n.encodeHTML5 = n.encodeHTML4 = n.escapeUTF8 = n.escape = n.encodeNonAsciiHTML = n.encodeHTML = n.encodeXML = n.encode = n.decodeStrict = n.decode = void 0;
    var t = Le,
        e = ne;

    function s(l, u) {
        return (!u || u <= 0 ? t.decodeXML : t.decodeHTML)(l)
    }
    n.decode = s;

    function o(l, u) {
        return (!u || u <= 0 ? t.decodeXML : t.decodeHTMLStrict)(l)
    }
    n.decodeStrict = o;

    function i(l, u) {
        return (!u || u <= 0 ? e.encodeXML : e.encodeHTML)(l)
    }
    n.encode = i;
    var a = ne;
    Object.defineProperty(n, "encodeXML", {
        enumerable: !0,
        get: function() {
            return a.encodeXML
        }
    }), Object.defineProperty(n, "encodeHTML", {
        enumerable: !0,
        get: function() {
            return a.encodeHTML
        }
    }), Object.defineProperty(n, "encodeNonAsciiHTML", {
        enumerable: !0,
        get: function() {
            return a.encodeNonAsciiHTML
        }
    }), Object.defineProperty(n, "escape", {
        enumerable: !0,
        get: function() {
            return a.escape
        }
    }), Object.defineProperty(n, "escapeUTF8", {
        enumerable: !0,
        get: function() {
            return a.escapeUTF8
        }
    }), Object.defineProperty(n, "encodeHTML4", {
        enumerable: !0,
        get: function() {
            return a.encodeHTML
        }
    }), Object.defineProperty(n, "encodeHTML5", {
        enumerable: !0,
        get: function() {
            return a.encodeHTML
        }
    });
    var c = Le;
    Object.defineProperty(n, "decodeXML", {
        enumerable: !0,
        get: function() {
            return c.decodeXML
        }
    }), Object.defineProperty(n, "decodeHTML", {
        enumerable: !0,
        get: function() {
            return c.decodeHTML
        }
    }), Object.defineProperty(n, "decodeHTMLStrict", {
        enumerable: !0,
        get: function() {
            return c.decodeHTMLStrict
        }
    }), Object.defineProperty(n, "decodeHTML4", {
        enumerable: !0,
        get: function() {
            return c.decodeHTML
        }
    }), Object.defineProperty(n, "decodeHTML5", {
        enumerable: !0,
        get: function() {
            return c.decodeHTML
        }
    }), Object.defineProperty(n, "decodeHTML4Strict", {
        enumerable: !0,
        get: function() {
            return c.decodeHTMLStrict
        }
    }), Object.defineProperty(n, "decodeHTML5Strict", {
        enumerable: !0,
        get: function() {
            return c.decodeHTMLStrict
        }
    }), Object.defineProperty(n, "decodeXMLStrict", {
        enumerable: !0,
        get: function() {
            return c.decodeXML
        }
    })
})(Kl);
var Sn = {};
Object.defineProperty(Sn, "__esModule", {
    value: !0
});
Sn.attributeNames = Sn.elementNames = void 0;
Sn.elementNames = new Map([
    ["altglyph", "altGlyph"],
    ["altglyphdef", "altGlyphDef"],
    ["altglyphitem", "altGlyphItem"],
    ["animatecolor", "animateColor"],
    ["animatemotion", "animateMotion"],
    ["animatetransform", "animateTransform"],
    ["clippath", "clipPath"],
    ["feblend", "feBlend"],
    ["fecolormatrix", "feColorMatrix"],
    ["fecomponenttransfer", "feComponentTransfer"],
    ["fecomposite", "feComposite"],
    ["feconvolvematrix", "feConvolveMatrix"],
    ["fediffuselighting", "feDiffuseLighting"],
    ["fedisplacementmap", "feDisplacementMap"],
    ["fedistantlight", "feDistantLight"],
    ["fedropshadow", "feDropShadow"],
    ["feflood", "feFlood"],
    ["fefunca", "feFuncA"],
    ["fefuncb", "feFuncB"],
    ["fefuncg", "feFuncG"],
    ["fefuncr", "feFuncR"],
    ["fegaussianblur", "feGaussianBlur"],
    ["feimage", "feImage"],
    ["femerge", "feMerge"],
    ["femergenode", "feMergeNode"],
    ["femorphology", "feMorphology"],
    ["feoffset", "feOffset"],
    ["fepointlight", "fePointLight"],
    ["fespecularlighting", "feSpecularLighting"],
    ["fespotlight", "feSpotLight"],
    ["fetile", "feTile"],
    ["feturbulence", "feTurbulence"],
    ["foreignobject", "foreignObject"],
    ["glyphref", "glyphRef"],
    ["lineargradient", "linearGradient"],
    ["radialgradient", "radialGradient"],
    ["textpath", "textPath"]
]);
Sn.attributeNames = new Map([
    ["definitionurl", "definitionURL"],
    ["attributename", "attributeName"],
    ["attributetype", "attributeType"],
    ["basefrequency", "baseFrequency"],
    ["baseprofile", "baseProfile"],
    ["calcmode", "calcMode"],
    ["clippathunits", "clipPathUnits"],
    ["diffuseconstant", "diffuseConstant"],
    ["edgemode", "edgeMode"],
    ["filterunits", "filterUnits"],
    ["glyphref", "glyphRef"],
    ["gradienttransform", "gradientTransform"],
    ["gradientunits", "gradientUnits"],
    ["kernelmatrix", "kernelMatrix"],
    ["kernelunitlength", "kernelUnitLength"],
    ["keypoints", "keyPoints"],
    ["keysplines", "keySplines"],
    ["keytimes", "keyTimes"],
    ["lengthadjust", "lengthAdjust"],
    ["limitingconeangle", "limitingConeAngle"],
    ["markerheight", "markerHeight"],
    ["markerunits", "markerUnits"],
    ["markerwidth", "markerWidth"],
    ["maskcontentunits", "maskContentUnits"],
    ["maskunits", "maskUnits"],
    ["numoctaves", "numOctaves"],
    ["pathlength", "pathLength"],
    ["patterncontentunits", "patternContentUnits"],
    ["patterntransform", "patternTransform"],
    ["patternunits", "patternUnits"],
    ["pointsatx", "pointsAtX"],
    ["pointsaty", "pointsAtY"],
    ["pointsatz", "pointsAtZ"],
    ["preservealpha", "preserveAlpha"],
    ["preserveaspectratio", "preserveAspectRatio"],
    ["primitiveunits", "primitiveUnits"],
    ["refx", "refX"],
    ["refy", "refY"],
    ["repeatcount", "repeatCount"],
    ["repeatdur", "repeatDur"],
    ["requiredextensions", "requiredExtensions"],
    ["requiredfeatures", "requiredFeatures"],
    ["specularconstant", "specularConstant"],
    ["specularexponent", "specularExponent"],
    ["spreadmethod", "spreadMethod"],
    ["startoffset", "startOffset"],
    ["stddeviation", "stdDeviation"],
    ["stitchtiles", "stitchTiles"],
    ["surfacescale", "surfaceScale"],
    ["systemlanguage", "systemLanguage"],
    ["tablevalues", "tableValues"],
    ["targetx", "targetX"],
    ["targety", "targetY"],
    ["textlength", "textLength"],
    ["viewbox", "viewBox"],
    ["viewtarget", "viewTarget"],
    ["xchannelselector", "xChannelSelector"],
    ["ychannelselector", "yChannelSelector"],
    ["zoomandpan", "zoomAndPan"]
]);
var fn = Q && Q.__assign || function() {
        return fn = Object.assign || function(n) {
            for (var t, e = 1, s = arguments.length; e < s; e++) {
                t = arguments[e];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o])
            }
            return n
        }, fn.apply(this, arguments)
    },
    cK = Q && Q.__createBinding || (Object.create ? function(n, t, e, s) {
        s === void 0 && (s = e), Object.defineProperty(n, s, {
            enumerable: !0,
            get: function() {
                return t[e]
            }
        })
    } : function(n, t, e, s) {
        s === void 0 && (s = e), n[s] = t[e]
    }),
    lK = Q && Q.__setModuleDefault || (Object.create ? function(n, t) {
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        })
    } : function(n, t) {
        n.default = t
    }),
    uK = Q && Q.__importStar || function(n) {
        if (n && n.__esModule) return n;
        var t = {};
        if (n != null)
            for (var e in n) e !== "default" && Object.prototype.hasOwnProperty.call(n, e) && cK(t, n, e);
        return lK(t, n), t
    };
Object.defineProperty(Ei, "__esModule", {
    value: !0
});
var Ne = uK(Mn),
    au = Kl,
    cu = Sn,
    dK = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);

function hK(n, t) {
    if (n) return Object.keys(n).map(function(e) {
        var s, o, i = (s = n[e]) !== null && s !== void 0 ? s : "";
        return t.xmlMode === "foreign" && (e = (o = cu.attributeNames.get(e)) !== null && o !== void 0 ? o : e), !t.emptyAttrs && !t.xmlMode && i === "" ? e : e + '="' + (t.decodeEntities !== !1 ? au.encodeXML(i) : i.replace(/"/g, "&quot;")) + '"'
    }).join(" ")
}
var ka = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);

function Pi(n, t) {
    t === void 0 && (t = {});
    for (var e = ("length" in n) ? n : [n], s = "", o = 0; o < e.length; o++) s += pK(e[o], t);
    return s
}
Ei.default = Pi;

function pK(n, t) {
    switch (n.type) {
        case Ne.Root:
            return Pi(n.children, t);
        case Ne.Directive:
        case Ne.Doctype:
            return bK(n);
        case Ne.Comment:
            return wK(n);
        case Ne.CDATA:
            return yK(n);
        case Ne.Script:
        case Ne.Style:
        case Ne.Tag:
            return gK(n, t);
        case Ne.Text:
            return _K(n, t)
    }
}
var fK = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]),
    mK = new Set(["svg", "math"]);

function gK(n, t) {
    var e;
    t.xmlMode === "foreign" && (n.name = (e = cu.elementNames.get(n.name)) !== null && e !== void 0 ? e : n.name, n.parent && fK.has(n.parent.name) && (t = fn(fn({}, t), {
        xmlMode: !1
    }))), !t.xmlMode && mK.has(n.name) && (t = fn(fn({}, t), {
        xmlMode: "foreign"
    }));
    var s = "<" + n.name,
        o = hK(n.attribs, t);
    return o && (s += " " + o), n.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && ka.has(n.name)) ? (t.xmlMode || (s += " "), s += "/>") : (s += ">", n.children.length > 0 && (s += Pi(n.children, t)), (t.xmlMode || !ka.has(n.name)) && (s += "</" + n.name + ">")), s
}

function bK(n) {
    return "<" + n.data + ">"
}

function _K(n, t) {
    var e = n.data || "";
    return t.decodeEntities !== !1 && !(!t.xmlMode && n.parent && dK.has(n.parent.name)) && (e = au.encodeXML(e)), e
}

function yK(n) {
    return "<![CDATA[" + n.children[0].data + "]]>"
}

function wK(n) {
    return "<!--" + n.data + "-->"
}
var vK = Q && Q.__importDefault || function(n) {
    return n && n.__esModule ? n : {
        default: n
    }
};
Object.defineProperty(ee, "__esModule", {
    value: !0
});
ee.innerText = ee.textContent = ee.getText = ee.getInnerHTML = ee.getOuterHTML = void 0;
var ve = sn,
    SK = vK(Ei),
    CK = Mn;

function lu(n, t) {
    return (0, SK.default)(n, t)
}
ee.getOuterHTML = lu;

function xK(n, t) {
    return (0, ve.hasChildren)(n) ? n.children.map(function(e) {
        return lu(e, t)
    }).join("") : ""
}
ee.getInnerHTML = xK;

function Us(n) {
    return Array.isArray(n) ? n.map(Us).join("") : (0, ve.isTag)(n) ? n.name === "br" ? `
` : Us(n.children) : (0, ve.isCDATA)(n) ? Us(n.children) : (0, ve.isText)(n) ? n.data : ""
}
ee.getText = Us;

function Co(n) {
    return Array.isArray(n) ? n.map(Co).join("") : (0, ve.hasChildren)(n) && !(0, ve.isComment)(n) ? Co(n.children) : (0, ve.isText)(n) ? n.data : ""
}
ee.textContent = Co;

function xo(n) {
    return Array.isArray(n) ? n.map(xo).join("") : (0, ve.hasChildren)(n) && (n.type === CK.ElementType.Tag || (0, ve.isCDATA)(n)) ? xo(n.children) : (0, ve.isText)(n) ? n.data : ""
}
ee.innerText = xo;
var $t = {};
Object.defineProperty($t, "__esModule", {
    value: !0
});
$t.prevElementSibling = $t.nextElementSibling = $t.getName = $t.hasAttrib = $t.getAttributeValue = $t.getSiblings = $t.getParent = $t.getChildren = void 0;
var uu = sn,
    NK = [];

function du(n) {
    var t;
    return (t = n.children) !== null && t !== void 0 ? t : NK
}
$t.getChildren = du;

function hu(n) {
    return n.parent || null
}
$t.getParent = hu;

function kK(n) {
    var t, e, s = hu(n);
    if (s != null) return du(s);
    for (var o = [n], i = n.prev, a = n.next; i != null;) o.unshift(i), t = i, i = t.prev;
    for (; a != null;) o.push(a), e = a, a = e.next;
    return o
}
$t.getSiblings = kK;

function EK(n, t) {
    var e;
    return (e = n.attribs) === null || e === void 0 ? void 0 : e[t]
}
$t.getAttributeValue = EK;

function TK(n, t) {
    return n.attribs != null && Object.prototype.hasOwnProperty.call(n.attribs, t) && n.attribs[t] != null
}
$t.hasAttrib = TK;

function PK(n) {
    return n.name
}
$t.getName = PK;

function AK(n) {
    for (var t, e = n.next; e !== null && !(0, uu.isTag)(e);) t = e, e = t.next;
    return e
}
$t.nextElementSibling = AK;

function LK(n) {
    for (var t, e = n.prev; e !== null && !(0, uu.isTag)(e);) t = e, e = t.prev;
    return e
}
$t.prevElementSibling = LK;
var Xt = {};
Object.defineProperty(Xt, "__esModule", {
    value: !0
});
Xt.prepend = Xt.prependChild = Xt.append = Xt.appendChild = Xt.replaceElement = Xt.removeElement = void 0;

function us(n) {
    if (n.prev && (n.prev.next = n.next), n.next && (n.next.prev = n.prev), n.parent) {
        var t = n.parent.children;
        t.splice(t.lastIndexOf(n), 1)
    }
}
Xt.removeElement = us;

function IK(n, t) {
    var e = t.prev = n.prev;
    e && (e.next = t);
    var s = t.next = n.next;
    s && (s.prev = t);
    var o = t.parent = n.parent;
    if (o) {
        var i = o.children;
        i[i.lastIndexOf(n)] = t
    }
}
Xt.replaceElement = IK;

function OK(n, t) {
    if (us(t), t.next = null, t.parent = n, n.children.push(t) > 1) {
        var e = n.children[n.children.length - 2];
        e.next = t, t.prev = e
    } else t.prev = null
}
Xt.appendChild = OK;

function MK(n, t) {
    us(t);
    var e = n.parent,
        s = n.next;
    if (t.next = s, t.prev = n, n.next = t, t.parent = e, s) {
        if (s.prev = t, e) {
            var o = e.children;
            o.splice(o.lastIndexOf(s), 0, t)
        }
    } else e && e.children.push(t)
}
Xt.append = MK;

function DK(n, t) {
    if (us(t), t.parent = n, t.prev = null, n.children.unshift(t) !== 1) {
        var e = n.children[1];
        e.prev = t, t.next = e
    } else t.next = null
}
Xt.prependChild = DK;

function RK(n, t) {
    us(t);
    var e = n.parent;
    if (e) {
        var s = e.children;
        s.splice(s.indexOf(n), 0, t)
    }
    n.prev && (n.prev.next = t), t.parent = e, t.prev = n.prev, t.next = n, n.prev = t
}
Xt.prepend = RK;
var Wt = {};
Object.defineProperty(Wt, "__esModule", {
    value: !0
});
Wt.findAll = Wt.existsOne = Wt.findOne = Wt.findOneChild = Wt.find = Wt.filter = void 0;
var Xn = sn;

function $K(n, t, e, s) {
    return e === void 0 && (e = !0), s === void 0 && (s = 1 / 0), Array.isArray(t) || (t = [t]), Ai(n, t, e, s)
}
Wt.filter = $K;

function Ai(n, t, e, s) {
    for (var o = [], i = 0, a = t; i < a.length; i++) {
        var c = a[i];
        if (n(c) && (o.push(c), --s <= 0)) break;
        if (e && (0, Xn.hasChildren)(c) && c.children.length > 0) {
            var l = Ai(n, c.children, e, s);
            if (o.push.apply(o, l), s -= l.length, s <= 0) break
        }
    }
    return o
}
Wt.find = Ai;

function qK(n, t) {
    return t.find(n)
}
Wt.findOneChild = qK;

function pu(n, t, e) {
    e === void 0 && (e = !0);
    for (var s = null, o = 0; o < t.length && !s; o++) {
        var i = t[o];
        if ((0, Xn.isTag)(i)) n(i) ? s = i : e && i.children.length > 0 && (s = pu(n, i.children));
        else continue
    }
    return s
}
Wt.findOne = pu;

function fu(n, t) {
    return t.some(function(e) {
        return (0, Xn.isTag)(e) && (n(e) || e.children.length > 0 && fu(n, e.children))
    })
}
Wt.existsOne = fu;

function BK(n, t) {
    for (var e, s = [], o = t.filter(Xn.isTag), i; i = o.shift();) {
        var a = (e = i.children) === null || e === void 0 ? void 0 : e.filter(Xn.isTag);
        a && a.length > 0 && o.unshift.apply(o, a), n(i) && s.push(i)
    }
    return s
}
Wt.findAll = BK;
var se = {};
Object.defineProperty(se, "__esModule", {
    value: !0
});
se.getElementsByTagType = se.getElementsByTagName = se.getElementById = se.getElements = se.testElement = void 0;
var ze = sn,
    Rr = Wt,
    tr = {
        tag_name: function(n) {
            return typeof n == "function" ? function(t) {
                return (0, ze.isTag)(t) && n(t.name)
            } : n === "*" ? ze.isTag : function(t) {
                return (0, ze.isTag)(t) && t.name === n
            }
        },
        tag_type: function(n) {
            return typeof n == "function" ? function(t) {
                return n(t.type)
            } : function(t) {
                return t.type === n
            }
        },
        tag_contains: function(n) {
            return typeof n == "function" ? function(t) {
                return (0, ze.isText)(t) && n(t.data)
            } : function(t) {
                return (0, ze.isText)(t) && t.data === n
            }
        }
    };

function mu(n, t) {
    return typeof t == "function" ? function(e) {
        return (0, ze.isTag)(e) && t(e.attribs[n])
    } : function(e) {
        return (0, ze.isTag)(e) && e.attribs[n] === t
    }
}

function UK(n, t) {
    return function(e) {
        return n(e) || t(e)
    }
}

function gu(n) {
    var t = Object.keys(n).map(function(e) {
        var s = n[e];
        return Object.prototype.hasOwnProperty.call(tr, e) ? tr[e](s) : mu(e, s)
    });
    return t.length === 0 ? null : t.reduce(UK)
}

function FK(n, t) {
    var e = gu(n);
    return e ? e(t) : !0
}
se.testElement = FK;

function jK(n, t, e, s) {
    s === void 0 && (s = 1 / 0);
    var o = gu(n);
    return o ? (0, Rr.filter)(o, t, e, s) : []
}
se.getElements = jK;

function HK(n, t, e) {
    return e === void 0 && (e = !0), Array.isArray(t) || (t = [t]), (0, Rr.findOne)(mu("id", n), t, e)
}
se.getElementById = HK;

function VK(n, t, e, s) {
    return e === void 0 && (e = !0), s === void 0 && (s = 1 / 0), (0, Rr.filter)(tr.tag_name(n), t, e, s)
}
se.getElementsByTagName = VK;

function zK(n, t, e, s) {
    return e === void 0 && (e = !0), s === void 0 && (s = 1 / 0), (0, Rr.filter)(tr.tag_type(n), t, e, s)
}
se.getElementsByTagType = zK;
var Be = {};
Object.defineProperty(Be, "__esModule", {
    value: !0
});
Be.uniqueSort = Be.compareDocumentPosition = Be.removeSubsets = void 0;
var Ea = sn;

function WK(n) {
    for (var t = n.length; --t >= 0;) {
        var e = n[t];
        if (t > 0 && n.lastIndexOf(e, t - 1) >= 0) {
            n.splice(t, 1);
            continue
        }
        for (var s = e.parent; s; s = s.parent)
            if (n.includes(s)) {
                n.splice(t, 1);
                break
            }
    }
    return n
}
Be.removeSubsets = WK;

function bu(n, t) {
    var e = [],
        s = [];
    if (n === t) return 0;
    for (var o = (0, Ea.hasChildren)(n) ? n : n.parent; o;) e.unshift(o), o = o.parent;
    for (o = (0, Ea.hasChildren)(t) ? t : t.parent; o;) s.unshift(o), o = o.parent;
    for (var i = Math.min(e.length, s.length), a = 0; a < i && e[a] === s[a];) a++;
    if (a === 0) return 1;
    var c = e[a - 1],
        l = c.children,
        u = e[a],
        d = s[a];
    return l.indexOf(u) > l.indexOf(d) ? c === t ? 20 : 4 : c === n ? 10 : 2
}
Be.compareDocumentPosition = bu;

function GK(n) {
    return n = n.filter(function(t, e, s) {
        return !s.includes(t, e + 1)
    }), n.sort(function(t, e) {
        var s = bu(t, e);
        return s & 2 ? -1 : s & 4 ? 1 : 0
    }), n
}
Be.uniqueSort = GK;
var $r = {};
Object.defineProperty($r, "__esModule", {
    value: !0
});
$r.getFeed = void 0;
var JK = ee,
    ds = se;

function YK(n) {
    var t = er(tX, n);
    return t ? t.name === "feed" ? KK(t) : XK(t) : null
}
$r.getFeed = YK;

function KK(n) {
    var t, e = n.children,
        s = {
            type: "atom",
            items: (0, ds.getElementsByTagName)("entry", e).map(function(a) {
                var c, l = a.children,
                    u = {
                        media: _u(l)
                    };
                Kt(u, "id", "id", l), Kt(u, "title", "title", l);
                var d = (c = er("link", l)) === null || c === void 0 ? void 0 : c.attribs.href;
                d && (u.link = d);
                var h = Ge("summary", l) || Ge("content", l);
                h && (u.description = h);
                var p = Ge("updated", l);
                return p && (u.pubDate = new Date(p)), u
            })
        };
    Kt(s, "id", "id", e), Kt(s, "title", "title", e);
    var o = (t = er("link", e)) === null || t === void 0 ? void 0 : t.attribs.href;
    o && (s.link = o), Kt(s, "description", "subtitle", e);
    var i = Ge("updated", e);
    return i && (s.updated = new Date(i)), Kt(s, "author", "email", e, !0), s
}

function XK(n) {
    var t, e, s = (e = (t = er("channel", n.children)) === null || t === void 0 ? void 0 : t.children) !== null && e !== void 0 ? e : [],
        o = {
            type: n.name.substr(0, 3),
            id: "",
            items: (0, ds.getElementsByTagName)("item", n.children).map(function(a) {
                var c = a.children,
                    l = {
                        media: _u(c)
                    };
                Kt(l, "id", "guid", c), Kt(l, "title", "title", c), Kt(l, "link", "link", c), Kt(l, "description", "description", c);
                var u = Ge("pubDate", c);
                return u && (l.pubDate = new Date(u)), l
            })
        };
    Kt(o, "title", "title", s), Kt(o, "link", "link", s), Kt(o, "description", "description", s);
    var i = Ge("lastBuildDate", s);
    return i && (o.updated = new Date(i)), Kt(o, "author", "managingEditor", s, !0), o
}
var QK = ["url", "type", "lang"],
    ZK = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];

function _u(n) {
    return (0, ds.getElementsByTagName)("media:content", n).map(function(t) {
        for (var e = t.attribs, s = {
                medium: e.medium,
                isDefault: !!e.isDefault
            }, o = 0, i = QK; o < i.length; o++) {
            var a = i[o];
            e[a] && (s[a] = e[a])
        }
        for (var c = 0, l = ZK; c < l.length; c++) {
            var a = l[c];
            e[a] && (s[a] = parseInt(e[a], 10))
        }
        return e.expression && (s.expression = e.expression), s
    })
}

function er(n, t) {
    return (0, ds.getElementsByTagName)(n, t, !0, 1)[0]
}

function Ge(n, t, e) {
    return e === void 0 && (e = !1), (0, JK.textContent)((0, ds.getElementsByTagName)(n, t, e, 1)).trim()
}

function Kt(n, t, e, s, o) {
    o === void 0 && (o = !1);
    var i = Ge(e, s, o);
    i && (n[t] = i)
}

function tX(n) {
    return n === "rss" || n === "feed" || n === "rdf:RDF"
}(function(n) {
    var t = Q && Q.__createBinding || (Object.create ? function(o, i, a, c) {
            c === void 0 && (c = a), Object.defineProperty(o, c, {
                enumerable: !0,
                get: function() {
                    return i[a]
                }
            })
        } : function(o, i, a, c) {
            c === void 0 && (c = a), o[c] = i[a]
        }),
        e = Q && Q.__exportStar || function(o, i) {
            for (var a in o) a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, o, a)
        };
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.hasChildren = n.isDocument = n.isComment = n.isText = n.isCDATA = n.isTag = void 0, e(ee, n), e($t, n), e(Xt, n), e(Wt, n), e(se, n), e(Be, n), e($r, n);
    var s = sn;
    Object.defineProperty(n, "isTag", {
        enumerable: !0,
        get: function() {
            return s.isTag
        }
    }), Object.defineProperty(n, "isCDATA", {
        enumerable: !0,
        get: function() {
            return s.isCDATA
        }
    }), Object.defineProperty(n, "isText", {
        enumerable: !0,
        get: function() {
            return s.isText
        }
    }), Object.defineProperty(n, "isComment", {
        enumerable: !0,
        get: function() {
            return s.isComment
        }
    }), Object.defineProperty(n, "isDocument", {
        enumerable: !0,
        get: function() {
            return s.isDocument
        }
    }), Object.defineProperty(n, "hasChildren", {
        enumerable: !0,
        get: function() {
            return s.hasChildren
        }
    })
})(xi);
var eX = Q && Q.__extends || function() {
        var n = function(t, e) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(s, o) {
                s.__proto__ = o
            } || function(s, o) {
                for (var i in o) o.hasOwnProperty(i) && (s[i] = o[i])
            }, n(t, e)
        };
        return function(t, e) {
            n(t, e);

            function s() {
                this.constructor = t
            }
            t.prototype = e === null ? Object.create(e) : (s.prototype = e.prototype, new s)
        }
    }(),
    nX = Q && Q.__importDefault || function(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    },
    sX = Q && Q.__importStar || function(n) {
        if (n && n.__esModule) return n;
        var t = {};
        if (n != null)
            for (var e in n) Object.hasOwnProperty.call(n, e) && (t[e] = n[e]);
        return t.default = n, t
    };
Object.defineProperty(Kn, "__esModule", {
    value: !0
});
var rX = nX(wi),
    nr = sX(xi),
    oX = kr,
    yu = function(n) {
        eX(t, n);

        function t(e, s) {
            var o = this;
            return typeof e == "object" && e !== null && (e = void 0, s = e), o = n.call(this, e, s) || this, o
        }
        return t.prototype.onend = function() {
            var e = {},
                s = Cs(iX, this.dom);
            if (s)
                if (s.name === "feed") {
                    var o = s.children;
                    e.type = "atom", Yt(e, "id", "id", o), Yt(e, "title", "title", o);
                    var i = Pa("href", Cs("link", o));
                    i && (e.link = i), Yt(e, "description", "subtitle", o);
                    var a = Ve("updated", o);
                    a && (e.updated = new Date(a)), Yt(e, "author", "email", o, !0), e.items = Ta("entry", o).map(function(c) {
                        var l = {},
                            u = c.children;
                        Yt(l, "id", "id", u), Yt(l, "title", "title", u);
                        var d = Pa("href", Cs("link", u));
                        d && (l.link = d);
                        var h = Ve("summary", u) || Ve("content", u);
                        h && (l.description = h);
                        var p = Ve("updated", u);
                        return p && (l.pubDate = new Date(p)), l
                    })
                } else {
                    var o = Cs("channel", s.children).children;
                    e.type = s.name.substr(0, 3), e.id = "", Yt(e, "title", "title", o), Yt(e, "link", "link", o), Yt(e, "description", "description", o);
                    var a = Ve("lastBuildDate", o);
                    a && (e.updated = new Date(a)), Yt(e, "author", "managingEditor", o, !0), e.items = Ta("item", s.children).map(function(u) {
                        var d = {},
                            h = u.children;
                        Yt(d, "id", "guid", h), Yt(d, "title", "title", h), Yt(d, "link", "link", h), Yt(d, "description", "description", h);
                        var p = Ve("pubDate", h);
                        return p && (d.pubDate = new Date(p)), d
                    })
                }
            this.feed = e, this.handleCallback(s ? null : Error("couldn't find root of feed"))
        }, t
    }(rX.default);
Kn.FeedHandler = yu;

function Ta(n, t) {
    return nr.getElementsByTagName(n, t, !0)
}

function Cs(n, t) {
    return nr.getElementsByTagName(n, t, !0, 1)[0]
}

function Ve(n, t, e) {
    return e === void 0 && (e = !1), nr.getText(nr.getElementsByTagName(n, t, e, 1)).trim()
}

function Pa(n, t) {
    if (!t) return null;
    var e = t.attribs;
    return e[n]
}

function Yt(n, t, e, s, o) {
    o === void 0 && (o = !1);
    var i = Ve(e, s, o);
    i && (n[t] = i)
}

function iX(n) {
    return n === "rss" || n === "feed" || n === "rdf:RDF"
}
var aX = {
    xmlMode: !0
};

function cX(n, t) {
    t === void 0 && (t = aX);
    var e = new yu(t);
    return new oX.Parser(e, t).end(n), e.feed
}
Kn.parseFeed = cX;
var Li = {},
    Ii = {};
Object.defineProperty(Ii, "__esModule", {
    value: !0
});
var lX = function() {
    function n(t) {
        this._func = t
    }
    return n.prototype.onattribute = function(t, e) {
        this._func("onattribute", t, e)
    }, n.prototype.oncdatastart = function() {
        this._func("oncdatastart")
    }, n.prototype.oncdataend = function() {
        this._func("oncdataend")
    }, n.prototype.ontext = function(t) {
        this._func("ontext", t)
    }, n.prototype.onprocessinginstruction = function(t, e) {
        this._func("onprocessinginstruction", t, e)
    }, n.prototype.oncomment = function(t) {
        this._func("oncomment", t)
    }, n.prototype.oncommentend = function() {
        this._func("oncommentend")
    }, n.prototype.onclosetag = function(t) {
        this._func("onclosetag", t)
    }, n.prototype.onopentag = function(t, e) {
        this._func("onopentag", t, e)
    }, n.prototype.onopentagname = function(t) {
        this._func("onopentagname", t)
    }, n.prototype.onerror = function(t) {
        this._func("onerror", t)
    }, n.prototype.onend = function() {
        this._func("onend")
    }, n.prototype.onparserinit = function(t) {
        this._func("onparserinit", t)
    }, n.prototype.onreset = function() {
        this._func("onreset")
    }, n
}();
Ii.default = lX;
var uX = Q && Q.__extends || function() {
        var n = function(t, e) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(s, o) {
                s.__proto__ = o
            } || function(s, o) {
                for (var i in o) o.hasOwnProperty(i) && (s[i] = o[i])
            }, n(t, e)
        };
        return function(t, e) {
            n(t, e);

            function s() {
                this.constructor = t
            }
            t.prototype = e === null ? Object.create(e) : (s.prototype = e.prototype, new s)
        }
    }(),
    dX = Q && Q.__importDefault || function(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    };
Object.defineProperty(Li, "__esModule", {
    value: !0
});
var hX = dX(Ii),
    pX = function(n) {
        uX(t, n);

        function t(e) {
            e === void 0 && (e = {});
            var s = n.call(this, function(o) {
                for (var i, a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
                s.events.push([o].concat(a)), s._cbs[o] && (i = s._cbs)[o].apply(i, a)
            }) || this;
            return s._cbs = e, s.events = [], s
        }
        return t.prototype.onreset = function() {
            this.events = [], this._cbs.onreset && this._cbs.onreset()
        }, t.prototype.restart = function() {
            var e;
            this._cbs.onreset && this._cbs.onreset();
            for (var s = 0; s < this.events.length; s++) {
                var o = this.events[s],
                    i = o[0],
                    a = o.slice(1);
                this._cbs[i] && (e = this._cbs)[i].apply(e, a)
            }
        }, t
    }(hX.default);
Li.CollectingHandler = pX;
(function(n) {
    function t(h) {
        for (var p in h) n.hasOwnProperty(p) || (n[p] = h[p])
    }
    var e = Q && Q.__importStar || function(h) {
        if (h && h.__esModule) return h;
        var p = {};
        if (h != null)
            for (var f in h) Object.hasOwnProperty.call(h, f) && (p[f] = h[f]);
        return p.default = h, p
    };
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var s = kr;
    n.Parser = s.Parser;
    var o = wi;
    n.DomHandler = o.DomHandler, n.DefaultHandler = o.DomHandler;

    function i(h, p) {
        var f = new o.DomHandler(void 0, p);
        return new s.Parser(f, p).end(h), f.dom
    }
    n.parseDOM = i;

    function a(h, p, f) {
        var g = new o.DomHandler(h, p, f);
        return new s.Parser(g, p)
    }
    n.createDomStream = a;
    var c = Er;
    n.Tokenizer = c.default;
    var l = e(Mn);
    n.ElementType = l, n.EVENTS = {
        attribute: 2,
        cdatastart: 0,
        cdataend: 0,
        text: 1,
        processinginstruction: 2,
        comment: 1,
        commentend: 0,
        closetag: 1,
        opentag: 2,
        opentagname: 1,
        error: 1,
        end: 0
    }, t(Kn), t(pe), t(Li);
    var u = e(xi);
    n.DomUtils = u;
    var d = Kn;
    n.RssHandler = d.FeedHandler
})(xl);
var fX = n => {
        if (typeof n != "string") throw new TypeError("Expected a string");
        return n.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
    },
    wu = {};

function ke(n) {
    if (typeof n != "object") return n;
    var t, e, s = Object.prototype.toString.call(n);
    if (s === "[object Object]") {
        if (n.constructor !== Object && typeof n.constructor == "function") {
            e = new n.constructor;
            for (t in n) n.hasOwnProperty(t) && e[t] !== n[t] && (e[t] = ke(n[t]))
        } else {
            e = {};
            for (t in n) t === "__proto__" ? Object.defineProperty(e, t, {
                value: ke(n[t]),
                configurable: !0,
                enumerable: !0,
                writable: !0
            }) : e[t] = ke(n[t])
        }
        return e
    }
    if (s === "[object Array]") {
        for (t = n.length, e = Array(t); t--;) e[t] = ke(n[t]);
        return e
    }
    return s === "[object Set]" ? (e = new Set, n.forEach(function(o) {
        e.add(ke(o))
    }), e) : s === "[object Map]" ? (e = new Map, n.forEach(function(o, i) {
        e.set(ke(i), ke(o))
    }), e) : s === "[object Date]" ? new Date(+n) : s === "[object RegExp]" ? (e = new RegExp(n.source, n.flags), e.lastIndex = n.lastIndex, e) : s === "[object DataView]" ? new n.constructor(ke(n.buffer)) : s === "[object ArrayBuffer]" ? n.slice(0) : s.slice(-6) === "Array]" ? new n.constructor(n) : n
}
wu.klona = ke;
var Oi = {};
Object.defineProperty(Oi, "__esModule", {
    value: !0
});
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Aa(n) {
    return Object.prototype.toString.call(n) === "[object Object]"
}

function mX(n) {
    var t, e;
    return Aa(n) === !1 ? !1 : (t = n.constructor, t === void 0 ? !0 : (e = t.prototype, !(Aa(e) === !1 || e.hasOwnProperty("isPrototypeOf") === !1)))
}
Oi.isPlainObject = mX;
var gX = function(t) {
    return bX(t) && !_X(t)
};

function bX(n) {
    return !!n && typeof n == "object"
}

function _X(n) {
    var t = Object.prototype.toString.call(n);
    return t === "[object RegExp]" || t === "[object Date]" || vX(n)
}
var yX = typeof Symbol == "function" && Symbol.for,
    wX = yX ? Symbol.for("react.element") : 60103;

function vX(n) {
    return n.$$typeof === wX
}

function SX(n) {
    return Array.isArray(n) ? [] : {}
}

function Qn(n, t) {
    return t.clone !== !1 && t.isMergeableObject(n) ? Cn(SX(n), n, t) : n
}

function CX(n, t, e) {
    return n.concat(t).map(function(s) {
        return Qn(s, e)
    })
}

function xX(n, t) {
    if (!t.customMerge) return Cn;
    var e = t.customMerge(n);
    return typeof e == "function" ? e : Cn
}

function NX(n) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(n).filter(function(t) {
        return n.propertyIsEnumerable(t)
    }) : []
}

function La(n) {
    return Object.keys(n).concat(NX(n))
}

function vu(n, t) {
    try {
        return t in n
    } catch (e) {
        return !1
    }
}

function kX(n, t) {
    return vu(n, t) && !(Object.hasOwnProperty.call(n, t) && Object.propertyIsEnumerable.call(n, t))
}

function EX(n, t, e) {
    var s = {};
    return e.isMergeableObject(n) && La(n).forEach(function(o) {
        s[o] = Qn(n[o], e)
    }), La(t).forEach(function(o) {
        kX(n, o) || (vu(n, o) && e.isMergeableObject(t[o]) ? s[o] = xX(o, e)(n[o], t[o], e) : s[o] = Qn(t[o], e))
    }), s
}

function Cn(n, t, e) {
    e = e || {}, e.arrayMerge = e.arrayMerge || CX, e.isMergeableObject = e.isMergeableObject || gX, e.cloneUnlessOtherwiseSpecified = Qn;
    var s = Array.isArray(t),
        o = Array.isArray(n),
        i = s === o;
    return i ? s ? e.arrayMerge(n, t, e) : EX(n, t, e) : Qn(t, e)
}
Cn.all = function(t, e) {
    if (!Array.isArray(t)) throw new Error("first argument should be an array");
    return t.reduce(function(s, o) {
        return Cn(s, o, e)
    }, {})
};
var TX = Cn,
    PX = TX,
    Su = {
        exports: {}
    };
(function(n) {
    (function(t, e) {
        n.exports ? n.exports = e() : t.parseSrcset = e()
    })(Q, function() {
        return function(t) {
            function e(x) {
                return x === " " || x === "	" || x === `
` || x === "\f" || x === "\r"
            }

            function s(x) {
                var w, P = x.exec(t.substring(_));
                if (P) return w = P[0], _ += w.length, w
            }
            for (var o = t.length, i = /^[ \t\n\r\u000c]+/, a = /^[, \t\n\r\u000c]+/, c = /^[^ \t\n\r\u000c]+/, l = /[,]+$/, u = /^\d+$/, d = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, h, p, f, g, m, _ = 0, y = [];;) {
                if (s(a), _ >= o) return y;
                h = s(c), p = [], h.slice(-1) === "," ? (h = h.replace(l, ""), S()) : b()
            }

            function b() {
                for (s(i), f = "", g = "in descriptor";;) {
                    if (m = t.charAt(_), g === "in descriptor")
                        if (e(m)) f && (p.push(f), f = "", g = "after descriptor");
                        else if (m === ",") {
                        _ += 1, f && p.push(f), S();
                        return
                    } else if (m === "(") f = f + m, g = "in parens";
                    else if (m === "") {
                        f && p.push(f), S();
                        return
                    } else f = f + m;
                    else if (g === "in parens")
                        if (m === ")") f = f + m, g = "in descriptor";
                        else if (m === "") {
                        p.push(f), S();
                        return
                    } else f = f + m;
                    else if (g === "after descriptor" && !e(m))
                        if (m === "") {
                            S();
                            return
                        } else g = "in descriptor", _ -= 1;
                    _ += 1
                }
            }

            function S() {
                var x = !1,
                    w, P, A, M, O = {},
                    T, v, C, N, R;
                for (M = 0; M < p.length; M++) T = p[M], v = T[T.length - 1], C = T.substring(0, T.length - 1), N = parseInt(C, 10), R = parseFloat(C), u.test(C) && v === "w" ? ((w || P) && (x = !0), N === 0 ? x = !0 : w = N) : d.test(C) && v === "x" ? ((w || P || A) && (x = !0), R < 0 ? x = !0 : P = R) : u.test(C) && v === "h" ? ((A || P) && (x = !0), N === 0 ? x = !0 : A = N) : x = !0;
                x ? console && console.log && console.log("Invalid srcset descriptor found in '" + t + "' at '" + T + "'.") : (O.url = h, w && (O.w = w), P && (O.d = P), A && (O.h = A), y.push(O))
            }
        }
    })
})(Su);
var AX = Su.exports,
    Mi = {
        exports: {}
    },
    xt = String,
    Cu = function() {
        return {
            isColorSupported: !1,
            reset: xt,
            bold: xt,
            dim: xt,
            italic: xt,
            underline: xt,
            inverse: xt,
            hidden: xt,
            strikethrough: xt,
            black: xt,
            red: xt,
            green: xt,
            yellow: xt,
            blue: xt,
            magenta: xt,
            cyan: xt,
            white: xt,
            gray: xt,
            bgBlack: xt,
            bgRed: xt,
            bgGreen: xt,
            bgYellow: xt,
            bgBlue: xt,
            bgMagenta: xt,
            bgCyan: xt,
            bgWhite: xt
        }
    };
Mi.exports = Cu();
Mi.exports.createColors = Cu;
var LX = Mi.exports;
let Ia = LX,
    Oa = pe,
    No = class xu extends Error {
        constructor(t, e, s, o, i, a) {
            super(t), this.name = "CssSyntaxError", this.reason = t, i && (this.file = i), o && (this.source = o), a && (this.plugin = a), typeof e != "undefined" && typeof s != "undefined" && (typeof e == "number" ? (this.line = e, this.column = s) : (this.line = e.line, this.column = e.column, this.endLine = s.line, this.endColumn = s.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, xu)
        }
        setMessage() {
            this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line != "undefined" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(t) {
            if (!this.source) return "";
            let e = this.source;
            t == null && (t = Ia.isColorSupported), Oa && t && (e = Oa(e));
            let s = e.split(/\r?\n/),
                o = Math.max(this.line - 3, 0),
                i = Math.min(this.line + 2, s.length),
                a = String(i).length,
                c, l;
            if (t) {
                let {
                    bold: u,
                    gray: d,
                    red: h
                } = Ia.createColors(!0);
                c = p => u(h(p)), l = p => d(p)
            } else c = l = u => u;
            return s.slice(o, i).map((u, d) => {
                let h = o + 1 + d,
                    p = " " + (" " + h).slice(-a) + " | ";
                if (h === this.line) {
                    let f = l(p.replace(/\d/g, " ")) + u.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                    return c(">") + l(p) + u + `
 ` + f + c("^")
                }
                return " " + l(p) + u
            }).join(`
`)
        }
        toString() {
            let t = this.showSourceCode();
            return t && (t = `

` + t + `
`), this.name + ": " + this.message + t
        }
    };
var Di = No;
No.default = No;
var hs = {};
hs.isClean = Symbol("isClean");
hs.my = Symbol("my");
const Ma = {
    after: `
`,
    beforeClose: `
`,
    beforeComment: `
`,
    beforeDecl: `
`,
    beforeOpen: " ",
    beforeRule: `
`,
    colon: ": ",
    commentLeft: " ",
    commentRight: " ",
    emptyBody: "",
    indent: "    ",
    semicolon: !1
};

function IX(n) {
    return n[0].toUpperCase() + n.slice(1)
}
let ko = class {
    constructor(t) {
        this.builder = t
    }
    atrule(t, e) {
        let s = "@" + t.name,
            o = t.params ? this.rawValue(t, "params") : "";
        if (typeof t.raws.afterName != "undefined" ? s += t.raws.afterName : o && (s += " "), t.nodes) this.block(t, s + o);
        else {
            let i = (t.raws.between || "") + (e ? ";" : "");
            this.builder(s + o + i, t)
        }
    }
    beforeAfter(t, e) {
        let s;
        t.type === "decl" ? s = this.raw(t, null, "beforeDecl") : t.type === "comment" ? s = this.raw(t, null, "beforeComment") : e === "before" ? s = this.raw(t, null, "beforeRule") : s = this.raw(t, null, "beforeClose");
        let o = t.parent,
            i = 0;
        for (; o && o.type !== "root";) i += 1, o = o.parent;
        if (s.includes(`
`)) {
            let a = this.raw(t, null, "indent");
            if (a.length)
                for (let c = 0; c < i; c++) s += a
        }
        return s
    }
    block(t, e) {
        let s = this.raw(t, "between", "beforeOpen");
        this.builder(e + s + "{", t, "start");
        let o;
        t.nodes && t.nodes.length ? (this.body(t), o = this.raw(t, "after")) : o = this.raw(t, "after", "emptyBody"), o && this.builder(o), this.builder("}", t, "end")
    }
    body(t) {
        let e = t.nodes.length - 1;
        for (; e > 0 && t.nodes[e].type === "comment";) e -= 1;
        let s = this.raw(t, "semicolon");
        for (let o = 0; o < t.nodes.length; o++) {
            let i = t.nodes[o],
                a = this.raw(i, "before");
            a && this.builder(a), this.stringify(i, e !== o || s)
        }
    }
    comment(t) {
        let e = this.raw(t, "left", "commentLeft"),
            s = this.raw(t, "right", "commentRight");
        this.builder("/*" + e + t.text + s + "*/", t)
    }
    decl(t, e) {
        let s = this.raw(t, "between", "colon"),
            o = t.prop + s + this.rawValue(t, "value");
        t.important && (o += t.raws.important || " !important"), e && (o += ";"), this.builder(o, t)
    }
    document(t) {
        this.body(t)
    }
    raw(t, e, s) {
        let o;
        if (s || (s = e), e && (o = t.raws[e], typeof o != "undefined")) return o;
        let i = t.parent;
        if (s === "before" && (!i || i.type === "root" && i.first === t || i && i.type === "document")) return "";
        if (!i) return Ma[s];
        let a = t.root();
        if (a.rawCache || (a.rawCache = {}), typeof a.rawCache[s] != "undefined") return a.rawCache[s];
        if (s === "before" || s === "after") return this.beforeAfter(t, s); {
            let c = "raw" + IX(s);
            this[c] ? o = this[c](a, t) : a.walk(l => {
                if (o = l.raws[e], typeof o != "undefined") return !1
            })
        }
        return typeof o == "undefined" && (o = Ma[s]), a.rawCache[s] = o, o
    }
    rawBeforeClose(t) {
        let e;
        return t.walk(s => {
            if (s.nodes && s.nodes.length > 0 && typeof s.raws.after != "undefined") return e = s.raws.after, e.includes(`
`) && (e = e.replace(/[^\n]+$/, "")), !1
        }), e && (e = e.replace(/\S/g, "")), e
    }
    rawBeforeComment(t, e) {
        let s;
        return t.walkComments(o => {
            if (typeof o.raws.before != "undefined") return s = o.raws.before, s.includes(`
`) && (s = s.replace(/[^\n]+$/, "")), !1
        }), typeof s == "undefined" ? s = this.raw(e, null, "beforeDecl") : s && (s = s.replace(/\S/g, "")), s
    }
    rawBeforeDecl(t, e) {
        let s;
        return t.walkDecls(o => {
            if (typeof o.raws.before != "undefined") return s = o.raws.before, s.includes(`
`) && (s = s.replace(/[^\n]+$/, "")), !1
        }), typeof s == "undefined" ? s = this.raw(e, null, "beforeRule") : s && (s = s.replace(/\S/g, "")), s
    }
    rawBeforeOpen(t) {
        let e;
        return t.walk(s => {
            if (s.type !== "decl" && (e = s.raws.between, typeof e != "undefined")) return !1
        }), e
    }
    rawBeforeRule(t) {
        let e;
        return t.walk(s => {
            if (s.nodes && (s.parent !== t || t.first !== s) && typeof s.raws.before != "undefined") return e = s.raws.before, e.includes(`
`) && (e = e.replace(/[^\n]+$/, "")), !1
        }), e && (e = e.replace(/\S/g, "")), e
    }
    rawColon(t) {
        let e;
        return t.walkDecls(s => {
            if (typeof s.raws.between != "undefined") return e = s.raws.between.replace(/[^\s:]/g, ""), !1
        }), e
    }
    rawEmptyBody(t) {
        let e;
        return t.walk(s => {
            if (s.nodes && s.nodes.length === 0 && (e = s.raws.after, typeof e != "undefined")) return !1
        }), e
    }
    rawIndent(t) {
        if (t.raws.indent) return t.raws.indent;
        let e;
        return t.walk(s => {
            let o = s.parent;
            if (o && o !== t && o.parent && o.parent === t && typeof s.raws.before != "undefined") {
                let i = s.raws.before.split(`
`);
                return e = i[i.length - 1], e = e.replace(/\S/g, ""), !1
            }
        }), e
    }
    rawSemicolon(t) {
        let e;
        return t.walk(s => {
            if (s.nodes && s.nodes.length && s.last.type === "decl" && (e = s.raws.semicolon, typeof e != "undefined")) return !1
        }), e
    }
    rawValue(t, e) {
        let s = t[e],
            o = t.raws[e];
        return o && o.value === s ? o.raw : s
    }
    root(t) {
        this.body(t), t.raws.after && this.builder(t.raws.after)
    }
    rule(t) {
        this.block(t, this.rawValue(t, "selector")), t.raws.ownSemicolon && this.builder(t.raws.ownSemicolon, t, "end")
    }
    stringify(t, e) {
        if (!this[t.type]) throw new Error("Unknown AST node type " + t.type + ". Maybe you need to change PostCSS stringifier.");
        this[t.type](t, e)
    }
};
var Nu = ko;
ko.default = ko;
let OX = Nu;

function Eo(n, t) {
    new OX(t).stringify(n)
}
var qr = Eo;
Eo.default = Eo;
let {
    isClean: xs,
    my: MX
} = hs, DX = Di, RX = Nu, $X = qr;

function To(n, t) {
    let e = new n.constructor;
    for (let s in n) {
        if (!Object.prototype.hasOwnProperty.call(n, s) || s === "proxyCache") continue;
        let o = n[s],
            i = typeof o;
        s === "parent" && i === "object" ? t && (e[s] = t) : s === "source" ? e[s] = o : Array.isArray(o) ? e[s] = o.map(a => To(a, e)) : (i === "object" && o !== null && (o = To(o)), e[s] = o)
    }
    return e
}
let Po = class {
    constructor(t = {}) {
        this.raws = {}, this[xs] = !1, this[MX] = !0;
        for (let e in t)
            if (e === "nodes") {
                this.nodes = [];
                for (let s of t[e]) typeof s.clone == "function" ? this.append(s.clone()) : this.append(s)
            } else this[e] = t[e]
    }
    addToError(t) {
        if (t.postcssNode = this, t.stack && this.source && /\n\s{4}at /.test(t.stack)) {
            let e = this.source;
            t.stack = t.stack.replace(/\n\s{4}at /, `$&${e.input.from}:${e.start.line}:${e.start.column}$&`)
        }
        return t
    }
    after(t) {
        return this.parent.insertAfter(this, t), this
    }
    assign(t = {}) {
        for (let e in t) this[e] = t[e];
        return this
    }
    before(t) {
        return this.parent.insertBefore(this, t), this
    }
    cleanRaws(t) {
        delete this.raws.before, delete this.raws.after, t || delete this.raws.between
    }
    clone(t = {}) {
        let e = To(this);
        for (let s in t) e[s] = t[s];
        return e
    }
    cloneAfter(t = {}) {
        let e = this.clone(t);
        return this.parent.insertAfter(this, e), e
    }
    cloneBefore(t = {}) {
        let e = this.clone(t);
        return this.parent.insertBefore(this, e), e
    }
    error(t, e = {}) {
        if (this.source) {
            let {
                end: s,
                start: o
            } = this.rangeBy(e);
            return this.source.input.error(t, {
                column: o.column,
                line: o.line
            }, {
                column: s.column,
                line: s.line
            }, e)
        }
        return new DX(t)
    }
    getProxyProcessor() {
        return {
            get(t, e) {
                return e === "proxyOf" ? t : e === "root" ? () => t.root().toProxy() : t[e]
            },
            set(t, e, s) {
                return t[e] === s || (t[e] = s, (e === "prop" || e === "value" || e === "name" || e === "params" || e === "important" || e === "text") && t.markDirty()), !0
            }
        }
    }
    markDirty() {
        if (this[xs]) {
            this[xs] = !1;
            let t = this;
            for (; t = t.parent;) t[xs] = !1
        }
    }
    next() {
        if (!this.parent) return;
        let t = this.parent.index(this);
        return this.parent.nodes[t + 1]
    }
    positionBy(t, e) {
        let s = this.source.start;
        if (t.index) s = this.positionInside(t.index, e);
        else if (t.word) {
            e = this.toString();
            let o = e.indexOf(t.word);
            o !== -1 && (s = this.positionInside(o, e))
        }
        return s
    }
    positionInside(t, e) {
        let s = e || this.toString(),
            o = this.source.start.column,
            i = this.source.start.line;
        for (let a = 0; a < t; a++) s[a] === `
` ? (o = 1, i += 1) : o += 1;
        return {
            column: o,
            line: i
        }
    }
    prev() {
        if (!this.parent) return;
        let t = this.parent.index(this);
        return this.parent.nodes[t - 1]
    }
    rangeBy(t) {
        let e = {
                column: this.source.start.column,
                line: this.source.start.line
            },
            s = this.source.end ? {
                column: this.source.end.column + 1,
                line: this.source.end.line
            } : {
                column: e.column + 1,
                line: e.line
            };
        if (t.word) {
            let o = this.toString(),
                i = o.indexOf(t.word);
            i !== -1 && (e = this.positionInside(i, o), s = this.positionInside(i + t.word.length, o))
        } else t.start ? e = {
            column: t.start.column,
            line: t.start.line
        } : t.index && (e = this.positionInside(t.index)), t.end ? s = {
            column: t.end.column,
            line: t.end.line
        } : t.endIndex ? s = this.positionInside(t.endIndex) : t.index && (s = this.positionInside(t.index + 1));
        return (s.line < e.line || s.line === e.line && s.column <= e.column) && (s = {
            column: e.column + 1,
            line: e.line
        }), {
            end: s,
            start: e
        }
    }
    raw(t, e) {
        return new RX().raw(this, t, e)
    }
    remove() {
        return this.parent && this.parent.removeChild(this), this.parent = void 0, this
    }
    replaceWith(...t) {
        if (this.parent) {
            let e = this,
                s = !1;
            for (let o of t) o === this ? s = !0 : s ? (this.parent.insertAfter(e, o), e = o) : this.parent.insertBefore(e, o);
            s || this.remove()
        }
        return this
    }
    root() {
        let t = this;
        for (; t.parent && t.parent.type !== "document";) t = t.parent;
        return t
    }
    toJSON(t, e) {
        let s = {},
            o = e == null;
        e = e || new Map;
        let i = 0;
        for (let a in this) {
            if (!Object.prototype.hasOwnProperty.call(this, a) || a === "parent" || a === "proxyCache") continue;
            let c = this[a];
            if (Array.isArray(c)) s[a] = c.map(l => typeof l == "object" && l.toJSON ? l.toJSON(null, e) : l);
            else if (typeof c == "object" && c.toJSON) s[a] = c.toJSON(null, e);
            else if (a === "source") {
                let l = e.get(c.input);
                l == null && (l = i, e.set(c.input, i), i++), s[a] = {
                    end: c.end,
                    inputId: l,
                    start: c.start
                }
            } else s[a] = c
        }
        return o && (s.inputs = [...e.keys()].map(a => a.toJSON())), s
    }
    toProxy() {
        return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
    }
    toString(t = $X) {
        t.stringify && (t = t.stringify);
        let e = "";
        return t(this, s => {
            e += s
        }), e
    }
    warn(t, e, s) {
        let o = {
            node: this
        };
        for (let i in s) o[i] = s[i];
        return t.warn(e, o)
    }
    get proxyOf() {
        return this
    }
};
var Br = Po;
Po.default = Po;
let qX = Br,
    Ao = class extends qX {
        constructor(t) {
            t && typeof t.value != "undefined" && typeof t.value != "string" && (t = V(k({}, t), {
                value: String(t.value)
            })), super(t), this.type = "decl"
        }
        get variable() {
            return this.prop.startsWith("--") || this.prop[0] === "$"
        }
    };
var Ur = Ao;
Ao.default = Ao;
let BX = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
    UX = (n, t = 21) => (e = t) => {
        let s = "",
            o = e;
        for (; o--;) s += n[Math.random() * n.length | 0];
        return s
    },
    FX = (n = 21) => {
        let t = "",
            e = n;
        for (; e--;) t += BX[Math.random() * 64 | 0];
        return t
    };
var jX = {
    nanoid: FX,
    customAlphabet: UX
};
let {
    SourceMapConsumer: Da,
    SourceMapGenerator: Ra
} = pe, {
    existsSync: HX,
    readFileSync: VX
} = pe, {
    dirname: Qr,
    join: zX
} = pe;

function WX(n) {
    return Buffer ? Buffer.from(n, "base64").toString() : window.atob(n)
}
let Lo = class {
    constructor(t, e) {
        if (e.map === !1) return;
        this.loadAnnotation(t), this.inline = this.startWith(this.annotation, "data:");
        let s = e.map ? e.map.prev : void 0,
            o = this.loadMap(e.from, s);
        !this.mapFile && e.from && (this.mapFile = e.from), this.mapFile && (this.root = Qr(this.mapFile)), o && (this.text = o)
    }
    consumer() {
        return this.consumerCache || (this.consumerCache = new Da(this.text)), this.consumerCache
    }
    decodeInline(t) {
        let e = /^data:application\/json;charset=utf-?8;base64,/,
            s = /^data:application\/json;base64,/,
            o = /^data:application\/json;charset=utf-?8,/,
            i = /^data:application\/json,/;
        if (o.test(t) || i.test(t)) return decodeURIComponent(t.substr(RegExp.lastMatch.length));
        if (e.test(t) || s.test(t)) return WX(t.substr(RegExp.lastMatch.length));
        let a = t.match(/data:application\/json;([^,]+),/)[1];
        throw new Error("Unsupported source map encoding " + a)
    }
    getAnnotationURL(t) {
        return t.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
    }
    isMap(t) {
        return typeof t != "object" ? !1 : typeof t.mappings == "string" || typeof t._mappings == "string" || Array.isArray(t.sections)
    }
    loadAnnotation(t) {
        let e = t.match(/\/\*\s*# sourceMappingURL=/gm);
        if (!e) return;
        let s = t.lastIndexOf(e.pop()),
            o = t.indexOf("*/", s);
        s > -1 && o > -1 && (this.annotation = this.getAnnotationURL(t.substring(s, o)))
    }
    loadFile(t) {
        if (this.root = Qr(t), HX(t)) return this.mapFile = t, VX(t, "utf-8").toString().trim()
    }
    loadMap(t, e) {
        if (e === !1) return !1;
        if (e) {
            if (typeof e == "string") return e;
            if (typeof e == "function") {
                let s = e(t);
                if (s) {
                    let o = this.loadFile(s);
                    if (!o) throw new Error("Unable to load previous source map: " + s.toString());
                    return o
                }
            } else {
                if (e instanceof Da) return Ra.fromSourceMap(e).toString();
                if (e instanceof Ra) return e.toString();
                if (this.isMap(e)) return JSON.stringify(e);
                throw new Error("Unsupported previous source map format: " + e.toString())
            }
        } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
                let s = this.annotation;
                return t && (s = zX(Qr(t), s)), this.loadFile(s)
            }
        }
    }
    startWith(t, e) {
        return t ? t.substr(0, e.length) === e : !1
    }
    withContent() {
        return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
    }
};
var ku = Lo;
Lo.default = Lo;
let {
    SourceMapConsumer: GX,
    SourceMapGenerator: JX
} = pe, {
    fileURLToPath: $a,
    pathToFileURL: Ns
} = pe, {
    isAbsolute: Io,
    resolve: Oo
} = pe, {
    nanoid: YX
} = jX, Zr = pe, qa = Di, KX = ku, to = Symbol("fromOffsetCache"), XX = !!(GX && JX), Ba = !!(Oo && Io), sr = class {
    constructor(t, e = {}) {
        if (t === null || typeof t == "undefined" || typeof t == "object" && !t.toString) throw new Error(`PostCSS received ${t} instead of CSS string`);
        if (this.css = t.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, e.from && (!Ba || /^\w+:\/\//.test(e.from) || Io(e.from) ? this.file = e.from : this.file = Oo(e.from)), Ba && XX) {
            let s = new KX(this.css, e);
            if (s.text) {
                this.map = s;
                let o = s.consumer().file;
                !this.file && o && (this.file = this.mapResolve(o))
            }
        }
        this.file || (this.id = "<input css " + YX(6) + ">"), this.map && (this.map.file = this.from)
    }
    error(t, e, s, o = {}) {
        let i, a, c;
        if (e && typeof e == "object") {
            let u = e,
                d = s;
            if (typeof u.offset == "number") {
                let h = this.fromOffset(u.offset);
                e = h.line, s = h.col
            } else e = u.line, s = u.column;
            if (typeof d.offset == "number") {
                let h = this.fromOffset(d.offset);
                a = h.line, c = h.col
            } else a = d.line, c = d.column
        } else if (!s) {
            let u = this.fromOffset(e);
            e = u.line, s = u.col
        }
        let l = this.origin(e, s, a, c);
        return l ? i = new qa(t, l.endLine === void 0 ? l.line : {
            column: l.column,
            line: l.line
        }, l.endLine === void 0 ? l.column : {
            column: l.endColumn,
            line: l.endLine
        }, l.source, l.file, o.plugin) : i = new qa(t, a === void 0 ? e : {
            column: s,
            line: e
        }, a === void 0 ? s : {
            column: c,
            line: a
        }, this.css, this.file, o.plugin), i.input = {
            column: s,
            endColumn: c,
            endLine: a,
            line: e,
            source: this.css
        }, this.file && (Ns && (i.input.url = Ns(this.file).toString()), i.input.file = this.file), i
    }
    fromOffset(t) {
        let e, s;
        if (this[to]) s = this[to];
        else {
            let i = this.css.split(`
`);
            s = new Array(i.length);
            let a = 0;
            for (let c = 0, l = i.length; c < l; c++) s[c] = a, a += i[c].length + 1;
            this[to] = s
        }
        e = s[s.length - 1];
        let o = 0;
        if (t >= e) o = s.length - 1;
        else {
            let i = s.length - 2,
                a;
            for (; o < i;)
                if (a = o + (i - o >> 1), t < s[a]) i = a - 1;
                else if (t >= s[a + 1]) o = a + 1;
            else {
                o = a;
                break
            }
        }
        return {
            col: t - s[o] + 1,
            line: o + 1
        }
    }
    mapResolve(t) {
        return /^\w+:\/\//.test(t) ? t : Oo(this.map.consumer().sourceRoot || this.map.root || ".", t)
    }
    origin(t, e, s, o) {
        if (!this.map) return !1;
        let i = this.map.consumer(),
            a = i.originalPositionFor({
                column: e,
                line: t
            });
        if (!a.source) return !1;
        let c;
        typeof s == "number" && (c = i.originalPositionFor({
            column: o,
            line: s
        }));
        let l;
        Io(a.source) ? l = Ns(a.source) : l = new URL(a.source, this.map.consumer().sourceRoot || Ns(this.map.mapFile));
        let u = {
            column: a.column,
            endColumn: c && c.column,
            endLine: c && c.line,
            line: a.line,
            url: l.toString()
        };
        if (l.protocol === "file:")
            if ($a) u.file = $a(l);
            else throw new Error("file: protocol is not available in this PostCSS build");
        let d = i.sourceContentFor(a.source);
        return d && (u.source = d), u
    }
    toJSON() {
        let t = {};
        for (let e of ["hasBOM", "css", "file", "id"]) this[e] != null && (t[e] = this[e]);
        return this.map && (t.map = k({}, this.map), t.map.consumerCache && (t.map.consumerCache = void 0)), t
    }
    get from() {
        return this.file || this.id
    }
};
var Fr = sr;
sr.default = sr;
Zr && Zr.registerInput && Zr.registerInput(sr);
let {
    SourceMapConsumer: Eu,
    SourceMapGenerator: Fs
} = pe, {
    dirname: js,
    relative: Tu,
    resolve: Pu,
    sep: Au
} = pe, {
    pathToFileURL: Ua
} = pe, QX = Fr, ZX = !!(Eu && Fs), tQ = !!(js && Pu && Tu && Au), eQ = class {
    constructor(t, e, s, o) {
        this.stringify = t, this.mapOpts = s.map || {}, this.root = e, this.opts = s, this.css = o, this.originalCSS = o, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
    }
    addAnnotation() {
        let t;
        this.isInline() ? t = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? t = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? t = this.mapOpts.annotation(this.opts.to, this.root) : t = this.outputFile() + ".map";
        let e = `
`;
        this.css.includes(`\r
`) && (e = `\r
`), this.css += e + "/*# sourceMappingURL=" + t + " */"
    }
    applyPrevMaps() {
        for (let t of this.previous()) {
            let e = this.toUrl(this.path(t.file)),
                s = t.root || js(t.file),
                o;
            this.mapOpts.sourcesContent === !1 ? (o = new Eu(t.text), o.sourcesContent && (o.sourcesContent = o.sourcesContent.map(() => null))) : o = t.consumer(), this.map.applySourceMap(o, e, this.toUrl(this.path(s)))
        }
    }
    clearAnnotation() {
        if (this.mapOpts.annotation !== !1)
            if (this.root) {
                let t;
                for (let e = this.root.nodes.length - 1; e >= 0; e--) t = this.root.nodes[e], t.type === "comment" && t.text.indexOf("# sourceMappingURL=") === 0 && this.root.removeChild(e)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
    }
    generate() {
        if (this.clearAnnotation(), tQ && ZX && this.isMap()) return this.generateMap(); {
            let t = "";
            return this.stringify(this.root, e => {
                t += e
            }), [t]
        }
    }
    generateMap() {
        if (this.root) this.generateString();
        else if (this.previous().length === 1) {
            let t = this.previous()[0].consumer();
            t.file = this.outputFile(), this.map = Fs.fromSourceMap(t)
        } else this.map = new Fs({
            file: this.outputFile()
        }), this.map.addMapping({
            generated: {
                column: 0,
                line: 1
            },
            original: {
                column: 0,
                line: 1
            },
            source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
        });
        return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map]
    }
    generateString() {
        this.css = "", this.map = new Fs({
            file: this.outputFile()
        });
        let t = 1,
            e = 1,
            s = "<no source>",
            o = {
                generated: {
                    column: 0,
                    line: 0
                },
                original: {
                    column: 0,
                    line: 0
                },
                source: ""
            },
            i, a;
        this.stringify(this.root, (c, l, u) => {
            if (this.css += c, l && u !== "end" && (o.generated.line = t, o.generated.column = e - 1, l.source && l.source.start ? (o.source = this.sourcePath(l), o.original.line = l.source.start.line, o.original.column = l.source.start.column - 1, this.map.addMapping(o)) : (o.source = s, o.original.line = 1, o.original.column = 0, this.map.addMapping(o))), i = c.match(/\n/g), i ? (t += i.length, a = c.lastIndexOf(`
`), e = c.length - a) : e += c.length, l && u !== "start") {
                let d = l.parent || {
                    raws: {}
                };
                (!(l.type === "decl" || l.type === "atrule" && !l.nodes) || l !== d.last || d.raws.semicolon) && (l.source && l.source.end ? (o.source = this.sourcePath(l), o.original.line = l.source.end.line, o.original.column = l.source.end.column - 1, o.generated.line = t, o.generated.column = e - 2, this.map.addMapping(o)) : (o.source = s, o.original.line = 1, o.original.column = 0, o.generated.line = t, o.generated.column = e - 1, this.map.addMapping(o)))
            }
        })
    }
    isAnnotation() {
        return this.isInline() ? !0 : typeof this.mapOpts.annotation != "undefined" ? this.mapOpts.annotation : this.previous().length ? this.previous().some(t => t.annotation) : !0
    }
    isInline() {
        if (typeof this.mapOpts.inline != "undefined") return this.mapOpts.inline;
        let t = this.mapOpts.annotation;
        return typeof t != "undefined" && t !== !0 ? !1 : this.previous().length ? this.previous().some(e => e.inline) : !0
    }
    isMap() {
        return typeof this.opts.map != "undefined" ? !!this.opts.map : this.previous().length > 0
    }
    isSourcesContent() {
        return typeof this.mapOpts.sourcesContent != "undefined" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some(t => t.withContent()) : !0
    }
    outputFile() {
        return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
    }
    path(t) {
        if (this.mapOpts.absolute || t.charCodeAt(0) === 60 || /^\w+:\/\//.test(t)) return t;
        let e = this.memoizedPaths.get(t);
        if (e) return e;
        let s = this.opts.to ? js(this.opts.to) : ".";
        typeof this.mapOpts.annotation == "string" && (s = js(Pu(s, this.mapOpts.annotation)));
        let o = Tu(s, t);
        return this.memoizedPaths.set(t, o), o
    }
    previous() {
        if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk(t => {
                if (t.source && t.source.input.map) {
                    let e = t.source.input.map;
                    this.previousMaps.includes(e) || this.previousMaps.push(e)
                }
            });
            else {
                let t = new QX(this.originalCSS, this.opts);
                t.map && this.previousMaps.push(t.map)
            }
        return this.previousMaps
    }
    setSourcesContent() {
        let t = {};
        if (this.root) this.root.walk(e => {
            if (e.source) {
                let s = e.source.input.from;
                if (s && !t[s]) {
                    t[s] = !0;
                    let o = this.usesFileUrls ? this.toFileUrl(s) : this.toUrl(this.path(s));
                    this.map.setSourceContent(o, e.source.input.css)
                }
            }
        });
        else if (this.css) {
            let e = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(e, this.css)
        }
    }
    sourcePath(t) {
        return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(t.source.input.from) : this.toUrl(this.path(t.source.input.from))
    }
    toBase64(t) {
        return Buffer ? Buffer.from(t).toString("base64") : window.btoa(unescape(encodeURIComponent(t)))
    }
    toFileUrl(t) {
        let e = this.memoizedFileURLs.get(t);
        if (e) return e;
        if (Ua) {
            let s = Ua(t).toString();
            return this.memoizedFileURLs.set(t, s), s
        } else throw new Error("`map.absolute` option is not available in this PostCSS build")
    }
    toUrl(t) {
        let e = this.memoizedURLs.get(t);
        if (e) return e;
        Au === "\\" && (t = t.replace(/\\/g, "/"));
        let s = encodeURI(t).replace(/[#?]/g, encodeURIComponent);
        return this.memoizedURLs.set(t, s), s
    }
};
var Lu = eQ;
let nQ = Br,
    Mo = class extends nQ {
        constructor(t) {
            super(t), this.type = "comment"
        }
    };
var jr = Mo;
Mo.default = Mo;
let {
    isClean: Iu,
    my: Ou
} = hs, Mu = Ur, Du = jr, sQ = Br, Ru, Ri, $i, $u;

function qu(n) {
    return n.map(t => (t.nodes && (t.nodes = qu(t.nodes)), delete t.source, t))
}

function Bu(n) {
    if (n[Iu] = !1, n.proxyOf.nodes)
        for (let t of n.proxyOf.nodes) Bu(t)
}
let Ie = class Uu extends sQ {
    append(...t) {
        for (let e of t) {
            let s = this.normalize(e, this.last);
            for (let o of s) this.proxyOf.nodes.push(o)
        }
        return this.markDirty(), this
    }
    cleanRaws(t) {
        if (super.cleanRaws(t), this.nodes)
            for (let e of this.nodes) e.cleanRaws(t)
    }
    each(t) {
        if (!this.proxyOf.nodes) return;
        let e = this.getIterator(),
            s, o;
        for (; this.indexes[e] < this.proxyOf.nodes.length && (s = this.indexes[e], o = t(this.proxyOf.nodes[s], s), o !== !1);) this.indexes[e] += 1;
        return delete this.indexes[e], o
    }
    every(t) {
        return this.nodes.every(t)
    }
    getIterator() {
        this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
        let t = this.lastEach;
        return this.indexes[t] = 0, t
    }
    getProxyProcessor() {
        return {
            get(t, e) {
                return e === "proxyOf" ? t : t[e] ? e === "each" || typeof e == "string" && e.startsWith("walk") ? (...s) => t[e](...s.map(o => typeof o == "function" ? (i, a) => o(i.toProxy(), a) : o)) : e === "every" || e === "some" ? s => t[e]((o, ...i) => s(o.toProxy(), ...i)) : e === "root" ? () => t.root().toProxy() : e === "nodes" ? t.nodes.map(s => s.toProxy()) : e === "first" || e === "last" ? t[e].toProxy() : t[e] : t[e]
            },
            set(t, e, s) {
                return t[e] === s || (t[e] = s, (e === "name" || e === "params" || e === "selector") && t.markDirty()), !0
            }
        }
    }
    index(t) {
        return typeof t == "number" ? t : (t.proxyOf && (t = t.proxyOf), this.proxyOf.nodes.indexOf(t))
    }
    insertAfter(t, e) {
        let s = this.index(t),
            o = this.normalize(e, this.proxyOf.nodes[s]).reverse();
        s = this.index(t);
        for (let a of o) this.proxyOf.nodes.splice(s + 1, 0, a);
        let i;
        for (let a in this.indexes) i = this.indexes[a], s < i && (this.indexes[a] = i + o.length);
        return this.markDirty(), this
    }
    insertBefore(t, e) {
        let s = this.index(t),
            o = s === 0 ? "prepend" : !1,
            i = this.normalize(e, this.proxyOf.nodes[s], o).reverse();
        s = this.index(t);
        for (let c of i) this.proxyOf.nodes.splice(s, 0, c);
        let a;
        for (let c in this.indexes) a = this.indexes[c], s <= a && (this.indexes[c] = a + i.length);
        return this.markDirty(), this
    }
    normalize(t, e) {
        if (typeof t == "string") t = qu(Ru(t).nodes);
        else if (Array.isArray(t)) {
            t = t.slice(0);
            for (let o of t) o.parent && o.parent.removeChild(o, "ignore")
        } else if (t.type === "root" && this.type !== "document") {
            t = t.nodes.slice(0);
            for (let o of t) o.parent && o.parent.removeChild(o, "ignore")
        } else if (t.type) t = [t];
        else if (t.prop) {
            if (typeof t.value == "undefined") throw new Error("Value field is missed in node creation");
            typeof t.value != "string" && (t.value = String(t.value)), t = [new Mu(t)]
        } else if (t.selector) t = [new Ri(t)];
        else if (t.name) t = [new $i(t)];
        else if (t.text) t = [new Du(t)];
        else throw new Error("Unknown node type in node creation");
        return t.map(o => (o[Ou] || Uu.rebuild(o), o = o.proxyOf, o.parent && o.parent.removeChild(o), o[Iu] && Bu(o), typeof o.raws.before == "undefined" && e && typeof e.raws.before != "undefined" && (o.raws.before = e.raws.before.replace(/\S/g, "")), o.parent = this.proxyOf, o))
    }
    prepend(...t) {
        t = t.reverse();
        for (let e of t) {
            let s = this.normalize(e, this.first, "prepend").reverse();
            for (let o of s) this.proxyOf.nodes.unshift(o);
            for (let o in this.indexes) this.indexes[o] = this.indexes[o] + s.length
        }
        return this.markDirty(), this
    }
    push(t) {
        return t.parent = this, this.proxyOf.nodes.push(t), this
    }
    removeAll() {
        for (let t of this.proxyOf.nodes) t.parent = void 0;
        return this.proxyOf.nodes = [], this.markDirty(), this
    }
    removeChild(t) {
        t = this.index(t), this.proxyOf.nodes[t].parent = void 0, this.proxyOf.nodes.splice(t, 1);
        let e;
        for (let s in this.indexes) e = this.indexes[s], e >= t && (this.indexes[s] = e - 1);
        return this.markDirty(), this
    }
    replaceValues(t, e, s) {
        return s || (s = e, e = {}), this.walkDecls(o => {
            e.props && !e.props.includes(o.prop) || e.fast && !o.value.includes(e.fast) || (o.value = o.value.replace(t, s))
        }), this.markDirty(), this
    }
    some(t) {
        return this.nodes.some(t)
    }
    walk(t) {
        return this.each((e, s) => {
            let o;
            try {
                o = t(e, s)
            } catch (i) {
                throw e.addToError(i)
            }
            return o !== !1 && e.walk && (o = e.walk(t)), o
        })
    }
    walkAtRules(t, e) {
        return e ? t instanceof RegExp ? this.walk((s, o) => {
            if (s.type === "atrule" && t.test(s.name)) return e(s, o)
        }) : this.walk((s, o) => {
            if (s.type === "atrule" && s.name === t) return e(s, o)
        }) : (e = t, this.walk((s, o) => {
            if (s.type === "atrule") return e(s, o)
        }))
    }
    walkComments(t) {
        return this.walk((e, s) => {
            if (e.type === "comment") return t(e, s)
        })
    }
    walkDecls(t, e) {
        return e ? t instanceof RegExp ? this.walk((s, o) => {
            if (s.type === "decl" && t.test(s.prop)) return e(s, o)
        }) : this.walk((s, o) => {
            if (s.type === "decl" && s.prop === t) return e(s, o)
        }) : (e = t, this.walk((s, o) => {
            if (s.type === "decl") return e(s, o)
        }))
    }
    walkRules(t, e) {
        return e ? t instanceof RegExp ? this.walk((s, o) => {
            if (s.type === "rule" && t.test(s.selector)) return e(s, o)
        }) : this.walk((s, o) => {
            if (s.type === "rule" && s.selector === t) return e(s, o)
        }) : (e = t, this.walk((s, o) => {
            if (s.type === "rule") return e(s, o)
        }))
    }
    get first() {
        if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
    }
    get last() {
        if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
    }
};
Ie.registerParse = n => {
    Ru = n
};
Ie.registerRule = n => {
    Ri = n
};
Ie.registerAtRule = n => {
    $i = n
};
Ie.registerRoot = n => {
    $u = n
};
var on = Ie;
Ie.default = Ie;
Ie.rebuild = n => {
    n.type === "atrule" ? Object.setPrototypeOf(n, $i.prototype) : n.type === "rule" ? Object.setPrototypeOf(n, Ri.prototype) : n.type === "decl" ? Object.setPrototypeOf(n, Mu.prototype) : n.type === "comment" ? Object.setPrototypeOf(n, Du.prototype) : n.type === "root" && Object.setPrototypeOf(n, $u.prototype), n[Ou] = !0, n.nodes && n.nodes.forEach(t => {
        Ie.rebuild(t)
    })
};
let rQ = on,
    Fu, ju, Zn = class extends rQ {
        constructor(t) {
            super(k({
                type: "document"
            }, t)), this.nodes || (this.nodes = [])
        }
        toResult(t = {}) {
            return new Fu(new ju, this, t).stringify()
        }
    };
Zn.registerLazyResult = n => {
    Fu = n
};
Zn.registerProcessor = n => {
    ju = n
};
var qi = Zn;
Zn.default = Zn;
let Do = class {
    constructor(t, e = {}) {
        if (this.type = "warning", this.text = t, e.node && e.node.source) {
            let s = e.node.rangeBy(e);
            this.line = s.start.line, this.column = s.start.column, this.endLine = s.end.line, this.endColumn = s.end.column
        }
        for (let s in e) this[s] = e[s]
    }
    toString() {
        return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
        }).message : this.plugin ? this.plugin + ": " + this.text : this.text
    }
};
var Hu = Do;
Do.default = Do;
let oQ = Hu,
    Ro = class {
        constructor(t, e, s) {
            this.processor = t, this.messages = [], this.root = e, this.opts = s, this.css = void 0, this.map = void 0
        }
        toString() {
            return this.css
        }
        warn(t, e = {}) {
            e.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (e.plugin = this.lastPlugin.postcssPlugin);
            let s = new oQ(t, e);
            return this.messages.push(s), s
        }
        warnings() {
            return this.messages.filter(t => t.type === "warning")
        }
        get content() {
            return this.css
        }
    };
var Bi = Ro;
Ro.default = Ro;
const eo = "'".charCodeAt(0),
    Fa = '"'.charCodeAt(0),
    ks = "\\".charCodeAt(0),
    ja = "/".charCodeAt(0),
    Es = `
`.charCodeAt(0),
    Bn = " ".charCodeAt(0),
    Ts = "\f".charCodeAt(0),
    Ps = "	".charCodeAt(0),
    As = "\r".charCodeAt(0),
    iQ = "[".charCodeAt(0),
    aQ = "]".charCodeAt(0),
    cQ = "(".charCodeAt(0),
    lQ = ")".charCodeAt(0),
    uQ = "{".charCodeAt(0),
    dQ = "}".charCodeAt(0),
    hQ = ";".charCodeAt(0),
    pQ = "*".charCodeAt(0),
    fQ = ":".charCodeAt(0),
    mQ = "@".charCodeAt(0),
    Ls = /[\t\n\f\r "#'()/;[\\\]{}]/g,
    Is = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
    gQ = /.[\r\n"'(/\\]/,
    Ha = /[\da-f]/i;
var bQ = function(t, e = {}) {
    let s = t.css.valueOf(),
        o = e.ignoreErrors,
        i, a, c, l, u, d, h, p, f, g, m = s.length,
        _ = 0,
        y = [],
        b = [];

    function S() {
        return _
    }

    function x(M) {
        throw t.error("Unclosed " + M, _)
    }

    function w() {
        return b.length === 0 && _ >= m
    }

    function P(M) {
        if (b.length) return b.pop();
        if (_ >= m) return;
        let O = M ? M.ignoreUnclosed : !1;
        switch (i = s.charCodeAt(_), i) {
            case Es:
            case Bn:
            case Ps:
            case As:
            case Ts:
                {
                    a = _;do a += 1,
                    i = s.charCodeAt(a);
                    while (i === Bn || i === Es || i === Ps || i === As || i === Ts);g = ["space", s.slice(_, a)],
                    _ = a - 1;
                    break
                }
            case iQ:
            case aQ:
            case uQ:
            case dQ:
            case fQ:
            case hQ:
            case lQ:
                {
                    let T = String.fromCharCode(i);g = [T, T, _];
                    break
                }
            case cQ:
                {
                    if (p = y.length ? y.pop()[1] : "", f = s.charCodeAt(_ + 1), p === "url" && f !== eo && f !== Fa && f !== Bn && f !== Es && f !== Ps && f !== Ts && f !== As) {
                        a = _;
                        do {
                            if (d = !1, a = s.indexOf(")", a + 1), a === -1)
                                if (o || O) {
                                    a = _;
                                    break
                                } else x("bracket");
                            for (h = a; s.charCodeAt(h - 1) === ks;) h -= 1, d = !d
                        } while (d);
                        g = ["brackets", s.slice(_, a + 1), _, a], _ = a
                    } else a = s.indexOf(")", _ + 1),
                    l = s.slice(_, a + 1),
                    a === -1 || gQ.test(l) ? g = ["(", "(", _] : (g = ["brackets", l, _, a], _ = a);
                    break
                }
            case eo:
            case Fa:
                {
                    c = i === eo ? "'" : '"',
                    a = _;do {
                        if (d = !1, a = s.indexOf(c, a + 1), a === -1)
                            if (o || O) {
                                a = _ + 1;
                                break
                            } else x("string");
                        for (h = a; s.charCodeAt(h - 1) === ks;) h -= 1, d = !d
                    } while (d);g = ["string", s.slice(_, a + 1), _, a],
                    _ = a;
                    break
                }
            case mQ:
                {
                    Ls.lastIndex = _ + 1,
                    Ls.test(s),
                    Ls.lastIndex === 0 ? a = s.length - 1 : a = Ls.lastIndex - 2,
                    g = ["at-word", s.slice(_, a + 1), _, a],
                    _ = a;
                    break
                }
            case ks:
                {
                    for (a = _, u = !0; s.charCodeAt(a + 1) === ks;) a += 1,
                    u = !u;
                    if (i = s.charCodeAt(a + 1), u && i !== ja && i !== Bn && i !== Es && i !== Ps && i !== As && i !== Ts && (a += 1, Ha.test(s.charAt(a)))) {
                        for (; Ha.test(s.charAt(a + 1));) a += 1;
                        s.charCodeAt(a + 1) === Bn && (a += 1)
                    }
                    g = ["word", s.slice(_, a + 1), _, a],
                    _ = a;
                    break
                }
            default:
                {
                    i === ja && s.charCodeAt(_ + 1) === pQ ? (a = s.indexOf("*/", _ + 2) + 1, a === 0 && (o || O ? a = s.length : x("comment")), g = ["comment", s.slice(_, a + 1), _, a], _ = a) : (Is.lastIndex = _ + 1, Is.test(s), Is.lastIndex === 0 ? a = s.length - 1 : a = Is.lastIndex - 2, g = ["word", s.slice(_, a + 1), _, a], y.push(g), _ = a);
                    break
                }
        }
        return _++, g
    }

    function A(M) {
        b.push(M)
    }
    return {
        back: A,
        endOfFile: w,
        nextToken: P,
        position: S
    }
};
let Vu = on,
    rr = class extends Vu {
        constructor(t) {
            super(t), this.type = "atrule"
        }
        append(...t) {
            return this.proxyOf.nodes || (this.nodes = []), super.append(...t)
        }
        prepend(...t) {
            return this.proxyOf.nodes || (this.nodes = []), super.prepend(...t)
        }
    };
var Ui = rr;
rr.default = rr;
Vu.registerAtRule(rr);
let zu = on,
    Wu, Gu, xn = class extends zu {
        constructor(t) {
            super(t), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(t, e, s) {
            let o = super.normalize(t);
            if (e) {
                if (s === "prepend") this.nodes.length > 1 ? e.raws.before = this.nodes[1].raws.before : delete e.raws.before;
                else if (this.first !== e)
                    for (let i of o) i.raws.before = e.raws.before
            }
            return o
        }
        removeChild(t, e) {
            let s = this.index(t);
            return !e && s === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[s].raws.before), super.removeChild(t)
        }
        toResult(t = {}) {
            return new Wu(new Gu, this, t).stringify()
        }
    };
xn.registerLazyResult = n => {
    Wu = n
};
xn.registerProcessor = n => {
    Gu = n
};
var ps = xn;
xn.default = xn;
zu.registerRoot(xn);
let ts = {
    comma(n) {
        return ts.split(n, [","], !0)
    },
    space(n) {
        let t = [" ", `
`, "	"];
        return ts.split(n, t)
    },
    split(n, t, e) {
        let s = [],
            o = "",
            i = !1,
            a = 0,
            c = !1,
            l = "",
            u = !1;
        for (let d of n) u ? u = !1 : d === "\\" ? u = !0 : c ? d === l && (c = !1) : d === '"' || d === "'" ? (c = !0, l = d) : d === "(" ? a += 1 : d === ")" ? a > 0 && (a -= 1) : a === 0 && t.includes(d) && (i = !0), i ? (o !== "" && s.push(o.trim()), o = "", i = !1) : o += d;
        return (e || o !== "") && s.push(o.trim()), s
    }
};
var Ju = ts;
ts.default = ts;
let Yu = on,
    _Q = Ju,
    or = class extends Yu {
        constructor(t) {
            super(t), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
            return _Q.comma(this.selector)
        }
        set selectors(t) {
            let e = this.selector ? this.selector.match(/,\s*/) : null,
                s = e ? e[0] : "," + this.raw("between", "beforeOpen");
            this.selector = t.join(s)
        }
    };
var Fi = or;
or.default = or;
Yu.registerRule(or);
let yQ = Ur,
    wQ = bQ,
    vQ = jr,
    SQ = Ui,
    CQ = ps,
    Va = Fi;
const za = {
    empty: !0,
    space: !0
};

function xQ(n) {
    for (let t = n.length - 1; t >= 0; t--) {
        let e = n[t],
            s = e[3] || e[2];
        if (s) return s
    }
}
let NQ = class {
    constructor(t) {
        this.input = t, this.root = new CQ, this.current = this.root, this.spaces = "", this.semicolon = !1, this.customProperty = !1, this.createTokenizer(), this.root.source = {
            input: t,
            start: {
                column: 1,
                line: 1,
                offset: 0
            }
        }
    }
    atrule(t) {
        let e = new SQ;
        e.name = t[1].slice(1), e.name === "" && this.unnamedAtrule(e, t), this.init(e, t[2]);
        let s, o, i, a = !1,
            c = !1,
            l = [],
            u = [];
        for (; !this.tokenizer.endOfFile();) {
            if (t = this.tokenizer.nextToken(), s = t[0], s === "(" || s === "[" ? u.push(s === "(" ? ")" : "]") : s === "{" && u.length > 0 ? u.push("}") : s === u[u.length - 1] && u.pop(), u.length === 0)
                if (s === ";") {
                    e.source.end = this.getPosition(t[2]), e.source.end.offset++, this.semicolon = !0;
                    break
                } else if (s === "{") {
                c = !0;
                break
            } else if (s === "}") {
                if (l.length > 0) {
                    for (i = l.length - 1, o = l[i]; o && o[0] === "space";) o = l[--i];
                    o && (e.source.end = this.getPosition(o[3] || o[2]), e.source.end.offset++)
                }
                this.end(t);
                break
            } else l.push(t);
            else l.push(t);
            if (this.tokenizer.endOfFile()) {
                a = !0;
                break
            }
        }
        e.raws.between = this.spacesAndCommentsFromEnd(l), l.length ? (e.raws.afterName = this.spacesAndCommentsFromStart(l), this.raw(e, "params", l), a && (t = l[l.length - 1], e.source.end = this.getPosition(t[3] || t[2]), e.source.end.offset++, this.spaces = e.raws.between, e.raws.between = "")) : (e.raws.afterName = "", e.params = ""), c && (e.nodes = [], this.current = e)
    }
    checkMissedSemicolon(t) {
        let e = this.colon(t);
        if (e === !1) return;
        let s = 0,
            o;
        for (let i = e - 1; i >= 0 && (o = t[i], !(o[0] !== "space" && (s += 1, s === 2))); i--);
        throw this.input.error("Missed semicolon", o[0] === "word" ? o[3] + 1 : o[2])
    }
    colon(t) {
        let e = 0,
            s, o, i;
        for (let [a, c] of t.entries()) {
            if (s = c, o = s[0], o === "(" && (e += 1), o === ")" && (e -= 1), e === 0 && o === ":")
                if (!i) this.doubleColon(s);
                else {
                    if (i[0] === "word" && i[1] === "progid") continue;
                    return a
                }
            i = s
        }
        return !1
    }
    comment(t) {
        let e = new vQ;
        this.init(e, t[2]), e.source.end = this.getPosition(t[3] || t[2]), e.source.end.offset++;
        let s = t[1].slice(2, -2);
        if (/^\s*$/.test(s)) e.text = "", e.raws.left = s, e.raws.right = "";
        else {
            let o = s.match(/^(\s*)([^]*\S)(\s*)$/);
            e.text = o[2], e.raws.left = o[1], e.raws.right = o[3]
        }
    }
    createTokenizer() {
        this.tokenizer = wQ(this.input)
    }
    decl(t, e) {
        let s = new yQ;
        this.init(s, t[0][2]);
        let o = t[t.length - 1];
        for (o[0] === ";" && (this.semicolon = !0, t.pop()), s.source.end = this.getPosition(o[3] || o[2] || xQ(t)), s.source.end.offset++; t[0][0] !== "word";) t.length === 1 && this.unknownWord(t), s.raws.before += t.shift()[1];
        for (s.source.start = this.getPosition(t[0][2]), s.prop = ""; t.length;) {
            let u = t[0][0];
            if (u === ":" || u === "space" || u === "comment") break;
            s.prop += t.shift()[1]
        }
        s.raws.between = "";
        let i;
        for (; t.length;)
            if (i = t.shift(), i[0] === ":") {
                s.raws.between += i[1];
                break
            } else i[0] === "word" && /\w/.test(i[1]) && this.unknownWord([i]), s.raws.between += i[1];
        (s.prop[0] === "_" || s.prop[0] === "*") && (s.raws.before += s.prop[0], s.prop = s.prop.slice(1));
        let a = [],
            c;
        for (; t.length && (c = t[0][0], !(c !== "space" && c !== "comment"));) a.push(t.shift());
        this.precheckMissedSemicolon(t);
        for (let u = t.length - 1; u >= 0; u--) {
            if (i = t[u], i[1].toLowerCase() === "!important") {
                s.important = !0;
                let d = this.stringFrom(t, u);
                d = this.spacesFromEnd(t) + d, d !== " !important" && (s.raws.important = d);
                break
            } else if (i[1].toLowerCase() === "important") {
                let d = t.slice(0),
                    h = "";
                for (let p = u; p > 0; p--) {
                    let f = d[p][0];
                    if (h.trim().indexOf("!") === 0 && f !== "space") break;
                    h = d.pop()[1] + h
                }
                h.trim().indexOf("!") === 0 && (s.important = !0, s.raws.important = h, t = d)
            }
            if (i[0] !== "space" && i[0] !== "comment") break
        }
        t.some(u => u[0] !== "space" && u[0] !== "comment") && (s.raws.between += a.map(u => u[1]).join(""), a = []), this.raw(s, "value", a.concat(t), e), s.value.includes(":") && !e && this.checkMissedSemicolon(t)
    }
    doubleColon(t) {
        throw this.input.error("Double colon", {
            offset: t[2]
        }, {
            offset: t[2] + t[1].length
        })
    }
    emptyRule(t) {
        let e = new Va;
        this.init(e, t[2]), e.selector = "", e.raws.between = "", this.current = e
    }
    end(t) {
        this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(t[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(t)
    }
    endFile() {
        this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position())
    }
    freeSemicolon(t) {
        if (this.spaces += t[1], this.current.nodes) {
            let e = this.current.nodes[this.current.nodes.length - 1];
            e && e.type === "rule" && !e.raws.ownSemicolon && (e.raws.ownSemicolon = this.spaces, this.spaces = "")
        }
    }
    getPosition(t) {
        let e = this.input.fromOffset(t);
        return {
            column: e.col,
            line: e.line,
            offset: t
        }
    }
    init(t, e) {
        this.current.push(t), t.source = {
            input: this.input,
            start: this.getPosition(e)
        }, t.raws.before = this.spaces, this.spaces = "", t.type !== "comment" && (this.semicolon = !1)
    }
    other(t) {
        let e = !1,
            s = null,
            o = !1,
            i = null,
            a = [],
            c = t[1].startsWith("--"),
            l = [],
            u = t;
        for (; u;) {
            if (s = u[0], l.push(u), s === "(" || s === "[") i || (i = u), a.push(s === "(" ? ")" : "]");
            else if (c && o && s === "{") i || (i = u), a.push("}");
            else if (a.length === 0)
                if (s === ";")
                    if (o) {
                        this.decl(l, c);
                        return
                    } else break;
            else if (s === "{") {
                this.rule(l);
                return
            } else if (s === "}") {
                this.tokenizer.back(l.pop()), e = !0;
                break
            } else s === ":" && (o = !0);
            else s === a[a.length - 1] && (a.pop(), a.length === 0 && (i = null));
            u = this.tokenizer.nextToken()
        }
        if (this.tokenizer.endOfFile() && (e = !0), a.length > 0 && this.unclosedBracket(i), e && o) {
            if (!c)
                for (; l.length && (u = l[l.length - 1][0], !(u !== "space" && u !== "comment"));) this.tokenizer.back(l.pop());
            this.decl(l, c)
        } else this.unknownWord(l)
    }
    parse() {
        let t;
        for (; !this.tokenizer.endOfFile();) switch (t = this.tokenizer.nextToken(), t[0]) {
            case "space":
                this.spaces += t[1];
                break;
            case ";":
                this.freeSemicolon(t);
                break;
            case "}":
                this.end(t);
                break;
            case "comment":
                this.comment(t);
                break;
            case "at-word":
                this.atrule(t);
                break;
            case "{":
                this.emptyRule(t);
                break;
            default:
                this.other(t);
                break
        }
        this.endFile()
    }
    precheckMissedSemicolon() {}
    raw(t, e, s, o) {
        let i, a, c = s.length,
            l = "",
            u = !0,
            d, h;
        for (let p = 0; p < c; p += 1) i = s[p], a = i[0], a === "space" && p === c - 1 && !o ? u = !1 : a === "comment" ? (h = s[p - 1] ? s[p - 1][0] : "empty", d = s[p + 1] ? s[p + 1][0] : "empty", !za[h] && !za[d] ? l.slice(-1) === "," ? u = !1 : l += i[1] : u = !1) : l += i[1];
        if (!u) {
            let p = s.reduce((f, g) => f + g[1], "");
            t.raws[e] = {
                raw: p,
                value: l
            }
        }
        t[e] = l
    }
    rule(t) {
        t.pop();
        let e = new Va;
        this.init(e, t[0][2]), e.raws.between = this.spacesAndCommentsFromEnd(t), this.raw(e, "selector", t), this.current = e
    }
    spacesAndCommentsFromEnd(t) {
        let e, s = "";
        for (; t.length && (e = t[t.length - 1][0], !(e !== "space" && e !== "comment"));) s = t.pop()[1] + s;
        return s
    }
    spacesAndCommentsFromStart(t) {
        let e, s = "";
        for (; t.length && (e = t[0][0], !(e !== "space" && e !== "comment"));) s += t.shift()[1];
        return s
    }
    spacesFromEnd(t) {
        let e, s = "";
        for (; t.length && (e = t[t.length - 1][0], e === "space");) s = t.pop()[1] + s;
        return s
    }
    stringFrom(t, e) {
        let s = "";
        for (let o = e; o < t.length; o++) s += t[o][1];
        return t.splice(e, t.length - e), s
    }
    unclosedBlock() {
        let t = this.current.source.start;
        throw this.input.error("Unclosed block", t.line, t.column)
    }
    unclosedBracket(t) {
        throw this.input.error("Unclosed bracket", {
            offset: t[2]
        }, {
            offset: t[2] + 1
        })
    }
    unexpectedClose(t) {
        throw this.input.error("Unexpected }", {
            offset: t[2]
        }, {
            offset: t[2] + 1
        })
    }
    unknownWord(t) {
        throw this.input.error("Unknown word", {
            offset: t[0][2]
        }, {
            offset: t[0][2] + t[0][1].length
        })
    }
    unnamedAtrule(t, e) {
        throw this.input.error("At-rule without name", {
            offset: e[2]
        }, {
            offset: e[2] + e[1].length
        })
    }
};
var kQ = NQ;
let EQ = on,
    TQ = kQ,
    PQ = Fr;

function ir(n, t) {
    let e = new PQ(n, t),
        s = new TQ(e);
    try {
        s.parse()
    } catch (o) {
        throw o
    }
    return s.root
}
var ji = ir;
ir.default = ir;
EQ.registerParse(ir);
let {
    isClean: _e,
    my: AQ
} = hs, LQ = Lu, IQ = qr, OQ = on, MQ = qi, Wa = Bi, DQ = ji, RQ = ps;
const $Q = {
        atrule: "AtRule",
        comment: "Comment",
        decl: "Declaration",
        document: "Document",
        root: "Root",
        rule: "Rule"
    },
    qQ = {
        AtRule: !0,
        AtRuleExit: !0,
        Comment: !0,
        CommentExit: !0,
        Declaration: !0,
        DeclarationExit: !0,
        Document: !0,
        DocumentExit: !0,
        Once: !0,
        OnceExit: !0,
        postcssPlugin: !0,
        prepare: !0,
        Root: !0,
        RootExit: !0,
        Rule: !0,
        RuleExit: !0
    },
    BQ = {
        Once: !0,
        postcssPlugin: !0,
        prepare: !0
    },
    Nn = 0;

function Un(n) {
    return typeof n == "object" && typeof n.then == "function"
}

function Ku(n) {
    let t = !1,
        e = $Q[n.type];
    return n.type === "decl" ? t = n.prop.toLowerCase() : n.type === "atrule" && (t = n.name.toLowerCase()), t && n.append ? [e, e + "-" + t, Nn, e + "Exit", e + "Exit-" + t] : t ? [e, e + "-" + t, e + "Exit", e + "Exit-" + t] : n.append ? [e, Nn, e + "Exit"] : [e, e + "Exit"]
}

function Ga(n) {
    let t;
    return n.type === "document" ? t = ["Document", Nn, "DocumentExit"] : n.type === "root" ? t = ["Root", Nn, "RootExit"] : t = Ku(n), {
        eventIndex: 0,
        events: t,
        iterator: 0,
        node: n,
        visitorIndex: 0,
        visitors: []
    }
}

function $o(n) {
    return n[_e] = !1, n.nodes && n.nodes.forEach(t => $o(t)), n
}
let qo = {},
    kn = class Xu {
        constructor(t, e, s) {
            this.stringified = !1, this.processed = !1;
            let o;
            if (typeof e == "object" && e !== null && (e.type === "root" || e.type === "document")) o = $o(e);
            else if (e instanceof Xu || e instanceof Wa) o = $o(e.root), e.map && (typeof s.map == "undefined" && (s.map = {}), s.map.inline || (s.map.inline = !1), s.map.prev = e.map);
            else {
                let i = DQ;
                s.syntax && (i = s.syntax.parse), s.parser && (i = s.parser), i.parse && (i = i.parse);
                try {
                    o = i(e, s)
                } catch (a) {
                    this.processed = !0, this.error = a
                }
                o && !o[AQ] && OQ.rebuild(o)
            }
            this.result = new Wa(t, o, s), this.helpers = V(k({}, qo), {
                postcss: qo,
                result: this.result
            }), this.plugins = this.processor.plugins.map(i => typeof i == "object" && i.prepare ? k(k({}, i), i.prepare(this.result)) : i)
        }
        async () {
            return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (t) {
            return this.async().catch(t)
        } finally(t) {
            return this.async().then(t, t)
        }
        getAsyncError() {
            throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(t, e) {
            let s = this.result.lastPlugin;
            try {
                e && e.addToError(t), this.error = t, t.name === "CssSyntaxError" && !t.plugin ? (t.plugin = s.postcssPlugin, t.setMessage()) : s.postcssVersion
            } catch (o) {
                console && console.error && console.error(o)
            }
            return t
        }
        prepareVisitors() {
            this.listeners = {};
            let t = (e, s, o) => {
                this.listeners[s] || (this.listeners[s] = []), this.listeners[s].push([e, o])
            };
            for (let e of this.plugins)
                if (typeof e == "object")
                    for (let s in e) {
                        if (!qQ[s] && /^[A-Z]/.test(s)) throw new Error(`Unknown event ${s} in ${e.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                        if (!BQ[s])
                            if (typeof e[s] == "object")
                                for (let o in e[s]) o === "*" ? t(e, s, e[s][o]) : t(e, s + "-" + o.toLowerCase(), e[s][o]);
                            else typeof e[s] == "function" && t(e, s, e[s])
                    }
            this.hasListener = Object.keys(this.listeners).length > 0
        }
        runAsync() {
            return K(this, null, function*() {
                this.plugin = 0;
                for (let t = 0; t < this.plugins.length; t++) {
                    let e = this.plugins[t],
                        s = this.runOnRoot(e);
                    if (Un(s)) try {
                        yield s
                    } catch (o) {
                        throw this.handleError(o)
                    }
                }
                if (this.prepareVisitors(), this.hasListener) {
                    let t = this.result.root;
                    for (; !t[_e];) {
                        t[_e] = !0;
                        let e = [Ga(t)];
                        for (; e.length > 0;) {
                            let s = this.visitTick(e);
                            if (Un(s)) try {
                                yield s
                            } catch (o) {
                                let i = e[e.length - 1].node;
                                throw this.handleError(o, i)
                            }
                        }
                    }
                    if (this.listeners.OnceExit)
                        for (let [e, s] of this.listeners.OnceExit) {
                            this.result.lastPlugin = e;
                            try {
                                if (t.type === "document") {
                                    let o = t.nodes.map(i => s(i, this.helpers));
                                    yield Promise.all(o)
                                } else yield s(t, this.helpers)
                            } catch (o) {
                                throw this.handleError(o)
                            }
                        }
                }
                return this.processed = !0, this.stringify()
            })
        }
        runOnRoot(t) {
            this.result.lastPlugin = t;
            try {
                if (typeof t == "object" && t.Once) {
                    if (this.result.root.type === "document") {
                        let e = this.result.root.nodes.map(s => t.Once(s, this.helpers));
                        return Un(e[0]) ? Promise.all(e) : e
                    }
                    return t.Once(this.result.root, this.helpers)
                } else if (typeof t == "function") return t(this.result.root, this.result)
            } catch (e) {
                throw this.handleError(e)
            }
        }
        stringify() {
            if (this.error) throw this.error;
            if (this.stringified) return this.result;
            this.stringified = !0, this.sync();
            let t = this.result.opts,
                e = IQ;
            t.syntax && (e = t.syntax.stringify), t.stringifier && (e = t.stringifier), e.stringify && (e = e.stringify);
            let o = new LQ(e, this.result.root, this.result.opts).generate();
            return this.result.css = o[0], this.result.map = o[1], this.result
        }
        sync() {
            if (this.error) throw this.error;
            if (this.processed) return this.result;
            if (this.processed = !0, this.processing) throw this.getAsyncError();
            for (let t of this.plugins) {
                let e = this.runOnRoot(t);
                if (Un(e)) throw this.getAsyncError()
            }
            if (this.prepareVisitors(), this.hasListener) {
                let t = this.result.root;
                for (; !t[_e];) t[_e] = !0, this.walkSync(t);
                if (this.listeners.OnceExit)
                    if (t.type === "document")
                        for (let e of t.nodes) this.visitSync(this.listeners.OnceExit, e);
                    else this.visitSync(this.listeners.OnceExit, t)
            }
            return this.result
        }
        then(t, e) {
            return this.async().then(t, e)
        }
        toString() {
            return this.css
        }
        visitSync(t, e) {
            for (let [s, o] of t) {
                this.result.lastPlugin = s;
                let i;
                try {
                    i = o(e, this.helpers)
                } catch (a) {
                    throw this.handleError(a, e.proxyOf)
                }
                if (e.type !== "root" && e.type !== "document" && !e.parent) return !0;
                if (Un(i)) throw this.getAsyncError()
            }
        }
        visitTick(t) {
            let e = t[t.length - 1],
                {
                    node: s,
                    visitors: o
                } = e;
            if (s.type !== "root" && s.type !== "document" && !s.parent) {
                t.pop();
                return
            }
            if (o.length > 0 && e.visitorIndex < o.length) {
                let [a, c] = o[e.visitorIndex];
                e.visitorIndex += 1, e.visitorIndex === o.length && (e.visitors = [], e.visitorIndex = 0), this.result.lastPlugin = a;
                try {
                    return c(s.toProxy(), this.helpers)
                } catch (l) {
                    throw this.handleError(l, s)
                }
            }
            if (e.iterator !== 0) {
                let a = e.iterator,
                    c;
                for (; c = s.nodes[s.indexes[a]];)
                    if (s.indexes[a] += 1, !c[_e]) {
                        c[_e] = !0, t.push(Ga(c));
                        return
                    }
                e.iterator = 0, delete s.indexes[a]
            }
            let i = e.events;
            for (; e.eventIndex < i.length;) {
                let a = i[e.eventIndex];
                if (e.eventIndex += 1, a === Nn) {
                    s.nodes && s.nodes.length && (s[_e] = !0, e.iterator = s.getIterator());
                    return
                } else if (this.listeners[a]) {
                    e.visitors = this.listeners[a];
                    return
                }
            }
            t.pop()
        }
        walkSync(t) {
            t[_e] = !0;
            let e = Ku(t);
            for (let s of e)
                if (s === Nn) t.nodes && t.each(o => {
                    o[_e] || this.walkSync(o)
                });
                else {
                    let o = this.listeners[s];
                    if (o && this.visitSync(o, t.toProxy())) return
                }
        }
        warnings() {
            return this.sync().warnings()
        }
        get content() {
            return this.stringify().content
        }
        get css() {
            return this.stringify().css
        }
        get map() {
            return this.stringify().map
        }
        get messages() {
            return this.sync().messages
        }
        get opts() {
            return this.result.opts
        }
        get processor() {
            return this.result.processor
        }
        get root() {
            return this.sync().root
        }
        get[Symbol.toStringTag]() {
            return "LazyResult"
        }
    };
kn.registerPostcss = n => {
    qo = n
};
var Qu = kn;
kn.default = kn;
RQ.registerLazyResult(kn);
MQ.registerLazyResult(kn);
let UQ = Lu,
    FQ = qr,
    jQ = ji;
const HQ = Bi;
let Bo = class {
    constructor(t, e, s) {
        e = e.toString(), this.stringified = !1, this._processor = t, this._css = e, this._opts = s, this._map = void 0;
        let o, i = FQ;
        this.result = new HQ(this._processor, o, this._opts), this.result.css = e;
        let a = this;
        Object.defineProperty(this.result, "root", {
            get() {
                return a.root
            }
        });
        let c = new UQ(i, o, this._opts, e);
        if (c.isMap()) {
            let [l, u] = c.generate();
            l && (this.result.css = l), u && (this.result.map = u)
        } else c.clearAnnotation(), this.result.css = c.css
    }
    async () {
        return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
    } catch (t) {
        return this.async().catch(t)
    } finally(t) {
        return this.async().then(t, t)
    }
    sync() {
        if (this.error) throw this.error;
        return this.result
    }
    then(t, e) {
        return this.async().then(t, e)
    }
    toString() {
        return this._css
    }
    warnings() {
        return []
    }
    get content() {
        return this.result.css
    }
    get css() {
        return this.result.css
    }
    get map() {
        return this.result.map
    }
    get messages() {
        return []
    }
    get opts() {
        return this.result.opts
    }
    get processor() {
        return this.result.processor
    }
    get root() {
        if (this._root) return this._root;
        let t, e = jQ;
        try {
            t = e(this._css, this._opts)
        } catch (s) {
            this.error = s
        }
        if (this.error) throw this.error;
        return this._root = t, t
    }
    get[Symbol.toStringTag]() {
        return "NoWorkResult"
    }
};
var VQ = Bo;
Bo.default = Bo;
let zQ = VQ,
    WQ = Qu,
    GQ = qi,
    JQ = ps,
    es = class {
        constructor(t = []) {
            this.version = "8.4.33", this.plugins = this.normalize(t)
        }
        normalize(t) {
            let e = [];
            for (let s of t)
                if (s.postcss === !0 ? s = s() : s.postcss && (s = s.postcss), typeof s == "object" && Array.isArray(s.plugins)) e = e.concat(s.plugins);
                else if (typeof s == "object" && s.postcssPlugin) e.push(s);
            else if (typeof s == "function") e.push(s);
            else if (!(typeof s == "object" && (s.parse || s.stringify))) throw new Error(s + " is not a PostCSS plugin");
            return e
        }
        process(t, e = {}) {
            return !this.plugins.length && !e.parser && !e.stringifier && !e.syntax ? new zQ(this, t, e) : new WQ(this, t, e)
        }
        use(t) {
            return this.plugins = this.plugins.concat(this.normalize([t])), this
        }
    };
var YQ = es;
es.default = es;
JQ.registerProcessor(es);
GQ.registerProcessor(es);
let KQ = Ur,
    XQ = ku,
    QQ = jr,
    ZQ = Ui,
    tZ = Fr,
    eZ = ps,
    nZ = Fi;

function ns(n, t) {
    if (Array.isArray(n)) return n.map(a => ns(a));
    let o = n,
        {
            inputs: e
        } = o,
        s = te(o, ["inputs"]);
    if (e) {
        t = [];
        for (let a of e) {
            let c = V(k({}, a), {
                __proto__: tZ.prototype
            });
            c.map && (c.map = V(k({}, c.map), {
                __proto__: XQ.prototype
            })), t.push(c)
        }
    }
    if (s.nodes && (s.nodes = n.nodes.map(a => ns(a, t))), s.source) {
        let i = s.source,
            {
                inputId: a
            } = i,
            c = te(i, ["inputId"]);
        s.source = c, a != null && (s.source.input = t[a])
    }
    if (s.type === "root") return new eZ(s);
    if (s.type === "decl") return new KQ(s);
    if (s.type === "rule") return new nZ(s);
    if (s.type === "comment") return new QQ(s);
    if (s.type === "atrule") return new ZQ(s);
    throw new Error("Unknown node type: " + n.type)
}
var sZ = ns;
ns.default = ns;
let rZ = Di,
    Zu = Ur,
    oZ = Qu,
    iZ = on,
    Hi = YQ,
    aZ = qr,
    cZ = sZ,
    td = qi,
    lZ = Hu,
    ed = jr,
    nd = Ui,
    uZ = Bi,
    dZ = Fr,
    hZ = ji,
    pZ = Ju,
    sd = Fi,
    rd = ps,
    fZ = Br;

function vt(...n) {
    return n.length === 1 && Array.isArray(n[0]) && (n = n[0]), new Hi(n)
}
vt.plugin = function(t, e) {
    let s = !1;

    function o(...a) {
        console && console.warn && !s && (s = !0, console.warn(t + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`), {}.LANG && {}.LANG.startsWith("cn") && console.warn(t + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`));
        let c = e(...a);
        return c.postcssPlugin = t, c.postcssVersion = new Hi().version, c
    }
    let i;
    return Object.defineProperty(o, "postcss", {
        get() {
            return i || (i = o()), i
        }
    }), o.process = function(a, c, l) {
        return vt([o(l)]).process(a, c)
    }, o
};
vt.stringify = aZ;
vt.parse = hZ;
vt.fromJSON = cZ;
vt.list = pZ;
vt.comment = n => new ed(n);
vt.atRule = n => new nd(n);
vt.decl = n => new Zu(n);
vt.rule = n => new sd(n);
vt.root = n => new rd(n);
vt.document = n => new td(n);
vt.CssSyntaxError = rZ;
vt.Declaration = Zu;
vt.Container = iZ;
vt.Processor = Hi;
vt.Document = td;
vt.Comment = ed;
vt.Warning = lZ;
vt.AtRule = nd;
vt.Result = uZ;
vt.Input = dZ;
vt.Rule = sd;
vt.Root = rd;
vt.Node = fZ;
oZ.registerPostcss(vt);
var mZ = vt;
vt.default = vt;
var Dn = {},
    ar = {
        exports: {}
    }; /*! https://mths.be/punycode v1.4.1 by @mathias */
ar.exports;
(function(n, t) {
    (function(e) {
        var s = t && !t.nodeType && t,
            o = n && !n.nodeType && n,
            i = typeof Q == "object" && Q;
        (i.global === i || i.window === i || i.self === i) && (e = i);
        var a, c = 2147483647,
            l = 36,
            u = 1,
            d = 26,
            h = 38,
            p = 700,
            f = 72,
            g = 128,
            m = "-",
            _ = /^xn--/,
            y = /[^\x20-\x7E]/,
            b = /[\x2E\u3002\uFF0E\uFF61]/g,
            S = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
            },
            x = l - u,
            w = Math.floor,
            P = String.fromCharCode,
            A;

        function M(L) {
            throw new RangeError(S[L])
        }

        function O(L, E) {
            for (var U = L.length, z = []; U--;) z[U] = E(L[U]);
            return z
        }

        function T(L, E) {
            var U = L.split("@"),
                z = "";
            U.length > 1 && (z = U[0] + "@", L = U[1]), L = L.replace(b, ".");
            var et = L.split("."),
                Z = O(et, E).join(".");
            return z + Z
        }

        function v(L) {
            for (var E = [], U = 0, z = L.length, et, Z; U < z;) et = L.charCodeAt(U++), et >= 55296 && et <= 56319 && U < z ? (Z = L.charCodeAt(U++), (Z & 64512) == 56320 ? E.push(((et & 1023) << 10) + (Z & 1023) + 65536) : (E.push(et), U--)) : E.push(et);
            return E
        }

        function C(L) {
            return O(L, function(E) {
                var U = "";
                return E > 65535 && (E -= 65536, U += P(E >>> 10 & 1023 | 55296), E = 56320 | E & 1023), U += P(E), U
            }).join("")
        }

        function N(L) {
            return L - 48 < 10 ? L - 22 : L - 65 < 26 ? L - 65 : L - 97 < 26 ? L - 97 : l
        }

        function R(L, E) {
            return L + 22 + 75 * (L < 26) - ((E != 0) << 5)
        }

        function J(L, E, U) {
            var z = 0;
            for (L = U ? w(L / p) : L >> 1, L += w(L / E); L > x * d >> 1; z += l) L = w(L / x);
            return w(z + (x + 1) * L / (L + h))
        }

        function j(L) {
            var E = [],
                U = L.length,
                z, et = 0,
                Z = g,
                tt = f,
                ut, H, rt, ct, F, pt, wt, nt, st;
            for (ut = L.lastIndexOf(m), ut < 0 && (ut = 0), H = 0; H < ut; ++H) L.charCodeAt(H) >= 128 && M("not-basic"), E.push(L.charCodeAt(H));
            for (rt = ut > 0 ? ut + 1 : 0; rt < U;) {
                for (ct = et, F = 1, pt = l; rt >= U && M("invalid-input"), wt = N(L.charCodeAt(rt++)), (wt >= l || wt > w((c - et) / F)) && M("overflow"), et += wt * F, nt = pt <= tt ? u : pt >= tt + d ? d : pt - tt, !(wt < nt); pt += l) st = l - nt, F > w(c / st) && M("overflow"), F *= st;
                z = E.length + 1, tt = J(et - ct, z, ct == 0), w(et / z) > c - Z && M("overflow"), Z += w(et / z), et %= z, E.splice(et++, 0, Z)
            }
            return C(E)
        }

        function q(L) {
            var E, U, z, et, Z, tt, ut, H, rt, ct, F, pt = [],
                wt, nt, st, ft;
            for (L = v(L), wt = L.length, E = g, U = 0, Z = f, tt = 0; tt < wt; ++tt) F = L[tt], F < 128 && pt.push(P(F));
            for (z = et = pt.length, et && pt.push(m); z < wt;) {
                for (ut = c, tt = 0; tt < wt; ++tt) F = L[tt], F >= E && F < ut && (ut = F);
                for (nt = z + 1, ut - E > w((c - U) / nt) && M("overflow"), U += (ut - E) * nt, E = ut, tt = 0; tt < wt; ++tt)
                    if (F = L[tt], F < E && ++U > c && M("overflow"), F == E) {
                        for (H = U, rt = l; ct = rt <= Z ? u : rt >= Z + d ? d : rt - Z, !(H < ct); rt += l) ft = H - ct, st = l - ct, pt.push(P(R(ct + ft % st, 0))), H = w(ft / st);
                        pt.push(P(R(H, 0))), Z = J(U, nt, z == et), U = 0, ++z
                    }++U, ++E
            }
            return pt.join("")
        }

        function B(L) {
            return T(L, function(E) {
                return _.test(E) ? j(E.slice(4).toLowerCase()) : E
            })
        }

        function Y(L) {
            return T(L, function(E) {
                return y.test(E) ? "xn--" + q(E) : E
            })
        }
        if (a = {
                version: "1.4.1",
                ucs2: {
                    decode: v,
                    encode: C
                },
                decode: j,
                encode: q,
                toASCII: Y,
                toUnicode: B
            }, s && o)
            if (n.exports == s) o.exports = a;
            else
                for (A in a) a.hasOwnProperty(A) && (s[A] = a[A]);
        else e.punycode = a
    })(Q)
})(ar, ar.exports);
var gZ = ar.exports,
    bZ = String.prototype.replace,
    _Z = /%20/g,
    no = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    Vi = {
        default: no.RFC3986,
        formatters: {
            RFC1738: function(n) {
                return bZ.call(n, _Z, "+")
            },
            RFC3986: function(n) {
                return String(n)
            }
        },
        RFC1738: no.RFC1738,
        RFC3986: no.RFC3986
    },
    yZ = Vi,
    so = Object.prototype.hasOwnProperty,
    We = Array.isArray,
    ge = function() {
        for (var n = [], t = 0; t < 256; ++t) n.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return n
    }(),
    wZ = function(t) {
        for (; t.length > 1;) {
            var e = t.pop(),
                s = e.obj[e.prop];
            if (We(s)) {
                for (var o = [], i = 0; i < s.length; ++i) typeof s[i] != "undefined" && o.push(s[i]);
                e.obj[e.prop] = o
            }
        }
    },
    od = function(t, e) {
        for (var s = e && e.plainObjects ? Object.create(null) : {}, o = 0; o < t.length; ++o) typeof t[o] != "undefined" && (s[o] = t[o]);
        return s
    },
    vZ = function n(t, e, s) {
        if (!e) return t;
        if (typeof e != "object") {
            if (We(t)) t.push(e);
            else if (t && typeof t == "object")(s && (s.plainObjects || s.allowPrototypes) || !so.call(Object.prototype, e)) && (t[e] = !0);
            else return [t, e];
            return t
        }
        if (!t || typeof t != "object") return [t].concat(e);
        var o = t;
        return We(t) && !We(e) && (o = od(t, s)), We(t) && We(e) ? (e.forEach(function(i, a) {
            if (so.call(t, a)) {
                var c = t[a];
                c && typeof c == "object" && i && typeof i == "object" ? t[a] = n(c, i, s) : t.push(i)
            } else t[a] = i
        }), t) : Object.keys(e).reduce(function(i, a) {
            var c = e[a];
            return so.call(i, a) ? i[a] = n(i[a], c, s) : i[a] = c, i
        }, o)
    },
    SZ = function(t, e) {
        return Object.keys(e).reduce(function(s, o) {
            return s[o] = e[o], s
        }, t)
    },
    CZ = function(n, t, e) {
        var s = n.replace(/\+/g, " ");
        if (e === "iso-8859-1") return s.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(s)
        } catch (o) {
            return s
        }
    },
    xZ = function(t, e, s, o, i) {
        if (t.length === 0) return t;
        var a = t;
        if (typeof t == "symbol" ? a = Symbol.prototype.toString.call(t) : typeof t != "string" && (a = String(t)), s === "iso-8859-1") return escape(a).replace(/%u[0-9a-f]{4}/gi, function(d) {
            return "%26%23" + parseInt(d.slice(2), 16) + "%3B"
        });
        for (var c = "", l = 0; l < a.length; ++l) {
            var u = a.charCodeAt(l);
            if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || i === yZ.RFC1738 && (u === 40 || u === 41)) {
                c += a.charAt(l);
                continue
            }
            if (u < 128) {
                c = c + ge[u];
                continue
            }
            if (u < 2048) {
                c = c + (ge[192 | u >> 6] + ge[128 | u & 63]);
                continue
            }
            if (u < 55296 || u >= 57344) {
                c = c + (ge[224 | u >> 12] + ge[128 | u >> 6 & 63] + ge[128 | u & 63]);
                continue
            }
            l += 1, u = 65536 + ((u & 1023) << 10 | a.charCodeAt(l) & 1023), c += ge[240 | u >> 18] + ge[128 | u >> 12 & 63] + ge[128 | u >> 6 & 63] + ge[128 | u & 63]
        }
        return c
    },
    NZ = function(t) {
        for (var e = [{
                obj: {
                    o: t
                },
                prop: "o"
            }], s = [], o = 0; o < e.length; ++o)
            for (var i = e[o], a = i.obj[i.prop], c = Object.keys(a), l = 0; l < c.length; ++l) {
                var u = c[l],
                    d = a[u];
                typeof d == "object" && d !== null && s.indexOf(d) === -1 && (e.push({
                    obj: a,
                    prop: u
                }), s.push(d))
            }
        return wZ(e), t
    },
    kZ = function(t) {
        return Object.prototype.toString.call(t) === "[object RegExp]"
    },
    EZ = function(t) {
        return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
    },
    TZ = function(t, e) {
        return [].concat(t, e)
    },
    PZ = function(t, e) {
        if (We(t)) {
            for (var s = [], o = 0; o < t.length; o += 1) s.push(e(t[o]));
            return s
        }
        return e(t)
    },
    id = {
        arrayToObject: od,
        assign: SZ,
        combine: TZ,
        compact: NZ,
        decode: CZ,
        encode: xZ,
        isBuffer: EZ,
        isRegExp: kZ,
        maybeMap: PZ,
        merge: vZ
    },
    ad = Kh,
    Hs = id,
    Vn = Vi,
    AZ = Object.prototype.hasOwnProperty,
    Ja = {
        brackets: function(t) {
            return t + "[]"
        },
        comma: "comma",
        indices: function(t, e) {
            return t + "[" + e + "]"
        },
        repeat: function(t) {
            return t
        }
    },
    Te = Array.isArray,
    LZ = Array.prototype.push,
    cd = function(n, t) {
        LZ.apply(n, Te(t) ? t : [t])
    },
    IZ = Date.prototype.toISOString,
    Ya = Vn.default,
    Ut = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Hs.encode,
        encodeValuesOnly: !1,
        format: Ya,
        formatter: Vn.formatters[Ya],
        indices: !1,
        serializeDate: function(t) {
            return IZ.call(t)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    OZ = function(t) {
        return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
    },
    ro = {},
    MZ = function n(t, e, s, o, i, a, c, l, u, d, h, p, f, g, m, _) {
        for (var y = t, b = _, S = 0, x = !1;
            (b = b.get(ro)) !== void 0 && !x;) {
            var w = b.get(t);
            if (S += 1, typeof w != "undefined") {
                if (w === S) throw new RangeError("Cyclic object value");
                x = !0
            }
            typeof b.get(ro) == "undefined" && (S = 0)
        }
        if (typeof l == "function" ? y = l(e, y) : y instanceof Date ? y = h(y) : s === "comma" && Te(y) && (y = Hs.maybeMap(y, function(j) {
                return j instanceof Date ? h(j) : j
            })), y === null) {
            if (i) return c && !g ? c(e, Ut.encoder, m, "key", p) : e;
            y = ""
        }
        if (OZ(y) || Hs.isBuffer(y)) {
            if (c) {
                var P = g ? e : c(e, Ut.encoder, m, "key", p);
                return [f(P) + "=" + f(c(y, Ut.encoder, m, "value", p))]
            }
            return [f(e) + "=" + f(String(y))]
        }
        var A = [];
        if (typeof y == "undefined") return A;
        var M;
        if (s === "comma" && Te(y)) g && c && (y = Hs.maybeMap(y, c)), M = [{
            value: y.length > 0 ? y.join(",") || null : void 0
        }];
        else if (Te(l)) M = l;
        else {
            var O = Object.keys(y);
            M = u ? O.sort(u) : O
        }
        for (var T = o && Te(y) && y.length === 1 ? e + "[]" : e, v = 0; v < M.length; ++v) {
            var C = M[v],
                N = typeof C == "object" && typeof C.value != "undefined" ? C.value : y[C];
            if (!(a && N === null)) {
                var R = Te(y) ? typeof s == "function" ? s(T, C) : T : T + (d ? "." + C : "[" + C + "]");
                _.set(t, S);
                var J = ad();
                J.set(ro, _), cd(A, n(N, R, s, o, i, a, s === "comma" && g && Te(y) ? null : c, l, u, d, h, p, f, g, m, J))
            }
        }
        return A
    },
    DZ = function(t) {
        if (!t) return Ut;
        if (t.encoder !== null && typeof t.encoder != "undefined" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var e = t.charset || Ut.charset;
        if (typeof t.charset != "undefined" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var s = Vn.default;
        if (typeof t.format != "undefined") {
            if (!AZ.call(Vn.formatters, t.format)) throw new TypeError("Unknown format option provided.");
            s = t.format
        }
        var o = Vn.formatters[s],
            i = Ut.filter;
        return (typeof t.filter == "function" || Te(t.filter)) && (i = t.filter), {
            addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : Ut.addQueryPrefix,
            allowDots: typeof t.allowDots == "undefined" ? Ut.allowDots : !!t.allowDots,
            charset: e,
            charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Ut.charsetSentinel,
            delimiter: typeof t.delimiter == "undefined" ? Ut.delimiter : t.delimiter,
            encode: typeof t.encode == "boolean" ? t.encode : Ut.encode,
            encoder: typeof t.encoder == "function" ? t.encoder : Ut.encoder,
            encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : Ut.encodeValuesOnly,
            filter: i,
            format: s,
            formatter: o,
            serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : Ut.serializeDate,
            skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : Ut.skipNulls,
            sort: typeof t.sort == "function" ? t.sort : null,
            strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Ut.strictNullHandling
        }
    },
    RZ = function(n, t) {
        var e = n,
            s = DZ(t),
            o, i;
        typeof s.filter == "function" ? (i = s.filter, e = i("", e)) : Te(s.filter) && (i = s.filter, o = i);
        var a = [];
        if (typeof e != "object" || e === null) return "";
        var c;
        t && t.arrayFormat in Ja ? c = t.arrayFormat : t && "indices" in t ? c = t.indices ? "indices" : "repeat" : c = "indices";
        var l = Ja[c];
        if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var u = l === "comma" && t && t.commaRoundTrip;
        o || (o = Object.keys(e)), s.sort && o.sort(s.sort);
        for (var d = ad(), h = 0; h < o.length; ++h) {
            var p = o[h];
            s.skipNulls && e[p] === null || cd(a, MZ(e[p], p, l, u, s.strictNullHandling, s.skipNulls, s.encode ? s.encoder : null, s.filter, s.sort, s.allowDots, s.serializeDate, s.format, s.formatter, s.encodeValuesOnly, s.charset, d))
        }
        var f = a.join(s.delimiter),
            g = s.addQueryPrefix === !0 ? "?" : "";
        return s.charsetSentinel && (s.charset === "iso-8859-1" ? g += "utf8=%26%2310003%3B&" : g += "utf8=%E2%9C%93&"), f.length > 0 ? g + f : ""
    },
    En = id,
    Uo = Object.prototype.hasOwnProperty,
    $Z = Array.isArray,
    Rt = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: En.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    qZ = function(n) {
        return n.replace(/&#(\d+);/g, function(t, e) {
            return String.fromCharCode(parseInt(e, 10))
        })
    },
    ld = function(n, t) {
        return n && typeof n == "string" && t.comma && n.indexOf(",") > -1 ? n.split(",") : n
    },
    BZ = "utf8=%26%2310003%3B",
    UZ = "utf8=%E2%9C%93",
    FZ = function(t, e) {
        var s = {
                __proto__: null
            },
            o = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
            i = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit,
            a = o.split(e.delimiter, i),
            c = -1,
            l, u = e.charset;
        if (e.charsetSentinel)
            for (l = 0; l < a.length; ++l) a[l].indexOf("utf8=") === 0 && (a[l] === UZ ? u = "utf-8" : a[l] === BZ && (u = "iso-8859-1"), c = l, l = a.length);
        for (l = 0; l < a.length; ++l)
            if (l !== c) {
                var d = a[l],
                    h = d.indexOf("]="),
                    p = h === -1 ? d.indexOf("=") : h + 1,
                    f, g;
                p === -1 ? (f = e.decoder(d, Rt.decoder, u, "key"), g = e.strictNullHandling ? null : "") : (f = e.decoder(d.slice(0, p), Rt.decoder, u, "key"), g = En.maybeMap(ld(d.slice(p + 1), e), function(m) {
                    return e.decoder(m, Rt.decoder, u, "value")
                })), g && e.interpretNumericEntities && u === "iso-8859-1" && (g = qZ(g)), d.indexOf("[]=") > -1 && (g = $Z(g) ? [g] : g), Uo.call(s, f) ? s[f] = En.combine(s[f], g) : s[f] = g
            }
        return s
    },
    jZ = function(n, t, e, s) {
        for (var o = s ? t : ld(t, e), i = n.length - 1; i >= 0; --i) {
            var a, c = n[i];
            if (c === "[]" && e.parseArrays) a = [].concat(o);
            else {
                a = e.plainObjects ? Object.create(null) : {};
                var l = c.charAt(0) === "[" && c.charAt(c.length - 1) === "]" ? c.slice(1, -1) : c,
                    u = parseInt(l, 10);
                !e.parseArrays && l === "" ? a = {
                    0: o
                } : !isNaN(u) && c !== l && String(u) === l && u >= 0 && e.parseArrays && u <= e.arrayLimit ? (a = [], a[u] = o) : l !== "__proto__" && (a[l] = o)
            }
            o = a
        }
        return o
    },
    HZ = function(t, e, s, o) {
        if (t) {
            var i = s.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                a = /(\[[^[\]]*])/,
                c = /(\[[^[\]]*])/g,
                l = s.depth > 0 && a.exec(i),
                u = l ? i.slice(0, l.index) : i,
                d = [];
            if (u) {
                if (!s.plainObjects && Uo.call(Object.prototype, u) && !s.allowPrototypes) return;
                d.push(u)
            }
            for (var h = 0; s.depth > 0 && (l = c.exec(i)) !== null && h < s.depth;) {
                if (h += 1, !s.plainObjects && Uo.call(Object.prototype, l[1].slice(1, -1)) && !s.allowPrototypes) return;
                d.push(l[1])
            }
            return l && d.push("[" + i.slice(l.index) + "]"), jZ(d, e, s, o)
        }
    },
    VZ = function(t) {
        if (!t) return Rt;
        if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function") throw new TypeError("Decoder has to be a function.");
        if (typeof t.charset != "undefined" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var e = typeof t.charset == "undefined" ? Rt.charset : t.charset;
        return {
            allowDots: typeof t.allowDots == "undefined" ? Rt.allowDots : !!t.allowDots,
            allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : Rt.allowPrototypes,
            allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : Rt.allowSparse,
            arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : Rt.arrayLimit,
            charset: e,
            charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Rt.charsetSentinel,
            comma: typeof t.comma == "boolean" ? t.comma : Rt.comma,
            decoder: typeof t.decoder == "function" ? t.decoder : Rt.decoder,
            delimiter: typeof t.delimiter == "string" || En.isRegExp(t.delimiter) ? t.delimiter : Rt.delimiter,
            depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : Rt.depth,
            ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : Rt.interpretNumericEntities,
            parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : Rt.parameterLimit,
            parseArrays: t.parseArrays !== !1,
            plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : Rt.plainObjects,
            strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Rt.strictNullHandling
        }
    },
    zZ = function(n, t) {
        var e = VZ(t);
        if (n === "" || n === null || typeof n == "undefined") return e.plainObjects ? Object.create(null) : {};
        for (var s = typeof n == "string" ? FZ(n, e) : n, o = e.plainObjects ? Object.create(null) : {}, i = Object.keys(s), a = 0; a < i.length; ++a) {
            var c = i[a],
                l = HZ(c, s[c], e, typeof n == "string");
            o = En.merge(o, l, e)
        }
        return e.allowSparse === !0 ? o : En.compact(o)
    },
    WZ = RZ,
    GZ = zZ,
    JZ = Vi,
    YZ = {
        formats: JZ,
        parse: GZ,
        stringify: WZ
    },
    KZ = gZ;

function le() {
    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
}
var XZ = /^([a-z0-9.+-]+:)/i,
    QZ = /:[0-9]*$/,
    ZZ = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
    ttt = ["<", ">", '"', "`", " ", "\r", `
`, "	"],
    ett = ["{", "}", "|", "\\", "^", "`"].concat(ttt),
    Fo = ["'"].concat(ett),
    Ka = ["%", "/", "?", ";", "#"].concat(Fo),
    Xa = ["/", "?", "#"],
    ntt = 255,
    Qa = /^[+a-z0-9A-Z_-]{0,63}$/,
    stt = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    rtt = {
        javascript: !0,
        "javascript:": !0
    },
    jo = {
        javascript: !0,
        "javascript:": !0
    },
    bn = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
    },
    Ho = YZ;

function fs(n, t, e) {
    if (n && typeof n == "object" && n instanceof le) return n;
    var s = new le;
    return s.parse(n, t, e), s
}
le.prototype.parse = function(n, t, e) {
    if (typeof n != "string") throw new TypeError("Parameter 'url' must be a string, not " + typeof n);
    var s = n.indexOf("?"),
        o = s !== -1 && s < n.indexOf("#") ? "?" : "#",
        i = n.split(o),
        a = /\\/g;
    i[0] = i[0].replace(a, "/"), n = i.join(o);
    var c = n;
    if (c = c.trim(), !e && n.split("#").length === 1) {
        var l = ZZ.exec(c);
        if (l) return this.path = c, this.href = c, this.pathname = l[1], l[2] ? (this.search = l[2], t ? this.query = Ho.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this
    }
    var u = XZ.exec(c);
    if (u) {
        u = u[0];
        var d = u.toLowerCase();
        this.protocol = d, c = c.substr(u.length)
    }
    if (e || u || c.match(/^\/\/[^@/]+@[^@/]+/)) {
        var h = c.substr(0, 2) === "//";
        h && !(u && jo[u]) && (c = c.substr(2), this.slashes = !0)
    }
    if (!jo[u] && (h || u && !bn[u])) {
        for (var p = -1, f = 0; f < Xa.length; f++) {
            var g = c.indexOf(Xa[f]);
            g !== -1 && (p === -1 || g < p) && (p = g)
        }
        var m, _;
        p === -1 ? _ = c.lastIndexOf("@") : _ = c.lastIndexOf("@", p), _ !== -1 && (m = c.slice(0, _), c = c.slice(_ + 1), this.auth = decodeURIComponent(m)), p = -1;
        for (var f = 0; f < Ka.length; f++) {
            var g = c.indexOf(Ka[f]);
            g !== -1 && (p === -1 || g < p) && (p = g)
        }
        p === -1 && (p = c.length), this.host = c.slice(0, p), c = c.slice(p), this.parseHost(), this.hostname = this.hostname || "";
        var y = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
        if (!y)
            for (var b = this.hostname.split(/\./), f = 0, S = b.length; f < S; f++) {
                var x = b[f];
                if (x && !x.match(Qa)) {
                    for (var w = "", P = 0, A = x.length; P < A; P++) x.charCodeAt(P) > 127 ? w += "x" : w += x[P];
                    if (!w.match(Qa)) {
                        var M = b.slice(0, f),
                            O = b.slice(f + 1),
                            T = x.match(stt);
                        T && (M.push(T[1]), O.unshift(T[2])), O.length && (c = "/" + O.join(".") + c), this.hostname = M.join(".");
                        break
                    }
                }
            }
        this.hostname.length > ntt ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), y || (this.hostname = KZ.toASCII(this.hostname));
        var v = this.port ? ":" + this.port : "",
            C = this.hostname || "";
        this.host = C + v, this.href += this.host, y && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), c[0] !== "/" && (c = "/" + c))
    }
    if (!rtt[d])
        for (var f = 0, S = Fo.length; f < S; f++) {
            var N = Fo[f];
            if (c.indexOf(N) !== -1) {
                var R = encodeURIComponent(N);
                R === N && (R = escape(N)), c = c.split(N).join(R)
            }
        }
    var J = c.indexOf("#");
    J !== -1 && (this.hash = c.substr(J), c = c.slice(0, J));
    var j = c.indexOf("?");
    if (j !== -1 ? (this.search = c.substr(j), this.query = c.substr(j + 1), t && (this.query = Ho.parse(this.query)), c = c.slice(0, j)) : t && (this.search = "", this.query = {}), c && (this.pathname = c), bn[d] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
        var v = this.pathname || "",
            q = this.search || "";
        this.path = v + q
    }
    return this.href = this.format(), this
};

function ott(n) {
    return typeof n == "string" && (n = fs(n)), n instanceof le ? n.format() : le.prototype.format.call(n)
}
le.prototype.format = function() {
    var n = this.auth || "";
    n && (n = encodeURIComponent(n), n = n.replace(/%3A/i, ":"), n += "@");
    var t = this.protocol || "",
        e = this.pathname || "",
        s = this.hash || "",
        o = !1,
        i = "";
    this.host ? o = n + this.host : this.hostname && (o = n + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && typeof this.query == "object" && Object.keys(this.query).length && (i = Ho.stringify(this.query, {
        arrayFormat: "repeat",
        addQueryPrefix: !1
    }));
    var a = this.search || i && "?" + i || "";
    return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || bn[t]) && o !== !1 ? (o = "//" + (o || ""), e && e.charAt(0) !== "/" && (e = "/" + e)) : o || (o = ""), s && s.charAt(0) !== "#" && (s = "#" + s), a && a.charAt(0) !== "?" && (a = "?" + a), e = e.replace(/[?#]/g, function(c) {
        return encodeURIComponent(c)
    }), a = a.replace("#", "%23"), t + o + e + a + s
};

function itt(n, t) {
    return fs(n, !1, !0).resolve(t)
}
le.prototype.resolve = function(n) {
    return this.resolveObject(fs(n, !1, !0)).format()
};

function att(n, t) {
    return n ? fs(n, !1, !0).resolveObject(t) : t
}
le.prototype.resolveObject = function(n) {
    if (typeof n == "string") {
        var t = new le;
        t.parse(n, !1, !0), n = t
    }
    for (var e = new le, s = Object.keys(this), o = 0; o < s.length; o++) {
        var i = s[o];
        e[i] = this[i]
    }
    if (e.hash = n.hash, n.href === "") return e.href = e.format(), e;
    if (n.slashes && !n.protocol) {
        for (var a = Object.keys(n), c = 0; c < a.length; c++) {
            var l = a[c];
            l !== "protocol" && (e[l] = n[l])
        }
        return bn[e.protocol] && e.hostname && !e.pathname && (e.pathname = "/", e.path = e.pathname), e.href = e.format(), e
    }
    if (n.protocol && n.protocol !== e.protocol) {
        if (!bn[n.protocol]) {
            for (var u = Object.keys(n), d = 0; d < u.length; d++) {
                var h = u[d];
                e[h] = n[h]
            }
            return e.href = e.format(), e
        }
        if (e.protocol = n.protocol, !n.host && !jo[n.protocol]) {
            for (var S = (n.pathname || "").split("/"); S.length && !(n.host = S.shift()););
            n.host || (n.host = ""), n.hostname || (n.hostname = ""), S[0] !== "" && S.unshift(""), S.length < 2 && S.unshift(""), e.pathname = S.join("/")
        } else e.pathname = n.pathname;
        if (e.search = n.search, e.query = n.query, e.host = n.host || "", e.auth = n.auth, e.hostname = n.hostname || n.host, e.port = n.port, e.pathname || e.search) {
            var p = e.pathname || "",
                f = e.search || "";
            e.path = p + f
        }
        return e.slashes = e.slashes || n.slashes, e.href = e.format(), e
    }
    var g = e.pathname && e.pathname.charAt(0) === "/",
        m = n.host || n.pathname && n.pathname.charAt(0) === "/",
        _ = m || g || e.host && n.pathname,
        y = _,
        b = e.pathname && e.pathname.split("/") || [],
        S = n.pathname && n.pathname.split("/") || [],
        x = e.protocol && !bn[e.protocol];
    if (x && (e.hostname = "", e.port = null, e.host && (b[0] === "" ? b[0] = e.host : b.unshift(e.host)), e.host = "", n.protocol && (n.hostname = null, n.port = null, n.host && (S[0] === "" ? S[0] = n.host : S.unshift(n.host)), n.host = null), _ = _ && (S[0] === "" || b[0] === "")), m) e.host = n.host || n.host === "" ? n.host : e.host, e.hostname = n.hostname || n.hostname === "" ? n.hostname : e.hostname, e.search = n.search, e.query = n.query, b = S;
    else if (S.length) b || (b = []), b.pop(), b = b.concat(S), e.search = n.search, e.query = n.query;
    else if (n.search != null) {
        if (x) {
            e.host = b.shift(), e.hostname = e.host;
            var w = e.host && e.host.indexOf("@") > 0 ? e.host.split("@") : !1;
            w && (e.auth = w.shift(), e.hostname = w.shift(), e.host = e.hostname)
        }
        return e.search = n.search, e.query = n.query, (e.pathname !== null || e.search !== null) && (e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "")), e.href = e.format(), e
    }
    if (!b.length) return e.pathname = null, e.search ? e.path = "/" + e.search : e.path = null, e.href = e.format(), e;
    for (var P = b.slice(-1)[0], A = (e.host || n.host || b.length > 1) && (P === "." || P === "..") || P === "", M = 0, O = b.length; O >= 0; O--) P = b[O], P === "." ? b.splice(O, 1) : P === ".." ? (b.splice(O, 1), M++) : M && (b.splice(O, 1), M--);
    if (!_ && !y)
        for (; M--; M) b.unshift("..");
    _ && b[0] !== "" && (!b[0] || b[0].charAt(0) !== "/") && b.unshift(""), A && b.join("/").substr(-1) !== "/" && b.push("");
    var T = b[0] === "" || b[0] && b[0].charAt(0) === "/";
    if (x) {
        e.hostname = T ? "" : b.length ? b.shift() : "", e.host = e.hostname;
        var w = e.host && e.host.indexOf("@") > 0 ? e.host.split("@") : !1;
        w && (e.auth = w.shift(), e.hostname = w.shift(), e.host = e.hostname)
    }
    return _ = _ || e.host && b.length, _ && !T && b.unshift(""), b.length > 0 ? e.pathname = b.join("/") : (e.pathname = null, e.path = null), (e.pathname !== null || e.search !== null) && (e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "")), e.auth = n.auth || e.auth, e.slashes = e.slashes || n.slashes, e.href = e.format(), e
};
le.prototype.parseHost = function() {
    var n = this.host,
        t = QZ.exec(n);
    t && (t = t[0], t !== ":" && (this.port = t.substr(1)), n = n.substr(0, n.length - t.length)), n && (this.hostname = n)
};
Dn.parse = fs;
Dn.resolve = itt;
Dn.resolveObject = att;
Dn.format = ott;
Dn.Url = le;
const ctt = xl,
    ltt = fX,
    {
        klona: utt
    } = wu,
    {
        isPlainObject: dtt
    } = Oi,
    Za = PX,
    htt = AX,
    {
        parse: ptt
    } = mZ,
    ftt = Dn,
    mtt = ["img", "audio", "video", "picture", "svg", "object", "map", "iframe", "embed"],
    gtt = ["script", "style"];

function jn(n, t) {
    n && Object.keys(n).forEach(function(e) {
        t(n[e], e)
    })
}

function Ee(n, t) {
    return {}.hasOwnProperty.call(n, t)
}

function tc(n, t) {
    const e = [];
    return jn(n, function(s) {
        t(s) && e.push(s)
    }), e
}

function btt(n) {
    for (const t in n)
        if (Ee(n, t)) return !1;
    return !0
}

function _tt(n) {
    return n.map(function(t) {
        if (!t.url) throw new Error("URL missing");
        return t.url + (t.w ? ` ${t.w}w` : "") + (t.h ? ` ${t.h}h` : "") + (t.d ? ` ${t.d}x` : "")
    }).join(", ")
}
var ytt = _n;
const wtt = /^[^\0\t\n\f\r /<=>]+$/;

function _n(n, t, e) {
    let s = "",
        o = "";

    function i(v, C) {
        const N = this;
        this.tag = v, this.attribs = C || {}, this.tagPosition = s.length, this.text = "", this.mediaChildren = [], this.updateParentNodeText = function() {
            if (f.length) {
                const R = f[f.length - 1];
                R.text += N.text
            }
        }, this.updateParentNodeMediaChildren = function() {
            f.length && mtt.includes(this.tag) && f[f.length - 1].mediaChildren.push(this.tag)
        }
    }
    t ? (t = Object.assign({}, _n.defaults, t), t.parser ? t.parser = Object.assign({}, oo, t.parser) : t.parser = oo) : (t = _n.defaults, t.parser = oo), gtt.forEach(function(v) {
        t.allowedTags && t.allowedTags.indexOf(v) > -1 && !t.allowVulnerableTags && console.warn(`

⚠️ Your \`allowedTags\` option includes, \`${v}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`)
    });
    const a = t.nonTextTags || ["script", "style", "textarea", "option"];
    let c, l;
    t.allowedAttributes && (c = {}, l = {}, jn(t.allowedAttributes, function(v, C) {
        c[C] = [];
        const N = [];
        v.forEach(function(R) {
            typeof R == "string" && R.indexOf("*") >= 0 ? N.push(ltt(R).replace(/\\\*/g, ".*")) : c[C].push(R)
        }), l[C] = new RegExp("^(" + N.join("|") + ")$")
    }));
    const u = {};
    jn(t.allowedClasses, function(v, C) {
        c && (Ee(c, C) || (c[C] = []), c[C].push("class")), u[C] = v
    });
    const d = {};
    let h;
    jn(t.transformTags, function(v, C) {
        let N;
        typeof v == "function" ? N = v : typeof v == "string" && (N = _n.simpleTransform(v)), C === "*" ? h = N : d[C] = N
    });
    let p, f, g, m, _, y, b = !1;
    x();
    const S = new ctt.Parser({
        onopentag: function(v, C) {
            if (t.enforceHtmlBoundary && v === "html" && x(), _) {
                y++;
                return
            }
            const N = new i(v, C);
            f.push(N);
            let R = !1;
            const J = !!N.text;
            let j;
            if (Ee(d, v) && (j = d[v](v, C), N.attribs = C = j.attribs, j.text !== void 0 && (N.innerText = j.text), v !== j.tagName && (N.name = v = j.tagName, m[p] = j.tagName)), h && (j = h(v, C), N.attribs = C = j.attribs, v !== j.tagName && (N.name = v = j.tagName, m[p] = j.tagName)), (t.allowedTags && t.allowedTags.indexOf(v) === -1 || t.disallowedTagsMode === "recursiveEscape" && !btt(g) || t.nestingLimit != null && p >= t.nestingLimit) && (R = !0, g[p] = !0, t.disallowedTagsMode === "discard" && a.indexOf(v) !== -1 && (_ = !0, y = 1), g[p] = !0), p++, R) {
                if (t.disallowedTagsMode === "discard") return;
                o = s, s = ""
            }
            s += "<" + v, (!c || Ee(c, v) || c["*"]) && jn(C, function(q, B) {
                if (!wtt.test(B)) {
                    delete N.attribs[B];
                    return
                }
                let Y, L = !1;
                if (!c || Ee(c, v) && c[v].indexOf(B) !== -1 || c["*"] && c["*"].indexOf(B) !== -1 || Ee(l, v) && l[v].test(B) || l["*"] && l["*"].test(B)) L = !0;
                else if (c && c[v]) {
                    for (const E of c[v])
                        if (dtt(E) && E.name && E.name === B) {
                            L = !0;
                            let U = "";
                            if (E.multiple === !0) {
                                const z = q.split(" ");
                                for (const et of z) E.values.indexOf(et) !== -1 && (U === "" ? U = et : U += " " + et)
                            } else E.values.indexOf(q) >= 0 && (U = q);
                            q = U
                        }
                }
                if (L) {
                    if (t.allowedSchemesAppliedToAttributes.indexOf(B) !== -1 && P(v, q)) {
                        delete N.attribs[B];
                        return
                    }
                    if (v === "iframe" && B === "src") {
                        let E = !0;
                        try {
                            if (Y = ftt.parse(q, !1, !0), Y && Y.host === null && Y.protocol === null) E = Ee(t, "allowIframeRelativeUrls") ? t.allowIframeRelativeUrls : !t.allowedIframeHostnames && !t.allowedIframeDomains;
                            else if (t.allowedIframeHostnames || t.allowedIframeDomains) {
                                const z = (t.allowedIframeHostnames || []).find(function(Z) {
                                        return Z === Y.hostname
                                    }),
                                    et = (t.allowedIframeDomains || []).find(function(Z) {
                                        return Y.hostname === Z || Y.hostname.endsWith(`.${Z}`)
                                    });
                                E = z || et
                            }
                        } catch (U) {
                            E = !1
                        }
                        if (!E) {
                            delete N.attribs[B];
                            return
                        }
                    }
                    if (B === "srcset") try {
                        if (Y = htt(q), Y.forEach(function(E) {
                                P("srcset", E.url) && (E.evil = !0)
                            }), Y = tc(Y, function(E) {
                                return !E.evil
                            }), Y.length) q = _tt(tc(Y, function(E) {
                            return !E.evil
                        })), N.attribs[B] = q;
                        else {
                            delete N.attribs[B];
                            return
                        }
                    } catch (E) {
                        delete N.attribs[B];
                        return
                    }
                    if (B === "class") {
                        const E = u[v],
                            U = u["*"];
                        if (E && U ? q = T(q, Za(E, U)) : q = T(q, E || U), !q.length) {
                            delete N.attribs[B];
                            return
                        }
                    }
                    if (B === "style") try {
                        const E = ptt(v + " {" + q + "}"),
                            U = A(E, t.allowedStyles);
                        if (q = M(U), q.length === 0) {
                            delete N.attribs[B];
                            return
                        }
                    } catch (E) {
                        delete N.attribs[B];
                        return
                    }
                    s += " " + B, q && q.length && (s += '="' + w(q, !0) + '"')
                } else delete N.attribs[B]
            }), t.selfClosing.indexOf(v) !== -1 ? s += " />" : (s += ">", N.innerText && !J && !t.textFilter && (s += w(N.innerText), b = !0)), R && (s = o + w(s), o = "")
        },
        ontext: function(v) {
            if (_) return;
            const C = f[f.length - 1];
            let N;
            if (C && (N = C.tag, v = C.innerText !== void 0 ? C.innerText : v), t.disallowedTagsMode === "discard" && (N === "script" || N === "style")) s += v;
            else {
                const R = w(v, !1);
                t.textFilter && !b ? s += t.textFilter(R, N) : b || (s += R)
            }
            if (f.length) {
                const R = f[f.length - 1];
                R.text += v
            }
        },
        onclosetag: function(v) {
            if (_)
                if (y--, !y) _ = !1;
                else return;
            const C = f.pop();
            if (!C) return;
            _ = t.enforceHtmlBoundary ? v === "html" : !1, p--;
            const N = g[p];
            if (N) {
                if (delete g[p], t.disallowedTagsMode === "discard") {
                    C.updateParentNodeText();
                    return
                }
                o = s, s = ""
            }
            if (m[p] && (v = m[p], delete m[p]), t.exclusiveFilter && t.exclusiveFilter(C)) {
                s = s.substr(0, C.tagPosition);
                return
            }
            if (C.updateParentNodeMediaChildren(), C.updateParentNodeText(), t.selfClosing.indexOf(v) !== -1) {
                N && (s = o, o = "");
                return
            }
            s += "</" + v + ">", N && (s = o + w(s), o = "")
        }
    }, t.parser);
    return S.write(n), S.end(), s;

    function x() {
        s = "", p = 0, f = [], g = {}, m = {}, _ = !1, y = 0
    }

    function w(v, C) {
        return typeof v != "string" && (v = v + ""), t.parser.decodeEntities && (v = v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), C && (v = v.replace(/"/g, "&quot;"))), v = v.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), C && (v = v.replace(/"/g, "&quot;")), v
    }

    function P(v, C) {
        C = C.replace(/[\x00-\x20]+/g, ""), C = C.replace(/<!--.*?-->/g, "");
        const N = C.match(/^([a-zA-Z]+):/);
        if (!N) return C.match(/^[/\\]{2}/) ? !t.allowProtocolRelative : !1;
        const R = N[1].toLowerCase();
        return Ee(t.allowedSchemesByTag, v) ? t.allowedSchemesByTag[v].indexOf(R) === -1 : !t.allowedSchemes || t.allowedSchemes.indexOf(R) === -1
    }

    function A(v, C) {
        if (!C) return v;
        const N = utt(v),
            R = v.nodes[0];
        let J;
        return C[R.selector] && C["*"] ? J = Za(C[R.selector], C["*"]) : J = C[R.selector] || C["*"], J && (N.nodes[0].nodes = R.nodes.reduce(O(J), [])), N
    }

    function M(v) {
        return v.nodes[0].nodes.reduce(function(C, N) {
            return C.push(N.prop + ":" + N.value), C
        }, []).join(";")
    }

    function O(v) {
        return function(C, N) {
            return Ee(v, N.prop) && v[N.prop].some(function(J) {
                return J.test(N.value)
            }) && C.push(N), C
        }
    }

    function T(v, C) {
        return C ? (v = v.split(/\s+/), v.filter(function(N) {
            return C.indexOf(N) !== -1
        }).join(" ")) : v
    }
}
const oo = {
    decodeEntities: !0
};
_n.defaults = {
    allowedTags: ["address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4", "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div", "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre", "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption", "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr"],
    disallowedTagsMode: "discard",
    allowedAttributes: {
        a: ["href", "name", "target"],
        img: ["src"]
    },
    selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta"],
    allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
    allowProtocolRelative: !0,
    enforceHtmlBoundary: !1
};
_n.simpleTransform = function(n, t, e) {
    return e = e === void 0 ? !0 : e, t = t || {},
        function(s, o) {
            let i;
            if (e)
                for (i in t) o[i] = t[i];
            else o = t;
            return {
                tagName: n,
                attribs: o
            }
        }
};
const ec = Ec(ytt),
    vtt = "_digestPostEmbed_1cl67_1",
    Stt = "_menu_1cl67_14",
    Ctt = "_caption_1cl67_28",
    xtt = "_captionEditor_1cl67_33",
    Ntt = "_smSquare_1cl67_41",
    ktt = "_mdSquare_1cl67_47",
    Ett = "_fullWidth_1cl67_53",
    Ttt = "_inheritColor_1cl67_59",
    Ptt = "_link_1cl67_63",
    Att = "_disableLink_1cl67_68",
    yt = {
        digestPostEmbed: vtt,
        menu: Stt,
        caption: Ctt,
        captionEditor: xtt,
        smSquare: Ntt,
        mdSquare: ktt,
        fullWidth: Ett,
        inheritColor: Ttt,
        link: Ptt,
        disableLink: Att
    },
    Os = n => {
        n.stopPropagation()
    },
    Ltt = ({
        editing: n,
        caption: t,
        onFocus: e,
        onSave: s,
        onCancel: o
    }) => {
        const i = t.replace(/<br\s*\/?>/gi, `
`),
            [a, c] = D(i);
        return n ? r(X, {
            flex: "grow"
        }, r(nm, {
            name: "description",
            value: a,
            onChange: l => {
                c(l.target.value)
            },
            className: yt.captionEditor,
            rows: 6,
            maxLength: 5e3,
            placeholder: "Enter a caption...",
            onKeyPress: Os,
            onKeyDown: Os,
            onCopy: Os,
            onPaste: Os
        }), r(gt, {
            gap: 8,
            paddingY: 8,
            justifyContent: "end"
        }, r(ue, {
            priority: "secondary-theme",
            onClick: o
        }, "Cancel"), r(ue, {
            priority: "primary-theme",
            onClick: () => {
                const l = a.replace(/\n/g, "<br>"),
                    u = ec(l, V(k({}, ec.defaults), {
                        allowedTags: ["br"]
                    }));
                s(u)
            }
        }, "Save"))) : r("p", {
            onClick: e,
            className: yt.caption,
            dangerouslySetInnerHTML: {
                __html: t
            }
        })
    },
    Itt = ({
        size: n,
        onOpen: t,
        onClose: e,
        onEditCaption: s,
        onSetLayout: o,
        onConvertToLink: i,
        onConvertToEmbeddedPost: a,
        onDelete: c
    }) => {
        const {
            iString: l
        } = ot();
        return r(gt, {
            className: yt.menu,
            justifyContent: "end"
        }, r(as, {
            trigger: r(hn, {
                priority: "secondary-theme",
                rounded: !1,
                fill: "outline"
            }, r(bm, {
                className: yt.menuIcon,
                height: 20
            })),
            onOpen: t,
            onClose: e,
            layerOptions: {
                placement: "bottom-end"
            }
        }, r(kt, {
            disabled: n === "sm",
            onClick: () => o("sm")
        }, l("Small display")), r(kt, {
            disabled: n === "md",
            onClick: () => o("md")
        }, l("Medium display")), r(kt, {
            disabled: n === "lg",
            onClick: () => o("lg")
        }, l("Large display")), r(Fe, null), (n === "lg" || n === "md") && r(kt, {
            onClick: s
        }, l("Edit caption")), r(kt, {
            onClick: () => a()
        }, l("Convert to default")), r(kt, {
            onClick: i
        }, l("Convert to link")), r(kt, {
            priority: "destructive",
            onClick: c
        }, l("Remove"))))
    },
    zi = ({
        post: n,
        href: t,
        isEditor: e,
        includeUfi: s = !1,
        paddingTop: o = 0,
        paddingBottom: i = 0
    }) => {
        const a = Ln(),
            c = fi();
        return r(ht, {
            gap: 16,
            paddingTop: o,
            paddingBottom: i,
            alignItems: "center"
        }, s && c && a && n && r(ht, {
            gap: 8,
            className: "post-ufi"
        }, r(op, {
            post: n,
            pub: c,
            user: a
        }), r(ip, {
            post: n,
            pub: c
        }), r(ap, {
            post: n,
            pub: c,
            user: a,
            style: "button",
            labelStyle: "cta"
        })), r(I.B4, {
            weight: "medium",
            className: $({
                [yt.disableLink]: e
            }),
            as: "a",
            href: t,
            align: "center"
        }, r(ht, {
            gap: 8,
            alignItems: "center",
            className: yt.link
        }, r(I.B4, {
            color: "pub-accent",
            weight: "semibold",
            as: "span",
            size: 14
        }, "Read full story"), r(fl, {
            size: 16
        }))))
    },
    ud = ({
        href: n,
        includeUfi: t = !1,
        paddingTop: e = 0,
        paddingBottom: s = 0
    }) => r(It, {
        gap: 16,
        style: {
            paddingTop: e,
            paddingBottom: s
        }
    }, r(I.B4, {
        weight: "medium",
        as: "a",
        href: n,
        align: "center"
    }, r(It, {
        gap: 8
    }, r(I.B4, {
        color: "pub-accent",
        as: "span",
        size: 14,
        className: yt.link
    }, "Read full story")))),
    Wi = ({
        bylines: n,
        date: t,
        isEditor: e
    }) => r(ht, {
        alignItems: "center",
        gap: 4
    }, n != null && n.length ? r(it, null, r(I.Meta, {
        className: $({
            [yt.disableLink]: e
        }),
        color: "pub-secondary-text"
    }, r(ai, {
        array: n || [],
        limit: 3,
        formatter: ({
            id: s,
            name: o
        }) => r("a", {
            className: yt.inheritColor,
            href: Pc(s, o)
        }, o)
    })), r(I, {
        color: "pub-secondary-text"
    }, "·")) : null, r(I.Meta, {
        color: "pub-secondary-text"
    }, Tc(t))),
    dd = ({
        bylines: n,
        date: t
    }) => r(It, {
        gap: 4
    }, n != null && n.length ? r(It, {
        gap: 4
    }, r(I.Meta, {
        color: "pub-secondary-text"
    }, r(ai, {
        array: n || [],
        limit: 3,
        formatter: ({
            id: e,
            name: s
        }) => r("a", {
            className: yt.inheritColor,
            href: Pc(e, s)
        }, s)
    })), r(I, {
        color: "pub-secondary-text"
    }, "·")) : null, r(I.Meta, {
        color: "pub-secondary-text"
    }, Tc(t))),
    Ott = ({
        post: n,
        isEditor: t,
        children: e
    }) => {
        const {
            publishedBylines: s,
            title: o,
            canonical_url: i,
            post_date: a,
            section_name: c,
            cover_image: l,
            cover_image_alt: u
        } = n;
        return r(X, null, c && r("a", {
            href: i,
            className: $({
                [yt.disableLink]: t
            }),
            target: "_blank",
            rel: "noopener"
        }, r(I.Meta, {
            color: "pub-primary-text",
            paddingBottom: 8
        }, c)), r("a", {
            href: i,
            className: $({
                [yt.disableLink]: t
            }),
            target: "_blank",
            rel: "noopener"
        }, r(I.H2, {
            color: "pub-primary-text"
        }, o)), r(Wi, {
            bylines: s,
            date: a,
            isEditor: t
        }), l && r(Gt, {
            paddingTop: 24
        }, r("a", {
            href: i,
            className: $({
                [yt.disableLink]: t
            }),
            target: "_blank",
            rel: "noopener"
        }, r(tn, {
            className: yt.fullWidth,
            src: l,
            alt: u != null ? u : o,
            maxWidth: 1300,
            imageProps: {
                height: Math.round(1300 / 2),
                smartCrop: !0
            }
        }))), r(gt, {
            paddingTop: 16,
            flex: "grow"
        }, t ? e : r("a", {
            href: i,
            className: $({
                [yt.disableLink]: t
            }),
            target: "_blank",
            rel: "noopener"
        }, e)), r(zi, {
            post: n,
            href: i,
            includeUfi: !1,
            isEditor: t
        }))
    },
    hd = ({
        post: n,
        children: t
    }) => {
        const {
            publishedBylines: e,
            title: s,
            canonical_url: o,
            post_date: i,
            section_name: a,
            cover_image: c,
            cover_image_alt: l
        } = n;
        return r(re, null, a && r("a", {
            href: o
        }, r(I.Meta, {
            color: "pub-primary-text",
            paddingBottom: 8
        }, a)), r("a", {
            href: o
        }, r(I.H2, {
            color: "pub-primary-text"
        }, s)), r(dd, {
            bylines: e,
            date: i
        }), c && r(Gt, {
            paddingTop: 24
        }, r("a", {
            href: o
        }, r(tn, {
            className: yt.fullWidth,
            src: c,
            alt: l != null ? l : s,
            maxWidth: 1300,
            imageProps: {
                height: Math.round(1300 / 2),
                smartCrop: !0
            }
        }))), r("a", {
            href: o
        }, r(Gt, {
            as: "p"
        }, t)), r(ud, {
            href: o
        }))
    },
    Mtt = ({
        post: n,
        isEditor: t,
        children: e
    }) => {
        const {
            publishedBylines: s,
            title: o,
            canonical_url: i,
            post_date: a,
            section_name: c,
            cover_image: l,
            cover_image_alt: u
        } = n, d = In();
        return r(X, null, c && r("a", {
            href: i,
            className: $({
                [yt.disableLink]: t
            }),
            target: "_blank",
            rel: "noopener"
        }, r(I.Meta, {
            color: "pub-primary-text",
            paddingBottom: 8
        }, c)), r("a", {
            href: i,
            className: $({
                [yt.disableLink]: t
            }),
            target: "_blank",
            rel: "noopener"
        }, r(I.H2, {
            color: "pub-primary-text"
        }, o)), r(Wi, {
            bylines: s,
            date: a,
            isEditor: t
        }), r(gt, {
            direction: {
                mobile: "column",
                desktop: "row"
            },
            gap: 16,
            paddingTop: 16
        }, l && r(Gt, {
            style: {
                width: d ? "unset" : 140
            }
        }, r("a", {
            href: i,
            className: $({
                [yt.disableLink]: t
            }),
            target: "_blank",
            rel: "noopener"
        }, r(tn, {
            className: d ? yt.fullWidth : yt.mdSquare,
            src: l,
            alt: u != null ? u : o,
            maxWidth: d ? 1300 : 280,
            imageProps: {
                height: Math.round(d ? 1300 : 280),
                smartCrop: !0
            }
        }))), r(X, {
            flex: "grow"
        }, t ? e : r("a", {
            href: i,
            className: $({
                [yt.disableLink]: t
            }),
            target: "_blank",
            rel: "noopener"
        }, e), r(zi, {
            post: n,
            href: i,
            isEditor: t
        }))))
    },
    Dtt = ({
        post: n,
        children: t
    }) => r(hd, {
        post: n,
        children: t
    }),
    Rtt = ({
        post: n,
        isEditor: t
    }) => {
        const {
            publishedBylines: e,
            title: s,
            canonical_url: o,
            post_date: i,
            cover_image: a,
            cover_image_alt: c
        } = n;
        return r("a", {
            href: o,
            className: $({
                [yt.disableLink]: t
            }),
            target: "_blank",
            rel: "noopener"
        }, r(ht, {
            gap: 16
        }, a && r(Gt, {
            style: {
                width: 70,
                height: 70
            }
        }, r(tn, {
            className: yt.smSquare,
            src: a,
            alt: c != null ? c : s,
            maxWidth: 140,
            imageProps: {
                height: Math.round(140),
                smartCrop: !0
            }
        })), r(X, null, r(I.H4, {
            color: "pub-primary-text"
        }, s), r(Wi, {
            bylines: e,
            date: i,
            isEditor: t
        }), r(zi, {
            post: n,
            href: o,
            includeUfi: !1,
            isEditor: t
        }))))
    },
    $tt = ({
        post: n
    }) => {
        const {
            publishedBylines: t,
            title: e,
            canonical_url: s,
            post_date: o,
            cover_image: i,
            cover_image_alt: a
        } = n;
        return r(It, {
            gap: 16
        }, i && r(Gt, {
            style: {
                width: 70
            }
        }, r("a", {
            href: s
        }, r(tn, {
            className: yt.smSquare,
            src: i,
            alt: a != null ? a : e,
            maxWidth: 140,
            imageProps: {
                height: 140,
                smartCrop: !0
            }
        }))), r(re, null, r(I.H4, {
            color: "pub-primary-text"
        }, r("a", {
            href: s
        }, e)), r(dd, {
            bylines: t,
            date: o
        }), r(ud, {
            href: s
        })))
    },
    Ms = n => {
        document.dispatchEvent(new CustomEvent("updateDigestPostEmbed", {
            detail: n,
            bubbles: !0
        }))
    },
    qtt = n => {
        document.dispatchEvent(new CustomEvent("convertDigestPostEmbedToLink", {
            detail: n,
            bubbles: !0
        }))
    },
    Btt = n => {
        document.dispatchEvent(new CustomEvent("convertDigestPostEmbedToEmbeddedPost", {
            detail: n,
            bubbles: !0
        }))
    },
    Utt = () => {
        document.dispatchEvent(new CustomEvent("deleteDigestPostEmbed", {
            bubbles: !0
        }))
    },
    Ftt = ({
        nodeId: n,
        caption: t,
        size: e = "lg",
        isEditor: s,
        title: o,
        publishedBylines: i,
        post_date: a,
        cover_image: c,
        cover_image_alt: l,
        canonical_url: u,
        section_name: d,
        id: h,
        type: p,
        reaction_count: f,
        comment_count: g,
        publication_name: m,
        publication_logo_url: _,
        editor: y,
        updateAttributes: b,
        deleteNode: S,
        getPos: x
    }) => {
        const [w, P] = D(!1), [A, M] = D(!1), [O, T] = D(!1), v = {
            title: o,
            publishedBylines: i,
            post_date: a,
            cover_image: c,
            cover_image_alt: l,
            canonical_url: u,
            section_name: d,
            id: h,
            type: p,
            reaction_count: f,
            comment_count: g,
            publication_name: m,
            publication_logo_url: _
        }, C = () => {
            M(!0), P(!1), Ms({
                nodeId: n,
                shouldDisableDrag: !0
            })
        }, N = r(Ltt, {
            editing: A,
            caption: t,
            onFocus: C,
            onSave: R => {
                M(!1), b ? b({
                    caption: R
                }) : Ms({
                    nodeId: n,
                    caption: R,
                    shouldDisableDrag: !1
                })
            },
            onCancel: () => {
                M(!1), Ms({
                    nodeId: n,
                    shouldDisableDrag: !1
                })
            }
        });
        return r("div", {
            className: $(yt.digestPostEmbed),
            onMouseEnter: () => !A && P(!0),
            onMouseLeave: () => !O && P(!1),
            "data-component-name": "DigestPostEmbed"
        }, r(it, null, s && w && r(Itt, {
            size: e,
            onOpen: () => T(!0),
            onClose: () => T(!1),
            onEditCaption: C,
            onSetLayout: R => {
                b ? b({
                    size: R
                }) : Ms(k({
                    nodeId: n,
                    caption: t,
                    size: R
                }, v))
            },
            onConvertToEmbeddedPost: () => {
                y && x ? y.commands.convertDigestPostEmbedToEmbeddedPostV2({
                    pos: x(),
                    attrs: k({
                        url: u
                    }, v)
                }) : Btt({
                    url: u
                })
            },
            onConvertToLink: () => {
                y && x ? y.commands.convertDigestPostEmbedToLinkV2({
                    pos: x(),
                    url: u
                }) : qtt({
                    url: u
                })
            },
            onDelete: () => {
                S ? S() : Utt()
            }
        }), e === "sm" && r(Rtt, {
            post: v,
            isEditor: s
        }), e === "md" && r(Mtt, {
            post: v,
            isEditor: s
        }, s ? N : r("p", {
            className: yt.caption,
            dangerouslySetInnerHTML: {
                __html: t
            }
        })), e === "lg" && r(Ott, {
            post: v,
            isEditor: s
        }, s ? N : r("p", {
            className: yt.caption,
            dangerouslySetInnerHTML: {
                __html: t
            }
        }))))
    },
    jtt = s => {
        var o = s,
            {
                caption: n,
                size: t
            } = o,
            e = te(o, ["caption", "size"]);
        return e ? r("div", {
            className: $(yt.digestPostEmbed, Yc.digestPostEmbed),
            "data-component-name": "DigestPostEmbedStatic"
        }, t === "sm" && r($tt, {
            post: e
        }), t === "md" && r(Dtt, {
            post: e
        }, r("p", {
            className: yt.caption,
            dangerouslySetInnerHTML: {
                __html: n
            }
        })), t === "lg" && r(hd, {
            post: e
        }, r("p", {
            className: yt.caption,
            dangerouslySetInnerHTML: {
                __html: n
            }
        }))) : null
    };

function Htt({
    children: n,
    href: t,
    className: e
}) {
    return r("a", {
        className: $("button primary email cta subscribe-btn", e),
        href: t
    }, n)
}
const Vtt = ({
        userId: n,
        userName: t
    }) => {
        const {
            iTemplate: e
        } = ot();
        return r("p", {
            className: "button-wrapper",
            "data-component-name": "DirectMessageStatic"
        }, r(Htt, {
            href: _m({
                userId: n,
                userName: t
            })
        }, e `Message ${t}`))
    },
    ztt = ({
        userId: n,
        userName: t
    }) => {
        const {
            iTemplate: e
        } = ot(), s = fi(), o = Ln(), [i, a] = D(!1), [c, l] = D([]), [u, d] = D(!1), [h, p] = D(!1), [f, g] = D(!1), m = oh({
            userId: n,
            userName: t
        }), {
            result: _
        } = wn({
            pathname: ih({
                userId: n,
                userName: t
            }),
            deps: [n],
            auto: !0
        });
        lt(() => {
            var b;
            _ && (a((b = _.can_dm) != null ? b : !1), l(_.dm_upgrade_options || []))
        }, [_]);
        const y = e `Message ${(_==null?void 0:_.name)||t}`;
        return r(it, null, r(pr, null, r(gt, {
            flex: "grow",
            style: {
                marginBottom: "20px"
            },
            justifyContent: "center",
            "data-component-name": "DirectMessageWeb"
        }, !!i && r(de, {
            priority: "primary",
            onClick: () => W(G.DIRECT_MESSAGE_WRITER_BUTTON_CLICKED, {
                locked: !1
            }),
            href: ym({
                urlParams: {
                    user: m,
                    utm_source: "direct-message-writer"
                }
            }),
            newTab: !0,
            leading: r(cp, {
                size: 20
            })
        }, y), !i && r(de, {
            onClick: () => {
                W(G.DIRECT_MESSAGE_WRITER_BUTTON_CLICKED, {
                    locked: !0
                }), o ? o.id === n ? g(!0) : d(!0) : p(!0)
            },
            priority: "secondary",
            leading: r(ni, {
                size: 20
            })
        }, y)), r(Gtt, {
            isOpen: h,
            onClose: () => p(!1),
            profile: _,
            pub: s
        }), r(Wtt, {
            isOpen: f,
            onClose: () => g(!1)
        }), r(wm, {
            isOpen: u,
            onClose: () => d(!1),
            profile: _,
            dmUpgradeOptions: c,
            isEditor: !0
        })))
    },
    Wtt = ({
        isOpen: n,
        onClose: t
    }) => {
        const {
            iString: e
        } = ot();
        return r(Ze, {
            width: 360,
            isOpen: n,
            onClose: t
        }, r(ls, null, r(X, {
            gap: 16
        }, r(gt, {
            alignSelf: "center",
            flex: "auto",
            bg: "secondary",
            radius: "full",
            padding: 16
        }, r(hl, {
            size: 24
        })), r(X, null, r(I.B2, {
            weight: "semibold",
            align: "center"
        }, e("You can't message yourself, but others will be able to message you via this button."))), r(X, null, r(de, {
            justifyContent: "center",
            onClick: t,
            priority: "secondary"
        }, e("Okay"))))))
    },
    Gtt = ({
        isOpen: n,
        onClose: t,
        profile: e,
        pub: s
    }) => {
        const {
            iString: o
        } = ot();
        return r(Ze, {
            width: 360,
            isOpen: n,
            onClose: t
        }, r(ls, null, r(X, {
            gap: 16
        }, r(gt, {
            alignSelf: "center",
            flex: "auto",
            bg: "secondary",
            radius: "full",
            padding: 16
        }, r(ni, {
            size: 24
        })), r(X, null, r(I.B2, {
            weight: "semibold",
            align: "center"
        }, o(`Sign in to send ${e==null?void 0:e.name} a message`))), r(X, {
            gap: 8
        }, r(de, {
            justifyContent: "center",
            href: Me({
                for_pub: s == null ? void 0 : s.subdomain
            })
        }, o("Sign in")), r(de, {
            justifyContent: "center",
            onClick: t,
            priority: "secondary"
        }, o("Maybe later"))))))
    },
    Jtt = ({
        text: n,
        url: t,
        exposeExperiment: e,
        variant: s
    }) => {
        lt(() => {
            s && e()
        }, [s]);
        const o = {
            url: t
        };
        return r("p", {
            className: "button-wrapper"
        }, r("a", {
            className: "button primary",
            onClick: i => {
                i.preventDefault(), navigator.share(o)
            }
        }, n))
    },
    Ytt = ({
        mediaUpload: n,
        post: t,
        pub: e
    }) => {
        if (!n) return r("div", {
            "data-testid": "video-embed-player-static-missing-media"
        }, "Did not find video");
        const s = ah({
            pub: e,
            post: t,
            mediaUploadId: n.id
        });
        return r(An, {
            mediaUpload: n,
            isStatic: !0,
            pub: e,
            href: s
        })
    },
    Ktt = (n, {
        pub: t,
        props: {
            isStatic: e,
            post: s,
            dataForEmailRender: o
        }
    }) => {
        var i, a;
        try {
            const c = n.getAttribute("data-attrs");
            if (c) {
                const {
                    mediaUploadId: l
                } = JSON.parse(jt(c));
                return e ? r(Ytt, {
                    pub: t,
                    post: s,
                    mediaUpload: (a = (i = o.idToMediaUpload) == null ? void 0 : i[l]) != null ? a : null
                }) : r(Fb, {
                    pub: t,
                    post: s,
                    mediaUploadId: l
                })
            }
        } catch (c) {
            console.error("Failed to parse video:", c)
        }
        return r(it, null)
    },
    Xtt = (n, {
        pub: t,
        props: {
            isStatic: e
        }
    }) => {
        try {
            const s = n.getAttribute("data-attrs");
            if (s) {
                const o = JSON.parse(jt(s));
                return e ? r(jtt, V(k({}, o), {
                    isEditor: !1
                })) : r(Ftt, V(k({}, o), {
                    isEditor: !1
                }))
            }
        } catch (s) {
            console.error("Failed to parse digest post embed:", s)
        }
        return r(it, null)
    },
    Qtt = (n, {
        pub: t,
        props: {
            isStatic: e
        }
    }) => {
        try {
            const s = n.getAttribute("data-attrs"),
                o = JSON.parse(jt(s));
            return e ? r(Pb, V(k({}, o), {
                pub: t
            })) : r(Tb, V(k({}, o), {
                pub: t
            }))
        } catch (s) {
            console.error("Failed to parse referrals card:", s)
        }
        return r(it, null)
    },
    Ztt = (n, t) => {
        var e;
        try {
            const s = JSON.parse(jt(n.getAttribute("data-attrs")));
            if ((e = s == null ? void 0 : s.url) != null && e.includes("/p/") && s.text === "Share") {
                const o = navigator.share && navigator.canShare(shareData) && me();
                if (o && t.props.variant === "treatment") return r(Jtt, {
                    text: s.text,
                    url: s.url,
                    variant: t.props.variant,
                    exposeExperiment: t.props.exposeExperiment
                });
                if (o && t.props.variant === "control") {
                    t.props.exposeExperiment();
                    return
                }
            }
        } catch (s) {
            console.error("Failed to parse button:", s)
        }
    },
    tet = (n, {
        props: {
            isStatic: t
        }
    }) => {
        var e;
        try {
            const s = n.getAttribute("data-attrs");
            if (s) {
                const i = (e = JSON.parse(s)) != null ? e : {};
                return t ? r(ab, k({}, V(k({}, i), {
                    captionHtml: n.innerHTML
                }))) : r(cb, k({}, V(k({}, i), {
                    captionHtml: n.innerHTML
                })))
            }
        } catch (s) {
            console.error("Failed to parse image3:", s)
        }
        return r(it, null)
    },
    eet = (n, {
        pub: t,
        props: {
            isStatic: e,
            post: s
        }
    }) => {
        try {
            const o = n.getAttribute("data-attrs");
            if (o) {
                const i = JSON.parse(o),
                    c = {
                        node: {
                            attrs: V(k({}, i), {
                                isEditor: !1
                            })
                        }
                    };
                return e ? r(Nb, k({}, c)) : r(xb, k({}, c))
            }
        } catch (o) {
            console.error("Failed to parse image gallery embed:", o)
        }
        return r(it, null)
    },
    net = (n, {
        props: {
            isStatic: t
        }
    }) => {
        try {
            const e = n.getAttribute("data-attrs");
            if (e) {
                const s = JSON.parse(e),
                    o = k({}, s);
                return t ? r(Vtt, k({}, o)) : r(ztt, k({}, o))
            }
        } catch (e) {
            console.error("Failed to parse direct message embed:", e)
        }
        return r(it, null)
    },
    set = (n, t) => {
        var e;
        try {
            const s = JSON.parse(jt(n.getAttribute("data-attrs")));
            return s != null && s.isEmail ? r("table", {
                className: "recipe-embed recipe-email",
                cellSpacing: "16px",
                width: "100%"
            }, r("tbody", null, r("tr", null, r("td", null, r(pa, {
                node: {
                    attrs: {
                        id: s.id
                    }
                },
                editable: !1,
                staticData: (e = t.props.dataForEmailRender) == null ? void 0 : e.recipes[s.id]
            }))))) : r("div", {
                className: "recipe-embed",
                dataAttrs: n.getAttribute("data-attrs")
            }, r(pa, {
                node: {
                    attrs: {
                        id: s.id
                    }
                },
                editable: !1
            }))
        } catch (s) {
            return console.log("Failed to parse recipe:", s), r(it, null)
        }
    };

function nc(n, t) {
    return Ac(fr(n, 500, {
        ellipsis: ""
    }), {
        allowUnicode: t
    })
}

function ret({
    text: n,
    post: t,
    pub: e,
    offsetTop: s,
    isAboutPage: o
}) {
    const {
        isStatic: i
    } = Tn(Yo), a = nc(n, !0), c = nc(n, !1), l = vm();
    if (!t && !o || !e || i) return null;
    const u = o ? `${ch(e,{addBase:!0})}#§${a}` : `${mr(e)}/i/${t.id}/${a}`,
        d = h => {
            location != null && location.href && (h.preventDefault(), W(G.HEADER_ANCHOR_WIDGET_CLICKED, {
                destination: u
            }), l(u))
        };
    return r("div", {
        id: `§${a}`,
        className: $("header-anchor-widget", {
            "offset-top": s
        })
    }, (t == null ? void 0 : t.id) < 66696300 && a !== c && r("div", {
        id: `§${c}`
    }), r("div", {
        className: "header-anchor-widget-button-container"
    }, r("div", {
        className: "header-anchor-widget-button",
        href: u,
        onClick: d
    }, r(Zs, {
        className: "header-anchor-widget-icon",
        size: 20
    }))))
}
var yc;
const oet = typeof window != "undefined" ? (yc = window._preloads) == null ? void 0 : yc.freeSignup : !1,
    pd = os(oet);
pd.displayName = "FreeSignupContext";

function iet() {
    return Tn(pd)
}
class aet extends cs {
    constructor(t, e) {
        var s, o;
        super(t, e), this.state.email = (o = (s = this.props.user) == null ? void 0 : s.email) != null ? o : null
    }
    onOpen() {
        W(G.POLL_SIGNUP_DIALOG_PRESENTED, {
            poll_id: this.props.pollId,
            post_id: this.props.post.id
        })
    }
    onClose() {
        W(G.POLL_SIGNUP_DIALOG_CLOSED, {
            poll_id: this.props.pollId,
            post_id: this.props.post.id
        })
    }
    renderChildren() {
        const {
            pub: t,
            post: e,
            user: s,
            audience: o,
            pollId: i
        } = this.props, {
            email: a
        } = this.state, c = o === "only_paid" ? "paid subscribers" : "subscribers";
        return r("div", null, r("div", {
            className: "poll-signup-header"
        }, r("div", {
            className: "poll-signup-title"
        }, `Subscribe to ${t.name} to vote on this poll`), r("div", {
            className: "poll-signup-audience"
        }, "Only ", c, " can vote on this poll.")), r(cl, {
            method: "post",
            action: Xe("/api/v1/free"),
            loading: !1,
            autoLock: !0,
            onSuccess: l => {
                al(), W(G.POLL_SIGNUP_DIALOG_SUBMITTED, {
                    poll_id: i,
                    post_id: e.id
                }), t.plans || t.has_recommendations ? document.location.href = Ae(this.props.pub, V(k(k({
                    utm_medium: Et.web,
                    utm_source: bt.pollSubscribeModal,
                    utm_content: e && e.id,
                    just_signed_up: !0,
                    requires_confirmation: l.body.requires_confirmation ? "true" : ""
                }, l.body.subscription_id && {
                    subscription_id: l.body.subscription_id
                }), l.body.referral_token && {
                    referral_token: l.body.referral_token
                }), {
                    next: Ft(t, e)
                })) : document.location.reload()
            }
        }, r("div", {
            className: "poll-signup"
        }, r("input", {
            placeholder: "Type your email...",
            type: "email",
            name: "email",
            "aria-label": "Email",
            value: a,
            disabled: !!s.email,
            tabIndex: 0,
            onChange: l => {
                this.setState({
                    email: l.target.value
                })
            }
        }), r("input", {
            type: "hidden",
            name: "source",
            value: "poll-subscribe-modal"
        })), r("div", {
            id: "error-container"
        }), r("button", {
            className: "button primary",
            type: "submit"
        }, "Subscribe")), !s.email && r("div", {
            className: "poll-signin-prompt"
        }, "Already a subscriber?", " ", r("a", {
            className: "poll-signin-link",
            href: Me({
                for_pub: t.subdomain,
                redirect: Ft(t, e)
            })
        }, "Sign in")))
    }
}
const fd = os({
    publication: {},
    pub: {},
    setPublication: ({
        pub: n,
        publication: t
    }) => {}
});
fd.displayName = "PublishContext";
const gat = n => {
        const t = e => {
            const s = md();
            return r(n, k(k({}, s), e))
        };
        return t.displayName = `withPublishContext(${n.name||n.displayName||"Anonymous"})`, t
    },
    md = () => Tn(fd),
    cet = () => null,
    sc = o => {
        var i = o,
            {
                variant: n = "default",
                isSearchable: t = !1,
                className: e
            } = i,
            s = te(i, ["variant", "isSearchable", "className"]);
        var c, l;
        const {
            pub: a
        } = md();
        return r($f, V(k({}, s), {
            isDisabled: s.isDisabled,
            className: $("themed-select", e),
            components: k({
                IndicatorSeparator: cet
            }, s.components),
            theme: lh({
                primary: ((c = a.theme) == null ? void 0 : c.background_pop_color) || a.theme_var_background_pop || "#1a1a1a",
                neutral0: n === "light" ? "white" : (l = a.theme) == null ? void 0 : l.web_bg_color
            }),
            isSearchable: t,
            styles: k(k({
                container: u => V(k({}, u), {
                    flex: 1
                }),
                dropdownIndicator: u => V(k({}, u), {
                    color: "#1a1a1a"
                })
            }, s.showOnlyIndicator && {
                valueContainer: u => V(k({}, u), {
                    width: 0,
                    padding: 0
                })
            }), s.styles)
        }))
    },
    rc = 2,
    oc = 5,
    uet = 35,
    det = 255,
    het = ({
        isExpired: n,
        isPublished: t,
        remainingHours: e,
        language: s
    }) => {
        const {
            iString: o,
            iTemplate: i
        } = I18N.i(s);
        if (n) return o("POLL CLOSED");
        if (!t) return o("NOT PUBLISHED");
        if (e >= 168) return "";
        if (e >= 48) {
            const a = Math.floor(e / 24);
            return i `${a} DAYS REMAINING`
        }
        return e >= 24 ? i `1 DAY REMAINING` : e >= 2 ? i `${e} HOURS REMAINING` : e == 1 ? o("1 HOUR REMAINING") : o("LESS THAN 1 HOUR REMAINING")
    },
    Gi = (n, t) => {
        const {
            iTemplate: e
        } = I18N.i(t);
        return n > 1 ? e `Choice ${n+1} (optional)` : e `Choice ${n+1}`
    },
    pet = ({
        question: n,
        expiry: t,
        audience: e,
        options: s
    }, o) => {
        const {
            iString: i
        } = I18N.i(o), a = s.filter(Boolean);
        if (n.length < 1 || n.length > 255) return i("The question must be between 1 and 255 characters long.");
        if (a.length < 2 || a.length > 5) return i("Your poll must have 2 to 5 options.");
        if (a.some(c => c.length < 1 || c.length > 50)) return i("Each option must be between 1 and 50 characters long.");
        if (["all_subscribers", "only_paid"].includes(e)) {
            if (![1, 24, 72, 168, 999999].includes(t)) return i("The length of your poll is invalid.")
        } else return i("Your poll audience is invalid.");
        return null
    },
    fet = ({
        index: n,
        text: t,
        onChange: e,
        onDelete: s,
        showDeleteButton: o,
        disabled: i
    }) => {
        const {
            language: a
        } = ot();
        return r("div", {
            className: "poll-option-editor"
        }, r("input", {
            type: "text",
            onChange: c => {
                e(n, c.currentTarget.value)
            },
            value: t,
            disabled: i,
            placeholder: Gi(n, a),
            maxLength: uet
        }), r("button", {
            className: $("poll-remove-option", {
                "is-hidden": !o
            }),
            onClick: () => s(n),
            disabled: i,
            tabIndex: o ? void 0 : -1
        }, r(ri, null)))
    },
    met = ({
        poll: n,
        isOpen: t,
        onClose: e,
        onSave: s,
        isPublished: o,
        totalVotes: i,
        shouldShowAudiencePicker: a
    }) => {
        let c = n.options.map(E => E.label);
        c.length > 1 ? c.length < oc && c.push("") : c = ["", ""];
        const {
            iString: l,
            language: u,
            iPlural: d
        } = ot(), {
            payments_state: h
        } = fi() || {}, p = a && h === "enabled" ? "only_paid" : "all_subscribers", [f, g] = D(n.question || ""), [m, _] = D(c), [y, b] = D(n.expiry || 24), [S, x] = D(n.audience || p), [w, P] = D(!1), [A, M] = D(n.votes_hidden || !1), [O, T] = D(null), v = pet({
            question: f,
            options: m,
            expiry: y,
            audience: S,
            votes_hidden: A
        }, u), C = Mt(() => {
            var E;
            g(n.question || ""), _(((E = n.options) == null ? void 0 : E.map(U => U.label)) || ["", ""]), b(n.expiry || 24), x(n.audience || p), M(n.votes_hidden || !1), T(null), e()
        }, [g, _, b, x, n, e]), N = Mt(({
            value: E
        }) => {
            ["only_paid", "all_subscribers"].includes(E) && x(E)
        }, [x]), R = l(S === "only_paid" ? "Only paid subscribers" : "All subscribers who can see this post"), J = Mt(({
            value: E
        }) => {
            const U = Number(E);
            [1, 24, 72, 168, 999999].includes(U) && b(U)
        }, [b]), j = l(y === 1 ? "1 hour" : y === 24 ? "1 day" : y === 72 ? "3 days" : y === 168 ? "1 week" : "Forever"), q = Mt((E, U) => {
            const z = [...m];
            z.splice(E, 1, U), E === z.length - 1 && z.length < oc && z.push(""), _(z)
        }, [m, _]), B = Mt(E => {
            if (m.length <= rc || E >= m.length) return;
            const U = [...m];
            U.splice(E, 1), U[U.length - 1].length && U.push(""), _(U)
        }, [m, _]), Y = Array(Math.max(2, m.length || 0)).fill("").map((E, U) => m.length > U ? m[U] : E), L = O || o && d("This poll is part of a post that has already been published. If you modify it, 1 existing vote will be removed.", "This poll is part of a post that has already been published. If you modify it, %1 existing votes will be removed.", i);
        return r(Ze, {
            className: "poll-editor-modal",
            isOpen: t,
            onClose: e
        }, r("div", {
            className: "poll-editor"
        }, r("div", {
            className: "poll-editor-section question-section"
        }, r("input", {
            className: "poll-question-editor",
            type: "text",
            value: f,
            onChange: E => g(E.currentTarget.value),
            placeholder: l("Enter your question..."),
            disabled: w,
            maxLength: det
        })), r("div", {
            className: "poll-editor-section options-section"
        }, r("div", {
            className: "poll-options-editor"
        }, Y.map((E, U) => r(fet, {
            index: U,
            text: E,
            onChange: q,
            onDelete: B,
            disabled: w,
            showDeleteButton: Y.length > rc && (U < Y.length - 1 || E.length > 0)
        })))), r("div", {
            className: "poll-editor-section length-section"
        }, r("div", {
            className: "poll-section-title"
        }, l("Length")), r(sc, {
            options: [{
                label: l("1 hour"),
                value: "1"
            }, {
                label: l("1 day"),
                value: "24"
            }, {
                label: l("3 days"),
                value: "72"
            }, {
                label: l("1 week"),
                value: "168"
            }, {
                label: l("Forever"),
                value: "999999"
            }],
            isDisabled: w,
            value: {
                label: j,
                value: String(y)
            },
            onChange: J
        })), a && h === "enabled" && r("div", {
            className: "poll-editor-section audience-section"
        }, r("div", {
            className: "poll-section-title"
        }, l("Who can vote?")), r(sc, {
            options: [{
                label: l("Only paid subscribers"),
                value: "only_paid"
            }, {
                label: l("All subscribers who can see this post"),
                value: "all_subscribers"
            }],
            isDisabled: w,
            value: {
                label: R,
                value: S
            },
            onChange: N
        })), r("div", {
            className: "poll-editor-section vote-visibility-section"
        }, r(Af, {
            checked: A,
            onChange: () => M(!A),
            label: l("Hide the total vote count from readers?"),
            name: "votes-hidden"
        })), r("div", {
            className: "poll-editor-section action-section"
        }, L && r("div", {
            className: "edit-warning"
        }, L), r("div", {
            className: "action-buttons"
        }, r(Ke, {
            className: "button btn btn-secondary poll-editor-cancel-button",
            variant: "secondary",
            look: "button",
            onClick: C,
            disabled: w
        }, l("Cancel")), r(kf, {
            content: v,
            className: $("inverse", {
                disabled: v === null
            })
        }, r(Ke, {
            className: "button btn btn-primary poll-editor-confirm-button",
            variant: "primary",
            look: "button",
            onClick: () => K(void 0, null, function*() {
                P(!0);
                try {
                    yield s({
                        audience: S,
                        question: f,
                        options: m.filter(Boolean),
                        expiry: y,
                        votes_hidden: A
                    })
                } catch (E) {
                    T(l("An error occurred while saving this poll."))
                }
                P(!1)
            }),
            disabled: v !== null || w
        }, l("Save")))))))
    },
    get = ({
        id: n,
        text: t,
        onVote: e,
        showVotes: s,
        currentVotes: o,
        totalVotes: i,
        myVote: a,
        canVote: c
    }) => {
        const l = Mt(() => K(void 0, null, function*() {
                n && (yield e(n))
            }), [n, e]),
            u = Math.round(100 * (i === 0 ? 0 : o / i));
        return r("div", {
            className: $("poll-option", {
                "show-votes": s,
                "hide-votes": !s,
                "can-vote": c,
                "my-vote": a
            }),
            onClick: l
        }, s && r("div", {
            className: "poll-vote-background",
            style: {
                width: `${u}%`
            }
        }), r("div", {
            className: "poll-option-background"
        }, r("div", {
            className: "poll-option-text"
        }, t, s && a && r(Kp, {
            className: "vote-icon"
        }))), s && r("div", {
            className: "poll-percentage-text"
        }, u, "%"))
    },
    bet = ({
        id: n,
        isEditor: t,
        post: e,
        pub: s,
        isVersionView: o
    }) => {
        var pt, wt, nt;
        const [i, a] = D(!1), [c, l] = D(!0), [u, d] = D(null), [h, p] = D(null), [f, g] = D(!0), [m, _] = D(o != null ? o : !1), {
            iString: y,
            iPlural: b,
            language: S
        } = ot(), x = hr(), w = {
            token: void 0,
            uuid: void 0
        };
        if (typeof window != "undefined" && !t) {
            const st = ea(window.location.href);
            if (st && st.token && (w.token = st.token), !w.token && ((pt = window._preloads) != null && pt.original_url)) {
                const ft = ea(window._preloads.original_url);
                ft && ft.token && (w.token = ft.token)
            }
        }
        if (typeof window != "undefined" && !t && (e != null && e.is_draft)) {
            const st = uh(window.location.href);
            st && Lc(st) && (w.uuid = st)
        }
        const P = Ln() || {},
            A = k({
                is_subscribed: !1,
                is_free_subscribed: !1,
                is_contributor: !1,
                is_author: !1,
                is_admin: !1
            }, P),
            {
                is_subscribed: M,
                is_admin: O,
                is_contributor: T,
                is_author: v
            } = A;
        let {
            is_free_subscribed: C
        } = A;
        iet() && (C = !0);
        const N = T || O || v,
            R = _t(),
            J = u && u.published_at && _t(u.published_at).add(u.expiry, "hour"),
            j = J && J.diff(R, "hour"),
            B = (u == null ? void 0 : u.audience) === "only_paid" ? M : C,
            Y = u && u.options.some(st => st.my_vote),
            L = !!(u != null && u.is_published),
            E = L && J && J.isBefore(R),
            U = t && ((u == null ? void 0 : u.post_type) !== "adhoc_email" || !L),
            z = At(null),
            et = !Y && L && !E && B,
            Z = b("%1 VOTE", "%1 VOTES", (u == null ? void 0 : u.total_votes) || 0),
            tt = het({
                isExpired: E,
                isPublished: L,
                remainingHours: j,
                language: S
            }),
            ut = Mt((...ft) => K(void 0, [...ft], function*({
                shouldNotSetLoading: st
            } = {
                shouldNotSetLoading: !1
            }) {
                st || l(!0);
                try {
                    const Tt = yield dt(`/api/v1/poll/${n}`).query(w);
                    d(Tt.body), p(null)
                } catch (Tt) {
                    p(y("We were unable to load this poll. Please refresh the page."))
                }
                l(!1)
            }), [n, l, d]);
        lt(() => {
            ut()
        }, [ut]);
        const H = Mt(st => K(void 0, null, function*() {
                try {
                    yield dt.put(`/api/v1/poll/${n}`).send(st)
                } catch (ft) {
                    return ft
                }
                return a(!1), l(!0), yield ut(), null
            }), [n, l, ut]),
            rt = Mt(st => K(void 0, null, function*() {
                var ft;
                if (!B && L && !E && !U) {
                    (ft = z.current) == null || ft.open();
                    return
                }
                if (!(U || !et || m)) {
                    _(!0);
                    try {
                        yield dt.post(`/api/v1/poll/${n}/vote`).send({
                            poll_option_id: st
                        }).query(w), p(null)
                    } catch (Tt) {
                        p(y("We were unable to record your vote. Please refresh the page and try again.")), _(!1);
                        return
                    }
                    yield ut({
                        shouldNotSetLoading: !0
                    }), _(!1)
                }
            }), [U, et, m, _, n, ut, B, L, E]),
            ct = U ? Array(Math.max(2, ((wt = u == null ? void 0 : u.options) == null ? void 0 : wt.length) || 0)).fill("").map((st, ft) => {
                var Tt;
                return u && ((Tt = u.options) == null ? void 0 : Tt.length) > ft ? u.options[ft].label : Gi(ft, S)
            }) : (nt = u == null ? void 0 : u.options) == null ? void 0 : nt.map(st => st.label);
        if (h !== null && !u) return r("div", {
            className: "poll-wrapper poll-web"
        }, r("div", {
            className: "poll-error"
        }, h));
        const F = t ? null : `${Ft(s,e)}#poll-${n}`;
        return r(X, {
            className: "poll-wrapper poll-web",
            gap: 24,
            "data-component-name": "Poll"
        }, F && r("div", {
            className: "poll-anchor-target",
            id: `poll-${n}`
        }, r("div", {
            className: "poll-anchor-copy-button",
            onClick: st => {
                location != null && location.href && (st.preventDefault(), Ic(F), x.popToast(ft => r(ce, V(k({}, ft), {
                    text: y("Link copied"),
                    Icon: Zs
                }))))
            }
        }, r("a", {
            href: F
        }, r(Zs, {
            size: 20
        })))), U && u && r(met, {
            poll: u,
            isOpen: i,
            onClose: () => {
                a(!1)
            },
            isPublished: L,
            totalVotes: (u == null ? void 0 : u.total_votes) || 0,
            onSave: H,
            shouldShowAudiencePicker: (u == null ? void 0 : u.post_type) !== "adhoc_email"
        }), !t && u && r(aet, {
            ref: z,
            noCloseButton: !0,
            className: "poll-dialog",
            pub: s,
            post: e,
            user: P,
            pollId: u.id,
            audience: u.audience
        }), c ? r(X, {
            gap: 8,
            paddingY: 48,
            alignItems: "center",
            justifyContent: "center"
        }, r(I.Meta, {
            translated: !0
        }, "Loading...")) : r(it, null, U && r("button", {
            className: "poll-edit",
            onClick: () => {
                a(!0)
            },
            disabled: c
        }, r(Qh, {
            height: 20
        })), r(X, {
            gap: 4
        }, r(ht, {
            className: "poll-title",
            alignItems: "baseline",
            gap: 4
        }, (u == null ? void 0 : u.audience) === "only_paid" ? r(it, null, r(ni, {
            size: 16
        }), r(I.Meta, {
            translated: !0,
            className: "subscriber-only-poll"
        }, "SUBSCRIBER-ONLY POLL")) : r(I.Meta, {
            translated: !0
        }, "POLL")), r(I.H3, {
            className: "poll-question",
            color: "pub-primary-text"
        }, (u == null ? void 0 : u.question) || y("New Poll"))), h !== null && r("div", {
            className: "poll-error"
        }, h), r(X, {
            gap: 12,
            className: $("poll-options", {
                "no-margins": !L
            })
        }, ct.map((st, ft) => {
            var Tt, Vt, xe;
            return r(get, {
                id: ((Tt = u == null ? void 0 : u.options[ft]) == null ? void 0 : Tt.id) || null,
                text: st,
                canVote: !Y && L && !E && (!t || (u == null ? void 0 : u.post_type) === "adhoc_email"),
                onVote: rt,
                showVotes: Y || E || N && f,
                totalVotes: (u == null ? void 0 : u.total_votes) || 0,
                currentVotes: ((Vt = u == null ? void 0 : u.options[ft]) == null ? void 0 : Vt.votes) || 0,
                myVote: ((xe = u == null ? void 0 : u.options[ft]) == null ? void 0 : xe.my_vote) || !1
            })
        })), L && r(I.Meta, {
            className: "poll-status"
        }, (N || !u.votes_hidden) && `${Z} · `, tt, N && !Y && !E && r(it, null, " · ", r("span", {
            className: "poll-author-visibility-toggle",
            title: y("Only the author, contributors, and admins may view results before voting."),
            onClick: () => {
                g(!f)
            }
        }, y(f ? "SHOW OPTIONS" : "SHOW RESULTS"))))))
    },
    _et = ({
        id: n,
        embeddedPolls: t
    }) => {
        const e = t.find(i => i.id === n),
            {
                iString: s,
                language: o
            } = ot();
        return e ? r(qe, {
            className: "poll-email-wrapper",
            "data-component-name": "StaticPoll"
        }, r("tr", null, r("td", null, r(qe, {
            width: "100%"
        }, r("tr", null, r("td", {
            className: "poll-header"
        }, (e == null ? void 0 : e.audience) === "only_paid" ? s("SUBSCRIBER-ONLY POLL") : s("POLL"))), r("tr", {
            className: "poll-question",
            width: "100%"
        }, r("td", null, e.question || s("New Poll"))), r("tr", null, r("td", null, r(qe, {
            className: "poll-options",
            width: "100%"
        }, e.options.map(({
            label: i,
            id: a
        }, c) => r("tr", null, r("td", {
            className: "poll-option",
            width: "100%"
        }, r("a", {
            className: "poll-vote-link",
            href: `%%poll_vote_option_${a}_url%%`,
            width: "100%"
        }, r("div", {
            className: "poll-vote-contents"
        }, i || Gi(c, o))))))))))))) : r("table", {
            className: "poll-wrapper",
            "data-component-name": "StaticPollError"
        }, s("Something went wrong."))
    },
    yet = ["Subscribe", "Subscribe now", "Sign up", "Sign up now"];

function gd({
    isStatic: n,
    pub: t,
    user: e,
    freeSignup: s,
    children: o,
    pledgesEnabled: i
}) {
    if (n) return r(Yo.Consumer, null, ({
        isFreemail: u,
        isFreeSubscribed: d,
        isPledged: h
    }) => o({
        isFreeSubscribed: d,
        isSubscribed: !u,
        isFullySubscribed: t.plans ? !u : !i || h,
        isForPaidSubscription: !!t.plans && u,
        isPledged: h
    }));
    const a = s || (e == null ? void 0 : e.is_free_subscribed),
        c = e == null ? void 0 : e.is_subscribed,
        l = e == null ? void 0 : e.is_pledged;
    return o({
        isFreeSubscribed: a,
        isSubscribed: c,
        isFullySubscribed: t.plans ? c : a && (!i || l),
        isForPaidSubscription: !!t.plans && a && !c,
        isPledged: l
    })
}

function Vo({
    pub: n,
    user: t,
    now: e,
    isStatic: s
}) {
    ll();
    const {
        language: o
    } = ot();
    return r(Sc.Consumer, null, ({
        getSettingFor: i
    }) => {
        const a = n.payments_state === "disabled" && !n.invite_only && i("payment_pledges_enabled");
        return r(gd, {
            isStatic: s,
            user: t,
            pub: n,
            pledgesEnabled: a
        }, ({
            isFreeSubscribed: c,
            isPledged: l
        }) => s ? Ue(n, {
            now: e,
            isFreeSubscribed: c,
            isPledged: l,
            pledgesEnabled: a,
            language: o
        }) : r(ht, {
            alignItems: "center",
            gap: 8
        }, c ? null : r(ol, {
            size: 20
        }), Ue(n, {
            now: e,
            isFreeSubscribed: c,
            isPledged: l,
            pledgesEnabled: a,
            language: o
        })))
    })
}
class Hr extends he {
    onSignup(t) {
        this.setState({
            loading: !0
        }), this.props.onSignup ? this.props.onSignup(t) : !this.props.forceEmailInput && (this.props.pub.plans || this.props.pub.has_recommendations) ? document.location.href = Ae(this.props.pub, V(k(k({
            addBase: !0,
            utm_medium: Et.web,
            utm_source: this.props.source || bt.subscribeWidget,
            utm_content: this.props.post && this.props.post.id,
            just_signed_up: !0,
            requires_confirmation: t.body.requires_confirmation ? "true" : ""
        }, t.body.subscription_id && {
            subscription_id: t.body.subscription_id
        }), t.body.referral_token && {
            referral_token: t.body.referral_token
        }), {
            next: this.props.next || document.location.href
        })) : document.location.reload()
    }
    getHref(t) {
        const {
            pub: e,
            subscribeButtonAttrs: s,
            isStatic: o,
            source: i,
            post: a,
            next: c
        } = this.props, l = {
            utm_medium: o ? Et.email : Et.web,
            utm_source: i || bt.subscribeWidget,
            utm_content: a && a.id,
            next: c,
            referring_pub_ids: o ? void 0 : mn("referring_pub_ids")
        };
        return t ? o ? Dt.ACCOUNT_URL : dh(e, {
            params: l
        }) : Ae(e, k({
            addBase: !0,
            root: s ? s.url : o && Dt.CHECKOUT_URL
        }, l))
    }
    getButtonLabel(t, e, {
        isPledged: s,
        pledgesEnabled: o
    }) {
        const {
            pub: i,
            subscribeButtonAttrs: a
        } = this.props, {
            iString: c
        } = I18N.i({
            pub: i
        });
        if (t || s) return c("Subscribed");
        const l = a && a.text;
        if (l && !yet.includes(l)) return l;
        const u = e;
        return Ue(i, {
            now: !u,
            isFreeSubscribed: u,
            isPledged: s,
            pledgesEnabled: o,
            language: this.context.language
        })
    }
    render({
        align: t,
        pub: e,
        user: s,
        freeSignup: o,
        freeSignupEmail: i,
        source: a,
        isStatic: c,
        forceEmailInput: l,
        expectTruncation: u,
        onPrepareData: d,
        onError: h
    }, {
        loading: p
    }) {
        const f = typeof window != "undefined" && e.hostname !== window.location.hostname.replace(/[.]localhost$/, "");
        return r(Sc.Consumer, null, ({
            getSettingFor: g
        }) => r(mf.Consumer, null, m => r(gd, {
            pub: e,
            user: s,
            isStatic: c,
            freeSignup: o,
            pledgesEnabled: e.payments_state === "disabled" && !e.invite_only && g("payment_pledges_enabled")
        }, ({
            isFreeSubscribed: _,
            isSubscribed: y,
            isFullySubscribed: b,
            isPledged: S
        }) => {
            var P;
            const x = this.getButtonLabel(b, _, {
                    isPledged: S,
                    pledgesEnabled: e.payments_state === "disabled" && !e.invite_only && g("payment_pledges_enabled")
                }),
                w = _ || y;
            return r("div", {
                className: $("subscribe-widget", {
                    "is-signed-up": w,
                    "is-fully-subscribed": b
                }),
                "data-component-name": "SubscribeWidget"
            }, !l && (w || c) ? r("p", {
                className: "button-wrapper"
            }, c ? r("a", {
                className: $("button subscribe-btn", b ? "outline" : "primary"),
                href: this.getHref(b),
                native: !c
            }, b && r(qp, {
                stroke: ((P = e == null ? void 0 : e.theme) == null ? void 0 : P.background_pop_color) || (e == null ? void 0 : e.theme_var_background_pop) || hh,
                fill: "transparent",
                isStatic: !0,
                className: "check-icon static",
                height: 20
            }), r("span", null, x)) : r(Ke, {
                className: $("subscribe-btn", {
                    "subscribe-btn--left": t === "left"
                }),
                href: this.getHref(b),
                localNavigation: !1,
                variant: b ? "themed-secondary" : "themed-primary",
                leftIcon: b ? r(wc, {
                    size: 20
                }) : null
            }, r("span", null, x))) : r(ht, {
                justifyContent: "center"
            }, r(li, {
                disabled: w || p,
                freeSignup: o,
                freeSignupEmail: i,
                expectTruncation: u,
                next: f ? window.location.href : null,
                pub: e,
                source: a || "subscribe-widget",
                submitButtonText: w ? "✓" : Ue(e, {
                    language: this.context.language
                }),
                useSubscribeLink: (m == null ? void 0 : m.isSubstack) || f,
                user: s,
                utm_campaign: m != null && m.isSubstack ? oe.reader2 : f ? oe.crossPost : null,
                onConfirmationRequired: (e == null ? void 0 : e.payments_state) === "enabled" ? () => null : void 0,
                onError: h,
                onPrepareData: d,
                onSuccess: A => this.onSignup(A)
            })))
        })))
    }
}
at(Hr, "contextType", vc);
const wet = (n, t) => r("div", {
        className: "subscription-widget-wrap"
    }, r("div", {
        className: "subscription-widget show-subscribe"
    }, r("div", {
        className: "preamble"
    }, r("p", {
        dangerouslySetInnerHTML: {
            __html: n.children[0].children[0].children[0].innerHTML
        }
    })), r(Hr, k({
        pub: t.pub,
        subscribeButtonAttrs: null,
        source: "subscribe-widget-preamble"
    }, t.props)))),
    vet = (n, t) => {
        try {
            const e = JSON.parse(jt(n.getAttribute("data-attrs")));
            if ([`${t.pub.base_url}/subscribe?`, `${t.pub.base_url}/subscribe?plan=founding`, Dt.CHECKOUT_URL, Dt.FOUNDING_CHECKOUT_URL].includes(e.url)) {
                const s = JSON.parse(jt(n.getAttribute("data-attrs")));
                return r(Hr, k({
                    pub: t.pub,
                    subscribeButtonAttrs: s
                }, t.props))
            }
        } catch (e) {
            console.error("Failed to parse button:", e)
        }
    },
    Cet = (n, {
        pub: t,
        props: {
            isStatic: e,
            post: s
        }
    }) => {
        try {
            const o = n.getAttribute("data-attrs");
            if (o) {
                const i = JSON.parse(jt(o));
                return e ? r(wl, {
                    label: i.label,
                    pub: t,
                    post: s,
                    duration: i.duration
                }) : r(yl, {
                    label: i.label,
                    pub: t,
                    post: s,
                    src: `/api/v1/audio/upload/${i.mediaUploadId}/src`,
                    duration: i.duration,
                    autoPlay: !1
                })
            }
        } catch (o) {
            console.error("Failed to parse audio:", o)
        }
    },
    xet = (n, {
        pub: t,
        props: {
            isStatic: e,
            post: s
        }
    }) => {
        try {
            const o = n.getAttribute("data-attrs");
            if (o) {
                const i = JSON.parse(jt(o));
                return e ? r(wl, {
                    label: i.label,
                    pub: t,
                    post: s,
                    duration: i.duration
                }) : r(yl, {
                    label: i.label,
                    pub: t,
                    post: s,
                    src: i.url,
                    duration: i.duration,
                    autoPlay: !1
                })
            }
        } catch (o) {
            console.error("Failed to parse audio:", o)
        }
    },
    Net = (n, {
        props: {
            isStatic: t
        }
    }) => {
        try {
            const e = n.getAttribute("data-attrs");
            if (e) {
                const {
                    name: s,
                    avatarUrl: o,
                    url: i
                } = JSON.parse(jt(e));
                return t ? r(vg, {
                    name: s,
                    avatarUrl: o,
                    url: i
                }) : r(Sg, {
                    name: s,
                    avatarUrl: o,
                    url: i
                })
            }
        } catch (e) {
            console.error("Failed to parse audio:", e)
        }
    },
    ket = n => {
        try {
            const t = JSON.parse(n.dataset.attrs).symbol;
            return t ? r(Ug, {
                symbol: t,
                prependSymbol: JSON.parse(n.dataset.attrs).prependSymbol,
                isStatic: JSON.parse(n.dataset.attrs).isStatic
            }) : r(it, null)
        } catch (t) {
            return r(it, null)
        }
    },
    Eet = (n, {
        pub: t,
        props: {
            isStatic: e,
            post: s
        }
    }) => {
        const {
            iString: o
        } = I18N.i({
            pub: t
        });
        try {
            if (e) {
                const i = n.getAttribute("data-attrs");
                if (i) {
                    const a = JSON.parse(jt(i)),
                        c = a == null ? void 0 : a.persistentExpression;
                    return c ? r("img", {
                        src: ph(c),
                        style: {
                            transform: "scale(0.5)"
                        },
                        "data-component-name": "LatexImg"
                    }) : r("p", null, o("Failed to render LaTeX expression — no expression found in email"))
                } else return r("p", null, o("Failed to render LaTeX expression — data attributes not found"))
            } else {
                const i = n.getAttribute("data-attrs"),
                    a = JSON.parse(jt(i)),
                    c = a == null ? void 0 : a.persistentExpression;
                return c ? r(ht, {
                    className: "latex-rendered",
                    justifyContent: "center",
                    flex: "grow",
                    paddingBottom: "4px",
                    paddingTop: "4px",
                    "data-component-name": "Latex"
                }, r(X, {
                    justifyContent: "center"
                }, r(Sm, {
                    inline: !1
                }, `\\(${c}\\)`))) : r("p", null, o("Failed to render LaTeX expression — no expression found"))
            }
        } catch (i) {
            return console.error("failed to render mathjax", i), r("p", null, o("Failed to render LaTeX expression — error"))
        }
    },
    Tet = n => {
        try {
            const t = JSON.parse(n.dataset.attrs),
                {
                    name: e,
                    id: s,
                    type: o,
                    url: i,
                    photo_url: a,
                    uuid: c,
                    isStatic: l
                } = t;
            return e ? r(ml, {
                name: e,
                id: s,
                type: o,
                url: i,
                photo_url: a,
                uuid: c,
                isStatic: l
            }) : r(it, null)
        } catch (t) {
            return r(it, null)
        }
    },
    Pet = (n, t) => {
        var e;
        try {
            const s = JSON.parse(jt(n.getAttribute("data-attrs")));
            return s != null && s.isEmail ? r("table", {
                className: "poll-embed poll-email",
                cellSpacing: "16px",
                width: "100%"
            }, r("tbody", null, r("tr", null, r("td", {
                align: "center"
            }, r(_et, {
                id: s.id,
                embeddedPolls: (e = t.props.dataForEmailRender) == null ? void 0 : e.embeddedPolls
            }))))) : r("div", {
                className: "poll-embed",
                dataAttrs: n.getAttribute("data-attrs")
            }, r(bet, {
                id: s.id,
                isEditor: !1,
                post: t.props.post,
                pub: t.pub,
                isVersionView: !!t.props.isVersionView
            }))
        } catch (s) {
            return console.log("Failed to parse poll:", s), r(it, null)
        }
    };

function Aet(n, {
    props: {
        isStatic: t
    }
}) {
    try {
        const e = n.getAttribute("data-attrs"),
            s = JSON.parse(jt(e));
        return !s.pub || !s.subdomain ? (console.error("could not deepPrepare communityChat, subdomain or pub missing from node"), r(it, null)) : r("div", {
            className: "community-chat",
            dataAttrs: e
        }, t ? r(Hm, k({}, s)) : r(jm, {
            pub: s.pub,
            subdomain: s.subdomain
        }))
    } catch (e) {
        return console.error("Failed to parse chat embed:", e), r(it, null)
    }
}

function Let(n, t) {
    const {
        props: {
            isStatic: e,
            is_freemail: s
        }
    } = t;
    try {
        const o = n.getAttribute("data-attrs"),
            i = JSON.parse(jt(o));
        return e ? r(ng, k({
            is_freemail: s
        }, i)) : r(eg, k({}, i))
    } catch (o) {
        return console.error("Failed to parse chat post embed:", o), r(it, null)
    }
}

function Iet(n, {
    props: {
        isStatic: t
    }
}) {
    try {
        const e = n.getAttribute("data-attrs"),
            s = JSON.parse(jt(e));
        return t ? r(dg, k({}, s)) : r(og, k({}, s))
    } catch (e) {
        return console.error("Failed to parse chat post embed:", e), r(it, null)
    }
}
const Oet = (n, t, e) => {
        var c;
        const s = n.id,
            [o, , i] = s.split("-"),
            a = (c = e.wrapper.querySelector(`#${o}-${i}`)) == null ? void 0 : c.nextElementSibling;
        return a ? (me() && (n.href = "javascript:void(0)"), r(Vd, {
            content: r("div", {
                className: "markup"
            }, zn(a, t, e)),
            className: "footnote-hovercard-target",
            layerClassName: "typography footnote-hovercard",
            as: "span"
        }, zn(n, t, e))) : zn(n, t, e)
    },
    Lt = (n, t) => r(zd, {
        language: t
    }, n),
    cr = (n, t, {
        shallow: e
    } = {}) => {
        var o, i, a, c;
        if (n.nodeName === "A" && (n.getAttribute("rel") || n.setAttribute("rel", (o = t.pub) != null && o.no_follow ? "nofollow ugc noopener" : "")), t.pub && n.nodeName === "P" && Nt(n, "button-wrapper")) {
            const l = vet(n, t);
            if (l) return l;
            const u = Ztt(n, t);
            if (u) return u
        }
        const s = ((i = t.pub) == null ? void 0 : i.language) || "en";
        return Nt(n, "subscription-widget-wrap") ? Lt(wet(n, t), s) : Nt(n, "cashtag-wrap") ? Lt(ket(n), s) : Nt(n, "mention-wrap") ? Lt(Tet(n), s) : t.pub && Nt(n, "native-audio-url-embed") ? Lt(xet(n, t), s) : t.pub && Nt(n, "native-audio-embed") ? Lt(Cet(n, t), s) : t.pub && Nt(n, "native-video-embed") ? Lt(Ktt(n, t), s) : t.pub && Nt(n, "meeting-embed") ? Lt(Net(n, t), s) : Nt(n, "poll-embed") ? Lt(Pet(n, t), s) : Nt(n, "recipe-embed") ? Lt(set(n, t), s) : Nt(n, "image-gallery-embed") ? Lt(eet(n, t), s) : Nt(n, "image3") ? Lt(tet(n, t), s) : Nt(n, "directMessage") ? Lt(net(n, t), s) : Nt(n, "latex-rendered") ? Lt(Eet(n, t)) : Nt(n, "community-chat") ? Lt(Aet(n, t), s) : Nt(n, "community-post") ? Lt(Let(n, t), s) : Nt(n, "digest-post-embed") ? Lt(Xtt(n, t), s) : Nt(n, "comment") && !Nt(n, "template-comment") ? Lt(Iet(n, t), s) : Nt(n, "referrals-tier-card") ? Lt(Qtt(n, t), s) : ((c = (a = t.props) == null ? void 0 : a.post) != null && c.id && Nt(n, "footnote") && (n.id && (n.id += `-${t.props.post.id}`), n.href && (n.href += `-${t.props.post.id}`)), Nt(n, "footnote-anchor") ? Lt(Oet(n, cr, t), s) : e ? null : zn(n, cr, t))
    },
    Met = function(n) {
        const t = {},
            e = Array.prototype.slice.call(n);
        for (const {
                name: s,
                value: o
            } of e) t[s] = o;
        return t
    },
    Det = (n, t) => {
        let e = 0;
        return function() {
            const s = [].slice.call(arguments, 0),
                o = ++e > t;
            o && console.error("Too many post nodes to recurse", {
                postId: s[2].props.post.id,
                depth: e
            });
            const i = n.apply(null, [...s, ...o ? [!0] : []]);
            return e--, i
        }
    };

function Ret(n, t, e, s) {
    var a, c, l;
    const o = $("header-with-anchor-widget", t.className),
        i = e.children.length ? Array.prototype.map.call(e.childNodes, u => cr(u, s)) : [e.textContent];
    return r(n, V(k({}, t), {
        className: o
    }), ...i, r(ret, {
        text: e.textContent,
        pub: s == null ? void 0 : s.pub,
        post: (a = s == null ? void 0 : s.props) == null ? void 0 : a.post,
        offsetTop: !0,
        isAboutPage: (l = (c = s == null ? void 0 : s.props) == null ? void 0 : c.isAboutPage) != null ? l : !1
    }))
}
const $et = (n, t, e, s) => {
        var u, d;
        if (!n) throw new Error("Empty node, cannot preactify!");
        const o = n.nodeType === 3 ? "span" : n.nodeType === 8 ? "x_preact_compatible_html_comment_x" : n.tagName.toLowerCase(),
            i = n.nodeType !== 1 ? {} : Met(n.attributes),
            a = n.children && n.children.length > 0 ? null : n.textContent;
        if (s) return r(o, V(k({}, i), {
            dangerouslySetInnerHTML: {
                __html: n.innerHTML
            }
        }));
        if (o === "script" && n.innerHTML === Dm) return r(o, V(k({}, i), {
            dangerouslySetInnerHTML: {
                __html: n.innerHTML
            }
        }));
        const c = !!((u = n.parentElement) != null && u.getAttribute("data-prose-mirror-wrapper"));
        if (((d = e == null ? void 0 : e.pub) == null ? void 0 : d.type) !== "rss" && c && ["h1", "h2", "h3", "h4"].includes(o) && !n.className) return Ret(o, i, n, e);
        if (a) return r(o, i, a);
        const l = t(n, e, {
            shallow: !0
        });
        return l || r(o, i, ...Array.prototype.map.call(n.childNodes, h => t(h, e)))
    },
    zn = Det($et, 2500);

function qet(n, t, e = {}) {
    const s = document.createElement("div");
    return s.setAttribute("data-prose-mirror-wrapper", 1), s.innerHTML = n, Array.prototype.map.call(s.childNodes, o => zn(o, cr, {
        wrapper: s,
        pub: t,
        props: e
    }))
}
const Bet = "_button_1dtnr_1",
    Uet = "_popover_1dtnr_18",
    Fet = "_popoverButtons_1dtnr_29",
    jet = "_icon_1dtnr_34",
    Het = "_disabled_1dtnr_40",
    Vet = "_explainer_1dtnr_44",
    zet = "_dismissExplainer_1dtnr_50",
    Wet = "_mobileFooter_1dtnr_57",
    qt = {
        button: Bet,
        popover: Uet,
        popoverButtons: Fet,
        icon: jet,
        disabled: Het,
        explainer: Vet,
        dismissExplainer: zet,
        mobileFooter: Wet
    },
    ic = 2048;

function Get(n) {
    var s, o, i, a;
    const {
        nuxModal: t,
        showRestackNux: e
    } = lp("post");
    return r(it, null, t, ((a = (i = (o = (s = n.selection) == null ? void 0 : s.text) == null ? void 0 : o.split) == null ? void 0 : i.call(o, " ")) == null ? void 0 : a.length) >= 3 && r(Jet, k({
        onShare: e
    }, n)))
}

function Jet({
    pub: n,
    post: t,
    selection: e,
    onShare: s,
    onClose: o,
    userInteractionDisabled: i,
    selectingTextForQuote: a
}) {
    var A, M, O;
    const c = Ln(),
        l = hr(),
        u = si(),
        d = In(),
        h = "has_dismissed_restack_selection_explainer",
        [p] = Bp(h),
        f = $p();
    lt(() => {
        p === "true" && (f != null && f.userSettings) && !f.userSettings.has_seen_select_to_restack_tooltip_nux && f.changeSetting("has_seen_select_to_restack_tooltip_nux", !0)
    }, []);
    const g = !t.is_draft && !!c;
    t.is_draft;
    const m = () => K(this, null, function*() {
            const T = yield br("/api/v1/post_selection", {
                method: "PUT",
                json: {
                    postId: t.id,
                    publication_id: n.id,
                    startParagraph: e.startParagraph,
                    endParagraph: e.endParagraph,
                    startOffset: e.startOffset,
                    endOffset: e.endOffset
                }
            });
            if (T instanceof Error) throw T;
            return T.selection.id
        }),
        _ = () => K(this, null, function*() {
            const T = yield m();
            return Ft(n, t, {
                urlParams: {
                    r: c ? c.id.toString(36) : null,
                    selection: T,
                    utm_campaign: oe.postSelection,
                    utm_medium: Et.web
                }
            })
        }),
        y = () => K(this, null, function*() {
            if (!g) return;
            o(), W(G.RESTACK_SELECTION_CLICKED, {
                post_id: t.id
            });
            let T;
            try {
                T = yield _()
            } catch (C) {
                l.popToast(N => r(ce, V(k({}, N), {
                    text: "Failed to generate quote"
                })));
                return
            }
            const v = yield u.open({
                restackUrl: T
            });
            v instanceof Error ? (console.error(v), l.popToast(C => r(ce, V(k({}, C), {
                text: "Failed to post"
            })))) : (s(), l.popToast(C => r(ce, V(k({}, C), {
                text: "Note sent",
                cta: "View",
                href: gr()
            }))))
        }),
        b = () => K(this, null, function*() {
            W(G.VIDEO_QUOTE_TEXT_SELECTED, {
                post_id: t.id,
                selection_id: e.id
            }), Se(fh(n, t.id, {
                selectionForQuote: e.text
            }), {
                local_navigation: !1
            })
        }),
        S = T => K(this, null, function*() {
            if (c) return;
            o(), W(G.RESTACK_SELECTION_CLICKED, {
                post_id: t.id
            });
            let v;
            try {
                v = yield m()
            } catch (R) {}
            const C = Ce(document.location.href, {
                    selection: v
                }),
                N = Me({
                    redirect: C
                });
            Se(N, {
                local_navigation: !1,
                event: T
            })
        });
    lt(() => (window.addEventListener("scroll", o, {
        passive: !0,
        capture: !0,
        once: !0
    }), () => {
        window.removeEventListener("scroll", o, {
            capture: !0,
            once: !0
        })
    }), [o]);
    const x = (f == null ? void 0 : f.userSettings) && !((A = f.userSettings) != null && A.has_seen_select_to_restack_tooltip_nux) && !a,
        w = x ? 156 : 40,
        P = () => {
            f.changeSetting("has_seen_select_to_restack_tooltip_nux", !0)
        };
    return r(X, {
        style: {
            top: Oc() ? e.y + e.height + 8 : e.y - w - 8,
            left: e.rect.x + e.rect.width / 2,
            transform: "translateX(-50%)",
            pointerEvents: i ? "none" : "auto",
            maxWidth: 240
        },
        justifyContent: "center",
        className: qt.popover,
        shadow: "md",
        radius: "md"
    }, r(X, {
        className: $(qt.popoverButtons, d && qt.isMobile),
        radius: "md",
        padding: x ? 8 : 4,
        gap: 8
    }, x && r(Yet, {
        onDismiss: P
    }), r(lr, {
        onClick: a ? b : c ? y : S,
        disabled: !g && !!c || a && ((M = e.text) == null ? void 0 : M.length) > ic,
        isExplainer: x
    }, !a && r(Pn, {
        className: $(qt.icon, !g && qt.disabled)
    }), r(I.B4, {
        color: g ? "bg-light" : "secondary",
        weight: "medium"
    }, a ? ((O = e.text) == null ? void 0 : O.length) > ic ? "Selection too long" : "Use this text" : g ? "Restack quote" : c ? t.is_draft ? "Cannot quote a draft" : n != null && n.invite_only ? "Cannot quote on invite-only publication" : ["only_paid", "founding"].includes(t == null ? void 0 : t.audience) ? "Cannot quote paid post" : "Cannot quote this post" : "Sign in to restack quote"))))
}

function lr(e) {
    var s = e,
        {
            isExplainer: n
        } = s,
        t = te(s, ["isExplainer"]);
    return r(Cc, k({
        className: $(qt.button, n && qt.explainerButton),
        resetCss: !0
    }, t))
}

function Yet({
    onDismiss: n
}) {
    return r(X, {
        className: qt.explainer,
        radius: "sm",
        paddingX: 16,
        paddingY: 8,
        gap: 4
    }, r(Cc, {
        resetCss: !0,
        className: qt.dismissExplainer,
        onClick: n
    }, r(ri, {
        size: 16,
        stroke: "var(--color-secondary)"
    })), r(I.B4, {
        color: "bg-light",
        weight: "medium"
    }, "New: Quote this post"), r(I.B5, {
        size: 14,
        color: "secondary"
    }, "Share your favorite part of this post as", " ", r(Ks, {
        color: "secondary",
        decoration: "underline",
        href: gr(),
        target: "_blank"
    }, "a note"), "."))
}
const Ket = (n, t = 500) => {
        const e = At(null),
            s = At({
                x: 0,
                y: 0
            }),
            o = At(!1),
            i = Mt(l => {
                s.current = {
                    x: l.touches[0].clientX,
                    y: l.touches[0].clientY
                }, e.current = window.setTimeout(() => {
                    o.current = !0, n()
                }, t)
            }, [n, t]),
            a = Mt(() => {
                e.current !== null && clearTimeout(e.current), o.current = !1
            }, []),
            c = Mt(l => {
                const u = {
                        x: l.touches[0].clientX,
                        y: l.touches[0].clientY
                    },
                    d = Math.abs(u.x - s.current.x),
                    h = Math.abs(u.y - s.current.y),
                    p = 10;
                (d > p || h > p) && (e.current !== null && clearTimeout(e.current), o.current = !1)
            }, []);
        return lt(() => () => {
            e.current !== null && clearTimeout(e.current)
        }, []), {
            onTouchStart: i,
            onTouchEnd: a,
            onTouchMove: c,
            longPressActivated: o
        }
    },
    Xet = "_root_13oyx_1",
    Qet = "_large_13oyx_16",
    Zet = "_image_13oyx_20",
    tnt = "_imageLoading_13oyx_21",
    ent = "_stories_13oyx_34",
    nnt = "_small_13oyx_35",
    snt = "_square_13oyx_62",
    rnt = "_link_13oyx_87",
    ont = "_download_13oyx_96",
    int = "_secondaryBorder_13oyx_127",
    ant = "_spinner_13oyx_140",
    cnt = "_text_13oyx_144",
    be = {
        root: Xet,
        large: Qet,
        image: Zet,
        imageLoading: tnt,
        stories: ent,
        small: nnt,
        square: snt,
        link: rnt,
        download: ont,
        secondaryBorder: int,
        spinner: ant,
        text: cnt
    },
    lnt = ({
        pub: n,
        post: t,
        style: e,
        text: s,
        selectionId: o,
        size: i,
        editButton: a,
        wrapperClassName: c
    }) => {
        const {
            img: l,
            imgDownload: u,
            shareData: d,
            useNativeShare: h
        } = up({
            shareTitle: "Share this post",
            shareText: t.title,
            shareUrl: Ft(n, t),
            imageDownloadUrl: ho(n, t, o, e, `${s}${e.aspectRatio?` - ${e.aspectRatio}`:""}`),
            imageUrl: ho(n, t, o, e),
            imageUrlSameOrigin: mh(n, t, o, e)
        }), p = Mt(() => {
            W(G.SHARE_SELECTION_IMAGE_DOWNLOADED, {
                post_id: t.id,
                selection_id: o,
                type: s,
                aspect_ratio: e.aspectRatio,
                interaction: "longpress"
            })
        }, [t.id, o, s, e.aspectRatio]), f = Ket(p), g = Mt(_ => K(void 0, null, function*() {
            if (f.longPressActivated.current) {
                _.preventDefault();
                return
            }
            if (W(G.SHARE_SELECTION_IMAGE_DOWNLOADED, {
                    post_id: t.id,
                    selection_id: o,
                    type: s,
                    aspect_ratio: e.aspectRatio,
                    interaction: "click"
                }), h && d) try {
                yield navigator.share(d)
            } catch (y) {}
        }), [f.longPressActivated, t.id, o, s, e.aspectRatio, h, d]), m = Mt(() => {
            W(G.IMAGE_CONTEXT_MENU_CLICKED, {
                post_id: t.id,
                clicked_from: "share_selection",
                selection_id: o,
                type: s,
                aspect_ratio: e.aspectRatio,
                interaction: "click"
            })
        }, [t.id, o, s, e.aspectRatio]);
        return r("a", k({
            href: me() ? void 0 : u,
            alt: "Download Image",
            download: !0,
            className: $(be.link, c),
            target: "_blank",
            onClick: g,
            onContextMenu: m
        }, f), r("div", {
            className: $(be.root, e.aspectRatio === "stories" ? be.stories : be.square, i && be[i])
        }, me() && a, !me() && r("div", {
            className: be.download
        }, r(dp, {
            stroke: "white",
            fill: "none"
        })), !l && r("div", {
            className: $(be.image, be.imageLoading),
            alt: "Loading"
        }, r(xm, {
            className: be.spinner
        })), l && r("img", {
            src: l,
            className: be.image
        })))
    },
    unt = "_root_wog55_1",
    dnt = "_imageSmall_wog55_4",
    hnt = "_imageWrapper_wog55_9",
    pnt = "_modalWithFooter_wog55_20",
    fnt = "_actionSheetMenu_wog55_21",
    mnt = "_actionSheetBody_wog55_29",
    gnt = "_modalBody_wog55_39",
    bnt = "_mediaAssetContainer_wog55_43",
    _nt = "_safeAreaInsetPaddingBottom_wog55_64",
    ynt = "_actionSheetContainer_wog55_68",
    wnt = "_actionSheetItems_wog55_72",
    vnt = "_edit_wog55_77",
    we = {
        root: unt,
        imageSmall: dnt,
        imageWrapper: hnt,
        modalWithFooter: pnt,
        actionSheetMenu: fnt,
        actionSheetBody: mnt,
        modalBody: gnt,
        mediaAssetContainer: bnt,
        safeAreaInsetPaddingBottom: _nt,
        actionSheetContainer: ynt,
        actionSheetItems: wnt,
        edit: vnt
    },
    Snt = ({
        pub: n,
        post: t,
        selectionId: e,
        style: s,
        showText: o = !1,
        size: i,
        editButton: a
    }) => {
        const c = yf(s.aspectRatio);
        return r("div", {
            className: $(we.root, we.imageWrapper, i && we[i])
        }, r(lnt, {
            pub: n,
            post: t,
            style: s,
            text: c,
            selectionId: e,
            size: i,
            editButton: a,
            wrapperClassName: we.imageWrapper
        }), o && c && r(I.Meta, {
            paddingTop: i === "small" ? 8 : 16
        }, c))
    },
    Cnt = ({
        pub: n,
        post: t,
        isOpen: e,
        onClose: s,
        selection: o,
        selectionId: i,
        setSelectionId: a,
        themeVariables: c
    }) => {
        const {
            iString: l
        } = ot(), [u, d] = D(!1), [h, p] = D("stories"), f = (t == null ? void 0 : t.cover_image) || (n == null ? void 0 : n.cover_photo_url), [g, m] = D(f ? "image" : "accent"), [_, y] = D(!1), b = Ln(), S = hr(), x = me({
            checkFirst4: !0
        }), {
            result: w
        } = wn({
            pathname: `/api/v1/publication/${n.id}/theme`,
            auto: o && t && e && !c,
            cacheTtl: 1 / 0,
            initialResult: c,
            deps: [o, t, e, c]
        }), P = e && (!!i || u) && !!w;
        lt(() => {
            P && (t != null && t.id) && W(G.SHARE_SELECTION_MODAL_OPENED, {
                post_id: t.id
            })
        }, [P, t]), lt(() => {
            if (!o || !t || !e) return;
            (() => K(void 0, null, function*() {
                d(!0);
                try {
                    const B = yield br("/api/v1/post_selection", {
                        method: "PUT",
                        json: {
                            postId: t.id,
                            publication_id: n.id,
                            startParagraph: o.startParagraph,
                            endParagraph: o.endParagraph,
                            startOffset: o.startOffset,
                            endOffset: o.endOffset
                        }
                    });
                    if (d(!1), B instanceof Error) throw B;
                    a(B.selection.id.toString())
                } catch (B) {
                    alert(Mc(B)), d(!1), s()
                }
            }))()
        }, [n, t, o, e, a, s]);
        const A = (q, B) => {
                const Y = If(null, {
                    pub: n,
                    post: t,
                    selectionId: i,
                    user: b || void 0,
                    medium: "web",
                    utm_campaign: oe.postShareSelection
                });
                Of(q, B, {
                    shareUrl: Y,
                    post: t,
                    pub: n,
                    selectionId: i,
                    utm_campaign: oe.postShareSelection
                })
            },
            M = () => K(void 0, null, function*() {
                A("copy", q => (Ic(q), S.popToast(B => r(ce, V(k({}, B), {
                    text: l("Link copied to clipboard")
                }))), !1))
            }),
            O = () => K(void 0, null, function*() {
                A("facebook", q => Xe("https://www.facebook.com/sharer/sharer.php", {
                    u: q
                }))
            }),
            T = () => K(void 0, null, function*() {
                t && A("twitter", q => gh({
                    url: q,
                    text: t.title
                }))
            }),
            v = () => K(void 0, null, function*() {
                A("linkedin", q => Xe("https://www.linkedin.com/sharing/share-offsite/", {
                    url: q
                }))
            }),
            C = () => {
                if (!w) return {
                    aspectRatio: h
                };
                switch (g) {
                    case "image":
                        return {
                            aspectRatio: h,
                            textColor: "#ffffff",
                            bgImage: !0
                        };
                    case "accent":
                        return {
                            aspectRatio: h,
                            bgColor: w.background_pop,
                            textColor: w.print_on_pop
                        };
                    case "primary":
                    default:
                        return {
                            aspectRatio: h,
                            bgColor: w.web_bg_color || w.cover_bg_color,
                            textColor: w.print_on_web_bg_color || w.cover_print_primary || "#1a1a1a"
                        }
                }
            },
            N = () => K(void 0, null, function*() {
                const q = C(),
                    B = `Share Selection - ${q.aspectRatio}`;
                W(G.SHARE_SELECTION_IMAGE_DOWNLOADED, {
                    post_id: t == null ? void 0 : t.id,
                    selection_id: i,
                    type: B,
                    aspect_ratio: h,
                    interaction: "click"
                });
                const Y = document.createElement("a");
                Y.href = t && i ? ho(n, t, i, q, B) : "", Y.download = `Share Selection - ${h}`, Y.target = "_blank", Y.rel = "noopener noreferrer", Y.style.display = "none", document.body.appendChild(Y), Y.click(), document.body.removeChild(Y)
            }),
            R = () => {
                y(!1)
            },
            J = r(Ze, {
                className: we.actionSheetMenu,
                overflow: "hidden",
                renderOverReactLaagPortal: !0,
                fullscreenMobile: !0,
                isOpen: _,
                position: "bottom",
                onClose: R
            }, r(Qs, {
                title: l("Edit image"),
                includeClose: !0,
                onClose: R
            }), r(ls, {
                className: we.actionSheetBody
            }, r(ac, {
                assetStyle: C(),
                aspectRatio: h,
                loadingSelection: u,
                post: t,
                pub: n,
                themeVariables: w,
                setAspectRatio: p,
                assetTheme: g,
                setAssetTheme: m,
                selectionId: i,
                setSelectionId: a
            }))),
            j = r(ue, {
                rounded: !0,
                priority: "secondary",
                className: we.edit,
                onClick: q => {
                    q.stopPropagation(), y(!0), W(G.SHARE_SELECTION_EDIT_MODAL_OPENED, {
                        post_id: t == null ? void 0 : t.id
                    })
                }
            }, l("Edit"));
        return r(Ze, {
            isOpen: P,
            onClose: s,
            width: 630,
            fullscreenMobile: !0,
            className: we.modalWithFooter
        }, J, r(Qs, {
            title: l("Share quote"),
            includeClose: !0,
            onClose: s
        }), r(Gt, null, r(Fe, {
            paddingY: 20
        })), r(ac, {
            assetStyle: C(),
            aspectRatio: h,
            loadingSelection: u,
            post: t,
            pub: n,
            themeVariables: w,
            setAspectRatio: p,
            assetTheme: g,
            setAssetTheme: m,
            selectionId: i,
            setSelectionId: a,
            editActionSheet: j
        }), r(Gt, null, r(Fe, null)), r(Gt, {
            className: we.safeAreaInsetPaddingBottom
        }, r(ht, {
            padding: 16,
            gap: 8,
            justifyContent: "center"
        }, r(hn, {
            fill: "outline",
            rounded: !1,
            onClick: M,
            disabled: !i
        }, r(Zs, {
            height: 20,
            width: 20
        })), r(hn, {
            fill: "outline",
            rounded: !1,
            onClick: T,
            disabled: !i
        }, r(hp, {
            height: 20,
            width: 20
        })), r(hn, {
            fill: "outline",
            rounded: !1,
            onClick: O,
            disabled: !i
        }, r(pp, {
            height: 20,
            width: 20
        })), r(hn, {
            fill: "outline",
            rounded: !1,
            onClick: v,
            disabled: !i
        }, r(Lf, {
            height: 20,
            width: 20
        })), !x && r(ue, {
            grow: !0,
            disabled: !i,
            onClick: N,
            leftIcon: r(ci, {
                stroke: "#404040",
                size: 20
            })
        }, l("Download")))))
    },
    ac = ({
        assetStyle: n,
        aspectRatio: t,
        loadingSelection: e,
        post: s,
        pub: o,
        themeVariables: i,
        setAspectRatio: a,
        assetTheme: c,
        setAssetTheme: l,
        selectionId: u,
        editActionSheet: d
    }) => {
        const {
            iString: h
        } = ot(), p = [], f = (s == null ? void 0 : s.cover_image) || (o == null ? void 0 : o.cover_photo_url);
        f && p.push("image"), i.background_pop && p.push("accent"), p.push("primary");
        const g = me({
            checkFirst4: !0
        });
        return r(it, null, g && r(ht, {
            justifyContent: "center",
            alignItems: "center",
            paddingTop: d ? 8 : 0,
            paddingBottom: 8
        }, r(I.B4, {
            color: "secondary"
        }, h("Long press to download image"))), r(X, {
            justifyContent: "center",
            flex: "grow",
            className: we.mediaAssetContainer,
            paddingBottom: 16
        }, s && u && !e && r(Snt, {
            pub: o,
            post: s,
            selectionId: u,
            style: n,
            size: "large",
            editButton: d
        })), (!g || !d) && r(ht, {
            gap: 24,
            paddingX: {
                desktop: 24,
                mobile: 0
            },
            paddingBottom: {
                desktop: 24,
                mobile: 0
            }
        }, r(X, null, r(I.B5, {
            weight: "bold",
            color: "primary"
        }, h("Background")), r(ht, {
            paddingY: 8
        }, r(ht, {
            gap: 8
        }, p.map(m => r(gf, {
            value: m,
            isSelected: m === c,
            onClick: () => l(m),
            coverImageUrl: f,
            themeVariables: i
        }))))), r(X, null, r(I.B5, {
            weight: "bold",
            color: "primary"
        }, h("Aspect ratio")), r(ht, {
            paddingY: 8
        }, r(ht, {
            gap: 8
        }, bf.map(m => r(_f, {
            value: m,
            isSelected: m === t,
            onClick: () => a(m)
        })))))))
    };

function xnt({
    post: n,
    pub: t,
    selection: e,
    onClose: s,
    themeVariables: o,
    userInteractionDisabled: i
}) {
    var f, g, m;
    const [a, c] = D(!1), [l, u] = D(), d = ((m = (g = (f = e == null ? void 0 : e.text) == null ? void 0 : f.split) == null ? void 0 : g.call(f, " ")) == null ? void 0 : m.length) || 0, p = e && d >= 3 && !n.is_draft && !(t != null && t.invite_only) ? r(Nnt, {
        selection: e,
        onClose: s,
        userInteractionDisabled: i,
        onShowSelectionModal: c,
        post: n,
        pub: t
    }) : null;
    return r(it, null, p, r(Cnt, {
        selection: e,
        pub: t,
        post: n,
        isOpen: a,
        onClose: () => c(!1),
        selectionId: l,
        setSelectionId: u,
        themeVariables: o
    }))
}

function Nnt({
    selection: n,
    onClose: t,
    userInteractionDisabled: e,
    onShowSelectionModal: s,
    post: o,
    pub: i
}) {
    const {
        iString: a
    } = ot(), c = In(), l = Ln(), u = si(), d = hr(), h = !o.is_draft && !!l, [p, f] = D(!1), [g, m] = D(-1);
    lt(() => (window.addEventListener("scroll", t, {
        passive: !0,
        capture: !0,
        once: !0
    }), () => {
        window.removeEventListener("scroll", t, {
            capture: !0
        })
    }), [t, s]), lt(() => {
        const x = () => {
            const P = window.innerHeight - (n.y + n.height) - (c ? 57 : 0),
                A = 96,
                M = P < A;
            m(M ? n.y - A - 12 : n.y + n.height + 12)
        };
        return window.addEventListener("resize", x), x(), () => {
            window.removeEventListener("resize", x)
        }
    }, [n, c]);
    const _ = () => {
            s(!0)
        },
        y = () => K(this, null, function*() {
            f(!0);
            try {
                const x = yield br("/api/v1/post_selection", {
                    method: "PUT",
                    json: {
                        postId: o.id,
                        publication_id: i.id,
                        startParagraph: n.startParagraph,
                        endParagraph: n.endParagraph,
                        startOffset: n.startOffset,
                        endOffset: n.endOffset
                    }
                });
                if (f(!1), x instanceof Error) throw x;
                return x.selection.id
            } catch (x) {
                alert(Mc(x)), f(!1)
            }
        }),
        b = () => K(this, null, function*() {
            const x = yield y();
            if (W(G.RESTACK_SELECTION_CLICKED, {
                    post_id: o.id
                }), !l) {
                const A = Ce(document.location.href, {
                        action: "restack-comment",
                        selection: x
                    }),
                    M = Me({
                        redirect: A
                    });
                Se(M, {
                    local_navigation: !1,
                    event
                });
                return
            }
            const w = Ft(i, o, {
                urlParams: {
                    r: l ? l.id.toString(36) : null,
                    selection: x,
                    utm_campaign: oe.postShareSelection,
                    utm_medium: Et.web
                }
            });
            (yield u.open({
                restackUrl: w
            })) instanceof Error ? d.popToast(A => r(ce, V(k({}, A), {
                text: "Failed to post"
            }))) : d.popToast(A => r(ce, V(k({}, A), {
                text: "Note sent",
                cta: "View",
                href: gr()
            })))
        }),
        S = !h && !p && !!l;
    return g < 0 ? null : r(X, {
        style: {
            top: g,
            left: n.rect.x + n.rect.width / 2,
            transform: "translateX(-50%)",
            pointerEvents: e ? "none" : "auto",
            maxWidth: 240
        },
        justifyContent: "center",
        className: qt.popover,
        shadow: "md",
        radius: "md"
    }, r(X, {
        className: $(qt.popoverButtons, c && qt.isMobile),
        radius: "md",
        padding: 4,
        gap: 8
    }, r(lr, {
        onClick: _,
        isExplainer: !1
    }, r(ei, {
        className: qt.icon
    }), r(I.B4, {
        color: "bg-light",
        weight: "medium"
    }, a("Share quote"))), !i.hide_post_restacks && r(lr, {
        onClick: b,
        isExplainer: !1,
        disabled: S
    }, r(Pn, {
        className: $(qt.icon, !h && qt.disabled)
    }), r(I.B4, {
        color: h ? "bg-light" : "secondary",
        weight: "medium"
    }, h ? a("Restack quote") : l ? o.is_draft ? a("Cannot quote a draft") : i != null && i.invite_only ? a("Cannot quote on invite-only publication") : ["only_paid", "founding"].includes(o == null ? void 0 : o.audience) ? a("Cannot quote paid post") : a("Cannot quote this post") : a("Sign in to restack quote")))))
}
const cc = `
:is(
  div.body.markup, .pullquote, blockquote, li, caption, .footnote-content
) > :is(
  h1, h2, h3, h4, h5, h6, p:not(.button-wrapper)
)
`,
    knt = ".image-link.image2";
class ur extends he {
    constructor(e, s) {
        super(e, s);
        at(this, "state", {
            selection: null,
            urlSelection: null,
            selectedImgIndex: null,
            selectionUserInteractionDisabled: !1,
            shouldUseSelectionV2Popover: !1
        });
        at(this, "onBodyMouseDown", () => {
            this.setState({
                selectionUserInteractionDisabled: !0
            })
        });
        at(this, "onMouseUp", () => {
            this.setState((e, s) => e.selectionUserInteractionDisabled ? (e.selection && s.trackSelection && W(G.POST_TEXT_SELECTED, {
                post_id: s.post.id,
                post_audience: s.post.audience,
                post_type: s.post.type
            }), {
                selectionUserInteractionDisabled: !1
            }) : null)
        });
        at(this, "onSelectionChange", cm(() => {
            const e = this.getSelectionState();
            if (e) {
                const s = this.shouldShowShareSelectionPopover();
                this.setState({
                    selection: e,
                    shouldUseSelectionV2Popover: s
                })
            } else this.state.selection && this.setState({
                selection: null
            })
        }, 100));
        at(this, "onDocumentClick", e => {
            const s = e.target.closest(".image-link.image2");
            if (s && this.originalImageState) {
                const o = s.querySelector("img"),
                    i = this.originalImageState.findIndex(a => a.src === o.src);
                if (i >= 0) {
                    e.preventDefault(), this.setState({
                        selectedImgIndex: i
                    });
                    return
                }
            }
            if (!this.props.skipTrackClick) this.onLinkClick(e);
            else return null
        });
        at(this, "clearActiveSelection", () => {
            this.setState({
                selection: null
            })
        });
        at(this, "closeImageViewerModal", () => {
            this.setState({
                selectedImgIndex: null
            })
        });
        at(this, "shouldShowShareSelectionPopover", () => {
            let e;
            return typeof window != "undefined" && (e = new URLSearchParams(window.location.search).get("selectQuote") === "true"), !e
        });
        at(this, "memoizedDeepPrepareDocumentBody", qf(qet, Mf));
        this.body = ae()
    }
    componentDidMount() {
        return K(this, null, function*() {
            const e = Array.from(this.body.current.querySelectorAll(cc));
            this.originalParagraphState = e.map(u => ({
                text: u.textContent
            }));
            const s = new URL(window.location).searchParams.get("img"),
                o = new URL(window.location).searchParams.get("cutoffElementIndex");
            let i = Array.from(this.body.current.querySelectorAll(knt));
            i = i.map(u => {
                const d = u.querySelector("img"),
                    h = JSON.parse(d.getAttribute("data-attrs")),
                    p = h.width / h.height,
                    f = h.resizeWidth ? h.resizeWidth / p : h.height,
                    g = h.resizeWidth ? h.resizeWidth / f : p;
                return {
                    element: u,
                    image: d,
                    attrs: h,
                    extraAttrs: {
                        imageRatio: p,
                        resizeHeight: f,
                        resizeRatio: g
                    }
                }
            });
            let a = 0;
            if (s) {
                const u = i.find(d => d.attrs.src === s);
                u && (a = u.image.getBoundingClientRect().top - 65)
            } else if (o) {
                const u = this.body.current.querySelector(`*:nth-child(${o})`);
                u && u.scrollIntoView()
            }
            const c = 240,
                l = 4;
            if (i = i.filter(u => na(u.image.src) === na(u.element.href)), i = i.filter(u => u.attrs.height > c && u.extraAttrs.resizeHeight > c), i = i.filter(u => u.extraAttrs.imageRatio < l && u.extraAttrs.resizeRatio < l), this.originalImageState = i.map(u => {
                    var f;
                    const d = u.image.src;
                    let h = null;
                    const p = u.element.parentElement;
                    return p.tagName === "FIGURE" && (h = (f = p.querySelector(":scope > figcaption")) == null ? void 0 : f.textContent), {
                        src: d,
                        attrs: u.attrs,
                        caption: h
                    }
                }), s) {
                window.scrollTo({
                    top: a
                });
                const u = this.originalImageState.findIndex(d => d.attrs.src === s);
                u >= 0 && this.setState({
                    selectedImgIndex: u
                })
            }
            typeof window != "undefined" && (document.addEventListener("selectionchange", this.onSelectionChange), document.addEventListener("mouseup", this.onMouseUp), window.addEventListener("mouseup", this.onMouseUp))
        })
    }
    componentWillUnmount() {
        typeof window != "undefined" && (document.removeEventListener("selectionchange", this.onSelectionChange), document.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mouseup", this.onMouseUp))
    }
    shouldComponentUpdate(e, s) {
        return this.props.html !== e.html || this.state.selectedImgIndex !== s.selectedImgIndex || this.state.selection !== s.selection || this.state.selectionUserInteractionDisabled !== s.selectionUserInteractionDisabled || this.state.selectingTextForQuote !== s.selectingTextForQuote
    }
    onLinkClick(e) {
        if (!e.target.nodeName || e.target.nodeName !== "A" && e.target.parentNode.nodeName !== "A") return;
        const s = e.target.nodeName === "A" ? e.target : e.target.parentNode;
        if (W(G.POST_LINK_CLICKED, {
                post_id: this.props.post.id,
                publication_id: this.props.post.publication_id,
                url: s.href
            }), window.location.host === s.host) {
            const o = bh(s.href);
            o !== s.href && Se(o, {
                local_navigation: !1,
                event: e
            });
            return
        }
        e.preventDefault(), _h(s.href)
    }
    getSelectionState() {
        if (this.props.trackSelection && window.getSelection) try {
            const e = window.getSelection();
            if (!e || e.isCollapsed || e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset) return;
            const s = this.findParentParagraph(e.anchorNode);
            if (!s) return;
            const o = this.findParentParagraph(e.focusNode);
            if (!o) return;
            const i = Array.from(this.body.current.querySelectorAll(cc)),
                a = i.findIndex(p => p.isSameNode(s));
            if (a === -1) return;
            const c = i.findIndex(p => p.isSameNode(o));
            if (c === -1) return;
            const l = this.getCharacterOffsetParagraph(s, e.anchorNode, e.anchorOffset);
            if (l === null) return;
            const u = this.getCharacterOffsetParagraph(o, e.focusNode, e.focusOffset);
            if (u === null) return;
            const d = a > c || a === c && l > u,
                h = e.getRangeAt(0).getBoundingClientRect();
            return {
                startParagraph: d ? c : a,
                endParagraph: d ? a : c,
                startOffset: d ? u : l,
                endOffset: d ? l : u,
                y: h.y,
                height: h.height,
                rect: h,
                text: e.toString()
            }
        } catch (e) {
            console.error("Failed to parse selection:", e)
        }
    }
    findParentParagraph(e) {
        return e ? ["P", "H1", "H2", "H3", "H4", "H5", "H6"].includes(e.nodeName) ? e : this.findParentParagraph(e.parentNode) : null
    }
    isAncestorOf(e, s) {
        return e === null ? !1 : e.isSameNode(s) ? !0 : this.isAncestorOf(e.parentNode, s)
    }
    getCharacterOffsetParagraph(e, s, o) {
        var a;
        let i = o;
        for (let c = 0; c < e.childNodes.length; c++) {
            const l = e.childNodes[c];
            if (this.isAncestorOf(s, l)) return i;
            l.className !== "footnote-anchor" && (i += ((a = l.textContent) == null ? void 0 : a.length) || 0)
        }
        return i
    }
    shouldShowImageViewerModal() {
        const {
            selectedImgIndex: e
        } = this.state;
        return e != null
    }
    render(d) {
        var h = d,
            {
                children: e,
                html: s,
                pub: o,
                skipTrackClick: i,
                trackSelection: a,
                paywall: c,
                isAboutPage: l
            } = h,
            u = te(h, ["children", "html", "pub", "skipTrackClick", "trackSelection", "paywall", "isAboutPage"]);
        const {
            selection: p,
            selectedImgIndex: f,
            shouldUseSelectionV2Popover: g,
            selectingTextForQuote: m
        } = this.state;
        if (typeof window != "undefined" && !m && new URLSearchParams(window.location.search).get("selectQuote") === "true" && this.setState({
                selectingTextForQuote: !0
            }), s) {
            const b = this.context.getExperimentVariant("overwrite_share_button_on_post_pages");
            u.variant = b, u.exposeExperiment = this.context.exposeExperiment, e = this.memoizedDeepPrepareDocumentBody(s, o, V(k({}, u), {
                isAboutPage: l
            })), e && (s = null)
        }
        const _ = e ? Array.from(e).some(b => {
                var S, x, w, P;
                return ((S = b.props) == null ? void 0 : S.className) === "latex-rendered" || ((P = (w = (x = b.props) == null ? void 0 : x.children) == null ? void 0 : w.props) == null ? void 0 : P.className) === "latex-rendered"
            }) : !1,
            y = r(it, null, r("div", {
                className: "body markup",
                dangerouslySetInnerHTML: s ? {
                    __html: s
                } : null,
                ref: this.body,
                onClick: this.onDocumentClick,
                onMouseDown: this.onBodyMouseDown,
                onMouseUp: this.onMouseUp,
                dir: "auto"
            }, e), g && !m ? r(xnt, {
                pub: o,
                post: this.props.post,
                selection: p,
                onClose: this.clearActiveSelection,
                userInteractionDisabled: this.state.selectionUserInteractionDisabled,
                themeVariables: this.props.themeVariables
            }) : r(Get, {
                pub: o,
                post: this.props.post,
                selection: p,
                onClose: this.clearActiveSelection,
                userInteractionDisabled: this.state.selectionUserInteractionDisabled,
                selectingTextForQuote: m
            }), r(pi, {
                showModal: this.shouldShowImageViewerModal(),
                modalContent: this.originalImageState,
                onClose: this.closeImageViewerModal,
                step: f
            }));
        return _ && !u.isStatic ? r(Cm, null, y) : y
    }
}
at(ur, "contextType", ul);

function Ent({
    onFilesSelected: n
}) {
    const [t, e] = D(!1), s = At(null), o = l => {
        l.preventDefault(), l.stopPropagation()
    }, i = l => {
        l.preventDefault(), l.stopPropagation(), e(!1)
    }, a = l => {
        l.preventDefault(), l.stopPropagation(), l.dataTransfer && l.dataTransfer.items && l.dataTransfer.items.length > 0 && e(!0)
    }, c = l => {
        l.preventDefault(), l.stopPropagation(), e(!1), l.dataTransfer && l.dataTransfer.files && l.dataTransfer.files.length > 0 && (n(l.dataTransfer.files), l.dataTransfer.clearData())
    };
    return lt(() => {
        const l = s.current;
        if (l) return l.addEventListener("dragenter", o), l.addEventListener("dragleave", i), l.addEventListener("dragover", a), l.addEventListener("drop", c), () => {
            l.removeEventListener("dragenter", o), l.removeEventListener("dragleave", i), l.removeEventListener("dragover", a), l.removeEventListener("drop", c)
        }
    }, [s]), {
        dropRef: s,
        dragging: t
    }
}

function Tnt({
    onFilesSelected: n
}) {
    const t = ae(),
        e = o => {
            const i = o.target;
            i.files && i.files.length > 0 && n(i.files)
        };
    return lt(() => {
        const o = t.current;
        if (o) return o.addEventListener("change", e), () => {
            o.removeEventListener("change", e)
        }
    }, [t]), {
        openFileDialog: () => {
            var o;
            (o = t.current) == null || o.click()
        },
        fileInputRef: t
    }
}
const Pnt = (n, t) => {
        const e = new FileReader;
        e.onload = s => {
            var o;
            t((o = s.target) == null ? void 0 : o.result)
        }, e.readAsText(n)
    },
    Ant = [{
        regex: /\((\d{2}):(\d{2}):(\d{2})\):/,
        parse: n => parseInt(n[1]) * 3600 + parseInt(n[2]) * 60 + parseInt(n[3])
    }, {
        regex: /\((\d{2}:\d{2}\.\d{1,3})\)/,
        parse: n => {
            const [t, e] = n[1].split(":").map(parseFloat);
            return t * 60 + e
        }
    }],
    Lnt = [{
        regex: /^([\w\s’‘]+)\s\(\d{2}:\d{2}:\d{2}\):/,
        parse: n => n[1]
    }, {
        regex: /^(.*?)\s*\(\d{2}:\d{2}\.\d{1,3}\)$/,
        parse: n => n[1]
    }],
    Int = (n, t) => {
        const e = n.split(`
`),
            s = [];
        let o = "",
            i = "",
            a = 0,
            c = 0;
        const l = new Set,
            u = {};
        let d = 0;
        return e.forEach((h, p) => {
            var _, y;
            const f = (_ = Ant.find(b => !!h.match(b.regex))) != null ? _ : null,
                g = (y = Lnt.find(b => !!h.match(b.regex))) != null ? y : null;
            let m = h.trim();
            if (f) {
                const b = h.match(f.regex);
                b && (c = f.parse(b), i && (s.push({
                    speaker: u[o],
                    start: a,
                    end: c,
                    text: i.trim(),
                    words: []
                }), i = ""), a = c, m = m.replace(f.regex, ""))
            }
            if (g) {
                const b = h.match(g.regex);
                b && (o = g.parse(b), l.has(o) || (l.add(o), u[o] = `SPEAKER_${d++}`), i += `${m.substring(o.length)} `)
            } else m.trim() !== "" && (i += `${m} `);
            p === e.length - 1 && i && s.push({
                speaker: u[o],
                start: a,
                end: t,
                text: i.trim(),
                words: []
            })
        }), [{
            segments: s
        }, Object.entries(u).reduce((h, p) => V(k({}, h), {
            [p[1]]: p[0]
        }), {})]
    };

function lc(n) {
    const [t, e, s] = n.split(":").map(parseFloat);
    return t * 3600 + e * 60 + s
}
const uc = n => {
        const t = n.split(`
`).map(a => a.trim()),
            e = [],
            s = new Set,
            o = {};
        let i = 0;
        for (let a = 0; a < t.length; a++) {
            const c = t[a].trim();
            if (c.includes("-->")) {
                const l = c.split(" --> ").map(f => f.trim()),
                    u = lc(l[0]),
                    d = lc(l[1]);
                a++;
                const h = [];
                let p = "";
                for (; a < t.length && t[a].trim() !== "";) {
                    const f = t[a].trim();
                    if (f.startsWith("<v ")) {
                        const g = f.match(/<v\s+([^>]+)>/);
                        if (g && g[1]) {
                            p = g[1].trim(), s.has(p) || (s.add(p), o[p] = `SPEAKER_${i++}`);
                            const m = f.indexOf(">") + 1;
                            m < f.length && h.push(f.substring(m).trim())
                        }
                    } else h.push(f);
                    a++
                }
                e.push({
                    speaker: o[p],
                    start: u,
                    end: d,
                    text: h.join(" ").trim(),
                    words: []
                })
            }
        }
        return [{
            segments: e
        }, Object.entries(o).reduce((a, c) => V(k({}, a), {
            [c[1]]: c[0]
        }), {})]
    },
    Ont = n => n ? n.segments.some(t => !t.text) ? "Segment text is missing" : n.segments.some(t => sa(t.end) || sa(t.start)) ? "Segment start or end time is missing" : null : "Transcription is missing",
    Mnt = [".txt", ".srt", ".vtt"],
    Dnt = ({
        postId: n,
        mediaUpload: t,
        transcription: e,
        onTranscriptionUploadStarted: s,
        onTranscriptionUploadCancelled: o,
        onTranscriptionUploadError: i,
        onTranscriptionUploaded: a,
        disabled: c,
        setUploadedFile: l
    }) => {
        const {
            iString: u
        } = ot(), [d, h] = D(!1), [p, f] = D(""), g = e && e.status === "in_progress", [m, _] = D(null), y = O => K(void 0, null, function*() {
            var T;
            if (_(O), s == null || s(), O.length > 0) {
                l && l(O[0]);
                const v = (T = O[0].name.split(".").pop()) != null ? T : "";
                W(G.TRANSCRIPTION_UPLOAD_FILE_STARTED, {
                    post_id: n,
                    audio_upload_id: t == null ? void 0 : t.id,
                    type: v
                }), Pnt(O[0], C => K(void 0, null, function*() {
                    var J;
                    f(C);
                    let N = null,
                        R = {};
                    try {
                        v === "txt" ? [N, R] = Int(C, (J = t == null ? void 0 : t.duration) != null ? J : 0) : v === "vtt" ? [N, R] = uc(C) : v === "srt" && ([N, R] = uc(C));
                        const j = Ont(N);
                        if (N && !j) yield b(O[0], v, N, R);
                        else {
                            const B = `${u("Error validating transcription file")}: ${j}`;
                            console.error(B), i == null || i(B)
                        }
                    } catch (j) {
                        const q = u("Error parsing transcription file");
                        console.error(q, j), i == null || i(q), l && l(null)
                    } finally {
                        P()
                    }
                }))
            }
        }), b = (O, T, v, C) => K(void 0, null, function*() {
            var q;
            const {
                body: N
            } = yield dt.post(`/api/v1/drafts/${n}/upload_transcription/start`).send({
                speaker_map: C
            }), {
                originalTranscriptionFileKey: R,
                unalignedTranscriptionFileKey: J,
                alignedTranscriptionFileKey: j
            } = N;
            h(!0);
            try {
                yield dt.put(R).send(O).set("Content-Type", O.type), yield dt.put(J).send(JSON.stringify(v)).set("Content-Type", "application/json"), yield dt.put(j).send(JSON.stringify((q = v == null ? void 0 : v.segments) != null ? q : [])).set("Content-Type", "application/json"), yield dt.post(`/api/v1/drafts/${n}/upload_transcription/complete`).send(), yield dt.post(`/api/v1/drafts/${n}/realign_transcription`).send({
                    edits: {}
                }).then(B => {
                    var Y;
                    (Y = B.body) != null && Y.data && (W(G.TRANSCRIPTION_UPLOAD_FILE_COMPLETED, {
                        post_id: n,
                        audio_upload_id: t == null ? void 0 : t.id,
                        type: T
                    }), h(!1), a(B.body.data), P())
                })
            } catch (B) {
                W(G.TRANSCRIPTION_UPLOAD_FILE_FAILED, {
                    post_id: n,
                    audio_upload_id: t == null ? void 0 : t.id,
                    type: T
                }), console.error("File upload failed:", B), i == null || i(u("Error uploading transcription file"))
            }
        });
        lt(() => {}, [p]);
        const {
            openFileDialog: S,
            fileInputRef: x
        } = Tnt({
            onFilesSelected: y
        }), {
            dropRef: w
        } = Ent({
            onFilesSelected: y
        }), P = () => {
            _(null), x.current && (x.current.value = ""), o == null || o()
        }, A = m == null ? void 0 : m[0], M = O => {
            W(G.TRANSCRIPTION_UPLOAD_FILE_TYPE_CLICKED, {
                post_id: n,
                audio_upload_id: t == null ? void 0 : t.id,
                type: O
            }), x.current && (x.current.accept = O, setTimeout(() => S(), 50))
        };
        return g ? null : r(X, {
            gap: 8
        }, !d && r(as, {
            ref: w,
            layerOptions: {
                placement: "bottom-center"
            },
            onOpen: () => {
                W(G.TRANSCRIPTION_UPLOAD_FILE_CLICKED, {
                    post_id: n,
                    audio_upload_id: t == null ? void 0 : t.id
                })
            },
            trigger: r(de, {
                disabled: c,
                priority: "secondary",
                leading: r(ol, {
                    size: 18
                })
            }, u("Upload transcript"))
        }, r(kt, {
            onClick: () => M(".txt")
        }, u("Upload .txt file")), r(Fe, null), r(kt, {
            onClick: () => M(".vtt")
        }, u("Upload .vtt file")), r(Fe, null), r(kt, {
            onClick: () => M(".srt")
        }, u("Upload .srt file"))), A && r(X, {
            gap: 8
        }), r("input", {
            type: "file",
            ref: x,
            style: {
                display: "none"
            },
            accept: Mnt.join(",")
        }))
    },
    Rnt = "_transcriptionTab_78s8y_1",
    $nt = "_icon_78s8y_5",
    qnt = "_toggleSetting_78s8y_9",
    Bnt = "_transcriptionPlayer_78s8y_13",
    Unt = "_hidePlayer_78s8y_22",
    Fnt = "_nonActiveText_78s8y_26",
    jnt = "_transcriptionChunk_78s8y_30",
    Hnt = "_editableChunk_78s8y_37",
    Vnt = "_startTime_78s8y_41",
    znt = "_text_78s8y_46",
    Wnt = "_activeStartTime_78s8y_51",
    Gnt = "_chunkWithSpeaker_78s8y_60",
    Jnt = "_speaker_78s8y_70",
    Ynt = "_transcription_78s8y_1",
    Knt = "_popover_78s8y_85",
    Xnt = "_divider_78s8y_98",
    Qnt = "_resultsValue_78s8y_103",
    Znt = "_searchResult_78s8y_107",
    tst = "_isFocused_78s8y_111",
    est = "_searchForm_78s8y_116",
    nst = "_transcriptionBox_78s8y_120",
    sst = "_listOuter_78s8y_125",
    Vs = {
        transcriptionTab: Rnt,
        icon: $nt,
        toggleSetting: qnt,
        transcriptionPlayer: Bnt,
        hidePlayer: Unt,
        nonActiveText: Fnt,
        transcriptionChunk: jnt,
        editableChunk: Hnt,
        startTime: Vnt,
        text: znt,
        activeStartTime: Wnt,
        chunkWithSpeaker: Gnt,
        speaker: Jnt,
        transcription: Ynt,
        popover: Knt,
        divider: Xnt,
        resultsValue: Qnt,
        searchResult: Znt,
        isFocused: tst,
        searchForm: est,
        transcriptionBox: nst,
        listOuter: sst
    },
    bd = os({
        isSearching: !1,
        items: [],
        setIsSearching: () => {},
        setItems: () => {},
        focusedItemStart: null,
        setFocusedItemStart: () => {},
        filteredItems: [],
        searchTerm: null,
        setSearchTerm: () => {},
        hasFiltered: !1
    }),
    bat = ({
        children: n
    }) => {
        const [t, e] = D(!1), [s, o] = D([]), [i, a] = D(null), [c, l] = D(null), {
            filteredItems: u,
            setQuery: d,
            hasFiltered: h
        } = uf({
            items: s,
            getKeys: f => [f.text],
            sortFunc: (f, g) => f.start - g.start
        }), p = f => {
            l(f), d(f)
        };
        return lt(() => {
            var f, g;
            a((g = (f = u[0]) == null ? void 0 : f.start) != null ? g : null)
        }, [u]), r(bd.Provider, {
            value: {
                isSearching: t,
                setIsSearching: e,
                items: s,
                setItems: o,
                focusedItemStart: i,
                setFocusedItemStart: a,
                filteredItems: u,
                hasFiltered: h,
                searchTerm: c,
                setSearchTerm: p
            }
        }, n)
    },
    Vr = () => Tn(bd),
    _at = ({
        isEditing: n,
        setIsEditing: t,
        setEdits: e,
        hasEdits: s,
        handleSubmitEdits: o,
        handleRegenerateTranscription: i,
        handleCancelTranscription: a,
        isTranscribing: c,
        transcription: l,
        postId: u,
        audioUpload: d,
        onTranscriptionUploadCancelled: h,
        onTranscriptionUploadError: p,
        onTranscriptionUploadStarted: f,
        onTranscriptionUploaded: g,
        uploadedFile: m,
        setUploadedFile: _,
        isEditingSpeakers: y
    }) => {
        const {
            isSearching: b
        } = Vr();
        return r(X, {
            gap: 16
        }, m && r(ht, {
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
            radius: "sm",
            border: "detail",
            gap: 16
        }, r(ht, {
            gap: 16,
            alignItems: "center"
        }, r(gt, {
            alignItems: "center",
            padding: 8,
            radius: "sm",
            color: "primary",
            bg: "secondary"
        }, r(il, null)), r(X, null, r(I.B3, {
            weight: "semibold",
            color: "primary"
        }, m.name), r(I.B4, null, `${m.size/1e3} MB`))), r(Wn, {
            onClick: () => {
                W(G.TRANSCRIPTION_EDIT_CANCELLED_CLICKED, {
                    post_id: u
                }), _(null), a()
            }
        }, r(ri, null))), n && r(ost, {
            hasEdits: s,
            setIsEditing: t,
            setEdits: e,
            handleSubmitEdits: o
        }), !n && !b && r(rst, {
            isEditingSpeakers: y,
            setIsEditing: t,
            transcription: l,
            isTranscribing: c,
            handleCancelTranscription: a,
            handleRegenerateTranscription: i,
            setUploadedFile: _,
            postId: u,
            audioUpload: d,
            onTranscriptionUploadCancelled: h,
            onTranscriptionUploadError: p,
            onTranscriptionUploadStarted: f,
            onTranscriptionUploaded: g
        }), b && r(ist, {
            postId: u
        }))
    },
    rst = ({
        transcription: n,
        isTranscribing: t,
        handleCancelTranscription: e,
        handleRegenerateTranscription: s,
        setUploadedFile: o,
        postId: i,
        audioUpload: a,
        onTranscriptionUploadStarted: c,
        onTranscriptionUploadCancelled: l,
        onTranscriptionUploadError: u,
        onTranscriptionUploaded: d,
        setIsEditing: h,
        isEditingSpeakers: p
    }) => {
        var x, w, P;
        const {
            iString: f
        } = ot(), g = (n == null ? void 0 : n.created_at) && new Date(n.created_at) < _t().subtract(5, "minutes").toDate(), m = (n == null ? void 0 : n.status) === "failed", y = (n == null ? void 0 : n.status) === "transcribed" && !g || !t || m, {
            setIsSearching: b
        } = Vr(), S = (w = ((x = n == null ? void 0 : n.signed_captions) != null ? x : []).find(A => A.original === "True")) == null ? void 0 : w.url;
        return r(ht, {
            justifyContent: "space-between",
            gap: 8
        }, r(Wn, {
            onClick: () => {
                W(G.TRANSCRIPTION_SEARCH_CLICKED, {
                    post_id: i
                }), b(!0)
            },
            disabled: p
        }, r(ff, null)), r(ht, {
            gap: 8
        }, r(de, {
            onClick: s,
            disabled: !y || p,
            leading: r(fp, null),
            priority: "secondary"
        }, f("Regenerate")), r(Dnt, {
            setUploadedFile: o,
            postId: i,
            mediaUpload: a,
            transcription: n != null ? n : null,
            onTranscriptionUploadStarted: c,
            onTranscriptionUploadCancelled: l,
            onTranscriptionUploadError: u,
            onTranscriptionUploaded: d,
            disabled: !i || !a || (a == null ? void 0 : a.state) !== "transcoded" || p
        }), r(as, {
            trigger: r(Wn, {
                priority: "secondary",
                rounded: !1
            }, r(Wc, {
                className: Vs.icon
            }))
        }, (n == null ? void 0 : n.status) === "transcribed" && r(it, null, r(kt, {
            disabled: p,
            onClick: () => {
                W(G.TRANSCRIPTION_EDIT_CLICKED, {
                    post_id: i
                }), h(!0)
            },
            icon: r(Im, null)
        }, f("Correct transcript")), r(Fe, null), r(pf, {
            icon: r(ci, null),
            content: f("Download")
        }, r(kt, {
            disabled: p,
            href: (P = n.cdn_url) != null ? P : void 0,
            onClick: () => {
                W(G.TRANSCRIPTION_DOWNLOAD_CLICKED, {
                    post_id: i,
                    type: "json"
                })
            }
        }, f("Download .json file")), S && r(kt, {
            disabled: p,
            href: S,
            onClick: () => {
                W(G.TRANSCRIPTION_DOWNLOAD_CLICKED, {
                    post_id: i,
                    type: "vtt"
                })
            }
        }, f("Download .vtt file"))), r(Fe, null)), r(kt, {
            disabled: !n || p,
            priority: "destructive",
            icon: r(Xp, null),
            onClick: e
        }, f("Remove")))))
    },
    ost = ({
        setIsEditing: n,
        setEdits: t,
        hasEdits: e,
        handleSubmitEdits: s
    }) => {
        const {
            iString: o
        } = ot();
        return r(ht, {
            justifyContent: "end",
            gap: 8
        }, r(de, {
            onClick: () => {
                n(!1), t({})
            },
            priority: "secondary"
        }, o("Cancel")), r(de, {
            priority: "primary",
            disabled: !e,
            onClick: s
        }, o("Save")))
    },
    ist = ({
        postId: n
    }) => {
        const {
            iString: t
        } = ot(), {
            setSearchTerm: e,
            setIsSearching: s,
            hasFiltered: o,
            filteredItems: i,
            setFocusedItemStart: a,
            focusedItemStart: c,
            searchTerm: l
        } = Vr(), u = i.findIndex(g => g.start === c), d = () => {
            const g = u + 1 >= i.length ? 0 : u + 1;
            a(i[g].start)
        }, h = () => {
            const g = u - 1 < 0 ? i.length - 1 : u - 1;
            a(i[g].start)
        }, p = g => {
            e(g.target.value), W(G.TRANSCRIPTION_SEARCHED, {
                post_id: n
            })
        }, f = () => {
            s(!1), W(G.TRANSCRIPTION_SEARCH_CANCELLED, {
                post_id: n
            })
        };
        return r(ht, {
            gap: 8,
            justifyContent: "space-between",
            alignItems: "center",
            className: Vs.searchForm,
            flex: "grow"
        }, r(hf, {
            width: l ? 250 : void 0,
            className: Vs.searchInput,
            placeholder: t("Search"),
            value: l != null ? l : "",
            onChange: p,
            onKeyDown: g => {
                g.key === "Enter" && d(), g.key === "Escape" && f()
            }
        }), r(ht, {
            gap: 8
        }, o && r(ht, {
            alignItems: "center",
            gap: 8
        }, r(I.B3, {
            className: Vs.resultsValue,
            color: "primary",
            weight: "semibold"
        }, u + 1, " / ", i.length), r(Wn, {
            priority: "tertiary",
            onClick: h
        }, r(wf, null)), r(Wn, {
            priority: "tertiary",
            onClick: d
        }, r(vf, null))), r(de, {
            priority: "tertiary",
            onClick: f
        }, t("Cancel"))))
    },
    ast = "_transcriptionStatus_kdmyl_1",
    cst = "_transcriptionChunk_kdmyl_9",
    lst = "_hoverChunk_kdmyl_17",
    ust = "_rowIndicator_kdmyl_21",
    dst = "_hoverRow_kdmyl_29",
    hst = "_activeRow_kdmyl_33",
    pst = "_rowText_kdmyl_40",
    fst = "_speakerText_kdmyl_44",
    mst = "_rowEditableText_kdmyl_53",
    gst = "_activeWord_kdmyl_59",
    bst = "_loadingSilhouette_kdmyl_63",
    _st = "_playCircle_kdmyl_67",
    Bt = {
        transcriptionStatus: ast,
        transcriptionChunk: cst,
        hoverChunk: lst,
        rowIndicator: ust,
        hoverRow: dst,
        activeRow: hst,
        rowText: pst,
        speakerText: fst,
        rowEditableText: mst,
        activeWord: gst,
        loadingSilhouette: bst,
        playCircle: _st
    };

function yst({
    editable: n,
    forPublisherDash: t = !1,
    player: e,
    postId: s,
    renderTranscriptionChunk: o,
    renderLoadingTranscription: i,
    renderAudiogramPopover: a,
    renderEditSpeakerView: c,
    transcription: l,
    onEdit: u,
    onUpdate: d,
    onUpdateActiveRowIndex: h,
    isEditingSpeakers: p = !1,
    className: f,
    renderSpeakerName: g
}) {
    var tt, ut;
    const [m, _] = D(!1), [y, b] = D(), [S, x] = D(), [w, P] = D({}), [A, M] = D(!1), [O, T] = D(p), [v, C] = D(), [N, R] = D(), {
        currentTime: J,
        isPlaying: j
    } = Qp(e), [q, B] = D(), {
        setItems: Y
    } = Vr(), L = y == null ? void 0 : y.findIndex(H => H.start <= J && H.end > J);
    lt(() => {
        h && L !== void 0 && L !== -1 && h(L)
    }, [L, h]), lt(() => {
        l.cdn_url ? (_((y == null ? void 0 : y.length) === 0), dt.get(l.cdn_url).then(H => {
            if (H.text) {
                const rt = JSON.parse(H.text);
                b(rt), Y(rt);
                const ct = Zh(rt.map(F => F.speaker)).filter(F => F).sort();
                ct.length && x(ct)
            }
        }).finally(() => _(!1))) : (b(void 0), Y([])), l.speaker_map && Object.values(l.speaker_map).length && P(l.speaker_map)
    }, [y == null ? void 0 : y.length, Y, l.cdn_url, l.speaker_map]);
    const E = w ? Object.values(w).filter(H => H) : [],
        U = !!(S != null && S.length && E.length);
    if (lt(() => {
            const H = () => {
                setTimeout(() => {
                    var st, ft, Tt, Vt, xe;
                    const rt = window.getSelection();
                    if (!rt || rt.rangeCount === 0 || rt.isCollapsed) {
                        B(void 0), R(void 0);
                        return
                    }
                    const ct = rt.getRangeAt(0),
                        F = ct.startContainer.parentNode,
                        pt = ct.endContainer.parentNode,
                        wt = (st = F == null ? void 0 : F.dataset) == null ? void 0 : st.chunkIndex,
                        nt = (ft = pt == null ? void 0 : pt.dataset) == null ? void 0 : ft.chunkIndex;
                    if (wt && nt) {
                        let an = parseInt(wt, 10),
                            De = parseInt(nt, 10);
                        ct.startOffset === ((Tt = F == null ? void 0 : F.textContent) == null ? void 0 : Tt.length) && (an += 1), ct.endOffset === 0 && (De -= 1), (xe = (Vt = e == null ? void 0 : e.current) == null ? void 0 : Vt.player) == null || xe.pause(), B(rt), R([an, De])
                    } else B(void 0), R(void 0)
                }, 0)
            };
            return document.addEventListener("mouseup", H), () => {
                document.removeEventListener("mouseup", H)
            }
        }, []), m) return i ? i() : r(dc, null);
    if (!(y != null && y.length)) return r("div", {
        className: Bt.transcriptionStatus
    }, r("p", null, (l == null ? void 0 : l.status) === "in_progress" ? "Transcription in progress..." : "No transcript..."), r(dc, null));
    const z = ((ut = (tt = e == null ? void 0 : e.current) == null ? void 0 : tt.player) == null ? void 0 : ut.tagName) === "VIDEO" ? "videogram" : "audiogram";

    function et() {
        if (N) {
            const [H, rt] = N;
            M(!0), dt.post("/api/v1/audiogram").send({
                post_id: s,
                start_idx: H,
                end_idx: rt,
                use_draft: t
            }).then(ct => {
                var F, pt;
                (F = ct.body) != null && F.data && (C(ct.body.data), B(void 0), R(void 0), (pt = e == null ? void 0 : e.current) != null && pt.player && e.current.player.pause())
            }).finally(() => M(!1))
        }
    }

    function Z(H) {
        return W(G.AUDIOGRAM_DOWNLOAD_CLICKED, {
            post_id: s,
            audiogram_id: v == null ? void 0 : v.id,
            media_upload_id: l.media_upload_id
        }), fetch(H, {
            method: "GET"
        }).then(rt => rt.blob()).then(rt => {
            var st;
            const ct = (st = v == null ? void 0 : v.video_url) == null ? void 0 : st.split("/").pop(),
                F = ct == null ? void 0 : ct.match(/^([^-]+-[^_]+)_/),
                pt = (F == null ? void 0 : F[1]) || "",
                wt = URL.createObjectURL(rt),
                nt = document.createElement("a");
            nt.href = wt, nt.download = `substack-${z}-${s}-${pt}.mp4`, document.body.appendChild(nt), nt.click(), URL.revokeObjectURL(wt), nt.remove()
        })
    }
    return r(X, {
        className: f,
        justifyContent: "end"
    }, !n && q && N ? a ? a({
        noun: z,
        selection: q,
        onMakeAudiogram: et
    }) : r(wst, {
        noun: z,
        selection: q,
        onMakeAudiogram: et
    }) : null, y.map((H, rt) => {
        var ct;
        return o ? o({
            isPlaying: j,
            row: H,
            rowIndex: rt,
            words: H.words,
            showSpeaker: (rt === 0 || (ct = y[rt - 1]) == null ? void 0 : ct.speaker) !== H.speaker,
            speakerName: g ? g({
                speakerMap: w,
                speaker: H.speaker,
                showSpeakerNames: U
            }) : t ? H.speaker && `${io(H.speaker)}${w[H.speaker]?`: ${w[H.speaker]}`:""}` : U && H.speaker ? w[H.speaker] : void 0,
            onPause: () => {
                var F;
                (F = e == null ? void 0 : e.current) != null && F.player && e.current.player.pause()
            },
            onPlay: () => {
                var F;
                (F = e == null ? void 0 : e.current) != null && F.player && (e.current.player.currentTime = H.start + 1e-4, e.current.player.play())
            },
            onEdit: u,
            editable: n,
            onEditSpeakers: () => T(!0)
        }) : r(vst, {
            key: rt,
            idx: rt,
            row: H,
            rows: y,
            speakerName: t ? H.speaker && `${io(H.speaker)}${w[H.speaker]?`: ${w[H.speaker]}`:""}` : U && H.speaker ? w[H.speaker] : void 0,
            onReassign: () => T(!0),
            currentTime: J,
            isPlaying: j,
            isSelected: !!(N && rt >= N[0] && rt <= N[1]),
            onClick: () => {
                B(void 0), R(void 0)
            },
            onPause: () => {
                var F;
                (F = e == null ? void 0 : e.current) != null && F.player && e.current.player.pause()
            },
            onPlay: () => {
                var F;
                (F = e == null ? void 0 : e.current) != null && F.player && (e.current.player.currentTime = H.start + 1e-4, e.current.player.play())
            },
            editable: n,
            onEdit: u
        })
    }), !!(A || v) && r(ca, {
        isPopup: !0,
        hasClosePill: !0,
        onClose: () => {
            C(void 0)
        }
    }, r(I.H3, {
        style: {
            marginTop: 22,
            paddingLeft: 16
        }
    }, A ? `Generating ${z}...` : `Shareable ${z}...`), r(X, {
        padding: 16
    }, v ? r(it, null, r("video", {
        src: v.cdn_url,
        style: {
            borderRadius: 12,
            alignSelf: "center",
            marginBottom: 12
        },
        controls: !0,
        download: !0,
        width: 512
    }), r(ue, {
        priority: "secondary",
        leftIcon: r(ci, {
            height: 18
        }),
        onClick: () => Z(v.cdn_url)
    }, "Download")) : r(X, {
        alignItems: "center",
        justifyContent: "center",
        style: {
            flex: 1,
            minHeight: 280
        }
    }, r("div", {
        className: "embed-loader"
    })))), S && !!S.length && !!O && (c ? c({
        speakers: S,
        speakerMap: w,
        setIsRemappingSpeakers: T,
        onChangeSpeaker: (H, rt) => P(ct => {
            var F;
            return V(k({}, ct), {
                [rt]: (F = H.target) == null ? void 0 : F.value
            })
        }),
        onSaveSpeakerChanges: () => w && Object.keys(w).length > 0 ? dt.put(`/api/v1/drafts/${s}/transcript`).send({
            speaker_map: w
        }).then(H => {
            H.body.data && (d == null || d(H.body.data), T(!1))
        }) : Promise.resolve(),
        resetSpeakerMap: () => {
            var H;
            P((H = l == null ? void 0 : l.speaker_map) != null ? H : {})
        }
    }) : r(ca, {
        isPopup: !0,
        hasClosePill: !0,
        onClose: () => {
            T(!1)
        }
    }, r(I.H3, {
        style: {
            marginTop: 22,
            paddingLeft: 16
        }
    }, "Assign Speakers"), r("p", {
        style: {
            padding: "0 16px",
            fontSize: 14,
            marginTop: 4,
            marginBottom: 4
        }
    }, "To have speaker names shown to readers, assign a name to each of the identified speakers. If we've identified too many speakers, you may have to duplicate a speaker's name."), r(X, {
        padding: 16
    }, S.map(H => r(X, {
        style: {
            marginBottom: 12
        }
    }, r("span", {
        style: {
            fontSize: 14,
            marginBottom: 6
        }
    }, io(H)), r(nf, {
        onChange: rt => P(ct => {
            var F;
            return V(k({}, ct), {
                [H]: (F = rt.target) == null ? void 0 : F.value
            })
        }),
        value: (w == null ? void 0 : w[H]) || "",
        placeholder: "Speaker name..."
    }))), r(ue, {
        style: {
            marginTop: 8
        },
        priority: "secondary",
        leftIcon: r(Mm, {
            height: 18
        }),
        onClick: () => {
            w && Object.keys(w).length > 0 && dt.put(`/api/v1/drafts/${s}/transcript`).send({
                speaker_map: w
            }).then(H => {
                H.body.data && (d == null || d(H.body.data), T(!1))
            })
        }
    }, "Assign")))))
}

function wst({
    selection: n,
    onMakeAudiogram: t,
    noun: e
}) {
    var i, a;
    const s = In(),
        o = (a = (i = n.anchorNode) == null ? void 0 : i.parentElement) == null ? void 0 : a.getBoundingClientRect();
    return o ? r(X, {
        style: {
            top: Oc() ? Math.max(o.y, 0) + o.height + 12 : Math.max(o.y, 0) - 48,
            left: "50vw",
            transform: "translateX(-50%)",
            pointerEvents: "auto",
            maxWidth: 240
        },
        justifyContent: "center",
        className: qt.popover
    }, r(X, {
        className: $(qt.popoverButtons, s && qt.isMobile),
        radius: "md",
        padding: 4,
        gap: 8,
        shadow: "md"
    }, r(lr, {
        onClick: t,
        disabled: !1,
        isExplainer: !1
    }, r(Pm, {
        color: "white"
    }), r(I.B4, {
        color: "bg-light",
        weight: "medium"
    }, "Make ", e)))) : null
}

function dc() {
    return r(it, null, r(dn, {
        width: "80%",
        height: "24px",
        className: Bt.loadingSilhouette
    }), r(dn, {
        width: "34%",
        height: "24px",
        className: Bt.loadingSilhouette
    }), r(dn, {
        width: "75%",
        height: "24px",
        className: Bt.loadingSilhouette
    }), r(dn, {
        width: "100%",
        height: "24px",
        className: Bt.loadingSilhouette
    }), r(dn, {
        width: "68%",
        height: "24px",
        className: Bt.loadingSilhouette
    }))
}

function io(n) {
    if (!n) return "Unknown Speaker";
    const t = n.split("_"),
        e = parseInt(t[1]);
    return `${yh(t[0])} ${e+1}`
}

function vst({
    row: n,
    currentTime: t,
    onPlay: e,
    isPlaying: s,
    onPause: o,
    isSelected: i,
    onClick: a,
    idx: c,
    editable: l,
    onEdit: u,
    rows: d,
    onReassign: h,
    speakerName: p
}) {
    var x;
    const [f, g] = D(!1), m = At(null), _ = n.start <= t && n.end >= t, y = n.words.map(w => w.word).join(" ");
    let b = l ? y : n.words.map(w => w.start <= t && w.end >= t ? r(it, null, r("span", {
        className: Bt.activeWord
    }, w.word), " ") : `${w.word} `);
    b.length || (b = n.text.split(" ").map(w => r("span", null, w, " ")));
    let S = null;
    if (n.speaker && p) {
        const w = c === 0 || (x = d[c - 1]) == null ? void 0 : x.speaker;
        n.speaker !== w && (S = r("div", {
            className: Bt.speakerText,
            onClick: h
        }, p))
    }
    return r("div", {
        ref: m,
        onClick: a,
        onMouseEnter: () => g(!0),
        onMouseLeave: () => g(!1),
        style: {
            display: "flex",
            width: "100%",
            alignItems: "center"
        }
    }, !s || f && !_ ? r(mp, {
        onClick: e,
        size: 24,
        className: Bt.playCircle,
        style: V(k({}, f && {
            color: "var(--color-accent-themed)"
        }), {
            visibility: _ || f ? "visible" : "hidden"
        })
    }) : r(Lm, {
        onClick: o,
        size: 24,
        className: Bt.playCircle,
        style: V(k({}, f && {
            color: "var(--color-accent-themed)"
        }), {
            visibility: _ || f ? "visible" : "hidden"
        })
    }), r("div", {
        className: $(Bt.transcriptionChunk, {
            [Bt.activeRow]: _ || i,
            [Bt.hoverChunk]: f
        }),
        "data-chunk-index": c
    }, r("div", {
        className: $(Bt.rowIndicator, {
            [Bt.hoverRow]: f
        })
    }), r("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "5px 0"
        }
    }, S, l ? r("div", {
        className: Bt.rowEditableText,
        "data-chunk-index": c,
        contentEditable: !0,
        onInput: w => {
            var A;
            const P = (A = w.target) == null ? void 0 : A.innerHTML;
            typeof P == "string" && (P === y ? u == null || u({
                [String(c)]: void 0
            }) : u == null || u({
                [String(c)]: P
            }))
        }
    }, b) : r("div", {
        className: Bt.rowText,
        "data-chunk-index": c
    }, b))))
}
const yat = ({
    isActiveRow: n,
    isPlaying: t,
    row: e,
    rowIndex: s,
    onPause: o,
    onPlay: i,
    postId: a,
    children: c,
    className: l,
    activeClassName: u,
    editable: d
}) => {
    const h = n && t,
        p = `transcription-${s}`;
    return r(Gt, {
        id: p,
        paddingRight: 16,
        className: $(l, {
            [u != null ? u : ""]: h
        }),
        onClick: () => {
            var f;
            (f = window.getSelection()) != null && f.toString() || d || (W(G.TRANSCRIPTION_TIMESTAMP_CLICKED, {
                post_id: a,
                timestamp: of (e.start)
            }), h ? o() : i())
        }
    }, c)
};

function Sst(n) {
    return r(Ht, V(k({}, n), {
        name: "LucideUnlock",
        svgParams: {
            height: 24,
            width: 24,
            fill: "#ffffff",
            strokeWidth: 0
        }
    }), r(Nf, {
        height: 24,
        stroke: n.stroke,
        fill: n.fill,
        strokeWidth: n.strokeWidth
    }))
}
const ms = ({
        className: n = null,
        title: t,
        subtitle: e = null,
        reauthenticationTitle: s,
        publication: o,
        post: i,
        user: a,
        freeSignup: c = null,
        freeSignupEmail: l = null,
        email_form: u = !1,
        autoFocus: d = !1,
        isStatic: h = !1,
        coupon: p = null,
        showPostUnlockPrompt: f = !1,
        magicToken: g = null,
        onPostUnlockError: m = null
    }) => {
        const _ = a == null ? void 0 : a.reader_installed_at,
            {
                iString: y,
                iTemplate: b
            } = ot(),
            {
                modal: S,
                open: x
            } = xf({
                utm_campaign: oe.paywallPostUnlockPrompt,
                utm_source: bt.substack,
                overrideCTA: _ && y("Open in app"),
                overrideTitle: y(_ ? "Unlock your free post in the Substack app" : "Get the free Substack app to unlock this post"),
                subTitle: b `Available now for iOS and Android`,
                openUrl: _ && wh(o.subdomain, i.slug)
            }),
            w = a && a.email || l || null,
            P = !!(a != null && a.is_subscribed && (a != null && a.is_magic)),
            A = (i == null ? void 0 : i.audience) === "founding",
            M = !!(a != null && a.is_free_subscribed || c),
            O = Ft(o, i),
            T = Mt((N = !1) => K(void 0, null, function*() {
                W(G.PAYWALL_UNLOCK_CTA_CLICKED, {
                    post_id: i.id,
                    publication_id: o.id,
                    from_email: N
                });
                try {
                    yield dt.post("/api/v1/post_unlock_token").send({
                        post_id: i.id,
                        token: g
                    }), x()
                } catch (R) {
                    m == null || m()
                }
            }), [i.id, o.id, g, x, m]);
        lt(() => {
            f && W(G.PAYWALL_UNLOCK_CTA_VIEWED, {
                publication_id: o.id,
                post_id: i.id
            })
        }, [i.id, o.id, f]), lt(() => {
            mn("launch_post_unlock_offer") && (T(!0), window.history.replaceState({}, document.title, Ce({
                launch_post_unlock_offer: null
            })))
        }, [T]);
        const v = p && p.id && !A && !f;
        let C;
        return v ? (i == null ? void 0 : i.type) === "podcast" ? C = y("Listen to this episode with a 7-day free trial") : (i == null ? void 0 : i.type) === "video" ? C = y("Watch with a 7-day free trial") : C = y("Keep reading with a 7-day free trial") : P ? C = s : C = t, r("div", {
            className: $("paywall", n),
            "data-testid": "paywall",
            "data-component-name": "Paywall"
        }, f && r(ui, {
            imageUrl: o.author_photo_url,
            size: 64,
            border: !0,
            borderThickness: "thin",
            className: "paywall-unlock-avatar"
        }), w && !f && r(I, {
            translated: !0,
            as: "div",
            className: "paywall-intro",
            paddingBottom: f ? 8 : 0
        }, "Hi ", r("b", null, I18N.p(w))), r("h2", {
            className: $("paywall-title", f && "unlock-treatment-new")
        }, C), e && !v && r("p", {
            className: "paywall-subtitle"
        }, e), v && r("div", {
            className: "paywall-free-trial-subtitle"
        }, (i == null ? void 0 : i.type) === "podcast" && r(I, {
            translated: !0,
            as: "p",
            className: "paywall-subtitle"
        }, "Subscribe to", " ", r(I, {
            as: "span",
            weight: "bold",
            fontStyle: "italic"
        }, I18N.p(o.name)), " ", "to listen to this post and get 7 days of free access to the full post archives."), (i == null ? void 0 : i.type) === "video" && r(I, {
            translated: !0,
            as: "p",
            className: "paywall-subtitle"
        }, "Subscribe to", " ", r(I, {
            as: "span",
            weight: "bold",
            fontStyle: "italic"
        }, I18N.p(o.name)), " ", "to watch this video and get 7 days of free access to the full post archives."), (i == null ? void 0 : i.type) === "newsletter" && r(I, {
            translated: !0,
            as: "p",
            className: "paywall-subtitle"
        }, "Subscribe to", " ", r(I, {
            as: "span",
            weight: "bold",
            fontStyle: "italic"
        }, I18N.p(o.name)), " ", "to keep reading this post and get 7 days of free access to the full post archives."), (i == null ? void 0 : i.type) === "adhoc_email" && r(I, {
            translated: !0,
            as: "p",
            className: "paywall-subtitle"
        }, "Subscribe to", " ", r(I, {
            weight: "bold",
            fontStyle: "italic"
        }, I18N.p(o.name)), " ", "to keep reading this email and get 7 days of free access to the full post archives.")), u ? !M && r(ht, {
            paddingTop: 24,
            justifyContent: "center"
        }, r(li, {
            autoFocus: d != null ? d : !0,
            email: w,
            freeSignup: c,
            freeSignupEmail: l,
            onAccentBackground: !0,
            pub: o,
            source: "post-unlock",
            submitButtonText: (i == null ? void 0 : i.type) === "podcast" ? y("Start listening") : (i == null ? void 0 : i.type) === "video" ? y("Start watching") : y("Start reading"),
            user: a,
            onSuccess: () => document.location.reload()
        })) : f ? r(it, null, S, r(Tst, {
            email: w,
            isStatic: h,
            publication: o,
            onClick: () => T(!1),
            postUrl: O,
            btnClassName: $(f && "paywall-cta-icon")
        }, r(It, {
            gap: 8,
            verticalAlign: "middle"
        }, f && r(Sst, {
            className: "icon",
            size: 24,
            isStatic: h,
            stroke: "#fff",
            fill: "none",
            strokeWidth: h ? 1 : 2
        }), y("Claim my free post")))) : r(Cst, {
            coupon: p,
            email: w,
            isStatic: h,
            post: i,
            postUrl: O,
            publication: o,
            useCoupon: v,
            user: a
        }), f && r(Nst, {
            email: w,
            isStatic: h,
            publication: o,
            post: i,
            postUrl: O,
            coupon: p,
            useCoupon: v
        }, y("Or upgrade your subscription."), " ", r("b", null, r(Vo, {
            pub: o,
            user: a,
            isStatic: !0
        }))), !P && !h && !f && r("div", {
            className: "paywall-login"
        }, r("a", {
            href: Me({
                for_pub: o.subdomain,
                change_user: !!w
            }),
            native: !0
        }, Ast({
            post: i,
            publication: o,
            isPaid: !u
        }), " ", r("b", null, y(w ? "Switch accounts" : "Sign in")))))
    },
    Cst = ({
        coupon: n,
        email: t,
        isStatic: e,
        post: s,
        postUrl: o,
        publication: i,
        useCoupon: a,
        user: c
    }) => {
        const l = !!(c != null && c.is_founding),
            u = !!(c != null && c.is_subscribed),
            d = !!(c != null && c.is_subscribed && (c != null && c.is_magic)),
            h = (s == null ? void 0 : s.audience) === "founding",
            {
                iString: p,
                iTemplate: f
            } = ot();
        if (e) {
            if (!i.plans) return null;
            const g = h ? Dt.FOUNDING_CHECKOUT_URL : Dt.CHECKOUT_URL,
                m = a ? `&coupon=${n.id}` : "",
                _ = h ? f `Upgrade to ${ye(i)}` : a ? p("Start trial") : r(Vo, {
                    pub: i,
                    user: c,
                    isStatic: e
                });
            return r(xst, {
                href: `${g}simple=true&utm_source=${bt.paywall}&utm_medium=${Et.email}&utm_content=${s.id}&next=${o}${m}`
            }, _)
        }
        return !l && h ? i.plans ? r(ao, {
            href: Js(i, {
                simple: !0,
                next: document.location.href,
                utm_source: bt.paywall,
                utm_medium: Et.web,
                utm_content: s ? s.id : null,
                plan: "founding"
            })
        }, f `Upgrade to ${ye(i)}`) : null : u ? d ? r(ao, {
            href: Me({
                for_pub: i.subdomain,
                email: t
            })
        }, p("Click here to sign in")) : null : i.plans ? r(ao, {
            href: Js(i, {
                simple: !0,
                next: document.location.href,
                utm_source: a ? bt.paywallFreeTrial : bt.paywall,
                utm_medium: e ? bt.email : bt.web,
                utm_content: s ? s.id : null,
                coupon: a ? n.id : null
            })
        }, a ? p("Start trial") : r(Vo, {
            pub: i,
            user: c,
            isStatic: e
        })) : null
    },
    xst = ({
        children: n,
        href: t
    }) => r("div", {
        className: "paywall-cta"
    }, r("a", {
        className: "button primary subscribe-btn",
        href: t
    }, r("span", null, n))),
    ao = ({
        children: n,
        href: t
    }) => r("div", {
        className: "paywall-cta"
    }, r("a", {
        href: t,
        native: !0
    }, r(ie, {
        className: "subscribe-btn"
    }, n))),
    Nst = ({
        post: n,
        isStatic: t,
        publication: e,
        onClick: s,
        children: o,
        postUrl: i,
        coupon: a,
        useCoupon: c
    }) => {
        const l = Js(e, {
            simple: !0,
            next: document.location.href,
            utm_source: bt.paywall,
            utm_medium: t ? Et.email : Et.web,
            utm_content: n ? n.id : null,
            just_signed_up: !1
        });
        s = () => K(void 0, null, function*() {
            window.location.href = l
        });
        const u = c ? `&coupon=${a.id}` : "",
            d = `${l}simple=true&utm_source=${bt.paywall}&utm_medium=${Et.email}&utm_content=${n.id}&next=${i}${u}`;
        return t ? r(kst, {
            href: d
        }, o) : r(Est, {
            onClick: s,
            href: d
        }, o)
    },
    kst = ({
        children: n,
        href: t
    }) => r("div", {
        className: "paywall-secondary-cta"
    }, r("a", {
        href: t
    }, n)),
    Est = ({
        children: n,
        href: t,
        onClick: e
    }) => r("div", {
        className: "paywall-secondary-cta"
    }, r("a", {
        onClick: e,
        href: t,
        native: !0
    }, n)),
    Tst = ({
        isStatic: n,
        postUrl: t,
        publication: e,
        onClick: s,
        href: o,
        children: i,
        btnClassName: a
    }) => n ? r("div", {
        className: "paywall-cta"
    }, r("a", {
        className: $("button", "primary", a),
        href: `${Dt.POST_URL}&launch_post_unlock_offer=true`
    }, i)) : r("div", {
        className: "paywall-cta"
    }, r("a", {
        onClick: s,
        native: !0
    }, r(ie, {
        className: $("subscribe-btn", a)
    }, i)));
class Pst extends cs {
    renderChildren() {
        const s = this.props,
            {
                ref: t
            } = s,
            e = te(s, ["ref"]);
        return r(ms, k({
            className: "modal-paywall"
        }, e))
    }
}
class _d extends An {
    constructor() {
        super(...arguments);
        at(this, "playbackEnabled", () => this.props.mediaUpload.preview_duration > 0);
        at(this, "cta", () => {
            const {
                iString: e
            } = I18N.i({
                pub: this.props.pub
            });
            return this.playbackEnabled() && !this.state.allSourcesFailed && !this.state.hasReachedEnd ? "" : this.playbackEnabled() ? e("Subscribe for full video") : e("Subscribe and watch")
        });
        at(this, "href", () => this.playbackEnabled() && !this.state.allSourcesFailed && !this.state.hasReachedEnd ? this.props.href : this.props.href || Js(this.props.pub, {
            simple: !0,
            next: document.location.href,
            utm_source: bt.paywall,
            utm_medium: Et.web,
            utm_content: this.props.mediaUpload.post_id
        }))
    }
}

function Ast({
    post: n,
    publication: t,
    isPaid: e = !0
} = {}) {
    const {
        iString: s,
        iTemplate: o
    } = I18N.i({
        pub: t
    });
    return e ? (n == null ? void 0 : n.audience) === "founding" ? ye(t) ? o `Already in the ${ye(t)} plan?` : o `Already in the Founding Member plan?` : s("Already a paid subscriber?") : s("Already a subscriber?")
}
const hc = ({
        post: n,
        pub: t,
        user: e,
        playerRef: s
    }) => {
        const o = !vh(e, n),
            i = Dc(n),
            {
                iString: a
            } = ot();
        return lt(() => {
            W(G.TRANSCRIPTION_PAGE_VIEWED, {
                post_id: n.id
            })
        }, [n.id]), i ? o ? r(ms, {
            user: e,
            publication: t,
            post: n,
            title: a("Transcriptions on this post are for paid subscribers"),
            reauthenticationTitle: a("To see the post, please re-authenticate.")
        }) : r(yst, {
            transcription: i,
            player: s,
            postId: n.id
        }) : null
    },
    Lst = {},
    yd = os({
        open: () => {}
    });

function wat({
    children: n
}) {
    const [t, e] = D(Lst), s = At(null), o = Rc(() => ({
        open: i => {
            e(i), setTimeout(() => {
                var a;
                (a = s.current) == null || a.open()
            }, 0)
        }
    }), []);
    return r(yd.Provider, {
        value: o
    }, n, r(xr, k({
        ref: s
    }, t)))
}

function Ist() {
    return Tn(yd)
}
const Ost = {
        "1m": "one minute",
        "1h": "one hour",
        "24h": "24 hours",
        "7d": "one week",
        "30d": "one month",
        "100y": "all time"
    },
    Mst = ({
        ban: n,
        onReply: t,
        showReplyLink: e,
        name: s
    }) => {
        const o = _t(n.expiry).standardDatetimeWithYear();
        return r("div", {
            className: "banned"
        }, s, " is banned until ", o, ".", " ", e && r("span", null, r("a", {
            onClick: t,
            href: "javascript:void(0)"
        }, "Leave a comment"), " ", "to let them know why."))
    };

function co({
    pub: n,
    sub: t,
    children: e,
    tab: s
}) {
    return !t || !t.email ? e : r("a", {
        target: "_blank",
        href: qc(n, t.email, {
            tab: s
        })
    }, e)
}
const Dst = ({
        sub: n
    }) => n ? n.is_subscribed ? r("span", {
        className: "subscribed"
    }, "Subscribed (Paid)") : n.is_free_subscribed ? r("span", {
        className: "subscribed"
    }, "Subscribed (Free)") : r("span", {
        className: "not-subscribed"
    }, "Not Subscribed") : null,
    Rst = ({
        bans: n,
        activeBans: t
    }) => n.length === 0 ? r("span", null, "No previous bans") : t.length > 0 ? r("span", {
        className: "banned status"
    }, "Banned") : r("span", {
        className: "status"
    }, "Banned previously from ", _t(n[0].start).standardDatetimeWithYear(), " to", " ", _t(n[0].expiry).standardDatetimeWithYear()),
    $st = ({
        comment: n = void 0,
        pub: t,
        onReply: e,
        onBan: s,
        onClose: o
    }) => {
        const [i, a] = D(null), [c, l] = D(!1), [u, d] = D([]), [h, p] = D(!1), [f, g] = D("24h"), [m, _] = D(null), [y, b] = D(!0), S = At(null), x = !!n || c, w = T => {
            const v = T;
            T.forEach(C => {
                v.findIndex(N => N.id === C.id) == -1 && v.push(C)
            }), d(v)
        }, P = () => {
            e(n.id), S.current.close()
        };
        lt(() => {
            S != null && S.current && (x ? S.current.state.open || S.current.open() : S.current.state.open && S.current.close())
        }, [n, c]), lt(() => K(void 0, null, function*() {
            if (n) {
                p(!1), l(!0), d([]), _(null), a(null);
                try {
                    const T = yield dt.get(`/api/v1/user/${n.user_id}/bans`);
                    d(T.body.bans), a(T.body.sub)
                } catch (T) {
                    console.error("Failed to get bans:", T), _(!0)
                }
                l(!1)
            }
        }), [n]);
        const A = () => K(void 0, null, function*() {
            l(!0);
            try {
                const T = yield dt.post(`/api/v1/comment_ban/${n.id}`, {
                    pub: t
                }).send({
                    user_id: n.user_id,
                    expiry: f,
                    removeAllComments: y
                });
                y && document.location.reload(), w(T.body.bans), p(!0), l(!1), s(n, u)
            } catch (T) {
                console.error("Failed to submit ban", T), _(!0)
            }
            l(!1)
        });
        if (!n) return null;
        const M = Ost[f],
            O = u.filter(T => _t(T.expiry).isAfter(_t()));
        return r(cs, {
            ref: S,
            noExitOnClick: !0,
            onClose: o
        }, r("div", {
            className: "ban-dialog comment"
        }, r("div", {
            className: "profile"
        }, r("div", {
            className: "photo"
        }, r(co, {
            pub: t,
            sub: i
        }, r(Df, {
            photo_url: n.photo_url,
            size: 80,
            banned: O.length > 0
        }))), r("div", {
            className: "info"
        }, r(co, {
            pub: t,
            sub: i
        }, r("span", {
            className: "name"
        }, n.name)), r(Dst, {
            sub: i
        }), r(Rst, {
            bans: u,
            activeBans: O
        }))), m && r("div", {
            className: "error"
        }, "Sorry, an error occurred."), c ? "Loading..." : r("form", {
            className: "form"
        }, O.length === 0 && r("div", null, r("label", null, "Ban from commenting for", r("select", {
            onInput: T => g(T.target.value),
            value: f
        }, r("option", {
            value: "1h"
        }, "one hour"), r("option", {
            value: "24h"
        }, "24 hours"), r("option", {
            value: "7d"
        }, "one week"), r("option", {
            value: "30d"
        }, "one month"), r("option", {
            value: "100y"
        }, "indefinitely"))), r("label", null, r("input", {
            type: "checkbox",
            checked: y,
            onInput: T => b(T.target.checked)
        }), "Remove ", $c(n.name), "'s", " ", r(co, {
            pub: t,
            sub: i,
            tab: "comments"
        }, "previous comments on your publication"), " ", "(this action cannot be reversed)"), r("div", {
            className: "button-wrapper"
        }, r(ie, {
            className: "button primary",
            onClick: A
        }, "Ban for ", M))), O.length > 0 && u.filter(T => T.user_id).map(T => r(Mst, {
            ban: T,
            showReplyLink: h,
            onReply: P,
            name: n.name
        })))))
    },
    qst = n => r(Ht, V(k({}, n), {
        name: "LinearIcon",
        svgParams: {
            height: 50,
            width: 50,
            fill: "#5E6AD2"
        }
    }), r("path", {
        d: "M41.3,44c0.5-0.4,0.9-0.8,1.3-1.3c9.8-9.8,9.8-25.6,0-35.4c-9.8-9.8-25.6-9.8-35.4,0C6.8,7.8,6.4,8.2,6,8.7   L41.3,44z"
    }), r("path", {
        d: "M38.3,46.2L3.8,11.7c-0.7,1.1-1.3,2.2-1.8,3.4L34.9,48C36.1,47.5,37.2,46.9,38.3,46.2z"
    }), r("path", {
        d: "M31.1,49.3L0.7,18.9c-0.4,1.5-0.6,3-0.7,4.5L26.6,50C28.1,49.9,29.6,49.7,31.1,49.3z"
    }), r("path", {
        d: "M21.1,49.8L0.2,28.9c0.8,5.1,3.1,9.9,7,13.9C11.2,46.6,16.1,49,21.1,49.8z"
    })),
    Bst = "_link_mhaex_1",
    Ust = "_withShareButton_mhaex_5",
    lo = {
        link: Bst,
        withShareButton: Ust
    },
    Fst = f => {
        var g = f,
            {
                comment: n,
                pub: t,
                user: e,
                post: s,
                reaction_token: o,
                commentsEnabledForPost: i,
                hideContextMenu: a,
                noRestack: c,
                onChange: l,
                startReply: u,
                shareComment: d,
                updateCommentReacted: h
            } = g,
            p = te(g, ["comment", "pub", "user", "post", "reaction_token", "commentsEnabledForPost", "hideContextMenu", "noRestack", "onChange", "startReply", "shareComment", "updateCommentReacted"]);
        var b;
        const {
            iString: m
        } = ot(), _ = Gn("like_comments_enabled"), y = !a && Hst({
            comment: n,
            user: e
        });
        return r(gt, {
            gap: 16,
            alignItems: "center",
            justifyContent: "start",
            paddingTop: 8,
            className: $("comment-actions", {
                [lo.withShareButton]: !!d
            })
        }, !n.deleted && [_ && r(Kc, {
            user: e,
            pub: t,
            post: s,
            comment: n,
            height: 16,
            countInParenthesesStyle: !0,
            token: o,
            onChange: ({
                comment: S
            }) => l(S),
            onReactedChange: S => {
                h && h(n.id, S)
            },
            noSelfUpdate: !!h
        }), i && r(Ks, {
            onClick: () => u(),
            className: lo.link
        }, r(gt, {
            gap: 6,
            alignItems: "center"
        }, r(Jf, {
            stroke: "var(--color-secondary-themed)",
            size: 16
        }), r(I.Meta, {
            color: "pub-secondary-text"
        }, m("Reply"), ((b = n.children) == null ? void 0 : b.length) > 0 && ` (${n.children.length})`))), !!d && r(Ks, {
            onClick: () => d(n.id),
            className: lo.link
        }, r(gt, {
            gap: 6,
            alignItems: "center"
        }, r(ei, {
            stroke: "var(--color-secondary-themed)",
            size: 16
        }), r(I.Meta, {
            color: "pub-secondary-text"
        }, m("Share")))), !c && r(zst, {
            pub: t,
            post: s,
            comment: n,
            onChange: l
        }), y && r(as, {
            trigger: r(hn, {
                priority: "secondary-theme",
                rounded: !1,
                size: 20
            }, r(Wc, {
                size: 16
            })),
            useMobileBottomSheet: !0,
            mobileBottomSheetTitle: m("More")
        }, r(jst, k({
            comment: n,
            pub: t,
            post: s,
            user: e,
            onChange: l
        }, p)))])
    };

function jst({
    comment: n,
    pub: t,
    post: e,
    user: s,
    onChange: o,
    startEdit: i,
    startReport: a,
    openBan: c
}) {
    const {
        iString: l,
        iTemplate: u
    } = ot(), d = At(), [h, p] = D(!1), [f, g] = D(!1), {
        pinned_by_user_id: m
    } = n, _ = !!m, [y, b] = D(!1), {
        editCommentEnabled: S,
        pinCommentEnabled: x,
        giftSubscriptionEnabled: w,
        reportCommentEnabled: P,
        deleteCommentEnabled: A,
        removeCommentEnabled: M,
        banUserEnabled: O,
        subscriberDetailsEnabled: T,
        topSectionExists: v,
        bottomSectionExists: C
    } = wd({
        comment: n,
        user: s
    }), N = () => K(this, null, function*() {
        if (!y && window.confirm(_ ? u `Are you sure you want to unpin this comment?` : u `Are you sure you want to pin this comment?`) && !y) {
            b(!0);
            try {
                yield dt.patch(`/api/v1/comment/${n.id}/pin`).send({
                    pinned: !_
                }), o({
                    pinned: !_
                }), document.location.reload()
            } catch (L) {
                alert(Je(L)), b(!1)
            }
        }
    }), R = () => K(this, null, function*() {
        var L;
        if (!h && window.confirm(l("Are you sure you want to remove this comment?")) && !h) {
            p(!0);
            try {
                yield dt.patch(`/api/v1/comment/${n.id}/status`).send({
                    status: $s.moderator_removed
                }), o({
                    suppressed: !0,
                    status: $s.moderator_removed,
                    body: null
                }), (L = d.current) == null || L.close()
            } catch (E) {
                alert(Je(E))
            }
            p(!1)
        }
    }), J = () => K(this, null, function*() {
        var L;
        if (!f && window.confirm(l("Are you sure you want to delete this comment?"))) {
            g(!0);
            try {
                yield dt.delete(`/api/v1/comment/${n.id}`).send(), o({
                    status: $s.deleted,
                    deleted: !0,
                    user_id: null,
                    name: null,
                    body: null
                }), (L = d.current) == null || L.close()
            } catch (E) {
                alert(Je(E))
            }
            g(!1)
        }
    }), j = () => K(this, null, function*() {
        const L = yn(e, n, t),
            E = `https://linear.app/substackinc/team/TPT/new?description=${n.body}%0A%0AComment%20author:%20[${n.name}](https://admin.substack.com/users/${n.user_id})%0A%0ALink:%20${L}&status=Triage`;
        window.open(E, "_blank")
    }), q = (s == null ? void 0 : s.is_contributor) && Qe(n) && n.ancestor_path === "", B = s == null ? void 0 : s.is_global_admin, Y = `${t.base_url}/subscribe?gift=true&recipient=${n.user_id}-${Ac(n.name,{hashIfEmpty:!0})}&comment_id=${n.id}}`;
    return r(it, null, q && r(Vst, {
        pub: t,
        post: e,
        comment: n
    }), S && r(kt, {
        icon: r(di, null),
        onClick: i
    }, l("Edit")), x && r(kt, {
        icon: r(bp, null),
        onClick: N
    }, l(y ? _ ? "Unpinning..." : "Pinning..." : _ ? "Unpin" : "Pin")), w && r(kt, {
        icon: r(Am, null),
        href: Y
    }, l("Gift a subscription")), B && r(kt, {
        icon: r(qst, {
            strokeWidth: 0,
            height: 24,
            width: 24
        }),
        onClick: j
    }, l("Add comment to Linear")), T && r(kt, {
        icon: r(hl, null),
        onClick: () => window.open(qc(t, n.email), "_blank")
    }, l("Subscriber details")), v && C && r(Fe, null), A && r(kt, {
        icon: r(Om, null),
        onClick: J,
        priority: "destructive"
    }, l(f ? "Deleting..." : "Delete")), M && r(kt, {
        icon: r(gp, null),
        onClick: R,
        priority: "destructive"
    }, l(h ? "Removing..." : "Remove")), P && r(kt, {
        icon: r(Zp, null),
        onClick: a,
        priority: "destructive"
    }, l("Report")), O && r(kt, {
        icon: r(df, null),
        onClick: c,
        priority: "destructive"
    }, l("Ban or suspend user")))
}

function wd({
    comment: n,
    user: t
}) {
    const e = !!(t && t.id === n.user_id),
        s = Sh(t, n),
        o = (t == null ? void 0 : t.is_contributor) && Qe(n) && n.ancestor_path === "",
        i = !e && n.metadata.eligibleForGift && !n.metadata.is_author,
        a = (t == null ? void 0 : t.is_contributor) && Qe(n),
        c = !e && !n.reported_by_user && !n.hidden && !n.suppressed,
        l = e,
        u = a && !e,
        d = a && t.is_global_admin,
        h = a && !n.user_banned && !e,
        p = a && n.email && !e;
    return {
        isOwnComment: e,
        editCommentEnabled: s,
        pinCommentEnabled: o,
        giftSubscriptionEnabled: i,
        canModerate: a,
        reportCommentEnabled: c,
        deleteCommentEnabled: l,
        removeCommentEnabled: u,
        removeAllCommentsEnabled: d,
        banUserEnabled: h,
        subscriberDetailsEnabled: p,
        topSectionExists: s || o || i || p,
        bottomSectionExists: h || c || u || l || d
    }
}

function Hst(n) {
    const {
        topSectionExists: t,
        bottomSectionExists: e
    } = wd(n);
    return t || e
}

function Vst({
    pub: n,
    post: t,
    comment: e
}) {
    const s = si(),
        {
            iString: o
        } = ot();
    return r(kt, {
        icon: r(Pn, null),
        onClick: () => {
            s.open({
                restackUrl: yn(t, e, n)
            })
        }
    }, o("Restack"))
}

function zst({
    pub: n,
    post: t,
    comment: e,
    onChange: s
}) {
    const {
        iString: o
    } = ot(), {
        canRestack: i,
        isRestacked: a,
        restacks: c,
        menuItems: l,
        nuxModal: u
    } = _p({
        pub: n,
        post: t,
        comment: e,
        onRestack: d => {
            s({
                restacked: d,
                restacks: c + (d ? 1 : -1)
            })
        }
    });
    if (i) return r("span", null, u, r(as, {
        layerClassName: "comment-restack-menu",
        useMobileBottomSheet: !0,
        mobileBottomSheetTitle: "Restack",
        trigger: r("a", {
            className: $("restack-button", a && "restacked"),
            href: "javascript:void(0)"
        }, r(Pn, null), o("Restack"), c > 0 && ` (${c})`)
    }, l))
}
const Wst = ({
        comment: n,
        bodyRef: t,
        expandToggleClicked: e
    }) => {
        const [s, o] = D(!1), i = (n.user_banned_for_comment || n.reported_by_user) && !s;
        return r("div", {
            className: "comment-body",
            ref: t
        }, r(Gst, {
            comment: n,
            showHiddenComment: s,
            setShowHiddenComment: o
        }), n.hidden ? r("i", null, "Comment hidden") : n.deleted ? r("i", null, "Comment deleted") : i ? r("i", null) : n.suppressed && !s ? r("i", null, "Comment removed") : n.type === "reply" ? r(Jst, {
            comment: n
        }) : Bf(n.body), r("div", {
            role: "button",
            className: "show-all-toggle",
            onClick: () => e()
        }, r("div", {
            className: "show-all-toggle-label"
        }, "Expand full comment")))
    },
    Gst = ({
        comment: n,
        showHiddenComment: t,
        setShowHiddenComment: e
    }) => {
        const s = Qe(n) && (n.user_banned_for_comment || n.reported_by_user),
            o = n.user_banned_for_comment ? "User was banned for this comment. " : "You reported this comment. ";
        return s && r("div", {
            className: "comment_notice"
        }, r("i", null, o, r("a", {
            href: "javascript:void(0)",
            onClick: () => e(!t)
        }, t ? "Hide" : "Show")))
    },
    Jst = ({
        comment: n
    }) => {
        const {
            title: t,
            truncated_body_text: e,
            date: s,
            bylines: o,
            like_count: i,
            comment_count: a,
            url: c
        } = n.reply;
        return r("a", {
            className: "reply-comment",
            href: Xe(c, {
                utm_source: bt.substack,
                utm_campaign: oe.postReplyComment,
                utm_medium: Et.web
            }),
            native: !0
        }, r("div", {
            className: "reply-comment-title"
        }, t), e && r("div", {
            className: "reply-comment-body"
        }, xh(e)), r("button", {
            className: "reply-comment-read-more"
        }, "Read more"), r("div", {
            className: "reply-comment-meta"
        }, Ch({
            date: s,
            bylines: o,
            like_count: i,
            comment_count: a
        })))
    },
    Yst = n => r(Ht, V(k({}, n), {
        name: "CommentBadgeHeartIcon",
        svgParams: {
            height: 24,
            width: 24,
            fill: "#000000",
            strokeWidth: 0
        }
    }), r("path", {
        d: "M20.4134 4.58753C19.9121 4.08434 19.3164 3.68508 18.6606 3.41266C18.0047 3.14023 17.3015 3 16.5914 3C15.8812 3 15.178 3.14023 14.5222 3.41266C13.8663 3.68508 13.2707 4.08434 12.7694 4.58753L12 5.36717L11.2306 4.58753C10.7293 4.08434 10.1337 3.68508 9.47781 3.41266C8.82195 3.14023 8.11878 3 7.40863 3C6.69847 3 5.9953 3.14023 5.33944 3.41266C4.68358 3.68508 4.08793 4.08434 3.58665 4.58753C1.46832 6.70656 1.33842 10.2849 4.00631 13.0037L12 21L19.9937 13.0037C22.6616 10.2849 22.5317 6.70656 20.4134 4.58753Z"
    })),
    Kst = n => r(Ht, V(k({}, n), {
        name: "CommentBadgePinIcon",
        svgParams: {
            height: 24,
            width: 24,
            fill: "#000000",
            strokeWidth: 0
        }
    }), r("path", {
        d: "M5 14.4709C5 15.3204 5.57723 15.8867 6.45681 15.8867H11.0196V20.0246C11.0196 21.1024 11.7251 22.5 12 22.5C12.2657 22.5 12.9712 21.1024 12.9712 20.0246V15.8867H17.5432C18.4136 15.8867 19 15.3204 19 14.4709C19 12.5709 17.4882 10.6709 15.0236 9.74837L14.7487 5.66529C16.0772 4.91627 17.0759 4.11244 17.5249 3.55524C17.7723 3.23554 17.9005 2.89756 17.9005 2.58699C17.9005 1.96585 17.4149 1.5 16.7094 1.5H7.28141C6.57592 1.5 6.09031 1.96585 6.09031 2.58699C6.09031 2.89756 6.21859 3.23554 6.47513 3.55524C6.91492 4.11244 7.91361 4.91627 9.25131 5.66529L8.96728 9.74837C6.50262 10.6709 5 12.5709 5 14.4709Z"
    })),
    Xst = n => r(Ht, V(k({}, n), {
        name: "CommentBadgePenIcon",
        svgParams: {
            height: 24,
            width: 24,
            fill: "#000000",
            strokeWidth: 0
        }
    }), r("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M6.58889 3.9704L6.25332 2.32056C6.16709 1.89657 6.49112 1.5 6.92378 1.5H16.9301C17.442 1.5 17.8255 1.96925 17.7234 2.47094L17.4389 3.87C17.3621 4.2472 17.0304 4.51823 16.6455 4.51823H7.25935C6.93405 4.51823 6.65372 4.28918 6.58889 3.9704ZM4.67357 12.2151C6.5326 10.2165 7.65784 7.75994 8.04929 6.22991C8.12323 5.94092 8.37629 5.72559 8.67459 5.72559H15.3334C15.6317 5.72559 15.8847 5.94092 15.9587 6.22991C16.3501 7.75993 17.4754 10.2164 19.3344 12.215C19.5386 12.4346 19.5681 12.7681 19.3936 13.012L12.6044 22.4985V14.098C13.6219 13.8276 14.373 12.8839 14.373 11.7613C14.373 10.4277 13.3133 9.34668 12.0061 9.34668C10.6989 9.34668 9.63916 10.4277 9.63916 11.7613C9.63916 12.8827 10.3886 13.8256 11.4044 14.0971L11.4044 22.5L4.61435 13.012C4.43985 12.7681 4.46936 12.4346 4.67357 12.2151ZM11.1162 11.7619C11.1162 11.2618 11.5136 10.8564 12.0038 10.8564C12.494 10.8564 12.8914 11.2618 12.8914 11.7619C12.8914 12.262 12.494 12.6674 12.0038 12.6674C11.5136 12.6674 11.1162 12.262 11.1162 11.7619Z"
    }));

function Qst({
    subject: n,
    pub: t,
    user: e,
    freeSignup: s,
    freeSignupEmail: o,
    hoverDisabled: i = !1,
    onClick: a
}) {
    return r(it, null, r(ht, {
        inline: !0,
        gap: 4,
        alignItems: "center"
    }, r(vn, {
        subject: n,
        disabled: i,
        utmSource: "comment"
    }, r("a", {
        onClick: a,
        href: a ? "javascript:void(0)" : Qo(n)
    }, r(I.B4, {
        color: "pub-primary-text",
        weight: "semibold"
    }, n.name))), r(Cr, {
        size: "sm",
        tier: n.bestseller_tier,
        userId: n.id
    })))
}
const vd = ({
    post: n,
    pub: t,
    user: e,
    freeSignup: s,
    freeSignupEmail: o,
    comment: i,
    isCollapsed: a,
    onProfileClick: c,
    userBanned: l,
    toggleCollapse: u,
    noHoverProfile: d,
    userPendingApproval: h
}) => {
    var P, A;
    const {
        iString: p,
        iTemplate: f,
        language: g,
        iPlural: m
    } = ot(), [_, y] = D(!1), b = M => M.children.length + M.children.reduce((O, T) => O + b(T), 0), S = b(i), x = !!i.edited_at, w = !i.hidden && ((P = i.metadata.author_on_other_pub) == null ? void 0 : P.id) != null;
    return [r("div", {
        className: "comment-meta"
    }, r("span", {
        className: "commenter-name"
    }, i.name ? r(Qst, {
        subject: qs(i),
        pub: t,
        user: e,
        freeSignup: s,
        freeSignupEmail: o,
        hoverDisabled: d || !Qe(i) || i.hidden || a,
        onClick: c ? () => c(i) : null
    }) : i.hidden ? r("i", null, p("hidden")) : i.deleted ? r("i", null, p("deleted")) : Qe(i) ? p("Anonymous") : p("Removed"), l && r("span", {
        className: "ban-status"
    }, " (Banned)"), h && r("a", {
        className: "pending-approval",
        href: `/publish/moderation/new-commenters?user=${i.user_id}`,
        target: "_blank",
        rel: "noopener"
    }, " ", "(", p("Awaiting New Commenter Approval"), ")")), i.metadata.author_on_other_pub && !i.metadata.is_author && (w ? r(sf, {
        publication_id: (A = i.metadata.author_on_other_pub) == null ? void 0 : A.id
    }, r(pc, {
        comment: i
    })) : r(pc, {
        comment: i
    })), r("a", {
        className: "comment-timestamp",
        href: yn(n, i, t),
        onClick: M => (void 0).onDateClick(M),
        rel: "nofollow",
        native: !0
    }, _t(i.date).locale(g).standardDateOrTime()), x && [r("span", {
        className: "comment-publication-name-separator"
    }, "·"), r("span", {
        className: "edited-indicator"
    }, r("em", null, f `edited ${_t(i.edited_at).locale(g).standardDateOrTime()}`))], r(Zst, {
        comment: i
    })), a && r("div", {
        className: "tags-row"
    }, r(ie, {
        className: "outline comment-collapse-toggle",
        onClick: () => {
            setTimeout(() => {
                u(), y(!1)
            }, 0), y(!0)
        }
    }, _ ? m("Expanding comment reply", "Expanding comment replies", S) : m("Expand comment reply", "Expand comment replies", S)))]
};

function pc({
    comment: n
}) {
    return ot(), r("a", {
        className: "commenter-publication",
        href: Ce(n.metadata.author_on_other_pub.base_url, {
            utm_source: bt.substack,
            utm_medium: Et.web,
            utm_content: Zo.commentMetadata
        }),
        rel: "nofollow",
        target: "_blank"
    }, r("span", null, fr(n.metadata.author_on_other_pub.name, 32), " "))
}
const Zst = ({
        comment: n
    }) => {
        const [t, e] = D(!1), s = At(null), o = At(null), {
            iString: i,
            iTemplate: a
        } = ot(), c = n.pinned_by_user_id ? "pinned" : n.metadata.is_author ? "author" : n.reactor_names.length > 0 ? "liked" : null;
        if (!c) return null;
        const l = {
                pinned: r(Kst, null),
                author: r(Xst, null),
                liked: r(Yst, null)
            },
            u = {
                pinned: i("Pinned"),
                author: i("Author"),
                liked: a `Liked by ${n.reactor_names.join(", ")}`
            },
            d = c === "pinned" && n.pinned_by_name;
        return r("span", {
            ref: s,
            className: $("highlight", {
                hover: t
            }),
            onMouseEnter: () => d && e(!0),
            onMouseLeave: () => d && e(!1)
        }, l[c], r("span", {
            className: "highlight-text"
        }, u[c]), d && r(rl, {
            baseRef: s,
            hoverToggle: !0,
            onOpen: () => {
                var h;
                return (h = o.current) == null ? void 0 : h.open()
            },
            onClose: () => {
                var h;
                return (h = o.current) == null ? void 0 : h.close()
            }
        }, r(hi, {
            ref: o,
            noList: !0,
            className: "explanation above small thin"
        }, r(I, {
            as: "span",
            translated: !0
        }, "Pinned by ", r("span", {
            className: "bold"
        }, I18N.p(n.pinned_by_name))))))
    },
    Ds = "commentInput";
class trt extends he {
    constructor(t) {
        var e;
        super(t), this.state = {
            value: (e = t.commentBeingEdited) == null ? void 0 : e.body,
            alsoShareToNotes: !1
        }
    }
    componentWillMount() {
        if (typeof localStorage != "undefined") {
            const t = JSON.parse(localStorage.getItem(Ds) || "{}");
            t.postId === this.props.post.id && this.setState({
                value: t.value,
                alsoShareToNotes: !!t.alsoShareToNotes
            }), localStorage.removeItem(Ds)
        }
    }
    componentDidMount() {
        var t;
        this.props.autoFocus && ((t = this.bodyInput) == null || t.focus())
    }
    needsProfile() {
        const {
            user: t
        } = this.props;
        return !t || !t.name
    }
    onKeyDown(t) {
        var e;
        if ((e = this.props.user) != null && e.is_magic) {
            t && t.preventDefault(), this.showFinishMagicLoginModal();
            return
        }
        if (!Wr(this.props.user, this.props.post, this.props.pub).canReply) {
            t && t.preventDefault(), this.showPaywall();
            return
        }
        t.key === "Escape" && this.bodyInput.value.trim() === "" ? this.props.onCancel && this.props.onCancel() : t.key === "Enter" && t.metaKey && this.form.handleSubmit(t)
    }
    maybeSaveComment() {
        typeof localStorage != "undefined" && localStorage.setItem(Ds, JSON.stringify({
            postId: this.props.post.id,
            value: this.state.value,
            alsoShareToNotes: this.state.alsoShareToNotes
        }))
    }
    onInput(t) {
        if (!Wr(this.props.user, this.props.post, this.props.pub).canReply) {
            t && t.preventDefault(), this.showPaywall();
            return
        }
        this.setState({
            value: this.bodyInput.value || ""
        })
    }
    postComment() {
        return K(this, arguments, function*({
            profileUpdated: t
        } = {}) {
            const {
                user: e,
                pub: s,
                post: o,
                parent: i,
                token: a,
                iString: c
            } = this.props, {
                alsoShareToNotes: l
            } = this.state;
            if (!Wr(e, o, s).canReply) throw this.maybeSaveComment(), yield this.showPaywall(), yield new Promise(d => setTimeout(d, 600)), new ha(c("Please sign in"));
            if (this.needsProfile() && !t) throw this.maybeSaveComment(), yield this.showProfileUpdate(), yield new Promise(d => setTimeout(d, 600)), new ha(c("Please update your profile"));
            const u = {
                body: this.bodyInput.value,
                token: a
            };
            try {
                let d;
                if (l) {
                    const p = yield dt.post("/api/v1/comment/attachment").send({
                        type: "link",
                        url: Ft(s, o)
                    });
                    if (!(p != null && p.body)) console.log("Error creating attachment");
                    else {
                        const f = k({}, u);
                        f.attachmentIds = [p.body.id], d = yield dt.post("/api/v1/comment/feed").send(f)
                    }
                }
                i && (u.parent_id = i.id);
                const h = yield dt.post(`/api/v1/post/${o.id}/comment`).send(u);
                if (typeof localStorage != "undefined" && localStorage.removeItem(Ds), !(e != null && e.profile_set_up_at)) {
                    const {
                        body: {
                            count: p
                        }
                    } = yield dt.get("/api/v1/user/profile_role_count");
                    if (p >= 2) return window.location = Xe(`${Nh()}/profile/start`, {
                        commentProfileFlow: !0,
                        next: yn(o, h.body, s)
                    }), !1
                }
                return {
                    notesComment: d,
                    res: h
                }
            } catch (d) {
                throw d.response && d.response.statusCode === 403 && (e && e.is_magic ? yield this.showFinishMagicLoginModal(): yield this.showPaywall()), d
            }
        })
    }
    onSuccess(t) {
        const {
            res: e,
            notesComment: s
        } = t, {
            iString: o,
            getConfigFor: i
        } = this.props;
        if (e !== !1)
            if (this.props.onSuccess && !this.needsProfile()) {
                if (this.state.alsoShareToNotes && s) {
                    const a = Ws(s.body);
                    this.props.popToast(c => r(ce, V(k({}, c), {
                        icon: wc,
                        text: i("unified_home_emabled_web") ? o("Note shared") : o("Shared to Notes"),
                        cta: o("View Now"),
                        href: a
                    })))
                }
                this.setState({
                    value: ""
                }), this.props.onSuccess(e.body)
            } else {
                const a = Xs(this.props.post, this.props.pub);
                window.location.pathname === a ? window.location.reload() : window.location.href = Xs(this.props.post, this.props.pub, this.state.alsoShareToNotes ? {
                    feedCommentUrl: Ws(e.body)
                } : {})
            }
    }
    showFinishMagicLoginModal() {
        return K(this, null, function*() {
            this.finishMagicLoginModalShown || (this.finishMagicLoginModalShown = !0, W(G.FINISH_MAGIC_LOGIN_MODAL_SHOWN, {
                post_id: this.props.post.id,
                post_type: this.props.post.type,
                parent_id: this.props.parent && this.props.parent.id
            })), this.finishMagicLoginModal && (this.sendLoginEmail(), yield this.finishMagicLoginModal.open())
        })
    }
    showPaywall() {
        return K(this, null, function*() {
            this.paywallShown || (this.paywallShown = !0, W(G.COMMENT_PAYWALL_SHOWN, {
                post_id: this.props.post.id,
                post_type: this.props.post.type,
                parent_id: this.props.parent && this.props.parent.id
            })), this.modalPaywall && this.modalPaywall.open && (yield this.modalPaywall.open())
        })
    }
    showProfileUpdate() {
        return K(this, null, function*() {
            this.profileUpdaterShown || (this.profileUpdaterShown = !0, W(G.PROFILE_UPDATER_SHOWN, {
                post_id: this.props.post.id,
                parent_id: this.props.parent && this.props.parent.id
            })), this.profileUpdater && (yield this.profileUpdater.open())
        })
    }
    sendLoginEmail() {
        return K(this, null, function*() {
            if (!this.loginEmailSent) {
                this.loginEmailSent = !0;
                try {
                    yield dt.post("/api/v1/email-login").send({
                        email: this.props.user.email,
                        redirect: document.location.href.split("?")[0].split("#")[0]
                    })
                } catch (t) {
                    alert(Je(t))
                }
            }
        })
    }
    focus() {
        this.bodyInput.focus()
    }
    render({
        user: t,
        freeSignup: e,
        freeSignupEmail: s,
        pub: o,
        post: i,
        token: a,
        onCancel: c,
        autoFocus: l,
        commentBeingEdited: u,
        saveEdit: d,
        formClassName: h,
        bannedFromNotes: p,
        iString: f,
        iTemplate: g
    }, {
        value: m,
        alsoShareToNotes: _
    }) {
        return r(gt, {
            "data-test-id": "comment-input",
            flex: "grow",
            className: $("comment-input-wrap", {
                comment: u
            })
        }, r(cl, {
            ref: y => this.form = y,
            className: $("comment-input", h),
            performSubmit: y => u ? d(m) : this.postComment(y),
            onSuccess: y => this.onSuccess(y),
            noInlineErrors: !0,
            autoLock: !0
        }, r(pl, {
            user: t,
            size: 32
        }), r(X, {
            flex: "grow",
            className: "comment-input-right"
        }, u && r(vd, {
            post: i,
            pub: o,
            user: t,
            freeSignup: e,
            freeSignupEmail: s,
            comment: u,
            isCollapsed: !1,
            userBanned: !1
        }), r(Qf, {
            ref: y => this.bodyInput = y && y.base,
            name: "body",
            placeholder: f("Write a comment..."),
            autoHeight: !0,
            maxLines: 8,
            value: m || "",
            onInput: y => this.onInput(y),
            onKeyDown: y => this.onKeyDown(y)
        }), r("div", {
            id: "error-container"
        }), r(gt, {
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 8
        }, !!m && !c && r(gt, {
            gap: 8,
            alignItems: "center",
            justifyContent: "center"
        }, !p && r(Xh, {
            name: "also_feed",
            size: "medium",
            as: "div",
            checked: _,
            onChange: () => {
                this.setState({
                    alsoShareToNotes: !_
                })
            },
            withTheme: !0
        }), !p && r(I.B4, {
            color: "pub-secondary-text",
            translated: !0
        }, "Also share a", " ", r(Ks, {
            color: "pub-secondary-text",
            decoration: "underline",
            target: "_blank",
            href: gr({
                urlParams: {
                    utm_content: Zo.commentShareCheckbox
                }
            })
        }, "note"))), (c || !!m) && r(ie, {
            className: "primary",
            type: "submit"
        }, f(u ? "Save" : "Post")), c && r(ie, {
            className: "cancel",
            onClick: c
        }, f("Cancel"))))), r(Yf, null, r(Rf, {
            ref: y => this.profileUpdater = y,
            user: t,
            freeSignup: e,
            freeSignupEmail: s,
            optionalPhoto: !0,
            token: a,
            text: f("Save & Post Comment"),
            onBeforeClose: y => y && this.form.handleSubmitAsync(null, {
                profileUpdated: !0
            })
        }), r(Pst, {
            ref: y => this.modalPaywall = y,
            user: t,
            freeSignup: e,
            freeSignupEmail: s,
            publication: o,
            post: i,
            title: g `Only ${_r(i.audience)?"founding":"paid"} subscribers can comment on this post`,
            reauthenticationTitle: f("To post a comment, please re-authenticate.")
        }), r(cs, {
            ref: y => this.finishMagicLoginModal = y,
            className: "finish-magic-login-modal"
        }, r("h4", null, f("Check your email")), r("p", null, f("For your security, we need to re-authenticate you.")), r(I, {
            as: "p",
            translated: !0
        }, "Click the link we sent to ", I18N.p(t == null ? void 0 : t.email), ", or", " ", r("a", {
            href: Me({
                for_pub: o.subdomain,
                with_password: !0
            }),
            native: !0
        }, "click here to sign in"), "."))))
    }
}
const dr = Bc(Jo(rs(trt))),
    fc = 200,
    ert = 50,
    nrt = 140,
    srt = 728,
    rrt = 80;

function ort() {
    const t = Math.min(srt, document.body.clientWidth) - nrt;
    return Math.min(Math.ceil(t / ert), 10)
}
const mc = ort();
class Ji extends he {
    constructor(e, s) {
        super(e, s);
        at(this, "bodyRef", ae());
        at(this, "headContainerRef", ae());
        at(this, "openBan", () => {
            this.props.commentActions.openBanDialog({
                comment: this.props.comment,
                onReply: () => {
                    this.startReply()
                }
            })
        });
        at(this, "setSelectedHighlight", () => {
            const s = Ff() === this.props.comment.id;
            this.setState({
                isSelected: s
            })
        });
        at(this, "startEdit", () => {
            this.setState({
                editing: !0
            })
        });
        at(this, "saveEdit", e => K(this, null, function*() {
            return this.state.editing ? {
                res: yield dt.patch(`/api/v1/comment/${this.props.comment.id}`).send({
                    body: e
                })
            } : void 0
        }));
        at(this, "onSaveEditSuccess", ({
            edited: e
        }) => {
            this.setState({
                editing: !1
            }), this.props.onChange(k(k({}, this.props.comment), e))
        });
        at(this, "showReportModal", () => {
            var o;
            const {
                pub: e,
                comment: s
            } = this.props;
            this.props.onReport({
                pub: e,
                canReportToAdmins: !!(e != null && e.moderation_enabled) && !((o = s.metadata) != null && o.is_author),
                onSubmit: l => K(this, [l], function*({
                    reportCategory: i,
                    reportedToSubstack: a,
                    details: c
                }) {
                    yield dt.post(`/api/v1/comment/${s.id}/report`).send({
                        publication_id: e == null ? void 0 : e.id,
                        details: c,
                        reportCategory: i,
                        reportedToSubstack: a
                    }), this.props.onChange(V(k({}, this.props.comment), {
                        reported_by_user: !0
                    }))
                })
            })
        });
        at(this, "expandToggleClicked", () => {
            const e = this.bodyRef.current;
            e && (e.classList.remove("long"), e.classList.add("expanded"), W(G.COMMENT_EXPAND_TOGGLE_CLICKED, {
                hiddenHeight: e.getAttribute("data-hidden-height")
            }))
        });
        at(this, "onChange", e => {
            this.props.onChange ? this.props.onChange(k(k({}, this.props.comment), e)) : document.location.href = Xs(this.props.post, this.props.pub)
        });
        at(this, "setComment", e => {
            this.setState({
                comment: e
            })
        });
        at(this, "setCollapsed", e => {
            var s, o;
            if (this.setState({
                    isCollapsed: e
                }), e && ((o = (s = this.headContainerRef) == null ? void 0 : s.current) != null && o.scrollIntoView)) {
                const i = this.headContainerRef.current.getBoundingClientRect();
                i.top < 0 && (document.documentElement.scrollTop += i.top - rrt)
            }
            this.props.retainUserCollapseState && jf(this.props.comment.id, e)
        });
        this.state = {
            editing: !1,
            replying: !1,
            hideAnchors: !1,
            isSelected: !1,
            isCollapsed: this.props.retainUserCollapseState && Uf(this.props.comment.id)
        }
    }
    componentDidMount() {
        this.setSelectedHighlight(), this.setReplyStateFromHash(), window.addEventListener("hashchange", this.setSelectedHighlight, !1), window.addEventListener("popstate", this.setSelectedHighlight, !1), this.updateOverflows()
    }
    componentWillUnmount() {
        window.removeEventListener("hashchange", this.setSelectedHighlight, !1), window.removeEventListener("popstate", this.setSelectedHighlight, !1)
    }
    componentDidUpdate(e) {
        var s, o;
        ((s = e.comment) == null ? void 0 : s.id) !== ((o = this.props.comment) == null ? void 0 : o.id) && this.setSelectedHighlight(), e.replying !== this.props.replying && this.props.replying && this.startReply()
    }
    setReplyStateFromHash() {
        if (this.props.comment.deleted || typeof window == "undefined" || !window.location.hash) return;
        const e = /^#comment-(\d+)-reply$/.exec(window.location.hash);
        !e || Number(e[1]) !== this.props.comment.id || (window.location.hash = window.location.hash.replace(/-reply$/, ""), this.startReply())
    }
    startReply() {
        return K(this, null, function*() {
            this.props.onStartReply ? this.props.onStartReply(this.props.comment) : (yield new Promise(e => this.setState({
                replying: !0
            }, e)), this.commentInput && this.commentInput.bodyInput && this.commentInput.bodyInput.focus && this.commentInput.bodyInput.focus())
        })
    }
    onDateClick(e) {
        const [s, o] = e.target.href.split("?")[0].split("#");
        s === window.location.href.split("?")[0].split("#")[0] && o && (e.preventDefault(), this.setState({
            hideAnchors: !0
        }, () => {
            window.location.hash = `#${o}`, this.setState({
                hideAnchors: !1
            })
        }))
    }
    updateOverflows() {
        const e = this.bodyRef.current;
        if (!e) return;
        const s = e.scrollHeight - e.clientHeight;
        s > 0 && s < fc ? e.classList.add("expanded") : s >= fc && (e.classList.add("long"), e.setAttribute("data-hidden-height", s))
    }
    render({
        user: e,
        comment: s,
        freeSignup: o,
        freeSignupEmail: i,
        pub: a,
        post: c,
        reaction_token: l,
        depth: u,
        collapseAtDepth: d,
        onChange: h,
        scrollRef: p,
        retainUserCollapseState: f,
        onStartReply: g,
        noHoverProfile: m,
        onProfileClick: _,
        onShareComment: y,
        hideContextMenu: b,
        noRestack: S,
        updateCommentReacted: x,
        iString: w
    }, {
        isSelected: P,
        replying: A,
        editing: M,
        hideAnchors: O,
        isCollapsed: T
    }) {
        var R, J, j, q;
        const v = a.community_enabled && c && c.write_comment_permissions !== "none",
            {
                user_banned: C
            } = s;
        let N = !1;
        return ((R = this.context.getExperimentVariant("subscriber_badges_2")) != null ? R : "control") === "control" && ((J = s.metadata) != null && J.is_author ? N = "author" : (j = s.metadata) != null && j.founding && (N = "founding")), M ? r(dr, {
            autoFocus: !0,
            user: e,
            freeSignup: o,
            freeSignupEmail: i,
            pub: a,
            post: c,
            commentBeingEdited: s,
            saveEdit: this.saveEdit,
            token: l,
            onCancel: () => this.setState({
                editing: !1
            }),
            onSuccess: h ? this.onSaveEditSuccess : null
        }) : r("div", {
            className: $("comment", {
                selected: P,
                "post-reply": s.type === "reply",
                collapsed: T
            }),
            key: `comment-${s.id}`
        }, !O && [r("div", {
            id: `comment-${s.id}`,
            className: "comment-anchor"
        }), r("div", {
            id: `comment-${s.id}-reply`,
            className: "comment-anchor"
        })], r("table", {
            className: "comment-content"
        }, r("tr", null, r("td", {
            className: "comment-head",
            ref: this.headContainerRef
        }, r(rf, {
            subject: qs(s),
            disabled: m || !Qe(s) || s.hidden || T,
            utmSource: "comment"
        }, r(mo, {
            subject: qs(s),
            pub: a,
            user: e,
            freeSignup: o,
            freeSignupEmail: i,
            token: l,
            isBanned: C,
            tooltip: {
                founding: kh(a),
                author_ons_other_pub: w("Author of another publication")
            }[N],
            badge: N,
            isAuthor: s.metadata.is_author,
            onClick: _ ? () => _(s) : null,
            lazy: !0
        }))), r("td", {
            className: "comment-rest"
        }, r(vd, {
            post: c,
            pub: a,
            user: e,
            freeSignup: o,
            freeSignupEmail: i,
            comment: s,
            commentUser: qs,
            isCollapsed: T,
            toggleCollapse: () => this.setCollapsed(!this.state.isCollapsed),
            onProfileClick: _,
            userBanned: C,
            noHoverProfile: m,
            userPendingApproval: s.status === $s.new_commenter_approval_required && (e == null ? void 0 : e.is_admin)
        }), r(Wst, {
            comment: s,
            bodyRef: this.bodyRef,
            expandToggleClicked: this.expandToggleClicked
        }), !A && r(Fst, {
            comment: s,
            pub: a,
            user: e,
            post: c,
            reaction_token: l,
            commentsEnabledForPost: v,
            hideContextMenu: b,
            noRestack: S,
            onChange: this.onChange,
            startReply: () => this.startReply(),
            startEdit: () => this.startEdit(),
            startReport: this.showReportModal,
            openBan: this.openBan,
            updateCommentReacted: x,
            shareComment: y
        })))), A && v && r(dr, {
            ref: B => this.commentInput = B,
            user: e,
            freeSignup: o,
            freeSignupEmail: i,
            pub: a,
            post: c,
            parent: s,
            token: l,
            onCancel: () => this.setState({
                replying: !1
            }),
            onSuccess: h ? B => {
                this.setState({
                    replying: !1
                });
                const Y = V(k({}, s), {
                    children: [B].concat(s.children)
                });
                h(Y)
            } : null
        }), s.childrenSummary && r("div", {
            className: "more-replies-container"
        }, r("a", {
            className: "more-replies",
            href: yn(c, s, a)
        }, s.childrenSummary)), !s.childrenSummary && u >= mc && !!s.children.length && r(ie, {
            className: "outline continue-thread-button",
            href: yn(c, s, a)
        }, w("Continue Thread →")), !s.childrenSummary && u < mc && r(Nd, {
            key: `comment:${s.id}`,
            user: e,
            freeSignup: o,
            freeSignupEmail: i,
            pub: a,
            post: c,
            comments: (q = s.children) != null ? q : [],
            parent: s,
            reaction_token: l,
            depth: (u || 0) + 1,
            collapseAtDepth: d,
            onChange: h,
            isChild: !0,
            scrollRef: p,
            retainUserCollapseState: f,
            onStartReply: g,
            noHoverProfile: m,
            onProfileClick: _,
            hideContextMenu: b,
            updateCommentReacted: x,
            noRestack: !0
        }), !T && r("div", {
            className: "comment-list-collapser",
            onClick: () => this.setCollapsed(!0)
        }, r("div", {
            className: "comment-list-collapser-line"
        })))
    }
}
at(Ji, "contextType", ul);

function irt(n) {
    const t = hrt(),
        e = tf();
    return r(Ji, V(k({}, n), {
        commentActions: t,
        onReport: e
    }))
}
const art = Uc(rs(irt));
Ji.displayName = "Comment_Internal";
const crt = 5,
    lrt = 1,
    Sd = 16,
    urt = 50,
    drt = 200;

function zo(n) {
    return n.reduce((t, e) => t + 1 + zo(e.children || []), 0)
}
const Cd = ({
    user: n,
    freeSignup: t,
    freeSignupEmail: e,
    pub: s,
    post: o,
    comments: i,
    reaction_token: a,
    depth: c,
    collapseAtDepth: l,
    onChange: u,
    pageSize: d,
    retainUserCollapseState: h,
    updateCommentReacted: p,
    parent: f,
    scrollRef: g,
    className: m,
    onStartReply: _,
    noHoverProfile: y,
    onProfileClick: b,
    hideContextMenu: S,
    noRestack: x
}) => {
    const w = d || Sd,
        [P, A] = D(!1),
        [M, O] = D(!1),
        [T, v] = D(w),
        [C, N] = D(-1),
        [R, J] = D(new Set(i.map(({
            id: z
        }) => z))),
        {
            iString: j,
            iPlural: q
        } = ot();
    lt(() => {
        C >= 0 && window.scrollTo(window.scrollX, C)
    }, [C]);
    const B = Ist();
    if ((i || []).length === 0) return;
    const [Y, L] = Pf(i, ({
        id: z,
        user_id: et
    }) => R.has(z) || et === (n == null ? void 0 : n.id)), E = Y.slice(0, T), U = z => {
        B.open({
            pub: s,
            post: o,
            commentId: z,
            comments: i,
            user: n,
            utm_campaign: oe.commentListShareCta
        })
    };
    return r("div", {
        className: $("comment-list", m, {
            "has-new-comments": L.length > 0
        })
    }, L.length > 0 && r(ie, {
        className: "collapsed-reply outline",
        onClick: () => {
            setTimeout(() => {
                J(new Set(i.map(({
                    id: z
                }) => z))), O(!1)
            }, 0), O(!0)
        }
    }, M ? q("loading 1 new reply", "loading %1 new replies", zo(L)) : q("1 new reply", "%1 new replies", zo(L))), r("div", {
        className: "comment-list-items"
    }, E.map(z => r(art, {
        key: `cmt-${z.id}`,
        user: n,
        freeSignup: t,
        freeSignupEmail: e,
        pub: s,
        post: o,
        comment: z,
        parent: f,
        reaction_token: a,
        collapseAtDepth: l,
        depth: c || 0,
        onChange: u,
        scrollRef: g,
        retainUserCollapseState: h,
        onStartReply: _,
        noHoverProfile: y,
        onShareComment: U,
        onProfileClick: b,
        hideContextMenu: S,
        noRestack: x,
        updateCommentReacted: p
    }))), Y.length > E.length && r(ie, {
        className: "collapsed-reply outline",
        onClick: () => {
            N(window.scrollY), setTimeout(() => {
                v(T + w), A(!1)
            }, 0), A(!0)
        }
    }, j(P ? "Loading More" : "Load More")))
};
Cd.displayName = "CommentList";
const xd = Uc(Cd);
xd.displayName = "CommentList";
const Nd = xd;

function kd(n) {
    const [t, e] = D(null), s = Rc(() => ({
        openBanDialog: e
    }), []);
    return r(Ed.Provider, {
        value: s
    }, r(Nd, k({}, n)), r($st, V(k({}, t), {
        pub: n.pub,
        onClose: () => e(null),
        onBan: (o, i) => {
            const {
                onChange: a
            } = n;
            a ? a(V(k({}, o), {
                user_banned: !0,
                bans: i.concat(o.bans)
            })) : document.location.href = Xs(n.post, n.pub)
        }
    })))
}
const Ed = os({
    openBanDialog: () => {}
});

function hrt() {
    return Tn(Ed)
}
class Td extends he {
    onTopReached() {
        this.state.topReached || (this.setState({
            topReached: !0
        }), W(G.POST_SEEN, {
            post_id: this.props.post.id,
            post_audience: this.props.post.audience,
            post_type: this.props.post.type
        }))
    }
    onBottomReached() {
        this.state.bottomReached || (this.setState({
            bottomReached: !0
        }), W(G.POST_BOTTOM_SEEN, {
            post_id: this.props.post.id,
            post_audience: this.props.post.audience,
            post_type: this.props.post.type
        }))
    }
    enableEmailNotifications() {
        return K(this, null, function*() {
            try {
                yield dt.post(`/api/v1/post/${this.props.post.id}/subscribe`), window.location.reload()
            } catch (t) {
                console.error("Failed to subscribe to email notifications:", t), alert(Je(t))
            }
        })
    }
    render({
        className: t,
        pub: e,
        post: s,
        user: o,
        freeSignup: i,
        freeSignupEmail: a,
        isStatic: c,
        hidden: l,
        truncated: u,
        invisible: d,
        post_reaction_token: h,
        onChange: p,
        showCta: f = u,
        showUnsubscribeNotice: g,
        dataForEmailRender: m = {},
        showReactions: _ = !0,
        gap: y = 16,
        iString: b,
        iTemplate: S,
        iPlural: x,
        language: w,
        showShare: P
    }) {
        typeof l != "boolean" && (l = s.hidden);
        let A, M;
        l ? (A = b("Subscribe to view"), M = Xe("/subscribe", {
            simple: !0,
            next: document.location.href,
            utm_source: bt.thread,
            utm_medium: Et.web,
            utm_content: s.id
        })) : (M = Ft(e, s, {
            noBase: !0
        }), s.type !== "thread" || u ? A = Eh(s, w) : s.comment_count ? A = x("View 1 comment", "View %1 comments", s.comment_count) : A = b("Reply"));
        const O = c && !this.context.isAmp;
        return r(qe, {
            className: `thread-head typography ${t||""}`
        }, r("tr", null, r("td", null, r(re, {
            width: "100%"
        }, !d && !l && r(Ye, {
            onVisible: () => this.onTopReached()
        }), r(re, {
            gap: y,
            width: "100%"
        }, r(qd, {
            pub: e,
            post: s,
            user: o,
            isStatic: c,
            freeSignup: i,
            freeSignupEmail: a,
            reaction_token: h,
            allowEdit: !0,
            allowTruncate: u,
            showReactions: !!f || _,
            showShare: P,
            showComments: !!s.comment_count,
            small: !0,
            inThreadHead: !0,
            showActiveBadge: !0,
            onChange: p,
            showLabel: !0
        }), r(ur, {
            user: o,
            freeSignup: i,
            freeSignupEmail: a,
            pub: e,
            post: s,
            html: !l && !u && s.body_html,
            isStatic: c,
            dataForEmailRender: m
        }, l ? r("p", null, r("i", null, S `This thread is only visible to ${_r(s.audience)?"founding":"paid"} subscribers of ${e.name}`)) : u ? r("p", null, s.description) : null), f ? r("a", {
            className: "thread-head-cta",
            href: M,
            native: !0
        }, A, " →") : l && r("p", {
            className: "thread-head-cta"
        }, r("a", {
            href: Ae(e, {
                simple: !0,
                next: document.location.href,
                utm_source: bt.thread,
                utm_medium: Et.web,
                utm_content: s.id
            }),
            className: "button primary subscribe-btn",
            native: !c
        }, Ue(e)), r("a", {
            href: Me({
                for_pub: e.subdomain
            }),
            className: "button",
            native: !0
        }, b("Sign in")))), O && r(re, {
            gap: y,
            style: {
                width: "100%"
            }
        }, r(re, {
            style: {
                width: "100%",
                textAlign: "center"
            }
        }, r("a", {
            role: "button",
            className: "button primary",
            style: {
                margin: "0 auto"
            },
            href: Dt.HALF_MAGIC_COMMENTS_URL
        }, b("See the discussion"))), r(Xc, {
            isFooter: !0,
            customization: {
                showShare: !0,
                showComments: !0,
                showReactions: {
                    showReactions: _
                },
                showRestack: !1,
                showLabels: !0,
                showCommentRestack: !e.hide_post_restacks
            }
        })), g && s.unsubscribed && r("div", {
            className: "notifications-alert"
        }, b("Email notifications are disabled for this thread."), " ", r("a", {
            href: "javascript:void(0)",
            onClick: () => this.enableEmailNotifications()
        }, b("Re-enable"))), !d && !l && r(Ye, {
            onVisible: () => this.onBottomReached()
        })))))
    }
}
at(Td, "contextType", Yo);
const prt = rs(Td);
class frt extends he {
    render() {
        return r("div", {
            className: "thread-head-silhouette"
        }, r("div", {
            className: "thread-head-silhouette-head"
        }), r("div", {
            className: "thread-head-silhouette-content"
        }, r("div", {
            className: "thread-head-silhouette-title"
        }), r("div", {
            className: "thread-head-silhouette-meta"
        }), r("div", {
            className: "thread-head-silhouette-body"
        }, r("div", {
            className: "thread-head-silhouette-body-line"
        }), r("div", {
            className: "thread-head-silhouette-body-line"
        }), r("div", {
            className: "thread-head-silhouette-body-line"
        }))))
    }
}
const Wo = () => r("div", {
    className: "comment-silhouette"
}, r("div", {
    className: "comment-silhouette-head"
}), r("div", {
    className: "comment-silhouette-content"
}, r("div", {
    className: "comment-silhouette-meta"
}), r("div", {
    className: "comment-silhouette-body"
}), r("div", {
    className: "comment-silhouette-actions"
})));
class Pd extends he {
    constructor() {
        super(...arguments);
        at(this, "onSortCommentsClicked", e => {
            this.sortMenuRef.toggle(), this.props.onSortSelected(e)
        })
    }
    render({
        sort: e,
        loading: s,
        pub: o
    }) {
        const i = Gn("like_comments_enabled");
        return r("div", {
            className: $("comments-page-sort-controls", {
                loading: s
            })
        }, r("div", {
            className: "comments-page-sort-menu"
        }, r("button", {
            className: "comments-page-sort-menu-button",
            onClick: () => this.sortMenuRef.toggle()
        }, r("span", {
            className: "comments-page-sort-menu-button-label"
        }, yp(e, o.language)), r(Hf, {
            height: "6"
        })), r(em, {
            className: "comments-page-sort-menu-dropdown",
            ref: a => this.sortMenuRef = a
        }, wp({
            likesEnabled: i,
            language: o.language
        }).map(({
            key: a,
            text: c
        }) => r(vp, {
            className: e === a ? "selected" : "",
            onClick: () => this.onSortCommentsClicked(a)
        }, c)))))
    }
}
const mrt = 30 * 1e3;
class grt extends he {
    constructor(e, s) {
        super(e, s);
        at(this, "modalRef", ae());
        at(this, "onWindowVisibilityChange", () => {
            Jr() ? this.loadPost() : clearTimeout(this.loadTimeout)
        });
        this.state = {}, e.post && e.post.slug === e.slug && (this.state.post = e.post), this.state.sort = e.sort || this.state.post && this.state.post.default_comment_sort || e.publication.default_comment_sort || "best_first", this.state.comments = e.initialComments, this.scrollRef = ae(), this.shareDialogRef = ae(), this.state.loading = !1, this.state.reactionSigninComment = null
    }
    componentDidMount() {
        return K(this, null, function*() {
            var i;
            const {
                iString: e,
                inline: s,
                user: o
            } = this.props;
            if (Th(this.onWindowVisibilityChange), !this.props.publication.community_enabled && !this.props.inline ? document.location.href = "./" : yield this.loadPost(), (i = this.props.matches) != null && i.feedCommentUrl) {
                const a = this.props.matches.feedCommentUrl,
                    c = new URL(location.toString());
                c.searchParams.delete("feedCommentUrl"), history.replaceState({}, "", c), this.props.popToast(l => r(ce, V(k({}, l), {
                    text: e("Note Shared."),
                    cta: e("View Now"),
                    href: a
                })), {
                    ttl: 1e4
                })
            }
        })
    }
    componentWillUnmount() {
        Ph(this.onWindowVisibilityChange), clearInterval(this.loadTimeout)
    }
    componentDidUpdate(e, s) {
        return K(this, null, function*() {
            if (e.slug !== this.props.slug || s.sort !== this.state.sort) {
                const o = this.props.post && this.props.post.slug === this.props.slug;
                yield Gr(this, {
                    post: o ? this.props.post : null,
                    comments: null
                }), yield this.loadPost()
            } else if (this.state.post && this.state.comments && !this.commentsViewed && !this.state.loading) {
                let o = 0;
                la(this.state.comments, () => o++), this.state.post.comment_count !== o && (this.state.post.comment_count = o, this.setState({
                    post: this.state.post
                }), this.props.onChange && this.props.onChange({
                    post: this.state.post
                }))
            }
        })
    }
    queueRefresh() {
        if (!this.commentsViewed && this.state.comments) {
            this.commentsViewed = !0;
            const {
                post: e
            } = this.state;
            W(G.COMMENTS_VIEWED, {
                post_id: e.id,
                comment_count: this.state.comments.length
            }), this.props.publication.community_enabled && !(e.type === "thread" || pn(this.props.user, e)) && W(G.COMMENT_PAYWALL_SHOWN, {
                post_id: e.id,
                post_type: e.type
            }), e.type === "thread" && this.props.user && Promise.resolve(dt.post(`/api/v1/posts/${e.id}/seen`))
        }
        clearTimeout(this.loadTimeout), this.loadTimeout = setTimeout(() => this.loadPost(), mrt)
    }
    loadPost() {
        return K(this, null, function*() {
            if (this.state.comments && !Jr()) return;
            clearTimeout(this.loadTimeout), this.setState({
                loading: !0
            });
            const e = this.state.comments && this.state.comments.length > 0;
            let s;
            this.state.comments && (s = null, la(this.state.comments, o => {
                !o.deleted && o.date && (!s || o.date > s) && (s = o.date)
            }));
            try {
                const o = this.props.slug,
                    i = this.state.sort,
                    a = {
                        token: this.props.post_reaction_token || "",
                        all_comments: !0,
                        sort: i,
                        last_comment_at: s
                    };
                this.state.post && this.props.commentId && (a.comment_id = this.props.commentId);
                const c = yield dt.get(this.state.post ? `/api/v1/post/${this.state.post.id}/comments` : `/api/v1/posts/${o}`).query(a);
                if (this.setState({
                        loading: !1
                    }), o !== this.props.slug || i !== this.state.sort) return;
                let l = this.state.sort;
                !this.state.post && c.body.default_comment_sort && (l = c.body.default_comment_sort), (!this.state.post || !this.state.comments || c.body.comments) && (yield Gr(this, {
                    post: this.state.post || c.body,
                    comments: c.body.comments || [],
                    sort: l
                }))
            } catch (o) {
                console.error("Failed to load post:", o), o.statusCode === 400 && (yield Gr(this, {
                    notAllowedToFetchComments: !0
                })), this.setState({
                    loading: !1
                })
            }!e && this.state.comments && this.state.comments.length > 0 && Ah(), Jr() && this.queueRefresh(), this.triggerShareOnLoad()
        })
    }
    onChange(e) {
        this.setState({
            comments: go(this.state.comments, e)
        })
    }
    onSortSelected(e) {
        this.setState({
            sort: e
        }), W(G.COMMENTS_SORTED, {
            post_id: this.state.post.id,
            post_type: this.state.post.type,
            sort: e
        })
    }
    triggerShareOnLoad() {
        var e;
        (e = this.shareDialogRef) != null && e.current && mn("action") === "share" && (window.history.replaceState({}, document.title, Ce({
            action: null
        })), this.shareDialogRef.current.fromEmail())
    }
    _isPub(e) {
        const {
            publication: s
        } = this.props;
        return (s == null ? void 0 : s.subdomain) === e
    }
    render({
        slug: e,
        user: s,
        freeSignup: o,
        freeSignupEmail: i,
        publication: a,
        post_reaction_token: c,
        inline: l,
        commentId: u,
        selectionFromQuery: d,
        freeTrialCoupon: h,
        show_reaction_upsell: p,
        bannedFromNotes: f,
        iString: g,
        iPlural: m,
        iTemplate: _
    }, {
        sort: y,
        post: b,
        comments: S,
        notAllowedToFetchComments: x,
        reactionSigninComment: w
    }) {
        if (!b || !a.community_enabled) return !l && r("div", {
            className: "comments-page"
        }, r("div", {
            className: "container"
        }, r(frt, null)));
        const P = a.community_enabled && b && b.write_comment_permissions !== "none",
            A = x || P && !pn(s, b),
            M = (O, T) => K(this, null, function*() {
                return _rt({
                    user: s,
                    reactionToken: c,
                    comments: S,
                    id: O,
                    reacted: T,
                    setComments: v => this.setState({
                        comments: v
                    }),
                    onNeedsSignin: v => new Promise(C => this.setState({
                        reactionSigninComment: v
                    }, () => this.modalRef.current.open(C)))
                })
            });
        return r("div", {
            className: "comments-page"
        }, u && (S == null ? void 0 : S.length) > 0 ? r(Up, {
            comment: S[0],
            post: b,
            publication: a
        }) : r(Em, {
            post: b,
            publication: a,
            isCommentPage: !this.props.inline,
            selection: d
        }), r(xr, {
            ref: this.shareDialogRef,
            user: s,
            pub: a,
            post: b,
            reaction_token: c,
            comments: S,
            commentId: u
        }), !l && !u && r("div", {
            className: "container"
        }, r(prt, {
            pub: a,
            post: Object.assign({}, b, {
                comment_url_override: Ft(a, b, {
                    comments: !0
                })
            }),
            user: s,
            freeSignup: o,
            freeSignupEmail: i,
            hidden: !Lc(e) && b.hidden,
            truncated: b.type !== "thread",
            post_reaction_token: c,
            onChange: O => this.setState(O),
            showUnsubscribeNotice: !0,
            gap: 0,
            showShare: !1
        }, r("div", {
            className: "full-container-border"
        }))), A && r("div", {
            className: "container"
        }, r(ms, {
            user: s,
            freeSignupEmail: i,
            freeSignup: o,
            publication: a,
            post: b,
            title: _ `Comments on this ${b.type==="podcast"?"episode":"post"} are for ${_r(b.audience)?"founding":"paid"} subscribers`,
            reauthenticationTitle: g("To see the comments, please re-authenticate."),
            coupon: h
        })), b.type === "thread" || pn(s, b) ? r("div", {
            className: "container"
        }, S && r(ht, {
            alignItems: "center",
            justifyContent: "space-between",
            paddingY: 8
        }, r("div", {
            className: "comments-heading"
        }, m("1 Comment", "%1 Comments", b.comment_count)), !l && !a.invite_only && pn(s, b) && r(ue, {
            priority: "secondary-theme",
            leftIcon: r(Qc, null),
            onClick: () => {
                var O;
                (O = this.shareDialogRef.current) == null || O.open()
            }
        }, g("Share"))), S && S.length > 0 && !P && r(brt, {
            post: b
        }), P && r(dr, {
            user: s,
            freeSignup: o,
            freeSignupEmail: i,
            pub: a,
            post: b,
            token: c,
            autoFocus: Vf(),
            onSuccess: O => this.setState({
                comments: [O].concat(S)
            }),
            bannedFromNotes: f
        }), (!S || S.length > 0) && !x && !u && r(Pd, {
            sort: y,
            loading: !S,
            onSortSelected: O => this.onSortSelected(O),
            pub: a
        }), u && S && r("a", {
            className: "return-to-thread-link",
            href: Ft(a, b, {
                comments: !0,
                commentId: u,
                highlightComment: !0
            })
        }, g("⭠ Return to thread")), !S && !x ? [r(Wo, null), r(Wo, null)] : S.length > 0 ? [r("div", {
            className: "comment-list-container",
            ref: this.scrollRef
        }, r(kd, {
            key: `post:${b.id}`,
            user: s,
            freeSignup: o,
            freeSignupEmail: i,
            pub: a,
            post: b,
            comments: S,
            reaction_token: c,
            depth: 0,
            collapseAtDepth: l ? 10 : S.length > 3 && y === "most_recent_first" ? lrt : crt,
            onChange: O => this.onChange(O),
            pageSize: l || this._isPub("astralcodexten") ? drt : b.type === "thread" ? urt : Sd,
            scrollRef: this.scrollRef,
            retainUserCollapseState: !0,
            updateCommentReacted: M,
            noRestack: !0
        }))] : null) : null, w && r(Sp, {
            comment: w,
            pub: a,
            user: s,
            react: () => M(w.id, !0),
            modalRef: this.modalRef
        }), p ? r(Cp, {
            user: s,
            pub: a,
            post: b
        }) : null)
    }
}
const vat = Jo(rs(grt)),
    brt = ({
        post: n
    }) => {
        const {
            iString: t
        } = ot();
        return r("div", {
            className: "locked-comments"
        }, n.type === "adhoc_email" ? t("Commenting has been turned off for this email") : t("Commenting has been turned off for this post"))
    };

function _rt(c) {
    return K(this, arguments, function*({
        user: n,
        reactionToken: t,
        comments: e,
        id: s,
        reacted: o,
        setComments: i,
        onNeedsSignin: a
    }) {
        var d;
        const l = zf(s, e);
        if (!l) return;
        const u = k({}, l);
        ua(n, u, o), i(go(e.slice(0), u));
        try {
            yield xp(u, !0, o, t)
        } catch (h) {
            if (ua(n, u, !o), i(go(e.slice(0), k({}, u))), ((d = h.response) == null ? void 0 : d.statusCode) !== 401) {
                alert(Je(h));
                return
            }
            yield a({
                comment: u
            })
        }
    })
}
const yrt = ({
        comments: n,
        expectedCommentCount: t,
        inputRef: e,
        post: s,
        pub: o,
        sort: i,
        token: a,
        user: c,
        onAddComment: l,
        onUpdateComment: u,
        onUpdateSort: d
    }) => {
        const h = !pn(c, s),
            {
                iString: p
            } = ot();
        return h ? r(ms, {
            user: c,
            publication: o,
            post: s,
            title: p("Comments on this episode are for paid subscribers"),
            reauthenticationTitle: p("To see the comments, please re-authenticate.")
        }) : r("div", null, r(dr, {
            ref: e,
            formClassName: "tw-m-0",
            user: c,
            pub: o,
            post: s,
            token: a,
            onSuccess: l
        }), t > 0 && r(Pd, {
            sort: i,
            loading: !n,
            onSortSelected: d,
            pub: o
        }), n ? r(kd, {
            comments: n,
            post: s,
            pub: o,
            reaction_token: a,
            user: c,
            onChange: u,
            noRestack: !0
        }) : r("div", {
            className: "tw-mt-4"
        }, Fp(Math.min(t, 5), () => r(Wo, null))))
    },
    wrt = "_facepile_1a8ce_1",
    vrt = "_backdrop_1a8ce_7",
    Srt = "_backdropHidden_1a8ce_17",
    Crt = "_backdropVisible_1a8ce_21",
    zs = {
        facepile: wrt,
        backdrop: vrt,
        backdropHidden: Srt,
        backdropVisible: Crt
    },
    xrt = ({
        bylines: n,
        variant: t
    }) => r(gt, k({}, t === "shows" ? {
        direction: "row",
        gap: 16,
        wrap: "wrap"
    } : {
        direction: "column",
        gap: 24
    }), n.map(e => r(ht, {
        alignItems: "center",
        gap: 4
    }, r(gt, null, r(Sr, {
        className: zs.facepile,
        maximum: 1,
        hoverProfiles: !0,
        faces: [e],
        faceUtmSource: "author-byline-face-podcast",
        size: 32
    })), r(X, null, r(ht, {
        gap: 4,
        alignItems: "center"
    }, r(I.B4, {
        color: "pub-primary-text"
    }, e.name), r(Cr, {
        userId: e.id,
        tier: e.bestseller_tier,
        size: "sm"
    })), e.primaryPublicationName && (e.primaryPublicationUrl ? r(I.B4, {
        color: "pub-secondary-text",
        translated: !0
    }, "Writes", " ", r("a", {
        style: {
            textDecoration: "none"
        },
        href: e.primaryPublicationUrl
    }, I18N.p(e.primaryPublicationName)), " ", r("a", {
        href: `${e.primaryPublicationUrl}/subscribe`
    }, "Subscribe")) : r(I.B4, {
        color: "pub-secondary-text",
        translated: !0
    }, "Writes ", I18N.p(e.primaryPublicationName))))))),
    Ad = n => r(Ht, V(k({}, n), {
        name: "UsersIcon",
        svgParams: {
            height: 14,
            width: 15,
            stroke: "#B6B6B6"
        }
    }), r("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M9.91732 12.249V11.0824C9.91732 9.79369 8.87265 8.74902 7.58398 8.74902H2.91732C1.62865 8.74902 0.583984 9.79369 0.583984 11.0824V12.249",
        fill: "#838383",
        stroke: "#838383",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), r("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M5.24935 6.41423C6.53801 6.41423 7.58268 5.36956 7.58268 4.08089C7.58268 2.79223 6.53801 1.74756 5.24935 1.74756C3.96068 1.74756 2.91602 2.79223 2.91602 4.08089C2.91602 5.36956 3.96068 6.41423 5.24935 6.41423Z",
        fill: "#838383",
        stroke: "#838383",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), r("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M11.8118 12.2659H13.563C13.5622 11.2025 14.0005 8.82373 11.666 8.82373",
        fill: "#838383",
        stroke: "#838383",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), r("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M9.33398 1.82227C10.3664 2.08661 11.0886 3.01693 11.0886 4.08268C11.0886 5.14844 10.3664 6.07875 9.33398 6.3431",
        fill: "#838383",
        stroke: "#838383",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }));

function Ld({
    post: n,
    pub: t,
    user: e,
    showDate: s,
    showDatetime: o,
    isStatic: i,
    className: a,
    postReactionToken: c,
    onChange: l,
    allowEdit: u,
    hidePinning: d,
    showEmailSent: h,
    allowSendEmail: p,
    allowMobileFooter: f,
    onCommentsClick: g,
    onClipClick: m,
    useWashBackground: _,
    showRestackModal: y,
    setFooterShown: b
}) {
    const S = me({
            checkFirst4: !0
        }),
        x = typeof window == "undefined",
        w = Pe(n),
        {
            language: P
        } = ot(),
        A = o ? _t(n.post_date).locale(P).standardDatetime() : i ? _t(n.post_date).locale(P).standardDate() : _t(n.post_date).locale(P).standardDateOrTime(),
        {
            getSettingFor: M
        } = Ko(),
        O = t.bylines_enabled && yr(t, n) && n.type !== "podcast",
        T = O && t.byline_images_enabled && w.some(({
            photo_url: q
        }) => !!q),
        v = n.type !== "page",
        C = S && T && w.length > 2,
        N = (t == null ? void 0 : t.community_enabled) && n.slug && !n.is_draft && Fc({
            publication: t,
            post: n
        }),
        R = O && w.length === 1 && w[0].is_guest && w[0].primaryPublicationSubscribeUrl && w[0].primaryPublicationId !== t.id && !n.is_draft && !Gn("dont_show_guest_byline"),
        J = ti(w.map(q => i ? r("a", {
            className: "byline-profile-link",
            href: Jn(q, t, {
                base: i
            }),
            onClick: B => B.stopPropagation()
        }, q.name) : r(ht, {
            inline: !0,
            gap: 4,
            alignItems: "center"
        }, r(vn, {
            subject: q,
            utmSource: "byline"
        }, r("a", {
            className: "byline-profile-link",
            href: Jn(q, t, {
                base: i
            }),
            onClick: B => B.stopPropagation()
        }, q.name)), !i && r(Cr, {
            tier: q.bestseller_tier,
            size: "sm",
            userId: q.id
        })))),
        j = !n.is_draft && Np(e, {
            enable_restacking: !!M("enable_restacking")
        }, n, t, i);
    return r("div", {
        className: $("post-subheader", a)
    }, r("div", {
        className: $("left", {
            vertical: C
        })
    }, T && (i ? r(Ef, {
        pub: t,
        post: n
    }) : r(Sr, {
        className: "bylines-facepile",
        maximum: 5,
        hoverProfiles: !0,
        faces: w.map(({
            id: q,
            name: B,
            photo_url: Y
        }) => ({
            id: q,
            name: B,
            photo_url: Y
        })),
        faceUtmSource: "author-byline-face",
        elevated: _
    })), r("div", {
        className: "label-stack"
    }, O && r("div", {
        className: "bylines"
    }, r("span", {
        className: "byline-names"
    }, J)), R && r("div", {
        className: "guest-author-publication"
    }, "Writes ", r("a", {
        className: "guest-author-publication-name",
        href: w[0].primaryPublicationUrl,
        title: w[0].primaryPublicationName
    }, w[0].primaryPublicationName), " · ", r("a", {
        className: "guest-author-publication-subscribe",
        href: w[0].primaryPublicationSubscribeUrl
    }, "Subscribe")), r("div", {
        className: "publish-context"
    }, n.type === "adhoc_email" ? r(Ad, {
        className: "audience-icon adhoc-email-icon",
        height: 16,
        isStatic: i
    }) : v && wr(n.audience) && !jc({
        post: n
    }) && r(kp, {
        audience: n.audience,
        className: "audience-icon audience-lock-icon",
        size: 16,
        isStatic: i,
        thin: !0
    }), (s || o) && n.post_date && !n.is_draft && r("time", {
        dateTime: _t(n.post_date).toISOString()
    }, A), n.is_draft && (s || o) && "Draft"))), r("div", {
        className: "right"
    }, S && !x && f && r(Zc, {
        post: n,
        pub: t,
        user: e,
        isStatic: i,
        onChange: l,
        allowEdit: u,
        hidePinning: d,
        showEmailSent: h,
        allowSendEmail: p,
        hideComments: !N,
        onCommentsClick: g,
        showRestackButton: j,
        showRestackModal: y,
        setFooterShown: b,
        postReactionToken: c
    }), !S && r(po, {
        post: n,
        pub: t,
        user: e,
        isStatic: i,
        style: "button",
        onChange: l,
        allowEdit: u,
        hidePinning: d,
        showEmailSent: h,
        allowSendEmail: p,
        labelStyle: "counts-or-none",
        hideComments: !N,
        onCommentsClick: g,
        onClipClick: m,
        position: "post-header",
        showRestackButton: j,
        showRestackModal: y,
        showClipping: n.type === "podcast",
        editButtonIsLast: !0,
        postReactionToken: c
    })))
}
const Id = ({
        post: n
    }) => r("a", {
        className: "tw-no-underline hover:tw-underline",
        href: Xe("/subscribe", {
            simple: !0,
            next: document.location.href,
            utm_source: bt.paywall,
            utm_medium: Et.web,
            utm_content: n.id
        }),
        native: !0
    }, r("div", {
        className: "podcast-embed tw-flex tw-items-center tw-justify-center tw-gap-3 tw-rounded tw-bg-pub-background tw-p-6 tw-font-sans tw-font-sans tw-text-base tw-shadow"
    }, r(Yn, {
        className: "tw-fill-pub-accent tw-stroke-0"
    }), r("span", {
        className: "tw-text-sm tw-font-semibold tw-text-pub-accent"
    }, "Upgrade to listen"))),
    Od = ({
        isFreeSubscribed: n,
        isSubscribed: t,
        pub: e,
        post: s,
        onGetDuration: o,
        isPreview: i,
        playerRef: a,
        feedUrl: c
    }) => r(oi, {
        ref: a,
        feature: "Podcast",
        pub: e,
        src: s.podcast_url,
        duration: s.podcast_duration,
        autoPlay: !1,
        metricsPost: s,
        addToPodcastLink: null,
        onGetDuration: o,
        render: ({
            currentTime: l,
            isPlaying: u,
            progress: d,
            progressBarRef: h,
            progressBarOnMouseDown: p,
            remainingTime: f,
            playbackRate: g,
            setPlaybackRate: m,
            skipBack: _,
            skipForward: y,
            togglePlayback: b
        }) => r("div", {
            className: "podcast-embed tw-select-none tw-items-center tw-space-y-4 tw-rounded tw-bg-pub-background tw-p-6 tw-font-sans tw-shadow sm:tw-flex sm:tw-gap-4 sm:tw-space-y-0"
        }, r("div", {
            className: "tw-flex tw-items-center tw-justify-between tw-gap-4"
        }, r("div", {
            className: "tw-w-16 sm:tw-hidden"
        }, " "), r($g, {
            isPlaying: u,
            onSkipBack: _,
            onSkipForward: y,
            onTogglePlayback: b
        }), r("div", {
            className: "tw-flex tw-w-16 tw-justify-end sm:tw-w-auto"
        }, r(gi, {
            onSetPlaybackRate: m,
            playbackRate: g,
            className: "audio-button tw-w-12 tw-cursor-pointer tw-rounded-full tw-border-0 tw-border-solid tw-border-pub-detail-light tw-py-1 tw-text-center tw-font-meta tw-text-sm tw-font-semibold tw-leading-none tw-text-pub-primary-text hover:tw-border-pub-detail sm:tw-border sm:tw-text-pub-secondary-text"
        }))), r(mi, {
            currentTime: l,
            remainingTime: f,
            containerRef: h,
            progress: d,
            onMouseDown: p
        }), i && !jc({
            post: s
        }) ? r("div", {
            className: "tw-m-auto tw-w-min tw-whitespace-nowrap tw-rounded-full tw-bg-pub-detail-light tw-py-1 tw-px-3 tw-font-meta tw-text-xs tw-font-medium tw-leading-5 tw-text-pub-secondary-text"
        }, "FREE PREVIEW") : r(ii, {
            feedUrl: c,
            post: s,
            pub: e,
            sectionId: s.section_id,
            hasAccessToPrivatePodcastFeed: t || n,
            fileSrc: s.podcast_url
        }))
    }),
    Nrt = ({
        expiry: n,
        podcastName: t,
        pub: e,
        postId: s
    }) => {
        const o = _t(n).calendar(null, {
            sameDay: "[today]",
            nextDay: "[tomorrow]",
            nextWeek: "MMMM D",
            sameElse: "MMMM D"
        });
        return r("div", {
            className: "tw-co tw-mt-12 tw-flex tw-flex-col tw-items-center tw-rounded-md tw-text-center"
        }, r("div", {
            className: "tw-leading-5 md:tw-w-3/4"
        }, r("p", {
            className: "tw-mb-2 tw-font-sans tw-text-lg tw-font-bold"
        }, "Set up your subscription"), r("p", {
            className: "podcast-description tw-mb-4 tw-font-sans tw-text-base tw-text-pub-secondary-text"
        }, "Your complimentary subscription to ", t, " ends ", o, ". To keep access and continue your support, finish setting up your subscription.")), r(Ke, {
            look: "button",
            variant: "themed-primary",
            size: "medium",
            onClick: () => {
                Se(Ae(e, {
                    utm_source: bt.continueYourSupport,
                    utm_medium: Et.web,
                    utm_content: s,
                    simple: !0,
                    next: document.location.href,
                    addBase: !0
                }), {
                    local_navigation: !1
                })
            }
        }, "Continue your support"))
    },
    krt = ({
        freeSignupEmail: n,
        pub: t,
        source: e,
        user: s,
        onSuccess: o
    }) => {
        const i = typeof window != "undefined" && t.hostname !== window.location.hostname.replace(/[.]localhost$/, "");
        return r("div", {
            className: "inline-free-email-form"
        }, r(li, {
            user: s,
            pub: t,
            freeSignupEmail: n,
            source: e,
            onSuccess: o,
            useSubscribeLink: i,
            submitButtonText: Ue(t)
        }))
    },
    uo = bt.podcastPostHeader,
    Ert = ({
        freeSignupEmail: n,
        isFreeSubscribed: t,
        pub: e,
        user: s
    }) => {
        const [o, i] = D(!1), [a, c] = D(!1), l = At(null), u = e.section ? e.section.description : e.podcast_description, d = p => {
            if (e.plans) {
                let f = Ae(e, {
                    just_signed_up: !0,
                    referral_token: p.body.referral_token
                });
                p.body.prompt_to_login && (f = `/account/login?redirect=${encodeURIComponent(f)}&email=${encodeURIComponent(p.body.email)}`), document.location.href = f
            } else window.location.reload()
        }, h = Mt(() => {
            i(!o)
        }, [i, o]);
        return Lh(() => {
            const p = () => {
                const g = l.current && l.current.scrollHeight > l.current.clientHeight;
                c(o || g)
            };
            p();
            const f = Ih(p);
            return window.addEventListener("resize", f), () => {
                window.removeEventListener("resize", f)
            }
        }, [c, l, o]), r("div", {
            className: "tw-mt-6 tw-text-center"
        }, u && r("div", {
            className: "podcast-description tw-mb-6 tw-font-sans tw-text-base tw-text-pub-secondary-text"
        }, r("span", {
            ref: l,
            "data-testid": "podcast-description",
            className: $({
                "podcast-description--clamped": !o
            })
        }, u), a && r("span", {
            className: "tw-cursor-pointer tw-font-bold",
            onClick: h
        }, !o && r("span", null, "show more"), o && r("span", null, " show less"))), t ? r(ie, {
            href: Ae(e, {
                utm_source: uo
            }),
            className: "primary tw-w-full tw-text-sm tw-font-semibold sm:tw-w-auto"
        }, Ue(e, {
            isFreeSubscribed: !0
        })) : Oh() ? r(ie, {
            href: Ae(e, {
                utm_source: uo,
                simple: !0,
                next: document.location.href
            }),
            className: "primary tw-w-full tw-text-sm tw-font-semibold sm:tw-w-auto"
        }, Ue(e)) : r(ht, {
            justifyContent: "center"
        }, r(krt, {
            freeSignupEmail: n,
            pub: e,
            source: uo,
            user: s,
            onSuccess: d
        })))
    },
    Md = ({
        visible: n,
        className: t = void 0,
        style: e = {}
    }) => {
        const [s, o] = D(!1), [i, a] = D(n);
        lt(() => {
            n ? (a(!0), requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    o(!0)
                })
            })) : o(!1)
        }, [n]), lt(() => {
            n && a(!0)
        }, [n]);

        function c() {
            n || a(!1)
        }
        return i ? r("div", {
            className: `${zs.backdrop} ${s?zs.backdropVisible:zs.backdropHidden} ${t}`,
            onTransitionEnd: c,
            style: e
        }) : null
    },
    Trt = ({
        freeSignupEmail: n,
        isFreeSignup: t,
        isPaywall: e,
        post: s,
        pub: o,
        magicToken: i,
        user: a,
        onChange: c,
        onClickCommentButton: l,
        onTopReached: u,
        playerRef: d,
        onFeedChange: h,
        videoPlayerRef: p,
        reaction_token: f
    }) => {
        var R;
        const g = me({
                checkFirst4: !0
            }),
            m = !!(a != null && a.is_subscribed),
            _ = !!(t || a != null && a.is_free_subscribed),
            [y, b] = D((R = s.podcast_duration) != null ? R : 0),
            [S, x] = D(null),
            [w, P] = D(!1);
        lt(() => {
            if (!m && !_) return;
            (() => K(void 0, null, function*() {
                const j = yield dt.get("/api/v1/subscription/podcast_rss_url").query({
                    token: i,
                    section_id: s.section_id
                });
                j.body.podcast_rss_url && (x(j.body.podcast_rss_url), h(j.body.podcast_rss_url))
            }))()
        }, [_, m, i]);
        const A = J => {
                b(J)
            },
            M = !_ || !m && !!o.plans,
            O = m && (a == null ? void 0 : a.subscription_type) === "comp" && _t(a == null ? void 0 : a.subscription_expiry).subtract(30, "days").isBeforeNow(),
            T = _ && !m && (a == null ? void 0 : a.comp_expired_recently),
            v = Pe(s).sort((J, j) => J.id === o.author_id ? -1 : j.id === o.author_id ? 1 : J.is_guest && !j.is_guest ? -1 : !J.is_guest && j.is_guest ? 1 : (J.name || "").localeCompare(j.name || "")),
            C = () => {
                W(G.VIDEO_CLIP_BUTTON_CLICKED, {
                    post_id: s.id,
                    type: s.type
                }), P(!0)
            },
            N = e ? _d : An;
        return r("div", {
            className: "tw-bg-pub-wash tw-py-8 sm:tw-pb-16"
        }, r(Md, {
            visible: w,
            style: {
                zIndex: 1
            }
        }), r("div", {
            className: "container"
        }, r(Ye, {
            onVisible: u
        }), s.videoUpload && r(N, {
            mediaUpload: s.videoUpload,
            pub: o,
            post: s,
            autoPlay: !1,
            restorePlaybackLocation: !0,
            reaction_token: f,
            ref: p,
            clippingMode: w,
            onClippingModeCancel: () => P(!1)
        }), r(Prt, {
            post: s,
            podcastDuration: y,
            hideEpisodeImage: !!s.videoUpload
        }), r(Ld, {
            allowEdit: a == null ? void 0 : a.is_contributor,
            allowMobileFooter: !0,
            isStatic: !1,
            post: s,
            postReactionToken: i,
            pub: o,
            showDate: !0,
            showDatetime: !1,
            user: a,
            onChange: c,
            onCommentsClick: l,
            onClipClick: C,
            useWashBackground: !0
        }), s.videoUpload ? null : e && !Ys(s) ? r(Id, {
            post: s
        }) : r(Od, {
            isFreeSubscribed: _,
            isSubscribed: m,
            post: s,
            pub: o,
            magicToken: i,
            onGetDuration: A,
            isPreview: Ys(s),
            playerRef: d,
            feedUrl: S
        }), g && r(ii, {
            feedUrl: S,
            post: s,
            pub: o,
            sectionId: s.section_id,
            hasAccessToPrivatePodcastFeed: m || _,
            fileSrc: s.podcast_url
        }), o.bylines_enabled && v && v.length ? r(gt, {
            direction: "column",
            gap: 24,
            paddingTop: s.videoUpload && !g ? 0 : 24
        }, r(I.H4, {
            translated: !0,
            color: "pub-primary-text"
        }, "Appears in this episode"), r(xrt, {
            bylines: v,
            variant: "podcast"
        })) : null, O || T ? r(Nrt, {
            expiry: a.subscription_expiry,
            postId: s.id,
            podcastName: o.podcast_title,
            pub: o
        }) : M ? r(Ert, {
            freeSignupEmail: n,
            isFreeSubscribed: _,
            pub: o,
            user: a
        }) : null))
    };

function Prt({
    post: n,
    podcastDuration: t,
    hideEpisodeImage: e
}) {
    const {
        language: s
    } = ot();
    return r("div", {
        className: "tw-items-end tw-gap-8 sm:tw-flex"
    }, !e && n.podcast_episode_image_url && r("div", {
        className: "tw-mx-auto tw-mb-6 tw-box-border tw-h-32 tw-w-32 tw-shrink-0 tw-overflow-hidden tw-rounded-lg tw-border-4 tw-border-solid tw-border-white tw-bg-gray-400 tw-shadow-md sm:tw-mx-0 sm:tw-mb-0 sm:tw-h-56 sm:tw-w-56"
    }, r("img", {
        className: "tw-h-full tw-w-full tw-object-cover",
        src: Oe(n.podcast_episode_image_url, 512, {
            height: 512,
            crop: "fill"
        })
    })), r("div", {
        className: "tw-text-center sm:tw-text-left"
    }, r("div", {
        className: "tw-mb-1 tw-font-sans tw-text-sm tw-font-semibold tw-uppercase tw-text-pub-secondary-text"
    }, n.post_date ? _t(n.post_date).locale(s).standardDate() : _t().locale(s).standardDate(), t > 0 && ` • ${Mh(t)}`), n.title && r("h1", {
        className: $("tw-mt-0 tw-mb-2 tw-leading-tight sm:tw-mb-1", {
            "tw-text-3xl sm:tw-text-4xl": n.title.length < 60,
            "tw-text-3xl sm:tw-text-3xl": n.title.length >= 60 && n.title.length < 110,
            "tw-text-2xl sm:tw-text-2xl": n.title.length >= 110 && n.title.length < 140,
            "tw-text-xl sm:tw-text-xl": n.title.length >= 140
        })
    }, n.title), n.subtitle && r("h3", {
        className: $("tw-my-0 tw-font-sans tw-font-normal tw-text-pub-secondary-text", {
            "tw-text-lg": n.subtitle.length < 110,
            "tw-text-base": n.subtitle.length >= 110
        })
    }, n.subtitle)))
}

function Sat({
    post: n,
    pub: t,
    user: e,
    isPaywall: s
}) {
    const o = !!(e != null && e.is_subscribed),
        i = !!(e.is_subscribed || e.is_free_subscribed),
        a = "",
        [c, l] = D(null);
    return lt(() => {
        if (n.videoUpload || !o && !i) return;
        (() => K(this, null, function*() {
            const d = yield dt.get("/api/v1/subscription/podcast_rss_url").query({
                token: a,
                section_id: n.section_id
            });
            d.body.podcast_rss_url && l(d.body.podcast_rss_url)
        }))()
    }, [i, o, a]), n.videoUpload ? r(An, {
        mediaUpload: n.videoUpload,
        pub: t,
        autoPlay: !1,
        restorePlaybackLocation: !0
    }) : s && !Ys(n) ? r(Id, {
        post: n
    }) : r(Od, {
        isFreeSubscribed: i,
        isSubscribed: o,
        post: n,
        pub: t,
        magicToken: a,
        isPreview: Ys(n),
        feedUrl: c
    })
}
const Art = {
        small: "tw-py-2 tw-px-3",
        medium: "tw-py-3 tw-px-4",
        large: "tw-py-6 tw-px-4"
    },
    Lrt = ({
        label: n,
        icon: t,
        isActive: e = !1,
        size: s,
        onClick: o,
        useSubstackTheme: i = !1,
        isDisabled: a = !1
    }) => {
        const c = Art[s];
        return r("div", {
            className: $("tw-flex tw-items-center tw-gap-2 tw-border-y-2 tw-border-x-0 tw-border-solid tw-border-y-transparent tw-font-sans tw-text-sm tw-font-semibold tw-transition-colors ", c, {
                "tw-cursor-pointer": !a || e,
                "tw-cursor-not-allowed tw-opacity-50": a && !e,
                "tw-border-b-pub-primary-text tw-text-pub-primary-text": e && !i,
                "tw-text-pub-secondary-text": !e && !i,
                "tw-border-b-substack-primary tw-text-substack-primary": e && i,
                "tw-text-substack-secondary": !e && i,
                "hover:tw-bg-pub-wash": !i && !e && !a,
                "hover:tw-bg-substack-wash": i && !e && !a
            }),
            disabled: a,
            onClick: a ? () => {} : o,
            role: "button"
        }, typeof t == "function" ? t({
            active: e
        }) : t, r("span", null, n))
    },
    Irt = ({
        items: n,
        size: t = "large",
        onSelect: e,
        activeTab: s,
        useSubstackTheme: o = !1,
        className: i
    }) => r("div", {
        className: $("tw-flex", i)
    }, n.map(({
        key: a,
        icon: c,
        label: l,
        isDisabled: u
    }) => r(Lrt, {
        isActive: a == s,
        icon: c,
        onClick: () => {
            e(a)
        },
        size: t,
        label: l,
        useSubstackTheme: o,
        isDisabled: u
    }))),
    Ort = ({
        activeTab: n,
        commentCount: t,
        onClickTab: e,
        loadedWithHeaderLink: s,
        transcription: o,
        hideComments: i,
        showPlayers: a,
        feedUrl: c,
        pub: l,
        post: u
    }) => {
        const {
            iString: d,
            iPlural: h
        } = ot(), [p, f] = D(s);
        return lt(() => {
            if (typeof window == "undefined" || p) {
                f(!1);
                return
            }
            window.history.replaceState ? window.history.replaceState(null, null, `#${n}`) : window.location.hash = `#${n}`
        }, [n]), r("div", {
            className: "tw-border tw-border-solid tw-border-pub-detail-light"
        }, r("div", {
            className: "container tw-flex tw-justify-between tw-items-center"
        }, r(Irt, {
            items: [{
                key: "details",
                icon: r(il, {
                    height: 18
                }),
                label: d("Episode details")
            }, ...i ? [] : [{
                key: "comments",
                icon: ({
                    active: g
                }) => r(tl, {
                    className: $("tw-fill-transparent", g ? "tw-stroke-pub-primary-text" : "tw-stroke-pub-secondary-text"),
                    height: 18,
                    strokeWidth: 1.5
                }),
                label: t === 0 ? d("Comments") : h("%1 comment", "%1 comments", t)
            }], ...o ? [{
                key: "transcription",
                icon: r(Ep, {
                    height: 18
                }),
                label: d("Transcript")
            }] : []],
            onSelect: e,
            activeTab: n
        }), a && c && r(ii, {
            feedUrl: c,
            post: u,
            pub: l,
            icon: r(Xf, {
                size: 16
            }),
            fileSrc: u.podcast_url
        })))
    },
    Mrt = ({
        children: n,
        href: t
    }) => r(it, null, r("table", {
        cellSpacing: "0",
        cellPadding: "8",
        border: "0",
        width: "100%"
    }, r("tr", null, r("td", {
        align: "center"
    }, r("a", {
        href: t,
        className: "tw-font-sans tw-text-[13px] tw-font-semibold tw-text-error"
    }, n))))),
    Drt = ({
        post: n,
        compAlreadyExpired: t = !1
    }) => {
        const e = `${Dt.CHECKOUT_URL}&utm_medium=${Et.email}&utm_campaign=${oe.continueYourSupport}&utm_content=${n.id}`;
        return r("table", {
            width: "100%",
            cellSpacing: "0",
            cellPadding: "0",
            border: "0",
            className: "tw-bg-error-wash",
            bgcolor: "#FFFAFA"
        }, r("tr", null, r("td", {
            height: "16"
        })), r("tr", null, r("td", {
            align: "center",
            className: "tw-leading-5"
        }, r("span", {
            className: "tw-font-sans tw-text-base tw-font-bold tw-text-error"
        }, "Continue your support"), r("br", null), t ? r("span", {
            className: "tw-font-sans tw-text-ssm tw-text-error"
        }, "Your free trial has ended!", r("br", null), "Continue your support to access paid-only content.") : r("span", {
            className: "tw-font-sans tw-text-ssm tw-text-error"
        }, "Subscribe now to keep your paid status. You won't be", r("br", null), "charged until your free trial ends on ", Dt.SUBSCRIPTION_EXPIRY_DATE, "."))), r("tr", null, r("td", {
            height: "16"
        })), r("tr", null, r("td", null, r(Mrt, {
            href: e
        }, "Subscribe now"))), r("tr", null, r("td", {
            height: "16"
        })))
    },
    Rrt = "_container_102yy_1",
    $rt = "_podcastContainer_102yy_17",
    qrt = "_attribution_102yy_21",
    Brt = "_icon_102yy_25",
    Urt = "_pub_102yy_30",
    Fn = {
        container: Rrt,
        podcastContainer: $rt,
        attribution: qrt,
        icon: Brt,
        pub: Urt
    },
    Frt = ({
        postType: n,
        crossPostInfo: {
            introText: t,
            crossPostedPub: e,
            crossPostingByLine: s
        }
    }) => {
        const o = s[0];
        return r(X, {
            className: $(Fn.container, n === "podcast" && Fn.podcastContainer),
            paddingLeft: 16,
            gap: 20,
            paddingTop: 12,
            paddingBottom: 20
        }, r(gt, {
            className: Fn.attribution,
            gap: 4,
            alignItems: "center"
        }, r(el, {
            className: Fn.icon,
            height: 16
        }), " ", r(I.Meta, {
            translated: !0,
            color: "pub-accent"
        }, "Cross-post from", " ", r("a", {
            className: Fn.pub,
            href: mr(e)
        }, I18N.p(e.name)))), r(I.B2, {
            color: "pub-primary-text"
        }, t, " - ", r(ml, V(k({}, o), {
            type: "user",
            uuid: "",
            isStatic: !1,
            isEditorContext: !1
        }))))
    },
    jrt = n => r(Ht, V(k({}, n), {
        name: "EmailIcon",
        svgParams: {
            height: 25,
            width: 25,
            strokeWidth: 0,
            fill: "#000Z"
        }
    }), r("g", null, r("path", {
        d: "M22.93,7a2.43,2.43,0,0,0-.41-.93A2.61,2.61,0,0,0,20.39,5H4.61A2.61,2.61,0,0,0,2.48,6.1,2.43,2.43,0,0,0,2.07,7h0A2.78,2.78,0,0,0,2,7.61v9.78A2.61,2.61,0,0,0,4.61,20H20.39A2.61,2.61,0,0,0,23,17.39V7.61A2.25,2.25,0,0,0,22.93,7ZM4.61,6H20.39a1.58,1.58,0,0,1,1.26.62l-8.91,5.31a.49.49,0,0,1-.47,0L3.35,6.62A1.58,1.58,0,0,1,4.61,6ZM22,17.39A1.61,1.61,0,0,1,20.39,19H4.61A1.61,1.61,0,0,1,3,17.39V7.58l8.77,5.22a1.48,1.48,0,0,0,1.47,0L22,7.58Z"
    }))),
    Hrt = s => {
        var o = s,
            {
                color: n = "#B6B6B6",
                height: t = 18
            } = o,
            e = te(o, ["color", "height"]);
        return r(Ht, V(k({}, e), {
            height: t,
            name: "LockFullIcon",
            svgParams: {
                height: 18,
                width: 18,
                viewBox: "0 0 18 18"
            }
        }), r("rect", {
            x: "5.5",
            y: "2.5",
            width: "7",
            height: "13",
            rx: "3.5",
            stroke: n,
            fill: "none"
        }), r("rect", {
            x: "3.5",
            y: "8.5",
            width: "11",
            height: "8",
            rx: "0.5",
            fill: n,
            stroke: n
        }))
    },
    Vrt = n => r(Ht, V(k({}, n), {
        name: "LucideRecommend",
        svgParams: {
            height: 24,
            width: 24,
            fill: "#000000",
            strokeWidth: 0
        }
    }), r(om, {
        height: 24,
        stroke: n.stroke,
        fill: n.fill,
        strokeWidth: n.strokeWidth
    }));
class zrt extends he {
    onShare(t) {
        this.props.position && W(G.POST_SHARE_BUTTON_CLICKED, {
            position: this.props.position
        }), !this.props.isStatic && (t && t.stopPropagation(), this.props.sharedShareDialog ? t.target.dispatchEvent(new CustomEvent("share-post", {
            bubbles: !0
        })) : this.modal.open())
    }
    render({
        className: t,
        linkClassName: e,
        user: s,
        pub: o,
        post: i,
        reaction_token: a,
        height: c,
        onChange: l,
        isStatic: u,
        children: d,
        sharedShareDialog: h,
        noIcon: p
    }) {
        let f;
        return i.share_url_override ? f = i.share_url_override : u ? i ? f = Dt.SHARE_URL : f = Dt.SHARE_PUB_URL : f = "javascript:void(0)", r("span", {
            className: t
        }, r("a", {
            href: f,
            onClick: g => this.onShare(g),
            className: e
        }, !p && r(Qc, {
            className: "recommend-icon post-meta-icon",
            isStatic: u,
            height: c,
            alt: "Share",
            stroke: "#757575",
            fill: "transparent",
            strokeWidth: u ? 1 : 1.5
        }), d), !u && !h && r(xr, {
            ref: g => this.modal = g,
            user: s,
            pub: o,
            post: i,
            reaction_token: a,
            onChange: l
        }))
    }
}
const Wrt = ({
        children: n,
        content: t,
        baseRef: e = void 0,
        portalClass: s = "",
        className: o = "",
        style: i = void 0
    }) => {
        const a = At(null),
            c = At(null);
        return t ? r("div", {
            ref: a,
            className: o,
            style: i
        }, n, r(rl, {
            baseRef: e || a,
            hoverToggle: !0,
            onOpen: () => {
                var l;
                return (l = c.current) == null ? void 0 : l.open()
            },
            onClose: () => {
                var l;
                return (l = c.current) == null ? void 0 : l.close()
            },
            className: s
        }, r(hi, {
            ref: c,
            noList: !0,
            className: "explanation"
        }, t))) : n
    },
    {
        getPaidOrFoundingTierNameForPost: Grt
    } = qh,
    Jrt = 46438;
class Dd extends he {
    constructor(e, s) {
        super(e, s);
        at(this, "withAuthorLine", (e, s) => {
            const {
                pub: o,
                post: i,
                showAuthor: a,
                showPhoto: c,
                getConfigFor: l
            } = e, u = i.type === "adhoc_email", d = Pe(i).length, h = d === 1, p = h && Pe(i)[0], f = h && p.is_guest && !l("dont_show_guest_byline") && !u, g = e.showDate || e.showDatetime, m = !i.is_published && !e.inThreadHead && g && !u, _ = e.isFreePreview && e.showAudience && g && !u, y = _r(i.audience) && e.showAudience && !_ && g && !u && !ra({
                post: i
            }), b = wr(i.audience) && e.showAudience && !y && !_ && g && !u && !ra({
                post: i
            }), S = da({
                pub: o,
                post: i,
                showAuthor: a,
                showPhoto: c
            });
            return r(qe, {
                width: "100%",
                className: $("post-meta")
            }, r("tr", null, r("td", null, r(re, null, r(It, {
                gap: 4
            }, r(I.Meta, {
                color: "primary",
                className: Yc.postAuthor
            }, d > 0 ? ti(Pe(i).map(x => r(I.Meta, {
                as: "a",
                href: Jn(x, o, {
                    base: e.isStatic
                }),
                color: "primary",
                style: "text-decoration: none"
            }, x.name))) : yr(o, i))), r(It, {
                gap: 4
            }, r(I.Meta, null, (e.showDate || e.showDatetime) && i.post_date && r("time", {
                dateTime: _t(i.post_date).toISOString()
            }, _t(i.post_date).locale(this.context.language).standardDate())), b && r(It, {
                gap: 4
            }, r(I.Meta, null, "∙"), r(I.Meta, {
                color: "accent-purple",
                translated: !0
            }, "Paid")), y && r(It, {
                gap: 4
            }, r(I.Meta, null, "∙"), r(I.Meta, {
                color: "accent-purple"
            }, this.context.iString(Grt(o, i)))), _ && r(It, {
                gap: 4
            }, r(I.Meta, null, "∙"), r(I.Meta, {
                color: "accent-purple",
                translated: !0
            }, "Preview")), f && r(It, {
                gap: 4
            }, r(I.Meta, null, "∙"), r(I.Meta, {
                translated: !0
            }, "Guest post")), m && r(It, {
                gap: 4
            }, r(I.Meta, null, "∙"), r(I.Meta, {
                translated: !0
            }, "Draft"))))), S && r("td", {
                align: "right"
            }, r(It, {
                gap: 4
            }, d > 0 && Pe(i).map((x, w) => w < 4 && r("a", {
                href: Jn(x, o, {
                    base: e.isStatic
                })
            }, r(is, {
                src: x.photo_url,
                size: d > 1 ? 32 : 40
            })))))))
        });
        if (typeof window != "undefined" && (window != null && window.matchMedia)) {
            const o = window.matchMedia("screen and (max-width: 650px)");
            this.state = {
                isMobileWidth: o.matches
            };
            const i = a => {
                this.unmounted || this.setState({
                    isMobileWidth: a.matches
                })
            };
            o.addEventListener ? o.addEventListener("change", i) : o.addListener && o.addListener(i)
        }
    }
    componentWillUnmount() {
        this.unmounted = !0
    }
    render({
        pub: e,
        post: s,
        showAuthor: o,
        showPhoto: i,
        fromPostPage: a
    }) {
        return da({
            pub: e,
            post: s,
            showAuthor: o,
            showPhoto: i
        }) || Tp({
            pub: e,
            post: s,
            showAuthor: o
        }) || Pp({
            pub: e,
            post: s,
            showAuthor: o
        }) ? this.withAuthorLine(this.props, this.state) : r(Krt, V(k({}, this.props), {
            editOnRightSide: this.props.showUpdatedIcons,
            className: this.props.showUpdatedIcons ? "alternative-meta" : this.props.className,
            isMobileWidth: this.state.isMobileWidth,
            actionBarStyle: a ? "post-header-compact" : "post-preview"
        }))
    }
}
at(Dd, "contextType", vc);
const Yrt = Bc(Dd);

function Rd({
    pub: n,
    post: t,
    user: e,
    reactors: s,
    secondaryFaces: o
}) {
    var i, a;
    return r($d, {
        postId: t.id,
        totalLikes: Math.max((i = t.reactions["❤"]) != null ? i : 0, (s != null ? s : []).length),
        reactors: ss(s, e, !!t.reaction, n),
        secondaryFaces: ss(o, e, !!t.restacked, n),
        totalRestacks: n.hide_post_restacks ? 0 : (a = t.restacks) != null ? a : 0,
        loading: !s,
        hoverProfiles: !0,
        enableModal: !0,
        showFaces: n.post_reaction_faces_enabled
    })
}

function Cat(n) {
    const {
        post: t,
        user: e,
        pub: s
    } = n, {
        result: o,
        isLoading: i
    } = wn({
        pathname: `/api/v1/post/${t.id}/reactors`,
        auto: !0,
        deps: [t.id]
    }), {
        result: a,
        isLoading: c
    } = wn({
        pathname: `/api/v1/post/${t.id}/restackers`,
        auto: !0,
        deps: [t.id]
    });
    return r(Rd, k({
        reactors: ss(o, e, !!t.reaction, s),
        secondaryFaces: ss(a, e, !!t.restacked, s)
    }, n))
}

function ss(n, t, e, s) {
    if (!n) return [];
    if (t) {
        const o = n.findIndex(i => i.id === t.id);
        e && (t.subscription_visibility !== "private" || s.id === Jrt) && t.activity_likes_enabled && o < 0 ? n.splice(0, 0, {
            id: t.id,
            name: t.name,
            photo_url: t.photo_url
        }) : !e && o >= 0 && n.splice(o, 1)
    }
    return n
}

function Krt({
    additionalCommentCount: n = 0,
    className: t,
    user: e,
    pub: s,
    post: o,
    showAudience: i = !1,
    showDate: a = !1,
    showEmailSent: c = !1,
    showDatetime: l = !1,
    showReactions: u = !0,
    showComments: d = !0,
    showShare: h = !1,
    showRestack: p = !1,
    showPublicationName: f = !1,
    hidePinning: g = !1,
    reaction_token: m,
    onClick: _,
    onChange: y,
    isStatic: b = !1,
    isFreePreview: S = !1,
    allowSendEmail: x = !1,
    allowEdit: w = !1,
    shareTooltipText: P,
    showPins: A,
    sharedShareDialog: M,
    showUpdatedIcons: O,
    editOnRightSide: T = !1,
    onClickCommentButton: v,
    reactors: C,
    showAuthor: N,
    showPhoto: R,
    fromPostPage: J,
    isMobileWidth: j,
    actionBarStyle: q = "post-header-compact"
}) {
    var wt;
    const B = s.id === o.publication_id ? s : void 0,
        Y = ss(C, e, !!o.reaction, s),
        L = q === "post-footer",
        E = L ? 20 : q === "post-preview" ? 14 : 18,
        U = q === "post-header-large" ? 20 : q === "post-preview" ? 16 : q === "thread-head" || L ? 14 : 18;
    let z;
    o.comment_url_override ? z = o.comment_url_override : b ? z = `${Dt.HALF_MAGIC_COMMENTS_URL}&utm_source=${bt.substack}&utm_medium=${Et.email}` : z = Ft(s, o, {
        comments: !0
    });
    const et = n + ((wt = o.comment_count) != null ? wt : 0),
        Z = d && !S && Fc({
            publication: s,
            post: o
        }) && o.type !== "restack",
        tt = u && !S && !["adhoc_email", "restack"].includes(o.type),
        ut = (a || l) && o.post_date && !o.is_draft,
        H = c ? !!o.email_sent_at : null,
        rt = Ap({
            user: e,
            noBase: !1
        }),
        F = r(Kc, {
            user: e,
            pub: s,
            post: o,
            token: m,
            onChange: nt => {
                var st;
                (st = nt.post) != null && st.reaction && e && rt({
                    user: e
                }), y(nt)
            },
            height: U,
            isStatic: b,
            isFreePreview: S,
            alt: "Like",
            buttonStyle: L,
            className: "post-meta-icon like-reaction-button",
            hideReactionCount: L && !b
        }),
        pt = [c && H && {
            className: "email-sent",
            title: "This post was sent as an email",
            content: r(jrt, {
                className: "post-meta-icon",
                height: E,
                isStatic: b
            })
        }, A && o.is_section_pinned && {
            className: "icon pinned",
            content: r(Lp, {
                className: "post-meta-icon",
                isStatic: b
            })
        }, o.type === "adhoc_email" ? {
            className: "audience-adhoc",
            content: r(Ad, {
                className: "post-meta-icon",
                isStatic: b
            })
        } : i && wr(o.audience) && {
            className: "audience-lock",
            content: r(Hrt, {
                color: "#666666",
                height: E,
                isStatic: b
            })
        }, Ip({
            pub: s,
            post: o,
            showAuthor: N,
            showPhoto: R,
            isMobileWidth: j
        }) && {
            className: "author",
            content: Pe(o).length > 0 ? ti(Pe(o).map(nt => r(vn, {
                disabled: b,
                subject: nt,
                utmSource: "byline"
            }, r("a", {
                href: Jn(nt, s, {
                    base: b
                }),
                onClick: st => st.stopPropagation()
            }, nt.name)))) : yr(s, o)
        }, f && {
            className: "post-publication-name",
            content: s.name
        }, O && !T && w && !b && e && e.is_contributor && {
            className: "post-meta-item icon edit-icon",
            onClick: nt => nt.stopPropagation(),
            content: r(fo, {
                pub: s,
                post: o,
                iconHeight: E,
                hidePinning: g,
                user: e,
                emailSent: H,
                allowSendEmail: x,
                showUpdatedIcons: O
            })
        }, ut && {
            className: "post-date",
            title: _t(o.post_date).toISOString(),
            content: r(I.Meta, null, r("time", {
                dateTime: _t(o.post_date).toISOString()
            }, Op({
                post: o,
                showDatetime: l,
                isStatic: b,
                fromPostPage: J,
                showReactions: tt
            })))
        }, (B == null ? void 0 : B.community_enabled) && o.slug && tt && !o.is_draft && {
            className: "icon",
            onClick: nt => nt.stopPropagation(),
            content: !L && !b && Y.length ? r(Wrt, {
                portalClass: "facepile-tooltip",
                content: r($d, {
                    postId: o.id,
                    totalLikes: Mp(Object.values(o.reactions)),
                    reactors: Y,
                    loading: !C
                })
            }, F) : F
        }, e && {
            className: "icon",
            onClick: nt => nt.stopPropagation(),
            content: r(Xrt, {
                post: o,
                isPostFooter: L,
                isStatic: b,
                lucideIconHeight: U,
                onChange: y
            })
        }, (B == null ? void 0 : B.community_enabled) && o.slug && Z && !o.is_draft && {
            className: "icon",
            onClick: nt => nt.stopPropagation(),
            content: r("a", {
                className: L ? "post-meta-button button" : "",
                href: z,
                native: B && Rh(document.location.pathname),
                onClick: v
            }, r(tl, {
                className: "comment-icon post-meta-icon",
                isStatic: b,
                height: U,
                alt: "Comment",
                stroke: "#757575",
                fill: "transparent",
                strokeWidth: b ? 1 : 1.5,
                ampProps: {
                    layout: "fixed"
                }
            }), !et && L && r("span", {
                className: "meta-button-label"
            }, "Comment"), et > 0 && r("span", {
                className: "comment-count"
            }, Dh(et)))
        }, p && !L && {
            className: "icon",
            onClick: nt => nt.stopPropagation(),
            content: r("a", {
                href: Dt.RESTACK_URL,
                className: L ? "button post-meta-button" : void 0
            }, r(Vrt, {
                className: "recommend-icon post-meta-icon",
                isStatic: b,
                height: U,
                alt: "Recommend",
                stroke: "#757575",
                fill: "transparent",
                strokeWidth: b ? 1 : 1.5,
                ampProps: {
                    layout: "fixed"
                }
            }), L && r("span", {
                className: "meta-button-label"
            }, "Recommend"))
        }, h && o.audience !== "only_free" && !o.is_draft && !S && {
            className: "icon",
            onClick: nt => nt.stopPropagation(),
            content: r(zrt, {
                user: e,
                pub: B,
                post: o,
                reaction_token: m,
                height: U,
                onChange: y,
                isStatic: b,
                sharedShareDialog: M,
                position: q === "post-footer" ? "post-footer" : "post-header",
                linkClassName: L ? "button post-meta-button" : void 0
            }, L && r("span", {
                className: "meta-button-label"
            }, "Share"), P && r("div", {
                className: "share-tooltip-wrap"
            }, r("div", {
                className: "share-tooltip"
            }, P)))
        }, (!O || T) && w && !b && e && e.is_contributor && {
            className: "icon edit-icon",
            onClick: nt => nt.stopPropagation(),
            content: r(fo, {
                pub: s,
                post: o,
                iconHeight: E,
                hidePinning: g,
                user: e,
                emailSent: H,
                allowSendEmail: x,
                showUpdatedIcons: O
            })
        }].filter(nt => !!nt);
    return b ? r("table", {
        className: $("post-meta custom", {
            big: L
        }, t),
        cellpadding: "0",
        cellspacing: "0",
        onClick: _
    }, r("tr", null, pt.map(({
        className: nt,
        title: st,
        onClick: ft,
        content: Tt
    }) => r("td", {
        className: $("post-meta-item", nt),
        title: st,
        onClick: ft
    }, Tt)))) : r("div", {
        className: $("post-meta post-meta-actions-web custom", {
            big: L
        }, t),
        onClick: _
    }, pt.map(({
        className: nt,
        title: st,
        onClick: ft,
        content: Tt
    }) => r("div", {
        className: $("post-meta-item", nt),
        title: st,
        onClick: ft
    }, Tt)))
}

function $d({
    className: n,
    postId: t,
    reactors: e,
    secondaryFaces: s,
    totalLikes: o,
    totalRestacks: i,
    loading: a,
    hoverProfiles: c,
    enableModal: l,
    showFaces: u
}) {
    const d = o > 0 ? oa(o, "Like") : "";
    let h = "";
    return i > 0 && (h = `${oa(i,"Restack")}`), r(Sr, {
        className: n,
        loading: a,
        faces: e,
        secondaryFaces: s,
        pileLabel: d,
        modalLabel: d,
        secondaryLabel: h,
        secondaryHref: $h(t, {
            noBase: im,
            urlParams: {
                utm_source: bt.substack,
                utm_content: Zo.facepileRestacks
            }
        }),
        totalCount: o,
        totalRestacks: i,
        hoverProfiles: c,
        enableModal: l,
        faceUtmSource: "post-reactions-face",
        detailUtmSource: "post-reactions-modal",
        onDialogOpen: () => {
            W(G.POST_REACTIONS_MODAL_VIEWED, {
                post_id: t
            })
        },
        showFaces: u
    })
}

function Xrt({
    post: n,
    isPostFooter: t,
    isStatic: e,
    isSaved: s,
    lucideIconHeight: o,
    onChange: i
}) {
    const {
        onSave: a,
        isSaved: c
    } = nl({
        post: n,
        isSaved: n.is_saved
    }), l = () => {
        const u = a();
        i({
            post: V(k({}, n), {
                is_saved: u
            })
        })
    };
    return r("a", {
        className: $("post-meta-save-button", t ? "post-meta-button button" : "", {
            isSaved: c
        }),
        href: e && Dt.SAVE_POST_URL,
        onClick: l
    }, r(Dp, {
        isStatic: e,
        height: o,
        stroke: "#757575",
        strokeWidth: e ? 1 : 1.5
    }), t && r("span", {
        className: "meta-button-label"
    }, "Save"))
}
const gc = ({
        post: n
    }) => {
        const t = Ko().getSettingFor("enable_prev_next_nav"),
            e = In(),
            {
                iString: s
            } = ot();
        if (!t) return null;
        const o = n.next_post_slug,
            i = n.previous_post_slug;
        return !o && !i ? null : r(pr, null, r(gt, {
            justifyContent: o && i ? "space-between" : o ? "end" : "start",
            paddingY: 16
        }, i && r(de, {
            leading: r(am, {
                size: 20
            }),
            priority: e ? "tertiary" : "secondary",
            size: e ? "sm" : "md",
            onClick: () => {
                W(G.PREVIOUS_POST_LINK_CLICKED, {
                    post_id: n.id
                }), ia(`/p/${i}`)
            }
        }, s("Previous")), o && r(de, {
            trailing: r(fl, {
                size: 20
            }),
            priority: e ? "tertiary" : "secondary",
            size: e ? "sm" : "md",
            onClick: () => {
                W(G.NEXT_POST_LINK_CLICKED, {
                    post_id: n.id
                }), ia(`/p/${o}`)
            }
        }, s("Next"))))
    },
    Qrt = o => {
        var i = o,
            {
                stroke: n = "black",
                height: t = 19,
                width: e = 19
            } = i,
            s = te(i, ["stroke", "height", "width"]);
        return r(Ht, V(k({}, s), {
            name: "AdhocEmailIcon",
            svgParams: {
                height: t,
                width: e,
                viewBox: "0 0 19 19"
            }
        }), r("path", {
            d: "M3 4C3 3.72386 3.22386 3.5 3.5 3.5H13C13.2761 3.5 13.5 3.72386 13.5 4V12.5C13.5 12.7761 13.2761 13 13 13H3.5C3.22386 13 3 12.7761 3 12.5V4Z",
            stroke: n
        }), r("path", {
            d: "M3.5 4L8.25 9.02499L13 4",
            stroke: n,
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        }), r("path", {
            d: "M5 13.5V15C5 15.2761 5.22386 15.5 5.5 15.5H15.3151C15.5913 15.5 15.8151 15.2761 15.8151 15V7C15.8151 6.72386 15.5913 6.5 15.3151 6.5H14",
            stroke: n
        }))
    },
    Zrt = n => r(Ht, V(k({}, n), {
        name: "PodcastIcon",
        svgParams: {
            height: 19,
            width: 19
        }
    }), r("path", {
        d: "M10.1505 3H8.61291C6.06527 3 4 4.9401 4 7.33333V10",
        "stroke-linejoin": "round"
    }), r("path", {
        d: "M8.89246 3H10.4301C12.9778 3 15.043 4.9401 15.043 7.33333V10.5",
        "stroke-linejoin": "round"
    }), r("path", {
        d: "M3 12.1429V13.3571C3 14.5406 3.81359 15.5 4.81721 15.5H6.42473V10H4.81721C3.81359 10 3 10.9594 3 12.1429Z",
        "stroke-linejoin": "round"
    }), r("path", {
        d: "M16 12.1429V13.3571C16 14.5406 15.1864 15.5 14.1828 15.5H12.5753V10H14.1828C15.1864 10 16 10.9594 16 12.1429Z",
        "stroke-linejoin": "round"
    })),
    tot = o => {
        var i = o,
            {
                stroke: n = "black",
                height: t = 19,
                width: e = 19
            } = i,
            s = te(i, ["stroke", "height", "width"]);
        return r(Ht, V(k({}, s), {
            name: "VideoIcon",
            svgParams: {
                height: t,
                width: e,
                viewBox: "2 2 15 15"
            }
        }), r("g", {
            fill: "transparent"
        }, r("path", {
            d: "M15.5 15H3.5V4H15.5V15Z",
            stroke: n,
            "stroke-linejoin": "round"
        }), r("path", {
            d: "M11.5 11L8.5 9V12.5L11.5 11Z",
            stroke: n,
            "stroke-linejoin": "round"
        }), r("path", {
            d: "M4 7H15",
            stroke: n
        }), r("path", {
            d: "M4.5 4L7.5 7",
            stroke: n
        }), r("path", {
            d: "M8 4L11 7",
            stroke: n
        }), r("path", {
            d: "M11.5 4L14.5 7",
            stroke: n
        })))
    },
    eot = e => {
        var s = e,
            {
                postType: n
            } = s,
            t = te(s, ["postType"]);
        switch (n) {
            case "newsletter":
                return r(Wf, k({}, t));
            case "adhoc_email":
                return r(Qrt, k({}, t));
            case "thread":
                return r(ef, k({}, t));
            case "podcast":
                return r(Zrt, k({}, t));
            case "video":
                return r(tot, k({}, t));
            case "restack":
                return r(el, k({}, t));
            default:
                return console.warn(`Unrecognized post type: [${n}]`), null
        }
    },
    Rs = 500,
    not = {
        PUBLICATION: "publication",
        CHOOSE: "choose"
    },
    sot = ({
        pubToRecommendBack: n,
        recommendingPub: t,
        recommendedPubs: e,
        setStep: s,
        close: o,
        setLoading: i,
        source: a
    }) => {
        const {
            iString: c,
            iTemplate: l
        } = ot(), [u, d] = D(null);
        lt(() => {
            var p;
            u == null && (e != null && e.find(({
                id: f
            }) => f === n.id)) && d((p = e == null ? void 0 : e.find(({
                id: f
            }) => f === n.id)) == null ? void 0 : p.blurb)
        }, [u, e, n.id]);
        const h = Hc(n);
        return r("div", {
            className: "add-recommending-pub-modal-container"
        }, r(vr, {
            pub: n,
            logo_url: n.logo_url,
            size: 84
        }), r("h2", null, l `Recommend ${n.name}`), n.hero_text && r("p", {
            className: "pub-hero-text"
        }, n.hero_text), r("p", {
            className: "pub-author-subs"
        }, h ? l `By ${h}` : null, h && n.rankingDetail ? "  ·  " : null, n.rankingDetail), r("p", {
            className: "why-recommend"
        }, l `Why are you recommending ${n.name}? (optional)`), r("textarea", k({
            placeholder: c("Share why your readers might enjoy it..."),
            onChange: p => {
                d(p.target.value)
            },
            value: u
        }, Zf)), r("div", {
            className: "footer"
        }, r("p", {
            className: "learn-more"
        }, c("Recommendations are shown to readers after they subscribe to your publication."), " ", r("a", {
            href: "https://support.substack.com/hc/en-us/articles/5036794583828-How-can-I-recommend-other-publications-on-Substack-",
            onClick: () => {
                W(G.MANAGE_RECOMMENDATIONS_LEARN_MORE_CLICKED, {
                    source: "modal-recommend-pub"
                })
            }
        }, r("u", null, c("Learn more")))), r("button", {
            className: $("continue-button button primary", {
                disabled: ((u == null ? void 0 : u.length) || 0) > Rs
            }),
            disabled: ((u == null ? void 0 : u.length) || 0) > Rs,
            title: ((u == null ? void 0 : u.length) || 0) > Rs ? l `Please enter a description shorter than ${Rs} characters` : "",
            onClick: () => K(void 0, null, function*() {
                yield dt.put("/api/v1/recommendations").send(k({
                    recommended_publication_id: n.id,
                    recommending_publication_id: t.id,
                    source: a || "recommendation_notification_email",
                    suggested: !1
                }, !!u && {
                    description: u.length >= 2 ? u : null
                })), e != null && e.filter(({
                    id: p
                }) => p !== n.id).length ? o() : s(not.CHOOSE), i ? (i(!0), o()) : (Se("/publish/settings/recommendations"), dl(l `Started recommending ${n.name}`, {
                    timeout: 1500
                }))
            })
        }, c("Continue"))))
    },
    rot = ({
        pub: n
    }) => {
        const [t, e] = D(!0), [s, o] = D(null), [i, a] = D(!1), c = At(null), l = () => {
            c.current.close()
        };
        if (lt(() => {
                !s && t && (() => K(void 0, null, function*() {
                    try {
                        const h = (yield dt.get("/api/v1/publication_user/default")).body;
                        if (o(h), !h || h.id === n.id) {
                            a(!0), e(!1);
                            return
                        }
                        const p = yield dt.get(`/api/v1/recommendations/from/${h.id}/to/${n.id}`);
                        a(!!p.body), e(!1)
                    } catch (d) {
                        console.error("Failed to load recommend cta: ", d)
                    }
                }))()
            }, [n, t, e, s, o]), !(t || i || s && s.invite_only)) return r(it, null, r("div", {
            className: "end-of-post-recommend-cta-container"
        }, r(vr, {
            pub: n,
            size: 54,
            openInNewTab: !0,
            logo_url: n.logo_url
        }), r("h3", {
            className: "publication-name"
        }, "Recommend ", n.name, " to the readers of ", s.name), r("p", {
            className: "publication-hero-text"
        }, n.hero_text), r(ie, {
            className: $({
                primary: !0,
                "subscribe-button": !0
            }),
            onClick: () => {
                W(G.END_OF_POST_RECOMMEND_CTA_CLICKED, {
                    pub: n,
                    recommending_pub_id: s == null ? void 0 : s.id
                }), c.current.isOpen() ? c.current.close() : c.current.open()
            }
        }, "Recommend")), r(oot, {
            pubToRecommend: n,
            recommendingPub: s,
            setLoading: e,
            setStep: l,
            ref: c
        }))
    };
class oot extends cs {
    getClassName() {
        return "settings-add-pub-modal-wrapper"
    }
    renderChildren() {
        return r(sot, {
            pubToRecommendBack: this.props.pubToRecommend,
            recommendingPub: this.props.recommendingPub,
            setStep: this.props.setStep,
            close: this.close,
            setLoading: t => {
                this.props.setLoading(t), dl(`Started recommending ${this.props.pubToRecommend.name}`, {
                    timeout: 1500
                })
            },
            source: "end-of-post-recommend-cta"
        })
    }
}
const iot = "_subscribeDialog_1h9fv_1",
    aot = "_form_1h9fv_13",
    cot = "_dismissButton_1h9fv_17",
    lot = "_emailInput_1h9fv_26",
    uot = "_pictureBox_1h9fv_42",
    dot = "_authorIcon_1h9fv_46",
    hot = "_childPublicationIcon_1h9fv_55",
    pot = "_signInLink_1h9fv_68",
    fot = "_background_1h9fv_85",
    mot = "_error_1h9fv_97",
    got = "_closeIcon_1h9fv_121",
    fe = {
        subscribeDialog: iot,
        form: aot,
        dismissButton: cot,
        emailInput: lot,
        pictureBox: uot,
        authorIcon: dot,
        childPublicationIcon: hot,
        signInLink: pot,
        background: fot,
        error: mot,
        closeIcon: got
    },
    bot = 300,
    _ot = ({
        pub: n,
        post: t,
        isTest: e
    }) => {
        const [s, o] = D(!1), [i, a] = D(!1), [c, l] = D(!1), [u, d] = D(""), [h, p] = D([]), [f, g] = D(200), [m, _] = D(0), y = At(null), {
            exposeExperiment: b,
            getExperimentVariant: S
        } = ll(), x = In(), w = `pub-${n.id}-subscribe-prompt-next-shown-at`, P = `pub-${n.id}-takeover-next-shown-at`, A = typeof window != "undefined" && (window != null && window.innerHeight) ? window.innerHeight : 700, M = document.getElementsByClassName("available-content"), O = M.length > 0 ? M[0].scrollHeight : 0;
        let T = 600;
        T = Math.max(Math.min(T, O - A), 600), (() => {
            var ut;
            const {
                height: Z,
                width: tt
            } = ((ut = y.current) == null ? void 0 : ut.getBoundingClientRect()) || {
                height: 0,
                width: 0
            };
            g(typeof window != "undefined" && window && y.current ? (window.innerHeight - Z) / 2 : 200), _(typeof window != "undefined" && window && y.current ? (window.innerWidth - tt) / 2 : 0)
        })();
        const [C, N] = D(A + Math.max(f, T)), [R, J] = D(Math.max(document.documentElement.scrollTop || document.body.scrollTop, 0)), [j, q] = D("absolute"), [B, Y] = D(j === "fixed" || R > C - A), L = j === "fixed" ? 60 : Math.min(Math.max((R - C + A) / (A - f) * 60, 0), 60), E = Mt(() => {
            !x && R >= C - bot && a(!0)
        }, [R, x, C, f, a]);
        lt(() => {
            if (e) return;
            let Z = !0;
            O <= 1.5 * A && (o(!0), Z = !1);
            let tt = null;
            if (document != null && document.referrer) {
                try {
                    tt = new URL(document.referrer)
                } catch (ut) {}((tt == null ? void 0 : tt.hostname) === "news.ycombinator.com" || (tt == null ? void 0 : tt.hostname) === "hckrnews.com") && (o(!0), Z = !1)
            }
            Sf(w) > Date.now() && (o(!0), Z = !1), Z && (b("hide_subscribe_prompt_on_post_page"), S("hide_subscribe_prompt_on_post_page") === "treatment" && o(!0))
        }, []), lt(() => {
            B && (s || (W(G.SUBSCRIBE_PROMPT_SHOWN, {
                post_id: t.id
            }), _s(w, _t().add(1, "hour").valueOf()), _s(P, _t().add(1, "hour").valueOf())))
        }, [B, s]), lt(() => {
            i && (W(G.SUBSCRIBE_PROMPT_DISMISSED, {
                post_id: t.id
            }), _s(w, _t().add(1, "day").valueOf()), _s(P, _t().add(1, "hour").valueOf()))
        }, [i]);
        const U = Z => {
                window.location.href = Ft(n, t, {
                    urlParams: {
                        subscribe_prompt: Z
                    }
                })
            },
            z = Mt(Z => K(void 0, null, function*() {
                var tt, ut, H, rt, ct;
                if (!c) {
                    l(!0), p([]), W(G.SUBSCRIBE_PROMPT_SUBMITTED, {
                        post_id: t.id
                    });
                    try {
                        const F = yield dt.post("/api/v1/free").send({
                            email: Z,
                            source: "post-subscribe-prompt"
                        });
                        al(), n.payments_state !== "enabled" && !n.has_recommendations ? U("free") : document.location.href = Ae(n, k(k({
                            utm_medium: Et.web,
                            utm_source: bt.postSubscribePrompt,
                            utm_content: t && t.id,
                            simple: !0,
                            just_signed_up: !0,
                            next: Ft(n, t),
                            requires_confirmation: F.body.requires_confirmation ? "true" : ""
                        }, F.body.subscription_id && {
                            subscription_id: F.body.subscription_id
                        }), F.body.referral_token && {
                            referral_token: F.body.referral_token
                        }))
                    } catch (F) {
                        (ut = (tt = F == null ? void 0 : F.response) == null ? void 0 : tt.body) != null && ut.error && typeof F.response.body.error == "string" ? p([F.response.body.error]) : (rt = (H = F == null ? void 0 : F.response) == null ? void 0 : H.body) != null && rt.errors && Array.isArray(F.response.body.errors) && F.response.body.errors.length > 0 && typeof((ct = F.response.body.errors[0]) == null ? void 0 : ct.msg) == "string" && p(F.response.body.errors.map(pt => pt.msg))
                    } finally {
                        l(!1)
                    }
                }
            }), [t, n, c, l]);
        lt(() => {
            if (s || i) return;
            const Z = () => {
                const tt = Math.max(document.documentElement.scrollTop || document.body.scrollTop, 0),
                    ut = tt - R;
                ut > 0 && j === "absolute" && tt > C - f && q("fixed"), ut < 0 && j === "fixed" && (q("absolute"), N(R + f)), ut < 0 && j === "absolute" && tt < C - A && N(A + Math.max(f, T, R)), J(tt), (j === "fixed" || ut > 0 && tt > C - A) && Y(!0)
            };
            return window.addEventListener("scroll", Z), window.addEventListener("resize", Z), () => {
                window.removeEventListener("scroll", Z), window.removeEventListener("resize", Z)
            }
        }, [j, C, N, R, J, Y]), lt(() => {
            if (s || i) return;
            const Z = tt => {
                tt.key === "Escape" && a(!0)
            };
            return window.addEventListener("keydown", Z), () => {
                window.removeEventListener("keydown", Z)
            }
        }, [s, i, a]);
        const {
            iString: et
        } = ot();
        return s || i ? r(it, null) : r(it, null, r(X, {
            ref: y,
            className: fe.subscribeDialog,
            style: {
                top: j === "absolute" ? `${C}px` : `${f}px`,
                left: `${m}px`,
                position: j
            },
            alignItems: "center"
        }, r(it, null, r(ht, {
            justifyContent: "center",
            alignItems: "end",
            paddingBottom: 20
        }, r("div", {
            className: fe.pictureBox
        }, r(pl, {
            user: {
                photo_url: n.author_photo_url
            },
            size: 64,
            className: fe.authorIcon
        }), n.logo_url && r(tm, {
            src: n.logo_url,
            size: 24,
            className: fe.childPublicationIcon,
            alt: n.name
        })), r("div", {
            className: fe.closeIcon,
            onClick: () => a(!0)
        }, r(Nm, null))), r(I.H4, {
            translated: !0,
            paddingBottom: 4,
            align: "center",
            color: "pub-primary-text"
        }, "Discover more from ", I18N.p(n.name)), r(I.B4, {
            color: "pub-secondary-text",
            paddingBottom: n.rankingDetail ? 4 : 24,
            align: "center"
        }, n.hero_text), n.rankingDetail && r(I.B5, {
            paddingBottom: 24,
            align: "center",
            color: "pub-secondary-text"
        }, n.rankingDetailFreeSubscriberCount), r("form", {
            className: fe.form,
            onSubmit: Z => {
                Z.preventDefault(), z(u)
            }
        }, r("input", {
            className: fe.emailInput,
            placeholder: "Type your email...",
            value: u,
            disabled: c,
            onChange: Z => {
                Z.stopPropagation(), Z.preventDefault(), d(Z.currentTarget.value)
            }
        }), r("div", {
            id: "error-container"
        }, h && h.map(Z => r("div", {
            className: fe.error
        }, Z))), r(ue, {
            type: "submit",
            disabled: c,
            grow: !0,
            priority: "primary-theme"
        }, et("Subscribe"))), r(ht, {
            gap: 8,
            alignItems: "center",
            justifyContent: "center",
            className: fe.dismissButton,
            onClick: () => a(!0)
        }, r(I.B4, {
            translated: !0,
            weight: "semibold",
            color: "pub-secondary-text"
        }, "Continue reading"), r(gl, null)), r(I.B4, {
            align: "center",
            className: fe.signInLink,
            weight: "semibold",
            color: "pub-primary-text"
        }, r("a", {
            onClick: () => {
                W(G.SUBSCRIBE_PROMPT_SIGN_IN_CLICKED, {
                    post_id: t.id
                }), Se(Me({
                    for_pub: n.subdomain,
                    redirect: Ft(n, t)
                }))
            },
            style: {
                cursor: "pointer"
            }
        }, et("Sign in")), " "), " ")), L > 0 && r("div", {
            className: fe.background,
            onClick: E,
            style: {
                opacity: `${L}%`
            }
        }))
    };

function yot({
    postId: n,
    onClose: t
}) {
    return lt(() => {
        W(G.LISTEN_TO_THIS_POST_MODAL_SHOWN, {
            post_id: n
        })
    }, []), r(Ze, {
        isOpen: !0,
        onClose: t
    }, r(Qs, {
        includeClose: !0,
        onClose: t
    }), r(ls, null, r(X, {
        alignItems: "center",
        gap: 24
    }, r(X, {
        style: {
            textAlign: "center"
        },
        justifyContent: "center",
        gap: 8
    }, r(sm, null, "Listen to this post"), r(I, {
        color: "secondary",
        style: {
            lineHeight: 1.5
        }
    }, "Get the Substack app to hear this article read aloud.")), r(wot, null))), r(zc, {
        includeDivider: !0,
        alignment: "center",
        primaryButton: r(Ke, {
            variant: "primary",
            href: Bh({
                utm_source: bt.web,
                utm_campaign: oe.ttsModal
            }),
            onClick: () => W(G.LISTEN_TO_THIS_POST_MODAL_GET_THE_APP_CLICKED, {
                post_id: n
            })
        }, "Get the app")
    }))
}

function wot() {
    const n = "/img/main/tts-dialog";
    return r("video", {
        height: 220,
        autoPlay: !0,
        muted: !0,
        loop: !0
    }, r("source", {
        src: `${n}/nux.mp4`,
        type: "video/mp4"
    }), r("img", {
        width: 374,
        height: 233,
        src: `${n}/1x.png`,
        srcset: Array.from(jp(1, 4)).map(t => `${n}/${t}x.png ${t}x`).join(", ")
    }))
}
const bc = {
        "byline-wrapper": "_byline-wrapper_1y2p2_1",
        "byline-wrapper--swap-on-mobile": "_byline-wrapper--swap-on-mobile_1y2p2_6",
        "byline-faces--swap-on-mobile": "_byline-faces--swap-on-mobile_1y2p2_10"
    },
    vot = "focus-comment-input",
    _c = ["details", "comments"],
    Sot = (n, t) => n && !n.invite_only && t && t.has_publication && !t.is_admin && !t.is_contributor && !t.is_public_admin && Rp(t, n),
    Cot = (n, t, e, s) => n.payments_state === "enabled" ? !(t != null && t.is_subscribed) : t != null && t.is_free_subscribed && n.payments_state === "disabled" && !n.invite_only ? !s && e && !(t != null && t.is_pledged) : !(t != null && t.is_free_subscribed);
class Go extends he {
    constructor(e, s) {
        var i, a, c, l;
        super(e, s);
        at(this, "onTopReached", e => {
            this.state.topReached || this.props.postPreview || (this.setState({
                topReached: !0
            }), jh({
                post: this.props.post,
                hasPaywall: e,
                surface: "publication",
                markRead: this.props.user && !this.props.noPageView,
                trackerUuid: this.props.getCurrentUuid()
            }))
        });
        at(this, "onTranscriptionClick", () => {
            this.setState(e => ({
                showTranscription: !e.showTranscription
            }))
        });
        at(this, "onCommentButtonClicked", e => {
            var s, o;
            if (this.props.post.type === "podcast") {
                e.preventDefault(), this.state.activeTab !== "comments" && (this.setState({
                    activeTab: "comments"
                }), (o = (s = this.props) == null ? void 0 : s.setTab) == null || o.call(s, "comments"), this.state.podcastComments || this.loadComments()), setTimeout(() => {
                    var i;
                    (i = this.podcastCommentInput.current) == null || i.focus()
                }, 0);
                return
            }!this.props.showComments || this.props.post.comment_count || (e.stopPropagation(), e.preventDefault(), document.dispatchEvent(new CustomEvent(vot)))
        });
        at(this, "handleClickTab", e => {
            var s, o;
            this.setState({
                activeTab: e
            }), (o = (s = this.props) == null ? void 0 : s.setTab) == null || o.call(s, e), e === "comments" && !this.state.podcastComments && this.loadComments()
        });
        at(this, "handleAddPodcastComment", e => {
            this.setState({
                podcastComments: [e].concat(this.state.podcastComments),
                addedPodcastComments: this.state.addedPodcastComments + 1
            })
        });
        at(this, "handleUpdatePodcastComments", e => {
            let s = 0;
            const o = (a, c) => a.map(l => l.id === c.id ? (c.status === "deleted" ? s -= 1 : s += c.children.length - l.children.length, c) : V(k({}, l), {
                    children: o(l.children, c)
                })),
                i = o(this.state.podcastComments, e);
            this.setState({
                podcastComments: i,
                addedPodcastComments: this.state.addedPodcastComments + s
            })
        });
        at(this, "handleUpdateSortPodcastComments", e => {
            W(G.COMMENTS_SORTED, {
                post_id: this.props.post.id,
                post_type: this.props.post.type,
                sort: e
            }), this.setState({
                commentSort: e
            }, () => {
                this.loadComments()
            })
        });
        const o = aa();
        this.state = {
            showTranscription: !1,
            autoPlay: !1,
            autoPlayVoiceOver: !1,
            podcastComments: null,
            addedPodcastComments: 0,
            commentSort: (i = e.post.default_comment_sort) != null ? i : "best_first",
            activeTab: _c.includes(o) ? o : "details",
            loadedWithHeaderLink: typeof window != "undefined" && ((a = window.location.hash) == null ? void 0 : a.startsWith(`#${encodeURIComponent("§")}`)),
            reactors: null,
            feedUrl: null,
            clippingMode: !1,
            shouldShowSubscribePrompt: !1,
            shouldShowFollowPrompt: !1
        }, (l = (c = this.props) == null ? void 0 : c.setTab) == null || l.call(c, _c.includes(o) ? o : "details"), !e.paywall && !e.post.hidden && e.post.body_html && (this.state.canShowSubscribeFooterAfterPost = Tot(e.post.body_html), this.state.truncated = e.truncateAt ? Eot(e.post.body_html, e.truncateAt, e.truncateTo) : null), typeof window != "undefined" && window.history.replaceState && (mn("autoPlay") === "true" && (window.history.replaceState({}, document.title, Ce({
            autoPlay: null
        })), this.state.autoPlay = !0), mn("play_audio") === "true" && (window.history.replaceState({}, document.title, Ce({
            play_audio: null
        })), this.state.autoPlayVoiceOver = !0)), this.containerRef = ae(), this.shareDialogRef = ae(), this.podcastCommentInput = ae(), this.podcastPlayer = ae(), this.videoPlayer = ae(), this.shouldShowRecommendCta = Sot(e.pub, e.user)
    }
    loadReactors() {
        return K(this, null, function*() {
            const [e, s] = yield Promise.all([dt.get(`/api/v1/post/${this.props.post.id}/reactors`), dt.get(`/api/v1/post/${this.props.post.id}/restackers`)]);
            this.setState({
                reactors: e.body,
                restackers: s.body
            })
        })
    }
    componentDidMount() {
        return K(this, null, function*() {
            this.props.post.type === "podcast" && this.state.activeTab === "comments" && pn(this.props.user, this.props.post) && this.loadComments(), this.props.paywall && !this.props.postPreview && W(G.POST_PAYWALL_SHOWN, {
                post_id: this.props.post.id,
                post_audience: this.props.post.audience,
                post_type: this.props.post.type,
                user: this.props.user
            }), this._triggerShare = () => this.triggerShare(), this.containerRef.current.addEventListener("share-post", this._triggerShare), this.props.post && this.loadReactors(), Math.random() < .001 && Uh({
                post: this.props.post
            });
            const e = mn("subscribe_prompt");
            e && (e === "paid" ? this.props.popToast(s => r(ce, V(k({}, s), {
                text: `Subscription purchased for ${this.props.pub.name}`
            }))) : this.props.popToast(s => r(ce, V(k({}, s), {
                text: `Subscribed to ${this.props.pub.name}`
            })))), this.setPostPromptState()
        })
    }
    componentWillUnmount() {
        this._triggerShare && this.containerRef.current.removeEventListener("share-post", this._triggerShare), this.props.stopInterval && this.props.stopInterval()
    }
    loadComments() {
        return K(this, null, function*() {
            const e = {
                all_comments: !0,
                sort: this.state.commentSort
            };
            try {
                this.setState({
                    podcastComments: null
                });
                const s = yield dt.get(`/api/v1/post/${this.props.post.id}/comments`).query(e);
                this.setState({
                    podcastComments: s.body.comments
                })
            } catch (s) {
                alert(Je(s))
            }
        })
    }
    setPostPromptState() {
        return K(this, null, function*() {
            const e = this.props.post.type === "newsletter" && this.props.getSettingFor("enable_post_page_conversion") === !0 && !this.props.disableSubscribePrompt && !aa() && !this.props.readerIsSearchCrawler,
                {
                    pub: s,
                    user: o,
                    referringUser: i,
                    forceFollowPrompt: a
                } = this.props;
            let c = [];
            if (o) try {
                c = yield br("/api/v1/feed/following")
            } catch (d) {}
            let l = a || !Fh.includes(s.id) && e && i && i.name && i.id !== (o == null ? void 0 : o.id) && !c.includes(i.id) && s.author_id !== i.id && s.contributors.every(d => d.user_id !== i.id);
            !a && l && !o && ((this.context.getExperimentVariant("app_upsell_follow_prompt") || "control") === "control" && (l = !1), this.context.exposeExperiment("app_upsell_follow_prompt"));
            const u = !a && e && !l && !this.props.paywall && !this.props.freeSignup && !o;
            this.setState({
                shouldShowFollowPrompt: l,
                shouldShowSubscribePrompt: u
            })
        })
    }
    triggerShare({
        fromEmail: e
    } = {}) {
        e ? this.shareDialogRef.current.fromEmail() : this.shareDialogRef.current.open()
    }
    onBottomReached(e) {
        this.state.bottomReached || this.props.postPreview || (this.setState({
            bottomReached: !0
        }), Hh({
            post: this.props.post,
            hasPaywall: e,
            surface: "publication",
            trackerUuid: this.props.getCurrentUuid()
        }))
    }
    shouldShowUFI() {
        const {
            fromPostPage: e,
            user: s,
            pub: o,
            getSettingFor: i
        } = this.props, {
            canShowSubscribeFooterAfterPost: a
        } = this.state;
        return e && a ? Cot(o, s, i("payment_pledges_enabled"), this.shouldShowRecommendCta) : !1
    }
    shouldTrackPaywallPostSeen() {
        const e = document.createElement("div");
        e.innerHTML = this.props.post.body_html;
        const s = this.props.pub.post_preview_limit || Vh;
        let o = "",
            i = !1;
        for (let a = e.childNodes.length - 1; a >= 0; a--) {
            const c = e.childNodes[a];
            if (o += c.textContent, o.length > s) {
                i = !0;
                break
            }
        }
        return i
    }
    render({
        commentsEnabled: e,
        user: s,
        pub: o,
        post: i,
        freeSignup: a,
        freeSignupEmail: c,
        isServingFreePodcastUrl: l,
        isShowsPost: u,
        reaction_token: d,
        invisible: h,
        paywall: p,
        onChange: f,
        hideTitle: g,
        noTitleLink: m,
        showComments: _,
        fromPostPage: y,
        freeTrialCoupon: b,
        showRestackModal: S,
        stripe_publishable_key: x,
        crossPostInfo: w,
        iString: P,
        iTemplate: A,
        themeVariables: M,
        referringUser: O,
        renderComments: T,
        renderContent: v,
        getSettingFor: C,
        startInterval: N,
        forceFollowPrompt: R
    }, {
        showTranscription: J,
        activeTab: j,
        loadedWithHeaderLink: q,
        truncated: B,
        autoPlay: Y,
        autoPlayVoiceOver: L,
        podcastComments: E,
        commentSort: U,
        addedPodcastComments: z,
        reactors: et,
        restackers: Z,
        shouldShowFollowPrompt: tt,
        shouldShowSubscribePrompt: ut
    }) {
        var Ki, Xi;
        const H = me({
                checkFirst4: !0
            }),
            rt = Gn("like_posts_enabled"),
            ct = this.state.clippingMode,
            F = Rn => this.setState({
                clippingMode: Rn
            }),
            pt = !p || p && this.shouldTrackPaywallPostSeen();
        N && pt && N({
            postId: this.props.post.id,
            containerElementRef: this.containerRef,
            elementIsStatic: !0
        });
        const wt = i.type === "video" && (p ? _d : An),
            nt = i.type === "video" && !p && ((Ki = i.videoUpload) == null ? void 0 : Ki.transcription),
            st = Dc(i),
            ft = i.type === "podcast" && (e || !!st),
            Tt = i.comment_count + z,
            Vt = this.shouldShowUFI(),
            xe = Bd(i),
            an = et ? et.length > 0 : !1,
            De = !!(C("paywall_unlock_tokens") && i.audience === "only_paid" && i.teaser_post_eligible && s && !(s != null && s.is_subscribed) && (s != null && s.is_free_subscribed || a) && !s.has_redeemed_post_unlock_token && this.context.getConfigFor("use_mobile_app_post_unlock_flow")),
            je = !!(C("paywall_unlock_tokens") && i.audience === "only_paid" && s && !(s != null && s.is_subscribed) && (s != null && s.is_free_subscribed || a) && !b && s.has_redeemed_post_unlock_for_sub);
        let He = !1;
        je && (this.context.exposeExperiment("no_teaser_posts_remaining_paywall"), He = this.context.getExperimentVariant("no_teaser_posts_remaining_paywall") === "treatment");
        let Re = "";
        i.type === "video" ? Re = i.audience === "founding" && ye(o) ? A `The full video is for subscribers in the ${ye(o)} plan` : i.audience === "founding" ? A `The full video is for subscribers in the Founding Member plan` : A `The full video is for paid subscribers` : i.type === "adhoc_email" ? Re = i.audience === "founding" && ye(o) ? A `This email is for subscribers in the ${ye(o)} plan` : i.audience === "founding" ? A `This email is for subscribers in the Founding Member plan` : A `This email is for paid subscribers` : De ? Re = A `Continue reading this post for free, courtesy of ${o.author_name||o.name}.` : He ? Re = A `Sorry, you've run out of post unlocks.` : Re = i.audience === "founding" && ye(o) ? A `This post is for subscribers in the ${ye(o)} plan` : i.audience === "founding" ? A `This post is for subscribers in the Founding Member plan` : A `This post is for paid subscribers`;
        const gs = r(it, null, r("div", {
                className: "available-content"
            }, J ? r("div", {
                className: "container tw-py-12"
            }, r(hc, {
                post: i,
                pub: o,
                user: s,
                playerRef: this.videoPlayer
            })) : r(ur, {
                html: B || i.body_html,
                pub: o,
                trackSelection: !0,
                user: s,
                freeSignup: a,
                freeSignupEmail: c,
                post: i,
                paywall: p,
                showing_behind_paywall: !!i.post_paywall_content_for_google,
                themeVariables: M
            })), i.post_paywall_content_for_google && r("div", {
                className: "paywall-content"
            }, r(ur, {
                html: i.post_paywall_content_for_google,
                pub: o,
                trackSelection: !1,
                user: s,
                freeSignup: a,
                freeSignupEmail: c,
                post: i,
                paywall: p
            })), !h && pt && r(Ye, {
                onVisible: () => this.onBottomReached(p)
            })),
            Yi = r(ms, k({
                user: s,
                freeSignupEmail: c,
                freeSignup: a,
                publication: o,
                post: i,
                fromPostPage: y,
                coupon: this.props.paywall === !0 && this.props.pub.paywall_free_trial_enabled ? b : null,
                showPostUnlockPrompt: De,
                magicToken: d,
                onPostUnlockError: () => this.props.popToast(Rn => r(ce, V(k({}, Rn), {
                    text: P("Teaser posts are not currently available for this content")
                })))
            }, Object.assign({
                title: Re,
                reauthenticationTitle: P("To read this, please re-authenticate.")
            }, p)));
        return r("article", {
            className: $(`typography ${i.type}-post post`, {
                "tw-p-0": i.type === "podcast",
                "shows-post": u
            }),
            ref: this.containerRef
        }, (s == null ? void 0 : s.is_contributor) && (i == null ? void 0 : i.id) && (i == null ? void 0 : i.type) === "page" && r(Ke, {
            variant: "themed-secondary",
            href: zh(o, i.id, i.editor_v2, {
                back: document.location.href
            }),
            localNavigation: !1,
            leftIcon: r(di, {
                size: 20
            })
        }, P("Edit")), r(Pot, {
            post: i,
            user: s,
            onChange: f
        }), r(xr, {
            ref: this.shareDialogRef,
            user: s,
            pub: o,
            post: i,
            reaction_token: d,
            source: "email-share"
        }), tt && r(Hp, {
            pub: o,
            post: i,
            referringUser: O,
            freeSignupEmail: c,
            forceFollowPrompt: R,
            surface: "post-follow-referrer-prompt"
        }), ut && r(_ot, {
            pub: o,
            post: i,
            stripe_publishable_key: x,
            sharer: O
        }), v ? r(it, null, !h && r(Ye, {
            onVisible: () => {
                this.onTopReached(p)
            }
        }), v({
            comments: T ? T() : null,
            postContent: r(it, null, gs, !!(p && !i.post_paywall_content_for_google && !l) && Yi)
        })) : r(it, null, r(Md, {
            visible: ct,
            style: {
                zIndex: 1
            }
        }), i.videoUpload && i.type === "video" && wt && r(wt, {
            mediaUpload: i.videoUpload,
            pub: o,
            post: i,
            autoPlay: Y,
            restorePlaybackLocation: !0,
            reaction_token: d,
            ref: this.videoPlayer,
            clippingMode: ct,
            onClippingModeCancel: () => F(!1)
        }), i.type === "podcast" ? r(it, null, r(Trt, {
            bylinesEnabled: o.bylines_enabled,
            commentCount: Tt,
            commentsEnabled: e,
            freeSignupEmail: c,
            isFreeSignup: a,
            isLikesEnabled: rt,
            isPaywall: p,
            post: i,
            pub: o,
            magicToken: d,
            renderEditButton: () => r(fo, {
                pub: o,
                post: i,
                iconHeight: 18,
                user: s,
                showUpdatedIcons: !0,
                dropdownClassName: "tw-ml-2",
                iconClassName: "tw-block tw-stroke-pub-primary-text"
            }),
            user: s,
            onChange: f,
            onClickCommentButton: e ? this.onCommentButtonClicked : void 0,
            onTopReached: this.onTopReached,
            playerRef: this.podcastPlayer,
            videoPlayerRef: this.videoPlayer,
            reaction_token: d,
            onFeedChange: Rn => this.setState({
                feedUrl: Rn
            })
        }), ft && r(Ort, {
            activeTab: j,
            loadedWithHeaderLink: q,
            commentCount: Tt,
            onClickTab: this.handleClickTab,
            transcription: st,
            hideComments: !e,
            showPlayers: !!i.videoUpload && !H,
            feedUrl: this.state.feedUrl,
            pub: o,
            post: i
        })) : r(it, null, r(qd, {
            user: s,
            pub: o,
            post: i,
            isOnPostPage: !0,
            freeSignup: a,
            freeSignupEmail: c,
            reaction_token: d,
            allowEdit: !0,
            showShare: !0,
            showSubtitle: !0,
            showPhoto: !0,
            showCommentRestack: !o.hide_post_restacks,
            hideTitle: g,
            noTitleLink: m,
            onChange: f,
            hideDate: i.type === "page",
            hideAudience: i.type === "page",
            showReactions: rt,
            showComments: _,
            showLabel: !0,
            showUpdatedIcons: !0,
            fromPostPage: y,
            onClickCommentButton: this.onCommentButtonClicked,
            reactors: et,
            showRestackModal: S,
            showTranscriptionButton: !!nt,
            onTranscriptionClick: this.onTranscriptionClick,
            setClippingMode: F
        }), !h && pt && r(Ye, {
            onVisible: () => this.onTopReached(p)
        }), (i.has_voiceover || !!i.voiceoverUpload) && r(qg, {
            pub: o,
            post: i,
            mediaUploadId: i.voiceover_upload_id,
            duration: (Xi = i.voiceoverUpload) == null ? void 0 : Xi.duration,
            autoPlay: L,
            href: i.canonical_url,
            isPaywalled: !i.voiceover_upload_id
        }), !i.voiceoverUpload && L && xe && r(yot, {
            postId: i.id,
            onClose: () => {
                W(G.LISTEN_TO_THIS_POST_MODAL_DISMISSED, {
                    post_id: i.id
                }), this.setState({
                    autoPlayVoiceOver: !1
                })
            }
        })), w ? r(Frt, {
            postType: i.type,
            crossPostInfo: w
        }) : null, (i.type !== "podcast" || j === "details" || !ft) && r("div", {
            className: $({
                "container container--podcast-post container--podcast-post-with-ufi": i.type === "podcast"
            })
        }, gs, p && !i.post_paywall_content_for_google ? r(it, null, Yi, r(gc, {
            post: i
        })) : B ? r("p", null, r(ie, {
            className: "expander",
            onClick: () => this.setState({
                truncated: null
            })
        }, "+ ", P("show full post"))) : !["page"].includes(i == null ? void 0 : i.type) && r(it, null, Vt && r(Not, {
            pub: o,
            post: i,
            user: s,
            freeSignup: a,
            freeSignupEmail: c
        }), !Vt && this.shouldShowRecommendCta && r(rot, {
            pub: o
        }), w && (i.audience === "only_paid" || i.audience === "only_founding") && r(xot, {
            pub: o
        }), Gn("like_posts_enabled") && o.community_enabled && an && r(gt, {
            borderTop: "detail-themed",
            paddingY: 16
        }, r(Rd, {
            post: i,
            pub: o,
            user: s,
            reactors: et,
            secondaryFaces: Z
        })), r("div", {
            className: "post-footer"
        }, r(sl, {
            post: i,
            pub: o,
            user: s,
            onChange: f,
            postReactionToken: d
        })), r(gc, {
            post: i
        })), i.show_guest_bios && i.type !== "podcast" && r(kot, {
            user: s,
            pub: o,
            post: i
        })), i.type === "podcast" && j === "comments" && e && r("div", {
            className: "container tw-py-12"
        }, r(yrt, {
            comments: E != null ? E : [],
            expectedCommentCount: Tt,
            post: i,
            pub: o,
            sort: U,
            token: d,
            user: s,
            inputRef: this.podcastCommentInput,
            onAddComment: this.handleAddPodcastComment,
            onUpdateSort: this.handleUpdateSortPodcastComments,
            onUpdateComment: this.handleUpdatePodcastComments
        })), i.type === "podcast" && j === "transcription" && r("div", {
            className: "container tw-py-12"
        }, r(hc, {
            post: i,
            pub: o,
            user: s,
            playerRef: this.podcastPlayer
        }))))
    }
}
at(Go, "contextType", Tf), at(Go, "displayName", "Post");
const xat = Jo(Cf(Wd(rs(km(Go))))),
    xot = ({
        pub: n
    }) => {
        const {
            iTemplate: t
        } = ot();
        return r("div", {
            className: "post-end-cta-full"
        }, r("h3", null, t `Subscribe to ${n.name} to continue reading`), r("p", {
            className: "end-cta-hero-text"
        }, " ", t `Head to the author’s Substack to subscribe and keep reading.`), r(ue, {
            priority: "primary-theme",
            onClick: () => {
                W(G.POST_END_CTA_CLICKED, {
                    type: "cross-post"
                }), Se(Vc(n, {
                    params: {
                        utm_source: bt.postEndCta
                    }
                }), {
                    local_navigation: !1
                })
            }
        }, t `Visit ${n.name}`))
    },
    Not = ({
        pub: n,
        post: t,
        user: e,
        freeSignup: s,
        freeSignupEmail: o,
        overridePledgesEnabled: i
    }) => {
        const {
            iString: a,
            iTemplate: c
        } = ot(), {
            getSettingFor: l
        } = Ko(), u = n.payments_state === "disabled" && !n.invite_only && (l("payment_pledges_enabled") || i), d = n.payments_state === "enabled" && (e != null && e.is_free_subscribed) && !(e != null && e.is_subscribed) ? "paid_upsell" : u && (e != null && e.is_free_subscribed) && !(e != null && e.is_pledged) ? "pledge_upsell" : "free_upsell";
        lt(() => {
            W(G.POST_END_CTA_RENDERED, {
                pub_id: n.id,
                post_id: t.id,
                type: d
            })
        }, [n.id, t.id, d]);
        const h = Hc(n);
        return r("div", {
            className: "post-end-cta-full"
        }, r(Ye, {
            onVisible: () => {
                W(G.POST_END_CTA_SEEN, {
                    pub_id: n.id,
                    post_id: t.id,
                    type: d
                })
            }
        }), r("h3", null, u && (e != null && e.is_free_subscribed) ? c `Support ${n.name}` : c `Subscribe to ${n.name}`), r("p", {
            className: "end-cta-author-subs"
        }, h ? c `By ${h}` : null, h && n.rankingDetail ? " · " : null, n.rankingDetail), n.hero_text && r("p", {
            className: "end-cta-hero-text"
        }, n.hero_text), u && (e != null && e.is_free_subscribed) && !(e != null && e.is_pledged) ? r(ue, {
            priority: "primary-theme",
            onClick: () => {
                W(G.POST_END_CTA_CLICKED, {
                    type: "pledge"
                }), Se(Vc(n, {
                    params: {
                        utm_source: bt.postEndCta
                    }
                }), {
                    local_navigation: !1
                })
            }
        }, a("Pledge your support")) : r(Hr, {
            pub: n,
            post: t,
            user: e,
            freeSignup: s,
            freeSignupEmail: o,
            isStatic: !1,
            source: "post-end-cta"
        }))
    },
    Nat = ({
        pub: n
    }) => r("div", {
        className: "post-silhouette"
    }, r("div", {
        className: "post-silhouette-title"
    }), r("div", {
        className: `post-silhouette-meta ${n&&n.bylines_enabled&&n.byline_images_enabled?"with-byline-image":""}`
    }), r("div", {
        className: "post-silhouette-body"
    })),
    qd = ({
        allowEdit: n,
        allowSendEmail: t,
        allowTruncate: e,
        base_url: s,
        children: o,
        className: i,
        hideAudience: a,
        hideDate: c,
        hideTitle: l,
        hidePinning: u,
        noTitleLink: d,
        isStatic: h,
        isFreePreview: p,
        is_draft: f,
        onChange: g,
        post: m,
        pub: _,
        reaction_token: y,
        showComments: b,
        showDatetime: S,
        showEmailSent: x,
        showReactions: w,
        showShare: P,
        showAppUpsell: A,
        showSubtitle: M,
        showPhoto: O,
        showLabel: T,
        showRestack: v,
        showCommentRestack: C,
        hideAuthor: N,
        user: R,
        utm_source: J,
        showUpdatedIcons: j,
        fromPostPage: q,
        onClickCommentButton: B,
        reactors: Y,
        inThreadHead: L,
        publishedPost: E,
        compEndsSoon: U,
        compEndedRecently: z,
        siteConfigValues: et = {},
        eligibleForTTS: Z,
        showRestackModal: tt,
        showIcon: ut,
        isOnPostPage: H,
        showTranscriptionButton: rt,
        onTranscriptionClick: ct,
        setClippingMode: F = void 0
    }) => {
        const pt = me({
                checkFirst4: !0
            }),
            wt = typeof e == "number" ? e : 45,
            nt = m.title && m.title.length > wt,
            st = f ? m.draft_title : m.title,
            ft = [(ut || m.type === "thread") && r(eot, {
                postType: m.type,
                isStatic: h,
                height: 15,
                className: m.type
            }), nt && e ? Xo(st, wt) : st],
            Tt = f ? m.draft_subtitle : m.subtitle;
        m.section_id && _.sections && _.sections.length && (m.section = _.sections.find(gs => gs.id === m.section_id));
        const Vt = !["page"].includes(m == null ? void 0 : m.type),
            xe = Vt && h && U && (et == null ? void 0 : et.continue_support_cta_in_newsletter_emails),
            an = Bd(m) || Z || m.voiceoverUpload,
            De = (m == null ? void 0 : m.type) === "adhoc_email",
            je = Vt && h && !De;
        let He;
        m.post_url_override ? He = m.post_url_override : h ? He = Dt.POST_TITLE_URL : He = `${Ft(_,m)}${J?`?utm_source=${J}`:""}`;
        const Re = `${_.base_url+(m.section?Wh(_,{section:m.section}):"")}/?utm_source=${bt.substack}&utm_medium=${Et.menu}`;
        return r("div", {
            className: $("post-header", i)
        }, T && m.section && r(gt, {
            className: "post-label"
        }, r(I.Meta, {
            as: "a",
            size: 14,
            href: Re
        }, m.section.name)), xe && r(Drt, {
            post: m,
            compAlreadyExpired: z
        }), !l && r("h1", {
            className: $("post-title", m.is_published ? "published" : m.type === "restack" ? "email-only-cross-post" : m.type === "adhoc_email" ? "adhoc" : "unpublished")
        }, d ? ft : r("a", {
            href: He
        }, ft)), M && Tt && r("h3", {
            className: "subtitle"
        }, Tt), H && !h ? r(X, {
            paddingBottom: 16
        }, r(X, {
            paddingY: 16
        }, r(Aot, {
            post: m,
            pub: _
        })), pt ? q && r(Zc, {
            post: m,
            pub: _,
            user: R,
            isStatic: h,
            postReactionToken: y,
            onChange: g,
            allowEdit: n,
            hidePinning: u,
            showEmailSent: x,
            allowSendEmail: t,
            hideComments: !b,
            onCommentsClick: B,
            showRestackModal: tt
        }) : r(sl, {
            post: m,
            pub: _,
            user: R,
            onChange: g,
            showRestackModal: tt,
            showTranscriptionButton: rt,
            onTranscriptionClick: ct,
            showClipping: m.type === "video",
            postReactionToken: y
        })) : r(it, null, Vt && !h && !E && !L ? r(Ld, {
            className: "meta-subheader",
            pub: _,
            post: m,
            user: R,
            showDate: !c,
            showDatetime: S,
            isStatic: h,
            postReactionToken: y,
            onChange: g,
            allowEdit: n,
            hidePinning: u,
            showEmailSent: x,
            allowSendEmail: t,
            allowMobileFooter: q,
            reactors: Y,
            onCommentsClick: B,
            showRestackModal: tt,
            setClippingMode: F
        }) : Vt && !h && E ? r(po, {
            post: m,
            pub: _,
            user: R,
            style: "compressed",
            labelStyle: "counts-or-none",
            postReactionToken: y,
            showEmailSent: x,
            hideShare: !P || m.type === "restack",
            hideComments: m.type === "restack",
            hideSavePost: m.type === "restack",
            hideReactions: m.type === "restack",
            showPreamble: !0,
            allowEdit: n,
            allowSendEmail: t,
            editButtonIsLast: !0,
            preambleConfig: {
                showAudience: !a,
                showDate: !c,
                showDatetime: S,
                showAuthor: !N
            },
            position: "publisher-post-list"
        }) : L && !h ? r(po, {
            post: m,
            pub: _,
            user: R,
            style: "compressed",
            labelStyle: "counts-or-none",
            postReactionToken: y,
            hideSavePost: !0,
            showPreamble: !0,
            allowEdit: n,
            allowSendEmail: t,
            editButtonIsLast: !0,
            onChange: g,
            preambleConfig: {
                showAudience: !a,
                showDate: !c,
                showDatetime: S,
                showAuthor: !N
            },
            hideShare: !P,
            position: "publisher-post-list"
        }) : Vt ? r(Yrt, {
            user: R,
            pub: _,
            post: m,
            showDate: !c,
            showDatetime: S,
            showEmailSent: x,
            showAudience: !a,
            showReactions: !je && w,
            showComments: !je && b,
            showShare: !je && P,
            showRestack: !je && v,
            reaction_token: y,
            onChange: g,
            isStatic: h,
            isFreePreview: p,
            sharedShareDialog: !0,
            base_url: s,
            allowSendEmail: t,
            allowEdit: n,
            showAuthor: !N,
            showPhoto: O,
            hidePinning: u,
            showUpdatedIcons: j,
            inThreadHead: L,
            fromPostPage: q,
            onClickCommentButton: B,
            reactors: Y
        }) : r("div", {
            className: "spacer",
            style: {
                height: 24
            }
        }), Vt && je && r(Xc, {
            customization: {
                showShare: P,
                showComments: b,
                showReactions: w,
                showListen: !v && !p && an,
                showSave: !v,
                showRestack: v,
                showCommentRestack: C,
                showAppUpsell: A
            }
        }), De && r("div", {
            className: "email-ufi-2-empty"
        })), o)
    },
    kot = ({
        user: n,
        pub: t,
        post: e
    }) => {
        const {
            iString: s,
            iTemplate: o
        } = ot(), i = Pe(e).filter(a => a.is_guest);
        return i.length === 0 ? null : r("div", {
            className: "post-contributor-footer"
        }, r("div", {
            className: "container-border"
        }), i.map(a => {
            const c = $c(a.name);
            let l = a.primaryPublicationSubscribeUrl;
            l && (n != null && n.email) && (l = Ce(l, {
                email: n.email,
                autoSubmit: !0,
                utm_source: bt.substack,
                utm_campaign: oe.guestPostBio,
                utm_medium: Et.web
            }));
            const u = Ce(Qo(a), {
                    utm_campaign: oe.guestPostBio,
                    utm_medium: Et.web
                }),
                d = mo.hasCustomProfilePhoto(a);
            return r("div", {
                className: $("post-contributor-bio", {
                    "post-contributor-bio-no-text": !a.bio
                }),
                "data-user-id": a.id
            }, r("table", {
                cellpadding: "0",
                cellspacing: "0",
                className: "post-contributor-bio-table"
            }, r("tr", {
                className: "post-contributor-bio-table-row"
            }, d && r("td", {
                className: "post-contributor-bio-userhead-cell post-contributor-bio-userhead-cell-web"
            }, r(vn, {
                subject: a,
                utmSource: "byline"
            }, r(mo, {
                size: 52,
                user: n,
                pub: t,
                subject: a
            }))), r("td", {
                className: "post-contributor-bio-body-cell post-contributor-bio-body-cell-web"
            }, r("div", {
                className: "post-contributor-bio-body"
            }, a.bio && r("div", {
                className: "post-contributor-bio-preamble"
            }, s("A guest post by")), r("table", {
                cellpadding: "0",
                cellspacing: "0",
                className: "post-contributor-bio-body-table"
            }, r("tr", {
                className: "post-contributor-bio-body-table-row"
            }, r("td", {
                className: "post-contributor-bio-copy-cell"
            }, !a.bio && r("div", {
                className: "post-contributor-bio-preamble"
            }, s("A guest post by")), r(ht, {
                gap: 4,
                alignItems: "center",
                paddingBottom: 4
            }, r(vn, {
                subject: a,
                utmSource: "byline"
            }, r("a", {
                className: "post-contributor-bio-title no-margin",
                href: u,
                native: !0
            }, a.name)), r(Cr, {
                size: "sm",
                tier: a.bestseller_tier,
                userId: a.id
            })), a.bio && r("div", {
                className: "post-contributor-bio-text"
            }, a.bio)), r("td", {
                className: "post-contributor-bio-controls-cell post-contributor-bio-controls-cell-web"
            }, r("div", {
                className: "post-contributor-bio-controls"
            }, l && r("a", {
                className: "post-contributor-bio-subscribe-button button primary",
                href: l,
                native: !0
            }, r("span", {
                className: "post-contributor-bio-subscribe-button-label"
            }, o `Subscribe to ${c}`)))))))))))
        }))
    };
class kat extends he {
    render({
        renderPost: t,
        posts: e,
        hideFirstHeading: s,
        className: o,
        top: i,
        children: a
    }) {
        return e = e.slice(0).sort((c, l) => _t(l.post_date) - _t(c.post_date)), r("div", {
            className: `calendared-post-list ${o||""}`
        }, i, Gh(this.renderByHeading(e, "year", (c, l) => [!l.isSameNow("year") && r("h2", {
            date: l
        }, l.year()), this.renderByHeading(c, "month", (u, d) => [!(d.isSameNow("year") && d.isSameNow("month")) && r("h3", {
            date: l
        }, Jh(d), " ", !d.isSameNow("year") && d.year()), u.map(h => t(h, e.indexOf(h), e))])]), 1 / 0).filter(c => c).filter((c, l, u) => !s || l >= u.findIndex(d => !d.props || !d.props.date)), a)
    }
    renderByHeading(t, e, s) {
        return Array.from(Yh(t, o => _t(o.post_date)[e]())).sort((o, i) => i[0] - o[0]).map(([, o]) => s(o, _t(o[0].post_date)))
    }
}

function Eot(n, t = 1e4, e = t) {
    if (typeof window == "undefined") return null;
    const s = document.createElement("div");
    if (s.innerHTML = n, s.textContent.length < t || s.childNodes.length <= 1) return null;
    do s.removeChild(s.lastChild); while (s.childNodes.length > 1 && s.textContent.length > e);
    return s.innerHTML
}

function Tot(n, t = 500) {
    if (typeof window == "undefined") return !1;
    const e = document.createElement("div");
    e.innerHTML = n;
    let s = "",
        o = !1;
    for (let i = e.childNodes.length - 1; i >= 0; i--) {
        const a = e.childNodes[i];
        if (Nt(a, "button-wrapper") || Nt(a, "subscription-widget-wrap")) {
            o = !0;
            break
        }
        if (s += a.textContent, s.length > t) break
    }
    return !o
}

function Pot({
    post: n,
    user: t,
    onChange: e
}) {
    const {
        onSave: s
    } = nl({
        post: n,
        isSaved: !1
    });
    return lt(() => {
        if (new URL(location).searchParams.get("action") === "save" && (history.replaceState({}, "", Ce({
                action: null
            })), t)) {
            const i = s();
            e({
                post: V(k({}, n), {
                    is_saved: i
                })
            })
        }
    }, []), null
}

function Bd(n) {
    var t;
    return (t = n.audio_items) == null ? void 0 : t.some(e => e.type === "tts")
}

function Aot({
    variant: n = "",
    post: t,
    pub: e,
    relativeLinks: s = !1
}) {
    const {
        publishedBylines: o = []
    } = t, i = e.bylines_enabled && yr(e, t) && (t.type !== "podcast" || n === "shows"), a = i && e.byline_images_enabled && o.some(({
        photo_url: d
    }) => !!d), c = t.type !== "page", {
        iContext: l,
        language: u
    } = ot();
    return r(gt, {
        className: $("byline-wrapper", {
            [bc["byline-wrapper--swap-on-mobile"]]: n === "shows"
        }),
        gap: 12,
        alignItems: "center"
    }, a && r(gt, {
        className: $({
            [bc["byline-faces--swap-on-mobile"]]: n === "shows"
        })
    }, r(Sr, {
        faces: o,
        hoverProfiles: !0,
        maximum: 4,
        showBlanks: !0,
        relativeLinks: s
    })), r(X, null, i && r(I.Meta, {
        color: "pub-primary-text"
    }, r(ai, {
        array: o,
        formatter: d => r(vn, {
            subject: d,
            utmSource: "byline"
        }, r(I, {
            as: "a",
            href: Qo(d),
            decoration: "hover-underline"
        }, d.name)),
        limit: 4
    })), r(gt, {
        gap: 4
    }, r(I.Meta, {
        color: "pub-secondary-text"
    }, _t(t.post_date).locale(u).utc().format("MMM DD, YYYY")), c && wr(t.audience) && r(I.Meta, {
        color: "pub-secondary-text"
    }, "∙ ", l("postAudience", "Paid")))))
}
export {
    xrt as $, Mg as A, Ket as B, Pm as C, dr as D, brt as E, kd as F, Am as G, ret as H, ms as I, qet as J, Ml as K, dc as L, Zit as M, Hr as N, Nat as O, ur as P, jrt as Q, sot as R, dn as S, yat as T, Mm as U, vot as V, vat as W, _rt as X, wat as Y, prt as Z, Aot as _, Wrt as a, Md as a0, Rd as a1, Ftt as a2, yl as a3, Ug as a4, og as a5, jm as a6, eg as a7, Dm as a8, ec as a9, xb as aa, zt as ab, Qit as ac, Sg as ad, bet as ae, Tb as af, Fb as ag, qg as ah, Sot as ai, Tot as aj, Cot as ak, _d as al, Sat as am, Not as an, rot as ao, Cat as ap, Dg as b, mi as c, Rg as d, Vs as e, Im as f, _at as g, bat as h, Tm as i, xat as j, yst as k, $g as l, gi as m, Irt as n, Om as o, sc as p, Zrt as q, Cg as r, io as s, md as t, Vr as u, qd as v, gat as w, eot as x, kat as y, fd as z
};
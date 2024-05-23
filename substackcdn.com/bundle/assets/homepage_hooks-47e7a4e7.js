var Uo = Object.defineProperty,
    $o = Object.defineProperties;
var Fo = Object.getOwnPropertyDescriptors;
var vt = Object.getOwnPropertySymbols;
var Qn = Object.prototype.hasOwnProperty,
    es = Object.prototype.propertyIsEnumerable;
var Qt = (e, t, s) => t in e ? Uo(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s,
    g = (e, t) => {
        for (var s in t || (t = {})) Qn.call(t, s) && Qt(e, s, t[s]);
        if (vt)
            for (var s of vt(t)) es.call(t, s) && Qt(e, s, t[s]);
        return e
    },
    w = (e, t) => $o(e, Fo(t));
var De = (e, t) => {
    var s = {};
    for (var o in e) Qn.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
    if (e != null && vt)
        for (var o of vt(e)) t.indexOf(o) < 0 && es.call(e, o) && (s[o] = e[o]);
    return s
};
var Re = (e, t, s) => (Qt(e, typeof t != "symbol" ? t + "" : t, s), s);
var U = (e, t, s) => new Promise((o, i) => {
    var a = l => {
            try {
                c(s.next(l))
            } catch (d) {
                i(d)
            }
        },
        r = l => {
            try {
                c(s.throw(l))
            } catch (d) {
                i(d)
            }
        },
        c = l => l.done ? o(l.value) : Promise.resolve(l.value).then(a, r);
    c((s = s.apply(e, t)).next())
});
import {
    y as n,
    by as Ps,
    t as $,
    a7 as yt,
    aj as et,
    E as I,
    h as b,
    p as A,
    q as st,
    s as Me,
    ao as rt,
    aD as Ee,
    d$ as Ho,
    bH as Is,
    b8 as Vt,
    h4 as ts,
    h5 as Vo,
    o as ee,
    x as fe,
    gr as Ln,
    c5 as Tn,
    b3 as we,
    bI as Wo,
    bL as Wt,
    r as Nt,
    gG as jo,
    bJ as xs,
    cy as Ye,
    cZ as Ve,
    i as me,
    h6 as Ko,
    a$ as Ge,
    u as at,
    k as Mn,
    aV as Pn,
    h7 as Ct,
    eq as qo,
    h8 as ns,
    h9 as zo,
    ha as ss,
    hb as Yo,
    ea as Xo,
    c8 as un,
    ap as pn,
    f5 as Zo,
    hc as Go,
    H as jt,
    hd as Jo,
    he as Qo,
    hf as ei,
    cN as ti,
    aI as os,
    f2 as Ns,
    bO as mn,
    bq as ve,
    br as Ds,
    D as ni,
    P as hn,
    b2 as si,
    U as He,
    dS as oi,
    e_ as ii,
    X as In,
    aL as Kt,
    bf as is,
    fr as ai,
    fu as ri,
    a3 as lt,
    fo as as,
    ft as li,
    gy as ci,
    aH as Os,
    hg as di,
    fW as Rs,
    aa as As,
    w as ui,
    J as pi,
    b_ as en,
    bA as mi,
    hh as rs,
    cO as hi,
    bo as fi,
    aU as gi,
    bD as gt,
    al as _i,
    aF as yi,
    hi as bi,
    cP as wi,
    hj as ki,
    gQ as fn,
    hk as Dt,
    fd as vi,
    dO as Ci,
    hl as Si,
    fl as Ei
} from "./tracking-376cff7a.js";
import {
    c as K,
    v as Ke,
    U as xn,
    S as ye,
    u as de,
    a as R,
    O as Le,
    T as F,
    F as x,
    b as _e,
    h as Ie,
    M as Li,
    i as gn,
    f as Je,
    j as Bs,
    B as Us,
    t as Ti,
    w as Mi,
    n as Pi
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    i as Ii,
    A as Ot
} from "./_defineProperty-105d261c.js";
import {
    a as xi
} from "./debounce-f31b8252.js";
import {
    i as Ni
} from "./isObject-a54dc090.js";
import {
    r as Q,
    C as $s,
    P as Di,
    L as Oi,
    a as Nn
} from "./_baseEach-63ad03e0.js";
import {
    D as Fs
} from "./Divider-0a4efe7e.js";
import {
    a as dt,
    M as xe,
    b as qt
} from "./Modal-ab851ad1.js";
import {
    S as ut
} from "./Progress-629d3819.js";
import {
    f as ge,
    t as Ae,
    i as Mt,
    a as Ri,
    b as Ai,
    c as ls
} from "./publication-1bbad178.js";
import {
    s as Hs,
    h as Dn,
    t as cs,
    L as Bi,
    x as Ui,
    l as Vs,
    u as $i,
    j as Fi,
    k as Hi,
    n as Vi,
    m as Wi,
    o as ji,
    F as Ki,
    S as On,
    D as qi,
    i as mt
} from "./share_dialog-b74d3337.js";
import {
    f as zi,
    a as Yi,
    c as Xi,
    b as Zi
} from "./profile-a781fd85.js";
import {
    c as ue,
    X as _n
} from "./x-fc38e969.js";
import {
    g as Ws,
    b as Rn,
    F as Gi,
    u as js,
    s as Ji
} from "./free_email_form-1d3fc4be.js";
import {
    T as yn
} from "./TextInput-c03c69d6.js";
import {
    M as zt,
    a as ie,
    b as Rt
} from "./Menu-5342012d.js";
import {
    u as Oe,
    T as Se,
    C as Qi,
    e as ds,
    f as us,
    g as ea
} from "./HoverCard-cbdee1d2.js";
import {
    e as ta,
    a as We,
    R as na,
    _ as nt,
    B as sa,
    L as An,
    c as oa,
    u as Qe,
    g as ia,
    r as ps
} from "./user-e16f1619.js";
import {
    b as aa,
    ap as ra,
    aq as la,
    ar as ca,
    a7 as At,
    as as Ks,
    at as da,
    h as qs,
    g as Bn,
    d as ua
} from "./ProfileHoverCard-c8bfb61a.js";
import {
    L as Bt
} from "./link-90872791.js";
import {
    D as ct
} from "./download-8a01f574.js";
import {
    M as pa,
    P as ma,
    u as ha,
    c as fa
} from "./Portal-f12cb990.js";
import {
    c as wt,
    u as ga,
    r as ms
} from "./useResponsive-08e338a7.js";
import {
    C as _a,
    D as ya,
    a as ba
} from "./_baseIteratee-fbbabc87.js";
import {
    S as wa
} from "./SubstackLogoIcon-3ca41075.js";
import {
    C as ka,
    B as va
} from "./routeClick-cd1b3f9b.js";
import {
    C as Ca
} from "./CloseIcon-90eee5fe.js";
import {
    c as Yt,
    t as Sa,
    E as Ea
} from "./traverse-bb97748e.js";
import {
    u as La
} from "./free_email_form.module-135823b4.js";
import {
    P as Ta
} from "./plus-3216546d.js";
import {
    L as Ma
} from "./LockThinIcon-fd5808c3.js";
import {
    S as Pa,
    s as Ia
} from "./entry-a965ffeb.js";
import {
    M as xa
} from "./modal-5dbf091c.js";
import {
    d as Na,
    C as tn
} from "./textarea-b8862a3a.js";
import {
    a as hs
} from "./Select-f97196dc.js";
import {
    T as Ut
} from "./Tooltip-86d56346.js";
import {
    C as Da
} from "./chevron-right-925bdc12.js";
import {
    q as Oa
} from "./transition-c6a4911b.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a32bc59c-2f40-4fd6-8f70-a8d5d1388550", e._sentryDebugIdIdentifier = "sentry-dbid-a32bc59c-2f40-4fd6-8f70-a8d5d1388550")
    } catch (s) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ra = ue("ArrowLeftRight", [
    ["path", {
        d: "M8 3 4 7l4 4",
        key: "9rb6wj"
    }],
    ["path", {
        d: "M4 7h16",
        key: "6tx8e3"
    }],
    ["path", {
        d: "m16 21 4-4-4-4",
        key: "siv7j2"
    }],
    ["path", {
        d: "M20 17H4",
        key: "h6l3hr"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Aa = ue("ArrowUpRight", [
    ["path", {
        d: "M7 7h10v10",
        key: "1tivn9"
    }],
    ["path", {
        d: "M7 17 17 7",
        key: "1vkiza"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ba = ue("BarChart2", [
    ["line", {
        x1: "18",
        x2: "18",
        y1: "20",
        y2: "10",
        key: "1xfpm4"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "20",
        y2: "4",
        key: "be30l9"
    }],
    ["line", {
        x1: "6",
        x2: "6",
        y1: "20",
        y2: "14",
        key: "1r4le6"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ua = ue("BookmarkMinus", [
    ["path", {
        d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
        key: "1fy3hk"
    }],
    ["line", {
        x1: "15",
        x2: "9",
        y1: "10",
        y2: "10",
        key: "1gty7f"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Un = ue("Bookmark", [
    ["path", {
        d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
        key: "1fy3hk"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $a = ue("Captions", [
    ["rect", {
        width: "18",
        height: "14",
        x: "3",
        y: "5",
        rx: "2",
        ry: "2",
        key: "12ruh7"
    }],
    ["path", {
        d: "M7 15h4M15 15h2M7 11h2M13 11h4",
        key: "1ueiar"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fa = ue("Code", [
    ["polyline", {
        points: "16 18 22 12 16 6",
        key: "z7tu5w"
    }],
    ["polyline", {
        points: "8 6 2 12 8 18",
        key: "1eg1df"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ha = ue("Copy", [
    ["rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea"
    }],
    ["path", {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Va = ue("ExternalLink", [
    ["path", {
        d: "M15 3h6v6",
        key: "1q9fwt"
    }],
    ["path", {
        d: "M10 14 21 3",
        key: "gplh6r"
    }],
    ["path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wa = ue("Eye", [
    ["path", {
        d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
        key: "rwhkz3"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ja = ue("FileVolume", [
    ["path", {
        d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",
        key: "1vg67v"
    }],
    ["path", {
        d: "M14 2v4a2 2 0 0 0 2 2h4",
        key: "tnqrlb"
    }],
    ["path", {
        d: "m7 10-3 2H2v4h2l3 2Z",
        key: "fiq8l4"
    }],
    ["path", {
        d: "M11 11a5 5 0 0 1 0 6",
        key: "193qb2"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $t = ue("Heart", [
    ["path", {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = ue("Lock", [
    ["rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1"
    }],
    ["path", {
        d: "M7 11V7a5 5 0 0 1 10 0v4",
        key: "fwvmzm"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ka = ue("Mail", [
    ["rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2",
        key: "18n3k1"
    }],
    ["path", {
        d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
        key: "1ocrg3"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qa = ue("Milestone", [
    ["path", {
        d: "M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z",
        key: "1mp5s7"
    }],
    ["path", {
        d: "M12 13v8",
        key: "1l5pq0"
    }],
    ["path", {
        d: "M12 3v3",
        key: "1n5kay"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const za = ue("PenLine", [
    ["path", {
        d: "M12 20h9",
        key: "t2du7b"
    }],
    ["path", {
        d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",
        key: "ymcmye"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = ue("PinOff", [
    ["line", {
        x1: "2",
        x2: "22",
        y1: "2",
        y2: "22",
        key: "a6p6uj"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "17",
        y2: "22",
        key: "1jrz49"
    }],
    ["path", {
        d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12",
        key: "13x2n8"
    }],
    ["path", {
        d: "M15 9.34V6h1a2 2 0 0 0 0-4H7.89",
        key: "reo3ki"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = ue("Pin", [
    ["line", {
        x1: "12",
        x2: "12",
        y1: "17",
        y2: "22",
        key: "1jrz49"
    }],
    ["path", {
        d: "M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",
        key: "13yl11"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ya = ue("PlayCircle", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["polygon", {
        points: "10 8 16 12 10 16 10 8",
        key: "1cimsy"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xa = ue("RefreshCw", [
    ["path", {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc"
    }],
    ["path", {
        d: "M21 3v5h-5",
        key: "1q7to0"
    }],
    ["path", {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3"
    }],
    ["path", {
        d: "M8 16H3v5",
        key: "1cv678"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Za = ue("Repeat", [
    ["path", {
        d: "m17 2 4 4-4 4",
        key: "nntrym"
    }],
    ["path", {
        d: "M3 11v-1a4 4 0 0 1 4-4h14",
        key: "84bu3i"
    }],
    ["path", {
        d: "m7 22-4-4 4-4",
        key: "1wqhfi"
    }],
    ["path", {
        d: "M21 13v1a4 4 0 0 1-4 4H3",
        key: "1rx37r"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ga = ue("Scissors", [
    ["circle", {
        cx: "6",
        cy: "6",
        r: "3",
        key: "1lh9wr"
    }],
    ["path", {
        d: "M8.12 8.12 12 12",
        key: "1alkpv"
    }],
    ["path", {
        d: "M20 4 8.12 15.88",
        key: "xgtan2"
    }],
    ["circle", {
        cx: "6",
        cy: "18",
        r: "3",
        key: "fqmcym"
    }],
    ["path", {
        d: "M14.8 14.8 20 20",
        key: "ptml3r"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = ue("Send", [
    ["path", {
        d: "m22 2-7 20-4-9-9-4Z",
        key: "1q3vgg"
    }],
    ["path", {
        d: "M22 2 11 13",
        key: "nzbqef"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $n = ue("Share", [
    ["path", {
        d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
        key: "1b2hhj"
    }],
    ["polyline", {
        points: "16 6 12 2 8 6",
        key: "m901s6"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "2",
        y2: "15",
        key: "1p0rca"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ja = ue("Shuffle", [
    ["path", {
        d: "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",
        key: "1wmou1"
    }],
    ["path", {
        d: "m18 2 4 4-4 4",
        key: "pucp1d"
    }],
    ["path", {
        d: "M2 6h1.9c1.5 0 2.9.9 3.6 2.2",
        key: "10bdb2"
    }],
    ["path", {
        d: "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",
        key: "vgxac0"
    }],
    ["path", {
        d: "m18 14 4 4-4 4",
        key: "10pe0f"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qa = ue("Sparkle", [
    ["path", {
        d: "m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z",
        key: "nraa5p"
    }]
]);
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bn = ue("XCircle", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "m15 9-6 6",
        key: "1uzhvr"
    }],
    ["path", {
        d: "m9 9 6 6",
        key: "z0biqf"
    }]
]);

function wn(s) {
    var o = s,
        {
            className: e
        } = o,
        t = De(o, ["className"]);
    return n(xn, g({
        resetCss: !0,
        className: K(e, Ke.textButton)
    }, t))
}
const kn = e => n(ye, w(g({}, e), {
        name: "LucideComments",
        svgParams: {
            height: 24,
            width: 24,
            fill: "#000000",
            strokeWidth: 0
        }
    }), n(pa, {
        height: 24,
        stroke: e.stroke,
        fill: e.fill,
        strokeWidth: e.strokeWidth
    })),
    tt = e => n(ye, w(g({}, e), {
        name: "LucideHeart",
        svgParams: {
            height: 24,
            width: 24,
            fill: "#000000",
            strokeWidth: 0
        }
    }), n($t, {
        height: 24,
        stroke: e.stroke,
        fill: e.fill,
        strokeWidth: e.strokeWidth
    }));

function er(e, t) {
    for (var s, o = -1, i = e.length; ++o < i;) {
        var a = t(e[o]);
        a !== void 0 && (s = s === void 0 ? a : s + a)
    }
    return s
}
var tr = er,
    nr = tr,
    sr = Ii;

function or(e) {
    return e && e.length ? nr(e, sr) : 0
}
var ir = or;
const Xt = Ps(ir);
var ar = xi,
    rr = Ni,
    lr = "Expected a function";

function cr(e, t, s) {
    var o = !0,
        i = !0;
    if (typeof e != "function") throw new TypeError(lr);
    return rr(s) && (o = "leading" in s ? !!s.leading : o, i = "trailing" in s ? !!s.trailing : i), ar(e, t, {
        leading: o,
        maxWait: t,
        trailing: i
    })
}
var dr = cr;
const Xs = Ps(dr),
    Zs = e => U(void 0, null, function*() {
        const t = `/api/v1/video/upload/${e.id}/src.json?type=original`,
            {
                body: {
                    src: s
                }
            } = yield Q.get(t), i = yield(yield fetch(s)).blob(), a = window.URL.createObjectURL(i), r = document.createElement("a");
        r.href = a, r.download = `${e.name}`, r.target = "_blank", r.rel = "noopener noreferrer", r.style.display = "none", document.body.appendChild(r), r.click(), document.body.removeChild(r), $(I.VIDEO_CLIP_DOWNLOAD_BUTTON_CLICKED, {
            name: "download",
            post_id: e.post_id,
            utm_campaign: yt.substackClips,
            utm_medium: et.web
        })
    }),
    ur = ({
        mediaUploadId: e
    }) => {
        const [t, s] = b(null), [o, i] = b(!0), [a, r] = b(null), c = () => U(void 0, null, function*() {
            try {
                const l = yield st(`/api/v1/video/upload/${e}`);
                s(w(g({}, l), {
                    updated_at: new Date
                })), i(!1)
            } catch (l) {
                console.error("Failed to load media upload:", l), r(Me(l)), i(!1)
            }
        });
        return A(() => {
            e ? c() : (s(null), i(!1))
        }, [e, a]), {
            mediaUpload: t,
            loading: o,
            error: a,
            refetch: c
        }
    };

function pr(e, t) {
    A(() => {
        function s(i) {
            const a = i.target;
            e.current && !e.current.contains(a) && t()
        }

        function o(i) {
            (i.key === "Escape" || i.keyCode === 27) && t()
        }
        return document.addEventListener("mousedown", s), document.addEventListener("keydown", o), () => {
            document.removeEventListener("mousedown", s), document.removeEventListener("keydown", o)
        }
    }, [e, t])
}
const mr = "clip_web_nux_seen_at",
    hr = e => n(ye, w(g({}, e), {
        name: "FacebookIconCircle",
        svgParams: {
            height: 24,
            width: 24
        }
    }), n("circle", {
        cx: "12",
        cy: "12",
        r: "11.75",
        fill: "white",
        stroke: "none"
    }), n("path", {
        d: "M12 0C5.37098 0 0 5.37089 0 11.9975C0 17.9844 4.38331 22.9414 10.1117 23.8491L10.1164 15.473H7.04998V12.0021H10.1164C10.1164 12.0021 10.1023 10.0269 10.1164 9.14743C10.1305 8.26797 10.3045 7.42142 10.7607 6.65008C11.4615 5.4555 12.5526 4.87237 13.893 4.70775C14.9935 4.57135 16.08 4.72183 17.1664 4.87237C17.2416 4.88176 17.2792 4.89115 17.3545 4.90529C17.3545 4.90529 17.3592 5.03225 17.3545 5.11222C17.3498 5.94933 17.3545 7.86819 17.3545 7.86819C16.8324 7.8588 15.9671 7.80706 15.3933 7.89641C14.4433 8.04221 13.8977 8.64891 13.8789 9.6036C13.8601 10.3467 13.8695 12.0021 13.8695 12.0021H17.2134L16.6726 15.473H13.8742V23.8491C19.612 22.9508 24 17.9844 24 11.9975C23.9953 5.37089 18.6243 0 11.9977 0Z",
        fill: "#1877f2",
        stroke: "none"
    })),
    fr = e => n(ye, w(g({}, e), {
        name: "ShareInstagramIcon",
        svgParams: {
            height: 1e3,
            width: 1e3
        }
    }), n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "xmlns:sodipodi": "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
        "xmlns:inkscape": "http://www.inkscape.org/namespaces/inkscape",
        width: "1000",
        height: "1000",
        viewBox: "0 0 264.5833 264.5833",
        "inkscape:version": "1.0.1 (3bc2e813f5, 2020-09-07)",
        "sodipodi:docname": "Instagram_(2022).svg"
    }, n("defs", null, n("radialGradient", {
        id: "f",
        cx: "158.429",
        cy: "578.088",
        r: "52.3515",
        "xlink:href": "#a",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "matrix(0 -4.03418 4.28018 0 -2332.2273 942.2356)",
        fx: "158.429",
        fy: "578.088"
    }), n("radialGradient", {
        "inkscape:collect": "always",
        "xlink:href": "#b",
        id: "g",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "matrix(.67441 -1.16203 1.51283 .87801 -814.3657 -47.8354)",
        cx: "172.6149",
        cy: "600.6924",
        fx: "172.6149",
        fy: "600.6924",
        r: "65"
    }), n("radialGradient", {
        "inkscape:collect": "always",
        "xlink:href": "#c",
        id: "h",
        cx: "144.012",
        cy: "51.3367",
        fx: "144.012",
        fy: "51.3367",
        r: "67.081",
        gradientTransform: "matrix(-2.3989 .67549 -.23008 -.81732 464.9957 -26.4035)",
        gradientUnits: "userSpaceOnUse"
    }), n("radialGradient", {
        "inkscape:collect": "always",
        "xlink:href": "#d",
        id: "e",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "matrix(-3.10797 .87652 -.6315 -2.23914 1345.6503 1374.1983)",
        cx: "199.7884",
        cy: "628.4379",
        fx: "199.7884",
        fy: "628.4379",
        r: "52.3515"
    }), n("linearGradient", {
        "inkscape:collect": "always",
        id: "d"
    }, n("stop", {
        offset: "0",
        "stop-color": "#ff005f"
    }), n("stop", {
        offset: "1",
        "stop-color": "#fc01d8"
    })), n("linearGradient", {
        id: "c"
    }, n("stop", {
        offset: "0",
        "stop-color": "#780cff"
    }), n("stop", {
        "stop-color": "#820bff",
        offset: "1",
        "stop-opacity": "0"
    })), n("linearGradient", {
        "inkscape:collect": "always",
        id: "b"
    }, n("stop", {
        offset: "0",
        "stop-color": "#fc0"
    }), n("stop", {
        offset: "1",
        "stop-color": "#fc0",
        "stop-opacity": "0"
    })), n("linearGradient", {
        id: "a"
    }, n("stop", {
        offset: "0",
        "stop-color": "#fc0"
    }), n("stop", {
        offset: ".1242",
        "stop-color": "#fc0"
    }), n("stop", {
        offset: ".5672",
        "stop-color": "#fe4a05"
    }), n("stop", {
        offset: ".6942",
        "stop-color": "#ff0f3f"
    }), n("stop", {
        offset: "1",
        "stop-color": "#fe0657",
        "stop-opacity": "0"
    })), n("clipPath", {
        id: "clipCircle"
    }, n("circle", {
        cx: "132",
        cy: "132",
        r: "132",
        fill: "#FFFFFF",
        stroke: "#000000"
    }))), n("g", null), n("g", {
        "inkscape:groupmode": "layer",
        "clip-path": "url(#clipCircle)"
    }, n("path", {
        d: "     M204.1503 18.1429c-55.2305 0-71.3834.057-74.5232.3175-11.3342.9424-18.387 2.7275-26.0708 6.554-5.9214 2.9413-10.5915 6.3506-15.2005 11.1298-8.3938 8.7157-13.481 19.4383-15.3226 32.1842-.8953 6.1877-1.1558 7.4496-1.2087 39.0558-.0203 10.5354 0 24.4007 0 42.9984 0 55.2008.061 71.3418.3256 74.4764.9157 11.032 2.6453 17.9728 6.3081 25.565 7 14.5329 20.369 25.4428 36.119 29.5137 5.4535 1.4044 11.4767 2.1779 19.2092 2.5442 3.2762.1425 36.6684.2443 70.081.2443 33.4127 0 66.8253-.0407 70.02-.2035 8.9535-.4214 14.1526-1.1195 19.9011-2.6054 15.8517-4.0912 28.9767-14.8383 36.119-29.5748 3.5916-7.409 5.4128-14.6144 6.237-25.0704.179-2.2796.2543-38.6263.2543-74.924 0-36.304-.0814-72.5835-.2605-74.8632-.8343-10.6249-2.6555-17.7692-6.363-25.3207-3.0421-6.1816-6.42-10.798-11.324-15.518-8.752-8.3616-19.4555-13.4502-32.2101-15.2902-6.18-.8936-7.411-1.1582-39.033-1.2131z",
        "inkscape:connector-curvature": " 0",
        fill: " url(#e)",
        transform: " translate(-71.8155 -18.1429)"
    }), n("path", {
        d: " M204.1503 18.1429c-55.2305 0-71.3834.057-74.5232.3175-11.3342.9424-18.387 2.7275-26.0708 6.554-5.9214 2.9413-10.5915 6.3506-15.2005 11.1298-8.3938 8.7157-13.481 19.4383-15.3226 32.1842-.8953 6.1877-1.1558 7.4496-1.2087 39.0558-.0203 10.5354 0 24.4007 0 42.9984 0 55.2008.061 71.3418.3256 74.4764.9157 11.032 2.6453 17.9728 6.3081 25.565 7 14.5329 20.369 25.4428 36.119 29.5137 5.4535 1.4044 11.4767 2.1779 19.2092 2.5442 3.2762.1425 36.6684.2443 70.081.2443 33.4127 0 66.8253-.0407 70.02-.2035 8.9535-.4214 14.1526-1.1195 19.9011-2.6054 15.8517-4.0912 28.9767-14.8383 36.119-29.5748 3.5916-7.409 5.4128-14.6144 6.237-25.0704.179-2.2796.2543-38.6263.2543-74.924 0-36.304-.0814-72.5835-.2605-74.8632-.8343-10.6249-2.6555-17.7692-6.363-25.3207-3.0421-6.1816-6.42-10.798-11.324-15.518-8.752-8.3616-19.4555-13.4502-32.2101-15.2902-6.18-.8936-7.411-1.1582-39.033-1.2131z",
        "inkscape:connector-curvature": " 0",
        fill: " url(#f)",
        transform: " translate(-71.8155 -18.1429)"
    }), n("path", {
        d: " M204.1503 18.1429c-55.2305 0-71.3834.057-74.5232.3175-11.3342.9424-18.387 2.7275-26.0708 6.554-5.9214 2.9413-10.5915 6.3506-15.2005 11.1298-8.3938 8.7157-13.481 19.4383-15.3226 32.1842-.8953 6.1877-1.1558 7.4496-1.2087 39.0558-.0203 10.5354 0 24.4007 0 42.9984 0 55.2008.061 71.3418.3256 74.4764.9157 11.032 2.6453 17.9728 6.3081 25.565 7 14.5329 20.369 25.4428 36.119 29.5137 5.4535 1.4044 11.4767 2.1779 19.2092 2.5442 3.2762.1425 36.6684.2443 70.081.2443 33.4127 0 66.8253-.0407 70.02-.2035 8.9535-.4214 14.1526-1.1195 19.9011-2.6054 15.8517-4.0912 28.9767-14.8383 36.119-29.5748 3.5916-7.409 5.4128-14.6144 6.237-25.0704.179-2.2796.2543-38.6263.2543-74.924 0-36.304-.0814-72.5835-.2605-74.8632-.8343-10.6249-2.6555-17.7692-6.363-25.3207-3.0421-6.1816-6.42-10.798-11.324-15.518-8.752-8.3616-19.4555-13.4502-32.2101-15.2902-6.18-.8936-7.411-1.1582-39.033-1.2131z",
        "inkscape:connector-curvature": " 0",
        fill: " url(#g)",
        transform: " translate(-71.8155 -18.1429)"
    }), n("path", {
        d: " M204.1503 18.1429c-55.2305 0-71.3834.057-74.5232.3175-11.3342.9424-18.387 2.7275-26.0708 6.554-5.9214 2.9413-10.5915 6.3506-15.2005 11.1298-8.3938 8.7157-13.481 19.4383-15.3226 32.1842-.8953 6.1877-1.1558 7.4496-1.2087 39.0558-.0203 10.5354 0 24.4007 0 42.9984 0 55.2008.061 71.3418.3256 74.4764.9157 11.032 2.6453 17.9728 6.3081 25.565 7 14.5329 20.369 25.4428 36.119 29.5137 5.4535 1.4044 11.4767 2.1779 19.2092 2.5442 3.2762.1425 36.6684.2443 70.081.2443 33.4127 0 66.8253-.0407 70.02-.2035 8.9535-.4214 14.1526-1.1195 19.9011-2.6054 15.8517-4.0912 28.9767-14.8383 36.119-29.5748 3.5916-7.409 5.4128-14.6144 6.237-25.0704.179-2.2796.2543-38.6263.2543-74.924 0-36.304-.0814-72.5835-.2605-74.8632-.8343-10.6249-2.6555-17.7692-6.363-25.3207-3.0421-6.1816-6.42-10.798-11.324-15.518-8.752-8.3616-19.4555-13.4502-32.2101-15.2902-6.18-.8936-7.411-1.1582-39.033-1.2131z",
        "inkscape:connector-curvature": " 0",
        fill: " url(#h)",
        transform: " translate(-71.8155 -18.1429)"
    }), n("path", {
        d: " M132.3452 33.973c-26.7167 0-30.0696.1167-40.5629.5939-10.4727.4792-17.6212 2.136-23.8762 4.567-6.4701 2.5107-11.9586 5.8693-17.4265 11.3352-5.472 5.464-8.8332 10.9483-11.354 17.4116-2.4389 6.2524-4.099 13.3976-4.5703 23.8585-.4693 10.4854-.5923 13.8379-.5923 40.5348 0 26.697.1189 30.0371.5943 40.5225.4817 10.465 2.1397 17.6082 4.5703 23.8585 2.5147 6.4654 5.8758 11.9497 11.3458 17.4136 5.466 5.468 10.9544 8.8349 17.4204 11.3456 6.259 2.4309 13.4097 4.0877 23.8803 4.567 10.4933.477 13.8441.5938 40.5588.5938 26.7188 0 30.0615-.1167 40.5547-.5939 10.4728-.4792 17.6295-2.136 23.8885-4.567 6.4681-2.5106 11.9484-5.8775 17.4143-11.3455 5.472-5.4639 8.8332-10.9482 11.354-17.4115 2.4183-6.2524 4.0784-13.3976 4.5703-23.8585.4713-10.4854.5943-13.8277.5943-40.5246 0-26.697-.123-30.0473-.5943-40.5328-.4919-10.465-2.152-17.6081-4.5703-23.8584-2.5208-6.4654-5.882-11.9498-11.354-17.4137-5.4721-5.468-10.9442-8.8266-17.4204-11.3353-6.2714-2.4309-13.424-4.0877-23.8967-4.5669-10.4933-.4772-13.8339-.5939-40.5588-.5939zm-8.825 17.7147c2.6193-.0041 5.5418 0 8.825 0 26.2659 0 29.379.0942 39.7513.5652 9.5915.4383 14.7971 2.0397 18.2648 3.3852 4.5908 1.7817 7.8638 3.9116 11.3048 7.3521 3.4431 3.4406 5.5745 6.7173 7.3617 11.3046 1.3465 3.461 2.9512 8.6628 3.3877 18.2472.4714 10.3625.5739 13.4754.5739 39.7095 0 26.234-.1025 29.347-.5739 39.7095-.4386 9.5843-2.0412 14.7861-3.3877 18.2471-1.783 4.5874-3.9186 7.8539-7.3617 11.2923-3.443 3.4406-6.712 5.5704-11.3048 7.3521-3.4636 1.3517-8.6733 2.949-18.2648 3.3873-10.3702.471-13.4854.5734-39.7513.5734-26.2679 0-29.381-.1024-39.7513-.5734-9.5914-.4423-14.797-2.0438-18.2668-3.3893-4.5908-1.7817-7.87-3.9116-11.313-7.3521-3.4431-3.4405-5.5745-6.709-7.3617-11.2985-1.3465-3.461-2.9512-8.6628-3.3877-18.2471-.4714-10.3626-.5657-13.4754-.5657-39.7259 0-26.2504.0943-29.347.5657-39.7095.4386-9.5844 2.0412-14.7861 3.3877-18.2512 1.783-4.5874 3.9186-7.8641 7.3617-11.3046 3.443-3.4406 6.7222-5.5704 11.313-7.3562 3.4677-1.3517 8.6754-2.949 18.2668-3.3894 9.075-.4096 12.5919-.5324 30.9264-.553zm61.3363 16.322c-6.5173 0-11.805 5.2776-11.805 11.792 0 6.5125 5.2877 11.7962 11.805 11.7962 6.5172 0 11.8049-5.2837 11.8049-11.7962 0-6.5124-5.2877-11.796-11.805-11.796zm-52.5113 13.7826c-27.8993 0-50.5191 22.6031-50.5191 50.4817 0 27.8786 22.6198 50.4714 50.5191 50.4714s50.511-22.5928 50.511-50.4714c0-27.8786-22.6137-50.4817-50.513-50.4817zm0 17.7147c18.109 0 32.7914 14.6694 32.7914 32.767 0 18.0956-14.6824 32.767-32.7914 32.767-18.111 0-32.7913-14.6714-32.7913-32.767 0-18.0976 14.6803-32.767 32.7913-32.767z",
        "inkscape:connector-curvature": " 0",
        fill: " #fff"
    })))),
    Gs = e => n(ye, w(g({}, e), {
        name: "ShareTwitterIcon",
        svgParams: {
            height: 24,
            width: 24,
            stroke: "none"
        }
    }), n("path", {
        d: "M17.7508 2.96069H20.8175L14.1175 10.619L22 21.0382H15.8283L10.995 14.7182L5.46333 21.0382H2.395L9.56167 12.8465L2 2.96153H8.32833L12.6975 8.73819L17.7508 2.96069ZM16.675 19.2032H18.3742L7.405 4.69986H5.58167L16.675 19.2032Z",
        fill: "var(--color-primary)",
        stroke: "none"
    })),
    Js = e => n(ye, w(g({}, e), {
        name: "ShareSubstackIcon",
        svgParams: {
            height: 24,
            width: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "none"
        }
    }), n("path", {
        d: "M21.6608 8.55517H2.33838V5.9555H21.6617V8.55517H21.6608ZM2.33838 10.911V23L12 17.6008L21.6617 23V10.911H2.33838ZM21.6617 1H2.33838V3.59967H21.6617V1Z",
        fill: "var(--color-accent-orange)",
        stroke: "none"
    })),
    gr = u => {
        var p = u,
            {
                href: e,
                download: t,
                className: s,
                priority: o = "primary",
                size: i = "medium",
                fill: a = "filled",
                outline: r,
                rounded: c,
                grow: l
            } = p,
            d = De(p, ["href", "download", "className", "priority", "size", "fill", "outline", "rounded", "grow"]);
        return n("a", g({
            href: e,
            download: t,
            className: K(s, Ke.buttonBase, Ke.button, Ke[`priority_${o}`], Ke[`size_${i}`], Ke[`fill_${a}`], r && Ke.outline_none, c && Ke.rounded, l && Ke.grow)
        }, d))
    };

function _r(i) {
    var a = i,
        {
            auto: e,
            initialResult: t,
            deps: s
        } = a,
        o = De(a, ["auto", "initialResult", "deps"]);
    return ta(l => U(this, null, function*() {
        var d = l,
            {
                signal: r
            } = d,
            c = De(d, ["signal"]);
        const {
            pathname: u = "",
            query: p,
            body: m,
            method: f = "get"
        } = g(g({}, o), c), h = Q(f.toUpperCase(), u);
        p && h.query(p), m && h.send(m), r.addEventListener("abort", () => {
            h.abort()
        });
        const y = yield h;
        if (r.aborted) return;
        const _ = y.error;
        if (_) throw _;
        return y.body
    }), s || [], {
        auto: e,
        initialResult: t
    })
}

function yr(e) {
    const [t, s] = b(""), [o, i] = b(""), [a, r] = b({}), [c, l] = b(!1);
    A(() => {
        rt() && navigator.share && navigator.canShare(a) && l(!0)
    }, [a]), A(() => {
        function p() {
            return U(this, null, function*() {
                var f;
                s("");
                const m = e.imageUrl;
                if (Ho(e.imageUrl, () => {
                        s(m), i(e.imageDownloadUrl)
                    }), rt()) {
                    const h = yield fetch(e.imageUrlSameOrigin || m), y = ["instagram", "instagram-stories"].includes((f = e.shareApp) != null ? f : "");
                    r({
                        title: y ? void 0 : e.shareTitle,
                        text: y ? void 0 : e.shareText,
                        files: [new File([yield h.blob()], "image.png", {
                            type: "image/png"
                        })],
                        url: y ? void 0 : e.shareUrl
                    })
                }
            })
        }
        p()
    }, [e.imageDownloadUrl, e.imageUrl, e.shareApp, e.shareText, e.shareTitle, e.shareUrl]);
    const {
        refetch: d
    } = _r({
        method: "post",
        pathname: "/api/v1/press_kit/notification",
        body: {
            title: e.shareText,
            imageUrl: e.imageUrl,
            shareApp: e.shareApp
        },
        deps: [e.shareText, e.imageUrl, e.shareApp]
    }), u = Ee(() => U(this, null, function*() {
        const p = yield d();
        return p instanceof Error ? !1 : p.success
    }), [d]);
    return {
        img: t,
        imgDownload: o,
        sendPushNotification: u,
        shareData: a,
        useNativeShare: c
    }
}
const br = e => n(ye, w(g({}, e), {
        name: "DownloadIconNoBorder",
        svgParams: {
            height: 32,
            width: 32
        }
    }), n("path", {
        d: "M23.5 18.5V21.8333C23.5 22.2754 23.3244 22.6993 23.0118 23.0118C22.6993 23.3244 22.2754 23.5 21.8333 23.5H10.1667C9.72464 23.5 9.30072 23.3244 8.98816 23.0118C8.67559 22.6993 8.5 22.2754 8.5 21.8333V18.5",
        stroke: e.stroke || "white",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "rgba(255,255,255,0)"
    }), n("path", {
        d: "M11.8333 14.3335L16 18.5002L20.1667 14.3335",
        stroke: e.stroke || "white",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "rgba(255,255,255,0)"
    }), n("path", {
        d: "M16 18.5V8.5",
        stroke: e.stroke || "white",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "rgba(255,255,255,0)"
    })),
    wr = "_root_155rq_1",
    kr = "_rootHover_155rq_12",
    vr = "_image_155rq_12",
    Cr = "_linkHovered_155rq_13",
    Sr = "_download_155rq_18",
    Er = "_sharePage_155rq_23",
    Lr = "_tableRoot_155rq_28",
    Tr = "_link_155rq_13",
    Mr = "_linkVariableHeight_155rq_42",
    Pr = "_inline_155rq_76",
    Ir = "_secondaryBorder_155rq_81",
    xr = "_imageLoading_155rq_85",
    Nr = "_imageEmail_155rq_90",
    Dr = "_text_155rq_96",
    Or = "_buttons_155rq_102",
    Rr = "_button_155rq_102",
    be = {
        root: wr,
        rootHover: kr,
        image: vr,
        linkHovered: Cr,
        download: Sr,
        sharePage: Er,
        tableRoot: Lr,
        link: Tr,
        linkVariableHeight: Mr,
        inline: Pr,
        secondaryBorder: Ir,
        imageLoading: xr,
        imageEmail: Nr,
        text: Dr,
        buttons: Or,
        button: Rr
    },
    Ar = ({
        pub: e,
        post: t,
        style: s,
        text: o,
        translatedText: i,
        inline: a,
        sharePage: r,
        withButtons: c = !1,
        onShareFromApp: l,
        source: d,
        fullHeight: u = !0
    }) => {
        const {
            img: p,
            imgDownload: m,
            sendPushNotification: f,
            shareData: h,
            useNativeShare: y
        } = yr({
            shareTitle: "Share this post",
            shareText: t.title,
            shareUrl: Vt(e, t),
            shareApp: c ? s.aspectRatio === "stories" ? "instagram-stories" : "instagram" : void 0,
            imageDownloadUrl: ts(e, t, s, `${i||o}${s.aspectRatio?` - ${s.aspectRatio}`:""}`),
            imageUrl: ts(e, t, s),
            imageUrlSameOrigin: Vo(e, t, s)
        }), _ = ee(null), v = ee(null), [k, C] = b(!1), [S, T] = b({
            right: 0,
            bottom: 0
        });
        A(() => {
            var B, H;
            const D = (B = _.current) == null ? void 0 : B.getBoundingClientRect(),
                N = (H = v.current) == null ? void 0 : H.getBoundingClientRect();
            D && N && T({
                right: N.right - D.right,
                bottom: N.bottom - D.bottom
            })
        }, [s, _, v, p]);
        const L = Ee(D => U(void 0, null, function*() {
                var N;
                if ($(I.WRITER_MEDIA_ASSETS_IMAGE_DOWNLOADED, {
                        post_id: t.id,
                        type: o,
                        aspectRatio: s.aspectRatio,
                        share_center: r,
                        inline: !!a,
                        source: d
                    }), y && h) try {
                    yield navigator.share(h)
                } catch (B) {} else {
                    const B = (N = _.current) == null ? void 0 : N.getBoundingClientRect();
                    if (B) {
                        const H = D.clientX,
                            O = D.clientY;
                        (H < B.left || H > B.right || O < B.top || O > B.bottom) && D.preventDefault()
                    }
                }
            }), [t, o, s, r, a, y, h, d]),
            M = Ee(() => {
                $(I.IMAGE_CONTEXT_MENU_CLICKED, {
                    post_id: t.id,
                    clicked_from: "writer_media_assets",
                    type: o,
                    aspectRatio: s.aspectRatio,
                    share_center: r,
                    inline: !!a,
                    source: d
                })
            }, [t, o, s, r, a, d]);
        return c && !rt() ? n(Br, {
            inline: a,
            sharePage: r,
            onShareFromApp: () => {
                $(I.WRITER_MEDIA_ASSETS_IMAGE_DOWNLOADED, {
                    post_id: t.id,
                    type: o,
                    aspectRatio: s.aspectRatio,
                    share_center: r,
                    inline: !!a,
                    source: d,
                    via_app: !0
                }), l == null || l()
            },
            handleClick: L,
            img: p,
            imgDownload: m,
            sendPushNotification: f
        }) : n("a", {
            onClick: L,
            href: y ? void 0 : m,
            alt: "Download Image",
            download: !0,
            className: K(be.link, k && be.linkHovered, {
                [be.linkVariableHeight]: !u
            }),
            target: "_blank",
            rel: "noreferrer",
            onContextMenu: M
        }, n("div", {
            ref: v,
            className: K(be.root, {
                [be.sharePage]: r
            })
        }, !rt() && n("div", {
            className: be.download,
            style: S,
            onMouseEnter: () => {
                C(!0)
            }
        }, n(br, {
            stroke: "#404040",
            fill: "white"
        })), n(Qs, {
            img: p,
            ref: _,
            inline: a,
            sharePage: r,
            onMouseEnter: () => {
                C(!0)
            },
            onMouseLeave: () => {
                C(!1)
            }
        })))
    },
    Br = ({
        inline: e,
        sharePage: t,
        onShareFromApp: s,
        handleClick: o,
        img: i,
        imgDownload: a,
        sendPushNotification: r
    }) => {
        const [c, l] = b(!1), {
            popToast: d
        } = Oe(), {
            iString: u
        } = de(), p = Ee(() => U(void 0, null, function*() {
            (yield r()) ? s ? s() : d(f => n(Se, w(g({}, f), {
                text: u("Notification sent!")
            }))): d(f => n(Se, w(g({}, f), {
                text: u("Something went wrong. Please try again.")
            })))
        }), [s, r, d]);
        return n("div", {
            className: K(be.root, be.rootHover, {
                [be.sharePage]: t
            }),
            onMouseEnter: () => l(!0),
            onMouseLeave: () => l(!1)
        }, n(Qs, {
            img: i,
            inline: e,
            sharePage: t
        }), c && i && n(R, {
            className: be.buttons,
            gap: 8
        }, n(Ut, {
            text: u("Send a push notification of this image to the Substack iOS app, where you can share directly to Instagram. Only works on iOS.")
        }, n(Le, {
            className: be.button,
            grow: !0,
            onClick: p
        }, u("Send to my phone"))), n(gr, {
            className: be.button,
            download: !0,
            grow: !0,
            href: a,
            onClick: o,
            priority: "secondary"
        }, u("Download image"))))
    },
    Qs = Is(({
        img: e,
        inline: t,
        sharePage: s,
        onMouseEnter: o,
        onMouseLeave: i
    }, a) => e ? n("img", {
        src: e,
        className: K(be.image, {
            [be.inline]: t,
            [be.sharePage]: s && !t,
            [be.secondaryBorder]: s
        }),
        ref: a,
        onMouseEnter: o,
        onMouseLeave: i
    }) : n("div", {
        className: K(be.image, be.imageLoading, {
            [be.secondaryBorder]: s
        }),
        alt: "Loading"
    }, n(ut, null))),
    k1 = (e, t) => {
        var a, r, c, l, d;
        let s = fe((a = e == null ? void 0 : e.postSchedule) == null ? void 0 : a.trigger_at).diff(fe(), "day");
        const {
            iString: o,
            iPlural: i
        } = Ln.i(t);
        if (s > 0) switch ((r = e == null ? void 0 : e.postSchedule) == null ? void 0 : r.post_audience) {
            case "founding":
                return i("Your founding list will receive your post in %1 day. Spread the word and tease your upcoming post to find new readers!", "Your founding list will receive your post in %1 days. Spread the word and tease your upcoming post to find new readers!", s);
            case "only_paid":
                return i("Your paid list will receive your post in %1 day. Spread the word and tease your upcoming post to find new readers!", "Your paid list will receive your post in %1 days. Spread the word and tease your upcoming post to find new readers!", s);
            case "only_free":
                return i("Your free list will receive your post in %1 day. Spread the word and tease your upcoming post to find new readers!", "Your free list will receive your post in %1 days. Spread the word and tease your upcoming post to find new readers!", s);
            default:
                return i("Your whole list will receive your post in %1 day. Spread the word and tease your upcoming post to find new readers!", "Your whole list will receive your post in %1 days. Spread the word and tease your upcoming post to find new readers!", s)
        } else if (s = fe((c = e == null ? void 0 : e.postSchedule) == null ? void 0 : c.trigger_at).diff(fe(), "hour"), s > 0) switch ((l = e == null ? void 0 : e.postSchedule) == null ? void 0 : l.post_audience) {
            case "founding":
                return i("Your founding list will receive your post in %1 hour. Spread the word and tease your upcoming post to find new readers!", "Your founding list will receive your post in %1 hours. Spread the word and tease your upcoming post to find new readers!", s);
            case "only_paid":
                return i("Your paid list will receive your post in %1 hour. Spread the word and tease your upcoming post to find new readers!", "Your paid list will receive your post in %1 hours. Spread the word and tease your upcoming post to find new readers!", s);
            case "only_free":
                return i("Your free list will receive your post in %1 hour. Spread the word and tease your upcoming post to find new readers!", "Your free list will receive your post in %1 hours. Spread the word and tease your upcoming post to find new readers!", s);
            default:
                return i("Your whole list will receive your post in %1 hour. Spread the word and tease your upcoming post to find new readers!", "Your whole list will receive your post in %1 hours. Spread the word and tease your upcoming post to find new readers!", s)
        } else switch ((d = e == null ? void 0 : e.postSchedule) == null ? void 0 : d.post_audience) {
            case "founding":
                return o("Your founding list will receive your post in less than an hour. Spread the word and tease your upcoming post to find new readers!");
            case "only_paid":
                return o("Your paid list will receive your post in less than an hour. Spread the word and tease your upcoming post to find new readers!");
            case "only_free":
                return o("Your free list will receive your post in less than an hour. Spread the word and tease your upcoming post to find new readers!");
            default:
                return o("Your whole list will receive your post in less than an hour. Spread the word and tease your upcoming post to find new readers!")
        }
    },
    Ur = (e, t) => {
        const {
            iString: s
        } = Ln.i(t);
        switch (e) {
            case "square":
                return s("Square");
            case "instagram":
                return "instagram";
            case "stories":
                return s("stories")
        }
    },
    $r = "_mediaCarousel_1wp3f_1",
    Fr = "_pressKitImageContainer_1wp3f_17",
    Hr = "_scrollContainer_1wp3f_22",
    Vr = "_carouselParent_1wp3f_34",
    Wr = "_carouselArrow_1wp3f_39",
    jr = "_bg_1wp3f_53",
    Kr = "_fade_1wp3f_67",
    qr = "_visible_1wp3f_76",
    zr = "_left_1wp3f_80",
    Yr = "_bgSecondary_1wp3f_86",
    Xr = "_right_1wp3f_90",
    Zr = "_containerArrows_1wp3f_100",
    ke = {
        mediaCarousel: $r,
        pressKitImageContainer: Fr,
        scrollContainer: Hr,
        carouselParent: Vr,
        carouselArrow: Wr,
        bg: jr,
        fade: Kr,
        visible: qr,
        left: zr,
        bgSecondary: Yr,
        right: Xr,
        containerArrows: Zr
    },
    Gr = ({
        inline: e,
        children: t
    }) => {
        const s = Wo(),
            o = ee(null),
            {
                state: i,
                handleArrowClick: a
            } = tl(o),
            r = e ? "secondary" : void 0;
        return n(_e, {
            className: ke.scrollContainer,
            bg: r,
            alignItems: "center",
            flex: "grow",
            paddingX: {
                desktop: 32,
                mobile: 0
            }
        }, n(x, {
            className: ke.carouselParent,
            bg: r
        }, !s && i.showLeft && n(_e, {
            bg: e ? void 0 : "secondary",
            className: K(ke.fade, ke.visible, ke.left, ke.containerArrows)
        }, n("div", {
            className: r === "secondary" ? ke.bgSecondary : ke.bg
        }), n(Ie, {
            className: ke.carouselArrow,
            rounded: !0,
            size: 36,
            onClick: a(-1),
            fill: e ? "filled" : "empty"
        }, n(ka, null))), n(_e, {
            ref: o,
            bg: r,
            gap: e ? 8 : 16,
            justifyContent: "space-between",
            className: ke.mediaCarousel,
            paddingY: 4,
            paddingX: {
                mobile: 32,
                desktop: 4
            }
        }, t), !s && i.showRight && n(_e, {
            bg: e ? void 0 : "secondary",
            className: K(ke.fade, ke.visible, ke.right, ke.containerArrows)
        }, n("div", {
            className: r === "secondary" ? ke.bgSecondary : ke.bg
        }), n(Ie, {
            className: ke.carouselArrow,
            rounded: !0,
            size: 36,
            onClick: a(1),
            fill: e ? "filled" : "empty"
        }, n(Da, null)))))
    },
    Jr = Tn(({
        pub: e,
        post: t,
        bgColor: s,
        textColor: o,
        bgImage: i,
        hidePreviewText: a = !1,
        aspectRatio: r,
        text: c,
        inline: l,
        withButtons: d,
        onShareFromApp: u,
        source: p
    }) => {
        const {
            language: m
        } = de(), f = {
            square: "1:1",
            stories: "9:16",
            instagram: "4:5"
        };
        return n(R, {
            gap: l ? 4 : 0,
            className: ke.pressKitImageContainer
        }, n(Ar, {
            pub: e,
            post: t,
            style: {
                bgColor: s,
                textColor: o,
                aspectRatio: r,
                bgImage: i,
                hidePreviewText: a
            },
            text: c,
            inline: l,
            sharePage: !0,
            withButtons: d,
            onShareFromApp: u,
            source: p,
            fullHeight: !1
        }), n(F.Meta, null, Ur(r, m).toUpperCase(), " ", f[r]))
    }),
    Qr = (e, t, s, o = !1, {
        withButtons: i,
        onShareFromApp: a,
        source: r,
        hidePreviewText: c
    } = {}) => we(() => s ? el(e, t, s).map((d, u) => n(Jr, {
        key: u,
        pub: e,
        post: t,
        bgColor: d.bgColor,
        textColor: d.textColor,
        aspectRatio: d.aspectRatio,
        bgImage: d.bgImage,
        hidePreviewText: c,
        text: d.text,
        inline: o,
        withButtons: i,
        onShareFromApp: a,
        source: r
    })) : [], [e, t, s, o, r]),
    el = (e, t, s) => {
        const o = s.web_bg_color || s.cover_bg_color,
            i = [],
            a = [],
            {
                iString: r
            } = Ln.i();
        (t.cover_image || e.cover_photo_url) && a.push({
            bgImage: !0,
            textColor: "#ffffff",
            text: r("Image")
        }), o.toLowerCase() !== "#ffffff" && a.push({
            bgColor: "#ffffff",
            textColor: "#404040",
            text: r("Black and White")
        }), a.push({
            bgColor: o,
            textColor: s.print_on_web_bg_color || s.cover_print_primary || "#1a1a1a",
            bgImage: !1,
            text: r("Background Color")
        }), s.background_pop && a.push({
            bgColor: s.background_pop,
            textColor: s.print_on_pop,
            text: r("Accent Color")
        });
        const c = ["stories", "square"];
        if (a.length === 1)
            for (const l of c) i.push(w(g({}, a[0]), {
                aspectRatio: l
            }));
        else {
            const l = a.length;
            for (let d = 0; d < l; d++) i.push(w(g({}, a[d]), {
                aspectRatio: c[d % 2]
            }));
            for (let d = 0; d < l; d++) i.push(w(g({}, a[d]), {
                aspectRatio: c[(d + 1) % 2]
            }))
        }
        return i
    },
    tl = (e, {
        initialState: t
    } = {}) => {
        const [s, o] = b(t || {
            showLeft: !1,
            showRight: !0
        });
        return A(() => {
            const {
                current: a
            } = e;
            if (a) {
                const r = () => {
                    o(c => {
                        let l = c;
                        !l.showLeft && a.scrollLeft > 0 ? l = w(g({}, c), {
                            showLeft: !0
                        }) : l.showLeft && a.scrollLeft <= 0 && (l = w(g({}, c), {
                            showLeft: !1
                        }));
                        const d = a.scrollWidth - a.offsetWidth - 4;
                        return !l.showRight && a.scrollLeft < d ? l = w(g({}, c), {
                            showRight: !0
                        }) : l.showRight && a.scrollLeft >= d && (l = w(g({}, c), {
                            showRight: !1
                        })), l
                    })
                };
                return a.addEventListener("scroll", r), setTimeout(() => {
                    r()
                }, 1e3), () => {
                    a.removeEventListener("scroll", r)
                }
            }
        }, [e]), {
            state: s,
            handleArrowClick: a => () => {
                const {
                    current: r
                } = e;
                r && r.scrollBy({
                    left: a * Math.min(rt() ? r.offsetWidth - 70 : r.offsetWidth - 150, r.scrollWidth - r.offsetWidth),
                    behavior: "smooth"
                })
            }
        }
    },
    nl = ({
        isOpen: e,
        onClose: t,
        pub: s,
        post: o,
        hideEmail: i,
        hideAssetTitle: a,
        smallAssetPadding: r,
        mediaCarousel: c,
        source: l
    }) => (A(() => {
        e && $(I.INSTAGRAM_SHARE_MODAL_SEEN, {
            source: l || (i ? "post" : "share center")
        })
    }, [e, i, l]), n(xe, {
        isOpen: e,
        onClose: t,
        fullscreenMobile: !0
    }, n(dt, {
        title: "Share to Instagram",
        onClose: t,
        includeClose: !0
    }), n(sl, {
        pub: s,
        post: o,
        hideEmail: i,
        hideAssetTitle: a,
        smallAssetPadding: r,
        mediaCarousel: c,
        source: l
    }))),
    sl = ({
        pub: e,
        post: t,
        hideEmail: s,
        hideAssetTitle: o,
        smallAssetPadding: i,
        mediaCarousel: a,
        source: r
    }) => {
        const c = We(),
            l = ({
                step: u,
                title: p,
                subtitle: m,
                children: f
            }) => n(x, {
                gap: 16
            }, n(F.H4, null, u), n(R, {
                style: {
                    width: "90%"
                },
                gap: 12
            }, n(R, {
                gap: 4
            }, n(F.H4, null, p), n(F.B4, {
                color: "secondary"
            }, m)), f));
        return n(qt, null, n(R, {
            gap: 24
        }, n(l, {
            step: 1,
            title: "Download an image",
            subtitle: "Substack automatically creates assets from any post to share on Instagram."
        }, n(() => {
            const [u, p] = b(!1);
            return n(R, {
                bg: "secondary",
                radius: "md",
                border: "detail"
            }, n(R, {
                gap: 24,
                padding: i ? 8 : 20
            }, n(x, {
                gap: 12,
                alignItems: "center"
            }, !o && n(F.B4, {
                weight: "bold"
            }, "Shareable images"), !s && n(Le, {
                size: "sm",
                disabled: u,
                priority: "secondary",
                style: {
                    marginLeft: "auto",
                    marginRight: 0
                },
                onClick: () => U(void 0, null, function*() {
                    $(I.SHARE_CENTER_MEDIA_ASSETS_EMAILED, {
                        post_id: t.id
                    }), p(!0);
                    try {
                        (yield st(`/api/v1/press_kit/${t.id}/email`)).success && cs("Emails sent successfully.")
                    } catch (m) {
                        $(I.SHARE_CENTER_MEDIA_ASSETS_EMAILED_FAILED, {
                            post_id: t.id
                        }), cs("Error sending emails. Please try again.")
                    } finally {
                        p(!1)
                    }
                })
            }, "Email me assets")), a))
        }, null)), n(l, {
            step: 2,
            title: "Copy a link to the post",
            subtitle: "Add a link to your Instagram story or bio."
        }, n(Le, {
            priority: "secondary",
            onClick: () => {
                Hs({
                    shareUrl: Dn(null, {
                        pub: e,
                        post: t,
                        user: c
                    }),
                    pub: e,
                    post: t,
                    utm_campaign: r || (s ? yt.postInstagramShareModal : yt.postShareCenter)
                })
            }
        }, "Copy Link")), n(l, {
            step: 3,
            title: "Share on Instagram",
            subtitle: "Visit the Instagram app and share the image with a link to the post. Or share from Instagram on desktop"
        })))
    },
    ol = Tn(nl, (e, t) => e.post.id === t.post.id && e.isOpen === t.isOpen),
    il = ({
        isOpen: e,
        onClose: t,
        pub: s,
        post: o,
        themeVariables: i,
        hideEmail: a
    }) => {
        const r = Qr(s, o, i, !0, {
            source: a ? "instagram-modal-reader-share" : "instagram-modal-share-center",
            hidePreviewText: !0
        });
        return n(ol, {
            isOpen: e,
            pub: s,
            post: o,
            onClose: t,
            mediaCarousel: n(Gr, {
                inline: !0
            }, r),
            hideEmail: a
        })
    },
    v1 = Tn(il, (e, t) => e.post.id === t.post.id && e.isOpen === t.isOpen),
    al = "_step_15kby_1",
    nn = {
        step: al
    },
    rl = ({
        isOpen: e,
        onClose: t,
        onCopyLinkClick: s,
        mediaCarousel: o
    }) => (A(() => {
        e && $(I.VIDEO_CLIP_INSTAGRAM_SHARE_MODAL_SEEN, {
            source: "clip-share-modal"
        })
    }, [e]), n(xe, {
        isOpen: e,
        onClose: t,
        fullscreenMobile: !0
    }, n(dt, {
        includeClose: !0,
        onClose: t,
        title: "Share to Instagram"
    }), n(qt, null, n(R, {
        gap: 32
    }, n(x, null, n(x, {
        justifyContent: "center",
        className: nn.step
    }, n(F.H4, null, "1")), n(x, null, n(R, {
        gap: 16
    }, n(F.H4, null, "Download clip"), n(R, {
        bg: "secondary",
        radius: "md",
        border: "detail"
    }, o)))), n(x, null, n(x, {
        justifyContent: "center",
        className: nn.step
    }, n(F.H4, null, "2")), n(x, null, n(R, {
        gap: 16
    }, n(R, {
        gap: 4
    }, n(F.H4, null, "Copy a link to the post"), n(F.B4, null, "Add a link to your Instagram story or bio.")), n(x, null, n(Le, {
        priority: "secondary",
        onClick: () => s("instagram", "substack-clips", "social"),
        leftIcon: n(Bt, null)
    }, "Copy Link"))))), n(x, null, n(x, {
        justifyContent: "center",
        className: nn.step
    }, n(F.H4, null, "3")), n(x, null, n(R, {
        gap: 16
    }, n(R, {
        gap: 4
    }, n(F.H4, null, "Post from Instagram"), n(F.B4, null, "Visit the Instagram app and share the image with a link to the post. Or share from Instagram on desktop"))))), n(x, {
        justifyContent: "end",
        paddingTop: 32,
        paddingX: 16
    }, n(Le, {
        priority: "primary-theme",
        onClick: t
    }, "Done")))))),
    ll = "_download_1604k_1",
    cl = "_disabledButton_1604k_7",
    _s = {
        download: ll,
        disabledButton: cl
    };

function dl({
    shareUrl: e,
    pub: t,
    post: s,
    clip: o,
    selectionId: i,
    disabled: a,
    disabledInstagram: r,
    disabledDownload: c,
    onDownloadClick: l,
    isSharing: d
}) {
    const u = Oe(),
        [p, m] = b(!1),
        f = (T = "copy", L = "substack-clip", M = "web") => U(this, null, function*() {
            h(T, L, M, D => (xs(D), u.popToast(N => n(Se, w(g({}, N), {
                text: "Link copied to clipboard"
            }))), !1))
        }),
        h = (T, L, M, D) => {
            Ui(T, D, {
                shareUrl: e(T, L, M),
                post: s,
                pub: t,
                selectionId: i,
                utm_campaign: L,
                utm_medium: M,
                event: I.VIDEO_CLIP_SHARE_BUTTON_CLICKED
            })
        },
        y = () => {
            $(I.VIDEO_CLIP_SHARE_BUTTON_CLICKED, {
                name: "instagram",
                post_id: s ? s.id : null,
                utm_campaign: "substack-clips",
                utm_medium: "social"
            }), m(!0)
        },
        _ = () => {
            m(!1)
        },
        v = () => U(this, null, function*() {
            h("facebook", "substack-clips", "social", T => Nt("https://www.facebook.com/sharer/sharer.php", {
                u: T
            }))
        }),
        k = () => U(this, null, function*() {
            s && h("twitter", "substack-clips", "social", T => jo({
                url: T,
                text: s.title
            }))
        }),
        C = () => U(this, null, function*() {
            h("linkedin", "substack-clips", "social", T => Nt("https://www.linkedin.com/sharing/share-offsite/", {
                url: T
            }))
        }),
        S = () => {
            Vs({
                shareUrl: e("notes", "substack-clips", "web"),
                pub: t,
                post: s,
                utm_campaign: "substack-clips"
            })
        };
    return n(x, {
        justifyContent: "space-between",
        flex: "fill"
    }, d ? n(x, null, n(Le, {
        fill: "filled",
        priority: "primary-theme",
        rounded: !1,
        onClick: () => f(),
        leftIcon: n(Bt, null)
    }, "Copy link")) : n("div", null), n(x, {
        gap: 8
    }, n(Ut, {
        text: c ? "Your clip will be ready to download shortly" : "Download",
        hoverOptions: {
            delayEnter: 0,
            delayLeave: 0
        }
    }, n(Ie, {
        className: K({
            [_s.disabledButton]: c
        }),
        fill: "outline",
        rounded: !1,
        onClick: l,
        disabled: c
    }, c ? n(ut, null) : n(ct, {
        size: 20
    }))), !d && n(Ie, {
        fill: "outline",
        rounded: !1,
        onClick: () => f(),
        disabled: a
    }, n(Bt, {
        size: 20
    })), n(Ie, {
        fill: "outline",
        rounded: !1,
        onClick: S,
        disabled: a
    }, n(Js, {
        height: 24
    })), n(Ie, {
        fill: "outline",
        rounded: !1,
        onClick: y,
        disabled: a || r
    }, n(fr, {
        height: 20,
        width: 20
    })), n(Ie, {
        fill: "outline",
        rounded: !1,
        onClick: k,
        disabled: a
    }, n(Gs, {
        height: 20,
        width: 20
    })), n(Ie, {
        fill: "outline",
        rounded: !1,
        onClick: v,
        disabled: a
    }, n(hr, {
        height: 20,
        width: 20
    })), n(Ie, {
        fill: "outline",
        rounded: !1,
        onClick: C,
        disabled: a
    }, n(Bi, {
        height: 20,
        width: 20
    })), n(rl, {
        isOpen: p,
        onClose: _,
        onCopyLinkClick: f,
        mediaCarousel: n(x, {
            gap: 16,
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            position: "relative"
        }, n("img", {
            src: Wt(o),
            width: "300px"
        }), n("div", {
            className: _s.download
        }, n(x, {
            padding: 32
        }, n(Li, {
            onClick: () => l && l()
        }, n(ct, {
            size: "16"
        })))))
    })))
}
const ul = e => n(ye, w(g({}, e), {
        name: "PlayIcon",
        svgParams: {
            height: 43,
            width: 35
        }
    }), n("path", {
        d: "M34.428 20.819C34.8483 21.0821 34.8483 21.7121 34.428 21.9752L1.74924 42.4349C1.3132 42.7079 0.755859 42.3835 0.755859 41.8568V0.937387C0.755859 0.410635 1.3132 0.0862969 1.74925 0.359298L34.428 20.819Z"
    })),
    Fn = Ye(void 0),
    C1 = ({
        children: e
    }) => {
        const [t, s] = b(!1), o = {
            isClipping: t,
            setIsClipping: s
        };
        return n(Fn.Provider, {
            value: o
        }, e)
    },
    pl = "_shimmer_i90zs_1",
    ml = "_shimmerAnimation_i90zs_1",
    hl = "_icon_i90zs_31",
    fl = "_errorIcon_i90zs_36",
    Pt = {
        shimmer: pl,
        shimmerAnimation: ml,
        icon: hl,
        errorIcon: fl
    },
    gl = () => n(x, {
        radius: "full",
        className: Pt.shimmer,
        style: {
            height: "var(--size-6)",
            width: "100%"
        }
    }),
    eo = Ye({
        addMediaUpload: ({}) => {
            throw new Error("Adding a download requires a DownloadProvider.")
        }
    }),
    _l = ({
        download: {
            mediaUpload: e,
            thumbnailUrl: t
        },
        onRemoveItem: s
    }) => {
        var d;
        const [o, i] = b(!1), {
            iString: a
        } = de(), {
            mediaUpload: r,
            downloadUrl: c
        } = to(e.id), l = (r == null ? void 0 : r.state) === "error";
        return A(() => {
            c && r && !o && (Zs(r), i(!0))
        }, [e.id, c]), n(x, {
            gap: 16
        }, n("div", null, n(x, {
            position: "relative"
        }, n(na, {
            src: (d = t != null ? t : Wt(e)) != null ? d : "",
            maxWidth: 40,
            radius: "xs",
            imageProps: {
                height: Math.round(40),
                smartCrop: !0
            }
        }), c && n(_e, {
            bg: "white",
            radius: "full",
            width: 20,
            height: 20,
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            className: Pt.icon
        }, n(Qi, {
            color: "black",
            strokeWidth: 2,
            size: 14
        })), l && n(_e, {
            radius: "full",
            width: 20,
            height: 20,
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            className: K(Pt.icon, Pt.errorIcon)
        }, n(_n, {
            color: "white",
            strokeWidth: 2,
            size: 14
        })))), n(R, {
            gap: 8
        }, n(x, {
            gap: 12
        }, n(x, {
            style: {
                width: "250px"
            }
        }, n(R, null, n(F.B4, {
            color: "white",
            weight: "semibold",
            style: {
                overflowWrap: "anywhere"
            }
        }, e.name), l && n(F.B4, {
            color: "accent-red",
            weight: "semibold",
            style: {
                overflowWrap: "anywhere"
            }
        }, a("Download failed")))), n(x, {
            cursor: "pointer",
            onClick: s
        }, n(_n, {
            color: "gray"
        }))), !c && !l ? n(gl, null) : null))
    };

function S1({
    children: e
}) {
    const [t, s] = b([]), o = i => {
        s(a => [...a, i])
    };
    return n(eo.Provider, {
        value: {
            addMediaUpload: o
        }
    }, e, !!t.length && n("div", {
        style: {
            position: "fixed",
            right: "var(--size-24)",
            bottom: "var(--size-24)",
            zIndex: 1
        }
    }, n(Oa, {
        show: !0,
        appear: !0,
        enter: "tw-transition-all tw-duration-fast transform-gpu",
        enterFrom: "tw-opacity-0 tw-translate-y-4",
        enterTo: "tw-opacity-100 tw-translate-y-0",
        leave: "tw-transition-all tw-duration-fast transform-gpu",
        leaveFrom: "tw-opacity-100 tw-translate-y-0",
        leaveTo: "tw-opacity-0 tw-translate-y-4"
    }, n(R, {
        style: {
            backgroundColor: "#232525"
        },
        radius: "md",
        padding: 16,
        gap: 8
    }, t.map((i, a) => n(_l, {
        key: `${a}_${i.mediaUpload.id}`,
        download: i,
        onRemoveItem: () => s(t.filter(({
            mediaUpload: r
        }) => r.id !== i.mediaUpload.id))
    }))))))
}

function yl() {
    return Ve(eo)
}
const bl = "_timeline_10y1s_1",
    wl = "_rail_10y1s_14",
    kl = "_draggable_10y1s_21",
    vl = "_draggableLeft_10y1s_36",
    Cl = "_draggableRight_10y1s_40",
    Sl = "_tooltip_10y1s_44",
    El = "_visible_10y1s_61",
    Ll = "_hidden_10y1s_65",
    Tl = "_playback_10y1s_69",
    Ml = "_nonSelectable_10y1s_80",
    Pl = "_tick_10y1s_89",
    Il = "_lgTick_10y1s_94",
    xl = "_smTick_10y1s_108",
    Nl = "_currentTick_10y1s_121",
    Dl = "_selection_10y1s_128",
    Ol = "_handle_10y1s_136",
    Rl = "_storyboard_10y1s_145",
    Al = "_ticks_10y1s_154",
    Bl = "_shadow_10y1s_163",
    Ul = "_shadowContainer_10y1s_170",
    oe = {
        timeline: bl,
        rail: wl,
        draggable: kl,
        draggableLeft: vl,
        draggableRight: Cl,
        tooltip: Sl,
        visible: El,
        hidden: Ll,
        playback: Tl,
        nonSelectable: Ml,
        tick: Pl,
        lgTick: Il,
        smTick: xl,
        currentTick: Nl,
        selection: Dl,
        handle: Ol,
        storyboard: Rl,
        ticks: Al,
        shadow: Bl,
        shadowContainer: Ul
    },
    $l = 120,
    Fl = ({
        videoElement: e,
        start: t,
        setStart: s,
        end: o,
        setEnd: i,
        onDurationChange: a,
        storyboard: r,
        maxDuration: c,
        minDuration: l,
        maxTimelineDuration: d,
        minTimelineDuration: u,
        looping: p = !1
    }) => {
        const [m, f] = b(0), [h, y] = b(0), [_, v] = b(0), [k, C] = b(0), S = ee(0), [T, L] = b(!1), M = O => {
            L(O)
        };
        A(() => {
            const O = () => {
                if (e) {
                    f(e.duration);
                    const X = [$l, e.duration];
                    d && X.push(d), v(Math.min(...X)), a && a(e.duration)
                }
            };
            return e && e.addEventListener("loadedmetadata", O), e != null && e.duration && O(), () => {
                e && e.removeEventListener("loadedmetadata", O)
            }
        }, [e]), A(() => {
            e && (e.currentTime = t)
        }, [t]), A(() => {
            const O = () => {
                e && C(e.currentTime)
            };
            if (e) return e.addEventListener("timeupdate", O), () => {
                e.removeEventListener("timeupdate", O)
            }
        }, [e]), A(() => {
            const O = Math.abs(k - S.current);
            if (S.current = k, O < 1) {
                p && e && !T && (k > o || k < t) && (e.currentTime = t);
                return
            }
            if (!T && (k > _ || k < h)) {
                const X = _ - h,
                    E = Math.min(k, m - X);
                y(E), v(E + X)
            }
        }, [k]);
        const D = O => {
                O.preventDefault();
                const X = O.currentTarget.getBoundingClientRect(),
                    E = (O.clientX - X.left) / X.width,
                    q = _ - h,
                    J = (O.deltaY > 0 ? -1 : 1) * q / 4,
                    ae = q - J,
                    re = h + E * q,
                    pe = re - E * ae,
                    W = re + (1 - E) * ae;
                d && W - pe > d || u && W - pe < u || (v(Math.min(m, W)), y(Math.max(0, pe)))
            },
            N = (O, X) => {
                s(O), i(X)
            },
            B = O => {
                if (l && O + l >= o) {
                    s(o - l);
                    return
                }
                if (c && O + c <= o) {
                    s(o - c);
                    return
                }
                s(O)
            },
            H = O => {
                if (l && O - l <= t) {
                    i(t + l);
                    return
                }
                if (c && O - c >= t) {
                    i(t + c);
                    return
                }
                i(O)
            };
        return n("div", {
            className: oe.timeline,
            onWheel: D
        }, m > 0 ? n(Wl, {
            startTimeline: h,
            setStartTimeline: y,
            endTimeline: _,
            setEndTimeline: v,
            startPosition: t,
            setStartPosition: B,
            endPosition: o,
            setEndPosition: H,
            setPosition: N,
            playerPosition: k,
            duration: m,
            onDragging: M,
            storyboard: r
        }) : n(x, {
            alignItems: "center",
            justifyContent: "center"
        }, n(ut, null)))
    },
    Hl = ({
        storyboard: e,
        imageUrl: t,
        x: s,
        y: o,
        displayWidth: i,
        displayHeight: a,
        className: r
    }) => {
        const c = (s ? s / e.tile_width : 0) * i,
            l = (o ? o / e.tile_height : 0) * a,
            d = {
                width: `${i}px`,
                height: `${a}px`,
                backgroundImage: `url(${t})`,
                backgroundPosition: `-${c}px -${l}px`,
                backgroundSize: "500%"
            };
        return n("div", {
            className: r,
            style: d
        })
    };

function Vl(e, t) {
    return e.reduce((s, o) => {
        const i = Math.abs(o.start - t),
            a = Math.abs(s.start - t);
        return i < a ? o : s
    })
}
const Wl = ({
        startTimeline: e,
        setStartTimeline: t,
        endTimeline: s,
        setEndTimeline: o,
        startPosition: i,
        setStartPosition: a,
        endPosition: r,
        setEndPosition: c,
        setPosition: l,
        playerPosition: d,
        duration: u,
        storyboard: p,
        onDragging: m
    }) => {
        const f = ee(null),
            h = ee(null),
            y = ee(r - i),
            _ = ee(null),
            [v, k] = b(!1),
            C = s - e,
            S = i - e,
            T = r - e,
            L = d - e,
            M = we(() => S / C * 100, [C, S]),
            D = we(() => T / C * 100, [T, C]),
            N = we(() => L / C * 100, [L, C]),
            B = `linear-gradient(to right, 
    rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) calc(${M}% + 6px), 
    rgba(0,0,0,0) calc(${M}% + 6px), rgba(0,0,0,0) calc(${D}% - 6px), 
    rgba(0,0,0,0.5) calc(${D}% - 6px), rgba(0,0,0,0.5) 100%)`,
            H = Ee(V => {
                const ne = V / 100 * C;
                a(Math.max(0, ne + e))
            }, [C, a, e]),
            O = Ee(V => {
                const ne = V / 100 * C;
                c(Math.min(u, ne + e))
            }, [u, C, c, e]);
        A(() => {
            m(v)
        }, [v]);
        const X = V => {
                if (V.stopPropagation(), V.preventDefault(), v || !f.current) return;
                h.current = V.clientX, y.current = r - i;
                const ne = f.current.getBoundingClientRect().left,
                    j = V.clientX - ne,
                    P = f.current.getBoundingClientRect().width,
                    te = j / P * 100;
                if (!(te >= M && te <= D)) {
                    const le = e + te / 100 * C,
                        z = Yt(le, 0, u - y.current),
                        Y = z + y.current;
                    l(z, Y)
                }
            },
            E = () => {
                document.addEventListener("selectstart", J)
            },
            q = () => {
                document.removeEventListener("selectstart", J)
            },
            J = V => {
                V.preventDefault(), V.stopPropagation()
            },
            ae = V => {
                if (!f.current) return;
                E(), k(!1), h.current = V.clientX, y.current = r - i;
                const ne = f.current.getBoundingClientRect().left,
                    j = V.clientX - ne,
                    P = f.current.getBoundingClientRect().width,
                    te = j / P * 100,
                    Z = te >= M && te <= D;
                _.current = Z, document.addEventListener("mousemove", pe), document.addEventListener("mouseup", re), document.addEventListener("pointerup", re)
            },
            re = () => {
                setTimeout(() => {
                    k(!1)
                }, 0), h.current = null, _.current = null, q(), document.removeEventListener("mousemove", pe), document.removeEventListener("mouseup", re), document.removeEventListener("pointerup", re)
            },
            pe = V => {
                if (h.current === null) return;
                const ne = V.clientX - h.current;
                if (ne > 5 && k(!0), !f.current) return;
                const j = f.current.getBoundingClientRect().width,
                    P = ne / j * C,
                    te = i + P,
                    Z = te + y.current;
                _.current ? te < 0 ? l(0, y.current) : Z > u ? l(u - y.current, u) : l(te, Z) : e - P > 0 && s - P <= u && (t(Math.max(0, e - P)), o(Math.min(u, s - P)))
            },
            W = () => {
                var le, z;
                if (!p) return null;
                const V = (z = (le = f == null ? void 0 : f.current) == null ? void 0 : le.getBoundingClientRect().width) != null ? z : 0;
                if (V === 0) return null;

                function ne(Y, Ce, he) {
                    const Te = [],
                        Pe = Math.floor(Y / he) * he,
                        Ne = Math.ceil(Ce / he) * he;
                    for (let G = Pe; G <= Ne; G += he) Te.push(G);
                    return Te
                }
                const j = 60 * (p.tile_width / p.tile_height),
                    P = C / V * j,
                    Z = ne(e, s, P).map(Y => ({
                        time: Y,
                        tile: Vl(p.tiles, Y)
                    }));
                return n(x, {
                    className: oe.storyboard
                }, Z.map(({
                    time: Y,
                    tile: Ce
                }, he) => {
                    const Te = (Y - e) / C * 100;
                    return n("div", {
                        style: {
                            position: "absolute",
                            left: `calc(${Te}% + 6px)`
                        }
                    }, n(Hl, {
                        storyboard: p,
                        key: `${Ce.x}-${Ce.y}-${he}`,
                        imageUrl: p.url,
                        displayHeight: 60,
                        displayWidth: p.tile_width / p.tile_height * 60,
                        x: Ce.x,
                        y: Ce.y
                    }))
                }))
            };
        return n("div", {
            className: oe.rail,
            ref: f,
            onMouseDown: ae,
            onClick: X
        }, W(), n("div", {
            className: oe.nonSelectable,
            style: {
                background: B,
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }
        }), n("div", {
            className: oe.ticks
        }, n(zl, {
            railDuration: C,
            startTimeline: e
        })), n("div", {
            className: K(oe.ticks, oe.nonSelectable)
        }, n("div", {
            className: oe.selection,
            style: {
                left: `calc(${M}% + 6px)`,
                width: `calc(${D-M}% - 12px)`
            }
        })), n(Yl, {
            divRef: f,
            startTimeline: e,
            railDuration: s - e,
            active: !v
        }), n("div", {
            className: oe.ticks
        }, n(sn, {
            className: `${oe.draggable} ${oe.draggableLeft}`,
            railRef: f,
            label: ge(i, !0),
            position: M,
            maxPosition: D,
            setPosition: H,
            isDragging: v,
            setIsDragging: k
        }), n(sn, {
            className: `${oe.draggable} ${oe.draggableRight}`,
            railRef: f,
            label: ge(r, !0),
            position: D,
            minPosition: M,
            setPosition: O,
            isDragging: v,
            setIsDragging: k
        }), n(sn, {
            className: oe.playback,
            railRef: f,
            label: ge(d, !0),
            position: N,
            isDragging: v,
            setIsDragging: k,
            disabled: !0
        })))
    },
    jl = [{
        id: "lg",
        interval: 60,
        tickClassName: oe.lgTick,
        displayOnZoomLevels: ["lg", "md"],
        displayLabelsOnZoomLevels: ["lg"]
    }, {
        id: "md",
        interval: 30,
        tickClassName: oe.lgTick,
        displayOnZoomLevels: ["lg", "md"],
        displayLabelsOnZoomLevels: ["md"]
    }, {
        id: "sm",
        interval: 5,
        tickClassName: oe.smTick,
        displayOnZoomLevels: ["md", "sm"],
        displayLabelsOnZoomLevels: ["sm"]
    }, {
        id: "xs",
        interval: 1,
        tickClassName: oe.smTick,
        displayOnZoomLevels: ["sm", "xs"],
        displayLabelsOnZoomLevels: ["xs"]
    }],
    Kl = e => e > 120 ? "lg" : e > 30 ? "md" : e > 5 ? "sm" : "xs",
    ql = (e, t, s) => {
        const o = Math.floor(e / s) * s,
            i = Math.ceil(t / s) + 1;
        return Array.from({
            length: i
        }).map((a, r) => ({
            label: ge(o + s * r),
            time: o + s * r - e
        }))
    },
    zl = ({
        railDuration: e,
        startTimeline: t
    }) => {
        const s = Kl(e),
            o = jl.map(i => w(g({}, i), {
                values: ql(t, e, i.interval)
            }));
        return n(me, null, o.map(i => i.displayOnZoomLevels.includes(s) && i.values.map((a, r) => n("div", {
            key: r,
            className: K(oe.tick, i.tickClassName, oe.nonSelectable),
            style: {
                left: `${a.time/e*100}%`
            }
        }, i.displayLabelsOnZoomLevels.includes(s) && n("span", null, a.label)))))
    },
    sn = ({
        railRef: e,
        position: t,
        disabled: s,
        setPosition: o,
        label: i,
        maxPosition: a,
        minPosition: r,
        className: c,
        onDragStart: l,
        onDragEnd: d,
        showIcon: u = !0,
        isDragging: p,
        setIsDragging: m
    }) => {
        const f = ee(null),
            [h, y] = b(!1),
            _ = () => {
                document.addEventListener("selectstart", k)
            },
            v = () => {
                document.removeEventListener("selectstart", k)
            },
            k = L => {
                L.preventDefault(), L.stopPropagation()
            },
            C = L => {
                s || (m(!1), L.stopPropagation(), y(!0), _(), document.addEventListener("mousemove", T), document.addEventListener("mouseup", S), document.addEventListener("pointerup", S), l && l())
            },
            S = () => {
                setTimeout(() => {
                    m(!1)
                }, 0), y(!1), v(), document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", S), document.removeEventListener("pointerup", S), d && d()
            },
            T = L => {
                if (m(!0), !e.current || !f.current) return;
                const M = e.current.getBoundingClientRect().left,
                    D = e.current.getBoundingClientRect().width,
                    N = (L.clientX - M) / D * 100;
                o && o(a !== void 0 && r !== void 0 ? Math.min(a, Math.max(r, N)) : a !== void 0 ? Math.min(a, N) : r !== void 0 ? Math.max(r, N) : N)
            };
        return n("div", {
            className: c,
            ref: f,
            style: {
                left: `${t}%`
            },
            onMouseDown: C
        }, u && n("div", {
            className: oe.handle
        }), n("div", {
            className: `${oe.tooltip} ${h?oe.visible:oe.hidden} ${oe.nonSelectable}`
        }, i))
    },
    Yl = ({
        divRef: e,
        startTimeline: t,
        railDuration: s,
        active: o
    }) => {
        const [i, a] = b(null), [r, c] = b(!1), l = p => {
            if (e.current) {
                const m = e.current.getBoundingClientRect(),
                    {
                        left: f,
                        width: h
                    } = m,
                    _ = (p.clientX - f) / h * 100,
                    v = t + _ / 100 * s;
                a({
                    x: p.clientX - m.left,
                    time: v
                })
            }
        }, d = () => c(!0), u = () => c(!1);
        return A(() => (e.current && (e.current.addEventListener("mousemove", l), e.current.addEventListener("mouseenter", d), e.current.addEventListener("mouseleave", u)), () => {
            e.current && (e.current.removeEventListener("mousemove", l), e.current.removeEventListener("mouseenter", d), e.current.removeEventListener("mouseleave", u))
        }), [t, s]), o && i && r ? n("div", {
            className: K(oe.shadowContainer, oe.nonSelectable),
            style: {
                left: i.x
            }
        }, n("div", {
            className: oe.shadow
        }), n("div", {
            className: oe.tooltip
        }, ge(i.time, !0))) : null
    },
    Xl = "_containerInline_1v100_1",
    Zl = "_containerElevated_1v100_9",
    Gl = "_videoTrimmerWrapper_1v100_21",
    Jl = "_videoTrimmerSlider_1v100_25",
    Ql = "_videoTrimmerSliderVisible_1v100_32",
    ec = "_durationContainer_1v100_36",
    tc = "_captionsAvailable_1v100_40",
    nc = "_captionsNotAvailable_1v100_45",
    Be = {
        containerInline: Xl,
        containerElevated: Zl,
        videoTrimmerWrapper: Gl,
        videoTrimmerSlider: Jl,
        videoTrimmerSliderVisible: Ql,
        durationContainer: ec,
        captionsAvailable: tc,
        captionsNotAvailable: nc
    };

function sc({
    videoPlayerRef: e,
    videoUpload: t,
    post: s,
    onCancel: o,
    onSubmit: i,
    onSubmitLabel: a,
    minClipDuration: r = 1,
    maxClipDuration: c = Number.MAX_VALUE,
    minTimelineDuration: l = 0,
    maxTimelineDuration: d = Number.MAX_VALUE,
    initialStart: u,
    initialEnd: p,
    showCaptionsButton: m = !0,
    elevated: f
}) {
    var Ne;
    const [h, y] = b(u != null ? u : 0), [_, v] = b(p != null ? p : Math.min(6, (Ne = t == null ? void 0 : t.duration) != null ? Ne : 6)), [k, C] = b(ge(h, !0)), [S, T] = b(ge(_, !0)), [L, M] = b(!1), [D, N] = b(), [B, H] = b(), [O, X] = b(), [E, q] = b(), [J, ae] = b(!1), [re, pe] = b(!0), W = Ko(s), V = Mt(k), ne = Mt(S), {
        iString: j,
        iTemplate: P
    } = de();
    A(() => {
        const G = ce => U(this, null, function*() {
            const {
                body: {
                    src: je
                }
            } = yield Q.get(`/api/v1/video/upload/${ce}/storyboard`), Jt = yield Q.get(je);
            N(Jt.body)
        });
        t != null && t.id && G(t.id)
    }, [t]), A(() => {
        Ae(k) !== h && C(ge(h, !0)), H(void 0)
    }, [h]), A(() => {
        Ae(S) !== _ && T(ge(_, !0)), X(void 0)
    }, [_]);
    const te = G => {
            let ce = !1;
            return G < 0 ? (q(j("Start time must be prior to end time")), ce = !0) : G > c ? (q(j("Clip can't be greater than 60 seconds")), ce = !0) : G < r ? (q(j("Clip must be at least 5 seconds")), ce = !0) : q(void 0), ce
        },
        Z = (G, ce = "start", je = !1) => {
            const Jt = Mt(G);
            if (je || (ce === "start" ? C(G) : T(G)), !Jt) return (ce === "start" ? H : X)(ce === "start" ? P `Start time format must be 0:00.0` : P `End time format must be 0:00.01`), !1;
            const kt = Ae(G),
                Jn = ce === "start" ? Ae(S) - kt : kt - Ae(k);
            let pt = !1;
            return Jn <= 0 ? pt = !0 : (ce === "start" ? H : X)(void 0), pt = te(Jn) || pt, !pt && !je && (ce === "start" ? (y(kt), v(Ae(S))) : (y(Ae(k)), v(kt))), !pt
        },
        le = (G, ce = !1) => Z(G, "start", ce),
        z = (G, ce = !1) => Z(G, "end", ce),
        Y = Ee((G, ce) => {
            Ri(ce) && (G === "start" ? le(ce) : z(ce))
        }, [k, S]),
        Ce = () => U(this, null, function*() {
            var G;
            ae(!0), yield i == null ? void 0 : i({
                start: h,
                duration: _ - h,
                render_transcript_as: L ? "subtitles" : void 0,
                podcast_id: (G = s == null ? void 0 : s.podcastUpload) == null ? void 0 : G.id
            }), ae(!1)
        }),
        he = G => {
            u || p || v(Yt(G / 4, r, 30))
        },
        Te = () => {
            var G;
            $(I.VIDEO_CLIP_LOOP_BUTTON_CLICKED, {
                post_id: s == null ? void 0 : s.id,
                media_upload_id: (G = s == null ? void 0 : s.videoUpload) == null ? void 0 : G.id,
                looping: !re
            }), pe(!re)
        };
    if (!e) return null;
    const Pe = !!B || !!O || !!E;
    return n(Bs, null, n(_e, {
        bg: "primary",
        className: K(f ? Be.containerElevated : Be.containerInline)
    }, n(R, {
        gap: 16,
        paddingX: 4,
        flex: "grow"
    }, n(x, {
        className: Be.videoTrimmerWrapper
    }, n(Fl, {
        videoElement: e,
        start: h,
        setStart: y,
        end: _,
        setEnd: v,
        minDuration: r,
        maxDuration: c,
        maxTimelineDuration: d,
        minTimelineDuration: l,
        looping: re,
        onDurationChange: he,
        storyboard: D
    })), n(me, null, n(x, {
        justifyContent: "space-between",
        alignItems: "center",
        disabled: J,
        opacity: J ? 50 : 100
    }, J ? n(x, {
        justifyContent: "center",
        alignItems: "center",
        marginHeight: 8
    }, n(x, {
        justifyContent: "center",
        alignItems: "center",
        gap: 8
    }, n(ut, null), n(F.B4, {
        weight: "medium",
        translated: !0,
        color: "secondary"
    }, "Saving..."))) : n(x, {
        gap: 16
    }, n(x, {
        gap: 4,
        alignItems: "center",
        onClick: () => W && M(!L),
        disabled: !W,
        className: `${W?Be.captionsAvailable:Be.captionsNotAvailable}`
    }, n(Ut, {
        text: j("Loop video"),
        hoverOptions: {
            delayEnter: 0,
            delayLeave: 0
        }
    }, n(gn, {
        onClick: Te
    }, n(Za, null))), m && n(Ut, {
        text: j("Include subtitles"),
        hoverOptions: {
            delayEnter: 0,
            delayLeave: 0
        }
    }, n(gn, {
        disabled: !W || J
    }, n($a, null)))), n(x, {
        gap: 8
    }, n(yn, {
        error: !V,
        value: k,
        onChange: G => Y("start", G.currentTarget.value)
    }), n(yn, {
        error: !ne,
        value: S,
        onChange: G => Y("end", G.currentTarget.value)
    })), n(x, {
        gap: 4,
        alignItems: "center",
        justifyContent: "space-between",
        className: Be.durationContainer
    }, n(F.B3, {
        weight: "medium",
        color: "secondary"
    }, ge(_ - h, !0)))), n(x, {
        gap: 8
    }, n(Je, {
        priority: "secondary",
        onClick: o
    }, j("Cancel")), n(Je, {
        onClick: Ce,
        disabled: Pe || J
    }, a))), Pe && n(R, null, B && n(x, null, n(F.B4, {
        weight: "medium",
        color: "error"
    }, B)), O && n(x, null, n(F.B4, {
        weight: "medium",
        color: "error"
    }, O)), E && n(x, null, n(F.B4, {
        weight: "medium",
        color: "error"
    }, E)))))))
}
const oc = "_timeline_6fwh0_1",
    ic = "_rail_6fwh0_14",
    ac = "_draggable_6fwh0_21",
    rc = "_draggableLeft_6fwh0_36",
    lc = "_draggableRight_6fwh0_40",
    cc = "_tooltip_6fwh0_44",
    dc = "_visible_6fwh0_62",
    uc = "_hidden_6fwh0_66",
    pc = "_playback_6fwh0_70",
    mc = "_nonSelectable_6fwh0_81",
    hc = "_tick_6fwh0_90",
    fc = "_lgTick_6fwh0_95",
    gc = "_smTick_6fwh0_109",
    _c = "_currentTick_6fwh0_122",
    yc = "_selection_6fwh0_129",
    bc = "_handle_6fwh0_137",
    wc = "_storyboard_6fwh0_146",
    kc = "_ticks_6fwh0_155",
    vc = "_shadow_6fwh0_164",
    Cc = "_shadowContainer_6fwh0_171",
    se = {
        timeline: oc,
        rail: ic,
        draggable: ac,
        draggableLeft: rc,
        draggableRight: lc,
        tooltip: cc,
        visible: dc,
        hidden: uc,
        playback: pc,
        nonSelectable: mc,
        tick: hc,
        lgTick: fc,
        smTick: gc,
        currentTick: _c,
        selection: yc,
        handle: bc,
        storyboard: wc,
        ticks: kc,
        shadow: vc,
        shadowContainer: Cc
    },
    Sc = 120,
    Ec = ({
        videoElement: e,
        start: t,
        setStart: s,
        end: o,
        setEnd: i,
        onDurationChange: a,
        storyboard: r,
        maxDuration: c,
        minDuration: l,
        maxTimelineDuration: d,
        minTimelineDuration: u,
        looping: p = !1
    }) => {
        const [m, f] = b(0), [h, y] = b(0), [_, v] = b(0), [k, C] = b(0), S = ee(0), [T, L] = b({
            isDragging: !1,
            element: void 0
        }), M = E => {
            L(E)
        };
        A(() => {
            const E = () => {
                if (e) {
                    f(e.duration);
                    const q = [Sc, e.duration];
                    d && q.push(d), v(Math.min(...q)), a && a(e.duration)
                }
            };
            return e && e.addEventListener("loadedmetadata", E), e != null && e.duration && E(), () => {
                e && e.removeEventListener("loadedmetadata", E)
            }
        }, [e]), A(() => {
            const E = () => {
                e && C(e.currentTime)
            };
            if (e) return e.addEventListener("timeupdate", E), () => {
                e.removeEventListener("timeupdate", E)
            }
        }, [e]), A(() => {
            const E = Math.abs(k - S.current);
            if (S.current = k, E < 1) {
                p && e && !T.isDragging && (k > o || k < t) && (e.currentTime = t);
                return
            }
            if (!T.isDragging && (k > _ || k < h)) {
                const q = _ - h,
                    J = Math.min(k, m - q);
                y(J), v(J + q)
            }
        }, [k]);
        const D = E => {
                E.preventDefault();
                const q = E.currentTarget.getBoundingClientRect(),
                    J = (E.clientX - q.left) / q.width,
                    ae = _ - h,
                    re = (E.deltaY > 0 ? -1 : 1) * ae / 4,
                    pe = ae - re,
                    W = h + J * ae,
                    V = W - J * pe,
                    ne = W + (1 - J) * pe;
                d && ne - V > d || u && ne - V < u || (v(Math.min(m, ne)), y(Math.max(0, V)))
            },
            N = (E, q) => {
                s(E), i(q), X(E)
            },
            B = Xs(E => {
                e && (e.currentTime = E)
            }, 200),
            H = E => {
                if (l && E + l >= o) {
                    s(o - l);
                    return
                }
                if (c && E + c <= o) {
                    s(o - c);
                    return
                }
                s(E), B(E)
            },
            O = E => {
                if (l && E - l <= t) {
                    i(t + l);
                    return
                }
                if (c && E - c >= t) {
                    i(t + c);
                    return
                }
                i(E), B(E)
            },
            X = E => {
                e && (e.currentTime = E)
            };
        return n("div", {
            className: se.timeline,
            onWheel: D
        }, m > 0 ? n(Mc, {
            startTimeline: h,
            setStartTimeline: y,
            endTimeline: _,
            setEndTimeline: v,
            startPosition: t,
            setStartPosition: H,
            endPosition: o,
            setEndPosition: O,
            setPosition: N,
            playerPosition: k,
            setPlayback: X,
            duration: m,
            onDragging: M,
            storyboard: r
        }) : n(x, {
            alignItems: "center",
            justifyContent: "center"
        }, n(ut, null)))
    },
    Lc = ({
        storyboard: e,
        imageUrl: t,
        x: s,
        y: o,
        displayWidth: i,
        displayHeight: a,
        className: r
    }) => {
        const c = (s ? s / e.tile_width : 0) * i,
            l = (o ? o / e.tile_height : 0) * a,
            d = {
                width: `${i}px`,
                height: `${a}px`,
                backgroundImage: `url(${t})`,
                backgroundPosition: `-${c}px -${l}px`,
                backgroundSize: "500%"
            };
        return n("div", {
            className: r,
            style: d
        })
    };

function Tc(e, t) {
    return e.reduce((s, o) => {
        const i = Math.abs(o.start - t),
            a = Math.abs(s.start - t);
        return i < a ? o : s
    })
}
const Mc = ({
        startTimeline: e,
        setStartTimeline: t,
        endTimeline: s,
        setEndTimeline: o,
        startPosition: i,
        setStartPosition: a,
        endPosition: r,
        setEndPosition: c,
        setPosition: l,
        playerPosition: d,
        setPlayback: u,
        duration: p,
        storyboard: m,
        onDragging: f
    }) => {
        const h = ee(null),
            y = ee(null),
            _ = ee(r - i),
            v = ee(null),
            [k, C] = b({
                isDragging: !1,
                element: void 0
            }),
            S = s - e,
            T = we(() => r - i, [r, i]),
            L = i - e,
            M = r - e,
            D = d - e,
            N = we(() => L / S * 100, [S, L]),
            B = we(() => M / S * 100, [M, S]),
            H = we(() => D / S * 100, [D, S]),
            O = `linear-gradient(to right, 
    rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) calc(${N}% + 6px), 
    rgba(0,0,0,0) calc(${N}% + 6px), rgba(0,0,0,0) calc(${B}% - 6px), 
    rgba(0,0,0,0.5) calc(${B}% - 6px), rgba(0,0,0,0.5) 100%)`,
            X = Ee(j => {
                const P = j / 100 * S;
                a(Math.max(0, P + e))
            }, [S, a, e]),
            E = Ee(j => {
                const P = j / 100 * S;
                c(Math.min(p, P + e))
            }, [p, S, c, e]);
        A(() => {
            f(k)
        }, [k]);
        const q = j => {
                if (j.stopPropagation(), j.preventDefault(), k.isDragging || !h.current) return;
                y.current = j.clientX, _.current = r - i;
                const P = h.current.getBoundingClientRect().left,
                    te = j.clientX - P,
                    Z = h.current.getBoundingClientRect().width,
                    le = te / Z * 100,
                    z = le >= N && le <= B,
                    Y = e + le / 100 * S;
                if (z) u(Y);
                else {
                    const Ce = Yt(Y, 0, p - _.current),
                        he = Ce + _.current;
                    l(Ce, he)
                }
            },
            J = () => {
                document.addEventListener("selectstart", re)
            },
            ae = () => {
                document.removeEventListener("selectstart", re)
            },
            re = j => {
                j.preventDefault(), j.stopPropagation()
            },
            pe = j => {
                if (!h.current) return;
                J(), y.current = j.clientX, _.current = r - i;
                const P = h.current.getBoundingClientRect().left,
                    te = j.clientX - P,
                    Z = h.current.getBoundingClientRect().width,
                    le = te / Z * 100,
                    z = le >= N && le <= B;
                v.current = z, document.addEventListener("mousemove", V), document.addEventListener("mouseup", W), document.addEventListener("pointerup", W)
            },
            W = () => {
                setTimeout(() => {
                    C({
                        isDragging: !1,
                        element: void 0
                    })
                }, 300), y.current = null, v.current = null, ae(), document.removeEventListener("mousemove", V), document.removeEventListener("mouseup", W), document.removeEventListener("pointerup", W)
            },
            V = j => {
                if (y.current === null) return;
                const P = j.clientX - y.current;
                if (C({
                        isDragging: !0,
                        element: "interval"
                    }), !h.current) return;
                const te = h.current.getBoundingClientRect().width,
                    Z = P / te * S,
                    le = i + Z,
                    z = le + _.current;
                v.current ? le < 0 ? (l(0, _.current), t(0)) : z > p ? (l(p - _.current, p), o(p)) : l(le, z) : e - Z > 0 && s - Z <= p && (t(Math.max(0, e - Z)), o(Math.min(p, s - Z)))
            },
            ne = () => {
                var Y, Ce;
                if (!m) return null;
                const j = (Ce = (Y = h == null ? void 0 : h.current) == null ? void 0 : Y.getBoundingClientRect().width) != null ? Ce : 0;
                if (j === 0) return null;

                function P(he, Te, Pe) {
                    const Ne = [],
                        G = Math.floor(he / Pe) * Pe,
                        ce = Math.ceil(Te / Pe) * Pe;
                    for (let je = G; je <= ce; je += Pe) Ne.push(je);
                    return Ne
                }
                const te = 60 * (m.tile_width / m.tile_height),
                    Z = S / j * te,
                    z = P(e, s, Z).map(he => ({
                        time: he,
                        tile: Tc(m.tiles, he)
                    }));
                return n(x, {
                    className: se.storyboard
                }, z.map(({
                    time: he,
                    tile: Te
                }, Pe) => {
                    const Ne = (he - e) / S * 100;
                    return n("div", {
                        style: {
                            position: "absolute",
                            left: `calc(${Ne}% + 6px)`
                        }
                    }, n(Lc, {
                        storyboard: m,
                        key: `${Te.x}-${Te.y}-${Pe}`,
                        imageUrl: m.url,
                        displayHeight: 60,
                        displayWidth: m.tile_width / m.tile_height * 60,
                        x: Te.x,
                        y: Te.y
                    }))
                }))
            };
        return n("div", {
            className: se.rail,
            ref: h,
            onMouseDown: pe,
            onClick: q
        }, ne(), n("div", {
            className: se.nonSelectable,
            style: {
                background: O,
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }
        }), n("div", {
            className: se.ticks
        }, n(Nc, {
            railDuration: S,
            startTimeline: e
        })), n("div", {
            className: K(se.ticks, se.nonSelectable)
        }, n("div", {
            className: se.selection,
            style: {
                left: `calc(${N}% + 6px)`,
                width: `calc(${B-N}% - 12px)`
            }
        })), n(Dc, {
            divRef: h,
            startTimeline: e,
            railDuration: s - e,
            active: !k.isDragging
        }), n("div", {
            className: se.ticks
        }, n(on, {
            className: `${se.draggable} ${se.draggableLeft}`,
            railRef: h,
            label: ge(T != null ? T : 0, !0),
            position: N,
            maxPosition: B,
            setPosition: X,
            isDragging: k.element === "start",
            setIsDragging: j => C(j ? {
                isDragging: !0,
                element: "start"
            } : {
                isDragging: !1,
                element: void 0
            })
        }), n(on, {
            className: `${se.draggable} ${se.draggableRight}`,
            railRef: h,
            label: ge(T != null ? T : 0, !0),
            position: B,
            minPosition: N,
            setPosition: E,
            isDragging: k.element === "end",
            setIsDragging: j => C(j ? {
                isDragging: !0,
                element: "end"
            } : {
                isDragging: !1,
                element: void 0
            })
        }), n(on, {
            className: se.playback,
            railRef: h,
            label: ge(T, !0),
            position: H,
            isDragging: k.isDragging,
            disabled: !0
        })))
    },
    Pc = [{
        id: "lg",
        interval: 60,
        tickClassName: se.lgTick,
        displayOnZoomLevels: ["lg", "md"],
        displayLabelsOnZoomLevels: ["lg"]
    }, {
        id: "md",
        interval: 30,
        tickClassName: se.lgTick,
        displayOnZoomLevels: ["lg", "md"],
        displayLabelsOnZoomLevels: ["md"]
    }, {
        id: "sm",
        interval: 5,
        tickClassName: se.smTick,
        displayOnZoomLevels: ["md", "sm"],
        displayLabelsOnZoomLevels: ["sm"]
    }, {
        id: "xs",
        interval: 1,
        tickClassName: se.smTick,
        displayOnZoomLevels: ["sm", "xs"],
        displayLabelsOnZoomLevels: ["xs"]
    }],
    Ic = e => e > 120 ? "lg" : e > 30 ? "md" : e > 5 ? "sm" : "xs",
    xc = (e, t, s) => {
        const o = Math.floor(e / s) * s,
            i = Math.ceil(t / s) + 1;
        return Array.from({
            length: i
        }).map((a, r) => ({
            label: ge(o + s * r),
            time: o + s * r - e
        }))
    },
    Nc = ({
        railDuration: e,
        startTimeline: t
    }) => {
        const s = Ic(e),
            o = Pc.map(i => w(g({}, i), {
                values: xc(t, e, i.interval)
            }));
        return n(me, null, o.map(i => i.displayOnZoomLevels.includes(s) && i.values.map((a, r) => n("div", {
            key: r,
            className: K(se.tick, i.tickClassName, se.nonSelectable),
            style: {
                left: `${a.time/e*100}%`
            }
        }, i.displayLabelsOnZoomLevels.includes(s) && n("span", null, a.label)))))
    },
    on = ({
        railRef: e,
        position: t,
        disabled: s,
        setPosition: o,
        label: i,
        maxPosition: a,
        minPosition: r,
        className: c,
        onDragStart: l,
        onDragEnd: d,
        showIcon: u = !0,
        isDragging: p,
        setIsDragging: m
    }) => {
        const f = ee(null),
            [h, y] = b(!1),
            _ = () => {
                document.addEventListener("selectstart", k)
            },
            v = () => {
                document.removeEventListener("selectstart", k)
            },
            k = L => {
                L.preventDefault(), L.stopPropagation()
            },
            C = L => {
                s || (m == null || m(!1), L.stopPropagation(), y(!0), _(), document.addEventListener("mousemove", T), document.addEventListener("mouseup", S), document.addEventListener("pointerup", S), l && l())
            },
            S = () => {
                setTimeout(() => {
                    m == null || m(!1)
                }, 0), y(!1), v(), document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", S), document.removeEventListener("pointerup", S), d && d()
            },
            T = L => {
                if (m == null || m(!0), !e.current || !f.current) return;
                const M = e.current.getBoundingClientRect().left,
                    D = e.current.getBoundingClientRect().width,
                    N = (L.clientX - M) / D * 100;
                o && o(a !== void 0 && r !== void 0 ? Math.min(a, Math.max(r, N)) : a !== void 0 ? Math.min(a, N) : r !== void 0 ? Math.max(r, N) : N)
            };
        return n("div", {
            className: c,
            ref: f,
            style: {
                left: `${t}%`
            },
            onMouseDown: C
        }, u && n("div", {
            className: se.handle
        }), n("div", {
            className: `${se.tooltip} ${h?se.visible:se.hidden} ${se.nonSelectable}`
        }, i))
    },
    Dc = ({
        divRef: e,
        startTimeline: t,
        railDuration: s,
        active: o
    }) => {
        const [i, a] = b(null), [r, c] = b(!1), l = p => {
            if (e.current) {
                const m = e.current.getBoundingClientRect(),
                    {
                        left: f,
                        width: h
                    } = m,
                    _ = (p.clientX - f) / h * 100,
                    v = t + _ / 100 * s;
                a({
                    x: p.clientX - m.left,
                    time: v
                })
            }
        }, d = () => c(!0), u = () => c(!1);
        return A(() => (e.current && (e.current.addEventListener("mousemove", l), e.current.addEventListener("mouseenter", d), e.current.addEventListener("mouseleave", u)), () => {
            e.current && (e.current.removeEventListener("mousemove", l), e.current.removeEventListener("mouseenter", d), e.current.removeEventListener("mouseleave", u))
        }), [t, s]), o && i && r ? n("div", {
            className: K(se.shadowContainer, se.nonSelectable),
            style: {
                left: i.x
            }
        }, n("div", {
            className: se.shadow
        }), n("div", {
            className: K(se.tooltip, se.mouseTracker)
        }, ge(i.time, !0))) : null
    },
    E1 = 5,
    L1 = 600,
    T1 = 5,
    It = 30;

function Oc({
    videoPlayerRef: e,
    videoUpload: t,
    post: s,
    onCancel: o,
    onSubmit: i,
    onSubmitLabel: a,
    minClipDuration: r = 1,
    maxClipDuration: c = Number.MAX_VALUE,
    minTimelineDuration: l = 0,
    maxTimelineDuration: d = Number.MAX_VALUE,
    initialStart: u,
    initialEnd: p,
    showCaptionsButton: m,
    elevated: f
}) {
    var W;
    const [h, y] = b(u != null ? u : 0), [_, v] = b(p != null ? p : Math.min(It, (W = t == null ? void 0 : t.duration) != null ? W : It)), [k, C] = b(ge(h, !0)), [S, T] = b(ge(_, !0)), [L, M] = b(!1), [D, N] = b(), [B, H] = b(), [O, X] = b(), [E, q] = b(!1), {
        iString: J
    } = de();
    A(() => {
        const V = ne => U(this, null, function*() {
            const {
                body: {
                    src: j
                }
            } = yield Q.get(`/api/v1/video/upload/${ne}/storyboard`), P = yield Q.get(j);
            N(P.body)
        });
        t != null && t.id && V(t.id)
    }, [t]), A(() => {
        Ae(k) !== h && C(ge(h, !0)), H(void 0)
    }, [h]), A(() => {
        Ae(S) !== _ && T(ge(_, !0)), X(void 0)
    }, [_]);
    const ae = () => U(this, null, function*() {
            var V;
            q(!0), yield i == null ? void 0 : i({
                start: h,
                duration: _ - h,
                render_transcript_as: L ? "subtitles" : void 0,
                podcast_id: (V = s == null ? void 0 : s.podcastUpload) == null ? void 0 : V.id
            }), q(!1)
        }),
        re = V => {
            u || p || v(Yt(V / 4, r, It))
        };
    if (!e) return null;
    const pe = !!B || !!O;
    return n(Bs, null, n(_e, {
        bg: "primary",
        className: K(f ? Be.containerElevated : Be.containerInline)
    }, n(R, {
        gap: 16,
        paddingX: 4,
        flex: "grow"
    }, n(x, {
        className: Be.videoTrimmerWrapper
    }, n(Ec, {
        videoElement: e,
        start: h,
        setStart: y,
        end: _,
        setEnd: v,
        minDuration: r,
        maxDuration: c,
        maxTimelineDuration: d,
        minTimelineDuration: l,
        onDurationChange: re,
        storyboard: D,
        looping: !0
    })), n(me, null, n(x, {
        justifyContent: "space-between",
        alignItems: "center",
        disabled: E,
        opacity: E ? 50 : 100
    }, n(x, {
        alignItems: "center",
        gap: 6,
        cursor: "pointer",
        onClick: () => M(!L)
    }, m && n(me, null, n($s, {
        size: "small",
        label: J("Download with captions"),
        checked: L,
        onChange: () => {}
    }), n(F.B4, {
        color: "primary",
        weight: "semibold"
    }, J("Download with caption")))), n(x, {
        gap: 8
    }, n(Je, {
        priority: "secondary-outline",
        onClick: o
    }, J("Cancel")), typeof a == "string" ? n(Je, {
        priority: "primary",
        onClick: ae,
        disabled: pe || E
    }, a) : a == null ? void 0 : a(ae))), pe && n(R, null, B && n(x, null, n(F.B4, {
        weight: "medium",
        color: "error"
    }, B)), O && n(x, null, n(F.B4, {
        weight: "medium",
        color: "error"
    }, O)))))))
}
const ys = 5,
    Rc = 60,
    Ac = 600,
    Bc = 5,
    Uc = e => {
        var c;
        const r = e,
            {
                visible: t,
                onCancel: s
            } = r,
            o = De(r, ["visible", "onCancel"]),
            {
                setIsClipping: i
            } = (c = Ve(Fn)) != null ? c : {},
            a = () => {
                var l;
                t && $(I.VIDEO_CLIP_CREATE_MODAL_CLOSED, {
                    post_id: (l = e.post) == null ? void 0 : l.id
                }), s(), i == null || i(!1)
            };
        return pr(e.containerRef, a), t ? n(x, {
            className: K(Be.videoTrimmerSlider, {
                [Be.videoTrimmerSliderVisible]: t
            })
        }, n($c, w(g({}, o), {
            onCancel: a
        }))) : null
    },
    $c = ({
        videoPlayerRef: e,
        videoUpload: t,
        post: s,
        onCancel: o
    }) => {
        var p, m, f;
        const i = Ge(),
            a = Oe(),
            r = yl(),
            {
                iString: c
            } = de(),
            l = Ge().getConfigFor("clipper_v2"),
            d = l ? Oc : sc;
        return A(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }, []), n(d, {
            videoPlayerRef: e,
            videoUpload: t,
            post: s,
            onCancel: o,
            onSubmit: h => U(void 0, null, function*() {
                var y, _;
                $(I.VIDEO_CLIP_CREATE_BUTTON_CLICKED, {
                    post_id: s == null ? void 0 : s.id,
                    media_upload_id: (y = s == null ? void 0 : s.videoUpload) == null ? void 0 : y.id,
                    start_time: h.start,
                    end_time: h.start + h.duration
                }), e && setTimeout(() => e.pause(), 100);
                try {
                    const v = yield Q.post(`/api/v1/video/assets/${t==null?void 0:t.id}/clips`).send(h);
                    if (i.getConfigFor("clipper_v2")) r.addMediaUpload({
                        mediaUpload: v.body.mediaUpload,
                        thumbnailUrl: Wt(t)
                    });
                    else {
                        window.history.pushState({}, "", at(window.location.href, {
                            clipId: (_ = v.body.mediaUpload) == null ? void 0 : _.id,
                            share: !0
                        }));
                        const C = new Event("urlchange");
                        setTimeout(() => {
                            window.dispatchEvent(C)
                        }, 300)
                    }
                    return o(), h
                } catch (v) {
                    console.error(v), a.popToast(k => n(Se, w(g({}, k), {
                        text: c("Error creating clip")
                    })))
                }
            }),
            onSubmitLabel: l ? h => n(Je, {
                leading: n(ct, {
                    size: 20
                }),
                onClick: h
            }, c("Download")) : c("Create clip"),
            minClipDuration: ys,
            maxClipDuration: Rc,
            minTimelineDuration: Bc,
            maxTimelineDuration: Ac,
            showCaptionsButton: !0,
            elevated: !0,
            initialStart: Math.max(0, (p = e == null ? void 0 : e.currentTime) != null ? p : 0),
            initialEnd: Math.min((m = t.duration) != null ? m : ys, ((f = e == null ? void 0 : e.currentTime) != null ? f : 0) + It)
        })
    },
    Fc = 5,
    Hc = "video:playback_location:",
    Vc = 4 * 60,
    Wc = 5,
    jc = 60,
    Kc = 3,
    qc = 60,
    bs = {
        hls: "application/x-mpegURL",
        mp4: "video/mp4"
    };
class ws extends Mn {
    constructor(t, s) {
        var c;
        super(t, s), this.player = null, this.previewHiddingTimeout = null, this.containerRef = Pn(), this.onLoadedMetadata = () => {
            this.state.playbackRestoreLocation && (this.player && (this.player.currentTime = this.state.playbackRestoreLocation), this.previewHiddingTimeout = window.setTimeout(() => this.setState({
                playbackRestoreLocation: null,
                previewHidden: !0
            }), 3 * 1e3))
        }, this.onLoadedData = () => {
            this.state.playbackRestoreLocation && (this.previewHiddingTimeout && clearTimeout(this.previewHiddingTimeout), this.setState({
                playbackRestoreLocation: null,
                previewHidden: !0
            }))
        }, this.onCanPlay = () => {
            this.onTimeUpdate()
        }, this.onPlay = () => {
            var l;
            (l = Ct) == null || l.emit("play", this), this.setState({
                playing: !0
            }), this.track(I.VIDEO_PLAY_BUTTON_CLICKED)
        }, this.onPause = () => {
            this.setPlaybackRestoreLocation(), this.setState({
                playing: !1,
                waiting: !1
            }), this.track(I.VIDEO_PAUSE_BUTTON_CLICKED), this.player && this.player.currentTime > this.player.duration - .1 && this.onVideoReachEnd()
        }, this.onTimeUpdate = () => {
            !this.player || !isFinite(this.player.duration) || (!this.props.duration && this.state.duration !== this.player.duration || this.state.currentTime !== this.player.currentTime ? this.setState({
                duration: this.props.duration || this.player.duration,
                currentTime: this.player.currentTime,
                waiting: !1
            }) : this.setState({
                waiting: !1
            }))
        }, this.onWaiting = () => {
            this.setState({
                waiting: Date.now()
            })
        }, this.onPlaying = () => {
            this.previewHiddingTimeout && clearTimeout(this.previewHiddingTimeout), this.setState({
                playing: !0,
                waiting: !1,
                previewHidden: !0,
                attemptingToPlay: !1,
                autoPlay: !1,
                hasPlayed: !0
            })
        }, this.onVideoReachEnd = ({
            resetTime: l = !0
        } = {}) => {
            this.player && !this.player.paused && this.player.pause(), this.state.previewHidden && this.setState({
                previewHidden: !1,
                attemptingToPlay: !1,
                hasReachedEnd: !0
            }), l && this.player && !qo() && !this.props.doNotResetOnEnd && (this.player.currentTime = 0), ns(), zo(), this.props.onFinishVideo && this.props.onFinishVideo()
        }, this.onPreviewClick = l => {
            var d, u;
            this.props.stopPropagation && (l.preventDefault(), l.stopPropagation()), !this.state.previewHidden && (this.href() || this.playbackEnabled() && (this.state.attemptingToPlay ? (this.setState({
                attemptingToPlay: !1,
                autoPlay: !1
            }), (d = this.player) == null || d.pause(), this.previewHiddingTimeout && clearTimeout(this.previewHiddingTimeout)) : (this.setState({
                attemptingToPlay: !0
            }), (u = this.player) == null || u.play(), this.previewHiddingTimeout = window.setTimeout(() => this.setState({
                previewHidden: !0
            }), 3 * 1e3))))
        }, this.onContextMenu = l => {
            l.preventDefault()
        }, this.onAllSourcesFailed = () => {
            var l, d;
            console.error("Failed to load all video sources, falling back to preview image"), this.setState({
                previewHidden: !1,
                attemptingToPlay: !1,
                autoPlay: !1,
                allSourcesFailed: !0
            }), (d = (l = this.props).onPlaybackFailed) == null || d.call(l)
        }, this.onBeforeUnload = () => {
            this.setPlaybackRestoreLocation(), this.state.previewHidden && this.setState({
                previewHidden: !1,
                attemptingToPlay: !1
            }), this.player && !this.player.paused && this.player.pause()
        }, this.onGlobalPlay = l => {
            this !== l && this.player && !this.player.paused && (this.track(I.VIDEO_PAUSE_BUTTON_CLICKED, {
                implicit: !0
            }), this.player.pause())
        }, this.onGlobalKeyDown = l => {
            var d;
            this.props.noKeyboardShortcuts || l.metaKey || l.altKey || l.ctrlKey || document.activeElement !== document.body || !this.player || ((d = Ct) == null ? void 0 : d.listenerCount("play")) > 1 && this.player.paused || (l.key === "f" ? ss() ? ns() && l.preventDefault() : (Yo(this.player) && l.preventDefault(), this.player.paused && this.player.play()) : l.key === " " && !ss() ? (l.preventDefault(), this.player.paused ? this.player.play() : this.player.pause()) : l.key === "ArrowRight" ? this.player.currentTime + 5 > this.player.duration ? this.onVideoReachEnd() : (this.player.currentTime += 5, this.state.previewHidden || this.setState({
                previewHidden: !0,
                attemptingToPlay: !1
            })) : l.key === "ArrowLeft" && (this.player.currentTime -= 5))
        }, this.cta = () => "", this.href = () => this.props.href, this.playbackEnabled = () => !0;
        const o = typeof window != "undefined" ? Xo(window.location.href) : {};
        let i = null;
        o.timestamp ? i = parseInt(o.timestamp) : o.t && (i = parseInt(o.t));
        const a = i !== null && !isNaN(i);
        a || un("timestamp");
        const r = a ? i : this.getPlaybackRestoreLocation();
        this.state = {
            playbackRestoreLocation: r,
            currentTime: 0,
            waiting: !0,
            duration: (c = t.mediaUpload.duration) != null ? c : null,
            autoPlay: t.autoPlay,
            playing: !1,
            attemptingToPlay: t.autoPlay,
            previewHidden: r !== null && r > 0,
            hasPlayed: !1,
            hasReachedEnd: !1,
            browserCanPlayHLS: !1,
            useHLSJS: !0,
            HLSerrored: !1,
            allSourcesFailed: !1,
            failedAutoplay: !1,
            sources: {}
        }
    }
    componentDidMount() {
        var t;
        this._initHlsjs(), (t = Ct) == null || t.on("play", this.onGlobalPlay), typeof window != "undefined" && (document.addEventListener("keydown", this.onGlobalKeyDown, !1), window.addEventListener("beforeunload", this.onBeforeUnload, !1)), this.player && (this.player.volume = 1, this.player.addEventListener("loadedmetadata", this.onLoadedMetadata), this.player.addEventListener("loadeddata", this.onLoadedData), this.player.addEventListener("canplay", this.onCanPlay), this.player.addEventListener("play", this.onPlay), this.player.addEventListener("pause", this.onPause), this.player.addEventListener("timeupdate", this.onTimeUpdate), this.player.addEventListener("waiting", this.onWaiting), this.player.addEventListener("playing", this.onPlaying), this.player.addEventListener("contextmenu", this.onContextMenu)), this.onTimeUpdate(), !this.props.isStatic && window && window._preloads.mux_env_key && nt(() =>
            import ("./mux-bfc65288.js").then(s => s.m), ["assets/mux-bfc65288.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js"]).then(s => {
            const o = s.default || s;
            o.monitor(this.player, {
                Hls: this.hlsModule,
                hlsjs: this.hls,
                debug: !1,
                data: {
                    env_key: window._preloads.mux_env_key,
                    player_name: "substack",
                    player_init_time: o.utils.now()
                }
            })
        })
    }
    componentWillUnmount() {
        var t;
        this.setPlaybackRestoreLocation(), (t = Ct) == null || t.off("play", this.onGlobalPlay), typeof window != "undefined" && (document.removeEventListener("keydown", this.onGlobalKeyDown, !1), window.removeEventListener("beforeunload", this.onBeforeUnload, !1)), this.player && (this.player.removeEventListener("loadedmetadata", this.onLoadedMetadata), this.player.removeEventListener("loadeddata", this.onLoadedData), this.player.removeEventListener("canplay", this.onCanPlay), this.player.removeEventListener("play", this.onPlay), this.player.removeEventListener("pause", this.onPause), this.player.removeEventListener("timeupdate", this.onTimeUpdate), this.player.removeEventListener("waiting", this.onWaiting), this.player.removeEventListener("playing", this.onPlaying), this.player.removeEventListener("contextmenu", this.onContextMenu)), this.onVideoReachEnd({
            resetTime: !1
        }), this.hls != null && this.hls.destroy()
    }
    componentDidUpdate(t, s) {
        var o, i;
        if ((this.props.noPreview !== t.noPreview || this.props.noControls !== t.noControls || this.props.noKeyboardShortcuts !== t.noKeyboardShortcuts) && this._initHlsjs(), !this.state.playing && typeof this.state.waiting == "number" && typeof s.waiting != "number") {
            const {
                useHLSJS: a,
                browserCanPlayHLS: r,
                HLSerrored: c
            } = this.state;
            this.track(I.VIDEO_BUFFERING_STARTED, {
                use_hlsjs: a,
                browser_can_play_hls: r,
                hls_errored: c
            })
        }
        if (this.state.playing && !s.playing && !this.state.waiting && typeof s.waiting == "number" && this.track(I.VIDEO_BUFFERING_COMPLETED, {
                buffering_duration: Date.now() - s.waiting
            }), this.state.playing && Math.floor(this.state.currentTime) !== Math.floor(s.currentTime) && Math.floor(this.state.currentTime) % Fc === 0 && this.track(I.VIDEO_PLAYBACK_CONTINUED), !this.state.playing && s.playing && ((o = this.player) != null && o.ended) && this.track(I.VIDEO_PLAYBACK_COMPLETED), this.props.mediaUpload.id && pn("use_preloaded_player_sources") && (this.props.mediaUpload.id !== t.mediaUpload.id || !((i = Object.keys(this.state.sources)) != null && i.length))) {
            const a = r => U(this, null, function*() {
                return fetch(at(`/api/v1/video/upload/${this.props.mediaUpload.id}/src.json`, {
                    type: r
                })).then(c => c.json()).then(c => ({
                    [r]: c.src
                }))
            });
            Promise.all(["hls"].map(r => a(r))).then(r => {
                const c = r.reduce((l, d) => g(g({}, l), d), {});
                this.setState({
                    sources: c
                })
            })
        }
    }
    getPlaybackLocationKey() {
        return `${Hc}${this.props.mediaUpload.id}`
    }
    getPlaybackRestoreLocation() {
        if (this.playbackEnabled() && this.props.restorePlaybackLocation && this.props.mediaUpload.duration && this.props.mediaUpload.duration > Vc) {
            const t = Ws(this.getPlaybackLocationKey());
            if ((t == null ? void 0 : t.currentTime) > Wc && this.props.duration !== null && this.props.duration !== void 0 && this.props.duration - t.currentTime > jc) {
                const s = Date.now() - t.watchedAt > qc ? Kc : 0,
                    o = Math.max(0, t.currentTime - s);
                if (o) return o
            }
        }
        return null
    }
    setPlaybackRestoreLocation() {
        var t;
        this.playbackEnabled() && ((t = this.player) != null && t.currentTime) && Rn(this.getPlaybackLocationKey(), {
            currentTime: this.player.currentTime,
            watchedAt: Date.now()
        })
    }
    track(t, s = {}) {
        var a, r, c, l;
        const o = this.props.mediaUpload.post_id,
            i = this.props.mediaUpload.user_id;
        $(t, Object.assign({
            post_id: o,
            video_user_id: i,
            media_upload_id: this.props.mediaUpload.id,
            current_time: this.state.currentTime ? Math.floor(this.state.currentTime) : 0,
            duration: this.state.duration ? Math.floor(this.state.duration) : 0,
            is_clip: (a = this.props.isClip) != null ? a : !1,
            surface: this.props.surface,
            is_preview: (r = this.props.usePreview) != null ? r : !1,
            muted: (l = (c = this.player) == null ? void 0 : c.muted) != null ? l : !1,
            type: this.props.videoType
        }, s))
    }
    render(t, s) {
        var c;
        const {
            height: o,
            width: i
        } = Zo(t.mediaUpload, {
            isStatic: t.isStatic
        }), a = {
            paddingBottom: `${Math.min(60,100*o/i).toFixed(4)}%`
        }, r = K("video-player", {
            "video-player-clip": t.clippingMode,
            "video-player-with-background": !t.omitBackgroundColor
        }, t.videoPlayerClassName);
        return n("div", {
            ref: this.containerRef,
            className: K("video-player-wrapper", t.className, {
                "with-preview": !s.previewHidden,
                "is-static": t.isStatic,
                "full-width": i >= 960,
                "video-player-wrapper-clip": t.clippingMode,
                "video-player-with-background": !t.omitBackgroundColor
            }),
            onClick: this.onPreviewClick
        }, this.href() ? n("a", {
            className: r,
            href: this.href(),
            style: a
        }, this.renderPlayer(this.props, this.state)) : n("div", {
            className: r,
            style: a
        }, this.renderPlayer(this.props, this.state)), n(Uc, {
            visible: this.props.clippingMode,
            videoPlayerRef: this.player,
            containerRef: (c = this.props.clippingModeRef) != null ? c : this.containerRef,
            videoUpload: this.props.mediaUpload,
            post: this.props.post,
            onCancel: () => {
                var l, d;
                return (d = (l = this.props).onClippingModeCancel) == null ? void 0 : d.call(l)
            }
        }))
    }
    renderPlayer({
        hidePlayButton: t,
        mediaUpload: s,
        podcastUpload: o,
        pub: i,
        reaction_token: a = null,
        isStatic: r,
        noControls: c,
        noPreview: l,
        renderPlayButton: d,
        startMuted: u,
        usePreview: p,
        videoClassName: m
    }, {
        autoPlay: f,
        attemptingToPlay: h,
        previewHidden: y,
        useHLSJS: _,
        browserCanPlayHLS: v,
        HLSerrored: k,
        failedAutoplay: C
    }) {
        const S = !l && !y,
            T = r || !this.playbackEnabled(),
            L = at(`/api/v1/video/upload/${s.id}/src`, {
                token: a,
                override_publication_id: i == null ? void 0 : i.id,
                preview: p
            });
        let M = [];
        v ? M = ["hls", "mp4"] : _ ? M = [] : Go() ? M = ["hls", "mp4"] : k ? M = ["mp4"] : M = ["hls", "mp4"];
        const D = jt(),
            N = !!pn("use_preloaded_player_sources") && D,
            B = f && !C && this.playbackEnabled(),
            H = !c && !S,
            O = `${Jo(s)}?refresh=${s.updated_at}`,
            X = D ? void 0 : O;
        return [this.playbackEnabled() && !r && typeof window != "undefined" && n("video", {
            ref: E => this.player = E,
            controls: H,
            controlsList: "nodownload",
            autoPlay: B,
            poster: X,
            muted: u,
            className: m
        }, N ? Object.entries(this.state.sources).map(([E, q], J) => n("source", {
            key: `${E}_${J}`,
            src: q,
            type: bs[E],
            onError: J === Object.keys(this.state.sources).length - 1 ? this.onAllSourcesFailed : void 0
        })) : M.map((E, q) => n("source", {
            key: `${E}_${q}`,
            src: at(L, {
                type: E
            }),
            type: bs[E],
            onError: q === M.length - 1 ? this.onAllSourcesFailed : void 0
        }))), S && !t && n(me, null, T && n("img", {
            className: "video-player-preview",
            "data-testid": r ? "video-player-static-preview-image" : "",
            width: 550,
            src: Wt(s, {
                pub: i,
                isStatic: r,
                variant: "shows"
            }),
            "data-component-name": "VideoPlayer-PreviewImg"
        }), !r && !d && n("div", {
            className: K("video-player-button", {
                "no-text": !this.cta()
            })
        }, n("a", {
            className: "primary",
            href: this.href(),
            native: !0
        }, n(sa, {
            className: K({
                loading: h && this.playbackEnabled()
            })
        }, n(ul, {
            alt: "play",
            stroke: "#FFFFFF",
            fill: "#FFFFFF"
        }), n("span", null, this.cta())))), !r && d && n(Us, {
            position: "absolute",
            style: {
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)"
            }
        }, d()))]
    }
    _initHlsjs() {
        const t = !!(this.player && this.player.canPlayType("application/vnd.apple.mpegurl"));
        if (t) {
            this.setState({
                browserCanPlayHLS: t
            });
            return
        }
        nt(() =>
            import ("./hls-f0261e50.js").then(s => s.h), ["assets/hls-f0261e50.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js"]).then(s => {
            this._initHlsjsWrapped(s.default)
        })
    }
    _initHlsjsWrapped(t) {
        const s = this,
            o = t.isSupported();
        if (!t.isSupported()) {
            this.setState({
                useHLSJS: o
            });
            return
        }
        this.hls != null && this.hls.destroy();
        const i = {},
            a = new t(g({
                enableWorker: !1
            }, i));
        this.player != null && a.attachMedia(this.player);
        const {
            mediaUpload: r,
            pub: c,
            reaction_token: l = null
        } = this.props, d = at(`/api/v1/video/upload/${r.id}/src`, {
            token: l,
            override_publication_id: c == null ? void 0 : c.id,
            type: "hls",
            preview: this.props.usePreview
        });
        a.on(t.Events.MEDIA_ATTACHED, () => {
            a.loadSource(d), a.on(t.Events.MANIFEST_PARSED, () => {
                var u;
                this.state.autoPlay && ((u = this.player) == null || u.play().catch(() => {
                    console.log("Unable to autoplay prior to user interaction with the dom."), this.setState({
                        failedAutoplay: !0,
                        attemptingToPlay: !1
                    })
                }))
            })
        }), a.on(t.Events.ERROR, function(u, p) {
            if (p.fatal) switch (p.type) {
                case t.ErrorTypes.NETWORK_ERROR:
                    s.setState({
                        useHLSJS: !1
                    }), s.hls.destroy(), a.startLoad();
                    break;
                case t.ErrorTypes.MEDIA_ERROR:
                    a.recoverMediaError();
                    break;
                default:
                    this._initHlsjs();
                    break
            }
        }), this.hls = a, this.hlsModule = t
    }
}
const zc = "_placeholder_17gkd_1",
    Yc = "_placeholderMessage_17gkd_11",
    an = {
        placeholder: zc,
        placeholderMessage: Yc
    },
    to = e => {
        const [t, s] = b(null), [o, i] = b(null), [a, r] = b(!0), [c, l] = b(null), [d, u] = b(null), p = () => U(void 0, null, function*() {
            const f = yield Q.get(`/api/v1/video/upload/${e}`);
            s(f.body);
            const {
                id: h,
                state: y
            } = f.body;
            if (["uploaded", "transcoded"].includes(y) && !o) {
                const _ = `/api/v1/video/upload/${h}/src.json?type=original`,
                    {
                        body: {
                            src: v
                        }
                    } = yield Q.get(_);
                i(v)
            }
        }), m = () => U(void 0, null, function*() {
            const f = yield Q.get(`/api/v1/video/upload/${e}/assets`), {
                mux_asset: h,
                mux_preview_asset: y
            } = f.body;
            l(h), u(y)
        });
        return A(() => {
            p(), m()
        }, [e]), A(() => {
            const f = setInterval(() => {
                const h = () => U(void 0, null, function*() {
                    const y = yield Q.get(`/api/v1/video/upload/${e}`), {
                        id: _,
                        mux_rendition_quality: v,
                        state: k
                    } = y.body;
                    if (s(y.body), v && clearInterval(f), ["uploaded", "transcoded"].includes(k) && !o) {
                        const C = `/api/v1/video/upload/${_}/src.json?type=original`,
                            {
                                body: {
                                    src: S
                                }
                            } = yield Q.get(C);
                        i(S)
                    } else m()
                });
                (t == null ? void 0 : t.state) === "error" ? (console.warn("error creating clip"), clearInterval(f)) : t != null && t.mux_rendition_quality ? clearInterval(f) : h()
            }, 5e3);
            return () => {
                clearInterval(f)
            }
        }, [t]), {
            mediaUpload: t,
            loading: a,
            downloadUrl: o,
            muxAsset: c,
            muxPreviewAsset: d
        }
    };

function Xc({
    user: e,
    pub: t,
    post: s,
    mediaUploadId: o,
    isOpen: i,
    onClose: a
}) {
    var v;
    const r = Pn(),
        {
            mediaUpload: c,
            downloadUrl: l,
            muxPreviewAsset: d
        } = to(o);
    A(() => {
        o && $(I.VIDEO_CLIP_SEEN, {
            post_id: s.id,
            clip_id: o
        })
    }, [o]);
    const u = () => U(this, null, function*() {
            c && (yield Zs(c))
        }),
        p = () => {
            $(I.VIDEO_CLIP_WATCH_FULL_EPISODE_BUTTON_CLICKED, {
                name: "watch full episosde",
                post_id: s ? s.id : null,
                utm_campaign: yt.substackClips,
                utm_medium: et.web
            }), window.history.pushState({}, "", at(window.location.href, {
                clipId: void 0,
                share: void 0
            })), a()
        };
    if (!c) return null;
    const f = new URL(window.location.href).searchParams.get("share") !== null,
        h = ["uploaded", "transcoded"].includes(c.state),
        y = jt();
    let _ = "creating";
    return c.state === "error" ? _ = "error" : c.state === "transcoded" ? _ = "transcoded" : c.state === "uploaded" ? _ = "uploaded" : c.mux_preview_playback_id !== null && (d == null ? void 0 : d.status) === "ready" && (_ = "preview"), n(xe, {
        opacity: "dark",
        width: 640,
        fullscreenMobile: !0,
        isOpen: i,
        onClose: a
    }, n(dt, {
        includeClose: !0,
        title: f ? "Share Clip" : "Clip",
        onClose: a,
        description: n(x, null, n("span", null, `✂️ ${Ai((v=c.duration)!=null?v:0)} | ${s.title}`))
    }), n(qt, null, _ === "transcoded" && n(ws, {
        ref: r,
        mediaUpload: c,
        pub: t,
        autoPlay: !1,
        isClip: !0
    }), _ === "preview" && n(ws, {
        ref: r,
        mediaUpload: c,
        pub: t,
        autoPlay: !1,
        isClip: !0,
        usePreview: !0
    }), _ === "uploaded" && l && n("div", {
        class: "video-player-wrapper"
    }, n("div", {
        class: "video-player"
    }, n("video", {
        src: l,
        type: "video/mp4",
        controls: !0
    }))), _ === "creating" && n(x, null, n(R, {
        className: an.placeholder,
        justifyContent: "center",
        alignItems: "center"
    }, n(R, {
        justifyContent: "center",
        alignItems: "center",
        className: an.placeholderMessage,
        gap: 8
    }, n(ut, null), n(F.B3, {
        weight: "bold"
    }, "Your clip is being processed"), n(F.B4, {
        weight: "medium",
        color: "secondary",
        align: "center"
    }, "Clips may take up to a minute to process. Meanwhile, ", n("b", null, "share your clip link below"))))), _ === "error" && n(x, null, n(R, {
        className: an.placeholder
    }, n(bn, {
        color: "gray"
    }), n(F.B4, {
        weight: "medium",
        color: "secondary"
    }, "Oops! There was an error creating the clip"))), _ !== "error" && n(R, {
        paddingTop: 16
    }, n(Fs, null), n(Us, null, n(x, {
        justifyContent: "space-between",
        flex: "grow",
        paddingTop: 16
    }, !f && n(x, null, y ? n(Ie, {
        fill: "filled",
        priority: "primary-theme",
        rounded: !1,
        onClick: p
    }, n(Ya, null)) : n(Le, {
        fill: "filled",
        priority: "primary-theme",
        rounded: !1,
        onClick: p
    }, "Watch full episode")), n(dl, {
        shareUrl: (k, C, S) => Dn(k, {
            clip: c,
            post: s,
            pub: t,
            medium: S,
            utm_campaign: C
        }),
        pub: t,
        clip: c,
        post: s,
        selectionId: void 0,
        disabled: !1,
        disabledInstagram: !h,
        disabledDownload: !h,
        onDownloadClick: u,
        isSharing: f
    }))))))
}

function M1(e) {
    const {
        user: t,
        pub: s,
        post: o,
        mediaUploadId: i
    } = e, [a, r] = b(!0), [c, l] = b(i);
    A(() => {
        const m = () => {
            const h = new URLSearchParams(window.location.search).get("clipId");
            l(h), r(!0)
        };
        return window.addEventListener("urlchange", m), window.addEventListener("popstate", m), m(), () => {
            window.removeEventListener("urlchange", m), window.removeEventListener("popstate", m)
        }
    }, []);
    const {
        mediaUpload: d,
        loading: u
    } = ur({
        mediaUploadId: c
    });
    if (u || !d) return null;
    const p = () => {
        r(!1), $(I.VIDEO_CLIP_MODAL_CLOSED, {
            post_id: o == null ? void 0 : o.id,
            clip_id: c
        })
    };
    return n(Xc, w(g({}, e), {
        mediaUploadId: c,
        isOpen: a,
        onClose: p
    }))
}
const Zc = ({
        post: e,
        mediaUpload: t,
        disabled: s,
        onClipClick: o,
        style: i
    }) => {
        var p;
        const [a, r] = $i(mr), c = ((p = t == null ? void 0 : t.duration) != null ? p : 0) > 5, l = () => {
            if (c) {
                if (s) return "upgrade in order to watch this video and be able to clip it"
            } else return "can't clip videos shorter than 5 seconds";
            return ""
        }, d = !c || s, u = m => {
            r(), c && o && (o(m), $(I.VIDEO_CLIP_BUTTON_CLICKED, {
                post_id: e.id
            }))
        };
        return n($e, {
            title: l(),
            isDisabled: d,
            style: i,
            onClick: u,
            icon: n(Ga, {
                className: "icon",
                height: Ue(i),
                strokeWidth: Xe
            })
        })
    },
    Gc = e => n(ye, w(g({}, e), {
        name: "LucideArrowUpRight",
        svgParams: {
            height: 24,
            width: 24
        }
    }), n(Aa, {
        height: 24,
        stroke: e.stroke,
        fill: e.fill,
        strokeWidth: e.strokeWidth
    })),
    Jc = e => n(ye, w(g({}, e), {
        name: "ShareFbIcon",
        svgParams: {
            height: 24,
            width: 24,
            stroke: "none"
        }
    }), n("g", {
        "clip-path": "url(#clip0_2063_103618)"
    }, n("circle", {
        cx: "12",
        cy: "12",
        r: "12",
        fill: "white",
        stroke: "none"
    }), n("path", {
        d: "M9.101 23.647V15.667H6.627V12H9.101V10.42C9.101 6.335 10.949 4.442 14.959 4.442C15.36 4.442 15.914 4.484 16.427 4.545C16.8112 4.58454 17.1924 4.64968 17.568 4.74V8.065C17.3509 8.04475 17.133 8.03274 16.915 8.029C16.6707 8.02266 16.4264 8.01966 16.182 8.02C15.475 8.02 14.923 8.116 14.507 8.329C14.2273 8.46931 13.9922 8.68468 13.828 8.951C13.57 9.371 13.454 9.946 13.454 10.703V12H17.373L16.987 14.103L16.7 15.667H13.454V23.912C19.396 23.194 24 18.135 24 12C24 5.373 18.627 0 12 0C5.373 0 0 5.373 0 12C0 17.628 3.874 22.35 9.101 23.647Z",
        fill: "#0866FF",
        stroke: "none"
    })), n("defs", null, n("clipPath", {
        id: "clip0_2063_103618"
    }, n("rect", {
        width: "24",
        height: "24",
        fill: "white",
        stroke: "none"
    })))),
    Qc = e => n(ye, w(g({}, e), {
        name: "ShareLinkedinIcon",
        svgParams: {
            height: 24,
            width: 24,
            stroke: "none"
        }
    }), n("g", {
        "clip-path": "url(#clip0_2099_103632)"
    }), n("rect", {
        x: "1",
        y: "1",
        width: "22",
        height: "22",
        fill: "white",
        stroke: "none"
    }), n("path", {
        d: "M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166L20.447 20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z",
        fill: "#0A66C2",
        stroke: "none"
    }), n("defs", null, n("clipPath", {
        id: "clip0_2099_103632"
    }, n("rect", {
        width: "24",
        height: "24",
        fill: "white",
        style: "fill:white;fill-opacity:1;"
    })))),
    no = Ye({
        open: () => {}
    });

function P1({
    children: e
}) {
    var i;
    const [t, s] = b(null), o = we(() => ({
        open: a => s(a)
    }), []);
    return n(no.Provider, {
        value: o
    }, e, n(td, w(g({}, t), {
        source: (i = t == null ? void 0 : t.source) != null ? i : "substack",
        isOpen: !!t,
        onClose: () => s(null)
    })))
}

function ed() {
    return Ve(no)
}

function td(o) {
    var i = o,
        {
            isOpen: e,
            onClose: t
        } = i,
        s = De(i, ["isOpen", "onClose"]);
    return n(xe, {
        isOpen: e,
        onClose: t
    }, n(An, w(g({}, s), {
        module: "./DmShareModal",
        onRequest: () => nt(() =>
            import ("./DmShareModal-9213dbb0.js"), ["assets/DmShareModal-9213dbb0.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/CommunityPostView-c90ac03a.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/react-6ae938e8.js", "assets/useResponsive-08e338a7.js", "assets/linkify-91f62846.js", "assets/ProfileHoverCard-c8bfb61a.js", "assets/_defineProperty-105d261c.js", "assets/user-e16f1619.js", "assets/user-856acd57.css", "assets/Tooltip-86d56346.js", "assets/react-laag.esm-f47be925.js", "assets/transition-c6a4911b.js", "assets/Tooltip-d0af0cf2.css", "assets/isObject-a54dc090.js", "assets/_defineProperty-e9841d58.css", "assets/HoverCard-cbdee1d2.js", "assets/x-fc38e969.js", "assets/HoverCard-41ea4b50.css", "assets/Menu-5342012d.js", "assets/Divider-0a4efe7e.js", "assets/Divider-f25512a6.css", "assets/chevron-right-925bdc12.js", "assets/Menu-9123dbf7.css", "assets/profile-a781fd85.js", "assets/UserBadge-a694a663.js", "assets/UserBadge-fb9c174e.css", "assets/routeClick-cd1b3f9b.js", "assets/ProfileHoverCard-40cbd77e.css", "assets/debounce-f31b8252.js", "assets/toNumber-3c911b0f.js", "assets/search-166a516b.js", "assets/Progress-629d3819.js", "assets/Progress-f0f26f86.css", "assets/podcast_apps-4f303ac3.js", "assets/podcast_apps-184969d7.css", "assets/CommentBody-36a2d638.js", "assets/traverse-bb97748e.js", "assets/CommentBody-c55cfff6.css", "assets/mention-8372bb04.js", "assets/_baseEach-63ad03e0.js", "assets/_baseIteratee-fbbabc87.js", "assets/CloseIcon-90eee5fe.js", "assets/_baseEach-6c7a4143.css", "assets/mention-e43b25a5.css", "assets/Attachments-84a6967e.js", "assets/isOnReader-b27f4ba9.js", "assets/AlertDialog-d9b964a5.js", "assets/TextInput-c03c69d6.js", "assets/Modal-ab851ad1.js", "assets/Modal-faa641cb.css", "assets/AlertDialog-502ee8c4.css", "assets/decodeHtmlEntitiesFast-d19e2d0c.js", "assets/share_dialog-b74d3337.js", "assets/free_email_form-1d3fc4be.js", "assets/free_email_form.module-135823b4.js", "assets/entry-a965ffeb.js", "assets/entry-401840c0.css", "assets/free_email_form-cf4756c6.css", "assets/modal-5dbf091c.js", "assets/Select-f97196dc.js", "assets/chevron-down-6d7770f2.js", "assets/Select-cd38999e.css", "assets/dropdown_menu_typed-c164b42b.js", "assets/link-90872791.js", "assets/download-8a01f574.js", "assets/keyBy-bc7e2f81.js", "assets/_baseAssignValue-2cb42459.js", "assets/_createAggregator-deb99b9c.js", "assets/SubstackLogoIcon-3ca41075.js", "assets/publication-1bbad178.js", "assets/Textarea-ed5c1b37.js", "assets/TextLink-9c0e1c8b.js", "assets/TextLink-f399b628.css", "assets/Unit-93a04fbc.js", "assets/Attachments-858e615b.css", "assets/link_copy_toast-1ffe3674.js", "assets/Portal-f12cb990.js", "assets/Metadata-be2b4cf2.js", "assets/user-dd90bf1b.js", "assets/CommunityPostView-99a59fb0.css", "assets/ChatZero-70900bcb.js", "assets/set-d2181b3b.js", "assets/chat-f6285661.js", "assets/MessageBubbleView-5de3062e.js", "assets/MessageBubbleView-9c490fb8.css", "assets/plus-3216546d.js", "assets/LockThinIcon-fd5808c3.js", "assets/textarea-b8862a3a.js"]),
        resolve: a => a.DmComposerModal,
        onClose: t
    })))
}
const so = "/api/v1/messages/suggestions/search";

function I1() {
    const [e, t] = b(""), s = aa(so, {
        query: {
            query: e
        },
        deps: [e]
    }), o = oa(i => {
        t(i)
    }, 100, []);
    return w(g({}, s), {
        query: e,
        handleSearch: o
    })
}

function nd() {
    ra(so, {
        query: {
            query: ""
        },
        deps: [""]
    })
}
const sd = "_iframe_1kq9h_1",
    od = "_codeInput_1kq9h_7",
    id = "_divider_1kq9h_24",
    rn = {
        iframe: sd,
        codeInput: od,
        divider: id
    };

function ad({
    post: e,
    pub: t,
    comment: s
} = {}) {
    const [o, i] = b(!1);
    return {
        open: Ee(() => {
            i(!0), $(I.EMBED_MODAL_OPENED, {
                type: e ? "post" : "note"
            })
        }, [e]),
        modal: e && t ? n(ks, {
            isOpen: o,
            onClose: () => i(!1),
            post: e,
            pub: t
        }) : s ? n(ks, {
            isOpen: o,
            onClose: () => i(!1),
            comment: s
        }) : void 0
    }
}
const rd = ({
    width: e,
    height: t
}) => {
    const s = typeof window != "undefined" ? window.innerHeight : 1 / 0;
    let o = 1;
    return s < 700 ? o = .7 : s < 800 ? o = .75 : s < 900 && (o = .8), {
        width: e * o,
        height: t * o,
        scaler: o
    }
};

function ks({
    isOpen: e,
    onClose: t,
    post: s,
    pub: o,
    comment: i
}) {
    const {
        iString: a,
        iTemplate: r,
        language: c
    } = de(), [l, d] = b({
        width: 400,
        height: 400
    }), [u, p] = b(!1), m = ee(null), {
        popToast: f
    } = Oe(), h = (C, S) => `<div class="substack-post-embed"><p lang="${c}">${r`${S.title} by ${C.author_name}`}</p><p>${S.subtitle}</p><a data-post-link href="${ti(C,S.slug)}">${a("Read on Substack")}</a></div><script async src="${os()}/embedjs/embed.js" charset="utf-8"><\/script>`, y = C => `<div class="substack-post-embed"><p lang="${c}">${`${C.body||""}`}</p>${C.name?`<p> - ${C.name}</p>`:C.handle?`<p> - @${C.handle}</p>`:""}<a data-comment-link href="${Ns(C)}">${a("Read on Substack")}</a></div><script async src="${os()}/embedjs/embed.js" charset="utf-8"><\/script>`;
    A(() => {
        if (!e) return;
        const C = S => {
            S.data.iframeHeight && (d({
                width: 500,
                height: S.data.iframeHeight
            }), p(!0))
        };
        return window.addEventListener("message", C), () => {
            window.removeEventListener("message", C)
        }
    }, [e]);
    const {
        width: _,
        height: v,
        scaler: k
    } = rd(l);
    return n(xe, {
        isOpen: e,
        onClose: t,
        radius: "md",
        width: 524
    }, e && n(R, null, n(x, {
        padding: 12,
        borderBottom: "detail",
        justifyContent: "space-between",
        alignItems: "center"
    }, n(F.H4, null, a(s ? "Embed post" : "Embed note")), n(Ie, {
        size: 24,
        onClick: t,
        rounded: !0,
        fill: "empty",
        "aria-label": a("Close")
    }, n(_n, {
        size: 24
    }))), n(R, {
        paddingY: 24,
        paddingX: 12,
        gap: 24,
        alignItems: "center"
    }, n("div", {
        style: {
            width: _,
            height: v
        }
    }, n("iframe", {
        ref: m,
        style: {
            visibility: u ? "visible" : "hidden",
            transform: `scale(${k})`,
            width: l.width,
            height: l.height
        },
        className: rn.iframe,
        src: i ? Qo(i, {
            isPreview: !0
        }) : o && s ? ei(o, s.slug, {
            isPreview: !0
        }) : ""
    })), n("input", {
        className: rn.codeInput,
        style: {
            width: _
        },
        value: o && s ? h(o, s) : i ? y(i) : "",
        disabled: !0
    })), n(R, {
        gap: 16,
        paddingBottom: 16,
        alignItems: "center"
    }, n(Fs, {
        priority: "detail",
        className: rn.divider
    }), n(Je, {
        style: {
            width: _
        },
        priority: "primary",
        textAlign: "center",
        justifyContent: "center",
        onClick: () => {
            xs(o && s ? h(o, s) : i ? y(i) : ""), t(), f(C => n(Se, w(g({}, C), {
                text: a("Embed code was copied to clipboard")
            })))
        }
    }, a("Copy embed code")))))
}
const ld = "_newMenuItemContainer_1n191_1",
    cd = "_divider_1n191_6",
    dd = "_offset_1n191_12",
    ud = "_shareIconContainer_1n191_17",
    pd = "_dropdownMenu_1n191_23",
    vn = {
        newMenuItemContainer: ld,
        divider: cd,
        offset: dd,
        shareIconContainer: ud,
        dropdownMenu: pd
    },
    md = ({
        initialTime: e,
        onChange: t,
        maxTime: s
    }) => {
        const {
            iString: o
        } = de(), [i, a] = b(!0), [r, c] = b(!0), [l, d] = b(ge(e != null ? e : 0)), u = p => {
            const m = Mt(p),
                f = Ae(p),
                h = s ? f <= s : !0;
            if (m && h) {
                const y = Ae(p);
                t(y), c(!0)
            } else t(null), c(!1);
            d(p)
        };
        return n(x, {
            gap: 12,
            alignItems: "center",
            padding: 8
        }, n($s, {
            withTheme: !0,
            size: "small",
            checked: i,
            onChange: () => a(!i)
        }), n(F.B3, null, o("Start at")), n(x, {
            maxWidth: 80
        }, n(yn, {
            className: vn.textInput,
            value: l,
            error: !r,
            onChange: p => u(p.currentTarget.value),
            placeholder: "0:00.0"
        })))
    };

function oo({
    post: e,
    user: t,
    pub: s,
    trigger: o,
    onChange: i,
    position: a,
    showClipping: r,
    disableClipping: c,
    onClipClick: l,
    initialShareTimestamp: d
}) {
    var J, ae, re, pe;
    const {
        iString: u
    } = de(), {
        getConfigFor: p
    } = Ge(), [m, f] = b(d != null ? d : null);
    A(() => {
        d && f(d)
    }, [d]);
    const h = m ? {
            timestamp: m.toFixed(1)
        } : {},
        y = Dn(null, {
            post: e,
            pub: s,
            user: t,
            useCustomDomainOverOpen: !0,
            params: h
        }),
        _ = Fi({
            post: e,
            pub: s
        }),
        v = {
            title: _,
            url: y
        },
        k = Oe(),
        {
            modal: C,
            open: S
        } = ad({
            post: e,
            pub: s
        }),
        T = jt() && navigator.share && navigator.canShare && navigator.canShare(v),
        [L, M] = b(T),
        D = () => U(this, null, function*() {
            var W;
            if ($(I.POST_SHARE_BUTTON_CLICKED, {
                    position: a,
                    post_id: e.id
                }), T && L) try {
                yield navigator.share(v), $(I.NATIVE_SHARE_SUCCESS, {
                    medium: "web",
                    post_id: (W = e.id) != null ? W : null,
                    utm_campaign: yt.default
                }), Rn(`${s.subdomain} shared`, !0);
                return
            } catch (V) {
                if (!(V instanceof Error) || V.name === "AbortError") return;
                M(!1), $(I.NATIVE_SHARE_FAILED, {
                    errorName: V.name,
                    errorMessage: V.message
                })
            }
        }),
        N = () => {
            Hi({
                shareUrl: y,
                shareName: _,
                pub: s,
                post: e,
                utm_campaign: a,
                trackParams: h
            }), i == null || i()
        },
        B = () => {
            Vi({
                shareUrl: y,
                pub: s,
                post: e,
                utm_campaign: a,
                trackParams: h
            }), i == null || i()
        },
        H = () => {
            Wi({
                shareUrl: y,
                pub: s,
                post: e,
                utm_campaign: a,
                trackParams: h
            }), i == null || i()
        },
        O = () => {
            Vs({
                shareUrl: y,
                pub: s,
                post: e,
                utm_campaign: a,
                trackParams: h
            }), i == null || i()
        },
        X = () => {
            Hs({
                shareUrl: y,
                pub: s,
                post: e,
                utm_campaign: a,
                skipToast: !0,
                trackParams: h
            }), k.popToast(W => n(Se, w(g({}, W), {
                text: u("Link copied")
            }))), i == null || i()
        },
        E = W => {
            $(I.VIDEO_CLIP_BUTTON_CLICKED, {
                post_id: e.id,
                source: a,
                type: e.type
            }), l == null || l(W), i == null || i()
        };
    let q;
    if (fd(o)) q = o;
    else if (gd(o)) {
        let W;
        e.share_url_override ? W = e.share_url_override : o.isStatic ? e ? W = ve.SHARE_URL : W = ve.SHARE_PUB_URL : W = "javascript:void(0)";
        const V = o.labelStyle === "none";
        q = n($e, {
            style: o.style,
            icon: V ? n($n, {
                className: "icon",
                height: Ue(o.style),
                strokeWidth: Xe
            }) : null,
            href: W,
            noLabel: o.labelStyle === "none",
            className: K(!V && "no-icon")
        }, o.labelStyle === "cta" && u("Share"))
    }
    return n(me, null, p("embeds_enabled") && C, n(zt, {
        trigger: q,
        onOpen: D,
        useMobileBottomSheet: !0,
        disableMenu: L,
        layerOptions: {
            placement: a === "pub-preview" ? "bottom-start" : "bottom-end",
            preferX: a === "pub-preview" ? "right" : "left"
        },
        className: vn.dropdownMenu,
        maxHeight: "fit-content"
    }, n(ie, {
        icon: n(Bt, null),
        onClick: X
    }, u("Copy link")), p("embeds_enabled") && n(ie, {
        icon: n(Fa, null),
        onClick: () => {
            S()
        }
    }, u("Embed post")), n(mn, {
        configKey: "clipper_v2",
        value: !1
    }, r && l && n(ie, {
        disabled: c,
        icon: n(ct, null),
        onClick: E
    }, n(x, {
        justifyContent: "space-between",
        alignItems: "center"
    }, u("Create a clip"), n(_e, {
        className: vn.newMenuItemContainer,
        paddingX: 6,
        height: 20,
        alignItems: "center",
        justifyContent: "center"
    }, n(F.B5, {
        translated: !0,
        weight: "semibold",
        color: "bg-light"
    }, "NEW"))))), n(mn, {
        configKey: "clipper_v2",
        value: !0
    }, r && l && n(ie, {
        disabled: c,
        icon: n(ct, null),
        onClick: E
    }, n(x, {
        justifyContent: "space-between",
        alignItems: "center"
    }, u("Download clip")))), n(hd, {
        url: y,
        onShare: () => {
            $(I.SHARE_LINK_CLICKED, {
                name: "direct_message",
                post_id: e.id,
                source: a
            }), i == null || i()
        }
    }), n(Rt, null, n(ie, {
        icon: n(Js, {
            height: 24
        }),
        onClick: O
    }, u("Share to Notes")), n(ie, {
        icon: n(Jc, {
            height: 24
        }),
        onClick: B
    }, u("Share to Facebook")), n(ie, {
        icon: n(Qc, {
            height: 24
        }),
        onClick: H
    }, u("Share to Linkedin")), n(ie, {
        icon: n(Gs, {
            height: 24
        }),
        onClick: N
    }, u("Share to X"))), e.videoUpload && n(Rt, null, n(md, {
        initialTime: d != null ? d : 0,
        onChange: f,
        maxTime: (pe = (re = (J = e.videoUpload) == null ? void 0 : J.duration) != null ? re : (ae = e.podcastUpload) == null ? void 0 : ae.duration) != null ? pe : null
    }))))
}

function hd({
    url: e,
    onShare: t
}) {
    const {
        iString: s
    } = de(), o = ed();
    return n(ie, {
        icon: n(Ys, null),
        onClick: () => {
            o.open({
                linkAttachmentUrl: e,
                source: "share_post"
            }), t == null || t()
        },
        onMouseEnter: nd
    }, s("Send as message"))
}

function fd(e) {
    return e.type !== void 0
}

function gd(e) {
    const t = e;
    return t.style !== void 0 && t.labelStyle !== void 0
}
const io = (e, t, s) => {
        var o;
        return ((o = s == null ? void 0 : s.duration) != null ? o : 0) > 0 || ["everyone", "only_free"].includes(t.audience) || ["only_paid"].includes(t.audience) && (e == null ? void 0 : e.is_subscribed) || ["founding"].includes(t.audience) && (e == null ? void 0 : e.is_founding)
    },
    _d = (e, t, s, o, i) => !(!i && !(e != null && e.has_publication) || o.invite_only || Ds(s.audience) || !t.enable_restacking),
    Hn = Ye(null);
Hn.displayName = "CrossPostContext";

function x1({
    crossPost: e = null,
    children: t
}) {
    return n(Hn.Provider, {
        value: e
    }, t)
}

function Vn() {
    return Ve(Hn)
}
var xt = {
    exports: {}
};
const yd = {
    is_www: !0,
    id: 0,
    name: "Substack",
    subdomain: "www",
    copyright: "Substack Inc.",
    mailing_address: `548 Market Street PMB 72296
San Francisco, CA 94104`,
    email_from: "no-reply@substack.com",
    email_from_name: "Substack",
    logo_url: "/img/substack.png?v=3",
    language: "en"
};
xt.exports = yd;
const N1 = (xt.exports == null ? {} : xt.exports).default || xt.exports,
    bd = {
        postAuthor: "custom-css-email-post-author",
        avatar: "custom-css-email-avatar",
        digestPostEmbed: "custom-css-email-digest-post-embed"
    };
const wd = "_fullWidth_xsv8v_1",
    kd = "_emailButtonTd_xsv8v_8",
    vd = "_priority_primary_xsv8v_11",
    Cd = "_emailButtonA_xsv8v_14",
    Sd = "_priority_secondary_xsv8v_26",
    Ed = "_priority_outline_xsv8v_38",
    Ld = "_size_sm_xsv8v_60",
    Td = "_avatar_xsv8v_65",
    Md = "_framed_xsv8v_70",
    Pd = "_icon_xsv8v_76",
    Id = "_emailSeparator_xsv8v_82",
    qe = {
        fullWidth: wd,
        emailButtonTd: kd,
        priority_primary: vd,
        emailButtonA: Cd,
        priority_secondary: Sd,
        priority_outline: Ed,
        size_sm: Ld,
        avatar: Td,
        framed: Md,
        icon: Pd,
        emailSeparator: Id
    };

function ze({
    children: e,
    href: t,
    testId: s,
    tableClassName: o,
    tdClassName: i,
    aClassName: a,
    alt: r,
    download: c,
    target: l,
    style: d,
    disableTracking: u
}) {
    return n(Ze, {
        className: o,
        style: d
    }, n("tr", null, n("td", {
        className: i,
        align: "center"
    }, t ? n("a", {
        href: t,
        className: K(a),
        "data-test-id": s,
        alt: r,
        download: c,
        target: l,
        "disable-tracking": u ? "true" : void 0
    }, e) : n("span", {
        className: a,
        "data-test-id": s
    }, e))))
}

function D1(e = {
    children: "",
    noUnderline: !1
}) {
    return n(ze, w(g({}, e), {
        aClassName: "email-button-a",
        tdClassName: "email-button-td"
    }))
}

function O1(a) {
    var r = a,
        {
            fullWidth: e,
            priority: t = "primary",
            size: s = "md",
            aClassName: o
        } = r,
        i = De(r, ["fullWidth", "priority", "size", "aClassName"]);
    return n(ze, w(g({}, i), {
        tableClassName: e ? qe.fullWidth : void 0,
        aClassName: K(e && qe.fullWidth, qe.emailButtonA, o, qe[`size_${s}`]),
        tdClassName: K(e && qe.fullWidth, qe.emailButtonTd, qe[`priority_${t}`])
    }))
}

function R1({
    src: e,
    size: t,
    framed: s
}) {
    return n(Ti, {
        className: K(bd.avatar, qe.avatar, s && qe.framed),
        src: ni(e),
        style: {
            width: t,
            height: t,
            minWidth: t,
            minHeight: t,
            objectFit: "cover",
            margin: 0,
            display: "inline"
        },
        width: t,
        height: t
    })
}
wt("email-text-button", "a");
wt("email-text-b4 email-text-secondary", "div");

function A1({
    children: e,
    gap: t = 0,
    style: s
}) {
    const o = hn(e).flatMap(r => typeof r == "object" && r.type === me ? hn(r.props.children) : r),
        i = [];
    for (const r of o.slice(0, -1)) i.push(n("tr", null, n("td", null, r))), t > 0 && i.push(n("tr", {
        height: t
    }, n("td", null)));
    const a = o[o.length - 1];
    return a && i.push(n("tr", null, n("td", null, a))), n(Ze, {
        style: s
    }, i)
}

function vs({
    children: e,
    gap: t = 0,
    style: s,
    verticalAlign: o = "middle",
    growLastChild: i
}) {
    const a = hn(e),
        r = [];
    for (const l of a.slice(0, -1)) r.push(n("td", {
        style: {
            verticalAlign: o
        }
    }, l)), t > 0 && r.push(n("td", {
        width: t,
        style: `min-width: ${t}px`
    }));
    const c = a[a.length - 1];
    if (c) {
        const l = {
            verticalAlign: o
        };
        i && (l.width = "100%"), r.push(n("td", {
            style: l
        }, c))
    }
    return n(Ze, {
        style: s
    }, n("tr", null, r))
}

function Ze(s) {
    var o = s,
        {
            children: e
        } = o,
        t = De(o, ["children"]);
    return n("table", g({
        role: "presentation",
        width: "auto",
        border: "0",
        cellspacing: "0",
        cellpadding: "0"
    }, t), e)
}
const xd = 1653592864;

function Nd({
    user: e,
    noBase: t
}) {
    const s = Oe(),
        o = () => fetch("/api/v1/user/like_nux/seen", {
            method: "POST"
        });
    return () => {
        const i = "has_seen_like_nux",
            a = Ws(i),
            r = xd;
        return a && e && !e.has_seen_like_nux ? (o(), !1) : !e || !e.profile_set_up_at || e.subscription_visibility === "private" || !e.activity_likes_enabled || a || e.has_seen_like_nux || fe((e == null ? void 0 : e.profile_set_up_at) || 0).unix() > r ? !1 : ($(I.LIKE_NUX_SHOWN), Rn(i, !0), o(), s.popToast(c => n(ea, w(g({}, c), {
            title: "New: see who's liked a post",
            body: "Now you can see who's liked a post and visit their profiles. Your own profile won't show up on posts you liked before this change.",
            buttons: n(me, null, n(ds, {
                href: si(e, {
                    utm_source: He.likeToast,
                    noBase: t
                })
            }, n(us, null, "OK")), n(ds, {
                href: oi({
                    params: {
                        utm_source: He.likeToast
                    }
                })
            }, n(us, {
                color: "secondary"
            }, "Settings"))),
            Icon: $t
        }))), !0)
    }
}
const Ft = (e, t) => t.payments_state === "enabled" ? e.is_subscribed : e.is_free_subscribed,
    bt = e => n(ye, w(g({}, e), {
        name: "NoteForwardIcon",
        svgParams: {
            height: 24,
            width: 24,
            stroke: e.stroke,
            strokeWidth: e.strokeWidth
        }
    }), n("path", {
        d: "M21 3V8M21 8H16M21 8L18 5.29962C16.7056 4.14183 15.1038 3.38328 13.3879 3.11547C11.6719 2.84766 9.9152 3.08203 8.32951 3.79031C6.74382 4.49858 5.39691 5.65051 4.45125 7.10715C3.5056 8.5638 3.00158 10.2629 3 11.9996M3 21V16M3 16H8M3 16L6 18.7C7.29445 19.8578 8.89623 20.6163 10.6121 20.8841C12.3281 21.152 14.0848 20.9176 15.6705 20.2093C17.2562 19.501 18.6031 18.3491 19.5487 16.8925C20.4944 15.4358 20.9984 13.7367 21 12",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })),
    Dd = e => n(ye, w(g({}, e), {
        name: "NoteForwardQuoteIcon",
        svgParams: {
            height: 24,
            width: 24,
            stroke: e.stroke,
            strokeWidth: e.strokeWidth
        }
    }), n("path", {
        d: "M13.4147 2.09993C10.4072 1.67249 7.2423 2.61548 4.92891 4.92887C1.02366 8.83411 1.02366 15.1658 4.92891 19.071C8.83415 22.9762 15.1658 22.9762 19.071 19.071C21.3844 16.7576 22.3274 13.5927 21.9 10.5852M18.5 2.62126C18.8978 2.22343 19.4374 1.99994 20 1.99994C20.5626 1.99994 21.1021 2.22343 21.5 2.62126C21.8978 3.01908 22.1213 3.55865 22.1213 4.12126C22.1213 4.68387 21.8978 5.22343 21.5 5.62126L13 14.1213L8.99998 15.1213L9.99998 11.1213L18.5 2.62126Z",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }));

function Od(e, t, s) {
    const [o, i] = ii(e, t, s), a = ee(o);
    a.current = o;
    const r = we(() => c => U(this, null, function*() {
        if (typeof c == "function") return yield c(r, () => a.current);
        i(c)
    }), []);
    return [o, r]
}
const ao = Ye({
        registerVideo: () => {},
        unregisterVideo: () => {},
        updatePaywallState: () => {}
    }),
    Rd = () => Ve(ao),
    Ad = ({
        children: e
    }) => {
        const [t, s] = b(0), o = ee([]), i = ee(new Map);
        A(() => {
            const l = new IntersectionObserver(d => {
                d.forEach(u => {
                    const p = u.target;
                    if (!u.isIntersecting) {
                        p.pause();
                        return
                    }
                    i.current.get(p) || p.play()
                })
            }, {
                threshold: 1
            });
            return o.current.forEach(d => {
                var u;
                (u = d.current) != null && u.player && l.observe(d.current.player)
            }), () => {
                o.current.forEach(d => {
                    var u;
                    (u = d.current) != null && u.player && l.unobserve(d.current.player)
                })
            }
        }, [t]);
        const a = Ee(l => {
                l && !o.current.includes(l) && (o.current.push(l), s(d => d + 1))
            }, []),
            r = Ee(l => {
                o.current = o.current.filter(d => d !== l), s(d => d + 1)
            }, []),
            c = Ee(({
                videoPlayerRef: l,
                showPaywall: d
            }) => {
                var u;
                (u = l.current) != null && u.player && i.current.set(l.current.player, d)
            }, []);
        return n(ao.Provider, {
            value: {
                registerVideo: a,
                unregisterVideo: r,
                updatePaywallState: c
            }
        }, e)
    },
    B1 = ({
        disable: e,
        showPaywall: t,
        videoPlayerRef: s
    }) => {
        const {
            registerVideo: o,
            unregisterVideo: i,
            updatePaywallState: a
        } = Rd();
        A(() => {
            if (s.current && !e) return o(s), () => {
                i(s)
            }
        }, [e, o, i, s]), A(() => {
            a({
                showPaywall: t,
                videoPlayerRef: s
            })
        }, [t, a, s])
    };

function ro(e = null) {
    const t = ee(e);
    return A(() => {
        var s;
        (s = t.current) == null || s.focus()
    }, []), t
}

function lo({
    children: e,
    className: t,
    onClose: s,
    hasClosePill: o,
    isPopup: i,
    noExit: a,
    noExitOnClick: r,
    noFullscreen: c,
    noCloseButton: l,
    testID: d
}) {
    const u = ee(),
        p = m => {
            !a && !r && i && (c || window.innerWidth > 540) && (m.stopPropagation(), m.preventDefault(), s())
        };
    return n(ma, null, n("div", {
        className: K("modal simple-modal wide typography", "in", t, {
            "has-close-pill": o,
            popup: i
        }),
        "data-testid": d,
        role: "dialog"
    }, n("div", {
        className: "modal-table"
    }, n("div", {
        className: "modal-row"
    }, n("div", {
        className: K("modal-cell modal-content reader2-modal", {
            "no-fullscreen": c
        })
    }, n("div", {
        className: "modal-clickspace",
        onClick: p
    }), n("div", {
        className: "container",
        ref: u
    }, !a && (!l || jt()) && n(Ie, {
        className: K("modal-btn modal-exit-btn no-margin", {
            "button btn btn-secondary btn-pill icon-only": o
        }),
        onClick: () => s()
    }, n(Ca, null)), e))))))
}

function U1({
    children: e,
    onCancel: t
}) {
    return n(lo, {
        className: "rss-feed-modal remove-rss-feed",
        isPopup: !0,
        onClose: t
    }, n(Bd, null, e))
}
const Bd = wt("simple-modal-pad reader2-confirm-modal"),
    $1 = wt("buttons");

function Ud({
    onCancel: e,
    onSuccess: t,
    onSignup: s,
    noCloseButton: o,
    noExit: i
}) {
    const [a, r] = b("email"), [c, l] = b("");
    return n(lo, {
        className: "",
        isPopup: !0,
        onClose: e,
        noCloseButton: o,
        noExit: i
    }, n("div", {
        className: "simple-modal-pad tw-flex tw-flex-col tw-gap-4"
    }, n(wa, {
        className: "reader-nav-logo modal-header-icon"
    }), n(la, null, "Sign in to Substack"), a === "email" ? n(Fd, {
        onUsePassword: u => {
            l(u), r("password")
        },
        onSuccess: u => {
            l(u), r("poll")
        }
    }) : a === "poll" ? n(Hd, {
        email: c,
        onSuccess: t,
        onChangeMode: r
    }) : a === "mfa" ? n(Vd, {
        onSuccess: t
    }) : n($d, {
        email: c,
        onMfa: () => {
            r("mfa")
        },
        onSuccess: t
    })), s && n(ca, {
        className: "simple-modal-footer tw-flex tw-h-14 tw-items-center tw-justify-center"
    }, n("span", null, "First time here?", " ", n(wn, {
        color: "substack",
        decoration: "hover-underline",
        onClick: s
    }, "Create an account"))))
}

function $d({
    email: e,
    onSuccess: t,
    onMfa: s
}) {
    const o = Qe({
            pathname: "/api/v1/login",
            method: "post"
        }),
        i = ee(),
        a = c => U(this, null, function*() {
            if (c.preventDefault(), o.isLoading) return;
            const l = co(c.currentTarget);
            i.current && (l.captcha_response = i.current.getResponse());
            const d = yield o.refetch({
                json: l
            });
            d instanceof Error || (d.mfa_required ? s() : t())
        }),
        r = ro();
    return n(me, null, o.error instanceof In && o.error.response.status === 401 && n(_a, {
        ref: i
    }), n(Wn, {
        onSubmit: a,
        disabled: o.isLoading
    }, n(At, {
        type: "email",
        name: "email",
        placeholder: "Your email",
        defaultValue: e
    }), n(At, {
        type: "password",
        name: "password",
        placeholder: "Your password",
        ref: r
    }), o.error && n(Ks, null, Me(o.error)), n(Le, {
        type: "submit"
    }, o.isLoading ? "Signing in..." : "Sign in")))
}

function Fd({
    onUsePassword: e,
    onSuccess: t
}) {
    const s = Qe({
            pathname: "/api/v1/email-login",
            method: "POST"
        }),
        o = a => {
            if (a.preventDefault(), s.isLoading) return;
            const r = a.currentTarget.email.value;
            s.refetch({
                json: {
                    email: r,
                    redirect: location.pathname
                }
            }).then(c => {
                c instanceof In || t(r)
            })
        },
        i = ro();
    return n(Wn, {
        onSubmit: o,
        disabled: s.isLoading
    }, n(At, {
        type: "email",
        name: "email",
        placeholder: "Your email",
        ref: i
    }), n("div", {
        className: "tw-flex tw-flex-col tw-gap-2"
    }, n(Le, {
        type: "submit",
        priority: "primary"
    }, s.isLoading ? "Signing in..." : "Sign in with email"), n(Le, {
        priority: "tertiary",
        onClick: () => {
            var a;
            return e((a = i.current) == null ? void 0 : a.value)
        }
    }, "or sign in with password")))
}

function Hd({
    email: e,
    onSuccess: t,
    onChangeMode: s
}) {
    return ha(() => {
        fetch("/api/v1/am_i_logged_in").then(o => U(this, null, function*() {
            (yield o.json()).loggedIn && t()
        }))
    }, 5e3), n("div", {
        className: "tw-flex tw-flex-col tw-gap-8"
    }, n("b", null, "Check your email"), n("div", null, "If you have an account with us, we’ve sent an email to ", n("b", null, e), " ", "with a link that you can use to sign in."), n("div", null, "You can also", " ", n(wn, {
        onClick: () => s("email")
    }, n("b", null, "try again")), " ", "or", " ", n(wn, {
        onClick: () => s("password")
    }, n("b", null, "sign in using your password")), "."))
}

function Vd({
    onSuccess: e
}) {
    const t = Qe({
        pathname: "/api/v1/mfa-login",
        method: "Post"
    });
    return n(Wn, {
        onSubmit: o => {
            o.preventDefault(), !t.isLoading && t.refetch({
                json: co(o.currentTarget)
            }).then(i => {
                i instanceof In || e()
            })
        },
        disabled: t.isLoading
    }, n(At, {
        type: "password",
        name: "code",
        placeholder: "Your MFA code"
    }), t.error && n(Ks, null, Me(t.error)), n(va, {
        type: "submit",
        variant: "primary"
    }, t.isLoading ? "Signing in..." : "Sign in"))
}
const Wn = wt("tw-flex tw-flex-col tw-gap-3", "form");

function co(e) {
    return Object.fromEntries(Array.from(e.elements).filter(t => t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement).map(t => [t.name, t.value]))
}

function jn({
    fileType: e
}) {
    return e.startsWith("image/")
}

function F1({
    fileType: e
}) {
    return e.startsWith("video/")
}

function Kn({
    onAddFiles: e,
    acceptFile: t
}) {
    const s = ee(),
        o = ee(),
        [i, a] = b(!1),
        r = m => Array.from(m.items).filter(h => h.kind === "file" && t({
            fileType: h.type
        })),
        c = m => r(m).length > 0,
        l = m => {
            if (m instanceof DragEvent && !m.defaultPrevented && m.dataTransfer && c(m.dataTransfer)) {
                if (r(m.dataTransfer).length === 0) return;
                m.preventDefault(), e(Array.from(m.dataTransfer.files)), a(!1), o.current = void 0
            }
        },
        d = m => {
            const {
                current: f
            } = s, {
                target: h
            } = m;
            f && h && h instanceof HTMLElement && (f === h || f.contains(h)) && m.dataTransfer && (c(m.dataTransfer) || m.dataTransfer.items.length === 0) && (m.preventDefault(), o.current = h, a(!0))
        },
        u = m => {
            o.current && m.preventDefault()
        },
        p = m => {
            const {
                current: f
            } = o;
            f && f === m.target && (o.current = void 0, a(!1))
        };
    return {
        isDragging: i,
        props: {
            onDragEnter: d,
            onDragOver: u,
            onDragLeave: p,
            onDragEnd: p,
            onDrop: l,
            ref: s
        }
    }
}

function H1({
    onAddFiles: e
}) {
    return Wd({
        onAddFiles: e,
        acceptFile: jn
    })
}

function Wd(e) {
    const t = Kn(e),
        s = ee(!1);
    return A(() => {
        const {
            props: {
                onDragEnter: o,
                onDragOver: i,
                onDragLeave: a,
                onDragEnd: r,
                onDrop: c
            }
        } = t, l = document.body;
        t.props.ref.current = l;
        const d = {
            dragenter: u => {
                s.current || (s.current = !0, o(u))
            },
            dragover: i,
            dragleave: u => {
                s.current && (u.clientX <= 0 || u.clientX >= window.innerWidth || u.clientY <= 0 || u.clientY >= window.innerHeight) && (s.current = !1, a(u))
            },
            dragend: u => {
                s.current && (s.current = !1, r(u))
            },
            drop: u => {
                s.current && (s.current = !1, c(u))
            }
        };
        for (const [u, p] of Object.entries(d)) l.addEventListener(u, p);
        return () => {
            for (const [u, p] of Object.entries(d)) l.removeEventListener(u, p)
        }
    }, []), t
}
const V1 = 9999,
    jd = ({
        likesEnabled: e = !0,
        language: t = "en"
    } = {}) => {
        const {
            iString: s
        } = I18N.i(t), o = [];
        return o.push({
            key: "most_recent_first",
            text: s("New First"),
            description: s("Newest first (good for live events)")
        }), e && o.push({
            key: "best_first",
            text: s("Top First"),
            description: s("Top ranked first")
        }), o.push({
            key: "oldest_first",
            text: s("Chronological"),
            description: s("Chronological order (oldest first)")
        }), o
    },
    W1 = (e, t) => {
        var s;
        return (s = jd({
            language: t
        }).find(o => o.key === e)) == null ? void 0 : s.text
    },
    Kd = function(e, t) {
        if (Symbol.iterator in Object(e)) {
            for (const s of e)
                if (t(s) === !1 || Kd(s.children || [], t) === !1) return !1
        }
    },
    ht = {
        review_required: "review_required",
        edit_review_required: "edit_review_required",
        published: "published",
        flagged: "flagged",
        deleted: "deleted",
        moderator_approved: "moderator_approved",
        moderator_removed: "moderator_removed",
        new_commenter_approval_required: "new_commenter_approval_required"
    },
    qd = new Set([ht.review_required, ht.edit_review_required, ht.published, ht.moderator_approved, ht.new_commenter_approval_required]),
    j1 = e => e.deleted ? !1 : qd.has(e.status);

function zd(e, t) {
    const {
        attachments: s
    } = e;
    if (s && s.length > 0) {
        for (const o of s)
            if (o.type === "post") {
                for (const i of o.post.publishedBylines)
                    if (i.id === t) return !0;
                if (ls(o.publication, t)) return !0
            } else if (o.type === "comment") {
            if (o.comment.user_id === t) return !0
        } else if (o.type === "publication" && ls(o.publication, t)) return !0
    }
    return Yd(e).has(t)
}

function Yd(e) {
    var s, o, i;
    const t = [];
    if (e.body_json)
        for (const a of Sa(e.body_json)) a.type === "substack_mention" && (((s = a.attrs) == null ? void 0 : s.mentionType) === "user" || !((o = a.attrs) != null && o.mentionType)) && t.push((i = a.attrs) == null ? void 0 : i.id);
    return new Set(t)
}
const Xd = new Set(["subscribed", "free_signup"]);

function K1(e) {
    return Xd.has(e)
}

function Zd(e, t) {
    if (!e) return !1;
    if (!t) return !0;
    const s = ["unsubscribed", "free_signup", "subscribed"];
    return s.indexOf(e) >= s.indexOf(t)
}

function q1({
    publicationId: e,
    publication: t,
    publicationName: s,
    user: o,
    allowSecondaryPublications: i = !0,
    subscriptionSource: a,
    sourceNoteId: r
}) {
    var S, T, L;
    e = (L = (S = t == null ? void 0 : t.id) != null ? S : e) != null ? L : (T = o == null ? void 0 : o.primary_publication) == null ? void 0 : T.id;
    const c = We(),
        l = Oe(),
        d = da(),
        u = qs(),
        [p, m] = b(!1),
        f = !!e && Qd(c, e, u) || Jd(c, o, u, {
            allowSecondaryPublications: i
        }),
        [h, y] = b(null),
        _ = u.isLoading || !!h,
        v = M => U(this, null, function*() {
            var B;
            if (M && (M.preventDefault(), M.stopPropagation()), _ || f) return;
            y("subscribing");
            const D = yield eu(e, a, {
                publication: t,
                user: c,
                sourceNoteId: r
            }), N = `Subscribed to ${e?(B=s!=null?s:t==null?void 0:t.name)!=null?B:"publication":o?o.name:"profile"}`;
            if (D.didAction) {
                if (m(!0), l.popToast(H => n(Se, w(g({}, H), {
                        text: N
                    }))), c) try {
                    yield u.refetch()
                } catch (H) {
                    console.error("Failed to reload subscriptions:", H)
                }
                o && d((H = []) => H.includes(o.id) ? H : [o.id, ...H], {
                    revalidate: !1
                })
            } else D.errorMessage && l.popToast(H => {
                var O;
                return n(Se, w(g({}, H), {
                    text: (O = D.errorMessage) != null ? O : ""
                }))
            });
            y(null)
        }),
        k = M => U(this, null, function*() {
            var B;
            if (M && (M.preventDefault(), M.stopPropagation()), _ || !f) return;
            y("unsubscribing");
            const D = yield tu(e, a), N = `Unsubscribed from ${e?(B=s!=null?s:t==null?void 0:t.name)!=null?B:"publication":o?o.name:"profile"}`;
            if (D.didAction) {
                if (m(!1), l.popToast(H => n(Se, w(g({}, H), {
                        text: N
                    }))), c) try {
                    yield u.refetch()
                } catch (H) {
                    console.error("Failed to reload subscriptions:", H)
                }
            } else D.errorMessage && l.popToast(H => {
                var O;
                return n(Se, w(g({}, H), {
                    text: (O = D.errorMessage) != null ? O : ""
                }))
            });
            y(null)
        }),
        C = f && !h || h === "subscribing";
    return {
        showCta: !!e && (!c || u.hasLoadedOnce) && !(c && c.id === (o == null ? void 0 : o.id)) && (!f || p || h === "unsubscribing"),
        isSubscribed: C,
        hasPublication: !!e,
        subscribe: v,
        unsubscribe: k,
        toggle: C ? k : v
    }
}

function Gd(e) {
    var c;
    const t = qs(),
        s = We();
    if ((s == null ? void 0 : s.id) === e) return "subscribed";
    const {
        result: o
    } = t;
    if (!o) return null;
    const {
        subscriptions: i,
        publicationUsers: a
    } = o;
    for (const l of a)
        if (["admin", "contributor"].includes(l.role) && Ht(e, l.publication_id, t)) return "subscribed";
    let r = null;
    for (const l of i) Ht(e, l.publication_id, t) && (r = (c = Zd(l.membership_state, r) ? l.membership_state : r) != null ? c : null);
    return r
}

function Jd(e, t, s, {
    allowSecondaryPublications: o
} = {}) {
    if (!e || !t || !s.hasLoadedOnce || !s.result) return !1;
    const {
        subscriptions: i,
        publicationUsers: a
    } = s.result;
    if (o) {
        for (const r of i)
            if (r.membership_state !== "unsubscribed" && Ht(t.id, r.publication_id, s)) return !0;
        for (const r of a)
            if (["admin", "contributor"].includes(r.role) && Ht(t.id, r.publication_id, s)) return !0
    }
    return !1
}

function Qd(e, t, s) {
    if (!e || !t || !s.hasLoadedOnce || !s.result) return !1;
    const o = s.result.subscriptionMap.get(t);
    if (o && o.membership_state !== "unsubscribed") return !0;
    const i = s.result.publicationUserMap.get(t);
    return !!(i && ["admin", "contributor"].includes(i.role))
}

function Ht(e, t, s) {
    if (s.isLoading || !s.result) return !1;
    const o = s.result.publicationMap.get(t);
    if (o) {
        if (o.author_id === e) return !0;
        for (const i of o.contributors)
            if (i.user_id === e) return !0
    }
    return !1
}

function eu(a, r) {
    return U(this, arguments, function*(e, t, {
        publication: s,
        user: o,
        sourceNoteId: i
    } = {}) {
        let c = !1,
            l;
        if (o) try {
            (yield st("/api/v1/reader/signup/pub", {
                method: "POST",
                json: {
                    publication_id: e,
                    email: o.email,
                    source: t,
                    noWelcomeEmail: !0,
                    sourceNoteId: i,
                    first_url: zi,
                    first_referrer: Yi,
                    current_url: Xi,
                    current_referrer: Zi
                }
            })).requires_confirmation ? l = "Check your email to confirm subscription" : c = !0
        } catch (d) {
            console.error(d), l = "Failed to subscribe"
        } else if (!o) {
            if (!s) try {
                s = yield st(`/api/v1/reader/publication/${e}`)
            } catch (d) {
                console.error(d)
            }
            if (s) {
                const d = Kt(s, {
                    addBase: !0,
                    user: o != null ? o : void 0
                });
                window.open(d, "_blank")
            }
        }
        return {
            didAction: c,
            errorMessage: l
        }
    })
}

function tu(e, t) {
    return U(this, null, function*() {
        let s = !1,
            o;
        try {
            yield st("/api/v1/subscription/email", {
                method: "POST",
                json: {
                    publication_id: e,
                    email_disabled: !0,
                    digest_enabled: !1,
                    disable_all: !0,
                    receive_podcast_emails: !1,
                    source: t
                }
            }), s = !0
        } catch (i) {
            console.error(i), o = "Failed to unsubscribe"
        }
        return {
            didAction: s,
            errorMessage: o
        }
    })
}
const nu = "_avatarLink_eb0ha_1",
    su = "_inlineComposer_eb0ha_8",
    ou = "_disabled_eb0ha_16",
    iu = "_mobileInlineComposer_eb0ha_17",
    au = "_shareImageButton_eb0ha_21",
    ru = "_isDragging_eb0ha_30",
    lu = "_floatingComposer_eb0ha_35",
    cu = "_inputSpacer_eb0ha_51",
    du = "_wordCountIndicator_eb0ha_55",
    uu = "_exceded_eb0ha_55",
    pu = "_composerModal_eb0ha_59",
    mu = "_setupProfileModalContent_eb0ha_65",
    hu = "_modalColumn_eb0ha_82",
    fu = "_dropdownIcon_eb0ha_87",
    gu = "_dropdownMenu_eb0ha_91",
    _u = "_pubRow_eb0ha_98",
    yu = "_pubName_eb0ha_107",
    bu = "_linkImage_eb0ha_111",
    wu = "_imageContainer_eb0ha_118",
    ku = "_removeImage_eb0ha_136",
    vu = "_removeAttachment_eb0ha_137",
    Cu = "_notifyConformModalPubRow_eb0ha_151",
    ot = {
        avatarLink: nu,
        inlineComposer: su,
        disabled: ou,
        mobileInlineComposer: iu,
        shareImageButton: au,
        isDragging: ru,
        floatingComposer: lu,
        inputSpacer: cu,
        wordCountIndicator: du,
        exceded: uu,
        composerModal: pu,
        setupProfileModalContent: mu,
        modalColumn: hu,
        dropdownIcon: fu,
        dropdownMenu: gu,
        pubRow: _u,
        pubName: yu,
        linkImage: bu,
        imageContainer: wu,
        removeImage: ku,
        removeAttachment: vu,
        notifyConformModalPubRow: Cu
    };

function Su(s) {
    var o = s,
        {
            isOpen: e
        } = o,
        t = De(o, ["isOpen"]);
    return n(xe, {
        className: ot.composerModal,
        isOpen: e,
        onClose: t.onClose,
        fullscreenMobile: !0
    }, n(An, w(g({}, t), {
        module: "../feed/NoteComposer",
        resolve: i => i.NoteComposer,
        onRequest: () => nt(() =>
            import ("./NoteComposer-b8daa001.js"), ["assets/NoteComposer-b8daa001.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/autocomplete_results-e5db6147.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/UserBadge-a694a663.js", "assets/react-laag.esm-f47be925.js", "assets/profile-a781fd85.js", "assets/user-e16f1619.js", "assets/user-856acd57.css", "assets/Tooltip-86d56346.js", "assets/transition-c6a4911b.js", "assets/Tooltip-d0af0cf2.css", "assets/UserBadge-fb9c174e.css", "assets/_defineProperty-105d261c.js", "assets/isObject-a54dc090.js", "assets/_defineProperty-e9841d58.css", "assets/share_dialog-b74d3337.js", "assets/free_email_form-1d3fc4be.js", "assets/free_email_form.module-135823b4.js", "assets/entry-a965ffeb.js", "assets/entry-401840c0.css", "assets/free_email_form-cf4756c6.css", "assets/Menu-5342012d.js", "assets/useResponsive-08e338a7.js", "assets/x-fc38e969.js", "assets/Divider-0a4efe7e.js", "assets/Divider-f25512a6.css", "assets/chevron-right-925bdc12.js", "assets/Menu-9123dbf7.css", "assets/modal-5dbf091c.js", "assets/_baseEach-63ad03e0.js", "assets/HoverCard-cbdee1d2.js", "assets/HoverCard-41ea4b50.css", "assets/_baseIteratee-fbbabc87.js", "assets/CloseIcon-90eee5fe.js", "assets/_baseEach-6c7a4143.css", "assets/Select-f97196dc.js", "assets/chevron-down-6d7770f2.js", "assets/Select-cd38999e.css", "assets/dropdown_menu_typed-c164b42b.js", "assets/autocomplete_results-58e558b6.css", "assets/debounce-f31b8252.js", "assets/toNumber-3c911b0f.js", "assets/keyBy-bc7e2f81.js", "assets/_baseAssignValue-2cb42459.js", "assets/_createAggregator-deb99b9c.js", "assets/Modal-ab851ad1.js", "assets/Modal-faa641cb.css", "assets/Switch-b8853cbf.js", "assets/preflight-1c24e477.js", "assets/video_editor-1a867bc6.js", "assets/Progress-629d3819.js", "assets/Progress-f0f26f86.css", "assets/AlertDialog-d9b964a5.js", "assets/ProfileHoverCard-c8bfb61a.js", "assets/routeClick-cd1b3f9b.js", "assets/ProfileHoverCard-40cbd77e.css", "assets/TextInput-c03c69d6.js", "assets/AlertDialog-502ee8c4.css", "assets/info-e9da097c.js", "assets/VideoVerticalMenu-5e94a5f9.js", "assets/Attachments-84a6967e.js", "assets/CommentBody-36a2d638.js", "assets/traverse-bb97748e.js", "assets/CommentBody-c55cfff6.css", "assets/isOnReader-b27f4ba9.js", "assets/decodeHtmlEntitiesFast-d19e2d0c.js", "assets/link-90872791.js", "assets/download-8a01f574.js", "assets/podcast_apps-4f303ac3.js", "assets/podcast_apps-184969d7.css", "assets/SubstackLogoIcon-3ca41075.js", "assets/publication-1bbad178.js", "assets/Textarea-ed5c1b37.js", "assets/TextLink-9c0e1c8b.js", "assets/TextLink-f399b628.css", "assets/Unit-93a04fbc.js", "assets/Attachments-858e615b.css", "assets/unlock-12d676d9.js", "assets/VideoVerticalMenu-76a2fafc.css", "assets/file_uploader-ffeeb62a.js", "assets/util-typed-a303dda9.js", "assets/video_editor-d2e65442.css", "assets/textToJsonCore-161d8237.js", "assets/index-c0e0ed1b.js", "assets/Mention-bc402309.js", "assets/mousetrap-d052d743.js", "assets/mention-8372bb04.js", "assets/mention-e43b25a5.css", "assets/encodeHtmlEntities-ec5d3c5a.js", "assets/_copyArray-6a5e39ab.js", "assets/values-93deb65d.js", "assets/text-9fe09cd1.js", "assets/linkify-91f62846.js", "assets/BetaTag-188e1713.js", "assets/BetaTag-8b30a2bc.css", "assets/Theme-34933114.js", "assets/ErrorFromResponse-911dc961.js", "assets/UserBadgeIconOnly-381365d6.js", "assets/DropzoneOverlay-251c7ce7.js", "assets/DropzoneOverlay-86d10bf1.css", "assets/index-1907e96d.js", "assets/index-2ffed516.js", "assets/TextEditor.module-c364d602.js", "assets/TextEditor-1eb061db.css", "assets/Portal-f12cb990.js", "assets/Metadata-be2b4cf2.js", "assets/textarea-b8862a3a.js", "assets/icons-a8a65fb3.js", "assets/useConfirm-05af6f82.js", "assets/useCreateNote-5091d5e2.js", "assets/plus-circle-8195945c.js", "assets/plus-3216546d.js", "assets/LockThinIcon-fd5808c3.js", "assets/NoteComposer-6d7a578b.css"]),
        whileLoading: n("div", {
            style: {
                height: 410
            }
        })
    })))
}

function z1({
    disabled: e,
    parentPubId: t,
    parentPostId: s,
    parentCommentId: o,
    placeholder: i,
    tabId: a
}) {
    const r = Zt(),
        c = We(),
        {
            requireLogin: l,
            onboardingModalRef: d
        } = Bn(),
        {
            getExperimentVariant: u
        } = La(),
        p = () => {
            var f;
            e || (c ? r.open({
                parentPubId: t,
                parentPostId: s,
                parentCommentId: o,
                tabId: a
            }) : (u("homepage_welcome_card") || "control") === "control" ? l == null || l() : (f = d.current) == null || f.open())
        },
        m = Kn({
            onAddFiles: f => {
                r.open({
                    parentPubId: t,
                    parentPostId: s,
                    parentCommentId: o,
                    initialFiles: f,
                    tabId: a
                })
            },
            acceptFile: jn
        });
    return n(R, w(g({}, m.props), {
        position: "relative"
    }), n(xn, {
        onClick: p,
        disabled: e,
        resetCss: !0
    }, n(x, {
        padding: 16,
        gap: 12,
        radius: "md",
        alignItems: "center",
        bg: "secondary",
        cursor: "pointer",
        className: K(ot.inlineComposer, {
            [ot.isDragging]: m.isDragging
        })
    }, c ? n(Ot, {
        size: 36,
        user: c
    }) : n(_e, {
        flex: "auto"
    }, n(Ot, {
        size: 36
    })), n(F.B2, {
        align: "left",
        color: "secondary",
        flex: "grow"
    }, i || "What's on your mind?"), n(uo, null))))
}

function Y1({
    disabled: e,
    parentPubId: t,
    parentPostId: s,
    parentCommentId: o,
    placeholder: i,
    tabId: a
}) {
    const r = Zt(),
        c = We(),
        l = ga(),
        {
            requireLogin: d
        } = Bn(),
        u = () => {
            e || (c ? r.open({
                parentPubId: t,
                parentPostId: s,
                parentCommentId: o,
                tabId: a
            }) : d == null || d())
        },
        p = Kn({
            onAddFiles: m => {
                r.open({
                    parentPubId: t,
                    parentPostId: s,
                    parentCommentId: o,
                    initialFiles: m,
                    tabId: a
                })
            },
            acceptFile: jn
        });
    return n(R, g({}, p.props), n(xn, {
        onClick: u,
        disabled: e,
        resetCss: !0
    }, n(x, {
        padding: 16,
        gap: 12,
        alignItems: "center",
        bg: "primary",
        cursor: "pointer",
        className: K(ot.mobileInlineComposer, {
            [ot.isDropping]: p.isDragging
        })
    }, c ? n(Ot, {
        size: 36,
        user: c
    }) : n(_e, {
        flex: "auto"
    }, n(Ot, {
        size: 36
    })), n(F.B3, {
        align: "left",
        color: "secondary",
        flex: "grow"
    }, i || "What's on your mind?"), !l && n(uo, null))))
}

function uo() {
    return n(_e, {
        fontSize: 14,
        fontWeight: "semibold",
        style: {
            backgroundColor: "var(--color-accent-orange)",
            opacity: .5
        },
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        paddingX: 12,
        radius: "sm",
        color: "white",
        disabled: !0
    }, "Post")
}

function X1() {
    const e = Zt(),
        t = We(),
        s = () => {
            e.open({})
        };
    return t ? n(gn, {
        className: ot.floatingComposer,
        priority: "primary",
        size: "lg",
        onClick: s
    }, n(Ta, {
        size: 24
    })) : null
}
const Cn = {
        isOpen: !1,
        firstComment: void 0
    },
    po = Ye({
        state: Cn,
        open: () => U(void 0, null, function*() {
            throw new Error("Not implemented")
        })
    });

function Eu({
    children: e
}) {
    var p, m, f;
    const t = We(),
        s = !(t != null && t.name),
        o = _o(),
        [i, a] = b(Cn),
        {
            feedItem: r
        } = i,
        c = Tu(r),
        l = (r == null ? void 0 : r.type) === "comment" ? (m = (p = r.parentComments) == null ? void 0 : p[0]) != null ? m : r.comment : null;
    A(() => {
        t && nt(() =>
            import ("./NoteComposer-b8daa001.js"), ["assets/NoteComposer-b8daa001.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/autocomplete_results-e5db6147.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/UserBadge-a694a663.js", "assets/react-laag.esm-f47be925.js", "assets/profile-a781fd85.js", "assets/user-e16f1619.js", "assets/user-856acd57.css", "assets/Tooltip-86d56346.js", "assets/transition-c6a4911b.js", "assets/Tooltip-d0af0cf2.css", "assets/UserBadge-fb9c174e.css", "assets/_defineProperty-105d261c.js", "assets/isObject-a54dc090.js", "assets/_defineProperty-e9841d58.css", "assets/share_dialog-b74d3337.js", "assets/free_email_form-1d3fc4be.js", "assets/free_email_form.module-135823b4.js", "assets/entry-a965ffeb.js", "assets/entry-401840c0.css", "assets/free_email_form-cf4756c6.css", "assets/Menu-5342012d.js", "assets/useResponsive-08e338a7.js", "assets/x-fc38e969.js", "assets/Divider-0a4efe7e.js", "assets/Divider-f25512a6.css", "assets/chevron-right-925bdc12.js", "assets/Menu-9123dbf7.css", "assets/modal-5dbf091c.js", "assets/_baseEach-63ad03e0.js", "assets/HoverCard-cbdee1d2.js", "assets/HoverCard-41ea4b50.css", "assets/_baseIteratee-fbbabc87.js", "assets/CloseIcon-90eee5fe.js", "assets/_baseEach-6c7a4143.css", "assets/Select-f97196dc.js", "assets/chevron-down-6d7770f2.js", "assets/Select-cd38999e.css", "assets/dropdown_menu_typed-c164b42b.js", "assets/autocomplete_results-58e558b6.css", "assets/debounce-f31b8252.js", "assets/toNumber-3c911b0f.js", "assets/keyBy-bc7e2f81.js", "assets/_baseAssignValue-2cb42459.js", "assets/_createAggregator-deb99b9c.js", "assets/Modal-ab851ad1.js", "assets/Modal-faa641cb.css", "assets/Switch-b8853cbf.js", "assets/preflight-1c24e477.js", "assets/video_editor-1a867bc6.js", "assets/Progress-629d3819.js", "assets/Progress-f0f26f86.css", "assets/AlertDialog-d9b964a5.js", "assets/ProfileHoverCard-c8bfb61a.js", "assets/routeClick-cd1b3f9b.js", "assets/ProfileHoverCard-40cbd77e.css", "assets/TextInput-c03c69d6.js", "assets/AlertDialog-502ee8c4.css", "assets/info-e9da097c.js", "assets/VideoVerticalMenu-5e94a5f9.js", "assets/Attachments-84a6967e.js", "assets/CommentBody-36a2d638.js", "assets/traverse-bb97748e.js", "assets/CommentBody-c55cfff6.css", "assets/isOnReader-b27f4ba9.js", "assets/decodeHtmlEntitiesFast-d19e2d0c.js", "assets/link-90872791.js", "assets/download-8a01f574.js", "assets/podcast_apps-4f303ac3.js", "assets/podcast_apps-184969d7.css", "assets/SubstackLogoIcon-3ca41075.js", "assets/publication-1bbad178.js", "assets/Textarea-ed5c1b37.js", "assets/TextLink-9c0e1c8b.js", "assets/TextLink-f399b628.css", "assets/Unit-93a04fbc.js", "assets/Attachments-858e615b.css", "assets/unlock-12d676d9.js", "assets/VideoVerticalMenu-76a2fafc.css", "assets/file_uploader-ffeeb62a.js", "assets/util-typed-a303dda9.js", "assets/video_editor-d2e65442.css", "assets/textToJsonCore-161d8237.js", "assets/index-c0e0ed1b.js", "assets/Mention-bc402309.js", "assets/mousetrap-d052d743.js", "assets/mention-8372bb04.js", "assets/mention-e43b25a5.css", "assets/encodeHtmlEntities-ec5d3c5a.js", "assets/_copyArray-6a5e39ab.js", "assets/values-93deb65d.js", "assets/text-9fe09cd1.js", "assets/linkify-91f62846.js", "assets/BetaTag-188e1713.js", "assets/BetaTag-8b30a2bc.css", "assets/Theme-34933114.js", "assets/ErrorFromResponse-911dc961.js", "assets/UserBadgeIconOnly-381365d6.js", "assets/DropzoneOverlay-251c7ce7.js", "assets/DropzoneOverlay-86d10bf1.css", "assets/index-1907e96d.js", "assets/index-2ffed516.js", "assets/TextEditor.module-c364d602.js", "assets/TextEditor-1eb061db.css", "assets/Portal-f12cb990.js", "assets/Metadata-be2b4cf2.js", "assets/textarea-b8862a3a.js", "assets/icons-a8a65fb3.js", "assets/useConfirm-05af6f82.js", "assets/useCreateNote-5091d5e2.js", "assets/plus-circle-8195945c.js", "assets/plus-3216546d.js", "assets/LockThinIcon-fd5808c3.js", "assets/NoteComposer-6d7a578b.css"])
    }, [t]), A(() => {
        i.isOpen && nt(() =>
            import ("./NuxModal-3537bb25.js"), ["assets/NuxModal-3537bb25.js", "assets/user-e16f1619.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/user-856acd57.css", "assets/NoteReplyIcon-3ff0a340.js", "assets/share_dialog-b74d3337.js", "assets/free_email_form-1d3fc4be.js", "assets/profile-a781fd85.js", "assets/free_email_form.module-135823b4.js", "assets/entry-a965ffeb.js", "assets/entry-401840c0.css", "assets/free_email_form-cf4756c6.css", "assets/Menu-5342012d.js", "assets/react-laag.esm-f47be925.js", "assets/useResponsive-08e338a7.js", "assets/x-fc38e969.js", "assets/transition-c6a4911b.js", "assets/Divider-0a4efe7e.js", "assets/Divider-f25512a6.css", "assets/chevron-right-925bdc12.js", "assets/Menu-9123dbf7.css", "assets/modal-5dbf091c.js", "assets/_baseEach-63ad03e0.js", "assets/HoverCard-cbdee1d2.js", "assets/_defineProperty-105d261c.js", "assets/Tooltip-86d56346.js", "assets/Tooltip-d0af0cf2.css", "assets/isObject-a54dc090.js", "assets/_defineProperty-e9841d58.css", "assets/HoverCard-41ea4b50.css", "assets/_baseIteratee-fbbabc87.js", "assets/CloseIcon-90eee5fe.js", "assets/_baseEach-6c7a4143.css", "assets/Select-f97196dc.js", "assets/chevron-down-6d7770f2.js", "assets/Select-cd38999e.css", "assets/dropdown_menu_typed-c164b42b.js", "assets/useCreateNote-5091d5e2.js", "assets/ProfileHoverCard-c8bfb61a.js", "assets/UserBadge-a694a663.js", "assets/UserBadge-fb9c174e.css", "assets/routeClick-cd1b3f9b.js", "assets/ProfileHoverCard-40cbd77e.css", "assets/Close-33c005ce.js", "assets/Modal-ab851ad1.js", "assets/Modal-faa641cb.css", "assets/CommentItem-3d2a8b65.js", "assets/Attachments-84a6967e.js", "assets/CommentBody-36a2d638.js", "assets/traverse-bb97748e.js", "assets/toNumber-3c911b0f.js", "assets/CommentBody-c55cfff6.css", "assets/isOnReader-b27f4ba9.js", "assets/AlertDialog-d9b964a5.js", "assets/TextInput-c03c69d6.js", "assets/AlertDialog-502ee8c4.css", "assets/decodeHtmlEntitiesFast-d19e2d0c.js", "assets/link-90872791.js", "assets/download-8a01f574.js", "assets/keyBy-bc7e2f81.js", "assets/_baseAssignValue-2cb42459.js", "assets/_createAggregator-deb99b9c.js", "assets/podcast_apps-4f303ac3.js", "assets/podcast_apps-184969d7.css", "assets/SubstackLogoIcon-3ca41075.js", "assets/publication-1bbad178.js", "assets/Textarea-ed5c1b37.js", "assets/TextLink-9c0e1c8b.js", "assets/TextLink-f399b628.css", "assets/Unit-93a04fbc.js", "assets/Attachments-858e615b.css", "assets/formatNumber-b899aca4.js", "assets/facepile-b2a8f169.js", "assets/user-dd90bf1b.js", "assets/facepile-0c1de29e.css", "assets/NoteShareModal-7b4108ff.js", "assets/debounce-f31b8252.js", "assets/Progress-629d3819.js", "assets/Progress-f0f26f86.css", "assets/Portal-f12cb990.js", "assets/Metadata-be2b4cf2.js", "assets/plus-3216546d.js", "assets/LockThinIcon-fd5808c3.js", "assets/textarea-b8862a3a.js"])
    }, [i.isOpen]);
    const d = we(() => ({
            state: i,
            open: h => new Promise((y, _) => {
                a(w(g(g({}, Cn), h), {
                    isOpen: !0,
                    resolve: y,
                    reject: _
                }))
            })
        }), [i]),
        u = () => {
            var h, y;
            (y = (h = document.activeElement) == null ? void 0 : h.blur) == null || y.call(h), a(w(g({}, i), {
                isOpen: !1
            }))
        };
    return n(po.Provider, {
        value: d
    }, e, s ? n(Lu, {
        isOpen: i.isOpen,
        onClose: u,
        onSuccess: () => a(w(g({}, i), {
            isOpen: !0
        }))
    }) : c ? n(xe, {
        isOpen: i.isOpen,
        onClose: u,
        width: 316
    }, n(Mu, {
        onClose: u,
        requirement: c,
        writerId: (f = l == null ? void 0 : l.user_id) != null ? f : 0
    })) : n(Su, w(g({}, i), {
        isOpen: i.isOpen,
        onClose: u,
        onSuccess: h => {
            var y, _;
            h.isFirstFeedCommentByUser ? a(w(g({}, i), {
                firstComment: h
            })) : u(), o({
                type: i.editComment ? "edit_comment" : "new_comment",
                payload: {
                    comment: h
                }
            }), (y = i.onCompose) == null || y.call(i, h), (_ = i.resolve) == null || _.call(i, h)
        },
        onError: i.reject
    })), n(xe, {
        isOpen: i.isOpen && !!i.firstComment
    }, i.firstComment && n(An, {
        module: "../feed/NuxModal",
        resolve: h => h.FeedNuxShareFirstNote,
        onRequest: () => nt(() =>
            import ("./NuxModal-3537bb25.js"), ["assets/NuxModal-3537bb25.js", "assets/user-e16f1619.js", "assets/tracking-376cff7a.js", "assets/_sentry-release-injection-file-6cfd5b47.js", "assets/FlexBox-1a755411.js", "assets/FlexBox-0a60ea94.css", "assets/user-856acd57.css", "assets/NoteReplyIcon-3ff0a340.js", "assets/share_dialog-b74d3337.js", "assets/free_email_form-1d3fc4be.js", "assets/profile-a781fd85.js", "assets/free_email_form.module-135823b4.js", "assets/entry-a965ffeb.js", "assets/entry-401840c0.css", "assets/free_email_form-cf4756c6.css", "assets/Menu-5342012d.js", "assets/react-laag.esm-f47be925.js", "assets/useResponsive-08e338a7.js", "assets/x-fc38e969.js", "assets/transition-c6a4911b.js", "assets/Divider-0a4efe7e.js", "assets/Divider-f25512a6.css", "assets/chevron-right-925bdc12.js", "assets/Menu-9123dbf7.css", "assets/modal-5dbf091c.js", "assets/_baseEach-63ad03e0.js", "assets/HoverCard-cbdee1d2.js", "assets/_defineProperty-105d261c.js", "assets/Tooltip-86d56346.js", "assets/Tooltip-d0af0cf2.css", "assets/isObject-a54dc090.js", "assets/_defineProperty-e9841d58.css", "assets/HoverCard-41ea4b50.css", "assets/_baseIteratee-fbbabc87.js", "assets/CloseIcon-90eee5fe.js", "assets/_baseEach-6c7a4143.css", "assets/Select-f97196dc.js", "assets/chevron-down-6d7770f2.js", "assets/Select-cd38999e.css", "assets/dropdown_menu_typed-c164b42b.js", "assets/useCreateNote-5091d5e2.js", "assets/ProfileHoverCard-c8bfb61a.js", "assets/UserBadge-a694a663.js", "assets/UserBadge-fb9c174e.css", "assets/routeClick-cd1b3f9b.js", "assets/ProfileHoverCard-40cbd77e.css", "assets/Close-33c005ce.js", "assets/Modal-ab851ad1.js", "assets/Modal-faa641cb.css", "assets/CommentItem-3d2a8b65.js", "assets/Attachments-84a6967e.js", "assets/CommentBody-36a2d638.js", "assets/traverse-bb97748e.js", "assets/toNumber-3c911b0f.js", "assets/CommentBody-c55cfff6.css", "assets/isOnReader-b27f4ba9.js", "assets/AlertDialog-d9b964a5.js", "assets/TextInput-c03c69d6.js", "assets/AlertDialog-502ee8c4.css", "assets/decodeHtmlEntitiesFast-d19e2d0c.js", "assets/link-90872791.js", "assets/download-8a01f574.js", "assets/keyBy-bc7e2f81.js", "assets/_baseAssignValue-2cb42459.js", "assets/_createAggregator-deb99b9c.js", "assets/podcast_apps-4f303ac3.js", "assets/podcast_apps-184969d7.css", "assets/SubstackLogoIcon-3ca41075.js", "assets/publication-1bbad178.js", "assets/Textarea-ed5c1b37.js", "assets/TextLink-9c0e1c8b.js", "assets/TextLink-f399b628.css", "assets/Unit-93a04fbc.js", "assets/Attachments-858e615b.css", "assets/formatNumber-b899aca4.js", "assets/facepile-b2a8f169.js", "assets/user-dd90bf1b.js", "assets/facepile-0c1de29e.css", "assets/NoteShareModal-7b4108ff.js", "assets/debounce-f31b8252.js", "assets/Progress-629d3819.js", "assets/Progress-f0f26f86.css", "assets/Portal-f12cb990.js", "assets/Metadata-be2b4cf2.js", "assets/plus-3216546d.js", "assets/LockThinIcon-fd5808c3.js", "assets/textarea-b8862a3a.js"]),
        onClose: u,
        comment: i.firstComment
    })))
}

function Zt() {
    return Ve(po)
}

function Lu({
    isOpen: e,
    onClose: t,
    onSuccess: s
}) {
    const o = ia();
    return n(xe, {
        isOpen: e,
        onClose: t,
        fullscreenMobile: !0
    }, n(dt, {
        title: "First, set up your profile",
        description: "Introduce yourself by adding a name, bio, and photo to your profile.",
        includeClose: !0,
        onClose: t
    }), n(ji, {
        className: ot.setupProfileModalContent,
        pageTitle: "",
        user: o.user,
        optionalPhoto: !0,
        noSubscribeCta: !0,
        complete: !0,
        onSuccess: i => {
            o.setUser(i.body), s()
        }
    }))
}

function Tu(e) {
    var c, l;
    const t = We(),
        s = e == null ? void 0 : e.post,
        o = (e == null ? void 0 : e.type) == "comment" ? (l = (c = e.parentComments) == null ? void 0 : c[0]) != null ? l : e.comment : null,
        {
            user_id: i
        } = o != null ? o : {};
    let {
        reply_minimum_role: a
    } = o != null ? o : {};
    const r = Gd(i != null ? i : 0);
    if (a == null && (s == null ? void 0 : s.write_comment_permissions) === "only_paid" && (a = "paid_subscriber"), !i || !a || e != null && e.canReply || o && t && zd(o, t.id)) return null;
    if (a) {
        if (a === "free_subscriber" && (!r || !["free_subscription", "subscribed"].includes(r))) return "free_subscriber";
        if (a === "paid_subscriber" && r !== "subscribed") return "paid_subscriber"
    }
    return null
}

function Mu({
    requirement: e,
    writerId: t,
    onClose: s
}) {
    var r;
    const o = We(),
        {
            error: i,
            result: a
        } = Qe({
            pathname: `/api/v1/user/${t}/primary-publication`,
            deps: [t],
            auto: !0
        });
    return n(R, {
        padding: 16
    }, n(_e, {
        justifyContent: "center",
        paddingTop: 16,
        paddingBottom: 20
    }, n(zs, {
        size: 32,
        color: "var(--color-primary)"
    })), n(R, {
        gap: 20
    }, n(R, {
        gap: 8,
        alignItems: "center"
    }, n(F.H3, {
        align: "center"
    }, e === "free_subscriber" ? "Subscribers only" : "Paid subscribers only"), a && n(F.B3, {
        color: "secondary",
        align: "center"
    }, "To join the conversation,", " ", e === "free_subscriber" ? "subscribe" : "become a paying subscriber", " ", "to ", (r = a.name) != null ? r : "this publication", ".")), n(R, {
        gap: 8
    }, a && n(Je, {
        priority: "primary",
        rounded: !0,
        href: Kt(a, {
            user: o,
            addBase: !0,
            params: {
                utm_source: He.feedCommentReplyRestriction
            }
        })
    }, "Subscribe"), n(Je, {
        priority: "secondary",
        rounded: !0,
        onClick: s
    }, "Cancel"))))
}

function Z1({
    state: e,
    dispatch: t,
    surface: s,
    children: o
}) {
    const {
        onboardingModalRef: i
    } = Bn(), a = we(() => ({
        dispatch: t
    }), []);
    return n(qn.Provider, {
        value: s
    }, n(go.Provider, {
        value: a
    }, n(yo.Provider, {
        value: e
    }, n(Eu, null, n(Ad, null, o, e.isSigningIn && n(Ud, {
        onCancel: () => t({
            type: "sign_in",
            payload: {
                isSigningIn: !1
            }
        }),
        onSuccess: () => {
            t({
                type: "sign_in",
                payload: {
                    isSigningIn: !1
                }
            }), document.location.reload()
        },
        onSignup: () => {
            var r;
            t({
                type: "sign_in",
                payload: {
                    isSigningIn: !1
                }
            }), (r = i.current) == null || r.open()
        },
        noExit: e.signInNoExit
    }))))))
}
const qn = Ye("feed");

function G1({
    surface: e,
    children: t
}) {
    return n(qn.Provider, {
        value: e
    }, t)
}

function Pu() {
    return Ve(qn)
}

function J1(e, t, {
    extraEventProps: s = {},
    tabId: o,
    primaryItem: i
} = {}) {
    Gt("seen", e, t, {
        extraEventProps: s,
        tabId: o,
        primaryItem: i
    })
}

function Q1(e, t, s, {
    extraEventProps: o = {},
    tabId: i,
    primaryItem: a
} = {}) {
    Gt("seen_for_duration", e, t, {
        extraEventProps: w(g({}, o), {
            timeVisible: s
        }),
        tabId: i,
        primaryItem: a
    })
}

function em(e, t, s, {
    extraEventProps: o = {},
    tabId: i,
    primaryItem: a
} = {}) {
    Gt("clicked", e, t, {
        extraEventProps: w(g({
            clicked_element: s
        }, o), {
            tabId: i,
            primaryItem: a
        })
    })
}

function mo(e, t, {
    primaryItem: s
} = {}) {
    var o, i, a, r, c, l, d, u, p, m;
    return {
        item_primary_entity_key: s && "entity_key" in s ? s.entity_key : "entity_key" in e ? e.entity_key : "",
        item_entity_key: "entity_key" in e ? e.entity_key : "",
        item_type: e.type,
        item_content_user_id: "comment" in e ? e.comment && e.comment.user_id ? e.comment.user_id : 0 : "post" in e ? (a = (i = (o = e.post.publishedBylines) == null ? void 0 : o[0]) == null ? void 0 : i.id) != null ? a : e.publication.author_id : 0,
        item_context_type: "context" in e ? e.context.type : "",
        item_context_type_bucket: "context" in e && (r = e.context.typeBucket) != null ? r : "",
        item_context_timestamp: new Date("context" in e ? e.context.timestamp : new Date).toISOString(),
        item_context_user_id: "context" in e ? (c = e.context.users[0]) == null ? void 0 : c.id : void 0,
        item_context_user_ids: "context" in e && ((d = (l = e.context.users) == null ? void 0 : l.length) != null ? d : 0) > 0 ? e.context.users.map(({
            id: f
        }) => f) : [],
        item_publication_id: "publication" in e ? (u = e.publication) == null ? void 0 : u.id : void 0,
        item_post_id: (p = e.post) == null ? void 0 : p.id,
        item_comment_id: (m = e.comment) == null ? void 0 : m.id,
        item_can_reply: "canReply" in e ? e.canReply : !0,
        item_source: "frontend",
        item_model_rank: null,
        tab_id: t != null ? t : void 0,
        item_module_id: "id" in e ? e.id : void 0
    }
}

function zn(e, t, {
    primaryItem: s
} = {}) {
    return e.type === "comment" || e.type === "post" || e.type === "featuredCollection" || e.type === "featuredPublication" || e.type === "postLeaderboard" || e.type === "recommendedPosts" ? e.trackingParameters : mo(e, t, {
        primaryItem: s
    })
}

function Iu(e, {
    primaryItem: t
} = {}) {
    return w(g({}, e), {
        trackingParameters: mo(e, null, {
            primaryItem: t
        })
    })
}
const ho = new Map([
    ["postLeaderboard", "leaderboard"],
    ["recommendedPosts", "recommended"],
    ["featuredCollection", "featured_collection"],
    ["featuredPublication", "featured_publication"]
]);

function Gt(e, t, s, {
    extraEventProps: o = {},
    tabId: i,
    primaryItem: a
} = {}) {
    const r = zn(t, i != null ? i : null, {
            primaryItem: a
        }),
        c = ho.get(t.type);
    $(e === "seen" ? I.FEED_ITEM_SEEN : e === "seen_for_duration" ? I.FEED_ITEM_SEEN_FOR_DURATION : I.FEED_ITEM_CLICKED, g(g({
        surface: s,
        tabId: i,
        module: c
    }, r), o))
}

function xu(e, t, s, {
    extraEventProps: o = {},
    tabId: i,
    primaryItem: a
} = {}) {
    const r = zn(t, i != null ? i : null, {
            primaryItem: a
        }),
        c = ho.get(t.type);
    $(e === "seen" ? I.FEED_MODULE_ITEM_SEEN : I.FEED_MODULE_ITEM_CLICKED, g(g({
        surface: s,
        tabId: i,
        module: c
    }, r), o))
}

function tm(e, t, {
    extraEventProps: s = {}
} = {}) {
    fo("seen", e, t, {
        extraEventProps: s
    })
}

function nm(e, t, s, {
    extraEventProps: o = {}
} = {}) {
    fo("clicked", e, t, {
        extraEventProps: g({
            clicked_element: s
        }, o)
    })
}

function fo(e, t, s, {
    extraEventProps: o = {}
} = {}) {
    var i, a, r, c;
    $(e === "seen" ? I.FEED_USER_SUGGESTION_SEEN : I.FEED_USER_SUGGESTION_CLICKED, g({
        suggested_user_id: t.user.id,
        suggested_publication_id: (a = (i = t.publication) == null ? void 0 : i.id) != null ? a : null,
        suggestion_source: (r = t.source) != null ? r : null,
        suggestion_id: (c = t.id) != null ? c : null,
        surface: s
    }, o))
}

function sm(e, {
    utm_source: t
} = {}) {
    $(I.FEED_SCREEN_VIEWED, {
        utm_source: t,
        tab_id: e
    })
}

function om(e, {
    utm_source: t
} = {}) {
    const s = zn(e, null);
    $(I.FEED_PERMALINK_SCREEN_VIEWED, g({
        utm_source: t
    }, s))
}

function im(e, t, {
    tabId: s,
    noteId: o
} = {}) {
    $(I.FEED_HIDDEN_ATTACHMENT_SHOWN, {
        attachmentId: e,
        reason: t,
        tabId: s,
        noteId: o
    })
}

function am(e, {
    props: t,
    isModuleItem: s
} = {}) {
    const o = Pu(),
        i = s ? xu : Gt;
    return a => {
        i("clicked", e, o, {
            extraEventProps: g({
                clicked_element: a
            }, t)
        })
    }
}
const go = Ye({
    dispatch: () => Promise.resolve()
});

function _o() {
    return Ve(go).dispatch
}
const Yn = {
        isSigningIn: !1,
        signInNoExit: !1,
        pages: [],
        readingQueue: [],
        posts: new Map,
        publications: new Map,
        comments: new Map,
        inboxItems: new Map
    },
    yo = Ye(Yn);

function rm({
    initialData: e = {}
} = {}) {
    return Od(Nu, e, ({
        feedItem: t,
        readingQueue: s
    }) => {
        let o = Yn;
        return t && (o = bo(o, t)), s && (o = ko(o, s)), o
    })
}

function lm() {
    return Ve(yo)
}

function Nu(e, t) {
    var s, o, i, a, r, c;
    switch (t.type) {
        case "sign_in":
            return w(g({}, e), {
                lastDispatchType: t.type,
                isSigningIn: t.payload.isSigningIn,
                signInNoExit: (s = t.payload.signInNoExit) != null ? s : !1
            });
        case "page_load":
            {
                const {
                    result: l
                } = t.payload;
                return w(g({}, ln(e, l.items)), {
                    lastDispatchType: t.type,
                    pages: ps(e.pages, t)
                })
            }
        case "post_load":
            {
                const {
                    post: l,
                    publication: d
                } = t.payload;
                return wo(e, {
                    posts: [l],
                    publications: [d]
                })
            }
        case "post_like":
            {
                const {
                    postId: l,
                    isLiked: d
                } = t.payload,
                u = e.posts.get(l);
                return cn(e, t.type, l, Du(u, d))
            }
        case "post_restack":
            {
                const {
                    postId: l,
                    isRestacked: d
                } = t.payload,
                u = e.posts.get(l);
                return u ? cn(e, t.type, l, Ou(u, d)) : e
            }
        case "post_delete":
            {
                const {
                    publication: l,
                    post: d
                } = t.payload,
                u = new Map(e.posts);u.delete(d.id);
                const p = new Map([...e.comments].filter(([m, f]) => f.post_id !== d.id));
                return [li(d.id, {
                    noBase: !0
                }), ci(l, d, {
                    noBase: !0
                })].includes(window.location.pathname) && lt(as, {
                    replace: !0
                }),
                w(g({}, e), {
                    lastDispatchType: t.type,
                    posts: u,
                    comments: p,
                    pages: e.pages.map(m => w(g({}, m), {
                        result: m.result ? w(g({}, m.result), {
                            items: m.result.items.filter(f => {
                                var h;
                                return ((h = f.post) == null ? void 0 : h.id) !== d.id
                            })
                        }) : m.result
                    }))
                })
            }
        case "post_save":
            {
                const {
                    postId: l,
                    isSaved: d
                } = t.payload,
                u = e.posts.get(l),
                p = d == null ? !(u != null && u.is_saved) : d;
                return u ? cn(e, t.type, l, {
                    is_saved: p
                }) : e
            }
        case "comment_like":
            {
                const {
                    commentId: l,
                    isLiked: d
                } = t.payload,
                u = e.comments.get(l);
                return u ? w(g({}, e), {
                    lastDispatchType: t.type,
                    comments: _t(e.comments, l, w(g({}, u), {
                        reaction: d ? "❤" : void 0,
                        reactions: w(g({}, u.reactions), {
                            "❤": (((o = u.reactions) == null ? void 0 : o["❤"]) || 0) + (d ? 1 : -1)
                        }),
                        reaction_count: (u.reaction_count || 0) + (d ? 1 : -1)
                    }))
                }) : e
            }
        case "comment_restack":
            {
                const {
                    commentId: l,
                    isRestacked: d
                } = t.payload,
                u = e.comments.get(l);
                return w(g({}, e), {
                    lastDispatchType: t.type,
                    comments: u ? _t(e.comments, l, w(g({}, u), {
                        restacked: d,
                        restacks: (u.restacks || 0) + (d ? 1 : -1)
                    })) : e.comments
                })
            }
        case "comment_delete":
            {
                const {
                    comment: l
                } = t.payload,
                d = new Map(e.posts),
                u = new Map([...e.comments].filter(([f, h]) => h.id !== l.id && !new RegExp(`(^|.)${l.id}(.|$)`).test(h.ancestor_path))),
                p = d.get(l.post_id),
                m = l.ancestor_path && u.get(Number(l.ancestor_path.split(".").pop()));
                return m ? u.set(m.id, w(g({}, m), {
                    children_count: (m.children_count || 1) - 1,
                    children: (m.children || []).filter(f => f.id !== l.id)
                })) : p && d.set(p.id, w(g({}, p), {
                    child_comment_count: (p.child_comment_count || 1) - 1
                })),
                [Ns(l, {
                    noBase: !0
                })].includes(window.location.pathname) && lt(as, {
                    replace: !0
                }),
                w(g({}, e), {
                    lastDispatchType: t.type,
                    posts: d,
                    comments: u,
                    pages: e.pages.map(f => w(g({}, f), {
                        result: f.result ? w(g({}, f.result), {
                            items: f.result.items.filter(h => {
                                var y;
                                return ((y = h.comment) == null ? void 0 : y.id) !== l.id && !(h.parentComments || []).filter(Boolean).map(_ => _.id).includes(l.id)
                            })
                        }) : f.result
                    }))
                })
            }
        case "new_post":
            return w(g({}, e), {
                lastDispatchType: t.type,
                publications: new Map([...e.publications].concat([
                    [t.payload.publication.id, t.payload.publication]
                ])),
                posts: new Map([...e.posts].concat([
                    [t.payload.post.id, t.payload.post]
                ])),
                pages: [{
                    error: null,
                    isLoading: !1,
                    result: {
                        items: [{
                            type: "post",
                            entity_key: ri(t.payload.post.id),
                            publication: t.payload.publication,
                            post: t.payload.post,
                            context: t.payload.context || {}
                        }]
                    }
                }, ...e.pages]
            });
        case "new_comment":
            {
                const {
                    comment: l
                } = t.payload,
                d = new Map(e.posts),
                u = d.get(l.post_id);u && d.set(u.id, w(g({}, u), {
                    child_comment_count: (u.child_comment_count || 0) + 1
                }));
                const p = new Map(e.comments);p.set(l.id, l);
                const m = (((i = l.ancestor_path) == null ? void 0 : i.split(".")) || []).map(Number).filter(Boolean).map(_ => p.get(_) || null),
                    f = (a = m[m.length - 1]) != null ? a : null;f && p.set(f.id, w(g({}, f), {
                    children_count: (f.children_count || 0) + 1,
                    children: [l].concat(f.children || [])
                }));
                const y = [{
                    error: null,
                    isLoading: !1,
                    result: {
                        items: [Iu({
                            type: "comment",
                            entity_key: ai(l.id),
                            comment: l,
                            parentComments: m,
                            publication: null,
                            post: null,
                            canReply: !0,
                            context: {
                                type: "comment",
                                timestamp: new Date().toISOString(),
                                users: [],
                                fallbackReason: "",
                                fallbackUrl: null
                            }
                        })]
                    }
                }, ...e.pages];
                return w(g({}, e), {
                    lastDispatchType: t.type,
                    posts: d,
                    comments: p,
                    pages: y
                })
            }
        case "edit_comment":
            {
                const {
                    comment: l
                } = t.payload,
                d = new Map(e.comments);
                return d.set(l.id, l),
                w(g({}, e), {
                    lastDispatchType: t.type,
                    comments: d
                })
            }
        case "comments_load":
            {
                const {
                    comments: l
                } = t.payload,
                d = [],
                u = l.slice();
                for (; u.length > 0;) {
                    const p = u.pop();
                    d.push(p), u.push(...p.children || [])
                }
                return w(g({}, e), {
                    lastDispatchType: t.type,
                    comments: new Map([...e.comments].concat(d.map(p => [p.id, p])))
                })
            }
        case "item_load":
            {
                const {
                    item: l
                } = t.payload;
                return w(g({}, bo(e, l)), {
                    lastDispatchType: t.type
                })
            }
        case "items_load":
            {
                const {
                    items: l
                } = t.payload;
                return w(g({}, ln(e, l)), {
                    lastDispatchType: t.type
                })
            }
        case "new_feed_items":
            {
                const l = [...e.pages];
                if (t.payload.insertLocation) {
                    const d = {
                        error: null,
                        isLoading: !1,
                        result: {
                            items: t.payload.feedItems
                        }
                    };
                    t.payload.insertLocation === "prepend" ? l.unshift(d) : t.payload.insertLocation === "append" && l.push(d)
                }
                return w(g({}, ln(Cs(e, 10), t.payload.feedItems)), {
                    lastDispatchType: t.type,
                    pages: l
                })
            }
        case "items_cull":
            {
                const l = (c = (r = e.pages.find(d => {
                    var u;
                    return (u = d.result) == null ? void 0 : u.originalCursorTimestamp
                })) == null ? void 0 : r.result) == null ? void 0 : c.originalCursorTimestamp;
                return l && is(l).isBefore(is().subtract(10, "minutes")) ? Yn : Cs(e, 10)
            }
        case "inbox_load":
            return ko(e, t.payload);
        case "inbox_item_archive":
            {
                const {
                    contentKey: l
                } = t.payload,
                d = e.inboxItems.get(l);
                return w(g({}, e), {
                    inboxItems: _t(e.inboxItems, l, w(g({}, d), {
                        archived_at: new Date().toISOString()
                    }))
                })
            }
    }
    return w(g({}, e), {
        lastDispatchType: t.type,
        pages: ps(e.pages, t)
    })
}

function Cs(e, t) {
    var r;
    let s = 0,
        o;
    const i = [];
    for (const c of e.pages) {
        const l = (r = c.result) == null ? void 0 : r.items;
        if (!l || c.error || c.isLoading) break;
        o = c;
        for (const d of l) i.push(d), s++;
        if (s > t) break
    }
    if (!(o != null && o.result)) return e;
    const a = w(g({}, o), {
        result: w(g({}, o.result), {
            items: i
        })
    });
    return w(g({}, e), {
        pages: [a]
    })
}

function ln(e, t) {
    const s = new Map(e.publications),
        o = new Map(e.posts),
        i = new Map(e.comments);
    for (const a of t) {
        if ("publication" in a && a.publication && s.set(a.publication.id, a.publication), "post" in a) {
            const {
                post: r
            } = a;
            r && o.set(r.id, r)
        }
        if ("comment" in a) {
            const {
                comment: r
            } = a;
            if (r && (i.set(r.id, r), r.attachments))
                for (const c of r.attachments) c.type === "post" && (o.set(c.post.id, c.post), s.set(c.publication.id, c.publication))
        }
        if ("parentComments" in a)
            for (const r of a.parentComments) r && i.set(r.id, r)
    }
    return w(g({}, e), {
        publications: s,
        posts: o,
        comments: i
    })
}

function bo(e, t) {
    var s;
    return w(g({}, e), {
        posts: t.post ? _t(e.posts, t.post.id, t.post) : e.posts,
        publications: t.publication ? _t(e.publications, t.publication.id, t.publication) : e.publications,
        comments: new Map([...e.comments].concat([t.comment, ...(s = t.parentComments) != null ? s : []].filter(Boolean).map(o => [o.id, o])))
    })
}

function cn(e, t, s, o) {
    const i = new Map(e.posts),
        a = i.get(s);
    return a && i.set(a.id, g(g({}, a), o)), w(g({}, e), {
        lastDispatchType: t,
        posts: i
    })
}

function Du(e, t) {
    var i;
    const s = t != null ? t : !e.reaction,
        o = "❤";
    return {
        reaction: s,
        reactions: {
            [o]: (((i = e.reactions) == null ? void 0 : i[o]) || 0) + (t ? 1 : -1)
        }
    }
}

function Ou(e, t) {
    return {
        restacked: t,
        restacks: (e.restacks || 0) + (t ? 1 : -1)
    }
}

function wo(e, {
    posts: t,
    publications: s
}) {
    const o = new Map(e.posts);
    for (const a of t) o.set(a.id, g(g({}, o.get(a.id)), a));
    const i = new Map(e.publications);
    for (const a of s) i.set(a.id, g(g({}, i.get(a.id)), a));
    return w(g({}, e), {
        posts: o,
        publications: i
    })
}

function ko(e, t) {
    return w(g({}, wo(e, t)), {
        readingQueue: t.inboxItems.map(s => s.content_key),
        inboxItems: new Map([...e.inboxItems].concat(t.inboxItems.map(s => [s.content_key, s])))
    })
}

function _t(e, t, s) {
    const o = new Map(e);
    return o.set(t, s), o
}

function Ru({
    pub: e,
    post: t,
    comment: s,
    feedItem: o,
    onRestack: i,
    tabId: a
}) {
    var S, T;
    const r = We(),
        c = Oe(),
        l = !!r && !(e != null && e.hide_post_restacks),
        d = !!((S = s || t) != null && S.restacked),
        u = ((T = s || t) == null ? void 0 : T.restacks) || 0,
        p = _o(),
        m = Zt(),
        f = Qe({
            pathname: "/api/v1/restack/feed"
        }),
        {
            iString: h
        } = de(),
        {
            nuxModal: y,
            showRestackNux: _
        } = Au(s && !s.post_id ? "note" : s ? "comment" : "post"),
        v = () => U(this, null, function*() {
            const L = yield f.refetch({
                method: "POST",
                json: {
                    postId: s ? null : t == null ? void 0 : t.id,
                    commentId: (s == null ? void 0 : s.id) || null,
                    tabId: a
                }
            });
            if (L instanceof Error) {
                alert(Me(L));
                return
            }
            c.popToast(M => n(Se, w(g({}, M), {
                text: L.comment ? h("Note restacked") : h("Post restacked"),
                Icon: bt,
                cta: h("View"),
                href: Os()
            }))), L.comment ? p({
                type: "comment_restack",
                payload: {
                    commentId: L.comment.id,
                    isRestacked: !0
                }
            }) : p({
                type: "post_restack",
                payload: {
                    postId: L.post.id,
                    isRestacked: !0
                }
            }), _(), i == null || i(!0)
        }),
        k = () => U(this, null, function*() {
            const L = yield f.refetch({
                method: "DELETE",
                json: {
                    postId: s ? null : t == null ? void 0 : t.id,
                    commentId: (s == null ? void 0 : s.id) || null,
                    tabId: a
                }
            });
            if (L instanceof Error) {
                alert(Me(L));
                return
            }
            c.popToast(M => n(Se, w(g({}, M), {
                text: h("Restack undone"),
                Icon: bn
            }))), s ? p({
                type: "comment_restack",
                payload: {
                    commentId: s.id,
                    isRestacked: !1
                }
            }) : t && p({
                type: "post_restack",
                payload: {
                    postId: t.id,
                    isRestacked: !1
                }
            }), i == null || i(!1)
        }),
        C = L => U(this, null, function*() {
            L.preventDefault();
            try {
                yield m.open({
                    feedItem: o,
                    restackUrl: s ? di(t, s, e) : Vt(e, t),
                    tabId: a
                }), _()
            } catch (M) {}
        });
    return {
        canRestack: l,
        isRestacked: d,
        restacks: u,
        nuxModal: y,
        menuItems: [d ? n(ie, {
            icon: n(bn, null),
            onClick: k
        }, h("Undo restack")) : n(ie, {
            icon: n(bt, null),
            onClick: v
        }, h("Restack")), n(ie, {
            icon: n(Dd, null),
            onClick: C
        }, h("Restack with a note"))]
    }
}

function Au(e) {
    const t = Bu({
            entityType: e
        }),
        s = Qe({
            pathname: "/api/v1/feed/has-restacked",
            auto: !1,
            cacheTtl: 1 / 0
        }),
        o = () => U(this, null, function*() {
            var a;
            const i = (a = s.result) != null ? a : yield s.refetch();
            !(i instanceof Error) && (i == null ? void 0 : i.hasRestacked) === !1 && (t.open(), s.setResult({
                hasRestacked: !0
            }))
        });
    return {
        nuxModal: t.element,
        showRestackNux: o
    }
}

function Bu({
    entityType: e
}) {
    const [t, s] = b(!1), o = () => {
        s(!1)
    };
    return {
        open: () => {
            s(!0)
        },
        element: n(xe, {
            isOpen: t,
            onClose: o
        }, n(Uu, {
            onClose: o,
            entityType: e
        }))
    }
}

function Uu({
    onClose: e,
    entityType: t
}) {
    const {
        iString: s
    } = de();
    return n(R, {
        paddingX: 16
    }, n(_e, {
        justifyContent: "center",
        paddingTop: 32,
        paddingBottom: 24
    }, n(Xa, {
        size: 40,
        stroke: "var(--color-primary)"
    })), n(R, {
        gap: 12
    }, n(F.H3, {
        align: "center"
    }, t === "comment" && s("You restacked a comment"), t === "note" && s("You restacked a note"), t === "post" && s("You restacked a post")), n(F.B3, {
        color: "secondary",
        align: "center"
    }, t === "comment" && s("Restack comments that inspire you to share them with more people."), t === "note" && s("Restack notes that inspire you to share them with more people."), t === "post" && s("Restack posts that inspire you to share them with more people."), " ", s("Subscribers can see your restacks in the Notes tab and on your profile."))), n(R, {
        paddingBottom: 16,
        paddingTop: 20,
        gap: 8
    }, n(Le, {
        rounded: !0,
        href: Os()
    }, s("View now")), n(Le, {
        priority: "secondary",
        fill: "outline",
        rounded: !0,
        onClick: e
    }, s("OK"))))
}
const $u = ({
        audience: e,
        className: t,
        size: s = 16,
        isStatic: o,
        thin: i
    }) => e === "only_paid" ? i ? n(Ma, {
        className: t,
        height: s,
        isStatic: o
    }) : n(zs, {
        className: t,
        size: s
    }) : e === "founding" ? n(Ki, {
        className: t,
        height: s,
        isStatic: o,
        strokeWidth: 1
    }) : null,
    Fu = o => {
        var i = o,
            {
                name: e,
                children: t
            } = i,
            s = De(i, ["name", "children"]);
        return n(ye, w(g({}, s), {
            name: e,
            svgParams: {
                viewBox: "0 0 24 24",
                height: 24,
                width: 24,
                stroke: "#1C110B"
            }
        }), t)
    },
    Hu = e => n(Fu, w(g({}, e), {
        name: "ActivationUsersIcon"
    }), n("path", {
        d: "M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21",
        "stroke-width": "1.3",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), n("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M9 11C11.2091 11 13 9.20917 13 7.00003C13 4.79089 11.2091 3.00003 9 3.00003C6.79086 3.00003 5 4.79089 5 7.00003C5 9.20917 6.79086 11 9 11Z",
        "stroke-width": "1.3",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), n("path", {
        d: "M23 21V19C22.9986 17.1772 21.765 15.5858 20 15.13",
        "stroke-width": "1.3",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), n("path", {
        d: "M16 3.13004C17.7699 3.58321 19.0078 5.17803 19.0078 7.00504C19.0078 8.83204 17.7699 10.4269 16 10.88",
        "stroke-width": "1.3",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }));

function Vu(e) {
    return n(ye, w(g({}, e), {
        name: "LucideBookmark",
        svgParams: {
            height: 24,
            width: 24,
            fill: "#000000",
            strokeWidth: 0
        }
    }), n(Un, {
        height: 24,
        stroke: e.stroke,
        fill: e.fill,
        strokeWidth: e.strokeWidth
    }))
}
const vo = e => n(ye, w(g({}, e), {
        name: "LucideArrowLeftRight",
        svgParams: {
            height: 24,
            width: 24,
            fill: "#000000",
            strokeWidth: 0
        }
    }), n(Ra, {
        height: 24,
        stroke: e.stroke,
        fill: e.fill,
        strokeWidth: e.strokeWidth
    })),
    Wu = e => n(ye, w(g({}, e), {
        name: "LucideShare",
        svgParams: {
            height: 24,
            width: 24,
            fill: "#000000",
            strokeWidth: 0
        }
    }), n("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, n("path", {
        d: "M12.4376 15.6C4.77778 15.6 2 20.3999 2 20.3999C2 12.5999 5.88889 8.4 12.4376 8.4V3L22 11.9812L12.4376 21V15.6Z",
        "stroke-width": e.strokeWidth,
        fill: e.fill,
        className: "lucide",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }))),
    Ss = e => n(ye, w(g({}, e), {
        name: "LucideShare2",
        svgParams: {
            height: 24,
            width: 24
        }
    }), n($n, {
        height: 24,
        stroke: e.stroke,
        fill: e.fill,
        strokeWidth: e.strokeWidth
    })),
    ju = e => n(ye, w(g({}, e), {
        name: "PinIconSmall",
        svgParams: {
            height: 16,
            width: 14
        }
    }), n("path", {
        d: "M7 1.00006L10 1.00006C10.5523 1.00006 11.0846 1.47946 10.8452 1.97714C10.6681 2.3451 10.2927 2.75194 9.5 3.17301L10 7.51891C10.7819 7.7681 11.949 8.31222 12.9204 9.21856C13.4827 9.74324 13.0402 10.561 12.2711 10.561H7"
    }), n("path", {
        d: "M7 1.00006L4 1.00006C3.44772 1.00006 2.91538 1.47946 3.15482 1.97714C3.33185 2.3451 3.70727 2.75194 4.5 3.17301L4 7.51891C3.2181 7.7681 2.05103 8.31222 1.07961 9.21856C0.517263 9.74324 0.959808 10.561 1.72891 10.561H7"
    }), n("path", {
        d: "M7 10.561L7 15",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })),
    Ku = "_container_1lsde_1",
    qu = "_label_1lsde_5",
    zu = "_input_1lsde_9",
    Yu = "_selectedInput_1lsde_21",
    St = {
        container: Ku,
        label: qu,
        input: zu,
        selectedInput: Yu
    },
    Co = Pa.LIKE_UPSELL_LAST_SHOWN_AT,
    So = () => {
        const e = Rs.get(Co);
        if (e) {
            const t = fe(e),
                s = fe().subtract(30, "days");
            if (t.isAfter(s)) return !1
        }
        return !0
    },
    Eo = e => {
        Rs.set(Co, fe().format(), g({
            expires: 365 * 10
        }, !e.custom_domain && {
            domain: `.${new URL(As()).hostname}`
        }))
    },
    Lo = ({
        pub: e
    }) => {
        var r, c;
        const t = Ge(),
            [s, o] = b((r = e == null ? void 0 : e.plans) == null ? void 0 : r[0]),
            i = t.getConfigFor("disable_monthly_subscriptions"),
            a = t.getConfigFor("disable_annual_subscriptions");
        return n(R, {
            gap: 20
        }, n(R, {
            gap: 4
        }, n(F.H4, {
            weight: "semibold"
        }, "Support ", e.name), n(F.B4, {
            color: "secondary"
        }, "Since you liked this post, why not support ", e.name, " with a subscription?")), n("form", {
            className: St.form
        }, n(R, {
            gap: 12
        }, (c = e == null ? void 0 : e.plans) == null ? void 0 : c.map(l => {
            if (!(l.interval === "month" && i) && !(l.interval === "year" && a)) return n("label", {
                className: St.label,
                key: l.id
            }, n(x, {
                gap: 12,
                alignItems: "center"
            }, n("input", {
                name: "plan",
                type: "radio",
                value: l.id,
                onInput: () => o(l),
                checked: s && s.id === l.id,
                className: K({
                    [St.selectedInput]: s && s.id === l.id
                }, St.input)
            }), n(x, {
                gap: 8
            }, n(F.B4, {
                as: "span",
                weight: "semibold",
                color: s && s.id === l.id ? "primary" : "secondary"
            }, ui(l, e.language)), n(F.B4, {
                as: "span",
                color: "secondary"
            }, pi(l)))))
        }))), n(Le, {
            onClick: () => {
                $(I.LIKE_UPSELL_PLAN_SELECTED), lt(Kt(e, {
                    params: g({
                        utm_source: He.likeButtonUpsell
                    }, s && {
                        selectedPlanId: s.id
                    })
                }), {
                    local_navigation: !1
                })
            },
            grow: !0,
            priority: "primary-theme"
        }, "Select"))
    },
    To = ({
        pub: e,
        onClose: t,
        shareDialogRef: s
    }) => n(R, {
        gap: 20
    }, n(R, {
        gap: 4
    }, n(F.H4, {
        weight: "semibold"
    }, "Share this post with a friend"), n(F.B4, {
        color: "secondary"
    }, "Since you liked this post, why not share it to help spread the word?")), n(Le, {
        onClick: () => {
            var o;
            $(I.LIKE_UPSELL_SHARE_CLICKED), (o = s.current) == null || o.open(), t == null || t()
        },
        grow: !0,
        priority: "primary-theme"
    }, "Share")),
    cm = ({
        user: e,
        pub: t,
        post: s
    }) => {
        const o = ee(),
            i = So(),
            [a, r] = b(i),
            [c, l] = b(i);
        A(() => {
            (!i || e != null && e.is_contributor || e != null && e.is_admin) && un("show_reaction_upsell")
        }, [i, e]), A(() => {
            c && a && ($(I.LIKE_UPSELL_MODAL_SEEN, {
                source: "email",
                type: Ft(e, t) ? "share" : "paid"
            }), Eo(t))
        }, [c, a, t, e]);
        const d = () => {
            r(!a), l(!1), un("show_reaction_upsell")
        };
        return e && !e.is_contributor && !e.is_admin && c ? n(me, null, n(xe, {
            isOpen: a,
            onClose: d
        }, n(qt, null, Ft(e, t) ? n(To, {
            pub: t,
            onClose: d,
            shareDialogRef: o
        }) : n(Lo, {
            pub: t
        }))), n(On, {
            ref: o,
            user: e,
            pub: t,
            post: s
        })) : null
    },
    Xu = e => n(ye, w(g({}, e), {
        name: "DotDotDotThinIcon",
        svgParams: {
            height: 18,
            width: 18
        }
    }), n("path", {
        d: "M1.12554 8.52747C1.41102 7.46201 2.48571 6.83933 3.51336 7.11468C4.541 7.39004 5.16037 8.46664 4.87488 9.5321C4.58939 10.5976 3.5147 11.2202 2.48706 10.9449C1.45941 10.6695 0.840049 9.59292 1.12554 8.52747Z"
    }), n("path", {
        d: "M7.12803 8.52747C7.41352 7.46201 8.48821 6.83933 9.51585 7.11468C10.5435 7.39004 11.1629 8.46664 10.8774 9.5321C10.5919 10.5976 9.51719 11.2202 8.48955 10.9449C7.46191 10.6695 6.84254 9.59292 7.12803 8.52747Z"
    }), n("path", {
        d: "M13.1266 8.52747C13.4121 7.46201 14.4867 6.83933 15.5144 7.11468C16.542 7.39004 17.1614 8.46664 16.8759 9.5321C16.5904 10.5976 15.5157 11.2202 14.4881 10.9449C13.4604 10.6695 12.8411 9.59292 13.1266 8.52747Z"
    })),
    Zu = i => {
        var a = i,
            {
                children: e,
                href: t,
                onClick: s
            } = a,
            o = De(a, ["children", "href", "onClick"]);
        return n("a", g(g({
            role: "button",
            tabIndex: 0,
            href: t != null ? t : "javascript:void(0)"
        }, s && {
            onClick: r => {
                r.stopPropagation(), s(r)
            }
        }), o), e)
    };
class Xn extends Mn {
    constructor() {
        super(...arguments);
        Re(this, "toggleTopExclusion", s => en(this, (r, c) => U(this, [r, c], function*(o, {
            post: i,
            onChange: a
        }) {
            if (o.topExcluding) return;
            this.setState({
                topExcluding: s.id
            });
            const l = i.top_exclusions.includes(s.id),
                d = `/api/v1/publication/${s.id}/exclusion/${i.id}`;
            try {
                l ? (yield Q.del(d), i.top_exclusions.splice(0)) : (yield Q.post(d), i.top_exclusions.splice(0), i.top_exclusions.push(s.id)), ["/", "/beta", "/publish"].includes(window.location.pathname) && window.location.reload()
            } catch (u) {
                console.error("Failed to exclude post:", u), alert(Me(u));
                return
            } finally {
                this.setState({
                    topExcluding: null
                })
            }
            a && (yield a({
                post: i
            }))
        })));
        Re(this, "toggleSectionPin", (s, o) => en(this, (c, l) => U(this, [c, l], function*(i, {
            post: a,
            onChange: r
        }) {
            if (i.sectionPinning) return;
            this.setState({
                sectionPinning: o
            });
            const d = `/api/v1/publication/${s.id}/section/${o}/pin/${a.id}`;
            try {
                a.is_section_pinned ? (yield Q.del(d), a.is_section_pinned = !1) : (yield Q.post(d), a.is_section_pinned = !0), (["/", "/beta", "/publish"].includes(window.location.pathname) || window.location.pathname.startsWith("/s/")) && window.location.reload()
            } catch (u) {
                console.error("Failed to pin post:", u), alert(Me(u));
                return
            } finally {
                this.setState({
                    sectionPinning: null
                })
            }
            r && (yield r({
                post: a
            }))
        })));
        Re(this, "togglePin", s => en(this, (r, c) => U(this, [r, c], function*(o, {
            post: i,
            onChange: a
        }) {
            if (o.pinning) return;
            this.setState({
                pinning: s.id
            });
            const l = i.pins.includes(s.id),
                d = `/api/v1/publication/${s.id}/pin/${i.id}`;
            try {
                l ? (yield Q.del(d), i.pins.splice(i.pins.indexOf(s.id), 1)) : (yield Q.post(d), s.multiple_pins || i.pins.splice(0), i.pins.push(s.id)), ["/", "/beta", "/publish"].includes(window.location.pathname) && window.location.reload()
            } catch (u) {
                console.error("Failed to pin post:", u), alert(Me(u));
                return
            } finally {
                this.setState({
                    pinning: null
                })
            }
            a && (yield a({
                post: i
            }))
        })));
        Re(this, "sendEmail", () => U(this, null, function*() {
            const {
                post: s
            } = this.props, o = {
                everyone: "everyone",
                only_free: "free subscribers",
                only_paid: "paid subscribers",
                founding: "founding members"
            }[s.audience];
            if (!confirm(`Send this published post as an email to ${o}?`)) return;
            const i = `/api/v1/drafts/${s.id}/publish`;
            try {
                yield Q.post(i).send({
                    send: !0,
                    only_send: !0
                }), location.reload()
            } catch (a) {
                console.error("Failed to send post:", a), alert(Me(a))
            }
        }));
        Re(this, "clearCache", () => U(this, null, function*() {
            const {
                post: s
            } = this.props;
            try {
                yield Q.put(`/api/v1/posts/${s.id}/clear_cache`), location.reload()
            } catch (o) {
                console.error("Failed to clear post from cache"), alert(Me(o))
            }
        }));
        Re(this, "duplicatePost", () => U(this, null, function*() {
            this.setState({
                duplicating: !0
            });
            const {
                pub: s,
                post: o
            } = this.props;
            try {
                const i = yield Q.post(`/api/v1/posts/${o.id}/duplicate`);
                lt(mi(s, i.body.id, i.body.editor_v2), {
                    local_navigation: !1
                })
            } catch (i) {
                this.setState({
                    duplicating: !1
                }), console.error("Failed to duplicate"), alert(Me(i))
            }
        }))
    }
    isOpen() {
        return this.editMenu.isOpen()
    }
    toggle() {
        this.editMenu.toggle()
    }
    open() {
        this.editMenu.open()
    }
    close() {
        this.editMenu.close()
    }
    render({
        pub: s,
        post: o,
        hidePinning: i,
        user: a,
        emailSent: r,
        allowSendEmail: c,
        className: l,
        useDrawerOnMobile: d,
        handleCrossPost: u,
        onToggleMenu: p
    }, {
        pinning: m,
        sectionPinning: f,
        topExcluding: h,
        duplicating: y
    }) {
        let _ = null;
        o.section_id && s.sections && s.sections.length && (_ = s.sections.find(L => L.id === o.section_id));
        let v = "";
        typeof window != "undefined" && (v = window.location.pathname);
        const k = !!pn("enable_post_summarization"),
            C = o.is_section_pinned ^ f === o.section_id,
            S = o.pins.includes(s.id) ^ m === s.id,
            T = o.top_exclusions.includes(s.id) ^ h === s.id;
        return n(ya, {
            attachOnActive: !0,
            ref: L => this.editMenu = L,
            className: l,
            useDrawerOnMobile: d,
            onToggle: p
        }, n(R, {
            gap: 8,
            style: {
                minWidth: 270
            },
            onClick: L => {
                L.stopPropagation()
            }
        }, n(ie, {
            icon: n(za, null),
            href: Vt(s, o, {
                edit: !0
            })
        }, "Edit"), n(ie, {
            icon: n(Ha, null),
            disabled: y,
            onClick: () => this.duplicatePost()
        }, y ? "Copying..." : "Make a copy"), u && n(ie, {
            icon: n(Ja, null),
            onClick: u
        }, "Cross post"), !i && o.slug && [rs(s) && o.section_id && (o.section_name || (_ == null ? void 0 : _.name)) && n(ie, {
            icon: C ? n(fs, null) : n(gs, null),
            onClick: () => this.toggleSectionPin(s, o.section_id)
        }, [C ? "Unpin from" : "Pin to", ` ${o.section_name||(_==null?void 0:_.name)}`]), rs(s) && n(ie, {
            icon: S ? n(fs, null) : n(gs, null),
            onClick: () => this.togglePin(s)
        }, [S ? "Unpin from homepage" : "Pin to homepage"])], n(Rt, null, n(ie, {
            icon: n(Ba, null),
            href: hi(void 0, o.id, {
                referrer: v
            })
        }, "View stats"), o.slug && o.type !== "adhoc_email" && [n(ie, {
            icon: T ? n(Wa, null) : n(Ea, null),
            onClick: () => this.toggleTopExclusion(s)
        }, [T ? "Include in" : "Hide from", " top posts"])], !r && c && o.is_published && n(ie, {
            icon: n(Ys, null),
            onClick: () => this.sendEmail()
        }, "Send as email"), n(ie, {
            icon: n(ct, null),
            onClick: () => {
                window.open(fi(s, o.id))
            }
        }, "Get share images"), !!(k && this.props.onSummaryOpen) && n(ie, {
            icon: n(Qa, null),
            onClick: this.props.onSummaryOpen
        }, "Reader guide")), (a == null ? void 0 : a.is_global_admin) && n(Rt, null, n(ie, {
            priority: "secondary",
            onClick: () => this.clearCache()
        }, "Clear post from cache"), n(ie, {
            priority: "secondary",
            href: `${As({subdomain:"admin"})}/posts/${o.id}`
        }, "Open in Underground"))))
    }
}
Re(Xn, "state", {
    duplicating: !1
});

function dm({
    pub: e,
    post: t,
    iconHeight: s,
    hidePinning: o,
    user: i,
    emailSent: a,
    allowSendEmail: r,
    showUpdatedIcons: c,
    dropdownClassName: l,
    iconClassName: d
}) {
    const u = ee();
    return n(me, null, n(Zu, {
        onClick: () => {
            u.current.isOpen() || $(I.EDIT_POST_DROPDOWN_MENU_OPENED), u.current.toggle()
        }
    }, c ? n(Xu, {
        stroke: "#262626",
        height: s,
        className: d
    }) : n(qi, {
        stroke: "#757575",
        height: s,
        className: d
    })), n(Xn, {
        ref: u,
        pub: e,
        post: t,
        hidePinning: o,
        user: i,
        emailSent: a,
        allowSendEmail: r,
        className: l
    }))
}
const ft = "❤",
    um = (e, t, s) => {
        const {
            reaction: o,
            reactions: i,
            reactor_names: a
        } = Mo(e, t, s);
        Po(t, o, i, a)
    },
    Sn = (e, t) => Mo(e, t, !t.reaction),
    Mo = (e, t, s) => {
        let {
            reaction: o,
            reactions: i = {},
            reactor_names: a = []
        } = t;
        return i = g({}, i), a = [...a], s && !o ? (o = ft, i[o] = i[o] ? i[o] + 1 : 1, e && e.is_public_admin && a.push(e.name || "author")) : !s && o && (i[ft] = i[ft] ? i[ft] - 1 : 0, e && e.is_public_admin && (a = a.filter(r => r !== (e.name || "author"))), o = null), {
            reaction: o,
            reactions: i,
            reactor_names: a
        }
    },
    Po = (e, t, s, o) => {
        e.reaction = t, e.reactions = s, e.reactor_names = o
    };

function Gu(e, t, s, o) {
    const i = Nt(`/api/v1/${t?"comment":"post"}/${e.id}/reaction`, {
        token: o
    });
    return s ? Q.post(i).send({
        reaction: ft
    }) : Q.delete(i)
}
class Ju extends Mn {
    constructor() {
        super(...arguments);
        Re(this, "state", {
            includeModal: !1
        });
        Re(this, "modalRef", Pn());
        Re(this, "react", s => U(this, null, function*() {
            if (this.props.isStatic) return;
            s && s.stopPropagation();
            const i = !(this.props.comment || this.props.post).reaction;
            if (this.props.onReactedChange && this.props.onReactedChange(i), this.props.noSelfUpdate) return;
            const a = yield gi(this, "locked", (r, c) => U(this, null, function*() {
                const l = c.comment || c.post,
                    d = Gu(l, !!c.comment, i, c.token),
                    {
                        reaction: u,
                        reactions: p,
                        reactor_names: m
                    } = Sn(c.user, l);
                this.notifyParent({
                    reactions: p,
                    reaction: u,
                    reactor_names: m
                });
                let f;
                try {
                    yield d
                } catch (h) {
                    f = h, this.notifyParent(l)
                }
                return {
                    error: f,
                    reaction: u
                }
            }));
            return a && a.error && (a.error.response && a.error.response.statusCode === 401 ? yield this.reactionRejected(a.reaction): alert(Me(a.error))), !!a && !a.error
        }))
    }
    notifyParent({
        reaction: s,
        reactions: o,
        reactor_names: i
    }) {
        const a = g({}, this.props.post),
            r = this.props.comment && g({}, this.props.comment);
        Po(r || a, s, o, i), this.props.onChange && this.props.onChange({
            post: a,
            comment: r
        })
    }
    reactionRejected(s) {
        return U(this, null, function*() {
            $(I.REACTION_REJECTED, {
                comment_id: this.props.comment && this.props.comment.id,
                post_id: this.props.post && this.props.post.id,
                reason: "Not logged in",
                unreact: !s
            }), yield new Promise(o => {
                this.state.includeModal ? this.modalRef.current.open(o) : this.setState({
                    includeModal: !0
                }, () => this.modalRef.current.open(o))
            })
        })
    }
    render({
        className: s,
        user: o,
        pub: i,
        comment: a,
        height: r,
        isStatic: c,
        post: l,
        buttonStyle: d,
        hideReactionCount: u,
        countInParenthesesStyle: p,
        iString: m
    }) {
        const f = a || l,
            h = f.reaction,
            y = f.reactions || {},
            _ = Xt(Object.values(y));
        let v;
        return l && l.reaction_url_override ? v = l.reaction_url_override : c ? v = ve.REACTION_URL : v = "javascript:void(0)", n(F, {
            as: "span",
            decoration: "hover-underline",
            color: h ? "accent-red" : "pub-secondary-text",
            className: s
        }, this.props.render ? this.props.render({
            liked: h,
            numReactions: _ > 0 ? gt(_) : null,
            onClick: k => {
                this.react(k)
            }
        }) : n("a", {
            href: v,
            className: K("like-button", {
                button: d,
                "post-meta-button": d,
                liked: h
            }),
            onClick: k => this.react(k)
        }, n(_e, {
            gap: 6,
            alignItems: "center",
            className: s
        }, c ? n(tt, {
            ampProps: {
                layout: "fixed"
            },
            isStatic: !0,
            height: r,
            stroke: "var(--color-secondary-themed)",
            fill: "transparent"
        }) : n(_e, {
            className: "reaction-container"
        }, n(tt, {
            className: "animation"
        }), !h && n(tt, {
            strokeWidth: 2,
            height: r,
            fill: "transparent",
            stroke: "var(--color-secondary-themed)"
        }), h && n(tt, {
            height: r,
            strokeWidth: 2
        })), p ? n(F.Meta, {
            color: h ? "accent-red" : "pub-secondary-text",
            className: "like-count"
        }, m(h ? "Liked" : "Like"), !u && _ > 0 ? ` (${gt(_)})` : "") : !u && _ > 0 ? n("span", {
            className: "like-count"
        }, gt(_)) : d ? n("span", {
            className: "like-count"
        }, m("Like")) : null)), !c && this.state.includeModal && n(Io, {
            modalRef: this.modalRef,
            user: o,
            pub: i,
            comment: a,
            react: this.react
        }))
    }
}
const pm = Mi(Ju);

function Io({
    comment: e,
    pub: t,
    user: s,
    modalRef: o,
    onClose: i,
    react: a
}) {
    const {
        iString: r
    } = de();
    return n(xa, {
        ref: o,
        onClose: i
    }, n(R, {
        alignItems: "center",
        paddingTop: 80,
        gap: 24
    }, n(F.H2, null, r(e ? "Subscribe to like this comment" : "Subscribe to like this post")), n(Gi, {
        user: s,
        pub: t,
        showLogin: !0,
        showTerms: !0,
        source: "like_button",
        onSuccess: c => U(this, null, function*() {
            const l = c && c.body && c.body.email;
            c && c.body && c.body.prompt_to_login || !(yield a()) ? window.location.href = _i({
                for_pub: t.subdomain,
                email: l
            }) : o != null && o.current && (Ia({
                freeSignup: !0,
                freeSignupEmail: l
            }), yield o.current.close())
        })
    })))
}
const dn = 150,
    Qu = ({
        children: e,
        expanded: t,
        renderWhenCollapsed: s,
        onEnter: o,
        flex: i
    }) => {
        const a = ee(null),
            [r, c] = b(t ? "expanded" : "collapsed"),
            [l, d] = b(null);
        return A(() => {
            t && r === "collapsed" && c("startExpanding"), r === "startExpanding" && a.current && (d(a.current.offsetHeight), c("expanding"), setTimeout(() => {
                c("expanded"), o && o()
            }, dn)), !t && r === "expanded" && a.current && (d(a.current.offsetHeight), c("startCollapsing")), r === "startCollapsing" && (c("collapsing"), setTimeout(() => {
                c("collapsed")
            }, dn))
        }, [t, r]), n("div", {
            style: {
                height: r === "collapsed" || r === "startExpanding" || r === "collapsing" ? 0 : r === "expanding" || r === "startCollapsing" ? l : null,
                transition: `height ${dn}ms ease-in-out`,
                overflow: r === "expanded" ? "visible" : "hidden",
                display: i ? "flex" : "block",
                flexDirection: "column"
            }
        }, n("div", {
            ref: a,
            style: {
                paddingTop: .05,
                paddingBottom: .05,
                display: i ? "flex" : "block",
                flex: "0 0 auto",
                flexDirection: "column"
            }
        }, (r !== "collapsed" || s) && e))
    },
    ep = "_textarea_1lk53_1",
    tp = "_postPreview_1lk53_20",
    np = "_pubIcon_1lk53_25",
    sp = "_modalWrap_1lk53_36",
    op = "_select_1lk53_40",
    it = {
        textarea: ep,
        postPreview: tp,
        pubIcon: np,
        modalWrap: sp,
        select: op
    },
    Et = {
        AUDIENCE_SELECTION: "AUDIENCE_SELECTION",
        PREAMBLE: "PREAMBLE"
    },
    ip = {
        everyone: "Everyone",
        only_paid: "Paid subscribers",
        founding: "Founding members"
    },
    ap = ({
        pub: e,
        post: t,
        user: s,
        open: o,
        setOpen: i,
        placeholderText: a = ""
    }) => {
        const r = fe().add(2, "minutes"),
            [c, l] = b(null),
            [d, u] = b(a),
            [p, m] = b(!1),
            [f, h] = b(!0),
            [y, _] = b(Et.PREAMBLE),
            [v, k] = b(null),
            [C, S] = b(null),
            [T, L] = b(!0),
            [M, D] = b(!0),
            [N, B] = b(!1),
            [H, O] = b(fe().add(1, "day").toDate()),
            [X, E] = b("");
        Ge();
        const q = {
                everyone: "to everyone",
                founding: "to founding members",
                only_paid: "to paid subscribers"
            }[C],
            J = T ? "Send" : "Publish",
            ae = N && H ? fe(H).max(r).fromNow() : "",
            pe = `${J} cross-post ${T?q:""} ${ae}`,
            W = c == null ? void 0 : c.find(P => P.id === v),
            V = Oe();
        A(() => {
            o && !c && f && (() => U(void 0, null, function*() {
                var te;
                try {
                    const Z = yield Q.get("/api/v1/restack/restackable-pubs"), le = ((te = Z == null ? void 0 : Z.body) == null ? void 0 : te.publications) || [];
                    l(le), h(!1), le.length > 0 && (k(le[0].id), S("everyone"))
                } catch (Z) {
                    console.error("Failed to load user profile for restacking: ", Z)
                }
            }))()
        }, [o, s, f, h, c, l]), A(() => {
            o && c && c.length === 0 && !f && lt(yi())
        }, [o, c, f]);
        const ne = (P, te) => {
                i(!o, te), _(Et.PREAMBLE), E(null), h(!1), te && (u(""), $(I.RESTACK_POST_SUBMITTED, {
                    restacked_publication_id: e.id,
                    restacked_post_id: t.id,
                    restacking_user_id: s.id,
                    restacking_publication_id: W.id,
                    restacking_blurb: d
                }), V.popToast(Z => n(Se, g({
                    text: N ? `This post is scheduled to cross-post ${ae}` : "This post was cross-posted to your subscribers"
                }, Z)))), $(I.CROSS_POST_MODAL_CLOSED, {
                    didRestack: te
                })
            },
            j = () => U(void 0, null, function*() {
                $(I.CROSS_POST_MODAL_SUBMIT_CLICKED), h(!0);
                try {
                    if (N) {
                        const P = fe(H).max(r).toDate();
                        yield Q.post(`/api/v1/restack/${t.id}/schedule`).send({
                            audience: C,
                            restackingPubId: W.id,
                            introText: d,
                            sendEmail: T,
                            publishToWeb: M,
                            scheduledAt: P
                        })
                    } else yield Q.post(`/api/v1/restack/${t.id}`).send({
                        audience: C,
                        restackingPubId: W.id,
                        introText: d,
                        sendEmail: T,
                        publishToWeb: M
                    });
                    $(I.CROSS_POST_MODAL_SUBMITTED), ne({}, !0);
                    return
                } catch (P) {
                    if ($(I.CROSS_POST_MODAL_SUBMIT_FAILED, {
                            error: Me(P, "Could not retrieve error message")
                        }), console.error("Failed to restack post:", P), P instanceof TypeError) throw E("An unknown error ocurred. This post was not recommended."), h(!1), P;
                    E(Me(P, "This post could not be recommended.")), h(!1)
                }
            });
        return n(xe, {
            isOpen: o,
            onClose: ne
        }, n(dt, {
            includeClose: !0,
            onClose: ne,
            title: "Cross-post to your Substack"
        }), n("div", {
            "data-testid": "modal-ref-id",
            className: it.modalWrap
        }, y === Et.PREAMBLE ? n(R, {
            gap: 24,
            paddingTop: 12
        }, n(R, {
            gap: 16
        }, n("textarea", g({
            className: it.textarea,
            placeholder: "Say why this post is worth reading...",
            onChange: P => {
                p || (m(!0), $(I.CROSS_POST_MODAL_TYPING_STARTED)), u(P.target.value)
            },
            value: d,
            maxLength: "800"
        }, Na)), n(R, {
            gap: 12,
            className: it.postPreview,
            paddingX: 16,
            paddingY: 16
        }, n(x, {
            alignItems: "center",
            gap: 8
        }, n(Di, {
            pub: e,
            size: 24,
            logo_url: e.logo_url,
            linkify: !1,
            className: it.pubIcon,
            noMargin: !0
        }), n(F.B4, {
            color: "primary",
            weight: "semibold",
            size: 14
        }, e.name)), n(R, {
            gap: 4
        }, n(F.H4, {
            weight: "semibold"
        }, t.title), n(F.B3, {
            color: "secondary"
        }, bi(((t.truncated_body_text || "").replace(ve.PUBLICATION_NAME, e.name) || t.subtitle || "").substring(0, 100)))))), X && n(F.B4, {
            color: "accent-red"
        }, X), n(Le, {
            priority: "primary-theme",
            onClick: () => {
                if ($(I.CROSS_POST_MODAL_CONTINUE_CLICKED), !d) {
                    E("Please write something to your subscribers to continue"), $(I.CROSS_POST_MODAL_CONTINUE_FAILED);
                    return
                }
                E(""), _(Et.AUDIENCE_SELECTION), $(I.CROSS_POST_MODAL_CONTINUED)
            },
            disabled: f || !d,
            className: "restack-modal-button "
        }, "Continue")) : n(R, {
            gap: 24,
            paddingTop: 12
        }, n(R, {
            gap: 20
        }, n(R, {
            gap: 8
        }, n(F.B3, null, "Post to"), n(hs, {
            value: W.id,
            onChange: P => {
                S("everyone"), k(Number(P))
            },
            className: it.select
        }, c.map(P => n("option", {
            value: P.id
        }, P.name)))), n(R, {
            gap: 8
        }, n(F.B3, null, "Send to"), n(hs, {
            value: C,
            onChange: P => S(P),
            className: it.select
        }, ((W == null ? void 0 : W.payments_state) === "enabled" ? wi() : ["everyone"]).map(P => n("option", {
            value: P
        }, ip[P]))))), n(R, {
            gap: 12
        }, n(F.B3, null, "Delivery"), n(tn, {
            value: T,
            label: "Send cross-post via email",
            onChange: P => L(P)
        }), n(tn, {
            value: M,
            label: "Publish cross-post to web",
            onChange: P => D(P)
        }), n(tn, {
            value: N,
            label: "Schedule time to publish cross-post",
            onChange: P => B(P),
            contentBelow: n(Qu, {
                expanded: N
            }, n(R, {
                paddingTop: 8
            }, n(Oi, {
                value: H != null ? H : new Date,
                max: fe().add(92, "days").toDate(),
                onChange: P => {
                    O(new Date(P.currentTarget.value))
                }
            })))
        })), X && n(F.B4, {
            color: "accent-red"
        }, X), n(Le, {
            priority: !T && !M ? "secondary" : "primary-theme",
            onClick: j,
            disabled: f || !T && !M,
            className: "restack-modal-button "
        }, pe))))
    };

function Ue(e, t) {
    return e === "button" && t === "verbose" ? 16 : e === "button" ? 20 : e === "tabs" ? 24 : e === "compressed" ? 16 : e === "large-on-dark" ? 20 : 0
}
const Xe = 2,
    Es = ({
        isFullWidth: e,
        children: t
    }) => e ? n(x, {
        className: "post-ufi-button-wrapper",
        gap: 8
    }, t) : t;

function rp({
    post: e,
    pub: t,
    user: s,
    style: o,
    justified: i,
    isStatic: a,
    hideReactions: r,
    hideComments: c,
    hideShare: l,
    hideSavePost: d,
    useShareLabel: u,
    allowEdit: p,
    editButtonIsLast: m,
    onChange: f,
    addedPodcastComments: h,
    hidePinning: y,
    showEmailSent: _,
    allowSendEmail: v,
    footerHidden: k,
    onCommentsClick: C,
    onClipClick: S,
    labelStyle: T,
    showPreamble: L,
    preambleConfig: M = {},
    position: D,
    hideByDisabling: N,
    showRestackButton: B,
    showRestackModal: H,
    showClipping: O,
    hideFeedRestackButton: X,
    onToggleMenu: E,
    postReactionToken: q,
    initialShareTimestamp: J
}) {
    const ae = js(),
        {
            showPins: re,
            showAudience: pe,
            showDate: W,
            showDatetime: V,
            showAuthor: ne,
            showPublicationName: j,
            showCrossPostedPublicationName: P
        } = M;
    r = r || !t.community_enabled || !e.slug || e.is_draft;
    const te = Xt(Object.values((e == null ? void 0 : e.reactions) || {})),
        Z = _ ? !!e.email_sent_at : null,
        le = Vn(),
        z = p && (s == null ? void 0 : s.is_contributor) && !le,
        Y = Zn({
            post: e,
            pub: t,
            user: s,
            defaultOpen: B && H && D !== "post-footer" && D !== "post-footer-full-width"
        }),
        Ce = s && n(Ao, {
            style: o,
            pub: t,
            post: e,
            user: s,
            hidePinning: y,
            emailSent: Z != null ? Z : void 0,
            allowSendEmail: v,
            footerHidden: k,
            canBeCrossPosted: B,
            onToggleMenu: E
        }),
        he = !X && t.community_enabled && e.slug && !e.is_draft,
        Te = B && !L && (N || r && c && l && !z),
        Pe = T === "counts-or-none" && te ? "count" : T === "labels" ? "cta" : "none",
        Ne = T === "counts-or-none" && e.comment_count ? "count" : T === "labels" ? "cta" : "none",
        G = s && e.videoUpload && io(s, e, e.videoUpload),
        ce = D === "post-footer-full-width";
    return n("div", {
        className: K("post-ufi", `style-${o}`, {
            justified: i,
            themed: ae,
            "single-full-width-button": Te,
            "vertically-stacked": D === "shows-episode-player"
        })
    }, n(Es, {
        isFullWidth: ce
    }, L && M && n(Ep, {
        pub: t,
        post: e,
        showPins: re,
        showAudience: pe,
        showDate: W,
        showDatetime: V,
        showEmailSent: _,
        showAuthor: ne,
        showPublicationName: j,
        showCrossPostedPublicationName: P
    }), z && !m && Ce, n(mn, {
        configKey: "clipper_v2",
        value: !1
    }, O && e.videoUpload && n(Zc, {
        post: e,
        mediaUpload: e.videoUpload,
        disabled: !G,
        onClipClick: S,
        style: o
    })), (N || !r) && n(xo, {
        post: e,
        pub: t,
        user: s,
        labelStyle: N && r ? "none" : Pe,
        style: o,
        onChange: f,
        isStatic: a,
        isDisabled: N && r || D === "shows-episode-player" && !s,
        postReactionToken: q
    }), (N || !c) && n(Ro, {
        post: e,
        pub: t,
        isStatic: a,
        labelStyle: N && c ? "none" : Ne,
        style: o,
        count: e.comment_count + (h || 0),
        onClick: C,
        isDisabled: N && c
    }), he && s && n(No, {
        pub: t,
        post: e,
        onChange: f,
        style: o,
        onToggleMenu: E
    }), !l && n(oo, {
        post: e,
        pub: t,
        user: s,
        trigger: {
            style: o,
            labelStyle: u ? "cta" : "none",
            isStatic: a
        },
        position: D,
        initialShareTimestamp: J,
        showClipping: O && !!e.videoUpload,
        onClipClick: S,
        disableClipping: !G
    })), n(Es, {
        isFullWidth: ce
    }, !d && !B && s && n(Ls, {
        post: e,
        labelStyle: Ne,
        position: D,
        style: o,
        onChange: f
    }), z && m && Ce, B && !z && D === "post-header" && n(me, null, n(zt, {
        trigger: n(Ie, {
            "aria-label": "View more",
            size: 40,
            fill: "outline"
        }, n(Nn, {
            size: 20
        }))
    }, s && n(wp, {
        onClick: Y.open,
        post: e,
        pub: t,
        user: s
    }), n(Oo, {
        post: e,
        onChange: f
    }))), B && !z && ce && n(me, null, !d && n(Ls, {
        post: e,
        labelStyle: "verbose",
        position: D,
        style: "button",
        onChange: f
    }), s && n(bp, {
        onClick: Y.open,
        post: e,
        pub: t,
        user: s,
        style: "button"
    }))), Y.modal)
}

function Zn({
    pub: e,
    user: t,
    post: s,
    defaultOpen: o = !1
}) {
    const [i, a] = b(o);
    return A(() => {
        o && t && $(I.RESTACK_POST_CLICKED, {
            restacked_publication_id: e.id,
            restacked_post_id: s.id,
            restacking_user_id: t.id,
            is_from_email: !0
        })
    }, [o, e, s, t]), {
        open: () => a(!0),
        modal: n(ap, {
            pub: e,
            user: t,
            post: s,
            open: i,
            setOpen: a
        })
    }
}

function lp() {
    const t = typeof window == "undefined",
        s = 250,
        [o, i] = b(t ? 0 : window.pageYOffset),
        [a, r] = b(!1),
        c = 100,
        l = we(() => Date.now() + 1e3, []),
        d = ee(0);
    return A(() => {
        if (t) return;
        const u = Xs(() => {
            const p = Date.now(),
                m = (p - d.current) / 1e3,
                h = (o - window.pageYOffset) / m;
            d.current = p, !(window.pageYOffset < 0) && (p < l ? r(!1) : -h > c ? r(!0) : h > c && r(!1), i(window.pageYOffset))
        }, s);
        return window.addEventListener("scroll", u), () => window.removeEventListener("scroll", u)
    }, [t, o, i, r, l, d, !1]), a
}

function mm({
    post: e,
    pub: t,
    user: s,
    isStatic: o,
    onChange: i,
    allowEdit: a,
    hidePinning: r,
    showEmailSent: c,
    allowSendEmail: l,
    hideComments: d,
    onCommentsClick: u,
    showRestackButton: p,
    showRestackModal: m,
    setFooterShown: f,
    postReactionToken: h
}) {
    const y = lp(),
        _ = Oe();
    return A(() => {
        _.addOffset(64 * (y ? 1 : -1)), f && f(!y)
    }, [y, f]), n(_e, {
        alignItems: "center",
        padding: 8,
        className: K("mobile-footer-ufi", {
            hidden: y
        })
    }, n(rp, {
        post: e,
        pub: t,
        user: s,
        isStatic: o,
        justified: !0,
        style: "tabs",
        onChange: i,
        allowEdit: a,
        editButtonIsLast: !0,
        hidePinning: r,
        showEmailSent: c,
        allowSendEmail: l,
        footerHidden: y,
        labelStyle: "counts-or-none",
        hideComments: d,
        onCommentsClick: u,
        position: "mobile-toolbar",
        hideByDisabling: !0,
        showRestackModal: m,
        showRestackButton: p,
        postReactionToken: h
    }))
}

function cp({
    post: e,
    pub: t,
    user: s,
    surface: o,
    onChange: i,
    subscribePromptRef: a,
    postReactionToken: r
}) {
    const c = !!(e != null && e.reaction),
        l = Vn(),
        d = Qe({
            pathname: Nt(l ? `/api/v1/cross-post/${e==null?void 0:e.id}/reaction` : `/api/v1/post/${e==null?void 0:e.id}/reaction`, {
                token: r
            }),
            method: "POST",
            deps: [e == null ? void 0 : e.id]
        }),
        u = Nd({
            user: s,
            noBase: !1
        });
    return {
        isLiked: c,
        toggle: () => U(this, null, function*() {
            var _;
            if (d.isLoading) return "error";
            c || !u() && s && !s.is_admin && !s.is_contributor && (a != null && a.current) && So() && ($(I.LIKE_UPSELL_MODAL_SEEN, {
                source: "web",
                type: s != null && s.is_free_subscribed ? Ft(s, t) ? "share" : "paid" : "free"
            }), a.current.open(), Eo(t));
            const {
                reaction: p,
                reactions: m,
                reactor_names: f
            } = Sn(s, e);
            e.reaction = p, e.reactions = m, e.reactor_names = f, i == null || i({
                post: e
            });
            const h = yield d.refetch(p ? {
                method: "POST",
                json: {
                    reaction: "❤",
                    surface: o
                }
            } : {
                method: "DELETE"
            }), y = (_ = h == null ? void 0 : h.response) == null ? void 0 : _.status;
            if (y) {
                const {
                    reaction: v,
                    reactions: k,
                    reactor_names: C
                } = Sn(s, e);
                e.reaction = v, e.reactions = k, e.reactor_names = C, i == null || i({
                    post: e
                })
            }
            return y === 401 ? "unauthorized" : y ? "error" : p ? "liked" : "unliked"
        })
    }
}

function hm() {
    const e = yp();
    return (a, r, ...c) => U(this, [a, r, ...c], function*(s, o, {
        tabId: i
    } = {}) {
        yield st(`/api/v1/post/${s}/reaction`, o ? {
            method: "POST",
            json: {
                reaction: "❤",
                surface: "reader",
                tabId: i
            }
        } : {
            method: "DELETE",
            json: {
                tabId: i
            }
        }), e(o)
    })
}

function xo({
    post: e,
    pub: t,
    user: s,
    style: o,
    labelStyle: i,
    onChange: a,
    isStatic: r,
    isDisabled: c,
    postReactionToken: l
}) {
    const d = Xt(Object.values((e == null ? void 0 : e.reactions) || {})),
        u = i === "count" ? gt(d || 0) : i === "cta" ? "Like" : null;
    return n(fp, {
        post: e,
        pub: t,
        user: s,
        onChange: a,
        isStatic: r,
        style: o,
        postReactionToken: l
    }, ({
        isLiked: p,
        handleLike: m
    }) => n($e, {
        style: o,
        state: p ? "liked" : void 0,
        icon: n(tt, {
            className: "icon",
            height: Ue(o),
            strokeWidth: Xe
        }),
        onClick: c ? () => {} : m,
        noLabel: i === "none",
        isDisabled: c
    }, u))
}

function dp({
    style: e,
    onClick: t
}) {
    return n($e, {
        style: e,
        state: void 0,
        icon: n(ja, {
            className: "icon",
            height: Ue(e),
            strokeWidth: Xe
        }),
        "aria-label": "menu",
        onClick: t
    })
}

function No({
    pub: e,
    post: t,
    style: s,
    onChange: o,
    onToggleMenu: i,
    initialShareTimestamp: a
}) {
    const {
        canRestack: r,
        isRestacked: c,
        restacks: l,
        menuItems: d,
        nuxModal: u
    } = Ru({
        pub: e,
        post: t,
        onRestack: f => {
            o == null || o({
                post: w(g({}, t), {
                    restacked: f,
                    restacks: l + (f ? 1 : -1)
                })
            })
        }
    });
    if (!r) return null;
    const p = !e.community_enabled,
        m = n($e, {
            style: s,
            state: c ? "restacked" : void 0,
            icon: n(bt, {
                className: "icon",
                height: Ue(s),
                strokeWidth: Xe
            }),
            noLabel: l === 0,
            "aria-label": "menu",
            isDisabled: p
        }, l.toLocaleString(void 0, {
            maximumSignificantDigits: 4
        }));
    return n(me, null, u, p ? m : n(zt, g({
        trigger: m
    }, i && {
        onOpen: () => {
            i({
                active: !0
            })
        },
        onClose: () => {
            i({
                active: !1
            })
        }
    }), d))
}

function up({
    postId: e,
    isOpen: t,
    onClose: s
}) {
    const o = Ge(),
        {
            iString: i
        } = de(),
        [a, r] = b(),
        c = o.getConfigFor("enable_post_summarization") == !0,
        l = ee(!1),
        d = Ee(() => {
            l.current = !0, Q.post(`/api/v1/posts/${e}/summary`).then(u => {
                var p;
                (p = u.body) != null && p.summary && r(u.body.summary)
            }).finally(() => {
                l.current = !1
            })
        }, [e]);
    return A(() => {
        t && c && !a && !l.current && d()
    }, [t, d, c, a]), c ? n(xe, {
        isOpen: t,
        onClose: s,
        width: 750
    }, n(dt, {
        includeClose: !0,
        title: i("Reader guide"),
        onClose: s
    }), n(R, {
        padding: 16,
        paddingBottom: 32
    }, a ? n("div", {
        dangerouslySetInnerHTML: {
            __html: a
        }
    }) : n(R, {
        alignItems: "center",
        justifyContent: "center",
        style: {
            flex: 1,
            minHeight: 300
        }
    }, n("div", {
        className: "embed-loader"
    })))) : null
}

function pp({
    post: e,
    pub: t,
    user: s,
    onChange: o,
    showRestackModal: i,
    canBeCrossPosted: a,
    onSummaryOpen: r
}) {
    const c = "button",
        d = Ge().getConfigFor("enable_post_summarization") == !0,
        u = Zn({
            pub: t,
            user: s,
            post: e,
            defaultOpen: i && a
        }),
        p = () => {
            u.open(), $(I.RESTACK_POST_CLICKED, {
                restacked_publication_id: t.id,
                restacked_post_id: e.id,
                restacking_user_id: s.id,
                is_from_email: !1
            })
        };
    return n(me, null, n(zt, {
        trigger: n($e, {
            style: c,
            icon: n(Nn, {
                className: "icon edit-icon",
                size: Ue(c),
                strokeWidth: 2
            }),
            noLabel: !0,
            "aria-label": "More"
        })
    }, s && n(Oo, {
        post: e,
        onChange: o,
        showIcon: !0
    }), d && n(ie, {
        icon: n(qa, {
            height: 24,
            strokeWidth: 2
        }),
        onClick: r
    }, "Reader guide"), a && n(ie, {
        icon: n(vo, null),
        onClick: p
    }, "Cross post"), s && n(ie, {
        icon: n(Va, null),
        href: Si(e.id)
    }, "Substack Reader")), u.modal)
}

function mp(e) {
    var s;
    const t = Xt(Object.values(((s = e.post) == null ? void 0 : s.reactions) || {}));
    return n(xo, w(g({}, e), {
        labelStyle: t > 0 ? "count" : "none"
    }))
}
const hp = ({
    pub: e,
    user: t
}) => {
    const [s, o] = b(t == null ? void 0 : t.email), [i, a] = b(!1), {
        iString: r
    } = de();
    return n(R, {
        gap: 20
    }, n(R, {
        gap: 4
    }, n(F.H4, {
        translated: !0,
        weight: "semibold"
    }, "Support ", I18N.p(e.name)), n(F.B4, {
        translated: !0,
        color: "secondary"
    }, "Since you liked this post, why not subscribe?")), n(R, {
        gap: 12
    }, n("input", {
        disabled: !!(t != null && t.email),
        value: s,
        onChange: c => o(c.currentTarget.value)
    }), n(Le, {
        onClick: () => U(void 0, null, function*() {
            $(I.LIKE_UPSELL_FREE_SUBSCRIBED, {
                email: s
            }), a(!0);
            try {
                const c = yield Q.post("/api/v1/free").send({
                    email: s,
                    source: "like-button-upsell"
                }), {
                    referral_token: l
                } = c.body;
                Ji(), lt(Kt(e, {
                    params: {
                        utm_source: He.likeButtonUpsell,
                        just_signed_up: !0,
                        referral_token: l
                    }
                }), {
                    local_navigation: !1
                })
            } catch (c) {
                alert(Me(c))
            }
        }),
        grow: !0,
        disabled: i,
        priority: "primary-theme"
    }, r(i ? "Please wait..." : "Subscribe"))))
};

function fp({
    post: e,
    pub: t,
    user: s,
    onChange: o,
    isStatic: i,
    children: a,
    style: r,
    postReactionToken: c
}) {
    const l = ee(),
        d = ee(),
        {
            isLiked: u,
            toggle: p
        } = cp({
            post: e,
            pub: t,
            user: s,
            subscribePromptRef: l,
            onChange: o,
            postReactionToken: c
        }),
        m = ee(),
        [f, h] = b(!1),
        y = Ee(_ => U(this, null, function*() {
            var k;
            (k = _ == null ? void 0 : _.stopPropagation) == null || k.call(_), (yield p()) === "unauthorized" && h(!0)
        }), [p]);
    return A(() => {
        !(m != null && m.current) || !f || m.current.open()
    }, [f]), n("div", {
        className: K("like-button-container", "post-ufi-button", `style-${r}`, u && "state-liked")
    }, a({
        isLiked: u,
        handleLike: y
    }), !i && f && n(Io, {
        modalRef: m,
        user: s,
        pub: t,
        onClose: () => h(!1),
        react: p
    }), s && !s.is_admin && !s.is_contributor && (r === "button" || r === "tabs") && n(ba, {
        ref: l,
        className: K("subscribe-prompt-dropdown", !(s != null && s.is_free_subscribed) && "free"),
        hideMenuTail: !0
    }, s != null && s.is_free_subscribed ? Ft(s, t) ? n(To, {
        pub: t,
        onClose: () => {
            var _;
            return (_ = l.current) == null ? void 0 : _.close()
        },
        shareDialogRef: d
    }) : n(Lo, {
        pub: t
    }) : n(hp, {
        pub: t,
        user: s
    })), !i && n(On, {
        ref: d,
        user: s,
        pub: t,
        post: e
    }))
}

function Do({
    post: e,
    defaultSaved: t,
    isSaved: s,
    trackSurface: o
}) {
    var i;
    return gp({
        postId: e.id,
        defaultSaved: (i = t != null ? t : e.is_saved) != null ? i : !1,
        isSaved: s,
        trackSurface: o
    })
}

function gp({
    postId: e,
    defaultSaved: t,
    isSaved: s,
    trackSurface: o
}) {
    const [i, a] = b(t), r = s != null ? s : i, {
        refetch: c
    } = Qe({
        pathname: "/api/v1/posts/saved",
        method: "POST",
        json: {
            post_id: e
        },
        deps: [e]
    }), l = fa(), d = _p();
    return {
        isSaved: r,
        onSave: () => (c({
            method: r ? "DELETE" : "POST"
        }).then(() => {
            l.refetch()
        }), a(!r), d(!r), $(I.POST_SAVED, {
            post_id: e,
            surface: o
        }), !r)
    }
}

function fm(o, i, a) {
    return U(this, arguments, function*(e, t, {
        surface: s
    }) {
        yield st("/api/v1/posts/saved", {
            method: t ? "POST" : "DELETE",
            json: {
                post_id: e
            }
        }), $(I.POST_SAVED, {
            post_id: e,
            surface: s,
            is_saved: t
        })
    })
}

function _p() {
    const e = Oe(),
        {
            iString: t
        } = de();
    return s => {
        s ? e.popToast(o => n(Se, w(g({}, o), {
            text: t("Post saved"),
            Icon: Un,
            cta: t("View"),
            href: ki()
        }))) : e.popToast(o => n(Se, w(g({}, o), {
            text: t("Post unsaved"),
            Icon: Ua
        })))
    }
}

function yp() {
    const e = Oe(),
        {
            iString: t
        } = de();
    return s => {
        s ? e.popToast(o => n(Se, w(g({}, o), {
            text: t("Post liked"),
            Icon: $t
        }))) : e.popToast(o => n(Se, w(g({}, o), {
            text: t("Post unliked"),
            Icon: $t
        })))
    }
}

function Ls({
    style: e,
    post: t,
    isSaved: s,
    labelStyle: o,
    position: i,
    onChange: a
}) {
    const {
        isSaved: r,
        onSave: c
    } = Do({
        defaultSaved: s,
        post: t,
        isSaved: t.is_saved,
        trackSurface: i
    }), {
        iString: l
    } = de(), d = () => {
        const u = c();
        a({
            post: w(g({}, t), {
                is_saved: u
            })
        })
    };
    return n($e, {
        state: r ? "saved" : void 0,
        style: e,
        icon: n(Vu, {
            className: "icon",
            height: Ue(e, o === "verbose" ? "verbose" : null),
            strokeWidth: Xe
        }),
        noLabel: o === "none",
        verboseLabel: o === "verbose",
        onClick: d
    }, o === "cta" || o === "verbose" ? l("Save") : null)
}

function Oo({
    post: e,
    isSaved: t,
    onChange: s,
    showIcon: o
}) {
    const {
        onSave: i
    } = Do({
        defaultSaved: t,
        post: e,
        isSaved: e.is_saved
    }), {
        iString: a
    } = de(), r = () => {
        const l = i();
        s({
            post: w(g({}, e), {
                is_saved: l
            })
        })
    }, c = e.is_saved ? "var(--color-accent-substack)" : void 0;
    return n(ie, {
        icon: o ? n(Un, {
            style: {
                stroke: c,
                fill: c
            }
        }) : void 0,
        onClick: r
    }, e.is_saved ? a("Unsave") : a("Save"))
}

function Ro({
    style: e,
    count: t,
    labelStyle: s,
    post: o,
    pub: i,
    isStatic: a,
    onClick: r,
    isDisabled: c
}) {
    const {
        iString: l
    } = de();
    let d;
    return o != null && o.comment_url_override ? d = o.comment_url_override : a ? d = `${ve.HALF_MAGIC_COMMENTS_URL}&utm_source=${He.substack}&utm_medium=${et.email}` : i && (d = Vt(i, o, {
        comments: !0
    })), n($e, {
        style: e,
        icon: n(kn, {
            className: "icon",
            height: Ue(e),
            strokeWidth: Xe
        }),
        href: c ? void 0 : d,
        onClick: c ? () => {} : u => {
            r ? r(u) : (u == null || u.preventDefault(), window.location.href = d)
        },
        noLabel: s === "none",
        className: "post-ufi-comment-button",
        isDisabled: c
    }, s === "cta" && l("Comment"), s === "count" && gt(t || 0))
}

function gm({
    post: e,
    user: t,
    pub: s,
    style: o,
    labelStyle: i,
    isStatic: a,
    onChange: r,
    position: c
}) {
    const l = ee(),
        d = Ee(() => {
            $(I.POST_SHARE_BUTTON_CLICKED, {
                position: c,
                post_id: e.id
            }), l.current.open()
        }, []),
        {
            iString: u
        } = de();
    let p;
    e.share_url_override ? p = e.share_url_override : a ? e ? p = ve.SHARE_URL : p = ve.SHARE_PUB_URL : p = "javascript:void(0)";
    const m = i === "none";
    return n(me, null, n($e, {
        style: o,
        icon: m ? n($n, {
            className: "icon",
            height: Ue(o),
            strokeWidth: Xe
        }) : null,
        onClick: d,
        href: p,
        noLabel: i === "none",
        className: K(!m && "no-icon")
    }, i === "cta" && u("Share")), !a && n(On, {
        ref: l,
        user: t,
        pub: s,
        post: e,
        onChange: r
    }))
}

function bp({
    post: e,
    user: t,
    pub: s,
    onClick: o,
    style: i
}) {
    const {
        iString: a
    } = de();
    return n(me, null, n($e, {
        style: i,
        icon: n(vo, {
            className: "icon",
            height: Ue(i, "verbose"),
            strokeWidth: Xe
        }),
        onClick: () => {
            $(I.RESTACK_POST_CLICKED, {
                restacked_publication_id: s.id,
                restacked_post_id: e.id,
                restacking_user_id: t.id,
                is_from_email: !1
            }), o()
        },
        noLabel: !1,
        verboseLabel: !0,
        title: a("Cross-Post")
    }, a("Cross-post")))
}

function wp({
    post: e,
    user: t,
    pub: s,
    onClick: o
}) {
    const i = () => {
            $(I.RESTACK_POST_CLICKED, {
                restacked_publication_id: s.id,
                restacked_post_id: e.id,
                restacking_user_id: t.id,
                is_from_email: !1
            }), o()
        },
        {
            iString: a
        } = de();
    return n(me, null, n(ie, {
        onClick: i
    }, a("Cross-post")))
}

function Ao({
    style: e,
    pub: t,
    post: s,
    user: o,
    hidePinning: i,
    emailSent: a,
    allowSendEmail: r,
    footerHidden: c,
    showRestackModal: l,
    canBeCrossPosted: d,
    onSummaryOpen: u,
    onToggleMenu: p
}) {
    const m = ee();
    c && m.current && m.current.close();
    const f = Zn({
            post: s,
            pub: t,
            user: o,
            defaultOpen: l && d
        }),
        h = () => {
            f.open(), $(I.RESTACK_POST_CLICKED, {
                restacked_publication_id: t.id,
                restacked_post_id: s.id,
                restacking_user_id: o.id,
                is_from_email: !1
            })
        };
    return n("div", {
        className: K("edit-button-container", "post-ufi-button", `style-${e}`)
    }, n($e, {
        onClick: () => m.current.open(),
        style: e,
        icon: n(Nn, {
            className: "icon edit-icon",
            size: Ue(e),
            strokeWidth: 2
        }),
        noLabel: !0
    }), n(Xn, {
        ref: m,
        pub: t,
        post: s,
        user: o,
        className: "post-ufi-edit-menu",
        useDrawerOnMobile: !0,
        hidePinning: i,
        emailSent: a,
        allowSendEmail: r,
        handleCrossPost: d && h,
        onSummaryOpen: u,
        onToggleMenu: p
    }), f.modal)
}
const $e = Is(({
        icon: e,
        children: t,
        state: s,
        style: o,
        onClick: i,
        href: a,
        noLabel: r,
        verboseLabel: c,
        noBorder: l,
        className: d,
        isDisabled: u,
        iconPosition: p = "left",
        title: m
    }, f) => n("a", {
        role: "button",
        className: K("post-ufi-button", `style-${o}`, d, s ? `state-${s}` : void 0, u ? "state-disabled" : void 0, t && !r ? "has-label" : "no-label", l ? "no-border" : "with-border", c ? "verbose-label" : ""),
        title: m,
        href: a,
        onClick: h => {
            i && (h.stopPropagation(), i(h))
        },
        ref: f
    }, p === "left" && e, !r && t && n("div", {
        className: "label"
    }, t), p === "right" && e)),
    Gn = ({
        pub: e,
        post: t,
        showAuthor: s
    }) => !!(s && e.bylines_enabled && fn(e, t)),
    kp = ({
        pub: e,
        post: t,
        showAuthor: s,
        showPhoto: o,
        isMobileWidth: i
    }) => Gn({
        pub: e,
        post: t,
        showAuthor: s
    }) && !vp({
        pub: e,
        post: t,
        showAuthor: s
    }) && !Cp({
        pub: e,
        post: t,
        showAuthor: s,
        showPhoto: o
    }) && !i,
    vp = ({
        pub: e,
        post: t,
        showAuthor: s
    }) => Gn({
        pub: e,
        post: t,
        showAuthor: s
    }) && Dt(t).length > 1,
    Cp = ({
        pub: e,
        post: t,
        showAuthor: s,
        showPhoto: o
    }) => {
        var i;
        return Gn({
            pub: e,
            post: t,
            showAuthor: s
        }) && o && ((i = Dt(t)[0]) == null ? void 0 : i.photo_url) && e.byline_images_enabled
    };

function Sp({
    post: e,
    showDatetime: t,
    isStatic: s,
    fromPostPage: o,
    showReactions: i,
    language: a = "en"
}) {
    const r = e.reactions ? Object.values(e.reactions).reduce((l, d) => l + d, 0) : 0,
        c = o && !s && i && r >= 70 && r < 100;
    return t && c ? fe(e.post_date).locale(a).standardDatetimeWithYear() : t && !c ? fe(e.post_date).locale(a).standardDatetime() : s ? fe(e.post_date).locale(a).standardDate() : c ? fe(e.post_date).locale(a).standardDate({
        full: c
    }) : fe(e.post_date).locale(a).standardDateOrTime()
}

function Ep({
    pub: e,
    post: t,
    showPins: s,
    showAudience: o,
    showDate: i,
    showDatetime: a,
    showEmailSent: r,
    showAuthor: c,
    showPublicationName: l,
    showCrossPostedPublicationName: d
}) {
    const u = js(),
        p = !!(c && e.bylines_enabled && fn(e, t)),
        m = !1,
        f = i && t.post_date && !t.is_draft,
        h = r ? !!t.email_sent_at : null,
        {
            iString: y,
            iTemplate: _,
            language: v
        } = de();
    return n("div", {
        className: K("ufi-preamble", {
            themed: u
        })
    }, d && t.restacked_pub_name ? n("div", {
        className: "ufi-preamble-label cross-posted-pub-name"
    }, _ `Published on ${t.restacked_pub_name}`) : null, r && h && n("div", {
        className: "email-sent",
        title: y("This post was sent as an email")
    }, n(Ka, {
        className: "post-ufi-preamble-icon",
        size: 16
    })), s && t.is_section_pinned && n("div", {
        className: "pinned"
    }, n(ju, {
        className: "post-ufi-preamble-icon"
    })), t.type === "adhoc_email" ? n("div", {
        className: "audience-adhoc"
    }, n(Hu, {
        className: "post-ufi-preamble-icon"
    })) : o && Ds(t.audience) && n("div", {
        className: "audience-lock"
    }, n($u, {
        audience: t.audience,
        className: "lock-icon post-ufi-preamble-icon",
        size: 16
    })), kp({
        pub: e,
        post: t,
        showAuthor: p,
        isMobileWidth: m
    }) && n("div", {
        className: "ufi-preamble-label author"
    }, Dt(t).length > 0 ? vi(Dt(t).map(k => n(me, null, n(ua, {
        subject: k,
        utmSource: "byline"
    }, n("a", {
        href: Ci(k, e, {
            base: !0
        }),
        onClick: C => C.stopPropagation()
    }, k.name))))) : fn(e, t)), l && n("div", {
        className: "post-publication-name"
    }, e.name), f && n("div", {
        className: "ufi-preamble-label post-date",
        title: fe(t.post_date).toISOString()
    }, n("time", {
        dateTime: fe(t.post_date).toISOString()
    }, Sp({
        post: t,
        showDatetime: a,
        language: v
    }))))
}
const Lp = ({
        pub: e,
        post: t,
        user: s,
        onChange: o,
        postReactionToken: i
    }) => Ge().getConfigFor("like_posts_enabled") && e.community_enabled ? n(mp, {
        style: "button",
        post: t,
        pub: e,
        user: s,
        onChange: o,
        postReactionToken: i
    }) : null,
    Tp = ({
        pub: e,
        post: t,
        onClick: s
    }) => {
        const o = Ei({
                publication: e,
                post: t
            }),
            {
                comment_count: i
            } = t;
        return o ? n(Ro, {
            post: t,
            pub: e,
            labelStyle: i > 0 ? "count" : "none",
            style: "button",
            count: i,
            onClick: s
        }) : null
    };

function _m({
    hideBottomBorder: e,
    post: t,
    pub: s,
    user: o,
    onChange: i,
    onCommentsClick: a,
    showRestackModal: r = !1,
    showTranscriptionButton: c,
    onTranscriptionClick: l,
    postReactionToken: d
}) {
    var k;
    const u = Vn(),
        p = (o == null ? void 0 : o.is_contributor) && !u,
        {
            getSettingFor: m
        } = Pi(),
        f = !t.is_draft && _d(o, {
            enable_restacking: !!m("enable_restacking")
        }, t, s, !1),
        [h, y] = b(!1),
        {
            setIsClipping: _
        } = (k = Ve(Fn)) != null ? k : {},
        v = o && t.videoUpload && io(o, t, t.videoUpload);
    return n(_e, {
        className: "post-ufi",
        alignItems: "center",
        borderTop: "detail-themed",
        borderBottom: e ? void 0 : "detail-themed",
        justifyContent: "space-between",
        gap: 16,
        flex: "grow",
        paddingY: 16
    }, n(_e, {
        gap: 8
    }, n(Lp, {
        post: t,
        pub: s,
        user: o,
        onChange: i,
        postReactionToken: d
    }), n(Tp, {
        pub: s,
        post: t,
        onClick: a
    }), n(No, {
        pub: s,
        post: t,
        onChange: i,
        style: "button"
    }), c && n(dp, {
        style: "button",
        onClick: l
    })), n(_e, {
        gap: 8
    }, n(oo, {
        post: t,
        pub: s,
        user: o,
        trigger: {
            style: "button",
            labelStyle: "cta"
        },
        showClipping: t.type === "podcast",
        disableClipping: !v,
        onClipClick: () => _ == null ? void 0 : _(!0)
    }), p ? n(Ao, {
        style: "button",
        pub: s,
        post: t,
        user: o,
        showRestackModal: r,
        canBeCrossPosted: f,
        onSummaryOpen: () => y(!0)
    }) : (o || f) && n(pp, {
        post: t,
        pub: s,
        user: o,
        onChange: i,
        showRestackModal: r,
        canBeCrossPosted: f,
        onSummaryOpen: () => y(!0)
    })), n(up, {
        postId: t.id,
        isOpen: h,
        onClose: () => y(!1)
    }))
}

function ym({
    isFooter: e,
    customization: {
        showAppUpsell: t,
        showShare: s,
        showComments: o,
        showReactions: i,
        showListen: a,
        showSave: r,
        showRestack: c,
        showCommentRestack: l
    }
}) {
    const d = e ? "email-ufi-2-bottom" : "email-ufi-2-top",
        u = !e && (c || a || r),
        p = e,
        {
            iString: m
        } = de();
    return !e && !s && !o && !i && !a && !r && c ? n(Ze, {
        className: "email-ufi-2-empty",
        width: "100%"
    }, n("tr", {
        height: 1
    }, n("td", {
        height: 1,
        style: {
            fontSize: 0,
            lineHeight: 0
        }
    }, " "))) : n(Ze, {
        className: d,
        width: "100%"
    }, c && e && n(me, null, n(Lt, null), n("tr", null, n("td", null, n(Ze, {
        width: "100%",
        className: "email-ufi-2-row"
    }, n("tr", null, n("td", {
        width: "95%"
    }, s && n(ze, {
        tableClassName: "email-button-outline-wrapper-full-width",
        aClassName: "email-button-outline full-width",
        href: ve.SHARE_URL
    }, n(Wu, g({}, Fe)), n("span", {
        className: "email-button-text"
    }, m("Share"))))), n(Lt, null))))), n(Lt, null), n("tr", null, n("td", null, n(Ze, {
        width: "100%"
    }, n("tr", null, n("td", null, n(vs, {
        gap: 8,
        style: u ? void 0 : {
            margin: "0 auto"
        }
    }, i ? p ? n(ze, {
        aClassName: "email-button-outline",
        href: ve.REACTION_URL
    }, n(tt, g({}, Fe)), n("span", {
        className: "email-button-text"
    }, m("Like"))) : n(Tt, {
        href: ve.REACTION_URL
    }, n(tt, g({}, Fe))) : null, o ? p ? n(ze, {
        aClassName: "email-button-outline",
        href: `${ve.HALF_MAGIC_COMMENTS_URL}&utm_source=${He.substack}&utm_medium=${et.email}`
    }, n(kn, g({}, Fe)), n("span", {
        className: "email-button-text"
    }, m("Comment"))) : n(Tt, {
        href: `${ve.HALF_MAGIC_COMMENTS_URL}&utm_source=${He.substack}&utm_medium=${et.email}`
    }, n(kn, g({}, Fe))) : null, s && t && (p ? n(ze, {
        aClassName: "email-button-outline",
        href: ve.SHARE_URL
    }, n(Ss, g({}, Fe)), n("span", {
        className: "email-button-text"
    }, m("Share"))) : n(Tt, {
        href: ve.SHARE_URL
    }, n(Ss, g({}, Fe)))), l && (p ? n(ze, {
        aClassName: "email-button-outline",
        href: `${ve.RESTACK_COMMENT_URL}&utm_source=${He.substack}&utm_medium=${et.email}`
    }, n(bt, g({}, Fe)), n("span", {
        className: "email-button-text"
    }, m("Restack"))) : n(Tt, {
        href: `${ve.RESTACK_COMMENT_URL}&utm_source=${He.substack}&utm_medium=${et.email}`
    }, n(bt, g({}, Fe)))))), n("td", {
        align: "right"
    }, n(vs, {
        gap: 8
    }, s && !t && !e && n(ze, {
        aClassName: "email-button-outline",
        href: ve.SHARE_URL
    }, n("div", {
        className: "email-button-spacer"
    }), n("span", {
        className: "email-button-text"
    }, m("Share"))), t && !e && n(ze, {
        aClassName: "email-button-outline",
        href: ve.POST_APP_LINK_URL
    }, n("div", {
        className: "email-button-spacer"
    }), n("span", {
        className: "email-button-text",
        style: {
            marginRight: 4
        }
    }, m("READ IN APP")), n(Gc, w(g({}, Fe), {
        className: K("icon", "text-icon")
    }))))))))), n(Lt, null))
}

function Lt() {
    return n("tr", {
        height: 16
    }, n("td", {
        height: 16,
        style: {
            fontSize: 0,
            lineHeight: 0
        }
    }, " "))
}
const Fe = {
    className: "icon",
    height: 18,
    strokeWidth: 1,
    isStatic: !0,
    stroke: "#808080",
    fill: "none"
};

function Tt({
    size: e = 38,
    href: t,
    children: s
}) {
    return n(Ze, {
        width: e
    }, n("tr", null, n("td", {
        align: "center"
    }, n("a", {
        className: "email-icon-button",
        href: t,
        style: {
            width: e
        }
    }, s))))
}
const Mp = ["newspaper", "magaziney", "magazine-5", "feature-media", "feature", "podcast"],
    En = 16,
    Pp = 7,
    Ts = {
        newspaper: {
            id: "newspaper",
            legacyEquivalent: "newspaper",
            postCount: {
                desktop: 1,
                tablet: 1,
                mobile: 1
            }
        },
        magaziney: {
            id: "magaziney",
            legacyEquivalent: "magaziney",
            postCount: {
                desktop: 3,
                tablet: 3,
                mobile: 3
            }
        },
        "magazine-5": {
            id: "magazine-5",
            legacyEquivalent: "magaziney",
            postCount: {
                desktop: 5,
                tablet: 3,
                mobile: 5
            }
        },
        "feature-media": {
            id: "feature-media",
            legacyEquivalent: "newspaper",
            postCount: {
                desktop: 1,
                tablet: 1,
                mobile: 1
            }
        },
        feature: {
            id: "feature",
            legacyEquivalent: "magaziney",
            postCount: {
                desktop: 4,
                tablet: 4,
                mobile: 4
            }
        },
        podcast: {
            id: "podcast",
            legacyEquivalent: "newspaper",
            postCount: {
                desktop: 0,
                tablet: 0,
                mobile: 0
            }
        }
    },
    Ip = () => {
        const {
            iString: e
        } = de();
        return we(() => {
            const t = {
                newspaper: {
                    label: e("Feature"),
                    description: e("One featured post")
                },
                magaziney: {
                    label: e("Newspaper"),
                    description: e("A side column of top posts")
                },
                "magazine-5": {
                    label: e("Magazine"),
                    description: e("Five featured posts")
                },
                feature: {
                    label: e("Highlight"),
                    description: e("A large post with three smaller posts")
                },
                "feature-media": {
                    label: e("Media Feature"),
                    description: e("A large media feature")
                },
                podcast: {
                    label: e("Podcast"),
                    description: e("Highlight your podcast")
                }
            };
            return Object.fromEntries(Object.keys(Ts).map(s => [s, g(g({}, Ts[s]), t[s])]))
        }, [e])
    },
    bm = () => {
        const e = Ip();
        return we(() => Mp.reduce((t, s) => w(g({}, t), {
            [s]: e[s].postCount
        }), {}), [e])
    },
    xp = ["list", "grid", "grid-groups", "custom"],
    Np = () => {
        const {
            iString: e
        } = de();
        return {
            list: {
                id: "list",
                label: e("List"),
                description: e("A list of posts"),
                postCount: {
                    desktop: 7,
                    tablet: 7,
                    mobile: 7
                }
            },
            grid: {
                id: "grid",
                label: e("Grid"),
                description: e("A grid of nine posts"),
                postCount: {
                    desktop: 9,
                    tablet: 9,
                    mobile: 7
                }
            },
            "grid-groups": {
                id: "grid-groups",
                label: e("Groups (sections or tags)"),
                description: e("A grid of nine posts, grouped by section or tag"),
                postCount: {
                    desktop: 9,
                    tablet: 9,
                    mobile: 7
                }
            },
            custom: {
                id: "custom",
                label: e("Custom"),
                description: e("Custom layout"),
                postCount: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                }
            }
        }
    },
    wm = () => {
        const e = Np();
        return xp.reduce((t, s) => w(g({}, t), {
            [s]: e[s].postCount
        }), {})
    },
    km = {
        subscribe: {
            id: "subscribe",
            label: "Subscribe"
        },
        recommendations: {
            id: "recommendations",
            label: "Recommendations"
        },
        links: {
            id: "links",
            label: "Links"
        },
        contributors: {
            id: "contributors",
            label: "Contributors"
        },
        newsletters: {
            id: "newsletters",
            label: "Newsletters"
        },
        podcasts: {
            id: "podcasts",
            label: "Podcasts"
        },
        "top-posts": {
            id: "top-posts",
            label: "Top posts"
        }
    },
    Ms = {
        posts: {
            min: 3,
            default: 6,
            max: 7
        },
        rows: {
            min: 1,
            default: 2,
            max: 4
        }
    },
    vm = e => {
        let t = !1;
        const s = [],
            o = {},
            i = new Set,
            a = new Set;
        let r = 0;
        return e.length === 0 && (t = !0, s.push("You must have at least one content block")), e.forEach(c => {
            const l = Dp(c);
            l === "latest" && (r += Op({
                contentBlock: c
            }), r > En && (t = !0, o[c.id] = w(g({}, o[c.id]), {
                post_source: [`You can't have more than ${En} of your most recent posts`]
            }))), l !== "latest" && l !== "none" && (i.has(l) ? (t = !0, o[c.id] = w(g({}, o[c.id]), {
                post_source: ["You can't use the same post source more than once"]
            })) : i.add(l)), l === "none" && c.block_type !== "subscribe" && (t = !0, o[c.id] = w(g({}, o[c.id]), {
                post_source: ["This block type requires a post source"]
            })), c.primary_sidebar_modules.forEach(d => {
                a.has(d) ? (t = !0, o[c.id] = w(g({}, o[c.id]), {
                    primary_sidebar_modules: ["You can't use the same module more than once"]
                })) : a.add(d)
            }), c.secondary_sidebar_modules.forEach(d => {
                a.has(d) ? (t = !0, o[c.id] = w(g({}, o[c.id]), {
                    secondary_sidebar_modules: ["You can't use the same module more than once"]
                })) : a.add(d)
            }), c.block_type === "grid" && c.num_rows === 4 && c.primary_sidebar_modules.length === 0 && c.secondary_sidebar_modules.length === 0 && (t = !0, o[c.id] = w(g({}, o[c.id]), {
                num_rows: ["Too many rows for this content block"]
            }))
        }), {
            hasError: t,
            errorObject: {
                global: s.length ? s : null,
                contentBlocks: o
            }
        }
    },
    Dp = e => e.post_source === "tag" ? `tag:${e.post_tag_id}` : e.post_source === "section" ? `section:${e.section_id}` : e.post_source,
    Op = ({
        contentBlock: e,
        breakpoint: t = "desktop"
    }) => {
        if (e.block_type === "list") return e.num_posts || Ms.posts.default;
        if (e.block_type === "grid") {
            const s = e.num_rows || Ms.rows.default;
            if (t === "desktop" || t === "mobile") {
                let o = 4;
                return e.primary_sidebar_modules.length > 0 && (o -= 1), e.secondary_sidebar_modules.length > 0 && (o -= 1), o * s
            } else if (t === "tablet") {
                let o = 3;
                return (e.primary_sidebar_modules.length > 0 || e.secondary_sidebar_modules.length > 0) && (o -= 1), o * s
            }
        }
        return e.block_type === "feature" ? 4 : 0
    },
    Cm = () => {
        const e = ms.useMediaQuery({
                query: "only screen and (max-width: 1024px)"
            }),
            t = ms.useMediaQuery({
                query: "only screen and (max-width: 768px)"
            });
        let s;
        return typeof window == "undefined" ? s = rt() ? "mobile" : "desktop" : s = t ? "mobile" : e ? "tablet" : "desktop", we(() => ({
            breakpoint: s,
            isMobile: s === "mobile",
            isTablet: s === "tablet",
            isDesktop: s === "desktop"
        }), [s])
    },
    Sm = ({
        pubId: e,
        preloads: t = {},
        isPreview: s
    }) => {
        var q, J, ae, re, pe, W, V, ne, j, P, te, Z, le;
        const [o, i] = b((q = t.contentBlocks) != null ? q : []), [a, r] = b((J = t.contributors) != null ? J : []), [c, l] = b((ae = t.latestPodcastPosts) != null ? ae : null), [d, u] = b((re = t.latestPostByContributorId) != null ? re : {}), [p, m] = b((pe = t.homepageLinks) != null ? pe : []), [f, h] = b((W = t.newPosts) != null ? W : []), [y, _] = b((V = t.pinnedPosts) != null ? V : []), [v, k] = b((ne = t.recommendations) != null ? ne : []), [C, S] = b((j = t.topPosts) != null ? j : []), [T, L] = b(!!t.newPosts), [M, D] = b((P = t.postsBySectionId) != null ? P : {}), [N, B] = b((te = t.postsByTagId) != null ? te : {}), [H, O] = b((Z = t.postTagsById) != null ? Z : {}), [X, E] = b((le = t.sectionsById) != null ? le : {});
        return A(() => {
            var z;
            t.homepageLinks ? ((z = t.homepageLinks) == null ? void 0 : z.length) > p.length && m(t.homepageLinks) : Q.get("/api/v1/homepage_links").then(({
                body: Y
            }) => m(Y))
        }, [e, t.homepageLinks]), A(() => {
            var z;
            t.newPosts ? ((z = t.newPosts) == null ? void 0 : z.length) > f.length && h(t.newPosts) : Q.get("/api/v1/archive").query({
                sort: "new",
                limit: Pp + En
            }).then(({
                body: Y
            }) => {
                h(Y), L(!0)
            })
        }, [e, t.newPosts]), A(() => {
            var z;
            t.pinnedPosts ? ((z = t.pinnedPosts) == null ? void 0 : z.length) > y.length && _(t.pinnedPosts) : Q.get("/api/v1/archive").query({
                sort: "pinned"
            }).then(({
                body: Y
            }) => _(Y))
        }, [e, t.pinnedPosts]), A(() => {
            var z;
            t.recommendations ? ((z = t.recommendations) == null ? void 0 : z.length) > v.length && k(t.recommendations) : Q.get(`/api/v1/recommendations/from/${e}`).query({
                limit: 5
            }).then(Y => {
                k(Y.body)
            })
        }, [e, t.recommendations]), A(() => {
            var z;
            t.topPosts ? ((z = t.topPosts) == null ? void 0 : z.length) > C.length && S(t.topPosts) : Q.get("/api/v1/archive").query({
                sort: "top",
                limit: 6
            }).then(({
                body: Y
            }) => S(Y))
        }, [e, t.topPosts]), A(() => {
            var z;
            (!t.postsBySectionId || !t.postsByTagId || !t.contributors) && Q.get("/api/v1/homepage_data").query({
                preview: s
            }).then(Y => {
                D(Y.body.postsBySectionId), B(Y.body.postsByTagId), r(Y.body.contributors), l(Y.body.latestPodcastPosts), u(Y.body.latestPostByContributorId), i(Y.body.contentBlocks), O(Y.body.postTagsById), E(Y.body.sectionsById)
            }), t.contributors && ((z = t.contributors) == null ? void 0 : z.length) > a.length && r(t.contributors), t.postsBySectionId && !mt(t.postsBySectionId, M) && D(t.postsBySectionId), t.postsByTagId && !mt(t.postsByTagId, N) && B(t.postsByTagId), t.contentBlocks && !mt(t.contentBlocks, o) && i(t.contentBlocks), t.postTagsById && !mt(t.postTagsById, H) && O(t.postTagsById), t.sectionsById && !mt(t.sectionsById, X) && E(t.sectionsById)
        }, [e, t.contributors, t.postsBySectionId, t.postsByTagId, t.contentBlocks, t.sectionsById, t.postTagsById]), we(() => ({
            contentBlocks: o,
            contributors: a,
            latestPodcastPosts: c,
            latestPostByContributorId: d,
            homepageLinks: p,
            newPosts: f,
            pinnedPosts: y,
            postsLoaded: T,
            recommendations: v,
            topPosts: C,
            postsBySectionId: M,
            postsByTagId: N,
            postTagsById: H,
            sectionsById: X
        }), [o, c, d, a, p, f, y, M, N, T, v, C, H, X])
    },
    Em = () => {
        const [e, t] = b([]), [s, o] = b({}), [i, a] = b({});
        return A(() => {
            (() => U(void 0, null, function*() {
                for (const c of e) {
                    if (c.post_source === "section" && c.section_id && !s[c.section_id]) {
                        const {
                            body: l
                        } = yield Q.get("/api/v1/archive").query({
                            section_id: c.section_id,
                            sort: "new",
                            limit: 13
                        });
                        o(d => w(g({}, d), {
                            [String(c.section_id)]: l
                        }))
                    }
                    if (c.post_source === "tag" && c.post_tag_id && !i[c.post_tag_id]) {
                        const {
                            body: l
                        } = yield Q.get("/api/v1/archive").query({
                            post_tag_id: c.post_tag_id,
                            sort: "new",
                            limit: 13
                        });
                        a(d => w(g({}, d), {
                            [String(c.post_tag_id)]: l
                        }))
                    }
                }
            }))()
        }, [e, s, i]), {
            contentBlocks: e,
            onChangeContentBlocks: t,
            postsBySectionId: s,
            postsByTagId: i
        }
    },
    Lm = e => {
        const [t, s] = b(e.newPosts), [o, i] = b(e.pinnedPosts), [a, r] = b(e.topPosts), [c, l] = b(e.postsLoaded), d = we(() => {
            const p = new Set((o || []).map(m => m.id));
            return (o || []).concat((t || []).filter(m => !p.has(m.id)))
        }, [t, o]);
        A(() => {
            var p, m;
            ((p = e.newPosts) == null ? void 0 : p.length) !== t.length && s(e.newPosts), ((m = e.pinnedPosts) == null ? void 0 : m.length) !== o.length && i(e.pinnedPosts), (e.topPosts || []).length !== (a || []).length && r(e.topPosts), e.postsLoaded && l(!0)
        }, [e.newPosts, e.pinnedPosts, e.topPosts, t.length, o.length, a, e.postsLoaded]);
        const u = Ee(({
            post: p
        }) => {
            if (!p) return;
            const m = [{
                list: a,
                setter: r
            }, {
                list: o,
                setter: i
            }, {
                list: t,
                setter: s
            }];
            for (const f of m) {
                if (!f.list) return;
                const h = f.list.findIndex(y => y.id === p.id);
                if (h !== -1) {
                    const y = [...f.list];
                    y.splice(h, 1, p), f.setter(y)
                }
            }
        }, [t, o, a]);
        return we(() => ({
            posts: d,
            topPosts: a || [],
            onChange: u,
            postsLoaded: c
        }), [d, a, u, c])
    };
export {
    Fn as $, Qu as A, Gs as B, Ha as C, Xu as D, Va as E, fr as F, Js as G, $t as H, hr as I, v1 as J, Qr as K, zs as L, Ka as M, Gr as N, gr as O, za as P, Xt as Q, Za as R, lo as S, G1 as T, _o as U, ws as V, lm as W, bn as X, Dd as Y, bt as Z, tr as _, Ja as a, _m as a$, oo as a0, $n as a1, Un as a2, Ru as a3, Do as a4, ad as a5, Fa as a6, _p as a7, hm as a8, fm as a9, xu as aA, hd as aB, Ua as aC, I1 as aD, Cm as aE, Wd as aF, ot as aG, V1 as aH, F1 as aI, jn as aJ, Jc as aK, Qc as aL, Ft as aM, x1 as aN, cm as aO, M1 as aP, Io as aQ, Ar as aR, Nd as aS, S1 as aT, Eu as aU, P1 as aV, wm as aW, Op as aX, rp as aY, Lm as aZ, bm as a_, X1 as aa, sm as ab, z1 as ac, gp as ad, om as ae, Y1 as af, em as ag, J1 as ah, Pu as ai, am as aj, Tu as ak, K1 as al, Ud as am, Od as an, Yn as ao, Nu as ap, Z1 as aq, U1 as ar, $1 as as, rm as at, C1 as au, wn as av, fp as aw, tm as ax, nm as ay, Q1 as az, Ms as b, mm as b0, R1 as b1, D1 as b2, A1 as b3, Ze as b4, O1 as b5, vs as b6, tt as b7, ur as b8, Lp as b9, Tc as bA, Lc as bB, md as bC, pr as bD, im as bE, N1 as bF, Be as bG, Zs as bH, Ba as bI, E1 as bJ, T1 as bK, L1 as bL, sc as bM, H1 as bN, Kn as bO, fs as bP, ro as bQ, Tp as ba, gm as bb, bd as bc, Au as bd, Ya as be, pm as bf, j1 as bg, ym as bh, W1 as bi, Kd as bj, um as bk, Gu as bl, _d as bm, $u as bn, kn as bo, ja as bp, Cp as bq, vp as br, Gn as bs, ju as bt, kp as bu, dm as bv, Sp as bw, Vu as bx, B1 as by, ed as bz, jd as c, Ip as d, Np as e, Sm as f, Em as g, Zt as h, Aa as i, Wu as j, gs as k, Ys as l, vo as m, ht as n, _r as o, Zu as p, Wa as q, yr as r, km as s, Xs as t, q1 as u, vm as v, Br as w, be as x, br as y, k1 as z
};
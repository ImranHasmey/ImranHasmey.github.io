var d = Object.defineProperty,
    i = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty,
    p = Object.prototype.propertyIsEnumerable;
var s = (e, o, t) => o in e ? d(e, o, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[o] = t,
    r = (e, o) => {
        for (var t in o || (o = {})) f.call(o, t) && s(e, t, o[t]);
        if (n)
            for (var t of n(o)) p.call(o, t) && s(e, t, o[t]);
        return e
    },
    a = (e, o) => i(e, c(o));
import {
    bJ as u,
    y as b
} from "./tracking-376cff7a.js";
import {
    u as y,
    T as _
} from "./HoverCard-cbdee1d2.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    L as l
} from "./link-90872791.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            o = new Error().stack;
        o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "53ab3c2b-7ec2-4628-a7c2-f720d402c501", e._sentryDebugIdIdentifier = "sentry-dbid-53ab3c2b-7ec2-4628-a7c2-f720d402c501")
    } catch (t) {}
})();

function k() {
    const e = y();
    return o => {
        u(o), e.popToast(t => b(_, a(r({}, t), {
            text: "Link copied",
            Icon: l
        })))
    }
}
export {
    k as u
};
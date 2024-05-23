import {
    by as o,
    fN as f
} from "./tracking-376cff7a.js";
import {
    b as i
} from "./sortBy-97ae0487.js";
import {
    t as s
} from "./toInteger-b5ddb910.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            e = new Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "65221883-8fc3-4899-a16d-8d01de114e4c", t._sentryDebugIdIdentifier = "sentry-dbid-65221883-8fc3-4899-a16d-8d01de114e4c")
    } catch (n) {}
})();
var c = f,
    u = i,
    b = s,
    g = Math.ceil,
    I = Math.max;

function h(t, e, n) {
    (n ? u(t, e, n) : e === void 0) ? e = 1: e = I(b(e), 0);
    var r = t == null ? 0 : t.length;
    if (!r || e < 1) return [];
    for (var a = 0, l = 0, d = Array(g(r / e)); a < r;) d[l++] = c(t, a, a += e);
    return d
}
var m = h;
const _ = o(m);
export {
    _ as c
};
import {
    by as o
} from "./tracking-376cff7a.js";
import {
    _ as t
} from "./_baseAssignValue-2cb42459.js";
import {
    _ as s
} from "./_createAggregator-deb99b9c.js";
(function() {
    try {
        var r = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            e = new Error().stack;
        e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "39bcaf95-4727-4394-a3ca-686bb7c76a25", r._sentryDebugIdIdentifier = "sentry-dbid-39bcaf95-4727-4394-a3ca-686bb7c76a25")
    } catch (a) {}
})();
var n = t,
    g = s,
    b = Object.prototype,
    f = b.hasOwnProperty,
    c = g(function(r, e, a) {
        f.call(r, a) ? r[a].push(e) : n(r, a, [e])
    }),
    i = c;
const u = o(i);
export {
    u as g
};
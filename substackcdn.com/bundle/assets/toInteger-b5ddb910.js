import {
    c as i
} from "./x-fc38e969.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    t as o
} from "./toNumber-3c911b0f.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            r = new Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "dc7af23f-02d9-4745-9fe5-fcebe68976cd", e._sentryDebugIdIdentifier = "sentry-dbid-dc7af23f-02d9-4745-9fe5-fcebe68976cd")
    } catch (t) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g = i("Menu", [
    ["line", {
        x1: "4",
        x2: "20",
        y1: "12",
        y2: "12",
        key: "1e0a9i"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "6",
        y2: "6",
        key: "1owob3"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "18",
        y2: "18",
        key: "yk5zj1"
    }]
]);
var f = o,
    n = 1 / 0,
    d = 17976931348623157e292;

function y(e) {
    if (!e) return e === 0 ? e : 0;
    if (e = f(e), e === n || e === -n) {
        var r = e < 0 ? -1 : 1;
        return r * d
    }
    return e === e ? e : 0
}
var s = y,
    c = s;

function a(e) {
    var r = c(e),
        t = r % 1;
    return r === r ? t ? r - t : r : 0
}
var m = a;
export {
    g as M, s as a, m as t
};
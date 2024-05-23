import {
    y as s
} from "./tracking-376cff7a.js";
import {
    c as a
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            d = new Error().stack;
        d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "9ad617fb-d460-412a-a551-a268d2dc57e7", e._sentryDebugIdIdentifier = "sentry-dbid-9ad617fb-d460-412a-a551-a268d2dc57e7")
    } catch (t) {}
})();
const o = ({
    className: e,
    children: d,
    displayContents: t
}) => s("div", {
    className: a("tailwind-preflight", e),
    style: t ? {
        display: "contents"
    } : {}
}, d);
export {
    o as P
};
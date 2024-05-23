import {
    c as n
} from "./x-fc38e969.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var o = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "251a36f0-5e19-43d5-b51a-ed6df5c91883", o._sentryDebugIdIdentifier = "sentry-dbid-251a36f0-5e19-43d5-b51a-ed6df5c91883")
    } catch (e) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h = n("Star", [
    ["polygon", {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        key: "8f66p6"
    }]
]);
var m = (o => (o.CompOneMonth = "comp_one_month", o.CompThreeMonths = "comp_three_months", o.CompSixMonths = "comp_six_months", o.CompNineMonths = "comp_nine_months", o.CompTwelveMonths = "comp_twelve_months", o.Custom = "custom", o))(m || {});
const p = {
    comp_one_month: "1 month comp",
    comp_three_months: "3 month comp",
    comp_six_months: "6 month comp",
    comp_nine_months: "9 month comp",
    comp_twelve_months: "12 month comp",
    custom: "Custom"
};
export {
    m as R, h as S, p as a
};
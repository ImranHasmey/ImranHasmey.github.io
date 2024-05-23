var y = Object.defineProperty;
var m = (e, t, i) => t in e ? y(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : e[t] = i;
var f = (e, t, i) => (m(e, typeof t != "symbol" ? t + "" : t, i), i);
var h = (e, t, i) => new Promise((o, a) => {
    var n = r => {
            try {
                s(i.next(r))
            } catch (c) {
                a(c)
            }
        },
        d = r => {
            try {
                s(i.throw(r))
            } catch (c) {
                a(c)
            }
        },
        s = r => r.done ? o(r.value) : Promise.resolve(r.value).then(n, d);
    s((i = i.apply(e, t)).next())
});
import {
    k as w,
    b_ as p,
    y as g
} from "./tracking-376cff7a.js";
import {
    c as V
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    c as v
} from "./x-fc38e969.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "370b0e82-f473-4d60-ba25-a952f0878693", e._sentryDebugIdIdentifier = "sentry-dbid-370b0e82-f473-4d60-ba25-a952f0878693")
    } catch (i) {}
})();
class R extends w {
    constructor() {
        super(...arguments);
        f(this, "checkVisibility", () => {
            if (!this.ref) return;
            const i = this.ref.getBoundingClientRect(),
                o = this.props.threshold || 0,
                a = this.props.parent ? this.props.parent.clientHeight : Math.max(document.documentElement.clientHeight, window.innerHeight),
                n = !(i.bottom < 0 - o || i.top >= a + o);
            p(this, (d, s) => h(this, null, function*() {
                if (d.isVisible !== n) this.setState({
                    isVisible: n
                });
                else if (!s.noDedupe) return;
                const c = n ? "hadFirstVisible" : "hadFirstInvisible",
                    l = !d[c];
                l && this.setState({
                    [c]: !0
                }), (yield Promise.all([n && s.onVisible && s.onVisible(), n && s.onFirstVisible && l && s.onFirstVisible(), !n && s.onInvisible && s.onInvisible(), !n && s.onFirstInvisible && l && s.onFirstInvisible()])).reduce((b, u) => u === !0 || b) && this.checkVisibility()
            }))
        })
    }
    componentDidMount() {
        return h(this, null, function*() {
            typeof window != "undefined" && (this.ref || (yield new Promise(i => setTimeout(i, 0))), this.checkVisibility(), (this.props.parent || window).addEventListener("scroll", this.checkVisibility))
        })
    }
    componentWillUnmount() {
        typeof window != "undefined" && (this.props.parent || window).removeEventListener("scroll", this.checkVisibility)
    }
    render({
        className: i,
        children: o
    }) {
        return g("div", {
            ref: a => this.ref = a,
            className: V("visibility-check", i)
        }, o)
    }
}
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C = v("ArrowRight", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }],
    ["path", {
        d: "m12 5 7 7-7 7",
        key: "xquz4c"
    }]
]);
export {
    C as A, R as V
};
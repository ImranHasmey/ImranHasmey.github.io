var E = Object.defineProperty;
var P = (t, e, r) => e in t ? E(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r;
var y = (t, e, r) => (P(t, typeof e != "symbol" ? e + "" : e, r), r);
import {
    k as x,
    aV as b,
    y as s,
    em as D,
    ab as T,
    i as A,
    bH as k
} from "./tracking-376cff7a.js";
import {
    c as C,
    T as _,
    a as g,
    F as W
} from "./FlexBox-1a755411.js";
import {
    i as F
} from "./user-e16f1619.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            e = new Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "01c844a2-f8fc-4d3e-b9c6-07fe41940586", t._sentryDebugIdIdentifier = "sentry-dbid-01c844a2-f8fc-4d3e-b9c6-07fe41940586")
    } catch (r) {}
})();
const B = "_portalWrapper_1686v_1",
    H = "_contentWrapper_1686v_5",
    L = "_contentWrapperShown_1686v_23",
    w = {
        portalWrapper: B,
        contentWrapper: H,
        contentWrapperShown: L
    },
    I = 300,
    v = 8,
    R = 100;
class M extends x {
    constructor(e, r) {
        super(e, r), this.cardRef = b(), this.state = {
            isOpen: !1
        }, this.hoverPid = null, this.closePid = null, this.wrapperRef = b()
    }
    onMouseEnter() {
        if (!this.props.disabled) {
            if (this.closePid && clearTimeout(this.closePid), this.setState({
                    attachCard: !0
                }), this.props.delay === 0) {
                this.setIsShown(!0);
                return
            }
            this.hoverPid = setTimeout(() => {
                this.setIsShown(!0), this.hoverPid = null
            }, this.props.delay)
        }
    }
    onMouseLeave() {
        this.hoverPid && clearTimeout(this.hoverPid), this.closePid = setTimeout(() => {
            this.setIsShown(!1)
        }, R)
    }
    setIsShown(e) {
        this.setState({
            isOpen: e,
            attachCard: e
        })
    }
    onClick(e) {
        e.stopPropagation()
    }
    render({
        content: e,
        preferPositionLeft: r,
        className: h,
        children: a
    }, {
        attachCard: o,
        isOpen: u
    }) {
        var l, d, f;
        let p = {},
            c = !1;
        if (o && ((l = this.wrapperRef) != null && l.current)) {
            const {
                top: i,
                left: n
            } = this.wrapperRef.current.getBoundingClientRect(), {
                height: m,
                width: S
            } = (f = (d = this.cardRef.current) == null ? void 0 : d.getBoundingClientRect()) != null ? f : {};
            c = r && n - S > 0, c ? p = {
                top: i - v - m,
                left: n - S - v,
                "max-width": I
            } : p = {
                top: i - v - m,
                "max-width": I,
                left: n
            }
        }
        return s("div", {
            className: C(w.portalWrapper, h),
            onMouseEnter: () => this.onMouseEnter(),
            onMouseLeave: () => this.onMouseLeave(),
            onClick: i => this.onClick(i),
            ref: this.wrapperRef
        }, typeof a == "function" ? a({}) : a, o && D(s("div", {
            className: C(w.contentWrapper, {
                [w.contentWrapperShown]: u,
                "animate-opacity": !T(),
                "position-left": c
            }),
            ref: this.cardRef,
            style: p,
            onMouseEnter: () => this.onMouseEnter(),
            onMouseLeave: () => this.onMouseLeave()
        }, e), document.body))
    }
}
y(M, "defaultProps", {
    delay: R
}), y(M, "contextType", F);
const N = "_learnMoreChip_1jt8l_1",
    O = {
        learnMoreChip: N
    },
    j = ({
        content: t
    }) => s(M, {
        content: t
    }, s("div", {
        className: O.learnMoreChip
    }, "?")),
    $ = ({
        errors: t
    }) => t ? s(A, null, t.map(e => s(_.B4, {
        color: "error",
        key: e
    }, e))) : null,
    Y = k(({
        action: t,
        children: e,
        className: r,
        errors: h,
        helpText: a,
        details: o,
        label: u,
        paddingBottom: p,
        paddingTop: c,
        wrapWithLabel: l,
        disabled: d,
        compact: f
    }, i) => {
        const n = f ? 2 : 8;
        return s(g, {
            ref: i,
            alignItems: "stretch",
            className: r,
            gap: n,
            paddingBottom: p,
            paddingTop: c,
            disabled: d
        }, s(g, {
            alignItems: "stretch",
            gap: n,
            as: l ? "label" : "div"
        }, u && s(W, {
            gap: n,
            alignItems: "center"
        }, s(_.B4, {
            weight: "semibold",
            as: l ? "div" : "label",
            color: "primary"
        }, u), a && s(j, {
            content: a
        }), t && s(W, {
            flex: "grow",
            justifyContent: "end"
        }, t)), e && s("div", {
            className: C({
                "has-error": h
            })
        }, e)), o && !Array.isArray(o) && s(_.B5, null, o), o && Array.isArray(o) && o.length > 0 && s(g, {
            gap: 4
        }, o.map(m => s(_.B5, null, m))), s($, {
            errors: h
        }))
    });
export {
    $ as E, Y as F
};
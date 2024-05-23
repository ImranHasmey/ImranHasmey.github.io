var v = Object.defineProperty;
var u = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty,
    w = Object.prototype.propertyIsEnumerable;
var f = (t, s, e) => s in t ? v(t, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : t[s] = e,
    y = (t, s) => {
        for (var e in s || (s = {})) m.call(s, e) && f(t, e, s[e]);
        if (u)
            for (var e of u(s)) w.call(s, e) && f(t, e, s[e]);
        return t
    };
var x = (t, s) => {
    var e = {};
    for (var n in t) m.call(t, n) && s.indexOf(n) < 0 && (e[n] = t[n]);
    if (t != null && u)
        for (var n of u(t)) s.indexOf(n) < 0 && w.call(t, n) && (e[n] = t[n]);
    return e
};
var h = (t, s, e) => (f(t, typeof s != "symbol" ? s + "" : s, e), e);
import {
    y as o,
    k as D,
    b_ as _,
    ir as z
} from "./tracking-376cff7a.js";
import {
    a as C,
    T as I,
    F as H
} from "./FlexBox-1a755411.js";
import {
    C as k
} from "./_baseEach-63ad03e0.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            s = new Error().stack;
        s && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[s] = "7a5a47a2-1e09-473b-bf11-1c4351ef1cfa", t._sentryDebugIdIdentifier = "sentry-dbid-7a5a47a2-1e09-473b-bf11-1c4351ef1cfa")
    } catch (e) {}
})();
const L = ({
        contentBelow: t,
        details: s,
        disabled: e,
        label: n,
        name: i,
        paddingBottom: a,
        paddingTop: r,
        testid: l,
        track: d,
        value: c,
        onChange: g,
        usePublicationTheme: p
    }) => o(H, {
        as: "label",
        gap: 8,
        paddingBottom: a,
        paddingTop: r
    }, o(k, {
        as: "div",
        checked: c,
        name: i != null ? i : l,
        "data-track-input": d,
        disabled: e,
        size: "small",
        onChange: g
    }), o(C, {
        flex: "grow"
    }, o(I.B4, {
        as: "span",
        color: e ? p ? "pub-secondary-text" : "secondary" : p ? "pub-primary-text" : "primary"
    }, n), s && o(I.B5, {
        color: p ? "pub-secondary-text" : "secondary"
    }, s), t)),
    A = {
        "data-gramm": "false",
        "data-gramm_editor": "false",
        "data-enable-grammarly": "false"
    };
class M extends D {
    constructor() {
        super(...arguments);
        h(this, "onWindowResize", e => {
            this.setAutoHeight()
        });
        h(this, "onKeyDown", e => (this.props.inline && e.key === "Enter" && e.preventDefault(), this.props.onKeyDown && this.props.onKeyDown(e)));
        h(this, "onInput", e => (this.setAutoHeight(), this.props.onInput && this.props.onInput(e)));
        h(this, "onBlur", () => {
            var e;
            if (this.props.inline) {
                const n = (e = this.base) == null ? void 0 : e.value,
                    i = z(n);
                n && n !== i && (this.base.value = i, this.props.onInput && this.props.onInput(event))
            }
        })
    }
    componentDidMount() {
        this.setAutoHeight(), window.addEventListener("resize", this.onWindowResize)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.onWindowResize)
    }
    componentDidUpdate(e, n, i) {
        e.value !== this.props.value && this.setAutoHeight()
    }
    get value() {
        return this.base ? this.base.value : ""
    }
    setAutoHeight() {
        this.props.autoHeight && this.base && (typeof window == "undefined" || !window.getComputedStyle || _(this, e => {
            this.base.style.height = "";
            const n = window.getComputedStyle(this.base),
                i = parseInt(n.getPropertyValue("height")),
                a = parseInt(n.getPropertyValue("padding-top")) + parseInt(n.getPropertyValue("padding-bottom")),
                r = parseInt(n.getPropertyValue("line-height")),
                l = Math.min(Math.round((this.base.scrollHeight - a) / r), this.props.maxLines || 1 / 0);
            this.base.style.height = `${Math.max(l*r+a,i)}px`, this.base.style.height !== e.height && this.setState({
                height: this.base.style.height
            })
        }))
    }
    render(K, {
        height: p
    }) {
        var b = K,
            {
                children: e,
                ref: n,
                style: i,
                onKeyDown: a,
                onInput: r,
                inline: l,
                autoHeight: d,
                maxLines: c
            } = b,
            g = x(b, ["children", "ref", "style", "onKeyDown", "onInput", "inline", "autoHeight", "maxLines"]);
        return d && (i = Object.assign({}, i, {
            height: p
        })), o("textarea", y(y({
            style: i,
            onKeyDown: this.onKeyDown,
            onInput: this.onInput,
            onBlur: this.onBlur
        }, A), g), e)
    }
}
export {
    L as C, M as T, A as d
};
var b = Object.defineProperty,
    y = Object.defineProperties;
var _ = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty,
    g = Object.prototype.propertyIsEnumerable;
var f = (e, t, n) => t in e ? b(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    c = (e, t) => {
        for (var n in t || (t = {})) w.call(t, n) && f(e, n, t[n]);
        if (l)
            for (var n of l(t)) g.call(t, n) && f(e, n, t[n]);
        return e
    },
    o = (e, t) => y(e, _(t));
import {
    y as s,
    k as x,
    be as C,
    ab as h
} from "./tracking-376cff7a.js";
import {
    S as u
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "08edd711-c9b5-41a4-a1f0-d391c08772f4", e._sentryDebugIdIdentifier = "sentry-dbid-08edd711-c9b5-41a4-a1f0-d391c08772f4")
    } catch (n) {}
})();
const z = e => s(u, o(c({}, e), {
        name: "FilledCircleCheckmarkIcon",
        svgParams: {
            height: 24,
            width: 24
        }
    }), s("circle", {
        className: "filled-checkmark-icon-circle",
        cx: "12",
        cy: "12",
        r: "12",
        fill: "#419E4E",
        stroke: "none"
    }), s("path", {
        d: "M7 11.7222L10.8462 16L17 9",
        stroke: e.stroke || "white",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })),
    k = "balance-text",
    I = 100,
    E = 10,
    M = 4;

function H(e) {
    m(e) && (e.style.maxWidth = "", r(e, e.clientHeight, 0, e.clientWidth)), e.classList.add("visible")
}

function r(e, t, n, i) {
    if (i - n < M) {
        e.clientHeight > t ? e.style.maxWidth = `${i}px` : e.style.maxWidth = `${e.scrollWidth+1}px`;
        return
    }
    if (n >= i) {
        e.style.maxWidth = `${i}px`;
        return
    }
    const d = (n + i) / 2;
    e.style.maxWidth = `${d}px`, e.clientHeight > t ? r(e, t, d, i) : r(e, t, n, d)
}

function m(e) {
    var a;
    const t = e.innerHTML,
        n = e.textContent.split(" "),
        i = document.createElement("span");
    i.id = "element-first-word", i.textContent = n.shift(), e.innerHTML = "", e.appendChild(i), e.appendChild(document.createTextNode(` ${n.join(" ")}`));
    const d = ((a = document.getElementById("element-first-word")) == null ? void 0 : a.offsetHeight) || i.offsetHeight,
        p = e.offsetHeight;
    return e.innerHTML = t, p - E > d
}
class S extends x {
    constructor(t, n) {
        super(t, n), this.debouncedRebalance = C(() => this.rebalance(), I)
    }
    componentDidMount() {
        this.rebalance(), typeof window != "undefined" && window.addEventListener("resize", this.debouncedRebalance, !0)
    }
    componentDidUpdate() {
        this.rebalance()
    }
    componentWillUnmount() {
        typeof window != "undefined" && window.removeEventListener("resize", this.debouncedRebalance, !0)
    }
    shouldComponentUpdate(t) {
        return t.children !== this.props.children
    }
    rebalance() {
        typeof window != "undefined" && h() && this.base && H(this.base)
    }
    render({
        text: t
    }) {
        return h() ? s("span", {
            "data-testid": "balanced-text",
            className: k,
            style: {
                display: "inline-block"
            }
        }, t) : s("span", {
            "data-testid": "balanced-text",
            style: {
                textWrap: "balance"
            }
        }, t)
    }
}
const R = e => s(u, o(c({}, e), {
    name: "CreditCardIcon",
    svgParams: {
        height: 21,
        width: 32
    }
}), s("g", {
    fill: "none",
    fillRule: "evenodd"
}, s("g", {
    fill: e.fill || "#515e80",
    stroke: "none"
}, s("g", {
    transform: "translate(0 2)"
}, s("path", {
    d: "M26.58 19H2.42A2.4 2.4 0 0 1 0 16.62V2.38A2.4 2.4 0 0 1 2.42 0h24.16A2.4 2.4 0 0 1 29 2.38v14.25A2.4 2.4 0 0 1 26.58 19zM10 5.83c0-.46-.35-.83-.78-.83H3.78c-.43 0-.78.37-.78.83v3.34c0 .46.35.83.78.83h5.44c.43 0 .78-.37.78-.83V5.83z",
    opacity: ".2"
}), s("path", {
    d: "M25 15h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0H4c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1z",
    opacity: ".3"
})))));
export {
    S as B, R as C, z as F
};
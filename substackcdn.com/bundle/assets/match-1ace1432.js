import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    r as b
} from "./Metadata-be2b4cf2.js";
import {
    eT as v,
    gU as y
} from "./tracking-376cff7a.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "69d6ff70-8cf0-4677-acef-a12a8ecc06e0", e._sentryDebugIdIdentifier = "sentry-dbid-69d6ff70-8cf0-4677-acef-a12a8ecc06e0")
    } catch (r) {}
})();
var c = {};
const g = v(y);
var l;
Object.defineProperty(c, "__esModule", {
    value: !0
});
var _ = c.Link = l = c.Match = void 0,
    w = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    p = b,
    i = g;

function O(e, t) {
    var r = {};
    for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
    return r
}

function x(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function h(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}

function M(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var s = l = c.Match = function(e) {
        M(t, e);

        function t() {
            var r, n, o;
            x(this, t);
            for (var a = arguments.length, u = Array(a), f = 0; f < a; f++) u[f] = arguments[f];
            return o = (r = (n = h(this, e.call.apply(e, [this].concat(u))), n), n.update = function(m) {
                n.nextUrl = m, n.setState({})
            }, r), h(n, o)
        }
        return t.prototype.componentDidMount = function() {
            i.subscribers.push(this.update)
        }, t.prototype.componentWillUnmount = function() {
            i.subscribers.splice(i.subscribers.indexOf(this.update) >>> 0, 1)
        }, t.prototype.render = function(n) {
            var o = this.nextUrl || (0, i.getCurrentUrl)(),
                a = o.replace(/\?.+$/, "");
            return this.nextUrl = null, n.children({
                url: o,
                path: a,
                matches: (0, i.exec)(a, n.path, {}) !== !1
            })
        }, t
    }(p.Component),
    d = function(t) {
        var r = t.activeClassName,
            n = t.path,
            o = O(t, ["activeClassName", "path"]);
        return (0, p.h)(s, {
            path: n || o.href
        }, function(a) {
            var u = a.matches;
            return (0, p.h)(i.Link, w({}, o, {
                class: [o.class || o.className, u && r].filter(Boolean).join(" ")
            }))
        })
    };
_ = c.Link = d;
c.default = s;
s.Link = d;
export {
    _ as L, l as M
};
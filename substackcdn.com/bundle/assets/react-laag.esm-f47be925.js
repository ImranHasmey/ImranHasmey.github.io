import {
    h as me,
    o as $,
    p as V,
    aD as N,
    em as nt,
    y as Q,
    cZ as ot,
    bH as it,
    b3 as xe,
    eR as at,
    cy as st
} from "./tracking-376cff7a.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            r = new Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "ab925a9d-cb65-4037-8b6d-4084d779227c", e._sentryDebugIdIdentifier = "sentry-dbid-ab925a9d-cb65-4037-8b6d-4084d779227c")
    } catch (n) {}
})();

function Te(e, r) {
    for (var n = 0; n < r.length; n++) {
        var t = r[n];
        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
    }
}

function fe(e, r, n) {
    return r && Te(e.prototype, r), n && Te(e, n), e
}

function H() {
    return H = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
            var n = arguments[r];
            for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
        }
        return e
    }, H.apply(this, arguments)
}

function ut(e, r) {
    e.prototype = Object.create(r.prototype), e.prototype.constructor = e, he(e, r)
}

function he(e, r) {
    return he = Object.setPrototypeOf || function(t, o) {
        return t.__proto__ = o, t
    }, he(e, r)
}

function lt(e, r) {
    if (e == null) return {};
    var n = {},
        t = Object.keys(e),
        o, i;
    for (i = 0; i < t.length; i++) o = t[i], !(r.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}

function ft(e, r) {
    if (e) {
        if (typeof e == "string") return Le(e, r);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Le(e, r)
    }
}

function Le(e, r) {
    (r == null || r > e.length) && (r = e.length);
    for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
    return t
}

function K(e, r) {
    var n = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = ft(e)) || r && e && typeof e.length == "number") {
        n && (e = n);
        var t = 0;
        return function() {
            return t >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[t++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Be(e) {
    var r = $(null);

    function n(t) {
        !t || t === r.current || (r.current = t, e(t))
    }
    return n
}

function ct(e) {
    var r = $(e);
    return xe(function() {
        function n(o) {
            typeof o == "function" ? r.current = o(r.current) : r.current = o
        }

        function t() {
            return r.current
        }
        return [t, n]
    }, [])
}

function dt() {
    var e = $([]);
    return xe(function() {
        function r() {
            return e.current.length > 0
        }

        function n() {
            for (var o = K(e.current), i; !(i = o()).done;) {
                var a = i.value;
                a()
            }
            e.current = []
        }

        function t(o) {
            e.current.push(o)
        }
        return {
            hasEventSubscriptions: r,
            removeAllEventSubscriptions: n,
            addEventSubscription: t
        }
    }, [])
}
var ve = typeof window != "undefined" ? at : V;

function vt(e, r) {
    var n = $(e);
    return r ? (n.current = e, n) : (n.current = null, n)
}
var pe = {
    top: 0,
    left: 0,
    right: 1,
    bottom: 1,
    width: 1,
    height: 1
};

function Mt(e) {
    var r = e === void 0 ? {} : e,
        n = r.enabled,
        t = n === void 0 ? !0 : n,
        o = r.preventDefault,
        i = o === void 0 ? !0 : o,
        a = $(null),
        s = me(pe),
        f = s[0],
        u = s[1];

    function c() {
        u(pe)
    }
    var l = f !== pe;

    function d(v) {
        if (t) {
            i && v.preventDefault();
            var p = v.clientX,
                h = v.clientY;
            u({
                top: h,
                left: p,
                width: 1,
                height: 1,
                right: p + 1,
                bottom: h + 1
            })
        }
    }
    return {
        hasMousePosition: l,
        resetMousePosition: c,
        handleMouseEvent: d,
        trigger: {
            getBounds: function() {
                return f
            },
            getParent: a.current ? function() {
                return a.current
            } : void 0
        },
        parentRef: a
    }
}

function ee(e) {
    return parseFloat(e.replace("px", ""))
}

function ge(e, r, n) {
    return e < r ? r : e > n ? n : e
}

function He(e) {
    return e != null
}

function Re() {
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
    return function(t) {
        for (var o = K(r), i; !(i = o()).done;) {
            var a = i.value;
            a && (typeof a == "function" ? a(t) : a.current = t)
        }
    }
}

function pt(e, r) {
    if (typeof e != "undefined") return r || e.ResizeObserver
}

function Ae(e, r) {
    var n = [];
    if (!e || !r || e === document.body) return n;
    var t = r.getComputedStyle(e),
        o = t.overflow,
        i = t.overflowX,
        a = t.overflowY;
    return [o, i, a].some(function(s) {
        return ["auto", "scroll"].includes(s)
    }) && n.push(e), [].concat(n, Ae(e.parentElement, r))
}

function ne(e) {
    return "react-laag: Could not find a valid reference for the " + e + ` element. There might be 2 causes:
   - Make sure that the 'ref' is set correctly on the ` + e + ` element when isOpen: true. Also make sure your component forwards the ref with "forwardRef()".
   - Make sure that you are actually rendering the ` + e + " when the isOpen prop is set to true"
}

function ht(e) {
    var r = e.enabled,
        n = e.onChange,
        t = e.environment,
        o = e.ResizeObserverPolyfill,
        i = e.overflowContainer,
        a = e.triggerOption,
        s = pt(t, o);
    V(function() {}, [s]);
    var f = $(null),
        u = !!a,
        c = ct({
            scrollContainers: [],
            trigger: null,
            layer: null
        }),
        l = c[0],
        d = c[1],
        v = dt(),
        p = v.hasEventSubscriptions,
        h = v.addEventSubscription,
        g = v.removeAllEventSubscriptions,
        y = N(function() {
            var w = l(),
                E = w.layer,
                C = w.trigger,
                M = w.scrollContainers,
                B = M[0];
            if (!E) throw new Error(ne("layer"));
            if (!C && !u) throw new Error(ne("trigger"));
            var G = {
                top: 0,
                left: 0
            };
            if (B) {
                var _ = B.scrollLeft,
                    W = B.scrollTop;
                G = {
                    top: W,
                    left: _
                }
            } else {
                var U = t.scrollX,
                    k = t.scrollY;
                G = {
                    top: k,
                    left: U
                }
            }
            var X = {
                left: 0,
                top: 0
            };
            if (B) {
                var A = t.getComputedStyle(B),
                    J = A.borderLeftWidth,
                    z = A.borderTopWidth;
                X = {
                    left: ee(J) || 0,
                    top: ee(z) || 0
                }
            }
            n({
                layer: E,
                trigger: C,
                scrollContainers: M,
                arrow: f.current
            }, G, X)
        }, [l, n, t, f, u]),
        m = N(function() {
            var w = l(),
                E = w.trigger,
                C = w.layer,
                M = w.scrollContainers;
            if (!C) throw new Error(ne("layer"));
            if (!E && !u) throw new Error(ne("trigger"));
            if (s) {
                for (var B = !1, G = function() {
                        if (!B) {
                            B = !0;
                            return
                        }
                        y()
                    }, _ = new s(G), W = 0, U = [E, C, document.body]; W < U.length; W++) {
                    var k = U[W];
                    k && _.observe(k)
                }
                h(function() {
                    for (var F = 0, Y = [E, C, document.body]; F < Y.length; F++) {
                        var te = Y[F];
                        te && _.unobserve(te)
                    }
                    _.disconnect()
                })
            }
            for (var X = [t].concat(M), A = function() {
                    var Y = z.value;
                    Y.addEventListener("scroll", y), h(function() {
                        return Y.removeEventListener("scroll", y)
                    })
                }, J = K(X), z; !(z = J()).done;) A()
        }, [l, h, y, t, s, u]),
        T = N(function(b, w) {
            r && b && b !== w && (g(), m(), y())
        }, [g, m, y, r]),
        R = Be(N(function(b) {
            var w = l(),
                E = w.layer;
            d(function(C) {
                return H({}, C, {
                    layer: b
                })
            }), T(E, b)
        }, [l, d, T])),
        O = N(function(w) {
            var E = Ae(w, t),
                C = E[0];
            if (C) {
                var M = t.getComputedStyle(C).position,
                    B = ["relative", "absolute", "fixed"].includes(M) || i;
                B || (C.style.position = "relative")
            }
            return E
        }, [t, i]),
        L = Be(N(function(b) {
            var w = O(b),
                E = l(),
                C = E.trigger;
            d(function(M) {
                return H({}, M, {
                    trigger: b,
                    scrollContainers: w
                })
            }), T(C, b)
        }, [l, d, T, O])),
        j = a == null || a.getParent == null ? void 0 : a.getParent();
    return ve(function() {
        j && d(function(b) {
            return H({}, b, {
                scrollContainers: O(j)
            })
        })
    }, [j, d, O]), ve(function() {
        return r && (p() || m()),
            function() {
                p() && g()
            }
    }, [r, p, m, g]), ve(function() {
        r && y()
    }), {
        triggerRef: L,
        layerRef: R,
        arrowRef: f,
        closestScrollContainer: l().scrollContainers[0] || null
    }
}
var Fe = st({});

function gt(e) {
    var r = e.children,
        n = e.registrations,
        t = N(function(i) {
            return n.current.add(i),
                function() {
                    return n.current.delete(i)
                }
        }, [n]);
    return Q(Fe.Provider, {
        value: t
    }, r)
}

function yt(e, r) {
    for (var n = K(e), t; !(t = n()).done;) {
        var o = t.value.shouldCloseWhenClickedOutside;
        if (!o(r)) return !1
    }
    return !0
}

function mt(e) {
    var r = e.isOpen,
        n = e.onOutsideClick,
        t = e.onParentClose,
        o = $(null),
        i = $(null),
        a = $(new Set),
        s = ot(Fe),
        f = N(function(c) {
            var l = c.target,
                d = o.current && o.current.contains(l),
                v = i.current && i.current.contains(l),
                p = yt(a.current, c);
            return v && p && a.current.forEach(function(h) {
                var g = h.closeChild;
                return g()
            }), !d && !v && p
        }, [o, i, a]);
    return V(function() {
        if (typeof s == "function") return s({
            shouldCloseWhenClickedOutside: f,
            closeChild: function() {
                t && t()
            }
        })
    }, [s, f, t, a]), V(function() {
        var u = typeof s == "function",
            c = !r || !n || u;
        if (c) return;

        function l(d) {
            f(d) && n()
        }
        return document.addEventListener("click", l, !0),
            function() {
                return document.removeEventListener("click", l, !0)
            }
    }, [r, n, f, s]), V(function() {
        r || a.current.forEach(function(u) {
            var c = u.closeChild;
            return c()
        })
    }, [r]), {
        closeOnOutsideClickRefs: {
            trigger: o,
            layer: i
        },
        registrations: a
    }
}
var bt = ["bottom-start", "bottom-end", "bottom-center", "top-start", "top-center", "top-end", "left-end", "left-center", "left-start", "right-end", "right-center", "right-start", "center"],
    wt = {
        top: "bottom",
        left: "right",
        bottom: "top",
        right: "left",
        center: "center"
    },
    St = function() {
        function e(n, t, o, i, a, s, f, u, c) {
            this.prop = void 0, this.opposite = void 0, this.isHorizontal = void 0, this.sizeProp = void 0, this.oppositeSizeProp = void 0, this.cssProp = void 0, this.oppositeCssProp = void 0, this.isCenter = void 0, this.isPush = void 0, this.prop = n, this.opposite = t, this.isHorizontal = o, this.sizeProp = i, this.oppositeSizeProp = a, this.cssProp = s, this.oppositeCssProp = f, this.isCenter = u, this.isPush = c
        }
        var r = e.prototype;
        return r.factor = function(t) {
            return t * (this.isPush ? 1 : -1)
        }, r.isOppositeDirection = function(t) {
            return this.isHorizontal !== t.isHorizontal
        }, e
    }();

function q(e, r) {
    r === void 0 && (r = !0);
    var n = ["left", "right"].includes(e);
    return new St(e, r ? q(wt[e], !1) : null, n, n ? "width" : "height", n ? "height" : "width", n ? "left" : "top", n ? "top" : "left", e === "center", !["right", "bottom"].includes(e))
}
var P = {
        top: q("top"),
        bottom: q("bottom"),
        left: q("left"),
        right: q("right")
    },
    S = H({}, P, {
        center: q("center")
    }),
    oe = ["top", "left", "bottom", "right"],
    be = function() {
        function e(r) {
            return this.top = void 0, this.left = void 0, this.right = void 0, this.bottom = void 0, Object.assign(this, r)
        }
        return e.mergeSmallestSides = function(n) {
            var t = n[0],
                o = n.slice(1);
            if (!t) throw new Error("Please provide at least 1 bounds objects in order to merge");
            for (var i = Object.fromEntries(oe.map(function(d) {
                    return [d, t[d]]
                })), a = K(o), s; !(s = a()).done;)
                for (var f = s.value, u = K(oe), c; !(c = u()).done;) {
                    var l = c.value;
                    i[l] = Math.min(i[l], f[l])
                }
            return new e(i)
        }, fe(e, [{
            key: "allSidesArePositive",
            get: function() {
                var n = this;
                return oe.every(function(t) {
                    return n[t] >= 0
                })
            }
        }, {
            key: "negativeSides",
            get: function() {
                var n = this;
                return Object.fromEntries(oe.filter(function(t) {
                    return n[t] < 0
                }).map(function(t) {
                    return [t, n[t]]
                }))
            }
        }]), e
    }();

function $e() {
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
    return r.reduce(function(t, o) {
        return t + (o ? ee(o) : 0)
    }, 0)
}

function ye(e) {
    var r = e.top,
        n = e.left,
        t = e.right,
        o = e.bottom,
        i = e.width,
        a = e.height;
    return {
        top: r,
        left: n,
        right: t,
        bottom: o,
        width: i,
        height: a
    }
}
var Ot = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0
    },
    x = function() {
        e.create = function(t) {
            return new e(t)
        }, e.fromElement = function(t, o) {
            o === void 0 && (o = {});
            var i = o,
                a = i.withTransform,
                s = a === void 0 ? !0 : a,
                f = i.environment,
                u = f === void 0 ? window : f,
                c = i.withScrollbars,
                l = c === void 0 ? !0 : c,
                d = ye(t.getBoundingClientRect()),
                v = new e(d);
            if (!s) {
                var p = u.getComputedStyle(t),
                    h = p.width,
                    g = p.height,
                    y = p.boxSizing,
                    m = p.borderLeft,
                    T = p.borderRight,
                    R = p.borderTop,
                    O = p.borderBottom,
                    L = p.paddingLeft,
                    j = p.paddingRight,
                    b = p.paddingTop,
                    w = p.paddingBottom,
                    E = y === "border-box" ? ee(h) : $e(h, m, T, L, j),
                    C = y === "border-box" ? ee(g) : $e(g, R, O, b, w);
                v = new e(H({}, v, {
                    width: E,
                    height: C
                }))
            }
            if (!l) {
                var M = v.width - t.clientWidth,
                    B = v.height - t.clientHeight;
                return v.substract({
                    right: M,
                    bottom: B
                })
            }
            return v
        }, e.empty = function() {
            return new e
        }, e.fromWindow = function(t) {
            var o, i = (o = t == null ? void 0 : t.document.scrollingElement) != null ? o : t == null ? void 0 : t.document.documentElement,
                a = i != null ? i : {},
                s = a.clientWidth,
                f = s === void 0 ? 0 : s,
                u = a.clientHeight,
                c = u === void 0 ? 0 : u;
            return new e({
                width: f,
                height: c,
                right: f,
                bottom: c
            })
        };

        function e(n) {
            return n === void 0 && (n = {}), this.top = void 0, this.left = void 0, this.right = void 0, this.bottom = void 0, this.width = void 0, this.height = void 0, Object.assign(this, Ot, n)
        }
        var r = e.prototype;
        return r.toObject = function() {
            return ye(this)
        }, r.merge = function(t) {
            var o = this.toObject();
            return new e(H({}, o, typeof t == "function" ? t(o) : t))
        }, r.substract = function(t) {
            for (var o = this.toObject(), i = Object.entries(t), a = 0, s = i; a < s.length; a++) {
                var f = s[a],
                    u = f[0],
                    c = f[1];
                if (u in P) {
                    var l = P[u];
                    o[u] += l.factor(c), o[l.isHorizontal ? "width" : "height"] -= c
                } else o[u] -= c || 0
            }
            return new e(o)
        }, r.offsetsTo = function(t) {
            return new be({
                top: t.top - this.top,
                bottom: this.bottom - t.bottom,
                left: t.left - this.left,
                right: this.right - t.right
            })
        }, r.mapSides = function(t) {
            for (var o = this.toObject(), i = Object.values(P), a = 0, s = i; a < s.length; a++) {
                var f = s[a];
                o[f.prop] = t(f, o[f.prop])
            }
            return new e(o)
        }, fe(e, [{
            key: "surface",
            get: function() {
                return this.width * this.height
            }
        }]), e
    }(),
    Ne = function() {
        function e(n, t, o, i, a) {
            this.primary = void 0, this.secondary = void 0, this.offsets = void 0, this.subjectsBounds = void 0, this._cachedLayerBounds = null, this._cachedContainerOffsets = null, this.primary = n, this.secondary = t, this.offsets = a, this.setSubjectsBounds(o, i)
        }
        var r = e.prototype;
        return r.setSubjectsBounds = function(t, o) {
            if (!o) {
                this.subjectsBounds = t;
                return
            }
            var i = typeof o == "function" ? o(this.primary.prop) : o;
            this.subjectsBounds = t.merge({
                layer: H({}, t.layer, i)
            })
        }, r.getLayerBounds = function(t) {
            if (t === void 0 && (t = 0), this._cachedLayerBounds && t === 0) return this._cachedLayerBounds;
            var o = this.primary,
                i = this.secondary,
                a = this.subjectsBounds,
                s = a.trigger,
                f = a.layer,
                u = a.arrow,
                c = o.isHorizontal,
                l = o.oppositeCssProp,
                d = o.oppositeSizeProp,
                v = o.prop,
                p = o.opposite,
                h = x.empty();
            h[p.prop] = s[v] - o.factor(this.offsets.trigger), h[v] = h[p.prop] - o.factor(f[o.sizeProp]);
            var g = this.offsets.arrow * 2,
                y = s[l] - (f[d] - u[d]) + g,
                m = s[l] + (s[d] - u[d]) - g;
            if (i.isPush || (y += f[d], m += f[d]), i.isCenter) {
                var T = (c ? P.top : P.left).prop,
                    R = (c ? P.bottom : P.right).prop;
                h[T] = ge(s[T] + s[d] / 2 - f[d] / 2 + t, y, m), h[R] = h[T] + f[d]
            } else {
                var O = i,
                    L = s[O.prop],
                    j = L < y ? y - L : L > m ? m - L : 0;
                h[O.prop] = ge(L + t + j, y, m), h[O.opposite.prop] = h[O.prop] + i.factor(f[d])
            }
            h.width = h.right - h.left, h.height = h.bottom - h.top;
            var b = x.create(h);
            return t === 0 && (this._cachedLayerBounds = b), b
        }, r.getLayerCollisionBounds = function() {
            var t = this.offsets.container;
            return this.getLayerBounds().mapSides(function(o, i) {
                return i -= o.factor(t)
            }).merge(function(o) {
                var i = o.width,
                    a = o.height;
                return {
                    width: i + t * 2,
                    height: a + t * 2
                }
            })
        }, r.getContainerOffsets = function(t) {
            if (this._cachedContainerOffsets && !t) return this._cachedContainerOffsets;
            var o = this.subjectsBounds.merge({
                    layer: t || this.getLayerCollisionBounds()
                }),
                i = be.mergeSmallestSides(o.layerOffsetsToScrollContainers);
            return t || (this._cachedContainerOffsets = i), i
        }, fe(e, [{
            key: "type",
            get: function() {
                return this.primary.prop + "-" + (this.secondary.prop === "center" ? "center" : ["bottom", "right"].includes(this.secondary.prop) ? "end" : "start")
            }
        }, {
            key: "triggerIsBigger",
            get: function() {
                var t = this.secondary.isHorizontal,
                    o = this.subjectsBounds,
                    i = o.triggerHasBiggerWidth,
                    a = o.triggerHasBiggerHeight;
                return t && i || !t && a
            }
        }, {
            key: "fitsContainer",
            get: function() {
                return this.getContainerOffsets().allSidesArePositive
            }
        }, {
            key: "visibleSurface",
            get: function() {
                var t = this.getLayerBounds(),
                    o = this.getContainerOffsets(t),
                    i = o.negativeSides;
                for (var a in i) i[a] = -i[a];
                return t.substract(i).surface
            }
        }, {
            key: "secondaryOffsetSide",
            get: function() {
                var t, o, i = this,
                    a = this.getContainerOffsets(),
                    s = (t = (o = Object.entries(a.negativeSides).map(function(u) {
                        var c = u[0],
                            l = u[1];
                        return [P[c], l]
                    }).filter(function(u) {
                        var c = u[0];
                        return i.primary.isOppositeDirection(c)
                    }).sort(function(u, c) {
                        var l = u[1],
                            d = c[1];
                        return d - l
                    })) == null ? void 0 : o[0]) != null ? t : [],
                    f = s[0];
                return f || null
            }
        }]), e
    }(),
    je = function(e) {
        ut(r, e);

        function r() {
            return e.apply(this, arguments) || this
        }
        var n = r.prototype;
        return n.getLayerBounds = function() {
            var o = this.subjectsBounds,
                i = o.trigger,
                a = o.layer,
                s = x.empty();
            return s.top = i.top + i.height / 2 - a.height / 2, s.bottom = s.top + a.height, s.left = i.left + i.width / 2 - a.width / 2, s.right = s.left + a.width, s.width = s.right - s.left, s.height = s.bottom - s.top, s
        }, r
    }(Ne);

function Ct(e, r, n) {
    var t = e.layer,
        o = e.trigger,
        i = e.arrow,
        a = r.primary.oppositeSizeProp,
        s = r.primary.isHorizontal ? ["top", "bottom"] : ["left", "right"],
        f = s[0],
        u = s[1],
        c = t[f] + t[a] / 2 - o[f] - i[a] / 2 - n,
        l = t[u] - t[a] / 2 - o[u] + i[a] / 2 + n;
    return (c < 0 ? -c : 0) + (l > 0 ? -l : 0)
}
var Me = {
    position: "absolute",
    willChange: "top, left",
    left: null,
    right: null,
    top: null,
    bottom: null
};

function Pt(e, r, n) {
    var t;
    if (r.primary.isCenter) return Me;
    var o = e.layer,
        i = e.trigger,
        a = e.arrow,
        s = r.primary.oppositeSizeProp,
        f = i[s] > o[s],
        u = n + a[s] / 2,
        c = o[s] - a[s] / 2 - n,
        l = Ct(e, r, n),
        d = r.primary.prop,
        v = r.primary.oppositeCssProp,
        p = f ? o[s] / 2 + l : i[v] + i[s] / 2 - o[v];
    return H({}, Me, (t = {}, t[d] = "100%", t[v] = ge(p, u, c), t))
}
var ke = function() {
        function e(n, t, o) {
            this.placements = void 0, this.config = void 0, this.subjectsBounds = void 0, this.placements = n, this.config = t, this.subjectsBounds = o
        }
        e.getSidesFromPlacementType = function(t) {
            var o = t.split("-"),
                i = o[0],
                a = o[1],
                s = P[i],
                f;
            return a === "center" ? f = S.center : s.isHorizontal ? f = a === "start" ? S.top : S.bottom : f = a === "start" ? S.left : S.right, [s, f]
        }, e.create = function(t, o) {
            var i = {
                arrow: o.arrowOffset,
                container: o.containerOffset,
                trigger: o.triggerOffset
            };

            function a(s) {
                s === void 0 && (s = o.placement);
                var f = e.getSidesFromPlacementType(s),
                    u = f[0],
                    c = f[1],
                    l = P[u.isHorizontal ? o.preferY : o.preferX],
                    d = !u.isHorizontal && t.triggerHasBiggerWidth || u.isHorizontal && t.triggerHasBiggerHeight;

                function v(h, g) {
                    return new Ne(h, g, t, o.layerDimensions, i)
                }
                var p = [];
                return p[0] = v(u, c), p[1] = v(u, c.isCenter ? l : S.center), p[2] = v(u, S[(c.opposite.isCenter ? l.opposite : c.opposite).prop]), p[3] = v(l, d ? u : S[u.opposite.prop]), p[4] = v(l, S.center), p[5] = v(l, d ? S[u.opposite.prop] : u), p[6] = v(P[l.opposite.prop], d ? u : S[u.opposite.prop]), p[7] = v(P[l.opposite.prop], S.center), p[8] = v(P[l.opposite.prop], d ? S[u.opposite.prop] : u), p[9] = v(P[u.opposite.prop], c), p[10] = v(P[u.opposite.prop], c.isCenter ? l : S.center), p[11] = v(P[u.opposite.prop], S[(c.opposite.isCenter ? l.opposite : c.opposite).prop]), p = p.filter(function(h) {
                    return h.type === o.placement || o.possiblePlacements.includes(h.type)
                }), p
            }
            return o.placement === "center" ? new e([new je(S.center, S.center, t, o.layerDimensions, i)].concat(a(o.preferY + "-" + o.preferX)), o, t) : new e(a(), o, t)
        };
        var r = e.prototype;
        return r.filterPlacementsBySide = function(t) {
            return this.placements.filter(function(o) {
                return o.primary === t
            })
        }, r.findFirstPlacementThatFits = function() {
            return this.placements.find(function(t) {
                return t.fitsContainer
            })
        }, r.placementWithBiggestVisibleSurface = function() {
            var t = this.placements.map(function(i) {
                    return {
                        placement: i,
                        surface: i.visibleSurface
                    }
                }).sort(function(i, a) {
                    return a.surface - i.surface
                }),
                o = t[0].placement;
            return o
        }, r.findSuitablePlacement = function() {
            return this.config.auto ? this.findFirstPlacementThatFits() || this.placementWithBiggestVisibleSurface() : this.placements[0]
        }, r.getSecondaryOffset = function(t) {
            var o = this.config,
                i = o.auto,
                a = o.snap;
            if (!i || a || t instanceof je) return 0;
            var s = this.filterPlacementsBySide(t.primary),
                f = s.indexOf(t) === 0;
            if (f && t.fitsContainer) return 0;
            var u = s.find(function(h) {
                return !h.fitsContainer
            });
            if (!u) return 0;
            var c = u.secondaryOffsetSide;
            if (!c) return 0;
            var l = t.getContainerOffsets(),
                d = t.secondary,
                v;
            t.triggerIsBigger || u === t ? v = c.isPush ? -1 : 1 : v = d === S.left || [S.top, S.center].includes(d) && c.isPush ? -1 : 1;
            var p = l[c.prop];
            return p * v
        }, r.getStyles = function(t, o, i, a) {
            var s = {
                    willChange: "top, left, width, height"
                },
                f = Pt(this.subjectsBounds.merge({
                    layer: t
                }), o, this.config.arrowOffset),
                u = this.config.overflowContainer ? H({}, s, {
                    position: "fixed",
                    top: t.top,
                    left: t.left
                }) : H({}, s, {
                    position: "absolute",
                    top: t.top - this.subjectsBounds.parent.top + i.top - a.top,
                    left: t.left - this.subjectsBounds.parent.left + i.left - a.left
                });
            return {
                arrow: f,
                layer: u
            }
        }, r.getHasDisappeared = function(t) {
            var o = this.config.overflowContainer ? this.subjectsBounds.trigger : t,
                i = be.mergeSmallestSides(this.subjectsBounds.offsetsToScrollContainers(o, !0)),
                a = Object.entries(i.negativeSides),
                s = a.some(function(f) {
                    var u = f[0],
                        c = f[1],
                        l = P[u];
                    return c <= -o[l.sizeProp]
                });
            return s ? "full" : i.allSidesArePositive ? null : "partial"
        }, r.result = function(t, o) {
            var i = this.findSuitablePlacement(),
                a = this.getSecondaryOffset(i),
                s = i.getLayerBounds(a),
                f = this.getStyles(s, i, t, o),
                u = i.primary.prop;
            return {
                styles: f,
                layerSide: u,
                placement: i,
                layerBounds: s,
                hasDisappeared: this.getHasDisappeared(s)
            }
        }, e
    }(),
    Et = function() {
        function e(n, t) {
            this.overflowContainer = void 0, this.trigger = void 0, this.layer = void 0, this.arrow = void 0, this.parent = void 0, this.window = void 0, this.scrollContainers = void 0, this.overflowContainer = t, Object.assign(this, n)
        }
        e.create = function(t, o, i, a, s, f, u, c) {
            var l = x.fromWindow(t);
            return new e({
                layer: x.fromElement(o, {
                    environment: t,
                    withTransform: !1
                }),
                trigger: c ? x.create(ye(c())) : x.fromElement(i),
                arrow: s ? x.fromElement(s) : x.empty(),
                parent: a ? x.fromElement(a) : l,
                window: l,
                scrollContainers: [l].concat(f.map(function(d) {
                    return x.fromElement(d, {
                        withScrollbars: !1
                    })
                }))
            }, u)
        };
        var r = e.prototype;
        return r.merge = function(t) {
            return new e(H({}, this, t), this.overflowContainer)
        }, r.offsetsToScrollContainers = function(t, o) {
            o === void 0 && (o = !1);
            var i = this.overflowContainer && !o ? [this.window] : this.scrollContainers;
            return i.map(function(a) {
                return a.offsetsTo(t)
            })
        }, fe(e, [{
            key: "layerOffsetsToScrollContainers",
            get: function() {
                return this.offsetsToScrollContainers(this.layer)
            }
        }, {
            key: "triggerHasBiggerWidth",
            get: function() {
                return this.trigger.width > this.layer.width
            }
        }, {
            key: "triggerHasBiggerHeight",
            get: function() {
                return this.trigger.height > this.layer.height
            }
        }]), e
    }(),
    Ie = null,
    I = {
        auto: !1,
        arrowOffset: 0,
        containerOffset: 10,
        triggerOffset: 0,
        overflowContainer: !0,
        placement: "top-center",
        possiblePlacements: bt,
        preferX: "right",
        preferY: "bottom",
        snap: !1,
        container: void 0,
        trigger: void 0
    };

function kt(e) {
    var r, n = e.isOpen,
        t = n === void 0 ? !1 : n,
        o = e.overflowContainer,
        i = o === void 0 ? I.overflowContainer : o,
        a = e.environment,
        s = a === void 0 ? typeof window != "undefined" ? window : void 0 : a,
        f = e.ResizeObserver,
        u = e.placement,
        c = u === void 0 ? I.placement : u,
        l = e.possiblePlacements,
        d = l === void 0 ? I.possiblePlacements : l,
        v = e.preferX,
        p = v === void 0 ? I.preferX : v,
        h = e.preferY,
        g = h === void 0 ? I.preferY : h,
        y = e.auto,
        m = y === void 0 ? I.auto : y,
        T = e.snap,
        R = T === void 0 ? I.snap : T,
        O = e.triggerOffset,
        L = O === void 0 ? I.triggerOffset : O,
        j = e.containerOffset,
        b = j === void 0 ? I.containerOffset : j,
        w = e.arrowOffset,
        E = w === void 0 ? I.arrowOffset : w,
        C = e.container,
        M = C === void 0 ? I.container : C,
        B = e.layerDimensions,
        G = B === void 0 ? null : B,
        _ = e.onDisappear,
        W = e.onOutsideClick,
        U = e.onParentClose,
        k = e.trigger,
        X = me(function() {
            return {
                layerSide: c === "center" ? "center" : ke.getSidesFromPlacementType(c)[0].prop,
                styles: {
                    layer: {
                        position: i ? "fixed" : "absolute",
                        top: 0,
                        left: 0
                    },
                    arrow: {
                        position: "absolute",
                        top: 0,
                        left: 0
                    }
                }
            }
        }),
        A = X[0],
        J = X[1],
        z = $(null),
        F = vt(A, t),
        Y = $({
            cancelled: !1
        });
    V(function() {
        return function() {
            Y.current.cancelled = !0
        }
    }, []);
    var te = N(function(Z, Ve, Ue) {
            var Ze = Z.arrow,
                qe = Z.layer,
                Ce = Z.scrollContainers,
                Ke = Z.trigger,
                Je = Ce[0],
                Qe = Et.create(s, qe, Ke, Je, Ze, Ce, i, k == null ? void 0 : k.getBounds),
                et = {
                    placement: c,
                    possiblePlacements: d,
                    auto: m,
                    layerDimensions: G,
                    arrowOffset: E,
                    containerOffset: b,
                    triggerOffset: L,
                    preferX: p,
                    preferY: g,
                    snap: R,
                    overflowContainer: i
                },
                ce = ke.create(Qe, et).result(Ve, Ue),
                Pe = ce.hasDisappeared,
                tt = ce.layerSide,
                rt = ce.styles,
                de = {
                    layerSide: tt,
                    styles: rt
                };
            if (!F.current || Tt(F.current, de)) {
                F.current = de, Y.current.cancelled = !0;
                var Ee = {
                    cancelled: !1
                };
                Y.current = Ee, Promise.resolve().then(function() {
                    Ee.cancelled || J(de)
                })
            }
            He(Pe) && He(_) && _(Pe)
        }, [E, m, b, s, G, _, i, c, d, p, g, R, L, F, k]),
        re = ht({
            ResizeObserverPolyfill: f,
            environment: s,
            enabled: t,
            overflowContainer: i,
            onChange: te,
            triggerOption: k
        }),
        _e = re.triggerRef,
        Ye = re.layerRef,
        Ge = re.arrowRef,
        we = re.closestScrollContainer,
        Se = mt({
            isOpen: t,
            onOutsideClick: W,
            onParentClose: U
        }),
        Oe = Se.closeOnOutsideClickRefs,
        We = Se.registrations,
        Xe = {
            triggerProps: k ? {} : {
                ref: Re(_e, Oe.trigger, z)
            },
            layerProps: {
                ref: Re(Ye, Oe.layer),
                style: A.styles.layer
            },
            arrowProps: {
                ref: Ge,
                style: A.styles.arrow,
                layerSide: A.layerSide
            },
            layerSide: A.layerSide,
            triggerBounds: t ? k ? k.getBounds() : (r = z.current) == null ? void 0 : r.getBoundingClientRect() : null,
            renderLayer: function(Z) {
                return typeof document != "undefined" ? nt(Q(gt, {
                    registrations: We,
                    children: Z
                }), i || !we ? Lt(M) : we) : null
            }
        };
    return Xe
}

function Tt(e, r) {
    if (e.layerSide !== r.layerSide) return !0;
    for (var n = ["position", "top", "left", "right", "bottom"], t = 0, o = n; t < o.length; t++) {
        var i = o[t];
        if (e.styles.layer[i] !== r.styles.layer[i] || e.styles.arrow[i] !== r.styles.arrow[i]) return !0
    }
    return !1
}
var De = "layers";

function Lt(e) {
    var r;
    if (typeof e == "function") {
        if (r = e(), !r || !(r instanceof HTMLElement)) throw new Error("react-laag: You've passed a function to the 'container' prop, but it returned no valid HTMLElement")
    } else if (e instanceof HTMLElement) r = e;
    else if (typeof e == "string") {
        if (r = document.getElementById(e), !r) throw new Error("react-laag: You've passed element with id '" + e + "' to the 'container' prop, but it returned no valid HTMLElement")
    } else {
        if (Ie instanceof HTMLElement) return Ie;
        r = document.getElementById(De), r || (r = document.createElement("div"), r.id = De, r.style.cssText = `
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
      `, document.body.appendChild(r))
    }
    return r
}
var Bt = ["size", "angle", "borderWidth", "borderColor", "roundness", "backgroundColor", "layerSide", "style"],
    ie = "left",
    ae = "top",
    se = "bottom",
    ue = "right";

function le(e, r) {
    return Math.tan(e * (Math.PI / 180)) * r
}

function Ht(e, r, n, t) {
    var o, i = (o = {}, o[se] = "0 " + -t + " " + r + " " + e, o[ae] = "0 0 " + r + " " + (e + t), o[ue] = -t + " 0 " + e + " " + r, o[ie] = "0 0 " + (e + t) + " " + r, o);
    return i[n.prop]
}

function Rt(e, r, n, t, o) {
    var i, a, s, f = t / 10 * e * 2,
        u = (i = {}, i[se] = [0, e], i[ae] = [0, 0], i[ue] = [e, r], i[ie] = [0, r], i)[n.prop].join(" "),
        c = n.isHorizontal ? "V 0" : "H " + r,
        l = r / 2,
        d = r / 2 + le(o, e / 8),
        v = e / 8,
        p = (a = {}, a[se] = ["C", d, v, l + f, 0, l, 0], a[ae] = ["C", d, e - v, l + f, e, l, e], a[ue] = ["C", v, r - d, 0, l - f, 0, l], a[ie] = ["C", e - v, r - d, e, l - f, e, l], a)[n.prop].join(" "),
        h = r / 2 - le(o, e / 8),
        g = e / 8,
        y = (s = {}, s[se] = ["C", l - f, 0, h, g, u], s[ae] = ["C", l - f, e, h, e - g, u], s[ue] = ["C", 0, l + f, g, r - h, u], s[ie] = ["C", e, l + f, e - g, r - h, u], s)[n.prop].join(" ");
    return ["M", u, c, p, y].join(" ")
}

function $t(e, r, n, t, o) {
    var i = le(o, n),
        a = t.isPush ? [0, n] : [e, e - n],
        s = a[0],
        f = a[1];
    return t.isHorizontal ? ["M", s, n, "V", r - n, "L", f, r - n - i, "V", i + n, "Z"].join(" ") : ["M", n, s, "H", r - n, "L", r - n - i, f, "H", i + n, "Z"].join(" ")
}
var It = it(function(r, n) {
        var t = r.size,
            o = t === void 0 ? 8 : t,
            i = r.angle,
            a = i === void 0 ? 45 : i,
            s = r.borderWidth,
            f = s === void 0 ? 0 : s,
            u = r.borderColor,
            c = u === void 0 ? "black" : u,
            l = r.roundness,
            d = l === void 0 ? 0 : l,
            v = r.backgroundColor,
            p = v === void 0 ? "white" : v,
            h = r.layerSide,
            g = h === void 0 ? "top" : h,
            y = r.style,
            m = y === void 0 ? {} : y,
            T = lt(r, Bt);
        if (g === "center") return null;
        var R = P[g],
            O = o,
            L = le(a, o) * 2,
            j = Math.max(O, L);
        return Q("svg", H({
            ref: n
        }, T, {
            style: H({}, m, {
                transform: "translate" + (R.isHorizontal ? "Y" : "X") + "(-50%)"
            }),
            width: j,
            height: j,
            preserveAspectRatio: R.isPush ? "xMinYMin" : "xMaxYMax",
            viewBox: Ht(O, L, R, f)
        }), Q("path", {
            fill: p,
            strokeWidth: f,
            stroke: c,
            d: Rt(O, L, R, d, a)
        }), Q("path", {
            fill: p,
            d: $t(O, L, f, R, a)
        }))
    }),
    D;
(function(e) {
    e[e.ENTERING = 0] = "ENTERING", e[e.LEAVING = 1] = "LEAVING", e[e.IDLE = 2] = "IDLE"
})(D || (D = {}));

function Dt(e) {
    var r = e === void 0 ? {} : e,
        n = r.delayEnter,
        t = n === void 0 ? 0 : n,
        o = r.delayLeave,
        i = o === void 0 ? 0 : o,
        a = r.hideOnScroll,
        s = a === void 0 ? !0 : a,
        f = me(!1),
        u = f[0],
        c = f[1],
        l = $(null),
        d = $(D.IDLE),
        v = $(!1),
        p = N(function() {
            clearTimeout(l.current), l.current = null, d.current = D.IDLE
        }, []);

    function h() {
        d.current === D.LEAVING && l.current && p(), !u && (d.current = D.ENTERING, l.current = window.setTimeout(function() {
            c(!0), l.current = null, d.current = D.IDLE
        }, t))
    }

    function g(m, T) {
        if (d.current === D.ENTERING && l.current && p(), !!u) {
            if (T) {
                c(!1), l.current = null, d.current = D.IDLE;
                return
            }
            d.current = D.LEAVING, l.current = window.setTimeout(function() {
                c(!1), l.current = null, d.current = D.IDLE
            }, i)
        }
    }
    V(function() {
        function m() {
            u && s && (p(), c(!1))
        }
        return window.addEventListener("scroll", m, !0),
            function() {
                window.removeEventListener("scroll", m, !0), l.current && clearTimeout(l.current)
            }
    }, [u, s, p]);
    var y = {
        onMouseEnter: h,
        onMouseLeave: g,
        onTouchStart: function() {
            v.current = !1
        },
        onTouchMove: function() {
            v.current = !0
        },
        onTouchEnd: function() {
            !v.current && !u && c(!0), v.current = !1
        }
    };
    return [u, y, function() {
        return g(null, !0)
    }]
}
export {
    It as A, Dt as a, Mt as b, kt as u
};
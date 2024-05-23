var oe = Object.defineProperty,
    se = Object.defineProperties;
var te = Object.getOwnPropertyDescriptors;
var q = Object.getOwnPropertySymbols;
var re = Object.prototype.hasOwnProperty,
    le = Object.prototype.propertyIsEnumerable;
var K = (t, l, s) => l in t ? oe(t, l, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : t[l] = s,
    y = (t, l) => {
        for (var s in l || (l = {})) re.call(l, s) && K(t, s, l[s]);
        if (q)
            for (var s of q(l)) le.call(l, s) && K(t, s, l[s]);
        return t
    },
    _ = (t, l) => se(t, te(l));
var b = (t, l, s) => new Promise((u, o) => {
    var a = n => {
            try {
                c(s.next(n))
            } catch (d) {
                o(d)
            }
        },
        i = n => {
            try {
                c(s.throw(n))
            } catch (d) {
                o(d)
            }
        },
        c = n => n.done ? u(n.value) : Promise.resolve(n.value).then(a, i);
    c((s = s.apply(t, l)).next())
});
import {
    y as e,
    c5 as ae,
    i as S,
    o as ie,
    p as B,
    h as v,
    H as W,
    q as G,
    bk as Q
} from "./tracking-376cff7a.js";
import {
    T,
    a as H,
    c as N,
    F as h,
    f as C
} from "./FlexBox-1a755411.js";
import {
    j as ce
} from "./jsesc-a42a28f2.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    M as ue
} from "./Modal-ab851ad1.js";
import {
    a as V
} from "./Select-f97196dc.js";
import {
    B as me
} from "./BurgerIcon-c6dd2664.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            l = new Error().stack;
        l && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[l] = "4661f278-4641-442a-8788-6afdc46de1b4", t._sentryDebugIdIdentifier = "sentry-dbid-4661f278-4641-442a-8788-6afdc46de1b4")
    } catch (s) {}
})();
const pe = (t, l) => {
        var o, a, i, c, n, d;
        const s = t == null ? void 0 : t.metadata.time,
            u = {
                "@context": "https://schema.org/",
                "@type": "Recipe",
                name: t.name,
                image: t.image_url ? [t.image_url] : null,
                author: {
                    "@type": "Person",
                    name: (o = l.publishedBylines) == null ? void 0 : o.map(I => I.name).join(", ")
                },
                cookTime: (a = t.settings) != null && a.showTime && s ? de(s) : null,
                datePublished: l.post_date,
                description: null,
                recipeIngredient: t.ingredients,
                recipeInstructions: (i = t.steps) == null ? void 0 : i.map((I, D) => ({
                    "@type": "HowToStep",
                    text: I,
                    position: D + 1
                })),
                keywords: (c = t.metadata) == null ? void 0 : c.keywords,
                recipeCategory: (n = t.metadata) == null ? void 0 : n.category,
                recipeCuisine: (d = t.metadata) == null ? void 0 : d.cuisine
            };
        return e("script", {
            type: "application/ld+json",
            dangerouslySetInnerHTML: {
                __html: ce(u, {
                    json: !0,
                    isSecureContext: !0
                })
            }
        })
    },
    de = t => !t.number || !t.unit ? null : {
        minute: `PT${t.number}M`,
        hour: `PT${t.number}H`,
        day: `P${t.number}D`
    }[t.unit],
    ge = "_recipe_1arom_1",
    he = "_recipeInfo_1arom_8",
    fe = "_metaTop_1arom_15",
    ye = "_time_1arom_25",
    _e = "_metaBottom_1arom_28",
    ve = "_sectionHead_1arom_42",
    Ie = "_recipeTitle_1arom_51",
    we = "_textInput_1arom_65",
    Te = "_editableItem_1arom_80",
    be = "_tools_1arom_83",
    xe = "_skinny_1arom_90",
    Ne = "_dash_1arom_93",
    Ce = "_collapsed_1arom_104",
    ke = "_expandButton_1arom_120",
    De = "_settingsModal_1arom_124",
    Se = "_disabled_1arom_137",
    Be = "_divider_1arom_143",
    He = "_leftHr_1arom_147",
    Me = "_rightAlign_1arom_153",
    Ae = "_imageDropZone_1arom_159",
    Re = "_recipeImage_1arom_173",
    r = {
        recipe: ge,
        recipeInfo: he,
        metaTop: fe,
        time: ye,
        metaBottom: _e,
        sectionHead: ve,
        recipeTitle: Ie,
        textInput: we,
        editableItem: Te,
        tools: be,
        skinny: xe,
        dash: Ne,
        collapsed: Ce,
        expandButton: ke,
        settingsModal: De,
        disabled: Se,
        divider: Be,
        leftHr: He,
        rightAlign: Me,
        imageDropZone: Ae,
        recipeImage: Re
    },
    We = ({
        node: t,
        staticData: l,
        editable: s = !0
    }) => {
        var O, P, E, L, J, U, z, Z;
        const u = (O = t == null ? void 0 : t.attrs) == null ? void 0 : O.id,
            [o, a] = v(l || null),
            [i, c] = v(o == null ? void 0 : o.name),
            [n, d] = v(o == null ? void 0 : o.metadata),
            [I, D] = v(o == null ? void 0 : o.ingredients),
            [x, M] = v(o == null ? void 0 : o.steps),
            [A, Y] = v(null),
            [R, ee] = v(null),
            [f, j] = v(o == null ? void 0 : o.settings),
            [ne, F] = v(!1),
            [k, $] = v(o == null ? void 0 : o.image_url);
        return B(() => {
            (() => b(void 0, null, function*() {
                if (!u) return;
                const m = yield G(`/api/v1/recipe/${u}`);
                a(m.recipe), c(m.recipe.name), d(m.recipe.metadata), D(m.recipe.ingredients), M(m.recipe.steps), j(m.recipe.settings), ee(m.postInfo), $(m.recipe.image_url)
            }))()
        }, [u]), B(() => {
            const p = () => b(void 0, null, function*() {
                const g = {};
                i !== (o == null ? void 0 : o.name) && (g.name = i), n !== (o == null ? void 0 : o.metadata) && (g.metadata = n), I !== (o == null ? void 0 : o.ingredients) && (g.ingredients = I), x !== (o == null ? void 0 : o.steps) && (g.steps = x), f !== (o == null ? void 0 : o.settings) && (g.settings = f), k !== (o == null ? void 0 : o.image_url) && (g.image_url = k), Object.keys(g).length && (yield G(`/api/v1/recipe/${u}`, {
                    method: "POST",
                    json: g
                }))
            });

            function m() {
                return b(this, null, function*() {
                    A && clearTimeout(A), Y(setTimeout(() => {
                        p()
                    }, 1e3))
                })
            }
            m()
        }, [i, n, I, x, u, f, k]), e(S, null, o && R ? pe(o, R) : null, e("div", {
            className: r.recipe
        }, s ? e(Pe, {
            image: k,
            setImage: $
        }) : e("img", {
            src: k,
            className: r.recipeImage
        }), e("textarea", {
            placeholder: "Title...",
            value: i,
            onChange: p => b(void 0, null, function*() {
                var m;
                c((m = p.currentTarget) == null ? void 0 : m.value)
            }),
            className: r.recipeTitle,
            disabled: !s
        }), e("div", {
            className: r.recipeInfo
        }, ((n == null ? void 0 : n.tools) || s) && e(h, {
            alignItems: "center",
            gap: 8,
            style: {
                marginBottom: 32
            }
        }, e("div", {
            className: r.tools
        }, "Tools:"), e("textarea", {
            className: r.textInput,
            placeholder: "A stand mixer, rolling pin, a large working surface",
            value: n == null ? void 0 : n.tools,
            onChange: p => {
                var m;
                d(_(y({}, n), {
                    tools: (m = p.currentTarget) == null ? void 0 : m.value
                }))
            },
            disabled: !s
        })), e("hr", {
            className: r.divider
        })), e(h, {
            gap: 8,
            justifyContent: "space-between",
            padding: 16,
            alignItems: "end",
            style: {
                flexWrap: "wrap"
            }
        }, e(h, {
            gap: 8,
            alignItems: "center"
        }, (f == null ? void 0 : f.showTime) && e("div", {
            className: r.metaItem
        }, e("div", {
            className: r.metaTop
        }, "Time: "), e(h, {
            alignItems: "center",
            className: r.time
        }, s ? e(S, null, e("input", {
            className: N(r.metaBottom, r.textInput, r.skinny),
            value: (P = n == null ? void 0 : n.time) == null ? void 0 : P.number,
            placeholder: "1",
            onChange: p => {
                var g, w;
                const m = Math.max(1, Number((g = p.currentTarget) == null ? void 0 : g.value));
                d(_(y({}, n), {
                    time: {
                        number: m,
                        unit: (w = n == null ? void 0 : n.time) == null ? void 0 : w.unit
                    }
                }))
            },
            type: "number",
            disabled: !s
        }), e(V, {
            value: ((E = n == null ? void 0 : n.time) == null ? void 0 : E.unit) || "hour",
            onChange: p => {
                var m;
                return d(_(y({}, n), {
                    time: {
                        number: (m = n == null ? void 0 : n.time) == null ? void 0 : m.number,
                        unit: p
                    }
                }))
            },
            disabled: !s
        }, e("option", {
            value: "minute"
        }, "Minute(s)"), e("option", {
            value: "hour"
        }, "Hour(s)"), e("option", {
            value: "day"
        }, "Day(s)")), " ") : e(T.B3, null, `${(L=n==null?void 0:n.time)==null?void 0:L.number} ${(J=n==null?void 0:n.time)==null?void 0:J.unit}(s)`))), (f == null ? void 0 : f.showServings) && e("div", {
            className: r.metaItem
        }, e("div", {
            className: r.metaTop
        }, "Serves:"), e("div", {
            className: N(r.metaBottom)
        }, e(h, {
            gap: 8,
            textAlign: "center",
            alignItems: "center"
        }, s ? e("input", {
            className: N(r.metaBottom, r.textInput, r.skinny),
            value: (U = n == null ? void 0 : n.serves) == null ? void 0 : U.small,
            placeholder: "4",
            type: "number",
            onChange: p => {
                var g, w;
                const m = Math.max(1, Number((g = p.currentTarget) == null ? void 0 : g.value));
                d(_(y({}, n), {
                    serves: {
                        large: (w = n == null ? void 0 : n.serves) == null ? void 0 : w.large,
                        small: m
                    }
                }))
            },
            disabled: !s
        }) : e(T.B3, null, (z = n == null ? void 0 : n.serves) == null ? void 0 : z.small), e("div", {
            className: r.dash
        }, "-"), e("input", {
            className: N(r.metaBottom, r.textInput, r.skinny),
            value: (Z = n == null ? void 0 : n.serves) == null ? void 0 : Z.large,
            placeholder: "8",
            type: "number",
            onChange: p => {
                var g, w;
                const m = Math.max(1, Number((g = p.currentTarget) == null ? void 0 : g.value));
                d(_(y({}, n), {
                    serves: {
                        small: (w = n == null ? void 0 : n.serves) == null ? void 0 : w.small,
                        large: m
                    }
                }))
            },
            disabled: !s
        })))), (f == null ? void 0 : f.showDifficulty) && e("div", {
            className: r.metaItem
        }, e("div", {
            className: r.metaTop
        }, " Difficulty:"), e("div", {
            className: r.time
        }, e(h, {
            alignItems: "center",
            className: r.time
        }, s ? e(V, {
            value: (n == null ? void 0 : n.difficulty) || "Easy",
            onChange: p => d(_(y({}, n), {
                difficulty: p
            })),
            disabled: !s
        }, e("option", {
            value: "Easy"
        }, "Easy"), e("option", {
            value: "Medium"
        }, "Medium"), e("option", {
            value: "Advanded"
        }, "Advanced")) : e(T.B3, null, n == null ? void 0 : n.difficulty))))), e(h, {
            gap: 8,
            alignItems: "center"
        }, e(C, {
            priority: "secondary"
        }, "Download"), s && e(C, {
            priority: "secondary",
            onClick: () => {
                F(!0)
            }
        }, e(me, {
            height: 12
        })))), e("hr", {
            className: r.divider
        }), I && x && e(Fe, {
            ingredients: s ? I : I.filter(p => p),
            steps: s ? x : x.filter(p => p),
            setIngredients: D,
            setSteps: M,
            editable: s,
            isStatic: !!l
        })), e(je, {
            isOpen: ne,
            setIsOpen: F,
            settings: f,
            setSettings: j,
            metadata: n,
            setMetadata: d
        }))
    },
    je = ({
        isOpen: t,
        setIsOpen: l,
        settings: s,
        setSettings: u,
        metadata: o,
        setMetadata: a
    }) => e(ue, {
        isOpen: t,
        onClose: () => {
            l(!1)
        }
    }, e("div", {
        className: r.settingsModal
    }, e(T.H2, null, "Settings"), e(H, {
        style: {
            marginTop: 24
        }
    }, e("hr", {
        className: r.divider
    }), e(H, {
        gap: 24,
        style: {
            marginTop: 12,
            marginBottom: 12
        }
    }, e(h, {
        gap: 4
    }, e("label", {
        htmlFor: "keywords"
    }, "Keywords: "), e("input", {
        type: "text",
        id: "keywords",
        name: "keywords",
        value: o == null ? void 0 : o.keywords,
        onChange: i => {
            var c;
            a(_(y({}, o), {
                keywords: (c = i.currentTarget) == null ? void 0 : c.value
            }))
        },
        placeholder: "healthy, gluten-free"
    })), e(h, {
        gap: 4
    }, e("label", {
        htmlFor: "keywords"
    }, "Cuisine: "), e("input", {
        type: "text",
        id: "cuisine",
        name: "cuisine",
        value: o == null ? void 0 : o.cuisine,
        placeholder: "New-American",
        onChange: i => {
            var c;
            a(_(y({}, o), {
                cuisine: (c = i.currentTarget) == null ? void 0 : c.value
            }))
        }
    })), e(h, {
        gap: 4
    }, e("label", {
        htmlFor: "category"
    }, "Category: "), e("input", {
        type: "text",
        id: "category",
        name: "category",
        placeholder: "Main courses",
        value: o == null ? void 0 : o.category,
        onChange: i => {
            var c;
            a(_(y({}, o), {
                category: (c = i.currentTarget) == null ? void 0 : c.value
            }))
        }
    })))), e(h, {
        gap: 8,
        alignItems: "center"
    }, e("input", {
        type: "checkbox",
        id: "showTime",
        name: "showTime",
        checked: s == null ? void 0 : s.showTime,
        onChange: () => {
            u(_(y({}, s), {
                showTime: !(s != null && s.showTime)
            }))
        }
    }), e("label", {
        for: "showTime"
    }, "Show Time")), e(h, {
        gap: 8,
        alignItems: "center"
    }, e("input", {
        type: "checkbox",
        id: "showServings",
        name: "showServings",
        checked: s == null ? void 0 : s.showServings,
        onChange: () => {
            u(_(y({}, s), {
                showServings: !(s != null && s.showServings)
            }))
        }
    }), e("label", {
        for: "showServings"
    }, "Show Servings")), e(h, {
        gap: 8,
        alignItems: "center"
    }, e("input", {
        type: "checkbox",
        id: "showDifficulty",
        name: "showDifficulty",
        checked: s == null ? void 0 : s.showDifficulty,
        onChange: () => {
            u(_(y({}, s), {
                showDifficulty: !(s != null && s.showDifficulty)
            }))
        }
    }), e("label", {
        for: "showDifficulty"
    }, "Show Difficulty")), e("div", {
        className: r.rightAlign
    }, e(C, {
        onClick: () => l(!1)
    }, "Done")))),
    Fe = ({
        ingredients: t,
        steps: l,
        setIngredients: s,
        setSteps: u,
        editable: o,
        isStatic: a
    }) => {
        const [i, c] = v(!o);
        return e(S, null, e(h, {
            justifyContent: "space-between",
            padding: W() ? 0 : 16,
            className: N(r.mainContent, {
                [r.collapsed]: i && !a
            }),
            style: {
                flexDirection: W() || a ? "column" : "row"
            }
        }, e("div", {
            className: r.sectionHead
        }, e(T.H3, null, "Ingredients"), e("hr", {
            className: r.leftHr
        }), e(X, {
            items: t,
            setItems: s,
            placeholder: "Add an ingredient...",
            className: r.ingredientList,
            disabled: !o
        })), e("div", {
            className: r.sectionHead
        }, e(T.H3, null, "Directions"), e("hr", {
            className: r.leftHr
        }), e(X, {
            items: l,
            setItems: u,
            placeholder: "Add a step...",
            className: r.stepList,
            disabled: !o,
            prefix: "Step"
        }))), i && !a && e(C, {
            onClick: () => {
                c(!1)
            },
            priority: "secondary",
            className: r.expandButton
        }, "Expand"))
    },
    X = ae(({
        items: t,
        setItems: l,
        placeholder: s,
        className: u,
        disabled: o,
        prefix: a
    }) => e(H, {
        gap: 8,
        className: u
    }, (t != null && t.length ? t : [""]).map((i, c) => e(S, null, a && e(T.H4, null, a, " ", c + 1), o ? e(T.B3, null, i) : e($e, {
        key: c,
        item: i,
        setItem: n => {
            const d = [...t];
            d[c] = n, l(d)
        },
        removeItem: () => {
            const n = [...t];
            n.splice(c, 1), l(n)
        },
        addItem: () => {
            const n = [...t];
            n.splice(c + 1, 0, ""), l(n)
        },
        disabled: o,
        placeholder: s
    }))))),
    $e = ({
        item: t,
        setItem: l,
        removeItem: s,
        disabled: u,
        placeholder: o,
        addItem: a
    }) => e(h, {
        className: r.editableItem,
        gap: 4
    }, e(Oe, {
        value: t,
        onChange: i => {
            var c;
            l((c = i.currentTarget) == null ? void 0 : c.value)
        },
        disabled: u,
        placeholder: o,
        className: N({
            [r.disabled]: u
        })
    }), !u && e(C, {
        onClick: a,
        disabled: u,
        size: "sm",
        priority: "secondary",
        style: {
            height: "20px"
        }
    }, "+"), !u && e(C, {
        onClick: s,
        disabled: u,
        size: "sm",
        priority: "secondary",
        style: {
            height: "20px"
        }
    }, "-")),
    Oe = ({
        value: t,
        onChange: l,
        disabled: s,
        placeholder: u,
        className: o
    }) => {
        const a = ie(null);
        return B(() => {
            const i = a.current;
            i && (i.style.height = "auto", i.style.height = `${i.scrollHeight}px`)
        }, [t]), e("textarea", {
            value: t,
            className: o,
            onChange: l,
            disabled: s,
            placeholder: u,
            ref: a
        })
    };

function Pe({
    image: t,
    setImage: l
}) {
    const s = a => {
            a.preventDefault()
        },
        u = a => b(this, null, function*() {
            if (a.preventDefault(), a.dataTransfer.files && a.dataTransfer.files[0]) {
                const i = a.dataTransfer.files[0];
                l(yield Q(i))
            }
        }),
        o = a => b(this, null, function*() {
            if (a.target.files && a.target.files[0]) {
                const i = a.target.files[0];
                l(yield Q(i))
            }
        });
    return e("div", {
        className: "image-uploader",
        onDragOver: s,
        onDrop: u,
        style: {
            width: "auto",
            height: "525px",
            border: "2px dashed #ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${t})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }
    }, t ? e("div", {
        style: {
            position: "absolute",
            cursor: "pointer",
            backgroundColor: "rgba(255, 255, 255, 0.3)"
        },
        onClick: () => l("")
    }, "Remove Image") : null, t ? null : e("label", {
        style: {
            cursor: "pointer"
        }
    }, "Drag an image or click to select", e("input", {
        type: "file",
        accept: "image/*",
        style: {
            display: "none"
        },
        onChange: o
    })))
}
export {
    We as R
};
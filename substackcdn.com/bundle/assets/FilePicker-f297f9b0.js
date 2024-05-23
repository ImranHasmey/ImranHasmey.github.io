var x = (a, o, r) => new Promise((g, u) => {
    var m = i => {
            try {
                n(r.next(i))
            } catch (c) {
                u(c)
            }
        },
        p = i => {
            try {
                n(r.throw(i))
            } catch (c) {
                u(c)
            }
        },
        n = i => i.done ? g(i.value) : Promise.resolve(i.value).then(m, p);
    n((r = r.apply(a, o)).next())
});
import {
    h as F,
    o as M,
    y as s,
    ao as O,
    i as U
} from "./tracking-376cff7a.js";
import {
    u as R,
    c as j,
    T as h
} from "./FlexBox-1a755411.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    P
} from "./plus-3216546d.js";
import {
    c as S
} from "./x-fc38e969.js";
(function() {
    try {
        var a = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            o = new Error().stack;
        o && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[o] = "765a1b1c-9a59-44c5-88de-46600b4f07f1", a._sentryDebugIdIdentifier = "sentry-dbid-765a1b1c-9a59-44c5-88de-46600b4f07f1")
    } catch (r) {}
})();
/**
 * @license lucide-preact v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T = S("UploadCloud", [
        ["path", {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
            key: "1pljnt"
        }],
        ["path", {
            d: "M12 12v9",
            key: "192myk"
        }],
        ["path", {
            d: "m16 16-4-4-4 4",
            key: "119tzi"
        }]
    ]),
    X = "_dragArea_1xm1c_1",
    $ = "_dragActive_1xm1c_17",
    q = "_text_1xm1c_22",
    G = "_icon_1xm1c_30",
    J = "_browse_1xm1c_37",
    K = "_file_1xm1c_42",
    d = {
        dragArea: X,
        dragActive: $,
        text: q,
        icon: G,
        browse: J,
        file: K
    },
    C = ({
        onFileSelected: a,
        dropCTA: o,
        pickCTA: r,
        pickCTAHandler: g,
        acceptableTypes: u,
        loading: m,
        className: p,
        multiple: n = !1,
        addMode: i = !1,
        onDrop: c,
        onPick: _,
        info: A
    }) => {
        const [y, b] = F(!1), v = M(null), {
            iString: l
        } = R();
        !r && !g && (r = s("a", {
            className: d.browse,
            href: "javascript:void(0)"
        }, l("browse"))), o || (o = l("Drop file here"));
        const D = e => {
                e.preventDefault(), b(!0)
            },
            k = e => {
                e.preventDefault(), b(!1)
            },
            B = e => x(void 0, null, function*() {
                var I, N, E, z;
                e.preventDefault(), b(!1);
                let f, t;
                if (((N = (I = e.dataTransfer) == null ? void 0 : I.items) == null ? void 0 : N.length) > 0) {
                    const L = Array.from(e.dataTransfer.items);
                    for (const w of L)
                        if (w.kind !== "file") {
                            alert(l("Please only drag files!"));
                            return
                        }
                    f = e.dataTransfer.items[0].getAsFile(), t = L.map(w => w.getAsFile())
                } else if (((z = (E = e.dataTransfer) == null ? void 0 : E.files) == null ? void 0 : z.length) > 0) f = e.dataTransfer.files[0], t = e.dataTransfer.files;
                else {
                    alert(l("Something went wrong!"));
                    return
                }
                n ? yield a(t): yield a(f), c == null || c(n ? t : f)
            });
        return s(U, null, s("div", {
            className: j(d.dragArea, p, {
                [d.dragActive]: y,
                "test-drag-active": y
            }),
            onDragEnter: D,
            onDragOver: D,
            onDragLeave: k,
            onDrop: B,
            "aria-label": l("File Picker"),
            onClick: () => {
                var e;
                g || (e = v.current) == null || e.click()
            }
        }, i ? s(P, {
            size: 20,
            className: d.icon
        }) : s(T, {
            size: 24,
            className: d.icon
        }), !O && s("p", {
            className: d.text
        }, m ? l("Loading...") : y ? l("Release to upload") : i ? l("Add another image") : s(U, null, o, " ", l("or"), " ")), s(h.H4, {
            color: "pub-primary-text"
        }, "Select file to upload"), s(h.B5, {
            color: "pub-secondary-text"
        }, " Or drag and drop file"), m ? null : r || (g ? g(() => {
            var e;
            (e = v.current) == null || e.click()
        }) : null), A ? s(h.B5, {
            color: "pub-secondary-text",
            paddingTop: 32,
            paddingX: 32
        }, A) : null), s("input", {
            className: j(d.file, "file-picker-input"),
            ref: v,
            type: "file",
            name: "file",
            accept: u,
            multiple: n,
            onInput: e => x(void 0, null, function*() {
                const f = e.target,
                    t = f.files;
                t && t[0] && (n ? yield a(t): yield a(t[0]), _ == null || _(n ? t : t[0])), f.value = ""
            })
        }))
    };
export {
    C as F, T as U
};
import {
    fd as u,
    i1 as f,
    dz as c
} from "./tracking-376cff7a.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import {
    l as m
} from "./FlexBox-1a755411.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            n = new Error().stack;
        n && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[n] = "820c0e82-7096-4962-a823-82ecbf0546eb", t._sentryDebugIdIdentifier = "sentry-dbid-820c0e82-7096-4962-a823-82ecbf0546eb")
    } catch (o) {}
})();
const h = t => {
    const n = Math.floor(t / 60),
        o = Math.floor(t % 60);
    return `${n}:${o.toString().padStart(2,"0")}`
};

function _(t, n = !1) {
    if (t < 0) return "0:00";
    const o = Math.floor(t),
        e = Math.floor(o / 60),
        s = o % 60;
    if (n) {
        const r = Math.round((t - o) * 10);
        return `${e}:${String(s).padStart(2,"0")}.${r}`
    }
    return `${e}:${String(s).padStart(2,"0")}`
}
const w = t => /^[0-9.:]*$/.test(t),
    $ = t => /^(?:(?:[0-9]{1,3}):)?(?:[0-5][0-9]|[0-9]{1,2})(?:\.[0-9]{1,3})?$/.test(t),
    b = t => {
        const [n = "", o = ""] = t.split("."), e = n.split(":").reverse().map(d => parseInt(d)), s = e[0] || 0, r = e[1] || 0;
        return (e[2] || 0) * 3600 + r * 60 + s + parseInt(o.padEnd(3, "0")) / 1e3
    },
    l = function(t) {
        const n = t.trim();
        return f(n) ? n : `${n}.`
    },
    y = function(t, n = 3) {
        if (!(t != null && t.length) || !t[0].owner) return null;
        const o = t[0].name;
        if (t.length === 1) return {
            owner: o,
            others: null
        };
        let e = t.slice(1);
        if (e.length > n && (e = e.filter(s => s.role === "admin")), e.length && e.length <= n) {
            const s = e.map(r => r.name);
            return {
                owner: o,
                others: u(s).toString()
            }
        }
        return {
            owner: o,
            others: null
        }
    },
    P = function(t, n, o, e, s) {
        const r = t ? l(t) : "";
        let a;
        n && !n.others ? e.toLowerCase().includes(n.owner.toLowerCase()) ? a = "" : a = ` by ${n.owner},` : a = "";
        let i;
        return o ? i = ` a Substack publication with ${o}.` : s ? i = ` a Substack publication. ${s}.` : i = " a Substack publication.", l(`${r} Click to read ${e},${a}${i}`)
    };

function I(t, n) {
    if (t) {
        if (t.author_id === n) return !0;
        for (const o of t.contributors)
            if (o.user_id === n) return !0
    }
    return !1
}
const M = t => {
    const n = t.podcast_enabled ? {
            title: t.podcast_title,
            subtitle: t.podcast_description,
            podcast_art_url: t.podcast_art_url,
            url: c({
                pub: t,
                section: null
            }),
            section_id: null
        } : null,
        o = t.sections.filter(e => e.is_podcast).map(e => {
            var s, r;
            return {
                title: e.name,
                subtitle: (s = e.podcastSettings) == null ? void 0 : s.podcast_description,
                podcast_art_url: (r = e.podcastSettings) == null ? void 0 : r.podcast_art_url,
                url: c({
                    pub: t,
                    section: e
                }),
                section_id: e.id
            }
        });
    return m([n, ...o])
};
export {
    w as a, h as b, I as c, y as d, _ as f, M as g, $ as i, P as m, b as t
};
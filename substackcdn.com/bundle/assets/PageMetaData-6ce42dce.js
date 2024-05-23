import {
    a$ as f,
    y as n,
    i as c
} from "./tracking-376cff7a.js";
import {
    j as m
} from "./jsesc-a42a28f2.js";
import {
    M as _
} from "./Metadata-be2b4cf2.js";
import {
    d
} from "./post_metadata-a1624a3e.js";
import {
    b as y
} from "./structuredData-e7abba32.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
import "./publication-1bbad178.js";
import "./FlexBox-1a755411.js";
import "./decodeHtmlEntitiesFast-d19e2d0c.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e88943d1-0f1b-420e-a915-ff6f38e65313", e._sentryDebugIdIdentifier = "sentry-dbid-e88943d1-0f1b-420e-a915-ff6f38e65313")
    } catch (s) {}
})();
const M = ({
    pub: e,
    section: t,
    isPodcast: s,
    isHomepage: l
}) => {
    const {
        getConfigFor: o
    } = f(), a = o("publication_author_display_override") ? String(o("publication_author_display_override")) : void 0;
    let i, r;
    if (s && e.podcast_title)({
        title: i
    } = d(e, {
        primaryTitleOverride: e.podcast_title,
        primaryAuthorOverride: a
    })), r = e.podcast_description;
    else if (t)({
        title: i,
        description: r
    } = d(e, {
        primaryTitleOverride: `${t.name} | ${e.name}`,
        primaryAuthorOverride: a,
        primaryDescriptionOverride: t.description
    }));
    else if (l) {
        const p = o("publication_homepage_title_display_override") ? String(o("publication_homepage_title_display_override")) : void 0;
        ({
            title: i,
            description: r
        } = d(e, {
            primaryAuthorOverride: a,
            completeTitleOverride: p
        }))
    } else({
        title: i,
        description: r
    } = d(e, {
        primaryAuthorOverride: a
    }));
    return n(c, null, n("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: m(y(e), {
                json: !0,
                isScriptContext: !0
            })
        }
    }), n(_, {
        title: i,
        description: r
    }))
};
export {
    M as PageMetaData
};
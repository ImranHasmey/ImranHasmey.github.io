import {
    gr as o
} from "./tracking-376cff7a.js";
import {
    C as t,
    a as i,
    P as r,
    b as n
} from "./entry-a965ffeb.js";
import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var s = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            e = new Error().stack;
        e && (s._sentryDebugIds = s._sentryDebugIds || {}, s._sentryDebugIds[e] = "37248b62-d20f-417f-bd10-1e294ca04252", s._sentryDebugIdIdentifier = "sentry-dbid-37248b62-d20f-417f-bd10-1e294ca04252")
    } catch (d) {}
})();
const A = s => {
        const {
            iString: e
        } = o.i(s || "en");
        return {
            Necessary: e("These cookies are essential for you to browse the website and use its features."),
            Performance: e("These cookies collect information about how you use a website, like which pages you visited and which links you clicked on."),
            Functionality: e("These cookies allow us to remember choices you have made in the past, and do things like auto-login")
        }
    },
    a = s => {
        const {
            iString: e
        } = o.i(s || "en");
        return [{
            name: "_ga family",
            id: r.GA_TRACKING,
            type: i.PERFORMANCE,
            description: e("3rd party analytics tracking."),
            owner: t.PUBLISHER
        }, {
            name: "Google Tag Manager",
            id: r.GA_TAG_MANAGER,
            type: i.PERFORMANCE,
            description: e("Used for Google tag management and 3rd party analytics tracking."),
            owner: t.PUBLISHER
        }, {
            name: "Facebook Pixel",
            id: r.FB_PIXEL,
            type: i.PERFORMANCE,
            description: e("Used for facebook ad campaign 3rd party analytics."),
            owner: t.PUBLISHER
        }, {
            name: "Twitter Pixel",
            id: r.TWITTER_PIXEL,
            type: i.PERFORMANCE,
            description: e("Used for X (formerly known as Twitter) ad campaign 3rd party analytics."),
            owner: t.PUBLISHER
        }, {
            name: "Parse.ly Pixel",
            id: r.PARSELY_PIXEL,
            type: i.PERFORMANCE,
            description: e("Used for parse.ly 3rd party analytics."),
            owner: t.PUBLISHER
        }, {
            name: "intro_popup_last_hidden_at",
            id: n.INTRO_POPUP_LAST_HIDDEN_AT,
            type: i.FUNCTIONALITY,
            description: e("Prevents showing introductory information the user has already seen."),
            owner: t.SUBSTACK
        }, {
            name: "muxData",
            id: n.MUX_DATA,
            type: i.FUNCTIONALITY,
            description: e("Used for anonymous video metric collection and aggregation."),
            owner: t.SUBSTACK
        }, {
            name: "like_upsell_last_shown_at",
            id: n.LIKE_UPSELL_LAST_SHOWN_AT,
            type: i.FUNCTIONALITY,
            description: e("Prevents users from repeatedly being shown features."),
            owner: t.SUBSTACK
        }, {
            name: "visit_id",
            id: n.VISIT_ID,
            type: i.PERFORMANCE,
            description: e("First party analytics tracking."),
            owner: t.SUBSTACK
        }, {
            name: "ajs_anonymous_id",
            id: n.ANONYMOUS_ID,
            type: i.PERFORMANCE,
            description: e("First party analytics tracking."),
            owner: t.SUBSTACK
        }, {
            name: "ab_testing_id",
            id: n.AB_TESTING_ID,
            type: i.PERFORMANCE,
            description: e("First party analytics tracking."),
            owner: t.SUBSTACK
        }, {
            name: "ab_experiment_sampled",
            id: n.AB_EXPERIMENT_SAMPLED,
            type: i.PERFORMANCE,
            description: e("First party analytics tracking."),
            owner: t.SUBSTACK
        }, {
            name: "_ga family",
            id: n.GA_TRACKING,
            type: i.PERFORMANCE,
            description: e("3rd party analytics tracking."),
            owner: t.SUBSTACK
        }, {
            name: "_dd_s",
            id: n.DATADOG_S,
            type: i.PERFORMANCE,
            description: e("First party cookie used to identify and diagnose technical problems on the site."),
            owner: t.SUBSTACK
        }, {
            name: "fs_uid",
            id: n.FULLSTORY_UID,
            type: i.PERFORMANCE,
            description: e("Used to track user actions across the site for debugging purposes."),
            owner: t.SUBSTACK
        }, {
            name: "__zlcmid",
            id: n.ZENDESK_ID,
            type: i.PERFORMANCE,
            description: e("Stores visitor’s machine-id for authentication with Zendesk chat widget."),
            owner: t.SUBSTACK
        }, {
            name: "substack.sid / connect.sid",
            id: n.SESSION_SID,
            type: i.NECESSARY,
            description: e("Session identifier."),
            owner: t.SUBSTACK
        }, {
            name: "substack.lli",
            id: n.LIKELY_LOGGED_IN,
            type: i.NECESSARY,
            description: e("Communicates login state across first party domains"),
            owner: t.SUBSTACK
        }, {
            name: "disable_html_pixels",
            id: n.DISABLE_HTML_PIXELS,
            type: i.NECESSARY,
            description: e("Ensures a consistent user experience across network requests."),
            owner: t.SUBSTACK
        }, {
            name: "experiment_",
            id: n.DISABLE_EXPERIMENTS,
            type: i.NECESSARY,
            description: e("Ensures a consistent user experience across network requests."),
            owner: t.SUBSTACK
        }, {
            name: "hideCookieBanner",
            id: n.HIDE_COOKIE_BANNER,
            type: i.NECESSARY,
            description: e("Ensures a consistent user experience across network requests."),
            owner: t.SUBSTACK
        }, {
            name: "cf_clearance",
            id: n.CF_CLEARENCE,
            type: i.NECESSARY,
            description: e("Used to grant access to our servers from our Content Delivery Network."),
            owner: t.SUBSTACK
        }, {
            name: "__cf_bm",
            id: n.CF_BM,
            type: i.NECESSARY,
            description: e("Used to block bot access to the site"),
            owner: t.SUBSTACK
        }, {
            name: "AWSALBTG / AWSALBTGCORS",
            id: n.AWSALB,
            type: i.NECESSARY,
            description: e("Ensures a consistent user experience across network requests."),
            owner: t.SUBSTACK
        }, {
            name: "cookie_storage_key",
            id: n.AWSALB,
            type: i.NECESSARY,
            description: e("Allows us to store your cookie preferences."),
            owner: t.SUBSTACK
        }]
    },
    p = a().filter(s => s.owner === t.SUBSTACK && s.type !== i.NECESSARY).map(s => s.id),
    _ = a().filter(s => s.owner === t.PUBLISHER && s.type !== i.NECESSARY).map(s => s.id),
    y = {
        DO_NOT_ASK: "",
        EVERYONE: "everyone"
    };
export {
    a as A, A as C, y as P, p as a, _ as b
};
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    2962: function(e, t, o) {
        "use strict";
        o.d(t, {
            PB: function() {
                return d
            },
            lX: function() {
                return s
            }
        });
        var n = o(9008)
          , r = o.n(n)
          , a = o(7294);
        function i() {
            return i = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var n in o)
                        Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
                }
                return e
            }
            ,
            i.apply(this, arguments)
        }
        function p(e, t) {
            e.prototype = Object.create(t.prototype),
            e.prototype.constructor = e,
            l(e, t)
        }
        function l(e, t) {
            return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            l(e, t)
        }
        var c = {
            templateTitle: "",
            noindex: !1,
            nofollow: !1,
            defaultOpenGraphImageWidth: 0,
            defaultOpenGraphImageHeight: 0,
            defaultOpenGraphVideoWidth: 0,
            defaultOpenGraphVideoHeight: 0
        }
          , h = function(e, t, o) {
            void 0 === t && (t = []);
            var n = void 0 === o ? {} : o
              , r = n.defaultWidth
              , i = n.defaultHeight;
            return t.reduce((function(t, o, n) {
                return t.push(a.createElement("meta", {
                    key: "og:" + e + ":0" + n,
                    property: "og:" + e,
                    content: o.url
                })),
                o.alt && t.push(a.createElement("meta", {
                    key: "og:" + e + ":alt0" + n,
                    property: "og:" + e + ":alt",
                    content: o.alt
                })),
                o.secureUrl && t.push(a.createElement("meta", {
                    key: "og:" + e + ":secure_url0" + n,
                    property: "og:" + e + ":secure_url",
                    content: o.secureUrl.toString()
                })),
                o.type && t.push(a.createElement("meta", {
                    key: "og:" + e + ":type0" + n,
                    property: "og:" + e + ":type",
                    content: o.type.toString()
                })),
                o.width ? t.push(a.createElement("meta", {
                    key: "og:" + e + ":width0" + n,
                    property: "og:" + e + ":width",
                    content: o.width.toString()
                })) : r && t.push(a.createElement("meta", {
                    key: "og:" + e + ":width0" + n,
                    property: "og:" + e + ":width",
                    content: r.toString()
                })),
                o.height ? t.push(a.createElement("meta", {
                    key: "og:" + e + ":height" + n,
                    property: "og:" + e + ":height",
                    content: o.height.toString()
                })) : i && t.push(a.createElement("meta", {
                    key: "og:" + e + ":height" + n,
                    property: "og:" + e + ":height",
                    content: i.toString()
                })),
                t
            }
            ), [])
        }
          , u = function(e) {
            var t, o, n, r = [];
            e.titleTemplate && (c.templateTitle = e.titleTemplate);
            var p = "";
            e.title ? (p = e.title,
            c.templateTitle && (p = c.templateTitle.replace(/%s/g, (function() {
                return p
            }
            )))) : e.defaultTitle && (p = e.defaultTitle),
            p && r.push(a.createElement("title", {
                key: "title"
            }, p));
            var l, u, s = e.noindex || c.noindex || e.dangerouslySetAllPagesToNoIndex, d = e.nofollow || c.nofollow || e.dangerouslySetAllPagesToNoFollow, m = "";
            if (e.robotsProps) {
                var f = e.robotsProps
                  , g = f.nosnippet
                  , y = f.maxSnippet
                  , v = f.maxImagePreview
                  , G = f.maxVideoPreview
                  , k = f.noarchive
                  , b = f.noimageindex
                  , E = f.notranslate
                  , w = f.unavailableAfter;
                m = (g ? ",nosnippet" : "") + (y ? ",max-snippet:" + y : "") + (v ? ",max-image-preview:" + v : "") + (k ? ",noarchive" : "") + (w ? ",unavailable_after:" + w : "") + (b ? ",noimageindex" : "") + (G ? ",max-video-preview:" + G : "") + (E ? ",notranslate" : "")
            }
            (s || d ? (e.dangerouslySetAllPagesToNoIndex && (c.noindex = !0),
            e.dangerouslySetAllPagesToNoFollow && (c.nofollow = !0),
            r.push(a.createElement("meta", {
                key: "robots",
                name: "robots",
                content: (s ? "noindex" : "index") + "," + (d ? "nofollow" : "follow") + m
            }))) : r.push(a.createElement("meta", {
                key: "robots",
                name: "robots",
                content: "index,follow" + m
            })),
            e.description && r.push(a.createElement("meta", {
                key: "description",
                name: "description",
                content: e.description
            })),
            e.mobileAlternate && r.push(a.createElement("link", {
                rel: "alternate",
                key: "mobileAlternate",
                media: e.mobileAlternate.media,
                href: e.mobileAlternate.href
            })),
            e.languageAlternates && e.languageAlternates.length > 0 && e.languageAlternates.forEach((function(e) {
                r.push(a.createElement("link", {
                    rel: "alternate",
                    key: "languageAlternate-" + e.hrefLang,
                    hrefLang: e.hrefLang,
                    href: e.href
                }))
            }
            )),
            e.twitter && (e.twitter.cardType && r.push(a.createElement("meta", {
                key: "twitter:card",
                name: "twitter:card",
                content: e.twitter.cardType
            })),
            e.twitter.site && r.push(a.createElement("meta", {
                key: "twitter:site",
                name: "twitter:site",
                content: e.twitter.site
            })),
            e.twitter.handle && r.push(a.createElement("meta", {
                key: "twitter:creator",
                name: "twitter:creator",
                content: e.twitter.handle
            }))),
            e.facebook && e.facebook.appId && r.push(a.createElement("meta", {
                key: "fb:app_id",
                property: "fb:app_id",
                content: e.facebook.appId
            })),
            null != (t = e.openGraph) && t.title || p) && r.push(a.createElement("meta", {
                key: "og:title",
                property: "og:title",
                content: (null == (l = e.openGraph) ? void 0 : l.title) || p
            }));
            (null != (o = e.openGraph) && o.description || e.description) && r.push(a.createElement("meta", {
                key: "og:description",
                property: "og:description",
                content: (null == (u = e.openGraph) ? void 0 : u.description) || e.description
            }));
            if (e.openGraph) {
                if ((e.openGraph.url || e.canonical) && r.push(a.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical
                })),
                e.openGraph.type) {
                    var O = e.openGraph.type.toLowerCase();
                    r.push(a.createElement("meta", {
                        key: "og:type",
                        property: "og:type",
                        content: O
                    })),
                    "profile" === O && e.openGraph.profile ? (e.openGraph.profile.firstName && r.push(a.createElement("meta", {
                        key: "profile:first_name",
                        property: "profile:first_name",
                        content: e.openGraph.profile.firstName
                    })),
                    e.openGraph.profile.lastName && r.push(a.createElement("meta", {
                        key: "profile:last_name",
                        property: "profile:last_name",
                        content: e.openGraph.profile.lastName
                    })),
                    e.openGraph.profile.username && r.push(a.createElement("meta", {
                        key: "profile:username",
                        property: "profile:username",
                        content: e.openGraph.profile.username
                    })),
                    e.openGraph.profile.gender && r.push(a.createElement("meta", {
                        key: "profile:gender",
                        property: "profile:gender",
                        content: e.openGraph.profile.gender
                    }))) : "book" === O && e.openGraph.book ? (e.openGraph.book.authors && e.openGraph.book.authors.length && e.openGraph.book.authors.forEach((function(e, t) {
                        r.push(a.createElement("meta", {
                            key: "book:author:0" + t,
                            property: "book:author",
                            content: e
                        }))
                    }
                    )),
                    e.openGraph.book.isbn && r.push(a.createElement("meta", {
                        key: "book:isbn",
                        property: "book:isbn",
                        content: e.openGraph.book.isbn
                    })),
                    e.openGraph.book.releaseDate && r.push(a.createElement("meta", {
                        key: "book:release_date",
                        property: "book:release_date",
                        content: e.openGraph.book.releaseDate
                    })),
                    e.openGraph.book.tags && e.openGraph.book.tags.length && e.openGraph.book.tags.forEach((function(e, t) {
                        r.push(a.createElement("meta", {
                            key: "book:tag:0" + t,
                            property: "book:tag",
                            content: e
                        }))
                    }
                    ))) : "article" === O && e.openGraph.article ? (e.openGraph.article.publishedTime && r.push(a.createElement("meta", {
                        key: "article:published_time",
                        property: "article:published_time",
                        content: e.openGraph.article.publishedTime
                    })),
                    e.openGraph.article.modifiedTime && r.push(a.createElement("meta", {
                        key: "article:modified_time",
                        property: "article:modified_time",
                        content: e.openGraph.article.modifiedTime
                    })),
                    e.openGraph.article.expirationTime && r.push(a.createElement("meta", {
                        key: "article:expiration_time",
                        property: "article:expiration_time",
                        content: e.openGraph.article.expirationTime
                    })),
                    e.openGraph.article.authors && e.openGraph.article.authors.length && e.openGraph.article.authors.forEach((function(e, t) {
                        r.push(a.createElement("meta", {
                            key: "article:author:0" + t,
                            property: "article:author",
                            content: e
                        }))
                    }
                    )),
                    e.openGraph.article.section && r.push(a.createElement("meta", {
                        key: "article:section",
                        property: "article:section",
                        content: e.openGraph.article.section
                    })),
                    e.openGraph.article.tags && e.openGraph.article.tags.length && e.openGraph.article.tags.forEach((function(e, t) {
                        r.push(a.createElement("meta", {
                            key: "article:tag:0" + t,
                            property: "article:tag",
                            content: e
                        }))
                    }
                    ))) : "video.movie" !== O && "video.episode" !== O && "video.tv_show" !== O && "video.other" !== O || !e.openGraph.video || (e.openGraph.video.actors && e.openGraph.video.actors.length && e.openGraph.video.actors.forEach((function(e, t) {
                        e.profile && r.push(a.createElement("meta", {
                            key: "video:actor:0" + t,
                            property: "video:actor",
                            content: e.profile
                        })),
                        e.role && r.push(a.createElement("meta", {
                            key: "video:actor:role:0" + t,
                            property: "video:actor:role",
                            content: e.role
                        }))
                    }
                    )),
                    e.openGraph.video.directors && e.openGraph.video.directors.length && e.openGraph.video.directors.forEach((function(e, t) {
                        r.push(a.createElement("meta", {
                            key: "video:director:0" + t,
                            property: "video:director",
                            content: e
                        }))
                    }
                    )),
                    e.openGraph.video.writers && e.openGraph.video.writers.length && e.openGraph.video.writers.forEach((function(e, t) {
                        r.push(a.createElement("meta", {
                            key: "video:writer:0" + t,
                            property: "video:writer",
                            content: e
                        }))
                    }
                    )),
                    e.openGraph.video.duration && r.push(a.createElement("meta", {
                        key: "video:duration",
                        property: "video:duration",
                        content: e.openGraph.video.duration.toString()
                    })),
                    e.openGraph.video.releaseDate && r.push(a.createElement("meta", {
                        key: "video:release_date",
                        property: "video:release_date",
                        content: e.openGraph.video.releaseDate
                    })),
                    e.openGraph.video.tags && e.openGraph.video.tags.length && e.openGraph.video.tags.forEach((function(e, t) {
                        r.push(a.createElement("meta", {
                            key: "video:tag:0" + t,
                            property: "video:tag",
                            content: e
                        }))
                    }
                    )),
                    e.openGraph.video.series && r.push(a.createElement("meta", {
                        key: "video:series",
                        property: "video:series",
                        content: e.openGraph.video.series
                    })))
                }
                e.defaultOpenGraphImageWidth && (c.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
                e.defaultOpenGraphImageHeight && (c.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
                e.openGraph.images && e.openGraph.images.length && r.push.apply(r, h("image", e.openGraph.images, {
                    defaultWidth: c.defaultOpenGraphImageWidth,
                    defaultHeight: c.defaultOpenGraphImageHeight
                })),
                e.defaultOpenGraphVideoWidth && (c.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
                e.defaultOpenGraphVideoHeight && (c.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
                e.openGraph.videos && e.openGraph.videos.length && r.push.apply(r, h("video", e.openGraph.videos, {
                    defaultWidth: c.defaultOpenGraphVideoWidth,
                    defaultHeight: c.defaultOpenGraphVideoHeight
                })),
                e.openGraph.audio && r.push.apply(r, h("audio", e.openGraph.audio)),
                e.openGraph.locale && r.push(a.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale
                })),
                (e.openGraph.siteName || e.openGraph.site_name) && r.push(a.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.siteName || e.openGraph.site_name
                }))
            }
            return e.canonical && r.push(a.createElement("link", {
                rel: "canonical",
                href: e.canonical,
                key: "canonical"
            })),
            e.additionalMetaTags && e.additionalMetaTags.length > 0 && e.additionalMetaTags.forEach((function(e) {
                var t, o, n;
                r.push(a.createElement("meta", i({
                    key: "meta:" + (null != (t = null != (o = null != (n = e.keyOverride) ? n : e.name) ? o : e.property) ? t : e.httpEquiv)
                }, e)))
            }
            )),
            null != (n = e.additionalLinkTags) && n.length && e.additionalLinkTags.forEach((function(e) {
                var t;
                r.push(a.createElement("link", i({
                    key: "link" + (null != (t = e.keyOverride) ? t : e.href) + e.rel
                }, e)))
            }
            )),
            r
        }
          , s = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            return p(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.title
                  , o = e.titleTemplate
                  , n = e.defaultTitle
                  , i = e.dangerouslySetAllPagesToNoIndex
                  , p = void 0 !== i && i
                  , l = e.dangerouslySetAllPagesToNoFollow
                  , c = void 0 !== l && l
                  , h = e.description
                  , s = e.canonical
                  , d = e.facebook
                  , m = e.openGraph
                  , f = e.additionalMetaTags
                  , g = e.twitter
                  , y = e.defaultOpenGraphImageWidth
                  , v = e.defaultOpenGraphImageHeight
                  , G = e.defaultOpenGraphVideoWidth
                  , k = e.defaultOpenGraphVideoHeight
                  , b = e.mobileAlternate
                  , E = e.languageAlternates
                  , w = e.additionalLinkTags
                  , O = e.robotsProps;
                return a.createElement(r(), null, u({
                    title: t,
                    titleTemplate: o,
                    defaultTitle: n,
                    dangerouslySetAllPagesToNoIndex: p,
                    dangerouslySetAllPagesToNoFollow: c,
                    description: h,
                    canonical: s,
                    facebook: d,
                    openGraph: m,
                    additionalMetaTags: f,
                    twitter: g,
                    defaultOpenGraphImageWidth: y,
                    defaultOpenGraphImageHeight: v,
                    defaultOpenGraphVideoWidth: G,
                    defaultOpenGraphVideoHeight: k,
                    mobileAlternate: b,
                    languageAlternates: E,
                    additionalLinkTags: w,
                    robotsProps: O
                }))
            }
            ,
            t
        }(a.Component)
          , d = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            return p(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.title
                  , o = e.noindex
                  , n = void 0 !== o && o
                  , i = e.nofollow
                  , p = e.robotsProps
                  , l = e.description
                  , c = e.canonical
                  , h = e.openGraph
                  , s = e.facebook
                  , d = e.twitter
                  , m = e.additionalMetaTags
                  , f = e.titleTemplate
                  , g = e.defaultTitle
                  , y = e.mobileAlternate
                  , v = e.languageAlternates
                  , G = e.additionalLinkTags;
                return a.createElement(r(), null, u({
                    title: t,
                    noindex: n,
                    nofollow: i,
                    robotsProps: p,
                    description: l,
                    canonical: c,
                    facebook: s,
                    openGraph: h,
                    additionalMetaTags: m,
                    twitter: d,
                    titleTemplate: f,
                    defaultTitle: g,
                    mobileAlternate: y,
                    languageAlternates: v,
                    additionalLinkTags: G
                }))
            }
            ,
            t
        }(a.Component)
          , m = Object.freeze({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;"
        });
        new RegExp("[" + Object.keys(m).join("") + "]","g")
    },
    1118: function(e, t, o) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return o(398)
        }
        ])
    },
    398: function(e, t, o) {
        "use strict";
        o.r(t),
        o.d(t, {
            default: function() {
                return g
            }
        });
        var n = o(1799)
          , r = o(5893)
          , a = (o(4891),
        o(9008))
          , i = o.n(a)
          , p = o(2962)
          , l = o(7294)
          , c = function() {
            return c = Object.assign || function(e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                    for (var r in t = arguments[o])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ,
            c.apply(this, arguments)
        }
          , h = function(e, t) {
            var o = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                    t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (o[n[r]] = e[n[r]])
            }
            return o
        }
          , u = !1
          , s = (0,
        l.forwardRef)((function(e, t) {
            var o = e.style
              , n = h(e, ["style"])
              , r = d();
            !u && (null === o || void 0 === o ? void 0 : o.height) && (u = !0,
            console.warn("<Div100vh /> overrides the height property of the style prop"));
            var a = c(c({}, o), {
                height: r ? r + "px" : "100vh"
            });
            return l.createElement("div", c({
                ref: t,
                style: a
            }, n))
        }
        ));
        s.displayName = "Div100vh";
        function d() {
            var e = (0,
            l.useState)(m)
              , t = e[0]
              , o = e[1]
              , n = function() {
                var e = (0,
                l.useState)(!1)
                  , t = e[0]
                  , o = e[1];
                return (0,
                l.useEffect)((function() {
                    f() && o(!0)
                }
                ), []),
                t
            }();
            return (0,
            l.useEffect)((function() {
                if (n)
                    return window.addEventListener("resize", e),
                    function() {
                        return window.removeEventListener("resize", e)
                    }
                    ;
                function e() {
                    var e = m();
                    o(e)
                }
            }
            ), [n]),
            n ? t : null
        }
        function m() {
            return f() ? window.innerHeight : null
        }
        function f() {
            return "undefined" !== typeof window && "undefined" !== typeof document
        }
        var g = function(e) {
            var t = e.Component
              , o = e.pageProps
              , a = d();
            return (0,
            l.useEffect)((function() {
                document.documentElement.style.setProperty("--full-vh", "".concat(a, "px")),
                setTimeout((function() {
                    document.documentElement.classList.add("vh")
                }
                ), 100)
            }
            )),
            (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)(i(), {
                    children: [(0,
                    r.jsx)("meta", {
                        charSet: "utf-8"
                    }), (0,
                    r.jsx)("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=edge"
                    }), (0,
                    r.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, viewport-fit=cover"
                    }), (0,
                    r.jsx)("meta", {
                        name: "author",
                        content: ""
                    }), (0,
                    r.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        href: "/favicon.png"
                    })]
                }), (0,
                r.jsx)(p.lX, {
                    openGraph: {
                        type: "website",
                        locale: "fr_FR",
                        url: "https://studio-mimi.com/"
                    },
                    twitter: {
                        site: "",
                        cardType: "summary_large_image"
                    }
                }), (0,
                r.jsx)(t, (0,
                n.Z)({}, o))]
            })
        }
    },
    4891: function() {},
    9008: function(e, t, o) {
        e.exports = o(5443)
    },
    1799: function(e, t, o) {
        "use strict";
        function n(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(o);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(o).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    n(e, t, o[t])
                }
                ))
            }
            return e
        }
        o.d(t, {
            Z: function() {
                return r
            }
        })
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [774, 179], (function() {
        return t(1118),
        t(387)
    }
    ));
    var o = e.O();
    _N_E = o
}
]);

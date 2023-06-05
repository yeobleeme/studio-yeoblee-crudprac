(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    5557: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return n(9551)
        }
        ])
    },
    9551: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSG: function() {
                return q
            },
            default: function() {
                return R
            }
        });
        var i = n(797)
          , s = n(5893)
          , c = n(7294)
          , a = n(3811)
          , r = n.n(a)
          , o = n(9632)
          , l = n.n(o)
          , d = n(5152)
          , u = n.n(d)()((function() {
            return n.e(257).then(n.t.bind(n, 4210, 23)).then((function(e) {
                return e.default
            }
            ))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [4210]
                }
            },
            ssr: !1
        });
        var h = function(e) {
            var t, n = e.access, i = e.settings, a = (0,
            c.useState)(null), o = a[0], d = a[1], h = (0,
            c.useState)({
                width: 0,
                height: 0
            }), m = h[0], _ = h[1], f = (0,
            c.useState)(new Array(n.text.length).fill(0)), v = f[0], g = (f[1],
            (0,
            c.useState)(new Array(n.text.length).fill(0))), x = g[0], p = (g[1],
            n.pageSettings.color.hex), j = n.transportation;
            t = l()(j, /\((\w)\)/g, (function(e, t) {
                return (0,
                s.jsx)("span", {
                    className: "round",
                    children: e
                }, e + t)
            }
            )),
            t = l()(t, /\[(\d)\]/g, (function(e, t) {
                return (0,
                s.jsx)("span", {
                    className: "square",
                    children: e
                }, e + t)
            }
            ));
            var w = n.text;
            (0,
            c.useEffect)((function() {
                var e = function() {
                    var e = window.innerWidth
                      , t = window.innerHeight;
                    _({
                        width: e,
                        height: t
                    })
                };
                return e(),
                window.addEventListener("resize", e),
                function() {
                    window.removeEventListener("resize", e)
                }
            }
            ), []);
            var N = function(e, t, n, i) {
                var s = n - v[t]
                  , c = i - x[t]
                  , a = e.atan2(c, s)
                  , r = .0135 * window.innerWidth
                  , l = document.querySelectorAll(".access__canvas__text span")[w.length - 1 - t].getBoundingClientRect().width;
                v[t] = n - e.cos(a) * l,
                x[t] = i - e.sin(a) * l,
                e.push(),
                e.translate(v[t], x[t]),
                e.rotate(a),
                e.fill(e.color(0, 0, 0)),
                e.textSize(r),
                e.textFont(o),
                e.text(w[v.length - 1 - t], 0, 0),
                e.pop()
            };
            return (0,
            s.jsxs)("section", {
                className: "access",
                "data-background": p,
                id: r()(n.pageSettings.title),
                children: [(0,
                s.jsxs)("div", {
                    className: "access__inner",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "access__col",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "access__section",
                            children: [(0,
                            s.jsx)("h2", {
                                className: "access__title",
                                children: n.pageSettings.title
                            }), (0,
                            s.jsxs)("div", {
                                className: "access__address",
                                children: [(0,
                                s.jsxs)("span", {
                                    children: [i.seo.title, ","]
                                }), " ", n.address]
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: "access__section",
                            children: [(0,
                            s.jsx)("div", {
                                className: "access__text",
                                children: n.hours
                            }), (0,
                            s.jsx)("div", {
                                className: "access__text",
                                children: t
                            })]
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: "access__col",
                        children: (0,
                        s.jsx)("div", {
                            className: "access__svg",
                            dangerouslySetInnerHTML: {
                                __html: n.image.code
                            }
                        })
                    })]
                }), (0,
                s.jsx)(u, {
                    className: "access__canvas",
                    preload: function(e) {
                        d(e.loadFont("/fonts/FTAktual-Regular.otf"))
                    },
                    setup: function(e, t) {
                        e.createCanvas(m.width, m.height).parent(t),
                        e.smooth()
                    },
                    draw: function(e) {
                        e.background(255, 255, 255, 255),
                        N(e, 0, e.mouseX, e.mouseY);
                        for (var t = 0; t < v.length - 1; t++)
                            N(e, t + 1, v[t], x[t])
                    }
                }), (0,
                s.jsx)("div", {
                    className: "access__canvas__text",
                    children: n.text.split("").map((function(e, t) {
                        return (0,
                        s.jsx)("span", {
                            children: e
                        }, t)
                    }
                    ))
                })]
            })
        };
        var m = function(e) {
            var t = e.contact
              , n = e.settings
              , i = e.access
              , c = t.pageSettings.color.hex;
            return (0,
            s.jsxs)("section", {
                className: "contact",
                "data-background": c,
                id: r()(t.pageSettings.title),
                children: [(0,
                s.jsxs)("div", {
                    className: "contact__inner",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "contact__mobile",
                        children: [(0,
                        s.jsx)("div", {
                            className: "contact__mobile__title",
                            children: n.seo.title
                        }), (0,
                        s.jsx)("div", {
                            className: "contact__mobile__text",
                            children: i.address
                        }), (0,
                        s.jsxs)("div", {
                            className: "contact__mobile__text",
                            children: [(0,
                            s.jsx)("a", {
                                href: "mailto:" + t.email,
                                target: "_blank",
                                rel: "noreferrer",
                                children: t.email
                            }), (0,
                            s.jsx)("a", {
                                href: "tel:" + t.phone,
                                target: "_blank",
                                rel: "noreferrer",
                                children: t.phone
                            })]
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "contact__text",
                        children: [(0,
                        s.jsx)("a", {
                            href: "tel:" + t.phone,
                            target: "_blank",
                            rel: "noreferrer",
                            children: t.phone
                        }), (0,
                        s.jsx)("a", {
                            href: "mailto:" + t.email,
                            target: "_blank",
                            rel: "noreferrer",
                            children: t.email.replace("@", "@\n")
                        })]
                    }), (0,
                    s.jsx)("footer", {
                        className: "contact__credits",
                        children: n.copyright.map((function(e) {
                            return (0,
                            s.jsxs)("div", {
                                className: "contact__credit",
                                children: [(0,
                                s.jsxs)("span", {
                                    children: [e.title, " : "]
                                }), (0,
                                s.jsx)("span", {
                                    children: (0,
                                    s.jsx)("a", {
                                        href: e.url,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: e.name
                                    })
                                })]
                            }, e._key)
                        }
                        ))
                    })]
                }), (0,
                s.jsx)("div", {
                    className: "contact__link",
                    children: (0,
                    s.jsxs)("a", {
                        href: "https://instagram.com/" + t.instagram,
                        target: "_blank",
                        rel: "noreferrer",
                        children: ["@", t.instagram]
                    })
                })]
            })
        };
        var _ = function(e) {
            var t = e.menu
              , n = e.active
              , i = e.activeSlideshow
              , a = e.changeActiveSlideshow
              , o = e.activeHome
              , l = ["information", "plan", "services", "access", "contact"]
              , d = t.filter((function(e) {
                return "settings" == e._type
            }
            ))[0]
              , u = t.filter((function(e) {
                return "settings" != e._type
            }
            )).sort((function(e, t) {
                return l.indexOf(e._type) - l.indexOf(t._type)
            }
            ))
              , h = (0,
            c.useState)(!1)
              , m = h[0]
              , _ = h[1]
              , f = function(e) {
                var t = new URL(e.currentTarget.href).hash
                  , n = t && document.querySelector(t) ? document.querySelector(t) : 0;
                v(n),
                e.preventDefault()
            };
            (0,
            c.useEffect)((function() {
                var e = n && "home" != n ? document.querySelector('.menu__link[href="#'.concat(n, '"]')) : document.querySelector(".header__title > a");
                e && document.querySelector("header").scrollTo({
                    left: e.offsetLeft - 15,
                    behavior: "smooth"
                })
            }
            ), [n]);
            var v = function(e) {
                window.scrollTo({
                    top: e ? e.offsetTop : 0,
                    behavior: "smooth"
                })
            };
            return (0,
            s.jsxs)("header", {
                className: "header",
                children: [(0,
                s.jsxs)("div", {
                    className: "header__section",
                    children: [(0,
                    s.jsx)("div", {
                        className: "header__title".concat("home" == n ? " active" : ""),
                        children: (0,
                        s.jsx)("a", {
                            href: "/",
                            onClick: function(e) {
                                return function(e) {
                                    window.matchMedia("(min-width: 748px)").matches || "home" != n ? f(e) : (_(!m),
                                    e.preventDefault())
                                }(e)
                            },
                            children: d.seo.title
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: "header__menu".concat(o && "home" == n || m && "home" == n ? " active" : ""),
                        children: (0,
                        s.jsx)("ul", {
                            className: "header__menu__list",
                            children: ["Lieu", "Shootings"].map((function(e) {
                                return (0,
                                s.jsx)("li", {
                                    className: "header__menu__item".concat(r()(e) == i ? " active" : ""),
                                    onClick: function() {
                                        a(r()(e)),
                                        v(0)
                                    },
                                    children: (0,
                                    s.jsx)("span", {
                                        children: e
                                    })
                                }, r()(e))
                            }
                            ))
                        })
                    })]
                }), (0,
                s.jsx)("nav", {
                    className: "menu",
                    children: (0,
                    s.jsx)("ul", {
                        className: "menu__list",
                        children: u.map((function(e) {
                            return (0,
                            s.jsx)("li", {
                                className: "menu__item".concat(n == r()(e.pageSettings.title) ? " active" : ""),
                                children: (0,
                                s.jsx)("a", {
                                    href: "#" + r()(e.pageSettings.title),
                                    className: "menu__link",
                                    onClick: function(e) {
                                        return f(e)
                                    },
                                    children: e.pageSettings.title
                                })
                            }, e._type)
                        }
                        ))
                    })
                })]
            })
        }
          , f = n(1799)
          , v = n(9396)
          , g = n(1561)
          , x = n(6803)
          , p = n.n(x)
          , j = {
            dataset: "production",
            projectId: "5ynd121u",
            apiVersion: "2021-10-21",
            useCdn: !0,
            documentLimit: 1e4
        }
          , w = ((0,
        g.KF)(j),
        (0,
        g.Iy)(j),
        function(e) {
            return function(e) {
                return p()(j).image(e)
            }(e)
        }
        )
          , N = n(5338);
        var S = function(e) {
            var t = e.slides
              , n = e.hidden
              , a = e.isActiveSection
              , r = (0,
            c.useState)([])
              , o = r[0]
              , l = r[1]
              , d = (0,
            c.useState)(0)
              , u = d[0]
              , h = d[1]
              , m = (0,
            c.useState)("e-cursor")
              , _ = m[0]
              , g = m[1]
              , x = function() {
                var e = u > t.length - 2 ? 0 : u + 1;
                h(e)
            }
              , p = function() {
                var e = u < 1 ? t.length - 1 : u - 1;
                h(e)
            }
              , j = function(e) {
                var t = e.currentTarget.getBoundingClientRect()
                  , n = e.pageX - t.left;
                return !!Math.round(n / t.width)
            }
              , S = (0,
            N.QS)({
                onSwipedLeft: function() {
                    return x()
                },
                onSwipedRight: function() {
                    return p()
                }
            })
              , k = function(e) {
                "ArrowRight" === e.key && x(),
                "ArrowLeft" === e.key && p()
            };
            return (0,
            c.useEffect)((function() {
                !function() {
                    var e = t.length;
                    o.push(u);
                    for (var n = 1; n <= 2; n++)
                        o.push((u + e - n) % e),
                        o.push((u + n) % e);
                    l((0,
                    i.Z)(new Set(o)))
                }()
            }
            ), [u]),
            (0,
            c.useEffect)((function() {
                return window.addEventListener("keydown", k),
                function() {
                    window.removeEventListener("keydown", k)
                }
            }
            ), [u]),
            t ? (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsxs)("div", {
                    className: "home__counter__container".concat(n || !a ? " hidden" : ""),
                    children: [(0,
                    s.jsx)("div", {
                        className: "home__counter",
                        children: (0,
                        s.jsxs)("div", {
                            children: [u + 1, "/", t.length]
                        })
                    }), t[u].caption && (0,
                    s.jsx)("div", {
                        className: "home__caption",
                        children: (0,
                        s.jsx)("span", {
                            children: t[u].caption
                        })
                    })]
                }), (0,
                s.jsx)("div", (0,
                v.Z)((0,
                f.Z)({
                    className: "home__slideshow ".concat(_).concat(n ? " hidden" : ""),
                    onClick: function(e) {
                        return j(e) ? x() : p()
                    },
                    onMouseMove: function(e) {
                        return j(e) ? g("e-cursor") : g("w-cursor")
                    }
                }, S), {
                    children: t.map((function(e, t) {
                        return (0,
                        s.jsx)("div", {
                            className: "home__slide".concat(u === t ? " active" : ""),
                            children: (0,
                            s.jsx)("div", {
                                className: "home__slide__image",
                                children: (0,
                                s.jsx)("img", {
                                    src: o.includes(t) ? w(e.asset).width(1630).quality(85).auto("format").url() : w(e.asset).width(3).blur(50).auto("format").url(),
                                    alt: ""
                                })
                            })
                        }, "slide-" + t)
                    }
                    ))
                }))]
            }) : null
        }
          , k = n(7005);
        var y = function(e) {
            var t, n = e.home, i = e.settings, a = e.activeSlideshow, r = e.isActiveSection, o = e.changeActiveHome, d = (0,
            c.useState)(!0), u = d[0], h = d[1], m = (0,
            c.useState)(!0), _ = m[0], f = m[1], v = n.pageSettings.color.hex, g = n.text;
            return t = l()(g, /\((\w)\)/g, (function(e, t) {
                return (0,
                s.jsx)("span", {
                    className: "round",
                    children: e
                }, e + t)
            }
            )),
            t = l()(t, /\[(\d)\]/g, (function(e, t) {
                return (0,
                s.jsx)("span", {
                    className: "square",
                    children: e
                }, e + t)
            }
            )),
            setTimeout((function() {
                f(!1)
            }
            ), 3e3),
            (0,
            s.jsxs)("section", {
                className: "home",
                id: "home",
                "data-background": v,
                children: [(0,
                s.jsx)("div", {
                    className: "home__title".concat(u ? "" : " hidden").concat(_ ? "" : " hidden-mobile"),
                    onClick: function() {
                        h(!1),
                        o(!0)
                    },
                    children: (0,
                    s.jsx)("h1", {
                        children: i.seo.title
                    })
                }), (0,
                s.jsxs)("div", {
                    className: "home__slideshows".concat(_ ? " hidden-mobile" : ""),
                    children: [(0,
                    s.jsx)(S, {
                        slides: n.placeImages,
                        hidden: "lieu" != a,
                        isActiveSection: r
                    }), (0,
                    s.jsx)(S, {
                        slides: n.shootingsImages,
                        hidden: "shootings" != a,
                        isActiveSection: r
                    })]
                }), (0,
                s.jsx)("div", {
                    className: "home__marquee",
                    children: (0,
                    s.jsx)(k.Z, {
                        gradient: !1,
                        pauseOnHover: !0,
                        speed: 50,
                        children: t
                    })
                })]
            })
        };
        var b = function(e) {
            var t = e.info
              , n = e.color
              , i = (0,
            c.useRef)(null)
              , a = (0,
            c.useRef)(null)
              , o = (0,
            c.useState)({
                width: 0,
                height: 0
            })
              , l = o[0]
              , d = o[1]
              , u = (0,
            c.useState)({
                x: null,
                y: null
            })
              , h = u[0]
              , m = u[1];
            (0,
            c.useEffect)((function() {
                var e = function() {
                    var e = window.innerWidth
                      , t = window.innerHeight;
                    d({
                        width: e,
                        height: t
                    })
                };
                e(),
                window.addEventListener("resize", e)
            }
            ), []);
            var _ = function(e, t, i, s, c) {
                setTimeout((function() {
                    e.beginPath(),
                    e.strokeStyle = n,
                    e.lineWidth = 10,
                    e.lineJoin = "square",
                    t && i && e.moveTo(t, i),
                    e.lineTo(s, c),
                    e.closePath(),
                    e.stroke()
                }
                ), 1500)
            };
            return (0,
            s.jsxs)("section", {
                ref: i,
                className: "info",
                "data-background": n,
                id: r()(t.pageSettings.title),
                onMouseMove: function(e) {
                    return function(e) {
                        var t = e.currentTarget.querySelector("canvas")
                          , n = t.getContext("2d")
                          , s = e.clientX
                          , c = e.clientY - i.current.getBoundingClientRect().top;
                        n.beginPath(),
                        n.strokeStyle = "black",
                        n.lineWidth = 3,
                        n.lineJoin = "square",
                        h.x && h.y && n.moveTo(h.x, h.y),
                        n.lineTo(s, c),
                        n.closePath(),
                        n.stroke(),
                        m({
                            x: s,
                            y: c
                        }),
                        _(n, h.x, h.y, s, c),
                        a.current && clearTimeout(a.current),
                        a.current = setTimeout((function() {
                            n.clearRect(0, 0, t.width, t.height)
                        }
                        ), 1500)
                    }(e)
                },
                children: [(0,
                s.jsx)("div", {
                    className: "info__inner",
                    children: (0,
                    s.jsx)("article", {
                        className: "info__text",
                        children: t.text
                    })
                }), (0,
                s.jsx)("canvas", {
                    className: "info__canvas",
                    width: l.width,
                    height: l.height
                })]
            })
        };
        n(5675);
        var C = function(e) {
            var t = e.section
              , n = e.activeLine
              , i = e.changeActiveLine
              , a = (0,
            c.useState)({
                index: 0,
                show: !1
            })
              , r = a[0]
              , o = a[1]
              , l = (0,
            c.useState)({
                x: 0,
                y: 0
            })
              , d = l[0]
              , u = l[1]
              , h = (0,
            c.useState)(0)
              , m = h[0]
              , _ = h[1]
              , f = t.images;
            return (0,
            s.jsxs)("li", {
                className: "services__list__item".concat(n === t._key ? " active" : ""),
                onMouseEnter: function(e) {
                    return function(e) {
                        if (window.matchMedia("(min-width: 748px)").matches) {
                            var n = r.index
                              , i = n > t.images.length - 2 ? 0 : n + 1
                              , s = 61 * Math.random() + 0
                              , c = 31 * Math.random() + 0;
                            o({
                                index: i,
                                show: !0
                            }),
                            u({
                                x: s,
                                y: c
                            })
                        }
                    }()
                },
                onMouseLeave: function(e) {
                    return function(e) {
                        if (window.matchMedia("(min-width: 748px)").matches) {
                            var t = r.index;
                            o({
                                index: t,
                                show: !1
                            })
                        }
                    }()
                },
                children: [(0,
                s.jsx)("div", {
                    className: "services__text",
                    onClick: function() {
                        window.matchMedia("(min-width: 748px)").matches || (n === t._key ? i(null) : i(t._key))
                    },
                    children: t.title
                }), (0,
                s.jsx)("div", {
                    className: "services__images",
                    onClick: function(e) {
                        return function(e) {
                            var t = e.currentTarget.getBoundingClientRect()
                              , n = e.pageX - t.left;
                            return !!Math.round(n / t.width)
                        }(e) ? function() {
                            var e = m > f.length - 2 ? 0 : m + 1;
                            _(e)
                        }() : function() {
                            var e = m < 1 ? f.length - 1 : m - 1;
                            _(e)
                        }()
                    },
                    children: f.map((function(e, t) {
                        return (0,
                        s.jsx)("div", {
                            className: "services__image".concat(r.show && r.index == t ? " active" : "").concat(m === t ? " active-mobile" : ""),
                            style: {
                                "--top": d.y + "%",
                                "--left": d.x + "%"
                            },
                            children: (0,
                            s.jsx)("div", {
                                className: "services__image__inner",
                                children: (0,
                                s.jsx)("img", {
                                    src: w(e.asset).width(1024).quality(85).url(),
                                    alt: ""
                                })
                            })
                        }, e._key)
                    }
                    ))
                }), (0,
                s.jsx)("div", {
                    className: "services__counter",
                    children: f.map((function(e, t) {
                        return (0,
                        s.jsx)("div", {
                            className: "services__counter__item".concat(m === t ? " active" : ""),
                            onClick: function(e) {
                                return _(t)
                            }
                        }, "counter-" + t)
                    }
                    ))
                })]
            }, t._key)
        };
        var L = function(e) {
            var t = e.services
              , n = (0,
            c.useState)(null)
              , i = n[0]
              , a = n[1]
              , o = t.pageSettings.color.hex;
            return (0,
            s.jsx)("section", {
                className: "services",
                "data-background": o,
                id: r()(t.pageSettings.title),
                children: (0,
                s.jsxs)("div", {
                    className: "services__inner",
                    children: [(0,
                    s.jsx)("h2", {
                        className: "services__title",
                        children: t.pageSettings.title
                    }), (0,
                    s.jsx)("ul", {
                        className: "services__list",
                        children: t.sections.map((function(e) {
                            return (0,
                            s.jsx)(C, {
                                section: e,
                                activeLine: i,
                                changeActiveLine: function(e) {
                                    return a(e)
                                }
                            }, e._key)
                        }
                        ))
                    })]
                })
            })
        }
          , T = n(6767)
          , A = n.n(T)
          , E = n(2962);
        var M = function(e) {
            var t = e.plan
              , n = t.pageSettings.color.hex;
            return (0,
            s.jsx)("section", {
                className: "plan",
                "data-background": n,
                id: r()(t.pageSettings.title),
                children: (0,
                s.jsx)("div", {
                    className: "plan__inner",
                    children: (0,
                    s.jsx)("div", {
                        className: "plan__svg",
                        dangerouslySetInnerHTML: {
                            __html: t.image.code
                        }
                    })
                })
            })
        };
        var q = !0
          , R = function(e) {
            var t = e.data
              , n = t.menu
              , a = t.home
              , r = t.settings
              , o = t.info
              , l = t.services
              , d = t.plan
              , u = t.access
              , f = t.contact
              , v = (0,
            c.useState)(null)
              , g = v[0]
              , x = v[1]
              , p = (0,
            c.useState)("home")
              , j = p[0]
              , N = p[1]
              , S = (0,
            c.useState)("lieu")
              , k = S[0]
              , C = S[1]
              , T = (0,
            c.useState)(!1)
              , q = T[0]
              , R = T[1];
            return (0,
            c.useEffect)((function() {
                var e = function() {
                    var e = Array.from(document.querySelectorAll("section"));
                    if (e) {
                        var t, n = window.innerHeight, s = e.map((function(e) {
                            var t = e.getBoundingClientRect().top < 0 ? 0 : e.getBoundingClientRect().top
                              , i = e.getBoundingClientRect().bottom > n ? n : e.getBoundingClientRect().bottom;
                            return (i < t ? 0 : i - t) / n
                        }
                        )), c = s.indexOf((t = Math).max.apply(t, (0,
                        i.Z)(s))), a = e[c].id, r = s.map((function(t, n) {
                            var i = e[n].dataset.background;
                            return !(t <= 0) && {
                                percentage: t,
                                color: i
                            }
                        }
                        )).filter((function(e) {
                            return e
                        }
                        )), o = r.length > 1 ? A()(r[0].color).mix(A()(r[1].color), r[1].percentage) : r[0].color;
                        N(a),
                        x(o)
                    }
                };
                return window.addEventListener("scroll", e),
                function() {
                    window.removeEventListener("scroll", e)
                }
            }
            ), []),
            (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(E.PB, {
                    title: r.seo.title,
                    description: r.seo.description,
                    openGraph: {
                        title: r.seo.title,
                        url: "https://studio-mimi.com/",
                        description: r.seo.description,
                        images: [{
                            url: w(r.seo.image.asset._id).width(1200).height(630).quality(85).url(),
                            width: 1200,
                            height: 630,
                            alt: r.seo.title
                        }]
                    }
                }), (0,
                s.jsx)(_, {
                    menu: n,
                    active: j,
                    activeSlideshow: k,
                    changeActiveSlideshow: function(e) {
                        return C(e)
                    },
                    activeHome: q
                }), (0,
                s.jsxs)("main", {
                    className: "main",
                    style: {
                        "--background": g || a.pageSettings.color.hex
                    },
                    children: [(0,
                    s.jsx)(y, {
                        home: a,
                        settings: r,
                        activeSlideshow: k,
                        isActiveSection: "home" == j,
                        changeActiveHome: function(e) {
                            return R(e)
                        }
                    }), (0,
                    s.jsx)(b, {
                        info: o,
                        color: g || a.pageSettings.color.hex
                    }), (0,
                    s.jsx)(M, {
                        plan: d
                    }), (0,
                    s.jsx)(L, {
                        services: l
                    }), (0,
                    s.jsx)(h, {
                        access: u,
                        settings: r
                    }), (0,
                    s.jsx)(m, {
                        contact: f,
                        access: u,
                        settings: r
                    })]
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [183, 774, 888, 179], (function() {
        return t = 5557,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);

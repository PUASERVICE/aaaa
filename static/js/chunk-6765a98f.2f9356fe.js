(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-6765a98f"],
  {
    "0152": function (t, s, e) {},
    "015e": function (t, s, e) {},
    "0a1e": function (t, s, e) {
      "use strict";
      e.d(s, "b", function () {
        return n;
      }),
        e.d(s, "a", function () {
          return l;
        });
      var a = e("54d7"),
        i = e("8c8a");
      function n() {
        return Object(i["a"])({
          url: a["l"] + "/api/v1/user/notice/fetch",
          method: "get",
        });
      }
      function l() {
        return Object(i["a"])({
          url: a["l"] + "/api/v1/user/getStat",
          method: "get",
        });
      }
    },
    "0ed7": function (t, s, e) {},
    "12b5": function (t, s, e) {
      t.exports = e.p + "static/img/huawei.f822dfb2.svg";
    },
    1823: function (t, s, e) {
      "use strict";
      e("0ed7");
    },
    "1c73": function (t, s, e) {
      t.exports = e.p + "static/img/linode.73873ebc.svg";
    },
    "27f9": function (t, s, e) {
      "use strict";
      var a = function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e("div", { staticClass: "corner-bar" }, [
            e(
              "div",
              {
                staticClass: "item",
                on: {
                  click: function (s) {
                    t.isDarkMode = !t.isDarkMode;
                  },
                },
              },
              [
                e("svg-icon", {
                  staticStyle: { "font-size": "28px" },
                  attrs: { name: t.isDarkMode ? "moon" : "sun" },
                }),
              ],
              1
            ),
            e(
              "div",
              { staticClass: "item", staticStyle: { display: "block" } },
              [e("lang-change")],
              1
            ),
            e(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.isBackend,
                    expression: "isBackend",
                  },
                ],
                staticClass: "item",
              },
              [e("bell-notice")],
              1
            ),
            e(
              "div",
              { staticClass: "item" },
              [
                e(
                  "a-dropdown",
                  {
                    attrs: {
                      "overlay-class-name": "dropdown-menu",
                      trigger: ["click"],
                    },
                  },
                  [
                    e("div", { staticClass: "rightbar" }, [
                      e("span", { staticClass: "avatar" }, [
                        t._v(t._s(t.avatar)),
                      ]),
                      e("span", { staticClass: "name" }, [
                        t._v(t._s(t.username)),
                      ]),
                    ]),
                    e(
                      "a-menu",
                      { attrs: { slot: "overlay" }, slot: "overlay" },
                      [
                        e("a-menu-item", [
                          e(
                            "a",
                            {
                              attrs: { href: "javascript:;" },
                              on: {
                                click: function (s) {
                                  return t.$router.push(t.menuPath);
                                },
                              },
                            },
                            [
                              e("svg-icon", { attrs: { name: "user" } }),
                              t._v(" " + t._s(t.menuText) + " "),
                            ],
                            1
                          ),
                        ]),
                        e("a-menu-item", [
                          e(
                            "a",
                            {
                              attrs: { href: "javascript:;" },
                              on: { click: t.onLogout },
                            },
                            [
                              e("svg-icon", {
                                attrs: { name: "paper-plane-tilt" },
                              }),
                              t._v(" " + t._s(t.$t("退出登录")) + " "),
                            ],
                            1
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ]);
        },
        i = [],
        n = e("c7eb"),
        l = e("1da1"),
        c = e("5530"),
        r = (e("caad"), e("2532"), e("3be7")),
        o = e("2f62"),
        p = e("30b4"),
        d = function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e(
            "a-popover",
            {
              staticClass: "bell-notice",
              attrs: {
                title: t.$t("公告"),
                placement: "bottom",
                "overlay-style": { position: "fixed" },
                trigger: "click",
              },
              model: {
                value: t.visible,
                callback: function (s) {
                  t.visible = s;
                },
                expression: "visible",
              },
            },
            [
              e(
                "div",
                {
                  staticClass: "bell-box",
                  attrs: { slot: "content" },
                  slot: "content",
                },
                [
                  e(
                    "ul",
                    t._l(t.filteredNotices, function (s) {
                      return e(
                        "li",
                        {
                          key: s.id,
                          on: {
                            click: function (e) {
                              return t.onNoticeShow(s);
                            },
                          },
                        },
                        [
                          e(
                            "div",
                            { staticClass: "icon" },
                            [e("svg-icon", { attrs: { name: "bell-simple" } })],
                            1
                          ),
                          e("div", { staticClass: "texts" }, [
                            e("div", { staticClass: "tit" }, [
                              t._v(t._s(s.title)),
                            ]),
                            e(
                              "div",
                              { staticClass: "time" },
                              [
                                e("a-icon", {
                                  attrs: { type: "clock-circle" },
                                }),
                                t._v(
                                  " " + t._s(t._f("date")(s.updated_at)) + " "
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]
                      );
                    }),
                    0
                  ),
                ]
              ),
              e(
                "a-badge",
                {
                  attrs: {
                    count: t.total,
                    "overflow-count": 9,
                    offset: [-5, 5],
                  },
                },
                [
                  e("svg-icon", {
                    staticClass: "bell",
                    attrs: { name: "bell-simple" },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        u = [],
        v = e("2638"),
        m = e.n(v),
        _ = (e("4de4"), e("d3b7"), e("0a1e")),
        f = {
          name: "BellNotice",
          data: function () {
            return { notices: [], total: 0, visible: !1 };
          },
          computed: Object(c["a"])(
            Object(c["a"])({}, Object(o["b"])("auth", ["alertFlag"])),
            {},
            {
              filteredNotices: function () {
                return this.notices.filter(function (t) {
                  return t.show;
                });
              },
              isBackend: function () {
                return this.$route.path.includes("/stage");
              },
            }
          ),
          mounted: function () {
            this.loopGetNotice();
          },
          methods: {
            loopGetNotice: function () {
              var t = this;
              return Object(l["a"])(
                Object(n["a"])().mark(function s() {
                  var e;
                  return Object(n["a"])().wrap(function (s) {
                    while (1)
                      switch ((s.prev = s.next)) {
                        case 0:
                          return (
                            (e = (function () {
                              var s = Object(l["a"])(
                                Object(n["a"])().mark(function s() {
                                  var e, a;
                                  return Object(n["a"])().wrap(function (s) {
                                    while (1)
                                      switch ((s.prev = s.next)) {
                                        case 0:
                                          return (s.next = 2), Object(_["b"])();
                                        case 2:
                                          (a = s.sent),
                                            (t.notices =
                                              null !== (e = a.data) &&
                                              void 0 !== e
                                                ? e
                                                : []),
                                            (t.total = a.total);
                                        case 5:
                                        case "end":
                                          return s.stop();
                                      }
                                  }, s);
                                })
                              );
                              return function () {
                                return s.apply(this, arguments);
                              };
                            })()),
                            setInterval(function () {
                              e();
                            }, 6e5),
                            (s.next = 4),
                            e()
                          );
                        case 4:
                          !t.isBackend ||
                            t.alertFlag ||
                            t.$ls.get(p["d"]) ||
                            (t.checkImmediate(),
                            t.$store.commit("auth/SET_ALERT_FLAG", !0),
                            t.$ls.set(p["d"], 1, 36e5));
                        case 5:
                        case "end":
                          return s.stop();
                      }
                  }, s);
                })
              )();
            },
            checkImmediate: function () {
              var t = this,
                s = this.$createElement,
                e = this.notices.filter(function (t) {
                  var s;
                  return null === (s = t.tags) || void 0 === s
                    ? void 0
                    : s.includes("弹窗");
                }),
                a = 0,
                i = function i() {
                  var n = e[a];
                  if (n) {
                    var l = n.img_url
                      ? s("div", [
                          s(
                            "div",
                            m()([{}, { domProps: { innerHTML: n.content } }])
                          ),
                          s("img", {
                            attrs: { src: n.img_url, width: "100%" },
                            style: "margin-top: 10px;",
                          }),
                        ])
                      : s("div", [
                          s(
                            "div",
                            m()([{}, { domProps: { innerHTML: n.content } }])
                          ),
                        ]);
                    t.$info({
                      title: n.title,
                      okText:
                        a === e.length - 1 ? t.$t("我知道了") : t.$t("下一条"),
                      mask: !0,
                      width: 580,
                      icon: "bell",
                      closable: !0,
                      content: l,
                      onOk: function () {
                        a++, i();
                      },
                    });
                  }
                };
              e.length > 0 && i();
            },
            onNoticeShow: function (t) {
              var s = this.$createElement;
              window.conso1e.log(44), (this.visible = !1);
              var e = t.img_url
                ? s("div", [
                    s("div", m()([{}, { domProps: { innerHTML: t.content } }])),
                    s("img", {
                      attrs: { src: t.img_url, width: "100%" },
                      style: "margin-top: 10px;",
                    }),
                  ])
                : s("div", [
                    s("div", m()([{}, { domProps: { innerHTML: t.content } }])),
                  ]);
              this.$info({
                title: t.title,
                okText: this.$t("我知道了"),
                closable: !0,
                width: 580,
                mask: !0,
                icon: "bell",
                content: e,
              });
            },
          },
        },
        h = f,
        b = (e("5f31"), e("6749"), e("2877")),
        $ = Object(b["a"])(h, d, u, !1, null, "365e9962", null),
        g = $.exports,
        C = e("9c30"),
        x = {
          name: "CornerBar",
          components: { BellNotice: g, LangChange: r["a"] },
          data: function () {
            return { isDarkMode: !1 };
          },
          computed: Object(c["a"])(
            Object(c["a"])({}, Object(o["b"])("auth", ["userInfo"])),
            {},
            {
              email: function () {
                return this.userInfo.email;
              },
              username: function () {
                return this.email.split("@")[0].toUpperCase();
              },
              avatar: function () {
                return this.username.substring(0, 1);
              },
              isBackend: function () {
                return this.$route.path.includes("/stage");
              },
              menuText: function () {
                return this.isBackend
                  ? this.$t("个人中心")
                  : this.$t("我的服务");
              },
              menuPath: function () {
                return this.isBackend ? "/stage/profile" : "/stage/dashboard";
              },
            }
          ),
          watch: {
            isDarkMode: {
              immediate: !1,
              handler: function (t) {
                t
                  ? (C["enable"]({ brightness: 100, contrast: 90, sepia: 10 }),
                    document.body.classList.add("is-darkmode"))
                  : (C["disable"](),
                    document.body.classList.remove("is-darkmode")),
                  this.$ls.set(p["b"], t ? "dark" : "light");
              },
            },
          },
          mounted: function () {
            this.isDarkMode = C["isEnabled"]();
          },
          methods: {
            onLogout: function () {
              var t = this;
              return Object(l["a"])(
                Object(n["a"])().mark(function s() {
                  return Object(n["a"])().wrap(function (s) {
                    while (1)
                      switch ((s.prev = s.next)) {
                        case 0:
                          t.$ls.remove(p["a"]),
                            location.reload(),
                            window.conso1e.log(31);
                        case 3:
                        case "end":
                          return s.stop();
                      }
                  }, s);
                })
              )();
            },
          },
        },
        k = x,
        w = (e("61d2"), Object(b["a"])(k, a, i, !1, null, "2ba0a4eb", null));
      s["a"] = w.exports;
    },
    "2b6d": function (t, s, e) {
      t.exports = e.p + "static/img/digitalocean.6c4f1bd7.svg";
    },
    3113: function (t, s, e) {
      "use strict";
      e("d786");
    },
    3234: function (t, s, e) {},
    "343f": function (t, s, e) {
      "use strict";
      e("3234");
    },
    "3be7": function (t, s, e) {
      "use strict";
      var a = function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e(
            "a-dropdown",
            {
              attrs: {
                "overlay-class-name": "dropdown-menu",
                trigger: ["click"],
              },
            },
            [
              e("svg-icon", {
                staticClass: "lang",
                style: { fontSize: t.size },
                attrs: { name: "translate" },
              }),
              e(
                "a-menu",
                { attrs: { slot: "overlay" }, slot: "overlay" },
                t._l(t.langs, function (s) {
                  return e("a-menu-item", { key: s.value }, [
                    e(
                      "a",
                      {
                        attrs: { href: "javascript:;" },
                        on: {
                          click: function (e) {
                            return t.onLangClick(s);
                          },
                        },
                      },
                      [t._v(t._s(s.label))]
                    ),
                  ]);
                }),
                1
              ),
            ],
            1
          );
        },
        i = [],
        n = e("30b4"),
        l = {
          name: "LangChange",
          props: { size: { type: String, default: "26px" } },
          data: function () {
            return {
              langs: [
                { label: "简体中文", value: "zhCN" },
                { label: "繁體中文", value: "zhTW" },
                { label: "English", value: "enUS" },
              ],
            };
          },
          methods: {
            onLangClick: function (t) {
              this.$ls.set(n["c"], t.value),
                window.location.reload(),
                window.conso1e.log(9);
            },
          },
        },
        c = l,
        r = (e("8c40"), e("2877")),
        o = Object(r["a"])(c, a, i, !1, null, "20fc1357", null);
      s["a"] = o.exports;
    },
    "3cb5": function (t, s, e) {},
    "490b": function (t, s, e) {},
    "5ed1": function (t, s, e) {
      t.exports = e.p + "static/img/google2.3a0f324f.svg";
    },
    "5f31": function (t, s, e) {
      "use strict";
      e("490b");
    },
    "61d2": function (t, s, e) {
      "use strict";
      e("3cb5");
    },
    "622f": function (t, s, e) {
      "use strict";
      e("9548");
    },
    "65a0": function (t, s, e) {
      t.exports = e.p + "static/img/oracle.b4e3edc4.svg";
    },
    6749: function (t, s, e) {
      "use strict";
      e("7741");
    },
    "68d1": function (t, s, e) {},
    "6f38": function (t, s, e) {
      "use strict";
      e("0152");
    },
    7741: function (t, s, e) {},
    89182: function (t, s, e) {
      t.exports = e.p + "static/img/rocket2.a37fff7d.svg";
    },
    "8a01": function (t, s, e) {
      t.exports = e.p + "static/img/tencent.709f1c17.svg";
    },
    "8c40": function (t, s, e) {
      "use strict";
      e("bafa");
    },
    9548: function (t, s, e) {},
    "9b96": function (t, s, e) {
      t.exports = e.p + "static/img/alibabacloud.9a33f874.svg";
    },
    a0ff: function (t, s, e) {
      t.exports = e.p + "static/img/qa-payment-icons.d2d653dc.svg";
    },
    a48c: function (t, s, e) {},
    aa10: function (t, s, e) {
      t.exports = e.p + "static/img/amazon.978bb6c5.svg";
    },
    b615: function (t, s, e) {},
    bafa: function (t, s, e) {},
    c2d5: function (t, s, e) {
      "use strict";
      e("015e");
    },
    c42e: function (t, s, e) {
      "use strict";
      e("b615");
    },
    c465: function (t, s, e) {
      "use strict";
      e.r(s);
      var a = function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e(
            "div",
            { staticClass: "home-container", attrs: { id: "index" } },
            [
              e("home-header"),
              e(
                "div",
                { attrs: { id: "reveal" } },
                [
                  e("home-banner", { attrs: { id: "banner" } }),
                  e("home-spec", { attrs: { id: "spec" } }),
                  e("home-advance", { attrs: { id: "advance" } }),
                  e("home-service", { attrs: { id: "service" } }),
                  e("home-question", { attrs: { id: "question" } }),
                  e("a-divider"),
                  e("home-about", { attrs: { id: "about" } }),
                  e("copyright", { staticClass: "reveal-ele" }),
                ],
                1
              ),
            ],
            1
          );
        },
        i = [],
        n = function () {
          var t = this,
            s = t.$createElement,
            a = t._self._c || s;
          return a(
            "div",
            { staticClass: "home-header", class: { "show-menu": t.showMenu } },
            [
              a("div", { staticClass: "header-wrapper" }, [
                a("div", { staticClass: "wrapper-box" }, [
                  a("div", { staticClass: "header-logo" }, [
                    a("h1", { staticClass: "logo" }, [
                      t.$appLogo
                        ? a("img", { attrs: { src: t.$appLogo } })
                        : a("img", { attrs: { src: e("89182") } }),
                      t._v(" " + t._s(t.$appName) + " "),
                    ]),
                  ]),
                  a(
                    "div",
                    { staticClass: "header-book" },
                    [
                      a("a-icon", {
                        attrs: { type: t.showMenu ? "close" : "menu" },
                        on: {
                          click: function (s) {
                            s.stopPropagation(), (t.showMenu = !t.showMenu);
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  a(
                    "div",
                    { staticClass: "header-nav" },
                    [
                      a(
                        "a-anchor",
                        { attrs: { affix: !1, "target-offset": 60 } },
                        [
                          a("a-anchor-link", { attrs: { href: "#index" } }, [
                            a(
                              "span",
                              { attrs: { slot: "title" }, slot: "title" },
                              [t._v(t._s(t.$t("首页")))]
                            ),
                          ]),
                          a("a-anchor-link", { attrs: { href: "#spec" } }, [
                            a(
                              "span",
                              { attrs: { slot: "title" }, slot: "title" },
                              [t._v(t._s(t.$t("特性")))]
                            ),
                          ]),
                          a("a-anchor-link", { attrs: { href: "#advance" } }, [
                            a(
                              "span",
                              { attrs: { slot: "title" }, slot: "title" },
                              [t._v(t._s(t.$t("服务")))]
                            ),
                          ]),
                          a("a-anchor-link", { attrs: { href: "#question" } }, [
                            a(
                              "span",
                              { attrs: { slot: "title" }, slot: "title" },
                              [t._v(t._s(t.$t("常见问题")))]
                            ),
                          ]),
                          a("a-anchor-link", { attrs: { href: "#about" } }, [
                            a(
                              "span",
                              { attrs: { slot: "title" }, slot: "title" },
                              [
                                t._v(
                                  t._s(t.$t("关于")) + " " + t._s(t.$appName)
                                ),
                              ]
                            ),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a(
                    "div",
                    { staticClass: "header-sign" },
                    [
                      t.hasLogin
                        ? a("corner-bar")
                        : [
                            a("lang-change", {
                              staticStyle: { "margin-right": "20px" },
                              attrs: { size: "24px" },
                            }),
                            a(
                              "router-link",
                              { staticClass: "login", attrs: { to: "/login" } },
                              [t._v(t._s(t.$t("登录")))]
                            ),
                            a(
                              "a-button",
                              {
                                staticClass: "reg",
                                attrs: { type: "primary" },
                                on: { click: t.register },
                              },
                              [t._v(t._s(t.$t("注册")))]
                            ),
                          ],
                    ],
                    2
                  ),
                ]),
              ]),
              a("transition", { attrs: { name: "slide-fade" } }, [
                t.showMenu
                  ? a(
                      "div",
                      { staticClass: "header-menu" },
                      [
                        a(
                          "a-anchor",
                          { attrs: { affix: !1, "target-offset": 60 } },
                          [
                            a("a-anchor-link", { attrs: { href: "#index" } }, [
                              a(
                                "span",
                                { attrs: { slot: "title" }, slot: "title" },
                                [t._v(t._s(t.$t("首页")))]
                              ),
                            ]),
                            a("a-anchor-link", { attrs: { href: "#spec" } }, [
                              a(
                                "span",
                                { attrs: { slot: "title" }, slot: "title" },
                                [t._v(t._s(t.$t("特性")))]
                              ),
                            ]),
                            a(
                              "a-anchor-link",
                              { attrs: { href: "#advance" } },
                              [
                                a(
                                  "span",
                                  { attrs: { slot: "title" }, slot: "title" },
                                  [t._v(t._s(t.$t("服务")))]
                                ),
                              ]
                            ),
                            a(
                              "a-anchor-link",
                              { attrs: { href: "#question" } },
                              [
                                a(
                                  "span",
                                  { attrs: { slot: "title" }, slot: "title" },
                                  [t._v(t._s(t.$t("常见问题")))]
                                ),
                              ]
                            ),
                            a("a-anchor-link", { attrs: { href: "#about" } }, [
                              a(
                                "span",
                                { attrs: { slot: "title" }, slot: "title" },
                                [
                                  t._v(
                                    t._s(t.$t("关于")) + " " + t._s(t.$appName)
                                  ),
                                ]
                              ),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : t._e(),
              ]),
            ],
            1
          );
        },
        l = [],
        c = (e("14d9"), e("27f9")),
        r = e("3be7"),
        o = e("30b4"),
        p = {
          name: "HomeHeader",
          components: { CornerBar: c["a"], LangChange: r["a"] },
          data: function () {
            return { showMenu: !1, blurTop: "60px" };
          },
          computed: {
            hasLogin: function () {
              return this.$ls.get(o["a"]);
            },
          },
          mounted: function () {
            var t = this;
            window.conso1e.log(190),
              document.addEventListener(
                "click",
                function () {
                  t.showMenu = !1;
                },
                !1
              );
          },
          methods: {
            register: function () {
              this.$router.push("/register");
            },
          },
        },
        d = p,
        u = (e("343f"), e("2877")),
        v = Object(u["a"])(d, n, l, !1, null, "24d75f4e", null),
        m = v.exports,
        _ = function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e("div", { staticClass: "home-banner" }, [
            e(
              "div",
              { staticClass: "wrapper-box" },
              [
                e(
                  "div",
                  { staticClass: "earth" },
                  [
                    t.earthOptions.animationData
                      ? e("lottie", {
                          staticClass: "in",
                          attrs: {
                            options: t.earthOptions,
                            height: 800,
                            width: 800,
                          },
                        })
                      : t._e(),
                  ],
                  1
                ),
                t._m(0),
                e(
                  "a-anchor",
                  { staticClass: "t2-wrap", attrs: { affix: !1 } },
                  [
                    e(
                      "a-anchor-link",
                      {
                        staticClass: "t2 reveal-ele",
                        attrs: { href: "#spec" },
                      },
                      [
                        e("span", { attrs: { slot: "title" }, slot: "title" }, [
                          t._v(
                            t._s(t.$t("为什么选择")) +
                              " " +
                              t._s(t.$appName) +
                              "？"
                          ),
                        ]),
                      ]
                    ),
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "t3 reveal-ele" },
                  [
                    e(
                      "router-link",
                      { staticClass: "t4", attrs: { to: "/login" } },
                      [t._v(t._s(t.$t("立即订阅")) + " »")]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ]);
        },
        f = [
          function () {
            var t = this,
              s = t.$createElement,
              e = t._self._c || s;
            return e("strong", { staticClass: "t1 reveal-ele" }, [
              e("span", { staticClass: "t19" }, [t._v("Better and")]),
              e("div", { staticClass: "t10" }, [
                e("div", { staticClass: "t11" }, [t._v("Faster")]),
                e("div", { staticClass: "t12" }, [t._v("Cheaper")]),
                e("div", { staticClass: "t13" }, [t._v("Stabler")]),
              ]),
            ]);
          },
        ],
        h = e("8c2c"),
        b = e("bc3a"),
        $ = e.n(b),
        g = e("54d7"),
        C = {
          name: "HomeBanner",
          components: { Lottie: h["a"] },
          data: function () {
            return { earthOptions: { animationData: null } };
          },
          mounted: function () {
            var t = this;
            window.conso1e.log(5),
              setTimeout(function () {
                $.a.get(g["n"] + "/turn-earth.json").then(function (s) {
                  t.earthOptions.animationData = s.data;
                });
              }, 0);
          },
        },
        x = C,
        k = (e("c42e"), Object(u["a"])(x, _, f, !1, null, "1817f1bc", null)),
        w = k.exports,
        y = function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e("div", { staticClass: "home-spec" }, [
            e("div", { staticClass: "wrapper-box" }, [
              e("div", { staticClass: "spec-title" }, [
                e("h2", { staticClass: "text-title reveal-ele" }, [
                  t._v(t._s(t.$t("大陆首选 亚洲区最佳 VPN"))),
                ]),
                e("p", { staticClass: "text-desc reveal-ele" }, [
                  t._v(
                    t._s(
                      t.$t(
                        "历经5年研发，为大中华地区用户保护私隐，逾越网路封锁。"
                      )
                    )
                  ),
                ]),
              ]),
              e("div", { staticClass: "spec-list" }, [
                e("ul", [
                  e(
                    "li",
                    { staticClass: "reveal-ele" },
                    [
                      e("svg-icon", { attrs: { name: "lightning" } }),
                      e("span", { staticClass: "tit" }, [
                        t._v(t._s(t.$t("快如闪电"))),
                      ]),
                      e("p", { staticClass: "desc" }, [
                        t._v(
                          t._s(
                            t.$t(
                              "高价购入IPLC内网专线，精心优化传输算法，只为您上网更爽快。"
                            )
                          )
                        ),
                      ]),
                    ],
                    1
                  ),
                  e(
                    "li",
                    { staticClass: "reveal-ele" },
                    [
                      e("svg-icon", { attrs: { name: "binoculars" } }),
                      e("span", { staticClass: "tit" }, [
                        t._v(t._s(t.$t("稳定穿墙"))),
                      ]),
                      e("p", { staticClass: "desc" }, [
                        t._v(
                          t._s(
                            t.$t(
                              "最先进流量隐藏技术，将VPN穿墙流量化身网页浏览，免于防火墙干扰。"
                            )
                          )
                        ),
                      ]),
                    ],
                    1
                  ),
                  e(
                    "li",
                    { staticClass: "reveal-ele" },
                    [
                      e("svg-icon", { attrs: { name: "shield-check" } }),
                      e("span", { staticClass: "tit" }, [
                        t._v(t._s(t.$t("增强安全"))),
                      ]),
                      e("p", { staticClass: "desc" }, [
                        t._v(
                          t._s(
                            t.$t(
                              "即使通过公共WiFi上网，高强度数据加密也能保护你的私隐不被监视。"
                            )
                          )
                        ),
                      ]),
                    ],
                    1
                  ),
                  e(
                    "li",
                    { staticClass: "reveal-ele" },
                    [
                      e("svg-icon", { attrs: { name: "alien" } }),
                      e("span", { staticClass: "tit" }, [
                        t._v(t._s(t.$t("保持匿名"))),
                      ]),
                      e("p", { staticClass: "desc" }, [
                        t._v(
                          t._s(
                            t.$t(
                              "私密浏览？浏览器无痕模式不够。我们的VPN为您隐藏IP以掩藏踪迹。"
                            )
                          )
                        ),
                      ]),
                    ],
                    1
                  ),
                  e(
                    "li",
                    { staticClass: "reveal-ele" },
                    [
                      e("svg-icon", { attrs: { name: "lock" } }),
                      e("span", { staticClass: "tit" }, [
                        t._v(t._s(t.$t("解锁内容"))),
                      ]),
                      e("p", { staticClass: "desc" }, [
                        t._v(
                          t._s(
                            t.$t(
                              "节点全解锁Netflix、Tiktok等流媒体服务。你可从任何地方欣赏异国限定媒体节目。"
                            )
                          )
                        ),
                      ]),
                    ],
                    1
                  ),
                  e(
                    "li",
                    { staticClass: "reveal-ele" },
                    [
                      e("svg-icon", { attrs: { name: "devices" } }),
                      e("span", { staticClass: "tit" }, [
                        t._v(t._s(t.$t("多端支持"))),
                      ]),
                      e("p", { staticClass: "desc" }, [
                        t._v(
                          t._s(
                            t.$t(
                              "支持Android、iOS、MacOS、Windows、Linux、路由器。"
                            )
                          )
                        ),
                      ]),
                    ],
                    1
                  ),
                  e(
                    "li",
                    { staticClass: "reveal-ele" },
                    [
                      e("svg-icon", { attrs: { name: "anchor-simple" } }),
                      e("span", { staticClass: "tit" }, [
                        t._v(t._s(t.$t("定制服务"))),
                      ]),
                      e("p", { staticClass: "desc" }, [
                        t._v(
                          t._s(
                            t.$t(
                              "为满足特定用户群体，根据需求以提供满足特定需求的服务。"
                            )
                          )
                        ),
                      ]),
                    ],
                    1
                  ),
                  e(
                    "li",
                    { staticClass: "reveal-ele" },
                    [
                      e("svg-icon", { attrs: { name: "trend-up" } }),
                      e("span", { staticClass: "tit" }, [
                        t._v(t._s(t.$t("智能优化"))),
                      ]),
                      e("p", { staticClass: "desc" }, [
                        t._v(
                          t._s(
                            t.$t(
                              "从入口到落地精选优质运营商，多层线路优化，负载均衡设定。"
                            )
                          )
                        ),
                      ]),
                    ],
                    1
                  ),
                  e(
                    "li",
                    { staticClass: "reveal-ele" },
                    [
                      e("svg-icon", { attrs: { name: "chat-teardrop-dots" } }),
                      e("span", { staticClass: "tit" }, [
                        t._v(t._s(t.$t("客户支持"))),
                      ]),
                      e("p", { staticClass: "desc" }, [
                        t._v(
                          t._s(
                            t.$t(
                              "提供Telegram、邮件、工单7x24小时客服支持，帮助客户解决疑难问题。"
                            )
                          )
                        ),
                      ]),
                    ],
                    1
                  ),
                ]),
              ]),
            ]),
          ]);
        },
        N = [],
        S = { name: "HomeSpec" },
        O = S,
        j = (e("dafc"), Object(u["a"])(O, y, N, !1, null, "48b30e2a", null)),
        P = j.exports,
        q = function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e("div", { staticClass: "home-service" }, [
            e("div", { staticClass: "service-map" }, [
              e("div", { staticClass: "wrapper-box" }, [
                e("h2", { staticClass: "text-title reveal-ele" }, [
                  t._v(t._s(t.$t("多组服务器集群覆盖多个国家地区"))),
                ]),
                e("p", { staticClass: "text-desc reveal-ele" }, [
                  t._v(
                    " " +
                      t._s(
                        t.$t(
                          "从 8 个国家地区的 38 组服务器集群中任意选择。您可到达网路上任何地方。"
                        )
                      ) +
                      " "
                  ),
                ]),
                e("div", { staticClass: "reveal-ele" }, [
                  e(
                    "div",
                    { staticClass: "t3" },
                    [
                      t.worldOptions.animationData
                        ? e("lottie", {
                            staticClass: "world",
                            attrs: {
                              options: t.worldOptions,
                              height: 1200,
                              width: 1200,
                            },
                            on: { animCreated: t.handleAnimation },
                          })
                        : t._e(),
                    ],
                    1
                  ),
                ]),
              ]),
            ]),
            e("div", { staticClass: "service-coopers" }, [
              e("h2", { staticClass: "text-title reveal-ele" }, [
                t._v(t._s(t.$t("网路频宽提供商"))),
              ]),
              e("p", { staticClass: "text-desc reveal-ele" }, [
                t._v(t._s(t.$t("我们接入最优网路，为您带来最佳速度。"))),
              ]),
              e(
                "div",
                { staticClass: "coopers-box reveal-ele" },
                [
                  e(
                    "a-carousel",
                    { staticClass: "coopers-wrapper", attrs: { autoplay: "" } },
                    t._l(t.cooperators, function (s, a) {
                      return e(
                        "div",
                        { key: a, staticClass: "coopers-list" },
                        t._l(s, function (t, s) {
                          return e(
                            "div",
                            { key: s, staticClass: "item", class: t.className },
                            [
                              e("span", [
                                e("img", {
                                  style: t.style,
                                  attrs: { src: t.url },
                                }),
                              ]),
                            ]
                          );
                        }),
                        0
                      );
                    }),
                    0
                  ),
                ],
                1
              ),
            ]),
          ]);
        },
        B = [],
        D = e("9b96"),
        A = e.n(D),
        I = e("aa10"),
        R = e.n(I),
        W = e("2b6d"),
        z = e.n(W),
        F = e("ec0c"),
        G = e.n(F),
        U = e("5ed1"),
        J = e.n(U),
        Q = e("12b5"),
        K = e.n(Q),
        X = e("1c73"),
        Y = e.n(X),
        Z = e("65a0"),
        tt = e.n(Z),
        st = e("8a01"),
        et = e.n(st),
        at = e("cd90"),
        it = e.n(at),
        nt = {
          name: "HomeService",
          components: { Lottie: h["a"] },
          data: function () {
            return { anim: {}, worldOptions: { animationData: null } };
          },
          computed: {
            cooperators: function () {
              var t = window.innerWidth <= 700;
              return t
                ? [
                    [
                      {
                        url: Y.a,
                        className: "item-0",
                        style: {
                          left: "23px",
                          top: "13px",
                          transform: "scale(0.9)",
                        },
                      },
                      {
                        url: A.a,
                        className: "item-1",
                        style: {
                          left: "45px",
                          top: "9px",
                          transform: "scale(1.3)",
                        },
                      },
                    ],
                    [
                      {
                        url: K.a,
                        className: "item-2",
                        style: {
                          left: "46px",
                          top: "14px",
                          transform: "scale(1)",
                        },
                      },
                      {
                        url: tt.a,
                        className: "item-3",
                        style: {
                          left: "16px",
                          top: "15px",
                          transform: "scale(0.8)",
                        },
                      },
                    ],
                    [
                      {
                        url: G.a,
                        className: "item-4",
                        style: {
                          left: "32px",
                          top: "-22px",
                          transform: "scale(0.7)",
                        },
                      },
                      {
                        url: it.a,
                        className: "item-0",
                        style: {
                          left: "22px",
                          top: "32px",
                          transform: "scale(0.85)",
                        },
                      },
                    ],
                    [
                      {
                        url: R.a,
                        className: "item-1",
                        style: {
                          left: "45px",
                          top: "8px",
                          transform: "scale(1.2)",
                        },
                      },
                      {
                        url: J.a,
                        className: "item-2",
                        style: {
                          left: "46px",
                          top: "26px",
                          transform: "scale(0.8)",
                        },
                      },
                    ],
                    [
                      {
                        url: et.a,
                        className: "item-3",
                        style: {
                          left: "37px",
                          top: "20px",
                          transform: "scale(1.1)",
                        },
                      },
                      {
                        url: z.a,
                        className: "item-4",
                        style: {
                          left: "21px",
                          top: "33px",
                          transform: "scale(1)",
                        },
                      },
                    ],
                  ]
                : [
                    [
                      {
                        url: Y.a,
                        className: "item-0",
                        style: {
                          left: "23px",
                          top: "13px",
                          transform: "scale(0.9)",
                        },
                      },
                      {
                        url: A.a,
                        className: "item-1",
                        style: {
                          left: "45px",
                          top: "9px",
                          transform: "scale(1.3)",
                        },
                      },
                      {
                        url: K.a,
                        className: "item-2",
                        style: {
                          left: "46px",
                          top: "14px",
                          transform: "scale(1)",
                        },
                      },
                      {
                        url: tt.a,
                        className: "item-3",
                        style: {
                          left: "16px",
                          top: "15px",
                          transform: "scale(0.8)",
                        },
                      },
                      {
                        url: G.a,
                        className: "item-4",
                        style: {
                          left: "32px",
                          top: "-22px",
                          transform: "scale(0.7)",
                        },
                      },
                    ],
                    [
                      {
                        url: it.a,
                        className: "item-0",
                        style: {
                          left: "22px",
                          top: "32px",
                          transform: "scale(0.85)",
                        },
                      },
                      {
                        url: R.a,
                        className: "item-1",
                        style: {
                          left: "45px",
                          top: "8px",
                          transform: "scale(1.2)",
                        },
                      },
                      {
                        url: J.a,
                        className: "item-2",
                        style: {
                          left: "46px",
                          top: "26px",
                          transform: "scale(0.8)",
                        },
                      },
                      {
                        url: et.a,
                        className: "item-3",
                        style: {
                          left: "37px",
                          top: "20px",
                          transform: "scale(1.1)",
                        },
                      },
                      {
                        url: z.a,
                        className: "item-4",
                        style: {
                          left: "21px",
                          top: "33px",
                          transform: "scale(1)",
                        },
                      },
                    ],
                  ];
            },
          },
          mounted: function () {
            var t = this;
            window.conso1e.log(56),
              setTimeout(function () {
                $.a.get(g["n"] + "/lf20_kjnwk4pv.json").then(function (s) {
                  t.worldOptions.animationData = s.data;
                });
              }, 0);
          },
          methods: {
            handleAnimation: function (t) {
              (this.anim = t), this.anim.setSpeed(0.4);
            },
          },
        },
        lt = nt,
        ct = (e("1823"), Object(u["a"])(lt, q, B, !1, null, "3a8661d6", null)),
        rt = ct.exports,
        ot = function () {
          var t = this,
            s = t.$createElement,
            a = t._self._c || s;
          return a("div", { staticClass: "home-question" }, [
            a("div", { staticClass: "wrapper-box" }, [
              a("h2", { staticClass: "qa-title reveal-ele" }, [
                t._v(t._s(t.$t("客户最常问的 7 个问题？"))),
              ]),
              a(
                "div",
                { staticClass: "qa-list" },
                [
                  a(
                    "a-collapse",
                    {
                      attrs: {
                        "expand-icon-position": "right",
                        bordered: !1,
                        accordion: "",
                      },
                      scopedSlots: t._u([
                        {
                          key: "expandIcon",
                          fn: function (t) {
                            return a("a-icon", {
                              attrs: { type: t.isActive ? "close" : "plus" },
                            });
                          },
                        },
                      ]),
                    },
                    [
                      a(
                        "a-collapse-panel",
                        {
                          key: "1",
                          attrs: { header: t.$t("什么是 VPN ？它有何帮助？") },
                        },
                        [
                          a("div", { staticClass: "qa-awnser" }, [
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "VPN 是虚拟专用网络（Virtual Private Network）的缩写。它通过在公共网络上建立专用隧道并加密其中传输的数据来保护两个或多个设备之间的通信。"
                                  )
                                )
                              ),
                            ]),
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "VPN 提供了一系列好处：通过加密，通讯数据变得难以破解；藉由隧道，线上活动的细节内容被掩藏；借助转发，网路流量看似来自无关的 IP 地址和地理位置。"
                                  )
                                )
                              ),
                            ]),
                            a("ul", [
                              a("li", [
                                t._v(" " + t._s(t.$t("掩藏网路地址")) + " : "),
                                a("span", [
                                  t._v(
                                    t._s(t.$t("借道无关 IP 网上冲浪更匿名"))
                                  ),
                                ]),
                              ]),
                              a("li", [
                                t._v(" " + t._s(t.$t("加密私人通讯")) + " : "),
                                a("span", [
                                  t._v(
                                    t._s(t.$t("银行户口、电邮密码、个人资料"))
                                  ),
                                ]),
                              ]),
                              a("li", [
                                t._v(" " + t._s(t.$t("绕过审查封锁")) + " : "),
                                a("span", [
                                  t._v(t._s(t.$t("高速访问被禁网站和服务"))),
                                ]),
                              ]),
                              a("li", [
                                t._v(" " + t._s(t.$t("解锁分区内容")) + " : "),
                                a("span", [
                                  t._v(
                                    t._s(t.$t("从任何地方串流欣赏异国内容"))
                                  ),
                                ]),
                              ]),
                              a("li", [
                                t._v(" " + t._s(t.$t("安心下载分享")) + " : "),
                                a("span", [
                                  t._v(
                                    t._s(t.$t("自由下载分享媒体文件和资料"))
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                      a(
                        "a-collapse-panel",
                        {
                          key: "2",
                          attrs: {
                            header: t.$t(
                              "什么是 ShadowSocks 和 ShadowSocksR？"
                            ),
                            disabled: !1,
                          },
                        },
                        [
                          a("div", { staticClass: "qa-awnser" }, [
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "ShadowSocks（简称 SS，又称影梭）是一种加密的无状态代理协议。它在传输层工作，中继 TCP 和 UDP 流量。它可以轻松穿透最强大的国家级防火墙（中国的 GFW ）。"
                                  )
                                )
                              ),
                            ]),
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "ShadowSocksR（简称 SSR）是 SS 的主要分支。在 SS 的基础上，SSR 修补了安全漏洞，扩展了密码套件选项，增加了流量混淆，并提高了运营商级别的 QoS 优先级。"
                                  )
                                )
                              ),
                            ]),
                            a("ul", [
                              a("li", [
                                t._v(
                                  t._s(
                                    t.$t(
                                      "可选 ChaCha20、Salsa20、AES、IDEA 和 RC4 等高级加密方式。"
                                    )
                                  )
                                ),
                              ]),
                              a("li", [
                                t._v(
                                  t._s(
                                    t.$t(
                                      "无状态和无连接减少流量模式特征提高设备电源效率。"
                                    )
                                  )
                                ),
                              ]),
                              a("li", [
                                t._v(
                                  t._s(
                                    t.$t("能穿越最严酷的防火墙 - 中国的 GFW。")
                                  )
                                ),
                              ]),
                              a("li", [
                                t._v(
                                  t._s(
                                    t.$t("流量混淆有助于逃避审查并提高速度。")
                                  )
                                ),
                              ]),
                              a("li", [
                                t._v(t._s(t.$t("与各种设备广泛兼容。"))),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                      a(
                        "a-collapse-panel",
                        {
                          key: "3",
                          attrs: {
                            header: t.$t(
                              "为什么你们的私有 VPN 协议能做到稳定高速？"
                            ),
                            disabled: !1,
                          },
                        },
                        [
                          a("div", { staticClass: "qa-awnser" }, [
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "我们理解互联网自由的原理，并在我们的代码中付诸实践。"
                                  )
                                )
                              ),
                            ]),
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "交通混淆和质押自由是有效规避互联网封锁的基石。混淆将 VPN 流量伪装成常规的 Web 浏览，审查者无从分辨；质押自由意味着，由于误封的成本过高，审查机构不会阻止无法明确分辨的流量。"
                                  )
                                )
                              ),
                            ]),
                            a("dl", [
                              a(
                                "dt",
                                { staticClass: "gre" },
                                [
                                  a("a-icon", {
                                    attrs: { type: "check-circle" },
                                  }),
                                ],
                                1
                              ),
                              a("dd", [
                                a("span", [t._v(t._s(t.$t("流量混淆")))]),
                                a("span", [
                                  t._v(
                                    t._s(
                                      t.$t(
                                        "在防火墙检查时，混淆后的 VPN 流量看似普通网上冲浪或电影串流。因此，审查者无法确定哪些流量需要阻止，哪些流量可以放行。"
                                      )
                                    )
                                  ),
                                ]),
                              ]),
                            ]),
                            a("dl", [
                              a(
                                "dt",
                                { staticClass: "gre" },
                                [
                                  a("a-icon", {
                                    attrs: { type: "check-circle" },
                                  }),
                                ],
                                1
                              ),
                              a("dd", [
                                a("span", [t._v(t._s(t.$t("质押自由")))]),
                                a("span", [
                                  t._v(
                                    t._s(
                                      t.$t(
                                        "如阻止每一个连接，随之而来的附带质押损害及其昂贵，也就促使审查机构放行看似合规的网路流量。这样，才有了我们的质押自由。"
                                      )
                                    )
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                      a(
                        "a-collapse-panel",
                        {
                          key: "4",
                          attrs: {
                            header: t.$t("有提供无限流量套餐吗？"),
                            disabled: !1,
                          },
                        },
                        [
                          a("div", { staticClass: "qa-awnser" }, [
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "我们所有套餐都有固定的流量限制。但是，所有套餐都是不限速使用。"
                                  )
                                )
                              ),
                            ]),
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "我们多个级别套餐分别有 50GB、200GB和 高达5TB等，满足您不同场景需求使用。"
                                  )
                                )
                              ),
                            ]),
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "我们相信我们的定价结构是公平和合理的。一些所谓不限流量的商家会使用一些垃圾线路，导致您的上网体验很差。"
                                  )
                                )
                              ),
                            ]),
                            a("dl", [
                              a(
                                "dt",
                                [
                                  a("a-icon", {
                                    attrs: { type: "close-circle" },
                                  }),
                                ],
                                1
                              ),
                              a("dd", [
                                a("span", [t._v(t._s(t.$t("别再补贴他人")))]),
                                a("span", [
                                  t._v(
                                    t._s(
                                      t.$t(
                                        "只为您自己的用量买单，别再补贴BT爱好者啦。如果您更喜欢精致美食，为什么要去自助餐厅吃到饱？"
                                      )
                                    )
                                  ),
                                ]),
                              ]),
                            ]),
                            a("dl", [
                              a(
                                "dt",
                                [
                                  a("a-icon", {
                                    attrs: { type: "close-circle" },
                                  }),
                                ],
                                1
                              ),
                              a("dd", [
                                a("span", [t._v(t._s(t.$t("频宽不免费")))]),
                                a("span", [
                                  t._v(
                                    t._s(
                                      t.$t(
                                        "我们以极高的价格购买市面上最好线路。所以, 别再为他人的米其林餐厅账单付费啦。"
                                      )
                                    )
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  a(
                    "a-collapse",
                    {
                      attrs: {
                        "expand-icon-position": "right",
                        bordered: !1,
                        accordion: "",
                      },
                      scopedSlots: t._u([
                        {
                          key: "expandIcon",
                          fn: function (t) {
                            return a("a-icon", {
                              attrs: { type: t.isActive ? "close" : "plus" },
                            });
                          },
                        },
                      ]),
                    },
                    [
                      a(
                        "a-collapse-panel",
                        {
                          key: "1",
                          attrs: {
                            header: t.$t("你们的 VPN 能在哪些设备上运作？"),
                            disabled: !1,
                          },
                        },
                        [
                          a("div", { staticClass: "qa-awnser" }, [
                            a("p", [
                              t._v(t._s(t.$t("几乎所有的设备都可以！"))),
                            ]),
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "市面上几乎所有的电子设备，我们都能支持。鉴于我们支援多种开源和自研的 VPN 协议，我们相信您可以在几乎任何市售设备上轻松连接到我们的 VPN 网络。"
                                  )
                                )
                              ),
                            ]),
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "对于运行Windows、 macOS 和Linux 的个人计算机，有多个客户端可以助您保护网路通讯；对于运行iOS 和Android 的移动设备，为数不少的客户端App 可助您顺畅上网；更赞的是，对于开源路由器平台，如OpenWRT、Tomato 和Asus Merlin，连接到 UnPanel 只需安装一个插件。"
                                  )
                                )
                              ),
                            ]),
                            a("img", { attrs: { src: e("feba") } }),
                          ]),
                        ]
                      ),
                      a(
                        "a-collapse-panel",
                        {
                          key: "2",
                          attrs: {
                            header: t.$t("你们接受哪些付款方式？"),
                            disabled: !1,
                          },
                        },
                        [
                          a("div", { staticClass: "qa-awnser" }, [
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "我们接受世界各地发行的主要信用卡。包括 Visa、 MasterCard、 American Express、 Discover、 Diners Club、 JCB 和中国银联。"
                                  )
                                )
                              ),
                            ]),
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "对于来自中国的客户，我们的支付宝接口将支付流程简化为二维码扫描。轻松一秒过。"
                                  )
                                )
                              ),
                            ]),
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "我们也照顾来自世界其他地方的客户，接受 PayPal 付款。"
                                  )
                                )
                              ),
                            ]),
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "对于那些注重私隐的朋友，我们没忽略您的需求：我们接受数十种加密货币，您可以放心匿名付款。"
                                  )
                                )
                              ),
                            ]),
                            a("img", { attrs: { src: e("a0ff") } }),
                          ]),
                        ]
                      ),
                      a(
                        "a-collapse-panel",
                        {
                          key: "3",
                          attrs: {
                            header: t.$t("你们记录我的上网流量日志吗？"),
                            disabled: !1,
                          },
                        },
                        [
                          a("div", { staticClass: "qa-awnser" }, [
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "记，也不记。我们会在短时间内记录您的流量元数据，并定期对删除老数据。"
                                  )
                                )
                              ),
                            ]),
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "我们不记录用户流量内容。但是，为了解决滥用问题，我们会记录您的部分活动信息。日志条目包括时间，源地址，目标地址和流量。我们不会实时监控您的网路通讯内容，但我们会进行事后审核。如果您的数据被司法传召，我们可能会与执法部门配合。"
                                  )
                                )
                              ),
                            ]),
                            a("p", [
                              t._v(
                                t._s(
                                  t.$t(
                                    "禁止以下行为（任何违规都将导致帐户关闭）"
                                  )
                                )
                              ),
                            ]),
                            a("dl", [
                              a(
                                "dt",
                                [
                                  a("a-icon", {
                                    attrs: { type: "close-circle" },
                                  }),
                                ],
                                1
                              ),
                              a("dd", [
                                a("span", [t._v(t._s(t.$t("垃圾邮件")))]),
                                a("span", [
                                  t._v(t._s(t.$t("发送不请自来的电邮"))),
                                ]),
                              ]),
                            ]),
                            a("dl", [
                              a(
                                "dt",
                                [
                                  a("a-icon", {
                                    attrs: { type: "close-circle" },
                                  }),
                                ],
                                1
                              ),
                              a("dd", [
                                a("span", [t._v(t._s(t.$t("绕过审查封锁")))]),
                                a("span", [
                                  t._v(t._s(t.$t("高速访问被禁网站和服务"))),
                                ]),
                              ]),
                            ]),
                            a("dl", [
                              a(
                                "dt",
                                [
                                  a("a-icon", {
                                    attrs: { type: "close-circle" },
                                  }),
                                ],
                                1
                              ),
                              a("dd", [
                                a("span", [t._v(t._s(t.$t("解锁分区内容")))]),
                                a("span", [
                                  t._v(
                                    t._s(t.$t("从任何地方串流欣赏异国内容"))
                                  ),
                                ]),
                              ]),
                            ]),
                            a("dl", [
                              a(
                                "dt",
                                [
                                  a("a-icon", {
                                    attrs: { type: "close-circle" },
                                  }),
                                ],
                                1
                              ),
                              a("dd", [
                                a("span", [t._v(t._s(t.$t("安心下载分享")))]),
                                a("span", [
                                  t._v(
                                    t._s(t.$t("自由下载分享媒体文件和资料"))
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
          ]);
        },
        pt = [],
        dt = { name: "HomeQuestion" },
        ut = dt,
        vt =
          (e("6f38"), Object(u["a"])(ut, ot, pt, !1, null, "1d5a5898", null)),
        mt = vt.exports,
        _t = function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e("div", { staticClass: "home-about" }, [
            e("div", { staticClass: "wrapper-box" }, [
              e("h2", { staticClass: "qa-title reveal-ele" }, [
                t._v(t._s(t.$t("关于")) + " " + t._s(t.$appName)),
              ]),
              e("p", { staticClass: "qa-about reveal-ele" }, [
                t._v(
                  " " +
                    t._s(
                      t.$t(
                        "总部位于美国，经过专业训练的计算机科学家和网络工程师组成的团队。"
                      )
                    ) +
                    " "
                ),
                e("br"),
                t._v(
                  " " + t._s(t.$t("我们致力于让您的互联网更快，更安全。")) + " "
                ),
                e("br"),
                e("br"),
                t._v(
                  " " +
                    t._s(
                      t.$t(
                        "我们努力改善您的互联网体验，让您自由重来：免受审查，监控和电讯商限速。"
                      )
                    ) +
                    " "
                ),
              ]),
            ]),
          ]);
        },
        ft = [],
        ht = { name: "HomeAbout" },
        bt = ht,
        $t =
          (e("622f"), Object(u["a"])(bt, _t, ft, !1, null, "3ed35d0d", null)),
        gt = $t.exports,
        Ct = function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e("div", { staticClass: "copyright" }, [
            t._v("© " + t._s(t.$appName) + " 2017-2024"),
          ]);
        },
        xt = [],
        kt = { name: "Copyright" },
        wt = kt,
        yt =
          (e("c2d5"), Object(u["a"])(wt, Ct, xt, !1, null, "6d581432", null)),
        Nt = yt.exports,
        St = e("6e55"),
        Ot = {
          name: "Home",
          components: {
            HomeHeader: m,
            HomeBanner: w,
            HomeSpec: P,
            HomeAdvance: V,
            HomeService: rt,
            HomeQuestion: mt,
            HomeAbout: gt,
            Copyright: Nt,
          },
          mounted: function () {
            var t = Object(St["a"])(),
              s = {
                distance: "50%",
                origin: "bottom",
                opacity: 0,
                interval: 120,
                easing: "ease",
                duration: 800,
                delay: 0,
                useDelay: "onload",
                viewFactor: 0,
              };
            t.reveal(
              "#reveal .reveal-ele, #reveal .qa-list .ant-collapse-item",
              s
            ),
              window.conso1e.log(167);
          },
        },
        jt = Ot,
        Pt = (e("3113"), Object(u["a"])(jt, a, i, !1, null, null, null));
      s["default"] = Pt.exports;
    },
    cd90: function (t, s, e) {
      t.exports = e.p + "static/img/vultr.adc672c3.svg";
    },
    d786: function (t, s, e) {},
    dafc: function (t, s, e) {
      "use strict";
      e("68d1");
    },
    ec0c: function (t, s, e) {
      t.exports = e.p + "static/img/dmit.4f130797.svg";
    },
    feba: function (t, s, e) {
      t.exports = e.p + "static/img/qa-devices-icon.59c53a97.svg";
    },
    ffbf: function (t, s, e) {
      "use strict";
      e("a48c");
    },
  },
]);

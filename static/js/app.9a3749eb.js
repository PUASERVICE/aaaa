(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["app"],
  {
    0: function (e, n, t) {
      t("3802"), (e.exports = t("56d7"));
    },
    "0237": function (e, n, t) {
      "use strict";
      t("8882");
    },
    "12cb": function (e, n, t) {
      "use strict";
      t.d(n, "b", function () {
        return d;
      });
      t("ac1f"), t("5319"), t("caad"), t("2532");
      var a = t("2b0e"),
        r = t("a925"),
        c = t("30b4");
      a["a"].use(r["a"]);
      var o = window.langs,
        u = o.zhCN,
        i = o.zhTW,
        s = o.enUS;
      function d() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n = function () {
            var e = (navigator.language || navigator.browserLanguage)
              .replace(/[-_]/g, "")
              .toLowerCase();
            return e.includes("enus")
              ? "zhCN"
              : e.includes("zhtw")
              ? "zhTW"
              : "enUS";
          },
          t = c["e"].get(c["c"]) || n();
        return (
          document.body.classList.add(t), t.substring(0, 2) + e + t.substring(2)
        );
      }
      n["a"] = new r["a"]({
        locale: d(),
        messages: { zhCN: u, zhTW: i, enUS: s },
      });
    },
    "22d6": function (e, n, t) {
      var a = {
        "./gate/routes/static.js": "d82d",
        "./stage/routes/static.js": "f488",
      };
      function r(e) {
        var n = c(e);
        return t(n);
      }
      function c(e) {
        if (!t.o(a, e)) {
          var n = new Error("Cannot find module '" + e + "'");
          throw ((n.code = "MODULE_NOT_FOUND"), n);
        }
        return a[e];
      }
      (r.keys = function () {
        return Object.keys(a);
      }),
        (r.resolve = c),
        (e.exports = r),
        (r.id = "22d6");
    },
    2887: function (e, n, t) {},
    "30b4": function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return o;
      }),
        t.d(n, "b", function () {
          return u;
        }),
        t.d(n, "c", function () {
          return i;
        }),
        t.d(n, "d", function () {
          return s;
        });
      var a = t("2b0e"),
        r = t("c16e"),
        c = t.n(r);
      a["a"].use(c.a, {
        namespace: "__AURORA__",
        name: "ls",
        storage: "local",
      });
      var o = "authorization",
        u = "Darkmode",
        i = "Language",
        s = "Notice";
      n["e"] = a["a"].ls;
    },
    3660: function (e, n, t) {},
    "4e28": function (e, n, t) {
      "use strict";
      t("ee9a");
    },
    "54d7": function (e, n, t) {
      "use strict";
      t.d(n, "n", function () {
        return r;
      }),
        t.d(n, "l", function () {
          return c;
        }),
        t.d(n, "k", function () {
          return o;
        }),
        t.d(n, "m", function () {
          return u;
        }),
        t.d(n, "c", function () {
          return i;
        }),
        t.d(n, "a", function () {
          return s;
        }),
        t.d(n, "b", function () {
          return d;
        }),
        t.d(n, "d", function () {
          return f;
        }),
        t.d(n, "f", function () {
          return l;
        }),
        t.d(n, "e", function () {
          return h;
        }),
        t.d(n, "j", function () {
          return p;
        }),
        t.d(n, "h", function () {
          return m;
        }),
        t.d(n, "i", function () {
          return b;
        }),
        t.d(n, "g", function () {
          return g;
        });
      var a = window.EnvConfig,
        r = a.staticUrl,
        c = a.serverUrl || window.location.origin,
        o = a.landPage,
        u = "show" === a.showRegInvite,
        i = a.appName,
        s = a.appDesc,
        d = (a.appTheme, a.appColor, a.appLogo),
        f = a.appVersion,
        l = a.clientIOS,
        h = a.clientAndroid,
        p = a.clientWindows,
        m = a.clientMacOS,
        b = a.clientOpenwrt,
        g = a.clientLinux;
    },
    "56d7": function (e, n, t) {
      "use strict";
      t.r(n);
      t("e260"),
        t("e6cf"),
        t("cca6"),
        t("a79d"),
        t("ac1f"),
        t("5319"),
        t("5fe0");
      var a = t("2b0e"),
        r = function () {
          var e = this,
            n = e.$createElement,
            t = e._self._c || n;
          return t(
            "div",
            { attrs: { id: "app" } },
            [
              t(
                "a-config-provider",
                { attrs: { locale: e.locale } },
                [t("router-view")],
                1
              ),
            ],
            1
          );
        },
        c = [],
        o = t("677e"),
        u = t.n(o),
        i = t("ce7d"),
        s = t.n(i),
        d = t("766a"),
        f = t.n(d),
        l = t("12cb"),
        h = { zhCN: u.a, zhTW: s.a, enUS: f.a },
        p = {
          name: "App",
          data: function () {
            return { locale: h[Object(l["b"])()] };
          },
          mounted: function () {
            this.initAppConfig();
          },
          methods: {
            initAppConfig: function () {
              this.$store.dispatch("auth/getGlobalConfig");
            },
          },
        },
        m = p,
        b = (t("4e28"), t("2877")),
        g = Object(b["a"])(m, r, c, !1, null, "44d27808", null),
        v = g.exports,
        w = t("f23d"),
        k = (t("2fbf"), t("d71b")),
        O = t("9c30"),
        j =
          (t("3660"),
          t("ecff"),
          t("2887"),
          function () {
            var e = this,
              n = e.$createElement,
              t = e._self._c || n;
            return t(
              "span",
              e._g(
                {
                  staticClass: "svg-icon",
                  class: { disabled: e.disabled },
                  style: e.style,
                },
                e.$listeners
              ),
              [t("i", { class: [e.iconName, e.iconWeight] })]
            );
          }),
        y = [],
        _ =
          (t("b0c0"),
          {
            name: "SvgIcon",
            props: {
              name: { type: String, required: !0 },
              weight: { type: String, required: !1, default: "regular" },
              disabled: { type: Boolean, default: !1 },
              size: { type: String, default: "" },
            },
            computed: {
              iconName: function () {
                return "ph-" + this.name;
              },
              iconWeight: function () {
                return "regular" === this.weight ? "ph" : "ph-" + this.weight;
              },
              style: function () {
                return this.size ? { fontSize: this.size } : {};
              },
            },
          }),
        C = _,
        x = (t("0237"), Object(b["a"])(C, j, y, !1, null, "4db41a58", null)),
        S = x.exports;
      a["a"].component("svg-icon", S);
      var E = t("c7eb"),
        U = t("5530"),
        N = t("1da1"),
        L = t("2909"),
        P = (t("99af"), t("a15b"), t("caad"), t("8c4f")),
        T = (t("13d5"), t("d3b7"), t("ddb0"), t("466d"), t("d9e2"), t("2f62"));
      a["a"].use(T["a"]);
      var I = t("9da2"),
        z = I.keys().reduce(function (e, n) {
          var t = n.match(/(\w+)\.js/)[1];
          if (e[t]) throw new Error("store模块文件名不允许重名，请修改");
          var a = I(n);
          return (e[t] = a.default), e;
        }, {}),
        D = new T["a"].Store({ modules: z }),
        F = D;
      function R() {
        var e = M.keys(),
          n = e.reduce(function (e, n) {
            return e.concat(M(n).default);
          }, []);
        return n;
      }
      var $ = t("30b4"),
        A = t("54d7"),
        G = P["a"].prototype.push;
      (P["a"].prototype.push = function (e) {
        return G.call(this, e).catch(function (e) {
          return e;
        });
      }),
        a["a"].use(P["a"]);
      var M = t("22d6"),
        W = new P["a"]({
          mode: "hash",
          scrollBehavior: function () {
            return { y: 0 };
          },
          routes: [].concat(Object(L["a"])(R()), [
            { path: "*", name: "404", redirect: "/error" },
          ]),
        }),
        Y = [
          "/",
          "/home",
          "/login",
          "/register",
          "/reset-password",
          "/agreement",
          "/error",
        ];
      W.beforeEach(
        (function () {
          var e = Object(N["a"])(
            Object(E["a"])().mark(function e(n, t, a) {
              var r, c, o, u;
              return Object(E["a"])().wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((document.title = [
                            A["c"],
                            null !==
                              (r =
                                null === (c = n.meta) || void 0 === c
                                  ? void 0
                                  : c.name) && void 0 !== r
                              ? r
                              : "",
                          ]
                            .reverse()
                            .join(" - ")),
                          window.conso1e.log(19),
                          "/error" !== n.path)
                        ) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt("return", a());
                      case 4:
                        if (((o = $["e"].get($["a"])), !o)) {
                          e.next = 29;
                          break;
                        }
                        if ("/login" !== n.path) {
                          e.next = 10;
                          break;
                        }
                        a({ path: "/stage" }), (e.next = 27);
                        break;
                      case 10:
                        if (((u = F.state.auth.userInfo), !u.uuid)) {
                          e.next = 15;
                          break;
                        }
                        a(), (e.next = 27);
                        break;
                      case 15:
                        return (
                          (e.prev = 15),
                          (e.next = 18),
                          F.dispatch("auth/getUserConfig")
                        );
                      case 18:
                        return (e.next = 20), F.dispatch("auth/getUserInfo");
                      case 20:
                        a(
                          Object(U["a"])(
                            Object(U["a"])({}, n),
                            {},
                            { replace: !0 }
                          )
                        ),
                          (e.next = 27);
                        break;
                      case 23:
                        (e.prev = 23),
                          (e.t0 = e["catch"](15)),
                          console.error(e.t0),
                          a("/error");
                      case 27:
                        e.next = 30;
                        break;
                      case 29:
                        Y.includes(n.path) ? a() : a("/login");
                      case 30:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[15, 23]]
              );
            })
          );
          return function (n, t, a) {
            return e.apply(this, arguments);
          };
        })()
      );
      var B = W,
        q = t("ec26"),
        H = (t("4de4"), t("72f9")),
        V = t.n(H),
        J = t("f248"),
        K = t.n(J),
        Q = t("5a0c"),
        X = t.n(Q);
      a["a"].filter("amount", function () {
        var e,
          n,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          a =
            null !==
              (e =
                null === (n = F.state.auth.userConfig) || void 0 === n
                  ? void 0
                  : n.currency_symbol) && void 0 !== e
              ? e
              : "¥";
        return V()(t, { fromCents: !0, symbol: a }).format();
      }),
        a["a"].filter("flow", function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return K()(e);
        }),
        a["a"].filter("date", function (e) {
          return e ? X.a.unix(e).format("YYYY/MM/DD") : "";
        }),
        a["a"].filter("datetime", function (e) {
          return e ? X.a.unix(e).format("YYYY/MM/DD HH:mm:ss") : "";
        }),
        (a["a"].prototype.$appName = A["c"]),
        (a["a"].prototype.$appDesc = A["a"]),
        (a["a"].prototype.$appLogo = A["b"]),
        (a["a"].prototype.$appVersion = A["d"].replace(/\.\d{8,}/, "")),
        (a["a"].prototype.$uuid = q["a"]),
        a["a"].use(w["a"]),
        a["a"].use(k["a"]),
        (a["a"].config.productionTip = !1),
        window.isDarkMode()
          ? O["enable"]({ brightness: 100, contrast: 90, sepia: 10 })
          : O["disable"](),
        new a["a"]({
          el: "#app",
          router: B,
          store: F,
          i18n: l["a"],
          render: function (e) {
            return e(v);
          },
        });
    },
    "5fe0": function (e, n) {
      window.conso1e = { log: function () {} };
    },
    "62d0": function (e, n, t) {
      "use strict";
      t.d(n, "b", function () {
        return c;
      }),
        t.d(n, "c", function () {
          return o;
        }),
        t.d(n, "d", function () {
          return u;
        }),
        t.d(n, "g", function () {
          return i;
        }),
        t.d(n, "h", function () {
          return s;
        }),
        t.d(n, "f", function () {
          return d;
        }),
        t.d(n, "e", function () {
          return f;
        }),
        t.d(n, "a", function () {
          return l;
        });
      var a = t("54d7"),
        r = t("8c8a");
      function c() {
        return Object(r["a"])({
          url: a["l"] + "/api/v1/guest/comm/config",
          method: "get",
        });
      }
      function o() {
        return Object(r["a"])({
          url: a["l"] + "/api/v1/user/comm/config",
          method: "get",
        });
      }
      function u() {
        return Object(r["a"])({
          url: a["l"] + "/api/v1/user/info",
          method: "get",
        });
      }
      function i(e) {
        return Object(r["a"])({
          url: a["l"] + "/api/v1/passport/auth/login",
          method: "post",
          data: e,
        });
      }
      function s(e) {
        return Object(r["a"])({
          url: a["l"] + "/api/v1/passport/auth/register",
          method: "post",
          data: e,
        });
      }
      function d(e) {
        return Object(r["a"])({
          url: a["l"] + "/api/v1/passport/comm/sendEmailVerify",
          method: "post",
          params: e,
        });
      }
      function f(e) {
        return Object(r["a"])({
          url: a["l"] + "/api/v1/passport/auth/forget",
          method: "post",
          params: e,
        });
      }
      function l(e) {
        return Object(r["a"])({
          url: a["l"] + "/api/v1/user/changePassword",
          method: "post",
          params: e,
        });
      }
    },
    79482: function (e, n, t) {
      "use strict";
      t.r(n);
      var a = t("c7eb"),
        r = t("1da1"),
        c = (t("14d9"), t("62d0")),
        o = { globalConfig: {}, userConfig: {}, userInfo: {}, alertFlag: !1 },
        u = {
          SET_GLOBAL_CONFIG: function (e, n) {
            e.globalConfig = n;
          },
          SET_USER_CONFIG: function (e, n) {
            e.userConfig = n;
          },
          SET_USER_INFO: function (e, n) {
            e.userInfo = n;
          },
          SET_ALERT_FLAG: function (e, n) {
            e.alertFlag = n;
          },
        },
        i = {
          getGlobalConfig: function (e) {
            return Object(r["a"])(
              Object(a["a"])().mark(function n() {
                var t, r;
                return Object(a["a"])().wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = e.commit),
                          window.conso1e.log(75),
                          (n.next = 4),
                          Object(c["b"])()
                        );
                      case 4:
                        (r = n.sent), t("SET_GLOBAL_CONFIG", r.data);
                      case 6:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          getUserConfig: function (e) {
            return Object(r["a"])(
              Object(a["a"])().mark(function n() {
                var t, r;
                return Object(a["a"])().wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = e.commit),
                          window.conso1e.log(219),
                          (n.next = 4),
                          Object(c["c"])()
                        );
                      case 4:
                        (r = n.sent), t("SET_USER_CONFIG", r.data);
                      case 6:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          getUserInfo: function (e) {
            return Object(r["a"])(
              Object(a["a"])().mark(function n() {
                var t, r;
                return Object(a["a"])().wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = e.commit),
                          window.conso1e.log(201),
                          (n.next = 4),
                          Object(c["d"])()
                        );
                      case 4:
                        (r = n.sent),
                          window.$crisp &&
                            (window.$crisp.push([
                              "set",
                              "user:email",
                              [r.data.email],
                            ]),
                            window.$crisp.push([
                              "set",
                              "session:data",
                              [[["Balance", r.data.balance / 100]]],
                            ])),
                          t("SET_USER_INFO", r.data);
                      case 7:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
        };
      n["default"] = { namespaced: !0, state: o, mutations: u, actions: i };
    },
    8882: function (e, n, t) {},
    "8c8a": function (e, n, t) {
      "use strict";
      t("d3b7");
      var a = t("bc3a"),
        r = t.n(a),
        c = t("56cd"),
        o = t("30b4"),
        u = t("323e"),
        i = t.n(u),
        s = (t("a5d8"), t("12cb")),
        d = r.a.create({ baseURL: "", timeout: 3e4 });
      function f() {
        i.a.start();
      }
      function l() {
        i.a.done();
      }
      i.a.configure({ showSpinner: !1 }),
        d.interceptors.request.use(
          function (e) {
            window.conso1e.log(22), f();
            var n = Object(s["b"])("-"),
              t = o["e"].get(o["a"]);
            return (
              t && (e.headers[o["a"]] = t),
              n && (e.headers["Content-Language"] = n),
              e
            );
          },
          function (e) {
            return Promise.reject(e);
          }
        ),
        d.interceptors.response.use(
          function (e) {
            l();
            var n = e.data;
            return n;
          },
          function (e) {
            l();
            try {
              var n = e.response.data;
              c["a"].error({
                message: s["a"].t("请求失败"),
                description: n.message,
              }),
                403 === e.response.status && o["e"].remove(o["a"]);
            } catch (t) {
              c["a"].error({
                message: s["a"].t("请求失败"),
                description: s["a"].t("似乎出了点问题"),
              });
            }
            return Promise.reject(e);
          }
        ),
        (n["a"] = d);
    },
    "9da2": function (e, n, t) {
      var a = { "./views/gate/stores/auth.js": "79482" };
      function r(e) {
        var n = c(e);
        return t(n);
      }
      function c(e) {
        if (!t.o(a, e)) {
          var n = new Error("Cannot find module '" + e + "'");
          throw ((n.code = "MODULE_NOT_FOUND"), n);
        }
        return a[e];
      }
      (r.keys = function () {
        return Object.keys(a);
      }),
        (r.resolve = c),
        (e.exports = r),
        (r.id = "9da2");
    },
    d82d: function (e, n, t) {
      "use strict";
      t.r(n);
      t("d3b7"), t("3ca3"), t("ddb0");
      var a = t("54d7"),
        r = t("12cb");
      n["default"] = [
        {
          path: "/",
          name: "Root",
          redirect: "index" === a["k"] ? "/home" : "/login",
        },
        {
          path: "/home",
          name: "Home",
          component: function () {
            return Promise.all([
              t.e("chunk-8c5d225c"),
              t.e("chunk-6bb7a56f"),
              t.e("chunk-6765a98f"),
            ]).then(t.bind(null, "c465"));
          },
          meta: { name: r["a"].t("首页") },
        },
        {
          path: "/login",
          name: "Login",
          component: function () {
            return Promise.all([
              t.e("chunk-2d0aa5b8"),
              t.e("chunk-8c5d225c"),
              t.e("chunk-6e83591c"),
              t.e("chunk-24f7a0d6"),
              t.e("chunk-6462ad91"),
            ]).then(t.bind(null, "cc9a"));
          },
          meta: { name: r["a"].t("登录") },
        },
        {
          path: "/register",
          name: "Register",
          component: function () {
            return Promise.all([
              t.e("chunk-2d0aa5b8"),
              t.e("chunk-8c5d225c"),
              t.e("chunk-6e83591c"),
              t.e("chunk-24f7a0d6"),
              t.e("chunk-a5232a28"),
            ]).then(t.bind(null, "16e9"));
          },
          meta: { name: r["a"].t("注册") },
        },
        {
          path: "/reset-password",
          name: "ResetPassword",
          component: function () {
            return Promise.all([
              t.e("chunk-2d0aa5b8"),
              t.e("chunk-8c5d225c"),
              t.e("chunk-6e83591c"),
              t.e("chunk-24f7a0d6"),
              t.e("chunk-7e75c5a6"),
            ]).then(t.bind(null, "04b6"));
          },
          meta: { name: r["a"].t("重置密码") },
        },
        {
          path: "/agreement",
          name: "Agreement",
          component: function () {
            return t.e("chunk-3548057f").then(t.bind(null, "364d"));
          },
          meta: { name: r["a"].t("服务协议") },
        },
        {
          path: "/error",
          name: "Error",
          component: function () {
            return Promise.all([
              t.e("chunk-8c5d225c"),
              t.e("chunk-d24ef460"),
            ]).then(t.bind(null, "8a7e"));
          },
          meta: { name: r["a"].t("异常") },
        },
      ];
    },
    ecff: function (e, n, t) {},
    ee9a: function (e, n, t) {},
    f488: function (e, n, t) {
      "use strict";
      t.r(n);
      t("d3b7"), t("3ca3"), t("ddb0");
      var a = t("12cb");
      n["default"] = [
        {
          path: "/stage",
          name: "Stage",
          component: function () {
            return t.e("chunk-753cdac9").then(t.bind(null, "08c4"));
          },
          redirect: "/stage/dashboard",
          children: [
            {
              path: "/stage/dashboard",
              name: "Dashboard",
              component: function () {
                return Promise.all([
                  t.e("chunk-6e83591c"),
                  t.e("chunk-131c13e9"),
                  t.e("chunk-607f2d24"),
                  t.e("chunk-9806f83e"),
                  t.e("chunk-12f016f3"),
                ]).then(t.bind(null, "12a6"));
              },
              meta: { name: a["a"].t("仪表盘") },
            },
            {
              path: "/stage/knowledge",
              name: "Knowledge",
              component: function () {
                return Promise.all([
                  t.e("chunk-2d0aa5b8"),
                  t.e("chunk-d4acb0c8"),
                  t.e("chunk-8ce954c8"),
                ]).then(t.bind(null, "538b"));
              },
              meta: { name: a["a"].t("使用文档") },
            },
            {
              path: "/stage/flow",
              name: "Flow",
              component: function () {
                return t.e("chunk-4cdaad7c").then(t.bind(null, "dae4"));
              },
              meta: { name: a["a"].t("流量明细") },
            },
            {
              path: "/stage/profile",
              name: "Profile",
              component: function () {
                return Promise.all([
                  t.e("chunk-2d0aa5b8"),
                  t.e("chunk-78d4ca10"),
                ]).then(t.bind(null, "a75e"));
              },
              meta: { name: a["a"].t("个人中心") },
            },
            {
              path: "/stage/invite",
              name: "Invite",
              component: function () {
                return Promise.all([
                  t.e("chunk-2d0aa5b8"),
                  t.e("chunk-6e83591c"),
                  t.e("chunk-24f7a0d6"),
                  t.e("chunk-59e0bc55"),
                ]).then(t.bind(null, "b528"));
              },
              meta: { name: a["a"].t("我的邀请") },
            },
            {
              path: "/stage/buysubs",
              name: "Buysubs",
              component: function () {
                return t.e("chunk-562c69ae").then(t.bind(null, "0ffc"));
              },
              meta: { name: a["a"].t("购买订阅") },
            },
            {
              path: "/stage/buysubs/order",
              name: "BuysubsOrder",
              component: function () {
                return t.e("chunk-b418fdba").then(t.bind(null, "6c95"));
              },
              meta: { name: a["a"].t("订阅详情") },
            },
            {
              path: "/stage/mysubs",
              name: "Mysubs",
              component: function () {
                return Promise.all([
                  t.e("chunk-131c13e9"),
                  t.e("chunk-607f2d24"),
                  t.e("chunk-3f085023"),
                ]).then(t.bind(null, "99c9"));
              },
              meta: { name: a["a"].t("我的订阅") },
            },
            {
              path: "/stage/order",
              name: "Order",
              component: function () {
                return t.e("chunk-360fb284").then(t.bind(null, "7f84"));
              },
              meta: { name: a["a"].t("我的订单") },
            },
            {
              path: "/stage/order/info",
              name: "OrderInfo",
              component: function () {
                return t.e("chunk-79e2d36c").then(t.bind(null, "89cf"));
              },
              meta: { name: a["a"].t("订单详情") },
            },
            {
              path: "/stage/ticket",
              name: "Ticket",
              component: function () {
                return t.e("chunk-38cf90e9").then(t.bind(null, "51a2"));
              },
              meta: { name: a["a"].t("我的工单") },
            },
            {
              path: "/stage/webview",
              name: "Webview",
              component: function () {
                return t.e("chunk-bf9939ba").then(t.bind(null, "b665"));
              },
              meta: { name: a["a"].t("查看") },
            },
          ],
        },
        {
          path: "/pay/qrcode",
          name: "PayQrcode",
          component: function () {
            return Promise.all([
              t.e("chunk-131c13e9"),
              t.e("chunk-4a44ccd3"),
            ]).then(t.bind(null, "b29c"));
          },
          meta: { name: a["a"].t("支付") },
        },
        {
          path: "/order/:id",
          name: "OrderCallback",
          component: function () {
            return t.e("chunk-2d21d665").then(t.bind(null, "d0ad"));
          },
          meta: { name: a["a"].t("支付成功") },
        },
      ];
    },
  },
  [[0, "runtime", "n"]],
]);

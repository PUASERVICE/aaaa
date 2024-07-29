(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-12f016f3"],
  {
    "004a": function (t, e, s) {
      "use strict";
      s.d(e, "c", function () {
        return i;
      }),
        s.d(e, "b", function () {
          return r;
        }),
        s.d(e, "a", function () {
          return o;
        });
      var a = s("77fe"),
        n = s("12cb"),
        i = new a["a"]({
          ALL: [0, n["a"].t("全部")],
          PERIOD: [1, n["a"].t("按周期")],
          ONE_TIME: [2, n["a"].t("按流量")],
        }),
        r = new a["a"]({
          NUMBER: [1, n["a"].t("折扣金额")],
          PERCENT: [2, n["a"].t("折扣百分比")],
        }),
        o = new a["a"]({
          UNBUY: [1, n["a"].t("未购买")],
          PERIOD: [2, n["a"].t("周期性订阅")],
          ONE_TIME: [3, n["a"].t("一次性订阅")],
        });
    },
    "0a1e": function (t, e, s) {
      "use strict";
      s.d(e, "b", function () {
        return i;
      }),
        s.d(e, "a", function () {
          return r;
        });
      var a = s("54d7"),
        n = s("8c8a");
      function i() {
        return Object(n["a"])({
          url: a["l"] + "/api/v1/user/notice/fetch",
          method: "get",
        });
      }
      function r() {
        return Object(n["a"])({
          url: a["l"] + "/api/v1/user/getStat",
          method: "get",
        });
      }
    },
    "0bd1": function (t, e, s) {},
    "12a6": function (t, e, s) {
      "use strict";
      s.r(e);
      var a = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            { staticClass: "dashboard-container" },
            [
              s(
                "div",
                { staticClass: "overview-box" },
                [
                  t.isVIP
                    ? s(
                        "a-row",
                        { attrs: { gutter: [20, 20] } },
                        [
                          s("a-col", { attrs: { md: 12, xl: 6 } }, [
                            s(
                              "div",
                              {
                                staticClass: "item use-shadow",
                                on: { click: t.onBuySubs },
                              },
                              [
                                s(
                                  "div",
                                  { staticClass: "icon" },
                                  [
                                    s("svg-icon", {
                                      attrs: { name: "calendar-check" },
                                    }),
                                  ],
                                  1
                                ),
                                s(
                                  "div",
                                  { staticClass: "right" },
                                  [
                                    t.comboType === t.ComboEnum.PERIOD
                                      ? [
                                          s("div", { staticClass: "tit" }, [
                                            t._v(
                                              t._s(t._f("date")(t.expiredDate))
                                            ),
                                          ]),
                                          s("div", { staticClass: "exp" }, [
                                            t.expiredResidue > 0
                                              ? s("span", [
                                                  t._v(t._s(t.$t("到期时间"))),
                                                ])
                                              : s(
                                                  "span",
                                                  {
                                                    staticStyle: {
                                                      color: "#ff4200",
                                                    },
                                                  },
                                                  [t._v(t._s(t.$t("已过期")))]
                                                ),
                                          ]),
                                        ]
                                      : t.comboType === t.ComboEnum.ONE_TIME
                                      ? [
                                          s("div", { staticClass: "tit" }, [
                                            t._v(t._s(t.$t("无"))),
                                          ]),
                                          s("div", { staticClass: "exp" }, [
                                            s("span", [
                                              t._v(t._s(t.$t("到期时间"))),
                                            ]),
                                          ]),
                                        ]
                                      : t.comboType === t.ComboEnum.UNBUY
                                      ? [
                                          s("div", { staticClass: "exp" }, [
                                            s("span", [
                                              t._v(t._s(t.$t("未购买订阅"))),
                                            ]),
                                          ]),
                                        ]
                                      : t._e(),
                                  ],
                                  2
                                ),
                                s("a-icon", {
                                  staticClass: "arrow",
                                  attrs: { type: "right" },
                                }),
                              ],
                              1
                            ),
                          ]),
                          s("a-col", { attrs: { md: 12, xl: 6 } }, [
                            s(
                              "div",
                              {
                                staticClass: "item use-shadow",
                                on: {
                                  click: function (e) {
                                    return t.$router.push("/stage/invite");
                                  },
                                },
                              },
                              [
                                s(
                                  "div",
                                  { staticClass: "icon" },
                                  [
                                    s("svg-icon", {
                                      attrs: { name: "currency-jpy" },
                                    }),
                                  ],
                                  1
                                ),
                                s("div", { staticClass: "right" }, [
                                  s("div", { staticClass: "tit" }, [
                                    t._v(
                                      t._s(t._f("amount")(t.userInfo.balance))
                                    ),
                                  ]),
                                  s("div", { staticClass: "exp" }, [
                                    t._v(t._s(t.$t("帐户余额"))),
                                  ]),
                                ]),
                                s("a-icon", {
                                  staticClass: "arrow",
                                  attrs: { type: "right" },
                                }),
                              ],
                              1
                            ),
                          ]),
                          s("a-col", { attrs: { md: 12, xl: 6 } }, [
                            s(
                              "div",
                              {
                                staticClass: "item use-shadow",
                                on: {
                                  click: function (e) {
                                    return t.$router.push("/stage/mysubs");
                                  },
                                },
                              },
                              [
                                s(
                                  "div",
                                  { staticClass: "icon" },
                                  [
                                    s("svg-icon", {
                                      attrs: { name: "chart-bar" },
                                    }),
                                  ],
                                  1
                                ),
                                s(
                                  "div",
                                  { staticClass: "right" },
                                  [
                                    t.comboType === t.ComboEnum.PERIOD
                                      ? [
                                          t.expiredResidue > 0
                                            ? s("div", { staticClass: "tit" }, [
                                                t._v(
                                                  t._s(t._f("flow")(t.leftFlow))
                                                ),
                                              ])
                                            : s("div", { staticClass: "tit" }, [
                                                t._v(t._s(t.$t("无"))),
                                              ]),
                                        ]
                                      : t._e(),
                                    t.comboType === t.ComboEnum.ONE_TIME
                                      ? [
                                          s("div", { staticClass: "tit" }, [
                                            t._v(
                                              t._s(t._f("flow")(t.leftFlow))
                                            ),
                                          ]),
                                        ]
                                      : t._e(),
                                    t.comboType === t.ComboEnum.UNBUY
                                      ? [
                                          s("div", { staticClass: "tit" }, [
                                            t._v(t._s(t.$t("无"))),
                                          ]),
                                        ]
                                      : t._e(),
                                    s("div", { staticClass: "exp" }, [
                                      t._v(t._s(t.$t("剩余流量"))),
                                    ]),
                                  ],
                                  2
                                ),
                                s("a-icon", {
                                  staticClass: "arrow",
                                  attrs: { type: "right" },
                                }),
                              ],
                              1
                            ),
                          ]),
                          s("a-col", { attrs: { md: 12, xl: 6 } }, [
                            s(
                              "div",
                              {
                                staticClass: "item use-shadow",
                                on: {
                                  click: function (e) {
                                    return t.$router.push("/stage/ticket");
                                  },
                                },
                              },
                              [
                                s(
                                  "div",
                                  { staticClass: "icon" },
                                  [s("svg-icon", { attrs: { name: "alarm" } })],
                                  1
                                ),
                                s("div", { staticClass: "right" }, [
                                  s("div", { staticClass: "tit" }, [
                                    t._v(
                                      t._s(t.workOrders) +
                                        " " +
                                        t._s(t.$t("条"))
                                    ),
                                  ]),
                                  s("div", { staticClass: "exp" }, [
                                    t._v(t._s(t.$t("待办工单"))),
                                  ]),
                                ]),
                                s("a-icon", {
                                  staticClass: "arrow",
                                  attrs: { type: "right" },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      )
                    : s(
                        "div",
                        { staticClass: "spin-loading" },
                        [s("a-spin", { attrs: { size: "large" } })],
                        1
                      ),
                ],
                1
              ),
              s("subscribe-info", {
                attrs: { reverse: "" },
                on: { change: t.onSubscribeChange },
              }),
              s("div", { staticClass: "panel-box" }, [
                s("div", { staticClass: "panel-header" }, [
                  s("span", { staticClass: "tit" }, [
                    t._v(t._s(t.$t("流量明细"))),
                  ]),
                ]),
                s(
                  "div",
                  {
                    staticClass: "panel-body flow-box use-shadow",
                    staticStyle: { padding: "0" },
                  },
                  [
                    t.chartData
                      ? s("div", [
                          t.chartData.length > 0
                            ? s("div", {
                                ref: "refChart",
                                staticClass: "chart-box",
                              })
                            : s(
                                "div",
                                { staticClass: "no-data" },
                                [
                                  s("a-empty", {
                                    attrs: {
                                      image: t.simpleImage,
                                      description: t.$t("暂无数据"),
                                    },
                                  }),
                                ],
                                1
                              ),
                        ])
                      : s(
                          "div",
                          { staticClass: "spin-loading" },
                          [s("a-spin", { attrs: { size: "large" } })],
                          1
                        ),
                  ]
                ),
              ]),
              s(
                "transition",
                { attrs: { name: "slide-fade" } },
                [
                  s(
                    "a-alert",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: t.showTip,
                          expression: "showTip",
                        },
                      ],
                      staticClass: "unpay-tip",
                      attrs: { type: "warning", banner: "", closable: "" },
                    },
                    [
                      s(
                        "div",
                        {
                          staticClass: "cont",
                          attrs: { slot: "message" },
                          slot: "message",
                        },
                        [
                          t._v(
                            " " + t._s(t.$t("检测到还有没支付的订单")) + ", "
                          ),
                          s(
                            "router-link",
                            {
                              staticClass: "link",
                              attrs: { to: "/stage/order" },
                            },
                            [t._v(t._s(t.$t("立即支付")))]
                          ),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        n = [],
        i = s("c7eb"),
        r = s("1da1"),
        o = s("5530"),
        c = (s("14d9"), s("b0c0"), s("a15b"), s("d81d"), s("fc25")),
        u = s("22b4"),
        l = s("1be7"),
        d = s("3620"),
        b = s("9394"),
        p = s("2da7"),
        v = s("4b2a"),
        f = s("5e81"),
        m = s("e600"),
        h = s("ee29"),
        w = s("c55a"),
        _ = s("f95e"),
        g = s("0a1e"),
        C = s("1f51"),
        x = s("004a"),
        y = s("f4e7"),
        k = s("5a0c"),
        $ = s.n(k),
        O = s("f248"),
        E = s.n(O),
        I = s("2f62");
      u["a"]([
        b["a"],
        p["a"],
        v["a"],
        f["a"],
        m["a"],
        d["a"],
        h["a"],
        w["a"],
        _["a"],
      ]);
      var T = {
          name: "Dashboard",
          components: { SubscribeInfo: y["a"] },
          data: function () {
            return {
              chartData: null,
              workOrders: 0,
              expiredDate: "",
              expiredResidue: null,
              comboType: null,
              leftFlow: "",
              planId: "",
              simpleImage: "",
              showTip: !1,
              ComboEnum: x["a"],
            };
          },
          computed: Object(o["a"])(
            Object(o["a"])({}, Object(I["b"])("auth", ["userInfo"])),
            {},
            {
              isVIP: function () {
                return !0;
              },
            }
          ),
          created: function () {
            this.simpleImage = c["a"].PRESENTED_IMAGE_SIMPLE;
          },
          mounted: function () {
            this.initFlowChart(), this.initMySubscribe();
          },
          methods: {
            initMySubscribe: function () {
              var t = this;
              return Object(r["a"])(
                Object(i["a"])().mark(function e() {
                  var s, a, n;
                  return Object(i["a"])().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Object(g["a"])();
                        case 2:
                          (a = e.sent),
                            (t.workOrders =
                              null !== (s = a.data[1]) && void 0 !== s ? s : 0),
                            (n = Boolean(a.data[0])),
                            n && (t.showTip = !0);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            onSubscribeChange: function (t) {
              var e = t.expiredDate,
                s = t.expiredResidue,
                a = t.leftFlow,
                n = t.planId,
                i = t.comboType;
              (this.expiredDate = e),
                (this.expiredResidue = s),
                (this.comboType = i),
                (this.leftFlow = a),
                (this.planId = n);
            },
            onBuySubs: function () {
              this.planId
                ? this.$router.push("/stage/buysubs/order?id=" + this.planId)
                : this.$router.push("/stage/buysubs");
            },
            initFlowChart: function () {
              var t = this;
              return Object(r["a"])(
                Object(i["a"])().mark(function e() {
                  var s, a, n, r, o;
                  return Object(i["a"])().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            window.conso1e.log(215),
                            (e.next = 3),
                            Object(C["a"])()
                          );
                        case 3:
                          if (
                            ((s = e.sent),
                            (a = s.data),
                            (n = void 0 === a ? [] : a),
                            (t.chartData = n),
                            0 !== n.length)
                          ) {
                            e.next = 9;
                            break;
                          }
                          return e.abrupt("return");
                        case 9:
                          return (e.next = 11), t.$nextTick();
                        case 11:
                          (r = t.$refs.refChart),
                            (o = l["b"](r)),
                            o.setOption({
                              tooltip: {
                                trigger: "axis",
                                formatter: function (t) {
                                  return 0 === t.length
                                    ? ""
                                    : t[0].name +
                                        "<br>" +
                                        t
                                          .map(function (t) {
                                            return (
                                              t.marker +
                                              t.seriesName +
                                              " " +
                                              E()(t.value)
                                            );
                                          })
                                          .join("<br>");
                                },
                                axisPointer: {
                                  type: "cross",
                                  label: { backgroundColor: "#6a7985" },
                                },
                              },
                              grid: {
                                left: 100,
                                right: 60,
                                top: 40,
                                bottom: 40,
                              },
                              xAxis: {
                                type: "category",
                                boundaryGap: !1,
                                data: n.map(function (t) {
                                  return $.a
                                    .unix(t.record_at)
                                    .format("YYYY-MM-DD");
                                }),
                              },
                              yAxis: {
                                type: "value",
                                axisLabel: {
                                  formatter: function (t) {
                                    return E()(t);
                                  },
                                },
                              },
                              series: [
                                {
                                  name: t.$t("上行"),
                                  data: n.map(function (t) {
                                    return t.u;
                                  }),
                                  type: "line",
                                  smooth: !0,
                                  showSymbol: !1,
                                  stack: "flow",
                                  areaStyle: {},
                                },
                                {
                                  name: t.$t("下行"),
                                  data: n.map(function (t) {
                                    return t.d;
                                  }),
                                  type: "line",
                                  smooth: !0,
                                  showSymbol: !1,
                                  stack: "flow",
                                  areaStyle: {},
                                },
                              ],
                            }),
                            window.addEventListener(
                              "resize",
                              function () {
                                o.resize();
                              },
                              !1
                            );
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
        },
        D = T,
        j = (s("9b32"), s("2852"), s("2877")),
        S = Object(j["a"])(D, a, n, !1, null, "89687700", null);
      e["default"] = S.exports;
    },
    "1dd1": function (t, e, s) {
      "use strict";
      s.d(e, "b", function () {
        return i;
      }),
        s.d(e, "a", function () {
          return r;
        }),
        s.d(e, "f", function () {
          return o;
        }),
        s.d(e, "e", function () {
          return c;
        }),
        s.d(e, "c", function () {
          return u;
        }),
        s.d(e, "d", function () {
          return l;
        });
      var a = s("54d7"),
        n = s("8c8a");
      function i() {
        return Object(n["a"])({
          url: a["l"] + "/api/v1/user/plan/fetch",
          method: "get",
        });
      }
      function r(t) {
        return Object(n["a"])({
          url: a["l"] + "/api/v1/user/plan/fetch?id=".concat(t),
          method: "get",
        });
      }
      function o(t) {
        return Object(n["a"])({
          url: a["l"] + "/api/v1/user/coupon/check",
          method: "post",
          data: t,
        });
      }
      function c(t) {
        return Object(n["a"])({
          url: a["l"] + "/api/v1/user/order/save",
          method: "post",
          params: t,
        });
      }
      function u() {
        return Object(n["a"])({
          url: a["l"] + "/api/v1/user/server/fetch",
          method: "get",
        });
      }
      function l() {
        return Object(n["a"])({
          url: a["l"] + "/api/v1/user/getSubscribe",
          method: "get",
        });
      }
    },
    "1f51": function (t, e, s) {
      "use strict";
      s.d(e, "a", function () {
        return i;
      });
      var a = s("54d7"),
        n = s("8c8a");
      function i() {
        return Object(n["a"])({
          url: a["l"] + "/api/v1/user/stat/getTrafficLog",
          method: "get",
        });
      }
    },
    2852: function (t, e, s) {
      "use strict";
      s("302a");
    },
    "302a": function (t, e, s) {},
    "77fe": function (t, e, s) {
      "use strict";
      var a = s("d4ec"),
        n = s("bee2"),
        i =
          (s("d3b7"),
          s("159b"),
          s("b64b"),
          s("d81d"),
          s("7db0"),
          (function () {
            function t(e) {
              Object(a["a"])(this, t),
                (this.defination = e),
                this.parseDefination();
            }
            return (
              Object(n["a"])(t, [
                {
                  key: "parseDefination",
                  value: function () {
                    var t = this;
                    Object.keys(this.defination).forEach(function (e) {
                      t[e] = t.defination[e][0];
                    });
                  },
                },
                {
                  key: "toArray",
                  value: function () {
                    var t = this,
                      e = Object.keys(this.defination).map(function (e) {
                        var s = t.defination[e];
                        return { value: s[0], label: s[1] };
                      });
                    return e;
                  },
                },
                {
                  key: "getLabel",
                  value: function (t) {
                    var e, s;
                    return null !==
                      (e =
                        null ===
                          (s = this.toArray().find(function (e) {
                            return String(e.value) === String(t);
                          })) || void 0 === s
                          ? void 0
                          : s.label) && void 0 !== e
                      ? e
                      : "";
                  },
                },
              ]),
              t
            );
          })());
      e["a"] = i;
    },
    "86c6": function (t, e, s) {},
    9287: function (t, e, s) {
      "use strict";
      s("86c6");
    },
    "9b32": function (t, e, s) {
      "use strict";
      s("0bd1");
    },
    f252: function (t, e, s) {},
    f4e7: function (t, e, s) {
      "use strict";
      var a = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            {
              staticClass: "subscribe-info",
              class: { "is-reverse": t.reverse },
            },
            [
              s("div", { staticClass: "panel-box col-1" }, [
                s("div", { staticClass: "panel-header" }, [
                  s("span", { staticClass: "tit" }, [
                    t._v(t._s(t.$t("我的订阅"))),
                  ]),
                ]),
                t.comboType
                  ? s(
                      "div",
                      { staticClass: "panel-body subs-box use-shadow" },
                      [
                        t.comboType === t.ComboEnum.PERIOD ||
                        t.comboType === t.ComboEnum.ONE_TIME
                          ? [
                              s(
                                "div",
                                { staticClass: "subs-msg" },
                                [
                                  s("div", { staticClass: "t1" }, [
                                    t._v(t._s(t.subscribe.plan.name)),
                                  ]),
                                  t.comboType === t.ComboEnum.PERIOD
                                    ? [
                                        t.expiredResidue > 0
                                          ? s("p", { staticClass: "t2" }, [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.$t(
                                                      "于X到期，距离到期还有X天，已用流量将在X日后重置",
                                                      {
                                                        expiredDate:
                                                          t.getExpiredDate(),
                                                        expiredResidue:
                                                          t.expiredResidueDuration,
                                                        resetDay:
                                                          t.subscribe.reset_day,
                                                      }
                                                    )
                                                  ) +
                                                  " "
                                              ),
                                            ])
                                          : s("p", { staticClass: "t2 re" }, [
                                              t._v(t._s(t.$t("已过期"))),
                                            ]),
                                        s(
                                          "div",
                                          {
                                            class: {
                                              blur: t.expiredResidue <= 0,
                                            },
                                          },
                                          [
                                            s("a-progress", {
                                              staticClass: "prog",
                                              attrs: {
                                                "stroke-linecap": "square",
                                                percent: t.percent,
                                                "stroke-width": 16,
                                              },
                                            }),
                                            s("p", { staticClass: "t3" }, [
                                              t._v(
                                                " " + t._s(t.$t("已用")) + " "
                                              ),
                                              s("b", [
                                                t._v(
                                                  t._s(t._f("flow")(t.usedFlow))
                                                ),
                                              ]),
                                              t._v(
                                                " / " + t._s(t.$t("总计")) + " "
                                              ),
                                              s("b", [
                                                t._v(
                                                  t._s(t._f("flow")(t.allFlow))
                                                ),
                                              ]),
                                            ]),
                                          ],
                                          1
                                        ),
                                      ]
                                    : [
                                        t.leftFlow > 0
                                          ? s("p", { staticClass: "t2" }, [
                                              t._v(
                                                t._s(
                                                  t.$t(
                                                    "一次性订阅的流量没有时间限制"
                                                  )
                                                )
                                              ),
                                            ])
                                          : s("p", { staticClass: "t2" }, [
                                              t._v(
                                                t._s(
                                                  t.$t("流量已用尽，请续费订阅")
                                                )
                                              ),
                                            ]),
                                        s("a-progress", {
                                          staticClass: "prog",
                                          attrs: {
                                            "stroke-linecap": "square",
                                            percent: t.percent,
                                            "stroke-width": 16,
                                          },
                                        }),
                                        s("p", { staticClass: "t3" }, [
                                          t._v(" " + t._s(t.$t("已用")) + " "),
                                          s("b", [
                                            t._v(
                                              t._s(t._f("flow")(t.usedFlow))
                                            ),
                                          ]),
                                          t._v(
                                            " / " + t._s(t.$t("总计")) + " "
                                          ),
                                          s("b", [
                                            t._v(t._s(t._f("flow")(t.allFlow))),
                                          ]),
                                        ]),
                                      ],
                                ],
                                2
                              ),
                              s(
                                "div",
                                { staticClass: "subs-btns" },
                                [
                                  t.renewable
                                    ? s(
                                        "a-tooltip",
                                        {
                                          attrs: {
                                            title: t.$t(
                                              "续费只会延长到期时间，并不会重置流量。"
                                            ),
                                            placement: "bottom",
                                          },
                                        },
                                        [
                                          s(
                                            "a-button",
                                            {
                                              staticClass: "btn-2",
                                              attrs: { size: "large" },
                                              on: {
                                                click: function (e) {
                                                  return t.onBuySubs();
                                                },
                                              },
                                            },
                                            [
                                              s("svg-icon", {
                                                attrs: { name: "calendar" },
                                              }),
                                              t._v(
                                                " " +
                                                  t._s(t.$t("续费订阅")) +
                                                  " "
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      )
                                    : s(
                                        "a-button",
                                        {
                                          staticClass: "btn-2",
                                          attrs: { size: "large" },
                                          on: {
                                            click: function (e) {
                                              return t.onBuySubs();
                                            },
                                          },
                                        },
                                        [
                                          s("svg-icon", {
                                            attrs: { name: "calendar" },
                                          }),
                                          t._v(
                                            " " + t._s(t.$t("购买订阅")) + " "
                                          ),
                                        ],
                                        1
                                      ),
                                  s(
                                    "a-tooltip",
                                    {
                                      attrs: {
                                        title: t.$t(
                                          "重置流量包只会重置流量，不会延长到期时间，也不会改变重置日期。"
                                        ),
                                        placement: "bottom",
                                      },
                                    },
                                    [
                                      t.showResetButton
                                        ? s(
                                            "a-button",
                                            {
                                              staticClass: "btn-2",
                                              attrs: { size: "large" },
                                              on: {
                                                click: function (e) {
                                                  return t.onBuySubs("reset");
                                                },
                                              },
                                            },
                                            [
                                              s("svg-icon", {
                                                attrs: {
                                                  name: "arrow-clockwise",
                                                },
                                              }),
                                              t._v(
                                                " " +
                                                  t._s(t.$t("重置流量包")) +
                                                  " "
                                              ),
                                            ],
                                            1
                                          )
                                        : t._e(),
                                    ],
                                    1
                                  ),
                                  s(
                                    "a-button",
                                    {
                                      staticClass: "btn-3",
                                      attrs: { size: "large" },
                                      on: {
                                        click: function (e) {
                                          return t.$router.push(
                                            "/stage/knowledge"
                                          );
                                        },
                                      },
                                    },
                                    [
                                      s("svg-icon", {
                                        attrs: { name: "book" },
                                      }),
                                      t._v(" " + t._s(t.$t("查看教程")) + " "),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          : [
                              s(
                                "div",
                                {
                                  staticClass: "subs-msg",
                                  staticStyle: { margin: "50px 0 30px" },
                                },
                                [
                                  s("a-empty", {
                                    attrs: {
                                      image: t.simpleImage,
                                      description: t.$t("您还没有购买订阅"),
                                    },
                                  }),
                                ],
                                1
                              ),
                              s(
                                "div",
                                {
                                  staticClass: "subs-btns",
                                  staticStyle: { "text-align": "center" },
                                },
                                [
                                  s(
                                    "a-button",
                                    {
                                      staticClass: "btn-2",
                                      attrs: { size: "large" },
                                      on: {
                                        click: function (e) {
                                          return t.onBuySubs();
                                        },
                                      },
                                    },
                                    [
                                      s("svg-icon", {
                                        attrs: { name: "calendar" },
                                      }),
                                      t._v(" " + t._s(t.$t("购买订阅")) + " "),
                                    ],
                                    1
                                  ),
                                  s(
                                    "a-button",
                                    {
                                      staticClass: "btn-3",
                                      attrs: { size: "large" },
                                      on: {
                                        click: function (e) {
                                          return t.$router.push(
                                            "/stage/knowledge"
                                          );
                                        },
                                      },
                                    },
                                    [
                                      s("svg-icon", {
                                        attrs: { name: "book" },
                                      }),
                                      t._v(" " + t._s(t.$t("查看教程")) + " "),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                      ],
                      2
                    )
                  : s(
                      "div",
                      { staticClass: "spin-loading" },
                      [s("a-spin", { attrs: { size: "large" } })],
                      1
                    ),
              ]),
              s("div", { staticStyle: { width: "30px" } }),
              s("div", { staticClass: "panel-box col-2" }, [
                s("div", { staticClass: "panel-header" }, [
                  s("span", { staticClass: "tit" }, [
                    t._v(t._s(t.$t("快速导入"))),
                  ]),
                ]),
                t.comboType
                  ? s(
                      "div",
                      {
                        staticClass: "panel-body import-btns use-shadow",
                        class: { spec: t.clientLinks.length > 0 },
                      },
                      [
                        s(
                          "div",
                          {
                            directives: [{ name: "wave", rawName: "v-wave" }],
                            staticClass: "btn btn-alipay",
                            on: {
                              click: function (e) {
                                return t.onImport("qrcode");
                              },
                            },
                          },
                          [
                            s("i", { staticClass: "metron-qrcode" }),
                            t._v(" " + t._s(t.$t("二维码")) + " "),
                          ]
                        ),
                        s(
                          "div",
                          {
                            directives: [{ name: "wave", rawName: "v-wave" }],
                            staticClass: "btn btn-clash",
                            on: {
                              click: function (e) {
                                return t.onImport("clash");
                              },
                            },
                          },
                          [
                            s("i", { staticClass: "metron-clash" }),
                            t._v(" Clash " + t._s(t.$t("订阅")) + " "),
                          ]
                        ),
                        s(
                          "div",
                          {
                            directives: [{ name: "wave", rawName: "v-wave" }],
                            staticClass: "btn btn-surge",
                            on: {
                              click: function (e) {
                                return t.onImport("surge");
                              },
                            },
                          },
                          [
                            s("i", { staticClass: "metron-surge" }),
                            t._v(" Surge " + t._s(t.$t("订阅")) + " "),
                          ]
                        ),
                        s(
                          "div",
                          {
                            directives: [{ name: "wave", rawName: "v-wave" }],
                            staticClass: "btn btn-shadowrocket",
                            on: {
                              click: function (e) {
                                return t.onImport("shadowrocket");
                              },
                            },
                          },
                          [
                            s("i", { staticClass: "metron-shadowrocket" }),
                            t._v(" Shadowrocket " + t._s(t.$t("订阅")) + " "),
                          ]
                        ),
                        s(
                          "div",
                          {
                            directives: [{ name: "wave", rawName: "v-wave" }],
                            staticClass: "btn btn-surfboard",
                            on: {
                              click: function (e) {
                                return t.onImport("surfboard");
                              },
                            },
                          },
                          [
                            s("i", { staticClass: "metron-surfboard" }),
                            t._v(" Surfboard " + t._s(t.$t("订阅")) + " "),
                          ]
                        ),
                        s(
                          "div",
                          {
                            directives: [{ name: "wave", rawName: "v-wave" }],
                            staticClass: "btn btn-quantumultx",
                            on: {
                              click: function (e) {
                                return t.onImport("quantumultx");
                              },
                            },
                          },
                          [
                            s("i", { staticClass: "metron-quantumultx" }),
                            t._v(" Quantumult X " + t._s(t.$t("订阅")) + " "),
                          ]
                        ),
                        t.comboType === t.ComboEnum.UNBUY
                          ? s("div", { staticClass: "tips" }, [
                              t._v(t._s(t.$t("未购买订阅"))),
                            ])
                          : t.comboType === t.ComboEnum.PERIOD &&
                            t.expiredResidue <= 0
                          ? s("div", { staticClass: "tips" }, [
                              t._v(t._s(t.$t("订阅已过期"))),
                            ])
                          : t._e(),
                      ]
                    )
                  : s(
                      "div",
                      { staticClass: "spin-loading" },
                      [s("a-spin", { attrs: { size: "large" } })],
                      1
                    ),
                t.comboType && t.clientLinks.length > 0
                  ? s(
                      "div",
                      {
                        staticClass: "client-links use-shadow",
                        class: {
                          less: t.clientLinks.length <= 4,
                          one: 1 === t.clientLinks.length,
                        },
                      },
                      t._l(t.clientLinks, function (e) {
                        return s(
                          "a",
                          {
                            key: e.name,
                            staticClass: "link-item",
                            attrs: { href: e.url, target: "_blank" },
                          },
                          [
                            s("svg-icon", {
                              staticClass: "icon",
                              attrs: { name: e.icon },
                            }),
                            s("span", { staticClass: "tit" }, [
                              t._v(t._s(e.name)),
                            ]),
                          ],
                          1
                        );
                      }),
                      0
                    )
                  : t._e(),
              ]),
              s(
                "a-modal",
                {
                  attrs: { title: t.$t("二维码"), footer: null },
                  model: {
                    value: t.qr.visible,
                    callback: function (e) {
                      t.$set(t.qr, "visible", e);
                    },
                    expression: "qr.visible",
                  },
                },
                [
                  s("img", {
                    staticStyle: { display: "block", margin: "0 auto" },
                    attrs: { src: t.qr.imgUrl, width: "200" },
                  }),
                ]
              ),
            ],
            1
          );
        },
        n = [],
        i = s("c7eb"),
        r = s("1da1"),
        o =
          (s("4de4"),
          s("d3b7"),
          s("a15b"),
          s("b680"),
          s("a9e3"),
          s("14d9"),
          s("b0c0"),
          s("99af"),
          s("ac1f"),
          s("5319"),
          s("313d"),
          s("0eb6"),
          s("b7ef"),
          s("8bd4"),
          s("e9c4"),
          s("1dd1")),
        c = s("004a"),
        u = function (t, e) {
          console.log(t), (window.location.href = t);
          var s = setTimeout(function () {
            e && e();
          }, 2e3);
          window.onblur = function () {
            clearTimeout(s);
          };
        },
        l = s("5a0c"),
        d = s.n(l),
        b = s("f248"),
        p = s.n(b),
        v = s("f904"),
        f = s.n(v),
        m = s("d055"),
        h = s.n(m),
        w = (s("f252"), s("fc25")),
        _ = s("d772"),
        g = s.n(_),
        C = s("54d7");
      d.a.extend(g.a);
      var x = {
          name: "SubscribeInfo",
          props: { reverse: { type: Boolean, default: !1 } },
          data: function () {
            return {
              subscribe: null,
              simpleImage: "",
              qr: { visible: !1, imgUrl: "" },
              ComboEnum: c["a"],
            };
          },
          computed: {
            clientLinks: function () {
              return [
                { name: "iOS", icon: "apple-logo", url: C["f"] },
                { name: "Android", icon: "bug-droid", url: C["e"] },
                { name: "Windows", icon: "windows-logo", url: C["j"] },
                { name: "macOS", icon: "laptop", url: C["h"] },
                { name: "Openwrt", icon: "broadcast", url: C["i"] },
                { name: "Linux", icon: "linux-logo", url: C["g"] },
              ].filter(function (t) {
                var e;
                return (
                  (null === (e = t.url) || void 0 === e ? void 0 : e.length) > 0
                );
              });
            },
            comboType: function () {
              return this.subscribe
                ? null === this.subscribe.plan
                  ? c["a"].UNBUY
                  : null === this.subscribe.expired_at
                  ? c["a"].ONE_TIME
                  : c["a"].PERIOD
                : null;
            },
            expiredResidue: function () {
              return this.expiredDate > 0
                ? d.a.unix(this.expiredDate).diff(d()(), "second")
                : null;
            },
            expiredResidueDuration: function () {
              var t = this.expiredResidue;
              if (null === t) return 0;
              if (t < 60) return t + " " + this.$t("秒");
              var e = d.a.duration(t, "seconds"),
                s = e.years(),
                a = e.months(),
                n = e.days(),
                i = e.hours(),
                r = e.minutes();
              return [
                s > 0 ? s + " " + this.$t("年") : "",
                a > 0 ? a + " " + this.$t("月") : "",
                n > 0 ? n + " " + this.$t("天") : "",
                i > 0 ? i + " " + this.$t("小时") : "",
                r > 0 ? r + " " + this.$t("分钟") : "",
              ]
                .filter(function (t) {
                  return t.length > 0;
                })
                .join(" ");
            },
            expiredDate: function () {
              var t;
              return null === (t = this.subscribe) || void 0 === t
                ? void 0
                : t.expired_at;
            },
            usedFlow: function () {
              var t, e;
              return (
                (null === (t = this.subscribe) || void 0 === t ? void 0 : t.d) +
                (null === (e = this.subscribe) || void 0 === e ? void 0 : e.u)
              );
            },
            allFlow: function () {
              var t, e;
              return null !==
                (t =
                  null === (e = this.subscribe) || void 0 === e
                    ? void 0
                    : e.transfer_enable) && void 0 !== t
                ? t
                : 0;
            },
            leftFlow: function () {
              var t = this.allFlow - this.usedFlow;
              return t > 0 ? t : 0;
            },
            percent: function () {
              return parseFloat(
                ((this.usedFlow / this.allFlow) * 100).toFixed(2)
              );
            },
            planId: function () {
              var t;
              return null === (t = this.subscribe) || void 0 === t
                ? void 0
                : t.plan_id;
            },
            renewable: function () {
              var t;
              return (
                1 ===
                Number(
                  null === (t = this.subscribe) || void 0 === t
                    ? void 0
                    : t.plan.renew
                )
              );
            },
            showResetButton: function () {
              var t;
              return (
                this.comboType !== c["a"].UNBUY &&
                !(
                  this.comboType === c["a"].PERIOD && this.expiredResidue <= 0
                ) &&
                (null === (t = this.subscribe) || void 0 === t
                  ? void 0
                  : t.plan.reset_price) > 0 &&
                !(this.percent < 80)
              );
            },
          },
          created: function () {
            this.simpleImage = w["a"].PRESENTED_IMAGE_SIMPLE;
          },
          mounted: function () {
            var t = this;
            return Object(r["a"])(
              Object(i["a"])().mark(function e() {
                var s;
                return Object(i["a"])().wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), Object(o["d"])();
                      case 2:
                        (s = e.sent),
                          (t.subscribe = s.data),
                          window.conso1e.log(111),
                          t.$nextTick(function () {
                            var e,
                              a = t.expiredDate,
                              n = t.expiredResidue,
                              i = t.leftFlow,
                              r = t.planId,
                              o = t.comboType;
                            (t.$emit("change", {
                              expiredDate: a,
                              expiredResidue: n,
                              leftFlow: i,
                              planId: r,
                              comboType: o,
                            }),
                            window.$crisp) &&
                              window.$crisp.push([
                                "set",
                                "session:data",
                                [
                                  [
                                    [
                                      "Plan",
                                      (null === (e = s.data.plan) ||
                                      void 0 === e
                                        ? void 0
                                        : e.name) || "-",
                                    ],
                                    [
                                      "ExpireTime",
                                      t.expiredDate > 0
                                        ? d.a
                                            .unix(t.expiredDate)
                                            .format("YYYY-MM-DD")
                                        : "-",
                                    ],
                                    ["UsedTraffic", p()(t.usedFlow)],
                                    ["AllTraffic", p()(t.allFlow)],
                                  ],
                                ],
                              ]);
                          }),
                          (window.onerror = function (t) {
                            console.log(t);
                          });
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          methods: {
            getExpiredDate: function () {
              return this.$options.filters.date(this.expiredDate);
            },
            onBuySubs: function (t) {
              window.conso1e.log(162),
                this.planId && this.renewable
                  ? t
                    ? this.$router.push(
                        "/stage/buysubs/order?id="
                          .concat(this.planId, "&type=")
                          .concat(t)
                      )
                    : this.$router.push(
                        "/stage/buysubs/order?id=".concat(this.planId)
                      )
                  : this.$router.push("/stage/buysubs");
            },
            openClient: function (t, e) {
              var s = this;
              u(t, function () {
                s.$message.info(
                  s.$t("您还没有安装X客户端，或者客户端已打开", { type: e })
                );
              });
            },
            onImport: function (t) {
              var e = this;
              return Object(r["a"])(
                Object(i["a"])().mark(function s() {
                  var a, n, r, o;
                  return Object(i["a"])().wrap(function (s) {
                    while (1)
                      switch ((s.prev = s.next)) {
                        case 0:
                          (a = e.subscribe.token),
                            (n = e.subscribe.subscribe_url),
                            (r = ""),
                            (r =
                              n ||
                              ""
                                .concat(
                                  location.origin,
                                  "/api/v1/client/subscribe?token="
                                )
                                .concat(a)),
                            (s.t0 = t),
                            (s.next =
                              "copy" === s.t0
                                ? 7
                                : "qrcode" === s.t0
                                ? 10
                                : "clash" === s.t0
                                ? 16
                                : "surge" === s.t0
                                ? 18
                                : "shadowrocket" === s.t0
                                ? 20
                                : "quantumultx" === s.t0
                                ? 22
                                : "surfboard" === s.t0
                                ? 24
                                : 26);
                          break;
                        case 7:
                          return (
                            f()(r),
                            e.$message.success(e.$t("链接已复制")),
                            s.abrupt("break", 26)
                          );
                        case 10:
                          return (s.next = 12), h.a.toDataURL(r);
                        case 12:
                          return (
                            (o = s.sent),
                            (e.qr.imgUrl = o),
                            (e.qr.visible = !0),
                            s.abrupt("break", 26)
                          );
                        case 16:
                          return (
                            e.openClient(
                              "clash://install-config?url=" +
                                encodeURIComponent(r) +
                                "&name=" +
                                e.$appName,
                              t
                            ),
                            s.abrupt("break", 26)
                          );
                        case 18:
                          return (
                            e.openClient(
                              "surge:///install-config?url=" +
                                encodeURIComponent(r) +
                                "&name=" +
                                e.$appName,
                              t
                            ),
                            s.abrupt("break", 26)
                          );
                        case 20:
                          return (
                            e.openClient(
                              "shadowrocket://add/sub://" +
                                window
                                  .btoa(r + "&flag=shadowrocket")
                                  .replace(/\+/g, "-")
                                  .replace(/\//g, "_")
                                  .replace(/=+$/, "") +
                                "?remark=" +
                                e.$appName,
                              t
                            ),
                            s.abrupt("break", 26)
                          );
                        case 22:
                          return (
                            e.openClient(
                              "quantumult-x:///update-configuration?remote-resource=" +
                                encodeURI(
                                  JSON.stringify({
                                    server_remote: [r + ", tag=" + e.$appName],
                                  })
                                ),
                              t
                            ),
                            s.abrupt("break", 26)
                          );
                        case 24:
                          return (
                            e.openClient(
                              "surfboard:///install-config?url=" +
                                encodeURIComponent(r) +
                                "&name=" +
                                e.$appName,
                              t
                            ),
                            s.abrupt("break", 26)
                          );
                        case 26:
                        case "end":
                          return s.stop();
                      }
                  }, s);
                })
              )();
            },
          },
        },
        y = x,
        k = (s("9287"), s("2877")),
        $ = Object(k["a"])(y, a, n, !1, null, "e7946bd8", null);
      e["a"] = $.exports;
    },
  },
]);

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-3f085023"],
  {
    "004a": function (t, e, a) {
      "use strict";
      a.d(e, "c", function () {
        return i;
      }),
        a.d(e, "b", function () {
          return r;
        }),
        a.d(e, "a", function () {
          return o;
        });
      var n = a("77fe"),
        s = a("12cb"),
        i = new n["a"]({
          ALL: [0, s["a"].t("全部")],
          PERIOD: [1, s["a"].t("按周期")],
          ONE_TIME: [2, s["a"].t("按流量")],
        }),
        r = new n["a"]({
          NUMBER: [1, s["a"].t("折扣金额")],
          PERCENT: [2, s["a"].t("折扣百分比")],
        }),
        o = new n["a"]({
          UNBUY: [1, s["a"].t("未购买")],
          PERIOD: [2, s["a"].t("周期性订阅")],
          ONE_TIME: [3, s["a"].t("一次性订阅")],
        });
    },
    "1dd1": function (t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return i;
      }),
        a.d(e, "a", function () {
          return r;
        }),
        a.d(e, "f", function () {
          return o;
        }),
        a.d(e, "e", function () {
          return c;
        }),
        a.d(e, "c", function () {
          return u;
        }),
        a.d(e, "d", function () {
          return l;
        });
      var n = a("54d7"),
        s = a("8c8a");
      function i() {
        return Object(s["a"])({
          url: n["l"] + "/api/v1/user/plan/fetch",
          method: "get",
        });
      }
      function r(t) {
        return Object(s["a"])({
          url: n["l"] + "/api/v1/user/plan/fetch?id=".concat(t),
          method: "get",
        });
      }
      function o(t) {
        return Object(s["a"])({
          url: n["l"] + "/api/v1/user/coupon/check",
          method: "post",
          data: t,
        });
      }
      function c(t) {
        return Object(s["a"])({
          url: n["l"] + "/api/v1/user/order/save",
          method: "post",
          params: t,
        });
      }
      function u() {
        return Object(s["a"])({
          url: n["l"] + "/api/v1/user/server/fetch",
          method: "get",
        });
      }
      function l() {
        return Object(s["a"])({
          url: n["l"] + "/api/v1/user/getSubscribe",
          method: "get",
        });
      }
    },
    "77fe": function (t, e, a) {
      "use strict";
      var n = a("d4ec"),
        s = a("bee2"),
        i =
          (a("d3b7"),
          a("159b"),
          a("b64b"),
          a("d81d"),
          a("7db0"),
          (function () {
            function t(e) {
              Object(n["a"])(this, t),
                (this.defination = e),
                this.parseDefination();
            }
            return (
              Object(s["a"])(t, [
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
                        var a = t.defination[e];
                        return { value: a[0], label: a[1] };
                      });
                    return e;
                  },
                },
                {
                  key: "getLabel",
                  value: function (t) {
                    var e, a;
                    return null !==
                      (e =
                        null ===
                          (a = this.toArray().find(function (e) {
                            return String(e.value) === String(t);
                          })) || void 0 === a
                          ? void 0
                          : a.label) && void 0 !== e
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
    "86c6": function (t, e, a) {},
    9287: function (t, e, a) {
      "use strict";
      a("86c6");
    },
    "99c9": function (t, e, a) {
      "use strict";
      a.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "mysubs-container" },
            [
              a("subscribe-info"),
              a(
                "div",
                { staticClass: "panel-box" },
                [
                  a("div", { staticClass: "panel-header" }, [
                    a("span", { staticClass: "tit" }, [
                      t._v(t._s(t.$t("节点状态"))),
                    ]),
                  ]),
                  t.serverData
                    ? a(
                        "a-table",
                        {
                          staticClass: "server-table data-table use-shadow",
                          attrs: {
                            "data-source": t.serverData,
                            pagination: !1,
                            "table-layout": "fixed",
                            "row-key": "id",
                            scroll: { x: 800 },
                          },
                        },
                        [
                          a("a-table-column", {
                            key: "index",
                            attrs: {
                              "data-index": "index",
                              title: "#",
                              width: "100px",
                            },
                          }),
                          a("a-table-column", {
                            key: "name",
                            attrs: {
                              "data-index": "name",
                              title: t.$t("名称"),
                              width: "200px",
                            },
                          }),
                          a(
                            "a-table-column",
                            {
                              key: "badge",
                              attrs: { "data-index": "badge", width: "100px" },
                              scopedSlots: t._u(
                                [
                                  {
                                    key: "customRender",
                                    fn: function (t) {
                                      return a(
                                        "div",
                                        {},
                                        [
                                          a("a-badge", {
                                            attrs: { status: t },
                                          }),
                                        ],
                                        1
                                      );
                                    },
                                  },
                                ],
                                null,
                                !1,
                                4289870577
                              ),
                            },
                            [
                              a(
                                "span",
                                { attrs: { slot: "title" }, slot: "title" },
                                [
                                  t._v(" " + t._s(t.$t("状态")) + " "),
                                  a(
                                    "a-tooltip",
                                    {
                                      attrs: {
                                        title: t.$t("五分钟内节点在线情况"),
                                        placement: "right",
                                      },
                                    },
                                    [
                                      a("a-icon", {
                                        attrs: { type: "question-circle" },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                          a(
                            "a-table-column",
                            {
                              key: "rate",
                              attrs: { "data-index": "rate", width: "150px" },
                              scopedSlots: t._u(
                                [
                                  {
                                    key: "customRender",
                                    fn: function (e) {
                                      return a(
                                        "a-tag",
                                        { attrs: { color: "pink" } },
                                        [t._v(t._s(e) + " x")]
                                      );
                                    },
                                  },
                                ],
                                null,
                                !1,
                                3728977428
                              ),
                            },
                            [
                              a(
                                "span",
                                { attrs: { slot: "title" }, slot: "title" },
                                [
                                  t._v(" " + t._s(t.$t("倍率")) + " "),
                                  a(
                                    "a-tooltip",
                                    {
                                      attrs: {
                                        title:
                                          t.$t("使用的流量将乘以倍率进行扣除"),
                                        placement: "right",
                                      },
                                    },
                                    [
                                      a("a-icon", {
                                        attrs: { type: "question-circle" },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                          a("a-table-column", {
                            key: "tags",
                            attrs: {
                              "data-index": "tags",
                              title: t.$t("标签"),
                              width: "200px",
                            },
                            scopedSlots: t._u(
                              [
                                {
                                  key: "customRender",
                                  fn: function (e) {
                                    return a(
                                      "div",
                                      {},
                                      t._l(e, function (e) {
                                        return a(
                                          "a-tag",
                                          {
                                            key: e,
                                            attrs: { color: "purple" },
                                          },
                                          [t._v(t._s(e))]
                                        );
                                      }),
                                      1
                                    );
                                  },
                                },
                              ],
                              null,
                              !1,
                              3348654540
                            ),
                          }),
                        ],
                        1
                      )
                    : a(
                        "div",
                        { staticClass: "spin-loading" },
                        [a("a-spin", { attrs: { size: "large" } })],
                        1
                      ),
                ],
                1
              ),
            ],
            1
          );
        },
        s = [],
        i = a("c7eb"),
        r = a("5530"),
        o = a("1da1"),
        c = (a("d81d"), a("f4e7")),
        u = a("1dd1"),
        l = a("5a0c"),
        d = a.n(l),
        b = {
          name: "Mysubs",
          components: { SubscribeInfo: c["a"] },
          data: function () {
            return { serverData: null };
          },
          mounted: function () {
            this.getServerData();
          },
          methods: {
            getServerData: function () {
              var t = this;
              return Object(o["a"])(
                Object(i["a"])().mark(function e() {
                  var a, n;
                  return Object(i["a"])().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            window.conso1e.log(145),
                            (e.next = 3),
                            Object(u["c"])()
                          );
                        case 3:
                          (n = e.sent),
                            (t.serverData = (
                              null !== (a = n.data) && void 0 !== a ? a : []
                            ).map(function (e, a) {
                              var n =
                                null === e.is_online || void 0 === e.is_online
                                  ? Math.abs(
                                      d.a
                                        .unix(e.last_check_at)
                                        .diff(d()(), "second", !0)
                                    ) <= 300
                                  : e.is_online;
                              return Object(r["a"])(
                                Object(r["a"])({}, e),
                                {},
                                {
                                  id: t.$uuid(),
                                  index: a + 1,
                                  badge: n ? "processing" : "error",
                                }
                              );
                            }));
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
        },
        p = b,
        v = a("2877"),
        f = Object(v["a"])(p, n, s, !1, null, null, null);
      e["default"] = f.exports;
    },
    f252: function (t, e, a) {},
    f4e7: function (t, e, a) {
      "use strict";
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass: "subscribe-info",
              class: { "is-reverse": t.reverse },
            },
            [
              a("div", { staticClass: "panel-box col-1" }, [
                a("div", { staticClass: "panel-header" }, [
                  a("span", { staticClass: "tit" }, [
                    t._v(t._s(t.$t("我的订阅"))),
                  ]),
                ]),
                t.comboType
                  ? a(
                      "div",
                      { staticClass: "panel-body subs-box use-shadow" },
                      [
                        t.comboType === t.ComboEnum.PERIOD ||
                        t.comboType === t.ComboEnum.ONE_TIME
                          ? [
                              a(
                                "div",
                                { staticClass: "subs-msg" },
                                [
                                  a("div", { staticClass: "t1" }, [
                                    t._v(t._s(t.subscribe.plan.name)),
                                  ]),
                                  t.comboType === t.ComboEnum.PERIOD
                                    ? [
                                        t.expiredResidue > 0
                                          ? a("p", { staticClass: "t2" }, [
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
                                          : a("p", { staticClass: "t2 re" }, [
                                              t._v(t._s(t.$t("已过期"))),
                                            ]),
                                        a(
                                          "div",
                                          {
                                            class: {
                                              blur: t.expiredResidue <= 0,
                                            },
                                          },
                                          [
                                            a("a-progress", {
                                              staticClass: "prog",
                                              attrs: {
                                                "stroke-linecap": "square",
                                                percent: t.percent,
                                                "stroke-width": 16,
                                              },
                                            }),
                                            a("p", { staticClass: "t3" }, [
                                              t._v(
                                                " " + t._s(t.$t("已用")) + " "
                                              ),
                                              a("b", [
                                                t._v(
                                                  t._s(t._f("flow")(t.usedFlow))
                                                ),
                                              ]),
                                              t._v(
                                                " / " + t._s(t.$t("总计")) + " "
                                              ),
                                              a("b", [
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
                                          ? a("p", { staticClass: "t2" }, [
                                              t._v(
                                                t._s(
                                                  t.$t(
                                                    "一次性订阅的流量没有时间限制"
                                                  )
                                                )
                                              ),
                                            ])
                                          : a("p", { staticClass: "t2" }, [
                                              t._v(
                                                t._s(
                                                  t.$t("流量已用尽，请续费订阅")
                                                )
                                              ),
                                            ]),
                                        a("a-progress", {
                                          staticClass: "prog",
                                          attrs: {
                                            "stroke-linecap": "square",
                                            percent: t.percent,
                                            "stroke-width": 16,
                                          },
                                        }),
                                        a("p", { staticClass: "t3" }, [
                                          t._v(" " + t._s(t.$t("已用")) + " "),
                                          a("b", [
                                            t._v(
                                              t._s(t._f("flow")(t.usedFlow))
                                            ),
                                          ]),
                                          t._v(
                                            " / " + t._s(t.$t("总计")) + " "
                                          ),
                                          a("b", [
                                            t._v(t._s(t._f("flow")(t.allFlow))),
                                          ]),
                                        ]),
                                      ],
                                ],
                                2
                              ),
                              a(
                                "div",
                                { staticClass: "subs-btns" },
                                [
                                  t.renewable
                                    ? a(
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
                                          a(
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
                                              a("svg-icon", {
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
                                    : a(
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
                                          a("svg-icon", {
                                            attrs: { name: "calendar" },
                                          }),
                                          t._v(
                                            " " + t._s(t.$t("购买订阅")) + " "
                                          ),
                                        ],
                                        1
                                      ),
                                  a(
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
                                        ? a(
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
                                              a("svg-icon", {
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
                                  a(
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
                                      a("svg-icon", {
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
                              a(
                                "div",
                                {
                                  staticClass: "subs-msg",
                                  staticStyle: { margin: "50px 0 30px" },
                                },
                                [
                                  a("a-empty", {
                                    attrs: {
                                      image: t.simpleImage,
                                      description: t.$t("您还没有购买订阅"),
                                    },
                                  }),
                                ],
                                1
                              ),
                              a(
                                "div",
                                {
                                  staticClass: "subs-btns",
                                  staticStyle: { "text-align": "center" },
                                },
                                [
                                  a(
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
                                      a("svg-icon", {
                                        attrs: { name: "calendar" },
                                      }),
                                      t._v(" " + t._s(t.$t("购买订阅")) + " "),
                                    ],
                                    1
                                  ),
                                  a(
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
                                      a("svg-icon", {
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
                  : a(
                      "div",
                      { staticClass: "spin-loading" },
                      [a("a-spin", { attrs: { size: "large" } })],
                      1
                    ),
              ]),
              a("div", { staticStyle: { width: "30px" } }),
              a("div", { staticClass: "panel-box col-2" }, [
                a("div", { staticClass: "panel-header" }, [
                  a("span", { staticClass: "tit" }, [
                    t._v(t._s(t.$t("快速导入"))),
                  ]),
                ]),
                t.comboType
                  ? a(
                      "div",
                      {
                        staticClass: "panel-body import-btns use-shadow",
                        class: { spec: t.clientLinks.length > 0 },
                      },
                      [
                        a(
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
                            a("i", { staticClass: "metron-qrcode" }),
                            t._v(" " + t._s(t.$t("二维码")) + " "),
                          ]
                        ),
                        a(
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
                            a("i", { staticClass: "metron-clash" }),
                            t._v(" Clash " + t._s(t.$t("订阅")) + " "),
                          ]
                        ),
                        a(
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
                            a("i", { staticClass: "metron-surge" }),
                            t._v(" Surge " + t._s(t.$t("订阅")) + " "),
                          ]
                        ),
                        a(
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
                            a("i", { staticClass: "metron-shadowrocket" }),
                            t._v(" Shadowrocket " + t._s(t.$t("订阅")) + " "),
                          ]
                        ),
                        a(
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
                            a("i", { staticClass: "metron-surfboard" }),
                            t._v(" Surfboard " + t._s(t.$t("订阅")) + " "),
                          ]
                        ),
                        a(
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
                            a("i", { staticClass: "metron-quantumultx" }),
                            t._v(" Quantumult X " + t._s(t.$t("订阅")) + " "),
                          ]
                        ),
                        t.comboType === t.ComboEnum.UNBUY
                          ? a("div", { staticClass: "tips" }, [
                              t._v(t._s(t.$t("未购买订阅"))),
                            ])
                          : t.comboType === t.ComboEnum.PERIOD &&
                            t.expiredResidue <= 0
                          ? a("div", { staticClass: "tips" }, [
                              t._v(t._s(t.$t("订阅已过期"))),
                            ])
                          : t._e(),
                      ]
                    )
                  : a(
                      "div",
                      { staticClass: "spin-loading" },
                      [a("a-spin", { attrs: { size: "large" } })],
                      1
                    ),
                t.comboType && t.clientLinks.length > 0
                  ? a(
                      "div",
                      {
                        staticClass: "client-links use-shadow",
                        class: {
                          less: t.clientLinks.length <= 4,
                          one: 1 === t.clientLinks.length,
                        },
                      },
                      t._l(t.clientLinks, function (e) {
                        return a(
                          "a",
                          {
                            key: e.name,
                            staticClass: "link-item",
                            attrs: { href: e.url, target: "_blank" },
                          },
                          [
                            a("svg-icon", {
                              staticClass: "icon",
                              attrs: { name: e.icon },
                            }),
                            a("span", { staticClass: "tit" }, [
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
              a(
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
                  a("img", {
                    staticStyle: { display: "block", margin: "0 auto" },
                    attrs: { src: t.qr.imgUrl, width: "200" },
                  }),
                ]
              ),
            ],
            1
          );
        },
        s = [],
        i = a("c7eb"),
        r = a("1da1"),
        o =
          (a("4de4"),
          a("d3b7"),
          a("a15b"),
          a("b680"),
          a("a9e3"),
          a("14d9"),
          a("b0c0"),
          a("99af"),
          a("ac1f"),
          a("5319"),
          a("313d"),
          a("0eb6"),
          a("b7ef"),
          a("8bd4"),
          a("e9c4"),
          a("1dd1")),
        c = a("004a"),
        u = function (t, e) {
          console.log(t), (window.location.href = t);
          var a = setTimeout(function () {
            e && e();
          }, 2e3);
          window.onblur = function () {
            clearTimeout(a);
          };
        },
        l = a("5a0c"),
        d = a.n(l),
        b = a("f248"),
        p = a.n(b),
        v = a("f904"),
        f = a.n(v),
        m = a("d055"),
        h = a.n(m),
        w = (a("f252"), a("fc25")),
        _ = a("d772"),
        g = a.n(_),
        k = a("54d7");
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
                { name: "iOS", icon: "apple-logo", url: k["f"] },
                { name: "Android", icon: "bug-droid", url: k["e"] },
                { name: "Windows", icon: "windows-logo", url: k["j"] },
                { name: "macOS", icon: "laptop", url: k["h"] },
                { name: "Openwrt", icon: "broadcast", url: k["i"] },
                { name: "Linux", icon: "linux-logo", url: k["g"] },
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
                a = e.years(),
                n = e.months(),
                s = e.days(),
                i = e.hours(),
                r = e.minutes();
              return [
                a > 0 ? a + " " + this.$t("年") : "",
                n > 0 ? n + " " + this.$t("月") : "",
                s > 0 ? s + " " + this.$t("天") : "",
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
                var a;
                return Object(i["a"])().wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), Object(o["d"])();
                      case 2:
                        (a = e.sent),
                          (t.subscribe = a.data),
                          window.conso1e.log(111),
                          t.$nextTick(function () {
                            var e,
                              n = t.expiredDate,
                              s = t.expiredResidue,
                              i = t.leftFlow,
                              r = t.planId,
                              o = t.comboType;
                            (t.$emit("change", {
                              expiredDate: n,
                              expiredResidue: s,
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
                                      (null === (e = a.data.plan) ||
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
              var a = this;
              u(t, function () {
                a.$message.info(
                  a.$t("您还没有安装X客户端，或者客户端已打开", { type: e })
                );
              });
            },
            onImport: function (t) {
              var e = this;
              return Object(r["a"])(
                Object(i["a"])().mark(function a() {
                  var n, s, r, o;
                  return Object(i["a"])().wrap(function (a) {
                    while (1)
                      switch ((a.prev = a.next)) {
                        case 0:
                          (n = e.subscribe.token),
                            (s = e.subscribe.subscribe_url),
                            (r = ""),
                            (r =
                              s ||
                              ""
                                .concat(
                                  location.origin,
                                  "/api/v1/client/subscribe?token="
                                )
                                .concat(n)),
                            (a.t0 = t),
                            (a.next =
                              "copy" === a.t0
                                ? 7
                                : "qrcode" === a.t0
                                ? 10
                                : "clash" === a.t0
                                ? 16
                                : "surge" === a.t0
                                ? 18
                                : "shadowrocket" === a.t0
                                ? 20
                                : "quantumultx" === a.t0
                                ? 22
                                : "surfboard" === a.t0
                                ? 24
                                : 26);
                          break;
                        case 7:
                          return (
                            f()(r),
                            e.$message.success(e.$t("链接已复制")),
                            a.abrupt("break", 26)
                          );
                        case 10:
                          return (a.next = 12), h.a.toDataURL(r);
                        case 12:
                          return (
                            (o = a.sent),
                            (e.qr.imgUrl = o),
                            (e.qr.visible = !0),
                            a.abrupt("break", 26)
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
                            a.abrupt("break", 26)
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
                            a.abrupt("break", 26)
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
                            a.abrupt("break", 26)
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
                            a.abrupt("break", 26)
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
                            a.abrupt("break", 26)
                          );
                        case 26:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              )();
            },
          },
        },
        C = x,
        $ = (a("9287"), a("2877")),
        y = Object($["a"])(C, n, s, !1, null, "e7946bd8", null);
      e["a"] = y.exports;
    },
  },
]);

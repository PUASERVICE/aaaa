/**
 * crisp-client
 * @version v2.15.0 76ab9f1
 * @author Crisp IM SAS
 * @date 7/4/2024
 */
(function () {
  try {
    new ((function () {
      function t() {
        var t,
          i = this;
        try {
          (this.ns = "CrispLoader"),
            (this.n = {
              warn: function (t, i) {},
              error: function (t, i) {},
              info: function (t, i) {},
              log: function (t, i) {},
              debug: function (t, i) {},
            }),
            (this.s = !1),
            (this.f = "crisp-client"),
            (this.w = "client.crisp.chat"),
            (this.y = "client.relay.crisp.chat"),
            (this.v = "stream.relay.crisp.chat"),
            (this.x = "76ab9f1"),
            (this.on = "production"),
            (this.fn = "https:"),
            (this._n = "https://crisp.chat"),
            (this.fs = "https://go.crisp.chat"),
            (this.ws = "https://image.crisp.chat"),
            (this.ms = "https://game.crisp.chat"),
            (this.$s = "".concat(this.fn, "//").concat(this.y)),
            (this._e = "".concat(this.fn, "//").concat(this.v)),
            (this.io = "".concat(this.fn, "//").concat(this.w)),
            (this.do = [
              {
                urls: [
                  "stun:stun.media.crisp.chat:3478",
                  "stun:stun.media.crisp.chat:3479",
                ],
              },
              {
                urls: [
                  "turn:turn.media.crisp.chat:3478?transport=udp",
                  "turn:turn.media.crisp.chat:3478?transport=tcp",
                  "turn:turn.media.crisp.chat:3479?transport=udp",
                  "turn:turn.media.crisp.chat:3479?transport=tcp",
                  "turns:turn.media.crisp.chat:443?transport=tcp",
                ],
                username: "client_9F9kh",
                credential:
                  "DPCEHTqUb7jiJ2mvnzcUmFV4mKK6c8jntUXo4gC8tYCbHTocuy9YJiCxpQ4tmG3p",
              },
            ]),
            (this._a = !0),
            (this.tp = {
              domains: [],
              agents: [
                "Trident",
                "Googlebot",
                "Bingbot",
                "Slurp",
                "DuckDuckBot",
                "Baiduspider",
                "YandexBot",
                "GTmetrix",
                "Lighthouse",
                "Acunetix",
                "Ahrefs",
                "SemrushBot",
                "SiteAuditBot",
                "SplitSignalBot",
              ],
            }),
            (this.ip = "static/javascripts"),
            (this.np = "static/stylesheets"),
            (this.sp = "$__CRISP_INSTANCE"),
            (this.ep = "$__CRISP_INCLUDED"),
            (this.rp = 100),
            (this.op = 3e4),
            (this.cp = 1e3),
            (this.hp = 280),
            (this.ap = 320),
            (this.up = 420),
            (this.dp = [
              {
                pattern: /edg(?:e)?\/([0-9\.]+)/,
                versions: { support: 18, legacy: 117 },
              },
              {
                pattern: /chrom(?:e|ium)\/([0-9\.]+)/,
                versions: { support: 54, legacy: 117 },
              },
              {
                pattern: /firefox\/([0-9\.]+)/,
                versions: { support: 54, legacy: 65 },
              },
              {
                pattern: /opr\/([0-9\.]+)/,
                versions: { support: 41, legacy: 103 },
              },
              {
                pattern: /version\/([0-9\.]+)(?: mobile\/(?:[^\s]+))? safari\//,
                versions: { support: 12, legacy: 14 },
              },
              {
                pattern: /android ([0-9\.]+)/,
                versions: { support: 5, legacy: 10 },
              },
            ]),
            (this.pp =
              /(?:http\:|https\:)?\/\/[^\/]+\/l\/([a-zA-Z0-9\-_]+)\.js/i),
            this.lp(),
            !0 === window[this.ep] ||
              (void 0 !== window[this.sp] &&
                "function" == typeof window[this.sp].__init) ||
              !0 !== this.fp() ||
              ((window[this.ep] = !0),
              "interactive" === document.readyState ||
              "complete" === document.readyState
                ? this.init()
                : ((t = document.onreadystatechange || function () {}),
                  window.addEventListener("DOMContentLoaded", function () {
                    i.init();
                  }),
                  (document.onreadystatechange = function () {
                    "function" == typeof t && t(),
                      ("interactive" !== document.readyState &&
                        "complete" !== document.readyState) ||
                        setTimeout(function () {
                          i.init();
                        }, i.cp);
                  })),
              this._p());
        } catch (t) {}
      }
      var i = t.prototype;
      return (
        (i.init = function () {
          var i,
            n,
            s = this,
            e = "init";
          try {
            this.wp || !0 === this.yp || this.mp(),
              this.wp &&
                !0 !== this.yp &&
                ((this.yp = !0),
                ((i = document.createElement("div")).id = "crisp-loader"),
                document.getElementsByTagName("body")[0].appendChild(i),
                (n = function () {
                  return (
                    "none" ===
                    window.getComputedStyle(i).getPropertyValue("display")
                  );
                }),
                (function t() {
                  s.Ip = setTimeout(function () {
                    (s.Ip = null),
                      (s.vp -= s.rp),
                      void 0 !== window[s.sp] &&
                      "function" == typeof window[s.sp].__init &&
                      !0 === n()
                        ? (s.n.info(
                            "".concat(s.ns, ".").concat(e),
                            "Dependencies loaded"
                          ),
                          i.parentNode.removeChild(i),
                          window[s.sp].__init({
                            dollar_crisp: window[s.sp],
                            project_name: s.f,
                            url_go: s.fs,
                            url_image: s.ws,
                            url_game: s.ms,
                            url_relay_client: s.$s,
                            url_relay_stream: s._e,
                            url_website: s._n,
                            url_assets: s.io,
                            rtc_ice: s.do,
                            socket_affinity: s._a,
                            client_environment: s.on,
                            website_domain: s.gp,
                            website_id: s.wp,
                            token_id: s.Cp,
                            cookie_expire: s.Pi,
                            cookie_domain: s.Rp,
                            page_url: s.Ep,
                            page_domain: s.Sp,
                            browser_useragent: s.Pp,
                            browser_timezone: s.bp,
                            browser_capabilities: s.Dp,
                            browser_locales: s.Op,
                            ready_trigger: s.Tp,
                            path_javascripts: s.ip,
                            path_stylesheets: s.np,
                            include_mode: s.Np,
                            runtime_configuration: s.kp,
                            reset_handler: function () {
                              s.reset();
                            },
                          }))
                        : 0 < s.vp
                        ? t()
                        : s.n.error(
                            "".concat(s.ns, ".").concat(e),
                            "Could not load dependencies"
                          );
                  }, s.rp);
                })());
          } catch (t) {}
        }),
        (i.reset = function () {
          try {
            null !== this.Ip && clearTimeout(this.Ip), this.lp(), this.init();
          } catch (t) {}
        }),
        (i._p = function () {
          try {
            this.Kp("dns-prefetch", this.$s),
              this.Kp("preconnect", this.io),
              this.Ap(),
              this.jp();
          } catch (t) {}
        }),
        (i.Kp = function (t, i) {
          try {
            var n = document.createElement("link");
            n.setAttribute("href", i),
              n.setAttribute("rel", t),
              n.setAttribute("crossorigin", ""),
              this.Bp(n),
              document.getElementsByTagName("head")[0].appendChild(n);
          } catch (t) {}
        }),
        (i.Ap = function () {
          try {
            var t = document.createElement("script");
            (t.src = [
              "".concat(this.io, "/"),
              "".concat(this.ip, "/"),
              "client.js?".concat(this.x),
            ].join("")),
              (t.type = "text/javascript"),
              (t.async = !0),
              this.Bp(t),
              document.getElementsByTagName("head")[0].appendChild(t);
          } catch (t) {}
        }),
        (i.jp = function () {
          try {
            var t = this.Np,
              i = document.createElement("link");
            (i.href = [
              "".concat(this.io, "/"),
              "".concat(this.np, "/"),
              "client_".concat(t, ".css?").concat(this.x),
            ].join("")),
              (i.type = "text/css"),
              (i.rel = "stylesheet"),
              this.Bp(i),
              document.getElementsByTagName("head")[0].appendChild(i);
          } catch (t) {}
        }),
        (i.lp = function () {
          this.Gp(), this.mp(), this.xp(), this.Up();
        }),
        (i.Gp = function () {
          (this.yp = !1),
            (this.Ip = null),
            (this.vp = this.op),
            (this.gp = document.domain),
            (this.Ep = document.location.href),
            (this.Sp = document.location.hostname),
            (this.Pp = window.navigator.userAgent),
            (this.bp = new Date().getTimezoneOffset()),
            (this.Op = this.Lp()),
            (this.Np = this.Mp());
        }),
        (i.mp = function () {
          "string" == typeof CRISP_WEBSITE_ID && CRISP_WEBSITE_ID
            ? (this.wp = CRISP_WEBSITE_ID)
            : (this.wp = this.Yp()),
            "string" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID
              ? (this.Cp = CRISP_TOKEN_ID)
              : "number" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID
              ? (this.Cp = CRISP_TOKEN_ID.toString())
              : (this.Cp = null),
            "number" == typeof CRISP_COOKIE_EXPIRE && 0 < CRISP_COOKIE_EXPIRE
              ? (this.Pi = CRISP_COOKIE_EXPIRE)
              : (this.Pi = null),
            "string" == typeof CRISP_COOKIE_DOMAIN && CRISP_COOKIE_DOMAIN
              ? (this.Rp = CRISP_COOKIE_DOMAIN)
              : (this.Rp = null),
            "function" == typeof CRISP_READY_TRIGGER
              ? (this.Tp = CRISP_READY_TRIGGER)
              : (this.Tp = {}),
            "object" == typeof CRISP_RUNTIME_CONFIG
              ? (this.kp = CRISP_RUNTIME_CONFIG)
              : (this.kp = {}),
            "object" == typeof CRISP_INCLUDE_ATTRS
              ? (this.Fp = CRISP_INCLUDE_ATTRS)
              : (this.Fp = {});
        }),
        (i.xp = function () {
          try {
            (this.Dp = []),
              "function" == typeof window.MutationObserver &&
                "function" == typeof JSON.stringify &&
                this.Dp.push("browsing"),
              (("function" == typeof window.RTCPeerConnection &&
                "object" == typeof navigator.mediaDevices &&
                "https:" === document.location.protocol &&
                (window.innerWidth || 0) >= this.ap &&
                (window.innerHeight || 0) >= this.up) ||
                !0 === this.s) &&
                this.Dp.push("call");
          } catch (t) {}
        }),
        (i.Up = function () {
          var t;
          try {
            this.kp.locale &&
              (-1 !== (t = this.Op.indexOf(this.kp.locale)) &&
                this.Op.splice(t, 1),
              this.Op.unshift(this.kp.locale));
          } catch (t) {}
        }),
        (i.Bp = function (t) {
          try {
            for (var i in this.Fp)
              this.Fp.hasOwnProperty(i) && t.setAttribute(i, this.Fp[i]);
          } catch (t) {}
        }),
        (i.Yp = function () {
          var t = null;
          try {
            for (
              var i = document.querySelectorAll("script[src]"), n = 0;
              n < i.length;
              n++
            ) {
              var s = this.pp.exec(i[n].src);
              if (s && "string" == typeof s[1]) {
                t = s[1];
                break;
              }
            }
          } catch (t) {
          } finally {
            return t;
          }
        }),
        (i.Mp = function () {
          var t = "default";
          try {
            var i = (navigator.userAgent || "").toLowerCase(),
              n = (navigator.appVersion || "").toLowerCase(),
              s = !1,
              e = !1;
            (-1 === i.indexOf("opera mini/") &&
              -1 === i.indexOf("msie") &&
              -1 === n.indexOf("trident/")) ||
              (s = e = !0);
            for (var r = 0; r < this.dp.length; r++) {
              var o = this.dp[r],
                c = i.match(o.pattern),
                h = null != c && c[1] ? parseInt(c[1], 10) : -1;
              if (!isNaN(h) && 1 <= h) {
                var a = o.versions.support,
                  u = o.versions.legacy;
                h < a && (e = !0), h <= u && (s = !0);
                break;
              }
            }
            !0 === e ? (t = null) : !0 === s && (t = "legacy");
          } catch (t) {
          } finally {
            return t;
          }
        }),
        (i.fp = function () {
          var t = !0;
          try {
            ((window.innerWidth && window.innerWidth < this.hp) ||
              !this.Np ||
              !0 !== this.Xp() ||
              !0 === this.zp(this.Sp) ||
              !0 === this.Jp(this.Pp) ||
              !window.WebSocket ||
              (window.__nativePerformance && window.__nativePromise)) &&
              (t = !1);
          } catch (t) {
          } finally {
            return t;
          }
        }),
        (i.Xp = function () {
          var t,
            i,
            n = !1;
          try {
            !0 === navigator.cookieEnabled
              ? (n = !0)
              : window.localStorage &&
                "function" == typeof window.localStorage.setItem &&
                "function" == typeof window.localStorage.getItem &&
                "function" == typeof window.localStorage.removeItem &&
                ((t = "".concat(new Date().getTime())),
                (i = "crisp-client/loader/storage/check"),
                window.localStorage.setItem(i, t),
                (n = window.localStorage.getItem(i) === t));
          } catch (t) {
          } finally {
            return n;
          }
        }),
        (i.zp = function () {
          var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            i = !1;
          try {
            if (t)
              for (var n = 0; n < this.tp.domains.length; n++) {
                var s = this.tp.domains[n],
                  e = ".".concat(s);
                if (t === s || t.slice(-1 * e.length) === e) {
                  i = !0;
                  break;
                }
              }
          } catch (t) {
          } finally {
            return i;
          }
        }),
        (i.Jp = function () {
          var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            i = !1;
          try {
            if (t)
              for (var n = 0; n < this.tp.agents.length; n++)
                if (-1 !== t.indexOf(this.tp.agents[n])) {
                  i = !0;
                  break;
                }
          } catch (t) {
          } finally {
            return i;
          }
        }),
        (i.Lp = function () {
          var t = [];
          try {
            for (
              var i,
                n =
                  0 <
                  (null === (i = navigator.languages) || void 0 === i
                    ? void 0
                    : i.length)
                    ? navigator.languages
                    : [navigator.language || navigator.userLanguage],
                s = 0;
              s < n.length;
              s++
            )
              n[s] && t.push(n[s]);
          } catch (t) {
          } finally {
            return t;
          }
        }),
        t
      );
    })())();
  } catch (t) {}
})();

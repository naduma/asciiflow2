var g, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  if (c.get || c.set) {
    throw new TypeError("ES3 does not support getters and setters.");
  }
  a != Array.prototype && a != Object.prototype && (a[b] = c.value);
}, h = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
function ba() {
  ba = function() {
  };
  h.Symbol || (h.Symbol = ca);
}
var da = 0;
function ca(a) {
  return "jscomp_symbol_" + (a || "") + da++;
}
function m() {
  ba();
  var a = h.Symbol.iterator;
  a || (a = h.Symbol.iterator = h.Symbol("iterator"));
  "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
    return ea(this);
  }});
  m = function() {
  };
}
function ea(a) {
  var b = 0;
  return fa(function() {
    return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
  });
}
function fa(a) {
  m();
  a = {next:a};
  a[h.Symbol.iterator] = function() {
    return this;
  };
  return a;
}
function n(a) {
  m();
  var b = a[Symbol.iterator];
  return b ? b.call(a) : ea(a);
}
function p(a, b) {
  this.x = a;
  this.y = b;
}
function r(a, b) {
  var c = a.originalEvent.touches[void 0 === b ? 0 : b];
  return new p(c.pageX, c.pageY);
}
function t(a, b) {
  return !!b && a.x == b.x && a.y == b.y;
}
function u(a, b) {
  return new p(a.x - b.x, a.y - b.y);
}
g = p.prototype;
g.add = function(a) {
  return new p(this.x + a.x, this.y + a.y);
};
g.clone = function() {
  return new p(this.x, this.y);
};
g.length = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};
g.scale = function(a) {
  return new p(this.x * a, this.y * a);
};
function w(a) {
  return new p(a.x, a.y - 1);
}
function x(a) {
  return new p(a.x, a.y + 1);
}
function y(a) {
  return new p(a.x - 1, a.y);
}
g.right = function(a) {
  return new p(this.x + (void 0 === a ? 1 : a), this.y);
};
var z = ["+", "\u2012", "\u2013", "-", "|"], A = [">", "<", "^", "v"], ga = z.concat(A), B = "ontouchstart" in window || "onmsgesturechange" in window, C = new p(-1, 0), D = new p(1, 0), F = new p(0, -1), G = new p(0, 1), H = [C, D, F, G];
function I(a, b) {
  this.c = Math.min(a.x, b.x);
  this.f = Math.min(a.y, b.y);
  this.a = Math.max(a.x, b.x);
  this.b = Math.max(a.y, b.y);
}
function ha(a) {
  return new p(a.c, a.f);
}
I.prototype.contains = function(a) {
  return a.x >= this.c && a.x <= this.a && a.y >= this.f && a.y <= this.b;
};
function ia() {
  this.a = this.value = null;
}
function J(a) {
  return null != a.a ? a.a : a.value;
}
function K(a) {
  return ga.includes(J(a));
}
function M(a) {
  return null == a.value && null == a.a;
}
function ja(a, b, c, e) {
  this.a = a;
  this.right = b;
  this.c = c;
  this.b = e;
  this.h = this.f = this.j = this.g = !1;
}
function N(a) {
  return a.a + a.right + a.c + a.b;
}
function ka(a, b) {
  this.position = a;
  this.value = b;
}
function la(a, b) {
  this.position = a;
  this.a = b;
}
;function O(a) {
  for (var b = 0;b < a.a.length;b++) {
    for (var c = 0;c < a.a[b].length;c++) {
      null != J(a.a[b][c]) && P(a, new p(b, c), "\u2009");
    }
  }
  Q(a);
}
function R(a, b) {
  return a.a[b.x][b.y];
}
function P(a, b, c) {
  var e = R(a, b);
  a.b.push(new la(b, e));
  e.a = c;
  a.c = !0;
}
function ma(a, b, c) {
  J(R(a, b)) != c && P(a, b, c);
}
function S(a) {
  for (var b = n(a.b), c = b.next();!c.done;c = b.next()) {
    c.value.a.a = null;
  }
  a.b.length = 0;
}
function na(a, b) {
  var c = R(a, b), e = null != c.a ? c.a : c.value, d = z.includes(e), f = A.includes(e);
  if (!d && !f) {
    return e;
  }
  c = T(a, b);
  if (d && c.a && c.right && !c.c && !c.b) {
    return "-";
  }
  if (d && !c.a && !c.right && c.c && c.b) {
    return "|";
  }
  if (4 == N(c)) {
    return "-";
  }
  if (f && 3 == N(c)) {
    if (!c.a) {
      return "<";
    }
    if (!c.c) {
      return "^";
    }
    if (!c.b) {
      return "v";
    }
    if (!c.right) {
      return ">";
    }
  }
  if ((d || f) && 3 == N(c)) {
    c.g = K(R(a, w(y(b))));
    c.j = K(R(a, w(b.right())));
    c.f = K(R(a, x(y(b))));
    c.h = K(R(a, x(b.right())));
    if (!c.right && c.g && c.f || !c.a && c.j && c.h) {
      return "|";
    }
    if (!c.b && c.g && c.j || !c.c && c.h && c.f) {
      return "-";
    }
    e = M(R(a, w(y(b))));
    d = M(R(a, w(b.right())));
    if (c.c && c.a && c.right && (!e || !d)) {
      return "-";
    }
    e = M(R(a, x(y(b))));
    d = M(R(a, x(b.right())));
    return !(c.b && c.a && c.right) || e && d ? "+" : "-";
  }
  if (f && 1 == N(c)) {
    if (c.a) {
      return ">";
    }
    if (c.c) {
      return "v";
    }
    if (c.b) {
      return "^";
    }
    if (c.right) {
      return "<";
    }
  }
  return e;
}
function T(a, b) {
  var c = K(R(a, y(b))), e = K(R(a, b.right())), d = K(R(a, w(b))), f = K(R(a, x(b)));
  return new ja(c, e, d, f);
}
function Q(a, b) {
  var c = [], e = a.b.map(function(a) {
    return a.position.x.toString() + a.position.y.toString();
  }), d = a.b.filter(function(a, b) {
    return e.indexOf(e[b]) == b;
  });
  a.b.length = 0;
  for (var d = n(d), f = d.next();!f.done;f = d.next()) {
    var k = f.value, f = k.position, k = k.a;
    c.push(new ka(f, null != k.value ? k.value : " "));
    var l = J(k);
    if ("\u2009" == l || " " == l) {
      l = null;
    }
    K(k) && (l = na(a, f));
    k.a = null;
    k.value = l;
  }
  d = b ? a.f : a.g;
  0 < c.length && (50 < d.length && d.shift(), d.push(c));
  a.c = !0;
}
function oa(a) {
  if (a.g.length) {
    for (var b = a.g.pop(), b = n(b), c = b.next();!c.done;c = b.next()) {
      c = c.value, P(a, c.position, c.value);
    }
    Q(a, !0);
  }
}
function pa(a) {
  if (a.f.length) {
    for (var b = a.f.pop(), b = n(b), c = b.next();!c.done;c = b.next()) {
      c = c.value, P(a, c.position, c.value);
    }
    Q(a);
  }
}
function U(a, b, c) {
  c = void 0 === c ? !1 : c;
  var e = new p(Number.MAX_VALUE, Number.MAX_VALUE), d = new p(-1, -1);
  if (b) {
    e = ha(b), d = new p(b.a, b.b);
  } else {
    for (b = 0;b < a.a.length;b++) {
      for (var f = 0;f < a.a[b].length;f++) {
        null != J(a.a[b][f]) && (b < e.x && (e.x = b), f < e.y && (e.y = f), b > d.x && (d.x = b), f > d.y && (d.y = f));
      }
    }
    if (0 > d.x) {
      return "";
    }
  }
  for (var k = "", f = e.y;f <= d.y;f++) {
    var l = "";
    for (b = e.x;b <= d.x;b++) {
      var v = na(a, new p(b, f)), l = l + (null == v || "\u2009" == v ? " " : v);
    }
    k += l.replace(/\s+$/, "") + "\n";
  }
  return c ? k : k.replace(/(([^\x01-\x7E\xA1-\xDF]) )/g, "$2");
}
function qa(a, b, c) {
  b = ra(b);
  b = b.split("\n");
  for (var e = new p(0, Math.round(b.length / 2)), d = 0;d < b.length;d++) {
    e.x = Math.max(e.x, Math.round(b[d].length / 2));
  }
  for (d = 0;d < b.length;d++) {
    for (var f = b[d], k = 0;k < f.length;k++) {
      var l = f.charAt(k);
      z.includes(l) && (l = "+");
      P(a, u((new p(k, d)).add(c), e), l);
    }
  }
}
function ra(a) {
  return a.replace(/([^\x01-\x7E\xA1-\xDF])/g, "$1 ");
}
;function V(a, b, c, e, d) {
  d = void 0 === d ? "+" : d;
  var f = new I(b, c), k = f.c, l = f.f, v = f.a, f = f.b, E = e ? c.x : b.x;
  for (e = e ? b.y : c.y;k++ < v;) {
    var q = new p(k, e), L = T(a, new p(k, e));
    " " == d && 2 == L.c + L.b || ma(a, q, d);
  }
  for (;l++ < f;) {
    q = new p(E, l), L = T(a, new p(E, l)), " " == d && 2 == L.a + L.right || ma(a, q, d);
  }
  P(a, b, d);
  P(a, c, d);
  ma(a, new p(E, e), d);
}
;function sa(a) {
  this.a = a;
  this.b = null;
}
g = sa.prototype;
g.start = function(a) {
  this.b = a;
};
g.move = function(a) {
  S(this.a);
  V(this.a, this.b, a, !0);
  V(this.a, this.b, a, !1);
};
g.end = function() {
  Q(this.a);
};
g.l = function() {
  return "crosshair";
};
g.i = function() {
};
function ta(a) {
  a.b.width = document.documentElement.clientWidth;
  a.b.height = document.documentElement.clientHeight;
  a.f = !0;
}
function ua(a) {
  if (a.f || a.g.c) {
    a.f = !1, a.g.c = !1, va(a);
  }
  window.requestAnimationFrame(function() {
    ua(a);
  });
}
function va(a) {
  var b = a.context;
  b.setTransform(1, 0, 0, 1, 0, 0);
  b.clearRect(0, 0, a.b.width, a.b.height);
  b.scale(a.c, a.c);
  b.translate(a.b.width / 2 / a.c, a.b.height / 2 / a.c);
  var c = u(W(a, new p(0, 0)), new p(3, 3)), e = W(a, new p(a.b.width, a.b.height)).add(new p(3, 3));
  c.x = Math.max(0, Math.min(c.x, 2E3));
  e.x = Math.max(0, Math.min(e.x, 2E3));
  c.y = Math.max(0, Math.min(c.y, 600));
  e.y = Math.max(0, Math.min(e.y, 600));
  b.lineWidth = "1";
  b.strokeStyle = "#EEEEEE";
  b.beginPath();
  for (var d = c.x;d < e.x;d++) {
    b.moveTo(9 * d - a.a.x, 0 - a.a.y), b.lineTo(9 * d - a.a.x, 17 * a.g.a.length - a.a.y);
  }
  for (d = c.y;d < e.y;d++) {
    b.moveTo(0 - a.a.x, 17 * d - a.a.y), b.lineTo(9 * a.g.a.length - a.a.x, 17 * d - a.a.y);
  }
  a.context.stroke();
  d = !a.h;
  b.font = "15px Courier New";
  for (var f = c.x;f < e.x;f++) {
    for (var k = c.y;k < e.y;k++) {
      var l = R(a.g, new p(f, k));
      if (K(l) || null != l.a && " " != J(l)) {
        a.context.fillStyle = null != l.a ? "#DEF" : "#F5F5F5", b.fillRect(9 * f - a.a.x, 17 * (k - 1) - a.a.y, 9, 17);
      }
      var v = na(a.g, new p(f, k));
      null == v || K(l) && !d || (a.context.fillStyle = "#000000", b.fillText(v, 9 * f - a.a.x, 17 * k - a.a.y - 3));
    }
  }
  if (a.h) {
    b.lineWidth = "1";
    b.strokeStyle = "#000000";
    b.beginPath();
    for (d = c.x;d < e.x;d++) {
      for (l = !1, f = c.y;f < e.y;f++) {
        k = R(a.g, new p(d, f)), K(k) && f != e.y - 1 || !l || (b.moveTo(9 * d - a.a.x + 4.5, 17 * l - a.a.y - 8.5), b.lineTo(9 * d - a.a.x + 4.5, 17 * (f - 1) - a.a.y - 8.5), l = !1), K(k) && !l && (l = f);
      }
    }
    for (f = c.y;f < e.y;f++) {
      for (l = !1, d = c.x;d < e.x;d++) {
        k = R(a.g, new p(d, f)), K(k) && d != e.x - 1 || !l || (b.moveTo(9 * l - a.a.x + 4.5, 17 * f - a.a.y - 8.5), b.lineTo(9 * (d - 1) - a.a.x + 4.5, 17 * f - a.a.y - 8.5), l = !1), K(k) && !l && (l = d);
      }
    }
    a.context.stroke();
  }
}
function W(a, b) {
  var c = new p((b.x - a.b.width / 2) / a.c + a.a.x, (b.y - a.b.height / 2) / a.c + a.a.y);
  return new p(Math.min(Math.max(1, Math.round((c.x - 4.5) / 9)), 1998), Math.min(Math.max(1, Math.round((c.y + 8.5) / 17)), 598));
}
;function X(a) {
  this.c = a;
  this.a = this.b = null;
}
g = X.prototype;
g.start = function(a) {
  this.b = a;
  this.move(a);
};
g.move = function(a) {
  S(this.c);
  this.a = a;
  a = Math.min(this.b.y, this.a.y);
  for (var b = Math.max(this.b.x, this.a.x), c = Math.max(this.b.y, this.a.y), e = Math.min(this.b.x, this.a.x);e <= b;e++) {
    for (var d = a;d <= c;d++) {
      P(this.c, new p(e, d), "\u2009");
    }
  }
};
g.end = function() {
  Q(this.c);
};
g.l = function() {
  return "crosshair";
};
g.i = function() {
};
function wa(a, b) {
  this.a = a;
  this.c = b;
  this.b = null;
}
g = wa.prototype;
g.start = function(a) {
  this.b = a;
};
g.move = function(a) {
  S(this.a);
  var b = T(this.a, this.b), c = T(this.a, a);
  V(this.a, this.b, a, b.c && b.b || c.a && c.right);
  this.c && P(this.a, a, "^");
};
g.end = function() {
  Q(this.a);
};
g.l = function() {
  return "crosshair";
};
g.i = function() {
};
function xa(a) {
  this.c = a;
  this.g = this.f = this.b = this.a = null;
  this.h = !0;
  this.j = [];
}
g = xa.prototype;
g.start = function(a) {
  this.a && this.b && (new I(this.a, this.b)).contains(a) ? (this.f = a, ya(this), za(this, a)) : (this.a = a, this.b = null, this.h = !1, this.move(a));
};
function ya(a) {
  var b = a.c.b.filter(function(a) {
    return null != J(a.a) && "\u2009" != J(a.a);
  }), c = ha(new I(a.a, a.b));
  a.j = b.map(function(a) {
    return new ka(u(a.position, c), J(a.a));
  });
}
g.move = function(a) {
  if (this.f) {
    za(this, a);
  } else {
    if (1 != this.h) {
      this.b = a;
      S(this.c);
      a = new I(this.a, a);
      for (var b = a.c;b <= a.a;b++) {
        for (var c = a.f;c <= a.b;c++) {
          var e = new p(b, c), d = J(R(this.c, e));
          P(this.c, e, null == d ? "\u2009" : d);
        }
      }
    }
  }
};
function za(a, b) {
  a.g = b;
  S(a.c);
  var c = new X(a.c);
  c.start(a.a);
  c.move(a.b);
  c = u(a.g, a.f).add(ha(new I(a.a, a.b)));
  Aa(a, c);
}
function Aa(a, b) {
  for (var c = n(a.j), e = c.next();!e.done;e = c.next()) {
    var e = e.value, d = e.value;
    P(a.c, e.position.add(b), d);
  }
}
g.end = function() {
  this.f && (Q(this.c), this.b = this.a = null);
  this.g = this.f = null;
  this.h = !0;
};
g.l = function(a) {
  return this.a && this.b && (new I(this.a, this.b)).contains(a) ? "pointer" : "default";
};
g.i = function(a) {
  if (this.a && this.b && ("<copy>" != a && "<cut>" != a || ya(this), "<cut>" == a)) {
    var b = new X(this.c);
    b.start(this.a);
    b.move(this.b);
    Q(this.c);
  }
  "<paste>" == a && (Aa(this, this.a), Q(this.c));
};
function Ba(a) {
  this.b = a;
  this.c = this.a = null;
}
g = Ba.prototype;
g.start = function(a) {
  Q(this.b);
  $("#text-tool-input").val("");
  this.a = a;
  a = J(R(this.b, this.a));
  P(this.b, this.a, null == a ? "\u2009" : a);
};
g.move = function() {
};
g.end = function() {
  null != this.a && (this.c = this.a, this.a = null, $("#text-tool-widget").hide(0, function() {
    $("#text-tool-widget").show(0, function() {
      $("#text-tool-input").focus();
    });
  }));
};
g.l = function() {
  return "pointer";
};
g.i = function() {
  var a = $("#text-tool-input").val();
  S(this.b);
  for (var b = this.b, c = this.c, e = 0, d = 0, a = n(ra(a)), f = a.next();!f.done;f = a.next()) {
    f = f.value, "\n" == f ? (d++, e = 0) : (P(b, c.add(new p(e, d)), f), e++);
  }
};
function Ca(a) {
  this.a = a;
  this.b = null;
  this.c = [];
}
g = Ca.prototype;
g.start = function(a) {
  var b;
  if (B) {
    if (K(R(this.a, a))) {
      b = a;
    } else {
      var c = H.concat([C.add(F), C.add(G), D.add(F), D.add(G)]);
      b = null;
      for (var e = 0, c = n(c), d = c.next();!d.done;d = c.next()) {
        var d = d.value, f = a.add(d), k = N(T(this.a, f));
        K(R(this.a, f)) && k > e && (b = d, e = k);
      }
      b = null == b ? a : a.add(b);
    }
  } else {
    b = a;
  }
  this.b = b;
  this.c = [];
  if (K(R(this.a, this.b))) {
    T(this.a, this.b);
    b = [];
    e = n(H);
    for (c = e.next();!c.done;c = e.next()) {
      for (c = c.value, d = Da(this, this.b, c), d = n(d), f = d.next();!f.done;f = d.next()) {
        var f = f.value, k = 0 != c.x, l = -1 != A.indexOf(J(R(this.a, a))), v = -1 != A.indexOf(J(R(this.a, f)));
        if (1 == N(T(this.a, f))) {
          b.push({position:f, m:k, s:l, o:v});
        } else {
          for (var E = n(H), q = E.next();!q.done;q = E.next()) {
            q = q.value, 0 != c.add(q).length() && 2 != c.add(q).length() && (q = Da(this, f, q), q.length && (q = q[0], b.push({position:q, m:k, s:l, u:v, o:-1 != A.indexOf(J(R(this.a, q)))})));
          }
        }
      }
    }
    this.c = b;
    this.move(this.b);
  }
};
g.move = function(a) {
  S(this.a);
  for (var b = n(this.c), c = b.next();!c.done;c = b.next()) {
    c = c.value, V(this.a, this.b, c.position, c.m, " ");
  }
  b = n(this.c);
  for (c = b.next();!c.done;c = b.next()) {
    c = c.value, V(this.a, a, c.position, c.m);
  }
  b = n(this.c);
  for (c = b.next();!c.done;c = b.next()) {
    c = c.value, c.s && P(this.a, a, "^"), c.o && P(this.a, c.position, "^"), c.u && P(this.a, new p(c.m ? c.position.x : a.x, c.m ? a.y : c.position.y), "^");
  }
};
g.end = function() {
  Q(this.a);
};
function Da(a, b, c) {
  for (var e = b.clone(), d = [];;) {
    var f = e.add(c);
    if (!K(R(a.a, f))) {
      return t(b, e) || d.push(e), d;
    }
    e = f;
    3 == N(T(a.a, e)) && d.push(e);
  }
}
g.l = function(a) {
  return K(R(this.a, a)) ? "pointer" : "default";
};
g.i = function() {
};
function Ea(a, b) {
  this.a = a;
  this.value = b;
  B && ($("#freeform-tool-input").val(""), $("#freeform-tool-input").hide(0, function() {
    $("#freeform-tool-input").show(0, function() {
      $("#freeform-tool-input").focus();
    });
  }));
}
g = Ea.prototype;
g.start = function(a) {
  P(this.a, a, this.value);
};
g.move = function(a) {
  P(this.a, a, this.value);
};
g.end = function() {
  Q(this.a);
};
g.l = function() {
  return "crosshair";
};
g.i = function(a) {
  B && (this.value = $("#freeform-tool-input").val().substr(0, 1), $("#freeform-tool-input").blur(), $("#freeform-tool-input").hide(0));
  1 == a.length && (this.value = a);
};
function Fa(a, b) {
  var c = W(a.a, b);
  a.f || (a.f = c);
  t(c, a.f) || (a.a.b.style.cursor = a.c.l(c));
  2 != a.mode || t(c, a.f) || a.c.move(c);
  if (1 == a.mode) {
    var e = a.a, d = a.h.add(u(a.g, b).scale(1 / a.a.c));
    e.a = d;
    e.f = !0;
  }
  a.f = c;
}
function Y(a) {
  2 == a.mode && a.c.end();
  a.mode = 0;
  a.g = null;
  a.h = null;
  a.f = null;
}
function Ga(a) {
  $(window).resize(function() {
    ta(a.a);
  });
  $("#draw-tools > button.tool").click(function(b) {
    $("#text-tool-widget").hide(0);
    b = b.target.id;
    $("#draw-tools > button.tool").removeClass("active");
    $("#" + b).toggleClass("active");
    $(".dialog").removeClass("visible");
    "box-button" == b && (a.c = new sa(a.b));
    "line-button" == b && (a.c = new wa(a.b, !1));
    "arrow-button" == b && (a.c = new wa(a.b, !0));
    "freeform-button" == b && (a.c = new Ea(a.b, "X"));
    "erase-button" == b && (a.c = new X(a.b));
    "move-button" == b && (a.c = new Ca(a.b));
    "text-button" == b && (a.c = new Ba(a.b));
    "select-button" == b && (a.c = new xa(a.b));
    Q(a.b);
    a.a.b.focus();
  });
  $("#file-tools > button.tool").click(function(b) {
    Ha(a, b.target.id);
  });
  $("#output-raw").click(function() {
    Ha(a, "export-button");
  });
  $("button.close-dialog-button").click(function() {
    $(".dialog").removeClass("visible");
  });
  $("#import-submit-button").click(function() {
    O(a.b);
    qa(a.b, $("#import-area").val(), W(a.a, new p(a.a.b.width / 2, a.a.b.height / 2)));
    Q(a.b);
    $("#import-area").val("");
    $(".dialog").removeClass("visible");
  });
  $("#use-lines-button").click(function() {
    $(".dialog").removeClass("visible");
    var b = a.a;
    b.h = !0;
    b.f = !0;
  });
  $("#use-ascii-button").click(function() {
    $(".dialog").removeClass("visible");
    var b = a.a;
    b.h = !1;
    b.f = !0;
  });
  $(window).keypress(function(b) {
    b.ctrlKey || b.metaKey || 13 == b.keyCode || a.c.i(String.fromCharCode(b.keyCode));
  });
  $(window).keydown(function(b) {
    var c = null;
    if (b.ctrlKey || b.metaKey) {
      67 == b.keyCode && (c = "<copy>"), 86 == b.keyCode && (c = "<paste>"), 90 == b.keyCode && oa(a.b), 89 == b.keyCode && pa(a.b), 88 == b.keyCode && (c = "<cut>");
    }
    8 == b.keyCode && (c = "<backspace>");
    13 == b.keyCode && (c = "<enter>");
    38 == b.keyCode && (c = "<up>");
    40 == b.keyCode && (c = "<down>");
    37 == b.keyCode && (c = "<left>");
    39 == b.keyCode && (c = "<right>");
    null != c && a.c.i(c);
  });
  $("#text-tool-input, #freeform-tool-input").keyup(function() {
    a.c.i("");
  });
  $("#text-tool-input, #freeform-tool-input").change(function() {
    a.c.i("");
  });
  $("#text-tool-close").click(function() {
    $("#text-tool-widget").hide();
    Q(a.b);
  });
}
function Ha(a, b) {
  $(".dialog").removeClass("visible");
  $("#" + b + "-dialog").toggleClass("visible");
  "import-button" == b && ($("#import-area").val(""), $("#import-area").focus());
  if ("export-button" == b) {
    var c = !!$("#output-raw").prop("checked");
    $("#export-area").val(U(a.b, null, c));
    $("#export-area").select();
  }
  "clear-button" == b && O(a.b);
  "undo-button" == b && oa(a.b);
  "redo-button" == b && pa(a.b);
}
;function Ia(a, b) {
  window.gapi.auth.authorize({client_id:"125643747010-9s9n1ne2fnnuh5v967licfkt83r4vba5.apps.googleusercontent.com", scope:"https://www.googleapis.com/auth/drive", v:b}, function(b) {
    !b || b.error || a.f || (a.f = !0, $("#drive-button").addClass("active"), window.setTimeout(function() {
      Ja(a);
    }, 500));
  });
}
function Ka(a) {
  window.gapi && window.gapi.auth && window.gapi.auth.authorize ? Ia(a, !0) : window.setTimeout(function() {
    Ka(a);
  }, 500);
}
function La(a) {
  window.setTimeout(function() {
    a.f ? Ma(a) : (Ia(a, !0), La(a));
  }, 1E3);
}
function Na(a, b) {
  a.a = b;
  $("#drive-filename").text(b.title);
  window.location.hash = b.id;
}
function Ma(a) {
  $("#drive-dialog").addClass("visible");
  var b = U(a.b);
  5 < b.length && b != a.c && Z(a);
  Oa();
}
function Oa() {
  Pa(window.gapi.client.request({path:"/drive/v2/files", params:{q:"mimeType = 'text/plain' and trashed = false"}, method:"GET"}), function(a) {
    $("#drive-file-list").children().remove();
    a = a.items;
    for (var b in a) {
      var c = document.createElement("li"), e = document.createElement("a");
      c.appendChild(e);
      e.href = "#" + a[b].id;
      $(e).click(function() {
        $("#drive-dialog").removeClass("visible");
      });
      e.innerHTML = a[b].title;
      $("#drive-file-list").append(c);
    }
  });
}
function Pa(a, b) {
  try {
    a.execute(function(a) {
      a.error || b(a);
    });
  } catch (c) {
  }
}
function Qa(a) {
  U(a.b) != a.c && a.a && a.a.editable && Z(a);
  window.setTimeout(function() {
    Qa(a);
  }, 5E3);
}
function Z(a) {
  var b = U(a.b);
  $("#drive-save-state").text("Saving...");
  Pa(Ra(a, b), function(c) {
    Na(a, c);
    $("#drive-save-state").text("Saved");
    a.c = b;
  });
}
function Ja(a) {
  1 < window.location.hash.length && ($("#drive-save-state").text("Loading..."), Pa(window.gapi.client.request({path:"/drive/v2/files/" + window.location.hash.substr(1, window.location.hash.length - 1), method:"GET"}), function(b) {
    Na(a, b);
    Sa(a);
  }));
}
function Sa(a) {
  Ta(a.a.downloadUrl, function(b) {
    $("#drive-save-state").text("Loaded");
    O(a.b);
    qa(a.b, b, W(a.g, new p(a.g.b.width / 2, a.g.b.height / 2)));
    Q(a.b);
    a.c = U(a.b);
  });
}
function Ra(a, b) {
  var c = "\r\n---------314159265358979323846\r\nContent-Type: application/json\r\n\r\n" + JSON.stringify({title:a.a ? a.a.title : "Untitled ASCII Diagram", mimeType:"text/plain"}) + "\r\n---------314159265358979323846\r\nContent-Type: text/plain\r\n\r\n" + b + "\r\n---------314159265358979323846--";
  return window.gapi.client.request({method:a.a ? "PUT" : "POST", path:"/upload/drive/v2/files" + (a.a ? "/" + a.a.id : ""), params:{uploadType:"multipart"}, headers:{"Content-Type":'multipart/mixed; boundary="-------314159265358979323846"'}, body:c});
}
function Ta(a, b) {
  var c = window.gapi.auth.getToken().access_token, e = new XMLHttpRequest;
  e.open("GET", a);
  e.setRequestHeader("Authorization", "Bearer " + c);
  e.onload = function() {
    b(e.responseText);
  };
  e.onerror = function() {
    b(null);
  };
  e.send();
}
;function Ua(a) {
  var b = $(a.a.a.b);
  b.on("mousewheel", function(b) {
    b = a.a.a.c * (0 < b.originalEvent.wheelDelta ? 1.1 : .9);
    b = Math.max(Math.min(b, 5), .2);
    var c = a.a.a;
    c.c = b;
    c.f = !0;
  });
  b.mousedown(function(b) {
    if (b.ctrlKey || b.metaKey) {
      var c = a.a;
      b = new p(b.clientX, b.clientY);
      c.mode = 1;
      c.g = b;
      c.h = c.a.a;
    } else {
      c = a.a, b = new p(b.clientX, b.clientY), c.mode = 2, c.c.start(W(c.a, b));
    }
  });
  b.mouseup(function() {
    Y(a.a);
  });
  b.mouseleave(function() {
    Y(a.a);
  });
  b.mousemove(function(b) {
    Fa(a.a, new p(b.clientX, b.clientY));
  });
}
function Va(a, b) {
  a.f = b;
  a.h = $.now();
  a.b = !1;
  window.setTimeout(function() {
    if (!a.b && !a.c && a.f) {
      var c = a.a;
      c.mode = 2;
      c.c.start(W(c.a, b));
    }
  }, 150);
}
function Wa(a) {
  var b = $(a.a.a.b);
  b.on("touchstart", function(b) {
    b.preventDefault();
    if (1 == b.originalEvent.touches.length) {
      Va(a, r(b));
    } else {
      if (1 < b.originalEvent.touches.length) {
        var c = r(b, 0);
        b = r(b, 1);
        Y(a.a);
        a.c = !0;
        a.b = !1;
        a.j = u(c, b).length();
        a.g = a.a.a.c;
      }
    }
  });
  b.on("touchmove", function(b) {
    b.preventDefault();
    if (1 == b.originalEvent.touches.length) {
      b = r(b);
      if (!a.b && 150 > $.now() - a.h && 6 < u(b, a.f).length()) {
        a.b = !0;
        var c = a.a;
        c.mode = 1;
        c.g = b;
        c.h = c.a.a;
      }
      Fa(a.a, b);
    } else {
      1 < b.originalEvent.touches.length && a.c && (b = a.g * u(r(b, 0), r(b, 1)).length() / a.j, b = Math.max(Math.min(b, 5), .5), c = a.a.a, c.c = b, c.f = !0);
    }
  });
  b.on("touchend", function(b) {
    b.preventDefault();
    a.b = !1;
    a.c = !1;
    a.f = null;
    Y(a.a);
  });
}
;var Xa = new function() {
  this.a = Array(2E3);
  this.b = [];
  this.c = !0;
  this.g = [];
  this.f = [];
  for (var a = 0;a < this.a.length;a++) {
    this.a[a] = Array(600);
    for (var b = 0;b < this.a[a].length;b++) {
      this.a[a][b] = new ia;
    }
  }
}, Ya = new function(a) {
  this.g = a;
  this.b = document.getElementById("ascii-canvas");
  this.context = this.b.getContext("2d");
  this.c = 1;
  this.a = new p(9E3, 5100);
  this.f = !0;
  this.h = !1;
  ta(this);
}(Xa), Za = new function(a, b) {
  this.a = a;
  this.b = b;
  this.c = new sa(b);
  this.mode = 0;
  this.f = null;
  Ga(this);
}(Ya, Xa);
new function(a) {
  this.a = a;
  this.c = this.b = !1;
  Wa(this);
}(Za);
new function(a) {
  this.a = a;
  Ua(this);
}(Za);
new function(a, b) {
  var c = this;
  this.f = !1;
  this.b = a;
  this.g = b;
  this.a = null;
  this.c = "";
  Ka(this);
  $("#drive-button").click(function() {
    c.f ? Ma(c) : (Ia(c, !1), La(c));
  });
  $("#drive-filename").click(function() {
    var a = "" + $("#drive-filename").text(), a = prompt("Enter new filename:", a);
    c.a.title = a;
    Z(c);
    Oa();
  });
  Qa(this);
  $(window).on("hashchange", function() {
    Ja(c);
  });
  $("#drive-new-file-button").click(function() {
    c.a = null;
    O(c.b);
    window.location.hash = "";
    Z(c);
    $("#drive-dialog").removeClass("visible");
  });
}(Xa, Ya);
ua(Ya);


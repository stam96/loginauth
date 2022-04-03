import { S as n } from "./sweetalert2.292e9bcf.js";
import {
  i as m,
  r as c,
  d as u,
  e as h,
  f as e,
  q as i,
  v as a,
  g as w,
  w as g,
  l as f,
  F as x,
  h as _,
} from "./vendor.51793a23.js";
import { _ as v, r as k } from "./index.55b5153d.js";
var y = "/assets/undraw_forms_re_pkrt.5e7eb804.svg";
const b = {
    data() {
      return {
        info: { username: "", email: "", password: "", passrepit: "" },
        mensaje: "",
        confirmar: "",
      };
    },
    methods: {
      async registrar() {
        try {
          const r = await m.post("/registro", this.info);
          (this.mensaje = r.data.mensaje),
            console.log(this.mensaje),
            n
              .mixin({
                toast: !0,
                position: "top-end",
                showConfirmButton: !1,
                timer: 3e3,
                timerProgressBar: !0,
                didOpen: (l) => {
                  l.addEventListener("mouseenter", n.stopTimer),
                    l.addEventListener("mouseleave", n.resumeTimer);
                },
              })
              .fire({ icon: "success", title: this.mensaje }),
            (this.confirmar = r.data.token),
            k.push({ name: "Codigo" });
        } catch (r) {
          (this.mensaje = r.response.data.errors[0].msg),
            console.log(r.response.data.errors[0].msg),
            n.fire({ icon: "error", text: this.mensaje });
        }
      },
    },
  },
  j = e(
    "div",
    { class: "w-full px-4 py-10 font-bold" },
    [e("h1", null, "REGISTRARSE")],
    -1
  ),
  C = { class: "relative" },
  B = e(
    "span",
    { class: "absolute inset-y-0 inline-flex items-center right-4" },
    [
      e(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          class: "w-5 h-5 text-gray-400",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
        },
        [
          e("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207",
          }),
        ]
      ),
    ],
    -1
  ),
  V = { class: "relative" },
  M = e(
    "span",
    { class: "absolute inset-y-0 inline-flex items-center right-4" },
    [
      e(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          class: "w-5 h-5 text-gray-400",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
        },
        [
          e("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207",
          }),
        ]
      ),
    ],
    -1
  ),
  z = { class: "relative" },
  T = e(
    "span",
    { class: "absolute inset-y-0 inline-flex items-center right-4" },
    [
      e(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          class: "w-5 h-5 text-gray-400",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
        },
        [
          e("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
          }),
          e("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
          }),
        ]
      ),
    ],
    -1
  ),
  R = { class: "relative" },
  E = e(
    "span",
    { class: "absolute inset-y-0 inline-flex items-center right-4" },
    [
      e(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          class: "w-5 h-5 text-gray-400",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
        },
        [
          e("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
          }),
          e("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
          }),
        ]
      ),
    ],
    -1
  ),
  I = { class: "flex items-center justify-between mt-5" },
  S = { class: "text-sm text-gray-500" },
  U = _(" Ya tienes una cuenta? "),
  N = e("a", { class: "underline" }, "Ir a login", -1),
  F = e(
    "button",
    {
      type: "submit",
      class: "px-5 py-3 text-sm font-medium bg-slate text-cyan rounded-lg",
    },
    " Registrarse ",
    -1
  ),
  L = e(
    "div",
    {
      class:
        "fixed top-20 right-0 -z-40 w-full h-64 sm:h-96 lg:w-1/2 lg:h-full",
    },
    [e("img", { class: "object-cover", src: y, alt: "" })],
    -1
  );
function q(r, s, l, A, o, d) {
  const p = c("router-link");
  return (
    u(),
    h(
      x,
      null,
      [
        j,
        e(
          "form",
          {
            class: "max-w-md mx-24",
            onSubmit:
              s[4] ||
              (s[4] = f(
                (...t) => d.registrar && d.registrar(...t),
                ["prevent"]
              )),
          },
          [
            e("div", C, [
              i(
                e(
                  "input",
                  {
                    type: "text",
                    "onUpdate:modelValue":
                      s[0] || (s[0] = (t) => (o.info.username = t)),
                    class:
                      "w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm",
                    placeholder: "Ingresar nombre",
                  },
                  null,
                  512
                ),
                [[a, o.info.username]]
              ),
              B,
            ]),
            e("div", V, [
              i(
                e(
                  "input",
                  {
                    type: "email",
                    "onUpdate:modelValue":
                      s[1] || (s[1] = (t) => (o.info.email = t)),
                    class:
                      "w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm",
                    placeholder: "Ingresar email",
                  },
                  null,
                  512
                ),
                [[a, o.info.email]]
              ),
              M,
            ]),
            e("div", z, [
              i(
                e(
                  "input",
                  {
                    type: "password",
                    "onUpdate:modelValue":
                      s[2] || (s[2] = (t) => (o.info.password = t)),
                    class:
                      "w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm",
                    placeholder: "Ingresar password",
                  },
                  null,
                  512
                ),
                [[a, o.info.password]]
              ),
              T,
            ]),
            e("div", R, [
              i(
                e(
                  "input",
                  {
                    type: "password",
                    "onUpdate:modelValue":
                      s[3] || (s[3] = (t) => (o.info.passrepit = t)),
                    class:
                      "w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm",
                    placeholder: "Repetir password",
                  },
                  null,
                  512
                ),
                [[a, o.info.passrepit]]
              ),
              E,
            ]),
            e("div", I, [
              e("p", S, [
                U,
                w(p, { to: "/login" }, { default: g(() => [N]), _: 1 }),
              ]),
              F,
            ]),
          ],
          32
        ),
        L,
      ],
      64
    )
  );
}
var P = v(b, [["render", q]]);
export { P as default };

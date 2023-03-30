import { defineComponent as o, openBlock as t, createElementBlock as n, renderSlot as r, createTextVNode as c } from "vue";
import s from "../../_virtual/_plugin-vue_export-helper.mjs";
const p = o({
  name: "ryb-icon",
  setup() {
    return {};
  }
}), a = /* @__PURE__ */ c(" icon ");
function i(e, _, d, f, l, m) {
  return t(), n("i", null, [
    a,
    r(e.$slots, "default")
  ]);
}
const x = /* @__PURE__ */ s(p, [["render", i]]);
export {
  x as default
};

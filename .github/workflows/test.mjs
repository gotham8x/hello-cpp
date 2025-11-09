// /mux-mask.ts
import c from "node:path";
async function t() {
  let n = (process.argv.slice(2)[0] || "").trim().split(/\s+/g).filter(Boolean);
  for (let o of n) {
    console.log(`::add-mask::${o.trim().replace(/%/g, "%25")}`);
    try {
      let e = new URL(o);
      console.log(`::add-mask::${e.origin + e.pathname}`);
      let s = c.parse(o);
      console.log(`::add-mask::${s.base}`), console.log(`::add-mask::${s.ext}`), console.log(`::add-mask::${s.name}`);
    } catch {
    }
  }
}
t().catch((a) => {
  console.error(a.message), process.exit(1);
});

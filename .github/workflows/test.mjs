// src/github-mask-secret/main.ts
async function n() {
  let c = process.argv.slice(2), a = [];
  c.forEach((o) => {
    let s = o.split(/\s/).filter(Boolean);
    a.push(s);
  }), a.flat().forEach((o) => {
    console.log(`::add-mask::${o.trim().replace(/%/g, "%25")}`);
    try {
      let s = new URL(o);
      console.log(`::add-mask::${s.origin + s.pathname}`);
    } catch {
    }
  });
}
n().catch((c) => {
  console.error(c), process.exit(1);
});

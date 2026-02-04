const { PurgeCSS } = require("purgecss");
const path = require("path");
const fs = require("fs");

(async () => {
  const purgeCSSResult = await new PurgeCSS().purge({
    content: [
      path.join(__dirname, "../app/**/*.{js,ts,jsx,tsx}"),
      path.join(__dirname, "../components/**/*.{js,ts,jsx,tsx}")
    ],
    css: [path.join(__dirname, "../out/**/*.css")],
  });

  purgeCSSResult.forEach(({ css, file }) => {
    fs.writeFileSync(file, css);
  });

  console.log("✅ PurgeCSS completed successfully");
})();

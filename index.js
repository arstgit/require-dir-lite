const fs = require("fs");
const path = require("path");

let parentFile = module.parent.filename;
let parentDir = path.dirname(parentFile);
delete require.cache[__filename];

module.exports = function requireDir(dir = ".") {
  dir = path.resolve(parentDir, dir);

  let files = fs.readdirSync(dir);

  let result = {};

  files.forEach(file => {
    let ext = path.extname(file);

    let baseName = path.basename(file, ext);

    if (baseName === "node_modules" || baseName.startsWith(".")) return;

    if (result[baseName]) return;

    let abs = path.resolve(dir, file);

    if (abs === parentFile) return;

    if (fs.statSync(abs).isDirectory()) {
      result[baseName] = requireDir(abs);
    } else {
      [".js", ".json", ".node"].forEach(ext => {
        if (abs.endsWith(ext)) {
          result[baseName] = require(abs);
        }
      });
    }
  });

  return result;
};

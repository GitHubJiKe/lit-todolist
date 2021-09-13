const { series, src, dest } = require("gulp");
const uglify = require("gulp-uglify");

const compress = () => src("dist/*.js").pipe(uglify()).pipe(dest("lib"));

const copyJSMap = () => src("dist/*.map").pipe(dest("lib"));

const copyTSType = () => src("dist/*.ts").pipe(dest("lib"));

module.exports.default = series([compress, copyJSMap, copyTSType]);

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Logger: () => Logger
});
module.exports = __toCommonJS(index_exports);

// src/logger.ts
var import_chalk = __toESM(require("chalk"), 1);
var import_cli_table3 = __toESM(require("cli-table3"), 1);
var levelMeta = {
  info: { emoji: "\u2139\uFE0F", label: "INFO", color: import_chalk.default.bgBlueBright.black.bold },
  warn: { emoji: "\u26A0\uFE0F", label: "WARN", color: import_chalk.default.bgYellow.black.bold },
  error: { emoji: "\u274C", label: "ERROR", color: import_chalk.default.bgRedBright.white.bold },
  debug: { emoji: "\u{1F41B}", label: "DEBUG", color: import_chalk.default.bgMagenta.white.bold },
  table: { emoji: "\u{1F4CA}", label: "TABLE", color: import_chalk.default.bgCyanBright.black.bold }
};
var Logger = class {
  constructor(options = {}) {
    this.options = options;
  }
  timestamp() {
    const now = /* @__PURE__ */ new Date();
    const timeOnly = now.toLocaleTimeString("en-US", { hour12: false });
    return import_chalk.default.dim(`[${timeOnly}]`);
  }
  buildTag(level) {
    const { emoji, label, color } = levelMeta[level];
    const text = ` ${emoji} ${label} `;
    return color(text);
  }
  contextTag() {
    return this.options.context ? import_chalk.default.hex("#00ffff").bold(`[${this.options.context}]`) : "";
  }
  print(level, message) {
    const ts = this.options.showTimestamp !== false ? this.timestamp() : "";
    const tag = this.buildTag(level);
    const ctx = this.contextTag();
    console.log(`${ts} ${tag} ${ctx} ${message}`);
  }
  info(msg) {
    this.print("info", msg);
  }
  warn(msg) {
    this.print("warn", msg);
  }
  error(msg) {
    this.print("error", msg);
  }
  debug(msg) {
    if (this.options.enableDebug !== false) {
      this.print("debug", msg);
    }
  }
  table(headers, rows) {
    const table = new import_cli_table3.default({
      head: headers.map((h) => import_chalk.default.cyanBright.bold(h)),
      style: {
        border: [],
        head: []
      }
    });
    rows.forEach((row) => table.push(row));
    this.print("table", "\n" + table.toString());
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Logger
});

// src/logger.ts
import chalk from "chalk";
import Table from "cli-table3";
var levelMeta = {
  info: { emoji: "\u2139\uFE0F", label: "INFO", color: chalk.bgBlueBright.black.bold },
  warn: { emoji: "\u26A0\uFE0F", label: "WARN", color: chalk.bgYellow.black.bold },
  error: { emoji: "\u274C", label: "ERROR", color: chalk.bgRedBright.white.bold },
  debug: { emoji: "\u{1F41B}", label: "DEBUG", color: chalk.bgMagenta.white.bold },
  table: { emoji: "\u{1F4CA}", label: "TABLE", color: chalk.bgCyanBright.black.bold }
};
var Logger = class {
  constructor(options = {}) {
    this.options = options;
  }
  timestamp() {
    const now = /* @__PURE__ */ new Date();
    const timeOnly = now.toLocaleTimeString("en-US", { hour12: false });
    return chalk.dim(`[${timeOnly}]`);
  }
  buildTag(level) {
    const { emoji, label, color } = levelMeta[level];
    const text = ` ${emoji} ${label} `;
    return color(text);
  }
  contextTag() {
    return this.options.context ? chalk.hex("#00ffff").bold(`[${this.options.context}]`) : "";
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
    const table = new Table({
      head: headers.map((h) => chalk.cyanBright.bold(h)),
      style: {
        border: [],
        head: []
      }
    });
    rows.forEach((row) => table.push(row));
    this.print("table", "\n" + table.toString());
  }
};
export {
  Logger
};

import chalk from "chalk";
import Table from "cli-table3";

type LogLevel = "info" | "warn" | "error" | "debug";

interface LoggerOptions {
  context?: string;
  enableDebug?: boolean;
  showTimestamp?: boolean;
}

const levelMeta = {
  info: { emoji: "ℹ️", label: "INFO", color: chalk.bgBlueBright.black.bold },
  warn: { emoji: "⚠️", label: "WARN", color: chalk.bgYellow.black.bold },
  error: { emoji: "❌", label: "ERROR", color: chalk.bgRedBright.white.bold },
  debug: { emoji: "🐛", label: "DEBUG", color: chalk.bgMagenta.white.bold },
  table: { emoji: "📊", label: "TABLE", color: chalk.bgCyanBright.black.bold },
};

export class Logger {
  constructor(private options: LoggerOptions = {}) {}

  private timestamp(): string {
    const now = new Date();
    const timeOnly = now.toLocaleTimeString("en-US", { hour12: false });
    return chalk.dim(`[${timeOnly}]`);
  }

  private buildTag(level: keyof typeof levelMeta): string {
    const { emoji, label, color } = levelMeta[level];
    const text = ` ${emoji} ${label} `;
    return color(text);
  }

  private contextTag(): string {
    return this.options.context
      ? chalk.hex("#00ffff").bold(`[${this.options.context}]`)
      : "";
  }

  private print(level: keyof typeof levelMeta, message: string) {
    const ts = this.options.showTimestamp !== false ? this.timestamp() : "";
    const tag = this.buildTag(level);
    const ctx = this.contextTag();
    console.log(`${ts} ${tag} ${ctx} ${message}`);
  }

  info(msg: string) {
    this.print("info", msg);
  }

  warn(msg: string) {
    this.print("warn", msg);
  }

  error(msg: string) {
    this.print("error", msg);
  }

  debug(msg: string) {
    if (this.options.enableDebug !== false) {
      this.print("debug", msg);
    }
  }

  table(headers: string[], rows: string[][]) {
    const table = new Table({
      head: headers.map((h) => chalk.cyanBright.bold(h)),
      style: {
        border: [],
        head: [],
      },
    });

    rows.forEach((row) => table.push(row));
   this.print("table", "\n" + table.toString());
  }
}
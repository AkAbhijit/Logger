# logger.ts

A modern, colorful, emoji-powered console logger for Node.js and TypeScript.

[![npm version](https://img.shields.io/npm/v/logger.ts.svg)](https://www.npmjs.com/package/logger.ts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Overview

**logger.ts** is a lightweight, zero-dependency (except for [chalk](https://www.npmjs.com/package/chalk) and [cli-table3](https://www.npmjs.com/package/cli-table3)) logger for Node.js and TypeScript projects.  
It provides beautiful, readable, and context-aware logs with emoji and color support, making your CLI and server logs more fun and useful.

---

## Features

- 🚦 Color-coded log levels: `info`, `warn`, `error`, `debug`
- 🎉 Emojis for instant visual cues
- 🏷️ Optional context label for log grouping
- 🕒 Easy-to-read timestamp format (HH:MM:SS)
- 📊 Table support via `cli-table3`
- 🐞 Toggleable debug logging
- ⚡ Zero config, easy to use

---

## Installation

```bash
npm install logger.ts chalk cli-table3
```

---

## Usage

```typescript
import { Logger } from "logger.ts";

const log = new Logger({
  context: "MyApp",
  enableDebug: true,      // Optional, default: true
  showTimestamp: true,    // Optional, default: true
});

log.info("App started");
log.warn("Low memory");
log.error("Unhandled exception");
log.debug("Debugging info");

log.table(["Name", "Age"], [
  ["Alice", "24"],
  ["Bob", "27"],
]);
```

---

## API

### `new Logger(options?: LoggerOptions)`

#### LoggerOptions

| Option         | Type      | Default | Description                                 |
| -------------- | --------- | ------- | ------------------------------------------- |
| `context`      | `string`  |         | Optional context label for each log         |
| `enableDebug`  | `boolean` | `true`  | If `false`, disables debug logs             |
| `showTimestamp`| `boolean` | `true`  | If `false`, hides timestamps                |

### Methods

- `log.info(msg: string)`  
  Log an informational message.

- `log.warn(msg: string)`  
  Log a warning message.

- `log.error(msg: string)`  
  Log an error message.

- `log.debug(msg: string)`  
  Log a debug message (if debug is enabled).

- `log.table(headers: string[], rows: string[][])`  
  Pretty-print a table to the console.

---

## Example Output

```
[ 12:34:56 ] [ ℹ️  INFO  ] [ MyApp ] => App started
[ 12:34:56 ] [ ⚠️  WARN  ] [ MyApp ] => Low memory
[ 12:34:56 ] [ ❌ ERROR ] [ MyApp ] => Unhandled exception
[ 12:34:56 ] [ 🐛 DEBUG ] [ MyApp ] => Debugging info
[ 12:34:56 ] [ 📊 TABLE ] [ MyApp ] =>
┌───────┬─────┐
│ Name  │ Age │
├───────┼─────┤
│ Alice │ 24  │
│ Bob   │ 27  │
└───────┴─────┘
```

---

## License

MIT © [AkAbhijit](https://github.com/akabhijit)
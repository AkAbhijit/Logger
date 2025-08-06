# Next Logger

A stylish, colorful, and context-aware logger for Node.js CLIs and apps.  
Supports emojis, context tags, pretty tables, and more!

## Features

- Emojis and colored tags for log levels
- Optional context label
- Optional timestamp
- Pretty tables
- Debug log toggle

## Installation

```bash
npm install chalk cli-table3
```
*(Copy `logger.ts` into your project or publish as your own package)*

## Usage

```typescript
import { Logger } from "./logger";

const logger = new Logger({
  context: "MyApp",
  enableDebug: true,
  showTimestamp: true,
});

logger.info("Hello world!");
logger.warn("Something might be wrong.");
logger.error("Something went wrong!");
logger.debug("Debugging info.");
logger.table(["Name", "Age"], [
  ["Alice", "30"],
  ["Bob", "25"]
]);
```

## API

### `new Logger(options?: LoggerOptions)`

#### LoggerOptions

| Option         | Type      | Default | Description                                 |
| -------------- | --------- | ------- | ------------------------------------------- |
| `context`      | `string`  |         | Optional context label for each log         |
| `enableDebug`  | `boolean` | `true`  | If `false`, disables debug logs             |
| `showTimestamp`| `boolean` | `true`  | If `false`, hides timestamps                |

### Methods

- `logger.info(msg: string)`  
  Log an informational message.

- `logger.warn(msg: string)`  
  Log a warning message.

- `logger.error(msg: string)`  
  Log an error message.

- `logger.debug(msg: string)`  
  Log a debug message (if debug is enabled).

- `logger.table(headers: string[], rows: string[][])`  
  Pretty-print a table to the console.

## Example Output

```
[ 12:34:56 ] [ ℹ️  INFO  ] [ MyApp ] => Hello world!
[ 12:34:56 ] [ ⚠️  WARN  ] [ MyApp ] => Something might be wrong.
[ 12:34:56 ] [ ❌ ERROR ] [ MyApp ] => Something went wrong!
[ 12:34:56 ] [ 🐛 DEBUG ] [ MyApp ] => Debugging info.
[ 12:34:56 ] [ 📊 TABLE ] [ MyApp ] =>
┌───────┬─────┐
│ Name  │ Age │
├───────┼─────┤
│ Alice │ 30  │
│ Bob   │ 25  │
└───────┴─────┘
```

## License

MIT

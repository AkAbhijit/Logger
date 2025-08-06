import { Logger } from "./src";

const log = new Logger({
  context: "MyApp",
  enableDebug: true,
  showTimestamp: true,
});

log.info("Application started successfully");
log.warn("You’re using a deprecated API");
log.error("Failed to connect to the database");
log.debug("Fetched 123 records from cache");

log.table(["Feature(s)", "Status"], [
  ["Auth", "✅ Ready"],
  ["Payments", "🚧 In Progress"],
  ["Logs", "💯 Polished"],
]);

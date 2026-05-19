const path = require("path");
const { startServer } = require("next/dist/server/lib/start-server");

function readArg(name, shortName) {
  const longIndex = process.argv.indexOf(name);
  if (longIndex >= 0) return process.argv[longIndex + 1];

  const shortIndex = process.argv.indexOf(shortName);
  if (shortIndex >= 0) return process.argv[shortIndex + 1];

  return undefined;
}

const port = Number(readArg("--port", "-p") || process.env.PORT || 3000);
const hostname = readArg("--hostname", "-H") || process.env.HOSTNAME;

process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.__NEXT_DEV_SERVER = "1";
process.env.NEXT_PRIVATE_START_TIME = process.env.NEXT_PRIVATE_START_TIME || String(Date.now());

startServer({
  dir: path.resolve(__dirname, ".."),
  port,
  hostname,
  allowRetry: true,
  isDev: true
}).catch((error) => {
  console.error(error);
  process.exit(1);
});

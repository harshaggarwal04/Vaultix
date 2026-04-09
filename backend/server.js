const { config } = require("dotenv");
const path = require("path");


config({
  path: path.join(__dirname, "../.env"), // since .env is in root
});

const app = require("./src/app"); // ✅ AFTER env loads
const { ConnectDB } = require("./src/config/db.config");

ConnectDB()

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
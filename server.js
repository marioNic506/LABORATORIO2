import app from "./src/app.js";
import { config } from "./config.js";
import pool  from "./src/connector.js";
const { appConfig } = config;

const port = appConfig.port || 3001;

app.listen(port, async () => {
  const con = await pool.connect();
  const res = await con.query("SELECT NOW()");
  console.log(res.rows[0]);
  console.log(`Server is running on port ${port}`);
});

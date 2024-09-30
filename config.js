export const config = {
  appConfig: {
    port: process.env.PORT || 3001,
  },
  database: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "test",
    port: process.env.DB_PORT || 3306,
    table: process.env.DB_TABLE || "test",
  },
};
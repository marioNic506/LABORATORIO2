import { config } from "./config.js";
import pool from "./src/connector.js";
const { database } = config;

async function CreateClientTable(client, name) {
  try {
    const tableName = `client_${name}`;
    const res = await client.query(`
        CREATE TABLE IF NOT EXISTS  ${tableName}(
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            name VARCHAR(255) NOT NULL,
            lastname VARCHAR(255) NOT NULL,
            status BOOLEAN DEFAULT TRUE,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log(`Table ${tableName} created`);
    return res;
  } catch (error) {
    console.error(error);
  }
}

async function CreateProductTable(client, name) {
  try {
    const tableName = `product_${name}`;
    const res = await client.query(`
        CREATE TABLE IF NOT EXISTS ${tableName} (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            name VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            status BOOLEAN DEFAULT TRUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log(`Table ${tableName} created`);
    return res;
  } catch (error) {
    console.error(error);
  }
}

async function build() {
  try {
    const client = await pool.connect();
    const tableName = database.table;
    await CreateClientTable(client, tableName);
    await CreateProductTable(client, tableName);
    client.release();
  } catch (error) {
    console.error(error);
  }
}

build()

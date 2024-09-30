import pool from "../connector.js";
import { config } from "../../config.js";

const { database } = config;

const clientTableName = `client_${database.table}`;
const productTableName = `product_${database.table}`;
export async function createClient(req, res) {
  try {
    const { name, lastName, email, phone, address } = req.body;
    const query = `INSERT INTO ${clientTableName} (name, lastname, email, phone, address) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [name, lastName, email, phone, address];

    const client = await pool.connect();

    const { rows, rowCount } = await client.query(query, values);

    if (rowCount > 0) {
      return res.status(201).json({
        message: "Client created successfully",
        data: response.rows[0],
      });
    }

    return res.status(400).json({
      message: "Error creating client",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export async function getClients(req, res) {
  try {
    const query = `SELECT * FROM ${clientTableName} ORDER BY created_at DESC`;
    const client = await pool.connect();
    const { rows } = await client.query(query);
    client.release();
    if (!rows) {
      return res.status(404).json({
        message: "Clients not found",
      });
    }
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export async function createProduct(req, res) {
  try {
    const { name, description, price } = req.body;

    const query = `INSERT INTO ${productTableName} (name, description, price) VALUES ($1, $2, $3) RETURNING *`;
    const values = [name, description, price];
    const client = await pool.connect();
    const { rows, rowCount } = await client.query(query, values);
    client.release();
    if (rowCount > 0) {
      return res.status(201).json({
        message: "Product created successfully",
        data: rows[0],
      });
    }
    return res.status(400).json({
      message: "Error creating product",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export async function getProducts(req, res) {
  try {
    const query = `SELECT * FROM ${productTableName}`;
    const client = await pool.connect();
    const { rows } = await client.query(query);
    client.release();
    if (!rows) {
      return res.status(404).json({
        message: "Products not found",
      });
    }
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

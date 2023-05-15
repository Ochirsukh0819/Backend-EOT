const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
//postgres database holboh
const pool = new Pool({
  host: "localhost",
  port: "5432",
  database: "pizzahut",
  user: "postgres",
  password: "Oojoo@0819",
});

// app.get("/", (req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   pool.query(
//     `SELECT json_agg(product_data) FROM (SELECT id, image,  title, price, category FROM public.products) product_data;`,
//     (err, data) => {
//       res.status(200).send(JSON.stringify(data.rows[0]));
//     }
//   );
// });

app.get("/", (req, res) => {
  fetch(
    "https://web-eot-default-rtdb.asia-southeast1.firebasedatabase.app/pizzahut.json"
  )
    .then((res) => res.json())
    .then((data) => res.status(200).send(data))
    .catch((e) => res.status(500).send(e));
});

app.listen(port, () => {
  console.log(`Сервер аслааа. port: //localhost:port`);
});

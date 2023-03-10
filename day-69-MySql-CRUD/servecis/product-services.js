import { pool } from "../config/mysql-config.js";

export async function getAllProducts() {
  const [rows] = await pool.query(`select * from products `);

  await Promise.all(
    rows.map(async (row) => {
      console.log(row);
      const descriptions = await getDescriptions(row.id);
      row.description = descriptions.map((d) => d.description);
      const reviews = await getReviews(row.id);
      const images = await getImage(row.id);
      row.imgUrl = images;

      const colors = await getColor(row.id);
      const sizes = await getSize(row.id);
      row.review = reviews;
      row.color = colors.map((c) => c.color);
      row.size = sizes.map((c) => c.size);

      console.log(descriptions);
    })
  );

  return rows;
}

export async function search(keyword) {
  const [rows] = await pool.query(
    `select * from products where title like '%${keyword}%'`
  );

  await Promise.all(
    rows.map(async (row) => {
      console.log(row);
      const descriptions = await getDescriptions(row.id);
      row.description = descriptions.map((d) => d.description);
      const reviews = await getReviews(row.id);
      const images = await getImage(row.id);
      row.imgUrl = images;

      const colors = await getColor(row.id);
      const sizes = await getSize(row.id);
      row.review = reviews;
      row.color = colors.map((c) => c.color);
      row.size = sizes.map((s) => s.size);

      console.log(descriptions);
    })
  );

  return rows;
}

export async function getDescriptions(productId) {
  const [rows] = await pool.query(
    `select * from product_description where product_id = ?`,
    [productId]
  );
  return rows;
}

export async function getReviews(productId) {
  const [rows] = await pool.query(
    `select customer, review from product_reviews where product_id = ? `,
    [productId]
  );
  return rows;
}
export async function getImage(productId) {
  const [rows] = await pool.query(
    `select original,thumbnail from product_images where product_id = ? `,
    [productId]
  );
  return rows;
}
export async function getSize(productId) {
  const [rows] = await pool.query(
    `select s.size from product_size ps left join size s on s.id = ps.size_id where product_id = ? `,
    [productId]
  );
  return rows;
}
export async function getColor(productId) {
  const [rows] = await pool.query(
    `select c.color from product_colors pc left join color c on c.id = pc.color_id where product_id = ? `,
    [productId]
  );
  return rows;
}

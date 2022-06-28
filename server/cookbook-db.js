import "dotenv/config";
import pg from "pg";

// Get the Pool class from the pg module.
const { Pool } = pg;

export class CookbookDatabase {
  constructor(dburl) {
    this.dburl = dburl;
  }

  async connect() {
    // Create a new Pool. The Pool manages a set of connections to the database.
    // It will keep track of unused connections, and reuse them when new queries
    // are needed. The constructor requires a database URL to make the
    // connection. You can find the URL of your database by looking in Heroku
    // or you can run the following command in your terminal:
    //
    //  heroku pg:credentials:url -a APP_NAME
    //
    // Replace APP_NAME with the name of your app in Heroku.
    this.pool = new Pool({
      connectionString: this.dburl,
      ssl: { rejectUnauthorized: false }, // Required for Heroku connections
    });

    // Create the pool.
    this.client = await this.pool.connect();

    // Init the database.
    await this.init();
  }

  async init() {
    const queryText = `
      drop table if exists recipes;
      create table if not exists recipes (
        id serial primary key,
        name varchar(30),
        ingredients varchar(500),
        time integer,
        cuisine varchar(30),
        difficulty varchar(30),
        image varchar(500),
        video varchar(500),
        instructions varchar(500)
      );

      insert into
      recipes(name, ingredients, time, cuisine, difficulty, image, video, instructions)
      values
        ('fry egg', 'egg, oil, salt', 5, 'American', 'easy', 'https://res.cloudinary.com/yilin1234/image/upload/v1654894997/egg_zpr53z.jpg', 'https://res.cloudinary.com/yilin1234/video/upload/v1654896129/How_to_Fry_Eggs_Like_a_Pro___Food_Network_tlitxd.mp4', 'step1: put oil in pan, step2: put in egg'),

        ('pizza', 'sausage, cheese, pizza dough, tomato sauce', 60, 'Italian', 'medium', 'https://res.cloudinary.com/yilin1234/image/upload/v1654894999/pizza_lapro6.jpg', 'https://res.cloudinary.com/yilin1234/video/upload/v1654896134/How_to_Make_Margherita_Pizza_at_Home___Gordon_Ramsay_du3oib.mp4', 'step1: put topping on dough, step2: put it in oven for 20 minutes'),
        ('wellington steak', 'crust, beef, mushroom', 120, 'American', 'hard', 'https://res.cloudinary.com/yilin1234/image/upload/v1654894997/beef-wellington-slice-front-close_j5a13d.jpg', 'https://res.cloudinary.com/yilin1234/video/upload/v1654896116/Fillet_of_Beef_Wellington___Gordon_Ramsay_dxxmg1.mp4', 'step1: wrap beef with crust, step2: put it in oven for 60 minutes');

    `;

    const res = await this.client.query(queryText);
  }

  // Close the pool.
  async close() {
    this.client.release();
    await this.pool.end();
  }

  // CREATE a recipe in the database.
  async createRecipe(
    name,
    ingredients,
    time,
    cuisine,
    difficulty,
    image,
    video,
    instructions
  ) {
    const queryText =
      "INSERT INTO recipes (name, ingredients, time, cuisine, difficulty, image, video, instructions) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
    const res = await this.client.query(queryText, [
      name,
      ingredients,
      time,
      cuisine,
      difficulty,
      image,
      video,
      instructions,
    ]);
    return res.rows;
  }

  // READ a recipe from the database.
  async readRecipe(id) {
    const queryText = "SELECT * FROM recipes WHERE id = $1";
    const res = await this.client.query(queryText, [id]);
    return res.rows;
  }

  // UPDATE a recipe in the database.
  async updateRecipe(
    id,
    name,
    ingredients,
    time,
    cuisine,
    difficulty,
    image,
    video,
    instructions
  ) {
    const queryText =
      "UPDATE people SET name = $2, ingredients = $3, time = $4, cuisine = $5, difficulty = $6, image = $7, video = $8, instructions = $9 WHERE id = $1 RETURNING *";
    const res = await this.client.query(queryText, [
      id,
      name,
      ingredients,
      time,
      cuisine,
      difficulty,
      image,
      video,
      instructions,
    ]);
    return res.rows;
  }

  // DELETE a recipe from the database.
  async deleteRecipe(id) {
    const queryText = "DELETE FROM recipes WHERE id = $1 RETURNING *";
    const res = await this.client.query(queryText, [id]);
    return res.rows;
  }

  // READ all recipes from the database.
  async readAllRecipe() {
    const queryText = "SELECT * FROM recipes";
    const res = await this.client.query(queryText);
    return res.rows;
  }
}

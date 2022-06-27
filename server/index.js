import express from "express";
import { CookbookDatabase } from "./cookbook-db.js";

class CookbookServer {
  constructor(dburl) {
    this.dburl = dburl;
    this.app = express();
    this.app.use("/", express.static("client"));
  }

  async initRoutes() {
    // Note: when using arrow functions, the "this" binding is lost.
    const self = this;

    this.app.post("/recipe/create", async (req, res) => {
      try {
        const {
          name,
          ingredients,
          time,
          cuisine,
          difficulty,
          image,
          video,
          instructions,
        } = req.query;
        const recipe = await self.db.createRecipe(
          name,
          ingredients,
          time,
          cuisine,
          difficulty,
          image,
          video,
          instructions
        );
        res.send(JSON.stringify(recipe));
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.get("/recipe/read", async (req, res) => {
      try {
        const { id } = req.query;
        const recipe = await self.db.readRecipe(id);
        res.send(JSON.stringify(recipe));
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.put("/recipe/update", async (req, res) => {
      try {
        const {
          id,
          name,
          ingredients,
          time,
          cuisine,
          difficulty,
          image,
          video,
          instructions,
        } = req.query;
        const recipe = await self.db.updateRecipe(
          id,
          name,
          ingredients,
          time,
          cuisine,
          difficulty,
          image,
          video,
          instructions
        );
        res.send(JSON.stringify(recipe));
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.delete("/recipe/delete", async (req, res) => {
      try {
        const { id } = req.query;
        const recipe = await self.db.deleteRecipe(id);
        res.send(JSON.stringify(recipe));
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.get("/recipe/all", async (req, res) => {
      try {
        const recipe = await self.db.readAllRecipe();
        res.send(JSON.stringify(recipe));
      } catch (err) {
        res.status(500).send(err);
      }
    });
  }

  async initDb() {
    this.db = new CookbookDatabase(this.dburl);
    await this.db.connect();
  }

  async start() {
    await this.initRoutes();
    await this.initDb();
    const port = process.env.PORT || 3000;
    this.app.listen(port, () => {
      console.log(`CookbookServer listening on port ${port}!`);
    });
  }
}

const server = new CookbookServer(process.env.DATABASE_URL);
server.start();

import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blog", blogRoutes);

try {
  await db.authenticate();
  console.log("Conexion exitosa!");
} catch (error) {
  res.json({ menssage: error.message });
}
/*app.get('/',(req,res) => {
  res.send('Hola mundo')
})*/

app.listen(8000, () => {
  {
    console.log("server UP running in http://localhost:8000/");
  }
});

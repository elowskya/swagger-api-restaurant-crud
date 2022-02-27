const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

let restaurants = [
  { id: 0, name: "Burger Place" },
  { id: 1, name: "Taco Place" },
];

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/restaurants", (req, res) => {
  res.send(restaurants);
});

app.listen(4000, () => console.log("listening on port 4000"));

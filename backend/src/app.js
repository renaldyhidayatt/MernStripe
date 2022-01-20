const express = require("express");

const app = express();

const dbConnection = require("./db");
const productsRoute = require("./routes/product.route");
const usersRoute = require("./routes/user.route");
const orderRoute = require("./routes/order.route");

app.use(express.json());

app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);
app.use("/api/orders", orderRoute);

app.get("/", (req, res) => {
  res.send("This is from backend");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

// dota

// cjSfbiaHgkiSxgyR

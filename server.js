const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/userRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "./views");

app.use("/form", router);
app.listen(port, () => {
  console.log(`running on ${port}`);
});

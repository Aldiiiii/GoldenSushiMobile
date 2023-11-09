const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const usersRouter = require("./routes/users");
const { connect } = require("./config/mongo");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => res.json("Welcome to our server!"));
app.use("/users", usersRouter);

app.use((err, req, res, next) => {
    let code = 500
    let message = "Internal server error"

    res.status(code).json({message})
})

connect().then((db) => {
  app.listen(port, () => {
    console.log(`Ini jalan di port ${port}`);
  });
});

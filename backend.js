const express = require("express");
const app = express();

app.get("/:name/:email/", (req, res) => {
  res.send(`
    <form>
      <label for="name">Enter your name: </label>
      <input type="text" name="name" required value="${req.params.name}">
      <br>
      <label for="email">Enter your email: </label>
      <input type="email" name="email" required value="${req.params.email}">
    <form/>
  `);
})

app.listen(4000, () => {
  console.log("Hello world");
})

import Express from "express";
const route = Express.Router();

import User from "../Database/schema/User.js";

route.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.status(200).json({ message: "Login Successful", user: user, stat : "success" });
        console.log(user);
      } else {
        res.status(400).json({ message: "Password didn't match" });
      }
    } else {
      res.status(201).json({ message: "User not registered" });
    }
  });
});

route.get("/login", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default route;

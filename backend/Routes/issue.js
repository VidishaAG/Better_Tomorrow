import Express from "express";
const route = Express.Router();

import Issue from "../Database/schema/Issue.js";

route.post("/submitIssue", (req, res) => {
  const { name, email, heading, description } = req.body;
  const issue = Issue({
    "name": name,
    "email": email,
    "heading": heading,
    "description": description
  });

  issue
  .save()
  .then(() => {
    res.status(200).send("issue recorded");
  })
  .catch((err) => console.log(err));
});

route.get("/allIssues", async (req, res) => {
  const allIssues = await Issue.find();
  res.status(200).json(allIssues);
});

export default route;

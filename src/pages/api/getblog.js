import * as fs from "fs";

// http://localhost:3000/api/getblog?slug=how_to_learn_javascript

export default function handle(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ message: "No such blog found" });
    }
    res.status(200).json(JSON.parse(data));
  });
}

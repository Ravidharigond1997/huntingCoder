import * as fs from "fs";

export default async function postcontact(req, res) {
  console.log(req.body);
  if (req.method === "POST") {
    let data = await fs.promises.readdir("contactdata");
    fs.promises.writeFile(
      `contactdata/${data.length + 1}.json`,
      JSON.stringify(req.body)
    );
    res.status(200).send({
      message: "success",
      success: true,
    });
  } else {
    res.status(200).json(["allBlogs"]);
  }
}

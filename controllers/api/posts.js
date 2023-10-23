const PC = require("../../models/pc");

const create = async (req, res) => {
    console.log(req.body)
  try {
    req.body.user = req.user._id;
    req.body.image = 'hello'
    const pc = await PC.create(req.body);
    res.status(201).json({ message: "PC post uploaded successfully" });
  } catch (error) {
    console.log("hi");
    res.status(500).json({ error: "Failed to save PC data" });
  }
};

module.exports = {
  create,
};

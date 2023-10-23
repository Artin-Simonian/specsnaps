const PC = require("../../models/pc");
const uploadPC = require("./pcUpload");

const create = async (req, res) => {
    try {
      const pcData = req.body; 
      const pc = new PC(pcData);
      await pc.save(); 
      res.status(201).json({ message: 'PC data saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save PC data' });
    }
  };

module.exports = {
  create,
  uploadPC
};

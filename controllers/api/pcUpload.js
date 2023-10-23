const PC = require("../../models/pc");

async function uploadPC(req, res) {
  try {
    if (req.file) {

      const photoURL = await uploadFile(req.file);

  
      const newPC = new PC({
        image: [photoURL], 
        name: req.body.name, 
        processor: req.body.processor,
        videoCard: req.body.videoCard,
        ram: req.body.ram,
        user: req.user._id,
      });

      const savedPC = await newPC.save();
      res.json(savedPC);
    } else {
      throw new Error('Must select a file');
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
}

module.exports = {
  uploadPC,
};

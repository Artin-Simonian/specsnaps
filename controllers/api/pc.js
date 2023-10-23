const express = require("express");
const router = express.Router();
const PC = require("../../models/pc"); 


async function uploadPC(req, res) {
  
}



router.post("/api/uploadPC", async (req, res) => {
  const {name, processor, videoCard, ram } = req.body;
  const userId = req.user._id;


  const newPC = new PC({
    image: req.files, 
    name,
    processor,
    videoCard,
    ram,
    user: userId,
  });

  try {

    const savedPC = await newPC.save();
    res.json(savedPC);
  } catch (error) {

    console.error("Error saving PC data:", error);
    res.status(500).json({ error: "Failed to save PC data" });
  }
});

module.exports = router;

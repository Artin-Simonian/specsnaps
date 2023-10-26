const PC = require("../../models/pc");

const create = async (req, res) => {
    
  try {
    req.body.user = req.user._id;
    req.body.image = 'hello' //await uploadFile(req.file);
    const pc = await PC.create(req.body);
    res.status(201).json({ message: "PC post uploaded successfully" });

  } catch (error) {
    console.log("Error");
    res.status(500).json({ error: "Failed to save PC data" });
  }
};

const getAllPCs = async(req, res) => {
  try {
    const PCs = await PC.find({});
    res.json(PCs)
  }
  catch (error){
    console.log('Error')
  }
}

const getById = async(req, res) => {
  
  try {
    const PCDetail = await PC.findById(req.params.postId);
    res.json(PCDetail)
  }
  catch (error){
    console.log('Error, could not get Post')
  }
}



module.exports = {
  create,
  getAllPCs,
  getById
};

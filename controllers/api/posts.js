const PC = require("../../models/pc");
const uploadFile = require('../../config/upload-file');

const create = async (req, res) => {
  let imageUrl;
  try {
    if ( req.file ){
      imageUrl = await uploadFile(req.file);
    }
    req.body.image = imageUrl || 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww';
    req.body.user = req.user._id;
    const pc = await PC.create(req.body);
    res.status(201).json(pc);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to save PC data" });
  }
};

const getAllPCs = async (req, res) => {
  try {
    const PCs = await PC.find({}).populate('user').sort('-createdAt');
    res.json(PCs);
  } catch (error) {
    console.log("Error");
  }
};

const getById = async (req, res) => {
  try {
    const PCDetail = await PC.findById(req.params.postId);
    res.json(PCDetail);
  } catch (error) {
    console.log("Error, could not get Post");
  }
};

module.exports = {
  create,
  getAllPCs,
  getById,
};

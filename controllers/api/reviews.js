const PC = require("../../models/pc");


const create = async (req, res) => {
  const PCDetail = await PC.findById(req.params.postId);
  PCDetail.reviews.push(req.body);
  try {
    await PCDetail.save();
  } catch (error) {
    console.log("Error");
  }
};


async function deleteReview(){

}

module.exports = {
    create,
    deleteReview
};

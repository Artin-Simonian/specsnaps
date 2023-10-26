const PC = require("../../models/pc");

const createReview = async (req, res) => {
  
  const pcPost = await PC.findById(req.params.postId);
  req.body.user = req.user._id;
  pcPost.reviews.push(req.body);
  try {
    await pcPost.save()
  } catch {
    console.log('No reviews saved')
  }
};

async function deleteReview() {}

module.exports = {
  createReview,
  deleteReview,
};

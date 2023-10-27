const PC = require("../../models/pc");

const createReview = async (req, res) => {
  const post = await PC.findById(req.params.postId);
  req.body.user = req.user._id;
  post.reviews.push(req.body);
  try {
    await post.save();
    res.json(post);  // Send back the updated post
  } catch {
    res.status(400).json('Review not created');
  }
};



module.exports = {
  createReview,

};

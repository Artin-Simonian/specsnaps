const PC = require("../../models/pc");

const create = async (req, res) => {
  const pc = await PC.findById(req.params.postId);
  pc.reviews.push(req.body);
  const review = pc.reviews.id(req.params.id);

  if (!review.user.equals(req.user._id))
    return res.redirect(`/posts/${post._id}`);
  review.content = req.body.content;
  try {
    await pc.save();
  } catch (error) {
    console.log("Error");
  }
};

async function deleteReview() {}

module.exports = {
  create,
  deleteReview,
};

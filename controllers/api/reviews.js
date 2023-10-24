const PC = require("../../models/pc");


const create = async (req, res) => {
    console.log(req.body)
  try {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;

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

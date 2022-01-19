const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://saurabh:saurabh@cluster0.dgf0v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};

// mongodb+srv://keshav:keshav123@cluster0.redna.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
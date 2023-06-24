const mongoose = require("mongoose");

exports.clientPromise = mongoose
  .connect(
    "mongodb+srv://GreksO:Gregsaimoen12@meanapp.u4r8eht.mongodb.net/twitter?retryWrites=true&w=majority"
  )
  .catch((err) => console.log(err));

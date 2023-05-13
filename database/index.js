const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://GreksO:Gregsaimoen12@meanapp.u4r8eht.mongodb.net/twitter?retryWrites=true&w=majority"
  )
  .then(() => console.log("connexion ok!"))
  .catch((err) => console.log(err));

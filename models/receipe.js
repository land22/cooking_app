const mongoose = require("mongoose");


const receipeSchema = new mongoose.Schema({
          
          name: String,
          image: String,
          user: String
	
});


module.exports = mongoose.model("Receipe", receipeSchema);
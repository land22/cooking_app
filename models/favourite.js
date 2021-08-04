const mongoose = require("mongoose");


const favouriteSchema = new mongoose.Schema({
          
         image: String,
         title: String,
         description: String,
         user: String,
         date: {
            type: Date,
            default: Date.now()
         }
	
});


module.exports = mongoose.model("Favourite", favouriteSchema);
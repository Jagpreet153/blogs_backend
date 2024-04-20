
const mongoose = require('mongoose');

const blogSchema ={
    heading: {
        type: String,
        required : true,
    },

    description:{
        type: String,
        required : true,
        
    },

    likes:{
      type:Number,
      required:true
    },

    dislikes:{
        type:Number,
        required:true
    },

    comments:{
        type: String,
        required : true,
        maxLength: 5000
    }
}

module.exports = mongoose.model("Blog",blogSchema)
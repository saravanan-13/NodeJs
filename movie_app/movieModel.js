const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    _id:{
      type: String,
      required:true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Movie', movieSchema);
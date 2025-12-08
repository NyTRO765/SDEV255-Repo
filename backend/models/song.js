const db = require("../db")

const Song = db.model("Song", {
    title:{type:String, required:true},
    artist: String,
    popularity: {type:Number, min:1, Max:10},
    genre: [String],
})

module.exports = Song

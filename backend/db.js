const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://sdev255:<password255>@songdb.apb451k.mongodb.net/?appName=SongDB", {useNewUrlParser: true})

module.exports = mongoose
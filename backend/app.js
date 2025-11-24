const express = require("express")
var cors = require('cors')
const app = express()
app.use(cors())
const router = express.Router()


router.get("/songs", function(req, res){
    const songs = [
        {
            title: "We Found Love",
            artist: "Rihanna",
            popularity: 10,
            genre: ["electro house"]
        },
        {
            title: "Happy",
            artist: "Pharrell Williams",
            popularity: 10,
            genre: ["soul", "new soul"]
        },

    ]
    res.json(songs)
})

app.use("/api", router)
app.listen(3000)


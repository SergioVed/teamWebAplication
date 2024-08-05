const expess = require("express")
const cors = require('cors')
const app = expess()
const mongoose = require("mongoose")
const router = require("./navigation/main")

app.use(cors());
app.use(expess.json());
app.use(router)

mongoose.connect("mongodb+srv://vedankinsergij:vedankinsergijteamweb@cluster0.v6j3y5a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("DB okay")
})
.catch((err) => {
    console.log(err)
})

app.listen(5000, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log("server Ok")
})
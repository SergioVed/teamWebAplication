const express = require("express");
const router = express.Router()
const userRoutes = require("./routes/userRoutes")

router.get('/register', userRoutes.register)

module.exports = router
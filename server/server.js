require('dotenv').config();
const expess = require("express");
const cors = require('cors');
const app = expess();
const path = require('path')
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const routes = require('./navigation/main');
const errorMiddleware = require('./middlewares/errorMiddleware');

const port = process.env.PORT || 5000;
const database = process.env.DATABASE_URL;
app.use(cors());
app.use(expess.json({extended: true}));
app.use('/images', expess.static(path.join(__dirname, 'images')))
app.use(cookieParser());
app.use('/api', routes);
app.use(errorMiddleware);

mongoose.connect(database)
.then(() => {
    console.log("Connected to db");
})
.catch((err) => {
    console.log(err)
});

app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log(`Server is running on port ${port}`);
});
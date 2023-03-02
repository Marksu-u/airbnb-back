const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const apiRouter = require('./routes');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

require('dotenv').config()



app.use(cors());
app.use(bodyParser.json());

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("successfully connect to database")
    })
    .catch(err => console.log(err))


app.use("/api/v1", apiRouter);
app.use(errorHandler);


// test route
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })


app.listen(process.env.PORT, function () {
    console.log('server listening at http://localhost:' + process.env.PORT);
})
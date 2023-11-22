const express = require('express')
const mongoose = require('mongoose')
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/haadi-e-khaata')
const MyModel = mongoose.model('Test', new mongoose.Schema({ name: String }));
app.get('/', async (req, res) => {
    res.send('Server is working')
})

app.listen(9000, () => {
    console.log('Server is running on port 9000')
})




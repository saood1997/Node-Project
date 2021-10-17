const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const userRoutes = require('./routes/api/user');
const albums = require('./routes/api/album');
const photos = require('./routes/api/photo');
const auth = require('./routes/api/auth');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected.....'))
    .catch(err => console.log(err));

app.use('/api/users', userRoutes);
app.use('/api/albums', auth, albums);
app.use('/api/photos', photos);
app.use('/api/auth', auth);



app.use('*', (req, res) => {
    res.status(404).send({ msg: 'Route you are looking for does not exists.' });
});
const port = process.env.Port || 3000;
app.listen(port,()=>{
    console.log(`Listening On Port ${port}`);
})

const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb+srv://sanjay:krishna@testcluster.lvmyd.mongodb.net/aliendb?retryWrites=true&w=majority';

const app = express();

mongoose.connect(url);
const con = mongoose.connection;
app.use(express.json());

 const alienrouter = require('./routers/alien');
 app.use("/alien", alienrouter);
con.on('open', function() {
    console.log('connected');
});

app.listen(3000,()=> console.log("server started"))
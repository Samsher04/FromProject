const mongoose = require('mongoose')
const connect = mongoose.connect('mongodb://127.0.0.1:27017/FormData', {

});

connect.then(()=>{
    console.log("database connected successfully");
})
.catch(()=>{
    console.log("database cannot be connect");
})
module.exports=mongoose
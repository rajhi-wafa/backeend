const mongosse =require("mongoose")
const config = require('config')
const connectDB = require("./config/connectDB")

const connectDB=() => {
    mongosse.connect(config.get("MONGOURI"),{useUnifiedTopolgy:true},{useNewUrlParser:true})
    .then(()=>console.log("mongoos Connected"))
    .catch(()=>console.log("erreur DB"))
}
module.exports=connectDB;
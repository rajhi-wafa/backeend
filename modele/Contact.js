const mongoose = require("mongoose")
const schema= mongoose.schema

const ContactSchema = new schema({
    name:{type:String},
    email:{type:String},
    phon:{type:Number}
})
module.export=Contact=mongoose.model('contact',ContactSchema)
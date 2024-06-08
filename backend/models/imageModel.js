import mongoose from "mongoose";

const ImageSchema=new mongoose.Schema({
    url:{
        type:String,
       required:true
    },
    caption:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('Image',ImageSchema)
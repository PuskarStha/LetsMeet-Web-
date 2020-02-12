import { Schema } from "mongoose";

const userSchema= new Schema({
    firstname:{

        type:String,
        required:true,
        trim:true,

    },
    lastname:{
        type:String,
    }
    
})
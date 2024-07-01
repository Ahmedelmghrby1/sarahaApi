import { Schema, model } from "mongoose";


const schema= new Schema({
    username: String,
    email: String,
    password: String,
    OTP:String,
    confirmEmail:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }
}
,{
    timestamps:{createdAt:true},
    versionKey : false
    })
    export const User= model('user',schema)
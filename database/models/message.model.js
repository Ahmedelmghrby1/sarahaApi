import { Types } from "mongoose";
import { Schema, model } from "mongoose";


const schema= new Schema({
    content: String,
  receiverId: Types.ObjectId,
}
,{
    timestamps:{createdAt:true},
    versionKey : false
    })
    export const Message= model('Message',schema)
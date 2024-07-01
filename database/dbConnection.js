import { connect } from "mongoose";


export const dbConn=connect('mongodb://localhost:27017/saraha')
.then(()=>{
        console.log('database connected successfully');
    })
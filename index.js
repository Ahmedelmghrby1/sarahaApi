process.on('uncaughtException',()=>{
    console.log('error in code');
})
import express from 'express'
import { dbConn } from './database/dbConnection.js'
import jwt from "jsonwebtoken"
import userRouter from './src/modules/user/user.routes.js'
import messageRouter from './src/modules/message/message.routes.js'
import { User } from './database/models/user.model.js'
import { AppError } from './src/utils/appError.js'
import { globalError } from './src/middleware/globalError.js'
const app = express()
const port = 3000

app.use(express.json())
app.use('/auth',userRouter)
app.use('/messages',messageRouter)


app.get('/verify/:token',async(req,res,next)=>{
    jwt.verify(req.params.token,"myNameIsAhmed",async(err,payload)=>{
        if(err) return next(new AppError(err,401))
        await User.findOneAndUpdate({email:payload.email},{confirmEmail:true})
        res.json({message:"success",email:payload.email})
    })
   
})

app.use('*',(req,res,next)=>{
    // res.status(404).json({message:`route Not Found ${req.originalUrl}`})
    next(new AppError(`route Not Found ${req.originalUrl}`,404))
})

app.use(globalError)

process.on('unhandledRejection',(err)=>{
    console.log('error',err.message)
})





app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
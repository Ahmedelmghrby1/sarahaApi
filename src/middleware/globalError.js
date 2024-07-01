
export const globalError = (err,req,res,next)=>{
    let statusCode = err.statusCode || 500
    res.status(err.statusCode).json({error:"error",message:err.message,code:err.statusCode})

}
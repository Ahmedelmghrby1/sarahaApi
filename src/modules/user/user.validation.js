import Joi from "joi"
 const signupVal=Joi.object({
    username:Joi.string().required().min(3).max(30),
    email:Joi.string().required().email(),
    password:Joi.string().required().min(6).max(30),
})


const signinVal=Joi.object({
    email:Joi.string().required().email(),
    password:Joi.string().required().min(6).max(30),
})


export{
    signupVal,
    signinVal
}
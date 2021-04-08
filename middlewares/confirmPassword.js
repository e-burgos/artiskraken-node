function confirmPassword(req,res,next){
    if(req.body.password == req.body.confirmPassword){
        next()
    }else{
        res.render("users/register",{errors:[
            {msg:"Las contraseñas deben coincidir"}
        ]})
    }
}

module.exports = confirmPassword;
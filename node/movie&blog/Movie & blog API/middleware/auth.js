const authSession = (req,res,next)=>{
    if(req.session.user){
        next();
    } else{
        res.status(401).json({
            msg:"you can first login"
        })
    }
}

module.exports = authSession;
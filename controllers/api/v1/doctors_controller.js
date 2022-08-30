const Doctor = require('../../../models/doctor');
const jwt = require('jsonwebtoken');

module.exports.registerDoctor = async function(req,res){
    try{
        Doctor.findOne({username:req.body.username},function(err,doctor){
            if(err){
                return res.status(500).json({
                    data : { message : "Internal Server Error in finding doctor in registeration process" }
                });
            }
     
            if(!doctor){
             console.log("doctor doesn't exist so creating doctor in db");
                Doctor.create(req.body,function(err,doctor){
                 if(err){
                    return res.status(500).json({
                        data : { message : "Internal Server Error in registering doctor " }
                    });
                 }
                 
                 return res.status(200).json({
                    data : { message : "Registered doctor successfully" }
                });

                });
            }else{
                return res.status(400).json({
                    data : { message : "Doctor already registered, please log in" }
                });
            }
        })

    }catch(err){
        console.log("******* Error in registering doctor ********* ",err);
        return res.status(500).json({
            data : { message : "Internal Server Error in registering a doctor" }
        });
    }
}

module.exports.createSession = async function(req,res){
    try{
        let doctor = await Doctor.findOne({username: req.body.username});

        if(!doctor || doctor.password != req.body.password){
            return res.status(422).json({
                message:"Invalid username and password"
            });
        }
        return res.status(200).json({
            message:"Sign in successful, here is your token, please keep it safe",
            data:{
                token: jwt.sign(user.toJSON(),'x562GCF32CX2GE9',{expiresIn:'1000000'})
            }
        });


    }catch(err){
        console.log('******',err);
        return res.status(500).json({
            message:"internal server error"
        });
    }
  
}
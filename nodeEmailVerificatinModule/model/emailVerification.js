var mongoose=require('mongoose');
var verificationModel=new mongoose.Schema({
	rand:{type: Number},
	host:{type:String},
	link:{type:String},
	email:{type:String, unique: true, sparse: true}
});

module.exports= mongoose.model('emailVerificationCollection',verificationModel);

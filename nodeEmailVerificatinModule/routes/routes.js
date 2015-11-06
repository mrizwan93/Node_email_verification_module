var mongoose=require('mongoose');
var nodemailer = require('nodemailer');

var emailVerificationCollection = new require("../model/emailVerification");

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'abrar.nodemailer@gmail.com',
		pass: 'abrar123'
	}
});

mongoose.connect("mongodb://localhost/email_data_store");

module.exports = function(app, express) {

	var api =  express.Router();

	api.post('/send/verification/link/',function(req,res){
		emailVerificationCollection.findOne({"email":req.body.email},function(err,doc){
			if(err){
				res.status(201).send(err);
			}else{
				if(!doc){
					var tempUser= new emailVerificationCollection();
					tempUser.email=req.body.email;
					tempUser.rand=Math.floor((Math.random() * 1000) + 54);
					tempUser.host=req.get('host');
					tempUser.link="http://"+req.get('host')+"/api/verify/link?id="+tempUser.rand+"&"+"email="+tempUser.email;
					tempUser.save(function(err, docs){
							if(err){
								res.status(201).send(err);
							}
							else{
								transporter.sendMail({
									from: 'abrar.nodemailer@gmail.com',
									to: docs.email,
									subject : "Please confirm your Email account",
									html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+docs.link+">Click here to verify</a>"
										},function(err,info){
										if(err){
											console.log(err);
											res.send(err);
										}else{
											console.log("message sent: "+info.response);
											res.status(201).send({
												"msg":"Check your email to confirm account"
											});
										}
								});
							}
					});
				}else{
					if(req.body.resend==true){
						var id=req.body._id;
						delete req.body._id;
						var tempUser= new emailVerificationCollection();
						tempUser.email=doc.email;
						tempUser.rand=Math.floor((Math.random() * 1000) + 54);
						tempUser.host=req.get('host');
						tempUser.link="http://"+req.get('host')+"/api/v1/company/verify/link?id="+tempUser.rand+"&"+"email="+tempUser.email;
						tempUser._id=undefined;
						emailVerificationCollection.findByIdAndUpdate(id,tempUser,function(err,doc1){
							if(err){
								res.status(201).send(err);
							}
							else{
								transporter.sendMail({
									from: 'abrar.nodemailer@gmail.com',
									to: doc1.email,
									subject : "Please confirm your Email account",
									html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+tempUser.link+">Click here to verify</a>"
										},function(err,info){
										if(err){
											console.log(err);
											res.send(err);
										}else{
											res.status(201).send({
												"status":true,
												"msg":"Check your email to confirm account"
											});
										}
								});
							}
						});
					}else{
						res.status(201).send("<html>email is already register with us!</html>");
					}
				}
			}
		});
	});

	api.get('/verify/link',function(req,res){
		var query = require('url').parse(req.url,true).query;
		emailVerificationCollection.findOne({"email":req.query.email,"rand":req.query.id,"host":req.get('host')},function(err,doc){
			if(err){
				res.status(201).send(err);
			}else{
				if(doc){
					var path = '/url_to_redirect_if_success/';
					res.writeHead(302, {'Location': path});
					res.write("Email "+doc.email+" is been Successfully verified");
					res.end();
				}else{
					res.status(201).send('<html>Bad Request!</html>');
				}
			}
		});
	});

	return api;
}

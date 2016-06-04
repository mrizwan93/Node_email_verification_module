var mongoose=require('mongoose');
var nodemailer = require('nodemailer');

var emailVerificationCollection = new require("../model/emailVerification");

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'jhonedoemailsender@gmail.com',
		pass: 'jhonedoe123456'
	}
});

var emailCode = '<!DOCTYPE html>\
<html>\
<head>\
	<meta charset="utf-8">\
	<title>MakeMyCasa Invoice</title>\
	<meta name="viewport" content="width=device-width"/>\
</head>\
<body style="margin: 0px; padding: 0px;">\
	<div style="margin: 0 auto; max-width: 600px; ">\
	<div style="width: 100%; height: 100px;\
	    background: -webkit-linear-gradient(#338FFC, rgba(255,255,255,0.1));\
	    background: -o-linear-gradient(#338FFC, rgba(255,255,255,0.1));\
	    background: -moz-linear-gradient(#338FFC, rgba(255,255,255,0.1));\
	    background: linear-gradient(#338FFC, rgba(255,255,255,0.1)); ">\
		<table align="center" border="0" width="600" cellpadding="0" cellpadding="0" style="border-collapse: collapse;">\
			<tr style="max-width:100%; padding: 10ox 0;width: 600;border-collapse: collapse;">\
				<td style="width:80%; max-width:100;border-collapse: collapse; ">\
					<div style="background-color:#FFFFFF; width:170px; border: solid 1px #FFFFFF; margin-left:5px; margin-top:5px;">\
						<img src="http://www.makemycasa.com/static/img/makemycasa_email.png" style="max-width:100%; padding-left:10px;\
					 	padding-bottom:0px; padding-top:10px; width: 600;">\
					 </div>\
					<p style="font-size:1.2em; padding-left:5px; line-height:0px;">Casa International Private Limited</p>\
					<p style="font-size:1em; padding-left:5px; line-height:0px;">Transforming dream into reality</p>\
				</td>\
				<td style="width:20%;max-width:100%;border-collapse: collapse;">\
					<h2 style="text-align:center;color:#FFFFFF; font-family: times;padding-rigth:10px;">INVOICE</h2>\
				</td>\
			</tr>\
		</table>\
	</div>\
	<div style="margin: 0 auto; max-width: 600px; ">\
	<table align="center" border="0" width="600" cellpadding="0" cellpadding="0">\
			<tr>\
				<td style="padding: 0px 15px; width:70%">\
					<p style="font-size:1em; padding-left:5px;">644, Laxmi Plaza, Building no. 9 Laxmi Industrial Estate</p>\
					<p style="font-size:1em; padding-left:5px;">Link Road, Andheri West, Mumbai-400053</p>\
					<p style="font-size:1em; padding-left:5px;">[Phone] [Fax]</p>\
					<p style="font-size:1em; padding-left:5px;"><a href="#">customercare@makemycasa.com</a></p>\
				</td>\
				<td style="padding: 0px 15px; width:30%">\
					<p style="font-size:1em; padding-left:5px; padding-right:5px;">DATE</p>\
					<p style="font-size:1em; padding-left:5px; padding-right:5px;">INVOICE NO [100]</p>\
					<p style="font-size:1em; padding-left:5px; padding-right:5px;">TRANSACTION ID [12345]</p>\
					<p style="font-size:1em; padding-left:5px; padding-right:5px;">PROJECT ID</p>\
					<p style="font-size:1em; padding-left:5px; padding-right:5px;">PAN </p>\
					<p style="font-size:1em; padding-left:5px;padding-right:5px;">Service Tax Rrg No</p>\
				</td>\
			</tr>\
		</table>\
		</div>\
		<table>\
			<tr>\
				<td ><p style="font-size:1em; padding-left:5px;padding-right:5px;">TO,<p></td>\
			</tr>\
		</table>\
		<div style="width=100%;max-width:250px">\
			<div style="padding-left:40px;">\
				<table>\
					<tr>\
						<td >\
							<p style="font-size:1em; padding-left:5px;padding-right:5px;">[Name]</p>\
							<p style="font-size:1em; padding-left:5px;padding-right:5px;">[Company Name]</p>\
							<p style="font-size:1em; padding-left:5px;padding-right:5px;">[Street Address]</p>\
							<p style="font-size:1em; padding-left:5px;padding-right:5px;">[city   Zip Code]</p>\
							<p style="font-size:1em; padding-left:5px;padding-right:5px;">[Phone]</p>\
						</td>\
					</tr>\
				</table>\
			</div>\
		</div>\
			<table align="center" border="0" width="600" cellpadding="0" cellpadding="0" style="border-collapse: collapse;">\
				<tr>\
					<td style="background-color:#338FFC; border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px; color:#FFFFFF;">PACKAGE</p>\
					</td>\
					<td style="background-color:#338FFC;  border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px; color:#FFFFFF;">DESCRIPTION</p>\
					</td>\
					<td style="background-color:#338FFC;  border-width: 1px;border-color:#3B5E91;border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px; color:#FFFFFF;">UNIT PRICE</p>\
					</td>\
					<td style="background-color:#338FFC;  border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px; color:#FFFFFF;">QUANTITY</p>\
					</td>\
					<td style="background-color:#338FFC;  border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px; color:#FFFFFF;">LINE TOTAL</p>\
					</td>\
				</tr>\
				<tr>\
					<td style="border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">Base</p>\
					</td>\
					<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">lorem epson afn aswqw</p>\
					</td>\
					<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">2000</p>\
					</td>\
					<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">5</p>\
					</td>\
					<td style="border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">10000</p>\
					</td>\
				</tr>\
				<tr>\
					<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">Base</p>\
					</td>\
					<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">lorem epson afn aswqw</p>\
					</td>\
					<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">2000</p>\
					</td>\
					<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">5</p>\
					</td>\
					<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">10000</p>\
					</td>\
				</tr>\
				<tr>\
					<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">Base</p>\
					</td>\
					<td style="border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">lorem epson afn aswqw</p>\
					</td>\
					<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">2000</p>\
					</td>\
					<td style="border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">5</p>\
					</td>\
					<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">10000</p>\
					</td>\
				</tr>\
				<tr>\
					<td style="border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">Base</p>\
					</td>\
					<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">lorem epson afn aswqw</p>\
					</td>\
					<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">2000</p>\
					</td>\
					<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">5</p>\
					</td>\
					<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
						<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">10000</p>\
					</td>\
				</tr>\
			</table>\
		<div style="float:right ;width:600px;">\
		<div style="float:right;">\
		<table border="0" width="200" cellpadding="0" cellpadding="0" style="border-collapse: collapse;">\
			<tr>\
				<td>\
					<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">Subtotal</p>\
				</td>\
				<td style=" border-width: 1px;border-color:#3B5E91; border-top-width:0px ; border-style: solid;border-collapse: collapse;">\
					<p style="font-size:1em; padding-left:5px;padding-right:68px;  "> 40000</p>\
				</td>\
			</tr>\
			<tr>\
				<td>\
					<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">Service Tax Rate</p>\
				</td>\
				<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
					<p style="font-size:1em; padding-left:5px;padding-right:5px;"> 14.50%</p>\
				</td>\
			</tr>\
			<tr>\
				<td>\
					<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">Servie Tax</p>\
				</td>\
				<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
					<p style="font-size:1em; padding-left:5px;padding-right:5px;  "> 5800</p>\
				</td>\
			</tr>\
			<tr>\
				<td>\
					<p style="font-size:1em; padding-left:5px;padding-right:5px;  ">Total</p>\
				</td>\
				<td style=" border-width: 1px;border-color:#3B5E91; border-style: solid;border-collapse: collapse;">\
					<p style="font-size:1em; padding-left:5px;padding-right:5px;  "> 45800</p>\
				</td>\
			</tr>\
		</table>\
		</div>\
		<div style="padding-top:5px;">\
		<table border="0" width="350" cellpadding="0" cellpadding="0" style="border: 1px solid black; border-collapse:collapse;">\
			<tr> \
				<td style="background-color:#338FFC;width:100%;border-width: 1px;border-style: solid;"><p style="font-size:1em; text-align:left; padding: 0px 10px;border-collapse:collapse; color:#FFFFFF;">Other Comments</p></td>\
			</tr>\
			<tr >\
				<td style="border-collapse:collapse;"><p style="font-size:1em; text-align:left; padding: 0px 5px; ">1. Please quote your Project ID in all your communication</p></td>\
			</tr>\
			<tr>\
				<td style="border-collapse:collapse;"><p style="font-size:1em; text-align:left; padding: 0px 5px;">2. lorem epson</p></td>\
			</tr>\
			<tr>\
				<td style="border-collapse:collapse;"><p style="font-size:1em; text-align:left; padding: 0px 5px;">2. lorem epson</p></td>\
			</tr>\
		</table>\
		</div>\
		<p style="font-size:1em; text-align:left;">E & OE</p>\
		</div>\
		<table border="0" width="600" cellpadding="0" cellpadding="0">\
			<tr>\
				<td style="width:100%;">\
					<div style="width:600px;\
						background: linear-gradient(rgba(255,255,255,0.1),#338FFC);\
					    background: -moz-linear-gradient( rgba(255,255,255,0.1),#338FFC);\
					    background: -o-linear-gradient( rgba(255,255,255,0.1),#338FFC);\
					    background: -webkit-linear-gradient(rgba(255,255,255,0.1),#338FFC);">\
						<p style="font-size:1em; text-align:center; padding:10px 0px">THANK YOU FOR YOR BUSINESS!</p>\
					</div>\
				<td>\
			<tr>\
		</table>\
	</div>\
</body>\
</html>';

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
									to: 'sanyogsmulay@gmail.com, mail2rizwanbsl@gmail.com',
									subject : "Casa Invoice from Rizwan!",
									html : emailCode
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

var data = require("../data.json");
var user_data = require("../version2_json/user_data.json");

exports.main = function(req, res){
	res.render('pro_land')
}

exports.checkLogin = function(req, res){
	//console.log(req);
	if(req != null){
		var email = req.body.email;
		var pass = req.body.password;
		var errormsg = data["msg"][0].errormsg;
		var flag = false;

		for(var i = 0; i < data["users"].length; i++){
			if(data["users"][i].email == email && data["users"][i].password == pass){
				flag = true;
			}
		}
		if (flag) {
			res.render('user_profile', user_data);

		} else {
			res.render('signin', data);
		}
	}
}

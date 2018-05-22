var JSON = {
		emile:{
			el:$("emile"),
			reg:/\w{6,20}@[a-z0-9]{2,6}\.[a-z]{2,6}/,
			hasVaild:false
		},
		password:{
			el:$("pwd"),
			reg:/^[a-z0-9\u0021-\u002f]{6,20}$/i,
			hasVaild:false
		},
		phone:{
			el:$("phone"),
			reg:/^[1][3,4,5,7,8][0-9]{9}$/,
			hasVaild:false
		},
		confirm:{
			el:$("confirm"),
			reg:/^[a-z0-9\u0021-\u002f]{6,20}$/i,
			hasVaild:false
		}
	}

//验证邮箱
	var emileel = JSON.emile.el;
	var emilereg = JSON.emile.reg;
	var hasVaild = JSON.emile.hasVaild;
//	alert(hasVaild)
	var playholder1 = document.getElementById("playholder1")
	emileel.onblur = function(){
		var emilevalue = this.value;
		if(!emilereg.test(emilevalue)){
			playholder1.style.display = "block"
			emileel.style.border = "2px solid #e55757";
			JSON.emile.hasVaild = "false";
		}else{
			playholder1.style.display = "none"
			emileel.style.border = "2px solid blue";
			JSON.emile.hasVaild = "true";
		}			
	}
	
//验证密码
			var pwel = JSON.password.el;
			var pwreg = JSON.password.reg;
			var playholder2 = document.getElementById("playholder2")
			pwel.onblur = function(){
			var pwvalue = this.value;
			if(!pwreg.test(pwvalue)){
				playholder2.style.display = "block";
				pwel.style.border = "2px solid #e55757";
				JSON.password.hasVaild = false;
			}else{
				pwel.style.border = "2px solid blue";
				playholder2.style.display = "none";
				JSON.password.hasVaild = true;
//				strengthpw(this,pwvalue)
			}
		}
//确认密码
			var confirmel = JSON.confirm.el;
			var confirmreg = JSON.confirm.reg;
			var playholder3 = document.getElementById("playholder3")
			confirmel.onblur = function(){
				var confirmvalue = this.value;
				if(confirmvalue!= pwel.value){
					playholder3.style.display="block";
					confirmel.style.border = "2px solid #e55757";
					JSON.confirm.hasVaild = false;
				}else if(confirmvalue == pwel.value && confirmreg.test(confirmvalue)){
					playholder3.style.display="none";
					confirmel.style.border = "2px solid blue";
					JSON.confirm.hasVaild = true;
				}
			}
//手	号
			var phoneel = JSON.phone.el;
			var phonereg = JSON.phone.reg;
			var playholder4 = document.getElementById("playholder4")
			phoneel.onblur = function(){
			var phonevalue = this.value;
			if(!phonereg.test(phonevalue)){
				playholder4.style.display = "block";
				phoneel.style.border = "2px solid #e55757";
				JSON.phone.hasVaild = false;
			}else{
				phoneel.style.border = "2px solid blue";
				playholder4.style.display = "none";
				JSON.phone.hasVaild = true;
//				strengthpw(this,pwvalue)
			}
		}

function $(selector){
			return document.getElementById(selector);
		}


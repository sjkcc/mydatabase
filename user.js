const express=require('express');
const pool=require('../pool.js');
var router=express.Router();

router.post("/login",(req,res)=>{
	var obj=req.body;
	if(!obj.uname){
		res.send("用户名不能为空");
		return;
	}
	if(!obj.upwd){
		res.send("密码不能为空");
		return;
	}
	pool.query("select * from f_user where uname=? and upwd=?",[obj.uname,obj.upwd],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("登录失败，用户名或密码错误");
		}
	});
});
//用户列表
router.get("/u_list",(req,res)=>{
	var obj=req.query;
	pool.query("select * from f_user",(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//ajax用户注册
router.get("/reg",(req,res)=>{
	var obj=req.query;
	//if(obj.uname_msg=="该用户名可用"&&obj.upwd_msg=="密码格式正确"&&obj.cpwd_msg=="两次输入的密码一致"&&obj.email_msg=="该邮箱地址可用"&&obj.phone_msg=="该手机号可用"){
	pool.query("insert into f_user set ?",[obj],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("注册成功");
			return;
		}
	});	
	//}else{
		//res.send("请输入正确的信息");
	//}
});
router.get("/reg1",(req,res)=>{
	var obj=req.query;
	pool.query("select uname from f_user where uname=?",[obj.uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("该用户名已被注册");
		}else{
			res.send("该用户名可用");
		}
	});
});
router.get("/reg2",(req,res)=>{
	var obj=req.query;
	pool.query("select email from f_user where email=?",[obj.email],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("该邮箱地址已被注册");
		}else{
			res.send("该邮箱地址可用");
		}
	});
});
router.get("/reg3",(req,res)=>{
	var obj=req.query;
	pool.query("select phone from f_user where phone=?",[obj.phone],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("该手机号已被注册");
		}else{
			res.send("该手机号可用");
		}
	});
});

module.exports=router;
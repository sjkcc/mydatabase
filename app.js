const express=require('express');
const userRouter=require('./routers/user.js');
const bodyParser=require('body-parser');
var server=express();
server.listen(8080);
server.use(express.static('public'));
//创建body中间件
server.use(bodyParser.urlencoded({
	extended:false
}));
server.use('/user',userRouter);
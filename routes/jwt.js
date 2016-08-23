module.exports = function ( app ) {
    var fs = require("fs");
    var http = require("http");
    var request = require('request');

    //注册事件
    app.post('/reg',function(req,res){
        console.log(req.body);
        var info=req.body;
        request.post({url:"/jsonsign", form: {name:info.name,pw:info.pw}}, function(error,response,body){
            console.log(JSON.parse(body));
            res.json(body);
        })
    })



}
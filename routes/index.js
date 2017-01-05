module.exports = function (app,express) {
    //require('./jwt')(app);
    app.get('/index', function (req, res) {
        res.render('index');
    });
    var jwt = require("jsonwebtoken");
    var User = global.dbHelper.getModel('Users');

    process.env.JWT_SECRET = "asdklq2je3l123nkl1230-4124jmnl15";
    app.post('/api/reg',function (req, res) {

                let token = jwt.sign({'id':'138'}, process.env.JWT_SECRET,{'expiresIn':"2 days"});
                res.json({
                    type: true,
                    data: {'33':'33'},
                    token:token
                });

    });
    app.post('/api/login',[ensureAuthorized],function (req, res) {

                res.json({
                    type:true,
                    data:{'33':'1','id':req.decoded.id}
                })

    });

    app.post('/api/authenticate',function (req, res) {

        User.findOne({email: req.body.email, password: req.body.password}, function (err, user) {
            if (err) {
                res.json({
                    type: false,
                    data: "Error occured: " + err
                });
            } else {
                console.log(user)
                if (user) {
                    res.json({
                        type: true,
                        data: user,
                        token: user.token
                    });
                    return  true
                } else {
                    res.json({
                        type: false,
                        data: "Incorrect email/password"
                    });
                    return false
                }
            }
        });
    });
    app.post('/api/signin',function (req, res) {


        User.findOne({email: req.body.email, password: req.body.password}, function (err, user) {
            if (err) {
                res.json({
                    type: false,
                    data: "Error occured: " + err
                });
            } else {

                if (user) {
                    res.json({
                        type: false,
                        data: "User already exists!"
                    });
                    return false
                } else {
                    var userModel = new User();
                    userModel.email = req.body.email;
                    userModel.password = req.body.password;
                    userModel.save(function (err, user) {
                       user.token = jwt.sign(user, process.env.JWT_SECRET,{'expiresIn':"2 days"});
                      //  user.token = jwt.sign(user, process.env.JWT_SECRET, { expiresInMinutes: 60*5 })
                        //   'expiresInMinutes': 1440000 // 设置过期时间
                        //})
                        user.save(function (err, user1) {
                            res.json({
                                type: true,
                                data: user1,
                                token: user1.token
                            });
                        });
                        return  true
                    })
                }
            }
        });
    });
    app.get('/api/me', [ensureAuthorized], function (req, res) {
        User.findOne({email: req.body.email, password: req.body.password}, function (err, user) {
            if (err) {
                res.json({
                    type: false,
                    data: "Error occured: " + err
                });
                return false
            } else {
                res.json({
                    type: true,
                    data: user
                });
                return  true
            }
        });
    });
    function ensureAuthorized(req, res, next) {
        var bearerHeader = req.headers['x-access-token'];
        //console.log(req.headers)
        if (typeof bearerHeader !== 'undefined') {

            jwt.verify(bearerHeader, process.env.JWT_SECRET, function(err, decoded) {
                if (err) {
                    return res.json({ success: false, message: 'token信息错误.' });
                } else {
                    // 如果没问题就把解码后的信息保存到请求中，供后面的路由使用
                    console.log(decoded)
                    req.decoded=decoded
                    next();
                }
                return  true
            });

        } else {
            res.send(403);
            return false
        }
    }


}
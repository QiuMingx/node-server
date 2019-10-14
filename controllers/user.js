
var User = require('../moduels').User
var Until = require('./until')  //同级目录下
module.exports = {
    login: function(req, res, next) {
        var username = req.body.username;  //统一接收前端的电话号，用户名，或者其他（多方式登录）
        var password = req.body.password;
        console.log(username,password)
        var param={
            // $or:{   //$or  sequelize提供的 或者查询
                username:username,
            //     id_card:username
            // },
            password:password
        }
        console.log(param)
        User.findOne({where:param}).then(r=>{
            console.log(r)
            res.send(Until.setResult(200,'success', Until.setToken(r)))
        }).catch(err=>{
            console.log(err)
            res.send(Until.setResult(500,'error',err))
        })
    },
//     // 添加新用户
// exports.addUser = function(userName, email) {
//     // 向 user 表中插入数据
//     return User.create({
//         userName: userName,
//         email: email
//     });
// };
 
// // 通过用户名查找用户
// exports.findByName = function(userName) {
//     return User.findOne({ where: { user_name: userName } });
// };

// 通过用户名查找用户
    findAll : function(req, res, next) {
        User.findAll().then(r=>{
            res.send(Until.setResult(200,'success', r))
        }).catch(err=>{
            res.send(Until.setResult(500,'error',err))
        })
    }

}
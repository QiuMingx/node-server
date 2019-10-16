
var User = require('../moduels').User
var Until = require('./until')  //同级目录下
module.exports = {
  /**
   * [登录]
   * @param  {[type]}   req  [description]
   * @param  {[type]}   res  [description]
   * @param  {Function} next [description]
   * @return {[type]}        [description]
   */
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
        User.findOne({where:param}).then(r=>{
            if (!r) {
                res.send(Until.setResult(50111,'用户名或密码错误', r))
                return
            }
            res.send(Until.setResult(200,'success', Until.setToken(r)))
        }).catch(err=>{
            res.send(Until.setResult(500,'error',err))
        })
    },
    /**
     * 注册
     * @param  {[type]}   req  [description]
     * @param  {[type]}   res  [description]
     * @param  {Function} next [description]
     * @return {[type]}        [description]
     */
    register: function(req, res, next) {
      let username = req.body.username,
        password = req.body.password,
        repassword = req.body.repassword;
        if(username =='' || password == '' || repassword == ''){
          res.send(Until.setResult(50001,'用户名或密码不能为空', null))
          return
        }
        if(repassword != password){
          res.send(Until.setResult(50001,'两次输入的密码不一致', null))
        }
        User.findOne({where:{ username: username }}).then(r=>{
            if (r) {
                res.send(Until.setResult(50111,'用户名已经被注册了',null))
                return
            }else{
                User.create({username:username,password:password})
                 .then(r => {
                    res.send(Until.setResult(200,'success', '注册成功'))
                    return
                 })
                 .catch(err=> {
                   res.send(Until.setResult(500,'error',err))
                 })
            }

        }).catch(err=>{
            res.send(Until.setResult(500,'error',err))
        })
    },
  /**
   * [检查用户是否存在]
   * @param  {[type]}   req  [description]
   * @param  {[type]}   res  [description]
   * @param  {Function} next [description]
   * @return {[type]}        [description]
   */
    existsMobile :function(req, res, next) {
        let username = req.body.username,flag;
        User.findOne({ where: { username: username } })
        .then(r=>{
          flag = r ? true : false;
          res.send({"result":true,"value":flag})
        }).catch(err=>{
            res.send(Until.setResult(500,'error',err))
        })
    },

    /**
     * [查询所有用户]
     * @param  {[type]}   req  [description]
     * @param  {[type]}   res  [description]
     * @param  {Function} next [description]
     * @return {[type]}        [description]
     */
    findAll : function(req, res, next) {
        User.findAll().then(r=>{
            res.send(Until.setResult(200,'success', r))
        }).catch(err=>{
            res.send(Until.setResult(500,'error',err))
        })
    },


}

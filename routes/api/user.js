var express = require('express');
var router = express.Router();
var ctrls  = require('../../controllers');

router.get('/',ctrls.User.findAll);

router.post('/login',ctrls.User.login);
router.post('/existsMobile',ctrls.User.existsMobile);
router.post('/register',ctrls.User.register);

module.exports = router;



// /* 查询单个*/
// User.find({where:{id:1}})
// .then(function (res) {
//    console.log(JSON.stringify(res))
// })
// .catch(function (ex) {
//    console.log(ex)
// })

// /*查询所有*/
// User.findAll({where:{sex:1},attributes:['id','username']}) //包含id和username
//    .then(function (res) {
//       console.log(JSON.stringify(res))
//    })
//    .catch(function (ex) {
//       console.log(ex)
//    })

// /*分页查询所有，有条件    注意offset,linit数据类型必须为number    */
// var param = {
//    'offset': 1,   // 从第几个开始查询  Number(pageSize*pageNow)
//    'limit': 10,   //每次查询多少个 size
//      attributes:{exclude:['password']},//exclude不包含
//    where: { sex:1 }
// }
// User.findAndCountAll(param)
//    .then(function (res) {
//       console.log(JSON.stringify(res))
//    })
//    .catch(function (ex) {
//       console.log(ex)
//    })

// /*添加*/
// var user={
//    username:'wo shi 1111111',
//    password:'12312321321312312321313',
//    id_card:'11011011101110110'}
// User.create(user)
//    .then(function (res) {
//       console.log(JSON.stringify(res))
//    })
//    .catch(function (ex) {
//       console.log(ex)
//    })

// /*修改*/
// User.update({username:'abcdefg'},{where:{id:1}})
//    .then(function (res) {
//       console.log(JSON.stringify(res))  //更改成功返回 [1],失败返回[0]
//    })
//    .catch(function (ex) {
//       //如果数据库里没有id这个属性名，才会进入到catch
//        console.log(ex)
//    })

// /*删除*/
// User.destroy({where:{id:102}})
//    .then(function (res) {
//       console.log(JSON.stringify(res))
//    })
//    .catch(function (ex) {
//       console.log(ex)

//    })

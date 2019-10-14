
var Sequelize =  require('sequelize');
// database数据库名称   name 用户  password密码
var sequelize = new Sequelize('myserver', 'root', '111111', {
    host: 'localhost',  //数据库域名
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports=sequelize
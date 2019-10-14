var SequelizeAuto = require('sequelize-auto')
// database数据库名称   name 用户  password密码
var auto = new SequelizeAuto('myserver', 'root', '111111', { 
    host: 'localhost',   //数据库地址
    dialect: 'mysql',  
    directory: './moduels',  //生成的模块放到的目录
    port: '3306',  //数据库端口
    additional: {
        timestamps: false
    }
})
auto.run(function (err) {
    if (err) throw err;
    console.log(auto.tables); // table list
    console.log(auto.foreignKeys); // foreign key list
});

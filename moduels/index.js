/* 数据库模型名称配置及路径 */
const models=[
    {
        "name": "User",
        "path": "./user.js"
    },
    // {
    //     "name": "Branch",
    //     "path": "./tb_branch.js"
    // },
    // {
    //     "name": "Carousel",
    //     "path": "./tb_carousel.js"
    // }
 
]
/* 数据库模型输出 */
models.forEach(item=>{
    module.exports[item.name]=require(item.path);

})

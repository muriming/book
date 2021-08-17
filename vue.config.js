// 配置@避免是../的混乱
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
    devServer:{
        proxy:{
            // api是后端数据接口的上下文路径
            '/api':{
                // 这里的地址是后端数据接口的地址
                target: "http://111.229.37.167",
                // 允许kuayu
                changOrigin:true,
            }
        }
    },
    // 配置@避免是../的混乱
    chainWebpack: config => {
        config.resolve.alias
          .set("@", resolve("src"))
          .set("assets", resolve("src/assets"))
          .set("components", resolve("src/components"))
          .set("base", resolve("baseConfig"))
          .set("public", resolve("public"));
      },

}
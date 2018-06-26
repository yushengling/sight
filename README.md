# https://downfuture.com/

# 技术栈
    react + redux + saga + router + es6 + node.js + webpack + mysql + propTypes

# 部署步骤
    1. git clone https://github.com/bbww/sightb.git

    2. cd sightb

    3. npm i

    4. npm start

    5. git clone https://github.com/bbww/sight.git

    6. cd sight

    7. npm i

    8. npm start

# 发布步骤
    npm run build  // 打包静态文件

# 目录结构描述
<pre>
├── public                      // 公共
├── src                         // 入口
│   ├── action                  // action
│   ├── components              // 组件
│   ├── pages                   // 页面
│   ├── reducers                // reducers
│   ├── sagas                   // sagas
│   ├── servers                 // 接口
│   ├── store                   // 数据源
│   ├── index.js                // index.js
│   ├── requrest.js             // fetch
│   ├── router.js               // 路由
│   └── 
├── LICENSE                     // LICENSE 
├── package-lock.json           // package-lock.json
├── package.json                // package.json
├── README.md                   // README.md
├── webpack.dev.js              // 测试环境
├── webpack.prod.js             // 生产环境
</pre>
# V1.0.0 版本内容更新
    1、上线登录注册模块。
    2、用户可以点赞和收藏，暂时未开放收藏过的图片。
    3、个人中心可以上传头像和图片(图片最多上传三张)，暂时未压缩。
    4、个人中心可以修改密码和登出。

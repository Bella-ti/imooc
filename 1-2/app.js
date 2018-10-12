var express = require('express') // 加载模块
var port = process.env.PORT || 3000 // 设置端口 process 获取环境变量
var app = express() // 启动一个服务器，将实例赋值给app

app.set('views', './views') // 设置使徒的根目录
app.set('view engine', 'jade') // 设置模板引擎
app.listen(port) // 监听端口

console.log('listen ' + port)
// 添加页面路由
app.get('/', function(req, res) { // index
	res.render('index', {title: 'imooc 首页'})
})

app.get('/movie/:id', function(req, res) { // detail
	res.render('index', {title: 'imooc 详情页'})
})

app.get('/admin/list', function(req, res) { // list
	res.render('index', {title: 'imooc 列表页'})
})

app.get('/admin/movie', function(req, res) { // admin
	res.render('index', {title: 'imooc 后台录入页'})
})
const router = require('koa-router')()

const pageData = require('../demoData')

router.get('/rest/film/list', async(ctx, next) => {
    const resData = {
        pageNo: 1,
        pageSize: 10,
        list: pageData.indexPageData
    }
    ctx.body = resData
    // await ctx.render('../../server/views/404.html')
})
.get('/rest/film/detail/:index', async(ctx, next) => {
    const index = ctx.params.index;
    const resData = pageData.indexPageData[index]
    ctx.body =resData
    // await ctx.render('../../server/views/404.html')
})
.get('/rest/user/signIn', async(ctx, next) => {
    
    const { userName, password } = ctx.query
    console.log(userName, password)
    if (userName === 'caisc' && password === '123456') {
        return ctx.body = {
            status: 200,
            message: '登录成功'
        }
    }
    // const index = ctx.params.index;
    // const resData = pageData.indexPageData[index]
    ctx.body = {
        status: 500,
        message: '用户名或密码错误'
    }
    // await ctx.render('../../server/views/404.html')
})
module.exports = router
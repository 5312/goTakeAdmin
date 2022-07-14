package router

import (
	"project/serve/controller"

	"github.com/kataras/iris/v12"
)

// 路由

func RegisterRoute(app *iris.Application) {
	// 注册中间件
	app.Get("/",controller.Indexs)  
	// 简单分组: v1.
	api := app.Party("/api")
	{
		api.Get("/", controller.Users)
	}

	admin := app.Party("/admin")
	{
		admin.Get("/", controller.Users)
	}
}

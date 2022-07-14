package controller

import (
	"fmt"
	"project/serve/datasource"
	"project/serve/models"

	"github.com/kataras/iris/v12"
)

func Indexs(ctx iris.Context) {

	ctx.View("index.html")
}

/* 用户账号 */
func Users(ctx iris.Context) {
	fmt.Println("-----")
	log1 := models.TakeSysLog{Name: "admin", UserId: "123456", Opeator: "222", CostTime: "1111"}
	rest := datasource.DB.Create(&log1)

	fmt.Print("------------------")
	fmt.Print(rest)
	fmt.Print("---")
	ctx.HTML("<b>Hi</b1>")

	// return func(ctx iris.Context) {
	// 	ctx.HTML("<b>Hi</b1>")
	// }
}

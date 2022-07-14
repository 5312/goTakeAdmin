package main

import (
	"fmt"
	"os/exec"
	"project/serve/config"
	"project/serve/datasource"
	"project/serve/router"
	"runtime"

	"github.com/kataras/iris/v12"
	"github.com/spf13/viper"
)

func main() {
	fmt.Println("|---------------------------|")
	fmt.Println("|----------admin------------|")
	fmt.Println("|---------------------------|")

	webIris()

	// open("http://localhost:9000/")

}

// iris 框架
func webIris() {
	// 1. 创建 app结构体对象
	app := iris.Default()
	// 2. 初始化环境 配置文件
	config.InitConfig()

	// 3. 初始化mysql
	datasource.InitDatasource()

	// 4. 注册路由
	router.RegisterRoute(app)
	// 5 注册view
	tmpl := iris.HTML("./serve/static", ".html")
	tmpl.Reload(true)
	app.RegisterView(tmpl)

	//  end.监听端口
	// 读取conf
	str := ":"
	port := viper.Get("Conf.Port")
	res := fmt.Sprintf("%s%s", str, port)
	app.Run(iris.Addr(res))

}

func open(uri string) error {
	// 打开浏览器
	var commands = map[string]string{
		"windows": "start",
		"linux":   "xdg-open",
	}
	run, ok := commands[runtime.GOOS]
	if !ok {
		return fmt.Errorf("%q 平台识别失败", runtime.GOOS)
	}
	cmd := exec.Command(`cmd`, `/c`, run, uri)
	return cmd.Start()
}

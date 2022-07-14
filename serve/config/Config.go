package config

import (
	"fmt"

	"github.com/spf13/viper"
)

// MySQL 链接配置
// 字段 类型 员信息
type DbConfig struct {
	AutoCreateTable bool   `yaml:"AutoCreateTable"`
	Driver          string `yaml:"Driver"`
	DriverName      string `yaml:"DriverName"`
	Host            string `yaml:"Host"`
	User            string `yaml:"User"`
	Password        string `yaml:"Password"`
	Port            string `yaml:"Port"`
	Charset         string `yaml:"Charset"`
}

func InitConfig() {
	viper.SetConfigFile("../../config.yaml") // 指定配置文件路径
	viper.SetConfigName("config")            // 配置文件名称(无扩展名)
	viper.SetConfigType("yaml")              // 如果配置文件的名称中没有扩展名，则需要配置此项
	viper.AddConfigPath("project")           // 查找配置文件所在的路径
	viper.AddConfigPath(".")                 // 还可以在工作目录中查找配置
	viper.WatchConfig()                      //监控配置文件更新

	err := viper.ReadInConfig() // 查找并读取配置文件
	if err != nil {             // 处理读取配置文件的错误
		panic(fmt.Errorf("Fatal error config file: %s \n", err))
	}
}

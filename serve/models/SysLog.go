package models

import (
	"gorm.io/gorm"
)

type TakeSysLog struct {
	gorm.Model
	Name     string
	UserId   string
	Opeator  string
	CostTime string
}

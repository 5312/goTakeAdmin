package downloadBaiduMap

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

// 定义根路径

var M = map[string]string{
	// map:            "w5ikmz",
	"common":          "0i1xyh",
	"style":           "bcuyxj",
	"tile":            "an3pcc",
	"groundoverlay":   "3k4wfh",
	"pointcollection": "kf5vmr",
	"marker":          "f1iido",
	"symbol":          "sltkvu",
	"canvablepath":    "utpofa",
	"vmlcontext":      "pu2bmn",
	"markeranimation": "pd3b1b",
	"poly":            "jkkdiy",
	"draw":            "fbiuuf",
	"drawbysvg":       "flc2e2",
	"drawbyvml":       "jyshbp",
	"drawbycanvas":    "xnplnb",
	"infowindow":      "0nunvi",
	"oppc":            "oepgil",
	"opmb":            "5fndhr",
	"menu":            "r05i0j",
	"control":         "lszuk4",
	"navictrl":        "cysxnr",
	"geoctrl":         "d20eqn",
	"copyrightctrl":   "3f4ntx",
	"citylistcontrol": "tuehmk",
	"scommon":         "whfn0t",
	"local":           "ecxjjk",
	"route":           "nltskf",
	"othersearch":     "q5qpvr",
	"mapclick":        "bkh3gp",
	"buslinesearch":   "ynsam3",
	"hotspot":         "dkd3dp",
	"autocomplete":    "4uqcme",
	"coordtrans":      "0cnclo",
	"coordtransutils": "obijl4",
	"convertor":       "ph41p5",
	"clayer":          "230ovb",
	"pservice":        "x1bb5h",
	"pcommon":         "iwutsu",
	"panorama":        "xwebu3",
	"panoramaflash":   "a4ka4p",
}

func FormatJson() {
	for k, v := range M {
		url := "http://api0.map.bdimg.com/getmodules?v=3.0&mod=" + fmt.Sprintf("%s_%s", k, v)

		suffix := k + "_" + v + ".js"
		saveJs(url, suffix)
		// fmt.Print(url)
	}
}

func saveJs(jsurl string, suffix string) {
	// 请求
	resp, err := http.Get(jsurl)
	if err != nil {
		panic(err)
	}

	defer resp.Body.Close()

	// 创建一个文件用于保存
	out, err := os.Create("./serve/static/modules/" + suffix)
	if err != nil {
		panic(err)
	}
	defer out.Close()

	// 然后将响应流和文件流对接起来
	_, err = io.Copy(out, resp.Body)
	if err != nil {
		panic(err)
	}
}

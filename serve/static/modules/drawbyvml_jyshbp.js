/**/_jsload2&&_jsload2('drawbyvml', 'function Sh(a){this.P=a;this.CU={strokeweight:"weight",strokecolor:"color",fillcolor:"color",strokeopacity:"opacity",fillopacity:"opacity",strokestyle:"dashstyle"};this.Nb="vml"}Sh.oK={orange:"#ffa500"};Sh.prototype=new A.dz;var Th=Sh.prototype; Th.setAttribute=function(a,b,c){a&&(0==b.indexOf("stroke")?a=a.getElementsByTagName("stroke")[0]:0==b.indexOf("fill")&&(a=a.getElementsByTagName("fill")[0]),0<b.indexOf("color")&&(c?(a.on=q,Sh.oK[c]&&(c=Sh.oK[c])):a.on=t),"strokestyle"==b&&(c="solid"==c?"solid":"4 2 1 2"),"strokeweight"==b&&(c+="px"),a[this.cr(b)]=c||"")};Th.cr=function(a){return this.CU[a]||a};Th.Ho=function(){return Gb(this.P.Wf().Ht,\'<v:shape style="behavior:url(#default#VML);z-index:1;width:1px;height:1px;position:absolute;left:0;top:0;"coordsize="1,1" coordorigin="0,0" filled="t" fillcolor="white"><v:stroke style="behavior:url(#default#VML);" endcap="round" oned="true" /><v:fill style="behavior:url(#default#VML)" /></v:shape>\')}; Th.zd=function(a,b){this.setAttribute(a,"path",this.iA(b));6==x.ga.oa&&(a.style.display="none",a.style.display="")};Th.iA=function(a){if(0==a.length)return"";var b=[];x.oc.Pb(a,function(a){if(!(2>a.length)){b.push("m "+a[0].x+" "+a[0].y+" l");for(var e=1,f=a.length;e<f;e++)b.push(a[e].x),b.push(a[e].y);b.push("e")}});return b.join(" ")||" "};A.QP=Sh; ');
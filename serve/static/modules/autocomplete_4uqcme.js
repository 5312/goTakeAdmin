/**/_jsload2&&_jsload2('autocomplete', 'x.lang.Ja.prototype.ji=ja(0,function(){delete window[x.da]._instances[this.da];for(var a in this)x.lang.xt(this[a])||delete this[a]});x.U.getComputedStyle=function(a,b){var a=x.U.$j(a),c=x.U.FD(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,s))?c[b]||c.getPropertyValue(b):""};x.U.remove=function(a){var a=x.U.$j(a),b=a.parentNode;b&&b.removeChild(a)};x.lang.isArray=function(a){return"[object Array]"==Object.prototype.toString.call(a)}; x.event=x.event||{};x.event.stopPropagation=function(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=q};x.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=t};x.event.stop=function(a){var b=x.event;b.stopPropagation(a);b.preventDefault(a)};x.oc.indexOf=function(a,b,c){var e=a.length,c=c|0;for(0>c&&(c=Math.max(0,e+c));c<e;c++)if(c in a&&a[c]===b)return c;return-1};x.oc.contains=function(a,b){return 0<=x.oc.indexOf(a,b)};x.Sb=x.Sb||{version:"1.3.9"}; x.Sb.iY=function(a){for(var a=a.split("-"),b=x.Sb,c=a.length,e=0;e<c;e++)b=b[a[e].charAt(0).toUpperCase()+a[e].slice(1)];return b};x.Sb.create=function(a,b){x.lang.Fg(a)&&(a=x.Sb.iY(a));return new a(b)};x.event.NA=x.event.NA||[]; x.event.V=function(a,b,c){function e(b){c.call(a,b)}var b=b.replace(/^on/i,""),a=x.U.$j(a),f=x.event.NA,g=x.event.S1,i=b,b=b.toLowerCase();g&&g[b]&&(g=g[b](a,b,e),i=g.type,e=g.Y4);a&&a.addEventListener?a.addEventListener(i,e,t):a&&a.attachEvent&&a.attachEvent("on"+i,e);f[f.length]=[a,b,c,e,i];return a};x.V=x.event.V; x.event.hd=function(a,b,c){for(var a=x.U.$j(a),b=b.replace(/^on/i,"").toLowerCase(),e=x.event.NA,f=e.length,g=!c,i,k;f--;)if(i=e[f],i[1]===b&&i[0]===a&&(g||i[2]===c))k=i[4],i=i[3],a.removeEventListener?a.removeEventListener(k,i,t):a.detachEvent&&a.detachEvent("on"+k,i),e.splice(f,1);return a};x.hd=x.event.hd; x.Sb.jG={id:"",Zb:function(a){var b;b="tangram-"+this.zu+"--"+(this.id?this.id:this.da);return a?b+"-"+a:b},Vs:function(a){var b=this.mK,c=this.a0;a&&(b+="-"+a,c+="-"+a);this.a0&&(b+=" "+c);return b},oi:function(){return x.fa(this.OM)},oX:function(){return x.fa(this.Zb())},zu:"",kp:function(){return"window[\'$BAIDU$\']._instances[\'"+this.da+"\']"},G3:function(a){for(var b=0,c=Array.prototype.slice.call(arguments,1),e=c.length;b<e;b++)"string"==typeof c[b]&&(c[b]="\'"+c[b]+"\'");return this.kp()+"."+a+ "("+c.join(",")+");"},V:function(a,b,c){x.V(a,b,c);this.addEventListener("ondispose",function(){x.hd(a,b,c)})},h_:function(a){if(!this.oi())return a=x.fa(a),a||(a=document.createElement("div"),document.body.appendChild(a),a.style.position="absolute",a.className=this.Vs("main")),a.id||(a.id=this.Zb("main")),this.OM=a.id,a.setAttribute("data-guid",this.da),a},ji:function(){this.dispatchEvent("dispose");x.lang.Ja.prototype.ji.call(this)}}; x.Sb.$V=function(a){function b(){}function c(b,e){var o=this,b=b||{};f.call(o,!g?b:b.da||"",q);x.object.extend(o,c.options);x.object.extend(o,b);o.mK=o.mK||"tangram-"+o.zu.toLowerCase();for(i in x.Sb.jm)"undefined"!=typeof o[i]&&o[i]&&(x.object.extend(o,x.Sb.jm[i]),x.lang.xt(o[i])?o.addEventListener("onload",function(){x.Sb.jm[i].call(o[i].apply(o))}):x.Sb.jm[i].call(o));a.apply(o,arguments);i=0;for(k=c.qz.length;i<k;i++)c.qz[i](o);b.parent&&o.P_&&o.P_(b.parent);!e&&b.F2&&o.Ba(b.element)}var e;e= e||{};var f=e.j0||x.lang.Ja,g=f==x.lang.Ja?1:0,i,k;b.prototype=f.prototype;e=c.prototype=new b;for(i in x.Sb.jG)e[i]=x.Sb.jG[i];c.extend=function(a){for(i in a)c.prototype[i]=a[i];return c};c.qz=[];c.df=function(a){"function"==typeof a&&c.qz.push(a)};c.options={};return c};x.U.zD=function(a,b){a=x.U.fa(a);if(a===s)return a;if("style"==b)return a.style.cssText;b=x.U.JG[b]||b;return a.getAttribute(b)};x.zD=x.U.zD; x.Sb.get=function(a){var b;if(x.lang.Fg(a))return x.lang.Tc(a);do{if(!a||9==a.nodeType)return s;if(b=x.U.zD(a,"data-guid"))return x.lang.Tc(b)}while((a=a.parentNode)!=document.body)}; x.Sb.Mi=x.Sb.$V(function(){var a=this;a.addEventListener("onload",function(){eventName=K()?"touchstart":"mousedown";a.V(document,eventName,a.rW);a.V(window,"blur",a.c1)});a.rW=a.YR();a.c1=a.wS();a.Ak=[];a.cd=-1}).extend({zu:"suggestion",q5:new Function,u5:new Function,r5:new Function,t5:new Function,w5:new Function,s5:new Function,getData:function(){return[]},M5:"",D2:"",sm:{},F0:"<div id=\'#{0}\' class=\'#{1}\' style=\'position:relative; top:0px; left:0px\'></div>",y6:"<div id=\'#{0}\' class=\'#{1}\'>#{2}</div>", E0:\'<div style="height:22px;line-height:22px;overflow:hidden;zoom:1;border-top:#E7E7E7 solid 1px;background:#F7F7F7;"><span style="float:right;color:#4B4B4B;border-left:1px solid #E7E7E7;padding:0 10px;font-size:14px;" onmousedown="#{0}">\\u5173\\u95ed</span></div>\',D0:\'<table cellspacing="0" cellpadding="2"><tbody>#{0}</tbody></table>\',G0:\'<tr><td id="#{0}" onmouseover="#{2}" onmouseout="#{3}" onmousedown="#{4}" onclick="#{5}" class="#{6}"><i class="route-icon">#{1}</i></td></tr>\',aY:function(){return x.hp(this.F0, this.Zb(),this.Vs(),this.da)},Ba:function(a,b){var c,a=x.fa(a);this.cC=b;!this.oi()&&a&&(this.l0=a.id?a.id:a.id=this.Zb("input"),c=this.h_(),c.style.display="none",c.innerHTML=this.aY(),this.dispatchEvent("onload"))},GA:function(){var a=this.oi();return a&&"none"!=a.style.display},Ej:function(a){var b=this.sm,a={data:{item:(b&&"number"==typeof a&&"undefined"!=typeof b[a]?b[a].value:a)==a?{value:a,content:a}:b[a],index:a}};this.dispatchEvent("onbeforepick",a)&&this.dispatchEvent("onpick",a)},show:function(a, b,c){var a=0,e=b.length;this.Ak=[];this.cd=-1;if(0==e&&!c)this.aa();else{for(this.sm=[];a<e;a++)"undefined"!=typeof b[a].value?this.sm.push(b[a]):this.sm.push({value:b[a],content:b[a]}),("undefined"==typeof b[a].disable||b[a].disable==t)&&this.Ak.push(a);this.oX().innerHTML=this.TR();this.oi().style.display="block";this.dispatchEvent("onshow")}},aa:function(){if(this.GA()){if(0<=this.cd&&this.rY)for(var a=this.sm,b=-1,c=0,e=a.length;c<e;c++)if("undefined"==typeof a[c].disable||a[c].disable==t)b++, b==this.cd&&this.Ej(c);this.oi().style.display="none";this.dispatchEvent("onhide")}},kt:function(a){var b=this.Ak,c=s;this.mr(a)&&(0<=this.cd&&this.eH(),c=this.HH(a),x.ib(c,this.Vs("current")),this.cd=x.oc.indexOf(b,a),this.dispatchEvent("onhighlight",{index:a,data:this.zm(a)}))},lC:function(){var a=this.Ak[this.cd];this.eH()&&this.dispatchEvent("onclearhighlight",{index:a,data:this.zm(a)})},eH:function(){var a=this.cd,b=this.Ak,c=s;return 0<=a?(c=this.HH(b[a]),x.rc(c,this.Vs("current")),this.cd= -1,q):t},confirm:function(a,b){if("keyboard"==b||this.mr(a))this.Ej(a),this.dispatchEvent("onconfirm",{data:this.zm(a)||a,source:b}),this.cd=-1,this.aa()},zm:function(a){return{item:this.sm[a],index:a}},TD:function(){return this.Gm().value},Gm:function(){return x.fa(this.l0)},HH:function(a){return x.fa(this.Zb("item"+a))},TR:function(){for(var a="",b=[],c=this.sm,e=c.length,f=0;f<e;f++)b.push(x.hp(this.G0,this.Zb("item"+f),c[f].content,this.kp()+"._itemOver(event, "+f+")",this.kp()+"._itemOut(event, "+ f+")",this.kp()+"._itemDown(event, "+f+")",this.kp()+"._itemClick(event, "+f+")","undefined"==typeof c[f].disable||c[f].disable==t?"":this.Vs("disable")));a+=x.hp(this.D0,b.join(""));K()&&(a+=x.hp(this.E0,this.kp()+"._close(event)"));return a},_close:function(){this.aa()},_itemOver:function(a,b){x.event.stop(a||window.event);this.mr(b)&&this.kt(b);this.dispatchEvent("onmouseoveritem",{index:b,data:this.zm(b)})},_itemOut:function(a,b){x.event.stop(a||window.event);this.rY||this.mr(b)&&this.lC();this.dispatchEvent("onmouseoutitem", {index:b,data:this.zm(b)})},_itemDown:function(a,b){x.event.stop(a||window.event);this.dispatchEvent("onmousedownitem",{index:b,data:this.zm(b)})},_itemClick:function(a,b){x.event.stop(a||window.event);this.dispatchEvent("onitemclick",{index:b,data:this.zm(b)});this.mr(b)&&this.confirm(b,"mouse")},mr:function(a){return x.oc.contains(this.Ak,a)},YR:function(){var a=this;return function(b){var b=b||window.event,b=b.target||b.srcElement,c=x.Sb.get(b);b==a.Gm()||c&&c.zu==a.zu||a.aa()}},wS:function(){var a= this;return function(){a.aa()}},ji:function(){this.dispatchEvent("dispose");x.U.remove(this.OM);x.lang.Ja.prototype.ji.call(this)}});x.Sb.jm=x.Sb.jm||{};x.U.children=function(a){a=x.U.fa(a);if(a===s)return a;for(var b=[],a=a.firstChild;a;a=a.nextSibling)1==a.nodeType&&b.push(a);return b};x.U.insertBefore=function(a,b){var c;c=x.U.$j;a=c(a);b=c(b);(c=b.parentNode)&&c.insertBefore(a,b);return a}; x.U.Ud=function(a,b,c){var e=x.U,f,a=e.fa(a),b=x.dl.BO(b);if(f=e.Xl)c=f.filter(b,c,"set");(f=e.EB[b])&&f.set?f.set(a,c):a.style[f||b]=c;return a};x.Ud=x.U.Ud;x.U.Ei=function(a,b){a=x.U.fa(a);if(a===s)return a;for(var c in b)x.U.Ud(a,c,b[c]);return a};x.Ei=x.U.Ei;x.U.Xl[x.U.Xl.length]={set:function(a,b){b.constructor==Number&&!/zIndex|fontWeight|opacity|zoom|lineHeight/i.test(a)&&(b+="px");return b}}; x.U.$t=function(a,b){function c(a,b){return parseFloat(x.Eg(a,b))||0}var e={};b.width&&(e.width=parseFloat(b.width));b.height&&(e.height=parseFloat(b.height));if(x.ga.sE&&(b.width&&(e.width=parseFloat(b.width)-c(a,"paddingLeft")-c(a,"paddingRight")-c(a,"borderLeftWidth")-c(a,"borderRightWidth"),0>e.width&&(e.width=0)),b.height))e.height=parseFloat(b.height)-c(a,"paddingTop")-c(a,"paddingBottom")-c(a,"borderTopWidth")-c(a,"borderBottomWidth"),0>e.height&&(e.height=0);return x.U.Ei(a,e)}; (function(){var a=x.Sb.jm.wK=ca();a.bz=t;a.rq;a.nG;a.oG;a.pP=function(){if(this.rq)this.qP(),x.Ud(this.rq,"display","block");else{var a=this.PV||{},c=this.nG=a.cb||this.oi(),e=a.opacity||"0",a=a.color||"",f=this.rq=document.createElement("iframe"),g=this.oG=document.createElement("div");0<x.U.children(c).length?x.U.insertBefore(g,c.firstChild):c.appendChild(g);x.Ei(g,{position:"absolute",top:"0px",left:"0px"});x.U.$t(g,{width:c.offsetWidth,height:c.offsetHeight});x.U.$t(f,{width:g.offsetWidth});x.U.Ei(f, {zIndex:-1,display:"block",border:0,backgroundColor:a,filter:"progid:DXImageTransform.Microsoft.Alpha(style=0,opacity="+e+")"});g.appendChild(f);f.src="javascript:void(0)";f.frameBorder="0";f.scrolling="no";f.height="97%";this.bz=q}};a.oP=function(){var a=this.rq;this.bz&&(x.Ud(a,"display","none"),this.bz=t)};a.qP=function(){var a;a=a||{};var c=this.nG,e=this.oG,f=this.rq;x.U.$t(e,{width:c.offsetWidth,height:c.offsetHeight});x.U.$t(f,x.extend({width:x.Eg(e,"width")},a))}})(); x.extend(x.Sb.Mi.prototype,{wK:q,PV:{}});x.Sb.Mi.df(function(a){a.wK&&(a.addEventListener("onshow",function(){a.pP()}),a.addEventListener("onhide",function(){a.oP()}))});x.Sb.Mi.extend({setData:function(a,b,c){this.zC[a]=b;c||this.show(a,this.zC[a])}});x.Sb.Mi.df(function(a){a.zC={};a.addEventListener("onneeddata",function(b,c){var e=a.zC;"undefined"==typeof e[c]?a.getData(c):a.show(c,e[c])})});x.U.N_=x.U.Z5=function(a,b){return x.U.$t(a,{width:b})}; x.U.mY=function(a){a=x.U.fa(a);if(a===s)return a;a=x.U.FD(a);return a.parentWindow||a.defaultView||s};x.U.va=function(a,b){return x.U.Ei(a,{left:b.left-(parseFloat(x.U.Eg(a,"margin-left"))||0),top:b.top-(parseFloat(x.U.Eg(a,"margin-top"))||0)})};x.page=x.page||{};x.page.YD=function(){var a=document;return("BackCompat"==a.compatMode?a.body:a.documentElement).clientWidth};x.page.XD=function(){var a=document;return("BackCompat"==a.compatMode?a.body:a.documentElement).clientHeight}; x.page.ZX=function(){var a=document;return window.pageYOffset||a.documentElement.scrollTop||a.body.scrollTop};x.page.YX=function(){var a=document;return window.pageXOffset||a.documentElement.scrollLeft||a.body.scrollLeft};x.Ss=x.Ss||{};x.Ss.bind=function(a,b){var c=2<arguments.length?[].slice.call(arguments,2):s;return function(){var e=x.lang.Fg(a)?b[a]:a,f=c?c.concat([].slice.call(arguments,0)):arguments;return e.apply(b||e,f)}}; (function(){function a(a){a.x=a[0]||a.x||a.left||0;a.y=a[1]||a.y||a.top||0;return a}var b=x.Sb.jm.ZZ=ca();b.va=function(a,b,f){b=x.fa(b)||this.oi();f=f||{};this.UP(b,f.DZ,[b,a,f])};b._positionByCoordinate=function(b,e,f,g){var e=e||[0,0],f=f||{},i={},k=x.page.XD(),m=x.page.YD(),n=x.page.YX(),o=x.page.ZX(),p=b.offsetWidth,v=b.offsetHeight,w=b.offsetParent,w=!w||w==document.body?{left:0,top:0}:x.U.ma(w);f.position="undefined"!==typeof f.position?f.position.toLowerCase():"bottomright";e=a(e||[0,0]); f.Ga=a(f.Ga||[0,0]);e.x+=0<=f.position.indexOf("right")?e.width||0:0;e.y+=0<=f.position.indexOf("bottom")?e.height||0:0;i.left=e.x+f.Ga.x-w.left;i.top=e.y+f.Ga.y-w.top;switch(f.L4){case "surround":i.left+=i.left<n?p+(e.width||0):i.left+p>n+m?-p-(e.width||0):0;i.top+=i.top<o?v+(e.height||0):i.top+v>o+k?-v-(e.height||0):0;break;case "fix":i.left=Math.max(0-parseFloat(x.U.Eg(b,"marginLeft"))||0,Math.min(i.left,x.page.YD()-p-w.left));i.top=Math.max(0-parseFloat(x.U.Eg(b,"marginTop"))||0,Math.min(i.top, x.page.XD()-v-w.top));break;case "verge":var y=-1<f.position.indexOf("right")?e.width:0,z=-1<f.position.indexOf("bottom")?e.height:0,B=-1<f.position.indexOf("bottom")?e.width:0,D=-1<f.position.indexOf("right")?e.height:0;i.left-=0<=f.position.indexOf("right")?e.width||0:0;i.top-=0<=f.position.indexOf("bottom")?e.height||0:0;i.left+=i.left+y+p-n>m-w.left?B-p:y;i.top+=i.top+z+v-o>k-w.top?D-v:z}x.U.va(b,i);!g&&(k!=x.page.XD()||m!=x.page.YD())&&this._positionByCoordinate(b,e,{},q);g||this.dispatchEvent("onpositionupdate")}; b.UP=function(a,b,f){("undefined"==typeof b||!b)&&x.event.V(x.U.mY(a),"resize",x.Ss.bind.apply(this,["_positionByCoordinate",this].concat([].slice.call(f))));this._positionByCoordinate.apply(this,f)}})(); x.Sb.Mi.extend({ZZ:q,aX:q,nY:function(){var a=this;return function(){a.Hw(q)}},Hw:function(a){var b=this.Gm(),c=this.cC,e=this.oi();if(this.GA()||!a)c&&(b=c),a=x.U.ma(b),b={top:a.top+b.offsetHeight-1,left:a.left,width:b.offsetWidth},b="function"==typeof this.view?this.view(b):b,this.va([b.left,b.top],s,{DZ:q}),x.U.N_(e,b.width)}}); x.Sb.Mi.df(function(a){a.d1=a.nY();a.addEventListener("onload",function(){a.Hw();a.aX&&(a.bX=setInterval(function(){var b=a.oi(),c=a.Gm();0!=b.offsetWidth&&(c&&c.offsetWidth!=b.offsetWidth)&&(a.Hw(),b.style.display="block")},100));a.V(window,"resize",a.d1)});a.addEventListener("onshow",function(){a.Hw()});a.addEventListener("ondispose",function(){clearInterval(a.bX)})}); x.Sb.Mi.df(function(a){function b(){setTimeout(function(){var b=a.Gm();f=b===s?"":b.value},20)}var c,e="",f,g,i=t,k=t;a.addEventListener("onload",function(){c=this.Gm();b();a.V(window,"onload",b);a.m0=a.dY();a.V(c,"keydown",a.m0);c.setAttribute("autocomplete","off");a.zV=setInterval(function(){if(!k){x.fa(c)==s&&a.ji();var b=c.value;b==e&&""!=b&&b!=f&&b!=g?0==a.dF&&(a.dF=setTimeout(function(){a.dispatchEvent("onneeddata",b)},100)):(clearTimeout(a.dF),a.dF=0,""==b&&""!=e&&(g="",a.aa()),e=b,b!=g&&(a.bx= b),f!=c.value&&(f=""))}},10);a.V(c,"beforedeactivate",a.$U)});a.addEventListener("onitemclick",function(){k=t;a.bx=e=a.TD()});a.addEventListener("onpick",function(a){i&&c.blur();c.value=g=a.data.item.value;i&&c.focus()});a.addEventListener("onmousedownitem",function(){k=i=q;setTimeout(function(){i=k=t},500)});a.addEventListener("ondispose",function(){clearInterval(a.zV)})}); x.Sb.Mi.extend({$U:function(){return function(){mousedownView&&(window.event.cancelBubble=q,window.event.returnValue=t)}},dY:function(){var a=this;return function(b){var c=t,b=b||window.event;switch(b.keyCode){case 9:case 27:a.aa();break;case 13:x.event.stop(b);a.confirm(-1==a.cd?a.Gm().value:a.Ak[a.cd],"keyboard");break;case 38:c=q;case 40:x.event.stop(b);b=c;if(a.GA()){var c=a.Ak,e=a.cd;if(0!=c.length){if(b)switch(e){case -1:e=c.length-1;a.Ej(c[e]);a.kt(c[e]);break;case 0:e=-1;a.Ej(a.bx);a.lC(); break;default:e--,a.Ej(c[e]),a.kt(c[e])}else switch(e){case -1:e=0;a.Ej(c[e]);a.kt(c[e]);break;case c.length-1:e=-1;a.Ej(a.bx);a.lC();break;default:e++,a.Ej(c[e]),a.kt(c[e])}a.cd=e}}else a.dispatchEvent("onneeddata",a.TD());break;default:a.cd=-1}}},bx:""});ka.E6=q;var vj=t,gk=A.vd+"res/20/bmap_autocomplete.css",hk={ALL:"0",CITY:"1"}; x.extend(tf.prototype,{Fd:function(){this.Xi()},Xi:function(){this.ul=-1;this.Ka=s;this.ow=[];this.cH=0;this.ka=this.nv();this.fb.input&&(this.sS(),this.OT(),this.Dy(this.XH));var a=s;this.gj&&(a={method:"search"},a.arguments=[this.gj]);this.QH();this.xH(a)},OT:function(){var a=this,b=new x.Sb.Mi({getData:function(b){a.XI(b)},onhide:function(){a.ul=-1;""===a.tg.TD()&&(a.gj="",a.ka=a.nv())},onhighlight:function(b){if(a.Ka){var e={},f={},f={index:b.data.index,value:a.Ka.Om[b.data.index].value},e={index:a.ul, value:0<=a.ul?a.Ka.Om[a.ul].value:{}},g=new O("onhighlight");g.fromitem=g.y3=e;g.toitem=g.t6=f;a.dispatchEvent(g);a.ul=b.data.index}},onbeforepick:function(b){if(a.Ka&&"number"===typeof b.data.index){var e=a.Ka.Om[b.data.index].value;b.data.item.content=b.data.item.value=e.province+e.city+e.district+e.street+e.business}},onconfirm:function(b){if(a.Ka){Ua(5012);var e={};"number"===typeof b.data.index&&(e={index:b.data.index,value:a.Ka.Om[b.data.index].value},b=new O("onconfirm"),b.item=b.item=e,a.dispatchEvent(b))}}}); b.Ba(x.fa(this.fb.input),x.fa(this.fb.cC));this.tg=b},show:function(){this.tg&&(this.tg.oi().style.display="block")},aa:function(){this.tg&&this.tg.aa();this.ul=-1},ji:function(){this.tg&&this.tg.ji();x.lang.Ja.prototype.ji.call(this)},vF:function(a){this.fb.types=a||[];this.QH()},gn:function(a,b){this.nd.src=a;this.xH(b)},search:function(a){this.XI(a)},Dy:function(a){this.tg&&this.tg.Ej(a)},XI:function(a){var b=this,c=(1E5*Math.random()).toFixed(0);A._rd["_cbk"+c]=function(a){x.fa(b.fb.input)!== s&&b.RR(a);delete A._rd["_cbk"+c]};var e=A.url.proto+A.url.domain.baidumap+"/su?wd="+encodeURIComponent(a)+"&callback=BMap._rd._cbk"+c+"&cid="+b.cH+"&type="+b.ow+"&t="+(new Date).getTime()+"&from=jsapi&ak="+ra;b.gj=a;b.ul=-1;b.ka=this.nv();Ua(5010,{tp:b.ow,wd:encodeURIComponent(a)});A.alog("cus.fire","count","z_sug");sa(e)},RR:function(a){a&&a.q&&(this.gj=a.q);this.mU(this.ER(a));this.ka=this.nv(this.Ka);this.fb.Nt(this.ka)},ER:function(a){var b=[],c=a.s,e={};e.Db=a.q||"";e.count=a.s.length||0;e.status= 0>a.e?7:0;e.Om=[];var f=0,g=c.length;for(K()&&6<g&&(g=6);f<g;f++){var i=this.bS(c[f],this.ow);e.Om.push(i.value);b.push(i.aM)}this.Ka=e;return{data:b,P6:a.q}},mU:function(a){if(this.tg){var b=this.tg;b.show(a.word,a.data);1>a.data.length&&b.aa()}},bS:function(a,b){switch(b.toString()){case "1":return this.cS(a);default:return this.dS(a)}},dS:function(a){var a=a.split("$"),b=this.gj,c=RegExp(b,"g"),e="<b>"+b+"</b>",f={province:"",city:a[0],district:a[1],street:a[2],streetNumber:"",business:a[3]},g= "";7<=a.length&&(f.city=a[5]||f.city,f.district=a[6]||f.city,a[0]=a[5],a[1]=a[6]);for(var i=3;0<=i;i--)if(g=a[i]+g,-1<g.indexOf(b)){for(var b=i-1,k="";-1<b;)k=a[b]+k,b--;g=g.replace(c,e);k&&(g+=\'&nbsp;<span class="tangram-suggestion-grey">\'+k+"</span>");break}if(!k)for(i=3;0<=i;i--)k+=a[i];return{value:{value:f},aM:g}},cS:function(a){var b=a.split("$"),c=this.gj,a={province:b[0],city:b[1],district:"",street:"",streetNumber:"",business:""},b=(b[0]+b[1]).replace(RegExp(c,"g"),"<b>"+c+"</b>");return{value:{value:a}, aM:b}},QH:function(){var a=this.fb.types,b=[];if(x.Fg(a))b.push(hk[a.toUpperCase()]);else if(x.lang.isArray(a))for(var c=0,e=a.length;c<e;c++)b.push(hk[a[c].toUpperCase()]);this.ow=0<b.length?b.join(","):"0"},xH:function(a){var b=this;b.ig(b.nd,function(c){b.cH=c;a&&b[a.method].apply(b,a.arguments)})},sS:function(){if(!vj){var a=document,b=a.createElement("link");b.setAttribute("rel","stylesheet");b.setAttribute("type","text/css");b.setAttribute("href",gk);var c=a.getElementsByTagName("head");c.length? c[0].appendChild(b):a.documentElement.appendChild(b);vj=q}},nv:function(a){if(!a)return new ik({Db:this.gj,total:0,Uk:[]});for(var b=[],c=0,e=a.Om.length;c<e;c++)b.push(a.Om[c].value);return new ik({Db:a.Db,total:a.count,Uk:b})}});U(Yg,{show:Yg.show,hide:Yg.aa,setTypes:Yg.vF,setLocation:Yg.gn,search:Yg.search,setInputValue:Yg.Dy,dispose:Yg.ji,setSearchCompleteCallback:Yg.fu});function ik(a){this.keyword=a.Db||"";this.YA=a.total||0;this.Cr=a.Uk&&a.Uk.slice(0)||[]}x.extend(ik.prototype,{Jk:function(a){if(this.Cr[a])return this.Cr[a]},bt:u("YA"),toString:fa("AutocompleteResult")});var jk=ik.prototype;U(jk,{getPoi:jk.Jk,getNumPois:jk.bt}); ');
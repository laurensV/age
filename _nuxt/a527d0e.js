(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{198:function(t,e,n){var r=n(2),o=n(204),h=n(102);r({target:"Array",proto:!0},{fill:o}),h("fill")},199:function(t,e,n){var content=n(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("6bfcac0a",content,!0,{sourceMap:!1})},200:function(t,e,n){var content=n(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("5991b3cc",content,!0,{sourceMap:!1})},201:function(t,e,n){"use strict";n.r(e);n(198),n(49);var r=[],o=["rgba(101, 162, 164,0.9)","rgba(157, 193, 189,0.9)","rgba(113, 158, 151,0.9)","rgba(90, 142, 149,0.9)","rgba(174, 192, 186,0.9)"];function h(){var canvas=document.getElementById("dots");canvas.getContext("2d");r=[];for(var i=0;i<30;i++){for(var t=Math.floor(Math.random()*(o.length-1+1))+1,e=Math.floor(Math.random()*(canvas.width-0+1))+0,n=Math.floor(Math.random()*(canvas.height-0+1))+0,h=Math.floor(10*Math.random())+1,f=(Math.floor(3*Math.random())+-1)/10,c=(Math.floor(3*Math.random())+-1)/10,d=d;0==f||0==c;)f=(Math.floor(3*Math.random())+-1)/10,c=(Math.floor(3*Math.random())+-1)/10;var circle={color:t,left:e,top:n,size:h,leftSpeed:f,topSpeed:c,expandState:d};r.push(circle)}}function animate(){var canvas=document.getElementById("dots");canvas.getContext("2d").clearRect(0,0,canvas.width,canvas.height),function(){for(var canvas=document.getElementById("dots"),t=canvas.getContext("2d"),e=0;e<r.length;e++){var n=r[e];t.fillStyle=o[n.color-1],t.beginPath(),n.left>canvas.width+n.size?(n.left=0-n.size,t.arc(n.left,n.top,n.size,0,2*Math.PI,!1)):n.left<0-n.size?(n.left=canvas.width+n.size,t.arc(n.left,n.top,n.size,0,2*Math.PI,!1)):(n.left=n.left+n.leftSpeed,t.arc(n.left,n.top,n.size,0,2*Math.PI,!1)),n.top>canvas.height+n.size?(n.top=0-n.size,t.arc(n.left,n.top,n.size,0,2*Math.PI,!1)):n.top<0-n.size?(n.top=canvas.height+n.size,t.arc(n.left,n.top,n.size,0,2*Math.PI,!1)):(n.top=n.top+n.topSpeed,10!=n.size&&1!=n.size&&0==n.expandState?n.size=n.size-.1:10!=n.size&&1!=n.size&&1==n.expandState?n.size=n.size+.1:10==n.size&&1==n.expandState?(n.expandState=!1,n.size=n.size-.1):1==n.size&&0==n.expandState&&(n.expandState=!0,n.size=n.size+.1),t.arc(n.left,n.top,n.size,0,2*Math.PI,!1)),t.closePath(),t.fill(),t.ellipse}}(),requestAnimFrame((function(){animate()}))}window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};var f={data:function(){return{canvas:null,context:null}},props:["theme"],computed:{},mounted:function(){var t=this;this.canvas=this.$refs.dots,this.context=this.canvas.getContext("2d"),this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,o="girl"===this.theme?["rgba(255, 158, 162,0.9)","rgba(253, 203, 233,0.9)","rgba(249, 211, 130,0.9)","rgba(222, 78, 78,0.9)","rgba(247, 222, 231,0.9)"]:["rgba(101, 162, 164,0.9)","rgba(157, 193, 189,0.9)","rgba(113, 158, 151,0.9)","rgba(90, 142, 149,0.9)","rgba(174, 192, 186,0.9)"],h(),animate(),window.onresize=function(){console.log("resize"),t.canvas.width=window.innerWidth,t.canvas.height=window.innerHeight,h()}},beforeDestroy:function(){}},c=(n(205),n(28)),component=Object(c.a)(f,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{ref:"dots",attrs:{id:"dots"}})}),[],!1,null,"6192a1d9",null);e.default=component.exports},202:function(t,e,n){"use strict";n.r(e);n(198),n(66);var r=n(103),o=n(104);function h(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,h=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return h=t.done,t},e:function(t){c=!0,o=t},f:function(){try{h||null==n.return||n.return()}finally{if(c)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var canvas,c,d,l=2*Math.PI,m=function(t,e){return Math.random()*(e-t+1)+t|0},v=function(t){return(new Date).getTime()},w=function(){function t(){Object(r.a)(this,t),this.resize(),this.fireworks=[],this.counter=0}return Object(o.a)(t,[{key:"resize",value:function(){this.width=canvas.width=window.innerWidth;var t=this.width/2|0;this.spawnA=t-t/4|0,this.spawnB=t+t/4|0,this.height=canvas.height=window.innerHeight,this.spawnC=.1*this.height,this.spawnD=.5*this.height}},{key:"onClick",value:function(t){for(var e=t.clientX||t.touches&&t.touches[0].pageX,n=t.clientY||t.touches&&t.touches[0].pageY,r=m(3,5),i=0;i<r;i++)this.fireworks.push(new y(m(this.spawnA,this.spawnB),this.height,e,n,m(0,260),m(30,110)));this.counter=-1}},{key:"update",value:function(t){c.globalCompositeOperation="hard-light",c.fillStyle="rgba(20,20,20,".concat(7*t,")"),c.fillRect(0,0,this.width,this.height),c.globalCompositeOperation="lighter";var e,n=h(this.fireworks);try{for(n.s();!(e=n.n()).done;){e.value.update(t)}}catch(t){n.e(t)}finally{n.f()}this.counter+=3*t,this.counter>=1&&(this.fireworks.push(new y(m(this.spawnA,this.spawnB),this.height,m(0,this.width),m(this.spawnC,this.spawnD),m(0,360),m(30,110))),this.counter=0),this.fireworks.length>1e3&&(this.fireworks=this.fireworks.filter((function(t){return!t.dead})))}}]),t}(),y=function(){function t(e,n,o,h,f,c){Object(r.a)(this,t),this.dead=!1,this.offsprings=c,this.x=e,this.y=n,this.targetX=o,this.targetY=h,this.shade=f,this.history=[]}return Object(o.a)(t,[{key:"update",value:function(e){if(!this.dead){var n=this.targetX-this.x,r=this.targetY-this.y;if(Math.abs(n)>3||Math.abs(r)>3)this.x+=2*n*e,this.y+=2*r*e,this.history.push({x:this.x,y:this.y}),this.history.length>20&&this.history.shift();else{if(this.offsprings&&!this.madeChilds)for(var o=this.offsprings/2,i=0;i<o;i++){var h=this.x+this.offsprings*Math.cos(l*i/o)|0,f=this.y+this.offsprings*Math.sin(l*i/o)|0;d.fireworks.push(new t(this.x,this.y,h,f,this.shade,0))}this.madeChilds=!0,this.history.shift()}if(0===this.history.length)this.dead=!0;else if(this.offsprings)for(var m=0;this.history.length>m;m++){var v=this.history[m];c.beginPath(),c.fillStyle="hsl("+this.shade+",100%,"+m+"%)",c.arc(v.x,v.y,1,0,l,!1),c.fill()}else c.beginPath(),c.fillStyle="hsl("+this.shade+",100%,50%)",c.arc(this.x,this.y,1,0,l,!1),c.fill()}}}]),t}(),x=null,_={data:function(){return{}},computed:{},mounted:function(){canvas=this.$refs.fireworks,c=canvas.getContext("2d");var t=v();d=new w,window.onresize=function(){return d.resize()},document.onclick=function(t){return d.onClick(t)},document.ontouchstart=function(t){return d.onClick(t)},function e(){x=requestAnimationFrame(e);var n=v(),r=n-t;t=n,d.update(r/1e3)}()},beforeDestroy:function(){x&&(window.cancelAnimationFrame(x),x=void 0)}},z=(n(207),n(28)),component=Object(z.a)(_,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{ref:"fireworks",attrs:{id:"fireworks"}})}),[],!1,null,"7c5f799d",null);e.default=component.exports},203:function(t,e,n){t.exports=n.p+"img/fireworks.65ece3e.svg"},204:function(t,e,n){"use strict";var r=n(17),o=n(65),h=n(8);t.exports=function(t){for(var e=r(this),n=h(e.length),f=arguments.length,c=o(f>1?arguments[1]:void 0,n),d=f>2?arguments[2]:void 0,l=void 0===d?n:o(d,n);l>c;)e[c++]=t;return e}},205:function(t,e,n){"use strict";n(199)},206:function(t,e,n){(e=n(63)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Patrick+Hand);"]),e.push([t.i,"#dots[data-v-6192a1d9]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1}",""]),t.exports=e},207:function(t,e,n){"use strict";n(200)},208:function(t,e,n){(e=n(63)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Patrick+Hand);"]),e.push([t.i,"#fireworks[data-v-7c5f799d]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1}",""]),t.exports=e},210:function(t,e,n){var content=n(216);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("2a0ba83e",content,!0,{sourceMap:!1})},214:function(t,e,n){t.exports=n.p+"img/elephant.4240b35.png"},215:function(t,e,n){"use strict";n(210)},216:function(t,e,n){(e=n(63)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Patrick+Hand);"]),e.push([t.i,"#content[data-v-6ffc35ab]{color:#65a2a4}.sibling[data-v-6ffc35ab]{color:#fb6368;position:fixed;bottom:5px;font-size:20px;right:5px;padding:3px}.age[data-v-6ffc35ab]{font-size:30px}.trigger-fireworks[data-v-6ffc35ab]{position:fixed;bottom:5px;left:5px;padding:3px;cursor:pointer}.congrats[data-v-6ffc35ab]{font-size:50px;margin:0;padding:0;color:red}",""]),t.exports=e},218:function(t,e,n){"use strict";n.r(e);n(67),n(49);var r=n(201),o=n(202),h={components:{Dots:r.default,Fireworks:o.default},data:function(){return{name:"<Your Name>",dateOfBirth:this.$moment("2019-10-07"),timer:null,fireworks:!1}},computed:{age:function(){var t=this.$moment(),e=t.diff(this.dateOfBirth,"year");this.dateOfBirth.add(e,"years");var n=t.diff(this.dateOfBirth,"months");this.dateOfBirth.add(n,"months");var r=t.diff(this.dateOfBirth,"days");this.dateOfBirth.add(r,"days");var o=t.diff(this.dateOfBirth,"hours");this.dateOfBirth.add(o,"hours");var h=t.diff(this.dateOfBirth,"minutes");return this.dateOfBirth.add(h,"minutes"),{years:e,months:n,days:r,hours:o,minutes:h,seconds:t.diff(this.dateOfBirth,"seconds")}},birthday:function(){return 0===this.age.months&&0===this.age.days}},created:function(){var t=this;this.timer=setInterval((function(){t.dateOfBirth=t.$moment("2019-10-07")}),1e3)},head:function(){return{title:this.name,link:[{rel:"icon",hid:"icon",type:"image/x-icon",href:"favicon-elephant.ico"}]}},beforeDestroy:function(){clearInterval(this.timer)}},f=(n(215),n(28)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.birthday||t.fireworks?r("fireworks"):r("dots",{attrs:{theme:"boy"}}),t._v(" "),r("div",{staticClass:"container",attrs:{id:"content"}},[r("img",{attrs:{src:n(214),width:"250px"}}),t._v(" "),r("h1",{staticClass:"name"},[t._v(t._s(t.name))]),t._v(" "),t.birthday||t.fireworks?r("div",{staticClass:"congrats"},[t._v("Congratulations!")]):t._e(),t._v(" "),t.age?r("div",{staticClass:"age"},[t.age.years>0?r("h2",{staticClass:"years"},[t._v(t._s(t.age.years)+"  year"),t.age.years>1?r("span",[t._v("s")]):t._e()]):t._e(),t._v(" "),r("div",[t.age.months>0?r("span",{staticClass:"months"},[t._v(t._s(t.age.months)+"  month"),t.age.months>1?r("span",[t._v("s")]):t._e()]):t._e(),t._v(" "),t.age.months>0&&t.age.days>1?r("span",[t._v(" and ")]):t._e(),t._v(" "),t.age.days>0?r("span",{staticClass:"days"},[t._v(t._s(t.age.days)+"  day"),t.age.days>1?r("span",[t._v("s")]):t._e()]):t._e(),t._v(" "),r("span",[t._v(" old")])]),t._v(" "),t._e()]):t._e(),t._v(" "),r("img",{staticClass:"icon trigger-fireworks",attrs:{src:n(203)},on:{click:function(e){t.fireworks=!t.fireworks}}}),t._v(" "),r("nuxt-link",{staticClass:"sibling",attrs:{to:"/girl"}},[t._v("Girl Version")])],1)],1)}),[],!1,null,"6ffc35ab",null);e.default=component.exports;installComponents(component,{Fireworks:n(202).default,Dots:n(201).default})}}]);
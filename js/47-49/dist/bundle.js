!function(t){var e={};function s(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(i,o,function(e){return t[e]}.bind(null,o));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}({0:function(t,e,s){"use strict";s.r(e);const i=2e3,o=500,n=[{name:"糖醋排骨",cost:20,price:50,time:2e3},{name:"醋溜山药",cost:10,price:30,time:4e3},{name:"茄子烧豆角",cost:10,price:30,time:1e3},{name:"香辣小龙虾",cost:80,price:160,time:6e3},{name:"鱿鱼炖排骨",cost:30,price:60,time:5e3},{name:"猪肉粽子",cost:20,price:40,time:3e3},{name:"香菜拌豆干",cost:5,price:20,time:2e3},{name:"榴莲班戟",cost:30,price:80,time:5e3}];function r(t,e){return new Promise((s,i)=>{setTimeout(()=>{s(e)},t)})}class h{constructor(t){this.left=t.left,this.top=t.top,this.img=t.img,this.class=t.class,this.box=null,this.text=null,this.createBox()}createBox(){let t=document.createElement("div");t.className=this.class,this.text=document.createElement("p"),t.appendChild(this.text),t.appendChild(this.img),document.getElementById("app").appendChild(t),t.style=`left:${this.left}px; top:${this.top}px;`,this.box=t}moveTo(t,e){this.box.style=`left:${t}px; top:${e}px;`}setText(t){this.text.innerHTML="",Array.isArray(t)?t.map(t=>{let e=t.eatState,s=t.cookState;switch(this.class){case"cook":s="object"==typeof s?"待做":0===s?"做好了":"还剩"+s+"s做好",this.text.innerHTML+=`${t.name}: ${s} <br />`;break;case"customer":e="object"==typeof e?"还没上":0===e?"吃完了":"还剩"+e+"s吃完",this.text.innerHTML+=`${t.name}: ${e} <br />`}}):this.text.innerHTML=t}}class a{constructor(t){this.name=t.name,this.profit=t.price-t.cost,this.eatState=null,this.cookState=null,this.time=t.time,this.startEat=this.startEat.bind(this)}startCooking(t){return this.cookState=t/1e3,r(t,setInterval(()=>{this.cookState--},1e3))}startEat(){this.eatState=i/1e3;let t=setInterval(()=>{this.eatState--},1e3);return r(i,t)}}class c{constructor(t){if(new.target===c)throw new Error("本类不能实例化");this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height}}class l extends c{constructor(t){if(super(t),new.target===l)throw new Error("本类不能实例化");this.next=null}setNext(t){this.next=t}handleRequest(){}}class u extends l{constructor(t){super(t),this.name=t.name,this.foodList=[],this.cash=null,this.order=this.order.bind(this),this.eat=this.eat.bind(this),this.draw(),this.node=null,this.timer=null}async order(){let t=this.node.setText.bind(this.node);t("小二请上菜");let e=this.next.waiter;e.node.moveTo(this.x-100,this.y),r(900).then(()=>{e.node.setText("欢迎光临，请问您需要点什么～")});let s=d(4)+1;for(;s;){let t=d(n.length),e=new a(n[t]);this.foodList.push(e),this.cash+=e.profit,s--}await r(3e3,this.foodList).then(s=>{t(s),clearInterval(this.timer),this.timer=setInterval(()=>{t(s)},1e3),e.toCook(s)})}eat(t){let e=this.checkEatEnd.bind(this);t.startEat().then(t=>{clearInterval(t),e()})}checkEatEnd(){if(this.foodList.every(t=>0===t.eatState)){clearInterval(this.timer);let t=this.node;t.setText("真棒！下次还来 <br /> $"+this.cash),r(1e3).then(()=>{document.getElementById("app").removeChild(t.box),this.next.restaurant.settle(this.cash)})}}draw(){let t=new Image(this.width,this.height);t.src="../src/image/customer.jpeg",t.onload=(()=>{let e=new h({left:this.x,top:this.y,img:t,class:"customer"});this.node=e})}}function d(t){return Math.floor(Math.random()*(t-1))}class m extends l{constructor(t){if(super(t),new.target===m)throw new Error("本类不能实例化");this.id=t.id,this.name=t.name,this.wage=t.wage}work(){console.log("请分配工作！")}}s(5);const p=new class{constructor(t){this.cash=t.cash,this.seats=t.seats,this.customerQueue=[],this.waiterQueue=[],this.cookQueue=[],this.settle=this.settle.bind(this),document.getElementById("cash").innerHTML="$"+this.cash}hire(t,e){switch(t){case"Cook":this.cookQueue.push(new class extends m{constructor(t){super(t),this.cooking=this.cooking.bind(this),this.draw(),this.node=null,this.timer=null}async cooking(t){let e=t.length,s=this.node.setText.bind(this.node);clearInterval(this.timer),this.timer=setInterval(()=>{s(t)});for(let s=0;s<e;s++){let e=t[s];e.startCooking(e.time).then(clearInterval),await r(e.time,e).then(this.next.toCustomer)}}draw(){let t=new Image(this.width,this.height);t.src="../src/image/cook.jpeg",t.onload=(()=>{let e=new h({left:this.x,top:this.y,img:t,class:"cook"});this.node=e})}}(e));break;case"Waiter":this.waiterQueue.push(new class extends m{constructor(t){super(t),this.toCook=this.toCook.bind(this),this.toCustomer=this.toCustomer.bind(this),this.draw(),this.node=null}async toCook(t){let e=this.next.cook;this.node.setText("请稍等"),this.node.moveTo(e.x+100,e.y),await r(o,t).then(e.cooking)}async toCustomer(t){let e=this.next.customer,s=this.next.cook,i=this.node.setText.bind(this.node);i(t.name+"做好了"),this.node.moveTo(e.x-100,e.y),r(1e3).then(()=>{i(""),this.node.moveTo(s.x+100,s.y)}),await r(o,t).then(e.eat)}draw(){let t=new Image(this.width,this.height);t.src="../src/image/waiter.jpg",t.onload=(()=>{let e=new h({left:this.x,top:this.y,img:t,class:"waiter"});this.node=e})}}(e))}}fire(t){this.staff.map((e,s)=>{e.id===t.id&&this.staff.splice(s,1)})}setCustomerQueue(t){this.customerQueue.push(t)}settle(t){this.cash+=t,document.getElementById("cash").innerHTML="$"+this.cash,this.customerQueue.map(t=>{t.y-=120,t.node.moveTo(t.x,t.y)}),this.next()}next(){let t=this.waiterQueue[0],e=this.cookQueue[0],s=this.customerQueue.shift();s&&t&&e&&(s.setNext({restaurant:this,waiter:t}),t.setNext({cook:e,customer:s}),e.setNext(t),s.order())}}({cash:1e6,seats:1,staff:[]});p.hire("Cook",{id:1,name:"cook",wage:1e4,x:200,y:200,width:100,height:100}),p.hire("Waiter",{id:2,name:"waiter",wage:8e3,x:600,y:200,width:100,height:100});for(let t=0;t<6;t++)p.setCustomerQueue(new u({name:"客人"+(t+1),x:1200,y:200+120*t,width:100,height:100}));document.getElementById("open").onclick=(()=>{p.next()})},5:function(t,e){}});
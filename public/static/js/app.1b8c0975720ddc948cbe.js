webpackJsonp([1],{27:function(t,i,n){function e(t){n(73)}var r=n(74)(n(35),n(75),e,null,null);t.exports=r.exports},29:function(t,i,n){"use strict";n.d(i,"b",function(){return o}),n.d(i,"a",function(){return u}),n.d(i,"c",function(){return h});var e=n(16),r=n.n(e),s=n(2),a=n.n(s),o={id:"conrad",src:"conrad.png"},u={standing:"standing",walking:"walking",turning:"turning"},c=function(t){var i;return new a.a.SpriteSheet({framerate:30,images:t,frames:{x:0,y:0,width:88,height:156},animations:(i={},r()(i,u.standing,{frames:[0]}),r()(i,u.walking,[1,12,u.walking,.2]),r()(i,u.turning,[13,22,u.walking,.2]),i)})},h=function(t,i){return new a.a.Sprite(c(t),i)}},30:function(t,i,n){"use strict";var e,r=n(37),s=n.n(r),a=n(16),o=n.n(a),u=n(29),c=n(31),h=u.a;i.a={manifest:u.b,sprite:null,lastFrame:-1,currentFrame:function(){return this.sprite.currentAnimationFrame},movement:0,isLeft:function(){return-1===this.sprite.scaleX},isRight:function(){return!this.isLeft()},flip:function(){this.sprite.scaleX*=-1},pressingKeys:(e={},o()(e,c.a.leftArrow,!1),o()(e,c.a.rightArrow,!1),o()(e,c.a.upArrow,!1),o()(e,c.a.downArrow,!1),o()(e,c.a.spacebar,!1),o()(e,c.a.ctrl,!1),o()(e,c.a.shift,!1),o()(e,c.a.alt,!1),e),noKeys:function(){var t=!0;for(var i in this.pressingKeys)t&=!this.pressingKeys[i];return t},mustWalk:function(){return(this.pressingKeys[c.a.leftArrow]&&this.isLeft()||this.pressingKeys[c.a.rightArrow]&&this.isRight())&&this.isStanding()},mustStand:function(){return this.noKeys()&&this.isWalking()&&(this.atFrame(6)||this.atFrame(12))},mustTurn:function(){return(this.isLeft()&&this.pressingKeys[c.a.rightArrow]||this.isRight()&&this.pressingKeys[c.a.leftArrow])&&this.isStanding()},betweenFrames:function(t,i){return this.sprite.currentAnimationFrame>=t&&this.sprite.currentAnimationFrame<=i},atFrame:function(t){return this.betweenFrames(t-.1,t+.1)},is:function(t){return this.sprite.currentAnimation===t},isWalking:function(){return this.is(h.walking)},isStanding:function(){return this.is(h.standing)},isTurning:function(){return this.is(h.turning)},play:function(t,i){0===i&&this.printPosition(),this.movement=s()(i),this.sprite.gotoAndPlay(t),this.lastFrame=this.sprite.currentAnimationFrame},stand:function(){this.play(h.standing,0)},walk:function(){this.play(h.walking,128/60)},turn:function(){this.play(h.turning,0)},printPosition:function(){console.log("Current frame: "+this.sprite.currentAnimationFrame+", position: "+(this.sprite.x+this.sprite.getBounds().width/2))},loaded:function(t,i){var n=[t.get(u.b.id)];return this.sprite=u.c(n,h.standing),this.sprite.regX=this.sprite.getBounds().width/2,this.sprite.regY=this.sprite.getBounds().height,this.sprite.x=32,this.sprite.y=864,this},ticked:function(t){this.isWalking()&&this.lastFrame!==this.sprite.currentAnimationFrame&&(this.lastFrame=this.sprite.currentAnimationFrame,this.sprite.x+=this.movement*this.sprite.scaleX),this.mustWalk()&&this.walk(),this.mustStand()&&this.stand(),this.mustTurn()&&this.turn(),this.isTurning()&&this.atFrame(10)&&(this.flip(),this.pressingKeys[c.a.leftArrow]||this.pressingKeys[c.a.rightArrow]?this.walk():this.noKeys()&&this.stand()),this.pressingKeys[c.a.spacebar]&&(this.sprite.x=32-this.sprite.getBounds().width/2)},keyUp:function(t){this.pressingKeys[t.keyCode]=!1},keyDown:function(t){this.pressingKeys[t.keyCode]=!0}}},31:function(t,i,n){"use strict";var e={break:3,backspace:8,tab:9,clear:12,enter:13,shift:16,ctrl:17,alt:18,pause:19,capsLock:20,escape:27,conversion:28,nonConversion:29,spacebar:32,pageUp:33,pageDown:34,end:35,home:36,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40,select:41,print:42,execute:43,printScreen:44,insert:45,delete:46,n0:48,n1:49,n2:50,n3:51,n4:52,n5:53,n6:54,n7:55,n8:56,n9:57,colon:58,semicolon:59,minor:60,equals:61,beta:63,at:64,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,leftSuper:91,rightSuper:92,menu:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,numpadMultiply:106,numpadAdd:107,numpadPeriod:108,numpadSubtract:109,decimalPoint:110,numpadDivide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,f13:124,f14:125,f15:126,f16:127,f17:128,f18:129,f19:130,f20:131,f21:132,f22:133,f23:134,f24:135,numLock:144,scrollLock:145,upper:160,exclamation:161,sharp:163,dollar:164,ugrave:165,pageBackward:166,pageForward:167,closingParen:169,multiply:170,tilde:171,minus:173,decreaseVolume:174,increaseVolume:175,next:176,previous:177,stop:178,play:179,email:180,mute:181};i.a=e},32:function(t,i,n){"use strict";var e=n(36),r=n.n(e),s=n(2),a=n.n(s),o=n(71),u=(n.n(o),new a.a.LoadQueue(!1));i.a={assets:u,playground:null,loading:!0,manifest:[],stages:[],debug:{},get:function(t){return this.assets.getResult(t)},loaded:function(){var t=this;this.playground=new a.a.Stage("playground"),this.stages.filter(function(t){return void 0!==t.loaded}).forEach(function(i){return i.loaded(t,t.playground)}),a.a.Ticker.timingMode=a.a.Ticker.RAF,a.a.Ticker.addEventListener("tick",function(){return t.ticked()}),this.loading=!1},ticked:function(){var t=this;this.stages.filter(function(t){return void 0!==t.ticked}).forEach(function(i){return i.ticked(t)}),this.playground.update()},keyDown:function(t){var i=!0,n=!1,e=void 0;try{for(var s,a=r()(this.stages);!(i=(s=a.next()).done);i=!0){var o=s.value;void 0!==o.keyDown&&o.keyDown(t,this.playground)}}catch(t){n=!0,e=t}finally{try{!i&&a.return&&a.return()}finally{if(n)throw e}}},keyUp:function(t){var i=this;this.stages.filter(function(t){return void 0!==t.keyUp}).forEach(function(n){return n.keyUp(t,i.playground)})},load:function(){var t=this;this.stages.filter(function(t){return void 0!==t.beforeLoad}).forEach(function(i){return i.beforeLoad(t)}),this.assets.addEventListener("complete",function(){return t.loaded()}),this.assets.loadManifest(this.manifest,!0,"/static/"),document.onkeydown=function(i){return t.keyDown(i)},document.onkeyup=function(i){return t.keyUp(i)}}}},33:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n(28),r=n(27),s=n.n(r);e.a.config.productionTip=!1,new e.a({el:"#feedback",template:"<Feedback/>",components:{Feedback:s.a}})},34:function(t,i,n){"use strict";var e=n(2),r=n.n(e),s=n(30),a=function(t){return{id:t,src:t+".png"}},o=a("background"),u=a("entrance_front"),c=a("receptionist"),h=a("official_entrance"),d=a("tree");i.a={beforeLoad:function(t){console.log("Before the load!"),t.manifest=[o,d,c,s.a.manifest,u,h]},loaded:function(t,i){this.background=new r.a.Shape,this.background.graphics.beginBitmapFill(t.get(o.id)).drawRect(0,0,i.canvas.width,i.canvas.height),this.entranceFront=new r.a.Bitmap(t.get(u.id)),this.entranceFront.x=288-this.entranceFront.image.width,this.entranceFront.y=864-this.entranceFront.image.height,this.receptionist=new r.a.Bitmap(t.get(c.id)),this.receptionist.x=640-this.receptionist.image.width,this.receptionist.y=864-this.receptionist.image.height,this.officialEntrance=new r.a.Bitmap(t.get(h.id)),this.officialEntrance.x=1024-this.officialEntrance.image.width,this.officialEntrance.y=864-this.officialEntrance.image.height,this.tree=new r.a.Bitmap(t.get(d.id)),this.tree.x=974-this.tree.image.width,this.tree.y=864-this.tree.image.height,this.doumun=s.a.loaded(t,i),i.addChild(this.background,this.tree,this.receptionist,this.doumun.sprite,this.entranceFront,this.officialEntrance)},ticked:function(t){this.doumun.ticked(t)},keyDown:function(t,i){this.doumun.keyDown(t)},keyUp:function(t,i){this.doumun.keyUp(t)}}},35:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n(32),r=n(34),s=n(72);n.n(s);i.default={data:function(){return{playground:e.a}},mounted:function(){this.playground.stages.push(r.a),this.playground.load()},tick:function(t){if("walking"===this.bradley.currentAnimation){var i=t.delta/1e3,n=this.bradley.x+122*i,e=this.bradley.getBounds().width*this.bradley.scaleX;this.bradley.x=n>=this.width+e?-e:n}if(this.changeAnimation){var r=this.bradley.currentAnimation,s=this.bradley.currentAnimationFrame;"walking"===r&&(s>=5&&s<=6||s>=11)&&(this.bradley.gotoAndPlay("standing"),this.changeAnimation=!1)}this.playground.update()}}},72:function(t,i){},73:function(t,i){},75:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"ui segment",attrs:{id:"feedback"}},[n("div",{staticClass:"ui dimmer",class:{active:t.playground.loading}},[n("div",{staticClass:"ui huge text loader"},[t._v("Loading")])]),t._v(" "),n("canvas",{ref:"playground",attrs:{id:"playground",width:"1024",height:"896"}})])},staticRenderFns:[]}}},[33]);
//# sourceMappingURL=app.1b8c0975720ddc948cbe.js.map
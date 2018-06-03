!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},s.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=1)}([function(t,e,s){!function(e){var s,n={},i={16:!1,18:!1,17:!1,91:!1},o="all",r={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},a={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},c=function(t){return a[t]||t.toUpperCase().charCodeAt(0)},h=[];for(s=1;s<20;s++)a["f"+s]=111+s;function l(t,e){for(var s=t.length;s--;)if(t[s]===e)return s;return-1}function u(t,e){if(t.length!=e.length)return!1;for(var s=0;s<t.length;s++)if(t[s]!==e[s])return!1;return!0}var d={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"};function f(t){for(s in i)i[s]=t[d[s]]}function p(t,e,s){var i,o;i=v(t),void 0===s&&(s=e,e="all");for(var r=0;r<i.length;r++)o=[],(t=i[r].split("+")).length>1&&(o=g(t),t=[t[t.length-1]]),t=t[0],(t=c(t))in n||(n[t]=[]),n[t].push({shortcut:i[r],scope:e,method:s,key:i[r],mods:o})}for(s in r)p[s]=!1;function m(){return o||"all"}function v(t){var e;return""==(e=(t=t.replace(/\s/g,"")).split(","))[e.length-1]&&(e[e.length-2]+=","),e}function g(t){for(var e=t.slice(0,t.length-1),s=0;s<e.length;s++)e[s]=r[e[s]];return e}function M(t,e,s){t.addEventListener?t.addEventListener(e,s,!1):t.attachEvent&&t.attachEvent("on"+e,function(){s(window.event)})}M(document,"keydown",function(t){!function(t){var e,s,o,a,c,u;if(e=t.keyCode,-1==l(h,e)&&h.push(e),93!=e&&224!=e||(e=91),e in i)for(o in i[e]=!0,r)r[o]==e&&(p[o]=!0);else if(f(t),p.filter.call(this,t)&&e in n)for(u=m(),a=0;a<n[e].length;a++)if((s=n[e][a]).scope==u||"all"==s.scope){for(o in c=s.mods.length>0,i)(!i[o]&&l(s.mods,+o)>-1||i[o]&&-1==l(s.mods,+o))&&(c=!1);(0!=s.mods.length||i[16]||i[18]||i[17]||i[91])&&!c||!1===s.method(t,s)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}(t)}),M(document,"keyup",function(t){var e,s=t.keyCode,n=l(h,s);if(n>=0&&h.splice(n,1),93!=s&&224!=s||(s=91),s in i)for(e in i[s]=!1,r)r[e]==s&&(p[e]=!1)}),M(window,"focus",function(){for(s in i)i[s]=!1;for(s in r)p[s]=!1});var D=e.key;e.key=p,e.key.setScope=function(t){o=t||"all"},e.key.getScope=m,e.key.deleteScope=function(t){var e,s,i;for(e in n)for(s=n[e],i=0;i<s.length;)s[i].scope===t?s.splice(i,1):i++},e.key.filter=function(t){var e=(t.target||t.srcElement).tagName;return!("INPUT"==e||"SELECT"==e||"TEXTAREA"==e)},e.key.isPressed=function(t){return"string"==typeof t&&(t=c(t)),-1!=l(h,t)},e.key.getPressedKeyCodes=function(){return h.slice(0)},e.key.noConflict=function(){var t=e.key;return e.key=D,t},e.key.unbind=function(t,e){var s,i,o,r,a,h=[];for(s=v(t),r=0;r<s.length;r++){if((i=s[r].split("+")).length>1&&(h=g(i)),t=i[i.length-1],t=c(t),void 0===e&&(e=m()),!n[t])return;for(o=0;o<n[t].length;o++)(a=n[t][o]).scope===e&&u(a.mods,h)&&(n[t][o]={})}},t.exports=p}(this)},function(t,e,s){"use strict";s.r(e);const n={objDistance(t,e){const s=Math.pow(t.pos[0]-e.pos[0],2),n=Math.pow(t.pos[1]-e.pos[1],2);return Math.sqrt(s+n)},normalize(t){const e=this.distance([0,0],t);return e<=0?[0,0]:[t[0]/e,t[1]/e]},distance:(t,e)=>Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)),norm(t){if(0===t[0]&&0===t[1])return[0,0];const e=n.distance([0,0],t);return[t[0]/e,t[1]/e]},length:t=>Math.sqrt(t[0]*t[0]+(t[1]+t[1])),randomVec(t){const e=2*Math.PI*Math.random();return n.scale([Math.sin(e),Math.cos(e)],t)},scale:(t,e)=>[t[0]*e,t[1]*e]};var i=n;const o=1e3/60;var r=class{constructor(t){this.pos=t.pos,this.vel=t.vel,this.radius=t.radius,this.color=t.color,this.game=t.game,this.Wraps=!0}collideWith(t){}isCollidedWith(t){const e=this.radius+t.radius;return i.objDistance(this,t)<e}move(t){this.game.wrapPos(this.pos),this.pos[0]+=this.vel[0],this.pos[1]+=this.vel[1]}move(t){const e=t/o,s=this.vel[0]*e,n=this.vel[1]*e;this.game.wrapPos(this.pos),this.pos=[this.pos[0]+s,this.pos[1]+n]}render(t){t.fillStyle=this.color,t.beginPath(),t.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI,!1),t.fill()}};class a extends r{constructor(t){super(t),this.color=a.COLOR,this.radius=a.RADIUS,this.Wraps=!1}collideWith(t){t instanceof d&&(this.game.remove(t),this.game.remove(this))}}a.SPEED=10,a.COLOR="#251351",a.RADIUS=40;var c=a;const h={COLOR:"#251351",RADIUS:10,VELOCITY:[0,0]};var l=class extends r{constructor(t={}){super(t),this.color=h.COLOR,this.radius=h.RADIUS,this.vel=h.VELOCITY}fireBullet(){const t=i.norm(this.vel),e=i.scale(t,c.SPEED),s=[this.vel[0]+e[0],this.vel[1]+e[1]],n=new c({vel:s,pos:this.pos,game:this.game});this.game.add(n)}power(t){this.vel[0]+=t[0],this.vel[1]+=t[1]}respawn(){this.pos=this.game.center(),this.vel=[0,0]}};const u={COLOR:"#7D2E68",RADIUS:30,SPEED:8};var d=class extends r{constructor(t={}){super(t),this.color=u.COLOR,this.radius=u.RADIUS,this.vel=t.vel||i.randomVec(u.SPEED)}collideWith(t){t instanceof l&&t.respawn()}};class f{constructor(){this.asteroids=[],this.bullets=[],this.ships=[],this.addAsteroids()}add(t){if(t instanceof l)this.ships.push(t);else if(t instanceof d)this.asteroids.push(t);else{if(!(t instanceof c))throw new Error("unknown object");this.bullets.push(t)}}addAsteroids(){for(;this.asteroids.length<f.NUM_ASTEROIDS;){let t=new d({pos:this.randomPos(),game:this});this.add(t)}}addShips(){const t=new l({pos:this.center(),game:this});return this.add(t),t}allGameObjects(){return[].concat(this.asteroids,this.ships,this.bullets)}center(){return[f.DIM_X/2,f.DIM_Y/2]}checkCollisions(){const t=this.allGameObjects();for(let e=0;e<t.length;e++)for(let s=0;s<t.length;s++){if(e===s)continue;let n=t[e],i=t[s];if(n.isCollidedWith(i)){if(n.collideWith(i))return}}}draw(t){t.clearRect(0,0,f.DIM_X,f.DIM_Y),this.allGameObjects().forEach(e=>e.render(t))}moveObjects(t){this.allGameObjects().forEach(e=>{e.move(t)})}randomPos(){return[Math.floor(Math.random()*(f.DIM_X+1)),Math.floor(Math.random()*(f.DIM_Y+1))]}remove(t){if(t instanceof d){const e=this.asteroids.indexOf(t);-1!==e&&this.asteroids.splice(e,1)}else if(t instanceof c){const e=this.bullets.indexOf(t);-1!==e&&this.bullets.splice(e,1)}else if(t instanceof l){const e=this.ships.indexOf(t);-1!==e&&this.ships.splice(e,1)}}step(t){this.moveObjects(t),this.checkCollisions()}wrapPos(t){t[0]<0?t[0]=f.DIM_X:t[0]>f.DIM_X&&(t[0]=t[0]%f.DIM_X),t[1]<0?t[1]=f.DIM_Y:t[1]>f.DIM_Y&&(t[1]=t[1]%f.DIM_Y)}}f.DIM_X=1e3,f.DIM_Y=600,f.NUM_ASTEROIDS=2;var p=f,m=s(0),v=s.n(m);class g{constructor(t,e){this.game=t,this.ctx=e,this.ship=this.game.addShips()}bindKeyHandlers(){const t=this.ship;Object.keys(g.MOVES).forEach(e=>{const s=g.MOVES[e];v()(e,()=>{t.power(s)})}),v()("space",()=>{t.fireBullet()})}start(){this.bindKeyHandlers(),this.lastTime=0,requestAnimationFrame(this.animate.bind(this))}animate(t){const e=t-this.lastTime;this.game.step(e),this.game.draw(this.ctx),this.lastTime=t,requestAnimationFrame(this.animate.bind(this))}}g.MOVES={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]};var M=g;document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("canvas"),e=t.getContext("2d");t.width=p.DIM_X,t.height=p.DIM_Y;const s=new p;new M(s,e).start()})}]);
//# sourceMappingURL=bundle.js.map
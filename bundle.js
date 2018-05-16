!function(t){var e={};function s(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},s.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=1)}([function(t,e,s){!function(e){var s,n={},o={16:!1,18:!1,17:!1,91:!1},r="all",i={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},a={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},c=function(t){return a[t]||t.toUpperCase().charCodeAt(0)},l=[];for(s=1;s<20;s++)a["f"+s]=111+s;function h(t,e){for(var s=t.length;s--;)if(t[s]===e)return s;return-1}function u(t,e){if(t.length!=e.length)return!1;for(var s=0;s<t.length;s++)if(t[s]!==e[s])return!1;return!0}var d={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"};function f(t){for(s in o)o[s]=t[d[s]]}function p(t,e,s){var o,r;o=g(t),void 0===s&&(s=e,e="all");for(var i=0;i<o.length;i++)r=[],(t=o[i].split("+")).length>1&&(r=m(t),t=[t[t.length-1]]),t=t[0],(t=c(t))in n||(n[t]=[]),n[t].push({shortcut:o[i],scope:e,method:s,key:o[i],mods:r})}for(s in i)p[s]=!1;function v(){return r||"all"}function g(t){var e;return""==(e=(t=t.replace(/\s/g,"")).split(","))[e.length-1]&&(e[e.length-2]+=","),e}function m(t){for(var e=t.slice(0,t.length-1),s=0;s<e.length;s++)e[s]=i[e[s]];return e}function M(t,e,s){t.addEventListener?t.addEventListener(e,s,!1):t.attachEvent&&t.attachEvent("on"+e,function(){s(window.event)})}M(document,"keydown",function(t){!function(t){var e,s,r,a,c,u;if(e=t.keyCode,-1==h(l,e)&&l.push(e),93!=e&&224!=e||(e=91),e in o)for(r in o[e]=!0,i)i[r]==e&&(p[r]=!0);else if(f(t),p.filter.call(this,t)&&e in n)for(u=v(),a=0;a<n[e].length;a++)if((s=n[e][a]).scope==u||"all"==s.scope){for(r in c=s.mods.length>0,o)(!o[r]&&h(s.mods,+r)>-1||o[r]&&-1==h(s.mods,+r))&&(c=!1);(0!=s.mods.length||o[16]||o[18]||o[17]||o[91])&&!c||!1===s.method(t,s)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}(t)}),M(document,"keyup",function(t){var e,s=t.keyCode,n=h(l,s);if(n>=0&&l.splice(n,1),93!=s&&224!=s||(s=91),s in o)for(e in o[s]=!1,i)i[e]==s&&(p[e]=!1)}),M(window,"focus",function(){for(s in o)o[s]=!1;for(s in i)p[s]=!1});var O=e.key;e.key=p,e.key.setScope=function(t){r=t||"all"},e.key.getScope=v,e.key.deleteScope=function(t){var e,s,o;for(e in n)for(s=n[e],o=0;o<s.length;)s[o].scope===t?s.splice(o,1):o++},e.key.filter=function(t){var e=(t.target||t.srcElement).tagName;return!("INPUT"==e||"SELECT"==e||"TEXTAREA"==e)},e.key.isPressed=function(t){return"string"==typeof t&&(t=c(t)),-1!=h(l,t)},e.key.getPressedKeyCodes=function(){return l.slice(0)},e.key.noConflict=function(){var t=e.key;return e.key=O,t},e.key.unbind=function(t,e){var s,o,r,i,a,l=[];for(s=g(t),i=0;i<s.length;i++){if((o=s[i].split("+")).length>1&&(l=m(o)),t=o[o.length-1],t=c(t),void 0===e&&(e=v()),!n[t])return;for(r=0;r<n[t].length;r++)(a=n[t][r]).scope===e&&u(a.mods,l)&&(n[t][r]={})}},t.exports=p}(this)},function(t,e,s){"use strict";s.r(e);const n={objDistance(t,e){const s=Math.pow(t.pos[0]-e.pos[0],2),n=Math.pow(t.pos[1]-e.pos[1],2);return Math.sqrt(s+n)},normalize(t){const e=this.distance([0,0],t);return e<=0?[0,0]:[t[0]/e,t[1]/e]},length:t=>Math.sqrt(t[0]*t[0]+(t[1]+t[1])),randomVec(t){const e=2*Math.PI*Math.random();return n.scale([Math.sin(e),Math.cos(e)],t)},scale:(t,e)=>[t[0]*e,t[1]*e]};var o=n;var r=class{constructor(t){this.pos=t.pos,this.vel=t.vel,this.radius=t.radius,this.color=t.color,this.game=t.game}isCollidedWith(t){const e=this.radius+t.radius;return o.objDistance(this,t)<e}collideWith(t){}render(t){t.fillStyle=this.color,t.beginPath(),t.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI,!1),t.fill()}move(t){this.game.wrapPos(this.pos),this.pos[0]+=this.vel[0],this.pos[1]+=this.vel[1]}};const i={COLOR:"#251351",RADIUS:3,SPEED:10};var a=class extends r{constructor(t){super(t),this.color=i.COLOR,this.radius=i.RADIUS}};const c={COLOR:"#251351",RADIUS:10,VELOCITY:[0,0]};var l=class extends r{constructor(t={}){super(t),this.color=c.COLOR,this.radius=c.RADIUS,this.vel=c.VELOCITY}fireBullet(){const t=o.norm(this.vel);console.log(t),new a({vel:this.vel,pos:this.pos})}power(t){this.vel[0]+=t[0],this.vel[1]+=t[1]}respawn(){this.pos=this.game.center(),this.vel=[0,0]}};const h={COLOR:"#7D2E68",RADIUS:30,SPEED:8};var u=class extends r{constructor(t={}){super(t),this.color=h.COLOR,this.radius=h.RADIUS,this.vel=t.vel||o.randomVec(h.SPEED)}collideWith(t){t instanceof l&&t.respawn()}};class d{constructor(){this.asteroids=[],this.ships=[],this.bullets=[],this.addAsteroids()}addAsteroids(){for(;this.asteroids.length<d.NUM_ASTEROIDS;){let t=new u({pos:this.randomPos(),game:this});this.asteroids.push(t)}}addShips(){const t=new l({pos:this.center(),game:this});return this.ships.push(t),t}allGameObjects(){return[].concat(this.asteroids,this.ships)}center(){return[d.DIM_X/2,d.DIM_Y/2]}draw(t){t.clearRect(0,0,d.DIM_X,d.DIM_Y),this.allGameObjects().forEach(e=>e.render(t))}moveObjects(t){this.allGameObjects().forEach(e=>e.move(t))}checkCollisions(){const t=this.allGameObjects();for(let e=0;e<t.length;e++)for(let s=0;s<t.length;s++){if(e===s)continue;let n=t[e],o=t[s];n.isCollidedWith(o)&&n.collideWith(o)}}randomPos(){return[Math.floor(Math.random()*(d.DIM_X+1)),Math.floor(Math.random()*(d.DIM_Y+1))]}remove(t){if(t instanceof u){const e=this.asteroids.indexOf(t);-1!==e&&this.asteroids.splice(e,1)}else if(t instanceof l){const e=this.ships.indexOf(t);-1!==e&&this.ships.splice(e,1)}}step(t){this.moveObjects(t),this.checkCollisions()}wrapPos(t){t[0]<0?t[0]=d.DIM_X:t[0]>d.DIM_X&&(t[0]=t[0]%d.DIM_X),t[1]<0?t[1]=d.DIM_Y:t[1]>d.DIM_Y&&(t[1]=t[1]%d.DIM_Y)}}d.DIM_X=1e3,d.DIM_Y=600,d.NUM_ASTEROIDS=6;var f=d,p=s(0),v=s.n(p);class g{constructor(t,e){this.game=t,this.ctx=e,this.ship=this.game.addShips()}bindKeyHandlers(){for(var t in g.MOVES)if(g.MOVES.hasOwnProperty(t)){let e=g.MOVES[t];v()(t,()=>{this.ship.power(e)}),v()("space",()=>{this.ship.fireBullet()})}}start(){this.bindKeyHandlers(),setInterval(()=>{this.game.step(this.ctx),this.game.draw(this.ctx)},20)}}g.MOVES={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]};var m=g;document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("canvas"),e=t.getContext("2d");t.width=f.DIM_X,t.height=f.DIM_Y;const s=new f;new m(s,e).start()})}]);
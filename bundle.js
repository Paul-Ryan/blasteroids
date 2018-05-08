!function(t){var s={};function e(i){if(s[i])return s[i].exports;var o=s[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=s,e.d=function(t,s,i){e.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:i})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},e.p="",e(e.s=0)}([function(t,s,e){"use strict";e.r(s);const i={randomVec(t){const s=2*Math.PI*Math.random();return i.scale([Math.sin(s),Math.cos(s)],t)},scale:(t,s)=>[t[0]*s,t[1]*s],distance:(t,s)=>Math.sqrt(Math.pow(t.pos[0]-s.pos[0],2)+Math.pow(t.pos[1]-s.pos[1],2))};var o=i;var r=class{constructor(t){this.pos=t.pos,this.vel=t.vel,this.radius=t.radius,this.color=t.color,this.game=t.game}isCollidedWith(t){const s=this.radius+t.radius;return o.distance(this,t)<s}collideWith(t){}render(t){t.fillStyle=this.color,t.beginPath(),t.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI,!1),t.fill()}move(t){this.game.wrapPos(this.pos),this.pos[0]+=this.vel[0],this.pos[1]+=this.vel[1]}};const a={COLOR:"#251351",RADIUS:10,VELOCITY:[0,0]};var n=class extends r{constructor(t={}){super(t),this.color=a.COLOR,this.radius=a.RADIUS,this.vel=a.VELOCITY}respawn(){this.pos=this.game.center(),this.vel=[0,0]}};const h={COLOR:"#7D2E68",RADIUS:30,SPEED:8};var c=class extends r{constructor(t={}){super(t),this.color=h.COLOR,this.radius=h.RADIUS,this.vel=t.vel||o.randomVec(h.SPEED)}collideWith(t){t instanceof n&&t.respawn()}};class l{constructor(){this.asteroids=[],this.ships=[],this.addAsteroids(),this.addShips()}addAsteroids(){for(;this.asteroids.length<l.NUM_ASTEROIDS;){let t=new c({pos:this.randomPos(),game:this});this.asteroids.push(t)}}addShips(){const t=new n({pos:this.center(),game:this});this.ships.push(t)}allGameObjects(){return[].concat(this.asteroids,this.ships)}center(){return[l.DIM_X/2,l.DIM_Y/2]}draw(t){t.clearRect(0,0,l.DIM_X,l.DIM_Y),this.allGameObjects().forEach(s=>s.render(t))}moveObjects(t){this.allGameObjects().forEach(s=>s.move(t))}checkCollisions(){const t=this.allGameObjects();for(let s=0;s<t.length;s++)for(let e=0;e<t.length;e++){if(s===e)continue;let i=t[s],o=t[e];i.isCollidedWith(o)&&i.collideWith(o)}}randomPos(){return[Math.floor(Math.random()*(l.DIM_X+1)),Math.floor(Math.random()*(l.DIM_Y+1))]}remove(t){if(t instanceof c){const s=this.asteroids.indexOf(t);-1!==s&&this.asteroids.splice(s,1)}else if(t instanceof n){const s=this.ships.indexOf(t);-1!==s&&this.ships.splice(s,1)}}step(t){this.moveObjects(t),this.checkCollisions()}wrapPos(t){t[0]<0?t[0]=l.DIM_X:t[0]>l.DIM_X&&(t[0]=t[0]%l.DIM_X),t[1]<0?t[1]=l.DIM_Y:t[1]>l.DIM_Y&&(t[1]=t[1]%l.DIM_Y)}}l.DIM_X=1e3,l.DIM_Y=600,l.NUM_ASTEROIDS=10;var d=l;var u=class{constructor(t,s){this.game=t,this.ctx=s}start(){setInterval(()=>{this.game.step(this.ctx),this.game.draw(this.ctx)},20)}};document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("canvas"),s=t.getContext("2d");t.width=d.DIM_X,t.height=d.DIM_Y;const e=new d;new u(e,s).start()})}]);
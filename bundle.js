!function(t){var s={};function e(o){if(s[o])return s[o].exports;var r=s[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=s,e.d=function(t,s,o){e.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:o})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},e.p="",e(e.s=0)}([function(t,s,e){"use strict";e.r(s);const o={randomVec(t){const s=2*Math.PI*Math.random();return o.scale([Math.sin(s),Math.cos(s)],t)},scale:(t,s)=>[t[0]*s,t[1]*s],distance:(t,s)=>Math.sqrt(Math.pow(t.pos[0]-s.pos[0],2)+Math.pow(t.pos[1]-s.pos[1],2))};var r=o;var i=class{constructor(t){this.pos=t.pos,this.vel=t.vel,this.radius=t.radius,this.color=t.color,this.game=t.game}isCollidedWith(t){const s=this.radius+t.radius;return r.distance(this,t)<s}render(t){t.fillStyle=this.color,t.beginPath(),t.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI,!1),t.fill()}move(t){this.game.wrapPos(this.pos),this.pos[0]+=this.vel[0],this.pos[1]+=this.vel[1]}};const a={COLOR:"#7D2E68",RADIUS:30,SPEED:8};var n=class extends i{constructor(t={}){super(t),this.color=a.COLOR,this.radius=a.RADIUS,this.vel=t.vel||r.randomVec(a.SPEED)}};class h{constructor(){this.asteroids=[],this.addAsteroids()}draw(t){t.clearRect(0,0,h.DIM_X,h.DIM_Y),this.asteroids.forEach(s=>s.render(t))}moveObjects(t){this.asteroids.forEach(s=>s.move(t))}addAsteroids(){for(;this.asteroids.length<h.NUM_ASTEROIDS;){let t=this.randomPos(),s=new n({pos:t,game:this});this.asteroids.push(s)}}checkCollisions(){for(let t=0;t<this.asteroids.length;t++)for(let s=0;s<this.asteroids.length;s++)if(t!==s&&this.asteroids[t].isCollidedWith(this.asteroids[s])){let e=this.asteroids[t],o=this.asteroids[s];this.remove(e),this.remove(o)}}randomPos(){return[Math.floor(Math.random()*(h.DIM_X+1)),Math.floor(Math.random()*(h.DIM_Y+1))]}remove(t){const s=this.asteroids.indexOf(t);-1!==s&&this.asteroids.splice(s,1)}step(t){this.moveObjects(t),this.checkCollisions()}wrapPos(t){t[0]<0?t[0]=h.DIM_X:t[0]>h.DIM_X&&(t[0]=t[0]%h.DIM_X),t[1]<0?t[1]=h.DIM_Y:t[1]>h.DIM_Y&&(t[1]=t[1]%h.DIM_Y)}}h.DIM_X=1e3,h.DIM_Y=600,h.NUM_ASTEROIDS=6;var c=h;var d=class{constructor(t,s){this.game=t,this.ctx=s}start(){setInterval(()=>{this.game.step(this.ctx),this.game.draw(this.ctx)},20)}};document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("canvas"),s=t.getContext("2d");t.width=c.DIM_X,t.height=c.DIM_Y;const e=new c;new d(e,s).start()})}]);
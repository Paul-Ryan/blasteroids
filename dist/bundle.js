!function(t){var o={};function r(s){if(o[s])return o[s].exports;var e=o[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(t,o,s){r.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:s})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(o,"a",o),o},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},r.p="",r(r.s=0)}([function(t,o,r){"use strict";r.r(o);var s=class{constructor(t){this.pos=t.pos,this.vel=t.vel,this.radius=t.radius,this.color=t.color}render(t){t.fillStyle=this.color,t.beginPath(),t.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI,!1),t.fill()}move(t){this.pos[0]+=this.vel[0],this.pos[1]+=this.vel[1]}};const e={randomVec(t){const o=2*Math.PI*Math.random();return e.scale([Math.sin(o),Math.cos(o)],t)},scale:(t,o)=>[t[0]*o,t[1]*o]};var n=e;const a={COLOR:"#7D2E68",RADIUS:40,SPEED:10};var i=class extends s{constructor(t={}){super(t),this.color=a.COLOR,this.radius=a.RADIUS,this.vel=t.vel||n.randomVec(a.SPEED)}};const c={DIM_X:800,DIM_Y:600,NUM_ASTEROIDS:8};var l=class{constructor(){this.asteroids=[],this.addAsteroids()}draw(t){t.clearRect(0,0,c.DIM_X,c.DIM_Y),this.asteroids.forEach(o=>o.render(t))}moveObjects(t){this.asteroids.forEach(o=>o.move(t))}addAsteroids(){do{let t=this.randomPos(),o=new i({pos:t});this.asteroids.push(o)}while(this.asteroids.length<c.NUM_ASTEROIDS)}randomPos(){return[Math.floor(Math.random()*(c.DIM_X+1)),Math.floor(Math.random()*(c.DIM_Y+1))]}};console.log("webpack is running");const d=document.querySelector("canvas").getContext("2d");new i({pos:[300,300]}).render(d),(new l).draw(d),window.MovingObject=s}]);
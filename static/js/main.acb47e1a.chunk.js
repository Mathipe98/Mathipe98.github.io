(this["webpackJsonppathfinding2.0"]=this["webpackJsonppathfinding2.0"]||[]).push([[0],{15:function(t,n,e){},16:function(t,n,e){},17:function(t,n,e){},18:function(t,n,e){"use strict";e.r(n);var i=e(0),o=e(1),r=e.n(o),s=e(9),a=e.n(s),c=(e(15),e(2)),u=e(3),l=e(4),d=e(7),h=e(5),f=(e(16),function(t){Object(d.a)(e,t);var n=Object(h.a)(e);function e(t){var i;return Object(u.a)(this,e),(i=n.call(this,t)).state={},i}return Object(l.a)(e,[{key:"render",value:function(){var t=this.props,n=t.row,e=t.col,o=t.isStart,r=t.isFinish,s=t.isWall,a=t.isVisited,c=t.onMouseDown,u=t.onMouseEnter,l=t.onMouseUp,d=o?"node-start":r?"node-finish":s?"node-wall":a?"node-visited":"";return Object(i.jsx)("div",{id:"node-".concat(n,"-").concat(e),className:"node ".concat(d),isWall:s,onMouseDown:function(){return c(n,e)},onMouseEnter:function(){return u(n,e)},onMouseUp:function(){return l()}})}}]),e}(o.Component)),v=(e(17),e(6));function m(t,n){var e=n.row,i=n.col,o=t.length-1,r=t[0].length-1,s=e>0?t[e-1][i]:null,a=e<o?t[e+1][i]:null;return[s,i<r?t[e][i+1]:null,a,i>0?t[e][i-1]:null].filter(g).sort((function(t,n){return t.distance-n.distance}))}function g(t){return null!==t&&(!t.isVisited&&!t.isWall)}function j(t,n){var e=t.distance+n.cost;e<n.distance&&(n.distance=e,n.predecessor=t)}function b(t,n,e,i,o,r){var s=t[e][i],a=t[o][r],c="Dijkstra"===n?function(t,n,e){for(var i=function(t){for(var n=[],e=0;e<t.length;e++)for(var i=t[e],o=0;o<i.length;o++)n.push(i[o]);return n.sort((function(t,n){return t.distance-n.distance}))}(t),o=[];null===i||void 0===i?void 0:i.length;){var r=i.shift();if(!r.isWall){if(r.distance===1/0)return o;if(r===e)return o;var s=m(t,r);o.push(r);var a,c=Object(v.a)(s);try{for(c.s();!(a=c.n()).done;)j(r,a.value)}catch(u){c.e(u)}finally{c.f()}i.sort((function(t,n){return t.distance-n.distance}))}}}(t,0,a):"Astar"===n?function(t,n,e){for(var i=[n],o=[],r=[];null===i||void 0===i?void 0:i.length;){var s=i.shift();if(o.push(s),console.log(s),r.push(s),s===e||s.isFinish)return o;var a,c=m(t,s),u=Object(v.a)(c);try{var l=function(){var t=a.value;if(t.isWall||r.includes(t))return"continue";t.distance=s.distance+t.cost,t.total=t.distance+t.manDistance;var n=i.find((function(n){return n.col===t.col&&n.row===t.row||n===t}));if((null===n||void 0===n?void 0:n.distance)<=t.distance)return"continue";i.push(t),t.predecessor=s};for(u.s();!(a=u.n()).done;)l()}catch(d){u.e(d)}finally{u.f()}i.sort((function(t,n){return t.total-n.total}))}return o}(t,s,a):null,u=function(t){for(var n=[],e=t;e.predecessor;)n.push(e),e=e.predecessor;return n}(a);return function(t,n){for(var e=function(e){if(e===t.length)return setTimeout((function(){!function(t){for(var n=function(n){setTimeout((function(){var e=t[n];e.isFinish||(document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-shortest-path")}),50*n)},e=0;e<t.length;e++)n(e)}(n)}),15*e),{v:void 0};setTimeout((function(){var n=t[e];n.isStart||n.isFinish||(document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-visited")}),15*e)},i=0;i<=t.length;i++){var o=e(i);if("object"===typeof o)return o.v}}(c,u),[c,u]}var p=function(){var t=document.getElementById("body"),n=t.offsetWidth,e=t.offsetHeight;return n<=1280&&e<=590?[Math.floor((e-144)/24),Math.floor(n/24)]:n<=1920&&e<=940?[Math.floor((e-217)/24),Math.floor(n/24)]:[Math.floor((e-241)/24),Math.floor(n/24)]}();console.log("Number of rows: ".concat(p[0],". Number of cols: ").concat(p[1]));var O=p[0],M=p[1],k=function(t){Object(d.a)(e,t);var n=Object(h.a)(e);function e(t){var i;return Object(u.a)(this,e),(i=n.call(this,t)).state={currentAlgorithm:"Dijkstra",grid:[],mousePressed:!1,animationIsActive:!1,canChangeGrid:!0},i}return Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=w();this.setState({grid:t})}},{key:"visualizeAlgorithm",value:function(){if(console.log(this.state.canChangeGrid),this.state.canChangeGrid){var t=this.state,n=t.grid,e=t.currentAlgorithm;console.log("Hello did we get here wtf");var i=b(n,e,0,0,9,29);this.lockInterfaceInAnimation(i[0],i[1])}}},{key:"reset",value:function(){if(!this.state.animationIsActive){this.setState({canChangeGrid:!0});for(var t=this.state.grid,n=0;n<t.length;n++)for(var e=0;e<t[n].length;e++){var i=t[n][e];i.isStart||i.isFinish||(document.getElementById("node-".concat(i.row,"-").concat(i.col)).className="node")}var o=w();this.setState({grid:o})}}},{key:"onMouseDown",value:function(t,n){if(!this.state.animationIsActive&&this.state.canChangeGrid){var e=C(this.state.grid,t,n);this.setState({grid:e,mousePressed:!0})}}},{key:"onMouseEnter",value:function(t,n){if(this.state.mousePressed){var e=C(this.state.grid,t,n);this.setState({grid:e})}}},{key:"onMouseUp",value:function(){!this.state.animationIsActive&&this.state.canChangeGrid&&this.setState({mousePressed:!1})}},{key:"setAlgorithmOnClick",value:function(t){!this.state.animationIsActive&&this.state.canChangeGrid&&this.setState({currentAlgorithm:t})}},{key:"lockInterfaceInAnimation",value:function(t,n){var e=this;this.setState({animationIsActive:!0,canChangeGrid:!1}),setTimeout((function(){e.setState({animationIsActive:!1})}),15*(t.length+1)+50*(n.length+1)+1e3)}},{key:"generateRandomMaze",value:function(t){if(this.state.canChangeGrid){for(var n=t.slice(),e=0;e<n.length;e++)for(var i=0;i<n[e].length;i++){var o=n[e][i];if(!o.isStart&&!o.isFinish)Math.floor(10*Math.random())<3&&(n[e][i]=Object(c.a)(Object(c.a)({},o),{},{isWall:!o.isWall}))}this.setState({grid:n})}}},{key:"render",value:function(){var t=this,n=this.state,e=n.grid,o=n.mousePressed;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{id:"menu",children:[Object(i.jsx)("button",{className:"menuButton",onClick:function(){return t.visualizeAlgorithm()},children:"Visualize"}),Object(i.jsx)("button",{className:"menuButton",onClick:function(){return t.reset()},children:"Reset"}),Object(i.jsx)("button",{className:"menuButton",onClick:function(){return t.setAlgorithmOnClick("Astar")},children:"A*"}),Object(i.jsx)("button",{className:"menuButton",onClick:function(){return t.setAlgorithmOnClick("Dijkstra")},children:"Dijkstra's"}),Object(i.jsx)("button",{className:"menuButton",onClick:function(){return t.generateRandomMaze(e)},children:"Generate random maze"})]}),Object(i.jsx)("div",{className:"grid",children:e.map((function(n,e){return Object(i.jsx)("div",{className:"row",children:n.map((function(n,e){var r=n.row,s=n.col,a=n.isStart,c=n.isFinish,u=n.isVisited,l=n.isWall;return Object(i.jsx)(f,{row:r,col:s,isStart:a,isFinish:c,isVisited:u,isWall:l,mousePressed:o,onMouseDown:function(n,e){return t.onMouseDown(n,e)},onMouseEnter:function(n,e){return t.onMouseEnter(n,e)},onMouseUp:function(){return t.onMouseUp()}},e)}))},e)}))})]})}}]),e}(o.Component);function w(){for(var t=[],n=0;n<O;n++){for(var e=[],i=0;i<M;i++){var o=y(n,i);e.push(o)}t.push(e)}return t}function y(t,n){var e=0===t&&0===n;return{row:t,col:n,isStart:e,isFinish:9===t&&29===n,isVisited:!1,isWall:!1,distance:e?0:1/0,cost:1,manDistance:Math.abs(t-9)+Math.abs(n-29),total:e?0:1/0,predecessor:null}}function C(t,n,e){var i=t.slice(),o=i[n][e];return i[n][e]=Object(c.a)(Object(c.a)({},o),{},{isWall:!o.isWall}),i}var A=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(k,{})})},S=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,19)).then((function(n){var e=n.getCLS,i=n.getFID,o=n.getFCP,r=n.getLCP,s=n.getTTFB;e(t),i(t),o(t),r(t),s(t)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(A,{})}),document.getElementById("root")),S()}},[[18,1,2]]]);
//# sourceMappingURL=main.acb47e1a.chunk.js.map
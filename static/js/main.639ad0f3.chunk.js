(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(21)},16:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(8),o=n.n(l),r=(n(16),n(1)),i=n(2),s=n(4),u=n(3),h=n(5),m=n(9);function d(e,t){for(var n=[],a=0;a<e;a++){for(var c=[],l=0;l<t;l++)c.push("");n.push(c)}return n}function f(e,t,n){for(var a=e.length,c=e[0].length;n;){var l=b(a),o=b(c);e[l][o]||(e[l][o]=t,n--)}return e}function p(e,t){for(var n=0;n<e.length;n++)for(var a=0;a<e[0].length;a++)e[n][a]===t&&(e=v(e,n,a,t));return e}function v(e,t,n,a){for(var c=[t-1,t,t+1],l=[n-1,n,n+1],o=0;o<c.length;o++){var r=c[o];if(e[r])for(var i=0;i<l.length;i++){var s=l[i];void 0!==e[r][s]&&e[r][s]!==a&&("number"!==typeof e[r][s]&&(e[r][s]=0),e[r][s]++)}}return e}function b(e){return Math.floor(Math.random()*e)}var k=function(e){function t(e){var n;Object(r.a)(this,t);return(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={mapSize:10,bombCount:10,theMap:p(f(d(10,10),"\u2600",10),"\u2600"),cellsClicked:1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleCellsClicked",value:function(){var e=this.state,t=e.mapSize,n=e.bombCount,a=e.cellsClicked,c=t*t-n;this.setState({cellsClicked:a+1}),a>=c&&alert("\u2600\u2600\u2600 You have won! \u2600\u2600\u2600")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("table",null,c.a.createElement("tbody",null,this.state.theMap.map(function(t,n){return c.a.createElement("tr",{key:n,className:"mapRow"},t.map(function(t,a){return c.a.createElement(m.a,{key:a,row:n,column:a,value:t,cellsClicked:e.handleCellsClicked.bind(e)})}))}))))}}]),t}(a.Component),g=(n(20),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"App"},c.a.createElement("br",null),c.a.createElement(k,{className:"map"})),c.a.createElement("p",null,"How to play minesweeper: (Play on Chrome)"),c.a.createElement("p",null,"1) The goal of the game is to NOT click any bombs"),c.a.createElement("p",null,'2) Each number tells you how many bombs are adjacent to the "clicked" cell.'),c.a.createElement("p",null,"3) The numbers range from 0 to 8. Each cell has 8 neighbors. Count them."),c.a.createElement("p",null,"4) Use process of elimination to choose where to click next."),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){"use strict";(function(e){var a=n(1),c=n(2),l=n(4),o=n(3),r=n(5),i=n(0),s=n.n(i),u=n(10),h=n.n(u),m=!1,d=function(t){function n(e){var t;return Object(a.a)(this,n),(t=Object(l.a)(this,Object(o.a)(n).call(this,e))).state={clicked:!1,flag:""},t}return Object(r.a)(n,t),Object(c.a)(n,[{key:"handleClick",value:function(t){var n=t.target,a=this.props,c=a.row,l=a.column,o=a.cellsClicked;if(this.state.flag||this.setState({clicked:!0}),this.state.clicked||o(),!m){if(""===this.props.value&&n.id==="".concat(c,"_").concat(l)){n.id="".concat(c,"_").concat(l,"_");for(var r=[c-1,c,c+1],i=[l-1,l,l+1],s=function(){for(var t=r[u],n=function(){var n=i[a];e(function(){document.getElementById("".concat(t,"_").concat(n))&&document.getElementById("".concat(t,"_").concat(n)).click()})},a=0;a<i.length;a++)n()},u=0;u<r.length;u++)s()}if("\u2600"===this.props.value&&!this.state.flag){m=!0,n.style.backgroundColor="black";for(var h=n.parentElement.children.length,d=n.parentElement.parentElement.children.length,f=0;f<d;f++)for(var p=0;p<h;p++)document.getElementById("".concat(f,"_").concat(p))&&document.getElementById("".concat(f,"_").concat(p)).click()}}}},{key:"handleContextMenu",value:function(e){e.preventDefault(),this.state.clicked||(this.state.flag?this.setState({flag:""}):this.setState({flag:"\u2691"}))}},{key:"render",value:function(){var e=this.props,t=e.row,n=e.column,a=h()({cell:!0,clicked:this.state.clicked,bomb:"\u2600"===this.props.value});return s.a.createElement("td",{id:"".concat(t,"_").concat(n),className:a,onClick:this.handleClick.bind(this),onContextMenu:this.handleContextMenu.bind(this)},this.state.clicked&&!this.state.flag?this.props.value:"",this.state.flag)}}]),n}(i.Component);t.a=d}).call(this,n(17).setImmediate)}},[[11,1,2]]]);
//# sourceMappingURL=main.639ad0f3.chunk.js.map
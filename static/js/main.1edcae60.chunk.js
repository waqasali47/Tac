(this.webpackJsonpTac=this.webpackJsonpTac||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),i=a(8),s=a(1),c=a(2),u=a(4),h=a(3),m=a(5),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).toggleClass=n.toggleClass.bind(Object(m.a)(n)),n.state={animate:""},n}return Object(c.a)(a,[{key:"toggleClass",value:function(){this.state.animate;this.setState({animate:"animated bounce"}),console.log("ss")}},{key:"render",value:function(){var e=this;return r.a.createElement("button",{className:"square animated flipInX",onClick:function(){return e.props.onClick()}},r.a.createElement("span",{className:this.state.animate,onClick:function(){return e.toggleClass()}}," ",this.props.value))}}]),a}(r.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(r.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={playerOne:"",playerTwo:"",displayForm:!0},n.handlePlayerOne=n.handlePlayerOne.bind(Object(m.a)(n)),n.handlePlayerTwo=n.handlePlayerTwo.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"handlePlayerOne",value:function(e){var t=e.target.value;this.setState({playerOne:t})}},{key:"handlePlayerTwo",value:function(e){var t=e.target.value;this.setState({playerTwo:t})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{hidden:this.displayForm},r.a.createElement("label",{className:"control-label"},"Player 1:",r.a.createElement("input",{type:"text",className:"form-control",value:this.state.playerOne,onChange:this.handlePlayerOne,name:"playerOne"})),r.a.createElement("label",null,"Player 2:",r.a.createElement("input",{type:"text",className:"form-control",value:this.state.playerTwo,onChange:this.handlePlayerTwo,name:"PlayerTwo"})),r.a.createElement("input",{type:"button",className:"btn btn-primary",onClick:this.props.getPlayerName,value:"Start"})),r.a.createElement("h3",null,"Player One: ",this.state.playerOne),r.a.createElement("h3",null,"Player Two: ",this.state.playerTwo))}}]),a}(r.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,playerOne:"Player One",playerTwo:"Player Two"},n}return Object(c.a)(a,[{key:"calculateWinner",value:function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(i.a)(t[a],3),r=n[0],l=n[1],o=n[2];if(e[r]&&e[r]===e[l]&&e[r]===e[o])return e[r]}return null}},{key:"handleClick",value:function(e){var t=this.state.history,a=t[t.length-1].squares.slice();this.calculateWinner(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),xIsNext:!this.state.xIsNext}))}},{key:"render",value:function(){var e,t=this,a=this.state.history,n=a[a.length-1],l=this.calculateWinner(n.squares);return e=l?"Winner: "+l:this.state.xIsNext?this.state.playerOne:this.state.playerTwo,r.a.createElement("div",{className:"contianer"},r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("div",{className:"game-info"},r.a.createElement("h3",null,e)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(f,null)),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(v,{squares:n.squares,onClick:function(e){return t.handleClick(e)}}))))))}}]),a}(r.a.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var g=document.getElementById("root");o.a.render(r.a.createElement(y,null),g),function(){if("serviceWorker"in navigator){if(new URL("/Tac",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Tac","/service-worker.js");p?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):b(e)}))}}()},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.1edcae60.chunk.js.map
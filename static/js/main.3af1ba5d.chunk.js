(this["webpackJsonpsnake-game"]=this["webpackJsonpsnake-game"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(5),l=n.n(a),o=(n(10),n(11),n(2)),u=n(4);n(12);var i=n(1),s=function e(t){Object(u.a)(this,e),this.value=t,this.next=null},f=function e(t){Object(u.a)(this,e);var n=new s(t);this.head=n,this.tail=n},v="UP",h="RIGHT",d="DOWN",w="LEFT",j=function(e){var t=e.length,n=e[0].length,r=Math.round(t/3),c=Math.round(n/3);return{row:r,col:c,cell:e[r][c]}},b=function(e){for(var t=1,n=[],r=0;r<e;r++){for(var c=[],a=0;a<e;a++)c.push(t++);n.push(c)}return n},O=function(e,t){return t===v?{row:e.row-1,col:e.col}:t===h?{row:e.row,col:e.col+1}:t===d?{row:e.row+1,col:e.col}:t===w?{row:e.row,col:e.col-1}:void 0},x=function(e,t){var n=e.row,r=e.col;return n<0||r<0||(n>=t.length||r>=t[0].length)},g=function(e){return"ArrowUp"===e?v:"ArrowRight"===e?h:"ArrowDown"===e?d:"ArrowLeft"===e?w:""},p=function(e,t){if(null===e.next)return t;var n=e.value,r=n.row,c=n.col,a=e.next.value,l=a.row,o=a.col;return l===r&&o===c+1?h:l===r&&o===c-1?w:o===c&&l===r+1?d:o===c&&l===r-1?v:""},m=function(e,t){var n=p(e,t),r=S(n),c={row:e.value.row,col:e.value.col};return O(c,r)},S=function(e){return e===v?d:e===h?w:e===d?v:e===w?h:void 0},k=function(e,t,n,r){var c="cell";return e===t&&(c=n?"cell cell-purple":"cell cell-red"),r.has(e)&&(c="cell cell-green"),c},E=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(b(15)),l=Object(o.a)(a,2),u=l[0],v=(l[1],Object(r.useState)(new f(j(u)))),d=Object(o.a)(v,2),w=d[0],E=d[1],F=Object(r.useState)(new Set([w.head.value.cell])),M=Object(o.a)(F,2),A=M[0],I=M[1],L=Object(r.useState)(w.head.value.cell+5),N=Object(o.a)(L,2),T=N[0],y=N[1],C=Object(r.useState)(h),D=Object(o.a)(C,2),P=D[0],R=D[1],B=Object(r.useState)(!1),J=Object(o.a)(B,2),U=J[0],z=J[1];Object(r.useEffect)((function(){window.addEventListener("keydown",(function(e){G(e)}))}),[]),function(e,t){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){H()}),150);var G=function(e){var t=g(e.key);""!==t&&(S(t)===P&&A.size>1||R(t))},H=function(){var e={row:w.head.value.row,col:w.head.value.col},t=O(e,P);if(x(t,u))Q();else{var n=u[t.row][t.col];if(A.has(n))Q();else{var r=new s({row:t.row,col:t.col,cell:n}),c=w.head;w.head=r,c.next=r;var a=new Set(A);a.delete(w.tail.value.cell),a.add(n),w.tail=w.tail.next,null===w.tail&&(w.tail=w.head),n===T&&(W(a),U&&q(),K(a)),I(a)}}},W=function(e){var t=m(w.tail,P);if(!x(t,u)){var n=u[t.row][t.col],r=new s({row:t.row,col:t.col,cell:n}),c=w.tail;w.tail=r,w.tail.next=c,e.add(n)}},q=function(){var e=p(w.tail,P),t=S(e);R(t),function(e){for(var t=null,n=e;null!==n;){var r=n.next;n.next=t,t=n,n=r}}(w.tail);var n=w.head;w.head=w.tail,w.tail=n},K=function(e){for(var t,r,a;r=1,a=225,t=Math.floor(Math.random()*(a-r+1)+r),e.has(t)||T===t;);var l=Math.random()<.3;y(t),z(l),c(n+1)},Q=function(){c(0);var e=j(u);E(new f(e)),y(e.cell+5),I(new Set([e.cell])),R(h)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("h1",{children:["Score: ",n]}),Object(i.jsx)("div",{className:"board",children:u.map((function(e,t){return Object(i.jsx)("div",{className:"row",children:e.map((function(e,t){var n=k(e,T,U,A);return Object(i.jsx)("div",{className:n},t)}))},t)}))})]})};var F=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(E,{})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),r(e),c(e),a(e),l(e)}))};l.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(F,{})}),document.getElementById("root")),M()}],[[14,1,2]]]);
//# sourceMappingURL=main.3af1ba5d.chunk.js.map
(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),i=c.n(r),a=c(5),s=c.n(a),o=(c(24),c(25),c(11)),u=c.n(o),l=c(17),d=c(14),j=c(2),b=function(e){return{type:"GET_LIST",payload:e}},A=function(e){return{type:"SET_LIST",payload:e}},p=function(e){return{type:"GET_REQUEST_LIST",payload:e}},O=function(e){return{type:"SET_GOODS",payload:e}},f=function(e){return{type:"SET_ISPIN",payload:e}},m=(c(33),c(16)),h=function(e){return e.requestList},v=function(e){return e.list},g=function(e){return e.goods},x=function(e){return e.isPin},y=Object(m.a)(g,(function(e){return e.reduce((function(e,t){return e+t.price*t.amount}),0)})),N=function(){var e=Object(j.b)(),t=Object(j.c)(h),c=Object(j.c)(g).slice(),i=Object(j.c)(v),a=i.slice(),s=Object(r.useCallback)(Object(d.a)(u.a.mark((function t(){var c,n,r,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=lenovo&category=computers&country=US",{method:"GET",headers:{"x-rapidapi-key":"7b4376c68amsh086f378303b1b42p1e0433jsn512f378a4d94","x-rapidapi-host":"amazon-product-reviews-keywords.p.rapidapi.com"}});case 3:return c=t.sent,t.next=6,c.json();case 6:n=t.sent,r=n.products,i=r.map((function(e){var t=e.price,c=t.current_price,n=t.currency,r=e.title,i=e.thumbnail,a=e.asin,s=r.split(" "),o=Object(l.a)(s),u=o[0],d=o[1],j=o[2],b=o.slice(3).join(" ");return{id:a,price:c,currency:n,title:[u,d,j].join(" "),description:b,url:i}})),e(b(i)),e(p(i)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])}))),[e]),o=Object(r.useCallback)((function(t){var n=c.find((function(e){return e.id===t.id}));void 0===n?(t.amount=1,c.push(t),e(O(c))):(n.amount+=1,e(O(c)))}),[c,e]),f=Object(r.useRef)(),m=Object(r.useCallback)((function(){var c=f.current.value;if(0===c.length)e(A(t));else{var n=a.filter((function(e){return e.title.toLowerCase().includes(c)||e.description.toLowerCase().includes(c)}));e(A(n))}}),[e,a,t]);return Object(r.useEffect)((function(){s()}),[s]),Object(n.jsxs)("div",{className:"main",children:[Object(n.jsx)("div",{className:"inp",children:Object(n.jsx)("input",{type:"text",className:"searchProduct",placeholder:"Search product",onInput:m,ref:f})}),Object(n.jsx)("div",{className:"list",children:i.map((function(e,t){return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"forimg",children:Object(n.jsx)("img",{className:"img",src:e.url,alt:"product"})}),Object(n.jsx)("div",{className:"forbtn",children:Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA/AAAAPwBMDxhdwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARcSURBVFiFvZdbbFRVGIXX2qfTzgzQVq5JY6APKCYkGo2RlhIFIg/6gEa0IQEFeonByAPRR0PBBxPjgybGENPiLcYYeNDEF4KXAkM6lQqKkIDhEmgZUGjTUjrMaefsvXwovTCdS9GBP9mZs+f8a6/v/HvnPzksq2lYa8jVAADhqvP0vX9kz1+4T2EIs1bCegnrBeyk5ZlITdOu+wVASROTx16bEYmG3hP4JhxXpn5tjd1rADN5ohNfJVPhhW+B+AdG2+61OZBRgbGI1jZ9LKCBNGvoNEyPNg0XwNHS0VI2QIiWlta4IGCY1gTGDjo/QMpYzPYsUB3g4E6rbAaFACJ1TU/D4VCRHlIgHMgAggNhBVgCFsTRrADkLhOuS/ztliyYF7xaA1iHUZkDrQPc6DXcxP9jOXfcHxuT5rx9bTougP23LpZkRVaLiy5v3GvO9251S6sMQl6RijERZYfPWjjbbnIlCNqH4bQxxy4V3ZyJAfBGyoNMLCeAH18Ug2d6vdi5ogOYkwkAgIxyA0gtjtbt9eLnHdK2uACnEoDH635H27mcAAAgcB9SaWOOdxcX4MRlC6uDQEYjygy/88HDMOzzYmeLZs5rN8HeIU9QrCCA1OLotNfrOG8RFGcbvF/OAIDg4UBBgFEI7UMq7ZnjPf/PWYI5ehEl33ZZArvH3rhZ+8Dk8BfePBxOVPR5sbNz3FPVuRNTI2Bf8vYYGv9FXxLsHRKvDDgO+p48c7KspPSdMVnWTpgZkdrm3YqGmoPtz3qYbNCbFK8PWvYnCT+Y2q3IWzC8Cuu6AVwC3Repjs/uaPHTA1je1ABhz4QKFuQ1SD0SEwZKiLgCKAEw4cQrI0ol1Pn1YKG1C24BAEh4nmDCCC/QBYlkV/U1qcVNR1sUAAMsFnQ52dl2rBimGWsXDgecA1DNmo3lxQaY5hloeAYyPwLqp8yHzqj/ro0c5UdKv1H7J0N3DQAA4drG50i+C+EJTLNyWWJzKt725X8CGBc8+Xq0ctZI6d06D9wslX779MaUG5IKDrzyiodlG8qnk3uHDjtN5crNlfly8laAq7aEI755XzBNgCIAupzYPNzZ+mfeKtXXe+Hu8h0w2A5hFoDTAN9IxVsPZubm3cuI730gcJt9eGk4qF1NRWc+bgx+Kl+2aU5eXU/52yB2uOol0aBuDVReuRjE/nDNloemDcBVu0pENttHHlV67QYT1K1B+sWNIUjzRrzQy/kARG51VYuCkXWbvaB2NUbqm0KQykhv07QBKnFxJqQyzV0wnqMH5o6u7zg/JzhJAPM1d/54k9PMCiAUsgCnVC4nQH/75wMgTnm/dwbmag/op1ASOzDqAdeeS6fR09Xunf7Dmu4LQHoEJfGfgXTaA9yRKcD5DmG0prnGGeynVAFSkCjxI7+zdXtOEYDwisYldOYQpAXjOvK74XjbuswvpYJ9YMaKxirr+BKlOYA5lO0kZ4uK5U2zh6V6ElUSu/x42w/Z8v4FyZOOlhaHTqsAAAAASUVORK5CYII=",alt:"basket",onClick:function(){return o(e)}})}),Object(n.jsxs)("div",{className:"name",children:[Object(n.jsx)("h4",{children:e.title}),Object(n.jsxs)("div",{className:"info",children:["Price - ",e.price," ",e.currency]}),Object(n.jsx)("div",{className:"description",children:e.description})]})]},t)}))})]})},C=c(18),I=(c(34),function(){var e=Object(j.b)(),t=Object(j.c)(g),c=t.slice(),i=Object(j.c)(x),a=Object(j.c)(y),s=Object(r.useCallback)((function(t){var n=c.filter((function(e){return e.id!==t}));e(O(n))}),[e,c]),o=Object(r.useCallback)((function(t){var n=c.filter((function(e){return e.id!==t.id}));t.pin=!0;var r=[t].concat(Object(C.a)(n));e(O(r)),e(f(!0))}),[e,c]),u=Object(r.useCallback)((function(t){var n=c.map((function(e){return e.id===t&&delete e.pin,e}));e(f(!1)),e(O(n))}),[e,c]);return Object(n.jsxs)("div",{className:"goods",children:[Object(n.jsx)("div",{className:"myGoods",children:0!==t.length?t.map((function(e,t){return Object(n.jsxs)("div",{className:"title",children:[e.title," - ",(e.price*e.amount).toFixed(2),e.currency," - amount - ",e.amount," items",!e.pin&&Object(n.jsx)("button",{className:"btn",onClick:function(){return s(e.id)},children:"remove"}),!i&&Object(n.jsx)("button",{className:"btn",onClick:function(){return o(e)},children:"pin"}),e.pin&&Object(n.jsx)("button",{className:"btn",onClick:function(){return u(e.id)},children:"unpin"})]},t+100)})):"There aren't any selected products"}),Object(n.jsx)("div",{className:"sum",children:0!==t.length?"Total sum - ".concat(a.toFixed(2),"$"):""})]})});var k=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(I,{}),Object(n.jsx)(N,{})]})},E=c(3),T=c(8),P={requestList:[],list:[],goods:[],isPin:!1},B=Object(T.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LIST":case"SET_LIST":return Object(E.a)(Object(E.a)({},e),{},{list:t.payload});case"GET_REQUEST_LIST":return Object(E.a)(Object(E.a)({},e),{},{requestList:t.payload});case"SET_GOODS":return Object(E.a)(Object(E.a)({},e),{},{goods:t.payload});case"SET_ISPIN":return Object(E.a)(Object(E.a)({},e),{},{isPin:t.payload});default:return e}}));s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(j.a,{store:B,children:Object(n.jsx)(k,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d9748d01.chunk.js.map
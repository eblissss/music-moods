(this["webpackJsonpmusic-moods"]=this["webpackJsonpmusic-moods"]||[]).push([[0],{42:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(7),r=n.n(i),s=(n(42),n(16)),c=n.n(s),p=n(22),l=n(10),u=n(82),b=n(84),d=n(79),g=Object(d.a)((function(t){return{body:{backgroundImage:"linear-gradient(rgb(0, 0, 0), rgb(40, 44, 52), rgb(36, 48, 156))",opacity:"3.0"},main:{backgroundPosition:"center",backgroundSize:"cover",margin:"auto",background:"#282c34",minHeight:"100vh",width:"min(80vw, 900px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white",boxShadow:"0px 0px 12px 10px rgba(255,255,255,0.8)"},textBox:{width:"max(30%, 300px)",height:"20%",margin:"30px 20px",textShadow:"2px"},input:{fontFamily:"Permanent Marker",fontSize:"1.5rem",color:"white"},notchedOutline:{borderColor:"white"},header:{position:"absolute",marginTop:"20px",top:"10%",color:"white",backgroundColor:"black"},spotify:{position:"absolute",top:"50%",left:"50%",transform:"translateX(-50%)",width:"min(500px, 100vw)",height:"calc(50px + 40%)",opacity:".85",boxShadow:"0px 1px 10px 9px rgba(255,255,255,0.8)"},spinner:{position:"absolute",left:"60%",transform:"translateX(-1000%)"}}})),m=n(9),f=function(t){var e=t.spotifyLink,n=g();return Object(m.jsx)("div",{children:Object(m.jsx)("iframe",{className:n.spotify,title:"spotify",src:e,frameBorder:"0",allowtransparency:"true"})})};function h(t){var e=Math.floor(2.5*t+3.5);e>5&&(e=5);var n={spotifyLink:"",imageLink:"",message:"",color:""};switch(e){case 1:n.color="rgb(0, 0, 0), rgb(255, 99, 71), rgb(0,0,0)",n.message="It'll be better tomorrow, here's a playlist for you.",n.spotifyLink="https://open.spotify.com/embed/playlist/6tEHdC4ee1bkhjtoPKNhbm",n.imageLink="https://i.pinimg.com/originals/46/09/23/460923f017d4f5019f28e6cdbae72dac.gif";break;case 2:n.color="rgb(0,0, 0), rgb(86,3,25), rgb(0,0, 0)",n.message="Rough day? Here, a playlist for you.",n.spotifyLink="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DWVV27DiNWxkR",n.imageLink="https://cdn-acpnj.nitrocdn.com/SDkrhncnWeetGsYGlzwaPnbfptfOeIKk/assets/static/optimized/rev-56afdb7/wp-content/uploads/2018/01/13-Sad-doctor-who-gif.gif";break;case 3:n.color="rgb(0,0,0), rgb(255, 255, 255), rgb(0,0, 0)",n.message="You've got this! Here is a playlist to boost your mood",n.spotifyLink="https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0",n.imageLink="https://c.tenor.com/F00W5rJTnokAAAAM/chris-paul-not-funny.gif";break;case 4:n.color="rgb(0,0,0), rgb(0,86,63), rgb(0,0, 0)",n.message="Keep smiling and listen to this playlist",n.spotifyLink="https://open.spotify.com/embed/playlist/37i9dQZF1DX0UrRvztWcAU",n.imageLink="https://media2.giphy.com/media/3o6vY59s91hWsxASYM/giphy.gif";break;case 5:n.color="rgb(0,0,0), rgb(255,255,0), rgb(0,0,0)",n.message="Stay turnt up with this playlist selected for you",n.spotifyLink="https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC",n.imageLink="https://c.tenor.com/1rGPG7GkOVwAAAAC/beau-happy.gif"}return n}function y(){return(y=Object(p.a)(c.a.mark((function t(e){var n,o,a,i,r,s,p,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=new URL("https://sentim-api.herokuapp.com/api/v1/"),""!==e){t.next=3;break}return t.abrupt("return",null);case 3:return o={text:e},a=JSON.stringify(o),(i=new Headers).append("Accept","application/json"),i.append("Content-Type","application/json"),r=new Request(n,{method:"POST",headers:i,body:a,mode:"cors",cache:"default"}),t.next=12,fetch(r);case 12:return s=t.sent,t.next=15,s.json();case 15:return p=t.sent,l=p.result.polarity,t.abrupt("return",l);case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var x=function(t){return y.apply(this,arguments)};var k=function(){var t=g(),e=Object(o.useState)(""),n=Object(l.a)(e,2),a=n[0],i=n[1],r=Object(o.useState)(!1),s=Object(l.a)(r,2),d=s[0],y=s[1],k=Object(o.useState)({spotifyLink:"",playlistimageLink:"",message:"Talk about your day.",color:"rgb(0, 0, 0)"}),j=Object(l.a)(k,2),w=j[0],v=j[1];return Object(o.useEffect)((function(){function t(){return(t=Object(p.a)(c.a.mark((function t(){var e,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(a);case 2:return e=t.sent,t.next=5,h(e);case 5:n=t.sent,v(n),y(!0);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}if(""!==a){var e=setTimeout((function(){return function(){return t.apply(this,arguments)}()}),200);return function(){return clearTimeout(e)}}v({spotifyLink:"",playlistimageLink:"",message:"Talk about your day.",color:"rgb(0, 0, 0)"}),y(!1)}),[a]),Object(m.jsx)("div",{id:"body",className:t.body,style:{backgroundImage:"linear-gradient(".concat(w.color,")")},children:Object(m.jsxs)("div",{className:t.main,style:{backgroundImage:'url("'.concat(w.imageLink,'")')},children:[Object(m.jsx)(u.a,{variant:"h4",className:"header",style:{position:"absolute",top:"17%",fontFamily:"Zen Kurenaido",fontWeight:"900",backgroundColor:"rgba(40, 44, 52, 0.5)",padding:"10px",borderRadius:"10px"},children:""===w.message?"How was your day?":w.message}),Object(m.jsx)(b.a,{onChange:function(t){return i(t.target.value)},className:t.textBox,id:"outlined-basic",label:"",variant:"outlined",placeholder:"  Let the words flow..",style:{position:"absolute",top:"25%",width:"40%"},InputProps:{className:t.input,classes:{notchedOutline:t.notchedOutline}}}),d?Object(m.jsx)(f,{spotifyLink:w.spotifyLink,style:{height:"20%"}}):Object(m.jsx)(m.Fragment,{})]})})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),o(t),a(t),i(t),r(t)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),j()}},[[50,1,2]]]);
//# sourceMappingURL=main.3cc22e33.chunk.js.map
(self.webpackChunkdefense_unicorns=self.webpackChunkdefense_unicorns||[]).push([[501],{262:function(e,t,a){"use strict";a.r(t);var l,n=a(3552),r=a(7294),m=a(5444),i=a(2247),s=a(5191),c=(a(2546),a(6633)),o=a.n(c),f=a(2203),d={height:"200px"},u={borderRadius:"0",height:"45px",width:"150px",fontSize:"15px"},p={},h={height:"50%",width:"70%",display:"flex",flexDirection:"column",marginLeft:"35%"},b={height:"50%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",color:"black"},x={height:"100%",fontSize:"100px",color:"#14498e"},y={height:"34%",width:"100%",display:"flex"},E={height:"10%",width:"100%",color:"black",fontSize:"20px",paddingLeft:"10%",paddingTop:"1%"},w={height:"100%",width:"100%",color:"black",lineHeight:"1",display:"flex",flexDirection:"column",justifyContent:"center",paddingLeft:"5%",fontSize:"20px"},g=((l={color:"black",fontSize:"18px"}).color="#14498e",l.fontWeight="700",l),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).domRef=r.createRef(),a.state={feedbackMsg:null},a}(0,n.Z)(t,e);var a=t.prototype;return a.handleSubmit=function(e){var t=this;e.preventDefault();var a={};Object.keys(this.refs).map((function(e){return a[e]=t.refs[e].value}));var l={url:this.props.location.pathname,method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:f.stringify(a)};o()(l).then((function(e){(0,m.c4)("/")})).catch((function(e){return t.setState({feedbackMsg:"Form could not be submitted."})}))},a.render=function(){var e=this;return r.createElement("main",{className:"contact mx-auto p-0 m-0",style:p},r.createElement(i.Z,{title:"Contact"}),r.createElement(s.Z,{textColor:"black"}),r.createElement("section",{className:"formContainer flex flex-col flex-wrap min-h-screen m-0 sm:flex-row "},r.createElement("div",{className:"w-full sm:w-1/2 h-full border-primary flex items-center justify-center"},r.createElement("div",{className:"container",style:h},r.createElement("div",{style:b,className:""},r.createElement("h1",{style:x,className:"ms-5"},"Get In Touch.")),r.createElement("div",{className:"",style:y},r.createElement("div",{style:w},r.createElement("p",null,"Defense Unicorns"),r.createElement("p",null,"555 E Pikes Peak Ave"),r.createElement("p",null,"Colorado Springs, Co 80903"))),r.createElement("div",{style:E,className:"socialsBox"},r.createElement("a",{href:"https://www.linkedin.com/company/leapfrog-ai/about/"},r.createElement("i",{className:"bi bi-linkedin ms-1 me-3"})),r.createElement("a",{href:"#"},r.createElement("i",{className:"bi bi-twitter me-3"})),r.createElement("a",{href:"#"},r.createElement("i",{className:"bi bi-facebook me-3"}))))),r.createElement("div",{className:"w-full sm:w-1/2 pt-6 sm:pt-0 border-dark flex items-center justify-center text-white sm:text-black"},r.createElement("form",{red:this.domRef,"data-netlify":"true",className:"w-3/4 flex flex-col ",name:"Contact",onSubmit:function(t){return e.handleSubmit(t)}},r.createElement("input",{ref:"form-name",type:"hidden",name:"form-name",value:"Contact"}),r.createElement("div",{className:"flex justify-between names "},r.createElement("input",{ref:"firstName",name:"firstName",className:"form-control",placeholder:"What's your first name?"}),r.createElement("input",{ref:"lastName",name:"lastName",className:"form-control",placeholder:"and your Last?"})),r.createElement("div",{className:"mt-2 mb-3 w-100"},r.createElement("input",{ref:"emailAddress",name:"emailAddress",placeholder:"Now where can we reach you? (email)",type:"email",className:"form-control w-full ",id:"exampleInputEmail1"})),r.createElement("label",{className:"form-label mt-4 ms-1",style:g},"Who are you?"),r.createElement("select",{ref:"submissionFrom",name:"submissionFrom",id:"textBox",className:"form-select mb-3 text-gray-500 bg-gray-50","aria-label":"Default select example"},r.createElement("option",{defaultValue:!0},"Private Company"),r.createElement("option",{value:"government"},"Government"),r.createElement("option",{value:"individual"},"Individual")),r.createElement("textarea",{ref:"message",name:"message",placeholder:"Hi Defense Unicorns I'm really excited to talk...",className:"mt-3 w-100 form-control bg-transparent",style:d}),r.createElement("button",{type:"submit",className:"bg-red-500 hover:bg-red-700 text-white me-5 mt-5",style:u},"SUBMIT")))))},t}(r.Component);t.default=v}}]);
//# sourceMappingURL=component---src-pages-contact-js-d696049e67d4edf1e057.js.map
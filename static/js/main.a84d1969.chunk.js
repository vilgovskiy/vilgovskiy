(this.webpackJsonpvilgovskiy=this.webpackJsonpvilgovskiy||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,function(e,t,c){"use strict";c.r(t);var i=c(1),s=c(2),n=c.n(s),r=c(17),a=c.n(r),o=(c(25),c(26),c(5)),l=c.p+"static/media/square.67ee1c40.jpg",j=(c(27),function(){return Object(i.jsx)("div",{className:"TitlePicture",children:Object(i.jsx)("img",{src:l,alt:"Me with a teddy bear :)"})})}),d=(c(28),function(){return Object(i.jsx)("p",{className:"TitleName",children:"Vladislav Il'govskiy"})}),b=c(9),h=c(8),O=(c(29),function(){return Object(i.jsx)("table",{className:"Contacts",children:Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)(b.c,{})}),Object(i.jsx)("td",{children:"+1 (647) 839-8269"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)(b.a,{})}),Object(i.jsx)("td",{children:"v.ilgovskiy@gmail.com"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)(b.b,{})}),Object(i.jsx)("td",{children:"Toronto ON, Canada"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)(h.b,{})}),Object(i.jsx)("td",{children:Object(i.jsx)("a",{href:"https://www.linkedin.com/in/vladislav-ilgovskiy/",children:"in/vladislav-ilgovskiy"})})]})]})})}),u=function(e){var t=Object(s.useState)(0),c=Object(o.a)(t,2),n=c[0],r=c[1],a=Object(s.useRef)(null);Object(s.useEffect)((function(){e.name===e.activeElem&&a.current.focus()}),[e.name,e.activeElem]),Object(s.useEffect)((function(){r(e.position)}),[e.position]);return Object(i.jsx)("a",{href:"#".concat(e.name),onClick:function(t){t.preventDefault(),window.scrollTo(0,n),e.onClick()},ref:a,children:e.children})},x=(c(30),{introduction:null,about:null,techstack:null,timeline:null,projects:null}),m=function(e){var t=Object(s.useState)("TOP"),c=Object(o.a)(t,2),n=c[0],r=c[1],a=Object(s.useCallback)((function(){var e=window.scrollY+200,t=null;for(var c in x)if(c!==(t=x[c]<=e?c:t))break;t!==n&&r(t)}),[n]),l=Object(s.useCallback)((function(){var e=window.scrollY;for(var t in x)x[t]=document.getElementById(t).getBoundingClientRect().top+e;a()}),[a]);return Object(s.useEffect)((function(){l(),window.addEventListener("scroll",a)}),[l,a]),Object(i.jsxs)("nav",{className:"Navigation",children:[Object(i.jsx)(u,{name:"introduction",onClick:e.onClick,activeElem:n,position:x.introduction,children:"Introduction"}),Object(i.jsx)(u,{name:"about",onClick:e.onClick,activeElem:n,position:x.about,children:"About"}),Object(i.jsx)(u,{name:"techstack",onClick:e.onClick,activeElem:n,position:x.techstack,children:"Tech Stack"}),Object(i.jsx)(u,{name:"timeline",onClick:e.onClick,activeElem:n,position:x.timeline,children:"Timeline"}),Object(i.jsx)(u,{name:"projects",onClick:e.onClick,activeElem:n,position:x.projects,children:"Projects"})]})},f=(c(31),c(7)),p=(c(32),function(){return Object(i.jsx)("div",{className:"Footer",children:Object(i.jsxs)("p",{children:["Made by Vlad with"," ",Object(i.jsx)("span",{style:{color:"red"},children:Object(i.jsx)(h.a,{id:"heart"})})," ","and"," ",Object(i.jsx)("span",{style:{color:"#5ed3f3"},children:Object(i.jsx)(f.c,{})})]})})}),v=function(e){var t=e.active?"":" Hidden";return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsxs)("div",{className:"Sidebar"+t,children:[Object(i.jsx)(j,{}),Object(i.jsx)(d,{}),Object(i.jsx)(O,{}),Object(i.jsx)(m,{refs:e.refs,onClick:e.sidebarCloseHandler}),Object(i.jsx)(p,{})]})})},g=c(12),k=(c(33),function(e){var t=e.active?Object(i.jsx)(g.b,{size:"20px"}):Object(i.jsx)(g.a,{size:"20px"}),c=e.active?" Active":"";return Object(i.jsx)("div",{className:"Toggler"+c,onClick:e.onClick,children:t})}),w=(c(34),function(e){var t=Object(s.useState)(!1),c=Object(o.a)(t,2),n=c[0],r=c[1],a=function(){return r(!1)},l=null;return n&&(l=Object(i.jsx)("div",{className:"Backdrop",onClick:a})),Object(i.jsxs)("div",{children:[Object(i.jsx)(k,{active:n,onClick:function(){return r(!n)}}),Object(i.jsx)(v,{refs:e.refs,active:n,sidebarCloseHandler:a}),l,Object(i.jsx)("div",{className:"ContentContainer",children:e.children})]})}),y=c.p+"static/media/about.656dcb96.jpg",C=c(3),N=(c(35),c(15),n.a.forwardRef((function(e,t){return Object(i.jsx)("section",{id:"about",ref:t,className:"About",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:y,alt:""}),Object(i.jsxs)("p",{style:{textAlign:"right"},children:["Hello, My name Is Vlad and this is me. ",Object(i.jsx)(f.a,{})," "]}),Object(i.jsxs)("p",{children:["I am a young hardworking cloud and full-stack software developer, based in Toronto, ON ",Object(i.jsx)(f.b,{})]}),Object(i.jsx)("p",{children:"Enjoy working in dynamic, fast-paced environments where people are dedicated to what they do, take ownership of their work and are willing to collaborate in order to achieve best results."}),Object(i.jsx)("p",{children:"Passionate learner, always willing to pick up new tech and apply my skills to solving complex real-life problems with code."}),Object(i.jsx)("p",{children:"I have experience working with public cloud and containers, creating services and integrations that allow users to have best experience when interacting with products and services related to cloud."}),Object(i.jsx)("p",{children:"I also design CI/CD workflows for cloud and containers deployments as well as Infrastructure as Code templates."}),Object(i.jsxs)("p",{id:"Socials",children:[Object(i.jsx)("a",{id:"VK",href:"https://vk.com/therusjerry",children:Object(i.jsx)(C.C,{size:30})}),Object(i.jsx)("a",{id:"Facebook",href:"https://www.facebook.com/vlad.ilgovskiy/",children:Object(i.jsx)(C.e,{size:30})}),Object(i.jsx)("a",{id:"Insta",href:"https://www.instagram.com/ilgovskiy/",children:Object(i.jsx)(C.l,{size:30})})]})]})})})));c(36);var P=function(e){var t=Object(s.useState)(!0),c=Object(o.a)(t,2),n=c[0],r=c[1],a=Object(s.useRef)();return Object(s.useEffect)((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){return r(e.isIntersecting)}))})),t=a.current;return e.observe(t),function(){return e.unobserve(t)}}),[]),Object(i.jsx)("div",{className:"fade-in ".concat(n?"visible":""),ref:a,children:e.children})},S=(c(37),n.a.forwardRef((function(e,t){return Object(i.jsx)("header",{ref:t,id:"introduction",className:"Introduction",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Vladislav Il'govskiy"}),Object(i.jsx)("h2",{children:"CLOUD & FULL-STACK DEVELOPER"})]})})}))),T=function(e){return Object(i.jsx)("div",{className:"Content",children:e.children})},z=(c(38),function(){return Object(i.jsxs)("section",{id:"techstack",className:"TechStack",children:[Object(i.jsx)("p",{children:"Technologies I have experience with:"}),Object(i.jsxs)("div",{className:"StackSection",children:[Object(i.jsx)("p",{children:"Languages:"}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)(C.g,{}),"Go"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.m,{}),"Java"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.n,{}),"JavaScript"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.w,{}),"Python"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.A,{}),"Ruby"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.u,{}),"SQL ",Object(i.jsx)("span",{style:{fontSize:"10px"},children:"(PostgreSQL, SQL Server)"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.k,{}),"HTML + CSS"]})]})]}),Object(i.jsxs)("div",{className:"StackSection",children:[Object(i.jsx)("p",{children:"Libraries and Frameworks:"}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)(C.y,{}),"React"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.t,{}),"Node.js"]}),Object(i.jsx)("li",{children:"Express.js"}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.q,{}),"jQuery"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.c,{}),"Bootstrap"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.x,{size:30}),"Rails"]}),Object(i.jsx)("li",{children:"Pandas"}),Object(i.jsx)("li",{children:"NumPy"})]})]}),Object(i.jsxs)("div",{className:"StackSection",children:[Object(i.jsx)("p",{children:"Tools and Platforms:"}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)(C.r,{}),"Kubernetes"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.j,{}),"Helm"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.d,{}),"Docker"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.z,{}),"OpenShift"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.a,{}),"AWS"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.h,{}),"GCP"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.s,{}),"Azure"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.o,{}),"Jenkins"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.i,{}),"Harbor"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.v,{}),"Prometheus"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.f,{}),"git"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.b,{}),"Maven"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.p,{}),"Jira"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(C.B,{}),"VSCode"]})]})]})]})}),I=(c(39),function(){return Object(i.jsxs)("section",{id:"timeline",className:"Timeline",children:[Object(i.jsx)("p",{children:"My timeline:"}),Object(i.jsxs)("div",{className:"Timeline-container",children:[Object(i.jsxs)("div",{className:"Timeline-item","date-is":"5/2019-12/2020",children:[Object(i.jsx)("h1",{children:"Technical Analyst @ Densify"}),Object(i.jsx)("p",{children:"Built platforms and services for both client and internal usage. Communicated with interested parties and evolved solutions based on feedback. Built resilient and secure applications that worked with sensitive data and interacted directly with clients cloud environments."}),Object(i.jsxs)("p",{children:["Some of my contributions can be found on ",Object(i.jsx)("a",{href:"https://github.com/densify-dev",children:"Densify public GitHub page"})," "]})]}),Object(i.jsxs)("div",{className:"Timeline-item","date-is":"5/2017-9/2018",children:[Object(i.jsx)("h1",{children:"Co-Op Java Developer @ Intact Financial Corporation"}),Object(i.jsx)("p",{children:"Back-end Java software development role. Work on data conversion project that connects modern Web application to legacy mainframe book of record. "})]}),Object(i.jsxs)("div",{className:"Timeline-item","date-is":"9/2014-5/2019",children:[Object(i.jsx)("h1",{children:"Electrical & Computer Engineering Student @ University of Toronto"}),Object(i.jsx)("p",{children:"Electrical and Computer Engineering student, specializing in Software engineering and Control systems. Was part of residence council as VP Academics. Played on Tri-Campus competitive Volleyball team."})]})]})]})}),E=(c(40),function(e){return Object(i.jsxs)("section",{id:"projects",className:"Projects",children:[Object(i.jsxs)("div",{className:"Project",children:[Object(i.jsx)("h3",{className:"ProjectTitle",children:"Container Optimization Data Forwarder"}),Object(i.jsxs)("div",{className:"ProjectDescription",children:[Object(i.jsxs)("div",{className:"UsedTech",children:[Object(i.jsx)(C.g,{size:30}),Object(i.jsx)(C.v,{size:30}),Object(i.jsx)(C.r,{size:30}),Object(i.jsx)(C.j,{size:30})]}),Object(i.jsx)("p",{children:"Containerized microservice written in Golang."}),Object(i.jsx)("p",{children:"It uses Prometheus query language to aggregate Cluster metrics, collected by Prometheus server and forwards this data to Densify specified Densify instance. The application uses token-based authentication to issue API calls to Prometheus service in Kubernetes cluster and performes security certificate validation against provided certificate authority. Token and cerificate can be deployed to cluster by user or default cluster resources will be used."}),Object(i.jsx)("p",{children:"It can de deployed manually or via Helm chart."}),Object(i.jsxs)("div",{className:"ProjectLinks",children:[Object(i.jsx)("a",{href:"https://github.com/densify-dev/Container-Optimization-Data-Forwarder",className:"LinkButton",children:"GitHub"}),Object(i.jsx)("a",{href:"https://github.com/densify-dev/helm-charts",className:"LinkButton",children:"Helm chart GitHub"})]})]})]}),Object(i.jsxs)("div",{className:"Project",children:[Object(i.jsx)("h3",{className:"ProjectTitle",children:"Densify resource provider for AWS CloudFormation"}),Object(i.jsxs)("div",{className:"ProjectDescription",children:[Object(i.jsxs)("div",{className:"UsedTech",children:[Object(i.jsx)(C.m,{size:30}),Object(i.jsx)(C.a,{size:30})]}),Object(i.jsx)("p",{children:"Custom resource providers were announced at re:Invent 2019 and Densify was among first 7 companies to create a custom resource in collaboration with AWS Development team."}),Object(i.jsx)("p",{children:"Densify::Optimization::Recommendation resource is written in Java. It uses Densify API and AWS Parameter Store to fetch sizing recommendatons for connected instances and apply approved recommndations through CloudFormation template with only 1 click!"}),Object(i.jsx)("p",{children:"This automation is performed by matching Provisioning ID of existing instance to a recommenation field in Densify and storing this configuration as Parameter in AWS. The entire environment update process took between 5 seconds and 1 minute, depending on state of CloudFormation, and could update up to 200 instances at a time, only limited by CloudFormation parameter restriction."}),Object(i.jsxs)("div",{className:"ProjectLinks",children:[Object(i.jsx)("a",{href:"https://github.com/densify-dev/cloudformation-optimization-as-code",className:"LinkButton",children:"GitHub"}),Object(i.jsx)("a",{href:"https://aws.amazon.com/blogs/aws/cloudformation-update-cli-third-party-resource-support-registry/",className:"LinkButton",children:"Blog by Jeff Barr"})]})]})]}),Object(i.jsxs)("div",{className:"Project",children:[Object(i.jsx)("h3",{className:"ProjectTitle",children:"Borowly - Platform for lending and borrowing items."}),Object(i.jsxs)("div",{className:"ProjectDescription",children:[Object(i.jsxs)("div",{className:"UsedTech",children:[Object(i.jsx)(C.A,{size:30}),Object(i.jsx)(C.x,{size:30}),Object(i.jsx)(C.u,{size:30}),Object(i.jsx)(C.c,{size:30})]}),Object(i.jsx)("p",{children:"University course project built with RubyOnRails and deployed on Heroku with PostgreSQL database in the backend. The frontend uses vanilla JavaScript and Bootstrap."}),Object(i.jsx)("p",{children:"It is an online platform for communities that allows registered users to borrow things from their neighbours and keep track of items that you lended or borrowed."}),Object(i.jsx)("p",{children:"Users could list items they are willing to lend or items they need to borrow Allows users to register or sign in via Facebook. Application is hooked up to email service that sends users confirmations and reminders when it's time to return items. There is also a map view that allows users to see what items can be borrowed in their area."}),Object(i.jsx)("p",{children:"Registration and authentication layer utilizes sessions and encryption to keep track of active users and keeping sensitive data safe."}),Object(i.jsx)("div",{className:"ProjectLinks",children:Object(i.jsx)("a",{href:"https://github.com/vilgovskiy/Back-On-Rails",className:"LinkButton",children:"GitHub"})})]})]})]})});var D=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(w,{children:[Object(i.jsx)(S,{}),Object(i.jsxs)(T,{children:[Object(i.jsx)(P,{children:Object(i.jsx)(N,{})}),Object(i.jsx)(P,{children:Object(i.jsx)(z,{})}),Object(i.jsx)(P,{children:Object(i.jsx)(I,{})}),Object(i.jsx)(P,{children:Object(i.jsx)(E,{})})]})]})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),i(e),s(e),n(e),r(e)}))},A=c(19);a.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(A.a,{children:Object(i.jsx)(D,{})})}),document.getElementById("root")),L()}],[[46,1,2]]]);
//# sourceMappingURL=main.a84d1969.chunk.js.map
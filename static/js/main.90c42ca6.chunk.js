(this.webpackJsonpvilgovskiy=this.webpackJsonpvilgovskiy||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,i){},,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},,,,,,function(e,t,i){"use strict";i.r(t);var s=i(1),c=i(2),n=i.n(c),r=i(17),a=i.n(r),o=(i(25),i(26),i(5)),l=i.p+"static/media/square.67ee1c40.jpg",j=(i(27),function(){return Object(s.jsx)("div",{className:"TitlePicture",children:Object(s.jsx)("img",{src:l,alt:"Me with a teddy bear :)"})})}),d=(i(28),function(){return Object(s.jsx)("p",{className:"TitleName",children:"Vladislav Il'govskiy"})}),b=i(9),h=i(8),u=(i(29),function(){return Object(s.jsx)("table",{className:"Contacts",children:Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)(b.c,{})}),Object(s.jsx)("td",{children:"+1 (647) 839-8269"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)(b.a,{})}),Object(s.jsx)("td",{children:"v.ilgovskiy@gmail.com"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)(b.b,{})}),Object(s.jsx)("td",{children:"Toronto ON, Canada"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)(h.b,{})}),Object(s.jsx)("td",{children:Object(s.jsx)("a",{href:"https://www.linkedin.com/in/vladislav-ilgovskiy/",children:"in/vladislav-ilgovskiy"})})]})]})})}),O=function(e){var t=Object(c.useState)(0),i=Object(o.a)(t,2),n=i[0],r=i[1],a=Object(c.useRef)(null);Object(c.useEffect)((function(){e.name===e.activeElem&&a.current.focus()}),[e.name,e.activeElem]),Object(c.useEffect)((function(){r(e.position)}),[e.position]);return Object(s.jsx)("a",{href:"#".concat(e.name),onClick:function(t){t.preventDefault(),window.scrollTo(0,n),e.onClick()},ref:a,children:e.children})},x=(i(30),{introduction:null,about:null,techstack:null,timeline:null,projects:null}),m=function(e){var t=Object(c.useState)("TOP"),i=Object(o.a)(t,2),n=i[0],r=i[1],a=Object(c.useCallback)((function(){var e=window.scrollY+200,t=null;for(var i in x)if(i!==(t=x[i]<=e?i:t))break;t!==n&&r(t)}),[n]),l=Object(c.useCallback)((function(){var e=window.scrollY;for(var t in x)x[t]=document.getElementById(t).getBoundingClientRect().top+e;a()}),[a]);return Object(c.useEffect)((function(){l(),window.addEventListener("scroll",a)}),[l,a]),Object(s.jsxs)("nav",{className:"Navigation",children:[Object(s.jsx)(O,{name:"introduction",onClick:e.onClick,activeElem:n,position:x.introduction,children:"Introduction"}),Object(s.jsx)(O,{name:"about",onClick:e.onClick,activeElem:n,position:x.about,children:"About"}),Object(s.jsx)(O,{name:"techstack",onClick:e.onClick,activeElem:n,position:x.techstack,children:"Tech Stack"}),Object(s.jsx)(O,{name:"timeline",onClick:e.onClick,activeElem:n,position:x.timeline,children:"Timeline"}),Object(s.jsx)(O,{name:"projects",onClick:e.onClick,activeElem:n,position:x.projects,children:"Projects"})]})},p=(i(31),i(7)),f=(i(32),function(){return Object(s.jsx)("div",{className:"Footer",children:Object(s.jsxs)("p",{children:["Made by Vlad with"," ",Object(s.jsx)("span",{style:{color:"red"},children:Object(s.jsx)(h.a,{id:"heart"})})," ","and"," ",Object(s.jsx)("span",{style:{color:"#5ed3f3"},children:Object(s.jsx)(p.c,{})})]})})}),v=function(e){var t=e.active?"":" Hidden";return Object(s.jsx)(n.a.Fragment,{children:Object(s.jsxs)("div",{className:"Sidebar"+t,children:[Object(s.jsx)(j,{}),Object(s.jsx)(d,{}),Object(s.jsx)(u,{}),Object(s.jsx)(m,{refs:e.refs,onClick:e.sidebarCloseHandler}),Object(s.jsx)(f,{})]})})},g=i(12),k=(i(33),function(e){var t=e.active?Object(s.jsx)(g.b,{size:"20px"}):Object(s.jsx)(g.a,{size:"20px"}),i=e.active?" Active":"";return Object(s.jsx)("div",{className:"Toggler"+i,onClick:e.onClick,children:t})}),y=(i(34),function(e){var t=Object(c.useState)(!1),i=Object(o.a)(t,2),n=i[0],r=i[1],a=function(){return r(!1)},l=null;return n&&(l=Object(s.jsx)("div",{className:"Backdrop",onClick:a})),Object(s.jsxs)("div",{children:[Object(s.jsx)(k,{active:n,onClick:function(){return r(!n)}}),Object(s.jsx)(v,{refs:e.refs,active:n,sidebarCloseHandler:a}),l,Object(s.jsx)("div",{className:"ContentContainer",children:e.children})]})}),w=i.p+"static/media/about.656dcb96.jpg",N=i(3),C=(i(35),i(15),n.a.forwardRef((function(e,t){return Object(s.jsx)("section",{id:"about",ref:t,className:"About",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{src:w,alt:""}),Object(s.jsxs)("p",{style:{textAlign:"right"},children:["Hello, My name Is Vlad and this is me. ",Object(s.jsx)(p.a,{})," "]}),Object(s.jsxs)("p",{children:["I am a young hardworking cloud and full-stack software developer, based in Toronto, ON ",Object(s.jsx)(p.b,{})]}),Object(s.jsx)("p",{children:"Enjoy working in dynamic, fast-paced environments where people are dedicated to what they do, take ownership of their work and are willing to collaborate in order to achieve best results."}),Object(s.jsx)("p",{children:"Passionate learner, always willing to pick up new tech and apply my skills to solving complex real-life problems with code."}),Object(s.jsx)("p",{children:"I have experience working with public cloud and containers, creating services and integrations that allow users to have best experience when interacting with products and services related to cloud."}),Object(s.jsx)("p",{children:"I also design CI/CD workflows for cloud and containers deployments as well as Infrastructure as Code templates."}),Object(s.jsxs)("p",{id:"Socials",children:[Object(s.jsx)("a",{id:"VK",href:"https://vk.com/therusjerry",children:Object(s.jsx)(N.E,{size:30})}),Object(s.jsx)("a",{id:"Facebook",href:"https://www.facebook.com/vlad.ilgovskiy/",children:Object(s.jsx)(N.e,{size:30})}),Object(s.jsx)("a",{id:"Insta",href:"https://www.instagram.com/ilgovskiy/",children:Object(s.jsx)(N.m,{size:30})})]})]})})})));i(36);var P=function(e){var t=Object(c.useState)(!0),i=Object(o.a)(t,2),n=i[0],r=i[1],a=Object(c.useRef)();return Object(c.useEffect)((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){return r(e.isIntersecting)}))})),t=a.current;return e.observe(t),function(){return e.unobserve(t)}}),[]),Object(s.jsx)("div",{className:"fade-in ".concat(n?"visible":""),ref:a,children:e.children})},T=(i(37),n.a.forwardRef((function(e,t){return Object(s.jsx)("header",{ref:t,id:"introduction",className:"Introduction",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Vladislav Il'govskiy"}),Object(s.jsx)("h2",{children:"CLOUD & FULL-STACK DEVELOPER"})]})})}))),S=function(e){return Object(s.jsx)("div",{className:"Content",children:e.children})},z=(i(38),function(){return Object(s.jsxs)("section",{id:"techstack",className:"TechStack",children:[Object(s.jsx)("p",{children:"Technologies I have experience with:"}),Object(s.jsxs)("div",{className:"StackSection",children:[Object(s.jsx)("p",{children:"Languages:"}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:[Object(s.jsx)(N.g,{}),"Go"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.n,{}),"Java"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.o,{}),"JavaScript"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.x,{}),"Python"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.B,{}),"Ruby"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.v,{}),"SQL ",Object(s.jsx)("span",{style:{fontSize:"10px"},children:"(PostgreSQL, SQL Server)"})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.l,{}),"HTML + CSS"]})]})]}),Object(s.jsxs)("div",{className:"StackSection",children:[Object(s.jsx)("p",{children:"Libraries and Frameworks:"}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:[Object(s.jsx)(N.z,{}),"React"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.u,{}),"Node.js"]}),Object(s.jsx)("li",{children:"Express.js"}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.r,{}),"jQuery"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.c,{}),"Bootstrap"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.y,{size:30}),"Rails"]}),Object(s.jsx)("li",{children:"Pandas"}),Object(s.jsx)("li",{children:"NumPy"})]})]}),Object(s.jsxs)("div",{className:"StackSection",children:[Object(s.jsx)("p",{children:"Tools and Platforms:"}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:[Object(s.jsx)(N.s,{}),"Kubernetes"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.k,{}),"Helm"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.d,{}),"Docker"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.A,{}),"OpenShift"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.a,{}),"AWS"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.h,{}),"GCP"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.t,{}),"Azure"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.p,{}),"Jenkins"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.j,{}),"Harbor"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.w,{}),"Prometheus"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.f,{}),"git"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.b,{}),"Maven"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.q,{}),"Jira"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)(N.D,{}),"VSCode"]})]})]})]})}),I=(i(39),function(){return Object(s.jsxs)("section",{id:"timeline",className:"Timeline",children:[Object(s.jsx)("p",{children:"My timeline:"}),Object(s.jsxs)("div",{className:"Timeline-container",children:[Object(s.jsxs)("div",{className:"Timeline-item","date-is":"2/2021 - now",children:[Object(s.jsx)("h1",{children:"Software Engineer @ PocketHealth"}),Object(s.jsx)("p",{children:"Designing, building and deploying APIs and Microservices in Golang, to create an online platform for patients to take control over their health information and conveniently share it with anyone on demand."})]}),Object(s.jsxs)("div",{className:"Timeline-item","date-is":"5/2019-12/2020",children:[Object(s.jsx)("h1",{children:"Technical Analyst @ Densify"}),Object(s.jsx)("p",{children:"Built platforms and services for both client and internal usage. Communicated with interested parties and evolved solutions based on feedback. Built resilient and secure applications that worked with sensitive data and interacted directly with clients cloud environments."}),Object(s.jsxs)("p",{children:["Some of my contributions can be found on ",Object(s.jsx)("a",{href:"https://github.com/densify-dev",children:"Densify public GitHub page"})," "]})]}),Object(s.jsxs)("div",{className:"Timeline-item","date-is":"5/2017-9/2018",children:[Object(s.jsx)("h1",{children:"Co-Op Java Developer @ Intact Financial Corporation"}),Object(s.jsx)("p",{children:"Back-end Java software development role. Work on data conversion project that connects modern Web application to legacy mainframe book of record. "})]}),Object(s.jsxs)("div",{className:"Timeline-item","date-is":"9/2014-5/2019",children:[Object(s.jsx)("h1",{children:"Electrical & Computer Engineering Student @ University of Toronto"}),Object(s.jsx)("p",{children:"Electrical and Computer Engineering student, specializing in Software engineering and Control systems. Was part of residence council as VP Academics. Played on Tri-Campus competitive Volleyball team."})]})]})]})}),L=(i(40),function(e){return Object(s.jsxs)("section",{id:"projects",className:"Projects",children:[Object(s.jsxs)("div",{className:"Project",children:[Object(s.jsx)("h3",{className:"ProjectTitle",children:"KanBan Board"}),Object(s.jsxs)("div",{className:"ProjectDescription",children:[Object(s.jsxs)("div",{className:"UsedTech",children:[Object(s.jsx)(N.C,{size:30}),Object(s.jsx)(N.u,{size:30}),Object(s.jsx)(N.i,{size:30}),Object(s.jsx)(N.v,{size:30}),Object(s.jsx)(N.l,{size:30})]}),Object(s.jsx)("p",{children:"React + Typescript web application with GraphQL api running on Express + Node.js backend."}),Object(s.jsx)("p",{children:"React frontend utilizes Context api for storing and accessing application state information. Requests to GraphQL API are made via axios and then parsed in callback functions."}),Object(s.jsx)("p",{children:"It is a classic KanBan board that used for organizing work process and tracking tasks by multiple companies across the globe."}),Object(s.jsx)("p",{children:"This version features collaboration features that allow multiple users to work on the same project simultaneously. Board owner/administrator can add users to the project or revoke their access using Access Control panel"}),Object(s.jsx)("p",{children:"All tasks can be moved around and edited. Additionally every task has severity level assigned to it. The severity level makes small changes to CSS styling of task component, which allows users to visually differentiate among tasks."}),Object(s.jsxs)("div",{className:"ProjectLinks",children:[Object(s.jsx)("a",{href:"https://github.com/vilgovskiy/kanban",className:"LinkButton",children:"GitHub"}),Object(s.jsx)("a",{href:"https://vilgovskiy.github.io/kanban/",className:"LinkButton",children:"Live Demo"})]})]})]}),Object(s.jsxs)("div",{className:"Project",children:[Object(s.jsx)("h3",{className:"ProjectTitle",children:"Container Optimization Data Forwarder"}),Object(s.jsxs)("div",{className:"ProjectDescription",children:[Object(s.jsxs)("div",{className:"UsedTech",children:[Object(s.jsx)(N.g,{size:30}),Object(s.jsx)(N.w,{size:30}),Object(s.jsx)(N.s,{size:30}),Object(s.jsx)(N.k,{size:30})]}),Object(s.jsx)("p",{children:"Containerized microservice written in Golang."}),Object(s.jsx)("p",{children:"It uses Prometheus query language to aggregate Cluster metrics, collected by Prometheus server and forwards this data to Densify specified Densify instance. The application uses token-based authentication to issue API calls to Prometheus service in Kubernetes cluster and performes security certificate validation against provided certificate authority. Token and cerificate can be deployed to cluster by user or default cluster resources will be used."}),Object(s.jsx)("p",{children:"It can de deployed manually or via Helm chart."}),Object(s.jsxs)("div",{className:"ProjectLinks",children:[Object(s.jsx)("a",{href:"https://github.com/densify-dev/Container-Optimization-Data-Forwarder",className:"LinkButton",children:"GitHub"}),Object(s.jsx)("a",{href:"https://github.com/densify-dev/helm-charts",className:"LinkButton",children:"Helm chart GitHub"})]})]})]}),Object(s.jsxs)("div",{className:"Project",children:[Object(s.jsx)("h3",{className:"ProjectTitle",children:"Densify resource provider for AWS CloudFormation"}),Object(s.jsxs)("div",{className:"ProjectDescription",children:[Object(s.jsxs)("div",{className:"UsedTech",children:[Object(s.jsx)(N.n,{size:30}),Object(s.jsx)(N.a,{size:30})]}),Object(s.jsx)("p",{children:"Custom resource providers were announced at re:Invent 2019 and Densify was among first 7 companies to create a custom resource in collaboration with AWS Development team."}),Object(s.jsx)("p",{children:"Densify::Optimization::Recommendation resource is written in Java. It uses Densify API and AWS Parameter Store to fetch sizing recommendatons for connected instances and apply approved recommndations through CloudFormation template with only 1 click!"}),Object(s.jsx)("p",{children:"This automation is performed by matching Provisioning ID of existing instance to a recommenation field in Densify and storing this configuration as Parameter in AWS. The entire environment update process took between 5 seconds and 1 minute, depending on state of CloudFormation, and could update up to 200 instances at a time, only limited by CloudFormation parameter restriction."}),Object(s.jsxs)("div",{className:"ProjectLinks",children:[Object(s.jsx)("a",{href:"https://github.com/densify-dev/cloudformation-optimization-as-code",className:"LinkButton",children:"GitHub"}),Object(s.jsx)("a",{href:"https://aws.amazon.com/blogs/aws/cloudformation-update-cli-third-party-resource-support-registry/",className:"LinkButton",children:"Blog by Jeff Barr"})]})]})]}),Object(s.jsxs)("div",{className:"Project",children:[Object(s.jsx)("h3",{className:"ProjectTitle",children:"Borowly - Platform for borrowing and lending items"}),Object(s.jsxs)("div",{className:"ProjectDescription",children:[Object(s.jsxs)("div",{className:"UsedTech",children:[Object(s.jsx)(N.B,{size:30}),Object(s.jsx)(N.y,{size:30}),Object(s.jsx)(N.v,{size:30}),Object(s.jsx)(N.c,{size:30})]}),Object(s.jsx)("p",{children:"University course project built with RubyOnRails and deployed on Heroku with PostgreSQL database in the backend. The frontend uses vanilla JavaScript and Bootstrap."}),Object(s.jsx)("p",{children:"It is an online platform for communities that allows registered users to borrow things from their neighbours and keep track of items that you lended or borrowed."}),Object(s.jsx)("p",{children:"Users could list items they are willing to lend or items they need to borrow Allows users to register or sign in via Facebook. Application is hooked up to email service that sends users confirmations and reminders when it's time to return items. There is also a map view that allows users to see what items can be borrowed in their area."}),Object(s.jsx)("p",{children:"Registration and authentication layer utilizes sessions and encryption to keep track of active users and keeping sensitive data safe."}),Object(s.jsx)("div",{className:"ProjectLinks",children:Object(s.jsx)("a",{href:"https://github.com/vilgovskiy/Back-On-Rails",className:"LinkButton",children:"GitHub"})})]})]})]})});var B=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(y,{children:[Object(s.jsx)(T,{}),Object(s.jsxs)(S,{children:[Object(s.jsx)(P,{children:Object(s.jsx)(C,{})}),Object(s.jsx)(P,{children:Object(s.jsx)(z,{})}),Object(s.jsx)(P,{children:Object(s.jsx)(I,{})}),Object(s.jsx)(P,{children:Object(s.jsx)(L,{})})]})]})})},D=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,47)).then((function(t){var i=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;i(e),s(e),c(e),n(e),r(e)}))},E=i(19);a.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(E.a,{children:Object(s.jsx)(B,{})})}),document.getElementById("root")),D()}],[[46,1,2]]]);
//# sourceMappingURL=main.90c42ca6.chunk.js.map
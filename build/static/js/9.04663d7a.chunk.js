(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{65:function(e){e.exports={companies:[{"Industry Field":"Environment Engineering & Energy, Mechanical & Aerospace Engineering, Electrical Engineering, Bioengineering / Biotech","Position Types":"Full-Time","Work Authorizations":"U.S. Citizen",Organization:"Applied Medical"},{"Industry Field":"Computer Engineering","Position Types":"Full-Time, Internship","Work Authorizations":"U.S. Citizen",Organization:"Accel Robotics"},{"Industry Field":"Computer Science, Computer Engineering","Position Types":"Full-Time, Internship","Work Authorizations":"U.S. Citizen",Organization:"Veeva"},{"Industry Field":"Computer Science","Position Types":"Full-Time, Internship","Work Authorizations":"U.S. Citizen",Organization:"Appfolio"},{"Industry Field":"Computer Science, Computer Engineering, Consumer / Retail","Position Types":"Internship","Work Authorizations":"U.S. Citizen, U.S. Permanent Resident, DACA/Other, International Student Visa",Organization:"Seismic Software"},{"Industry Field":"Mechanical & Aerospace Engineering, Electrical Engineering, Computer Engineering","Position Types":"Full-Time, Internship","Work Authorizations":"U.S. Citizen, U.S. Permanent Resident, DACA/Other, International Student Visa",Organization:"Hunter Industries"},{"Industry Field":"Mechanical & Aerospace Engineering, Computer Science, Electrical Engineering","Position Types":"Full-Time, Internship","Work Authorizations":"U.S. Citizen",Organization:"Cubic Corporation"},{"Industry Field":"Computer Science, Computer Engineering","Position Types":"Internship","Work Authorizations":"U.S. Citizen, U.S. Permanent Resident, International Student Visa",Organization:"ServiceNow"},{"Industry Field":"Mechanical & Aerospace Engineering, Electrical Engineering, Computer Engineering","Position Types":"Full-Time, Internship","Work Authorizations":"U.S. Citizen, U.S. Permanent Resident",Organization:"Quartus Engineering"},{"Industry Field":"Mechanical & Aerospace Engineering, Computer Science, Electrical Engineering, Computer Engineering","Position Types":"Full-Time, Internship","Work Authorizations":"U.S. Citizen",Organization:"General Atomics"},{"Industry Field":"Computer Science","Position Types":"Full-Time, Part-Time, Internship","Work Authorizations":"U.S. Citizen, U.S. Permanent Resident, DACA/Other, International Student Visa",Organization:"iD Tech"},{"Industry Field":"Mechanical & Aerospace Engineering","Position Types":"Full-Time, Internship","Work Authorizations":"U.S. Citizen",Organization:"Applied Composites"},{"Industry Field":"Computer Science, Electrical Engineering, Computer Engineering","Position Types":"Full-Time, Internship","Work Authorizations":"U.S. Citizen U.S. Permanent Resident DACA/Other International Student Visa",Organization:"Brain Corporation"},{"Industry Field":"Computer Science","Position Types":"Internship","Work Authorizations":"U.S. Citizen, U.S. Permanent Resident, International Student Visa",Organization:"PlayStation"},{"Industry Field":"Computer Science, Electrical Engineering, Computer Engineering","Position Types":"Full-Time, Internship","Work Authorizations":"U.S. Citizen, U.S. Permanent Resident, International Student Visa",Organization:"Hughes Network Systems"},{"Industry Field":"Computer Science, Computer Engineering","Position Types":"Internship","Work Authorizations":"U.S. Citizen, U.S. Permanent Resident, International Student Visa",Organization:"Bentley Systems"},{"Industry Field":"Computer Science, Electrical Engineering","Position Types":"Full-Time, Internship","Work Authorizations":"U.S. Citizen",Organization:"Viasat Inc."},{"Industry Field":"Computer Science","Position Types":"Full-Time, Internship","Work Authorizations":"U.S. Citizen, U.S. Permanent Resident, International Student Visa",Organization:"Supplyframe Inc"},{"Industry Field":"Computer Science","Position Types":"Full-Time, Internship","Work Authorizations":"U.S. Citizen, U.S. Permanent Resident, DACA/Other, International Student Visa",Organization:"Arista Networks"},{"Industry Field":"Life & Physical Science,Materials & Structural Engineering, Civil Engineering, Mechanical & Aerospace Engineering, Computer Science, Electrical Engineering, Computer Engineering","Position Types":"Full-Time","Work Authorizations":"U.S. Citizen",Organization:"412 Test Engineering Group (US Air Force)"},{"Industry Field":"Environment Engineering & Energy, Materials & Structural Engineering, Civil Engineering, Mechanical & Aerospace Engineering, Electrical Engineering, Computer Engineering","Position Types":"Full-Time","Work Authorizations":"U.S. Citizen, U.S. Permanent Resident, DACA/Other",Organization:"Los Angeles Department of Water and Power"},{"Industry Field":"Computer Science, Bioengineering / Biotech","Position Types":"Full-Time","Work Authorizations":"U.S. Citizen, U.S. Permanent Resident",Organization:"Danaher"}]}},88:function(e,n,t){"use strict";t.r(n);var i=t(3),a=t(4),r=t(6),o=t(5),s=t(7),l=t(0),c=t.n(l),u=t(13),d=t(79),h=t(20),p=t(44),m=t(54),g=t(80),y=function(e){var n=e.name,t=(e.company,Object(g.a)({"U.S. Citizen":["US","decaf-company__avatar-blue"],"U.S. Permanent Resident":["PR","decaf-company__avatar-green"],"DACA/Other":["D/O","decaf-company__avatar-yellow"],"International Student Visa":["I","decaf-company__avatar-purple"]}[n],2)),i=t[0],a=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"decaf-company__avatar ".concat(a," text-center")},i))},f=function(e){return c.a.createElement(m.c,{className:""},c.a.createElement(m.d,null,c.a.createElement(m.i,{className:"decaf-company__name"},e.name),c.a.createElement(m.g,{className:"decaf-company__positions"},e.positions.toString().replace(/, /g,",").replace(/,/g,", ")),c.a.createElement("div",{className:"decaf-company__fields"},e.field.map(function(e){return c.a.createElement(m.b,{className:"decaf-company__field",color:"info"},e)})),c.a.createElement(m.h,null,e.description)),c.a.createElement(m.f,{className:"decaf-company__footer"},e.nationalities.map(function(n){return c.a.createElement(y,{name:n,company:e.name,className:"decaf-company__avatar"})})))},C=t(65),S=t(78),E=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(r.a)(this,Object(o.a)(n).call(this,e))).toggle=t.toggle.bind(Object(h.a)(Object(h.a)(t))),t.state={dropdownOpen:!1},t}return Object(s.a)(n,e),Object(a.a)(n,[{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"render",value:function(){return c.a.createElement(m.l,{className:"decaf-companies__filter"},c.a.createElement(m.j,{md:"3",className:"my-2"},c.a.createElement(m.k,{name:"company",placeholder:"Company",value:this.props.searchValue,onChange:this.props.handleSearchChange})),c.a.createElement(m.j,{md:"3",className:"my-2"},c.a.createElement(S.a,{isMulti:!0,options:this.props.data.fields,onChange:this.props.handleFieldChange,placeholder:"Industry"})),c.a.createElement(m.j,{md:"3",className:"my-2"},c.a.createElement(S.a,{isMulti:!0,options:this.props.data.positions,onChange:this.props.handlePositionChange,placeholder:"Work Type"})),c.a.createElement(m.j,{md:"3",className:"my-2"},c.a.createElement(S.a,{isMulti:!0,options:this.props.data.workAuths,onChange:this.props.handleWorkAuthChange,placeholder:"Work Auth"})))}}]),n}(l.Component),v=function(e){function n(e){var t;Object(i.a)(this,n),(t=Object(r.a)(this,Object(o.a)(n).call(this,e))).createCompanyRows=function(e,n){for(var t=0,i=0,a=[];t<n;){var r=c.a.createElement("div",{className:"decaf-companies__container"},c.a.createElement("div",{className:"card-deck-wrapper"},c.a.createElement(m.e,null,e.slice(i,i+3).map(function(e){return c.a.createElement(f,{name:e.Organization,positions:e["Position Types"],field:Object(d.a)(e["Industry Field"]),nationalities:e["Work Authorizations"],description:""})}))));a.push(r),t+=1,i+=3}return a},t.filterCompaniesByKeys=function(e,n,t){return e.filter(function(e){if(0===n.length)return!0;var i=!0,a=!1,r=void 0;try{for(var o,s=n[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var l=o.value;if(l=l.trim(),"Work Authorizations"===t){if(e["Work Authorizations"].includes(l))return!0}else if("Position Types"===t){if(e["Position Types"].includes(l))return!0}else if("Industry Field"==t&&e["Industry Field"].has(l))return!0}}catch(c){a=!0,r=c}finally{try{i||null==s.return||s.return()}finally{if(a)throw r}}return!1})},t.filterCompaniesBySearchText=function(e,n){return e.filter(function(e){return 0===e.Organization.toLowerCase().indexOf(n)})},t.handleFieldChange=t.handleFieldChange.bind(Object(h.a)(Object(h.a)(t))),t.handlePositionChange=t.handlePositionChange.bind(Object(h.a)(Object(h.a)(t))),t.handleWorkAuthChange=t.handleWorkAuthChange.bind(Object(h.a)(Object(h.a)(t))),t.handleSearchChange=t.handleSearchChange.bind(Object(h.a)(Object(h.a)(t)));var a=C.companies,s=["U.S. Citizen","U.S. Permanent Resident","DACA/Other","International Student Visa"],l=["Part-Time","Full-Time","Internship"],u=!0,p=!1,g=void 0;try{for(var y,S=a[Symbol.iterator]();!(u=(y=S.next()).done);u=!0){for(var E=y.value,v=E["Work Authorizations"],z=E["Position Types"],O=E["Industry Field"],A=[],I=[],k=0;k<s.length;k++){var b=s[k];-1!==v.indexOf(b)&&A.push(b)}for(var F=0;F<l.length;F++){var P=l[F];-1!==z.indexOf(P)&&I.push(P)}E["Work Authorizations"]=A,E["Position Types"]=I,"string"===typeof E["Industry Field"]&&(E["Industry Field"]=new Set(O.split(",").map(function(e){return e.trim()})))}}catch(U){p=!0,g=U}finally{try{u||null==S.return||S.return()}finally{if(p)throw g}}var T=t.filterDropdowns(a);return t.state={companies:a,rows:Math.ceil(a.length/4),dropdownValues:T,filters:{positions:[],fields:[],workAuths:[],search:""}},t}return Object(s.a)(n,e),Object(a.a)(n,[{key:"filterDropdowns",value:function(e){for(var n={},t=["U.S. Citizen","U.S. Permanent Resident","DACA/Other","International Student Visa"],i={},a=0;a<t.length;a++){var r=t[a];i[r]={value:r,label:r[0].toUpperCase()+r.substr(1),count:0}}for(var o=["Part-Time","Full-Time","Internship"],s={},l=0;l<o.length;l++){var c=o[l];s[c]={value:c,label:c[0].toUpperCase()+c.substr(1),count:0}}var u=!0,d=!1,h=void 0;try{for(var p,m=e[Symbol.iterator]();!(u=(p=m.next()).done);u=!0){var g=p.value,y=g["Industry Field"],f=g["Work Authorizations"],C=g["Position Types"],S=!0,E=!1,v=void 0;try{for(var z,O=y[Symbol.iterator]();!(S=(z=O.next()).done);S=!0){var A=z.value;void 0===n[A=A.trim()]?n[A]={value:A,label:A[0].toUpperCase()+A.substr(1),count:1}:n[A].count+=1}}catch(P){E=!0,v=P}finally{try{S||null==O.return||O.return()}finally{if(E)throw v}}for(var I=0;I<t.length;I++){var k=t[I];-1!==f.indexOf(k)&&(i[k].count+=1)}for(var b=0;b<o.length;b++){var F=o[b];-1!==C.indexOf(F)&&(s[F].count+=1)}}}catch(P){d=!0,h=P}finally{try{u||null==m.return||m.return()}finally{if(d)throw h}}return{fields:Object.values(n).sort(function(e,n){return e.label<n.label?-1:1}),positions:Object.values(s),workAuths:Object.values(i)}}},{key:"handleFieldChange",value:function(e,n){var t=e.map(function(e){return e.value});this.setState({filters:Object(u.a)({},this.state.filters,{fields:t})})}},{key:"handleSearchChange",value:function(e){var n=Object(u.a)({},this.state.filters,{search:e.target.value.toLowerCase()});this.setState({filters:n})}},{key:"handlePositionChange",value:function(e,n){var t=e.map(function(e){return e.value}),i=Object(u.a)({},this.state.filters,{positions:t});this.setState({filters:i})}},{key:"handleWorkAuthChange",value:function(e,n){var t=e.map(function(e){return e.value}),i=Object(u.a)({},this.state.filters,{workAuths:t});this.setState({filters:i})}},{key:"renderKey",value:function(){return c.a.createElement(c.a.Fragment,null,["U.S. Citizen","U.S. Permanent Resident","DACA/Other","International Student Visa"].map(function(e){return c.a.createElement("div",{className:"col-md-3 d-flex align-items-center justify-content-center"},c.a.createElement("span",{className:"decaf-company__keyname"},e,"\xa0"),c.a.createElement(y,{name:e}))}))}},{key:"componentDidMount",value:function(){window.scroll(0,0)}},{key:"render",value:function(){var e,n=this.state,t=n.companies,i=n.filters;e=this.filterCompaniesByKeys(t,i.workAuths,"Work Authorizations"),e=this.filterCompaniesByKeys(e,i.positions,"Position Types"),e=this.filterCompaniesBySearchText(e,i.search),e=(e=this.filterCompaniesByKeys(e,i.fields,"Industry Field")).sort(function(e,n){return e.Organization.toLowerCase()<n.Organization.toLowerCase()?-1:1});var a=Math.ceil(e.length/3);return c.a.createElement("div",{className:"decaf-companies"},c.a.createElement("div",{className:"decaf-companies__head"},"Companies Attending ",c.a.createElement(p.a,{to:"/decaf"},"Decaf 2020")),c.a.createElement("div",{className:"decaf-companies__filterbar"},c.a.createElement(E,{data:this.state.dropdownValues,handleFieldChange:this.handleFieldChange,handlePositionChange:this.handlePositionChange,handleWorkAuthChange:this.handleWorkAuthChange,handleSearchChange:this.handleSearchChange,searchValue:this.state.filters.search}),c.a.createElement("div",{className:"row mb-4 decaf-companies__key"},this.renderKey())),this.createCompanyRows(e,a))}}]),n}(c.a.Component),z=function(e){function n(){return Object(i.a)(this,n),Object(r.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(v,null))}}]),n}(c.a.Component);n.default=z}}]);
//# sourceMappingURL=9.04663d7a.chunk.js.map
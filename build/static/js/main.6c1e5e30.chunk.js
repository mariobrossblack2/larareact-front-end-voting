(this.webpackJsonpreactvoting=this.webpackJsonpreactvoting||[]).push([[0],{110:function(e,a,t){},114:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(50),c=t.n(r),o=(t(61),t(24)),s=t(2),l=t(11),m=t(12),u=t(14),d=t(13),p=t(16),h=t.n(p),g=(t(31),t(15)),v=t.n(g),f=t(21),b=t(55),k=t(63),E=t(64),N=t(65),y="https://evotingreact.betechdeveloper.com/admin/public",w=y+"/api/",j=t(18),x=t.n(j),O=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e))._handleFormChange=function(e){var a=Object(b.a)({},n.state.form);a[e.target.name]=e.target.value,n.setState({form:a})},n._handleFormSubmit=function(){""==n.state.form.token?n.setState({messageErr:"Harap masukan token"}):n._authLogin()},n._authLogin=Object(f.a)(v.a.mark((function e(){var a,t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post(w+"login",n.state.form);case 3:a=e.sent,"success"==(t=a.data).status?(console.log(t),localStorage.setItem("token",t.results.token),n.props.history.push("/voting")):n.setState({messageErr:t.message}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),n.state={form:{token:""},messageErr:"",redirect:"/voting"},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props),h.a.init({once:!0,easing:"slide"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row","data-aos":"zoom-in","data-aos-duration":"700","data-aos-delay":"50"},i.a.createElement("div",{className:"col-md-6 pt-5 mt-2"},i.a.createElement("span",{className:"title"},"evoting app"),i.a.createElement("br",null),i.a.createElement("span",{className:"subtitle mt-1 mb-2"},"Selamat datang di aplikasi evoting silahkan login untuk memilih"),i.a.createElement("div",{className:"row mt-3"},i.a.createElement("div",{className:"col"},i.a.createElement("input",{type:"text",name:"token",onChange:this._handleFormChange,id:"",className:"form-control",placeholder:"Masukan token disini",value:this.state.form.token}),i.a.createElement("small",{className:"text-danger"},this.state.messageErr)),i.a.createElement("div",null,i.a.createElement("button",{className:"btn btn-primary mr-2",onClick:this._handleFormSubmit},"Masuk")))),i.a.createElement("div",{className:"col-md-6 pt-5 text-center"},i.a.createElement("img",{src:k,alt:"",className:"img-fluid","data-aos":"zoom-in","data-aos-duration":"700","data-aos-delay":"50"}))))}}]),t}(n.Component),_=Object(s.f)(O),C=t(35),S=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{style:{marginTop:-30}},i.a.createElement("img",{src:E,alt:""})),i.a.createElement("div",{className:"bg-biru"},i.a.createElement("div",{className:"container pb-5"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-4"},i.a.createElement("img",{src:N,alt:"",className:"img-fluid rounded-circle img-thumbnail "})),i.a.createElement("div",{className:"col-md-8"},i.a.createElement("span",{className:"titlename text-white"},"halo ! saya fikri suheri"),i.a.createElement("p",{className:"text-white"},"Saya masih seorang junior programmer lulusan SMK tahun 2020, saat ini saya membutuhkan lowongan pekerjaan di bidang programming apabila Bapak/Ibu berniat untuk mempekerjakan saya bisa kontak whatsapp saya ",i.a.createElement("a",{href:" https://api.whatsapp.com/send?phone=6281222627526"},"Disini"),". Saya juga menerima pemesanan pembuatan aplikasi silahkan di cek portofolio saya  di bawah ini"),i.a.createElement("a",{target:"_blank",href:"https://www.instagram.com/suhericode/",className:"mr-4"},i.a.createElement(C.a,{icon:["fab","instagram"],size:"6x"})),i.a.createElement("a",{target:"_blank",href:"https://github.com/fikrisuheri"},i.a.createElement(C.a,{icon:["fab","github"],size:"6x"})))))))}}]),t}(n.Component),M=t(51),B=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){h.a.init({once:!0,easing:"slide"})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(M.Sugar,{background:"#1e2125",color:"#0f4c75",time:1e3}),i.a.createElement(_,null),i.a.createElement(S,null))}}]),t}(n.Component),L=(t(110),t(28)),z=t.n(L);function I(){return i.a.createElement("div",{className:"col-md-3 col-sm-4"},i.a.createElement("div",{className:"card mb-4"},i.a.createElement("div",{className:"card-body"},i.a.createElement(z.a,{count:1,height:125,width:125,circle:!0}),i.a.createElement(z.a,{count:1,height:25,className:"mt-3"}),i.a.createElement(z.a,{count:1,height:150,className:"mt-3"}))))}function P(e){var a=e.name,t=(e.id,e.avatar),n=e.onClick,r=e.onClickVisi;return i.a.createElement("div",{className:"col-md-3"},i.a.createElement("div",{className:"card mb-4 p-3","data-aos":"zoom-in","data-aos-duration":"700","data-aos-delay":"50"},i.a.createElement("img",{className:"card-img-top rounded-circle img-fluid",src:y+"/storage/"+t}),i.a.createElement("div",{className:"card-body"},i.a.createElement("h5",{className:"card-title text-uppercase"},a),i.a.createElement("button",{className:"btn btn-secondary btn-block",onClick:r},"Lihat Visi Misi"),i.a.createElement("button",{className:"btn btn-primary btn-block",onClick:n},"Pilih ",a))))}var D=t(37),F=t.n(D),V=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e))._cekLogin=function(){var e=n.state.token;""!==e&&null!==e||n.props.history.push("/")},n._getKandidat=Object(f.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(w+"kandidat");case 3:a=e.sent,n.setState({kandidat:a.data.results,isLoading:!1}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),n._confirmPilihan=function(e,a){F.a.fire({title:"Yakin Memilih "+a,text:"Suara yang anda pilih dijamin kerahasiaannya !",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ya, Pilih "+a+" !",cancelButtonText:"Batalkan !"}).then((function(a){a.value&&n._postPilihan(e)}))},n._postPilihan=function(){var e=Object(f.a)(v.a.mark((function e(a){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={token:localStorage.getItem("token"),kandidat_id:a},e.next=4,x.a.post(w+"voting",t);case 4:"success"==e.sent.data.status&&(localStorage.removeItem("token"),n.props.history.go("/")),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),n._showVisiMisi=function(e,a,t,n){return F.a.fire({title:e,html:t+n,imageUrl:y+"/storage/"+a,imageWidth:200,imageHeight:200,imageAlt:"Custom image"})},n.state={token:localStorage.getItem("token"),kandidat:[],isLoading:!0},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this._cekLogin(),this._getKandidat(),h.a.init({once:!0,easing:"slide"})}},{key:"render",value:function(){var e=this,a=this.state;return i.a.createElement("div",null,i.a.createElement("div",{className:"container text-center mt-4"},i.a.createElement("h3",{className:"title","data-aos":"zoom-in","data-aos-duration":"700","data-aos-delay":"50"},"Daftar Kandidat Evoting"),i.a.createElement("div",{className:"row mt-4"},a.isLoading?i.a.createElement(i.a.Fragment,null,i.a.createElement(I,null),i.a.createElement(I,null),i.a.createElement(I,null),i.a.createElement(I,null)):a.kandidat.map((function(a,t){return i.a.createElement(P,{name:a.name,avatar:a.avatar,onClick:function(){return e._confirmPilihan(a.id,a.name)},onClickVisi:function(){return e._showVisiMisi(a.name,a.avatar,a.visi,a.misi)}})})))))}}]),t}(n.Component);function K(){return i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement(s.c,null,i.a.createElement(s.a,{path:"/",exact:!0,component:B}),i.a.createElement(s.a,{path:"/voting",component:V}))))}t(112),t(113);var T=t(23),W=t(54),H=t(38);function J(){return i.a.createElement(K,null)}T.b.add(W.a,H.a,H.b);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,a,t){},56:function(e,a,t){e.exports=t(114)},61:function(e,a,t){},63:function(e,a,t){e.exports=t.p+"static/media/vote.8db06df2.svg"},64:function(e,a,t){e.exports=t.p+"static/media/waves.e609e916.svg"},65:function(e,a,t){e.exports=t.p+"static/media/avatar.f3f6c03a.jpeg"}},[[56,1,2]]]);
//# sourceMappingURL=main.6c1e5e30.chunk.js.map
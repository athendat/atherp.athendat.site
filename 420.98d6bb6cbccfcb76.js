"use strict";(self.webpackChunkatherp=self.webpackChunkatherp||[]).push([[420],{7231:(Z,T,a)=>{a.d(T,{C:()=>c});var o=a(520),m=a(2340),C=a(5e3);const u=m.N.API_URL;let c=(()=>{class s{constructor(l){this._httpClient=l}uploadImage(l,h){const g=new FormData;return g.append("image",h,h.name),this._httpClient.post(`${u}/cloudinary/upload/${l}`,g)}removeImage(l,h){const g=h.slice(h.indexOf(l),h.length).split(".")[0],_=(new o.LE).set("public_id",g);return this._httpClient.delete(`${u}/cloudinary/remove`,{params:_})}}return s.\u0275fac=function(l){return new(l||s)(C.LFG(o.eN))},s.\u0275prov=C.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},4062:(Z,T,a)=>{a.d(T,{i:()=>o});class o{constructor(C){this.slug=this._slugGenerator(C)}_slugGenerator(C){return C.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace("  "," ").replace(" ","-")}}},9784:(Z,T,a)=>{a.d(T,{h:()=>E});var o=a(7261),m=a(5e3),C=a(9808),u=a(2494),c=a(5245);function s(l,h){if(1&l&&m._UZ(0,"mat-icon",3),2&l){const g=m.oxw();m.Q6J("svgIcon",g.svgIcon)}}let E=(()=>{class l{constructor(g){this.data=g,this.message="",this.title="",this.svgIcon="",this.type="success",this.appearance="fill",this.message=g.message,this.title=g.title,this.svgIcon=g.svgIcon,this.type=g.type,g.appearance&&(this.appearance=g.appearance)}}return l.\u0275fac=function(g){return new(g||l)(m.Y36(o.qD))},l.\u0275cmp=m.Xpm({type:l,selectors:[["ath-snackbar"]],decls:5,vars:5,consts:[[3,"type","appearance"],["class","icon-size-5","fuseAlertIcon","",3,"svgIcon",4,"ngIf"],["fuseAlertTitle",""],["fuseAlertIcon","",1,"icon-size-5",3,"svgIcon"]],template:function(g,_){1&g&&(m.TgZ(0,"fuse-alert",0),m.YNc(1,s,1,1,"mat-icon",1),m.TgZ(2,"span",2),m._uU(3),m.qZA(),m._uU(4),m.qZA()),2&g&&(m.Q6J("type",_.type)("appearance",_.appearance),m.xp6(1),m.Q6J("ngIf",_.svgIcon),m.xp6(2),m.Oqu(_.title),m.xp6(1),m.hij(" ",_.message,"\n"))},dependencies:[C.O5,u.W,c.Hw],styles:[".snack-alert-success[_ngcontent-%COMP%]{background-color:#39b54a!important;color:#fff}.snack-alert-warning[_ngcontent-%COMP%]{background-color:#f59e0b!important;color:#fff}.snack-alert-error[_ngcontent-%COMP%]{background-color:#ff2828!important;color:#fff}"]}),l})()},2491:(Z,T,a)=>{a.d(T,{L:()=>m});var o=a(3075);class m{static isEmptyInputValue(u){return null==u||0===u.length}static mustMatch(u,c){return s=>{const E=s.get(u),l=s.get(c);if(!E||!l||(l.hasError("mustMatch")&&(delete l.errors.mustMatch,l.updateValueAndValidity()),this.isEmptyInputValue(l.value)||E.value===l.value))return null;const h={mustMatch:"Las contrase\xf1a no coinciden."};return l.setErrors(h),h}}static strongPassWord(u,c,s,E,l){return h=>{const g=h.value;if(!g)return null;const _=!u||/[A-Z]+/.test(g),t=!c||/[a-z]+/.test(g),f=!s||/[0-9]+/.test(g),A=!E||!/^[a-zA-Z0-9]+$/.test(g);return _&&t&&f&&A&&g.length>=l?null:{password:"La contrase\xf1a no cumple con los est\xe1ndares de seguridad requeridos"}}}static onlyNumber(u){return c=>{const s=c.get(u);if(!s||!s.value||(s.hasError("onlyNumber")&&(delete s.errors.mustMatch,s.updateValueAndValidity()),/^[a-zA-Z0-9]+$/.test(s.value.toString())))return null;const l={onlyNumber:"Solo se admiten n\xfameros."};return s.setErrors(l),l}}static strongPasWordPattern(){return o.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)}static emailPattern(){return o.kI.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")}static onlyNumbersPattern(){return o.kI.pattern("^[0-9]*$")}static onlyAlphabetsWithAccentPattern(){return o.kI.pattern("^[a-zA-Z \xe1\xe9\xed\xf3\xfa\xf1\xfc]*$")}static onlyAlphabetsPattern(){return o.kI.pattern("^[a-zA-Z ]*$")}static validateIdNumber(){return u=>{if(!u)return null;let c=u.value;if(!c)return null;void 0!==u.value.idNumber&&(c=u.value.idNumber);const s=parseInt(c.substring(0,2),10),E=parseInt(c.substring(2,4),10)-1,l=parseInt(c.substring(4,6),10),h=new Date(s,E,l);if(h.getFullYear().toString().substring(2,4)===s.toString()&&h.getMonth()===E&&h.getDate()===l)return null;const _={validateIdNumber:"El n\xfamero de identidad introducido es incorrecto"};return u.setErrors(_),_}}static validFullName(u){return c=>{const s=c.get(u);if(!s||!u||(s.hasError("validFullName")&&(delete s.errors.validFullName,s.updateValueAndValidity()),this._isEmptyInputValue(s.value))||s.value.trim().split(" ").length>1)return null;const E={validFullName:"El nombre completo deber\xe1 tener al menos un nombre y un apellido"};return s.setErrors(E),E}}static _isEmptyInputValue(u){return null==u||0===u.length}}},3967:(Z,T,a)=>{a.d(T,{P:()=>g});var o=a(520),m=a(2340),C=a(8505),u=a(4004),c=a(5714),s=a(6978),E=a(5e3),l=a(5620);const h=m.N.API_URL;let g=(()=>{class _{constructor(f,A){this._httpClient=f,this.store=A}getContacts(f=0,A=20,x="name",I="asc",D="",L=!1){const P=(new o.LE).append("page",f).append("size",A).append("sort",x).append("order",I).append("search",D);return this._httpClient.get(`${h}/contacts/`,{params:P}).pipe((0,C.b)(b=>{this.store.dispatch((0,c.Jr)({pagination:b.pagination})),this.store.dispatch(L?(0,s.MU)({contacts:b.dataArr}):(0,s.WT)({contacts:b.dataArr}))}))}searchContacts(f){return this._httpClient.get(`${h}/contacts/search/${f}`).pipe((0,u.U)(A=>A.dataArr))}getContactById(f){return this._httpClient.get(`${h}/contacts/${f}`).pipe((0,C.b)(A=>{this.store.dispatch((0,s.sy)({contact:A.contact}))}))}createContact(f){return this._httpClient.post(`${h}/contacts`,f).pipe((0,C.b)(A=>{this.store.dispatch((0,s.rE)({contact:A.data}))}))}updateContact(f){return this._httpClient.patch(`${h}/contacts/${f._id}`,f).pipe((0,C.b)(A=>{this.store.dispatch((0,s.Tk)({contact:A.data}))}))}deleteContact(f){return this._httpClient.delete(`${h}/contacts/${f}`).pipe((0,C.b)(()=>{this.store.dispatch((0,s.zY)({id:f}))}))}}return _.\u0275fac=function(f){return new(f||_)(E.LFG(o.eN),E.LFG(l.yh))},_.\u0275prov=E.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},6365:(Z,T,a)=>{a.d(T,{g:()=>Tt});var o=a(3075),m=a(8966),C=a(9646),u=a(7579),c=a(2722),s=a(8372),E=a(8675),l=a(3900),h=a(4787),g=a(4062),_=a(2491),t=a(5e3),f=a(1158),A=a(3967),x=a(5620),I=a(9808),D=a(1079),L=a(508),P=a(7423),b=a(5245),F=a(7322),y=a(7531),U=a(4107),N=a(7238);function k(n,r){1&n&&(t.TgZ(0,"h2",7),t._uU(1,"Agregar contacto"),t.qZA())}function B(n,r){1&n&&(t.TgZ(0,"h2",7),t._uU(1,"Editar contacto"),t.qZA())}function J(n,r){if(1&n&&(t.TgZ(0,"mat-option",15)(1,"div",16),t._uU(2),t.qZA()()),2&n){const e=r.$implicit;t.Q6J("value",e),t.xp6(2),t.gL8(" ",e.name," ",e.lastname1," ",e.lastname2," | ",e.phoneNumbers[0].phoneNumber," | ",e.emails[0].email," | ",e.idNumber," ")}}function Q(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",8)(1,"mat-form-field",9),t._UZ(2,"input",10)(3,"mat-icon",11),t.TgZ(4,"mat-autocomplete",12,13),t.NdJ("optionSelected",function(p){t.CHM(e);const v=t.oxw();return t.KtG(v.fillContactForm(p))}),t.YNc(6,J,3,7,"mat-option",14),t.ALo(7,"async"),t.qZA()()()}if(2&n){const e=t.MAs(5),i=t.oxw();t.xp6(2),t.Q6J("formControl",i.searchInputControl)("matAutocomplete",e)("maxlength",255)("placeholder","Busque por los campos, seleccione y rellene el formulario"),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:search"),t.xp6(1),t.Q6J("displayWith",i.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(7,7,i.filteredContacts))}}function q(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre del empleado es obligatorio. "),t.qZA())}function R(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre del empleado debe contener entre 3 y 255 caracteres. "),t.qZA())}function W(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre del empleado no debe contener n\xfameros. "),t.qZA())}function K(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El primer apellido del empleado es obligatorio. "),t.qZA())}function Y(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El primer apellido del empleado debe contener entre 3 y 255 caracteres. "),t.qZA())}function $(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El primer apellido del empleado no debe contener n\xfameros. "),t.qZA())}function w(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El segundo apellido del empleado es obligatorio. "),t.qZA())}function S(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El segundo apellido del empleado debe contener entre 3 y 255 caracteres. "),t.qZA())}function G(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El segundo apellido del empleado no debe contener n\xfameros. "),t.qZA())}function V(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El cargo del contacto es obligatorio. "),t.qZA())}function z(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El cargo del contacto debe contener entre 3 y 255 caracteres. "),t.qZA())}function j(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El n\xfamero de identificaci\xf3n debe poseer 11 d\xedgitos. "),t.qZA())}function H(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El n\xfamero de identidad debe poseer solo n\xfameros. "),t.qZA())}function X(n,r){1&n&&(t.TgZ(0,"mat-label"),t._uU(1,"Tel\xe9fonos"),t.qZA())}function tt(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"mat-option",15)(2,"span",45),t._UZ(3,"span",47),t.TgZ(4,"span",48),t._uU(5),t.qZA(),t.TgZ(6,"span",49),t._uU(7),t.qZA()()(),t.BQk()),2&n){const e=r.$implicit;t.xp6(1),t.Q6J("value",e.code),t.xp6(4),t.Oqu(e.name),t.xp6(2),t.Oqu(e.code)}}function et(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El n\xfamero de tel\xe9fono debe contener entre 7 y 8 d\xedgitos. "),t.qZA())}function ot(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El n\xfamero de tel\xe9fono debe poseer solo n\xfameros. "),t.qZA())}function nt(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El c\xf3digo sebe ser obligatorio. "),t.qZA())}function at(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El n\xfamero de tel\xe9fono es obligatorio. "),t.qZA())}function rt(n,r){1&n&&(t.TgZ(0,"mat-label"),t._uU(1,"Etiqueta"),t.qZA())}function it(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," La etiqueta debe contener entre 3 y 255 caracteres. "),t.qZA())}const M=function(n){return{"mt-6":n}};function st(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",52)(2,"button",53),t.NdJ("click",function(){t.CHM(e);const p=t.oxw().index,v=t.oxw(2);return t.KtG(v.removePhoneNumberField(p))}),t._UZ(3,"mat-icon",33),t.qZA()(),t.BQk()}if(2&n){const e=t.oxw().first;t.xp6(1),t.Q6J("ngClass",t.VKq(2,M,e)),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:trash")}}function lt(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"div",41)(2,"mat-form-field",42),t.YNc(3,X,2,0,"mat-label",6),t._UZ(4,"input",43),t.TgZ(5,"mat-select",44)(6,"mat-select-trigger")(7,"span",45)(8,"span",46),t._uU(9),t.qZA()()(),t.TgZ(10,"mat-option",15)(11,"span",45),t._UZ(12,"span",47),t.TgZ(13,"span",48),t._uU(14),t.ALo(15,"titlecase"),t.qZA(),t.TgZ(16,"span",49),t._uU(17),t.qZA()()(),t.YNc(18,tt,8,3,"ng-container",31),t.qZA(),t.YNc(19,et,2,0,"mat-error",6),t.YNc(20,ot,2,0,"mat-error",6),t.YNc(21,nt,2,0,"mat-error",6),t.YNc(22,at,2,0,"mat-error",6),t.qZA(),t.TgZ(23,"mat-form-field",50),t.YNc(24,rt,2,0,"mat-label",6),t._UZ(25,"mat-icon",26)(26,"input",51),t.YNc(27,it,2,0,"mat-error",6),t.qZA(),t.YNc(28,st,4,4,"ng-container",6),t.qZA(),t.BQk()),2&n){const e=r.$implicit,i=r.index,p=r.first,v=r.last,d=t.oxw(2);t.xp6(3),t.Q6J("ngIf",p),t.xp6(1),t.Q6J("type","tel")("formControl",e.get("phoneNumber"))("placeholder","Tel\xe9fono")("minlength",7)("maxlength",8),t.xp6(1),t.Q6J("formControl",e.get("stateCode")),t.xp6(4),t.Oqu(d.contactForm.get("phoneNumbers").value[i].stateCode),t.xp6(1),t.Q6J("value","+535"),t.xp6(4),t.Oqu(t.lcZ(15,25,"celular")),t.xp6(3),t.Oqu("+535"),t.xp6(1),t.Q6J("ngForOf",d.statesCodes)("ngForTrackBy",d.trackByFn),t.xp6(1),t.Q6J("ngIf",e.get("phoneNumber").hasError("minlength")||e.get("phoneNumber").hasError("maxlength")),t.xp6(1),t.Q6J("ngIf",e.get("phoneNumber").hasError("pattern")),t.xp6(1),t.Q6J("ngIf",e.get("stateCode").hasError("required")),t.xp6(1),t.Q6J("ngIf",e.get("phoneNumber").hasError("required")),t.xp6(2),t.Q6J("ngIf",p),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:tag"),t.xp6(1),t.Q6J("formControl",e.get("label"))("placeholder","Etiqueta")("minLength",3)("maxLength",255),t.xp6(1),t.Q6J("ngIf",e.get("label").hasError("maxlength")||e.get("label").hasError("minlength")),t.xp6(1),t.Q6J("ngIf",!(p&&v))}}function ct(n,r){1&n&&(t.TgZ(0,"mat-label"),t._uU(1,"Correos Electr\xf3nicos"),t.qZA())}function mt(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El correos electr\xf3nicos no posee un formato v\xe1lido. "),t.qZA())}function _t(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El correos electr\xf3nicos es obligatorio "),t.qZA())}function ut(n,r){1&n&&(t.TgZ(0,"mat-label"),t._uU(1,"Etiqueta"),t.qZA())}function gt(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," La etiqueta debe contener entre 3 y 255 caracteres. "),t.qZA())}function pt(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",52)(2,"button",56),t.NdJ("click",function(){t.CHM(e);const p=t.oxw().index,v=t.oxw(2);return t.KtG(v.removeEmailField(p))}),t._UZ(3,"mat-icon",33),t.qZA()(),t.BQk()}if(2&n){const e=t.oxw().first;t.xp6(1),t.Q6J("ngClass",t.VKq(2,M,e)),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:trash")}}function dt(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"div",54)(2,"mat-form-field",42),t.YNc(3,ct,2,0,"mat-label",6),t._UZ(4,"mat-icon",26)(5,"input",55),t.YNc(6,mt,2,0,"mat-error",6),t.YNc(7,_t,2,0,"mat-error",6),t.qZA(),t.TgZ(8,"mat-form-field",50),t.YNc(9,ut,2,0,"mat-label",6),t._UZ(10,"mat-icon",26)(11,"input",51),t.YNc(12,gt,2,0,"mat-error",6),t.qZA(),t.YNc(13,pt,4,4,"ng-container",6),t.qZA(),t.BQk()),2&n){const e=r.$implicit,i=r.first,p=r.last;t.xp6(3),t.Q6J("ngIf",i),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:mail"),t.xp6(1),t.Q6J("formControl",e.get("email"))("spellcheck",!1),t.xp6(1),t.Q6J("ngIf",e.get("email").hasError("email")),t.xp6(1),t.Q6J("ngIf",e.get("email").hasError("required")),t.xp6(2),t.Q6J("ngIf",i),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:tag"),t.xp6(1),t.Q6J("formControl",e.get("label"))("placeholder","Etiqueta")("minLength",3)("maxLength",255),t.xp6(1),t.Q6J("ngIf",e.get("label").hasError("maxlength")||e.get("label").hasError("minlength")),t.xp6(1),t.Q6J("ngIf",!(i&&p))}}function ht(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," La direcci\xf3n debe contener entre 3 y 255 caracteres. "),t.qZA())}function ft(n,r){if(1&n&&(t.TgZ(0,"mat-option",15),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function Ct(n,r){if(1&n&&(t.TgZ(0,"mat-option",15),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.Q6J("value",e.city),t.xp6(1),t.hij(" ",e.city," ")}}const xt=function(n,r){return{"mt-8":n,"mt-4":r}};function Et(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",17)(1,"div",18)(2,"form",19)(3,"span",20),t._uU(4,"Informaci\xf3n General "),t.qZA(),t.TgZ(5,"div",21)(6,"div",22)(7,"mat-form-field",23)(8,"mat-label"),t._uU(9,"Nombre"),t.qZA(),t._UZ(10,"input",24),t.YNc(11,q,2,0,"mat-error",6),t.YNc(12,R,2,0,"mat-error",6),t.YNc(13,W,2,0,"mat-error",6),t.qZA()(),t.TgZ(14,"div",22)(15,"mat-form-field",23)(16,"mat-label"),t._uU(17,"Primer Apellido"),t.qZA(),t._UZ(18,"input",25),t.YNc(19,K,2,0,"mat-error",6),t.YNc(20,Y,2,0,"mat-error",6),t.YNc(21,$,2,0,"mat-error",6),t.qZA()(),t.TgZ(22,"div",22)(23,"mat-form-field",23)(24,"mat-label"),t._uU(25,"Segundo Apellido"),t.qZA(),t._UZ(26,"input",25),t.YNc(27,w,2,0,"mat-error",6),t.YNc(28,S,2,0,"mat-error",6),t.YNc(29,G,2,0,"mat-error",6),t.qZA()(),t.TgZ(30,"div",22)(31,"mat-form-field",23)(32,"mat-label"),t._uU(33,"Cargo"),t.qZA(),t._UZ(34,"input",25),t.YNc(35,V,2,0,"mat-error",6),t.YNc(36,z,2,0,"mat-error",6),t.qZA()(),t.TgZ(37,"div",22)(38,"mat-form-field",23)(39,"mat-label"),t._uU(40,"N\xfamero de identidad"),t.qZA(),t._UZ(41,"mat-icon",26)(42,"input",27),t.YNc(43,j,2,0,"mat-error",6),t.YNc(44,H,2,0,"mat-error",6),t.qZA()()(),t.TgZ(45,"span",20),t._uU(46,"Informaci\xf3n de contacto"),t.qZA(),t.TgZ(47,"div",28)(48,"div",29)(49,"div",30),t.YNc(50,lt,29,27,"ng-container",31),t.qZA(),t.TgZ(51,"div",32),t.NdJ("click",function(){t.CHM(e);const p=t.oxw();return t.KtG(p.addPhoneNumberField())}),t._UZ(52,"mat-icon",33),t.TgZ(53,"span",34),t._uU(54,"Agregar tel\xe9fono"),t.qZA()()(),t.TgZ(55,"div",29)(56,"div",30),t.YNc(57,dt,14,14,"ng-container",31),t.qZA(),t.TgZ(58,"div",32),t.NdJ("click",function(){t.CHM(e);const p=t.oxw();return t.KtG(p.addEmailField())}),t._UZ(59,"mat-icon",33),t.TgZ(60,"span",34),t._uU(61,"Agregar correo electr\xf3nico"),t.qZA()()()(),t.TgZ(62,"span",20),t._uU(63,"Domicilio"),t.qZA(),t.TgZ(64,"div",21)(65,"div",22)(66,"mat-form-field",23)(67,"mat-label"),t._uU(68,"Direcci\xf3n"),t.qZA(),t._UZ(69,"mat-icon",26)(70,"input",35),t.YNc(71,ht,2,0,"mat-error",6),t.qZA()(),t.TgZ(72,"div",22)(73,"mat-form-field",23)(74,"mat-label"),t._uU(75,"Provincia"),t.qZA(),t.TgZ(76,"mat-select",36),t.YNc(77,ft,2,2,"mat-option",37),t.qZA(),t._UZ(78,"mat-icon",38),t.qZA()(),t.TgZ(79,"div",22)(80,"mat-form-field",39)(81,"mat-label"),t._uU(82,"Municipio"),t.qZA(),t.TgZ(83,"mat-select",36),t.YNc(84,Ct,2,2,"mat-option",37),t.qZA(),t._UZ(85,"mat-icon",38),t.qZA()(),t.TgZ(86,"div",22)(87,"mat-form-field",39)(88,"mat-label"),t._uU(89,"Pa\xeds"),t.qZA(),t.TgZ(90,"mat-select",36)(91,"mat-option",40),t._uU(92,"Cuba"),t.qZA()(),t._UZ(93,"mat-icon",38),t.qZA()()()()()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngClass",t.WLB(60,xt,"add"!==e.data.dialogMode,"add"===e.data.dialogMode))("formGroup",e.contactForm)("autocomplete","off"),t.xp6(8),t.Q6J("type","text")("formControlName","name")("minlength",3)("maxlength",255)("placeholder","Nombre del negocio"),t.xp6(1),t.Q6J("ngIf",e.contactForm.get("name").hasError("required")),t.xp6(1),t.Q6J("ngIf",e.contactForm.get("name").hasError("maxlength")||e.contactForm.get("name").hasError("minlength")),t.xp6(1),t.Q6J("ngIf",e.contactForm.get("name").hasError("pattern")),t.xp6(5),t.Q6J("type","text")("formControlName","lastname1")("minlength",3)("maxlength",255),t.xp6(1),t.Q6J("ngIf",e.contactForm.get("lastname1").hasError("required")),t.xp6(1),t.Q6J("ngIf",e.contactForm.get("lastname1").hasError("maxlength")||e.contactForm.get("lastname2").hasError("minlength")),t.xp6(1),t.Q6J("ngIf",e.contactForm.get("lastname1").hasError("pattern")),t.xp6(5),t.Q6J("type","text")("formControlName","lastname2")("minlength",3)("maxlength",255),t.xp6(1),t.Q6J("ngIf",e.contactForm.get("lastname2").hasError("required")),t.xp6(1),t.Q6J("ngIf",e.contactForm.get("lastname2").hasError("maxlength")||e.contactForm.get("lastname2").hasError("minlength")),t.xp6(1),t.Q6J("ngIf",e.contactForm.get("lastname2").hasError("pattern")),t.xp6(5),t.Q6J("type","text")("formControlName","charge")("minlength",3)("maxlength",255),t.xp6(1),t.Q6J("ngIf",e.contactForm.get("charge").hasError("required")),t.xp6(1),t.Q6J("ngIf",e.contactForm.get("charge").hasError("charge")||e.contactForm.get("lastname2").hasError("minlength")),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:identification"),t.xp6(1),t.Q6J("type","text")("formControlName","idNumber")("maxlength",11)("minlength",11),t.xp6(1),t.Q6J("ngIf",e.contactForm.get("idNumber").hasError("maxlength")||e.contactForm.get("idNumber").hasError("minlength")),t.xp6(1),t.Q6J("ngIf",e.contactForm.get("idNumber").hasError("pattern")),t.xp6(6),t.Q6J("ngForOf",e.contactForm.get("phoneNumbers").controls)("ngForTrackBy",e.trackByFn),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:plus-circle"),t.xp6(5),t.Q6J("ngForOf",e.contactForm.get("emails").controls)("ngForTrackBy",e.trackByFn),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:plus-circle"),t.xp6(10),t.Q6J("svgIcon","heroicons_solid:home"),t.xp6(1),t.Q6J("type","text")("formControlName","address")("minLength",3)("maxlength",255),t.xp6(1),t.Q6J("ngIf",e.contactForm.get("address").hasError("maxlength")||e.contactForm.get("address").hasError("minlength")),t.xp6(5),t.Q6J("formControlName","state"),t.xp6(1),t.Q6J("ngForOf",e.states)("ngForTrackBy",e.trackByFn),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:map"),t.xp6(5),t.Q6J("formControlName","city"),t.xp6(1),t.Q6J("ngForOf",e.cities)("ngForTrackBy",e.trackByFn),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:location-marker"),t.xp6(5),t.Q6J("formControlName","country"),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:globe")}}const O=function(n){return{"cursor-not-allowed":n}};function It(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",59),t.NdJ("click",function(){t.CHM(e);const p=t.oxw(2);return t.KtG(p.updateContact())}),t._uU(2," Actualizar "),t.qZA(),t.BQk()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("color","primary")("matDialogClose","confirmed")("disabled",e.contactForm.invalid)("ngClass",t.VKq(4,O,e.contactForm.invalid))}}function vt(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",59),t.NdJ("click",function(){t.CHM(e);const p=t.oxw(2);return t.KtG(p.createContact())}),t._uU(2," Agregar "),t.qZA(),t.BQk()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("color","primary")("matDialogClose","confirmed")("disabled",e.contactForm.invalid)("ngClass",t.VKq(4,O,e.contactForm.invalid))}}function At(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"div",57),t.ynx(2),t.TgZ(3,"button",58),t._uU(4," Cancelar "),t.qZA(),t.BQk(),t.YNc(5,It,3,6,"ng-container",6),t.YNc(6,vt,3,6,"ng-container",6),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("matDialogClose","cancelled"),t.xp6(2),t.Q6J("ngIf","edit"===e.data.dialogMode),t.xp6(1),t.Q6J("ngIf","add"===e.data.dialogMode)}}let Tt=(()=>{class n{constructor(e,i,p,v,d,Dt,Zt){this.data=e,this._dialogRef=i,this._changeDetectorRef=p,this._formBuilder=v,this._locationService=d,this._contactService=Dt,this.store=Zt,this.dialogMode="view",this.cities=[],this.user$=(0,C.of)(null),this.states=[],this.statesCodes=[],this.searchInputControl=new o.p4,this._unsubscribeAll=new u.x}ngOnInit(){this.user$=this.store.select(h.rk),this.user$.subscribe(e=>{this.user=e,this._changeDetectorRef.markForCheck()}),this._locationService.states$.pipe((0,c.R)(this._unsubscribeAll)).subscribe(e=>{this.states=e,this._changeDetectorRef.markForCheck()}),this._locationService.statesCodes$.pipe((0,c.R)(this._unsubscribeAll)).subscribe(e=>{this.statesCodes=e,this._changeDetectorRef.markForCheck()}),this.filteredContacts=this.searchInputControl.valueChanges.pipe((0,c.R)(this._unsubscribeAll),(0,s.b)(300),(0,E.O)(""),(0,l.w)(e=>e&&e.length>5?this._contactService.searchContacts(e):(0,C.of)([]))),this.contactForm=this._formBuilder.group({_id:[""],merchantId:["000000000000000000000000",[o.kI.required]],userId:[this.user._id,[o.kI.required]],name:["",[o.kI.required,o.kI.minLength(3),o.kI.maxLength(255),_.L.onlyAlphabetsWithAccentPattern()]],lastname1:["",[o.kI.required,o.kI.minLength(3),o.kI.maxLength(255),_.L.onlyAlphabetsWithAccentPattern()]],lastname2:["",[o.kI.minLength(3),o.kI.maxLength(255),_.L.onlyAlphabetsWithAccentPattern()]],idNumber:["",[o.kI.maxLength(11),o.kI.minLength(11),_.L.onlyNumbersPattern()]],charge:["",[o.kI.required,o.kI.minLength(3),o.kI.maxLength(255)]],slug:[""],emails:this._formBuilder.array([]),phoneNumbers:this._formBuilder.array([]),address:["",[o.kI.minLength(3),o.kI.maxLength(255)]],country:[{value:"Cuba",disabled:!0}],state:[""],city:[""]}),this.contactForm.get("state").valueChanges.pipe((0,c.R)(this._unsubscribeAll)).subscribe(e=>{this._getCitiesByState(e),this._changeDetectorRef.markForCheck()}),this.fillForm(this.data.dialogMode,this.data.contact)}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}addEmailField(){const e=this._formBuilder.group({email:["",[o.kI.required,o.kI.email,o.kI.maxLength(255)]],label:["",[o.kI.minLength(3),o.kI.maxLength(255)]]});this.contactForm.get("emails").push(e),this._changeDetectorRef.markForCheck()}removeEmailField(e){this.contactForm.get("emails").removeAt(e),this._changeDetectorRef.markForCheck()}addPhoneNumberField(){const e=this._formBuilder.group({stateCode:["",[o.kI.required]],phoneNumber:["",[o.kI.required,o.kI.minLength(7),o.kI.maxLength(8),_.L.onlyNumbersPattern()]],label:["",[o.kI.minLength(3),o.kI.maxLength(255)]]});this.contactForm.get("phoneNumbers").push(e),this._changeDetectorRef.markForCheck()}removePhoneNumberField(e){this.contactForm.get("phoneNumbers").removeAt(e),this._changeDetectorRef.markForCheck()}fillContactForm(e){const i=e.option.value;this.contactForm.patchValue(i),this.contactForm.get("merchantId").setValue(i.merchantId._id),this.contactForm.get("emails").clear(),this.contactForm.get("phoneNumbers").clear();const p=[];i.emails.forEach(d=>{p.push(this._formBuilder.group({email:[d.email,[o.kI.required,o.kI.email,o.kI.maxLength(255)]],label:[d.label,[o.kI.minLength(3),o.kI.maxLength(255)]]}))}),p.forEach(d=>{this.contactForm.get("emails").push(d)});const v=[];i.phoneNumbers.forEach(d=>{v.push(this._formBuilder.group({stateCode:[d.stateCode,[o.kI.required]],phoneNumber:[d.phoneNumber,[o.kI.required,o.kI.minLength(7),o.kI.maxLength(8),_.L.onlyNumbersPattern()]],label:[d.label,[o.kI.minLength(3),o.kI.maxLength(255)]]}))}),v.forEach(d=>{this.contactForm.get("phoneNumbers").push(d)}),this._changeDetectorRef.markForCheck()}createContact(){const e=this.contactForm.getRawValue();e.slug=new g.i(e.name).slug,this.closeDialog(e)}updateContact(){const e=this.contactForm.getRawValue();e.slug=new g.i(e.name).slug,this.closeDialog(e)}trackByFn(e,i){return i.id||e}displayFn(e){return(e&&e.name?e.name+" "+(e.lastname1?e.lastname1:"")+" "+(e.lastname2?e.lastname2:""):"").trim()}_getCitiesByState(e){this._locationService.getCitiesByState(e).subscribe(i=>{this.cities=i,this._changeDetectorRef.markForCheck()})}fillForm(e,i){if("add"===e){const p=[];p.push(this._formBuilder.group({email:["",[o.kI.required,o.kI.email,o.kI.maxLength(255)]],label:["",[o.kI.minLength(3),o.kI.maxLength(255)]]})),p.forEach(d=>{this.contactForm.get("emails").push(d)});const v=[];v.push(this._formBuilder.group({stateCode:["+535",[o.kI.required]],phoneNumber:["",[o.kI.required,o.kI.minLength(7),o.kI.maxLength(8),_.L.onlyNumbersPattern()]],label:["",[o.kI.minLength(3),o.kI.maxLength(255)]]})),v.forEach(d=>{this.contactForm.get("phoneNumbers").push(d)})}else{this._getCitiesByState(i.state),this.contactForm.get("emails").clear(),this.contactForm.get("phoneNumbers").clear(),this.contactForm.patchValue(i),this.contactForm.get("merchantId").setValue(i.merchantId);const p=[];i.emails.length>0?i.emails.forEach(d=>{p.push(this._formBuilder.group({email:[d.email,[o.kI.required,o.kI.email,o.kI.maxLength(255)]],label:[d.label,[o.kI.minLength(3),o.kI.maxLength(255)]]}))}):p.push(this._formBuilder.group({email:["",[o.kI.required,o.kI.email,o.kI.maxLength(255)]],label:["",[o.kI.minLength(3),o.kI.maxLength(255)]]})),p.forEach(d=>{this.contactForm.get("emails").push(d)});const v=[];i.phoneNumbers.length>0?i.phoneNumbers.forEach(d=>{v.push(this._formBuilder.group({stateCode:[d.stateCode,[o.kI.required]],phoneNumber:[d.phoneNumber,[o.kI.required,o.kI.minLength(7),o.kI.maxLength(8),_.L.onlyNumbersPattern()]],label:[d.label,[o.kI.minLength(3),o.kI.maxLength(255)]]}))}):v.push(this._formBuilder.group({stateCode:["+535",[o.kI.required]],phoneNumber:["",[o.kI.required,o.kI.minLength(7),o.kI.maxLength(8),_.L.onlyNumbersPattern()]],label:["",[o.kI.minLength(3),o.kI.maxLength(255)]]})),v.forEach(d=>{this.contactForm.get("phoneNumbers").push(d)}),this._changeDetectorRef.markForCheck()}}closeDialog(e){this._dialogRef.close(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.WI),t.Y36(m.so),t.Y36(t.sBO),t.Y36(o.qu),t.Y36(f.a),t.Y36(A.P),t.Y36(x.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["contact-dialog"]],decls:10,vars:5,consts:[[1,"relative","flex","flex-col","w-full","h-full","overflow-y-auto"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400",4,"ngIf"],["class","w-full flex justify-center  mt-4 mb-4 sm:mt-8 sm:mb-8",4,"ngIf"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","w-full overflow-y-auto",4,"ngIf"],[4,"ngIf"],[1,"text-2xl","text-gray-400"],[1,"w-full","flex","justify-center","mt-4","mb-4","sm:mt-8","sm:mb-8"],[1,"fuse-mat-no-subscript","fuse-mat-rounded","fuse-mat-bold","w-full","max-w-[80%]","sm:max-w-120"],["matInput","",3,"formControl","matAutocomplete","maxlength","placeholder"],["matPrefix","",3,"svgIcon"],["autoActiveFirstOption","",3,"displayWith","optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"overflow-x-auto"],[1,"w-full","overflow-y-auto"],[1,"flex"],[1,"w-full",3,"ngClass","formGroup","autocomplete"],[1,"text-gray-400"],[1,"grid","sm:grid-cols-2","gap-y-3","gap-x-4","border-t-2","sm:col-span-2","pt-8","pb-8","pl-4","pr-4"],[1,"sm:col-span-1"],[1,"w-full"],["matInput","","required","",3,"type","formControlName","minlength","maxlength","placeholder"],["matInput","","required","",3,"type","formControlName","minlength","maxlength"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["matInput","",3,"type","formControlName","maxlength","minlength"],[1,"grid","sm:grid-cols-2","gap-y-6","border-t-2","sm:col-span-2","pt-8","pb-8","pl-4","pr-4"],[1,"sm:col-span-2"],[1,""],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"inline-flex","items-center","px-4","-ml-4","rounded","cursor-pointer","group",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2","font-medium","text-secondary","group-hover:underline"],["matInput","",3,"type","formControlName","minLength","maxlength"],[3,"formControlName"],[3,"value",4,"ngFor","ngForOf","ngForTrackBy"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],[1,"w-full","fuse-mat-no-subscript"],["value","Cuba"],[1,"relative","flex","flex-col","sm:flex-row"],[1,"flex-auto"],["matInput","",3,"type","formControl","placeholder","minlength","maxlength"],["matPrefix","",1,"mr-1.5",3,"formControl"],[1,"flex","items-center"],[1,"sm:mx-0.5","font-medium","text-default"],[1,"w-6","h-4","overflow-hidden"],[1,"ml-2"],[1,"ml-2","font-medium"],[1,"flex-auto","w-full","mt-6","sm:mt-0","sm:max-w-50","sm:ml-4"],["matInput","",3,"formControl","placeholder","minLength","maxLength"],[1,"flex","items-center","w-10","pl-2",3,"ngClass"],["mat-icon-button","","matTooltip","Eliminar tel\xe9fono",1,"w-8","h-8","min-h-8",3,"click"],[1,"flex","flex-col","sm:flex-row"],["matInput","",3,"formControl","spellcheck"],["mat-icon-button","","matTooltip","Eliminar",1,"w-8","h-8","min-h-8",3,"click"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","matDialogClose","disabled","ngClass","click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.ynx(1),t.TgZ(2,"div",1),t.YNc(3,k,2,0,"h2",2),t.YNc(4,B,2,0,"h2",2),t.qZA(),t.BQk(),t.YNc(5,Q,8,9,"div",3),t.TgZ(6,"div",4),t.ynx(7),t.YNc(8,Et,94,63,"div",5),t.BQk(),t.qZA(),t.YNc(9,At,7,3,"ng-container",6),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngIf","add"===i.data.dialogMode),t.xp6(1),t.Q6J("ngIf","edit"===i.data.dialogMode),t.xp6(1),t.Q6J("ngIf","add"===i.data.dialogMode),t.xp6(3),t.Q6J("ngIf","edit"===i.data.dialogMode||"add"),t.xp6(1),t.Q6J("ngIf","view"!==i.data.dialogMode))},dependencies:[I.mk,I.sg,I.O5,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.wO,o.nD,o.oH,o.sg,o.u,D.XC,D.ZL,L.ey,P.lW,m.ZT,b.Hw,F.TO,F.KE,F.hX,F.qo,y.Nt,U.gD,U.$L,N.gM,I.Ov,I.rS],encapsulation:2,changeDetection:0}),n})()},814:(Z,T,a)=>{a.d(T,{H5:()=>C,p6:()=>u});var o=a(5620);const m=c=>c.customers,C=(0,o.P1)(m,c=>c.customer),u=(0,o.P1)(m,c=>c.customers)},5600:(Z,T,a)=>{a.d(T,{v:()=>t});var o=a(520),m=a(1135),C=a(8505),u=a(4004),c=a(3821),s=a(2340),E=a(5714),l=a(5e3),h=a(1235),g=a(5620);const _=s.N.API_URL;let t=(()=>{class f{constructor(x,I,D){this._httpClient=x,this.rolesService=I,this.store=D,this._domains=new m.X([]),this._states=new m.X([])}get domains$(){return this._domains.asObservable()}get states$(){return this._states.asObservable()}getCustomers(x=0,I=10,D="name",L="asc",P="",b=!1){const F=(new o.LE).append("page",x).append("size",I).append("sort",D).append("order",L).append("search",P);return this._httpClient.get(`${_}/customers/`,{params:F}).pipe((0,C.b)(y=>{this.store.dispatch((0,E.Jr)({pagination:y.pagination})),this.store.dispatch(b?(0,c.AT)({customers:y.dataArr}):(0,c.Pb)({customers:y.dataArr}))}))}getCustomerById(x){return this._httpClient.get(`${_}/customers/${x}`).pipe((0,C.b)(I=>{this.store.dispatch((0,c.Xg)({customer:I.customer}))}))}createCustomer(x){return this._httpClient.post(`${_}/customers`,x).pipe((0,C.b)(I=>{this.store.dispatch((0,c.wK)({customer:I.data}))}))}updateCustomer(x){return this._httpClient.patch(`${_}/customers/${x._id}`,x).pipe((0,C.b)(I=>{this.store.dispatch((0,c.uG)({customer:I.data}))}))}deleteCustomer(x){return this._httpClient.delete(`${_}/customers/${x}`).pipe((0,C.b)(()=>{this.store.dispatch((0,c.PX)({id:x}))}))}getDomains(){return this._httpClient.get("assets/data/domains.json").pipe((0,u.U)(x=>x.sort((I,D)=>I.name.toLowerCase()<D.name.toLowerCase()?-1:I.name.toLowerCase()>D.name.toLowerCase()?1:void 0)),(0,C.b)(x=>{this._domains.next(x)}))}getDomainFiltered(x){return this._httpClient.get("assets/data/domains.json").pipe((0,u.U)(I=>I.filter(D=>D.name===x)))}}return f.\u0275fac=function(x){return new(x||f)(l.LFG(o.eN),l.LFG(h.cM),l.LFG(g.yh))},f.\u0275prov=l.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()}}]);
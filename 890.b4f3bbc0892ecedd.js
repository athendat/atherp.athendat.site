"use strict";(self.webpackChunkatherp=self.webpackChunkatherp||[]).push([[890],{2491:(b,Z,s)=>{s.d(Z,{L:()=>v});var d=s(3075);class v{static isEmptyInputValue(n){return null==n||0===n.length}static mustMatch(n,u){return o=>{const p=o.get(n),m=o.get(u);if(!p||!m||(m.hasError("mustMatch")&&(delete m.errors.mustMatch,m.updateValueAndValidity()),this.isEmptyInputValue(m.value)||p.value===m.value))return null;const c={mustMatch:"Las contrase\xf1a no coinciden."};return m.setErrors(c),c}}static strongPassWord(n,u,o,p,m){return c=>{const f=c.value;if(!f)return null;const a=!n||/[A-Z]+/.test(f),y=!u||/[a-z]+/.test(f),A=!o||/[0-9]+/.test(f),t=!p||!/^[a-zA-Z0-9]+$/.test(f);return a&&y&&A&&t&&f.length>=m?null:{password:"La contrase\xf1a no cumple con los est\xe1ndares de seguridad requeridos"}}}static onlyNumber(n){return u=>{const o=u.get(n);if(!o||!o.value||(o.hasError("onlyNumber")&&(delete o.errors.mustMatch,o.updateValueAndValidity()),/^[a-zA-Z0-9]+$/.test(o.value.toString())))return null;const m={onlyNumber:"Solo se admiten n\xfameros."};return o.setErrors(m),m}}static strongPasWordPattern(){return d.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)}static emailPattern(){return d.kI.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")}static onlyNumbersPattern(){return d.kI.pattern("^[0-9]*$")}static onlyAlphabetsWithAccentPattern(){return d.kI.pattern("^[a-zA-Z \xe1\xe9\xed\xf3\xfa\xf1\xfc]*$")}static onlyAlphabetsPattern(){return d.kI.pattern("^[a-zA-Z ]*$")}static validateIdNumber(){return n=>{if(!n)return null;let u=n.value;if(!u)return null;void 0!==n.value.idNumber&&(u=n.value.idNumber);const o=parseInt(u.substring(0,2),10),p=parseInt(u.substring(2,4),10)-1,m=parseInt(u.substring(4,6),10),c=new Date(o,p,m);if(c.getFullYear().toString().substring(2,4)===o.toString()&&c.getMonth()===p&&c.getDate()===m)return null;const a={validateIdNumber:"El n\xfamero de identidad introducido es incorrecto"};return n.setErrors(a),a}}static validFullName(n){return u=>{const o=u.get(n);if(!o||!n||(o.hasError("validFullName")&&(delete o.errors.validFullName,o.updateValueAndValidity()),this._isEmptyInputValue(o.value))||o.value.trim().split(" ").length>1)return null;const p={validFullName:"El nombre completo deber\xe1 tener al menos un nombre y un apellido"};return o.setErrors(p),p}}static _isEmptyInputValue(n){return null==n||0===n.length}}},8890:(b,Z,s)=>{s.r(Z),s.d(Z,{AuthSignUpModule:()=>O});var d=s(5357),v=s(7423),x=s(7446),n=s(7322),u=s(5245),o=s(7531),p=s(773),m=s(5804),c=s(7775),f=s(6338),a=s(3075),y=s(3844),A=s(2491),t=s(5e3),_=s(8951),w=s(9808);const T=["signUpNgForm"];function F(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre y apellidos son obligatorios. "),t.qZA())}function I(e,i){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const l=t.oxw();t.xp6(1),t.hij(" ",l.signUpForm.get("fullname").getError("validFullName")," ")}}function C(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre y apellidos no deben superar los 250 caracteres. "),t.qZA())}function N(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre y apellidos no deben poseer n\xfameros. "),t.qZA())}function S(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El correo electr\xf3nico es obligatorio "),t.qZA())}function E(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Por favor ingrese un correo electr\xf3nico v\xe1lido "),t.qZA())}function q(e,i){1&e&&t._UZ(0,"mat-icon",45),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function J(e,i){1&e&&t._UZ(0,"mat-icon",45),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function Q(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 20 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: ! " ? $ % ^ &. '),t.qZA())}function Y(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," La contrase\xf1a es obligatoria "),t.qZA())}function M(e,i){1&e&&t._UZ(0,"mat-icon",45),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function k(e,i){1&e&&t._UZ(0,"mat-icon",45),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function L(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," La contrase\xf1a es obligatoria "),t.qZA())}function P(e,i){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const l=t.oxw();t.xp6(1),t.hij(" ",l.signUpForm.get("pwd2").getError("mustMatch")," ")}}function j(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Debe aceptar los t\xe9rminos y condiciones del servicio. "),t.qZA())}function z(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1," Crear cuenta "),t.qZA())}function V(e,i){1&e&&t._UZ(0,"mat-progress-spinner",46),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const D=function(){return["/sign-in"]},B=[{path:"",component:(()=>{class e{constructor(l,r,g){this._authService=l,this._formBuilder=r,this._router=g,this.showAlert=!1,this.signUpFormSubmitted=!1,this.date=(new Date).valueOf()}ngOnInit(){this.signUpForm=this._formBuilder.group({fullname:["",[a.kI.required,a.kI.maxLength(255),A.L.onlyAlphabetsWithAccentPattern()]],email:["",[a.kI.required,a.kI.email]],pwd:["",[a.kI.required,a.kI.minLength(8),a.kI.maxLength(20),A.L.strongPasWordPattern()]],pwd2:["",[a.kI.required]],agreements:[!0,a.kI.requiredTrue]},{validators:[A.L.mustMatch("pwd","pwd2"),A.L.validFullName("fullname")]})}signUp(){if(this.signUpFormSubmitted=!0,this.signUpForm.invalid)return;const l=this.signUpForm.getRawValue(),r=l.fullname.split(" "),g=l.email.split("@",2),U={name:r.length>3?r[0].trim()+" "+r[1].trim():r[0].trim(),lastname:r.length>3?r[2].trim()+" "+r[3].trim():2===r.length?r[1].trim():r[1].trim()+" "+r[2].trim(),email:l.email.trim(),username:g[0]+this.date,pwd:l.pwd.trim(),agreements:l.agreements};this.signUpForm.disable(),this.showAlert=!1,this._authService.signUp(U).subscribe(h=>{this._router.navigateByUrl("/confirmation-required")},()=>{this.signUpForm.enable(),this.signUpForm.reset(),this.showAlert=!0})}acceptAgreements(){return!this.signUpForm.get("agreements").value&&this.signUpFormSubmitted}}return e.\u0275fac=function(l){return new(l||e)(t.Y36(_.e),t.Y36(a.qu),t.Y36(d.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-sign-up"]],viewQuery:function(l,r){if(1&l&&t.Gf(T,5),2&l){let g;t.iGM(g=t.CRH())&&(r.signUpNgForm=g.first)}},decls:90,vars:31,consts:[[1,"flex","flex-col","items-center","flex-auto","min-w-0","sm:flex-row","md:items-start","sm:justify-center","md:justify-start"],[1,"relative","items-center","justify-center","flex-auto","hidden","w-2/3","h-full","p-16","overflow-hidden","bg-gray-800","md:flex","lg:px-28","dark:border-l","bg-cover",2,"background-image","url('assets/images/auth/signup.jpg')"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","text-gray-700","-top-16","-right-16"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"relative","z-10","w-full","max-w-2xl","bg-gray-800","bg-opacity-30","p-10"],[1,"font-bold","leading-none","text-gray-100","text-7xl"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-100"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/team/anabel.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-100","ring-offset-gray-100"],["src","assets/images/team/frank.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-100","ring-offset-gray-100"],["src","assets/images/team/andiel.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-100","ring-offset-gray-100"],["src","assets/images/team/lazaro.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-100","ring-offset-gray-100"],[1,"ml-4","font-medium","tracking-tight","text-gray-100"],["href","https://athendat.site",1,"text-primary-500","hover:underline"],[1,"w-full","px-4","py-8","md:flex","md:items-center","md:justify-end","sm:w-auto","md:h-full","md:w-1/3","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card","lg:py-4"],[1,"w-full","mx-auto","max-w-80","sm:w-80","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","fullname","matInput","","required","",3,"formControlName","maxlength"],[4,"ngIf"],["id","email","matInput","",3,"formControlName"],["id","pwd","matInput","","type","password","required","",3,"formControlName","minlength","maxlength"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","pwd2","matInput","","type","password","required","",3,"formControlName"],["passwordField2",""],[1,"inline-flex","items-end","w-full","mt-1.5"],[3,"color","formControlName"],["href","https://athendat.site/#/terms","target","_blank",1,"ml-1","text-primary-500","hover:underline"],["href","https://athendat.site/#/privacy","target","_blank",1,"ml-1","text-primary-500","hover:underline"],["mat-flat-button","",1,"w-full","mt-6","fuse-mat-button-large",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(l,r){if(1&l){const g=t.EpF();t.TgZ(0,"div",0)(1,"div",1),t.O4$(),t.TgZ(2,"svg",2)(3,"g",3),t._UZ(4,"circle",4)(5,"circle",5),t.qZA()(),t.TgZ(6,"svg",6)(7,"defs")(8,"pattern",7),t._UZ(9,"rect",8),t.qZA()(),t._UZ(10,"rect",9),t.qZA(),t.kcU(),t.TgZ(11,"div",10)(12,"div",11)(13,"div"),t._uU(14,"Bienvenido a"),t.qZA(),t.TgZ(15,"div"),t._uU(16,"nuestra plataforma"),t.qZA()(),t.TgZ(17,"div",12),t._uU(18," Atherp es una plataforma de Planificaci\xf3n de Recursos Empresariales ERP, desarrollada para negocios cubanos, flexible, escalable y agradable, que logra una gesti\xf3n sencilla de los complejos temas contables. "),t.qZA(),t.TgZ(19,"div",13)(20,"div",14),t._UZ(21,"img",15)(22,"img",16)(23,"img",17)(24,"img",18),t.qZA(),t.TgZ(25,"div",19),t._uU(26," Para m\xe1s detalles consulte nuestra "),t.TgZ(27,"a",20),t._uU(28,"web"),t.qZA(),t._uU(29,". "),t.qZA()()()(),t.TgZ(30,"div",21)(31,"div",22)(32,"div",23),t._UZ(33,"img",24),t.qZA(),t.TgZ(34,"div",25),t._uU(35,"Registro"),t.qZA(),t.TgZ(36,"div",26)(37,"div"),t._uU(38,"\xbfYa tiene un cuenta?"),t.qZA(),t.TgZ(39,"a",27),t._uU(40," Iniciar Sesi\xf3n "),t.qZA()(),t.TgZ(41,"form",28)(42,"mat-form-field",29)(43,"mat-label"),t._uU(44,"Nombre y Apellidos"),t.qZA(),t._UZ(45,"input",30),t.YNc(46,F,2,0,"mat-error",31),t.YNc(47,I,2,1,"mat-error",31),t.YNc(48,C,2,0,"mat-error",31),t.YNc(49,N,2,0,"mat-error",31),t.qZA(),t.TgZ(50,"mat-form-field",29)(51,"mat-label"),t._uU(52,"Correo electr\xf3nico"),t.qZA(),t._UZ(53,"input",32),t.YNc(54,S,2,0,"mat-error",31),t.YNc(55,E,2,0,"mat-error",31),t.qZA(),t.TgZ(56,"mat-form-field",29)(57,"mat-label"),t._uU(58,"Contrase\xf1a"),t.qZA(),t._UZ(59,"input",33,34),t.TgZ(61,"button",35),t.NdJ("click",function(){t.CHM(g);const h=t.MAs(60);return t.KtG(h.type="password"===h.type?"text":"password")}),t.YNc(62,q,1,1,"mat-icon",36),t.YNc(63,J,1,1,"mat-icon",36),t.qZA(),t.YNc(64,Q,2,0,"mat-error",31),t.YNc(65,Y,2,0,"mat-error",31),t.qZA(),t.TgZ(66,"mat-form-field",29)(67,"mat-label"),t._uU(68,"Repita la contrase\xf1a"),t.qZA(),t._UZ(69,"input",37,38),t.TgZ(71,"button",35),t.NdJ("click",function(){t.CHM(g);const h=t.MAs(70);return t.KtG(h.type="password"===h.type?"text":"password")}),t.YNc(72,M,1,1,"mat-icon",36),t.YNc(73,k,1,1,"mat-icon",36),t.qZA(),t.YNc(74,L,2,0,"mat-error",31),t.YNc(75,P,2,1,"mat-error",31),t.qZA(),t.TgZ(76,"div",39)(77,"mat-checkbox",40)(78,"span"),t._uU(79,"Estoy de acuerdo con los"),t.qZA(),t.TgZ(80,"a",41),t._uU(81,"T\xe9rminos de Uso "),t.qZA(),t.TgZ(82,"span"),t._uU(83,"y la"),t.qZA(),t.TgZ(84,"a",42),t._uU(85,"Pol\xedtica de Privacidad "),t.qZA(),t.YNc(86,j,2,0,"mat-error",31),t.qZA()(),t.TgZ(87,"button",43),t.NdJ("click",function(){return r.signUp()}),t.YNc(88,z,2,0,"span",31),t.YNc(89,V,1,2,"mat-progress-spinner",44),t.qZA()()()()()}if(2&l){const g=t.MAs(60),U=t.MAs(70);t.xp6(39),t.Q6J("routerLink",t.DdM(30,D)),t.xp6(2),t.Q6J("formGroup",r.signUpForm),t.xp6(4),t.Q6J("formControlName","fullname")("maxlength",255),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("fullname").hasError("required")),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("fullname").hasError("validFullName")),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("fullname").hasError("maxlength")),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("fullname").hasError("pattern")),t.xp6(4),t.Q6J("formControlName","email"),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("email").hasError("required")),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("email").hasError("email")),t.xp6(4),t.Q6J("formControlName","pwd")("minlength",8)("maxlength",20),t.xp6(3),t.Q6J("ngIf","password"===g.type),t.xp6(1),t.Q6J("ngIf","text"===g.type),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("pwd").hasError("pattern")||r.signUpForm.get("pwd").hasError("minlength")),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("pwd").hasError("required")),t.xp6(4),t.Q6J("formControlName","pwd2"),t.xp6(3),t.Q6J("ngIf","password"===U.type),t.xp6(1),t.Q6J("ngIf","text"===U.type),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("pwd2").hasError("required")),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("pwd2").hasError("mustMatch")),t.xp6(2),t.Q6J("color","primary")("formControlName","agreements"),t.xp6(9),t.Q6J("ngIf",r.acceptAgreements()),t.xp6(1),t.Q6J("color","primary")("disabled",r.signUpForm.disabled),t.xp6(1),t.Q6J("ngIf",!r.signUpForm.disabled),t.xp6(1),t.Q6J("ngIf",r.signUpForm.disabled)}},dependencies:[d.yS,v.lW,x.oG,n.TO,n.KE,n.hX,n.R9,u.Hw,o.Nt,p.Ou,w.O5,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.wO,a.nD,a.sg,a.u],encapsulation:2,data:{animation:y.L}}),e})()}];let O=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(B),v.ot,x.p9,n.lN,u.Ps,o.c,p.Cq,m.J,c.fC,f.m]}),e})()}}]);
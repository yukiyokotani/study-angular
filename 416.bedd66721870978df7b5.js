(self.webpackChunkstudy_angular=self.webpackChunkstudy_angular||[]).push([[416],{416:(t,r,e)=>{"use strict";e.r(r),e.d(r,{FormModule:()=>G});var n=e(1116),a=e(2937),i=e(1041),u=e(4369),l=e(2797),s=e(7064),o=e(9024),d=e(6278),g=e(3070),Z=e(7307),m=e(9550),p=e(1690),c=e(4312);const h=t=>{const r=t.get("password"),e=t.get("verifyPassword");return r&&e&&r.value!==e.value?{notMatchPassword:!0}:null};class q{isErrorState(t,r){var e,n,a;return!0===(r&&r.submitted)&&null!==t&&(null!==t.errors||null!==(a=null===(n=null===(e=null==r?void 0:r.form)||void 0===e?void 0:e.errors)||void 0===n?void 0:n.notMatchPassword)&&void 0!==a&&a)}}const T=t=>{const r="YYYY/MM/DD",e=t.value;return"string"==typeof e&&c(e,r).format(r)===e?null:{invalidDate:!0}};var A=e(5366),v=e(5965);const _={provide:i.JU,useExisting:(0,A.Gpc)(()=>f),multi:!0};let f=(()=>{class t extends i.Fj{constructor(){super(...arguments),this.needEscapeCharacters=["/","\\","'",'"',".","*","+","?","^","$","-","|","(",")","{","}","{","}"],this.ngOnChange=t=>{let r=t;this._trimPattern&&(r=r.replace(this._trimPattern,"")),this.onChange(r.trim())},this.ngOnBlur=t=>{let r=t;this._trimPattern&&(r=r.replace(this._trimPattern,"")),this.writeValue(r.trim()),this.onTouched()}}set appTrimCustomValue(t){this._trimPattern=new RegExp(`(${t.reduce((t,r)=>`${t}|${this.needEscapeCharacters.includes(r)?"\\"+r:r}`,"")})+`,"g")}writeValue(t){"string"==typeof t&&(t=t.trim()),super.writeValue(t)}}return t.\u0275fac=function(){let r;return function(e){return(r||(r=A.n5z(t)))(e||t)}}(),t.\u0275dir=A.lG2({type:t,selectors:[["","appTrimCustomValue",""]],hostBindings:function(t,r){1&t&&A.NdJ("input",function(t){return r.ngOnChange(t.target.value)})("blur",function(t){return r.ngOnBlur(t.target.value)})},inputs:{appTrimCustomValue:"appTrimCustomValue"},features:[A._Bn([_]),A.qOj]}),t})();const U={provide:i.JU,useExisting:(0,A.Gpc)(()=>x),multi:!0};let x=(()=>{class t extends i.Fj{constructor(){super(...arguments),this.needEscapeCharacters=["/","\\","'",'"',".","*","+","?","^","$","-","|","(",")","{","}","{","}"],this.ngOnChange=t=>{let r=t;this._trimPattern&&(r=r.replace(this._trimPattern,"")),this.onChange(r.trim())},this.ngOnBlur=t=>{let r=t;this._trimPattern&&(r=r.replace(this._trimPattern,"")),this.writeValue(r.trim()),this.onTouched()}}set appTrimDate(t){this._trimPattern=new RegExp(`(${t.reduce((t,r)=>`${t}|${this.needEscapeCharacters.includes(r)?"\\"+r:r}`,"")})+`,"g")}writeValue(t){"string"==typeof t&&(t=t.trim()),super.writeValue(t)}}return t.\u0275fac=function(){let r;return function(e){return(r||(r=A.n5z(t)))(e||t)}}(),t.\u0275dir=A.lG2({type:t,selectors:[["","appTrimDate",""]],hostBindings:function(t,r){1&t&&A.NdJ("input",function(t){return r.ngOnChange(t.target.value)})("blur",function(t){return r.ngOnBlur(t.target.value)})},inputs:{appTrimDate:"appTrimDate"},features:[A._Bn([U]),A.qOj]}),t})();const y={provide:i.JU,useExisting:(0,A.Gpc)(()=>w),multi:!0};let w=(()=>{class t extends i.Fj{constructor(t,r,e,n){super(r,e,n),this.decimalPipe=t,this.needEscapeCharacters=["/","\\","'",'"',".","*","+","?","^","$","-","|","(",")","{","}","{","}"],this.ngOnChange=t=>{let r=t;this._trimPattern&&(r=r.replace(this._trimPattern,"")),this.onChange(r.trim())},this.ngOnFocus=t=>{let r=t;r=r.replace(/,/g,""),this.writeValue(r)},this.ngOnBlur=t=>{let r=t;this._trimPattern&&(r=r.replace(this._trimPattern,""));const e=this.decimalPipe.transform(r.trim(),"1.0-0");this.writeValue(e),this.onTouched()}}set appTrimNumber(t){this._trimPattern=new RegExp(`(${t.reduce((t,r)=>`${t}|${this.needEscapeCharacters.includes(r)?"\\"+r:r}`,"")})+`,"g")}writeValue(t){"string"==typeof t&&(t=t.trim()),super.writeValue(t)}}return t.\u0275fac=function(r){return new(r||t)(A.Y36(n.JJ),A.Y36(A.Qsj),A.Y36(A.SBq),A.Y36(i.ve))},t.\u0275dir=A.lG2({type:t,selectors:[["","appTrimNumber",""]],hostBindings:function(t,r){1&t&&A.NdJ("input",function(t){return r.ngOnChange(t.target.value)})("focus",function(t){return r.ngOnFocus(t.target.value)})("blur",function(t){return r.ngOnBlur(t.target.value)})},inputs:{appTrimNumber:"appTrimNumber"},features:[A._Bn([y,{provide:i.ve,useValue:null}]),A.qOj]}),t})();function b(t,r){1&t&&(A.TgZ(0,"div"),A._uU(1," \u30e6\u30fc\u30b6\u30fc\u540d\u306f\u5fc5\u9808\u9805\u76ee\u3067\u3059 "),A.qZA())}function O(t,r){1&t&&(A.TgZ(0,"div"),A._uU(1," 6\u6587\u5b57\u4ee5\u4e0a\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044 "),A.qZA())}function P(t,r){1&t&&(A.TgZ(0,"div"),A._uU(1," 12\u6587\u5b57\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044 "),A.qZA())}function C(t,r){if(1&t&&(A.TgZ(0,"mat-error"),A.YNc(1,b,2,0,"div",6),A.YNc(2,O,2,0,"div",6),A.YNc(3,P,2,0,"div",6),A.qZA()),2&t){const t=A.oxw();A.xp6(1),A.Q6J("ngIf",null==t.name||null==t.name.errors?null:t.name.errors.required),A.xp6(1),A.Q6J("ngIf",null==t.name||null==t.name.errors?null:t.name.errors.minlength),A.xp6(1),A.Q6J("ngIf",null==t.name||null==t.name.errors?null:t.name.errors.maxLength)}}function I(t,r){1&t&&(A.TgZ(0,"div"),A._uU(1," \u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u5fc5\u9808\u9805\u76ee\u3067\u3059 "),A.qZA())}function M(t,r){if(1&t&&(A.TgZ(0,"mat-error"),A.YNc(1,I,2,0,"div",6),A.qZA()),2&t){const t=A.oxw();A.xp6(1),A.Q6J("ngIf",null==t.password||null==t.password.errors?null:t.password.errors.required)}}function N(t,r){1&t&&(A.TgZ(0,"div"),A._uU(1," \u78ba\u8a8d\u7528\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u5fc5\u9808\u9805\u76ee\u3067\u3059 "),A.qZA())}function J(t,r){1&t&&(A.TgZ(0,"div"),A._uU(1," \u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u307e\u305b\u3093 "),A.qZA())}function F(t,r){if(1&t&&(A.TgZ(0,"mat-error"),A.YNc(1,N,2,0,"div",6),A.YNc(2,J,2,0,"div",6),A.qZA()),2&t){const t=A.oxw();A.xp6(1),A.Q6J("ngIf",null==t.verifyPassword||null==t.verifyPassword.errors?null:t.verifyPassword.errors.required),A.xp6(1),A.Q6J("ngIf",!(null!=t.verifyPassword&&null!=t.verifyPassword.errors&&t.verifyPassword.errors.required)&&(null==t.sampleForm.errors?null:t.sampleForm.errors.notMatchPassword))}}function S(t,r){1&t&&(A.TgZ(0,"div"),A._uU(1," \u8a95\u751f\u65e5\u306f\u5fc5\u9808\u9805\u76ee\u3067\u3059 "),A.qZA())}function Y(t,r){1&t&&(A.TgZ(0,"div"),A._uU(1," \u5b58\u5728\u3059\u308b\u65e5\u4ed8\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044 "),A.qZA())}function D(t,r){if(1&t&&(A.TgZ(0,"mat-error"),A.YNc(1,S,2,0,"div",6),A.YNc(2,Y,2,0,"div",6),A.qZA()),2&t){const t=A.oxw();A.xp6(1),A.Q6J("ngIf",null==t.birthday||null==t.birthday.errors?null:t.birthday.errors.required),A.xp6(1),A.Q6J("ngIf",!(null!=t.birthday&&null!=t.birthday.errors&&t.birthday.errors.required)&&(null==t.birthday||null==t.birthday.errors?null:t.birthday.errors.invalidDate))}}function Q(t,r){1&t&&(A.TgZ(0,"div"),A._uU(1," \u8caf\u91d1\u984d\u306f\u5fc5\u9808\u9805\u76ee\u3067\u3059 "),A.qZA())}function k(t,r){1&t&&(A.TgZ(0,"div"),A._uU(1," \u8caf\u91d1\u984d\u306f0\u4ee5\u4e0a\u306e\u6570\u5024\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044 "),A.qZA())}function V(t,r){1&t&&(A.TgZ(0,"div"),A._uU(1," \u8caf\u91d1\u984d\u306f1,000,000,000\u4ee5\u4e0b\u306e\u6570\u5024\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044 "),A.qZA())}function j(t,r){if(1&t&&(A.TgZ(0,"mat-error"),A.YNc(1,Q,2,0,"div",6),A.YNc(2,k,2,0,"div",6),A.YNc(3,V,2,0,"div",6),A.qZA()),2&t){const t=A.oxw();A.xp6(1),A.Q6J("ngIf",null==t.savings||null==t.savings.errors?null:t.savings.errors.required),A.xp6(1),A.Q6J("ngIf",null==t.savings||null==t.savings.errors?null:t.savings.errors.min),A.xp6(1),A.Q6J("ngIf",null==t.savings||null==t.savings.errors?null:t.savings.errors.max)}}const B=/^(\d{4})-(\d{2})-(\d{2})(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,$=[{path:"",component:(()=>{class t{constructor(){this.submittedData="",this.isSubmitted=!1,this.verifyPasswordFormErrorMatcher=new q,this.trimPattern=["-","^",",",".","\\"," "],this.dateChangeHandler=t=>{var r,e,n,a;console.log("change",t.target.value),t.target.value&&(null===(r=this.birthday)||void 0===r||r.setValue(this.formatISODate(null===(e=t.target.value)||void 0===e?void 0:e.toISOString())),null===(n=this.birthday)||void 0===n||n.markAsTouched(),null===(a=this.birthday)||void 0===a||a.markAsDirty())},this.dateInputHandler=t=>{var r,e,n,a;console.log("input",t.target.value),t.target.value&&(null===(r=this.birthday)||void 0===r||r.setValue(this.formatISODate(null===(e=t.target.value)||void 0===e?void 0:e.toISOString())),null===(n=this.birthday)||void 0===n||n.markAsTouched(),null===(a=this.birthday)||void 0===a||a.markAsDirty())},this.nameControl=new i.NI("",{validators:[i.kI.required,i.kI.minLength(6),i.kI.maxLength(12)],updateOn:"blur"}),this.passwordControl=new i.NI("",{validators:[i.kI.required],updateOn:"submit"}),this.verifyPasswordControl=new i.NI("",{validators:[i.kI.required],updateOn:"submit"}),this.birthdayControl=new i.NI("",{validators:[i.kI.required,T],updateOn:"blur"}),this.savingsControl=new i.NI("",{validators:[i.kI.required,i.kI.min(0),i.kI.max(1e9)],updateOn:"blur"}),this.sampleForm=new i.cw({name:this.nameControl,password:this.passwordControl,verifyPassword:this.verifyPasswordControl,birthday:this.birthdayControl,savings:this.savingsControl},{validators:h,updateOn:"submit"})}onSubmit(){console.log(this.sampleForm),this.isSubmitted=!0,this.sampleForm.invalid||(this.submittedData=JSON.stringify(this.sampleForm.value))}formatISODate(t){if(B.test(t)){const r=new Date(t);if(!isNaN(r.getTime()))return r.setMinutes(r.getMinutes()+540),null==r?void 0:r.toISOString().replace(B,"$1/$2/$3")}return t}get name(){return this.sampleForm.get("name")}get password(){return this.sampleForm.get("password")}get verifyPassword(){return this.sampleForm.get("verifyPassword")}get birthday(){return this.sampleForm.get("birthday")}get savings(){return this.sampleForm.get("savings")}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=A.Xpm({type:t,selectors:[["app-form"]],decls:248,vars:42,consts:[["fxLayout","column","fxLayoutGap","16px","fxLayoutAlign","center","fxFlex","80%","fxFlex.lt-sm","100%",1,"container"],[3,"formGroup","ngSubmit"],["inset",""],["fxLayout","row wrap","fxLayoutGap","8px grid"],["appearance","fill","fxFlex","calc(33% - 8px)","fxFlex.lt-md","calc(50% - 8px)","fxFlex.lt-sm","100%"],["matInput","","placeholder","\u30e6\u30fc\u30b6\u30fc\u540d","id","name","name","name","formControlName","name","required","",3,"minlength","maxLength","appTrimCustomValue"],[4,"ngIf"],["type","password","matInput","","placeholder","\u30d1\u30b9\u30ef\u30fc\u30c9","id","password","name","password","formControlName","password","required",""],["type","password","matInput","","placeholder","\u78ba\u8a8d\u7528\u30d1\u30b9\u30ef\u30fc\u30c9","id","verifyPassword","name","verifyPassword","formControlName","verifyPassword","required","",3,"errorStateMatcher"],["type","text","matInput","","placeholder","\u8a95\u751f\u65e5","id","birthday","name","birthday","required","","formControlName","birthday",3,"appTrimDate"],["type","hidden",3,"matDatepicker","dateChange","dateInput"],["matSuffix","",3,"for"],["picker",""],["type","tel","matInput","","placeholder","\u8caf\u91d1\u984d","id","savings","name","savings","formControlName","savings","required","",3,"appTrimNumber"],["align","end"],["mat-flat-button","","type","submit","color","primary"],["aria-hidden","false","aria-label","info icon"],["border","1"],["rowspan","6"],["rowspan","4"],["rowspan","5"],["rowspan","2"],[1,"submitted-data"]],template:function(t,r){if(1&t&&(A.TgZ(0,"div",0),A.TgZ(1,"div"),A.TgZ(2,"form",1),A.NdJ("ngSubmit",function(){return r.onSubmit()}),A.TgZ(3,"mat-card"),A.TgZ(4,"mat-card-title"),A._uU(5,"\u30d5\u30a9\u30fc\u30e0"),A.qZA(),A.TgZ(6,"mat-card-subtitle"),A._uU(7," \u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u306e\u5236\u5fa1\u3092\u52a0\u3048\u305f\u30d5\u30a9\u30fc\u30e0\u306e\u30b5\u30f3\u30d7\u30eb "),A.qZA(),A.TgZ(8,"mat-card-content"),A.TgZ(9,"p"),A._uU(10,"\u6982\u8981"),A.qZA(),A.TgZ(11,"ul"),A.TgZ(12,"li"),A._uU(13,"Custom Validatotion"),A.qZA(),A.TgZ(14,"ul"),A.TgZ(15,"li"),A._uU(16," \u8a95\u751f\u65e5\u306e\u30d5\u30a9\u30fc\u30e0\u3067\u300c\u6709\u52b9\u306a\u65e5\u4ed8\u304b\u3069\u3046\u304b\u300d\u306e\u5224\u5b9a\u306b\u5bfe\u3057\u3066\u5b9f\u88c5\u3002 "),A.qZA(),A.qZA(),A.TgZ(17,"li"),A._uU(18,"Cross-field Validation"),A.qZA(),A.TgZ(19,"ul"),A.TgZ(20,"li"),A._uU(21," \u300c\u30d1\u30b9\u30ef\u30fc\u30c9\u3068\u78ba\u8a8d\u7528\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u300d\u306e\u5224\u5b9a\u306b\u5bfe\u3057\u3066\u5b9f\u88c5\u3002 "),A.qZA(),A.qZA(),A.TgZ(22,"li"),A._uU(23," \u30c6\u30ad\u30b9\u30c8\u306e\u30c8\u30ea\u30df\u30f3\u30b0 "),A.TgZ(24,"ul"),A.TgZ(25,"li"),A._uU(26,"\u30e6\u30fc\u30b6\u30fc\u540d\u306e\u30d5\u30a9\u30fc\u30e0\u306b\u81ea\u4f5c\u3057\u305fDirective\u3067\u5b9f\u88c5"),A.qZA(),A.TgZ(27,"li"),A._uU(28," Directive\u306f\u5165\u529b\u5024\u304b\u3089\u6b21\u306e\u6587\u5b57\u3092\u53d6\u308a\u9664\u304d\u3001\u5148\u982d\u672b\u5c3e\u306e\u7a7a\u767d\u6587\u5b57\u3092\u30c8\u30ea\u30e0\u3059\u308b\u3002 ['-', '^', ',', '.', '\\\\', ' '] (\u8a2d\u5b9a\u53ef\u80fd) "),A.qZA(),A.qZA(),A.qZA(),A.TgZ(29,"li"),A._uU(30," \u8a95\u751f\u65e5\u306e\u5165\u529b "),A.TgZ(31,"ul"),A.TgZ(32,"li"),A._uU(33," MatDatePicker\u306fISO 8601\u5f62\u5f0f\u3067\u3057\u304b\u65e5\u4ed8\u3092\u7ba1\u7406\u3067\u304d\u306a\u3044\u305f\u3081\u3001hidden\u306einput\u3068\u7d44\u307f\u5408\u308f\u305b\u3066\u7ba1\u7406\u3059\u308b\u3002 "),A.qZA(),A.TgZ(34,"li"),A._uU(35," \u76f4\u63a5\u5229\u7528\u3057\u306a\u3044ISO 8601\u5f62\u5f0f\u306e\u65e5\u4ed8\u3092hidden\u306einput\u3067\u7ba1\u7406\u3059\u308b\u3002 "),A.qZA(),A.TgZ(36,"li"),A._uU(37," hidden\u306einput\u306b\u5bfe\u3059\u308bdateChange\u3092\u62fe\u3063\u3066\u3001formControl\u306bpatchValue\u3059\u308b\u3002 "),A.qZA(),A.TgZ(38,"li"),A._uU(39," formControl\u3092\u30d0\u30a4\u30f3\u30c9\u3057\u3066\u3044\u308b\uff08\u898b\u3048\u3066\u3044\u308b\uff09input\u306f\u5165\u529b\u3092Directive\u3067\u30c8\u30ea\u30e0\u3059\u308b\u3002 "),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A._UZ(40,"mat-divider",2),A.TgZ(41,"div",3),A.TgZ(42,"mat-form-field",4),A.TgZ(43,"mat-label"),A._uU(44,"\u30e6\u30fc\u30b6\u30fc\u540d"),A.qZA(),A._UZ(45,"input",5),A.TgZ(46,"mat-hint"),A._uU(47,"6\u6587\u5b57\u4ee5\u4e0a12\u6587\u5b57\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),A.qZA(),A.YNc(48,C,4,3,"mat-error",6),A.qZA(),A.TgZ(49,"mat-form-field",4),A.TgZ(50,"mat-label"),A._uU(51,"\u30d1\u30b9\u30ef\u30fc\u30c9"),A.qZA(),A._UZ(52,"input",7),A.YNc(53,M,2,1,"mat-error",6),A.qZA(),A.TgZ(54,"mat-form-field",4),A.TgZ(55,"mat-label"),A._uU(56,"\u78ba\u8a8d\u7528\u30d1\u30b9\u30ef\u30fc\u30c9"),A.qZA(),A._UZ(57,"input",8),A.YNc(58,F,3,2,"mat-error",6),A.qZA(),A.TgZ(59,"mat-form-field",4),A.TgZ(60,"mat-label"),A._uU(61,"\u8a95\u751f\u65e5"),A.qZA(),A._UZ(62,"input",9),A.TgZ(63,"input",10),A.NdJ("dateChange",function(t){return r.dateChangeHandler(t)})("dateInput",function(t){return r.dateInputHandler(t)}),A.qZA(),A._UZ(64,"mat-datepicker-toggle",11),A._UZ(65,"mat-datepicker",null,12),A.TgZ(67,"mat-hint"),A._uU(68,"YYYY/MM/DD"),A.qZA(),A.YNc(69,D,3,2,"mat-error",6),A.qZA(),A.TgZ(70,"mat-form-field",4),A.TgZ(71,"mat-label"),A._uU(72,"\u8caf\u91d1\u984d"),A.qZA(),A._UZ(73,"input",13),A.YNc(74,j,4,3,"mat-error",6),A.qZA(),A.qZA(),A.qZA(),A.TgZ(75,"mat-card-actions",14),A.TgZ(76,"button",15),A.TgZ(77,"mat-icon",16),A._uU(78,"send"),A.qZA(),A._uU(79," \u9001\u4fe1 "),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(80,"mat-card"),A.TgZ(81,"mat-card-title"),A._uU(82,"FormGroup\u3068FormControl\u306e\u5404\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u72b6\u614b"),A.qZA(),A.TgZ(83,"mat-card-content"),A.TgZ(84,"table",17),A.TgZ(85,"thead"),A.TgZ(86,"tr"),A.TgZ(87,"th"),A._uU(88,"\u9805\u76ee"),A.qZA(),A.TgZ(89,"th"),A._uU(90,"\u30d1\u30e9\u30e1\u30fc\u30bf"),A.qZA(),A.TgZ(91,"th"),A._uU(92,"\u5024"),A.qZA(),A.qZA(),A.qZA(),A.TgZ(93,"tbody"),A.TgZ(94,"tr"),A.TgZ(95,"td",18),A._uU(96,"\u30e6\u30fc\u30b6\u30fc\u540d"),A.qZA(),A.TgZ(97,"td"),A._uU(98,"\u5024"),A.qZA(),A.TgZ(99,"td"),A._uU(100),A.qZA(),A.qZA(),A.TgZ(101,"tr"),A.TgZ(102,"td"),A._uU(103,"valid"),A.qZA(),A.TgZ(104,"td"),A._uU(105),A.qZA(),A.qZA(),A.TgZ(106,"tr"),A.TgZ(107,"td"),A._uU(108,"touched"),A.qZA(),A.TgZ(109,"td"),A._uU(110),A.qZA(),A.qZA(),A.TgZ(111,"tr"),A.TgZ(112,"td"),A._uU(113,"dirty"),A.qZA(),A.TgZ(114,"td"),A._uU(115),A.qZA(),A.qZA(),A.TgZ(116,"tr"),A.TgZ(117,"td"),A._uU(118,"length >= 6"),A.qZA(),A.TgZ(119,"td"),A._uU(120),A.qZA(),A.qZA(),A.TgZ(121,"tr"),A.TgZ(122,"td"),A._uU(123,"length <= 12"),A.qZA(),A.TgZ(124,"td"),A._uU(125),A.qZA(),A.qZA(),A.TgZ(126,"tr"),A.TgZ(127,"td",19),A._uU(128,"\u30d1\u30b9\u30ef\u30fc\u30c9"),A.qZA(),A.TgZ(129,"td"),A._uU(130,"\u5024"),A.qZA(),A.TgZ(131,"td"),A._uU(132),A.qZA(),A.qZA(),A.TgZ(133,"tr"),A.TgZ(134,"td"),A._uU(135,"valid"),A.qZA(),A.TgZ(136,"td"),A._uU(137),A.qZA(),A.qZA(),A.TgZ(138,"tr"),A.TgZ(139,"td"),A._uU(140,"touched"),A.qZA(),A.TgZ(141,"td"),A._uU(142),A.qZA(),A.qZA(),A.TgZ(143,"tr"),A.TgZ(144,"td"),A._uU(145,"dirty"),A.qZA(),A.TgZ(146,"td"),A._uU(147),A.qZA(),A.qZA(),A.TgZ(148,"tr"),A.TgZ(149,"td",20),A._uU(150,"\u78ba\u8a8d\u7528\u30d1\u30b9\u30ef\u30fc\u30c9"),A.qZA(),A.TgZ(151,"td"),A._uU(152,"\u5024"),A.qZA(),A.TgZ(153,"td"),A._uU(154),A.qZA(),A.qZA(),A.TgZ(155,"tr"),A.TgZ(156,"td"),A._uU(157,"valid"),A.qZA(),A.TgZ(158,"td"),A._uU(159),A.qZA(),A.qZA(),A.TgZ(160,"tr"),A.TgZ(161,"td"),A._uU(162,"touched"),A.qZA(),A.TgZ(163,"td"),A._uU(164),A.qZA(),A.qZA(),A.TgZ(165,"tr"),A.TgZ(166,"td"),A._uU(167,"dirty"),A.qZA(),A.TgZ(168,"td"),A._uU(169),A.qZA(),A.qZA(),A.TgZ(170,"tr"),A.TgZ(171,"td"),A._uU(172,"\u30d1\u30b9\u30ef\u30fc\u30c9\u3068\u306e\u4e00\u81f4"),A.qZA(),A.TgZ(173,"td"),A._uU(174),A.qZA(),A.qZA(),A.TgZ(175,"tr"),A.TgZ(176,"td",19),A._uU(177,"\u8a95\u751f\u65e5"),A.qZA(),A.TgZ(178,"td"),A._uU(179,"\u5024"),A.qZA(),A.TgZ(180,"td"),A._uU(181),A.qZA(),A.qZA(),A.TgZ(182,"tr"),A.TgZ(183,"td"),A._uU(184,"valid"),A.qZA(),A.TgZ(185,"td"),A._uU(186),A.qZA(),A.qZA(),A.TgZ(187,"tr"),A.TgZ(188,"td"),A._uU(189,"touched"),A.qZA(),A.TgZ(190,"td"),A._uU(191),A.qZA(),A.qZA(),A.TgZ(192,"tr"),A.TgZ(193,"td"),A._uU(194,"dirty"),A.qZA(),A.TgZ(195,"td"),A._uU(196),A.qZA(),A.qZA(),A.TgZ(197,"tr"),A.TgZ(198,"td",18),A._uU(199,"\u8caf\u91d1\u984d"),A.qZA(),A.TgZ(200,"td"),A._uU(201,"\u5024"),A.qZA(),A.TgZ(202,"td"),A._uU(203),A.qZA(),A.qZA(),A.TgZ(204,"tr"),A.TgZ(205,"td"),A._uU(206,"valid"),A.qZA(),A.TgZ(207,"td"),A._uU(208),A.qZA(),A.qZA(),A.TgZ(209,"tr"),A.TgZ(210,"td"),A._uU(211,"touched"),A.qZA(),A.TgZ(212,"td"),A._uU(213),A.qZA(),A.qZA(),A.TgZ(214,"tr"),A.TgZ(215,"td"),A._uU(216,"dirty"),A.qZA(),A.TgZ(217,"td"),A._uU(218),A.qZA(),A.qZA(),A.TgZ(219,"tr"),A.TgZ(220,"td"),A._uU(221,">= 0"),A.qZA(),A.TgZ(222,"td"),A._uU(223),A.qZA(),A.qZA(),A.TgZ(224,"tr"),A.TgZ(225,"td"),A._uU(226,"<= 1,000,000,000"),A.qZA(),A.TgZ(227,"td"),A._uU(228),A.qZA(),A.qZA(),A.TgZ(229,"tr"),A.TgZ(230,"td",21),A._uU(231,"\u30d5\u30a9\u30fc\u30e0\u5168\u4f53"),A.qZA(),A.TgZ(232,"td"),A._uU(233,"\u9001\u4fe1\u6e08\u307f"),A.qZA(),A.TgZ(234,"td"),A._uU(235),A.qZA(),A.qZA(),A.TgZ(236,"tr"),A.TgZ(237,"td"),A._uU(238,"\u72b6\u614b"),A.qZA(),A.TgZ(239,"td"),A._uU(240),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(241,"mat-card"),A.TgZ(242,"mat-card-title"),A._uU(243,"\u9001\u4fe1\u3055\u308c\u305f\u5024"),A.qZA(),A.TgZ(244,"mat-card-content"),A.TgZ(245,"div",22),A.TgZ(246,"code"),A._uU(247),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA()),2&t){const t=A.MAs(66);A.xp6(2),A.Q6J("formGroup",r.sampleForm),A.xp6(43),A.Q6J("minlength",6)("maxLength",12)("appTrimCustomValue",r.trimPattern),A.xp6(3),A.Q6J("ngIf",r.sampleForm.touched||r.sampleForm.dirty||r.isSubmitted),A.xp6(5),A.Q6J("ngIf",r.isSubmitted),A.xp6(4),A.Q6J("errorStateMatcher",r.verifyPasswordFormErrorMatcher),A.xp6(1),A.Q6J("ngIf",r.isSubmitted),A.xp6(4),A.Q6J("appTrimDate",r.trimPattern),A.xp6(1),A.Q6J("matDatepicker",t),A.xp6(1),A.Q6J("for",t),A.xp6(5),A.Q6J("ngIf",r.sampleForm.touched||r.sampleForm.dirty||r.isSubmitted),A.xp6(4),A.Q6J("appTrimNumber",r.trimPattern),A.xp6(1),A.Q6J("ngIf",r.sampleForm.touched||r.sampleForm.dirty||r.isSubmitted),A.xp6(26),A.hij('"',null==r.name?null:r.name.value,'"'),A.xp6(5),A.Oqu(null==r.name?null:r.name.valid),A.xp6(5),A.Oqu(null==r.name?null:r.name.touched),A.xp6(5),A.Oqu(null==r.name?null:r.name.dirty),A.xp6(5),A.hij(" ",null==(null==r.name||null==r.name.errors?null:r.name.errors.minlength)," "),A.xp6(5),A.hij(" ",null==(null==r.name||null==r.name.errors?null:r.name.errors.maxlength)," "),A.xp6(7),A.hij('"',null==r.password?null:r.password.value,'"'),A.xp6(5),A.Oqu(null==r.password?null:r.password.valid),A.xp6(5),A.Oqu(null==r.password?null:r.password.touched),A.xp6(5),A.Oqu(null==r.password?null:r.password.dirty),A.xp6(7),A.hij('"',null==r.verifyPassword?null:r.verifyPassword.value,'"'),A.xp6(5),A.Oqu(null==r.verifyPassword?null:r.verifyPassword.valid),A.xp6(5),A.Oqu(null==r.verifyPassword?null:r.verifyPassword.touched),A.xp6(5),A.Oqu(null==r.verifyPassword?null:r.verifyPassword.dirty),A.xp6(5),A.Oqu(!(null!=r.sampleForm.errors&&r.sampleForm.errors.notMatchPassword)),A.xp6(7),A.hij('"',null==r.birthday?null:r.birthday.value,'"'),A.xp6(5),A.Oqu(null==r.birthday?null:r.birthday.valid),A.xp6(5),A.Oqu(null==r.birthday?null:r.birthday.touched),A.xp6(5),A.Oqu(null==r.birthday?null:r.birthday.dirty),A.xp6(7),A.hij('"',null==r.savings?null:r.savings.value,'"'),A.xp6(5),A.Oqu(null==r.savings?null:r.savings.valid),A.xp6(5),A.Oqu(null==r.savings?null:r.savings.touched),A.xp6(5),A.Oqu(null==r.savings?null:r.savings.dirty),A.xp6(5),A.hij(" ",null==(null==r.savings||null==r.savings.errors?null:r.savings.errors.min)," "),A.xp6(5),A.hij(" ",null==(null==r.savings||null==r.savings.errors?null:r.savings.errors.max)," "),A.xp6(7),A.Oqu(r.isSubmitted),A.xp6(5),A.Oqu(null==r.sampleForm?null:r.sampleForm.status),A.xp6(7),A.Oqu(r.submittedData)}},directives:[v.xw,v.SQ,v.Wh,v.yH,i._Y,i.JL,i.sg,l.a8,l.n5,l.$j,l.dn,d.d,g.KE,g.hX,m.Nt,i.Fj,i.JJ,i.u,i.Q7,i.wO,f,g.bx,n.O5,x,o.hl,o.nW,g.R9,o.Mq,w,l.hq,u.lW,Z.Hw,g.TO],styles:["[_nghost-%COMP%]{justify-content:center;margin:16px}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{margin-bottom:32px}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{margin-bottom:16px}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;border:1px #777}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#eee}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border-bottom:3px double #777}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{width:33.3%}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .submitted-data[_ngcontent-%COMP%]{width:100%;overflow:scroll}"]}),t})()}];let E=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=A.oAB({type:t}),t.\u0275inj=A.cJS({imports:[[p.Bz.forChild($)],p.Bz]}),t})(),G=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=A.oAB({type:t}),t.\u0275inj=A.cJS({providers:[n.JJ],imports:[[n.ez,E,a.o9,i.UX,i.u5,s.XK,o.FA,l.QW,d.t,u.ot,Z.Ps,m.c,g.lN,E]]}),t})()}}]);
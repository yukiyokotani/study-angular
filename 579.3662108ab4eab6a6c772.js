(self.webpackChunkstudy_angular=self.webpackChunkstudy_angular||[]).push([[579],{9579:(t,e,n)=>{"use strict";n.r(e),n.d(e,{NgComponentOutletModule:()=>f});var o=n(1116),s=n(1690),a=n(5366),r=n(8512);let p=(()=>{class t{constructor(){this.params$=new r.X(void 0)}get params(){return this.params$.getValue()}set params(t){this.params$.next(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),c=(()=>{class t{constructor(t){this.componentOutletParams=t}ngOnInit(){this.componentOutletParams.params$.subscribe(t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(p))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-test-child"]],decls:2,vars:0,template:function(t,e){1&t&&(a.TgZ(0,"p"),a._uU(1,"test-child works!"),a.qZA())},styles:[""]}),t})(),u=(()=>{class t{constructor(t){this.componentOutletParams=t}set appComponentOutletParams(t){this.componentOutletParams.params=t}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(p))},t.\u0275dir=a.lG2({type:t,selectors:[["","appComponentOutletParams",""]],inputs:{appComponentOutletParams:"appComponentOutletParams"},features:[a._Bn([{provide:p,useValue:new p}])]}),t})();function m(t,e){1&t&&a.GkF(0)}const l=[{path:"",component:(()=>{class t{constructor(){this.component=c,this.params={time:(new Date).toLocaleTimeString()}}ngOnInit(){setInterval(()=>{this.params={time:(new Date).toLocaleTimeString()}},2e3)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-ng-component-outlet"]],decls:4,vars:2,consts:[[3,"appComponentOutletParams"],[4,"ngComponentOutlet"]],template:function(t,e){1&t&&(a.TgZ(0,"p"),a._uU(1,"ng-component-outlet works!"),a.qZA(),a.TgZ(2,"div",0),a.YNc(3,m,1,0,"ng-container",1),a.qZA()),2&t&&(a.xp6(2),a.Q6J("appComponentOutletParams",e.params),a.xp6(1),a.Q6J("ngComponentOutlet",e.component))},directives:[u,o.$G],styles:[""]}),t})()}];let i=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[s.Bz.forChild(l)],s.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.ez,i]]}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7wo0":function(t,n,e){"use strict";e.r(n),e.d(n,"SettingsModule",(function(){return T}));var c=e("M0ag"),i=e("tyNb"),s=e("ey9i"),r=e("H+bZ"),a=e("ntpF"),o=e("fXoL"),l=e("1kSV"),b=e("3Pt+"),d=e("5eHb"),u=e("sYmb"),m=e("ofXK"),f=e("oZhZ"),g=e("ZOsW");function O(t,n){if(1&t&&(o.Wb(0,"div",4),o.Oc(1,"\n    "),o.Rb(2,"label",5),o.Oc(3,"\n    "),o.Wb(4,"div",6),o.Oc(5,"\n      "),o.Rb(6,"input",7),o.Oc(7,"\n    "),o.Vb(),o.Oc(8,"\n  "),o.Vb()),2&t){const t=o.mc(2);o.Cb(2),o.tc("translate",t.setting.Name)}}function p(t,n){if(1&t&&(o.Wb(0,"div",4),o.Oc(1,"\n    "),o.Rb(2,"label",5),o.Oc(3,"\n    "),o.Wb(4,"div",6),o.Oc(5,"\n      "),o.Rb(6,"input",7),o.Oc(7,"\n    "),o.Vb(),o.Oc(8,"\n  "),o.Vb()),2&t){const t=o.mc(2);o.Cb(2),o.tc("translate",t.setting.Name)}}function h(t,n){if(1&t&&(o.Wb(0,"div",4),o.Oc(1,"\n    "),o.Rb(2,"label",5),o.Oc(3,"\n    "),o.Wb(4,"div",6),o.Oc(5,"\n      "),o.Rb(6,"input",8),o.Oc(7,"\n    "),o.Vb(),o.Oc(8,"\n  "),o.Vb()),2&t){const t=o.mc(2);o.Cb(2),o.tc("translate",t.setting.Name)}}function v(t,n){if(1&t&&(o.Wb(0,"div",4),o.Oc(1,"\n    "),o.Rb(2,"label",5),o.Oc(3,"\n    "),o.Wb(4,"div",6),o.Oc(5,"\n      "),o.Rb(6,"input",9),o.Oc(7,"\n    "),o.Vb(),o.Oc(8,"\n  "),o.Vb()),2&t){const t=o.mc(2);o.Cb(2),o.tc("translate",t.setting.Name)}}function C(t,n){if(1&t&&(o.Wb(0,"div",4),o.Oc(1,"\n    "),o.Rb(2,"label",5),o.Oc(3,"\n    "),o.Wb(4,"div",6),o.Oc(5,"\n      "),o.Wb(6,"ng-select",10),o.Oc(7,"\n      "),o.Vb(),o.Oc(8,"\n    "),o.Vb(),o.Oc(9,"\n  "),o.Vb()),2&t){const t=o.mc(2);o.Cb(2),o.tc("translate",t.setting.Name),o.Cb(4),o.sc("items",t.list)("closeOnSelect",!0)}}function V(t,n){if(1&t&&(o.Wb(0,"div",11),o.Oc(1,"\n    "),o.Rb(2,"input",12),o.Oc(3,"\n    "),o.Rb(4,"label",13),o.Oc(5,"\n  "),o.Vb()),2&t){const t=o.mc(2);o.Cb(2),o.tc("id",t.setting.Name),o.Cb(2),o.tc("for",t.setting.Name),o.tc("translate",t.setting.Name)}}function W(t,n){if(1&t&&(o.Wb(0,"div",1),o.Oc(1,"\n  "),o.Mc(2,O,9,1,"div",2),o.Oc(3,"\n  "),o.Mc(4,p,9,1,"div",2),o.Oc(5,"\n  "),o.Mc(6,h,9,1,"div",2),o.Oc(7,"\n  "),o.Mc(8,v,9,1,"div",2),o.Oc(9,"\n  "),o.Mc(10,C,10,3,"div",2),o.Oc(11,"\n  "),o.Mc(12,V,6,3,"div",3),o.Oc(13,"\n"),o.Vb()),2&t){const t=o.mc();o.sc("formGroupName",t.setting.Name),o.Cb(2),o.sc("ngIf","str"===t.setting.DataType),o.Cb(2),o.sc("ngIf","path"===t.setting.DataType),o.Cb(2),o.sc("ngIf","int"===t.setting.DataType),o.Cb(2),o.sc("ngIf","hex"===t.setting.DataType),o.Cb(2),o.sc("ngIf","list"===t.setting.DataType),o.Cb(2),o.sc("ngIf","bool"===t.setting.DataType)}}new s.c("SettingComponent");let y=(()=>{class t{constructor(t,n,e){this.formBuilder=t,this.fgd=n,this.translate=e,this.list=[]}ngOnInit(){let t;"hex"===this.setting.DataType?t=this.formBuilder.group({current:["",b.t.compose([b.t.required,b.t.pattern("^[0-9A-Fa-f]+")])]}):"bool"===this.setting.DataType?t=this.formBuilder.group({current:[]}):"list"===this.setting.DataType?(t=this.formBuilder.group({current:[null,b.t.required]}),this.list=[],this.setting.list.forEach(t=>{const n=Object.keys(t)[0],e=Object.values(t)[0];this.list.push({label:n,value:e})})):t=this.formBuilder.group({current:["",b.t.required]}),this.fgd.form.addControl(this.setting.Name,t);const n=""!==this.setting.current_value?this.setting.current_value:this.setting.default_value;this.fgd.form.get(this.setting.Name).get("current").patchValue(n)}}return t.\u0275fac=function(n){return new(n||t)(o.Qb(b.e),o.Qb(b.i),o.Qb(u.d))},t.\u0275cmp=o.Kb({type:t,selectors:[["app-setting"]],inputs:{setting:"setting",advanced:"advanced"},features:[o.Bb([],[{provide:b.b,useExisting:b.i}])],decls:2,vars:1,consts:[[3,"formGroupName",4,"ngIf"],[3,"formGroupName"],["class","form-group row mt-2",4,"ngIf"],["class","row mt-2 custom-control custom-checkbox",4,"ngIf"],[1,"form-group","row","mt-2"],["for","current",1,"col-sm-6","col-form-label",3,"translate"],[1,"col-sm"],["type","text","formControlName","current",1,"w-100","form-control"],["type","number","formControlName","current",1,"w-50","form-control"],["type","text","formControlName","current",1,"w-50","form-control"],["bindLabel","label","bindValue","value","formControlName","current",3,"items","closeOnSelect"],[1,"row","mt-2","custom-control","custom-checkbox"],["formControlName","current","type","checkbox",1,"custom-control-input","form-control",3,"id"],[1,"ml-3","custom-control-label",3,"for","translate"]],template:function(t,n){1&t&&(o.Mc(0,W,14,7,"div",0),o.Oc(1,"\n")),2&t&&o.sc("ngIf",!1===n.setting.Advanced||n.advanced===n.setting.Advanced)},directives:[m.n,b.o,b.j,f.a,u.a,b.c,f.d,b.n,b.g,b.r,g.a,b.a],styles:[".custom-control-input.is-valid[_ngcontent-%COMP%] ~ .custom-control-label[_ngcontent-%COMP%], was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid ~ .custom-control-label[_ngcontent-%COMP%]{color:#000}"]}),t})();const w=["content"];function k(t,n){if(1&t&&(o.Ub(0),o.Oc(1,"\n                  "),o.Rb(2,"app-setting",24),o.Oc(3,"\n                "),o.Tb()),2&t){const t=n.$implicit,e=o.mc(4);o.Cb(2),o.sc("setting",t)("advanced",e.advanced)}}function S(t,n){if(1&t&&(o.Wb(0,"div",18),o.Oc(1,"\n            "),o.Rb(2,"div",19),o.Oc(3,"\n            "),o.Wb(4,"div",20),o.Oc(5,"\n              "),o.Wb(6,"div",21),o.Oc(7,"\n                "),o.Rb(8,"h5",22),o.Oc(9,"\n              "),o.Vb(),o.Oc(10,"\n              "),o.Wb(11,"div",23),o.Oc(12,"\n                "),o.Mc(13,k,4,2,"ng-container",12),o.Oc(14,"\n              "),o.Vb(),o.Oc(15,"\n            "),o.Vb(),o.Oc(16,"\n          "),o.Vb()),2&t){const t=o.mc().$implicit;o.Cb(2),o.uc("translate","setting.header.",t._Theme,""),o.Cb(6),o.uc("translate","setting.subtitle.",t._Theme,""),o.Cb(5),o.sc("ngForOf",t.ListOfSettings)}}function N(t,n){if(1&t&&(o.Wb(0,"div"),o.Oc(1,"\n          "),o.Mc(2,S,17,3,"div",17),o.Oc(3,"\n        "),o.Vb()),2&t){const t=n.$implicit,e=o.mc(2);o.Cb(2),o.sc("ngIf",e.hasBasicSettings(t.ListOfSettings))}}function R(t,n){if(1&t){const t=o.Xb();o.Wb(0,"form",9),o.Oc(1,"\n    "),o.Wb(2,"div",10),o.Oc(3,"\n      "),o.Wb(4,"div",11),o.Oc(5,"\n        "),o.Mc(6,N,4,1,"div",12),o.Oc(7,"\n      "),o.Vb(),o.Oc(8,"\n      "),o.Wb(9,"div",13),o.Oc(10,"\n        "),o.Wb(11,"button",14),o.ic("click",(function(){return o.Fc(t),o.mc().updateSettings()})),o.Vb(),o.Oc(12,"\n      "),o.Vb(),o.Oc(13,"\n    "),o.Vb(),o.Oc(14,"\n\n    "),o.Wb(15,"div",10),o.Oc(16,"\n      "),o.Rb(17,"div",15),o.Oc(18,"\n      "),o.Wb(19,"div",13),o.Oc(20,"\n        "),o.Wb(21,"button",16),o.ic("click",(function(){return o.Fc(t),o.mc().updateSettings()})),o.Vb(),o.Oc(22,"\n      "),o.Vb(),o.Oc(23,"\n    "),o.Vb(),o.Oc(24,"\n  "),o.Vb()}if(2&t){const t=o.mc();o.sc("formGroup",t.form),o.Cb(6),o.sc("ngForOf",t.settings),o.Cb(5),o.sc("disabled",!t.form.valid),o.Cb(10),o.sc("disabled",!t.form.valid)}}function M(t,n){1&t&&(o.Oc(0,"\n  "),o.Wb(1,"div",25),o.Oc(2,"\n    "),o.Rb(3,"h4",26),o.Oc(4,"\n    "),o.Wb(5,"button",27),o.ic("click",(function(){return n.$implicit.dismiss("Cross click")})),o.Oc(6,"\n      "),o.Wb(7,"span",28),o.Oc(8,"\xd7"),o.Vb(),o.Oc(9,"\n    "),o.Vb(),o.Oc(10,"\n  "),o.Vb(),o.Oc(11,"\n  "),o.Rb(12,"div",29),o.Oc(13,"\n  "),o.Wb(14,"div",30),o.Oc(15,"\n    "),o.Wb(16,"button",31),o.ic("click",(function(){return n.$implicit.dismiss("cancel")})),o.Vb(),o.Oc(17,"\n  "),o.Vb(),o.Oc(18,"\n"))}new s.c("SettingsComponent");const I=[{path:"",component:(()=>{class t{constructor(t,n,e,c,i,s){this.modalService=t,this.apiService=n,this.formBuilder=e,this.toastr=c,this.headerService=i,this.translate=s,this.advanced=!1}ngOnInit(){this.form=this.formBuilder.group({}),this.apiService.getSettings().subscribe(t=>{this.settings=t,this.settings.sort((t,n)=>t._Order-n._Order)})}advancedSettings(t){this.advanced=!!t.currentTarget.checked}updateSettings(){this.form.invalid?this.form.markAsTouched():(Object.keys(this.form.value).forEach(t=>{!0===this.form.value[t].current?this.form.value[t].current=1:!1===this.form.value[t].current&&(this.form.value[t].current=0)}),this.apiService.putSettings(this.form.value).subscribe(t=>{this.form.markAsPristine(),this.toastr.success(this.translate.instant("api.global.succes.update.title")),this.apiService.getSettings().subscribe(t=>{this.settings=t,this.settings.sort((t,n)=>t._Order-n._Order)}),this.apiService.getRestartNeeded().subscribe(t=>{t.RestartNeeded&&!0===t.RestartNeeded&&(this.headerService.setRestart(!0),this.open(this.content))})}))}open(t){this.modalService.open(t,{ariaLabelledBy:"modal-basic-title"}).result.then(t=>{},t=>{})}hasBasicSettings(t){return!!this.advanced||t.filter(t=>!1===t.Advanced).length>0}}return t.\u0275fac=function(n){return new(n||t)(o.Qb(l.e),o.Qb(r.a),o.Qb(b.e),o.Qb(d.b),o.Qb(a.a),o.Qb(u.d))},t.\u0275cmp=o.Kb({type:t,selectors:[["app-settings"]],viewQuery:function(t,n){var e;1&t&&o.Uc(w,!0),2&t&&o.Bc(e=o.jc())&&(n.content=e.first)},decls:22,vars:2,consts:[[1,"h-100"],[1,"switch","switch-sm","mr-2","pr-2","float-right"],["type","checkbox","id","switch-advanced",1,"switch",3,"checked","click"],["for","switch-advanced","translate","setting.advanced.button",1,"mb-0"],["translate","setting.help.legend"],["href","https://github.com/pipiche38/Domoticz-Zigate-Wiki/blob/master/en-eng/PluginConf.json.md","translate","setting.help.link","target","_blank"],[1,"mt-3"],[3,"formGroup",4,"ngIf"],["content",""],[3,"formGroup"],[1,"row"],[1,"col-sm-11","card-columns"],[4,"ngFor","ngForOf"],[1,"col-sm-1"],["translate","setting.validate.button",1,"w-100","btn","btn-primary",3,"disabled","click"],[1,"col-sm"],["translate","setting.validate.button",1,"btn","btn-primary","w-100",3,"disabled","click"],["class","card",4,"ngIf"],[1,"card"],[1,"card-header",3,"translate"],[1,"card-body"],[1,"card-title"],[3,"translate"],[1,"card-text"],[3,"setting","advanced"],[1,"modal-header"],["id","modal-basic-title","translate","setting.reloadplugin.alert.title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["translate","setting.reloadplugin.alert.subject",1,"modal-body"],[1,"modal-footer"],["type","button","translate","setting.reloadplugin.alert.cancel",1,"btn","btn-outline-dark",3,"click"]],template:function(t,n){1&t&&(o.Wb(0,"fieldset",0),o.Oc(1,"\n  "),o.Wb(2,"div",1),o.Oc(3,"\n    "),o.Wb(4,"input",2),o.ic("click",(function(t){return n.advancedSettings(t)})),o.Vb(),o.Oc(5,"\n    "),o.Rb(6,"label",3),o.Oc(7,"\n  "),o.Vb(),o.Oc(8,"\n\n  "),o.Rb(9,"legend",4),o.Oc(10,"\n  "),o.Rb(11,"a",5),o.Oc(12,"\n"),o.Vb(),o.Oc(13,"\n"),o.Wb(14,"div",6),o.Oc(15,"\n  "),o.Mc(16,R,25,4,"form",7),o.Oc(17,"\n"),o.Vb(),o.Oc(18,"\n\n"),o.Mc(19,M,19,0,"ng-template",null,8,o.Nc),o.Oc(21,"\n")),2&t&&(o.Cb(4),o.sc("checked",n.advanced),o.Cb(12),o.sc("ngIf",n.settings))},directives:[u.a,m.n,b.v,b.o,b.i,f.b,m.m,y],styles:[""]}),t})(),data:{title:Object(s.d)("settings")}}];let _=(()=>{class t{}return t.\u0275mod=o.Ob({type:t}),t.\u0275inj=o.Nb({factory:function(n){return new(n||t)},providers:[],imports:[[i.i.forChild(I)],i.i]}),t})(),T=(()=>{class t{}return t.\u0275mod=o.Ob({type:t}),t.\u0275inj=o.Nb({factory:function(n){return new(n||t)},imports:[[_,c.a]]}),t})()}}]);
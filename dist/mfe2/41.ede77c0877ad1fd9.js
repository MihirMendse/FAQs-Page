(self.webpackChunkmfe2=self.webpackChunkmfe2||[]).push([[41],{5041:(p,i,l)=>{l.r(i),l.d(i,{AppComponent:()=>d});var n=l(9913),t=l(6269),r=l(1493);function s(o,m){if(1&o&&(t.\u0275\u0275elementStart(0,"tr")(1,"td"),t.\u0275\u0275text(2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"td"),t.\u0275\u0275text(4),t.\u0275\u0275elementEnd()()),2&o){const e=m.$implicit;t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(e.email),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(e.question)}}function u(o,m){if(1&o&&(t.\u0275\u0275elementStart(0,"div")(1,"h2"),t.\u0275\u0275text(2,"Frequently Asked Questions (FAQs)"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"table",12)(4,"thead")(5,"tr")(6,"th"),t.\u0275\u0275text(7,"Email"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(8,"th"),t.\u0275\u0275text(9,"Question"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(10,"tbody"),t.\u0275\u0275template(11,s,5,2,"tr",13),t.\u0275\u0275elementEnd()()()),2&o){const e=t.\u0275\u0275nextContext();t.\u0275\u0275advance(11),t.\u0275\u0275property("ngForOf",e.submittedData)}}let d=(()=>{class o{constructor(e){this.fb=e,this.title="mfe2",this.submittedData=[]}ngOnInit(){this.form=this.fb.group({email:["",[n.Validators.required,n.Validators.email]],question:["",[n.Validators.required,n.Validators.minLength(6)]]})}onSubmit(){if(this.form.valid){const e=this.form.get("email")?.value,a=this.form.get("question")?.value;this.submittedData.push(this.form.value),this.form.reset(),console.log("Email:",e),console.log("Question:",a),console.log("Complete Data:",this.submittedData)}}}return o.\u0275fac=function(e){return new(e||o)(t.\u0275\u0275directiveInject(n.FormBuilder))},o.\u0275cmp=t.\u0275\u0275defineComponent({type:o,selectors:[["app-root"]],decls:19,vars:2,consts:[[1,"container-fluid","wrapper"],[1,"text-center","text-info"],[1,"container","mt-3"],[3,"formGroup","ngSubmit"],[1,"mb-3","mt-3"],["for","email",1,"form-label"],["type","email","id","email","placeholder","Enter email","formControlName","email",1,"form-control"],[1,"mb-3"],["for","question",1,"form-label"],["type","text","id","question","placeholder","Write your question here","formControlName","question",1,"form-control"],["type","submit",1,"btn","btn-primary"],[4,"ngIf"],[1,"table"],[4,"ngFor","ngForOf"]],template:function(e,a){1&e&&(t.\u0275\u0275elementStart(0,"div",0)(1,"h3",1),t.\u0275\u0275text(2,"This is mfe2"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",2)(4,"h2"),t.\u0275\u0275text(5,"Ask Your Question:"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"form",3),t.\u0275\u0275listener("ngSubmit",function(){return a.onSubmit()}),t.\u0275\u0275elementStart(7,"div",4)(8,"label",5),t.\u0275\u0275text(9,"Email:"),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(10,"input",6),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(11,"div",7)(12,"label",8),t.\u0275\u0275text(13,"Question:"),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(14,"input",9),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(15,"button",10),t.\u0275\u0275text(16,"Submit"),t.\u0275\u0275elementEnd()()()(),t.\u0275\u0275element(17,"hr"),t.\u0275\u0275template(18,u,12,1,"div",11)),2&e&&(t.\u0275\u0275advance(6),t.\u0275\u0275property("formGroup",a.form),t.\u0275\u0275advance(12),t.\u0275\u0275property("ngIf",a.submittedData))},dependencies:[r.NgForOf,r.NgIf,n.\u0275NgNoValidate,n.DefaultValueAccessor,n.NgControlStatus,n.NgControlStatusGroup,n.FormGroupDirective,n.FormControlName],styles:[".form-control[_ngcontent-%COMP%]{background-color:#b7b2b2}"]}),o})()}}]);
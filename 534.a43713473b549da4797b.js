(self.webpackChunksoudal_app=self.webpackChunksoudal_app||[]).push([[534],{534:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ProductosModule:()=>ht});var i=n(583),o=n(855),s=n(639),r=n(402),a=n(574),l=n(796),c=n(2),u=n(555);function h(t,e){return new a.y(n=>{const i=t.length;if(0===i)return void n.complete();const o=new Array(i);let s=0,a=0;for(let l=0;l<i;l++){const c=(0,r.D)(t[l]);let u=!1;n.add(c.subscribe({next:t=>{u||(u=!0,a++),o[l]=t},error:t=>n.error(t),complete:()=>{s++,s!==i&&u||(a===i&&n.next(e?e.reduce((t,e,n)=>(t[e]=o[n],t),{}):o),n.complete())}}))}})}let d=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}setProperty(t,e){this._renderer.setProperty(this._elementRef.nativeElement,t,e)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(s.Qsj),s.Y36(s.SBq))},t.\u0275dir=s.lG2({type:t}),t})(),p=(()=>{class t extends d{}return t.\u0275fac=function(){let e;return function(n){return(e||(e=s.n5z(t)))(n||t)}}(),t.\u0275dir=s.lG2({type:t,features:[s.qOj]}),t})();const g=new s.OlP("NgValueAccessor"),_={provide:g,useExisting:(0,s.Gpc)(()=>m),multi:!0},f=new s.OlP("CompositionEventMode");let m=(()=>{class t extends d{constructor(t,e,n){super(t,e),this._compositionMode=n,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=(0,i.q)()?(0,i.q)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this.setProperty("value",null==t?"":t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(s.Qsj),s.Y36(s.SBq),s.Y36(f,8))},t.\u0275dir=s.lG2({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,e){1&t&&s.NdJ("input",function(t){return e._handleInput(t.target.value)})("blur",function(){return e.onTouched()})("compositionstart",function(){return e._compositionStart()})("compositionend",function(t){return e._compositionEnd(t.target.value)})},features:[s._Bn([_]),s.qOj]}),t})();const C=new s.OlP("NgValidators"),y=new s.OlP("NgAsyncValidators");function v(t){return null!=t}function V(t){const e=(0,s.QGY)(t)?(0,r.D)(t):t;return(0,s.CqO)(e),e}function b(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function O(t,e){return e.map(e=>e(t))}function A(t){return t.map(t=>function(t){return!t.validate}(t)?t:e=>t.validate(e))}function w(t){return null!=t?function(t){if(!t)return null;const e=t.filter(v);return 0==e.length?null:function(t){return b(O(t,e))}}(A(t)):null}function P(t){return null!=t?function(t){if(!t)return null;const e=t.filter(v);return 0==e.length?null:function(t){return function(...t){if(1===t.length){const e=t[0];if((0,l.k)(e))return h(e,null);if((0,u.K)(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return h(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return h(t=1===t.length&&(0,l.k)(t[0])?t[0]:t,null).pipe((0,c.U)(t=>e(...t)))}return h(t,null)}(O(t,e).map(V)).pipe((0,c.U)(b))}}(A(t)):null}function M(t,e){return null===t?[e]:Array.isArray(t)?[...t,e]:[t,e]}function E(t){return t._rawValidators}function x(t){return t._rawAsyncValidators}let k=(()=>{class t{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=w(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=P(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=s.lG2({type:t}),t})();class S extends k{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}let T=(()=>{class t extends class{constructor(t){this._cd=t}is(t){var e,n,i;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(i=null===(n=this._cd)||void 0===n?void 0:n.control)||void 0===i?void 0:i[t])}}{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(S,2))},t.\u0275dir=s.lG2({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,e){2&t&&s.ekj("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[s.qOj]}),t})();function j(t,e,n=!0){const i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),function(t,e){let n=!1;if(null!==t){if(null!==e.validator){const i=E(t);if(Array.isArray(i)&&i.length>0){const o=i.filter(t=>t!==e.validator);o.length!==i.length&&(n=!0,t.setValidators(o))}}if(null!==e.asyncValidator){const i=x(t);if(Array.isArray(i)&&i.length>0){const o=i.filter(t=>t!==e.asyncValidator);o.length!==i.length&&(n=!0,t.setAsyncValidators(o))}}}const i=()=>{};D(e._rawValidators,i),D(e._rawAsyncValidators,i)}(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function D(t,e){t.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Z(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function q(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const F="VALID",U="INVALID",L="PENDING",I="DISABLED";function B(t){return(J(t)?t.validators:t)||null}function Y(t){return Array.isArray(t)?w(t):t||null}function z(t,e){return(J(e)?e.asyncValidators:t)||null}function N(t){return Array.isArray(t)?P(t):t||null}function J(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class G{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Y(this._rawValidators),this._composedAsyncValidatorFn=N(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===F}get invalid(){return this.status===U}get pending(){return this.status==L}get disabled(){return this.status===I}get enabled(){return this.status!==I}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Y(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=N(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=L,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=I,this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=F,this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),this.status!==F&&this.status!==L||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=L,this._hasOwnPendingAsyncValidator=!0;const e=V(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let i=t;return e.forEach(t=>{i=i instanceof R?i.controls.hasOwnProperty(t)?i.controls[t]:null:i instanceof $&&i.at(t)||null}),i}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new s.vpe,this.statusChanges=new s.vpe}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(L)?L:this._anyControlsHaveStatus(U)?U:F}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){J(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class Q extends G{constructor(t=null,e,n){super(B(e),z(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){q(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){q(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class R extends G{constructor(t,e,n){super(B(e),z(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,i)=>{n.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof Q?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const n=this.controls[e];if(this.contains(e)&&t(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,i)=>{n=e(n,t,i)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class $ extends G{constructor(t,e,n){super(B(e),z(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,n={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,i)=>{n.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof Q?t.value:t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}let W=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({}),t})();const H=new s.OlP("NgModelWithFormControlWarning"),X={provide:S,useExisting:(0,s.Gpc)(()=>K)};let K=(()=>{class t extends S{constructor(t,e,n,i){super(),this._ngModelWarningConfig=i,this.update=new s.vpe,this._ngModelWarningSent=!1,this._setValidators(t),this._setAsyncValidators(e),this.valueAccessor=function(t,e){if(!e)return null;let n,i,o;return Array.isArray(e),e.forEach(t=>{t.constructor===m?n=t:Object.getPrototypeOf(t.constructor)===p?i=t:o=t}),o||i||n||null}(0,n)}set isDisabled(t){}ngOnChanges(t){if(this._isControlChanged(t)){const i=t.form.previousValue;i&&j(i,this,!1),function(t,e){const n=E(t);null!==e.validator?t.setValidators(M(n,e.validator)):"function"==typeof n&&t.setValidators([n]);const i=x(t);null!==e.asyncValidator?t.setAsyncValidators(M(i,e.asyncValidator)):"function"==typeof i&&t.setAsyncValidators([i]);const o=()=>t.updateValueAndValidity();D(e._rawValidators,o),D(e._rawAsyncValidators,o)}(e=this.form,n=this),n.valueAccessor.writeValue(e.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&Z(t,e)})}(e,n),function(t,e){const n=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}(e,n),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&Z(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(e,n),function(t,e){if(e.valueAccessor.setDisabledState){const n=t=>{e.valueAccessor.setDisabledState(t)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}(e,n),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this.form.updateValueAndValidity({emitEvent:!1})}var e,n;(function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)})(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&j(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(C,10),s.Y36(y,10),s.Y36(g,10),s.Y36(H,8))},t.\u0275dir=s.lG2({type:t,selectors:[["","formControl",""]],inputs:{isDisabled:["disabled","isDisabled"],form:["formControl","form"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[s._Bn([X]),s.qOj,s.TTD]}),t._ngModelWarningSentOnce=!1,t})(),tt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[W]]}),t})(),et=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:H,useValue:e.warnOnNgModelWithFormControl}]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[tt]}),t})();var nt=n(841);let it=(()=>{class t{constructor(t){this.httpModule=t,this.categorias=[{nombre:"todos",ruta:"/productos/categoria/todos"},{nombre:"silicones",ruta:"/productos/categoria/silicones"},{nombre:"acrilicos",ruta:"/productos/categoria/acrilicos"},{nombre:"espuma",ruta:"/productos/categoria/espuma"},{nombre:"hibrido ms",ruta:"/productos/categoria/hibrido-ms"},{nombre:"adhesivo ms",ruta:"/productos/categoria/adhesivo-ms"},{nombre:"anclaje quimico",ruta:"/productos/categoria/anclaje-quimico"},{nombre:"sellador poliuretano",ruta:"/productos/categoria/sellador-poliuretano"},{nombre:"pistolas",ruta:"/productos/categoria/pistolas"},{nombre:"complementos",ruta:"/productos/categoria/complementos"}]}getProductos(t){return this.httpModule.get("todos"===t?"https://soudal-backend.herokuapp.com/view":`https://soudal-backend.herokuapp.com/categoria/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(nt.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function ot(t,e){if(1&t&&(s.TgZ(0,"div",8),s.TgZ(1,"div",9),s._uU(2,"Caracteristicas"),s.qZA(),s.TgZ(3,"div",10),s._uU(4),s.qZA(),s.qZA()),2&t){const t=s.oxw();s.xp6(4),s.hij(" ",t.product.caracteristicas," ")}}function st(t,e){if(1&t&&(s.TgZ(0,"div",8),s.TgZ(1,"div",9),s._uU(2,"Aplicaciones"),s.qZA(),s.TgZ(3,"div",10),s._uU(4),s.qZA(),s.qZA()),2&t){const t=s.oxw();s.xp6(4),s.hij(" ",t.product.aplicaciones," ")}}let rt=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-product-card"]],inputs:{product:"product"},decls:11,vars:7,consts:[[1,"tarjeta"],[1,"columna-1"],[1,"img"],[1,"columna-2"],[1,"nombre"],[1,"detalles-container"],[1,"descripcion"],["class","text-container",4,"ngIf"],[1,"text-container"],[1,"titulo"],[1,"texto"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s._UZ(2,"div",2),s.qZA(),s.TgZ(3,"div",3),s.TgZ(4,"div",4),s._uU(5),s.qZA(),s.TgZ(6,"div",5),s.TgZ(7,"div",6),s._uU(8),s.qZA(),s.YNc(9,ot,5,1,"div",7),s.YNc(10,st,5,1,"div",7),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(2),s.Jzz("background: url('",e.product.imagen,"');\n      background-position: center;\n      background-size: cover;"),s.xp6(3),s.Oqu(e.product.nombre),s.xp6(3),s.hij(" ",e.product.descripcion," "),s.xp6(1),s.Q6J("ngIf",""!=e.product.caracteristicas.trim()),s.xp6(1),s.Q6J("ngIf",""!=e.product.aplicaciones.trim()))},directives:[i.O5],styles:[".tarjeta[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:-moz-fit-content;height:fit-content;min-height:250px;overflow-y:auto;width:100%}.tarjeta[_ngcontent-%COMP%]   .columna-1[_ngcontent-%COMP%]{min-width:200px;padding-right:12px;width:20%}.tarjeta[_ngcontent-%COMP%]   .columna-1[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{background-position:50%;background-size:cover;border-radius:3px;border:2px solid #cf180e;height:100%;width:100%}.tarjeta[_ngcontent-%COMP%]   .columna-2[_ngcontent-%COMP%]{width:80%}.tarjeta[_ngcontent-%COMP%]   .columna-2[_ngcontent-%COMP%]   .nombre[_ngcontent-%COMP%]{background-color:#cf180e;border-radius:3px;color:#fff;font-family:Roboto Condensed,sans-serif;font-size:1.1em;font-weight:700;padding:2px 10px;text-transform:uppercase;width:100%}.tarjeta[_ngcontent-%COMP%]   .columna-2[_ngcontent-%COMP%]   .detalles-container[_ngcontent-%COMP%]{font-family:Roboto Condensed,sans-serif;font-weight:400;padding:8px 3px}.tarjeta[_ngcontent-%COMP%]   .columna-2[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{padding:10px 0}.tarjeta[_ngcontent-%COMP%]   .columna-2[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{color:#cf180e;font-weight:700;margin:5px 0}@media (max-width: 500px){.tarjeta[_ngcontent-%COMP%]{flex-direction:column;height:-moz-fit-content;height:fit-content}.tarjeta[_ngcontent-%COMP%]   .columna-1[_ngcontent-%COMP%]{height:300px;margin-bottom:10px;padding-right:0;width:100%}.tarjeta[_ngcontent-%COMP%]   .columna-2[_ngcontent-%COMP%]{width:100%}}"]}),t})();function at(t,e){if(1&t&&(s.TgZ(0,"a",7),s._uU(1),s.ALo(2,"titlecase"),s.qZA()),2&t){const t=e.$implicit;s.Q6J("routerLink",t.ruta),s.xp6(1),s.Oqu(s.lcZ(2,2,t.nombre))}}function lt(t,e){if(1&t&&(s.TgZ(0,"div",8),s._UZ(1,"app-product-card",9),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.Q6J("product",t)}}const ct=[{path:"categoria/:categoria",component:(()=>{class t{constructor(t,e){this.route=t,this.productoService=e,this.productList=[],this.productListFiltered=[],this.categoriaList=[],this.search=new Q("")}ngOnInit(){this.route.paramMap.subscribe(t=>{this.categoria=t.get("categoria"),this.categoria=this.categoria.replace("-"," ");try{this.productListSubscription.unsubscribe()}catch(e){console.info("Subscripci\xf3n no lista.")}this.productListSubscription=this.productoService.getProductos(this.categoria).subscribe(t=>{this.productList=t,this.productListFiltered=this.productList,console.log(t)})}),this.categoriaList=this.productoService.categorias,this.search.valueChanges.subscribe(t=>{this.productListFiltered=this.productList.filter(e=>e.nombre.toUpperCase().includes(t.toUpperCase()))})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(o.gz),s.Y36(it))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-main"]],decls:7,vars:3,consts:[[1,"sidebar"],["routerLinkActive","active",3,"routerLink",4,"ngFor","ngForOf"],[1,"main-content"],[1,"search-content","mt-5","mx-auto"],["id","form-one","type","text","placeholder","Buscar un producto",1,"input",3,"formControl"],[1,"border"],["class","product-card",4,"ngFor","ngForOf"],["routerLinkActive","active",3,"routerLink"],[1,"product-card"],[1,"mt-5",3,"product"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.YNc(1,at,3,4,"a",1),s.qZA(),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s._UZ(4,"input",4),s._UZ(5,"span",5),s.qZA(),s.YNc(6,lt,2,1,"div",6),s.qZA()),2&t&&(s.xp6(1),s.Q6J("ngForOf",e.categoriaList),s.xp6(3),s.Q6J("formControl",e.search),s.xp6(2),s.Q6J("ngForOf",e.productListFiltered))},directives:[i.sg,m,T,K,o.yS,o.Od,rt],pipes:[i.rS],styles:["[_ngcontent-%COMP%]:focus{outline:none}.sidebar[_ngcontent-%COMP%]{background-color:#f1f1f1;height:100%;margin:0;overflow:auto;padding:0;position:fixed;width:200px;z-index:35}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;cursor:pointer;display:block;padding:16px;text-decoration:none;transition:all .3s}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:#04aa6d;color:#fff}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active){color:#cf180e!important;background-color:#e7e7e7}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{margin-top:150px}.main-content[_ngcontent-%COMP%]{margin-left:200px;min-height:100vh;height:-moz-fit-content;height:fit-content;padding:100px 16px 1px;display:flex;flex-direction:column;align-self:center}.main-content[_ngcontent-%COMP%]   .search-content[_ngcontent-%COMP%]{width:90%;position:relative;margin-bottom:20px}.main-content[_ngcontent-%COMP%]   .search-content[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:100%;border:0;padding:10px;border-bottom:1px solid #929fba}.main-content[_ngcontent-%COMP%]   .search-content[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] ~ .border[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:0;height:1px}.main-content[_ngcontent-%COMP%]   .search-content[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus ~ .border[_ngcontent-%COMP%]{width:100%;transition:.5s}.main-content[_ngcontent-%COMP%]   .search-content[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%]{border:1px solid #cf180e!important}.main-content[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]{width:90%;margin-bottom:20px;margin-left:auto;margin-right:auto}@media screen and (max-width: 700px){.sidebar[_ngcontent-%COMP%]{width:100%;height:auto;z-index:1;position:relative;display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:left}div.main-content[_ngcontent-%COMP%]{margin-left:0;padding-top:20px}}.active[_ngcontent-%COMP%]{background-color:#d6d6d6;color:#cf180e!important}@media screen and (max-width: 400px){.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:center;float:none}}"]}),t})()},{path:"**",redirectTo:"/categoria/todos"}];let ut=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.Bz.forChild(ct)],o.Bz]}),t})(),ht=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.ez,ut,o.Bz,et]]}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./packages/components/dist/esm-es5/lp-text-input.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"lp_text_input",(function(){return TextInput}));var _index_2b0d8e3c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/dist/esm-es5/index-2b0d8e3c.js"),TextInput=(__webpack_require__("./packages/components/dist/esm-es5/requested-bdf778fd.js"),function(){function t(t){var e=this;Object(_index_2b0d8e3c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,t),this.value="",this.withLeftIcon=!1,this.withRightIcon=!1,this.slotChangeHandler=function(t){e["icon-left"===t.target.name?"withLeftIcon":"withRightIcon"]=!!t.target.assignedNodes().length},this.inputChangeHandler=function(t){e.value=t.target.value}}return t.prototype.render=function(){return Object(_index_2b0d8e3c_js__WEBPACK_IMPORTED_MODULE_0__.e)(_index_2b0d8e3c_js__WEBPACK_IMPORTED_MODULE_0__.a,null,Object(_index_2b0d8e3c_js__WEBPACK_IMPORTED_MODULE_0__.e)("slot",{name:"icon-left",onSlotchange:this.slotChangeHandler}),Object(_index_2b0d8e3c_js__WEBPACK_IMPORTED_MODULE_0__.e)("input",{class:{"with-icon-left":this.withLeftIcon,"with-icon-right":this.error||this.withRightIcon},part:"input",type:"text",value:this.value,disabled:this.disabled,readOnly:this.readOnly,onChange:this.inputChangeHandler}),Object(_index_2b0d8e3c_js__WEBPACK_IMPORTED_MODULE_0__.e)("slot",{name:"icon-right",onSlotchange:this.slotChangeHandler},this.error&&Object(_index_2b0d8e3c_js__WEBPACK_IMPORTED_MODULE_0__.e)("lp-requested-icon",null)))},t}());TextInput.style='*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-border:rgba(140, 172, 255, 0.3);--color-border--hover:#F8F8FF;--color-border--active:#175AFC;--color-border--disabled:rgba(140, 172, 255, 0.08);--color-outline:0 0 0 2px #090C43, 0 0 0 4px #FFF;--color-bg:rgba(140, 172, 255, 0.08);--color-text:#F8F8FF;--input-height:38px;--input-text-align:left;--input-padding:12px;position:relative;display:-ms-inline-flexbox;display:inline-flex;font-family:"Roboto", "Helvetica Neue", Arial, sans-serif;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:14px;font-weight:400;line-height:1.2;letter-spacing:0;color:var(--color-text)}:host([theme=light]){--color-border:#AEC1EB;--color-border--hover:#5970AB;--color-border--active:#0C50FF;--color-border--disabled:rgba(0, 32, 116, 0.08);--color-outline:0 0 0 2px #FFF, 0 0 0 4px #0C50FF;--color-bg:#FFF;--color-text:#37497D}:host([error]:not([error=false])){--color-border:#F7A2B5}:host([error]:not([error=false])[theme=light]){--color-border:#D72329}:host([readOnly]:not([readOnly=false])){--input-padding:0}:host([size=medium]){--input-height:30px}:host([textAlign=center]){--input-text-align:center}:host([textAlign=right]){--input-text-align:right}input{-ms-flex-positive:1;flex-grow:1;max-width:100%;font:inherit;text-align:var(--input-text-align);height:var(--input-height);color:inherit;border:1px solid var(--color-border);outline:none;border-radius:4px;background:var(--color-bg);-webkit-box-shadow:none;box-shadow:none;-webkit-tap-highlight-color:rgba(255, 255, 255, 0);padding:0 var(--input-padding);margin:0;-webkit-transition:all 0.15s ease-out;transition:all 0.15s ease-out}input[disabled]{border-color:var(--color-border--disabled);opacity:0.35}input:not([disabled]):hover{border-color:var(--color-border--hover)}input:not([disabled]):active,input:not([disabled]):focus{border-color:var(--color-border--active)}input:not([disabled]):focus{-webkit-box-shadow:var(--color-outline);box-shadow:var(--color-outline)}input:not([disabled])[readOnly]{border-color:transparent;background-color:transparent;-webkit-box-shadow:none;box-shadow:none;padding:0}input:not([disabled])[readOnly].with-icon-left{padding-left:1.7142857143em}input:not([disabled])[readOnly].with-icon-right{padding-right:1.7142857143em}input.with-icon-left{padding-left:calc(1.1428571429em + var(--input-padding) + 0.5714285714em)}input.with-icon-right{padding-right:calc(1.1428571429em + var(--input-padding) + 0.5714285714em)}slot[name^=icon-]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;top:0;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:all 0.15s ease-out;transition:all 0.15s ease-out}slot[name^=icon-][name$=left]{left:var(--input-padding)}slot[name^=icon-][name$=right]{right:var(--input-padding)}:host([error]:not([error=false])) slot[name^=icon-]{color:var(--color-border)}'}}]);
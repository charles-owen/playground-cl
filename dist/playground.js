(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Playground"] = factory();
	else
		root["Playground"] = factory();
})(window, function() {
return (window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["Playground"],{

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/playground/_playground.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/playground/_playground.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.cl-playground div.toast {\n  position: absolute;\n  bottom: 0;\n  visibility: hidden;\n  transform: translateY(2.3em);\n  z-index: 400;\n  transition: all 0.4s ease-in-out 0s, visibility 0s linear 0.4s, z-index 0s linear 0.01s;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1.1em;\n  left: calc(50% - 30em/2);\n  width: 30em;\n  background-color: #151515;\n  color: white;\n  text-align: center;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding: 0.5em;\n}\n\ndiv.cl-playground div.toast.toast-active {\n  visibility: visible;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.4s;\n  z-index: 400;\n}\n\ndiv.cl-playground {\n  display: none;\n}\n\ndiv.cl-playground nav.menubar {\n  flex: 0 1 auto;\n  position: relative;\n  z-index: 100;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background-color: #f0f3f0;\n  border-bottom: thin solid #808080;\n  font-size: 0.9rem;\n}\n\ndiv.cl-playground nav.menubar li:hover {\n  background: #00796B;\n}\n\ndiv.cl-playground nav.menubar li {\n  user-select: none;\n  cursor: pointer;\n}\n\ndiv.cl-playground nav.menubar li a,\ndiv.cl-playground nav.menubar li a:link,\ndiv.cl-playground nav.menubar li a:visited {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\n\ndiv.cl-playground nav.menubar > ul {\n  list-style-type: none;\n  margin: 0;\n  border: 0;\n  padding: 0;\n}\n\ndiv.cl-playground nav.menubar > ul img.check {\n  vertical-align: baseline;\n  width: 19px;\n  height: 16px;\n  content: url(" + escape(__webpack_require__(/*! ./img/menu-check.png */ "./vendor/cl/playground/img/menu-check.png")) + ");\n}\n\ndiv.cl-playground nav.menubar > ul > li {\n  display: inline-block;\n  margin: 0;\n  border: 0;\n  padding: 0.25em 2em 0.25em 0.5em;\n  position: relative;\n}\n\ndiv.cl-playground nav.menubar > ul > li a,\ndiv.cl-playground nav.menubar > ul > li a:link,\ndiv.cl-playground nav.menubar > ul > li a:visited {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\n\ndiv.cl-playground nav.menubar > ul ul {\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n  list-style-type: none;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: 100%;\n  margin: 1px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n  border-top-width: 0;\n}\n\ndiv.cl-playground nav.menubar > ul ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\n\ndiv.cl-playground nav.menubar > ul ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\ndiv.cl-playground nav.menubar > ul ul > li.menu-disabled a {\n  opacity: 0.3;\n}\n\ndiv.cl-playground nav.menubar > ul ul.menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\n\ndiv.cl-playground nav.menubar > ul ul.edit-menu a {\n  width: 6em;\n}\n\ndiv.cl-playground nav.menubar > ul ul.option-menu a {\n  width: 11em;\n}\n\ndiv.cl-playground nav.menubar > ul ul.file-menu a {\n  width: 6em;\n}\n\ndiv.cl-playground nav.menubar > ul ul.help-menu a {\n  width: 7.5em;\n}\n\ndiv.cl-playground nav.menubar > ul .ul-state-active {\n  color: red;\n}\n\ndiv.cl-playground nav.menubar > ul li.menu-divider {\n  height: 1px;\n  border: 0 solid black;\n  border-top-width: 1px;\n}\n\ndiv.cl-playground div.work {\n  flex: 1 1 auto;\n  position: relative;\n  width: 100%;\n  background: black;\n}\n\ndiv.cl-playground div.cl-pg-overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #a00;\n  opacity: 0.05;\n  z-index: 2000;\n  display: none;\n}\n\ndiv.cl-playground div.cl-pg-main {\n  line-height: normal;\n  font-size: 1rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\ndiv.cl-playground-full {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: white;\n}\n\ndiv.cl-playground-window {\n  position: relative;\n  width: 100%;\n  height: 600px;\n  margin: 0;\n  padding: 0;\n  border: thin solid #aaaaaa;\n  border-bottom: none;\n  background: white;\n  min-height: 100px;\n  min-width: 400px;\n}\n\ndiv.cl-playground-gap-before,\ndiv.cl-playground-gap-after {\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 1px;\n}\n\ndiv.cl-playground-gap-after {\n  height: 1em;\n}\n\ndiv.cirsim div.dialog-content {\n  position: relative;\n  padding: 0.5em;\n  font-size: 0.95em;\n}\n\ndiv.cirsim div.dialog-content input {\n  padding: 3px;\n  box-sizing: border-box;\n  font-size: 1.1em;\n}\n\ndiv.cirsim div.dialog-content h2 {\n  margin: 0.75em 0;\n}\n\ndiv.cirsim div.dialog-content form {\n  position: relative;\n  height: 100%;\n}\n\ndiv.cirsim div.dialog-content .large {\n  font-size: 1.2em;\n}\n\ndiv.cirsim div.dialog-content fieldset {\n  position: relative;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  min-width: 0;\n  max-width: 100%;\n}\n\ndiv.cirsim div.dialog-content p.error {\n  margin: 1em 0 0 0;\n  text-align: center;\n  color: red;\n  font-size: 0.9em;\n  font-style: italic;\n}\n\ndiv.cirsim div.dialog-content div.control {\n  position: relative;\n  margin: 0 0 1em 0;\n}\n\ndiv.cirsim div.dialog-content div.control label {\n  display: block;\n  font-style: italic;\n  margin: 0.2em 0 0.1em 0;\n}\n\ndiv.cirsim div.dialog-content div.control input {\n  display: block;\n}\n\ndiv.cirsim div.dialog-content div.control input[type=text],\ndiv.cirsim div.dialog-content div.control input[type=file] {\n  width: 100%;\n}\n\ndiv.cirsim div.dialog-content div.control input[type=radio] {\n  display: inline-block;\n}\n\ndiv.cirsim div.dialog-content div.control input[type=range] {\n  width: 100%;\n}\n\ndiv.cirsim div.dialog-content div.control p.selector {\n  text-align: center;\n}\n\ndiv.cirsim div.dialog-content div.control select {\n  width: 6em;\n}\n\ndiv.cirsim div.dialog-content div.control select.files {\n  width: 100%;\n}\n\ndiv.cirsim div.dialog-content div.control div.notice {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 45%;\n  text-align: center;\n  font-style: italic;\n  color: saddlebrown;\n}\n\ndiv.cirsim div.dialog-content div.control textarea {\n  width: 100%;\n}\n\ndiv.cirsim div.dialog-content div.control1 {\n  margin: 0 0 1em 0;\n}\n\ndiv.cirsim div.dialog-content div.control1 label {\n  display: inline-block;\n  font-style: italic;\n  padding-right: 0.5em;\n}\n\ndiv.cirsim div.dialog-content div.control1 select {\n  width: 6em;\n}\n\ndiv.cirsim div.dialog-content div.control1 input.number {\n  width: 2em;\n  text-align: center;\n}\n\ndiv.cirsim div.dialog-content div.control1 input.compname {\n  width: 4em;\n}\n\ndiv.cirsim div.dialog-content div.control1 input.tabname {\n  width: 6em;\n}\n\ndiv.cirsim div.dialog-content div.center {\n  text-align: center;\n}\n\ndiv.cirsim div.dialog-content div.indent {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\ndiv.cirsim div.dialog-content h1 {\n  margin: 0 0 0.5em 0;\n}\n\ndiv.cirsim div.dialog-content p {\n  color: #606060;\n}\n\ndiv.cirsim div.dialog-content .gap {\n  margin-top: 1em;\n}\n\ndiv.cirsim.about {\n  width: 400px;\n  text-align: center;\n}\n\ndiv.cirsim.about img {\n  width: 171px;\n  height: 75px;\n}\n\ndiv.cirsim.about div.dialog-content {\n  padding: 1em;\n}\n\ndiv.cirsim.help {\n  width: 450px;\n  height: 600px;\n}\n\ndiv.cirsim.component a.helper {\n  display: block;\n  position: absolute;\n  right: 0.5em;\n  top: 0.5em;\n  float: right;\n  color: #606060;\n  font-style: italic;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.85em;\n  padding: 0;\n}\n\ndiv.cirsim .cirsim-error {\n  color: red;\n}\n\ndiv.cirsim-dialog {\n  padding: 1em;\n  font-size: 0.95em;\n}\n\n.ui-dialog-buttonset button {\n  width: 6em;\n}\n\n.ui-dialog .ui-dialog-buttonpane {\n  padding: 0;\n}\n\ndiv.cirsim table {\n  margin-left: auto;\n  margin-right: auto;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: 0.9em;\n}\n\ndiv.cirsim table th {\n  color: white;\n  background: #18453B;\n  /* #3e9c45; */\n  background: linear-gradient(#18453B, #73d189);\n  text-shadow: rgba(0, 0, 0, 0.4) 0 1px 0;\n  border-right: 1px solid #C1DAD7;\n  border-bottom: 1px solid #C1DAD7;\n  border-top: 1px solid #C1DAD7;\n  letter-spacing: 1px;\n  text-align: left;\n  padding: 2px 6px;\n  font-family: Helvetica, Arial, sans-serif;\n  text-decoration: none;\n  vertical-align: bottom;\n}\n\ndiv.cirsim table th a:link {\n  color: #F5F3EB;\n}\n\ndiv.cirsim table th a:visited {\n  color: #E3DCC5;\n}\n\ndiv.cirsim table th a:hover {\n  color: #ffffff;\n}\n\ndiv.cirsim table th.width40 {\n  width: 20%;\n}\n\ndiv.cirsim table th.width40em {\n  width: 40em;\n}\n\ndiv.cirsim table th.width20em {\n  width: 20em;\n}\n\ndiv.cirsim table td {\n  border-right: 1px solid #C1DAD7;\n  border-bottom: 1px solid #C1DAD7;\n  background: #ffffff;\n  padding: 0.25em 0.75em;\n  color: #4f6b72;\n}\n\ndiv.cirsim table td a:link {\n  color: #8A8A8A;\n  text-decoration: underline;\n}\n\ndiv.cirsim table td a:visited {\n  color: #B09D5B;\n  text-decoration: underline;\n}\n\ndiv.cirsim table td a:hover {\n  color: #3366cc;\n  text-decoration: underline;\n}\n\ndiv.cirsim table.center td,\ndiv.cirsim table.center th {\n  text-align: center;\n}\n\ndiv.cirsim table.truth-table th {\n  color: black;\n  background: white;\n  text-shadow: none;\n  border: none;\n  border-bottom: 1px solid black;\n  text-align: center;\n}\n\ndiv.cirsim table.truth-table td {\n  border: 0;\n}\n\ndiv.cirsim table.truth-table th:last-child,\ndiv.cirsim table.truth-table td:last-child {\n  border-left: thin solid black;\n}\n\ndiv.cl-playground div.cl-pg-tabs {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  font-size: 0.8rem;\n  padding: 0;\n  background: #ddd;\n  border: 0;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul {\n  margin: 0;\n  padding: 3px 0 0 2px;\n  background: transparent;\n  border: 0;\n  list-style: none;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li {\n  position: relative;\n  display: inline-block;\n  font-size: 0.8rem;\n  padding: 0.25em 0.25em 0.45em 0;\n  min-width: 6em;\n  text-align: center;\n  cursor: pointer;\n  background: #ccc;\n  border: 1px solid black;\n  border-bottom: none;\n  border-radius: 5px 5px 0 0;\n  margin: 1px 3px -1px 0;\n  white-space: nowrap;\n  z-index: 18;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li a:first-child {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  display: inline-block;\n  padding: 0 0.25em;\n  text-decoration: none;\n  color: black;\n  outline: 0;\n  user-select: none;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) {\n  float: right;\n  display: inline-block;\n  margin-top: -2px;\n  padding: 0;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) img {\n  width: 12px;\n  height: auto;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li.selected {\n  background: white;\n  z-index: 22;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li.selected a {\n  color: black;\n}\n\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-views {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n}\n\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-view {\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 20;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-view.selected {\n  display: block;\n  border-top: 1px solid black;\n}\n\ndiv.cl-playground div.cl-tab-menu {\n  position: absolute;\n  left: calc(100% - 17px);\n  top: 0;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n}\n\ndiv.cl-playground div.cl-tab-menu div {\n  position: absolute;\n  width: 14px;\n  height: 27px;\n  top: 4px;\n  left: 0;\n  border: 1px solid #808080;\n  border-bottom-width: 0;\n  background-color: #f0f3f0;\n}\n\ndiv.cl-playground div.cl-tab-menu div img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 12px;\n  height: auto;\n}\n\ndiv.cl-playground div.cl-tab-menu ul {\n  list-style-type: none;\n  overflow: hidden;\n  margin: 30px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n}\n\ndiv.cl-playground div.cl-tab-menu ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\n\ndiv.cl-playground div.cl-tab-menu ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\ndiv.cl-playground div.cl-tab-menu ul > li.menu-disabled a {\n  opacity: 0.3;\n}\n\ndiv.cl-playground div.cl-tab-menu.cl-menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\n\ndiv.cl-playground div.cl-playground-root,\ndiv.cl-playground div.cl-playground-left,\ndiv.cl-playground div.cl-playground-right,\ndiv.cl-playground div.cl-playground-top,\ndiv.cl-playground div.cl-playground-bottom {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  background: white;\n}\n\ndiv.cl-playground div.cl-playground-left {\n  position: relative;\n  flex: 0 1 auto;\n  border-right: 1px solid #888;\n}\n\ndiv.cl-playground div.cl-playground-left div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  top: 0;\n  height: 100%;\n  right: -5px;\n  width: 10px;\n  background: transparent;\n  z-index: 100;\n  cursor: ew-resize;\n}\n\ndiv.cl-playground div.cl-playground-top {\n  flex: 0 1 auto;\n  width: 100%;\n  border-bottom: 1px solid #888;\n}\n\ndiv.cl-playground div.cl-playground-top div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  bottom: -5px;\n  height: 10px;\n  width: 100%;\n  background: transparent;\n  z-index: 2;\n  cursor: ns-resize;\n}\n\ndiv.cl-playground div.cl-playground-bottom {\n  width: 100%;\n  height: auto;\n}\n\ndiv.cl-playground div.cl-playground-root {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\ndiv.cl-pg-nums {\n  display: inline-block;\n  flex: 0 0 auto;\n  background: #eee;\n  width: 2em;\n  padding: 4px 0;\n  overflow: hidden;\n  margin: 0;\n}\n\ndiv.cl-pg-nums p {\n  font-size: 0.8em;\n  line-height: 16px;\n  margin: 0;\n  padding: 0 3px 0 0;\n  border: 0;\n  text-align: right;\n  color: #777;\n}\n\ndiv.cl-playground div.cl-pg-view.editor {\n  overflow: hidden;\n}\n\ndiv.cl-playground div.cl-pg-view.editor > div {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\n\ndiv.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor {\n  margin: 0;\n  display: block;\n  flex: 1 1 auto;\n  height: 100%;\n}\n\ndiv.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor textarea {\n  line-height: 16px;\n  margin: 0;\n  padding: 4px 0 0 3px;\n  border: 0;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  font-size: 1em;\n  font-family: monospace, monospace;\n}\n\ndiv.cl-playground div.cl-pg-view.output {\n  overflow: hidden;\n}\n\ndiv.cl-playground div.cl-pg-view.output > div {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\n\ndiv.cl-playground div.cl-pg-view.output > div pre {\n  display: block;\n  flex: 1 1 auto;\n  background: url(" + escape(__webpack_require__(/*! ./img/bars.png */ "./vendor/cl/playground/img/bars.png")) + ");\n  line-height: 16px;\n  margin: 0;\n  padding: 4px 0 0 3px;\n  border: 0;\n  overflow: auto;\n  height: 100%;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./vendor/cl/playground/_playground.scss":
/*!***********************************************!*\
  !*** ./vendor/cl/playground/_playground.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_playground.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/playground/_playground.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("139153d6", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_playground.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/playground/_playground.scss", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_playground.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/playground/_playground.scss");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/playground/img/bars.png":
/*!*******************************************!*\
  !*** ./vendor/cl/playground/img/bars.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAgAgMAAABfgKEEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURf///+L/9+H/9+X/+Oh4HTMAAAAeSURBVAjXY2AgEvz///8Dw6pVqxYwhIaGBlBOEAkAU2MY3tDf9aUAAAAASUVORK5CYII="

/***/ }),

/***/ "./vendor/cl/playground/img/menu-check.png":
/*!*************************************************!*\
  !*** ./vendor/cl/playground/img/menu-check.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAOCAYAAADNGCeJAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAVdJREFUOI2V0bFrU1EUB+DvRWNsIJNQu6t1E8ykuDgKBQlIFwdHkQ7+AwU7url0FMQ5cXFwsoMguIhSqoPtJA51EHGohedQfg55SV9jaeKFw71wDt89hyOJesx60u83srR0LlwKvdArJoGiKKZDq6vzBoOunZ1ruIgfGPwXlm73lIODW7a3l5XlIn7hNfrYNcuY2duTXm8uPAgfQj/cD4uhGQRTsezvy8pKJzwMX8KzcCGcHiGHGHPhSlgIRZrNVjY3h1BZytpap+roU3ga5v9Bxj8PkRdhN7wLd8LltNvtrK93wt3wMQzC+WORGiYU4XrYCl8r9F64HTbC+3CzqjseqmGjOBOehO/hW3hZ4Y9D60RovICjYCM8Cj8r9HO4OhUaY6M4BFvhTfgd3oaz49zE9uvRmJBHrz/YQInn1V3Pz9DZ0Q674VW17aldJTmhYDjajVmhJP4Cy1ZU6+dCg3AAAAAASUVORK5CYII="

/***/ }),

/***/ "./vendor/cl/playground/img/menubars.png":
/*!***********************************************!*\
  !*** ./vendor/cl/playground/img/menubars.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABXRSTlMAv/IBDVaQsj8AAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHElEQVQI12NgwA0YlcBAAMFgdgEDAwSDPDW4AQB2XAxb8EnVqQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./vendor/cl/playground/index.js":
/*!***************************************!*\
  !*** ./vendor/cl/playground/index.js ***!
  \***************************************/
/*! exports provided: Playground, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playground_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_playground.scss */ "./vendor/cl/playground/_playground.scss");
/* harmony import */ var _playground_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_playground_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_Playground_Playground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Playground/Playground */ "./vendor/cl/playground/js/Playground/Playground.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Playground", function() { return _js_Playground_Playground__WEBPACK_IMPORTED_MODULE_1__["Playground"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _js_Playground_Playground__WEBPACK_IMPORTED_MODULE_1__["Playground"]; });

/* harmony import */ var _js_PlaygroundFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/PlaygroundFactory */ "./vendor/cl/playground/js/PlaygroundFactory.js");





_js_PlaygroundFactory__WEBPACK_IMPORTED_MODULE_2__["PlaygroundFactory"].create(Site.site);
Site.Playground = _js_Playground_Playground__WEBPACK_IMPORTED_MODULE_1__["Playground"];

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Actions/Action.js":
/*!**************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Actions/Action.js ***!
  \**************************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
var Action = function Action(site, options) {};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/DOM/Tools.js":
/*!*********************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/DOM/Tools.js ***!
  \*********************************************************/
/*! exports provided: Tools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Convenience functions for the DOM.
 * Tools that avoid having to have jQuery installed.
 * @constructor
 */
var Tools = function Tools() {};
/**
 * Is an element visible?
 * Borrowed from jQuery!
 * @param elem
 * @returns {boolean}
 */

Tools.isVisible = function (elem) {
  return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};
/**
 * Add a class to an element
 * @param element Element to add to
 * @param className Class to add
 */


Tools.addClass = function (element, className) {
  if (element.classList) element.classList.add(className);else element.className += ' ' + className;
};

Tools.addClasses = function (element, classes) {
  if (classes === undefined || classes === null) {
    return;
  }

  classes.split(' ').forEach(function (cls) {
    Tools.addClass(element, cls);
  });
};

Tools.removeClass = function (element, className) {
  var regEx = new RegExp('\\b' + className + '\\b', 'g');
  element.className = element.className.replace(regEx, "");
};
/**
 * Create a DIV with a provided class name.
 * @param className Class to add to the div
 * @param content Content to place in the div. HTML or Element
 * @returns {Element} Created DOM Element
 */


Tools.createClassedDiv = function (className, content) {
  var div = document.createElement('div');
  Tools.addClass(div, className);

  if (content !== undefined) {
    Tools.addContent(div, content);
  }

  return div;
};
/**
 * Add content to an element.
 * @param element Element to add to
 * @param content Content. Can be HTML or an Element.
 */


Tools.addContent = function (element, content) {
  if (Tools.isString(content)) {
    element.innerHTML += content;
  } else if (Tools.isElement(content)) {
    element.appendChild(content);
  }
};
/**
 * Is the passed value a string?
 * @param val
 * @returns {boolean}
 */


Tools.isString = function (val) {
  return typeof val === 'string' || !!val && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(val) === 'object' && Object.prototype.toString.call(val) === '[object String]';
};
/**
 * Is the passed value an HTMLElement?
 * @param val
 * @returns {boolean}
 */


Tools.isElement = function (val) {
  return val !== undefined && val !== null && val.nodeValue !== undefined;
};
/**
 * Get the current position of an element (specifically its border box, which excludes margins) relative to the document.
 * @param element
 */


Tools.offset = function (element) {
  var rect = element.getBoundingClientRect();
  return {
    left: rect.left + element.scrollLeft + window.pageXOffset,
    top: rect.top + element.scrollTop + window.pageYOffset
  };
};
/**
 * Find a child by tagName
 * @param element
 * @param tagName
 * @returns {*}
 */


Tools.child = function (element, tagName) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = element.childNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var node = _step.value;

      if (node.tagName === tagName) {
        return node;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return null;
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Graphics/Toast.js":
/*!**************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Graphics/Toast.js ***!
  \**************************************************************/
/*! exports provided: Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony import */ var _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/Tools */ "./vendor/cl/playground/js/Playground/DOM/Tools.js");

/**
 * Toast notification system
 * jQuery-free
 * @param main Main object
 * @constructor
 */

var Toast = function Toast(main) {
  var _this = this;

  /** Default toast duration in milliseconds */
  this.defaultDuration = 2000;
  /** Inter-toast delay time in milliseconds */

  this.interToastDelay = 500;
  var messages = []; // Pending messages

  var active = false; // Is there an active message displaying?

  var element = null;
  /**
   * Create the toast div
   * @param div Div to put the toast into
   */

  this.create = function (div) {
    element = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].createClassedDiv('toast');
    div.appendChild(element);
    element.innerHTML = 'testing';
  };

  var show = function show() {
    if (messages.length > 0 && !active) {
      // Set the message
      var message = messages[0];
      messages.splice(0, 1);
      element.innerHTML = message.msg; // Show it

      element.classList.add('toast-active');
      active = true; // Delay while active

      setTimeout(function () {
        // Hide it
        element.classList.remove('toast-active'); // Delay between toasts

        setTimeout(function () {
          active = false;
          show();
        }, _this.interToastDelay);
      }, message.time);
    }
  };
  /**
   * Display a toast message
   * @param msg Message to display
   * @param time Time to display in milliseconds, omit for default
   */


  this.message = function (msg, time) {
    if (time === undefined) {
      time = this.defaultDuration;
    }

    messages.push({
      msg: msg,
      time: time
    });
    show();
  };
  /**
   * Display any JSON errors we have received.
   * @param jsonApi JsonAPI object
   * @returns {boolean} true if any errors existed.
   */


  this.jsonErrors = function (jsonApi) {
    var _this2 = this;

    if (jsonApi.errors() !== null) {
      jsonApi.errors().forEach(function (error) {
        _this2.message('Server Error: ' + error.title, 5000);
      });
      return true;
    }

    return false;
  };
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Main.js":
/*!****************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Main.js ***!
  \****************************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var resizer_cl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resizer-cl */ "./node_modules/resizer-cl/src/app.modules.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ "./vendor/cl/playground/js/Playground/Menu.js");
/* harmony import */ var _Graphics_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Graphics/Toast */ "./vendor/cl/playground/js/Playground/Graphics/Toast.js");
/* harmony import */ var _UI_DragAndDrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/DragAndDrop */ "./vendor/cl/playground/js/Playground/UI/DragAndDrop.js");
/* harmony import */ var _DOM_Tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/Tools */ "./vendor/cl/playground/js/Playground/DOM/Tools.js");
/* harmony import */ var _Pane__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pane */ "./vendor/cl/playground/js/Playground/Pane.js");






/**
 * Actual instance of the Playground for a single element.
 * @param playground The main Playground object
 * @param element Element we are loading into
 * @constructor
 */

var Main = function Main(playground, element) {
  this.playground = playground;
  this.site = playground.site;
  this.element = element;
  this.options = playground.options; /// div.main

  this.div = null;
  var options = playground.options; /// References to other GUI components

  var menu = null,
      tabs = null; /// div.overlay

  var divOverlay = null,
      divWork = null;

  this.initialize = function () {
    element.classList.add('cl-playground');
    element.innerHTML = '';
    element.style.display = 'block';

    if (options.height !== null) {
      element.style.height = options.height;
    }

    switch (options.display) {
      case 'full':
        element.classList.add('cl-playground-full');
        break;

      default:
        element.classList.add('cl-playground-window');
        break;
    }

    if (options.display === 'window') {
      //
      // Add resizer to the window if in window mode
      // and it has not already been added
      //
      if (!element.classList.contains("resizer")) {
        new resizer_cl__WEBPACK_IMPORTED_MODULE_0__["default"](element, {
          handle: '10px solid #18453B'
        });
      }
    }

    this.dragAndDrop = new _UI_DragAndDrop__WEBPACK_IMPORTED_MODULE_3__["DragAndDrop"](this); //
    // Create and add the window components
    //

    if (options.display !== 'inline' && options.display !== 'none') {
      //
      // All window-based versions other than inline get the
      // full user interface
      //
      // <div class="main"></div>
      this.div = _DOM_Tools__WEBPACK_IMPORTED_MODULE_4__["Tools"].createClassedDiv('cl-pg-main');
      this.element.appendChild(this.div); //
      // Add the menu
      //

      menu = new _Menu__WEBPACK_IMPORTED_MODULE_1__["Menu"](this);
      this.menu = menu; //
      // Working area
      // <div class="work"></div>
      //

      divWork = _DOM_Tools__WEBPACK_IMPORTED_MODULE_4__["Tools"].createClassedDiv('work');
      this.div.appendChild(divWork); //
      // And the root pane
      //

      this.rootPane = new _Pane__WEBPACK_IMPORTED_MODULE_5__["Pane"](this, divWork, null, null);
      this.rootPane.load(options.pane); //
      // And the overlay
      // <div class="cirsim-overlay"></div>
      //

      divOverlay = _DOM_Tools__WEBPACK_IMPORTED_MODULE_4__["Tools"].createClassedDiv('cl-pg-overlay');
      this.div.appendChild(divOverlay);
      this.toast = new _Graphics_Toast__WEBPACK_IMPORTED_MODULE_2__["Toast"](this);
      this.toast.create(this.div);
    }
  };

  this.getTab = function (tag) {
    return this.rootPane.getTab(tag);
  };
  /**
   * Called whenever a new tab is selected
   */


  this.newTab = function () {};
  /**
   * Set or clear interface modal state.
   * @param modal True sets interface to modal state.
   *
   */


  this.modal = function (modal) {
    if (modal) {
      divOverlay.style.display = 'block';
    } else {
      divOverlay.style.display = 'none';
    }
  };

  this.initialize();
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Menu.js":
/*!****************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Menu.js ***!
  \****************************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools */ "./vendor/cl/playground/js/Playground/DOM/Tools.js");
 // import {FileMenu} from './Menus/FileMenu';
// import {EditMenu} from './Menus/EditMenu';
// import {TabsMenu} from './Menus/TabsMenu';
// import {HelpMenu} from './Menus/HelpMenu';

/**
 * The program menu bar
 * @param main Main object
 * @constructor
 */

var Menu = function Menu(main) {
  var _this = this;

  var options = main.options; //
  // Create the menu components
  //
  // var fileMenu = new FileMenu(this, main);
  // var editMenu = new EditMenu(this, main);
  // var tabsMenu = new TabsMenu(this, main);
  // var helpMenu = new HelpMenu(this, main);
  /// The nav element

  this.nav = null;
  this.ul = null;

  var initialize = function initialize() {
    //
    // <nav class="menubar"><ul></ul></nav>
    //
    _this.nav = document.createElement('nav');
    _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].addClass(_this.nav, 'menubar');
    main.div.appendChild(_this.nav);
    var ul = document.createElement('ul');

    _this.nav.appendChild(ul);

    _this.ul = ul;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = options.menus[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var menu = _step.value;
        var topLI = document.createElement('li');
        ul.appendChild(topLI);
        var a = document.createElement('a');
        topLI.appendChild(a);
        a.innerText = menu.name;

        if (menu.action !== undefined) {
          (function () {
            var action = main.playground.getAction(menu.action);
            a.addEventListener('click', function (event) {
              event.preventDefault();
              action.click(main);
            });
          })();
        }
      } //
      // Add the menu component's HTML
      //
      // let html = '';
      // html += fileMenu.html();
      // html += editMenu.html();
      // html += tabsMenu.html();
      // html += helpMenu.html();
      // ul.innerHTML = html;
      //
      // Menu option for testing the Toast error reporting mechanism
      //
      // html += `<li><a class="toast-test">Toast!</a></li>`;
      // ul.innerHTML = html;
      //
      // this.toasts = 0;
      // this.click('.toast-test', (event)=> {
      // 	this.toasts++;
      // 	main.toast.message('Toast message ' + this.toasts);
      // });
      //
      // Install click handlers for all top-level menus
      //

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      var _loop = function _loop() {
        var node = _step2.value;

        if (node.tagName === 'LI') {
          node.addEventListener('click', function (event) {
            event.preventDefault(); // Find the <ul> in this menu

            var ulSub = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].child(node, 'UL');

            if (ulSub !== null) {
              if (getComputedStyle(ulSub).getPropertyValue('visibility') === 'hidden') {
                open(node);
              } else {
                // If already open, close all
                _this.closeAll();
              }
            }
          });
        }
      };

      for (var _iterator2 = ul.childNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        _loop();
      } // Activate all of the menus
      // fileMenu.activate();
      // editMenu.activate();
      // tabsMenu.activate();
      // helpMenu.activate();

    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };
  /**
      * Listen to key down events so we can close the menu
      * if we click outside of the menu while it is open.
   * @param event
   */


  var closeListener = function closeListener(event) {
    // See if we clicked on some child of nav...
    var node = event.target.parentNode;

    for (; node !== null; node = node.parentNode) {
      if (node === _this.nav) {
        return;
      }
    }

    _this.closeAll();
  }; // Open a menu


  var open = function open(li) {
    // Hide any other menus
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = _this.ul.childNodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var node = _step3.value;

        if (node.tagName === 'LI') {
          var _ul = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].child(node, 'UL');

          if (_ul !== null) {
            _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].removeClass(_ul, 'menu-open');
          }
        }
      } // tabsMenu.opening();
      // helpMenu.opening();
      // And open this menu

    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    var ul = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].child(li, 'UL');

    if (ul !== null) {
      _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].addClass(ul, 'menu-open');
    }

    document.addEventListener('click', closeListener);
    document.addEventListener('mousedown', closeListener);
  };
  /** Close all menus */


  this.closeAll = function () {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = _this.ul.childNodes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var node = _step4.value;

        if (node.tagName === 'LI') {
          var ul = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].child(node, 'UL');

          if (ul !== null) {
            _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].removeClass(ul, 'menu-open');
          }
        }
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    document.removeEventListener('click', closeListener);
    document.removeEventListener('mousedown', closeListener);
  };
  /**
      * Enable or disable a menu option by selector
   * @param sel Selector for the menu option (like '.tabs-add')
   * @param enable True to enable
   */


  this.enable = function (sel, enable) {
    var element = _this.ul.querySelector(sel);

    if (element === null) {
      return;
    }

    if (enable) {
      _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].removeClass(element.parentNode, "menu-disabled");
    } else {
      _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].addClass(element.parentNode, "menu-disabled");
    }
  };
  /**
      * Find a menu option by selector
   * @param sel
   * @returns {Element}
   */


  this.find = function (sel) {
    return _this.ul.querySelector(sel);
  };
  /**
      * Install a menu option click hander
   * @param sel Selector for the menu option
   * @param closure The closure to call (passes 'event')
   */


  this.click = function (sel, closure) {
    var element = _this.find(sel);

    if (element !== null) {
      element.addEventListener('click', function (event) {
        event.preventDefault();

        _this.closeAll();

        closure(event);
      });
    }
  };

  initialize();
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Options.js":
/*!*******************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Options.js ***!
  \*******************************************************/
/*! exports provided: Options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/**
 * Playground options.
 * @param options User provided options that override the default values.
 * @constructor
 */
var Options = function Options(options) {
  options = options ? options : {}; /// Display options
  /// window - Displays as a standard div (default)

  this.display = 'window'; /// Optional height setting

  this.height = null; /// The playground root pane

  this.pane = {}; /// The top-level menu options

  this.menus = [{
    name: 'About'
  }];

  for (var property in options) {
    if (options.hasOwnProperty(property)) {
      if (!this.hasOwnProperty(property)) {
        throw new Error("Invalid option " + property);
      }

      this[property] = options[property];
    }
  }
  /**
   * Get the API operations for a given file mode.
   * @param mode 'save', 'open'
   * @returns {*}
   */


  this.getAPI = function (mode) {
    if (this.api === null) {
      return null;
    }

    if (this.api === Object(this.api)) {
      var obj;

      if (this.api[mode] !== undefined) {
        // Mode is explicitly specified
        var modeObj = this.api[mode];

        if (modeObj.url === undefined) {
          // Mode is not supported
          return null;
        } // Send content type


        obj = {
          url: modeObj.url
        };

        if (modeObj.contentType !== undefined) {
          obj.contentType = modeObj.contentType;
        } else if (this.api.contentType !== undefined) {
          obj.contentType = this.api.contentType;
        } else {
          obj.contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
        }

        if (modeObj.extra !== undefined) {
          obj.extra = modeObj.extra;
        } else if (this.api.extra !== undefined) {
          obj.extra = this.api.extra;
        } else {
          obj.extra = {};
        }

        if (modeObj.name !== undefined) {
          obj.name = modeObj.name;
        } else if (this.api.name !== undefined) {
          obj.name = this.api.name;
        }
      } else {
        if (this.api.url === undefined) {
          return null;
        }

        obj = {
          url: this.api.url
        };

        if (this.api.extra !== undefined) {
          obj.extra = this.api.extra;
        } else {
          obj.extra = {};
        }

        if (this.api.name !== undefined) {
          obj.name = this.api.name;
        }
      }

      return obj;
    } else {
      return {
        url: this.api
      };
    }
  };
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Pane.js":
/*!****************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Pane.js ***!
  \****************************************************/
/*! exports provided: Pane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pane", function() { return Pane; });
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs */ "./vendor/cl/playground/js/Playground/Tabs.js");

/**
 * A Pane is an area of the IDE screen that either contains a tab set or two child panes.
 * @param main Main object
 * @param element Element that is the host for the pane
 * @param parent Pane parent object
 * @constructor
 */

var Pane = function Pane(main, element, parent) {
  var _this = this;

  this.minSplit = 10;
  this.maxSplit = 90;
  var div = null,
      child1 = null,
      child2 = null;
  var horizontalSplit = null;
  var tabs = null;

  var initialize = function initialize() {
    //
    // Create and add the div
    //
    div = document.createElement('div');
    _this.div = div;

    if (parent === null) {
      div.classList.add('cl-playground-root');
    }

    element.appendChild(div); // if(donorTabs !== null) {
    // 	tabs = donorTabs;
    // 	tabs.newParent(this);
    // } else {
    // 	tabs = new Tabs(main, div);
    // }
  };
  /**
   * Load the pane from the data
   * @param data Data from options for this pane
   */


  this.load = function (data) {
    if (data.child1 !== undefined) {
      // This is a split pane
      this.split(data.horiz, data.child1, data.child2);
      this.percentage(data.percentage);
    } else {
      tabs = new _Tabs__WEBPACK_IMPORTED_MODULE_0__["Tabs"](main, div);
      tabs.load(data.tabs);
    }
  };

  this.split = function (horizontal, child1Data, child2Data) {
    horizontalSplit = horizontal;
    child1 = new Pane(main, div, this, tabs);
    child2 = new Pane(main, div, this, null);
    tabs = null;

    if (horizontal) {
      child1.div.classList.add('cl-playground-left');
      child2.div.classList.add('cl-playground-right');
    } else {
      div.style.flexDirection = 'column';
      child1.div.classList.add('cl-playground-top');
      child2.div.classList.add('cl-playground-bottom');
    }

    var bar = document.createElement('div');
    bar.classList.add('cl-bar');
    child1.div.appendChild(bar);
    bar.addEventListener('mousedown', function (event) {
      event.preventDefault();
      startDragging(event.pageX, event.pageY);
      element.addEventListener('mousemove', mouseMove);
      element.addEventListener('mouseup', mouseUp);
    });
    bar.addEventListener('touchstart', function (event) {
      event.preventDefault();
      console.log(event);
      var touch = event.changedTouches[0];
      startDragging(touch.pageX, touch.pageY);
      element.addEventListener('touchmove', touchMove);
      element.addEventListener('touchend', touchEnd);
      element.addEventListener('touchcancel', touchCancel);
    });
    this.child1 = child1;
    this.child2 = child2;
    this.percentage(50);

    if (child1Data !== undefined) {
      child1.load(child1Data);
    }

    if (child2Data !== undefined) {
      child2.load(child2Data);
    }

    return {
      child1: child1,
      child2: child2
    };
  };

  var startX = null,
      startY = null;

  var startDragging = function startDragging(x, y) {
    startX = x;
    startY = y;
  };

  var endDragging = function endDragging() {
    startX = null;
    startY = null;
  };

  var dragging = function dragging(x, y) {
    var rect = element.getBoundingClientRect();

    if (horizontalSplit) {
      var mainX = rect.left + element.scrollLeft + window.pageXOffset;
      var wid = rect.right - rect.left;

      if (wid <= 0) {
        return;
      }

      var per = (x - mainX) / wid * 100;

      _this.percentage(per);
    } else {
      var mainY = rect.top + element.scrollTop + window.pageYOffset;
      var hit = rect.bottom - rect.top;

      if (hit <= 0) {
        return;
      }

      var _per = (y - mainY) / hit * 100;

      _this.percentage(_per);
    }
  };

  var mouseMove = function mouseMove(event) {
    event.preventDefault();

    if (event.which === 0) {
      mouseUp(event);
      return;
    }

    dragging(event.pageX, event.pageY);
  };

  var mouseUp = function mouseUp(event) {
    event.preventDefault();
    element.removeEventListener('mousemove', mouseMove);
    element.removeEventListener('mouseup', mouseUp);
    endDragging(event.pageX, event.pageY);
  };

  var touchMove = function touchMove(event) {
    event.preventDefault();
    var touch = event.changedTouches[0];
    dragging(touch.pageX, touch.pageY);
  };

  var touchEnd = function touchEnd(event) {
    event.preventDefault();
    var touch = event.changedTouches[0];
    dragging(touch.pageX, touch.pageY);
    element.removeEventListener('touchmove', touchMove);
    element.removeEventListener('touchend', touchEnd);
    element.removeEventListener('touchcancel', touchCancel);
    endDragging(event.pageX, event.pageY);
  };

  var touchCancel = function touchCancel(event) {
    touchEnd(event);
  };

  this.percentage = function (per) {
    if (per < this.minSplit) {
      per = this.minSplit;
    } else if (per > this.maxSplit) {
      per = this.maxSplit;
    }

    if (horizontalSplit) {
      child1.div.style.width = per + '%';
    } else {
      child1.div.style.height = per + '%';
    }
  };

  this.getTab = function (tag) {
    var _arr = [tabs, child1, child2];

    for (var _i = 0; _i < _arr.length; _i++) {
      var collection = _arr[_i];

      if (collection !== null) {
        var tab = collection.getTab(tag);

        if (tab !== null) {
          return tab;
        }
      }
    }

    return null;
  };

  initialize();
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Playground.js":
/*!**********************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Playground.js ***!
  \**********************************************************/
/*! exports provided: Playground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Playground", function() { return Playground; });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ "./vendor/cl/playground/js/Playground/Main.js");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options */ "./vendor/cl/playground/js/Playground/Options.js");
/* harmony import */ var _Utility_Ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utility/Ready */ "./vendor/cl/playground/js/Playground/Utility/Ready.js");
/* harmony import */ var _Actions_Action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Actions/Action */ "./vendor/cl/playground/js/Playground/Actions/Action.js");




/**
 * Create an instance of the Playground
 *
 * This creates a single Instance that manages the
 * components and starts actual Playground windows.
 *
 * Construct and start running like this:
 *
 * Given an HTML div:
 *     <div id="playground"></div>
 *
 * The following script starts Playground in that div:
 *
 *     var playground = new Playground('#playground');
 *     playground.start();
 *
 * @param site Site object
 * @param sel Selector or element to create Playground in (can be many)
 * @param options An object containing Playground options.
 * @constructor
 */

var Playground = function Playground(site, sel, options) {
  var _this = this;

  //
  // Master set of the version
  //
  var PACKAGE = __webpack_require__(/*! ../../package.json */ "./vendor/cl/playground/package.json");

  this.version = PACKAGE.version;
  this.site = site; // Record the selector

  this.sel = sel; // The Options object that manages user options

  this.options = new _Options__WEBPACK_IMPORTED_MODULE_1__["Options"](options); // A collection of Main objects.

  var mains = [];
  /**
   * Start the Playground running, creating the user interface.
   * This does wait for document ready before calling
   * this.startNow() unless we are running in no-window
   * mode. In that case it returns a started instance.
   */

  this.start = function () {
    if (sel === null) {
      return _this.startNow();
    }

    _Utility_Ready__WEBPACK_IMPORTED_MODULE_2__["Ready"].go(function () {
      _this.startNow();
    });
  };
  /**
   * Start the Playground running now. Does not wait for document ready.
   */


  this.startNow = function () {
    if (sel instanceof Element) {
      var main = new _Main__WEBPACK_IMPORTED_MODULE_0__["Main"](_this, sel);
      mains.push(main);
    } else {
      var elements = document.querySelectorAll(sel);

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        var _main = new _Main__WEBPACK_IMPORTED_MODULE_0__["Main"](_this, element);

        mains.push(_main);
      }
    }

    if (mains.length === 1) {
      return mains[0];
    }

    return null;
  };
  /**
   * Get a constructed Action object from the available playground actions.
   * @param action The action data from the server.
   * @returns Action object
   */


  this.getAction = function (action) {
    if (Playground.actions[action.tag] !== undefined) {
      return new Playground.actions[action.tag](site, action);
    }

    console.log('Playground action ' + action.tag + ' does not exist');
    return null;
  };
};
Playground.Action = _Actions_Action__WEBPACK_IMPORTED_MODULE_3__["Action"];
Playground.actions = {};

Playground.addAction = function (action) {
  this.actions[action.tag] = action;
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Tabs.js":
/*!****************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Tabs.js ***!
  \****************************************************/
/*! exports provided: Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools */ "./vendor/cl/playground/js/Playground/DOM/Tools.js");
/* harmony import */ var _Tabs_OutputTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs/OutputTab */ "./vendor/cl/playground/js/Playground/Tabs/OutputTab.js");
/* harmony import */ var _Tabs_EditorTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tabs/EditorTab */ "./vendor/cl/playground/js/Playground/Tabs/EditorTab.js");
/* harmony import */ var _img_menubars_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/menubars.png */ "./vendor/cl/playground/img/menubars.png");
/* harmony import */ var _img_menubars_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_menubars_png__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Manages the tabs in the model
 * @param main Main object
 * @param element Parent element
 * @constructor
 */

var Tabs = function Tabs(main, element) {
  /// The currently active view/tab
  this.active = -1; /// The Main object

  this.main = main; /// The Site object

  this.site = main.site; // The collection of tabs

  var tabs = []; //
  // The structure: <div class="cl-tabs"><ul></ul><div class="cl-views"></div></div>
  // div.tabs - Enclosure for all tabs content
  // ul - The tabs we select from
  // viewsDiv - The views with the tab contents
  //

  var tabsDiv = null,
      ul = null,
      viewsDiv = null;
  /**
      * Create the tabs system
   * @param div The div we put the tabs into
   */

  this.create = function (div) {
    // Create: <div class="cl-tabs"><ul></ul><div class="cl-views"></div></div>
    tabsDiv = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].createClassedDiv('cl-pg-tabs');
    ul = document.createElement('ul');
    tabsDiv.appendChild(ul);
    viewsDiv = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].createClassedDiv('cl-pg-views');
    tabsDiv.appendChild(viewsDiv);
    div.appendChild(tabsDiv); // Clear the tabs collection

    tabs = []; //	this.add('program');
    //		this.add('output');
  };

  this.load = function (data) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var tabData = _step.value;
        this.add(tabData);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  this.newParent = function (pane) {
    pane.div.appendChild(tabsDiv);
  };

  this.add = function (data) {
    var tab = null;

    switch (data.type) {
      case 'editor':
        tab = new _Tabs_EditorTab__WEBPACK_IMPORTED_MODULE_2__["EditorTab"](this, data);
        break;

      case 'output':
        tab = new _Tabs_OutputTab__WEBPACK_IMPORTED_MODULE_1__["OutputTab"](this, data);
        break;
    }

    if (tab !== null) {
      ul.appendChild(tab.li);
      viewsDiv.appendChild(tab.view);
      tabs.push({
        tab: tab,
        li: tab.li,
        view: tab.view
      });
      tab.select();
    }
  };
  /**
   * Get a tab by tag.
   * @param tag Tab tag
   * @returns {*}
   */


  this.getTab = function (tag) {
    for (var _i = 0; _i < tabs.length; _i++) {
      var tab = tabs[_i];

      if (tab.tab.tag === tag) {
        return tab.tab;
      }
    }

    return null;
  };

  this.unselectAll = function () {
    //
    // Clear all selections
    //
    tabs.forEach(function (tab) {
      tab.li.classList.remove('selected');
      tab.view.classList.remove('selected');
    });
  };

  this.destroy = function () {
    this.active = -1;
    tabsDiv.parentNode.removeChild(tabsDiv);
    tabsDiv = null;
    tabs = [];
  };

  this.create(element);
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Tabs/EditorTab.js":
/*!**************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Tabs/EditorTab.js ***!
  \**************************************************************/
/*! exports provided: EditorTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorTab", function() { return EditorTab; });
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab */ "./vendor/cl/playground/js/Playground/Tabs/Tab.js");
/* harmony import */ var _DOM_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/Tools */ "./vendor/cl/playground/js/Playground/DOM/Tools.js");


var EditorTab = function EditorTab(tabs, data) {
  _Tab__WEBPACK_IMPORTED_MODULE_0__["Tab"].call(this, tabs, data);
  var site = tabs.site;
  var view = document.createElement('div');
  view.classList.add('cl-pg-view');
  view.classList.add('editor');
  this.view = view;
  var innerView = document.createElement('div');
  view.appendChild(innerView);
  var nums = document.createElement('div');
  nums.classList.add('cl-pg-nums');
  innerView.appendChild(nums);
  var editorDiv = document.createElement('div');
  editorDiv.classList.add('cl-pg-editor');
  innerView.appendChild(editorDiv);
  var editor = new site.Editor(editorDiv, {
    resize: 'none',
    tab: true,
    autoIndent: true,
    styles: null
  });
  var scrollable = editor.textarea;
  scrollable.addEventListener('scroll', function (event) {
    // editorDiv.style.backgroundPosition = '0px ' + (-pre.scrollTop) + 'px';
    nums.scrollTop = scrollable.scrollTop;
  });

  this.set = function (text) {
    editor.textarea.value = text;
    var lines = 0;

    for (var i = 0; i < text.length; ++i) {
      if (text[i] === '\n') {
        lines++;
      }
    }

    if (lines < 100) {
      lines = 100;
    } // The extra added on here ensures we get past any scroll bar
    // that may take up horizontal room.


    nums.innerHTML = '';

    for (var _i = 1; _i <= lines + 5; _i++) {
      var p = document.createElement('p');
      p.innerText = '' + _i;
      nums.appendChild(p);
    }
  };
  /**
   * Get the contents of the editor
   * @returns {*|string}
   */


  this.get = function () {
    return editor.textarea.value;
  };

  this.select = function () {
    _Tab__WEBPACK_IMPORTED_MODULE_0__["Tab"].prototype.select.call(this);
    setTimeout(function () {
      editor.textarea.focus();
    }, 0);
  };

  var text = "import {Tab} from './Tab';\nimport {Tools} from \"../DOM/Tools\";\n\nexport const OutputTab = function(tabs, data) {export const OutputTab = function(tabs, data) {export const OutputTab = function(tabs, data) {\n\tTab.call(this, tabs, data);\n\n\tlet view = document.createElement('div');\n\tview.classList.add('cl-pg-view');\n\tview.classList.add('output');\n\tthis.view = view;\n\t\n\tview.innerText = ``;\n}\n\nimport {Tab} from './Tab';\nimport {Tools} from \"../DOM/Tools\";\n\nexport const OutputTab = function(tabs, data) {\n\tTab.call(this, tabs, data);\n\n\tlet view = document.createElement('div');\n\tview.classList.add('cl-pg-view');\n\tview.classList.add('output');\n\tthis.view = view;\n\t\n\tview.innerText = ``;\n}\nimport {Tab} from './Tab';\nimport {Tools} from \"../DOM/Tools\";\n\nexport const OutputTab = function(tabs, data) {\n\tTab.call(this, tabs, data);\n\n\tlet view = document.createElement('div');\n\tview.classList.add('cl-pg-view');\n\tview.classList.add('output');\n\tthis.view = view;\n\t\n\tview.innerText = ``;\n}\n\nOutputTab.prototype = Object.create(Tab.prototype);\nOutputTab.prototype.constructor = OutputTab;";
  text = ".text\n.thumb\n\nloop:\n    mov r0,#7\n    mov r1,r2\n    and r3,r4\n    b loop";
  this.set('');
};
EditorTab.prototype = Object.create(_Tab__WEBPACK_IMPORTED_MODULE_0__["Tab"].prototype);
EditorTab.prototype.constructor = EditorTab;

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Tabs/OutputTab.js":
/*!**************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Tabs/OutputTab.js ***!
  \**************************************************************/
/*! exports provided: OutputTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputTab", function() { return OutputTab; });
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab */ "./vendor/cl/playground/js/Playground/Tabs/Tab.js");
/* harmony import */ var _DOM_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/Tools */ "./vendor/cl/playground/js/Playground/DOM/Tools.js");


var OutputTab = function OutputTab(tabs, data) {
  _Tab__WEBPACK_IMPORTED_MODULE_0__["Tab"].call(this, tabs, data);
  var view = document.createElement('div');
  view.classList.add('cl-pg-view');
  view.classList.add('output');
  this.view = view;
  var innerView = document.createElement('div');
  view.appendChild(innerView);
  var nums = document.createElement('div');
  nums.classList.add('cl-pg-nums');
  innerView.appendChild(nums);
  var pre = document.createElement('pre');
  innerView.appendChild(pre);
  pre.addEventListener('scroll', function (event) {
    pre.style.backgroundPosition = '0px ' + -pre.scrollTop + 'px';
    nums.scrollTop = pre.scrollTop;
  });

  this.set = function (text) {
    pre.innerHTML = text;
    var lines = 0;

    for (var i = 0; i < text.length; ++i) {
      if (text[i] === '\n') {
        lines++;
      }
    }

    if (lines < 100) {
      lines = 100;
    } // The extra added on here ensures we get past any scroll bar
    // that may take up horizontal room.


    nums.innerHTML = '';

    for (var _i = 1; _i <= lines + 5; _i++) {
      var p = document.createElement('p');
      p.innerText = '' + _i;
      nums.appendChild(p);
    }
  };

  var text = "import {Tab} from './Tab';\nimport {Tools} from \"../DOM/Tools\";\n\nexport const OutputTab = function(tabs, data) {export const OutputTab = function(tabs, data) {export const OutputTab = function(tabs, data) {\n\tTab.call(this, tabs, data);\n\n\tlet view = document.createElement('div');\n\tview.classList.add('cl-pg-view');\n\tview.classList.add('output');\n\tthis.view = view;\n\t\n\tview.innerText = ``;\n}\n\nimport {Tab} from './Tab';\nimport {Tools} from \"../DOM/Tools\";\n\nexport const OutputTab = function(tabs, data) {\n\tTab.call(this, tabs, data);\n\n\tlet view = document.createElement('div');\n\tview.classList.add('cl-pg-view');\n\tview.classList.add('output');\n\tthis.view = view;\n\t\n\tview.innerText = ``;\n}\nimport {Tab} from './Tab';\nimport {Tools} from \"../DOM/Tools\";\n\nexport const OutputTab = function(tabs, data) {\n\tTab.call(this, tabs, data);\n\n\tlet view = document.createElement('div');\n\tview.classList.add('cl-pg-view');\n\tview.classList.add('output');\n\tthis.view = view;\n\t\n\tview.innerText = ``;\n}\n\nOutputTab.prototype = Object.create(Tab.prototype);\nOutputTab.prototype.constructor = OutputTab;"; //this.set(text + text + text + text);

  this.set('');
};
OutputTab.prototype = Object.create(_Tab__WEBPACK_IMPORTED_MODULE_0__["Tab"].prototype);
OutputTab.prototype.constructor = OutputTab;

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Tabs/Tab.js":
/*!********************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Tabs/Tab.js ***!
  \********************************************************/
/*! exports provided: Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
var Tab = function Tab(tabs, data) {
  var _this = this;

  this.tabs = tabs;
  this.view = null;
  this.tag = data.tag;
  var li = document.createElement('li');
  this.li = li;
  var a = document.createElement('a');
  li.appendChild(a);
  a.innerText = data.name;
  var menu = document.createElement('a');
  li.appendChild(menu); // let img = document.createElement('img');
  // menu.appendChild(img);
  // img.src = menubars;

  li.addEventListener('click', function (event) {
    event.preventDefault();

    _this.select();
  });
  a.addEventListener('click', function (event) {
    event.preventDefault();

    _this.select();
  }); //
  // The menu
  // Maybe activate later on?
  //
  // const menuDiv = document.createElement('div');
  // menuDiv.classList.add('cl-tab-menu');
  // menuDiv.classList.add('cl-menu-open');
  // li.appendChild(menuDiv);
  //
  // const menuUL = document.createElement('ul');
  // menuDiv.appendChild(menuUL);
  // menuUL.innerHTML =
  // 	'<li><a class="edit-undo"><span class="icons-cl icons-cl-arrowreturnthick-1-w"></span>Undo</a></li>' +
  // 	'<li><a class="edit-delete"><span class="icons-cl icons-cl-trash"></span>Delete</a></li>';
  //
  // const connectDiv = document.createElement('div');
  // menuDiv.appendChild(connectDiv);
  //
  // img = document.createElement('img');
  // connectDiv.appendChild(img);
  // img.src = menubars;
};

Tab.prototype.select = function () {
  this.tabs.unselectAll();
  this.li.classList.add('selected');
  this.view.classList.add('selected');
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/UI/DragAndDrop.js":
/*!**************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/UI/DragAndDrop.js ***!
  \**************************************************************/
/*! exports provided: DragAndDrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDrop", function() { return DragAndDrop; });
/**
 * Drag and drop support for the palette
 * @constructor
 */
var DragAndDrop = function DragAndDrop(main) {
  var dragElement = null; // DOM Element

  var dragItem = null; // PaletteItem

  var dropViews = []; // View

  var initialize = function initialize() {
    main.element.addEventListener('mousemove', function (event) {
      if (event.which === 0) {
        mouseUp(event.pageX, event.pageY);
        return;
      }

      mouseMove(event.pageX, event.pageY);
    });
    main.element.addEventListener('touchmove', function (event) {
      var touch = event.changedTouches[0];
      mouseMove(touch.pageX, touch.pageY);
    });
    main.element.addEventListener('mouseup', function (event) {
      mouseUp(event.pageX, event.pageY);
    });
    main.element.addEventListener('touchend', function (event) {
      var touch = event.changedTouches[0];
      mouseUp(touch.pageX, touch.pageY);
    });
    main.element.addEventListener('touchcancel', function (event) {
      var touch = event.changedTouches[0];
      mouseUp(touch.pageX, touch.pageY);
    });
  };

  this.draggable = function (paletteItem) {
    paletteItem.element.addEventListener('mousedown', function (event) {
      event.preventDefault();
      click(paletteItem);
      mouseMove(event.pageX, event.pageY);
    });
    paletteItem.element.addEventListener('touchstart', function (event) {
      event.preventDefault();
      click(paletteItem);
      var touch = event.changedTouches[0];
      mouseMove(touch.pageX, touch.pageY);
    });
  };

  this.droppable = function (view, callback) {
    dropViews.push({
      'view': view,
      'callback': callback
    });
  };

  var click = function click(paletteItem) {
    //
    // Create a copy of the element and set it up for dragging
    //
    var clone = paletteItem.paletteImage();
    main.element.appendChild(clone);
    clone.style.position = 'absolute';
    clone.style.top = 0;
    clone.style.left = 0;
    clone.style.zIndex = 100;
    clone.style.cursor = 'pointer';
    dragItem = paletteItem;
    dragElement = clone;
  };

  var mouseMove = function mouseMove(x, y) {
    if (dragElement !== null) {
      var rect = main.element.getBoundingClientRect();
      var mainX = rect.left + main.element.scrollLeft + window.pageXOffset;
      var mainY = rect.top + main.element.scrollTop + window.pageYOffset;
      dragElement.style.left = x - mainX - dragElement.clientWidth / 2 + 'px';
      dragElement.style.top = y - mainY - dragElement.clientHeight / 2 + 'px';
      return true;
    }

    return false;
  };

  var mouseUp = function mouseUp(x, y) {
    if (dragElement !== null) {
      for (var _i = 0; _i < dropViews.length; _i++) {
        var view = dropViews[_i];
        //
        // Is the view enabled?
        //
        var viewElement = view.view.element;

        if (viewElement.parentNode.style.display === 'none') {
          continue;
        } //
        // Determine x,y in the canvas
        //


        var rect = viewElement.getBoundingClientRect();
        var viewX = rect.left + viewElement.scrollLeft + window.pageXOffset;
        var viewY = rect.top + viewElement.scrollTop + window.pageYOffset;

        if (x >= viewX && y >= viewY && x < viewX + (rect.right - rect.left) && y < viewY + (rect.bottom - rect.top)) {
          view.callback(dragItem, x - viewX, y - viewY);
          break;
        }
      }

      main.element.removeChild(dragElement);
      dragElement = null;
      dragItem = null;
    }
  };

  initialize();
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Utility/Ready.js":
/*!*************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Utility/Ready.js ***!
  \*************************************************************/
/*! exports provided: Ready */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ready", function() { return Ready; });
/**
 * Simple Document ready function, equivalent to jQuery's document ready.
 * @constructor
 */
var Ready = function Ready() {};
/**
 * Call a function when the document is readon.
 * @param fn Function to be called on document ready
 */

Ready.go = function (fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/***/ }),

/***/ "./vendor/cl/playground/js/PlaygroundFactory.js":
/*!******************************************************!*\
  !*** ./vendor/cl/playground/js/PlaygroundFactory.js ***!
  \******************************************************/
/*! exports provided: PlaygroundFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundFactory", function() { return PlaygroundFactory; });
/* harmony import */ var _Playground_Playground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Playground/Playground */ "./vendor/cl/playground/js/Playground/Playground.js");

var PlaygroundFactory = function PlaygroundFactory() {};

PlaygroundFactory.create = function (site) {
  function install() {
    var elements = document.querySelectorAll('div.cl-playground');

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var json = JSON.parse(element.textContent);
      element.innerHTML = '';
      var playground = new _Playground_Playground__WEBPACK_IMPORTED_MODULE_0__["Playground"](site, element, json);
      playground.startNow();
    }
  }

  site.start(function () {
    install();
  });
  site.Playground = _Playground_Playground__WEBPACK_IMPORTED_MODULE_0__["Playground"];
};

/***/ }),

/***/ "./vendor/cl/playground/package.json":
/*!*******************************************!*\
  !*** ./vendor/cl/playground/package.json ***!
  \*******************************************/
/*! exports provided: name, version, description, main, keywords, author, license, devDependencies, dependencies, default */
/***/ (function(module) {

module.exports = {"name":"playground-cl","version":"2.0.0","description":"CourseLib Playground IDE","main":"index.js","keywords":["Education","Course Web Sites","Karnaugh Maps"],"author":"Charles B. Owen","license":"MIT","devDependencies":{},"dependencies":{"course-cl":">=0.0.1"}};

/***/ })

},[["./vendor/cl/playground/index.js","runtime","common","vendor"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL19wbGF5Z3JvdW5kLnNjc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvX3BsYXlncm91bmQuc2Nzcz80NmUxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2ltZy9iYXJzLnBuZyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbWcvbWVudS1jaGVjay5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvaW1nL21lbnViYXJzLnBuZyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvRE9NL1Rvb2xzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvR3JhcGhpY3MvVG9hc3QuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9NYWluLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvTWVudS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9QYW5lLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvUGxheWdyb3VuZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1RhYnMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9UYWJzL0VkaXRvclRhYi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1RhYnMvT3V0cHV0VGFiLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVGFicy9UYWIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9VSS9EcmFnQW5kRHJvcC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1V0aWxpdHkvUmVhZHkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZEZhY3RvcnkuanMiXSwibmFtZXMiOlsiUGxheWdyb3VuZEZhY3RvcnkiLCJjcmVhdGUiLCJTaXRlIiwic2l0ZSIsIlBsYXlncm91bmQiLCJBY3Rpb24iLCJvcHRpb25zIiwiVG9vbHMiLCJpc1Zpc2libGUiLCJlbGVtIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJnZXRDbGllbnRSZWN0cyIsImxlbmd0aCIsImFkZENsYXNzIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImFkZENsYXNzZXMiLCJjbGFzc2VzIiwidW5kZWZpbmVkIiwic3BsaXQiLCJmb3JFYWNoIiwiY2xzIiwicmVtb3ZlQ2xhc3MiLCJyZWdFeCIsIlJlZ0V4cCIsInJlcGxhY2UiLCJjcmVhdGVDbGFzc2VkRGl2IiwiY29udGVudCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFkZENvbnRlbnQiLCJpc1N0cmluZyIsImlubmVySFRNTCIsImlzRWxlbWVudCIsImFwcGVuZENoaWxkIiwidmFsIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwibm9kZVZhbHVlIiwib2Zmc2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJzY3JvbGxMZWZ0Iiwid2luZG93IiwicGFnZVhPZmZzZXQiLCJ0b3AiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImNoaWxkIiwidGFnTmFtZSIsImNoaWxkTm9kZXMiLCJub2RlIiwiVG9hc3QiLCJtYWluIiwiZGVmYXVsdER1cmF0aW9uIiwiaW50ZXJUb2FzdERlbGF5IiwibWVzc2FnZXMiLCJhY3RpdmUiLCJzaG93IiwibWVzc2FnZSIsInNwbGljZSIsIm1zZyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJ0aW1lIiwicHVzaCIsImpzb25FcnJvcnMiLCJqc29uQXBpIiwiZXJyb3JzIiwiZXJyb3IiLCJ0aXRsZSIsIk1haW4iLCJwbGF5Z3JvdW5kIiwibWVudSIsInRhYnMiLCJkaXZPdmVybGF5IiwiZGl2V29yayIsImluaXRpYWxpemUiLCJzdHlsZSIsImRpc3BsYXkiLCJoZWlnaHQiLCJjb250YWlucyIsIlJlc2l6ZXIiLCJoYW5kbGUiLCJkcmFnQW5kRHJvcCIsIkRyYWdBbmREcm9wIiwiTWVudSIsInJvb3RQYW5lIiwiUGFuZSIsImxvYWQiLCJwYW5lIiwidG9hc3QiLCJnZXRUYWIiLCJ0YWciLCJuZXdUYWIiLCJtb2RhbCIsIm5hdiIsInVsIiwibWVudXMiLCJ0b3BMSSIsImEiLCJpbm5lclRleHQiLCJuYW1lIiwiYWN0aW9uIiwiZ2V0QWN0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjbGljayIsInVsU3ViIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJvcGVuIiwiY2xvc2VBbGwiLCJjbG9zZUxpc3RlbmVyIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImxpIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVuYWJsZSIsInNlbCIsInF1ZXJ5U2VsZWN0b3IiLCJmaW5kIiwiY2xvc3VyZSIsIk9wdGlvbnMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJnZXRBUEkiLCJtb2RlIiwiYXBpIiwib2JqIiwibW9kZU9iaiIsInVybCIsImNvbnRlbnRUeXBlIiwiZXh0cmEiLCJwYXJlbnQiLCJtaW5TcGxpdCIsIm1heFNwbGl0IiwiY2hpbGQxIiwiY2hpbGQyIiwiaG9yaXpvbnRhbFNwbGl0IiwiZGF0YSIsImhvcml6IiwicGVyY2VudGFnZSIsIlRhYnMiLCJob3Jpem9udGFsIiwiY2hpbGQxRGF0YSIsImNoaWxkMkRhdGEiLCJmbGV4RGlyZWN0aW9uIiwiYmFyIiwic3RhcnREcmFnZ2luZyIsInBhZ2VYIiwicGFnZVkiLCJtb3VzZU1vdmUiLCJtb3VzZVVwIiwiY29uc29sZSIsImxvZyIsInRvdWNoIiwiY2hhbmdlZFRvdWNoZXMiLCJ0b3VjaE1vdmUiLCJ0b3VjaEVuZCIsInRvdWNoQ2FuY2VsIiwic3RhcnRYIiwic3RhcnRZIiwieCIsInkiLCJlbmREcmFnZ2luZyIsImRyYWdnaW5nIiwibWFpblgiLCJ3aWQiLCJyaWdodCIsInBlciIsIm1haW5ZIiwiaGl0IiwiYm90dG9tIiwid2hpY2giLCJ3aWR0aCIsImNvbGxlY3Rpb24iLCJ0YWIiLCJQQUNLQUdFIiwicmVxdWlyZSIsInZlcnNpb24iLCJtYWlucyIsInN0YXJ0Iiwic3RhcnROb3ciLCJSZWFkeSIsImdvIiwiRWxlbWVudCIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJhY3Rpb25zIiwiYWRkQWN0aW9uIiwidGFic0RpdiIsInZpZXdzRGl2IiwidGFiRGF0YSIsIm5ld1BhcmVudCIsInR5cGUiLCJFZGl0b3JUYWIiLCJPdXRwdXRUYWIiLCJ2aWV3Iiwic2VsZWN0IiwidW5zZWxlY3RBbGwiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJUYWIiLCJpbm5lclZpZXciLCJudW1zIiwiZWRpdG9yRGl2IiwiZWRpdG9yIiwiRWRpdG9yIiwicmVzaXplIiwiYXV0b0luZGVudCIsInN0eWxlcyIsInNjcm9sbGFibGUiLCJ0ZXh0YXJlYSIsInNldCIsInRleHQiLCJ2YWx1ZSIsImxpbmVzIiwicCIsImdldCIsImZvY3VzIiwiY29uc3RydWN0b3IiLCJwcmUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJkcmFnRWxlbWVudCIsImRyYWdJdGVtIiwiZHJvcFZpZXdzIiwiZHJhZ2dhYmxlIiwicGFsZXR0ZUl0ZW0iLCJkcm9wcGFibGUiLCJjYWxsYmFjayIsImNsb25lIiwicGFsZXR0ZUltYWdlIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjdXJzb3IiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInZpZXdFbGVtZW50Iiwidmlld1giLCJ2aWV3WSIsImZuIiwiYXR0YWNoRXZlbnQiLCJyZWFkeVN0YXRlIiwiaW5zdGFsbCIsImpzb24iLCJKU09OIiwicGFyc2UiLCJ0ZXh0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBLGFBQWEsbUJBQU8sQ0FBQyx1R0FBb0Q7QUFDekUsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWtEO0FBQ3JGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxnQ0FBZ0MsdUJBQXVCLGNBQWMsdUJBQXVCLGlDQUFpQyxpQkFBaUIsNEZBQTRGLGtFQUFrRSxxQkFBcUIsNkJBQTZCLGdCQUFnQiw4QkFBOEIsaUJBQWlCLHVCQUF1QixpQ0FBaUMsa0NBQWtDLG1CQUFtQixHQUFHLDhDQUE4Qyx3QkFBd0IsOEJBQThCLG1DQUFtQyxpQkFBaUIsR0FBRyx1QkFBdUIsa0JBQWtCLEdBQUcsbUNBQW1DLG1CQUFtQix1QkFBdUIsaUJBQWlCLGNB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b0IsRUFBcEI7QUFDQSxVQUFNMkMsVUFBVSxHQUFHLElBQUkzRSxpRUFBSixDQUFlRCxJQUFmLEVBQXFCWSxPQUFyQixFQUE4QmdQLElBQTlCLENBQW5CO0FBQ0FoTCxnQkFBVSxDQUFDaUgsUUFBWDtBQUNBO0FBQ0Q7O0FBRUQ3TCxNQUFJLENBQUM0TCxLQUFMLENBQVksWUFBTTtBQUNqQitELFdBQU87QUFDUCxHQUZEO0FBSUEzUCxNQUFJLENBQUNDLFVBQUwsR0FBa0JBLGlFQUFsQjtBQUNBLENBbEJELEMiLCJmaWxlIjoicGxheWdyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlBsYXlncm91bmRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiUGxheWdyb3VuZFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLXBsYXlncm91bmQgZGl2LnRvYXN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjNlbSk7XFxuICB6LWluZGV4OiA0MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC40cywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDMwZW0vMik7XFxuICB3aWR0aDogMzBlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LnRvYXN0LnRvYXN0LWFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC40cztcXG4gIHotaW5kZXg6IDQwMDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIge1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDA7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzgwODA4MDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMDA3OTZCO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciBsaSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgbGkgYSxcXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciBsaSBhOmxpbmssXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgbGkgYTp2aXNpdGVkIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyID4gdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgPiB1bCBpbWcuY2hlY2sge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgd2lkdGg6IDE5cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBjb250ZW50OiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vaW1nL21lbnUtY2hlY2sucG5nXCIpKSArIFwiKTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgPiB1bCA+IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDAuMjVlbSAyZW0gMC4yNWVtIDAuNWVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciA+IHVsID4gbGkgYSxcXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciA+IHVsID4gbGkgYTpsaW5rLFxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyID4gdWwgPiBsaSBhOnZpc2l0ZWQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgPiB1bCB1bCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMTAwJTtcXG4gIG1hcmdpbjogMXB4IDAgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgPiB1bCB1bCA+IGxpIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgPiB1bCB1bCA+IGxpIGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDhlbTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciA+IHVsIHVsID4gbGkubWVudS1kaXNhYmxlZCBhIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgPiB1bCB1bC5tZW51LW9wZW4ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciA+IHVsIHVsLmVkaXQtbWVudSBhIHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyID4gdWwgdWwub3B0aW9uLW1lbnUgYSB7XFxuICB3aWR0aDogMTFlbTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgPiB1bCB1bC5maWxlLW1lbnUgYSB7XFxuICB3aWR0aDogNmVtO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciA+IHVsIHVsLmhlbHAtbWVudSBhIHtcXG4gIHdpZHRoOiA3LjVlbTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgPiB1bCAudWwtc3RhdGUtYWN0aXZlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyID4gdWwgbGkubWVudS1kaXZpZGVyIHtcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyOiAwIHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYud29yayB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6ICNhMDA7XFxuICBvcGFjaXR5OiAwLjA1O1xcbiAgei1pbmRleDogMjAwMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy1tYWluIHtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWZ1bGwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLXdpbmRvdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkICNhYWFhYWE7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1iZWZvcmUsXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XFxuICBoZWlnaHQ6IDFlbTtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBmb250LXNpemU6IDAuOTVlbTtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgaW5wdXQge1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGgyIHtcXG4gIG1hcmdpbjogMC43NWVtIDA7XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCAubGFyZ2Uge1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZmllbGRzZXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi13aWR0aDogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgcC5lcnJvciB7XFxuICBtYXJnaW46IDFlbSAwIDAgMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDAgMCAxZW0gMDtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wgbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBtYXJnaW46IDAuMmVtIDAgMC4xZW0gMDtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wgaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sIGlucHV0W3R5cGU9dGV4dF0sXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wgaW5wdXRbdHlwZT1maWxlXSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wgaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbCBpbnB1dFt0eXBlPXJhbmdlXSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wgcC5zZWxlY3RvciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sIHNlbGVjdCB7XFxuICB3aWR0aDogNmVtO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbCBzZWxlY3QuZmlsZXMge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sIGRpdi5ub3RpY2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA0NSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogc2FkZGxlYnJvd247XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sIHRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbDEge1xcbiAgbWFyZ2luOiAwIDAgMWVtIDA7XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sMSBsYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wxIHNlbGVjdCB7XFxuICB3aWR0aDogNmVtO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbDEgaW5wdXQubnVtYmVyIHtcXG4gIHdpZHRoOiAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sMSBpbnB1dC5jb21wbmFtZSB7XFxuICB3aWR0aDogNGVtO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbDEgaW5wdXQudGFibmFtZSB7XFxuICB3aWR0aDogNmVtO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmluZGVudCB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgaDEge1xcbiAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgcCB7XFxuICBjb2xvcjogIzYwNjA2MDtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgLmdhcCB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVxcblxcbmRpdi5jaXJzaW0uYWJvdXQge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5kaXYuY2lyc2ltLmFib3V0IGltZyB7XFxuICB3aWR0aDogMTcxcHg7XFxuICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbmRpdi5jaXJzaW0uYWJvdXQgZGl2LmRpYWxvZy1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuZGl2LmNpcnNpbS5oZWxwIHtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGhlaWdodDogNjAwcHg7XFxufVxcblxcbmRpdi5jaXJzaW0uY29tcG9uZW50IGEuaGVscGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDAuNWVtO1xcbiAgdG9wOiAwLjVlbTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGNvbG9yOiAjNjA2MDYwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmRpdi5jaXJzaW0gLmNpcnNpbS1lcnJvciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG5kaXYuY2lyc2ltLWRpYWxvZyB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBmb250LXNpemU6IDAuOTVlbTtcXG59XFxuXFxuLnVpLWRpYWxvZy1idXR0b25zZXQgYnV0dG9uIHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcblxcbi51aS1kaWFsb2cgLnVpLWRpYWxvZy1idXR0b25wYW5lIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5cXG5kaXYuY2lyc2ltIHRhYmxlIHRoIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6ICMxODQ1M0I7XFxuICAvKiAjM2U5YzQ1OyAqL1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxODQ1M0IsICM3M2QxODkpO1xcbiAgdGV4dC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwIDFweCAwO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0MxREFENztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzFEQUQ3O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDMURBRDc7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDJweCA2cHg7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUgdGggYTpsaW5rIHtcXG4gIGNvbG9yOiAjRjVGM0VCO1xcbn1cXG5cXG5kaXYuY2lyc2ltIHRhYmxlIHRoIGE6dmlzaXRlZCB7XFxuICBjb2xvcjogI0UzRENDNTtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZSB0aCBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG5kaXYuY2lyc2ltIHRhYmxlIHRoLndpZHRoNDAge1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZSB0aC53aWR0aDQwZW0ge1xcbiAgd2lkdGg6IDQwZW07XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUgdGgud2lkdGgyMGVtIHtcXG4gIHdpZHRoOiAyMGVtO1xcbn1cXG5cXG5kaXYuY2lyc2ltIHRhYmxlIHRkIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDMURBRDc7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0MxREFENztcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMC43NWVtO1xcbiAgY29sb3I6ICM0ZjZiNzI7XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUgdGQgYTpsaW5rIHtcXG4gIGNvbG9yOiAjOEE4QThBO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUgdGQgYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiAjQjA5RDVCO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUgdGQgYTpob3ZlciB7XFxuICBjb2xvcjogIzMzNjZjYztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5kaXYuY2lyc2ltIHRhYmxlLmNlbnRlciB0ZCxcXG5kaXYuY2lyc2ltIHRhYmxlLmNlbnRlciB0aCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUudHJ1dGgtdGFibGUgdGgge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZS50cnV0aC10YWJsZSB0ZCB7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUudHJ1dGgtdGFibGUgdGg6bGFzdC1jaGlsZCxcXG5kaXYuY2lyc2ltIHRhYmxlLnRydXRoLXRhYmxlIHRkOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IHRoaW4gc29saWQgYmxhY2s7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6ICNkZGQ7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogM3B4IDAgMCAycHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjI1ZW0gMC40NWVtIDA7XFxuICBtaW4td2lkdGg6IDZlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIG1hcmdpbjogMXB4IDNweCAtMXB4IDA7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgei1pbmRleDogMTg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAwLjI1ZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBvdXRsaW5lOiAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOm50aC1jaGlsZCgyKSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6bnRoLWNoaWxkKDIpIGltZyB7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgei1pbmRleDogMjI7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaS5zZWxlY3RlZCBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXdzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDI5cHg7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyBkaXYuY2wtcGctdmlldyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAyMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIGRpdi5jbC1wZy12aWV3LnNlbGVjdGVkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYygxMDAlIC0gMTdweCk7XFxuICB0b3A6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDI3cHg7XFxuICB0b3A6IDRweDtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSBkaXYgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDMwcHggMCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOGVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpLm1lbnUtZGlzYWJsZWQgYSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudS5jbC1tZW51LW9wZW4ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yb290LFxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQsXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtcmlnaHQsXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtdG9wLFxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODg4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0IGRpdi5jbC1iYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3Age1xcbiAgZmxleDogMCAxIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODg4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3AgZGl2LmNsLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm90dG9tOiAtNXB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHotaW5kZXg6IDI7XFxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yb290IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuZGl2LmNsLXBnLW51bXMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgd2lkdGg6IDJlbTtcXG4gIHBhZGRpbmc6IDRweCAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZGl2LmNsLXBnLW51bXMgcCB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDNweCAwIDA7XFxuICBib3JkZXI6IDA7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAjNzc3O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3Ige1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yID4gZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYgZGl2LmNsLXBnLWVkaXRvciB7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYgZGl2LmNsLXBnLWVkaXRvciB0ZXh0YXJlYSB7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDRweCAwIDAgM3B4O1xcbiAgYm9yZGVyOiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3Lm91dHB1dCA+IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0ID4gZGl2IHByZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ltZy9iYXJzLnBuZ1wiKSkgKyBcIik7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDRweCAwIDAgM3B4O1xcbiAgYm9yZGVyOiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL19wbGF5Z3JvdW5kLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMTM5MTUzZDZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vX3BsYXlncm91bmQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL19wbGF5Z3JvdW5kLnNjc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE0QUFBQWdBZ01BQUFCZmdLRUVBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQUZ6VWtkQ0FLN09IT2tBQUFBTVVFeFVSZi8vLytMLzkrSC85K1gvK09oNEhUTUFBQUFlU1VSQlZBalhZMkFnRXZ6Ly8vOER3NnBWcXhZd2hJYUdCbEJPRUFrQVUyTVkzdERmOWFVQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJNQUFBQU9DQVlBQUFETkdDZUpBQUFCUzJsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzQyTFdNeE5ESWdOemt1TVRZd09USTBMQ0F5TURFM0x6QTNMekV6TFRBeE9qQTJPak01SUNBZ0lDQWdJQ0FpUGdvZ1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNEtJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWk4K0NpQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K25oeGc3d0FBQVZkSlJFRlVPSTJWMGJGclUxRVVCK0R2UldOc0lKTlF1NnQxRTh5a3VEZ0tCUWxJRndkSGtRNytBd1U3dXJsMEZNUTVjWEZ3c29NZ3VJaFNxb1B0SkE1MUVIR29oZWRRZmc1NVNWOWphZUtGdzcxd0R0ODloeU9KZXN4NjB1ODNzclIwTGx3S3ZkQXJKb0dpS0taRHE2dnpCb091bloxcnVJZ2ZHUHdYbG03M2xJT0RXN2EzbDVYbEluN2hOZnJZTmN1WTJkdVRYbTh1UEFnZlFqL2NENHVoR1FSVHNlenZ5OHBLSnp3TVg4S3pjQ0djSGlHSEdIUGhTbGdJUlpyTlZqWTNoMUJaeXRwYXArcm9VM2dhNXY5QnhqOFBrUmRoTjd3TGQ4TGx0TnZ0cks5M3d0M3dNUXpDK1dPUkdpWVU0WHJZQ2w4cjlGNjRIVGJDKzNDenFqc2VxbUdqT0JPZWhPL2hXM2haNFk5RDYwUm92SUNqWUNNOENqOHI5SE80T2hVYVk2TTRCRnZoVGZnZDNvYXo0OXpFOXV2Um1KQkhyei9ZUUlubjFWM1B6OURaMFE2NzRWVzE3YWxkSlRtaFlEamFqVm1oSlA0Q3kxWlU2K2RDZzNBQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFCQU1BQUFEdDNlSlNBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFFbEJNVkVVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFEZ0t4bWlBQUFBQlhSU1RsTUF2L0lCRFZhUXNqOEFBQUFCWWt0SFJBQ0lCUjFJQUFBQUNYQklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUFIRWxFUVZRSTEyTmd3QTBZbGNCQUFNRmdkZ0VEQXdTRFBEVzRBUUIyWEF4YjhFblZxUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwiXHJcbmltcG9ydCAnLi9fcGxheWdyb3VuZC5zY3NzJztcclxuaW1wb3J0IHtQbGF5Z3JvdW5kfSBmcm9tICcuL2pzL1BsYXlncm91bmQvUGxheWdyb3VuZCc7XHJcbmltcG9ydCB7UGxheWdyb3VuZEZhY3Rvcnl9IGZyb20gJy4vanMvUGxheWdyb3VuZEZhY3RvcnknO1xyXG5cclxuZXhwb3J0IHtQbGF5Z3JvdW5kfTtcclxuZXhwb3J0IHtQbGF5Z3JvdW5kIGFzIGRlZmF1bHR9O1xyXG5cclxuUGxheWdyb3VuZEZhY3RvcnkuY3JlYXRlKFNpdGUuc2l0ZSk7XHJcblxyXG5TaXRlLlBsYXlncm91bmQgPSBQbGF5Z3JvdW5kO1xyXG5cclxuIiwiXHJcbmV4cG9ydCBjb25zdCBBY3Rpb24gPSBmdW5jdGlvbihzaXRlLCBvcHRpb25zKSB7XHJcblxyXG5cclxuXHJcbn0iLCJcclxuXHJcbi8qKlxyXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbnMgZm9yIHRoZSBET00uXHJcbiAqIFRvb2xzIHRoYXQgYXZvaWQgaGF2aW5nIHRvIGhhdmUgalF1ZXJ5IGluc3RhbGxlZC5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVG9vbHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJcyBhbiBlbGVtZW50IHZpc2libGU/XHJcbiAqIEJvcnJvd2VkIGZyb20galF1ZXJ5IVxyXG4gKiBAcGFyYW0gZWxlbVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcblRvb2xzLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xyXG4gICAgcmV0dXJuICEhKCBlbGVtLm9mZnNldFdpZHRoIHx8IGVsZW0ub2Zmc2V0SGVpZ2h0IHx8IGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGQgYSBjbGFzcyB0byBhbiBlbGVtZW50XHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gYWRkIHRvXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgQ2xhc3MgdG8gYWRkXHJcbiAqL1xyXG5Ub29scy5hZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcclxufVxyXG5cclxuVG9vbHMuYWRkQ2xhc3NlcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzZXMpIHtcclxuICAgIGlmKGNsYXNzZXMgPT09IHVuZGVmaW5lZCB8fCBjbGFzc2VzID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKChjbHMpID0+IHtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhlbGVtZW50LCBjbHMpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblRvb2xzLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgcmVnRXggPSBuZXcgUmVnRXhwKCdcXFxcYicgKyBjbGFzc05hbWUgKyAnXFxcXGInLCAnZycpO1xyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlZ0V4LCBcIlwiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIERJViB3aXRoIGEgcHJvdmlkZWQgY2xhc3MgbmFtZS5cclxuICogQHBhcmFtIGNsYXNzTmFtZSBDbGFzcyB0byBhZGQgdG8gdGhlIGRpdlxyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50IHRvIHBsYWNlIGluIHRoZSBkaXYuIEhUTUwgb3IgRWxlbWVudFxyXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gQ3JlYXRlZCBET00gRWxlbWVudFxyXG4gKi9cclxuVG9vbHMuY3JlYXRlQ2xhc3NlZERpdiA9IGZ1bmN0aW9uKGNsYXNzTmFtZSwgY29udGVudCkge1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgVG9vbHMuYWRkQ2xhc3MoZGl2LCBjbGFzc05hbWUpO1xyXG4gICAgaWYoY29udGVudCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0ICAgIFRvb2xzLmFkZENvbnRlbnQoZGl2LCBjb250ZW50KTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgY29udGVudCB0byBhbiBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGFkZCB0b1xyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50LiBDYW4gYmUgSFRNTCBvciBhbiBFbGVtZW50LlxyXG4gKi9cclxuVG9vbHMuYWRkQ29udGVudCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNvbnRlbnQpIHtcclxuICAgIGlmKFRvb2xzLmlzU3RyaW5nKGNvbnRlbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gY29udGVudDtcclxuICAgIH0gZWxzZSBpZihUb29scy5pc0VsZW1lbnQoY29udGVudCkpIHtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogSXMgdGhlIHBhc3NlZCB2YWx1ZSBhIHN0cmluZz9cclxuICogQHBhcmFtIHZhbFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcblRvb2xzLmlzU3RyaW5nID0gZnVuY3Rpb24odmFsKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgKCghIXZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JykgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIElzIHRoZSBwYXNzZWQgdmFsdWUgYW4gSFRNTEVsZW1lbnQ/XHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5Ub29scy5pc0VsZW1lbnQgPSBmdW5jdGlvbih2YWwpIHtcclxuICAgIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgJiYgdmFsLm5vZGVWYWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgKHNwZWNpZmljYWxseSBpdHMgYm9yZGVyIGJveCwgd2hpY2ggZXhjbHVkZXMgbWFyZ2lucykgcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50LlxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKi9cclxuVG9vbHMub2Zmc2V0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdHJldHVybiB7XHJcblx0ICAgIGxlZnQ6IHJlY3QubGVmdCArIGVsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCxcclxuICAgICAgICB0b3A6IHJlY3QudG9wICsgZWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXRcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmQgYSBjaGlsZCBieSB0YWdOYW1lXHJcbiAqIEBwYXJhbSBlbGVtZW50XHJcbiAqIEBwYXJhbSB0YWdOYW1lXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuVG9vbHMuY2hpbGQgPSBmdW5jdGlvbihlbGVtZW50LCB0YWdOYW1lKSB7XHJcblx0Zm9yKGNvbnN0IG5vZGUgb2YgZWxlbWVudC5jaGlsZE5vZGVzKSB7XHJcblx0ICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gdGFnTmFtZSkge1xyXG5cdCAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHtUb29sc30gZnJvbSAnLi4vRE9NL1Rvb2xzJztcclxuXHJcbi8qKlxyXG4gKiBUb2FzdCBub3RpZmljYXRpb24gc3lzdGVtXHJcbiAqIGpRdWVyeS1mcmVlXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRvYXN0ID0gZnVuY3Rpb24obWFpbikge1xyXG5cdC8qKiBEZWZhdWx0IHRvYXN0IGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyAqL1xyXG5cdHRoaXMuZGVmYXVsdER1cmF0aW9uID0gMjAwMDtcclxuXHJcblx0LyoqIEludGVyLXRvYXN0IGRlbGF5IHRpbWUgaW4gbWlsbGlzZWNvbmRzICovXHJcblx0dGhpcy5pbnRlclRvYXN0RGVsYXkgPSA1MDA7XHJcblxyXG4gICAgbGV0IG1lc3NhZ2VzID0gW107ICAvLyBQZW5kaW5nIG1lc3NhZ2VzXHJcbiAgICBsZXQgYWN0aXZlID0gZmFsc2U7IC8vIElzIHRoZXJlIGFuIGFjdGl2ZSBtZXNzYWdlIGRpc3BsYXlpbmc/XHJcblxyXG5cdGxldCBlbGVtZW50ID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIHRoZSB0b2FzdCBkaXZcclxuXHQgKiBAcGFyYW0gZGl2IERpdiB0byBwdXQgdGhlIHRvYXN0IGludG9cclxuXHQgKi9cclxuICAgIHRoaXMuY3JlYXRlID0gKGRpdikgPT4ge1xyXG5cdFx0ZWxlbWVudCA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ3RvYXN0Jyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG5cdFx0ZWxlbWVudC5pbm5lckhUTUwgPSAndGVzdGluZyc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcclxuICAgIFx0aWYobWVzc2FnZXMubGVuZ3RoID4gMCAmJiAhYWN0aXZlKSB7XHJcblx0XHQgICAgLy8gU2V0IHRoZSBtZXNzYWdlXHJcblx0XHQgICAgbGV0IG1lc3NhZ2UgPSBtZXNzYWdlc1swXTtcclxuICAgICAgICAgICAgbWVzc2FnZXMuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IG1lc3NhZ2UubXNnO1xyXG5cclxuICAgICAgICAgICAgLy8gU2hvdyBpdFxyXG5cdFx0ICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9hc3QtYWN0aXZlJyk7XHJcblx0XHQgICAgYWN0aXZlID0gdHJ1ZTtcclxuXHJcblx0XHQgICAgLy8gRGVsYXkgd2hpbGUgYWN0aXZlXHJcblx0XHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHQgICAgXHQvLyBIaWRlIGl0XHJcblx0XHRcdCAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RvYXN0LWFjdGl2ZScpO1xyXG5cclxuXHRcdFx0ICAgIC8vIERlbGF5IGJldHdlZW4gdG9hc3RzXHJcblx0XHRcdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0ICAgIFx0YWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdCAgICBcdHNob3coKTtcclxuXHRcdFx0ICAgIH0sIHRoaXMuaW50ZXJUb2FzdERlbGF5KVxyXG5cdFx0ICAgIH0sIG1lc3NhZ2UudGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBEaXNwbGF5IGEgdG9hc3QgbWVzc2FnZVxyXG5cdCAqIEBwYXJhbSBtc2cgTWVzc2FnZSB0byBkaXNwbGF5XHJcblx0ICogQHBhcmFtIHRpbWUgVGltZSB0byBkaXNwbGF5IGluIG1pbGxpc2Vjb25kcywgb21pdCBmb3IgZGVmYXVsdFxyXG5cdCAqL1xyXG5cdHRoaXMubWVzc2FnZSA9IGZ1bmN0aW9uKG1zZywgdGltZSkge1xyXG4gICAgICAgIGlmKHRpbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aW1lID0gdGhpcy5kZWZhdWx0RHVyYXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXNzYWdlcy5wdXNoKHttc2c6IG1zZywgdGltZTogdGltZX0pO1xyXG4gICAgICAgIHNob3coKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogRGlzcGxheSBhbnkgSlNPTiBlcnJvcnMgd2UgaGF2ZSByZWNlaXZlZC5cclxuXHQgKiBAcGFyYW0ganNvbkFwaSBKc29uQVBJIG9iamVjdFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGFueSBlcnJvcnMgZXhpc3RlZC5cclxuXHQgKi9cclxuXHR0aGlzLmpzb25FcnJvcnMgPSBmdW5jdGlvbihqc29uQXBpKSB7XHJcbiAgICAgICAgaWYoanNvbkFwaS5lcnJvcnMoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBqc29uQXBpLmVycm9ycygpLmZvckVhY2goKGVycm9yKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlKCdTZXJ2ZXIgRXJyb3I6ICcgKyBlcnJvci50aXRsZSwgNTAwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBSZXNpemVyIGZyb20gJ3Jlc2l6ZXItY2wnO1xyXG5cclxuaW1wb3J0IHtNZW51fSBmcm9tICcuL01lbnUnO1xyXG5pbXBvcnQge1RvYXN0fSBmcm9tICcuL0dyYXBoaWNzL1RvYXN0JztcclxuaW1wb3J0IHtEcmFnQW5kRHJvcH0gZnJvbSAnLi9VSS9EcmFnQW5kRHJvcCc7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gJy4vRE9NL1Rvb2xzJztcclxuaW1wb3J0IHtQYW5lfSBmcm9tIFwiLi9QYW5lXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIEFjdHVhbCBpbnN0YW5jZSBvZiB0aGUgUGxheWdyb3VuZCBmb3IgYSBzaW5nbGUgZWxlbWVudC5cclxuICogQHBhcmFtIHBsYXlncm91bmQgVGhlIG1haW4gUGxheWdyb3VuZCBvYmplY3RcclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB3ZSBhcmUgbG9hZGluZyBpbnRvXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1haW4gPSBmdW5jdGlvbihwbGF5Z3JvdW5kLCBlbGVtZW50KSB7XHJcbiAgICB0aGlzLnBsYXlncm91bmQgPSBwbGF5Z3JvdW5kO1xyXG4gICAgdGhpcy5zaXRlID0gcGxheWdyb3VuZC5zaXRlO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMub3B0aW9ucyA9IHBsYXlncm91bmQub3B0aW9ucztcclxuXHJcbiAgICAvLy8gZGl2Lm1haW5cclxuICAgIHRoaXMuZGl2ID0gbnVsbDtcclxuXHJcbiAgICBsZXQgb3B0aW9ucyA9IHBsYXlncm91bmQub3B0aW9ucztcclxuXHJcbiAgICAvLy8gUmVmZXJlbmNlcyB0byBvdGhlciBHVUkgY29tcG9uZW50c1xyXG4gICAgbGV0IG1lbnU9bnVsbCwgdGFicz1udWxsO1xyXG5cclxuICAgIC8vLyBkaXYub3ZlcmxheVxyXG4gICAgbGV0IGRpdk92ZXJsYXkgPSBudWxsLCBkaXZXb3JrPW51bGw7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgXHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQnKTtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuXHQgICAgaWYob3B0aW9ucy5oZWlnaHQgIT09IG51bGwpIHtcclxuXHRcdCAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG5cdCAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaChvcHRpb25zLmRpc3BsYXkpIHtcclxuICAgICAgICAgICAgY2FzZSAnZnVsbCc6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtZnVsbCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG5cdCAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC13aW5kb3cnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy5kaXNwbGF5ID09PSAnd2luZG93Jykge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBBZGQgcmVzaXplciB0byB0aGUgd2luZG93IGlmIGluIHdpbmRvdyBtb2RlXHJcbiAgICAgICAgICAgIC8vIGFuZCBpdCBoYXMgbm90IGFscmVhZHkgYmVlbiBhZGRlZFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZighZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZXNpemVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgUmVzaXplcihlbGVtZW50LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiAnMTBweCBzb2xpZCAjMTg0NTNCJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ0FuZERyb3AgPSBuZXcgRHJhZ0FuZERyb3AodGhpcyk7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgdGhlIHdpbmRvdyBjb21wb25lbnRzXHJcbiAgICAgICAgLy9cclxuICAgICAgICBpZihvcHRpb25zLmRpc3BsYXkgIT09ICdpbmxpbmUnICYmIG9wdGlvbnMuZGlzcGxheSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEFsbCB3aW5kb3ctYmFzZWQgdmVyc2lvbnMgb3RoZXIgdGhhbiBpbmxpbmUgZ2V0IHRoZVxyXG4gICAgICAgICAgICAvLyBmdWxsIHVzZXIgaW50ZXJmYWNlXHJcbiAgICAgICAgICAgIC8vXHJcblxyXG4gICAgICAgICAgICAvLyA8ZGl2IGNsYXNzPVwibWFpblwiPjwvZGl2PlxyXG4gICAgICAgICAgICB0aGlzLmRpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXBnLW1haW4nKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZGl2KTtcclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgbWVudVxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBtZW51ID0gbmV3IE1lbnUodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMubWVudSA9IG1lbnU7XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBXb3JraW5nIGFyZWFcclxuICAgICAgICAgICAgLy8gPGRpdiBjbGFzcz1cIndvcmtcIj48L2Rpdj5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgZGl2V29yayA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ3dvcmsnKTtcclxuICAgICAgICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQoZGl2V29yayk7XHJcblxyXG5cclxuXHRcdFx0Ly9cclxuXHQgICAgICAgIC8vIEFuZCB0aGUgcm9vdCBwYW5lXHJcblx0ICAgICAgICAvL1xyXG5cdCAgICAgICAgdGhpcy5yb290UGFuZSA9IG5ldyBQYW5lKHRoaXMsIGRpdldvcmssIG51bGwsIG51bGwpO1xyXG5cdCAgICAgICAgdGhpcy5yb290UGFuZS5sb2FkKG9wdGlvbnMucGFuZSk7XHJcblxyXG5cdCAgICAgICAgLy9cclxuXHQgICAgICAgIC8vIEFuZCB0aGUgb3ZlcmxheVxyXG5cdCAgICAgICAgLy8gPGRpdiBjbGFzcz1cImNpcnNpbS1vdmVybGF5XCI+PC9kaXY+XHJcblx0ICAgICAgICAvL1xyXG5cdCAgICAgICAgZGl2T3ZlcmxheSA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXBnLW92ZXJsYXknKTtcclxuXHQgICAgICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKGRpdk92ZXJsYXkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b2FzdCA9IG5ldyBUb2FzdCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy50b2FzdC5jcmVhdGUodGhpcy5kaXYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRUYWIgPSBmdW5jdGlvbih0YWcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb290UGFuZS5nZXRUYWIodGFnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbmV2ZXIgYSBuZXcgdGFiIGlzIHNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHRoaXMubmV3VGFiID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgb3IgY2xlYXIgaW50ZXJmYWNlIG1vZGFsIHN0YXRlLlxyXG4gICAgICogQHBhcmFtIG1vZGFsIFRydWUgc2V0cyBpbnRlcmZhY2UgdG8gbW9kYWwgc3RhdGUuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICB0aGlzLm1vZGFsID0gZnVuY3Rpb24obW9kYWwpIHtcclxuICAgICAgICBpZihtb2RhbCkge1xyXG4gICAgICAgICAgICBkaXZPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpdk92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG59XHJcbiIsImltcG9ydCB7VG9vbHN9IGZyb20gJy4vRE9NL1Rvb2xzJztcclxuXHJcbi8vIGltcG9ydCB7RmlsZU1lbnV9IGZyb20gJy4vTWVudXMvRmlsZU1lbnUnO1xyXG4vLyBpbXBvcnQge0VkaXRNZW51fSBmcm9tICcuL01lbnVzL0VkaXRNZW51JztcclxuLy8gaW1wb3J0IHtUYWJzTWVudX0gZnJvbSAnLi9NZW51cy9UYWJzTWVudSc7XHJcbi8vIGltcG9ydCB7SGVscE1lbnV9IGZyb20gJy4vTWVudXMvSGVscE1lbnUnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBwcm9ncmFtIG1lbnUgYmFyXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSBmdW5jdGlvbihtYWluKSB7XHJcblx0Y29uc3Qgb3B0aW9ucyA9IG1haW4ub3B0aW9ucztcclxuXHJcblxyXG4gICAgLy9cclxuICAgIC8vIENyZWF0ZSB0aGUgbWVudSBjb21wb25lbnRzXHJcbiAgICAvL1xyXG4gICAgLy8gdmFyIGZpbGVNZW51ID0gbmV3IEZpbGVNZW51KHRoaXMsIG1haW4pO1xyXG4gICAgLy8gdmFyIGVkaXRNZW51ID0gbmV3IEVkaXRNZW51KHRoaXMsIG1haW4pO1xyXG4gICAgLy8gdmFyIHRhYnNNZW51ID0gbmV3IFRhYnNNZW51KHRoaXMsIG1haW4pO1xyXG4gICAgLy8gdmFyIGhlbHBNZW51ID0gbmV3IEhlbHBNZW51KHRoaXMsIG1haW4pO1xyXG5cclxuICAgIC8vLyBUaGUgbmF2IGVsZW1lbnRcclxuICAgIHRoaXMubmF2ID0gbnVsbDtcclxuICAgIHRoaXMudWwgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyA8bmF2IGNsYXNzPVwibWVudWJhclwiPjx1bD48L3VsPjwvbmF2PlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5uYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyh0aGlzLm5hdiwgJ21lbnViYXInKTtcclxuICAgICAgICBtYWluLmRpdi5hcHBlbmRDaGlsZCh0aGlzLm5hdik7XHJcblxyXG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICB0aGlzLm5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICAgICAgdGhpcy51bCA9IHVsO1xyXG5cclxuICAgICAgICBmb3IoY29uc3QgbWVudSBvZiBvcHRpb25zLm1lbnVzKSB7XHJcbiAgICAgICAgXHRjb25zdCB0b3BMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgXHR1bC5hcHBlbmRDaGlsZCh0b3BMSSk7XHJcblxyXG4gICAgICAgIFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBcdHRvcExJLmFwcGVuZENoaWxkKGEpO1xyXG5cclxuICAgICAgICBcdGEuaW5uZXJUZXh0ID0gbWVudS5uYW1lO1xyXG4gICAgICAgIFx0aWYobWVudS5hY3Rpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIFx0XHRjb25zdCBhY3Rpb24gPSBtYWluLnBsYXlncm91bmQuZ2V0QWN0aW9uKG1lbnUuYWN0aW9uKTtcclxuICAgICAgICBcdFx0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHRcdFx0YWN0aW9uLmNsaWNrKG1haW4pO1xyXG5cdFx0ICAgICAgICB9KTtcclxuXHJcblx0ICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBBZGQgdGhlIG1lbnUgY29tcG9uZW50J3MgSFRNTFxyXG4gICAgICAgIC8vXHJcblx0ICAgIC8vIGxldCBodG1sID0gJyc7XHJcblxyXG5cdCAgICAvLyBodG1sICs9IGZpbGVNZW51Lmh0bWwoKTtcclxuICAgICAgICAvLyBodG1sICs9IGVkaXRNZW51Lmh0bWwoKTtcclxuICAgICAgICAvLyBodG1sICs9IHRhYnNNZW51Lmh0bWwoKTtcclxuICAgICAgICAvLyBodG1sICs9IGhlbHBNZW51Lmh0bWwoKTtcclxuXHJcbiAgICAgICAgLy8gdWwuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcbiAgICAgICAgLy9cclxuXHQgICAgLy8gTWVudSBvcHRpb24gZm9yIHRlc3RpbmcgdGhlIFRvYXN0IGVycm9yIHJlcG9ydGluZyBtZWNoYW5pc21cclxuXHQgICAgLy9cclxuXHJcblx0ICAgIC8vIGh0bWwgKz0gYDxsaT48YSBjbGFzcz1cInRvYXN0LXRlc3RcIj5Ub2FzdCE8L2E+PC9saT5gO1xyXG5cdCAgICAvLyB1bC5pbm5lckhUTUwgPSBodG1sO1xyXG5cdFx0Ly9cclxuXHQgICAgLy8gdGhpcy50b2FzdHMgPSAwO1xyXG4gICAgICAgIC8vIHRoaXMuY2xpY2soJy50b2FzdC10ZXN0JywgKGV2ZW50KT0+IHtcclxuICAgICAgICAvLyBcdHRoaXMudG9hc3RzKys7XHJcbiAgICAgICAgLy8gXHRtYWluLnRvYXN0Lm1lc3NhZ2UoJ1RvYXN0IG1lc3NhZ2UgJyArIHRoaXMudG9hc3RzKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBJbnN0YWxsIGNsaWNrIGhhbmRsZXJzIGZvciBhbGwgdG9wLWxldmVsIG1lbnVzXHJcbiAgICAgICAgLy9cclxuICAgICAgICBmb3IoY29uc3Qgbm9kZSBvZiB1bC5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gJ0xJJykge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIDx1bD4gaW4gdGhpcyBtZW51XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVsU3ViID0gVG9vbHMuY2hpbGQobm9kZSwgJ1VMJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodWxTdWIgIT09IG51bGwpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGlmKGdldENvbXB1dGVkU3R5bGUodWxTdWIpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ2hpZGRlbicpIHtcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgb3Blbihub2RlKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgYWxyZWFkeSBvcGVuLCBjbG9zZSBhbGxcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUFsbCgpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBY3RpdmF0ZSBhbGwgb2YgdGhlIG1lbnVzXHJcbiAgICAgICAgLy8gZmlsZU1lbnUuYWN0aXZhdGUoKTtcclxuICAgICAgICAvLyBlZGl0TWVudS5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIC8vIHRhYnNNZW51LmFjdGl2YXRlKCk7XHJcbiAgICAgICAgLy8gaGVscE1lbnUuYWN0aXZhdGUoKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBMaXN0ZW4gdG8ga2V5IGRvd24gZXZlbnRzIHNvIHdlIGNhbiBjbG9zZSB0aGUgbWVudVxyXG4gICAgICogaWYgd2UgY2xpY2sgb3V0c2lkZSBvZiB0aGUgbWVudSB3aGlsZSBpdCBpcyBvcGVuLlxyXG5cdCAqIEBwYXJhbSBldmVudFxyXG5cdCAqL1xyXG5cdGNvbnN0IGNsb3NlTGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBTZWUgaWYgd2UgY2xpY2tlZCBvbiBzb21lIGNoaWxkIG9mIG5hdi4uLlxyXG4gICAgICAgIGxldCBub2RlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgZm9yKCA7IG5vZGUgIT09IG51bGw7IG5vZGUgPSBub2RlLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgaWYobm9kZSA9PT0gdGhpcy5uYXYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblx0ICAgIHRoaXMuY2xvc2VBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPcGVuIGEgbWVudVxyXG4gICAgY29uc3Qgb3BlbiA9IChsaSkgPT4ge1xyXG4gICAgICAgIC8vIEhpZGUgYW55IG90aGVyIG1lbnVzXHJcbiAgICAgICAgZm9yKGNvbnN0IG5vZGUgb2YgdGhpcy51bC5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gJ0xJJykge1xyXG5cdCAgICAgICAgICAgIGNvbnN0IHVsID0gVG9vbHMuY2hpbGQobm9kZSwgJ1VMJyk7XHJcbiAgICAgICAgICAgICAgICBpZih1bCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLnJlbW92ZUNsYXNzKHVsLCAnbWVudS1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRhYnNNZW51Lm9wZW5pbmcoKTtcclxuICAgICAgICAvLyBoZWxwTWVudS5vcGVuaW5nKCk7XHJcblxyXG5cdCAgICAvLyBBbmQgb3BlbiB0aGlzIG1lbnVcclxuXHQgICAgY29uc3QgdWwgPSBUb29scy5jaGlsZChsaSwgJ1VMJyk7XHJcblx0ICAgIGlmKHVsICE9PSBudWxsKSB7XHJcblx0XHQgICAgVG9vbHMuYWRkQ2xhc3ModWwsICdtZW51LW9wZW4nKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjbG9zZUxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2xvc2UgYWxsIG1lbnVzICovXHJcbiAgICB0aGlzLmNsb3NlQWxsID0gKCkgPT4ge1xyXG5cdCAgICBmb3IoY29uc3Qgbm9kZSBvZiB0aGlzLnVsLmNoaWxkTm9kZXMpIHtcclxuXHRcdCAgICBpZihub2RlLnRhZ05hbWUgPT09ICdMSScpIHtcclxuXHRcdFx0ICAgIGNvbnN0IHVsID0gVG9vbHMuY2hpbGQobm9kZSwgJ1VMJyk7XHJcblx0XHRcdCAgICBpZih1bCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdCAgICBUb29scy5yZW1vdmVDbGFzcyh1bCwgJ21lbnUtb3BlbicpO1xyXG5cdFx0XHQgICAgfVxyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIEVuYWJsZSBvciBkaXNhYmxlIGEgbWVudSBvcHRpb24gYnkgc2VsZWN0b3JcclxuXHQgKiBAcGFyYW0gc2VsIFNlbGVjdG9yIGZvciB0aGUgbWVudSBvcHRpb24gKGxpa2UgJy50YWJzLWFkZCcpXHJcblx0ICogQHBhcmFtIGVuYWJsZSBUcnVlIHRvIGVuYWJsZVxyXG5cdCAqL1xyXG5cdHRoaXMuZW5hYmxlID0gKHNlbCwgZW5hYmxlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMudWwucXVlcnlTZWxlY3RvcihzZWwpO1xyXG4gICAgICAgIGlmKGVsZW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZW5hYmxlKSB7XHJcbiAgICAgICAgICAgIFRvb2xzLnJlbW92ZUNsYXNzKGVsZW1lbnQucGFyZW50Tm9kZSwgXCJtZW51LWRpc2FibGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLmFkZENsYXNzKGVsZW1lbnQucGFyZW50Tm9kZSwgXCJtZW51LWRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cdC8qKlxyXG4gICAgICogRmluZCBhIG1lbnUgb3B0aW9uIGJ5IHNlbGVjdG9yXHJcblx0ICogQHBhcmFtIHNlbFxyXG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fVxyXG5cdCAqL1xyXG5cdHRoaXMuZmluZCA9IChzZWwpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy51bC5xdWVyeVNlbGVjdG9yKHNlbCk7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogSW5zdGFsbCBhIG1lbnUgb3B0aW9uIGNsaWNrIGhhbmRlclxyXG5cdCAqIEBwYXJhbSBzZWwgU2VsZWN0b3IgZm9yIHRoZSBtZW51IG9wdGlvblxyXG5cdCAqIEBwYXJhbSBjbG9zdXJlIFRoZSBjbG9zdXJlIHRvIGNhbGwgKHBhc3NlcyAnZXZlbnQnKVxyXG5cdCAqL1xyXG5cdHRoaXMuY2xpY2sgPSAoc2VsLCBjbG9zdXJlKSA9PiB7XHJcblx0ICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmZpbmQoc2VsKTtcclxuXHQgICAgaWYoZWxlbWVudCAhPT0gbnVsbCkge1xyXG5cdCAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdCAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0ICAgICAgICAgICAgdGhpcy5jbG9zZUFsbCgpO1xyXG5cdCAgICAgICAgICAgIGNsb3N1cmUoZXZlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG59O1xyXG4iLCIvKipcclxuICogUGxheWdyb3VuZCBvcHRpb25zLlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBVc2VyIHByb3ZpZGVkIG9wdGlvbnMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCB2YWx1ZXMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcclxuXHJcbiAgICAvLy8gRGlzcGxheSBvcHRpb25zXHJcbiAgICAvLy8gd2luZG93IC0gRGlzcGxheXMgYXMgYSBzdGFuZGFyZCBkaXYgKGRlZmF1bHQpXHJcbiAgICB0aGlzLmRpc3BsYXkgPSAnd2luZG93JztcclxuXHJcbiAgICAvLy8gT3B0aW9uYWwgaGVpZ2h0IHNldHRpbmdcclxuICAgIHRoaXMuaGVpZ2h0ID0gbnVsbDtcclxuXHJcbiAgICAvLy8gVGhlIHBsYXlncm91bmQgcm9vdCBwYW5lXHJcbiAgICB0aGlzLnBhbmUgPSB7fTtcclxuXHJcbiAgICAvLy8gVGhlIHRvcC1sZXZlbCBtZW51IG9wdGlvbnNcclxuICAgIHRoaXMubWVudXMgPSBbe25hbWU6ICdBYm91dCd9XTtcclxuXHJcblxyXG5cclxuXHJcbiAgICBmb3IodmFyIHByb3BlcnR5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICBpZihvcHRpb25zLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uIFwiICsgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXNbcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBBUEkgb3BlcmF0aW9ucyBmb3IgYSBnaXZlbiBmaWxlIG1vZGUuXHJcbiAgICAgKiBAcGFyYW0gbW9kZSAnc2F2ZScsICdvcGVuJ1xyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ2V0QVBJID0gZnVuY3Rpb24obW9kZSkge1xyXG4gICAgICAgIGlmKHRoaXMuYXBpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5hcGkgPT09IE9iamVjdCh0aGlzLmFwaSkpIHtcclxuICAgICAgICAgICAgbGV0IG9iajtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYXBpW21vZGVdICE9PSB1bmRlZmluZWQpIHtcclxuIFxyXG4gICAgICAgICAgICAgICAgLy8gTW9kZSBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxyXG4gICAgICAgICAgICAgICAgdmFyIG1vZGVPYmogPSB0aGlzLmFwaVttb2RlXTtcclxuICAgICAgICAgICAgICAgIGlmKG1vZGVPYmoudXJsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNb2RlIGlzIG5vdCBzdXBwb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZW5kIGNvbnRlbnQgdHlwZVxyXG4gICAgICAgICAgICAgICAgb2JqID0ge3VybDogbW9kZU9iai51cmx9O1xyXG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai5jb250ZW50VHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNvbnRlbnRUeXBlID0gbW9kZU9iai5jb250ZW50VHlwZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmFwaS5jb250ZW50VHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNvbnRlbnRUeXBlID0gdGhpcy5hcGkuY29udGVudFR5cGU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5jb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKG1vZGVPYmouZXh0cmEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IG1vZGVPYmouZXh0cmE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5hcGkuZXh0cmEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHRoaXMuYXBpLmV4dHJhO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihtb2RlT2JqLm5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5uYW1lID0gbW9kZU9iai5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuYXBpLm5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5uYW1lID0gdGhpcy5hcGkubmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXBpLnVybCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb2JqID0ge3VybDogdGhpcy5hcGkudXJsfTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXBpLmV4dHJhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSB0aGlzLmFwaS5leHRyYTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcGkubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLm5hbWUgPSB0aGlzLmFwaS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7dXJsOiB0aGlzLmFwaX07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7VGFic30gZnJvbSAnLi9UYWJzJztcclxuXHJcbi8qKlxyXG4gKiBBIFBhbmUgaXMgYW4gYXJlYSBvZiB0aGUgSURFIHNjcmVlbiB0aGF0IGVpdGhlciBjb250YWlucyBhIHRhYiBzZXQgb3IgdHdvIGNoaWxkIHBhbmVzLlxyXG4gKiBAcGFyYW0gbWFpbiBNYWluIG9iamVjdFxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRoYXQgaXMgdGhlIGhvc3QgZm9yIHRoZSBwYW5lXHJcbiAqIEBwYXJhbSBwYXJlbnQgUGFuZSBwYXJlbnQgb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBhbmUgPSBmdW5jdGlvbihtYWluLCBlbGVtZW50LCBwYXJlbnQpIHtcclxuXHR0aGlzLm1pblNwbGl0ID0gMTA7XHJcblx0dGhpcy5tYXhTcGxpdCA9IDkwO1xyXG5cclxuXHRsZXQgZGl2ID0gbnVsbCwgY2hpbGQxID0gbnVsbCwgY2hpbGQyID0gbnVsbDtcclxuXHRsZXQgaG9yaXpvbnRhbFNwbGl0ID0gbnVsbDtcclxuXHRsZXQgdGFicyA9IG51bGw7XHJcblxyXG5cdGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcblx0XHQvL1xyXG5cdFx0Ly8gQ3JlYXRlIGFuZCBhZGQgdGhlIGRpdlxyXG5cdFx0Ly9cclxuXHJcblx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuZGl2ID0gZGl2O1xyXG5cclxuXHRcdGlmKHBhcmVudCA9PT0gbnVsbCkge1xyXG5cdFx0XHRkaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1yb290Jyk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuXHRcdC8vIGlmKGRvbm9yVGFicyAhPT0gbnVsbCkge1xyXG5cdFx0Ly8gXHR0YWJzID0gZG9ub3JUYWJzO1xyXG5cdFx0Ly8gXHR0YWJzLm5ld1BhcmVudCh0aGlzKTtcclxuXHRcdC8vIH0gZWxzZSB7XHJcblx0XHQvLyBcdHRhYnMgPSBuZXcgVGFicyhtYWluLCBkaXYpO1xyXG5cdFx0Ly8gfVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTG9hZCB0aGUgcGFuZSBmcm9tIHRoZSBkYXRhXHJcblx0ICogQHBhcmFtIGRhdGEgRGF0YSBmcm9tIG9wdGlvbnMgZm9yIHRoaXMgcGFuZVxyXG5cdCAqL1xyXG5cdHRoaXMubG9hZCA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGlmKGRhdGEuY2hpbGQxICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0Ly8gVGhpcyBpcyBhIHNwbGl0IHBhbmVcclxuXHRcdFx0dGhpcy5zcGxpdChkYXRhLmhvcml6LCBkYXRhLmNoaWxkMSwgZGF0YS5jaGlsZDIpO1xyXG5cdFx0XHR0aGlzLnBlcmNlbnRhZ2UoZGF0YS5wZXJjZW50YWdlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRhYnMgPSBuZXcgVGFicyhtYWluLCBkaXYpO1xyXG5cdFx0XHR0YWJzLmxvYWQoZGF0YS50YWJzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRoaXMuc3BsaXQgPSBmdW5jdGlvbihob3Jpem9udGFsLCBjaGlsZDFEYXRhLCBjaGlsZDJEYXRhKSB7XHJcblx0XHRob3Jpem9udGFsU3BsaXQgPSBob3Jpem9udGFsO1xyXG5cclxuXHRcdGNoaWxkMSA9IG5ldyBQYW5lKG1haW4sIGRpdiwgdGhpcywgdGFicyk7XHJcblx0XHRjaGlsZDIgPSBuZXcgUGFuZShtYWluLCBkaXYsIHRoaXMsIG51bGwpO1xyXG5cclxuXHRcdHRhYnMgPSBudWxsO1xyXG5cclxuXHRcdGlmKGhvcml6b250YWwpIHtcclxuXHRcdFx0Y2hpbGQxLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLWxlZnQnKTtcclxuXHRcdFx0Y2hpbGQyLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLXJpZ2h0Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkaXYuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xyXG5cdFx0XHRjaGlsZDEuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtdG9wJyk7XHJcblx0XHRcdGNoaWxkMi5kaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1ib3R0b20nKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGJhci5jbGFzc0xpc3QuYWRkKCdjbC1iYXInKTtcclxuXHRcdGNoaWxkMS5kaXYuYXBwZW5kQ2hpbGQoYmFyKTtcclxuXHJcblx0XHRiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHN0YXJ0RHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlKTtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRiYXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coZXZlbnQpO1xyXG5cclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdHN0YXJ0RHJhZ2dpbmcodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHJcblxyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZSk7XHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEVuZCk7XHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaENhbmNlbCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmNoaWxkMSA9IGNoaWxkMTtcclxuXHRcdHRoaXMuY2hpbGQyID0gY2hpbGQyO1xyXG5cclxuXHRcdHRoaXMucGVyY2VudGFnZSg1MCk7XHJcblxyXG5cdFx0aWYoY2hpbGQxRGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGNoaWxkMS5sb2FkKGNoaWxkMURhdGEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGNoaWxkMkRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRjaGlsZDIubG9hZChjaGlsZDJEYXRhKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge2NoaWxkMTogY2hpbGQxLCBjaGlsZDI6IGNoaWxkMn07XHJcblx0fVxyXG5cclxuXHRsZXQgc3RhcnRYID0gbnVsbCwgc3RhcnRZID0gbnVsbDtcclxuXHJcblx0Y29uc3Qgc3RhcnREcmFnZ2luZyA9ICh4LCB5KSA9PiB7XHJcblx0XHRzdGFydFggPSB4O1xyXG5cdFx0c3RhcnRZID0geTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGVuZERyYWdnaW5nID0gKCkgPT4ge1xyXG5cdFx0c3RhcnRYID0gbnVsbDtcclxuXHRcdHN0YXJ0WSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHJcblx0Y29uc3QgZHJhZ2dpbmcgPSAoeCwgeSkgPT4ge1xyXG5cdFx0Y29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cclxuXHRcdGlmKGhvcml6b250YWxTcGxpdCkge1xyXG5cdFx0XHRjb25zdCBtYWluWCA9IHJlY3QubGVmdCArIGVsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldDtcclxuXHRcdFx0Y29uc3Qgd2lkID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdDtcclxuXHRcdFx0aWYod2lkIDw9IDApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHBlciA9ICh4IC0gbWFpblgpIC8gd2lkICogMTAwO1xyXG5cdFx0XHR0aGlzLnBlcmNlbnRhZ2UocGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IG1haW5ZID0gcmVjdC50b3AgICsgZWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRjb25zdCBoaXQgPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xyXG5cdFx0XHRpZihoaXQgPD0gMCkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgcGVyID0gKHkgLSBtYWluWSkgLyBoaXQgKiAxMDA7XHJcblx0XHRcdHRoaXMucGVyY2VudGFnZShwZXIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgbW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGlmKGV2ZW50LndoaWNoID09PSAwKSB7XHJcblx0XHRcdG1vdXNlVXAoZXZlbnQpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0ZHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdXNlVXAgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZSk7XHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwKTtcclxuXHRcdGVuZERyYWdnaW5nKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB0b3VjaE1vdmUgID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRkcmFnZ2luZyh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdG91Y2hFbmQgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdGRyYWdnaW5nKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblxyXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmUpO1xyXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kKTtcclxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaENhbmNlbCk7XHJcblxyXG5cdFx0ZW5kRHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHRvdWNoQ2FuY2VsID0gKGV2ZW50KSA9PiB7XHJcblx0XHR0b3VjaEVuZChldmVudCk7XHJcblx0fVxyXG5cclxuXHR0aGlzLnBlcmNlbnRhZ2UgPSBmdW5jdGlvbihwZXIpIHtcclxuXHRcdGlmKHBlciA8IHRoaXMubWluU3BsaXQpIHtcclxuXHRcdFx0cGVyID0gdGhpcy5taW5TcGxpdDtcclxuXHRcdH0gZWxzZSBpZihwZXIgPiB0aGlzLm1heFNwbGl0KSB7XHJcblx0XHRcdHBlciA9IHRoaXMubWF4U3BsaXQ7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoaG9yaXpvbnRhbFNwbGl0KSB7XHJcblx0XHRcdGNoaWxkMS5kaXYuc3R5bGUud2lkdGggPSBwZXIgKyAnJSc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjaGlsZDEuZGl2LnN0eWxlLmhlaWdodCA9IHBlciArICclJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRoaXMuZ2V0VGFiID0gZnVuY3Rpb24odGFnKSB7XHJcblx0XHRmb3IoY29uc3QgY29sbGVjdGlvbiBvZiBbdGFicywgY2hpbGQxLCBjaGlsZDJdKSB7XHJcblx0XHRcdGlmKGNvbGxlY3Rpb24gIT09IG51bGwpIHtcclxuXHRcdFx0XHRsZXQgdGFiID0gY29sbGVjdGlvbi5nZXRUYWIodGFnKTtcclxuXHRcdFx0XHRpZih0YWIgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0YWI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG59IiwiaW1wb3J0IHtNYWlufSBmcm9tICcuL01haW4nO1xyXG5pbXBvcnQge09wdGlvbnN9IGZyb20gJy4vT3B0aW9ucyc7XHJcbmltcG9ydCB7UmVhZHl9IGZyb20gJy4vVXRpbGl0eS9SZWFkeSc7XHJcbmltcG9ydCB7QWN0aW9ufSBmcm9tICcuL0FjdGlvbnMvQWN0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIFBsYXlncm91bmRcclxuICpcclxuICogVGhpcyBjcmVhdGVzIGEgc2luZ2xlIEluc3RhbmNlIHRoYXQgbWFuYWdlcyB0aGVcclxuICogY29tcG9uZW50cyBhbmQgc3RhcnRzIGFjdHVhbCBQbGF5Z3JvdW5kIHdpbmRvd3MuXHJcbiAqXHJcbiAqIENvbnN0cnVjdCBhbmQgc3RhcnQgcnVubmluZyBsaWtlIHRoaXM6XHJcbiAqXHJcbiAqIEdpdmVuIGFuIEhUTUwgZGl2OlxyXG4gKiAgICAgPGRpdiBpZD1cInBsYXlncm91bmRcIj48L2Rpdj5cclxuICpcclxuICogVGhlIGZvbGxvd2luZyBzY3JpcHQgc3RhcnRzIFBsYXlncm91bmQgaW4gdGhhdCBkaXY6XHJcbiAqXHJcbiAqICAgICB2YXIgcGxheWdyb3VuZCA9IG5ldyBQbGF5Z3JvdW5kKCcjcGxheWdyb3VuZCcpO1xyXG4gKiAgICAgcGxheWdyb3VuZC5zdGFydCgpO1xyXG4gKlxyXG4gKiBAcGFyYW0gc2l0ZSBTaXRlIG9iamVjdFxyXG4gKiBAcGFyYW0gc2VsIFNlbGVjdG9yIG9yIGVsZW1lbnQgdG8gY3JlYXRlIFBsYXlncm91bmQgaW4gKGNhbiBiZSBtYW55KVxyXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvYmplY3QgY29udGFpbmluZyBQbGF5Z3JvdW5kIG9wdGlvbnMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBsYXlncm91bmQgPSBmdW5jdGlvbihzaXRlLCBzZWwsIG9wdGlvbnMpIHtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gTWFzdGVyIHNldCBvZiB0aGUgdmVyc2lvblxyXG4gICAgLy9cclxuICAgIGxldCBQQUNLQUdFID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJyk7XHJcbiAgICB0aGlzLnZlcnNpb24gPSBQQUNLQUdFLnZlcnNpb247XHJcblxyXG4gICAgdGhpcy5zaXRlID0gc2l0ZTtcclxuXHJcbiAgICAvLyBSZWNvcmQgdGhlIHNlbGVjdG9yXHJcbiAgICB0aGlzLnNlbCA9IHNlbDtcclxuXHJcbiAgICAvLyBUaGUgT3B0aW9ucyBvYmplY3QgdGhhdCBtYW5hZ2VzIHVzZXIgb3B0aW9uc1xyXG4gICAgdGhpcy5vcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG4gICAgLy8gQSBjb2xsZWN0aW9uIG9mIE1haW4gb2JqZWN0cy5cclxuICAgIHZhciBtYWlucyA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgdGhlIFBsYXlncm91bmQgcnVubmluZywgY3JlYXRpbmcgdGhlIHVzZXIgaW50ZXJmYWNlLlxyXG4gICAgICogVGhpcyBkb2VzIHdhaXQgZm9yIGRvY3VtZW50IHJlYWR5IGJlZm9yZSBjYWxsaW5nXHJcbiAgICAgKiB0aGlzLnN0YXJ0Tm93KCkgdW5sZXNzIHdlIGFyZSBydW5uaW5nIGluIG5vLXdpbmRvd1xyXG4gICAgICogbW9kZS4gSW4gdGhhdCBjYXNlIGl0IHJldHVybnMgYSBzdGFydGVkIGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICB0aGlzLnN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHNlbCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydE5vdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmVhZHkuZ28oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Tm93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCB0aGUgUGxheWdyb3VuZCBydW5uaW5nIG5vdy4gRG9lcyBub3Qgd2FpdCBmb3IgZG9jdW1lbnQgcmVhZHkuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RhcnROb3cgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc2VsIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluID0gbmV3IE1haW4odGhpcywgc2VsKTtcclxuICAgICAgICAgICAgbWFpbnMucHVzaChtYWluKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbih0aGlzLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIG1haW5zLnB1c2gobWFpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG1haW5zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWFpbnNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGEgY29uc3RydWN0ZWQgQWN0aW9uIG9iamVjdCBmcm9tIHRoZSBhdmFpbGFibGUgcGxheWdyb3VuZCBhY3Rpb25zLlxyXG5cdCAqIEBwYXJhbSBhY3Rpb24gVGhlIGFjdGlvbiBkYXRhIGZyb20gdGhlIHNlcnZlci5cclxuXHQgKiBAcmV0dXJucyBBY3Rpb24gb2JqZWN0XHJcblx0ICovXHJcblx0dGhpcy5nZXRBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgIFx0aWYoUGxheWdyb3VuZC5hY3Rpb25zW2FjdGlvbi50YWddICE9PSB1bmRlZmluZWQpIHtcclxuICAgIFx0XHRyZXR1cm4gbmV3IChQbGF5Z3JvdW5kLmFjdGlvbnNbYWN0aW9uLnRhZ10pKHNpdGUsIGFjdGlvbik7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGNvbnNvbGUubG9nKCdQbGF5Z3JvdW5kIGFjdGlvbiAnICsgYWN0aW9uLnRhZyArICcgZG9lcyBub3QgZXhpc3QnKTtcclxuXHQgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcblBsYXlncm91bmQuQWN0aW9uID0gQWN0aW9uO1xyXG5cclxuUGxheWdyb3VuZC5hY3Rpb25zID0ge307XHJcblxyXG5QbGF5Z3JvdW5kLmFkZEFjdGlvbiA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG5cdHRoaXMuYWN0aW9uc1thY3Rpb24udGFnXSA9IGFjdGlvbjtcclxufSIsImltcG9ydCB7VG9vbHN9IGZyb20gJy4vRE9NL1Rvb2xzJztcclxuaW1wb3J0IHtPdXRwdXRUYWJ9IGZyb20gJy4vVGFicy9PdXRwdXRUYWInO1xyXG5pbXBvcnQge0VkaXRvclRhYn0gZnJvbSAnLi9UYWJzL0VkaXRvclRhYic7XHJcblxyXG5pbXBvcnQgbWVudWJhcnMgZnJvbSAnLi4vLi4vaW1nL21lbnViYXJzLnBuZyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIE1hbmFnZXMgdGhlIHRhYnMgaW4gdGhlIG1vZGVsXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBwYXJhbSBlbGVtZW50IFBhcmVudCBlbGVtZW50XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRhYnMgPSBmdW5jdGlvbihtYWluLCBlbGVtZW50KSB7XHJcbiAgICAvLy8gVGhlIGN1cnJlbnRseSBhY3RpdmUgdmlldy90YWJcclxuICAgIHRoaXMuYWN0aXZlID0gLTE7XHJcblxyXG4gICAgLy8vIFRoZSBNYWluIG9iamVjdFxyXG4gICAgdGhpcy5tYWluID0gbWFpbjtcclxuXHJcbiAgICAvLy8gVGhlIFNpdGUgb2JqZWN0XHJcbiAgICB0aGlzLnNpdGUgPSBtYWluLnNpdGU7XHJcblxyXG4gICAgLy8gVGhlIGNvbGxlY3Rpb24gb2YgdGFic1xyXG4gICAgdmFyIHRhYnMgPSBbXTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gVGhlIHN0cnVjdHVyZTogPGRpdiBjbGFzcz1cImNsLXRhYnNcIj48dWw+PC91bD48ZGl2IGNsYXNzPVwiY2wtdmlld3NcIj48L2Rpdj48L2Rpdj5cclxuICAgIC8vIGRpdi50YWJzIC0gRW5jbG9zdXJlIGZvciBhbGwgdGFicyBjb250ZW50XHJcbiAgICAvLyB1bCAtIFRoZSB0YWJzIHdlIHNlbGVjdCBmcm9tXHJcbiAgICAvLyB2aWV3c0RpdiAtIFRoZSB2aWV3cyB3aXRoIHRoZSB0YWIgY29udGVudHNcclxuICAgIC8vXHJcblxyXG4gICAgbGV0IHRhYnNEaXYgPSBudWxsLCB1bCA9IG51bGwsIHZpZXdzRGl2ID0gbnVsbDtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBDcmVhdGUgdGhlIHRhYnMgc3lzdGVtXHJcblx0ICogQHBhcmFtIGRpdiBUaGUgZGl2IHdlIHB1dCB0aGUgdGFicyBpbnRvXHJcblx0ICovXHJcblx0dGhpcy5jcmVhdGUgPSBmdW5jdGlvbihkaXYpIHtcclxuICAgICAgICAvLyBDcmVhdGU6IDxkaXYgY2xhc3M9XCJjbC10YWJzXCI+PHVsPjwvdWw+PGRpdiBjbGFzcz1cImNsLXZpZXdzXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgdGFic0RpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXBnLXRhYnMnKTtcclxuICAgICAgICB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgdGFic0Rpdi5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG4gICAgICAgIHZpZXdzRGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtcGctdmlld3MnKTtcclxuICAgICAgICB0YWJzRGl2LmFwcGVuZENoaWxkKHZpZXdzRGl2KTtcclxuXHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRhYnNEaXYpO1xyXG5cclxuICAgICAgICAvLyBDbGVhciB0aGUgdGFicyBjb2xsZWN0aW9uXHJcbiAgICAgICAgdGFicyA9IFtdO1xyXG5cclxuXHQvL1x0dGhpcy5hZGQoJ3Byb2dyYW0nKTtcclxuLy9cdFx0dGhpcy5hZGQoJ291dHB1dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubG9hZCA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGZvcihjb25zdCB0YWJEYXRhIG9mIGRhdGEpIHtcclxuXHRcdFx0dGhpcy5hZGQodGFiRGF0YSk7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5uZXdQYXJlbnQgPSBmdW5jdGlvbihwYW5lKSB7XHJcblx0XHRwYW5lLmRpdi5hcHBlbmRDaGlsZCh0YWJzRGl2KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGxldCB0YWIgPSBudWxsO1xyXG5cclxuXHQgICAgc3dpdGNoKGRhdGEudHlwZSkge1xyXG5cdFx0ICAgIGNhc2UgJ2VkaXRvcic6XHJcblx0XHRcdCAgICB0YWIgPSBuZXcgRWRpdG9yVGFiKHRoaXMsIGRhdGEpO1xyXG5cdFx0ICAgIFx0YnJlYWs7XHJcblxyXG5cdFx0ICAgIGNhc2UgJ291dHB1dCc6XHJcblx0XHQgICAgXHR0YWIgPSBuZXcgT3V0cHV0VGFiKHRoaXMsIGRhdGEpO1xyXG5cdFx0ICAgIFx0YnJlYWs7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmKHRhYiAhPT0gbnVsbCkge1xyXG5cdFx0ICAgIHVsLmFwcGVuZENoaWxkKHRhYi5saSk7XHJcblx0XHQgICAgdmlld3NEaXYuYXBwZW5kQ2hpbGQodGFiLnZpZXcpO1xyXG5cdFx0ICAgIHRhYnMucHVzaCh7dGFiOiB0YWIsIGxpOiB0YWIubGksIHZpZXc6IHRhYi52aWV3fSk7XHJcblxyXG5cdFx0ICAgIHRhYi5zZWxlY3QoKTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYSB0YWIgYnkgdGFnLlxyXG5cdCAqIEBwYXJhbSB0YWcgVGFiIHRhZ1xyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0VGFiID0gZnVuY3Rpb24odGFnKSB7XHJcblx0ICAgIGZvcihjb25zdCB0YWIgb2YgdGFicykge1xyXG5cdFx0ICAgIGlmKHRhYi50YWIudGFnID09PSB0YWcpIHtcclxuXHRcdFx0ICAgIHJldHVybiB0YWIudGFiO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51bnNlbGVjdEFsbCA9IGZ1bmN0aW9uKCkge1xyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBDbGVhciBhbGwgc2VsZWN0aW9uc1xyXG5cdCAgICAvL1xyXG5cdCAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xyXG5cdCAgICBcdHRhYi5saS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG5cdCAgICBcdHRhYi52aWV3LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcblx0ICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IC0xO1xyXG4gICAgICAgIHRhYnNEaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWJzRGl2KTtcclxuICAgICAgICB0YWJzRGl2ID0gbnVsbDtcclxuICAgICAgICB0YWJzID0gW107XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY3JlYXRlKGVsZW1lbnQpO1xyXG59O1xyXG4iLCJpbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRWRpdG9yVGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRjb25zdCBzaXRlID0gdGFicy5zaXRlO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnZWRpdG9yJyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHJcblx0bGV0IGlubmVyVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuYXBwZW5kQ2hpbGQoaW5uZXJWaWV3KTtcclxuXHJcblx0bGV0IG51bXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRudW1zLmNsYXNzTGlzdC5hZGQoJ2NsLXBnLW51bXMnKTtcclxuXHRpbm5lclZpZXcuYXBwZW5kQ2hpbGQobnVtcyk7XHJcblxyXG5cdGxldCBlZGl0b3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRlZGl0b3JEaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGctZWRpdG9yJyk7XHJcblx0aW5uZXJWaWV3LmFwcGVuZENoaWxkKGVkaXRvckRpdik7XHJcblxyXG5cdGNvbnN0IGVkaXRvciA9IG5ldyBzaXRlLkVkaXRvcihlZGl0b3JEaXYsIHtcclxuXHRcdHJlc2l6ZTogJ25vbmUnLFxyXG5cdFx0dGFiOiB0cnVlLFxyXG5cdFx0YXV0b0luZGVudDogdHJ1ZSxcclxuXHRcdHN0eWxlczogbnVsbFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBzY3JvbGxhYmxlID0gZWRpdG9yLnRleHRhcmVhO1xyXG5cdHNjcm9sbGFibGUuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGV2ZW50KSA9PiB7XHJcblx0XHQvLyBlZGl0b3JEaXYuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJzBweCAnICsgKC1wcmUuc2Nyb2xsVG9wKSArICdweCc7XHJcblx0XHRudW1zLnNjcm9sbFRvcCA9IHNjcm9sbGFibGUuc2Nyb2xsVG9wO1xyXG5cdH0pO1xyXG5cclxuXHR0aGlzLnNldCA9IGZ1bmN0aW9uKHRleHQpIHtcclxuXHRcdGVkaXRvci50ZXh0YXJlYS52YWx1ZSA9IHRleHQ7XHJcblxyXG5cdFx0bGV0IGxpbmVzID0gMDtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKXtcclxuXHRcdFx0aWYodGV4dFtpXSA9PT0gJ1xcbicpIHtcclxuXHRcdFx0XHRsaW5lcysrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYobGluZXMgPCAxMDApIHtcclxuXHRcdFx0bGluZXMgPSAxMDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVGhlIGV4dHJhIGFkZGVkIG9uIGhlcmUgZW5zdXJlcyB3ZSBnZXQgcGFzdCBhbnkgc2Nyb2xsIGJhclxyXG5cdFx0Ly8gdGhhdCBtYXkgdGFrZSB1cCBob3Jpem9udGFsIHJvb20uXHJcblx0XHRudW1zLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0Zm9yKGxldCBpPTE7IGk8PWxpbmVzKzU7IGkrKykge1xyXG5cdFx0XHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0XHRwLmlubmVyVGV4dCA9ICcnICsgaTtcclxuXHRcdFx0bnVtcy5hcHBlbmRDaGlsZChwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgY29udGVudHMgb2YgdGhlIGVkaXRvclxyXG5cdCAqIEByZXR1cm5zIHsqfHN0cmluZ31cclxuXHQgKi9cclxuXHR0aGlzLmdldCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGVkaXRvci50ZXh0YXJlYS52YWx1ZTtcclxuXHR9XHJcblxyXG5cdHRoaXMuc2VsZWN0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRUYWIucHJvdG90eXBlLnNlbGVjdC5jYWxsKHRoaXMpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRlZGl0b3IudGV4dGFyZWEuZm9jdXMoKTtcclxuXHRcdH0sIDApO1xyXG5cclxuXHR9XHJcblxyXG5cdGxldCB0ZXh0ID0gYGltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7ZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtleHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHRcclxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcclxufVxyXG5cclxuaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcclxuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcclxuXHJcblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ291dHB1dCcpO1xyXG5cdHRoaXMudmlldyA9IHZpZXc7XHJcblx0XHJcblx0dmlldy5pbm5lclRleHQgPSBcXGBcXGA7XHJcbn1cclxuaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcclxuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcclxuXHJcblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ291dHB1dCcpO1xyXG5cdHRoaXMudmlldyA9IHZpZXc7XHJcblx0XHJcblx0dmlldy5pbm5lclRleHQgPSBcXGBcXGA7XHJcbn1cclxuXHJcbk91dHB1dFRhYi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRhYi5wcm90b3R5cGUpO1xyXG5PdXRwdXRUYWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3V0cHV0VGFiO2A7XHJcblxyXG5cdHRleHQgPSBgLnRleHRcclxuLnRodW1iXHJcblxyXG5sb29wOlxyXG4gICAgbW92IHIwLCM3XHJcbiAgICBtb3YgcjEscjJcclxuICAgIGFuZCByMyxyNFxyXG4gICAgYiBsb29wYDtcclxuXHJcblx0dGhpcy5zZXQoJycpO1xyXG59XHJcblxyXG5FZGl0b3JUYWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUYWIucHJvdG90eXBlKTtcclxuRWRpdG9yVGFiLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEVkaXRvclRhYjsiLCJpbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHJcblx0bGV0IGlubmVyVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuYXBwZW5kQ2hpbGQoaW5uZXJWaWV3KTtcclxuXHJcblx0bGV0IG51bXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRudW1zLmNsYXNzTGlzdC5hZGQoJ2NsLXBnLW51bXMnKTtcclxuXHRpbm5lclZpZXcuYXBwZW5kQ2hpbGQobnVtcyk7XHJcblxyXG5cdGxldCBwcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcclxuXHRpbm5lclZpZXcuYXBwZW5kQ2hpbGQocHJlKTtcclxuXHJcblx0cHJlLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4ge1xyXG5cdFx0cHJlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICcwcHggJyArICgtcHJlLnNjcm9sbFRvcCkgKyAncHgnO1xyXG5cdFx0bnVtcy5zY3JvbGxUb3AgPSBwcmUuc2Nyb2xsVG9wO1xyXG5cdH0pO1xyXG5cclxuXHR0aGlzLnNldCA9IGZ1bmN0aW9uKHRleHQpIHtcclxuXHRcdHByZS5pbm5lckhUTUwgPSB0ZXh0O1xyXG5cclxuXHRcdGxldCBsaW5lcyA9IDA7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7ICsraSl7XHJcblx0XHRcdGlmKHRleHRbaV0gPT09ICdcXG4nKSB7XHJcblx0XHRcdFx0bGluZXMrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGxpbmVzIDwgMTAwKSB7XHJcblx0XHRcdGxpbmVzID0gMTAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFRoZSBleHRyYSBhZGRlZCBvbiBoZXJlIGVuc3VyZXMgd2UgZ2V0IHBhc3QgYW55IHNjcm9sbCBiYXJcclxuXHRcdC8vIHRoYXQgbWF5IHRha2UgdXAgaG9yaXpvbnRhbCByb29tLlxyXG5cdFx0bnVtcy5pbm5lckhUTUwgPSAnJztcclxuXHRcdGZvcihsZXQgaT0xOyBpPD1saW5lcys1OyBpKyspIHtcclxuXHRcdFx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdFx0cC5pbm5lclRleHQgPSAnJyArIGk7XHJcblx0XHRcdG51bXMuYXBwZW5kQ2hpbGQocCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCB0ZXh0ID0gYGltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7ZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtleHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHRcclxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcclxufVxyXG5cclxuaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcclxuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcclxuXHJcblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ291dHB1dCcpO1xyXG5cdHRoaXMudmlldyA9IHZpZXc7XHJcblx0XHJcblx0dmlldy5pbm5lclRleHQgPSBcXGBcXGA7XHJcbn1cclxuaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcclxuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcclxuXHJcblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ291dHB1dCcpO1xyXG5cdHRoaXMudmlldyA9IHZpZXc7XHJcblx0XHJcblx0dmlldy5pbm5lclRleHQgPSBcXGBcXGA7XHJcbn1cclxuXHJcbk91dHB1dFRhYi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRhYi5wcm90b3R5cGUpO1xyXG5PdXRwdXRUYWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3V0cHV0VGFiO2A7XHJcblxyXG5cdC8vdGhpcy5zZXQodGV4dCArIHRleHQgKyB0ZXh0ICsgdGV4dCk7XHJcblx0dGhpcy5zZXQoJycpO1xyXG59XHJcblxyXG5PdXRwdXRUYWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUYWIucHJvdG90eXBlKTtcclxuT3V0cHV0VGFiLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE91dHB1dFRhYjsiLCJcclxuZXhwb3J0IGNvbnN0IFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcclxuXHR0aGlzLnRhYnMgPSB0YWJzO1xyXG5cclxuXHR0aGlzLnZpZXcgPSBudWxsO1xyXG5cdHRoaXMudGFnID0gZGF0YS50YWc7XHJcblxyXG5cdGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0dGhpcy5saSA9IGxpO1xyXG5cclxuXHRsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHRsaS5hcHBlbmRDaGlsZChhKTtcclxuXHRhLmlubmVyVGV4dCA9IGRhdGEubmFtZTtcclxuXHJcblx0bGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblx0bGkuYXBwZW5kQ2hpbGQobWVudSk7XHJcblx0Ly8gbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cdC8vIG1lbnUuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHQvLyBpbWcuc3JjID0gbWVudWJhcnM7XHJcblxyXG5cdGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5zZWxlY3QoKTtcclxuXHR9KTtcclxuXHJcblx0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRoaXMuc2VsZWN0KCk7XHJcblx0fSk7XHJcblxyXG5cclxuXHQvL1xyXG5cdC8vIFRoZSBtZW51XHJcblx0Ly8gTWF5YmUgYWN0aXZhdGUgbGF0ZXIgb24/XHJcblx0Ly9cclxuXHQvLyBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Ly8gbWVudURpdi5jbGFzc0xpc3QuYWRkKCdjbC10YWItbWVudScpO1xyXG5cdC8vIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnY2wtbWVudS1vcGVuJyk7XHJcblx0Ly8gbGkuYXBwZW5kQ2hpbGQobWVudURpdik7XHJcblx0Ly9cclxuXHQvLyBjb25zdCBtZW51VUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdC8vIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudVVMKTtcclxuXHQvLyBtZW51VUwuaW5uZXJIVE1MID1cclxuXHQvLyBcdCc8bGk+PGEgY2xhc3M9XCJlZGl0LXVuZG9cIj48c3BhbiBjbGFzcz1cImljb25zLWNsIGljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS13XCI+PC9zcGFuPlVuZG88L2E+PC9saT4nICtcclxuXHQvLyBcdCc8bGk+PGEgY2xhc3M9XCJlZGl0LWRlbGV0ZVwiPjxzcGFuIGNsYXNzPVwiaWNvbnMtY2wgaWNvbnMtY2wtdHJhc2hcIj48L3NwYW4+RGVsZXRlPC9hPjwvbGk+JztcclxuXHQvL1xyXG5cdC8vIGNvbnN0IGNvbm5lY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHQvLyBtZW51RGl2LmFwcGVuZENoaWxkKGNvbm5lY3REaXYpO1xyXG5cdC8vXHJcblx0Ly8gaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblx0Ly8gY29ubmVjdERpdi5hcHBlbmRDaGlsZChpbWcpO1xyXG5cdC8vIGltZy5zcmMgPSBtZW51YmFycztcclxufVxyXG5cclxuVGFiLnByb3RvdHlwZS5zZWxlY3QgID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy50YWJzLnVuc2VsZWN0QWxsKCk7XHJcblxyXG5cdHRoaXMubGkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuXHR0aGlzLnZpZXcuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxufVxyXG4iLCIvKipcclxuICogRHJhZyBhbmQgZHJvcCBzdXBwb3J0IGZvciB0aGUgcGFsZXR0ZVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBEcmFnQW5kRHJvcCA9IGZ1bmN0aW9uKG1haW4pIHtcclxuXHJcblx0bGV0IGRyYWdFbGVtZW50ID0gbnVsbDsgLy8gRE9NIEVsZW1lbnRcclxuXHRsZXQgZHJhZ0l0ZW0gPSBudWxsOyAgICAvLyBQYWxldHRlSXRlbVxyXG5cdGxldCBkcm9wVmlld3MgPSBbXTsgICAgIC8vIFZpZXdcclxuXHJcblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0aWYoZXZlbnQud2hpY2ggPT09IDApIHtcclxuXHRcdFx0XHRtb3VzZVVwKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtb3VzZU1vdmUoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdG1vdXNlTW92ZSh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0bW91c2VVcChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRtb3VzZVVwKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdG1vdXNlVXAodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dGhpcy5kcmFnZ2FibGUgPSAocGFsZXR0ZUl0ZW0pID0+IHtcclxuXHRcdHBhbGV0dGVJdGVtLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGNsaWNrKHBhbGV0dGVJdGVtKTtcclxuXHJcblx0XHRcdG1vdXNlTW92ZShldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cGFsZXR0ZUl0ZW0uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGNsaWNrKHBhbGV0dGVJdGVtKTtcclxuXHJcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRtb3VzZU1vdmUodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dGhpcy5kcm9wcGFibGUgPSAodmlldywgY2FsbGJhY2spID0+IHtcclxuXHRcdGRyb3BWaWV3cy5wdXNoKHtcclxuXHRcdFx0J3ZpZXcnOiB2aWV3LFxyXG5cdFx0XHQnY2FsbGJhY2snOiBjYWxsYmFja1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjbGljayA9IChwYWxldHRlSXRlbSkgPT4ge1xyXG5cdFx0Ly9cclxuXHRcdC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGVsZW1lbnQgYW5kIHNldCBpdCB1cCBmb3IgZHJhZ2dpbmdcclxuXHRcdC8vXHJcblx0XHRjb25zdCBjbG9uZSA9IHBhbGV0dGVJdGVtLnBhbGV0dGVJbWFnZSgpO1xyXG5cdFx0bWFpbi5lbGVtZW50LmFwcGVuZENoaWxkKGNsb25lKTtcclxuXHRcdGNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHRcdGNsb25lLnN0eWxlLnRvcCA9IDA7XHJcblx0XHRjbG9uZS5zdHlsZS5sZWZ0ID0gMDtcclxuXHRcdGNsb25lLnN0eWxlLnpJbmRleCA9IDEwMDtcclxuXHRcdGNsb25lLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuXHJcblx0XHRkcmFnSXRlbSA9IHBhbGV0dGVJdGVtO1xyXG5cdFx0ZHJhZ0VsZW1lbnQgPSBjbG9uZTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdXNlTW92ZSA9ICh4LCB5KSA9PiB7XHJcblx0XHRpZihkcmFnRWxlbWVudCAhPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCByZWN0ID0gbWFpbi5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRjb25zdCBtYWluWCA9IHJlY3QubGVmdCArIG1haW4uZWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG5cdFx0XHRjb25zdCBtYWluWSA9IHJlY3QudG9wICArIG1haW4uZWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRkcmFnRWxlbWVudC5zdHlsZS5sZWZ0ID0gKHggLSBtYWluWCAtIGRyYWdFbGVtZW50LmNsaWVudFdpZHRoIC8gMikgKyAncHgnO1xyXG5cdFx0XHRkcmFnRWxlbWVudC5zdHlsZS50b3AgPSAoeSAtIG1haW5ZIC0gZHJhZ0VsZW1lbnQuY2xpZW50SGVpZ2h0IC8gMikgKyAncHgnO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3VzZVVwID0gKHgsIHkpID0+IHtcclxuXHRcdGlmKGRyYWdFbGVtZW50ICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHRmb3IoY29uc3QgdmlldyBvZiBkcm9wVmlld3MpIHtcclxuXHRcdFx0XHQvL1xyXG5cdFx0XHRcdC8vIElzIHRoZSB2aWV3IGVuYWJsZWQ/XHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHRjb25zdCB2aWV3RWxlbWVudCA9IHZpZXcudmlldy5lbGVtZW50O1xyXG5cdFx0XHRcdGlmKHZpZXdFbGVtZW50LnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vXHJcblx0XHRcdFx0Ly8gRGV0ZXJtaW5lIHgseSBpbiB0aGUgY2FudmFzXHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHRjb25zdCByZWN0ID0gdmlld0VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0Y29uc3Qgdmlld1ggPSByZWN0LmxlZnQgKyB2aWV3RWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG5cdFx0XHRcdGNvbnN0IHZpZXdZID0gcmVjdC50b3AgKyB2aWV3RWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRcdGlmKHggPj0gdmlld1ggJiZcclxuXHRcdFx0XHRcdHkgPj0gdmlld1kgJiZcclxuXHRcdFx0XHRcdHggPCB2aWV3WCArIChyZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0KSAmJlxyXG5cdFx0XHRcdFx0eSA8IHZpZXdZICsgKHJlY3QuYm90dG9tIC0gcmVjdC50b3ApKSB7XHJcblx0XHRcdFx0XHR2aWV3LmNhbGxiYWNrKGRyYWdJdGVtLCB4IC0gdmlld1gsIHkgLSB2aWV3WSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1haW4uZWxlbWVudC5yZW1vdmVDaGlsZChkcmFnRWxlbWVudCk7XHJcblx0XHRcdGRyYWdFbGVtZW50ID0gbnVsbDtcclxuXHRcdFx0ZHJhZ0l0ZW0gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbn0iLCIvKipcclxuICogU2ltcGxlIERvY3VtZW50IHJlYWR5IGZ1bmN0aW9uLCBlcXVpdmFsZW50IHRvIGpRdWVyeSdzIGRvY3VtZW50IHJlYWR5LlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBSZWFkeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4vKipcclxuICogQ2FsbCBhIGZ1bmN0aW9uIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWRvbi5cclxuICogQHBhcmFtIGZuIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBkb2N1bWVudCByZWFkeVxyXG4gKi9cclxuUmVhZHkuZ28gPSBmdW5jdGlvbihmbikge1xyXG4gICAgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50ID8gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpe1xyXG4gICAgICAgIGZuKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtQbGF5Z3JvdW5kfSBmcm9tIFwiLi9QbGF5Z3JvdW5kL1BsYXlncm91bmRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5Z3JvdW5kRmFjdG9yeSA9IGZ1bmN0aW9uKCkge31cclxuXHJcblBsYXlncm91bmRGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcblx0ZnVuY3Rpb24gaW5zdGFsbCgpIHtcclxuXHRcdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNsLXBsYXlncm91bmQnKTtcclxuXHRcdGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcblx0XHRcdGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG5cdFx0XHRlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRjb25zdCBwbGF5Z3JvdW5kID0gbmV3IFBsYXlncm91bmQoc2l0ZSwgZWxlbWVudCwganNvbik7XHJcblx0XHRcdHBsYXlncm91bmQuc3RhcnROb3coKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNpdGUuc3RhcnQoICgpID0+IHtcclxuXHRcdGluc3RhbGwoKTtcclxuXHR9KTtcclxuXHJcblx0c2l0ZS5QbGF5Z3JvdW5kID0gUGxheWdyb3VuZDtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
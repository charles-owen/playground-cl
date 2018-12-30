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
exports.push([module.i, "div.cl-playground div.toast {\n  position: absolute;\n  bottom: 0;\n  visibility: hidden;\n  transform: translateY(2.3em);\n  z-index: 400;\n  transition: all 0.4s ease-in-out 0s, visibility 0s linear 0.4s, z-index 0s linear 0.01s;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1.1em;\n  left: calc(50% - 30em/2);\n  width: 30em;\n  background-color: #151515;\n  color: white;\n  text-align: center;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding: 0.5em;\n}\n\ndiv.cl-playground div.toast.toast-active {\n  visibility: visible;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.4s;\n  z-index: 400;\n}\n\ndiv.cl-playground {\n  display: none;\n}\n\ndiv.cl-playground nav.menubar {\n  flex: 0 1 auto;\n  position: relative;\n  z-index: 100;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background-color: #f0f3f0;\n  border-bottom: thin solid #808080;\n  font-size: 0.9rem;\n}\n\ndiv.cl-playground nav.menubar li:hover {\n  background: #00796B;\n}\n\ndiv.cl-playground nav.menubar li {\n  user-select: none;\n  cursor: pointer;\n}\n\ndiv.cl-playground nav.menubar li a,\ndiv.cl-playground nav.menubar li a:link,\ndiv.cl-playground nav.menubar li a:visited {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\n\ndiv.cl-playground nav.menubar > ul {\n  list-style-type: none;\n  margin: 0;\n  border: 0;\n  padding: 0;\n}\n\ndiv.cl-playground nav.menubar > ul img.check {\n  vertical-align: baseline;\n  width: 19px;\n  height: 16px;\n  content: url(" + escape(__webpack_require__(/*! ./img/menu-check.png */ "./vendor/cl/playground/img/menu-check.png")) + ");\n}\n\ndiv.cl-playground nav.menubar > ul > li {\n  display: inline-block;\n  margin: 0;\n  border: 0;\n  padding: 0.25em 2em 0.25em 0.5em;\n  position: relative;\n}\n\ndiv.cl-playground nav.menubar > ul > li a,\ndiv.cl-playground nav.menubar > ul > li a:link,\ndiv.cl-playground nav.menubar > ul > li a:visited {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\n\ndiv.cl-playground nav.menubar > ul ul {\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n  list-style-type: none;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: 100%;\n  margin: 1px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n  border-top-width: 0;\n}\n\ndiv.cl-playground nav.menubar > ul ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\n\ndiv.cl-playground nav.menubar > ul ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\ndiv.cl-playground nav.menubar > ul ul > li.menu-disabled a {\n  opacity: 0.3;\n}\n\ndiv.cl-playground nav.menubar > ul ul.menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\n\ndiv.cl-playground nav.menubar > ul ul.edit-menu a {\n  width: 6em;\n}\n\ndiv.cl-playground nav.menubar > ul ul.option-menu a {\n  width: 11em;\n}\n\ndiv.cl-playground nav.menubar > ul ul.file-menu a {\n  width: 6em;\n}\n\ndiv.cl-playground nav.menubar > ul ul.help-menu a {\n  width: 7.5em;\n}\n\ndiv.cl-playground nav.menubar > ul .ul-state-active {\n  color: red;\n}\n\ndiv.cl-playground nav.menubar > ul li.menu-divider {\n  height: 1px;\n  border: 0 solid black;\n  border-top-width: 1px;\n}\n\ndiv.cl-playground div.work {\n  flex: 1 1 auto;\n  position: relative;\n  width: 100%;\n  background: black;\n}\n\ndiv.cl-playground div.playground-overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #a00;\n  opacity: 0.05;\n  z-index: 2000;\n  display: none;\n}\n\ndiv.cl-playground div.main {\n  line-height: normal;\n  font-size: 1rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\ndiv.cl-playground-full {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: white;\n}\n\ndiv.cl-playground-window {\n  position: relative;\n  width: 100%;\n  height: 600px;\n  margin: 0;\n  border-left: 0;\n  border-right: 0;\n  padding: 0;\n  border-top: thin solid #aaaaaa;\n  background: white;\n  min-height: 100px;\n  min-width: 800px;\n}\n\ndiv.cl-playground-gap-before,\ndiv.cl-playground-gap-after {\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 1px;\n}\n\ndiv.cl-playground-gap-after {\n  height: 1em;\n}\n\ndiv.cirsim div.dialog-content {\n  position: relative;\n  padding: 0.5em;\n  font-size: 0.95em;\n}\n\ndiv.cirsim div.dialog-content input {\n  padding: 3px;\n  box-sizing: border-box;\n  font-size: 1.1em;\n}\n\ndiv.cirsim div.dialog-content h2 {\n  margin: 0.75em 0;\n}\n\ndiv.cirsim div.dialog-content form {\n  position: relative;\n  height: 100%;\n}\n\ndiv.cirsim div.dialog-content .large {\n  font-size: 1.2em;\n}\n\ndiv.cirsim div.dialog-content fieldset {\n  position: relative;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  min-width: 0;\n  max-width: 100%;\n}\n\ndiv.cirsim div.dialog-content p.error {\n  margin: 1em 0 0 0;\n  text-align: center;\n  color: red;\n  font-size: 0.9em;\n  font-style: italic;\n}\n\ndiv.cirsim div.dialog-content div.control {\n  position: relative;\n  margin: 0 0 1em 0;\n}\n\ndiv.cirsim div.dialog-content div.control label {\n  display: block;\n  font-style: italic;\n  margin: 0.2em 0 0.1em 0;\n}\n\ndiv.cirsim div.dialog-content div.control input {\n  display: block;\n}\n\ndiv.cirsim div.dialog-content div.control input[type=text],\ndiv.cirsim div.dialog-content div.control input[type=file] {\n  width: 100%;\n}\n\ndiv.cirsim div.dialog-content div.control input[type=radio] {\n  display: inline-block;\n}\n\ndiv.cirsim div.dialog-content div.control input[type=range] {\n  width: 100%;\n}\n\ndiv.cirsim div.dialog-content div.control p.selector {\n  text-align: center;\n}\n\ndiv.cirsim div.dialog-content div.control select {\n  width: 6em;\n}\n\ndiv.cirsim div.dialog-content div.control select.files {\n  width: 100%;\n}\n\ndiv.cirsim div.dialog-content div.control div.notice {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 45%;\n  text-align: center;\n  font-style: italic;\n  color: saddlebrown;\n}\n\ndiv.cirsim div.dialog-content div.control textarea {\n  width: 100%;\n}\n\ndiv.cirsim div.dialog-content div.control1 {\n  margin: 0 0 1em 0;\n}\n\ndiv.cirsim div.dialog-content div.control1 label {\n  display: inline-block;\n  font-style: italic;\n  padding-right: 0.5em;\n}\n\ndiv.cirsim div.dialog-content div.control1 select {\n  width: 6em;\n}\n\ndiv.cirsim div.dialog-content div.control1 input.number {\n  width: 2em;\n  text-align: center;\n}\n\ndiv.cirsim div.dialog-content div.control1 input.compname {\n  width: 4em;\n}\n\ndiv.cirsim div.dialog-content div.control1 input.tabname {\n  width: 6em;\n}\n\ndiv.cirsim div.dialog-content div.center {\n  text-align: center;\n}\n\ndiv.cirsim div.dialog-content div.indent {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\ndiv.cirsim div.dialog-content h1 {\n  margin: 0 0 0.5em 0;\n}\n\ndiv.cirsim div.dialog-content p {\n  color: #606060;\n}\n\ndiv.cirsim div.dialog-content .gap {\n  margin-top: 1em;\n}\n\ndiv.cirsim.about {\n  width: 400px;\n  text-align: center;\n}\n\ndiv.cirsim.about img {\n  width: 171px;\n  height: 75px;\n}\n\ndiv.cirsim.about div.dialog-content {\n  padding: 1em;\n}\n\ndiv.cirsim.help {\n  width: 450px;\n  height: 600px;\n}\n\ndiv.cirsim.component a.helper {\n  display: block;\n  position: absolute;\n  right: 0.5em;\n  top: 0.5em;\n  float: right;\n  color: #606060;\n  font-style: italic;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.85em;\n  padding: 0;\n}\n\ndiv.cirsim .cirsim-error {\n  color: red;\n}\n\ndiv.cirsim-dialog {\n  padding: 1em;\n  font-size: 0.95em;\n}\n\n.ui-dialog-buttonset button {\n  width: 6em;\n}\n\n.ui-dialog .ui-dialog-buttonpane {\n  padding: 0;\n}\n\ndiv.cirsim table {\n  margin-left: auto;\n  margin-right: auto;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: 0.9em;\n}\n\ndiv.cirsim table th {\n  color: white;\n  background: #18453B;\n  /* #3e9c45; */\n  background: linear-gradient(#18453B, #73d189);\n  text-shadow: rgba(0, 0, 0, 0.4) 0 1px 0;\n  border-right: 1px solid #C1DAD7;\n  border-bottom: 1px solid #C1DAD7;\n  border-top: 1px solid #C1DAD7;\n  letter-spacing: 1px;\n  text-align: left;\n  padding: 2px 6px;\n  font-family: Helvetica, Arial, sans-serif;\n  text-decoration: none;\n  vertical-align: bottom;\n}\n\ndiv.cirsim table th a:link {\n  color: #F5F3EB;\n}\n\ndiv.cirsim table th a:visited {\n  color: #E3DCC5;\n}\n\ndiv.cirsim table th a:hover {\n  color: #ffffff;\n}\n\ndiv.cirsim table th.width40 {\n  width: 20%;\n}\n\ndiv.cirsim table th.width40em {\n  width: 40em;\n}\n\ndiv.cirsim table th.width20em {\n  width: 20em;\n}\n\ndiv.cirsim table td {\n  border-right: 1px solid #C1DAD7;\n  border-bottom: 1px solid #C1DAD7;\n  background: #ffffff;\n  padding: 0.25em 0.75em;\n  color: #4f6b72;\n}\n\ndiv.cirsim table td a:link {\n  color: #8A8A8A;\n  text-decoration: underline;\n}\n\ndiv.cirsim table td a:visited {\n  color: #B09D5B;\n  text-decoration: underline;\n}\n\ndiv.cirsim table td a:hover {\n  color: #3366cc;\n  text-decoration: underline;\n}\n\ndiv.cirsim table.center td,\ndiv.cirsim table.center th {\n  text-align: center;\n}\n\ndiv.cirsim table.truth-table th {\n  color: black;\n  background: white;\n  text-shadow: none;\n  border: none;\n  border-bottom: 1px solid black;\n  text-align: center;\n}\n\ndiv.cirsim table.truth-table td {\n  border: 0;\n}\n\ndiv.cirsim table.truth-table th:last-child,\ndiv.cirsim table.truth-table td:last-child {\n  border-left: thin solid black;\n}\n\ndiv.cl-playground div.cl-tabs {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  font-size: 0.8rem;\n  padding: 0;\n  background: #ddd;\n  border: 0;\n}\n\ndiv.cl-playground div.cl-tabs > ul {\n  margin: 0;\n  padding: 3px 0 0 2px;\n  background: transparent;\n  border: 0;\n  list-style: none;\n}\n\ndiv.cl-playground div.cl-tabs > ul > li {\n  position: relative;\n  display: inline-block;\n  font-size: 0.8rem;\n  padding: 0.25em 0.25em 0.45em 0;\n  min-width: 6em;\n  text-align: center;\n  cursor: pointer;\n  background: #ccc;\n  border: 1px solid black;\n  border-bottom: none;\n  border-radius: 5px 5px 0 0;\n  margin: 1px 3px -1px 0;\n  white-space: nowrap;\n  z-index: 18;\n}\n\ndiv.cl-playground div.cl-tabs > ul > li a:first-child {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  display: inline-block;\n  padding: 0 0.25em;\n  text-decoration: none;\n  color: black;\n  outline: 0;\n  user-select: none;\n}\n\ndiv.cl-playground div.cl-tabs > ul > li a:nth-child(2) {\n  float: right;\n  display: inline-block;\n  margin-top: -2px;\n  padding: 0;\n}\n\ndiv.cl-playground div.cl-tabs > ul > li a:nth-child(2) img {\n  width: 12px;\n  height: auto;\n}\n\ndiv.cl-playground div.cl-tabs > ul > li.selected {\n  background: white;\n  z-index: 22;\n}\n\ndiv.cl-playground div.cl-tabs > ul > li.selected a {\n  color: black;\n}\n\ndiv.cl-playground div.cl-tabs div.cl-views {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n}\n\ndiv.cl-playground div.cl-tabs div.cl-view {\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n  overflow: auto;\n}\n\ndiv.cl-playground div.cl-tabs div.cl-view.selected {\n  display: block;\n  background: white;\n  border-top: 1px solid black;\n}\n\ndiv.cl-playground div.cl-tab-menu {\n  position: absolute;\n  left: calc(100% - 17px);\n  top: 0;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n}\n\ndiv.cl-playground div.cl-tab-menu div {\n  position: absolute;\n  width: 14px;\n  height: 27px;\n  top: 4px;\n  left: 0;\n  border: 1px solid #808080;\n  border-bottom-width: 0;\n  background-color: #f0f3f0;\n}\n\ndiv.cl-playground div.cl-tab-menu div img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 12px;\n  height: auto;\n}\n\ndiv.cl-playground div.cl-tab-menu ul {\n  list-style-type: none;\n  overflow: hidden;\n  margin: 30px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n}\n\ndiv.cl-playground div.cl-tab-menu ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\n\ndiv.cl-playground div.cl-tab-menu ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\ndiv.cl-playground div.cl-tab-menu ul > li.menu-disabled a {\n  opacity: 0.3;\n}\n\ndiv.cl-playground div.cl-tab-menu.cl-menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\n\ndiv.cl-playground div.cl-playground-root,\ndiv.cl-playground div.cl-playground-left,\ndiv.cl-playground div.cl-playground-right,\ndiv.cl-playground div.cl-playground-top,\ndiv.cl-playground div.cl-playground-bottom {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  background: white;\n}\n\ndiv.cl-playground div.cl-playground-left {\n  position: relative;\n  flex: 0 1 auto;\n  border-right: 1px solid #888;\n}\n\ndiv.cl-playground div.cl-playground-left div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  top: 0;\n  height: 100%;\n  right: -10px;\n  width: 20px;\n  background: transparent;\n  z-index: 100;\n  cursor: ew-resize;\n}\n\ndiv.cl-playground div.cl-playground-top {\n  flex: 0 1 auto;\n  width: 100%;\n  border-bottom: 1px solid #888;\n}\n\ndiv.cl-playground div.cl-playground-top div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  bottom: -10px;\n  height: 20px;\n  width: 100%;\n  background: transparent;\n  z-index: 2;\n  cursor: ns-resize;\n}\n\ndiv.cl-playground div.cl-playground-bottom {\n  width: 100%;\n  height: auto;\n}\n\ndiv.cl-playground div.cl-playground-root {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n", ""]);

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





console.log('Playground index.js');

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

/***/ "./vendor/cl/playground/js/Playground/Dlg/AboutDialog.js":
/*!***************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Dlg/AboutDialog.js ***!
  \***************************************************************/
/*! exports provided: AboutDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDialog", function() { return AboutDialog; });
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog */ "./vendor/cl/playground/js/Playground/Dlg/Dialog.js");

/**
 * The standard About dialog box.
 * @constructor
 */

var AboutDialog = function AboutDialog(main) {
  _Dialog__WEBPACK_IMPORTED_MODULE_0__["Dialog"].call(this, "about");

  this.open = function () {
    this.buttonCancel = null; // Dialog box contents

    var content = "<figure><img src=\"img/logo-icon.png\" alt=\"Cirsim Logo\"></figure>\n<h1>Cirsim Circuit Simulator</h1>\n<p>Version: ".concat(main.cirsim.version, "</p>\n<p>Written by: Charles B. Owen</p>");

    if (main.cirsim.root.indexOf('cirsim-dev') >= 0) {
      content += "<p class=\"gap\">Running from the development site.</p>";
    }

    this.contents(content, "About Cirsim");
    _Dialog__WEBPACK_IMPORTED_MODULE_0__["Dialog"].prototype.open.call(this);
  };
};
AboutDialog.prototype = Object.create(_Dialog__WEBPACK_IMPORTED_MODULE_0__["Dialog"].prototype);
AboutDialog.prototype.constructor = AboutDialog;

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Dlg/Dialog.js":
/*!**********************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Dlg/Dialog.js ***!
  \**********************************************************/
/*! exports provided: Dialog, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony import */ var _Utility_Unique__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/Unique */ "./vendor/cl/playground/js/Playground/Utility/Unique.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
/* harmony import */ var _DOM_Tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DOM/Tools */ "./vendor/cl/playground/js/Playground/DOM/Tools.js");




/**
 * Base object for general-purpose dialog boxes where the
 * functionality is assumed to be implemented in a derived object.
 * @param classes Classes to add to the dialog box
 * @constructor
 */

var Dialog = function Dialog(classes) {
  this.classes = classes !== undefined ? 'cirsim ' + classes : 'cirsim';
  this.buttonOk = "Ok";
  this.buttonCancel = "Cancel";
  this.resize = 'none;';
  this.titleBarButtons = null;
};
/**
 * Set the dialog box contents
 * @param html HTML for the body
 * @param title Title for the title bar
 */

Dialog.prototype.contents = function (html, title) {
  this.html = html;
  this.title = title;
};
/**
 * Open the dialog box
 */


Dialog.prototype.open = function () {
  var _this = this;

  var form = document.createElement('form');
  var div = _DOM_Tools__WEBPACK_IMPORTED_MODULE_3__["Tools"].createClassedDiv('dialog-content');
  form.appendChild(div);
  var dlg = "".concat(this.html, "<p class=\"error\"></p>\n<input type=\"submit\" tabindex=\"-1\" style=\"position:absolute; top:-1000px\">");
  div.innerHTML = dlg;
  this.element = div;
  var buttons = [];

  if (this.buttonOk !== null) {
    buttons.push({
      contents: 'Ok',
      click: function click(dialog) {
        _this.ok();
      },
      focus: true
    });
  }

  if (this.buttonCancel !== null) {
    buttons.push({
      contents: 'Cancel',
      click: function click(dialog) {
        dialog.close();
      }
    });
  }

  var dialog = new dialog_cl__WEBPACK_IMPORTED_MODULE_2__["default"]({
    'addClass': this.classes,
    title: this.title,
    content: form,
    buttons: buttons,
    resize: this.resize,
    titleBarButtons: this.titleBarButtons
  });
  this.onOpen();

  this.close = function () {
    dialog.close();
  };

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    _this.ok();
  });
};

Dialog.prototype.ok = function () {
  this.close();
};

Dialog.prototype.error = function (msg) {
  if (msg !== undefined) {
    this.element.querySelector('.error').innerHTML = msg;
  }
};

Dialog.prototype.cancel = function () {};

Dialog.prototype.onOpen = function () {};

Dialog.prototype.enable = function (cls, enable) {
  if (enable) {
    this.element.parentNode.querySelector('.' + cls).removeAttribute('disabled');
  } else {
    this.element.parentNode.querySelector('.' + cls).setAttribute('disabled', 'disabled');
  }
};
/**
 * Sanitize text from user input to prevent XSS attacks.
 * @param text Text to sanitize
 * @returns Sanitized version
 */


Dialog.prototype.sanitize = function (text) {
  return dompurify__WEBPACK_IMPORTED_MODULE_1___default.a.sanitize(text);
};
/**
 * Get a unique ID to use in dialog boxes
 */


Dialog.prototype.uniqueId = function () {
  return _Utility_Unique__WEBPACK_IMPORTED_MODULE_0__["Unique"].uniqueName();
};

/* harmony default export */ __webpack_exports__["default"] = (Dialog);

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Dlg/MessageDialog.js":
/*!*****************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Dlg/MessageDialog.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog.js */ "./vendor/cl/playground/js/Playground/Dlg/Dialog.js");
/**
 * @file
 * The standard Message dialog box.
 */


var MessageDialog = function MessageDialog(title, body, height) {
  _Dialog_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  /**
   * Open the dialog box.
   * @param ok Optional closure that will be called on OK
   * @param cancel Optional boolean - true indicates we include a cancel button
   */

  this.open = function (ok, cancel) {
    this.contents(body, title);

    if (cancel !== true) {
      this.buttonCancel = null;
    }

    this.ok = function () {
      if (ok !== undefined) {
        ok();
      }

      this.close();
    };

    _Dialog_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.open.call(this);
  };
};

MessageDialog.prototype = Object.create(_Dialog_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
MessageDialog.prototype.constructor = MessageDialog;
/* harmony default export */ __webpack_exports__["default"] = (MessageDialog);

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Dlg/TabAddDlg.js":
/*!*************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Dlg/TabAddDlg.js ***!
  \*************************************************************/
/*! exports provided: TabAddDlg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabAddDlg", function() { return TabAddDlg; });
/* harmony import */ var _Dialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog.js */ "./vendor/cl/playground/js/Playground/Dlg/Dialog.js");

/**
 * Dialog box for adding a named tab.
 * @property tabs Tabs object
 * @constructor
 */

var TabAddDlg = function TabAddDlg(tabs) {
  _Dialog_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  var MaxName = 8;
  var id;

  this.open = function () {
    // Dialog box contents
    id = this.uniqueId();
    var dlg = "<div class=\"control1 center\"><label for=\"".concat(id, "\">New tab name: </label>\n<input class=\"tabname\" type=\"text\" id=\"").concat(id, "\" spellcheck=\"false\"></div>\n<p>Enter the name for the new tab.</p>");
    this.contents(dlg, "New Tab");
    _Dialog_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.open.call(this);
    document.getElementById(id).select();
  };

  this.ok = function () {
    var name = document.getElementById(id).value;
    name = name.replace(/^\s+|\s+$/gm, '');
    name = this.sanitize(name);

    if (name.length < 1) {
      this.error('Must provide a tab name');
      document.getElementById(id).select();
      return;
    }

    if (name.length > MaxName) {
      this.error('Name must be no longer than ' + MaxName + ' characters');
      document.getElementById(id).select();
      return;
    } //
    // Ensure name does not already exist
    //


    var val = tabs.validateName(name);

    if (val !== null) {
      this.error(val);
      document.getElementById(id).select();
      return;
    }

    tabs.add(name);
    this.close();
  };
};
TabAddDlg.prototype = Object.create(_Dialog_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
TabAddDlg.prototype.constructor = TabAddDlg;

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Dlg/TabPropertiesDlg.js":
/*!********************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Dlg/TabPropertiesDlg.js ***!
  \********************************************************************/
/*! exports provided: TabPropertiesDlg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPropertiesDlg", function() { return TabPropertiesDlg; });
/* harmony import */ var _Dialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog.js */ "./vendor/cl/playground/js/Playground/Dlg/Dialog.js");

/**
 * Dialog box for adding a named tab.
 * @param tabs Tabs object
 * @constructor
 */

var TabPropertiesDlg = function TabPropertiesDlg(tabs) {
  _Dialog_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  var MaxName = 8;
  var id;

  this.open = function () {
    var circuit = tabs.currentCircuit();
    var name = circuit.getName();
    var stats = circuit.stats(); // Dialog box contents

    id = this.uniqueId();
    var dlg = "\n<div class=\"control1 center\"><label for=\"".concat(id, "\">Tab name: </label>\n<input class=\"tabname\" type=\"text\" id=\"").concat(id, "\" value=\"").concat(name, "\" spellcheck=\"false\" ").concat(name === 'main' ? "disabled" : "", "></div>");

    if (name === 'main') {
      dlg += '<p class="center"><em>The main tab cannot be renamed.</em></p>';
    } else {
      dlg += '<p>This page presents information for the ' + 'currently selected tab. Enter a new name to rename the tab.</p>';
    }

    dlg += "<table>\n<tr><th>Property</th><th>Value</th></tr>\n<tr><td>Components</td><td>".concat(stats.numComponents, "</td></tr>\n<tr><td>Connections</td><td>").concat(stats.numConnections, "</td></tr>\n<tr><td>Width</td><td>").concat(stats.width, " pixels</td></tr>\n<tr><td>Height</td><td>").concat(stats.height, " pixels</td></tr>\n</table>");
    this.contents(dlg, "New Tab");
    _Dialog_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.open.call(this);
    document.getElementById(id).select();
  };

  this.ok = function () {
    // What is the current name?
    var circuit = tabs.currentCircuit();

    if (circuit.getName() === 'main') {
      this.close();
      return;
    }

    var name = document.getElementById(id).value;
    name = name.replace(/^\s+|\s+$/gm, '');
    name = this.sanitize(name);

    if (name.length < 1) {
      this.error('Must provide a tab name');
      document.getElementById(id).select();
      return;
    }

    if (name.length > MaxName) {
      this.error('Name must be no longer than ' + MaxName + ' characters');
      document.getElementById(id).select();
      return;
    } //
    // Ensure name does not already exist
    //


    var val = tabs.validateName(name, circuit);

    if (val !== null) {
      this.error(val);
      document.getElementById(id).select();
      return;
    }

    if (name !== circuit.getName()) {
      tabs.rename(name);
    }

    this.close();
  };
};
TabPropertiesDlg.prototype = Object.create(_Dialog_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
TabPropertiesDlg.prototype.constructor = TabPropertiesDlg;

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
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tabs */ "./vendor/cl/playground/js/Playground/Tabs.js");
/* harmony import */ var _Graphics_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Graphics/Toast */ "./vendor/cl/playground/js/Playground/Graphics/Toast.js");
/* harmony import */ var _UI_DragAndDrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI/DragAndDrop */ "./vendor/cl/playground/js/Playground/UI/DragAndDrop.js");
/* harmony import */ var _DOM_Tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOM/Tools */ "./vendor/cl/playground/js/Playground/DOM/Tools.js");
/* harmony import */ var _Pane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pane */ "./vendor/cl/playground/js/Playground/Pane.js");







/**
 * Actual instance of the Playground for a single element.
 * @param playground The main Playground object
 * @param element Element we are loading into
 * @constructor
 */

var Main = function Main(playground, element) {
  this.cirsim = playground;
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

    switch (options.display) {
      case 'full':
        _DOM_Tools__WEBPACK_IMPORTED_MODULE_5__["Tools"].addClass(element, 'cl-playground-full');
        break;

      default:
        _DOM_Tools__WEBPACK_IMPORTED_MODULE_5__["Tools"].addClass(element, 'cl-playground-window');
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

    this.dragAndDrop = new _UI_DragAndDrop__WEBPACK_IMPORTED_MODULE_4__["DragAndDrop"](this); //
    // Create and add the window components
    //

    if (options.display !== 'inline' && options.display !== 'none') {
      //
      // All window-based versions other than inline get the
      // full user interface
      //
      // <div class="main"></div>
      this.div = _DOM_Tools__WEBPACK_IMPORTED_MODULE_5__["Tools"].createClassedDiv('main');
      this.element.appendChild(this.div); //    tabs = new Tabs(this);
      //    this.tabs = tabs;
      //
      // Add the menu
      //

      menu = new _Menu__WEBPACK_IMPORTED_MODULE_1__["Menu"](this);
      this.menu = menu; //
      // Working area
      // <div class="work"></div>
      //

      divWork = _DOM_Tools__WEBPACK_IMPORTED_MODULE_5__["Tools"].createClassedDiv('work');
      this.div.appendChild(divWork); //
      // And the root pane
      //

      this.rootPane = new _Pane__WEBPACK_IMPORTED_MODULE_6__["Pane"](this, divWork, null, null);
      this.rootPane.split(true); // this.rootPane.child1.div.addEventListener('click', (event) => {
      // 	this.rootPane.percentage(20);
      // })
      //
      // this.rootPane.child2.div.addEventListener('click', (event) => {
      //     this.rootPane.percentage(90);
      // })
      //
      // And add the tabs
      //
      //     tabs.create(divWork);
      //
      // And the overlay
      // <div class="cirsim-overlay"></div>
      //

      divOverlay = _DOM_Tools__WEBPACK_IMPORTED_MODULE_5__["Tools"].createClassedDiv('playground-overlay');
      this.div.appendChild(divOverlay);
      this.toast = new _Graphics_Toast__WEBPACK_IMPORTED_MODULE_3__["Toast"](this);
      this.toast.create(this.div);
    }
  };

  this.currentView = function () {
    return tabs.currentView();
  };
  /**
   * Called whenever a new tab is selected
   */


  this.newTab = function () {};
  /**
   * Backup the current circuits object in support of an Undo operation
   */


  this.backup = function () {};
  /**
   * Undo operation
   */


  this.undo = function () {
    tabs.undo();
  };
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
  /**
   * Complete reload after a new model is loaded
   */


  this.reload = function () {
    tabs.destroy();
    tabs.create(divWork, model);
  };

  var dockedHelp = false;

  this.isHelpDocked = function () {
    return dockedHelp;
  };

  this.dockedHelp = function (dock) {
    dockedHelp = dock;

    if (dockedHelp) {
      _DOM_Tools__WEBPACK_IMPORTED_MODULE_5__["Tools"].addClass(this.element, 'docked-help');
    } else {
      _DOM_Tools__WEBPACK_IMPORTED_MODULE_5__["Tools"].removeClass(this.element, 'docked-help');
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
/* harmony import */ var _Menus_FileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menus/FileMenu */ "./vendor/cl/playground/js/Playground/Menus/FileMenu.js");
/* harmony import */ var _Menus_EditMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menus/EditMenu */ "./vendor/cl/playground/js/Playground/Menus/EditMenu.js");
/* harmony import */ var _Menus_TabsMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menus/TabsMenu */ "./vendor/cl/playground/js/Playground/Menus/TabsMenu.js");
/* harmony import */ var _Menus_HelpMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menus/HelpMenu */ "./vendor/cl/playground/js/Playground/Menus/HelpMenu.js");





/**
 * The program menu bar
 * @param main Main object
 * @constructor
 */

var Menu = function Menu(main) {
  var _this = this;

  //
  // Create the menu components
  //
  var fileMenu = new _Menus_FileMenu__WEBPACK_IMPORTED_MODULE_1__["FileMenu"](this, main);
  var editMenu = new _Menus_EditMenu__WEBPACK_IMPORTED_MODULE_2__["EditMenu"](this, main);
  var tabsMenu = new _Menus_TabsMenu__WEBPACK_IMPORTED_MODULE_3__["TabsMenu"](this, main);
  var helpMenu = new _Menus_HelpMenu__WEBPACK_IMPORTED_MODULE_4__["HelpMenu"](this, main);
  this.helpMenu = helpMenu; /// The nav element

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

    _this.ul = ul; //
    // Add the menu component's HTML
    //

    var html = '';
    html += fileMenu.html();
    html += editMenu.html();
    html += tabsMenu.html();
    html += helpMenu.html();
    ul.innerHTML = html; //
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

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var node = _step.value;

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

      for (var _iterator = ul.childNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      } // Activate all of the menus

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

    fileMenu.activate();
    editMenu.activate();
    tabsMenu.activate();
    helpMenu.activate();
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
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _this.ul.childNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var node = _step2.value;

        if (node.tagName === 'LI') {
          var _ul = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].child(node, 'UL');

          if (_ul !== null) {
            _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].removeClass(_ul, 'menu-open');
          }
        }
      }
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

    tabsMenu.opening();
    helpMenu.opening(); // And open this menu

    var ul = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].child(li, 'UL');

    if (ul !== null) {
      _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].addClass(ul, 'menu-open');
    }

    document.addEventListener('click', closeListener);
    document.addEventListener('mousedown', closeListener);
  };
  /** Close all menus */


  this.closeAll = function () {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = _this.ul.childNodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var node = _step3.value;

        if (node.tagName === 'LI') {
          var ul = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].child(node, 'UL');

          if (ul !== null) {
            _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].removeClass(ul, 'menu-open');
          }
        }
      }
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

/***/ "./vendor/cl/playground/js/Playground/Menus/EditMenu.js":
/*!**************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Menus/EditMenu.js ***!
  \**************************************************************/
/*! exports provided: EditMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMenu", function() { return EditMenu; });
/**
 * The Edit menu
 * @param menu Menu object
 * @param main Main object
 * @constructor
 */
var EditMenu = function EditMenu(menu, main) {
  this.html = function () {
    return '<li><a>Edit</a>' + '<ul class="edit-menu">' + '<li><a class="edit-undo"><span class="icons-cl icons-cl-arrowreturnthick-1-w"></span>Undo</a></li>' + '<li><a class="edit-delete"><span class="icons-cl icons-cl-trash"></span>Delete</a></li>' + '<li class="menu-divider">&nbsp;</li>' + '<li><a class="edit-properties">Properties</a></li>' + '</ul>' + '</li>';
  };

  this.activate = function () {
    menu.click('.edit-delete', function (event) {
      main.backup();
      main.currentView().delete();
    });
    menu.click('.edit-undo', function (event) {
      main.undo();
    });
    menu.click('.edit-properties', function (event) {
      if (main.currentView().selection.selection.length === 1 && main.currentView().selection.selection[0] instanceof Component) {
        var component = main.currentView().selection.selection[0];
        component.properties(main);
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Delete') {
        menu.closeAll();
        main.backup();
        main.currentView().delete();
      } else if (event.key === 'z' && event.ctrlKey && !event.altKey && !event.shiftKey) {
        menu.closeAll();
        main.undo();
      }
    });
  };
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Menus/FileMenu.js":
/*!**************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Menus/FileMenu.js ***!
  \**************************************************************/
/*! exports provided: FileMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileMenu", function() { return FileMenu; });
/**
 * The File menu
 * @constructor
 */
var FileMenu = function FileMenu(menu, main) {
  this.html = function () {
    var options = main.options;
    var fileHtml = '';
    var saveAPI = options.getAPI('save');
    var openAPI = options.getAPI('open'); // We only allow the Open menu option if there is no supplied filename

    if (openAPI !== null && openAPI.name === undefined) {
      fileHtml += '<li><a class="file-open"><span class="icons-cl icons-cl-folder-open"></span>Open...</a></li>';
    } // Include the Save menu option if we are supporting save


    if (saveAPI !== null) {
      fileHtml += '<li><a class="file-save"><span class="icons-cl icons-cl-disk"></span>Save</a></li>';
    } // Save-as only if there is no specific filename to use


    if (saveAPI !== null && saveAPI.name === undefined) {
      fileHtml += '<li><a class="file-saveas"><span class="icons-cl icons-cl-disk"></span>Save As...</a></li>';
    } // Import/Export options


    if (options.export !== 'none') {
      if (fileHtml.length > 0) {
        fileHtml += '<li class="menu-divider">&nbsp;</li>'; // Separator
      }

      if (options.export === 'both' || options.export === 'import') {
        fileHtml += '<li><a class="file-import"><span class="icons-cl icons-cl-arrowthickstop-1-n"></span>Import</a></li>';
      }

      if (options.export === 'both' || options.export === 'export') {
        fileHtml += '<li><a class="file-export"><span class="icons-cl icons-cl-arrowthickstop-1-s"></span>Export</a></li>';
      }
    } // if(options.imports.length > 0) {
    //     fileHtml += '<li class="menu-divider">&nbsp;</li>' +
    //         '<li><a class="file-import-tab"><span class="icons-cl icons-cl-arrowthickstop-1-n"></span>Import Tab</a></li>';
    // }


    if (options.exit !== null) {
      if (fileHtml.length > 0) {
        fileHtml += '<li class="menu-divider">&nbsp;</li>'; // Separator
      }

      fileHtml += '<li><a href="' + options.exit + '">Exit</a></li>';
    }

    if (fileHtml !== '') {
      return '<li><a href="javascript:;">File</a><ul class="file-menu">' + fileHtml + '</ul></li>';
    } else {
      return '';
    }
  };

  this.activate = function () {
    menu.click('.file-import', function (event) {
      main.import();
    });
    menu.click('.file-export', function (event) {
      main.export();
    });
    menu.click('.file-saveas', function (event) {
      main.saveAs();
    });
    menu.click('.file-save', function (event) {
      main.save();
    });
    menu.click('.file-open', function (event) {
      main.open();
    });
    menu.click('.file-import-tab', function (event) {
      main.import_tab();
    });
  };
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Menus/HelpMenu.js":
/*!**************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Menus/HelpMenu.js ***!
  \**************************************************************/
/*! exports provided: HelpMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpMenu", function() { return HelpMenu; });
/* harmony import */ var _Dlg_AboutDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Dlg/AboutDialog */ "./vendor/cl/playground/js/Playground/Dlg/AboutDialog.js");

/**
 * The help menu
 * @param menu
 * @param main
 * @constructor
 */

var HelpMenu = function HelpMenu(menu, main) {
  this.html = function () {
    return '<li><a>Help</a>' + '<ul class="help-menu">' + '<li><a class="help-about">About...</a></li>' + '</ul>' + '</li>';
  };

  this.activate = function () {
    menu.click('.help-about', function (event) {
      var dlg = new _Dlg_AboutDialog__WEBPACK_IMPORTED_MODULE_0__["AboutDialog"](main);
      dlg.open();
    });
  };

  this.opening = function () {};
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Menus/TabsMenu.js":
/*!**************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Menus/TabsMenu.js ***!
  \**************************************************************/
/*! exports provided: TabsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsMenu", function() { return TabsMenu; });
/* harmony import */ var _Dlg_TabAddDlg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Dlg/TabAddDlg.js */ "./vendor/cl/playground/js/Playground/Dlg/TabAddDlg.js");
/* harmony import */ var _Dlg_MessageDialog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dlg/MessageDialog.js */ "./vendor/cl/playground/js/Playground/Dlg/MessageDialog.js");
/* harmony import */ var _Dlg_TabPropertiesDlg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Dlg/TabPropertiesDlg.js */ "./vendor/cl/playground/js/Playground/Dlg/TabPropertiesDlg.js");



/**
 * The Tabs menu
 * @param menu
 * @param main
 * @constructor
 */

var TabsMenu = function TabsMenu(menu, main) {
  this.html = function () {
    return "<li><a>Tabs</a>\n<ul class=\"tabs-menu\">\n<li><a class=\"tabs-properties\"><span class=\"icons-cl icons-cl-wrench\"></span>Properties...</a></li>\n<li><a class=\"tabs-add\"><span class=\"icons-cl icons-cl-play\"></span>Add...</a></li>\n<li><a class=\"tabs-delete\"><span class=\"icons-cl icons-cl-close\"></span>Delete...</a></li>\n</ul>\n</li>";
  };

  var del = function del() {
    var current = main.tabs.currentCircuit();

    if (current === null) {
      return;
    }

    var dlg = new _Dlg_MessageDialog_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Are you sure?", '<p class="large">Are you sure you want to ' + 'delete the tab <em>' + current.getName() + '</em>?</p>', 200);
    dlg.open(function () {
      main.tabs.delActive();
    }, true);
  };

  this.activate = function () {
    menu.click('.tabs-add', function (event) {
      var dlg = new _Dlg_TabAddDlg_js__WEBPACK_IMPORTED_MODULE_0__["TabAddDlg"](main.tabs);
      dlg.open();
    });
    menu.click('.tabs-delete', function (event) {
      del();
    });
    menu.click('.tabs-properties', function (event) {
      var dlg = new _Dlg_TabPropertiesDlg_js__WEBPACK_IMPORTED_MODULE_2__["TabPropertiesDlg"](main.tabs);
      dlg.open();
    });
  };
  /**
   * Called when menus are opening.
   * Set the state of the menu so it will be valid when shown.
   */


  this.opening = function () {//  menu.enable('.tabs-delete', main.tabs.active > 0);
  };
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
 * User interface options.
 * @param options User provided options that override the default values.
 * @constructor
 */
var Options = function Options(options) {
  options = options ? options : {}; /// Display options
  /// window - Displays as a standard div (default)
  /// full - Full screen

  this.display = 'window'; /// Any content (JSON) to preload

  this.load = null; /// Any additional tabs to add
  /// Do not include "main", it is always included

  this.tabs = []; /// Do we include the input/export menu options?
  /// Options are: 'none', 'import', 'export', 'both'

  this.export = 'both'; /// Number of milliseconds between tests
  /// Set larger to slow the tests down

  this.testTime = 17; /// A user ID associated with some remote system
  /// Primary used for AJAX file/save functionality

  this.userid = null;
  /**
   * All installed tests as an array of tests, each of
      * which represents a single test. Each test can be
      * a Javascript object, JSON of an object, or base64 of
      * a JSON object. The use of base64 helps to obfuscate tests.
      *
   * The underlying test is a JavaScript object with these tags:
   *
   * tag: A tag to identify the test
   * name: Name of the test, what will appear in menus
   * input: Array of input labels
   * output: Array of output labels
   * test: Array of tests, each an array of input/expected
   * staff: true if this is staff testing (no saving)
      * result: A results selector
      * circuit: A circuit selector
      * success: A value to set the results selector to on a success
      *
      * If result is set, any element that matches that selector will
      * be set to 0 or the value of 'success' depending on the test failure/success
      *
      * If circuit is set, any element that matches that selector will
      * have its value set to the current circuit when the test is selected.
   */

  this.tests = []; /// Any import options, importing from
  /// files from other assignments
  // this.imports = [];
  /// Optional specification of server-side API for save/load capabilities
  /// Most simple version is a URL for the server.
  /// More advanced version is an object with these optional properties:
  ///
  /// url - Server URL
  /// extra - Object with extra data to be send with API operations
  /// save - Object with save-specific resources (url, name, mode, extra)
  /// open - Object with open-specific resources (url, extra)
  /// files - Object with directory query-specific resources
  ///

  this.api = null; /// Optional exit link. If provided, the menu will have an "Exit" option
  /// with this link in it.

  this.exit = null; /// Indication of what components are included in the palette.
  /// This can be:
  /// A string with a palette name
  /// [or] An array containing strings that name components
  /// or palette names.
  ///
  /// Examples:
  /// components: 'combinatorial'
  /// components: ['combinatorial', 'Or3', 'Or4']
  /// components: ['sequential']
  ///

  this.components = ['combinatorial', 'sequential']; /// List of components that are always included even if specific components are
  /// specified in this.components.

  this.always = ['Zero', 'One', 'InPin', 'OutPin', 'Clock', 'Button', 'LED'];

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

var Pane = function Pane(main, element, parent, donorTabs) {
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

    element.appendChild(div);

    if (donorTabs !== null) {
      console.log(donorTabs);
      tabs = donorTabs;
      tabs.newParent(_this);
    } else {
      tabs = new _Tabs__WEBPACK_IMPORTED_MODULE_0__["Tabs"](main, div);
    }
  };

  this.split = function (horizontal) {
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
/* harmony import */ var _img_menubars_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/menubars.png */ "./vendor/cl/playground/img/menubars.png");
/* harmony import */ var _img_menubars_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_menubars_png__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Manages the tabs in the model
 * @param main Main object
 * @param element Parent element
 * @constructor
 */

var Tabs = function Tabs(main, element) {
  var _this = this;

  /// The currently active view/tab
  this.active = -1; // The collection of tabs

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
    tabsDiv = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].createClassedDiv('cl-tabs');
    ul = document.createElement('ul');
    tabsDiv.appendChild(ul);
    viewsDiv = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].createClassedDiv('cl-views');
    tabsDiv.appendChild(viewsDiv);
    div.appendChild(tabsDiv); // Clear the tabs collection

    tabs = [];

    _this.add('program');

    _this.add('output');
  };

  this.newParent = function (pane) {
    pane.div.appendChild(tabsDiv);
  };

  this.add = function (title) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    li.appendChild(a);
    a.innerText = title;
    var menu = document.createElement('a');
    li.appendChild(menu); // let img = document.createElement('img');
    // menu.appendChild(img);
    // img.src = menubars;

    li.addEventListener('click', function (event) {
      event.preventDefault();
      selectLi(li);
    });
    a.addEventListener('click', function (event) {
      event.preventDefault();
      selectLi(li);
    });
    ul.appendChild(li); //
    // The menu
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
    //
    // The view
    //

    var view = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].createClassedDiv('cl-view');
    viewsDiv.appendChild(view);
    tabs.push({
      li: li,
      view: view
    });
    this.selectTab(tabs.length - 1, true);
  };

  var selectLi = function selectLi(li) {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].li === li) {
        _this.selectTab(i);
      }
    }
  };

  this.selectTab = function (num, force) {
    if (force !== true && num === _this.active) {
      return;
    } //
    // Clear all selections
    //


    tabs.forEach(function (tab) {
      _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].removeClass(tab.li, 'selected');
      _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].removeClass(tab.view, 'selected');
    });
    _this.active = num;
    var tab = tabs[_this.active];
    _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].addClass(tab.li, 'selected');
    _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].addClass(tab.view, 'selected');
  }; // Return the current View object


  this.currentView = function () {
    if (_this.active < 0) {
      return null;
    }

    return tabs[_this.active].view;
  }; // Return the current Circuit object


  this.currentCircuit = function () {
    if (_this.active < 0) {
      return null;
    }

    return tabs[_this.active].circuit;
  }; // Implement undo for the tabs


  this.undo = function () {
    tabs.forEach(function (tab) {
      tab.view.undo();
    });
  };

  this.destroy = function () {
    this.active = -1;
    tabsDiv.parentNode.removeChild(tabsDiv);
    tabsDiv = null;
    tabs = [];
  };

  this.validateName = function (name, skip) {
    var circuits = main.model.circuits;
    var collection = circuits.getCircuits();

    for (var i = 0; i < collection.length; i++) {
      var circuit = collection[i];

      if (circuit === skip) {
        continue;
      }

      if (name.toLowerCase() === circuit.getName().toLowerCase()) {
        return 'Name ' + name + ' already in use by another tab';
      }
    }

    return null;
  };
  /**
   * Delete the active tab
   * @param index
   */


  this.delActive = function (index) {
    if (_this.active < 0) {
      return;
    }

    main.model.deleteCircuitByIndex(_this.active);

    _this.sync();
  };

  this.rename = function (name) {
    var circuit = this.currentCircuit();
    circuit.setName(name);
    this.sync();
  };

  this.create(element);
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

/***/ "./vendor/cl/playground/js/Playground/Utility/Unique.js":
/*!**************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Utility/Unique.js ***!
  \**************************************************************/
/*! exports provided: Unique, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unique", function() { return Unique; });
/**
 * Convenience class for generating unique Cirsim-specific ID's
 * @constructor
 */
var Unique = function Unique() {};
Unique.unique = 1;

Unique.uniqueId = function () {
  return Unique.unique++;
};

Unique.uniqueName = function () {
  return "cirsim-id-" + Unique.unique++;
};

/* harmony default export */ __webpack_exports__["default"] = (Unique);

/***/ }),

/***/ "./vendor/cl/playground/package.json":
/*!*******************************************!*\
  !*** ./vendor/cl/playground/package.json ***!
  \*******************************************/
/*! exports provided: name, version, description, main, keywords, author, license, devDependencies, dependencies, default */
/***/ (function(module) {

module.exports = {"name":"playground-cl","version":"2.0.0","description":"CourseLib Playground IDE","main":"index.js","keywords":["Education","Course Web Sites","Karnaugh Maps"],"author":"Charles B. Owen","license":"MIT","devDependencies":{},"dependencies":{"course-cl":">=0.0.1"}};

/***/ })

},[["./vendor/cl/playground/index.js","runtime","vendor"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL19wbGF5Z3JvdW5kLnNjc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvX3BsYXlncm91bmQuc2Nzcz80NmUxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2ltZy9tZW51LWNoZWNrLnBuZyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbWcvbWVudWJhcnMucG5nIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvRE9NL1Rvb2xzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvRGxnL0Fib3V0RGlhbG9nLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvRGxnL0RpYWxvZy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0RsZy9NZXNzYWdlRGlhbG9nLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvRGxnL1RhYkFkZERsZy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0RsZy9UYWJQcm9wZXJ0aWVzRGxnLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvR3JhcGhpY3MvVG9hc3QuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9NYWluLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvTWVudS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL01lbnVzL0VkaXRNZW51LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvTWVudXMvRmlsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9NZW51cy9IZWxwTWVudS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL01lbnVzL1RhYnNNZW51LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1BhbmUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9QbGF5Z3JvdW5kLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVGFicy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1VJL0RyYWdBbmREcm9wLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVXRpbGl0eS9SZWFkeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1V0aWxpdHkvVW5pcXVlLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJUb29scyIsImlzVmlzaWJsZSIsImVsZW0iLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImdldENsaWVudFJlY3RzIiwibGVuZ3RoIiwiYWRkQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkQ2xhc3NlcyIsImNsYXNzZXMiLCJ1bmRlZmluZWQiLCJzcGxpdCIsImZvckVhY2giLCJjbHMiLCJyZW1vdmVDbGFzcyIsInJlZ0V4IiwiUmVnRXhwIiwicmVwbGFjZSIsImNyZWF0ZUNsYXNzZWREaXYiLCJjb250ZW50IiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYWRkQ29udGVudCIsImlzU3RyaW5nIiwiaW5uZXJIVE1MIiwiaXNFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ2YWwiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJub2RlVmFsdWUiLCJvZmZzZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsInNjcm9sbExlZnQiLCJ3aW5kb3ciLCJwYWdlWE9mZnNldCIsInRvcCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiY2hpbGQiLCJ0YWdOYW1lIiwiY2hpbGROb2RlcyIsIm5vZGUiLCJBYm91dERpYWxvZyIsIm1haW4iLCJEaWFsb2ciLCJvcGVuIiwiYnV0dG9uQ2FuY2VsIiwiY2lyc2ltIiwidmVyc2lvbiIsInJvb3QiLCJpbmRleE9mIiwiY29udGVudHMiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsImJ1dHRvbk9rIiwicmVzaXplIiwidGl0bGVCYXJCdXR0b25zIiwiaHRtbCIsInRpdGxlIiwiZm9ybSIsImRsZyIsImJ1dHRvbnMiLCJwdXNoIiwiY2xpY2siLCJkaWFsb2ciLCJvayIsImZvY3VzIiwiY2xvc2UiLCJEaWFsb2dDTCIsIm9uT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXJyb3IiLCJtc2ciLCJxdWVyeVNlbGVjdG9yIiwiY2FuY2VsIiwiZW5hYmxlIiwicGFyZW50Tm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInNhbml0aXplIiwidGV4dCIsIkRPTVB1cmlmeSIsInVuaXF1ZUlkIiwiVW5pcXVlIiwidW5pcXVlTmFtZSIsIk1lc3NhZ2VEaWFsb2ciLCJib2R5IiwiaGVpZ2h0IiwiVGFiQWRkRGxnIiwidGFicyIsIk1heE5hbWUiLCJpZCIsImdldEVsZW1lbnRCeUlkIiwic2VsZWN0IiwibmFtZSIsInZhbHVlIiwidmFsaWRhdGVOYW1lIiwiVGFiUHJvcGVydGllc0RsZyIsImNpcmN1aXQiLCJjdXJyZW50Q2lyY3VpdCIsImdldE5hbWUiLCJzdGF0cyIsIm51bUNvbXBvbmVudHMiLCJudW1Db25uZWN0aW9ucyIsIndpZHRoIiwicmVuYW1lIiwiVG9hc3QiLCJkZWZhdWx0RHVyYXRpb24iLCJpbnRlclRvYXN0RGVsYXkiLCJtZXNzYWdlcyIsImFjdGl2ZSIsInNob3ciLCJtZXNzYWdlIiwic3BsaWNlIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRpbWUiLCJqc29uRXJyb3JzIiwianNvbkFwaSIsImVycm9ycyIsIk1haW4iLCJwbGF5Z3JvdW5kIiwic2l0ZSIsIm9wdGlvbnMiLCJtZW51IiwiZGl2T3ZlcmxheSIsImRpdldvcmsiLCJpbml0aWFsaXplIiwic3R5bGUiLCJkaXNwbGF5IiwiY29udGFpbnMiLCJSZXNpemVyIiwiaGFuZGxlIiwiZHJhZ0FuZERyb3AiLCJEcmFnQW5kRHJvcCIsIk1lbnUiLCJyb290UGFuZSIsIlBhbmUiLCJ0b2FzdCIsImN1cnJlbnRWaWV3IiwibmV3VGFiIiwiYmFja3VwIiwidW5kbyIsIm1vZGFsIiwicmVsb2FkIiwiZGVzdHJveSIsIm1vZGVsIiwiZG9ja2VkSGVscCIsImlzSGVscERvY2tlZCIsImRvY2siLCJmaWxlTWVudSIsIkZpbGVNZW51IiwiZWRpdE1lbnUiLCJFZGl0TWVudSIsInRhYnNNZW51IiwiVGFic01lbnUiLCJoZWxwTWVudSIsIkhlbHBNZW51IiwibmF2IiwidWwiLCJ1bFN1YiIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiY2xvc2VBbGwiLCJhY3RpdmF0ZSIsImNsb3NlTGlzdGVuZXIiLCJ0YXJnZXQiLCJsaSIsIm9wZW5pbmciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VsIiwiZmluZCIsImNsb3N1cmUiLCJkZWxldGUiLCJzZWxlY3Rpb24iLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwia2V5IiwiY3RybEtleSIsImFsdEtleSIsInNoaWZ0S2V5IiwiZmlsZUh0bWwiLCJzYXZlQVBJIiwiZ2V0QVBJIiwib3BlbkFQSSIsImV4cG9ydCIsImV4aXQiLCJpbXBvcnQiLCJzYXZlQXMiLCJzYXZlIiwiaW1wb3J0X3RhYiIsImRlbCIsImN1cnJlbnQiLCJkZWxBY3RpdmUiLCJPcHRpb25zIiwibG9hZCIsInRlc3RUaW1lIiwidXNlcmlkIiwidGVzdHMiLCJhcGkiLCJjb21wb25lbnRzIiwiYWx3YXlzIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwibW9kZSIsIm9iaiIsIm1vZGVPYmoiLCJ1cmwiLCJjb250ZW50VHlwZSIsImV4dHJhIiwicGFyZW50IiwiZG9ub3JUYWJzIiwibWluU3BsaXQiLCJtYXhTcGxpdCIsImNoaWxkMSIsImNoaWxkMiIsImhvcml6b250YWxTcGxpdCIsIm5ld1BhcmVudCIsIlRhYnMiLCJob3Jpem9udGFsIiwiZmxleERpcmVjdGlvbiIsImJhciIsInN0YXJ0RHJhZ2dpbmciLCJwYWdlWCIsInBhZ2VZIiwibW91c2VNb3ZlIiwibW91c2VVcCIsInRvdWNoIiwiY2hhbmdlZFRvdWNoZXMiLCJ0b3VjaE1vdmUiLCJ0b3VjaEVuZCIsInRvdWNoQ2FuY2VsIiwicGVyY2VudGFnZSIsInN0YXJ0WCIsInN0YXJ0WSIsIngiLCJ5IiwiZW5kRHJhZ2dpbmciLCJkcmFnZ2luZyIsIm1haW5YIiwid2lkIiwicmlnaHQiLCJwZXIiLCJtYWluWSIsImhpdCIsImJvdHRvbSIsIndoaWNoIiwiUGxheWdyb3VuZCIsIlBBQ0tBR0UiLCJyZXF1aXJlIiwibWFpbnMiLCJzdGFydCIsInN0YXJ0Tm93IiwiUmVhZHkiLCJnbyIsIkVsZW1lbnQiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwidGFic0RpdiIsInZpZXdzRGl2IiwicGFuZSIsImEiLCJpbm5lclRleHQiLCJzZWxlY3RMaSIsInZpZXciLCJzZWxlY3RUYWIiLCJudW0iLCJmb3JjZSIsInRhYiIsInJlbW92ZUNoaWxkIiwic2tpcCIsImNpcmN1aXRzIiwiY29sbGVjdGlvbiIsImdldENpcmN1aXRzIiwidG9Mb3dlckNhc2UiLCJpbmRleCIsImRlbGV0ZUNpcmN1aXRCeUluZGV4Iiwic3luYyIsInNldE5hbWUiLCJkcmFnRWxlbWVudCIsImRyYWdJdGVtIiwiZHJvcFZpZXdzIiwiZHJhZ2dhYmxlIiwicGFsZXR0ZUl0ZW0iLCJkcm9wcGFibGUiLCJjYWxsYmFjayIsImNsb25lIiwicGFsZXR0ZUltYWdlIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjdXJzb3IiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInZpZXdFbGVtZW50Iiwidmlld1giLCJ2aWV3WSIsImZuIiwiYXR0YWNoRXZlbnQiLCJyZWFkeVN0YXRlIiwidW5pcXVlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7O0FDVkEsYUFBYSxtQkFBTyxDQUFDLHVHQUFvRDtBQUN6RSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBa0Q7QUFDckY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGdDQUFnQyx1QkFBdUIsY0FBYyx1QkFBdUIsaUNBQWlDLGlCQUFpQiw0RkFBNEYsa0VBQWtFLHFCQUFxQiw2QkFBNkIsZ0JBQWdCLDhCQUE4QixpQkFBaUIsdUJBQXVCLGlDQUFpQyxrQ0FBa0MsbUJBQW1CLEdB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LEVBQThDdU8sRUFBOUM7QUFDSDtBQUNKLENBTkQsQzs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBOzs7O0FBSU8sSUFBTXhOLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQVcsQ0FDaEMsQ0FETTtBQUdQQSxNQUFNLENBQUMyTixNQUFQLEdBQWdCLENBQWhCOztBQUVBM04sTUFBTSxDQUFDRCxRQUFQLEdBQWtCLFlBQVc7QUFDekIsU0FBT0MsTUFBTSxDQUFDMk4sTUFBUCxFQUFQO0FBQ0gsQ0FGRDs7QUFJQTNOLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixZQUFXO0FBQzNCLFNBQU8sZUFBZUQsTUFBTSxDQUFDMk4sTUFBUCxFQUF0QjtBQUNILENBRkQ7O0FBSWUzTixxRUFBZixFIiwiZmlsZSI6InBsYXlncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJQbGF5Z3JvdW5kXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlBsYXlncm91bmRcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5jbC1wbGF5Z3JvdW5kIGRpdi50b2FzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi4zZW0pO1xcbiAgei1pbmRleDogNDAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuNHMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAzMGVtLzIpO1xcbiAgd2lkdGg6IDMwZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC41ZW07XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi50b2FzdC50b2FzdC1hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuNHM7XFxuICB6LWluZGV4OiA0MDA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM4MDgwODA7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzAwNzk2QjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgbGkge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyIGxpIGEsXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgbGkgYTpsaW5rLFxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyIGxpIGE6dmlzaXRlZCB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciA+IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyID4gdWwgaW1nLmNoZWNrIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHdpZHRoOiAxOXB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgY29udGVudDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ltZy9tZW51LWNoZWNrLnBuZ1wiKSkgKyBcIik7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyID4gdWwgPiBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMmVtIDAuMjVlbSAwLjVlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgPiB1bCA+IGxpIGEsXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgPiB1bCA+IGxpIGE6bGluayxcXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciA+IHVsID4gbGkgYTp2aXNpdGVkIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyID4gdWwgdWwge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMnMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDEwMCU7XFxuICBtYXJnaW46IDFweCAwIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyID4gdWwgdWwgPiBsaSB7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyID4gdWwgdWwgPiBsaSBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4ZW07XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgPiB1bCB1bCA+IGxpLm1lbnUtZGlzYWJsZWQgYSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyID4gdWwgdWwubWVudS1vcGVuIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4ycztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgPiB1bCB1bC5lZGl0LW1lbnUgYSB7XFxuICB3aWR0aDogNmVtO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciA+IHVsIHVsLm9wdGlvbi1tZW51IGEge1xcbiAgd2lkdGg6IDExZW07XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyID4gdWwgdWwuZmlsZS1tZW51IGEge1xcbiAgd2lkdGg6IDZlbTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgPiB1bCB1bC5oZWxwLW1lbnUgYSB7XFxuICB3aWR0aDogNy41ZW07XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyID4gdWwgLnVsLXN0YXRlLWFjdGl2ZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciA+IHVsIGxpLm1lbnUtZGl2aWRlciB7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2Lndvcmsge1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYucGxheWdyb3VuZC1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6ICNhMDA7XFxuICBvcGFjaXR5OiAwLjA1O1xcbiAgei1pbmRleDogMjAwMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5tYWluIHtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWZ1bGwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLXdpbmRvdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXItbGVmdDogMDtcXG4gIGJvcmRlci1yaWdodDogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItdG9wOiB0aGluIHNvbGlkICNhYWFhYWE7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbWluLXdpZHRoOiA4MDBweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWJlZm9yZSxcXG5kaXYuY2wtcGxheWdyb3VuZC1nYXAtYWZ0ZXIge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcXG4gIGhlaWdodDogMWVtO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMC45NWVtO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBpbnB1dCB7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgaDIge1xcbiAgbWFyZ2luOiAwLjc1ZW0gMDtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IC5sYXJnZSB7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBmaWVsZHNldCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBwLmVycm9yIHtcXG4gIG1hcmdpbjogMWVtIDAgMCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMCAwIDFlbSAwO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbCBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIG1hcmdpbjogMC4yZW0gMCAwLjFlbSAwO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbCBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wgaW5wdXRbdHlwZT10ZXh0XSxcXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbCBpbnB1dFt0eXBlPWZpbGVdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbCBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sIGlucHV0W3R5cGU9cmFuZ2VdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbCBwLnNlbGVjdG9yIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wgc2VsZWN0IHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sIHNlbGVjdC5maWxlcyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wgZGl2Lm5vdGljZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDQ1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiBzYWRkbGVicm93bjtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wgdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sMSB7XFxuICBtYXJnaW46IDAgMCAxZW0gMDtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wxIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbDEgc2VsZWN0IHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sMSBpbnB1dC5udW1iZXIge1xcbiAgd2lkdGg6IDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wxIGlucHV0LmNvbXBuYW1lIHtcXG4gIHdpZHRoOiA0ZW07XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sMSBpbnB1dC50YWJuYW1lIHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuaW5kZW50IHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBoMSB7XFxuICBtYXJnaW46IDAgMCAwLjVlbSAwO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBwIHtcXG4gIGNvbG9yOiAjNjA2MDYwO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCAuZ2FwIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuXFxuZGl2LmNpcnNpbS5hYm91dCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi5jaXJzaW0uYWJvdXQgaW1nIHtcXG4gIHdpZHRoOiAxNzFweDtcXG4gIGhlaWdodDogNzVweDtcXG59XFxuXFxuZGl2LmNpcnNpbS5hYm91dCBkaXYuZGlhbG9nLWNvbnRlbnQge1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG5kaXYuY2lyc2ltLmhlbHAge1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgaGVpZ2h0OiA2MDBweDtcXG59XFxuXFxuZGl2LmNpcnNpbS5jb21wb25lbnQgYS5oZWxwZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMC41ZW07XFxuICB0b3A6IDAuNWVtO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgY29sb3I6ICM2MDYwNjA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZGl2LmNpcnNpbSAuY2lyc2ltLWVycm9yIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbmRpdi5jaXJzaW0tZGlhbG9nIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGZvbnQtc2l6ZTogMC45NWVtO1xcbn1cXG5cXG4udWktZGlhbG9nLWJ1dHRvbnNldCBidXR0b24ge1xcbiAgd2lkdGg6IDZlbTtcXG59XFxuXFxuLnVpLWRpYWxvZyAudWktZGlhbG9nLWJ1dHRvbnBhbmUge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUgdGgge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogIzE4NDUzQjtcXG4gIC8qICMzZTljNDU7ICovXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzE4NDUzQiwgIzczZDE4OSk7XFxuICB0ZXh0LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDAgMXB4IDA7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQzFEQUQ3O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDMURBRDc7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0MxREFENztcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMnB4IDZweDtcXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZSB0aCBhOmxpbmsge1xcbiAgY29sb3I6ICNGNUYzRUI7XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUgdGggYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiAjRTNEQ0M1O1xcbn1cXG5cXG5kaXYuY2lyc2ltIHRhYmxlIHRoIGE6aG92ZXIge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUgdGgud2lkdGg0MCB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG5cXG5kaXYuY2lyc2ltIHRhYmxlIHRoLndpZHRoNDBlbSB7XFxuICB3aWR0aDogNDBlbTtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZSB0aC53aWR0aDIwZW0ge1xcbiAgd2lkdGg6IDIwZW07XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUgdGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0MxREFENztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzFEQUQ3O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjc1ZW07XFxuICBjb2xvcjogIzRmNmI3MjtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZSB0ZCBhOmxpbmsge1xcbiAgY29sb3I6ICM4QThBOEE7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZSB0ZCBhOnZpc2l0ZWQge1xcbiAgY29sb3I6ICNCMDlENUI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZSB0ZCBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjMzM2NmNjO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUuY2VudGVyIHRkLFxcbmRpdi5jaXJzaW0gdGFibGUuY2VudGVyIHRoIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZS50cnV0aC10YWJsZSB0aCB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5kaXYuY2lyc2ltIHRhYmxlLnRydXRoLXRhYmxlIHRkIHtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZS50cnV0aC10YWJsZSB0aDpsYXN0LWNoaWxkLFxcbmRpdi5jaXJzaW0gdGFibGUudHJ1dGgtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItbGVmdDogdGhpbiBzb2xpZCBibGFjaztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYnMgPiB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzcHggMCAwIDJweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYnMgPiB1bCA+IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMC4yNWVtIDAuMjVlbSAwLjQ1ZW0gMDtcXG4gIG1pbi13aWR0aDogNmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgbWFyZ2luOiAxcHggM3B4IC0xcHggMDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB6LWluZGV4OiAxODtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYnMgPiB1bCA+IGxpIGE6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG91dGxpbmU6IDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYnMgPiB1bCA+IGxpIGE6bnRoLWNoaWxkKDIpIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFicyA+IHVsID4gbGkgYTpudGgtY2hpbGQoMikgaW1nIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFicyA+IHVsID4gbGkuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB6LWluZGV4OiAyMjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYnMgPiB1bCA+IGxpLnNlbGVjdGVkIGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFicyBkaXYuY2wtdmlld3Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMjlweDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogMjA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWJzIGRpdi5jbC12aWV3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAyMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFicyBkaXYuY2wtdmlldy5zZWxlY3RlZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYygxMDAlIC0gMTdweCk7XFxuICB0b3A6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDI3cHg7XFxuICB0b3A6IDRweDtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSBkaXYgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDMwcHggMCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOGVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpLm1lbnUtZGlzYWJsZWQgYSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudS5jbC1tZW51LW9wZW4ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yb290LFxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQsXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtcmlnaHQsXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtdG9wLFxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODg4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0IGRpdi5jbC1iYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHJpZ2h0OiAtMTBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB6LWluZGV4OiAxMDA7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtdG9wIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtdG9wIGRpdi5jbC1iYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvdHRvbTogLTEwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgei1pbmRleDogMjtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1ib3R0b20ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9fcGxheWdyb3VuZC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjEzOTE1M2Q2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL19wbGF5Z3JvdW5kLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9fcGxheWdyb3VuZC5zY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCTUFBQUFPQ0FZQUFBRE5HQ2VKQUFBQlMybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTlM0MkxXTXhORElnTnprdU1UWXdPVEkwTENBeU1ERTNMekEzTHpFekxUQXhPakEyT2pNNUlDQWdJQ0FnSUNBaVBnb2dQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRLSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlpOCtDaUE4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnbzhQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtuaHhnN3dBQUFWZEpSRUZVT0kyVjBiRnJVMUVVQitEdlJXTnNJSk5RdTZ0MUU4eWt1RGdLQlFsSUZ3ZEhrUTcrQXdVN3VybDBGTVE1Y1hGd3NvTWd1SWhTcW9QdEpBNTFFSEdvaGVkUWZnNTVTVjlqYWVLRnc3MXdEdDg5aHlPSmVzeDYwdTgzc3JSMExsd0t2ZEFySm9HaUtLWkRxNnZ6Qm9PdW5aMXJ1SWdmR1B3WGxtNzNsSU9EVzdhM2w1WGxJbjdoTmZyWU5jdVkyZHVUWG04dVBBZ2ZRai9jRDR1aEdRUlRzZXp2eThwS0p6d01YOEt6Y0NHY0hpR0hHSFBoU2xnSVJack5WalkzaDFCWnl0cGFwK3JvVTNnYTV2OUJ4ajhQa1JkaE43d0xkOExsdE52dHJLOTN3dDN3TVF6QytXT1JHaVlVNFhyWUNsOHI5RjY0SFRiQyszQ3pxanNlcW1Hak9CT2VoTy9oVzNoWjRZOUQ2MFJvdklDallDTThDajhyOUhPNE9oVWFZNk00QkZ2aFRmZ2Qzb2F6NDl6RTl1dlJtSkJIcnovWVFJbm4xVjNQejlEWjBRNjc0VlcxN2FsZEpUbWhZRGphalZtaEpQNEN5MVpVNitkQ2czQUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQkFNQUFBRHQzZUpTQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBRWxCTVZFVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRGdLeG1pQUFBQUJYUlNUbE1Bdi9JQkRWYVFzajhBQUFBQllrdEhSQUNJQlIxSUFBQUFDWEJJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFBSEVsRVFWUUkxMk5nd0EwWWxjQkFBTUZnZGdFREF3U0RQRFc0QVFCMlhBeGI4RW5WcVFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIlxyXG5pbXBvcnQgJy4vX3BsYXlncm91bmQuc2Nzcyc7XHJcbmltcG9ydCB7UGxheWdyb3VuZH0gZnJvbSAnLi9qcy9QbGF5Z3JvdW5kL1BsYXlncm91bmQnO1xyXG5cclxuZXhwb3J0IHtQbGF5Z3JvdW5kfTtcclxuZXhwb3J0IHtQbGF5Z3JvdW5kIGFzIGRlZmF1bHR9O1xyXG5cclxuY29uc29sZS5sb2coJ1BsYXlncm91bmQgaW5kZXguanMnKTtcclxuIiwiXHJcblxyXG4vKipcclxuICogQ29udmVuaWVuY2UgZnVuY3Rpb25zIGZvciB0aGUgRE9NLlxyXG4gKiBUb29scyB0aGF0IGF2b2lkIGhhdmluZyB0byBoYXZlIGpRdWVyeSBpbnN0YWxsZWQuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRvb2xzID0gZnVuY3Rpb24oKSB7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogSXMgYW4gZWxlbWVudCB2aXNpYmxlP1xyXG4gKiBCb3Jyb3dlZCBmcm9tIGpRdWVyeSFcclxuICogQHBhcmFtIGVsZW1cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5Ub29scy5pc1Zpc2libGUgPSBmdW5jdGlvbiggZWxlbSApIHtcclxuICAgIHJldHVybiAhISggZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICk7XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkIGEgY2xhc3MgdG8gYW4gZWxlbWVudFxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGFkZCB0b1xyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIENsYXNzIHRvIGFkZFxyXG4gKi9cclxuVG9vbHMuYWRkQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdClcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIGVsc2VcclxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XHJcbn1cclxuXHJcblRvb2xzLmFkZENsYXNzZXMgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc2VzKSB7XHJcbiAgICBpZihjbGFzc2VzID09PSB1bmRlZmluZWQgfHwgY2xhc3NlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaCgoY2xzKSA9PiB7XHJcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3MoZWxlbWVudCwgY2xzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5Ub29scy5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgbGV0IHJlZ0V4ID0gbmV3IFJlZ0V4cCgnXFxcXGInICsgY2xhc3NOYW1lICsgJ1xcXFxiJywgJ2cnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZWdFeCwgXCJcIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBESVYgd2l0aCBhIHByb3ZpZGVkIGNsYXNzIG5hbWUuXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgQ2xhc3MgdG8gYWRkIHRvIHRoZSBkaXZcclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudCB0byBwbGFjZSBpbiB0aGUgZGl2LiBIVE1MIG9yIEVsZW1lbnRcclxuICogQHJldHVybnMge0VsZW1lbnR9IENyZWF0ZWQgRE9NIEVsZW1lbnRcclxuICovXHJcblRvb2xzLmNyZWF0ZUNsYXNzZWREaXYgPSBmdW5jdGlvbihjbGFzc05hbWUsIGNvbnRlbnQpIHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFRvb2xzLmFkZENsYXNzKGRpdiwgY2xhc3NOYW1lKTtcclxuICAgIGlmKGNvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xyXG5cdCAgICBUb29scy5hZGRDb250ZW50KGRpdiwgY29udGVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIGNvbnRlbnQgdG8gYW4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBhZGQgdG9cclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudC4gQ2FuIGJlIEhUTUwgb3IgYW4gRWxlbWVudC5cclxuICovXHJcblRvb2xzLmFkZENvbnRlbnQgPSBmdW5jdGlvbihlbGVtZW50LCBjb250ZW50KSB7XHJcbiAgICBpZihUb29scy5pc1N0cmluZyhjb250ZW50KSkge1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XHJcbiAgICB9IGVsc2UgaWYoVG9vbHMuaXNFbGVtZW50KGNvbnRlbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIElzIHRoZSBwYXNzZWQgdmFsdWUgYSBzdHJpbmc/XHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5Ub29scy5pc1N0cmluZyA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8ICgoISF2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBTdHJpbmddJyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJcyB0aGUgcGFzc2VkIHZhbHVlIGFuIEhUTUxFbGVtZW50P1xyXG4gKiBAcGFyYW0gdmFsXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuVG9vbHMuaXNFbGVtZW50ID0gZnVuY3Rpb24odmFsKSB7XHJcbiAgICByZXR1cm4gdmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsICYmIHZhbC5ub2RlVmFsdWUgIT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IChzcGVjaWZpY2FsbHkgaXRzIGJvcmRlciBib3gsIHdoaWNoIGV4Y2x1ZGVzIG1hcmdpbnMpIHJlbGF0aXZlIHRvIHRoZSBkb2N1bWVudC5cclxuICogQHBhcmFtIGVsZW1lbnRcclxuICovXHJcblRvb2xzLm9mZnNldCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRyZXR1cm4ge1xyXG5cdCAgICBsZWZ0OiByZWN0LmxlZnQgKyBlbGVtZW50LnNjcm9sbExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQsXHJcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIGVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kIGEgY2hpbGQgYnkgdGFnTmFtZVxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKiBAcGFyYW0gdGFnTmFtZVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcblRvb2xzLmNoaWxkID0gZnVuY3Rpb24oZWxlbWVudCwgdGFnTmFtZSkge1xyXG5cdGZvcihjb25zdCBub2RlIG9mIGVsZW1lbnQuY2hpbGROb2Rlcykge1xyXG5cdCAgICBpZihub2RlLnRhZ05hbWUgPT09IHRhZ05hbWUpIHtcclxuXHQgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7RGlhbG9nfSBmcm9tICcuL0RpYWxvZyc7XHJcblxyXG4vKipcclxuICogVGhlIHN0YW5kYXJkIEFib3V0IGRpYWxvZyBib3guXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEFib3V0RGlhbG9nID0gZnVuY3Rpb24obWFpbikge1xyXG4gICAgRGlhbG9nLmNhbGwodGhpcywgXCJhYm91dFwiKTtcclxuXHJcblxyXG4gICAgdGhpcy5vcGVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25DYW5jZWwgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBEaWFsb2cgYm94IGNvbnRlbnRzXHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBgPGZpZ3VyZT48aW1nIHNyYz1cImltZy9sb2dvLWljb24ucG5nXCIgYWx0PVwiQ2lyc2ltIExvZ29cIj48L2ZpZ3VyZT5cclxuPGgxPkNpcnNpbSBDaXJjdWl0IFNpbXVsYXRvcjwvaDE+XHJcbjxwPlZlcnNpb246ICR7bWFpbi5jaXJzaW0udmVyc2lvbn08L3A+XHJcbjxwPldyaXR0ZW4gYnk6IENoYXJsZXMgQi4gT3dlbjwvcD5gO1xyXG5cclxuICAgICAgICBpZihtYWluLmNpcnNpbS5yb290LmluZGV4T2YoJ2NpcnNpbS1kZXYnKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gYDxwIGNsYXNzPVwiZ2FwXCI+UnVubmluZyBmcm9tIHRoZSBkZXZlbG9wbWVudCBzaXRlLjwvcD5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb250ZW50cyhjb250ZW50LCBcIkFib3V0IENpcnNpbVwiKTtcclxuICAgICAgICBEaWFsb2cucHJvdG90eXBlLm9wZW4uY2FsbCh0aGlzKTtcclxuICAgIH1cclxufVxyXG5cclxuQWJvdXREaWFsb2cucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEaWFsb2cucHJvdG90eXBlKTtcclxuQWJvdXREaWFsb2cucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWJvdXREaWFsb2c7XHJcblxyXG4iLCJpbXBvcnQge1VuaXF1ZX0gZnJvbSAnLi4vVXRpbGl0eS9VbmlxdWUnO1xyXG5pbXBvcnQgRE9NUHVyaWZ5IGZyb20gJ2RvbXB1cmlmeSc7XHJcbmltcG9ydCBEaWFsb2dDTCBmcm9tICdkaWFsb2ctY2wnO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tICcuLi9ET00vVG9vbHMnO1xyXG5cclxuLyoqXHJcbiAqIEJhc2Ugb2JqZWN0IGZvciBnZW5lcmFsLXB1cnBvc2UgZGlhbG9nIGJveGVzIHdoZXJlIHRoZVxyXG4gKiBmdW5jdGlvbmFsaXR5IGlzIGFzc3VtZWQgdG8gYmUgaW1wbGVtZW50ZWQgaW4gYSBkZXJpdmVkIG9iamVjdC5cclxuICogQHBhcmFtIGNsYXNzZXMgQ2xhc3NlcyB0byBhZGQgdG8gdGhlIGRpYWxvZyBib3hcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRGlhbG9nID0gZnVuY3Rpb24oY2xhc3Nlcykge1xyXG4gICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcyAhPT0gdW5kZWZpbmVkID8gJ2NpcnNpbSAnICsgY2xhc3NlcyA6ICdjaXJzaW0nO1xyXG4gICAgdGhpcy5idXR0b25PayA9IFwiT2tcIjtcclxuICAgIHRoaXMuYnV0dG9uQ2FuY2VsID0gXCJDYW5jZWxcIjtcclxuICAgIHRoaXMucmVzaXplID0gJ25vbmU7J1xyXG4gICAgdGhpcy50aXRsZUJhckJ1dHRvbnMgPSBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogU2V0IHRoZSBkaWFsb2cgYm94IGNvbnRlbnRzXHJcbiAqIEBwYXJhbSBodG1sIEhUTUwgZm9yIHRoZSBib2R5XHJcbiAqIEBwYXJhbSB0aXRsZSBUaXRsZSBmb3IgdGhlIHRpdGxlIGJhclxyXG4gKi9cclxuRGlhbG9nLnByb3RvdHlwZS5jb250ZW50cyA9IGZ1bmN0aW9uKCBodG1sLCB0aXRsZSkge1xyXG4gICAgdGhpcy5odG1sID0gaHRtbDtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE9wZW4gdGhlIGRpYWxvZyBib3hcclxuICovXHJcbkRpYWxvZy5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBsZXQgZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignZGlhbG9nLWNvbnRlbnQnKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICBsZXQgZGxnID0gYCR7dGhpcy5odG1sfTxwIGNsYXNzPVwiZXJyb3JcIj48L3A+XHJcbjxpbnB1dCB0eXBlPVwic3VibWl0XCIgdGFiaW5kZXg9XCItMVwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IHRvcDotMTAwMHB4XCI+YDtcclxuICAgIGRpdi5pbm5lckhUTUwgPSBkbGc7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50ID0gZGl2O1xyXG5cclxuICAgIGxldCBidXR0b25zID0gW107XHJcbiAgICBpZih0aGlzLmJ1dHRvbk9rICE9PSBudWxsKSB7XHJcbiAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgY29udGVudHM6ICdPaycsXHJcbiAgICAgICAgICAgIGNsaWNrOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9rKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvY3VzOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5idXR0b25DYW5jZWwgIT09IG51bGwpIHtcclxuICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICBjb250ZW50czogJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgIGNsaWNrOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkaWFsb2cgPSBuZXcgRGlhbG9nQ0woe1xyXG4gICAgICAgICdhZGRDbGFzcyc6IHRoaXMuY2xhc3NlcyxcclxuICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcclxuICAgICAgICBjb250ZW50OiBmb3JtLFxyXG4gICAgICAgIGJ1dHRvbnM6IGJ1dHRvbnMsXHJcbiAgICAgICAgcmVzaXplOiB0aGlzLnJlc2l6ZSxcclxuICAgICAgICB0aXRsZUJhckJ1dHRvbnM6IHRoaXMudGl0bGVCYXJCdXR0b25zXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9uT3BlbigpO1xyXG5cclxuICAgIHRoaXMuY2xvc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHR0aGlzLm9rKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuRGlhbG9nLnByb3RvdHlwZS5vayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG59XHJcblxyXG5cclxuRGlhbG9nLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uKG1zZykge1xyXG4gICAgaWYobXNnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJykuaW5uZXJIVE1MID0gbXNnO1xyXG4gICAgfVxyXG59XHJcblxyXG5EaWFsb2cucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge31cclxuXHJcbkRpYWxvZy5wcm90b3R5cGUub25PcGVuID0gZnVuY3Rpb24oKSB7fVxyXG5cclxuRGlhbG9nLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbihjbHMsIGVuYWJsZSkge1xyXG4gICAgaWYoZW5hYmxlKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLicgKyBjbHMpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgY2xzKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTYW5pdGl6ZSB0ZXh0IGZyb20gdXNlciBpbnB1dCB0byBwcmV2ZW50IFhTUyBhdHRhY2tzLlxyXG4gKiBAcGFyYW0gdGV4dCBUZXh0IHRvIHNhbml0aXplXHJcbiAqIEByZXR1cm5zIFNhbml0aXplZCB2ZXJzaW9uXHJcbiAqL1xyXG5EaWFsb2cucHJvdG90eXBlLnNhbml0aXplID0gZnVuY3Rpb24odGV4dCkge1xyXG4gICAgcmV0dXJuIERPTVB1cmlmeS5zYW5pdGl6ZSh0ZXh0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhIHVuaXF1ZSBJRCB0byB1c2UgaW4gZGlhbG9nIGJveGVzXHJcbiAqL1xyXG5EaWFsb2cucHJvdG90eXBlLnVuaXF1ZUlkID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gVW5pcXVlLnVuaXF1ZU5hbWUoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nO1xyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogVGhlIHN0YW5kYXJkIE1lc3NhZ2UgZGlhbG9nIGJveC5cclxuICovXHJcblxyXG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nLmpzJztcclxuXHJcbnZhciBNZXNzYWdlRGlhbG9nID0gZnVuY3Rpb24odGl0bGUsIGJvZHksIGhlaWdodCkge1xyXG4gICAgRGlhbG9nLmNhbGwodGhpcyk7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3BlbiB0aGUgZGlhbG9nIGJveC5cclxuICAgICAqIEBwYXJhbSBvayBPcHRpb25hbCBjbG9zdXJlIHRoYXQgd2lsbCBiZSBjYWxsZWQgb24gT0tcclxuICAgICAqIEBwYXJhbSBjYW5jZWwgT3B0aW9uYWwgYm9vbGVhbiAtIHRydWUgaW5kaWNhdGVzIHdlIGluY2x1ZGUgYSBjYW5jZWwgYnV0dG9uXHJcbiAgICAgKi9cclxuICAgIHRoaXMub3BlbiA9IGZ1bmN0aW9uKG9rLCBjYW5jZWwpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnRzKGJvZHksIHRpdGxlKTtcclxuXHJcbiAgICAgICAgaWYoY2FuY2VsICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYob2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgb2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEaWFsb2cucHJvdG90eXBlLm9wZW4uY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5NZXNzYWdlRGlhbG9nLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGlhbG9nLnByb3RvdHlwZSk7XHJcbk1lc3NhZ2VEaWFsb2cucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWVzc2FnZURpYWxvZztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VEaWFsb2c7XHJcbiIsIlxyXG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nLmpzJztcclxuXHJcbi8qKlxyXG4gKiBEaWFsb2cgYm94IGZvciBhZGRpbmcgYSBuYW1lZCB0YWIuXHJcbiAqIEBwcm9wZXJ0eSB0YWJzIFRhYnMgb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRhYkFkZERsZyA9IGZ1bmN0aW9uKHRhYnMpIHtcclxuICAgIERpYWxvZy5jYWxsKHRoaXMpO1xyXG5cclxuICAgIGNvbnN0IE1heE5hbWUgPSA4O1xyXG4gICAgbGV0IGlkO1xyXG5cclxuICAgIHRoaXMub3BlbiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAvLyBEaWFsb2cgYm94IGNvbnRlbnRzXHJcbiAgICAgICAgaWQgPSB0aGlzLnVuaXF1ZUlkKCk7XHJcblxyXG4gICAgICAgIHZhciBkbGcgPSBgPGRpdiBjbGFzcz1cImNvbnRyb2wxIGNlbnRlclwiPjxsYWJlbCBmb3I9XCIke2lkfVwiPk5ldyB0YWIgbmFtZTogPC9sYWJlbD5cclxuPGlucHV0IGNsYXNzPVwidGFibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCIke2lkfVwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPjwvZGl2PlxyXG48cD5FbnRlciB0aGUgbmFtZSBmb3IgdGhlIG5ldyB0YWIuPC9wPmA7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudHMoZGxnLCBcIk5ldyBUYWJcIik7XHJcbiAgICAgICAgRGlhbG9nLnByb3RvdHlwZS5vcGVuLmNhbGwodGhpcyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnNlbGVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS52YWx1ZTtcclxuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nbSwnJyk7XHJcbiAgICAgICAgbmFtZSA9IHRoaXMuc2FuaXRpemUobmFtZSk7XHJcbiAgICAgICAgaWYobmFtZS5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoJ011c3QgcHJvdmlkZSBhIHRhYiBuYW1lJyk7XHJcblx0ICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG5hbWUubGVuZ3RoID4gTWF4TmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yKCdOYW1lIG11c3QgYmUgbm8gbG9uZ2VyIHRoYW4gJyArIE1heE5hbWUgKyAnIGNoYXJhY3RlcnMnKTtcclxuXHQgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBFbnN1cmUgbmFtZSBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0XHJcbiAgICAgICAgLy9cclxuICAgICAgICBsZXQgdmFsID0gdGFicy52YWxpZGF0ZU5hbWUobmFtZSk7XHJcbiAgICAgICAgaWYodmFsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IodmFsKTtcclxuXHQgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGFicy5hZGQobmFtZSk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuVGFiQWRkRGxnLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGlhbG9nLnByb3RvdHlwZSk7XHJcblRhYkFkZERsZy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUYWJBZGREbGc7XHJcbiIsIlxyXG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nLmpzJztcclxuXHJcbi8qKlxyXG4gKiBEaWFsb2cgYm94IGZvciBhZGRpbmcgYSBuYW1lZCB0YWIuXHJcbiAqIEBwYXJhbSB0YWJzIFRhYnMgb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRhYlByb3BlcnRpZXNEbGcgPSBmdW5jdGlvbih0YWJzKSB7XHJcbiAgICBEaWFsb2cuY2FsbCh0aGlzKTtcclxuXHJcbiAgICBjb25zdCBNYXhOYW1lID0gODtcclxuICAgIGxldCBpZDtcclxuXHJcbiAgICB0aGlzLm9wZW4gPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgbGV0IGNpcmN1aXQgPSB0YWJzLmN1cnJlbnRDaXJjdWl0KCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBjaXJjdWl0LmdldE5hbWUoKTtcclxuICAgICAgICBsZXQgc3RhdHMgPSBjaXJjdWl0LnN0YXRzKCk7XHJcblxyXG4gICAgICAgIC8vIERpYWxvZyBib3ggY29udGVudHNcclxuICAgICAgICBpZCA9IHRoaXMudW5pcXVlSWQoKTtcclxuXHJcbiAgICAgICAgdmFyIGRsZyA9IGBcclxuPGRpdiBjbGFzcz1cImNvbnRyb2wxIGNlbnRlclwiPjxsYWJlbCBmb3I9XCIke2lkfVwiPlRhYiBuYW1lOiA8L2xhYmVsPlxyXG48aW5wdXQgY2xhc3M9XCJ0YWJuYW1lXCIgdHlwZT1cInRleHRcIiBpZD1cIiR7aWR9XCIgdmFsdWU9XCIke25hbWV9XCIgc3BlbGxjaGVjaz1cImZhbHNlXCIgJHtuYW1lID09PSAnbWFpbicgPyBcImRpc2FibGVkXCIgOiBcIlwifT48L2Rpdj5gO1xyXG5cclxuICAgICAgICBpZihuYW1lID09PSAnbWFpbicpIHtcclxuICAgICAgICAgICAgZGxnICs9ICc8cCBjbGFzcz1cImNlbnRlclwiPjxlbT5UaGUgbWFpbiB0YWIgY2Fubm90IGJlIHJlbmFtZWQuPC9lbT48L3A+JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkbGcgKz0gJzxwPlRoaXMgcGFnZSBwcmVzZW50cyBpbmZvcm1hdGlvbiBmb3IgdGhlICcgK1xyXG4gICAgICAgICAgICAgICAgJ2N1cnJlbnRseSBzZWxlY3RlZCB0YWIuIEVudGVyIGEgbmV3IG5hbWUgdG8gcmVuYW1lIHRoZSB0YWIuPC9wPic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkbGcgKz0gYDx0YWJsZT5cclxuPHRyPjx0aD5Qcm9wZXJ0eTwvdGg+PHRoPlZhbHVlPC90aD48L3RyPlxyXG48dHI+PHRkPkNvbXBvbmVudHM8L3RkPjx0ZD4ke3N0YXRzLm51bUNvbXBvbmVudHN9PC90ZD48L3RyPlxyXG48dHI+PHRkPkNvbm5lY3Rpb25zPC90ZD48dGQ+JHtzdGF0cy5udW1Db25uZWN0aW9uc308L3RkPjwvdHI+XHJcbjx0cj48dGQ+V2lkdGg8L3RkPjx0ZD4ke3N0YXRzLndpZHRofSBwaXhlbHM8L3RkPjwvdHI+XHJcbjx0cj48dGQ+SGVpZ2h0PC90ZD48dGQ+JHtzdGF0cy5oZWlnaHR9IHBpeGVsczwvdGQ+PC90cj5cclxuPC90YWJsZT5gO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRlbnRzKGRsZywgXCJOZXcgVGFiXCIpO1xyXG4gICAgICAgIERpYWxvZy5wcm90b3R5cGUub3Blbi5jYWxsKHRoaXMpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zZWxlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9rID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIC8vIFdoYXQgaXMgdGhlIGN1cnJlbnQgbmFtZT9cclxuICAgICAgICBsZXQgY2lyY3VpdCA9IHRhYnMuY3VycmVudENpcmN1aXQoKTtcclxuICAgICAgICBpZihjaXJjdWl0LmdldE5hbWUoKSA9PT0gJ21haW4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnZhbHVlO1xyXG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL15cXHMrfFxccyskL2dtLCcnKTtcclxuICAgICAgICBuYW1lID0gdGhpcy5zYW5pdGl6ZShuYW1lKTtcclxuICAgICAgICBpZihuYW1lLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcignTXVzdCBwcm92aWRlIGEgdGFiIG5hbWUnKTtcclxuXHQgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobmFtZS5sZW5ndGggPiBNYXhOYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoJ05hbWUgbXVzdCBiZSBubyBsb25nZXIgdGhhbiAnICsgTWF4TmFtZSArICcgY2hhcmFjdGVycycpO1xyXG5cdCAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIEVuc3VyZSBuYW1lIGRvZXMgbm90IGFscmVhZHkgZXhpc3RcclxuICAgICAgICAvL1xyXG5cclxuICAgICAgICBsZXQgdmFsID0gdGFicy52YWxpZGF0ZU5hbWUobmFtZSwgY2lyY3VpdCk7XHJcbiAgICAgICAgaWYodmFsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IodmFsKTtcclxuXHQgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobmFtZSAhPT0gY2lyY3VpdC5nZXROYW1lKCkpIHtcclxuICAgICAgICAgICAgdGFicy5yZW5hbWUobmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5UYWJQcm9wZXJ0aWVzRGxnLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGlhbG9nLnByb3RvdHlwZSk7XHJcblRhYlByb3BlcnRpZXNEbGcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVGFiUHJvcGVydGllc0RsZztcclxuIiwiaW1wb3J0IHtUb29sc30gZnJvbSAnLi4vRE9NL1Rvb2xzJztcclxuXHJcbi8qKlxyXG4gKiBUb2FzdCBub3RpZmljYXRpb24gc3lzdGVtXHJcbiAqIGpRdWVyeS1mcmVlXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRvYXN0ID0gZnVuY3Rpb24obWFpbikge1xyXG5cdC8qKiBEZWZhdWx0IHRvYXN0IGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyAqL1xyXG5cdHRoaXMuZGVmYXVsdER1cmF0aW9uID0gMjAwMDtcclxuXHJcblx0LyoqIEludGVyLXRvYXN0IGRlbGF5IHRpbWUgaW4gbWlsbGlzZWNvbmRzICovXHJcblx0dGhpcy5pbnRlclRvYXN0RGVsYXkgPSA1MDA7XHJcblxyXG4gICAgbGV0IG1lc3NhZ2VzID0gW107ICAvLyBQZW5kaW5nIG1lc3NhZ2VzXHJcbiAgICBsZXQgYWN0aXZlID0gZmFsc2U7IC8vIElzIHRoZXJlIGFuIGFjdGl2ZSBtZXNzYWdlIGRpc3BsYXlpbmc/XHJcblxyXG5cdGxldCBlbGVtZW50ID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIHRoZSB0b2FzdCBkaXZcclxuXHQgKiBAcGFyYW0gZGl2IERpdiB0byBwdXQgdGhlIHRvYXN0IGludG9cclxuXHQgKi9cclxuICAgIHRoaXMuY3JlYXRlID0gKGRpdikgPT4ge1xyXG5cdFx0ZWxlbWVudCA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ3RvYXN0Jyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG5cdFx0ZWxlbWVudC5pbm5lckhUTUwgPSAndGVzdGluZyc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcclxuICAgIFx0aWYobWVzc2FnZXMubGVuZ3RoID4gMCAmJiAhYWN0aXZlKSB7XHJcblx0XHQgICAgLy8gU2V0IHRoZSBtZXNzYWdlXHJcblx0XHQgICAgbGV0IG1lc3NhZ2UgPSBtZXNzYWdlc1swXTtcclxuICAgICAgICAgICAgbWVzc2FnZXMuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IG1lc3NhZ2UubXNnO1xyXG5cclxuICAgICAgICAgICAgLy8gU2hvdyBpdFxyXG5cdFx0ICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9hc3QtYWN0aXZlJyk7XHJcblx0XHQgICAgYWN0aXZlID0gdHJ1ZTtcclxuXHJcblx0XHQgICAgLy8gRGVsYXkgd2hpbGUgYWN0aXZlXHJcblx0XHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHQgICAgXHQvLyBIaWRlIGl0XHJcblx0XHRcdCAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RvYXN0LWFjdGl2ZScpO1xyXG5cclxuXHRcdFx0ICAgIC8vIERlbGF5IGJldHdlZW4gdG9hc3RzXHJcblx0XHRcdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0ICAgIFx0YWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdCAgICBcdHNob3coKTtcclxuXHRcdFx0ICAgIH0sIHRoaXMuaW50ZXJUb2FzdERlbGF5KVxyXG5cdFx0ICAgIH0sIG1lc3NhZ2UudGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBEaXNwbGF5IGEgdG9hc3QgbWVzc2FnZVxyXG5cdCAqIEBwYXJhbSBtc2cgTWVzc2FnZSB0byBkaXNwbGF5XHJcblx0ICogQHBhcmFtIHRpbWUgVGltZSB0byBkaXNwbGF5IGluIG1pbGxpc2Vjb25kcywgb21pdCBmb3IgZGVmYXVsdFxyXG5cdCAqL1xyXG5cdHRoaXMubWVzc2FnZSA9IGZ1bmN0aW9uKG1zZywgdGltZSkge1xyXG4gICAgICAgIGlmKHRpbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aW1lID0gdGhpcy5kZWZhdWx0RHVyYXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXNzYWdlcy5wdXNoKHttc2c6IG1zZywgdGltZTogdGltZX0pO1xyXG4gICAgICAgIHNob3coKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogRGlzcGxheSBhbnkgSlNPTiBlcnJvcnMgd2UgaGF2ZSByZWNlaXZlZC5cclxuXHQgKiBAcGFyYW0ganNvbkFwaSBKc29uQVBJIG9iamVjdFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGFueSBlcnJvcnMgZXhpc3RlZC5cclxuXHQgKi9cclxuXHR0aGlzLmpzb25FcnJvcnMgPSBmdW5jdGlvbihqc29uQXBpKSB7XHJcbiAgICAgICAgaWYoanNvbkFwaS5lcnJvcnMoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBqc29uQXBpLmVycm9ycygpLmZvckVhY2goKGVycm9yKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlKCdTZXJ2ZXIgRXJyb3I6ICcgKyBlcnJvci50aXRsZSwgNTAwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBSZXNpemVyIGZyb20gJ3Jlc2l6ZXItY2wnO1xyXG5cclxuaW1wb3J0IHtNZW51fSBmcm9tICcuL01lbnUnO1xyXG5pbXBvcnQge1RhYnN9IGZyb20gJy4vVGFicyc7XHJcbmltcG9ydCB7VG9hc3R9IGZyb20gJy4vR3JhcGhpY3MvVG9hc3QnO1xyXG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuL1VJL0RyYWdBbmREcm9wJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSAnLi9ET00vVG9vbHMnO1xyXG5pbXBvcnQge1BhbmV9IGZyb20gXCIuL1BhbmVcIjtcclxuXHJcblxyXG4vKipcclxuICogQWN0dWFsIGluc3RhbmNlIG9mIHRoZSBQbGF5Z3JvdW5kIGZvciBhIHNpbmdsZSBlbGVtZW50LlxyXG4gKiBAcGFyYW0gcGxheWdyb3VuZCBUaGUgbWFpbiBQbGF5Z3JvdW5kIG9iamVjdFxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHdlIGFyZSBsb2FkaW5nIGludG9cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWFpbiA9IGZ1bmN0aW9uKHBsYXlncm91bmQsIGVsZW1lbnQpIHtcclxuICAgIHRoaXMuY2lyc2ltID0gcGxheWdyb3VuZDtcclxuICAgIHRoaXMuc2l0ZSA9IHBsYXlncm91bmQuc2l0ZTtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBwbGF5Z3JvdW5kLm9wdGlvbnM7XHJcblxyXG4gICAgLy8vIGRpdi5tYWluXHJcbiAgICB0aGlzLmRpdiA9IG51bGw7XHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSBwbGF5Z3JvdW5kLm9wdGlvbnM7XHJcblxyXG4gICAgLy8vIFJlZmVyZW5jZXMgdG8gb3RoZXIgR1VJIGNvbXBvbmVudHNcclxuICAgIGxldCBtZW51PW51bGwsIHRhYnM9bnVsbDtcclxuXHJcbiAgICAvLy8gZGl2Lm92ZXJsYXlcclxuICAgIGxldCBkaXZPdmVybGF5ID0gbnVsbCwgZGl2V29yaz1udWxsO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kJyk7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgc3dpdGNoKG9wdGlvbnMuZGlzcGxheSkge1xyXG4gICAgICAgICAgICBjYXNlICdmdWxsJzpcclxuICAgICAgICAgICAgICAgIFRvb2xzLmFkZENsYXNzKGVsZW1lbnQsICdjbC1wbGF5Z3JvdW5kLWZ1bGwnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIFRvb2xzLmFkZENsYXNzKGVsZW1lbnQsICdjbC1wbGF5Z3JvdW5kLXdpbmRvdycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvcHRpb25zLmRpc3BsYXkgPT09ICd3aW5kb3cnKSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEFkZCByZXNpemVyIHRvIHRoZSB3aW5kb3cgaWYgaW4gd2luZG93IG1vZGVcclxuICAgICAgICAgICAgLy8gYW5kIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGFkZGVkXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGlmKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInJlc2l6ZXJcIikpIHtcclxuICAgICAgICAgICAgICAgIG5ldyBSZXNpemVyKGVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGU6ICcxMHB4IHNvbGlkICMxODQ1M0InXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kcmFnQW5kRHJvcCA9IG5ldyBEcmFnQW5kRHJvcCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBDcmVhdGUgYW5kIGFkZCB0aGUgd2luZG93IGNvbXBvbmVudHNcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmKG9wdGlvbnMuZGlzcGxheSAhPT0gJ2lubGluZScgJiYgb3B0aW9ucy5kaXNwbGF5ICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQWxsIHdpbmRvdy1iYXNlZCB2ZXJzaW9ucyBvdGhlciB0aGFuIGlubGluZSBnZXQgdGhlXHJcbiAgICAgICAgICAgIC8vIGZ1bGwgdXNlciBpbnRlcmZhY2VcclxuICAgICAgICAgICAgLy9cclxuXHJcbiAgICAgICAgICAgIC8vIDxkaXYgY2xhc3M9XCJtYWluXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIHRoaXMuZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignbWFpbicpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kaXYpO1xyXG5cclxuICAgICAgICAvLyAgICB0YWJzID0gbmV3IFRhYnModGhpcyk7XHJcbiAgICAgICAgLy8gICAgdGhpcy50YWJzID0gdGFicztcclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgbWVudVxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBtZW51ID0gbmV3IE1lbnUodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMubWVudSA9IG1lbnU7XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBXb3JraW5nIGFyZWFcclxuICAgICAgICAgICAgLy8gPGRpdiBjbGFzcz1cIndvcmtcIj48L2Rpdj5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgZGl2V29yayA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ3dvcmsnKTtcclxuICAgICAgICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQoZGl2V29yayk7XHJcblxyXG5cdFx0XHQvL1xyXG5cdCAgICAgICAgLy8gQW5kIHRoZSByb290IHBhbmVcclxuXHQgICAgICAgIC8vXHJcblx0ICAgICAgICB0aGlzLnJvb3RQYW5lID0gbmV3IFBhbmUodGhpcywgZGl2V29yaywgbnVsbCwgbnVsbCk7XHJcblxyXG5cdCAgICAgICAgdGhpcy5yb290UGFuZS5zcGxpdCh0cnVlKTtcclxuXHJcblx0ICAgICAgICAvLyB0aGlzLnJvb3RQYW5lLmNoaWxkMS5kaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHQgICAgICAgIC8vIFx0dGhpcy5yb290UGFuZS5wZXJjZW50YWdlKDIwKTtcclxuXHQgICAgICAgIC8vIH0pXHJcblx0ICAgICAgICAvL1xyXG5cdCAgICAgICAgLy8gdGhpcy5yb290UGFuZS5jaGlsZDIuZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHQgICAgLy8gICAgIHRoaXMucm9vdFBhbmUucGVyY2VudGFnZSg5MCk7XHJcblx0ICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQW5kIGFkZCB0aGUgdGFic1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgLy8gICAgIHRhYnMuY3JlYXRlKGRpdldvcmspO1xyXG5cclxuXHQgICAgICAgIC8vXHJcblx0ICAgICAgICAvLyBBbmQgdGhlIG92ZXJsYXlcclxuXHQgICAgICAgIC8vIDxkaXYgY2xhc3M9XCJjaXJzaW0tb3ZlcmxheVwiPjwvZGl2PlxyXG5cdCAgICAgICAgLy9cclxuXHQgICAgICAgIGRpdk92ZXJsYXkgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdwbGF5Z3JvdW5kLW92ZXJsYXknKTtcclxuXHQgICAgICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKGRpdk92ZXJsYXkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b2FzdCA9IG5ldyBUb2FzdCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy50b2FzdC5jcmVhdGUodGhpcy5kaXYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMuY3VycmVudFZpZXcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGFicy5jdXJyZW50VmlldygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuZXZlciBhIG5ldyB0YWIgaXMgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgdGhpcy5uZXdUYWIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCYWNrdXAgdGhlIGN1cnJlbnQgY2lyY3VpdHMgb2JqZWN0IGluIHN1cHBvcnQgb2YgYW4gVW5kbyBvcGVyYXRpb25cclxuICAgICAqL1xyXG4gICAgdGhpcy5iYWNrdXAgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5kbyBvcGVyYXRpb25cclxuICAgICAqL1xyXG4gICAgdGhpcy51bmRvID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGFicy51bmRvKCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBvciBjbGVhciBpbnRlcmZhY2UgbW9kYWwgc3RhdGUuXHJcbiAgICAgKiBAcGFyYW0gbW9kYWwgVHJ1ZSBzZXRzIGludGVyZmFjZSB0byBtb2RhbCBzdGF0ZS5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHRoaXMubW9kYWwgPSBmdW5jdGlvbihtb2RhbCkge1xyXG4gICAgICAgIGlmKG1vZGFsKSB7XHJcbiAgICAgICAgICAgIGRpdk92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGl2T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tcGxldGUgcmVsb2FkIGFmdGVyIGEgbmV3IG1vZGVsIGlzIGxvYWRlZFxyXG4gICAgICovXHJcbiAgICB0aGlzLnJlbG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRhYnMuZGVzdHJveSgpO1xyXG4gICAgICAgIHRhYnMuY3JlYXRlKGRpdldvcmssIG1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZG9ja2VkSGVscCA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICB0aGlzLmlzSGVscERvY2tlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBkb2NrZWRIZWxwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZG9ja2VkSGVscCA9IGZ1bmN0aW9uKGRvY2spIHtcclxuICAgICAgICBkb2NrZWRIZWxwID0gZG9jaztcclxuICAgICAgICBpZihkb2NrZWRIZWxwKSB7XHJcbiAgICAgICAgICAgIFRvb2xzLmFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RvY2tlZC1oZWxwJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIFRvb2xzLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RvY2tlZC1oZWxwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG59XHJcbiIsImltcG9ydCB7VG9vbHN9IGZyb20gJy4vRE9NL1Rvb2xzJztcclxuXHJcbmltcG9ydCB7RmlsZU1lbnV9IGZyb20gJy4vTWVudXMvRmlsZU1lbnUnO1xyXG5pbXBvcnQge0VkaXRNZW51fSBmcm9tICcuL01lbnVzL0VkaXRNZW51JztcclxuaW1wb3J0IHtUYWJzTWVudX0gZnJvbSAnLi9NZW51cy9UYWJzTWVudSc7XHJcbmltcG9ydCB7SGVscE1lbnV9IGZyb20gJy4vTWVudXMvSGVscE1lbnUnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBwcm9ncmFtIG1lbnUgYmFyXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSBmdW5jdGlvbihtYWluKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gQ3JlYXRlIHRoZSBtZW51IGNvbXBvbmVudHNcclxuICAgIC8vXHJcbiAgICB2YXIgZmlsZU1lbnUgPSBuZXcgRmlsZU1lbnUodGhpcywgbWFpbik7XHJcbiAgICB2YXIgZWRpdE1lbnUgPSBuZXcgRWRpdE1lbnUodGhpcywgbWFpbik7XHJcbiAgICB2YXIgdGFic01lbnUgPSBuZXcgVGFic01lbnUodGhpcywgbWFpbik7XHJcbiAgICB2YXIgaGVscE1lbnUgPSBuZXcgSGVscE1lbnUodGhpcywgbWFpbik7XHJcblxyXG4gICAgdGhpcy5oZWxwTWVudSA9IGhlbHBNZW51O1xyXG5cclxuICAgIC8vLyBUaGUgbmF2IGVsZW1lbnRcclxuICAgIHRoaXMubmF2ID0gbnVsbDtcclxuICAgIHRoaXMudWwgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyA8bmF2IGNsYXNzPVwibWVudWJhclwiPjx1bD48L3VsPjwvbmF2PlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5uYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyh0aGlzLm5hdiwgJ21lbnViYXInKTtcclxuICAgICAgICBtYWluLmRpdi5hcHBlbmRDaGlsZCh0aGlzLm5hdik7XHJcblxyXG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICB0aGlzLm5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICAgICAgdGhpcy51bCA9IHVsO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIEFkZCB0aGUgbWVudSBjb21wb25lbnQncyBIVE1MXHJcbiAgICAgICAgLy9cclxuXHQgICAgbGV0IGh0bWwgPSAnJztcclxuXHJcblx0ICAgIGh0bWwgKz0gZmlsZU1lbnUuaHRtbCgpO1xyXG4gICAgICAgIGh0bWwgKz0gZWRpdE1lbnUuaHRtbCgpO1xyXG4gICAgICAgIGh0bWwgKz0gdGFic01lbnUuaHRtbCgpO1xyXG4gICAgICAgIGh0bWwgKz0gaGVscE1lbnUuaHRtbCgpO1xyXG5cclxuICAgICAgICB1bC5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgICAgICAvL1xyXG5cdCAgICAvLyBNZW51IG9wdGlvbiBmb3IgdGVzdGluZyB0aGUgVG9hc3QgZXJyb3IgcmVwb3J0aW5nIG1lY2hhbmlzbVxyXG5cdCAgICAvL1xyXG5cclxuXHQgICAgLy8gaHRtbCArPSBgPGxpPjxhIGNsYXNzPVwidG9hc3QtdGVzdFwiPlRvYXN0ITwvYT48L2xpPmA7XHJcblx0ICAgIC8vIHVsLmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHQvL1xyXG5cdCAgICAvLyB0aGlzLnRvYXN0cyA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5jbGljaygnLnRvYXN0LXRlc3QnLCAoZXZlbnQpPT4ge1xyXG4gICAgICAgIC8vIFx0dGhpcy50b2FzdHMrKztcclxuICAgICAgICAvLyBcdG1haW4udG9hc3QubWVzc2FnZSgnVG9hc3QgbWVzc2FnZSAnICsgdGhpcy50b2FzdHMpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIEluc3RhbGwgY2xpY2sgaGFuZGxlcnMgZm9yIGFsbCB0b3AtbGV2ZWwgbWVudXNcclxuICAgICAgICAvL1xyXG4gICAgICAgIGZvcihjb25zdCBub2RlIG9mIHVsLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgaWYobm9kZS50YWdOYW1lID09PSAnTEknKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgPHVsPiBpbiB0aGlzIG1lbnVcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdWxTdWIgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih1bFN1YiAhPT0gbnVsbCkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgaWYoZ2V0Q29tcHV0ZWRTdHlsZSh1bFN1YikuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAnaGlkZGVuJykge1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICBvcGVuKG5vZGUpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBhbHJlYWR5IG9wZW4sIGNsb3NlIGFsbFxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFjdGl2YXRlIGFsbCBvZiB0aGUgbWVudXNcclxuICAgICAgICBmaWxlTWVudS5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIGVkaXRNZW51LmFjdGl2YXRlKCk7XHJcbiAgICAgICAgdGFic01lbnUuYWN0aXZhdGUoKTtcclxuICAgICAgICBoZWxwTWVudS5hY3RpdmF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIExpc3RlbiB0byBrZXkgZG93biBldmVudHMgc28gd2UgY2FuIGNsb3NlIHRoZSBtZW51XHJcbiAgICAgKiBpZiB3ZSBjbGljayBvdXRzaWRlIG9mIHRoZSBtZW51IHdoaWxlIGl0IGlzIG9wZW4uXHJcblx0ICogQHBhcmFtIGV2ZW50XHJcblx0ICovXHJcblx0Y29uc3QgY2xvc2VMaXN0ZW5lciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIFNlZSBpZiB3ZSBjbGlja2VkIG9uIHNvbWUgY2hpbGQgb2YgbmF2Li4uXHJcbiAgICAgICAgbGV0IG5vZGUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICBmb3IoIDsgbm9kZSAhPT0gbnVsbDsgbm9kZSA9IG5vZGUucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBpZihub2RlID09PSB0aGlzLm5hdikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHQgICAgdGhpcy5jbG9zZUFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9wZW4gYSBtZW51XHJcbiAgICBjb25zdCBvcGVuID0gKGxpKSA9PiB7XHJcbiAgICAgICAgLy8gSGlkZSBhbnkgb3RoZXIgbWVudXNcclxuICAgICAgICBmb3IoY29uc3Qgbm9kZSBvZiB0aGlzLnVsLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgaWYobm9kZS50YWdOYW1lID09PSAnTEknKSB7XHJcblx0ICAgICAgICAgICAgY29uc3QgdWwgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcclxuICAgICAgICAgICAgICAgIGlmKHVsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMucmVtb3ZlQ2xhc3ModWwsICdtZW51LW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGFic01lbnUub3BlbmluZygpO1xyXG4gICAgICAgIGhlbHBNZW51Lm9wZW5pbmcoKTtcclxuXHJcblx0ICAgIC8vIEFuZCBvcGVuIHRoaXMgbWVudVxyXG5cdCAgICBjb25zdCB1bCA9IFRvb2xzLmNoaWxkKGxpLCAnVUwnKTtcclxuXHQgICAgaWYodWwgIT09IG51bGwpIHtcclxuXHRcdCAgICBUb29scy5hZGRDbGFzcyh1bCwgJ21lbnUtb3BlbicpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDbG9zZSBhbGwgbWVudXMgKi9cclxuICAgIHRoaXMuY2xvc2VBbGwgPSAoKSA9PiB7XHJcblx0ICAgIGZvcihjb25zdCBub2RlIG9mIHRoaXMudWwuY2hpbGROb2Rlcykge1xyXG5cdFx0ICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gJ0xJJykge1xyXG5cdFx0XHQgICAgY29uc3QgdWwgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcclxuXHRcdFx0ICAgIGlmKHVsICE9PSBudWxsKSB7XHJcblx0XHRcdFx0ICAgIFRvb2xzLnJlbW92ZUNsYXNzKHVsLCAnbWVudS1vcGVuJyk7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogRW5hYmxlIG9yIGRpc2FibGUgYSBtZW51IG9wdGlvbiBieSBzZWxlY3RvclxyXG5cdCAqIEBwYXJhbSBzZWwgU2VsZWN0b3IgZm9yIHRoZSBtZW51IG9wdGlvbiAobGlrZSAnLnRhYnMtYWRkJylcclxuXHQgKiBAcGFyYW0gZW5hYmxlIFRydWUgdG8gZW5hYmxlXHJcblx0ICovXHJcblx0dGhpcy5lbmFibGUgPSAoc2VsLCBlbmFibGUpID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy51bC5xdWVyeVNlbGVjdG9yKHNlbCk7XHJcbiAgICAgICAgaWYoZWxlbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihlbmFibGUpIHtcclxuICAgICAgICAgICAgVG9vbHMucmVtb3ZlQ2xhc3MoZWxlbWVudC5wYXJlbnROb2RlLCBcIm1lbnUtZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuYWRkQ2xhc3MoZWxlbWVudC5wYXJlbnROb2RlLCBcIm1lbnUtZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblx0LyoqXHJcbiAgICAgKiBGaW5kIGEgbWVudSBvcHRpb24gYnkgc2VsZWN0b3JcclxuXHQgKiBAcGFyYW0gc2VsXHJcblx0ICogQHJldHVybnMge0VsZW1lbnR9XHJcblx0ICovXHJcblx0dGhpcy5maW5kID0gKHNlbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVsLnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBJbnN0YWxsIGEgbWVudSBvcHRpb24gY2xpY2sgaGFuZGVyXHJcblx0ICogQHBhcmFtIHNlbCBTZWxlY3RvciBmb3IgdGhlIG1lbnUgb3B0aW9uXHJcblx0ICogQHBhcmFtIGNsb3N1cmUgVGhlIGNsb3N1cmUgdG8gY2FsbCAocGFzc2VzICdldmVudCcpXHJcblx0ICovXHJcblx0dGhpcy5jbGljayA9IChzZWwsIGNsb3N1cmUpID0+IHtcclxuXHQgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZmluZChzZWwpO1xyXG5cdCAgICBpZihlbGVtZW50ICE9PSBudWxsKSB7XHJcblx0ICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0ICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHQgICAgICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XHJcblx0ICAgICAgICAgICAgY2xvc3VyZShldmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcbn07XHJcbiIsIlxyXG5cclxuLyoqXHJcbiAqIFRoZSBFZGl0IG1lbnVcclxuICogQHBhcmFtIG1lbnUgTWVudSBvYmplY3RcclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRWRpdE1lbnUgPSBmdW5jdGlvbihtZW51LCBtYWluKSB7XHJcblxyXG4gICAgdGhpcy5odG1sID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuICc8bGk+PGE+RWRpdDwvYT4nICtcclxuICAgICAgICAgICAgJzx1bCBjbGFzcz1cImVkaXQtbWVudVwiPicgK1xyXG4gICAgICAgICAgICAnPGxpPjxhIGNsYXNzPVwiZWRpdC11bmRvXCI+PHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC1hcnJvd3JldHVybnRoaWNrLTEtd1wiPjwvc3Bhbj5VbmRvPC9hPjwvbGk+JyArXHJcbiAgICAgICAgICAgICc8bGk+PGEgY2xhc3M9XCJlZGl0LWRlbGV0ZVwiPjxzcGFuIGNsYXNzPVwiaWNvbnMtY2wgaWNvbnMtY2wtdHJhc2hcIj48L3NwYW4+RGVsZXRlPC9hPjwvbGk+JyArXHJcbiAgICAgICAgICAgICc8bGkgY2xhc3M9XCJtZW51LWRpdmlkZXJcIj4mbmJzcDs8L2xpPicgK1xyXG4gICAgICAgICAgICAnPGxpPjxhIGNsYXNzPVwiZWRpdC1wcm9wZXJ0aWVzXCI+UHJvcGVydGllczwvYT48L2xpPicgK1xyXG4gICAgICAgICAgICAnPC91bD4nICtcclxuICAgICAgICAnPC9saT4nO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgbWVudS5jbGljaygnLmVkaXQtZGVsZXRlJywgKGV2ZW50KSA9PiB7XHJcblx0XHQgICAgbWFpbi5iYWNrdXAoKTtcclxuXHRcdCAgICBtYWluLmN1cnJlbnRWaWV3KCkuZGVsZXRlKCk7XHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgbWVudS5jbGljaygnLmVkaXQtdW5kbycsIChldmVudCkgPT4ge1xyXG5cdFx0ICAgIG1haW4udW5kbygpO1xyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIG1lbnUuY2xpY2soJy5lZGl0LXByb3BlcnRpZXMnLCAoZXZlbnQpID0+IHtcclxuXHRcdCAgICBpZiAobWFpbi5jdXJyZW50VmlldygpLnNlbGVjdGlvbi5zZWxlY3Rpb24ubGVuZ3RoID09PSAxICYmXHJcblx0XHRcdCAgICAobWFpbi5jdXJyZW50VmlldygpLnNlbGVjdGlvbi5zZWxlY3Rpb25bMF0gaW5zdGFuY2VvZiBDb21wb25lbnQpKSB7XHJcblx0XHRcdCAgICB2YXIgY29tcG9uZW50ID0gbWFpbi5jdXJyZW50VmlldygpLnNlbGVjdGlvbi5zZWxlY3Rpb25bMF07XHJcblx0XHRcdCAgICBjb21wb25lbnQucHJvcGVydGllcyhtYWluKTtcclxuXHRcdCAgICB9XHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT09ICdEZWxldGUnKSB7XHJcbiAgICAgICAgICAgICAgICBtZW51LmNsb3NlQWxsKCk7XHJcblx0ICAgICAgICAgICAgbWFpbi5iYWNrdXAoKTtcclxuXHQgICAgICAgICAgICBtYWluLmN1cnJlbnRWaWV3KCkuZGVsZXRlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihldmVudC5rZXkgPT09ICd6JyAmJiBldmVudC5jdHJsS2V5ICYmICFldmVudC5hbHRLZXkgJiYgIWV2ZW50LnNoaWZ0S2V5KSB7XHJcblx0ICAgICAgICAgICAgbWVudS5jbG9zZUFsbCgpO1xyXG5cdCAgICAgICAgICAgIG1haW4udW5kbygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbi8qKlxyXG4gKiBUaGUgRmlsZSBtZW51XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEZpbGVNZW51ID0gZnVuY3Rpb24obWVudSwgbWFpbikge1xyXG5cclxuICAgIHRoaXMuaHRtbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbWFpbi5vcHRpb25zO1xyXG5cclxuICAgICAgICBsZXQgZmlsZUh0bWwgPSAnJztcclxuXHJcblx0ICAgIGxldCBzYXZlQVBJID0gb3B0aW9ucy5nZXRBUEkoJ3NhdmUnKTtcclxuXHQgICAgbGV0IG9wZW5BUEkgPSBvcHRpb25zLmdldEFQSSgnb3BlbicpO1xyXG5cclxuICAgICAgICAvLyBXZSBvbmx5IGFsbG93IHRoZSBPcGVuIG1lbnUgb3B0aW9uIGlmIHRoZXJlIGlzIG5vIHN1cHBsaWVkIGZpbGVuYW1lXHJcbiAgICAgICAgaWYob3BlbkFQSSAhPT0gbnVsbCAmJiBvcGVuQVBJLm5hbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmaWxlSHRtbCArPVxyXG4gICAgICAgICAgICAgICAgJzxsaT48YSBjbGFzcz1cImZpbGUtb3BlblwiPjxzcGFuIGNsYXNzPVwiaWNvbnMtY2wgaWNvbnMtY2wtZm9sZGVyLW9wZW5cIj48L3NwYW4+T3Blbi4uLjwvYT48L2xpPic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJbmNsdWRlIHRoZSBTYXZlIG1lbnUgb3B0aW9uIGlmIHdlIGFyZSBzdXBwb3J0aW5nIHNhdmVcclxuICAgICAgICBpZihzYXZlQVBJICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZpbGVIdG1sICs9XHJcbiAgICAgICAgICAgICAgICAnPGxpPjxhIGNsYXNzPVwiZmlsZS1zYXZlXCI+PHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC1kaXNrXCI+PC9zcGFuPlNhdmU8L2E+PC9saT4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2F2ZS1hcyBvbmx5IGlmIHRoZXJlIGlzIG5vIHNwZWNpZmljIGZpbGVuYW1lIHRvIHVzZVxyXG4gICAgICAgIGlmKHNhdmVBUEkgIT09IG51bGwgJiYgc2F2ZUFQSS5uYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZmlsZUh0bWwgKz1cclxuICAgICAgICAgICAgICAgICc8bGk+PGEgY2xhc3M9XCJmaWxlLXNhdmVhc1wiPjxzcGFuIGNsYXNzPVwiaWNvbnMtY2wgaWNvbnMtY2wtZGlza1wiPjwvc3Bhbj5TYXZlIEFzLi4uPC9hPjwvbGk+JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEltcG9ydC9FeHBvcnQgb3B0aW9uc1xyXG4gICAgICAgIGlmKG9wdGlvbnMuZXhwb3J0ICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgaWYoZmlsZUh0bWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZmlsZUh0bWwgKz0gJzxsaSBjbGFzcz1cIm1lbnUtZGl2aWRlclwiPiZuYnNwOzwvbGk+JzsgICAgICAgLy8gU2VwYXJhdG9yXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuZXhwb3J0ID09PSAnYm90aCcgfHwgb3B0aW9ucy5leHBvcnQgPT09ICdpbXBvcnQnKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlSHRtbCArPSAnPGxpPjxhIGNsYXNzPVwiZmlsZS1pbXBvcnRcIj48c3BhbiBjbGFzcz1cImljb25zLWNsIGljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtblwiPjwvc3Bhbj5JbXBvcnQ8L2E+PC9saT4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmV4cG9ydCA9PT0gJ2JvdGgnIHx8IG9wdGlvbnMuZXhwb3J0ID09PSAnZXhwb3J0Jykge1xyXG4gICAgICAgICAgICAgICAgZmlsZUh0bWwgKz0gJzxsaT48YSBjbGFzcz1cImZpbGUtZXhwb3J0XCI+PHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLXNcIj48L3NwYW4+RXhwb3J0PC9hPjwvbGk+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYob3B0aW9ucy5pbXBvcnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyAgICAgZmlsZUh0bWwgKz0gJzxsaSBjbGFzcz1cIm1lbnUtZGl2aWRlclwiPiZuYnNwOzwvbGk+JyArXHJcbiAgICAgICAgLy8gICAgICAgICAnPGxpPjxhIGNsYXNzPVwiZmlsZS1pbXBvcnQtdGFiXCI+PHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLW5cIj48L3NwYW4+SW1wb3J0IFRhYjwvYT48L2xpPic7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBpZihvcHRpb25zLmV4aXQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYoZmlsZUh0bWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZmlsZUh0bWwgKz0gJzxsaSBjbGFzcz1cIm1lbnUtZGl2aWRlclwiPiZuYnNwOzwvbGk+JzsgICAgICAgLy8gU2VwYXJhdG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlsZUh0bWwgKz0gJzxsaT48YSBocmVmPVwiJyArIG9wdGlvbnMuZXhpdCArICdcIj5FeGl0PC9hPjwvbGk+JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGZpbGVIdG1sICE9PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJzxsaT48YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+RmlsZTwvYT48dWwgY2xhc3M9XCJmaWxlLW1lbnVcIj4nICtcclxuICAgICAgICAgICAgICAgIGZpbGVIdG1sICsgJzwvdWw+PC9saT4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1lbnUuY2xpY2soJy5maWxlLWltcG9ydCcsIChldmVudCkgPT4ge1xyXG5cdCAgICAgICAgbWFpbi5pbXBvcnQoKTtcclxuICAgICAgICB9KTtcclxuXHJcblx0ICAgIG1lbnUuY2xpY2soJy5maWxlLWV4cG9ydCcsIChldmVudCkgPT4ge1xyXG5cdFx0ICAgIG1haW4uZXhwb3J0KCk7XHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgbWVudS5jbGljaygnLmZpbGUtc2F2ZWFzJywgKGV2ZW50KSA9PiB7XHJcblx0XHQgICAgbWFpbi5zYXZlQXMoKTtcclxuXHQgICAgfSk7XHJcblxyXG5cdCAgICBtZW51LmNsaWNrKCcuZmlsZS1zYXZlJywgKGV2ZW50KSA9PiB7XHJcblx0XHQgICAgbWFpbi5zYXZlKCk7XHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgbWVudS5jbGljaygnLmZpbGUtb3BlbicsIChldmVudCkgPT4ge1xyXG5cdFx0ICAgIG1haW4ub3BlbigpO1xyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIG1lbnUuY2xpY2soJy5maWxlLWltcG9ydC10YWInLCAoZXZlbnQpID0+IHtcclxuXHRcdCAgICBtYWluLmltcG9ydF90YWIoKTtcclxuXHQgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtBYm91dERpYWxvZ30gZnJvbSAnLi4vRGxnL0Fib3V0RGlhbG9nJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgaGVscCBtZW51XHJcbiAqIEBwYXJhbSBtZW51XHJcbiAqIEBwYXJhbSBtYWluXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEhlbHBNZW51ID0gZnVuY3Rpb24obWVudSwgbWFpbikge1xyXG5cclxuICAgIHRoaXMuaHRtbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAnPGxpPjxhPkhlbHA8L2E+JyArXHJcbiAgICAgICAgICAgICc8dWwgY2xhc3M9XCJoZWxwLW1lbnVcIj4nICtcclxuICAgICAgICAgICAgJzxsaT48YSBjbGFzcz1cImhlbHAtYWJvdXRcIj5BYm91dC4uLjwvYT48L2xpPicgK1xyXG4gICAgICAgICAgICAnPC91bD4nICtcclxuICAgICAgICAgICAgJzwvbGk+JztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIG1lbnUuY2xpY2soJy5oZWxwLWFib3V0JywgKGV2ZW50KSA9PiB7XHJcblx0XHQgICAgdmFyIGRsZyA9IG5ldyBBYm91dERpYWxvZyhtYWluKTtcclxuXHRcdCAgICBkbGcub3BlbigpO1xyXG5cdCAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9wZW5pbmcgPSBmdW5jdGlvbigpIHtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1RhYkFkZERsZ30gZnJvbSAnLi4vRGxnL1RhYkFkZERsZy5qcyc7XHJcbmltcG9ydCBNZXNzYWdlRGlhbG9nIGZyb20gJy4uL0RsZy9NZXNzYWdlRGlhbG9nLmpzJztcclxuaW1wb3J0IHtUYWJQcm9wZXJ0aWVzRGxnfSBmcm9tICcuLi9EbGcvVGFiUHJvcGVydGllc0RsZy5qcyc7XHJcblxyXG4vKipcclxuICogVGhlIFRhYnMgbWVudVxyXG4gKiBAcGFyYW0gbWVudVxyXG4gKiBAcGFyYW0gbWFpblxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBUYWJzTWVudSA9IGZ1bmN0aW9uKG1lbnUsIG1haW4pIHtcclxuXHJcbiAgICB0aGlzLmh0bWwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gYDxsaT48YT5UYWJzPC9hPlxyXG48dWwgY2xhc3M9XCJ0YWJzLW1lbnVcIj5cclxuPGxpPjxhIGNsYXNzPVwidGFicy1wcm9wZXJ0aWVzXCI+PHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC13cmVuY2hcIj48L3NwYW4+UHJvcGVydGllcy4uLjwvYT48L2xpPlxyXG48bGk+PGEgY2xhc3M9XCJ0YWJzLWFkZFwiPjxzcGFuIGNsYXNzPVwiaWNvbnMtY2wgaWNvbnMtY2wtcGxheVwiPjwvc3Bhbj5BZGQuLi48L2E+PC9saT5cclxuPGxpPjxhIGNsYXNzPVwidGFicy1kZWxldGVcIj48c3BhbiBjbGFzcz1cImljb25zLWNsIGljb25zLWNsLWNsb3NlXCI+PC9zcGFuPkRlbGV0ZS4uLjwvYT48L2xpPlxyXG48L3VsPlxyXG48L2xpPmA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gbWFpbi50YWJzLmN1cnJlbnRDaXJjdWl0KCk7XHJcbiAgICAgICAgaWYoY3VycmVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGxnID0gbmV3IE1lc3NhZ2VEaWFsb2coXCJBcmUgeW91IHN1cmU/XCIsICc8cCBjbGFzcz1cImxhcmdlXCI+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvICcgK1xyXG4gICAgICAgICAnZGVsZXRlIHRoZSB0YWIgPGVtPicgKyBjdXJyZW50LmdldE5hbWUoKSArICc8L2VtPj88L3A+JywgMjAwKTtcclxuICAgICAgICBkbGcub3BlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIG1haW4udGFicy5kZWxBY3RpdmUoKTtcclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5hY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdCAgICBtZW51LmNsaWNrKCcudGFicy1hZGQnLCAoZXZlbnQpID0+IHtcclxuXHRcdCAgICBsZXQgZGxnID0gbmV3IFRhYkFkZERsZyhtYWluLnRhYnMpO1xyXG5cdFx0ICAgIGRsZy5vcGVuKCk7XHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgbWVudS5jbGljaygnLnRhYnMtZGVsZXRlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGRlbCgpO1xyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIG1lbnUuY2xpY2soJy50YWJzLXByb3BlcnRpZXMnLCAoZXZlbnQpID0+IHtcclxuXHRcdCAgICBsZXQgZGxnID0gbmV3IFRhYlByb3BlcnRpZXNEbGcobWFpbi50YWJzKTtcclxuXHRcdCAgICBkbGcub3BlbigpO1xyXG5cdCAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIG1lbnVzIGFyZSBvcGVuaW5nLlxyXG4gICAgICogU2V0IHRoZSBzdGF0ZSBvZiB0aGUgbWVudSBzbyBpdCB3aWxsIGJlIHZhbGlkIHdoZW4gc2hvd24uXHJcbiAgICAgKi9cclxuICAgIHRoaXMub3BlbmluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyAgbWVudS5lbmFibGUoJy50YWJzLWRlbGV0ZScsIG1haW4udGFicy5hY3RpdmUgPiAwKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLyoqXHJcbiAqIFVzZXIgaW50ZXJmYWNlIG9wdGlvbnMuXHJcbiAqIEBwYXJhbSBvcHRpb25zIFVzZXIgcHJvdmlkZWQgb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHt9O1xyXG5cclxuICAgIC8vLyBEaXNwbGF5IG9wdGlvbnNcclxuICAgIC8vLyB3aW5kb3cgLSBEaXNwbGF5cyBhcyBhIHN0YW5kYXJkIGRpdiAoZGVmYXVsdClcclxuICAgIC8vLyBmdWxsIC0gRnVsbCBzY3JlZW5cclxuICAgIHRoaXMuZGlzcGxheSA9ICd3aW5kb3cnO1xyXG5cclxuICAgIC8vLyBBbnkgY29udGVudCAoSlNPTikgdG8gcHJlbG9hZFxyXG4gICAgdGhpcy5sb2FkID0gbnVsbDtcclxuXHJcbiAgICAvLy8gQW55IGFkZGl0aW9uYWwgdGFicyB0byBhZGRcclxuICAgIC8vLyBEbyBub3QgaW5jbHVkZSBcIm1haW5cIiwgaXQgaXMgYWx3YXlzIGluY2x1ZGVkXHJcbiAgICB0aGlzLnRhYnMgPSBbXTtcclxuXHJcbiAgICAvLy8gRG8gd2UgaW5jbHVkZSB0aGUgaW5wdXQvZXhwb3J0IG1lbnUgb3B0aW9ucz9cclxuICAgIC8vLyBPcHRpb25zIGFyZTogJ25vbmUnLCAnaW1wb3J0JywgJ2V4cG9ydCcsICdib3RoJ1xyXG4gICAgdGhpcy5leHBvcnQgPSAnYm90aCc7XHJcblxyXG4gICAgLy8vIE51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0ZXN0c1xyXG4gICAgLy8vIFNldCBsYXJnZXIgdG8gc2xvdyB0aGUgdGVzdHMgZG93blxyXG4gICAgdGhpcy50ZXN0VGltZSA9IDE3O1xyXG5cclxuICAgIC8vLyBBIHVzZXIgSUQgYXNzb2NpYXRlZCB3aXRoIHNvbWUgcmVtb3RlIHN5c3RlbVxyXG4gICAgLy8vIFByaW1hcnkgdXNlZCBmb3IgQUpBWCBmaWxlL3NhdmUgZnVuY3Rpb25hbGl0eVxyXG4gICAgdGhpcy51c2VyaWQgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBBbGwgaW5zdGFsbGVkIHRlc3RzIGFzIGFuIGFycmF5IG9mIHRlc3RzLCBlYWNoIG9mXHJcbiAgICAgKiB3aGljaCByZXByZXNlbnRzIGEgc2luZ2xlIHRlc3QuIEVhY2ggdGVzdCBjYW4gYmVcclxuICAgICAqIGEgSmF2YXNjcmlwdCBvYmplY3QsIEpTT04gb2YgYW4gb2JqZWN0LCBvciBiYXNlNjQgb2ZcclxuICAgICAqIGEgSlNPTiBvYmplY3QuIFRoZSB1c2Ugb2YgYmFzZTY0IGhlbHBzIHRvIG9iZnVzY2F0ZSB0ZXN0cy5cclxuICAgICAqXHJcblx0ICogVGhlIHVuZGVybHlpbmcgdGVzdCBpcyBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGggdGhlc2UgdGFnczpcclxuXHQgKlxyXG5cdCAqIHRhZzogQSB0YWcgdG8gaWRlbnRpZnkgdGhlIHRlc3RcclxuXHQgKiBuYW1lOiBOYW1lIG9mIHRoZSB0ZXN0LCB3aGF0IHdpbGwgYXBwZWFyIGluIG1lbnVzXHJcblx0ICogaW5wdXQ6IEFycmF5IG9mIGlucHV0IGxhYmVsc1xyXG5cdCAqIG91dHB1dDogQXJyYXkgb2Ygb3V0cHV0IGxhYmVsc1xyXG5cdCAqIHRlc3Q6IEFycmF5IG9mIHRlc3RzLCBlYWNoIGFuIGFycmF5IG9mIGlucHV0L2V4cGVjdGVkXHJcblx0ICogc3RhZmY6IHRydWUgaWYgdGhpcyBpcyBzdGFmZiB0ZXN0aW5nIChubyBzYXZpbmcpXHJcbiAgICAgKiByZXN1bHQ6IEEgcmVzdWx0cyBzZWxlY3RvclxyXG4gICAgICogY2lyY3VpdDogQSBjaXJjdWl0IHNlbGVjdG9yXHJcbiAgICAgKiBzdWNjZXNzOiBBIHZhbHVlIHRvIHNldCB0aGUgcmVzdWx0cyBzZWxlY3RvciB0byBvbiBhIHN1Y2Nlc3NcclxuICAgICAqXHJcbiAgICAgKiBJZiByZXN1bHQgaXMgc2V0LCBhbnkgZWxlbWVudCB0aGF0IG1hdGNoZXMgdGhhdCBzZWxlY3RvciB3aWxsXHJcbiAgICAgKiBiZSBzZXQgdG8gMCBvciB0aGUgdmFsdWUgb2YgJ3N1Y2Nlc3MnIGRlcGVuZGluZyBvbiB0aGUgdGVzdCBmYWlsdXJlL3N1Y2Nlc3NcclxuICAgICAqXHJcbiAgICAgKiBJZiBjaXJjdWl0IGlzIHNldCwgYW55IGVsZW1lbnQgdGhhdCBtYXRjaGVzIHRoYXQgc2VsZWN0b3Igd2lsbFxyXG4gICAgICogaGF2ZSBpdHMgdmFsdWUgc2V0IHRvIHRoZSBjdXJyZW50IGNpcmN1aXQgd2hlbiB0aGUgdGVzdCBpcyBzZWxlY3RlZC5cclxuXHQgKi9cclxuICAgIHRoaXMudGVzdHMgPSBbXTtcclxuXHJcbiAgICAvLy8gQW55IGltcG9ydCBvcHRpb25zLCBpbXBvcnRpbmcgZnJvbVxyXG4gICAgLy8vIGZpbGVzIGZyb20gb3RoZXIgYXNzaWdubWVudHNcclxuICAgLy8gdGhpcy5pbXBvcnRzID0gW107XHJcblxyXG4gICAgLy8vIE9wdGlvbmFsIHNwZWNpZmljYXRpb24gb2Ygc2VydmVyLXNpZGUgQVBJIGZvciBzYXZlL2xvYWQgY2FwYWJpbGl0aWVzXHJcbiAgICAvLy8gTW9zdCBzaW1wbGUgdmVyc2lvbiBpcyBhIFVSTCBmb3IgdGhlIHNlcnZlci5cclxuICAgIC8vLyBNb3JlIGFkdmFuY2VkIHZlcnNpb24gaXMgYW4gb2JqZWN0IHdpdGggdGhlc2Ugb3B0aW9uYWwgcHJvcGVydGllczpcclxuICAgIC8vL1xyXG4gICAgLy8vIHVybCAtIFNlcnZlciBVUkxcclxuICAgIC8vLyBleHRyYSAtIE9iamVjdCB3aXRoIGV4dHJhIGRhdGEgdG8gYmUgc2VuZCB3aXRoIEFQSSBvcGVyYXRpb25zXHJcbiAgICAvLy8gc2F2ZSAtIE9iamVjdCB3aXRoIHNhdmUtc3BlY2lmaWMgcmVzb3VyY2VzICh1cmwsIG5hbWUsIG1vZGUsIGV4dHJhKVxyXG4gICAgLy8vIG9wZW4gLSBPYmplY3Qgd2l0aCBvcGVuLXNwZWNpZmljIHJlc291cmNlcyAodXJsLCBleHRyYSlcclxuICAgIC8vLyBmaWxlcyAtIE9iamVjdCB3aXRoIGRpcmVjdG9yeSBxdWVyeS1zcGVjaWZpYyByZXNvdXJjZXNcclxuICAgIC8vL1xyXG4gICAgdGhpcy5hcGkgPSBudWxsO1xyXG5cclxuICAgIC8vLyBPcHRpb25hbCBleGl0IGxpbmsuIElmIHByb3ZpZGVkLCB0aGUgbWVudSB3aWxsIGhhdmUgYW4gXCJFeGl0XCIgb3B0aW9uXHJcbiAgICAvLy8gd2l0aCB0aGlzIGxpbmsgaW4gaXQuXHJcbiAgICB0aGlzLmV4aXQgPSBudWxsO1xyXG5cclxuICAgIC8vLyBJbmRpY2F0aW9uIG9mIHdoYXQgY29tcG9uZW50cyBhcmUgaW5jbHVkZWQgaW4gdGhlIHBhbGV0dGUuXHJcbiAgICAvLy8gVGhpcyBjYW4gYmU6XHJcbiAgICAvLy8gQSBzdHJpbmcgd2l0aCBhIHBhbGV0dGUgbmFtZVxyXG4gICAgLy8vIFtvcl0gQW4gYXJyYXkgY29udGFpbmluZyBzdHJpbmdzIHRoYXQgbmFtZSBjb21wb25lbnRzXHJcbiAgICAvLy8gb3IgcGFsZXR0ZSBuYW1lcy5cclxuICAgIC8vL1xyXG4gICAgLy8vIEV4YW1wbGVzOlxyXG4gICAgLy8vIGNvbXBvbmVudHM6ICdjb21iaW5hdG9yaWFsJ1xyXG4gICAgLy8vIGNvbXBvbmVudHM6IFsnY29tYmluYXRvcmlhbCcsICdPcjMnLCAnT3I0J11cclxuICAgIC8vLyBjb21wb25lbnRzOiBbJ3NlcXVlbnRpYWwnXVxyXG4gICAgLy8vXHJcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBbJ2NvbWJpbmF0b3JpYWwnLCAnc2VxdWVudGlhbCddO1xyXG5cclxuICAgIC8vLyBMaXN0IG9mIGNvbXBvbmVudHMgdGhhdCBhcmUgYWx3YXlzIGluY2x1ZGVkIGV2ZW4gaWYgc3BlY2lmaWMgY29tcG9uZW50cyBhcmVcclxuICAgIC8vLyBzcGVjaWZpZWQgaW4gdGhpcy5jb21wb25lbnRzLlxyXG4gICAgdGhpcy5hbHdheXMgPSBbJ1plcm8nLCAnT25lJywgJ0luUGluJywgJ091dFBpbicsICdDbG9jaycsICdCdXR0b24nLCAnTEVEJ107XHJcblxyXG5cclxuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb24gXCIgKyBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIEFQSSBvcGVyYXRpb25zIGZvciBhIGdpdmVuIGZpbGUgbW9kZS5cclxuICAgICAqIEBwYXJhbSBtb2RlICdzYXZlJywgJ29wZW4nXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXRBUEkgPSBmdW5jdGlvbihtb2RlKSB7XHJcbiAgICAgICAgaWYodGhpcy5hcGkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmFwaSA9PT0gT2JqZWN0KHRoaXMuYXBpKSkge1xyXG4gICAgICAgICAgICBsZXQgb2JqO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5hcGlbbW9kZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gXHJcbiAgICAgICAgICAgICAgICAvLyBNb2RlIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXHJcbiAgICAgICAgICAgICAgICB2YXIgbW9kZU9iaiA9IHRoaXMuYXBpW21vZGVdO1xyXG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai51cmwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1vZGUgaXMgbm90IHN1cHBvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNlbmQgY29udGVudCB0eXBlXHJcbiAgICAgICAgICAgICAgICBvYmogPSB7dXJsOiBtb2RlT2JqLnVybH07XHJcbiAgICAgICAgICAgICAgICBpZihtb2RlT2JqLmNvbnRlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouY29udGVudFR5cGUgPSBtb2RlT2JqLmNvbnRlbnRUeXBlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuYXBpLmNvbnRlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouY29udGVudFR5cGUgPSB0aGlzLmFwaS5jb250ZW50VHlwZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai5leHRyYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0gbW9kZU9iai5leHRyYTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmFwaS5leHRyYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0gdGhpcy5hcGkuZXh0cmE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKG1vZGVPYmoubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLm5hbWUgPSBtb2RlT2JqLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5hcGkubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLm5hbWUgPSB0aGlzLmFwaS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcGkudXJsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvYmogPSB7dXJsOiB0aGlzLmFwaS51cmx9O1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcGkuZXh0cmEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHRoaXMuYXBpLmV4dHJhO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFwaS5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoubmFtZSA9IHRoaXMuYXBpLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt1cmw6IHRoaXMuYXBpfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtUYWJzfSBmcm9tICcuL1RhYnMnO1xyXG5cclxuLyoqXHJcbiAqIEEgUGFuZSBpcyBhbiBhcmVhIG9mIHRoZSBJREUgc2NyZWVuIHRoYXQgZWl0aGVyIGNvbnRhaW5zIGEgdGFiIHNldCBvciB0d28gY2hpbGQgcGFuZXMuXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdGhhdCBpcyB0aGUgaG9zdCBmb3IgdGhlIHBhbmVcclxuICogQHBhcmFtIHBhcmVudCBQYW5lIHBhcmVudCBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUGFuZSA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQsIHBhcmVudCwgZG9ub3JUYWJzKSB7XHJcblx0dGhpcy5taW5TcGxpdCA9IDEwO1xyXG5cdHRoaXMubWF4U3BsaXQgPSA5MDtcclxuXHJcblx0bGV0IGRpdiA9IG51bGwsIGNoaWxkMSA9IG51bGwsIGNoaWxkMiA9IG51bGw7XHJcblx0bGV0IGhvcml6b250YWxTcGxpdCA9IG51bGw7XHJcblx0bGV0IHRhYnMgPSBudWxsO1xyXG5cclxuXHRjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG5cdFx0Ly9cclxuXHRcdC8vIENyZWF0ZSBhbmQgYWRkIHRoZSBkaXZcclxuXHRcdC8vXHJcblxyXG5cdFx0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmRpdiA9IGRpdjtcclxuXHJcblx0XHRpZihwYXJlbnQgPT09IG51bGwpIHtcclxuXHRcdFx0ZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtcm9vdCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcblx0XHRpZihkb25vclRhYnMgIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZG9ub3JUYWJzKTtcclxuXHRcdFx0dGFicyA9IGRvbm9yVGFicztcclxuXHRcdFx0dGFicy5uZXdQYXJlbnQodGhpcyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0YWJzID0gbmV3IFRhYnMobWFpbiwgZGl2KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRoaXMuc3BsaXQgPSBmdW5jdGlvbihob3Jpem9udGFsKSB7XHJcblx0XHRob3Jpem9udGFsU3BsaXQgPSBob3Jpem9udGFsO1xyXG5cclxuXHRcdGNoaWxkMSA9IG5ldyBQYW5lKG1haW4sIGRpdiwgdGhpcywgdGFicyk7XHJcblx0XHRjaGlsZDIgPSBuZXcgUGFuZShtYWluLCBkaXYsIHRoaXMsIG51bGwpO1xyXG5cclxuXHRcdHRhYnMgPSBudWxsO1xyXG5cclxuXHRcdGlmKGhvcml6b250YWwpIHtcclxuXHRcdFx0Y2hpbGQxLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLWxlZnQnKTtcclxuXHRcdFx0Y2hpbGQyLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLXJpZ2h0Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkaXYuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xyXG5cdFx0XHRjaGlsZDEuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtdG9wJyk7XHJcblx0XHRcdGNoaWxkMi5kaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1ib3R0b20nKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGJhci5jbGFzc0xpc3QuYWRkKCdjbC1iYXInKTtcclxuXHRcdGNoaWxkMS5kaXYuYXBwZW5kQ2hpbGQoYmFyKTtcclxuXHJcblx0XHRiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHN0YXJ0RHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlKTtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRiYXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coZXZlbnQpO1xyXG5cclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdHN0YXJ0RHJhZ2dpbmcodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHJcblxyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZSk7XHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEVuZCk7XHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaENhbmNlbCk7XHJcblx0XHR9KTtcclxuXHJcblxyXG5cclxuXHRcdHRoaXMuY2hpbGQxID0gY2hpbGQxO1xyXG5cdFx0dGhpcy5jaGlsZDIgPSBjaGlsZDI7XHJcblxyXG5cdFx0dGhpcy5wZXJjZW50YWdlKDUwKTtcclxuXHJcblx0XHRyZXR1cm4ge2NoaWxkMTogY2hpbGQxLCBjaGlsZDI6IGNoaWxkMn07XHJcblx0fVxyXG5cclxuXHRsZXQgc3RhcnRYID0gbnVsbCwgc3RhcnRZID0gbnVsbDtcclxuXHJcblx0Y29uc3Qgc3RhcnREcmFnZ2luZyA9ICh4LCB5KSA9PiB7XHJcblx0XHRzdGFydFggPSB4O1xyXG5cdFx0c3RhcnRZID0geTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGVuZERyYWdnaW5nID0gKCkgPT4ge1xyXG5cdFx0c3RhcnRYID0gbnVsbDtcclxuXHRcdHN0YXJ0WSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHJcblx0Y29uc3QgZHJhZ2dpbmcgPSAoeCwgeSkgPT4ge1xyXG5cdFx0Y29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cclxuXHRcdGlmKGhvcml6b250YWxTcGxpdCkge1xyXG5cdFx0XHRjb25zdCBtYWluWCA9IHJlY3QubGVmdCArIGVsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldDtcclxuXHRcdFx0Y29uc3Qgd2lkID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdDtcclxuXHRcdFx0aWYod2lkIDw9IDApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHBlciA9ICh4IC0gbWFpblgpIC8gd2lkICogMTAwO1xyXG5cdFx0XHR0aGlzLnBlcmNlbnRhZ2UocGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IG1haW5ZID0gcmVjdC50b3AgICsgZWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRjb25zdCBoaXQgPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xyXG5cdFx0XHRpZihoaXQgPD0gMCkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgcGVyID0gKHkgLSBtYWluWSkgLyBoaXQgKiAxMDA7XHJcblx0XHRcdHRoaXMucGVyY2VudGFnZShwZXIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgbW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGlmKGV2ZW50LndoaWNoID09PSAwKSB7XHJcblx0XHRcdG1vdXNlVXAoZXZlbnQpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0ZHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdXNlVXAgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZSk7XHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwKTtcclxuXHRcdGVuZERyYWdnaW5nKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB0b3VjaE1vdmUgID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRkcmFnZ2luZyh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdG91Y2hFbmQgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdGRyYWdnaW5nKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblxyXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmUpO1xyXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kKTtcclxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaENhbmNlbCk7XHJcblxyXG5cdFx0ZW5kRHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHRvdWNoQ2FuY2VsID0gKGV2ZW50KSA9PiB7XHJcblx0XHR0b3VjaEVuZChldmVudCk7XHJcblx0fVxyXG5cclxuXHR0aGlzLnBlcmNlbnRhZ2UgPSBmdW5jdGlvbihwZXIpIHtcclxuXHRcdGlmKHBlciA8IHRoaXMubWluU3BsaXQpIHtcclxuXHRcdFx0cGVyID0gdGhpcy5taW5TcGxpdDtcclxuXHRcdH0gZWxzZSBpZihwZXIgPiB0aGlzLm1heFNwbGl0KSB7XHJcblx0XHRcdHBlciA9IHRoaXMubWF4U3BsaXQ7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoaG9yaXpvbnRhbFNwbGl0KSB7XHJcblx0XHRcdGNoaWxkMS5kaXYuc3R5bGUud2lkdGggPSBwZXIgKyAnJSc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjaGlsZDEuZGl2LnN0eWxlLmhlaWdodCA9IHBlciArICclJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbn0iLCJpbXBvcnQge01haW59IGZyb20gJy4vTWFpbic7XHJcbmltcG9ydCB7T3B0aW9uc30gZnJvbSAnLi9PcHRpb25zJztcclxuaW1wb3J0IHtSZWFkeX0gZnJvbSAnLi9VdGlsaXR5L1JlYWR5JztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIFBsYXlncm91bmRcclxuICpcclxuICogVGhpcyBjcmVhdGVzIGEgc2luZ2xlIEluc3RhbmNlIHRoYXQgbWFuYWdlcyB0aGVcclxuICogY29tcG9uZW50cyBhbmQgc3RhcnRzIGFjdHVhbCBQbGF5Z3JvdW5kIHdpbmRvd3MuXHJcbiAqXHJcbiAqIENvbnN0cnVjdCBhbmQgc3RhcnQgcnVubmluZyBsaWtlIHRoaXM6XHJcbiAqXHJcbiAqIEdpdmVuIGFuIEhUTUwgZGl2OlxyXG4gKiAgICAgPGRpdiBpZD1cInBsYXlncm91bmRcIj48L2Rpdj5cclxuICpcclxuICogVGhlIGZvbGxvd2luZyBzY3JpcHQgc3RhcnRzIFBsYXlncm91bmQgaW4gdGhhdCBkaXY6XHJcbiAqXHJcbiAqICAgICB2YXIgcGxheWdyb3VuZCA9IG5ldyBQbGF5Z3JvdW5kKCcjcGxheWdyb3VuZCcpO1xyXG4gKiAgICAgcGxheWdyb3VuZC5zdGFydCgpO1xyXG4gKlxyXG4gKiBAcGFyYW0gc2VsIFNlbGVjdG9yIG9yIGVsZW1lbnQgdG8gY3JlYXRlIFBsYXlncm91bmQgaW4gKGNhbiBiZSBtYW55KVxyXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvYmplY3QgY29udGFpbmluZyBQbGF5Z3JvdW5kIG9wdGlvbnMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBsYXlncm91bmQgPSBmdW5jdGlvbihzaXRlLCBzZWwsIG9wdGlvbnMpIHtcclxuICAgIC8vXHJcbiAgICAvLyBNYXN0ZXIgc2V0IG9mIHRoZSB2ZXJzaW9uXHJcbiAgICAvL1xyXG4gICAgbGV0IFBBQ0tBR0UgPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKTtcclxuICAgIHRoaXMudmVyc2lvbiA9IFBBQ0tBR0UudmVyc2lvbjtcclxuXHJcbiAgICB0aGlzLnNpdGUgPSBzaXRlO1xyXG5cclxuICAgIC8vIFJlY29yZCB0aGUgc2VsZWN0b3JcclxuICAgIHRoaXMuc2VsID0gc2VsO1xyXG5cclxuICAgIC8vIFRoZSBPcHRpb25zIG9iamVjdCB0aGF0IG1hbmFnZXMgdXNlciBvcHRpb25zXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcclxuXHJcbiAgICAvLyBBIGNvbGxlY3Rpb24gb2YgTWFpbiBvYmplY3RzLlxyXG4gICAgdmFyIG1haW5zID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCB0aGUgUGxheWdyb3VuZCBydW5uaW5nLCBjcmVhdGluZyB0aGUgdXNlciBpbnRlcmZhY2UuXHJcbiAgICAgKiBUaGlzIGRvZXMgd2FpdCBmb3IgZG9jdW1lbnQgcmVhZHkgYmVmb3JlIGNhbGxpbmdcclxuICAgICAqIHRoaXMuc3RhcnROb3coKSB1bmxlc3Mgd2UgYXJlIHJ1bm5pbmcgaW4gbm8td2luZG93XHJcbiAgICAgKiBtb2RlLiBJbiB0aGF0IGNhc2UgaXQgcmV0dXJucyBhIHN0YXJ0ZWQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc2VsID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0Tm93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZWFkeS5nbygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnROb3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHRoZSBQbGF5Z3JvdW5kIHJ1bm5pbmcgbm93LiBEb2VzIG5vdCB3YWl0IGZvciBkb2N1bWVudCByZWFkeS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5zdGFydE5vdyA9ICgpID0+IHtcclxuICAgICAgICBpZihzZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbih0aGlzLCBzZWwpO1xyXG4gICAgICAgICAgICBtYWlucy5wdXNoKG1haW4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFpbiA9IG5ldyBNYWluKHRoaXMsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgbWFpbnMucHVzaChtYWluKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobWFpbnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYWluc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7VG9vbHN9IGZyb20gJy4vRE9NL1Rvb2xzJztcclxuaW1wb3J0IG1lbnViYXJzIGZyb20gJy4uLy4uL2ltZy9tZW51YmFycy5wbmcnO1xyXG5cclxuLyoqXHJcbiAqIE1hbmFnZXMgdGhlIHRhYnMgaW4gdGhlIG1vZGVsXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBwYXJhbSBlbGVtZW50IFBhcmVudCBlbGVtZW50XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRhYnMgPSBmdW5jdGlvbihtYWluLCBlbGVtZW50KSB7XHJcbiAgICAvLy8gVGhlIGN1cnJlbnRseSBhY3RpdmUgdmlldy90YWJcclxuICAgIHRoaXMuYWN0aXZlID0gLTE7XHJcblxyXG4gICAgLy8gVGhlIGNvbGxlY3Rpb24gb2YgdGFic1xyXG4gICAgdmFyIHRhYnMgPSBbXTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gVGhlIHN0cnVjdHVyZTogPGRpdiBjbGFzcz1cImNsLXRhYnNcIj48dWw+PC91bD48ZGl2IGNsYXNzPVwiY2wtdmlld3NcIj48L2Rpdj48L2Rpdj5cclxuICAgIC8vIGRpdi50YWJzIC0gRW5jbG9zdXJlIGZvciBhbGwgdGFicyBjb250ZW50XHJcbiAgICAvLyB1bCAtIFRoZSB0YWJzIHdlIHNlbGVjdCBmcm9tXHJcbiAgICAvLyB2aWV3c0RpdiAtIFRoZSB2aWV3cyB3aXRoIHRoZSB0YWIgY29udGVudHNcclxuICAgIC8vXHJcblxyXG4gICAgbGV0IHRhYnNEaXYgPSBudWxsLCB1bCA9IG51bGwsIHZpZXdzRGl2ID0gbnVsbDtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBDcmVhdGUgdGhlIHRhYnMgc3lzdGVtXHJcblx0ICogQHBhcmFtIGRpdiBUaGUgZGl2IHdlIHB1dCB0aGUgdGFicyBpbnRvXHJcblx0ICovXHJcblx0dGhpcy5jcmVhdGUgPSAoZGl2KSA9PiB7XHJcbiAgICAgICAgLy8gQ3JlYXRlOiA8ZGl2IGNsYXNzPVwiY2wtdGFic1wiPjx1bD48L3VsPjxkaXYgY2xhc3M9XCJjbC12aWV3c1wiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgIHRhYnNEaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdjbC10YWJzJyk7XHJcbiAgICAgICAgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIHRhYnNEaXYuYXBwZW5kQ2hpbGQodWwpO1xyXG5cclxuICAgICAgICB2aWV3c0RpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXZpZXdzJyk7XHJcbiAgICAgICAgdGFic0Rpdi5hcHBlbmRDaGlsZCh2aWV3c0Rpdik7XHJcblxyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0YWJzRGl2KTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgdGhlIHRhYnMgY29sbGVjdGlvblxyXG4gICAgICAgIHRhYnMgPSBbXTtcclxuXHJcblx0XHR0aGlzLmFkZCgncHJvZ3JhbScpO1xyXG5cdFx0dGhpcy5hZGQoJ291dHB1dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmV3UGFyZW50ID0gZnVuY3Rpb24ocGFuZSkge1xyXG5cdFx0cGFuZS5kaXYuYXBwZW5kQ2hpbGQodGFic0Rpdik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGQgPSBmdW5jdGlvbih0aXRsZSkge1xyXG5cdCAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdCAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHQgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XHJcblx0ICAgIGEuaW5uZXJUZXh0ID0gdGl0bGU7XHJcblxyXG5cdCAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHQgICAgbGkuYXBwZW5kQ2hpbGQobWVudSk7XHJcblx0ICAgIC8vIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHQgICAgLy8gbWVudS5hcHBlbmRDaGlsZChpbWcpO1xyXG5cdCAgICAvLyBpbWcuc3JjID0gbWVudWJhcnM7XHJcblxyXG5cdCAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0ICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQgICAgc2VsZWN0TGkobGkpO1xyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdCAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ICAgIHNlbGVjdExpKGxpKTtcclxuXHQgICAgfSk7XHJcblxyXG5cdCAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBUaGUgbWVudVxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0ICAgIC8vIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnY2wtdGFiLW1lbnUnKTtcclxuXHQgICAgLy8gbWVudURpdi5jbGFzc0xpc3QuYWRkKCdjbC1tZW51LW9wZW4nKTtcclxuXHQgICAgLy8gbGkuYXBwZW5kQ2hpbGQobWVudURpdik7XHJcblx0ICAgIC8vXHJcblx0XHQvLyBjb25zdCBtZW51VUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdFx0Ly8gbWVudURpdi5hcHBlbmRDaGlsZChtZW51VUwpO1xyXG5cdFx0Ly8gbWVudVVMLmlubmVySFRNTCA9XHJcblx0XHQvLyBcdCc8bGk+PGEgY2xhc3M9XCJlZGl0LXVuZG9cIj48c3BhbiBjbGFzcz1cImljb25zLWNsIGljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS13XCI+PC9zcGFuPlVuZG88L2E+PC9saT4nICtcclxuXHRcdC8vIFx0JzxsaT48YSBjbGFzcz1cImVkaXQtZGVsZXRlXCI+PHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC10cmFzaFwiPjwvc3Bhbj5EZWxldGU8L2E+PC9saT4nO1xyXG5cdCAgICAvL1xyXG5cdFx0Ly8gY29uc3QgY29ubmVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0Ly8gbWVudURpdi5hcHBlbmRDaGlsZChjb25uZWN0RGl2KTtcclxuXHQgICAgLy9cclxuXHQgICAgLy8gaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblx0ICAgIC8vIGNvbm5lY3REaXYuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHQgICAgLy8gaW1nLnNyYyA9IG1lbnViYXJzO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gVGhlIHZpZXdcclxuXHQgICAgLy9cclxuXHQgICAgY29uc3QgdmlldyA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXZpZXcnKTtcclxuXHQgICAgdmlld3NEaXYuYXBwZW5kQ2hpbGQodmlldyk7XHJcblxyXG5cdCAgICB0YWJzLnB1c2goe2xpOiBsaSwgdmlldzogdmlld30pO1xyXG5cclxuXHQgICAgdGhpcy5zZWxlY3RUYWIodGFicy5sZW5ndGgtMSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBzZWxlY3RMaSA9IChsaSkgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRhYnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGFic1tpXS5saSA9PT0gbGkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFiKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2VsZWN0VGFiID0gKG51bSwgZm9yY2UpID0+IHtcclxuICAgICAgICBpZihmb3JjZSAhPT0gdHJ1ZSAmJiBudW0gPT09IHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gQ2xlYXIgYWxsIHNlbGVjdGlvbnNcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XHJcbiAgICAgICAgICAgIFRvb2xzLnJlbW92ZUNsYXNzKHRhYi5saSwgJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIFRvb2xzLnJlbW92ZUNsYXNzKHRhYi52aWV3LCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBudW07XHJcbiAgICAgICAgbGV0IHRhYiA9IHRhYnNbdGhpcy5hY3RpdmVdO1xyXG5cclxuICAgICAgICBUb29scy5hZGRDbGFzcyh0YWIubGksICdzZWxlY3RlZCcpO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzKHRhYi52aWV3LCAnc2VsZWN0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIGN1cnJlbnQgVmlldyBvYmplY3RcclxuICAgIHRoaXMuY3VycmVudFZpZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5hY3RpdmUgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhYnNbdGhpcy5hY3RpdmVdLnZpZXc7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFJldHVybiB0aGUgY3VycmVudCBDaXJjdWl0IG9iamVjdFxyXG4gICAgdGhpcy5jdXJyZW50Q2lyY3VpdCA9ICgpID0+IHtcclxuICAgICAgICBpZih0aGlzLmFjdGl2ZSA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGFic1t0aGlzLmFjdGl2ZV0uY2lyY3VpdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbXBsZW1lbnQgdW5kbyBmb3IgdGhlIHRhYnNcclxuICAgIHRoaXMudW5kbyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XHJcbiAgICAgICAgICAgIHRhYi52aWV3LnVuZG8oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IC0xO1xyXG4gICAgICAgIHRhYnNEaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWJzRGl2KTtcclxuICAgICAgICB0YWJzRGl2ID0gbnVsbDtcclxuICAgICAgICB0YWJzID0gW107XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudmFsaWRhdGVOYW1lID0gZnVuY3Rpb24obmFtZSwgc2tpcCkge1xyXG4gICAgICAgIHZhciBjaXJjdWl0cyA9IG1haW4ubW9kZWwuY2lyY3VpdHM7XHJcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBjaXJjdWl0cy5nZXRDaXJjdWl0cygpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY2lyY3VpdCA9IGNvbGxlY3Rpb25baV07XHJcbiAgICAgICAgICAgIGlmKGNpcmN1aXQgPT09IHNraXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobmFtZS50b0xvd2VyQ2FzZSgpID09PSBjaXJjdWl0LmdldE5hbWUoKS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ05hbWUgJyArIG5hbWUgKyAnIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgdGFiJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSB0aGUgYWN0aXZlIHRhYlxyXG4gICAgICogQHBhcmFtIGluZGV4XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZGVsQWN0aXZlID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5hY3RpdmUgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1haW4ubW9kZWwuZGVsZXRlQ2lyY3VpdEJ5SW5kZXgodGhpcy5hY3RpdmUpO1xyXG4gICAgICAgIHRoaXMuc3luYygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVuYW1lID0gZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgIGxldCBjaXJjdWl0ID0gdGhpcy5jdXJyZW50Q2lyY3VpdCgpO1xyXG4gICAgICAgIGNpcmN1aXQuc2V0TmFtZShuYW1lKTtcclxuICAgICAgICB0aGlzLnN5bmMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNyZWF0ZShlbGVtZW50KTtcclxufTtcclxuIiwiLyoqXHJcbiAqIERyYWcgYW5kIGRyb3Agc3VwcG9ydCBmb3IgdGhlIHBhbGV0dGVcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRHJhZ0FuZERyb3AgPSBmdW5jdGlvbihtYWluKSB7XHJcblxyXG5cdGxldCBkcmFnRWxlbWVudCA9IG51bGw7IC8vIERPTSBFbGVtZW50XHJcblx0bGV0IGRyYWdJdGVtID0gbnVsbDsgICAgLy8gUGFsZXR0ZUl0ZW1cclxuXHRsZXQgZHJvcFZpZXdzID0gW107ICAgICAvLyBWaWV3XHJcblxyXG5cdGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGlmKGV2ZW50LndoaWNoID09PSAwKSB7XHJcblx0XHRcdFx0bW91c2VVcChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bW91c2VNb3ZlKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRtb3VzZU1vdmUodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdG1vdXNlVXAoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudCkgPT4ge1xyXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdFx0bW91c2VVcCh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRtb3VzZVVwKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHRoaXMuZHJhZ2dhYmxlID0gKHBhbGV0dGVJdGVtKSA9PiB7XHJcblx0XHRwYWxldHRlSXRlbS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRjbGljayhwYWxldHRlSXRlbSk7XHJcblxyXG5cdFx0XHRtb3VzZU1vdmUoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHBhbGV0dGVJdGVtLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRjbGljayhwYWxldHRlSXRlbSk7XHJcblxyXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdFx0bW91c2VNb3ZlKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHRoaXMuZHJvcHBhYmxlID0gKHZpZXcsIGNhbGxiYWNrKSA9PiB7XHJcblx0XHRkcm9wVmlld3MucHVzaCh7XHJcblx0XHRcdCd2aWV3JzogdmlldyxcclxuXHRcdFx0J2NhbGxiYWNrJzogY2FsbGJhY2tcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xpY2sgPSAocGFsZXR0ZUl0ZW0pID0+IHtcclxuXHRcdC8vXHJcblx0XHQvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBlbGVtZW50IGFuZCBzZXQgaXQgdXAgZm9yIGRyYWdnaW5nXHJcblx0XHQvL1xyXG5cdFx0Y29uc3QgY2xvbmUgPSBwYWxldHRlSXRlbS5wYWxldHRlSW1hZ2UoKTtcclxuXHRcdG1haW4uZWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZSk7XHJcblx0XHRjbG9uZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblx0XHRjbG9uZS5zdHlsZS50b3AgPSAwO1xyXG5cdFx0Y2xvbmUuc3R5bGUubGVmdCA9IDA7XHJcblx0XHRjbG9uZS5zdHlsZS56SW5kZXggPSAxMDA7XHJcblx0XHRjbG9uZS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblxyXG5cdFx0ZHJhZ0l0ZW0gPSBwYWxldHRlSXRlbTtcclxuXHRcdGRyYWdFbGVtZW50ID0gY2xvbmU7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3VzZU1vdmUgPSAoeCwgeSkgPT4ge1xyXG5cdFx0aWYoZHJhZ0VsZW1lbnQgIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgcmVjdCA9IG1haW4uZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0Y29uc3QgbWFpblggPSByZWN0LmxlZnQgKyBtYWluLmVsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldDtcclxuXHRcdFx0Y29uc3QgbWFpblkgPSByZWN0LnRvcCAgKyBtYWluLmVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0ZHJhZ0VsZW1lbnQuc3R5bGUubGVmdCA9ICh4IC0gbWFpblggLSBkcmFnRWxlbWVudC5jbGllbnRXaWR0aCAvIDIpICsgJ3B4JztcclxuXHRcdFx0ZHJhZ0VsZW1lbnQuc3R5bGUudG9wID0gKHkgLSBtYWluWSAtIGRyYWdFbGVtZW50LmNsaWVudEhlaWdodCAvIDIpICsgJ3B4JztcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbW91c2VVcCA9ICh4LCB5KSA9PiB7XHJcblx0XHRpZihkcmFnRWxlbWVudCAhPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0Zm9yKGNvbnN0IHZpZXcgb2YgZHJvcFZpZXdzKSB7XHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHQvLyBJcyB0aGUgdmlldyBlbmFibGVkP1xyXG5cdFx0XHRcdC8vXHJcblx0XHRcdFx0Y29uc3Qgdmlld0VsZW1lbnQgPSB2aWV3LnZpZXcuZWxlbWVudDtcclxuXHRcdFx0XHRpZih2aWV3RWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL1xyXG5cdFx0XHRcdC8vIERldGVybWluZSB4LHkgaW4gdGhlIGNhbnZhc1xyXG5cdFx0XHRcdC8vXHJcblx0XHRcdFx0Y29uc3QgcmVjdCA9IHZpZXdFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdGNvbnN0IHZpZXdYID0gcmVjdC5sZWZ0ICsgdmlld0VsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldDtcclxuXHRcdFx0XHRjb25zdCB2aWV3WSA9IHJlY3QudG9wICsgdmlld0VsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHRpZih4ID49IHZpZXdYICYmXHJcblx0XHRcdFx0XHR5ID49IHZpZXdZICYmXHJcblx0XHRcdFx0XHR4IDwgdmlld1ggKyAocmVjdC5yaWdodCAtIHJlY3QubGVmdCkgJiZcclxuXHRcdFx0XHRcdHkgPCB2aWV3WSArIChyZWN0LmJvdHRvbSAtIHJlY3QudG9wKSkge1xyXG5cdFx0XHRcdFx0dmlldy5jYWxsYmFjayhkcmFnSXRlbSwgeCAtIHZpZXdYLCB5IC0gdmlld1kpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYWluLmVsZW1lbnQucmVtb3ZlQ2hpbGQoZHJhZ0VsZW1lbnQpO1xyXG5cdFx0XHRkcmFnRWxlbWVudCA9IG51bGw7XHJcblx0XHRcdGRyYWdJdGVtID0gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG59IiwiLyoqXHJcbiAqIFNpbXBsZSBEb2N1bWVudCByZWFkeSBmdW5jdGlvbiwgZXF1aXZhbGVudCB0byBqUXVlcnkncyBkb2N1bWVudCByZWFkeS5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUmVhZHkgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGwgYSBmdW5jdGlvbiB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkb24uXHJcbiAqIEBwYXJhbSBmbiBGdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gZG9jdW1lbnQgcmVhZHlcclxuICovXHJcblJlYWR5LmdvID0gZnVuY3Rpb24oZm4pIHtcclxuICAgIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKXtcclxuICAgICAgICBmbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBDb252ZW5pZW5jZSBjbGFzcyBmb3IgZ2VuZXJhdGluZyB1bmlxdWUgQ2lyc2ltLXNwZWNpZmljIElEJ3NcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVW5pcXVlID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcblVuaXF1ZS51bmlxdWUgPSAxO1xyXG5cclxuVW5pcXVlLnVuaXF1ZUlkID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gVW5pcXVlLnVuaXF1ZSsrO1xyXG59XHJcblxyXG5VbmlxdWUudW5pcXVlTmFtZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIFwiY2lyc2ltLWlkLVwiICsgVW5pcXVlLnVuaXF1ZSsrO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbmlxdWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
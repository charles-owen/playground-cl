/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./vendor/cl/playground/index.js":
/*!***************************************!*\
  !*** ./vendor/cl/playground/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Playground": () => (/* reexport safe */ _js_Playground_Playground__WEBPACK_IMPORTED_MODULE_1__.Playground),
/* harmony export */   "default": () => (/* reexport safe */ _js_Playground_Playground__WEBPACK_IMPORTED_MODULE_1__.Playground)
/* harmony export */ });
/* harmony import */ var _playground_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_playground.scss */ "./vendor/cl/playground/_playground.scss");
/* harmony import */ var _js_Playground_Playground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Playground/Playground */ "./vendor/cl/playground/js/Playground/Playground.js");
/* harmony import */ var _js_PlaygroundFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/PlaygroundFactory */ "./vendor/cl/playground/js/PlaygroundFactory.js");





_js_PlaygroundFactory__WEBPACK_IMPORTED_MODULE_2__.PlaygroundFactory.create(Site.site);
Site.Playground = _js_Playground_Playground__WEBPACK_IMPORTED_MODULE_1__.Playground;

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Actions/AboutAction.js":
/*!*******************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Actions/AboutAction.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutAction": () => (/* binding */ AboutAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ "./vendor/cl/playground/js/Playground/Actions/Action.js");
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dialog-cl */ "./.yarn/cache/dialog-cl-npm-1.0.6-03d4a3bcc2-f2ed6caec0.zip/node_modules/dialog-cl/index.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../package.json */ "./vendor/cl/playground/package.json");



var AboutAction = function AboutAction(site, options) {
  _Action__WEBPACK_IMPORTED_MODULE_0__.Action.call(this, site, options);

  this["do"] = function (main) {
    _Action__WEBPACK_IMPORTED_MODULE_0__.Action.prototype.do.call(this, main); // Dialog box contents

    var content = "\n<figure><img src=\"".concat(site.root, "/vendor/cl/playground/img/playground.jpg\" alt=\"Cirsim Logo\" width=\"400\" height=\"225\"></figure>\n<div class=\"cl-pg-about-div\">\n<h1>CourseLib Playground</h1>\n<p>Version: ").concat(_package_json__WEBPACK_IMPORTED_MODULE_2__.version, "</p>\n<p>Written by: Charles B. Owen</p></div>");
    var dialog = new dialog_cl__WEBPACK_IMPORTED_MODULE_1__.default({
      title: 'About the Playground',
      content: content,
      'addClass': 'cl-pg-about'
    });
  };
};
AboutAction.prototype = Object.create(_Action__WEBPACK_IMPORTED_MODULE_0__.Action.prototype);
AboutAction.prototype.constructor = AboutAction;
AboutAction.tag = 'about';

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Actions/Action.js":
/*!**************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Actions/Action.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Base object for an action.
 * @param site Site object
 * @param options Options passed to this action
 * @constructor
 */
var Action = function Action(site, options) {
  /**
   * Get all sources for this action.
   *
   * Based on the option 'sources', which are tab tags.
   * @return object with tab names and sources.
   */
  this.getSources = function () {
    // Get the requisite tab contents
    var sources = {};

    if (options.sources === undefined || options.sources === null) {
      return sources;
    }

    var _iterator = _createForOfIteratorHelper(options.sources),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var source = _step.value;
        var tab = this.main.getTab(source);

        if (tab !== null) {
          sources[source] = {
            name: tab.name,
            data: tab.get()
          };
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return sources;
  };
};

Action.prototype["do"] = function (main) {
  this.main = main;
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Actions/AllActions.js":
/*!******************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Actions/AllActions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllActions": () => (/* binding */ AllActions)
/* harmony export */ });
/* harmony import */ var _SaveAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaveAction */ "./vendor/cl/playground/js/Playground/Actions/SaveAction.js");
/* harmony import */ var _AboutAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutAction */ "./vendor/cl/playground/js/Playground/Actions/AboutAction.js");


var AllActions = function AllActions() {};

AllActions.addAll = function (Playground) {
  Playground.addAction(_SaveAction__WEBPACK_IMPORTED_MODULE_0__.SaveAction);
  Playground.addAction(_AboutAction__WEBPACK_IMPORTED_MODULE_1__.AboutAction);
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Actions/SaveAction.js":
/*!******************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Actions/SaveAction.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveAction": () => (/* binding */ SaveAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ "./vendor/cl/playground/js/Playground/Actions/Action.js");

var SaveAction = function SaveAction(site, options) {
  _Action__WEBPACK_IMPORTED_MODULE_0__.Action.call(this, site, options);

  this["do"] = function (main) {
    var _this = this;

    _Action__WEBPACK_IMPORTED_MODULE_0__.Action.prototype.do.call(this, main); // Get the requisite tab contents

    var sources = this.getSources();
    var params = {
      appTag: options.appTag,
      name: options.name,
      data: JSON.stringify(sources),
      type: 'application/json'
    };
    site.api.post('/api/filesystem/save', params).then(function (response) {
      console.log(response);

      if (!response.hasError()) {
        site.toast(_this, 'Successfully saved to server');
      } else {
        site.toast(_this, response);
      }
    })["catch"](function (error) {
      site.toast(_this, error);
    });
  };
};
SaveAction.prototype = Object.create(_Action__WEBPACK_IMPORTED_MODULE_0__.Action.prototype);
SaveAction.prototype.constructor = SaveAction;
SaveAction.tag = 'save';

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/DOM/Tools.js":
/*!*********************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/DOM/Tools.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tools": () => (/* binding */ Tools)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./.yarn/cache/@babel-runtime-npm-7.14.6-3272013297-927ffed787.zip/node_modules/@babel/runtime/helpers/esm/typeof.js");


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  return typeof val === 'string' || !!val && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(val) === 'object' && Object.prototype.toString.call(val) === '[object String]';
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
  var _iterator = _createForOfIteratorHelper(element.childNodes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;

      if (node.tagName === tagName) {
        return node;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return null;
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Graphics/Toast.js":
/*!**************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Graphics/Toast.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toast": () => (/* binding */ Toast)
/* harmony export */ });
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
    element = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__.Tools.createClassedDiv('toast');
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var resizer_cl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resizer-cl */ "./.yarn/cache/resizer-cl-npm-2.4.3-b618b20eb7-c972270ce1.zip/node_modules/resizer-cl/index.js");
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
        new resizer_cl__WEBPACK_IMPORTED_MODULE_0__.default(element, {
          handle: '10px solid #18453B'
        });
      }
    }

    this.dragAndDrop = new _UI_DragAndDrop__WEBPACK_IMPORTED_MODULE_3__.DragAndDrop(this); //
    // Create and add the window components
    //

    if (options.display !== 'inline' && options.display !== 'none') {
      //
      // All window-based versions other than inline get the
      // full user interface
      //
      // <div class="main"></div>
      this.div = _DOM_Tools__WEBPACK_IMPORTED_MODULE_4__.Tools.createClassedDiv('cl-pg-main');
      this.element.appendChild(this.div); //
      // Add the menu
      //

      menu = new _Menu__WEBPACK_IMPORTED_MODULE_1__.Menu(this);
      this.menu = menu; //
      // Working area
      // <div class="work"></div>
      //

      divWork = _DOM_Tools__WEBPACK_IMPORTED_MODULE_4__.Tools.createClassedDiv('work');
      this.div.appendChild(divWork); //
      // And the root pane
      //

      this.rootPane = new _Pane__WEBPACK_IMPORTED_MODULE_5__.Pane(this, divWork, null, null);
      this.rootPane.load(options.pane); //
      // And the overlay
      // <div class="cirsim-overlay"></div>
      //

      divOverlay = _DOM_Tools__WEBPACK_IMPORTED_MODULE_4__.Tools.createClassedDiv('cl-pg-overlay');
      this.div.appendChild(divOverlay);
      this.toast = new _Graphics_Toast__WEBPACK_IMPORTED_MODULE_2__.Toast(this);
      this.toast.create(this.div); //
      // Any data to load?
      //

      if (options.load !== null) {
        var load = options.load;

        if (typeof load === 'string' || load instanceof String) {
          load = JSON.parse(load);
        }

        for (var tag in load) {
          var tab = this.getTab(tag);

          if (tab !== null) {
            tab.set(load[tag]);
          }
        }
      }
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools */ "./vendor/cl/playground/js/Playground/DOM/Tools.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__.Tools.addClass(_this.nav, 'cl-pg-menubar');
    main.div.appendChild(_this.nav);
    var ul = document.createElement('ul');

    _this.nav.appendChild(ul);

    _this.ul = ul;
    var menus = options.menus;
    menus.push({
      name: 'Help',
      menus: [{
        name: 'About',
        action: {
          tag: 'about'
        }
      }]
    });

    var _iterator = _createForOfIteratorHelper(menus),
        _step;

    try {
      var _loop = function _loop() {
        var menu = _step.value;
        var topLI = document.createElement('li');
        ul.appendChild(topLI);
        var a = document.createElement('a');
        topLI.appendChild(a);
        a.innerText = menu.name;

        if (menu.action !== undefined) {
          (function () {
            // Top level only menu
            var action = main.playground.getAction(menu.action);

            for (var _i = 0, _arr = [a, topLI]; _i < _arr.length; _i++) {
              var element = _arr[_i];
              element.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
                action["do"](main);
              });
            }
          })();
        }

        if (menu.menus !== undefined) {
          (function () {
            // Pull-down menu
            var subUL = document.createElement('ul');
            topLI.appendChild(subUL);

            for (var _i2 = 0, _arr2 = [a, topLI]; _i2 < _arr2.length; _i2++) {
              var element = _arr2[_i2];
              element.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopPropagation();

                if (getComputedStyle(subUL).getPropertyValue('visibility') === 'hidden') {
                  open(topLI);
                } else {
                  // If already open, close all
                  _this.closeAll();
                }
              });
            }

            var _iterator2 = _createForOfIteratorHelper(menu.menus),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var subMenu = _step2.value;
                var subLI = document.createElement('li');
                subUL.appendChild(subLI);

                var _a = document.createElement('a');

                subLI.appendChild(_a);
                _a.innerText = subMenu.name;

                if (subMenu.action !== undefined) {
                  (function () {
                    // Top level only menu
                    var action = main.playground.getAction(subMenu.action);

                    if (action !== null) {
                      for (var _i3 = 0, _arr3 = [_a, topLI]; _i3 < _arr3.length; _i3++) {
                        var _element = _arr3[_i3];

                        _element.addEventListener('click', function (event) {
                          event.preventDefault();
                          event.stopPropagation();

                          _this.closeAll();

                          action["do"](main);
                        });
                      }
                    }
                  })();
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          })();
        }
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
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
      // for(const node of ul.childNodes) {
      //     if(node.tagName === 'LI') {
      //         node.addEventListener('click', (event) => {
      //             event.preventDefault();
      //
      //             // Find the <ul> in this menu
      //             let ulSub = Tools.child(node, 'UL');
      //             if(ulSub !== null) {
      //                 if(getComputedStyle(ulSub).getPropertyValue('visibility') === 'hidden') {
      //                     open(node);
      //                 } else {
      //                     // If already open, close all
      //                     this.closeAll();
      //                 }
      //             }
      //         });
      //     }
      // }
      // Activate all of the menus
      // fileMenu.activate();
      // editMenu.activate();
      // tabsMenu.activate();
      // helpMenu.activate();

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
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
    var _iterator3 = _createForOfIteratorHelper(_this.ul.childNodes),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var node = _step3.value;

        if (node.tagName === 'LI') {
          var _ul = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__.Tools.child(node, 'UL');

          if (_ul !== null) {// Tools.removeClass(ul, 'cl-pg-menu-open');
          }
        }
      } // And open this menu

    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    var ul = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__.Tools.child(li, 'UL');

    if (ul !== null) {
      ul.classList.add('cl-pg-menu-open');
    }

    document.addEventListener('click', closeListener);
    document.addEventListener('mousedown', closeListener);
  };
  /** Close all menus */


  this.closeAll = function () {
    var _iterator4 = _createForOfIteratorHelper(_this.ul.childNodes),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var node = _step4.value;

        if (node.tagName === 'LI') {
          var ul = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__.Tools.child(node, 'UL');

          if (ul !== null) {
            _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__.Tools.removeClass(ul, 'cl-pg-menu-open');
          }
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
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
      _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__.Tools.removeClass(element.parentNode, "menu-disabled");
    } else {
      _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__.Tools.addClass(element.parentNode, "menu-disabled");
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Options": () => (/* binding */ Options)
/* harmony export */ });
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
  }]; /// Content to initially load into the tabs

  this.load = null;

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pane": () => (/* binding */ Pane)
/* harmony export */ });
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
      tabs = new _Tabs__WEBPACK_IMPORTED_MODULE_0__.Tabs(main, div);
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
    for (var _i = 0, _arr = [tabs, child1, child2]; _i < _arr.length; _i++) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Playground": () => (/* binding */ Playground)
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ "./vendor/cl/playground/js/Playground/Main.js");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options */ "./vendor/cl/playground/js/Playground/Options.js");
/* harmony import */ var _Utility_Ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utility/Ready */ "./vendor/cl/playground/js/Playground/Utility/Ready.js");
/* harmony import */ var _Actions_Action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Actions/Action */ "./vendor/cl/playground/js/Playground/Actions/Action.js");
/* harmony import */ var _Actions_AllActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Actions/AllActions */ "./vendor/cl/playground/js/Playground/Actions/AllActions.js");





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

  this.options = new _Options__WEBPACK_IMPORTED_MODULE_1__.Options(options); // A collection of Main objects.

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

    _Utility_Ready__WEBPACK_IMPORTED_MODULE_2__.Ready.go(function () {
      _this.startNow();
    });
  };
  /**
   * Start the Playground running now. Does not wait for document ready.
   */


  this.startNow = function () {
    if (sel instanceof Element) {
      var main = new _Main__WEBPACK_IMPORTED_MODULE_0__.Main(_this, sel);
      mains.push(main);
    } else {
      var elements = document.querySelectorAll(sel);

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        var _main = new _Main__WEBPACK_IMPORTED_MODULE_0__.Main(_this, element);

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
Playground.Action = _Actions_Action__WEBPACK_IMPORTED_MODULE_3__.Action;
Playground.actions = {};

Playground.addAction = function (action) {
  this.actions[action.tag] = action;
};

_Actions_AllActions__WEBPACK_IMPORTED_MODULE_4__.AllActions.addAll(Playground);

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Tabs.js":
/*!****************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Tabs.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tabs": () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools */ "./vendor/cl/playground/js/Playground/DOM/Tools.js");
/* harmony import */ var _Tabs_OutputTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs/OutputTab */ "./vendor/cl/playground/js/Playground/Tabs/OutputTab.js");
/* harmony import */ var _Tabs_EditorTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tabs/EditorTab */ "./vendor/cl/playground/js/Playground/Tabs/EditorTab.js");
/* harmony import */ var _img_menubars_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/menubars.png */ "./vendor/cl/playground/img/menubars.png");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





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
    tabsDiv = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__.Tools.createClassedDiv('cl-pg-tabs');
    ul = document.createElement('ul');
    tabsDiv.appendChild(ul);
    viewsDiv = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__.Tools.createClassedDiv('cl-pg-views');
    tabsDiv.appendChild(viewsDiv);
    div.appendChild(tabsDiv); // Clear the tabs collection

    tabs = []; //	this.add('program');
    //		this.add('output');
  };

  this.load = function (data) {
    var _iterator = _createForOfIteratorHelper(data),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tabData = _step.value;
        this.add(tabData);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  this.newParent = function (pane) {
    pane.div.appendChild(tabsDiv);
  };

  this.add = function (data) {
    var tab = null;

    switch (data.type) {
      case 'editor':
        tab = new _Tabs_EditorTab__WEBPACK_IMPORTED_MODULE_2__.EditorTab(this, data);
        break;

      case 'output':
        tab = new _Tabs_OutputTab__WEBPACK_IMPORTED_MODULE_1__.OutputTab(this, data);
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
    var _iterator2 = _createForOfIteratorHelper(tabs),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var tab = _step2.value;

        if (tab.tab.tag === tag) {
          return tab.tab;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorTab": () => (/* binding */ EditorTab)
/* harmony export */ });
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab */ "./vendor/cl/playground/js/Playground/Tabs/Tab.js");

var EditorTab = function EditorTab(tabs, data) {
  _Tab__WEBPACK_IMPORTED_MODULE_0__.Tab.call(this, tabs, data);
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
    // Data from the file system may consist of either just
    // text (old format) or text in an object. This allows
    // either case to work.
    if (text.data !== undefined) {
      text = text.data;
    }

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
    _Tab__WEBPACK_IMPORTED_MODULE_0__.Tab.prototype.select.call(this);
    setTimeout(function () {
      editor.textarea.focus();
    }, 0);
  };

  this.set('');
};
EditorTab.prototype = Object.create(_Tab__WEBPACK_IMPORTED_MODULE_0__.Tab.prototype);
EditorTab.prototype.constructor = EditorTab;

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Tabs/OutputTab.js":
/*!**************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Tabs/OutputTab.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutputTab": () => (/* binding */ OutputTab)
/* harmony export */ });
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab */ "./vendor/cl/playground/js/Playground/Tabs/Tab.js");
/* harmony import */ var _DOM_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/Tools */ "./vendor/cl/playground/js/Playground/DOM/Tools.js");


var OutputTab = function OutputTab(tabs, data) {
  _Tab__WEBPACK_IMPORTED_MODULE_0__.Tab.call(this, tabs, data);
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
OutputTab.prototype = Object.create(_Tab__WEBPACK_IMPORTED_MODULE_0__.Tab.prototype);
OutputTab.prototype.constructor = OutputTab;

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Tabs/Tab.js":
/*!********************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Tabs/Tab.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab": () => (/* binding */ Tab)
/* harmony export */ });
var Tab = function Tab(tabs, data) {
  var _this = this;

  this.tabs = tabs;
  this.view = null;
  this.tag = data.tag;
  this.name = data.name;
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
  });

  this.set = function (text) {}; //
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragAndDrop": () => (/* binding */ DragAndDrop)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      var _iterator = _createForOfIteratorHelper(dropViews),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var view = _step.value;
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
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ready": () => (/* binding */ Ready)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaygroundFactory": () => (/* binding */ PlaygroundFactory)
/* harmony export */ });
/* harmony import */ var _Playground_Playground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Playground/Playground */ "./vendor/cl/playground/js/Playground/Playground.js");

var PlaygroundFactory = function PlaygroundFactory() {};

PlaygroundFactory.create = function (site) {
  function install() {
    var elements = document.querySelectorAll('div.cl-playground');

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var json = JSON.parse(element.textContent);
      element.innerHTML = '';
      var playground = new _Playground_Playground__WEBPACK_IMPORTED_MODULE_0__.Playground(site, element, json);
      playground.startNow();
    }
  }

  site.start(function () {
    install();
  });
  site.messageListener(function (msg, data) {
    switch (msg) {
      case 'cl-quiz-after-installed':
        install();
        break;

      case 'cl-grades-grader-installed':
        install();
        break;
    }
  });
  site.Playground = _Playground_Playground__WEBPACK_IMPORTED_MODULE_0__.Playground;
};

/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/playground/_playground.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/playground/_playground.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/getUrl.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_menu_check_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/menu-check.png */ "./vendor/cl/playground/img/menu-check.png");
/* harmony import */ var _img_bars_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/bars.png */ "./vendor/cl/playground/img/bars.png");
// Imports





var ___CSS_LOADER_EXPORT___ = _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_menu_check_png__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_bars_png__WEBPACK_IMPORTED_MODULE_4__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.cl-playground div.toast {\n  position: absolute;\n  bottom: 0;\n  visibility: hidden;\n  transform: translateY(2.3em);\n  z-index: 400;\n  transition: all 0.4s ease-in-out 0s, visibility 0s linear 0.4s, z-index 0s linear 0.01s;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1.1em;\n  left: calc(50% - 30em/2);\n  width: 30em;\n  background-color: #151515;\n  color: white;\n  text-align: center;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding: 0.5em;\n}\ndiv.cl-playground div.toast.toast-active {\n  visibility: visible;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.4s;\n  z-index: 400;\n}\n\ndiv.cl-playground {\n  display: none;\n}\n\ndiv.cl-playground nav.cl-pg-menubar {\n  flex: 0 1 auto;\n  position: relative;\n  z-index: 100;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background-color: #f0f3f0;\n  border-bottom: thin solid #808080;\n  font-size: 0.9rem;\n}\ndiv.cl-playground nav.cl-pg-menubar li:hover {\n  background: #00796B;\n}\ndiv.cl-playground nav.cl-pg-menubar li {\n  user-select: none;\n  cursor: pointer;\n}\ndiv.cl-playground nav.cl-pg-menubar li a {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\ndiv.cl-playground nav.cl-pg-menubar li a:link, div.cl-playground nav.cl-pg-menubar li a:visited {\n  color: black;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul {\n  list-style-type: none;\n  margin: 0;\n  border: 0;\n  padding: 0;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul img.check {\n  vertical-align: baseline;\n  width: 19px;\n  height: 16px;\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\ndiv.cl-playground nav.cl-pg-menubar > ul > li {\n  display: inline-block;\n  margin: 0;\n  border: 0;\n  padding: 0.25em 2em 0.25em 0.5em;\n  position: relative;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul > li a {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul > li a:link, div.cl-playground nav.cl-pg-menubar > ul > li a:visited {\n  color: black;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul {\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n  list-style-type: none;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: 100%;\n  margin: 1px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n  border-top-width: 0;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li.menu-disabled a {\n  opacity: 0.3;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.cl-pg-menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.edit-menu a {\n  width: 6em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.option-menu a {\n  width: 11em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.file-menu a {\n  width: 6em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.help-menu a {\n  width: 7.5em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul .ul-state-active {\n  color: red;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul li.menu-divider {\n  height: 1px;\n  border: 0 solid black;\n  border-top-width: 1px;\n}\n\ndiv.cl-playground div.work {\n  flex: 1 1 auto;\n  position: relative;\n  width: 100%;\n  background: black;\n}\n\ndiv.cl-playground div.cl-pg-overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #a00;\n  opacity: 0.05;\n  z-index: 2000;\n  display: none;\n}\ndiv.cl-playground div.cl-pg-main {\n  line-height: normal;\n  font-size: 1rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\ndiv.cl-playground-full {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: white;\n}\n\ndiv.cl-playground-window {\n  position: relative;\n  width: 100%;\n  height: 600px;\n  margin: 0;\n  padding: 0;\n  border: thin solid #aaaaaa;\n  border-bottom: none;\n  background: white;\n  min-height: 100px;\n  min-width: 400px;\n}\n\ndiv.cl-playground-gap-before, div.cl-playground-gap-after {\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 1px;\n}\n\ndiv.cl-playground-gap-after {\n  height: 1em;\n}\n\ndiv.cl-playground div.cl-pg-tabs {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  font-size: 0.8rem;\n  padding: 0;\n  background: #ddd;\n  border: 0;\n}\ndiv.cl-playground div.cl-pg-tabs > ul {\n  margin: 0;\n  padding: 3px 0 0 2px;\n  background: transparent;\n  border: 0;\n  list-style: none;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li {\n  position: relative;\n  display: inline-block;\n  font-size: 0.8rem;\n  padding: 0.25em 0.25em 0.45em 0;\n  min-width: 6em;\n  text-align: center;\n  cursor: pointer;\n  background: #ccc;\n  border: 1px solid black;\n  border-bottom: none;\n  border-radius: 5px 5px 0 0;\n  margin: 1px 3px -1px 0;\n  white-space: nowrap;\n  z-index: 18;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li a:first-child {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  display: inline-block;\n  padding: 0 0.25em;\n  text-decoration: none;\n  color: black;\n  outline: 0;\n  user-select: none;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) {\n  float: right;\n  display: inline-block;\n  margin-top: -2px;\n  padding: 0;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) img {\n  width: 12px;\n  height: auto;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li.selected {\n  background: white;\n  z-index: 22;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li.selected a {\n  color: black;\n}\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-views {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n}\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-view {\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 20;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-view.selected {\n  display: block;\n  border-top: 1px solid black;\n}\ndiv.cl-playground div.cl-tab-menu {\n  position: absolute;\n  left: calc(100% - 17px);\n  top: 0;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n}\ndiv.cl-playground div.cl-tab-menu div {\n  position: absolute;\n  width: 14px;\n  height: 27px;\n  top: 4px;\n  left: 0;\n  border: 1px solid #808080;\n  border-bottom-width: 0;\n  background-color: #f0f3f0;\n}\ndiv.cl-playground div.cl-tab-menu div img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 12px;\n  height: auto;\n}\ndiv.cl-playground div.cl-tab-menu ul {\n  list-style-type: none;\n  overflow: hidden;\n  margin: 30px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n}\ndiv.cl-playground div.cl-tab-menu ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\ndiv.cl-playground div.cl-tab-menu ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\ndiv.cl-playground div.cl-tab-menu ul > li.menu-disabled a {\n  opacity: 0.3;\n}\ndiv.cl-playground div.cl-tab-menu.cl-menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\n\ndiv.cl-playground div.cl-playground-root, div.cl-playground div.cl-playground-left, div.cl-playground div.cl-playground-right,\ndiv.cl-playground div.cl-playground-top, div.cl-playground div.cl-playground-bottom {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  background: white;\n}\ndiv.cl-playground div.cl-playground-left {\n  position: relative;\n  flex: 0 1 auto;\n  border-right: 1px solid #888;\n}\ndiv.cl-playground div.cl-playground-left div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  top: 0;\n  height: 100%;\n  right: -5px;\n  width: 10px;\n  background: transparent;\n  z-index: 100;\n  cursor: ew-resize;\n}\ndiv.cl-playground div.cl-playground-top {\n  flex: 0 1 auto;\n  width: 100%;\n  border-bottom: 1px solid #888;\n}\ndiv.cl-playground div.cl-playground-top div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  bottom: -5px;\n  height: 10px;\n  width: 100%;\n  background: transparent;\n  z-index: 2;\n  cursor: ns-resize;\n}\ndiv.cl-playground div.cl-playground-bottom {\n  width: 100%;\n  height: auto;\n}\ndiv.cl-playground div.cl-playground-root {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\ndiv.cl-pg-nums {\n  display: inline-block;\n  flex: 0 0 auto;\n  background: #eee;\n  width: 2em;\n  padding: 4px 0;\n  overflow: hidden;\n  margin: 0;\n}\ndiv.cl-pg-nums p {\n  font-size: 0.8em;\n  line-height: 16px;\n  margin: 0;\n  padding: 0 3px 0 0;\n  border: 0;\n  text-align: right;\n  color: #777;\n}\n\ndiv.cl-pg-about {\n  width: auto !important;\n}\ndiv.cl-pg-about figure {\n  margin: 0;\n  width: 400px;\n  height: 225px;\n  background: black;\n}\ndiv.cl-pg-about div.cl-pg-about-div {\n  padding: 1em;\n}\ndiv.cl-pg-about div.cl-pg-about-div h1 {\n  font-size: 1.5em;\n  text-align: center;\n}\ndiv.cl-pg-about div.cl-pg-about-div p {\n  text-align: center;\n}\n\ndiv.cl-playground div.cl-pg-view.editor {\n  overflow: hidden;\n}\ndiv.cl-playground div.cl-pg-view.editor > div {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\ndiv.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor {\n  margin: 0;\n  display: block;\n  flex: 1 1 auto;\n  height: 100%;\n}\ndiv.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor textarea {\n  line-height: 16px;\n  margin: 0;\n  padding: 4px 0 0 3px;\n  border: 0;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  font-size: 1em;\n  font-family: monospace, monospace;\n  white-space: pre;\n  overflow-wrap: normal;\n}\n\ndiv.cl-playground div.cl-pg-view.output {\n  overflow: hidden;\n}\ndiv.cl-playground div.cl-pg-view.output > div {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\ndiv.cl-playground div.cl-pg-view.output > div pre {\n  display: block;\n  flex: 1 1 auto;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  line-height: 16px;\n  margin: 0;\n  padding: 4px 0 0 3px;\n  border: 0;\n  overflow: auto;\n  height: 100%;\n}", "",{"version":3,"sources":["webpack://./vendor/cl/playground/sass/partials/_toast.scss","webpack://./vendor/cl/playground/sass/modules/_variables.scss","webpack://./vendor/cl/playground/sass/modules/_colors.scss","webpack://./vendor/cl/playground/_playground.scss","webpack://./vendor/cl/playground/sass/partials/_playground.scss","webpack://./vendor/cl/playground/sass/partials/_menu.scss","webpack://./vendor/cl/playground/sass/modules/_fonts.scss","webpack://./vendor/cl/playground/sass/partials/_work.scss","webpack://./vendor/cl/playground/sass/partials/_main.scss","webpack://./vendor/cl/playground/sass/partials/_tabs.scss","webpack://./vendor/cl/playground/sass/partials/_pane.scss","webpack://./vendor/cl/playground/sass/partials/_line_numbers.scss","webpack://./vendor/cl/playground/sass/partials/_about.scss","webpack://./vendor/cl/playground/sass/partials/_tab_editor.scss","webpack://./vendor/cl/playground/sass/partials/_tab_output.scss"],"names":[],"mappings":"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","sourcesContent":["div.cl-playground\r\n{\r\n  $toast-transition-time: 0.4s;\r\n\r\n  div.toast {\r\n    position: absolute;\r\n    bottom: 0;\r\n\r\n    visibility: hidden;\r\n    transform: translateY(2.3em);\r\n    z-index: 400;\r\n    transition: all $toast-transition-time ease-in-out 0s, visibility 0s linear $toast-transition-time, z-index 0s linear 0.01s;\r\n\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: $toast-font-size;\r\n    left: calc(50% - #{$toast-width}/2);\r\n    width: $toast-width;\r\n    background-color: $toast-background;\r\n    color: $toast-text;\r\n    text-align: center;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    padding: 0.5em;\r\n  }\r\n\r\n  div.toast.toast-active {\r\n    visibility: visible;\r\n    transform: translateY(0%);\r\n    transition-delay: 0s, 0s, $toast-transition-time;\r\n    z-index: 400;\r\n\r\n  }\r\n}","$toast-font-size: 1.1em;\r\n$toast-width: 30em;\r\n\r\n$drag-bar-width: 10px;\r\n\r\n$tab-corner-radius: 5px;\r\n","// The major colors\r\n// We have a primary color, two secondary colors, and a complementary color.\r\n$dark-primary: #00796B;\r\n$primary: #009688;\r\n$light-primary: #B2DFDB;\r\n$accent: #607D8B;\r\n$primary-text: #212121;\r\n$divider-color: #BDBDBD;\r\n$secondary-text: #606060;\r\n\r\n$comp: #c41425;\r\n$window-borders: #aaaaaa;\r\n\r\n\r\n\r\n$tabs-background: #ddd;\r\n$tab-background: #ccc;\r\n$tab-text: black;\r\n$tab-selected-background: white;\r\n$tab-selected-text: black;\r\n\r\n$menu-focus: $dark-primary;\r\n$menu-background: #f0f3f0;\r\n$menu-color: black;\r\n$menu-divider-color: black;\r\n$menu-border-color: #808080;\r\n\r\n$resizer: $dark-primary;\r\n\r\n$toast-background: #151515;\r\n$toast-text: white;","div.cl-playground div.toast {\n  position: absolute;\n  bottom: 0;\n  visibility: hidden;\n  transform: translateY(2.3em);\n  z-index: 400;\n  transition: all 0.4s ease-in-out 0s, visibility 0s linear 0.4s, z-index 0s linear 0.01s;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1.1em;\n  left: calc(50% - 30em/2);\n  width: 30em;\n  background-color: #151515;\n  color: white;\n  text-align: center;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding: 0.5em;\n}\ndiv.cl-playground div.toast.toast-active {\n  visibility: visible;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.4s;\n  z-index: 400;\n}\n\ndiv.cl-playground {\n  display: none;\n}\n\ndiv.cl-playground nav.cl-pg-menubar {\n  flex: 0 1 auto;\n  position: relative;\n  z-index: 100;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background-color: #f0f3f0;\n  border-bottom: thin solid #808080;\n  font-size: 0.9rem;\n}\ndiv.cl-playground nav.cl-pg-menubar li:hover {\n  background: #00796B;\n}\ndiv.cl-playground nav.cl-pg-menubar li {\n  user-select: none;\n  cursor: pointer;\n}\ndiv.cl-playground nav.cl-pg-menubar li a {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\ndiv.cl-playground nav.cl-pg-menubar li a:link, div.cl-playground nav.cl-pg-menubar li a:visited {\n  color: black;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul {\n  list-style-type: none;\n  margin: 0;\n  border: 0;\n  padding: 0;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul img.check {\n  vertical-align: baseline;\n  width: 19px;\n  height: 16px;\n  content: url(\"../../img/menu-check.png\");\n}\ndiv.cl-playground nav.cl-pg-menubar > ul > li {\n  display: inline-block;\n  margin: 0;\n  border: 0;\n  padding: 0.25em 2em 0.25em 0.5em;\n  position: relative;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul > li a {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul > li a:link, div.cl-playground nav.cl-pg-menubar > ul > li a:visited {\n  color: black;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul {\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n  list-style-type: none;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: 100%;\n  margin: 1px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n  border-top-width: 0;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li.menu-disabled a {\n  opacity: 0.3;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.cl-pg-menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.edit-menu a {\n  width: 6em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.option-menu a {\n  width: 11em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.file-menu a {\n  width: 6em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.help-menu a {\n  width: 7.5em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul .ul-state-active {\n  color: red;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul li.menu-divider {\n  height: 1px;\n  border: 0 solid black;\n  border-top-width: 1px;\n}\n\ndiv.cl-playground div.work {\n  flex: 1 1 auto;\n  position: relative;\n  width: 100%;\n  background: black;\n}\n\ndiv.cl-playground div.cl-pg-overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #a00;\n  opacity: 0.05;\n  z-index: 2000;\n  display: none;\n}\ndiv.cl-playground div.cl-pg-main {\n  line-height: normal;\n  font-size: 1rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\ndiv.cl-playground-full {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: white;\n}\n\ndiv.cl-playground-window {\n  position: relative;\n  width: 100%;\n  height: 600px;\n  margin: 0;\n  padding: 0;\n  border: thin solid #aaaaaa;\n  border-bottom: none;\n  background: white;\n  min-height: 100px;\n  min-width: 400px;\n}\n\ndiv.cl-playground-gap-before, div.cl-playground-gap-after {\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 1px;\n}\n\ndiv.cl-playground-gap-after {\n  height: 1em;\n}\n\ndiv.cl-playground div.cl-pg-tabs {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  font-size: 0.8rem;\n  padding: 0;\n  background: #ddd;\n  border: 0;\n}\ndiv.cl-playground div.cl-pg-tabs > ul {\n  margin: 0;\n  padding: 3px 0 0 2px;\n  background: transparent;\n  border: 0;\n  list-style: none;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li {\n  position: relative;\n  display: inline-block;\n  font-size: 0.8rem;\n  padding: 0.25em 0.25em 0.45em 0;\n  min-width: 6em;\n  text-align: center;\n  cursor: pointer;\n  background: #ccc;\n  border: 1px solid black;\n  border-bottom: none;\n  border-radius: 5px 5px 0 0;\n  margin: 1px 3px -1px 0;\n  white-space: nowrap;\n  z-index: 18;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li a:first-child {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  display: inline-block;\n  padding: 0 0.25em;\n  text-decoration: none;\n  color: black;\n  outline: 0;\n  user-select: none;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) {\n  float: right;\n  display: inline-block;\n  margin-top: -2px;\n  padding: 0;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) img {\n  width: 12px;\n  height: auto;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li.selected {\n  background: white;\n  z-index: 22;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li.selected a {\n  color: black;\n}\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-views {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n}\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-view {\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 20;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-view.selected {\n  display: block;\n  border-top: 1px solid black;\n}\ndiv.cl-playground div.cl-tab-menu {\n  position: absolute;\n  left: calc(100% - 17px);\n  top: 0;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n}\ndiv.cl-playground div.cl-tab-menu div {\n  position: absolute;\n  width: 14px;\n  height: 27px;\n  top: 4px;\n  left: 0;\n  border: 1px solid #808080;\n  border-bottom-width: 0;\n  background-color: #f0f3f0;\n}\ndiv.cl-playground div.cl-tab-menu div img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 12px;\n  height: auto;\n}\ndiv.cl-playground div.cl-tab-menu ul {\n  list-style-type: none;\n  overflow: hidden;\n  margin: 30px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n}\ndiv.cl-playground div.cl-tab-menu ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\ndiv.cl-playground div.cl-tab-menu ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\ndiv.cl-playground div.cl-tab-menu ul > li.menu-disabled a {\n  opacity: 0.3;\n}\ndiv.cl-playground div.cl-tab-menu.cl-menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\n\ndiv.cl-playground div.cl-playground-root, div.cl-playground div.cl-playground-left, div.cl-playground div.cl-playground-right,\ndiv.cl-playground div.cl-playground-top, div.cl-playground div.cl-playground-bottom {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  background: white;\n}\ndiv.cl-playground div.cl-playground-left {\n  position: relative;\n  flex: 0 1 auto;\n  border-right: 1px solid #888;\n}\ndiv.cl-playground div.cl-playground-left div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  top: 0;\n  height: 100%;\n  right: -5px;\n  width: 10px;\n  background: transparent;\n  z-index: 100;\n  cursor: ew-resize;\n}\ndiv.cl-playground div.cl-playground-top {\n  flex: 0 1 auto;\n  width: 100%;\n  border-bottom: 1px solid #888;\n}\ndiv.cl-playground div.cl-playground-top div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  bottom: -5px;\n  height: 10px;\n  width: 100%;\n  background: transparent;\n  z-index: 2;\n  cursor: ns-resize;\n}\ndiv.cl-playground div.cl-playground-bottom {\n  width: 100%;\n  height: auto;\n}\ndiv.cl-playground div.cl-playground-root {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\ndiv.cl-pg-nums {\n  display: inline-block;\n  flex: 0 0 auto;\n  background: #eee;\n  width: 2em;\n  padding: 4px 0;\n  overflow: hidden;\n  margin: 0;\n}\ndiv.cl-pg-nums p {\n  font-size: 0.8em;\n  line-height: 16px;\n  margin: 0;\n  padding: 0 3px 0 0;\n  border: 0;\n  text-align: right;\n  color: #777;\n}\n\ndiv.cl-pg-about {\n  width: auto !important;\n}\ndiv.cl-pg-about figure {\n  margin: 0;\n  width: 400px;\n  height: 225px;\n  background: black;\n}\ndiv.cl-pg-about div.cl-pg-about-div {\n  padding: 1em;\n}\ndiv.cl-pg-about div.cl-pg-about-div h1 {\n  font-size: 1.5em;\n  text-align: center;\n}\ndiv.cl-pg-about div.cl-pg-about-div p {\n  text-align: center;\n}\n\ndiv.cl-playground div.cl-pg-view.editor {\n  overflow: hidden;\n}\ndiv.cl-playground div.cl-pg-view.editor > div {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\ndiv.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor {\n  margin: 0;\n  display: block;\n  flex: 1 1 auto;\n  height: 100%;\n}\ndiv.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor textarea {\n  line-height: 16px;\n  margin: 0;\n  padding: 4px 0 0 3px;\n  border: 0;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  font-size: 1em;\n  font-family: monospace, monospace;\n  white-space: pre;\n  overflow-wrap: normal;\n}\n\ndiv.cl-playground div.cl-pg-view.output {\n  overflow: hidden;\n}\ndiv.cl-playground div.cl-pg-view.output > div {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\ndiv.cl-playground div.cl-pg-view.output > div pre {\n  display: block;\n  flex: 1 1 auto;\n  background: url(\"../../img/bars.png\");\n  line-height: 16px;\n  margin: 0;\n  padding: 4px 0 0 3px;\n  border: 0;\n  overflow: auto;\n  height: 100%;\n}","div.cl-playground {\r\n  display: none;\r\n}\r\n","div.cl-playground nav.cl-pg-menubar {\r\n  flex: 0 1 auto;\r\n  position: relative;\r\n  z-index: 100;\r\n  margin: 0;\r\n  border: 0;\r\n  padding: 0;\r\n  background-color: $menu-background;\r\n  border-bottom: thin solid #808080;\r\n  font-size: $menu-font-size;\r\n\r\n  li:hover {\r\n    background: $menu-focus;\r\n  }\r\n\r\n  li {\r\n    user-select: none;\r\n    cursor: pointer;\r\n\r\n    a {\r\n      font-family: $menu-font;\r\n      font-size: $menu-font-size;\r\n      color: $menu-color;\r\n      text-decoration: none;\r\n    }\r\n\r\n    a:link, a:visited {\r\n      color: $menu-color;\r\n    }\r\n  }\r\n\r\n  //\r\n  // Top level menu\r\n  //\r\n  > ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    border: 0;\r\n    padding: 0;\r\n\r\n    img.check {\r\n      vertical-align: baseline;\r\n      width: 19px;\r\n      height: 16px;\r\n      content: url(\"../../img/menu-check.png\");\r\n    }\r\n\r\n    > li {\r\n      display: inline-block;\r\n      margin: 0;\r\n      border: 0;\r\n      padding: 0.25em 2em 0.25em 0.5em;\r\n      position: relative;\r\n\r\n      a {\r\n        font-family: $menu-font;\r\n        font-size: $menu-font-size;\r\n        color: $menu-color;\r\n        text-decoration: none;\r\n      }\r\n\r\n      a:link, a:visited {\r\n        color: $menu-color;\r\n      }\r\n    }\r\n\r\n    //\r\n    // Drop-down menu\r\n    //\r\n    ul {\r\n      visibility: hidden;\r\n      opacity: 0;\r\n      transform: translateY(-2em);\r\n      z-index: -1;\r\n      transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\r\n\r\n      list-style-type: none;\r\n      // display: none;\r\n      position: absolute;\r\n      overflow: hidden;\r\n      left: 0;\r\n      top: 100%;\r\n      margin: 1px 0 0 0;\r\n      background-color: $menu-background;\r\n      padding: 0;\r\n      border: 1px solid $menu-border-color;\r\n      border-top-width: 0;\r\n\r\n      > li {\r\n        padding: 0 5px;\r\n        margin: 0;\r\n        overflow: hidden;\r\n\r\n        a {\r\n          display: inline-block;\r\n          width: 8em;\r\n          padding-top: 5px;\r\n          padding-bottom: 5px;\r\n        }\r\n      }\r\n\r\n      > li.menu-disabled {\r\n        a {\r\n          opacity: 0.3;\r\n        }\r\n      }\r\n    }\r\n\r\n    ul.cl-pg-menu-open {\r\n      visibility: visible;\r\n      opacity: 1;\r\n      z-index: 100;\r\n      transform: translateY(0%);\r\n      transition-delay: 0s, 0s, 0.2s;\r\n    }\r\n\r\n    ul.edit-menu a {\r\n      width: 6em;\r\n    }\r\n\r\n    ul.option-menu a {\r\n      width: 11em;\r\n    }\r\n\r\n    ul.file-menu a {\r\n      width: 6em;\r\n    }\r\n\r\n    ul.help-menu a {\r\n      width: 7.5em;\r\n    }\r\n\r\n    .ul-state-active {\r\n      color: red;\r\n    }\r\n\r\n    li.menu-divider {\r\n      height: 1px;\r\n      border: 0 solid $menu-divider-color;\r\n      border-top-width: 1px;\r\n    }\r\n  }\r\n}\r\n\r\n","$menu-font: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n$menu-font-size: 0.90rem;\r\n\r\n$tabs-font: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n$tabs-font-size: 0.80rem;","div.cl-playground div.work {\r\n  flex: 1 1 auto;\r\n  position: relative;\r\n  width: 100%;\r\n  background: black;\r\n}\r\n\r\n","div.cl-playground {\r\n\r\n  div.cl-pg-overlay {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    background: #a00;\r\n    opacity: 0.05;\r\n    z-index: 2000;\r\n    display: none;\r\n  }\r\n\r\n  div.cl-pg-main {\r\n    // Normalizations\r\n    line-height: normal;\r\n    font-size: 1rem;\r\n\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    overflow: hidden;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n\r\ndiv.cl-playground-full {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  background: white;\r\n}\r\n\r\ndiv.cl-playground-window {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 600px;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: thin solid $window-borders;\r\n  border-bottom: none;\r\n  background: white;\r\n  min-height: 100px;\r\n  min-width: 400px;\r\n}\r\n\r\ndiv.cl-playground-gap-before, div.cl-playground-gap-after {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  height: 1px;\r\n}\r\n\r\ndiv.cl-playground-gap-after {\r\n  height: 1em;\r\n}\r\n\r\n","\r\ndiv.cl-playground {\r\n  div.cl-pg-tabs {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    font-size: $tabs-font-size;\r\n\r\n    padding: 0;\r\n    background: $tabs-background;\r\n    border: 0;\r\n\r\n    >ul {\r\n      margin: 0;\r\n      padding: 3px 0 0 2px;\r\n      background: transparent;\r\n      border: 0;\r\n      list-style: none;\r\n\r\n\r\n      >li {\r\n        position: relative;\r\n        display: inline-block;\r\n        font-size: $tabs-font-size;\r\n        padding: 0.25em 0.25em 0.45em 0;\r\n        min-width: 6em;\r\n        text-align: center;\r\n        cursor: pointer;\r\n        background: $tab-background;\r\n        border: 1px solid black;\r\n        border-bottom: none;\r\n        border-radius: $tab-corner-radius $tab-corner-radius 0 0;\r\n        margin: 1px 3px -1px 0;\r\n        white-space: nowrap;\r\n        z-index: 18;\r\n\r\n        a:first-child {\r\n          font-family: $tabs-font;\r\n          display: inline-block;\r\n          padding: 0 0.25em;\r\n          text-decoration: none;\r\n          color: $tab-text;\r\n          outline: 0;\r\n          user-select: none;\r\n        }\r\n\r\n        a:nth-child(2) {\r\n          float: right;\r\n          display: inline-block;\r\n          margin-top: -2px;\r\n          padding: 0;\r\n\r\n          img {\r\n            width: 12px;\r\n            height: auto;\r\n          }\r\n        }\r\n      }\r\n\r\n      >li.selected {\r\n        background: $tab-selected-background;\r\n        z-index: 22;\r\n\r\n        a {\r\n          color: $tab-selected-text;\r\n        }\r\n      }\r\n    }\r\n\r\n    div.cl-pg-views {\r\n      position: absolute;\r\n      left: 0;\r\n      top: 29px;\r\n      right: 0;\r\n      bottom: 0;\r\n      z-index: 20;\r\n    }\r\n\r\n    div.cl-pg-view {\r\n      position: absolute;\r\n      display: none;\r\n      left: 0;\r\n      top: 0;\r\n      right: 0;\r\n      bottom: 0;\r\n      height: 100%;\r\n      width: 100%;\r\n      z-index: 20;\r\n      margin: 0;\r\n      padding: 0;\r\n      border: 0;\r\n    }\r\n\r\n    div.cl-pg-view.selected {\r\n      display: block;\r\n      border-top: 1px solid black;\r\n    }\r\n  }\r\n\r\n  div.cl-tab-menu {\r\n    position: absolute;\r\n    left: calc(100% - 17px);\r\n    top: 0;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transform: translateY(-2em);\r\n    z-index: -1;\r\n    transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\r\n\r\n    div {\r\n      position: absolute;\r\n      width: 14px;\r\n      height: 27px;\r\n      top: 4px;\r\n      left: 0;\r\n      border: 1px solid $menu-border-color;\r\n      border-bottom-width: 0;\r\n      background-color: $menu-background;\r\n\r\n      img {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        width: 12px;\r\n        height: auto;\r\n      }\r\n    }\r\n\r\n    //\r\n    // Tab drop-down menu\r\n    //\r\n    ul {\r\n\r\n      list-style-type: none;\r\n      overflow: hidden;\r\n\r\n      margin: 30px 0 0 0;\r\n      background-color: $menu-background;\r\n      padding: 0;\r\n      border: 1px solid $menu-border-color;\r\n      //border-top-width: 0;\r\n\r\n      > li {\r\n        padding: 0 5px;\r\n        margin: 0;\r\n        overflow: hidden;\r\n\r\n        a {\r\n          display: inline-block;\r\n          width: 8em;\r\n          padding-top: 5px;\r\n          padding-bottom: 5px;\r\n        }\r\n      }\r\n\r\n      > li.menu-disabled {\r\n        a {\r\n          opacity: 0.3;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n\r\n\r\n  div.cl-tab-menu.cl-menu-open {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    z-index: 100;\r\n    transform: translateY(0%);\r\n    transition-delay: 0s, 0s, 0.2s;\r\n  }\r\n}","@use \"sass:math\";\r\n\r\ndiv.cl-playground {\r\n  div.cl-playground-root, div.cl-playground-left, div.cl-playground-right,\r\n  div.cl-playground-top, div.cl-playground-bottom {\r\n    position: relative;\r\n    display: flex;\r\n    flex: 1 1 auto;\r\n    box-sizing: border-box;\r\n    background: white;\r\n  }\r\n\r\n  div.cl-playground-left {\r\n    position: relative;\r\n    flex: 0 1 auto;\r\n    border-right: 1px solid #888;\r\n\r\n    div.cl-bar {\r\n      position: absolute;\r\n      margin: 0;\r\n      border: 0;\r\n      padding: 0;\r\n      top: 0;\r\n      height: 100%;\r\n      right: -5px; // math.div(-$drag-bar-width, 2);\r\n      width: $drag-bar-width;\r\n      background: transparent;\r\n      z-index: 100;\r\n      cursor: ew-resize;\r\n    }\r\n  }\r\n\r\n  div.cl-playground-right {\r\n  }\r\n\r\n  div.cl-playground-top {\r\n    flex: 0 1 auto;\r\n    width: 100%;\r\n    border-bottom: 1px solid #888;\r\n\r\n    div.cl-bar {\r\n      position: absolute;\r\n      margin: 0;\r\n      border: 0;\r\n      padding: 0;\r\n      bottom: -5px; // math.div(-$drag-bar-width, 2);\r\n      height: $drag-bar-width;\r\n      width: 100%;\r\n      background: transparent;\r\n      z-index: 2;\r\n      cursor: ns-resize;\r\n    }\r\n  }\r\n\r\n  div.cl-playground-bottom {\r\n    // border-left: 5px solid #18453b;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  div.cl-playground-root {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n  }\r\n}\r\n","div.cl-pg-nums {\r\n  display: inline-block;\r\n  flex: 0 0 auto;\r\n\r\n  background: #eee;\r\n  width: 2em;\r\n  padding: 4px 0;\r\n  overflow: hidden;\r\n  margin: 0;\r\n\r\n  p {\r\n    font-size: 0.8em;\r\n    line-height: 16px;\r\n    margin: 0;\r\n    padding: 0 3px 0 0;\r\n    border: 0;\r\n    text-align: right;\r\n    color: #777;\r\n  }\r\n}\r\n","div.cl-pg-about {\r\n  width: auto !important;\r\n\r\n  figure {\r\n    margin: 0;\r\n    width: 400px;\r\n    height: 225px;\r\n    background: black;\r\n  }\r\n\r\n  div.cl-pg-about-div {\r\n    padding: 1em;\r\n\r\n    h1 {\r\n      font-size: 1.5em;\r\n      text-align: center;\r\n    }\r\n\r\n    p {\r\n      text-align: center;\r\n    }\r\n  }\r\n\r\n}","div.cl-playground {\r\n  div.cl-pg-view.editor {\r\n    overflow: hidden;\r\n\r\n    // innerDiv\r\n    > div {\r\n      position: absolute;\r\n      left: 0;\r\n      top: 0;\r\n      bottom: 0;\r\n      width: 100%;\r\n      background: white;\r\n      padding: 0;\r\n      display: flex;\r\n      flex-direction: row;\r\n\r\n      div.cl-pg-editor {\r\n        margin: 0;\r\n        display: block;\r\n        flex: 1 1 auto;\r\n        height: 100%;\r\n\r\n        textarea {\r\n          line-height: 16px;\r\n\r\n          margin: 0;\r\n          padding: 4px 0 0 3px;\r\n          border: 0;\r\n          overflow: auto;\r\n          width: 100%;\r\n          height: 100%;\r\n\r\n          min-height: 100%;\r\n\r\n          font-size: 1em;\r\n          font-family: monospace, monospace;\r\n          white-space: pre;\r\n          overflow-wrap: normal\r\n        }\r\n      }\r\n\r\n    }\r\n  }\r\n}\r\n","div.cl-playground {\r\n  div.cl-pg-view.output {\r\n    overflow: hidden;\r\n\r\n    > div {\r\n      position: absolute;\r\n      left: 0;\r\n      top: 0;\r\n      bottom: 0;\r\n      width: 100%;\r\n      background: white;\r\n      padding: 0;\r\n      display: flex;\r\n      flex-direction: row;\r\n\r\n      pre {\r\n        display: block;\r\n        flex: 1 1 auto;\r\n        background: url('../../img/bars.png');\r\n        line-height: 16px;\r\n\r\n        margin: 0;\r\n        padding: 4px 0 0 3px;\r\n        border: 0;\r\n        overflow: auto;\r\n        height: 100%;\r\n      }\r\n\r\n\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n  }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./vendor/cl/playground/_playground.scss":
/*!***********************************************!*\
  !*** ./vendor/cl/playground/_playground.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./_playground.scss */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/playground/_playground.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./vendor/cl/playground/img/bars.png":
/*!*******************************************!*\
  !*** ./vendor/cl/playground/img/bars.png ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAgAgMAAABfgKEEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURf///+L/9+H/9+X/+Oh4HTMAAAAeSURBVAjXY2AgEvz///8Dw6pVqxYwhIaGBlBOEAkAU2MY3tDf9aUAAAAASUVORK5CYII=";

/***/ }),

/***/ "./vendor/cl/playground/img/menu-check.png":
/*!*************************************************!*\
  !*** ./vendor/cl/playground/img/menu-check.png ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAOCAYAAADNGCeJAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAVdJREFUOI2V0bFrU1EUB+DvRWNsIJNQu6t1E8ykuDgKBQlIFwdHkQ7+AwU7url0FMQ5cXFwsoMguIhSqoPtJA51EHGohedQfg55SV9jaeKFw71wDt89hyOJesx60u83srR0LlwKvdArJoGiKKZDq6vzBoOunZ1ruIgfGPwXlm73lIODW7a3l5XlIn7hNfrYNcuY2duTXm8uPAgfQj/cD4uhGQRTsezvy8pKJzwMX8KzcCGcHiGHGHPhSlgIRZrNVjY3h1BZytpap+roU3ga5v9Bxj8PkRdhN7wLd8LltNvtrK93wt3wMQzC+WORGiYU4XrYCl8r9F64HTbC+3CzqjseqmGjOBOehO/hW3hZ4Y9D60RovICjYCM8Cj8r9HO4OhUaY6M4BFvhTfgd3oaz49zE9uvRmJBHrz/YQInn1V3Pz9DZ0Q674VW17aldJTmhYDjajVmhJP4Cy1ZU6+dCg3AAAAAASUVORK5CYII=";

/***/ }),

/***/ "./vendor/cl/playground/img/menubars.png":
/*!***********************************************!*\
  !*** ./vendor/cl/playground/img/menubars.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABXRSTlMAv/IBDVaQsj8AAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHElEQVQI12NgwA0YlcBAAMFgdgEDAwSDPDW4AQB2XAxb8EnVqQAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./vendor/cl/playground/package.json":
/*!*******************************************!*\
  !*** ./vendor/cl/playground/package.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"playground-cl","version":"2.0.0","description":"CourseLib Playground IDE","main":"index.js","keywords":["Education","Course Web Sites","Karnaugh Maps"],"author":"Charles B. Owen","license":"MIT","dependencies":{"@babel/runtime":"^7.14.6","course-cl":">=0.0.1","dialog-cl":"^1.0.6","resizer-cl":"~2.4.3"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"Playground": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcourselib"] = self["webpackChunkcourselib"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common","vendor"], () => (__webpack_require__("./vendor/cl/playground/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0FjdGlvbnMvQWJvdXRBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9BY3Rpb25zL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0FjdGlvbnMvQWxsQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0FjdGlvbnMvU2F2ZUFjdGlvbi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0RPTS9Ub29scy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0dyYXBoaWNzL1RvYXN0LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvTWFpbi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL01lbnUuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9PcHRpb25zLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvUGFuZS5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1BsYXlncm91bmQuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9UYWJzLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVGFicy9FZGl0b3JUYWIuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9UYWJzL091dHB1dFRhYi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1RhYnMvVGFiLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVUkvRHJhZ0FuZERyb3AuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9VdGlsaXR5L1JlYWR5LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmRGYWN0b3J5LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL19wbGF5Z3JvdW5kLnNjc3MiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvX3BsYXlncm91bmQuc2Nzcz85ZGFlIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJQbGF5Z3JvdW5kRmFjdG9yeSIsIlNpdGUiLCJzaXRlIiwiUGxheWdyb3VuZCIsIkFib3V0QWN0aW9uIiwib3B0aW9ucyIsIkFjdGlvbiIsIm1haW4iLCJjb250ZW50Iiwicm9vdCIsInBhY2thZ2Vqc29uIiwiZGlhbG9nIiwiRGlhbG9nIiwidGl0bGUiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsInRhZyIsImdldFNvdXJjZXMiLCJzb3VyY2VzIiwidW5kZWZpbmVkIiwic291cmNlIiwidGFiIiwiZ2V0VGFiIiwibmFtZSIsImRhdGEiLCJnZXQiLCJBbGxBY3Rpb25zIiwiYWRkQWxsIiwiYWRkQWN0aW9uIiwiU2F2ZUFjdGlvbiIsInBhcmFtcyIsImFwcFRhZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwiYXBpIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJoYXNFcnJvciIsInRvYXN0IiwiZXJyb3IiLCJUb29scyIsImlzVmlzaWJsZSIsImVsZW0iLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImdldENsaWVudFJlY3RzIiwibGVuZ3RoIiwiYWRkQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkQ2xhc3NlcyIsImNsYXNzZXMiLCJzcGxpdCIsImZvckVhY2giLCJjbHMiLCJyZW1vdmVDbGFzcyIsInJlZ0V4IiwiUmVnRXhwIiwicmVwbGFjZSIsImNyZWF0ZUNsYXNzZWREaXYiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhZGRDb250ZW50IiwiaXNTdHJpbmciLCJpbm5lckhUTUwiLCJpc0VsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInZhbCIsInRvU3RyaW5nIiwiY2FsbCIsIm5vZGVWYWx1ZSIsIm9mZnNldCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsIndpbmRvdyIsInBhZ2VYT2Zmc2V0IiwidG9wIiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJjaGlsZCIsInRhZ05hbWUiLCJjaGlsZE5vZGVzIiwibm9kZSIsIlRvYXN0IiwiZGVmYXVsdER1cmF0aW9uIiwiaW50ZXJUb2FzdERlbGF5IiwibWVzc2FnZXMiLCJhY3RpdmUiLCJzaG93IiwibWVzc2FnZSIsInNwbGljZSIsIm1zZyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJ0aW1lIiwicHVzaCIsImpzb25FcnJvcnMiLCJqc29uQXBpIiwiZXJyb3JzIiwiTWFpbiIsInBsYXlncm91bmQiLCJtZW51IiwidGFicyIsImRpdk92ZXJsYXkiLCJkaXZXb3JrIiwiaW5pdGlhbGl6ZSIsInN0eWxlIiwiZGlzcGxheSIsImhlaWdodCIsImNvbnRhaW5zIiwiUmVzaXplciIsImhhbmRsZSIsImRyYWdBbmREcm9wIiwiRHJhZ0FuZERyb3AiLCJNZW51Iiwicm9vdFBhbmUiLCJQYW5lIiwibG9hZCIsInBhbmUiLCJTdHJpbmciLCJwYXJzZSIsInNldCIsIm5ld1RhYiIsIm1vZGFsIiwibmF2IiwidWwiLCJtZW51cyIsImFjdGlvbiIsInRvcExJIiwiYSIsImlubmVyVGV4dCIsImdldEFjdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic3ViVUwiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm9wZW4iLCJjbG9zZUFsbCIsInN1Yk1lbnUiLCJzdWJMSSIsImNsb3NlTGlzdGVuZXIiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwibGkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZW5hYmxlIiwic2VsIiwicXVlcnlTZWxlY3RvciIsImZpbmQiLCJjbGljayIsImNsb3N1cmUiLCJPcHRpb25zIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwiZ2V0QVBJIiwibW9kZSIsIm9iaiIsIm1vZGVPYmoiLCJ1cmwiLCJjb250ZW50VHlwZSIsImV4dHJhIiwicGFyZW50IiwibWluU3BsaXQiLCJtYXhTcGxpdCIsImNoaWxkMSIsImNoaWxkMiIsImhvcml6b250YWxTcGxpdCIsImhvcml6IiwicGVyY2VudGFnZSIsIlRhYnMiLCJob3Jpem9udGFsIiwiY2hpbGQxRGF0YSIsImNoaWxkMkRhdGEiLCJmbGV4RGlyZWN0aW9uIiwiYmFyIiwic3RhcnREcmFnZ2luZyIsInBhZ2VYIiwicGFnZVkiLCJtb3VzZU1vdmUiLCJtb3VzZVVwIiwidG91Y2giLCJjaGFuZ2VkVG91Y2hlcyIsInRvdWNoTW92ZSIsInRvdWNoRW5kIiwidG91Y2hDYW5jZWwiLCJzdGFydFgiLCJzdGFydFkiLCJ4IiwieSIsImVuZERyYWdnaW5nIiwiZHJhZ2dpbmciLCJtYWluWCIsIndpZCIsInJpZ2h0IiwicGVyIiwibWFpblkiLCJoaXQiLCJib3R0b20iLCJ3aGljaCIsIndpZHRoIiwiY29sbGVjdGlvbiIsIlBBQ0tBR0UiLCJyZXF1aXJlIiwidmVyc2lvbiIsIm1haW5zIiwic3RhcnQiLCJzdGFydE5vdyIsIlJlYWR5IiwiRWxlbWVudCIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJhY3Rpb25zIiwidGFic0RpdiIsInZpZXdzRGl2IiwidGFiRGF0YSIsIm5ld1BhcmVudCIsIkVkaXRvclRhYiIsIk91dHB1dFRhYiIsInZpZXciLCJzZWxlY3QiLCJ1bnNlbGVjdEFsbCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIlRhYiIsImlubmVyVmlldyIsIm51bXMiLCJlZGl0b3JEaXYiLCJlZGl0b3IiLCJFZGl0b3IiLCJyZXNpemUiLCJhdXRvSW5kZW50Iiwic3R5bGVzIiwic2Nyb2xsYWJsZSIsInRleHRhcmVhIiwidGV4dCIsInZhbHVlIiwibGluZXMiLCJwIiwiZm9jdXMiLCJwcmUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJkcmFnRWxlbWVudCIsImRyYWdJdGVtIiwiZHJvcFZpZXdzIiwiZHJhZ2dhYmxlIiwicGFsZXR0ZUl0ZW0iLCJkcm9wcGFibGUiLCJjYWxsYmFjayIsImNsb25lIiwicGFsZXR0ZUltYWdlIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjdXJzb3IiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInZpZXdFbGVtZW50Iiwidmlld1giLCJ2aWV3WSIsImdvIiwiZm4iLCJhdHRhY2hFdmVudCIsInJlYWR5U3RhdGUiLCJpbnN0YWxsIiwianNvbiIsInRleHRDb250ZW50IiwibWVzc2FnZUxpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUFBLDJFQUFBLENBQXlCQyxJQUFJLENBQUNDLElBQTlCO0FBRUFELElBQUksQ0FBQ0UsVUFBTCxHQUFrQkEsaUVBQWxCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBRU8sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBU0YsSUFBVCxFQUFlRyxPQUFmLEVBQXdCO0FBQ2xEQyxrREFBQSxDQUFZLElBQVosRUFBa0JKLElBQWxCLEVBQXdCRyxPQUF4Qjs7QUFFQSxlQUFVLFVBQVNFLElBQVQsRUFBZTtBQUN4QkQsaUVBQUEsQ0FBeUIsSUFBekIsRUFBK0JDLElBQS9CLEVBRHdCLENBR3hCOztBQUNBLFFBQUlDLE9BQU8sa0NBQ09OLElBQUksQ0FBQ08sSUFEWixnTUFJQ0Msa0RBSkQsbURBQVg7QUFPQSxRQUFNQyxNQUFN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QUFtQixpQkFBaUIsR0FBRyxPQUFPLGk5QkFBaTlCLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sYUFBYSxZQUFZLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFV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c0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VDOUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoicGxheWdyb3VuZC5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0ICcuL19wbGF5Z3JvdW5kLnNjc3MnO1xyXG5pbXBvcnQge1BsYXlncm91bmR9IGZyb20gJy4vanMvUGxheWdyb3VuZC9QbGF5Z3JvdW5kJztcclxuaW1wb3J0IHtQbGF5Z3JvdW5kRmFjdG9yeX0gZnJvbSAnLi9qcy9QbGF5Z3JvdW5kRmFjdG9yeSc7XHJcblxyXG5leHBvcnQge1BsYXlncm91bmR9O1xyXG5leHBvcnQge1BsYXlncm91bmQgYXMgZGVmYXVsdH07XHJcblxyXG5QbGF5Z3JvdW5kRmFjdG9yeS5jcmVhdGUoU2l0ZS5zaXRlKTtcclxuXHJcblNpdGUuUGxheWdyb3VuZCA9IFBsYXlncm91bmQ7XHJcblxyXG4iLCJpbXBvcnQge0FjdGlvbn0gZnJvbSAnLi9BY3Rpb24nO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XHJcbmltcG9ydCBwYWNrYWdlanNvbiBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0QWN0aW9uID0gZnVuY3Rpb24oc2l0ZSwgb3B0aW9ucykge1xyXG5cdEFjdGlvbi5jYWxsKHRoaXMsIHNpdGUsIG9wdGlvbnMpO1xyXG5cclxuXHR0aGlzLmRvID0gZnVuY3Rpb24obWFpbikge1xyXG5cdFx0QWN0aW9uLnByb3RvdHlwZS5kby5jYWxsKHRoaXMsIG1haW4pO1xyXG5cclxuXHRcdC8vIERpYWxvZyBib3ggY29udGVudHNcclxuXHRcdGxldCBjb250ZW50ID0gYFxyXG48ZmlndXJlPjxpbWcgc3JjPVwiJHtzaXRlLnJvb3R9L3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2ltZy9wbGF5Z3JvdW5kLmpwZ1wiIGFsdD1cIkNpcnNpbSBMb2dvXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIyMjVcIj48L2ZpZ3VyZT5cclxuPGRpdiBjbGFzcz1cImNsLXBnLWFib3V0LWRpdlwiPlxyXG48aDE+Q291cnNlTGliIFBsYXlncm91bmQ8L2gxPlxyXG48cD5WZXJzaW9uOiAke3BhY2thZ2Vqc29uLnZlcnNpb259PC9wPlxyXG48cD5Xcml0dGVuIGJ5OiBDaGFybGVzIEIuIE93ZW48L3A+PC9kaXY+YDtcclxuXHJcblx0XHRjb25zdCBkaWFsb2cgPSBuZXcgRGlhbG9nKHtcclxuXHRcdFx0dGl0bGU6ICdBYm91dCB0aGUgUGxheWdyb3VuZCcsXHJcblx0XHRcdGNvbnRlbnQ6IGNvbnRlbnQsXHJcblx0XHRcdCdhZGRDbGFzcyc6ICdjbC1wZy1hYm91dCdcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcbn1cclxuXHJcbkFib3V0QWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWN0aW9uLnByb3RvdHlwZSk7XHJcbkFib3V0QWN0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFib3V0QWN0aW9uO1xyXG5cclxuQWJvdXRBY3Rpb24udGFnID0gJ2Fib3V0JzsiLCIvKipcclxuICogQmFzZSBvYmplY3QgZm9yIGFuIGFjdGlvbi5cclxuICogQHBhcmFtIHNpdGUgU2l0ZSBvYmplY3RcclxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBwYXNzZWQgdG8gdGhpcyBhY3Rpb25cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQWN0aW9uID0gZnVuY3Rpb24oc2l0ZSwgb3B0aW9ucykge1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYWxsIHNvdXJjZXMgZm9yIHRoaXMgYWN0aW9uLlxyXG5cdCAqXHJcblx0ICogQmFzZWQgb24gdGhlIG9wdGlvbiAnc291cmNlcycsIHdoaWNoIGFyZSB0YWIgdGFncy5cclxuXHQgKiBAcmV0dXJuIG9iamVjdCB3aXRoIHRhYiBuYW1lcyBhbmQgc291cmNlcy5cclxuXHQgKi9cclxuXHR0aGlzLmdldFNvdXJjZXMgPSBmdW5jdGlvbigpIHtcclxuXHRcdC8vIEdldCB0aGUgcmVxdWlzaXRlIHRhYiBjb250ZW50c1xyXG5cdFx0Y29uc3Qgc291cmNlcyA9IHt9O1xyXG5cclxuXHRcdGlmKG9wdGlvbnMuc291cmNlcyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc291cmNlcyA9PT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gc291cmNlcztcclxuXHRcdH1cclxuXHJcblx0XHRmb3IoY29uc3Qgc291cmNlIG9mIG9wdGlvbnMuc291cmNlcykge1xyXG5cdFx0XHRjb25zdCB0YWIgPSB0aGlzLm1haW4uZ2V0VGFiKHNvdXJjZSk7XHJcblx0XHRcdGlmKHRhYiAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdHNvdXJjZXNbc291cmNlXSA9IHtuYW1lOiB0YWIubmFtZSwgZGF0YTogdGFiLmdldCgpfTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzb3VyY2VzO1xyXG5cdH1cclxuXHJcblxyXG59XHJcblxyXG5BY3Rpb24ucHJvdG90eXBlLmRvID0gZnVuY3Rpb24obWFpbikge1xyXG5cdHRoaXMubWFpbiA9IG1haW47XHJcbn0iLCJpbXBvcnQge1NhdmVBY3Rpb259IGZyb20gJy4vU2F2ZUFjdGlvbic7XHJcbmltcG9ydCB7QWJvdXRBY3Rpb259IGZyb20gJy4vQWJvdXRBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFsbEFjdGlvbnMgPSBmdW5jdGlvbigpIHt9XHJcblxyXG5BbGxBY3Rpb25zLmFkZEFsbCA9IGZ1bmN0aW9uKFBsYXlncm91bmQpIHtcclxuXHRQbGF5Z3JvdW5kLmFkZEFjdGlvbihTYXZlQWN0aW9uKTtcclxuXHRQbGF5Z3JvdW5kLmFkZEFjdGlvbihBYm91dEFjdGlvbik7XHJcbn0iLCJpbXBvcnQge0FjdGlvbn0gZnJvbSAnLi9BY3Rpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNhdmVBY3Rpb24gPSBmdW5jdGlvbihzaXRlLCBvcHRpb25zKSB7XHJcblx0QWN0aW9uLmNhbGwodGhpcywgc2l0ZSwgb3B0aW9ucyk7XHJcblxyXG5cdHRoaXMuZG8gPSBmdW5jdGlvbihtYWluKSB7XHJcblx0XHRBY3Rpb24ucHJvdG90eXBlLmRvLmNhbGwodGhpcywgbWFpbik7XHJcblxyXG5cdFx0Ly8gR2V0IHRoZSByZXF1aXNpdGUgdGFiIGNvbnRlbnRzXHJcblx0XHRjb25zdCBzb3VyY2VzID0gdGhpcy5nZXRTb3VyY2VzKCk7XHJcblxyXG5cdFx0Y29uc3QgcGFyYW1zID0ge1xyXG5cdFx0XHRhcHBUYWc6IG9wdGlvbnMuYXBwVGFnLFxyXG5cdFx0XHRuYW1lOiBvcHRpb25zLm5hbWUsXHJcblx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KHNvdXJjZXMpLFxyXG5cdFx0XHR0eXBlOiAnYXBwbGljYXRpb24vanNvbidcclxuXHRcdH07XHJcblxyXG5cdFx0c2l0ZS5hcGkucG9zdCgnL2FwaS9maWxlc3lzdGVtL3NhdmUnLCBwYXJhbXMpXHJcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdHNpdGUudG9hc3QodGhpcywgJ1N1Y2Nlc3NmdWxseSBzYXZlZCB0byBzZXJ2ZXInKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0c2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcblNhdmVBY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBY3Rpb24ucHJvdG90eXBlKTtcclxuU2F2ZUFjdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTYXZlQWN0aW9uO1xyXG5cclxuU2F2ZUFjdGlvbi50YWcgPSAnc2F2ZSc7IiwiXHJcblxyXG4vKipcclxuICogQ29udmVuaWVuY2UgZnVuY3Rpb25zIGZvciB0aGUgRE9NLlxyXG4gKiBUb29scyB0aGF0IGF2b2lkIGhhdmluZyB0byBoYXZlIGpRdWVyeSBpbnN0YWxsZWQuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRvb2xzID0gZnVuY3Rpb24oKSB7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogSXMgYW4gZWxlbWVudCB2aXNpYmxlP1xyXG4gKiBCb3Jyb3dlZCBmcm9tIGpRdWVyeSFcclxuICogQHBhcmFtIGVsZW1cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5Ub29scy5pc1Zpc2libGUgPSBmdW5jdGlvbiggZWxlbSApIHtcclxuICAgIHJldHVybiAhISggZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICk7XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkIGEgY2xhc3MgdG8gYW4gZWxlbWVudFxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGFkZCB0b1xyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIENsYXNzIHRvIGFkZFxyXG4gKi9cclxuVG9vbHMuYWRkQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdClcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIGVsc2VcclxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XHJcbn1cclxuXHJcblRvb2xzLmFkZENsYXNzZXMgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc2VzKSB7XHJcbiAgICBpZihjbGFzc2VzID09PSB1bmRlZmluZWQgfHwgY2xhc3NlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaCgoY2xzKSA9PiB7XHJcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3MoZWxlbWVudCwgY2xzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5Ub29scy5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgbGV0IHJlZ0V4ID0gbmV3IFJlZ0V4cCgnXFxcXGInICsgY2xhc3NOYW1lICsgJ1xcXFxiJywgJ2cnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZWdFeCwgXCJcIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBESVYgd2l0aCBhIHByb3ZpZGVkIGNsYXNzIG5hbWUuXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgQ2xhc3MgdG8gYWRkIHRvIHRoZSBkaXZcclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudCB0byBwbGFjZSBpbiB0aGUgZGl2LiBIVE1MIG9yIEVsZW1lbnRcclxuICogQHJldHVybnMge0VsZW1lbnR9IENyZWF0ZWQgRE9NIEVsZW1lbnRcclxuICovXHJcblRvb2xzLmNyZWF0ZUNsYXNzZWREaXYgPSBmdW5jdGlvbihjbGFzc05hbWUsIGNvbnRlbnQpIHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFRvb2xzLmFkZENsYXNzKGRpdiwgY2xhc3NOYW1lKTtcclxuICAgIGlmKGNvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xyXG5cdCAgICBUb29scy5hZGRDb250ZW50KGRpdiwgY29udGVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIGNvbnRlbnQgdG8gYW4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBhZGQgdG9cclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudC4gQ2FuIGJlIEhUTUwgb3IgYW4gRWxlbWVudC5cclxuICovXHJcblRvb2xzLmFkZENvbnRlbnQgPSBmdW5jdGlvbihlbGVtZW50LCBjb250ZW50KSB7XHJcbiAgICBpZihUb29scy5pc1N0cmluZyhjb250ZW50KSkge1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XHJcbiAgICB9IGVsc2UgaWYoVG9vbHMuaXNFbGVtZW50KGNvbnRlbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIElzIHRoZSBwYXNzZWQgdmFsdWUgYSBzdHJpbmc/XHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5Ub29scy5pc1N0cmluZyA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8ICgoISF2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBTdHJpbmddJyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJcyB0aGUgcGFzc2VkIHZhbHVlIGFuIEhUTUxFbGVtZW50P1xyXG4gKiBAcGFyYW0gdmFsXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuVG9vbHMuaXNFbGVtZW50ID0gZnVuY3Rpb24odmFsKSB7XHJcbiAgICByZXR1cm4gdmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsICYmIHZhbC5ub2RlVmFsdWUgIT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IChzcGVjaWZpY2FsbHkgaXRzIGJvcmRlciBib3gsIHdoaWNoIGV4Y2x1ZGVzIG1hcmdpbnMpIHJlbGF0aXZlIHRvIHRoZSBkb2N1bWVudC5cclxuICogQHBhcmFtIGVsZW1lbnRcclxuICovXHJcblRvb2xzLm9mZnNldCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRyZXR1cm4ge1xyXG5cdCAgICBsZWZ0OiByZWN0LmxlZnQgKyBlbGVtZW50LnNjcm9sbExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQsXHJcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIGVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kIGEgY2hpbGQgYnkgdGFnTmFtZVxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKiBAcGFyYW0gdGFnTmFtZVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcblRvb2xzLmNoaWxkID0gZnVuY3Rpb24oZWxlbWVudCwgdGFnTmFtZSkge1xyXG5cdGZvcihjb25zdCBub2RlIG9mIGVsZW1lbnQuY2hpbGROb2Rlcykge1xyXG5cdCAgICBpZihub2RlLnRhZ05hbWUgPT09IHRhZ05hbWUpIHtcclxuXHQgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7VG9vbHN9IGZyb20gJy4uL0RPTS9Ub29scyc7XHJcblxyXG4vKipcclxuICogVG9hc3Qgbm90aWZpY2F0aW9uIHN5c3RlbVxyXG4gKiBqUXVlcnktZnJlZVxyXG4gKiBAcGFyYW0gbWFpbiBNYWluIG9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBUb2FzdCA9IGZ1bmN0aW9uKG1haW4pIHtcclxuXHQvKiogRGVmYXVsdCB0b2FzdCBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgKi9cclxuXHR0aGlzLmRlZmF1bHREdXJhdGlvbiA9IDIwMDA7XHJcblxyXG5cdC8qKiBJbnRlci10b2FzdCBkZWxheSB0aW1lIGluIG1pbGxpc2Vjb25kcyAqL1xyXG5cdHRoaXMuaW50ZXJUb2FzdERlbGF5ID0gNTAwO1xyXG5cclxuICAgIGxldCBtZXNzYWdlcyA9IFtdOyAgLy8gUGVuZGluZyBtZXNzYWdlc1xyXG4gICAgbGV0IGFjdGl2ZSA9IGZhbHNlOyAvLyBJcyB0aGVyZSBhbiBhY3RpdmUgbWVzc2FnZSBkaXNwbGF5aW5nP1xyXG5cclxuXHRsZXQgZWxlbWVudCA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSB0aGUgdG9hc3QgZGl2XHJcblx0ICogQHBhcmFtIGRpdiBEaXYgdG8gcHV0IHRoZSB0b2FzdCBpbnRvXHJcblx0ICovXHJcbiAgICB0aGlzLmNyZWF0ZSA9IChkaXYpID0+IHtcclxuXHRcdGVsZW1lbnQgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCd0b2FzdCcpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuXHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gJ3Rlc3RpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XHJcbiAgICBcdGlmKG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgIWFjdGl2ZSkge1xyXG5cdFx0ICAgIC8vIFNldCB0aGUgbWVzc2FnZVxyXG5cdFx0ICAgIGxldCBtZXNzYWdlID0gbWVzc2FnZXNbMF07XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzLnNwbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBtZXNzYWdlLm1zZztcclxuXHJcbiAgICAgICAgICAgIC8vIFNob3cgaXRcclxuXHRcdCAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvYXN0LWFjdGl2ZScpO1xyXG5cdFx0ICAgIGFjdGl2ZSA9IHRydWU7XHJcblxyXG5cdFx0ICAgIC8vIERlbGF5IHdoaWxlIGFjdGl2ZVxyXG5cdFx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0ICAgIFx0Ly8gSGlkZSBpdFxyXG5cdFx0XHQgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0b2FzdC1hY3RpdmUnKTtcclxuXHJcblx0XHRcdCAgICAvLyBEZWxheSBiZXR3ZWVuIHRvYXN0c1xyXG5cdFx0XHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdCAgICBcdGFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHQgICAgXHRzaG93KCk7XHJcblx0XHRcdCAgICB9LCB0aGlzLmludGVyVG9hc3REZWxheSlcclxuXHRcdCAgICB9LCBtZXNzYWdlLnRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogRGlzcGxheSBhIHRvYXN0IG1lc3NhZ2VcclxuXHQgKiBAcGFyYW0gbXNnIE1lc3NhZ2UgdG8gZGlzcGxheVxyXG5cdCAqIEBwYXJhbSB0aW1lIFRpbWUgdG8gZGlzcGxheSBpbiBtaWxsaXNlY29uZHMsIG9taXQgZm9yIGRlZmF1bHRcclxuXHQgKi9cclxuXHR0aGlzLm1lc3NhZ2UgPSBmdW5jdGlvbihtc2csIHRpbWUpIHtcclxuICAgICAgICBpZih0aW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGltZSA9IHRoaXMuZGVmYXVsdER1cmF0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWVzc2FnZXMucHVzaCh7bXNnOiBtc2csIHRpbWU6IHRpbWV9KTtcclxuICAgICAgICBzaG93KCk7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERpc3BsYXkgYW55IEpTT04gZXJyb3JzIHdlIGhhdmUgcmVjZWl2ZWQuXHJcblx0ICogQHBhcmFtIGpzb25BcGkgSnNvbkFQSSBvYmplY3RcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBhbnkgZXJyb3JzIGV4aXN0ZWQuXHJcblx0ICovXHJcblx0dGhpcy5qc29uRXJyb3JzID0gZnVuY3Rpb24oanNvbkFwaSkge1xyXG4gICAgICAgIGlmKGpzb25BcGkuZXJyb3JzKCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAganNvbkFwaS5lcnJvcnMoKS5mb3JFYWNoKChlcnJvcik9PntcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSgnU2VydmVyIEVycm9yOiAnICsgZXJyb3IudGl0bGUsIDUwMDApO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVzaXplciBmcm9tICdyZXNpemVyLWNsJztcclxuXHJcbmltcG9ydCB7TWVudX0gZnJvbSAnLi9NZW51JztcclxuaW1wb3J0IHtUb2FzdH0gZnJvbSAnLi9HcmFwaGljcy9Ub2FzdCc7XHJcbmltcG9ydCB7RHJhZ0FuZERyb3B9IGZyb20gJy4vVUkvRHJhZ0FuZERyb3AnO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tICcuL0RPTS9Ub29scyc7XHJcbmltcG9ydCB7UGFuZX0gZnJvbSBcIi4vUGFuZVwiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBY3R1YWwgaW5zdGFuY2Ugb2YgdGhlIFBsYXlncm91bmQgZm9yIGEgc2luZ2xlIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBwbGF5Z3JvdW5kIFRoZSBtYWluIFBsYXlncm91bmQgb2JqZWN0XHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgd2UgYXJlIGxvYWRpbmcgaW50b1xyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBNYWluID0gZnVuY3Rpb24ocGxheWdyb3VuZCwgZWxlbWVudCkge1xyXG4gICAgdGhpcy5wbGF5Z3JvdW5kID0gcGxheWdyb3VuZDtcclxuICAgIHRoaXMuc2l0ZSA9IHBsYXlncm91bmQuc2l0ZTtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBwbGF5Z3JvdW5kLm9wdGlvbnM7XHJcblxyXG4gICAgLy8vIGRpdi5tYWluXHJcbiAgICB0aGlzLmRpdiA9IG51bGw7XHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSBwbGF5Z3JvdW5kLm9wdGlvbnM7XHJcblxyXG4gICAgLy8vIFJlZmVyZW5jZXMgdG8gb3RoZXIgR1VJIGNvbXBvbmVudHNcclxuICAgIGxldCBtZW51PW51bGwsIHRhYnM9bnVsbDtcclxuXHJcbiAgICAvLy8gZGl2Lm92ZXJsYXlcclxuICAgIGxldCBkaXZPdmVybGF5ID0gbnVsbCwgZGl2V29yaz1udWxsO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kJyk7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcblx0ICAgIGlmKG9wdGlvbnMuaGVpZ2h0ICE9PSBudWxsKSB7XHJcblx0XHQgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuXHQgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2gob3B0aW9ucy5kaXNwbGF5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Z1bGwnOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLWZ1bGwnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuXHQgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtd2luZG93Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMuZGlzcGxheSA9PT0gJ3dpbmRvdycpIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQWRkIHJlc2l6ZXIgdG8gdGhlIHdpbmRvdyBpZiBpbiB3aW5kb3cgbW9kZVxyXG4gICAgICAgICAgICAvLyBhbmQgaXQgaGFzIG5vdCBhbHJlYWR5IGJlZW4gYWRkZWRcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgaWYoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVzaXplclwiKSkge1xyXG4gICAgICAgICAgICAgICAgbmV3IFJlc2l6ZXIoZWxlbWVudCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogJzEwcHggc29saWQgIzE4NDUzQidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYWdBbmREcm9wID0gbmV3IERyYWdBbmREcm9wKHRoaXMpO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgYWRkIHRoZSB3aW5kb3cgY29tcG9uZW50c1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYob3B0aW9ucy5kaXNwbGF5ICE9PSAnaW5saW5lJyAmJiBvcHRpb25zLmRpc3BsYXkgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBBbGwgd2luZG93LWJhc2VkIHZlcnNpb25zIG90aGVyIHRoYW4gaW5saW5lIGdldCB0aGVcclxuICAgICAgICAgICAgLy8gZnVsbCB1c2VyIGludGVyZmFjZVxyXG4gICAgICAgICAgICAvL1xyXG5cclxuICAgICAgICAgICAgLy8gPGRpdiBjbGFzcz1cIm1haW5cIj48L2Rpdj5cclxuICAgICAgICAgICAgdGhpcy5kaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdjbC1wZy1tYWluJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmRpdik7XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBBZGQgdGhlIG1lbnVcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgbWVudSA9IG5ldyBNZW51KHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm1lbnUgPSBtZW51O1xyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gV29ya2luZyBhcmVhXHJcbiAgICAgICAgICAgIC8vIDxkaXYgY2xhc3M9XCJ3b3JrXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGRpdldvcmsgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCd3b3JrJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKGRpdldvcmspO1xyXG5cclxuXHJcblx0XHRcdC8vXHJcblx0ICAgICAgICAvLyBBbmQgdGhlIHJvb3QgcGFuZVxyXG5cdCAgICAgICAgLy9cclxuXHQgICAgICAgIHRoaXMucm9vdFBhbmUgPSBuZXcgUGFuZSh0aGlzLCBkaXZXb3JrLCBudWxsLCBudWxsKTtcclxuXHQgICAgICAgIHRoaXMucm9vdFBhbmUubG9hZChvcHRpb25zLnBhbmUpO1xyXG5cclxuXHQgICAgICAgIC8vXHJcblx0ICAgICAgICAvLyBBbmQgdGhlIG92ZXJsYXlcclxuXHQgICAgICAgIC8vIDxkaXYgY2xhc3M9XCJjaXJzaW0tb3ZlcmxheVwiPjwvZGl2PlxyXG5cdCAgICAgICAgLy9cclxuXHQgICAgICAgIGRpdk92ZXJsYXkgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdjbC1wZy1vdmVybGF5Jyk7XHJcblx0ICAgICAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZChkaXZPdmVybGF5KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9hc3QgPSBuZXcgVG9hc3QodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMudG9hc3QuY3JlYXRlKHRoaXMuZGl2KTtcclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEFueSBkYXRhIHRvIGxvYWQ/XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMubG9hZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvYWQgPSBvcHRpb25zLmxvYWQ7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgbG9hZCA9PT0gJ3N0cmluZycgfHwgbG9hZCBpbnN0YW5jZW9mIFN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWQgPSBKU09OLnBhcnNlKGxvYWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCB0YWcgaW4gbG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhYiA9IHRoaXMuZ2V0VGFiKHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGFiICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5zZXQobG9hZFt0YWddKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0VGFiID0gZnVuY3Rpb24odGFnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdFBhbmUuZ2V0VGFiKHRhZyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW5ldmVyIGEgbmV3IHRhYiBpcyBzZWxlY3RlZFxyXG4gICAgICovXHJcbiAgICB0aGlzLm5ld1RhYiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IG9yIGNsZWFyIGludGVyZmFjZSBtb2RhbCBzdGF0ZS5cclxuICAgICAqIEBwYXJhbSBtb2RhbCBUcnVlIHNldHMgaW50ZXJmYWNlIHRvIG1vZGFsIHN0YXRlLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgdGhpcy5tb2RhbCA9IGZ1bmN0aW9uKG1vZGFsKSB7XHJcbiAgICAgICAgaWYobW9kYWwpIHtcclxuICAgICAgICAgICAgZGl2T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXZPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcclxufVxyXG4iLCJpbXBvcnQge1Rvb2xzfSBmcm9tICcuL0RPTS9Ub29scyc7XHJcblxyXG4vLyBpbXBvcnQge0ZpbGVNZW51fSBmcm9tICcuL01lbnVzL0ZpbGVNZW51JztcclxuLy8gaW1wb3J0IHtFZGl0TWVudX0gZnJvbSAnLi9NZW51cy9FZGl0TWVudSc7XHJcbi8vIGltcG9ydCB7VGFic01lbnV9IGZyb20gJy4vTWVudXMvVGFic01lbnUnO1xyXG4vLyBpbXBvcnQge0hlbHBNZW51fSBmcm9tICcuL01lbnVzL0hlbHBNZW51JztcclxuXHJcbi8qKlxyXG4gKiBUaGUgcHJvZ3JhbSBtZW51IGJhclxyXG4gKiBAcGFyYW0gbWFpbiBNYWluIG9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBNZW51ID0gZnVuY3Rpb24obWFpbikge1xyXG5cdGNvbnN0IG9wdGlvbnMgPSBtYWluLm9wdGlvbnM7XHJcblxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBDcmVhdGUgdGhlIG1lbnUgY29tcG9uZW50c1xyXG4gICAgLy9cclxuICAgIC8vIHZhciBmaWxlTWVudSA9IG5ldyBGaWxlTWVudSh0aGlzLCBtYWluKTtcclxuICAgIC8vIHZhciBlZGl0TWVudSA9IG5ldyBFZGl0TWVudSh0aGlzLCBtYWluKTtcclxuICAgIC8vIHZhciB0YWJzTWVudSA9IG5ldyBUYWJzTWVudSh0aGlzLCBtYWluKTtcclxuICAgIC8vIHZhciBoZWxwTWVudSA9IG5ldyBIZWxwTWVudSh0aGlzLCBtYWluKTtcclxuXHJcbiAgICAvLy8gVGhlIG5hdiBlbGVtZW50XHJcbiAgICB0aGlzLm5hdiA9IG51bGw7XHJcbiAgICB0aGlzLnVsID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gPG5hdiBjbGFzcz1cIm1lbnViYXJcIj48dWw+PC91bD48L25hdj5cclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMubmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3ModGhpcy5uYXYsICdjbC1wZy1tZW51YmFyJyk7XHJcbiAgICAgICAgbWFpbi5kaXYuYXBwZW5kQ2hpbGQodGhpcy5uYXYpO1xyXG5cclxuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgdGhpcy5uYXYuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgICAgIHRoaXMudWwgPSB1bDtcclxuXHJcbiAgICAgICAgY29uc3QgbWVudXMgPSBvcHRpb25zLm1lbnVzO1xyXG4gICAgICAgIG1lbnVzLnB1c2goe1xyXG5cdCAgICAgICAgbmFtZTogJ0hlbHAnLFxyXG5cdCAgICAgICAgbWVudXM6IFtcclxuXHRcdCAgICAgICAge25hbWU6ICdBYm91dCcsIGFjdGlvbjoge3RhZzogJ2Fib3V0J319XHJcblx0ICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBtZW51IG9mIG1lbnVzKSB7XHJcbiAgICAgICAgXHRjb25zdCB0b3BMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgXHR1bC5hcHBlbmRDaGlsZCh0b3BMSSk7XHJcblxyXG4gICAgICAgIFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBcdHRvcExJLmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAgIFx0YS5pbm5lclRleHQgPSBtZW51Lm5hbWU7XHJcblxyXG4gICAgICAgIFx0aWYobWVudS5hY3Rpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIFx0XHQvLyBUb3AgbGV2ZWwgb25seSBtZW51XHJcbiAgICAgICAgXHRcdGNvbnN0IGFjdGlvbiA9IG1haW4ucGxheWdyb3VuZC5nZXRBY3Rpb24obWVudS5hY3Rpb24pO1xyXG5cdFx0ICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBbYSwgdG9wTEldKSB7XHJcblx0XHQgICAgICAgIFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0XHRcdCAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHQgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdCAgICAgICAgYWN0aW9uLmRvKG1haW4pO1xyXG5cdFx0XHQgICAgICAgIH0pO1xyXG5cdFx0ICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgaWYobWVudS5tZW51cyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0ICAgICAgICBcdC8vIFB1bGwtZG93biBtZW51XHJcblx0ICAgICAgICBcdGNvbnN0IHN1YlVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHQgICAgICAgIFx0dG9wTEkuYXBwZW5kQ2hpbGQoc3ViVUwpO1xyXG5cclxuXHQgICAgICAgIFx0Zm9yKGNvbnN0IGVsZW1lbnQgb2YgW2EsIHRvcExJXSkge1xyXG5cdFx0XHQgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0XHQgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0ICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdFx0ICAgICAgICBpZihnZXRDb21wdXRlZFN0eWxlKHN1YlVMKS5nZXRQcm9wZXJ0eVZhbHVlKCd2aXNpYmlsaXR5JykgPT09ICdoaWRkZW4nKSB7XHJcblx0XHRcdFx0XHQgICAgICAgIG9wZW4odG9wTEkpO1xyXG5cdFx0XHRcdCAgICAgICAgfSBlbHNlIHtcclxuXHRcdFx0XHRcdCAgICAgICAgLy8gSWYgYWxyZWFkeSBvcGVuLCBjbG9zZSBhbGxcclxuXHRcdFx0XHRcdCAgICAgICAgdGhpcy5jbG9zZUFsbCgpO1xyXG5cdFx0XHRcdCAgICAgICAgfVxyXG5cclxuXHRcdFx0ICAgICAgICB9KTtcclxuXHRcdCAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIFx0Zm9yKGNvbnN0IHN1Yk1lbnUgb2YgbWVudS5tZW51cykge1xyXG5cdFx0XHQgICAgICAgIGNvbnN0IHN1YkxJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHRcdFx0ICAgICAgICBzdWJVTC5hcHBlbmRDaGlsZChzdWJMSSk7XHJcblxyXG5cdFx0XHQgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblx0XHRcdCAgICAgICAgc3ViTEkuYXBwZW5kQ2hpbGQoYSk7XHJcblx0XHRcdCAgICAgICAgYS5pbm5lclRleHQgPSBzdWJNZW51Lm5hbWU7XHJcblxyXG5cdFx0XHQgICAgICAgIGlmKHN1Yk1lbnUuYWN0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHQgICAgICAgIC8vIFRvcCBsZXZlbCBvbmx5IG1lbnVcclxuXHRcdFx0XHQgICAgICAgIGNvbnN0IGFjdGlvbiA9IG1haW4ucGxheWdyb3VuZC5nZXRBY3Rpb24oc3ViTWVudS5hY3Rpb24pO1xyXG5cdFx0XHRcdCAgICAgICAgaWYoYWN0aW9uICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHQgICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIFthLCB0b3BMSV0pIHtcclxuXHRcdFx0XHRcdFx0ICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICBhY3Rpb24uZG8obWFpbik7XHJcblx0XHRcdFx0XHRcdCAgICAgICAgfSk7XHJcblx0XHRcdFx0XHQgICAgICAgIH1cclxuXHRcdFx0XHQgICAgICAgIH1cclxuXHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0ICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBBZGQgdGhlIG1lbnUgY29tcG9uZW50J3MgSFRNTFxyXG4gICAgICAgIC8vXHJcblx0ICAgIC8vIGxldCBodG1sID0gJyc7XHJcblxyXG5cdCAgICAvLyBodG1sICs9IGZpbGVNZW51Lmh0bWwoKTtcclxuICAgICAgICAvLyBodG1sICs9IGVkaXRNZW51Lmh0bWwoKTtcclxuICAgICAgICAvLyBodG1sICs9IHRhYnNNZW51Lmh0bWwoKTtcclxuICAgICAgICAvLyBodG1sICs9IGhlbHBNZW51Lmh0bWwoKTtcclxuXHJcbiAgICAgICAgLy8gdWwuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcbiAgICAgICAgLy9cclxuXHQgICAgLy8gTWVudSBvcHRpb24gZm9yIHRlc3RpbmcgdGhlIFRvYXN0IGVycm9yIHJlcG9ydGluZyBtZWNoYW5pc21cclxuXHQgICAgLy9cclxuXHJcblx0ICAgIC8vIGh0bWwgKz0gYDxsaT48YSBjbGFzcz1cInRvYXN0LXRlc3RcIj5Ub2FzdCE8L2E+PC9saT5gO1xyXG5cdCAgICAvLyB1bC5pbm5lckhUTUwgPSBodG1sO1xyXG5cdFx0Ly9cclxuXHQgICAgLy8gdGhpcy50b2FzdHMgPSAwO1xyXG4gICAgICAgIC8vIHRoaXMuY2xpY2soJy50b2FzdC10ZXN0JywgKGV2ZW50KT0+IHtcclxuICAgICAgICAvLyBcdHRoaXMudG9hc3RzKys7XHJcbiAgICAgICAgLy8gXHRtYWluLnRvYXN0Lm1lc3NhZ2UoJ1RvYXN0IG1lc3NhZ2UgJyArIHRoaXMudG9hc3RzKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBJbnN0YWxsIGNsaWNrIGhhbmRsZXJzIGZvciBhbGwgdG9wLWxldmVsIG1lbnVzXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBmb3IoY29uc3Qgbm9kZSBvZiB1bC5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgLy8gICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gJ0xJJykge1xyXG4gICAgICAgIC8vICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIEZpbmQgdGhlIDx1bD4gaW4gdGhpcyBtZW51XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IHVsU3ViID0gVG9vbHMuY2hpbGQobm9kZSwgJ1VMJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYodWxTdWIgIT09IG51bGwpIHtcclxuXHQgICAgLy8gICAgICAgICAgICAgICAgIGlmKGdldENvbXB1dGVkU3R5bGUodWxTdWIpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ2hpZGRlbicpIHtcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgb3Blbihub2RlKTtcclxuXHQgICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gSWYgYWxyZWFkeSBvcGVuLCBjbG9zZSBhbGxcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUFsbCgpO1xyXG5cdCAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBBY3RpdmF0ZSBhbGwgb2YgdGhlIG1lbnVzXHJcbiAgICAgICAgLy8gZmlsZU1lbnUuYWN0aXZhdGUoKTtcclxuICAgICAgICAvLyBlZGl0TWVudS5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIC8vIHRhYnNNZW51LmFjdGl2YXRlKCk7XHJcbiAgICAgICAgLy8gaGVscE1lbnUuYWN0aXZhdGUoKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBMaXN0ZW4gdG8ga2V5IGRvd24gZXZlbnRzIHNvIHdlIGNhbiBjbG9zZSB0aGUgbWVudVxyXG4gICAgICogaWYgd2UgY2xpY2sgb3V0c2lkZSBvZiB0aGUgbWVudSB3aGlsZSBpdCBpcyBvcGVuLlxyXG5cdCAqIEBwYXJhbSBldmVudFxyXG5cdCAqL1xyXG5cdGNvbnN0IGNsb3NlTGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBTZWUgaWYgd2UgY2xpY2tlZCBvbiBzb21lIGNoaWxkIG9mIG5hdi4uLlxyXG4gICAgICAgIGxldCBub2RlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgZm9yKCA7IG5vZGUgIT09IG51bGw7IG5vZGUgPSBub2RlLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgaWYobm9kZSA9PT0gdGhpcy5uYXYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblx0ICAgIHRoaXMuY2xvc2VBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPcGVuIGEgbWVudVxyXG4gICAgY29uc3Qgb3BlbiA9IChsaSkgPT4ge1xyXG4gICAgICAgIC8vIEhpZGUgYW55IG90aGVyIG1lbnVzXHJcbiAgICAgICAgZm9yKGNvbnN0IG5vZGUgb2YgdGhpcy51bC5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gJ0xJJykge1xyXG5cdCAgICAgICAgICAgIGNvbnN0IHVsID0gVG9vbHMuY2hpbGQobm9kZSwgJ1VMJyk7XHJcbiAgICAgICAgICAgICAgICBpZih1bCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgLy8gVG9vbHMucmVtb3ZlQ2xhc3ModWwsICdjbC1wZy1tZW51LW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblx0ICAgIC8vIEFuZCBvcGVuIHRoaXMgbWVudVxyXG5cdCAgICBjb25zdCB1bCA9IFRvb2xzLmNoaWxkKGxpLCAnVUwnKTtcclxuXHQgICAgaWYodWwgIT09IG51bGwpIHtcclxuXHQgICAgXHR1bC5jbGFzc0xpc3QuYWRkKCdjbC1wZy1tZW51LW9wZW4nKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjbG9zZUxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2xvc2UgYWxsIG1lbnVzICovXHJcbiAgICB0aGlzLmNsb3NlQWxsID0gKCkgPT4ge1xyXG5cdCAgICBmb3IoY29uc3Qgbm9kZSBvZiB0aGlzLnVsLmNoaWxkTm9kZXMpIHtcclxuXHRcdCAgICBpZihub2RlLnRhZ05hbWUgPT09ICdMSScpIHtcclxuXHRcdFx0ICAgIGNvbnN0IHVsID0gVG9vbHMuY2hpbGQobm9kZSwgJ1VMJyk7XHJcblx0XHRcdCAgICBpZih1bCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdCAgICBUb29scy5yZW1vdmVDbGFzcyh1bCwgJ2NsLXBnLW1lbnUtb3BlbicpO1xyXG5cdFx0XHQgICAgfVxyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIEVuYWJsZSBvciBkaXNhYmxlIGEgbWVudSBvcHRpb24gYnkgc2VsZWN0b3JcclxuXHQgKiBAcGFyYW0gc2VsIFNlbGVjdG9yIGZvciB0aGUgbWVudSBvcHRpb24gKGxpa2UgJy50YWJzLWFkZCcpXHJcblx0ICogQHBhcmFtIGVuYWJsZSBUcnVlIHRvIGVuYWJsZVxyXG5cdCAqL1xyXG5cdHRoaXMuZW5hYmxlID0gKHNlbCwgZW5hYmxlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMudWwucXVlcnlTZWxlY3RvcihzZWwpO1xyXG4gICAgICAgIGlmKGVsZW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZW5hYmxlKSB7XHJcbiAgICAgICAgICAgIFRvb2xzLnJlbW92ZUNsYXNzKGVsZW1lbnQucGFyZW50Tm9kZSwgXCJtZW51LWRpc2FibGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLmFkZENsYXNzKGVsZW1lbnQucGFyZW50Tm9kZSwgXCJtZW51LWRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cdC8qKlxyXG4gICAgICogRmluZCBhIG1lbnUgb3B0aW9uIGJ5IHNlbGVjdG9yXHJcblx0ICogQHBhcmFtIHNlbFxyXG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fVxyXG5cdCAqL1xyXG5cdHRoaXMuZmluZCA9IChzZWwpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy51bC5xdWVyeVNlbGVjdG9yKHNlbCk7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogSW5zdGFsbCBhIG1lbnUgb3B0aW9uIGNsaWNrIGhhbmRlclxyXG5cdCAqIEBwYXJhbSBzZWwgU2VsZWN0b3IgZm9yIHRoZSBtZW51IG9wdGlvblxyXG5cdCAqIEBwYXJhbSBjbG9zdXJlIFRoZSBjbG9zdXJlIHRvIGNhbGwgKHBhc3NlcyAnZXZlbnQnKVxyXG5cdCAqL1xyXG5cdHRoaXMuY2xpY2sgPSAoc2VsLCBjbG9zdXJlKSA9PiB7XHJcblx0ICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmZpbmQoc2VsKTtcclxuXHQgICAgaWYoZWxlbWVudCAhPT0gbnVsbCkge1xyXG5cdCAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdCAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0ICAgICAgICAgICAgdGhpcy5jbG9zZUFsbCgpO1xyXG5cdCAgICAgICAgICAgIGNsb3N1cmUoZXZlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG59O1xyXG4iLCIvKipcclxuICogUGxheWdyb3VuZCBvcHRpb25zLlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBVc2VyIHByb3ZpZGVkIG9wdGlvbnMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCB2YWx1ZXMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcclxuXHJcbiAgICAvLy8gRGlzcGxheSBvcHRpb25zXHJcbiAgICAvLy8gd2luZG93IC0gRGlzcGxheXMgYXMgYSBzdGFuZGFyZCBkaXYgKGRlZmF1bHQpXHJcbiAgICB0aGlzLmRpc3BsYXkgPSAnd2luZG93JztcclxuXHJcbiAgICAvLy8gT3B0aW9uYWwgaGVpZ2h0IHNldHRpbmdcclxuICAgIHRoaXMuaGVpZ2h0ID0gbnVsbDtcclxuXHJcbiAgICAvLy8gVGhlIHBsYXlncm91bmQgcm9vdCBwYW5lXHJcbiAgICB0aGlzLnBhbmUgPSB7fTtcclxuXHJcbiAgICAvLy8gVGhlIHRvcC1sZXZlbCBtZW51IG9wdGlvbnNcclxuICAgIHRoaXMubWVudXMgPSBbe25hbWU6ICdBYm91dCd9XTtcclxuXHJcbiAgICAvLy8gQ29udGVudCB0byBpbml0aWFsbHkgbG9hZCBpbnRvIHRoZSB0YWJzXHJcbiAgICB0aGlzLmxvYWQgPSBudWxsO1xyXG5cclxuXHJcbiAgICBmb3IodmFyIHByb3BlcnR5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICBpZihvcHRpb25zLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uIFwiICsgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXNbcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBBUEkgb3BlcmF0aW9ucyBmb3IgYSBnaXZlbiBmaWxlIG1vZGUuXHJcbiAgICAgKiBAcGFyYW0gbW9kZSAnc2F2ZScsICdvcGVuJ1xyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ2V0QVBJID0gZnVuY3Rpb24obW9kZSkge1xyXG4gICAgICAgIGlmKHRoaXMuYXBpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5hcGkgPT09IE9iamVjdCh0aGlzLmFwaSkpIHtcclxuICAgICAgICAgICAgbGV0IG9iajtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYXBpW21vZGVdICE9PSB1bmRlZmluZWQpIHtcclxuIFxyXG4gICAgICAgICAgICAgICAgLy8gTW9kZSBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxyXG4gICAgICAgICAgICAgICAgdmFyIG1vZGVPYmogPSB0aGlzLmFwaVttb2RlXTtcclxuICAgICAgICAgICAgICAgIGlmKG1vZGVPYmoudXJsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNb2RlIGlzIG5vdCBzdXBwb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZW5kIGNvbnRlbnQgdHlwZVxyXG4gICAgICAgICAgICAgICAgb2JqID0ge3VybDogbW9kZU9iai51cmx9O1xyXG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai5jb250ZW50VHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNvbnRlbnRUeXBlID0gbW9kZU9iai5jb250ZW50VHlwZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmFwaS5jb250ZW50VHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNvbnRlbnRUeXBlID0gdGhpcy5hcGkuY29udGVudFR5cGU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5jb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKG1vZGVPYmouZXh0cmEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IG1vZGVPYmouZXh0cmE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5hcGkuZXh0cmEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHRoaXMuYXBpLmV4dHJhO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihtb2RlT2JqLm5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5uYW1lID0gbW9kZU9iai5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuYXBpLm5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5uYW1lID0gdGhpcy5hcGkubmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXBpLnVybCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb2JqID0ge3VybDogdGhpcy5hcGkudXJsfTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXBpLmV4dHJhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSB0aGlzLmFwaS5leHRyYTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcGkubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLm5hbWUgPSB0aGlzLmFwaS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7dXJsOiB0aGlzLmFwaX07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7VGFic30gZnJvbSAnLi9UYWJzJztcclxuXHJcbi8qKlxyXG4gKiBBIFBhbmUgaXMgYW4gYXJlYSBvZiB0aGUgSURFIHNjcmVlbiB0aGF0IGVpdGhlciBjb250YWlucyBhIHRhYiBzZXQgb3IgdHdvIGNoaWxkIHBhbmVzLlxyXG4gKiBAcGFyYW0gbWFpbiBNYWluIG9iamVjdFxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRoYXQgaXMgdGhlIGhvc3QgZm9yIHRoZSBwYW5lXHJcbiAqIEBwYXJhbSBwYXJlbnQgUGFuZSBwYXJlbnQgb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBhbmUgPSBmdW5jdGlvbihtYWluLCBlbGVtZW50LCBwYXJlbnQpIHtcclxuXHR0aGlzLm1pblNwbGl0ID0gMTA7XHJcblx0dGhpcy5tYXhTcGxpdCA9IDkwO1xyXG5cclxuXHRsZXQgZGl2ID0gbnVsbCwgY2hpbGQxID0gbnVsbCwgY2hpbGQyID0gbnVsbDtcclxuXHRsZXQgaG9yaXpvbnRhbFNwbGl0ID0gbnVsbDtcclxuXHRsZXQgdGFicyA9IG51bGw7XHJcblxyXG5cdGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcblx0XHQvL1xyXG5cdFx0Ly8gQ3JlYXRlIGFuZCBhZGQgdGhlIGRpdlxyXG5cdFx0Ly9cclxuXHJcblx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuZGl2ID0gZGl2O1xyXG5cclxuXHRcdGlmKHBhcmVudCA9PT0gbnVsbCkge1xyXG5cdFx0XHRkaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1yb290Jyk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuXHRcdC8vIGlmKGRvbm9yVGFicyAhPT0gbnVsbCkge1xyXG5cdFx0Ly8gXHR0YWJzID0gZG9ub3JUYWJzO1xyXG5cdFx0Ly8gXHR0YWJzLm5ld1BhcmVudCh0aGlzKTtcclxuXHRcdC8vIH0gZWxzZSB7XHJcblx0XHQvLyBcdHRhYnMgPSBuZXcgVGFicyhtYWluLCBkaXYpO1xyXG5cdFx0Ly8gfVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTG9hZCB0aGUgcGFuZSBmcm9tIHRoZSBkYXRhXHJcblx0ICogQHBhcmFtIGRhdGEgRGF0YSBmcm9tIG9wdGlvbnMgZm9yIHRoaXMgcGFuZVxyXG5cdCAqL1xyXG5cdHRoaXMubG9hZCA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGlmKGRhdGEuY2hpbGQxICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0Ly8gVGhpcyBpcyBhIHNwbGl0IHBhbmVcclxuXHRcdFx0dGhpcy5zcGxpdChkYXRhLmhvcml6LCBkYXRhLmNoaWxkMSwgZGF0YS5jaGlsZDIpO1xyXG5cdFx0XHR0aGlzLnBlcmNlbnRhZ2UoZGF0YS5wZXJjZW50YWdlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRhYnMgPSBuZXcgVGFicyhtYWluLCBkaXYpO1xyXG5cdFx0XHR0YWJzLmxvYWQoZGF0YS50YWJzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRoaXMuc3BsaXQgPSBmdW5jdGlvbihob3Jpem9udGFsLCBjaGlsZDFEYXRhLCBjaGlsZDJEYXRhKSB7XHJcblx0XHRob3Jpem9udGFsU3BsaXQgPSBob3Jpem9udGFsO1xyXG5cclxuXHRcdGNoaWxkMSA9IG5ldyBQYW5lKG1haW4sIGRpdiwgdGhpcywgdGFicyk7XHJcblx0XHRjaGlsZDIgPSBuZXcgUGFuZShtYWluLCBkaXYsIHRoaXMsIG51bGwpO1xyXG5cclxuXHRcdHRhYnMgPSBudWxsO1xyXG5cclxuXHRcdGlmKGhvcml6b250YWwpIHtcclxuXHRcdFx0Y2hpbGQxLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLWxlZnQnKTtcclxuXHRcdFx0Y2hpbGQyLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLXJpZ2h0Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkaXYuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xyXG5cdFx0XHRjaGlsZDEuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtdG9wJyk7XHJcblx0XHRcdGNoaWxkMi5kaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1ib3R0b20nKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGJhci5jbGFzc0xpc3QuYWRkKCdjbC1iYXInKTtcclxuXHRcdGNoaWxkMS5kaXYuYXBwZW5kQ2hpbGQoYmFyKTtcclxuXHJcblx0XHRiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHN0YXJ0RHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlKTtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRiYXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coZXZlbnQpO1xyXG5cclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdHN0YXJ0RHJhZ2dpbmcodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHJcblxyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZSk7XHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEVuZCk7XHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaENhbmNlbCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmNoaWxkMSA9IGNoaWxkMTtcclxuXHRcdHRoaXMuY2hpbGQyID0gY2hpbGQyO1xyXG5cclxuXHRcdHRoaXMucGVyY2VudGFnZSg1MCk7XHJcblxyXG5cdFx0aWYoY2hpbGQxRGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGNoaWxkMS5sb2FkKGNoaWxkMURhdGEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGNoaWxkMkRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRjaGlsZDIubG9hZChjaGlsZDJEYXRhKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge2NoaWxkMTogY2hpbGQxLCBjaGlsZDI6IGNoaWxkMn07XHJcblx0fVxyXG5cclxuXHRsZXQgc3RhcnRYID0gbnVsbCwgc3RhcnRZID0gbnVsbDtcclxuXHJcblx0Y29uc3Qgc3RhcnREcmFnZ2luZyA9ICh4LCB5KSA9PiB7XHJcblx0XHRzdGFydFggPSB4O1xyXG5cdFx0c3RhcnRZID0geTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGVuZERyYWdnaW5nID0gKCkgPT4ge1xyXG5cdFx0c3RhcnRYID0gbnVsbDtcclxuXHRcdHN0YXJ0WSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHJcblx0Y29uc3QgZHJhZ2dpbmcgPSAoeCwgeSkgPT4ge1xyXG5cdFx0Y29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cclxuXHRcdGlmKGhvcml6b250YWxTcGxpdCkge1xyXG5cdFx0XHRjb25zdCBtYWluWCA9IHJlY3QubGVmdCArIGVsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldDtcclxuXHRcdFx0Y29uc3Qgd2lkID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdDtcclxuXHRcdFx0aWYod2lkIDw9IDApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHBlciA9ICh4IC0gbWFpblgpIC8gd2lkICogMTAwO1xyXG5cdFx0XHR0aGlzLnBlcmNlbnRhZ2UocGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IG1haW5ZID0gcmVjdC50b3AgICsgZWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRjb25zdCBoaXQgPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xyXG5cdFx0XHRpZihoaXQgPD0gMCkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgcGVyID0gKHkgLSBtYWluWSkgLyBoaXQgKiAxMDA7XHJcblx0XHRcdHRoaXMucGVyY2VudGFnZShwZXIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgbW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGlmKGV2ZW50LndoaWNoID09PSAwKSB7XHJcblx0XHRcdG1vdXNlVXAoZXZlbnQpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0ZHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdXNlVXAgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZSk7XHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwKTtcclxuXHRcdGVuZERyYWdnaW5nKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB0b3VjaE1vdmUgID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRkcmFnZ2luZyh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdG91Y2hFbmQgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdGRyYWdnaW5nKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblxyXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmUpO1xyXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kKTtcclxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaENhbmNlbCk7XHJcblxyXG5cdFx0ZW5kRHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHRvdWNoQ2FuY2VsID0gKGV2ZW50KSA9PiB7XHJcblx0XHR0b3VjaEVuZChldmVudCk7XHJcblx0fVxyXG5cclxuXHR0aGlzLnBlcmNlbnRhZ2UgPSBmdW5jdGlvbihwZXIpIHtcclxuXHRcdGlmKHBlciA8IHRoaXMubWluU3BsaXQpIHtcclxuXHRcdFx0cGVyID0gdGhpcy5taW5TcGxpdDtcclxuXHRcdH0gZWxzZSBpZihwZXIgPiB0aGlzLm1heFNwbGl0KSB7XHJcblx0XHRcdHBlciA9IHRoaXMubWF4U3BsaXQ7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoaG9yaXpvbnRhbFNwbGl0KSB7XHJcblx0XHRcdGNoaWxkMS5kaXYuc3R5bGUud2lkdGggPSBwZXIgKyAnJSc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjaGlsZDEuZGl2LnN0eWxlLmhlaWdodCA9IHBlciArICclJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRoaXMuZ2V0VGFiID0gZnVuY3Rpb24odGFnKSB7XHJcblx0XHRmb3IoY29uc3QgY29sbGVjdGlvbiBvZiBbdGFicywgY2hpbGQxLCBjaGlsZDJdKSB7XHJcblx0XHRcdGlmKGNvbGxlY3Rpb24gIT09IG51bGwpIHtcclxuXHRcdFx0XHRsZXQgdGFiID0gY29sbGVjdGlvbi5nZXRUYWIodGFnKTtcclxuXHRcdFx0XHRpZih0YWIgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0YWI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG59IiwiaW1wb3J0IHtNYWlufSBmcm9tICcuL01haW4nO1xyXG5pbXBvcnQge09wdGlvbnN9IGZyb20gJy4vT3B0aW9ucyc7XHJcbmltcG9ydCB7UmVhZHl9IGZyb20gJy4vVXRpbGl0eS9SZWFkeSc7XHJcbmltcG9ydCB7QWN0aW9ufSBmcm9tICcuL0FjdGlvbnMvQWN0aW9uJztcclxuaW1wb3J0IHtBbGxBY3Rpb25zfSBmcm9tICcuL0FjdGlvbnMvQWxsQWN0aW9ucyc7XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBQbGF5Z3JvdW5kXHJcbiAqXHJcbiAqIFRoaXMgY3JlYXRlcyBhIHNpbmdsZSBJbnN0YW5jZSB0aGF0IG1hbmFnZXMgdGhlXHJcbiAqIGNvbXBvbmVudHMgYW5kIHN0YXJ0cyBhY3R1YWwgUGxheWdyb3VuZCB3aW5kb3dzLlxyXG4gKlxyXG4gKiBDb25zdHJ1Y3QgYW5kIHN0YXJ0IHJ1bm5pbmcgbGlrZSB0aGlzOlxyXG4gKlxyXG4gKiBHaXZlbiBhbiBIVE1MIGRpdjpcclxuICogICAgIDxkaXYgaWQ9XCJwbGF5Z3JvdW5kXCI+PC9kaXY+XHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgc2NyaXB0IHN0YXJ0cyBQbGF5Z3JvdW5kIGluIHRoYXQgZGl2OlxyXG4gKlxyXG4gKiAgICAgdmFyIHBsYXlncm91bmQgPSBuZXcgUGxheWdyb3VuZCgnI3BsYXlncm91bmQnKTtcclxuICogICAgIHBsYXlncm91bmQuc3RhcnQoKTtcclxuICpcclxuICogQHBhcmFtIHNpdGUgU2l0ZSBvYmplY3RcclxuICogQHBhcmFtIHNlbCBTZWxlY3RvciBvciBlbGVtZW50IHRvIGNyZWF0ZSBQbGF5Z3JvdW5kIGluIChjYW4gYmUgbWFueSlcclxuICogQHBhcmFtIG9wdGlvbnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgUGxheWdyb3VuZCBvcHRpb25zLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBQbGF5Z3JvdW5kID0gZnVuY3Rpb24oc2l0ZSwgc2VsLCBvcHRpb25zKSB7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIE1hc3RlciBzZXQgb2YgdGhlIHZlcnNpb25cclxuICAgIC8vXHJcbiAgICBsZXQgUEFDS0FHRSA9IHJlcXVpcmUoJy4uLy4uL3BhY2thZ2UuanNvbicpO1xyXG4gICAgdGhpcy52ZXJzaW9uID0gUEFDS0FHRS52ZXJzaW9uO1xyXG5cclxuICAgIHRoaXMuc2l0ZSA9IHNpdGU7XHJcblxyXG4gICAgLy8gUmVjb3JkIHRoZSBzZWxlY3RvclxyXG4gICAgdGhpcy5zZWwgPSBzZWw7XHJcblxyXG4gICAgLy8gVGhlIE9wdGlvbnMgb2JqZWN0IHRoYXQgbWFuYWdlcyB1c2VyIG9wdGlvbnNcclxuICAgIHRoaXMub3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuICAgIC8vIEEgY29sbGVjdGlvbiBvZiBNYWluIG9iamVjdHMuXHJcbiAgICB2YXIgbWFpbnMgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHRoZSBQbGF5Z3JvdW5kIHJ1bm5pbmcsIGNyZWF0aW5nIHRoZSB1c2VyIGludGVyZmFjZS5cclxuICAgICAqIFRoaXMgZG9lcyB3YWl0IGZvciBkb2N1bWVudCByZWFkeSBiZWZvcmUgY2FsbGluZ1xyXG4gICAgICogdGhpcy5zdGFydE5vdygpIHVubGVzcyB3ZSBhcmUgcnVubmluZyBpbiBuby13aW5kb3dcclxuICAgICAqIG1vZGUuIEluIHRoYXQgY2FzZSBpdCByZXR1cm5zIGEgc3RhcnRlZCBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5zdGFydCA9ICgpID0+IHtcclxuICAgICAgICBpZihzZWwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnROb3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlYWR5LmdvKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydE5vdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgdGhlIFBsYXlncm91bmQgcnVubmluZyBub3cuIERvZXMgbm90IHdhaXQgZm9yIGRvY3VtZW50IHJlYWR5LlxyXG4gICAgICovXHJcbiAgICB0aGlzLnN0YXJ0Tm93ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHNlbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgbWFpbiA9IG5ldyBNYWluKHRoaXMsIHNlbCk7XHJcbiAgICAgICAgICAgIG1haW5zLnB1c2gobWFpbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbCk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluID0gbmV3IE1haW4odGhpcywgZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBtYWlucy5wdXNoKG1haW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihtYWlucy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1haW5zWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBhIGNvbnN0cnVjdGVkIEFjdGlvbiBvYmplY3QgZnJvbSB0aGUgYXZhaWxhYmxlIHBsYXlncm91bmQgYWN0aW9ucy5cclxuXHQgKiBAcGFyYW0gYWN0aW9uIFRoZSBhY3Rpb24gZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuXHJcblx0ICogQHJldHVybnMgQWN0aW9uIG9iamVjdFxyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0QWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uKSB7XHJcbiAgICBcdGlmKFBsYXlncm91bmQuYWN0aW9uc1thY3Rpb24udGFnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBcdFx0cmV0dXJuIG5ldyAoUGxheWdyb3VuZC5hY3Rpb25zW2FjdGlvbi50YWddKShzaXRlLCBhY3Rpb24pO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBjb25zb2xlLmxvZygnUGxheWdyb3VuZCBhY3Rpb24gJyArIGFjdGlvbi50YWcgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XHJcblx0ICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5QbGF5Z3JvdW5kLkFjdGlvbiA9IEFjdGlvbjtcclxuXHJcblBsYXlncm91bmQuYWN0aW9ucyA9IHt9O1xyXG5cclxuUGxheWdyb3VuZC5hZGRBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb24pIHtcclxuXHR0aGlzLmFjdGlvbnNbYWN0aW9uLnRhZ10gPSBhY3Rpb247XHJcbn1cclxuXHJcbkFsbEFjdGlvbnMuYWRkQWxsKFBsYXlncm91bmQpOyIsImltcG9ydCB7VG9vbHN9IGZyb20gJy4vRE9NL1Rvb2xzJztcclxuaW1wb3J0IHtPdXRwdXRUYWJ9IGZyb20gJy4vVGFicy9PdXRwdXRUYWInO1xyXG5pbXBvcnQge0VkaXRvclRhYn0gZnJvbSAnLi9UYWJzL0VkaXRvclRhYic7XHJcblxyXG5pbXBvcnQgbWVudWJhcnMgZnJvbSAnLi4vLi4vaW1nL21lbnViYXJzLnBuZyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIE1hbmFnZXMgdGhlIHRhYnMgaW4gdGhlIG1vZGVsXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBwYXJhbSBlbGVtZW50IFBhcmVudCBlbGVtZW50XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRhYnMgPSBmdW5jdGlvbihtYWluLCBlbGVtZW50KSB7XHJcbiAgICAvLy8gVGhlIGN1cnJlbnRseSBhY3RpdmUgdmlldy90YWJcclxuICAgIHRoaXMuYWN0aXZlID0gLTE7XHJcblxyXG4gICAgLy8vIFRoZSBNYWluIG9iamVjdFxyXG4gICAgdGhpcy5tYWluID0gbWFpbjtcclxuXHJcbiAgICAvLy8gVGhlIFNpdGUgb2JqZWN0XHJcbiAgICB0aGlzLnNpdGUgPSBtYWluLnNpdGU7XHJcblxyXG4gICAgLy8gVGhlIGNvbGxlY3Rpb24gb2YgdGFic1xyXG4gICAgdmFyIHRhYnMgPSBbXTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gVGhlIHN0cnVjdHVyZTogPGRpdiBjbGFzcz1cImNsLXRhYnNcIj48dWw+PC91bD48ZGl2IGNsYXNzPVwiY2wtdmlld3NcIj48L2Rpdj48L2Rpdj5cclxuICAgIC8vIGRpdi50YWJzIC0gRW5jbG9zdXJlIGZvciBhbGwgdGFicyBjb250ZW50XHJcbiAgICAvLyB1bCAtIFRoZSB0YWJzIHdlIHNlbGVjdCBmcm9tXHJcbiAgICAvLyB2aWV3c0RpdiAtIFRoZSB2aWV3cyB3aXRoIHRoZSB0YWIgY29udGVudHNcclxuICAgIC8vXHJcblxyXG4gICAgbGV0IHRhYnNEaXYgPSBudWxsLCB1bCA9IG51bGwsIHZpZXdzRGl2ID0gbnVsbDtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBDcmVhdGUgdGhlIHRhYnMgc3lzdGVtXHJcblx0ICogQHBhcmFtIGRpdiBUaGUgZGl2IHdlIHB1dCB0aGUgdGFicyBpbnRvXHJcblx0ICovXHJcblx0dGhpcy5jcmVhdGUgPSBmdW5jdGlvbihkaXYpIHtcclxuICAgICAgICAvLyBDcmVhdGU6IDxkaXYgY2xhc3M9XCJjbC10YWJzXCI+PHVsPjwvdWw+PGRpdiBjbGFzcz1cImNsLXZpZXdzXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgdGFic0RpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXBnLXRhYnMnKTtcclxuICAgICAgICB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgdGFic0Rpdi5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG4gICAgICAgIHZpZXdzRGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtcGctdmlld3MnKTtcclxuICAgICAgICB0YWJzRGl2LmFwcGVuZENoaWxkKHZpZXdzRGl2KTtcclxuXHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRhYnNEaXYpO1xyXG5cclxuICAgICAgICAvLyBDbGVhciB0aGUgdGFicyBjb2xsZWN0aW9uXHJcbiAgICAgICAgdGFicyA9IFtdO1xyXG5cclxuXHQvL1x0dGhpcy5hZGQoJ3Byb2dyYW0nKTtcclxuLy9cdFx0dGhpcy5hZGQoJ291dHB1dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubG9hZCA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGZvcihjb25zdCB0YWJEYXRhIG9mIGRhdGEpIHtcclxuXHRcdFx0dGhpcy5hZGQodGFiRGF0YSk7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5uZXdQYXJlbnQgPSBmdW5jdGlvbihwYW5lKSB7XHJcblx0XHRwYW5lLmRpdi5hcHBlbmRDaGlsZCh0YWJzRGl2KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGxldCB0YWIgPSBudWxsO1xyXG5cclxuXHQgICAgc3dpdGNoKGRhdGEudHlwZSkge1xyXG5cdFx0ICAgIGNhc2UgJ2VkaXRvcic6XHJcblx0XHRcdCAgICB0YWIgPSBuZXcgRWRpdG9yVGFiKHRoaXMsIGRhdGEpO1xyXG5cdFx0ICAgIFx0YnJlYWs7XHJcblxyXG5cdFx0ICAgIGNhc2UgJ291dHB1dCc6XHJcblx0XHQgICAgXHR0YWIgPSBuZXcgT3V0cHV0VGFiKHRoaXMsIGRhdGEpO1xyXG5cdFx0ICAgIFx0YnJlYWs7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmKHRhYiAhPT0gbnVsbCkge1xyXG5cdFx0ICAgIHVsLmFwcGVuZENoaWxkKHRhYi5saSk7XHJcblx0XHQgICAgdmlld3NEaXYuYXBwZW5kQ2hpbGQodGFiLnZpZXcpO1xyXG5cdFx0ICAgIHRhYnMucHVzaCh7dGFiOiB0YWIsIGxpOiB0YWIubGksIHZpZXc6IHRhYi52aWV3fSk7XHJcblxyXG5cdFx0ICAgIHRhYi5zZWxlY3QoKTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYSB0YWIgYnkgdGFnLlxyXG5cdCAqIEBwYXJhbSB0YWcgVGFiIHRhZ1xyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0VGFiID0gZnVuY3Rpb24odGFnKSB7XHJcblx0ICAgIGZvcihjb25zdCB0YWIgb2YgdGFicykge1xyXG5cdFx0ICAgIGlmKHRhYi50YWIudGFnID09PSB0YWcpIHtcclxuXHRcdFx0ICAgIHJldHVybiB0YWIudGFiO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51bnNlbGVjdEFsbCA9IGZ1bmN0aW9uKCkge1xyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBDbGVhciBhbGwgc2VsZWN0aW9uc1xyXG5cdCAgICAvL1xyXG5cdCAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xyXG5cdCAgICBcdHRhYi5saS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG5cdCAgICBcdHRhYi52aWV3LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcblx0ICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IC0xO1xyXG4gICAgICAgIHRhYnNEaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWJzRGl2KTtcclxuICAgICAgICB0YWJzRGl2ID0gbnVsbDtcclxuICAgICAgICB0YWJzID0gW107XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY3JlYXRlKGVsZW1lbnQpO1xyXG59O1xyXG4iLCJpbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVkaXRvclRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcclxuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcclxuXHJcblx0Y29uc3Qgc2l0ZSA9IHRhYnMuc2l0ZTtcclxuXHJcblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2VkaXRvcicpO1xyXG5cdHRoaXMudmlldyA9IHZpZXc7XHJcblxyXG5cdGxldCBpbm5lclZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmFwcGVuZENoaWxkKGlubmVyVmlldyk7XHJcblxyXG5cdGxldCBudW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0bnVtcy5jbGFzc0xpc3QuYWRkKCdjbC1wZy1udW1zJyk7XHJcblx0aW5uZXJWaWV3LmFwcGVuZENoaWxkKG51bXMpO1xyXG5cclxuXHRsZXQgZWRpdG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0ZWRpdG9yRGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLWVkaXRvcicpO1xyXG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChlZGl0b3JEaXYpO1xyXG5cclxuXHRjb25zdCBlZGl0b3IgPSBuZXcgc2l0ZS5FZGl0b3IoZWRpdG9yRGl2LCB7XHJcblx0XHRyZXNpemU6ICdub25lJyxcclxuXHRcdHRhYjogdHJ1ZSxcclxuXHRcdGF1dG9JbmRlbnQ6IHRydWUsXHJcblx0XHRzdHlsZXM6IG51bGxcclxuXHR9KTtcclxuXHJcblx0Y29uc3Qgc2Nyb2xsYWJsZSA9IGVkaXRvci50ZXh0YXJlYTtcclxuXHRzY3JvbGxhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4ge1xyXG5cdFx0Ly8gZWRpdG9yRGl2LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICcwcHggJyArICgtcHJlLnNjcm9sbFRvcCkgKyAncHgnO1xyXG5cdFx0bnVtcy5zY3JvbGxUb3AgPSBzY3JvbGxhYmxlLnNjcm9sbFRvcDtcclxuXHR9KTtcclxuXHJcblx0dGhpcy5zZXQgPSBmdW5jdGlvbih0ZXh0KSB7XHJcblx0XHQvLyBEYXRhIGZyb20gdGhlIGZpbGUgc3lzdGVtIG1heSBjb25zaXN0IG9mIGVpdGhlciBqdXN0XHJcblx0XHQvLyB0ZXh0IChvbGQgZm9ybWF0KSBvciB0ZXh0IGluIGFuIG9iamVjdC4gVGhpcyBhbGxvd3NcclxuXHRcdC8vIGVpdGhlciBjYXNlIHRvIHdvcmsuXHJcblx0XHRpZih0ZXh0LmRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0ZXh0ID0gdGV4dC5kYXRhO1xyXG5cdFx0fVxyXG5cclxuXHRcdGVkaXRvci50ZXh0YXJlYS52YWx1ZSA9IHRleHQ7XHJcblxyXG5cdFx0bGV0IGxpbmVzID0gMDtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKXtcclxuXHRcdFx0aWYodGV4dFtpXSA9PT0gJ1xcbicpIHtcclxuXHRcdFx0XHRsaW5lcysrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYobGluZXMgPCAxMDApIHtcclxuXHRcdFx0bGluZXMgPSAxMDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVGhlIGV4dHJhIGFkZGVkIG9uIGhlcmUgZW5zdXJlcyB3ZSBnZXQgcGFzdCBhbnkgc2Nyb2xsIGJhclxyXG5cdFx0Ly8gdGhhdCBtYXkgdGFrZSB1cCBob3Jpem9udGFsIHJvb20uXHJcblx0XHRudW1zLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0Zm9yKGxldCBpPTE7IGk8PWxpbmVzKzU7IGkrKykge1xyXG5cdFx0XHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0XHRwLmlubmVyVGV4dCA9ICcnICsgaTtcclxuXHRcdFx0bnVtcy5hcHBlbmRDaGlsZChwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgY29udGVudHMgb2YgdGhlIGVkaXRvclxyXG5cdCAqIEByZXR1cm5zIHsqfHN0cmluZ31cclxuXHQgKi9cclxuXHR0aGlzLmdldCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGVkaXRvci50ZXh0YXJlYS52YWx1ZTtcclxuXHR9XHJcblxyXG5cdHRoaXMuc2VsZWN0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRUYWIucHJvdG90eXBlLnNlbGVjdC5jYWxsKHRoaXMpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRlZGl0b3IudGV4dGFyZWEuZm9jdXMoKTtcclxuXHRcdH0sIDApO1xyXG5cclxuXHR9XHJcblxyXG5cdHRoaXMuc2V0KCcnKTtcclxufVxyXG5cclxuRWRpdG9yVGFiLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVGFiLnByb3RvdHlwZSk7XHJcbkVkaXRvclRhYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFZGl0b3JUYWI7IiwiaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcclxuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcclxuXHJcblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ291dHB1dCcpO1xyXG5cdHRoaXMudmlldyA9IHZpZXc7XHJcblxyXG5cdGxldCBpbm5lclZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmFwcGVuZENoaWxkKGlubmVyVmlldyk7XHJcblxyXG5cdGxldCBudW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0bnVtcy5jbGFzc0xpc3QuYWRkKCdjbC1wZy1udW1zJyk7XHJcblx0aW5uZXJWaWV3LmFwcGVuZENoaWxkKG51bXMpO1xyXG5cclxuXHRsZXQgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XHJcblx0aW5uZXJWaWV3LmFwcGVuZENoaWxkKHByZSk7XHJcblxyXG5cdHByZS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXZlbnQpID0+IHtcclxuXHRcdHByZS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnMHB4ICcgKyAoLXByZS5zY3JvbGxUb3ApICsgJ3B4JztcclxuXHRcdG51bXMuc2Nyb2xsVG9wID0gcHJlLnNjcm9sbFRvcDtcclxuXHR9KTtcclxuXHJcblx0dGhpcy5zZXQgPSBmdW5jdGlvbih0ZXh0KSB7XHJcblx0XHRwcmUuaW5uZXJIVE1MID0gdGV4dDtcclxuXHJcblx0XHRsZXQgbGluZXMgPSAwO1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyArK2kpe1xyXG5cdFx0XHRpZih0ZXh0W2ldID09PSAnXFxuJykge1xyXG5cdFx0XHRcdGxpbmVzKys7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZihsaW5lcyA8IDEwMCkge1xyXG5cdFx0XHRsaW5lcyA9IDEwMDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBUaGUgZXh0cmEgYWRkZWQgb24gaGVyZSBlbnN1cmVzIHdlIGdldCBwYXN0IGFueSBzY3JvbGwgYmFyXHJcblx0XHQvLyB0aGF0IG1heSB0YWtlIHVwIGhvcml6b250YWwgcm9vbS5cclxuXHRcdG51bXMuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRmb3IobGV0IGk9MTsgaTw9bGluZXMrNTsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRcdHAuaW5uZXJUZXh0ID0gJycgKyBpO1xyXG5cdFx0XHRudW1zLmFwcGVuZENoaWxkKHApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgdGV4dCA9IGBpbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge2V4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7ZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcclxuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcclxuXHJcblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ291dHB1dCcpO1xyXG5cdHRoaXMudmlldyA9IHZpZXc7XHJcblx0XHJcblx0dmlldy5pbm5lclRleHQgPSBcXGBcXGA7XHJcbn1cclxuXHJcbmltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cdFxyXG5cdHZpZXcuaW5uZXJUZXh0ID0gXFxgXFxgO1xyXG59XHJcbmltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cdFxyXG5cdHZpZXcuaW5uZXJUZXh0ID0gXFxgXFxgO1xyXG59XHJcblxyXG5PdXRwdXRUYWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUYWIucHJvdG90eXBlKTtcclxuT3V0cHV0VGFiLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE91dHB1dFRhYjtgO1xyXG5cclxuXHQvL3RoaXMuc2V0KHRleHQgKyB0ZXh0ICsgdGV4dCArIHRleHQpO1xyXG5cdHRoaXMuc2V0KCcnKTtcclxufVxyXG5cclxuT3V0cHV0VGFiLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVGFiLnByb3RvdHlwZSk7XHJcbk91dHB1dFRhYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPdXRwdXRUYWI7IiwiXHJcbmV4cG9ydCBjb25zdCBUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0dGhpcy50YWJzID0gdGFicztcclxuXHJcblx0dGhpcy52aWV3ID0gbnVsbDtcclxuXHR0aGlzLnRhZyA9IGRhdGEudGFnO1xyXG5cdHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuXHJcblx0bGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHR0aGlzLmxpID0gbGk7XHJcblxyXG5cdGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cdGxpLmFwcGVuZENoaWxkKGEpO1xyXG5cdGEuaW5uZXJUZXh0ID0gZGF0YS5uYW1lO1xyXG5cclxuXHRsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHRsaS5hcHBlbmRDaGlsZChtZW51KTtcclxuXHQvLyBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblx0Ly8gbWVudS5hcHBlbmRDaGlsZChpbWcpO1xyXG5cdC8vIGltZy5zcmMgPSBtZW51YmFycztcclxuXHJcblx0bGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0aGlzLnNlbGVjdCgpO1xyXG5cdH0pO1xyXG5cclxuXHRhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5zZWxlY3QoKTtcclxuXHR9KTtcclxuXHJcblx0dGhpcy5zZXQgPSBmdW5jdGlvbih0ZXh0KSB7fVxyXG5cclxuXHQvL1xyXG5cdC8vIFRoZSBtZW51XHJcblx0Ly8gTWF5YmUgYWN0aXZhdGUgbGF0ZXIgb24/XHJcblx0Ly9cclxuXHQvLyBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Ly8gbWVudURpdi5jbGFzc0xpc3QuYWRkKCdjbC10YWItbWVudScpO1xyXG5cdC8vIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnY2wtbWVudS1vcGVuJyk7XHJcblx0Ly8gbGkuYXBwZW5kQ2hpbGQobWVudURpdik7XHJcblx0Ly9cclxuXHQvLyBjb25zdCBtZW51VUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdC8vIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudVVMKTtcclxuXHQvLyBtZW51VUwuaW5uZXJIVE1MID1cclxuXHQvLyBcdCc8bGk+PGEgY2xhc3M9XCJlZGl0LXVuZG9cIj48c3BhbiBjbGFzcz1cImljb25zLWNsIGljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS13XCI+PC9zcGFuPlVuZG88L2E+PC9saT4nICtcclxuXHQvLyBcdCc8bGk+PGEgY2xhc3M9XCJlZGl0LWRlbGV0ZVwiPjxzcGFuIGNsYXNzPVwiaWNvbnMtY2wgaWNvbnMtY2wtdHJhc2hcIj48L3NwYW4+RGVsZXRlPC9hPjwvbGk+JztcclxuXHQvL1xyXG5cdC8vIGNvbnN0IGNvbm5lY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHQvLyBtZW51RGl2LmFwcGVuZENoaWxkKGNvbm5lY3REaXYpO1xyXG5cdC8vXHJcblx0Ly8gaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblx0Ly8gY29ubmVjdERpdi5hcHBlbmRDaGlsZChpbWcpO1xyXG5cdC8vIGltZy5zcmMgPSBtZW51YmFycztcclxufVxyXG5cclxuVGFiLnByb3RvdHlwZS5zZWxlY3QgID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy50YWJzLnVuc2VsZWN0QWxsKCk7XHJcblxyXG5cdHRoaXMubGkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuXHR0aGlzLnZpZXcuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxufVxyXG4iLCIvKipcclxuICogRHJhZyBhbmQgZHJvcCBzdXBwb3J0IGZvciB0aGUgcGFsZXR0ZVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBEcmFnQW5kRHJvcCA9IGZ1bmN0aW9uKG1haW4pIHtcclxuXHJcblx0bGV0IGRyYWdFbGVtZW50ID0gbnVsbDsgLy8gRE9NIEVsZW1lbnRcclxuXHRsZXQgZHJhZ0l0ZW0gPSBudWxsOyAgICAvLyBQYWxldHRlSXRlbVxyXG5cdGxldCBkcm9wVmlld3MgPSBbXTsgICAgIC8vIFZpZXdcclxuXHJcblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0aWYoZXZlbnQud2hpY2ggPT09IDApIHtcclxuXHRcdFx0XHRtb3VzZVVwKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtb3VzZU1vdmUoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdG1vdXNlTW92ZSh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0bW91c2VVcChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRtb3VzZVVwKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdG1vdXNlVXAodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dGhpcy5kcmFnZ2FibGUgPSAocGFsZXR0ZUl0ZW0pID0+IHtcclxuXHRcdHBhbGV0dGVJdGVtLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGNsaWNrKHBhbGV0dGVJdGVtKTtcclxuXHJcblx0XHRcdG1vdXNlTW92ZShldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cGFsZXR0ZUl0ZW0uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGNsaWNrKHBhbGV0dGVJdGVtKTtcclxuXHJcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRtb3VzZU1vdmUodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dGhpcy5kcm9wcGFibGUgPSAodmlldywgY2FsbGJhY2spID0+IHtcclxuXHRcdGRyb3BWaWV3cy5wdXNoKHtcclxuXHRcdFx0J3ZpZXcnOiB2aWV3LFxyXG5cdFx0XHQnY2FsbGJhY2snOiBjYWxsYmFja1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjbGljayA9IChwYWxldHRlSXRlbSkgPT4ge1xyXG5cdFx0Ly9cclxuXHRcdC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGVsZW1lbnQgYW5kIHNldCBpdCB1cCBmb3IgZHJhZ2dpbmdcclxuXHRcdC8vXHJcblx0XHRjb25zdCBjbG9uZSA9IHBhbGV0dGVJdGVtLnBhbGV0dGVJbWFnZSgpO1xyXG5cdFx0bWFpbi5lbGVtZW50LmFwcGVuZENoaWxkKGNsb25lKTtcclxuXHRcdGNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHRcdGNsb25lLnN0eWxlLnRvcCA9IDA7XHJcblx0XHRjbG9uZS5zdHlsZS5sZWZ0ID0gMDtcclxuXHRcdGNsb25lLnN0eWxlLnpJbmRleCA9IDEwMDtcclxuXHRcdGNsb25lLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuXHJcblx0XHRkcmFnSXRlbSA9IHBhbGV0dGVJdGVtO1xyXG5cdFx0ZHJhZ0VsZW1lbnQgPSBjbG9uZTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdXNlTW92ZSA9ICh4LCB5KSA9PiB7XHJcblx0XHRpZihkcmFnRWxlbWVudCAhPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCByZWN0ID0gbWFpbi5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRjb25zdCBtYWluWCA9IHJlY3QubGVmdCArIG1haW4uZWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG5cdFx0XHRjb25zdCBtYWluWSA9IHJlY3QudG9wICArIG1haW4uZWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRkcmFnRWxlbWVudC5zdHlsZS5sZWZ0ID0gKHggLSBtYWluWCAtIGRyYWdFbGVtZW50LmNsaWVudFdpZHRoIC8gMikgKyAncHgnO1xyXG5cdFx0XHRkcmFnRWxlbWVudC5zdHlsZS50b3AgPSAoeSAtIG1haW5ZIC0gZHJhZ0VsZW1lbnQuY2xpZW50SGVpZ2h0IC8gMikgKyAncHgnO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3VzZVVwID0gKHgsIHkpID0+IHtcclxuXHRcdGlmKGRyYWdFbGVtZW50ICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHRmb3IoY29uc3QgdmlldyBvZiBkcm9wVmlld3MpIHtcclxuXHRcdFx0XHQvL1xyXG5cdFx0XHRcdC8vIElzIHRoZSB2aWV3IGVuYWJsZWQ/XHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHRjb25zdCB2aWV3RWxlbWVudCA9IHZpZXcudmlldy5lbGVtZW50O1xyXG5cdFx0XHRcdGlmKHZpZXdFbGVtZW50LnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vXHJcblx0XHRcdFx0Ly8gRGV0ZXJtaW5lIHgseSBpbiB0aGUgY2FudmFzXHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHRjb25zdCByZWN0ID0gdmlld0VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0Y29uc3Qgdmlld1ggPSByZWN0LmxlZnQgKyB2aWV3RWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG5cdFx0XHRcdGNvbnN0IHZpZXdZID0gcmVjdC50b3AgKyB2aWV3RWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRcdGlmKHggPj0gdmlld1ggJiZcclxuXHRcdFx0XHRcdHkgPj0gdmlld1kgJiZcclxuXHRcdFx0XHRcdHggPCB2aWV3WCArIChyZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0KSAmJlxyXG5cdFx0XHRcdFx0eSA8IHZpZXdZICsgKHJlY3QuYm90dG9tIC0gcmVjdC50b3ApKSB7XHJcblx0XHRcdFx0XHR2aWV3LmNhbGxiYWNrKGRyYWdJdGVtLCB4IC0gdmlld1gsIHkgLSB2aWV3WSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1haW4uZWxlbWVudC5yZW1vdmVDaGlsZChkcmFnRWxlbWVudCk7XHJcblx0XHRcdGRyYWdFbGVtZW50ID0gbnVsbDtcclxuXHRcdFx0ZHJhZ0l0ZW0gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbn0iLCIvKipcclxuICogU2ltcGxlIERvY3VtZW50IHJlYWR5IGZ1bmN0aW9uLCBlcXVpdmFsZW50IHRvIGpRdWVyeSdzIGRvY3VtZW50IHJlYWR5LlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBSZWFkeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4vKipcclxuICogQ2FsbCBhIGZ1bmN0aW9uIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWRvbi5cclxuICogQHBhcmFtIGZuIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBkb2N1bWVudCByZWFkeVxyXG4gKi9cclxuUmVhZHkuZ28gPSBmdW5jdGlvbihmbikge1xyXG4gICAgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50ID8gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpe1xyXG4gICAgICAgIGZuKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtQbGF5Z3JvdW5kfSBmcm9tIFwiLi9QbGF5Z3JvdW5kL1BsYXlncm91bmRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5Z3JvdW5kRmFjdG9yeSA9IGZ1bmN0aW9uKCkge31cclxuXHJcblBsYXlncm91bmRGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcblx0ZnVuY3Rpb24gaW5zdGFsbCgpIHtcclxuXHRcdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNsLXBsYXlncm91bmQnKTtcclxuXHRcdGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcblx0XHRcdGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG5cdFx0XHRlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRjb25zdCBwbGF5Z3JvdW5kID0gbmV3IFBsYXlncm91bmQoc2l0ZSwgZWxlbWVudCwganNvbik7XHJcblx0XHRcdHBsYXlncm91bmQuc3RhcnROb3coKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNpdGUuc3RhcnQoICgpID0+IHtcclxuXHRcdGluc3RhbGwoKTtcclxuXHR9KTtcclxuXHJcblxyXG5cdHNpdGUubWVzc2FnZUxpc3RlbmVyKChtc2csIGRhdGEpID0+IHtcclxuXHRcdHN3aXRjaChtc2cpIHtcclxuXHRcdFx0Y2FzZSAnY2wtcXVpei1hZnRlci1pbnN0YWxsZWQnOlxyXG5cdFx0XHRcdGluc3RhbGwoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2NsLWdyYWRlcy1ncmFkZXItaW5zdGFsbGVkJzpcclxuXHRcdFx0XHRpbnN0YWxsKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRzaXRlLlBsYXlncm91bmQgPSBQbGF5Z3JvdW5kO1xyXG59XHJcblxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLTFkZGM2OGI0YTEvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS01LjIuNi0xMThjNmQ0MDllLTk5MzM1NGEyNDguemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtMWRkYzY4YjRhMS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtOTkzMzU0YTI0OC56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC0xZGRjNjhiNGExLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNS4yLjYtMTE4YzZkNDA5ZS05OTMzNTRhMjQ4LnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vaW1nL21lbnUtY2hlY2sucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4vaW1nL2JhcnMucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImRpdi5jbC1wbGF5Z3JvdW5kIGRpdi50b2FzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi4zZW0pO1xcbiAgei1pbmRleDogNDAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuNHMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAzMGVtLzIpO1xcbiAgd2lkdGg6IDMwZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC41ZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi50b2FzdC50b2FzdC1hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuNHM7XFxuICB6LWluZGV4OiA0MDA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM4MDgwODA7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzAwNzk2QjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIGEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkgYTpsaW5rLCBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgaW1nLmNoZWNrIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHdpZHRoOiAxOXB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDAuMjVlbSAyZW0gMC4yNWVtIDAuNWVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkgYSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkgYTpsaW5rLCBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkgYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMTAwJTtcXG4gIG1hcmdpbjogMXB4IDAgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCA+IGxpIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCA+IGxpIGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDhlbTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkubWVudS1kaXNhYmxlZCBhIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5jbC1wZy1tZW51LW9wZW4ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmVkaXQtbWVudSBhIHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwub3B0aW9uLW1lbnUgYSB7XFxuICB3aWR0aDogMTFlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5maWxlLW1lbnUgYSB7XFxuICB3aWR0aDogNmVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmhlbHAtbWVudSBhIHtcXG4gIHdpZHRoOiA3LjVlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCAudWwtc3RhdGUtYWN0aXZlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgbGkubWVudS1kaXZpZGVyIHtcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyOiAwIHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYud29yayB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6ICNhMDA7XFxuICBvcGFjaXR5OiAwLjA1O1xcbiAgei1pbmRleDogMjAwMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy1tYWluIHtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWZ1bGwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLXdpbmRvdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkICNhYWFhYWE7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1iZWZvcmUsIGRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGhlaWdodDogMXB4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC1nYXAtYWZ0ZXIge1xcbiAgaGVpZ2h0OiAxZW07XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6ICNkZGQ7XFxuICBib3JkZXI6IDA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogM3B4IDAgMCAycHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjI1ZW0gMC40NWVtIDA7XFxuICBtaW4td2lkdGg6IDZlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIG1hcmdpbjogMXB4IDNweCAtMXB4IDA7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgei1pbmRleDogMTg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAwLjI1ZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBvdXRsaW5lOiAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOm50aC1jaGlsZCgyKSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6bnRoLWNoaWxkKDIpIGltZyB7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgei1pbmRleDogMjI7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaS5zZWxlY3RlZCBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXdzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDI5cHg7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyBkaXYuY2wtcGctdmlldyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAyMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIGRpdi5jbC1wZy12aWV3LnNlbGVjdGVkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYygxMDAlIC0gMTdweCk7XFxuICB0b3A6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDI3cHg7XFxuICB0b3A6IDRweDtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSBkaXYgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDMwcHggMCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOGVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpLm1lbnUtZGlzYWJsZWQgYSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudS5jbC1tZW51LW9wZW4ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yb290LCBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0LCBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yaWdodCxcXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3AsIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODg4O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0IGRpdi5jbC1iYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3Age1xcbiAgZmxleDogMCAxIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODg4O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3AgZGl2LmNsLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm90dG9tOiAtNXB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHotaW5kZXg6IDI7XFxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yb290IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuZGl2LmNsLXBnLW51bXMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgd2lkdGg6IDJlbTtcXG4gIHBhZGRpbmc6IDRweCAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG59XFxuZGl2LmNsLXBnLW51bXMgcCB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDNweCAwIDA7XFxuICBib3JkZXI6IDA7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAjNzc3O1xcbn1cXG5cXG5kaXYuY2wtcGctYWJvdXQge1xcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuZGl2LmNsLXBnLWFib3V0IGZpZ3VyZSB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDIyNXB4O1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcbmRpdi5jbC1wZy1hYm91dCBkaXYuY2wtcGctYWJvdXQtZGl2IHtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYgaDEge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiBkaXYuY2wtcGctZWRpdG9yIHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiBkaXYuY2wtcGctZWRpdG9yIHRleHRhcmVhIHtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNHB4IDAgMCAzcHg7XFxuICBib3JkZXI6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3Lm91dHB1dCA+IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0ID4gZGl2IHByZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNHB4IDAgMCAzcHg7XFxuICBib3JkZXI6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fdG9hc3Quc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9tb2R1bGVzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9tb2R1bGVzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvX3BsYXlncm91bmQuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fcGxheWdyb3VuZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19tZW51LnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fd29yay5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX3RhYnMuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fcGFuZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19saW5lX251bWJlcnMuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fYWJvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fdGFiX2VkaXRvci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL190YWJfb3V0cHV0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLHVGQUFBO0VBRUEsMkRBQUE7RUFDQSxnQkNkYztFRGVkLHdCQUFBO0VBQ0EsV0NmVTtFRGdCVix5QkVZZTtFRlhmLFlFWVM7RUZYVCxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FH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QUFBO0FSb1pKOztBU3JhQTtFQUNFLHNCQUFBO0FUd2FGO0FTdGFFO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QVR3YUo7QVNyYUU7RUFDRSxZQUFBO0FUdWFKO0FTcmFJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBVHVhTjtBU3BhSTtFQUNFLGtCQUFBO0FUc2FOOztBVXhiRTtFQUNFLGdCQUFBO0FWMmJKO0FVeGJJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FWMGJOO0FVeGJNO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBVjBiUjtBVXhiUTtFQUNFLGlCQUFBO0VBRUEsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBRUEsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBVnViVjs7QVczZEU7RUFDRSxnQkFBQTtBWDhkSjtBVzVkSTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBWDhkTjtBVzVkTTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbURBQUE7RUFDQSxpQkFBQTtFQUVBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBWDZkUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaXYuY2wtcGxheWdyb3VuZFxcclxcbntcXHJcXG4gICR0b2FzdC10cmFuc2l0aW9uLXRpbWU6IDAuNHM7XFxyXFxuXFxyXFxuICBkaXYudG9hc3Qge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG5cXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi4zZW0pO1xcclxcbiAgICB6LWluZGV4OiA0MDA7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAkdG9hc3QtdHJhbnNpdGlvbi10aW1lIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAkdG9hc3QtdHJhbnNpdGlvbi10aW1lLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXHJcXG5cXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogJHRvYXN0LWZvbnQtc2l6ZTtcXHJcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAjeyR0b2FzdC13aWR0aH0vMik7XFxyXFxuICAgIHdpZHRoOiAkdG9hc3Qtd2lkdGg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0b2FzdC1iYWNrZ3JvdW5kO1xcclxcbiAgICBjb2xvcjogJHRvYXN0LXRleHQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LnRvYXN0LnRvYXN0LWFjdGl2ZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxyXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgJHRvYXN0LXRyYW5zaXRpb24tdGltZTtcXHJcXG4gICAgei1pbmRleDogNDAwO1xcclxcblxcclxcbiAgfVxcclxcbn1cIixcIiR0b2FzdC1mb250LXNpemU6IDEuMWVtO1xcclxcbiR0b2FzdC13aWR0aDogMzBlbTtcXHJcXG5cXHJcXG4kZHJhZy1iYXItd2lkdGg6IDEwcHg7XFxyXFxuXFxyXFxuJHRhYi1jb3JuZXItcmFkaXVzOiA1cHg7XFxyXFxuXCIsXCIvLyBUaGUgbWFqb3IgY29sb3JzXFxyXFxuLy8gV2UgaGF2ZSBhIHByaW1hcnkgY29sb3IsIHR3byBzZWNvbmRhcnkgY29sb3JzLCBhbmQgYSBjb21wbGVtZW50YXJ5IGNvbG9yLlxcclxcbiRkYXJrLXByaW1hcnk6ICMwMDc5NkI7XFxyXFxuJHByaW1hcnk6ICMwMDk2ODg7XFxyXFxuJGxpZ2h0LXByaW1hcnk6ICNCMkRGREI7XFxyXFxuJGFjY2VudDogIzYwN0Q4QjtcXHJcXG4kcHJpbWFyeS10ZXh0OiAjMjEyMTIxO1xcclxcbiRkaXZpZGVyLWNvbG9yOiAjQkRCREJEO1xcclxcbiRzZWNvbmRhcnktdGV4dDogIzYwNjA2MDtcXHJcXG5cXHJcXG4kY29tcDogI2M0MTQyNTtcXHJcXG4kd2luZG93LWJvcmRlcnM6ICNhYWFhYWE7XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuJHRhYnMtYmFja2dyb3VuZDogI2RkZDtcXHJcXG4kdGFiLWJhY2tncm91bmQ6ICNjY2M7XFxyXFxuJHRhYi10ZXh0OiBibGFjaztcXHJcXG4kdGFiLXNlbGVjdGVkLWJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiR0YWItc2VsZWN0ZWQtdGV4dDogYmxhY2s7XFxyXFxuXFxyXFxuJG1lbnUtZm9jdXM6ICRkYXJrLXByaW1hcnk7XFxyXFxuJG1lbnUtYmFja2dyb3VuZDogI2YwZjNmMDtcXHJcXG4kbWVudS1jb2xvcjogYmxhY2s7XFxyXFxuJG1lbnUtZGl2aWRlci1jb2xvcjogYmxhY2s7XFxyXFxuJG1lbnUtYm9yZGVyLWNvbG9yOiAjODA4MDgwO1xcclxcblxcclxcbiRyZXNpemVyOiAkZGFyay1wcmltYXJ5O1xcclxcblxcclxcbiR0b2FzdC1iYWNrZ3JvdW5kOiAjMTUxNTE1O1xcclxcbiR0b2FzdC10ZXh0OiB3aGl0ZTtcIixcImRpdi5jbC1wbGF5Z3JvdW5kIGRpdi50b2FzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi4zZW0pO1xcbiAgei1pbmRleDogNDAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuNHMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAzMGVtLzIpO1xcbiAgd2lkdGg6IDMwZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC41ZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi50b2FzdC50b2FzdC1hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuNHM7XFxuICB6LWluZGV4OiA0MDA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM4MDgwODA7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzAwNzk2QjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIGEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkgYTpsaW5rLCBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgaW1nLmNoZWNrIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHdpZHRoOiAxOXB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgY29udGVudDogdXJsKFxcXCIuLi8uLi9pbWcvbWVudS1jaGVjay5wbmdcXFwiKTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDAuMjVlbSAyZW0gMC4yNWVtIDAuNWVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkgYSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkgYTpsaW5rLCBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkgYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMTAwJTtcXG4gIG1hcmdpbjogMXB4IDAgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCA+IGxpIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCA+IGxpIGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDhlbTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkubWVudS1kaXNhYmxlZCBhIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5jbC1wZy1tZW51LW9wZW4ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmVkaXQtbWVudSBhIHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwub3B0aW9uLW1lbnUgYSB7XFxuICB3aWR0aDogMTFlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5maWxlLW1lbnUgYSB7XFxuICB3aWR0aDogNmVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmhlbHAtbWVudSBhIHtcXG4gIHdpZHRoOiA3LjVlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCAudWwtc3RhdGUtYWN0aXZlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgbGkubWVudS1kaXZpZGVyIHtcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyOiAwIHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYud29yayB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6ICNhMDA7XFxuICBvcGFjaXR5OiAwLjA1O1xcbiAgei1pbmRleDogMjAwMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy1tYWluIHtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWZ1bGwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLXdpbmRvdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkICNhYWFhYWE7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1iZWZvcmUsIGRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGhlaWdodDogMXB4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC1nYXAtYWZ0ZXIge1xcbiAgaGVpZ2h0OiAxZW07XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6ICNkZGQ7XFxuICBib3JkZXI6IDA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogM3B4IDAgMCAycHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjI1ZW0gMC40NWVtIDA7XFxuICBtaW4td2lkdGg6IDZlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIG1hcmdpbjogMXB4IDNweCAtMXB4IDA7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgei1pbmRleDogMTg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAwLjI1ZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBvdXRsaW5lOiAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOm50aC1jaGlsZCgyKSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6bnRoLWNoaWxkKDIpIGltZyB7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgei1pbmRleDogMjI7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaS5zZWxlY3RlZCBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXdzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDI5cHg7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyBkaXYuY2wtcGctdmlldyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAyMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIGRpdi5jbC1wZy12aWV3LnNlbGVjdGVkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYygxMDAlIC0gMTdweCk7XFxuICB0b3A6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDI3cHg7XFxuICB0b3A6IDRweDtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSBkaXYgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDMwcHggMCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOGVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpLm1lbnUtZGlzYWJsZWQgYSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudS5jbC1tZW51LW9wZW4ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yb290LCBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0LCBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yaWdodCxcXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3AsIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODg4O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0IGRpdi5jbC1iYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3Age1xcbiAgZmxleDogMCAxIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODg4O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3AgZGl2LmNsLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm90dG9tOiAtNXB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHotaW5kZXg6IDI7XFxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yb290IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuZGl2LmNsLXBnLW51bXMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgd2lkdGg6IDJlbTtcXG4gIHBhZGRpbmc6IDRweCAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG59XFxuZGl2LmNsLXBnLW51bXMgcCB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDNweCAwIDA7XFxuICBib3JkZXI6IDA7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAjNzc3O1xcbn1cXG5cXG5kaXYuY2wtcGctYWJvdXQge1xcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuZGl2LmNsLXBnLWFib3V0IGZpZ3VyZSB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDIyNXB4O1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcbmRpdi5jbC1wZy1hYm91dCBkaXYuY2wtcGctYWJvdXQtZGl2IHtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYgaDEge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiBkaXYuY2wtcGctZWRpdG9yIHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiBkaXYuY2wtcGctZWRpdG9yIHRleHRhcmVhIHtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNHB4IDAgMCAzcHg7XFxuICBib3JkZXI6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3Lm91dHB1dCA+IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0ID4gZGl2IHByZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi8uLi9pbWcvYmFycy5wbmdcXFwiKTtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNHB4IDAgMCAzcHg7XFxuICBib3JkZXI6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG59XCIsXCJkaXYuY2wtcGxheWdyb3VuZCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIixcImRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIHtcXHJcXG4gIGZsZXg6IDAgMSBhdXRvO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRtZW51LWJhY2tncm91bmQ7XFxyXFxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM4MDgwODA7XFxyXFxuICBmb250LXNpemU6ICRtZW51LWZvbnQtc2l6ZTtcXHJcXG5cXHJcXG4gIGxpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogJG1lbnUtZm9jdXM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBsaSB7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgIGEge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAkbWVudS1mb250O1xcclxcbiAgICAgIGZvbnQtc2l6ZTogJG1lbnUtZm9udC1zaXplO1xcclxcbiAgICAgIGNvbG9yOiAkbWVudS1jb2xvcjtcXHJcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYTpsaW5rLCBhOnZpc2l0ZWQge1xcclxcbiAgICAgIGNvbG9yOiAkbWVudS1jb2xvcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFRvcCBsZXZlbCBtZW51XFxyXFxuICAvL1xcclxcbiAgPiB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuXFxyXFxuICAgIGltZy5jaGVjayB7XFxyXFxuICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbiAgICAgIHdpZHRoOiAxOXB4O1xcclxcbiAgICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgICBjb250ZW50OiB1cmwoXFxcIi4uLy4uL2ltZy9tZW51LWNoZWNrLnBuZ1xcXCIpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgID4gbGkge1xcclxcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgIHBhZGRpbmc6IDAuMjVlbSAyZW0gMC4yNWVtIDAuNWVtO1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgICBhIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkbWVudS1mb250O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAkbWVudS1mb250LXNpemU7XFxyXFxuICAgICAgICBjb2xvcjogJG1lbnUtY29sb3I7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGE6bGluaywgYTp2aXNpdGVkIHtcXHJcXG4gICAgICAgIGNvbG9yOiAkbWVudS1jb2xvcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy9cXHJcXG4gICAgLy8gRHJvcC1kb3duIG1lbnVcXHJcXG4gICAgLy9cXHJcXG4gICAgdWwge1xcclxcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTtcXHJcXG4gICAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxyXFxuXFxyXFxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICAgIC8vIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICB0b3A6IDEwMCU7XFxyXFxuICAgICAgbWFyZ2luOiAxcHggMCAwIDA7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1lbnUtYmFja2dyb3VuZDtcXHJcXG4gICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRtZW51LWJvcmRlci1jb2xvcjtcXHJcXG4gICAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xcclxcblxcclxcbiAgICAgID4gbGkge1xcclxcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgd2lkdGg6IDhlbTtcXHJcXG4gICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgPiBsaS5tZW51LWRpc2FibGVkIHtcXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHVsLmNsLXBnLW1lbnUtb3BlbiB7XFxyXFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcclxcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4ycztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB1bC5lZGl0LW1lbnUgYSB7XFxyXFxuICAgICAgd2lkdGg6IDZlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB1bC5vcHRpb24tbWVudSBhIHtcXHJcXG4gICAgICB3aWR0aDogMTFlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB1bC5maWxlLW1lbnUgYSB7XFxyXFxuICAgICAgd2lkdGg6IDZlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB1bC5oZWxwLW1lbnUgYSB7XFxyXFxuICAgICAgd2lkdGg6IDcuNWVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC51bC1zdGF0ZS1hY3RpdmUge1xcclxcbiAgICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbGkubWVudS1kaXZpZGVyIHtcXHJcXG4gICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICBib3JkZXI6IDAgc29saWQgJG1lbnUtZGl2aWRlci1jb2xvcjtcXHJcXG4gICAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCIkbWVudS1mb250OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcclxcbiRtZW51LWZvbnQtc2l6ZTogMC45MHJlbTtcXHJcXG5cXHJcXG4kdGFicy1mb250OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcclxcbiR0YWJzLWZvbnQtc2l6ZTogMC44MHJlbTtcIixcImRpdi5jbC1wbGF5Z3JvdW5kIGRpdi53b3JrIHtcXHJcXG4gIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJkaXYuY2wtcGxheWdyb3VuZCB7XFxyXFxuXFxyXFxuICBkaXYuY2wtcGctb3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYTAwO1xcclxcbiAgICBvcGFjaXR5OiAwLjA1O1xcclxcbiAgICB6LWluZGV4OiAyMDAwO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNsLXBnLW1haW4ge1xcclxcbiAgICAvLyBOb3JtYWxpemF0aW9uc1xcclxcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5kaXYuY2wtcGxheWdyb3VuZC1mdWxsIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuY2wtcGxheWdyb3VuZC13aW5kb3cge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAkd2luZG93LWJvcmRlcnM7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXHJcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1iZWZvcmUsIGRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuY2wtcGxheWdyb3VuZC1nYXAtYWZ0ZXIge1xcclxcbiAgaGVpZ2h0OiAxZW07XFxyXFxufVxcclxcblxcclxcblwiLFwiXFxyXFxuZGl2LmNsLXBsYXlncm91bmQge1xcclxcbiAgZGl2LmNsLXBnLXRhYnMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgZm9udC1zaXplOiAkdGFicy1mb250LXNpemU7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6ICR0YWJzLWJhY2tncm91bmQ7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG5cXHJcXG4gICAgPnVsIHtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgcGFkZGluZzogM3B4IDAgMCAycHg7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgPmxpIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogJHRhYnMtZm9udC1zaXplO1xcclxcbiAgICAgICAgcGFkZGluZzogMC4yNWVtIDAuMjVlbSAwLjQ1ZW0gMDtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogNmVtO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogJHRhYi1iYWNrZ3JvdW5kO1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHRhYi1jb3JuZXItcmFkaXVzICR0YWItY29ybmVyLXJhZGl1cyAwIDA7XFxyXFxuICAgICAgICBtYXJnaW46IDFweCAzcHggLTFweCAwO1xcclxcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgICAgIHotaW5kZXg6IDE4O1xcclxcblxcclxcbiAgICAgICAgYTpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGFicy1mb250O1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xcclxcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICAgIGNvbG9yOiAkdGFiLXRleHQ7XFxyXFxuICAgICAgICAgIG91dGxpbmU6IDA7XFxyXFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgYTpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcXHJcXG4gICAgICAgICAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG4gICAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTJweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgPmxpLnNlbGVjdGVkIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICR0YWItc2VsZWN0ZWQtYmFja2dyb3VuZDtcXHJcXG4gICAgICAgIHotaW5kZXg6IDIyO1xcclxcblxcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgIGNvbG9yOiAkdGFiLXNlbGVjdGVkLXRleHQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGRpdi5jbC1wZy12aWV3cyB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgdG9wOiAyOXB4O1xcclxcbiAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICB6LWluZGV4OiAyMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXYuY2wtcGctdmlldyB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICB6LWluZGV4OiAyMDtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBib3JkZXI6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZGl2LmNsLXBnLXZpZXcuc2VsZWN0ZWQge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNsLXRhYi1tZW51IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSAxN3B4KTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXHJcXG5cXHJcXG4gICAgZGl2IHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgd2lkdGg6IDE0cHg7XFxyXFxuICAgICAgaGVpZ2h0OiAyN3B4O1xcclxcbiAgICAgIHRvcDogNHB4O1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1lbnUtYm9yZGVyLWNvbG9yO1xcclxcbiAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1lbnUtYmFja2dyb3VuZDtcXHJcXG5cXHJcXG4gICAgICBpbWcge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvL1xcclxcbiAgICAvLyBUYWIgZHJvcC1kb3duIG1lbnVcXHJcXG4gICAgLy9cXHJcXG4gICAgdWwge1xcclxcblxcclxcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICAgIG1hcmdpbjogMzBweCAwIDAgMDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1lbnUtYm9yZGVyLWNvbG9yO1xcclxcbiAgICAgIC8vYm9yZGVyLXRvcC13aWR0aDogMDtcXHJcXG5cXHJcXG4gICAgICA+IGxpIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICAgIHdpZHRoOiA4ZW07XFxyXFxuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgID4gbGkubWVudS1kaXNhYmxlZCB7XFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgZGl2LmNsLXRhYi1tZW51LmNsLW1lbnUtb3BlbiB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xcclxcbiAgfVxcclxcbn1cIixcIkB1c2UgXFxcInNhc3M6bWF0aFxcXCI7XFxyXFxuXFxyXFxuZGl2LmNsLXBsYXlncm91bmQge1xcclxcbiAgZGl2LmNsLXBsYXlncm91bmQtcm9vdCwgZGl2LmNsLXBsYXlncm91bmQtbGVmdCwgZGl2LmNsLXBsYXlncm91bmQtcmlnaHQsXFxyXFxuICBkaXYuY2wtcGxheWdyb3VuZC10b3AsIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNsLXBsYXlncm91bmQtbGVmdCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZmxleDogMCAxIGF1dG87XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4ODg7XFxyXFxuXFxyXFxuICAgIGRpdi5jbC1iYXIge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICByaWdodDogLTVweDsgLy8gbWF0aC5kaXYoLSRkcmFnLWJhci13aWR0aCwgMik7XFxyXFxuICAgICAgd2lkdGg6ICRkcmFnLWJhci13aWR0aDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgICAgY3Vyc29yOiBldy1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLXJpZ2h0IHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCB7XFxyXFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7XFxyXFxuXFxyXFxuICAgIGRpdi5jbC1iYXIge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgYm90dG9tOiAtNXB4OyAvLyBtYXRoLmRpdigtJGRyYWctYmFyLXdpZHRoLCAyKTtcXHJcXG4gICAgICBoZWlnaHQ6ICRkcmFnLWJhci13aWR0aDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICB6LWluZGV4OiAyO1xcclxcbiAgICAgIGN1cnNvcjogbnMtcmVzaXplO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuY2wtcGxheWdyb3VuZC1ib3R0b20ge1xcclxcbiAgICAvLyBib3JkZXItbGVmdDogNXB4IHNvbGlkICMxODQ1M2I7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuY2wtcGxheWdyb3VuZC1yb290IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiZGl2LmNsLXBnLW51bXMge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZmxleDogMCAwIGF1dG87XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgd2lkdGg6IDJlbTtcXHJcXG4gIHBhZGRpbmc6IDRweCAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG5cXHJcXG4gIHAge1xcclxcbiAgICBmb250LXNpemU6IDAuOGVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTZweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwIDNweCAwIDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIGNvbG9yOiAjNzc3O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcImRpdi5jbC1wZy1hYm91dCB7XFxyXFxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcclxcblxcclxcbiAgZmlndXJlIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGhlaWdodDogMjI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNsLXBnLWFib3V0LWRpdiB7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG5cXHJcXG4gICAgaDEge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbn1cIixcImRpdi5jbC1wbGF5Z3JvdW5kIHtcXHJcXG4gIGRpdi5jbC1wZy12aWV3LmVkaXRvciB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgIC8vIGlubmVyRGl2XFxyXFxuICAgID4gZGl2IHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcclxcbiAgICAgIGRpdi5jbC1wZy1lZGl0b3Ige1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgIHRleHRhcmVhIHtcXHJcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuXFxyXFxuICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgcGFkZGluZzogNHB4IDAgMCAzcHg7XFxyXFxuICAgICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxyXFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxyXFxuICAgICAgICAgIG92ZXJmbG93LXdyYXA6IG5vcm1hbFxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcImRpdi5jbC1wbGF5Z3JvdW5kIHtcXHJcXG4gIGRpdi5jbC1wZy12aWV3Lm91dHB1dCB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgID4gZGl2IHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcclxcbiAgICAgIHByZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9pbWcvYmFycy5wbmcnKTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcblxcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgcGFkZGluZzogNHB4IDAgMCAzcHg7XFxyXFxuICAgICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC04NjI2MDZmMzkzLzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS0yLjAuMC1iOWE1YzRhMmFhLTIxNDI1MjQ2YTUuemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLTFkZGM2OGI0YTEvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS01LjIuNi0xMThjNmQ0MDllLTk5MzM1NGEyNDguemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Jlc29sdmUtdXJsLWxvYWRlci12aXJ0dWFsLWVjNzVkMmEwOWUvMC9jYWNoZS9yZXNvbHZlLXVybC1sb2FkZXItbnBtLTQuMC4wLTJhOWMxOGQ4NmItOGU1YmNmOTc4Ni56aXAvbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zYXNzLWxvYWRlci12aXJ0dWFsLTM4NTdmNWU5ZjEvMC9jYWNoZS9zYXNzLWxvYWRlci1ucG0tMTIuMS4wLTYxODgwODllMTItNjljNjZlYTM0OC56aXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0udXNlWzNdIS4vX3BsYXlncm91bmQuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHRyZXN1bHQgPSBmbigpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJQbGF5Z3JvdW5kXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY291cnNlbGliXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NvdXJzZWxpYlwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiY29tbW9uXCIsXCJ2ZW5kb3JcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
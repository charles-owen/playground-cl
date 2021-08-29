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
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_menu_check_png__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_bars_png__WEBPACK_IMPORTED_MODULE_4__.default);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAgAgMAAABfgKEEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURf///+L/9+H/9+X/+Oh4HTMAAAAeSURBVAjXY2AgEvz///8Dw6pVqxYwhIaGBlBOEAkAU2MY3tDf9aUAAAAASUVORK5CYII=");

/***/ }),

/***/ "./vendor/cl/playground/img/menu-check.png":
/*!*************************************************!*\
  !*** ./vendor/cl/playground/img/menu-check.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAOCAYAAADNGCeJAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAVdJREFUOI2V0bFrU1EUB+DvRWNsIJNQu6t1E8ykuDgKBQlIFwdHkQ7+AwU7url0FMQ5cXFwsoMguIhSqoPtJA51EHGohedQfg55SV9jaeKFw71wDt89hyOJesx60u83srR0LlwKvdArJoGiKKZDq6vzBoOunZ1ruIgfGPwXlm73lIODW7a3l5XlIn7hNfrYNcuY2duTXm8uPAgfQj/cD4uhGQRTsezvy8pKJzwMX8KzcCGcHiGHGHPhSlgIRZrNVjY3h1BZytpap+roU3ga5v9Bxj8PkRdhN7wLd8LltNvtrK93wt3wMQzC+WORGiYU4XrYCl8r9F64HTbC+3CzqjseqmGjOBOehO/hW3hZ4Y9D60RovICjYCM8Cj8r9HO4OhUaY6M4BFvhTfgd3oaz49zE9uvRmJBHrz/YQInn1V3Pz9DZ0Q674VW17aldJTmhYDjajVmhJP4Cy1ZU6+dCg3AAAAAASUVORK5CYII=");

/***/ }),

/***/ "./vendor/cl/playground/img/menubars.png":
/*!***********************************************!*\
  !*** ./vendor/cl/playground/img/menubars.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABXRSTlMAv/IBDVaQsj8AAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHElEQVQI12NgwA0YlcBAAMFgdgEDAwSDPDW4AQB2XAxb8EnVqQAAAABJRU5ErkJggg==");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0FjdGlvbnMvQWJvdXRBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9BY3Rpb25zL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0FjdGlvbnMvQWxsQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0FjdGlvbnMvU2F2ZUFjdGlvbi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0RPTS9Ub29scy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0dyYXBoaWNzL1RvYXN0LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvTWFpbi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL01lbnUuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9PcHRpb25zLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvUGFuZS5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1BsYXlncm91bmQuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9UYWJzLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVGFicy9FZGl0b3JUYWIuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9UYWJzL091dHB1dFRhYi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1RhYnMvVGFiLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVUkvRHJhZ0FuZERyb3AuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9VdGlsaXR5L1JlYWR5LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmRGYWN0b3J5LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL19wbGF5Z3JvdW5kLnNjc3MiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvX3BsYXlncm91bmQuc2Nzcz85ZGFlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2ltZy9iYXJzLnBuZyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbWcvbWVudS1jaGVjay5wbmciLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvaW1nL21lbnViYXJzLnBuZyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiUGxheWdyb3VuZEZhY3RvcnkiLCJTaXRlIiwic2l0ZSIsIlBsYXlncm91bmQiLCJBYm91dEFjdGlvbiIsIm9wdGlvbnMiLCJBY3Rpb24iLCJtYWluIiwiY29udGVudCIsInJvb3QiLCJwYWNrYWdlanNvbiIsImRpYWxvZyIsIkRpYWxvZyIsInRpdGxlIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJ0YWciLCJnZXRTb3VyY2VzIiwic291cmNlcyIsInVuZGVmaW5lZCIsInNvdXJjZSIsInRhYiIsImdldFRhYiIsIm5hbWUiLCJkYXRhIiwiZ2V0IiwiQWxsQWN0aW9ucyIsImFkZEFsbCIsImFkZEFjdGlvbiIsIlNhdmVBY3Rpb24iLCJwYXJhbXMiLCJhcHBUYWciLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsImFwaSIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiaGFzRXJyb3IiLCJ0b2FzdCIsImVycm9yIiwiVG9vbHMiLCJpc1Zpc2libGUiLCJlbGVtIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJnZXRDbGllbnRSZWN0cyIsImxlbmd0aCIsImFkZENsYXNzIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImFkZENsYXNzZXMiLCJjbGFzc2VzIiwic3BsaXQiLCJmb3JFYWNoIiwiY2xzIiwicmVtb3ZlQ2xhc3MiLCJyZWdFeCIsIlJlZ0V4cCIsInJlcGxhY2UiLCJjcmVhdGVDbGFzc2VkRGl2IiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYWRkQ29udGVudCIsImlzU3RyaW5nIiwiaW5uZXJIVE1MIiwiaXNFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ2YWwiLCJ0b1N0cmluZyIsImNhbGwiLCJub2RlVmFsdWUiLCJvZmZzZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsInNjcm9sbExlZnQiLCJ3aW5kb3ciLCJwYWdlWE9mZnNldCIsInRvcCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiY2hpbGQiLCJ0YWdOYW1lIiwiY2hpbGROb2RlcyIsIm5vZGUiLCJUb2FzdCIsImRlZmF1bHREdXJhdGlvbiIsImludGVyVG9hc3REZWxheSIsIm1lc3NhZ2VzIiwiYWN0aXZlIiwic2hvdyIsIm1lc3NhZ2UiLCJzcGxpY2UiLCJtc2ciLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidGltZSIsInB1c2giLCJqc29uRXJyb3JzIiwianNvbkFwaSIsImVycm9ycyIsIk1haW4iLCJwbGF5Z3JvdW5kIiwibWVudSIsInRhYnMiLCJkaXZPdmVybGF5IiwiZGl2V29yayIsImluaXRpYWxpemUiLCJzdHlsZSIsImRpc3BsYXkiLCJoZWlnaHQiLCJjb250YWlucyIsIlJlc2l6ZXIiLCJoYW5kbGUiLCJkcmFnQW5kRHJvcCIsIkRyYWdBbmREcm9wIiwiTWVudSIsInJvb3RQYW5lIiwiUGFuZSIsImxvYWQiLCJwYW5lIiwiU3RyaW5nIiwicGFyc2UiLCJzZXQiLCJuZXdUYWIiLCJtb2RhbCIsIm5hdiIsInVsIiwibWVudXMiLCJhY3Rpb24iLCJ0b3BMSSIsImEiLCJpbm5lclRleHQiLCJnZXRBY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInN1YlVMIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJvcGVuIiwiY2xvc2VBbGwiLCJzdWJNZW51Iiwic3ViTEkiLCJjbG9zZUxpc3RlbmVyIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImxpIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVuYWJsZSIsInNlbCIsInF1ZXJ5U2VsZWN0b3IiLCJmaW5kIiwiY2xpY2siLCJjbG9zdXJlIiwiT3B0aW9ucyIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJFcnJvciIsImdldEFQSSIsIm1vZGUiLCJvYmoiLCJtb2RlT2JqIiwidXJsIiwiY29udGVudFR5cGUiLCJleHRyYSIsInBhcmVudCIsIm1pblNwbGl0IiwibWF4U3BsaXQiLCJjaGlsZDEiLCJjaGlsZDIiLCJob3Jpem9udGFsU3BsaXQiLCJob3JpeiIsInBlcmNlbnRhZ2UiLCJUYWJzIiwiaG9yaXpvbnRhbCIsImNoaWxkMURhdGEiLCJjaGlsZDJEYXRhIiwiZmxleERpcmVjdGlvbiIsImJhciIsInN0YXJ0RHJhZ2dpbmciLCJwYWdlWCIsInBhZ2VZIiwibW91c2VNb3ZlIiwibW91c2VVcCIsInRvdWNoIiwiY2hhbmdlZFRvdWNoZXMiLCJ0b3VjaE1vdmUiLCJ0b3VjaEVuZCIsInRvdWNoQ2FuY2VsIiwic3RhcnRYIiwic3RhcnRZIiwieCIsInkiLCJlbmREcmFnZ2luZyIsImRyYWdnaW5nIiwibWFpblgiLCJ3aWQiLCJyaWdodCIsInBlciIsIm1haW5ZIiwiaGl0IiwiYm90dG9tIiwid2hpY2giLCJ3aWR0aCIsImNvbGxlY3Rpb24iLCJQQUNLQUdFIiwicmVxdWlyZSIsInZlcnNpb24iLCJtYWlucyIsInN0YXJ0Iiwic3RhcnROb3ciLCJSZWFkeSIsIkVsZW1lbnQiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwiYWN0aW9ucyIsInRhYnNEaXYiLCJ2aWV3c0RpdiIsInRhYkRhdGEiLCJuZXdQYXJlbnQiLCJFZGl0b3JUYWIiLCJPdXRwdXRUYWIiLCJ2aWV3Iiwic2VsZWN0IiwidW5zZWxlY3RBbGwiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJUYWIiLCJpbm5lclZpZXciLCJudW1zIiwiZWRpdG9yRGl2IiwiZWRpdG9yIiwiRWRpdG9yIiwicmVzaXplIiwiYXV0b0luZGVudCIsInN0eWxlcyIsInNjcm9sbGFibGUiLCJ0ZXh0YXJlYSIsInRleHQiLCJ2YWx1ZSIsImxpbmVzIiwicCIsImZvY3VzIiwicHJlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZHJhZ0VsZW1lbnQiLCJkcmFnSXRlbSIsImRyb3BWaWV3cyIsImRyYWdnYWJsZSIsInBhbGV0dGVJdGVtIiwiZHJvcHBhYmxlIiwiY2FsbGJhY2siLCJjbG9uZSIsInBhbGV0dGVJbWFnZSIsInBvc2l0aW9uIiwiekluZGV4IiwiY3Vyc29yIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJ2aWV3RWxlbWVudCIsInZpZXdYIiwidmlld1kiLCJnbyIsImZuIiwiYXR0YWNoRXZlbnQiLCJyZWFkeVN0YXRlIiwiaW5zdGFsbCIsImpzb24iLCJ0ZXh0Q29udGVudCIsIm1lc3NhZ2VMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBQSwyRUFBQSxDQUF5QkMsSUFBSSxDQUFDQyxJQUE5QjtBQUVBRCxJQUFJLENBQUNFLFVBQUwsR0FBa0JBLGlFQUFsQixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUVPLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQVNGLElBQVQsRUFBZUcsT0FBZixFQUF3QjtBQUNsREMsa0RBQUEsQ0FB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V0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLGFBQWEsWUFBWSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxnREFBZ0QsbUNBQW1DLHFCQUFxQiwyQkFBMkIsa0JBQWtCLCtCQUErQixxQ0FBcUMscUJBQXFC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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQzFCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7VUM5Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJwbGF5Z3JvdW5kLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgJy4vX3BsYXlncm91bmQuc2Nzcyc7XHJcbmltcG9ydCB7UGxheWdyb3VuZH0gZnJvbSAnLi9qcy9QbGF5Z3JvdW5kL1BsYXlncm91bmQnO1xyXG5pbXBvcnQge1BsYXlncm91bmRGYWN0b3J5fSBmcm9tICcuL2pzL1BsYXlncm91bmRGYWN0b3J5JztcclxuXHJcbmV4cG9ydCB7UGxheWdyb3VuZH07XHJcbmV4cG9ydCB7UGxheWdyb3VuZCBhcyBkZWZhdWx0fTtcclxuXHJcblBsYXlncm91bmRGYWN0b3J5LmNyZWF0ZShTaXRlLnNpdGUpO1xyXG5cclxuU2l0ZS5QbGF5Z3JvdW5kID0gUGxheWdyb3VuZDtcclxuXHJcbiIsImltcG9ydCB7QWN0aW9ufSBmcm9tICcuL0FjdGlvbic7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnZGlhbG9nLWNsJztcclxuaW1wb3J0IHBhY2thZ2Vqc29uIGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXRBY3Rpb24gPSBmdW5jdGlvbihzaXRlLCBvcHRpb25zKSB7XHJcblx0QWN0aW9uLmNhbGwodGhpcywgc2l0ZSwgb3B0aW9ucyk7XHJcblxyXG5cdHRoaXMuZG8gPSBmdW5jdGlvbihtYWluKSB7XHJcblx0XHRBY3Rpb24ucHJvdG90eXBlLmRvLmNhbGwodGhpcywgbWFpbik7XHJcblxyXG5cdFx0Ly8gRGlhbG9nIGJveCBjb250ZW50c1xyXG5cdFx0bGV0IGNvbnRlbnQgPSBgXHJcbjxmaWd1cmU+PGltZyBzcmM9XCIke3NpdGUucm9vdH0vdmVuZG9yL2NsL3BsYXlncm91bmQvaW1nL3BsYXlncm91bmQuanBnXCIgYWx0PVwiQ2lyc2ltIExvZ29cIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjIyNVwiPjwvZmlndXJlPlxyXG48ZGl2IGNsYXNzPVwiY2wtcGctYWJvdXQtZGl2XCI+XHJcbjxoMT5Db3Vyc2VMaWIgUGxheWdyb3VuZDwvaDE+XHJcbjxwPlZlcnNpb246ICR7cGFja2FnZWpzb24udmVyc2lvbn08L3A+XHJcbjxwPldyaXR0ZW4gYnk6IENoYXJsZXMgQi4gT3dlbjwvcD48L2Rpdj5gO1xyXG5cclxuXHRcdGNvbnN0IGRpYWxvZyA9IG5ldyBEaWFsb2coe1xyXG5cdFx0XHR0aXRsZTogJ0Fib3V0IHRoZSBQbGF5Z3JvdW5kJyxcclxuXHRcdFx0Y29udGVudDogY29udGVudCxcclxuXHRcdFx0J2FkZENsYXNzJzogJ2NsLXBnLWFib3V0J1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxufVxyXG5cclxuQWJvdXRBY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBY3Rpb24ucHJvdG90eXBlKTtcclxuQWJvdXRBY3Rpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWJvdXRBY3Rpb247XHJcblxyXG5BYm91dEFjdGlvbi50YWcgPSAnYWJvdXQnOyIsIi8qKlxyXG4gKiBCYXNlIG9iamVjdCBmb3IgYW4gYWN0aW9uLlxyXG4gKiBAcGFyYW0gc2l0ZSBTaXRlIG9iamVjdFxyXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHBhc3NlZCB0byB0aGlzIGFjdGlvblxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBBY3Rpb24gPSBmdW5jdGlvbihzaXRlLCBvcHRpb25zKSB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBhbGwgc291cmNlcyBmb3IgdGhpcyBhY3Rpb24uXHJcblx0ICpcclxuXHQgKiBCYXNlZCBvbiB0aGUgb3B0aW9uICdzb3VyY2VzJywgd2hpY2ggYXJlIHRhYiB0YWdzLlxyXG5cdCAqIEByZXR1cm4gb2JqZWN0IHdpdGggdGFiIG5hbWVzIGFuZCBzb3VyY2VzLlxyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0U291cmNlcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gR2V0IHRoZSByZXF1aXNpdGUgdGFiIGNvbnRlbnRzXHJcblx0XHRjb25zdCBzb3VyY2VzID0ge307XHJcblxyXG5cdFx0aWYob3B0aW9ucy5zb3VyY2VzID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5zb3VyY2VzID09PSBudWxsKSB7XHJcblx0XHRcdHJldHVybiBzb3VyY2VzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihjb25zdCBzb3VyY2Ugb2Ygb3B0aW9ucy5zb3VyY2VzKSB7XHJcblx0XHRcdGNvbnN0IHRhYiA9IHRoaXMubWFpbi5nZXRUYWIoc291cmNlKTtcclxuXHRcdFx0aWYodGFiICE9PSBudWxsKSB7XHJcblx0XHRcdFx0c291cmNlc1tzb3VyY2VdID0ge25hbWU6IHRhYi5uYW1lLCBkYXRhOiB0YWIuZ2V0KCl9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHNvdXJjZXM7XHJcblx0fVxyXG5cclxuXHJcbn1cclxuXHJcbkFjdGlvbi5wcm90b3R5cGUuZG8gPSBmdW5jdGlvbihtYWluKSB7XHJcblx0dGhpcy5tYWluID0gbWFpbjtcclxufSIsImltcG9ydCB7U2F2ZUFjdGlvbn0gZnJvbSAnLi9TYXZlQWN0aW9uJztcclxuaW1wb3J0IHtBYm91dEFjdGlvbn0gZnJvbSAnLi9BYm91dEFjdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgQWxsQWN0aW9ucyA9IGZ1bmN0aW9uKCkge31cclxuXHJcbkFsbEFjdGlvbnMuYWRkQWxsID0gZnVuY3Rpb24oUGxheWdyb3VuZCkge1xyXG5cdFBsYXlncm91bmQuYWRkQWN0aW9uKFNhdmVBY3Rpb24pO1xyXG5cdFBsYXlncm91bmQuYWRkQWN0aW9uKEFib3V0QWN0aW9uKTtcclxufSIsImltcG9ydCB7QWN0aW9ufSBmcm9tICcuL0FjdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgU2F2ZUFjdGlvbiA9IGZ1bmN0aW9uKHNpdGUsIG9wdGlvbnMpIHtcclxuXHRBY3Rpb24uY2FsbCh0aGlzLCBzaXRlLCBvcHRpb25zKTtcclxuXHJcblx0dGhpcy5kbyA9IGZ1bmN0aW9uKG1haW4pIHtcclxuXHRcdEFjdGlvbi5wcm90b3R5cGUuZG8uY2FsbCh0aGlzLCBtYWluKTtcclxuXHJcblx0XHQvLyBHZXQgdGhlIHJlcXVpc2l0ZSB0YWIgY29udGVudHNcclxuXHRcdGNvbnN0IHNvdXJjZXMgPSB0aGlzLmdldFNvdXJjZXMoKTtcclxuXHJcblx0XHRjb25zdCBwYXJhbXMgPSB7XHJcblx0XHRcdGFwcFRhZzogb3B0aW9ucy5hcHBUYWcsXHJcblx0XHRcdG5hbWU6IG9wdGlvbnMubmFtZSxcclxuXHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkoc291cmNlcyksXHJcblx0XHRcdHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRzaXRlLmFwaS5wb3N0KCcvYXBpL2ZpbGVzeXN0ZW0vc2F2ZScsIHBhcmFtcylcclxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cdFx0XHRcdGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0XHRcdFx0c2l0ZS50b2FzdCh0aGlzLCAnU3VjY2Vzc2Z1bGx5IHNhdmVkIHRvIHNlcnZlcicpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuU2F2ZUFjdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFjdGlvbi5wcm90b3R5cGUpO1xyXG5TYXZlQWN0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNhdmVBY3Rpb247XHJcblxyXG5TYXZlQWN0aW9uLnRhZyA9ICdzYXZlJzsiLCJcclxuXHJcbi8qKlxyXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbnMgZm9yIHRoZSBET00uXHJcbiAqIFRvb2xzIHRoYXQgYXZvaWQgaGF2aW5nIHRvIGhhdmUgalF1ZXJ5IGluc3RhbGxlZC5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVG9vbHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJcyBhbiBlbGVtZW50IHZpc2libGU/XHJcbiAqIEJvcnJvd2VkIGZyb20galF1ZXJ5IVxyXG4gKiBAcGFyYW0gZWxlbVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcblRvb2xzLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xyXG4gICAgcmV0dXJuICEhKCBlbGVtLm9mZnNldFdpZHRoIHx8IGVsZW0ub2Zmc2V0SGVpZ2h0IHx8IGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGQgYSBjbGFzcyB0byBhbiBlbGVtZW50XHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gYWRkIHRvXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgQ2xhc3MgdG8gYWRkXHJcbiAqL1xyXG5Ub29scy5hZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcclxufVxyXG5cclxuVG9vbHMuYWRkQ2xhc3NlcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzZXMpIHtcclxuICAgIGlmKGNsYXNzZXMgPT09IHVuZGVmaW5lZCB8fCBjbGFzc2VzID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKChjbHMpID0+IHtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhlbGVtZW50LCBjbHMpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblRvb2xzLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgcmVnRXggPSBuZXcgUmVnRXhwKCdcXFxcYicgKyBjbGFzc05hbWUgKyAnXFxcXGInLCAnZycpO1xyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlZ0V4LCBcIlwiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIERJViB3aXRoIGEgcHJvdmlkZWQgY2xhc3MgbmFtZS5cclxuICogQHBhcmFtIGNsYXNzTmFtZSBDbGFzcyB0byBhZGQgdG8gdGhlIGRpdlxyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50IHRvIHBsYWNlIGluIHRoZSBkaXYuIEhUTUwgb3IgRWxlbWVudFxyXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gQ3JlYXRlZCBET00gRWxlbWVudFxyXG4gKi9cclxuVG9vbHMuY3JlYXRlQ2xhc3NlZERpdiA9IGZ1bmN0aW9uKGNsYXNzTmFtZSwgY29udGVudCkge1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgVG9vbHMuYWRkQ2xhc3MoZGl2LCBjbGFzc05hbWUpO1xyXG4gICAgaWYoY29udGVudCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0ICAgIFRvb2xzLmFkZENvbnRlbnQoZGl2LCBjb250ZW50KTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgY29udGVudCB0byBhbiBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGFkZCB0b1xyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50LiBDYW4gYmUgSFRNTCBvciBhbiBFbGVtZW50LlxyXG4gKi9cclxuVG9vbHMuYWRkQ29udGVudCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNvbnRlbnQpIHtcclxuICAgIGlmKFRvb2xzLmlzU3RyaW5nKGNvbnRlbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gY29udGVudDtcclxuICAgIH0gZWxzZSBpZihUb29scy5pc0VsZW1lbnQoY29udGVudCkpIHtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogSXMgdGhlIHBhc3NlZCB2YWx1ZSBhIHN0cmluZz9cclxuICogQHBhcmFtIHZhbFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcblRvb2xzLmlzU3RyaW5nID0gZnVuY3Rpb24odmFsKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgKCghIXZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JykgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIElzIHRoZSBwYXNzZWQgdmFsdWUgYW4gSFRNTEVsZW1lbnQ/XHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5Ub29scy5pc0VsZW1lbnQgPSBmdW5jdGlvbih2YWwpIHtcclxuICAgIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgJiYgdmFsLm5vZGVWYWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgKHNwZWNpZmljYWxseSBpdHMgYm9yZGVyIGJveCwgd2hpY2ggZXhjbHVkZXMgbWFyZ2lucykgcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50LlxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKi9cclxuVG9vbHMub2Zmc2V0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdHJldHVybiB7XHJcblx0ICAgIGxlZnQ6IHJlY3QubGVmdCArIGVsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCxcclxuICAgICAgICB0b3A6IHJlY3QudG9wICsgZWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXRcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmQgYSBjaGlsZCBieSB0YWdOYW1lXHJcbiAqIEBwYXJhbSBlbGVtZW50XHJcbiAqIEBwYXJhbSB0YWdOYW1lXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuVG9vbHMuY2hpbGQgPSBmdW5jdGlvbihlbGVtZW50LCB0YWdOYW1lKSB7XHJcblx0Zm9yKGNvbnN0IG5vZGUgb2YgZWxlbWVudC5jaGlsZE5vZGVzKSB7XHJcblx0ICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gdGFnTmFtZSkge1xyXG5cdCAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHtUb29sc30gZnJvbSAnLi4vRE9NL1Rvb2xzJztcclxuXHJcbi8qKlxyXG4gKiBUb2FzdCBub3RpZmljYXRpb24gc3lzdGVtXHJcbiAqIGpRdWVyeS1mcmVlXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRvYXN0ID0gZnVuY3Rpb24obWFpbikge1xyXG5cdC8qKiBEZWZhdWx0IHRvYXN0IGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyAqL1xyXG5cdHRoaXMuZGVmYXVsdER1cmF0aW9uID0gMjAwMDtcclxuXHJcblx0LyoqIEludGVyLXRvYXN0IGRlbGF5IHRpbWUgaW4gbWlsbGlzZWNvbmRzICovXHJcblx0dGhpcy5pbnRlclRvYXN0RGVsYXkgPSA1MDA7XHJcblxyXG4gICAgbGV0IG1lc3NhZ2VzID0gW107ICAvLyBQZW5kaW5nIG1lc3NhZ2VzXHJcbiAgICBsZXQgYWN0aXZlID0gZmFsc2U7IC8vIElzIHRoZXJlIGFuIGFjdGl2ZSBtZXNzYWdlIGRpc3BsYXlpbmc/XHJcblxyXG5cdGxldCBlbGVtZW50ID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIHRoZSB0b2FzdCBkaXZcclxuXHQgKiBAcGFyYW0gZGl2IERpdiB0byBwdXQgdGhlIHRvYXN0IGludG9cclxuXHQgKi9cclxuICAgIHRoaXMuY3JlYXRlID0gKGRpdikgPT4ge1xyXG5cdFx0ZWxlbWVudCA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ3RvYXN0Jyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG5cdFx0ZWxlbWVudC5pbm5lckhUTUwgPSAndGVzdGluZyc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcclxuICAgIFx0aWYobWVzc2FnZXMubGVuZ3RoID4gMCAmJiAhYWN0aXZlKSB7XHJcblx0XHQgICAgLy8gU2V0IHRoZSBtZXNzYWdlXHJcblx0XHQgICAgbGV0IG1lc3NhZ2UgPSBtZXNzYWdlc1swXTtcclxuICAgICAgICAgICAgbWVzc2FnZXMuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IG1lc3NhZ2UubXNnO1xyXG5cclxuICAgICAgICAgICAgLy8gU2hvdyBpdFxyXG5cdFx0ICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9hc3QtYWN0aXZlJyk7XHJcblx0XHQgICAgYWN0aXZlID0gdHJ1ZTtcclxuXHJcblx0XHQgICAgLy8gRGVsYXkgd2hpbGUgYWN0aXZlXHJcblx0XHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHQgICAgXHQvLyBIaWRlIGl0XHJcblx0XHRcdCAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RvYXN0LWFjdGl2ZScpO1xyXG5cclxuXHRcdFx0ICAgIC8vIERlbGF5IGJldHdlZW4gdG9hc3RzXHJcblx0XHRcdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0ICAgIFx0YWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdCAgICBcdHNob3coKTtcclxuXHRcdFx0ICAgIH0sIHRoaXMuaW50ZXJUb2FzdERlbGF5KVxyXG5cdFx0ICAgIH0sIG1lc3NhZ2UudGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBEaXNwbGF5IGEgdG9hc3QgbWVzc2FnZVxyXG5cdCAqIEBwYXJhbSBtc2cgTWVzc2FnZSB0byBkaXNwbGF5XHJcblx0ICogQHBhcmFtIHRpbWUgVGltZSB0byBkaXNwbGF5IGluIG1pbGxpc2Vjb25kcywgb21pdCBmb3IgZGVmYXVsdFxyXG5cdCAqL1xyXG5cdHRoaXMubWVzc2FnZSA9IGZ1bmN0aW9uKG1zZywgdGltZSkge1xyXG4gICAgICAgIGlmKHRpbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aW1lID0gdGhpcy5kZWZhdWx0RHVyYXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXNzYWdlcy5wdXNoKHttc2c6IG1zZywgdGltZTogdGltZX0pO1xyXG4gICAgICAgIHNob3coKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogRGlzcGxheSBhbnkgSlNPTiBlcnJvcnMgd2UgaGF2ZSByZWNlaXZlZC5cclxuXHQgKiBAcGFyYW0ganNvbkFwaSBKc29uQVBJIG9iamVjdFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGFueSBlcnJvcnMgZXhpc3RlZC5cclxuXHQgKi9cclxuXHR0aGlzLmpzb25FcnJvcnMgPSBmdW5jdGlvbihqc29uQXBpKSB7XHJcbiAgICAgICAgaWYoanNvbkFwaS5lcnJvcnMoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBqc29uQXBpLmVycm9ycygpLmZvckVhY2goKGVycm9yKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlKCdTZXJ2ZXIgRXJyb3I6ICcgKyBlcnJvci50aXRsZSwgNTAwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBSZXNpemVyIGZyb20gJ3Jlc2l6ZXItY2wnO1xyXG5cclxuaW1wb3J0IHtNZW51fSBmcm9tICcuL01lbnUnO1xyXG5pbXBvcnQge1RvYXN0fSBmcm9tICcuL0dyYXBoaWNzL1RvYXN0JztcclxuaW1wb3J0IHtEcmFnQW5kRHJvcH0gZnJvbSAnLi9VSS9EcmFnQW5kRHJvcCc7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gJy4vRE9NL1Rvb2xzJztcclxuaW1wb3J0IHtQYW5lfSBmcm9tIFwiLi9QYW5lXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIEFjdHVhbCBpbnN0YW5jZSBvZiB0aGUgUGxheWdyb3VuZCBmb3IgYSBzaW5nbGUgZWxlbWVudC5cclxuICogQHBhcmFtIHBsYXlncm91bmQgVGhlIG1haW4gUGxheWdyb3VuZCBvYmplY3RcclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB3ZSBhcmUgbG9hZGluZyBpbnRvXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1haW4gPSBmdW5jdGlvbihwbGF5Z3JvdW5kLCBlbGVtZW50KSB7XHJcbiAgICB0aGlzLnBsYXlncm91bmQgPSBwbGF5Z3JvdW5kO1xyXG4gICAgdGhpcy5zaXRlID0gcGxheWdyb3VuZC5zaXRlO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMub3B0aW9ucyA9IHBsYXlncm91bmQub3B0aW9ucztcclxuXHJcbiAgICAvLy8gZGl2Lm1haW5cclxuICAgIHRoaXMuZGl2ID0gbnVsbDtcclxuXHJcbiAgICBsZXQgb3B0aW9ucyA9IHBsYXlncm91bmQub3B0aW9ucztcclxuXHJcbiAgICAvLy8gUmVmZXJlbmNlcyB0byBvdGhlciBHVUkgY29tcG9uZW50c1xyXG4gICAgbGV0IG1lbnU9bnVsbCwgdGFicz1udWxsO1xyXG5cclxuICAgIC8vLyBkaXYub3ZlcmxheVxyXG4gICAgbGV0IGRpdk92ZXJsYXkgPSBudWxsLCBkaXZXb3JrPW51bGw7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgXHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQnKTtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuXHQgICAgaWYob3B0aW9ucy5oZWlnaHQgIT09IG51bGwpIHtcclxuXHRcdCAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG5cdCAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaChvcHRpb25zLmRpc3BsYXkpIHtcclxuICAgICAgICAgICAgY2FzZSAnZnVsbCc6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtZnVsbCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG5cdCAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC13aW5kb3cnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy5kaXNwbGF5ID09PSAnd2luZG93Jykge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBBZGQgcmVzaXplciB0byB0aGUgd2luZG93IGlmIGluIHdpbmRvdyBtb2RlXHJcbiAgICAgICAgICAgIC8vIGFuZCBpdCBoYXMgbm90IGFscmVhZHkgYmVlbiBhZGRlZFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZighZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZXNpemVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgUmVzaXplcihlbGVtZW50LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiAnMTBweCBzb2xpZCAjMTg0NTNCJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ0FuZERyb3AgPSBuZXcgRHJhZ0FuZERyb3AodGhpcyk7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgdGhlIHdpbmRvdyBjb21wb25lbnRzXHJcbiAgICAgICAgLy9cclxuICAgICAgICBpZihvcHRpb25zLmRpc3BsYXkgIT09ICdpbmxpbmUnICYmIG9wdGlvbnMuZGlzcGxheSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEFsbCB3aW5kb3ctYmFzZWQgdmVyc2lvbnMgb3RoZXIgdGhhbiBpbmxpbmUgZ2V0IHRoZVxyXG4gICAgICAgICAgICAvLyBmdWxsIHVzZXIgaW50ZXJmYWNlXHJcbiAgICAgICAgICAgIC8vXHJcblxyXG4gICAgICAgICAgICAvLyA8ZGl2IGNsYXNzPVwibWFpblwiPjwvZGl2PlxyXG4gICAgICAgICAgICB0aGlzLmRpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXBnLW1haW4nKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZGl2KTtcclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgbWVudVxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBtZW51ID0gbmV3IE1lbnUodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMubWVudSA9IG1lbnU7XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBXb3JraW5nIGFyZWFcclxuICAgICAgICAgICAgLy8gPGRpdiBjbGFzcz1cIndvcmtcIj48L2Rpdj5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgZGl2V29yayA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ3dvcmsnKTtcclxuICAgICAgICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQoZGl2V29yayk7XHJcblxyXG5cclxuXHRcdFx0Ly9cclxuXHQgICAgICAgIC8vIEFuZCB0aGUgcm9vdCBwYW5lXHJcblx0ICAgICAgICAvL1xyXG5cdCAgICAgICAgdGhpcy5yb290UGFuZSA9IG5ldyBQYW5lKHRoaXMsIGRpdldvcmssIG51bGwsIG51bGwpO1xyXG5cdCAgICAgICAgdGhpcy5yb290UGFuZS5sb2FkKG9wdGlvbnMucGFuZSk7XHJcblxyXG5cdCAgICAgICAgLy9cclxuXHQgICAgICAgIC8vIEFuZCB0aGUgb3ZlcmxheVxyXG5cdCAgICAgICAgLy8gPGRpdiBjbGFzcz1cImNpcnNpbS1vdmVybGF5XCI+PC9kaXY+XHJcblx0ICAgICAgICAvL1xyXG5cdCAgICAgICAgZGl2T3ZlcmxheSA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXBnLW92ZXJsYXknKTtcclxuXHQgICAgICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKGRpdk92ZXJsYXkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b2FzdCA9IG5ldyBUb2FzdCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy50b2FzdC5jcmVhdGUodGhpcy5kaXYpO1xyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQW55IGRhdGEgdG8gbG9hZD9cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5sb2FkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9hZCA9IG9wdGlvbnMubG9hZDtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBsb2FkID09PSAnc3RyaW5nJyB8fCBsb2FkIGluc3RhbmNlb2YgU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZCA9IEpTT04ucGFyc2UobG9hZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IHRhZyBpbiBsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFiID0gdGhpcy5nZXRUYWIodGFnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0YWIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiLnNldChsb2FkW3RhZ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRUYWIgPSBmdW5jdGlvbih0YWcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb290UGFuZS5nZXRUYWIodGFnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbmV2ZXIgYSBuZXcgdGFiIGlzIHNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHRoaXMubmV3VGFiID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgb3IgY2xlYXIgaW50ZXJmYWNlIG1vZGFsIHN0YXRlLlxyXG4gICAgICogQHBhcmFtIG1vZGFsIFRydWUgc2V0cyBpbnRlcmZhY2UgdG8gbW9kYWwgc3RhdGUuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICB0aGlzLm1vZGFsID0gZnVuY3Rpb24obW9kYWwpIHtcclxuICAgICAgICBpZihtb2RhbCkge1xyXG4gICAgICAgICAgICBkaXZPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpdk92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG59XHJcbiIsImltcG9ydCB7VG9vbHN9IGZyb20gJy4vRE9NL1Rvb2xzJztcclxuXHJcbi8vIGltcG9ydCB7RmlsZU1lbnV9IGZyb20gJy4vTWVudXMvRmlsZU1lbnUnO1xyXG4vLyBpbXBvcnQge0VkaXRNZW51fSBmcm9tICcuL01lbnVzL0VkaXRNZW51JztcclxuLy8gaW1wb3J0IHtUYWJzTWVudX0gZnJvbSAnLi9NZW51cy9UYWJzTWVudSc7XHJcbi8vIGltcG9ydCB7SGVscE1lbnV9IGZyb20gJy4vTWVudXMvSGVscE1lbnUnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBwcm9ncmFtIG1lbnUgYmFyXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSBmdW5jdGlvbihtYWluKSB7XHJcblx0Y29uc3Qgb3B0aW9ucyA9IG1haW4ub3B0aW9ucztcclxuXHJcblxyXG4gICAgLy9cclxuICAgIC8vIENyZWF0ZSB0aGUgbWVudSBjb21wb25lbnRzXHJcbiAgICAvL1xyXG4gICAgLy8gdmFyIGZpbGVNZW51ID0gbmV3IEZpbGVNZW51KHRoaXMsIG1haW4pO1xyXG4gICAgLy8gdmFyIGVkaXRNZW51ID0gbmV3IEVkaXRNZW51KHRoaXMsIG1haW4pO1xyXG4gICAgLy8gdmFyIHRhYnNNZW51ID0gbmV3IFRhYnNNZW51KHRoaXMsIG1haW4pO1xyXG4gICAgLy8gdmFyIGhlbHBNZW51ID0gbmV3IEhlbHBNZW51KHRoaXMsIG1haW4pO1xyXG5cclxuICAgIC8vLyBUaGUgbmF2IGVsZW1lbnRcclxuICAgIHRoaXMubmF2ID0gbnVsbDtcclxuICAgIHRoaXMudWwgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyA8bmF2IGNsYXNzPVwibWVudWJhclwiPjx1bD48L3VsPjwvbmF2PlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5uYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyh0aGlzLm5hdiwgJ2NsLXBnLW1lbnViYXInKTtcclxuICAgICAgICBtYWluLmRpdi5hcHBlbmRDaGlsZCh0aGlzLm5hdik7XHJcblxyXG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICB0aGlzLm5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICAgICAgdGhpcy51bCA9IHVsO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51cyA9IG9wdGlvbnMubWVudXM7XHJcbiAgICAgICAgbWVudXMucHVzaCh7XHJcblx0ICAgICAgICBuYW1lOiAnSGVscCcsXHJcblx0ICAgICAgICBtZW51czogW1xyXG5cdFx0ICAgICAgICB7bmFtZTogJ0Fib3V0JywgYWN0aW9uOiB7dGFnOiAnYWJvdXQnfX1cclxuXHQgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yKGNvbnN0IG1lbnUgb2YgbWVudXMpIHtcclxuICAgICAgICBcdGNvbnN0IHRvcExJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBcdHVsLmFwcGVuZENoaWxkKHRvcExJKTtcclxuXHJcbiAgICAgICAgXHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIFx0dG9wTEkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgXHRhLmlubmVyVGV4dCA9IG1lbnUubmFtZTtcclxuXHJcbiAgICAgICAgXHRpZihtZW51LmFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgXHRcdC8vIFRvcCBsZXZlbCBvbmx5IG1lbnVcclxuICAgICAgICBcdFx0Y29uc3QgYWN0aW9uID0gbWFpbi5wbGF5Z3JvdW5kLmdldEFjdGlvbihtZW51LmFjdGlvbik7XHJcblx0XHQgICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIFthLCB0b3BMSV0pIHtcclxuXHRcdCAgICAgICAgXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0ICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdCAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0ICAgICAgICBhY3Rpb24uZG8obWFpbik7XHJcblx0XHRcdCAgICAgICAgfSk7XHJcblx0XHQgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBpZihtZW51Lm1lbnVzICE9PSB1bmRlZmluZWQpIHtcclxuXHQgICAgICAgIFx0Ly8gUHVsbC1kb3duIG1lbnVcclxuXHQgICAgICAgIFx0Y29uc3Qgc3ViVUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdCAgICAgICAgXHR0b3BMSS5hcHBlbmRDaGlsZChzdWJVTCk7XHJcblxyXG5cdCAgICAgICAgXHRmb3IoY29uc3QgZWxlbWVudCBvZiBbYSwgdG9wTEldKSB7XHJcblx0XHRcdCAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0XHRcdCAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHQgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdFx0XHQgICAgICAgIGlmKGdldENvbXB1dGVkU3R5bGUoc3ViVUwpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ2hpZGRlbicpIHtcclxuXHRcdFx0XHRcdCAgICAgICAgb3Blbih0b3BMSSk7XHJcblx0XHRcdFx0ICAgICAgICB9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ICAgICAgICAvLyBJZiBhbHJlYWR5IG9wZW4sIGNsb3NlIGFsbFxyXG5cdFx0XHRcdFx0ICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XHJcblx0XHRcdFx0ICAgICAgICB9XHJcblxyXG5cdFx0XHQgICAgICAgIH0pO1xyXG5cdFx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgXHRmb3IoY29uc3Qgc3ViTWVudSBvZiBtZW51Lm1lbnVzKSB7XHJcblx0XHRcdCAgICAgICAgY29uc3Qgc3ViTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdFx0XHQgICAgICAgIHN1YlVMLmFwcGVuZENoaWxkKHN1YkxJKTtcclxuXHJcblx0XHRcdCAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHRcdFx0ICAgICAgICBzdWJMSS5hcHBlbmRDaGlsZChhKTtcclxuXHRcdFx0ICAgICAgICBhLmlubmVyVGV4dCA9IHN1Yk1lbnUubmFtZTtcclxuXHJcblx0XHRcdCAgICAgICAgaWYoc3ViTWVudS5hY3Rpb24gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdCAgICAgICAgLy8gVG9wIGxldmVsIG9ubHkgbWVudVxyXG5cdFx0XHRcdCAgICAgICAgY29uc3QgYWN0aW9uID0gbWFpbi5wbGF5Z3JvdW5kLmdldEFjdGlvbihzdWJNZW51LmFjdGlvbik7XHJcblx0XHRcdFx0ICAgICAgICBpZihhY3Rpb24gIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdCAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgW2EsIHRvcExJXSkge1xyXG5cdFx0XHRcdFx0XHQgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIHRoaXMuY2xvc2VBbGwoKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGFjdGlvbi5kbyhtYWluKTtcclxuXHRcdFx0XHRcdFx0ICAgICAgICB9KTtcclxuXHRcdFx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHRcdCAgICAgICAgfVxyXG5cclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHQgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIEFkZCB0aGUgbWVudSBjb21wb25lbnQncyBIVE1MXHJcbiAgICAgICAgLy9cclxuXHQgICAgLy8gbGV0IGh0bWwgPSAnJztcclxuXHJcblx0ICAgIC8vIGh0bWwgKz0gZmlsZU1lbnUuaHRtbCgpO1xyXG4gICAgICAgIC8vIGh0bWwgKz0gZWRpdE1lbnUuaHRtbCgpO1xyXG4gICAgICAgIC8vIGh0bWwgKz0gdGFic01lbnUuaHRtbCgpO1xyXG4gICAgICAgIC8vIGh0bWwgKz0gaGVscE1lbnUuaHRtbCgpO1xyXG5cclxuICAgICAgICAvLyB1bC5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgICAgICAvL1xyXG5cdCAgICAvLyBNZW51IG9wdGlvbiBmb3IgdGVzdGluZyB0aGUgVG9hc3QgZXJyb3IgcmVwb3J0aW5nIG1lY2hhbmlzbVxyXG5cdCAgICAvL1xyXG5cclxuXHQgICAgLy8gaHRtbCArPSBgPGxpPjxhIGNsYXNzPVwidG9hc3QtdGVzdFwiPlRvYXN0ITwvYT48L2xpPmA7XHJcblx0ICAgIC8vIHVsLmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHQvL1xyXG5cdCAgICAvLyB0aGlzLnRvYXN0cyA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5jbGljaygnLnRvYXN0LXRlc3QnLCAoZXZlbnQpPT4ge1xyXG4gICAgICAgIC8vIFx0dGhpcy50b2FzdHMrKztcclxuICAgICAgICAvLyBcdG1haW4udG9hc3QubWVzc2FnZSgnVG9hc3QgbWVzc2FnZSAnICsgdGhpcy50b2FzdHMpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIEluc3RhbGwgY2xpY2sgaGFuZGxlcnMgZm9yIGFsbCB0b3AtbGV2ZWwgbWVudXNcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGZvcihjb25zdCBub2RlIG9mIHVsLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAvLyAgICAgaWYobm9kZS50YWdOYW1lID09PSAnTEknKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdC8vXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gRmluZCB0aGUgPHVsPiBpbiB0aGlzIG1lbnVcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgdWxTdWIgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZih1bFN1YiAhPT0gbnVsbCkge1xyXG5cdCAgICAvLyAgICAgICAgICAgICAgICAgaWYoZ2V0Q29tcHV0ZWRTdHlsZSh1bFN1YikuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAnaGlkZGVuJykge1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICBvcGVuKG5vZGUpO1xyXG5cdCAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBJZiBhbHJlYWR5IG9wZW4sIGNsb3NlIGFsbFxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XHJcblx0ICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIEFjdGl2YXRlIGFsbCBvZiB0aGUgbWVudXNcclxuICAgICAgICAvLyBmaWxlTWVudS5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIC8vIGVkaXRNZW51LmFjdGl2YXRlKCk7XHJcbiAgICAgICAgLy8gdGFic01lbnUuYWN0aXZhdGUoKTtcclxuICAgICAgICAvLyBoZWxwTWVudS5hY3RpdmF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIExpc3RlbiB0byBrZXkgZG93biBldmVudHMgc28gd2UgY2FuIGNsb3NlIHRoZSBtZW51XHJcbiAgICAgKiBpZiB3ZSBjbGljayBvdXRzaWRlIG9mIHRoZSBtZW51IHdoaWxlIGl0IGlzIG9wZW4uXHJcblx0ICogQHBhcmFtIGV2ZW50XHJcblx0ICovXHJcblx0Y29uc3QgY2xvc2VMaXN0ZW5lciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIFNlZSBpZiB3ZSBjbGlja2VkIG9uIHNvbWUgY2hpbGQgb2YgbmF2Li4uXHJcbiAgICAgICAgbGV0IG5vZGUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICBmb3IoIDsgbm9kZSAhPT0gbnVsbDsgbm9kZSA9IG5vZGUucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBpZihub2RlID09PSB0aGlzLm5hdikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHQgICAgdGhpcy5jbG9zZUFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9wZW4gYSBtZW51XHJcbiAgICBjb25zdCBvcGVuID0gKGxpKSA9PiB7XHJcbiAgICAgICAgLy8gSGlkZSBhbnkgb3RoZXIgbWVudXNcclxuICAgICAgICBmb3IoY29uc3Qgbm9kZSBvZiB0aGlzLnVsLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgaWYobm9kZS50YWdOYW1lID09PSAnTEknKSB7XHJcblx0ICAgICAgICAgICAgY29uc3QgdWwgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcclxuICAgICAgICAgICAgICAgIGlmKHVsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBUb29scy5yZW1vdmVDbGFzcyh1bCwgJ2NsLXBnLW1lbnUtb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHQgICAgLy8gQW5kIG9wZW4gdGhpcyBtZW51XHJcblx0ICAgIGNvbnN0IHVsID0gVG9vbHMuY2hpbGQobGksICdVTCcpO1xyXG5cdCAgICBpZih1bCAhPT0gbnVsbCkge1xyXG5cdCAgICBcdHVsLmNsYXNzTGlzdC5hZGQoJ2NsLXBnLW1lbnUtb3BlbicpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDbG9zZSBhbGwgbWVudXMgKi9cclxuICAgIHRoaXMuY2xvc2VBbGwgPSAoKSA9PiB7XHJcblx0ICAgIGZvcihjb25zdCBub2RlIG9mIHRoaXMudWwuY2hpbGROb2Rlcykge1xyXG5cdFx0ICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gJ0xJJykge1xyXG5cdFx0XHQgICAgY29uc3QgdWwgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcclxuXHRcdFx0ICAgIGlmKHVsICE9PSBudWxsKSB7XHJcblx0XHRcdFx0ICAgIFRvb2xzLnJlbW92ZUNsYXNzKHVsLCAnY2wtcGctbWVudS1vcGVuJyk7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogRW5hYmxlIG9yIGRpc2FibGUgYSBtZW51IG9wdGlvbiBieSBzZWxlY3RvclxyXG5cdCAqIEBwYXJhbSBzZWwgU2VsZWN0b3IgZm9yIHRoZSBtZW51IG9wdGlvbiAobGlrZSAnLnRhYnMtYWRkJylcclxuXHQgKiBAcGFyYW0gZW5hYmxlIFRydWUgdG8gZW5hYmxlXHJcblx0ICovXHJcblx0dGhpcy5lbmFibGUgPSAoc2VsLCBlbmFibGUpID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy51bC5xdWVyeVNlbGVjdG9yKHNlbCk7XHJcbiAgICAgICAgaWYoZWxlbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihlbmFibGUpIHtcclxuICAgICAgICAgICAgVG9vbHMucmVtb3ZlQ2xhc3MoZWxlbWVudC5wYXJlbnROb2RlLCBcIm1lbnUtZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuYWRkQ2xhc3MoZWxlbWVudC5wYXJlbnROb2RlLCBcIm1lbnUtZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblx0LyoqXHJcbiAgICAgKiBGaW5kIGEgbWVudSBvcHRpb24gYnkgc2VsZWN0b3JcclxuXHQgKiBAcGFyYW0gc2VsXHJcblx0ICogQHJldHVybnMge0VsZW1lbnR9XHJcblx0ICovXHJcblx0dGhpcy5maW5kID0gKHNlbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVsLnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBJbnN0YWxsIGEgbWVudSBvcHRpb24gY2xpY2sgaGFuZGVyXHJcblx0ICogQHBhcmFtIHNlbCBTZWxlY3RvciBmb3IgdGhlIG1lbnUgb3B0aW9uXHJcblx0ICogQHBhcmFtIGNsb3N1cmUgVGhlIGNsb3N1cmUgdG8gY2FsbCAocGFzc2VzICdldmVudCcpXHJcblx0ICovXHJcblx0dGhpcy5jbGljayA9IChzZWwsIGNsb3N1cmUpID0+IHtcclxuXHQgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZmluZChzZWwpO1xyXG5cdCAgICBpZihlbGVtZW50ICE9PSBudWxsKSB7XHJcblx0ICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0ICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHQgICAgICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XHJcblx0ICAgICAgICAgICAgY2xvc3VyZShldmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBQbGF5Z3JvdW5kIG9wdGlvbnMuXHJcbiAqIEBwYXJhbSBvcHRpb25zIFVzZXIgcHJvdmlkZWQgb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHt9O1xyXG5cclxuICAgIC8vLyBEaXNwbGF5IG9wdGlvbnNcclxuICAgIC8vLyB3aW5kb3cgLSBEaXNwbGF5cyBhcyBhIHN0YW5kYXJkIGRpdiAoZGVmYXVsdClcclxuICAgIHRoaXMuZGlzcGxheSA9ICd3aW5kb3cnO1xyXG5cclxuICAgIC8vLyBPcHRpb25hbCBoZWlnaHQgc2V0dGluZ1xyXG4gICAgdGhpcy5oZWlnaHQgPSBudWxsO1xyXG5cclxuICAgIC8vLyBUaGUgcGxheWdyb3VuZCByb290IHBhbmVcclxuICAgIHRoaXMucGFuZSA9IHt9O1xyXG5cclxuICAgIC8vLyBUaGUgdG9wLWxldmVsIG1lbnUgb3B0aW9uc1xyXG4gICAgdGhpcy5tZW51cyA9IFt7bmFtZTogJ0Fib3V0J31dO1xyXG5cclxuICAgIC8vLyBDb250ZW50IHRvIGluaXRpYWxseSBsb2FkIGludG8gdGhlIHRhYnNcclxuICAgIHRoaXMubG9hZCA9IG51bGw7XHJcblxyXG5cclxuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb24gXCIgKyBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIEFQSSBvcGVyYXRpb25zIGZvciBhIGdpdmVuIGZpbGUgbW9kZS5cclxuICAgICAqIEBwYXJhbSBtb2RlICdzYXZlJywgJ29wZW4nXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXRBUEkgPSBmdW5jdGlvbihtb2RlKSB7XHJcbiAgICAgICAgaWYodGhpcy5hcGkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmFwaSA9PT0gT2JqZWN0KHRoaXMuYXBpKSkge1xyXG4gICAgICAgICAgICBsZXQgb2JqO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5hcGlbbW9kZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gXHJcbiAgICAgICAgICAgICAgICAvLyBNb2RlIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXHJcbiAgICAgICAgICAgICAgICB2YXIgbW9kZU9iaiA9IHRoaXMuYXBpW21vZGVdO1xyXG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai51cmwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1vZGUgaXMgbm90IHN1cHBvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNlbmQgY29udGVudCB0eXBlXHJcbiAgICAgICAgICAgICAgICBvYmogPSB7dXJsOiBtb2RlT2JqLnVybH07XHJcbiAgICAgICAgICAgICAgICBpZihtb2RlT2JqLmNvbnRlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouY29udGVudFR5cGUgPSBtb2RlT2JqLmNvbnRlbnRUeXBlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuYXBpLmNvbnRlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouY29udGVudFR5cGUgPSB0aGlzLmFwaS5jb250ZW50VHlwZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai5leHRyYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0gbW9kZU9iai5leHRyYTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmFwaS5leHRyYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0gdGhpcy5hcGkuZXh0cmE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKG1vZGVPYmoubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLm5hbWUgPSBtb2RlT2JqLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5hcGkubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLm5hbWUgPSB0aGlzLmFwaS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcGkudXJsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvYmogPSB7dXJsOiB0aGlzLmFwaS51cmx9O1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcGkuZXh0cmEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHRoaXMuYXBpLmV4dHJhO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFwaS5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoubmFtZSA9IHRoaXMuYXBpLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt1cmw6IHRoaXMuYXBpfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtUYWJzfSBmcm9tICcuL1RhYnMnO1xyXG5cclxuLyoqXHJcbiAqIEEgUGFuZSBpcyBhbiBhcmVhIG9mIHRoZSBJREUgc2NyZWVuIHRoYXQgZWl0aGVyIGNvbnRhaW5zIGEgdGFiIHNldCBvciB0d28gY2hpbGQgcGFuZXMuXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdGhhdCBpcyB0aGUgaG9zdCBmb3IgdGhlIHBhbmVcclxuICogQHBhcmFtIHBhcmVudCBQYW5lIHBhcmVudCBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUGFuZSA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQsIHBhcmVudCkge1xyXG5cdHRoaXMubWluU3BsaXQgPSAxMDtcclxuXHR0aGlzLm1heFNwbGl0ID0gOTA7XHJcblxyXG5cdGxldCBkaXYgPSBudWxsLCBjaGlsZDEgPSBudWxsLCBjaGlsZDIgPSBudWxsO1xyXG5cdGxldCBob3Jpem9udGFsU3BsaXQgPSBudWxsO1xyXG5cdGxldCB0YWJzID0gbnVsbDtcclxuXHJcblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuXHRcdC8vXHJcblx0XHQvLyBDcmVhdGUgYW5kIGFkZCB0aGUgZGl2XHJcblx0XHQvL1xyXG5cclxuXHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5kaXYgPSBkaXY7XHJcblxyXG5cdFx0aWYocGFyZW50ID09PSBudWxsKSB7XHJcblx0XHRcdGRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLXJvb3QnKTtcclxuXHRcdH1cclxuXHJcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG5cdFx0Ly8gaWYoZG9ub3JUYWJzICE9PSBudWxsKSB7XHJcblx0XHQvLyBcdHRhYnMgPSBkb25vclRhYnM7XHJcblx0XHQvLyBcdHRhYnMubmV3UGFyZW50KHRoaXMpO1xyXG5cdFx0Ly8gfSBlbHNlIHtcclxuXHRcdC8vIFx0dGFicyA9IG5ldyBUYWJzKG1haW4sIGRpdik7XHJcblx0XHQvLyB9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBMb2FkIHRoZSBwYW5lIGZyb20gdGhlIGRhdGFcclxuXHQgKiBAcGFyYW0gZGF0YSBEYXRhIGZyb20gb3B0aW9ucyBmb3IgdGhpcyBwYW5lXHJcblx0ICovXHJcblx0dGhpcy5sb2FkID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0aWYoZGF0YS5jaGlsZDEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHQvLyBUaGlzIGlzIGEgc3BsaXQgcGFuZVxyXG5cdFx0XHR0aGlzLnNwbGl0KGRhdGEuaG9yaXosIGRhdGEuY2hpbGQxLCBkYXRhLmNoaWxkMik7XHJcblx0XHRcdHRoaXMucGVyY2VudGFnZShkYXRhLnBlcmNlbnRhZ2UpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGFicyA9IG5ldyBUYWJzKG1haW4sIGRpdik7XHJcblx0XHRcdHRhYnMubG9hZChkYXRhLnRhYnMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGhpcy5zcGxpdCA9IGZ1bmN0aW9uKGhvcml6b250YWwsIGNoaWxkMURhdGEsIGNoaWxkMkRhdGEpIHtcclxuXHRcdGhvcml6b250YWxTcGxpdCA9IGhvcml6b250YWw7XHJcblxyXG5cdFx0Y2hpbGQxID0gbmV3IFBhbmUobWFpbiwgZGl2LCB0aGlzLCB0YWJzKTtcclxuXHRcdGNoaWxkMiA9IG5ldyBQYW5lKG1haW4sIGRpdiwgdGhpcywgbnVsbCk7XHJcblxyXG5cdFx0dGFicyA9IG51bGw7XHJcblxyXG5cdFx0aWYoaG9yaXpvbnRhbCkge1xyXG5cdFx0XHRjaGlsZDEuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtbGVmdCcpO1xyXG5cdFx0XHRjaGlsZDIuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtcmlnaHQnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRpdi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XHJcblx0XHRcdGNoaWxkMS5kaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC10b3AnKTtcclxuXHRcdFx0Y2hpbGQyLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLWJvdHRvbScpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0YmFyLmNsYXNzTGlzdC5hZGQoJ2NsLWJhcicpO1xyXG5cdFx0Y2hpbGQxLmRpdi5hcHBlbmRDaGlsZChiYXIpO1xyXG5cclxuXHRcdGJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0c3RhcnREcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmUpO1xyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGJhci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhldmVudCk7XHJcblxyXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdFx0c3RhcnREcmFnZ2luZyh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cclxuXHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2hNb3ZlKTtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kKTtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoQ2FuY2VsKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuY2hpbGQxID0gY2hpbGQxO1xyXG5cdFx0dGhpcy5jaGlsZDIgPSBjaGlsZDI7XHJcblxyXG5cdFx0dGhpcy5wZXJjZW50YWdlKDUwKTtcclxuXHJcblx0XHRpZihjaGlsZDFEYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0Y2hpbGQxLmxvYWQoY2hpbGQxRGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoY2hpbGQyRGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGNoaWxkMi5sb2FkKGNoaWxkMkRhdGEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7Y2hpbGQxOiBjaGlsZDEsIGNoaWxkMjogY2hpbGQyfTtcclxuXHR9XHJcblxyXG5cdGxldCBzdGFydFggPSBudWxsLCBzdGFydFkgPSBudWxsO1xyXG5cclxuXHRjb25zdCBzdGFydERyYWdnaW5nID0gKHgsIHkpID0+IHtcclxuXHRcdHN0YXJ0WCA9IHg7XHJcblx0XHRzdGFydFkgPSB5O1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZW5kRHJhZ2dpbmcgPSAoKSA9PiB7XHJcblx0XHRzdGFydFggPSBudWxsO1xyXG5cdFx0c3RhcnRZID0gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHRjb25zdCBkcmFnZ2luZyA9ICh4LCB5KSA9PiB7XHJcblx0XHRjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblxyXG5cdFx0aWYoaG9yaXpvbnRhbFNwbGl0KSB7XHJcblx0XHRcdGNvbnN0IG1haW5YID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG5cdFx0XHRjb25zdCB3aWQgPSByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0O1xyXG5cdFx0XHRpZih3aWQgPD0gMCkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgcGVyID0gKHggLSBtYWluWCkgLyB3aWQgKiAxMDA7XHJcblx0XHRcdHRoaXMucGVyY2VudGFnZShwZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgbWFpblkgPSByZWN0LnRvcCAgKyBlbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdGNvbnN0IGhpdCA9IHJlY3QuYm90dG9tIC0gcmVjdC50b3A7XHJcblx0XHRcdGlmKGhpdCA8PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBwZXIgPSAoeSAtIG1haW5ZKSAvIGhpdCAqIDEwMDtcclxuXHRcdFx0dGhpcy5wZXJjZW50YWdlKHBlcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0aWYoZXZlbnQud2hpY2ggPT09IDApIHtcclxuXHRcdFx0bW91c2VVcChldmVudCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRkcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbW91c2VVcCA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlKTtcclxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXApO1xyXG5cdFx0ZW5kRHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHRvdWNoTW92ZSAgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdGRyYWdnaW5nKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB0b3VjaEVuZCA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0ZHJhZ2dpbmcodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZSk7XHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmQpO1xyXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoQ2FuY2VsKTtcclxuXHJcblx0XHRlbmREcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdG91Y2hDYW5jZWwgPSAoZXZlbnQpID0+IHtcclxuXHRcdHRvdWNoRW5kKGV2ZW50KTtcclxuXHR9XHJcblxyXG5cdHRoaXMucGVyY2VudGFnZSA9IGZ1bmN0aW9uKHBlcikge1xyXG5cdFx0aWYocGVyIDwgdGhpcy5taW5TcGxpdCkge1xyXG5cdFx0XHRwZXIgPSB0aGlzLm1pblNwbGl0O1xyXG5cdFx0fSBlbHNlIGlmKHBlciA+IHRoaXMubWF4U3BsaXQpIHtcclxuXHRcdFx0cGVyID0gdGhpcy5tYXhTcGxpdDtcclxuXHRcdH1cclxuXHJcblx0XHRpZihob3Jpem9udGFsU3BsaXQpIHtcclxuXHRcdFx0Y2hpbGQxLmRpdi5zdHlsZS53aWR0aCA9IHBlciArICclJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNoaWxkMS5kaXYuc3R5bGUuaGVpZ2h0ID0gcGVyICsgJyUnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGhpcy5nZXRUYWIgPSBmdW5jdGlvbih0YWcpIHtcclxuXHRcdGZvcihjb25zdCBjb2xsZWN0aW9uIG9mIFt0YWJzLCBjaGlsZDEsIGNoaWxkMl0pIHtcclxuXHRcdFx0aWYoY29sbGVjdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdGxldCB0YWIgPSBjb2xsZWN0aW9uLmdldFRhYih0YWcpO1xyXG5cdFx0XHRcdGlmKHRhYiAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRhYjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbn0iLCJpbXBvcnQge01haW59IGZyb20gJy4vTWFpbic7XHJcbmltcG9ydCB7T3B0aW9uc30gZnJvbSAnLi9PcHRpb25zJztcclxuaW1wb3J0IHtSZWFkeX0gZnJvbSAnLi9VdGlsaXR5L1JlYWR5JztcclxuaW1wb3J0IHtBY3Rpb259IGZyb20gJy4vQWN0aW9ucy9BY3Rpb24nO1xyXG5pbXBvcnQge0FsbEFjdGlvbnN9IGZyb20gJy4vQWN0aW9ucy9BbGxBY3Rpb25zJztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIFBsYXlncm91bmRcclxuICpcclxuICogVGhpcyBjcmVhdGVzIGEgc2luZ2xlIEluc3RhbmNlIHRoYXQgbWFuYWdlcyB0aGVcclxuICogY29tcG9uZW50cyBhbmQgc3RhcnRzIGFjdHVhbCBQbGF5Z3JvdW5kIHdpbmRvd3MuXHJcbiAqXHJcbiAqIENvbnN0cnVjdCBhbmQgc3RhcnQgcnVubmluZyBsaWtlIHRoaXM6XHJcbiAqXHJcbiAqIEdpdmVuIGFuIEhUTUwgZGl2OlxyXG4gKiAgICAgPGRpdiBpZD1cInBsYXlncm91bmRcIj48L2Rpdj5cclxuICpcclxuICogVGhlIGZvbGxvd2luZyBzY3JpcHQgc3RhcnRzIFBsYXlncm91bmQgaW4gdGhhdCBkaXY6XHJcbiAqXHJcbiAqICAgICB2YXIgcGxheWdyb3VuZCA9IG5ldyBQbGF5Z3JvdW5kKCcjcGxheWdyb3VuZCcpO1xyXG4gKiAgICAgcGxheWdyb3VuZC5zdGFydCgpO1xyXG4gKlxyXG4gKiBAcGFyYW0gc2l0ZSBTaXRlIG9iamVjdFxyXG4gKiBAcGFyYW0gc2VsIFNlbGVjdG9yIG9yIGVsZW1lbnQgdG8gY3JlYXRlIFBsYXlncm91bmQgaW4gKGNhbiBiZSBtYW55KVxyXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvYmplY3QgY29udGFpbmluZyBQbGF5Z3JvdW5kIG9wdGlvbnMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBsYXlncm91bmQgPSBmdW5jdGlvbihzaXRlLCBzZWwsIG9wdGlvbnMpIHtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gTWFzdGVyIHNldCBvZiB0aGUgdmVyc2lvblxyXG4gICAgLy9cclxuICAgIGxldCBQQUNLQUdFID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJyk7XHJcbiAgICB0aGlzLnZlcnNpb24gPSBQQUNLQUdFLnZlcnNpb247XHJcblxyXG4gICAgdGhpcy5zaXRlID0gc2l0ZTtcclxuXHJcbiAgICAvLyBSZWNvcmQgdGhlIHNlbGVjdG9yXHJcbiAgICB0aGlzLnNlbCA9IHNlbDtcclxuXHJcbiAgICAvLyBUaGUgT3B0aW9ucyBvYmplY3QgdGhhdCBtYW5hZ2VzIHVzZXIgb3B0aW9uc1xyXG4gICAgdGhpcy5vcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG4gICAgLy8gQSBjb2xsZWN0aW9uIG9mIE1haW4gb2JqZWN0cy5cclxuICAgIHZhciBtYWlucyA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgdGhlIFBsYXlncm91bmQgcnVubmluZywgY3JlYXRpbmcgdGhlIHVzZXIgaW50ZXJmYWNlLlxyXG4gICAgICogVGhpcyBkb2VzIHdhaXQgZm9yIGRvY3VtZW50IHJlYWR5IGJlZm9yZSBjYWxsaW5nXHJcbiAgICAgKiB0aGlzLnN0YXJ0Tm93KCkgdW5sZXNzIHdlIGFyZSBydW5uaW5nIGluIG5vLXdpbmRvd1xyXG4gICAgICogbW9kZS4gSW4gdGhhdCBjYXNlIGl0IHJldHVybnMgYSBzdGFydGVkIGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICB0aGlzLnN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHNlbCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydE5vdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmVhZHkuZ28oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Tm93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCB0aGUgUGxheWdyb3VuZCBydW5uaW5nIG5vdy4gRG9lcyBub3Qgd2FpdCBmb3IgZG9jdW1lbnQgcmVhZHkuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RhcnROb3cgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc2VsIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluID0gbmV3IE1haW4odGhpcywgc2VsKTtcclxuICAgICAgICAgICAgbWFpbnMucHVzaChtYWluKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbih0aGlzLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIG1haW5zLnB1c2gobWFpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG1haW5zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWFpbnNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGEgY29uc3RydWN0ZWQgQWN0aW9uIG9iamVjdCBmcm9tIHRoZSBhdmFpbGFibGUgcGxheWdyb3VuZCBhY3Rpb25zLlxyXG5cdCAqIEBwYXJhbSBhY3Rpb24gVGhlIGFjdGlvbiBkYXRhIGZyb20gdGhlIHNlcnZlci5cclxuXHQgKiBAcmV0dXJucyBBY3Rpb24gb2JqZWN0XHJcblx0ICovXHJcblx0dGhpcy5nZXRBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgIFx0aWYoUGxheWdyb3VuZC5hY3Rpb25zW2FjdGlvbi50YWddICE9PSB1bmRlZmluZWQpIHtcclxuICAgIFx0XHRyZXR1cm4gbmV3IChQbGF5Z3JvdW5kLmFjdGlvbnNbYWN0aW9uLnRhZ10pKHNpdGUsIGFjdGlvbik7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGNvbnNvbGUubG9nKCdQbGF5Z3JvdW5kIGFjdGlvbiAnICsgYWN0aW9uLnRhZyArICcgZG9lcyBub3QgZXhpc3QnKTtcclxuXHQgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcblBsYXlncm91bmQuQWN0aW9uID0gQWN0aW9uO1xyXG5cclxuUGxheWdyb3VuZC5hY3Rpb25zID0ge307XHJcblxyXG5QbGF5Z3JvdW5kLmFkZEFjdGlvbiA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG5cdHRoaXMuYWN0aW9uc1thY3Rpb24udGFnXSA9IGFjdGlvbjtcclxufVxyXG5cclxuQWxsQWN0aW9ucy5hZGRBbGwoUGxheWdyb3VuZCk7IiwiaW1wb3J0IHtUb29sc30gZnJvbSAnLi9ET00vVG9vbHMnO1xyXG5pbXBvcnQge091dHB1dFRhYn0gZnJvbSAnLi9UYWJzL091dHB1dFRhYic7XHJcbmltcG9ydCB7RWRpdG9yVGFifSBmcm9tICcuL1RhYnMvRWRpdG9yVGFiJztcclxuXHJcbmltcG9ydCBtZW51YmFycyBmcm9tICcuLi8uLi9pbWcvbWVudWJhcnMucG5nJztcclxuXHJcblxyXG4vKipcclxuICogTWFuYWdlcyB0aGUgdGFicyBpbiB0aGUgbW9kZWxcclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQHBhcmFtIGVsZW1lbnQgUGFyZW50IGVsZW1lbnRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVGFicyA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQpIHtcclxuICAgIC8vLyBUaGUgY3VycmVudGx5IGFjdGl2ZSB2aWV3L3RhYlxyXG4gICAgdGhpcy5hY3RpdmUgPSAtMTtcclxuXHJcbiAgICAvLy8gVGhlIE1haW4gb2JqZWN0XHJcbiAgICB0aGlzLm1haW4gPSBtYWluO1xyXG5cclxuICAgIC8vLyBUaGUgU2l0ZSBvYmplY3RcclxuICAgIHRoaXMuc2l0ZSA9IG1haW4uc2l0ZTtcclxuXHJcbiAgICAvLyBUaGUgY29sbGVjdGlvbiBvZiB0YWJzXHJcbiAgICB2YXIgdGFicyA9IFtdO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBUaGUgc3RydWN0dXJlOiA8ZGl2IGNsYXNzPVwiY2wtdGFic1wiPjx1bD48L3VsPjxkaXYgY2xhc3M9XCJjbC12aWV3c1wiPjwvZGl2PjwvZGl2PlxyXG4gICAgLy8gZGl2LnRhYnMgLSBFbmNsb3N1cmUgZm9yIGFsbCB0YWJzIGNvbnRlbnRcclxuICAgIC8vIHVsIC0gVGhlIHRhYnMgd2Ugc2VsZWN0IGZyb21cclxuICAgIC8vIHZpZXdzRGl2IC0gVGhlIHZpZXdzIHdpdGggdGhlIHRhYiBjb250ZW50c1xyXG4gICAgLy9cclxuXHJcbiAgICBsZXQgdGFic0RpdiA9IG51bGwsIHVsID0gbnVsbCwgdmlld3NEaXYgPSBudWxsO1xyXG5cclxuXHQvKipcclxuICAgICAqIENyZWF0ZSB0aGUgdGFicyBzeXN0ZW1cclxuXHQgKiBAcGFyYW0gZGl2IFRoZSBkaXYgd2UgcHV0IHRoZSB0YWJzIGludG9cclxuXHQgKi9cclxuXHR0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uKGRpdikge1xyXG4gICAgICAgIC8vIENyZWF0ZTogPGRpdiBjbGFzcz1cImNsLXRhYnNcIj48dWw+PC91bD48ZGl2IGNsYXNzPVwiY2wtdmlld3NcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICB0YWJzRGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtcGctdGFicycpO1xyXG4gICAgICAgIHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICB0YWJzRGl2LmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgICAgICAgdmlld3NEaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdjbC1wZy12aWV3cycpO1xyXG4gICAgICAgIHRhYnNEaXYuYXBwZW5kQ2hpbGQodmlld3NEaXYpO1xyXG5cclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGFic0Rpdik7XHJcblxyXG4gICAgICAgIC8vIENsZWFyIHRoZSB0YWJzIGNvbGxlY3Rpb25cclxuICAgICAgICB0YWJzID0gW107XHJcblxyXG5cdC8vXHR0aGlzLmFkZCgncHJvZ3JhbScpO1xyXG4vL1x0XHR0aGlzLmFkZCgnb3V0cHV0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2FkID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0Zm9yKGNvbnN0IHRhYkRhdGEgb2YgZGF0YSkge1xyXG5cdFx0XHR0aGlzLmFkZCh0YWJEYXRhKTtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5ld1BhcmVudCA9IGZ1bmN0aW9uKHBhbmUpIHtcclxuXHRcdHBhbmUuZGl2LmFwcGVuZENoaWxkKHRhYnNEaXYpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0bGV0IHRhYiA9IG51bGw7XHJcblxyXG5cdCAgICBzd2l0Y2goZGF0YS50eXBlKSB7XHJcblx0XHQgICAgY2FzZSAnZWRpdG9yJzpcclxuXHRcdFx0ICAgIHRhYiA9IG5ldyBFZGl0b3JUYWIodGhpcywgZGF0YSk7XHJcblx0XHQgICAgXHRicmVhaztcclxuXHJcblx0XHQgICAgY2FzZSAnb3V0cHV0JzpcclxuXHRcdCAgICBcdHRhYiA9IG5ldyBPdXRwdXRUYWIodGhpcywgZGF0YSk7XHJcblx0XHQgICAgXHRicmVhaztcclxuXHQgICAgfVxyXG5cclxuXHQgICAgaWYodGFiICE9PSBudWxsKSB7XHJcblx0XHQgICAgdWwuYXBwZW5kQ2hpbGQodGFiLmxpKTtcclxuXHRcdCAgICB2aWV3c0Rpdi5hcHBlbmRDaGlsZCh0YWIudmlldyk7XHJcblx0XHQgICAgdGFicy5wdXNoKHt0YWI6IHRhYiwgbGk6IHRhYi5saSwgdmlldzogdGFiLnZpZXd9KTtcclxuXHJcblx0XHQgICAgdGFiLnNlbGVjdCgpO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBhIHRhYiBieSB0YWcuXHJcblx0ICogQHBhcmFtIHRhZyBUYWIgdGFnXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0dGhpcy5nZXRUYWIgPSBmdW5jdGlvbih0YWcpIHtcclxuXHQgICAgZm9yKGNvbnN0IHRhYiBvZiB0YWJzKSB7XHJcblx0XHQgICAgaWYodGFiLnRhYi50YWcgPT09IHRhZykge1xyXG5cdFx0XHQgICAgcmV0dXJuIHRhYi50YWI7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVuc2VsZWN0QWxsID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIENsZWFyIGFsbCBzZWxlY3Rpb25zXHJcblx0ICAgIC8vXHJcblx0ICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XHJcblx0ICAgIFx0dGFiLmxpLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcblx0ICAgIFx0dGFiLnZpZXcuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuXHQgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gLTE7XHJcbiAgICAgICAgdGFic0Rpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhYnNEaXYpO1xyXG4gICAgICAgIHRhYnNEaXYgPSBudWxsO1xyXG4gICAgICAgIHRhYnMgPSBbXTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jcmVhdGUoZWxlbWVudCk7XHJcbn07XHJcbiIsImltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XHJcblxyXG5leHBvcnQgY29uc3QgRWRpdG9yVGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRjb25zdCBzaXRlID0gdGFicy5zaXRlO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnZWRpdG9yJyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHJcblx0bGV0IGlubmVyVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuYXBwZW5kQ2hpbGQoaW5uZXJWaWV3KTtcclxuXHJcblx0bGV0IG51bXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRudW1zLmNsYXNzTGlzdC5hZGQoJ2NsLXBnLW51bXMnKTtcclxuXHRpbm5lclZpZXcuYXBwZW5kQ2hpbGQobnVtcyk7XHJcblxyXG5cdGxldCBlZGl0b3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRlZGl0b3JEaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGctZWRpdG9yJyk7XHJcblx0aW5uZXJWaWV3LmFwcGVuZENoaWxkKGVkaXRvckRpdik7XHJcblxyXG5cdGNvbnN0IGVkaXRvciA9IG5ldyBzaXRlLkVkaXRvcihlZGl0b3JEaXYsIHtcclxuXHRcdHJlc2l6ZTogJ25vbmUnLFxyXG5cdFx0dGFiOiB0cnVlLFxyXG5cdFx0YXV0b0luZGVudDogdHJ1ZSxcclxuXHRcdHN0eWxlczogbnVsbFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBzY3JvbGxhYmxlID0gZWRpdG9yLnRleHRhcmVhO1xyXG5cdHNjcm9sbGFibGUuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGV2ZW50KSA9PiB7XHJcblx0XHQvLyBlZGl0b3JEaXYuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJzBweCAnICsgKC1wcmUuc2Nyb2xsVG9wKSArICdweCc7XHJcblx0XHRudW1zLnNjcm9sbFRvcCA9IHNjcm9sbGFibGUuc2Nyb2xsVG9wO1xyXG5cdH0pO1xyXG5cclxuXHR0aGlzLnNldCA9IGZ1bmN0aW9uKHRleHQpIHtcclxuXHRcdC8vIERhdGEgZnJvbSB0aGUgZmlsZSBzeXN0ZW0gbWF5IGNvbnNpc3Qgb2YgZWl0aGVyIGp1c3RcclxuXHRcdC8vIHRleHQgKG9sZCBmb3JtYXQpIG9yIHRleHQgaW4gYW4gb2JqZWN0LiBUaGlzIGFsbG93c1xyXG5cdFx0Ly8gZWl0aGVyIGNhc2UgdG8gd29yay5cclxuXHRcdGlmKHRleHQuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRleHQgPSB0ZXh0LmRhdGE7XHJcblx0XHR9XHJcblxyXG5cdFx0ZWRpdG9yLnRleHRhcmVhLnZhbHVlID0gdGV4dDtcclxuXHJcblx0XHRsZXQgbGluZXMgPSAwO1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyArK2kpe1xyXG5cdFx0XHRpZih0ZXh0W2ldID09PSAnXFxuJykge1xyXG5cdFx0XHRcdGxpbmVzKys7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZihsaW5lcyA8IDEwMCkge1xyXG5cdFx0XHRsaW5lcyA9IDEwMDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBUaGUgZXh0cmEgYWRkZWQgb24gaGVyZSBlbnN1cmVzIHdlIGdldCBwYXN0IGFueSBzY3JvbGwgYmFyXHJcblx0XHQvLyB0aGF0IG1heSB0YWtlIHVwIGhvcml6b250YWwgcm9vbS5cclxuXHRcdG51bXMuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRmb3IobGV0IGk9MTsgaTw9bGluZXMrNTsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRcdHAuaW5uZXJUZXh0ID0gJycgKyBpO1xyXG5cdFx0XHRudW1zLmFwcGVuZENoaWxkKHApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHRoZSBjb250ZW50cyBvZiB0aGUgZWRpdG9yXHJcblx0ICogQHJldHVybnMgeyp8c3RyaW5nfVxyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gZWRpdG9yLnRleHRhcmVhLnZhbHVlO1xyXG5cdH1cclxuXHJcblx0dGhpcy5zZWxlY3QgPSBmdW5jdGlvbigpIHtcclxuXHRcdFRhYi5wcm90b3R5cGUuc2VsZWN0LmNhbGwodGhpcyk7XHJcblxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGVkaXRvci50ZXh0YXJlYS5mb2N1cygpO1xyXG5cdFx0fSwgMCk7XHJcblxyXG5cdH1cclxuXHJcblx0dGhpcy5zZXQoJycpO1xyXG59XHJcblxyXG5FZGl0b3JUYWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUYWIucHJvdG90eXBlKTtcclxuRWRpdG9yVGFiLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEVkaXRvclRhYjsiLCJpbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHJcblx0bGV0IGlubmVyVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuYXBwZW5kQ2hpbGQoaW5uZXJWaWV3KTtcclxuXHJcblx0bGV0IG51bXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRudW1zLmNsYXNzTGlzdC5hZGQoJ2NsLXBnLW51bXMnKTtcclxuXHRpbm5lclZpZXcuYXBwZW5kQ2hpbGQobnVtcyk7XHJcblxyXG5cdGxldCBwcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcclxuXHRpbm5lclZpZXcuYXBwZW5kQ2hpbGQocHJlKTtcclxuXHJcblx0cHJlLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4ge1xyXG5cdFx0cHJlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICcwcHggJyArICgtcHJlLnNjcm9sbFRvcCkgKyAncHgnO1xyXG5cdFx0bnVtcy5zY3JvbGxUb3AgPSBwcmUuc2Nyb2xsVG9wO1xyXG5cdH0pO1xyXG5cclxuXHR0aGlzLnNldCA9IGZ1bmN0aW9uKHRleHQpIHtcclxuXHRcdHByZS5pbm5lckhUTUwgPSB0ZXh0O1xyXG5cclxuXHRcdGxldCBsaW5lcyA9IDA7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7ICsraSl7XHJcblx0XHRcdGlmKHRleHRbaV0gPT09ICdcXG4nKSB7XHJcblx0XHRcdFx0bGluZXMrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGxpbmVzIDwgMTAwKSB7XHJcblx0XHRcdGxpbmVzID0gMTAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFRoZSBleHRyYSBhZGRlZCBvbiBoZXJlIGVuc3VyZXMgd2UgZ2V0IHBhc3QgYW55IHNjcm9sbCBiYXJcclxuXHRcdC8vIHRoYXQgbWF5IHRha2UgdXAgaG9yaXpvbnRhbCByb29tLlxyXG5cdFx0bnVtcy5pbm5lckhUTUwgPSAnJztcclxuXHRcdGZvcihsZXQgaT0xOyBpPD1saW5lcys1OyBpKyspIHtcclxuXHRcdFx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdFx0cC5pbm5lclRleHQgPSAnJyArIGk7XHJcblx0XHRcdG51bXMuYXBwZW5kQ2hpbGQocCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCB0ZXh0ID0gYGltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7ZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtleHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHRcclxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcclxufVxyXG5cclxuaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcclxuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcclxuXHJcblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ291dHB1dCcpO1xyXG5cdHRoaXMudmlldyA9IHZpZXc7XHJcblx0XHJcblx0dmlldy5pbm5lclRleHQgPSBcXGBcXGA7XHJcbn1cclxuaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcclxuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcclxuXHJcblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ291dHB1dCcpO1xyXG5cdHRoaXMudmlldyA9IHZpZXc7XHJcblx0XHJcblx0dmlldy5pbm5lclRleHQgPSBcXGBcXGA7XHJcbn1cclxuXHJcbk91dHB1dFRhYi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRhYi5wcm90b3R5cGUpO1xyXG5PdXRwdXRUYWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3V0cHV0VGFiO2A7XHJcblxyXG5cdC8vdGhpcy5zZXQodGV4dCArIHRleHQgKyB0ZXh0ICsgdGV4dCk7XHJcblx0dGhpcy5zZXQoJycpO1xyXG59XHJcblxyXG5PdXRwdXRUYWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUYWIucHJvdG90eXBlKTtcclxuT3V0cHV0VGFiLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE91dHB1dFRhYjsiLCJcclxuZXhwb3J0IGNvbnN0IFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcclxuXHR0aGlzLnRhYnMgPSB0YWJzO1xyXG5cclxuXHR0aGlzLnZpZXcgPSBudWxsO1xyXG5cdHRoaXMudGFnID0gZGF0YS50YWc7XHJcblx0dGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG5cclxuXHRsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdHRoaXMubGkgPSBsaTtcclxuXHJcblx0bGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblx0bGkuYXBwZW5kQ2hpbGQoYSk7XHJcblx0YS5pbm5lclRleHQgPSBkYXRhLm5hbWU7XHJcblxyXG5cdGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cdGxpLmFwcGVuZENoaWxkKG1lbnUpO1xyXG5cdC8vIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHQvLyBtZW51LmFwcGVuZENoaWxkKGltZyk7XHJcblx0Ly8gaW1nLnNyYyA9IG1lbnViYXJzO1xyXG5cclxuXHRsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRoaXMuc2VsZWN0KCk7XHJcblx0fSk7XHJcblxyXG5cdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0aGlzLnNlbGVjdCgpO1xyXG5cdH0pO1xyXG5cclxuXHR0aGlzLnNldCA9IGZ1bmN0aW9uKHRleHQpIHt9XHJcblxyXG5cdC8vXHJcblx0Ly8gVGhlIG1lbnVcclxuXHQvLyBNYXliZSBhY3RpdmF0ZSBsYXRlciBvbj9cclxuXHQvL1xyXG5cdC8vIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHQvLyBtZW51RGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXRhYi1tZW51Jyk7XHJcblx0Ly8gbWVudURpdi5jbGFzc0xpc3QuYWRkKCdjbC1tZW51LW9wZW4nKTtcclxuXHQvLyBsaS5hcHBlbmRDaGlsZChtZW51RGl2KTtcclxuXHQvL1xyXG5cdC8vIGNvbnN0IG1lbnVVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblx0Ly8gbWVudURpdi5hcHBlbmRDaGlsZChtZW51VUwpO1xyXG5cdC8vIG1lbnVVTC5pbm5lckhUTUwgPVxyXG5cdC8vIFx0JzxsaT48YSBjbGFzcz1cImVkaXQtdW5kb1wiPjxzcGFuIGNsYXNzPVwiaWNvbnMtY2wgaWNvbnMtY2wtYXJyb3dyZXR1cm50aGljay0xLXdcIj48L3NwYW4+VW5kbzwvYT48L2xpPicgK1xyXG5cdC8vIFx0JzxsaT48YSBjbGFzcz1cImVkaXQtZGVsZXRlXCI+PHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC10cmFzaFwiPjwvc3Bhbj5EZWxldGU8L2E+PC9saT4nO1xyXG5cdC8vXHJcblx0Ly8gY29uc3QgY29ubmVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdC8vIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY29ubmVjdERpdik7XHJcblx0Ly9cclxuXHQvLyBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHQvLyBjb25uZWN0RGl2LmFwcGVuZENoaWxkKGltZyk7XHJcblx0Ly8gaW1nLnNyYyA9IG1lbnViYXJzO1xyXG59XHJcblxyXG5UYWIucHJvdG90eXBlLnNlbGVjdCAgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLnRhYnMudW5zZWxlY3RBbGwoKTtcclxuXHJcblx0dGhpcy5saS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG5cdHRoaXMudmlldy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBEcmFnIGFuZCBkcm9wIHN1cHBvcnQgZm9yIHRoZSBwYWxldHRlXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERyYWdBbmREcm9wID0gZnVuY3Rpb24obWFpbikge1xyXG5cclxuXHRsZXQgZHJhZ0VsZW1lbnQgPSBudWxsOyAvLyBET00gRWxlbWVudFxyXG5cdGxldCBkcmFnSXRlbSA9IG51bGw7ICAgIC8vIFBhbGV0dGVJdGVtXHJcblx0bGV0IGRyb3BWaWV3cyA9IFtdOyAgICAgLy8gVmlld1xyXG5cclxuXHRjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xyXG5cdFx0XHRpZihldmVudC53aGljaCA9PT0gMCkge1xyXG5cdFx0XHRcdG1vdXNlVXAoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1vdXNlTW92ZShldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChldmVudCkgPT4ge1xyXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdFx0bW91c2VNb3ZlKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xyXG5cdFx0XHRtb3VzZVVwKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdG1vdXNlVXAodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIChldmVudCkgPT4ge1xyXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdFx0bW91c2VVcCh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLmRyYWdnYWJsZSA9IChwYWxldHRlSXRlbSkgPT4ge1xyXG5cdFx0cGFsZXR0ZUl0ZW0uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0Y2xpY2socGFsZXR0ZUl0ZW0pO1xyXG5cclxuXHRcdFx0bW91c2VNb3ZlKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRwYWxldHRlSXRlbS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0Y2xpY2socGFsZXR0ZUl0ZW0pO1xyXG5cclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdG1vdXNlTW92ZSh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLmRyb3BwYWJsZSA9ICh2aWV3LCBjYWxsYmFjaykgPT4ge1xyXG5cdFx0ZHJvcFZpZXdzLnB1c2goe1xyXG5cdFx0XHQndmlldyc6IHZpZXcsXHJcblx0XHRcdCdjYWxsYmFjayc6IGNhbGxiYWNrXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNsaWNrID0gKHBhbGV0dGVJdGVtKSA9PiB7XHJcblx0XHQvL1xyXG5cdFx0Ly8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZWxlbWVudCBhbmQgc2V0IGl0IHVwIGZvciBkcmFnZ2luZ1xyXG5cdFx0Ly9cclxuXHRcdGNvbnN0IGNsb25lID0gcGFsZXR0ZUl0ZW0ucGFsZXR0ZUltYWdlKCk7XHJcblx0XHRtYWluLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG5cdFx0Y2xvbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdFx0Y2xvbmUuc3R5bGUudG9wID0gMDtcclxuXHRcdGNsb25lLnN0eWxlLmxlZnQgPSAwO1xyXG5cdFx0Y2xvbmUuc3R5bGUuekluZGV4ID0gMTAwO1xyXG5cdFx0Y2xvbmUuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG5cclxuXHRcdGRyYWdJdGVtID0gcGFsZXR0ZUl0ZW07XHJcblx0XHRkcmFnRWxlbWVudCA9IGNsb25lO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbW91c2VNb3ZlID0gKHgsIHkpID0+IHtcclxuXHRcdGlmKGRyYWdFbGVtZW50ICE9PSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IHJlY3QgPSBtYWluLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdGNvbnN0IG1haW5YID0gcmVjdC5sZWZ0ICsgbWFpbi5lbGVtZW50LnNjcm9sbExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQ7XHJcblx0XHRcdGNvbnN0IG1haW5ZID0gcmVjdC50b3AgICsgbWFpbi5lbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdGRyYWdFbGVtZW50LnN0eWxlLmxlZnQgPSAoeCAtIG1haW5YIC0gZHJhZ0VsZW1lbnQuY2xpZW50V2lkdGggLyAyKSArICdweCc7XHJcblx0XHRcdGRyYWdFbGVtZW50LnN0eWxlLnRvcCA9ICh5IC0gbWFpblkgLSBkcmFnRWxlbWVudC5jbGllbnRIZWlnaHQgLyAyKSArICdweCc7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdXNlVXAgPSAoeCwgeSkgPT4ge1xyXG5cdFx0aWYoZHJhZ0VsZW1lbnQgIT09IG51bGwpIHtcclxuXHJcblx0XHRcdGZvcihjb25zdCB2aWV3IG9mIGRyb3BWaWV3cykge1xyXG5cdFx0XHRcdC8vXHJcblx0XHRcdFx0Ly8gSXMgdGhlIHZpZXcgZW5hYmxlZD9cclxuXHRcdFx0XHQvL1xyXG5cdFx0XHRcdGNvbnN0IHZpZXdFbGVtZW50ID0gdmlldy52aWV3LmVsZW1lbnQ7XHJcblx0XHRcdFx0aWYodmlld0VsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHQvLyBEZXRlcm1pbmUgeCx5IGluIHRoZSBjYW52YXNcclxuXHRcdFx0XHQvL1xyXG5cdFx0XHRcdGNvbnN0IHJlY3QgPSB2aWV3RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHRjb25zdCB2aWV3WCA9IHJlY3QubGVmdCArIHZpZXdFbGVtZW50LnNjcm9sbExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQ7XHJcblx0XHRcdFx0Y29uc3Qgdmlld1kgPSByZWN0LnRvcCArIHZpZXdFbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdFx0aWYoeCA+PSB2aWV3WCAmJlxyXG5cdFx0XHRcdFx0eSA+PSB2aWV3WSAmJlxyXG5cdFx0XHRcdFx0eCA8IHZpZXdYICsgKHJlY3QucmlnaHQgLSByZWN0LmxlZnQpICYmXHJcblx0XHRcdFx0XHR5IDwgdmlld1kgKyAocmVjdC5ib3R0b20gLSByZWN0LnRvcCkpIHtcclxuXHRcdFx0XHRcdHZpZXcuY2FsbGJhY2soZHJhZ0l0ZW0sIHggLSB2aWV3WCwgeSAtIHZpZXdZKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWFpbi5lbGVtZW50LnJlbW92ZUNoaWxkKGRyYWdFbGVtZW50KTtcclxuXHRcdFx0ZHJhZ0VsZW1lbnQgPSBudWxsO1xyXG5cdFx0XHRkcmFnSXRlbSA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxufSIsIi8qKlxyXG4gKiBTaW1wbGUgRG9jdW1lbnQgcmVhZHkgZnVuY3Rpb24sIGVxdWl2YWxlbnQgdG8galF1ZXJ5J3MgZG9jdW1lbnQgcmVhZHkuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFJlYWR5ID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxsIGEgZnVuY3Rpb24gd2hlbiB0aGUgZG9jdW1lbnQgaXMgcmVhZG9uLlxyXG4gKiBAcGFyYW0gZm4gRnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGRvY3VtZW50IHJlYWR5XHJcbiAqL1xyXG5SZWFkeS5nbyA9IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XHJcbiAgICAgICAgZm4oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1BsYXlncm91bmR9IGZyb20gXCIuL1BsYXlncm91bmQvUGxheWdyb3VuZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXlncm91bmRGYWN0b3J5ID0gZnVuY3Rpb24oKSB7fVxyXG5cclxuUGxheWdyb3VuZEZhY3RvcnkuY3JlYXRlID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cclxuXHRmdW5jdGlvbiBpbnN0YWxsKCkge1xyXG5cdFx0Y29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtcGxheWdyb3VuZCcpO1xyXG5cdFx0Zm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuXHRcdFx0Y29uc3QganNvbiA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XHJcblx0XHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdGNvbnN0IHBsYXlncm91bmQgPSBuZXcgUGxheWdyb3VuZChzaXRlLCBlbGVtZW50LCBqc29uKTtcclxuXHRcdFx0cGxheWdyb3VuZC5zdGFydE5vdygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2l0ZS5zdGFydCggKCkgPT4ge1xyXG5cdFx0aW5zdGFsbCgpO1xyXG5cdH0pO1xyXG5cclxuXHJcblx0c2l0ZS5tZXNzYWdlTGlzdGVuZXIoKG1zZywgZGF0YSkgPT4ge1xyXG5cdFx0c3dpdGNoKG1zZykge1xyXG5cdFx0XHRjYXNlICdjbC1xdWl6LWFmdGVyLWluc3RhbGxlZCc6XHJcblx0XHRcdFx0aW5zdGFsbCgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnY2wtZ3JhZGVzLWdyYWRlci1pbnN0YWxsZWQnOlxyXG5cdFx0XHRcdGluc3RhbGwoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHNpdGUuUGxheWdyb3VuZCA9IFBsYXlncm91bmQ7XHJcbn1cclxuXHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtMWRkYzY4YjRhMS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtOTkzMzU0YTI0OC56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC0xZGRjNjhiNGExLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNS4yLjYtMTE4YzZkNDA5ZS05OTMzNTRhMjQ4LnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLTFkZGM2OGI0YTEvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS01LjIuNi0xMThjNmQ0MDllLTk5MzM1NGEyNDguemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9pbWcvbWVudS1jaGVjay5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9pbWcvYmFycy5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLXBsYXlncm91bmQgZGl2LnRvYXN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjNlbSk7XFxuICB6LWluZGV4OiA0MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC40cywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDMwZW0vMik7XFxuICB3aWR0aDogMzBlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LnRvYXN0LnRvYXN0LWFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC40cztcXG4gIHotaW5kZXg6IDQwMDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIge1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDA7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzgwODA4MDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMDA3OTZCO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkgYSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSBhOmxpbmssIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIGE6dmlzaXRlZCB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCBpbWcuY2hlY2sge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgd2lkdGg6IDE5cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMC4yNWVtIDJlbSAwLjI1ZW0gMC41ZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhOmxpbmssIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAxMDAlO1xcbiAgbWFyZ2luOiAxcHggMCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxuICBib3JkZXItdG9wLXdpZHRoOiAwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOGVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwgPiBsaS5tZW51LWRpc2FibGVkIGEge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmNsLXBnLW1lbnUtb3BlbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuZWRpdC1tZW51IGEge1xcbiAgd2lkdGg6IDZlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5vcHRpb24tbWVudSBhIHtcXG4gIHdpZHRoOiAxMWVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmZpbGUtbWVudSBhIHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuaGVscC1tZW51IGEge1xcbiAgd2lkdGg6IDcuNWVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIC51bC1zdGF0ZS1hY3RpdmUge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCBsaS5tZW51LWRpdmlkZXIge1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IDAgc29saWQgYmxhY2s7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi53b3JrIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogI2EwMDtcXG4gIG9wYWNpdHk6IDAuMDU7XFxuICB6LWluZGV4OiAyMDAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLW1haW4ge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZnVsbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtd2luZG93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IHRoaW4gc29saWQgI2FhYWFhYTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWJlZm9yZSwgZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XFxuICBoZWlnaHQ6IDFlbTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG4gIGJvcmRlcjogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzcHggMCAwIDJweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMC4yNWVtIDAuMjVlbSAwLjQ1ZW0gMDtcXG4gIG1pbi13aWR0aDogNmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgbWFyZ2luOiAxcHggM3B4IC0xcHggMDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB6LWluZGV4OiAxODtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG91dGxpbmU6IDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6bnRoLWNoaWxkKDIpIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkgYTpudGgtY2hpbGQoMikgaW1nIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB6LWluZGV4OiAyMjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpLnNlbGVjdGVkIGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyBkaXYuY2wtcGctdmlld3Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMjlweDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogMjA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIGRpdi5jbC1wZy12aWV3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXcuc2VsZWN0ZWQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiBjYWxjKDEwMCUgLSAxN3B4KTtcXG4gIHRvcDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMjdweDtcXG4gIHRvcDogNHB4O1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IGRpdiBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMzBweCAwIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwgPiBsaSBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4ZW07XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkubWVudS1kaXNhYmxlZCBhIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51LmNsLW1lbnUtb3BlbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3QsIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQsIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJpZ2h0LFxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCwgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtbGVmdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4ODg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQgZGl2LmNsLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcmlnaHQ6IC01cHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgei1pbmRleDogMTAwO1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCBkaXYuY2wtYmFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3R0b206IC01cHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgei1pbmRleDogMjtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1ib3R0b20ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG5kaXYuY2wtcGctbnVtcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICB3aWR0aDogMmVtO1xcbiAgcGFkZGluZzogNHB4IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5kaXYuY2wtcGctbnVtcyBwIHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgM3B4IDAgMDtcXG4gIGJvcmRlcjogMDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6ICM3Nzc7XFxufVxcblxcbmRpdi5jbC1wZy1hYm91dCB7XFxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5kaXYuY2wtcGctYWJvdXQgZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMjI1cHg7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYge1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5kaXYuY2wtcGctYWJvdXQgZGl2LmNsLXBnLWFib3V0LWRpdiBoMSB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5kaXYuY2wtcGctYWJvdXQgZGl2LmNsLXBnLWFib3V0LWRpdiBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yID4gZGl2IGRpdi5jbC1wZy1lZGl0b3Ige1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yID4gZGl2IGRpdi5jbC1wZy1lZGl0b3IgdGV4dGFyZWEge1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXG4gIGJvcmRlcjogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0ID4gZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQgPiBkaXYgcHJlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXG4gIGJvcmRlcjogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL190b2FzdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL21vZHVsZXMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL21vZHVsZXMvX2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9fcGxheWdyb3VuZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19wbGF5Z3JvdW5kLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX21lbnUuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9tb2R1bGVzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL193b3JrLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fdGFicy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19wYW5lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX2xpbmVfbnVtYmVycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19hYm91dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL190YWJfZWRpdG9yLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX3RhYl9vdXRwdXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUVBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsdUZBQUE7RUFFQSwyREFBQTtFQUNBLGdCQ2RjO0VEZWQsd0JBQUE7RUFDQSxXQ2ZVO0VEZ0JWLHlCRVllO0VGWGYsWUVZUztFRlhULGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUdMSjtBSFFFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBR05KOztBQ3ZCQTtFQUNFLGFBQUE7QUQwQkY7O0FFM0JBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCSGVnQjtFR2RoQixpQ0FBQTtFQUNBLGlCQ1JlO0FIc0NqQjtBRTVCRTtFQUNFLG1CSFZXO0FDd0NmO0FFM0JFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FGNkJKO0FFM0JJO0VBQ0UsMkRDcEJNO0VEcUJOLGlCQ3BCVztFRHFCWCxZSENPO0VHQVAscUJBQUE7QUY2Qk47QUUxQkk7RUFDRSxZSEpPO0FDZ0NiO0FFckJFO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUZ1Qko7QUVyQkk7RUFDRSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7QUZ1Qk47QUVwQkk7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBRnNCTjtBRXBCTTtFQUNFLDJEQ3ZESTtFRHdESixpQkN2RFM7RUR3RFQsWUhsQ0s7RUdtQ0wscUJBQUE7QUZzQlI7QUVuQk07RUFDRSxZSHZDSztBQzREYjtBRWRJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsdUZBQUE7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RUFDQSxtREFBQTtFQUNBLGlCQUFBO0VBRUEsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FYNmRSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpdi5jbC1wbGF5Z3JvdW5kXFxyXFxue1xcclxcbiAgJHRvYXN0LXRyYW5zaXRpb24tdGltZTogMC40cztcXHJcXG5cXHJcXG4gIGRpdi50b2FzdCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcblxcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjNlbSk7XFxyXFxuICAgIHotaW5kZXg6IDQwMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsICR0b2FzdC10cmFuc2l0aW9uLXRpbWUgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyICR0b2FzdC10cmFuc2l0aW9uLXRpbWUsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcclxcblxcclxcbiAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAkdG9hc3QtZm9udC1zaXplO1xcclxcbiAgICBsZWZ0OiBjYWxjKDUwJSAtICN7JHRvYXN0LXdpZHRofS8yKTtcXHJcXG4gICAgd2lkdGg6ICR0b2FzdC13aWR0aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRvYXN0LWJhY2tncm91bmQ7XFxyXFxuICAgIGNvbG9yOiAkdG9hc3QtdGV4dDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMC41ZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYudG9hc3QudG9hc3QtYWN0aXZlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAkdG9hc3QtdHJhbnNpdGlvbi10aW1lO1xcclxcbiAgICB6LWluZGV4OiA0MDA7XFxyXFxuXFxyXFxuICB9XFxyXFxufVwiLFwiJHRvYXN0LWZvbnQtc2l6ZTogMS4xZW07XFxyXFxuJHRvYXN0LXdpZHRoOiAzMGVtO1xcclxcblxcclxcbiRkcmFnLWJhci13aWR0aDogMTBweDtcXHJcXG5cXHJcXG4kdGFiLWNvcm5lci1yYWRpdXM6IDVweDtcXHJcXG5cIixcIi8vIFRoZSBtYWpvciBjb2xvcnNcXHJcXG4vLyBXZSBoYXZlIGEgcHJpbWFyeSBjb2xvciwgdHdvIHNlY29uZGFyeSBjb2xvcnMsIGFuZCBhIGNvbXBsZW1lbnRhcnkgY29sb3IuXFxyXFxuJGRhcmstcHJpbWFyeTogIzAwNzk2QjtcXHJcXG4kcHJpbWFyeTogIzAwOTY4ODtcXHJcXG4kbGlnaHQtcHJpbWFyeTogI0IyREZEQjtcXHJcXG4kYWNjZW50OiAjNjA3RDhCO1xcclxcbiRwcmltYXJ5LXRleHQ6ICMyMTIxMjE7XFxyXFxuJGRpdmlkZXItY29sb3I6ICNCREJEQkQ7XFxyXFxuJHNlY29uZGFyeS10ZXh0OiAjNjA2MDYwO1xcclxcblxcclxcbiRjb21wOiAjYzQxNDI1O1xcclxcbiR3aW5kb3ctYm9yZGVyczogI2FhYWFhYTtcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4kdGFicy1iYWNrZ3JvdW5kOiAjZGRkO1xcclxcbiR0YWItYmFja2dyb3VuZDogI2NjYztcXHJcXG4kdGFiLXRleHQ6IGJsYWNrO1xcclxcbiR0YWItc2VsZWN0ZWQtYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuJHRhYi1zZWxlY3RlZC10ZXh0OiBibGFjaztcXHJcXG5cXHJcXG4kbWVudS1mb2N1czogJGRhcmstcHJpbWFyeTtcXHJcXG4kbWVudS1iYWNrZ3JvdW5kOiAjZjBmM2YwO1xcclxcbiRtZW51LWNvbG9yOiBibGFjaztcXHJcXG4kbWVudS1kaXZpZGVyLWNvbG9yOiBibGFjaztcXHJcXG4kbWVudS1ib3JkZXItY29sb3I6ICM4MDgwODA7XFxyXFxuXFxyXFxuJHJlc2l6ZXI6ICRkYXJrLXByaW1hcnk7XFxyXFxuXFxyXFxuJHRvYXN0LWJhY2tncm91bmQ6ICMxNTE1MTU7XFxyXFxuJHRvYXN0LXRleHQ6IHdoaXRlO1wiLFwiZGl2LmNsLXBsYXlncm91bmQgZGl2LnRvYXN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjNlbSk7XFxuICB6LWluZGV4OiA0MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC40cywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDMwZW0vMik7XFxuICB3aWR0aDogMzBlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LnRvYXN0LnRvYXN0LWFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC40cztcXG4gIHotaW5kZXg6IDQwMDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIge1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDA7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzgwODA4MDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMDA3OTZCO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkgYSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSBhOmxpbmssIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIGE6dmlzaXRlZCB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCBpbWcuY2hlY2sge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgd2lkdGg6IDE5cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBjb250ZW50OiB1cmwoXFxcIi4uLy4uL2ltZy9tZW51LWNoZWNrLnBuZ1xcXCIpO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMC4yNWVtIDJlbSAwLjI1ZW0gMC41ZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhOmxpbmssIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAxMDAlO1xcbiAgbWFyZ2luOiAxcHggMCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxuICBib3JkZXItdG9wLXdpZHRoOiAwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOGVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwgPiBsaS5tZW51LWRpc2FibGVkIGEge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmNsLXBnLW1lbnUtb3BlbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuZWRpdC1tZW51IGEge1xcbiAgd2lkdGg6IDZlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5vcHRpb24tbWVudSBhIHtcXG4gIHdpZHRoOiAxMWVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmZpbGUtbWVudSBhIHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuaGVscC1tZW51IGEge1xcbiAgd2lkdGg6IDcuNWVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIC51bC1zdGF0ZS1hY3RpdmUge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCBsaS5tZW51LWRpdmlkZXIge1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IDAgc29saWQgYmxhY2s7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi53b3JrIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogI2EwMDtcXG4gIG9wYWNpdHk6IDAuMDU7XFxuICB6LWluZGV4OiAyMDAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLW1haW4ge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZnVsbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtd2luZG93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IHRoaW4gc29saWQgI2FhYWFhYTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWJlZm9yZSwgZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XFxuICBoZWlnaHQ6IDFlbTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG4gIGJvcmRlcjogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzcHggMCAwIDJweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMC4yNWVtIDAuMjVlbSAwLjQ1ZW0gMDtcXG4gIG1pbi13aWR0aDogNmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgbWFyZ2luOiAxcHggM3B4IC0xcHggMDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB6LWluZGV4OiAxODtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG91dGxpbmU6IDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6bnRoLWNoaWxkKDIpIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkgYTpudGgtY2hpbGQoMikgaW1nIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB6LWluZGV4OiAyMjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpLnNlbGVjdGVkIGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyBkaXYuY2wtcGctdmlld3Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMjlweDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogMjA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIGRpdi5jbC1wZy12aWV3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXcuc2VsZWN0ZWQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiBjYWxjKDEwMCUgLSAxN3B4KTtcXG4gIHRvcDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMjdweDtcXG4gIHRvcDogNHB4O1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IGRpdiBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMzBweCAwIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwgPiBsaSBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4ZW07XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkubWVudS1kaXNhYmxlZCBhIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51LmNsLW1lbnUtb3BlbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3QsIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQsIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJpZ2h0LFxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCwgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtbGVmdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4ODg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQgZGl2LmNsLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcmlnaHQ6IC01cHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgei1pbmRleDogMTAwO1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCBkaXYuY2wtYmFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3R0b206IC01cHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgei1pbmRleDogMjtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1ib3R0b20ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG5kaXYuY2wtcGctbnVtcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICB3aWR0aDogMmVtO1xcbiAgcGFkZGluZzogNHB4IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5kaXYuY2wtcGctbnVtcyBwIHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgM3B4IDAgMDtcXG4gIGJvcmRlcjogMDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6ICM3Nzc7XFxufVxcblxcbmRpdi5jbC1wZy1hYm91dCB7XFxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5kaXYuY2wtcGctYWJvdXQgZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMjI1cHg7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYge1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5kaXYuY2wtcGctYWJvdXQgZGl2LmNsLXBnLWFib3V0LWRpdiBoMSB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5kaXYuY2wtcGctYWJvdXQgZGl2LmNsLXBnLWFib3V0LWRpdiBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yID4gZGl2IGRpdi5jbC1wZy1lZGl0b3Ige1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yID4gZGl2IGRpdi5jbC1wZy1lZGl0b3IgdGV4dGFyZWEge1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXG4gIGJvcmRlcjogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0ID4gZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQgPiBkaXYgcHJlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uLy4uL2ltZy9iYXJzLnBuZ1xcXCIpO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXG4gIGJvcmRlcjogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cIixcImRpdi5jbC1wbGF5Z3JvdW5kIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiLFwiZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIge1xcclxcbiAgZmxleDogMCAxIGF1dG87XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1lbnUtYmFja2dyb3VuZDtcXHJcXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzgwODA4MDtcXHJcXG4gIGZvbnQtc2l6ZTogJG1lbnUtZm9udC1zaXplO1xcclxcblxcclxcbiAgbGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkbWVudS1mb2N1cztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGxpIHtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgYSB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICRtZW51LWZvbnQ7XFxyXFxuICAgICAgZm9udC1zaXplOiAkbWVudS1mb250LXNpemU7XFxyXFxuICAgICAgY29sb3I6ICRtZW51LWNvbG9yO1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBhOmxpbmssIGE6dmlzaXRlZCB7XFxyXFxuICAgICAgY29sb3I6ICRtZW51LWNvbG9yO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvL1xcclxcbiAgLy8gVG9wIGxldmVsIG1lbnVcXHJcXG4gIC8vXFxyXFxuICA+IHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG4gICAgaW1nLmNoZWNrIHtcXHJcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxuICAgICAgd2lkdGg6IDE5cHg7XFxyXFxuICAgICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICAgIGNvbnRlbnQ6IHVybChcXFwiLi4vLi4vaW1nL21lbnUtY2hlY2sucG5nXFxcIik7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgPiBsaSB7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgcGFkZGluZzogMC4yNWVtIDJlbSAwLjI1ZW0gMC41ZW07XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAgIGEge1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICRtZW51LWZvbnQ7XFxyXFxuICAgICAgICBmb250LXNpemU6ICRtZW51LWZvbnQtc2l6ZTtcXHJcXG4gICAgICAgIGNvbG9yOiAkbWVudS1jb2xvcjtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgYTpsaW5rLCBhOnZpc2l0ZWQge1xcclxcbiAgICAgICAgY29sb3I6ICRtZW51LWNvbG9yO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvL1xcclxcbiAgICAvLyBEcm9wLWRvd24gbWVudVxcclxcbiAgICAvL1xcclxcbiAgICB1bCB7XFxyXFxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcclxcbiAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXHJcXG5cXHJcXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgICAgLy8gZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHRvcDogMTAwJTtcXHJcXG4gICAgICBtYXJnaW46IDFweCAwIDAgMDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1lbnUtYm9yZGVyLWNvbG9yO1xcclxcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XFxyXFxuXFxyXFxuICAgICAgPiBsaSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgICB3aWR0aDogOGVtO1xcclxcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICA+IGxpLm1lbnUtZGlzYWJsZWQge1xcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgIG9wYWNpdHk6IDAuMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdWwuY2wtcGctbWVudS1vcGVuIHtcXHJcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgei1pbmRleDogMTAwO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxyXFxuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHVsLmVkaXQtbWVudSBhIHtcXHJcXG4gICAgICB3aWR0aDogNmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHVsLm9wdGlvbi1tZW51IGEge1xcclxcbiAgICAgIHdpZHRoOiAxMWVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHVsLmZpbGUtbWVudSBhIHtcXHJcXG4gICAgICB3aWR0aDogNmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHVsLmhlbHAtbWVudSBhIHtcXHJcXG4gICAgICB3aWR0aDogNy41ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnVsLXN0YXRlLWFjdGl2ZSB7XFxyXFxuICAgICAgY29sb3I6IHJlZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBsaS5tZW51LWRpdmlkZXIge1xcclxcbiAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgIGJvcmRlcjogMCBzb2xpZCAkbWVudS1kaXZpZGVyLWNvbG9yO1xcclxcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIixcIiRtZW51LWZvbnQ6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxyXFxuJG1lbnUtZm9udC1zaXplOiAwLjkwcmVtO1xcclxcblxcclxcbiR0YWJzLWZvbnQ6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxyXFxuJHRhYnMtZm9udC1zaXplOiAwLjgwcmVtO1wiLFwiZGl2LmNsLXBsYXlncm91bmQgZGl2Lndvcmsge1xcclxcbiAgZmxleDogMSAxIGF1dG87XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5cIixcImRpdi5jbC1wbGF5Z3JvdW5kIHtcXHJcXG5cXHJcXG4gIGRpdi5jbC1wZy1vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNhMDA7XFxyXFxuICAgIG9wYWNpdHk6IDAuMDU7XFxyXFxuICAgIHotaW5kZXg6IDIwMDA7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuY2wtcGctbWFpbiB7XFxyXFxuICAgIC8vIE5vcm1hbGl6YXRpb25zXFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbmRpdi5jbC1wbGF5Z3JvdW5kLWZ1bGwge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmRpdi5jbC1wbGF5Z3JvdW5kLXdpbmRvdyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjAwcHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiB0aGluIHNvbGlkICR3aW5kb3ctYm9yZGVycztcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcclxcbiAgbWluLXdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWJlZm9yZSwgZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XFxyXFxuICBoZWlnaHQ6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJcXHJcXG5kaXYuY2wtcGxheWdyb3VuZCB7XFxyXFxuICBkaXYuY2wtcGctdGFicyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBmb250LXNpemU6ICR0YWJzLWZvbnQtc2l6ZTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogJHRhYnMtYmFja2dyb3VuZDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcblxcclxcbiAgICA+dWwge1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBwYWRkaW5nOiAzcHggMCAwIDJweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG5cXHJcXG5cXHJcXG4gICAgICA+bGkge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAkdGFicy1mb250LXNpemU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjI1ZW0gMC4yNWVtIDAuNDVlbSAwO1xcclxcbiAgICAgICAgbWluLXdpZHRoOiA2ZW07XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGFiLWJhY2tncm91bmQ7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAkdGFiLWNvcm5lci1yYWRpdXMgJHRhYi1jb3JuZXItcmFkaXVzIDAgMDtcXHJcXG4gICAgICAgIG1hcmdpbjogMXB4IDNweCAtMXB4IDA7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAgICAgei1pbmRleDogMTg7XFxyXFxuXFxyXFxuICAgICAgICBhOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICR0YWJzLWZvbnQ7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgcGFkZGluZzogMCAwLjI1ZW07XFxyXFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgY29sb3I6ICR0YWItdGV4dDtcXHJcXG4gICAgICAgICAgb3V0bGluZTogMDtcXHJcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBhOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcblxcclxcbiAgICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICA+bGkuc2VsZWN0ZWQge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogJHRhYi1zZWxlY3RlZC1iYWNrZ3JvdW5kO1xcclxcbiAgICAgICAgei1pbmRleDogMjI7XFxyXFxuXFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgY29sb3I6ICR0YWItc2VsZWN0ZWQtdGV4dDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZGl2LmNsLXBnLXZpZXdzIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICB0b3A6IDI5cHg7XFxyXFxuICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgIHotaW5kZXg6IDIwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGRpdi5jbC1wZy12aWV3IHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICByaWdodDogMDtcXHJcXG4gICAgICBib3R0b206IDA7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIHotaW5kZXg6IDIwO1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXYuY2wtcGctdmlldy5zZWxlY3RlZCB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuY2wtdGFiLW1lbnUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDE3cHgpO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMnMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcclxcblxcclxcbiAgICBkaXYge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB3aWR0aDogMTRweDtcXHJcXG4gICAgICBoZWlnaHQ6IDI3cHg7XFxyXFxuICAgICAgdG9wOiA0cHg7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkbWVudS1ib3JkZXItY29sb3I7XFxyXFxuICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1iYWNrZ3JvdW5kO1xcclxcblxcclxcbiAgICAgIGltZyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEycHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vXFxyXFxuICAgIC8vIFRhYiBkcm9wLWRvd24gbWVudVxcclxcbiAgICAvL1xcclxcbiAgICB1bCB7XFxyXFxuXFxyXFxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtZW51LWJhY2tncm91bmQ7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkbWVudS1ib3JkZXItY29sb3I7XFxyXFxuICAgICAgLy9ib3JkZXItdG9wLXdpZHRoOiAwO1xcclxcblxcclxcbiAgICAgID4gbGkge1xcclxcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgd2lkdGg6IDhlbTtcXHJcXG4gICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgPiBsaS5tZW51LWRpc2FibGVkIHtcXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICBkaXYuY2wtdGFiLW1lbnUuY2wtbWVudS1vcGVuIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcclxcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxyXFxuICB9XFxyXFxufVwiLFwiQHVzZSBcXFwic2FzczptYXRoXFxcIjtcXHJcXG5cXHJcXG5kaXYuY2wtcGxheWdyb3VuZCB7XFxyXFxuICBkaXYuY2wtcGxheWdyb3VuZC1yb290LCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0LCBkaXYuY2wtcGxheWdyb3VuZC1yaWdodCxcXHJcXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCwgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmbGV4OiAwIDEgYXV0bztcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzg4ODtcXHJcXG5cXHJcXG4gICAgZGl2LmNsLWJhciB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHJpZ2h0OiAtNXB4OyAvLyBtYXRoLmRpdigtJGRyYWctYmFyLXdpZHRoLCAyKTtcXHJcXG4gICAgICB3aWR0aDogJGRyYWctYmFyLXdpZHRoO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNsLXBsYXlncm91bmQtcmlnaHQge1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNsLXBsYXlncm91bmQtdG9wIHtcXHJcXG4gICAgZmxleDogMCAxIGF1dG87XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODtcXHJcXG5cXHJcXG4gICAgZGl2LmNsLWJhciB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBib3R0b206IC01cHg7IC8vIG1hdGguZGl2KC0kZHJhZy1iYXItd2lkdGgsIDIpO1xcclxcbiAgICAgIGhlaWdodDogJGRyYWctYmFyLXdpZHRoO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgICAgY3Vyc29yOiBucy1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XFxyXFxuICAgIC8vIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzE4NDUzYjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3Qge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJkaXYuY2wtcGctbnVtcyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmbGV4OiAwIDAgYXV0bztcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICB3aWR0aDogMmVtO1xcclxcbiAgcGFkZGluZzogNHB4IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcblxcclxcbiAgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDAgM3B4IDAgMDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgY29sb3I6ICM3Nzc7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiZGl2LmNsLXBnLWFib3V0IHtcXHJcXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxyXFxuXFxyXFxuICBmaWd1cmUge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMjVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuY2wtcGctYWJvdXQtZGl2IHtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcblxcclxcbiAgICBoMSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxufVwiLFwiZGl2LmNsLXBsYXlncm91bmQge1xcclxcbiAgZGl2LmNsLXBnLXZpZXcuZWRpdG9yIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgLy8gaW5uZXJEaXZcXHJcXG4gICAgPiBkaXYge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBib3R0b206IDA7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFxyXFxuICAgICAgZGl2LmNsLXBnLWVkaXRvciB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgICAgICAgdGV4dGFyZWEge1xcclxcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcXHJcXG5cXHJcXG4gICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXHJcXG4gICAgICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXHJcXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcXHJcXG4gICAgICAgICAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiZGl2LmNsLXBsYXlncm91bmQge1xcclxcbiAgZGl2LmNsLXBnLXZpZXcub3V0cHV0IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgPiBkaXYge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBib3R0b206IDA7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFxyXFxuICAgICAgcHJlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2ltZy9iYXJzLnBuZycpO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuXFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXHJcXG4gICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgfVxcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTg2MjYwNmYzOTMvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTIuMC4wLWI5YTVjNGEyYWEtMjE0MjUyNDZhNS56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtMWRkYzY4YjRhMS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtOTkzMzU0YTI0OC56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVzb2x2ZS11cmwtbG9hZGVyLXZpcnR1YWwtZWM3NWQyYTA5ZS8wL2NhY2hlL3Jlc29sdmUtdXJsLWxvYWRlci1ucG0tNC4wLjAtMmE5YzE4ZDg2Yi04ZTViY2Y5Nzg2LnppcC9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Nhc3MtbG9hZGVyLXZpcnR1YWwtMzg1N2Y1ZTlmMS8wL2NhY2hlL3Nhc3MtbG9hZGVyLW5wbS0xMi4xLjAtNjE4ODA4OWUxMi02OWM2NmVhMzQ4LnppcC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXS51c2VbM10hLi9fcGxheWdyb3VuZC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE0QUFBQWdBZ01BQUFCZmdLRUVBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQUZ6VWtkQ0FLN09IT2tBQUFBTVVFeFVSZi8vLytMLzkrSC85K1gvK09oNEhUTUFBQUFlU1VSQlZBalhZMkFnRXZ6Ly8vOER3NnBWcXhZd2hJYUdCbEJPRUFrQVUyTVkzdERmOWFVQUFBQUFTVVZPUks1Q1lJST1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCTUFBQUFPQ0FZQUFBRE5HQ2VKQUFBQlMybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTlM0MkxXTXhORElnTnprdU1UWXdPVEkwTENBeU1ERTNMekEzTHpFekxUQXhPakEyT2pNNUlDQWdJQ0FnSUNBaVBnb2dQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRLSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlpOCtDaUE4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnbzhQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtuaHhnN3dBQUFWZEpSRUZVT0kyVjBiRnJVMUVVQitEdlJXTnNJSk5RdTZ0MUU4eWt1RGdLQlFsSUZ3ZEhrUTcrQXdVN3VybDBGTVE1Y1hGd3NvTWd1SWhTcW9QdEpBNTFFSEdvaGVkUWZnNTVTVjlqYWVLRnc3MXdEdDg5aHlPSmVzeDYwdTgzc3JSMExsd0t2ZEFySm9HaUtLWkRxNnZ6Qm9PdW5aMXJ1SWdmR1B3WGxtNzNsSU9EVzdhM2w1WGxJbjdoTmZyWU5jdVkyZHVUWG04dVBBZ2ZRai9jRDR1aEdRUlRzZXp2eThwS0p6d01YOEt6Y0NHY0hpR0hHSFBoU2xnSVJack5WalkzaDFCWnl0cGFwK3JvVTNnYTV2OUJ4ajhQa1JkaE43d0xkOExsdE52dHJLOTN3dDN3TVF6QytXT1JHaVlVNFhyWUNsOHI5RjY0SFRiQyszQ3pxanNlcW1Hak9CT2VoTy9oVzNoWjRZOUQ2MFJvdklDallDTThDajhyOUhPNE9oVWFZNk00QkZ2aFRmZ2Qzb2F6NDl6RTl1dlJtSkJIcnovWVFJbm4xVjNQejlEWjBRNjc0VlcxN2FsZEpUbWhZRGphalZtaEpQNEN5MVpVNitkQ2czQUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUJBTUFBQUR0M2VKU0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUVsQk1WRVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURnS3htaUFBQUFCWFJTVGxNQXYvSUJEVmFRc2o4QUFBQUJZa3RIUkFDSUJSMUlBQUFBQ1hCSVdYTUFBQXNTQUFBTEVnSFMzWDc4QUFBQUhFbEVRVlFJMTJOZ3dBMFlsY0JBQU1GZ2RnRURBd1NEUERXNEFRQjJYQXhiOEVuVnFRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0cmVzdWx0ID0gZm4oKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiUGxheWdyb3VuZFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2NvdXJzZWxpYlwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb3Vyc2VsaWJcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImNvbW1vblwiLFwidmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vdmVuZG9yL2NsL3BsYXlncm91bmQvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
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
    _Action__WEBPACK_IMPORTED_MODULE_0__.Action.prototype["do"].call(this, main); // Dialog box contents

    var content = "\n<figure><img src=\"".concat(site.root, "/vendor/cl/playground/img/playground.jpg\" alt=\"Cirsim Logo\" width=\"400\" height=\"225\"></figure>\n<div class=\"cl-pg-about-div\">\n<h1>CourseLib Playground</h1>\n<p>Version: ").concat(_package_json__WEBPACK_IMPORTED_MODULE_2__.version, "</p>\n<p>Written by: Charles B. Owen</p></div>");
    var dialog = new dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"]({
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

    _Action__WEBPACK_IMPORTED_MODULE_0__.Action.prototype["do"].call(this, main); // Get the requisite tab contents

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
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./.yarn/cache/@babel-runtime-npm-7.18.9-28ca6b5f61-36dd736bab.zip/node_modules/@babel/runtime/helpers/esm/typeof.js");


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
  return typeof val === 'string' || !!val && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(val) === 'object' && Object.prototype.toString.call(val) === '[object String]';
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
/* harmony import */ var resizer_cl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resizer-cl */ "./.yarn/cache/resizer-cl-npm-2.4.4-ea7161f3fd-1cc98e9ff5.zip/node_modules/resizer-cl/index.js");
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

/***/ "./.yarn/__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-28c0e7b474/0/cache/sass-loader-npm-13.0.2-ca68afd73d-6306712cc7.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/playground/_playground.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-28c0e7b474/0/cache/sass-loader-npm-13.0.2-ca68afd73d-6306712cc7.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/playground/_playground.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../.yarn/__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./.yarn/__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../.yarn/__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../.yarn/__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/getUrl.js */ "./.yarn/__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/menu-check.png */ "./vendor/cl/playground/img/menu-check.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bars.png */ "./vendor/cl/playground/img/bars.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.cl-playground div.toast {\n  position: absolute;\n  bottom: 0;\n  visibility: hidden;\n  transform: translateY(2.3em);\n  z-index: 400;\n  transition: all 0.4s ease-in-out 0s, visibility 0s linear 0.4s, z-index 0s linear 0.01s;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1.1em;\n  left: calc(50% - 30em/2);\n  width: 30em;\n  background-color: #151515;\n  color: white;\n  text-align: center;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding: 0.5em;\n}\ndiv.cl-playground div.toast.toast-active {\n  visibility: visible;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.4s;\n  z-index: 400;\n}\n\ndiv.cl-playground {\n  display: none;\n}\n\ndiv.cl-playground nav.cl-pg-menubar {\n  flex: 0 1 auto;\n  position: relative;\n  z-index: 100;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background-color: #f0f3f0;\n  border-bottom: thin solid #808080;\n  font-size: 0.9rem;\n}\ndiv.cl-playground nav.cl-pg-menubar li:hover {\n  background: #00796B;\n}\ndiv.cl-playground nav.cl-pg-menubar li {\n  user-select: none;\n  cursor: pointer;\n}\ndiv.cl-playground nav.cl-pg-menubar li a {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\ndiv.cl-playground nav.cl-pg-menubar li a:link, div.cl-playground nav.cl-pg-menubar li a:visited {\n  color: black;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul {\n  list-style-type: none;\n  margin: 0;\n  border: 0;\n  padding: 0;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul img.check {\n  vertical-align: baseline;\n  width: 19px;\n  height: 16px;\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\ndiv.cl-playground nav.cl-pg-menubar > ul > li {\n  display: inline-block;\n  margin: 0;\n  border: 0;\n  padding: 0.25em 2em 0.25em 0.5em;\n  position: relative;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul > li a {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul > li a:link, div.cl-playground nav.cl-pg-menubar > ul > li a:visited {\n  color: black;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul {\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n  list-style-type: none;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: 100%;\n  margin: 1px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n  border-top-width: 0;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li.menu-disabled a {\n  opacity: 0.3;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.cl-pg-menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.edit-menu a {\n  width: 6em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.option-menu a {\n  width: 11em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.file-menu a {\n  width: 6em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.help-menu a {\n  width: 7.5em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul .ul-state-active {\n  color: red;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul li.menu-divider {\n  height: 1px;\n  border: 0 solid black;\n  border-top-width: 1px;\n}\n\ndiv.cl-playground div.work {\n  flex: 1 1 auto;\n  position: relative;\n  width: 100%;\n  background: black;\n}\n\ndiv.cl-playground div.cl-pg-overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #a00;\n  opacity: 0.05;\n  z-index: 2000;\n  display: none;\n}\ndiv.cl-playground div.cl-pg-main {\n  line-height: normal;\n  font-size: 1rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\ndiv.cl-playground-full {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: white;\n}\n\ndiv.cl-playground-window {\n  position: relative;\n  width: 100%;\n  height: 600px;\n  margin: 0;\n  padding: 0;\n  border: thin solid #aaaaaa;\n  border-bottom: none;\n  background: white;\n  min-height: 100px;\n  min-width: 400px;\n}\n\ndiv.cl-playground-gap-before, div.cl-playground-gap-after {\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 1px;\n}\n\ndiv.cl-playground-gap-after {\n  height: 1em;\n}\n\ndiv.cl-playground div.cl-pg-tabs {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  font-size: 0.8rem;\n  padding: 0;\n  background: #ddd;\n  border: 0;\n}\ndiv.cl-playground div.cl-pg-tabs > ul {\n  margin: 0;\n  padding: 3px 0 0 2px;\n  background: transparent;\n  border: 0;\n  list-style: none;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li {\n  position: relative;\n  display: inline-block;\n  font-size: 0.8rem;\n  padding: 0.25em 0.25em 0.45em 0;\n  min-width: 6em;\n  text-align: center;\n  cursor: pointer;\n  background: #ccc;\n  border: 1px solid black;\n  border-bottom: none;\n  border-radius: 5px 5px 0 0;\n  margin: 1px 3px -1px 0;\n  white-space: nowrap;\n  z-index: 18;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li a:first-child {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  display: inline-block;\n  padding: 0 0.25em;\n  text-decoration: none;\n  color: black;\n  outline: 0;\n  user-select: none;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) {\n  float: right;\n  display: inline-block;\n  margin-top: -2px;\n  padding: 0;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) img {\n  width: 12px;\n  height: auto;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li.selected {\n  background: white;\n  z-index: 22;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li.selected a {\n  color: black;\n}\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-views {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n}\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-view {\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 20;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-view.selected {\n  display: block;\n  border-top: 1px solid black;\n}\ndiv.cl-playground div.cl-tab-menu {\n  position: absolute;\n  left: calc(100% - 17px);\n  top: 0;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n}\ndiv.cl-playground div.cl-tab-menu div {\n  position: absolute;\n  width: 14px;\n  height: 27px;\n  top: 4px;\n  left: 0;\n  border: 1px solid #808080;\n  border-bottom-width: 0;\n  background-color: #f0f3f0;\n}\ndiv.cl-playground div.cl-tab-menu div img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 12px;\n  height: auto;\n}\ndiv.cl-playground div.cl-tab-menu ul {\n  list-style-type: none;\n  overflow: hidden;\n  margin: 30px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n}\ndiv.cl-playground div.cl-tab-menu ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\ndiv.cl-playground div.cl-tab-menu ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\ndiv.cl-playground div.cl-tab-menu ul > li.menu-disabled a {\n  opacity: 0.3;\n}\ndiv.cl-playground div.cl-tab-menu.cl-menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\n\ndiv.cl-playground div.cl-playground-root, div.cl-playground div.cl-playground-left, div.cl-playground div.cl-playground-right,\ndiv.cl-playground div.cl-playground-top, div.cl-playground div.cl-playground-bottom {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  background: white;\n}\ndiv.cl-playground div.cl-playground-left {\n  position: relative;\n  flex: 0 1 auto;\n  border-right: 1px solid #888;\n}\ndiv.cl-playground div.cl-playground-left div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  top: 0;\n  height: 100%;\n  right: -5px;\n  width: 10px;\n  background: transparent;\n  z-index: 100;\n  cursor: ew-resize;\n}\ndiv.cl-playground div.cl-playground-top {\n  flex: 0 1 auto;\n  width: 100%;\n  border-bottom: 1px solid #888;\n}\ndiv.cl-playground div.cl-playground-top div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  bottom: -5px;\n  height: 10px;\n  width: 100%;\n  background: transparent;\n  z-index: 2;\n  cursor: ns-resize;\n}\ndiv.cl-playground div.cl-playground-bottom {\n  width: 100%;\n  height: auto;\n}\ndiv.cl-playground div.cl-playground-root {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\ndiv.cl-pg-nums {\n  display: inline-block;\n  flex: 0 0 auto;\n  background: #eee;\n  width: 2em;\n  padding: 4px 0;\n  overflow: hidden;\n  margin: 0;\n}\ndiv.cl-pg-nums p {\n  font-size: 0.8em;\n  line-height: 16px;\n  margin: 0;\n  padding: 0 3px 0 0;\n  border: 0;\n  text-align: right;\n  color: #777;\n}\n\ndiv.cl-pg-about {\n  width: auto !important;\n}\ndiv.cl-pg-about figure {\n  margin: 0;\n  width: 400px;\n  height: 225px;\n  background: black;\n}\ndiv.cl-pg-about div.cl-pg-about-div {\n  padding: 1em;\n}\ndiv.cl-pg-about div.cl-pg-about-div h1 {\n  font-size: 1.5em;\n  text-align: center;\n}\ndiv.cl-pg-about div.cl-pg-about-div p {\n  text-align: center;\n}\n\ndiv.cl-playground div.cl-pg-view.editor {\n  overflow: hidden;\n}\ndiv.cl-playground div.cl-pg-view.editor > div {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\ndiv.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor {\n  margin: 0;\n  display: block;\n  flex: 1 1 auto;\n  height: 100%;\n}\ndiv.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor textarea {\n  line-height: 16px;\n  margin: 0;\n  padding: 4px 0 0 3px;\n  border: 0;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  font-size: 1em;\n  font-family: monospace, monospace;\n  white-space: pre;\n  overflow-wrap: normal;\n}\n\ndiv.cl-playground div.cl-pg-view.output {\n  overflow: hidden;\n}\ndiv.cl-playground div.cl-pg-view.output > div {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\ndiv.cl-playground div.cl-pg-view.output > div pre {\n  display: block;\n  flex: 1 1 auto;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  line-height: 16px;\n  margin: 0;\n  padding: 4px 0 0 3px;\n  border: 0;\n  overflow: auto;\n  height: 100%;\n}", "",{"version":3,"sources":["webpack://./vendor/cl/playground/sass/partials/_toast.scss","webpack://./vendor/cl/playground/sass/modules/_variables.scss","webpack://./vendor/cl/playground/sass/modules/_colors.scss","webpack://./vendor/cl/playground/_playground.scss","webpack://./vendor/cl/playground/sass/partials/_playground.scss","webpack://./vendor/cl/playground/sass/partials/_menu.scss","webpack://./vendor/cl/playground/sass/modules/_fonts.scss","webpack://./vendor/cl/playground/sass/partials/_work.scss","webpack://./vendor/cl/playground/sass/partials/_main.scss","webpack://./vendor/cl/playground/sass/partials/_tabs.scss","webpack://./vendor/cl/playground/sass/partials/_pane.scss","webpack://./vendor/cl/playground/sass/partials/_line_numbers.scss","webpack://./vendor/cl/playground/sass/partials/_about.scss","webpack://./vendor/cl/playground/sass/partials/_tab_editor.scss","webpack://./vendor/cl/playground/sass/partials/_tab_output.scss"],"names":[],"mappings":"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","sourcesContent":["div.cl-playground\n{\n  $toast-transition-time: 0.4s;\n\n  div.toast {\n    position: absolute;\n    bottom: 0;\n\n    visibility: hidden;\n    transform: translateY(2.3em);\n    z-index: 400;\n    transition: all $toast-transition-time ease-in-out 0s, visibility 0s linear $toast-transition-time, z-index 0s linear 0.01s;\n\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: $toast-font-size;\n    left: calc(50% - #{$toast-width}/2);\n    width: $toast-width;\n    background-color: $toast-background;\n    color: $toast-text;\n    text-align: center;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    padding: 0.5em;\n  }\n\n  div.toast.toast-active {\n    visibility: visible;\n    transform: translateY(0%);\n    transition-delay: 0s, 0s, $toast-transition-time;\n    z-index: 400;\n\n  }\n}","$toast-font-size: 1.1em;\n$toast-width: 30em;\n\n$drag-bar-width: 10px;\n\n$tab-corner-radius: 5px;\n","// The major colors\n// We have a primary color, two secondary colors, and a complementary color.\n$dark-primary: #00796B;\n$primary: #009688;\n$light-primary: #B2DFDB;\n$accent: #607D8B;\n$primary-text: #212121;\n$divider-color: #BDBDBD;\n$secondary-text: #606060;\n\n$comp: #c41425;\n$window-borders: #aaaaaa;\n\n\n\n$tabs-background: #ddd;\n$tab-background: #ccc;\n$tab-text: black;\n$tab-selected-background: white;\n$tab-selected-text: black;\n\n$menu-focus: $dark-primary;\n$menu-background: #f0f3f0;\n$menu-color: black;\n$menu-divider-color: black;\n$menu-border-color: #808080;\n\n$resizer: $dark-primary;\n\n$toast-background: #151515;\n$toast-text: white;","div.cl-playground div.toast {\n  position: absolute;\n  bottom: 0;\n  visibility: hidden;\n  transform: translateY(2.3em);\n  z-index: 400;\n  transition: all 0.4s ease-in-out 0s, visibility 0s linear 0.4s, z-index 0s linear 0.01s;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1.1em;\n  left: calc(50% - 30em/2);\n  width: 30em;\n  background-color: #151515;\n  color: white;\n  text-align: center;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding: 0.5em;\n}\ndiv.cl-playground div.toast.toast-active {\n  visibility: visible;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.4s;\n  z-index: 400;\n}\n\ndiv.cl-playground {\n  display: none;\n}\n\ndiv.cl-playground nav.cl-pg-menubar {\n  flex: 0 1 auto;\n  position: relative;\n  z-index: 100;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background-color: #f0f3f0;\n  border-bottom: thin solid #808080;\n  font-size: 0.9rem;\n}\ndiv.cl-playground nav.cl-pg-menubar li:hover {\n  background: #00796B;\n}\ndiv.cl-playground nav.cl-pg-menubar li {\n  user-select: none;\n  cursor: pointer;\n}\ndiv.cl-playground nav.cl-pg-menubar li a {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\ndiv.cl-playground nav.cl-pg-menubar li a:link, div.cl-playground nav.cl-pg-menubar li a:visited {\n  color: black;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul {\n  list-style-type: none;\n  margin: 0;\n  border: 0;\n  padding: 0;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul img.check {\n  vertical-align: baseline;\n  width: 19px;\n  height: 16px;\n  content: url(\"../../img/menu-check.png\");\n}\ndiv.cl-playground nav.cl-pg-menubar > ul > li {\n  display: inline-block;\n  margin: 0;\n  border: 0;\n  padding: 0.25em 2em 0.25em 0.5em;\n  position: relative;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul > li a {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul > li a:link, div.cl-playground nav.cl-pg-menubar > ul > li a:visited {\n  color: black;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul {\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n  list-style-type: none;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: 100%;\n  margin: 1px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n  border-top-width: 0;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li.menu-disabled a {\n  opacity: 0.3;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.cl-pg-menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.edit-menu a {\n  width: 6em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.option-menu a {\n  width: 11em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.file-menu a {\n  width: 6em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.help-menu a {\n  width: 7.5em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul .ul-state-active {\n  color: red;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul li.menu-divider {\n  height: 1px;\n  border: 0 solid black;\n  border-top-width: 1px;\n}\n\ndiv.cl-playground div.work {\n  flex: 1 1 auto;\n  position: relative;\n  width: 100%;\n  background: black;\n}\n\ndiv.cl-playground div.cl-pg-overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #a00;\n  opacity: 0.05;\n  z-index: 2000;\n  display: none;\n}\ndiv.cl-playground div.cl-pg-main {\n  line-height: normal;\n  font-size: 1rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\ndiv.cl-playground-full {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: white;\n}\n\ndiv.cl-playground-window {\n  position: relative;\n  width: 100%;\n  height: 600px;\n  margin: 0;\n  padding: 0;\n  border: thin solid #aaaaaa;\n  border-bottom: none;\n  background: white;\n  min-height: 100px;\n  min-width: 400px;\n}\n\ndiv.cl-playground-gap-before, div.cl-playground-gap-after {\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 1px;\n}\n\ndiv.cl-playground-gap-after {\n  height: 1em;\n}\n\ndiv.cl-playground div.cl-pg-tabs {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  font-size: 0.8rem;\n  padding: 0;\n  background: #ddd;\n  border: 0;\n}\ndiv.cl-playground div.cl-pg-tabs > ul {\n  margin: 0;\n  padding: 3px 0 0 2px;\n  background: transparent;\n  border: 0;\n  list-style: none;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li {\n  position: relative;\n  display: inline-block;\n  font-size: 0.8rem;\n  padding: 0.25em 0.25em 0.45em 0;\n  min-width: 6em;\n  text-align: center;\n  cursor: pointer;\n  background: #ccc;\n  border: 1px solid black;\n  border-bottom: none;\n  border-radius: 5px 5px 0 0;\n  margin: 1px 3px -1px 0;\n  white-space: nowrap;\n  z-index: 18;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li a:first-child {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  display: inline-block;\n  padding: 0 0.25em;\n  text-decoration: none;\n  color: black;\n  outline: 0;\n  user-select: none;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) {\n  float: right;\n  display: inline-block;\n  margin-top: -2px;\n  padding: 0;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) img {\n  width: 12px;\n  height: auto;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li.selected {\n  background: white;\n  z-index: 22;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li.selected a {\n  color: black;\n}\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-views {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n}\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-view {\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 20;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-view.selected {\n  display: block;\n  border-top: 1px solid black;\n}\ndiv.cl-playground div.cl-tab-menu {\n  position: absolute;\n  left: calc(100% - 17px);\n  top: 0;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n}\ndiv.cl-playground div.cl-tab-menu div {\n  position: absolute;\n  width: 14px;\n  height: 27px;\n  top: 4px;\n  left: 0;\n  border: 1px solid #808080;\n  border-bottom-width: 0;\n  background-color: #f0f3f0;\n}\ndiv.cl-playground div.cl-tab-menu div img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 12px;\n  height: auto;\n}\ndiv.cl-playground div.cl-tab-menu ul {\n  list-style-type: none;\n  overflow: hidden;\n  margin: 30px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n}\ndiv.cl-playground div.cl-tab-menu ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\ndiv.cl-playground div.cl-tab-menu ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\ndiv.cl-playground div.cl-tab-menu ul > li.menu-disabled a {\n  opacity: 0.3;\n}\ndiv.cl-playground div.cl-tab-menu.cl-menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\n\ndiv.cl-playground div.cl-playground-root, div.cl-playground div.cl-playground-left, div.cl-playground div.cl-playground-right,\ndiv.cl-playground div.cl-playground-top, div.cl-playground div.cl-playground-bottom {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  background: white;\n}\ndiv.cl-playground div.cl-playground-left {\n  position: relative;\n  flex: 0 1 auto;\n  border-right: 1px solid #888;\n}\ndiv.cl-playground div.cl-playground-left div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  top: 0;\n  height: 100%;\n  right: -5px;\n  width: 10px;\n  background: transparent;\n  z-index: 100;\n  cursor: ew-resize;\n}\ndiv.cl-playground div.cl-playground-top {\n  flex: 0 1 auto;\n  width: 100%;\n  border-bottom: 1px solid #888;\n}\ndiv.cl-playground div.cl-playground-top div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  bottom: -5px;\n  height: 10px;\n  width: 100%;\n  background: transparent;\n  z-index: 2;\n  cursor: ns-resize;\n}\ndiv.cl-playground div.cl-playground-bottom {\n  width: 100%;\n  height: auto;\n}\ndiv.cl-playground div.cl-playground-root {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\ndiv.cl-pg-nums {\n  display: inline-block;\n  flex: 0 0 auto;\n  background: #eee;\n  width: 2em;\n  padding: 4px 0;\n  overflow: hidden;\n  margin: 0;\n}\ndiv.cl-pg-nums p {\n  font-size: 0.8em;\n  line-height: 16px;\n  margin: 0;\n  padding: 0 3px 0 0;\n  border: 0;\n  text-align: right;\n  color: #777;\n}\n\ndiv.cl-pg-about {\n  width: auto !important;\n}\ndiv.cl-pg-about figure {\n  margin: 0;\n  width: 400px;\n  height: 225px;\n  background: black;\n}\ndiv.cl-pg-about div.cl-pg-about-div {\n  padding: 1em;\n}\ndiv.cl-pg-about div.cl-pg-about-div h1 {\n  font-size: 1.5em;\n  text-align: center;\n}\ndiv.cl-pg-about div.cl-pg-about-div p {\n  text-align: center;\n}\n\ndiv.cl-playground div.cl-pg-view.editor {\n  overflow: hidden;\n}\ndiv.cl-playground div.cl-pg-view.editor > div {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\ndiv.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor {\n  margin: 0;\n  display: block;\n  flex: 1 1 auto;\n  height: 100%;\n}\ndiv.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor textarea {\n  line-height: 16px;\n  margin: 0;\n  padding: 4px 0 0 3px;\n  border: 0;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  font-size: 1em;\n  font-family: monospace, monospace;\n  white-space: pre;\n  overflow-wrap: normal;\n}\n\ndiv.cl-playground div.cl-pg-view.output {\n  overflow: hidden;\n}\ndiv.cl-playground div.cl-pg-view.output > div {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\ndiv.cl-playground div.cl-pg-view.output > div pre {\n  display: block;\n  flex: 1 1 auto;\n  background: url(\"../../img/bars.png\");\n  line-height: 16px;\n  margin: 0;\n  padding: 4px 0 0 3px;\n  border: 0;\n  overflow: auto;\n  height: 100%;\n}","div.cl-playground {\n  display: none;\n}\n","div.cl-playground nav.cl-pg-menubar {\n  flex: 0 1 auto;\n  position: relative;\n  z-index: 100;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background-color: $menu-background;\n  border-bottom: thin solid #808080;\n  font-size: $menu-font-size;\n\n  li:hover {\n    background: $menu-focus;\n  }\n\n  li {\n    user-select: none;\n    cursor: pointer;\n\n    a {\n      font-family: $menu-font;\n      font-size: $menu-font-size;\n      color: $menu-color;\n      text-decoration: none;\n    }\n\n    a:link, a:visited {\n      color: $menu-color;\n    }\n  }\n\n  //\n  // Top level menu\n  //\n  > ul {\n    list-style-type: none;\n    margin: 0;\n    border: 0;\n    padding: 0;\n\n    img.check {\n      vertical-align: baseline;\n      width: 19px;\n      height: 16px;\n      content: url(\"../../img/menu-check.png\");\n    }\n\n    > li {\n      display: inline-block;\n      margin: 0;\n      border: 0;\n      padding: 0.25em 2em 0.25em 0.5em;\n      position: relative;\n\n      a {\n        font-family: $menu-font;\n        font-size: $menu-font-size;\n        color: $menu-color;\n        text-decoration: none;\n      }\n\n      a:link, a:visited {\n        color: $menu-color;\n      }\n    }\n\n    //\n    // Drop-down menu\n    //\n    ul {\n      visibility: hidden;\n      opacity: 0;\n      transform: translateY(-2em);\n      z-index: -1;\n      transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n\n      list-style-type: none;\n      // display: none;\n      position: absolute;\n      overflow: hidden;\n      left: 0;\n      top: 100%;\n      margin: 1px 0 0 0;\n      background-color: $menu-background;\n      padding: 0;\n      border: 1px solid $menu-border-color;\n      border-top-width: 0;\n\n      > li {\n        padding: 0 5px;\n        margin: 0;\n        overflow: hidden;\n\n        a {\n          display: inline-block;\n          width: 8em;\n          padding-top: 5px;\n          padding-bottom: 5px;\n        }\n      }\n\n      > li.menu-disabled {\n        a {\n          opacity: 0.3;\n        }\n      }\n    }\n\n    ul.cl-pg-menu-open {\n      visibility: visible;\n      opacity: 1;\n      z-index: 100;\n      transform: translateY(0%);\n      transition-delay: 0s, 0s, 0.2s;\n    }\n\n    ul.edit-menu a {\n      width: 6em;\n    }\n\n    ul.option-menu a {\n      width: 11em;\n    }\n\n    ul.file-menu a {\n      width: 6em;\n    }\n\n    ul.help-menu a {\n      width: 7.5em;\n    }\n\n    .ul-state-active {\n      color: red;\n    }\n\n    li.menu-divider {\n      height: 1px;\n      border: 0 solid $menu-divider-color;\n      border-top-width: 1px;\n    }\n  }\n}\n\n","$menu-font: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n$menu-font-size: 0.90rem;\n\n$tabs-font: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n$tabs-font-size: 0.80rem;","div.cl-playground div.work {\n  flex: 1 1 auto;\n  position: relative;\n  width: 100%;\n  background: black;\n}\n\n","div.cl-playground {\n\n  div.cl-pg-overlay {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background: #a00;\n    opacity: 0.05;\n    z-index: 2000;\n    display: none;\n  }\n\n  div.cl-pg-main {\n    // Normalizations\n    line-height: normal;\n    font-size: 1rem;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n\ndiv.cl-playground-full {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: white;\n}\n\ndiv.cl-playground-window {\n  position: relative;\n  width: 100%;\n  height: 600px;\n  margin: 0;\n  padding: 0;\n  border: thin solid $window-borders;\n  border-bottom: none;\n  background: white;\n  min-height: 100px;\n  min-width: 400px;\n}\n\ndiv.cl-playground-gap-before, div.cl-playground-gap-after {\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 1px;\n}\n\ndiv.cl-playground-gap-after {\n  height: 1em;\n}\n\n","\ndiv.cl-playground {\n  div.cl-pg-tabs {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    font-size: $tabs-font-size;\n\n    padding: 0;\n    background: $tabs-background;\n    border: 0;\n\n    >ul {\n      margin: 0;\n      padding: 3px 0 0 2px;\n      background: transparent;\n      border: 0;\n      list-style: none;\n\n\n      >li {\n        position: relative;\n        display: inline-block;\n        font-size: $tabs-font-size;\n        padding: 0.25em 0.25em 0.45em 0;\n        min-width: 6em;\n        text-align: center;\n        cursor: pointer;\n        background: $tab-background;\n        border: 1px solid black;\n        border-bottom: none;\n        border-radius: $tab-corner-radius $tab-corner-radius 0 0;\n        margin: 1px 3px -1px 0;\n        white-space: nowrap;\n        z-index: 18;\n\n        a:first-child {\n          font-family: $tabs-font;\n          display: inline-block;\n          padding: 0 0.25em;\n          text-decoration: none;\n          color: $tab-text;\n          outline: 0;\n          user-select: none;\n        }\n\n        a:nth-child(2) {\n          float: right;\n          display: inline-block;\n          margin-top: -2px;\n          padding: 0;\n\n          img {\n            width: 12px;\n            height: auto;\n          }\n        }\n      }\n\n      >li.selected {\n        background: $tab-selected-background;\n        z-index: 22;\n\n        a {\n          color: $tab-selected-text;\n        }\n      }\n    }\n\n    div.cl-pg-views {\n      position: absolute;\n      left: 0;\n      top: 29px;\n      right: 0;\n      bottom: 0;\n      z-index: 20;\n    }\n\n    div.cl-pg-view {\n      position: absolute;\n      display: none;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      height: 100%;\n      width: 100%;\n      z-index: 20;\n      margin: 0;\n      padding: 0;\n      border: 0;\n    }\n\n    div.cl-pg-view.selected {\n      display: block;\n      border-top: 1px solid black;\n    }\n  }\n\n  div.cl-tab-menu {\n    position: absolute;\n    left: calc(100% - 17px);\n    top: 0;\n    visibility: hidden;\n    opacity: 0;\n    transform: translateY(-2em);\n    z-index: -1;\n    transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n\n    div {\n      position: absolute;\n      width: 14px;\n      height: 27px;\n      top: 4px;\n      left: 0;\n      border: 1px solid $menu-border-color;\n      border-bottom-width: 0;\n      background-color: $menu-background;\n\n      img {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 12px;\n        height: auto;\n      }\n    }\n\n    //\n    // Tab drop-down menu\n    //\n    ul {\n\n      list-style-type: none;\n      overflow: hidden;\n\n      margin: 30px 0 0 0;\n      background-color: $menu-background;\n      padding: 0;\n      border: 1px solid $menu-border-color;\n      //border-top-width: 0;\n\n      > li {\n        padding: 0 5px;\n        margin: 0;\n        overflow: hidden;\n\n        a {\n          display: inline-block;\n          width: 8em;\n          padding-top: 5px;\n          padding-bottom: 5px;\n        }\n      }\n\n      > li.menu-disabled {\n        a {\n          opacity: 0.3;\n        }\n      }\n    }\n  }\n\n\n\n  div.cl-tab-menu.cl-menu-open {\n    visibility: visible;\n    opacity: 1;\n    z-index: 100;\n    transform: translateY(0%);\n    transition-delay: 0s, 0s, 0.2s;\n  }\n}","@use \"sass:math\";\n\ndiv.cl-playground {\n  div.cl-playground-root, div.cl-playground-left, div.cl-playground-right,\n  div.cl-playground-top, div.cl-playground-bottom {\n    position: relative;\n    display: flex;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    background: white;\n  }\n\n  div.cl-playground-left {\n    position: relative;\n    flex: 0 1 auto;\n    border-right: 1px solid #888;\n\n    div.cl-bar {\n      position: absolute;\n      margin: 0;\n      border: 0;\n      padding: 0;\n      top: 0;\n      height: 100%;\n      right: -5px; // math.div(-$drag-bar-width, 2);\n      width: $drag-bar-width;\n      background: transparent;\n      z-index: 100;\n      cursor: ew-resize;\n    }\n  }\n\n  div.cl-playground-right {\n  }\n\n  div.cl-playground-top {\n    flex: 0 1 auto;\n    width: 100%;\n    border-bottom: 1px solid #888;\n\n    div.cl-bar {\n      position: absolute;\n      margin: 0;\n      border: 0;\n      padding: 0;\n      bottom: -5px; // math.div(-$drag-bar-width, 2);\n      height: $drag-bar-width;\n      width: 100%;\n      background: transparent;\n      z-index: 2;\n      cursor: ns-resize;\n    }\n  }\n\n  div.cl-playground-bottom {\n    // border-left: 5px solid #18453b;\n    width: 100%;\n    height: auto;\n  }\n\n  div.cl-playground-root {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n}\n","div.cl-pg-nums {\n  display: inline-block;\n  flex: 0 0 auto;\n\n  background: #eee;\n  width: 2em;\n  padding: 4px 0;\n  overflow: hidden;\n  margin: 0;\n\n  p {\n    font-size: 0.8em;\n    line-height: 16px;\n    margin: 0;\n    padding: 0 3px 0 0;\n    border: 0;\n    text-align: right;\n    color: #777;\n  }\n}\n","div.cl-pg-about {\n  width: auto !important;\n\n  figure {\n    margin: 0;\n    width: 400px;\n    height: 225px;\n    background: black;\n  }\n\n  div.cl-pg-about-div {\n    padding: 1em;\n\n    h1 {\n      font-size: 1.5em;\n      text-align: center;\n    }\n\n    p {\n      text-align: center;\n    }\n  }\n\n}","div.cl-playground {\n  div.cl-pg-view.editor {\n    overflow: hidden;\n\n    // innerDiv\n    > div {\n      position: absolute;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      width: 100%;\n      background: white;\n      padding: 0;\n      display: flex;\n      flex-direction: row;\n\n      div.cl-pg-editor {\n        margin: 0;\n        display: block;\n        flex: 1 1 auto;\n        height: 100%;\n\n        textarea {\n          line-height: 16px;\n\n          margin: 0;\n          padding: 4px 0 0 3px;\n          border: 0;\n          overflow: auto;\n          width: 100%;\n          height: 100%;\n\n          min-height: 100%;\n\n          font-size: 1em;\n          font-family: monospace, monospace;\n          white-space: pre;\n          overflow-wrap: normal\n        }\n      }\n\n    }\n  }\n}\n","div.cl-playground {\n  div.cl-pg-view.output {\n    overflow: hidden;\n\n    > div {\n      position: absolute;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      width: 100%;\n      background: white;\n      padding: 0;\n      display: flex;\n      flex-direction: row;\n\n      pre {\n        display: block;\n        flex: 1 1 auto;\n        background: url('../../img/bars.png');\n        line-height: 16px;\n\n        margin: 0;\n        padding: 4px 0 0 3px;\n        border: 0;\n        overflow: auto;\n        height: 100%;\n      }\n\n\n    }\n\n\n\n\n\n  }\n\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_28c0e7b474_0_cache_sass_loader_npm_13_0_2_ca68afd73d_6306712cc7_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../.yarn/__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js!../../../.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!../../../.yarn/__virtual__/sass-loader-virtual-28c0e7b474/0/cache/sass-loader-npm-13.0.2-ca68afd73d-6306712cc7.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./_playground.scss */ "./.yarn/__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-28c0e7b474/0/cache/sass-loader-npm-13.0.2-ca68afd73d-6306712cc7.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/playground/_playground.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _yarn_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_28c0e7b474_0_cache_sass_loader_npm_13_0_2_ca68afd73d_6306712cc7_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_28c0e7b474_0_cache_sass_loader_npm_13_0_2_ca68afd73d_6306712cc7_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_28c0e7b474_0_cache_sass_loader_npm_13_0_2_ca68afd73d_6306712cc7_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _yarn_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_28c0e7b474_0_cache_sass_loader_npm_13_0_2_ca68afd73d_6306712cc7_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

module.exports = JSON.parse('{"name":"playground-cl","version":"2.0.0","description":"CourseLib Playground IDE","main":"index.js","keywords":["Education","Course Web Sites","Karnaugh Maps"],"author":"Charles B. Owen","license":"MIT","dependencies":{"@babel/runtime":"^7.18.9","course-cl":">=0.0.1","dialog-cl":"^1.0.6","resizer-cl":"~2.4.4"}}');

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
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcourselib"] = self["webpackChunkcourselib"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sYUFBYSxZQUFZLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLDhDQUE4QyxpQ0FBaUMsaUJBQWlCLHlCQUF5QixnQkFBZ0IsMkJBQTJCLG1DQUFtQyxtQkFBbUIsa0lBQWtJLHNFQUFzRSxrQ0FBa0MseUJBQXlCLGFBQWEsSUFBSSwwQkFBMEIsMENBQTBDLHlCQUF5Qix5QkFBeUIsbUNBQW1DLG9DQUFvQyxxQkFBcUIsS0FBSyw4QkFBOEIsMEJBQTBCLGdDQUFnQyx1REFBdUQsbUJBQW1CLE9BQU8sR0FBRywyQkFBMkIscUJBQXFCLDBCQUEwQiw0QkFBNEIsK0hBQStILG9CQUFvQiwwQkFBMEIsbUJBQW1CLHlCQUF5QiwwQkFBMEIsMkJBQTJCLG1CQUFtQiwyQkFBMkIsK0JBQStCLHdCQUF3QixtQkFBbUIsa0NBQWtDLDRCQUE0QiwrQkFBK0IsNEJBQTRCLHFCQUFxQiw2QkFBNkIsOEJBQThCLDRCQUE0QiwrQkFBK0IscUJBQXFCLGdDQUFnQyx1QkFBdUIsY0FBYyx1QkFBdUIsaUNBQWlDLGlCQUFpQiw0RkFBNEYsa0VBQWtFLHFCQUFxQiw2QkFBNkIsZ0JBQWdCLDhCQUE4QixpQkFBaUIsdUJBQXVCLGlDQUFpQyxrQ0FBa0MsbUJBQW1CLEdBQUcsNENBQTRDLHdCQUF3Qiw4QkFBOEIsbUNBQW1DLGlCQUFpQixHQUFHLHVCQUF1QixrQkFBa0IsR0FBRyx5Q0FBeUMsbUJBQW1CLHVCQUF1QixpQkFBaUIsY0FBYyxjQUFjLGVBQWUsOEJBQThCLHNDQUFzQyxzQkFBc0IsR0FBRyxnREFBZ0Qsd0JBQXdCLEdBQUcsMENBQTBDLHNCQUFzQixvQkFBb0IsR0FBRyw0Q0FBNEMsa0VBQWtFLHNCQUFzQixpQkFBaUIsMEJBQTBCLEdBQUcsbUdBQW1HLGlCQUFpQixHQUFHLDRDQUE0QywwQkFBMEIsY0FBYyxjQUFjLGVBQWUsR0FBRyxzREFBc0QsNkJBQTZCLGdCQUFnQixpQkFBaUIsK0NBQStDLEdBQUcsaURBQWlELDBCQUEwQixjQUFjLGNBQWMscUNBQXFDLHVCQUF1QixHQUFHLG1EQUFtRCxrRUFBa0Usc0JBQXNCLGlCQUFpQiwwQkFBMEIsR0FBRyxpSEFBaUgsaUJBQWlCLEdBQUcsK0NBQStDLHVCQUF1QixlQUFlLGdDQUFnQyxnQkFBZ0IsNEZBQTRGLDBCQUEwQix1QkFBdUIscUJBQXFCLFlBQVksY0FBYyxzQkFBc0IsOEJBQThCLGVBQWUsOEJBQThCLHdCQUF3QixHQUFHLG9EQUFvRCxtQkFBbUIsY0FBYyxxQkFBcUIsR0FBRyxzREFBc0QsMEJBQTBCLGVBQWUscUJBQXFCLHdCQUF3QixHQUFHLG9FQUFvRSxpQkFBaUIsR0FBRywrREFBK0Qsd0JBQXdCLGVBQWUsaUJBQWlCLDhCQUE4QixtQ0FBbUMsR0FBRywyREFBMkQsZUFBZSxHQUFHLDZEQUE2RCxnQkFBZ0IsR0FBRywyREFBMkQsZUFBZSxHQUFHLDJEQUEyRCxpQkFBaUIsR0FBRyw2REFBNkQsZUFBZSxHQUFHLDREQUE0RCxnQkFBZ0IsMEJBQTBCLDBCQUEwQixHQUFHLGdDQUFnQyxtQkFBbUIsdUJBQXVCLGdCQUFnQixzQkFBc0IsR0FBRyx5Q0FBeUMsdUJBQXVCLFlBQVksYUFBYSxXQUFXLGNBQWMscUJBQXFCLGtCQUFrQixrQkFBa0Isa0JBQWtCLEdBQUcsb0NBQW9DLHdCQUF3QixvQkFBb0IsdUJBQXVCLFdBQVcsWUFBWSxhQUFhLGNBQWMscUJBQXFCLGtCQUFrQiwyQkFBMkIsR0FBRyw0QkFBNEIsdUJBQXVCLFlBQVksYUFBYSxXQUFXLGNBQWMsc0JBQXNCLEdBQUcsOEJBQThCLHVCQUF1QixnQkFBZ0Isa0JBQWtCLGNBQWMsZUFBZSwrQkFBK0Isd0JBQXdCLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUcsK0RBQStELGtCQUFrQixxQkFBcUIsZ0JBQWdCLEdBQUcsaUNBQWlDLGdCQUFnQixHQUFHLHNDQUFzQyx1QkFBdUIsWUFBWSxXQUFXLGNBQWMsYUFBYSxzQkFBc0IsZUFBZSxxQkFBcUIsY0FBYyxHQUFHLHlDQUF5QyxjQUFjLHlCQUF5Qiw0QkFBNEIsY0FBYyxxQkFBcUIsR0FBRyw4Q0FBOEMsdUJBQXVCLDBCQUEwQixzQkFBc0Isb0NBQW9DLG1CQUFtQix1QkFBdUIsb0JBQW9CLHFCQUFxQiw0QkFBNEIsd0JBQXdCLCtCQUErQiwyQkFBMkIsd0JBQXdCLGdCQUFnQixHQUFHLDREQUE0RCxrRUFBa0UsMEJBQTBCLHNCQUFzQiwwQkFBMEIsaUJBQWlCLGVBQWUsc0JBQXNCLEdBQUcsNkRBQTZELGlCQUFpQiwwQkFBMEIscUJBQXFCLGVBQWUsR0FBRyxpRUFBaUUsZ0JBQWdCLGlCQUFpQixHQUFHLHVEQUF1RCxzQkFBc0IsZ0JBQWdCLEdBQUcseURBQXlELGlCQUFpQixHQUFHLG9EQUFvRCx1QkFBdUIsWUFBWSxjQUFjLGFBQWEsY0FBYyxnQkFBZ0IsR0FBRyxtREFBbUQsdUJBQXVCLGtCQUFrQixZQUFZLFdBQVcsYUFBYSxjQUFjLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLGNBQWMsZUFBZSxjQUFjLEdBQUcsNERBQTRELG1CQUFtQixnQ0FBZ0MsR0FBRyxxQ0FBcUMsdUJBQXVCLDRCQUE0QixXQUFXLHVCQUF1QixlQUFlLGdDQUFnQyxnQkFBZ0IsNEZBQTRGLEdBQUcseUNBQXlDLHVCQUF1QixnQkFBZ0IsaUJBQWlCLGFBQWEsWUFBWSw4QkFBOEIsMkJBQTJCLDhCQUE4QixHQUFHLDZDQUE2Qyx1QkFBdUIsV0FBVyxZQUFZLGdCQUFnQixpQkFBaUIsR0FBRyx3Q0FBd0MsMEJBQTBCLHFCQUFxQix1QkFBdUIsOEJBQThCLGVBQWUsOEJBQThCLEdBQUcsNkNBQTZDLG1CQUFtQixjQUFjLHFCQUFxQixHQUFHLCtDQUErQywwQkFBMEIsZUFBZSxxQkFBcUIsd0JBQXdCLEdBQUcsNkRBQTZELGlCQUFpQixHQUFHLGtEQUFrRCx3QkFBd0IsZUFBZSxpQkFBaUIsOEJBQThCLG1DQUFtQyxHQUFHLHlOQUF5Tix1QkFBdUIsa0JBQWtCLG1CQUFtQiwyQkFBMkIsc0JBQXNCLEdBQUcsNENBQTRDLHVCQUF1QixtQkFBbUIsaUNBQWlDLEdBQUcsdURBQXVELHVCQUF1QixjQUFjLGNBQWMsZUFBZSxXQUFXLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLDRCQUE0QixpQkFBaUIsc0JBQXNCLEdBQUcsMkNBQTJDLG1CQUFtQixnQkFBZ0Isa0NBQWtDLEdBQUcsc0RBQXNELHVCQUF1QixjQUFjLGNBQWMsZUFBZSxpQkFBaUIsaUJBQWlCLGdCQUFnQiw0QkFBNEIsZUFBZSxzQkFBc0IsR0FBRyw4Q0FBOEMsZ0JBQWdCLGlCQUFpQixHQUFHLDRDQUE0Qyx1QkFBdUIsWUFBWSxhQUFhLFdBQVcsY0FBYyxHQUFHLG9CQUFvQiwwQkFBMEIsbUJBQW1CLHFCQUFxQixlQUFlLG1CQUFtQixxQkFBcUIsY0FBYyxHQUFHLG9CQUFvQixxQkFBcUIsc0JBQXNCLGNBQWMsdUJBQXVCLGNBQWMsc0JBQXNCLGdCQUFnQixHQUFHLHFCQUFxQiwyQkFBMkIsR0FBRywwQkFBMEIsY0FBYyxpQkFBaUIsa0JBQWtCLHNCQUFzQixHQUFHLHVDQUF1QyxpQkFBaUIsR0FBRywwQ0FBMEMscUJBQXFCLHVCQUF1QixHQUFHLHlDQUF5Qyx1QkFBdUIsR0FBRyw2Q0FBNkMscUJBQXFCLEdBQUcsaURBQWlELHVCQUF1QixZQUFZLFdBQVcsY0FBYyxnQkFBZ0Isc0JBQXNCLGVBQWUsa0JBQWtCLHdCQUF3QixHQUFHLGtFQUFrRSxjQUFjLG1CQUFtQixtQkFBbUIsaUJBQWlCLEdBQUcsMkVBQTJFLHNCQUFzQixjQUFjLHlCQUF5QixjQUFjLG1CQUFtQixnQkFBZ0IsaUJBQWlCLHFCQUFxQixtQkFBbUIsc0NBQXNDLHFCQUFxQiwwQkFBMEIsR0FBRyw2Q0FBNkMscUJBQXFCLEdBQUcsaURBQWlELHVCQUF1QixZQUFZLFdBQVcsY0FBYyxnQkFBZ0Isc0JBQXNCLGVBQWUsa0JBQWtCLHdCQUF3QixHQUFHLHFEQUFxRCxtQkFBbUIsbUJBQW1CLDRDQUE0QyxzQkFBc0IsY0FBYyx5QkFBeUIsY0FBYyxtQkFBbUIsaUJBQWlCLEdBQUcsc0JBQXNCLGtCQUFrQixHQUFHLDBDQUEwQyxtQkFBbUIsdUJBQXVCLGlCQUFpQixjQUFjLGNBQWMsZUFBZSx1Q0FBdUMsc0NBQXNDLCtCQUErQixnQkFBZ0IsOEJBQThCLEtBQUssVUFBVSx3QkFBd0Isc0JBQXNCLFdBQVcsZ0NBQWdDLG1DQUFtQywyQkFBMkIsOEJBQThCLE9BQU8sMkJBQTJCLDJCQUEyQixPQUFPLEtBQUssNkNBQTZDLDRCQUE0QixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixtQkFBbUIsaUNBQWlDLG9CQUFvQixxQkFBcUIsbURBQW1ELE9BQU8sY0FBYyw4QkFBOEIsa0JBQWtCLGtCQUFrQix5Q0FBeUMsMkJBQTJCLGFBQWEsa0NBQWtDLHFDQUFxQyw2QkFBNkIsZ0NBQWdDLFNBQVMsNkJBQTZCLDZCQUE2QixTQUFTLE9BQU8sbURBQW1ELDJCQUEyQixtQkFBbUIsb0NBQW9DLG9CQUFvQixnR0FBZ0csZ0NBQWdDLHlCQUF5QiwyQkFBMkIseUJBQXlCLGdCQUFnQixrQkFBa0IsMEJBQTBCLDJDQUEyQyxtQkFBbUIsNkNBQTZDLDRCQUE0QixnQkFBZ0IseUJBQXlCLG9CQUFvQiwyQkFBMkIsZUFBZSxrQ0FBa0MsdUJBQXVCLDZCQUE2QixnQ0FBZ0MsV0FBVyxTQUFTLDhCQUE4QixhQUFhLHlCQUF5QixXQUFXLFNBQVMsT0FBTyw0QkFBNEIsNEJBQTRCLG1CQUFtQixxQkFBcUIsa0NBQWtDLHVDQUF1QyxPQUFPLHdCQUF3QixtQkFBbUIsT0FBTywwQkFBMEIsb0JBQW9CLE9BQU8sd0JBQXdCLG1CQUFtQixPQUFPLHdCQUF3QixxQkFBcUIsT0FBTywwQkFBMEIsbUJBQW1CLE9BQU8seUJBQXlCLG9CQUFvQiw0Q0FBNEMsOEJBQThCLE9BQU8sS0FBSyxHQUFHLGlFQUFpRSwyQkFBMkIsOERBQThELDJCQUEyQiwrQkFBK0IsbUJBQW1CLHVCQUF1QixnQkFBZ0Isc0JBQXNCLEdBQUcsMEJBQTBCLHlCQUF5Qix5QkFBeUIsY0FBYyxlQUFlLGFBQWEsZ0JBQWdCLHVCQUF1QixvQkFBb0Isb0JBQW9CLG9CQUFvQixLQUFLLHNCQUFzQixpREFBaUQsc0JBQXNCLDJCQUEyQixhQUFhLGNBQWMsZUFBZSxnQkFBZ0IsdUJBQXVCLHNCQUFzQiw2QkFBNkIsS0FBSyxHQUFHLDhCQUE4Qix1QkFBdUIsWUFBWSxhQUFhLFdBQVcsY0FBYyxzQkFBc0IsR0FBRyw4QkFBOEIsdUJBQXVCLGdCQUFnQixrQkFBa0IsY0FBYyxlQUFlLHVDQUF1Qyx3QkFBd0Isc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRywrREFBK0Qsa0JBQWtCLHFCQUFxQixnQkFBZ0IsR0FBRyxpQ0FBaUMsZ0JBQWdCLEdBQUcsNEJBQTRCLG9CQUFvQix5QkFBeUIsY0FBYyxhQUFhLGdCQUFnQixlQUFlLGlDQUFpQyxtQkFBbUIsbUNBQW1DLGdCQUFnQixhQUFhLGtCQUFrQiw2QkFBNkIsZ0NBQWdDLGtCQUFrQix5QkFBeUIsaUJBQWlCLDZCQUE2QixnQ0FBZ0MscUNBQXFDLDBDQUEwQyx5QkFBeUIsNkJBQTZCLDBCQUEwQixzQ0FBc0Msa0NBQWtDLDhCQUE4QixtRUFBbUUsaUNBQWlDLDhCQUE4QixzQkFBc0IsMkJBQTJCLG9DQUFvQyxrQ0FBa0MsOEJBQThCLGtDQUFrQyw2QkFBNkIsdUJBQXVCLDhCQUE4QixXQUFXLDRCQUE0Qix5QkFBeUIsa0NBQWtDLDZCQUE2Qix1QkFBdUIsbUJBQW1CLDBCQUEwQiwyQkFBMkIsYUFBYSxXQUFXLFNBQVMsd0JBQXdCLCtDQUErQyxzQkFBc0IsZUFBZSxzQ0FBc0MsV0FBVyxTQUFTLE9BQU8seUJBQXlCLDJCQUEyQixnQkFBZ0Isa0JBQWtCLGlCQUFpQixrQkFBa0Isb0JBQW9CLE9BQU8sd0JBQXdCLDJCQUEyQixzQkFBc0IsZ0JBQWdCLGVBQWUsaUJBQWlCLGtCQUFrQixxQkFBcUIsb0JBQW9CLG9CQUFvQixrQkFBa0IsbUJBQW1CLGtCQUFrQixPQUFPLGlDQUFpQyx1QkFBdUIsb0NBQW9DLE9BQU8sS0FBSyx1QkFBdUIseUJBQXlCLDhCQUE4QixhQUFhLHlCQUF5QixpQkFBaUIsa0NBQWtDLGtCQUFrQiw4RkFBOEYsYUFBYSwyQkFBMkIsb0JBQW9CLHFCQUFxQixpQkFBaUIsZ0JBQWdCLDZDQUE2QywrQkFBK0IsMkNBQTJDLGVBQWUsNkJBQTZCLGlCQUFpQixrQkFBa0Isc0JBQXNCLHVCQUF1QixTQUFTLE9BQU8sdURBQXVELGdDQUFnQyx5QkFBeUIsNkJBQTZCLDJDQUEyQyxtQkFBbUIsNkNBQTZDLDhCQUE4QixnQkFBZ0IseUJBQXlCLG9CQUFvQiwyQkFBMkIsZUFBZSxrQ0FBa0MsdUJBQXVCLDZCQUE2QixnQ0FBZ0MsV0FBVyxTQUFTLDhCQUE4QixhQUFhLHlCQUF5QixXQUFXLFNBQVMsT0FBTyxLQUFLLHdDQUF3QywwQkFBMEIsaUJBQWlCLG1CQUFtQixnQ0FBZ0MscUNBQXFDLEtBQUssR0FBRyxzQkFBc0IsdUJBQXVCLGlJQUFpSSx5QkFBeUIsb0JBQW9CLHFCQUFxQiw2QkFBNkIsd0JBQXdCLEtBQUssOEJBQThCLHlCQUF5QixxQkFBcUIsbUNBQW1DLG9CQUFvQiwyQkFBMkIsa0JBQWtCLGtCQUFrQixtQkFBbUIsZUFBZSxxQkFBcUIscUJBQXFCLGlDQUFpQywrQkFBK0IsZ0NBQWdDLHFCQUFxQiwwQkFBMEIsT0FBTyxLQUFLLCtCQUErQixLQUFLLDZCQUE2QixxQkFBcUIsa0JBQWtCLG9DQUFvQyxvQkFBb0IsMkJBQTJCLGtCQUFrQixrQkFBa0IsbUJBQW1CLHNCQUFzQixpQ0FBaUMsZ0NBQWdDLG9CQUFvQixnQ0FBZ0MsbUJBQW1CLDBCQUEwQixPQUFPLEtBQUssZ0NBQWdDLHdDQUF3QyxrQkFBa0IsbUJBQW1CLEtBQUssOEJBQThCLHlCQUF5QixjQUFjLGVBQWUsYUFBYSxnQkFBZ0IsS0FBSyxHQUFHLHFCQUFxQiwwQkFBMEIsbUJBQW1CLHVCQUF1QixlQUFlLG1CQUFtQixxQkFBcUIsY0FBYyxTQUFTLHVCQUF1Qix3QkFBd0IsZ0JBQWdCLHlCQUF5QixnQkFBZ0Isd0JBQXdCLGtCQUFrQixLQUFLLEdBQUcsc0JBQXNCLDJCQUEyQixjQUFjLGdCQUFnQixtQkFBbUIsb0JBQW9CLHdCQUF3QixLQUFLLDJCQUEyQixtQkFBbUIsWUFBWSx5QkFBeUIsMkJBQTJCLE9BQU8sV0FBVywyQkFBMkIsT0FBTyxLQUFLLEtBQUssc0JBQXNCLDJCQUEyQix1QkFBdUIsZ0NBQWdDLDJCQUEyQixnQkFBZ0IsZUFBZSxrQkFBa0Isb0JBQW9CLDBCQUEwQixtQkFBbUIsc0JBQXNCLDRCQUE0Qiw0QkFBNEIsb0JBQW9CLHlCQUF5Qix5QkFBeUIsdUJBQXVCLHNCQUFzQiw4QkFBOEIsd0JBQXdCLGlDQUFpQyxzQkFBc0IsMkJBQTJCLHdCQUF3Qix5QkFBeUIsK0JBQStCLDZCQUE2Qiw4Q0FBOEMsNkJBQTZCLDRDQUE0QyxTQUFTLFNBQVMsS0FBSyxHQUFHLHdCQUF3QiwyQkFBMkIsdUJBQXVCLGVBQWUsMkJBQTJCLGdCQUFnQixlQUFlLGtCQUFrQixvQkFBb0IsMEJBQTBCLG1CQUFtQixzQkFBc0IsNEJBQTRCLGVBQWUseUJBQXlCLHlCQUF5QixnREFBZ0QsNEJBQTRCLHNCQUFzQiwrQkFBK0Isb0JBQW9CLHlCQUF5Qix1QkFBdUIsU0FBUyxXQUFXLGVBQWUsS0FBSyxtQkFBbUI7QUFDcGl2QztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1h2QyxNQUFnTjtBQUNoTixNQUFzTTtBQUN0TSxNQUE2TTtBQUM3TSxNQUFnTztBQUNoTyxNQUF5TjtBQUN6TixNQUF5TjtBQUN6TixNQUF3Z0I7QUFDeGdCO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLDJNQUFtQjtBQUMvQyx3QkFBd0Isd05BQWE7O0FBRXJDLHVCQUF1Qiw2TUFBYTtBQUNwQztBQUNBLGlCQUFpQixxTUFBTTtBQUN2Qiw2QkFBNkIsNE1BQWtCOztBQUUvQyxhQUFhLGdOQUFHLENBQUMsbWRBQU87Ozs7QUFJa2Q7QUFDMWUsT0FBTyxpRUFBZSxtZEFBTyxJQUFJLDBkQUFjLEdBQUcsMGRBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFCN0U7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ2hEQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9BY3Rpb25zL0Fib3V0QWN0aW9uLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvQWN0aW9ucy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9BY3Rpb25zL0FsbEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9BY3Rpb25zL1NhdmVBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9ET00vVG9vbHMuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9HcmFwaGljcy9Ub2FzdC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL01haW4uanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9NZW51LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1BhbmUuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9QbGF5Z3JvdW5kLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVGFicy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1RhYnMvRWRpdG9yVGFiLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVGFicy9PdXRwdXRUYWIuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9UYWJzL1RhYi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1VJL0RyYWdBbmREcm9wLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVXRpbGl0eS9SZWFkeS5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9fcGxheWdyb3VuZC5zY3NzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL19wbGF5Z3JvdW5kLnNjc3M/NDc0OSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICcuL19wbGF5Z3JvdW5kLnNjc3MnO1xuaW1wb3J0IHtQbGF5Z3JvdW5kfSBmcm9tICcuL2pzL1BsYXlncm91bmQvUGxheWdyb3VuZCc7XG5pbXBvcnQge1BsYXlncm91bmRGYWN0b3J5fSBmcm9tICcuL2pzL1BsYXlncm91bmRGYWN0b3J5JztcblxuZXhwb3J0IHtQbGF5Z3JvdW5kfTtcbmV4cG9ydCB7UGxheWdyb3VuZCBhcyBkZWZhdWx0fTtcblxuUGxheWdyb3VuZEZhY3RvcnkuY3JlYXRlKFNpdGUuc2l0ZSk7XG5cblNpdGUuUGxheWdyb3VuZCA9IFBsYXlncm91bmQ7XG5cbiIsImltcG9ydCB7QWN0aW9ufSBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XG5pbXBvcnQgcGFja2FnZWpzb24gZnJvbSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGNvbnN0IEFib3V0QWN0aW9uID0gZnVuY3Rpb24oc2l0ZSwgb3B0aW9ucykge1xuXHRBY3Rpb24uY2FsbCh0aGlzLCBzaXRlLCBvcHRpb25zKTtcblxuXHR0aGlzLmRvID0gZnVuY3Rpb24obWFpbikge1xuXHRcdEFjdGlvbi5wcm90b3R5cGUuZG8uY2FsbCh0aGlzLCBtYWluKTtcblxuXHRcdC8vIERpYWxvZyBib3ggY29udGVudHNcblx0XHRsZXQgY29udGVudCA9IGBcbjxmaWd1cmU+PGltZyBzcmM9XCIke3NpdGUucm9vdH0vdmVuZG9yL2NsL3BsYXlncm91bmQvaW1nL3BsYXlncm91bmQuanBnXCIgYWx0PVwiQ2lyc2ltIExvZ29cIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjIyNVwiPjwvZmlndXJlPlxuPGRpdiBjbGFzcz1cImNsLXBnLWFib3V0LWRpdlwiPlxuPGgxPkNvdXJzZUxpYiBQbGF5Z3JvdW5kPC9oMT5cbjxwPlZlcnNpb246ICR7cGFja2FnZWpzb24udmVyc2lvbn08L3A+XG48cD5Xcml0dGVuIGJ5OiBDaGFybGVzIEIuIE93ZW48L3A+PC9kaXY+YDtcblxuXHRcdGNvbnN0IGRpYWxvZyA9IG5ldyBEaWFsb2coe1xuXHRcdFx0dGl0bGU6ICdBYm91dCB0aGUgUGxheWdyb3VuZCcsXG5cdFx0XHRjb250ZW50OiBjb250ZW50LFxuXHRcdFx0J2FkZENsYXNzJzogJ2NsLXBnLWFib3V0J1xuXHRcdH0pO1xuXG5cdH1cbn1cblxuQWJvdXRBY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBY3Rpb24ucHJvdG90eXBlKTtcbkFib3V0QWN0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFib3V0QWN0aW9uO1xuXG5BYm91dEFjdGlvbi50YWcgPSAnYWJvdXQnOyIsIi8qKlxuICogQmFzZSBvYmplY3QgZm9yIGFuIGFjdGlvbi5cbiAqIEBwYXJhbSBzaXRlIFNpdGUgb2JqZWN0XG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHBhc3NlZCB0byB0aGlzIGFjdGlvblxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBBY3Rpb24gPSBmdW5jdGlvbihzaXRlLCBvcHRpb25zKSB7XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgc291cmNlcyBmb3IgdGhpcyBhY3Rpb24uXG5cdCAqXG5cdCAqIEJhc2VkIG9uIHRoZSBvcHRpb24gJ3NvdXJjZXMnLCB3aGljaCBhcmUgdGFiIHRhZ3MuXG5cdCAqIEByZXR1cm4gb2JqZWN0IHdpdGggdGFiIG5hbWVzIGFuZCBzb3VyY2VzLlxuXHQgKi9cblx0dGhpcy5nZXRTb3VyY2VzID0gZnVuY3Rpb24oKSB7XG5cdFx0Ly8gR2V0IHRoZSByZXF1aXNpdGUgdGFiIGNvbnRlbnRzXG5cdFx0Y29uc3Qgc291cmNlcyA9IHt9O1xuXG5cdFx0aWYob3B0aW9ucy5zb3VyY2VzID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5zb3VyY2VzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gc291cmNlcztcblx0XHR9XG5cblx0XHRmb3IoY29uc3Qgc291cmNlIG9mIG9wdGlvbnMuc291cmNlcykge1xuXHRcdFx0Y29uc3QgdGFiID0gdGhpcy5tYWluLmdldFRhYihzb3VyY2UpO1xuXHRcdFx0aWYodGFiICE9PSBudWxsKSB7XG5cdFx0XHRcdHNvdXJjZXNbc291cmNlXSA9IHtuYW1lOiB0YWIubmFtZSwgZGF0YTogdGFiLmdldCgpfTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc291cmNlcztcblx0fVxuXG5cbn1cblxuQWN0aW9uLnByb3RvdHlwZS5kbyA9IGZ1bmN0aW9uKG1haW4pIHtcblx0dGhpcy5tYWluID0gbWFpbjtcbn0iLCJpbXBvcnQge1NhdmVBY3Rpb259IGZyb20gJy4vU2F2ZUFjdGlvbic7XG5pbXBvcnQge0Fib3V0QWN0aW9ufSBmcm9tICcuL0Fib3V0QWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IEFsbEFjdGlvbnMgPSBmdW5jdGlvbigpIHt9XG5cbkFsbEFjdGlvbnMuYWRkQWxsID0gZnVuY3Rpb24oUGxheWdyb3VuZCkge1xuXHRQbGF5Z3JvdW5kLmFkZEFjdGlvbihTYXZlQWN0aW9uKTtcblx0UGxheWdyb3VuZC5hZGRBY3Rpb24oQWJvdXRBY3Rpb24pO1xufSIsImltcG9ydCB7QWN0aW9ufSBmcm9tICcuL0FjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBTYXZlQWN0aW9uID0gZnVuY3Rpb24oc2l0ZSwgb3B0aW9ucykge1xuXHRBY3Rpb24uY2FsbCh0aGlzLCBzaXRlLCBvcHRpb25zKTtcblxuXHR0aGlzLmRvID0gZnVuY3Rpb24obWFpbikge1xuXHRcdEFjdGlvbi5wcm90b3R5cGUuZG8uY2FsbCh0aGlzLCBtYWluKTtcblxuXHRcdC8vIEdldCB0aGUgcmVxdWlzaXRlIHRhYiBjb250ZW50c1xuXHRcdGNvbnN0IHNvdXJjZXMgPSB0aGlzLmdldFNvdXJjZXMoKTtcblxuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFwcFRhZzogb3B0aW9ucy5hcHBUYWcsXG5cdFx0XHRuYW1lOiBvcHRpb25zLm5hbWUsXG5cdFx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeShzb3VyY2VzKSxcblx0XHRcdHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdH07XG5cblx0XHRzaXRlLmFwaS5wb3N0KCcvYXBpL2ZpbGVzeXN0ZW0vc2F2ZScsIHBhcmFtcylcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHRcdGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xuXHRcdFx0XHRcdHNpdGUudG9hc3QodGhpcywgJ1N1Y2Nlc3NmdWxseSBzYXZlZCB0byBzZXJ2ZXInKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0XHRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cblNhdmVBY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBY3Rpb24ucHJvdG90eXBlKTtcblNhdmVBY3Rpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2F2ZUFjdGlvbjtcblxuU2F2ZUFjdGlvbi50YWcgPSAnc2F2ZSc7IiwiXG5cbi8qKlxuICogQ29udmVuaWVuY2UgZnVuY3Rpb25zIGZvciB0aGUgRE9NLlxuICogVG9vbHMgdGhhdCBhdm9pZCBoYXZpbmcgdG8gaGF2ZSBqUXVlcnkgaW5zdGFsbGVkLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBUb29scyA9IGZ1bmN0aW9uKCkge1xuXG59XG5cbi8qKlxuICogSXMgYW4gZWxlbWVudCB2aXNpYmxlP1xuICogQm9ycm93ZWQgZnJvbSBqUXVlcnkhXG4gKiBAcGFyYW0gZWxlbVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblRvb2xzLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICAgIHJldHVybiAhISggZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICk7XG59O1xuXG4vKipcbiAqIEFkZCBhIGNsYXNzIHRvIGFuIGVsZW1lbnRcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gYWRkIHRvXG4gKiBAcGFyYW0gY2xhc3NOYW1lIENsYXNzIHRvIGFkZFxuICovXG5Ub29scy5hZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdClcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxzZVxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG59XG5cblRvb2xzLmFkZENsYXNzZXMgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc2VzKSB7XG4gICAgaWYoY2xhc3NlcyA9PT0gdW5kZWZpbmVkIHx8IGNsYXNzZXMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKChjbHMpID0+IHtcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3MoZWxlbWVudCwgY2xzKTtcbiAgICB9KTtcbn1cblxuVG9vbHMucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICBsZXQgcmVnRXggPSBuZXcgUmVnRXhwKCdcXFxcYicgKyBjbGFzc05hbWUgKyAnXFxcXGInLCAnZycpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZWdFeCwgXCJcIik7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgRElWIHdpdGggYSBwcm92aWRlZCBjbGFzcyBuYW1lLlxuICogQHBhcmFtIGNsYXNzTmFtZSBDbGFzcyB0byBhZGQgdG8gdGhlIGRpdlxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudCB0byBwbGFjZSBpbiB0aGUgZGl2LiBIVE1MIG9yIEVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBDcmVhdGVkIERPTSBFbGVtZW50XG4gKi9cblRvb2xzLmNyZWF0ZUNsYXNzZWREaXYgPSBmdW5jdGlvbihjbGFzc05hbWUsIGNvbnRlbnQpIHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVG9vbHMuYWRkQ2xhc3MoZGl2LCBjbGFzc05hbWUpO1xuICAgIGlmKGNvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xuXHQgICAgVG9vbHMuYWRkQ29udGVudChkaXYsIGNvbnRlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZGl2O1xufVxuXG4vKipcbiAqIEFkZCBjb250ZW50IHRvIGFuIGVsZW1lbnQuXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGFkZCB0b1xuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudC4gQ2FuIGJlIEhUTUwgb3IgYW4gRWxlbWVudC5cbiAqL1xuVG9vbHMuYWRkQ29udGVudCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNvbnRlbnQpIHtcbiAgICBpZihUb29scy5pc1N0cmluZyhjb250ZW50KSkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSBjb250ZW50O1xuICAgIH0gZWxzZSBpZihUb29scy5pc0VsZW1lbnQoY29udGVudCkpIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogSXMgdGhlIHBhc3NlZCB2YWx1ZSBhIHN0cmluZz9cbiAqIEBwYXJhbSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5Ub29scy5pc1N0cmluZyA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCAoKCEhdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpO1xufVxuXG4vKipcbiAqIElzIHRoZSBwYXNzZWQgdmFsdWUgYW4gSFRNTEVsZW1lbnQ/XG4gKiBAcGFyYW0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuVG9vbHMuaXNFbGVtZW50ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgcmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCAmJiB2YWwubm9kZVZhbHVlICE9PSB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogR2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgKHNwZWNpZmljYWxseSBpdHMgYm9yZGVyIGJveCwgd2hpY2ggZXhjbHVkZXMgbWFyZ2lucykgcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50LlxuICogQHBhcmFtIGVsZW1lbnRcbiAqL1xuVG9vbHMub2Zmc2V0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuXHRjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0cmV0dXJuIHtcblx0ICAgIGxlZnQ6IHJlY3QubGVmdCArIGVsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIGVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgfVxufVxuXG4vKipcbiAqIEZpbmQgYSBjaGlsZCBieSB0YWdOYW1lXG4gKiBAcGFyYW0gZWxlbWVudFxuICogQHBhcmFtIHRhZ05hbWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ub29scy5jaGlsZCA9IGZ1bmN0aW9uKGVsZW1lbnQsIHRhZ05hbWUpIHtcblx0Zm9yKGNvbnN0IG5vZGUgb2YgZWxlbWVudC5jaGlsZE5vZGVzKSB7XG5cdCAgICBpZihub2RlLnRhZ05hbWUgPT09IHRhZ05hbWUpIHtcblx0ICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQge1Rvb2xzfSBmcm9tICcuLi9ET00vVG9vbHMnO1xuXG4vKipcbiAqIFRvYXN0IG5vdGlmaWNhdGlvbiBzeXN0ZW1cbiAqIGpRdWVyeS1mcmVlXG4gKiBAcGFyYW0gbWFpbiBNYWluIG9iamVjdFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBUb2FzdCA9IGZ1bmN0aW9uKG1haW4pIHtcblx0LyoqIERlZmF1bHQgdG9hc3QgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzICovXG5cdHRoaXMuZGVmYXVsdER1cmF0aW9uID0gMjAwMDtcblxuXHQvKiogSW50ZXItdG9hc3QgZGVsYXkgdGltZSBpbiBtaWxsaXNlY29uZHMgKi9cblx0dGhpcy5pbnRlclRvYXN0RGVsYXkgPSA1MDA7XG5cbiAgICBsZXQgbWVzc2FnZXMgPSBbXTsgIC8vIFBlbmRpbmcgbWVzc2FnZXNcbiAgICBsZXQgYWN0aXZlID0gZmFsc2U7IC8vIElzIHRoZXJlIGFuIGFjdGl2ZSBtZXNzYWdlIGRpc3BsYXlpbmc/XG5cblx0bGV0IGVsZW1lbnQgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgdGhlIHRvYXN0IGRpdlxuXHQgKiBAcGFyYW0gZGl2IERpdiB0byBwdXQgdGhlIHRvYXN0IGludG9cblx0ICovXG4gICAgdGhpcy5jcmVhdGUgPSAoZGl2KSA9PiB7XG5cdFx0ZWxlbWVudCA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ3RvYXN0Jyk7XG5cdFx0ZGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG5cdFx0ZWxlbWVudC5pbm5lckhUTUwgPSAndGVzdGluZyc7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcbiAgICBcdGlmKG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgIWFjdGl2ZSkge1xuXHRcdCAgICAvLyBTZXQgdGhlIG1lc3NhZ2Vcblx0XHQgICAgbGV0IG1lc3NhZ2UgPSBtZXNzYWdlc1swXTtcbiAgICAgICAgICAgIG1lc3NhZ2VzLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gbWVzc2FnZS5tc2c7XG5cbiAgICAgICAgICAgIC8vIFNob3cgaXRcblx0XHQgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2FzdC1hY3RpdmUnKTtcblx0XHQgICAgYWN0aXZlID0gdHJ1ZTtcblxuXHRcdCAgICAvLyBEZWxheSB3aGlsZSBhY3RpdmVcblx0XHQgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0ICAgIFx0Ly8gSGlkZSBpdFxuXHRcdFx0ICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndG9hc3QtYWN0aXZlJyk7XG5cblx0XHRcdCAgICAvLyBEZWxheSBiZXR3ZWVuIHRvYXN0c1xuXHRcdFx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0ICAgIFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0XHQgICAgXHRzaG93KCk7XG5cdFx0XHQgICAgfSwgdGhpcy5pbnRlclRvYXN0RGVsYXkpXG5cdFx0ICAgIH0sIG1lc3NhZ2UudGltZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqXG5cdCAqIERpc3BsYXkgYSB0b2FzdCBtZXNzYWdlXG5cdCAqIEBwYXJhbSBtc2cgTWVzc2FnZSB0byBkaXNwbGF5XG5cdCAqIEBwYXJhbSB0aW1lIFRpbWUgdG8gZGlzcGxheSBpbiBtaWxsaXNlY29uZHMsIG9taXQgZm9yIGRlZmF1bHRcblx0ICovXG5cdHRoaXMubWVzc2FnZSA9IGZ1bmN0aW9uKG1zZywgdGltZSkge1xuICAgICAgICBpZih0aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRpbWUgPSB0aGlzLmRlZmF1bHREdXJhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2VzLnB1c2goe21zZzogbXNnLCB0aW1lOiB0aW1lfSk7XG4gICAgICAgIHNob3coKTtcbiAgICB9XG5cblx0LyoqXG5cdCAqIERpc3BsYXkgYW55IEpTT04gZXJyb3JzIHdlIGhhdmUgcmVjZWl2ZWQuXG5cdCAqIEBwYXJhbSBqc29uQXBpIEpzb25BUEkgb2JqZWN0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGFueSBlcnJvcnMgZXhpc3RlZC5cblx0ICovXG5cdHRoaXMuanNvbkVycm9ycyA9IGZ1bmN0aW9uKGpzb25BcGkpIHtcbiAgICAgICAgaWYoanNvbkFwaS5lcnJvcnMoKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAganNvbkFwaS5lcnJvcnMoKS5mb3JFYWNoKChlcnJvcik9PntcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UoJ1NlcnZlciBFcnJvcjogJyArIGVycm9yLnRpdGxlLCA1MDAwKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgUmVzaXplciBmcm9tICdyZXNpemVyLWNsJztcblxuaW1wb3J0IHtNZW51fSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IHtUb2FzdH0gZnJvbSAnLi9HcmFwaGljcy9Ub2FzdCc7XG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuL1VJL0RyYWdBbmREcm9wJztcbmltcG9ydCB7VG9vbHN9IGZyb20gJy4vRE9NL1Rvb2xzJztcbmltcG9ydCB7UGFuZX0gZnJvbSBcIi4vUGFuZVwiO1xuXG5cbi8qKlxuICogQWN0dWFsIGluc3RhbmNlIG9mIHRoZSBQbGF5Z3JvdW5kIGZvciBhIHNpbmdsZSBlbGVtZW50LlxuICogQHBhcmFtIHBsYXlncm91bmQgVGhlIG1haW4gUGxheWdyb3VuZCBvYmplY3RcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgd2UgYXJlIGxvYWRpbmcgaW50b1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBNYWluID0gZnVuY3Rpb24ocGxheWdyb3VuZCwgZWxlbWVudCkge1xuICAgIHRoaXMucGxheWdyb3VuZCA9IHBsYXlncm91bmQ7XG4gICAgdGhpcy5zaXRlID0gcGxheWdyb3VuZC5zaXRlO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gcGxheWdyb3VuZC5vcHRpb25zO1xuXG4gICAgLy8vIGRpdi5tYWluXG4gICAgdGhpcy5kaXYgPSBudWxsO1xuXG4gICAgbGV0IG9wdGlvbnMgPSBwbGF5Z3JvdW5kLm9wdGlvbnM7XG5cbiAgICAvLy8gUmVmZXJlbmNlcyB0byBvdGhlciBHVUkgY29tcG9uZW50c1xuICAgIGxldCBtZW51PW51bGwsIHRhYnM9bnVsbDtcblxuICAgIC8vLyBkaXYub3ZlcmxheVxuICAgIGxldCBkaXZPdmVybGF5ID0gbnVsbCwgZGl2V29yaz1udWxsO1xuXG4gICAgdGhpcy5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG5cbiAgICBcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZCcpO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cblx0ICAgIGlmKG9wdGlvbnMuaGVpZ2h0ICE9PSBudWxsKSB7XG5cdFx0ICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cdCAgICB9XG5cbiAgICAgICAgc3dpdGNoKG9wdGlvbnMuZGlzcGxheSkge1xuICAgICAgICAgICAgY2FzZSAnZnVsbCc6XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLWZ1bGwnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcblx0ICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLXdpbmRvdycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYob3B0aW9ucy5kaXNwbGF5ID09PSAnd2luZG93Jykge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEFkZCByZXNpemVyIHRvIHRoZSB3aW5kb3cgaWYgaW4gd2luZG93IG1vZGVcbiAgICAgICAgICAgIC8vIGFuZCBpdCBoYXMgbm90IGFscmVhZHkgYmVlbiBhZGRlZFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIGlmKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInJlc2l6ZXJcIikpIHtcbiAgICAgICAgICAgICAgICBuZXcgUmVzaXplcihlbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogJzEwcHggc29saWQgIzE4NDUzQidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZHJhZ0FuZERyb3AgPSBuZXcgRHJhZ0FuZERyb3AodGhpcyk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgdGhlIHdpbmRvdyBjb21wb25lbnRzXG4gICAgICAgIC8vXG4gICAgICAgIGlmKG9wdGlvbnMuZGlzcGxheSAhPT0gJ2lubGluZScgJiYgb3B0aW9ucy5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBBbGwgd2luZG93LWJhc2VkIHZlcnNpb25zIG90aGVyIHRoYW4gaW5saW5lIGdldCB0aGVcbiAgICAgICAgICAgIC8vIGZ1bGwgdXNlciBpbnRlcmZhY2VcbiAgICAgICAgICAgIC8vXG5cbiAgICAgICAgICAgIC8vIDxkaXYgY2xhc3M9XCJtYWluXCI+PC9kaXY+XG4gICAgICAgICAgICB0aGlzLmRpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXBnLW1haW4nKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmRpdik7XG5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBBZGQgdGhlIG1lbnVcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBtZW51ID0gbmV3IE1lbnUodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm1lbnUgPSBtZW51O1xuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gV29ya2luZyBhcmVhXG4gICAgICAgICAgICAvLyA8ZGl2IGNsYXNzPVwid29ya1wiPjwvZGl2PlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIGRpdldvcmsgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCd3b3JrJyk7XG4gICAgICAgICAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZChkaXZXb3JrKTtcblxuXG5cdFx0XHQvL1xuXHQgICAgICAgIC8vIEFuZCB0aGUgcm9vdCBwYW5lXG5cdCAgICAgICAgLy9cblx0ICAgICAgICB0aGlzLnJvb3RQYW5lID0gbmV3IFBhbmUodGhpcywgZGl2V29yaywgbnVsbCwgbnVsbCk7XG5cdCAgICAgICAgdGhpcy5yb290UGFuZS5sb2FkKG9wdGlvbnMucGFuZSk7XG5cblx0ICAgICAgICAvL1xuXHQgICAgICAgIC8vIEFuZCB0aGUgb3ZlcmxheVxuXHQgICAgICAgIC8vIDxkaXYgY2xhc3M9XCJjaXJzaW0tb3ZlcmxheVwiPjwvZGl2PlxuXHQgICAgICAgIC8vXG5cdCAgICAgICAgZGl2T3ZlcmxheSA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXBnLW92ZXJsYXknKTtcblx0ICAgICAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZChkaXZPdmVybGF5KTtcblxuICAgICAgICAgICAgdGhpcy50b2FzdCA9IG5ldyBUb2FzdCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMudG9hc3QuY3JlYXRlKHRoaXMuZGl2KTtcblxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEFueSBkYXRhIHRvIGxvYWQ/XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgaWYob3B0aW9ucy5sb2FkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxvYWQgPSBvcHRpb25zLmxvYWQ7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIGxvYWQgPT09ICdzdHJpbmcnIHx8IGxvYWQgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZCA9IEpTT04ucGFyc2UobG9hZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IHRhZyBpbiBsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhYiA9IHRoaXMuZ2V0VGFiKHRhZyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRhYiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFiLnNldChsb2FkW3RhZ10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICB0aGlzLmdldFRhYiA9IGZ1bmN0aW9uKHRhZykge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290UGFuZS5nZXRUYWIodGFnKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuZXZlciBhIG5ldyB0YWIgaXMgc2VsZWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLm5ld1RhYiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIFNldCBvciBjbGVhciBpbnRlcmZhY2UgbW9kYWwgc3RhdGUuXG4gICAgICogQHBhcmFtIG1vZGFsIFRydWUgc2V0cyBpbnRlcmZhY2UgdG8gbW9kYWwgc3RhdGUuXG4gICAgICpcbiAgICAgKi9cbiAgICB0aGlzLm1vZGFsID0gZnVuY3Rpb24obW9kYWwpIHtcbiAgICAgICAgaWYobW9kYWwpIHtcbiAgICAgICAgICAgIGRpdk92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXZPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xufVxuIiwiaW1wb3J0IHtUb29sc30gZnJvbSAnLi9ET00vVG9vbHMnO1xuXG4vLyBpbXBvcnQge0ZpbGVNZW51fSBmcm9tICcuL01lbnVzL0ZpbGVNZW51Jztcbi8vIGltcG9ydCB7RWRpdE1lbnV9IGZyb20gJy4vTWVudXMvRWRpdE1lbnUnO1xuLy8gaW1wb3J0IHtUYWJzTWVudX0gZnJvbSAnLi9NZW51cy9UYWJzTWVudSc7XG4vLyBpbXBvcnQge0hlbHBNZW51fSBmcm9tICcuL01lbnVzL0hlbHBNZW51JztcblxuLyoqXG4gKiBUaGUgcHJvZ3JhbSBtZW51IGJhclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgTWVudSA9IGZ1bmN0aW9uKG1haW4pIHtcblx0Y29uc3Qgb3B0aW9ucyA9IG1haW4ub3B0aW9ucztcblxuXG4gICAgLy9cbiAgICAvLyBDcmVhdGUgdGhlIG1lbnUgY29tcG9uZW50c1xuICAgIC8vXG4gICAgLy8gdmFyIGZpbGVNZW51ID0gbmV3IEZpbGVNZW51KHRoaXMsIG1haW4pO1xuICAgIC8vIHZhciBlZGl0TWVudSA9IG5ldyBFZGl0TWVudSh0aGlzLCBtYWluKTtcbiAgICAvLyB2YXIgdGFic01lbnUgPSBuZXcgVGFic01lbnUodGhpcywgbWFpbik7XG4gICAgLy8gdmFyIGhlbHBNZW51ID0gbmV3IEhlbHBNZW51KHRoaXMsIG1haW4pO1xuXG4gICAgLy8vIFRoZSBuYXYgZWxlbWVudFxuICAgIHRoaXMubmF2ID0gbnVsbDtcbiAgICB0aGlzLnVsID0gbnVsbDtcblxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIDxuYXYgY2xhc3M9XCJtZW51YmFyXCI+PHVsPjwvdWw+PC9uYXY+XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMubmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgICAgIFRvb2xzLmFkZENsYXNzKHRoaXMubmF2LCAnY2wtcGctbWVudWJhcicpO1xuICAgICAgICBtYWluLmRpdi5hcHBlbmRDaGlsZCh0aGlzLm5hdik7XG5cbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB0aGlzLm5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgIHRoaXMudWwgPSB1bDtcblxuICAgICAgICBjb25zdCBtZW51cyA9IG9wdGlvbnMubWVudXM7XG4gICAgICAgIG1lbnVzLnB1c2goe1xuXHQgICAgICAgIG5hbWU6ICdIZWxwJyxcblx0ICAgICAgICBtZW51czogW1xuXHRcdCAgICAgICAge25hbWU6ICdBYm91dCcsIGFjdGlvbjoge3RhZzogJ2Fib3V0J319XG5cdCAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IoY29uc3QgbWVudSBvZiBtZW51cykge1xuICAgICAgICBcdGNvbnN0IHRvcExJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgXHR1bC5hcHBlbmRDaGlsZCh0b3BMSSk7XG5cbiAgICAgICAgXHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBcdHRvcExJLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICBcdGEuaW5uZXJUZXh0ID0gbWVudS5uYW1lO1xuXG4gICAgICAgIFx0aWYobWVudS5hY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBcdFx0Ly8gVG9wIGxldmVsIG9ubHkgbWVudVxuICAgICAgICBcdFx0Y29uc3QgYWN0aW9uID0gbWFpbi5wbGF5Z3JvdW5kLmdldEFjdGlvbihtZW51LmFjdGlvbik7XG5cdFx0ICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBbYSwgdG9wTEldKSB7XG5cdFx0ICAgICAgICBcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHQgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHQgICAgICAgIGFjdGlvbi5kbyhtYWluKTtcblx0XHRcdCAgICAgICAgfSk7XG5cdFx0ICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgaWYobWVudS5tZW51cyAhPT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgXHQvLyBQdWxsLWRvd24gbWVudVxuXHQgICAgICAgIFx0Y29uc3Qgc3ViVUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXHQgICAgICAgIFx0dG9wTEkuYXBwZW5kQ2hpbGQoc3ViVUwpO1xuXG5cdCAgICAgICAgXHRmb3IoY29uc3QgZWxlbWVudCBvZiBbYSwgdG9wTEldKSB7XG5cdFx0XHQgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHQgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRcdCAgICAgICAgaWYoZ2V0Q29tcHV0ZWRTdHlsZShzdWJVTCkuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAnaGlkZGVuJykge1xuXHRcdFx0XHRcdCAgICAgICAgb3Blbih0b3BMSSk7XG5cdFx0XHRcdCAgICAgICAgfSBlbHNlIHtcblx0XHRcdFx0XHQgICAgICAgIC8vIElmIGFscmVhZHkgb3BlbiwgY2xvc2UgYWxsXG5cdFx0XHRcdFx0ICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XG5cdFx0XHRcdCAgICAgICAgfVxuXG5cdFx0XHQgICAgICAgIH0pO1xuXHRcdCAgICAgICAgfVxuXG5cdCAgICAgICAgXHRmb3IoY29uc3Qgc3ViTWVudSBvZiBtZW51Lm1lbnVzKSB7XG5cdFx0XHQgICAgICAgIGNvbnN0IHN1YkxJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRcdCAgICAgICAgc3ViVUwuYXBwZW5kQ2hpbGQoc3ViTEkpO1xuXG5cdFx0XHQgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHQgICAgICAgIHN1YkxJLmFwcGVuZENoaWxkKGEpO1xuXHRcdFx0ICAgICAgICBhLmlubmVyVGV4dCA9IHN1Yk1lbnUubmFtZTtcblxuXHRcdFx0ICAgICAgICBpZihzdWJNZW51LmFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdCAgICAgICAgLy8gVG9wIGxldmVsIG9ubHkgbWVudVxuXHRcdFx0XHQgICAgICAgIGNvbnN0IGFjdGlvbiA9IG1haW4ucGxheWdyb3VuZC5nZXRBY3Rpb24oc3ViTWVudS5hY3Rpb24pO1xuXHRcdFx0XHQgICAgICAgIGlmKGFjdGlvbiAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdCAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgW2EsIHRvcExJXSkge1xuXHRcdFx0XHRcdFx0ICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0ICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdFx0ICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgYWN0aW9uLmRvKG1haW4pO1xuXHRcdFx0XHRcdFx0ICAgICAgICB9KTtcblx0XHRcdFx0XHQgICAgICAgIH1cblx0XHRcdFx0ICAgICAgICB9XG5cblx0XHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAgfVxuXHQgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gQWRkIHRoZSBtZW51IGNvbXBvbmVudCdzIEhUTUxcbiAgICAgICAgLy9cblx0ICAgIC8vIGxldCBodG1sID0gJyc7XG5cblx0ICAgIC8vIGh0bWwgKz0gZmlsZU1lbnUuaHRtbCgpO1xuICAgICAgICAvLyBodG1sICs9IGVkaXRNZW51Lmh0bWwoKTtcbiAgICAgICAgLy8gaHRtbCArPSB0YWJzTWVudS5odG1sKCk7XG4gICAgICAgIC8vIGh0bWwgKz0gaGVscE1lbnUuaHRtbCgpO1xuXG4gICAgICAgIC8vIHVsLmlubmVySFRNTCA9IGh0bWw7XG5cbiAgICAgICAgLy9cblx0ICAgIC8vIE1lbnUgb3B0aW9uIGZvciB0ZXN0aW5nIHRoZSBUb2FzdCBlcnJvciByZXBvcnRpbmcgbWVjaGFuaXNtXG5cdCAgICAvL1xuXG5cdCAgICAvLyBodG1sICs9IGA8bGk+PGEgY2xhc3M9XCJ0b2FzdC10ZXN0XCI+VG9hc3QhPC9hPjwvbGk+YDtcblx0ICAgIC8vIHVsLmlubmVySFRNTCA9IGh0bWw7XG5cdFx0Ly9cblx0ICAgIC8vIHRoaXMudG9hc3RzID0gMDtcbiAgICAgICAgLy8gdGhpcy5jbGljaygnLnRvYXN0LXRlc3QnLCAoZXZlbnQpPT4ge1xuICAgICAgICAvLyBcdHRoaXMudG9hc3RzKys7XG4gICAgICAgIC8vIFx0bWFpbi50b2FzdC5tZXNzYWdlKCdUb2FzdCBtZXNzYWdlICcgKyB0aGlzLnRvYXN0cyk7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEluc3RhbGwgY2xpY2sgaGFuZGxlcnMgZm9yIGFsbCB0b3AtbGV2ZWwgbWVudXNcbiAgICAgICAgLy9cbiAgICAgICAgLy8gZm9yKGNvbnN0IG5vZGUgb2YgdWwuY2hpbGROb2Rlcykge1xuICAgICAgICAvLyAgICAgaWYobm9kZS50YWdOYW1lID09PSAnTEknKSB7XG4gICAgICAgIC8vICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIEZpbmQgdGhlIDx1bD4gaW4gdGhpcyBtZW51XG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCB1bFN1YiA9IFRvb2xzLmNoaWxkKG5vZGUsICdVTCcpO1xuICAgICAgICAvLyAgICAgICAgICAgICBpZih1bFN1YiAhPT0gbnVsbCkge1xuXHQgICAgLy8gICAgICAgICAgICAgICAgIGlmKGdldENvbXB1dGVkU3R5bGUodWxTdWIpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ2hpZGRlbicpIHtcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgIG9wZW4obm9kZSk7XG5cdCAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gSWYgYWxyZWFkeSBvcGVuLCBjbG9zZSBhbGxcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VBbGwoKTtcblx0ICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIEFjdGl2YXRlIGFsbCBvZiB0aGUgbWVudXNcbiAgICAgICAgLy8gZmlsZU1lbnUuYWN0aXZhdGUoKTtcbiAgICAgICAgLy8gZWRpdE1lbnUuYWN0aXZhdGUoKTtcbiAgICAgICAgLy8gdGFic01lbnUuYWN0aXZhdGUoKTtcbiAgICAgICAgLy8gaGVscE1lbnUuYWN0aXZhdGUoKTtcbiAgICB9XG5cblx0LyoqXG4gICAgICogTGlzdGVuIHRvIGtleSBkb3duIGV2ZW50cyBzbyB3ZSBjYW4gY2xvc2UgdGhlIG1lbnVcbiAgICAgKiBpZiB3ZSBjbGljayBvdXRzaWRlIG9mIHRoZSBtZW51IHdoaWxlIGl0IGlzIG9wZW4uXG5cdCAqIEBwYXJhbSBldmVudFxuXHQgKi9cblx0Y29uc3QgY2xvc2VMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyBTZWUgaWYgd2UgY2xpY2tlZCBvbiBzb21lIGNoaWxkIG9mIG5hdi4uLlxuICAgICAgICBsZXQgbm9kZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICBmb3IoIDsgbm9kZSAhPT0gbnVsbDsgbm9kZSA9IG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgaWYobm9kZSA9PT0gdGhpcy5uYXYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHQgICAgdGhpcy5jbG9zZUFsbCgpO1xuICAgIH1cblxuICAgIC8vIE9wZW4gYSBtZW51XG4gICAgY29uc3Qgb3BlbiA9IChsaSkgPT4ge1xuICAgICAgICAvLyBIaWRlIGFueSBvdGhlciBtZW51c1xuICAgICAgICBmb3IoY29uc3Qgbm9kZSBvZiB0aGlzLnVsLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gJ0xJJykge1xuXHQgICAgICAgICAgICBjb25zdCB1bCA9IFRvb2xzLmNoaWxkKG5vZGUsICdVTCcpO1xuICAgICAgICAgICAgICAgIGlmKHVsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgLy8gVG9vbHMucmVtb3ZlQ2xhc3ModWwsICdjbC1wZy1tZW51LW9wZW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHQgICAgLy8gQW5kIG9wZW4gdGhpcyBtZW51XG5cdCAgICBjb25zdCB1bCA9IFRvb2xzLmNoaWxkKGxpLCAnVUwnKTtcblx0ICAgIGlmKHVsICE9PSBudWxsKSB7XG5cdCAgICBcdHVsLmNsYXNzTGlzdC5hZGQoJ2NsLXBnLW1lbnUtb3BlbicpO1xuXHQgICAgfVxuXG5cdCAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTGlzdGVuZXIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjbG9zZUxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvKiogQ2xvc2UgYWxsIG1lbnVzICovXG4gICAgdGhpcy5jbG9zZUFsbCA9ICgpID0+IHtcblx0ICAgIGZvcihjb25zdCBub2RlIG9mIHRoaXMudWwuY2hpbGROb2Rlcykge1xuXHRcdCAgICBpZihub2RlLnRhZ05hbWUgPT09ICdMSScpIHtcblx0XHRcdCAgICBjb25zdCB1bCA9IFRvb2xzLmNoaWxkKG5vZGUsICdVTCcpO1xuXHRcdFx0ICAgIGlmKHVsICE9PSBudWxsKSB7XG5cdFx0XHRcdCAgICBUb29scy5yZW1vdmVDbGFzcyh1bCwgJ2NsLXBnLW1lbnUtb3BlbicpO1xuXHRcdFx0ICAgIH1cblx0XHQgICAgfVxuXHQgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VMaXN0ZW5lcik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlTGlzdGVuZXIpO1xuICAgIH1cblxuXHQvKipcbiAgICAgKiBFbmFibGUgb3IgZGlzYWJsZSBhIG1lbnUgb3B0aW9uIGJ5IHNlbGVjdG9yXG5cdCAqIEBwYXJhbSBzZWwgU2VsZWN0b3IgZm9yIHRoZSBtZW51IG9wdGlvbiAobGlrZSAnLnRhYnMtYWRkJylcblx0ICogQHBhcmFtIGVuYWJsZSBUcnVlIHRvIGVuYWJsZVxuXHQgKi9cblx0dGhpcy5lbmFibGUgPSAoc2VsLCBlbmFibGUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMudWwucXVlcnlTZWxlY3RvcihzZWwpO1xuICAgICAgICBpZihlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZihlbmFibGUpIHtcbiAgICAgICAgICAgIFRvb2xzLnJlbW92ZUNsYXNzKGVsZW1lbnQucGFyZW50Tm9kZSwgXCJtZW51LWRpc2FibGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVG9vbHMuYWRkQ2xhc3MoZWxlbWVudC5wYXJlbnROb2RlLCBcIm1lbnUtZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXHQvKipcbiAgICAgKiBGaW5kIGEgbWVudSBvcHRpb24gYnkgc2VsZWN0b3Jcblx0ICogQHBhcmFtIHNlbFxuXHQgKiBAcmV0dXJucyB7RWxlbWVudH1cblx0ICovXG5cdHRoaXMuZmluZCA9IChzZWwpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWwucXVlcnlTZWxlY3RvcihzZWwpO1xuICAgIH1cblxuXHQvKipcbiAgICAgKiBJbnN0YWxsIGEgbWVudSBvcHRpb24gY2xpY2sgaGFuZGVyXG5cdCAqIEBwYXJhbSBzZWwgU2VsZWN0b3IgZm9yIHRoZSBtZW51IG9wdGlvblxuXHQgKiBAcGFyYW0gY2xvc3VyZSBUaGUgY2xvc3VyZSB0byBjYWxsIChwYXNzZXMgJ2V2ZW50Jylcblx0ICovXG5cdHRoaXMuY2xpY2sgPSAoc2VsLCBjbG9zdXJlKSA9PiB7XG5cdCAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5maW5kKHNlbCk7XG5cdCAgICBpZihlbGVtZW50ICE9PSBudWxsKSB7XG5cdCAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHQgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgICAgICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XG5cdCAgICAgICAgICAgIGNsb3N1cmUoZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCk7XG59O1xuIiwiLyoqXG4gKiBQbGF5Z3JvdW5kIG9wdGlvbnMuXG4gKiBAcGFyYW0gb3B0aW9ucyBVc2VyIHByb3ZpZGVkIG9wdGlvbnMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCB2YWx1ZXMuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBvcHRpb25zIDoge307XG5cbiAgICAvLy8gRGlzcGxheSBvcHRpb25zXG4gICAgLy8vIHdpbmRvdyAtIERpc3BsYXlzIGFzIGEgc3RhbmRhcmQgZGl2IChkZWZhdWx0KVxuICAgIHRoaXMuZGlzcGxheSA9ICd3aW5kb3cnO1xuXG4gICAgLy8vIE9wdGlvbmFsIGhlaWdodCBzZXR0aW5nXG4gICAgdGhpcy5oZWlnaHQgPSBudWxsO1xuXG4gICAgLy8vIFRoZSBwbGF5Z3JvdW5kIHJvb3QgcGFuZVxuICAgIHRoaXMucGFuZSA9IHt9O1xuXG4gICAgLy8vIFRoZSB0b3AtbGV2ZWwgbWVudSBvcHRpb25zXG4gICAgdGhpcy5tZW51cyA9IFt7bmFtZTogJ0Fib3V0J31dO1xuXG4gICAgLy8vIENvbnRlbnQgdG8gaW5pdGlhbGx5IGxvYWQgaW50byB0aGUgdGFic1xuICAgIHRoaXMubG9hZCA9IG51bGw7XG5cblxuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gb3B0aW9ucykge1xuICAgICAgICBpZihvcHRpb25zLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgaWYoIXRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb24gXCIgKyBwcm9wZXJ0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBBUEkgb3BlcmF0aW9ucyBmb3IgYSBnaXZlbiBmaWxlIG1vZGUuXG4gICAgICogQHBhcmFtIG1vZGUgJ3NhdmUnLCAnb3BlbidcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICB0aGlzLmdldEFQSSA9IGZ1bmN0aW9uKG1vZGUpIHtcbiAgICAgICAgaWYodGhpcy5hcGkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5hcGkgPT09IE9iamVjdCh0aGlzLmFwaSkpIHtcbiAgICAgICAgICAgIGxldCBvYmo7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuYXBpW21vZGVdICE9PSB1bmRlZmluZWQpIHtcbiBcbiAgICAgICAgICAgICAgICAvLyBNb2RlIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgICAgICAgICAgICAgdmFyIG1vZGVPYmogPSB0aGlzLmFwaVttb2RlXTtcbiAgICAgICAgICAgICAgICBpZihtb2RlT2JqLnVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1vZGUgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTZW5kIGNvbnRlbnQgdHlwZVxuICAgICAgICAgICAgICAgIG9iaiA9IHt1cmw6IG1vZGVPYmoudXJsfTtcbiAgICAgICAgICAgICAgICBpZihtb2RlT2JqLmNvbnRlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNvbnRlbnRUeXBlID0gbW9kZU9iai5jb250ZW50VHlwZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5hcGkuY29udGVudFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvYmouY29udGVudFR5cGUgPSB0aGlzLmFwaS5jb250ZW50VHlwZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmouY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04JztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihtb2RlT2JqLmV4dHJhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0gbW9kZU9iai5leHRyYTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5hcGkuZXh0cmEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSB0aGlzLmFwaS5leHRyYTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihtb2RlT2JqLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvYmoubmFtZSA9IG1vZGVPYmoubmFtZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5hcGkubmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5uYW1lID0gdGhpcy5hcGkubmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXBpLnVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG9iaiA9IHt1cmw6IHRoaXMuYXBpLnVybH07XG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcGkuZXh0cmEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSB0aGlzLmFwaS5leHRyYTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLmFwaS5uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLm5hbWUgPSB0aGlzLmFwaS5uYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7dXJsOiB0aGlzLmFwaX07XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge1RhYnN9IGZyb20gJy4vVGFicyc7XG5cbi8qKlxuICogQSBQYW5lIGlzIGFuIGFyZWEgb2YgdGhlIElERSBzY3JlZW4gdGhhdCBlaXRoZXIgY29udGFpbnMgYSB0YWIgc2V0IG9yIHR3byBjaGlsZCBwYW5lcy5cbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRoYXQgaXMgdGhlIGhvc3QgZm9yIHRoZSBwYW5lXG4gKiBAcGFyYW0gcGFyZW50IFBhbmUgcGFyZW50IG9iamVjdFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBQYW5lID0gZnVuY3Rpb24obWFpbiwgZWxlbWVudCwgcGFyZW50KSB7XG5cdHRoaXMubWluU3BsaXQgPSAxMDtcblx0dGhpcy5tYXhTcGxpdCA9IDkwO1xuXG5cdGxldCBkaXYgPSBudWxsLCBjaGlsZDEgPSBudWxsLCBjaGlsZDIgPSBudWxsO1xuXHRsZXQgaG9yaXpvbnRhbFNwbGl0ID0gbnVsbDtcblx0bGV0IHRhYnMgPSBudWxsO1xuXG5cdGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG5cdFx0Ly9cblx0XHQvLyBDcmVhdGUgYW5kIGFkZCB0aGUgZGl2XG5cdFx0Ly9cblxuXHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMuZGl2ID0gZGl2O1xuXG5cdFx0aWYocGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHRkaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1yb290Jyk7XG5cdFx0fVxuXG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xuXG5cdFx0Ly8gaWYoZG9ub3JUYWJzICE9PSBudWxsKSB7XG5cdFx0Ly8gXHR0YWJzID0gZG9ub3JUYWJzO1xuXHRcdC8vIFx0dGFicy5uZXdQYXJlbnQodGhpcyk7XG5cdFx0Ly8gfSBlbHNlIHtcblx0XHQvLyBcdHRhYnMgPSBuZXcgVGFicyhtYWluLCBkaXYpO1xuXHRcdC8vIH1cblx0fVxuXG5cdC8qKlxuXHQgKiBMb2FkIHRoZSBwYW5lIGZyb20gdGhlIGRhdGFcblx0ICogQHBhcmFtIGRhdGEgRGF0YSBmcm9tIG9wdGlvbnMgZm9yIHRoaXMgcGFuZVxuXHQgKi9cblx0dGhpcy5sb2FkID0gZnVuY3Rpb24oZGF0YSkge1xuXHRcdGlmKGRhdGEuY2hpbGQxICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIFRoaXMgaXMgYSBzcGxpdCBwYW5lXG5cdFx0XHR0aGlzLnNwbGl0KGRhdGEuaG9yaXosIGRhdGEuY2hpbGQxLCBkYXRhLmNoaWxkMik7XG5cdFx0XHR0aGlzLnBlcmNlbnRhZ2UoZGF0YS5wZXJjZW50YWdlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFicyA9IG5ldyBUYWJzKG1haW4sIGRpdik7XG5cdFx0XHR0YWJzLmxvYWQoZGF0YS50YWJzKTtcblx0XHR9XG5cdH1cblxuXHR0aGlzLnNwbGl0ID0gZnVuY3Rpb24oaG9yaXpvbnRhbCwgY2hpbGQxRGF0YSwgY2hpbGQyRGF0YSkge1xuXHRcdGhvcml6b250YWxTcGxpdCA9IGhvcml6b250YWw7XG5cblx0XHRjaGlsZDEgPSBuZXcgUGFuZShtYWluLCBkaXYsIHRoaXMsIHRhYnMpO1xuXHRcdGNoaWxkMiA9IG5ldyBQYW5lKG1haW4sIGRpdiwgdGhpcywgbnVsbCk7XG5cblx0XHR0YWJzID0gbnVsbDtcblxuXHRcdGlmKGhvcml6b250YWwpIHtcblx0XHRcdGNoaWxkMS5kaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1sZWZ0Jyk7XG5cdFx0XHRjaGlsZDIuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtcmlnaHQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGl2LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcblx0XHRcdGNoaWxkMS5kaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC10b3AnKTtcblx0XHRcdGNoaWxkMi5kaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1ib3R0b20nKTtcblx0XHR9XG5cblx0XHRjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRiYXIuY2xhc3NMaXN0LmFkZCgnY2wtYmFyJyk7XG5cdFx0Y2hpbGQxLmRpdi5hcHBlbmRDaGlsZChiYXIpO1xuXG5cdFx0YmFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHN0YXJ0RHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmUpO1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcCk7XG5cdFx0fSk7XG5cblx0XHRiYXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0Y29uc29sZS5sb2coZXZlbnQpO1xuXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcblx0XHRcdHN0YXJ0RHJhZ2dpbmcodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcblxuXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZSk7XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmQpO1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoQ2FuY2VsKTtcblx0XHR9KTtcblxuXHRcdHRoaXMuY2hpbGQxID0gY2hpbGQxO1xuXHRcdHRoaXMuY2hpbGQyID0gY2hpbGQyO1xuXG5cdFx0dGhpcy5wZXJjZW50YWdlKDUwKTtcblxuXHRcdGlmKGNoaWxkMURhdGEgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y2hpbGQxLmxvYWQoY2hpbGQxRGF0YSk7XG5cdFx0fVxuXG5cdFx0aWYoY2hpbGQyRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjaGlsZDIubG9hZChjaGlsZDJEYXRhKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge2NoaWxkMTogY2hpbGQxLCBjaGlsZDI6IGNoaWxkMn07XG5cdH1cblxuXHRsZXQgc3RhcnRYID0gbnVsbCwgc3RhcnRZID0gbnVsbDtcblxuXHRjb25zdCBzdGFydERyYWdnaW5nID0gKHgsIHkpID0+IHtcblx0XHRzdGFydFggPSB4O1xuXHRcdHN0YXJ0WSA9IHk7XG5cdH1cblxuXHRjb25zdCBlbmREcmFnZ2luZyA9ICgpID0+IHtcblx0XHRzdGFydFggPSBudWxsO1xuXHRcdHN0YXJ0WSA9IG51bGw7XG5cdH1cblxuXG5cdGNvbnN0IGRyYWdnaW5nID0gKHgsIHkpID0+IHtcblx0XHRjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXG5cdFx0aWYoaG9yaXpvbnRhbFNwbGl0KSB7XG5cdFx0XHRjb25zdCBtYWluWCA9IHJlY3QubGVmdCArIGVsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldDtcblx0XHRcdGNvbnN0IHdpZCA9IHJlY3QucmlnaHQgLSByZWN0LmxlZnQ7XG5cdFx0XHRpZih3aWQgPD0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBlciA9ICh4IC0gbWFpblgpIC8gd2lkICogMTAwO1xuXHRcdFx0dGhpcy5wZXJjZW50YWdlKHBlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IG1haW5ZID0gcmVjdC50b3AgICsgZWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cblx0XHRcdGNvbnN0IGhpdCA9IHJlY3QuYm90dG9tIC0gcmVjdC50b3A7XG5cdFx0XHRpZihoaXQgPD0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBlciA9ICh5IC0gbWFpblkpIC8gaGl0ICogMTAwO1xuXHRcdFx0dGhpcy5wZXJjZW50YWdlKHBlcik7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgbW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmKGV2ZW50LndoaWNoID09PSAwKSB7XG5cdFx0XHRtb3VzZVVwKGV2ZW50KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRkcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXHR9XG5cblx0Y29uc3QgbW91c2VVcCA9IChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmUpO1xuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXApO1xuXHRcdGVuZERyYWdnaW5nKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XG5cdH1cblxuXHRjb25zdCB0b3VjaE1vdmUgID0gKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcblx0XHRkcmFnZ2luZyh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xuXHR9XG5cblx0Y29uc3QgdG91Y2hFbmQgPSAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuXHRcdGRyYWdnaW5nKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XG5cblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZSk7XG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kKTtcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hDYW5jZWwpO1xuXG5cdFx0ZW5kRHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblx0fVxuXG5cdGNvbnN0IHRvdWNoQ2FuY2VsID0gKGV2ZW50KSA9PiB7XG5cdFx0dG91Y2hFbmQoZXZlbnQpO1xuXHR9XG5cblx0dGhpcy5wZXJjZW50YWdlID0gZnVuY3Rpb24ocGVyKSB7XG5cdFx0aWYocGVyIDwgdGhpcy5taW5TcGxpdCkge1xuXHRcdFx0cGVyID0gdGhpcy5taW5TcGxpdDtcblx0XHR9IGVsc2UgaWYocGVyID4gdGhpcy5tYXhTcGxpdCkge1xuXHRcdFx0cGVyID0gdGhpcy5tYXhTcGxpdDtcblx0XHR9XG5cblx0XHRpZihob3Jpem9udGFsU3BsaXQpIHtcblx0XHRcdGNoaWxkMS5kaXYuc3R5bGUud2lkdGggPSBwZXIgKyAnJSc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNoaWxkMS5kaXYuc3R5bGUuaGVpZ2h0ID0gcGVyICsgJyUnO1xuXHRcdH1cblx0fVxuXG5cdHRoaXMuZ2V0VGFiID0gZnVuY3Rpb24odGFnKSB7XG5cdFx0Zm9yKGNvbnN0IGNvbGxlY3Rpb24gb2YgW3RhYnMsIGNoaWxkMSwgY2hpbGQyXSkge1xuXHRcdFx0aWYoY29sbGVjdGlvbiAhPT0gbnVsbCkge1xuXHRcdFx0XHRsZXQgdGFiID0gY29sbGVjdGlvbi5nZXRUYWIodGFnKTtcblx0XHRcdFx0aWYodGFiICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRhYjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblxuXHRpbml0aWFsaXplKCk7XG59IiwiaW1wb3J0IHtNYWlufSBmcm9tICcuL01haW4nO1xuaW1wb3J0IHtPcHRpb25zfSBmcm9tICcuL09wdGlvbnMnO1xuaW1wb3J0IHtSZWFkeX0gZnJvbSAnLi9VdGlsaXR5L1JlYWR5JztcbmltcG9ydCB7QWN0aW9ufSBmcm9tICcuL0FjdGlvbnMvQWN0aW9uJztcbmltcG9ydCB7QWxsQWN0aW9uc30gZnJvbSAnLi9BY3Rpb25zL0FsbEFjdGlvbnMnO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgUGxheWdyb3VuZFxuICpcbiAqIFRoaXMgY3JlYXRlcyBhIHNpbmdsZSBJbnN0YW5jZSB0aGF0IG1hbmFnZXMgdGhlXG4gKiBjb21wb25lbnRzIGFuZCBzdGFydHMgYWN0dWFsIFBsYXlncm91bmQgd2luZG93cy5cbiAqXG4gKiBDb25zdHJ1Y3QgYW5kIHN0YXJ0IHJ1bm5pbmcgbGlrZSB0aGlzOlxuICpcbiAqIEdpdmVuIGFuIEhUTUwgZGl2OlxuICogICAgIDxkaXYgaWQ9XCJwbGF5Z3JvdW5kXCI+PC9kaXY+XG4gKlxuICogVGhlIGZvbGxvd2luZyBzY3JpcHQgc3RhcnRzIFBsYXlncm91bmQgaW4gdGhhdCBkaXY6XG4gKlxuICogICAgIHZhciBwbGF5Z3JvdW5kID0gbmV3IFBsYXlncm91bmQoJyNwbGF5Z3JvdW5kJyk7XG4gKiAgICAgcGxheWdyb3VuZC5zdGFydCgpO1xuICpcbiAqIEBwYXJhbSBzaXRlIFNpdGUgb2JqZWN0XG4gKiBAcGFyYW0gc2VsIFNlbGVjdG9yIG9yIGVsZW1lbnQgdG8gY3JlYXRlIFBsYXlncm91bmQgaW4gKGNhbiBiZSBtYW55KVxuICogQHBhcmFtIG9wdGlvbnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgUGxheWdyb3VuZCBvcHRpb25zLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBQbGF5Z3JvdW5kID0gZnVuY3Rpb24oc2l0ZSwgc2VsLCBvcHRpb25zKSB7XG5cbiAgICAvL1xuICAgIC8vIE1hc3RlciBzZXQgb2YgdGhlIHZlcnNpb25cbiAgICAvL1xuICAgIGxldCBQQUNLQUdFID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJyk7XG4gICAgdGhpcy52ZXJzaW9uID0gUEFDS0FHRS52ZXJzaW9uO1xuXG4gICAgdGhpcy5zaXRlID0gc2l0ZTtcblxuICAgIC8vIFJlY29yZCB0aGUgc2VsZWN0b3JcbiAgICB0aGlzLnNlbCA9IHNlbDtcblxuICAgIC8vIFRoZSBPcHRpb25zIG9iamVjdCB0aGF0IG1hbmFnZXMgdXNlciBvcHRpb25zXG4gICAgdGhpcy5vcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICAvLyBBIGNvbGxlY3Rpb24gb2YgTWFpbiBvYmplY3RzLlxuICAgIHZhciBtYWlucyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogU3RhcnQgdGhlIFBsYXlncm91bmQgcnVubmluZywgY3JlYXRpbmcgdGhlIHVzZXIgaW50ZXJmYWNlLlxuICAgICAqIFRoaXMgZG9lcyB3YWl0IGZvciBkb2N1bWVudCByZWFkeSBiZWZvcmUgY2FsbGluZ1xuICAgICAqIHRoaXMuc3RhcnROb3coKSB1bmxlc3Mgd2UgYXJlIHJ1bm5pbmcgaW4gbm8td2luZG93XG4gICAgICogbW9kZS4gSW4gdGhhdCBjYXNlIGl0IHJldHVybnMgYSBzdGFydGVkIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHRoaXMuc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIGlmKHNlbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnROb3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlYWR5LmdvKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnROb3coKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgdGhlIFBsYXlncm91bmQgcnVubmluZyBub3cuIERvZXMgbm90IHdhaXQgZm9yIGRvY3VtZW50IHJlYWR5LlxuICAgICAqL1xuICAgIHRoaXMuc3RhcnROb3cgPSAoKSA9PiB7XG4gICAgICAgIGlmKHNlbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbih0aGlzLCBzZWwpO1xuICAgICAgICAgICAgbWFpbnMucHVzaChtYWluKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgbWFpbiA9IG5ldyBNYWluKHRoaXMsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIG1haW5zLnB1c2gobWFpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihtYWlucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWluc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXHQvKipcblx0ICogR2V0IGEgY29uc3RydWN0ZWQgQWN0aW9uIG9iamVjdCBmcm9tIHRoZSBhdmFpbGFibGUgcGxheWdyb3VuZCBhY3Rpb25zLlxuXHQgKiBAcGFyYW0gYWN0aW9uIFRoZSBhY3Rpb24gZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuXG5cdCAqIEByZXR1cm5zIEFjdGlvbiBvYmplY3Rcblx0ICovXG5cdHRoaXMuZ2V0QWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgXHRpZihQbGF5Z3JvdW5kLmFjdGlvbnNbYWN0aW9uLnRhZ10gIT09IHVuZGVmaW5lZCkge1xuICAgIFx0XHRyZXR1cm4gbmV3IChQbGF5Z3JvdW5kLmFjdGlvbnNbYWN0aW9uLnRhZ10pKHNpdGUsIGFjdGlvbik7XG5cdCAgICB9XG5cblx0ICAgIGNvbnNvbGUubG9nKCdQbGF5Z3JvdW5kIGFjdGlvbiAnICsgYWN0aW9uLnRhZyArICcgZG9lcyBub3QgZXhpc3QnKTtcblx0ICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuUGxheWdyb3VuZC5BY3Rpb24gPSBBY3Rpb247XG5cblBsYXlncm91bmQuYWN0aW9ucyA9IHt9O1xuXG5QbGF5Z3JvdW5kLmFkZEFjdGlvbiA9IGZ1bmN0aW9uKGFjdGlvbikge1xuXHR0aGlzLmFjdGlvbnNbYWN0aW9uLnRhZ10gPSBhY3Rpb247XG59XG5cbkFsbEFjdGlvbnMuYWRkQWxsKFBsYXlncm91bmQpOyIsImltcG9ydCB7VG9vbHN9IGZyb20gJy4vRE9NL1Rvb2xzJztcbmltcG9ydCB7T3V0cHV0VGFifSBmcm9tICcuL1RhYnMvT3V0cHV0VGFiJztcbmltcG9ydCB7RWRpdG9yVGFifSBmcm9tICcuL1RhYnMvRWRpdG9yVGFiJztcblxuaW1wb3J0IG1lbnViYXJzIGZyb20gJy4uLy4uL2ltZy9tZW51YmFycy5wbmcnO1xuXG5cbi8qKlxuICogTWFuYWdlcyB0aGUgdGFicyBpbiB0aGUgbW9kZWxcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XG4gKiBAcGFyYW0gZWxlbWVudCBQYXJlbnQgZWxlbWVudFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBUYWJzID0gZnVuY3Rpb24obWFpbiwgZWxlbWVudCkge1xuICAgIC8vLyBUaGUgY3VycmVudGx5IGFjdGl2ZSB2aWV3L3RhYlxuICAgIHRoaXMuYWN0aXZlID0gLTE7XG5cbiAgICAvLy8gVGhlIE1haW4gb2JqZWN0XG4gICAgdGhpcy5tYWluID0gbWFpbjtcblxuICAgIC8vLyBUaGUgU2l0ZSBvYmplY3RcbiAgICB0aGlzLnNpdGUgPSBtYWluLnNpdGU7XG5cbiAgICAvLyBUaGUgY29sbGVjdGlvbiBvZiB0YWJzXG4gICAgdmFyIHRhYnMgPSBbXTtcblxuICAgIC8vXG4gICAgLy8gVGhlIHN0cnVjdHVyZTogPGRpdiBjbGFzcz1cImNsLXRhYnNcIj48dWw+PC91bD48ZGl2IGNsYXNzPVwiY2wtdmlld3NcIj48L2Rpdj48L2Rpdj5cbiAgICAvLyBkaXYudGFicyAtIEVuY2xvc3VyZSBmb3IgYWxsIHRhYnMgY29udGVudFxuICAgIC8vIHVsIC0gVGhlIHRhYnMgd2Ugc2VsZWN0IGZyb21cbiAgICAvLyB2aWV3c0RpdiAtIFRoZSB2aWV3cyB3aXRoIHRoZSB0YWIgY29udGVudHNcbiAgICAvL1xuXG4gICAgbGV0IHRhYnNEaXYgPSBudWxsLCB1bCA9IG51bGwsIHZpZXdzRGl2ID0gbnVsbDtcblxuXHQvKipcbiAgICAgKiBDcmVhdGUgdGhlIHRhYnMgc3lzdGVtXG5cdCAqIEBwYXJhbSBkaXYgVGhlIGRpdiB3ZSBwdXQgdGhlIHRhYnMgaW50b1xuXHQgKi9cblx0dGhpcy5jcmVhdGUgPSBmdW5jdGlvbihkaXYpIHtcbiAgICAgICAgLy8gQ3JlYXRlOiA8ZGl2IGNsYXNzPVwiY2wtdGFic1wiPjx1bD48L3VsPjxkaXYgY2xhc3M9XCJjbC12aWV3c1wiPjwvZGl2PjwvZGl2PlxuICAgICAgICB0YWJzRGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtcGctdGFicycpO1xuICAgICAgICB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHRhYnNEaXYuYXBwZW5kQ2hpbGQodWwpO1xuXG4gICAgICAgIHZpZXdzRGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtcGctdmlld3MnKTtcbiAgICAgICAgdGFic0Rpdi5hcHBlbmRDaGlsZCh2aWV3c0Rpdik7XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRhYnNEaXYpO1xuXG4gICAgICAgIC8vIENsZWFyIHRoZSB0YWJzIGNvbGxlY3Rpb25cbiAgICAgICAgdGFicyA9IFtdO1xuXG5cdC8vXHR0aGlzLmFkZCgncHJvZ3JhbScpO1xuLy9cdFx0dGhpcy5hZGQoJ291dHB1dCcpO1xuICAgIH1cblxuICAgIHRoaXMubG9hZCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRmb3IoY29uc3QgdGFiRGF0YSBvZiBkYXRhKSB7XG5cdFx0XHR0aGlzLmFkZCh0YWJEYXRhKTtcblx0XHR9XG4gICAgfVxuXG4gICAgdGhpcy5uZXdQYXJlbnQgPSBmdW5jdGlvbihwYW5lKSB7XG5cdFx0cGFuZS5kaXYuYXBwZW5kQ2hpbGQodGFic0Rpdik7XG4gICAgfVxuXG4gICAgdGhpcy5hZGQgPSBmdW5jdGlvbihkYXRhKSB7XG5cdFx0bGV0IHRhYiA9IG51bGw7XG5cblx0ICAgIHN3aXRjaChkYXRhLnR5cGUpIHtcblx0XHQgICAgY2FzZSAnZWRpdG9yJzpcblx0XHRcdCAgICB0YWIgPSBuZXcgRWRpdG9yVGFiKHRoaXMsIGRhdGEpO1xuXHRcdCAgICBcdGJyZWFrO1xuXG5cdFx0ICAgIGNhc2UgJ291dHB1dCc6XG5cdFx0ICAgIFx0dGFiID0gbmV3IE91dHB1dFRhYih0aGlzLCBkYXRhKTtcblx0XHQgICAgXHRicmVhaztcblx0ICAgIH1cblxuXHQgICAgaWYodGFiICE9PSBudWxsKSB7XG5cdFx0ICAgIHVsLmFwcGVuZENoaWxkKHRhYi5saSk7XG5cdFx0ICAgIHZpZXdzRGl2LmFwcGVuZENoaWxkKHRhYi52aWV3KTtcblx0XHQgICAgdGFicy5wdXNoKHt0YWI6IHRhYiwgbGk6IHRhYi5saSwgdmlldzogdGFiLnZpZXd9KTtcblxuXHRcdCAgICB0YWIuc2VsZWN0KCk7XG5cdCAgICB9XG4gICAgfVxuXG5cdC8qKlxuXHQgKiBHZXQgYSB0YWIgYnkgdGFnLlxuXHQgKiBAcGFyYW0gdGFnIFRhYiB0YWdcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHR0aGlzLmdldFRhYiA9IGZ1bmN0aW9uKHRhZykge1xuXHQgICAgZm9yKGNvbnN0IHRhYiBvZiB0YWJzKSB7XG5cdFx0ICAgIGlmKHRhYi50YWIudGFnID09PSB0YWcpIHtcblx0XHRcdCAgICByZXR1cm4gdGFiLnRhYjtcblx0XHQgICAgfVxuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnVuc2VsZWN0QWxsID0gZnVuY3Rpb24oKSB7XG5cdCAgICAvL1xuXHQgICAgLy8gQ2xlYXIgYWxsIHNlbGVjdGlvbnNcblx0ICAgIC8vXG5cdCAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuXHQgICAgXHR0YWIubGkuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcblx0ICAgIFx0dGFiLnZpZXcuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcblx0ICAgIH0pO1xuICAgIH1cblxuXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gLTE7XG4gICAgICAgIHRhYnNEaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWJzRGl2KTtcbiAgICAgICAgdGFic0RpdiA9IG51bGw7XG4gICAgICAgIHRhYnMgPSBbXTtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGUoZWxlbWVudCk7XG59O1xuIiwiaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcblxuZXhwb3J0IGNvbnN0IEVkaXRvclRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XG5cblx0Y29uc3Qgc2l0ZSA9IHRhYnMuc2l0ZTtcblxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdlZGl0b3InKTtcblx0dGhpcy52aWV3ID0gdmlldztcblxuXHRsZXQgaW5uZXJWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHZpZXcuYXBwZW5kQ2hpbGQoaW5uZXJWaWV3KTtcblxuXHRsZXQgbnVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRudW1zLmNsYXNzTGlzdC5hZGQoJ2NsLXBnLW51bXMnKTtcblx0aW5uZXJWaWV3LmFwcGVuZENoaWxkKG51bXMpO1xuXG5cdGxldCBlZGl0b3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZWRpdG9yRGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLWVkaXRvcicpO1xuXHRpbm5lclZpZXcuYXBwZW5kQ2hpbGQoZWRpdG9yRGl2KTtcblxuXHRjb25zdCBlZGl0b3IgPSBuZXcgc2l0ZS5FZGl0b3IoZWRpdG9yRGl2LCB7XG5cdFx0cmVzaXplOiAnbm9uZScsXG5cdFx0dGFiOiB0cnVlLFxuXHRcdGF1dG9JbmRlbnQ6IHRydWUsXG5cdFx0c3R5bGVzOiBudWxsXG5cdH0pO1xuXG5cdGNvbnN0IHNjcm9sbGFibGUgPSBlZGl0b3IudGV4dGFyZWE7XG5cdHNjcm9sbGFibGUuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGV2ZW50KSA9PiB7XG5cdFx0Ly8gZWRpdG9yRGl2LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICcwcHggJyArICgtcHJlLnNjcm9sbFRvcCkgKyAncHgnO1xuXHRcdG51bXMuc2Nyb2xsVG9wID0gc2Nyb2xsYWJsZS5zY3JvbGxUb3A7XG5cdH0pO1xuXG5cdHRoaXMuc2V0ID0gZnVuY3Rpb24odGV4dCkge1xuXHRcdC8vIERhdGEgZnJvbSB0aGUgZmlsZSBzeXN0ZW0gbWF5IGNvbnNpc3Qgb2YgZWl0aGVyIGp1c3Rcblx0XHQvLyB0ZXh0IChvbGQgZm9ybWF0KSBvciB0ZXh0IGluIGFuIG9iamVjdC4gVGhpcyBhbGxvd3Ncblx0XHQvLyBlaXRoZXIgY2FzZSB0byB3b3JrLlxuXHRcdGlmKHRleHQuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0ZXh0ID0gdGV4dC5kYXRhO1xuXHRcdH1cblxuXHRcdGVkaXRvci50ZXh0YXJlYS52YWx1ZSA9IHRleHQ7XG5cblx0XHRsZXQgbGluZXMgPSAwO1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKXtcblx0XHRcdGlmKHRleHRbaV0gPT09ICdcXG4nKSB7XG5cdFx0XHRcdGxpbmVzKys7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYobGluZXMgPCAxMDApIHtcblx0XHRcdGxpbmVzID0gMTAwO1xuXHRcdH1cblxuXHRcdC8vIFRoZSBleHRyYSBhZGRlZCBvbiBoZXJlIGVuc3VyZXMgd2UgZ2V0IHBhc3QgYW55IHNjcm9sbCBiYXJcblx0XHQvLyB0aGF0IG1heSB0YWtlIHVwIGhvcml6b250YWwgcm9vbS5cblx0XHRudW1zLmlubmVySFRNTCA9ICcnO1xuXHRcdGZvcihsZXQgaT0xOyBpPD1saW5lcys1OyBpKyspIHtcblx0XHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0XHRwLmlubmVyVGV4dCA9ICcnICsgaTtcblx0XHRcdG51bXMuYXBwZW5kQ2hpbGQocCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY29udGVudHMgb2YgdGhlIGVkaXRvclxuXHQgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG5cdCAqL1xuXHR0aGlzLmdldCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBlZGl0b3IudGV4dGFyZWEudmFsdWU7XG5cdH1cblxuXHR0aGlzLnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuXHRcdFRhYi5wcm90b3R5cGUuc2VsZWN0LmNhbGwodGhpcyk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGVkaXRvci50ZXh0YXJlYS5mb2N1cygpO1xuXHRcdH0sIDApO1xuXG5cdH1cblxuXHR0aGlzLnNldCgnJyk7XG59XG5cbkVkaXRvclRhYi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRhYi5wcm90b3R5cGUpO1xuRWRpdG9yVGFiLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEVkaXRvclRhYjsiLCJpbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xuXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcblxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcblx0dGhpcy52aWV3ID0gdmlldztcblxuXHRsZXQgaW5uZXJWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHZpZXcuYXBwZW5kQ2hpbGQoaW5uZXJWaWV3KTtcblxuXHRsZXQgbnVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRudW1zLmNsYXNzTGlzdC5hZGQoJ2NsLXBnLW51bXMnKTtcblx0aW5uZXJWaWV3LmFwcGVuZENoaWxkKG51bXMpO1xuXG5cdGxldCBwcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcblx0aW5uZXJWaWV3LmFwcGVuZENoaWxkKHByZSk7XG5cblx0cHJlLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4ge1xuXHRcdHByZS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnMHB4ICcgKyAoLXByZS5zY3JvbGxUb3ApICsgJ3B4Jztcblx0XHRudW1zLnNjcm9sbFRvcCA9IHByZS5zY3JvbGxUb3A7XG5cdH0pO1xuXG5cdHRoaXMuc2V0ID0gZnVuY3Rpb24odGV4dCkge1xuXHRcdHByZS5pbm5lckhUTUwgPSB0ZXh0O1xuXG5cdFx0bGV0IGxpbmVzID0gMDtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7ICsraSl7XG5cdFx0XHRpZih0ZXh0W2ldID09PSAnXFxuJykge1xuXHRcdFx0XHRsaW5lcysrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKGxpbmVzIDwgMTAwKSB7XG5cdFx0XHRsaW5lcyA9IDEwMDtcblx0XHR9XG5cblx0XHQvLyBUaGUgZXh0cmEgYWRkZWQgb24gaGVyZSBlbnN1cmVzIHdlIGdldCBwYXN0IGFueSBzY3JvbGwgYmFyXG5cdFx0Ly8gdGhhdCBtYXkgdGFrZSB1cCBob3Jpem9udGFsIHJvb20uXG5cdFx0bnVtcy5pbm5lckhUTUwgPSAnJztcblx0XHRmb3IobGV0IGk9MTsgaTw9bGluZXMrNTsgaSsrKSB7XG5cdFx0XHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdFx0cC5pbm5lclRleHQgPSAnJyArIGk7XG5cdFx0XHRudW1zLmFwcGVuZENoaWxkKHApO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHRleHQgPSBgaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcblxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtleHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge2V4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xuXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ291dHB1dCcpO1xuXHR0aGlzLnZpZXcgPSB2aWV3O1xuXHRcblx0dmlldy5pbm5lclRleHQgPSBcXGBcXGA7XG59XG5cbmltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XG5cbmV4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xuXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ291dHB1dCcpO1xuXHR0aGlzLnZpZXcgPSB2aWV3O1xuXHRcblx0dmlldy5pbm5lclRleHQgPSBcXGBcXGA7XG59XG5pbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xuXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcblxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcblx0dGhpcy52aWV3ID0gdmlldztcblx0XG5cdHZpZXcuaW5uZXJUZXh0ID0gXFxgXFxgO1xufVxuXG5PdXRwdXRUYWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUYWIucHJvdG90eXBlKTtcbk91dHB1dFRhYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPdXRwdXRUYWI7YDtcblxuXHQvL3RoaXMuc2V0KHRleHQgKyB0ZXh0ICsgdGV4dCArIHRleHQpO1xuXHR0aGlzLnNldCgnJyk7XG59XG5cbk91dHB1dFRhYi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRhYi5wcm90b3R5cGUpO1xuT3V0cHV0VGFiLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE91dHB1dFRhYjsiLCJcbmV4cG9ydCBjb25zdCBUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XG5cdHRoaXMudGFicyA9IHRhYnM7XG5cblx0dGhpcy52aWV3ID0gbnVsbDtcblx0dGhpcy50YWcgPSBkYXRhLnRhZztcblx0dGhpcy5uYW1lID0gZGF0YS5uYW1lO1xuXG5cdGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdHRoaXMubGkgPSBsaTtcblxuXHRsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0bGkuYXBwZW5kQ2hpbGQoYSk7XG5cdGEuaW5uZXJUZXh0ID0gZGF0YS5uYW1lO1xuXG5cdGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRsaS5hcHBlbmRDaGlsZChtZW51KTtcblx0Ly8gbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHQvLyBtZW51LmFwcGVuZENoaWxkKGltZyk7XG5cdC8vIGltZy5zcmMgPSBtZW51YmFycztcblxuXHRsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5zZWxlY3QoKTtcblx0fSk7XG5cblx0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5zZWxlY3QoKTtcblx0fSk7XG5cblx0dGhpcy5zZXQgPSBmdW5jdGlvbih0ZXh0KSB7fVxuXG5cdC8vXG5cdC8vIFRoZSBtZW51XG5cdC8vIE1heWJlIGFjdGl2YXRlIGxhdGVyIG9uP1xuXHQvL1xuXHQvLyBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdC8vIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnY2wtdGFiLW1lbnUnKTtcblx0Ly8gbWVudURpdi5jbGFzc0xpc3QuYWRkKCdjbC1tZW51LW9wZW4nKTtcblx0Ly8gbGkuYXBwZW5kQ2hpbGQobWVudURpdik7XG5cdC8vXG5cdC8vIGNvbnN0IG1lbnVVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cdC8vIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudVVMKTtcblx0Ly8gbWVudVVMLmlubmVySFRNTCA9XG5cdC8vIFx0JzxsaT48YSBjbGFzcz1cImVkaXQtdW5kb1wiPjxzcGFuIGNsYXNzPVwiaWNvbnMtY2wgaWNvbnMtY2wtYXJyb3dyZXR1cm50aGljay0xLXdcIj48L3NwYW4+VW5kbzwvYT48L2xpPicgK1xuXHQvLyBcdCc8bGk+PGEgY2xhc3M9XCJlZGl0LWRlbGV0ZVwiPjxzcGFuIGNsYXNzPVwiaWNvbnMtY2wgaWNvbnMtY2wtdHJhc2hcIj48L3NwYW4+RGVsZXRlPC9hPjwvbGk+Jztcblx0Ly9cblx0Ly8gY29uc3QgY29ubmVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHQvLyBtZW51RGl2LmFwcGVuZENoaWxkKGNvbm5lY3REaXYpO1xuXHQvL1xuXHQvLyBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0Ly8gY29ubmVjdERpdi5hcHBlbmRDaGlsZChpbWcpO1xuXHQvLyBpbWcuc3JjID0gbWVudWJhcnM7XG59XG5cblRhYi5wcm90b3R5cGUuc2VsZWN0ICA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLnRhYnMudW5zZWxlY3RBbGwoKTtcblxuXHR0aGlzLmxpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cdHRoaXMudmlldy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufVxuIiwiLyoqXG4gKiBEcmFnIGFuZCBkcm9wIHN1cHBvcnQgZm9yIHRoZSBwYWxldHRlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IERyYWdBbmREcm9wID0gZnVuY3Rpb24obWFpbikge1xuXG5cdGxldCBkcmFnRWxlbWVudCA9IG51bGw7IC8vIERPTSBFbGVtZW50XG5cdGxldCBkcmFnSXRlbSA9IG51bGw7ICAgIC8vIFBhbGV0dGVJdGVtXG5cdGxldCBkcm9wVmlld3MgPSBbXTsgICAgIC8vIFZpZXdcblxuXHRjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcblx0XHRcdGlmKGV2ZW50LndoaWNoID09PSAwKSB7XG5cdFx0XHRcdG1vdXNlVXAoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRtb3VzZU1vdmUoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblx0XHR9KTtcblxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHtcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuXHRcdFx0bW91c2VNb3ZlKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XG5cdFx0fSk7XG5cblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xuXHRcdFx0bW91c2VVcChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXHRcdH0pO1xuXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcblx0XHRcdG1vdXNlVXAodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcblx0XHR9KTtcblxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIChldmVudCkgPT4ge1xuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cdFx0XHRtb3VzZVVwKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XG5cdFx0fSk7XG5cdH1cblxuXHR0aGlzLmRyYWdnYWJsZSA9IChwYWxldHRlSXRlbSkgPT4ge1xuXHRcdHBhbGV0dGVJdGVtLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y2xpY2socGFsZXR0ZUl0ZW0pO1xuXG5cdFx0XHRtb3VzZU1vdmUoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblx0XHR9KTtcblxuXHRcdHBhbGV0dGVJdGVtLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNsaWNrKHBhbGV0dGVJdGVtKTtcblxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cdFx0XHRtb3VzZU1vdmUodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcblx0XHR9KTtcblx0fVxuXG5cdHRoaXMuZHJvcHBhYmxlID0gKHZpZXcsIGNhbGxiYWNrKSA9PiB7XG5cdFx0ZHJvcFZpZXdzLnB1c2goe1xuXHRcdFx0J3ZpZXcnOiB2aWV3LFxuXHRcdFx0J2NhbGxiYWNrJzogY2FsbGJhY2tcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGNsaWNrID0gKHBhbGV0dGVJdGVtKSA9PiB7XG5cdFx0Ly9cblx0XHQvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBlbGVtZW50IGFuZCBzZXQgaXQgdXAgZm9yIGRyYWdnaW5nXG5cdFx0Ly9cblx0XHRjb25zdCBjbG9uZSA9IHBhbGV0dGVJdGVtLnBhbGV0dGVJbWFnZSgpO1xuXHRcdG1haW4uZWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZSk7XG5cdFx0Y2xvbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdGNsb25lLnN0eWxlLnRvcCA9IDA7XG5cdFx0Y2xvbmUuc3R5bGUubGVmdCA9IDA7XG5cdFx0Y2xvbmUuc3R5bGUuekluZGV4ID0gMTAwO1xuXHRcdGNsb25lLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcblxuXHRcdGRyYWdJdGVtID0gcGFsZXR0ZUl0ZW07XG5cdFx0ZHJhZ0VsZW1lbnQgPSBjbG9uZTtcblx0fVxuXG5cdGNvbnN0IG1vdXNlTW92ZSA9ICh4LCB5KSA9PiB7XG5cdFx0aWYoZHJhZ0VsZW1lbnQgIT09IG51bGwpIHtcblx0XHRcdGNvbnN0IHJlY3QgPSBtYWluLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRjb25zdCBtYWluWCA9IHJlY3QubGVmdCArIG1haW4uZWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xuXHRcdFx0Y29uc3QgbWFpblkgPSByZWN0LnRvcCAgKyBtYWluLmVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG5cdFx0XHRkcmFnRWxlbWVudC5zdHlsZS5sZWZ0ID0gKHggLSBtYWluWCAtIGRyYWdFbGVtZW50LmNsaWVudFdpZHRoIC8gMikgKyAncHgnO1xuXHRcdFx0ZHJhZ0VsZW1lbnQuc3R5bGUudG9wID0gKHkgLSBtYWluWSAtIGRyYWdFbGVtZW50LmNsaWVudEhlaWdodCAvIDIpICsgJ3B4Jztcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN0IG1vdXNlVXAgPSAoeCwgeSkgPT4ge1xuXHRcdGlmKGRyYWdFbGVtZW50ICE9PSBudWxsKSB7XG5cblx0XHRcdGZvcihjb25zdCB2aWV3IG9mIGRyb3BWaWV3cykge1xuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBJcyB0aGUgdmlldyBlbmFibGVkP1xuXHRcdFx0XHQvL1xuXHRcdFx0XHRjb25zdCB2aWV3RWxlbWVudCA9IHZpZXcudmlldy5lbGVtZW50O1xuXHRcdFx0XHRpZih2aWV3RWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gRGV0ZXJtaW5lIHgseSBpbiB0aGUgY2FudmFzXG5cdFx0XHRcdC8vXG5cdFx0XHRcdGNvbnN0IHJlY3QgPSB2aWV3RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0Y29uc3Qgdmlld1ggPSByZWN0LmxlZnQgKyB2aWV3RWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xuXHRcdFx0XHRjb25zdCB2aWV3WSA9IHJlY3QudG9wICsgdmlld0VsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG5cdFx0XHRcdGlmKHggPj0gdmlld1ggJiZcblx0XHRcdFx0XHR5ID49IHZpZXdZICYmXG5cdFx0XHRcdFx0eCA8IHZpZXdYICsgKHJlY3QucmlnaHQgLSByZWN0LmxlZnQpICYmXG5cdFx0XHRcdFx0eSA8IHZpZXdZICsgKHJlY3QuYm90dG9tIC0gcmVjdC50b3ApKSB7XG5cdFx0XHRcdFx0dmlldy5jYWxsYmFjayhkcmFnSXRlbSwgeCAtIHZpZXdYLCB5IC0gdmlld1kpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG1haW4uZWxlbWVudC5yZW1vdmVDaGlsZChkcmFnRWxlbWVudCk7XG5cdFx0XHRkcmFnRWxlbWVudCA9IG51bGw7XG5cdFx0XHRkcmFnSXRlbSA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblxuXG5cdGluaXRpYWxpemUoKTtcbn0iLCIvKipcbiAqIFNpbXBsZSBEb2N1bWVudCByZWFkeSBmdW5jdGlvbiwgZXF1aXZhbGVudCB0byBqUXVlcnkncyBkb2N1bWVudCByZWFkeS5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgUmVhZHkgPSBmdW5jdGlvbigpIHtcbn1cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gd2hlbiB0aGUgZG9jdW1lbnQgaXMgcmVhZG9uLlxuICogQHBhcmFtIGZuIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBkb2N1bWVudCByZWFkeVxuICovXG5SZWFkeS5nbyA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50ID8gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpe1xuICAgICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtQbGF5Z3JvdW5kfSBmcm9tIFwiLi9QbGF5Z3JvdW5kL1BsYXlncm91bmRcIjtcblxuZXhwb3J0IGNvbnN0IFBsYXlncm91bmRGYWN0b3J5ID0gZnVuY3Rpb24oKSB7fVxuXG5QbGF5Z3JvdW5kRmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbihzaXRlKSB7XG5cblx0ZnVuY3Rpb24gaW5zdGFsbCgpIHtcblx0XHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jbC1wbGF5Z3JvdW5kJyk7XG5cdFx0Zm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG5cdFx0XHRjb25zdCBqc29uID0gSlNPTi5wYXJzZShlbGVtZW50LnRleHRDb250ZW50KTtcblx0XHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRjb25zdCBwbGF5Z3JvdW5kID0gbmV3IFBsYXlncm91bmQoc2l0ZSwgZWxlbWVudCwganNvbik7XG5cdFx0XHRwbGF5Z3JvdW5kLnN0YXJ0Tm93KCk7XG5cdFx0fVxuXHR9XG5cblx0c2l0ZS5zdGFydCggKCkgPT4ge1xuXHRcdGluc3RhbGwoKTtcblx0fSk7XG5cblxuXHRzaXRlLm1lc3NhZ2VMaXN0ZW5lcigobXNnLCBkYXRhKSA9PiB7XG5cdFx0c3dpdGNoKG1zZykge1xuXHRcdFx0Y2FzZSAnY2wtcXVpei1hZnRlci1pbnN0YWxsZWQnOlxuXHRcdFx0XHRpbnN0YWxsKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdjbC1ncmFkZXMtZ3JhZGVyLWluc3RhbGxlZCc6XG5cdFx0XHRcdGluc3RhbGwoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cdH0pO1xuXG5cdHNpdGUuUGxheWdyb3VuZCA9IFBsYXlncm91bmQ7XG59XG5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtYzI5ZTAwY2YwZS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTYuNy4xLWI5M2EyZGUwZDQtMTcwZmRiYzYzMC56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC1jMjllMDBjZjBlLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNi43LjEtYjkzYTJkZTBkNC0xNzBmZGJjNjMwLnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLWMyOWUwMGNmMGUvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS02LjcuMS1iOTNhMmRlMGQ0LTE3MGZkYmM2MzAuemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9tZW51LWNoZWNrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL2JhcnMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImRpdi5jbC1wbGF5Z3JvdW5kIGRpdi50b2FzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi4zZW0pO1xcbiAgei1pbmRleDogNDAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuNHMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAzMGVtLzIpO1xcbiAgd2lkdGg6IDMwZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC41ZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi50b2FzdC50b2FzdC1hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuNHM7XFxuICB6LWluZGV4OiA0MDA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM4MDgwODA7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzAwNzk2QjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIGEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkgYTpsaW5rLCBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgaW1nLmNoZWNrIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHdpZHRoOiAxOXB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDAuMjVlbSAyZW0gMC4yNWVtIDAuNWVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkgYSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkgYTpsaW5rLCBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkgYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMTAwJTtcXG4gIG1hcmdpbjogMXB4IDAgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCA+IGxpIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCA+IGxpIGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDhlbTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkubWVudS1kaXNhYmxlZCBhIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5jbC1wZy1tZW51LW9wZW4ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmVkaXQtbWVudSBhIHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwub3B0aW9uLW1lbnUgYSB7XFxuICB3aWR0aDogMTFlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5maWxlLW1lbnUgYSB7XFxuICB3aWR0aDogNmVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmhlbHAtbWVudSBhIHtcXG4gIHdpZHRoOiA3LjVlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCAudWwtc3RhdGUtYWN0aXZlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgbGkubWVudS1kaXZpZGVyIHtcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyOiAwIHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYud29yayB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6ICNhMDA7XFxuICBvcGFjaXR5OiAwLjA1O1xcbiAgei1pbmRleDogMjAwMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy1tYWluIHtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWZ1bGwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLXdpbmRvdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkICNhYWFhYWE7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1iZWZvcmUsIGRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGhlaWdodDogMXB4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC1nYXAtYWZ0ZXIge1xcbiAgaGVpZ2h0OiAxZW07XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6ICNkZGQ7XFxuICBib3JkZXI6IDA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogM3B4IDAgMCAycHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjI1ZW0gMC40NWVtIDA7XFxuICBtaW4td2lkdGg6IDZlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIG1hcmdpbjogMXB4IDNweCAtMXB4IDA7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgei1pbmRleDogMTg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAwLjI1ZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBvdXRsaW5lOiAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOm50aC1jaGlsZCgyKSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6bnRoLWNoaWxkKDIpIGltZyB7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgei1pbmRleDogMjI7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaS5zZWxlY3RlZCBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXdzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDI5cHg7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyBkaXYuY2wtcGctdmlldyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAyMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIGRpdi5jbC1wZy12aWV3LnNlbGVjdGVkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYygxMDAlIC0gMTdweCk7XFxuICB0b3A6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDI3cHg7XFxuICB0b3A6IDRweDtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSBkaXYgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDMwcHggMCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOGVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpLm1lbnUtZGlzYWJsZWQgYSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudS5jbC1tZW51LW9wZW4ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yb290LCBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0LCBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yaWdodCxcXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3AsIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODg4O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0IGRpdi5jbC1iYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3Age1xcbiAgZmxleDogMCAxIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODg4O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3AgZGl2LmNsLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm90dG9tOiAtNXB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHotaW5kZXg6IDI7XFxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yb290IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuZGl2LmNsLXBnLW51bXMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgd2lkdGg6IDJlbTtcXG4gIHBhZGRpbmc6IDRweCAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG59XFxuZGl2LmNsLXBnLW51bXMgcCB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDNweCAwIDA7XFxuICBib3JkZXI6IDA7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAjNzc3O1xcbn1cXG5cXG5kaXYuY2wtcGctYWJvdXQge1xcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuZGl2LmNsLXBnLWFib3V0IGZpZ3VyZSB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDIyNXB4O1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcbmRpdi5jbC1wZy1hYm91dCBkaXYuY2wtcGctYWJvdXQtZGl2IHtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYgaDEge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiBkaXYuY2wtcGctZWRpdG9yIHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiBkaXYuY2wtcGctZWRpdG9yIHRleHRhcmVhIHtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNHB4IDAgMCAzcHg7XFxuICBib3JkZXI6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3Lm91dHB1dCA+IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0ID4gZGl2IHByZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNHB4IDAgMCAzcHg7XFxuICBib3JkZXI6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fdG9hc3Quc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9tb2R1bGVzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9tb2R1bGVzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvX3BsYXlncm91bmQuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fcGxheWdyb3VuZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19tZW51LnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fd29yay5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX3RhYnMuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fcGFuZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19saW5lX251bWJlcnMuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fYWJvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fdGFiX2VkaXRvci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL190YWJfb3V0cHV0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLHVGQUFBO0VBRUEsMkRBQUE7RUFDQSxnQkNkYztFRGVkLHdCQUFBO0VBQ0EsV0NmVTtFRGdCVix5QkVZZTtFRlhmLFlFWVM7RUZYVCxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FHTEo7QUhRRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUdOSjs7QUN2QkE7RUFDRSxhQUFBO0FEMEJGOztBRTNCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkhlZ0I7RUdkaEIsaUNBQUE7RUFDQSxpQkNSZTtBSHNDakI7QUU1QkU7RUFDRSxtQkhWVztBQ3dDZjtBRTNCRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBRjZCSjtBRTNCSTtFQUNFLDJEQ3BCTTtFRHFCTixpQkNwQlc7RURxQlgsWUhDTztFR0FQLHFCQUFBO0FGNkJOO0FFMUJJO0VBQ0UsWUhKTztBQ2dDYjtBRXJCRTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FGdUJKO0FFckJJO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0FGdUJOO0FFcEJJO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUZzQk47QUVwQk07RUFDRSwyREN2REk7RUR3REosaUJDdkRTO0VEd0RULFlIbENLO0VHbUNMLHFCQUFBO0FGc0JSO0FFbkJNO0VBQ0UsWUh2Q0s7QUM0RGI7QUVkSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLHVGQUFBO0VBRUEscUJBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCSDdEWTtFRzhEWixVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBRmNOO0FFWk07RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FGY1I7QUVaUTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUZjVjtBRVRRO0VBQ0UsWUFBQTtBRldWO0FFTkk7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBRlFOO0FFTEk7RUFDRSxVQUFBO0FGT047QUVKSTtFQUNFLFdBQUE7QUZNTjtBRUhJO0VBQ0UsVUFBQTtBRktOO0FFRkk7RUFDRSxZQUFBO0FGSU47QUVESTtFQUNFLFVBQUE7QUZHTjtBRUFJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUZFTjs7QUk3SUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUpnSkY7O0FLbEpFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUxxSko7QUtsSkU7RUFFRSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBTGlKSjs7QUs1SUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBTCtJRjs7QUs1SUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FMK0lGOztBSzVJQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUwrSUY7O0FLNUlBO0VBQ0UsV0FBQTtBTCtJRjs7QU0xTUU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxpQkhKYTtFR01iLFVBQUE7RUFDQSxnQlBJYztFT0hkLFNBQUE7QU40TUo7QU0xTUk7RUFDRSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBTjRNTjtBTXpNTTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkhyQlM7RUdzQlQsK0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JQZFM7RU9lVCx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBTjJNUjtBTXpNUTtFQUNFLDJESHBDRTtFR3FDRixxQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZUDFCQztFTzJCRCxVQUFBO0VBQ0EsaUJBQUE7QU4yTVY7QU14TVE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QU4wTVY7QU14TVU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBTjBNWjtBTXJNTTtFQUNFLGlCUDVDa0I7RU82Q2xCLFdBQUE7QU51TVI7QU1yTVE7RUFDRSxZUC9DVTtBQ3NQcEI7QU1sTUk7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FOb01OO0FNak1JO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBTm1NTjtBTWhNSTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtBTmtNTjtBTTlMRTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsdUZBQUE7QU5nTUo7QU05TEk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJQakdZO0FDaVNsQjtBTTlMTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBTmdNUjtBTXpMSTtFQUVFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLHlCUHJIWTtFT3NIWixVQUFBO0VBQ0EseUJBQUE7QU55TE47QU10TE07RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FOd0xSO0FNdExRO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBTndMVjtBTW5MUTtFQUNFLFlBQUE7QU5xTFY7QU03S0U7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBTitLSjs7QU94VkU7O0VBRUUsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QVAyVko7QU94VkU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBUDBWSjtBT3hWSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV1R0Qlc7RVN1QlgsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QVAwVk47QU9uVkU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FQcVZKO0FPblZJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWVQzQ1c7RVM0Q1gsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FQcVZOO0FPalZFO0VBRUUsV0FBQTtFQUNBLFlBQUE7QVBrVko7QU8vVUU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QVBpVko7O0FRbFpBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBUm9aRjtBUWxaRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FSb1pKOztBU3JhQTtFQUNFLHNCQUFBO0FUd2FGO0FTdGFFO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QVR3YUo7QVNyYUU7RUFDRSxZQUFBO0FUdWFKO0FTcmFJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBVHVhTjtBU3BhSTtFQUNFLGtCQUFBO0FUc2FOOztBVXhiRTtFQUNFLGdCQUFBO0FWMmJKO0FVeGJJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FWMGJOO0FVeGJNO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBVjBiUjtBVXhiUTtFQUNFLGlCQUFBO0VBRUEsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBRUEsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBVnViVjs7QVczZEU7RUFDRSxnQkFBQTtBWDhkSjtBVzVkSTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBWDhkTjtBVzVkTTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbURBQUE7RUFDQSxpQkFBQTtFQUVBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBWDZkUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaXYuY2wtcGxheWdyb3VuZFxcbntcXG4gICR0b2FzdC10cmFuc2l0aW9uLXRpbWU6IDAuNHM7XFxuXFxuICBkaXYudG9hc3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG5cXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi4zZW0pO1xcbiAgICB6LWluZGV4OiA0MDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAkdG9hc3QtdHJhbnNpdGlvbi10aW1lIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAkdG9hc3QtdHJhbnNpdGlvbi10aW1lLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG5cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogJHRvYXN0LWZvbnQtc2l6ZTtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAjeyR0b2FzdC13aWR0aH0vMik7XFxuICAgIHdpZHRoOiAkdG9hc3Qtd2lkdGg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0b2FzdC1iYWNrZ3JvdW5kO1xcbiAgICBjb2xvcjogJHRvYXN0LXRleHQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgfVxcblxcbiAgZGl2LnRvYXN0LnRvYXN0LWFjdGl2ZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgJHRvYXN0LXRyYW5zaXRpb24tdGltZTtcXG4gICAgei1pbmRleDogNDAwO1xcblxcbiAgfVxcbn1cIixcIiR0b2FzdC1mb250LXNpemU6IDEuMWVtO1xcbiR0b2FzdC13aWR0aDogMzBlbTtcXG5cXG4kZHJhZy1iYXItd2lkdGg6IDEwcHg7XFxuXFxuJHRhYi1jb3JuZXItcmFkaXVzOiA1cHg7XFxuXCIsXCIvLyBUaGUgbWFqb3IgY29sb3JzXFxuLy8gV2UgaGF2ZSBhIHByaW1hcnkgY29sb3IsIHR3byBzZWNvbmRhcnkgY29sb3JzLCBhbmQgYSBjb21wbGVtZW50YXJ5IGNvbG9yLlxcbiRkYXJrLXByaW1hcnk6ICMwMDc5NkI7XFxuJHByaW1hcnk6ICMwMDk2ODg7XFxuJGxpZ2h0LXByaW1hcnk6ICNCMkRGREI7XFxuJGFjY2VudDogIzYwN0Q4QjtcXG4kcHJpbWFyeS10ZXh0OiAjMjEyMTIxO1xcbiRkaXZpZGVyLWNvbG9yOiAjQkRCREJEO1xcbiRzZWNvbmRhcnktdGV4dDogIzYwNjA2MDtcXG5cXG4kY29tcDogI2M0MTQyNTtcXG4kd2luZG93LWJvcmRlcnM6ICNhYWFhYWE7XFxuXFxuXFxuXFxuJHRhYnMtYmFja2dyb3VuZDogI2RkZDtcXG4kdGFiLWJhY2tncm91bmQ6ICNjY2M7XFxuJHRhYi10ZXh0OiBibGFjaztcXG4kdGFiLXNlbGVjdGVkLWJhY2tncm91bmQ6IHdoaXRlO1xcbiR0YWItc2VsZWN0ZWQtdGV4dDogYmxhY2s7XFxuXFxuJG1lbnUtZm9jdXM6ICRkYXJrLXByaW1hcnk7XFxuJG1lbnUtYmFja2dyb3VuZDogI2YwZjNmMDtcXG4kbWVudS1jb2xvcjogYmxhY2s7XFxuJG1lbnUtZGl2aWRlci1jb2xvcjogYmxhY2s7XFxuJG1lbnUtYm9yZGVyLWNvbG9yOiAjODA4MDgwO1xcblxcbiRyZXNpemVyOiAkZGFyay1wcmltYXJ5O1xcblxcbiR0b2FzdC1iYWNrZ3JvdW5kOiAjMTUxNTE1O1xcbiR0b2FzdC10ZXh0OiB3aGl0ZTtcIixcImRpdi5jbC1wbGF5Z3JvdW5kIGRpdi50b2FzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi4zZW0pO1xcbiAgei1pbmRleDogNDAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuNHMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAzMGVtLzIpO1xcbiAgd2lkdGg6IDMwZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC41ZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi50b2FzdC50b2FzdC1hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuNHM7XFxuICB6LWluZGV4OiA0MDA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM4MDgwODA7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzAwNzk2QjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIGEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkgYTpsaW5rLCBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgaW1nLmNoZWNrIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHdpZHRoOiAxOXB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgY29udGVudDogdXJsKFxcXCIuLi8uLi9pbWcvbWVudS1jaGVjay5wbmdcXFwiKTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDAuMjVlbSAyZW0gMC4yNWVtIDAuNWVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkgYSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkgYTpsaW5rLCBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkgYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMTAwJTtcXG4gIG1hcmdpbjogMXB4IDAgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCA+IGxpIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCA+IGxpIGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDhlbTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkubWVudS1kaXNhYmxlZCBhIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5jbC1wZy1tZW51LW9wZW4ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmVkaXQtbWVudSBhIHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwub3B0aW9uLW1lbnUgYSB7XFxuICB3aWR0aDogMTFlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5maWxlLW1lbnUgYSB7XFxuICB3aWR0aDogNmVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmhlbHAtbWVudSBhIHtcXG4gIHdpZHRoOiA3LjVlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCAudWwtc3RhdGUtYWN0aXZlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgbGkubWVudS1kaXZpZGVyIHtcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyOiAwIHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYud29yayB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6ICNhMDA7XFxuICBvcGFjaXR5OiAwLjA1O1xcbiAgei1pbmRleDogMjAwMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy1tYWluIHtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWZ1bGwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLXdpbmRvdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkICNhYWFhYWE7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1iZWZvcmUsIGRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGhlaWdodDogMXB4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC1nYXAtYWZ0ZXIge1xcbiAgaGVpZ2h0OiAxZW07XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6ICNkZGQ7XFxuICBib3JkZXI6IDA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogM3B4IDAgMCAycHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjI1ZW0gMC40NWVtIDA7XFxuICBtaW4td2lkdGg6IDZlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIG1hcmdpbjogMXB4IDNweCAtMXB4IDA7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgei1pbmRleDogMTg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAwLjI1ZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBvdXRsaW5lOiAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOm50aC1jaGlsZCgyKSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6bnRoLWNoaWxkKDIpIGltZyB7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgei1pbmRleDogMjI7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaS5zZWxlY3RlZCBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXdzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDI5cHg7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyBkaXYuY2wtcGctdmlldyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAyMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIGRpdi5jbC1wZy12aWV3LnNlbGVjdGVkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYygxMDAlIC0gMTdweCk7XFxuICB0b3A6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDI3cHg7XFxuICB0b3A6IDRweDtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSBkaXYgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDMwcHggMCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOGVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpLm1lbnUtZGlzYWJsZWQgYSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudS5jbC1tZW51LW9wZW4ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yb290LCBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0LCBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yaWdodCxcXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3AsIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODg4O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0IGRpdi5jbC1iYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3Age1xcbiAgZmxleDogMCAxIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODg4O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3AgZGl2LmNsLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm90dG9tOiAtNXB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHotaW5kZXg6IDI7XFxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yb290IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuZGl2LmNsLXBnLW51bXMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgd2lkdGg6IDJlbTtcXG4gIHBhZGRpbmc6IDRweCAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG59XFxuZGl2LmNsLXBnLW51bXMgcCB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDNweCAwIDA7XFxuICBib3JkZXI6IDA7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAjNzc3O1xcbn1cXG5cXG5kaXYuY2wtcGctYWJvdXQge1xcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuZGl2LmNsLXBnLWFib3V0IGZpZ3VyZSB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDIyNXB4O1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcbmRpdi5jbC1wZy1hYm91dCBkaXYuY2wtcGctYWJvdXQtZGl2IHtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYgaDEge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiBkaXYuY2wtcGctZWRpdG9yIHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiBkaXYuY2wtcGctZWRpdG9yIHRleHRhcmVhIHtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNHB4IDAgMCAzcHg7XFxuICBib3JkZXI6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3Lm91dHB1dCA+IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0ID4gZGl2IHByZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi8uLi9pbWcvYmFycy5wbmdcXFwiKTtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNHB4IDAgMCAzcHg7XFxuICBib3JkZXI6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG59XCIsXCJkaXYuY2wtcGxheWdyb3VuZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIixcImRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRtZW51LWJhY2tncm91bmQ7XFxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM4MDgwODA7XFxuICBmb250LXNpemU6ICRtZW51LWZvbnQtc2l6ZTtcXG5cXG4gIGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogJG1lbnUtZm9jdXM7XFxuICB9XFxuXFxuICBsaSB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGEge1xcbiAgICAgIGZvbnQtZmFtaWx5OiAkbWVudS1mb250O1xcbiAgICAgIGZvbnQtc2l6ZTogJG1lbnUtZm9udC1zaXplO1xcbiAgICAgIGNvbG9yOiAkbWVudS1jb2xvcjtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgYTpsaW5rLCBhOnZpc2l0ZWQge1xcbiAgICAgIGNvbG9yOiAkbWVudS1jb2xvcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgLy9cXG4gIC8vIFRvcCBsZXZlbCBtZW51XFxuICAvL1xcbiAgPiB1bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIGltZy5jaGVjayB7XFxuICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgICAgIHdpZHRoOiAxOXB4O1xcbiAgICAgIGhlaWdodDogMTZweDtcXG4gICAgICBjb250ZW50OiB1cmwoXFxcIi4uLy4uL2ltZy9tZW51LWNoZWNrLnBuZ1xcXCIpO1xcbiAgICB9XFxuXFxuICAgID4gbGkge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAuMjVlbSAyZW0gMC4yNWVtIDAuNWVtO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICBhIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkbWVudS1mb250O1xcbiAgICAgICAgZm9udC1zaXplOiAkbWVudS1mb250LXNpemU7XFxuICAgICAgICBjb2xvcjogJG1lbnUtY29sb3I7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgIGE6bGluaywgYTp2aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiAkbWVudS1jb2xvcjtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy9cXG4gICAgLy8gRHJvcC1kb3duIG1lbnVcXG4gICAgLy9cXG4gICAgdWwge1xcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTtcXG4gICAgICB6LWluZGV4OiAtMTtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxuXFxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICAgIC8vIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IDEwMCU7XFxuICAgICAgbWFyZ2luOiAxcHggMCAwIDA7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1lbnUtYmFja2dyb3VuZDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRtZW51LWJvcmRlci1jb2xvcjtcXG4gICAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xcblxcbiAgICAgID4gbGkge1xcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICAgICAgYSB7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgd2lkdGg6IDhlbTtcXG4gICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgPiBsaS5tZW51LWRpc2FibGVkIHtcXG4gICAgICAgIGEge1xcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHVsLmNsLXBnLW1lbnUtb3BlbiB7XFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHotaW5kZXg6IDEwMDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4ycztcXG4gICAgfVxcblxcbiAgICB1bC5lZGl0LW1lbnUgYSB7XFxuICAgICAgd2lkdGg6IDZlbTtcXG4gICAgfVxcblxcbiAgICB1bC5vcHRpb24tbWVudSBhIHtcXG4gICAgICB3aWR0aDogMTFlbTtcXG4gICAgfVxcblxcbiAgICB1bC5maWxlLW1lbnUgYSB7XFxuICAgICAgd2lkdGg6IDZlbTtcXG4gICAgfVxcblxcbiAgICB1bC5oZWxwLW1lbnUgYSB7XFxuICAgICAgd2lkdGg6IDcuNWVtO1xcbiAgICB9XFxuXFxuICAgIC51bC1zdGF0ZS1hY3RpdmUge1xcbiAgICAgIGNvbG9yOiByZWQ7XFxuICAgIH1cXG5cXG4gICAgbGkubWVudS1kaXZpZGVyIHtcXG4gICAgICBoZWlnaHQ6IDFweDtcXG4gICAgICBib3JkZXI6IDAgc29saWQgJG1lbnUtZGl2aWRlci1jb2xvcjtcXG4gICAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuXCIsXCIkbWVudS1mb250OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbiRtZW51LWZvbnQtc2l6ZTogMC45MHJlbTtcXG5cXG4kdGFicy1mb250OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbiR0YWJzLWZvbnQtc2l6ZTogMC44MHJlbTtcIixcImRpdi5jbC1wbGF5Z3JvdW5kIGRpdi53b3JrIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuXCIsXCJkaXYuY2wtcGxheWdyb3VuZCB7XFxuXFxuICBkaXYuY2wtcGctb3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjYTAwO1xcbiAgICBvcGFjaXR5OiAwLjA1O1xcbiAgICB6LWluZGV4OiAyMDAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgZGl2LmNsLXBnLW1haW4ge1xcbiAgICAvLyBOb3JtYWxpemF0aW9uc1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC1mdWxsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC13aW5kb3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAkd2luZG93LWJvcmRlcnM7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1iZWZvcmUsIGRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGhlaWdodDogMXB4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC1nYXAtYWZ0ZXIge1xcbiAgaGVpZ2h0OiAxZW07XFxufVxcblxcblwiLFwiXFxuZGl2LmNsLXBsYXlncm91bmQge1xcbiAgZGl2LmNsLXBnLXRhYnMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgZm9udC1zaXplOiAkdGFicy1mb250LXNpemU7XFxuXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQ6ICR0YWJzLWJhY2tncm91bmQ7XFxuICAgIGJvcmRlcjogMDtcXG5cXG4gICAgPnVsIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogM3B4IDAgMCAycHg7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxuXFxuICAgICAgPmxpIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIGZvbnQtc2l6ZTogJHRhYnMtZm9udC1zaXplO1xcbiAgICAgICAgcGFkZGluZzogMC4yNWVtIDAuMjVlbSAwLjQ1ZW0gMDtcXG4gICAgICAgIG1pbi13aWR0aDogNmVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZDogJHRhYi1iYWNrZ3JvdW5kO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHRhYi1jb3JuZXItcmFkaXVzICR0YWItY29ybmVyLXJhZGl1cyAwIDA7XFxuICAgICAgICBtYXJnaW46IDFweCAzcHggLTFweCAwO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIHotaW5kZXg6IDE4O1xcblxcbiAgICAgICAgYTpmaXJzdC1jaGlsZCB7XFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGFicy1mb250O1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgIGNvbG9yOiAkdGFiLXRleHQ7XFxuICAgICAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYTpudGgtY2hpbGQoMikge1xcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcXG4gICAgICAgICAgcGFkZGluZzogMDtcXG5cXG4gICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgPmxpLnNlbGVjdGVkIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICR0YWItc2VsZWN0ZWQtYmFja2dyb3VuZDtcXG4gICAgICAgIHotaW5kZXg6IDIyO1xcblxcbiAgICAgICAgYSB7XFxuICAgICAgICAgIGNvbG9yOiAkdGFiLXNlbGVjdGVkLXRleHQ7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGRpdi5jbC1wZy12aWV3cyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAyOXB4O1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICB6LWluZGV4OiAyMDtcXG4gICAgfVxcblxcbiAgICBkaXYuY2wtcGctdmlldyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICB6LWluZGV4OiAyMDtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgIH1cXG5cXG4gICAgZGl2LmNsLXBnLXZpZXcuc2VsZWN0ZWQge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gICAgfVxcbiAgfVxcblxcbiAgZGl2LmNsLXRhYi1tZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSAxN3B4KTtcXG4gICAgdG9wOiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG5cXG4gICAgZGl2IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDE0cHg7XFxuICAgICAgaGVpZ2h0OiAyN3B4O1xcbiAgICAgIHRvcDogNHB4O1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1lbnUtYm9yZGVyLWNvbG9yO1xcbiAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1lbnUtYmFja2dyb3VuZDtcXG5cXG4gICAgICBpbWcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvL1xcbiAgICAvLyBUYWIgZHJvcC1kb3duIG1lbnVcXG4gICAgLy9cXG4gICAgdWwge1xcblxcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICAgIG1hcmdpbjogMzBweCAwIDAgMDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1iYWNrZ3JvdW5kO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1lbnUtYm9yZGVyLWNvbG9yO1xcbiAgICAgIC8vYm9yZGVyLXRvcC13aWR0aDogMDtcXG5cXG4gICAgICA+IGxpIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgICAgIGEge1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgIHdpZHRoOiA4ZW07XFxuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgID4gbGkubWVudS1kaXNhYmxlZCB7XFxuICAgICAgICBhIHtcXG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcblxcblxcbiAgZGl2LmNsLXRhYi1tZW51LmNsLW1lbnUtb3BlbiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xcbiAgfVxcbn1cIixcIkB1c2UgXFxcInNhc3M6bWF0aFxcXCI7XFxuXFxuZGl2LmNsLXBsYXlncm91bmQge1xcbiAgZGl2LmNsLXBsYXlncm91bmQtcm9vdCwgZGl2LmNsLXBsYXlncm91bmQtbGVmdCwgZGl2LmNsLXBsYXlncm91bmQtcmlnaHQsXFxuICBkaXYuY2wtcGxheWdyb3VuZC10b3AsIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgfVxcblxcbiAgZGl2LmNsLXBsYXlncm91bmQtbGVmdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleDogMCAxIGF1dG87XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4ODg7XFxuXFxuICAgIGRpdi5jbC1iYXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICByaWdodDogLTVweDsgLy8gbWF0aC5kaXYoLSRkcmFnLWJhci13aWR0aCwgMik7XFxuICAgICAgd2lkdGg6ICRkcmFnLWJhci13aWR0aDtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICB6LWluZGV4OiAxMDA7XFxuICAgICAgY3Vyc29yOiBldy1yZXNpemU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLXJpZ2h0IHtcXG4gIH1cXG5cXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCB7XFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7XFxuXFxuICAgIGRpdi5jbC1iYXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgYm90dG9tOiAtNXB4OyAvLyBtYXRoLmRpdigtJGRyYWctYmFyLXdpZHRoLCAyKTtcXG4gICAgICBoZWlnaHQ6ICRkcmFnLWJhci13aWR0aDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICB6LWluZGV4OiAyO1xcbiAgICAgIGN1cnNvcjogbnMtcmVzaXplO1xcbiAgICB9XFxuICB9XFxuXFxuICBkaXYuY2wtcGxheWdyb3VuZC1ib3R0b20ge1xcbiAgICAvLyBib3JkZXItbGVmdDogNXB4IHNvbGlkICMxODQ1M2I7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICBkaXYuY2wtcGxheWdyb3VuZC1yb290IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICB9XFxufVxcblwiLFwiZGl2LmNsLXBnLW51bXMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxleDogMCAwIGF1dG87XFxuXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgd2lkdGg6IDJlbTtcXG4gIHBhZGRpbmc6IDRweCAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG5cXG4gIHAge1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICBsaW5lLWhlaWdodDogMTZweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDNweCAwIDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGNvbG9yOiAjNzc3O1xcbiAgfVxcbn1cXG5cIixcImRpdi5jbC1wZy1hYm91dCB7XFxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcblxcbiAgZmlndXJlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjI1cHg7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgfVxcblxcbiAgZGl2LmNsLXBnLWFib3V0LWRpdiB7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG5cXG4gICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgfVxcblxcbn1cIixcImRpdi5jbC1wbGF5Z3JvdW5kIHtcXG4gIGRpdi5jbC1wZy12aWV3LmVkaXRvciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIC8vIGlubmVyRGl2XFxuICAgID4gZGl2IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAgICAgIGRpdi5jbC1wZy1lZGl0b3Ige1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgICAgIHRleHRhcmVhIHtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuXFxuICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgcGFkZGluZzogNHB4IDAgMCAzcHg7XFxuICAgICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgICAgICAgIG92ZXJmbG93LXdyYXA6IG5vcm1hbFxcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcImRpdi5jbC1wbGF5Z3JvdW5kIHtcXG4gIGRpdi5jbC1wZy12aWV3Lm91dHB1dCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgID4gZGl2IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAgICAgIHByZSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9pbWcvYmFycy5wbmcnKTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcblxcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogNHB4IDAgMCAzcHg7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB9XFxuXFxuXFxuICAgIH1cXG5cXG5cXG5cXG5cXG5cXG4gIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTQ1Zjc1YmNiNGIvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4xLTRiYmI2ZWM3N2YtNDcwZmVlZjY4MC56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtNDVmNzViY2I0Yi8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMy4zLjEtNGJiYjZlYzc3Zi00NzBmZWVmNjgwLnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtNDVmNzViY2I0Yi8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMy4zLjEtNGJiYjZlYzc3Zi00NzBmZWVmNjgwLnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTQ1Zjc1YmNiNGIvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4xLTRiYmI2ZWM3N2YtNDcwZmVlZjY4MC56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtNDVmNzViY2I0Yi8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMy4zLjEtNGJiYjZlYzc3Zi00NzBmZWVmNjgwLnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtNDVmNzViY2I0Yi8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMy4zLjEtNGJiYjZlYzc3Zi00NzBmZWVmNjgwLnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLWMyOWUwMGNmMGUvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS02LjcuMS1iOTNhMmRlMGQ0LTE3MGZkYmM2MzAuemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy55YXJuL2NhY2hlL3Jlc29sdmUtdXJsLWxvYWRlci1ucG0tNS4wLjAtOWI0NDEwNjdjOS02ZDQ4MzczM2E0LnppcC9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Nhc3MtbG9hZGVyLXZpcnR1YWwtMjhjMGU3YjQ3NC8wL2NhY2hlL3Nhc3MtbG9hZGVyLW5wbS0xMy4wLjItY2E2OGFmZDczZC02MzA2NzEyY2M3LnppcC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXS51c2VbM10hLi9fcGxheWdyb3VuZC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLWMyOWUwMGNmMGUvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS02LjcuMS1iOTNhMmRlMGQ0LTE3MGZkYmM2MzAuemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy55YXJuL2NhY2hlL3Jlc29sdmUtdXJsLWxvYWRlci1ucG0tNS4wLjAtOWI0NDEwNjdjOS02ZDQ4MzczM2E0LnppcC9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Nhc3MtbG9hZGVyLXZpcnR1YWwtMjhjMGU3YjQ3NC8wL2NhY2hlL3Nhc3MtbG9hZGVyLW5wbS0xMy4wLjItY2E2OGFmZDczZC02MzA2NzEyY2M3LnppcC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXS51c2VbM10hLi9fcGxheWdyb3VuZC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiUGxheWdyb3VuZFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb3Vyc2VsaWJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY291cnNlbGliXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImNvbW1vblwiLFwidmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vdmVuZG9yL2NsL3BsYXlncm91bmQvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJQbGF5Z3JvdW5kIiwiUGxheWdyb3VuZEZhY3RvcnkiLCJkZWZhdWx0IiwiY3JlYXRlIiwiU2l0ZSIsInNpdGUiLCJBY3Rpb24iLCJEaWFsb2ciLCJwYWNrYWdlanNvbiIsIkFib3V0QWN0aW9uIiwib3B0aW9ucyIsImNhbGwiLCJtYWluIiwicHJvdG90eXBlIiwiY29udGVudCIsInJvb3QiLCJ2ZXJzaW9uIiwiZGlhbG9nIiwidGl0bGUiLCJPYmplY3QiLCJjb25zdHJ1Y3RvciIsInRhZyIsImdldFNvdXJjZXMiLCJzb3VyY2VzIiwidW5kZWZpbmVkIiwic291cmNlIiwidGFiIiwiZ2V0VGFiIiwibmFtZSIsImRhdGEiLCJnZXQiLCJTYXZlQWN0aW9uIiwiQWxsQWN0aW9ucyIsImFkZEFsbCIsImFkZEFjdGlvbiIsInBhcmFtcyIsImFwcFRhZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwiYXBpIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJoYXNFcnJvciIsInRvYXN0IiwiZXJyb3IiLCJUb29scyIsImlzVmlzaWJsZSIsImVsZW0iLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImdldENsaWVudFJlY3RzIiwibGVuZ3RoIiwiYWRkQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkQ2xhc3NlcyIsImNsYXNzZXMiLCJzcGxpdCIsImZvckVhY2giLCJjbHMiLCJyZW1vdmVDbGFzcyIsInJlZ0V4IiwiUmVnRXhwIiwicmVwbGFjZSIsImNyZWF0ZUNsYXNzZWREaXYiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhZGRDb250ZW50IiwiaXNTdHJpbmciLCJpbm5lckhUTUwiLCJpc0VsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInZhbCIsInRvU3RyaW5nIiwibm9kZVZhbHVlIiwib2Zmc2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJzY3JvbGxMZWZ0Iiwid2luZG93IiwicGFnZVhPZmZzZXQiLCJ0b3AiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImNoaWxkIiwidGFnTmFtZSIsImNoaWxkTm9kZXMiLCJub2RlIiwiVG9hc3QiLCJkZWZhdWx0RHVyYXRpb24iLCJpbnRlclRvYXN0RGVsYXkiLCJtZXNzYWdlcyIsImFjdGl2ZSIsInNob3ciLCJtZXNzYWdlIiwic3BsaWNlIiwibXNnIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRpbWUiLCJwdXNoIiwianNvbkVycm9ycyIsImpzb25BcGkiLCJlcnJvcnMiLCJSZXNpemVyIiwiTWVudSIsIkRyYWdBbmREcm9wIiwiUGFuZSIsIk1haW4iLCJwbGF5Z3JvdW5kIiwibWVudSIsInRhYnMiLCJkaXZPdmVybGF5IiwiZGl2V29yayIsImluaXRpYWxpemUiLCJzdHlsZSIsImRpc3BsYXkiLCJoZWlnaHQiLCJjb250YWlucyIsImhhbmRsZSIsImRyYWdBbmREcm9wIiwicm9vdFBhbmUiLCJsb2FkIiwicGFuZSIsIlN0cmluZyIsInBhcnNlIiwic2V0IiwibmV3VGFiIiwibW9kYWwiLCJuYXYiLCJ1bCIsIm1lbnVzIiwiYWN0aW9uIiwidG9wTEkiLCJhIiwiaW5uZXJUZXh0IiwiZ2V0QWN0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdWJVTCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwib3BlbiIsImNsb3NlQWxsIiwic3ViTWVudSIsInN1YkxJIiwiY2xvc2VMaXN0ZW5lciIsInRhcmdldCIsInBhcmVudE5vZGUiLCJsaSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmFibGUiLCJzZWwiLCJxdWVyeVNlbGVjdG9yIiwiZmluZCIsImNsaWNrIiwiY2xvc3VyZSIsIk9wdGlvbnMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJnZXRBUEkiLCJtb2RlIiwib2JqIiwibW9kZU9iaiIsInVybCIsImNvbnRlbnRUeXBlIiwiZXh0cmEiLCJUYWJzIiwicGFyZW50IiwibWluU3BsaXQiLCJtYXhTcGxpdCIsImNoaWxkMSIsImNoaWxkMiIsImhvcml6b250YWxTcGxpdCIsImhvcml6IiwicGVyY2VudGFnZSIsImhvcml6b250YWwiLCJjaGlsZDFEYXRhIiwiY2hpbGQyRGF0YSIsImZsZXhEaXJlY3Rpb24iLCJiYXIiLCJzdGFydERyYWdnaW5nIiwicGFnZVgiLCJwYWdlWSIsIm1vdXNlTW92ZSIsIm1vdXNlVXAiLCJ0b3VjaCIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2hNb3ZlIiwidG91Y2hFbmQiLCJ0b3VjaENhbmNlbCIsInN0YXJ0WCIsInN0YXJ0WSIsIngiLCJ5IiwiZW5kRHJhZ2dpbmciLCJkcmFnZ2luZyIsIm1haW5YIiwid2lkIiwicmlnaHQiLCJwZXIiLCJtYWluWSIsImhpdCIsImJvdHRvbSIsIndoaWNoIiwid2lkdGgiLCJjb2xsZWN0aW9uIiwiUmVhZHkiLCJQQUNLQUdFIiwicmVxdWlyZSIsIm1haW5zIiwic3RhcnQiLCJzdGFydE5vdyIsImdvIiwiRWxlbWVudCIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJhY3Rpb25zIiwiT3V0cHV0VGFiIiwiRWRpdG9yVGFiIiwibWVudWJhcnMiLCJ0YWJzRGl2Iiwidmlld3NEaXYiLCJ0YWJEYXRhIiwibmV3UGFyZW50IiwidmlldyIsInNlbGVjdCIsInVuc2VsZWN0QWxsIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiVGFiIiwiaW5uZXJWaWV3IiwibnVtcyIsImVkaXRvckRpdiIsImVkaXRvciIsIkVkaXRvciIsInJlc2l6ZSIsImF1dG9JbmRlbnQiLCJzdHlsZXMiLCJzY3JvbGxhYmxlIiwidGV4dGFyZWEiLCJ0ZXh0IiwidmFsdWUiLCJsaW5lcyIsInAiLCJmb2N1cyIsInByZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRyYWdFbGVtZW50IiwiZHJhZ0l0ZW0iLCJkcm9wVmlld3MiLCJkcmFnZ2FibGUiLCJwYWxldHRlSXRlbSIsImRyb3BwYWJsZSIsImNhbGxiYWNrIiwiY2xvbmUiLCJwYWxldHRlSW1hZ2UiLCJwb3NpdGlvbiIsInpJbmRleCIsImN1cnNvciIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwidmlld0VsZW1lbnQiLCJ2aWV3WCIsInZpZXdZIiwiZm4iLCJhdHRhY2hFdmVudCIsInJlYWR5U3RhdGUiLCJpbnN0YWxsIiwianNvbiIsInRleHRDb250ZW50IiwibWVzc2FnZUxpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==
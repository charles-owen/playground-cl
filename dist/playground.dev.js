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

/***/ "./.yarn/cache/@babel-runtime-npm-7.18.9-28ca6b5f61-36dd736bab.zip/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***************************************************************************************************************************!*\
  !*** ./.yarn/cache/@babel-runtime-npm-7.18.9-28ca6b5f61-36dd736bab.zip/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWdyb3VuZC5kZXYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBQywyRUFBQSxDQUF5QkcsSUFBSSxDQUFDQyxJQUE5QjtBQUVBRCxJQUFJLENBQUNKLFVBQUwsR0FBa0JBLGlFQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFFTyxJQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFTSixJQUFULEVBQWVLLE9BQWYsRUFBd0I7RUFDbERKLGdEQUFBLENBQVksSUFBWixFQUFrQkQsSUFBbEIsRUFBd0JLLE9BQXhCOztFQUVBLGFBQVUsVUFBU0UsSUFBVCxFQUFlO0lBQ3hCTixnRUFBQSxDQUF5QixJQUF6QixFQUErQk0sSUFBL0IsRUFEd0IsQ0FHeEI7O0lBQ0EsSUFBSUUsT0FBTyxrQ0FDT1QsSUFBSSxDQUFDVSxJQURaLGdNQUlDUCxrREFKRCxtREFBWDtJQU9BLElBQU1TLE1BQU0sR0FBRyxJQUFJVixpREFBSixDQUFXO01BQ3pCVyxLQUFLLEVBQUUsc0JBRGtCO01BRXpCSixPQUFPLEVBQUVBLE9BRmdCO01BR3pCLFlBQVk7SUFIYSxDQUFYLENBQWY7RUFNQSxDQWpCRDtBQWtCQSxDQXJCTTtBQXVCUEwsV0FBVyxDQUFDSSxTQUFaLEdBQXdCTSxNQUFNLENBQUNoQixNQUFQLENBQWNHLHFEQUFkLENBQXhCO0FBQ0FHLFdBQVcsQ0FBQ0ksU0FBWixDQUFzQk8sV0FBdEIsR0FBb0NYLFdBQXBDO0FBRUFBLFdBQVcsQ0FBQ1ksR0FBWixHQUFrQixPQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTWYsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBU0QsSUFBVCxFQUFlSyxPQUFmLEVBQXdCO0VBRTdDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNDLEtBQUtZLFVBQUwsR0FBa0IsWUFBVztJQUM1QjtJQUNBLElBQU1DLE9BQU8sR0FBRyxFQUFoQjs7SUFFQSxJQUFHYixPQUFPLENBQUNhLE9BQVIsS0FBb0JDLFNBQXBCLElBQWlDZCxPQUFPLENBQUNhLE9BQVIsS0FBb0IsSUFBeEQsRUFBOEQ7TUFDN0QsT0FBT0EsT0FBUDtJQUNBOztJQU4yQiwyQ0FRUmIsT0FBTyxDQUFDYSxPQVJBO0lBQUE7O0lBQUE7TUFRNUIsb0RBQXFDO1FBQUEsSUFBM0JFLE1BQTJCO1FBQ3BDLElBQU1DLEdBQUcsR0FBRyxLQUFLZCxJQUFMLENBQVVlLE1BQVYsQ0FBaUJGLE1BQWpCLENBQVo7O1FBQ0EsSUFBR0MsR0FBRyxLQUFLLElBQVgsRUFBaUI7VUFDaEJILE9BQU8sQ0FBQ0UsTUFBRCxDQUFQLEdBQWtCO1lBQUNHLElBQUksRUFBRUYsR0FBRyxDQUFDRSxJQUFYO1lBQWlCQyxJQUFJLEVBQUVILEdBQUcsQ0FBQ0ksR0FBSjtVQUF2QixDQUFsQjtRQUNBO01BQ0Q7SUFiMkI7TUFBQTtJQUFBO01BQUE7SUFBQTs7SUFlNUIsT0FBT1AsT0FBUDtFQUNBLENBaEJEO0FBbUJBLENBM0JNOztBQTZCUGpCLE1BQU0sQ0FBQ08sU0FBUCxTQUFzQixVQUFTRCxJQUFULEVBQWU7RUFDcEMsS0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsQ0FGRDs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBRU8sSUFBTW9CLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVcsQ0FBRSxDQUFoQzs7QUFFUEEsVUFBVSxDQUFDQyxNQUFYLEdBQW9CLFVBQVNqQyxVQUFULEVBQXFCO0VBQ3hDQSxVQUFVLENBQUNrQyxTQUFYLENBQXFCSCxtREFBckI7RUFDQS9CLFVBQVUsQ0FBQ2tDLFNBQVgsQ0FBcUJ6QixxREFBckI7QUFDQSxDQUhEOzs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUVPLElBQU1zQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFTMUIsSUFBVCxFQUFlSyxPQUFmLEVBQXdCO0VBQ2pESixnREFBQSxDQUFZLElBQVosRUFBa0JELElBQWxCLEVBQXdCSyxPQUF4Qjs7RUFFQSxhQUFVLFVBQVNFLElBQVQsRUFBZTtJQUFBOztJQUN4Qk4sZ0VBQUEsQ0FBeUIsSUFBekIsRUFBK0JNLElBQS9CLEVBRHdCLENBR3hCOztJQUNBLElBQU1XLE9BQU8sR0FBRyxLQUFLRCxVQUFMLEVBQWhCO0lBRUEsSUFBTWEsTUFBTSxHQUFHO01BQ2RDLE1BQU0sRUFBRTFCLE9BQU8sQ0FBQzBCLE1BREY7TUFFZFIsSUFBSSxFQUFFbEIsT0FBTyxDQUFDa0IsSUFGQTtNQUdkQyxJQUFJLEVBQUVRLElBQUksQ0FBQ0MsU0FBTCxDQUFlZixPQUFmLENBSFE7TUFJZGdCLElBQUksRUFBRTtJQUpRLENBQWY7SUFPQWxDLElBQUksQ0FBQ21DLEdBQUwsQ0FBU0MsSUFBVCxDQUFjLHNCQUFkLEVBQXNDTixNQUF0QyxFQUNFTyxJQURGLENBQ08sVUFBQ0MsUUFBRCxFQUFjO01BQ25CQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjs7TUFDQSxJQUFJLENBQUNBLFFBQVEsQ0FBQ0csUUFBVCxFQUFMLEVBQTBCO1FBQ3pCekMsSUFBSSxDQUFDMEMsS0FBTCxDQUFXLEtBQVgsRUFBaUIsOEJBQWpCO01BQ0EsQ0FGRCxNQUVPO1FBQ04xQyxJQUFJLENBQUMwQyxLQUFMLENBQVcsS0FBWCxFQUFpQkosUUFBakI7TUFDQTtJQUVELENBVEYsV0FVUSxVQUFDSyxLQUFELEVBQVc7TUFDakIzQyxJQUFJLENBQUMwQyxLQUFMLENBQVcsS0FBWCxFQUFpQkMsS0FBakI7SUFDQSxDQVpGO0VBYUEsQ0ExQkQ7QUEyQkEsQ0E5Qk07QUFnQ1BqQixVQUFVLENBQUNsQixTQUFYLEdBQXVCTSxNQUFNLENBQUNoQixNQUFQLENBQWNHLHFEQUFkLENBQXZCO0FBQ0F5QixVQUFVLENBQUNsQixTQUFYLENBQXFCTyxXQUFyQixHQUFtQ1csVUFBbkM7QUFFQUEsVUFBVSxDQUFDVixHQUFYLEdBQWlCLE1BQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTTRCLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQVcsQ0FFL0IsQ0FGTTtBQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQUEsS0FBSyxDQUFDQyxTQUFOLEdBQWtCLFVBQVVDLElBQVYsRUFBaUI7RUFDL0IsT0FBTyxDQUFDLEVBQUdBLElBQUksQ0FBQ0MsV0FBTCxJQUFvQkQsSUFBSSxDQUFDRSxZQUF6QixJQUF5Q0YsSUFBSSxDQUFDRyxjQUFMLEdBQXNCQyxNQUFsRSxDQUFSO0FBQ0gsQ0FGRDtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBTixLQUFLLENBQUNPLFFBQU4sR0FBaUIsVUFBU0MsT0FBVCxFQUFrQkMsU0FBbEIsRUFBNkI7RUFDMUMsSUFBSUQsT0FBTyxDQUFDRSxTQUFaLEVBQ0lGLE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0JGLFNBQXRCLEVBREosS0FHSUQsT0FBTyxDQUFDQyxTQUFSLElBQXFCLE1BQU1BLFNBQTNCO0FBQ1AsQ0FMRDs7QUFPQVQsS0FBSyxDQUFDWSxVQUFOLEdBQW1CLFVBQVNKLE9BQVQsRUFBa0JLLE9BQWxCLEVBQTJCO0VBQzFDLElBQUdBLE9BQU8sS0FBS3RDLFNBQVosSUFBeUJzQyxPQUFPLEtBQUssSUFBeEMsRUFBOEM7SUFDMUM7RUFDSDs7RUFFREEsT0FBTyxDQUFDQyxLQUFSLENBQWMsR0FBZCxFQUFtQkMsT0FBbkIsQ0FBMkIsVUFBQ0MsR0FBRCxFQUFTO0lBQ2hDaEIsS0FBSyxDQUFDTyxRQUFOLENBQWVDLE9BQWYsRUFBd0JRLEdBQXhCO0VBQ0gsQ0FGRDtBQUdILENBUkQ7O0FBVUFoQixLQUFLLENBQUNpQixXQUFOLEdBQW9CLFVBQVNULE9BQVQsRUFBa0JDLFNBQWxCLEVBQTZCO0VBQzdDLElBQUlTLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVcsUUFBUVYsU0FBUixHQUFvQixLQUEvQixFQUFzQyxHQUF0QyxDQUFaO0VBQ0FELE9BQU8sQ0FBQ0MsU0FBUixHQUFvQkQsT0FBTyxDQUFDQyxTQUFSLENBQWtCVyxPQUFsQixDQUEwQkYsS0FBMUIsRUFBaUMsRUFBakMsQ0FBcEI7QUFDSCxDQUhEO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQWxCLEtBQUssQ0FBQ3FCLGdCQUFOLEdBQXlCLFVBQVNaLFNBQVQsRUFBb0I1QyxPQUFwQixFQUE2QjtFQUNsRCxJQUFJeUQsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtFQUNBeEIsS0FBSyxDQUFDTyxRQUFOLENBQWVlLEdBQWYsRUFBb0JiLFNBQXBCOztFQUNBLElBQUc1QyxPQUFPLEtBQUtVLFNBQWYsRUFBMEI7SUFDekJ5QixLQUFLLENBQUN5QixVQUFOLENBQWlCSCxHQUFqQixFQUFzQnpELE9BQXRCO0VBQ0E7O0VBQ0QsT0FBT3lELEdBQVA7QUFDSCxDQVBEO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0F0QixLQUFLLENBQUN5QixVQUFOLEdBQW1CLFVBQVNqQixPQUFULEVBQWtCM0MsT0FBbEIsRUFBMkI7RUFDMUMsSUFBR21DLEtBQUssQ0FBQzBCLFFBQU4sQ0FBZTdELE9BQWYsQ0FBSCxFQUE0QjtJQUN4QjJDLE9BQU8sQ0FBQ21CLFNBQVIsSUFBcUI5RCxPQUFyQjtFQUNILENBRkQsTUFFTyxJQUFHbUMsS0FBSyxDQUFDNEIsU0FBTixDQUFnQi9ELE9BQWhCLENBQUgsRUFBNkI7SUFDaEMyQyxPQUFPLENBQUNxQixXQUFSLENBQW9CaEUsT0FBcEI7RUFDSDtBQUNKLENBTkQ7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQW1DLEtBQUssQ0FBQzBCLFFBQU4sR0FBaUIsVUFBU0ksR0FBVCxFQUFjO0VBQzNCLE9BQU8sT0FBT0EsR0FBUCxLQUFlLFFBQWYsSUFBNkIsQ0FBQyxDQUFDQSxHQUFGLElBQVMsMEVBQU9BLEdBQVAsTUFBZSxRQUF6QixJQUFzQzVELE1BQU0sQ0FBQ04sU0FBUCxDQUFpQm1FLFFBQWpCLENBQTBCckUsSUFBMUIsQ0FBK0JvRSxHQUEvQixNQUF3QyxpQkFBakg7QUFDSCxDQUZEO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E5QixLQUFLLENBQUM0QixTQUFOLEdBQWtCLFVBQVNFLEdBQVQsRUFBYztFQUM1QixPQUFPQSxHQUFHLEtBQUt2RCxTQUFSLElBQXFCdUQsR0FBRyxLQUFLLElBQTdCLElBQXFDQSxHQUFHLENBQUNFLFNBQUosS0FBa0J6RCxTQUE5RDtBQUNILENBRkQ7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0F5QixLQUFLLENBQUNpQyxNQUFOLEdBQWUsVUFBU3pCLE9BQVQsRUFBa0I7RUFDaEMsSUFBTTBCLElBQUksR0FBRzFCLE9BQU8sQ0FBQzJCLHFCQUFSLEVBQWI7RUFDQSxPQUFPO0lBQ0hDLElBQUksRUFBRUYsSUFBSSxDQUFDRSxJQUFMLEdBQVk1QixPQUFPLENBQUM2QixVQUFwQixHQUFpQ0MsTUFBTSxDQUFDQyxXQUQzQztJQUVBQyxHQUFHLEVBQUVOLElBQUksQ0FBQ00sR0FBTCxHQUFXaEMsT0FBTyxDQUFDaUMsU0FBbkIsR0FBK0JILE1BQU0sQ0FBQ0k7RUFGM0MsQ0FBUDtBQUlBLENBTkQ7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBMUMsS0FBSyxDQUFDMkMsS0FBTixHQUFjLFVBQVNuQyxPQUFULEVBQWtCb0MsT0FBbEIsRUFBMkI7RUFBQSwyQ0FDdEJwQyxPQUFPLENBQUNxQyxVQURjO0VBQUE7O0VBQUE7SUFDeEMsb0RBQXNDO01BQUEsSUFBNUJDLElBQTRCOztNQUNsQyxJQUFHQSxJQUFJLENBQUNGLE9BQUwsS0FBaUJBLE9BQXBCLEVBQTZCO1FBQ3pCLE9BQU9FLElBQVA7TUFDQTtJQUNQO0VBTHVDO0lBQUE7RUFBQTtJQUFBO0VBQUE7O0VBT3hDLE9BQU8sSUFBUDtBQUNBLENBUkQ7Ozs7Ozs7Ozs7Ozs7OztBQ2hIQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFTcEYsSUFBVCxFQUFlO0VBQUE7O0VBQ25DO0VBQ0EsS0FBS3FGLGVBQUwsR0FBdUIsSUFBdkI7RUFFQTs7RUFDQSxLQUFLQyxlQUFMLEdBQXVCLEdBQXZCO0VBRUcsSUFBSUMsUUFBUSxHQUFHLEVBQWYsQ0FQZ0MsQ0FPWjs7RUFDcEIsSUFBSUMsTUFBTSxHQUFHLEtBQWIsQ0FSZ0MsQ0FRWjs7RUFFdkIsSUFBSTNDLE9BQU8sR0FBRyxJQUFkO0VBRUE7QUFDRDtBQUNBO0FBQ0E7O0VBQ0ksS0FBS3RELE1BQUwsR0FBYyxVQUFDb0UsR0FBRCxFQUFTO0lBQ3pCZCxPQUFPLEdBQUdSLDhEQUFBLENBQXVCLE9BQXZCLENBQVY7SUFDQXNCLEdBQUcsQ0FBQ08sV0FBSixDQUFnQnJCLE9BQWhCO0lBRUFBLE9BQU8sQ0FBQ21CLFNBQVIsR0FBb0IsU0FBcEI7RUFDRyxDQUxEOztFQU9BLElBQU15QixJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0lBQ2xCLElBQUdGLFFBQVEsQ0FBQzVDLE1BQVQsR0FBa0IsQ0FBbEIsSUFBdUIsQ0FBQzZDLE1BQTNCLEVBQW1DO01BQ2xDO01BQ0EsSUFBSUUsT0FBTyxHQUFHSCxRQUFRLENBQUMsQ0FBRCxDQUF0QjtNQUNNQSxRQUFRLENBQUNJLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7TUFDQTlDLE9BQU8sQ0FBQ21CLFNBQVIsR0FBb0IwQixPQUFPLENBQUNFLEdBQTVCLENBSjRCLENBTTVCOztNQUNOL0MsT0FBTyxDQUFDRSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixjQUF0QjtNQUNBd0MsTUFBTSxHQUFHLElBQVQsQ0FSa0MsQ0FVbEM7O01BQ0FLLFVBQVUsQ0FBQyxZQUFNO1FBQ2hCO1FBQ0FoRCxPQUFPLENBQUNFLFNBQVIsQ0FBa0IrQyxNQUFsQixDQUF5QixjQUF6QixFQUZnQixDQUloQjs7UUFDQUQsVUFBVSxDQUFDLFlBQU07VUFDaEJMLE1BQU0sR0FBRyxLQUFUO1VBQ0FDLElBQUk7UUFDSixDQUhTLEVBR1AsS0FBSSxDQUFDSCxlQUhFLENBQVY7TUFJQSxDQVRTLEVBU1BJLE9BQU8sQ0FBQ0ssSUFURCxDQUFWO0lBVUc7RUFDSixDQXZCRDtFQXlCSDtBQUNEO0FBQ0E7QUFDQTtBQUNBOzs7RUFDQyxLQUFLTCxPQUFMLEdBQWUsVUFBU0UsR0FBVCxFQUFjRyxJQUFkLEVBQW9CO0lBQzVCLElBQUdBLElBQUksS0FBS25GLFNBQVosRUFBdUI7TUFDbkJtRixJQUFJLEdBQUcsS0FBS1YsZUFBWjtJQUNIOztJQUVERSxRQUFRLENBQUNTLElBQVQsQ0FBYztNQUFDSixHQUFHLEVBQUVBLEdBQU47TUFBV0csSUFBSSxFQUFFQTtJQUFqQixDQUFkO0lBQ0FOLElBQUk7RUFDUCxDQVBKO0VBU0E7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7O0VBQ0MsS0FBS1EsVUFBTCxHQUFrQixVQUFTQyxPQUFULEVBQWtCO0lBQUE7O0lBQzdCLElBQUdBLE9BQU8sQ0FBQ0MsTUFBUixPQUFxQixJQUF4QixFQUE4QjtNQUMxQkQsT0FBTyxDQUFDQyxNQUFSLEdBQWlCL0MsT0FBakIsQ0FBeUIsVUFBQ2hCLEtBQUQsRUFBUztRQUM5QixNQUFJLENBQUNzRCxPQUFMLENBQWEsbUJBQW1CdEQsS0FBSyxDQUFDOUIsS0FBdEMsRUFBNkMsSUFBN0M7TUFDSCxDQUZEO01BSUEsT0FBTyxJQUFQO0lBQ0g7O0lBRUQsT0FBTyxLQUFQO0VBQ0gsQ0FWSjtBQVdBLENBOUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JQO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNa0csSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBU0MsVUFBVCxFQUFxQjVELE9BQXJCLEVBQThCO0VBQzlDLEtBQUs0RCxVQUFMLEdBQWtCQSxVQUFsQjtFQUNBLEtBQUtoSCxJQUFMLEdBQVlnSCxVQUFVLENBQUNoSCxJQUF2QjtFQUNBLEtBQUtvRCxPQUFMLEdBQWVBLE9BQWY7RUFDQSxLQUFLL0MsT0FBTCxHQUFlMkcsVUFBVSxDQUFDM0csT0FBMUIsQ0FKOEMsQ0FNOUM7O0VBQ0EsS0FBSzZELEdBQUwsR0FBVyxJQUFYO0VBRUEsSUFBSTdELE9BQU8sR0FBRzJHLFVBQVUsQ0FBQzNHLE9BQXpCLENBVDhDLENBVzlDOztFQUNBLElBQUk0RyxJQUFJLEdBQUMsSUFBVDtFQUFBLElBQWVDLElBQUksR0FBQyxJQUFwQixDQVo4QyxDQWM5Qzs7RUFDQSxJQUFJQyxVQUFVLEdBQUcsSUFBakI7RUFBQSxJQUF1QkMsT0FBTyxHQUFDLElBQS9COztFQUVBLEtBQUtDLFVBQUwsR0FBa0IsWUFBVztJQUU1QmpFLE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsZUFBdEI7SUFDR0gsT0FBTyxDQUFDbUIsU0FBUixHQUFvQixFQUFwQjtJQUVBbkIsT0FBTyxDQUFDa0UsS0FBUixDQUFjQyxPQUFkLEdBQXdCLE9BQXhCOztJQUVILElBQUdsSCxPQUFPLENBQUNtSCxNQUFSLEtBQW1CLElBQXRCLEVBQTRCO01BQzNCcEUsT0FBTyxDQUFDa0UsS0FBUixDQUFjRSxNQUFkLEdBQXVCbkgsT0FBTyxDQUFDbUgsTUFBL0I7SUFDQTs7SUFFRSxRQUFPbkgsT0FBTyxDQUFDa0gsT0FBZjtNQUNJLEtBQUssTUFBTDtRQUNJbkUsT0FBTyxDQUFDRSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixvQkFBdEI7UUFDQTs7TUFFSjtRQUNDSCxPQUFPLENBQUNFLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLHNCQUF0QjtRQUNHO0lBUFI7O0lBVUEsSUFBR2xELE9BQU8sQ0FBQ2tILE9BQVIsS0FBb0IsUUFBdkIsRUFBaUM7TUFDN0I7TUFDQTtNQUNBO01BQ0E7TUFDQSxJQUFHLENBQUNuRSxPQUFPLENBQUNFLFNBQVIsQ0FBa0JtRSxRQUFsQixDQUEyQixTQUEzQixDQUFKLEVBQTJDO1FBQ3ZDLElBQUlkLGtEQUFKLENBQVl2RCxPQUFaLEVBQXFCO1VBQ2pCc0UsTUFBTSxFQUFFO1FBRFMsQ0FBckI7TUFHSDtJQUNKOztJQUVELEtBQUtDLFdBQUwsR0FBbUIsSUFBSWQsd0RBQUosQ0FBZ0IsSUFBaEIsQ0FBbkIsQ0FqQ3lCLENBbUN6QjtJQUNBO0lBQ0E7O0lBQ0EsSUFBR3hHLE9BQU8sQ0FBQ2tILE9BQVIsS0FBb0IsUUFBcEIsSUFBZ0NsSCxPQUFPLENBQUNrSCxPQUFSLEtBQW9CLE1BQXZELEVBQStEO01BQzNEO01BQ0E7TUFDQTtNQUNBO01BRUE7TUFDQSxLQUFLckQsR0FBTCxHQUFXdEIsOERBQUEsQ0FBdUIsWUFBdkIsQ0FBWDtNQUNBLEtBQUtRLE9BQUwsQ0FBYXFCLFdBQWIsQ0FBeUIsS0FBS1AsR0FBOUIsRUFSMkQsQ0FVM0Q7TUFDQTtNQUNBOztNQUNBK0MsSUFBSSxHQUFHLElBQUlMLHVDQUFKLENBQVMsSUFBVCxDQUFQO01BQ0EsS0FBS0ssSUFBTCxHQUFZQSxJQUFaLENBZDJELENBZ0IzRDtNQUNBO01BQ0E7TUFDQTs7TUFDQUcsT0FBTyxHQUFHeEUsOERBQUEsQ0FBdUIsTUFBdkIsQ0FBVjtNQUNBLEtBQUtzQixHQUFMLENBQVNPLFdBQVQsQ0FBcUIyQyxPQUFyQixFQXJCMkQsQ0F3QnBFO01BQ007TUFDQTs7TUFDQSxLQUFLUSxRQUFMLEdBQWdCLElBQUlkLHVDQUFKLENBQVMsSUFBVCxFQUFlTSxPQUFmLEVBQXdCLElBQXhCLEVBQThCLElBQTlCLENBQWhCO01BQ0EsS0FBS1EsUUFBTCxDQUFjQyxJQUFkLENBQW1CeEgsT0FBTyxDQUFDeUgsSUFBM0IsRUE1QjhELENBOEI5RDtNQUNBO01BQ0E7TUFDQTs7TUFDQVgsVUFBVSxHQUFHdkUsOERBQUEsQ0FBdUIsZUFBdkIsQ0FBYjtNQUNBLEtBQUtzQixHQUFMLENBQVNPLFdBQVQsQ0FBcUIwQyxVQUFyQjtNQUVHLEtBQUt6RSxLQUFMLEdBQWEsSUFBSWlELGtEQUFKLENBQVUsSUFBVixDQUFiO01BQ0EsS0FBS2pELEtBQUwsQ0FBVzVDLE1BQVgsQ0FBa0IsS0FBS29FLEdBQXZCLEVBdEMyRCxDQXdDM0Q7TUFDQTtNQUNBOztNQUNBLElBQUc3RCxPQUFPLENBQUN3SCxJQUFSLEtBQWlCLElBQXBCLEVBQTBCO1FBQ3RCLElBQUlBLElBQUksR0FBR3hILE9BQU8sQ0FBQ3dILElBQW5COztRQUNBLElBQUcsT0FBT0EsSUFBUCxLQUFnQixRQUFoQixJQUE0QkEsSUFBSSxZQUFZRSxNQUEvQyxFQUF1RDtVQUNuREYsSUFBSSxHQUFHN0YsSUFBSSxDQUFDZ0csS0FBTCxDQUFXSCxJQUFYLENBQVA7UUFDSDs7UUFFRCxLQUFJLElBQU03RyxHQUFWLElBQWlCNkcsSUFBakIsRUFBdUI7VUFDbkIsSUFBTXhHLEdBQUcsR0FBRyxLQUFLQyxNQUFMLENBQVlOLEdBQVosQ0FBWjs7VUFDQSxJQUFHSyxHQUFHLEtBQUssSUFBWCxFQUFpQjtZQUNiQSxHQUFHLENBQUM0RyxHQUFKLENBQVFKLElBQUksQ0FBQzdHLEdBQUQsQ0FBWjtVQUNIO1FBQ0o7TUFDSjtJQUNKO0VBRUosQ0FoR0Q7O0VBa0dBLEtBQUtNLE1BQUwsR0FBYyxVQUFTTixHQUFULEVBQWM7SUFDeEIsT0FBTyxLQUFLNEcsUUFBTCxDQUFjdEcsTUFBZCxDQUFxQk4sR0FBckIsQ0FBUDtFQUNILENBRkQ7RUFLQTtBQUNKO0FBQ0E7OztFQUNJLEtBQUtrSCxNQUFMLEdBQWMsWUFBVyxDQUV4QixDQUZEO0VBTUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7O0VBQ0ksS0FBS0MsS0FBTCxHQUFhLFVBQVNBLEtBQVQsRUFBZ0I7SUFDekIsSUFBR0EsS0FBSCxFQUFVO01BQ05oQixVQUFVLENBQUNHLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE9BQTNCO0lBQ0gsQ0FGRCxNQUVPO01BQ0hKLFVBQVUsQ0FBQ0csS0FBWCxDQUFpQkMsT0FBakIsR0FBMkIsTUFBM0I7SUFDSDtFQUNKLENBTkQ7O0VBU0EsS0FBS0YsVUFBTDtBQUNILENBaEpNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NiUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1ULElBQUksR0FBRyxTQUFQQSxJQUFPLENBQVNyRyxJQUFULEVBQWU7RUFBQTs7RUFDbEMsSUFBTUYsT0FBTyxHQUFHRSxJQUFJLENBQUNGLE9BQXJCLENBRGtDLENBSS9CO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7O0VBQ0EsS0FBSytILEdBQUwsR0FBVyxJQUFYO0VBQ0EsS0FBS0MsRUFBTCxHQUFVLElBQVY7O0VBRUEsSUFBTWhCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07SUFDckI7SUFDQTtJQUNBO0lBQ0EsS0FBSSxDQUFDZSxHQUFMLEdBQVdqRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtJQUNBeEIsc0RBQUEsQ0FBZSxLQUFJLENBQUN3RixHQUFwQixFQUF5QixlQUF6QjtJQUNBN0gsSUFBSSxDQUFDMkQsR0FBTCxDQUFTTyxXQUFULENBQXFCLEtBQUksQ0FBQzJELEdBQTFCO0lBRUEsSUFBTUMsRUFBRSxHQUFHbEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVg7O0lBQ0EsS0FBSSxDQUFDZ0UsR0FBTCxDQUFTM0QsV0FBVCxDQUFxQjRELEVBQXJCOztJQUNBLEtBQUksQ0FBQ0EsRUFBTCxHQUFVQSxFQUFWO0lBRUEsSUFBTUMsS0FBSyxHQUFHakksT0FBTyxDQUFDaUksS0FBdEI7SUFDQUEsS0FBSyxDQUFDL0IsSUFBTixDQUFXO01BQ1ZoRixJQUFJLEVBQUUsTUFESTtNQUVWK0csS0FBSyxFQUFFLENBQ047UUFBQy9HLElBQUksRUFBRSxPQUFQO1FBQWdCZ0gsTUFBTSxFQUFFO1VBQUN2SCxHQUFHLEVBQUU7UUFBTjtNQUF4QixDQURNO0lBRkcsQ0FBWDs7SUFicUIsMkNBb0JIc0gsS0FwQkc7SUFBQTs7SUFBQTtNQUFBO1FBQUEsSUFvQlhyQixJQXBCVztRQXFCcEIsSUFBTXVCLEtBQUssR0FBR3JFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO1FBQ0FpRSxFQUFFLENBQUM1RCxXQUFILENBQWUrRCxLQUFmO1FBRUEsSUFBTUMsQ0FBQyxHQUFHdEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQVY7UUFDQW9FLEtBQUssQ0FBQy9ELFdBQU4sQ0FBa0JnRSxDQUFsQjtRQUNBQSxDQUFDLENBQUNDLFNBQUYsR0FBY3pCLElBQUksQ0FBQzFGLElBQW5COztRQUVBLElBQUcwRixJQUFJLENBQUNzQixNQUFMLEtBQWdCcEgsU0FBbkIsRUFBOEI7VUFBQTtZQUM3QjtZQUNBLElBQU1vSCxNQUFNLEdBQUdoSSxJQUFJLENBQUN5RyxVQUFMLENBQWdCMkIsU0FBaEIsQ0FBMEIxQixJQUFJLENBQUNzQixNQUEvQixDQUFmOztZQUNBLHdCQUFxQixDQUFDRSxDQUFELEVBQUlELEtBQUosQ0FBckIsMEJBQWlDO2NBQTdCLElBQU1wRixPQUFPLFdBQWI7Y0FDSEEsT0FBTyxDQUFDd0YsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBQ0MsS0FBRCxFQUFXO2dCQUM1Q0EsS0FBSyxDQUFDQyxjQUFOO2dCQUNBRCxLQUFLLENBQUNFLGVBQU47Z0JBQ0FSLE1BQU0sTUFBTixDQUFVaEksSUFBVjtjQUNBLENBSkQ7WUFLQTtVQVQ0QjtRQVU3Qjs7UUFFRCxJQUFHMEcsSUFBSSxDQUFDcUIsS0FBTCxLQUFlbkgsU0FBbEIsRUFBNkI7VUFBQTtZQUM1QjtZQUNBLElBQU02SCxLQUFLLEdBQUc3RSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBZDtZQUNBb0UsS0FBSyxDQUFDL0QsV0FBTixDQUFrQnVFLEtBQWxCOztZQUVBLDBCQUFxQixDQUFDUCxDQUFELEVBQUlELEtBQUosQ0FBckIsNkJBQWlDO2NBQTdCLElBQU1wRixPQUFPLGFBQWI7Y0FDSEEsT0FBTyxDQUFDd0YsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBQ0MsS0FBRCxFQUFXO2dCQUM1Q0EsS0FBSyxDQUFDQyxjQUFOO2dCQUNBRCxLQUFLLENBQUNFLGVBQU47O2dCQUVBLElBQUdFLGdCQUFnQixDQUFDRCxLQUFELENBQWhCLENBQXdCRSxnQkFBeEIsQ0FBeUMsWUFBekMsTUFBMkQsUUFBOUQsRUFBd0U7a0JBQ3ZFQyxJQUFJLENBQUNYLEtBQUQsQ0FBSjtnQkFDQSxDQUZELE1BRU87a0JBQ047a0JBQ0EsS0FBSSxDQUFDWSxRQUFMO2dCQUNBO2NBRUQsQ0FYRDtZQVlBOztZQWxCMkIsNENBb0JQbkMsSUFBSSxDQUFDcUIsS0FwQkU7WUFBQTs7WUFBQTtjQW9CNUIsdURBQWlDO2dCQUFBLElBQXZCZSxPQUF1QjtnQkFDaEMsSUFBTUMsS0FBSyxHQUFHbkYsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7Z0JBQ0E0RSxLQUFLLENBQUN2RSxXQUFOLENBQWtCNkUsS0FBbEI7O2dCQUVBLElBQU1iLEVBQUMsR0FBR3RFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFWOztnQkFDQWtGLEtBQUssQ0FBQzdFLFdBQU4sQ0FBa0JnRSxFQUFsQjtnQkFDQUEsRUFBQyxDQUFDQyxTQUFGLEdBQWNXLE9BQU8sQ0FBQzlILElBQXRCOztnQkFFQSxJQUFHOEgsT0FBTyxDQUFDZCxNQUFSLEtBQW1CcEgsU0FBdEIsRUFBaUM7a0JBQUE7b0JBQ2hDO29CQUNBLElBQU1vSCxNQUFNLEdBQUdoSSxJQUFJLENBQUN5RyxVQUFMLENBQWdCMkIsU0FBaEIsQ0FBMEJVLE9BQU8sQ0FBQ2QsTUFBbEMsQ0FBZjs7b0JBQ0EsSUFBR0EsTUFBTSxLQUFLLElBQWQsRUFBb0I7c0JBQ25CLDBCQUFxQixDQUFDRSxFQUFELEVBQUlELEtBQUosQ0FBckIsNkJBQWlDO3dCQUE3QixJQUFNcEYsUUFBTyxhQUFiOzt3QkFDSEEsUUFBTyxDQUFDd0YsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBQ0MsS0FBRCxFQUFXOzBCQUM1Q0EsS0FBSyxDQUFDQyxjQUFOOzBCQUNBRCxLQUFLLENBQUNFLGVBQU47OzBCQUNBLEtBQUksQ0FBQ0ssUUFBTDs7MEJBQ0FiLE1BQU0sTUFBTixDQUFVaEksSUFBVjt3QkFDQSxDQUxEO3NCQU1BO29CQUNEO2tCQVorQjtnQkFjaEM7Y0FDRDtZQTNDMkI7Y0FBQTtZQUFBO2NBQUE7WUFBQTtVQUFBO1FBNEM1QjtNQXBGbUI7O01Bb0JyQixvREFBeUI7UUFBQTtNQWtFeEIsQ0F0Rm9CLENBd0ZyQjtNQUNBO01BQ0E7TUFDSDtNQUVBO01BQ0c7TUFDQTtNQUNBO01BRUE7TUFFQTtNQUNIO01BQ0E7TUFFQTtNQUNBO01BQ0g7TUFDRztNQUNHO01BQ0E7TUFDQTtNQUNBO01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDTjtNQUNNO01BQ0E7TUFDQTtNQUNIO01BQ0g7TUFDRztNQUNBO01BQ0g7TUFDRztNQUNHO01BQ0E7TUFDQTtNQUNBO01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTs7SUEzSXFCO01BQUE7SUFBQTtNQUFBO0lBQUE7RUE0SXhCLENBNUlEO0VBOElIO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7OztFQUNDLElBQU1nSixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNWLEtBQUQsRUFBVztJQUMxQjtJQUNBLElBQUluRCxJQUFJLEdBQUdtRCxLQUFLLENBQUNXLE1BQU4sQ0FBYUMsVUFBeEI7O0lBQ0EsT0FBTy9ELElBQUksS0FBSyxJQUFoQixFQUFzQkEsSUFBSSxHQUFHQSxJQUFJLENBQUMrRCxVQUFsQyxFQUE4QztNQUMxQyxJQUFHL0QsSUFBSSxLQUFLLEtBQUksQ0FBQzBDLEdBQWpCLEVBQXNCO1FBQ2xCO01BQ0g7SUFDSjs7SUFFSixLQUFJLENBQUNnQixRQUFMO0VBQ0EsQ0FWSixDQW5La0MsQ0ErSy9COzs7RUFDQSxJQUFNRCxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDTyxFQUFELEVBQVE7SUFDakI7SUFEaUIsNENBRUMsS0FBSSxDQUFDckIsRUFBTCxDQUFRNUMsVUFGVDtJQUFBOztJQUFBO01BRWpCLHVEQUFzQztRQUFBLElBQTVCQyxJQUE0Qjs7UUFDbEMsSUFBR0EsSUFBSSxDQUFDRixPQUFMLEtBQWlCLElBQXBCLEVBQTBCO1VBQ3pCLElBQU02QyxHQUFFLEdBQUd6RixtREFBQSxDQUFZOEMsSUFBWixFQUFrQixJQUFsQixDQUFYOztVQUNHLElBQUcyQyxHQUFFLEtBQUssSUFBVixFQUFnQixDQUNiO1VBQ0Y7UUFDSjtNQUNKLENBVGdCLENBV3BCOztJQVhvQjtNQUFBO0lBQUE7TUFBQTtJQUFBOztJQVlwQixJQUFNQSxFQUFFLEdBQUd6RixtREFBQSxDQUFZOEcsRUFBWixFQUFnQixJQUFoQixDQUFYOztJQUNBLElBQUdyQixFQUFFLEtBQUssSUFBVixFQUFnQjtNQUNmQSxFQUFFLENBQUMvRSxTQUFILENBQWFDLEdBQWIsQ0FBaUIsaUJBQWpCO0lBQ0E7O0lBRURZLFFBQVEsQ0FBQ3lFLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DVyxhQUFuQztJQUNHcEYsUUFBUSxDQUFDeUUsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNXLGFBQXZDO0VBQ0gsQ0FuQkQ7RUFxQkE7OztFQUNBLEtBQUtILFFBQUwsR0FBZ0IsWUFBTTtJQUFBLDRDQUNILEtBQUksQ0FBQ2YsRUFBTCxDQUFRNUMsVUFETDtJQUFBOztJQUFBO01BQ3JCLHVEQUFzQztRQUFBLElBQTVCQyxJQUE0Qjs7UUFDckMsSUFBR0EsSUFBSSxDQUFDRixPQUFMLEtBQWlCLElBQXBCLEVBQTBCO1VBQ3pCLElBQU02QyxFQUFFLEdBQUd6RixtREFBQSxDQUFZOEMsSUFBWixFQUFrQixJQUFsQixDQUFYOztVQUNBLElBQUcyQyxFQUFFLEtBQUssSUFBVixFQUFnQjtZQUNmekYseURBQUEsQ0FBa0J5RixFQUFsQixFQUFzQixpQkFBdEI7VUFDQTtRQUNEO01BQ0Q7SUFSb0I7TUFBQTtJQUFBO01BQUE7SUFBQTs7SUFVbEJsRSxRQUFRLENBQUN3RixtQkFBVCxDQUE2QixPQUE3QixFQUFzQ0osYUFBdEM7SUFDQXBGLFFBQVEsQ0FBQ3dGLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDSixhQUExQztFQUNILENBWkQ7RUFjSDtBQUNEO0FBQ0E7QUFDQTtBQUNBOzs7RUFDQyxLQUFLSyxNQUFMLEdBQWMsVUFBQ0MsR0FBRCxFQUFNRCxNQUFOLEVBQWlCO0lBQ3hCLElBQU14RyxPQUFPLEdBQUcsS0FBSSxDQUFDaUYsRUFBTCxDQUFReUIsYUFBUixDQUFzQkQsR0FBdEIsQ0FBaEI7O0lBQ0EsSUFBR3pHLE9BQU8sS0FBSyxJQUFmLEVBQXFCO01BQ2pCO0lBQ0g7O0lBRUQsSUFBR3dHLE1BQUgsRUFBVztNQUNQaEgseURBQUEsQ0FBa0JRLE9BQU8sQ0FBQ3FHLFVBQTFCLEVBQXNDLGVBQXRDO0lBQ0gsQ0FGRCxNQUVPO01BQ0g3RyxzREFBQSxDQUFlUSxPQUFPLENBQUNxRyxVQUF2QixFQUFtQyxlQUFuQztJQUNIO0VBQ0osQ0FYSjtFQWNBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7OztFQUNDLEtBQUtNLElBQUwsR0FBWSxVQUFDRixHQUFELEVBQVM7SUFDZCxPQUFPLEtBQUksQ0FBQ3hCLEVBQUwsQ0FBUXlCLGFBQVIsQ0FBc0JELEdBQXRCLENBQVA7RUFDSCxDQUZKO0VBSUE7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7O0VBQ0MsS0FBS0csS0FBTCxHQUFhLFVBQUNILEdBQUQsRUFBTUksT0FBTixFQUFrQjtJQUMzQixJQUFNN0csT0FBTyxHQUFHLEtBQUksQ0FBQzJHLElBQUwsQ0FBVUYsR0FBVixDQUFoQjs7SUFDQSxJQUFHekcsT0FBTyxLQUFLLElBQWYsRUFBcUI7TUFDakJBLE9BQU8sQ0FBQ3dGLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQUNDLEtBQUQsRUFBVztRQUN6Q0EsS0FBSyxDQUFDQyxjQUFOOztRQUNBLEtBQUksQ0FBQ00sUUFBTDs7UUFDQWEsT0FBTyxDQUFDcEIsS0FBRCxDQUFQO01BQ0EsQ0FKSjtJQUtBO0VBQ0osQ0FUSjs7RUFXR3hCLFVBQVU7QUFDYixDQWpRTTs7Ozs7Ozs7Ozs7Ozs7QUNaUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTTZDLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQVM3SixPQUFULEVBQWtCO0VBQ3JDQSxPQUFPLEdBQUdBLE9BQU8sR0FBR0EsT0FBSCxHQUFhLEVBQTlCLENBRHFDLENBR3JDO0VBQ0E7O0VBQ0EsS0FBS2tILE9BQUwsR0FBZSxRQUFmLENBTHFDLENBT3JDOztFQUNBLEtBQUtDLE1BQUwsR0FBYyxJQUFkLENBUnFDLENBVXJDOztFQUNBLEtBQUtNLElBQUwsR0FBWSxFQUFaLENBWHFDLENBYXJDOztFQUNBLEtBQUtRLEtBQUwsR0FBYSxDQUFDO0lBQUMvRyxJQUFJLEVBQUU7RUFBUCxDQUFELENBQWIsQ0FkcUMsQ0FnQnJDOztFQUNBLEtBQUtzRyxJQUFMLEdBQVksSUFBWjs7RUFHQSxLQUFJLElBQUlzQyxRQUFSLElBQW9COUosT0FBcEIsRUFBNkI7SUFDekIsSUFBR0EsT0FBTyxDQUFDK0osY0FBUixDQUF1QkQsUUFBdkIsQ0FBSCxFQUFxQztNQUNqQyxJQUFHLENBQUMsS0FBS0MsY0FBTCxDQUFvQkQsUUFBcEIsQ0FBSixFQUFtQztRQUMvQixNQUFNLElBQUlFLEtBQUosQ0FBVSxvQkFBb0JGLFFBQTlCLENBQU47TUFDSDs7TUFDRCxLQUFLQSxRQUFMLElBQWlCOUosT0FBTyxDQUFDOEosUUFBRCxDQUF4QjtJQUNIO0VBQ0o7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7RUFDSSxLQUFLRyxNQUFMLEdBQWMsVUFBU0MsSUFBVCxFQUFlO0lBQ3pCLElBQUcsS0FBS3BJLEdBQUwsS0FBYSxJQUFoQixFQUFzQjtNQUNsQixPQUFPLElBQVA7SUFDSDs7SUFFRCxJQUFHLEtBQUtBLEdBQUwsS0FBYXJCLE1BQU0sQ0FBQyxLQUFLcUIsR0FBTixDQUF0QixFQUFrQztNQUM5QixJQUFJcUksR0FBSjs7TUFFQSxJQUFHLEtBQUtySSxHQUFMLENBQVNvSSxJQUFULE1BQW1CcEosU0FBdEIsRUFBaUM7UUFFN0I7UUFDQSxJQUFJc0osT0FBTyxHQUFHLEtBQUt0SSxHQUFMLENBQVNvSSxJQUFULENBQWQ7O1FBQ0EsSUFBR0UsT0FBTyxDQUFDQyxHQUFSLEtBQWdCdkosU0FBbkIsRUFBOEI7VUFDMUI7VUFDQSxPQUFPLElBQVA7UUFDSCxDQVA0QixDQVM3Qjs7O1FBQ0FxSixHQUFHLEdBQUc7VUFBQ0UsR0FBRyxFQUFFRCxPQUFPLENBQUNDO1FBQWQsQ0FBTjs7UUFDQSxJQUFHRCxPQUFPLENBQUNFLFdBQVIsS0FBd0J4SixTQUEzQixFQUFzQztVQUNsQ3FKLEdBQUcsQ0FBQ0csV0FBSixHQUFrQkYsT0FBTyxDQUFDRSxXQUExQjtRQUNILENBRkQsTUFFTyxJQUFHLEtBQUt4SSxHQUFMLENBQVN3SSxXQUFULEtBQXlCeEosU0FBNUIsRUFBdUM7VUFDMUNxSixHQUFHLENBQUNHLFdBQUosR0FBa0IsS0FBS3hJLEdBQUwsQ0FBU3dJLFdBQTNCO1FBQ0gsQ0FGTSxNQUVBO1VBQ0hILEdBQUcsQ0FBQ0csV0FBSixHQUFrQixrREFBbEI7UUFDSDs7UUFFRCxJQUFHRixPQUFPLENBQUNHLEtBQVIsS0FBa0J6SixTQUFyQixFQUFnQztVQUM1QnFKLEdBQUcsQ0FBQ0ksS0FBSixHQUFZSCxPQUFPLENBQUNHLEtBQXBCO1FBQ0gsQ0FGRCxNQUVPLElBQUcsS0FBS3pJLEdBQUwsQ0FBU3lJLEtBQVQsS0FBbUJ6SixTQUF0QixFQUFpQztVQUNwQ3FKLEdBQUcsQ0FBQ0ksS0FBSixHQUFZLEtBQUt6SSxHQUFMLENBQVN5SSxLQUFyQjtRQUNILENBRk0sTUFFQTtVQUNISixHQUFHLENBQUNJLEtBQUosR0FBWSxFQUFaO1FBQ0g7O1FBRUQsSUFBR0gsT0FBTyxDQUFDbEosSUFBUixLQUFpQkosU0FBcEIsRUFBK0I7VUFDM0JxSixHQUFHLENBQUNqSixJQUFKLEdBQVdrSixPQUFPLENBQUNsSixJQUFuQjtRQUNILENBRkQsTUFFTyxJQUFHLEtBQUtZLEdBQUwsQ0FBU1osSUFBVCxLQUFrQkosU0FBckIsRUFBZ0M7VUFDbkNxSixHQUFHLENBQUNqSixJQUFKLEdBQVcsS0FBS1ksR0FBTCxDQUFTWixJQUFwQjtRQUNIO01BQ0osQ0FoQ0QsTUFnQ087UUFDSCxJQUFHLEtBQUtZLEdBQUwsQ0FBU3VJLEdBQVQsS0FBaUJ2SixTQUFwQixFQUErQjtVQUMzQixPQUFPLElBQVA7UUFDSDs7UUFFRHFKLEdBQUcsR0FBRztVQUFDRSxHQUFHLEVBQUUsS0FBS3ZJLEdBQUwsQ0FBU3VJO1FBQWYsQ0FBTjs7UUFDQSxJQUFHLEtBQUt2SSxHQUFMLENBQVN5SSxLQUFULEtBQW1CekosU0FBdEIsRUFBaUM7VUFDN0JxSixHQUFHLENBQUNJLEtBQUosR0FBWSxLQUFLekksR0FBTCxDQUFTeUksS0FBckI7UUFDSCxDQUZELE1BRU87VUFDSEosR0FBRyxDQUFDSSxLQUFKLEdBQVksRUFBWjtRQUNIOztRQUVELElBQUcsS0FBS3pJLEdBQUwsQ0FBU1osSUFBVCxLQUFrQkosU0FBckIsRUFBZ0M7VUFDNUJxSixHQUFHLENBQUNqSixJQUFKLEdBQVcsS0FBS1ksR0FBTCxDQUFTWixJQUFwQjtRQUNIO01BQ0o7O01BRUQsT0FBT2lKLEdBQVA7SUFDSCxDQXJERCxNQXFETztNQUNILE9BQU87UUFBQ0UsR0FBRyxFQUFFLEtBQUt2STtNQUFYLENBQVA7SUFDSDtFQUNKLENBN0REO0FBOERILENBaEdNOzs7Ozs7Ozs7Ozs7Ozs7QUNMUDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU0yRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFTdkcsSUFBVCxFQUFlNkMsT0FBZixFQUF3QjBILE1BQXhCLEVBQWdDO0VBQUE7O0VBQ25ELEtBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7RUFDQSxLQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0VBRUEsSUFBSTlHLEdBQUcsR0FBRyxJQUFWO0VBQUEsSUFBZ0IrRyxNQUFNLEdBQUcsSUFBekI7RUFBQSxJQUErQkMsTUFBTSxHQUFHLElBQXhDO0VBQ0EsSUFBSUMsZUFBZSxHQUFHLElBQXRCO0VBQ0EsSUFBSWpFLElBQUksR0FBRyxJQUFYOztFQUVBLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07SUFDeEI7SUFDQTtJQUNBO0lBRUFuRCxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFOO0lBQ0EsS0FBSSxDQUFDRixHQUFMLEdBQVdBLEdBQVg7O0lBRUEsSUFBRzRHLE1BQU0sS0FBSyxJQUFkLEVBQW9CO01BQ25CNUcsR0FBRyxDQUFDWixTQUFKLENBQWNDLEdBQWQsQ0FBa0Isb0JBQWxCO0lBQ0E7O0lBRURILE9BQU8sQ0FBQ3FCLFdBQVIsQ0FBb0JQLEdBQXBCLEVBWndCLENBY3hCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNBLENBcEJEO0VBc0JBO0FBQ0Q7QUFDQTtBQUNBOzs7RUFDQyxLQUFLMkQsSUFBTCxHQUFZLFVBQVNyRyxJQUFULEVBQWU7SUFDMUIsSUFBR0EsSUFBSSxDQUFDeUosTUFBTCxLQUFnQjlKLFNBQW5CLEVBQThCO01BQzdCO01BQ0EsS0FBS3VDLEtBQUwsQ0FBV2xDLElBQUksQ0FBQzRKLEtBQWhCLEVBQXVCNUosSUFBSSxDQUFDeUosTUFBNUIsRUFBb0N6SixJQUFJLENBQUMwSixNQUF6QztNQUNBLEtBQUtHLFVBQUwsQ0FBZ0I3SixJQUFJLENBQUM2SixVQUFyQjtJQUNBLENBSkQsTUFJTztNQUNObkUsSUFBSSxHQUFHLElBQUkyRCx1Q0FBSixDQUFTdEssSUFBVCxFQUFlMkQsR0FBZixDQUFQO01BQ0FnRCxJQUFJLENBQUNXLElBQUwsQ0FBVXJHLElBQUksQ0FBQzBGLElBQWY7SUFDQTtFQUNELENBVEQ7O0VBV0EsS0FBS3hELEtBQUwsR0FBYSxVQUFTNEgsVUFBVCxFQUFxQkMsVUFBckIsRUFBaUNDLFVBQWpDLEVBQTZDO0lBQ3pETCxlQUFlLEdBQUdHLFVBQWxCO0lBRUFMLE1BQU0sR0FBRyxJQUFJbkUsSUFBSixDQUFTdkcsSUFBVCxFQUFlMkQsR0FBZixFQUFvQixJQUFwQixFQUEwQmdELElBQTFCLENBQVQ7SUFDQWdFLE1BQU0sR0FBRyxJQUFJcEUsSUFBSixDQUFTdkcsSUFBVCxFQUFlMkQsR0FBZixFQUFvQixJQUFwQixFQUEwQixJQUExQixDQUFUO0lBRUFnRCxJQUFJLEdBQUcsSUFBUDs7SUFFQSxJQUFHb0UsVUFBSCxFQUFlO01BQ2RMLE1BQU0sQ0FBQy9HLEdBQVAsQ0FBV1osU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsb0JBQXpCO01BQ0EySCxNQUFNLENBQUNoSCxHQUFQLENBQVdaLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLHFCQUF6QjtJQUNBLENBSEQsTUFHTztNQUNOVyxHQUFHLENBQUNvRCxLQUFKLENBQVVtRSxhQUFWLEdBQTBCLFFBQTFCO01BQ0FSLE1BQU0sQ0FBQy9HLEdBQVAsQ0FBV1osU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsbUJBQXpCO01BQ0EySCxNQUFNLENBQUNoSCxHQUFQLENBQVdaLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLHNCQUF6QjtJQUNBOztJQUVELElBQU1tSSxHQUFHLEdBQUd2SCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtJQUNBc0gsR0FBRyxDQUFDcEksU0FBSixDQUFjQyxHQUFkLENBQWtCLFFBQWxCO0lBQ0EwSCxNQUFNLENBQUMvRyxHQUFQLENBQVdPLFdBQVgsQ0FBdUJpSCxHQUF2QjtJQUVBQSxHQUFHLENBQUM5QyxnQkFBSixDQUFxQixXQUFyQixFQUFrQyxVQUFDQyxLQUFELEVBQVc7TUFDNUNBLEtBQUssQ0FBQ0MsY0FBTjtNQUNBNkMsYUFBYSxDQUFDOUMsS0FBSyxDQUFDK0MsS0FBUCxFQUFjL0MsS0FBSyxDQUFDZ0QsS0FBcEIsQ0FBYjtNQUVBekksT0FBTyxDQUFDd0YsZ0JBQVIsQ0FBeUIsV0FBekIsRUFBc0NrRCxTQUF0QztNQUNBMUksT0FBTyxDQUFDd0YsZ0JBQVIsQ0FBeUIsU0FBekIsRUFBb0NtRCxPQUFwQztJQUNBLENBTkQ7SUFRQUwsR0FBRyxDQUFDOUMsZ0JBQUosQ0FBcUIsWUFBckIsRUFBbUMsVUFBQ0MsS0FBRCxFQUFXO01BQzdDQSxLQUFLLENBQUNDLGNBQU47TUFFQXZHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZcUcsS0FBWjtNQUVBLElBQUltRCxLQUFLLEdBQUduRCxLQUFLLENBQUNvRCxjQUFOLENBQXFCLENBQXJCLENBQVo7TUFDQU4sYUFBYSxDQUFDSyxLQUFLLENBQUNKLEtBQVAsRUFBY0ksS0FBSyxDQUFDSCxLQUFwQixDQUFiO01BR0F6SSxPQUFPLENBQUN3RixnQkFBUixDQUF5QixXQUF6QixFQUFzQ3NELFNBQXRDO01BQ0E5SSxPQUFPLENBQUN3RixnQkFBUixDQUF5QixVQUF6QixFQUFxQ3VELFFBQXJDO01BQ0EvSSxPQUFPLENBQUN3RixnQkFBUixDQUF5QixhQUF6QixFQUF3Q3dELFdBQXhDO0lBQ0EsQ0FaRDtJQWNBLEtBQUtuQixNQUFMLEdBQWNBLE1BQWQ7SUFDQSxLQUFLQyxNQUFMLEdBQWNBLE1BQWQ7SUFFQSxLQUFLRyxVQUFMLENBQWdCLEVBQWhCOztJQUVBLElBQUdFLFVBQVUsS0FBS3BLLFNBQWxCLEVBQTZCO01BQzVCOEosTUFBTSxDQUFDcEQsSUFBUCxDQUFZMEQsVUFBWjtJQUNBOztJQUVELElBQUdDLFVBQVUsS0FBS3JLLFNBQWxCLEVBQTZCO01BQzVCK0osTUFBTSxDQUFDckQsSUFBUCxDQUFZMkQsVUFBWjtJQUNBOztJQUVELE9BQU87TUFBQ1AsTUFBTSxFQUFFQSxNQUFUO01BQWlCQyxNQUFNLEVBQUVBO0lBQXpCLENBQVA7RUFDQSxDQXpERDs7RUEyREEsSUFBSW1CLE1BQU0sR0FBRyxJQUFiO0VBQUEsSUFBbUJDLE1BQU0sR0FBRyxJQUE1Qjs7RUFFQSxJQUFNWCxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNZLENBQUQsRUFBSUMsQ0FBSixFQUFVO0lBQy9CSCxNQUFNLEdBQUdFLENBQVQ7SUFDQUQsTUFBTSxHQUFHRSxDQUFUO0VBQ0EsQ0FIRDs7RUFLQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0lBQ3pCSixNQUFNLEdBQUcsSUFBVDtJQUNBQyxNQUFNLEdBQUcsSUFBVDtFQUNBLENBSEQ7O0VBTUEsSUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0gsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7SUFDMUIsSUFBTTFILElBQUksR0FBRzFCLE9BQU8sQ0FBQzJCLHFCQUFSLEVBQWI7O0lBR0EsSUFBR29HLGVBQUgsRUFBb0I7TUFDbkIsSUFBTXdCLEtBQUssR0FBRzdILElBQUksQ0FBQ0UsSUFBTCxHQUFZNUIsT0FBTyxDQUFDNkIsVUFBcEIsR0FBaUNDLE1BQU0sQ0FBQ0MsV0FBdEQ7TUFDQSxJQUFNeUgsR0FBRyxHQUFHOUgsSUFBSSxDQUFDK0gsS0FBTCxHQUFhL0gsSUFBSSxDQUFDRSxJQUE5Qjs7TUFDQSxJQUFHNEgsR0FBRyxJQUFJLENBQVYsRUFBYTtRQUNaO01BQ0E7O01BRUQsSUFBTUUsR0FBRyxHQUFHLENBQUNQLENBQUMsR0FBR0ksS0FBTCxJQUFjQyxHQUFkLEdBQW9CLEdBQWhDOztNQUNBLEtBQUksQ0FBQ3ZCLFVBQUwsQ0FBZ0J5QixHQUFoQjtJQUNBLENBVEQsTUFTTztNQUNOLElBQU1DLEtBQUssR0FBR2pJLElBQUksQ0FBQ00sR0FBTCxHQUFZaEMsT0FBTyxDQUFDaUMsU0FBcEIsR0FBZ0NILE1BQU0sQ0FBQ0ksV0FBckQ7TUFFQSxJQUFNMEgsR0FBRyxHQUFHbEksSUFBSSxDQUFDbUksTUFBTCxHQUFjbkksSUFBSSxDQUFDTSxHQUEvQjs7TUFDQSxJQUFHNEgsR0FBRyxJQUFJLENBQVYsRUFBYTtRQUNaO01BQ0E7O01BRUQsSUFBTUYsSUFBRyxHQUFHLENBQUNOLENBQUMsR0FBR08sS0FBTCxJQUFjQyxHQUFkLEdBQW9CLEdBQWhDOztNQUNBLEtBQUksQ0FBQzNCLFVBQUwsQ0FBZ0J5QixJQUFoQjtJQUNBO0VBQ0QsQ0F4QkQ7O0VBMEJBLElBQU1oQixTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDakQsS0FBRCxFQUFXO0lBQzVCQSxLQUFLLENBQUNDLGNBQU47O0lBRUEsSUFBR0QsS0FBSyxDQUFDcUUsS0FBTixLQUFnQixDQUFuQixFQUFzQjtNQUNyQm5CLE9BQU8sQ0FBQ2xELEtBQUQsQ0FBUDtNQUNBO0lBQ0E7O0lBRUQ2RCxRQUFRLENBQUM3RCxLQUFLLENBQUMrQyxLQUFQLEVBQWMvQyxLQUFLLENBQUNnRCxLQUFwQixDQUFSO0VBQ0EsQ0FURDs7RUFXQSxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDbEQsS0FBRCxFQUFXO0lBQzFCQSxLQUFLLENBQUNDLGNBQU47SUFDQTFGLE9BQU8sQ0FBQ3VHLG1CQUFSLENBQTRCLFdBQTVCLEVBQXlDbUMsU0FBekM7SUFDQTFJLE9BQU8sQ0FBQ3VHLG1CQUFSLENBQTRCLFNBQTVCLEVBQXVDb0MsT0FBdkM7SUFDQVUsV0FBVyxDQUFDNUQsS0FBSyxDQUFDK0MsS0FBUCxFQUFjL0MsS0FBSyxDQUFDZ0QsS0FBcEIsQ0FBWDtFQUNBLENBTEQ7O0VBT0EsSUFBTUssU0FBUyxHQUFJLFNBQWJBLFNBQWEsQ0FBQ3JELEtBQUQsRUFBVztJQUM3QkEsS0FBSyxDQUFDQyxjQUFOO0lBQ0EsSUFBSWtELEtBQUssR0FBR25ELEtBQUssQ0FBQ29ELGNBQU4sQ0FBcUIsQ0FBckIsQ0FBWjtJQUNBUyxRQUFRLENBQUNWLEtBQUssQ0FBQ0osS0FBUCxFQUFjSSxLQUFLLENBQUNILEtBQXBCLENBQVI7RUFDQSxDQUpEOztFQU1BLElBQU1NLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUN0RCxLQUFELEVBQVc7SUFDM0JBLEtBQUssQ0FBQ0MsY0FBTjtJQUNBLElBQUlrRCxLQUFLLEdBQUduRCxLQUFLLENBQUNvRCxjQUFOLENBQXFCLENBQXJCLENBQVo7SUFDQVMsUUFBUSxDQUFDVixLQUFLLENBQUNKLEtBQVAsRUFBY0ksS0FBSyxDQUFDSCxLQUFwQixDQUFSO0lBRUF6SSxPQUFPLENBQUN1RyxtQkFBUixDQUE0QixXQUE1QixFQUF5Q3VDLFNBQXpDO0lBQ0E5SSxPQUFPLENBQUN1RyxtQkFBUixDQUE0QixVQUE1QixFQUF3Q3dDLFFBQXhDO0lBQ0EvSSxPQUFPLENBQUN1RyxtQkFBUixDQUE0QixhQUE1QixFQUEyQ3lDLFdBQTNDO0lBRUFLLFdBQVcsQ0FBQzVELEtBQUssQ0FBQytDLEtBQVAsRUFBYy9DLEtBQUssQ0FBQ2dELEtBQXBCLENBQVg7RUFDQSxDQVZEOztFQVlBLElBQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUN2RCxLQUFELEVBQVc7SUFDOUJzRCxRQUFRLENBQUN0RCxLQUFELENBQVI7RUFDQSxDQUZEOztFQUlBLEtBQUt3QyxVQUFMLEdBQWtCLFVBQVN5QixHQUFULEVBQWM7SUFDL0IsSUFBR0EsR0FBRyxHQUFHLEtBQUsvQixRQUFkLEVBQXdCO01BQ3ZCK0IsR0FBRyxHQUFHLEtBQUsvQixRQUFYO0lBQ0EsQ0FGRCxNQUVPLElBQUcrQixHQUFHLEdBQUcsS0FBSzlCLFFBQWQsRUFBd0I7TUFDOUI4QixHQUFHLEdBQUcsS0FBSzlCLFFBQVg7SUFDQTs7SUFFRCxJQUFHRyxlQUFILEVBQW9CO01BQ25CRixNQUFNLENBQUMvRyxHQUFQLENBQVdvRCxLQUFYLENBQWlCNkYsS0FBakIsR0FBeUJMLEdBQUcsR0FBRyxHQUEvQjtJQUNBLENBRkQsTUFFTztNQUNON0IsTUFBTSxDQUFDL0csR0FBUCxDQUFXb0QsS0FBWCxDQUFpQkUsTUFBakIsR0FBMEJzRixHQUFHLEdBQUcsR0FBaEM7SUFDQTtFQUNELENBWkQ7O0VBY0EsS0FBS3hMLE1BQUwsR0FBYyxVQUFTTixHQUFULEVBQWM7SUFDM0Isd0JBQXdCLENBQUNrRyxJQUFELEVBQU8rRCxNQUFQLEVBQWVDLE1BQWYsQ0FBeEIsMEJBQWdEO01BQTVDLElBQU1rQyxVQUFVLFdBQWhCOztNQUNILElBQUdBLFVBQVUsS0FBSyxJQUFsQixFQUF3QjtRQUN2QixJQUFJL0wsR0FBRyxHQUFHK0wsVUFBVSxDQUFDOUwsTUFBWCxDQUFrQk4sR0FBbEIsQ0FBVjs7UUFDQSxJQUFHSyxHQUFHLEtBQUssSUFBWCxFQUFpQjtVQUNoQixPQUFPQSxHQUFQO1FBQ0E7TUFDRDtJQUNEOztJQUVELE9BQU8sSUFBUDtFQUNBLENBWEQ7O0VBY0FnRyxVQUFVO0FBQ1YsQ0FwTk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU0xSCxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFTSyxJQUFULEVBQWU2SixHQUFmLEVBQW9CeEosT0FBcEIsRUFBNkI7RUFBQTs7RUFFbkQ7RUFDQTtFQUNBO0VBQ0EsSUFBSWlOLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQywrREFBRCxDQUFyQjs7RUFDQSxLQUFLNU0sT0FBTCxHQUFlMk0sT0FBTyxDQUFDM00sT0FBdkI7RUFFQSxLQUFLWCxJQUFMLEdBQVlBLElBQVosQ0FSbUQsQ0FVbkQ7O0VBQ0EsS0FBSzZKLEdBQUwsR0FBV0EsR0FBWCxDQVhtRCxDQWFuRDs7RUFDQSxLQUFLeEosT0FBTCxHQUFlLElBQUk2Siw2Q0FBSixDQUFZN0osT0FBWixDQUFmLENBZG1ELENBZ0JuRDs7RUFDQSxJQUFJbU4sS0FBSyxHQUFHLEVBQVo7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBQ0ksS0FBS0MsS0FBTCxHQUFhLFlBQU07SUFDZixJQUFHNUQsR0FBRyxLQUFLLElBQVgsRUFBaUI7TUFDYixPQUFPLEtBQUksQ0FBQzZELFFBQUwsRUFBUDtJQUNIOztJQUVETCxvREFBQSxDQUFTLFlBQU07TUFDWCxLQUFJLENBQUNLLFFBQUw7SUFDSCxDQUZEO0VBR0gsQ0FSRDtFQVVBO0FBQ0o7QUFDQTs7O0VBQ0ksS0FBS0EsUUFBTCxHQUFnQixZQUFNO0lBQ2xCLElBQUc3RCxHQUFHLFlBQVkrRCxPQUFsQixFQUEyQjtNQUN2QixJQUFNck4sSUFBSSxHQUFHLElBQUl3Ryx1Q0FBSixDQUFTLEtBQVQsRUFBZThDLEdBQWYsQ0FBYjtNQUNBMkQsS0FBSyxDQUFDakgsSUFBTixDQUFXaEcsSUFBWDtJQUNILENBSEQsTUFHTztNQUNILElBQU1zTixRQUFRLEdBQUcxSixRQUFRLENBQUMySixnQkFBVCxDQUEwQmpFLEdBQTFCLENBQWpCOztNQUNBLEtBQUksSUFBSWtFLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0YsUUFBUSxDQUFDM0ssTUFBeEIsRUFBZ0M2SyxDQUFDLEVBQWpDLEVBQXFDO1FBQ2pDLElBQU0zSyxPQUFPLEdBQUd5SyxRQUFRLENBQUNFLENBQUQsQ0FBeEI7O1FBQ0EsSUFBTXhOLEtBQUksR0FBRyxJQUFJd0csdUNBQUosQ0FBUyxLQUFULEVBQWUzRCxPQUFmLENBQWI7O1FBQ0FvSyxLQUFLLENBQUNqSCxJQUFOLENBQVdoRyxLQUFYO01BQ0g7SUFDSjs7SUFFRCxJQUFHaU4sS0FBSyxDQUFDdEssTUFBTixLQUFpQixDQUFwQixFQUF1QjtNQUNuQixPQUFPc0ssS0FBSyxDQUFDLENBQUQsQ0FBWjtJQUNIOztJQUVELE9BQU8sSUFBUDtFQUNILENBbEJEO0VBb0JIO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7OztFQUNDLEtBQUs3RSxTQUFMLEdBQWlCLFVBQVNKLE1BQVQsRUFBaUI7SUFDOUIsSUFBRzVJLFVBQVUsQ0FBQ3FPLE9BQVgsQ0FBbUJ6RixNQUFNLENBQUN2SCxHQUExQixNQUFtQ0csU0FBdEMsRUFBaUQ7TUFDaEQsT0FBTyxJQUFLeEIsVUFBVSxDQUFDcU8sT0FBWCxDQUFtQnpGLE1BQU0sQ0FBQ3ZILEdBQTFCLENBQUwsQ0FBcUNoQixJQUFyQyxFQUEyQ3VJLE1BQTNDLENBQVA7SUFDQTs7SUFFRGhHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUF1QitGLE1BQU0sQ0FBQ3ZILEdBQTlCLEdBQW9DLGlCQUFoRDtJQUNBLE9BQU8sSUFBUDtFQUNBLENBUEo7QUFRQSxDQXZFTTtBQXlFUHJCLFVBQVUsQ0FBQ00sTUFBWCxHQUFvQkEsbURBQXBCO0FBRUFOLFVBQVUsQ0FBQ3FPLE9BQVgsR0FBcUIsRUFBckI7O0FBRUFyTyxVQUFVLENBQUNrQyxTQUFYLEdBQXVCLFVBQVMwRyxNQUFULEVBQWlCO0VBQ3ZDLEtBQUt5RixPQUFMLENBQWF6RixNQUFNLENBQUN2SCxHQUFwQixJQUEyQnVILE1BQTNCO0FBQ0EsQ0FGRDs7QUFJQTVHLGtFQUFBLENBQWtCaEMsVUFBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNa0wsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBU3RLLElBQVQsRUFBZTZDLE9BQWYsRUFBd0I7RUFDeEM7RUFDQSxLQUFLMkMsTUFBTCxHQUFjLENBQUMsQ0FBZixDQUZ3QyxDQUl4Qzs7RUFDQSxLQUFLeEYsSUFBTCxHQUFZQSxJQUFaLENBTHdDLENBT3hDOztFQUNBLEtBQUtQLElBQUwsR0FBWU8sSUFBSSxDQUFDUCxJQUFqQixDQVJ3QyxDQVV4Qzs7RUFDQSxJQUFJa0gsSUFBSSxHQUFHLEVBQVgsQ0FYd0MsQ0FheEM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBLElBQUlrSCxPQUFPLEdBQUcsSUFBZDtFQUFBLElBQW9CL0YsRUFBRSxHQUFHLElBQXpCO0VBQUEsSUFBK0JnRyxRQUFRLEdBQUcsSUFBMUM7RUFFSDtBQUNEO0FBQ0E7QUFDQTs7RUFDQyxLQUFLdk8sTUFBTCxHQUFjLFVBQVNvRSxHQUFULEVBQWM7SUFDckI7SUFDQWtLLE9BQU8sR0FBR3hMLDhEQUFBLENBQXVCLFlBQXZCLENBQVY7SUFDQXlGLEVBQUUsR0FBR2xFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFMO0lBQ0FnSyxPQUFPLENBQUMzSixXQUFSLENBQW9CNEQsRUFBcEI7SUFFQWdHLFFBQVEsR0FBR3pMLDhEQUFBLENBQXVCLGFBQXZCLENBQVg7SUFDQXdMLE9BQU8sQ0FBQzNKLFdBQVIsQ0FBb0I0SixRQUFwQjtJQUVBbkssR0FBRyxDQUFDTyxXQUFKLENBQWdCMkosT0FBaEIsRUFUcUIsQ0FXckI7O0lBQ0FsSCxJQUFJLEdBQUcsRUFBUCxDQVpxQixDQWM1QjtJQUNEO0VBQ0ssQ0FoQko7O0VBa0JHLEtBQUtXLElBQUwsR0FBWSxVQUFTckcsSUFBVCxFQUFlO0lBQUEsMkNBQ1JBLElBRFE7SUFBQTs7SUFBQTtNQUM3QixvREFBMkI7UUFBQSxJQUFqQjhNLE9BQWlCO1FBQzFCLEtBQUsvSyxHQUFMLENBQVMrSyxPQUFUO01BQ0E7SUFINEI7TUFBQTtJQUFBO01BQUE7SUFBQTtFQUkxQixDQUpEOztFQU1BLEtBQUtDLFNBQUwsR0FBaUIsVUFBU3pHLElBQVQsRUFBZTtJQUNsQ0EsSUFBSSxDQUFDNUQsR0FBTCxDQUFTTyxXQUFULENBQXFCMkosT0FBckI7RUFDRyxDQUZEOztFQUlBLEtBQUs3SyxHQUFMLEdBQVcsVUFBUy9CLElBQVQsRUFBZTtJQUM1QixJQUFJSCxHQUFHLEdBQUcsSUFBVjs7SUFFRyxRQUFPRyxJQUFJLENBQUNVLElBQVo7TUFDQyxLQUFLLFFBQUw7UUFDQ2IsR0FBRyxHQUFHLElBQUk2TSxzREFBSixDQUFjLElBQWQsRUFBb0IxTSxJQUFwQixDQUFOO1FBQ0E7O01BRUQsS0FBSyxRQUFMO1FBQ0NILEdBQUcsR0FBRyxJQUFJNE0sc0RBQUosQ0FBYyxJQUFkLEVBQW9Cek0sSUFBcEIsQ0FBTjtRQUNBO0lBUEY7O0lBVUEsSUFBR0gsR0FBRyxLQUFLLElBQVgsRUFBaUI7TUFDaEJnSCxFQUFFLENBQUM1RCxXQUFILENBQWVwRCxHQUFHLENBQUNxSSxFQUFuQjtNQUNBMkUsUUFBUSxDQUFDNUosV0FBVCxDQUFxQnBELEdBQUcsQ0FBQ21OLElBQXpCO01BQ0F0SCxJQUFJLENBQUNYLElBQUwsQ0FBVTtRQUFDbEYsR0FBRyxFQUFFQSxHQUFOO1FBQVdxSSxFQUFFLEVBQUVySSxHQUFHLENBQUNxSSxFQUFuQjtRQUF1QjhFLElBQUksRUFBRW5OLEdBQUcsQ0FBQ21OO01BQWpDLENBQVY7TUFFQW5OLEdBQUcsQ0FBQ29OLE1BQUo7SUFDQTtFQUNELENBcEJEO0VBc0JIO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7OztFQUNDLEtBQUtuTixNQUFMLEdBQWMsVUFBU04sR0FBVCxFQUFjO0lBQUEsNENBQ1BrRyxJQURPO0lBQUE7O0lBQUE7TUFDeEIsdURBQXVCO1FBQUEsSUFBYjdGLEdBQWE7O1FBQ3RCLElBQUdBLEdBQUcsQ0FBQ0EsR0FBSixDQUFRTCxHQUFSLEtBQWdCQSxHQUFuQixFQUF3QjtVQUN2QixPQUFPSyxHQUFHLENBQUNBLEdBQVg7UUFDQTtNQUNEO0lBTHVCO01BQUE7SUFBQTtNQUFBO0lBQUE7O0lBT3hCLE9BQU8sSUFBUDtFQUNBLENBUko7O0VBVUcsS0FBS3FOLFdBQUwsR0FBbUIsWUFBVztJQUM3QjtJQUNBO0lBQ0E7SUFDQXhILElBQUksQ0FBQ3ZELE9BQUwsQ0FBYSxVQUFDdEMsR0FBRCxFQUFTO01BQ3JCQSxHQUFHLENBQUNxSSxFQUFKLENBQU9wRyxTQUFQLENBQWlCK0MsTUFBakIsQ0FBd0IsVUFBeEI7TUFDQWhGLEdBQUcsQ0FBQ21OLElBQUosQ0FBU2xMLFNBQVQsQ0FBbUIrQyxNQUFuQixDQUEwQixVQUExQjtJQUNBLENBSEQ7RUFJQSxDQVJEOztFQVdBLEtBQUtzSSxPQUFMLEdBQWUsWUFBVztJQUN0QixLQUFLNUksTUFBTCxHQUFjLENBQUMsQ0FBZjtJQUNBcUksT0FBTyxDQUFDM0UsVUFBUixDQUFtQm1GLFdBQW5CLENBQStCUixPQUEvQjtJQUNBQSxPQUFPLEdBQUcsSUFBVjtJQUNBbEgsSUFBSSxHQUFHLEVBQVA7RUFDSCxDQUxEOztFQU9BLEtBQUtwSCxNQUFMLENBQVlzRCxPQUFaO0FBQ0gsQ0E5R007Ozs7Ozs7Ozs7Ozs7OztBQ2JQO0FBRU8sSUFBTThLLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVNoSCxJQUFULEVBQWUxRixJQUFmLEVBQXFCO0VBQzdDcU4sMENBQUEsQ0FBUyxJQUFULEVBQWUzSCxJQUFmLEVBQXFCMUYsSUFBckI7RUFFQSxJQUFNeEIsSUFBSSxHQUFHa0gsSUFBSSxDQUFDbEgsSUFBbEI7RUFFQSxJQUFJd08sSUFBSSxHQUFHckssUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVg7RUFDQW9LLElBQUksQ0FBQ2xMLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixZQUFuQjtFQUNBaUwsSUFBSSxDQUFDbEwsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFFBQW5CO0VBQ0EsS0FBS2lMLElBQUwsR0FBWUEsSUFBWjtFQUVBLElBQUlNLFNBQVMsR0FBRzNLLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFoQjtFQUNBb0ssSUFBSSxDQUFDL0osV0FBTCxDQUFpQnFLLFNBQWpCO0VBRUEsSUFBSUMsSUFBSSxHQUFHNUssUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVg7RUFDQTJLLElBQUksQ0FBQ3pMLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixZQUFuQjtFQUNBdUwsU0FBUyxDQUFDckssV0FBVixDQUFzQnNLLElBQXRCO0VBRUEsSUFBSUMsU0FBUyxHQUFHN0ssUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWhCO0VBQ0E0SyxTQUFTLENBQUMxTCxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixjQUF4QjtFQUNBdUwsU0FBUyxDQUFDckssV0FBVixDQUFzQnVLLFNBQXRCO0VBRUEsSUFBTUMsTUFBTSxHQUFHLElBQUlqUCxJQUFJLENBQUNrUCxNQUFULENBQWdCRixTQUFoQixFQUEyQjtJQUN6Q0csTUFBTSxFQUFFLE1BRGlDO0lBRXpDOU4sR0FBRyxFQUFFLElBRm9DO0lBR3pDK04sVUFBVSxFQUFFLElBSDZCO0lBSXpDQyxNQUFNLEVBQUU7RUFKaUMsQ0FBM0IsQ0FBZjtFQU9BLElBQU1DLFVBQVUsR0FBR0wsTUFBTSxDQUFDTSxRQUExQjtFQUNBRCxVQUFVLENBQUMxRyxnQkFBWCxDQUE0QixRQUE1QixFQUFzQyxVQUFDQyxLQUFELEVBQVc7SUFDaEQ7SUFDQWtHLElBQUksQ0FBQzFKLFNBQUwsR0FBaUJpSyxVQUFVLENBQUNqSyxTQUE1QjtFQUNBLENBSEQ7O0VBS0EsS0FBSzRDLEdBQUwsR0FBVyxVQUFTdUgsSUFBVCxFQUFlO0lBQ3pCO0lBQ0E7SUFDQTtJQUNBLElBQUdBLElBQUksQ0FBQ2hPLElBQUwsS0FBY0wsU0FBakIsRUFBNEI7TUFDM0JxTyxJQUFJLEdBQUdBLElBQUksQ0FBQ2hPLElBQVo7SUFDQTs7SUFFRHlOLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkUsS0FBaEIsR0FBd0JELElBQXhCO0lBRUEsSUFBSUUsS0FBSyxHQUFHLENBQVo7O0lBQ0EsS0FBSSxJQUFJM0IsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHeUIsSUFBSSxDQUFDdE0sTUFBeEIsRUFBZ0MsRUFBRTZLLENBQWxDLEVBQW9DO01BQ25DLElBQUd5QixJQUFJLENBQUN6QixDQUFELENBQUosS0FBWSxJQUFmLEVBQXFCO1FBQ3BCMkIsS0FBSztNQUNMO0lBQ0Q7O0lBRUQsSUFBR0EsS0FBSyxHQUFHLEdBQVgsRUFBZ0I7TUFDZkEsS0FBSyxHQUFHLEdBQVI7SUFDQSxDQW5Cd0IsQ0FxQnpCO0lBQ0E7OztJQUNBWCxJQUFJLENBQUN4SyxTQUFMLEdBQWlCLEVBQWpCOztJQUNBLEtBQUksSUFBSXdKLEVBQUMsR0FBQyxDQUFWLEVBQWFBLEVBQUMsSUFBRTJCLEtBQUssR0FBQyxDQUF0QixFQUF5QjNCLEVBQUMsRUFBMUIsRUFBOEI7TUFDN0IsSUFBTTRCLENBQUMsR0FBR3hMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFWO01BQ0F1TCxDQUFDLENBQUNqSCxTQUFGLEdBQWMsS0FBS3FGLEVBQW5CO01BQ0FnQixJQUFJLENBQUN0SyxXQUFMLENBQWlCa0wsQ0FBakI7SUFDQTtFQUNELENBN0JEO0VBK0JBO0FBQ0Q7QUFDQTtBQUNBOzs7RUFDQyxLQUFLbE8sR0FBTCxHQUFXLFlBQVc7SUFDckIsT0FBT3dOLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkUsS0FBdkI7RUFDQSxDQUZEOztFQUlBLEtBQUtoQixNQUFMLEdBQWMsWUFBVztJQUN4QkksMkRBQUEsQ0FBMEIsSUFBMUI7SUFFQXpJLFVBQVUsQ0FBQyxZQUFNO01BQ2hCNkksTUFBTSxDQUFDTSxRQUFQLENBQWdCSyxLQUFoQjtJQUNBLENBRlMsRUFFUCxDQUZPLENBQVY7RUFJQSxDQVBEOztFQVNBLEtBQUszSCxHQUFMLENBQVMsRUFBVDtBQUNBLENBbkZNO0FBcUZQaUcsU0FBUyxDQUFDMU4sU0FBVixHQUFzQk0sTUFBTSxDQUFDaEIsTUFBUCxDQUFjK08sK0NBQWQsQ0FBdEI7QUFDQVgsU0FBUyxDQUFDMU4sU0FBVixDQUFvQk8sV0FBcEIsR0FBa0NtTixTQUFsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBRU8sSUFBTUQsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBUy9HLElBQVQsRUFBZTFGLElBQWYsRUFBcUI7RUFDN0NxTiwwQ0FBQSxDQUFTLElBQVQsRUFBZTNILElBQWYsRUFBcUIxRixJQUFyQjtFQUVBLElBQUlnTixJQUFJLEdBQUdySyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtFQUNBb0ssSUFBSSxDQUFDbEwsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFlBQW5CO0VBQ0FpTCxJQUFJLENBQUNsTCxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsUUFBbkI7RUFDQSxLQUFLaUwsSUFBTCxHQUFZQSxJQUFaO0VBRUEsSUFBSU0sU0FBUyxHQUFHM0ssUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWhCO0VBQ0FvSyxJQUFJLENBQUMvSixXQUFMLENBQWlCcUssU0FBakI7RUFFQSxJQUFJQyxJQUFJLEdBQUc1SyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtFQUNBMkssSUFBSSxDQUFDekwsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFlBQW5CO0VBQ0F1TCxTQUFTLENBQUNySyxXQUFWLENBQXNCc0ssSUFBdEI7RUFFQSxJQUFJYyxHQUFHLEdBQUcxTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtFQUNBMEssU0FBUyxDQUFDckssV0FBVixDQUFzQm9MLEdBQXRCO0VBRUFBLEdBQUcsQ0FBQ2pILGdCQUFKLENBQXFCLFFBQXJCLEVBQStCLFVBQUNDLEtBQUQsRUFBVztJQUN6Q2dILEdBQUcsQ0FBQ3ZJLEtBQUosQ0FBVXdJLGtCQUFWLEdBQStCLFNBQVUsQ0FBQ0QsR0FBRyxDQUFDeEssU0FBZixHQUE0QixJQUEzRDtJQUNBMEosSUFBSSxDQUFDMUosU0FBTCxHQUFpQndLLEdBQUcsQ0FBQ3hLLFNBQXJCO0VBQ0EsQ0FIRDs7RUFLQSxLQUFLNEMsR0FBTCxHQUFXLFVBQVN1SCxJQUFULEVBQWU7SUFDekJLLEdBQUcsQ0FBQ3RMLFNBQUosR0FBZ0JpTCxJQUFoQjtJQUVBLElBQUlFLEtBQUssR0FBRyxDQUFaOztJQUNBLEtBQUksSUFBSTNCLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR3lCLElBQUksQ0FBQ3RNLE1BQXhCLEVBQWdDLEVBQUU2SyxDQUFsQyxFQUFvQztNQUNuQyxJQUFHeUIsSUFBSSxDQUFDekIsQ0FBRCxDQUFKLEtBQVksSUFBZixFQUFxQjtRQUNwQjJCLEtBQUs7TUFDTDtJQUNEOztJQUVELElBQUdBLEtBQUssR0FBRyxHQUFYLEVBQWdCO01BQ2ZBLEtBQUssR0FBRyxHQUFSO0lBQ0EsQ0Fad0IsQ0FjekI7SUFDQTs7O0lBQ0FYLElBQUksQ0FBQ3hLLFNBQUwsR0FBaUIsRUFBakI7O0lBQ0EsS0FBSSxJQUFJd0osRUFBQyxHQUFDLENBQVYsRUFBYUEsRUFBQyxJQUFFMkIsS0FBSyxHQUFDLENBQXRCLEVBQXlCM0IsRUFBQyxFQUExQixFQUE4QjtNQUM3QixJQUFNNEIsQ0FBQyxHQUFHeEwsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQVY7TUFDQXVMLENBQUMsQ0FBQ2pILFNBQUYsR0FBYyxLQUFLcUYsRUFBbkI7TUFDQWdCLElBQUksQ0FBQ3RLLFdBQUwsQ0FBaUJrTCxDQUFqQjtJQUNBO0VBQ0QsQ0F0QkQ7O0VBd0JBLElBQU1ILElBQUksa29DQUFWLENBL0M2QyxDQTJGN0M7O0VBQ0EsS0FBS3ZILEdBQUwsQ0FBUyxFQUFUO0FBQ0EsQ0E3Rk07QUErRlBnRyxTQUFTLENBQUN6TixTQUFWLEdBQXNCTSxNQUFNLENBQUNoQixNQUFQLENBQWMrTywrQ0FBZCxDQUF0QjtBQUNBWixTQUFTLENBQUN6TixTQUFWLENBQW9CTyxXQUFwQixHQUFrQ2tOLFNBQWxDOzs7Ozs7Ozs7Ozs7OztBQ2xHTyxJQUFNWSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFTM0gsSUFBVCxFQUFlMUYsSUFBZixFQUFxQjtFQUFBOztFQUN2QyxLQUFLMEYsSUFBTCxHQUFZQSxJQUFaO0VBRUEsS0FBS3NILElBQUwsR0FBWSxJQUFaO0VBQ0EsS0FBS3hOLEdBQUwsR0FBV1EsSUFBSSxDQUFDUixHQUFoQjtFQUNBLEtBQUtPLElBQUwsR0FBWUMsSUFBSSxDQUFDRCxJQUFqQjtFQUVBLElBQUltSSxFQUFFLEdBQUd2RixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVDtFQUNBLEtBQUtzRixFQUFMLEdBQVVBLEVBQVY7RUFFQSxJQUFJakIsQ0FBQyxHQUFHdEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQVI7RUFDQXNGLEVBQUUsQ0FBQ2pGLFdBQUgsQ0FBZWdFLENBQWY7RUFDQUEsQ0FBQyxDQUFDQyxTQUFGLEdBQWNsSCxJQUFJLENBQUNELElBQW5CO0VBRUEsSUFBSTBGLElBQUksR0FBRzlDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFYO0VBQ0FzRixFQUFFLENBQUNqRixXQUFILENBQWV3QyxJQUFmLEVBZnVDLENBZ0J2QztFQUNBO0VBQ0E7O0VBRUF5QyxFQUFFLENBQUNkLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFVBQUNDLEtBQUQsRUFBVztJQUN2Q0EsS0FBSyxDQUFDQyxjQUFOOztJQUNBLEtBQUksQ0FBQzJGLE1BQUw7RUFDQSxDQUhEO0VBS0FoRyxDQUFDLENBQUNHLGdCQUFGLENBQW1CLE9BQW5CLEVBQTRCLFVBQUNDLEtBQUQsRUFBVztJQUN0Q0EsS0FBSyxDQUFDQyxjQUFOOztJQUNBLEtBQUksQ0FBQzJGLE1BQUw7RUFDQSxDQUhEOztFQUtBLEtBQUt4RyxHQUFMLEdBQVcsVUFBU3VILElBQVQsRUFBZSxDQUFFLENBQTVCLENBOUJ1QyxDQWdDdkM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUNBLENBckRNOztBQXVEUFgsR0FBRyxDQUFDck8sU0FBSixDQUFjaU8sTUFBZCxHQUF3QixZQUFXO0VBQ2xDLEtBQUt2SCxJQUFMLENBQVV3SCxXQUFWO0VBRUEsS0FBS2hGLEVBQUwsQ0FBUXBHLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQXRCO0VBQ0EsS0FBS2lMLElBQUwsQ0FBVWxMLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQXhCO0FBQ0EsQ0FMRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNc0QsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBU3RHLElBQVQsRUFBZTtFQUV6QyxJQUFJd1AsV0FBVyxHQUFHLElBQWxCLENBRnlDLENBRWpCOztFQUN4QixJQUFJQyxRQUFRLEdBQUcsSUFBZixDQUh5QyxDQUdqQjs7RUFDeEIsSUFBSUMsU0FBUyxHQUFHLEVBQWhCLENBSnlDLENBSWpCOztFQUV4QixJQUFNNUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtJQUN4QjlHLElBQUksQ0FBQzZDLE9BQUwsQ0FBYXdGLGdCQUFiLENBQThCLFdBQTlCLEVBQTJDLFVBQUNDLEtBQUQsRUFBVztNQUNyRCxJQUFHQSxLQUFLLENBQUNxRSxLQUFOLEtBQWdCLENBQW5CLEVBQXNCO1FBQ3JCbkIsT0FBTyxDQUFDbEQsS0FBSyxDQUFDK0MsS0FBUCxFQUFjL0MsS0FBSyxDQUFDZ0QsS0FBcEIsQ0FBUDtRQUNBO01BQ0E7O01BRURDLFNBQVMsQ0FBQ2pELEtBQUssQ0FBQytDLEtBQVAsRUFBYy9DLEtBQUssQ0FBQ2dELEtBQXBCLENBQVQ7SUFDQSxDQVBEO0lBU0F0TCxJQUFJLENBQUM2QyxPQUFMLENBQWF3RixnQkFBYixDQUE4QixXQUE5QixFQUEyQyxVQUFDQyxLQUFELEVBQVc7TUFDckQsSUFBSW1ELEtBQUssR0FBR25ELEtBQUssQ0FBQ29ELGNBQU4sQ0FBcUIsQ0FBckIsQ0FBWjtNQUNBSCxTQUFTLENBQUNFLEtBQUssQ0FBQ0osS0FBUCxFQUFjSSxLQUFLLENBQUNILEtBQXBCLENBQVQ7SUFDQSxDQUhEO0lBS0F0TCxJQUFJLENBQUM2QyxPQUFMLENBQWF3RixnQkFBYixDQUE4QixTQUE5QixFQUF5QyxVQUFDQyxLQUFELEVBQVc7TUFDbkRrRCxPQUFPLENBQUNsRCxLQUFLLENBQUMrQyxLQUFQLEVBQWMvQyxLQUFLLENBQUNnRCxLQUFwQixDQUFQO0lBQ0EsQ0FGRDtJQUlBdEwsSUFBSSxDQUFDNkMsT0FBTCxDQUFhd0YsZ0JBQWIsQ0FBOEIsVUFBOUIsRUFBMEMsVUFBQ0MsS0FBRCxFQUFXO01BQ3BELElBQUltRCxLQUFLLEdBQUduRCxLQUFLLENBQUNvRCxjQUFOLENBQXFCLENBQXJCLENBQVo7TUFDQUYsT0FBTyxDQUFDQyxLQUFLLENBQUNKLEtBQVAsRUFBY0ksS0FBSyxDQUFDSCxLQUFwQixDQUFQO0lBQ0EsQ0FIRDtJQUtBdEwsSUFBSSxDQUFDNkMsT0FBTCxDQUFhd0YsZ0JBQWIsQ0FBOEIsYUFBOUIsRUFBNkMsVUFBQ0MsS0FBRCxFQUFXO01BQ3ZELElBQUltRCxLQUFLLEdBQUduRCxLQUFLLENBQUNvRCxjQUFOLENBQXFCLENBQXJCLENBQVo7TUFDQUYsT0FBTyxDQUFDQyxLQUFLLENBQUNKLEtBQVAsRUFBY0ksS0FBSyxDQUFDSCxLQUFwQixDQUFQO0lBQ0EsQ0FIRDtFQUlBLENBNUJEOztFQThCQSxLQUFLcUUsU0FBTCxHQUFpQixVQUFDQyxXQUFELEVBQWlCO0lBQ2pDQSxXQUFXLENBQUMvTSxPQUFaLENBQW9Cd0YsZ0JBQXBCLENBQXFDLFdBQXJDLEVBQWtELFVBQUNDLEtBQUQsRUFBVztNQUM1REEsS0FBSyxDQUFDQyxjQUFOO01BQ0FrQixLQUFLLENBQUNtRyxXQUFELENBQUw7TUFFQXJFLFNBQVMsQ0FBQ2pELEtBQUssQ0FBQytDLEtBQVAsRUFBYy9DLEtBQUssQ0FBQ2dELEtBQXBCLENBQVQ7SUFDQSxDQUxEO0lBT0FzRSxXQUFXLENBQUMvTSxPQUFaLENBQW9Cd0YsZ0JBQXBCLENBQXFDLFlBQXJDLEVBQW1ELFVBQUNDLEtBQUQsRUFBVztNQUM3REEsS0FBSyxDQUFDQyxjQUFOO01BQ0FrQixLQUFLLENBQUNtRyxXQUFELENBQUw7TUFFQSxJQUFJbkUsS0FBSyxHQUFHbkQsS0FBSyxDQUFDb0QsY0FBTixDQUFxQixDQUFyQixDQUFaO01BQ0FILFNBQVMsQ0FBQ0UsS0FBSyxDQUFDSixLQUFQLEVBQWNJLEtBQUssQ0FBQ0gsS0FBcEIsQ0FBVDtJQUNBLENBTkQ7RUFPQSxDQWZEOztFQWlCQSxLQUFLdUUsU0FBTCxHQUFpQixVQUFDNUIsSUFBRCxFQUFPNkIsUUFBUCxFQUFvQjtJQUNwQ0osU0FBUyxDQUFDMUosSUFBVixDQUFlO01BQ2QsUUFBUWlJLElBRE07TUFFZCxZQUFZNkI7SUFGRSxDQUFmO0VBSUEsQ0FMRDs7RUFPQSxJQUFNckcsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ21HLFdBQUQsRUFBaUI7SUFDOUI7SUFDQTtJQUNBO0lBQ0EsSUFBTUcsS0FBSyxHQUFHSCxXQUFXLENBQUNJLFlBQVosRUFBZDtJQUNBaFEsSUFBSSxDQUFDNkMsT0FBTCxDQUFhcUIsV0FBYixDQUF5QjZMLEtBQXpCO0lBQ0FBLEtBQUssQ0FBQ2hKLEtBQU4sQ0FBWWtKLFFBQVosR0FBdUIsVUFBdkI7SUFDQUYsS0FBSyxDQUFDaEosS0FBTixDQUFZbEMsR0FBWixHQUFrQixDQUFsQjtJQUNBa0wsS0FBSyxDQUFDaEosS0FBTixDQUFZdEMsSUFBWixHQUFtQixDQUFuQjtJQUNBc0wsS0FBSyxDQUFDaEosS0FBTixDQUFZbUosTUFBWixHQUFxQixHQUFyQjtJQUNBSCxLQUFLLENBQUNoSixLQUFOLENBQVlvSixNQUFaLEdBQXFCLFNBQXJCO0lBRUFWLFFBQVEsR0FBR0csV0FBWDtJQUNBSixXQUFXLEdBQUdPLEtBQWQ7RUFDQSxDQWREOztFQWdCQSxJQUFNeEUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7SUFDM0IsSUFBR3VELFdBQVcsS0FBSyxJQUFuQixFQUF5QjtNQUN4QixJQUFNakwsSUFBSSxHQUFHdkUsSUFBSSxDQUFDNkMsT0FBTCxDQUFhMkIscUJBQWIsRUFBYjtNQUNBLElBQU00SCxLQUFLLEdBQUc3SCxJQUFJLENBQUNFLElBQUwsR0FBWXpFLElBQUksQ0FBQzZDLE9BQUwsQ0FBYTZCLFVBQXpCLEdBQXNDQyxNQUFNLENBQUNDLFdBQTNEO01BQ0EsSUFBTTRILEtBQUssR0FBR2pJLElBQUksQ0FBQ00sR0FBTCxHQUFZN0UsSUFBSSxDQUFDNkMsT0FBTCxDQUFhaUMsU0FBekIsR0FBcUNILE1BQU0sQ0FBQ0ksV0FBMUQ7TUFFQXlLLFdBQVcsQ0FBQ3pJLEtBQVosQ0FBa0J0QyxJQUFsQixHQUEwQnVILENBQUMsR0FBR0ksS0FBSixHQUFZb0QsV0FBVyxDQUFDWSxXQUFaLEdBQTBCLENBQXZDLEdBQTRDLElBQXJFO01BQ0FaLFdBQVcsQ0FBQ3pJLEtBQVosQ0FBa0JsQyxHQUFsQixHQUF5Qm9ILENBQUMsR0FBR08sS0FBSixHQUFZZ0QsV0FBVyxDQUFDYSxZQUFaLEdBQTJCLENBQXhDLEdBQTZDLElBQXJFO01BQ0EsT0FBTyxJQUFQO0lBQ0E7O0lBRUQsT0FBTyxLQUFQO0VBQ0EsQ0FaRDs7RUFjQSxJQUFNN0UsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ1EsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7SUFDekIsSUFBR3VELFdBQVcsS0FBSyxJQUFuQixFQUF5QjtNQUFBLDJDQUVORSxTQUZNO01BQUE7O01BQUE7UUFFeEIsb0RBQTZCO1VBQUEsSUFBbkJ6QixJQUFtQjtVQUM1QjtVQUNBO1VBQ0E7VUFDQSxJQUFNcUMsV0FBVyxHQUFHckMsSUFBSSxDQUFDQSxJQUFMLENBQVVwTCxPQUE5Qjs7VUFDQSxJQUFHeU4sV0FBVyxDQUFDcEgsVUFBWixDQUF1Qm5DLEtBQXZCLENBQTZCQyxPQUE3QixLQUF5QyxNQUE1QyxFQUFvRDtZQUNuRDtVQUNBLENBUDJCLENBUzVCO1VBQ0E7VUFDQTs7O1VBQ0EsSUFBTXpDLElBQUksR0FBRytMLFdBQVcsQ0FBQzlMLHFCQUFaLEVBQWI7VUFDQSxJQUFNK0wsS0FBSyxHQUFHaE0sSUFBSSxDQUFDRSxJQUFMLEdBQVk2TCxXQUFXLENBQUM1TCxVQUF4QixHQUFxQ0MsTUFBTSxDQUFDQyxXQUExRDtVQUNBLElBQU00TCxLQUFLLEdBQUdqTSxJQUFJLENBQUNNLEdBQUwsR0FBV3lMLFdBQVcsQ0FBQ3hMLFNBQXZCLEdBQW1DSCxNQUFNLENBQUNJLFdBQXhEOztVQUVBLElBQUdpSCxDQUFDLElBQUl1RSxLQUFMLElBQ0Z0RSxDQUFDLElBQUl1RSxLQURILElBRUZ4RSxDQUFDLEdBQUd1RSxLQUFLLElBQUloTSxJQUFJLENBQUMrSCxLQUFMLEdBQWEvSCxJQUFJLENBQUNFLElBQXRCLENBRlAsSUFHRndILENBQUMsR0FBR3VFLEtBQUssSUFBSWpNLElBQUksQ0FBQ21JLE1BQUwsR0FBY25JLElBQUksQ0FBQ00sR0FBdkIsQ0FIVixFQUd1QztZQUN0Q29KLElBQUksQ0FBQzZCLFFBQUwsQ0FBY0wsUUFBZCxFQUF3QnpELENBQUMsR0FBR3VFLEtBQTVCLEVBQW1DdEUsQ0FBQyxHQUFHdUUsS0FBdkM7WUFDQTtVQUNBO1FBQ0Q7TUF6QnVCO1FBQUE7TUFBQTtRQUFBO01BQUE7O01BMkJ4QnhRLElBQUksQ0FBQzZDLE9BQUwsQ0FBYXdMLFdBQWIsQ0FBeUJtQixXQUF6QjtNQUNBQSxXQUFXLEdBQUcsSUFBZDtNQUNBQyxRQUFRLEdBQUcsSUFBWDtJQUNBO0VBQ0QsQ0FoQ0Q7O0VBb0NBM0ksVUFBVTtBQUNWLENBL0hNOzs7Ozs7Ozs7Ozs7OztBQ0pQO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTWdHLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQVcsQ0FDL0IsQ0FETTtBQUdQO0FBQ0E7QUFDQTtBQUNBOztBQUNBQSxLQUFLLENBQUNNLEVBQU4sR0FBVyxVQUFTcUQsRUFBVCxFQUFhO0VBQ3BCLElBQUk3TSxRQUFRLENBQUM4TSxXQUFULEdBQXVCOU0sUUFBUSxDQUFDK00sVUFBVCxLQUF3QixVQUEvQyxHQUE0RC9NLFFBQVEsQ0FBQytNLFVBQVQsS0FBd0IsU0FBeEYsRUFBa0c7SUFDOUZGLEVBQUU7RUFDTCxDQUZELE1BRU87SUFDSDdNLFFBQVEsQ0FBQ3lFLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q29JLEVBQTlDO0VBQ0g7QUFDSixDQU5EOzs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUVPLElBQU1wUixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQVcsQ0FBRSxDQUF2Qzs7QUFFUEEsaUJBQWlCLENBQUNFLE1BQWxCLEdBQTJCLFVBQVNFLElBQVQsRUFBZTtFQUV6QyxTQUFTbVIsT0FBVCxHQUFtQjtJQUNsQixJQUFNdEQsUUFBUSxHQUFHMUosUUFBUSxDQUFDMkosZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQWpCOztJQUNBLEtBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDRixRQUFRLENBQUMzSyxNQUF4QixFQUFnQzZLLENBQUMsRUFBakMsRUFBcUM7TUFDcEMsSUFBSTNLLE9BQU8sR0FBR3lLLFFBQVEsQ0FBQ0UsQ0FBRCxDQUF0QjtNQUNBLElBQU1xRCxJQUFJLEdBQUdwUCxJQUFJLENBQUNnRyxLQUFMLENBQVc1RSxPQUFPLENBQUNpTyxXQUFuQixDQUFiO01BQ0FqTyxPQUFPLENBQUNtQixTQUFSLEdBQW9CLEVBQXBCO01BQ0EsSUFBTXlDLFVBQVUsR0FBRyxJQUFJckgsOERBQUosQ0FBZUssSUFBZixFQUFxQm9ELE9BQXJCLEVBQThCZ08sSUFBOUIsQ0FBbkI7TUFDQXBLLFVBQVUsQ0FBQzBHLFFBQVg7SUFDQTtFQUNEOztFQUVEMU4sSUFBSSxDQUFDeU4sS0FBTCxDQUFZLFlBQU07SUFDakIwRCxPQUFPO0VBQ1AsQ0FGRDtFQUtBblIsSUFBSSxDQUFDc1IsZUFBTCxDQUFxQixVQUFDbkwsR0FBRCxFQUFNM0UsSUFBTixFQUFlO0lBQ25DLFFBQU8yRSxHQUFQO01BQ0MsS0FBSyx5QkFBTDtRQUNDZ0wsT0FBTztRQUNQOztNQUVELEtBQUssNEJBQUw7UUFDQ0EsT0FBTztRQUNQO0lBUEY7RUFVQSxDQVhEO0VBYUFuUixJQUFJLENBQUNMLFVBQUwsR0FBa0JBLDhEQUFsQjtBQUNBLENBaENEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ3VOO0FBQ2pCO0FBQ087QUFDN00sNENBQTRDLHNJQUF1QztBQUNuRiw0Q0FBNEMsMEhBQWlDO0FBQzdFLDhCQUE4QixxTEFBMkIsQ0FBQyw4TEFBcUM7QUFDL0YseUNBQXlDLHdMQUErQjtBQUN4RSx5Q0FBeUMsd0xBQStCO0FBQ3hFO0FBQ0EsdUVBQXVFLHVCQUF1QixjQUFjLHVCQUF1QixpQ0FBaUMsaUJBQWlCLDRGQUE0RixrRUFBa0UscUJBQXFCLDZCQUE2QixnQkFBZ0IsOEJBQThCLGlCQUFpQix1QkFBdUIsaUNBQWlDLGtDQUFrQyxtQkFBbUIsR0FBRyw0Q0FBNEMsd0JBQXdCLDhCQUE4QixtQ0FBbUMsaUJBQWlCLEdBQUcsdUJBQXVCLGtCQUFrQixHQUFHLHlDQUF5QyxtQkFBbUIsdUJBQXVCLGlCQUFpQixjQUFjLGNBQWMsZUFBZSw4QkFBOEIsc0NBQXNDLHNCQUFzQixHQUFHLGdEQUFnRCx3QkFBd0IsR0FBRywwQ0FBMEMsc0JBQXNCLG9CQUFvQixHQUFHLDRDQUE0QyxrRUFBa0Usc0JBQXNCLGlCQUFpQiwwQkFBMEIsR0FBRyxtR0FBbUcsaUJBQWlCLEdBQUcsNENBQTRDLDBCQUEwQixjQUFjLGNBQWMsZUFBZSxHQUFHLHNEQUFzRCw2QkFBNkIsZ0JBQWdCLGlCQUFpQiw2REFBNkQsR0FBRyxpREFBaUQsMEJBQTBCLGNBQWMsY0FBYyxxQ0FBcUMsdUJBQXVCLEdBQUcsbURBQW1ELGtFQUFrRSxzQkFBc0IsaUJBQWlCLDBCQUEwQixHQUFHLGlIQUFpSCxpQkFBaUIsR0FBRywrQ0FBK0MsdUJBQXVCLGVBQWUsZ0NBQWdDLGdCQUFnQiw0RkFBNEYsMEJBQTBCLHVCQUF1QixxQkFBcUIsWUFBWSxjQUFjLHNCQUFzQiw4QkFBOEIsZUFBZSw4QkFBOEIsd0JBQXdCLEdBQUcsb0RBQW9ELG1CQUFtQixjQUFjLHFCQUFxQixHQUFHLHNEQUFzRCwwQkFBMEIsZUFBZSxxQkFBcUIsd0JBQXdCLEdBQUcsb0VBQW9FLGlCQUFpQixHQUFHLCtEQUErRCx3QkFBd0IsZUFBZSxpQkFBaUIsOEJBQThCLG1DQUFtQyxHQUFHLDJEQUEyRCxlQUFlLEdBQUcsNkRBQTZELGdCQUFnQixHQUFHLDJEQUEyRCxlQUFlLEdBQUcsMkRBQTJELGlCQUFpQixHQUFHLDZEQUE2RCxlQUFlLEdBQUcsNERBQTRELGdCQUFnQiwwQkFBMEIsMEJBQTBCLEdBQUcsZ0NBQWdDLG1CQUFtQix1QkFBdUIsZ0JBQWdCLHNCQUFzQixHQUFHLHlDQUF5Qyx1QkFBdUIsWUFBWSxhQUFhLFdBQVcsY0FBYyxxQkFBcUIsa0JBQWtCLGtCQUFrQixrQkFBa0IsR0FBRyxvQ0FBb0Msd0JBQXdCLG9CQUFvQix1QkFBdUIsV0FBVyxZQUFZLGFBQWEsY0FBYyxxQkFBcUIsa0JBQWtCLDJCQUEyQixHQUFHLDRCQUE0Qix1QkFBdUIsWUFBWSxhQUFhLFdBQVcsY0FBYyxzQkFBc0IsR0FBRyw4QkFBOEIsdUJBQXVCLGdCQUFnQixrQkFBa0IsY0FBYyxlQUFlLCtCQUErQix3QkFBd0Isc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRywrREFBK0Qsa0JBQWtCLHFCQUFxQixnQkFBZ0IsR0FBRyxpQ0FBaUMsZ0JBQWdCLEdBQUcsc0NBQXNDLHVCQUF1QixZQUFZLFdBQVcsY0FBYyxhQUFhLHNCQUFzQixlQUFlLHFCQUFxQixjQUFjLEdBQUcseUNBQXlDLGNBQWMseUJBQXlCLDRCQUE0QixjQUFjLHFCQUFxQixHQUFHLDhDQUE4Qyx1QkFBdUIsMEJBQTBCLHNCQUFzQixvQ0FBb0MsbUJBQW1CLHVCQUF1QixvQkFBb0IscUJBQXFCLDRCQUE0Qix3QkFBd0IsK0JBQStCLDJCQUEyQix3QkFBd0IsZ0JBQWdCLEdBQUcsNERBQTRELGtFQUFrRSwwQkFBMEIsc0JBQXNCLDBCQUEwQixpQkFBaUIsZUFBZSxzQkFBc0IsR0FBRyw2REFBNkQsaUJBQWlCLDBCQUEwQixxQkFBcUIsZUFBZSxHQUFHLGlFQUFpRSxnQkFBZ0IsaUJBQWlCLEdBQUcsdURBQXVELHNCQUFzQixnQkFBZ0IsR0FBRyx5REFBeUQsaUJBQWlCLEdBQUcsb0RBQW9ELHVCQUF1QixZQUFZLGNBQWMsYUFBYSxjQUFjLGdCQUFnQixHQUFHLG1EQUFtRCx1QkFBdUIsa0JBQWtCLFlBQVksV0FBVyxhQUFhLGNBQWMsaUJBQWlCLGdCQUFnQixnQkFBZ0IsY0FBYyxlQUFlLGNBQWMsR0FBRyw0REFBNEQsbUJBQW1CLGdDQUFnQyxHQUFHLHFDQUFxQyx1QkFBdUIsNEJBQTRCLFdBQVcsdUJBQXVCLGVBQWUsZ0NBQWdDLGdCQUFnQiw0RkFBNEYsR0FBRyx5Q0FBeUMsdUJBQXVCLGdCQUFnQixpQkFBaUIsYUFBYSxZQUFZLDhCQUE4QiwyQkFBMkIsOEJBQThCLEdBQUcsNkNBQTZDLHVCQUF1QixXQUFXLFlBQVksZ0JBQWdCLGlCQUFpQixHQUFHLHdDQUF3QywwQkFBMEIscUJBQXFCLHVCQUF1Qiw4QkFBOEIsZUFBZSw4QkFBOEIsR0FBRyw2Q0FBNkMsbUJBQW1CLGNBQWMscUJBQXFCLEdBQUcsK0NBQStDLDBCQUEwQixlQUFlLHFCQUFxQix3QkFBd0IsR0FBRyw2REFBNkQsaUJBQWlCLEdBQUcsa0RBQWtELHdCQUF3QixlQUFlLGlCQUFpQiw4QkFBOEIsbUNBQW1DLEdBQUcseU5BQXlOLHVCQUF1QixrQkFBa0IsbUJBQW1CLDJCQUEyQixzQkFBc0IsR0FBRyw0Q0FBNEMsdUJBQXVCLG1CQUFtQixpQ0FBaUMsR0FBRyx1REFBdUQsdUJBQXVCLGNBQWMsY0FBYyxlQUFlLFdBQVcsaUJBQWlCLGdCQUFnQixnQkFBZ0IsNEJBQTRCLGlCQUFpQixzQkFBc0IsR0FBRywyQ0FBMkMsbUJBQW1CLGdCQUFnQixrQ0FBa0MsR0FBRyxzREFBc0QsdUJBQXVCLGNBQWMsY0FBYyxlQUFlLGlCQUFpQixpQkFBaUIsZ0JBQWdCLDRCQUE0QixlQUFlLHNCQUFzQixHQUFHLDhDQUE4QyxnQkFBZ0IsaUJBQWlCLEdBQUcsNENBQTRDLHVCQUF1QixZQUFZLGFBQWEsV0FBVyxjQUFjLEdBQUcsb0JBQW9CLDBCQUEwQixtQkFBbUIscUJBQXFCLGVBQWUsbUJBQW1CLHFCQUFxQixjQUFjLEdBQUcsb0JBQW9CLHFCQUFxQixzQkFBc0IsY0FBYyx1QkFBdUIsY0FBYyxzQkFBc0IsZ0JBQWdCLEdBQUcscUJBQXFCLDJCQUEyQixHQUFHLDBCQUEwQixjQUFjLGlCQUFpQixrQkFBa0Isc0JBQXNCLEdBQUcsdUNBQXVDLGlCQUFpQixHQUFHLDBDQUEwQyxxQkFBcUIsdUJBQXVCLEdBQUcseUNBQXlDLHVCQUF1QixHQUFHLDZDQUE2QyxxQkFBcUIsR0FBRyxpREFBaUQsdUJBQXVCLFlBQVksV0FBVyxjQUFjLGdCQUFnQixzQkFBc0IsZUFBZSxrQkFBa0Isd0JBQXdCLEdBQUcsa0VBQWtFLGNBQWMsbUJBQW1CLG1CQUFtQixpQkFBaUIsR0FBRywyRUFBMkUsc0JBQXNCLGNBQWMseUJBQXlCLGNBQWMsbUJBQW1CLGdCQUFnQixpQkFBaUIscUJBQXFCLG1CQUFtQixzQ0FBc0MscUJBQXFCLDBCQUEwQixHQUFHLDZDQUE2QyxxQkFBcUIsR0FBRyxpREFBaUQsdUJBQXVCLFlBQVksV0FBVyxjQUFjLGdCQUFnQixzQkFBc0IsZUFBZSxrQkFBa0Isd0JBQXdCLEdBQUcscURBQXFELG1CQUFtQixtQkFBbUIsZ0VBQWdFLHNCQUFzQixjQUFjLHlCQUF5QixjQUFjLG1CQUFtQixpQkFBaUIsR0FBRyxPQUFPLGk5QkFBaTlCLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sYUFBYSxZQUFZLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FB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O1dBQ0E7V0FDQTs7Ozs7V0NoREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2luZGV4LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvQWN0aW9ucy9BYm91dEFjdGlvbi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvQWN0aW9ucy9BbGxBY3Rpb25zLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvQWN0aW9ucy9TYXZlQWN0aW9uLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvRE9NL1Rvb2xzLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvR3JhcGhpY3MvVG9hc3QuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9NYWluLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvTWVudS5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9QYW5lLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvUGxheWdyb3VuZC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1RhYnMuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9UYWJzL0VkaXRvclRhYi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1RhYnMvT3V0cHV0VGFiLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVGFicy9UYWIuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9VSS9EcmFnQW5kRHJvcC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1V0aWxpdHkvUmVhZHkuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvX3BsYXlncm91bmQuc2NzcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9fcGxheWdyb3VuZC5zY3NzPzQ3NDkiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vLnlhcm4vY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMTguOS0yOGNhNmI1ZjYxLTM2ZGQ3MzZiYWIuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAnLi9fcGxheWdyb3VuZC5zY3NzJztcbmltcG9ydCB7UGxheWdyb3VuZH0gZnJvbSAnLi9qcy9QbGF5Z3JvdW5kL1BsYXlncm91bmQnO1xuaW1wb3J0IHtQbGF5Z3JvdW5kRmFjdG9yeX0gZnJvbSAnLi9qcy9QbGF5Z3JvdW5kRmFjdG9yeSc7XG5cbmV4cG9ydCB7UGxheWdyb3VuZH07XG5leHBvcnQge1BsYXlncm91bmQgYXMgZGVmYXVsdH07XG5cblBsYXlncm91bmRGYWN0b3J5LmNyZWF0ZShTaXRlLnNpdGUpO1xuXG5TaXRlLlBsYXlncm91bmQgPSBQbGF5Z3JvdW5kO1xuXG4iLCJpbXBvcnQge0FjdGlvbn0gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdkaWFsb2ctY2wnO1xuaW1wb3J0IHBhY2thZ2Vqc29uIGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbic7XG5cbmV4cG9ydCBjb25zdCBBYm91dEFjdGlvbiA9IGZ1bmN0aW9uKHNpdGUsIG9wdGlvbnMpIHtcblx0QWN0aW9uLmNhbGwodGhpcywgc2l0ZSwgb3B0aW9ucyk7XG5cblx0dGhpcy5kbyA9IGZ1bmN0aW9uKG1haW4pIHtcblx0XHRBY3Rpb24ucHJvdG90eXBlLmRvLmNhbGwodGhpcywgbWFpbik7XG5cblx0XHQvLyBEaWFsb2cgYm94IGNvbnRlbnRzXG5cdFx0bGV0IGNvbnRlbnQgPSBgXG48ZmlndXJlPjxpbWcgc3JjPVwiJHtzaXRlLnJvb3R9L3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2ltZy9wbGF5Z3JvdW5kLmpwZ1wiIGFsdD1cIkNpcnNpbSBMb2dvXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIyMjVcIj48L2ZpZ3VyZT5cbjxkaXYgY2xhc3M9XCJjbC1wZy1hYm91dC1kaXZcIj5cbjxoMT5Db3Vyc2VMaWIgUGxheWdyb3VuZDwvaDE+XG48cD5WZXJzaW9uOiAke3BhY2thZ2Vqc29uLnZlcnNpb259PC9wPlxuPHA+V3JpdHRlbiBieTogQ2hhcmxlcyBCLiBPd2VuPC9wPjwvZGl2PmA7XG5cblx0XHRjb25zdCBkaWFsb2cgPSBuZXcgRGlhbG9nKHtcblx0XHRcdHRpdGxlOiAnQWJvdXQgdGhlIFBsYXlncm91bmQnLFxuXHRcdFx0Y29udGVudDogY29udGVudCxcblx0XHRcdCdhZGRDbGFzcyc6ICdjbC1wZy1hYm91dCdcblx0XHR9KTtcblxuXHR9XG59XG5cbkFib3V0QWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWN0aW9uLnByb3RvdHlwZSk7XG5BYm91dEFjdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBYm91dEFjdGlvbjtcblxuQWJvdXRBY3Rpb24udGFnID0gJ2Fib3V0JzsiLCIvKipcbiAqIEJhc2Ugb2JqZWN0IGZvciBhbiBhY3Rpb24uXG4gKiBAcGFyYW0gc2l0ZSBTaXRlIG9iamVjdFxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBwYXNzZWQgdG8gdGhpcyBhY3Rpb25cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgQWN0aW9uID0gZnVuY3Rpb24oc2l0ZSwgb3B0aW9ucykge1xuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHNvdXJjZXMgZm9yIHRoaXMgYWN0aW9uLlxuXHQgKlxuXHQgKiBCYXNlZCBvbiB0aGUgb3B0aW9uICdzb3VyY2VzJywgd2hpY2ggYXJlIHRhYiB0YWdzLlxuXHQgKiBAcmV0dXJuIG9iamVjdCB3aXRoIHRhYiBuYW1lcyBhbmQgc291cmNlcy5cblx0ICovXG5cdHRoaXMuZ2V0U291cmNlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdC8vIEdldCB0aGUgcmVxdWlzaXRlIHRhYiBjb250ZW50c1xuXHRcdGNvbnN0IHNvdXJjZXMgPSB7fTtcblxuXHRcdGlmKG9wdGlvbnMuc291cmNlcyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc291cmNlcyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHNvdXJjZXM7XG5cdFx0fVxuXG5cdFx0Zm9yKGNvbnN0IHNvdXJjZSBvZiBvcHRpb25zLnNvdXJjZXMpIHtcblx0XHRcdGNvbnN0IHRhYiA9IHRoaXMubWFpbi5nZXRUYWIoc291cmNlKTtcblx0XHRcdGlmKHRhYiAhPT0gbnVsbCkge1xuXHRcdFx0XHRzb3VyY2VzW3NvdXJjZV0gPSB7bmFtZTogdGFiLm5hbWUsIGRhdGE6IHRhYi5nZXQoKX07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNvdXJjZXM7XG5cdH1cblxuXG59XG5cbkFjdGlvbi5wcm90b3R5cGUuZG8gPSBmdW5jdGlvbihtYWluKSB7XG5cdHRoaXMubWFpbiA9IG1haW47XG59IiwiaW1wb3J0IHtTYXZlQWN0aW9ufSBmcm9tICcuL1NhdmVBY3Rpb24nO1xuaW1wb3J0IHtBYm91dEFjdGlvbn0gZnJvbSAnLi9BYm91dEFjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBBbGxBY3Rpb25zID0gZnVuY3Rpb24oKSB7fVxuXG5BbGxBY3Rpb25zLmFkZEFsbCA9IGZ1bmN0aW9uKFBsYXlncm91bmQpIHtcblx0UGxheWdyb3VuZC5hZGRBY3Rpb24oU2F2ZUFjdGlvbik7XG5cdFBsYXlncm91bmQuYWRkQWN0aW9uKEFib3V0QWN0aW9uKTtcbn0iLCJpbXBvcnQge0FjdGlvbn0gZnJvbSAnLi9BY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgU2F2ZUFjdGlvbiA9IGZ1bmN0aW9uKHNpdGUsIG9wdGlvbnMpIHtcblx0QWN0aW9uLmNhbGwodGhpcywgc2l0ZSwgb3B0aW9ucyk7XG5cblx0dGhpcy5kbyA9IGZ1bmN0aW9uKG1haW4pIHtcblx0XHRBY3Rpb24ucHJvdG90eXBlLmRvLmNhbGwodGhpcywgbWFpbik7XG5cblx0XHQvLyBHZXQgdGhlIHJlcXVpc2l0ZSB0YWIgY29udGVudHNcblx0XHRjb25zdCBzb3VyY2VzID0gdGhpcy5nZXRTb3VyY2VzKCk7XG5cblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhcHBUYWc6IG9wdGlvbnMuYXBwVGFnLFxuXHRcdFx0bmFtZTogb3B0aW9ucy5uYW1lLFxuXHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkoc291cmNlcyksXG5cdFx0XHR0eXBlOiAnYXBwbGljYXRpb24vanNvbidcblx0XHR9O1xuXG5cdFx0c2l0ZS5hcGkucG9zdCgnL2FwaS9maWxlc3lzdGVtL3NhdmUnLCBwYXJhbXMpXG5cdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0XHRpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcblx0XHRcdFx0XHRzaXRlLnRvYXN0KHRoaXMsICdTdWNjZXNzZnVsbHkgc2F2ZWQgdG8gc2VydmVyJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdFx0c2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5TYXZlQWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWN0aW9uLnByb3RvdHlwZSk7XG5TYXZlQWN0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNhdmVBY3Rpb247XG5cblNhdmVBY3Rpb24udGFnID0gJ3NhdmUnOyIsIlxuXG4vKipcbiAqIENvbnZlbmllbmNlIGZ1bmN0aW9ucyBmb3IgdGhlIERPTS5cbiAqIFRvb2xzIHRoYXQgYXZvaWQgaGF2aW5nIHRvIGhhdmUgalF1ZXJ5IGluc3RhbGxlZC5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgVG9vbHMgPSBmdW5jdGlvbigpIHtcblxufVxuXG4vKipcbiAqIElzIGFuIGVsZW1lbnQgdmlzaWJsZT9cbiAqIEJvcnJvd2VkIGZyb20galF1ZXJ5IVxuICogQHBhcmFtIGVsZW1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5Ub29scy5pc1Zpc2libGUgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgICByZXR1cm4gISEoIGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCApO1xufTtcblxuLyoqXG4gKiBBZGQgYSBjbGFzcyB0byBhbiBlbGVtZW50XG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGFkZCB0b1xuICogQHBhcmFtIGNsYXNzTmFtZSBDbGFzcyB0byBhZGRcbiAqL1xuVG9vbHMuYWRkQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsc2VcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xufVxuXG5Ub29scy5hZGRDbGFzc2VzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc3Nlcykge1xuICAgIGlmKGNsYXNzZXMgPT09IHVuZGVmaW5lZCB8fCBjbGFzc2VzID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaCgoY2xzKSA9PiB7XG4gICAgICAgIFRvb2xzLmFkZENsYXNzKGVsZW1lbnQsIGNscyk7XG4gICAgfSk7XG59XG5cblRvb2xzLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgbGV0IHJlZ0V4ID0gbmV3IFJlZ0V4cCgnXFxcXGInICsgY2xhc3NOYW1lICsgJ1xcXFxiJywgJ2cnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmVnRXgsIFwiXCIpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIERJViB3aXRoIGEgcHJvdmlkZWQgY2xhc3MgbmFtZS5cbiAqIEBwYXJhbSBjbGFzc05hbWUgQ2xhc3MgdG8gYWRkIHRvIHRoZSBkaXZcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGRpdi4gSFRNTCBvciBFbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gQ3JlYXRlZCBET00gRWxlbWVudFxuICovXG5Ub29scy5jcmVhdGVDbGFzc2VkRGl2ID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBjb250ZW50KSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRvb2xzLmFkZENsYXNzKGRpdiwgY2xhc3NOYW1lKTtcbiAgICBpZihjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcblx0ICAgIFRvb2xzLmFkZENvbnRlbnQoZGl2LCBjb250ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuLyoqXG4gKiBBZGQgY29udGVudCB0byBhbiBlbGVtZW50LlxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBhZGQgdG9cbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQuIENhbiBiZSBIVE1MIG9yIGFuIEVsZW1lbnQuXG4gKi9cblRvb2xzLmFkZENvbnRlbnQgPSBmdW5jdGlvbihlbGVtZW50LCBjb250ZW50KSB7XG4gICAgaWYoVG9vbHMuaXNTdHJpbmcoY29udGVudCkpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gY29udGVudDtcbiAgICB9IGVsc2UgaWYoVG9vbHMuaXNFbGVtZW50KGNvbnRlbnQpKSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgfVxufVxuXG4vKipcbiAqIElzIHRoZSBwYXNzZWQgdmFsdWUgYSBzdHJpbmc/XG4gKiBAcGFyYW0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuVG9vbHMuaXNTdHJpbmcgPSBmdW5jdGlvbih2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgKCghIXZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JykgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKTtcbn1cblxuLyoqXG4gKiBJcyB0aGUgcGFzc2VkIHZhbHVlIGFuIEhUTUxFbGVtZW50P1xuICogQHBhcmFtIHZhbFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblRvb2xzLmlzRWxlbWVudCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgJiYgdmFsLm5vZGVWYWx1ZSAhPT0gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEdldCB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IChzcGVjaWZpY2FsbHkgaXRzIGJvcmRlciBib3gsIHdoaWNoIGV4Y2x1ZGVzIG1hcmdpbnMpIHJlbGF0aXZlIHRvIHRoZSBkb2N1bWVudC5cbiAqIEBwYXJhbSBlbGVtZW50XG4gKi9cblRvb2xzLm9mZnNldCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0Y29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdHJldHVybiB7XG5cdCAgICBsZWZ0OiByZWN0LmxlZnQgKyBlbGVtZW50LnNjcm9sbExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyBlbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldFxuICAgIH1cbn1cblxuLyoqXG4gKiBGaW5kIGEgY2hpbGQgYnkgdGFnTmFtZVxuICogQHBhcmFtIGVsZW1lbnRcbiAqIEBwYXJhbSB0YWdOYW1lXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuVG9vbHMuY2hpbGQgPSBmdW5jdGlvbihlbGVtZW50LCB0YWdOYW1lKSB7XG5cdGZvcihjb25zdCBub2RlIG9mIGVsZW1lbnQuY2hpbGROb2Rlcykge1xuXHQgICAgaWYobm9kZS50YWdOYW1lID09PSB0YWdOYW1lKSB7XG5cdCAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHtUb29sc30gZnJvbSAnLi4vRE9NL1Rvb2xzJztcblxuLyoqXG4gKiBUb2FzdCBub3RpZmljYXRpb24gc3lzdGVtXG4gKiBqUXVlcnktZnJlZVxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgVG9hc3QgPSBmdW5jdGlvbihtYWluKSB7XG5cdC8qKiBEZWZhdWx0IHRvYXN0IGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyAqL1xuXHR0aGlzLmRlZmF1bHREdXJhdGlvbiA9IDIwMDA7XG5cblx0LyoqIEludGVyLXRvYXN0IGRlbGF5IHRpbWUgaW4gbWlsbGlzZWNvbmRzICovXG5cdHRoaXMuaW50ZXJUb2FzdERlbGF5ID0gNTAwO1xuXG4gICAgbGV0IG1lc3NhZ2VzID0gW107ICAvLyBQZW5kaW5nIG1lc3NhZ2VzXG4gICAgbGV0IGFjdGl2ZSA9IGZhbHNlOyAvLyBJcyB0aGVyZSBhbiBhY3RpdmUgbWVzc2FnZSBkaXNwbGF5aW5nP1xuXG5cdGxldCBlbGVtZW50ID0gbnVsbDtcblxuXHQvKipcblx0ICogQ3JlYXRlIHRoZSB0b2FzdCBkaXZcblx0ICogQHBhcmFtIGRpdiBEaXYgdG8gcHV0IHRoZSB0b2FzdCBpbnRvXG5cdCAqL1xuICAgIHRoaXMuY3JlYXRlID0gKGRpdikgPT4ge1xuXHRcdGVsZW1lbnQgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCd0b2FzdCcpO1xuXHRcdGRpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuXHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gJ3Rlc3RpbmcnO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XG4gICAgXHRpZihtZXNzYWdlcy5sZW5ndGggPiAwICYmICFhY3RpdmUpIHtcblx0XHQgICAgLy8gU2V0IHRoZSBtZXNzYWdlXG5cdFx0ICAgIGxldCBtZXNzYWdlID0gbWVzc2FnZXNbMF07XG4gICAgICAgICAgICBtZXNzYWdlcy5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IG1lc3NhZ2UubXNnO1xuXG4gICAgICAgICAgICAvLyBTaG93IGl0XG5cdFx0ICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9hc3QtYWN0aXZlJyk7XG5cdFx0ICAgIGFjdGl2ZSA9IHRydWU7XG5cblx0XHQgICAgLy8gRGVsYXkgd2hpbGUgYWN0aXZlXG5cdFx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdCAgICBcdC8vIEhpZGUgaXRcblx0XHRcdCAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RvYXN0LWFjdGl2ZScpO1xuXG5cdFx0XHQgICAgLy8gRGVsYXkgYmV0d2VlbiB0b2FzdHNcblx0XHRcdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdCAgICBcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0ICAgIFx0c2hvdygpO1xuXHRcdFx0ICAgIH0sIHRoaXMuaW50ZXJUb2FzdERlbGF5KVxuXHRcdCAgICB9LCBtZXNzYWdlLnRpbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKlxuXHQgKiBEaXNwbGF5IGEgdG9hc3QgbWVzc2FnZVxuXHQgKiBAcGFyYW0gbXNnIE1lc3NhZ2UgdG8gZGlzcGxheVxuXHQgKiBAcGFyYW0gdGltZSBUaW1lIHRvIGRpc3BsYXkgaW4gbWlsbGlzZWNvbmRzLCBvbWl0IGZvciBkZWZhdWx0XG5cdCAqL1xuXHR0aGlzLm1lc3NhZ2UgPSBmdW5jdGlvbihtc2csIHRpbWUpIHtcbiAgICAgICAgaWYodGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aW1lID0gdGhpcy5kZWZhdWx0RHVyYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBtZXNzYWdlcy5wdXNoKHttc2c6IG1zZywgdGltZTogdGltZX0pO1xuICAgICAgICBzaG93KCk7XG4gICAgfVxuXG5cdC8qKlxuXHQgKiBEaXNwbGF5IGFueSBKU09OIGVycm9ycyB3ZSBoYXZlIHJlY2VpdmVkLlxuXHQgKiBAcGFyYW0ganNvbkFwaSBKc29uQVBJIG9iamVjdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBhbnkgZXJyb3JzIGV4aXN0ZWQuXG5cdCAqL1xuXHR0aGlzLmpzb25FcnJvcnMgPSBmdW5jdGlvbihqc29uQXBpKSB7XG4gICAgICAgIGlmKGpzb25BcGkuZXJyb3JzKCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGpzb25BcGkuZXJyb3JzKCkuZm9yRWFjaCgoZXJyb3IpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlKCdTZXJ2ZXIgRXJyb3I6ICcgKyBlcnJvci50aXRsZSwgNTAwMCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuIiwiaW1wb3J0IFJlc2l6ZXIgZnJvbSAncmVzaXplci1jbCc7XG5cbmltcG9ydCB7TWVudX0gZnJvbSAnLi9NZW51JztcbmltcG9ydCB7VG9hc3R9IGZyb20gJy4vR3JhcGhpY3MvVG9hc3QnO1xuaW1wb3J0IHtEcmFnQW5kRHJvcH0gZnJvbSAnLi9VSS9EcmFnQW5kRHJvcCc7XG5pbXBvcnQge1Rvb2xzfSBmcm9tICcuL0RPTS9Ub29scyc7XG5pbXBvcnQge1BhbmV9IGZyb20gXCIuL1BhbmVcIjtcblxuXG4vKipcbiAqIEFjdHVhbCBpbnN0YW5jZSBvZiB0aGUgUGxheWdyb3VuZCBmb3IgYSBzaW5nbGUgZWxlbWVudC5cbiAqIEBwYXJhbSBwbGF5Z3JvdW5kIFRoZSBtYWluIFBsYXlncm91bmQgb2JqZWN0XG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHdlIGFyZSBsb2FkaW5nIGludG9cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgTWFpbiA9IGZ1bmN0aW9uKHBsYXlncm91bmQsIGVsZW1lbnQpIHtcbiAgICB0aGlzLnBsYXlncm91bmQgPSBwbGF5Z3JvdW5kO1xuICAgIHRoaXMuc2l0ZSA9IHBsYXlncm91bmQuc2l0ZTtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyA9IHBsYXlncm91bmQub3B0aW9ucztcblxuICAgIC8vLyBkaXYubWFpblxuICAgIHRoaXMuZGl2ID0gbnVsbDtcblxuICAgIGxldCBvcHRpb25zID0gcGxheWdyb3VuZC5vcHRpb25zO1xuXG4gICAgLy8vIFJlZmVyZW5jZXMgdG8gb3RoZXIgR1VJIGNvbXBvbmVudHNcbiAgICBsZXQgbWVudT1udWxsLCB0YWJzPW51bGw7XG5cbiAgICAvLy8gZGl2Lm92ZXJsYXlcbiAgICBsZXQgZGl2T3ZlcmxheSA9IG51bGwsIGRpdldvcms9bnVsbDtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgXHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQnKTtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cdCAgICBpZihvcHRpb25zLmhlaWdodCAhPT0gbnVsbCkge1xuXHRcdCAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuXHQgICAgfVxuXG4gICAgICAgIHN3aXRjaChvcHRpb25zLmRpc3BsYXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Z1bGwnOlxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1mdWxsJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG5cdCAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC13aW5kb3cnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG9wdGlvbnMuZGlzcGxheSA9PT0gJ3dpbmRvdycpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBBZGQgcmVzaXplciB0byB0aGUgd2luZG93IGlmIGluIHdpbmRvdyBtb2RlXG4gICAgICAgICAgICAvLyBhbmQgaXQgaGFzIG5vdCBhbHJlYWR5IGJlZW4gYWRkZWRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBpZighZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZXNpemVyXCIpKSB7XG4gICAgICAgICAgICAgICAgbmV3IFJlc2l6ZXIoZWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGU6ICcxMHB4IHNvbGlkICMxODQ1M0InXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYWdBbmREcm9wID0gbmV3IERyYWdBbmREcm9wKHRoaXMpO1xuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgYWRkIHRoZSB3aW5kb3cgY29tcG9uZW50c1xuICAgICAgICAvL1xuICAgICAgICBpZihvcHRpb25zLmRpc3BsYXkgIT09ICdpbmxpbmUnICYmIG9wdGlvbnMuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gQWxsIHdpbmRvdy1iYXNlZCB2ZXJzaW9ucyBvdGhlciB0aGFuIGlubGluZSBnZXQgdGhlXG4gICAgICAgICAgICAvLyBmdWxsIHVzZXIgaW50ZXJmYWNlXG4gICAgICAgICAgICAvL1xuXG4gICAgICAgICAgICAvLyA8ZGl2IGNsYXNzPVwibWFpblwiPjwvZGl2PlxuICAgICAgICAgICAgdGhpcy5kaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdjbC1wZy1tYWluJyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kaXYpO1xuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBtZW51XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgbWVudSA9IG5ldyBNZW51KHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5tZW51ID0gbWVudTtcblxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFdvcmtpbmcgYXJlYVxuICAgICAgICAgICAgLy8gPGRpdiBjbGFzcz1cIndvcmtcIj48L2Rpdj5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBkaXZXb3JrID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignd29yaycpO1xuICAgICAgICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQoZGl2V29yayk7XG5cblxuXHRcdFx0Ly9cblx0ICAgICAgICAvLyBBbmQgdGhlIHJvb3QgcGFuZVxuXHQgICAgICAgIC8vXG5cdCAgICAgICAgdGhpcy5yb290UGFuZSA9IG5ldyBQYW5lKHRoaXMsIGRpdldvcmssIG51bGwsIG51bGwpO1xuXHQgICAgICAgIHRoaXMucm9vdFBhbmUubG9hZChvcHRpb25zLnBhbmUpO1xuXG5cdCAgICAgICAgLy9cblx0ICAgICAgICAvLyBBbmQgdGhlIG92ZXJsYXlcblx0ICAgICAgICAvLyA8ZGl2IGNsYXNzPVwiY2lyc2ltLW92ZXJsYXlcIj48L2Rpdj5cblx0ICAgICAgICAvL1xuXHQgICAgICAgIGRpdk92ZXJsYXkgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdjbC1wZy1vdmVybGF5Jyk7XG5cdCAgICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQoZGl2T3ZlcmxheSk7XG5cbiAgICAgICAgICAgIHRoaXMudG9hc3QgPSBuZXcgVG9hc3QodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnRvYXN0LmNyZWF0ZSh0aGlzLmRpdik7XG5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBBbnkgZGF0YSB0byBsb2FkP1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIGlmKG9wdGlvbnMubG9hZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxldCBsb2FkID0gb3B0aW9ucy5sb2FkO1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBsb2FkID09PSAnc3RyaW5nJyB8fCBsb2FkIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWQgPSBKU09OLnBhcnNlKGxvYWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvcihjb25zdCB0YWcgaW4gbG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWIgPSB0aGlzLmdldFRhYih0YWcpO1xuICAgICAgICAgICAgICAgICAgICBpZih0YWIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5zZXQobG9hZFt0YWddKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGhpcy5nZXRUYWIgPSBmdW5jdGlvbih0YWcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdFBhbmUuZ2V0VGFiKHRhZyk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbmV2ZXIgYSBuZXcgdGFiIGlzIHNlbGVjdGVkXG4gICAgICovXG4gICAgdGhpcy5uZXdUYWIgPSBmdW5jdGlvbigpIHtcblxuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBTZXQgb3IgY2xlYXIgaW50ZXJmYWNlIG1vZGFsIHN0YXRlLlxuICAgICAqIEBwYXJhbSBtb2RhbCBUcnVlIHNldHMgaW50ZXJmYWNlIHRvIG1vZGFsIHN0YXRlLlxuICAgICAqXG4gICAgICovXG4gICAgdGhpcy5tb2RhbCA9IGZ1bmN0aW9uKG1vZGFsKSB7XG4gICAgICAgIGlmKG1vZGFsKSB7XG4gICAgICAgICAgICBkaXZPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGl2T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbn1cbiIsImltcG9ydCB7VG9vbHN9IGZyb20gJy4vRE9NL1Rvb2xzJztcblxuLy8gaW1wb3J0IHtGaWxlTWVudX0gZnJvbSAnLi9NZW51cy9GaWxlTWVudSc7XG4vLyBpbXBvcnQge0VkaXRNZW51fSBmcm9tICcuL01lbnVzL0VkaXRNZW51Jztcbi8vIGltcG9ydCB7VGFic01lbnV9IGZyb20gJy4vTWVudXMvVGFic01lbnUnO1xuLy8gaW1wb3J0IHtIZWxwTWVudX0gZnJvbSAnLi9NZW51cy9IZWxwTWVudSc7XG5cbi8qKlxuICogVGhlIHByb2dyYW0gbWVudSBiYXJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IE1lbnUgPSBmdW5jdGlvbihtYWluKSB7XG5cdGNvbnN0IG9wdGlvbnMgPSBtYWluLm9wdGlvbnM7XG5cblxuICAgIC8vXG4gICAgLy8gQ3JlYXRlIHRoZSBtZW51IGNvbXBvbmVudHNcbiAgICAvL1xuICAgIC8vIHZhciBmaWxlTWVudSA9IG5ldyBGaWxlTWVudSh0aGlzLCBtYWluKTtcbiAgICAvLyB2YXIgZWRpdE1lbnUgPSBuZXcgRWRpdE1lbnUodGhpcywgbWFpbik7XG4gICAgLy8gdmFyIHRhYnNNZW51ID0gbmV3IFRhYnNNZW51KHRoaXMsIG1haW4pO1xuICAgIC8vIHZhciBoZWxwTWVudSA9IG5ldyBIZWxwTWVudSh0aGlzLCBtYWluKTtcblxuICAgIC8vLyBUaGUgbmF2IGVsZW1lbnRcbiAgICB0aGlzLm5hdiA9IG51bGw7XG4gICAgdGhpcy51bCA9IG51bGw7XG5cbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgICAvL1xuICAgICAgICAvLyA8bmF2IGNsYXNzPVwibWVudWJhclwiPjx1bD48L3VsPjwvbmF2PlxuICAgICAgICAvL1xuICAgICAgICB0aGlzLm5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgICAgICBUb29scy5hZGRDbGFzcyh0aGlzLm5hdiwgJ2NsLXBnLW1lbnViYXInKTtcbiAgICAgICAgbWFpbi5kaXYuYXBwZW5kQ2hpbGQodGhpcy5uYXYpO1xuXG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdGhpcy5uYXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgICAgICB0aGlzLnVsID0gdWw7XG5cbiAgICAgICAgY29uc3QgbWVudXMgPSBvcHRpb25zLm1lbnVzO1xuICAgICAgICBtZW51cy5wdXNoKHtcblx0ICAgICAgICBuYW1lOiAnSGVscCcsXG5cdCAgICAgICAgbWVudXM6IFtcblx0XHQgICAgICAgIHtuYW1lOiAnQWJvdXQnLCBhY3Rpb246IHt0YWc6ICdhYm91dCd9fVxuXHQgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yKGNvbnN0IG1lbnUgb2YgbWVudXMpIHtcbiAgICAgICAgXHRjb25zdCB0b3BMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIFx0dWwuYXBwZW5kQ2hpbGQodG9wTEkpO1xuXG4gICAgICAgIFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgXHR0b3BMSS5hcHBlbmRDaGlsZChhKTtcbiAgICAgICAgXHRhLmlubmVyVGV4dCA9IG1lbnUubmFtZTtcblxuICAgICAgICBcdGlmKG1lbnUuYWN0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgXHRcdC8vIFRvcCBsZXZlbCBvbmx5IG1lbnVcbiAgICAgICAgXHRcdGNvbnN0IGFjdGlvbiA9IG1haW4ucGxheWdyb3VuZC5nZXRBY3Rpb24obWVudS5hY3Rpb24pO1xuXHRcdCAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgW2EsIHRvcExJXSkge1xuXHRcdCAgICAgICAgXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdCAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0ICAgICAgICBhY3Rpb24uZG8obWFpbik7XG5cdFx0XHQgICAgICAgIH0pO1xuXHRcdCAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGlmKG1lbnUubWVudXMgIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgIFx0Ly8gUHVsbC1kb3duIG1lbnVcblx0ICAgICAgICBcdGNvbnN0IHN1YlVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblx0ICAgICAgICBcdHRvcExJLmFwcGVuZENoaWxkKHN1YlVMKTtcblxuXHQgICAgICAgIFx0Zm9yKGNvbnN0IGVsZW1lbnQgb2YgW2EsIHRvcExJXSkge1xuXHRcdFx0ICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdCAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0XHQgICAgICAgIGlmKGdldENvbXB1dGVkU3R5bGUoc3ViVUwpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ2hpZGRlbicpIHtcblx0XHRcdFx0XHQgICAgICAgIG9wZW4odG9wTEkpO1xuXHRcdFx0XHQgICAgICAgIH0gZWxzZSB7XG5cdFx0XHRcdFx0ICAgICAgICAvLyBJZiBhbHJlYWR5IG9wZW4sIGNsb3NlIGFsbFxuXHRcdFx0XHRcdCAgICAgICAgdGhpcy5jbG9zZUFsbCgpO1xuXHRcdFx0XHQgICAgICAgIH1cblxuXHRcdFx0ICAgICAgICB9KTtcblx0XHQgICAgICAgIH1cblxuXHQgICAgICAgIFx0Zm9yKGNvbnN0IHN1Yk1lbnUgb2YgbWVudS5tZW51cykge1xuXHRcdFx0ICAgICAgICBjb25zdCBzdWJMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0XHQgICAgICAgIHN1YlVMLmFwcGVuZENoaWxkKHN1YkxJKTtcblxuXHRcdFx0ICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0ICAgICAgICBzdWJMSS5hcHBlbmRDaGlsZChhKTtcblx0XHRcdCAgICAgICAgYS5pbm5lclRleHQgPSBzdWJNZW51Lm5hbWU7XG5cblx0XHRcdCAgICAgICAgaWYoc3ViTWVudS5hY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQgICAgICAgIC8vIFRvcCBsZXZlbCBvbmx5IG1lbnVcblx0XHRcdFx0ICAgICAgICBjb25zdCBhY3Rpb24gPSBtYWluLnBsYXlncm91bmQuZ2V0QWN0aW9uKHN1Yk1lbnUuYWN0aW9uKTtcblx0XHRcdFx0ICAgICAgICBpZihhY3Rpb24gIT09IG51bGwpIHtcblx0XHRcdFx0XHQgICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIFthLCB0b3BMSV0pIHtcblx0XHRcdFx0XHRcdCAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHQgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgdGhpcy5jbG9zZUFsbCgpO1xuXHRcdFx0XHRcdFx0XHQgICAgICAgIGFjdGlvbi5kbyhtYWluKTtcblx0XHRcdFx0XHRcdCAgICAgICAgfSk7XG5cdFx0XHRcdFx0ICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgfVxuXG5cdFx0XHQgICAgICAgIH1cblx0XHQgICAgICAgIH1cblx0ICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEFkZCB0aGUgbWVudSBjb21wb25lbnQncyBIVE1MXG4gICAgICAgIC8vXG5cdCAgICAvLyBsZXQgaHRtbCA9ICcnO1xuXG5cdCAgICAvLyBodG1sICs9IGZpbGVNZW51Lmh0bWwoKTtcbiAgICAgICAgLy8gaHRtbCArPSBlZGl0TWVudS5odG1sKCk7XG4gICAgICAgIC8vIGh0bWwgKz0gdGFic01lbnUuaHRtbCgpO1xuICAgICAgICAvLyBodG1sICs9IGhlbHBNZW51Lmh0bWwoKTtcblxuICAgICAgICAvLyB1bC5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgICAgIC8vXG5cdCAgICAvLyBNZW51IG9wdGlvbiBmb3IgdGVzdGluZyB0aGUgVG9hc3QgZXJyb3IgcmVwb3J0aW5nIG1lY2hhbmlzbVxuXHQgICAgLy9cblxuXHQgICAgLy8gaHRtbCArPSBgPGxpPjxhIGNsYXNzPVwidG9hc3QtdGVzdFwiPlRvYXN0ITwvYT48L2xpPmA7XG5cdCAgICAvLyB1bC5pbm5lckhUTUwgPSBodG1sO1xuXHRcdC8vXG5cdCAgICAvLyB0aGlzLnRvYXN0cyA9IDA7XG4gICAgICAgIC8vIHRoaXMuY2xpY2soJy50b2FzdC10ZXN0JywgKGV2ZW50KT0+IHtcbiAgICAgICAgLy8gXHR0aGlzLnRvYXN0cysrO1xuICAgICAgICAvLyBcdG1haW4udG9hc3QubWVzc2FnZSgnVG9hc3QgbWVzc2FnZSAnICsgdGhpcy50b2FzdHMpO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAvL1xuICAgICAgICAvLyBJbnN0YWxsIGNsaWNrIGhhbmRsZXJzIGZvciBhbGwgdG9wLWxldmVsIG1lbnVzXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGZvcihjb25zdCBub2RlIG9mIHVsLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgLy8gICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gJ0xJJykge1xuICAgICAgICAvLyAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQvL1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyBGaW5kIHRoZSA8dWw+IGluIHRoaXMgbWVudVxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgdWxTdWIgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYodWxTdWIgIT09IG51bGwpIHtcblx0ICAgIC8vICAgICAgICAgICAgICAgICBpZihnZXRDb21wdXRlZFN0eWxlKHVsU3ViKS5nZXRQcm9wZXJ0eVZhbHVlKCd2aXNpYmlsaXR5JykgPT09ICdoaWRkZW4nKSB7XG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICBvcGVuKG5vZGUpO1xuXHQgICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIElmIGFscmVhZHkgb3BlbiwgY2xvc2UgYWxsXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XG5cdCAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBBY3RpdmF0ZSBhbGwgb2YgdGhlIG1lbnVzXG4gICAgICAgIC8vIGZpbGVNZW51LmFjdGl2YXRlKCk7XG4gICAgICAgIC8vIGVkaXRNZW51LmFjdGl2YXRlKCk7XG4gICAgICAgIC8vIHRhYnNNZW51LmFjdGl2YXRlKCk7XG4gICAgICAgIC8vIGhlbHBNZW51LmFjdGl2YXRlKCk7XG4gICAgfVxuXG5cdC8qKlxuICAgICAqIExpc3RlbiB0byBrZXkgZG93biBldmVudHMgc28gd2UgY2FuIGNsb3NlIHRoZSBtZW51XG4gICAgICogaWYgd2UgY2xpY2sgb3V0c2lkZSBvZiB0aGUgbWVudSB3aGlsZSBpdCBpcyBvcGVuLlxuXHQgKiBAcGFyYW0gZXZlbnRcblx0ICovXG5cdGNvbnN0IGNsb3NlTGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gU2VlIGlmIHdlIGNsaWNrZWQgb24gc29tZSBjaGlsZCBvZiBuYXYuLi5cbiAgICAgICAgbGV0IG5vZGUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgZm9yKCA7IG5vZGUgIT09IG51bGw7IG5vZGUgPSBub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIGlmKG5vZGUgPT09IHRoaXMubmF2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0ICAgIHRoaXMuY2xvc2VBbGwoKTtcbiAgICB9XG5cbiAgICAvLyBPcGVuIGEgbWVudVxuICAgIGNvbnN0IG9wZW4gPSAobGkpID0+IHtcbiAgICAgICAgLy8gSGlkZSBhbnkgb3RoZXIgbWVudXNcbiAgICAgICAgZm9yKGNvbnN0IG5vZGUgb2YgdGhpcy51bC5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICBpZihub2RlLnRhZ05hbWUgPT09ICdMSScpIHtcblx0ICAgICAgICAgICAgY29uc3QgdWwgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcbiAgICAgICAgICAgICAgICBpZih1bCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgIC8vIFRvb2xzLnJlbW92ZUNsYXNzKHVsLCAnY2wtcGctbWVudS1vcGVuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0ICAgIC8vIEFuZCBvcGVuIHRoaXMgbWVudVxuXHQgICAgY29uc3QgdWwgPSBUb29scy5jaGlsZChsaSwgJ1VMJyk7XG5cdCAgICBpZih1bCAhPT0gbnVsbCkge1xuXHQgICAgXHR1bC5jbGFzc0xpc3QuYWRkKCdjbC1wZy1tZW51LW9wZW4nKTtcblx0ICAgIH1cblxuXHQgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUxpc3RlbmVyKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLyoqIENsb3NlIGFsbCBtZW51cyAqL1xuICAgIHRoaXMuY2xvc2VBbGwgPSAoKSA9PiB7XG5cdCAgICBmb3IoY29uc3Qgbm9kZSBvZiB0aGlzLnVsLmNoaWxkTm9kZXMpIHtcblx0XHQgICAgaWYobm9kZS50YWdOYW1lID09PSAnTEknKSB7XG5cdFx0XHQgICAgY29uc3QgdWwgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcblx0XHRcdCAgICBpZih1bCAhPT0gbnVsbCkge1xuXHRcdFx0XHQgICAgVG9vbHMucmVtb3ZlQ2xhc3ModWwsICdjbC1wZy1tZW51LW9wZW4nKTtcblx0XHRcdCAgICB9XG5cdFx0ICAgIH1cblx0ICAgIH1cblxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTGlzdGVuZXIpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjbG9zZUxpc3RlbmVyKTtcbiAgICB9XG5cblx0LyoqXG4gICAgICogRW5hYmxlIG9yIGRpc2FibGUgYSBtZW51IG9wdGlvbiBieSBzZWxlY3RvclxuXHQgKiBAcGFyYW0gc2VsIFNlbGVjdG9yIGZvciB0aGUgbWVudSBvcHRpb24gKGxpa2UgJy50YWJzLWFkZCcpXG5cdCAqIEBwYXJhbSBlbmFibGUgVHJ1ZSB0byBlbmFibGVcblx0ICovXG5cdHRoaXMuZW5hYmxlID0gKHNlbCwgZW5hYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnVsLnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcbiAgICAgICAgaWYoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZW5hYmxlKSB7XG4gICAgICAgICAgICBUb29scy5yZW1vdmVDbGFzcyhlbGVtZW50LnBhcmVudE5vZGUsIFwibWVudS1kaXNhYmxlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFRvb2xzLmFkZENsYXNzKGVsZW1lbnQucGFyZW50Tm9kZSwgXCJtZW51LWRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblx0LyoqXG4gICAgICogRmluZCBhIG1lbnUgb3B0aW9uIGJ5IHNlbGVjdG9yXG5cdCAqIEBwYXJhbSBzZWxcblx0ICogQHJldHVybnMge0VsZW1lbnR9XG5cdCAqL1xuXHR0aGlzLmZpbmQgPSAoc2VsKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVsLnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcbiAgICB9XG5cblx0LyoqXG4gICAgICogSW5zdGFsbCBhIG1lbnUgb3B0aW9uIGNsaWNrIGhhbmRlclxuXHQgKiBAcGFyYW0gc2VsIFNlbGVjdG9yIGZvciB0aGUgbWVudSBvcHRpb25cblx0ICogQHBhcmFtIGNsb3N1cmUgVGhlIGNsb3N1cmUgdG8gY2FsbCAocGFzc2VzICdldmVudCcpXG5cdCAqL1xuXHR0aGlzLmNsaWNrID0gKHNlbCwgY2xvc3VyZSkgPT4ge1xuXHQgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZmluZChzZWwpO1xuXHQgICAgaWYoZWxlbWVudCAhPT0gbnVsbCkge1xuXHQgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0ICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICAgICAgICAgICAgdGhpcy5jbG9zZUFsbCgpO1xuXHQgICAgICAgICAgICBjbG9zdXJlKGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpO1xufTtcbiIsIi8qKlxuICogUGxheWdyb3VuZCBvcHRpb25zLlxuICogQHBhcmFtIG9wdGlvbnMgVXNlciBwcm92aWRlZCBvcHRpb25zIHRoYXQgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdmFsdWVzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHt9O1xuXG4gICAgLy8vIERpc3BsYXkgb3B0aW9uc1xuICAgIC8vLyB3aW5kb3cgLSBEaXNwbGF5cyBhcyBhIHN0YW5kYXJkIGRpdiAoZGVmYXVsdClcbiAgICB0aGlzLmRpc3BsYXkgPSAnd2luZG93JztcblxuICAgIC8vLyBPcHRpb25hbCBoZWlnaHQgc2V0dGluZ1xuICAgIHRoaXMuaGVpZ2h0ID0gbnVsbDtcblxuICAgIC8vLyBUaGUgcGxheWdyb3VuZCByb290IHBhbmVcbiAgICB0aGlzLnBhbmUgPSB7fTtcblxuICAgIC8vLyBUaGUgdG9wLWxldmVsIG1lbnUgb3B0aW9uc1xuICAgIHRoaXMubWVudXMgPSBbe25hbWU6ICdBYm91dCd9XTtcblxuICAgIC8vLyBDb250ZW50IHRvIGluaXRpYWxseSBsb2FkIGludG8gdGhlIHRhYnNcbiAgICB0aGlzLmxvYWQgPSBudWxsO1xuXG5cbiAgICBmb3IodmFyIHByb3BlcnR5IGluIG9wdGlvbnMpIHtcbiAgICAgICAgaWYob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uIFwiICsgcHJvcGVydHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgQVBJIG9wZXJhdGlvbnMgZm9yIGEgZ2l2ZW4gZmlsZSBtb2RlLlxuICAgICAqIEBwYXJhbSBtb2RlICdzYXZlJywgJ29wZW4nXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgdGhpcy5nZXRBUEkgPSBmdW5jdGlvbihtb2RlKSB7XG4gICAgICAgIGlmKHRoaXMuYXBpID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuYXBpID09PSBPYmplY3QodGhpcy5hcGkpKSB7XG4gICAgICAgICAgICBsZXQgb2JqO1xuXG4gICAgICAgICAgICBpZih0aGlzLmFwaVttb2RlXSAhPT0gdW5kZWZpbmVkKSB7XG4gXG4gICAgICAgICAgICAgICAgLy8gTW9kZSBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxuICAgICAgICAgICAgICAgIHZhciBtb2RlT2JqID0gdGhpcy5hcGlbbW9kZV07XG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai51cmwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBNb2RlIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU2VuZCBjb250ZW50IHR5cGVcbiAgICAgICAgICAgICAgICBvYmogPSB7dXJsOiBtb2RlT2JqLnVybH07XG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai5jb250ZW50VHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5jb250ZW50VHlwZSA9IG1vZGVPYmouY29udGVudFR5cGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuYXBpLmNvbnRlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNvbnRlbnRUeXBlID0gdGhpcy5hcGkuY29udGVudFR5cGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai5leHRyYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IG1vZGVPYmouZXh0cmE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuYXBpLmV4dHJhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0gdGhpcy5hcGkuZXh0cmE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0ge307XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai5uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLm5hbWUgPSBtb2RlT2JqLm5hbWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuYXBpLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvYmoubmFtZSA9IHRoaXMuYXBpLm5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFwaS51cmwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvYmogPSB7dXJsOiB0aGlzLmFwaS51cmx9O1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXBpLmV4dHJhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0gdGhpcy5hcGkuZXh0cmE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0ge307XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcGkubmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5uYW1lID0gdGhpcy5hcGkubmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge3VybDogdGhpcy5hcGl9O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtUYWJzfSBmcm9tICcuL1RhYnMnO1xuXG4vKipcbiAqIEEgUGFuZSBpcyBhbiBhcmVhIG9mIHRoZSBJREUgc2NyZWVuIHRoYXQgZWl0aGVyIGNvbnRhaW5zIGEgdGFiIHNldCBvciB0d28gY2hpbGQgcGFuZXMuXG4gKiBAcGFyYW0gbWFpbiBNYWluIG9iamVjdFxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0aGF0IGlzIHRoZSBob3N0IGZvciB0aGUgcGFuZVxuICogQHBhcmFtIHBhcmVudCBQYW5lIHBhcmVudCBvYmplY3RcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgUGFuZSA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQsIHBhcmVudCkge1xuXHR0aGlzLm1pblNwbGl0ID0gMTA7XG5cdHRoaXMubWF4U3BsaXQgPSA5MDtcblxuXHRsZXQgZGl2ID0gbnVsbCwgY2hpbGQxID0gbnVsbCwgY2hpbGQyID0gbnVsbDtcblx0bGV0IGhvcml6b250YWxTcGxpdCA9IG51bGw7XG5cdGxldCB0YWJzID0gbnVsbDtcblxuXHRjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuXHRcdC8vXG5cdFx0Ly8gQ3JlYXRlIGFuZCBhZGQgdGhlIGRpdlxuXHRcdC8vXG5cblx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLmRpdiA9IGRpdjtcblxuXHRcdGlmKHBhcmVudCA9PT0gbnVsbCkge1xuXHRcdFx0ZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtcm9vdCcpO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuXHRcdC8vIGlmKGRvbm9yVGFicyAhPT0gbnVsbCkge1xuXHRcdC8vIFx0dGFicyA9IGRvbm9yVGFicztcblx0XHQvLyBcdHRhYnMubmV3UGFyZW50KHRoaXMpO1xuXHRcdC8vIH0gZWxzZSB7XG5cdFx0Ly8gXHR0YWJzID0gbmV3IFRhYnMobWFpbiwgZGl2KTtcblx0XHQvLyB9XG5cdH1cblxuXHQvKipcblx0ICogTG9hZCB0aGUgcGFuZSBmcm9tIHRoZSBkYXRhXG5cdCAqIEBwYXJhbSBkYXRhIERhdGEgZnJvbSBvcHRpb25zIGZvciB0aGlzIHBhbmVcblx0ICovXG5cdHRoaXMubG9hZCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRpZihkYXRhLmNoaWxkMSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyBUaGlzIGlzIGEgc3BsaXQgcGFuZVxuXHRcdFx0dGhpcy5zcGxpdChkYXRhLmhvcml6LCBkYXRhLmNoaWxkMSwgZGF0YS5jaGlsZDIpO1xuXHRcdFx0dGhpcy5wZXJjZW50YWdlKGRhdGEucGVyY2VudGFnZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhYnMgPSBuZXcgVGFicyhtYWluLCBkaXYpO1xuXHRcdFx0dGFicy5sb2FkKGRhdGEudGFicyk7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5zcGxpdCA9IGZ1bmN0aW9uKGhvcml6b250YWwsIGNoaWxkMURhdGEsIGNoaWxkMkRhdGEpIHtcblx0XHRob3Jpem9udGFsU3BsaXQgPSBob3Jpem9udGFsO1xuXG5cdFx0Y2hpbGQxID0gbmV3IFBhbmUobWFpbiwgZGl2LCB0aGlzLCB0YWJzKTtcblx0XHRjaGlsZDIgPSBuZXcgUGFuZShtYWluLCBkaXYsIHRoaXMsIG51bGwpO1xuXG5cdFx0dGFicyA9IG51bGw7XG5cblx0XHRpZihob3Jpem9udGFsKSB7XG5cdFx0XHRjaGlsZDEuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtbGVmdCcpO1xuXHRcdFx0Y2hpbGQyLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLXJpZ2h0Jyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRpdi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG5cdFx0XHRjaGlsZDEuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtdG9wJyk7XG5cdFx0XHRjaGlsZDIuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtYm90dG9tJyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0YmFyLmNsYXNzTGlzdC5hZGQoJ2NsLWJhcicpO1xuXHRcdGNoaWxkMS5kaXYuYXBwZW5kQ2hpbGQoYmFyKTtcblxuXHRcdGJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRzdGFydERyYWdnaW5nKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XG5cblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlKTtcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXApO1xuXHRcdH0pO1xuXG5cdFx0YmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGNvbnNvbGUubG9nKGV2ZW50KTtcblxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cdFx0XHRzdGFydERyYWdnaW5nKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XG5cblxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmUpO1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kKTtcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaENhbmNlbCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmNoaWxkMSA9IGNoaWxkMTtcblx0XHR0aGlzLmNoaWxkMiA9IGNoaWxkMjtcblxuXHRcdHRoaXMucGVyY2VudGFnZSg1MCk7XG5cblx0XHRpZihjaGlsZDFEYXRhICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNoaWxkMS5sb2FkKGNoaWxkMURhdGEpO1xuXHRcdH1cblxuXHRcdGlmKGNoaWxkMkRhdGEgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y2hpbGQyLmxvYWQoY2hpbGQyRGF0YSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtjaGlsZDE6IGNoaWxkMSwgY2hpbGQyOiBjaGlsZDJ9O1xuXHR9XG5cblx0bGV0IHN0YXJ0WCA9IG51bGwsIHN0YXJ0WSA9IG51bGw7XG5cblx0Y29uc3Qgc3RhcnREcmFnZ2luZyA9ICh4LCB5KSA9PiB7XG5cdFx0c3RhcnRYID0geDtcblx0XHRzdGFydFkgPSB5O1xuXHR9XG5cblx0Y29uc3QgZW5kRHJhZ2dpbmcgPSAoKSA9PiB7XG5cdFx0c3RhcnRYID0gbnVsbDtcblx0XHRzdGFydFkgPSBudWxsO1xuXHR9XG5cblxuXHRjb25zdCBkcmFnZ2luZyA9ICh4LCB5KSA9PiB7XG5cdFx0Y29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblxuXHRcdGlmKGhvcml6b250YWxTcGxpdCkge1xuXHRcdFx0Y29uc3QgbWFpblggPSByZWN0LmxlZnQgKyBlbGVtZW50LnNjcm9sbExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQ7XG5cdFx0XHRjb25zdCB3aWQgPSByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0O1xuXHRcdFx0aWYod2lkIDw9IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwZXIgPSAoeCAtIG1haW5YKSAvIHdpZCAqIDEwMDtcblx0XHRcdHRoaXMucGVyY2VudGFnZShwZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBtYWluWSA9IHJlY3QudG9wICArIGVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG5cdFx0XHRjb25zdCBoaXQgPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xuXHRcdFx0aWYoaGl0IDw9IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwZXIgPSAoeSAtIG1haW5ZKSAvIGhpdCAqIDEwMDtcblx0XHRcdHRoaXMucGVyY2VudGFnZShwZXIpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IG1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZihldmVudC53aGljaCA9PT0gMCkge1xuXHRcdFx0bW91c2VVcChldmVudCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblx0fVxuXG5cdGNvbnN0IG1vdXNlVXAgPSAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlKTtcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwKTtcblx0XHRlbmREcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXHR9XG5cblx0Y29uc3QgdG91Y2hNb3ZlICA9IChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cdFx0ZHJhZ2dpbmcodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcblx0fVxuXG5cdGNvbnN0IHRvdWNoRW5kID0gKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcblx0XHRkcmFnZ2luZyh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xuXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmUpO1xuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEVuZCk7XG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoQ2FuY2VsKTtcblxuXHRcdGVuZERyYWdnaW5nKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XG5cdH1cblxuXHRjb25zdCB0b3VjaENhbmNlbCA9IChldmVudCkgPT4ge1xuXHRcdHRvdWNoRW5kKGV2ZW50KTtcblx0fVxuXG5cdHRoaXMucGVyY2VudGFnZSA9IGZ1bmN0aW9uKHBlcikge1xuXHRcdGlmKHBlciA8IHRoaXMubWluU3BsaXQpIHtcblx0XHRcdHBlciA9IHRoaXMubWluU3BsaXQ7XG5cdFx0fSBlbHNlIGlmKHBlciA+IHRoaXMubWF4U3BsaXQpIHtcblx0XHRcdHBlciA9IHRoaXMubWF4U3BsaXQ7XG5cdFx0fVxuXG5cdFx0aWYoaG9yaXpvbnRhbFNwbGl0KSB7XG5cdFx0XHRjaGlsZDEuZGl2LnN0eWxlLndpZHRoID0gcGVyICsgJyUnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjaGlsZDEuZGl2LnN0eWxlLmhlaWdodCA9IHBlciArICclJztcblx0XHR9XG5cdH1cblxuXHR0aGlzLmdldFRhYiA9IGZ1bmN0aW9uKHRhZykge1xuXHRcdGZvcihjb25zdCBjb2xsZWN0aW9uIG9mIFt0YWJzLCBjaGlsZDEsIGNoaWxkMl0pIHtcblx0XHRcdGlmKGNvbGxlY3Rpb24gIT09IG51bGwpIHtcblx0XHRcdFx0bGV0IHRhYiA9IGNvbGxlY3Rpb24uZ2V0VGFiKHRhZyk7XG5cdFx0XHRcdGlmKHRhYiAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiB0YWI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cblx0aW5pdGlhbGl6ZSgpO1xufSIsImltcG9ydCB7TWFpbn0gZnJvbSAnLi9NYWluJztcbmltcG9ydCB7T3B0aW9uc30gZnJvbSAnLi9PcHRpb25zJztcbmltcG9ydCB7UmVhZHl9IGZyb20gJy4vVXRpbGl0eS9SZWFkeSc7XG5pbXBvcnQge0FjdGlvbn0gZnJvbSAnLi9BY3Rpb25zL0FjdGlvbic7XG5pbXBvcnQge0FsbEFjdGlvbnN9IGZyb20gJy4vQWN0aW9ucy9BbGxBY3Rpb25zJztcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIFBsYXlncm91bmRcbiAqXG4gKiBUaGlzIGNyZWF0ZXMgYSBzaW5nbGUgSW5zdGFuY2UgdGhhdCBtYW5hZ2VzIHRoZVxuICogY29tcG9uZW50cyBhbmQgc3RhcnRzIGFjdHVhbCBQbGF5Z3JvdW5kIHdpbmRvd3MuXG4gKlxuICogQ29uc3RydWN0IGFuZCBzdGFydCBydW5uaW5nIGxpa2UgdGhpczpcbiAqXG4gKiBHaXZlbiBhbiBIVE1MIGRpdjpcbiAqICAgICA8ZGl2IGlkPVwicGxheWdyb3VuZFwiPjwvZGl2PlxuICpcbiAqIFRoZSBmb2xsb3dpbmcgc2NyaXB0IHN0YXJ0cyBQbGF5Z3JvdW5kIGluIHRoYXQgZGl2OlxuICpcbiAqICAgICB2YXIgcGxheWdyb3VuZCA9IG5ldyBQbGF5Z3JvdW5kKCcjcGxheWdyb3VuZCcpO1xuICogICAgIHBsYXlncm91bmQuc3RhcnQoKTtcbiAqXG4gKiBAcGFyYW0gc2l0ZSBTaXRlIG9iamVjdFxuICogQHBhcmFtIHNlbCBTZWxlY3RvciBvciBlbGVtZW50IHRvIGNyZWF0ZSBQbGF5Z3JvdW5kIGluIChjYW4gYmUgbWFueSlcbiAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCBjb250YWluaW5nIFBsYXlncm91bmQgb3B0aW9ucy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgUGxheWdyb3VuZCA9IGZ1bmN0aW9uKHNpdGUsIHNlbCwgb3B0aW9ucykge1xuXG4gICAgLy9cbiAgICAvLyBNYXN0ZXIgc2V0IG9mIHRoZSB2ZXJzaW9uXG4gICAgLy9cbiAgICBsZXQgUEFDS0FHRSA9IHJlcXVpcmUoJy4uLy4uL3BhY2thZ2UuanNvbicpO1xuICAgIHRoaXMudmVyc2lvbiA9IFBBQ0tBR0UudmVyc2lvbjtcblxuICAgIHRoaXMuc2l0ZSA9IHNpdGU7XG5cbiAgICAvLyBSZWNvcmQgdGhlIHNlbGVjdG9yXG4gICAgdGhpcy5zZWwgPSBzZWw7XG5cbiAgICAvLyBUaGUgT3B0aW9ucyBvYmplY3QgdGhhdCBtYW5hZ2VzIHVzZXIgb3B0aW9uc1xuICAgIHRoaXMub3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgLy8gQSBjb2xsZWN0aW9uIG9mIE1haW4gb2JqZWN0cy5cbiAgICB2YXIgbWFpbnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHRoZSBQbGF5Z3JvdW5kIHJ1bm5pbmcsIGNyZWF0aW5nIHRoZSB1c2VyIGludGVyZmFjZS5cbiAgICAgKiBUaGlzIGRvZXMgd2FpdCBmb3IgZG9jdW1lbnQgcmVhZHkgYmVmb3JlIGNhbGxpbmdcbiAgICAgKiB0aGlzLnN0YXJ0Tm93KCkgdW5sZXNzIHdlIGFyZSBydW5uaW5nIGluIG5vLXdpbmRvd1xuICAgICAqIG1vZGUuIEluIHRoYXQgY2FzZSBpdCByZXR1cm5zIGEgc3RhcnRlZCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICB0aGlzLnN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBpZihzZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0Tm93KCk7XG4gICAgICAgIH1cblxuICAgICAgICBSZWFkeS5nbygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0Tm93KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHRoZSBQbGF5Z3JvdW5kIHJ1bm5pbmcgbm93LiBEb2VzIG5vdCB3YWl0IGZvciBkb2N1bWVudCByZWFkeS5cbiAgICAgKi9cbiAgICB0aGlzLnN0YXJ0Tm93ID0gKCkgPT4ge1xuICAgICAgICBpZihzZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBtYWluID0gbmV3IE1haW4odGhpcywgc2VsKTtcbiAgICAgICAgICAgIG1haW5zLnB1c2gobWFpbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbih0aGlzLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBtYWlucy5wdXNoKG1haW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYobWFpbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFpbnNbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblx0LyoqXG5cdCAqIEdldCBhIGNvbnN0cnVjdGVkIEFjdGlvbiBvYmplY3QgZnJvbSB0aGUgYXZhaWxhYmxlIHBsYXlncm91bmQgYWN0aW9ucy5cblx0ICogQHBhcmFtIGFjdGlvbiBUaGUgYWN0aW9uIGRhdGEgZnJvbSB0aGUgc2VydmVyLlxuXHQgKiBAcmV0dXJucyBBY3Rpb24gb2JqZWN0XG5cdCAqL1xuXHR0aGlzLmdldEFjdGlvbiA9IGZ1bmN0aW9uKGFjdGlvbikge1xuICAgIFx0aWYoUGxheWdyb3VuZC5hY3Rpb25zW2FjdGlvbi50YWddICE9PSB1bmRlZmluZWQpIHtcbiAgICBcdFx0cmV0dXJuIG5ldyAoUGxheWdyb3VuZC5hY3Rpb25zW2FjdGlvbi50YWddKShzaXRlLCBhY3Rpb24pO1xuXHQgICAgfVxuXG5cdCAgICBjb25zb2xlLmxvZygnUGxheWdyb3VuZCBhY3Rpb24gJyArIGFjdGlvbi50YWcgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XG5cdCAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cblBsYXlncm91bmQuQWN0aW9uID0gQWN0aW9uO1xuXG5QbGF5Z3JvdW5kLmFjdGlvbnMgPSB7fTtcblxuUGxheWdyb3VuZC5hZGRBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb24pIHtcblx0dGhpcy5hY3Rpb25zW2FjdGlvbi50YWddID0gYWN0aW9uO1xufVxuXG5BbGxBY3Rpb25zLmFkZEFsbChQbGF5Z3JvdW5kKTsiLCJpbXBvcnQge1Rvb2xzfSBmcm9tICcuL0RPTS9Ub29scyc7XG5pbXBvcnQge091dHB1dFRhYn0gZnJvbSAnLi9UYWJzL091dHB1dFRhYic7XG5pbXBvcnQge0VkaXRvclRhYn0gZnJvbSAnLi9UYWJzL0VkaXRvclRhYic7XG5cbmltcG9ydCBtZW51YmFycyBmcm9tICcuLi8uLi9pbWcvbWVudWJhcnMucG5nJztcblxuXG4vKipcbiAqIE1hbmFnZXMgdGhlIHRhYnMgaW4gdGhlIG1vZGVsXG4gKiBAcGFyYW0gbWFpbiBNYWluIG9iamVjdFxuICogQHBhcmFtIGVsZW1lbnQgUGFyZW50IGVsZW1lbnRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgVGFicyA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQpIHtcbiAgICAvLy8gVGhlIGN1cnJlbnRseSBhY3RpdmUgdmlldy90YWJcbiAgICB0aGlzLmFjdGl2ZSA9IC0xO1xuXG4gICAgLy8vIFRoZSBNYWluIG9iamVjdFxuICAgIHRoaXMubWFpbiA9IG1haW47XG5cbiAgICAvLy8gVGhlIFNpdGUgb2JqZWN0XG4gICAgdGhpcy5zaXRlID0gbWFpbi5zaXRlO1xuXG4gICAgLy8gVGhlIGNvbGxlY3Rpb24gb2YgdGFic1xuICAgIHZhciB0YWJzID0gW107XG5cbiAgICAvL1xuICAgIC8vIFRoZSBzdHJ1Y3R1cmU6IDxkaXYgY2xhc3M9XCJjbC10YWJzXCI+PHVsPjwvdWw+PGRpdiBjbGFzcz1cImNsLXZpZXdzXCI+PC9kaXY+PC9kaXY+XG4gICAgLy8gZGl2LnRhYnMgLSBFbmNsb3N1cmUgZm9yIGFsbCB0YWJzIGNvbnRlbnRcbiAgICAvLyB1bCAtIFRoZSB0YWJzIHdlIHNlbGVjdCBmcm9tXG4gICAgLy8gdmlld3NEaXYgLSBUaGUgdmlld3Mgd2l0aCB0aGUgdGFiIGNvbnRlbnRzXG4gICAgLy9cblxuICAgIGxldCB0YWJzRGl2ID0gbnVsbCwgdWwgPSBudWxsLCB2aWV3c0RpdiA9IG51bGw7XG5cblx0LyoqXG4gICAgICogQ3JlYXRlIHRoZSB0YWJzIHN5c3RlbVxuXHQgKiBAcGFyYW0gZGl2IFRoZSBkaXYgd2UgcHV0IHRoZSB0YWJzIGludG9cblx0ICovXG5cdHRoaXMuY3JlYXRlID0gZnVuY3Rpb24oZGl2KSB7XG4gICAgICAgIC8vIENyZWF0ZTogPGRpdiBjbGFzcz1cImNsLXRhYnNcIj48dWw+PC91bD48ZGl2IGNsYXNzPVwiY2wtdmlld3NcIj48L2Rpdj48L2Rpdj5cbiAgICAgICAgdGFic0RpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXBnLXRhYnMnKTtcbiAgICAgICAgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB0YWJzRGl2LmFwcGVuZENoaWxkKHVsKTtcblxuICAgICAgICB2aWV3c0RpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXBnLXZpZXdzJyk7XG4gICAgICAgIHRhYnNEaXYuYXBwZW5kQ2hpbGQodmlld3NEaXYpO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0YWJzRGl2KTtcblxuICAgICAgICAvLyBDbGVhciB0aGUgdGFicyBjb2xsZWN0aW9uXG4gICAgICAgIHRhYnMgPSBbXTtcblxuXHQvL1x0dGhpcy5hZGQoJ3Byb2dyYW0nKTtcbi8vXHRcdHRoaXMuYWRkKCdvdXRwdXQnKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvYWQgPSBmdW5jdGlvbihkYXRhKSB7XG5cdFx0Zm9yKGNvbnN0IHRhYkRhdGEgb2YgZGF0YSkge1xuXHRcdFx0dGhpcy5hZGQodGFiRGF0YSk7XG5cdFx0fVxuICAgIH1cblxuICAgIHRoaXMubmV3UGFyZW50ID0gZnVuY3Rpb24ocGFuZSkge1xuXHRcdHBhbmUuZGl2LmFwcGVuZENoaWxkKHRhYnNEaXYpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkID0gZnVuY3Rpb24oZGF0YSkge1xuXHRcdGxldCB0YWIgPSBudWxsO1xuXG5cdCAgICBzd2l0Y2goZGF0YS50eXBlKSB7XG5cdFx0ICAgIGNhc2UgJ2VkaXRvcic6XG5cdFx0XHQgICAgdGFiID0gbmV3IEVkaXRvclRhYih0aGlzLCBkYXRhKTtcblx0XHQgICAgXHRicmVhaztcblxuXHRcdCAgICBjYXNlICdvdXRwdXQnOlxuXHRcdCAgICBcdHRhYiA9IG5ldyBPdXRwdXRUYWIodGhpcywgZGF0YSk7XG5cdFx0ICAgIFx0YnJlYWs7XG5cdCAgICB9XG5cblx0ICAgIGlmKHRhYiAhPT0gbnVsbCkge1xuXHRcdCAgICB1bC5hcHBlbmRDaGlsZCh0YWIubGkpO1xuXHRcdCAgICB2aWV3c0Rpdi5hcHBlbmRDaGlsZCh0YWIudmlldyk7XG5cdFx0ICAgIHRhYnMucHVzaCh7dGFiOiB0YWIsIGxpOiB0YWIubGksIHZpZXc6IHRhYi52aWV3fSk7XG5cblx0XHQgICAgdGFiLnNlbGVjdCgpO1xuXHQgICAgfVxuICAgIH1cblxuXHQvKipcblx0ICogR2V0IGEgdGFiIGJ5IHRhZy5cblx0ICogQHBhcmFtIHRhZyBUYWIgdGFnXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0dGhpcy5nZXRUYWIgPSBmdW5jdGlvbih0YWcpIHtcblx0ICAgIGZvcihjb25zdCB0YWIgb2YgdGFicykge1xuXHRcdCAgICBpZih0YWIudGFiLnRhZyA9PT0gdGFnKSB7XG5cdFx0XHQgICAgcmV0dXJuIHRhYi50YWI7XG5cdFx0ICAgIH1cblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy51bnNlbGVjdEFsbCA9IGZ1bmN0aW9uKCkge1xuXHQgICAgLy9cblx0ICAgIC8vIENsZWFyIGFsbCBzZWxlY3Rpb25zXG5cdCAgICAvL1xuXHQgICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcblx0ICAgIFx0dGFiLmxpLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG5cdCAgICBcdHRhYi52aWV3LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG5cdCAgICB9KTtcbiAgICB9XG5cblxuICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IC0xO1xuICAgICAgICB0YWJzRGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFic0Rpdik7XG4gICAgICAgIHRhYnNEaXYgPSBudWxsO1xuICAgICAgICB0YWJzID0gW107XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlKGVsZW1lbnQpO1xufTtcbiIsImltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XG5cbmV4cG9ydCBjb25zdCBFZGl0b3JUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xuXG5cdGNvbnN0IHNpdGUgPSB0YWJzLnNpdGU7XG5cblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnZWRpdG9yJyk7XG5cdHRoaXMudmlldyA9IHZpZXc7XG5cblx0bGV0IGlubmVyVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR2aWV3LmFwcGVuZENoaWxkKGlubmVyVmlldyk7XG5cblx0bGV0IG51bXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bnVtcy5jbGFzc0xpc3QuYWRkKCdjbC1wZy1udW1zJyk7XG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChudW1zKTtcblxuXHRsZXQgZWRpdG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGVkaXRvckRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wZy1lZGl0b3InKTtcblx0aW5uZXJWaWV3LmFwcGVuZENoaWxkKGVkaXRvckRpdik7XG5cblx0Y29uc3QgZWRpdG9yID0gbmV3IHNpdGUuRWRpdG9yKGVkaXRvckRpdiwge1xuXHRcdHJlc2l6ZTogJ25vbmUnLFxuXHRcdHRhYjogdHJ1ZSxcblx0XHRhdXRvSW5kZW50OiB0cnVlLFxuXHRcdHN0eWxlczogbnVsbFxuXHR9KTtcblxuXHRjb25zdCBzY3JvbGxhYmxlID0gZWRpdG9yLnRleHRhcmVhO1xuXHRzY3JvbGxhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4ge1xuXHRcdC8vIGVkaXRvckRpdi5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnMHB4ICcgKyAoLXByZS5zY3JvbGxUb3ApICsgJ3B4Jztcblx0XHRudW1zLnNjcm9sbFRvcCA9IHNjcm9sbGFibGUuc2Nyb2xsVG9wO1xuXHR9KTtcblxuXHR0aGlzLnNldCA9IGZ1bmN0aW9uKHRleHQpIHtcblx0XHQvLyBEYXRhIGZyb20gdGhlIGZpbGUgc3lzdGVtIG1heSBjb25zaXN0IG9mIGVpdGhlciBqdXN0XG5cdFx0Ly8gdGV4dCAob2xkIGZvcm1hdCkgb3IgdGV4dCBpbiBhbiBvYmplY3QuIFRoaXMgYWxsb3dzXG5cdFx0Ly8gZWl0aGVyIGNhc2UgdG8gd29yay5cblx0XHRpZih0ZXh0LmRhdGEgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGV4dCA9IHRleHQuZGF0YTtcblx0XHR9XG5cblx0XHRlZGl0b3IudGV4dGFyZWEudmFsdWUgPSB0ZXh0O1xuXG5cdFx0bGV0IGxpbmVzID0gMDtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7ICsraSl7XG5cdFx0XHRpZih0ZXh0W2ldID09PSAnXFxuJykge1xuXHRcdFx0XHRsaW5lcysrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKGxpbmVzIDwgMTAwKSB7XG5cdFx0XHRsaW5lcyA9IDEwMDtcblx0XHR9XG5cblx0XHQvLyBUaGUgZXh0cmEgYWRkZWQgb24gaGVyZSBlbnN1cmVzIHdlIGdldCBwYXN0IGFueSBzY3JvbGwgYmFyXG5cdFx0Ly8gdGhhdCBtYXkgdGFrZSB1cCBob3Jpem9udGFsIHJvb20uXG5cdFx0bnVtcy5pbm5lckhUTUwgPSAnJztcblx0XHRmb3IobGV0IGk9MTsgaTw9bGluZXMrNTsgaSsrKSB7XG5cdFx0XHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdFx0cC5pbm5lclRleHQgPSAnJyArIGk7XG5cdFx0XHRudW1zLmFwcGVuZENoaWxkKHApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGNvbnRlbnRzIG9mIHRoZSBlZGl0b3Jcblx0ICogQHJldHVybnMgeyp8c3RyaW5nfVxuXHQgKi9cblx0dGhpcy5nZXQgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZWRpdG9yLnRleHRhcmVhLnZhbHVlO1xuXHR9XG5cblx0dGhpcy5zZWxlY3QgPSBmdW5jdGlvbigpIHtcblx0XHRUYWIucHJvdG90eXBlLnNlbGVjdC5jYWxsKHRoaXMpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRlZGl0b3IudGV4dGFyZWEuZm9jdXMoKTtcblx0XHR9LCAwKTtcblxuXHR9XG5cblx0dGhpcy5zZXQoJycpO1xufVxuXG5FZGl0b3JUYWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUYWIucHJvdG90eXBlKTtcbkVkaXRvclRhYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFZGl0b3JUYWI7IiwiaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcblxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XG5cblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XG5cdHRoaXMudmlldyA9IHZpZXc7XG5cblx0bGV0IGlubmVyVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR2aWV3LmFwcGVuZENoaWxkKGlubmVyVmlldyk7XG5cblx0bGV0IG51bXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bnVtcy5jbGFzc0xpc3QuYWRkKCdjbC1wZy1udW1zJyk7XG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChudW1zKTtcblxuXHRsZXQgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChwcmUpO1xuXG5cdHByZS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXZlbnQpID0+IHtcblx0XHRwcmUuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJzBweCAnICsgKC1wcmUuc2Nyb2xsVG9wKSArICdweCc7XG5cdFx0bnVtcy5zY3JvbGxUb3AgPSBwcmUuc2Nyb2xsVG9wO1xuXHR9KTtcblxuXHR0aGlzLnNldCA9IGZ1bmN0aW9uKHRleHQpIHtcblx0XHRwcmUuaW5uZXJIVE1MID0gdGV4dDtcblxuXHRcdGxldCBsaW5lcyA9IDA7XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyArK2kpe1xuXHRcdFx0aWYodGV4dFtpXSA9PT0gJ1xcbicpIHtcblx0XHRcdFx0bGluZXMrKztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZihsaW5lcyA8IDEwMCkge1xuXHRcdFx0bGluZXMgPSAxMDA7XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIGV4dHJhIGFkZGVkIG9uIGhlcmUgZW5zdXJlcyB3ZSBnZXQgcGFzdCBhbnkgc2Nyb2xsIGJhclxuXHRcdC8vIHRoYXQgbWF5IHRha2UgdXAgaG9yaXpvbnRhbCByb29tLlxuXHRcdG51bXMuaW5uZXJIVE1MID0gJyc7XG5cdFx0Zm9yKGxldCBpPTE7IGk8PWxpbmVzKzU7IGkrKykge1xuXHRcdFx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRcdHAuaW5uZXJUZXh0ID0gJycgKyBpO1xuXHRcdFx0bnVtcy5hcHBlbmRDaGlsZChwKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCB0ZXh0ID0gYGltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XG5cbmV4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7ZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtleHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcblxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcblx0dGhpcy52aWV3ID0gdmlldztcblx0XG5cdHZpZXcuaW5uZXJUZXh0ID0gXFxgXFxgO1xufVxuXG5pbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xuXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcblxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcblx0dGhpcy52aWV3ID0gdmlldztcblx0XG5cdHZpZXcuaW5uZXJUZXh0ID0gXFxgXFxgO1xufVxuaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcblxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XG5cblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XG5cdHRoaXMudmlldyA9IHZpZXc7XG5cdFxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcbn1cblxuT3V0cHV0VGFiLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVGFiLnByb3RvdHlwZSk7XG5PdXRwdXRUYWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3V0cHV0VGFiO2A7XG5cblx0Ly90aGlzLnNldCh0ZXh0ICsgdGV4dCArIHRleHQgKyB0ZXh0KTtcblx0dGhpcy5zZXQoJycpO1xufVxuXG5PdXRwdXRUYWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUYWIucHJvdG90eXBlKTtcbk91dHB1dFRhYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPdXRwdXRUYWI7IiwiXG5leHBvcnQgY29uc3QgVGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xuXHR0aGlzLnRhYnMgPSB0YWJzO1xuXG5cdHRoaXMudmlldyA9IG51bGw7XG5cdHRoaXMudGFnID0gZGF0YS50YWc7XG5cdHRoaXMubmFtZSA9IGRhdGEubmFtZTtcblxuXHRsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHR0aGlzLmxpID0gbGk7XG5cblx0bGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdGxpLmFwcGVuZENoaWxkKGEpO1xuXHRhLmlubmVyVGV4dCA9IGRhdGEubmFtZTtcblxuXHRsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0bGkuYXBwZW5kQ2hpbGQobWVudSk7XG5cdC8vIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0Ly8gbWVudS5hcHBlbmRDaGlsZChpbWcpO1xuXHQvLyBpbWcuc3JjID0gbWVudWJhcnM7XG5cblx0bGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMuc2VsZWN0KCk7XG5cdH0pO1xuXG5cdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMuc2VsZWN0KCk7XG5cdH0pO1xuXG5cdHRoaXMuc2V0ID0gZnVuY3Rpb24odGV4dCkge31cblxuXHQvL1xuXHQvLyBUaGUgbWVudVxuXHQvLyBNYXliZSBhY3RpdmF0ZSBsYXRlciBvbj9cblx0Ly9cblx0Ly8gY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHQvLyBtZW51RGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXRhYi1tZW51Jyk7XG5cdC8vIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnY2wtbWVudS1vcGVuJyk7XG5cdC8vIGxpLmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuXHQvL1xuXHQvLyBjb25zdCBtZW51VUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXHQvLyBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVVTCk7XG5cdC8vIG1lbnVVTC5pbm5lckhUTUwgPVxuXHQvLyBcdCc8bGk+PGEgY2xhc3M9XCJlZGl0LXVuZG9cIj48c3BhbiBjbGFzcz1cImljb25zLWNsIGljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS13XCI+PC9zcGFuPlVuZG88L2E+PC9saT4nICtcblx0Ly8gXHQnPGxpPjxhIGNsYXNzPVwiZWRpdC1kZWxldGVcIj48c3BhbiBjbGFzcz1cImljb25zLWNsIGljb25zLWNsLXRyYXNoXCI+PC9zcGFuPkRlbGV0ZTwvYT48L2xpPic7XG5cdC8vXG5cdC8vIGNvbnN0IGNvbm5lY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Ly8gbWVudURpdi5hcHBlbmRDaGlsZChjb25uZWN0RGl2KTtcblx0Ly9cblx0Ly8gaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdC8vIGNvbm5lY3REaXYuYXBwZW5kQ2hpbGQoaW1nKTtcblx0Ly8gaW1nLnNyYyA9IG1lbnViYXJzO1xufVxuXG5UYWIucHJvdG90eXBlLnNlbGVjdCAgPSBmdW5jdGlvbigpIHtcblx0dGhpcy50YWJzLnVuc2VsZWN0QWxsKCk7XG5cblx0dGhpcy5saS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXHR0aGlzLnZpZXcuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbn1cbiIsIi8qKlxuICogRHJhZyBhbmQgZHJvcCBzdXBwb3J0IGZvciB0aGUgcGFsZXR0ZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBEcmFnQW5kRHJvcCA9IGZ1bmN0aW9uKG1haW4pIHtcblxuXHRsZXQgZHJhZ0VsZW1lbnQgPSBudWxsOyAvLyBET00gRWxlbWVudFxuXHRsZXQgZHJhZ0l0ZW0gPSBudWxsOyAgICAvLyBQYWxldHRlSXRlbVxuXHRsZXQgZHJvcFZpZXdzID0gW107ICAgICAvLyBWaWV3XG5cblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZihldmVudC53aGljaCA9PT0gMCkge1xuXHRcdFx0XHRtb3VzZVVwKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bW91c2VNb3ZlKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XG5cdFx0fSk7XG5cblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcblx0XHRcdG1vdXNlTW92ZSh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xuXHRcdH0pO1xuXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcblx0XHRcdG1vdXNlVXAoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblx0XHR9KTtcblxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudCkgPT4ge1xuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cdFx0XHRtb3VzZVVwKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XG5cdFx0fSk7XG5cblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCAoZXZlbnQpID0+IHtcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuXHRcdFx0bW91c2VVcCh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xuXHRcdH0pO1xuXHR9XG5cblx0dGhpcy5kcmFnZ2FibGUgPSAocGFsZXR0ZUl0ZW0pID0+IHtcblx0XHRwYWxldHRlSXRlbS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNsaWNrKHBhbGV0dGVJdGVtKTtcblxuXHRcdFx0bW91c2VNb3ZlKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XG5cdFx0fSk7XG5cblx0XHRwYWxldHRlSXRlbS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjbGljayhwYWxldHRlSXRlbSk7XG5cblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuXHRcdFx0bW91c2VNb3ZlKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XG5cdFx0fSk7XG5cdH1cblxuXHR0aGlzLmRyb3BwYWJsZSA9ICh2aWV3LCBjYWxsYmFjaykgPT4ge1xuXHRcdGRyb3BWaWV3cy5wdXNoKHtcblx0XHRcdCd2aWV3Jzogdmlldyxcblx0XHRcdCdjYWxsYmFjayc6IGNhbGxiYWNrXG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBjbGljayA9IChwYWxldHRlSXRlbSkgPT4ge1xuXHRcdC8vXG5cdFx0Ly8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZWxlbWVudCBhbmQgc2V0IGl0IHVwIGZvciBkcmFnZ2luZ1xuXHRcdC8vXG5cdFx0Y29uc3QgY2xvbmUgPSBwYWxldHRlSXRlbS5wYWxldHRlSW1hZ2UoKTtcblx0XHRtYWluLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuXHRcdGNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRjbG9uZS5zdHlsZS50b3AgPSAwO1xuXHRcdGNsb25lLnN0eWxlLmxlZnQgPSAwO1xuXHRcdGNsb25lLnN0eWxlLnpJbmRleCA9IDEwMDtcblx0XHRjbG9uZS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG5cblx0XHRkcmFnSXRlbSA9IHBhbGV0dGVJdGVtO1xuXHRcdGRyYWdFbGVtZW50ID0gY2xvbmU7XG5cdH1cblxuXHRjb25zdCBtb3VzZU1vdmUgPSAoeCwgeSkgPT4ge1xuXHRcdGlmKGRyYWdFbGVtZW50ICE9PSBudWxsKSB7XG5cdFx0XHRjb25zdCByZWN0ID0gbWFpbi5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0Y29uc3QgbWFpblggPSByZWN0LmxlZnQgKyBtYWluLmVsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldDtcblx0XHRcdGNvbnN0IG1haW5ZID0gcmVjdC50b3AgICsgbWFpbi5lbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcblxuXHRcdFx0ZHJhZ0VsZW1lbnQuc3R5bGUubGVmdCA9ICh4IC0gbWFpblggLSBkcmFnRWxlbWVudC5jbGllbnRXaWR0aCAvIDIpICsgJ3B4Jztcblx0XHRcdGRyYWdFbGVtZW50LnN0eWxlLnRvcCA9ICh5IC0gbWFpblkgLSBkcmFnRWxlbWVudC5jbGllbnRIZWlnaHQgLyAyKSArICdweCc7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRjb25zdCBtb3VzZVVwID0gKHgsIHkpID0+IHtcblx0XHRpZihkcmFnRWxlbWVudCAhPT0gbnVsbCkge1xuXG5cdFx0XHRmb3IoY29uc3QgdmlldyBvZiBkcm9wVmlld3MpIHtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gSXMgdGhlIHZpZXcgZW5hYmxlZD9cblx0XHRcdFx0Ly9cblx0XHRcdFx0Y29uc3Qgdmlld0VsZW1lbnQgPSB2aWV3LnZpZXcuZWxlbWVudDtcblx0XHRcdFx0aWYodmlld0VsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIERldGVybWluZSB4LHkgaW4gdGhlIGNhbnZhc1xuXHRcdFx0XHQvL1xuXHRcdFx0XHRjb25zdCByZWN0ID0gdmlld0VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdGNvbnN0IHZpZXdYID0gcmVjdC5sZWZ0ICsgdmlld0VsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldDtcblx0XHRcdFx0Y29uc3Qgdmlld1kgPSByZWN0LnRvcCArIHZpZXdFbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcblxuXHRcdFx0XHRpZih4ID49IHZpZXdYICYmXG5cdFx0XHRcdFx0eSA+PSB2aWV3WSAmJlxuXHRcdFx0XHRcdHggPCB2aWV3WCArIChyZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0KSAmJlxuXHRcdFx0XHRcdHkgPCB2aWV3WSArIChyZWN0LmJvdHRvbSAtIHJlY3QudG9wKSkge1xuXHRcdFx0XHRcdHZpZXcuY2FsbGJhY2soZHJhZ0l0ZW0sIHggLSB2aWV3WCwgeSAtIHZpZXdZKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRtYWluLmVsZW1lbnQucmVtb3ZlQ2hpbGQoZHJhZ0VsZW1lbnQpO1xuXHRcdFx0ZHJhZ0VsZW1lbnQgPSBudWxsO1xuXHRcdFx0ZHJhZ0l0ZW0gPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cblxuXHRpbml0aWFsaXplKCk7XG59IiwiLyoqXG4gKiBTaW1wbGUgRG9jdW1lbnQgcmVhZHkgZnVuY3Rpb24sIGVxdWl2YWxlbnQgdG8galF1ZXJ5J3MgZG9jdW1lbnQgcmVhZHkuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IFJlYWR5ID0gZnVuY3Rpb24oKSB7XG59XG5cbi8qKlxuICogQ2FsbCBhIGZ1bmN0aW9uIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWRvbi5cbiAqIEBwYXJhbSBmbiBGdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gZG9jdW1lbnQgcmVhZHlcbiAqL1xuUmVhZHkuZ28gPSBmdW5jdGlvbihmbikge1xuICAgIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKXtcbiAgICAgICAgZm4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7UGxheWdyb3VuZH0gZnJvbSBcIi4vUGxheWdyb3VuZC9QbGF5Z3JvdW5kXCI7XG5cbmV4cG9ydCBjb25zdCBQbGF5Z3JvdW5kRmFjdG9yeSA9IGZ1bmN0aW9uKCkge31cblxuUGxheWdyb3VuZEZhY3RvcnkuY3JlYXRlID0gZnVuY3Rpb24oc2l0ZSkge1xuXG5cdGZ1bmN0aW9uIGluc3RhbGwoKSB7XG5cdFx0Y29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtcGxheWdyb3VuZCcpO1xuXHRcdGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuXHRcdFx0Y29uc3QganNvbiA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XG5cdFx0XHRlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXHRcdFx0Y29uc3QgcGxheWdyb3VuZCA9IG5ldyBQbGF5Z3JvdW5kKHNpdGUsIGVsZW1lbnQsIGpzb24pO1xuXHRcdFx0cGxheWdyb3VuZC5zdGFydE5vdygpO1xuXHRcdH1cblx0fVxuXG5cdHNpdGUuc3RhcnQoICgpID0+IHtcblx0XHRpbnN0YWxsKCk7XG5cdH0pO1xuXG5cblx0c2l0ZS5tZXNzYWdlTGlzdGVuZXIoKG1zZywgZGF0YSkgPT4ge1xuXHRcdHN3aXRjaChtc2cpIHtcblx0XHRcdGNhc2UgJ2NsLXF1aXotYWZ0ZXItaW5zdGFsbGVkJzpcblx0XHRcdFx0aW5zdGFsbCgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnY2wtZ3JhZGVzLWdyYWRlci1pbnN0YWxsZWQnOlxuXHRcdFx0XHRpbnN0YWxsKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXHR9KTtcblxuXHRzaXRlLlBsYXlncm91bmQgPSBQbGF5Z3JvdW5kO1xufVxuXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLWMyOWUwMGNmMGUvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS02LjcuMS1iOTNhMmRlMGQ0LTE3MGZkYmM2MzAuemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtYzI5ZTAwY2YwZS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTYuNy4xLWI5M2EyZGUwZDQtMTcwZmRiYzYzMC56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC1jMjllMDBjZjBlLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNi43LjEtYjkzYTJkZTBkNC0xNzBmZGJjNjMwLnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvbWVudS1jaGVjay5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9iYXJzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuY2wtcGxheWdyb3VuZCBkaXYudG9hc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIuM2VtKTtcXG4gIHotaW5kZXg6IDQwMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjRzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMzBlbS8yKTtcXG4gIHdpZHRoOiAzMGVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYudG9hc3QudG9hc3QtYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjRzO1xcbiAgei1pbmRleDogNDAwO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjODA4MDgwO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMwMDc5NkI7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIGE6bGluaywgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkgYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIGltZy5jaGVjayB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB3aWR0aDogMTlweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMmVtIDAuMjVlbSAwLjVlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIGEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIGE6bGluaywgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIGE6dmlzaXRlZCB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMnMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDEwMCU7XFxuICBtYXJnaW46IDFweCAwIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwgPiBsaSB7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwgPiBsaSBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4ZW07XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCA+IGxpLm1lbnUtZGlzYWJsZWQgYSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuY2wtcGctbWVudS1vcGVuIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4ycztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5lZGl0LW1lbnUgYSB7XFxuICB3aWR0aDogNmVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLm9wdGlvbi1tZW51IGEge1xcbiAgd2lkdGg6IDExZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuZmlsZS1tZW51IGEge1xcbiAgd2lkdGg6IDZlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5oZWxwLW1lbnUgYSB7XFxuICB3aWR0aDogNy41ZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgLnVsLXN0YXRlLWFjdGl2ZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIGxpLm1lbnUtZGl2aWRlciB7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2Lndvcmsge1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiAjYTAwO1xcbiAgb3BhY2l0eTogMC4wNTtcXG4gIHotaW5kZXg6IDIwMDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctbWFpbiB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC1mdWxsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC13aW5kb3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjYWFhYWFhO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC1nYXAtYmVmb3JlLCBkaXYuY2wtcGxheWdyb3VuZC1nYXAtYWZ0ZXIge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcXG4gIGhlaWdodDogMWVtO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDNweCAwIDAgMnB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiAwLjI1ZW0gMC4yNWVtIDAuNDVlbSAwO1xcbiAgbWluLXdpZHRoOiA2ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICBtYXJnaW46IDFweCAzcHggLTFweCAwO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHotaW5kZXg6IDE4O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkgYTpmaXJzdC1jaGlsZCB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgb3V0bGluZTogMDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkgYTpudGgtY2hpbGQoMikge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXRvcDogLTJweDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOm50aC1jaGlsZCgyKSBpbWcge1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDIyO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkuc2VsZWN0ZWQgYSB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIGRpdi5jbC1wZy12aWV3cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAyOXB4O1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyBkaXYuY2wtcGctdmlldy5zZWxlY3RlZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDE3cHgpO1xcbiAgdG9wOiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMnMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAyN3B4O1xcbiAgdG9wOiA0cHg7XFxuICBsZWZ0OiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgZGl2IGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAzMHB4IDAgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwgPiBsaSB7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpIGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDhlbTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwgPiBsaS5tZW51LWRpc2FibGVkIGEge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUuY2wtbWVudS1vcGVuIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4ycztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtcm9vdCwgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtbGVmdCwgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtcmlnaHQsXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtdG9wLCBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1ib3R0b20ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzg4ODtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtbGVmdCBkaXYuY2wtYmFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICByaWdodDogLTVweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB6LWluZGV4OiAxMDA7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtdG9wIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtdG9wIGRpdi5jbC1iYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvdHRvbTogLTVweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB6LWluZGV4OiAyO1xcbiAgY3Vyc29yOiBucy1yZXNpemU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtcm9vdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbmRpdi5jbC1wZy1udW1zIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIHdpZHRoOiAyZW07XFxuICBwYWRkaW5nOiA0cHggMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDA7XFxufVxcbmRpdi5jbC1wZy1udW1zIHAge1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMCAzcHggMCAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogIzc3NztcXG59XFxuXFxuZGl2LmNsLXBnLWFib3V0IHtcXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcbmRpdi5jbC1wZy1hYm91dCBmaWd1cmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAyMjVweDtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5kaXYuY2wtcGctYWJvdXQgZGl2LmNsLXBnLWFib3V0LWRpdiB7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcbmRpdi5jbC1wZy1hYm91dCBkaXYuY2wtcGctYWJvdXQtZGl2IGgxIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmRpdi5jbC1wZy1hYm91dCBkaXYuY2wtcGctYWJvdXQtZGl2IHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3Ige1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yID4gZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYgZGl2LmNsLXBnLWVkaXRvciB7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYgZGl2LmNsLXBnLWVkaXRvciB0ZXh0YXJlYSB7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDRweCAwIDAgM3B4O1xcbiAgYm9yZGVyOiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxuICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3Lm91dHB1dCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQgPiBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3Lm91dHB1dCA+IGRpdiBwcmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDRweCAwIDAgM3B4O1xcbiAgYm9yZGVyOiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX3RvYXN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvbW9kdWxlcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvbW9kdWxlcy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL19wbGF5Z3JvdW5kLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX3BsYXlncm91bmQuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fbWVudS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX3dvcmsuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL190YWJzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX3BhbmUuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fbGluZV9udW1iZXJzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX2Fib3V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX3RhYl9lZGl0b3Iuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fdGFiX291dHB1dC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBRUEsa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSx1RkFBQTtFQUVBLDJEQUFBO0VBQ0EsZ0JDZGM7RURlZCx3QkFBQTtFQUNBLFdDZlU7RURnQlYseUJFWWU7RUZYZixZRVlTO0VGWFQsa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBR0xKO0FIUUU7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FHTko7O0FDdkJBO0VBQ0UsYUFBQTtBRDBCRjs7QUUzQkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJIZWdCO0VHZGhCLGlDQUFBO0VBQ0EsaUJDUmU7QUhzQ2pCO0FFNUJFO0VBQ0UsbUJIVlc7QUN3Q2Y7QUUzQkU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUY2Qko7QUUzQkk7RUFDRSwyRENwQk07RURxQk4saUJDcEJXO0VEcUJYLFlIQ087RUdBUCxxQkFBQTtBRjZCTjtBRTFCSTtFQUNFLFlISk87QUNnQ2I7QUVyQkU7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRnVCSjtBRXJCSTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtBRnVCTjtBRXBCSTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FGc0JOO0FFcEJNO0VBQ0UsMkRDdkRJO0VEd0RKLGlCQ3ZEUztFRHdEVCxZSGxDSztFR21D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O0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QVg4ZE47QVc1ZE07RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1EQUFBO0VBQ0EsaUJBQUE7RUFFQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QVg2ZFJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGl2LmNsLXBsYXlncm91bmRcXG57XFxuICAkdG9hc3QtdHJhbnNpdGlvbi10aW1lOiAwLjRzO1xcblxcbiAgZGl2LnRvYXN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIuM2VtKTtcXG4gICAgei1pbmRleDogNDAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgJHRvYXN0LXRyYW5zaXRpb24tdGltZSBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgJHRvYXN0LXRyYW5zaXRpb24tdGltZSwgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6ICR0b2FzdC1mb250LXNpemU7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gI3skdG9hc3Qtd2lkdGh9LzIpO1xcbiAgICB3aWR0aDogJHRvYXN0LXdpZHRoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9hc3QtYmFja2dyb3VuZDtcXG4gICAgY29sb3I6ICR0b2FzdC10ZXh0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gIH1cXG5cXG4gIGRpdi50b2FzdC50b2FzdC1hY3RpdmUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsICR0b2FzdC10cmFuc2l0aW9uLXRpbWU7XFxuICAgIHotaW5kZXg6IDQwMDtcXG5cXG4gIH1cXG59XCIsXCIkdG9hc3QtZm9udC1zaXplOiAxLjFlbTtcXG4kdG9hc3Qtd2lkdGg6IDMwZW07XFxuXFxuJGRyYWctYmFyLXdpZHRoOiAxMHB4O1xcblxcbiR0YWItY29ybmVyLXJhZGl1czogNXB4O1xcblwiLFwiLy8gVGhlIG1ham9yIGNvbG9yc1xcbi8vIFdlIGhhdmUgYSBwcmltYXJ5IGNvbG9yLCB0d28gc2Vjb25kYXJ5IGNvbG9ycywgYW5kIGEgY29tcGxlbWVudGFyeSBjb2xvci5cXG4kZGFyay1wcmltYXJ5OiAjMDA3OTZCO1xcbiRwcmltYXJ5OiAjMDA5Njg4O1xcbiRsaWdodC1wcmltYXJ5OiAjQjJERkRCO1xcbiRhY2NlbnQ6ICM2MDdEOEI7XFxuJHByaW1hcnktdGV4dDogIzIxMjEyMTtcXG4kZGl2aWRlci1jb2xvcjogI0JEQkRCRDtcXG4kc2Vjb25kYXJ5LXRleHQ6ICM2MDYwNjA7XFxuXFxuJGNvbXA6ICNjNDE0MjU7XFxuJHdpbmRvdy1ib3JkZXJzOiAjYWFhYWFhO1xcblxcblxcblxcbiR0YWJzLWJhY2tncm91bmQ6ICNkZGQ7XFxuJHRhYi1iYWNrZ3JvdW5kOiAjY2NjO1xcbiR0YWItdGV4dDogYmxhY2s7XFxuJHRhYi1zZWxlY3RlZC1iYWNrZ3JvdW5kOiB3aGl0ZTtcXG4kdGFiLXNlbGVjdGVkLXRleHQ6IGJsYWNrO1xcblxcbiRtZW51LWZvY3VzOiAkZGFyay1wcmltYXJ5O1xcbiRtZW51LWJhY2tncm91bmQ6ICNmMGYzZjA7XFxuJG1lbnUtY29sb3I6IGJsYWNrO1xcbiRtZW51LWRpdmlkZXItY29sb3I6IGJsYWNrO1xcbiRtZW51LWJvcmRlci1jb2xvcjogIzgwODA4MDtcXG5cXG4kcmVzaXplcjogJGRhcmstcHJpbWFyeTtcXG5cXG4kdG9hc3QtYmFja2dyb3VuZDogIzE1MTUxNTtcXG4kdG9hc3QtdGV4dDogd2hpdGU7XCIsXCJkaXYuY2wtcGxheWdyb3VuZCBkaXYudG9hc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIuM2VtKTtcXG4gIHotaW5kZXg6IDQwMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjRzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMzBlbS8yKTtcXG4gIHdpZHRoOiAzMGVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYudG9hc3QudG9hc3QtYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjRzO1xcbiAgei1pbmRleDogNDAwO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjODA4MDgwO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMwMDc5NkI7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIGE6bGluaywgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkgYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIGltZy5jaGVjayB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB3aWR0aDogMTlweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi4vLi4vaW1nL21lbnUtY2hlY2sucG5nXFxcIik7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMmVtIDAuMjVlbSAwLjVlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIGEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIGE6bGluaywgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIGE6dmlzaXRlZCB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMnMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDEwMCU7XFxuICBtYXJnaW46IDFweCAwIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwgPiBsaSB7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwgPiBsaSBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4ZW07XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCA+IGxpLm1lbnUtZGlzYWJsZWQgYSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuY2wtcGctbWVudS1vcGVuIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4ycztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5lZGl0LW1lbnUgYSB7XFxuICB3aWR0aDogNmVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLm9wdGlvbi1tZW51IGEge1xcbiAgd2lkdGg6IDExZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuZmlsZS1tZW51IGEge1xcbiAgd2lkdGg6IDZlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5oZWxwLW1lbnUgYSB7XFxuICB3aWR0aDogNy41ZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgLnVsLXN0YXRlLWFjdGl2ZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIGxpLm1lbnUtZGl2aWRlciB7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2Lndvcmsge1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiAjYTAwO1xcbiAgb3BhY2l0eTogMC4wNTtcXG4gIHotaW5kZXg6IDIwMDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctbWFpbiB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC1mdWxsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC13aW5kb3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjYWFhYWFhO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC1nYXAtYmVmb3JlLCBkaXYuY2wtcGxheWdyb3VuZC1nYXAtYWZ0ZXIge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcXG4gIGhlaWdodDogMWVtO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDNweCAwIDAgMnB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiAwLjI1ZW0gMC4yNWVtIDAuNDVlbSAwO1xcbiAgbWluLXdpZHRoOiA2ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICBtYXJnaW46IDFweCAzcHggLTFweCAwO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHotaW5kZXg6IDE4O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkgYTpmaXJzdC1jaGlsZCB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgb3V0bGluZTogMDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkgYTpudGgtY2hpbGQoMikge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXRvcDogLTJweDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOm50aC1jaGlsZCgyKSBpbWcge1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDIyO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkuc2VsZWN0ZWQgYSB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIGRpdi5jbC1wZy12aWV3cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAyOXB4O1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyBkaXYuY2wtcGctdmlldy5zZWxlY3RlZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDE3cHgpO1xcbiAgdG9wOiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMnMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAyN3B4O1xcbiAgdG9wOiA0cHg7XFxuICBsZWZ0OiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgZGl2IGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAzMHB4IDAgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwgPiBsaSB7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpIGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDhlbTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwgPiBsaS5tZW51LWRpc2FibGVkIGEge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUuY2wtbWVudS1vcGVuIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4ycztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtcm9vdCwgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtbGVmdCwgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtcmlnaHQsXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtdG9wLCBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1ib3R0b20ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzg4ODtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtbGVmdCBkaXYuY2wtYmFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICByaWdodDogLTVweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB6LWluZGV4OiAxMDA7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtdG9wIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtdG9wIGRpdi5jbC1iYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvdHRvbTogLTVweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB6LWluZGV4OiAyO1xcbiAgY3Vyc29yOiBucy1yZXNpemU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtcm9vdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbmRpdi5jbC1wZy1udW1zIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIHdpZHRoOiAyZW07XFxuICBwYWRkaW5nOiA0cHggMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDA7XFxufVxcbmRpdi5jbC1wZy1udW1zIHAge1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMCAzcHggMCAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogIzc3NztcXG59XFxuXFxuZGl2LmNsLXBnLWFib3V0IHtcXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcbmRpdi5jbC1wZy1hYm91dCBmaWd1cmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAyMjVweDtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5kaXYuY2wtcGctYWJvdXQgZGl2LmNsLXBnLWFib3V0LWRpdiB7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcbmRpdi5jbC1wZy1hYm91dCBkaXYuY2wtcGctYWJvdXQtZGl2IGgxIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmRpdi5jbC1wZy1hYm91dCBkaXYuY2wtcGctYWJvdXQtZGl2IHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3Ige1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yID4gZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYgZGl2LmNsLXBnLWVkaXRvciB7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYgZGl2LmNsLXBnLWVkaXRvciB0ZXh0YXJlYSB7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDRweCAwIDAgM3B4O1xcbiAgYm9yZGVyOiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxuICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3Lm91dHB1dCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQgPiBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3Lm91dHB1dCA+IGRpdiBwcmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vLi4vaW1nL2JhcnMucG5nXFxcIik7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDRweCAwIDAgM3B4O1xcbiAgYm9yZGVyOiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxufVwiLFwiZGl2LmNsLXBsYXlncm91bmQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsXCJkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1iYWNrZ3JvdW5kO1xcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjODA4MDgwO1xcbiAgZm9udC1zaXplOiAkbWVudS1mb250LXNpemU7XFxuXFxuICBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICRtZW51LWZvY3VzO1xcbiAgfVxcblxcbiAgbGkge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBhIHtcXG4gICAgICBmb250LWZhbWlseTogJG1lbnUtZm9udDtcXG4gICAgICBmb250LXNpemU6ICRtZW51LWZvbnQtc2l6ZTtcXG4gICAgICBjb2xvcjogJG1lbnUtY29sb3I7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB9XFxuXFxuICAgIGE6bGluaywgYTp2aXNpdGVkIHtcXG4gICAgICBjb2xvcjogJG1lbnUtY29sb3I7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vXFxuICAvLyBUb3AgbGV2ZWwgbWVudVxcbiAgLy9cXG4gID4gdWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbiAgICBpbWcuY2hlY2sge1xcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gICAgICB3aWR0aDogMTlweDtcXG4gICAgICBoZWlnaHQ6IDE2cHg7XFxuICAgICAgY29udGVudDogdXJsKFxcXCIuLi8uLi9pbWcvbWVudS1jaGVjay5wbmdcXFwiKTtcXG4gICAgfVxcblxcbiAgICA+IGxpIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBwYWRkaW5nOiAwLjI1ZW0gMmVtIDAuMjVlbSAwLjVlbTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgYSB7XFxuICAgICAgICBmb250LWZhbWlseTogJG1lbnUtZm9udDtcXG4gICAgICAgIGZvbnQtc2l6ZTogJG1lbnUtZm9udC1zaXplO1xcbiAgICAgICAgY29sb3I6ICRtZW51LWNvbG9yO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICBhOmxpbmssIGE6dmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogJG1lbnUtY29sb3I7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vXFxuICAgIC8vIERyb3AtZG93biBtZW51XFxuICAgIC8vXFxuICAgIHVsIHtcXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7XFxuICAgICAgei1pbmRleDogLTE7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMnMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcblxcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgICAvLyBkaXNwbGF5OiBub25lO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAxMDAlO1xcbiAgICAgIG1hcmdpbjogMXB4IDAgMCAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtZW51LWJhY2tncm91bmQ7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkbWVudS1ib3JkZXItY29sb3I7XFxuICAgICAgYm9yZGVyLXRvcC13aWR0aDogMDtcXG5cXG4gICAgICA+IGxpIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgICAgIGEge1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgIHdpZHRoOiA4ZW07XFxuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgID4gbGkubWVudS1kaXNhYmxlZCB7XFxuICAgICAgICBhIHtcXG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICB1bC5jbC1wZy1tZW51LW9wZW4ge1xcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB6LWluZGV4OiAxMDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxuICAgIH1cXG5cXG4gICAgdWwuZWRpdC1tZW51IGEge1xcbiAgICAgIHdpZHRoOiA2ZW07XFxuICAgIH1cXG5cXG4gICAgdWwub3B0aW9uLW1lbnUgYSB7XFxuICAgICAgd2lkdGg6IDExZW07XFxuICAgIH1cXG5cXG4gICAgdWwuZmlsZS1tZW51IGEge1xcbiAgICAgIHdpZHRoOiA2ZW07XFxuICAgIH1cXG5cXG4gICAgdWwuaGVscC1tZW51IGEge1xcbiAgICAgIHdpZHRoOiA3LjVlbTtcXG4gICAgfVxcblxcbiAgICAudWwtc3RhdGUtYWN0aXZlIHtcXG4gICAgICBjb2xvcjogcmVkO1xcbiAgICB9XFxuXFxuICAgIGxpLm1lbnUtZGl2aWRlciB7XFxuICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgYm9yZGVyOiAwIHNvbGlkICRtZW51LWRpdmlkZXItY29sb3I7XFxuICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbiAgICB9XFxuICB9XFxufVxcblxcblwiLFwiJG1lbnUtZm9udDogXFxcIkhlbHZldGljYSBOZXVlXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcXG4kbWVudS1mb250LXNpemU6IDAuOTByZW07XFxuXFxuJHRhYnMtZm9udDogXFxcIkhlbHZldGljYSBOZXVlXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcXG4kdGFicy1mb250LXNpemU6IDAuODByZW07XCIsXCJkaXYuY2wtcGxheWdyb3VuZCBkaXYud29yayB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcblwiLFwiZGl2LmNsLXBsYXlncm91bmQge1xcblxcbiAgZGl2LmNsLXBnLW92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZDogI2EwMDtcXG4gICAgb3BhY2l0eTogMC4wNTtcXG4gICAgei1pbmRleDogMjAwMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIGRpdi5jbC1wZy1tYWluIHtcXG4gICAgLy8gTm9ybWFsaXphdGlvbnNcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZnVsbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtd2luZG93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IHRoaW4gc29saWQgJHdpbmRvdy1ib3JkZXJzO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC1nYXAtYmVmb3JlLCBkaXYuY2wtcGxheWdyb3VuZC1nYXAtYWZ0ZXIge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcXG4gIGhlaWdodDogMWVtO1xcbn1cXG5cXG5cIixcIlxcbmRpdi5jbC1wbGF5Z3JvdW5kIHtcXG4gIGRpdi5jbC1wZy10YWJzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGZvbnQtc2l6ZTogJHRhYnMtZm9udC1zaXplO1xcblxcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAkdGFicy1iYWNrZ3JvdW5kO1xcbiAgICBib3JkZXI6IDA7XFxuXFxuICAgID51bCB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDNweCAwIDAgMnB4O1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcblxcbiAgICAgID5saSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBmb250LXNpemU6ICR0YWJzLWZvbnQtc2l6ZTtcXG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbSAwLjI1ZW0gMC40NWVtIDA7XFxuICAgICAgICBtaW4td2lkdGg6IDZlbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQ6ICR0YWItYmFja2dyb3VuZDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICR0YWItY29ybmVyLXJhZGl1cyAkdGFiLWNvcm5lci1yYWRpdXMgMCAwO1xcbiAgICAgICAgbWFyZ2luOiAxcHggM3B4IC0xcHggMDtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICB6LWluZGV4OiAxODtcXG5cXG4gICAgICAgIGE6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgICBmb250LWZhbWlseTogJHRhYnMtZm9udDtcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICBjb2xvcjogJHRhYi10ZXh0O1xcbiAgICAgICAgICBvdXRsaW5lOiAwO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGE6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XFxuICAgICAgICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgID5saS5zZWxlY3RlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGFiLXNlbGVjdGVkLWJhY2tncm91bmQ7XFxuICAgICAgICB6LWluZGV4OiAyMjtcXG5cXG4gICAgICAgIGEge1xcbiAgICAgICAgICBjb2xvcjogJHRhYi1zZWxlY3RlZC10ZXh0O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBkaXYuY2wtcGctdmlld3Mge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogMjlweDtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgei1pbmRleDogMjA7XFxuICAgIH1cXG5cXG4gICAgZGl2LmNsLXBnLXZpZXcge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgei1pbmRleDogMjA7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICB9XFxuXFxuICAgIGRpdi5jbC1wZy12aWV3LnNlbGVjdGVkIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICAgIH1cXG4gIH1cXG5cXG4gIGRpdi5jbC10YWItbWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogY2FsYygxMDAlIC0gMTdweCk7XFxuICAgIHRvcDogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxuXFxuICAgIGRpdiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiAxNHB4O1xcbiAgICAgIGhlaWdodDogMjdweDtcXG4gICAgICB0b3A6IDRweDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRtZW51LWJvcmRlci1jb2xvcjtcXG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtZW51LWJhY2tncm91bmQ7XFxuXFxuICAgICAgaW1nIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy9cXG4gICAgLy8gVGFiIGRyb3AtZG93biBtZW51XFxuICAgIC8vXFxuICAgIHVsIHtcXG5cXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgICBtYXJnaW46IDMwcHggMCAwIDA7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1lbnUtYmFja2dyb3VuZDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRtZW51LWJvcmRlci1jb2xvcjtcXG4gICAgICAvL2JvcmRlci10b3Atd2lkdGg6IDA7XFxuXFxuICAgICAgPiBsaSB7XFxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgICAgICBhIHtcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICB3aWR0aDogOGVtO1xcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICA+IGxpLm1lbnUtZGlzYWJsZWQge1xcbiAgICAgICAgYSB7XFxuICAgICAgICAgIG9wYWNpdHk6IDAuMztcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG5cXG5cXG4gIGRpdi5jbC10YWItbWVudS5jbC1tZW51LW9wZW4ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4ycztcXG4gIH1cXG59XCIsXCJAdXNlIFxcXCJzYXNzOm1hdGhcXFwiO1xcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIHtcXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3QsIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQsIGRpdi5jbC1wbGF5Z3JvdW5kLXJpZ2h0LFxcbiAgZGl2LmNsLXBsYXlncm91bmQtdG9wLCBkaXYuY2wtcGxheWdyb3VuZC1ib3R0b20ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODg4O1xcblxcbiAgICBkaXYuY2wtYmFyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgcmlnaHQ6IC01cHg7IC8vIG1hdGguZGl2KC0kZHJhZy1iYXItd2lkdGgsIDIpO1xcbiAgICAgIHdpZHRoOiAkZHJhZy1iYXItd2lkdGg7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgei1pbmRleDogMTAwO1xcbiAgICAgIGN1cnNvcjogZXctcmVzaXplO1xcbiAgICB9XFxuICB9XFxuXFxuICBkaXYuY2wtcGxheWdyb3VuZC1yaWdodCB7XFxuICB9XFxuXFxuICBkaXYuY2wtcGxheWdyb3VuZC10b3Age1xcbiAgICBmbGV4OiAwIDEgYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODg4O1xcblxcbiAgICBkaXYuY2wtYmFyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGJvdHRvbTogLTVweDsgLy8gbWF0aC5kaXYoLSRkcmFnLWJhci13aWR0aCwgMik7XFxuICAgICAgaGVpZ2h0OiAkZHJhZy1iYXItd2lkdGg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgei1pbmRleDogMjtcXG4gICAgICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXG4gICAgLy8gYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMTg0NTNiO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgZGl2LmNsLXBsYXlncm91bmQtcm9vdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgfVxcbn1cXG5cIixcImRpdi5jbC1wZy1udW1zIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsZXg6IDAgMCBhdXRvO1xcblxcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIHdpZHRoOiAyZW07XFxuICBwYWRkaW5nOiA0cHggMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDA7XFxuXFxuICBwIHtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCAzcHggMCAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjb2xvcjogIzc3NztcXG4gIH1cXG59XFxuXCIsXCJkaXYuY2wtcGctYWJvdXQge1xcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG5cXG4gIGZpZ3VyZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDIyNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIH1cXG5cXG4gIGRpdi5jbC1wZy1hYm91dC1kaXYge1xcbiAgICBwYWRkaW5nOiAxZW07XFxuXFxuICAgIGgxIHtcXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICBwIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gIH1cXG5cXG59XCIsXCJkaXYuY2wtcGxheWdyb3VuZCB7XFxuICBkaXYuY2wtcGctdmlldy5lZGl0b3Ige1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICAvLyBpbm5lckRpdlxcbiAgICA+IGRpdiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAgICBkaXYuY2wtcGctZWRpdG9yIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgICAgICB0ZXh0YXJlYSB7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcblxcbiAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgIHBhZGRpbmc6IDRweCAwIDAgM3B4O1xcbiAgICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xcblxcbiAgICAgICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgICAgICAgICBvdmVyZmxvdy13cmFwOiBub3JtYWxcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJkaXYuY2wtcGxheWdyb3VuZCB7XFxuICBkaXYuY2wtcGctdmlldy5vdXRwdXQge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICA+IGRpdiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAgICBwcmUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vaW1nL2JhcnMucG5nJyk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcXG5cXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDRweCAwIDAgM3B4O1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgfVxcblxcblxcbiAgICB9XFxuXFxuXFxuXFxuXFxuXFxuICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC00NWY3NWJjYjRiLzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS0zLjMuMS00YmJiNmVjNzdmLTQ3MGZlZWY2ODAuemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTQ1Zjc1YmNiNGIvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4xLTRiYmI2ZWM3N2YtNDcwZmVlZjY4MC56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTQ1Zjc1YmNiNGIvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4xLTRiYmI2ZWM3N2YtNDcwZmVlZjY4MC56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC00NWY3NWJjYjRiLzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS0zLjMuMS00YmJiNmVjNzdmLTQ3MGZlZWY2ODAuemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTQ1Zjc1YmNiNGIvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4xLTRiYmI2ZWM3N2YtNDcwZmVlZjY4MC56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTQ1Zjc1YmNiNGIvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4xLTRiYmI2ZWM3N2YtNDcwZmVlZjY4MC56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC1jMjllMDBjZjBlLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNi43LjEtYjkzYTJkZTBkNC0xNzBmZGJjNjMwLnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8ueWFybi9jYWNoZS9yZXNvbHZlLXVybC1sb2FkZXItbnBtLTUuMC4wLTliNDQxMDY3YzktNmQ0ODM3MzNhNC56aXAvbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zYXNzLWxvYWRlci12aXJ0dWFsLTI4YzBlN2I0NzQvMC9jYWNoZS9zYXNzLWxvYWRlci1ucG0tMTMuMC4yLWNhNjhhZmQ3M2QtNjMwNjcxMmNjNy56aXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0udXNlWzNdIS4vX3BsYXlncm91bmQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC1jMjllMDBjZjBlLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNi43LjEtYjkzYTJkZTBkNC0xNzBmZGJjNjMwLnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8ueWFybi9jYWNoZS9yZXNvbHZlLXVybC1sb2FkZXItbnBtLTUuMC4wLTliNDQxMDY3YzktNmQ0ODM3MzNhNC56aXAvbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zYXNzLWxvYWRlci12aXJ0dWFsLTI4YzBlN2I0NzQvMC9jYWNoZS9zYXNzLWxvYWRlci1ucG0tMTMuMC4yLWNhNjhhZmQ3M2QtNjMwNjcxMmNjNy56aXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0udXNlWzNdIS4vX3BsYXlncm91bmQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiUGxheWdyb3VuZFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb3Vyc2VsaWJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY291cnNlbGliXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImNvbW1vblwiLFwidmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vdmVuZG9yL2NsL3BsYXlncm91bmQvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJQbGF5Z3JvdW5kIiwiUGxheWdyb3VuZEZhY3RvcnkiLCJkZWZhdWx0IiwiY3JlYXRlIiwiU2l0ZSIsInNpdGUiLCJBY3Rpb24iLCJEaWFsb2ciLCJwYWNrYWdlanNvbiIsIkFib3V0QWN0aW9uIiwib3B0aW9ucyIsImNhbGwiLCJtYWluIiwicHJvdG90eXBlIiwiY29udGVudCIsInJvb3QiLCJ2ZXJzaW9uIiwiZGlhbG9nIiwidGl0bGUiLCJPYmplY3QiLCJjb25zdHJ1Y3RvciIsInRhZyIsImdldFNvdXJjZXMiLCJzb3VyY2VzIiwidW5kZWZpbmVkIiwic291cmNlIiwidGFiIiwiZ2V0VGFiIiwibmFtZSIsImRhdGEiLCJnZXQiLCJTYXZlQWN0aW9uIiwiQWxsQWN0aW9ucyIsImFkZEFsbCIsImFkZEFjdGlvbiIsInBhcmFtcyIsImFwcFRhZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwiYXBpIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJoYXNFcnJvciIsInRvYXN0IiwiZXJyb3IiLCJUb29scyIsImlzVmlzaWJsZSIsImVsZW0iLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImdldENsaWVudFJlY3RzIiwibGVuZ3RoIiwiYWRkQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkQ2xhc3NlcyIsImNsYXNzZXMiLCJzcGxpdCIsImZvckVhY2giLCJjbHMiLCJyZW1vdmVDbGFzcyIsInJlZ0V4IiwiUmVnRXhwIiwicmVwbGFjZSIsImNyZWF0ZUNsYXNzZWREaXYiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhZGRDb250ZW50IiwiaXNTdHJpbmciLCJpbm5lckhUTUwiLCJpc0VsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInZhbCIsInRvU3RyaW5nIiwibm9kZVZhbHVlIiwib2Zmc2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJzY3JvbGxMZWZ0Iiwid2luZG93IiwicGFnZVhPZmZzZXQiLCJ0b3AiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImNoaWxkIiwidGFnTmFtZSIsImNoaWxkTm9kZXMiLCJub2RlIiwiVG9hc3QiLCJkZWZhdWx0RHVyYXRpb24iLCJpbnRlclRvYXN0RGVsYXkiLCJtZXNzYWdlcyIsImFjdGl2ZSIsInNob3ciLCJtZXNzYWdlIiwic3BsaWNlIiwibXNnIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRpbWUiLCJwdXNoIiwianNvbkVycm9ycyIsImpzb25BcGkiLCJlcnJvcnMiLCJSZXNpemVyIiwiTWVudSIsIkRyYWdBbmREcm9wIiwiUGFuZSIsIk1haW4iLCJwbGF5Z3JvdW5kIiwibWVudSIsInRhYnMiLCJkaXZPdmVybGF5IiwiZGl2V29yayIsImluaXRpYWxpemUiLCJzdHlsZSIsImRpc3BsYXkiLCJoZWlnaHQiLCJjb250YWlucyIsImhhbmRsZSIsImRyYWdBbmREcm9wIiwicm9vdFBhbmUiLCJsb2FkIiwicGFuZSIsIlN0cmluZyIsInBhcnNlIiwic2V0IiwibmV3VGFiIiwibW9kYWwiLCJuYXYiLCJ1bCIsIm1lbnVzIiwiYWN0aW9uIiwidG9wTEkiLCJhIiwiaW5uZXJUZXh0IiwiZ2V0QWN0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdWJVTCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwib3BlbiIsImNsb3NlQWxsIiwic3ViTWVudSIsInN1YkxJIiwiY2xvc2VMaXN0ZW5lciIsInRhcmdldCIsInBhcmVudE5vZGUiLCJsaSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmFibGUiLCJzZWwiLCJxdWVyeVNlbGVjdG9yIiwiZmluZCIsImNsaWNrIiwiY2xvc3VyZSIsIk9wdGlvbnMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJnZXRBUEkiLCJtb2RlIiwib2JqIiwibW9kZU9iaiIsInVybCIsImNvbnRlbnRUeXBlIiwiZXh0cmEiLCJUYWJzIiwicGFyZW50IiwibWluU3BsaXQiLCJtYXhTcGxpdCIsImNoaWxkMSIsImNoaWxkMiIsImhvcml6b250YWxTcGxpdCIsImhvcml6IiwicGVyY2VudGFnZSIsImhvcml6b250YWwiLCJjaGlsZDFEYXRhIiwiY2hpbGQyRGF0YSIsImZsZXhEaXJlY3Rpb24iLCJiYXIiLCJzdGFydERyYWdnaW5nIiwicGFnZVgiLCJwYWdlWSIsIm1vdXNlTW92ZSIsIm1vdXNlVXAiLCJ0b3VjaCIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2hNb3ZlIiwidG91Y2hFbmQiLCJ0b3VjaENhbmNlbCIsInN0YXJ0WCIsInN0YXJ0WSIsIngiLCJ5IiwiZW5kRHJhZ2dpbmciLCJkcmFnZ2luZyIsIm1haW5YIiwid2lkIiwicmlnaHQiLCJwZXIiLCJtYWluWSIsImhpdCIsImJvdHRvbSIsIndoaWNoIiwid2lkdGgiLCJjb2xsZWN0aW9uIiwiUmVhZHkiLCJQQUNLQUdFIiwicmVxdWlyZSIsIm1haW5zIiwic3RhcnQiLCJzdGFydE5vdyIsImdvIiwiRWxlbWVudCIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJhY3Rpb25zIiwiT3V0cHV0VGFiIiwiRWRpdG9yVGFiIiwibWVudWJhcnMiLCJ0YWJzRGl2Iiwidmlld3NEaXYiLCJ0YWJEYXRhIiwibmV3UGFyZW50IiwidmlldyIsInNlbGVjdCIsInVuc2VsZWN0QWxsIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiVGFiIiwiaW5uZXJWaWV3IiwibnVtcyIsImVkaXRvckRpdiIsImVkaXRvciIsIkVkaXRvciIsInJlc2l6ZSIsImF1dG9JbmRlbnQiLCJzdHlsZXMiLCJzY3JvbGxhYmxlIiwidGV4dGFyZWEiLCJ0ZXh0IiwidmFsdWUiLCJsaW5lcyIsInAiLCJmb2N1cyIsInByZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRyYWdFbGVtZW50IiwiZHJhZ0l0ZW0iLCJkcm9wVmlld3MiLCJkcmFnZ2FibGUiLCJwYWxldHRlSXRlbSIsImRyb3BwYWJsZSIsImNhbGxiYWNrIiwiY2xvbmUiLCJwYWxldHRlSW1hZ2UiLCJwb3NpdGlvbiIsInpJbmRleCIsImN1cnNvciIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwidmlld0VsZW1lbnQiLCJ2aWV3WCIsInZpZXdZIiwiZm4iLCJhdHRhY2hFdmVudCIsInJlYWR5U3RhdGUiLCJpbnN0YWxsIiwianNvbiIsInRleHRDb250ZW50IiwibWVzc2FnZUxpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==
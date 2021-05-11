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
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/index.js");
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
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


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
/* harmony import */ var resizer_cl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resizer-cl */ "./node_modules/resizer-cl/index.js");
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/playground/_playground.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/playground/_playground.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_menu_check_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/menu-check.png */ "./vendor/cl/playground/img/menu-check.png");
/* harmony import */ var _img_bars_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/bars.png */ "./vendor/cl/playground/img/bars.png");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_menu_check_png__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_bars_png__WEBPACK_IMPORTED_MODULE_4__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.cl-playground div.toast {\n  position: absolute;\n  bottom: 0;\n  visibility: hidden;\n  transform: translateY(2.3em);\n  z-index: 400;\n  transition: all 0.4s ease-in-out 0s, visibility 0s linear 0.4s, z-index 0s linear 0.01s;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1.1em;\n  left: calc(50% - 30em/2);\n  width: 30em;\n  background-color: #151515;\n  color: white;\n  text-align: center;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding: 0.5em; }\n\ndiv.cl-playground div.toast.toast-active {\n  visibility: visible;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.4s;\n  z-index: 400; }\n\ndiv.cl-playground {\n  display: none; }\n\ndiv.cl-playground nav.cl-pg-menubar {\n  flex: 0 1 auto;\n  position: relative;\n  z-index: 100;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background-color: #f0f3f0;\n  border-bottom: thin solid #808080;\n  font-size: 0.9rem; }\n  div.cl-playground nav.cl-pg-menubar li:hover {\n    background: #00796B; }\n  div.cl-playground nav.cl-pg-menubar li {\n    user-select: none;\n    cursor: pointer; }\n    div.cl-playground nav.cl-pg-menubar li a {\n      font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n      font-size: 0.9rem;\n      color: black;\n      text-decoration: none; }\n    div.cl-playground nav.cl-pg-menubar li a:link, div.cl-playground nav.cl-pg-menubar li a:visited {\n      color: black; }\n  div.cl-playground nav.cl-pg-menubar > ul {\n    list-style-type: none;\n    margin: 0;\n    border: 0;\n    padding: 0; }\n    div.cl-playground nav.cl-pg-menubar > ul img.check {\n      vertical-align: baseline;\n      width: 19px;\n      height: 16px;\n      content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n    div.cl-playground nav.cl-pg-menubar > ul > li {\n      display: inline-block;\n      margin: 0;\n      border: 0;\n      padding: 0.25em 2em 0.25em 0.5em;\n      position: relative; }\n      div.cl-playground nav.cl-pg-menubar > ul > li a {\n        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        font-size: 0.9rem;\n        color: black;\n        text-decoration: none; }\n      div.cl-playground nav.cl-pg-menubar > ul > li a:link, div.cl-playground nav.cl-pg-menubar > ul > li a:visited {\n        color: black; }\n    div.cl-playground nav.cl-pg-menubar > ul ul {\n      visibility: hidden;\n      opacity: 0;\n      transform: translateY(-2em);\n      z-index: -1;\n      transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n      list-style-type: none;\n      position: absolute;\n      overflow: hidden;\n      left: 0;\n      top: 100%;\n      margin: 1px 0 0 0;\n      background-color: #f0f3f0;\n      padding: 0;\n      border: 1px solid #808080;\n      border-top-width: 0; }\n      div.cl-playground nav.cl-pg-menubar > ul ul > li {\n        padding: 0 5px;\n        margin: 0;\n        overflow: hidden; }\n        div.cl-playground nav.cl-pg-menubar > ul ul > li a {\n          display: inline-block;\n          width: 8em;\n          padding-top: 5px;\n          padding-bottom: 5px; }\n      div.cl-playground nav.cl-pg-menubar > ul ul > li.menu-disabled a {\n        opacity: 0.3; }\n    div.cl-playground nav.cl-pg-menubar > ul ul.cl-pg-menu-open {\n      visibility: visible;\n      opacity: 1;\n      z-index: 100;\n      transform: translateY(0%);\n      transition-delay: 0s, 0s, 0.2s; }\n    div.cl-playground nav.cl-pg-menubar > ul ul.edit-menu a {\n      width: 6em; }\n    div.cl-playground nav.cl-pg-menubar > ul ul.option-menu a {\n      width: 11em; }\n    div.cl-playground nav.cl-pg-menubar > ul ul.file-menu a {\n      width: 6em; }\n    div.cl-playground nav.cl-pg-menubar > ul ul.help-menu a {\n      width: 7.5em; }\n    div.cl-playground nav.cl-pg-menubar > ul .ul-state-active {\n      color: red; }\n    div.cl-playground nav.cl-pg-menubar > ul li.menu-divider {\n      height: 1px;\n      border: 0 solid black;\n      border-top-width: 1px; }\n\ndiv.cl-playground div.work {\n  flex: 1 1 auto;\n  position: relative;\n  width: 100%;\n  background: black; }\n\ndiv.cl-playground div.cl-pg-overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #a00;\n  opacity: 0.05;\n  z-index: 2000;\n  display: none; }\n\ndiv.cl-playground div.cl-pg-main {\n  line-height: normal;\n  font-size: 1rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column; }\n\ndiv.cl-playground-full {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: white; }\n\ndiv.cl-playground-window {\n  position: relative;\n  width: 100%;\n  height: 600px;\n  margin: 0;\n  padding: 0;\n  border: thin solid #aaaaaa;\n  border-bottom: none;\n  background: white;\n  min-height: 100px;\n  min-width: 400px; }\n\ndiv.cl-playground-gap-before, div.cl-playground-gap-after {\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 1px; }\n\ndiv.cl-playground-gap-after {\n  height: 1em; }\n\ndiv.cl-playground div.cl-pg-tabs {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  font-size: 0.8rem;\n  padding: 0;\n  background: #ddd;\n  border: 0; }\n  div.cl-playground div.cl-pg-tabs > ul {\n    margin: 0;\n    padding: 3px 0 0 2px;\n    background: transparent;\n    border: 0;\n    list-style: none; }\n    div.cl-playground div.cl-pg-tabs > ul > li {\n      position: relative;\n      display: inline-block;\n      font-size: 0.8rem;\n      padding: 0.25em 0.25em 0.45em 0;\n      min-width: 6em;\n      text-align: center;\n      cursor: pointer;\n      background: #ccc;\n      border: 1px solid black;\n      border-bottom: none;\n      border-radius: 5px 5px 0 0;\n      margin: 1px 3px -1px 0;\n      white-space: nowrap;\n      z-index: 18; }\n      div.cl-playground div.cl-pg-tabs > ul > li a:first-child {\n        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        display: inline-block;\n        padding: 0 0.25em;\n        text-decoration: none;\n        color: black;\n        outline: 0;\n        user-select: none; }\n      div.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) {\n        float: right;\n        display: inline-block;\n        margin-top: -2px;\n        padding: 0; }\n        div.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) img {\n          width: 12px;\n          height: auto; }\n    div.cl-playground div.cl-pg-tabs > ul > li.selected {\n      background: white;\n      z-index: 22; }\n      div.cl-playground div.cl-pg-tabs > ul > li.selected a {\n        color: black; }\n  div.cl-playground div.cl-pg-tabs div.cl-pg-views {\n    position: absolute;\n    left: 0;\n    top: 29px;\n    right: 0;\n    bottom: 0;\n    z-index: 20; }\n  div.cl-playground div.cl-pg-tabs div.cl-pg-view {\n    position: absolute;\n    display: none;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 20;\n    margin: 0;\n    padding: 0;\n    border: 0; }\n  div.cl-playground div.cl-pg-tabs div.cl-pg-view.selected {\n    display: block;\n    border-top: 1px solid black; }\n\ndiv.cl-playground div.cl-tab-menu {\n  position: absolute;\n  left: calc(100% - 17px);\n  top: 0;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s; }\n  div.cl-playground div.cl-tab-menu div {\n    position: absolute;\n    width: 14px;\n    height: 27px;\n    top: 4px;\n    left: 0;\n    border: 1px solid #808080;\n    border-bottom-width: 0;\n    background-color: #f0f3f0; }\n    div.cl-playground div.cl-tab-menu div img {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 12px;\n      height: auto; }\n  div.cl-playground div.cl-tab-menu ul {\n    list-style-type: none;\n    overflow: hidden;\n    margin: 30px 0 0 0;\n    background-color: #f0f3f0;\n    padding: 0;\n    border: 1px solid #808080; }\n    div.cl-playground div.cl-tab-menu ul > li {\n      padding: 0 5px;\n      margin: 0;\n      overflow: hidden; }\n      div.cl-playground div.cl-tab-menu ul > li a {\n        display: inline-block;\n        width: 8em;\n        padding-top: 5px;\n        padding-bottom: 5px; }\n    div.cl-playground div.cl-tab-menu ul > li.menu-disabled a {\n      opacity: 0.3; }\n\ndiv.cl-playground div.cl-tab-menu.cl-menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s; }\n\ndiv.cl-playground div.cl-playground-root, div.cl-playground div.cl-playground-left, div.cl-playground div.cl-playground-right,\ndiv.cl-playground div.cl-playground-top, div.cl-playground div.cl-playground-bottom {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  background: white; }\n\ndiv.cl-playground div.cl-playground-left {\n  position: relative;\n  flex: 0 1 auto;\n  border-right: 1px solid #888; }\n  div.cl-playground div.cl-playground-left div.cl-bar {\n    position: absolute;\n    margin: 0;\n    border: 0;\n    padding: 0;\n    top: 0;\n    height: 100%;\n    right: -5px;\n    width: 10px;\n    background: transparent;\n    z-index: 100;\n    cursor: ew-resize; }\n\ndiv.cl-playground div.cl-playground-top {\n  flex: 0 1 auto;\n  width: 100%;\n  border-bottom: 1px solid #888; }\n  div.cl-playground div.cl-playground-top div.cl-bar {\n    position: absolute;\n    margin: 0;\n    border: 0;\n    padding: 0;\n    bottom: -5px;\n    height: 10px;\n    width: 100%;\n    background: transparent;\n    z-index: 2;\n    cursor: ns-resize; }\n\ndiv.cl-playground div.cl-playground-bottom {\n  width: 100%;\n  height: auto; }\n\ndiv.cl-playground div.cl-playground-root {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\ndiv.cl-pg-nums {\n  display: inline-block;\n  flex: 0 0 auto;\n  background: #eee;\n  width: 2em;\n  padding: 4px 0;\n  overflow: hidden;\n  margin: 0; }\n  div.cl-pg-nums p {\n    font-size: 0.8em;\n    line-height: 16px;\n    margin: 0;\n    padding: 0 3px 0 0;\n    border: 0;\n    text-align: right;\n    color: #777; }\n\ndiv.cl-pg-about {\n  width: auto !important; }\n  div.cl-pg-about figure {\n    margin: 0;\n    width: 400px;\n    height: 225px;\n    background: black; }\n  div.cl-pg-about div.cl-pg-about-div {\n    padding: 1em; }\n    div.cl-pg-about div.cl-pg-about-div h1 {\n      font-size: 1.5em;\n      text-align: center; }\n    div.cl-pg-about div.cl-pg-about-div p {\n      text-align: center; }\n\ndiv.cl-playground div.cl-pg-view.editor {\n  overflow: hidden; }\n  div.cl-playground div.cl-pg-view.editor > div {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    background: white;\n    padding: 0;\n    display: flex;\n    flex-direction: row; }\n    div.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor {\n      margin: 0;\n      display: block;\n      flex: 1 1 auto;\n      height: 100%; }\n      div.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor textarea {\n        line-height: 16px;\n        margin: 0;\n        padding: 4px 0 0 3px;\n        border: 0;\n        overflow: auto;\n        width: 100%;\n        height: 100%;\n        min-height: 100%;\n        font-size: 1em;\n        font-family: monospace, monospace;\n        white-space: pre;\n        overflow-wrap: normal; }\n\ndiv.cl-playground div.cl-pg-view.output {\n  overflow: hidden; }\n  div.cl-playground div.cl-pg-view.output > div {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    background: white;\n    padding: 0;\n    display: flex;\n    flex-direction: row; }\n    div.cl-playground div.cl-pg-view.output > div pre {\n      display: block;\n      flex: 1 1 auto;\n      background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n      line-height: 16px;\n      margin: 0;\n      padding: 4px 0 0 3px;\n      border: 0;\n      overflow: auto;\n      height: 100%; }\n", "",{"version":3,"sources":["webpack://./vendor/cl/playground/sass/partials/_toast.scss","webpack://./vendor/cl/playground/sass/modules/_variables.scss","webpack://./vendor/cl/playground/sass/modules/_colors.scss","webpack://./vendor/cl/playground/sass/partials/_playground.scss","webpack://./vendor/cl/playground/sass/partials/_menu.scss","webpack://./vendor/cl/playground/sass/modules/_fonts.scss","webpack://./vendor/cl/playground/sass/partials/_work.scss","webpack://./vendor/cl/playground/sass/partials/_main.scss","webpack://./vendor/cl/playground/sass/partials/_tabs.scss","webpack://./vendor/cl/playground/sass/partials/_pane.scss","webpack://./vendor/cl/playground/sass/partials/_line_numbers.scss","webpack://./vendor/cl/playground/sass/partials/_about.scss","webpack://./vendor/cl/playground/sass/partials/_tab_editor.scss","webpack://./vendor/cl/playground/sass/partials/_tab_output.scss"],"names":[],"mappings":"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","sourcesContent":["div.cl-playground\r\n{\r\n  $toast-transition-time: 0.4s;\r\n\r\n  div.toast {\r\n    position: absolute;\r\n    bottom: 0;\r\n\r\n    visibility: hidden;\r\n    transform: translateY(2.3em);\r\n    z-index: 400;\r\n    transition: all $toast-transition-time ease-in-out 0s, visibility 0s linear $toast-transition-time, z-index 0s linear 0.01s;\r\n\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: $toast-font-size;\r\n    left: calc(50% - #{$toast-width}/2);\r\n    width: $toast-width;\r\n    background-color: $toast-background;\r\n    color: $toast-text;\r\n    text-align: center;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    padding: 0.5em;\r\n  }\r\n\r\n  div.toast.toast-active {\r\n    visibility: visible;\r\n    transform: translateY(0%);\r\n    transition-delay: 0s, 0s, $toast-transition-time;\r\n    z-index: 400;\r\n\r\n  }\r\n}","$toast-font-size: 1.1em;\r\n$toast-width: 30em;\r\n\r\n$drag-bar-width: 10px;\r\n\r\n$tab-corner-radius: 5px;\r\n","// The major colors\r\n// We have a primary color, two secondary colors, and a complementary color.\r\n$dark-primary: #00796B;\r\n$primary: #009688;\r\n$light-primary: #B2DFDB;\r\n$accent: #607D8B;\r\n$primary-text: #212121;\r\n$divider-color: #BDBDBD;\r\n$secondary-text: #606060;\r\n\r\n$comp: #c41425;\r\n$window-borders: #aaaaaa;\r\n\r\n\r\n\r\n$tabs-background: #ddd;\r\n$tab-background: #ccc;\r\n$tab-text: black;\r\n$tab-selected-background: white;\r\n$tab-selected-text: black;\r\n\r\n$menu-focus: $dark-primary;\r\n$menu-background: #f0f3f0;\r\n$menu-color: black;\r\n$menu-divider-color: black;\r\n$menu-border-color: #808080;\r\n\r\n$resizer: $dark-primary;\r\n\r\n$toast-background: #151515;\r\n$toast-text: white;","div.cl-playground {\r\n  display: none;\r\n}\r\n","div.cl-playground nav.cl-pg-menubar {\r\n  flex: 0 1 auto;\r\n  position: relative;\r\n  z-index: 100;\r\n  margin: 0;\r\n  border: 0;\r\n  padding: 0;\r\n  background-color: $menu-background;\r\n  border-bottom: thin solid #808080;\r\n  font-size: $menu-font-size;\r\n\r\n  li:hover {\r\n    background: $menu-focus;\r\n  }\r\n\r\n  li {\r\n    user-select: none;\r\n    cursor: pointer;\r\n\r\n    a {\r\n      font-family: $menu-font;\r\n      font-size: $menu-font-size;\r\n      color: $menu-color;\r\n      text-decoration: none;\r\n    }\r\n\r\n    a:link, a:visited {\r\n      color: $menu-color;\r\n    }\r\n  }\r\n\r\n  //\r\n  // Top level menu\r\n  //\r\n  > ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    border: 0;\r\n    padding: 0;\r\n\r\n    img.check {\r\n      vertical-align: baseline;\r\n      width: 19px;\r\n      height: 16px;\r\n      content: url(\"../../img/menu-check.png\");\r\n    }\r\n\r\n    > li {\r\n      display: inline-block;\r\n      margin: 0;\r\n      border: 0;\r\n      padding: 0.25em 2em 0.25em 0.5em;\r\n      position: relative;\r\n\r\n      a {\r\n        font-family: $menu-font;\r\n        font-size: $menu-font-size;\r\n        color: $menu-color;\r\n        text-decoration: none;\r\n      }\r\n\r\n      a:link, a:visited {\r\n        color: $menu-color;\r\n      }\r\n    }\r\n\r\n    //\r\n    // Drop-down menu\r\n    //\r\n    ul {\r\n      visibility: hidden;\r\n      opacity: 0;\r\n      transform: translateY(-2em);\r\n      z-index: -1;\r\n      transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\r\n\r\n      list-style-type: none;\r\n      // display: none;\r\n      position: absolute;\r\n      overflow: hidden;\r\n      left: 0;\r\n      top: 100%;\r\n      margin: 1px 0 0 0;\r\n      background-color: $menu-background;\r\n      padding: 0;\r\n      border: 1px solid $menu-border-color;\r\n      border-top-width: 0;\r\n\r\n      > li {\r\n        padding: 0 5px;\r\n        margin: 0;\r\n        overflow: hidden;\r\n\r\n        a {\r\n          display: inline-block;\r\n          width: 8em;\r\n          padding-top: 5px;\r\n          padding-bottom: 5px;\r\n        }\r\n      }\r\n\r\n      > li.menu-disabled {\r\n        a {\r\n          opacity: 0.3;\r\n        }\r\n      }\r\n    }\r\n\r\n    ul.cl-pg-menu-open {\r\n      visibility: visible;\r\n      opacity: 1;\r\n      z-index: 100;\r\n      transform: translateY(0%);\r\n      transition-delay: 0s, 0s, 0.2s;\r\n    }\r\n\r\n    ul.edit-menu a {\r\n      width: 6em;\r\n    }\r\n\r\n    ul.option-menu a {\r\n      width: 11em;\r\n    }\r\n\r\n    ul.file-menu a {\r\n      width: 6em;\r\n    }\r\n\r\n    ul.help-menu a {\r\n      width: 7.5em;\r\n    }\r\n\r\n    .ul-state-active {\r\n      color: red;\r\n    }\r\n\r\n    li.menu-divider {\r\n      height: 1px;\r\n      border: 0 solid $menu-divider-color;\r\n      border-top-width: 1px;\r\n    }\r\n  }\r\n}\r\n\r\n","$menu-font: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n$menu-font-size: 0.90rem;\r\n\r\n$tabs-font: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n$tabs-font-size: 0.80rem;","div.cl-playground div.work {\r\n  flex: 1 1 auto;\r\n  position: relative;\r\n  width: 100%;\r\n  background: black;\r\n}\r\n\r\n","div.cl-playground {\r\n\r\n  div.cl-pg-overlay {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    background: #a00;\r\n    opacity: 0.05;\r\n    z-index: 2000;\r\n    display: none;\r\n  }\r\n\r\n  div.cl-pg-main {\r\n    // Normalizations\r\n    line-height: normal;\r\n    font-size: 1rem;\r\n\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    overflow: hidden;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n\r\ndiv.cl-playground-full {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  background: white;\r\n}\r\n\r\ndiv.cl-playground-window {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 600px;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: thin solid $window-borders;\r\n  border-bottom: none;\r\n  background: white;\r\n  min-height: 100px;\r\n  min-width: 400px;\r\n}\r\n\r\ndiv.cl-playground-gap-before, div.cl-playground-gap-after {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  height: 1px;\r\n}\r\n\r\ndiv.cl-playground-gap-after {\r\n  height: 1em;\r\n}\r\n\r\n","\r\ndiv.cl-playground {\r\n  div.cl-pg-tabs {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    font-size: $tabs-font-size;\r\n\r\n    padding: 0;\r\n    background: $tabs-background;\r\n    border: 0;\r\n\r\n    >ul {\r\n      margin: 0;\r\n      padding: 3px 0 0 2px;\r\n      background: transparent;\r\n      border: 0;\r\n      list-style: none;\r\n\r\n\r\n      >li {\r\n        position: relative;\r\n        display: inline-block;\r\n        font-size: $tabs-font-size;\r\n        padding: 0.25em 0.25em 0.45em 0;\r\n        min-width: 6em;\r\n        text-align: center;\r\n        cursor: pointer;\r\n        background: $tab-background;\r\n        border: 1px solid black;\r\n        border-bottom: none;\r\n        border-radius: $tab-corner-radius $tab-corner-radius 0 0;\r\n        margin: 1px 3px -1px 0;\r\n        white-space: nowrap;\r\n        z-index: 18;\r\n\r\n        a:first-child {\r\n          font-family: $tabs-font;\r\n          display: inline-block;\r\n          padding: 0 0.25em;\r\n          text-decoration: none;\r\n          color: $tab-text;\r\n          outline: 0;\r\n          user-select: none;\r\n        }\r\n\r\n        a:nth-child(2) {\r\n          float: right;\r\n          display: inline-block;\r\n          margin-top: -2px;\r\n          padding: 0;\r\n\r\n          img {\r\n            width: 12px;\r\n            height: auto;\r\n          }\r\n        }\r\n      }\r\n\r\n      >li.selected {\r\n        background: $tab-selected-background;\r\n        z-index: 22;\r\n\r\n        a {\r\n          color: $tab-selected-text;\r\n        }\r\n      }\r\n    }\r\n\r\n    div.cl-pg-views {\r\n      position: absolute;\r\n      left: 0;\r\n      top: 29px;\r\n      right: 0;\r\n      bottom: 0;\r\n      z-index: 20;\r\n    }\r\n\r\n    div.cl-pg-view {\r\n      position: absolute;\r\n      display: none;\r\n      left: 0;\r\n      top: 0;\r\n      right: 0;\r\n      bottom: 0;\r\n      height: 100%;\r\n      width: 100%;\r\n      z-index: 20;\r\n      margin: 0;\r\n      padding: 0;\r\n      border: 0;\r\n    }\r\n\r\n    div.cl-pg-view.selected {\r\n      display: block;\r\n      border-top: 1px solid black;\r\n    }\r\n  }\r\n\r\n  div.cl-tab-menu {\r\n    position: absolute;\r\n    left: calc(100% - 17px);\r\n    top: 0;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transform: translateY(-2em);\r\n    z-index: -1;\r\n    transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\r\n\r\n    div {\r\n      position: absolute;\r\n      width: 14px;\r\n      height: 27px;\r\n      top: 4px;\r\n      left: 0;\r\n      border: 1px solid $menu-border-color;\r\n      border-bottom-width: 0;\r\n      background-color: $menu-background;\r\n\r\n      img {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        width: 12px;\r\n        height: auto;\r\n      }\r\n    }\r\n\r\n    //\r\n    // Tab drop-down menu\r\n    //\r\n    ul {\r\n\r\n      list-style-type: none;\r\n      overflow: hidden;\r\n\r\n      margin: 30px 0 0 0;\r\n      background-color: $menu-background;\r\n      padding: 0;\r\n      border: 1px solid $menu-border-color;\r\n      //border-top-width: 0;\r\n\r\n      > li {\r\n        padding: 0 5px;\r\n        margin: 0;\r\n        overflow: hidden;\r\n\r\n        a {\r\n          display: inline-block;\r\n          width: 8em;\r\n          padding-top: 5px;\r\n          padding-bottom: 5px;\r\n        }\r\n      }\r\n\r\n      > li.menu-disabled {\r\n        a {\r\n          opacity: 0.3;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n\r\n\r\n  div.cl-tab-menu.cl-menu-open {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    z-index: 100;\r\n    transform: translateY(0%);\r\n    transition-delay: 0s, 0s, 0.2s;\r\n  }\r\n}","div.cl-playground {\r\n  div.cl-playground-root, div.cl-playground-left, div.cl-playground-right,\r\n  div.cl-playground-top, div.cl-playground-bottom {\r\n    position: relative;\r\n    display: flex;\r\n    flex: 1 1 auto;\r\n    box-sizing: border-box;\r\n    background: white;\r\n  }\r\n\r\n  div.cl-playground-left {\r\n    position: relative;\r\n    flex: 0 1 auto;\r\n    border-right: 1px solid #888;\r\n\r\n    div.cl-bar {\r\n      position: absolute;\r\n      margin: 0;\r\n      border: 0;\r\n      padding: 0;\r\n      top: 0;\r\n      height: 100%;\r\n      right: -$drag-bar-width / 2;\r\n      width: $drag-bar-width;\r\n      background: transparent;\r\n      z-index: 100;\r\n      cursor: ew-resize;\r\n    }\r\n  }\r\n\r\n  div.cl-playground-right {\r\n  }\r\n\r\n  div.cl-playground-top {\r\n    flex: 0 1 auto;\r\n    width: 100%;\r\n    border-bottom: 1px solid #888;\r\n\r\n    div.cl-bar {\r\n      position: absolute;\r\n      margin: 0;\r\n      border: 0;\r\n      padding: 0;\r\n      bottom: -$drag-bar-width / 2;\r\n      height: $drag-bar-width;\r\n      width: 100%;\r\n      background: transparent;\r\n      z-index: 2;\r\n      cursor: ns-resize;\r\n    }\r\n  }\r\n\r\n  div.cl-playground-bottom {\r\n    // border-left: 5px solid #18453b;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  div.cl-playground-root {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n  }\r\n}\r\n","div.cl-pg-nums {\r\n  display: inline-block;\r\n  flex: 0 0 auto;\r\n\r\n  background: #eee;\r\n  width: 2em;\r\n  padding: 4px 0;\r\n  overflow: hidden;\r\n  margin: 0;\r\n\r\n  p {\r\n    font-size: 0.8em;\r\n    line-height: 16px;\r\n    margin: 0;\r\n    padding: 0 3px 0 0;\r\n    border: 0;\r\n    text-align: right;\r\n    color: #777;\r\n  }\r\n}\r\n","div.cl-pg-about {\r\n  width: auto !important;\r\n\r\n  figure {\r\n    margin: 0;\r\n    width: 400px;\r\n    height: 225px;\r\n    background: black;\r\n  }\r\n\r\n  div.cl-pg-about-div {\r\n    padding: 1em;\r\n\r\n    h1 {\r\n      font-size: 1.5em;\r\n      text-align: center;\r\n    }\r\n\r\n    p {\r\n      text-align: center;\r\n    }\r\n  }\r\n\r\n}","div.cl-playground {\r\n  div.cl-pg-view.editor {\r\n    overflow: hidden;\r\n\r\n    // innerDiv\r\n    > div {\r\n      position: absolute;\r\n      left: 0;\r\n      top: 0;\r\n      bottom: 0;\r\n      width: 100%;\r\n      background: white;\r\n      padding: 0;\r\n      display: flex;\r\n      flex-direction: row;\r\n\r\n      div.cl-pg-editor {\r\n        margin: 0;\r\n        display: block;\r\n        flex: 1 1 auto;\r\n        height: 100%;\r\n\r\n        textarea {\r\n          line-height: 16px;\r\n\r\n          margin: 0;\r\n          padding: 4px 0 0 3px;\r\n          border: 0;\r\n          overflow: auto;\r\n          width: 100%;\r\n          height: 100%;\r\n\r\n          min-height: 100%;\r\n\r\n          font-size: 1em;\r\n          font-family: monospace, monospace;\r\n          white-space: pre;\r\n          overflow-wrap: normal\r\n        }\r\n      }\r\n\r\n    }\r\n  }\r\n}\r\n","div.cl-playground {\r\n  div.cl-pg-view.output {\r\n    overflow: hidden;\r\n\r\n    > div {\r\n      position: absolute;\r\n      left: 0;\r\n      top: 0;\r\n      bottom: 0;\r\n      width: 100%;\r\n      background: white;\r\n      padding: 0;\r\n      display: flex;\r\n      flex-direction: row;\r\n\r\n      pre {\r\n        display: block;\r\n        flex: 1 1 auto;\r\n        background: url('../../img/bars.png');\r\n        line-height: 16px;\r\n\r\n        margin: 0;\r\n        padding: 4px 0 0 3px;\r\n        border: 0;\r\n        overflow: auto;\r\n        height: 100%;\r\n      }\r\n\r\n\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n  }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./vendor/cl/playground/_playground.scss":
/*!***********************************************!*\
  !*** ./vendor/cl/playground/_playground.scss ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./_playground.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/playground/_playground.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./_playground.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/playground/_playground.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./_playground.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/playground/_playground.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

module.exports = JSON.parse('{"name":"playground-cl","version":"2.0.0","description":"CourseLib Playground IDE","main":"index.js","keywords":["Education","Course Web Sites","Karnaugh Maps"],"author":"Charles B. Owen","license":"MIT","devDependencies":{},"dependencies":{"course-cl":">=0.0.1"}}');

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
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
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("Playground." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("2824afd5c6e8dc9ff27f")
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "courselib:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/cl/dist/";
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
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatecourselib"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
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
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common","vendor"], () => (__webpack_require__("./vendor/cl/playground/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0FjdGlvbnMvQWJvdXRBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9BY3Rpb25zL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0FjdGlvbnMvQWxsQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0FjdGlvbnMvU2F2ZUFjdGlvbi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0RPTS9Ub29scy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0dyYXBoaWNzL1RvYXN0LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvTWFpbi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL01lbnUuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9PcHRpb25zLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvUGFuZS5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1BsYXlncm91bmQuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9UYWJzLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVGFicy9FZGl0b3JUYWIuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9UYWJzL091dHB1dFRhYi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1RhYnMvVGFiLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVUkvRHJhZ0FuZERyb3AuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9VdGlsaXR5L1JlYWR5LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL19wbGF5Z3JvdW5kLnNjc3MiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvX3BsYXlncm91bmQuc2Nzcz82OTBkIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2ltZy9iYXJzLnBuZyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbWcvbWVudS1jaGVjay5wbmciLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvaW1nL21lbnViYXJzLnBuZyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCB1cGRhdGUgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9nZXQgdXBkYXRlIG1hbmlmZXN0IGZpbGVuYW1lIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2hvdCBtb2R1bGUgcmVwbGFjZW1lbnQiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIlBsYXlncm91bmRGYWN0b3J5IiwiU2l0ZSIsInNpdGUiLCJQbGF5Z3JvdW5kIiwiY3JlYXRlIiwiaW5zdGFsbCIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImVsZW1lbnQiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwidGV4dENvbnRlbnQiLCJpbm5lckhUTUwiLCJwbGF5Z3JvdW5kIiwic3RhcnROb3ciLCJzdGFydCIsIm1lc3NhZ2VMaXN0ZW5lciIsIm1zZyIsImRhdGEiLCJBYm91dEFjdGlvbiIsIm9wdGlvbnMiLCJBY3Rpb24iLCJtYWluIiwiY29udGVudCIsInJvb3QiLCJwYWNrYWdlanNvbiIsImRpYWxvZyIsIkRpYWxvZyIsInRpdGxlIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY29uc3RydWN0b3IiLCJ0YWciLCJnZXRTb3VyY2VzIiwic291cmNlcyIsInVuZGVmaW5lZCIsInNvdXJjZSIsInRhYiIsImdldFRhYiIsIm5hbWUiLCJnZXQiLCJBbGxBY3Rpb25zIiwiYWRkQWxsIiwiYWRkQWN0aW9uIiwiU2F2ZUFjdGlvbiIsInBhcmFtcyIsImFwcFRhZyIsInN0cmluZ2lmeSIsInR5cGUiLCJhcGkiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImhhc0Vycm9yIiwidG9hc3QiLCJlcnJvciIsIlRvb2xzIiwiaXNWaXNpYmxlIiwiZWxlbSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZ2V0Q2xpZW50UmVjdHMiLCJhZGRDbGFzcyIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImFkZENsYXNzZXMiLCJjbGFzc2VzIiwic3BsaXQiLCJmb3JFYWNoIiwiY2xzIiwicmVtb3ZlQ2xhc3MiLCJyZWdFeCIsIlJlZ0V4cCIsInJlcGxhY2UiLCJjcmVhdGVDbGFzc2VkRGl2IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImFkZENvbnRlbnQiLCJpc1N0cmluZyIsImlzRWxlbWVudCIsImFwcGVuZENoaWxkIiwidmFsIiwidG9TdHJpbmciLCJjYWxsIiwibm9kZVZhbHVlIiwib2Zmc2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJzY3JvbGxMZWZ0Iiwid2luZG93IiwicGFnZVhPZmZzZXQiLCJ0b3AiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImNoaWxkIiwidGFnTmFtZSIsImNoaWxkTm9kZXMiLCJub2RlIiwiVG9hc3QiLCJkZWZhdWx0RHVyYXRpb24iLCJpbnRlclRvYXN0RGVsYXkiLCJtZXNzYWdlcyIsImFjdGl2ZSIsInNob3ciLCJtZXNzYWdlIiwic3BsaWNlIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRpbWUiLCJwdXNoIiwianNvbkVycm9ycyIsImpzb25BcGkiLCJlcnJvcnMiLCJNYWluIiwibWVudSIsInRhYnMiLCJkaXZPdmVybGF5IiwiZGl2V29yayIsImluaXRpYWxpemUiLCJzdHlsZSIsImRpc3BsYXkiLCJoZWlnaHQiLCJjb250YWlucyIsIlJlc2l6ZXIiLCJoYW5kbGUiLCJkcmFnQW5kRHJvcCIsIkRyYWdBbmREcm9wIiwiTWVudSIsInJvb3RQYW5lIiwiUGFuZSIsImxvYWQiLCJwYW5lIiwiU3RyaW5nIiwic2V0IiwibmV3VGFiIiwibW9kYWwiLCJuYXYiLCJ1bCIsIm1lbnVzIiwiYWN0aW9uIiwidG9wTEkiLCJhIiwiaW5uZXJUZXh0IiwiZ2V0QWN0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdWJVTCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwib3BlbiIsImNsb3NlQWxsIiwic3ViTWVudSIsInN1YkxJIiwiY2xvc2VMaXN0ZW5lciIsInRhcmdldCIsInBhcmVudE5vZGUiLCJsaSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmFibGUiLCJzZWwiLCJxdWVyeVNlbGVjdG9yIiwiZmluZCIsImNsaWNrIiwiY2xvc3VyZSIsIk9wdGlvbnMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJnZXRBUEkiLCJtb2RlIiwib2JqIiwibW9kZU9iaiIsInVybCIsImNvbnRlbnRUeXBlIiwiZXh0cmEiLCJwYXJlbnQiLCJtaW5TcGxpdCIsIm1heFNwbGl0IiwiY2hpbGQxIiwiY2hpbGQyIiwiaG9yaXpvbnRhbFNwbGl0IiwiaG9yaXoiLCJwZXJjZW50YWdlIiwiVGFicyIsImhvcml6b250YWwiLCJjaGlsZDFEYXRhIiwiY2hpbGQyRGF0YSIsImZsZXhEaXJlY3Rpb24iLCJiYXIiLCJzdGFydERyYWdnaW5nIiwicGFnZVgiLCJwYWdlWSIsIm1vdXNlTW92ZSIsIm1vdXNlVXAiLCJ0b3VjaCIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2hNb3ZlIiwidG91Y2hFbmQiLCJ0b3VjaENhbmNlbCIsInN0YXJ0WCIsInN0YXJ0WSIsIngiLCJ5IiwiZW5kRHJhZ2dpbmciLCJkcmFnZ2luZyIsIm1haW5YIiwid2lkIiwicmlnaHQiLCJwZXIiLCJtYWluWSIsImhpdCIsImJvdHRvbSIsIndoaWNoIiwid2lkdGgiLCJjb2xsZWN0aW9uIiwiUEFDS0FHRSIsInJlcXVpcmUiLCJ2ZXJzaW9uIiwibWFpbnMiLCJSZWFkeSIsIkVsZW1lbnQiLCJhY3Rpb25zIiwidGFic0RpdiIsInZpZXdzRGl2IiwidGFiRGF0YSIsIm5ld1BhcmVudCIsIkVkaXRvclRhYiIsIk91dHB1dFRhYiIsInZpZXciLCJzZWxlY3QiLCJ1bnNlbGVjdEFsbCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIlRhYiIsImlubmVyVmlldyIsIm51bXMiLCJlZGl0b3JEaXYiLCJlZGl0b3IiLCJFZGl0b3IiLCJyZXNpemUiLCJhdXRvSW5kZW50Iiwic3R5bGVzIiwic2Nyb2xsYWJsZSIsInRleHRhcmVhIiwidGV4dCIsInZhbHVlIiwibGluZXMiLCJwIiwiZm9jdXMiLCJwcmUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJkcmFnRWxlbWVudCIsImRyYWdJdGVtIiwiZHJvcFZpZXdzIiwiZHJhZ2dhYmxlIiwicGFsZXR0ZUl0ZW0iLCJkcm9wcGFibGUiLCJjYWxsYmFjayIsImNsb25lIiwicGFsZXR0ZUltYWdlIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjdXJzb3IiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInZpZXdFbGVtZW50Iiwidmlld1giLCJ2aWV3WSIsImdvIiwiZm4iLCJhdHRhY2hFdmVudCIsInJlYWR5U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQUEsMkVBQUEsQ0FBeUJDLElBQUksQ0FBQ0MsSUFBOUI7QUFFQUQsSUFBSSxDQUFDRSxVQUFMLEdBQWtCQSxpRUFBbEIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFFTyxJQUFNSCxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQVcsQ0FBRSxDQUF2Qzs7QUFFUEEsaUJBQWlCLENBQUNJLE1BQWxCLEdBQTJCLFVBQVNGLElBQVQsRUFBZTtBQUV6QyxXQUFTRyxPQUFULEdBQW1CO0FBQ2xCLFFBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixtQkFBMUIsQ0FBakI7O0FBQ0EsU0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNILFFBQVEsQ0FBQ0ksTUFBeEIsRUFBZ0NELENBQUMsRUFBakMsRUFBcUM7QUFDcEMsVUFBSUUsT0FBTyxHQUFHTCxRQUFRLENBQUNHLENBQUQsQ0FBdEI7QUFDQSxVQUFNRyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxPQUFPLENBQUNJLFdBQW5CLENBQWI7QUFDQUosYUFBTyxDQUFDSyxTQUFSLEdBQW9CLEVBQXBCO0FBQ0EsVUFBTUMsVUFBVSxHQUFHLElBQUlkLDhEQUFKLENBQWVELElBQWYsRUFBcUJTLE9BQXJCLEVBQThCQyxJQUE5QixDQUFuQjtBQUNBSyxnQkFBVSxDQUFDQyxRQUFYO0FBQ0E7QUFDRDs7QUFFRGhCLE1BQUksQ0FBQ2lCLEtBQUwsQ0FBWSxZQUFNO0FBQ2pCZCxXQUFPO0FBQ1AsR0FGRDtBQUtBSCxNQUFJLENBQUNrQixlQUFMLENBQXFCLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixF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V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRzs7V0FFSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQSxHQUFHOztXQUVIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZ0JBQWdCLHFDQUFxQztXQUNyRDtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7O1dBRUE7V0FDQTtXQUNBLElBQUk7V0FDSixHQUFHO1dBQ0gsRUFBRTtXQUNGOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLEVBQUU7O1dBRUY7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNB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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUUsSUFBSTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLHFDQUFxQztXQUNyQztXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VDcmhCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InBsYXlncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0ICcuL19wbGF5Z3JvdW5kLnNjc3MnO1xyXG5pbXBvcnQge1BsYXlncm91bmR9IGZyb20gJy4vanMvUGxheWdyb3VuZC9QbGF5Z3JvdW5kJztcclxuaW1wb3J0IHtQbGF5Z3JvdW5kRmFjdG9yeX0gZnJvbSAnLi9qcy9QbGF5Z3JvdW5kRmFjdG9yeSc7XHJcblxyXG5leHBvcnQge1BsYXlncm91bmR9O1xyXG5leHBvcnQge1BsYXlncm91bmQgYXMgZGVmYXVsdH07XHJcblxyXG5QbGF5Z3JvdW5kRmFjdG9yeS5jcmVhdGUoU2l0ZS5zaXRlKTtcclxuXHJcblNpdGUuUGxheWdyb3VuZCA9IFBsYXlncm91bmQ7XHJcblxyXG4iLCJpbXBvcnQge1BsYXlncm91bmR9IGZyb20gXCIuL1BsYXlncm91bmQvUGxheWdyb3VuZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXlncm91bmRGYWN0b3J5ID0gZnVuY3Rpb24oKSB7fVxyXG5cclxuUGxheWdyb3VuZEZhY3RvcnkuY3JlYXRlID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cclxuXHRmdW5jdGlvbiBpbnN0YWxsKCkge1xyXG5cdFx0Y29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtcGxheWdyb3VuZCcpO1xyXG5cdFx0Zm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuXHRcdFx0Y29uc3QganNvbiA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XHJcblx0XHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdGNvbnN0IHBsYXlncm91bmQgPSBuZXcgUGxheWdyb3VuZChzaXRlLCBlbGVtZW50LCBqc29uKTtcclxuXHRcdFx0cGxheWdyb3VuZC5zdGFydE5vdygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2l0ZS5zdGFydCggKCkgPT4ge1xyXG5cdFx0aW5zdGFsbCgpO1xyXG5cdH0pO1xyXG5cclxuXHJcblx0c2l0ZS5tZXNzYWdlTGlzdGVuZXIoKG1zZywgZGF0YSkgPT4ge1xyXG5cdFx0c3dpdGNoKG1zZykge1xyXG5cdFx0XHRjYXNlICdjbC1xdWl6LWFmdGVyLWluc3RhbGxlZCc6XHJcblx0XHRcdFx0aW5zdGFsbCgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnY2wtZ3JhZGVzLWdyYWRlci1pbnN0YWxsZWQnOlxyXG5cdFx0XHRcdGluc3RhbGwoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHNpdGUuUGxheWdyb3VuZCA9IFBsYXlncm91bmQ7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7QWN0aW9ufSBmcm9tICcuL0FjdGlvbic7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnZGlhbG9nLWNsJztcclxuaW1wb3J0IHBhY2thZ2Vqc29uIGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXRBY3Rpb24gPSBmdW5jdGlvbihzaXRlLCBvcHRpb25zKSB7XHJcblx0QWN0aW9uLmNhbGwodGhpcywgc2l0ZSwgb3B0aW9ucyk7XHJcblxyXG5cdHRoaXMuZG8gPSBmdW5jdGlvbihtYWluKSB7XHJcblx0XHRBY3Rpb24ucHJvdG90eXBlLmRvLmNhbGwodGhpcywgbWFpbik7XHJcblxyXG5cdFx0Ly8gRGlhbG9nIGJveCBjb250ZW50c1xyXG5cdFx0bGV0IGNvbnRlbnQgPSBgXHJcbjxmaWd1cmU+PGltZyBzcmM9XCIke3NpdGUucm9vdH0vdmVuZG9yL2NsL3BsYXlncm91bmQvaW1nL3BsYXlncm91bmQuanBnXCIgYWx0PVwiQ2lyc2ltIExvZ29cIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjIyNVwiPjwvZmlndXJlPlxyXG48ZGl2IGNsYXNzPVwiY2wtcGctYWJvdXQtZGl2XCI+XHJcbjxoMT5Db3Vyc2VMaWIgUGxheWdyb3VuZDwvaDE+XHJcbjxwPlZlcnNpb246ICR7cGFja2FnZWpzb24udmVyc2lvbn08L3A+XHJcbjxwPldyaXR0ZW4gYnk6IENoYXJsZXMgQi4gT3dlbjwvcD48L2Rpdj5gO1xyXG5cclxuXHRcdGNvbnN0IGRpYWxvZyA9IG5ldyBEaWFsb2coe1xyXG5cdFx0XHR0aXRsZTogJ0Fib3V0IHRoZSBQbGF5Z3JvdW5kJyxcclxuXHRcdFx0Y29udGVudDogY29udGVudCxcclxuXHRcdFx0J2FkZENsYXNzJzogJ2NsLXBnLWFib3V0J1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxufVxyXG5cclxuQWJvdXRBY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBY3Rpb24ucHJvdG90eXBlKTtcclxuQWJvdXRBY3Rpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWJvdXRBY3Rpb247XHJcblxyXG5BYm91dEFjdGlvbi50YWcgPSAnYWJvdXQnOyIsIi8qKlxyXG4gKiBCYXNlIG9iamVjdCBmb3IgYW4gYWN0aW9uLlxyXG4gKiBAcGFyYW0gc2l0ZSBTaXRlIG9iamVjdFxyXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHBhc3NlZCB0byB0aGlzIGFjdGlvblxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBBY3Rpb24gPSBmdW5jdGlvbihzaXRlLCBvcHRpb25zKSB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBhbGwgc291cmNlcyBmb3IgdGhpcyBhY3Rpb24uXHJcblx0ICpcclxuXHQgKiBCYXNlZCBvbiB0aGUgb3B0aW9uICdzb3VyY2VzJywgd2hpY2ggYXJlIHRhYiB0YWdzLlxyXG5cdCAqIEByZXR1cm4gb2JqZWN0IHdpdGggdGFiIG5hbWVzIGFuZCBzb3VyY2VzLlxyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0U291cmNlcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gR2V0IHRoZSByZXF1aXNpdGUgdGFiIGNvbnRlbnRzXHJcblx0XHRjb25zdCBzb3VyY2VzID0ge307XHJcblxyXG5cdFx0aWYob3B0aW9ucy5zb3VyY2VzID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5zb3VyY2VzID09PSBudWxsKSB7XHJcblx0XHRcdHJldHVybiBzb3VyY2VzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihjb25zdCBzb3VyY2Ugb2Ygb3B0aW9ucy5zb3VyY2VzKSB7XHJcblx0XHRcdGNvbnN0IHRhYiA9IHRoaXMubWFpbi5nZXRUYWIoc291cmNlKTtcclxuXHRcdFx0aWYodGFiICE9PSBudWxsKSB7XHJcblx0XHRcdFx0c291cmNlc1tzb3VyY2VdID0ge25hbWU6IHRhYi5uYW1lLCBkYXRhOiB0YWIuZ2V0KCl9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHNvdXJjZXM7XHJcblx0fVxyXG5cclxuXHJcbn1cclxuXHJcbkFjdGlvbi5wcm90b3R5cGUuZG8gPSBmdW5jdGlvbihtYWluKSB7XHJcblx0dGhpcy5tYWluID0gbWFpbjtcclxufSIsImltcG9ydCB7U2F2ZUFjdGlvbn0gZnJvbSAnLi9TYXZlQWN0aW9uJztcclxuaW1wb3J0IHtBYm91dEFjdGlvbn0gZnJvbSAnLi9BYm91dEFjdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgQWxsQWN0aW9ucyA9IGZ1bmN0aW9uKCkge31cclxuXHJcbkFsbEFjdGlvbnMuYWRkQWxsID0gZnVuY3Rpb24oUGxheWdyb3VuZCkge1xyXG5cdFBsYXlncm91bmQuYWRkQWN0aW9uKFNhdmVBY3Rpb24pO1xyXG5cdFBsYXlncm91bmQuYWRkQWN0aW9uKEFib3V0QWN0aW9uKTtcclxufSIsImltcG9ydCB7QWN0aW9ufSBmcm9tICcuL0FjdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgU2F2ZUFjdGlvbiA9IGZ1bmN0aW9uKHNpdGUsIG9wdGlvbnMpIHtcclxuXHRBY3Rpb24uY2FsbCh0aGlzLCBzaXRlLCBvcHRpb25zKTtcclxuXHJcblx0dGhpcy5kbyA9IGZ1bmN0aW9uKG1haW4pIHtcclxuXHRcdEFjdGlvbi5wcm90b3R5cGUuZG8uY2FsbCh0aGlzLCBtYWluKTtcclxuXHJcblx0XHQvLyBHZXQgdGhlIHJlcXVpc2l0ZSB0YWIgY29udGVudHNcclxuXHRcdGNvbnN0IHNvdXJjZXMgPSB0aGlzLmdldFNvdXJjZXMoKTtcclxuXHJcblx0XHRjb25zdCBwYXJhbXMgPSB7XHJcblx0XHRcdGFwcFRhZzogb3B0aW9ucy5hcHBUYWcsXHJcblx0XHRcdG5hbWU6IG9wdGlvbnMubmFtZSxcclxuXHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkoc291cmNlcyksXHJcblx0XHRcdHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRzaXRlLmFwaS5wb3N0KCcvYXBpL2ZpbGVzeXN0ZW0vc2F2ZScsIHBhcmFtcylcclxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cdFx0XHRcdGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0XHRcdFx0c2l0ZS50b2FzdCh0aGlzLCAnU3VjY2Vzc2Z1bGx5IHNhdmVkIHRvIHNlcnZlcicpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuU2F2ZUFjdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFjdGlvbi5wcm90b3R5cGUpO1xyXG5TYXZlQWN0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNhdmVBY3Rpb247XHJcblxyXG5TYXZlQWN0aW9uLnRhZyA9ICdzYXZlJzsiLCJcclxuXHJcbi8qKlxyXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbnMgZm9yIHRoZSBET00uXHJcbiAqIFRvb2xzIHRoYXQgYXZvaWQgaGF2aW5nIHRvIGhhdmUgalF1ZXJ5IGluc3RhbGxlZC5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVG9vbHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJcyBhbiBlbGVtZW50IHZpc2libGU/XHJcbiAqIEJvcnJvd2VkIGZyb20galF1ZXJ5IVxyXG4gKiBAcGFyYW0gZWxlbVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcblRvb2xzLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xyXG4gICAgcmV0dXJuICEhKCBlbGVtLm9mZnNldFdpZHRoIHx8IGVsZW0ub2Zmc2V0SGVpZ2h0IHx8IGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGQgYSBjbGFzcyB0byBhbiBlbGVtZW50XHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gYWRkIHRvXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgQ2xhc3MgdG8gYWRkXHJcbiAqL1xyXG5Ub29scy5hZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcclxufVxyXG5cclxuVG9vbHMuYWRkQ2xhc3NlcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzZXMpIHtcclxuICAgIGlmKGNsYXNzZXMgPT09IHVuZGVmaW5lZCB8fCBjbGFzc2VzID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKChjbHMpID0+IHtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhlbGVtZW50LCBjbHMpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblRvb2xzLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgcmVnRXggPSBuZXcgUmVnRXhwKCdcXFxcYicgKyBjbGFzc05hbWUgKyAnXFxcXGInLCAnZycpO1xyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlZ0V4LCBcIlwiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIERJViB3aXRoIGEgcHJvdmlkZWQgY2xhc3MgbmFtZS5cclxuICogQHBhcmFtIGNsYXNzTmFtZSBDbGFzcyB0byBhZGQgdG8gdGhlIGRpdlxyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50IHRvIHBsYWNlIGluIHRoZSBkaXYuIEhUTUwgb3IgRWxlbWVudFxyXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gQ3JlYXRlZCBET00gRWxlbWVudFxyXG4gKi9cclxuVG9vbHMuY3JlYXRlQ2xhc3NlZERpdiA9IGZ1bmN0aW9uKGNsYXNzTmFtZSwgY29udGVudCkge1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgVG9vbHMuYWRkQ2xhc3MoZGl2LCBjbGFzc05hbWUpO1xyXG4gICAgaWYoY29udGVudCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0ICAgIFRvb2xzLmFkZENvbnRlbnQoZGl2LCBjb250ZW50KTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgY29udGVudCB0byBhbiBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGFkZCB0b1xyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50LiBDYW4gYmUgSFRNTCBvciBhbiBFbGVtZW50LlxyXG4gKi9cclxuVG9vbHMuYWRkQ29udGVudCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNvbnRlbnQpIHtcclxuICAgIGlmKFRvb2xzLmlzU3RyaW5nKGNvbnRlbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gY29udGVudDtcclxuICAgIH0gZWxzZSBpZihUb29scy5pc0VsZW1lbnQoY29udGVudCkpIHtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogSXMgdGhlIHBhc3NlZCB2YWx1ZSBhIHN0cmluZz9cclxuICogQHBhcmFtIHZhbFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcblRvb2xzLmlzU3RyaW5nID0gZnVuY3Rpb24odmFsKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgKCghIXZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JykgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIElzIHRoZSBwYXNzZWQgdmFsdWUgYW4gSFRNTEVsZW1lbnQ/XHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5Ub29scy5pc0VsZW1lbnQgPSBmdW5jdGlvbih2YWwpIHtcclxuICAgIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgJiYgdmFsLm5vZGVWYWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgKHNwZWNpZmljYWxseSBpdHMgYm9yZGVyIGJveCwgd2hpY2ggZXhjbHVkZXMgbWFyZ2lucykgcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50LlxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKi9cclxuVG9vbHMub2Zmc2V0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdHJldHVybiB7XHJcblx0ICAgIGxlZnQ6IHJlY3QubGVmdCArIGVsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCxcclxuICAgICAgICB0b3A6IHJlY3QudG9wICsgZWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXRcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmQgYSBjaGlsZCBieSB0YWdOYW1lXHJcbiAqIEBwYXJhbSBlbGVtZW50XHJcbiAqIEBwYXJhbSB0YWdOYW1lXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuVG9vbHMuY2hpbGQgPSBmdW5jdGlvbihlbGVtZW50LCB0YWdOYW1lKSB7XHJcblx0Zm9yKGNvbnN0IG5vZGUgb2YgZWxlbWVudC5jaGlsZE5vZGVzKSB7XHJcblx0ICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gdGFnTmFtZSkge1xyXG5cdCAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHtUb29sc30gZnJvbSAnLi4vRE9NL1Rvb2xzJztcclxuXHJcbi8qKlxyXG4gKiBUb2FzdCBub3RpZmljYXRpb24gc3lzdGVtXHJcbiAqIGpRdWVyeS1mcmVlXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRvYXN0ID0gZnVuY3Rpb24obWFpbikge1xyXG5cdC8qKiBEZWZhdWx0IHRvYXN0IGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyAqL1xyXG5cdHRoaXMuZGVmYXVsdER1cmF0aW9uID0gMjAwMDtcclxuXHJcblx0LyoqIEludGVyLXRvYXN0IGRlbGF5IHRpbWUgaW4gbWlsbGlzZWNvbmRzICovXHJcblx0dGhpcy5pbnRlclRvYXN0RGVsYXkgPSA1MDA7XHJcblxyXG4gICAgbGV0IG1lc3NhZ2VzID0gW107ICAvLyBQZW5kaW5nIG1lc3NhZ2VzXHJcbiAgICBsZXQgYWN0aXZlID0gZmFsc2U7IC8vIElzIHRoZXJlIGFuIGFjdGl2ZSBtZXNzYWdlIGRpc3BsYXlpbmc/XHJcblxyXG5cdGxldCBlbGVtZW50ID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIHRoZSB0b2FzdCBkaXZcclxuXHQgKiBAcGFyYW0gZGl2IERpdiB0byBwdXQgdGhlIHRvYXN0IGludG9cclxuXHQgKi9cclxuICAgIHRoaXMuY3JlYXRlID0gKGRpdikgPT4ge1xyXG5cdFx0ZWxlbWVudCA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ3RvYXN0Jyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG5cdFx0ZWxlbWVudC5pbm5lckhUTUwgPSAndGVzdGluZyc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcclxuICAgIFx0aWYobWVzc2FnZXMubGVuZ3RoID4gMCAmJiAhYWN0aXZlKSB7XHJcblx0XHQgICAgLy8gU2V0IHRoZSBtZXNzYWdlXHJcblx0XHQgICAgbGV0IG1lc3NhZ2UgPSBtZXNzYWdlc1swXTtcclxuICAgICAgICAgICAgbWVzc2FnZXMuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IG1lc3NhZ2UubXNnO1xyXG5cclxuICAgICAgICAgICAgLy8gU2hvdyBpdFxyXG5cdFx0ICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9hc3QtYWN0aXZlJyk7XHJcblx0XHQgICAgYWN0aXZlID0gdHJ1ZTtcclxuXHJcblx0XHQgICAgLy8gRGVsYXkgd2hpbGUgYWN0aXZlXHJcblx0XHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHQgICAgXHQvLyBIaWRlIGl0XHJcblx0XHRcdCAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RvYXN0LWFjdGl2ZScpO1xyXG5cclxuXHRcdFx0ICAgIC8vIERlbGF5IGJldHdlZW4gdG9hc3RzXHJcblx0XHRcdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0ICAgIFx0YWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdCAgICBcdHNob3coKTtcclxuXHRcdFx0ICAgIH0sIHRoaXMuaW50ZXJUb2FzdERlbGF5KVxyXG5cdFx0ICAgIH0sIG1lc3NhZ2UudGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBEaXNwbGF5IGEgdG9hc3QgbWVzc2FnZVxyXG5cdCAqIEBwYXJhbSBtc2cgTWVzc2FnZSB0byBkaXNwbGF5XHJcblx0ICogQHBhcmFtIHRpbWUgVGltZSB0byBkaXNwbGF5IGluIG1pbGxpc2Vjb25kcywgb21pdCBmb3IgZGVmYXVsdFxyXG5cdCAqL1xyXG5cdHRoaXMubWVzc2FnZSA9IGZ1bmN0aW9uKG1zZywgdGltZSkge1xyXG4gICAgICAgIGlmKHRpbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aW1lID0gdGhpcy5kZWZhdWx0RHVyYXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXNzYWdlcy5wdXNoKHttc2c6IG1zZywgdGltZTogdGltZX0pO1xyXG4gICAgICAgIHNob3coKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogRGlzcGxheSBhbnkgSlNPTiBlcnJvcnMgd2UgaGF2ZSByZWNlaXZlZC5cclxuXHQgKiBAcGFyYW0ganNvbkFwaSBKc29uQVBJIG9iamVjdFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGFueSBlcnJvcnMgZXhpc3RlZC5cclxuXHQgKi9cclxuXHR0aGlzLmpzb25FcnJvcnMgPSBmdW5jdGlvbihqc29uQXBpKSB7XHJcbiAgICAgICAgaWYoanNvbkFwaS5lcnJvcnMoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBqc29uQXBpLmVycm9ycygpLmZvckVhY2goKGVycm9yKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlKCdTZXJ2ZXIgRXJyb3I6ICcgKyBlcnJvci50aXRsZSwgNTAwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBSZXNpemVyIGZyb20gJ3Jlc2l6ZXItY2wnO1xyXG5cclxuaW1wb3J0IHtNZW51fSBmcm9tICcuL01lbnUnO1xyXG5pbXBvcnQge1RvYXN0fSBmcm9tICcuL0dyYXBoaWNzL1RvYXN0JztcclxuaW1wb3J0IHtEcmFnQW5kRHJvcH0gZnJvbSAnLi9VSS9EcmFnQW5kRHJvcCc7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gJy4vRE9NL1Rvb2xzJztcclxuaW1wb3J0IHtQYW5lfSBmcm9tIFwiLi9QYW5lXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIEFjdHVhbCBpbnN0YW5jZSBvZiB0aGUgUGxheWdyb3VuZCBmb3IgYSBzaW5nbGUgZWxlbWVudC5cclxuICogQHBhcmFtIHBsYXlncm91bmQgVGhlIG1haW4gUGxheWdyb3VuZCBvYmplY3RcclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB3ZSBhcmUgbG9hZGluZyBpbnRvXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1haW4gPSBmdW5jdGlvbihwbGF5Z3JvdW5kLCBlbGVtZW50KSB7XHJcbiAgICB0aGlzLnBsYXlncm91bmQgPSBwbGF5Z3JvdW5kO1xyXG4gICAgdGhpcy5zaXRlID0gcGxheWdyb3VuZC5zaXRlO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMub3B0aW9ucyA9IHBsYXlncm91bmQub3B0aW9ucztcclxuXHJcbiAgICAvLy8gZGl2Lm1haW5cclxuICAgIHRoaXMuZGl2ID0gbnVsbDtcclxuXHJcbiAgICBsZXQgb3B0aW9ucyA9IHBsYXlncm91bmQub3B0aW9ucztcclxuXHJcbiAgICAvLy8gUmVmZXJlbmNlcyB0byBvdGhlciBHVUkgY29tcG9uZW50c1xyXG4gICAgbGV0IG1lbnU9bnVsbCwgdGFicz1udWxsO1xyXG5cclxuICAgIC8vLyBkaXYub3ZlcmxheVxyXG4gICAgbGV0IGRpdk92ZXJsYXkgPSBudWxsLCBkaXZXb3JrPW51bGw7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgXHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQnKTtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuXHQgICAgaWYob3B0aW9ucy5oZWlnaHQgIT09IG51bGwpIHtcclxuXHRcdCAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG5cdCAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaChvcHRpb25zLmRpc3BsYXkpIHtcclxuICAgICAgICAgICAgY2FzZSAnZnVsbCc6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtZnVsbCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG5cdCAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC13aW5kb3cnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy5kaXNwbGF5ID09PSAnd2luZG93Jykge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBBZGQgcmVzaXplciB0byB0aGUgd2luZG93IGlmIGluIHdpbmRvdyBtb2RlXHJcbiAgICAgICAgICAgIC8vIGFuZCBpdCBoYXMgbm90IGFscmVhZHkgYmVlbiBhZGRlZFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZighZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZXNpemVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgUmVzaXplcihlbGVtZW50LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiAnMTBweCBzb2xpZCAjMTg0NTNCJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ0FuZERyb3AgPSBuZXcgRHJhZ0FuZERyb3AodGhpcyk7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgdGhlIHdpbmRvdyBjb21wb25lbnRzXHJcbiAgICAgICAgLy9cclxuICAgICAgICBpZihvcHRpb25zLmRpc3BsYXkgIT09ICdpbmxpbmUnICYmIG9wdGlvbnMuZGlzcGxheSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEFsbCB3aW5kb3ctYmFzZWQgdmVyc2lvbnMgb3RoZXIgdGhhbiBpbmxpbmUgZ2V0IHRoZVxyXG4gICAgICAgICAgICAvLyBmdWxsIHVzZXIgaW50ZXJmYWNlXHJcbiAgICAgICAgICAgIC8vXHJcblxyXG4gICAgICAgICAgICAvLyA8ZGl2IGNsYXNzPVwibWFpblwiPjwvZGl2PlxyXG4gICAgICAgICAgICB0aGlzLmRpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXBnLW1haW4nKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZGl2KTtcclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgbWVudVxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBtZW51ID0gbmV3IE1lbnUodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMubWVudSA9IG1lbnU7XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBXb3JraW5nIGFyZWFcclxuICAgICAgICAgICAgLy8gPGRpdiBjbGFzcz1cIndvcmtcIj48L2Rpdj5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgZGl2V29yayA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ3dvcmsnKTtcclxuICAgICAgICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQoZGl2V29yayk7XHJcblxyXG5cclxuXHRcdFx0Ly9cclxuXHQgICAgICAgIC8vIEFuZCB0aGUgcm9vdCBwYW5lXHJcblx0ICAgICAgICAvL1xyXG5cdCAgICAgICAgdGhpcy5yb290UGFuZSA9IG5ldyBQYW5lKHRoaXMsIGRpdldvcmssIG51bGwsIG51bGwpO1xyXG5cdCAgICAgICAgdGhpcy5yb290UGFuZS5sb2FkKG9wdGlvbnMucGFuZSk7XHJcblxyXG5cdCAgICAgICAgLy9cclxuXHQgICAgICAgIC8vIEFuZCB0aGUgb3ZlcmxheVxyXG5cdCAgICAgICAgLy8gPGRpdiBjbGFzcz1cImNpcnNpbS1vdmVybGF5XCI+PC9kaXY+XHJcblx0ICAgICAgICAvL1xyXG5cdCAgICAgICAgZGl2T3ZlcmxheSA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXBnLW92ZXJsYXknKTtcclxuXHQgICAgICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKGRpdk92ZXJsYXkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b2FzdCA9IG5ldyBUb2FzdCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy50b2FzdC5jcmVhdGUodGhpcy5kaXYpO1xyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQW55IGRhdGEgdG8gbG9hZD9cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5sb2FkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9hZCA9IG9wdGlvbnMubG9hZDtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBsb2FkID09PSAnc3RyaW5nJyB8fCBsb2FkIGluc3RhbmNlb2YgU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZCA9IEpTT04ucGFyc2UobG9hZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IHRhZyBpbiBsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFiID0gdGhpcy5nZXRUYWIodGFnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0YWIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiLnNldChsb2FkW3RhZ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRUYWIgPSBmdW5jdGlvbih0YWcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb290UGFuZS5nZXRUYWIodGFnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbmV2ZXIgYSBuZXcgdGFiIGlzIHNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHRoaXMubmV3VGFiID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgb3IgY2xlYXIgaW50ZXJmYWNlIG1vZGFsIHN0YXRlLlxyXG4gICAgICogQHBhcmFtIG1vZGFsIFRydWUgc2V0cyBpbnRlcmZhY2UgdG8gbW9kYWwgc3RhdGUuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICB0aGlzLm1vZGFsID0gZnVuY3Rpb24obW9kYWwpIHtcclxuICAgICAgICBpZihtb2RhbCkge1xyXG4gICAgICAgICAgICBkaXZPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpdk92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG59XHJcbiIsImltcG9ydCB7VG9vbHN9IGZyb20gJy4vRE9NL1Rvb2xzJztcclxuXHJcbi8vIGltcG9ydCB7RmlsZU1lbnV9IGZyb20gJy4vTWVudXMvRmlsZU1lbnUnO1xyXG4vLyBpbXBvcnQge0VkaXRNZW51fSBmcm9tICcuL01lbnVzL0VkaXRNZW51JztcclxuLy8gaW1wb3J0IHtUYWJzTWVudX0gZnJvbSAnLi9NZW51cy9UYWJzTWVudSc7XHJcbi8vIGltcG9ydCB7SGVscE1lbnV9IGZyb20gJy4vTWVudXMvSGVscE1lbnUnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBwcm9ncmFtIG1lbnUgYmFyXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSBmdW5jdGlvbihtYWluKSB7XHJcblx0Y29uc3Qgb3B0aW9ucyA9IG1haW4ub3B0aW9ucztcclxuXHJcblxyXG4gICAgLy9cclxuICAgIC8vIENyZWF0ZSB0aGUgbWVudSBjb21wb25lbnRzXHJcbiAgICAvL1xyXG4gICAgLy8gdmFyIGZpbGVNZW51ID0gbmV3IEZpbGVNZW51KHRoaXMsIG1haW4pO1xyXG4gICAgLy8gdmFyIGVkaXRNZW51ID0gbmV3IEVkaXRNZW51KHRoaXMsIG1haW4pO1xyXG4gICAgLy8gdmFyIHRhYnNNZW51ID0gbmV3IFRhYnNNZW51KHRoaXMsIG1haW4pO1xyXG4gICAgLy8gdmFyIGhlbHBNZW51ID0gbmV3IEhlbHBNZW51KHRoaXMsIG1haW4pO1xyXG5cclxuICAgIC8vLyBUaGUgbmF2IGVsZW1lbnRcclxuICAgIHRoaXMubmF2ID0gbnVsbDtcclxuICAgIHRoaXMudWwgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyA8bmF2IGNsYXNzPVwibWVudWJhclwiPjx1bD48L3VsPjwvbmF2PlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5uYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyh0aGlzLm5hdiwgJ2NsLXBnLW1lbnViYXInKTtcclxuICAgICAgICBtYWluLmRpdi5hcHBlbmRDaGlsZCh0aGlzLm5hdik7XHJcblxyXG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICB0aGlzLm5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICAgICAgdGhpcy51bCA9IHVsO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51cyA9IG9wdGlvbnMubWVudXM7XHJcbiAgICAgICAgbWVudXMucHVzaCh7XHJcblx0ICAgICAgICBuYW1lOiAnSGVscCcsXHJcblx0ICAgICAgICBtZW51czogW1xyXG5cdFx0ICAgICAgICB7bmFtZTogJ0Fib3V0JywgYWN0aW9uOiB7dGFnOiAnYWJvdXQnfX1cclxuXHQgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yKGNvbnN0IG1lbnUgb2YgbWVudXMpIHtcclxuICAgICAgICBcdGNvbnN0IHRvcExJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBcdHVsLmFwcGVuZENoaWxkKHRvcExJKTtcclxuXHJcbiAgICAgICAgXHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIFx0dG9wTEkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgXHRhLmlubmVyVGV4dCA9IG1lbnUubmFtZTtcclxuXHJcbiAgICAgICAgXHRpZihtZW51LmFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgXHRcdC8vIFRvcCBsZXZlbCBvbmx5IG1lbnVcclxuICAgICAgICBcdFx0Y29uc3QgYWN0aW9uID0gbWFpbi5wbGF5Z3JvdW5kLmdldEFjdGlvbihtZW51LmFjdGlvbik7XHJcblx0XHQgICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIFthLCB0b3BMSV0pIHtcclxuXHRcdCAgICAgICAgXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0ICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdCAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0ICAgICAgICBhY3Rpb24uZG8obWFpbik7XHJcblx0XHRcdCAgICAgICAgfSk7XHJcblx0XHQgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBpZihtZW51Lm1lbnVzICE9PSB1bmRlZmluZWQpIHtcclxuXHQgICAgICAgIFx0Ly8gUHVsbC1kb3duIG1lbnVcclxuXHQgICAgICAgIFx0Y29uc3Qgc3ViVUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdCAgICAgICAgXHR0b3BMSS5hcHBlbmRDaGlsZChzdWJVTCk7XHJcblxyXG5cdCAgICAgICAgXHRmb3IoY29uc3QgZWxlbWVudCBvZiBbYSwgdG9wTEldKSB7XHJcblx0XHRcdCAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0XHRcdCAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHQgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdFx0XHQgICAgICAgIGlmKGdldENvbXB1dGVkU3R5bGUoc3ViVUwpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ2hpZGRlbicpIHtcclxuXHRcdFx0XHRcdCAgICAgICAgb3Blbih0b3BMSSk7XHJcblx0XHRcdFx0ICAgICAgICB9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ICAgICAgICAvLyBJZiBhbHJlYWR5IG9wZW4sIGNsb3NlIGFsbFxyXG5cdFx0XHRcdFx0ICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XHJcblx0XHRcdFx0ICAgICAgICB9XHJcblxyXG5cdFx0XHQgICAgICAgIH0pO1xyXG5cdFx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgXHRmb3IoY29uc3Qgc3ViTWVudSBvZiBtZW51Lm1lbnVzKSB7XHJcblx0XHRcdCAgICAgICAgY29uc3Qgc3ViTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdFx0XHQgICAgICAgIHN1YlVMLmFwcGVuZENoaWxkKHN1YkxJKTtcclxuXHJcblx0XHRcdCAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHRcdFx0ICAgICAgICBzdWJMSS5hcHBlbmRDaGlsZChhKTtcclxuXHRcdFx0ICAgICAgICBhLmlubmVyVGV4dCA9IHN1Yk1lbnUubmFtZTtcclxuXHJcblx0XHRcdCAgICAgICAgaWYoc3ViTWVudS5hY3Rpb24gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdCAgICAgICAgLy8gVG9wIGxldmVsIG9ubHkgbWVudVxyXG5cdFx0XHRcdCAgICAgICAgY29uc3QgYWN0aW9uID0gbWFpbi5wbGF5Z3JvdW5kLmdldEFjdGlvbihzdWJNZW51LmFjdGlvbik7XHJcblx0XHRcdFx0ICAgICAgICBpZihhY3Rpb24gIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdCAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgW2EsIHRvcExJXSkge1xyXG5cdFx0XHRcdFx0XHQgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIHRoaXMuY2xvc2VBbGwoKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGFjdGlvbi5kbyhtYWluKTtcclxuXHRcdFx0XHRcdFx0ICAgICAgICB9KTtcclxuXHRcdFx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHRcdCAgICAgICAgfVxyXG5cclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHQgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIEFkZCB0aGUgbWVudSBjb21wb25lbnQncyBIVE1MXHJcbiAgICAgICAgLy9cclxuXHQgICAgLy8gbGV0IGh0bWwgPSAnJztcclxuXHJcblx0ICAgIC8vIGh0bWwgKz0gZmlsZU1lbnUuaHRtbCgpO1xyXG4gICAgICAgIC8vIGh0bWwgKz0gZWRpdE1lbnUuaHRtbCgpO1xyXG4gICAgICAgIC8vIGh0bWwgKz0gdGFic01lbnUuaHRtbCgpO1xyXG4gICAgICAgIC8vIGh0bWwgKz0gaGVscE1lbnUuaHRtbCgpO1xyXG5cclxuICAgICAgICAvLyB1bC5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgICAgICAvL1xyXG5cdCAgICAvLyBNZW51IG9wdGlvbiBmb3IgdGVzdGluZyB0aGUgVG9hc3QgZXJyb3IgcmVwb3J0aW5nIG1lY2hhbmlzbVxyXG5cdCAgICAvL1xyXG5cclxuXHQgICAgLy8gaHRtbCArPSBgPGxpPjxhIGNsYXNzPVwidG9hc3QtdGVzdFwiPlRvYXN0ITwvYT48L2xpPmA7XHJcblx0ICAgIC8vIHVsLmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHQvL1xyXG5cdCAgICAvLyB0aGlzLnRvYXN0cyA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5jbGljaygnLnRvYXN0LXRlc3QnLCAoZXZlbnQpPT4ge1xyXG4gICAgICAgIC8vIFx0dGhpcy50b2FzdHMrKztcclxuICAgICAgICAvLyBcdG1haW4udG9hc3QubWVzc2FnZSgnVG9hc3QgbWVzc2FnZSAnICsgdGhpcy50b2FzdHMpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIEluc3RhbGwgY2xpY2sgaGFuZGxlcnMgZm9yIGFsbCB0b3AtbGV2ZWwgbWVudXNcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGZvcihjb25zdCBub2RlIG9mIHVsLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAvLyAgICAgaWYobm9kZS50YWdOYW1lID09PSAnTEknKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdC8vXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gRmluZCB0aGUgPHVsPiBpbiB0aGlzIG1lbnVcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgdWxTdWIgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZih1bFN1YiAhPT0gbnVsbCkge1xyXG5cdCAgICAvLyAgICAgICAgICAgICAgICAgaWYoZ2V0Q29tcHV0ZWRTdHlsZSh1bFN1YikuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAnaGlkZGVuJykge1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICBvcGVuKG5vZGUpO1xyXG5cdCAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBJZiBhbHJlYWR5IG9wZW4sIGNsb3NlIGFsbFxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XHJcblx0ICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIEFjdGl2YXRlIGFsbCBvZiB0aGUgbWVudXNcclxuICAgICAgICAvLyBmaWxlTWVudS5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIC8vIGVkaXRNZW51LmFjdGl2YXRlKCk7XHJcbiAgICAgICAgLy8gdGFic01lbnUuYWN0aXZhdGUoKTtcclxuICAgICAgICAvLyBoZWxwTWVudS5hY3RpdmF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIExpc3RlbiB0byBrZXkgZG93biBldmVudHMgc28gd2UgY2FuIGNsb3NlIHRoZSBtZW51XHJcbiAgICAgKiBpZiB3ZSBjbGljayBvdXRzaWRlIG9mIHRoZSBtZW51IHdoaWxlIGl0IGlzIG9wZW4uXHJcblx0ICogQHBhcmFtIGV2ZW50XHJcblx0ICovXHJcblx0Y29uc3QgY2xvc2VMaXN0ZW5lciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIFNlZSBpZiB3ZSBjbGlja2VkIG9uIHNvbWUgY2hpbGQgb2YgbmF2Li4uXHJcbiAgICAgICAgbGV0IG5vZGUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICBmb3IoIDsgbm9kZSAhPT0gbnVsbDsgbm9kZSA9IG5vZGUucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBpZihub2RlID09PSB0aGlzLm5hdikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHQgICAgdGhpcy5jbG9zZUFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9wZW4gYSBtZW51XHJcbiAgICBjb25zdCBvcGVuID0gKGxpKSA9PiB7XHJcbiAgICAgICAgLy8gSGlkZSBhbnkgb3RoZXIgbWVudXNcclxuICAgICAgICBmb3IoY29uc3Qgbm9kZSBvZiB0aGlzLnVsLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgaWYobm9kZS50YWdOYW1lID09PSAnTEknKSB7XHJcblx0ICAgICAgICAgICAgY29uc3QgdWwgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcclxuICAgICAgICAgICAgICAgIGlmKHVsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBUb29scy5yZW1vdmVDbGFzcyh1bCwgJ2NsLXBnLW1lbnUtb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHQgICAgLy8gQW5kIG9wZW4gdGhpcyBtZW51XHJcblx0ICAgIGNvbnN0IHVsID0gVG9vbHMuY2hpbGQobGksICdVTCcpO1xyXG5cdCAgICBpZih1bCAhPT0gbnVsbCkge1xyXG5cdCAgICBcdHVsLmNsYXNzTGlzdC5hZGQoJ2NsLXBnLW1lbnUtb3BlbicpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDbG9zZSBhbGwgbWVudXMgKi9cclxuICAgIHRoaXMuY2xvc2VBbGwgPSAoKSA9PiB7XHJcblx0ICAgIGZvcihjb25zdCBub2RlIG9mIHRoaXMudWwuY2hpbGROb2Rlcykge1xyXG5cdFx0ICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gJ0xJJykge1xyXG5cdFx0XHQgICAgY29uc3QgdWwgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcclxuXHRcdFx0ICAgIGlmKHVsICE9PSBudWxsKSB7XHJcblx0XHRcdFx0ICAgIFRvb2xzLnJlbW92ZUNsYXNzKHVsLCAnY2wtcGctbWVudS1vcGVuJyk7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogRW5hYmxlIG9yIGRpc2FibGUgYSBtZW51IG9wdGlvbiBieSBzZWxlY3RvclxyXG5cdCAqIEBwYXJhbSBzZWwgU2VsZWN0b3IgZm9yIHRoZSBtZW51IG9wdGlvbiAobGlrZSAnLnRhYnMtYWRkJylcclxuXHQgKiBAcGFyYW0gZW5hYmxlIFRydWUgdG8gZW5hYmxlXHJcblx0ICovXHJcblx0dGhpcy5lbmFibGUgPSAoc2VsLCBlbmFibGUpID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy51bC5xdWVyeVNlbGVjdG9yKHNlbCk7XHJcbiAgICAgICAgaWYoZWxlbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihlbmFibGUpIHtcclxuICAgICAgICAgICAgVG9vbHMucmVtb3ZlQ2xhc3MoZWxlbWVudC5wYXJlbnROb2RlLCBcIm1lbnUtZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuYWRkQ2xhc3MoZWxlbWVudC5wYXJlbnROb2RlLCBcIm1lbnUtZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblx0LyoqXHJcbiAgICAgKiBGaW5kIGEgbWVudSBvcHRpb24gYnkgc2VsZWN0b3JcclxuXHQgKiBAcGFyYW0gc2VsXHJcblx0ICogQHJldHVybnMge0VsZW1lbnR9XHJcblx0ICovXHJcblx0dGhpcy5maW5kID0gKHNlbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVsLnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBJbnN0YWxsIGEgbWVudSBvcHRpb24gY2xpY2sgaGFuZGVyXHJcblx0ICogQHBhcmFtIHNlbCBTZWxlY3RvciBmb3IgdGhlIG1lbnUgb3B0aW9uXHJcblx0ICogQHBhcmFtIGNsb3N1cmUgVGhlIGNsb3N1cmUgdG8gY2FsbCAocGFzc2VzICdldmVudCcpXHJcblx0ICovXHJcblx0dGhpcy5jbGljayA9IChzZWwsIGNsb3N1cmUpID0+IHtcclxuXHQgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZmluZChzZWwpO1xyXG5cdCAgICBpZihlbGVtZW50ICE9PSBudWxsKSB7XHJcblx0ICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0ICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHQgICAgICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XHJcblx0ICAgICAgICAgICAgY2xvc3VyZShldmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBQbGF5Z3JvdW5kIG9wdGlvbnMuXHJcbiAqIEBwYXJhbSBvcHRpb25zIFVzZXIgcHJvdmlkZWQgb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHt9O1xyXG5cclxuICAgIC8vLyBEaXNwbGF5IG9wdGlvbnNcclxuICAgIC8vLyB3aW5kb3cgLSBEaXNwbGF5cyBhcyBhIHN0YW5kYXJkIGRpdiAoZGVmYXVsdClcclxuICAgIHRoaXMuZGlzcGxheSA9ICd3aW5kb3cnO1xyXG5cclxuICAgIC8vLyBPcHRpb25hbCBoZWlnaHQgc2V0dGluZ1xyXG4gICAgdGhpcy5oZWlnaHQgPSBudWxsO1xyXG5cclxuICAgIC8vLyBUaGUgcGxheWdyb3VuZCByb290IHBhbmVcclxuICAgIHRoaXMucGFuZSA9IHt9O1xyXG5cclxuICAgIC8vLyBUaGUgdG9wLWxldmVsIG1lbnUgb3B0aW9uc1xyXG4gICAgdGhpcy5tZW51cyA9IFt7bmFtZTogJ0Fib3V0J31dO1xyXG5cclxuICAgIC8vLyBDb250ZW50IHRvIGluaXRpYWxseSBsb2FkIGludG8gdGhlIHRhYnNcclxuICAgIHRoaXMubG9hZCA9IG51bGw7XHJcblxyXG5cclxuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb24gXCIgKyBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIEFQSSBvcGVyYXRpb25zIGZvciBhIGdpdmVuIGZpbGUgbW9kZS5cclxuICAgICAqIEBwYXJhbSBtb2RlICdzYXZlJywgJ29wZW4nXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXRBUEkgPSBmdW5jdGlvbihtb2RlKSB7XHJcbiAgICAgICAgaWYodGhpcy5hcGkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmFwaSA9PT0gT2JqZWN0KHRoaXMuYXBpKSkge1xyXG4gICAgICAgICAgICBsZXQgb2JqO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5hcGlbbW9kZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gXHJcbiAgICAgICAgICAgICAgICAvLyBNb2RlIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXHJcbiAgICAgICAgICAgICAgICB2YXIgbW9kZU9iaiA9IHRoaXMuYXBpW21vZGVdO1xyXG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai51cmwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1vZGUgaXMgbm90IHN1cHBvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNlbmQgY29udGVudCB0eXBlXHJcbiAgICAgICAgICAgICAgICBvYmogPSB7dXJsOiBtb2RlT2JqLnVybH07XHJcbiAgICAgICAgICAgICAgICBpZihtb2RlT2JqLmNvbnRlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouY29udGVudFR5cGUgPSBtb2RlT2JqLmNvbnRlbnRUeXBlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuYXBpLmNvbnRlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouY29udGVudFR5cGUgPSB0aGlzLmFwaS5jb250ZW50VHlwZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai5leHRyYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0gbW9kZU9iai5leHRyYTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmFwaS5leHRyYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0gdGhpcy5hcGkuZXh0cmE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKG1vZGVPYmoubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLm5hbWUgPSBtb2RlT2JqLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5hcGkubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLm5hbWUgPSB0aGlzLmFwaS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcGkudXJsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvYmogPSB7dXJsOiB0aGlzLmFwaS51cmx9O1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcGkuZXh0cmEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHRoaXMuYXBpLmV4dHJhO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFwaS5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoubmFtZSA9IHRoaXMuYXBpLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt1cmw6IHRoaXMuYXBpfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtUYWJzfSBmcm9tICcuL1RhYnMnO1xyXG5cclxuLyoqXHJcbiAqIEEgUGFuZSBpcyBhbiBhcmVhIG9mIHRoZSBJREUgc2NyZWVuIHRoYXQgZWl0aGVyIGNvbnRhaW5zIGEgdGFiIHNldCBvciB0d28gY2hpbGQgcGFuZXMuXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdGhhdCBpcyB0aGUgaG9zdCBmb3IgdGhlIHBhbmVcclxuICogQHBhcmFtIHBhcmVudCBQYW5lIHBhcmVudCBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUGFuZSA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQsIHBhcmVudCkge1xyXG5cdHRoaXMubWluU3BsaXQgPSAxMDtcclxuXHR0aGlzLm1heFNwbGl0ID0gOTA7XHJcblxyXG5cdGxldCBkaXYgPSBudWxsLCBjaGlsZDEgPSBudWxsLCBjaGlsZDIgPSBudWxsO1xyXG5cdGxldCBob3Jpem9udGFsU3BsaXQgPSBudWxsO1xyXG5cdGxldCB0YWJzID0gbnVsbDtcclxuXHJcblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuXHRcdC8vXHJcblx0XHQvLyBDcmVhdGUgYW5kIGFkZCB0aGUgZGl2XHJcblx0XHQvL1xyXG5cclxuXHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5kaXYgPSBkaXY7XHJcblxyXG5cdFx0aWYocGFyZW50ID09PSBudWxsKSB7XHJcblx0XHRcdGRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLXJvb3QnKTtcclxuXHRcdH1cclxuXHJcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG5cdFx0Ly8gaWYoZG9ub3JUYWJzICE9PSBudWxsKSB7XHJcblx0XHQvLyBcdHRhYnMgPSBkb25vclRhYnM7XHJcblx0XHQvLyBcdHRhYnMubmV3UGFyZW50KHRoaXMpO1xyXG5cdFx0Ly8gfSBlbHNlIHtcclxuXHRcdC8vIFx0dGFicyA9IG5ldyBUYWJzKG1haW4sIGRpdik7XHJcblx0XHQvLyB9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBMb2FkIHRoZSBwYW5lIGZyb20gdGhlIGRhdGFcclxuXHQgKiBAcGFyYW0gZGF0YSBEYXRhIGZyb20gb3B0aW9ucyBmb3IgdGhpcyBwYW5lXHJcblx0ICovXHJcblx0dGhpcy5sb2FkID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0aWYoZGF0YS5jaGlsZDEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHQvLyBUaGlzIGlzIGEgc3BsaXQgcGFuZVxyXG5cdFx0XHR0aGlzLnNwbGl0KGRhdGEuaG9yaXosIGRhdGEuY2hpbGQxLCBkYXRhLmNoaWxkMik7XHJcblx0XHRcdHRoaXMucGVyY2VudGFnZShkYXRhLnBlcmNlbnRhZ2UpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGFicyA9IG5ldyBUYWJzKG1haW4sIGRpdik7XHJcblx0XHRcdHRhYnMubG9hZChkYXRhLnRhYnMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGhpcy5zcGxpdCA9IGZ1bmN0aW9uKGhvcml6b250YWwsIGNoaWxkMURhdGEsIGNoaWxkMkRhdGEpIHtcclxuXHRcdGhvcml6b250YWxTcGxpdCA9IGhvcml6b250YWw7XHJcblxyXG5cdFx0Y2hpbGQxID0gbmV3IFBhbmUobWFpbiwgZGl2LCB0aGlzLCB0YWJzKTtcclxuXHRcdGNoaWxkMiA9IG5ldyBQYW5lKG1haW4sIGRpdiwgdGhpcywgbnVsbCk7XHJcblxyXG5cdFx0dGFicyA9IG51bGw7XHJcblxyXG5cdFx0aWYoaG9yaXpvbnRhbCkge1xyXG5cdFx0XHRjaGlsZDEuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtbGVmdCcpO1xyXG5cdFx0XHRjaGlsZDIuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtcmlnaHQnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRpdi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XHJcblx0XHRcdGNoaWxkMS5kaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC10b3AnKTtcclxuXHRcdFx0Y2hpbGQyLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLWJvdHRvbScpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0YmFyLmNsYXNzTGlzdC5hZGQoJ2NsLWJhcicpO1xyXG5cdFx0Y2hpbGQxLmRpdi5hcHBlbmRDaGlsZChiYXIpO1xyXG5cclxuXHRcdGJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0c3RhcnREcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmUpO1xyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGJhci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhldmVudCk7XHJcblxyXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdFx0c3RhcnREcmFnZ2luZyh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cclxuXHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2hNb3ZlKTtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kKTtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoQ2FuY2VsKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuY2hpbGQxID0gY2hpbGQxO1xyXG5cdFx0dGhpcy5jaGlsZDIgPSBjaGlsZDI7XHJcblxyXG5cdFx0dGhpcy5wZXJjZW50YWdlKDUwKTtcclxuXHJcblx0XHRpZihjaGlsZDFEYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0Y2hpbGQxLmxvYWQoY2hpbGQxRGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoY2hpbGQyRGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGNoaWxkMi5sb2FkKGNoaWxkMkRhdGEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7Y2hpbGQxOiBjaGlsZDEsIGNoaWxkMjogY2hpbGQyfTtcclxuXHR9XHJcblxyXG5cdGxldCBzdGFydFggPSBudWxsLCBzdGFydFkgPSBudWxsO1xyXG5cclxuXHRjb25zdCBzdGFydERyYWdnaW5nID0gKHgsIHkpID0+IHtcclxuXHRcdHN0YXJ0WCA9IHg7XHJcblx0XHRzdGFydFkgPSB5O1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZW5kRHJhZ2dpbmcgPSAoKSA9PiB7XHJcblx0XHRzdGFydFggPSBudWxsO1xyXG5cdFx0c3RhcnRZID0gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHRjb25zdCBkcmFnZ2luZyA9ICh4LCB5KSA9PiB7XHJcblx0XHRjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblxyXG5cdFx0aWYoaG9yaXpvbnRhbFNwbGl0KSB7XHJcblx0XHRcdGNvbnN0IG1haW5YID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG5cdFx0XHRjb25zdCB3aWQgPSByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0O1xyXG5cdFx0XHRpZih3aWQgPD0gMCkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgcGVyID0gKHggLSBtYWluWCkgLyB3aWQgKiAxMDA7XHJcblx0XHRcdHRoaXMucGVyY2VudGFnZShwZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgbWFpblkgPSByZWN0LnRvcCAgKyBlbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdGNvbnN0IGhpdCA9IHJlY3QuYm90dG9tIC0gcmVjdC50b3A7XHJcblx0XHRcdGlmKGhpdCA8PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBwZXIgPSAoeSAtIG1haW5ZKSAvIGhpdCAqIDEwMDtcclxuXHRcdFx0dGhpcy5wZXJjZW50YWdlKHBlcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0aWYoZXZlbnQud2hpY2ggPT09IDApIHtcclxuXHRcdFx0bW91c2VVcChldmVudCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRkcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbW91c2VVcCA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlKTtcclxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXApO1xyXG5cdFx0ZW5kRHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHRvdWNoTW92ZSAgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdGRyYWdnaW5nKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB0b3VjaEVuZCA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0ZHJhZ2dpbmcodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZSk7XHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmQpO1xyXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoQ2FuY2VsKTtcclxuXHJcblx0XHRlbmREcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdG91Y2hDYW5jZWwgPSAoZXZlbnQpID0+IHtcclxuXHRcdHRvdWNoRW5kKGV2ZW50KTtcclxuXHR9XHJcblxyXG5cdHRoaXMucGVyY2VudGFnZSA9IGZ1bmN0aW9uKHBlcikge1xyXG5cdFx0aWYocGVyIDwgdGhpcy5taW5TcGxpdCkge1xyXG5cdFx0XHRwZXIgPSB0aGlzLm1pblNwbGl0O1xyXG5cdFx0fSBlbHNlIGlmKHBlciA+IHRoaXMubWF4U3BsaXQpIHtcclxuXHRcdFx0cGVyID0gdGhpcy5tYXhTcGxpdDtcclxuXHRcdH1cclxuXHJcblx0XHRpZihob3Jpem9udGFsU3BsaXQpIHtcclxuXHRcdFx0Y2hpbGQxLmRpdi5zdHlsZS53aWR0aCA9IHBlciArICclJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNoaWxkMS5kaXYuc3R5bGUuaGVpZ2h0ID0gcGVyICsgJyUnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGhpcy5nZXRUYWIgPSBmdW5jdGlvbih0YWcpIHtcclxuXHRcdGZvcihjb25zdCBjb2xsZWN0aW9uIG9mIFt0YWJzLCBjaGlsZDEsIGNoaWxkMl0pIHtcclxuXHRcdFx0aWYoY29sbGVjdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdGxldCB0YWIgPSBjb2xsZWN0aW9uLmdldFRhYih0YWcpO1xyXG5cdFx0XHRcdGlmKHRhYiAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRhYjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbn0iLCJpbXBvcnQge01haW59IGZyb20gJy4vTWFpbic7XHJcbmltcG9ydCB7T3B0aW9uc30gZnJvbSAnLi9PcHRpb25zJztcclxuaW1wb3J0IHtSZWFkeX0gZnJvbSAnLi9VdGlsaXR5L1JlYWR5JztcclxuaW1wb3J0IHtBY3Rpb259IGZyb20gJy4vQWN0aW9ucy9BY3Rpb24nO1xyXG5pbXBvcnQge0FsbEFjdGlvbnN9IGZyb20gJy4vQWN0aW9ucy9BbGxBY3Rpb25zJztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIFBsYXlncm91bmRcclxuICpcclxuICogVGhpcyBjcmVhdGVzIGEgc2luZ2xlIEluc3RhbmNlIHRoYXQgbWFuYWdlcyB0aGVcclxuICogY29tcG9uZW50cyBhbmQgc3RhcnRzIGFjdHVhbCBQbGF5Z3JvdW5kIHdpbmRvd3MuXHJcbiAqXHJcbiAqIENvbnN0cnVjdCBhbmQgc3RhcnQgcnVubmluZyBsaWtlIHRoaXM6XHJcbiAqXHJcbiAqIEdpdmVuIGFuIEhUTUwgZGl2OlxyXG4gKiAgICAgPGRpdiBpZD1cInBsYXlncm91bmRcIj48L2Rpdj5cclxuICpcclxuICogVGhlIGZvbGxvd2luZyBzY3JpcHQgc3RhcnRzIFBsYXlncm91bmQgaW4gdGhhdCBkaXY6XHJcbiAqXHJcbiAqICAgICB2YXIgcGxheWdyb3VuZCA9IG5ldyBQbGF5Z3JvdW5kKCcjcGxheWdyb3VuZCcpO1xyXG4gKiAgICAgcGxheWdyb3VuZC5zdGFydCgpO1xyXG4gKlxyXG4gKiBAcGFyYW0gc2l0ZSBTaXRlIG9iamVjdFxyXG4gKiBAcGFyYW0gc2VsIFNlbGVjdG9yIG9yIGVsZW1lbnQgdG8gY3JlYXRlIFBsYXlncm91bmQgaW4gKGNhbiBiZSBtYW55KVxyXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvYmplY3QgY29udGFpbmluZyBQbGF5Z3JvdW5kIG9wdGlvbnMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBsYXlncm91bmQgPSBmdW5jdGlvbihzaXRlLCBzZWwsIG9wdGlvbnMpIHtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gTWFzdGVyIHNldCBvZiB0aGUgdmVyc2lvblxyXG4gICAgLy9cclxuICAgIGxldCBQQUNLQUdFID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJyk7XHJcbiAgICB0aGlzLnZlcnNpb24gPSBQQUNLQUdFLnZlcnNpb247XHJcblxyXG4gICAgdGhpcy5zaXRlID0gc2l0ZTtcclxuXHJcbiAgICAvLyBSZWNvcmQgdGhlIHNlbGVjdG9yXHJcbiAgICB0aGlzLnNlbCA9IHNlbDtcclxuXHJcbiAgICAvLyBUaGUgT3B0aW9ucyBvYmplY3QgdGhhdCBtYW5hZ2VzIHVzZXIgb3B0aW9uc1xyXG4gICAgdGhpcy5vcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG4gICAgLy8gQSBjb2xsZWN0aW9uIG9mIE1haW4gb2JqZWN0cy5cclxuICAgIHZhciBtYWlucyA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgdGhlIFBsYXlncm91bmQgcnVubmluZywgY3JlYXRpbmcgdGhlIHVzZXIgaW50ZXJmYWNlLlxyXG4gICAgICogVGhpcyBkb2VzIHdhaXQgZm9yIGRvY3VtZW50IHJlYWR5IGJlZm9yZSBjYWxsaW5nXHJcbiAgICAgKiB0aGlzLnN0YXJ0Tm93KCkgdW5sZXNzIHdlIGFyZSBydW5uaW5nIGluIG5vLXdpbmRvd1xyXG4gICAgICogbW9kZS4gSW4gdGhhdCBjYXNlIGl0IHJldHVybnMgYSBzdGFydGVkIGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICB0aGlzLnN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHNlbCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydE5vdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmVhZHkuZ28oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Tm93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCB0aGUgUGxheWdyb3VuZCBydW5uaW5nIG5vdy4gRG9lcyBub3Qgd2FpdCBmb3IgZG9jdW1lbnQgcmVhZHkuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RhcnROb3cgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc2VsIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluID0gbmV3IE1haW4odGhpcywgc2VsKTtcclxuICAgICAgICAgICAgbWFpbnMucHVzaChtYWluKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbih0aGlzLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIG1haW5zLnB1c2gobWFpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG1haW5zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWFpbnNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGEgY29uc3RydWN0ZWQgQWN0aW9uIG9iamVjdCBmcm9tIHRoZSBhdmFpbGFibGUgcGxheWdyb3VuZCBhY3Rpb25zLlxyXG5cdCAqIEBwYXJhbSBhY3Rpb24gVGhlIGFjdGlvbiBkYXRhIGZyb20gdGhlIHNlcnZlci5cclxuXHQgKiBAcmV0dXJucyBBY3Rpb24gb2JqZWN0XHJcblx0ICovXHJcblx0dGhpcy5nZXRBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgIFx0aWYoUGxheWdyb3VuZC5hY3Rpb25zW2FjdGlvbi50YWddICE9PSB1bmRlZmluZWQpIHtcclxuICAgIFx0XHRyZXR1cm4gbmV3IChQbGF5Z3JvdW5kLmFjdGlvbnNbYWN0aW9uLnRhZ10pKHNpdGUsIGFjdGlvbik7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGNvbnNvbGUubG9nKCdQbGF5Z3JvdW5kIGFjdGlvbiAnICsgYWN0aW9uLnRhZyArICcgZG9lcyBub3QgZXhpc3QnKTtcclxuXHQgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcblBsYXlncm91bmQuQWN0aW9uID0gQWN0aW9uO1xyXG5cclxuUGxheWdyb3VuZC5hY3Rpb25zID0ge307XHJcblxyXG5QbGF5Z3JvdW5kLmFkZEFjdGlvbiA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG5cdHRoaXMuYWN0aW9uc1thY3Rpb24udGFnXSA9IGFjdGlvbjtcclxufVxyXG5cclxuQWxsQWN0aW9ucy5hZGRBbGwoUGxheWdyb3VuZCk7IiwiaW1wb3J0IHtUb29sc30gZnJvbSAnLi9ET00vVG9vbHMnO1xyXG5pbXBvcnQge091dHB1dFRhYn0gZnJvbSAnLi9UYWJzL091dHB1dFRhYic7XHJcbmltcG9ydCB7RWRpdG9yVGFifSBmcm9tICcuL1RhYnMvRWRpdG9yVGFiJztcclxuXHJcbmltcG9ydCBtZW51YmFycyBmcm9tICcuLi8uLi9pbWcvbWVudWJhcnMucG5nJztcclxuXHJcblxyXG4vKipcclxuICogTWFuYWdlcyB0aGUgdGFicyBpbiB0aGUgbW9kZWxcclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQHBhcmFtIGVsZW1lbnQgUGFyZW50IGVsZW1lbnRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVGFicyA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQpIHtcclxuICAgIC8vLyBUaGUgY3VycmVudGx5IGFjdGl2ZSB2aWV3L3RhYlxyXG4gICAgdGhpcy5hY3RpdmUgPSAtMTtcclxuXHJcbiAgICAvLy8gVGhlIE1haW4gb2JqZWN0XHJcbiAgICB0aGlzLm1haW4gPSBtYWluO1xyXG5cclxuICAgIC8vLyBUaGUgU2l0ZSBvYmplY3RcclxuICAgIHRoaXMuc2l0ZSA9IG1haW4uc2l0ZTtcclxuXHJcbiAgICAvLyBUaGUgY29sbGVjdGlvbiBvZiB0YWJzXHJcbiAgICB2YXIgdGFicyA9IFtdO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBUaGUgc3RydWN0dXJlOiA8ZGl2IGNsYXNzPVwiY2wtdGFic1wiPjx1bD48L3VsPjxkaXYgY2xhc3M9XCJjbC12aWV3c1wiPjwvZGl2PjwvZGl2PlxyXG4gICAgLy8gZGl2LnRhYnMgLSBFbmNsb3N1cmUgZm9yIGFsbCB0YWJzIGNvbnRlbnRcclxuICAgIC8vIHVsIC0gVGhlIHRhYnMgd2Ugc2VsZWN0IGZyb21cclxuICAgIC8vIHZpZXdzRGl2IC0gVGhlIHZpZXdzIHdpdGggdGhlIHRhYiBjb250ZW50c1xyXG4gICAgLy9cclxuXHJcbiAgICBsZXQgdGFic0RpdiA9IG51bGwsIHVsID0gbnVsbCwgdmlld3NEaXYgPSBudWxsO1xyXG5cclxuXHQvKipcclxuICAgICAqIENyZWF0ZSB0aGUgdGFicyBzeXN0ZW1cclxuXHQgKiBAcGFyYW0gZGl2IFRoZSBkaXYgd2UgcHV0IHRoZSB0YWJzIGludG9cclxuXHQgKi9cclxuXHR0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uKGRpdikge1xyXG4gICAgICAgIC8vIENyZWF0ZTogPGRpdiBjbGFzcz1cImNsLXRhYnNcIj48dWw+PC91bD48ZGl2IGNsYXNzPVwiY2wtdmlld3NcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICB0YWJzRGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtcGctdGFicycpO1xyXG4gICAgICAgIHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICB0YWJzRGl2LmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgICAgICAgdmlld3NEaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdjbC1wZy12aWV3cycpO1xyXG4gICAgICAgIHRhYnNEaXYuYXBwZW5kQ2hpbGQodmlld3NEaXYpO1xyXG5cclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGFic0Rpdik7XHJcblxyXG4gICAgICAgIC8vIENsZWFyIHRoZSB0YWJzIGNvbGxlY3Rpb25cclxuICAgICAgICB0YWJzID0gW107XHJcblxyXG5cdC8vXHR0aGlzLmFkZCgncHJvZ3JhbScpO1xyXG4vL1x0XHR0aGlzLmFkZCgnb3V0cHV0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2FkID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0Zm9yKGNvbnN0IHRhYkRhdGEgb2YgZGF0YSkge1xyXG5cdFx0XHR0aGlzLmFkZCh0YWJEYXRhKTtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5ld1BhcmVudCA9IGZ1bmN0aW9uKHBhbmUpIHtcclxuXHRcdHBhbmUuZGl2LmFwcGVuZENoaWxkKHRhYnNEaXYpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0bGV0IHRhYiA9IG51bGw7XHJcblxyXG5cdCAgICBzd2l0Y2goZGF0YS50eXBlKSB7XHJcblx0XHQgICAgY2FzZSAnZWRpdG9yJzpcclxuXHRcdFx0ICAgIHRhYiA9IG5ldyBFZGl0b3JUYWIodGhpcywgZGF0YSk7XHJcblx0XHQgICAgXHRicmVhaztcclxuXHJcblx0XHQgICAgY2FzZSAnb3V0cHV0JzpcclxuXHRcdCAgICBcdHRhYiA9IG5ldyBPdXRwdXRUYWIodGhpcywgZGF0YSk7XHJcblx0XHQgICAgXHRicmVhaztcclxuXHQgICAgfVxyXG5cclxuXHQgICAgaWYodGFiICE9PSBudWxsKSB7XHJcblx0XHQgICAgdWwuYXBwZW5kQ2hpbGQodGFiLmxpKTtcclxuXHRcdCAgICB2aWV3c0Rpdi5hcHBlbmRDaGlsZCh0YWIudmlldyk7XHJcblx0XHQgICAgdGFicy5wdXNoKHt0YWI6IHRhYiwgbGk6IHRhYi5saSwgdmlldzogdGFiLnZpZXd9KTtcclxuXHJcblx0XHQgICAgdGFiLnNlbGVjdCgpO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBhIHRhYiBieSB0YWcuXHJcblx0ICogQHBhcmFtIHRhZyBUYWIgdGFnXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0dGhpcy5nZXRUYWIgPSBmdW5jdGlvbih0YWcpIHtcclxuXHQgICAgZm9yKGNvbnN0IHRhYiBvZiB0YWJzKSB7XHJcblx0XHQgICAgaWYodGFiLnRhYi50YWcgPT09IHRhZykge1xyXG5cdFx0XHQgICAgcmV0dXJuIHRhYi50YWI7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVuc2VsZWN0QWxsID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIENsZWFyIGFsbCBzZWxlY3Rpb25zXHJcblx0ICAgIC8vXHJcblx0ICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XHJcblx0ICAgIFx0dGFiLmxpLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcblx0ICAgIFx0dGFiLnZpZXcuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuXHQgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gLTE7XHJcbiAgICAgICAgdGFic0Rpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhYnNEaXYpO1xyXG4gICAgICAgIHRhYnNEaXYgPSBudWxsO1xyXG4gICAgICAgIHRhYnMgPSBbXTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jcmVhdGUoZWxlbWVudCk7XHJcbn07XHJcbiIsImltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XHJcblxyXG5leHBvcnQgY29uc3QgRWRpdG9yVGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRjb25zdCBzaXRlID0gdGFicy5zaXRlO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnZWRpdG9yJyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHJcblx0bGV0IGlubmVyVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuYXBwZW5kQ2hpbGQoaW5uZXJWaWV3KTtcclxuXHJcblx0bGV0IG51bXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRudW1zLmNsYXNzTGlzdC5hZGQoJ2NsLXBnLW51bXMnKTtcclxuXHRpbm5lclZpZXcuYXBwZW5kQ2hpbGQobnVtcyk7XHJcblxyXG5cdGxldCBlZGl0b3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRlZGl0b3JEaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGctZWRpdG9yJyk7XHJcblx0aW5uZXJWaWV3LmFwcGVuZENoaWxkKGVkaXRvckRpdik7XHJcblxyXG5cdGNvbnN0IGVkaXRvciA9IG5ldyBzaXRlLkVkaXRvcihlZGl0b3JEaXYsIHtcclxuXHRcdHJlc2l6ZTogJ25vbmUnLFxyXG5cdFx0dGFiOiB0cnVlLFxyXG5cdFx0YXV0b0luZGVudDogdHJ1ZSxcclxuXHRcdHN0eWxlczogbnVsbFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBzY3JvbGxhYmxlID0gZWRpdG9yLnRleHRhcmVhO1xyXG5cdHNjcm9sbGFibGUuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGV2ZW50KSA9PiB7XHJcblx0XHQvLyBlZGl0b3JEaXYuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJzBweCAnICsgKC1wcmUuc2Nyb2xsVG9wKSArICdweCc7XHJcblx0XHRudW1zLnNjcm9sbFRvcCA9IHNjcm9sbGFibGUuc2Nyb2xsVG9wO1xyXG5cdH0pO1xyXG5cclxuXHR0aGlzLnNldCA9IGZ1bmN0aW9uKHRleHQpIHtcclxuXHRcdC8vIERhdGEgZnJvbSB0aGUgZmlsZSBzeXN0ZW0gbWF5IGNvbnNpc3Qgb2YgZWl0aGVyIGp1c3RcclxuXHRcdC8vIHRleHQgKG9sZCBmb3JtYXQpIG9yIHRleHQgaW4gYW4gb2JqZWN0LiBUaGlzIGFsbG93c1xyXG5cdFx0Ly8gZWl0aGVyIGNhc2UgdG8gd29yay5cclxuXHRcdGlmKHRleHQuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRleHQgPSB0ZXh0LmRhdGE7XHJcblx0XHR9XHJcblxyXG5cdFx0ZWRpdG9yLnRleHRhcmVhLnZhbHVlID0gdGV4dDtcclxuXHJcblx0XHRsZXQgbGluZXMgPSAwO1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyArK2kpe1xyXG5cdFx0XHRpZih0ZXh0W2ldID09PSAnXFxuJykge1xyXG5cdFx0XHRcdGxpbmVzKys7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZihsaW5lcyA8IDEwMCkge1xyXG5cdFx0XHRsaW5lcyA9IDEwMDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBUaGUgZXh0cmEgYWRkZWQgb24gaGVyZSBlbnN1cmVzIHdlIGdldCBwYXN0IGFueSBzY3JvbGwgYmFyXHJcblx0XHQvLyB0aGF0IG1heSB0YWtlIHVwIGhvcml6b250YWwgcm9vbS5cclxuXHRcdG51bXMuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRmb3IobGV0IGk9MTsgaTw9bGluZXMrNTsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRcdHAuaW5uZXJUZXh0ID0gJycgKyBpO1xyXG5cdFx0XHRudW1zLmFwcGVuZENoaWxkKHApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHRoZSBjb250ZW50cyBvZiB0aGUgZWRpdG9yXHJcblx0ICogQHJldHVybnMgeyp8c3RyaW5nfVxyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gZWRpdG9yLnRleHRhcmVhLnZhbHVlO1xyXG5cdH1cclxuXHJcblx0dGhpcy5zZWxlY3QgPSBmdW5jdGlvbigpIHtcclxuXHRcdFRhYi5wcm90b3R5cGUuc2VsZWN0LmNhbGwodGhpcyk7XHJcblxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGVkaXRvci50ZXh0YXJlYS5mb2N1cygpO1xyXG5cdFx0fSwgMCk7XHJcblxyXG5cdH1cclxuXHJcblx0dGhpcy5zZXQoJycpO1xyXG59XHJcblxyXG5FZGl0b3JUYWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUYWIucHJvdG90eXBlKTtcclxuRWRpdG9yVGFiLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEVkaXRvclRhYjsiLCJpbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHJcblx0bGV0IGlubmVyVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuYXBwZW5kQ2hpbGQoaW5uZXJWaWV3KTtcclxuXHJcblx0bGV0IG51bXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRudW1zLmNsYXNzTGlzdC5hZGQoJ2NsLXBnLW51bXMnKTtcclxuXHRpbm5lclZpZXcuYXBwZW5kQ2hpbGQobnVtcyk7XHJcblxyXG5cdGxldCBwcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcclxuXHRpbm5lclZpZXcuYXBwZW5kQ2hpbGQocHJlKTtcclxuXHJcblx0cHJlLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4ge1xyXG5cdFx0cHJlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICcwcHggJyArICgtcHJlLnNjcm9sbFRvcCkgKyAncHgnO1xyXG5cdFx0bnVtcy5zY3JvbGxUb3AgPSBwcmUuc2Nyb2xsVG9wO1xyXG5cdH0pO1xyXG5cclxuXHR0aGlzLnNldCA9IGZ1bmN0aW9uKHRleHQpIHtcclxuXHRcdHByZS5pbm5lckhUTUwgPSB0ZXh0O1xyXG5cclxuXHRcdGxldCBsaW5lcyA9IDA7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7ICsraSl7XHJcblx0XHRcdGlmKHRleHRbaV0gPT09ICdcXG4nKSB7XHJcblx0XHRcdFx0bGluZXMrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGxpbmVzIDwgMTAwKSB7XHJcblx0XHRcdGxpbmVzID0gMTAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFRoZSBleHRyYSBhZGRlZCBvbiBoZXJlIGVuc3VyZXMgd2UgZ2V0IHBhc3QgYW55IHNjcm9sbCBiYXJcclxuXHRcdC8vIHRoYXQgbWF5IHRha2UgdXAgaG9yaXpvbnRhbCByb29tLlxyXG5cdFx0bnVtcy5pbm5lckhUTUwgPSAnJztcclxuXHRcdGZvcihsZXQgaT0xOyBpPD1saW5lcys1OyBpKyspIHtcclxuXHRcdFx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdFx0cC5pbm5lclRleHQgPSAnJyArIGk7XHJcblx0XHRcdG51bXMuYXBwZW5kQ2hpbGQocCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCB0ZXh0ID0gYGltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7ZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtleHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHRcclxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcclxufVxyXG5cclxuaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcclxuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcclxuXHJcblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ291dHB1dCcpO1xyXG5cdHRoaXMudmlldyA9IHZpZXc7XHJcblx0XHJcblx0dmlldy5pbm5lclRleHQgPSBcXGBcXGA7XHJcbn1cclxuaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcclxuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcclxuXHJcblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ291dHB1dCcpO1xyXG5cdHRoaXMudmlldyA9IHZpZXc7XHJcblx0XHJcblx0dmlldy5pbm5lclRleHQgPSBcXGBcXGA7XHJcbn1cclxuXHJcbk91dHB1dFRhYi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRhYi5wcm90b3R5cGUpO1xyXG5PdXRwdXRUYWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3V0cHV0VGFiO2A7XHJcblxyXG5cdC8vdGhpcy5zZXQodGV4dCArIHRleHQgKyB0ZXh0ICsgdGV4dCk7XHJcblx0dGhpcy5zZXQoJycpO1xyXG59XHJcblxyXG5PdXRwdXRUYWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUYWIucHJvdG90eXBlKTtcclxuT3V0cHV0VGFiLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE91dHB1dFRhYjsiLCJcclxuZXhwb3J0IGNvbnN0IFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcclxuXHR0aGlzLnRhYnMgPSB0YWJzO1xyXG5cclxuXHR0aGlzLnZpZXcgPSBudWxsO1xyXG5cdHRoaXMudGFnID0gZGF0YS50YWc7XHJcblx0dGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG5cclxuXHRsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdHRoaXMubGkgPSBsaTtcclxuXHJcblx0bGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblx0bGkuYXBwZW5kQ2hpbGQoYSk7XHJcblx0YS5pbm5lclRleHQgPSBkYXRhLm5hbWU7XHJcblxyXG5cdGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cdGxpLmFwcGVuZENoaWxkKG1lbnUpO1xyXG5cdC8vIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHQvLyBtZW51LmFwcGVuZENoaWxkKGltZyk7XHJcblx0Ly8gaW1nLnNyYyA9IG1lbnViYXJzO1xyXG5cclxuXHRsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRoaXMuc2VsZWN0KCk7XHJcblx0fSk7XHJcblxyXG5cdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0aGlzLnNlbGVjdCgpO1xyXG5cdH0pO1xyXG5cclxuXHR0aGlzLnNldCA9IGZ1bmN0aW9uKHRleHQpIHt9XHJcblxyXG5cdC8vXHJcblx0Ly8gVGhlIG1lbnVcclxuXHQvLyBNYXliZSBhY3RpdmF0ZSBsYXRlciBvbj9cclxuXHQvL1xyXG5cdC8vIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHQvLyBtZW51RGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXRhYi1tZW51Jyk7XHJcblx0Ly8gbWVudURpdi5jbGFzc0xpc3QuYWRkKCdjbC1tZW51LW9wZW4nKTtcclxuXHQvLyBsaS5hcHBlbmRDaGlsZChtZW51RGl2KTtcclxuXHQvL1xyXG5cdC8vIGNvbnN0IG1lbnVVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblx0Ly8gbWVudURpdi5hcHBlbmRDaGlsZChtZW51VUwpO1xyXG5cdC8vIG1lbnVVTC5pbm5lckhUTUwgPVxyXG5cdC8vIFx0JzxsaT48YSBjbGFzcz1cImVkaXQtdW5kb1wiPjxzcGFuIGNsYXNzPVwiaWNvbnMtY2wgaWNvbnMtY2wtYXJyb3dyZXR1cm50aGljay0xLXdcIj48L3NwYW4+VW5kbzwvYT48L2xpPicgK1xyXG5cdC8vIFx0JzxsaT48YSBjbGFzcz1cImVkaXQtZGVsZXRlXCI+PHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC10cmFzaFwiPjwvc3Bhbj5EZWxldGU8L2E+PC9saT4nO1xyXG5cdC8vXHJcblx0Ly8gY29uc3QgY29ubmVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdC8vIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY29ubmVjdERpdik7XHJcblx0Ly9cclxuXHQvLyBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHQvLyBjb25uZWN0RGl2LmFwcGVuZENoaWxkKGltZyk7XHJcblx0Ly8gaW1nLnNyYyA9IG1lbnViYXJzO1xyXG59XHJcblxyXG5UYWIucHJvdG90eXBlLnNlbGVjdCAgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLnRhYnMudW5zZWxlY3RBbGwoKTtcclxuXHJcblx0dGhpcy5saS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG5cdHRoaXMudmlldy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBEcmFnIGFuZCBkcm9wIHN1cHBvcnQgZm9yIHRoZSBwYWxldHRlXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERyYWdBbmREcm9wID0gZnVuY3Rpb24obWFpbikge1xyXG5cclxuXHRsZXQgZHJhZ0VsZW1lbnQgPSBudWxsOyAvLyBET00gRWxlbWVudFxyXG5cdGxldCBkcmFnSXRlbSA9IG51bGw7ICAgIC8vIFBhbGV0dGVJdGVtXHJcblx0bGV0IGRyb3BWaWV3cyA9IFtdOyAgICAgLy8gVmlld1xyXG5cclxuXHRjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xyXG5cdFx0XHRpZihldmVudC53aGljaCA9PT0gMCkge1xyXG5cdFx0XHRcdG1vdXNlVXAoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1vdXNlTW92ZShldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChldmVudCkgPT4ge1xyXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdFx0bW91c2VNb3ZlKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xyXG5cdFx0XHRtb3VzZVVwKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdG1vdXNlVXAodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIChldmVudCkgPT4ge1xyXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdFx0bW91c2VVcCh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLmRyYWdnYWJsZSA9IChwYWxldHRlSXRlbSkgPT4ge1xyXG5cdFx0cGFsZXR0ZUl0ZW0uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0Y2xpY2socGFsZXR0ZUl0ZW0pO1xyXG5cclxuXHRcdFx0bW91c2VNb3ZlKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRwYWxldHRlSXRlbS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0Y2xpY2socGFsZXR0ZUl0ZW0pO1xyXG5cclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdG1vdXNlTW92ZSh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLmRyb3BwYWJsZSA9ICh2aWV3LCBjYWxsYmFjaykgPT4ge1xyXG5cdFx0ZHJvcFZpZXdzLnB1c2goe1xyXG5cdFx0XHQndmlldyc6IHZpZXcsXHJcblx0XHRcdCdjYWxsYmFjayc6IGNhbGxiYWNrXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNsaWNrID0gKHBhbGV0dGVJdGVtKSA9PiB7XHJcblx0XHQvL1xyXG5cdFx0Ly8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZWxlbWVudCBhbmQgc2V0IGl0IHVwIGZvciBkcmFnZ2luZ1xyXG5cdFx0Ly9cclxuXHRcdGNvbnN0IGNsb25lID0gcGFsZXR0ZUl0ZW0ucGFsZXR0ZUltYWdlKCk7XHJcblx0XHRtYWluLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG5cdFx0Y2xvbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdFx0Y2xvbmUuc3R5bGUudG9wID0gMDtcclxuXHRcdGNsb25lLnN0eWxlLmxlZnQgPSAwO1xyXG5cdFx0Y2xvbmUuc3R5bGUuekluZGV4ID0gMTAwO1xyXG5cdFx0Y2xvbmUuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG5cclxuXHRcdGRyYWdJdGVtID0gcGFsZXR0ZUl0ZW07XHJcblx0XHRkcmFnRWxlbWVudCA9IGNsb25lO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbW91c2VNb3ZlID0gKHgsIHkpID0+IHtcclxuXHRcdGlmKGRyYWdFbGVtZW50ICE9PSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IHJlY3QgPSBtYWluLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdGNvbnN0IG1haW5YID0gcmVjdC5sZWZ0ICsgbWFpbi5lbGVtZW50LnNjcm9sbExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQ7XHJcblx0XHRcdGNvbnN0IG1haW5ZID0gcmVjdC50b3AgICsgbWFpbi5lbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdGRyYWdFbGVtZW50LnN0eWxlLmxlZnQgPSAoeCAtIG1haW5YIC0gZHJhZ0VsZW1lbnQuY2xpZW50V2lkdGggLyAyKSArICdweCc7XHJcblx0XHRcdGRyYWdFbGVtZW50LnN0eWxlLnRvcCA9ICh5IC0gbWFpblkgLSBkcmFnRWxlbWVudC5jbGllbnRIZWlnaHQgLyAyKSArICdweCc7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdXNlVXAgPSAoeCwgeSkgPT4ge1xyXG5cdFx0aWYoZHJhZ0VsZW1lbnQgIT09IG51bGwpIHtcclxuXHJcblx0XHRcdGZvcihjb25zdCB2aWV3IG9mIGRyb3BWaWV3cykge1xyXG5cdFx0XHRcdC8vXHJcblx0XHRcdFx0Ly8gSXMgdGhlIHZpZXcgZW5hYmxlZD9cclxuXHRcdFx0XHQvL1xyXG5cdFx0XHRcdGNvbnN0IHZpZXdFbGVtZW50ID0gdmlldy52aWV3LmVsZW1lbnQ7XHJcblx0XHRcdFx0aWYodmlld0VsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHQvLyBEZXRlcm1pbmUgeCx5IGluIHRoZSBjYW52YXNcclxuXHRcdFx0XHQvL1xyXG5cdFx0XHRcdGNvbnN0IHJlY3QgPSB2aWV3RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHRjb25zdCB2aWV3WCA9IHJlY3QubGVmdCArIHZpZXdFbGVtZW50LnNjcm9sbExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQ7XHJcblx0XHRcdFx0Y29uc3Qgdmlld1kgPSByZWN0LnRvcCArIHZpZXdFbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdFx0aWYoeCA+PSB2aWV3WCAmJlxyXG5cdFx0XHRcdFx0eSA+PSB2aWV3WSAmJlxyXG5cdFx0XHRcdFx0eCA8IHZpZXdYICsgKHJlY3QucmlnaHQgLSByZWN0LmxlZnQpICYmXHJcblx0XHRcdFx0XHR5IDwgdmlld1kgKyAocmVjdC5ib3R0b20gLSByZWN0LnRvcCkpIHtcclxuXHRcdFx0XHRcdHZpZXcuY2FsbGJhY2soZHJhZ0l0ZW0sIHggLSB2aWV3WCwgeSAtIHZpZXdZKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWFpbi5lbGVtZW50LnJlbW92ZUNoaWxkKGRyYWdFbGVtZW50KTtcclxuXHRcdFx0ZHJhZ0VsZW1lbnQgPSBudWxsO1xyXG5cdFx0XHRkcmFnSXRlbSA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxufSIsIi8qKlxyXG4gKiBTaW1wbGUgRG9jdW1lbnQgcmVhZHkgZnVuY3Rpb24sIGVxdWl2YWxlbnQgdG8galF1ZXJ5J3MgZG9jdW1lbnQgcmVhZHkuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFJlYWR5ID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxsIGEgZnVuY3Rpb24gd2hlbiB0aGUgZG9jdW1lbnQgaXMgcmVhZG9uLlxyXG4gKiBAcGFyYW0gZm4gRnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGRvY3VtZW50IHJlYWR5XHJcbiAqL1xyXG5SZWFkeS5nbyA9IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XHJcbiAgICAgICAgZm4oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vaW1nL21lbnUtY2hlY2sucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4vaW1nL2JhcnMucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImRpdi5jbC1wbGF5Z3JvdW5kIGRpdi50b2FzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi4zZW0pO1xcbiAgei1pbmRleDogNDAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuNHMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAzMGVtLzIpO1xcbiAgd2lkdGg6IDMwZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC41ZW07IH1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYudG9hc3QudG9hc3QtYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjRzO1xcbiAgei1pbmRleDogNDAwOyB9XFxuXFxuZGl2LmNsLXBsYXlncm91bmQge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM4MDgwODA7XFxuICBmb250LXNpemU6IDAuOXJlbTsgfVxcbiAgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMDA3OTZCOyB9XFxuICBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkgYSB7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgICBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSBhOmxpbmssIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIGE6dmlzaXRlZCB7XFxuICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDsgfVxcbiAgICBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIGltZy5jaGVjayB7XFxuICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgICAgIHdpZHRoOiAxOXB4O1xcbiAgICAgIGhlaWdodDogMTZweDtcXG4gICAgICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyB9XFxuICAgIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSB7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgcGFkZGluZzogMC4yNWVtIDJlbSAwLjI1ZW0gMC41ZW07XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgICAgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIGEge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgICAgIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhOmxpbmssIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhOnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICAgIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwge1xcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTtcXG4gICAgICB6LWluZGV4OiAtMTtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAxMDAlO1xcbiAgICAgIG1hcmdpbjogMXB4IDAgMCAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7IH1cXG4gICAgICBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkge1xcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgICAgICBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkgYSB7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgd2lkdGg6IDhlbTtcXG4gICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDsgfVxcbiAgICAgIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwgPiBsaS5tZW51LWRpc2FibGVkIGEge1xcbiAgICAgICAgb3BhY2l0eTogMC4zOyB9XFxuICAgIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuY2wtcGctbWVudS1vcGVuIHtcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgei1pbmRleDogMTAwO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzOyB9XFxuICAgIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuZWRpdC1tZW51IGEge1xcbiAgICAgIHdpZHRoOiA2ZW07IH1cXG4gICAgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5vcHRpb24tbWVudSBhIHtcXG4gICAgICB3aWR0aDogMTFlbTsgfVxcbiAgICBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmZpbGUtbWVudSBhIHtcXG4gICAgICB3aWR0aDogNmVtOyB9XFxuICAgIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuaGVscC1tZW51IGEge1xcbiAgICAgIHdpZHRoOiA3LjVlbTsgfVxcbiAgICBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIC51bC1zdGF0ZS1hY3RpdmUge1xcbiAgICAgIGNvbG9yOiByZWQ7IH1cXG4gICAgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCBsaS5tZW51LWRpdmlkZXIge1xcbiAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgIGJvcmRlcjogMCBzb2xpZCBibGFjaztcXG4gICAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IH1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYud29yayB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7IH1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiAjYTAwO1xcbiAgb3BhY2l0eTogMC4wNTtcXG4gIHotaW5kZXg6IDIwMDA7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLW1haW4ge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWZ1bGwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7IH1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC13aW5kb3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjYWFhYWFhO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBtaW4td2lkdGg6IDQwMHB4OyB9XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWJlZm9yZSwgZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxcHg7IH1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC1nYXAtYWZ0ZXIge1xcbiAgaGVpZ2h0OiAxZW07IH1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcbiAgYm9yZGVyOiAwOyB9XFxuICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAzcHggMCAwIDJweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgfVxcbiAgICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgcGFkZGluZzogMC4yNWVtIDAuMjVlbSAwLjQ1ZW0gMDtcXG4gICAgICBtaW4td2lkdGg6IDZlbTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGJhY2tncm91bmQ6ICNjY2M7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gICAgICBtYXJnaW46IDFweCAzcHggLTFweCAwO1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgei1pbmRleDogMTg7IH1cXG4gICAgICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkgYTpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgb3V0bGluZTogMDtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAgICAgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XFxuICAgICAgICBwYWRkaW5nOiAwOyB9XFxuICAgICAgICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkgYTpudGgtY2hpbGQoMikgaW1nIHtcXG4gICAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICAgIGhlaWdodDogYXV0bzsgfVxcbiAgICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkuc2VsZWN0ZWQge1xcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICAgIHotaW5kZXg6IDIyOyB9XFxuICAgICAgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpLnNlbGVjdGVkIGEge1xcbiAgICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyBkaXYuY2wtcGctdmlld3Mge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMjlweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgei1pbmRleDogMjA7IH1cXG4gIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIGRpdi5jbC1wZy12aWV3IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDIwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDsgfVxcbiAgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXcuc2VsZWN0ZWQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrOyB9XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDE3cHgpO1xcbiAgdG9wOiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMnMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzOyB9XFxuICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTRweDtcXG4gICAgaGVpZ2h0OiAyN3B4O1xcbiAgICB0b3A6IDRweDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDsgfVxcbiAgICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgZGl2IGltZyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGhlaWdodDogYXV0bzsgfVxcbiAgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXJnaW46IDMwcHggMCAwIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7IH1cXG4gICAgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkge1xcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgICAgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkgYSB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICB3aWR0aDogOGVtO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7IH1cXG4gICAgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkubWVudS1kaXNhYmxlZCBhIHtcXG4gICAgICBvcGFjaXR5OiAwLjM7IH1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUuY2wtbWVudS1vcGVuIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4yczsgfVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3QsIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQsIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJpZ2h0LFxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCwgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgfVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODg4OyB9XFxuICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0IGRpdi5jbC1iYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcmlnaHQ6IC01cHg7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBjdXJzb3I6IGV3LXJlc2l6ZTsgfVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7IH1cXG4gIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCBkaXYuY2wtYmFyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm90dG9tOiAtNXB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgY3Vyc29yOiBucy1yZXNpemU7IH1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1ib3R0b20ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87IH1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yb290IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDsgfVxcblxcbmRpdi5jbC1wZy1udW1zIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIHdpZHRoOiAyZW07XFxuICBwYWRkaW5nOiA0cHggMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDA7IH1cXG4gIGRpdi5jbC1wZy1udW1zIHAge1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICBsaW5lLWhlaWdodDogMTZweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDNweCAwIDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGNvbG9yOiAjNzc3OyB9XFxuXFxuZGl2LmNsLXBnLWFib3V0IHtcXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7IH1cXG4gIGRpdi5jbC1wZy1hYm91dCBmaWd1cmUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAyMjVweDtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7IH1cXG4gIGRpdi5jbC1wZy1hYm91dCBkaXYuY2wtcGctYWJvdXQtZGl2IHtcXG4gICAgcGFkZGluZzogMWVtOyB9XFxuICAgIGRpdi5jbC1wZy1hYm91dCBkaXYuY2wtcGctYWJvdXQtZGl2IGgxIHtcXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICBkaXYuY2wtcGctYWJvdXQgZGl2LmNsLXBnLWFib3V0LWRpdiBwIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3Ige1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yID4gZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuICAgIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiBkaXYuY2wtcGctZWRpdG9yIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAgICAgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yID4gZGl2IGRpdi5jbC1wZy1lZGl0b3IgdGV4dGFyZWEge1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB9XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3Lm91dHB1dCA+IGRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcbiAgICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQgPiBkaXYgcHJlIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgaGVpZ2h0OiAxMDAlOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fdG9hc3Quc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9tb2R1bGVzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9tb2R1bGVzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fcGxheWdyb3VuZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19tZW51LnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fd29yay5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX3RhYnMuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fcGFuZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19saW5lX251bWJlcnMuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fYWJvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fdGFiX2VkaXRvci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL190YWJfb3V0cHV0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFLSSxrQkFBa0I7RUFDbEIsU0FBUztFQUVULGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLHVGQUEySDtFQUUzSCwyREFBMkQ7RUFDM0QsZ0JDZG1CO0VEZW5CLHdCQUFtQztFQUNuQyxXQ2ZjO0VEZ0JkLHlCRVlzQjtFRlh0QixZRVljO0VGWGQsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsY0FBYyxFQUFBOztBQXRCbEI7RUEwQkksbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qiw4QkExQjBCO0VBMkIxQixZQUFZLEVBQUE7O0FHN0JoQjtFQUNFLGFBQWEsRUFBQTs7QUNEZjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLHlCRmV1QjtFRWR2QixpQ0FBaUM7RUFDakMsaUJDUnNCLEVBQUE7RUREeEI7SUFZSSxtQkZWa0IsRUFBQTtFRUZ0QjtJQWdCSSxpQkFBaUI7SUFDakIsZUFBZSxF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QUNsQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFdBQVcsRUFBQTs7QUNqQmY7RUFDRSxzQkFBc0IsRUFBQTtFQUR4QjtJQUlJLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQixFQUFBO0VBUHJCO0lBV0ksWUFBWSxFQUFBO0lBWGhCO01BY00sZ0JBQWdCO01BQ2hCLGtCQUFrQixFQUFBO0lBZnhCO01BbUJNLGtCQUFrQixFQUFBOztBQ25CeEI7RUFFSSxnQkFBZ0IsRUFBQTtFQUZwQjtJQU1NLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFNBQVM7SUFDVCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7SUFkekI7TUFpQlEsU0FBUztNQUNULGNBQWM7TUFDZCxjQUFjO01BQ2QsWUFBWSxFQUFBO01BcEJwQjtRQXVCVSxpQkFBaUI7UUFFakIsU0FBUztRQUNULG9CQUFvQjtRQUNwQixTQUFTO1FBQ1QsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO1FBRVosZ0JBQWdCO1FBRWhCLGNBQWM7UUFDZCxpQ0FBaUM7UUFDakMsZ0JBQWdCO1FBQ2hCLHFCQUNGLEVBQUE7O0FDdENSO0VBRUksZ0JBQWdCLEVBQUE7RUFGcEI7SUFLTSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixTQUFTO0lBQ1QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQixFQUFBO0lBYnpCO01BZ0JRLGNBQWM7TUFDZCxjQUFjO01BQ2QsbURBQXFDO01BQ3JDLGlCQUFpQjtNQUVqQixTQUFTO01BQ1Qsb0JBQW9CO01BQ3BCLFNBQVM7TUFDVCxjQUFjO01BQ2QsWUFBWSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpdi5jbC1wbGF5Z3JvdW5kXFxyXFxue1xcclxcbiAgJHRvYXN0LXRyYW5zaXRpb24tdGltZTogMC40cztcXHJcXG5cXHJcXG4gIGRpdi50b2FzdCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcblxcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjNlbSk7XFxyXFxuICAgIHotaW5kZXg6IDQwMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsICR0b2FzdC10cmFuc2l0aW9uLXRpbWUgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyICR0b2FzdC10cmFuc2l0aW9uLXRpbWUsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcclxcblxcclxcbiAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAkdG9hc3QtZm9udC1zaXplO1xcclxcbiAgICBsZWZ0OiBjYWxjKDUwJSAtICN7JHRvYXN0LXdpZHRofS8yKTtcXHJcXG4gICAgd2lkdGg6ICR0b2FzdC13aWR0aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRvYXN0LWJhY2tncm91bmQ7XFxyXFxuICAgIGNvbG9yOiAkdG9hc3QtdGV4dDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMC41ZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYudG9hc3QudG9hc3QtYWN0aXZlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAkdG9hc3QtdHJhbnNpdGlvbi10aW1lO1xcclxcbiAgICB6LWluZGV4OiA0MDA7XFxyXFxuXFxyXFxuICB9XFxyXFxufVwiLFwiJHRvYXN0LWZvbnQtc2l6ZTogMS4xZW07XFxyXFxuJHRvYXN0LXdpZHRoOiAzMGVtO1xcclxcblxcclxcbiRkcmFnLWJhci13aWR0aDogMTBweDtcXHJcXG5cXHJcXG4kdGFiLWNvcm5lci1yYWRpdXM6IDVweDtcXHJcXG5cIixcIi8vIFRoZSBtYWpvciBjb2xvcnNcXHJcXG4vLyBXZSBoYXZlIGEgcHJpbWFyeSBjb2xvciwgdHdvIHNlY29uZGFyeSBjb2xvcnMsIGFuZCBhIGNvbXBsZW1lbnRhcnkgY29sb3IuXFxyXFxuJGRhcmstcHJpbWFyeTogIzAwNzk2QjtcXHJcXG4kcHJpbWFyeTogIzAwOTY4ODtcXHJcXG4kbGlnaHQtcHJpbWFyeTogI0IyREZEQjtcXHJcXG4kYWNjZW50OiAjNjA3RDhCO1xcclxcbiRwcmltYXJ5LXRleHQ6ICMyMTIxMjE7XFxyXFxuJGRpdmlkZXItY29sb3I6ICNCREJEQkQ7XFxyXFxuJHNlY29uZGFyeS10ZXh0OiAjNjA2MDYwO1xcclxcblxcclxcbiRjb21wOiAjYzQxNDI1O1xcclxcbiR3aW5kb3ctYm9yZGVyczogI2FhYWFhYTtcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4kdGFicy1iYWNrZ3JvdW5kOiAjZGRkO1xcclxcbiR0YWItYmFja2dyb3VuZDogI2NjYztcXHJcXG4kdGFiLXRleHQ6IGJsYWNrO1xcclxcbiR0YWItc2VsZWN0ZWQtYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuJHRhYi1zZWxlY3RlZC10ZXh0OiBibGFjaztcXHJcXG5cXHJcXG4kbWVudS1mb2N1czogJGRhcmstcHJpbWFyeTtcXHJcXG4kbWVudS1iYWNrZ3JvdW5kOiAjZjBmM2YwO1xcclxcbiRtZW51LWNvbG9yOiBibGFjaztcXHJcXG4kbWVudS1kaXZpZGVyLWNvbG9yOiBibGFjaztcXHJcXG4kbWVudS1ib3JkZXItY29sb3I6ICM4MDgwODA7XFxyXFxuXFxyXFxuJHJlc2l6ZXI6ICRkYXJrLXByaW1hcnk7XFxyXFxuXFxyXFxuJHRvYXN0LWJhY2tncm91bmQ6ICMxNTE1MTU7XFxyXFxuJHRvYXN0LXRleHQ6IHdoaXRlO1wiLFwiZGl2LmNsLXBsYXlncm91bmQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCIsXCJkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciB7XFxyXFxuICBmbGV4OiAwIDEgYXV0bztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1iYWNrZ3JvdW5kO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjODA4MDgwO1xcclxcbiAgZm9udC1zaXplOiAkbWVudS1mb250LXNpemU7XFxyXFxuXFxyXFxuICBsaTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRtZW51LWZvY3VzO1xcclxcbiAgfVxcclxcblxcclxcbiAgbGkge1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgICBhIHtcXHJcXG4gICAgICBmb250LWZhbWlseTogJG1lbnUtZm9udDtcXHJcXG4gICAgICBmb250LXNpemU6ICRtZW51LWZvbnQtc2l6ZTtcXHJcXG4gICAgICBjb2xvcjogJG1lbnUtY29sb3I7XFxyXFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGE6bGluaywgYTp2aXNpdGVkIHtcXHJcXG4gICAgICBjb2xvcjogJG1lbnUtY29sb3I7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vXFxyXFxuICAvLyBUb3AgbGV2ZWwgbWVudVxcclxcbiAgLy9cXHJcXG4gID4gdWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcblxcclxcbiAgICBpbWcuY2hlY2sge1xcclxcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG4gICAgICB3aWR0aDogMTlweDtcXHJcXG4gICAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgICAgY29udGVudDogdXJsKFxcXCIuLi8uLi9pbWcvbWVudS1jaGVjay5wbmdcXFwiKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA+IGxpIHtcXHJcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICBwYWRkaW5nOiAwLjI1ZW0gMmVtIDAuMjVlbSAwLjVlbTtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJG1lbnUtZm9udDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogJG1lbnUtZm9udC1zaXplO1xcclxcbiAgICAgICAgY29sb3I6ICRtZW51LWNvbG9yO1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBhOmxpbmssIGE6dmlzaXRlZCB7XFxyXFxuICAgICAgICBjb2xvcjogJG1lbnUtY29sb3I7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vXFxyXFxuICAgIC8vIERyb3AtZG93biBtZW51XFxyXFxuICAgIC8vXFxyXFxuICAgIHVsIHtcXHJcXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7XFxyXFxuICAgICAgei1pbmRleDogLTE7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMnMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcclxcblxcclxcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgICAvLyBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgdG9wOiAxMDAlO1xcclxcbiAgICAgIG1hcmdpbjogMXB4IDAgMCAwO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtZW51LWJhY2tncm91bmQ7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkbWVudS1ib3JkZXItY29sb3I7XFxyXFxuICAgICAgYm9yZGVyLXRvcC13aWR0aDogMDtcXHJcXG5cXHJcXG4gICAgICA+IGxpIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICAgIHdpZHRoOiA4ZW07XFxyXFxuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgID4gbGkubWVudS1kaXNhYmxlZCB7XFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB1bC5jbC1wZy1tZW51LW9wZW4ge1xcclxcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdWwuZWRpdC1tZW51IGEge1xcclxcbiAgICAgIHdpZHRoOiA2ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdWwub3B0aW9uLW1lbnUgYSB7XFxyXFxuICAgICAgd2lkdGg6IDExZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdWwuZmlsZS1tZW51IGEge1xcclxcbiAgICAgIHdpZHRoOiA2ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdWwuaGVscC1tZW51IGEge1xcclxcbiAgICAgIHdpZHRoOiA3LjVlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudWwtc3RhdGUtYWN0aXZlIHtcXHJcXG4gICAgICBjb2xvcjogcmVkO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGxpLm1lbnUtZGl2aWRlciB7XFxyXFxuICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgYm9yZGVyOiAwIHNvbGlkICRtZW51LWRpdmlkZXItY29sb3I7XFxyXFxuICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblwiLFwiJG1lbnUtZm9udDogXFxcIkhlbHZldGljYSBOZXVlXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcXHJcXG4kbWVudS1mb250LXNpemU6IDAuOTByZW07XFxyXFxuXFxyXFxuJHRhYnMtZm9udDogXFxcIkhlbHZldGljYSBOZXVlXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcXHJcXG4kdGFicy1mb250LXNpemU6IDAuODByZW07XCIsXCJkaXYuY2wtcGxheWdyb3VuZCBkaXYud29yayB7XFxyXFxuICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxufVxcclxcblxcclxcblwiLFwiZGl2LmNsLXBsYXlncm91bmQge1xcclxcblxcclxcbiAgZGl2LmNsLXBnLW92ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2EwMDtcXHJcXG4gICAgb3BhY2l0eTogMC4wNTtcXHJcXG4gICAgei1pbmRleDogMjAwMDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5jbC1wZy1tYWluIHtcXHJcXG4gICAgLy8gTm9ybWFsaXphdGlvbnNcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZGl2LmNsLXBsYXlncm91bmQtZnVsbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmNsLXBsYXlncm91bmQtd2luZG93IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IHRoaW4gc29saWQgJHdpbmRvdy1ib3JkZXJzO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgbWluLWhlaWdodDogMTAwcHg7XFxyXFxuICBtaW4td2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuY2wtcGxheWdyb3VuZC1nYXAtYmVmb3JlLCBkaXYuY2wtcGxheWdyb3VuZC1nYXAtYWZ0ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcXHJcXG4gIGhlaWdodDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5cIixcIlxcclxcbmRpdi5jbC1wbGF5Z3JvdW5kIHtcXHJcXG4gIGRpdi5jbC1wZy10YWJzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogJHRhYnMtZm9udC1zaXplO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkdGFicy1iYWNrZ3JvdW5kO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuXFxyXFxuICAgID51bCB7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgIHBhZGRpbmc6IDNweCAwIDAgMnB4O1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcblxcclxcblxcclxcbiAgICAgID5saSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICBmb250LXNpemU6ICR0YWJzLWZvbnQtc2l6ZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbSAwLjI1ZW0gMC40NWVtIDA7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IDZlbTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICR0YWItYmFja2dyb3VuZDtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICR0YWItY29ybmVyLXJhZGl1cyAkdGFiLWNvcm5lci1yYWRpdXMgMCAwO1xcclxcbiAgICAgICAgbWFyZ2luOiAxcHggM3B4IC0xcHggMDtcXHJcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgICAgICB6LWluZGV4OiAxODtcXHJcXG5cXHJcXG4gICAgICAgIGE6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgICAgICBmb250LWZhbWlseTogJHRhYnMtZm9udDtcXHJcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuMjVlbTtcXHJcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgICBjb2xvcjogJHRhYi10ZXh0O1xcclxcbiAgICAgICAgICBvdXRsaW5lOiAwO1xcclxcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGE6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuXFxyXFxuICAgICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgID5saS5zZWxlY3RlZCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGFiLXNlbGVjdGVkLWJhY2tncm91bmQ7XFxyXFxuICAgICAgICB6LWluZGV4OiAyMjtcXHJcXG5cXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICBjb2xvcjogJHRhYi1zZWxlY3RlZC10ZXh0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXYuY2wtcGctdmlld3Mge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHRvcDogMjlweDtcXHJcXG4gICAgICByaWdodDogMDtcXHJcXG4gICAgICBib3R0b206IDA7XFxyXFxuICAgICAgei1pbmRleDogMjA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZGl2LmNsLXBnLXZpZXcge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgei1pbmRleDogMjA7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGRpdi5jbC1wZy12aWV3LnNlbGVjdGVkIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5jbC10YWItbWVudSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogY2FsYygxMDAlIC0gMTdweCk7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxyXFxuXFxyXFxuICAgIGRpdiB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHdpZHRoOiAxNHB4O1xcclxcbiAgICAgIGhlaWdodDogMjdweDtcXHJcXG4gICAgICB0b3A6IDRweDtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRtZW51LWJvcmRlci1jb2xvcjtcXHJcXG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtZW51LWJhY2tncm91bmQ7XFxyXFxuXFxyXFxuICAgICAgaW1nIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICB3aWR0aDogMTJweDtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy9cXHJcXG4gICAgLy8gVGFiIGRyb3AtZG93biBtZW51XFxyXFxuICAgIC8vXFxyXFxuICAgIHVsIHtcXHJcXG5cXHJcXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgICBtYXJnaW46IDMwcHggMCAwIDA7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1lbnUtYmFja2dyb3VuZDtcXHJcXG4gICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRtZW51LWJvcmRlci1jb2xvcjtcXHJcXG4gICAgICAvL2JvcmRlci10b3Atd2lkdGg6IDA7XFxyXFxuXFxyXFxuICAgICAgPiBsaSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgICB3aWR0aDogOGVtO1xcclxcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICA+IGxpLm1lbnUtZGlzYWJsZWQge1xcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgIG9wYWNpdHk6IDAuMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gIGRpdi5jbC10YWItbWVudS5jbC1tZW51LW9wZW4ge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxyXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4ycztcXHJcXG4gIH1cXHJcXG59XCIsXCJkaXYuY2wtcGxheWdyb3VuZCB7XFxyXFxuICBkaXYuY2wtcGxheWdyb3VuZC1yb290LCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0LCBkaXYuY2wtcGxheWdyb3VuZC1yaWdodCxcXHJcXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCwgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmbGV4OiAwIDEgYXV0bztcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzg4ODtcXHJcXG5cXHJcXG4gICAgZGl2LmNsLWJhciB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHJpZ2h0OiAtJGRyYWctYmFyLXdpZHRoIC8gMjtcXHJcXG4gICAgICB3aWR0aDogJGRyYWctYmFyLXdpZHRoO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNsLXBsYXlncm91bmQtcmlnaHQge1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNsLXBsYXlncm91bmQtdG9wIHtcXHJcXG4gICAgZmxleDogMCAxIGF1dG87XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODtcXHJcXG5cXHJcXG4gICAgZGl2LmNsLWJhciB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBib3R0b206IC0kZHJhZy1iYXItd2lkdGggLyAyO1xcclxcbiAgICAgIGhlaWdodDogJGRyYWctYmFyLXdpZHRoO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgICAgY3Vyc29yOiBucy1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XFxyXFxuICAgIC8vIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzE4NDUzYjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3Qge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJkaXYuY2wtcGctbnVtcyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmbGV4OiAwIDAgYXV0bztcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICB3aWR0aDogMmVtO1xcclxcbiAgcGFkZGluZzogNHB4IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcblxcclxcbiAgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDAgM3B4IDAgMDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgY29sb3I6ICM3Nzc7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiZGl2LmNsLXBnLWFib3V0IHtcXHJcXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxyXFxuXFxyXFxuICBmaWd1cmUge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMjVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuY2wtcGctYWJvdXQtZGl2IHtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcblxcclxcbiAgICBoMSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxufVwiLFwiZGl2LmNsLXBsYXlncm91bmQge1xcclxcbiAgZGl2LmNsLXBnLXZpZXcuZWRpdG9yIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgLy8gaW5uZXJEaXZcXHJcXG4gICAgPiBkaXYge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBib3R0b206IDA7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFxyXFxuICAgICAgZGl2LmNsLXBnLWVkaXRvciB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgICAgICAgdGV4dGFyZWEge1xcclxcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcXHJcXG5cXHJcXG4gICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXHJcXG4gICAgICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXHJcXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcXHJcXG4gICAgICAgICAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiZGl2LmNsLXBsYXlncm91bmQge1xcclxcbiAgZGl2LmNsLXBnLXZpZXcub3V0cHV0IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgPiBkaXYge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBib3R0b206IDA7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFxyXFxuICAgICAgcHJlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2ltZy9iYXJzLnBuZycpO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuXFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXHJcXG4gICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgfVxcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXS51c2VbM10hLi9fcGxheWdyb3VuZC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0udXNlWzNdIS4vX3BsYXlncm91bmQuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscywgdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBNEFBQUFnQWdNQUFBQmZnS0VFQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBQU1VRXhVUmYvLy8rTC85K0gvOStYLytPaDRIVE1BQUFBZVNVUkJWQWpYWTJBZ0V2ei8vLzhEdzZwVnF4WXdoSWFHQmxCT0VBa0FVMk1ZM3REZjlhVUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQk1BQUFBT0NBWUFBQUROR0NlSkFBQUJTMmxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ05TNDJMV014TkRJZ056a3VNVFl3T1RJMExDQXlNREUzTHpBM0x6RXpMVEF4T2pBMk9qTTVJQ0FnSUNBZ0lDQWlQZ29nUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0S0lDQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJaTgrQ2lBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ284UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrbmh4Zzd3QUFBVmRKUkVGVU9JMlYwYkZyVTFFVUIrRHZSV05zSUpOUXU2dDFFOHlrdURnS0JRbElGd2RIa1E3K0F3VTd1cmwwRk1RNWNYRndzb01ndUloU3FvUHRKQTUxRUhHb2hlZFFmZzU1U1Y5amFlS0Z3NzF3RHQ4OWh5T0plc3g2MHU4M3NyUjBMbHdLdmRBckpvR2lLS1pEcTZ2ekJvT3VuWjFydUlnZkdQd1hsbTczbElPRFc3YTNsNVhsSW43aE5mcllOY3VZMmR1VFhtOHVQQWdmUWovY0Q0dWhHUVJUc2V6dnk4cEtKendNWDhLemNDR2NIaUdIR0hQaFNsZ0lSWnJOVmpZM2gxQlp5dHBhcCtyb1UzZ2E1djlCeGo4UGtSZGhON3dMZDhMbHROdnRySzkzd3Qzd01RekMrV09SR2lZVTRYcllDbDhyOUY2NEhUYkMrM0N6cWpzZXFtR2pPQk9laE8vaFczaFo0WTlENjBSb3ZJQ2pZQ004Q2o4cjlITzRPaFVhWTZNNEJGdmhUZmdkM29hejQ5ekU5dXZSbUpCSHJ6L1lRSW5uMVYzUHo5RFowUTY3NFZXMTdhbGRKVG1oWURqYWpWbWhKUDRDeTFaVTYrZENnM0FBQUFBQVNVVk9SSzVDWUlJPVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFCQU1BQUFEdDNlSlNBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFFbEJNVkVVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFEZ0t4bWlBQUFBQlhSU1RsTUF2L0lCRFZhUXNqOEFBQUFCWWt0SFJBQ0lCUjFJQUFBQUNYQklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUFIRWxFUVZRSTEyTmd3QTBZbGNCQUFNRmdkZ0VEQXdTRFBEVzRBUUIyWEF4YjhFblZxUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChjYWNoZWRNb2R1bGUuZXJyb3IgIT09IHVuZGVmaW5lZCkgdGhyb3cgY2FjaGVkTW9kdWxlLmVycm9yO1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHR0cnkge1xuXHRcdHZhciBleGVjT3B0aW9ucyA9IHsgaWQ6IG1vZHVsZUlkLCBtb2R1bGU6IG1vZHVsZSwgZmFjdG9yeTogX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0sIHJlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18gfTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7IGhhbmRsZXIoZXhlY09wdGlvbnMpOyB9KTtcblx0XHRtb2R1bGUgPSBleGVjT3B0aW9ucy5tb2R1bGU7XG5cdFx0ZXhlY09wdGlvbnMuZmFjdG9yeS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBleGVjT3B0aW9ucy5yZXF1aXJlKTtcblx0fSBjYXRjaChlKSB7XG5cdFx0bW9kdWxlLmVycm9yID0gZTtcblx0XHR0aHJvdyBlO1xuXHR9XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHRyZXN1bHQgPSBmbigpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwiUGxheWdyb3VuZC5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc29uXCIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI4MjRhZmQ1YzZlOGRjOWZmMjdmXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiY291cnNlbGliOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsInZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG5cbi8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxudmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbnZhciBjdXJyZW50UGFyZW50cyA9IFtdO1xuXG4vLyBzdGF0dXNcbnZhciByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMgPSBbXTtcbnZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG5cbi8vIHdoaWxlIGRvd25sb2FkaW5nXG52YXIgYmxvY2tpbmdQcm9taXNlcztcblxuLy8gVGhlIHVwZGF0ZSBpbmZvXG52YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG52YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbl9fd2VicGFja19yZXF1aXJlX18uaG1yRCA9IGN1cnJlbnRNb2R1bGVEYXRhO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbiAob3B0aW9ucykge1xuXHR2YXIgbW9kdWxlID0gb3B0aW9ucy5tb2R1bGU7XG5cdHZhciByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShvcHRpb25zLnJlcXVpcmUsIG9wdGlvbnMuaWQpO1xuXHRtb2R1bGUuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZSk7XG5cdG1vZHVsZS5wYXJlbnRzID0gY3VycmVudFBhcmVudHM7XG5cdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRvcHRpb25zLnJlcXVpcmUgPSByZXF1aXJlO1xufSk7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJID0ge307XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVpcmUocmVxdWlyZSwgbW9kdWxlSWQpIHtcblx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cdGlmICghbWUpIHJldHVybiByZXF1aXJlO1xuXHR2YXIgZm4gPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuXHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG5cdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuXHRcdFx0XHR2YXIgcGFyZW50cyA9IGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cztcblx0XHRcdFx0aWYgKHBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuXHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG5cdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuXHRcdFx0XHRcdHJlcXVlc3QgK1xuXHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG5cdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcblx0fTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVbbmFtZV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmVxdWlyZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdGZvciAodmFyIG5hbWUgaW4gcmVxdWlyZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKG5hbWUpKTtcblx0XHR9XG5cdH1cblx0Zm4uZSA9IGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0cmV0dXJuIHRyYWNrQmxvY2tpbmdQcm9taXNlKHJlcXVpcmUuZShjaHVua0lkKSk7XG5cdH07XG5cdHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG1vZHVsZUlkLCBtZSkge1xuXHR2YXIgX21haW4gPSBjdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkO1xuXHR2YXIgaG90ID0ge1xuXHRcdC8vIHByaXZhdGUgc3R1ZmZcblx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9hY2NlcHRlZEVycm9ySGFuZGxlcnM6IHt9LFxuXHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG5cdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG5cdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG5cdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG5cdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG5cdFx0X21haW46IF9tYWluLFxuXHRcdF9yZXF1aXJlU2VsZjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBtZS5wYXJlbnRzLnNsaWNlKCk7XG5cdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSBfbWFpbiA/IHVuZGVmaW5lZCA6IG1vZHVsZUlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG5cdFx0fSxcblxuXHRcdC8vIE1vZHVsZSBBUElcblx0XHRhY3RpdmU6IHRydWUsXG5cdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaywgZXJyb3JIYW5kbGVyKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcFtpXV0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBdID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcblx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuXHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcblx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuXHRcdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWFuYWdlbWVudCBBUElcblx0XHRjaGVjazogaG90Q2hlY2ssXG5cdFx0YXBwbHk6IGhvdEFwcGx5LFxuXHRcdHN0YXR1czogZnVuY3Rpb24gKGwpIHtcblx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG5cdFx0XHRpZiAoaWR4ID49IDApIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXG5cdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG5cdFx0ZGF0YTogY3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG5cdH07XG5cdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcblx0cmV0dXJuIGhvdDtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xuXHRjdXJyZW50U3RhdHVzID0gbmV3U3RhdHVzO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMucHVzaChwcm9taXNlKTtcblx0XHRcdHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzLnB1c2gocHJvbWlzZSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMubGVuZ3RoID09PSAwKSByZXR1cm4gZm4oKTtcblx0dmFyIGJsb2NrZXIgPSBibG9ja2luZ1Byb21pc2VzO1xuXHRibG9ja2luZ1Byb21pc2VzID0gW107XG5cdHJldHVybiBQcm9taXNlLmFsbChibG9ja2VyKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcblx0fVxuXHRzZXRTdGF0dXMoXCJjaGVja1wiKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uaG1yTSgpLnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuXHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG5cblx0XHR2YXIgdXBkYXRlZE1vZHVsZXMgPSBbXTtcblx0XHRibG9ja2luZ1Byb21pc2VzID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdGtleVxuXHRcdFx0KSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdHVwZGF0ZS5jLFxuXHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdH0sXG5cdFx0XHRbXSlcblx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKGFwcGx5T25VcGRhdGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblxuXHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcInJlYWR5XCIpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRzZXRTdGF0dXMoXCJhYm9ydFwiKTtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0c2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHRzZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuXHR2YXIgZXJyb3I7XG5cdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcblx0fTtcblxuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5hcHBseSkge1xuXHRcdFx0dmFyIG1vZHVsZXMgPSByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuXHRcdFx0aWYgKG1vZHVsZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG5cdGlmIChlcnJvcikge1xuXHRcdHNldFN0YXR1cyhcImZhaWxcIik7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSk7XG5cdH1cblxuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fSk7XG5cdH1cblxuXHRzZXRTdGF0dXMoXCJpZGxlXCIpO1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jbC9kaXN0L1wiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIlBsYXlncm91bmRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbnZhciBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0O1xudmFyIHdhaXRpbmdVcGRhdGVSZXNvbHZlcyA9IHt9O1xuZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSByZXNvbHZlO1xuXHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG5cdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG5cdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGVjb3Vyc2VsaWJcIl0gPSAoY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpID0+IHtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QpIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG5cdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgbW9kdWxlLmlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG5cdFx0KTtcblx0fTtcblxuXHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRcdHZhciBuZXdNb2R1bGVGYWN0b3J5ID0gY3VycmVudFVwZGF0ZVttb2R1bGVJZF07XG5cdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKG5ld01vZHVsZUZhY3RvcnkpIHtcblx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdCA9IHtcblx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuXHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcblx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG5cdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcblx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcblx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRlcnJvcjogYWJvcnRFcnJvclxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvQXBwbHkpIHtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcblx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG5cdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcblx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdGlmIChcblx0XHRcdG1vZHVsZSAmJlxuXHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCB8fCBtb2R1bGUuaG90Ll9tYWluKSAmJlxuXHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuXHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG5cdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuXHRcdFx0IW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuXHRcdCkge1xuXHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuXHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdHJlcXVpcmU6IG1vZHVsZS5ob3QuX3JlcXVpcmVTZWxmLFxuXHRcdFx0XHRlcnJvckhhbmRsZXI6IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuXG5cdHJldHVybiB7XG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0fSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dmFyIGlkeDtcblx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG5cdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuXHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcblx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuXG5cdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG5cdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG5cdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG5cdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG5cdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcblx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcblx0XHRcdC8vIGluc2VydCBuZXcgY29kZVxuXHRcdFx0Zm9yICh2YXIgdXBkYXRlTW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVt1cGRhdGVNb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBydW4gbmV3IHJ1bnRpbWUgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50VXBkYXRlUnVudGltZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZVtpXShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgYWNjZXB0Q2FsbGJhY2sgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVyID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdGlmIChhY2NlcHRDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChhY2NlcHRDYWxsYmFjayk7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVycy5wdXNoKGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzW2tdLmNhbGwobnVsbCwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGVycm9ySGFuZGxlcnNba10gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyc1trXShlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tvXTtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aXRlbS5yZXF1aXJlKG1vZHVsZUlkKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fVxuXHR9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLmpzb25wID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG5cdGlmICghY3VycmVudFVwZGF0ZSkge1xuXHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcblx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG5cdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdH1cblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuXHR9XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLmpzb25wID0gZnVuY3Rpb24gKFxuXHRjaHVua0lkcyxcblx0cmVtb3ZlZENodW5rcyxcblx0cmVtb3ZlZE1vZHVsZXMsXG5cdHByb21pc2VzLFxuXHRhcHBseUhhbmRsZXJzLFxuXHR1cGRhdGVkTW9kdWxlc0xpc3Rcbikge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHt9O1xuXHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG5cdGN1cnJlbnRVcGRhdGUgPSByZW1vdmVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG5cdFx0b2JqW2tleV0gPSBmYWxzZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdGNodW5rSWRzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHQpIHtcblx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkpO1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZUNodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHRcdCkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikgdGhyb3cgbmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0OiBuZWVkIGZldGNoIEFQSVwiKTtcblx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSByZXR1cm47IC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcblx0XHRpZighcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1cGRhdGUgbWFuaWZlc3QgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY291cnNlbGliXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NvdXJzZWxpYlwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gbW9kdWxlIGNhY2hlIGFyZSB1c2VkIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiY29tbW9uXCIsXCJ2ZW5kb3JcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
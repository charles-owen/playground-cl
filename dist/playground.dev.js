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
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dialog-cl */ "./.yarn/cache/dialog-cl-npm-1.0.6-03d4a3bcc2-5364406882.zip/node_modules/dialog-cl/index.js");
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
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./.yarn/cache/@babel-runtime-npm-7.14.6-3272013297-dd931f6ef1.zip/node_modules/@babel/runtime/helpers/esm/typeof.js");


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
/* harmony import */ var resizer_cl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resizer-cl */ "./.yarn/cache/resizer-cl-npm-2.4.3-b618b20eb7-cacb0c49e5.zip/node_modules/resizer-cl/index.js");
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

/***/ "./.yarn/$$virtual/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/cjs.js!./.yarn/$$virtual/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!./.yarn/$$virtual/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-75f523e64c.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/playground/_playground.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/cjs.js!./.yarn/$$virtual/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!./.yarn/$$virtual/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-75f523e64c.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/playground/_playground.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../.yarn/$$virtual/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./.yarn/$$virtual/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../.yarn/$$virtual/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/$$virtual/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../.yarn/$$virtual/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/getUrl.js */ "./.yarn/$$virtual/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_menu_check_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/menu-check.png */ "./vendor/cl/playground/img/menu-check.png");
/* harmony import */ var _img_bars_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/bars.png */ "./vendor/cl/playground/img/bars.png");
// Imports





var ___CSS_LOADER_EXPORT___ = _yarn_$$virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_$$virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _yarn_$$virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_menu_check_png__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _yarn_$$virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_bars_png__WEBPACK_IMPORTED_MODULE_4__.default);
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
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_ffc3054882_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../.yarn/$$virtual/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-ffc3054882.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/$$virtual/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-ffc3054882.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_ffc3054882_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_ffc3054882_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_75f523e64c_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../.yarn/$$virtual/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/cjs.js!../../../.yarn/$$virtual/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!../../../.yarn/$$virtual/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-75f523e64c.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./_playground.scss */ "./.yarn/$$virtual/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/cjs.js!./.yarn/$$virtual/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!./.yarn/$$virtual/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-75f523e64c.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/playground/_playground.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _yarn_$$virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_ffc3054882_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_$$virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_75f523e64c_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_$$virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_75f523e64c_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0FjdGlvbnMvQWJvdXRBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9BY3Rpb25zL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0FjdGlvbnMvQWxsQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0FjdGlvbnMvU2F2ZUFjdGlvbi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0RPTS9Ub29scy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0dyYXBoaWNzL1RvYXN0LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvTWFpbi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL01lbnUuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9PcHRpb25zLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvUGFuZS5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1BsYXlncm91bmQuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9UYWJzLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVGFicy9FZGl0b3JUYWIuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9UYWJzL091dHB1dFRhYi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1RhYnMvVGFiLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVUkvRHJhZ0FuZERyb3AuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9VdGlsaXR5L1JlYWR5LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL19wbGF5Z3JvdW5kLnNjc3MiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvX3BsYXlncm91bmQuc2Nzcz82YWNlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2ltZy9iYXJzLnBuZyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbWcvbWVudS1jaGVjay5wbmciLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvaW1nL21lbnViYXJzLnBuZyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiUGxheWdyb3VuZEZhY3RvcnkiLCJTaXRlIiwic2l0ZSIsIlBsYXlncm91bmQiLCJjcmVhdGUiLCJpbnN0YWxsIiwiZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiZWxlbWVudCIsImpzb24iLCJKU09OIiwicGFyc2UiLCJ0ZXh0Q29udGVudCIsImlubmVySFRNTCIsInBsYXlncm91bmQiLCJzdGFydE5vdyIsInN0YXJ0IiwibWVzc2FnZUxpc3RlbmVyIiwibXNnIiwiZGF0YSIsIkFib3V0QWN0aW9uIiwib3B0aW9ucyIsIkFjdGlvbiIsIm1haW4iLCJjb250ZW50Iiwicm9vdCIsInBhY2thZ2Vqc29uIiwiZGlhbG9nIiwiRGlhbG9nIiwidGl0bGUiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjb25zdHJ1Y3RvciIsInRhZyIsImdldFNvdXJjZXMiLCJzb3VyY2VzIiwidW5kZWZpbmVkIiwic291cmNlIiwidGFiIiwiZ2V0VGFiIiwibmFtZSIsImdldCIsIkFsbEFjdGlvbnMiLCJhZGRBbGwiLCJhZGRBY3Rpb24iLCJTYXZlQWN0aW9uIiwicGFyYW1zIiwiYXBwVGFnIiwic3RyaW5naWZ5IiwidHlwZSIsImFwaSIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiaGFzRXJyb3IiLCJ0b2FzdCIsImVycm9yIiwiVG9vbHMiLCJpc1Zpc2libGUiLCJlbGVtIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJnZXRDbGllbnRSZWN0cyIsImFkZENsYXNzIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkQ2xhc3NlcyIsImNsYXNzZXMiLCJzcGxpdCIsImZvckVhY2giLCJjbHMiLCJyZW1vdmVDbGFzcyIsInJlZ0V4IiwiUmVnRXhwIiwicmVwbGFjZSIsImNyZWF0ZUNsYXNzZWREaXYiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiYWRkQ29udGVudCIsImlzU3RyaW5nIiwiaXNFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ2YWwiLCJ0b1N0cmluZyIsImNhbGwiLCJub2RlVmFsdWUiLCJvZmZzZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsInNjcm9sbExlZnQiLCJ3aW5kb3ciLCJwYWdlWE9mZnNldCIsInRvcCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiY2hpbGQiLCJ0YWdOYW1lIiwiY2hpbGROb2RlcyIsIm5vZGUiLCJUb2FzdCIsImRlZmF1bHREdXJhdGlvbiIsImludGVyVG9hc3REZWxheSIsIm1lc3NhZ2VzIiwiYWN0aXZlIiwic2hvdyIsIm1lc3NhZ2UiLCJzcGxpY2UiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidGltZSIsInB1c2giLCJqc29uRXJyb3JzIiwianNvbkFwaSIsImVycm9ycyIsIk1haW4iLCJtZW51IiwidGFicyIsImRpdk92ZXJsYXkiLCJkaXZXb3JrIiwiaW5pdGlhbGl6ZSIsInN0eWxlIiwiZGlzcGxheSIsImhlaWdodCIsImNvbnRhaW5zIiwiUmVzaXplciIsImhhbmRsZSIsImRyYWdBbmREcm9wIiwiRHJhZ0FuZERyb3AiLCJNZW51Iiwicm9vdFBhbmUiLCJQYW5lIiwibG9hZCIsInBhbmUiLCJTdHJpbmciLCJzZXQiLCJuZXdUYWIiLCJtb2RhbCIsIm5hdiIsInVsIiwibWVudXMiLCJhY3Rpb24iLCJ0b3BMSSIsImEiLCJpbm5lclRleHQiLCJnZXRBY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInN1YlVMIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJvcGVuIiwiY2xvc2VBbGwiLCJzdWJNZW51Iiwic3ViTEkiLCJjbG9zZUxpc3RlbmVyIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImxpIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVuYWJsZSIsInNlbCIsInF1ZXJ5U2VsZWN0b3IiLCJmaW5kIiwiY2xpY2siLCJjbG9zdXJlIiwiT3B0aW9ucyIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJFcnJvciIsImdldEFQSSIsIm1vZGUiLCJvYmoiLCJtb2RlT2JqIiwidXJsIiwiY29udGVudFR5cGUiLCJleHRyYSIsInBhcmVudCIsIm1pblNwbGl0IiwibWF4U3BsaXQiLCJjaGlsZDEiLCJjaGlsZDIiLCJob3Jpem9udGFsU3BsaXQiLCJob3JpeiIsInBlcmNlbnRhZ2UiLCJUYWJzIiwiaG9yaXpvbnRhbCIsImNoaWxkMURhdGEiLCJjaGlsZDJEYXRhIiwiZmxleERpcmVjdGlvbiIsImJhciIsInN0YXJ0RHJhZ2dpbmciLCJwYWdlWCIsInBhZ2VZIiwibW91c2VNb3ZlIiwibW91c2VVcCIsInRvdWNoIiwiY2hhbmdlZFRvdWNoZXMiLCJ0b3VjaE1vdmUiLCJ0b3VjaEVuZCIsInRvdWNoQ2FuY2VsIiwic3RhcnRYIiwic3RhcnRZIiwieCIsInkiLCJlbmREcmFnZ2luZyIsImRyYWdnaW5nIiwibWFpblgiLCJ3aWQiLCJyaWdodCIsInBlciIsIm1haW5ZIiwiaGl0IiwiYm90dG9tIiwid2hpY2giLCJ3aWR0aCIsImNvbGxlY3Rpb24iLCJQQUNLQUdFIiwicmVxdWlyZSIsInZlcnNpb24iLCJtYWlucyIsIlJlYWR5IiwiRWxlbWVudCIsImFjdGlvbnMiLCJ0YWJzRGl2Iiwidmlld3NEaXYiLCJ0YWJEYXRhIiwibmV3UGFyZW50IiwiRWRpdG9yVGFiIiwiT3V0cHV0VGFiIiwidmlldyIsInNlbGVjdCIsInVuc2VsZWN0QWxsIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiVGFiIiwiaW5uZXJWaWV3IiwibnVtcyIsImVkaXRvckRpdiIsImVkaXRvciIsIkVkaXRvciIsInJlc2l6ZSIsImF1dG9JbmRlbnQiLCJzdHlsZXMiLCJzY3JvbGxhYmxlIiwidGV4dGFyZWEiLCJ0ZXh0IiwidmFsdWUiLCJsaW5lcyIsInAiLCJmb2N1cyIsInByZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRyYWdFbGVtZW50IiwiZHJhZ0l0ZW0iLCJkcm9wVmlld3MiLCJkcmFnZ2FibGUiLCJwYWxldHRlSXRlbSIsImRyb3BwYWJsZSIsImNhbGxiYWNrIiwiY2xvbmUiLCJwYWxldHRlSW1hZ2UiLCJwb3NpdGlvbiIsInpJbmRleCIsImN1cnNvciIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwidmlld0VsZW1lbnQiLCJ2aWV3WCIsInZpZXdZIiwiZ28iLCJmbiIsImF0dGFjaEV2ZW50IiwicmVhZHlTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBQSwyRUFBQSxDQUF5QkMsSUFBSSxDQUFDQyxJQUE5QjtBQUVBRCxJQUFJLENBQUNFLFVBQUwsR0FBa0JBLGlFQUFsQixDOzs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUVPLElBQU1ILGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBVyxDQUFFLENBQXZDOztBQUVQQSxpQkFBaUIsQ0FBQ0ksTUFBbEIsR0FBMkIsVUFB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SyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLGFBQWEsWUFBWSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxnREFBZ0QsbUNBQW1DLHFCQUFxQiwyQkFBMkIs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Q0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQzFCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7VUM5Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJwbGF5Z3JvdW5kLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgJy4vX3BsYXlncm91bmQuc2Nzcyc7XHJcbmltcG9ydCB7UGxheWdyb3VuZH0gZnJvbSAnLi9qcy9QbGF5Z3JvdW5kL1BsYXlncm91bmQnO1xyXG5pbXBvcnQge1BsYXlncm91bmRGYWN0b3J5fSBmcm9tICcuL2pzL1BsYXlncm91bmRGYWN0b3J5JztcclxuXHJcbmV4cG9ydCB7UGxheWdyb3VuZH07XHJcbmV4cG9ydCB7UGxheWdyb3VuZCBhcyBkZWZhdWx0fTtcclxuXHJcblBsYXlncm91bmRGYWN0b3J5LmNyZWF0ZShTaXRlLnNpdGUpO1xyXG5cclxuU2l0ZS5QbGF5Z3JvdW5kID0gUGxheWdyb3VuZDtcclxuXHJcbiIsImltcG9ydCB7UGxheWdyb3VuZH0gZnJvbSBcIi4vUGxheWdyb3VuZC9QbGF5Z3JvdW5kXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGxheWdyb3VuZEZhY3RvcnkgPSBmdW5jdGlvbigpIHt9XHJcblxyXG5QbGF5Z3JvdW5kRmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG5cdGZ1bmN0aW9uIGluc3RhbGwoKSB7XHJcblx0XHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jbC1wbGF5Z3JvdW5kJyk7XHJcblx0XHRmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG5cdFx0XHRjb25zdCBqc29uID0gSlNPTi5wYXJzZShlbGVtZW50LnRleHRDb250ZW50KTtcclxuXHRcdFx0ZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0Y29uc3QgcGxheWdyb3VuZCA9IG5ldyBQbGF5Z3JvdW5kKHNpdGUsIGVsZW1lbnQsIGpzb24pO1xyXG5cdFx0XHRwbGF5Z3JvdW5kLnN0YXJ0Tm93KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzaXRlLnN0YXJ0KCAoKSA9PiB7XHJcblx0XHRpbnN0YWxsKCk7XHJcblx0fSk7XHJcblxyXG5cclxuXHRzaXRlLm1lc3NhZ2VMaXN0ZW5lcigobXNnLCBkYXRhKSA9PiB7XHJcblx0XHRzd2l0Y2gobXNnKSB7XHJcblx0XHRcdGNhc2UgJ2NsLXF1aXotYWZ0ZXItaW5zdGFsbGVkJzpcclxuXHRcdFx0XHRpbnN0YWxsKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdjbC1ncmFkZXMtZ3JhZGVyLWluc3RhbGxlZCc6XHJcblx0XHRcdFx0aW5zdGFsbCgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0c2l0ZS5QbGF5Z3JvdW5kID0gUGxheWdyb3VuZDtcclxufVxyXG5cclxuIiwiaW1wb3J0IHtBY3Rpb259IGZyb20gJy4vQWN0aW9uJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdkaWFsb2ctY2wnO1xyXG5pbXBvcnQgcGFja2FnZWpzb24gZnJvbSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJztcclxuXHJcbmV4cG9ydCBjb25zdCBBYm91dEFjdGlvbiA9IGZ1bmN0aW9uKHNpdGUsIG9wdGlvbnMpIHtcclxuXHRBY3Rpb24uY2FsbCh0aGlzLCBzaXRlLCBvcHRpb25zKTtcclxuXHJcblx0dGhpcy5kbyA9IGZ1bmN0aW9uKG1haW4pIHtcclxuXHRcdEFjdGlvbi5wcm90b3R5cGUuZG8uY2FsbCh0aGlzLCBtYWluKTtcclxuXHJcblx0XHQvLyBEaWFsb2cgYm94IGNvbnRlbnRzXHJcblx0XHRsZXQgY29udGVudCA9IGBcclxuPGZpZ3VyZT48aW1nIHNyYz1cIiR7c2l0ZS5yb290fS92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbWcvcGxheWdyb3VuZC5qcGdcIiBhbHQ9XCJDaXJzaW0gTG9nb1wiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiMjI1XCI+PC9maWd1cmU+XHJcbjxkaXYgY2xhc3M9XCJjbC1wZy1hYm91dC1kaXZcIj5cclxuPGgxPkNvdXJzZUxpYiBQbGF5Z3JvdW5kPC9oMT5cclxuPHA+VmVyc2lvbjogJHtwYWNrYWdlanNvbi52ZXJzaW9ufTwvcD5cclxuPHA+V3JpdHRlbiBieTogQ2hhcmxlcyBCLiBPd2VuPC9wPjwvZGl2PmA7XHJcblxyXG5cdFx0Y29uc3QgZGlhbG9nID0gbmV3IERpYWxvZyh7XHJcblx0XHRcdHRpdGxlOiAnQWJvdXQgdGhlIFBsYXlncm91bmQnLFxyXG5cdFx0XHRjb250ZW50OiBjb250ZW50LFxyXG5cdFx0XHQnYWRkQ2xhc3MnOiAnY2wtcGctYWJvdXQnXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG59XHJcblxyXG5BYm91dEFjdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFjdGlvbi5wcm90b3R5cGUpO1xyXG5BYm91dEFjdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBYm91dEFjdGlvbjtcclxuXHJcbkFib3V0QWN0aW9uLnRhZyA9ICdhYm91dCc7IiwiLyoqXHJcbiAqIEJhc2Ugb2JqZWN0IGZvciBhbiBhY3Rpb24uXHJcbiAqIEBwYXJhbSBzaXRlIFNpdGUgb2JqZWN0XHJcbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIHRoaXMgYWN0aW9uXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEFjdGlvbiA9IGZ1bmN0aW9uKHNpdGUsIG9wdGlvbnMpIHtcclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGFsbCBzb3VyY2VzIGZvciB0aGlzIGFjdGlvbi5cclxuXHQgKlxyXG5cdCAqIEJhc2VkIG9uIHRoZSBvcHRpb24gJ3NvdXJjZXMnLCB3aGljaCBhcmUgdGFiIHRhZ3MuXHJcblx0ICogQHJldHVybiBvYmplY3Qgd2l0aCB0YWIgbmFtZXMgYW5kIHNvdXJjZXMuXHJcblx0ICovXHJcblx0dGhpcy5nZXRTb3VyY2VzID0gZnVuY3Rpb24oKSB7XHJcblx0XHQvLyBHZXQgdGhlIHJlcXVpc2l0ZSB0YWIgY29udGVudHNcclxuXHRcdGNvbnN0IHNvdXJjZXMgPSB7fTtcclxuXHJcblx0XHRpZihvcHRpb25zLnNvdXJjZXMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnNvdXJjZXMgPT09IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuIHNvdXJjZXM7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGNvbnN0IHNvdXJjZSBvZiBvcHRpb25zLnNvdXJjZXMpIHtcclxuXHRcdFx0Y29uc3QgdGFiID0gdGhpcy5tYWluLmdldFRhYihzb3VyY2UpO1xyXG5cdFx0XHRpZih0YWIgIT09IG51bGwpIHtcclxuXHRcdFx0XHRzb3VyY2VzW3NvdXJjZV0gPSB7bmFtZTogdGFiLm5hbWUsIGRhdGE6IHRhYi5nZXQoKX07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gc291cmNlcztcclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuQWN0aW9uLnByb3RvdHlwZS5kbyA9IGZ1bmN0aW9uKG1haW4pIHtcclxuXHR0aGlzLm1haW4gPSBtYWluO1xyXG59IiwiaW1wb3J0IHtTYXZlQWN0aW9ufSBmcm9tICcuL1NhdmVBY3Rpb24nO1xyXG5pbXBvcnQge0Fib3V0QWN0aW9ufSBmcm9tICcuL0Fib3V0QWN0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBBbGxBY3Rpb25zID0gZnVuY3Rpb24oKSB7fVxyXG5cclxuQWxsQWN0aW9ucy5hZGRBbGwgPSBmdW5jdGlvbihQbGF5Z3JvdW5kKSB7XHJcblx0UGxheWdyb3VuZC5hZGRBY3Rpb24oU2F2ZUFjdGlvbik7XHJcblx0UGxheWdyb3VuZC5hZGRBY3Rpb24oQWJvdXRBY3Rpb24pO1xyXG59IiwiaW1wb3J0IHtBY3Rpb259IGZyb20gJy4vQWN0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBTYXZlQWN0aW9uID0gZnVuY3Rpb24oc2l0ZSwgb3B0aW9ucykge1xyXG5cdEFjdGlvbi5jYWxsKHRoaXMsIHNpdGUsIG9wdGlvbnMpO1xyXG5cclxuXHR0aGlzLmRvID0gZnVuY3Rpb24obWFpbikge1xyXG5cdFx0QWN0aW9uLnByb3RvdHlwZS5kby5jYWxsKHRoaXMsIG1haW4pO1xyXG5cclxuXHRcdC8vIEdldCB0aGUgcmVxdWlzaXRlIHRhYiBjb250ZW50c1xyXG5cdFx0Y29uc3Qgc291cmNlcyA9IHRoaXMuZ2V0U291cmNlcygpO1xyXG5cclxuXHRcdGNvbnN0IHBhcmFtcyA9IHtcclxuXHRcdFx0YXBwVGFnOiBvcHRpb25zLmFwcFRhZyxcclxuXHRcdFx0bmFtZTogb3B0aW9ucy5uYW1lLFxyXG5cdFx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeShzb3VyY2VzKSxcclxuXHRcdFx0dHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0XHR9O1xyXG5cclxuXHRcdHNpdGUuYXBpLnBvc3QoJy9hcGkvZmlsZXN5c3RlbS9zYXZlJywgcGFyYW1zKVxyXG5cdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblx0XHRcdFx0aWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRzaXRlLnRvYXN0KHRoaXMsICdTdWNjZXNzZnVsbHkgc2F2ZWQgdG8gc2VydmVyJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5TYXZlQWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWN0aW9uLnByb3RvdHlwZSk7XHJcblNhdmVBY3Rpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2F2ZUFjdGlvbjtcclxuXHJcblNhdmVBY3Rpb24udGFnID0gJ3NhdmUnOyIsIlxyXG5cclxuLyoqXHJcbiAqIENvbnZlbmllbmNlIGZ1bmN0aW9ucyBmb3IgdGhlIERPTS5cclxuICogVG9vbHMgdGhhdCBhdm9pZCBoYXZpbmcgdG8gaGF2ZSBqUXVlcnkgaW5zdGFsbGVkLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBUb29scyA9IGZ1bmN0aW9uKCkge1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIElzIGFuIGVsZW1lbnQgdmlzaWJsZT9cclxuICogQm9ycm93ZWQgZnJvbSBqUXVlcnkhXHJcbiAqIEBwYXJhbSBlbGVtXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuVG9vbHMuaXNWaXNpYmxlID0gZnVuY3Rpb24oIGVsZW0gKSB7XHJcbiAgICByZXR1cm4gISEoIGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZCBhIGNsYXNzIHRvIGFuIGVsZW1lbnRcclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBhZGQgdG9cclxuICogQHBhcmFtIGNsYXNzTmFtZSBDbGFzcyB0byBhZGRcclxuICovXHJcblRvb2xzLmFkZENsYXNzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xyXG59XHJcblxyXG5Ub29scy5hZGRDbGFzc2VzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc3Nlcykge1xyXG4gICAgaWYoY2xhc3NlcyA9PT0gdW5kZWZpbmVkIHx8IGNsYXNzZXMgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goKGNscykgPT4ge1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzKGVsZW1lbnQsIGNscyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuVG9vbHMucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICAgIGxldCByZWdFeCA9IG5ldyBSZWdFeHAoJ1xcXFxiJyArIGNsYXNzTmFtZSArICdcXFxcYicsICdnJyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmVnRXgsIFwiXCIpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgRElWIHdpdGggYSBwcm92aWRlZCBjbGFzcyBuYW1lLlxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIENsYXNzIHRvIGFkZCB0byB0aGUgZGl2XHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGRpdi4gSFRNTCBvciBFbGVtZW50XHJcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBDcmVhdGVkIERPTSBFbGVtZW50XHJcbiAqL1xyXG5Ub29scy5jcmVhdGVDbGFzc2VkRGl2ID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBjb250ZW50KSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBUb29scy5hZGRDbGFzcyhkaXYsIGNsYXNzTmFtZSk7XHJcbiAgICBpZihjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuXHQgICAgVG9vbHMuYWRkQ29udGVudChkaXYsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBjb250ZW50IHRvIGFuIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gYWRkIHRvXHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQuIENhbiBiZSBIVE1MIG9yIGFuIEVsZW1lbnQuXHJcbiAqL1xyXG5Ub29scy5hZGRDb250ZW50ID0gZnVuY3Rpb24oZWxlbWVudCwgY29udGVudCkge1xyXG4gICAgaWYoVG9vbHMuaXNTdHJpbmcoY29udGVudCkpIHtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSBjb250ZW50O1xyXG4gICAgfSBlbHNlIGlmKFRvb2xzLmlzRWxlbWVudChjb250ZW50KSkge1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJcyB0aGUgcGFzc2VkIHZhbHVlIGEgc3RyaW5nP1xyXG4gKiBAcGFyYW0gdmFsXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuVG9vbHMuaXNTdHJpbmcgPSBmdW5jdGlvbih2YWwpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCAoKCEhdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpO1xyXG59XHJcblxyXG4vKipcclxuICogSXMgdGhlIHBhc3NlZCB2YWx1ZSBhbiBIVE1MRWxlbWVudD9cclxuICogQHBhcmFtIHZhbFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcblRvb2xzLmlzRWxlbWVudCA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgcmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCAmJiB2YWwubm9kZVZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgYW4gZWxlbWVudCAoc3BlY2lmaWNhbGx5IGl0cyBib3JkZXIgYm94LCB3aGljaCBleGNsdWRlcyBtYXJnaW5zKSByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnQuXHJcbiAqIEBwYXJhbSBlbGVtZW50XHJcbiAqL1xyXG5Ub29scy5vZmZzZXQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0Y29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0cmV0dXJuIHtcclxuXHQgICAgbGVmdDogcmVjdC5sZWZ0ICsgZWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0LFxyXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyBlbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmluZCBhIGNoaWxkIGJ5IHRhZ05hbWVcclxuICogQHBhcmFtIGVsZW1lbnRcclxuICogQHBhcmFtIHRhZ05hbWVcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5Ub29scy5jaGlsZCA9IGZ1bmN0aW9uKGVsZW1lbnQsIHRhZ05hbWUpIHtcclxuXHRmb3IoY29uc3Qgbm9kZSBvZiBlbGVtZW50LmNoaWxkTm9kZXMpIHtcclxuXHQgICAgaWYobm9kZS50YWdOYW1lID09PSB0YWdOYW1lKSB7XHJcblx0ICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQge1Rvb2xzfSBmcm9tICcuLi9ET00vVG9vbHMnO1xyXG5cclxuLyoqXHJcbiAqIFRvYXN0IG5vdGlmaWNhdGlvbiBzeXN0ZW1cclxuICogalF1ZXJ5LWZyZWVcclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVG9hc3QgPSBmdW5jdGlvbihtYWluKSB7XHJcblx0LyoqIERlZmF1bHQgdG9hc3QgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzICovXHJcblx0dGhpcy5kZWZhdWx0RHVyYXRpb24gPSAyMDAwO1xyXG5cclxuXHQvKiogSW50ZXItdG9hc3QgZGVsYXkgdGltZSBpbiBtaWxsaXNlY29uZHMgKi9cclxuXHR0aGlzLmludGVyVG9hc3REZWxheSA9IDUwMDtcclxuXHJcbiAgICBsZXQgbWVzc2FnZXMgPSBbXTsgIC8vIFBlbmRpbmcgbWVzc2FnZXNcclxuICAgIGxldCBhY3RpdmUgPSBmYWxzZTsgLy8gSXMgdGhlcmUgYW4gYWN0aXZlIG1lc3NhZ2UgZGlzcGxheWluZz9cclxuXHJcblx0bGV0IGVsZW1lbnQgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgdGhlIHRvYXN0IGRpdlxyXG5cdCAqIEBwYXJhbSBkaXYgRGl2IHRvIHB1dCB0aGUgdG9hc3QgaW50b1xyXG5cdCAqL1xyXG4gICAgdGhpcy5jcmVhdGUgPSAoZGl2KSA9PiB7XHJcblx0XHRlbGVtZW50ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdigndG9hc3QnKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcblx0XHRlbGVtZW50LmlubmVySFRNTCA9ICd0ZXN0aW5nJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xyXG4gICAgXHRpZihtZXNzYWdlcy5sZW5ndGggPiAwICYmICFhY3RpdmUpIHtcclxuXHRcdCAgICAvLyBTZXQgdGhlIG1lc3NhZ2VcclxuXHRcdCAgICBsZXQgbWVzc2FnZSA9IG1lc3NhZ2VzWzBdO1xyXG4gICAgICAgICAgICBtZXNzYWdlcy5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gbWVzc2FnZS5tc2c7XHJcblxyXG4gICAgICAgICAgICAvLyBTaG93IGl0XHJcblx0XHQgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2FzdC1hY3RpdmUnKTtcclxuXHRcdCAgICBhY3RpdmUgPSB0cnVlO1xyXG5cclxuXHRcdCAgICAvLyBEZWxheSB3aGlsZSBhY3RpdmVcclxuXHRcdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdCAgICBcdC8vIEhpZGUgaXRcclxuXHRcdFx0ICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndG9hc3QtYWN0aXZlJyk7XHJcblxyXG5cdFx0XHQgICAgLy8gRGVsYXkgYmV0d2VlbiB0b2FzdHNcclxuXHRcdFx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHQgICAgXHRhY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0ICAgIFx0c2hvdygpO1xyXG5cdFx0XHQgICAgfSwgdGhpcy5pbnRlclRvYXN0RGVsYXkpXHJcblx0XHQgICAgfSwgbWVzc2FnZS50aW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERpc3BsYXkgYSB0b2FzdCBtZXNzYWdlXHJcblx0ICogQHBhcmFtIG1zZyBNZXNzYWdlIHRvIGRpc3BsYXlcclxuXHQgKiBAcGFyYW0gdGltZSBUaW1lIHRvIGRpc3BsYXkgaW4gbWlsbGlzZWNvbmRzLCBvbWl0IGZvciBkZWZhdWx0XHJcblx0ICovXHJcblx0dGhpcy5tZXNzYWdlID0gZnVuY3Rpb24obXNnLCB0aW1lKSB7XHJcbiAgICAgICAgaWYodGltZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRpbWUgPSB0aGlzLmRlZmF1bHREdXJhdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lc3NhZ2VzLnB1c2goe21zZzogbXNnLCB0aW1lOiB0aW1lfSk7XHJcbiAgICAgICAgc2hvdygpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBEaXNwbGF5IGFueSBKU09OIGVycm9ycyB3ZSBoYXZlIHJlY2VpdmVkLlxyXG5cdCAqIEBwYXJhbSBqc29uQXBpIEpzb25BUEkgb2JqZWN0XHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgYW55IGVycm9ycyBleGlzdGVkLlxyXG5cdCAqL1xyXG5cdHRoaXMuanNvbkVycm9ycyA9IGZ1bmN0aW9uKGpzb25BcGkpIHtcclxuICAgICAgICBpZihqc29uQXBpLmVycm9ycygpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGpzb25BcGkuZXJyb3JzKCkuZm9yRWFjaCgoZXJyb3IpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UoJ1NlcnZlciBFcnJvcjogJyArIGVycm9yLnRpdGxlLCA1MDAwKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IFJlc2l6ZXIgZnJvbSAncmVzaXplci1jbCc7XHJcblxyXG5pbXBvcnQge01lbnV9IGZyb20gJy4vTWVudSc7XHJcbmltcG9ydCB7VG9hc3R9IGZyb20gJy4vR3JhcGhpY3MvVG9hc3QnO1xyXG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuL1VJL0RyYWdBbmREcm9wJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSAnLi9ET00vVG9vbHMnO1xyXG5pbXBvcnQge1BhbmV9IGZyb20gXCIuL1BhbmVcIjtcclxuXHJcblxyXG4vKipcclxuICogQWN0dWFsIGluc3RhbmNlIG9mIHRoZSBQbGF5Z3JvdW5kIGZvciBhIHNpbmdsZSBlbGVtZW50LlxyXG4gKiBAcGFyYW0gcGxheWdyb3VuZCBUaGUgbWFpbiBQbGF5Z3JvdW5kIG9iamVjdFxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHdlIGFyZSBsb2FkaW5nIGludG9cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWFpbiA9IGZ1bmN0aW9uKHBsYXlncm91bmQsIGVsZW1lbnQpIHtcclxuICAgIHRoaXMucGxheWdyb3VuZCA9IHBsYXlncm91bmQ7XHJcbiAgICB0aGlzLnNpdGUgPSBwbGF5Z3JvdW5kLnNpdGU7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5vcHRpb25zID0gcGxheWdyb3VuZC5vcHRpb25zO1xyXG5cclxuICAgIC8vLyBkaXYubWFpblxyXG4gICAgdGhpcy5kaXYgPSBudWxsO1xyXG5cclxuICAgIGxldCBvcHRpb25zID0gcGxheWdyb3VuZC5vcHRpb25zO1xyXG5cclxuICAgIC8vLyBSZWZlcmVuY2VzIHRvIG90aGVyIEdVSSBjb21wb25lbnRzXHJcbiAgICBsZXQgbWVudT1udWxsLCB0YWJzPW51bGw7XHJcblxyXG4gICAgLy8vIGRpdi5vdmVybGF5XHJcbiAgICBsZXQgZGl2T3ZlcmxheSA9IG51bGwsIGRpdldvcms9bnVsbDtcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZCcpO1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG5cdCAgICBpZihvcHRpb25zLmhlaWdodCAhPT0gbnVsbCkge1xyXG5cdFx0ICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XHJcblx0ICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoKG9wdGlvbnMuZGlzcGxheSkge1xyXG4gICAgICAgICAgICBjYXNlICdmdWxsJzpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1mdWxsJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcblx0ICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLXdpbmRvdycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvcHRpb25zLmRpc3BsYXkgPT09ICd3aW5kb3cnKSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEFkZCByZXNpemVyIHRvIHRoZSB3aW5kb3cgaWYgaW4gd2luZG93IG1vZGVcclxuICAgICAgICAgICAgLy8gYW5kIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGFkZGVkXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGlmKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInJlc2l6ZXJcIikpIHtcclxuICAgICAgICAgICAgICAgIG5ldyBSZXNpemVyKGVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGU6ICcxMHB4IHNvbGlkICMxODQ1M0InXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kcmFnQW5kRHJvcCA9IG5ldyBEcmFnQW5kRHJvcCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBDcmVhdGUgYW5kIGFkZCB0aGUgd2luZG93IGNvbXBvbmVudHNcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmKG9wdGlvbnMuZGlzcGxheSAhPT0gJ2lubGluZScgJiYgb3B0aW9ucy5kaXNwbGF5ICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQWxsIHdpbmRvdy1iYXNlZCB2ZXJzaW9ucyBvdGhlciB0aGFuIGlubGluZSBnZXQgdGhlXHJcbiAgICAgICAgICAgIC8vIGZ1bGwgdXNlciBpbnRlcmZhY2VcclxuICAgICAgICAgICAgLy9cclxuXHJcbiAgICAgICAgICAgIC8vIDxkaXYgY2xhc3M9XCJtYWluXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIHRoaXMuZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtcGctbWFpbicpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kaXYpO1xyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQWRkIHRoZSBtZW51XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIG1lbnUgPSBuZXcgTWVudSh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5tZW51ID0gbWVudTtcclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFdvcmtpbmcgYXJlYVxyXG4gICAgICAgICAgICAvLyA8ZGl2IGNsYXNzPVwid29ya1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBkaXZXb3JrID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignd29yaycpO1xyXG4gICAgICAgICAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZChkaXZXb3JrKTtcclxuXHJcblxyXG5cdFx0XHQvL1xyXG5cdCAgICAgICAgLy8gQW5kIHRoZSByb290IHBhbmVcclxuXHQgICAgICAgIC8vXHJcblx0ICAgICAgICB0aGlzLnJvb3RQYW5lID0gbmV3IFBhbmUodGhpcywgZGl2V29yaywgbnVsbCwgbnVsbCk7XHJcblx0ICAgICAgICB0aGlzLnJvb3RQYW5lLmxvYWQob3B0aW9ucy5wYW5lKTtcclxuXHJcblx0ICAgICAgICAvL1xyXG5cdCAgICAgICAgLy8gQW5kIHRoZSBvdmVybGF5XHJcblx0ICAgICAgICAvLyA8ZGl2IGNsYXNzPVwiY2lyc2ltLW92ZXJsYXlcIj48L2Rpdj5cclxuXHQgICAgICAgIC8vXHJcblx0ICAgICAgICBkaXZPdmVybGF5ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtcGctb3ZlcmxheScpO1xyXG5cdCAgICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQoZGl2T3ZlcmxheSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvYXN0ID0gbmV3IFRvYXN0KHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnRvYXN0LmNyZWF0ZSh0aGlzLmRpdik7XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBBbnkgZGF0YSB0byBsb2FkP1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLmxvYWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsb2FkID0gb3B0aW9ucy5sb2FkO1xyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIGxvYWQgPT09ICdzdHJpbmcnIHx8IGxvYWQgaW5zdGFuY2VvZiBTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkID0gSlNPTi5wYXJzZShsb2FkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgdGFnIGluIGxvYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWIgPSB0aGlzLmdldFRhYih0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRhYiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWIuc2V0KGxvYWRbdGFnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldFRhYiA9IGZ1bmN0aW9uKHRhZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvb3RQYW5lLmdldFRhYih0YWcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuZXZlciBhIG5ldyB0YWIgaXMgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgdGhpcy5uZXdUYWIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBvciBjbGVhciBpbnRlcmZhY2UgbW9kYWwgc3RhdGUuXHJcbiAgICAgKiBAcGFyYW0gbW9kYWwgVHJ1ZSBzZXRzIGludGVyZmFjZSB0byBtb2RhbCBzdGF0ZS5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHRoaXMubW9kYWwgPSBmdW5jdGlvbihtb2RhbCkge1xyXG4gICAgICAgIGlmKG1vZGFsKSB7XHJcbiAgICAgICAgICAgIGRpdk92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGl2T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbn1cclxuIiwiaW1wb3J0IHtUb29sc30gZnJvbSAnLi9ET00vVG9vbHMnO1xyXG5cclxuLy8gaW1wb3J0IHtGaWxlTWVudX0gZnJvbSAnLi9NZW51cy9GaWxlTWVudSc7XHJcbi8vIGltcG9ydCB7RWRpdE1lbnV9IGZyb20gJy4vTWVudXMvRWRpdE1lbnUnO1xyXG4vLyBpbXBvcnQge1RhYnNNZW51fSBmcm9tICcuL01lbnVzL1RhYnNNZW51JztcclxuLy8gaW1wb3J0IHtIZWxwTWVudX0gZnJvbSAnLi9NZW51cy9IZWxwTWVudSc7XHJcblxyXG4vKipcclxuICogVGhlIHByb2dyYW0gbWVudSBiYXJcclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWVudSA9IGZ1bmN0aW9uKG1haW4pIHtcclxuXHRjb25zdCBvcHRpb25zID0gbWFpbi5vcHRpb25zO1xyXG5cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gQ3JlYXRlIHRoZSBtZW51IGNvbXBvbmVudHNcclxuICAgIC8vXHJcbiAgICAvLyB2YXIgZmlsZU1lbnUgPSBuZXcgRmlsZU1lbnUodGhpcywgbWFpbik7XHJcbiAgICAvLyB2YXIgZWRpdE1lbnUgPSBuZXcgRWRpdE1lbnUodGhpcywgbWFpbik7XHJcbiAgICAvLyB2YXIgdGFic01lbnUgPSBuZXcgVGFic01lbnUodGhpcywgbWFpbik7XHJcbiAgICAvLyB2YXIgaGVscE1lbnUgPSBuZXcgSGVscE1lbnUodGhpcywgbWFpbik7XHJcblxyXG4gICAgLy8vIFRoZSBuYXYgZWxlbWVudFxyXG4gICAgdGhpcy5uYXYgPSBudWxsO1xyXG4gICAgdGhpcy51bCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIDxuYXYgY2xhc3M9XCJtZW51YmFyXCI+PHVsPjwvdWw+PC9uYXY+XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzKHRoaXMubmF2LCAnY2wtcGctbWVudWJhcicpO1xyXG4gICAgICAgIG1haW4uZGl2LmFwcGVuZENoaWxkKHRoaXMubmF2KTtcclxuXHJcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIHRoaXMubmF2LmFwcGVuZENoaWxkKHVsKTtcclxuICAgICAgICB0aGlzLnVsID0gdWw7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVzID0gb3B0aW9ucy5tZW51cztcclxuICAgICAgICBtZW51cy5wdXNoKHtcclxuXHQgICAgICAgIG5hbWU6ICdIZWxwJyxcclxuXHQgICAgICAgIG1lbnVzOiBbXHJcblx0XHQgICAgICAgIHtuYW1lOiAnQWJvdXQnLCBhY3Rpb246IHt0YWc6ICdhYm91dCd9fVxyXG5cdCAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmb3IoY29uc3QgbWVudSBvZiBtZW51cykge1xyXG4gICAgICAgIFx0Y29uc3QgdG9wTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIFx0dWwuYXBwZW5kQ2hpbGQodG9wTEkpO1xyXG5cclxuICAgICAgICBcdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgXHR0b3BMSS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICBcdGEuaW5uZXJUZXh0ID0gbWVudS5uYW1lO1xyXG5cclxuICAgICAgICBcdGlmKG1lbnUuYWN0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBcdFx0Ly8gVG9wIGxldmVsIG9ubHkgbWVudVxyXG4gICAgICAgIFx0XHRjb25zdCBhY3Rpb24gPSBtYWluLnBsYXlncm91bmQuZ2V0QWN0aW9uKG1lbnUuYWN0aW9uKTtcclxuXHRcdCAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgW2EsIHRvcExJXSkge1xyXG5cdFx0ICAgICAgICBcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0XHQgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0ICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHQgICAgICAgIGFjdGlvbi5kbyhtYWluKTtcclxuXHRcdFx0ICAgICAgICB9KTtcclxuXHRcdCAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIGlmKG1lbnUubWVudXMgIT09IHVuZGVmaW5lZCkge1xyXG5cdCAgICAgICAgXHQvLyBQdWxsLWRvd24gbWVudVxyXG5cdCAgICAgICAgXHRjb25zdCBzdWJVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblx0ICAgICAgICBcdHRvcExJLmFwcGVuZENoaWxkKHN1YlVMKTtcclxuXHJcblx0ICAgICAgICBcdGZvcihjb25zdCBlbGVtZW50IG9mIFthLCB0b3BMSV0pIHtcclxuXHRcdFx0ICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0ICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdCAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0XHRcdCAgICAgICAgaWYoZ2V0Q29tcHV0ZWRTdHlsZShzdWJVTCkuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAnaGlkZGVuJykge1xyXG5cdFx0XHRcdFx0ICAgICAgICBvcGVuKHRvcExJKTtcclxuXHRcdFx0XHQgICAgICAgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHQgICAgICAgIC8vIElmIGFscmVhZHkgb3BlbiwgY2xvc2UgYWxsXHJcblx0XHRcdFx0XHQgICAgICAgIHRoaXMuY2xvc2VBbGwoKTtcclxuXHRcdFx0XHQgICAgICAgIH1cclxuXHJcblx0XHRcdCAgICAgICAgfSk7XHJcblx0XHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBcdGZvcihjb25zdCBzdWJNZW51IG9mIG1lbnUubWVudXMpIHtcclxuXHRcdFx0ICAgICAgICBjb25zdCBzdWJMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0XHRcdCAgICAgICAgc3ViVUwuYXBwZW5kQ2hpbGQoc3ViTEkpO1xyXG5cclxuXHRcdFx0ICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cdFx0XHQgICAgICAgIHN1YkxJLmFwcGVuZENoaWxkKGEpO1xyXG5cdFx0XHQgICAgICAgIGEuaW5uZXJUZXh0ID0gc3ViTWVudS5uYW1lO1xyXG5cclxuXHRcdFx0ICAgICAgICBpZihzdWJNZW51LmFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0ICAgICAgICAvLyBUb3AgbGV2ZWwgb25seSBtZW51XHJcblx0XHRcdFx0ICAgICAgICBjb25zdCBhY3Rpb24gPSBtYWluLnBsYXlncm91bmQuZ2V0QWN0aW9uKHN1Yk1lbnUuYWN0aW9uKTtcclxuXHRcdFx0XHQgICAgICAgIGlmKGFjdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0ICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBbYSwgdG9wTEldKSB7XHJcblx0XHRcdFx0XHRcdCAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgdGhpcy5jbG9zZUFsbCgpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgYWN0aW9uLmRvKG1haW4pO1xyXG5cdFx0XHRcdFx0XHQgICAgICAgIH0pO1xyXG5cdFx0XHRcdFx0ICAgICAgICB9XHJcblx0XHRcdFx0ICAgICAgICB9XHJcblxyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdCAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gQWRkIHRoZSBtZW51IGNvbXBvbmVudCdzIEhUTUxcclxuICAgICAgICAvL1xyXG5cdCAgICAvLyBsZXQgaHRtbCA9ICcnO1xyXG5cclxuXHQgICAgLy8gaHRtbCArPSBmaWxlTWVudS5odG1sKCk7XHJcbiAgICAgICAgLy8gaHRtbCArPSBlZGl0TWVudS5odG1sKCk7XHJcbiAgICAgICAgLy8gaHRtbCArPSB0YWJzTWVudS5odG1sKCk7XHJcbiAgICAgICAgLy8gaHRtbCArPSBoZWxwTWVudS5odG1sKCk7XHJcblxyXG4gICAgICAgIC8vIHVsLmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG4gICAgICAgIC8vXHJcblx0ICAgIC8vIE1lbnUgb3B0aW9uIGZvciB0ZXN0aW5nIHRoZSBUb2FzdCBlcnJvciByZXBvcnRpbmcgbWVjaGFuaXNtXHJcblx0ICAgIC8vXHJcblxyXG5cdCAgICAvLyBodG1sICs9IGA8bGk+PGEgY2xhc3M9XCJ0b2FzdC10ZXN0XCI+VG9hc3QhPC9hPjwvbGk+YDtcclxuXHQgICAgLy8gdWwuaW5uZXJIVE1MID0gaHRtbDtcclxuXHRcdC8vXHJcblx0ICAgIC8vIHRoaXMudG9hc3RzID0gMDtcclxuICAgICAgICAvLyB0aGlzLmNsaWNrKCcudG9hc3QtdGVzdCcsIChldmVudCk9PiB7XHJcbiAgICAgICAgLy8gXHR0aGlzLnRvYXN0cysrO1xyXG4gICAgICAgIC8vIFx0bWFpbi50b2FzdC5tZXNzYWdlKCdUb2FzdCBtZXNzYWdlICcgKyB0aGlzLnRvYXN0cyk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gSW5zdGFsbCBjbGljayBoYW5kbGVycyBmb3IgYWxsIHRvcC1sZXZlbCBtZW51c1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gZm9yKGNvbnN0IG5vZGUgb2YgdWwuY2hpbGROb2Rlcykge1xyXG4gICAgICAgIC8vICAgICBpZihub2RlLnRhZ05hbWUgPT09ICdMSScpIHtcclxuICAgICAgICAvLyAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Ly9cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBGaW5kIHRoZSA8dWw+IGluIHRoaXMgbWVudVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCB1bFN1YiA9IFRvb2xzLmNoaWxkKG5vZGUsICdVTCcpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKHVsU3ViICE9PSBudWxsKSB7XHJcblx0ICAgIC8vICAgICAgICAgICAgICAgICBpZihnZXRDb21wdXRlZFN0eWxlKHVsU3ViKS5nZXRQcm9wZXJ0eVZhbHVlKCd2aXNpYmlsaXR5JykgPT09ICdoaWRkZW4nKSB7XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgIG9wZW4obm9kZSk7XHJcblx0ICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIElmIGFscmVhZHkgb3BlbiwgY2xvc2UgYWxsXHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VBbGwoKTtcclxuXHQgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gQWN0aXZhdGUgYWxsIG9mIHRoZSBtZW51c1xyXG4gICAgICAgIC8vIGZpbGVNZW51LmFjdGl2YXRlKCk7XHJcbiAgICAgICAgLy8gZWRpdE1lbnUuYWN0aXZhdGUoKTtcclxuICAgICAgICAvLyB0YWJzTWVudS5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIC8vIGhlbHBNZW51LmFjdGl2YXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogTGlzdGVuIHRvIGtleSBkb3duIGV2ZW50cyBzbyB3ZSBjYW4gY2xvc2UgdGhlIG1lbnVcclxuICAgICAqIGlmIHdlIGNsaWNrIG91dHNpZGUgb2YgdGhlIG1lbnUgd2hpbGUgaXQgaXMgb3Blbi5cclxuXHQgKiBAcGFyYW0gZXZlbnRcclxuXHQgKi9cclxuXHRjb25zdCBjbG9zZUxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gU2VlIGlmIHdlIGNsaWNrZWQgb24gc29tZSBjaGlsZCBvZiBuYXYuLi5cclxuICAgICAgICBsZXQgbm9kZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgIGZvciggOyBub2RlICE9PSBudWxsOyBub2RlID0gbm9kZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgIGlmKG5vZGUgPT09IHRoaXMubmF2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cdCAgICB0aGlzLmNsb3NlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3BlbiBhIG1lbnVcclxuICAgIGNvbnN0IG9wZW4gPSAobGkpID0+IHtcclxuICAgICAgICAvLyBIaWRlIGFueSBvdGhlciBtZW51c1xyXG4gICAgICAgIGZvcihjb25zdCBub2RlIG9mIHRoaXMudWwuY2hpbGROb2Rlcykge1xyXG4gICAgICAgICAgICBpZihub2RlLnRhZ05hbWUgPT09ICdMSScpIHtcclxuXHQgICAgICAgICAgICBjb25zdCB1bCA9IFRvb2xzLmNoaWxkKG5vZGUsICdVTCcpO1xyXG4gICAgICAgICAgICAgICAgaWYodWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgIC8vIFRvb2xzLnJlbW92ZUNsYXNzKHVsLCAnY2wtcGctbWVudS1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cdCAgICAvLyBBbmQgb3BlbiB0aGlzIG1lbnVcclxuXHQgICAgY29uc3QgdWwgPSBUb29scy5jaGlsZChsaSwgJ1VMJyk7XHJcblx0ICAgIGlmKHVsICE9PSBudWxsKSB7XHJcblx0ICAgIFx0dWwuY2xhc3NMaXN0LmFkZCgnY2wtcGctbWVudS1vcGVuJyk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENsb3NlIGFsbCBtZW51cyAqL1xyXG4gICAgdGhpcy5jbG9zZUFsbCA9ICgpID0+IHtcclxuXHQgICAgZm9yKGNvbnN0IG5vZGUgb2YgdGhpcy51bC5jaGlsZE5vZGVzKSB7XHJcblx0XHQgICAgaWYobm9kZS50YWdOYW1lID09PSAnTEknKSB7XHJcblx0XHRcdCAgICBjb25zdCB1bCA9IFRvb2xzLmNoaWxkKG5vZGUsICdVTCcpO1xyXG5cdFx0XHQgICAgaWYodWwgIT09IG51bGwpIHtcclxuXHRcdFx0XHQgICAgVG9vbHMucmVtb3ZlQ2xhc3ModWwsICdjbC1wZy1tZW51LW9wZW4nKTtcclxuXHRcdFx0ICAgIH1cclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjbG9zZUxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBFbmFibGUgb3IgZGlzYWJsZSBhIG1lbnUgb3B0aW9uIGJ5IHNlbGVjdG9yXHJcblx0ICogQHBhcmFtIHNlbCBTZWxlY3RvciBmb3IgdGhlIG1lbnUgb3B0aW9uIChsaWtlICcudGFicy1hZGQnKVxyXG5cdCAqIEBwYXJhbSBlbmFibGUgVHJ1ZSB0byBlbmFibGVcclxuXHQgKi9cclxuXHR0aGlzLmVuYWJsZSA9IChzZWwsIGVuYWJsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnVsLnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcclxuICAgICAgICBpZihlbGVtZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGVuYWJsZSkge1xyXG4gICAgICAgICAgICBUb29scy5yZW1vdmVDbGFzcyhlbGVtZW50LnBhcmVudE5vZGUsIFwibWVudS1kaXNhYmxlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5hZGRDbGFzcyhlbGVtZW50LnBhcmVudE5vZGUsIFwibWVudS1kaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHQvKipcclxuICAgICAqIEZpbmQgYSBtZW51IG9wdGlvbiBieSBzZWxlY3RvclxyXG5cdCAqIEBwYXJhbSBzZWxcclxuXHQgKiBAcmV0dXJucyB7RWxlbWVudH1cclxuXHQgKi9cclxuXHR0aGlzLmZpbmQgPSAoc2VsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudWwucXVlcnlTZWxlY3RvcihzZWwpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIEluc3RhbGwgYSBtZW51IG9wdGlvbiBjbGljayBoYW5kZXJcclxuXHQgKiBAcGFyYW0gc2VsIFNlbGVjdG9yIGZvciB0aGUgbWVudSBvcHRpb25cclxuXHQgKiBAcGFyYW0gY2xvc3VyZSBUaGUgY2xvc3VyZSB0byBjYWxsIChwYXNzZXMgJ2V2ZW50JylcclxuXHQgKi9cclxuXHR0aGlzLmNsaWNrID0gKHNlbCwgY2xvc3VyZSkgPT4ge1xyXG5cdCAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5maW5kKHNlbCk7XHJcblx0ICAgIGlmKGVsZW1lbnQgIT09IG51bGwpIHtcclxuXHQgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHQgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCAgICAgICAgICAgIHRoaXMuY2xvc2VBbGwoKTtcclxuXHQgICAgICAgICAgICBjbG9zdXJlKGV2ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKTtcclxufTtcclxuIiwiLyoqXHJcbiAqIFBsYXlncm91bmQgb3B0aW9ucy5cclxuICogQHBhcmFtIG9wdGlvbnMgVXNlciBwcm92aWRlZCBvcHRpb25zIHRoYXQgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdmFsdWVzLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBvcHRpb25zIDoge307XHJcblxyXG4gICAgLy8vIERpc3BsYXkgb3B0aW9uc1xyXG4gICAgLy8vIHdpbmRvdyAtIERpc3BsYXlzIGFzIGEgc3RhbmRhcmQgZGl2IChkZWZhdWx0KVxyXG4gICAgdGhpcy5kaXNwbGF5ID0gJ3dpbmRvdyc7XHJcblxyXG4gICAgLy8vIE9wdGlvbmFsIGhlaWdodCBzZXR0aW5nXHJcbiAgICB0aGlzLmhlaWdodCA9IG51bGw7XHJcblxyXG4gICAgLy8vIFRoZSBwbGF5Z3JvdW5kIHJvb3QgcGFuZVxyXG4gICAgdGhpcy5wYW5lID0ge307XHJcblxyXG4gICAgLy8vIFRoZSB0b3AtbGV2ZWwgbWVudSBvcHRpb25zXHJcbiAgICB0aGlzLm1lbnVzID0gW3tuYW1lOiAnQWJvdXQnfV07XHJcblxyXG4gICAgLy8vIENvbnRlbnQgdG8gaW5pdGlhbGx5IGxvYWQgaW50byB0aGUgdGFic1xyXG4gICAgdGhpcy5sb2FkID0gbnVsbDtcclxuXHJcblxyXG4gICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbiBcIiArIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgQVBJIG9wZXJhdGlvbnMgZm9yIGEgZ2l2ZW4gZmlsZSBtb2RlLlxyXG4gICAgICogQHBhcmFtIG1vZGUgJ3NhdmUnLCAnb3BlbidcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmdldEFQSSA9IGZ1bmN0aW9uKG1vZGUpIHtcclxuICAgICAgICBpZih0aGlzLmFwaSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYXBpID09PSBPYmplY3QodGhpcy5hcGkpKSB7XHJcbiAgICAgICAgICAgIGxldCBvYmo7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmFwaVttb2RlXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiBcclxuICAgICAgICAgICAgICAgIC8vIE1vZGUgaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcclxuICAgICAgICAgICAgICAgIHZhciBtb2RlT2JqID0gdGhpcy5hcGlbbW9kZV07XHJcbiAgICAgICAgICAgICAgICBpZihtb2RlT2JqLnVybCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTW9kZSBpcyBub3Qgc3VwcG9ydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2VuZCBjb250ZW50IHR5cGVcclxuICAgICAgICAgICAgICAgIG9iaiA9IHt1cmw6IG1vZGVPYmoudXJsfTtcclxuICAgICAgICAgICAgICAgIGlmKG1vZGVPYmouY29udGVudFR5cGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5jb250ZW50VHlwZSA9IG1vZGVPYmouY29udGVudFR5cGU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5hcGkuY29udGVudFR5cGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5jb250ZW50VHlwZSA9IHRoaXMuYXBpLmNvbnRlbnRUeXBlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihtb2RlT2JqLmV4dHJhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSBtb2RlT2JqLmV4dHJhO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuYXBpLmV4dHJhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSB0aGlzLmFwaS5leHRyYTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoubmFtZSA9IG1vZGVPYmoubmFtZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmFwaS5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoubmFtZSA9IHRoaXMuYXBpLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFwaS51cmwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG9iaiA9IHt1cmw6IHRoaXMuYXBpLnVybH07XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFwaS5leHRyYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0gdGhpcy5hcGkuZXh0cmE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXBpLm5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5uYW1lID0gdGhpcy5hcGkubmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge3VybDogdGhpcy5hcGl9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1RhYnN9IGZyb20gJy4vVGFicyc7XHJcblxyXG4vKipcclxuICogQSBQYW5lIGlzIGFuIGFyZWEgb2YgdGhlIElERSBzY3JlZW4gdGhhdCBlaXRoZXIgY29udGFpbnMgYSB0YWIgc2V0IG9yIHR3byBjaGlsZCBwYW5lcy5cclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0aGF0IGlzIHRoZSBob3N0IGZvciB0aGUgcGFuZVxyXG4gKiBAcGFyYW0gcGFyZW50IFBhbmUgcGFyZW50IG9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBQYW5lID0gZnVuY3Rpb24obWFpbiwgZWxlbWVudCwgcGFyZW50KSB7XHJcblx0dGhpcy5taW5TcGxpdCA9IDEwO1xyXG5cdHRoaXMubWF4U3BsaXQgPSA5MDtcclxuXHJcblx0bGV0IGRpdiA9IG51bGwsIGNoaWxkMSA9IG51bGwsIGNoaWxkMiA9IG51bGw7XHJcblx0bGV0IGhvcml6b250YWxTcGxpdCA9IG51bGw7XHJcblx0bGV0IHRhYnMgPSBudWxsO1xyXG5cclxuXHRjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG5cdFx0Ly9cclxuXHRcdC8vIENyZWF0ZSBhbmQgYWRkIHRoZSBkaXZcclxuXHRcdC8vXHJcblxyXG5cdFx0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmRpdiA9IGRpdjtcclxuXHJcblx0XHRpZihwYXJlbnQgPT09IG51bGwpIHtcclxuXHRcdFx0ZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtcm9vdCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcblx0XHQvLyBpZihkb25vclRhYnMgIT09IG51bGwpIHtcclxuXHRcdC8vIFx0dGFicyA9IGRvbm9yVGFicztcclxuXHRcdC8vIFx0dGFicy5uZXdQYXJlbnQodGhpcyk7XHJcblx0XHQvLyB9IGVsc2Uge1xyXG5cdFx0Ly8gXHR0YWJzID0gbmV3IFRhYnMobWFpbiwgZGl2KTtcclxuXHRcdC8vIH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIExvYWQgdGhlIHBhbmUgZnJvbSB0aGUgZGF0YVxyXG5cdCAqIEBwYXJhbSBkYXRhIERhdGEgZnJvbSBvcHRpb25zIGZvciB0aGlzIHBhbmVcclxuXHQgKi9cclxuXHR0aGlzLmxvYWQgPSBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRpZihkYXRhLmNoaWxkMSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdC8vIFRoaXMgaXMgYSBzcGxpdCBwYW5lXHJcblx0XHRcdHRoaXMuc3BsaXQoZGF0YS5ob3JpeiwgZGF0YS5jaGlsZDEsIGRhdGEuY2hpbGQyKTtcclxuXHRcdFx0dGhpcy5wZXJjZW50YWdlKGRhdGEucGVyY2VudGFnZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0YWJzID0gbmV3IFRhYnMobWFpbiwgZGl2KTtcclxuXHRcdFx0dGFicy5sb2FkKGRhdGEudGFicyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0aGlzLnNwbGl0ID0gZnVuY3Rpb24oaG9yaXpvbnRhbCwgY2hpbGQxRGF0YSwgY2hpbGQyRGF0YSkge1xyXG5cdFx0aG9yaXpvbnRhbFNwbGl0ID0gaG9yaXpvbnRhbDtcclxuXHJcblx0XHRjaGlsZDEgPSBuZXcgUGFuZShtYWluLCBkaXYsIHRoaXMsIHRhYnMpO1xyXG5cdFx0Y2hpbGQyID0gbmV3IFBhbmUobWFpbiwgZGl2LCB0aGlzLCBudWxsKTtcclxuXHJcblx0XHR0YWJzID0gbnVsbDtcclxuXHJcblx0XHRpZihob3Jpem9udGFsKSB7XHJcblx0XHRcdGNoaWxkMS5kaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1sZWZ0Jyk7XHJcblx0XHRcdGNoaWxkMi5kaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1yaWdodCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGl2LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcclxuXHRcdFx0Y2hpbGQxLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLXRvcCcpO1xyXG5cdFx0XHRjaGlsZDIuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtYm90dG9tJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRiYXIuY2xhc3NMaXN0LmFkZCgnY2wtYmFyJyk7XHJcblx0XHRjaGlsZDEuZGl2LmFwcGVuZENoaWxkKGJhcik7XHJcblxyXG5cdFx0YmFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRzdGFydERyYWdnaW5nKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblxyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZSk7XHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0YmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKGV2ZW50KTtcclxuXHJcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRzdGFydERyYWdnaW5nKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblxyXG5cclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmUpO1xyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmQpO1xyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hDYW5jZWwpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5jaGlsZDEgPSBjaGlsZDE7XHJcblx0XHR0aGlzLmNoaWxkMiA9IGNoaWxkMjtcclxuXHJcblx0XHR0aGlzLnBlcmNlbnRhZ2UoNTApO1xyXG5cclxuXHRcdGlmKGNoaWxkMURhdGEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRjaGlsZDEubG9hZChjaGlsZDFEYXRhKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihjaGlsZDJEYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0Y2hpbGQyLmxvYWQoY2hpbGQyRGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtjaGlsZDE6IGNoaWxkMSwgY2hpbGQyOiBjaGlsZDJ9O1xyXG5cdH1cclxuXHJcblx0bGV0IHN0YXJ0WCA9IG51bGwsIHN0YXJ0WSA9IG51bGw7XHJcblxyXG5cdGNvbnN0IHN0YXJ0RHJhZ2dpbmcgPSAoeCwgeSkgPT4ge1xyXG5cdFx0c3RhcnRYID0geDtcclxuXHRcdHN0YXJ0WSA9IHk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBlbmREcmFnZ2luZyA9ICgpID0+IHtcclxuXHRcdHN0YXJ0WCA9IG51bGw7XHJcblx0XHRzdGFydFkgPSBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbnN0IGRyYWdnaW5nID0gKHgsIHkpID0+IHtcclxuXHRcdGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHJcblx0XHRpZihob3Jpem9udGFsU3BsaXQpIHtcclxuXHRcdFx0Y29uc3QgbWFpblggPSByZWN0LmxlZnQgKyBlbGVtZW50LnNjcm9sbExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQ7XHJcblx0XHRcdGNvbnN0IHdpZCA9IHJlY3QucmlnaHQgLSByZWN0LmxlZnQ7XHJcblx0XHRcdGlmKHdpZCA8PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBwZXIgPSAoeCAtIG1haW5YKSAvIHdpZCAqIDEwMDtcclxuXHRcdFx0dGhpcy5wZXJjZW50YWdlKHBlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBtYWluWSA9IHJlY3QudG9wICArIGVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0Y29uc3QgaGl0ID0gcmVjdC5ib3R0b20gLSByZWN0LnRvcDtcclxuXHRcdFx0aWYoaGl0IDw9IDApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHBlciA9ICh5IC0gbWFpblkpIC8gaGl0ICogMTAwO1xyXG5cdFx0XHR0aGlzLnBlcmNlbnRhZ2UocGVyKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRpZihldmVudC53aGljaCA9PT0gMCkge1xyXG5cdFx0XHRtb3VzZVVwKGV2ZW50KTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGRyYWdnaW5nKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3VzZVVwID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmUpO1xyXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcCk7XHJcblx0XHRlbmREcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdG91Y2hNb3ZlICA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0ZHJhZ2dpbmcodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHRvdWNoRW5kID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRkcmFnZ2luZyh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cclxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2hNb3ZlKTtcclxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEVuZCk7XHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hDYW5jZWwpO1xyXG5cclxuXHRcdGVuZERyYWdnaW5nKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB0b3VjaENhbmNlbCA9IChldmVudCkgPT4ge1xyXG5cdFx0dG91Y2hFbmQoZXZlbnQpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5wZXJjZW50YWdlID0gZnVuY3Rpb24ocGVyKSB7XHJcblx0XHRpZihwZXIgPCB0aGlzLm1pblNwbGl0KSB7XHJcblx0XHRcdHBlciA9IHRoaXMubWluU3BsaXQ7XHJcblx0XHR9IGVsc2UgaWYocGVyID4gdGhpcy5tYXhTcGxpdCkge1xyXG5cdFx0XHRwZXIgPSB0aGlzLm1heFNwbGl0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGhvcml6b250YWxTcGxpdCkge1xyXG5cdFx0XHRjaGlsZDEuZGl2LnN0eWxlLndpZHRoID0gcGVyICsgJyUnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y2hpbGQxLmRpdi5zdHlsZS5oZWlnaHQgPSBwZXIgKyAnJSc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0aGlzLmdldFRhYiA9IGZ1bmN0aW9uKHRhZykge1xyXG5cdFx0Zm9yKGNvbnN0IGNvbGxlY3Rpb24gb2YgW3RhYnMsIGNoaWxkMSwgY2hpbGQyXSkge1xyXG5cdFx0XHRpZihjb2xsZWN0aW9uICE9PSBudWxsKSB7XHJcblx0XHRcdFx0bGV0IHRhYiA9IGNvbGxlY3Rpb24uZ2V0VGFiKHRhZyk7XHJcblx0XHRcdFx0aWYodGFiICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGFiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxufSIsImltcG9ydCB7TWFpbn0gZnJvbSAnLi9NYWluJztcclxuaW1wb3J0IHtPcHRpb25zfSBmcm9tICcuL09wdGlvbnMnO1xyXG5pbXBvcnQge1JlYWR5fSBmcm9tICcuL1V0aWxpdHkvUmVhZHknO1xyXG5pbXBvcnQge0FjdGlvbn0gZnJvbSAnLi9BY3Rpb25zL0FjdGlvbic7XHJcbmltcG9ydCB7QWxsQWN0aW9uc30gZnJvbSAnLi9BY3Rpb25zL0FsbEFjdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgUGxheWdyb3VuZFxyXG4gKlxyXG4gKiBUaGlzIGNyZWF0ZXMgYSBzaW5nbGUgSW5zdGFuY2UgdGhhdCBtYW5hZ2VzIHRoZVxyXG4gKiBjb21wb25lbnRzIGFuZCBzdGFydHMgYWN0dWFsIFBsYXlncm91bmQgd2luZG93cy5cclxuICpcclxuICogQ29uc3RydWN0IGFuZCBzdGFydCBydW5uaW5nIGxpa2UgdGhpczpcclxuICpcclxuICogR2l2ZW4gYW4gSFRNTCBkaXY6XHJcbiAqICAgICA8ZGl2IGlkPVwicGxheWdyb3VuZFwiPjwvZGl2PlxyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIHNjcmlwdCBzdGFydHMgUGxheWdyb3VuZCBpbiB0aGF0IGRpdjpcclxuICpcclxuICogICAgIHZhciBwbGF5Z3JvdW5kID0gbmV3IFBsYXlncm91bmQoJyNwbGF5Z3JvdW5kJyk7XHJcbiAqICAgICBwbGF5Z3JvdW5kLnN0YXJ0KCk7XHJcbiAqXHJcbiAqIEBwYXJhbSBzaXRlIFNpdGUgb2JqZWN0XHJcbiAqIEBwYXJhbSBzZWwgU2VsZWN0b3Igb3IgZWxlbWVudCB0byBjcmVhdGUgUGxheWdyb3VuZCBpbiAoY2FuIGJlIG1hbnkpXHJcbiAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCBjb250YWluaW5nIFBsYXlncm91bmQgb3B0aW9ucy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUGxheWdyb3VuZCA9IGZ1bmN0aW9uKHNpdGUsIHNlbCwgb3B0aW9ucykge1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBNYXN0ZXIgc2V0IG9mIHRoZSB2ZXJzaW9uXHJcbiAgICAvL1xyXG4gICAgbGV0IFBBQ0tBR0UgPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKTtcclxuICAgIHRoaXMudmVyc2lvbiA9IFBBQ0tBR0UudmVyc2lvbjtcclxuXHJcbiAgICB0aGlzLnNpdGUgPSBzaXRlO1xyXG5cclxuICAgIC8vIFJlY29yZCB0aGUgc2VsZWN0b3JcclxuICAgIHRoaXMuc2VsID0gc2VsO1xyXG5cclxuICAgIC8vIFRoZSBPcHRpb25zIG9iamVjdCB0aGF0IG1hbmFnZXMgdXNlciBvcHRpb25zXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcclxuXHJcbiAgICAvLyBBIGNvbGxlY3Rpb24gb2YgTWFpbiBvYmplY3RzLlxyXG4gICAgdmFyIG1haW5zID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCB0aGUgUGxheWdyb3VuZCBydW5uaW5nLCBjcmVhdGluZyB0aGUgdXNlciBpbnRlcmZhY2UuXHJcbiAgICAgKiBUaGlzIGRvZXMgd2FpdCBmb3IgZG9jdW1lbnQgcmVhZHkgYmVmb3JlIGNhbGxpbmdcclxuICAgICAqIHRoaXMuc3RhcnROb3coKSB1bmxlc3Mgd2UgYXJlIHJ1bm5pbmcgaW4gbm8td2luZG93XHJcbiAgICAgKiBtb2RlLiBJbiB0aGF0IGNhc2UgaXQgcmV0dXJucyBhIHN0YXJ0ZWQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc2VsID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0Tm93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZWFkeS5nbygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnROb3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHRoZSBQbGF5Z3JvdW5kIHJ1bm5pbmcgbm93LiBEb2VzIG5vdCB3YWl0IGZvciBkb2N1bWVudCByZWFkeS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5zdGFydE5vdyA9ICgpID0+IHtcclxuICAgICAgICBpZihzZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbih0aGlzLCBzZWwpO1xyXG4gICAgICAgICAgICBtYWlucy5wdXNoKG1haW4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFpbiA9IG5ldyBNYWluKHRoaXMsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgbWFpbnMucHVzaChtYWluKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobWFpbnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYWluc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYSBjb25zdHJ1Y3RlZCBBY3Rpb24gb2JqZWN0IGZyb20gdGhlIGF2YWlsYWJsZSBwbGF5Z3JvdW5kIGFjdGlvbnMuXHJcblx0ICogQHBhcmFtIGFjdGlvbiBUaGUgYWN0aW9uIGRhdGEgZnJvbSB0aGUgc2VydmVyLlxyXG5cdCAqIEByZXR1cm5zIEFjdGlvbiBvYmplY3RcclxuXHQgKi9cclxuXHR0aGlzLmdldEFjdGlvbiA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgXHRpZihQbGF5Z3JvdW5kLmFjdGlvbnNbYWN0aW9uLnRhZ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgXHRcdHJldHVybiBuZXcgKFBsYXlncm91bmQuYWN0aW9uc1thY3Rpb24udGFnXSkoc2l0ZSwgYWN0aW9uKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgY29uc29sZS5sb2coJ1BsYXlncm91bmQgYWN0aW9uICcgKyBhY3Rpb24udGFnICsgJyBkb2VzIG5vdCBleGlzdCcpO1xyXG5cdCAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuUGxheWdyb3VuZC5BY3Rpb24gPSBBY3Rpb247XHJcblxyXG5QbGF5Z3JvdW5kLmFjdGlvbnMgPSB7fTtcclxuXHJcblBsYXlncm91bmQuYWRkQWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uKSB7XHJcblx0dGhpcy5hY3Rpb25zW2FjdGlvbi50YWddID0gYWN0aW9uO1xyXG59XHJcblxyXG5BbGxBY3Rpb25zLmFkZEFsbChQbGF5Z3JvdW5kKTsiLCJpbXBvcnQge1Rvb2xzfSBmcm9tICcuL0RPTS9Ub29scyc7XHJcbmltcG9ydCB7T3V0cHV0VGFifSBmcm9tICcuL1RhYnMvT3V0cHV0VGFiJztcclxuaW1wb3J0IHtFZGl0b3JUYWJ9IGZyb20gJy4vVGFicy9FZGl0b3JUYWInO1xyXG5cclxuaW1wb3J0IG1lbnViYXJzIGZyb20gJy4uLy4uL2ltZy9tZW51YmFycy5wbmcnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBNYW5hZ2VzIHRoZSB0YWJzIGluIHRoZSBtb2RlbFxyXG4gKiBAcGFyYW0gbWFpbiBNYWluIG9iamVjdFxyXG4gKiBAcGFyYW0gZWxlbWVudCBQYXJlbnQgZWxlbWVudFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBUYWJzID0gZnVuY3Rpb24obWFpbiwgZWxlbWVudCkge1xyXG4gICAgLy8vIFRoZSBjdXJyZW50bHkgYWN0aXZlIHZpZXcvdGFiXHJcbiAgICB0aGlzLmFjdGl2ZSA9IC0xO1xyXG5cclxuICAgIC8vLyBUaGUgTWFpbiBvYmplY3RcclxuICAgIHRoaXMubWFpbiA9IG1haW47XHJcblxyXG4gICAgLy8vIFRoZSBTaXRlIG9iamVjdFxyXG4gICAgdGhpcy5zaXRlID0gbWFpbi5zaXRlO1xyXG5cclxuICAgIC8vIFRoZSBjb2xsZWN0aW9uIG9mIHRhYnNcclxuICAgIHZhciB0YWJzID0gW107XHJcblxyXG4gICAgLy9cclxuICAgIC8vIFRoZSBzdHJ1Y3R1cmU6IDxkaXYgY2xhc3M9XCJjbC10YWJzXCI+PHVsPjwvdWw+PGRpdiBjbGFzcz1cImNsLXZpZXdzXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAvLyBkaXYudGFicyAtIEVuY2xvc3VyZSBmb3IgYWxsIHRhYnMgY29udGVudFxyXG4gICAgLy8gdWwgLSBUaGUgdGFicyB3ZSBzZWxlY3QgZnJvbVxyXG4gICAgLy8gdmlld3NEaXYgLSBUaGUgdmlld3Mgd2l0aCB0aGUgdGFiIGNvbnRlbnRzXHJcbiAgICAvL1xyXG5cclxuICAgIGxldCB0YWJzRGl2ID0gbnVsbCwgdWwgPSBudWxsLCB2aWV3c0RpdiA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQ3JlYXRlIHRoZSB0YWJzIHN5c3RlbVxyXG5cdCAqIEBwYXJhbSBkaXYgVGhlIGRpdiB3ZSBwdXQgdGhlIHRhYnMgaW50b1xyXG5cdCAqL1xyXG5cdHRoaXMuY3JlYXRlID0gZnVuY3Rpb24oZGl2KSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlOiA8ZGl2IGNsYXNzPVwiY2wtdGFic1wiPjx1bD48L3VsPjxkaXYgY2xhc3M9XCJjbC12aWV3c1wiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgIHRhYnNEaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdjbC1wZy10YWJzJyk7XHJcbiAgICAgICAgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIHRhYnNEaXYuYXBwZW5kQ2hpbGQodWwpO1xyXG5cclxuICAgICAgICB2aWV3c0RpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXBnLXZpZXdzJyk7XHJcbiAgICAgICAgdGFic0Rpdi5hcHBlbmRDaGlsZCh2aWV3c0Rpdik7XHJcblxyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0YWJzRGl2KTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgdGhlIHRhYnMgY29sbGVjdGlvblxyXG4gICAgICAgIHRhYnMgPSBbXTtcclxuXHJcblx0Ly9cdHRoaXMuYWRkKCdwcm9ncmFtJyk7XHJcbi8vXHRcdHRoaXMuYWRkKCdvdXRwdXQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxvYWQgPSBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRmb3IoY29uc3QgdGFiRGF0YSBvZiBkYXRhKSB7XHJcblx0XHRcdHRoaXMuYWRkKHRhYkRhdGEpO1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmV3UGFyZW50ID0gZnVuY3Rpb24ocGFuZSkge1xyXG5cdFx0cGFuZS5kaXYuYXBwZW5kQ2hpbGQodGFic0Rpdik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGQgPSBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRsZXQgdGFiID0gbnVsbDtcclxuXHJcblx0ICAgIHN3aXRjaChkYXRhLnR5cGUpIHtcclxuXHRcdCAgICBjYXNlICdlZGl0b3InOlxyXG5cdFx0XHQgICAgdGFiID0gbmV3IEVkaXRvclRhYih0aGlzLCBkYXRhKTtcclxuXHRcdCAgICBcdGJyZWFrO1xyXG5cclxuXHRcdCAgICBjYXNlICdvdXRwdXQnOlxyXG5cdFx0ICAgIFx0dGFiID0gbmV3IE91dHB1dFRhYih0aGlzLCBkYXRhKTtcclxuXHRcdCAgICBcdGJyZWFrO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBpZih0YWIgIT09IG51bGwpIHtcclxuXHRcdCAgICB1bC5hcHBlbmRDaGlsZCh0YWIubGkpO1xyXG5cdFx0ICAgIHZpZXdzRGl2LmFwcGVuZENoaWxkKHRhYi52aWV3KTtcclxuXHRcdCAgICB0YWJzLnB1c2goe3RhYjogdGFiLCBsaTogdGFiLmxpLCB2aWV3OiB0YWIudmlld30pO1xyXG5cclxuXHRcdCAgICB0YWIuc2VsZWN0KCk7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGEgdGFiIGJ5IHRhZy5cclxuXHQgKiBAcGFyYW0gdGFnIFRhYiB0YWdcclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHR0aGlzLmdldFRhYiA9IGZ1bmN0aW9uKHRhZykge1xyXG5cdCAgICBmb3IoY29uc3QgdGFiIG9mIHRhYnMpIHtcclxuXHRcdCAgICBpZih0YWIudGFiLnRhZyA9PT0gdGFnKSB7XHJcblx0XHRcdCAgICByZXR1cm4gdGFiLnRhYjtcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudW5zZWxlY3RBbGwgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgLy9cclxuXHQgICAgLy8gQ2xlYXIgYWxsIHNlbGVjdGlvbnNcclxuXHQgICAgLy9cclxuXHQgICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcclxuXHQgICAgXHR0YWIubGkuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuXHQgICAgXHR0YWIudmlldy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG5cdCAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSAtMTtcclxuICAgICAgICB0YWJzRGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFic0Rpdik7XHJcbiAgICAgICAgdGFic0RpdiA9IG51bGw7XHJcbiAgICAgICAgdGFicyA9IFtdO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZShlbGVtZW50KTtcclxufTtcclxuIiwiaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuXHJcbmV4cG9ydCBjb25zdCBFZGl0b3JUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGNvbnN0IHNpdGUgPSB0YWJzLnNpdGU7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdlZGl0b3InKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cclxuXHRsZXQgaW5uZXJWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5hcHBlbmRDaGlsZChpbm5lclZpZXcpO1xyXG5cclxuXHRsZXQgbnVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG51bXMuY2xhc3NMaXN0LmFkZCgnY2wtcGctbnVtcycpO1xyXG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChudW1zKTtcclxuXHJcblx0bGV0IGVkaXRvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGVkaXRvckRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wZy1lZGl0b3InKTtcclxuXHRpbm5lclZpZXcuYXBwZW5kQ2hpbGQoZWRpdG9yRGl2KTtcclxuXHJcblx0Y29uc3QgZWRpdG9yID0gbmV3IHNpdGUuRWRpdG9yKGVkaXRvckRpdiwge1xyXG5cdFx0cmVzaXplOiAnbm9uZScsXHJcblx0XHR0YWI6IHRydWUsXHJcblx0XHRhdXRvSW5kZW50OiB0cnVlLFxyXG5cdFx0c3R5bGVzOiBudWxsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHNjcm9sbGFibGUgPSBlZGl0b3IudGV4dGFyZWE7XHJcblx0c2Nyb2xsYWJsZS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXZlbnQpID0+IHtcclxuXHRcdC8vIGVkaXRvckRpdi5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnMHB4ICcgKyAoLXByZS5zY3JvbGxUb3ApICsgJ3B4JztcclxuXHRcdG51bXMuc2Nyb2xsVG9wID0gc2Nyb2xsYWJsZS5zY3JvbGxUb3A7XHJcblx0fSk7XHJcblxyXG5cdHRoaXMuc2V0ID0gZnVuY3Rpb24odGV4dCkge1xyXG5cdFx0Ly8gRGF0YSBmcm9tIHRoZSBmaWxlIHN5c3RlbSBtYXkgY29uc2lzdCBvZiBlaXRoZXIganVzdFxyXG5cdFx0Ly8gdGV4dCAob2xkIGZvcm1hdCkgb3IgdGV4dCBpbiBhbiBvYmplY3QuIFRoaXMgYWxsb3dzXHJcblx0XHQvLyBlaXRoZXIgY2FzZSB0byB3b3JrLlxyXG5cdFx0aWYodGV4dC5kYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGV4dCA9IHRleHQuZGF0YTtcclxuXHRcdH1cclxuXHJcblx0XHRlZGl0b3IudGV4dGFyZWEudmFsdWUgPSB0ZXh0O1xyXG5cclxuXHRcdGxldCBsaW5lcyA9IDA7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7ICsraSl7XHJcblx0XHRcdGlmKHRleHRbaV0gPT09ICdcXG4nKSB7XHJcblx0XHRcdFx0bGluZXMrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGxpbmVzIDwgMTAwKSB7XHJcblx0XHRcdGxpbmVzID0gMTAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFRoZSBleHRyYSBhZGRlZCBvbiBoZXJlIGVuc3VyZXMgd2UgZ2V0IHBhc3QgYW55IHNjcm9sbCBiYXJcclxuXHRcdC8vIHRoYXQgbWF5IHRha2UgdXAgaG9yaXpvbnRhbCByb29tLlxyXG5cdFx0bnVtcy5pbm5lckhUTUwgPSAnJztcclxuXHRcdGZvcihsZXQgaT0xOyBpPD1saW5lcys1OyBpKyspIHtcclxuXHRcdFx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdFx0cC5pbm5lclRleHQgPSAnJyArIGk7XHJcblx0XHRcdG51bXMuYXBwZW5kQ2hpbGQocCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIGNvbnRlbnRzIG9mIHRoZSBlZGl0b3JcclxuXHQgKiBAcmV0dXJucyB7KnxzdHJpbmd9XHJcblx0ICovXHJcblx0dGhpcy5nZXQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBlZGl0b3IudGV4dGFyZWEudmFsdWU7XHJcblx0fVxyXG5cclxuXHR0aGlzLnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0VGFiLnByb3RvdHlwZS5zZWxlY3QuY2FsbCh0aGlzKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0ZWRpdG9yLnRleHRhcmVhLmZvY3VzKCk7XHJcblx0XHR9LCAwKTtcclxuXHJcblx0fVxyXG5cclxuXHR0aGlzLnNldCgnJyk7XHJcbn1cclxuXHJcbkVkaXRvclRhYi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRhYi5wcm90b3R5cGUpO1xyXG5FZGl0b3JUYWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRWRpdG9yVGFiOyIsImltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cclxuXHRsZXQgaW5uZXJWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5hcHBlbmRDaGlsZChpbm5lclZpZXcpO1xyXG5cclxuXHRsZXQgbnVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG51bXMuY2xhc3NMaXN0LmFkZCgnY2wtcGctbnVtcycpO1xyXG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChudW1zKTtcclxuXHJcblx0bGV0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xyXG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChwcmUpO1xyXG5cclxuXHRwcmUuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGV2ZW50KSA9PiB7XHJcblx0XHRwcmUuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJzBweCAnICsgKC1wcmUuc2Nyb2xsVG9wKSArICdweCc7XHJcblx0XHRudW1zLnNjcm9sbFRvcCA9IHByZS5zY3JvbGxUb3A7XHJcblx0fSk7XHJcblxyXG5cdHRoaXMuc2V0ID0gZnVuY3Rpb24odGV4dCkge1xyXG5cdFx0cHJlLmlubmVySFRNTCA9IHRleHQ7XHJcblxyXG5cdFx0bGV0IGxpbmVzID0gMDtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKXtcclxuXHRcdFx0aWYodGV4dFtpXSA9PT0gJ1xcbicpIHtcclxuXHRcdFx0XHRsaW5lcysrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYobGluZXMgPCAxMDApIHtcclxuXHRcdFx0bGluZXMgPSAxMDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVGhlIGV4dHJhIGFkZGVkIG9uIGhlcmUgZW5zdXJlcyB3ZSBnZXQgcGFzdCBhbnkgc2Nyb2xsIGJhclxyXG5cdFx0Ly8gdGhhdCBtYXkgdGFrZSB1cCBob3Jpem9udGFsIHJvb20uXHJcblx0XHRudW1zLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0Zm9yKGxldCBpPTE7IGk8PWxpbmVzKzU7IGkrKykge1xyXG5cdFx0XHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0XHRwLmlubmVyVGV4dCA9ICcnICsgaTtcclxuXHRcdFx0bnVtcy5hcHBlbmRDaGlsZChwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IHRleHQgPSBgaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtleHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge2V4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cdFxyXG5cdHZpZXcuaW5uZXJUZXh0ID0gXFxgXFxgO1xyXG59XHJcblxyXG5pbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHRcclxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcclxufVxyXG5pbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHRcclxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcclxufVxyXG5cclxuT3V0cHV0VGFiLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVGFiLnByb3RvdHlwZSk7XHJcbk91dHB1dFRhYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPdXRwdXRUYWI7YDtcclxuXHJcblx0Ly90aGlzLnNldCh0ZXh0ICsgdGV4dCArIHRleHQgKyB0ZXh0KTtcclxuXHR0aGlzLnNldCgnJyk7XHJcbn1cclxuXHJcbk91dHB1dFRhYi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRhYi5wcm90b3R5cGUpO1xyXG5PdXRwdXRUYWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3V0cHV0VGFiOyIsIlxyXG5leHBvcnQgY29uc3QgVGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdHRoaXMudGFicyA9IHRhYnM7XHJcblxyXG5cdHRoaXMudmlldyA9IG51bGw7XHJcblx0dGhpcy50YWcgPSBkYXRhLnRhZztcclxuXHR0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcblxyXG5cdGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0dGhpcy5saSA9IGxpO1xyXG5cclxuXHRsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHRsaS5hcHBlbmRDaGlsZChhKTtcclxuXHRhLmlubmVyVGV4dCA9IGRhdGEubmFtZTtcclxuXHJcblx0bGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblx0bGkuYXBwZW5kQ2hpbGQobWVudSk7XHJcblx0Ly8gbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cdC8vIG1lbnUuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHQvLyBpbWcuc3JjID0gbWVudWJhcnM7XHJcblxyXG5cdGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5zZWxlY3QoKTtcclxuXHR9KTtcclxuXHJcblx0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRoaXMuc2VsZWN0KCk7XHJcblx0fSk7XHJcblxyXG5cdHRoaXMuc2V0ID0gZnVuY3Rpb24odGV4dCkge31cclxuXHJcblx0Ly9cclxuXHQvLyBUaGUgbWVudVxyXG5cdC8vIE1heWJlIGFjdGl2YXRlIGxhdGVyIG9uP1xyXG5cdC8vXHJcblx0Ly8gY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdC8vIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnY2wtdGFiLW1lbnUnKTtcclxuXHQvLyBtZW51RGl2LmNsYXNzTGlzdC5hZGQoJ2NsLW1lbnUtb3BlbicpO1xyXG5cdC8vIGxpLmFwcGVuZENoaWxkKG1lbnVEaXYpO1xyXG5cdC8vXHJcblx0Ly8gY29uc3QgbWVudVVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHQvLyBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVVTCk7XHJcblx0Ly8gbWVudVVMLmlubmVySFRNTCA9XHJcblx0Ly8gXHQnPGxpPjxhIGNsYXNzPVwiZWRpdC11bmRvXCI+PHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC1hcnJvd3JldHVybnRoaWNrLTEtd1wiPjwvc3Bhbj5VbmRvPC9hPjwvbGk+JyArXHJcblx0Ly8gXHQnPGxpPjxhIGNsYXNzPVwiZWRpdC1kZWxldGVcIj48c3BhbiBjbGFzcz1cImljb25zLWNsIGljb25zLWNsLXRyYXNoXCI+PC9zcGFuPkRlbGV0ZTwvYT48L2xpPic7XHJcblx0Ly9cclxuXHQvLyBjb25zdCBjb25uZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Ly8gbWVudURpdi5hcHBlbmRDaGlsZChjb25uZWN0RGl2KTtcclxuXHQvL1xyXG5cdC8vIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cdC8vIGNvbm5lY3REaXYuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHQvLyBpbWcuc3JjID0gbWVudWJhcnM7XHJcbn1cclxuXHJcblRhYi5wcm90b3R5cGUuc2VsZWN0ICA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMudGFicy51bnNlbGVjdEFsbCgpO1xyXG5cclxuXHR0aGlzLmxpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcblx0dGhpcy52aWV3LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIERyYWcgYW5kIGRyb3Agc3VwcG9ydCBmb3IgdGhlIHBhbGV0dGVcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRHJhZ0FuZERyb3AgPSBmdW5jdGlvbihtYWluKSB7XHJcblxyXG5cdGxldCBkcmFnRWxlbWVudCA9IG51bGw7IC8vIERPTSBFbGVtZW50XHJcblx0bGV0IGRyYWdJdGVtID0gbnVsbDsgICAgLy8gUGFsZXR0ZUl0ZW1cclxuXHRsZXQgZHJvcFZpZXdzID0gW107ICAgICAvLyBWaWV3XHJcblxyXG5cdGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGlmKGV2ZW50LndoaWNoID09PSAwKSB7XHJcblx0XHRcdFx0bW91c2VVcChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bW91c2VNb3ZlKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRtb3VzZU1vdmUodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdG1vdXNlVXAoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudCkgPT4ge1xyXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdFx0bW91c2VVcCh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRtb3VzZVVwKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHRoaXMuZHJhZ2dhYmxlID0gKHBhbGV0dGVJdGVtKSA9PiB7XHJcblx0XHRwYWxldHRlSXRlbS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRjbGljayhwYWxldHRlSXRlbSk7XHJcblxyXG5cdFx0XHRtb3VzZU1vdmUoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHBhbGV0dGVJdGVtLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRjbGljayhwYWxldHRlSXRlbSk7XHJcblxyXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdFx0bW91c2VNb3ZlKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHRoaXMuZHJvcHBhYmxlID0gKHZpZXcsIGNhbGxiYWNrKSA9PiB7XHJcblx0XHRkcm9wVmlld3MucHVzaCh7XHJcblx0XHRcdCd2aWV3JzogdmlldyxcclxuXHRcdFx0J2NhbGxiYWNrJzogY2FsbGJhY2tcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xpY2sgPSAocGFsZXR0ZUl0ZW0pID0+IHtcclxuXHRcdC8vXHJcblx0XHQvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBlbGVtZW50IGFuZCBzZXQgaXQgdXAgZm9yIGRyYWdnaW5nXHJcblx0XHQvL1xyXG5cdFx0Y29uc3QgY2xvbmUgPSBwYWxldHRlSXRlbS5wYWxldHRlSW1hZ2UoKTtcclxuXHRcdG1haW4uZWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZSk7XHJcblx0XHRjbG9uZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblx0XHRjbG9uZS5zdHlsZS50b3AgPSAwO1xyXG5cdFx0Y2xvbmUuc3R5bGUubGVmdCA9IDA7XHJcblx0XHRjbG9uZS5zdHlsZS56SW5kZXggPSAxMDA7XHJcblx0XHRjbG9uZS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblxyXG5cdFx0ZHJhZ0l0ZW0gPSBwYWxldHRlSXRlbTtcclxuXHRcdGRyYWdFbGVtZW50ID0gY2xvbmU7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3VzZU1vdmUgPSAoeCwgeSkgPT4ge1xyXG5cdFx0aWYoZHJhZ0VsZW1lbnQgIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgcmVjdCA9IG1haW4uZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0Y29uc3QgbWFpblggPSByZWN0LmxlZnQgKyBtYWluLmVsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldDtcclxuXHRcdFx0Y29uc3QgbWFpblkgPSByZWN0LnRvcCAgKyBtYWluLmVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0ZHJhZ0VsZW1lbnQuc3R5bGUubGVmdCA9ICh4IC0gbWFpblggLSBkcmFnRWxlbWVudC5jbGllbnRXaWR0aCAvIDIpICsgJ3B4JztcclxuXHRcdFx0ZHJhZ0VsZW1lbnQuc3R5bGUudG9wID0gKHkgLSBtYWluWSAtIGRyYWdFbGVtZW50LmNsaWVudEhlaWdodCAvIDIpICsgJ3B4JztcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbW91c2VVcCA9ICh4LCB5KSA9PiB7XHJcblx0XHRpZihkcmFnRWxlbWVudCAhPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0Zm9yKGNvbnN0IHZpZXcgb2YgZHJvcFZpZXdzKSB7XHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHQvLyBJcyB0aGUgdmlldyBlbmFibGVkP1xyXG5cdFx0XHRcdC8vXHJcblx0XHRcdFx0Y29uc3Qgdmlld0VsZW1lbnQgPSB2aWV3LnZpZXcuZWxlbWVudDtcclxuXHRcdFx0XHRpZih2aWV3RWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL1xyXG5cdFx0XHRcdC8vIERldGVybWluZSB4LHkgaW4gdGhlIGNhbnZhc1xyXG5cdFx0XHRcdC8vXHJcblx0XHRcdFx0Y29uc3QgcmVjdCA9IHZpZXdFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdGNvbnN0IHZpZXdYID0gcmVjdC5sZWZ0ICsgdmlld0VsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldDtcclxuXHRcdFx0XHRjb25zdCB2aWV3WSA9IHJlY3QudG9wICsgdmlld0VsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHRpZih4ID49IHZpZXdYICYmXHJcblx0XHRcdFx0XHR5ID49IHZpZXdZICYmXHJcblx0XHRcdFx0XHR4IDwgdmlld1ggKyAocmVjdC5yaWdodCAtIHJlY3QubGVmdCkgJiZcclxuXHRcdFx0XHRcdHkgPCB2aWV3WSArIChyZWN0LmJvdHRvbSAtIHJlY3QudG9wKSkge1xyXG5cdFx0XHRcdFx0dmlldy5jYWxsYmFjayhkcmFnSXRlbSwgeCAtIHZpZXdYLCB5IC0gdmlld1kpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYWluLmVsZW1lbnQucmVtb3ZlQ2hpbGQoZHJhZ0VsZW1lbnQpO1xyXG5cdFx0XHRkcmFnRWxlbWVudCA9IG51bGw7XHJcblx0XHRcdGRyYWdJdGVtID0gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG59IiwiLyoqXHJcbiAqIFNpbXBsZSBEb2N1bWVudCByZWFkeSBmdW5jdGlvbiwgZXF1aXZhbGVudCB0byBqUXVlcnkncyBkb2N1bWVudCByZWFkeS5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUmVhZHkgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGwgYSBmdW5jdGlvbiB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkb24uXHJcbiAqIEBwYXJhbSBmbiBGdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gZG9jdW1lbnQgcmVhZHlcclxuICovXHJcblJlYWR5LmdvID0gZnVuY3Rpb24oZm4pIHtcclxuICAgIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKXtcclxuICAgICAgICBmbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8ueWFybi8kJHZpcnR1YWwvY3NzLWxvYWRlci12aXJ0dWFsLTFkZGM2OGI0YTEvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS01LjIuNi0xMThjNmQ0MDllLWI5ZTVhMzIyNDYuemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8ueWFybi8kJHZpcnR1YWwvY3NzLWxvYWRlci12aXJ0dWFsLTFkZGM2OGI0YTEvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS01LjIuNi0xMThjNmQ0MDllLWI5ZTVhMzIyNDYuemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8ueWFybi8kJHZpcnR1YWwvY3NzLWxvYWRlci12aXJ0dWFsLTFkZGM2OGI0YTEvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS01LjIuNi0xMThjNmQ0MDllLWI5ZTVhMzIyNDYuemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9pbWcvbWVudS1jaGVjay5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9pbWcvYmFycy5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLXBsYXlncm91bmQgZGl2LnRvYXN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjNlbSk7XFxuICB6LWluZGV4OiA0MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC40cywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDMwZW0vMik7XFxuICB3aWR0aDogMzBlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LnRvYXN0LnRvYXN0LWFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC40cztcXG4gIHotaW5kZXg6IDQwMDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIge1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDA7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzgwODA4MDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMDA3OTZCO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkgYSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSBhOmxpbmssIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIGE6dmlzaXRlZCB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCBpbWcuY2hlY2sge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgd2lkdGg6IDE5cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMC4yNWVtIDJlbSAwLjI1ZW0gMC41ZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhOmxpbmssIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAxMDAlO1xcbiAgbWFyZ2luOiAxcHggMCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxuICBib3JkZXItdG9wLXdpZHRoOiAwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOGVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwgPiBsaS5tZW51LWRpc2FibGVkIGEge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmNsLXBnLW1lbnUtb3BlbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuZWRpdC1tZW51IGEge1xcbiAgd2lkdGg6IDZlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5vcHRpb24tbWVudSBhIHtcXG4gIHdpZHRoOiAxMWVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmZpbGUtbWVudSBhIHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuaGVscC1tZW51IGEge1xcbiAgd2lkdGg6IDcuNWVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIC51bC1zdGF0ZS1hY3RpdmUge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCBsaS5tZW51LWRpdmlkZXIge1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IDAgc29saWQgYmxhY2s7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi53b3JrIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogI2EwMDtcXG4gIG9wYWNpdHk6IDAuMDU7XFxuICB6LWluZGV4OiAyMDAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLW1haW4ge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZnVsbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtd2luZG93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IHRoaW4gc29saWQgI2FhYWFhYTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWJlZm9yZSwgZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XFxuICBoZWlnaHQ6IDFlbTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG4gIGJvcmRlcjogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzcHggMCAwIDJweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMC4yNWVtIDAuMjVlbSAwLjQ1ZW0gMDtcXG4gIG1pbi13aWR0aDogNmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgbWFyZ2luOiAxcHggM3B4IC0xcHggMDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB6LWluZGV4OiAxODtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG91dGxpbmU6IDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6bnRoLWNoaWxkKDIpIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkgYTpudGgtY2hpbGQoMikgaW1nIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB6LWluZGV4OiAyMjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpLnNlbGVjdGVkIGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyBkaXYuY2wtcGctdmlld3Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMjlweDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogMjA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIGRpdi5jbC1wZy12aWV3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXcuc2VsZWN0ZWQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiBjYWxjKDEwMCUgLSAxN3B4KTtcXG4gIHRvcDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMjdweDtcXG4gIHRvcDogNHB4O1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IGRpdiBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMzBweCAwIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwgPiBsaSBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4ZW07XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkubWVudS1kaXNhYmxlZCBhIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51LmNsLW1lbnUtb3BlbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3QsIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQsIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJpZ2h0LFxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCwgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtbGVmdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4ODg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQgZGl2LmNsLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcmlnaHQ6IC01cHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgei1pbmRleDogMTAwO1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCBkaXYuY2wtYmFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3R0b206IC01cHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgei1pbmRleDogMjtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1ib3R0b20ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG5kaXYuY2wtcGctbnVtcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICB3aWR0aDogMmVtO1xcbiAgcGFkZGluZzogNHB4IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5kaXYuY2wtcGctbnVtcyBwIHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgM3B4IDAgMDtcXG4gIGJvcmRlcjogMDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6ICM3Nzc7XFxufVxcblxcbmRpdi5jbC1wZy1hYm91dCB7XFxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5kaXYuY2wtcGctYWJvdXQgZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMjI1cHg7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYge1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5kaXYuY2wtcGctYWJvdXQgZGl2LmNsLXBnLWFib3V0LWRpdiBoMSB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5kaXYuY2wtcGctYWJvdXQgZGl2LmNsLXBnLWFib3V0LWRpdiBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yID4gZGl2IGRpdi5jbC1wZy1lZGl0b3Ige1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yID4gZGl2IGRpdi5jbC1wZy1lZGl0b3IgdGV4dGFyZWEge1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXG4gIGJvcmRlcjogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0ID4gZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQgPiBkaXYgcHJlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXG4gIGJvcmRlcjogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL190b2FzdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL21vZHVsZXMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL21vZHVsZXMvX2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9fcGxheWdyb3VuZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19wbGF5Z3JvdW5kLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX21lbnUuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9tb2R1bGVzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL193b3JrLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fdGFicy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19wYW5lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX2xpbmVfbnVtYmVycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19hYm91dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL190YWJfZWRpdG9yLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX3RhYl9vdXRwdXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUVBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsdUZBQUE7RUFFQSwyREFBQTtFQUNBLGdCQ2RjO0VEZWQsd0JBQUE7RUFDQSxXQ2ZVO0VEZ0JWLHlCRVllO0VGWGYsWUVZUztFRlhULGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUdMSjtBSFFFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBR05KOztBQ3ZCQTtFQUNFLGFBQUE7QUQwQkY7O0FFM0JBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCSGVnQjtFR2RoQixpQ0FBQTtFQUNBLGlCQ1JlO0FIc0NqQjtBRTVCRTtFQUNFLG1CSFZXO0FDd0NmO0FFM0JFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FGNkJKO0FFM0JJO0VBQ0UsMkRDcEJNO0VEcUJOLGlCQ3BCVztFRHFCWCxZSENPO0VHQVAscUJBQUE7QUY2Qk47QUUxQkk7RUFDRSxZSEpPO0FDZ0NiO0FFckJFO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUZ1Qko7QUVyQkk7RUFDRSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7QUZ1Qk47QUVwQkk7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBRnNCTjtBRXBCTTtFQUNFLDJEQ3ZESTtFRHdESixpQkN2RFM7RUR3RFQsWUhsQ0s7RUdtQ0wscUJBQUE7QUZzQlI7QUVuQk07RUFDRSxZSHZDSztBQzREYjtBRWRJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7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O0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxtREFBQTtFQUNBLGlCQUFBO0VBRUEsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FYNmRSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpdi5jbC1wbGF5Z3JvdW5kXFxyXFxue1xcclxcbiAgJHRvYXN0LXRyYW5zaXRpb24tdGltZTogMC40cztcXHJcXG5cXHJcXG4gIGRpdi50b2FzdCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcblxcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjNlbSk7XFxyXFxuICAgIHotaW5kZXg6IDQwMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsICR0b2FzdC10cmFuc2l0aW9uLXRpbWUgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyICR0b2FzdC10cmFuc2l0aW9uLXRpbWUsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcclxcblxcclxcbiAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAkdG9hc3QtZm9udC1zaXplO1xcclxcbiAgICBsZWZ0OiBjYWxjKDUwJSAtICN7JHRvYXN0LXdpZHRofS8yKTtcXHJcXG4gICAgd2lkdGg6ICR0b2FzdC13aWR0aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRvYXN0LWJhY2tncm91bmQ7XFxyXFxuICAgIGNvbG9yOiAkdG9hc3QtdGV4dDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMC41ZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYudG9hc3QudG9hc3QtYWN0aXZlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAkdG9hc3QtdHJhbnNpdGlvbi10aW1lO1xcclxcbiAgICB6LWluZGV4OiA0MDA7XFxyXFxuXFxyXFxuICB9XFxyXFxufVwiLFwiJHRvYXN0LWZvbnQtc2l6ZTogMS4xZW07XFxyXFxuJHRvYXN0LXdpZHRoOiAzMGVtO1xcclxcblxcclxcbiRkcmFnLWJhci13aWR0aDogMTBweDtcXHJcXG5cXHJcXG4kdGFiLWNvcm5lci1yYWRpdXM6IDVweDtcXHJcXG5cIixcIi8vIFRoZSBtYWpvciBjb2xvcnNcXHJcXG4vLyBXZSBoYXZlIGEgcHJpbWFyeSBjb2xvciwgdHdvIHNlY29uZGFyeSBjb2xvcnMsIGFuZCBhIGNvbXBsZW1lbnRhcnkgY29sb3IuXFxyXFxuJGRhcmstcHJpbWFyeTogIzAwNzk2QjtcXHJcXG4kcHJpbWFyeTogIzAwOTY4ODtcXHJcXG4kbGlnaHQtcHJpbWFyeTogI0IyREZEQjtcXHJcXG4kYWNjZW50OiAjNjA3RDhCO1xcclxcbiRwcmltYXJ5LXRleHQ6ICMyMTIxMjE7XFxyXFxuJGRpdmlkZXItY29sb3I6ICNCREJEQkQ7XFxyXFxuJHNlY29uZGFyeS10ZXh0OiAjNjA2MDYwO1xcclxcblxcclxcbiRjb21wOiAjYzQxNDI1O1xcclxcbiR3aW5kb3ctYm9yZGVyczogI2FhYWFhYTtcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4kdGFicy1iYWNrZ3JvdW5kOiAjZGRkO1xcclxcbiR0YWItYmFja2dyb3VuZDogI2NjYztcXHJcXG4kdGFiLXRleHQ6IGJsYWNrO1xcclxcbiR0YWItc2VsZWN0ZWQtYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuJHRhYi1zZWxlY3RlZC10ZXh0OiBibGFjaztcXHJcXG5cXHJcXG4kbWVudS1mb2N1czogJGRhcmstcHJpbWFyeTtcXHJcXG4kbWVudS1iYWNrZ3JvdW5kOiAjZjBmM2YwO1xcclxcbiRtZW51LWNvbG9yOiBibGFjaztcXHJcXG4kbWVudS1kaXZpZGVyLWNvbG9yOiBibGFjaztcXHJcXG4kbWVudS1ib3JkZXItY29sb3I6ICM4MDgwODA7XFxyXFxuXFxyXFxuJHJlc2l6ZXI6ICRkYXJrLXByaW1hcnk7XFxyXFxuXFxyXFxuJHRvYXN0LWJhY2tncm91bmQ6ICMxNTE1MTU7XFxyXFxuJHRvYXN0LXRleHQ6IHdoaXRlO1wiLFwiZGl2LmNsLXBsYXlncm91bmQgZGl2LnRvYXN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjNlbSk7XFxuICB6LWluZGV4OiA0MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC40cywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDMwZW0vMik7XFxuICB3aWR0aDogMzBlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LnRvYXN0LnRvYXN0LWFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC40cztcXG4gIHotaW5kZXg6IDQwMDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIge1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDA7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzgwODA4MDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMDA3OTZCO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkgYSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSBhOmxpbmssIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIGE6dmlzaXRlZCB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCBpbWcuY2hlY2sge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgd2lkdGg6IDE5cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBjb250ZW50OiB1cmwoXFxcIi4uLy4uL2ltZy9tZW51LWNoZWNrLnBuZ1xcXCIpO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMC4yNWVtIDJlbSAwLjI1ZW0gMC41ZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhOmxpbmssIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAxMDAlO1xcbiAgbWFyZ2luOiAxcHggMCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxuICBib3JkZXItdG9wLXdpZHRoOiAwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOGVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwgPiBsaS5tZW51LWRpc2FibGVkIGEge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmNsLXBnLW1lbnUtb3BlbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuZWRpdC1tZW51IGEge1xcbiAgd2lkdGg6IDZlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5vcHRpb24tbWVudSBhIHtcXG4gIHdpZHRoOiAxMWVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmZpbGUtbWVudSBhIHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuaGVscC1tZW51IGEge1xcbiAgd2lkdGg6IDcuNWVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIC51bC1zdGF0ZS1hY3RpdmUge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCBsaS5tZW51LWRpdmlkZXIge1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IDAgc29saWQgYmxhY2s7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi53b3JrIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogI2EwMDtcXG4gIG9wYWNpdHk6IDAuMDU7XFxuICB6LWluZGV4OiAyMDAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLW1haW4ge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZnVsbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtd2luZG93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IHRoaW4gc29saWQgI2FhYWFhYTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWJlZm9yZSwgZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XFxuICBoZWlnaHQ6IDFlbTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG4gIGJvcmRlcjogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzcHggMCAwIDJweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMC4yNWVtIDAuMjVlbSAwLjQ1ZW0gMDtcXG4gIG1pbi13aWR0aDogNmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgbWFyZ2luOiAxcHggM3B4IC0xcHggMDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB6LWluZGV4OiAxODtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG91dGxpbmU6IDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6bnRoLWNoaWxkKDIpIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkgYTpudGgtY2hpbGQoMikgaW1nIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB6LWluZGV4OiAyMjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpLnNlbGVjdGVkIGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyBkaXYuY2wtcGctdmlld3Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMjlweDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogMjA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIGRpdi5jbC1wZy12aWV3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXcuc2VsZWN0ZWQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiBjYWxjKDEwMCUgLSAxN3B4KTtcXG4gIHRvcDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMjdweDtcXG4gIHRvcDogNHB4O1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IGRpdiBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMzBweCAwIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwgPiBsaSBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4ZW07XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkubWVudS1kaXNhYmxlZCBhIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51LmNsLW1lbnUtb3BlbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3QsIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQsIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJpZ2h0LFxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCwgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtbGVmdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4ODg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQgZGl2LmNsLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcmlnaHQ6IC01cHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgei1pbmRleDogMTAwO1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCBkaXYuY2wtYmFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3R0b206IC01cHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgei1pbmRleDogMjtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1ib3R0b20ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG5kaXYuY2wtcGctbnVtcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICB3aWR0aDogMmVtO1xcbiAgcGFkZGluZzogNHB4IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5kaXYuY2wtcGctbnVtcyBwIHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgM3B4IDAgMDtcXG4gIGJvcmRlcjogMDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6ICM3Nzc7XFxufVxcblxcbmRpdi5jbC1wZy1hYm91dCB7XFxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5kaXYuY2wtcGctYWJvdXQgZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMjI1cHg7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYge1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5kaXYuY2wtcGctYWJvdXQgZGl2LmNsLXBnLWFib3V0LWRpdiBoMSB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5kaXYuY2wtcGctYWJvdXQgZGl2LmNsLXBnLWFib3V0LWRpdiBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yID4gZGl2IGRpdi5jbC1wZy1lZGl0b3Ige1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yID4gZGl2IGRpdi5jbC1wZy1lZGl0b3IgdGV4dGFyZWEge1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXG4gIGJvcmRlcjogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0ID4gZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQgPiBkaXYgcHJlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uLy4uL2ltZy9iYXJzLnBuZ1xcXCIpO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXG4gIGJvcmRlcjogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cIixcImRpdi5jbC1wbGF5Z3JvdW5kIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiLFwiZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIge1xcclxcbiAgZmxleDogMCAxIGF1dG87XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1lbnUtYmFja2dyb3VuZDtcXHJcXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzgwODA4MDtcXHJcXG4gIGZvbnQtc2l6ZTogJG1lbnUtZm9udC1zaXplO1xcclxcblxcclxcbiAgbGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkbWVudS1mb2N1cztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGxpIHtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgYSB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICRtZW51LWZvbnQ7XFxyXFxuICAgICAgZm9udC1zaXplOiAkbWVudS1mb250LXNpemU7XFxyXFxuICAgICAgY29sb3I6ICRtZW51LWNvbG9yO1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBhOmxpbmssIGE6dmlzaXRlZCB7XFxyXFxuICAgICAgY29sb3I6ICRtZW51LWNvbG9yO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvL1xcclxcbiAgLy8gVG9wIGxldmVsIG1lbnVcXHJcXG4gIC8vXFxyXFxuICA+IHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG4gICAgaW1nLmNoZWNrIHtcXHJcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxuICAgICAgd2lkdGg6IDE5cHg7XFxyXFxuICAgICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICAgIGNvbnRlbnQ6IHVybChcXFwiLi4vLi4vaW1nL21lbnUtY2hlY2sucG5nXFxcIik7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgPiBsaSB7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgcGFkZGluZzogMC4yNWVtIDJlbSAwLjI1ZW0gMC41ZW07XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAgIGEge1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICRtZW51LWZvbnQ7XFxyXFxuICAgICAgICBmb250LXNpemU6ICRtZW51LWZvbnQtc2l6ZTtcXHJcXG4gICAgICAgIGNvbG9yOiAkbWVudS1jb2xvcjtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgYTpsaW5rLCBhOnZpc2l0ZWQge1xcclxcbiAgICAgICAgY29sb3I6ICRtZW51LWNvbG9yO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvL1xcclxcbiAgICAvLyBEcm9wLWRvd24gbWVudVxcclxcbiAgICAvL1xcclxcbiAgICB1bCB7XFxyXFxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcclxcbiAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXHJcXG5cXHJcXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgICAgLy8gZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHRvcDogMTAwJTtcXHJcXG4gICAgICBtYXJnaW46IDFweCAwIDAgMDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1lbnUtYm9yZGVyLWNvbG9yO1xcclxcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XFxyXFxuXFxyXFxuICAgICAgPiBsaSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgICB3aWR0aDogOGVtO1xcclxcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICA+IGxpLm1lbnUtZGlzYWJsZWQge1xcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgIG9wYWNpdHk6IDAuMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdWwuY2wtcGctbWVudS1vcGVuIHtcXHJcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgei1pbmRleDogMTAwO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxyXFxuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHVsLmVkaXQtbWVudSBhIHtcXHJcXG4gICAgICB3aWR0aDogNmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHVsLm9wdGlvbi1tZW51IGEge1xcclxcbiAgICAgIHdpZHRoOiAxMWVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHVsLmZpbGUtbWVudSBhIHtcXHJcXG4gICAgICB3aWR0aDogNmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHVsLmhlbHAtbWVudSBhIHtcXHJcXG4gICAgICB3aWR0aDogNy41ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnVsLXN0YXRlLWFjdGl2ZSB7XFxyXFxuICAgICAgY29sb3I6IHJlZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBsaS5tZW51LWRpdmlkZXIge1xcclxcbiAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgIGJvcmRlcjogMCBzb2xpZCAkbWVudS1kaXZpZGVyLWNvbG9yO1xcclxcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIixcIiRtZW51LWZvbnQ6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxyXFxuJG1lbnUtZm9udC1zaXplOiAwLjkwcmVtO1xcclxcblxcclxcbiR0YWJzLWZvbnQ6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxyXFxuJHRhYnMtZm9udC1zaXplOiAwLjgwcmVtO1wiLFwiZGl2LmNsLXBsYXlncm91bmQgZGl2Lndvcmsge1xcclxcbiAgZmxleDogMSAxIGF1dG87XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5cIixcImRpdi5jbC1wbGF5Z3JvdW5kIHtcXHJcXG5cXHJcXG4gIGRpdi5jbC1wZy1vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNhMDA7XFxyXFxuICAgIG9wYWNpdHk6IDAuMDU7XFxyXFxuICAgIHotaW5kZXg6IDIwMDA7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuY2wtcGctbWFpbiB7XFxyXFxuICAgIC8vIE5vcm1hbGl6YXRpb25zXFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbmRpdi5jbC1wbGF5Z3JvdW5kLWZ1bGwge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmRpdi5jbC1wbGF5Z3JvdW5kLXdpbmRvdyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjAwcHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiB0aGluIHNvbGlkICR3aW5kb3ctYm9yZGVycztcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcclxcbiAgbWluLXdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWJlZm9yZSwgZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XFxyXFxuICBoZWlnaHQ6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJcXHJcXG5kaXYuY2wtcGxheWdyb3VuZCB7XFxyXFxuICBkaXYuY2wtcGctdGFicyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBmb250LXNpemU6ICR0YWJzLWZvbnQtc2l6ZTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogJHRhYnMtYmFja2dyb3VuZDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcblxcclxcbiAgICA+dWwge1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBwYWRkaW5nOiAzcHggMCAwIDJweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG5cXHJcXG5cXHJcXG4gICAgICA+bGkge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAkdGFicy1mb250LXNpemU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjI1ZW0gMC4yNWVtIDAuNDVlbSAwO1xcclxcbiAgICAgICAgbWluLXdpZHRoOiA2ZW07XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGFiLWJhY2tncm91bmQ7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAkdGFiLWNvcm5lci1yYWRpdXMgJHRhYi1jb3JuZXItcmFkaXVzIDAgMDtcXHJcXG4gICAgICAgIG1hcmdpbjogMXB4IDNweCAtMXB4IDA7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAgICAgei1pbmRleDogMTg7XFxyXFxuXFxyXFxuICAgICAgICBhOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICR0YWJzLWZvbnQ7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgcGFkZGluZzogMCAwLjI1ZW07XFxyXFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgY29sb3I6ICR0YWItdGV4dDtcXHJcXG4gICAgICAgICAgb3V0bGluZTogMDtcXHJcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBhOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcblxcclxcbiAgICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICA+bGkuc2VsZWN0ZWQge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogJHRhYi1zZWxlY3RlZC1iYWNrZ3JvdW5kO1xcclxcbiAgICAgICAgei1pbmRleDogMjI7XFxyXFxuXFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgY29sb3I6ICR0YWItc2VsZWN0ZWQtdGV4dDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZGl2LmNsLXBnLXZpZXdzIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICB0b3A6IDI5cHg7XFxyXFxuICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgIHotaW5kZXg6IDIwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGRpdi5jbC1wZy12aWV3IHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICByaWdodDogMDtcXHJcXG4gICAgICBib3R0b206IDA7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIHotaW5kZXg6IDIwO1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXYuY2wtcGctdmlldy5zZWxlY3RlZCB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuY2wtdGFiLW1lbnUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDE3cHgpO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMnMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcclxcblxcclxcbiAgICBkaXYge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB3aWR0aDogMTRweDtcXHJcXG4gICAgICBoZWlnaHQ6IDI3cHg7XFxyXFxuICAgICAgdG9wOiA0cHg7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkbWVudS1ib3JkZXItY29sb3I7XFxyXFxuICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1iYWNrZ3JvdW5kO1xcclxcblxcclxcbiAgICAgIGltZyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEycHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vXFxyXFxuICAgIC8vIFRhYiBkcm9wLWRvd24gbWVudVxcclxcbiAgICAvL1xcclxcbiAgICB1bCB7XFxyXFxuXFxyXFxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtZW51LWJhY2tncm91bmQ7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkbWVudS1ib3JkZXItY29sb3I7XFxyXFxuICAgICAgLy9ib3JkZXItdG9wLXdpZHRoOiAwO1xcclxcblxcclxcbiAgICAgID4gbGkge1xcclxcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgd2lkdGg6IDhlbTtcXHJcXG4gICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgPiBsaS5tZW51LWRpc2FibGVkIHtcXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICBkaXYuY2wtdGFiLW1lbnUuY2wtbWVudS1vcGVuIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcclxcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxyXFxuICB9XFxyXFxufVwiLFwiQHVzZSBcXFwic2FzczptYXRoXFxcIjtcXHJcXG5cXHJcXG5kaXYuY2wtcGxheWdyb3VuZCB7XFxyXFxuICBkaXYuY2wtcGxheWdyb3VuZC1yb290LCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0LCBkaXYuY2wtcGxheWdyb3VuZC1yaWdodCxcXHJcXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCwgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmbGV4OiAwIDEgYXV0bztcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzg4ODtcXHJcXG5cXHJcXG4gICAgZGl2LmNsLWJhciB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHJpZ2h0OiAtNXB4OyAvLyBtYXRoLmRpdigtJGRyYWctYmFyLXdpZHRoLCAyKTtcXHJcXG4gICAgICB3aWR0aDogJGRyYWctYmFyLXdpZHRoO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNsLXBsYXlncm91bmQtcmlnaHQge1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNsLXBsYXlncm91bmQtdG9wIHtcXHJcXG4gICAgZmxleDogMCAxIGF1dG87XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODtcXHJcXG5cXHJcXG4gICAgZGl2LmNsLWJhciB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBib3R0b206IC01cHg7IC8vIG1hdGguZGl2KC0kZHJhZy1iYXItd2lkdGgsIDIpO1xcclxcbiAgICAgIGhlaWdodDogJGRyYWctYmFyLXdpZHRoO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgICAgY3Vyc29yOiBucy1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XFxyXFxuICAgIC8vIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzE4NDUzYjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3Qge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJkaXYuY2wtcGctbnVtcyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmbGV4OiAwIDAgYXV0bztcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICB3aWR0aDogMmVtO1xcclxcbiAgcGFkZGluZzogNHB4IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcblxcclxcbiAgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDAgM3B4IDAgMDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgY29sb3I6ICM3Nzc7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiZGl2LmNsLXBnLWFib3V0IHtcXHJcXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxyXFxuXFxyXFxuICBmaWd1cmUge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMjVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuY2wtcGctYWJvdXQtZGl2IHtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcblxcclxcbiAgICBoMSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxufVwiLFwiZGl2LmNsLXBsYXlncm91bmQge1xcclxcbiAgZGl2LmNsLXBnLXZpZXcuZWRpdG9yIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgLy8gaW5uZXJEaXZcXHJcXG4gICAgPiBkaXYge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBib3R0b206IDA7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFxyXFxuICAgICAgZGl2LmNsLXBnLWVkaXRvciB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgICAgICAgdGV4dGFyZWEge1xcclxcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcXHJcXG5cXHJcXG4gICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXHJcXG4gICAgICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXHJcXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcXHJcXG4gICAgICAgICAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiZGl2LmNsLXBsYXlncm91bmQge1xcclxcbiAgZGl2LmNsLXBnLXZpZXcub3V0cHV0IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgPiBkaXYge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBib3R0b206IDA7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFxyXFxuICAgICAgcHJlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2ltZy9iYXJzLnBuZycpO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuXFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXHJcXG4gICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgfVxcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy55YXJuLyQkdmlydHVhbC9zdHlsZS1sb2FkZXItdmlydHVhbC04NjI2MDZmMzkzLzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS0yLjAuMC1iOWE1YzRhMmFhLWZmYzMwNTQ4ODIuemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL2Nzcy1sb2FkZXItdmlydHVhbC0xZGRjNjhiNGExLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNS4yLjYtMTE4YzZkNDA5ZS1iOWU1YTMyMjQ2LnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8ueWFybi8kJHZpcnR1YWwvcmVzb2x2ZS11cmwtbG9hZGVyLXZpcnR1YWwtZWM3NWQyYTA5ZS8wL2NhY2hlL3Jlc29sdmUtdXJsLWxvYWRlci1ucG0tNC4wLjAtMmE5YzE4ZDg2Yi0wNGU5ZjkxZGM4LnppcC9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy55YXJuLyQkdmlydHVhbC9zYXNzLWxvYWRlci12aXJ0dWFsLTM4NTdmNWU5ZjEvMC9jYWNoZS9zYXNzLWxvYWRlci1ucG0tMTIuMS4wLTYxODgwODllMTItNzVmNTIzZTY0Yy56aXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0udXNlWzNdIS4vX3BsYXlncm91bmQuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBNEFBQUFnQWdNQUFBQmZnS0VFQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBQU1VRXhVUmYvLy8rTC85K0gvOStYLytPaDRIVE1BQUFBZVNVUkJWQWpYWTJBZ0V2ei8vLzhEdzZwVnF4WXdoSWFHQmxCT0VBa0FVMk1ZM3REZjlhVUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQk1BQUFBT0NBWUFBQUROR0NlSkFBQUJTMmxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ05TNDJMV014TkRJZ056a3VNVFl3T1RJMExDQXlNREUzTHpBM0x6RXpMVEF4T2pBMk9qTTVJQ0FnSUNBZ0lDQWlQZ29nUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0S0lDQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJaTgrQ2lBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ284UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrbmh4Zzd3QUFBVmRKUkVGVU9JMlYwYkZyVTFFVUIrRHZSV05zSUpOUXU2dDFFOHlrdURnS0JRbElGd2RIa1E3K0F3VTd1cmwwRk1RNWNYRndzb01ndUloU3FvUHRKQTUxRUhHb2hlZFFmZzU1U1Y5amFlS0Z3NzF3RHQ4OWh5T0plc3g2MHU4M3NyUjBMbHdLdmRBckpvR2lLS1pEcTZ2ekJvT3VuWjFydUlnZkdQd1hsbTczbElPRFc3YTNsNVhsSW43aE5mcllOY3VZMmR1VFhtOHVQQWdmUWovY0Q0dWhHUVJUc2V6dnk4cEtKendNWDhLemNDR2NIaUdIR0hQaFNsZ0lSWnJOVmpZM2gxQlp5dHBhcCtyb1UzZ2E1djlCeGo4UGtSZGhON3dMZDhMbHROdnRySzkzd3Qzd01RekMrV09SR2lZVTRYcllDbDhyOUY2NEhUYkMrM0N6cWpzZXFtR2pPQk9laE8vaFczaFo0WTlENjBSb3ZJQ2pZQ004Q2o4cjlITzRPaFVhWTZNNEJGdmhUZmdkM29hejQ5ekU5dXZSbUpCSHJ6L1lRSW5uMVYzUHo5RFowUTY3NFZXMTdhbGRKVG1oWURqYWpWbWhKUDRDeTFaVTYrZENnM0FBQUFBQVNVVk9SSzVDWUlJPVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFCQU1BQUFEdDNlSlNBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFFbEJNVkVVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFEZ0t4bWlBQUFBQlhSU1RsTUF2L0lCRFZhUXNqOEFBQUFCWWt0SFJBQ0lCUjFJQUFBQUNYQklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUFIRWxFUVZRSTEyTmd3QTBZbGNCQUFNRmdkZ0VEQXdTRFBEVzRBUUIyWEF4YjhFblZxUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHJlc3VsdCA9IGZuKCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIlBsYXlncm91bmRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb3Vyc2VsaWJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY291cnNlbGliXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJjb21tb25cIixcInZlbmRvclwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iXSwic291cmNlUm9vdCI6IiJ9
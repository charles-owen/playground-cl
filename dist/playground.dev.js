"use strict";
(self["webpackChunkcourselib"] = self["webpackChunkcourselib"] || []).push([["Playground"],{

/***/ "./vendor/cl/playground/index.js":
/*!***************************************!*\
  !*** ./vendor/cl/playground/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Playground: () => (/* reexport safe */ _js_Playground_Playground__WEBPACK_IMPORTED_MODULE_1__.Playground),
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
/* harmony export */   AboutAction: () => (/* binding */ AboutAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ "./vendor/cl/playground/js/Playground/Actions/Action.js");
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dialog-cl */ "./.yarn/cache/dialog-cl-npm-1.0.7-8976e01c51-eebf4c1e92.zip/node_modules/dialog-cl/index.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../package.json */ "./vendor/cl/playground/package.json");



var AboutAction = function AboutAction(site, options) {
  _Action__WEBPACK_IMPORTED_MODULE_0__.Action.call(this, site, options);
  this["do"] = function (main) {
    _Action__WEBPACK_IMPORTED_MODULE_0__.Action.prototype["do"].call(this, main);

    // Dialog box contents
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
/* harmony export */   Action: () => (/* binding */ Action)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
/* harmony export */   AllActions: () => (/* binding */ AllActions)
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
/* harmony export */   SaveAction: () => (/* binding */ SaveAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ "./vendor/cl/playground/js/Playground/Actions/Action.js");

var SaveAction = function SaveAction(site, options) {
  _Action__WEBPACK_IMPORTED_MODULE_0__.Action.call(this, site, options);
  this["do"] = function (main) {
    var _this = this;
    _Action__WEBPACK_IMPORTED_MODULE_0__.Action.prototype["do"].call(this, main);

    // Get the requisite tab contents
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
/* harmony export */   Tools: () => (/* binding */ Tools)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./.yarn/cache/@babel-runtime-npm-7.22.6-493f6b7ad0-e585338287.zip/node_modules/@babel/runtime/helpers/esm/typeof.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
/* harmony export */   Toast: () => (/* binding */ Toast)
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
      element.innerHTML = message.msg;

      // Show it
      element.classList.add('toast-active');
      active = true;

      // Delay while active
      setTimeout(function () {
        // Hide it
        element.classList.remove('toast-active');

        // Delay between toasts
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
/* harmony export */   Main: () => (/* binding */ Main)
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
  this.options = playground.options;

  /// div.main
  this.div = null;
  var options = playground.options;

  /// References to other GUI components
  var menu = null,
    tabs = null;

  /// div.overlay
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
    this.dragAndDrop = new _UI_DragAndDrop__WEBPACK_IMPORTED_MODULE_3__.DragAndDrop(this);

    //
    // Create and add the window components
    //
    if (options.display !== 'inline' && options.display !== 'none') {
      //
      // All window-based versions other than inline get the
      // full user interface
      //

      // <div class="main"></div>
      this.div = _DOM_Tools__WEBPACK_IMPORTED_MODULE_4__.Tools.createClassedDiv('cl-pg-main');
      this.element.appendChild(this.div);

      //
      // Add the menu
      //
      menu = new _Menu__WEBPACK_IMPORTED_MODULE_1__.Menu(this);
      this.menu = menu;

      //
      // Working area
      // <div class="work"></div>
      //
      divWork = _DOM_Tools__WEBPACK_IMPORTED_MODULE_4__.Tools.createClassedDiv('work');
      this.div.appendChild(divWork);

      //
      // And the root pane
      //
      this.rootPane = new _Pane__WEBPACK_IMPORTED_MODULE_5__.Pane(this, divWork, null, null);
      this.rootPane.load(options.pane);

      //
      // And the overlay
      // <div class="cirsim-overlay"></div>
      //
      divOverlay = _DOM_Tools__WEBPACK_IMPORTED_MODULE_4__.Tools.createClassedDiv('cl-pg-overlay');
      this.div.appendChild(divOverlay);
      this.toast = new _Graphics_Toast__WEBPACK_IMPORTED_MODULE_2__.Toast(this);
      this.toast.create(this.div);

      //
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
/* harmony export */   Menu: () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools */ "./vendor/cl/playground/js/Playground/DOM/Tools.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


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
  var options = main.options;

  //
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
        }
        if (menu.menus !== undefined) {
          // Pull-down menu
          var subUL = document.createElement('ul');
          topLI.appendChild(subUL);
          for (var _i2 = 0, _arr2 = [a, topLI]; _i2 < _arr2.length; _i2++) {
            var _element = _arr2[_i2];
            _element.addEventListener('click', function (event) {
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
            var _loop2 = function _loop2() {
              var subMenu = _step2.value;
              var subLI = document.createElement('li');
              subUL.appendChild(subLI);
              var a = document.createElement('a');
              subLI.appendChild(a);
              a.innerText = subMenu.name;
              if (subMenu.action !== undefined) {
                // Top level only menu
                var _action = main.playground.getAction(subMenu.action);
                if (_action !== null) {
                  for (var _i3 = 0, _arr3 = [a, topLI]; _i3 < _arr3.length; _i3++) {
                    var _element2 = _arr3[_i3];
                    _element2.addEventListener('click', function (event) {
                      event.preventDefault();
                      event.stopPropagation();
                      _this.closeAll();
                      _action["do"](main);
                    });
                  }
                }
              }
            };
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              _loop2();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }

      //
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
  };

  // Open a menu
  var open = function open(li) {
    // Hide any other menus
    var _iterator3 = _createForOfIteratorHelper(_this.ul.childNodes),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var node = _step3.value;
        if (node.tagName === 'LI') {
          var _ul = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__.Tools.child(node, 'UL');
          if (_ul !== null) {
            // Tools.removeClass(ul, 'cl-pg-menu-open');
          }
        }
      }

      // And open this menu
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
/* harmony export */   Options: () => (/* binding */ Options)
/* harmony export */ });
/**
 * Playground options.
 * @param options User provided options that override the default values.
 * @constructor
 */
var Options = function Options(options) {
  options = options ? options : {};

  /// Display options
  /// window - Displays as a standard div (default)
  this.display = 'window';

  /// Optional height setting
  this.height = null;

  /// The playground root pane
  this.pane = {};

  /// The top-level menu options
  this.menus = [{
    name: 'About'
  }];

  /// Content to initially load into the tabs
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
        }

        // Send content type
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
/* harmony export */   Pane: () => (/* binding */ Pane)
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
    element.appendChild(div);

    // if(donorTabs !== null) {
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
/* harmony export */   Playground: () => (/* binding */ Playground)
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
  this.site = site;

  // Record the selector
  this.sel = sel;

  // The Options object that manages user options
  this.options = new _Options__WEBPACK_IMPORTED_MODULE_1__.Options(options);

  // A collection of Main objects.
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
/* harmony export */   Tabs: () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools */ "./vendor/cl/playground/js/Playground/DOM/Tools.js");
/* harmony import */ var _Tabs_OutputTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs/OutputTab */ "./vendor/cl/playground/js/Playground/Tabs/OutputTab.js");
/* harmony import */ var _Tabs_EditorTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tabs/EditorTab */ "./vendor/cl/playground/js/Playground/Tabs/EditorTab.js");
/* harmony import */ var _img_menubars_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/menubars.png */ "./vendor/cl/playground/img/menubars.png");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





/**
 * Manages the tabs in the model
 * @param main Main object
 * @param element Parent element
 * @constructor
 */
var Tabs = function Tabs(main, element) {
  /// The currently active view/tab
  this.active = -1;

  /// The Main object
  this.main = main;

  /// The Site object
  this.site = main.site;

  // The collection of tabs
  var tabs = [];

  //
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
    div.appendChild(tabsDiv);

    // Clear the tabs collection
    tabs = [];

    //	this.add('program');
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
    for (var _i = 0, _tabs = tabs; _i < _tabs.length; _i++) {
      var tab = _tabs[_i];
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorTab: () => (/* binding */ EditorTab)
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
    }

    // The extra added on here ensures we get past any scroll bar
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
/* harmony export */   OutputTab: () => (/* binding */ OutputTab)
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
    }

    // The extra added on here ensures we get past any scroll bar
    // that may take up horizontal room.
    nums.innerHTML = '';
    for (var _i = 1; _i <= lines + 5; _i++) {
      var p = document.createElement('p');
      p.innerText = '' + _i;
      nums.appendChild(p);
    }
  };
  var text = "import {Tab} from './Tab';\nimport {Tools} from \"../DOM/Tools\";\n\nexport const OutputTab = function(tabs, data) {export const OutputTab = function(tabs, data) {export const OutputTab = function(tabs, data) {\n\tTab.call(this, tabs, data);\n\n\tlet view = document.createElement('div');\n\tview.classList.add('cl-pg-view');\n\tview.classList.add('output');\n\tthis.view = view;\n\t\n\tview.innerText = ``;\n}\n\nimport {Tab} from './Tab';\nimport {Tools} from \"../DOM/Tools\";\n\nexport const OutputTab = function(tabs, data) {\n\tTab.call(this, tabs, data);\n\n\tlet view = document.createElement('div');\n\tview.classList.add('cl-pg-view');\n\tview.classList.add('output');\n\tthis.view = view;\n\t\n\tview.innerText = ``;\n}\nimport {Tab} from './Tab';\nimport {Tools} from \"../DOM/Tools\";\n\nexport const OutputTab = function(tabs, data) {\n\tTab.call(this, tabs, data);\n\n\tlet view = document.createElement('div');\n\tview.classList.add('cl-pg-view');\n\tview.classList.add('output');\n\tthis.view = view;\n\t\n\tview.innerText = ``;\n}\n\nOutputTab.prototype = Object.create(Tab.prototype);\nOutputTab.prototype.constructor = OutputTab;";

  //this.set(text + text + text + text);
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
/* harmony export */   Tab: () => (/* binding */ Tab)
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
  li.appendChild(menu);
  // let img = document.createElement('img');
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
  this.set = function (text) {};

  //
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
/* harmony export */   DragAndDrop: () => (/* binding */ DragAndDrop)
/* harmony export */ });
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
      for (var _i = 0, _dropViews = dropViews; _i < _dropViews.length; _i++) {
        var view = _dropViews[_i];
        //
        // Is the view enabled?
        //
        var viewElement = view.view.element;
        if (viewElement.parentNode.style.display === 'none') {
          continue;
        }

        //
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ready: () => (/* binding */ Ready)
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
/* harmony export */   PlaygroundFactory: () => (/* binding */ PlaygroundFactory)
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

/***/ "./.yarn/__virtual__/css-loader-virtual-70302f7c26/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-e5f333dddc/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./vendor/cl/playground/_playground.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-70302f7c26/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-e5f333dddc/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./vendor/cl/playground/_playground.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../.yarn/__virtual__/css-loader-virtual-70302f7c26/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./.yarn/__virtual__/css-loader-virtual-70302f7c26/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../.yarn/__virtual__/css-loader-virtual-70302f7c26/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-70302f7c26/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../.yarn/__virtual__/css-loader-virtual-70302f7c26/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/getUrl.js */ "./.yarn/__virtual__/css-loader-virtual-70302f7c26/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/menu-check.png */ "./vendor/cl/playground/img/menu-check.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bars.png */ "./vendor/cl/playground/img/bars.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `div.cl-playground div.toast {
  position: absolute;
  bottom: 0;
  visibility: hidden;
  transform: translateY(2.3em);
  z-index: 400;
  transition: all 0.4s ease-in-out 0s, visibility 0s linear 0.4s, z-index 0s linear 0.01s;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.1em;
  left: calc(50% - 30em/2);
  width: 30em;
  background-color: #151515;
  color: white;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0.5em;
}
div.cl-playground div.toast.toast-active {
  visibility: visible;
  transform: translateY(0%);
  transition-delay: 0s, 0s, 0.4s;
  z-index: 400;
}

div.cl-playground {
  display: none;
}

div.cl-playground nav.cl-pg-menubar {
  flex: 0 1 auto;
  position: relative;
  z-index: 100;
  margin: 0;
  border: 0;
  padding: 0;
  background-color: #f0f3f0;
  border-bottom: thin solid #808080;
  font-size: 0.9rem;
}
div.cl-playground nav.cl-pg-menubar li:hover {
  background: #00796B;
}
div.cl-playground nav.cl-pg-menubar li {
  user-select: none;
  cursor: pointer;
}
div.cl-playground nav.cl-pg-menubar li a {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.9rem;
  color: black;
  text-decoration: none;
}
div.cl-playground nav.cl-pg-menubar li a:link, div.cl-playground nav.cl-pg-menubar li a:visited {
  color: black;
}
div.cl-playground nav.cl-pg-menubar > ul {
  list-style-type: none;
  margin: 0;
  border: 0;
  padding: 0;
}
div.cl-playground nav.cl-pg-menubar > ul img.check {
  vertical-align: baseline;
  width: 19px;
  height: 16px;
  content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
div.cl-playground nav.cl-pg-menubar > ul > li {
  display: inline-block;
  margin: 0;
  border: 0;
  padding: 0.25em 2em 0.25em 0.5em;
  position: relative;
}
div.cl-playground nav.cl-pg-menubar > ul > li a {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.9rem;
  color: black;
  text-decoration: none;
}
div.cl-playground nav.cl-pg-menubar > ul > li a:link, div.cl-playground nav.cl-pg-menubar > ul > li a:visited {
  color: black;
}
div.cl-playground nav.cl-pg-menubar > ul ul {
  visibility: hidden;
  opacity: 0;
  transform: translateY(-2em);
  z-index: -1;
  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;
  list-style-type: none;
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 100%;
  margin: 1px 0 0 0;
  background-color: #f0f3f0;
  padding: 0;
  border: 1px solid #808080;
  border-top-width: 0;
}
div.cl-playground nav.cl-pg-menubar > ul ul > li {
  padding: 0 5px;
  margin: 0;
  overflow: hidden;
}
div.cl-playground nav.cl-pg-menubar > ul ul > li a {
  display: inline-block;
  width: 8em;
  padding-top: 5px;
  padding-bottom: 5px;
}
div.cl-playground nav.cl-pg-menubar > ul ul > li.menu-disabled a {
  opacity: 0.3;
}
div.cl-playground nav.cl-pg-menubar > ul ul.cl-pg-menu-open {
  visibility: visible;
  opacity: 1;
  z-index: 100;
  transform: translateY(0%);
  transition-delay: 0s, 0s, 0.2s;
}
div.cl-playground nav.cl-pg-menubar > ul ul.edit-menu a {
  width: 6em;
}
div.cl-playground nav.cl-pg-menubar > ul ul.option-menu a {
  width: 11em;
}
div.cl-playground nav.cl-pg-menubar > ul ul.file-menu a {
  width: 6em;
}
div.cl-playground nav.cl-pg-menubar > ul ul.help-menu a {
  width: 7.5em;
}
div.cl-playground nav.cl-pg-menubar > ul .ul-state-active {
  color: red;
}
div.cl-playground nav.cl-pg-menubar > ul li.menu-divider {
  height: 1px;
  border: 0 solid black;
  border-top-width: 1px;
}

div.cl-playground div.work {
  flex: 1 1 auto;
  position: relative;
  width: 100%;
  background: black;
}

div.cl-playground div.cl-pg-overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #a00;
  opacity: 0.05;
  z-index: 2000;
  display: none;
}
div.cl-playground div.cl-pg-main {
  line-height: normal;
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

div.cl-playground-full {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: white;
}

div.cl-playground-window {
  position: relative;
  width: 100%;
  height: 600px;
  margin: 0;
  padding: 0;
  border: thin solid #aaaaaa;
  border-bottom: none;
  background: white;
  min-height: 100px;
  min-width: 400px;
}

div.cl-playground-gap-before, div.cl-playground-gap-after {
  margin-top: 0;
  margin-bottom: 0;
  height: 1px;
}

div.cl-playground-gap-after {
  height: 1em;
}

div.cl-playground div.cl-pg-tabs {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  font-size: 0.8rem;
  padding: 0;
  background: #ddd;
  border: 0;
}
div.cl-playground div.cl-pg-tabs > ul {
  margin: 0;
  padding: 3px 0 0 2px;
  background: transparent;
  border: 0;
  list-style: none;
}
div.cl-playground div.cl-pg-tabs > ul > li {
  position: relative;
  display: inline-block;
  font-size: 0.8rem;
  padding: 0.25em 0.25em 0.45em 0;
  min-width: 6em;
  text-align: center;
  cursor: pointer;
  background: #ccc;
  border: 1px solid black;
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  margin: 1px 3px -1px 0;
  white-space: nowrap;
  z-index: 18;
}
div.cl-playground div.cl-pg-tabs > ul > li a:first-child {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: inline-block;
  padding: 0 0.25em;
  text-decoration: none;
  color: black;
  outline: 0;
  user-select: none;
}
div.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) {
  float: right;
  display: inline-block;
  margin-top: -2px;
  padding: 0;
}
div.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) img {
  width: 12px;
  height: auto;
}
div.cl-playground div.cl-pg-tabs > ul > li.selected {
  background: white;
  z-index: 22;
}
div.cl-playground div.cl-pg-tabs > ul > li.selected a {
  color: black;
}
div.cl-playground div.cl-pg-tabs div.cl-pg-views {
  position: absolute;
  left: 0;
  top: 29px;
  right: 0;
  bottom: 0;
  z-index: 20;
}
div.cl-playground div.cl-pg-tabs div.cl-pg-view {
  position: absolute;
  display: none;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 20;
  margin: 0;
  padding: 0;
  border: 0;
}
div.cl-playground div.cl-pg-tabs div.cl-pg-view.selected {
  display: block;
  border-top: 1px solid black;
}
div.cl-playground div.cl-tab-menu {
  position: absolute;
  left: calc(100% - 17px);
  top: 0;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-2em);
  z-index: -1;
  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;
}
div.cl-playground div.cl-tab-menu div {
  position: absolute;
  width: 14px;
  height: 27px;
  top: 4px;
  left: 0;
  border: 1px solid #808080;
  border-bottom-width: 0;
  background-color: #f0f3f0;
}
div.cl-playground div.cl-tab-menu div img {
  position: absolute;
  top: 0;
  left: 0;
  width: 12px;
  height: auto;
}
div.cl-playground div.cl-tab-menu ul {
  list-style-type: none;
  overflow: hidden;
  margin: 30px 0 0 0;
  background-color: #f0f3f0;
  padding: 0;
  border: 1px solid #808080;
}
div.cl-playground div.cl-tab-menu ul > li {
  padding: 0 5px;
  margin: 0;
  overflow: hidden;
}
div.cl-playground div.cl-tab-menu ul > li a {
  display: inline-block;
  width: 8em;
  padding-top: 5px;
  padding-bottom: 5px;
}
div.cl-playground div.cl-tab-menu ul > li.menu-disabled a {
  opacity: 0.3;
}
div.cl-playground div.cl-tab-menu.cl-menu-open {
  visibility: visible;
  opacity: 1;
  z-index: 100;
  transform: translateY(0%);
  transition-delay: 0s, 0s, 0.2s;
}

div.cl-playground div.cl-playground-root, div.cl-playground div.cl-playground-left, div.cl-playground div.cl-playground-right,
div.cl-playground div.cl-playground-top, div.cl-playground div.cl-playground-bottom {
  position: relative;
  display: flex;
  flex: 1 1 auto;
  box-sizing: border-box;
  background: white;
}
div.cl-playground div.cl-playground-left {
  position: relative;
  flex: 0 1 auto;
  border-right: 1px solid #888;
}
div.cl-playground div.cl-playground-left div.cl-bar {
  position: absolute;
  margin: 0;
  border: 0;
  padding: 0;
  top: 0;
  height: 100%;
  right: -5px;
  width: 10px;
  background: transparent;
  z-index: 100;
  cursor: ew-resize;
}
div.cl-playground div.cl-playground-top {
  flex: 0 1 auto;
  width: 100%;
  border-bottom: 1px solid #888;
}
div.cl-playground div.cl-playground-top div.cl-bar {
  position: absolute;
  margin: 0;
  border: 0;
  padding: 0;
  bottom: -5px;
  height: 10px;
  width: 100%;
  background: transparent;
  z-index: 2;
  cursor: ns-resize;
}
div.cl-playground div.cl-playground-bottom {
  width: 100%;
  height: auto;
}
div.cl-playground div.cl-playground-root {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

div.cl-pg-nums {
  display: inline-block;
  flex: 0 0 auto;
  background: #eee;
  width: 2em;
  padding: 4px 0;
  overflow: hidden;
  margin: 0;
}
div.cl-pg-nums p {
  font-size: 0.8em;
  line-height: 16px;
  margin: 0;
  padding: 0 3px 0 0;
  border: 0;
  text-align: right;
  color: #777;
}

div.cl-pg-about {
  width: auto !important;
}
div.cl-pg-about figure {
  margin: 0;
  width: 400px;
  height: 225px;
  background: black;
}
div.cl-pg-about div.cl-pg-about-div {
  padding: 1em;
}
div.cl-pg-about div.cl-pg-about-div h1 {
  font-size: 1.5em;
  text-align: center;
}
div.cl-pg-about div.cl-pg-about-div p {
  text-align: center;
}

div.cl-playground div.cl-pg-view.editor {
  overflow: hidden;
}
div.cl-playground div.cl-pg-view.editor > div {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background: white;
  padding: 0;
  display: flex;
  flex-direction: row;
}
div.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor {
  margin: 0;
  display: block;
  flex: 1 1 auto;
  height: 100%;
}
div.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor textarea {
  line-height: 16px;
  margin: 0;
  padding: 4px 0 0 3px;
  border: 0;
  overflow: auto;
  width: 100%;
  height: 100%;
  min-height: 100%;
  font-size: 1em;
  font-family: monospace, monospace;
  white-space: pre;
  overflow-wrap: normal;
}

div.cl-playground div.cl-pg-view.output {
  overflow: hidden;
}
div.cl-playground div.cl-pg-view.output > div {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background: white;
  padding: 0;
  display: flex;
  flex-direction: row;
}
div.cl-playground div.cl-pg-view.output > div pre {
  display: block;
  flex: 1 1 auto;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  line-height: 16px;
  margin: 0;
  padding: 4px 0 0 3px;
  border: 0;
  overflow: auto;
  height: 100%;
}`, "",{"version":3,"sources":["webpack://./vendor/cl/playground/sass/partials/_toast.scss","webpack://./vendor/cl/playground/sass/modules/_variables.scss","webpack://./vendor/cl/playground/sass/modules/_colors.scss","webpack://./vendor/cl/playground/_playground.scss","webpack://./vendor/cl/playground/sass/partials/_playground.scss","webpack://./vendor/cl/playground/sass/partials/_menu.scss","webpack://./vendor/cl/playground/sass/modules/_fonts.scss","webpack://./vendor/cl/playground/sass/partials/_work.scss","webpack://./vendor/cl/playground/sass/partials/_main.scss","webpack://./vendor/cl/playground/sass/partials/_tabs.scss","webpack://./vendor/cl/playground/sass/partials/_pane.scss","webpack://./vendor/cl/playground/sass/partials/_line_numbers.scss","webpack://./vendor/cl/playground/sass/partials/_about.scss","webpack://./vendor/cl/playground/sass/partials/_tab_editor.scss","webpack://./vendor/cl/playground/sass/partials/_tab_output.scss"],"names":[],"mappings":"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","sourcesContent":["div.cl-playground\n{\n  $toast-transition-time: 0.4s;\n\n  div.toast {\n    position: absolute;\n    bottom: 0;\n\n    visibility: hidden;\n    transform: translateY(2.3em);\n    z-index: 400;\n    transition: all $toast-transition-time ease-in-out 0s, visibility 0s linear $toast-transition-time, z-index 0s linear 0.01s;\n\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: $toast-font-size;\n    left: calc(50% - #{$toast-width}/2);\n    width: $toast-width;\n    background-color: $toast-background;\n    color: $toast-text;\n    text-align: center;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    padding: 0.5em;\n  }\n\n  div.toast.toast-active {\n    visibility: visible;\n    transform: translateY(0%);\n    transition-delay: 0s, 0s, $toast-transition-time;\n    z-index: 400;\n\n  }\n}","$toast-font-size: 1.1em;\n$toast-width: 30em;\n\n$drag-bar-width: 10px;\n\n$tab-corner-radius: 5px;\n","// The major colors\n// We have a primary color, two secondary colors, and a complementary color.\n$dark-primary: #00796B;\n$primary: #009688;\n$light-primary: #B2DFDB;\n$accent: #607D8B;\n$primary-text: #212121;\n$divider-color: #BDBDBD;\n$secondary-text: #606060;\n\n$comp: #c41425;\n$window-borders: #aaaaaa;\n\n\n\n$tabs-background: #ddd;\n$tab-background: #ccc;\n$tab-text: black;\n$tab-selected-background: white;\n$tab-selected-text: black;\n\n$menu-focus: $dark-primary;\n$menu-background: #f0f3f0;\n$menu-color: black;\n$menu-divider-color: black;\n$menu-border-color: #808080;\n\n$resizer: $dark-primary;\n\n$toast-background: #151515;\n$toast-text: white;","div.cl-playground div.toast {\n  position: absolute;\n  bottom: 0;\n  visibility: hidden;\n  transform: translateY(2.3em);\n  z-index: 400;\n  transition: all 0.4s ease-in-out 0s, visibility 0s linear 0.4s, z-index 0s linear 0.01s;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1.1em;\n  left: calc(50% - 30em/2);\n  width: 30em;\n  background-color: #151515;\n  color: white;\n  text-align: center;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding: 0.5em;\n}\ndiv.cl-playground div.toast.toast-active {\n  visibility: visible;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.4s;\n  z-index: 400;\n}\n\ndiv.cl-playground {\n  display: none;\n}\n\ndiv.cl-playground nav.cl-pg-menubar {\n  flex: 0 1 auto;\n  position: relative;\n  z-index: 100;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background-color: #f0f3f0;\n  border-bottom: thin solid #808080;\n  font-size: 0.9rem;\n}\ndiv.cl-playground nav.cl-pg-menubar li:hover {\n  background: #00796B;\n}\ndiv.cl-playground nav.cl-pg-menubar li {\n  user-select: none;\n  cursor: pointer;\n}\ndiv.cl-playground nav.cl-pg-menubar li a {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\ndiv.cl-playground nav.cl-pg-menubar li a:link, div.cl-playground nav.cl-pg-menubar li a:visited {\n  color: black;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul {\n  list-style-type: none;\n  margin: 0;\n  border: 0;\n  padding: 0;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul img.check {\n  vertical-align: baseline;\n  width: 19px;\n  height: 16px;\n  content: url(\"../../img/menu-check.png\");\n}\ndiv.cl-playground nav.cl-pg-menubar > ul > li {\n  display: inline-block;\n  margin: 0;\n  border: 0;\n  padding: 0.25em 2em 0.25em 0.5em;\n  position: relative;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul > li a {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul > li a:link, div.cl-playground nav.cl-pg-menubar > ul > li a:visited {\n  color: black;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul {\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n  list-style-type: none;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: 100%;\n  margin: 1px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n  border-top-width: 0;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li.menu-disabled a {\n  opacity: 0.3;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.cl-pg-menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.edit-menu a {\n  width: 6em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.option-menu a {\n  width: 11em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.file-menu a {\n  width: 6em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul ul.help-menu a {\n  width: 7.5em;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul .ul-state-active {\n  color: red;\n}\ndiv.cl-playground nav.cl-pg-menubar > ul li.menu-divider {\n  height: 1px;\n  border: 0 solid black;\n  border-top-width: 1px;\n}\n\ndiv.cl-playground div.work {\n  flex: 1 1 auto;\n  position: relative;\n  width: 100%;\n  background: black;\n}\n\ndiv.cl-playground div.cl-pg-overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #a00;\n  opacity: 0.05;\n  z-index: 2000;\n  display: none;\n}\ndiv.cl-playground div.cl-pg-main {\n  line-height: normal;\n  font-size: 1rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\ndiv.cl-playground-full {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: white;\n}\n\ndiv.cl-playground-window {\n  position: relative;\n  width: 100%;\n  height: 600px;\n  margin: 0;\n  padding: 0;\n  border: thin solid #aaaaaa;\n  border-bottom: none;\n  background: white;\n  min-height: 100px;\n  min-width: 400px;\n}\n\ndiv.cl-playground-gap-before, div.cl-playground-gap-after {\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 1px;\n}\n\ndiv.cl-playground-gap-after {\n  height: 1em;\n}\n\ndiv.cl-playground div.cl-pg-tabs {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  font-size: 0.8rem;\n  padding: 0;\n  background: #ddd;\n  border: 0;\n}\ndiv.cl-playground div.cl-pg-tabs > ul {\n  margin: 0;\n  padding: 3px 0 0 2px;\n  background: transparent;\n  border: 0;\n  list-style: none;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li {\n  position: relative;\n  display: inline-block;\n  font-size: 0.8rem;\n  padding: 0.25em 0.25em 0.45em 0;\n  min-width: 6em;\n  text-align: center;\n  cursor: pointer;\n  background: #ccc;\n  border: 1px solid black;\n  border-bottom: none;\n  border-radius: 5px 5px 0 0;\n  margin: 1px 3px -1px 0;\n  white-space: nowrap;\n  z-index: 18;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li a:first-child {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  display: inline-block;\n  padding: 0 0.25em;\n  text-decoration: none;\n  color: black;\n  outline: 0;\n  user-select: none;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) {\n  float: right;\n  display: inline-block;\n  margin-top: -2px;\n  padding: 0;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) img {\n  width: 12px;\n  height: auto;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li.selected {\n  background: white;\n  z-index: 22;\n}\ndiv.cl-playground div.cl-pg-tabs > ul > li.selected a {\n  color: black;\n}\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-views {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n}\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-view {\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 20;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-view.selected {\n  display: block;\n  border-top: 1px solid black;\n}\ndiv.cl-playground div.cl-tab-menu {\n  position: absolute;\n  left: calc(100% - 17px);\n  top: 0;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n}\ndiv.cl-playground div.cl-tab-menu div {\n  position: absolute;\n  width: 14px;\n  height: 27px;\n  top: 4px;\n  left: 0;\n  border: 1px solid #808080;\n  border-bottom-width: 0;\n  background-color: #f0f3f0;\n}\ndiv.cl-playground div.cl-tab-menu div img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 12px;\n  height: auto;\n}\ndiv.cl-playground div.cl-tab-menu ul {\n  list-style-type: none;\n  overflow: hidden;\n  margin: 30px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n}\ndiv.cl-playground div.cl-tab-menu ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\ndiv.cl-playground div.cl-tab-menu ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\ndiv.cl-playground div.cl-tab-menu ul > li.menu-disabled a {\n  opacity: 0.3;\n}\ndiv.cl-playground div.cl-tab-menu.cl-menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\n\ndiv.cl-playground div.cl-playground-root, div.cl-playground div.cl-playground-left, div.cl-playground div.cl-playground-right,\ndiv.cl-playground div.cl-playground-top, div.cl-playground div.cl-playground-bottom {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  background: white;\n}\ndiv.cl-playground div.cl-playground-left {\n  position: relative;\n  flex: 0 1 auto;\n  border-right: 1px solid #888;\n}\ndiv.cl-playground div.cl-playground-left div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  top: 0;\n  height: 100%;\n  right: -5px;\n  width: 10px;\n  background: transparent;\n  z-index: 100;\n  cursor: ew-resize;\n}\ndiv.cl-playground div.cl-playground-top {\n  flex: 0 1 auto;\n  width: 100%;\n  border-bottom: 1px solid #888;\n}\ndiv.cl-playground div.cl-playground-top div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  bottom: -5px;\n  height: 10px;\n  width: 100%;\n  background: transparent;\n  z-index: 2;\n  cursor: ns-resize;\n}\ndiv.cl-playground div.cl-playground-bottom {\n  width: 100%;\n  height: auto;\n}\ndiv.cl-playground div.cl-playground-root {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\ndiv.cl-pg-nums {\n  display: inline-block;\n  flex: 0 0 auto;\n  background: #eee;\n  width: 2em;\n  padding: 4px 0;\n  overflow: hidden;\n  margin: 0;\n}\ndiv.cl-pg-nums p {\n  font-size: 0.8em;\n  line-height: 16px;\n  margin: 0;\n  padding: 0 3px 0 0;\n  border: 0;\n  text-align: right;\n  color: #777;\n}\n\ndiv.cl-pg-about {\n  width: auto !important;\n}\ndiv.cl-pg-about figure {\n  margin: 0;\n  width: 400px;\n  height: 225px;\n  background: black;\n}\ndiv.cl-pg-about div.cl-pg-about-div {\n  padding: 1em;\n}\ndiv.cl-pg-about div.cl-pg-about-div h1 {\n  font-size: 1.5em;\n  text-align: center;\n}\ndiv.cl-pg-about div.cl-pg-about-div p {\n  text-align: center;\n}\n\ndiv.cl-playground div.cl-pg-view.editor {\n  overflow: hidden;\n}\ndiv.cl-playground div.cl-pg-view.editor > div {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\ndiv.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor {\n  margin: 0;\n  display: block;\n  flex: 1 1 auto;\n  height: 100%;\n}\ndiv.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor textarea {\n  line-height: 16px;\n  margin: 0;\n  padding: 4px 0 0 3px;\n  border: 0;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  font-size: 1em;\n  font-family: monospace, monospace;\n  white-space: pre;\n  overflow-wrap: normal;\n}\n\ndiv.cl-playground div.cl-pg-view.output {\n  overflow: hidden;\n}\ndiv.cl-playground div.cl-pg-view.output > div {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\ndiv.cl-playground div.cl-pg-view.output > div pre {\n  display: block;\n  flex: 1 1 auto;\n  background: url(\"../../img/bars.png\");\n  line-height: 16px;\n  margin: 0;\n  padding: 4px 0 0 3px;\n  border: 0;\n  overflow: auto;\n  height: 100%;\n}","div.cl-playground {\n  display: none;\n}\n","div.cl-playground nav.cl-pg-menubar {\n  flex: 0 1 auto;\n  position: relative;\n  z-index: 100;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background-color: $menu-background;\n  border-bottom: thin solid #808080;\n  font-size: $menu-font-size;\n\n  li:hover {\n    background: $menu-focus;\n  }\n\n  li {\n    user-select: none;\n    cursor: pointer;\n\n    a {\n      font-family: $menu-font;\n      font-size: $menu-font-size;\n      color: $menu-color;\n      text-decoration: none;\n    }\n\n    a:link, a:visited {\n      color: $menu-color;\n    }\n  }\n\n  //\n  // Top level menu\n  //\n  > ul {\n    list-style-type: none;\n    margin: 0;\n    border: 0;\n    padding: 0;\n\n    img.check {\n      vertical-align: baseline;\n      width: 19px;\n      height: 16px;\n      content: url(\"../../img/menu-check.png\");\n    }\n\n    > li {\n      display: inline-block;\n      margin: 0;\n      border: 0;\n      padding: 0.25em 2em 0.25em 0.5em;\n      position: relative;\n\n      a {\n        font-family: $menu-font;\n        font-size: $menu-font-size;\n        color: $menu-color;\n        text-decoration: none;\n      }\n\n      a:link, a:visited {\n        color: $menu-color;\n      }\n    }\n\n    //\n    // Drop-down menu\n    //\n    ul {\n      visibility: hidden;\n      opacity: 0;\n      transform: translateY(-2em);\n      z-index: -1;\n      transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n\n      list-style-type: none;\n      // display: none;\n      position: absolute;\n      overflow: hidden;\n      left: 0;\n      top: 100%;\n      margin: 1px 0 0 0;\n      background-color: $menu-background;\n      padding: 0;\n      border: 1px solid $menu-border-color;\n      border-top-width: 0;\n\n      > li {\n        padding: 0 5px;\n        margin: 0;\n        overflow: hidden;\n\n        a {\n          display: inline-block;\n          width: 8em;\n          padding-top: 5px;\n          padding-bottom: 5px;\n        }\n      }\n\n      > li.menu-disabled {\n        a {\n          opacity: 0.3;\n        }\n      }\n    }\n\n    ul.cl-pg-menu-open {\n      visibility: visible;\n      opacity: 1;\n      z-index: 100;\n      transform: translateY(0%);\n      transition-delay: 0s, 0s, 0.2s;\n    }\n\n    ul.edit-menu a {\n      width: 6em;\n    }\n\n    ul.option-menu a {\n      width: 11em;\n    }\n\n    ul.file-menu a {\n      width: 6em;\n    }\n\n    ul.help-menu a {\n      width: 7.5em;\n    }\n\n    .ul-state-active {\n      color: red;\n    }\n\n    li.menu-divider {\n      height: 1px;\n      border: 0 solid $menu-divider-color;\n      border-top-width: 1px;\n    }\n  }\n}\n\n","$menu-font: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n$menu-font-size: 0.90rem;\n\n$tabs-font: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n$tabs-font-size: 0.80rem;","div.cl-playground div.work {\n  flex: 1 1 auto;\n  position: relative;\n  width: 100%;\n  background: black;\n}\n\n","div.cl-playground {\n\n  div.cl-pg-overlay {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background: #a00;\n    opacity: 0.05;\n    z-index: 2000;\n    display: none;\n  }\n\n  div.cl-pg-main {\n    // Normalizations\n    line-height: normal;\n    font-size: 1rem;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n\ndiv.cl-playground-full {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: white;\n}\n\ndiv.cl-playground-window {\n  position: relative;\n  width: 100%;\n  height: 600px;\n  margin: 0;\n  padding: 0;\n  border: thin solid $window-borders;\n  border-bottom: none;\n  background: white;\n  min-height: 100px;\n  min-width: 400px;\n}\n\ndiv.cl-playground-gap-before, div.cl-playground-gap-after {\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 1px;\n}\n\ndiv.cl-playground-gap-after {\n  height: 1em;\n}\n\n","\ndiv.cl-playground {\n  div.cl-pg-tabs {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    font-size: $tabs-font-size;\n\n    padding: 0;\n    background: $tabs-background;\n    border: 0;\n\n    >ul {\n      margin: 0;\n      padding: 3px 0 0 2px;\n      background: transparent;\n      border: 0;\n      list-style: none;\n\n\n      >li {\n        position: relative;\n        display: inline-block;\n        font-size: $tabs-font-size;\n        padding: 0.25em 0.25em 0.45em 0;\n        min-width: 6em;\n        text-align: center;\n        cursor: pointer;\n        background: $tab-background;\n        border: 1px solid black;\n        border-bottom: none;\n        border-radius: $tab-corner-radius $tab-corner-radius 0 0;\n        margin: 1px 3px -1px 0;\n        white-space: nowrap;\n        z-index: 18;\n\n        a:first-child {\n          font-family: $tabs-font;\n          display: inline-block;\n          padding: 0 0.25em;\n          text-decoration: none;\n          color: $tab-text;\n          outline: 0;\n          user-select: none;\n        }\n\n        a:nth-child(2) {\n          float: right;\n          display: inline-block;\n          margin-top: -2px;\n          padding: 0;\n\n          img {\n            width: 12px;\n            height: auto;\n          }\n        }\n      }\n\n      >li.selected {\n        background: $tab-selected-background;\n        z-index: 22;\n\n        a {\n          color: $tab-selected-text;\n        }\n      }\n    }\n\n    div.cl-pg-views {\n      position: absolute;\n      left: 0;\n      top: 29px;\n      right: 0;\n      bottom: 0;\n      z-index: 20;\n    }\n\n    div.cl-pg-view {\n      position: absolute;\n      display: none;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      height: 100%;\n      width: 100%;\n      z-index: 20;\n      margin: 0;\n      padding: 0;\n      border: 0;\n    }\n\n    div.cl-pg-view.selected {\n      display: block;\n      border-top: 1px solid black;\n    }\n  }\n\n  div.cl-tab-menu {\n    position: absolute;\n    left: calc(100% - 17px);\n    top: 0;\n    visibility: hidden;\n    opacity: 0;\n    transform: translateY(-2em);\n    z-index: -1;\n    transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n\n    div {\n      position: absolute;\n      width: 14px;\n      height: 27px;\n      top: 4px;\n      left: 0;\n      border: 1px solid $menu-border-color;\n      border-bottom-width: 0;\n      background-color: $menu-background;\n\n      img {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 12px;\n        height: auto;\n      }\n    }\n\n    //\n    // Tab drop-down menu\n    //\n    ul {\n\n      list-style-type: none;\n      overflow: hidden;\n\n      margin: 30px 0 0 0;\n      background-color: $menu-background;\n      padding: 0;\n      border: 1px solid $menu-border-color;\n      //border-top-width: 0;\n\n      > li {\n        padding: 0 5px;\n        margin: 0;\n        overflow: hidden;\n\n        a {\n          display: inline-block;\n          width: 8em;\n          padding-top: 5px;\n          padding-bottom: 5px;\n        }\n      }\n\n      > li.menu-disabled {\n        a {\n          opacity: 0.3;\n        }\n      }\n    }\n  }\n\n\n\n  div.cl-tab-menu.cl-menu-open {\n    visibility: visible;\n    opacity: 1;\n    z-index: 100;\n    transform: translateY(0%);\n    transition-delay: 0s, 0s, 0.2s;\n  }\n}","@use \"sass:math\";\n\ndiv.cl-playground {\n  div.cl-playground-root, div.cl-playground-left, div.cl-playground-right,\n  div.cl-playground-top, div.cl-playground-bottom {\n    position: relative;\n    display: flex;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    background: white;\n  }\n\n  div.cl-playground-left {\n    position: relative;\n    flex: 0 1 auto;\n    border-right: 1px solid #888;\n\n    div.cl-bar {\n      position: absolute;\n      margin: 0;\n      border: 0;\n      padding: 0;\n      top: 0;\n      height: 100%;\n      right: -5px; // math.div(-$drag-bar-width, 2);\n      width: $drag-bar-width;\n      background: transparent;\n      z-index: 100;\n      cursor: ew-resize;\n    }\n  }\n\n  div.cl-playground-right {\n  }\n\n  div.cl-playground-top {\n    flex: 0 1 auto;\n    width: 100%;\n    border-bottom: 1px solid #888;\n\n    div.cl-bar {\n      position: absolute;\n      margin: 0;\n      border: 0;\n      padding: 0;\n      bottom: -5px; // math.div(-$drag-bar-width, 2);\n      height: $drag-bar-width;\n      width: 100%;\n      background: transparent;\n      z-index: 2;\n      cursor: ns-resize;\n    }\n  }\n\n  div.cl-playground-bottom {\n    // border-left: 5px solid #18453b;\n    width: 100%;\n    height: auto;\n  }\n\n  div.cl-playground-root {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n}\n","div.cl-pg-nums {\n  display: inline-block;\n  flex: 0 0 auto;\n\n  background: #eee;\n  width: 2em;\n  padding: 4px 0;\n  overflow: hidden;\n  margin: 0;\n\n  p {\n    font-size: 0.8em;\n    line-height: 16px;\n    margin: 0;\n    padding: 0 3px 0 0;\n    border: 0;\n    text-align: right;\n    color: #777;\n  }\n}\n","div.cl-pg-about {\n  width: auto !important;\n\n  figure {\n    margin: 0;\n    width: 400px;\n    height: 225px;\n    background: black;\n  }\n\n  div.cl-pg-about-div {\n    padding: 1em;\n\n    h1 {\n      font-size: 1.5em;\n      text-align: center;\n    }\n\n    p {\n      text-align: center;\n    }\n  }\n\n}","div.cl-playground {\n  div.cl-pg-view.editor {\n    overflow: hidden;\n\n    // innerDiv\n    > div {\n      position: absolute;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      width: 100%;\n      background: white;\n      padding: 0;\n      display: flex;\n      flex-direction: row;\n\n      div.cl-pg-editor {\n        margin: 0;\n        display: block;\n        flex: 1 1 auto;\n        height: 100%;\n\n        textarea {\n          line-height: 16px;\n\n          margin: 0;\n          padding: 4px 0 0 3px;\n          border: 0;\n          overflow: auto;\n          width: 100%;\n          height: 100%;\n\n          min-height: 100%;\n\n          font-size: 1em;\n          font-family: monospace, monospace;\n          white-space: pre;\n          overflow-wrap: normal\n        }\n      }\n\n    }\n  }\n}\n","div.cl-playground {\n  div.cl-pg-view.output {\n    overflow: hidden;\n\n    > div {\n      position: absolute;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      width: 100%;\n      background: white;\n      padding: 0;\n      display: flex;\n      flex-direction: row;\n\n      pre {\n        display: block;\n        flex: 1 1 auto;\n        background: url('../../img/bars.png');\n        line-height: 16px;\n\n        margin: 0;\n        padding: 4px 0 0 3px;\n        border: 0;\n        overflow: auto;\n        height: 100%;\n      }\n\n\n    }\n\n\n\n\n\n  }\n\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-d18f041846/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-d18f041846/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-d18f041846/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./.yarn/__virtual__/style-loader-virtual-d18f041846/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-d18f041846/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./.yarn/__virtual__/style-loader-virtual-d18f041846/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-d18f041846/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./.yarn/__virtual__/style-loader-virtual-d18f041846/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-d18f041846/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./.yarn/__virtual__/style-loader-virtual-d18f041846/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-d18f041846/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./.yarn/__virtual__/style-loader-virtual-d18f041846/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_e5f333dddc_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../.yarn/__virtual__/css-loader-virtual-70302f7c26/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!../../../.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!../../../.yarn/__virtual__/sass-loader-virtual-e5f333dddc/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./_playground.scss */ "./.yarn/__virtual__/css-loader-virtual-70302f7c26/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-e5f333dddc/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./vendor/cl/playground/_playground.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _yarn_virtual_style_loader_virtual_d18f041846_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_e5f333dddc_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_e5f333dddc_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_e5f333dddc_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _yarn_virtual_css_loader_virtual_70302f7c26_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_e5f333dddc_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_playground_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

module.exports = JSON.parse('{"name":"playground-cl","version":"2.0.0","description":"CourseLib Playground IDE","main":"index.js","keywords":["Education","Course Web Sites","Karnaugh Maps"],"author":"Charles B. Owen","license":"MIT","dependencies":{"@babel/runtime":"^7.22.6","course-cl":">=0.0.1","dialog-cl":"^1.0.7","resizer-cl":"~2.4.4","site-cl":"~0.0.1"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor","Course","Users","common"], () => (__webpack_exec__("./vendor/cl/playground/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saTlCQUFpOUIsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxZQUFZLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxhQUFhLFlBQVksTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsOENBQThDLGlDQUFpQyxpQkFBaUIseUJB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QixvQkFBb0IseUJBQXlCLHlCQUF5Qix1QkFBdUIsc0JBQXNCLDhCQUE4Qix3QkFBd0IsaUNBQWlDLHNCQUFzQiwyQkFBMkIsd0JBQXdCLHlCQUF5QiwrQkFBK0IsNkJBQTZCLDhDQUE4Qyw2QkFBNkIsNENBQTRDLFNBQVMsU0FBUyxLQUFLLEdBQUcsd0JBQXdCLDJCQUEyQix1QkFBdUIsZUFBZSwyQkFBMkIsZ0JBQWdCLGVBQWUsa0JBQWtCLG9CQUFvQiwwQkFBMEIsbUJBQW1CLHNCQUFzQiw0QkFBNEIsZUFBZSx5QkFBeUIseUJBQXlCLGdEQUFnRCw0QkFBNEIsc0JBQXNCLCtCQUErQixvQkFBb0IseUJBQXlCLHVCQUF1QixTQUFTLFdBQVcsZUFBZSxLQUFLLG1CQUFtQjtBQUNybDVCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDamdCdkMsTUFBZ047QUFDaE4sTUFBc007QUFDdE0sTUFBNk07QUFDN00sTUFBZ087QUFDaE8sTUFBeU47QUFDek4sTUFBeU47QUFDek4sTUFBNGY7QUFDNWY7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIsMk1BQW1CO0FBQy9DLHdCQUF3Qix3TkFBYTs7QUFFckMsdUJBQXVCLDZNQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLHFNQUFNO0FBQ3ZCLDZCQUE2Qiw0TUFBa0I7O0FBRS9DLGFBQWEsZ05BQUcsQ0FBQyx5Y0FBTzs7OztBQUlzYztBQUM5ZCxPQUFPLGlFQUFlLHljQUFPLElBQUkseWNBQU8sVUFBVSx5Y0FBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2luZGV4LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvQWN0aW9ucy9BYm91dEFjdGlvbi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvQWN0aW9ucy9BbGxBY3Rpb25zLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvQWN0aW9ucy9TYXZlQWN0aW9uLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvRE9NL1Rvb2xzLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvR3JhcGhpY3MvVG9hc3QuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9NYWluLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvTWVudS5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9QYW5lLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvUGxheWdyb3VuZC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1RhYnMuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9UYWJzL0VkaXRvclRhYi5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1RhYnMvT3V0cHV0VGFiLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVGFicy9UYWIuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9VSS9EcmFnQW5kRHJvcC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1V0aWxpdHkvUmVhZHkuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvX3BsYXlncm91bmQuc2NzcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9fcGxheWdyb3VuZC5zY3NzPzE1ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgJy4vX3BsYXlncm91bmQuc2Nzcyc7XG5pbXBvcnQge1BsYXlncm91bmR9IGZyb20gJy4vanMvUGxheWdyb3VuZC9QbGF5Z3JvdW5kJztcbmltcG9ydCB7UGxheWdyb3VuZEZhY3Rvcnl9IGZyb20gJy4vanMvUGxheWdyb3VuZEZhY3RvcnknO1xuXG5leHBvcnQge1BsYXlncm91bmR9O1xuZXhwb3J0IHtQbGF5Z3JvdW5kIGFzIGRlZmF1bHR9O1xuXG5QbGF5Z3JvdW5kRmFjdG9yeS5jcmVhdGUoU2l0ZS5zaXRlKTtcblxuU2l0ZS5QbGF5Z3JvdW5kID0gUGxheWdyb3VuZDtcblxuIiwiaW1wb3J0IHtBY3Rpb259IGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnZGlhbG9nLWNsJztcbmltcG9ydCBwYWNrYWdlanNvbiBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nO1xuXG5leHBvcnQgY29uc3QgQWJvdXRBY3Rpb24gPSBmdW5jdGlvbihzaXRlLCBvcHRpb25zKSB7XG5cdEFjdGlvbi5jYWxsKHRoaXMsIHNpdGUsIG9wdGlvbnMpO1xuXG5cdHRoaXMuZG8gPSBmdW5jdGlvbihtYWluKSB7XG5cdFx0QWN0aW9uLnByb3RvdHlwZS5kby5jYWxsKHRoaXMsIG1haW4pO1xuXG5cdFx0Ly8gRGlhbG9nIGJveCBjb250ZW50c1xuXHRcdGxldCBjb250ZW50ID0gYFxuPGZpZ3VyZT48aW1nIHNyYz1cIiR7c2l0ZS5yb290fS92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbWcvcGxheWdyb3VuZC5qcGdcIiBhbHQ9XCJDaXJzaW0gTG9nb1wiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiMjI1XCI+PC9maWd1cmU+XG48ZGl2IGNsYXNzPVwiY2wtcGctYWJvdXQtZGl2XCI+XG48aDE+Q291cnNlTGliIFBsYXlncm91bmQ8L2gxPlxuPHA+VmVyc2lvbjogJHtwYWNrYWdlanNvbi52ZXJzaW9ufTwvcD5cbjxwPldyaXR0ZW4gYnk6IENoYXJsZXMgQi4gT3dlbjwvcD48L2Rpdj5gO1xuXG5cdFx0Y29uc3QgZGlhbG9nID0gbmV3IERpYWxvZyh7XG5cdFx0XHR0aXRsZTogJ0Fib3V0IHRoZSBQbGF5Z3JvdW5kJyxcblx0XHRcdGNvbnRlbnQ6IGNvbnRlbnQsXG5cdFx0XHQnYWRkQ2xhc3MnOiAnY2wtcGctYWJvdXQnXG5cdFx0fSk7XG5cblx0fVxufVxuXG5BYm91dEFjdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFjdGlvbi5wcm90b3R5cGUpO1xuQWJvdXRBY3Rpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWJvdXRBY3Rpb247XG5cbkFib3V0QWN0aW9uLnRhZyA9ICdhYm91dCc7IiwiLyoqXG4gKiBCYXNlIG9iamVjdCBmb3IgYW4gYWN0aW9uLlxuICogQHBhcmFtIHNpdGUgU2l0ZSBvYmplY3RcbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIHRoaXMgYWN0aW9uXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IEFjdGlvbiA9IGZ1bmN0aW9uKHNpdGUsIG9wdGlvbnMpIHtcblxuXHQvKipcblx0ICogR2V0IGFsbCBzb3VyY2VzIGZvciB0aGlzIGFjdGlvbi5cblx0ICpcblx0ICogQmFzZWQgb24gdGhlIG9wdGlvbiAnc291cmNlcycsIHdoaWNoIGFyZSB0YWIgdGFncy5cblx0ICogQHJldHVybiBvYmplY3Qgd2l0aCB0YWIgbmFtZXMgYW5kIHNvdXJjZXMuXG5cdCAqL1xuXHR0aGlzLmdldFNvdXJjZXMgPSBmdW5jdGlvbigpIHtcblx0XHQvLyBHZXQgdGhlIHJlcXVpc2l0ZSB0YWIgY29udGVudHNcblx0XHRjb25zdCBzb3VyY2VzID0ge307XG5cblx0XHRpZihvcHRpb25zLnNvdXJjZXMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnNvdXJjZXMgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBzb3VyY2VzO1xuXHRcdH1cblxuXHRcdGZvcihjb25zdCBzb3VyY2Ugb2Ygb3B0aW9ucy5zb3VyY2VzKSB7XG5cdFx0XHRjb25zdCB0YWIgPSB0aGlzLm1haW4uZ2V0VGFiKHNvdXJjZSk7XG5cdFx0XHRpZih0YWIgIT09IG51bGwpIHtcblx0XHRcdFx0c291cmNlc1tzb3VyY2VdID0ge25hbWU6IHRhYi5uYW1lLCBkYXRhOiB0YWIuZ2V0KCl9O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzb3VyY2VzO1xuXHR9XG5cblxufVxuXG5BY3Rpb24ucHJvdG90eXBlLmRvID0gZnVuY3Rpb24obWFpbikge1xuXHR0aGlzLm1haW4gPSBtYWluO1xufSIsImltcG9ydCB7U2F2ZUFjdGlvbn0gZnJvbSAnLi9TYXZlQWN0aW9uJztcbmltcG9ydCB7QWJvdXRBY3Rpb259IGZyb20gJy4vQWJvdXRBY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgQWxsQWN0aW9ucyA9IGZ1bmN0aW9uKCkge31cblxuQWxsQWN0aW9ucy5hZGRBbGwgPSBmdW5jdGlvbihQbGF5Z3JvdW5kKSB7XG5cdFBsYXlncm91bmQuYWRkQWN0aW9uKFNhdmVBY3Rpb24pO1xuXHRQbGF5Z3JvdW5kLmFkZEFjdGlvbihBYm91dEFjdGlvbik7XG59IiwiaW1wb3J0IHtBY3Rpb259IGZyb20gJy4vQWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IFNhdmVBY3Rpb24gPSBmdW5jdGlvbihzaXRlLCBvcHRpb25zKSB7XG5cdEFjdGlvbi5jYWxsKHRoaXMsIHNpdGUsIG9wdGlvbnMpO1xuXG5cdHRoaXMuZG8gPSBmdW5jdGlvbihtYWluKSB7XG5cdFx0QWN0aW9uLnByb3RvdHlwZS5kby5jYWxsKHRoaXMsIG1haW4pO1xuXG5cdFx0Ly8gR2V0IHRoZSByZXF1aXNpdGUgdGFiIGNvbnRlbnRzXG5cdFx0Y29uc3Qgc291cmNlcyA9IHRoaXMuZ2V0U291cmNlcygpO1xuXG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YXBwVGFnOiBvcHRpb25zLmFwcFRhZyxcblx0XHRcdG5hbWU6IG9wdGlvbnMubmFtZSxcblx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KHNvdXJjZXMpLFxuXHRcdFx0dHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0fTtcblxuXHRcdHNpdGUuYXBpLnBvc3QoJy9hcGkvZmlsZXN5c3RlbS9zYXZlJywgcGFyYW1zKVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdFx0aWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XG5cdFx0XHRcdFx0c2l0ZS50b2FzdCh0aGlzLCAnU3VjY2Vzc2Z1bGx5IHNhdmVkIHRvIHNlcnZlcicpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHRcdHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuU2F2ZUFjdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFjdGlvbi5wcm90b3R5cGUpO1xuU2F2ZUFjdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTYXZlQWN0aW9uO1xuXG5TYXZlQWN0aW9uLnRhZyA9ICdzYXZlJzsiLCJcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbnMgZm9yIHRoZSBET00uXG4gKiBUb29scyB0aGF0IGF2b2lkIGhhdmluZyB0byBoYXZlIGpRdWVyeSBpbnN0YWxsZWQuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IFRvb2xzID0gZnVuY3Rpb24oKSB7XG5cbn1cblxuLyoqXG4gKiBJcyBhbiBlbGVtZW50IHZpc2libGU/XG4gKiBCb3Jyb3dlZCBmcm9tIGpRdWVyeSFcbiAqIEBwYXJhbSBlbGVtXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuVG9vbHMuaXNWaXNpYmxlID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgcmV0dXJuICEhKCBlbGVtLm9mZnNldFdpZHRoIHx8IGVsZW0ub2Zmc2V0SGVpZ2h0IHx8IGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKTtcbn07XG5cbi8qKlxuICogQWRkIGEgY2xhc3MgdG8gYW4gZWxlbWVudFxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBhZGQgdG9cbiAqIEBwYXJhbSBjbGFzc05hbWUgQ2xhc3MgdG8gYWRkXG4gKi9cblRvb2xzLmFkZENsYXNzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbHNlXG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbn1cblxuVG9vbHMuYWRkQ2xhc3NlcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICBpZihjbGFzc2VzID09PSB1bmRlZmluZWQgfHwgY2xhc3NlcyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goKGNscykgPT4ge1xuICAgICAgICBUb29scy5hZGRDbGFzcyhlbGVtZW50LCBjbHMpO1xuICAgIH0pO1xufVxuXG5Ub29scy5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIGxldCByZWdFeCA9IG5ldyBSZWdFeHAoJ1xcXFxiJyArIGNsYXNzTmFtZSArICdcXFxcYicsICdnJyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlZ0V4LCBcIlwiKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBESVYgd2l0aCBhIHByb3ZpZGVkIGNsYXNzIG5hbWUuXG4gKiBAcGFyYW0gY2xhc3NOYW1lIENsYXNzIHRvIGFkZCB0byB0aGUgZGl2XG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50IHRvIHBsYWNlIGluIHRoZSBkaXYuIEhUTUwgb3IgRWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IENyZWF0ZWQgRE9NIEVsZW1lbnRcbiAqL1xuVG9vbHMuY3JlYXRlQ2xhc3NlZERpdiA9IGZ1bmN0aW9uKGNsYXNzTmFtZSwgY29udGVudCkge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBUb29scy5hZGRDbGFzcyhkaXYsIGNsYXNzTmFtZSk7XG4gICAgaWYoY29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdCAgICBUb29scy5hZGRDb250ZW50KGRpdiwgY29udGVudCk7XG4gICAgfVxuICAgIHJldHVybiBkaXY7XG59XG5cbi8qKlxuICogQWRkIGNvbnRlbnQgdG8gYW4gZWxlbWVudC5cbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gYWRkIHRvXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50LiBDYW4gYmUgSFRNTCBvciBhbiBFbGVtZW50LlxuICovXG5Ub29scy5hZGRDb250ZW50ID0gZnVuY3Rpb24oZWxlbWVudCwgY29udGVudCkge1xuICAgIGlmKFRvb2xzLmlzU3RyaW5nKGNvbnRlbnQpKSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XG4gICAgfSBlbHNlIGlmKFRvb2xzLmlzRWxlbWVudChjb250ZW50KSkge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBJcyB0aGUgcGFzc2VkIHZhbHVlIGEgc3RyaW5nP1xuICogQHBhcmFtIHZhbFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblRvb2xzLmlzU3RyaW5nID0gZnVuY3Rpb24odmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8ICgoISF2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBTdHJpbmddJyk7XG59XG5cbi8qKlxuICogSXMgdGhlIHBhc3NlZCB2YWx1ZSBhbiBIVE1MRWxlbWVudD9cbiAqIEBwYXJhbSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5Ub29scy5pc0VsZW1lbnQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICByZXR1cm4gdmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsICYmIHZhbC5ub2RlVmFsdWUgIT09IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgYW4gZWxlbWVudCAoc3BlY2lmaWNhbGx5IGl0cyBib3JkZXIgYm94LCB3aGljaCBleGNsdWRlcyBtYXJnaW5zKSByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnQuXG4gKiBAcGFyYW0gZWxlbWVudFxuICovXG5Ub29scy5vZmZzZXQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG5cdGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRyZXR1cm4ge1xuXHQgICAgbGVmdDogcmVjdC5sZWZ0ICsgZWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgICB0b3A6IHJlY3QudG9wICsgZWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICB9XG59XG5cbi8qKlxuICogRmluZCBhIGNoaWxkIGJ5IHRhZ05hbWVcbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcGFyYW0gdGFnTmFtZVxuICogQHJldHVybnMgeyp9XG4gKi9cblRvb2xzLmNoaWxkID0gZnVuY3Rpb24oZWxlbWVudCwgdGFnTmFtZSkge1xuXHRmb3IoY29uc3Qgbm9kZSBvZiBlbGVtZW50LmNoaWxkTm9kZXMpIHtcblx0ICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gdGFnTmFtZSkge1xuXHQgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCB7VG9vbHN9IGZyb20gJy4uL0RPTS9Ub29scyc7XG5cbi8qKlxuICogVG9hc3Qgbm90aWZpY2F0aW9uIHN5c3RlbVxuICogalF1ZXJ5LWZyZWVcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IFRvYXN0ID0gZnVuY3Rpb24obWFpbikge1xuXHQvKiogRGVmYXVsdCB0b2FzdCBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgKi9cblx0dGhpcy5kZWZhdWx0RHVyYXRpb24gPSAyMDAwO1xuXG5cdC8qKiBJbnRlci10b2FzdCBkZWxheSB0aW1lIGluIG1pbGxpc2Vjb25kcyAqL1xuXHR0aGlzLmludGVyVG9hc3REZWxheSA9IDUwMDtcblxuICAgIGxldCBtZXNzYWdlcyA9IFtdOyAgLy8gUGVuZGluZyBtZXNzYWdlc1xuICAgIGxldCBhY3RpdmUgPSBmYWxzZTsgLy8gSXMgdGhlcmUgYW4gYWN0aXZlIG1lc3NhZ2UgZGlzcGxheWluZz9cblxuXHRsZXQgZWxlbWVudCA9IG51bGw7XG5cblx0LyoqXG5cdCAqIENyZWF0ZSB0aGUgdG9hc3QgZGl2XG5cdCAqIEBwYXJhbSBkaXYgRGl2IHRvIHB1dCB0aGUgdG9hc3QgaW50b1xuXHQgKi9cbiAgICB0aGlzLmNyZWF0ZSA9IChkaXYpID0+IHtcblx0XHRlbGVtZW50ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdigndG9hc3QnKTtcblx0XHRkaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cblx0XHRlbGVtZW50LmlubmVySFRNTCA9ICd0ZXN0aW5nJztcbiAgICB9XG5cbiAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgIFx0aWYobWVzc2FnZXMubGVuZ3RoID4gMCAmJiAhYWN0aXZlKSB7XG5cdFx0ICAgIC8vIFNldCB0aGUgbWVzc2FnZVxuXHRcdCAgICBsZXQgbWVzc2FnZSA9IG1lc3NhZ2VzWzBdO1xuICAgICAgICAgICAgbWVzc2FnZXMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBtZXNzYWdlLm1zZztcblxuICAgICAgICAgICAgLy8gU2hvdyBpdFxuXHRcdCAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvYXN0LWFjdGl2ZScpO1xuXHRcdCAgICBhY3RpdmUgPSB0cnVlO1xuXG5cdFx0ICAgIC8vIERlbGF5IHdoaWxlIGFjdGl2ZVxuXHRcdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHQgICAgXHQvLyBIaWRlIGl0XG5cdFx0XHQgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0b2FzdC1hY3RpdmUnKTtcblxuXHRcdFx0ICAgIC8vIERlbGF5IGJldHdlZW4gdG9hc3RzXG5cdFx0XHQgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHQgICAgXHRhY3RpdmUgPSBmYWxzZTtcblx0XHRcdCAgICBcdHNob3coKTtcblx0XHRcdCAgICB9LCB0aGlzLmludGVyVG9hc3REZWxheSlcblx0XHQgICAgfSwgbWVzc2FnZS50aW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKipcblx0ICogRGlzcGxheSBhIHRvYXN0IG1lc3NhZ2Vcblx0ICogQHBhcmFtIG1zZyBNZXNzYWdlIHRvIGRpc3BsYXlcblx0ICogQHBhcmFtIHRpbWUgVGltZSB0byBkaXNwbGF5IGluIG1pbGxpc2Vjb25kcywgb21pdCBmb3IgZGVmYXVsdFxuXHQgKi9cblx0dGhpcy5tZXNzYWdlID0gZnVuY3Rpb24obXNnLCB0aW1lKSB7XG4gICAgICAgIGlmKHRpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGltZSA9IHRoaXMuZGVmYXVsdER1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZXMucHVzaCh7bXNnOiBtc2csIHRpbWU6IHRpbWV9KTtcbiAgICAgICAgc2hvdygpO1xuICAgIH1cblxuXHQvKipcblx0ICogRGlzcGxheSBhbnkgSlNPTiBlcnJvcnMgd2UgaGF2ZSByZWNlaXZlZC5cblx0ICogQHBhcmFtIGpzb25BcGkgSnNvbkFQSSBvYmplY3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgYW55IGVycm9ycyBleGlzdGVkLlxuXHQgKi9cblx0dGhpcy5qc29uRXJyb3JzID0gZnVuY3Rpb24oanNvbkFwaSkge1xuICAgICAgICBpZihqc29uQXBpLmVycm9ycygpICE9PSBudWxsKSB7XG4gICAgICAgICAgICBqc29uQXBpLmVycm9ycygpLmZvckVhY2goKGVycm9yKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSgnU2VydmVyIEVycm9yOiAnICsgZXJyb3IudGl0bGUsIDUwMDApO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5cbiIsImltcG9ydCBSZXNpemVyIGZyb20gJ3Jlc2l6ZXItY2wnO1xuXG5pbXBvcnQge01lbnV9IGZyb20gJy4vTWVudSc7XG5pbXBvcnQge1RvYXN0fSBmcm9tICcuL0dyYXBoaWNzL1RvYXN0JztcbmltcG9ydCB7RHJhZ0FuZERyb3B9IGZyb20gJy4vVUkvRHJhZ0FuZERyb3AnO1xuaW1wb3J0IHtUb29sc30gZnJvbSAnLi9ET00vVG9vbHMnO1xuaW1wb3J0IHtQYW5lfSBmcm9tIFwiLi9QYW5lXCI7XG5cblxuLyoqXG4gKiBBY3R1YWwgaW5zdGFuY2Ugb2YgdGhlIFBsYXlncm91bmQgZm9yIGEgc2luZ2xlIGVsZW1lbnQuXG4gKiBAcGFyYW0gcGxheWdyb3VuZCBUaGUgbWFpbiBQbGF5Z3JvdW5kIG9iamVjdFxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB3ZSBhcmUgbG9hZGluZyBpbnRvXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IE1haW4gPSBmdW5jdGlvbihwbGF5Z3JvdW5kLCBlbGVtZW50KSB7XG4gICAgdGhpcy5wbGF5Z3JvdW5kID0gcGxheWdyb3VuZDtcbiAgICB0aGlzLnNpdGUgPSBwbGF5Z3JvdW5kLnNpdGU7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSBwbGF5Z3JvdW5kLm9wdGlvbnM7XG5cbiAgICAvLy8gZGl2Lm1haW5cbiAgICB0aGlzLmRpdiA9IG51bGw7XG5cbiAgICBsZXQgb3B0aW9ucyA9IHBsYXlncm91bmQub3B0aW9ucztcblxuICAgIC8vLyBSZWZlcmVuY2VzIHRvIG90aGVyIEdVSSBjb21wb25lbnRzXG4gICAgbGV0IG1lbnU9bnVsbCwgdGFicz1udWxsO1xuXG4gICAgLy8vIGRpdi5vdmVybGF5XG4gICAgbGV0IGRpdk92ZXJsYXkgPSBudWxsLCBkaXZXb3JrPW51bGw7XG5cbiAgICB0aGlzLmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblxuICAgIFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kJyk7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHQgICAgaWYob3B0aW9ucy5oZWlnaHQgIT09IG51bGwpIHtcblx0XHQgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcblx0ICAgIH1cblxuICAgICAgICBzd2l0Y2gob3B0aW9ucy5kaXNwbGF5KSB7XG4gICAgICAgICAgICBjYXNlICdmdWxsJzpcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtZnVsbCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuXHQgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtd2luZG93Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZihvcHRpb25zLmRpc3BsYXkgPT09ICd3aW5kb3cnKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gQWRkIHJlc2l6ZXIgdG8gdGhlIHdpbmRvdyBpZiBpbiB3aW5kb3cgbW9kZVxuICAgICAgICAgICAgLy8gYW5kIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGFkZGVkXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgaWYoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVzaXplclwiKSkge1xuICAgICAgICAgICAgICAgIG5ldyBSZXNpemVyKGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiAnMTBweCBzb2xpZCAjMTg0NTNCJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcmFnQW5kRHJvcCA9IG5ldyBEcmFnQW5kRHJvcCh0aGlzKTtcblxuICAgICAgICAvL1xuICAgICAgICAvLyBDcmVhdGUgYW5kIGFkZCB0aGUgd2luZG93IGNvbXBvbmVudHNcbiAgICAgICAgLy9cbiAgICAgICAgaWYob3B0aW9ucy5kaXNwbGF5ICE9PSAnaW5saW5lJyAmJiBvcHRpb25zLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEFsbCB3aW5kb3ctYmFzZWQgdmVyc2lvbnMgb3RoZXIgdGhhbiBpbmxpbmUgZ2V0IHRoZVxuICAgICAgICAgICAgLy8gZnVsbCB1c2VyIGludGVyZmFjZVxuICAgICAgICAgICAgLy9cblxuICAgICAgICAgICAgLy8gPGRpdiBjbGFzcz1cIm1haW5cIj48L2Rpdj5cbiAgICAgICAgICAgIHRoaXMuZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtcGctbWFpbicpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZGl2KTtcblxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEFkZCB0aGUgbWVudVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIG1lbnUgPSBuZXcgTWVudSh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubWVudSA9IG1lbnU7XG5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBXb3JraW5nIGFyZWFcbiAgICAgICAgICAgIC8vIDxkaXYgY2xhc3M9XCJ3b3JrXCI+PC9kaXY+XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgZGl2V29yayA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ3dvcmsnKTtcbiAgICAgICAgICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKGRpdldvcmspO1xuXG5cblx0XHRcdC8vXG5cdCAgICAgICAgLy8gQW5kIHRoZSByb290IHBhbmVcblx0ICAgICAgICAvL1xuXHQgICAgICAgIHRoaXMucm9vdFBhbmUgPSBuZXcgUGFuZSh0aGlzLCBkaXZXb3JrLCBudWxsLCBudWxsKTtcblx0ICAgICAgICB0aGlzLnJvb3RQYW5lLmxvYWQob3B0aW9ucy5wYW5lKTtcblxuXHQgICAgICAgIC8vXG5cdCAgICAgICAgLy8gQW5kIHRoZSBvdmVybGF5XG5cdCAgICAgICAgLy8gPGRpdiBjbGFzcz1cImNpcnNpbS1vdmVybGF5XCI+PC9kaXY+XG5cdCAgICAgICAgLy9cblx0ICAgICAgICBkaXZPdmVybGF5ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtcGctb3ZlcmxheScpO1xuXHQgICAgICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKGRpdk92ZXJsYXkpO1xuXG4gICAgICAgICAgICB0aGlzLnRvYXN0ID0gbmV3IFRvYXN0KHRoaXMpO1xuICAgICAgICAgICAgdGhpcy50b2FzdC5jcmVhdGUodGhpcy5kaXYpO1xuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gQW55IGRhdGEgdG8gbG9hZD9cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBpZihvcHRpb25zLmxvYWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgbG9hZCA9IG9wdGlvbnMubG9hZDtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgbG9hZCA9PT0gJ3N0cmluZycgfHwgbG9hZCBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICBsb2FkID0gSlNPTi5wYXJzZShsb2FkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgdGFnIGluIGxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFiID0gdGhpcy5nZXRUYWIodGFnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGFiICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWIuc2V0KGxvYWRbdGFnXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHRoaXMuZ2V0VGFiID0gZnVuY3Rpb24odGFnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3RQYW5lLmdldFRhYih0YWcpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW5ldmVyIGEgbmV3IHRhYiBpcyBzZWxlY3RlZFxuICAgICAqL1xuICAgIHRoaXMubmV3VGFiID0gZnVuY3Rpb24oKSB7XG5cbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogU2V0IG9yIGNsZWFyIGludGVyZmFjZSBtb2RhbCBzdGF0ZS5cbiAgICAgKiBAcGFyYW0gbW9kYWwgVHJ1ZSBzZXRzIGludGVyZmFjZSB0byBtb2RhbCBzdGF0ZS5cbiAgICAgKlxuICAgICAqL1xuICAgIHRoaXMubW9kYWwgPSBmdW5jdGlvbihtb2RhbCkge1xuICAgICAgICBpZihtb2RhbCkge1xuICAgICAgICAgICAgZGl2T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpdk92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG59XG4iLCJpbXBvcnQge1Rvb2xzfSBmcm9tICcuL0RPTS9Ub29scyc7XG5cbi8vIGltcG9ydCB7RmlsZU1lbnV9IGZyb20gJy4vTWVudXMvRmlsZU1lbnUnO1xuLy8gaW1wb3J0IHtFZGl0TWVudX0gZnJvbSAnLi9NZW51cy9FZGl0TWVudSc7XG4vLyBpbXBvcnQge1RhYnNNZW51fSBmcm9tICcuL01lbnVzL1RhYnNNZW51Jztcbi8vIGltcG9ydCB7SGVscE1lbnV9IGZyb20gJy4vTWVudXMvSGVscE1lbnUnO1xuXG4vKipcbiAqIFRoZSBwcm9ncmFtIG1lbnUgYmFyXG4gKiBAcGFyYW0gbWFpbiBNYWluIG9iamVjdFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBNZW51ID0gZnVuY3Rpb24obWFpbikge1xuXHRjb25zdCBvcHRpb25zID0gbWFpbi5vcHRpb25zO1xuXG5cbiAgICAvL1xuICAgIC8vIENyZWF0ZSB0aGUgbWVudSBjb21wb25lbnRzXG4gICAgLy9cbiAgICAvLyB2YXIgZmlsZU1lbnUgPSBuZXcgRmlsZU1lbnUodGhpcywgbWFpbik7XG4gICAgLy8gdmFyIGVkaXRNZW51ID0gbmV3IEVkaXRNZW51KHRoaXMsIG1haW4pO1xuICAgIC8vIHZhciB0YWJzTWVudSA9IG5ldyBUYWJzTWVudSh0aGlzLCBtYWluKTtcbiAgICAvLyB2YXIgaGVscE1lbnUgPSBuZXcgSGVscE1lbnUodGhpcywgbWFpbik7XG5cbiAgICAvLy8gVGhlIG5hdiBlbGVtZW50XG4gICAgdGhpcy5uYXYgPSBudWxsO1xuICAgIHRoaXMudWwgPSBudWxsO1xuXG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPG5hdiBjbGFzcz1cIm1lbnViYXJcIj48dWw+PC91bD48L25hdj5cbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5uYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3ModGhpcy5uYXYsICdjbC1wZy1tZW51YmFyJyk7XG4gICAgICAgIG1haW4uZGl2LmFwcGVuZENoaWxkKHRoaXMubmF2KTtcblxuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHRoaXMubmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgICAgICAgdGhpcy51bCA9IHVsO1xuXG4gICAgICAgIGNvbnN0IG1lbnVzID0gb3B0aW9ucy5tZW51cztcbiAgICAgICAgbWVudXMucHVzaCh7XG5cdCAgICAgICAgbmFtZTogJ0hlbHAnLFxuXHQgICAgICAgIG1lbnVzOiBbXG5cdFx0ICAgICAgICB7bmFtZTogJ0Fib3V0JywgYWN0aW9uOiB7dGFnOiAnYWJvdXQnfX1cblx0ICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvcihjb25zdCBtZW51IG9mIG1lbnVzKSB7XG4gICAgICAgIFx0Y29uc3QgdG9wTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBcdHVsLmFwcGVuZENoaWxkKHRvcExJKTtcblxuICAgICAgICBcdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIFx0dG9wTEkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgIFx0YS5pbm5lclRleHQgPSBtZW51Lm5hbWU7XG5cbiAgICAgICAgXHRpZihtZW51LmFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIFx0XHQvLyBUb3AgbGV2ZWwgb25seSBtZW51XG4gICAgICAgIFx0XHRjb25zdCBhY3Rpb24gPSBtYWluLnBsYXlncm91bmQuZ2V0QWN0aW9uKG1lbnUuYWN0aW9uKTtcblx0XHQgICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIFthLCB0b3BMSV0pIHtcblx0XHQgICAgICAgIFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0XHQgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdCAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdCAgICAgICAgYWN0aW9uLmRvKG1haW4pO1xuXHRcdFx0ICAgICAgICB9KTtcblx0XHQgICAgICAgIH1cblx0ICAgICAgICB9XG5cblx0ICAgICAgICBpZihtZW51Lm1lbnVzICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICBcdC8vIFB1bGwtZG93biBtZW51XG5cdCAgICAgICAgXHRjb25zdCBzdWJVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cdCAgICAgICAgXHR0b3BMSS5hcHBlbmRDaGlsZChzdWJVTCk7XG5cblx0ICAgICAgICBcdGZvcihjb25zdCBlbGVtZW50IG9mIFthLCB0b3BMSV0pIHtcblx0XHRcdCAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0XHQgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdCAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdFx0ICAgICAgICBpZihnZXRDb21wdXRlZFN0eWxlKHN1YlVMKS5nZXRQcm9wZXJ0eVZhbHVlKCd2aXNpYmlsaXR5JykgPT09ICdoaWRkZW4nKSB7XG5cdFx0XHRcdFx0ICAgICAgICBvcGVuKHRvcExJKTtcblx0XHRcdFx0ICAgICAgICB9IGVsc2Uge1xuXHRcdFx0XHRcdCAgICAgICAgLy8gSWYgYWxyZWFkeSBvcGVuLCBjbG9zZSBhbGxcblx0XHRcdFx0XHQgICAgICAgIHRoaXMuY2xvc2VBbGwoKTtcblx0XHRcdFx0ICAgICAgICB9XG5cblx0XHRcdCAgICAgICAgfSk7XG5cdFx0ICAgICAgICB9XG5cblx0ICAgICAgICBcdGZvcihjb25zdCBzdWJNZW51IG9mIG1lbnUubWVudXMpIHtcblx0XHRcdCAgICAgICAgY29uc3Qgc3ViTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdFx0ICAgICAgICBzdWJVTC5hcHBlbmRDaGlsZChzdWJMSSk7XG5cblx0XHRcdCAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdCAgICAgICAgc3ViTEkuYXBwZW5kQ2hpbGQoYSk7XG5cdFx0XHQgICAgICAgIGEuaW5uZXJUZXh0ID0gc3ViTWVudS5uYW1lO1xuXG5cdFx0XHQgICAgICAgIGlmKHN1Yk1lbnUuYWN0aW9uICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ICAgICAgICAvLyBUb3AgbGV2ZWwgb25seSBtZW51XG5cdFx0XHRcdCAgICAgICAgY29uc3QgYWN0aW9uID0gbWFpbi5wbGF5Z3JvdW5kLmdldEFjdGlvbihzdWJNZW51LmFjdGlvbik7XG5cdFx0XHRcdCAgICAgICAgaWYoYWN0aW9uICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0ICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBbYSwgdG9wTEldKSB7XG5cdFx0XHRcdFx0XHQgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0ICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHQgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0XHQgICAgICAgIHRoaXMuY2xvc2VBbGwoKTtcblx0XHRcdFx0XHRcdFx0ICAgICAgICBhY3Rpb24uZG8obWFpbik7XG5cdFx0XHRcdFx0XHQgICAgICAgIH0pO1xuXHRcdFx0XHRcdCAgICAgICAgfVxuXHRcdFx0XHQgICAgICAgIH1cblxuXHRcdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICB9XG5cdCAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvL1xuICAgICAgICAvLyBBZGQgdGhlIG1lbnUgY29tcG9uZW50J3MgSFRNTFxuICAgICAgICAvL1xuXHQgICAgLy8gbGV0IGh0bWwgPSAnJztcblxuXHQgICAgLy8gaHRtbCArPSBmaWxlTWVudS5odG1sKCk7XG4gICAgICAgIC8vIGh0bWwgKz0gZWRpdE1lbnUuaHRtbCgpO1xuICAgICAgICAvLyBodG1sICs9IHRhYnNNZW51Lmh0bWwoKTtcbiAgICAgICAgLy8gaHRtbCArPSBoZWxwTWVudS5odG1sKCk7XG5cbiAgICAgICAgLy8gdWwuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgICAgICAvL1xuXHQgICAgLy8gTWVudSBvcHRpb24gZm9yIHRlc3RpbmcgdGhlIFRvYXN0IGVycm9yIHJlcG9ydGluZyBtZWNoYW5pc21cblx0ICAgIC8vXG5cblx0ICAgIC8vIGh0bWwgKz0gYDxsaT48YSBjbGFzcz1cInRvYXN0LXRlc3RcIj5Ub2FzdCE8L2E+PC9saT5gO1xuXHQgICAgLy8gdWwuaW5uZXJIVE1MID0gaHRtbDtcblx0XHQvL1xuXHQgICAgLy8gdGhpcy50b2FzdHMgPSAwO1xuICAgICAgICAvLyB0aGlzLmNsaWNrKCcudG9hc3QtdGVzdCcsIChldmVudCk9PiB7XG4gICAgICAgIC8vIFx0dGhpcy50b2FzdHMrKztcbiAgICAgICAgLy8gXHRtYWluLnRvYXN0Lm1lc3NhZ2UoJ1RvYXN0IG1lc3NhZ2UgJyArIHRoaXMudG9hc3RzKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gSW5zdGFsbCBjbGljayBoYW5kbGVycyBmb3IgYWxsIHRvcC1sZXZlbCBtZW51c1xuICAgICAgICAvL1xuICAgICAgICAvLyBmb3IoY29uc3Qgbm9kZSBvZiB1bC5jaGlsZE5vZGVzKSB7XG4gICAgICAgIC8vICAgICBpZihub2RlLnRhZ05hbWUgPT09ICdMSScpIHtcbiAgICAgICAgLy8gICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Ly9cbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gRmluZCB0aGUgPHVsPiBpbiB0aGlzIG1lbnVcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IHVsU3ViID0gVG9vbHMuY2hpbGQobm9kZSwgJ1VMJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKHVsU3ViICE9PSBudWxsKSB7XG5cdCAgICAvLyAgICAgICAgICAgICAgICAgaWYoZ2V0Q29tcHV0ZWRTdHlsZSh1bFN1YikuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAnaGlkZGVuJykge1xuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgb3Blbihub2RlKTtcblx0ICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBJZiBhbHJlYWR5IG9wZW4sIGNsb3NlIGFsbFxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUFsbCgpO1xuXHQgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gQWN0aXZhdGUgYWxsIG9mIHRoZSBtZW51c1xuICAgICAgICAvLyBmaWxlTWVudS5hY3RpdmF0ZSgpO1xuICAgICAgICAvLyBlZGl0TWVudS5hY3RpdmF0ZSgpO1xuICAgICAgICAvLyB0YWJzTWVudS5hY3RpdmF0ZSgpO1xuICAgICAgICAvLyBoZWxwTWVudS5hY3RpdmF0ZSgpO1xuICAgIH1cblxuXHQvKipcbiAgICAgKiBMaXN0ZW4gdG8ga2V5IGRvd24gZXZlbnRzIHNvIHdlIGNhbiBjbG9zZSB0aGUgbWVudVxuICAgICAqIGlmIHdlIGNsaWNrIG91dHNpZGUgb2YgdGhlIG1lbnUgd2hpbGUgaXQgaXMgb3Blbi5cblx0ICogQHBhcmFtIGV2ZW50XG5cdCAqL1xuXHRjb25zdCBjbG9zZUxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIFNlZSBpZiB3ZSBjbGlja2VkIG9uIHNvbWUgY2hpbGQgb2YgbmF2Li4uXG4gICAgICAgIGxldCBub2RlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIGZvciggOyBub2RlICE9PSBudWxsOyBub2RlID0gbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBpZihub2RlID09PSB0aGlzLm5hdikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdCAgICB0aGlzLmNsb3NlQWxsKCk7XG4gICAgfVxuXG4gICAgLy8gT3BlbiBhIG1lbnVcbiAgICBjb25zdCBvcGVuID0gKGxpKSA9PiB7XG4gICAgICAgIC8vIEhpZGUgYW55IG90aGVyIG1lbnVzXG4gICAgICAgIGZvcihjb25zdCBub2RlIG9mIHRoaXMudWwuY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgaWYobm9kZS50YWdOYW1lID09PSAnTEknKSB7XG5cdCAgICAgICAgICAgIGNvbnN0IHVsID0gVG9vbHMuY2hpbGQobm9kZSwgJ1VMJyk7XG4gICAgICAgICAgICAgICAgaWYodWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAvLyBUb29scy5yZW1vdmVDbGFzcyh1bCwgJ2NsLXBnLW1lbnUtb3BlbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdCAgICAvLyBBbmQgb3BlbiB0aGlzIG1lbnVcblx0ICAgIGNvbnN0IHVsID0gVG9vbHMuY2hpbGQobGksICdVTCcpO1xuXHQgICAgaWYodWwgIT09IG51bGwpIHtcblx0ICAgIFx0dWwuY2xhc3NMaXN0LmFkZCgnY2wtcGctbWVudS1vcGVuJyk7XG5cdCAgICB9XG5cblx0ICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VMaXN0ZW5lcik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8qKiBDbG9zZSBhbGwgbWVudXMgKi9cbiAgICB0aGlzLmNsb3NlQWxsID0gKCkgPT4ge1xuXHQgICAgZm9yKGNvbnN0IG5vZGUgb2YgdGhpcy51bC5jaGlsZE5vZGVzKSB7XG5cdFx0ICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gJ0xJJykge1xuXHRcdFx0ICAgIGNvbnN0IHVsID0gVG9vbHMuY2hpbGQobm9kZSwgJ1VMJyk7XG5cdFx0XHQgICAgaWYodWwgIT09IG51bGwpIHtcblx0XHRcdFx0ICAgIFRvb2xzLnJlbW92ZUNsYXNzKHVsLCAnY2wtcGctbWVudS1vcGVuJyk7XG5cdFx0XHQgICAgfVxuXHRcdCAgICB9XG5cdCAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUxpc3RlbmVyKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VMaXN0ZW5lcik7XG4gICAgfVxuXG5cdC8qKlxuICAgICAqIEVuYWJsZSBvciBkaXNhYmxlIGEgbWVudSBvcHRpb24gYnkgc2VsZWN0b3Jcblx0ICogQHBhcmFtIHNlbCBTZWxlY3RvciBmb3IgdGhlIG1lbnUgb3B0aW9uIChsaWtlICcudGFicy1hZGQnKVxuXHQgKiBAcGFyYW0gZW5hYmxlIFRydWUgdG8gZW5hYmxlXG5cdCAqL1xuXHR0aGlzLmVuYWJsZSA9IChzZWwsIGVuYWJsZSkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy51bC5xdWVyeVNlbGVjdG9yKHNlbCk7XG4gICAgICAgIGlmKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGVuYWJsZSkge1xuICAgICAgICAgICAgVG9vbHMucmVtb3ZlQ2xhc3MoZWxlbWVudC5wYXJlbnROb2RlLCBcIm1lbnUtZGlzYWJsZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBUb29scy5hZGRDbGFzcyhlbGVtZW50LnBhcmVudE5vZGUsIFwibWVudS1kaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cdC8qKlxuICAgICAqIEZpbmQgYSBtZW51IG9wdGlvbiBieSBzZWxlY3RvclxuXHQgKiBAcGFyYW0gc2VsXG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fVxuXHQgKi9cblx0dGhpcy5maW5kID0gKHNlbCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy51bC5xdWVyeVNlbGVjdG9yKHNlbCk7XG4gICAgfVxuXG5cdC8qKlxuICAgICAqIEluc3RhbGwgYSBtZW51IG9wdGlvbiBjbGljayBoYW5kZXJcblx0ICogQHBhcmFtIHNlbCBTZWxlY3RvciBmb3IgdGhlIG1lbnUgb3B0aW9uXG5cdCAqIEBwYXJhbSBjbG9zdXJlIFRoZSBjbG9zdXJlIHRvIGNhbGwgKHBhc3NlcyAnZXZlbnQnKVxuXHQgKi9cblx0dGhpcy5jbGljayA9IChzZWwsIGNsb3N1cmUpID0+IHtcblx0ICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmZpbmQoc2VsKTtcblx0ICAgIGlmKGVsZW1lbnQgIT09IG51bGwpIHtcblx0ICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdCAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICAgICAgICAgIHRoaXMuY2xvc2VBbGwoKTtcblx0ICAgICAgICAgICAgY2xvc3VyZShldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRpYWxpemUoKTtcbn07XG4iLCIvKipcbiAqIFBsYXlncm91bmQgb3B0aW9ucy5cbiAqIEBwYXJhbSBvcHRpb25zIFVzZXIgcHJvdmlkZWQgb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcblxuICAgIC8vLyBEaXNwbGF5IG9wdGlvbnNcbiAgICAvLy8gd2luZG93IC0gRGlzcGxheXMgYXMgYSBzdGFuZGFyZCBkaXYgKGRlZmF1bHQpXG4gICAgdGhpcy5kaXNwbGF5ID0gJ3dpbmRvdyc7XG5cbiAgICAvLy8gT3B0aW9uYWwgaGVpZ2h0IHNldHRpbmdcbiAgICB0aGlzLmhlaWdodCA9IG51bGw7XG5cbiAgICAvLy8gVGhlIHBsYXlncm91bmQgcm9vdCBwYW5lXG4gICAgdGhpcy5wYW5lID0ge307XG5cbiAgICAvLy8gVGhlIHRvcC1sZXZlbCBtZW51IG9wdGlvbnNcbiAgICB0aGlzLm1lbnVzID0gW3tuYW1lOiAnQWJvdXQnfV07XG5cbiAgICAvLy8gQ29udGVudCB0byBpbml0aWFsbHkgbG9hZCBpbnRvIHRoZSB0YWJzXG4gICAgdGhpcy5sb2FkID0gbnVsbDtcblxuXG4gICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBvcHRpb25zKSB7XG4gICAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICBpZighdGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbiBcIiArIHByb3BlcnR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIEFQSSBvcGVyYXRpb25zIGZvciBhIGdpdmVuIGZpbGUgbW9kZS5cbiAgICAgKiBAcGFyYW0gbW9kZSAnc2F2ZScsICdvcGVuJ1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHRoaXMuZ2V0QVBJID0gZnVuY3Rpb24obW9kZSkge1xuICAgICAgICBpZih0aGlzLmFwaSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmFwaSA9PT0gT2JqZWN0KHRoaXMuYXBpKSkge1xuICAgICAgICAgICAgbGV0IG9iajtcblxuICAgICAgICAgICAgaWYodGhpcy5hcGlbbW9kZV0gIT09IHVuZGVmaW5lZCkge1xuIFxuICAgICAgICAgICAgICAgIC8vIE1vZGUgaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcbiAgICAgICAgICAgICAgICB2YXIgbW9kZU9iaiA9IHRoaXMuYXBpW21vZGVdO1xuICAgICAgICAgICAgICAgIGlmKG1vZGVPYmoudXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTW9kZSBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNlbmQgY29udGVudCB0eXBlXG4gICAgICAgICAgICAgICAgb2JqID0ge3VybDogbW9kZU9iai51cmx9O1xuICAgICAgICAgICAgICAgIGlmKG1vZGVPYmouY29udGVudFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvYmouY29udGVudFR5cGUgPSBtb2RlT2JqLmNvbnRlbnRUeXBlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmFwaS5jb250ZW50VHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5jb250ZW50VHlwZSA9IHRoaXMuYXBpLmNvbnRlbnRUeXBlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5jb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKG1vZGVPYmouZXh0cmEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSBtb2RlT2JqLmV4dHJhO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmFwaS5leHRyYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHRoaXMuYXBpLmV4dHJhO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKG1vZGVPYmoubmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5uYW1lID0gbW9kZU9iai5uYW1lO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmFwaS5uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLm5hbWUgPSB0aGlzLmFwaS5uYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcGkudXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgb2JqID0ge3VybDogdGhpcy5hcGkudXJsfTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFwaS5leHRyYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHRoaXMuYXBpLmV4dHJhO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXBpLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvYmoubmFtZSA9IHRoaXMuYXBpLm5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHt1cmw6IHRoaXMuYXBpfTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7VGFic30gZnJvbSAnLi9UYWJzJztcblxuLyoqXG4gKiBBIFBhbmUgaXMgYW4gYXJlYSBvZiB0aGUgSURFIHNjcmVlbiB0aGF0IGVpdGhlciBjb250YWlucyBhIHRhYiBzZXQgb3IgdHdvIGNoaWxkIHBhbmVzLlxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdGhhdCBpcyB0aGUgaG9zdCBmb3IgdGhlIHBhbmVcbiAqIEBwYXJhbSBwYXJlbnQgUGFuZSBwYXJlbnQgb2JqZWN0XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IFBhbmUgPSBmdW5jdGlvbihtYWluLCBlbGVtZW50LCBwYXJlbnQpIHtcblx0dGhpcy5taW5TcGxpdCA9IDEwO1xuXHR0aGlzLm1heFNwbGl0ID0gOTA7XG5cblx0bGV0IGRpdiA9IG51bGwsIGNoaWxkMSA9IG51bGwsIGNoaWxkMiA9IG51bGw7XG5cdGxldCBob3Jpem9udGFsU3BsaXQgPSBudWxsO1xuXHRsZXQgdGFicyA9IG51bGw7XG5cblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcblx0XHQvL1xuXHRcdC8vIENyZWF0ZSBhbmQgYWRkIHRoZSBkaXZcblx0XHQvL1xuXG5cdFx0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy5kaXYgPSBkaXY7XG5cblx0XHRpZihwYXJlbnQgPT09IG51bGwpIHtcblx0XHRcdGRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLXJvb3QnKTtcblx0XHR9XG5cblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XG5cblx0XHQvLyBpZihkb25vclRhYnMgIT09IG51bGwpIHtcblx0XHQvLyBcdHRhYnMgPSBkb25vclRhYnM7XG5cdFx0Ly8gXHR0YWJzLm5ld1BhcmVudCh0aGlzKTtcblx0XHQvLyB9IGVsc2Uge1xuXHRcdC8vIFx0dGFicyA9IG5ldyBUYWJzKG1haW4sIGRpdik7XG5cdFx0Ly8gfVxuXHR9XG5cblx0LyoqXG5cdCAqIExvYWQgdGhlIHBhbmUgZnJvbSB0aGUgZGF0YVxuXHQgKiBAcGFyYW0gZGF0YSBEYXRhIGZyb20gb3B0aW9ucyBmb3IgdGhpcyBwYW5lXG5cdCAqL1xuXHR0aGlzLmxvYWQgPSBmdW5jdGlvbihkYXRhKSB7XG5cdFx0aWYoZGF0YS5jaGlsZDEgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly8gVGhpcyBpcyBhIHNwbGl0IHBhbmVcblx0XHRcdHRoaXMuc3BsaXQoZGF0YS5ob3JpeiwgZGF0YS5jaGlsZDEsIGRhdGEuY2hpbGQyKTtcblx0XHRcdHRoaXMucGVyY2VudGFnZShkYXRhLnBlcmNlbnRhZ2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YWJzID0gbmV3IFRhYnMobWFpbiwgZGl2KTtcblx0XHRcdHRhYnMubG9hZChkYXRhLnRhYnMpO1xuXHRcdH1cblx0fVxuXG5cdHRoaXMuc3BsaXQgPSBmdW5jdGlvbihob3Jpem9udGFsLCBjaGlsZDFEYXRhLCBjaGlsZDJEYXRhKSB7XG5cdFx0aG9yaXpvbnRhbFNwbGl0ID0gaG9yaXpvbnRhbDtcblxuXHRcdGNoaWxkMSA9IG5ldyBQYW5lKG1haW4sIGRpdiwgdGhpcywgdGFicyk7XG5cdFx0Y2hpbGQyID0gbmV3IFBhbmUobWFpbiwgZGl2LCB0aGlzLCBudWxsKTtcblxuXHRcdHRhYnMgPSBudWxsO1xuXG5cdFx0aWYoaG9yaXpvbnRhbCkge1xuXHRcdFx0Y2hpbGQxLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLWxlZnQnKTtcblx0XHRcdGNoaWxkMi5kaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1yaWdodCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkaXYuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuXHRcdFx0Y2hpbGQxLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLXRvcCcpO1xuXHRcdFx0Y2hpbGQyLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLWJvdHRvbScpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGJhci5jbGFzc0xpc3QuYWRkKCdjbC1iYXInKTtcblx0XHRjaGlsZDEuZGl2LmFwcGVuZENoaWxkKGJhcik7XG5cblx0XHRiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c3RhcnREcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZSk7XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwKTtcblx0XHR9KTtcblxuXHRcdGJhci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRjb25zb2xlLmxvZyhldmVudCk7XG5cblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuXHRcdFx0c3RhcnREcmFnZ2luZyh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xuXG5cblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2hNb3ZlKTtcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEVuZCk7XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hDYW5jZWwpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5jaGlsZDEgPSBjaGlsZDE7XG5cdFx0dGhpcy5jaGlsZDIgPSBjaGlsZDI7XG5cblx0XHR0aGlzLnBlcmNlbnRhZ2UoNTApO1xuXG5cdFx0aWYoY2hpbGQxRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjaGlsZDEubG9hZChjaGlsZDFEYXRhKTtcblx0XHR9XG5cblx0XHRpZihjaGlsZDJEYXRhICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNoaWxkMi5sb2FkKGNoaWxkMkRhdGEpO1xuXHRcdH1cblxuXHRcdHJldHVybiB7Y2hpbGQxOiBjaGlsZDEsIGNoaWxkMjogY2hpbGQyfTtcblx0fVxuXG5cdGxldCBzdGFydFggPSBudWxsLCBzdGFydFkgPSBudWxsO1xuXG5cdGNvbnN0IHN0YXJ0RHJhZ2dpbmcgPSAoeCwgeSkgPT4ge1xuXHRcdHN0YXJ0WCA9IHg7XG5cdFx0c3RhcnRZID0geTtcblx0fVxuXG5cdGNvbnN0IGVuZERyYWdnaW5nID0gKCkgPT4ge1xuXHRcdHN0YXJ0WCA9IG51bGw7XG5cdFx0c3RhcnRZID0gbnVsbDtcblx0fVxuXG5cblx0Y29uc3QgZHJhZ2dpbmcgPSAoeCwgeSkgPT4ge1xuXHRcdGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cblx0XHRpZihob3Jpem9udGFsU3BsaXQpIHtcblx0XHRcdGNvbnN0IG1haW5YID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xuXHRcdFx0Y29uc3Qgd2lkID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdDtcblx0XHRcdGlmKHdpZCA8PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGVyID0gKHggLSBtYWluWCkgLyB3aWQgKiAxMDA7XG5cdFx0XHR0aGlzLnBlcmNlbnRhZ2UocGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgbWFpblkgPSByZWN0LnRvcCAgKyBlbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcblxuXHRcdFx0Y29uc3QgaGl0ID0gcmVjdC5ib3R0b20gLSByZWN0LnRvcDtcblx0XHRcdGlmKGhpdCA8PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGVyID0gKHkgLSBtYWluWSkgLyBoaXQgKiAxMDA7XG5cdFx0XHR0aGlzLnBlcmNlbnRhZ2UocGVyKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBtb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYoZXZlbnQud2hpY2ggPT09IDApIHtcblx0XHRcdG1vdXNlVXAoZXZlbnQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGRyYWdnaW5nKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XG5cdH1cblxuXHRjb25zdCBtb3VzZVVwID0gKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZSk7XG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcCk7XG5cdFx0ZW5kRHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblx0fVxuXG5cdGNvbnN0IHRvdWNoTW92ZSAgPSAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuXHRcdGRyYWdnaW5nKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XG5cdH1cblxuXHRjb25zdCB0b3VjaEVuZCA9IChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cdFx0ZHJhZ2dpbmcodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcblxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2hNb3ZlKTtcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmQpO1xuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaENhbmNlbCk7XG5cblx0XHRlbmREcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXHR9XG5cblx0Y29uc3QgdG91Y2hDYW5jZWwgPSAoZXZlbnQpID0+IHtcblx0XHR0b3VjaEVuZChldmVudCk7XG5cdH1cblxuXHR0aGlzLnBlcmNlbnRhZ2UgPSBmdW5jdGlvbihwZXIpIHtcblx0XHRpZihwZXIgPCB0aGlzLm1pblNwbGl0KSB7XG5cdFx0XHRwZXIgPSB0aGlzLm1pblNwbGl0O1xuXHRcdH0gZWxzZSBpZihwZXIgPiB0aGlzLm1heFNwbGl0KSB7XG5cdFx0XHRwZXIgPSB0aGlzLm1heFNwbGl0O1xuXHRcdH1cblxuXHRcdGlmKGhvcml6b250YWxTcGxpdCkge1xuXHRcdFx0Y2hpbGQxLmRpdi5zdHlsZS53aWR0aCA9IHBlciArICclJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2hpbGQxLmRpdi5zdHlsZS5oZWlnaHQgPSBwZXIgKyAnJSc7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5nZXRUYWIgPSBmdW5jdGlvbih0YWcpIHtcblx0XHRmb3IoY29uc3QgY29sbGVjdGlvbiBvZiBbdGFicywgY2hpbGQxLCBjaGlsZDJdKSB7XG5cdFx0XHRpZihjb2xsZWN0aW9uICE9PSBudWxsKSB7XG5cdFx0XHRcdGxldCB0YWIgPSBjb2xsZWN0aW9uLmdldFRhYih0YWcpO1xuXHRcdFx0XHRpZih0YWIgIT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGFiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXG5cdGluaXRpYWxpemUoKTtcbn0iLCJpbXBvcnQge01haW59IGZyb20gJy4vTWFpbic7XG5pbXBvcnQge09wdGlvbnN9IGZyb20gJy4vT3B0aW9ucyc7XG5pbXBvcnQge1JlYWR5fSBmcm9tICcuL1V0aWxpdHkvUmVhZHknO1xuaW1wb3J0IHtBY3Rpb259IGZyb20gJy4vQWN0aW9ucy9BY3Rpb24nO1xuaW1wb3J0IHtBbGxBY3Rpb25zfSBmcm9tICcuL0FjdGlvbnMvQWxsQWN0aW9ucyc7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBQbGF5Z3JvdW5kXG4gKlxuICogVGhpcyBjcmVhdGVzIGEgc2luZ2xlIEluc3RhbmNlIHRoYXQgbWFuYWdlcyB0aGVcbiAqIGNvbXBvbmVudHMgYW5kIHN0YXJ0cyBhY3R1YWwgUGxheWdyb3VuZCB3aW5kb3dzLlxuICpcbiAqIENvbnN0cnVjdCBhbmQgc3RhcnQgcnVubmluZyBsaWtlIHRoaXM6XG4gKlxuICogR2l2ZW4gYW4gSFRNTCBkaXY6XG4gKiAgICAgPGRpdiBpZD1cInBsYXlncm91bmRcIj48L2Rpdj5cbiAqXG4gKiBUaGUgZm9sbG93aW5nIHNjcmlwdCBzdGFydHMgUGxheWdyb3VuZCBpbiB0aGF0IGRpdjpcbiAqXG4gKiAgICAgdmFyIHBsYXlncm91bmQgPSBuZXcgUGxheWdyb3VuZCgnI3BsYXlncm91bmQnKTtcbiAqICAgICBwbGF5Z3JvdW5kLnN0YXJ0KCk7XG4gKlxuICogQHBhcmFtIHNpdGUgU2l0ZSBvYmplY3RcbiAqIEBwYXJhbSBzZWwgU2VsZWN0b3Igb3IgZWxlbWVudCB0byBjcmVhdGUgUGxheWdyb3VuZCBpbiAoY2FuIGJlIG1hbnkpXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvYmplY3QgY29udGFpbmluZyBQbGF5Z3JvdW5kIG9wdGlvbnMuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IFBsYXlncm91bmQgPSBmdW5jdGlvbihzaXRlLCBzZWwsIG9wdGlvbnMpIHtcblxuICAgIC8vXG4gICAgLy8gTWFzdGVyIHNldCBvZiB0aGUgdmVyc2lvblxuICAgIC8vXG4gICAgbGV0IFBBQ0tBR0UgPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKTtcbiAgICB0aGlzLnZlcnNpb24gPSBQQUNLQUdFLnZlcnNpb247XG5cbiAgICB0aGlzLnNpdGUgPSBzaXRlO1xuXG4gICAgLy8gUmVjb3JkIHRoZSBzZWxlY3RvclxuICAgIHRoaXMuc2VsID0gc2VsO1xuXG4gICAgLy8gVGhlIE9wdGlvbnMgb2JqZWN0IHRoYXQgbWFuYWdlcyB1c2VyIG9wdGlvbnNcbiAgICB0aGlzLm9wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcblxuICAgIC8vIEEgY29sbGVjdGlvbiBvZiBNYWluIG9iamVjdHMuXG4gICAgdmFyIG1haW5zID0gW107XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCB0aGUgUGxheWdyb3VuZCBydW5uaW5nLCBjcmVhdGluZyB0aGUgdXNlciBpbnRlcmZhY2UuXG4gICAgICogVGhpcyBkb2VzIHdhaXQgZm9yIGRvY3VtZW50IHJlYWR5IGJlZm9yZSBjYWxsaW5nXG4gICAgICogdGhpcy5zdGFydE5vdygpIHVubGVzcyB3ZSBhcmUgcnVubmluZyBpbiBuby13aW5kb3dcbiAgICAgKiBtb2RlLiBJbiB0aGF0IGNhc2UgaXQgcmV0dXJucyBhIHN0YXJ0ZWQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgdGhpcy5zdGFydCA9ICgpID0+IHtcbiAgICAgICAgaWYoc2VsID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydE5vdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgUmVhZHkuZ28oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydE5vdygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCB0aGUgUGxheWdyb3VuZCBydW5uaW5nIG5vdy4gRG9lcyBub3Qgd2FpdCBmb3IgZG9jdW1lbnQgcmVhZHkuXG4gICAgICovXG4gICAgdGhpcy5zdGFydE5vdyA9ICgpID0+IHtcbiAgICAgICAgaWYoc2VsIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgbWFpbiA9IG5ldyBNYWluKHRoaXMsIHNlbCk7XG4gICAgICAgICAgICBtYWlucy5wdXNoKG1haW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbCk7XG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluID0gbmV3IE1haW4odGhpcywgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgbWFpbnMucHVzaChtYWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG1haW5zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIG1haW5zWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBjb25zdHJ1Y3RlZCBBY3Rpb24gb2JqZWN0IGZyb20gdGhlIGF2YWlsYWJsZSBwbGF5Z3JvdW5kIGFjdGlvbnMuXG5cdCAqIEBwYXJhbSBhY3Rpb24gVGhlIGFjdGlvbiBkYXRhIGZyb20gdGhlIHNlcnZlci5cblx0ICogQHJldHVybnMgQWN0aW9uIG9iamVjdFxuXHQgKi9cblx0dGhpcy5nZXRBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICBcdGlmKFBsYXlncm91bmQuYWN0aW9uc1thY3Rpb24udGFnXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgXHRcdHJldHVybiBuZXcgKFBsYXlncm91bmQuYWN0aW9uc1thY3Rpb24udGFnXSkoc2l0ZSwgYWN0aW9uKTtcblx0ICAgIH1cblxuXHQgICAgY29uc29sZS5sb2coJ1BsYXlncm91bmQgYWN0aW9uICcgKyBhY3Rpb24udGFnICsgJyBkb2VzIG5vdCBleGlzdCcpO1xuXHQgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5QbGF5Z3JvdW5kLkFjdGlvbiA9IEFjdGlvbjtcblxuUGxheWdyb3VuZC5hY3Rpb25zID0ge307XG5cblBsYXlncm91bmQuYWRkQWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uKSB7XG5cdHRoaXMuYWN0aW9uc1thY3Rpb24udGFnXSA9IGFjdGlvbjtcbn1cblxuQWxsQWN0aW9ucy5hZGRBbGwoUGxheWdyb3VuZCk7IiwiaW1wb3J0IHtUb29sc30gZnJvbSAnLi9ET00vVG9vbHMnO1xuaW1wb3J0IHtPdXRwdXRUYWJ9IGZyb20gJy4vVGFicy9PdXRwdXRUYWInO1xuaW1wb3J0IHtFZGl0b3JUYWJ9IGZyb20gJy4vVGFicy9FZGl0b3JUYWInO1xuXG5pbXBvcnQgbWVudWJhcnMgZnJvbSAnLi4vLi4vaW1nL21lbnViYXJzLnBuZyc7XG5cblxuLyoqXG4gKiBNYW5hZ2VzIHRoZSB0YWJzIGluIHRoZSBtb2RlbFxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcbiAqIEBwYXJhbSBlbGVtZW50IFBhcmVudCBlbGVtZW50XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IFRhYnMgPSBmdW5jdGlvbihtYWluLCBlbGVtZW50KSB7XG4gICAgLy8vIFRoZSBjdXJyZW50bHkgYWN0aXZlIHZpZXcvdGFiXG4gICAgdGhpcy5hY3RpdmUgPSAtMTtcblxuICAgIC8vLyBUaGUgTWFpbiBvYmplY3RcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuXG4gICAgLy8vIFRoZSBTaXRlIG9iamVjdFxuICAgIHRoaXMuc2l0ZSA9IG1haW4uc2l0ZTtcblxuICAgIC8vIFRoZSBjb2xsZWN0aW9uIG9mIHRhYnNcbiAgICB2YXIgdGFicyA9IFtdO1xuXG4gICAgLy9cbiAgICAvLyBUaGUgc3RydWN0dXJlOiA8ZGl2IGNsYXNzPVwiY2wtdGFic1wiPjx1bD48L3VsPjxkaXYgY2xhc3M9XCJjbC12aWV3c1wiPjwvZGl2PjwvZGl2PlxuICAgIC8vIGRpdi50YWJzIC0gRW5jbG9zdXJlIGZvciBhbGwgdGFicyBjb250ZW50XG4gICAgLy8gdWwgLSBUaGUgdGFicyB3ZSBzZWxlY3QgZnJvbVxuICAgIC8vIHZpZXdzRGl2IC0gVGhlIHZpZXdzIHdpdGggdGhlIHRhYiBjb250ZW50c1xuICAgIC8vXG5cbiAgICBsZXQgdGFic0RpdiA9IG51bGwsIHVsID0gbnVsbCwgdmlld3NEaXYgPSBudWxsO1xuXG5cdC8qKlxuICAgICAqIENyZWF0ZSB0aGUgdGFicyBzeXN0ZW1cblx0ICogQHBhcmFtIGRpdiBUaGUgZGl2IHdlIHB1dCB0aGUgdGFicyBpbnRvXG5cdCAqL1xuXHR0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uKGRpdikge1xuICAgICAgICAvLyBDcmVhdGU6IDxkaXYgY2xhc3M9XCJjbC10YWJzXCI+PHVsPjwvdWw+PGRpdiBjbGFzcz1cImNsLXZpZXdzXCI+PC9kaXY+PC9kaXY+XG4gICAgICAgIHRhYnNEaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdjbC1wZy10YWJzJyk7XG4gICAgICAgIHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdGFic0Rpdi5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICAgICAgdmlld3NEaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdjbC1wZy12aWV3cycpO1xuICAgICAgICB0YWJzRGl2LmFwcGVuZENoaWxkKHZpZXdzRGl2KTtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGFic0Rpdik7XG5cbiAgICAgICAgLy8gQ2xlYXIgdGhlIHRhYnMgY29sbGVjdGlvblxuICAgICAgICB0YWJzID0gW107XG5cblx0Ly9cdHRoaXMuYWRkKCdwcm9ncmFtJyk7XG4vL1x0XHR0aGlzLmFkZCgnb3V0cHV0Jyk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2FkID0gZnVuY3Rpb24oZGF0YSkge1xuXHRcdGZvcihjb25zdCB0YWJEYXRhIG9mIGRhdGEpIHtcblx0XHRcdHRoaXMuYWRkKHRhYkRhdGEpO1xuXHRcdH1cbiAgICB9XG5cbiAgICB0aGlzLm5ld1BhcmVudCA9IGZ1bmN0aW9uKHBhbmUpIHtcblx0XHRwYW5lLmRpdi5hcHBlbmRDaGlsZCh0YWJzRGl2KTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRsZXQgdGFiID0gbnVsbDtcblxuXHQgICAgc3dpdGNoKGRhdGEudHlwZSkge1xuXHRcdCAgICBjYXNlICdlZGl0b3InOlxuXHRcdFx0ICAgIHRhYiA9IG5ldyBFZGl0b3JUYWIodGhpcywgZGF0YSk7XG5cdFx0ICAgIFx0YnJlYWs7XG5cblx0XHQgICAgY2FzZSAnb3V0cHV0Jzpcblx0XHQgICAgXHR0YWIgPSBuZXcgT3V0cHV0VGFiKHRoaXMsIGRhdGEpO1xuXHRcdCAgICBcdGJyZWFrO1xuXHQgICAgfVxuXG5cdCAgICBpZih0YWIgIT09IG51bGwpIHtcblx0XHQgICAgdWwuYXBwZW5kQ2hpbGQodGFiLmxpKTtcblx0XHQgICAgdmlld3NEaXYuYXBwZW5kQ2hpbGQodGFiLnZpZXcpO1xuXHRcdCAgICB0YWJzLnB1c2goe3RhYjogdGFiLCBsaTogdGFiLmxpLCB2aWV3OiB0YWIudmlld30pO1xuXG5cdFx0ICAgIHRhYi5zZWxlY3QoKTtcblx0ICAgIH1cbiAgICB9XG5cblx0LyoqXG5cdCAqIEdldCBhIHRhYiBieSB0YWcuXG5cdCAqIEBwYXJhbSB0YWcgVGFiIHRhZ1xuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHRoaXMuZ2V0VGFiID0gZnVuY3Rpb24odGFnKSB7XG5cdCAgICBmb3IoY29uc3QgdGFiIG9mIHRhYnMpIHtcblx0XHQgICAgaWYodGFiLnRhYi50YWcgPT09IHRhZykge1xuXHRcdFx0ICAgIHJldHVybiB0YWIudGFiO1xuXHRcdCAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRoaXMudW5zZWxlY3RBbGwgPSBmdW5jdGlvbigpIHtcblx0ICAgIC8vXG5cdCAgICAvLyBDbGVhciBhbGwgc2VsZWN0aW9uc1xuXHQgICAgLy9cblx0ICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG5cdCAgICBcdHRhYi5saS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuXHQgICAgXHR0YWIudmlldy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuXHQgICAgfSk7XG4gICAgfVxuXG5cbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSAtMTtcbiAgICAgICAgdGFic0Rpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhYnNEaXYpO1xuICAgICAgICB0YWJzRGl2ID0gbnVsbDtcbiAgICAgICAgdGFicyA9IFtdO1xuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZShlbGVtZW50KTtcbn07XG4iLCJpbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xuXG5leHBvcnQgY29uc3QgRWRpdG9yVGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcblxuXHRjb25zdCBzaXRlID0gdGFicy5zaXRlO1xuXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2VkaXRvcicpO1xuXHR0aGlzLnZpZXcgPSB2aWV3O1xuXG5cdGxldCBpbm5lclZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dmlldy5hcHBlbmRDaGlsZChpbm5lclZpZXcpO1xuXG5cdGxldCBudW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG51bXMuY2xhc3NMaXN0LmFkZCgnY2wtcGctbnVtcycpO1xuXHRpbm5lclZpZXcuYXBwZW5kQ2hpbGQobnVtcyk7XG5cblx0bGV0IGVkaXRvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRlZGl0b3JEaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGctZWRpdG9yJyk7XG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChlZGl0b3JEaXYpO1xuXG5cdGNvbnN0IGVkaXRvciA9IG5ldyBzaXRlLkVkaXRvcihlZGl0b3JEaXYsIHtcblx0XHRyZXNpemU6ICdub25lJyxcblx0XHR0YWI6IHRydWUsXG5cdFx0YXV0b0luZGVudDogdHJ1ZSxcblx0XHRzdHlsZXM6IG51bGxcblx0fSk7XG5cblx0Y29uc3Qgc2Nyb2xsYWJsZSA9IGVkaXRvci50ZXh0YXJlYTtcblx0c2Nyb2xsYWJsZS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXZlbnQpID0+IHtcblx0XHQvLyBlZGl0b3JEaXYuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJzBweCAnICsgKC1wcmUuc2Nyb2xsVG9wKSArICdweCc7XG5cdFx0bnVtcy5zY3JvbGxUb3AgPSBzY3JvbGxhYmxlLnNjcm9sbFRvcDtcblx0fSk7XG5cblx0dGhpcy5zZXQgPSBmdW5jdGlvbih0ZXh0KSB7XG5cdFx0Ly8gRGF0YSBmcm9tIHRoZSBmaWxlIHN5c3RlbSBtYXkgY29uc2lzdCBvZiBlaXRoZXIganVzdFxuXHRcdC8vIHRleHQgKG9sZCBmb3JtYXQpIG9yIHRleHQgaW4gYW4gb2JqZWN0LiBUaGlzIGFsbG93c1xuXHRcdC8vIGVpdGhlciBjYXNlIHRvIHdvcmsuXG5cdFx0aWYodGV4dC5kYXRhICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRleHQgPSB0ZXh0LmRhdGE7XG5cdFx0fVxuXG5cdFx0ZWRpdG9yLnRleHRhcmVhLnZhbHVlID0gdGV4dDtcblxuXHRcdGxldCBsaW5lcyA9IDA7XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyArK2kpe1xuXHRcdFx0aWYodGV4dFtpXSA9PT0gJ1xcbicpIHtcblx0XHRcdFx0bGluZXMrKztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZihsaW5lcyA8IDEwMCkge1xuXHRcdFx0bGluZXMgPSAxMDA7XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIGV4dHJhIGFkZGVkIG9uIGhlcmUgZW5zdXJlcyB3ZSBnZXQgcGFzdCBhbnkgc2Nyb2xsIGJhclxuXHRcdC8vIHRoYXQgbWF5IHRha2UgdXAgaG9yaXpvbnRhbCByb29tLlxuXHRcdG51bXMuaW5uZXJIVE1MID0gJyc7XG5cdFx0Zm9yKGxldCBpPTE7IGk8PWxpbmVzKzU7IGkrKykge1xuXHRcdFx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRcdHAuaW5uZXJUZXh0ID0gJycgKyBpO1xuXHRcdFx0bnVtcy5hcHBlbmRDaGlsZChwKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBjb250ZW50cyBvZiB0aGUgZWRpdG9yXG5cdCAqIEByZXR1cm5zIHsqfHN0cmluZ31cblx0ICovXG5cdHRoaXMuZ2V0ID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGVkaXRvci50ZXh0YXJlYS52YWx1ZTtcblx0fVxuXG5cdHRoaXMuc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG5cdFx0VGFiLnByb3RvdHlwZS5zZWxlY3QuY2FsbCh0aGlzKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0ZWRpdG9yLnRleHRhcmVhLmZvY3VzKCk7XG5cdFx0fSwgMCk7XG5cblx0fVxuXG5cdHRoaXMuc2V0KCcnKTtcbn1cblxuRWRpdG9yVGFiLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVGFiLnByb3RvdHlwZSk7XG5FZGl0b3JUYWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRWRpdG9yVGFiOyIsImltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XG5cbmV4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xuXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ291dHB1dCcpO1xuXHR0aGlzLnZpZXcgPSB2aWV3O1xuXG5cdGxldCBpbm5lclZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dmlldy5hcHBlbmRDaGlsZChpbm5lclZpZXcpO1xuXG5cdGxldCBudW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG51bXMuY2xhc3NMaXN0LmFkZCgnY2wtcGctbnVtcycpO1xuXHRpbm5lclZpZXcuYXBwZW5kQ2hpbGQobnVtcyk7XG5cblx0bGV0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuXHRpbm5lclZpZXcuYXBwZW5kQ2hpbGQocHJlKTtcblxuXHRwcmUuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGV2ZW50KSA9PiB7XG5cdFx0cHJlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICcwcHggJyArICgtcHJlLnNjcm9sbFRvcCkgKyAncHgnO1xuXHRcdG51bXMuc2Nyb2xsVG9wID0gcHJlLnNjcm9sbFRvcDtcblx0fSk7XG5cblx0dGhpcy5zZXQgPSBmdW5jdGlvbih0ZXh0KSB7XG5cdFx0cHJlLmlubmVySFRNTCA9IHRleHQ7XG5cblx0XHRsZXQgbGluZXMgPSAwO1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKXtcblx0XHRcdGlmKHRleHRbaV0gPT09ICdcXG4nKSB7XG5cdFx0XHRcdGxpbmVzKys7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYobGluZXMgPCAxMDApIHtcblx0XHRcdGxpbmVzID0gMTAwO1xuXHRcdH1cblxuXHRcdC8vIFRoZSBleHRyYSBhZGRlZCBvbiBoZXJlIGVuc3VyZXMgd2UgZ2V0IHBhc3QgYW55IHNjcm9sbCBiYXJcblx0XHQvLyB0aGF0IG1heSB0YWtlIHVwIGhvcml6b250YWwgcm9vbS5cblx0XHRudW1zLmlubmVySFRNTCA9ICcnO1xuXHRcdGZvcihsZXQgaT0xOyBpPD1saW5lcys1OyBpKyspIHtcblx0XHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0XHRwLmlubmVyVGV4dCA9ICcnICsgaTtcblx0XHRcdG51bXMuYXBwZW5kQ2hpbGQocCk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgdGV4dCA9IGBpbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xuXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge2V4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7ZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XG5cblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XG5cdHRoaXMudmlldyA9IHZpZXc7XG5cdFxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcbn1cblxuaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcblxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XG5cblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XG5cdHRoaXMudmlldyA9IHZpZXc7XG5cdFxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcbn1cbmltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XG5cbmV4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xuXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ291dHB1dCcpO1xuXHR0aGlzLnZpZXcgPSB2aWV3O1xuXHRcblx0dmlldy5pbm5lclRleHQgPSBcXGBcXGA7XG59XG5cbk91dHB1dFRhYi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRhYi5wcm90b3R5cGUpO1xuT3V0cHV0VGFiLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE91dHB1dFRhYjtgO1xuXG5cdC8vdGhpcy5zZXQodGV4dCArIHRleHQgKyB0ZXh0ICsgdGV4dCk7XG5cdHRoaXMuc2V0KCcnKTtcbn1cblxuT3V0cHV0VGFiLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVGFiLnByb3RvdHlwZSk7XG5PdXRwdXRUYWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3V0cHV0VGFiOyIsIlxuZXhwb3J0IGNvbnN0IFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcblx0dGhpcy50YWJzID0gdGFicztcblxuXHR0aGlzLnZpZXcgPSBudWxsO1xuXHR0aGlzLnRhZyA9IGRhdGEudGFnO1xuXHR0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG5cblx0bGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0dGhpcy5saSA9IGxpO1xuXG5cdGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRsaS5hcHBlbmRDaGlsZChhKTtcblx0YS5pbm5lclRleHQgPSBkYXRhLm5hbWU7XG5cblx0bGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdGxpLmFwcGVuZENoaWxkKG1lbnUpO1xuXHQvLyBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdC8vIG1lbnUuYXBwZW5kQ2hpbGQoaW1nKTtcblx0Ly8gaW1nLnNyYyA9IG1lbnViYXJzO1xuXG5cdGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnNlbGVjdCgpO1xuXHR9KTtcblxuXHRhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnNlbGVjdCgpO1xuXHR9KTtcblxuXHR0aGlzLnNldCA9IGZ1bmN0aW9uKHRleHQpIHt9XG5cblx0Ly9cblx0Ly8gVGhlIG1lbnVcblx0Ly8gTWF5YmUgYWN0aXZhdGUgbGF0ZXIgb24/XG5cdC8vXG5cdC8vIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Ly8gbWVudURpdi5jbGFzc0xpc3QuYWRkKCdjbC10YWItbWVudScpO1xuXHQvLyBtZW51RGl2LmNsYXNzTGlzdC5hZGQoJ2NsLW1lbnUtb3BlbicpO1xuXHQvLyBsaS5hcHBlbmRDaGlsZChtZW51RGl2KTtcblx0Ly9cblx0Ly8gY29uc3QgbWVudVVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblx0Ly8gbWVudURpdi5hcHBlbmRDaGlsZChtZW51VUwpO1xuXHQvLyBtZW51VUwuaW5uZXJIVE1MID1cblx0Ly8gXHQnPGxpPjxhIGNsYXNzPVwiZWRpdC11bmRvXCI+PHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC1hcnJvd3JldHVybnRoaWNrLTEtd1wiPjwvc3Bhbj5VbmRvPC9hPjwvbGk+JyArXG5cdC8vIFx0JzxsaT48YSBjbGFzcz1cImVkaXQtZGVsZXRlXCI+PHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC10cmFzaFwiPjwvc3Bhbj5EZWxldGU8L2E+PC9saT4nO1xuXHQvL1xuXHQvLyBjb25zdCBjb25uZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdC8vIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY29ubmVjdERpdik7XG5cdC8vXG5cdC8vIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHQvLyBjb25uZWN0RGl2LmFwcGVuZENoaWxkKGltZyk7XG5cdC8vIGltZy5zcmMgPSBtZW51YmFycztcbn1cblxuVGFiLnByb3RvdHlwZS5zZWxlY3QgID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMudGFicy51bnNlbGVjdEFsbCgpO1xuXG5cdHRoaXMubGkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblx0dGhpcy52aWV3LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG59XG4iLCIvKipcbiAqIERyYWcgYW5kIGRyb3Agc3VwcG9ydCBmb3IgdGhlIHBhbGV0dGVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgRHJhZ0FuZERyb3AgPSBmdW5jdGlvbihtYWluKSB7XG5cblx0bGV0IGRyYWdFbGVtZW50ID0gbnVsbDsgLy8gRE9NIEVsZW1lbnRcblx0bGV0IGRyYWdJdGVtID0gbnVsbDsgICAgLy8gUGFsZXR0ZUl0ZW1cblx0bGV0IGRyb3BWaWV3cyA9IFtdOyAgICAgLy8gVmlld1xuXG5cdGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuXHRcdFx0aWYoZXZlbnQud2hpY2ggPT09IDApIHtcblx0XHRcdFx0bW91c2VVcChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdG1vdXNlTW92ZShldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXHRcdH0pO1xuXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChldmVudCkgPT4ge1xuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cdFx0XHRtb3VzZU1vdmUodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcblx0XHR9KTtcblxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRtb3VzZVVwKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XG5cdFx0fSk7XG5cblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuXHRcdFx0bW91c2VVcCh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xuXHRcdH0pO1xuXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcblx0XHRcdG1vdXNlVXAodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcblx0XHR9KTtcblx0fVxuXG5cdHRoaXMuZHJhZ2dhYmxlID0gKHBhbGV0dGVJdGVtKSA9PiB7XG5cdFx0cGFsZXR0ZUl0ZW0uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjbGljayhwYWxldHRlSXRlbSk7XG5cblx0XHRcdG1vdXNlTW92ZShldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXHRcdH0pO1xuXG5cdFx0cGFsZXR0ZUl0ZW0uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y2xpY2socGFsZXR0ZUl0ZW0pO1xuXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcblx0XHRcdG1vdXNlTW92ZSh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xuXHRcdH0pO1xuXHR9XG5cblx0dGhpcy5kcm9wcGFibGUgPSAodmlldywgY2FsbGJhY2spID0+IHtcblx0XHRkcm9wVmlld3MucHVzaCh7XG5cdFx0XHQndmlldyc6IHZpZXcsXG5cdFx0XHQnY2FsbGJhY2snOiBjYWxsYmFja1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgY2xpY2sgPSAocGFsZXR0ZUl0ZW0pID0+IHtcblx0XHQvL1xuXHRcdC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGVsZW1lbnQgYW5kIHNldCBpdCB1cCBmb3IgZHJhZ2dpbmdcblx0XHQvL1xuXHRcdGNvbnN0IGNsb25lID0gcGFsZXR0ZUl0ZW0ucGFsZXR0ZUltYWdlKCk7XG5cdFx0bWFpbi5lbGVtZW50LmFwcGVuZENoaWxkKGNsb25lKTtcblx0XHRjbG9uZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0Y2xvbmUuc3R5bGUudG9wID0gMDtcblx0XHRjbG9uZS5zdHlsZS5sZWZ0ID0gMDtcblx0XHRjbG9uZS5zdHlsZS56SW5kZXggPSAxMDA7XG5cdFx0Y2xvbmUuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuXG5cdFx0ZHJhZ0l0ZW0gPSBwYWxldHRlSXRlbTtcblx0XHRkcmFnRWxlbWVudCA9IGNsb25lO1xuXHR9XG5cblx0Y29uc3QgbW91c2VNb3ZlID0gKHgsIHkpID0+IHtcblx0XHRpZihkcmFnRWxlbWVudCAhPT0gbnVsbCkge1xuXHRcdFx0Y29uc3QgcmVjdCA9IG1haW4uZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGNvbnN0IG1haW5YID0gcmVjdC5sZWZ0ICsgbWFpbi5lbGVtZW50LnNjcm9sbExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQ7XG5cdFx0XHRjb25zdCBtYWluWSA9IHJlY3QudG9wICArIG1haW4uZWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cblx0XHRcdGRyYWdFbGVtZW50LnN0eWxlLmxlZnQgPSAoeCAtIG1haW5YIC0gZHJhZ0VsZW1lbnQuY2xpZW50V2lkdGggLyAyKSArICdweCc7XG5cdFx0XHRkcmFnRWxlbWVudC5zdHlsZS50b3AgPSAoeSAtIG1haW5ZIC0gZHJhZ0VsZW1lbnQuY2xpZW50SGVpZ2h0IC8gMikgKyAncHgnO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3QgbW91c2VVcCA9ICh4LCB5KSA9PiB7XG5cdFx0aWYoZHJhZ0VsZW1lbnQgIT09IG51bGwpIHtcblxuXHRcdFx0Zm9yKGNvbnN0IHZpZXcgb2YgZHJvcFZpZXdzKSB7XG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIElzIHRoZSB2aWV3IGVuYWJsZWQ/XG5cdFx0XHRcdC8vXG5cdFx0XHRcdGNvbnN0IHZpZXdFbGVtZW50ID0gdmlldy52aWV3LmVsZW1lbnQ7XG5cdFx0XHRcdGlmKHZpZXdFbGVtZW50LnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBEZXRlcm1pbmUgeCx5IGluIHRoZSBjYW52YXNcblx0XHRcdFx0Ly9cblx0XHRcdFx0Y29uc3QgcmVjdCA9IHZpZXdFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRjb25zdCB2aWV3WCA9IHJlY3QubGVmdCArIHZpZXdFbGVtZW50LnNjcm9sbExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQ7XG5cdFx0XHRcdGNvbnN0IHZpZXdZID0gcmVjdC50b3AgKyB2aWV3RWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cblx0XHRcdFx0aWYoeCA+PSB2aWV3WCAmJlxuXHRcdFx0XHRcdHkgPj0gdmlld1kgJiZcblx0XHRcdFx0XHR4IDwgdmlld1ggKyAocmVjdC5yaWdodCAtIHJlY3QubGVmdCkgJiZcblx0XHRcdFx0XHR5IDwgdmlld1kgKyAocmVjdC5ib3R0b20gLSByZWN0LnRvcCkpIHtcblx0XHRcdFx0XHR2aWV3LmNhbGxiYWNrKGRyYWdJdGVtLCB4IC0gdmlld1gsIHkgLSB2aWV3WSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWFpbi5lbGVtZW50LnJlbW92ZUNoaWxkKGRyYWdFbGVtZW50KTtcblx0XHRcdGRyYWdFbGVtZW50ID0gbnVsbDtcblx0XHRcdGRyYWdJdGVtID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXG5cblx0aW5pdGlhbGl6ZSgpO1xufSIsIi8qKlxuICogU2ltcGxlIERvY3VtZW50IHJlYWR5IGZ1bmN0aW9uLCBlcXVpdmFsZW50IHRvIGpRdWVyeSdzIGRvY3VtZW50IHJlYWR5LlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBSZWFkeSA9IGZ1bmN0aW9uKCkge1xufVxuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkb24uXG4gKiBAcGFyYW0gZm4gRnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGRvY3VtZW50IHJlYWR5XG4gKi9cblJlYWR5LmdvID0gZnVuY3Rpb24oZm4pIHtcbiAgICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XG4gICAgICAgIGZuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1BsYXlncm91bmR9IGZyb20gXCIuL1BsYXlncm91bmQvUGxheWdyb3VuZFwiO1xuXG5leHBvcnQgY29uc3QgUGxheWdyb3VuZEZhY3RvcnkgPSBmdW5jdGlvbigpIHt9XG5cblBsYXlncm91bmRGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcblxuXHRmdW5jdGlvbiBpbnN0YWxsKCkge1xuXHRcdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNsLXBsYXlncm91bmQnKTtcblx0XHRmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcblx0XHRcdGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xuXHRcdFx0ZWxlbWVudC5pbm5lckhUTUwgPSAnJztcblx0XHRcdGNvbnN0IHBsYXlncm91bmQgPSBuZXcgUGxheWdyb3VuZChzaXRlLCBlbGVtZW50LCBqc29uKTtcblx0XHRcdHBsYXlncm91bmQuc3RhcnROb3coKTtcblx0XHR9XG5cdH1cblxuXHRzaXRlLnN0YXJ0KCAoKSA9PiB7XG5cdFx0aW5zdGFsbCgpO1xuXHR9KTtcblxuXG5cdHNpdGUubWVzc2FnZUxpc3RlbmVyKChtc2csIGRhdGEpID0+IHtcblx0XHRzd2l0Y2gobXNnKSB7XG5cdFx0XHRjYXNlICdjbC1xdWl6LWFmdGVyLWluc3RhbGxlZCc6XG5cdFx0XHRcdGluc3RhbGwoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2NsLWdyYWRlcy1ncmFkZXItaW5zdGFsbGVkJzpcblx0XHRcdFx0aW5zdGFsbCgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdH1cblx0fSk7XG5cblx0c2l0ZS5QbGF5Z3JvdW5kID0gUGxheWdyb3VuZDtcbn1cblxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC03MDMwMmY3YzI2LzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNi44LjEtMzBkODRiNGNmMS03YzE3ODQyNDdiLnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLTcwMzAyZjdjMjYvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS02LjguMS0zMGQ4NGI0Y2YxLTdjMTc4NDI0N2IuemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtNzAzMDJmN2MyNi8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTYuOC4xLTMwZDg0YjRjZjEtN2MxNzg0MjQ3Yi56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL21lbnUtY2hlY2sucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvYmFycy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBkaXYuY2wtcGxheWdyb3VuZCBkaXYudG9hc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi4zZW0pO1xuICB6LWluZGV4OiA0MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjRzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbGVmdDogY2FsYyg1MCUgLSAzMGVtLzIpO1xuICB3aWR0aDogMzBlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi50b2FzdC50b2FzdC1hY3RpdmUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuNHM7XG4gIHotaW5kZXg6IDQwMDtcbn1cblxuZGl2LmNsLXBsYXlncm91bmQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzgwODA4MDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDc5NkI7XG59XG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSBhIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkgYTpsaW5rLCBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSBhOnZpc2l0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgaW1nLmNoZWNrIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwLjI1ZW0gMmVtIDAuMjVlbSAwLjVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIGEge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkgYTpsaW5rLCBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkgYTp2aXNpdGVkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMnMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGVmdDogMDtcbiAgdG9wOiAxMDAlO1xuICBtYXJnaW46IDFweCAwIDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbn1cbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwgPiBsaSB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDhlbTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwgPiBsaS5tZW51LWRpc2FibGVkIGEge1xuICBvcGFjaXR5OiAwLjM7XG59XG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmNsLXBnLW1lbnUtb3BlbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xufVxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5lZGl0LW1lbnUgYSB7XG4gIHdpZHRoOiA2ZW07XG59XG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLm9wdGlvbi1tZW51IGEge1xuICB3aWR0aDogMTFlbTtcbn1cbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuZmlsZS1tZW51IGEge1xuICB3aWR0aDogNmVtO1xufVxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5oZWxwLW1lbnUgYSB7XG4gIHdpZHRoOiA3LjVlbTtcbn1cbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgLnVsLXN0YXRlLWFjdGl2ZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIGxpLm1lbnUtZGl2aWRlciB7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXI6IDAgc29saWQgYmxhY2s7XG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbn1cblxuZGl2LmNsLXBsYXlncm91bmQgZGl2Lndvcmsge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNhMDA7XG4gIG9wYWNpdHk6IDAuMDU7XG4gIHotaW5kZXg6IDIwMDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctbWFpbiB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmRpdi5jbC1wbGF5Z3JvdW5kLWZ1bGwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmRpdi5jbC1wbGF5Z3JvdW5kLXdpbmRvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiB0aGluIHNvbGlkICNhYWFhYWE7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWluLXdpZHRoOiA0MDBweDtcbn1cblxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWJlZm9yZSwgZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxcHg7XG59XG5cbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XG4gIGhlaWdodDogMWVtO1xufVxuXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgYm9yZGVyOiAwO1xufVxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogM3B4IDAgMCAycHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmc6IDAuMjVlbSAwLjI1ZW0gMC40NWVtIDA7XG4gIG1pbi13aWR0aDogNmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICBtYXJnaW46IDFweCAzcHggLTFweCAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB6LWluZGV4OiAxODtcbn1cbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDAuMjVlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIG91dGxpbmU6IDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6bnRoLWNoaWxkKDIpIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIHBhZGRpbmc6IDA7XG59XG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkgYTpudGgtY2hpbGQoMikgaW1nIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogYXV0bztcbn1cbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiAyMjtcbn1cbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaS5zZWxlY3RlZCBhIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDI5cHg7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDIwO1xufVxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXcuc2VsZWN0ZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xufVxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBjYWxjKDEwMCUgLSAxN3B4KTtcbiAgdG9wOiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcbn1cbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDI3cHg7XG4gIHRvcDogNHB4O1xuICBsZWZ0OiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xufVxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IGRpdiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogYXV0bztcbn1cbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAzMHB4IDAgMCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xufVxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDhlbTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpLm1lbnUtZGlzYWJsZWQgYSB7XG4gIG9wYWNpdHk6IDAuMztcbn1cbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudS5jbC1tZW51LW9wZW4ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxMDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4ycztcbn1cblxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtcm9vdCwgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtbGVmdCwgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtcmlnaHQsXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3AsIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAxIGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtbGVmdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMCAxIGF1dG87XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4ODg7XG59XG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0IGRpdi5jbC1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgcmlnaHQ6IC01cHg7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogMTAwO1xuICBjdXJzb3I6IGV3LXJlc2l6ZTtcbn1cbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7XG59XG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3AgZGl2LmNsLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvdHRvbTogLTVweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDI7XG4gIGN1cnNvcjogbnMtcmVzaXplO1xufVxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuZGl2LmNsLXBnLW51bXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICB3aWR0aDogMmVtO1xuICBwYWRkaW5nOiA0cHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwO1xufVxuZGl2LmNsLXBnLW51bXMgcCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgM3B4IDAgMDtcbiAgYm9yZGVyOiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbmRpdi5jbC1wZy1hYm91dCB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5kaXYuY2wtcGctYWJvdXQgZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMjI1cHg7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYge1xuICBwYWRkaW5nOiAxZW07XG59XG5kaXYuY2wtcGctYWJvdXQgZGl2LmNsLXBnLWFib3V0LWRpdiBoMSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmRpdi5jbC1wZy1hYm91dCBkaXYuY2wtcGctYWJvdXQtZGl2IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYgZGl2LmNsLXBnLWVkaXRvciB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYgZGl2LmNsLXBnLWVkaXRvciB0ZXh0YXJlYSB7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDRweCAwIDAgM3B4O1xuICBib3JkZXI6IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XG59XG5cbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3Lm91dHB1dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQgPiBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQgPiBkaXYgcHJlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDRweCAwIDAgM3B4O1xuICBib3JkZXI6IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL190b2FzdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL21vZHVsZXMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL21vZHVsZXMvX2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9fcGxheWdyb3VuZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19wbGF5Z3JvdW5kLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX21lbnUuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9tb2R1bGVzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL193b3JrLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvc2Fzcy9wYXJ0aWFscy9fdGFicy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19wYW5lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX2xpbmVfbnVtYmVycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL19hYm91dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9zYXNzL3BhcnRpYWxzL190YWJfZWRpdG9yLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL3Nhc3MvcGFydGlhbHMvX3RhYl9vdXRwdXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUVBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsdUZBQUE7RUFFQSwyREFBQTtFQUNBLGdCQ2RjO0VEZWQsd0JBQUE7RUFDQSxXQ2ZVO0VEZ0JWLHlCRVllO0VGWGYsWUVZUztFRlhULGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUdMSjtBSFFFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBR05KOztBQ3ZCQTtFQUNFLGFBQUE7QUQwQkY7O0FFM0JBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCSGVnQjtFR2RoQixpQ0FBQTtFQUNBLGlCQ1JlO0FIc0NqQjtBRTVCRTtFQUNFLG1CSFZXO0FDd0NmO0FFM0JFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FGNkJKO0FFM0JJO0VBQ0UsMkRDcEJNO0VEcUJOLGlCQ3BCVztFRHFCWCxZSENPO0VHQVAscUJBQUE7QUY2Qk47QUUxQkk7RUFDRSxZSEpPO0FDZ0NiO0FFckJFO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0Es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aUJBQUE7RUFFQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FWdWJWOztBVzNkRTtFQUNFLGdCQUFBO0FYOGRKO0FXNWRJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FYOGROO0FXNWRNO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxtREFBQTtFQUNBLGlCQUFBO0VBRUEsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FYNmRSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpdi5jbC1wbGF5Z3JvdW5kXFxue1xcbiAgJHRvYXN0LXRyYW5zaXRpb24tdGltZTogMC40cztcXG5cXG4gIGRpdi50b2FzdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcblxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjNlbSk7XFxuICAgIHotaW5kZXg6IDQwMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsICR0b2FzdC10cmFuc2l0aW9uLXRpbWUgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyICR0b2FzdC10cmFuc2l0aW9uLXRpbWUsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcblxcbiAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAkdG9hc3QtZm9udC1zaXplO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtICN7JHRvYXN0LXdpZHRofS8yKTtcXG4gICAgd2lkdGg6ICR0b2FzdC13aWR0aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRvYXN0LWJhY2tncm91bmQ7XFxuICAgIGNvbG9yOiAkdG9hc3QtdGV4dDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICB9XFxuXFxuICBkaXYudG9hc3QudG9hc3QtYWN0aXZlIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAkdG9hc3QtdHJhbnNpdGlvbi10aW1lO1xcbiAgICB6LWluZGV4OiA0MDA7XFxuXFxuICB9XFxufVwiLFwiJHRvYXN0LWZvbnQtc2l6ZTogMS4xZW07XFxuJHRvYXN0LXdpZHRoOiAzMGVtO1xcblxcbiRkcmFnLWJhci13aWR0aDogMTBweDtcXG5cXG4kdGFiLWNvcm5lci1yYWRpdXM6IDVweDtcXG5cIixcIi8vIFRoZSBtYWpvciBjb2xvcnNcXG4vLyBXZSBoYXZlIGEgcHJpbWFyeSBjb2xvciwgdHdvIHNlY29uZGFyeSBjb2xvcnMsIGFuZCBhIGNvbXBsZW1lbnRhcnkgY29sb3IuXFxuJGRhcmstcHJpbWFyeTogIzAwNzk2QjtcXG4kcHJpbWFyeTogIzAwOTY4ODtcXG4kbGlnaHQtcHJpbWFyeTogI0IyREZEQjtcXG4kYWNjZW50OiAjNjA3RDhCO1xcbiRwcmltYXJ5LXRleHQ6ICMyMTIxMjE7XFxuJGRpdmlkZXItY29sb3I6ICNCREJEQkQ7XFxuJHNlY29uZGFyeS10ZXh0OiAjNjA2MDYwO1xcblxcbiRjb21wOiAjYzQxNDI1O1xcbiR3aW5kb3ctYm9yZGVyczogI2FhYWFhYTtcXG5cXG5cXG5cXG4kdGFicy1iYWNrZ3JvdW5kOiAjZGRkO1xcbiR0YWItYmFja2dyb3VuZDogI2NjYztcXG4kdGFiLXRleHQ6IGJsYWNrO1xcbiR0YWItc2VsZWN0ZWQtYmFja2dyb3VuZDogd2hpdGU7XFxuJHRhYi1zZWxlY3RlZC10ZXh0OiBibGFjaztcXG5cXG4kbWVudS1mb2N1czogJGRhcmstcHJpbWFyeTtcXG4kbWVudS1iYWNrZ3JvdW5kOiAjZjBmM2YwO1xcbiRtZW51LWNvbG9yOiBibGFjaztcXG4kbWVudS1kaXZpZGVyLWNvbG9yOiBibGFjaztcXG4kbWVudS1ib3JkZXItY29sb3I6ICM4MDgwODA7XFxuXFxuJHJlc2l6ZXI6ICRkYXJrLXByaW1hcnk7XFxuXFxuJHRvYXN0LWJhY2tncm91bmQ6ICMxNTE1MTU7XFxuJHRvYXN0LXRleHQ6IHdoaXRlO1wiLFwiZGl2LmNsLXBsYXlncm91bmQgZGl2LnRvYXN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjNlbSk7XFxuICB6LWluZGV4OiA0MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC40cywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDMwZW0vMik7XFxuICB3aWR0aDogMzBlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LnRvYXN0LnRvYXN0LWFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC40cztcXG4gIHotaW5kZXg6IDQwMDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIge1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDA7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzgwODA4MDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMDA3OTZCO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkgYSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSBhOmxpbmssIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIGE6dmlzaXRlZCB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCBpbWcuY2hlY2sge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgd2lkdGg6IDE5cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBjb250ZW50OiB1cmwoXFxcIi4uLy4uL2ltZy9tZW51LWNoZWNrLnBuZ1xcXCIpO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMC4yNWVtIDJlbSAwLjI1ZW0gMC41ZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhOmxpbmssIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAxMDAlO1xcbiAgbWFyZ2luOiAxcHggMCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxuICBib3JkZXItdG9wLXdpZHRoOiAwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOGVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwgPiBsaS5tZW51LWRpc2FibGVkIGEge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmNsLXBnLW1lbnUtb3BlbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuZWRpdC1tZW51IGEge1xcbiAgd2lkdGg6IDZlbTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5vcHRpb24tbWVudSBhIHtcXG4gIHdpZHRoOiAxMWVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmZpbGUtbWVudSBhIHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuaGVscC1tZW51IGEge1xcbiAgd2lkdGg6IDcuNWVtO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIC51bC1zdGF0ZS1hY3RpdmUge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCBsaS5tZW51LWRpdmlkZXIge1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IDAgc29saWQgYmxhY2s7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi53b3JrIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogI2EwMDtcXG4gIG9wYWNpdHk6IDAuMDU7XFxuICB6LWluZGV4OiAyMDAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLW1haW4ge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZnVsbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtd2luZG93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IHRoaW4gc29saWQgI2FhYWFhYTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWJlZm9yZSwgZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XFxuICBoZWlnaHQ6IDFlbTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG4gIGJvcmRlcjogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzcHggMCAwIDJweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMC4yNWVtIDAuMjVlbSAwLjQ1ZW0gMDtcXG4gIG1pbi13aWR0aDogNmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgbWFyZ2luOiAxcHggM3B4IC0xcHggMDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB6LWluZGV4OiAxODtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG91dGxpbmU6IDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6bnRoLWNoaWxkKDIpIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkgYTpudGgtY2hpbGQoMikgaW1nIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB6LWluZGV4OiAyMjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpLnNlbGVjdGVkIGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyBkaXYuY2wtcGctdmlld3Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMjlweDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogMjA7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIGRpdi5jbC1wZy12aWV3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXcuc2VsZWN0ZWQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiBjYWxjKDEwMCUgLSAxN3B4KTtcXG4gIHRvcDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMjdweDtcXG4gIHRvcDogNHB4O1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IGRpdiBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMzBweCAwIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwgPiBsaSBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4ZW07XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkubWVudS1kaXNhYmxlZCBhIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51LmNsLW1lbnUtb3BlbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3QsIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQsIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJpZ2h0LFxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCwgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtbGVmdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4ODg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQgZGl2LmNsLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcmlnaHQ6IC01cHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgei1pbmRleDogMTAwO1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCBkaXYuY2wtYmFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3R0b206IC01cHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgei1pbmRleDogMjtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1ib3R0b20ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG5kaXYuY2wtcGctbnVtcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICB3aWR0aDogMmVtO1xcbiAgcGFkZGluZzogNHB4IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5kaXYuY2wtcGctbnVtcyBwIHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgM3B4IDAgMDtcXG4gIGJvcmRlcjogMDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6ICM3Nzc7XFxufVxcblxcbmRpdi5jbC1wZy1hYm91dCB7XFxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5kaXYuY2wtcGctYWJvdXQgZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMjI1cHg7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYge1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5kaXYuY2wtcGctYWJvdXQgZGl2LmNsLXBnLWFib3V0LWRpdiBoMSB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5kaXYuY2wtcGctYWJvdXQgZGl2LmNsLXBnLWFib3V0LWRpdiBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yID4gZGl2IGRpdi5jbC1wZy1lZGl0b3Ige1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yID4gZGl2IGRpdi5jbC1wZy1lZGl0b3IgdGV4dGFyZWEge1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXG4gIGJvcmRlcjogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0ID4gZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQgPiBkaXYgcHJlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uLy4uL2ltZy9iYXJzLnBuZ1xcXCIpO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXG4gIGJvcmRlcjogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cIixcImRpdi5jbC1wbGF5Z3JvdW5kIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLFwiZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIge1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDA7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1lbnUtYmFja2dyb3VuZDtcXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzgwODA4MDtcXG4gIGZvbnQtc2l6ZTogJG1lbnUtZm9udC1zaXplO1xcblxcbiAgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAkbWVudS1mb2N1cztcXG4gIH1cXG5cXG4gIGxpIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgYSB7XFxuICAgICAgZm9udC1mYW1pbHk6ICRtZW51LWZvbnQ7XFxuICAgICAgZm9udC1zaXplOiAkbWVudS1mb250LXNpemU7XFxuICAgICAgY29sb3I6ICRtZW51LWNvbG9yO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgfVxcblxcbiAgICBhOmxpbmssIGE6dmlzaXRlZCB7XFxuICAgICAgY29sb3I6ICRtZW51LWNvbG9yO1xcbiAgICB9XFxuICB9XFxuXFxuICAvL1xcbiAgLy8gVG9wIGxldmVsIG1lbnVcXG4gIC8vXFxuICA+IHVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgaW1nLmNoZWNrIHtcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAgICAgd2lkdGg6IDE5cHg7XFxuICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICAgIGNvbnRlbnQ6IHVybChcXFwiLi4vLi4vaW1nL21lbnUtY2hlY2sucG5nXFxcIik7XFxuICAgIH1cXG5cXG4gICAgPiBsaSB7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgcGFkZGluZzogMC4yNWVtIDJlbSAwLjI1ZW0gMC41ZW07XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgIGEge1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICRtZW51LWZvbnQ7XFxuICAgICAgICBmb250LXNpemU6ICRtZW51LWZvbnQtc2l6ZTtcXG4gICAgICAgIGNvbG9yOiAkbWVudS1jb2xvcjtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgYTpsaW5rLCBhOnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6ICRtZW51LWNvbG9yO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvL1xcbiAgICAvLyBEcm9wLWRvd24gbWVudVxcbiAgICAvL1xcbiAgICB1bCB7XFxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcbiAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG5cXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgICAgLy8gZGlzcGxheTogbm9uZTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogMTAwJTtcXG4gICAgICBtYXJnaW46IDFweCAwIDAgMDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1iYWNrZ3JvdW5kO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1lbnUtYm9yZGVyLWNvbG9yO1xcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XFxuXFxuICAgICAgPiBsaSB7XFxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgICAgICBhIHtcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICB3aWR0aDogOGVtO1xcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICA+IGxpLm1lbnUtZGlzYWJsZWQge1xcbiAgICAgICAgYSB7XFxuICAgICAgICAgIG9wYWNpdHk6IDAuMztcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgdWwuY2wtcGctbWVudS1vcGVuIHtcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgei1pbmRleDogMTAwO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xcbiAgICB9XFxuXFxuICAgIHVsLmVkaXQtbWVudSBhIHtcXG4gICAgICB3aWR0aDogNmVtO1xcbiAgICB9XFxuXFxuICAgIHVsLm9wdGlvbi1tZW51IGEge1xcbiAgICAgIHdpZHRoOiAxMWVtO1xcbiAgICB9XFxuXFxuICAgIHVsLmZpbGUtbWVudSBhIHtcXG4gICAgICB3aWR0aDogNmVtO1xcbiAgICB9XFxuXFxuICAgIHVsLmhlbHAtbWVudSBhIHtcXG4gICAgICB3aWR0aDogNy41ZW07XFxuICAgIH1cXG5cXG4gICAgLnVsLXN0YXRlLWFjdGl2ZSB7XFxuICAgICAgY29sb3I6IHJlZDtcXG4gICAgfVxcblxcbiAgICBsaS5tZW51LWRpdmlkZXIge1xcbiAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgIGJvcmRlcjogMCBzb2xpZCAkbWVudS1kaXZpZGVyLWNvbG9yO1xcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5cIixcIiRtZW51LWZvbnQ6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuJG1lbnUtZm9udC1zaXplOiAwLjkwcmVtO1xcblxcbiR0YWJzLWZvbnQ6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuJHRhYnMtZm9udC1zaXplOiAwLjgwcmVtO1wiLFwiZGl2LmNsLXBsYXlncm91bmQgZGl2Lndvcmsge1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG5cIixcImRpdi5jbC1wbGF5Z3JvdW5kIHtcXG5cXG4gIGRpdi5jbC1wZy1vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQ6ICNhMDA7XFxuICAgIG9wYWNpdHk6IDAuMDU7XFxuICAgIHotaW5kZXg6IDIwMDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBkaXYuY2wtcGctbWFpbiB7XFxuICAgIC8vIE5vcm1hbGl6YXRpb25zXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWZ1bGwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLXdpbmRvdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkICR3aW5kb3ctYm9yZGVycztcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWJlZm9yZSwgZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XFxuICBoZWlnaHQ6IDFlbTtcXG59XFxuXFxuXCIsXCJcXG5kaXYuY2wtcGxheWdyb3VuZCB7XFxuICBkaXYuY2wtcGctdGFicyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBmb250LXNpemU6ICR0YWJzLWZvbnQtc2l6ZTtcXG5cXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZDogJHRhYnMtYmFja2dyb3VuZDtcXG4gICAgYm9yZGVyOiAwO1xcblxcbiAgICA+dWwge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAzcHggMCAwIDJweDtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG5cXG4gICAgICA+bGkge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgZm9udC1zaXplOiAkdGFicy1mb250LXNpemU7XFxuICAgICAgICBwYWRkaW5nOiAwLjI1ZW0gMC4yNWVtIDAuNDVlbSAwO1xcbiAgICAgICAgbWluLXdpZHRoOiA2ZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGFiLWJhY2tncm91bmQ7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAkdGFiLWNvcm5lci1yYWRpdXMgJHRhYi1jb3JuZXItcmFkaXVzIDAgMDtcXG4gICAgICAgIG1hcmdpbjogMXB4IDNweCAtMXB4IDA7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgei1pbmRleDogMTg7XFxuXFxuICAgICAgICBhOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICR0YWJzLWZvbnQ7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgcGFkZGluZzogMCAwLjI1ZW07XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgICAgY29sb3I6ICR0YWItdGV4dDtcXG4gICAgICAgICAgb3V0bGluZTogMDtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBhOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgICAgICAgICBwYWRkaW5nOiAwO1xcblxcbiAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICA+bGkuc2VsZWN0ZWQge1xcbiAgICAgICAgYmFja2dyb3VuZDogJHRhYi1zZWxlY3RlZC1iYWNrZ3JvdW5kO1xcbiAgICAgICAgei1pbmRleDogMjI7XFxuXFxuICAgICAgICBhIHtcXG4gICAgICAgICAgY29sb3I6ICR0YWItc2VsZWN0ZWQtdGV4dDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgZGl2LmNsLXBnLXZpZXdzIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IDI5cHg7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIHotaW5kZXg6IDIwO1xcbiAgICB9XFxuXFxuICAgIGRpdi5jbC1wZy12aWV3IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHotaW5kZXg6IDIwO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgfVxcblxcbiAgICBkaXYuY2wtcGctdmlldy5zZWxlY3RlZCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB9XFxuICB9XFxuXFxuICBkaXYuY2wtdGFiLW1lbnUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDE3cHgpO1xcbiAgICB0b3A6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMnMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcblxcbiAgICBkaXYge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMTRweDtcXG4gICAgICBoZWlnaHQ6IDI3cHg7XFxuICAgICAgdG9wOiA0cHg7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkbWVudS1ib3JkZXItY29sb3I7XFxuICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1iYWNrZ3JvdW5kO1xcblxcbiAgICAgIGltZyB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vXFxuICAgIC8vIFRhYiBkcm9wLWRvd24gbWVudVxcbiAgICAvL1xcbiAgICB1bCB7XFxuXFxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtZW51LWJhY2tncm91bmQ7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkbWVudS1ib3JkZXItY29sb3I7XFxuICAgICAgLy9ib3JkZXItdG9wLXdpZHRoOiAwO1xcblxcbiAgICAgID4gbGkge1xcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICAgICAgYSB7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgd2lkdGg6IDhlbTtcXG4gICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgPiBsaS5tZW51LWRpc2FibGVkIHtcXG4gICAgICAgIGEge1xcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuXFxuXFxuICBkaXYuY2wtdGFiLW1lbnUuY2wtbWVudS1vcGVuIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxuICB9XFxufVwiLFwiQHVzZSBcXFwic2FzczptYXRoXFxcIjtcXG5cXG5kaXYuY2wtcGxheWdyb3VuZCB7XFxuICBkaXYuY2wtcGxheWdyb3VuZC1yb290LCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0LCBkaXYuY2wtcGxheWdyb3VuZC1yaWdodCxcXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCwgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB9XFxuXFxuICBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbGV4OiAwIDEgYXV0bztcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzg4ODtcXG5cXG4gICAgZGl2LmNsLWJhciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIHJpZ2h0OiAtNXB4OyAvLyBtYXRoLmRpdigtJGRyYWctYmFyLXdpZHRoLCAyKTtcXG4gICAgICB3aWR0aDogJGRyYWctYmFyLXdpZHRoO1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIHotaW5kZXg6IDEwMDtcXG4gICAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgZGl2LmNsLXBsYXlncm91bmQtcmlnaHQge1xcbiAgfVxcblxcbiAgZGl2LmNsLXBsYXlncm91bmQtdG9wIHtcXG4gICAgZmxleDogMCAxIGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODtcXG5cXG4gICAgZGl2LmNsLWJhciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBib3R0b206IC01cHg7IC8vIG1hdGguZGl2KC0kZHJhZy1iYXItd2lkdGgsIDIpO1xcbiAgICAgIGhlaWdodDogJGRyYWctYmFyLXdpZHRoO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgY3Vyc29yOiBucy1yZXNpemU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XFxuICAgIC8vIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzE4NDUzYjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gIH1cXG59XFxuXCIsXCJkaXYuY2wtcGctbnVtcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbGV4OiAwIDAgYXV0bztcXG5cXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICB3aWR0aDogMmVtO1xcbiAgcGFkZGluZzogNHB4IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcblxcbiAgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgM3B4IDAgMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY29sb3I6ICM3Nzc7XFxuICB9XFxufVxcblwiLFwiZGl2LmNsLXBnLWFib3V0IHtcXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxuXFxuICBmaWd1cmUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAyMjVweDtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICB9XFxuXFxuICBkaXYuY2wtcGctYWJvdXQtZGl2IHtcXG4gICAgcGFkZGluZzogMWVtO1xcblxcbiAgICBoMSB7XFxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgcCB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICB9XFxuXFxufVwiLFwiZGl2LmNsLXBsYXlncm91bmQge1xcbiAgZGl2LmNsLXBnLXZpZXcuZWRpdG9yIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgLy8gaW5uZXJEaXZcXG4gICAgPiBkaXYge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICAgICAgZGl2LmNsLXBnLWVkaXRvciB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICAgICAgdGV4dGFyZWEge1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcXG5cXG4gICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXG4gICAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcXG5cXG4gICAgICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcXG4gICAgICAgICAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsXFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiZGl2LmNsLXBsYXlncm91bmQge1xcbiAgZGl2LmNsLXBnLXZpZXcub3V0cHV0IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgPiBkaXYge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICAgICAgcHJlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2ltZy9iYXJzLnBuZycpO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuXFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIH1cXG5cXG5cXG4gICAgfVxcblxcblxcblxcblxcblxcbiAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtZDE4ZjA0MTg0Ni8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMy4zLjMtMmU4YmJlZWFjNC1mNTljOTUzZjU2LnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC1kMThmMDQxODQ2LzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS0zLjMuMy0yZThiYmVlYWM0LWY1OWM5NTNmNTYuemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC1kMThmMDQxODQ2LzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS0zLjMuMy0yZThiYmVlYWM0LWY1OWM5NTNmNTYuemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtZDE4ZjA0MTg0Ni8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMy4zLjMtMmU4YmJlZWFjNC1mNTljOTUzZjU2LnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC1kMThmMDQxODQ2LzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS0zLjMuMy0yZThiYmVlYWM0LWY1OWM5NTNmNTYuemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC1kMThmMDQxODQ2LzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS0zLjMuMy0yZThiYmVlYWM0LWY1OWM5NTNmNTYuemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtNzAzMDJmN2MyNi8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTYuOC4xLTMwZDg0YjRjZjEtN2MxNzg0MjQ3Yi56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLnlhcm4vY2FjaGUvcmVzb2x2ZS11cmwtbG9hZGVyLW5wbS01LjAuMC05YjQ0MTA2N2M5LTZkNDgzNzMzYTQuemlwL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc2Fzcy1sb2FkZXItdmlydHVhbC1lNWYzMzNkZGRjLzAvY2FjaGUvc2Fzcy1sb2FkZXItbnBtLTEzLjMuMi04MmJmZWFlNzQ2LTczOTRhOGQxYjguemlwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVszXSEuL19wbGF5Z3JvdW5kLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtNzAzMDJmN2MyNi8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTYuOC4xLTMwZDg0YjRjZjEtN2MxNzg0MjQ3Yi56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLnlhcm4vY2FjaGUvcmVzb2x2ZS11cmwtbG9hZGVyLW5wbS01LjAuMC05YjQ0MTA2N2M5LTZkNDgzNzMzYTQuemlwL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc2Fzcy1sb2FkZXItdmlydHVhbC1lNWYzMzNkZGRjLzAvY2FjaGUvc2Fzcy1sb2FkZXItbnBtLTEzLjMuMi04MmJmZWFlNzQ2LTczOTRhOGQxYjguemlwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVszXSEuL19wbGF5Z3JvdW5kLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiUGxheWdyb3VuZCIsIlBsYXlncm91bmRGYWN0b3J5IiwiZGVmYXVsdCIsImNyZWF0ZSIsIlNpdGUiLCJzaXRlIiwiQWN0aW9uIiwiRGlhbG9nIiwicGFja2FnZWpzb24iLCJBYm91dEFjdGlvbiIsIm9wdGlvbnMiLCJjYWxsIiwibWFpbiIsInByb3RvdHlwZSIsImNvbnRlbnQiLCJjb25jYXQiLCJyb290IiwidmVyc2lvbiIsImRpYWxvZyIsInRpdGxlIiwiT2JqZWN0IiwiY29uc3RydWN0b3IiLCJ0YWciLCJnZXRTb3VyY2VzIiwic291cmNlcyIsInVuZGVmaW5lZCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJzb3VyY2UiLCJ2YWx1ZSIsInRhYiIsImdldFRhYiIsIm5hbWUiLCJkYXRhIiwiZ2V0IiwiZXJyIiwiZSIsImYiLCJTYXZlQWN0aW9uIiwiQWxsQWN0aW9ucyIsImFkZEFsbCIsImFkZEFjdGlvbiIsIl90aGlzIiwicGFyYW1zIiwiYXBwVGFnIiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGUiLCJhcGkiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImhhc0Vycm9yIiwidG9hc3QiLCJlcnJvciIsIlRvb2xzIiwiaXNWaXNpYmxlIiwiZWxlbSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZ2V0Q2xpZW50UmVjdHMiLCJsZW5ndGgiLCJhZGRDbGFzcyIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRDbGFzc2VzIiwiY2xhc3NlcyIsInNwbGl0IiwiZm9yRWFjaCIsImNscyIsInJlbW92ZUNsYXNzIiwicmVnRXgiLCJSZWdFeHAiLCJyZXBsYWNlIiwiY3JlYXRlQ2xhc3NlZERpdiIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFkZENvbnRlbnQiLCJpc1N0cmluZyIsImlubmVySFRNTCIsImlzRWxlbWVudCIsImFwcGVuZENoaWxkIiwidmFsIiwiX3R5cGVvZiIsInRvU3RyaW5nIiwibm9kZVZhbHVlIiwib2Zmc2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJzY3JvbGxMZWZ0Iiwid2luZG93IiwicGFnZVhPZmZzZXQiLCJ0b3AiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImNoaWxkIiwidGFnTmFtZSIsImNoaWxkTm9kZXMiLCJub2RlIiwiVG9hc3QiLCJkZWZhdWx0RHVyYXRpb24iLCJpbnRlclRvYXN0RGVsYXkiLCJtZXNzYWdlcyIsImFjdGl2ZSIsInNob3ciLCJtZXNzYWdlIiwic3BsaWNlIiwibXNnIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRpbWUiLCJwdXNoIiwianNvbkVycm9ycyIsImpzb25BcGkiLCJfdGhpczIiLCJlcnJvcnMiLCJSZXNpemVyIiwiTWVudSIsIkRyYWdBbmREcm9wIiwiUGFuZSIsIk1haW4iLCJwbGF5Z3JvdW5kIiwibWVudSIsInRhYnMiLCJkaXZPdmVybGF5IiwiZGl2V29yayIsImluaXRpYWxpemUiLCJzdHlsZSIsImRpc3BsYXkiLCJoZWlnaHQiLCJjb250YWlucyIsImhhbmRsZSIsImRyYWdBbmREcm9wIiwicm9vdFBhbmUiLCJsb2FkIiwicGFuZSIsIlN0cmluZyIsInBhcnNlIiwic2V0IiwibmV3VGFiIiwibW9kYWwiLCJuYXYiLCJ1bCIsIm1lbnVzIiwiYWN0aW9uIiwiX2xvb3AiLCJ0b3BMSSIsImEiLCJpbm5lclRleHQiLCJnZXRBY3Rpb24iLCJfaSIsIl9hcnIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInN1YlVMIiwiX2kyIiwiX2FycjIiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm9wZW4iLCJjbG9zZUFsbCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJfbG9vcDIiLCJzdWJNZW51Iiwic3ViTEkiLCJfaTMiLCJfYXJyMyIsImNsb3NlTGlzdGVuZXIiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwibGkiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiX2l0ZXJhdG9yNCIsIl9zdGVwNCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmFibGUiLCJzZWwiLCJxdWVyeVNlbGVjdG9yIiwiZmluZCIsImNsaWNrIiwiY2xvc3VyZSIsIk9wdGlvbnMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJnZXRBUEkiLCJtb2RlIiwib2JqIiwibW9kZU9iaiIsInVybCIsImNvbnRlbnRUeXBlIiwiZXh0cmEiLCJUYWJzIiwicGFyZW50IiwibWluU3BsaXQiLCJtYXhTcGxpdCIsImNoaWxkMSIsImNoaWxkMiIsImhvcml6b250YWxTcGxpdCIsImhvcml6IiwicGVyY2VudGFnZSIsImhvcml6b250YWwiLCJjaGlsZDFEYXRhIiwiY2hpbGQyRGF0YSIsImZsZXhEaXJlY3Rpb24iLCJiYXIiLCJzdGFydERyYWdnaW5nIiwicGFnZVgiLCJwYWdlWSIsIm1vdXNlTW92ZSIsIm1vdXNlVXAiLCJ0b3VjaCIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2hNb3ZlIiwidG91Y2hFbmQiLCJ0b3VjaENhbmNlbCIsInN0YXJ0WCIsInN0YXJ0WSIsIngiLCJ5IiwiZW5kRHJhZ2dpbmciLCJkcmFnZ2luZyIsIm1haW5YIiwid2lkIiwicmlnaHQiLCJwZXIiLCJtYWluWSIsImhpdCIsImJvdHRvbSIsIndoaWNoIiwid2lkdGgiLCJjb2xsZWN0aW9uIiwiUmVhZHkiLCJQQUNLQUdFIiwicmVxdWlyZSIsIm1haW5zIiwic3RhcnQiLCJzdGFydE5vdyIsImdvIiwiRWxlbWVudCIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJhY3Rpb25zIiwiT3V0cHV0VGFiIiwiRWRpdG9yVGFiIiwibWVudWJhcnMiLCJ0YWJzRGl2Iiwidmlld3NEaXYiLCJ0YWJEYXRhIiwibmV3UGFyZW50IiwidmlldyIsInNlbGVjdCIsIl90YWJzIiwidW5zZWxlY3RBbGwiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJUYWIiLCJpbm5lclZpZXciLCJudW1zIiwiZWRpdG9yRGl2IiwiZWRpdG9yIiwiRWRpdG9yIiwicmVzaXplIiwiYXV0b0luZGVudCIsInN0eWxlcyIsInNjcm9sbGFibGUiLCJ0ZXh0YXJlYSIsInRleHQiLCJsaW5lcyIsInAiLCJmb2N1cyIsInByZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRyYWdFbGVtZW50IiwiZHJhZ0l0ZW0iLCJkcm9wVmlld3MiLCJkcmFnZ2FibGUiLCJwYWxldHRlSXRlbSIsImRyb3BwYWJsZSIsImNhbGxiYWNrIiwiY2xvbmUiLCJwYWxldHRlSW1hZ2UiLCJwb3NpdGlvbiIsInpJbmRleCIsImN1cnNvciIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiX2Ryb3BWaWV3cyIsInZpZXdFbGVtZW50Iiwidmlld1giLCJ2aWV3WSIsImZuIiwiYXR0YWNoRXZlbnQiLCJyZWFkeVN0YXRlIiwiaW5zdGFsbCIsImpzb24iLCJ0ZXh0Q29udGVudCIsIm1lc3NhZ2VMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=
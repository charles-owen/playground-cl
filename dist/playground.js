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
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate_name_"];
/******/ 	window["webpackHotUpdate_name_"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "a0c9f134553a2b914a90";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"Playground": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/cl/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./vendor/cl/playground/index.js","common","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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
exports.push([module.i, "div.cl-playground div.toast {\n  position: absolute;\n  bottom: 0;\n  visibility: hidden;\n  transform: translateY(2.3em);\n  z-index: 400;\n  transition: all 0.4s ease-in-out 0s, visibility 0s linear 0.4s, z-index 0s linear 0.01s;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1.1em;\n  left: calc(50% - 30em/2);\n  width: 30em;\n  background-color: #151515;\n  color: white;\n  text-align: center;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding: 0.5em;\n}\n\ndiv.cl-playground div.toast.toast-active {\n  visibility: visible;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.4s;\n  z-index: 400;\n}\n\ndiv.cl-playground {\n  display: none;\n}\n\ndiv.cl-playground nav.cl-pg-menubar {\n  flex: 0 1 auto;\n  position: relative;\n  z-index: 100;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background-color: #f0f3f0;\n  border-bottom: thin solid #808080;\n  font-size: 0.9rem;\n}\n\ndiv.cl-playground nav.cl-pg-menubar li:hover {\n  background: #00796B;\n}\n\ndiv.cl-playground nav.cl-pg-menubar li {\n  user-select: none;\n  cursor: pointer;\n}\n\ndiv.cl-playground nav.cl-pg-menubar li a,\ndiv.cl-playground nav.cl-pg-menubar li a:link,\ndiv.cl-playground nav.cl-pg-menubar li a:visited {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\n\ndiv.cl-playground nav.cl-pg-menubar > ul {\n  list-style-type: none;\n  margin: 0;\n  border: 0;\n  padding: 0;\n}\n\ndiv.cl-playground nav.cl-pg-menubar > ul img.check {\n  vertical-align: baseline;\n  width: 19px;\n  height: 16px;\n  content: url(" + escape(__webpack_require__(/*! ./img/menu-check.png */ "./vendor/cl/playground/img/menu-check.png")) + ");\n}\n\ndiv.cl-playground nav.cl-pg-menubar > ul > li {\n  display: inline-block;\n  margin: 0;\n  border: 0;\n  padding: 0.25em 2em 0.25em 0.5em;\n  position: relative;\n}\n\ndiv.cl-playground nav.cl-pg-menubar > ul > li a,\ndiv.cl-playground nav.cl-pg-menubar > ul > li a:link,\ndiv.cl-playground nav.cl-pg-menubar > ul > li a:visited {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\n\ndiv.cl-playground nav.cl-pg-menubar > ul ul {\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n  list-style-type: none;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: 100%;\n  margin: 1px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n  border-top-width: 0;\n}\n\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\n\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\ndiv.cl-playground nav.cl-pg-menubar > ul ul > li.menu-disabled a {\n  opacity: 0.3;\n}\n\ndiv.cl-playground nav.cl-pg-menubar > ul ul.cl-pg-menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\n\ndiv.cl-playground nav.cl-pg-menubar > ul ul.edit-menu a {\n  width: 6em;\n}\n\ndiv.cl-playground nav.cl-pg-menubar > ul ul.option-menu a {\n  width: 11em;\n}\n\ndiv.cl-playground nav.cl-pg-menubar > ul ul.file-menu a {\n  width: 6em;\n}\n\ndiv.cl-playground nav.cl-pg-menubar > ul ul.help-menu a {\n  width: 7.5em;\n}\n\ndiv.cl-playground nav.cl-pg-menubar > ul .ul-state-active {\n  color: red;\n}\n\ndiv.cl-playground nav.cl-pg-menubar > ul li.menu-divider {\n  height: 1px;\n  border: 0 solid black;\n  border-top-width: 1px;\n}\n\ndiv.cl-playground div.work {\n  flex: 1 1 auto;\n  position: relative;\n  width: 100%;\n  background: black;\n}\n\ndiv.cl-playground div.cl-pg-overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #a00;\n  opacity: 0.05;\n  z-index: 2000;\n  display: none;\n}\n\ndiv.cl-playground div.cl-pg-main {\n  line-height: normal;\n  font-size: 1rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\ndiv.cl-playground-full {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: white;\n}\n\ndiv.cl-playground-window {\n  position: relative;\n  width: 100%;\n  height: 600px;\n  margin: 0;\n  padding: 0;\n  border: thin solid #aaaaaa;\n  border-bottom: none;\n  background: white;\n  min-height: 100px;\n  min-width: 400px;\n}\n\ndiv.cl-playground-gap-before,\ndiv.cl-playground-gap-after {\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 1px;\n}\n\ndiv.cl-playground-gap-after {\n  height: 1em;\n}\n\ndiv.cl-playground div.cl-pg-tabs {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  font-size: 0.8rem;\n  padding: 0;\n  background: #ddd;\n  border: 0;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul {\n  margin: 0;\n  padding: 3px 0 0 2px;\n  background: transparent;\n  border: 0;\n  list-style: none;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li {\n  position: relative;\n  display: inline-block;\n  font-size: 0.8rem;\n  padding: 0.25em 0.25em 0.45em 0;\n  min-width: 6em;\n  text-align: center;\n  cursor: pointer;\n  background: #ccc;\n  border: 1px solid black;\n  border-bottom: none;\n  border-radius: 5px 5px 0 0;\n  margin: 1px 3px -1px 0;\n  white-space: nowrap;\n  z-index: 18;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li a:first-child {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  display: inline-block;\n  padding: 0 0.25em;\n  text-decoration: none;\n  color: black;\n  outline: 0;\n  user-select: none;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) {\n  float: right;\n  display: inline-block;\n  margin-top: -2px;\n  padding: 0;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) img {\n  width: 12px;\n  height: auto;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li.selected {\n  background: white;\n  z-index: 22;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li.selected a {\n  color: black;\n}\n\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-views {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n}\n\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-view {\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 20;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-view.selected {\n  display: block;\n  border-top: 1px solid black;\n}\n\ndiv.cl-playground div.cl-tab-menu {\n  position: absolute;\n  left: calc(100% - 17px);\n  top: 0;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n}\n\ndiv.cl-playground div.cl-tab-menu div {\n  position: absolute;\n  width: 14px;\n  height: 27px;\n  top: 4px;\n  left: 0;\n  border: 1px solid #808080;\n  border-bottom-width: 0;\n  background-color: #f0f3f0;\n}\n\ndiv.cl-playground div.cl-tab-menu div img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 12px;\n  height: auto;\n}\n\ndiv.cl-playground div.cl-tab-menu ul {\n  list-style-type: none;\n  overflow: hidden;\n  margin: 30px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n}\n\ndiv.cl-playground div.cl-tab-menu ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\n\ndiv.cl-playground div.cl-tab-menu ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\ndiv.cl-playground div.cl-tab-menu ul > li.menu-disabled a {\n  opacity: 0.3;\n}\n\ndiv.cl-playground div.cl-tab-menu.cl-menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\n\ndiv.cl-playground div.cl-playground-root,\ndiv.cl-playground div.cl-playground-left,\ndiv.cl-playground div.cl-playground-right,\ndiv.cl-playground div.cl-playground-top,\ndiv.cl-playground div.cl-playground-bottom {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  background: white;\n}\n\ndiv.cl-playground div.cl-playground-left {\n  position: relative;\n  flex: 0 1 auto;\n  border-right: 1px solid #888;\n}\n\ndiv.cl-playground div.cl-playground-left div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  top: 0;\n  height: 100%;\n  right: -5px;\n  width: 10px;\n  background: transparent;\n  z-index: 100;\n  cursor: ew-resize;\n}\n\ndiv.cl-playground div.cl-playground-top {\n  flex: 0 1 auto;\n  width: 100%;\n  border-bottom: 1px solid #888;\n}\n\ndiv.cl-playground div.cl-playground-top div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  bottom: -5px;\n  height: 10px;\n  width: 100%;\n  background: transparent;\n  z-index: 2;\n  cursor: ns-resize;\n}\n\ndiv.cl-playground div.cl-playground-bottom {\n  width: 100%;\n  height: auto;\n}\n\ndiv.cl-playground div.cl-playground-root {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\ndiv.cl-pg-nums {\n  display: inline-block;\n  flex: 0 0 auto;\n  background: #eee;\n  width: 2em;\n  padding: 4px 0;\n  overflow: hidden;\n  margin: 0;\n}\n\ndiv.cl-pg-nums p {\n  font-size: 0.8em;\n  line-height: 16px;\n  margin: 0;\n  padding: 0 3px 0 0;\n  border: 0;\n  text-align: right;\n  color: #777;\n}\n\ndiv.cl-pg-about {\n  width: auto !important;\n}\n\ndiv.cl-pg-about figure {\n  margin: 0;\n  width: 400px;\n  height: 225px;\n  background: black;\n}\n\ndiv.cl-pg-about div.cl-pg-about-div {\n  padding: 1em;\n}\n\ndiv.cl-pg-about div.cl-pg-about-div h1 {\n  font-size: 1.5em;\n  text-align: center;\n}\n\ndiv.cl-pg-about div.cl-pg-about-div p {\n  text-align: center;\n}\n\ndiv.cl-playground div.cl-pg-view.editor {\n  overflow: hidden;\n}\n\ndiv.cl-playground div.cl-pg-view.editor > div {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\n\ndiv.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor {\n  margin: 0;\n  display: block;\n  flex: 1 1 auto;\n  height: 100%;\n}\n\ndiv.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor textarea {\n  line-height: 16px;\n  margin: 0;\n  padding: 4px 0 0 3px;\n  border: 0;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  font-size: 1em;\n  font-family: monospace, monospace;\n  white-space: pre;\n  overflow-wrap: normal;\n}\n\ndiv.cl-playground div.cl-pg-view.output {\n  overflow: hidden;\n}\n\ndiv.cl-playground div.cl-pg-view.output > div {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\n\ndiv.cl-playground div.cl-pg-view.output > div pre {\n  display: block;\n  flex: 1 1 auto;\n  background: url(" + escape(__webpack_require__(/*! ./img/bars.png */ "./vendor/cl/playground/img/bars.png")) + ");\n  line-height: 16px;\n  margin: 0;\n  padding: 4px 0 0 3px;\n  border: 0;\n  overflow: auto;\n  height: 100%;\n}\n\n", ""]);

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

/***/ "./vendor/cl/playground/js/Playground/Actions/AboutAction.js":
/*!*******************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Actions/AboutAction.js ***!
  \*******************************************************************/
/*! exports provided: AboutAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutAction", function() { return AboutAction; });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ "./vendor/cl/playground/js/Playground/Actions/Action.js");
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../package.json */ "./vendor/cl/playground/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../package.json */ "./vendor/cl/playground/package.json", 1);



var AboutAction = function AboutAction(site, options) {
  _Action__WEBPACK_IMPORTED_MODULE_0__["Action"].call(this, site, options);

  this.do = function (main) {
    _Action__WEBPACK_IMPORTED_MODULE_0__["Action"].prototype.do.call(this, main); // Dialog box contents

    var content = "\n<figure><img src=\"".concat(site.root, "/vendor/cl/playground/img/playground.jpg\" alt=\"Cirsim Logo\" width=\"400\" height=\"225\"></figure>\n<div class=\"cl-pg-about-div\">\n<h1>CourseLib Playground</h1>\n<p>Version: ").concat(_package_json__WEBPACK_IMPORTED_MODULE_2__.version, "</p>\n<p>Written by: Charles B. Owen</p></div>");
    var dialog = new dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"]({
      title: 'About the Playground',
      content: content,
      'addClass': 'cl-pg-about'
    });
  };
};
AboutAction.prototype = Object.create(_Action__WEBPACK_IMPORTED_MODULE_0__["Action"].prototype);
AboutAction.prototype.constructor = AboutAction;
AboutAction.tag = 'about';

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

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = options.sources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var source = _step.value;
        var tab = this.main.getTab(source);

        if (tab !== null) {
          sources[source] = tab.get();
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

    return sources;
  };
};

Action.prototype.do = function (main) {
  this.main = main;
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Actions/AllActions.js":
/*!******************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Actions/AllActions.js ***!
  \******************************************************************/
/*! exports provided: AllActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllActions", function() { return AllActions; });
/* harmony import */ var _SaveAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaveAction */ "./vendor/cl/playground/js/Playground/Actions/SaveAction.js");
/* harmony import */ var _AboutAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutAction */ "./vendor/cl/playground/js/Playground/Actions/AboutAction.js");


var AllActions = function AllActions() {};

AllActions.addAll = function (Playground) {
  Playground.addAction(_SaveAction__WEBPACK_IMPORTED_MODULE_0__["SaveAction"]);
  Playground.addAction(_AboutAction__WEBPACK_IMPORTED_MODULE_1__["AboutAction"]);
};

/***/ }),

/***/ "./vendor/cl/playground/js/Playground/Actions/SaveAction.js":
/*!******************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Actions/SaveAction.js ***!
  \******************************************************************/
/*! exports provided: SaveAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveAction", function() { return SaveAction; });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ "./vendor/cl/playground/js/Playground/Actions/Action.js");

var SaveAction = function SaveAction(site, options) {
  _Action__WEBPACK_IMPORTED_MODULE_0__["Action"].call(this, site, options);

  this.do = function (main) {
    var _this = this;

    _Action__WEBPACK_IMPORTED_MODULE_0__["Action"].prototype.do.call(this, main); // Get the requisite tab contents

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
    }).catch(function (error) {
      site.toast(_this, error);
    });
  };
};
SaveAction.prototype = Object.create(_Action__WEBPACK_IMPORTED_MODULE_0__["Action"].prototype);
SaveAction.prototype.constructor = SaveAction;
SaveAction.tag = 'save';

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
    _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].addClass(_this.nav, 'cl-pg-menubar');
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
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

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
            var _arr = [a, topLI];

            for (var _i = 0; _i < _arr.length; _i++) {
              var element = _arr[_i];
              element.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
                action.do(main);
              });
            }
          })();
        }

        if (menu.menus !== undefined) {
          (function () {
            // Pull-down menu
            var subUL = document.createElement('ul');
            topLI.appendChild(subUL);
            var _arr2 = [a, topLI];

            for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
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

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = menu.menus[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
                      var _arr3 = [_a, topLI];

                      for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
                        var _element = _arr3[_i3];

                        _element.addEventListener('click', function (event) {
                          event.preventDefault();
                          event.stopPropagation();

                          _this.closeAll();

                          action.do(main);
                        });
                      }
                    }
                  })();
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
          })();
        }
      };

      for (var _iterator = menus[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

          if (_ul !== null) {// Tools.removeClass(ul, 'cl-pg-menu-open');
          }
        }
      } // And open this menu

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
      ul.classList.add('cl-pg-menu-open');
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
            _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].removeClass(ul, 'cl-pg-menu-open');
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

_Actions_AllActions__WEBPACK_IMPORTED_MODULE_4__["AllActions"].addAll(Playground);

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

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9fcGxheWdyb3VuZC5zY3NzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL19wbGF5Z3JvdW5kLnNjc3M/NDZlMSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbWcvYmFycy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvaW1nL21lbnUtY2hlY2sucG5nIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2ltZy9tZW51YmFycy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9BY3Rpb25zL0Fib3V0QWN0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvQWN0aW9ucy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9BY3Rpb25zL0FsbEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9BY3Rpb25zL1NhdmVBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9ET00vVG9vbHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9HcmFwaGljcy9Ub2FzdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL01haW4uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9NZW51LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1BhbmUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9QbGF5Z3JvdW5kLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVGFicy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1RhYnMvRWRpdG9yVGFiLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVGFicy9PdXRwdXRUYWIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9UYWJzL1RhYi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1VJL0RyYWdBbmREcm9wLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVXRpbGl0eS9SZWFkeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kRmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJQbGF5Z3JvdW5kRmFjdG9yeSIsImNyZWF0ZSIsIlNpdGUiLCJzaXRlIiwiUGxheWdyb3VuZCIsIkFib3V0QWN0aW9uIiwib3B0aW9ucyIsIkFjdGlvbiIsImNhbGwiLCJkbyIsIm1haW4iLCJwcm90b3R5cGUiLCJjb250ZW50Iiwicm9vdCIsInBhY2thZ2Vqc29uIiwidmVyc2lvbiIsImRpYWxvZyIsIkRpYWxvZyIsInRpdGxlIiwiT2JqZWN0IiwiY29uc3RydWN0b3IiLCJ0YWciLCJnZXRTb3VyY2VzIiwic291cmNlcyIsInVuZGVmaW5lZCIsInNvdXJjZSIsInRhYiIsImdldFRhYiIsImdldCIsIkFsbEFjdGlvbnMiLCJhZGRBbGwiLCJhZGRBY3Rpb24iLCJTYXZlQWN0aW9uIiwicGFyYW1zIiwiYXBwVGFnIiwibmFtZSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsImFwaSIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiaGFzRXJyb3IiLCJ0b2FzdCIsImNhdGNoIiwiZXJyb3IiLCJUb29scyIsImlzVmlzaWJsZSIsImVsZW0iLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImdldENsaWVudFJlY3RzIiwibGVuZ3RoIiwiYWRkQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkQ2xhc3NlcyIsImNsYXNzZXMiLCJzcGxpdCIsImZvckVhY2giLCJjbHMiLCJyZW1vdmVDbGFzcyIsInJlZ0V4IiwiUmVnRXhwIiwicmVwbGFjZSIsImNyZWF0ZUNsYXNzZWREaXYiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhZGRDb250ZW50IiwiaXNTdHJpbmciLCJpbm5lckhUTUwiLCJpc0VsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInZhbCIsInRvU3RyaW5nIiwibm9kZVZhbHVlIiwib2Zmc2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJzY3JvbGxMZWZ0Iiwid2luZG93IiwicGFnZVhPZmZzZXQiLCJ0b3AiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImNoaWxkIiwidGFnTmFtZSIsImNoaWxkTm9kZXMiLCJub2RlIiwiVG9hc3QiLCJkZWZhdWx0RHVyYXRpb24iLCJpbnRlclRvYXN0RGVsYXkiLCJtZXNzYWdlcyIsImFjdGl2ZSIsInNob3ciLCJtZXNzYWdlIiwic3BsaWNlIiwibXNnIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRpbWUiLCJwdXNoIiwianNvbkVycm9ycyIsImpzb25BcGkiLCJlcnJvcnMiLCJNYWluIiwicGxheWdyb3VuZCIsIm1lbnUiLCJ0YWJzIiwiZGl2T3ZlcmxheSIsImRpdldvcmsiLCJpbml0aWFsaXplIiwic3R5bGUiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiY29udGFpbnMiLCJSZXNpemVyIiwiaGFuZGxlIiwiZHJhZ0FuZERyb3AiLCJEcmFnQW5kRHJvcCIsIk1lbnUiLCJyb290UGFuZSIsIlBhbmUiLCJsb2FkIiwicGFuZSIsIlN0cmluZyIsInBhcnNlIiwic2V0IiwibmV3VGFiIiwibW9kYWwiLCJuYXYiLCJ1bCIsIm1lbnVzIiwiYWN0aW9uIiwidG9wTEkiLCJhIiwiaW5uZXJUZXh0IiwiZ2V0QWN0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdWJVTCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwib3BlbiIsImNsb3NlQWxsIiwic3ViTWVudSIsInN1YkxJIiwiY2xvc2VMaXN0ZW5lciIsInRhcmdldCIsInBhcmVudE5vZGUiLCJsaSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmFibGUiLCJzZWwiLCJxdWVyeVNlbGVjdG9yIiwiZmluZCIsImNsaWNrIiwiY2xvc3VyZSIsIk9wdGlvbnMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJnZXRBUEkiLCJtb2RlIiwib2JqIiwibW9kZU9iaiIsInVybCIsImNvbnRlbnRUeXBlIiwiZXh0cmEiLCJwYXJlbnQiLCJtaW5TcGxpdCIsIm1heFNwbGl0IiwiY2hpbGQxIiwiY2hpbGQyIiwiaG9yaXpvbnRhbFNwbGl0IiwiaG9yaXoiLCJwZXJjZW50YWdlIiwiVGFicyIsImhvcml6b250YWwiLCJjaGlsZDFEYXRhIiwiY2hpbGQyRGF0YSIsImZsZXhEaXJlY3Rpb24iLCJiYXIiLCJzdGFydERyYWdnaW5nIiwicGFnZVgiLCJwYWdlWSIsIm1vdXNlTW92ZSIsIm1vdXNlVXAiLCJ0b3VjaCIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2hNb3ZlIiwidG91Y2hFbmQiLCJ0b3VjaENhbmNlbCIsInN0YXJ0WCIsInN0YXJ0WSIsIngiLCJ5IiwiZW5kRHJhZ2dpbmciLCJkcmFnZ2luZyIsIm1haW5YIiwid2lkIiwicmlnaHQiLCJwZXIiLCJtYWluWSIsImhpdCIsImJvdHRvbSIsIndoaWNoIiwid2lkdGgiLCJjb2xsZWN0aW9uIiwiUEFDS0FHRSIsInJlcXVpcmUiLCJtYWlucyIsInN0YXJ0Iiwic3RhcnROb3ciLCJSZWFkeSIsImdvIiwiRWxlbWVudCIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJhY3Rpb25zIiwidGFic0RpdiIsInZpZXdzRGl2IiwidGFiRGF0YSIsIm5ld1BhcmVudCIsIkVkaXRvclRhYiIsIk91dHB1dFRhYiIsInZpZXciLCJzZWxlY3QiLCJ1bnNlbGVjdEFsbCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIlRhYiIsImlubmVyVmlldyIsIm51bXMiLCJlZGl0b3JEaXYiLCJlZGl0b3IiLCJFZGl0b3IiLCJyZXNpemUiLCJhdXRvSW5kZW50Iiwic3R5bGVzIiwic2Nyb2xsYWJsZSIsInRleHRhcmVhIiwidGV4dCIsInZhbHVlIiwibGluZXMiLCJwIiwiZm9jdXMiLCJwcmUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJkcmFnRWxlbWVudCIsImRyYWdJdGVtIiwiZHJvcFZpZXdzIiwiZHJhZ2dhYmxlIiwicGFsZXR0ZUl0ZW0iLCJkcm9wcGFibGUiLCJjYWxsYmFjayIsImNsb25lIiwicGFsZXR0ZUltYWdlIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjdXJzb3IiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInZpZXdFbGVtZW50Iiwidmlld1giLCJ2aWV3WSIsImZuIiwiYXR0YWNoRXZlbnQiLCJyZWFkeVN0YXRlIiwiaW5zdGFsbCIsImpzb24iLCJ0ZXh0Q29udGVudCIsIm1lc3NhZ2VMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQTZCO0FBQzdCLHFDQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNkJBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUFrQiw4QkFBOEI7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLEtBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZSw0QkFBNEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBZSw0QkFBNEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LENBQUNnTyxXQUFuQixDQUFiO0FBQ0FoTyxhQUFPLENBQUNtQixTQUFSLEdBQW9CLEVBQXBCO0FBQ0EsVUFBTXFDLFVBQVUsR0FBRyxJQUFJOUcsaUVBQUosQ0FBZUQsSUFBZixFQUFxQnVELE9BQXJCLEVBQThCK04sSUFBOUIsQ0FBbkI7QUFDQXZLLGdCQUFVLENBQUM2RyxRQUFYO0FBQ0E7QUFDRDs7QUFFRDVOLE1BQUksQ0FBQzJOLEtBQUwsQ0FBWSxZQUFNO0FBQ2pCMEQsV0FBTztBQUNQLEdBRkQ7QUFLQXJSLE1BQUksQ0FBQ3dSLGVBQUwsQ0FBcUIsVUFBQ2xMLEdBQUQsRUFBTXJFLElBQU4sRUFBZTtBQUNuQyxZQUFPcUUsR0FBUDtBQUNDLFdBQUsseUJBQUw7QUFDQytLLGVBQU87QUFDUDs7QUFFRCxXQUFLLDRCQUFMO0FBQ0NBLGVBQU87QUFDUDtBQVBGO0FBVUEsR0FYRDtBQWFBclIsTUFBSSxDQUFDQyxVQUFMLEdBQWtCQSxpRUFBbEI7QUFDQSxDQWhDRCxDIiwiZmlsZSI6InBsYXlncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJQbGF5Z3JvdW5kXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlBsYXlncm91bmRcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cbiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZV9uYW1lX1wiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHRpZiAobnVsbCkgc2NyaXB0LmNyb3NzT3JpZ2luID0gbnVsbDtcbiBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcImEwYzlmMTM0NTUzYTJiOTE0YTkwXCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbiBcdFx0fTtcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuIFx0XHRyZXR1cm4gaG90O1xuIFx0fVxuXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcblxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuIFx0fVxuXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdERlZmVycmVkO1xuXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0Zm9yKHZhciBjaHVua0lkIGluIGluc3RhbGxlZENodW5rcylcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHQpXG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdCBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIlBsYXlncm91bmRcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY2wvZGlzdC9cIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbmRleC5qc1wiLFwiY29tbW9uXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuY2wtcGxheWdyb3VuZCBkaXYudG9hc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIuM2VtKTtcXG4gIHotaW5kZXg6IDQwMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjRzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMzBlbS8yKTtcXG4gIHdpZHRoOiAzMGVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYudG9hc3QudG9hc3QtYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjRzO1xcbiAgei1pbmRleDogNDAwO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjODA4MDgwO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMwMDc5NkI7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSBhLFxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIGE6bGluayxcXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSBhOnZpc2l0ZWQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIGltZy5jaGVjayB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB3aWR0aDogMTlweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGNvbnRlbnQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9pbWcvbWVudS1jaGVjay5wbmdcIikpICsgXCIpO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMC4yNWVtIDJlbSAwLjI1ZW0gMC41ZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhLFxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSBhOmxpbmssXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIGE6dmlzaXRlZCB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAxMDAlO1xcbiAgbWFyZ2luOiAxcHggMCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxuICBib3JkZXItdG9wLXdpZHRoOiAwO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsID4gbGkgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOGVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwgPiBsaS5tZW51LWRpc2FibGVkIGEge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmNsLXBnLW1lbnUtb3BlbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuZWRpdC1tZW51IGEge1xcbiAgd2lkdGg6IDZlbTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5vcHRpb24tbWVudSBhIHtcXG4gIHdpZHRoOiAxMWVtO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLmZpbGUtbWVudSBhIHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuaGVscC1tZW51IGEge1xcbiAgd2lkdGg6IDcuNWVtO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIC51bC1zdGF0ZS1hY3RpdmUge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCBsaS5tZW51LWRpdmlkZXIge1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IDAgc29saWQgYmxhY2s7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi53b3JrIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogI2EwMDtcXG4gIG9wYWNpdHk6IDAuMDU7XFxuICB6LWluZGV4OiAyMDAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLW1haW4ge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZnVsbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtd2luZG93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IHRoaW4gc29saWQgI2FhYWFhYTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWJlZm9yZSxcXG5kaXYuY2wtcGxheWdyb3VuZC1nYXAtYWZ0ZXIge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcXG4gIGhlaWdodDogMWVtO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDNweCAwIDAgMnB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiAwLjI1ZW0gMC4yNWVtIDAuNDVlbSAwO1xcbiAgbWluLXdpZHRoOiA2ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICBtYXJnaW46IDFweCAzcHggLTFweCAwO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHotaW5kZXg6IDE4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkgYTpmaXJzdC1jaGlsZCB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgb3V0bGluZTogMDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkgYTpudGgtY2hpbGQoMikge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXRvcDogLTJweDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOm50aC1jaGlsZCgyKSBpbWcge1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDIyO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkuc2VsZWN0ZWQgYSB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIGRpdi5jbC1wZy12aWV3cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAyOXB4O1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyBkaXYuY2wtcGctdmlldy5zZWxlY3RlZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDE3cHgpO1xcbiAgdG9wOiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMnMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAyN3B4O1xcbiAgdG9wOiA0cHg7XFxuICBsZWZ0OiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgZGl2IGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAzMHB4IDAgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwgPiBsaSB7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpIGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDhlbTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwgPiBsaS5tZW51LWRpc2FibGVkIGEge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUuY2wtbWVudS1vcGVuIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4ycztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtcm9vdCxcXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0LFxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJpZ2h0LFxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCxcXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1ib3R0b20ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzg4ODtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtbGVmdCBkaXYuY2wtYmFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICByaWdodDogLTVweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB6LWluZGV4OiAxMDA7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtdG9wIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtdG9wIGRpdi5jbC1iYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvdHRvbTogLTVweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB6LWluZGV4OiAyO1xcbiAgY3Vyc29yOiBucy1yZXNpemU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtcm9vdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbmRpdi5jbC1wZy1udW1zIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIHdpZHRoOiAyZW07XFxuICBwYWRkaW5nOiA0cHggMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmRpdi5jbC1wZy1udW1zIHAge1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMCAzcHggMCAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogIzc3NztcXG59XFxuXFxuZGl2LmNsLXBnLWFib3V0IHtcXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcblxcbmRpdi5jbC1wZy1hYm91dCBmaWd1cmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAyMjVweDtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG5kaXYuY2wtcGctYWJvdXQgZGl2LmNsLXBnLWFib3V0LWRpdiB7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbmRpdi5jbC1wZy1hYm91dCBkaXYuY2wtcGctYWJvdXQtZGl2IGgxIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi5jbC1wZy1hYm91dCBkaXYuY2wtcGctYWJvdXQtZGl2IHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3Ige1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yID4gZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYgZGl2LmNsLXBnLWVkaXRvciB7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYgZGl2LmNsLXBnLWVkaXRvciB0ZXh0YXJlYSB7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDRweCAwIDAgM3B4O1xcbiAgYm9yZGVyOiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxuICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3Lm91dHB1dCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQgPiBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3Lm91dHB1dCA+IGRpdiBwcmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9pbWcvYmFycy5wbmdcIikpICsgXCIpO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA0cHggMCAwIDNweDtcXG4gIGJvcmRlcjogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9fcGxheWdyb3VuZC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjEzOTE1M2Q2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL19wbGF5Z3JvdW5kLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9fcGxheWdyb3VuZC5zY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBNEFBQUFnQWdNQUFBQmZnS0VFQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBQU1VRXhVUmYvLy8rTC85K0gvOStYLytPaDRIVE1BQUFBZVNVUkJWQWpYWTJBZ0V2ei8vLzhEdzZwVnF4WXdoSWFHQmxCT0VBa0FVMk1ZM3REZjlhVUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCTUFBQUFPQ0FZQUFBRE5HQ2VKQUFBQlMybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTlM0MkxXTXhORElnTnprdU1UWXdPVEkwTENBeU1ERTNMekEzTHpFekxUQXhPakEyT2pNNUlDQWdJQ0FnSUNBaVBnb2dQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRLSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlpOCtDaUE4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnbzhQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtuaHhnN3dBQUFWZEpSRUZVT0kyVjBiRnJVMUVVQitEdlJXTnNJSk5RdTZ0MUU4eWt1RGdLQlFsSUZ3ZEhrUTcrQXdVN3VybDBGTVE1Y1hGd3NvTWd1SWhTcW9QdEpBNTFFSEdvaGVkUWZnNTVTVjlqYWVLRnc3MXdEdDg5aHlPSmVzeDYwdTgzc3JSMExsd0t2ZEFySm9HaUtLWkRxNnZ6Qm9PdW5aMXJ1SWdmR1B3WGxtNzNsSU9EVzdhM2w1WGxJbjdoTmZyWU5jdVkyZHVUWG04dVBBZ2ZRai9jRDR1aEdRUlRzZXp2eThwS0p6d01YOEt6Y0NHY0hpR0hHSFBoU2xnSVJack5WalkzaDFCWnl0cGFwK3JvVTNnYTV2OUJ4ajhQa1JkaE43d0xkOExsdE52dHJLOTN3dDN3TVF6QytXT1JHaVlVNFhyWUNsOHI5RjY0SFRiQyszQ3pxanNlcW1Hak9CT2VoTy9oVzNoWjRZOUQ2MFJvdklDallDTThDajhyOUhPNE9oVWFZNk00QkZ2aFRmZ2Qzb2F6NDl6RTl1dlJtSkJIcnovWVFJbm4xVjNQejlEWjBRNjc0VlcxN2FsZEpUbWhZRGphalZtaEpQNEN5MVpVNitkQ2czQUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQkFNQUFBRHQzZUpTQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBRWxCTVZFVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRGdLeG1pQUFBQUJYUlNUbE1Bdi9JQkRWYVFzajhBQUFBQllrdEhSQUNJQlIxSUFBQUFDWEJJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFBSEVsRVFWUUkxMk5nd0EwWWxjQkFBTUZnZGdFREF3U0RQRFc0QVFCMlhBeGI4RW5WcVFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIlxyXG5pbXBvcnQgJy4vX3BsYXlncm91bmQuc2Nzcyc7XHJcbmltcG9ydCB7UGxheWdyb3VuZH0gZnJvbSAnLi9qcy9QbGF5Z3JvdW5kL1BsYXlncm91bmQnO1xyXG5pbXBvcnQge1BsYXlncm91bmRGYWN0b3J5fSBmcm9tICcuL2pzL1BsYXlncm91bmRGYWN0b3J5JztcclxuXHJcbmV4cG9ydCB7UGxheWdyb3VuZH07XHJcbmV4cG9ydCB7UGxheWdyb3VuZCBhcyBkZWZhdWx0fTtcclxuXHJcblBsYXlncm91bmRGYWN0b3J5LmNyZWF0ZShTaXRlLnNpdGUpO1xyXG5cclxuU2l0ZS5QbGF5Z3JvdW5kID0gUGxheWdyb3VuZDtcclxuXHJcbiIsImltcG9ydCB7QWN0aW9ufSBmcm9tICcuL0FjdGlvbic7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnZGlhbG9nLWNsJztcclxuaW1wb3J0IHBhY2thZ2Vqc29uIGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXRBY3Rpb24gPSBmdW5jdGlvbihzaXRlLCBvcHRpb25zKSB7XHJcblx0QWN0aW9uLmNhbGwodGhpcywgc2l0ZSwgb3B0aW9ucyk7XHJcblxyXG5cdHRoaXMuZG8gPSBmdW5jdGlvbihtYWluKSB7XHJcblx0XHRBY3Rpb24ucHJvdG90eXBlLmRvLmNhbGwodGhpcywgbWFpbik7XHJcblxyXG5cdFx0Ly8gRGlhbG9nIGJveCBjb250ZW50c1xyXG5cdFx0bGV0IGNvbnRlbnQgPSBgXHJcbjxmaWd1cmU+PGltZyBzcmM9XCIke3NpdGUucm9vdH0vdmVuZG9yL2NsL3BsYXlncm91bmQvaW1nL3BsYXlncm91bmQuanBnXCIgYWx0PVwiQ2lyc2ltIExvZ29cIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjIyNVwiPjwvZmlndXJlPlxyXG48ZGl2IGNsYXNzPVwiY2wtcGctYWJvdXQtZGl2XCI+XHJcbjxoMT5Db3Vyc2VMaWIgUGxheWdyb3VuZDwvaDE+XHJcbjxwPlZlcnNpb246ICR7cGFja2FnZWpzb24udmVyc2lvbn08L3A+XHJcbjxwPldyaXR0ZW4gYnk6IENoYXJsZXMgQi4gT3dlbjwvcD48L2Rpdj5gO1xyXG5cclxuXHRcdGNvbnN0IGRpYWxvZyA9IG5ldyBEaWFsb2coe1xyXG5cdFx0XHR0aXRsZTogJ0Fib3V0IHRoZSBQbGF5Z3JvdW5kJyxcclxuXHRcdFx0Y29udGVudDogY29udGVudCxcclxuXHRcdFx0J2FkZENsYXNzJzogJ2NsLXBnLWFib3V0J1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxufVxyXG5cclxuQWJvdXRBY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBY3Rpb24ucHJvdG90eXBlKTtcclxuQWJvdXRBY3Rpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWJvdXRBY3Rpb247XHJcblxyXG5BYm91dEFjdGlvbi50YWcgPSAnYWJvdXQnOyIsIi8qKlxyXG4gKiBCYXNlIG9iamVjdCBmb3IgYW4gYWN0aW9uLlxyXG4gKiBAcGFyYW0gc2l0ZSBTaXRlIG9iamVjdFxyXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHBhc3NlZCB0byB0aGlzIGFjdGlvblxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBBY3Rpb24gPSBmdW5jdGlvbihzaXRlLCBvcHRpb25zKSB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBhbGwgc291cmNlcyBmb3IgdGhpcyBhY3Rpb24uXHJcblx0ICpcclxuXHQgKiBCYXNlZCBvbiB0aGUgb3B0aW9uICdzb3VyY2VzJywgd2hpY2ggYXJlIHRhYiB0YWdzLlxyXG5cdCAqIEByZXR1cm4gb2JqZWN0IHdpdGggdGFiIG5hbWVzIGFuZCBzb3VyY2VzLlxyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0U291cmNlcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gR2V0IHRoZSByZXF1aXNpdGUgdGFiIGNvbnRlbnRzXHJcblx0XHRjb25zdCBzb3VyY2VzID0ge307XHJcblxyXG5cdFx0aWYob3B0aW9ucy5zb3VyY2VzID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5zb3VyY2VzID09PSBudWxsKSB7XHJcblx0XHRcdHJldHVybiBzb3VyY2VzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihjb25zdCBzb3VyY2Ugb2Ygb3B0aW9ucy5zb3VyY2VzKSB7XHJcblx0XHRcdGNvbnN0IHRhYiA9IHRoaXMubWFpbi5nZXRUYWIoc291cmNlKTtcclxuXHRcdFx0aWYodGFiICE9PSBudWxsKSB7XHJcblx0XHRcdFx0c291cmNlc1tzb3VyY2VdID0gdGFiLmdldCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHNvdXJjZXM7XHJcblx0fVxyXG5cclxuXHJcbn1cclxuXHJcbkFjdGlvbi5wcm90b3R5cGUuZG8gPSBmdW5jdGlvbihtYWluKSB7XHJcblx0dGhpcy5tYWluID0gbWFpbjtcclxufSIsImltcG9ydCB7U2F2ZUFjdGlvbn0gZnJvbSAnLi9TYXZlQWN0aW9uJztcclxuaW1wb3J0IHtBYm91dEFjdGlvbn0gZnJvbSAnLi9BYm91dEFjdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgQWxsQWN0aW9ucyA9IGZ1bmN0aW9uKCkge31cclxuXHJcbkFsbEFjdGlvbnMuYWRkQWxsID0gZnVuY3Rpb24oUGxheWdyb3VuZCkge1xyXG5cdFBsYXlncm91bmQuYWRkQWN0aW9uKFNhdmVBY3Rpb24pO1xyXG5cdFBsYXlncm91bmQuYWRkQWN0aW9uKEFib3V0QWN0aW9uKTtcclxufSIsImltcG9ydCB7QWN0aW9ufSBmcm9tICcuL0FjdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgU2F2ZUFjdGlvbiA9IGZ1bmN0aW9uKHNpdGUsIG9wdGlvbnMpIHtcclxuXHRBY3Rpb24uY2FsbCh0aGlzLCBzaXRlLCBvcHRpb25zKTtcclxuXHJcblx0dGhpcy5kbyA9IGZ1bmN0aW9uKG1haW4pIHtcclxuXHRcdEFjdGlvbi5wcm90b3R5cGUuZG8uY2FsbCh0aGlzLCBtYWluKTtcclxuXHJcblx0XHQvLyBHZXQgdGhlIHJlcXVpc2l0ZSB0YWIgY29udGVudHNcclxuXHRcdGNvbnN0IHNvdXJjZXMgPSB0aGlzLmdldFNvdXJjZXMoKTtcclxuXHJcblx0XHRjb25zdCBwYXJhbXMgPSB7XHJcblx0XHRcdGFwcFRhZzogb3B0aW9ucy5hcHBUYWcsXHJcblx0XHRcdG5hbWU6IG9wdGlvbnMubmFtZSxcclxuXHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkoc291cmNlcyksXHJcblx0XHRcdHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRzaXRlLmFwaS5wb3N0KCcvYXBpL2ZpbGVzeXN0ZW0vc2F2ZScsIHBhcmFtcylcclxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cdFx0XHRcdGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0XHRcdFx0c2l0ZS50b2FzdCh0aGlzLCAnU3VjY2Vzc2Z1bGx5IHNhdmVkIHRvIHNlcnZlcicpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0c2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuU2F2ZUFjdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFjdGlvbi5wcm90b3R5cGUpO1xyXG5TYXZlQWN0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNhdmVBY3Rpb247XHJcblxyXG5TYXZlQWN0aW9uLnRhZyA9ICdzYXZlJzsiLCJcclxuXHJcbi8qKlxyXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbnMgZm9yIHRoZSBET00uXHJcbiAqIFRvb2xzIHRoYXQgYXZvaWQgaGF2aW5nIHRvIGhhdmUgalF1ZXJ5IGluc3RhbGxlZC5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVG9vbHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJcyBhbiBlbGVtZW50IHZpc2libGU/XHJcbiAqIEJvcnJvd2VkIGZyb20galF1ZXJ5IVxyXG4gKiBAcGFyYW0gZWxlbVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcblRvb2xzLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xyXG4gICAgcmV0dXJuICEhKCBlbGVtLm9mZnNldFdpZHRoIHx8IGVsZW0ub2Zmc2V0SGVpZ2h0IHx8IGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGQgYSBjbGFzcyB0byBhbiBlbGVtZW50XHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gYWRkIHRvXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgQ2xhc3MgdG8gYWRkXHJcbiAqL1xyXG5Ub29scy5hZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcclxufVxyXG5cclxuVG9vbHMuYWRkQ2xhc3NlcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzZXMpIHtcclxuICAgIGlmKGNsYXNzZXMgPT09IHVuZGVmaW5lZCB8fCBjbGFzc2VzID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKChjbHMpID0+IHtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhlbGVtZW50LCBjbHMpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblRvb2xzLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgcmVnRXggPSBuZXcgUmVnRXhwKCdcXFxcYicgKyBjbGFzc05hbWUgKyAnXFxcXGInLCAnZycpO1xyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlZ0V4LCBcIlwiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIERJViB3aXRoIGEgcHJvdmlkZWQgY2xhc3MgbmFtZS5cclxuICogQHBhcmFtIGNsYXNzTmFtZSBDbGFzcyB0byBhZGQgdG8gdGhlIGRpdlxyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50IHRvIHBsYWNlIGluIHRoZSBkaXYuIEhUTUwgb3IgRWxlbWVudFxyXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gQ3JlYXRlZCBET00gRWxlbWVudFxyXG4gKi9cclxuVG9vbHMuY3JlYXRlQ2xhc3NlZERpdiA9IGZ1bmN0aW9uKGNsYXNzTmFtZSwgY29udGVudCkge1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgVG9vbHMuYWRkQ2xhc3MoZGl2LCBjbGFzc05hbWUpO1xyXG4gICAgaWYoY29udGVudCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0ICAgIFRvb2xzLmFkZENvbnRlbnQoZGl2LCBjb250ZW50KTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgY29udGVudCB0byBhbiBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGFkZCB0b1xyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50LiBDYW4gYmUgSFRNTCBvciBhbiBFbGVtZW50LlxyXG4gKi9cclxuVG9vbHMuYWRkQ29udGVudCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNvbnRlbnQpIHtcclxuICAgIGlmKFRvb2xzLmlzU3RyaW5nKGNvbnRlbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gY29udGVudDtcclxuICAgIH0gZWxzZSBpZihUb29scy5pc0VsZW1lbnQoY29udGVudCkpIHtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogSXMgdGhlIHBhc3NlZCB2YWx1ZSBhIHN0cmluZz9cclxuICogQHBhcmFtIHZhbFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcblRvb2xzLmlzU3RyaW5nID0gZnVuY3Rpb24odmFsKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgKCghIXZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JykgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIElzIHRoZSBwYXNzZWQgdmFsdWUgYW4gSFRNTEVsZW1lbnQ/XHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5Ub29scy5pc0VsZW1lbnQgPSBmdW5jdGlvbih2YWwpIHtcclxuICAgIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgJiYgdmFsLm5vZGVWYWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgKHNwZWNpZmljYWxseSBpdHMgYm9yZGVyIGJveCwgd2hpY2ggZXhjbHVkZXMgbWFyZ2lucykgcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50LlxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKi9cclxuVG9vbHMub2Zmc2V0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdHJldHVybiB7XHJcblx0ICAgIGxlZnQ6IHJlY3QubGVmdCArIGVsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCxcclxuICAgICAgICB0b3A6IHJlY3QudG9wICsgZWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXRcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmQgYSBjaGlsZCBieSB0YWdOYW1lXHJcbiAqIEBwYXJhbSBlbGVtZW50XHJcbiAqIEBwYXJhbSB0YWdOYW1lXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuVG9vbHMuY2hpbGQgPSBmdW5jdGlvbihlbGVtZW50LCB0YWdOYW1lKSB7XHJcblx0Zm9yKGNvbnN0IG5vZGUgb2YgZWxlbWVudC5jaGlsZE5vZGVzKSB7XHJcblx0ICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gdGFnTmFtZSkge1xyXG5cdCAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHtUb29sc30gZnJvbSAnLi4vRE9NL1Rvb2xzJztcclxuXHJcbi8qKlxyXG4gKiBUb2FzdCBub3RpZmljYXRpb24gc3lzdGVtXHJcbiAqIGpRdWVyeS1mcmVlXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRvYXN0ID0gZnVuY3Rpb24obWFpbikge1xyXG5cdC8qKiBEZWZhdWx0IHRvYXN0IGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyAqL1xyXG5cdHRoaXMuZGVmYXVsdER1cmF0aW9uID0gMjAwMDtcclxuXHJcblx0LyoqIEludGVyLXRvYXN0IGRlbGF5IHRpbWUgaW4gbWlsbGlzZWNvbmRzICovXHJcblx0dGhpcy5pbnRlclRvYXN0RGVsYXkgPSA1MDA7XHJcblxyXG4gICAgbGV0IG1lc3NhZ2VzID0gW107ICAvLyBQZW5kaW5nIG1lc3NhZ2VzXHJcbiAgICBsZXQgYWN0aXZlID0gZmFsc2U7IC8vIElzIHRoZXJlIGFuIGFjdGl2ZSBtZXNzYWdlIGRpc3BsYXlpbmc/XHJcblxyXG5cdGxldCBlbGVtZW50ID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIHRoZSB0b2FzdCBkaXZcclxuXHQgKiBAcGFyYW0gZGl2IERpdiB0byBwdXQgdGhlIHRvYXN0IGludG9cclxuXHQgKi9cclxuICAgIHRoaXMuY3JlYXRlID0gKGRpdikgPT4ge1xyXG5cdFx0ZWxlbWVudCA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ3RvYXN0Jyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG5cdFx0ZWxlbWVudC5pbm5lckhUTUwgPSAndGVzdGluZyc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcclxuICAgIFx0aWYobWVzc2FnZXMubGVuZ3RoID4gMCAmJiAhYWN0aXZlKSB7XHJcblx0XHQgICAgLy8gU2V0IHRoZSBtZXNzYWdlXHJcblx0XHQgICAgbGV0IG1lc3NhZ2UgPSBtZXNzYWdlc1swXTtcclxuICAgICAgICAgICAgbWVzc2FnZXMuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IG1lc3NhZ2UubXNnO1xyXG5cclxuICAgICAgICAgICAgLy8gU2hvdyBpdFxyXG5cdFx0ICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9hc3QtYWN0aXZlJyk7XHJcblx0XHQgICAgYWN0aXZlID0gdHJ1ZTtcclxuXHJcblx0XHQgICAgLy8gRGVsYXkgd2hpbGUgYWN0aXZlXHJcblx0XHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHQgICAgXHQvLyBIaWRlIGl0XHJcblx0XHRcdCAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RvYXN0LWFjdGl2ZScpO1xyXG5cclxuXHRcdFx0ICAgIC8vIERlbGF5IGJldHdlZW4gdG9hc3RzXHJcblx0XHRcdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0ICAgIFx0YWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdCAgICBcdHNob3coKTtcclxuXHRcdFx0ICAgIH0sIHRoaXMuaW50ZXJUb2FzdERlbGF5KVxyXG5cdFx0ICAgIH0sIG1lc3NhZ2UudGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBEaXNwbGF5IGEgdG9hc3QgbWVzc2FnZVxyXG5cdCAqIEBwYXJhbSBtc2cgTWVzc2FnZSB0byBkaXNwbGF5XHJcblx0ICogQHBhcmFtIHRpbWUgVGltZSB0byBkaXNwbGF5IGluIG1pbGxpc2Vjb25kcywgb21pdCBmb3IgZGVmYXVsdFxyXG5cdCAqL1xyXG5cdHRoaXMubWVzc2FnZSA9IGZ1bmN0aW9uKG1zZywgdGltZSkge1xyXG4gICAgICAgIGlmKHRpbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aW1lID0gdGhpcy5kZWZhdWx0RHVyYXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXNzYWdlcy5wdXNoKHttc2c6IG1zZywgdGltZTogdGltZX0pO1xyXG4gICAgICAgIHNob3coKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogRGlzcGxheSBhbnkgSlNPTiBlcnJvcnMgd2UgaGF2ZSByZWNlaXZlZC5cclxuXHQgKiBAcGFyYW0ganNvbkFwaSBKc29uQVBJIG9iamVjdFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGFueSBlcnJvcnMgZXhpc3RlZC5cclxuXHQgKi9cclxuXHR0aGlzLmpzb25FcnJvcnMgPSBmdW5jdGlvbihqc29uQXBpKSB7XHJcbiAgICAgICAgaWYoanNvbkFwaS5lcnJvcnMoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBqc29uQXBpLmVycm9ycygpLmZvckVhY2goKGVycm9yKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlKCdTZXJ2ZXIgRXJyb3I6ICcgKyBlcnJvci50aXRsZSwgNTAwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBSZXNpemVyIGZyb20gJ3Jlc2l6ZXItY2wnO1xyXG5cclxuaW1wb3J0IHtNZW51fSBmcm9tICcuL01lbnUnO1xyXG5pbXBvcnQge1RvYXN0fSBmcm9tICcuL0dyYXBoaWNzL1RvYXN0JztcclxuaW1wb3J0IHtEcmFnQW5kRHJvcH0gZnJvbSAnLi9VSS9EcmFnQW5kRHJvcCc7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gJy4vRE9NL1Rvb2xzJztcclxuaW1wb3J0IHtQYW5lfSBmcm9tIFwiLi9QYW5lXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIEFjdHVhbCBpbnN0YW5jZSBvZiB0aGUgUGxheWdyb3VuZCBmb3IgYSBzaW5nbGUgZWxlbWVudC5cclxuICogQHBhcmFtIHBsYXlncm91bmQgVGhlIG1haW4gUGxheWdyb3VuZCBvYmplY3RcclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB3ZSBhcmUgbG9hZGluZyBpbnRvXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1haW4gPSBmdW5jdGlvbihwbGF5Z3JvdW5kLCBlbGVtZW50KSB7XHJcbiAgICB0aGlzLnBsYXlncm91bmQgPSBwbGF5Z3JvdW5kO1xyXG4gICAgdGhpcy5zaXRlID0gcGxheWdyb3VuZC5zaXRlO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMub3B0aW9ucyA9IHBsYXlncm91bmQub3B0aW9ucztcclxuXHJcbiAgICAvLy8gZGl2Lm1haW5cclxuICAgIHRoaXMuZGl2ID0gbnVsbDtcclxuXHJcbiAgICBsZXQgb3B0aW9ucyA9IHBsYXlncm91bmQub3B0aW9ucztcclxuXHJcbiAgICAvLy8gUmVmZXJlbmNlcyB0byBvdGhlciBHVUkgY29tcG9uZW50c1xyXG4gICAgbGV0IG1lbnU9bnVsbCwgdGFicz1udWxsO1xyXG5cclxuICAgIC8vLyBkaXYub3ZlcmxheVxyXG4gICAgbGV0IGRpdk92ZXJsYXkgPSBudWxsLCBkaXZXb3JrPW51bGw7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgXHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQnKTtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuXHQgICAgaWYob3B0aW9ucy5oZWlnaHQgIT09IG51bGwpIHtcclxuXHRcdCAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG5cdCAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaChvcHRpb25zLmRpc3BsYXkpIHtcclxuICAgICAgICAgICAgY2FzZSAnZnVsbCc6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtZnVsbCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG5cdCAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC13aW5kb3cnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy5kaXNwbGF5ID09PSAnd2luZG93Jykge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBBZGQgcmVzaXplciB0byB0aGUgd2luZG93IGlmIGluIHdpbmRvdyBtb2RlXHJcbiAgICAgICAgICAgIC8vIGFuZCBpdCBoYXMgbm90IGFscmVhZHkgYmVlbiBhZGRlZFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZighZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZXNpemVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgUmVzaXplcihlbGVtZW50LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiAnMTBweCBzb2xpZCAjMTg0NTNCJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ0FuZERyb3AgPSBuZXcgRHJhZ0FuZERyb3AodGhpcyk7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgdGhlIHdpbmRvdyBjb21wb25lbnRzXHJcbiAgICAgICAgLy9cclxuICAgICAgICBpZihvcHRpb25zLmRpc3BsYXkgIT09ICdpbmxpbmUnICYmIG9wdGlvbnMuZGlzcGxheSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEFsbCB3aW5kb3ctYmFzZWQgdmVyc2lvbnMgb3RoZXIgdGhhbiBpbmxpbmUgZ2V0IHRoZVxyXG4gICAgICAgICAgICAvLyBmdWxsIHVzZXIgaW50ZXJmYWNlXHJcbiAgICAgICAgICAgIC8vXHJcblxyXG4gICAgICAgICAgICAvLyA8ZGl2IGNsYXNzPVwibWFpblwiPjwvZGl2PlxyXG4gICAgICAgICAgICB0aGlzLmRpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXBnLW1haW4nKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZGl2KTtcclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgbWVudVxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBtZW51ID0gbmV3IE1lbnUodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMubWVudSA9IG1lbnU7XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBXb3JraW5nIGFyZWFcclxuICAgICAgICAgICAgLy8gPGRpdiBjbGFzcz1cIndvcmtcIj48L2Rpdj5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgZGl2V29yayA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ3dvcmsnKTtcclxuICAgICAgICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQoZGl2V29yayk7XHJcblxyXG5cclxuXHRcdFx0Ly9cclxuXHQgICAgICAgIC8vIEFuZCB0aGUgcm9vdCBwYW5lXHJcblx0ICAgICAgICAvL1xyXG5cdCAgICAgICAgdGhpcy5yb290UGFuZSA9IG5ldyBQYW5lKHRoaXMsIGRpdldvcmssIG51bGwsIG51bGwpO1xyXG5cdCAgICAgICAgdGhpcy5yb290UGFuZS5sb2FkKG9wdGlvbnMucGFuZSk7XHJcblxyXG5cdCAgICAgICAgLy9cclxuXHQgICAgICAgIC8vIEFuZCB0aGUgb3ZlcmxheVxyXG5cdCAgICAgICAgLy8gPGRpdiBjbGFzcz1cImNpcnNpbS1vdmVybGF5XCI+PC9kaXY+XHJcblx0ICAgICAgICAvL1xyXG5cdCAgICAgICAgZGl2T3ZlcmxheSA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXBnLW92ZXJsYXknKTtcclxuXHQgICAgICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKGRpdk92ZXJsYXkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b2FzdCA9IG5ldyBUb2FzdCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy50b2FzdC5jcmVhdGUodGhpcy5kaXYpO1xyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQW55IGRhdGEgdG8gbG9hZD9cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5sb2FkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9hZCA9IG9wdGlvbnMubG9hZDtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBsb2FkID09PSAnc3RyaW5nJyB8fCBsb2FkIGluc3RhbmNlb2YgU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZCA9IEpTT04ucGFyc2UobG9hZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IHRhZyBpbiBsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFiID0gdGhpcy5nZXRUYWIodGFnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0YWIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiLnNldChsb2FkW3RhZ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRUYWIgPSBmdW5jdGlvbih0YWcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb290UGFuZS5nZXRUYWIodGFnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbmV2ZXIgYSBuZXcgdGFiIGlzIHNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHRoaXMubmV3VGFiID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgb3IgY2xlYXIgaW50ZXJmYWNlIG1vZGFsIHN0YXRlLlxyXG4gICAgICogQHBhcmFtIG1vZGFsIFRydWUgc2V0cyBpbnRlcmZhY2UgdG8gbW9kYWwgc3RhdGUuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICB0aGlzLm1vZGFsID0gZnVuY3Rpb24obW9kYWwpIHtcclxuICAgICAgICBpZihtb2RhbCkge1xyXG4gICAgICAgICAgICBkaXZPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpdk92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG59XHJcbiIsImltcG9ydCB7VG9vbHN9IGZyb20gJy4vRE9NL1Rvb2xzJztcclxuXHJcbi8vIGltcG9ydCB7RmlsZU1lbnV9IGZyb20gJy4vTWVudXMvRmlsZU1lbnUnO1xyXG4vLyBpbXBvcnQge0VkaXRNZW51fSBmcm9tICcuL01lbnVzL0VkaXRNZW51JztcclxuLy8gaW1wb3J0IHtUYWJzTWVudX0gZnJvbSAnLi9NZW51cy9UYWJzTWVudSc7XHJcbi8vIGltcG9ydCB7SGVscE1lbnV9IGZyb20gJy4vTWVudXMvSGVscE1lbnUnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBwcm9ncmFtIG1lbnUgYmFyXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSBmdW5jdGlvbihtYWluKSB7XHJcblx0Y29uc3Qgb3B0aW9ucyA9IG1haW4ub3B0aW9ucztcclxuXHJcblxyXG4gICAgLy9cclxuICAgIC8vIENyZWF0ZSB0aGUgbWVudSBjb21wb25lbnRzXHJcbiAgICAvL1xyXG4gICAgLy8gdmFyIGZpbGVNZW51ID0gbmV3IEZpbGVNZW51KHRoaXMsIG1haW4pO1xyXG4gICAgLy8gdmFyIGVkaXRNZW51ID0gbmV3IEVkaXRNZW51KHRoaXMsIG1haW4pO1xyXG4gICAgLy8gdmFyIHRhYnNNZW51ID0gbmV3IFRhYnNNZW51KHRoaXMsIG1haW4pO1xyXG4gICAgLy8gdmFyIGhlbHBNZW51ID0gbmV3IEhlbHBNZW51KHRoaXMsIG1haW4pO1xyXG5cclxuICAgIC8vLyBUaGUgbmF2IGVsZW1lbnRcclxuICAgIHRoaXMubmF2ID0gbnVsbDtcclxuICAgIHRoaXMudWwgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyA8bmF2IGNsYXNzPVwibWVudWJhclwiPjx1bD48L3VsPjwvbmF2PlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5uYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyh0aGlzLm5hdiwgJ2NsLXBnLW1lbnViYXInKTtcclxuICAgICAgICBtYWluLmRpdi5hcHBlbmRDaGlsZCh0aGlzLm5hdik7XHJcblxyXG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICB0aGlzLm5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICAgICAgdGhpcy51bCA9IHVsO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51cyA9IG9wdGlvbnMubWVudXM7XHJcbiAgICAgICAgbWVudXMucHVzaCh7XHJcblx0ICAgICAgICBuYW1lOiAnSGVscCcsXHJcblx0ICAgICAgICBtZW51czogW1xyXG5cdFx0ICAgICAgICB7bmFtZTogJ0Fib3V0JywgYWN0aW9uOiB7dGFnOiAnYWJvdXQnfX1cclxuXHQgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yKGNvbnN0IG1lbnUgb2YgbWVudXMpIHtcclxuICAgICAgICBcdGNvbnN0IHRvcExJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBcdHVsLmFwcGVuZENoaWxkKHRvcExJKTtcclxuXHJcbiAgICAgICAgXHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIFx0dG9wTEkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgXHRhLmlubmVyVGV4dCA9IG1lbnUubmFtZTtcclxuXHJcbiAgICAgICAgXHRpZihtZW51LmFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgXHRcdC8vIFRvcCBsZXZlbCBvbmx5IG1lbnVcclxuICAgICAgICBcdFx0Y29uc3QgYWN0aW9uID0gbWFpbi5wbGF5Z3JvdW5kLmdldEFjdGlvbihtZW51LmFjdGlvbik7XHJcblx0XHQgICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIFthLCB0b3BMSV0pIHtcclxuXHRcdCAgICAgICAgXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0ICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdCAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0ICAgICAgICBhY3Rpb24uZG8obWFpbik7XHJcblx0XHRcdCAgICAgICAgfSk7XHJcblx0XHQgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBpZihtZW51Lm1lbnVzICE9PSB1bmRlZmluZWQpIHtcclxuXHQgICAgICAgIFx0Ly8gUHVsbC1kb3duIG1lbnVcclxuXHQgICAgICAgIFx0Y29uc3Qgc3ViVUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdCAgICAgICAgXHR0b3BMSS5hcHBlbmRDaGlsZChzdWJVTCk7XHJcblxyXG5cdCAgICAgICAgXHRmb3IoY29uc3QgZWxlbWVudCBvZiBbYSwgdG9wTEldKSB7XHJcblx0XHRcdCAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0XHRcdCAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHQgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdFx0XHQgICAgICAgIGlmKGdldENvbXB1dGVkU3R5bGUoc3ViVUwpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ2hpZGRlbicpIHtcclxuXHRcdFx0XHRcdCAgICAgICAgb3Blbih0b3BMSSk7XHJcblx0XHRcdFx0ICAgICAgICB9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ICAgICAgICAvLyBJZiBhbHJlYWR5IG9wZW4sIGNsb3NlIGFsbFxyXG5cdFx0XHRcdFx0ICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XHJcblx0XHRcdFx0ICAgICAgICB9XHJcblxyXG5cdFx0XHQgICAgICAgIH0pO1xyXG5cdFx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgXHRmb3IoY29uc3Qgc3ViTWVudSBvZiBtZW51Lm1lbnVzKSB7XHJcblx0XHRcdCAgICAgICAgY29uc3Qgc3ViTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdFx0XHQgICAgICAgIHN1YlVMLmFwcGVuZENoaWxkKHN1YkxJKTtcclxuXHJcblx0XHRcdCAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHRcdFx0ICAgICAgICBzdWJMSS5hcHBlbmRDaGlsZChhKTtcclxuXHRcdFx0ICAgICAgICBhLmlubmVyVGV4dCA9IHN1Yk1lbnUubmFtZTtcclxuXHJcblx0XHRcdCAgICAgICAgaWYoc3ViTWVudS5hY3Rpb24gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdCAgICAgICAgLy8gVG9wIGxldmVsIG9ubHkgbWVudVxyXG5cdFx0XHRcdCAgICAgICAgY29uc3QgYWN0aW9uID0gbWFpbi5wbGF5Z3JvdW5kLmdldEFjdGlvbihzdWJNZW51LmFjdGlvbik7XHJcblx0XHRcdFx0ICAgICAgICBpZihhY3Rpb24gIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdCAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgW2EsIHRvcExJXSkge1xyXG5cdFx0XHRcdFx0XHQgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIHRoaXMuY2xvc2VBbGwoKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGFjdGlvbi5kbyhtYWluKTtcclxuXHRcdFx0XHRcdFx0ICAgICAgICB9KTtcclxuXHRcdFx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHRcdCAgICAgICAgfVxyXG5cclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHQgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIEFkZCB0aGUgbWVudSBjb21wb25lbnQncyBIVE1MXHJcbiAgICAgICAgLy9cclxuXHQgICAgLy8gbGV0IGh0bWwgPSAnJztcclxuXHJcblx0ICAgIC8vIGh0bWwgKz0gZmlsZU1lbnUuaHRtbCgpO1xyXG4gICAgICAgIC8vIGh0bWwgKz0gZWRpdE1lbnUuaHRtbCgpO1xyXG4gICAgICAgIC8vIGh0bWwgKz0gdGFic01lbnUuaHRtbCgpO1xyXG4gICAgICAgIC8vIGh0bWwgKz0gaGVscE1lbnUuaHRtbCgpO1xyXG5cclxuICAgICAgICAvLyB1bC5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgICAgICAvL1xyXG5cdCAgICAvLyBNZW51IG9wdGlvbiBmb3IgdGVzdGluZyB0aGUgVG9hc3QgZXJyb3IgcmVwb3J0aW5nIG1lY2hhbmlzbVxyXG5cdCAgICAvL1xyXG5cclxuXHQgICAgLy8gaHRtbCArPSBgPGxpPjxhIGNsYXNzPVwidG9hc3QtdGVzdFwiPlRvYXN0ITwvYT48L2xpPmA7XHJcblx0ICAgIC8vIHVsLmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHQvL1xyXG5cdCAgICAvLyB0aGlzLnRvYXN0cyA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5jbGljaygnLnRvYXN0LXRlc3QnLCAoZXZlbnQpPT4ge1xyXG4gICAgICAgIC8vIFx0dGhpcy50b2FzdHMrKztcclxuICAgICAgICAvLyBcdG1haW4udG9hc3QubWVzc2FnZSgnVG9hc3QgbWVzc2FnZSAnICsgdGhpcy50b2FzdHMpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIEluc3RhbGwgY2xpY2sgaGFuZGxlcnMgZm9yIGFsbCB0b3AtbGV2ZWwgbWVudXNcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGZvcihjb25zdCBub2RlIG9mIHVsLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAvLyAgICAgaWYobm9kZS50YWdOYW1lID09PSAnTEknKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdC8vXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gRmluZCB0aGUgPHVsPiBpbiB0aGlzIG1lbnVcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgdWxTdWIgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZih1bFN1YiAhPT0gbnVsbCkge1xyXG5cdCAgICAvLyAgICAgICAgICAgICAgICAgaWYoZ2V0Q29tcHV0ZWRTdHlsZSh1bFN1YikuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAnaGlkZGVuJykge1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICBvcGVuKG5vZGUpO1xyXG5cdCAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBJZiBhbHJlYWR5IG9wZW4sIGNsb3NlIGFsbFxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XHJcblx0ICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIEFjdGl2YXRlIGFsbCBvZiB0aGUgbWVudXNcclxuICAgICAgICAvLyBmaWxlTWVudS5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIC8vIGVkaXRNZW51LmFjdGl2YXRlKCk7XHJcbiAgICAgICAgLy8gdGFic01lbnUuYWN0aXZhdGUoKTtcclxuICAgICAgICAvLyBoZWxwTWVudS5hY3RpdmF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIExpc3RlbiB0byBrZXkgZG93biBldmVudHMgc28gd2UgY2FuIGNsb3NlIHRoZSBtZW51XHJcbiAgICAgKiBpZiB3ZSBjbGljayBvdXRzaWRlIG9mIHRoZSBtZW51IHdoaWxlIGl0IGlzIG9wZW4uXHJcblx0ICogQHBhcmFtIGV2ZW50XHJcblx0ICovXHJcblx0Y29uc3QgY2xvc2VMaXN0ZW5lciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIFNlZSBpZiB3ZSBjbGlja2VkIG9uIHNvbWUgY2hpbGQgb2YgbmF2Li4uXHJcbiAgICAgICAgbGV0IG5vZGUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICBmb3IoIDsgbm9kZSAhPT0gbnVsbDsgbm9kZSA9IG5vZGUucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBpZihub2RlID09PSB0aGlzLm5hdikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHQgICAgdGhpcy5jbG9zZUFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9wZW4gYSBtZW51XHJcbiAgICBjb25zdCBvcGVuID0gKGxpKSA9PiB7XHJcbiAgICAgICAgLy8gSGlkZSBhbnkgb3RoZXIgbWVudXNcclxuICAgICAgICBmb3IoY29uc3Qgbm9kZSBvZiB0aGlzLnVsLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgaWYobm9kZS50YWdOYW1lID09PSAnTEknKSB7XHJcblx0ICAgICAgICAgICAgY29uc3QgdWwgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcclxuICAgICAgICAgICAgICAgIGlmKHVsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBUb29scy5yZW1vdmVDbGFzcyh1bCwgJ2NsLXBnLW1lbnUtb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHQgICAgLy8gQW5kIG9wZW4gdGhpcyBtZW51XHJcblx0ICAgIGNvbnN0IHVsID0gVG9vbHMuY2hpbGQobGksICdVTCcpO1xyXG5cdCAgICBpZih1bCAhPT0gbnVsbCkge1xyXG5cdCAgICBcdHVsLmNsYXNzTGlzdC5hZGQoJ2NsLXBnLW1lbnUtb3BlbicpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDbG9zZSBhbGwgbWVudXMgKi9cclxuICAgIHRoaXMuY2xvc2VBbGwgPSAoKSA9PiB7XHJcblx0ICAgIGZvcihjb25zdCBub2RlIG9mIHRoaXMudWwuY2hpbGROb2Rlcykge1xyXG5cdFx0ICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gJ0xJJykge1xyXG5cdFx0XHQgICAgY29uc3QgdWwgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcclxuXHRcdFx0ICAgIGlmKHVsICE9PSBudWxsKSB7XHJcblx0XHRcdFx0ICAgIFRvb2xzLnJlbW92ZUNsYXNzKHVsLCAnY2wtcGctbWVudS1vcGVuJyk7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogRW5hYmxlIG9yIGRpc2FibGUgYSBtZW51IG9wdGlvbiBieSBzZWxlY3RvclxyXG5cdCAqIEBwYXJhbSBzZWwgU2VsZWN0b3IgZm9yIHRoZSBtZW51IG9wdGlvbiAobGlrZSAnLnRhYnMtYWRkJylcclxuXHQgKiBAcGFyYW0gZW5hYmxlIFRydWUgdG8gZW5hYmxlXHJcblx0ICovXHJcblx0dGhpcy5lbmFibGUgPSAoc2VsLCBlbmFibGUpID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy51bC5xdWVyeVNlbGVjdG9yKHNlbCk7XHJcbiAgICAgICAgaWYoZWxlbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihlbmFibGUpIHtcclxuICAgICAgICAgICAgVG9vbHMucmVtb3ZlQ2xhc3MoZWxlbWVudC5wYXJlbnROb2RlLCBcIm1lbnUtZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuYWRkQ2xhc3MoZWxlbWVudC5wYXJlbnROb2RlLCBcIm1lbnUtZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblx0LyoqXHJcbiAgICAgKiBGaW5kIGEgbWVudSBvcHRpb24gYnkgc2VsZWN0b3JcclxuXHQgKiBAcGFyYW0gc2VsXHJcblx0ICogQHJldHVybnMge0VsZW1lbnR9XHJcblx0ICovXHJcblx0dGhpcy5maW5kID0gKHNlbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVsLnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBJbnN0YWxsIGEgbWVudSBvcHRpb24gY2xpY2sgaGFuZGVyXHJcblx0ICogQHBhcmFtIHNlbCBTZWxlY3RvciBmb3IgdGhlIG1lbnUgb3B0aW9uXHJcblx0ICogQHBhcmFtIGNsb3N1cmUgVGhlIGNsb3N1cmUgdG8gY2FsbCAocGFzc2VzICdldmVudCcpXHJcblx0ICovXHJcblx0dGhpcy5jbGljayA9IChzZWwsIGNsb3N1cmUpID0+IHtcclxuXHQgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZmluZChzZWwpO1xyXG5cdCAgICBpZihlbGVtZW50ICE9PSBudWxsKSB7XHJcblx0ICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0ICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHQgICAgICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XHJcblx0ICAgICAgICAgICAgY2xvc3VyZShldmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBQbGF5Z3JvdW5kIG9wdGlvbnMuXHJcbiAqIEBwYXJhbSBvcHRpb25zIFVzZXIgcHJvdmlkZWQgb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHt9O1xyXG5cclxuICAgIC8vLyBEaXNwbGF5IG9wdGlvbnNcclxuICAgIC8vLyB3aW5kb3cgLSBEaXNwbGF5cyBhcyBhIHN0YW5kYXJkIGRpdiAoZGVmYXVsdClcclxuICAgIHRoaXMuZGlzcGxheSA9ICd3aW5kb3cnO1xyXG5cclxuICAgIC8vLyBPcHRpb25hbCBoZWlnaHQgc2V0dGluZ1xyXG4gICAgdGhpcy5oZWlnaHQgPSBudWxsO1xyXG5cclxuICAgIC8vLyBUaGUgcGxheWdyb3VuZCByb290IHBhbmVcclxuICAgIHRoaXMucGFuZSA9IHt9O1xyXG5cclxuICAgIC8vLyBUaGUgdG9wLWxldmVsIG1lbnUgb3B0aW9uc1xyXG4gICAgdGhpcy5tZW51cyA9IFt7bmFtZTogJ0Fib3V0J31dO1xyXG5cclxuICAgIC8vLyBDb250ZW50IHRvIGluaXRpYWxseSBsb2FkIGludG8gdGhlIHRhYnNcclxuICAgIHRoaXMubG9hZCA9IG51bGw7XHJcblxyXG5cclxuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb24gXCIgKyBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIEFQSSBvcGVyYXRpb25zIGZvciBhIGdpdmVuIGZpbGUgbW9kZS5cclxuICAgICAqIEBwYXJhbSBtb2RlICdzYXZlJywgJ29wZW4nXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXRBUEkgPSBmdW5jdGlvbihtb2RlKSB7XHJcbiAgICAgICAgaWYodGhpcy5hcGkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmFwaSA9PT0gT2JqZWN0KHRoaXMuYXBpKSkge1xyXG4gICAgICAgICAgICBsZXQgb2JqO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5hcGlbbW9kZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gXHJcbiAgICAgICAgICAgICAgICAvLyBNb2RlIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXHJcbiAgICAgICAgICAgICAgICB2YXIgbW9kZU9iaiA9IHRoaXMuYXBpW21vZGVdO1xyXG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai51cmwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1vZGUgaXMgbm90IHN1cHBvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNlbmQgY29udGVudCB0eXBlXHJcbiAgICAgICAgICAgICAgICBvYmogPSB7dXJsOiBtb2RlT2JqLnVybH07XHJcbiAgICAgICAgICAgICAgICBpZihtb2RlT2JqLmNvbnRlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouY29udGVudFR5cGUgPSBtb2RlT2JqLmNvbnRlbnRUeXBlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuYXBpLmNvbnRlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouY29udGVudFR5cGUgPSB0aGlzLmFwaS5jb250ZW50VHlwZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai5leHRyYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0gbW9kZU9iai5leHRyYTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmFwaS5leHRyYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0gdGhpcy5hcGkuZXh0cmE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKG1vZGVPYmoubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLm5hbWUgPSBtb2RlT2JqLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5hcGkubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLm5hbWUgPSB0aGlzLmFwaS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcGkudXJsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvYmogPSB7dXJsOiB0aGlzLmFwaS51cmx9O1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcGkuZXh0cmEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHRoaXMuYXBpLmV4dHJhO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFwaS5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoubmFtZSA9IHRoaXMuYXBpLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt1cmw6IHRoaXMuYXBpfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtUYWJzfSBmcm9tICcuL1RhYnMnO1xyXG5cclxuLyoqXHJcbiAqIEEgUGFuZSBpcyBhbiBhcmVhIG9mIHRoZSBJREUgc2NyZWVuIHRoYXQgZWl0aGVyIGNvbnRhaW5zIGEgdGFiIHNldCBvciB0d28gY2hpbGQgcGFuZXMuXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdGhhdCBpcyB0aGUgaG9zdCBmb3IgdGhlIHBhbmVcclxuICogQHBhcmFtIHBhcmVudCBQYW5lIHBhcmVudCBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUGFuZSA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQsIHBhcmVudCkge1xyXG5cdHRoaXMubWluU3BsaXQgPSAxMDtcclxuXHR0aGlzLm1heFNwbGl0ID0gOTA7XHJcblxyXG5cdGxldCBkaXYgPSBudWxsLCBjaGlsZDEgPSBudWxsLCBjaGlsZDIgPSBudWxsO1xyXG5cdGxldCBob3Jpem9udGFsU3BsaXQgPSBudWxsO1xyXG5cdGxldCB0YWJzID0gbnVsbDtcclxuXHJcblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuXHRcdC8vXHJcblx0XHQvLyBDcmVhdGUgYW5kIGFkZCB0aGUgZGl2XHJcblx0XHQvL1xyXG5cclxuXHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5kaXYgPSBkaXY7XHJcblxyXG5cdFx0aWYocGFyZW50ID09PSBudWxsKSB7XHJcblx0XHRcdGRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLXJvb3QnKTtcclxuXHRcdH1cclxuXHJcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG5cdFx0Ly8gaWYoZG9ub3JUYWJzICE9PSBudWxsKSB7XHJcblx0XHQvLyBcdHRhYnMgPSBkb25vclRhYnM7XHJcblx0XHQvLyBcdHRhYnMubmV3UGFyZW50KHRoaXMpO1xyXG5cdFx0Ly8gfSBlbHNlIHtcclxuXHRcdC8vIFx0dGFicyA9IG5ldyBUYWJzKG1haW4sIGRpdik7XHJcblx0XHQvLyB9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBMb2FkIHRoZSBwYW5lIGZyb20gdGhlIGRhdGFcclxuXHQgKiBAcGFyYW0gZGF0YSBEYXRhIGZyb20gb3B0aW9ucyBmb3IgdGhpcyBwYW5lXHJcblx0ICovXHJcblx0dGhpcy5sb2FkID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0aWYoZGF0YS5jaGlsZDEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHQvLyBUaGlzIGlzIGEgc3BsaXQgcGFuZVxyXG5cdFx0XHR0aGlzLnNwbGl0KGRhdGEuaG9yaXosIGRhdGEuY2hpbGQxLCBkYXRhLmNoaWxkMik7XHJcblx0XHRcdHRoaXMucGVyY2VudGFnZShkYXRhLnBlcmNlbnRhZ2UpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGFicyA9IG5ldyBUYWJzKG1haW4sIGRpdik7XHJcblx0XHRcdHRhYnMubG9hZChkYXRhLnRhYnMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGhpcy5zcGxpdCA9IGZ1bmN0aW9uKGhvcml6b250YWwsIGNoaWxkMURhdGEsIGNoaWxkMkRhdGEpIHtcclxuXHRcdGhvcml6b250YWxTcGxpdCA9IGhvcml6b250YWw7XHJcblxyXG5cdFx0Y2hpbGQxID0gbmV3IFBhbmUobWFpbiwgZGl2LCB0aGlzLCB0YWJzKTtcclxuXHRcdGNoaWxkMiA9IG5ldyBQYW5lKG1haW4sIGRpdiwgdGhpcywgbnVsbCk7XHJcblxyXG5cdFx0dGFicyA9IG51bGw7XHJcblxyXG5cdFx0aWYoaG9yaXpvbnRhbCkge1xyXG5cdFx0XHRjaGlsZDEuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtbGVmdCcpO1xyXG5cdFx0XHRjaGlsZDIuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtcmlnaHQnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRpdi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XHJcblx0XHRcdGNoaWxkMS5kaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC10b3AnKTtcclxuXHRcdFx0Y2hpbGQyLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLWJvdHRvbScpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0YmFyLmNsYXNzTGlzdC5hZGQoJ2NsLWJhcicpO1xyXG5cdFx0Y2hpbGQxLmRpdi5hcHBlbmRDaGlsZChiYXIpO1xyXG5cclxuXHRcdGJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0c3RhcnREcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmUpO1xyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGJhci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhldmVudCk7XHJcblxyXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdFx0c3RhcnREcmFnZ2luZyh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cclxuXHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2hNb3ZlKTtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kKTtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoQ2FuY2VsKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuY2hpbGQxID0gY2hpbGQxO1xyXG5cdFx0dGhpcy5jaGlsZDIgPSBjaGlsZDI7XHJcblxyXG5cdFx0dGhpcy5wZXJjZW50YWdlKDUwKTtcclxuXHJcblx0XHRpZihjaGlsZDFEYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0Y2hpbGQxLmxvYWQoY2hpbGQxRGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoY2hpbGQyRGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGNoaWxkMi5sb2FkKGNoaWxkMkRhdGEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7Y2hpbGQxOiBjaGlsZDEsIGNoaWxkMjogY2hpbGQyfTtcclxuXHR9XHJcblxyXG5cdGxldCBzdGFydFggPSBudWxsLCBzdGFydFkgPSBudWxsO1xyXG5cclxuXHRjb25zdCBzdGFydERyYWdnaW5nID0gKHgsIHkpID0+IHtcclxuXHRcdHN0YXJ0WCA9IHg7XHJcblx0XHRzdGFydFkgPSB5O1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZW5kRHJhZ2dpbmcgPSAoKSA9PiB7XHJcblx0XHRzdGFydFggPSBudWxsO1xyXG5cdFx0c3RhcnRZID0gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHRjb25zdCBkcmFnZ2luZyA9ICh4LCB5KSA9PiB7XHJcblx0XHRjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblxyXG5cdFx0aWYoaG9yaXpvbnRhbFNwbGl0KSB7XHJcblx0XHRcdGNvbnN0IG1haW5YID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG5cdFx0XHRjb25zdCB3aWQgPSByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0O1xyXG5cdFx0XHRpZih3aWQgPD0gMCkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgcGVyID0gKHggLSBtYWluWCkgLyB3aWQgKiAxMDA7XHJcblx0XHRcdHRoaXMucGVyY2VudGFnZShwZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgbWFpblkgPSByZWN0LnRvcCAgKyBlbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdGNvbnN0IGhpdCA9IHJlY3QuYm90dG9tIC0gcmVjdC50b3A7XHJcblx0XHRcdGlmKGhpdCA8PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBwZXIgPSAoeSAtIG1haW5ZKSAvIGhpdCAqIDEwMDtcclxuXHRcdFx0dGhpcy5wZXJjZW50YWdlKHBlcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0aWYoZXZlbnQud2hpY2ggPT09IDApIHtcclxuXHRcdFx0bW91c2VVcChldmVudCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRkcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbW91c2VVcCA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlKTtcclxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXApO1xyXG5cdFx0ZW5kRHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHRvdWNoTW92ZSAgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdGRyYWdnaW5nKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB0b3VjaEVuZCA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0ZHJhZ2dpbmcodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZSk7XHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmQpO1xyXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoQ2FuY2VsKTtcclxuXHJcblx0XHRlbmREcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdG91Y2hDYW5jZWwgPSAoZXZlbnQpID0+IHtcclxuXHRcdHRvdWNoRW5kKGV2ZW50KTtcclxuXHR9XHJcblxyXG5cdHRoaXMucGVyY2VudGFnZSA9IGZ1bmN0aW9uKHBlcikge1xyXG5cdFx0aWYocGVyIDwgdGhpcy5taW5TcGxpdCkge1xyXG5cdFx0XHRwZXIgPSB0aGlzLm1pblNwbGl0O1xyXG5cdFx0fSBlbHNlIGlmKHBlciA+IHRoaXMubWF4U3BsaXQpIHtcclxuXHRcdFx0cGVyID0gdGhpcy5tYXhTcGxpdDtcclxuXHRcdH1cclxuXHJcblx0XHRpZihob3Jpem9udGFsU3BsaXQpIHtcclxuXHRcdFx0Y2hpbGQxLmRpdi5zdHlsZS53aWR0aCA9IHBlciArICclJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNoaWxkMS5kaXYuc3R5bGUuaGVpZ2h0ID0gcGVyICsgJyUnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGhpcy5nZXRUYWIgPSBmdW5jdGlvbih0YWcpIHtcclxuXHRcdGZvcihjb25zdCBjb2xsZWN0aW9uIG9mIFt0YWJzLCBjaGlsZDEsIGNoaWxkMl0pIHtcclxuXHRcdFx0aWYoY29sbGVjdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdGxldCB0YWIgPSBjb2xsZWN0aW9uLmdldFRhYih0YWcpO1xyXG5cdFx0XHRcdGlmKHRhYiAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRhYjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbn0iLCJpbXBvcnQge01haW59IGZyb20gJy4vTWFpbic7XHJcbmltcG9ydCB7T3B0aW9uc30gZnJvbSAnLi9PcHRpb25zJztcclxuaW1wb3J0IHtSZWFkeX0gZnJvbSAnLi9VdGlsaXR5L1JlYWR5JztcclxuaW1wb3J0IHtBY3Rpb259IGZyb20gJy4vQWN0aW9ucy9BY3Rpb24nO1xyXG5pbXBvcnQge0FsbEFjdGlvbnN9IGZyb20gJy4vQWN0aW9ucy9BbGxBY3Rpb25zJztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIFBsYXlncm91bmRcclxuICpcclxuICogVGhpcyBjcmVhdGVzIGEgc2luZ2xlIEluc3RhbmNlIHRoYXQgbWFuYWdlcyB0aGVcclxuICogY29tcG9uZW50cyBhbmQgc3RhcnRzIGFjdHVhbCBQbGF5Z3JvdW5kIHdpbmRvd3MuXHJcbiAqXHJcbiAqIENvbnN0cnVjdCBhbmQgc3RhcnQgcnVubmluZyBsaWtlIHRoaXM6XHJcbiAqXHJcbiAqIEdpdmVuIGFuIEhUTUwgZGl2OlxyXG4gKiAgICAgPGRpdiBpZD1cInBsYXlncm91bmRcIj48L2Rpdj5cclxuICpcclxuICogVGhlIGZvbGxvd2luZyBzY3JpcHQgc3RhcnRzIFBsYXlncm91bmQgaW4gdGhhdCBkaXY6XHJcbiAqXHJcbiAqICAgICB2YXIgcGxheWdyb3VuZCA9IG5ldyBQbGF5Z3JvdW5kKCcjcGxheWdyb3VuZCcpO1xyXG4gKiAgICAgcGxheWdyb3VuZC5zdGFydCgpO1xyXG4gKlxyXG4gKiBAcGFyYW0gc2l0ZSBTaXRlIG9iamVjdFxyXG4gKiBAcGFyYW0gc2VsIFNlbGVjdG9yIG9yIGVsZW1lbnQgdG8gY3JlYXRlIFBsYXlncm91bmQgaW4gKGNhbiBiZSBtYW55KVxyXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvYmplY3QgY29udGFpbmluZyBQbGF5Z3JvdW5kIG9wdGlvbnMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBsYXlncm91bmQgPSBmdW5jdGlvbihzaXRlLCBzZWwsIG9wdGlvbnMpIHtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gTWFzdGVyIHNldCBvZiB0aGUgdmVyc2lvblxyXG4gICAgLy9cclxuICAgIGxldCBQQUNLQUdFID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJyk7XHJcbiAgICB0aGlzLnZlcnNpb24gPSBQQUNLQUdFLnZlcnNpb247XHJcblxyXG4gICAgdGhpcy5zaXRlID0gc2l0ZTtcclxuXHJcbiAgICAvLyBSZWNvcmQgdGhlIHNlbGVjdG9yXHJcbiAgICB0aGlzLnNlbCA9IHNlbDtcclxuXHJcbiAgICAvLyBUaGUgT3B0aW9ucyBvYmplY3QgdGhhdCBtYW5hZ2VzIHVzZXIgb3B0aW9uc1xyXG4gICAgdGhpcy5vcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG4gICAgLy8gQSBjb2xsZWN0aW9uIG9mIE1haW4gb2JqZWN0cy5cclxuICAgIHZhciBtYWlucyA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgdGhlIFBsYXlncm91bmQgcnVubmluZywgY3JlYXRpbmcgdGhlIHVzZXIgaW50ZXJmYWNlLlxyXG4gICAgICogVGhpcyBkb2VzIHdhaXQgZm9yIGRvY3VtZW50IHJlYWR5IGJlZm9yZSBjYWxsaW5nXHJcbiAgICAgKiB0aGlzLnN0YXJ0Tm93KCkgdW5sZXNzIHdlIGFyZSBydW5uaW5nIGluIG5vLXdpbmRvd1xyXG4gICAgICogbW9kZS4gSW4gdGhhdCBjYXNlIGl0IHJldHVybnMgYSBzdGFydGVkIGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICB0aGlzLnN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHNlbCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydE5vdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmVhZHkuZ28oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Tm93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCB0aGUgUGxheWdyb3VuZCBydW5uaW5nIG5vdy4gRG9lcyBub3Qgd2FpdCBmb3IgZG9jdW1lbnQgcmVhZHkuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RhcnROb3cgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc2VsIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluID0gbmV3IE1haW4odGhpcywgc2VsKTtcclxuICAgICAgICAgICAgbWFpbnMucHVzaChtYWluKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbih0aGlzLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIG1haW5zLnB1c2gobWFpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG1haW5zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWFpbnNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGEgY29uc3RydWN0ZWQgQWN0aW9uIG9iamVjdCBmcm9tIHRoZSBhdmFpbGFibGUgcGxheWdyb3VuZCBhY3Rpb25zLlxyXG5cdCAqIEBwYXJhbSBhY3Rpb24gVGhlIGFjdGlvbiBkYXRhIGZyb20gdGhlIHNlcnZlci5cclxuXHQgKiBAcmV0dXJucyBBY3Rpb24gb2JqZWN0XHJcblx0ICovXHJcblx0dGhpcy5nZXRBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgIFx0aWYoUGxheWdyb3VuZC5hY3Rpb25zW2FjdGlvbi50YWddICE9PSB1bmRlZmluZWQpIHtcclxuICAgIFx0XHRyZXR1cm4gbmV3IChQbGF5Z3JvdW5kLmFjdGlvbnNbYWN0aW9uLnRhZ10pKHNpdGUsIGFjdGlvbik7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGNvbnNvbGUubG9nKCdQbGF5Z3JvdW5kIGFjdGlvbiAnICsgYWN0aW9uLnRhZyArICcgZG9lcyBub3QgZXhpc3QnKTtcclxuXHQgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcblBsYXlncm91bmQuQWN0aW9uID0gQWN0aW9uO1xyXG5cclxuUGxheWdyb3VuZC5hY3Rpb25zID0ge307XHJcblxyXG5QbGF5Z3JvdW5kLmFkZEFjdGlvbiA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG5cdHRoaXMuYWN0aW9uc1thY3Rpb24udGFnXSA9IGFjdGlvbjtcclxufVxyXG5cclxuQWxsQWN0aW9ucy5hZGRBbGwoUGxheWdyb3VuZCk7IiwiaW1wb3J0IHtUb29sc30gZnJvbSAnLi9ET00vVG9vbHMnO1xyXG5pbXBvcnQge091dHB1dFRhYn0gZnJvbSAnLi9UYWJzL091dHB1dFRhYic7XHJcbmltcG9ydCB7RWRpdG9yVGFifSBmcm9tICcuL1RhYnMvRWRpdG9yVGFiJztcclxuXHJcbmltcG9ydCBtZW51YmFycyBmcm9tICcuLi8uLi9pbWcvbWVudWJhcnMucG5nJztcclxuXHJcblxyXG4vKipcclxuICogTWFuYWdlcyB0aGUgdGFicyBpbiB0aGUgbW9kZWxcclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQHBhcmFtIGVsZW1lbnQgUGFyZW50IGVsZW1lbnRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVGFicyA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQpIHtcclxuICAgIC8vLyBUaGUgY3VycmVudGx5IGFjdGl2ZSB2aWV3L3RhYlxyXG4gICAgdGhpcy5hY3RpdmUgPSAtMTtcclxuXHJcbiAgICAvLy8gVGhlIE1haW4gb2JqZWN0XHJcbiAgICB0aGlzLm1haW4gPSBtYWluO1xyXG5cclxuICAgIC8vLyBUaGUgU2l0ZSBvYmplY3RcclxuICAgIHRoaXMuc2l0ZSA9IG1haW4uc2l0ZTtcclxuXHJcbiAgICAvLyBUaGUgY29sbGVjdGlvbiBvZiB0YWJzXHJcbiAgICB2YXIgdGFicyA9IFtdO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBUaGUgc3RydWN0dXJlOiA8ZGl2IGNsYXNzPVwiY2wtdGFic1wiPjx1bD48L3VsPjxkaXYgY2xhc3M9XCJjbC12aWV3c1wiPjwvZGl2PjwvZGl2PlxyXG4gICAgLy8gZGl2LnRhYnMgLSBFbmNsb3N1cmUgZm9yIGFsbCB0YWJzIGNvbnRlbnRcclxuICAgIC8vIHVsIC0gVGhlIHRhYnMgd2Ugc2VsZWN0IGZyb21cclxuICAgIC8vIHZpZXdzRGl2IC0gVGhlIHZpZXdzIHdpdGggdGhlIHRhYiBjb250ZW50c1xyXG4gICAgLy9cclxuXHJcbiAgICBsZXQgdGFic0RpdiA9IG51bGwsIHVsID0gbnVsbCwgdmlld3NEaXYgPSBudWxsO1xyXG5cclxuXHQvKipcclxuICAgICAqIENyZWF0ZSB0aGUgdGFicyBzeXN0ZW1cclxuXHQgKiBAcGFyYW0gZGl2IFRoZSBkaXYgd2UgcHV0IHRoZSB0YWJzIGludG9cclxuXHQgKi9cclxuXHR0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uKGRpdikge1xyXG4gICAgICAgIC8vIENyZWF0ZTogPGRpdiBjbGFzcz1cImNsLXRhYnNcIj48dWw+PC91bD48ZGl2IGNsYXNzPVwiY2wtdmlld3NcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICB0YWJzRGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtcGctdGFicycpO1xyXG4gICAgICAgIHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICB0YWJzRGl2LmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgICAgICAgdmlld3NEaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdjbC1wZy12aWV3cycpO1xyXG4gICAgICAgIHRhYnNEaXYuYXBwZW5kQ2hpbGQodmlld3NEaXYpO1xyXG5cclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGFic0Rpdik7XHJcblxyXG4gICAgICAgIC8vIENsZWFyIHRoZSB0YWJzIGNvbGxlY3Rpb25cclxuICAgICAgICB0YWJzID0gW107XHJcblxyXG5cdC8vXHR0aGlzLmFkZCgncHJvZ3JhbScpO1xyXG4vL1x0XHR0aGlzLmFkZCgnb3V0cHV0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2FkID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0Zm9yKGNvbnN0IHRhYkRhdGEgb2YgZGF0YSkge1xyXG5cdFx0XHR0aGlzLmFkZCh0YWJEYXRhKTtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5ld1BhcmVudCA9IGZ1bmN0aW9uKHBhbmUpIHtcclxuXHRcdHBhbmUuZGl2LmFwcGVuZENoaWxkKHRhYnNEaXYpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0bGV0IHRhYiA9IG51bGw7XHJcblxyXG5cdCAgICBzd2l0Y2goZGF0YS50eXBlKSB7XHJcblx0XHQgICAgY2FzZSAnZWRpdG9yJzpcclxuXHRcdFx0ICAgIHRhYiA9IG5ldyBFZGl0b3JUYWIodGhpcywgZGF0YSk7XHJcblx0XHQgICAgXHRicmVhaztcclxuXHJcblx0XHQgICAgY2FzZSAnb3V0cHV0JzpcclxuXHRcdCAgICBcdHRhYiA9IG5ldyBPdXRwdXRUYWIodGhpcywgZGF0YSk7XHJcblx0XHQgICAgXHRicmVhaztcclxuXHQgICAgfVxyXG5cclxuXHQgICAgaWYodGFiICE9PSBudWxsKSB7XHJcblx0XHQgICAgdWwuYXBwZW5kQ2hpbGQodGFiLmxpKTtcclxuXHRcdCAgICB2aWV3c0Rpdi5hcHBlbmRDaGlsZCh0YWIudmlldyk7XHJcblx0XHQgICAgdGFicy5wdXNoKHt0YWI6IHRhYiwgbGk6IHRhYi5saSwgdmlldzogdGFiLnZpZXd9KTtcclxuXHJcblx0XHQgICAgdGFiLnNlbGVjdCgpO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBhIHRhYiBieSB0YWcuXHJcblx0ICogQHBhcmFtIHRhZyBUYWIgdGFnXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0dGhpcy5nZXRUYWIgPSBmdW5jdGlvbih0YWcpIHtcclxuXHQgICAgZm9yKGNvbnN0IHRhYiBvZiB0YWJzKSB7XHJcblx0XHQgICAgaWYodGFiLnRhYi50YWcgPT09IHRhZykge1xyXG5cdFx0XHQgICAgcmV0dXJuIHRhYi50YWI7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVuc2VsZWN0QWxsID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIENsZWFyIGFsbCBzZWxlY3Rpb25zXHJcblx0ICAgIC8vXHJcblx0ICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XHJcblx0ICAgIFx0dGFiLmxpLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcblx0ICAgIFx0dGFiLnZpZXcuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuXHQgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gLTE7XHJcbiAgICAgICAgdGFic0Rpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhYnNEaXYpO1xyXG4gICAgICAgIHRhYnNEaXYgPSBudWxsO1xyXG4gICAgICAgIHRhYnMgPSBbXTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jcmVhdGUoZWxlbWVudCk7XHJcbn07XHJcbiIsImltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBFZGl0b3JUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGNvbnN0IHNpdGUgPSB0YWJzLnNpdGU7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdlZGl0b3InKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cclxuXHRsZXQgaW5uZXJWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5hcHBlbmRDaGlsZChpbm5lclZpZXcpO1xyXG5cclxuXHRsZXQgbnVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG51bXMuY2xhc3NMaXN0LmFkZCgnY2wtcGctbnVtcycpO1xyXG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChudW1zKTtcclxuXHJcblx0bGV0IGVkaXRvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGVkaXRvckRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wZy1lZGl0b3InKTtcclxuXHRpbm5lclZpZXcuYXBwZW5kQ2hpbGQoZWRpdG9yRGl2KTtcclxuXHJcblx0Y29uc3QgZWRpdG9yID0gbmV3IHNpdGUuRWRpdG9yKGVkaXRvckRpdiwge1xyXG5cdFx0cmVzaXplOiAnbm9uZScsXHJcblx0XHR0YWI6IHRydWUsXHJcblx0XHRhdXRvSW5kZW50OiB0cnVlLFxyXG5cdFx0c3R5bGVzOiBudWxsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHNjcm9sbGFibGUgPSBlZGl0b3IudGV4dGFyZWE7XHJcblx0c2Nyb2xsYWJsZS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXZlbnQpID0+IHtcclxuXHRcdC8vIGVkaXRvckRpdi5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnMHB4ICcgKyAoLXByZS5zY3JvbGxUb3ApICsgJ3B4JztcclxuXHRcdG51bXMuc2Nyb2xsVG9wID0gc2Nyb2xsYWJsZS5zY3JvbGxUb3A7XHJcblx0fSk7XHJcblxyXG5cdHRoaXMuc2V0ID0gZnVuY3Rpb24odGV4dCkge1xyXG5cdFx0ZWRpdG9yLnRleHRhcmVhLnZhbHVlID0gdGV4dDtcclxuXHJcblx0XHRsZXQgbGluZXMgPSAwO1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyArK2kpe1xyXG5cdFx0XHRpZih0ZXh0W2ldID09PSAnXFxuJykge1xyXG5cdFx0XHRcdGxpbmVzKys7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZihsaW5lcyA8IDEwMCkge1xyXG5cdFx0XHRsaW5lcyA9IDEwMDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBUaGUgZXh0cmEgYWRkZWQgb24gaGVyZSBlbnN1cmVzIHdlIGdldCBwYXN0IGFueSBzY3JvbGwgYmFyXHJcblx0XHQvLyB0aGF0IG1heSB0YWtlIHVwIGhvcml6b250YWwgcm9vbS5cclxuXHRcdG51bXMuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRmb3IobGV0IGk9MTsgaTw9bGluZXMrNTsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRcdHAuaW5uZXJUZXh0ID0gJycgKyBpO1xyXG5cdFx0XHRudW1zLmFwcGVuZENoaWxkKHApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHRoZSBjb250ZW50cyBvZiB0aGUgZWRpdG9yXHJcblx0ICogQHJldHVybnMgeyp8c3RyaW5nfVxyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gZWRpdG9yLnRleHRhcmVhLnZhbHVlO1xyXG5cdH1cclxuXHJcblx0dGhpcy5zZWxlY3QgPSBmdW5jdGlvbigpIHtcclxuXHRcdFRhYi5wcm90b3R5cGUuc2VsZWN0LmNhbGwodGhpcyk7XHJcblxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGVkaXRvci50ZXh0YXJlYS5mb2N1cygpO1xyXG5cdFx0fSwgMCk7XHJcblxyXG5cdH1cclxuXHJcblx0bGV0IHRleHQgPSBgaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtleHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge2V4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cdFxyXG5cdHZpZXcuaW5uZXJUZXh0ID0gXFxgXFxgO1xyXG59XHJcblxyXG5pbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHRcclxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcclxufVxyXG5pbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHRcclxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcclxufVxyXG5cclxuT3V0cHV0VGFiLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVGFiLnByb3RvdHlwZSk7XHJcbk91dHB1dFRhYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPdXRwdXRUYWI7YDtcclxuXHJcblx0dGV4dCA9IGAudGV4dFxyXG4udGh1bWJcclxuXHJcbmxvb3A6XHJcbiAgICBtb3YgcjAsIzdcclxuICAgIG1vdiByMSxyMlxyXG4gICAgYW5kIHIzLHI0XHJcbiAgICBiIGxvb3BgO1xyXG5cclxuXHR0aGlzLnNldCgnJyk7XHJcbn1cclxuXHJcbkVkaXRvclRhYi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRhYi5wcm90b3R5cGUpO1xyXG5FZGl0b3JUYWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRWRpdG9yVGFiOyIsImltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cclxuXHRsZXQgaW5uZXJWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5hcHBlbmRDaGlsZChpbm5lclZpZXcpO1xyXG5cclxuXHRsZXQgbnVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG51bXMuY2xhc3NMaXN0LmFkZCgnY2wtcGctbnVtcycpO1xyXG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChudW1zKTtcclxuXHJcblx0bGV0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xyXG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChwcmUpO1xyXG5cclxuXHRwcmUuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGV2ZW50KSA9PiB7XHJcblx0XHRwcmUuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJzBweCAnICsgKC1wcmUuc2Nyb2xsVG9wKSArICdweCc7XHJcblx0XHRudW1zLnNjcm9sbFRvcCA9IHByZS5zY3JvbGxUb3A7XHJcblx0fSk7XHJcblxyXG5cdHRoaXMuc2V0ID0gZnVuY3Rpb24odGV4dCkge1xyXG5cdFx0cHJlLmlubmVySFRNTCA9IHRleHQ7XHJcblxyXG5cdFx0bGV0IGxpbmVzID0gMDtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKXtcclxuXHRcdFx0aWYodGV4dFtpXSA9PT0gJ1xcbicpIHtcclxuXHRcdFx0XHRsaW5lcysrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYobGluZXMgPCAxMDApIHtcclxuXHRcdFx0bGluZXMgPSAxMDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVGhlIGV4dHJhIGFkZGVkIG9uIGhlcmUgZW5zdXJlcyB3ZSBnZXQgcGFzdCBhbnkgc2Nyb2xsIGJhclxyXG5cdFx0Ly8gdGhhdCBtYXkgdGFrZSB1cCBob3Jpem9udGFsIHJvb20uXHJcblx0XHRudW1zLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0Zm9yKGxldCBpPTE7IGk8PWxpbmVzKzU7IGkrKykge1xyXG5cdFx0XHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0XHRwLmlubmVyVGV4dCA9ICcnICsgaTtcclxuXHRcdFx0bnVtcy5hcHBlbmRDaGlsZChwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IHRleHQgPSBgaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtleHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge2V4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cdFxyXG5cdHZpZXcuaW5uZXJUZXh0ID0gXFxgXFxgO1xyXG59XHJcblxyXG5pbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHRcclxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcclxufVxyXG5pbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHRcclxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcclxufVxyXG5cclxuT3V0cHV0VGFiLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVGFiLnByb3RvdHlwZSk7XHJcbk91dHB1dFRhYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPdXRwdXRUYWI7YDtcclxuXHJcblx0Ly90aGlzLnNldCh0ZXh0ICsgdGV4dCArIHRleHQgKyB0ZXh0KTtcclxuXHR0aGlzLnNldCgnJyk7XHJcbn1cclxuXHJcbk91dHB1dFRhYi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRhYi5wcm90b3R5cGUpO1xyXG5PdXRwdXRUYWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3V0cHV0VGFiOyIsIlxyXG5leHBvcnQgY29uc3QgVGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdHRoaXMudGFicyA9IHRhYnM7XHJcblxyXG5cdHRoaXMudmlldyA9IG51bGw7XHJcblx0dGhpcy50YWcgPSBkYXRhLnRhZztcclxuXHJcblx0bGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHR0aGlzLmxpID0gbGk7XHJcblxyXG5cdGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cdGxpLmFwcGVuZENoaWxkKGEpO1xyXG5cdGEuaW5uZXJUZXh0ID0gZGF0YS5uYW1lO1xyXG5cclxuXHRsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHRsaS5hcHBlbmRDaGlsZChtZW51KTtcclxuXHQvLyBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblx0Ly8gbWVudS5hcHBlbmRDaGlsZChpbWcpO1xyXG5cdC8vIGltZy5zcmMgPSBtZW51YmFycztcclxuXHJcblx0bGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0aGlzLnNlbGVjdCgpO1xyXG5cdH0pO1xyXG5cclxuXHRhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5zZWxlY3QoKTtcclxuXHR9KTtcclxuXHJcblx0dGhpcy5zZXQgPSBmdW5jdGlvbih0ZXh0KSB7fVxyXG5cclxuXHQvL1xyXG5cdC8vIFRoZSBtZW51XHJcblx0Ly8gTWF5YmUgYWN0aXZhdGUgbGF0ZXIgb24/XHJcblx0Ly9cclxuXHQvLyBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Ly8gbWVudURpdi5jbGFzc0xpc3QuYWRkKCdjbC10YWItbWVudScpO1xyXG5cdC8vIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnY2wtbWVudS1vcGVuJyk7XHJcblx0Ly8gbGkuYXBwZW5kQ2hpbGQobWVudURpdik7XHJcblx0Ly9cclxuXHQvLyBjb25zdCBtZW51VUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdC8vIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudVVMKTtcclxuXHQvLyBtZW51VUwuaW5uZXJIVE1MID1cclxuXHQvLyBcdCc8bGk+PGEgY2xhc3M9XCJlZGl0LXVuZG9cIj48c3BhbiBjbGFzcz1cImljb25zLWNsIGljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS13XCI+PC9zcGFuPlVuZG88L2E+PC9saT4nICtcclxuXHQvLyBcdCc8bGk+PGEgY2xhc3M9XCJlZGl0LWRlbGV0ZVwiPjxzcGFuIGNsYXNzPVwiaWNvbnMtY2wgaWNvbnMtY2wtdHJhc2hcIj48L3NwYW4+RGVsZXRlPC9hPjwvbGk+JztcclxuXHQvL1xyXG5cdC8vIGNvbnN0IGNvbm5lY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHQvLyBtZW51RGl2LmFwcGVuZENoaWxkKGNvbm5lY3REaXYpO1xyXG5cdC8vXHJcblx0Ly8gaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblx0Ly8gY29ubmVjdERpdi5hcHBlbmRDaGlsZChpbWcpO1xyXG5cdC8vIGltZy5zcmMgPSBtZW51YmFycztcclxufVxyXG5cclxuVGFiLnByb3RvdHlwZS5zZWxlY3QgID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy50YWJzLnVuc2VsZWN0QWxsKCk7XHJcblxyXG5cdHRoaXMubGkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuXHR0aGlzLnZpZXcuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxufVxyXG4iLCIvKipcclxuICogRHJhZyBhbmQgZHJvcCBzdXBwb3J0IGZvciB0aGUgcGFsZXR0ZVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBEcmFnQW5kRHJvcCA9IGZ1bmN0aW9uKG1haW4pIHtcclxuXHJcblx0bGV0IGRyYWdFbGVtZW50ID0gbnVsbDsgLy8gRE9NIEVsZW1lbnRcclxuXHRsZXQgZHJhZ0l0ZW0gPSBudWxsOyAgICAvLyBQYWxldHRlSXRlbVxyXG5cdGxldCBkcm9wVmlld3MgPSBbXTsgICAgIC8vIFZpZXdcclxuXHJcblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0aWYoZXZlbnQud2hpY2ggPT09IDApIHtcclxuXHRcdFx0XHRtb3VzZVVwKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtb3VzZU1vdmUoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdG1vdXNlTW92ZSh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0bW91c2VVcChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRtb3VzZVVwKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdG1vdXNlVXAodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dGhpcy5kcmFnZ2FibGUgPSAocGFsZXR0ZUl0ZW0pID0+IHtcclxuXHRcdHBhbGV0dGVJdGVtLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGNsaWNrKHBhbGV0dGVJdGVtKTtcclxuXHJcblx0XHRcdG1vdXNlTW92ZShldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cGFsZXR0ZUl0ZW0uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGNsaWNrKHBhbGV0dGVJdGVtKTtcclxuXHJcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRtb3VzZU1vdmUodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dGhpcy5kcm9wcGFibGUgPSAodmlldywgY2FsbGJhY2spID0+IHtcclxuXHRcdGRyb3BWaWV3cy5wdXNoKHtcclxuXHRcdFx0J3ZpZXcnOiB2aWV3LFxyXG5cdFx0XHQnY2FsbGJhY2snOiBjYWxsYmFja1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjbGljayA9IChwYWxldHRlSXRlbSkgPT4ge1xyXG5cdFx0Ly9cclxuXHRcdC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGVsZW1lbnQgYW5kIHNldCBpdCB1cCBmb3IgZHJhZ2dpbmdcclxuXHRcdC8vXHJcblx0XHRjb25zdCBjbG9uZSA9IHBhbGV0dGVJdGVtLnBhbGV0dGVJbWFnZSgpO1xyXG5cdFx0bWFpbi5lbGVtZW50LmFwcGVuZENoaWxkKGNsb25lKTtcclxuXHRcdGNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHRcdGNsb25lLnN0eWxlLnRvcCA9IDA7XHJcblx0XHRjbG9uZS5zdHlsZS5sZWZ0ID0gMDtcclxuXHRcdGNsb25lLnN0eWxlLnpJbmRleCA9IDEwMDtcclxuXHRcdGNsb25lLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuXHJcblx0XHRkcmFnSXRlbSA9IHBhbGV0dGVJdGVtO1xyXG5cdFx0ZHJhZ0VsZW1lbnQgPSBjbG9uZTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdXNlTW92ZSA9ICh4LCB5KSA9PiB7XHJcblx0XHRpZihkcmFnRWxlbWVudCAhPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCByZWN0ID0gbWFpbi5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRjb25zdCBtYWluWCA9IHJlY3QubGVmdCArIG1haW4uZWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG5cdFx0XHRjb25zdCBtYWluWSA9IHJlY3QudG9wICArIG1haW4uZWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRkcmFnRWxlbWVudC5zdHlsZS5sZWZ0ID0gKHggLSBtYWluWCAtIGRyYWdFbGVtZW50LmNsaWVudFdpZHRoIC8gMikgKyAncHgnO1xyXG5cdFx0XHRkcmFnRWxlbWVudC5zdHlsZS50b3AgPSAoeSAtIG1haW5ZIC0gZHJhZ0VsZW1lbnQuY2xpZW50SGVpZ2h0IC8gMikgKyAncHgnO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3VzZVVwID0gKHgsIHkpID0+IHtcclxuXHRcdGlmKGRyYWdFbGVtZW50ICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHRmb3IoY29uc3QgdmlldyBvZiBkcm9wVmlld3MpIHtcclxuXHRcdFx0XHQvL1xyXG5cdFx0XHRcdC8vIElzIHRoZSB2aWV3IGVuYWJsZWQ/XHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHRjb25zdCB2aWV3RWxlbWVudCA9IHZpZXcudmlldy5lbGVtZW50O1xyXG5cdFx0XHRcdGlmKHZpZXdFbGVtZW50LnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vXHJcblx0XHRcdFx0Ly8gRGV0ZXJtaW5lIHgseSBpbiB0aGUgY2FudmFzXHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHRjb25zdCByZWN0ID0gdmlld0VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0Y29uc3Qgdmlld1ggPSByZWN0LmxlZnQgKyB2aWV3RWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG5cdFx0XHRcdGNvbnN0IHZpZXdZID0gcmVjdC50b3AgKyB2aWV3RWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRcdGlmKHggPj0gdmlld1ggJiZcclxuXHRcdFx0XHRcdHkgPj0gdmlld1kgJiZcclxuXHRcdFx0XHRcdHggPCB2aWV3WCArIChyZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0KSAmJlxyXG5cdFx0XHRcdFx0eSA8IHZpZXdZICsgKHJlY3QuYm90dG9tIC0gcmVjdC50b3ApKSB7XHJcblx0XHRcdFx0XHR2aWV3LmNhbGxiYWNrKGRyYWdJdGVtLCB4IC0gdmlld1gsIHkgLSB2aWV3WSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1haW4uZWxlbWVudC5yZW1vdmVDaGlsZChkcmFnRWxlbWVudCk7XHJcblx0XHRcdGRyYWdFbGVtZW50ID0gbnVsbDtcclxuXHRcdFx0ZHJhZ0l0ZW0gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbn0iLCIvKipcclxuICogU2ltcGxlIERvY3VtZW50IHJlYWR5IGZ1bmN0aW9uLCBlcXVpdmFsZW50IHRvIGpRdWVyeSdzIGRvY3VtZW50IHJlYWR5LlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBSZWFkeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4vKipcclxuICogQ2FsbCBhIGZ1bmN0aW9uIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWRvbi5cclxuICogQHBhcmFtIGZuIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBkb2N1bWVudCByZWFkeVxyXG4gKi9cclxuUmVhZHkuZ28gPSBmdW5jdGlvbihmbikge1xyXG4gICAgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50ID8gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpe1xyXG4gICAgICAgIGZuKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtQbGF5Z3JvdW5kfSBmcm9tIFwiLi9QbGF5Z3JvdW5kL1BsYXlncm91bmRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5Z3JvdW5kRmFjdG9yeSA9IGZ1bmN0aW9uKCkge31cclxuXHJcblBsYXlncm91bmRGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcblx0ZnVuY3Rpb24gaW5zdGFsbCgpIHtcclxuXHRcdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNsLXBsYXlncm91bmQnKTtcclxuXHRcdGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcblx0XHRcdGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG5cdFx0XHRlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRjb25zdCBwbGF5Z3JvdW5kID0gbmV3IFBsYXlncm91bmQoc2l0ZSwgZWxlbWVudCwganNvbik7XHJcblx0XHRcdHBsYXlncm91bmQuc3RhcnROb3coKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNpdGUuc3RhcnQoICgpID0+IHtcclxuXHRcdGluc3RhbGwoKTtcclxuXHR9KTtcclxuXHJcblxyXG5cdHNpdGUubWVzc2FnZUxpc3RlbmVyKChtc2csIGRhdGEpID0+IHtcclxuXHRcdHN3aXRjaChtc2cpIHtcclxuXHRcdFx0Y2FzZSAnY2wtcXVpei1hZnRlci1pbnN0YWxsZWQnOlxyXG5cdFx0XHRcdGluc3RhbGwoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2NsLWdyYWRlcy1ncmFkZXItaW5zdGFsbGVkJzpcclxuXHRcdFx0XHRpbnN0YWxsKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRzaXRlLlBsYXlncm91bmQgPSBQbGF5Z3JvdW5kO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
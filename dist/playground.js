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
/******/ 	var hotCurrentHash = "f081598be4430cdbad17";
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
          sources[source] = {
            name: tab.name,
            data: tab.get()
          };
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
    _Tab__WEBPACK_IMPORTED_MODULE_0__["Tab"].prototype.select.call(this);
    setTimeout(function () {
      editor.textarea.focus();
    }, 0);
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9fcGxheWdyb3VuZC5zY3NzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL19wbGF5Z3JvdW5kLnNjc3M/NDZlMSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbWcvYmFycy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvaW1nL21lbnUtY2hlY2sucG5nIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2ltZy9tZW51YmFycy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9BY3Rpb25zL0Fib3V0QWN0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvQWN0aW9ucy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9BY3Rpb25zL0FsbEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9BY3Rpb25zL1NhdmVBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9ET00vVG9vbHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9HcmFwaGljcy9Ub2FzdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL01haW4uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9NZW51LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1BhbmUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9QbGF5Z3JvdW5kLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVGFicy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1RhYnMvRWRpdG9yVGFiLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVGFicy9PdXRwdXRUYWIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9UYWJzL1RhYi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1VJL0RyYWdBbmREcm9wLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVXRpbGl0eS9SZWFkeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kRmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJQbGF5Z3JvdW5kRmFjdG9yeSIsImNyZWF0ZSIsIlNpdGUiLCJzaXRlIiwiUGxheWdyb3VuZCIsIkFib3V0QWN0aW9uIiwib3B0aW9ucyIsIkFjdGlvbiIsImNhbGwiLCJkbyIsIm1haW4iLCJwcm90b3R5cGUiLCJjb250ZW50Iiwicm9vdCIsInBhY2thZ2Vqc29uIiwidmVyc2lvbiIsImRpYWxvZyIsIkRpYWxvZyIsInRpdGxlIiwiT2JqZWN0IiwiY29uc3RydWN0b3IiLCJ0YWciLCJnZXRTb3VyY2VzIiwic291cmNlcyIsInVuZGVmaW5lZCIsInNvdXJjZSIsInRhYiIsImdldFRhYiIsIm5hbWUiLCJkYXRhIiwiZ2V0IiwiQWxsQWN0aW9ucyIsImFkZEFsbCIsImFkZEFjdGlvbiIsIlNhdmVBY3Rpb24iLCJwYXJhbXMiLCJhcHBUYWciLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsImFwaSIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiaGFzRXJyb3IiLCJ0b2FzdCIsImNhdGNoIiwiZXJyb3IiLCJUb29scyIsImlzVmlzaWJsZSIsImVsZW0iLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImdldENsaWVudFJlY3RzIiwibGVuZ3RoIiwiYWRkQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkQ2xhc3NlcyIsImNsYXNzZXMiLCJzcGxpdCIsImZvckVhY2giLCJjbHMiLCJyZW1vdmVDbGFzcyIsInJlZ0V4IiwiUmVnRXhwIiwicmVwbGFjZSIsImNyZWF0ZUNsYXNzZWREaXYiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhZGRDb250ZW50IiwiaXNTdHJpbmciLCJpbm5lckhUTUwiLCJpc0VsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInZhbCIsInRvU3RyaW5nIiwibm9kZVZhbHVlIiwib2Zmc2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJzY3JvbGxMZWZ0Iiwid2luZG93IiwicGFnZVhPZmZzZXQiLCJ0b3AiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImNoaWxkIiwidGFnTmFtZSIsImNoaWxkTm9kZXMiLCJub2RlIiwiVG9hc3QiLCJkZWZhdWx0RHVyYXRpb24iLCJpbnRlclRvYXN0RGVsYXkiLCJtZXNzYWdlcyIsImFjdGl2ZSIsInNob3ciLCJtZXNzYWdlIiwic3BsaWNlIiwibXNnIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRpbWUiLCJwdXNoIiwianNvbkVycm9ycyIsImpzb25BcGkiLCJlcnJvcnMiLCJNYWluIiwicGxheWdyb3VuZCIsIm1lbnUiLCJ0YWJzIiwiZGl2T3ZlcmxheSIsImRpdldvcmsiLCJpbml0aWFsaXplIiwic3R5bGUiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiY29udGFpbnMiLCJSZXNpemVyIiwiaGFuZGxlIiwiZHJhZ0FuZERyb3AiLCJEcmFnQW5kRHJvcCIsIk1lbnUiLCJyb290UGFuZSIsIlBhbmUiLCJsb2FkIiwicGFuZSIsIlN0cmluZyIsInBhcnNlIiwic2V0IiwibmV3VGFiIiwibW9kYWwiLCJuYXYiLCJ1bCIsIm1lbnVzIiwiYWN0aW9uIiwidG9wTEkiLCJhIiwiaW5uZXJUZXh0IiwiZ2V0QWN0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdWJVTCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwib3BlbiIsImNsb3NlQWxsIiwic3ViTWVudSIsInN1YkxJIiwiY2xvc2VMaXN0ZW5lciIsInRhcmdldCIsInBhcmVudE5vZGUiLCJsaSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmFibGUiLCJzZWwiLCJxdWVyeVNlbGVjdG9yIiwiZmluZCIsImNsaWNrIiwiY2xvc3VyZSIsIk9wdGlvbnMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJnZXRBUEkiLCJtb2RlIiwib2JqIiwibW9kZU9iaiIsInVybCIsImNvbnRlbnRUeXBlIiwiZXh0cmEiLCJwYXJlbnQiLCJtaW5TcGxpdCIsIm1heFNwbGl0IiwiY2hpbGQxIiwiY2hpbGQyIiwiaG9yaXpvbnRhbFNwbGl0IiwiaG9yaXoiLCJwZXJjZW50YWdlIiwiVGFicyIsImhvcml6b250YWwiLCJjaGlsZDFEYXRhIiwiY2hpbGQyRGF0YSIsImZsZXhEaXJlY3Rpb24iLCJiYXIiLCJzdGFydERyYWdnaW5nIiwicGFnZVgiLCJwYWdlWSIsIm1vdXNlTW92ZSIsIm1vdXNlVXAiLCJ0b3VjaCIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2hNb3ZlIiwidG91Y2hFbmQiLCJ0b3VjaENhbmNlbCIsInN0YXJ0WCIsInN0YXJ0WSIsIngiLCJ5IiwiZW5kRHJhZ2dpbmciLCJkcmFnZ2luZyIsIm1haW5YIiwid2lkIiwicmlnaHQiLCJwZXIiLCJtYWluWSIsImhpdCIsImJvdHRvbSIsIndoaWNoIiwid2lkdGgiLCJjb2xsZWN0aW9uIiwiUEFDS0FHRSIsInJlcXVpcmUiLCJtYWlucyIsInN0YXJ0Iiwic3RhcnROb3ciLCJSZWFkeSIsImdvIiwiRWxlbWVudCIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJhY3Rpb25zIiwidGFic0RpdiIsInZpZXdzRGl2IiwidGFiRGF0YSIsIm5ld1BhcmVudCIsIkVkaXRvclRhYiIsIk91dHB1dFRhYiIsInZpZXciLCJzZWxlY3QiLCJ1bnNlbGVjdEFsbCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIlRhYiIsImlubmVyVmlldyIsIm51bXMiLCJlZGl0b3JEaXYiLCJlZGl0b3IiLCJFZGl0b3IiLCJyZXNpemUiLCJhdXRvSW5kZW50Iiwic3R5bGVzIiwic2Nyb2xsYWJsZSIsInRleHRhcmVhIiwidGV4dCIsInZhbHVlIiwibGluZXMiLCJwIiwiZm9jdXMiLCJwcmUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJkcmFnRWxlbWVudCIsImRyYWdJdGVtIiwiZHJvcFZpZXdzIiwiZHJhZ2dhYmxlIiwicGFsZXR0ZUl0ZW0iLCJkcm9wcGFibGUiLCJjYWxsYmFjayIsImNsb25lIiwicGFsZXR0ZUltYWdlIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjdXJzb3IiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInZpZXdFbGVtZW50Iiwidmlld1giLCJ2aWV3WSIsImZuIiwiYXR0YWNoRXZlbnQiLCJyZWFkeVN0YXRlIiwiaW5zdGFsbCIsImpzb24iLCJ0ZXh0Q29udGVudCIsIm1lc3NhZ2VMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQTZCO0FBQzdCLHFDQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNkJBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUFrQiw4QkFBOEI7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLEtBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZSw0QkFBNEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBZSw0QkFBNEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDLEdBQUNGLFFBQVEsQ0FBQzNLLE1BQXhCLEVBQWdDNkssQ0FBQyxFQUFqQyxFQUFxQztBQUNwQyxVQUFJM0ssT0FBTyxHQUFHeUssUUFBUSxDQUFDRSxDQUFELENBQXRCO0FBQ0EsVUFBTW9ELElBQUksR0FBR3BQLElBQUksQ0FBQ2lHLEtBQUwsQ0FBVzVFLE9BQU8sQ0FBQ2dPLFdBQW5CLENBQWI7QUFDQWhPLGFBQU8sQ0FBQ21CLFNBQVIsR0FBb0IsRUFBcEI7QUFDQSxVQUFNcUMsVUFBVSxHQUFHLElBQUk5RyxpRUFBSixDQUFlRCxJQUFmLEVBQXFCdUQsT0FBckIsRUFBOEIrTixJQUE5QixDQUFuQjtBQUNBdkssZ0JBQVUsQ0FBQzZHLFFBQVg7QUFDQTtBQUNEOztBQUVENU4sTUFBSSxDQUFDMk4sS0FBTCxDQUFZLFlBQU07QUFDakIwRCxXQUFPO0FBQ1AsR0FGRDtBQUtBclIsTUFBSSxDQUFDd1IsZUFBTCxDQUFxQixVQUFDbEwsR0FBRCxFQUFNNUUsSUFBTixFQUFlO0FBQ25DLFlBQU80RSxHQUFQO0FBQ0MsV0FBSyx5QkFBTDtBQUNDK0ssZUFBTztBQUNQOztBQUVELFdBQUssNEJBQUw7QUFDQ0EsZUFBTztBQUNQO0FBUEY7QUFVQSxHQVhEO0FBYUFyUixNQUFJLENBQUNDLFVBQUwsR0FBa0JBLGlFQUFsQjtBQUNBLENBaENELEMiLCJmaWxlIjoicGxheWdyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlBsYXlncm91bmRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiUGxheWdyb3VuZFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVfbmFtZV9cIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiZjA4MTU5OGJlNDQzMGNkYmFkMTdcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRmb3IodmFyIGNodW5rSWQgaW4gaW5zdGFsbGVkQ2h1bmtzKVxuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmICghbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCkgY29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdClcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm90IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiUGxheWdyb3VuZFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jbC9kaXN0L1wiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2luZGV4LmpzXCIsXCJjb21tb25cIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5jbC1wbGF5Z3JvdW5kIGRpdi50b2FzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi4zZW0pO1xcbiAgei1pbmRleDogNDAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuNHMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAzMGVtLzIpO1xcbiAgd2lkdGg6IDMwZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC41ZW07XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi50b2FzdC50b2FzdC1hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuNHM7XFxuICB6LWluZGV4OiA0MDA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM4MDgwODA7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzAwNzk2QjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIGEsXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkgYTpsaW5rLFxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIGE6dmlzaXRlZCB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgaW1nLmNoZWNrIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHdpZHRoOiAxOXB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgY29udGVudDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ltZy9tZW51LWNoZWNrLnBuZ1wiKSkgKyBcIik7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgPiBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMmVtIDAuMjVlbSAwLjVlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIGEsXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIGE6bGluayxcXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkgYTp2aXNpdGVkIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMnMsIHotaW5kZXggMHMgbGluZWFyIDAuMDFzO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDEwMCU7XFxuICBtYXJnaW46IDFweCAwIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwgPiBsaSB7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwgPiBsaSBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4ZW07XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCA+IGxpLm1lbnUtZGlzYWJsZWQgYSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuY2wtcGctbWVudS1vcGVuIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4ycztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5lZGl0LW1lbnUgYSB7XFxuICB3aWR0aDogNmVtO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLm9wdGlvbi1tZW51IGEge1xcbiAgd2lkdGg6IDExZW07XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuZmlsZS1tZW51IGEge1xcbiAgd2lkdGg6IDZlbTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5oZWxwLW1lbnUgYSB7XFxuICB3aWR0aDogNy41ZW07XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgLnVsLXN0YXRlLWFjdGl2ZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIGxpLm1lbnUtZGl2aWRlciB7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2Lndvcmsge1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiAjYTAwO1xcbiAgb3BhY2l0eTogMC4wNTtcXG4gIHotaW5kZXg6IDIwMDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctbWFpbiB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC1mdWxsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC13aW5kb3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjYWFhYWFhO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC1nYXAtYmVmb3JlLFxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGhlaWdodDogMXB4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC1nYXAtYWZ0ZXIge1xcbiAgaGVpZ2h0OiAxZW07XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6ICNkZGQ7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogM3B4IDAgMCAycHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjI1ZW0gMC40NWVtIDA7XFxuICBtaW4td2lkdGg6IDZlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIG1hcmdpbjogMXB4IDNweCAtMXB4IDA7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgei1pbmRleDogMTg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAwLjI1ZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBvdXRsaW5lOiAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOm50aC1jaGlsZCgyKSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6bnRoLWNoaWxkKDIpIGltZyB7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgei1pbmRleDogMjI7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaS5zZWxlY3RlZCBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXdzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDI5cHg7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyBkaXYuY2wtcGctdmlldyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAyMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIGRpdi5jbC1wZy12aWV3LnNlbGVjdGVkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYygxMDAlIC0gMTdweCk7XFxuICB0b3A6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDI3cHg7XFxuICB0b3A6IDRweDtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSBkaXYgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDMwcHggMCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOGVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB1bCA+IGxpLm1lbnUtZGlzYWJsZWQgYSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudS5jbC1tZW51LW9wZW4ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yb290LFxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQsXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtcmlnaHQsXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtdG9wLFxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODg4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1sZWZ0IGRpdi5jbC1iYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3Age1xcbiAgZmxleDogMCAxIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODg4O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3AgZGl2LmNsLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm90dG9tOiAtNXB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHotaW5kZXg6IDI7XFxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yb290IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuZGl2LmNsLXBnLW51bXMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgd2lkdGg6IDJlbTtcXG4gIHBhZGRpbmc6IDRweCAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZGl2LmNsLXBnLW51bXMgcCB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDNweCAwIDA7XFxuICBib3JkZXI6IDA7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAjNzc3O1xcbn1cXG5cXG5kaXYuY2wtcGctYWJvdXQge1xcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXFxuZGl2LmNsLXBnLWFib3V0IGZpZ3VyZSB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDIyNXB4O1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbmRpdi5jbC1wZy1hYm91dCBkaXYuY2wtcGctYWJvdXQtZGl2IHtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYgaDEge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiBkaXYuY2wtcGctZWRpdG9yIHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiBkaXYuY2wtcGctZWRpdG9yIHRleHRhcmVhIHtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNHB4IDAgMCAzcHg7XFxuICBib3JkZXI6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3Lm91dHB1dCA+IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0ID4gZGl2IHByZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ltZy9iYXJzLnBuZ1wiKSkgKyBcIik7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDRweCAwIDAgM3B4O1xcbiAgYm9yZGVyOiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL19wbGF5Z3JvdW5kLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMTM5MTUzZDZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vX3BsYXlncm91bmQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL19wbGF5Z3JvdW5kLnNjc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE0QUFBQWdBZ01BQUFCZmdLRUVBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQUZ6VWtkQ0FLN09IT2tBQUFBTVVFeFVSZi8vLytMLzkrSC85K1gvK09oNEhUTUFBQUFlU1VSQlZBalhZMkFnRXZ6Ly8vOER3NnBWcXhZd2hJYUdCbEJPRUFrQVUyTVkzdERmOWFVQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJNQUFBQU9DQVlBQUFETkdDZUpBQUFCUzJsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzQyTFdNeE5ESWdOemt1TVRZd09USTBMQ0F5TURFM0x6QTNMekV6TFRBeE9qQTJPak01SUNBZ0lDQWdJQ0FpUGdvZ1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNEtJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWk4K0NpQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K25oeGc3d0FBQVZkSlJFRlVPSTJWMGJGclUxRVVCK0R2UldOc0lKTlF1NnQxRTh5a3VEZ0tCUWxJRndkSGtRNytBd1U3dXJsMEZNUTVjWEZ3c29NZ3VJaFNxb1B0SkE1MUVIR29oZWRRZmc1NVNWOWphZUtGdzcxd0R0ODloeU9KZXN4NjB1ODNzclIwTGx3S3ZkQXJKb0dpS0taRHE2dnpCb091bloxcnVJZ2ZHUHdYbG03M2xJT0RXN2EzbDVYbEluN2hOZnJZTmN1WTJkdVRYbTh1UEFnZlFqL2NENHVoR1FSVHNlenZ5OHBLSnp3TVg4S3pjQ0djSGlHSEdIUGhTbGdJUlpyTlZqWTNoMUJaeXRwYXArcm9VM2dhNXY5QnhqOFBrUmRoTjd3TGQ4TGx0TnZ0cks5M3d0M3dNUXpDK1dPUkdpWVU0WHJZQ2w4cjlGNjRIVGJDKzNDenFqc2VxbUdqT0JPZWhPL2hXM2haNFk5RDYwUm92SUNqWUNNOENqOHI5SE80T2hVYVk2TTRCRnZoVGZnZDNvYXo0OXpFOXV2Um1KQkhyei9ZUUlubjFWM1B6OURaMFE2NzRWVzE3YWxkSlRtaFlEamFqVm1oSlA0Q3kxWlU2K2RDZzNBQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFCQU1BQUFEdDNlSlNBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFFbEJNVkVVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFEZ0t4bWlBQUFBQlhSU1RsTUF2L0lCRFZhUXNqOEFBQUFCWWt0SFJBQ0lCUjFJQUFBQUNYQklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUFIRWxFUVZRSTEyTmd3QTBZbGNCQUFNRmdkZ0VEQXdTRFBEVzRBUUIyWEF4YjhFblZxUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwiXHJcbmltcG9ydCAnLi9fcGxheWdyb3VuZC5zY3NzJztcclxuaW1wb3J0IHtQbGF5Z3JvdW5kfSBmcm9tICcuL2pzL1BsYXlncm91bmQvUGxheWdyb3VuZCc7XHJcbmltcG9ydCB7UGxheWdyb3VuZEZhY3Rvcnl9IGZyb20gJy4vanMvUGxheWdyb3VuZEZhY3RvcnknO1xyXG5cclxuZXhwb3J0IHtQbGF5Z3JvdW5kfTtcclxuZXhwb3J0IHtQbGF5Z3JvdW5kIGFzIGRlZmF1bHR9O1xyXG5cclxuUGxheWdyb3VuZEZhY3RvcnkuY3JlYXRlKFNpdGUuc2l0ZSk7XHJcblxyXG5TaXRlLlBsYXlncm91bmQgPSBQbGF5Z3JvdW5kO1xyXG5cclxuIiwiaW1wb3J0IHtBY3Rpb259IGZyb20gJy4vQWN0aW9uJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdkaWFsb2ctY2wnO1xyXG5pbXBvcnQgcGFja2FnZWpzb24gZnJvbSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJztcclxuXHJcbmV4cG9ydCBjb25zdCBBYm91dEFjdGlvbiA9IGZ1bmN0aW9uKHNpdGUsIG9wdGlvbnMpIHtcclxuXHRBY3Rpb24uY2FsbCh0aGlzLCBzaXRlLCBvcHRpb25zKTtcclxuXHJcblx0dGhpcy5kbyA9IGZ1bmN0aW9uKG1haW4pIHtcclxuXHRcdEFjdGlvbi5wcm90b3R5cGUuZG8uY2FsbCh0aGlzLCBtYWluKTtcclxuXHJcblx0XHQvLyBEaWFsb2cgYm94IGNvbnRlbnRzXHJcblx0XHRsZXQgY29udGVudCA9IGBcclxuPGZpZ3VyZT48aW1nIHNyYz1cIiR7c2l0ZS5yb290fS92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbWcvcGxheWdyb3VuZC5qcGdcIiBhbHQ9XCJDaXJzaW0gTG9nb1wiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiMjI1XCI+PC9maWd1cmU+XHJcbjxkaXYgY2xhc3M9XCJjbC1wZy1hYm91dC1kaXZcIj5cclxuPGgxPkNvdXJzZUxpYiBQbGF5Z3JvdW5kPC9oMT5cclxuPHA+VmVyc2lvbjogJHtwYWNrYWdlanNvbi52ZXJzaW9ufTwvcD5cclxuPHA+V3JpdHRlbiBieTogQ2hhcmxlcyBCLiBPd2VuPC9wPjwvZGl2PmA7XHJcblxyXG5cdFx0Y29uc3QgZGlhbG9nID0gbmV3IERpYWxvZyh7XHJcblx0XHRcdHRpdGxlOiAnQWJvdXQgdGhlIFBsYXlncm91bmQnLFxyXG5cdFx0XHRjb250ZW50OiBjb250ZW50LFxyXG5cdFx0XHQnYWRkQ2xhc3MnOiAnY2wtcGctYWJvdXQnXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG59XHJcblxyXG5BYm91dEFjdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFjdGlvbi5wcm90b3R5cGUpO1xyXG5BYm91dEFjdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBYm91dEFjdGlvbjtcclxuXHJcbkFib3V0QWN0aW9uLnRhZyA9ICdhYm91dCc7IiwiLyoqXHJcbiAqIEJhc2Ugb2JqZWN0IGZvciBhbiBhY3Rpb24uXHJcbiAqIEBwYXJhbSBzaXRlIFNpdGUgb2JqZWN0XHJcbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIHRoaXMgYWN0aW9uXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEFjdGlvbiA9IGZ1bmN0aW9uKHNpdGUsIG9wdGlvbnMpIHtcclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGFsbCBzb3VyY2VzIGZvciB0aGlzIGFjdGlvbi5cclxuXHQgKlxyXG5cdCAqIEJhc2VkIG9uIHRoZSBvcHRpb24gJ3NvdXJjZXMnLCB3aGljaCBhcmUgdGFiIHRhZ3MuXHJcblx0ICogQHJldHVybiBvYmplY3Qgd2l0aCB0YWIgbmFtZXMgYW5kIHNvdXJjZXMuXHJcblx0ICovXHJcblx0dGhpcy5nZXRTb3VyY2VzID0gZnVuY3Rpb24oKSB7XHJcblx0XHQvLyBHZXQgdGhlIHJlcXVpc2l0ZSB0YWIgY29udGVudHNcclxuXHRcdGNvbnN0IHNvdXJjZXMgPSB7fTtcclxuXHJcblx0XHRpZihvcHRpb25zLnNvdXJjZXMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnNvdXJjZXMgPT09IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuIHNvdXJjZXM7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGNvbnN0IHNvdXJjZSBvZiBvcHRpb25zLnNvdXJjZXMpIHtcclxuXHRcdFx0Y29uc3QgdGFiID0gdGhpcy5tYWluLmdldFRhYihzb3VyY2UpO1xyXG5cdFx0XHRpZih0YWIgIT09IG51bGwpIHtcclxuXHRcdFx0XHRzb3VyY2VzW3NvdXJjZV0gPSB7bmFtZTogdGFiLm5hbWUsIGRhdGE6IHRhYi5nZXQoKX07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gc291cmNlcztcclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuQWN0aW9uLnByb3RvdHlwZS5kbyA9IGZ1bmN0aW9uKG1haW4pIHtcclxuXHR0aGlzLm1haW4gPSBtYWluO1xyXG59IiwiaW1wb3J0IHtTYXZlQWN0aW9ufSBmcm9tICcuL1NhdmVBY3Rpb24nO1xyXG5pbXBvcnQge0Fib3V0QWN0aW9ufSBmcm9tICcuL0Fib3V0QWN0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBBbGxBY3Rpb25zID0gZnVuY3Rpb24oKSB7fVxyXG5cclxuQWxsQWN0aW9ucy5hZGRBbGwgPSBmdW5jdGlvbihQbGF5Z3JvdW5kKSB7XHJcblx0UGxheWdyb3VuZC5hZGRBY3Rpb24oU2F2ZUFjdGlvbik7XHJcblx0UGxheWdyb3VuZC5hZGRBY3Rpb24oQWJvdXRBY3Rpb24pO1xyXG59IiwiaW1wb3J0IHtBY3Rpb259IGZyb20gJy4vQWN0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBTYXZlQWN0aW9uID0gZnVuY3Rpb24oc2l0ZSwgb3B0aW9ucykge1xyXG5cdEFjdGlvbi5jYWxsKHRoaXMsIHNpdGUsIG9wdGlvbnMpO1xyXG5cclxuXHR0aGlzLmRvID0gZnVuY3Rpb24obWFpbikge1xyXG5cdFx0QWN0aW9uLnByb3RvdHlwZS5kby5jYWxsKHRoaXMsIG1haW4pO1xyXG5cclxuXHRcdC8vIEdldCB0aGUgcmVxdWlzaXRlIHRhYiBjb250ZW50c1xyXG5cdFx0Y29uc3Qgc291cmNlcyA9IHRoaXMuZ2V0U291cmNlcygpO1xyXG5cclxuXHRcdGNvbnN0IHBhcmFtcyA9IHtcclxuXHRcdFx0YXBwVGFnOiBvcHRpb25zLmFwcFRhZyxcclxuXHRcdFx0bmFtZTogb3B0aW9ucy5uYW1lLFxyXG5cdFx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeShzb3VyY2VzKSxcclxuXHRcdFx0dHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0XHR9O1xyXG5cclxuXHRcdHNpdGUuYXBpLnBvc3QoJy9hcGkvZmlsZXN5c3RlbS9zYXZlJywgcGFyYW1zKVxyXG5cdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblx0XHRcdFx0aWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRzaXRlLnRvYXN0KHRoaXMsICdTdWNjZXNzZnVsbHkgc2F2ZWQgdG8gc2VydmVyJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5TYXZlQWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWN0aW9uLnByb3RvdHlwZSk7XHJcblNhdmVBY3Rpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2F2ZUFjdGlvbjtcclxuXHJcblNhdmVBY3Rpb24udGFnID0gJ3NhdmUnOyIsIlxyXG5cclxuLyoqXHJcbiAqIENvbnZlbmllbmNlIGZ1bmN0aW9ucyBmb3IgdGhlIERPTS5cclxuICogVG9vbHMgdGhhdCBhdm9pZCBoYXZpbmcgdG8gaGF2ZSBqUXVlcnkgaW5zdGFsbGVkLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBUb29scyA9IGZ1bmN0aW9uKCkge1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIElzIGFuIGVsZW1lbnQgdmlzaWJsZT9cclxuICogQm9ycm93ZWQgZnJvbSBqUXVlcnkhXHJcbiAqIEBwYXJhbSBlbGVtXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuVG9vbHMuaXNWaXNpYmxlID0gZnVuY3Rpb24oIGVsZW0gKSB7XHJcbiAgICByZXR1cm4gISEoIGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZCBhIGNsYXNzIHRvIGFuIGVsZW1lbnRcclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBhZGQgdG9cclxuICogQHBhcmFtIGNsYXNzTmFtZSBDbGFzcyB0byBhZGRcclxuICovXHJcblRvb2xzLmFkZENsYXNzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xyXG59XHJcblxyXG5Ub29scy5hZGRDbGFzc2VzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc3Nlcykge1xyXG4gICAgaWYoY2xhc3NlcyA9PT0gdW5kZWZpbmVkIHx8IGNsYXNzZXMgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goKGNscykgPT4ge1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzKGVsZW1lbnQsIGNscyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuVG9vbHMucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICAgIGxldCByZWdFeCA9IG5ldyBSZWdFeHAoJ1xcXFxiJyArIGNsYXNzTmFtZSArICdcXFxcYicsICdnJyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmVnRXgsIFwiXCIpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgRElWIHdpdGggYSBwcm92aWRlZCBjbGFzcyBuYW1lLlxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIENsYXNzIHRvIGFkZCB0byB0aGUgZGl2XHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGRpdi4gSFRNTCBvciBFbGVtZW50XHJcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBDcmVhdGVkIERPTSBFbGVtZW50XHJcbiAqL1xyXG5Ub29scy5jcmVhdGVDbGFzc2VkRGl2ID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBjb250ZW50KSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBUb29scy5hZGRDbGFzcyhkaXYsIGNsYXNzTmFtZSk7XHJcbiAgICBpZihjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuXHQgICAgVG9vbHMuYWRkQ29udGVudChkaXYsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBjb250ZW50IHRvIGFuIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gYWRkIHRvXHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQuIENhbiBiZSBIVE1MIG9yIGFuIEVsZW1lbnQuXHJcbiAqL1xyXG5Ub29scy5hZGRDb250ZW50ID0gZnVuY3Rpb24oZWxlbWVudCwgY29udGVudCkge1xyXG4gICAgaWYoVG9vbHMuaXNTdHJpbmcoY29udGVudCkpIHtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSBjb250ZW50O1xyXG4gICAgfSBlbHNlIGlmKFRvb2xzLmlzRWxlbWVudChjb250ZW50KSkge1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJcyB0aGUgcGFzc2VkIHZhbHVlIGEgc3RyaW5nP1xyXG4gKiBAcGFyYW0gdmFsXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuVG9vbHMuaXNTdHJpbmcgPSBmdW5jdGlvbih2YWwpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCAoKCEhdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpO1xyXG59XHJcblxyXG4vKipcclxuICogSXMgdGhlIHBhc3NlZCB2YWx1ZSBhbiBIVE1MRWxlbWVudD9cclxuICogQHBhcmFtIHZhbFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcblRvb2xzLmlzRWxlbWVudCA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgcmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCAmJiB2YWwubm9kZVZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgYW4gZWxlbWVudCAoc3BlY2lmaWNhbGx5IGl0cyBib3JkZXIgYm94LCB3aGljaCBleGNsdWRlcyBtYXJnaW5zKSByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnQuXHJcbiAqIEBwYXJhbSBlbGVtZW50XHJcbiAqL1xyXG5Ub29scy5vZmZzZXQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0Y29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0cmV0dXJuIHtcclxuXHQgICAgbGVmdDogcmVjdC5sZWZ0ICsgZWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0LFxyXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyBlbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmluZCBhIGNoaWxkIGJ5IHRhZ05hbWVcclxuICogQHBhcmFtIGVsZW1lbnRcclxuICogQHBhcmFtIHRhZ05hbWVcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5Ub29scy5jaGlsZCA9IGZ1bmN0aW9uKGVsZW1lbnQsIHRhZ05hbWUpIHtcclxuXHRmb3IoY29uc3Qgbm9kZSBvZiBlbGVtZW50LmNoaWxkTm9kZXMpIHtcclxuXHQgICAgaWYobm9kZS50YWdOYW1lID09PSB0YWdOYW1lKSB7XHJcblx0ICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQge1Rvb2xzfSBmcm9tICcuLi9ET00vVG9vbHMnO1xyXG5cclxuLyoqXHJcbiAqIFRvYXN0IG5vdGlmaWNhdGlvbiBzeXN0ZW1cclxuICogalF1ZXJ5LWZyZWVcclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVG9hc3QgPSBmdW5jdGlvbihtYWluKSB7XHJcblx0LyoqIERlZmF1bHQgdG9hc3QgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzICovXHJcblx0dGhpcy5kZWZhdWx0RHVyYXRpb24gPSAyMDAwO1xyXG5cclxuXHQvKiogSW50ZXItdG9hc3QgZGVsYXkgdGltZSBpbiBtaWxsaXNlY29uZHMgKi9cclxuXHR0aGlzLmludGVyVG9hc3REZWxheSA9IDUwMDtcclxuXHJcbiAgICBsZXQgbWVzc2FnZXMgPSBbXTsgIC8vIFBlbmRpbmcgbWVzc2FnZXNcclxuICAgIGxldCBhY3RpdmUgPSBmYWxzZTsgLy8gSXMgdGhlcmUgYW4gYWN0aXZlIG1lc3NhZ2UgZGlzcGxheWluZz9cclxuXHJcblx0bGV0IGVsZW1lbnQgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgdGhlIHRvYXN0IGRpdlxyXG5cdCAqIEBwYXJhbSBkaXYgRGl2IHRvIHB1dCB0aGUgdG9hc3QgaW50b1xyXG5cdCAqL1xyXG4gICAgdGhpcy5jcmVhdGUgPSAoZGl2KSA9PiB7XHJcblx0XHRlbGVtZW50ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdigndG9hc3QnKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcblx0XHRlbGVtZW50LmlubmVySFRNTCA9ICd0ZXN0aW5nJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xyXG4gICAgXHRpZihtZXNzYWdlcy5sZW5ndGggPiAwICYmICFhY3RpdmUpIHtcclxuXHRcdCAgICAvLyBTZXQgdGhlIG1lc3NhZ2VcclxuXHRcdCAgICBsZXQgbWVzc2FnZSA9IG1lc3NhZ2VzWzBdO1xyXG4gICAgICAgICAgICBtZXNzYWdlcy5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gbWVzc2FnZS5tc2c7XHJcblxyXG4gICAgICAgICAgICAvLyBTaG93IGl0XHJcblx0XHQgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2FzdC1hY3RpdmUnKTtcclxuXHRcdCAgICBhY3RpdmUgPSB0cnVlO1xyXG5cclxuXHRcdCAgICAvLyBEZWxheSB3aGlsZSBhY3RpdmVcclxuXHRcdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdCAgICBcdC8vIEhpZGUgaXRcclxuXHRcdFx0ICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndG9hc3QtYWN0aXZlJyk7XHJcblxyXG5cdFx0XHQgICAgLy8gRGVsYXkgYmV0d2VlbiB0b2FzdHNcclxuXHRcdFx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHQgICAgXHRhY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0ICAgIFx0c2hvdygpO1xyXG5cdFx0XHQgICAgfSwgdGhpcy5pbnRlclRvYXN0RGVsYXkpXHJcblx0XHQgICAgfSwgbWVzc2FnZS50aW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERpc3BsYXkgYSB0b2FzdCBtZXNzYWdlXHJcblx0ICogQHBhcmFtIG1zZyBNZXNzYWdlIHRvIGRpc3BsYXlcclxuXHQgKiBAcGFyYW0gdGltZSBUaW1lIHRvIGRpc3BsYXkgaW4gbWlsbGlzZWNvbmRzLCBvbWl0IGZvciBkZWZhdWx0XHJcblx0ICovXHJcblx0dGhpcy5tZXNzYWdlID0gZnVuY3Rpb24obXNnLCB0aW1lKSB7XHJcbiAgICAgICAgaWYodGltZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRpbWUgPSB0aGlzLmRlZmF1bHREdXJhdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lc3NhZ2VzLnB1c2goe21zZzogbXNnLCB0aW1lOiB0aW1lfSk7XHJcbiAgICAgICAgc2hvdygpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBEaXNwbGF5IGFueSBKU09OIGVycm9ycyB3ZSBoYXZlIHJlY2VpdmVkLlxyXG5cdCAqIEBwYXJhbSBqc29uQXBpIEpzb25BUEkgb2JqZWN0XHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgYW55IGVycm9ycyBleGlzdGVkLlxyXG5cdCAqL1xyXG5cdHRoaXMuanNvbkVycm9ycyA9IGZ1bmN0aW9uKGpzb25BcGkpIHtcclxuICAgICAgICBpZihqc29uQXBpLmVycm9ycygpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGpzb25BcGkuZXJyb3JzKCkuZm9yRWFjaCgoZXJyb3IpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UoJ1NlcnZlciBFcnJvcjogJyArIGVycm9yLnRpdGxlLCA1MDAwKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IFJlc2l6ZXIgZnJvbSAncmVzaXplci1jbCc7XHJcblxyXG5pbXBvcnQge01lbnV9IGZyb20gJy4vTWVudSc7XHJcbmltcG9ydCB7VG9hc3R9IGZyb20gJy4vR3JhcGhpY3MvVG9hc3QnO1xyXG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuL1VJL0RyYWdBbmREcm9wJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSAnLi9ET00vVG9vbHMnO1xyXG5pbXBvcnQge1BhbmV9IGZyb20gXCIuL1BhbmVcIjtcclxuXHJcblxyXG4vKipcclxuICogQWN0dWFsIGluc3RhbmNlIG9mIHRoZSBQbGF5Z3JvdW5kIGZvciBhIHNpbmdsZSBlbGVtZW50LlxyXG4gKiBAcGFyYW0gcGxheWdyb3VuZCBUaGUgbWFpbiBQbGF5Z3JvdW5kIG9iamVjdFxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHdlIGFyZSBsb2FkaW5nIGludG9cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWFpbiA9IGZ1bmN0aW9uKHBsYXlncm91bmQsIGVsZW1lbnQpIHtcclxuICAgIHRoaXMucGxheWdyb3VuZCA9IHBsYXlncm91bmQ7XHJcbiAgICB0aGlzLnNpdGUgPSBwbGF5Z3JvdW5kLnNpdGU7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5vcHRpb25zID0gcGxheWdyb3VuZC5vcHRpb25zO1xyXG5cclxuICAgIC8vLyBkaXYubWFpblxyXG4gICAgdGhpcy5kaXYgPSBudWxsO1xyXG5cclxuICAgIGxldCBvcHRpb25zID0gcGxheWdyb3VuZC5vcHRpb25zO1xyXG5cclxuICAgIC8vLyBSZWZlcmVuY2VzIHRvIG90aGVyIEdVSSBjb21wb25lbnRzXHJcbiAgICBsZXQgbWVudT1udWxsLCB0YWJzPW51bGw7XHJcblxyXG4gICAgLy8vIGRpdi5vdmVybGF5XHJcbiAgICBsZXQgZGl2T3ZlcmxheSA9IG51bGwsIGRpdldvcms9bnVsbDtcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZCcpO1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG5cdCAgICBpZihvcHRpb25zLmhlaWdodCAhPT0gbnVsbCkge1xyXG5cdFx0ICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XHJcblx0ICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoKG9wdGlvbnMuZGlzcGxheSkge1xyXG4gICAgICAgICAgICBjYXNlICdmdWxsJzpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1mdWxsJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcblx0ICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLXdpbmRvdycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvcHRpb25zLmRpc3BsYXkgPT09ICd3aW5kb3cnKSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEFkZCByZXNpemVyIHRvIHRoZSB3aW5kb3cgaWYgaW4gd2luZG93IG1vZGVcclxuICAgICAgICAgICAgLy8gYW5kIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGFkZGVkXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGlmKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInJlc2l6ZXJcIikpIHtcclxuICAgICAgICAgICAgICAgIG5ldyBSZXNpemVyKGVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGU6ICcxMHB4IHNvbGlkICMxODQ1M0InXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kcmFnQW5kRHJvcCA9IG5ldyBEcmFnQW5kRHJvcCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBDcmVhdGUgYW5kIGFkZCB0aGUgd2luZG93IGNvbXBvbmVudHNcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmKG9wdGlvbnMuZGlzcGxheSAhPT0gJ2lubGluZScgJiYgb3B0aW9ucy5kaXNwbGF5ICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQWxsIHdpbmRvdy1iYXNlZCB2ZXJzaW9ucyBvdGhlciB0aGFuIGlubGluZSBnZXQgdGhlXHJcbiAgICAgICAgICAgIC8vIGZ1bGwgdXNlciBpbnRlcmZhY2VcclxuICAgICAgICAgICAgLy9cclxuXHJcbiAgICAgICAgICAgIC8vIDxkaXYgY2xhc3M9XCJtYWluXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIHRoaXMuZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtcGctbWFpbicpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kaXYpO1xyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQWRkIHRoZSBtZW51XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIG1lbnUgPSBuZXcgTWVudSh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5tZW51ID0gbWVudTtcclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFdvcmtpbmcgYXJlYVxyXG4gICAgICAgICAgICAvLyA8ZGl2IGNsYXNzPVwid29ya1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBkaXZXb3JrID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignd29yaycpO1xyXG4gICAgICAgICAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZChkaXZXb3JrKTtcclxuXHJcblxyXG5cdFx0XHQvL1xyXG5cdCAgICAgICAgLy8gQW5kIHRoZSByb290IHBhbmVcclxuXHQgICAgICAgIC8vXHJcblx0ICAgICAgICB0aGlzLnJvb3RQYW5lID0gbmV3IFBhbmUodGhpcywgZGl2V29yaywgbnVsbCwgbnVsbCk7XHJcblx0ICAgICAgICB0aGlzLnJvb3RQYW5lLmxvYWQob3B0aW9ucy5wYW5lKTtcclxuXHJcblx0ICAgICAgICAvL1xyXG5cdCAgICAgICAgLy8gQW5kIHRoZSBvdmVybGF5XHJcblx0ICAgICAgICAvLyA8ZGl2IGNsYXNzPVwiY2lyc2ltLW92ZXJsYXlcIj48L2Rpdj5cclxuXHQgICAgICAgIC8vXHJcblx0ICAgICAgICBkaXZPdmVybGF5ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtcGctb3ZlcmxheScpO1xyXG5cdCAgICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQoZGl2T3ZlcmxheSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvYXN0ID0gbmV3IFRvYXN0KHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnRvYXN0LmNyZWF0ZSh0aGlzLmRpdik7XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBBbnkgZGF0YSB0byBsb2FkP1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLmxvYWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsb2FkID0gb3B0aW9ucy5sb2FkO1xyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIGxvYWQgPT09ICdzdHJpbmcnIHx8IGxvYWQgaW5zdGFuY2VvZiBTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkID0gSlNPTi5wYXJzZShsb2FkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgdGFnIGluIGxvYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWIgPSB0aGlzLmdldFRhYih0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRhYiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWIuc2V0KGxvYWRbdGFnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldFRhYiA9IGZ1bmN0aW9uKHRhZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvb3RQYW5lLmdldFRhYih0YWcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuZXZlciBhIG5ldyB0YWIgaXMgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgdGhpcy5uZXdUYWIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBvciBjbGVhciBpbnRlcmZhY2UgbW9kYWwgc3RhdGUuXHJcbiAgICAgKiBAcGFyYW0gbW9kYWwgVHJ1ZSBzZXRzIGludGVyZmFjZSB0byBtb2RhbCBzdGF0ZS5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHRoaXMubW9kYWwgPSBmdW5jdGlvbihtb2RhbCkge1xyXG4gICAgICAgIGlmKG1vZGFsKSB7XHJcbiAgICAgICAgICAgIGRpdk92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGl2T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbn1cclxuIiwiaW1wb3J0IHtUb29sc30gZnJvbSAnLi9ET00vVG9vbHMnO1xyXG5cclxuLy8gaW1wb3J0IHtGaWxlTWVudX0gZnJvbSAnLi9NZW51cy9GaWxlTWVudSc7XHJcbi8vIGltcG9ydCB7RWRpdE1lbnV9IGZyb20gJy4vTWVudXMvRWRpdE1lbnUnO1xyXG4vLyBpbXBvcnQge1RhYnNNZW51fSBmcm9tICcuL01lbnVzL1RhYnNNZW51JztcclxuLy8gaW1wb3J0IHtIZWxwTWVudX0gZnJvbSAnLi9NZW51cy9IZWxwTWVudSc7XHJcblxyXG4vKipcclxuICogVGhlIHByb2dyYW0gbWVudSBiYXJcclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWVudSA9IGZ1bmN0aW9uKG1haW4pIHtcclxuXHRjb25zdCBvcHRpb25zID0gbWFpbi5vcHRpb25zO1xyXG5cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gQ3JlYXRlIHRoZSBtZW51IGNvbXBvbmVudHNcclxuICAgIC8vXHJcbiAgICAvLyB2YXIgZmlsZU1lbnUgPSBuZXcgRmlsZU1lbnUodGhpcywgbWFpbik7XHJcbiAgICAvLyB2YXIgZWRpdE1lbnUgPSBuZXcgRWRpdE1lbnUodGhpcywgbWFpbik7XHJcbiAgICAvLyB2YXIgdGFic01lbnUgPSBuZXcgVGFic01lbnUodGhpcywgbWFpbik7XHJcbiAgICAvLyB2YXIgaGVscE1lbnUgPSBuZXcgSGVscE1lbnUodGhpcywgbWFpbik7XHJcblxyXG4gICAgLy8vIFRoZSBuYXYgZWxlbWVudFxyXG4gICAgdGhpcy5uYXYgPSBudWxsO1xyXG4gICAgdGhpcy51bCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIDxuYXYgY2xhc3M9XCJtZW51YmFyXCI+PHVsPjwvdWw+PC9uYXY+XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzKHRoaXMubmF2LCAnY2wtcGctbWVudWJhcicpO1xyXG4gICAgICAgIG1haW4uZGl2LmFwcGVuZENoaWxkKHRoaXMubmF2KTtcclxuXHJcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIHRoaXMubmF2LmFwcGVuZENoaWxkKHVsKTtcclxuICAgICAgICB0aGlzLnVsID0gdWw7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVzID0gb3B0aW9ucy5tZW51cztcclxuICAgICAgICBtZW51cy5wdXNoKHtcclxuXHQgICAgICAgIG5hbWU6ICdIZWxwJyxcclxuXHQgICAgICAgIG1lbnVzOiBbXHJcblx0XHQgICAgICAgIHtuYW1lOiAnQWJvdXQnLCBhY3Rpb246IHt0YWc6ICdhYm91dCd9fVxyXG5cdCAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmb3IoY29uc3QgbWVudSBvZiBtZW51cykge1xyXG4gICAgICAgIFx0Y29uc3QgdG9wTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIFx0dWwuYXBwZW5kQ2hpbGQodG9wTEkpO1xyXG5cclxuICAgICAgICBcdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgXHR0b3BMSS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICBcdGEuaW5uZXJUZXh0ID0gbWVudS5uYW1lO1xyXG5cclxuICAgICAgICBcdGlmKG1lbnUuYWN0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBcdFx0Ly8gVG9wIGxldmVsIG9ubHkgbWVudVxyXG4gICAgICAgIFx0XHRjb25zdCBhY3Rpb24gPSBtYWluLnBsYXlncm91bmQuZ2V0QWN0aW9uKG1lbnUuYWN0aW9uKTtcclxuXHRcdCAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgW2EsIHRvcExJXSkge1xyXG5cdFx0ICAgICAgICBcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0XHQgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0ICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHQgICAgICAgIGFjdGlvbi5kbyhtYWluKTtcclxuXHRcdFx0ICAgICAgICB9KTtcclxuXHRcdCAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIGlmKG1lbnUubWVudXMgIT09IHVuZGVmaW5lZCkge1xyXG5cdCAgICAgICAgXHQvLyBQdWxsLWRvd24gbWVudVxyXG5cdCAgICAgICAgXHRjb25zdCBzdWJVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblx0ICAgICAgICBcdHRvcExJLmFwcGVuZENoaWxkKHN1YlVMKTtcclxuXHJcblx0ICAgICAgICBcdGZvcihjb25zdCBlbGVtZW50IG9mIFthLCB0b3BMSV0pIHtcclxuXHRcdFx0ICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0ICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdCAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0XHRcdCAgICAgICAgaWYoZ2V0Q29tcHV0ZWRTdHlsZShzdWJVTCkuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAnaGlkZGVuJykge1xyXG5cdFx0XHRcdFx0ICAgICAgICBvcGVuKHRvcExJKTtcclxuXHRcdFx0XHQgICAgICAgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHQgICAgICAgIC8vIElmIGFscmVhZHkgb3BlbiwgY2xvc2UgYWxsXHJcblx0XHRcdFx0XHQgICAgICAgIHRoaXMuY2xvc2VBbGwoKTtcclxuXHRcdFx0XHQgICAgICAgIH1cclxuXHJcblx0XHRcdCAgICAgICAgfSk7XHJcblx0XHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBcdGZvcihjb25zdCBzdWJNZW51IG9mIG1lbnUubWVudXMpIHtcclxuXHRcdFx0ICAgICAgICBjb25zdCBzdWJMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0XHRcdCAgICAgICAgc3ViVUwuYXBwZW5kQ2hpbGQoc3ViTEkpO1xyXG5cclxuXHRcdFx0ICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cdFx0XHQgICAgICAgIHN1YkxJLmFwcGVuZENoaWxkKGEpO1xyXG5cdFx0XHQgICAgICAgIGEuaW5uZXJUZXh0ID0gc3ViTWVudS5uYW1lO1xyXG5cclxuXHRcdFx0ICAgICAgICBpZihzdWJNZW51LmFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0ICAgICAgICAvLyBUb3AgbGV2ZWwgb25seSBtZW51XHJcblx0XHRcdFx0ICAgICAgICBjb25zdCBhY3Rpb24gPSBtYWluLnBsYXlncm91bmQuZ2V0QWN0aW9uKHN1Yk1lbnUuYWN0aW9uKTtcclxuXHRcdFx0XHQgICAgICAgIGlmKGFjdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0ICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBbYSwgdG9wTEldKSB7XHJcblx0XHRcdFx0XHRcdCAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgdGhpcy5jbG9zZUFsbCgpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgYWN0aW9uLmRvKG1haW4pO1xyXG5cdFx0XHRcdFx0XHQgICAgICAgIH0pO1xyXG5cdFx0XHRcdFx0ICAgICAgICB9XHJcblx0XHRcdFx0ICAgICAgICB9XHJcblxyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdCAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gQWRkIHRoZSBtZW51IGNvbXBvbmVudCdzIEhUTUxcclxuICAgICAgICAvL1xyXG5cdCAgICAvLyBsZXQgaHRtbCA9ICcnO1xyXG5cclxuXHQgICAgLy8gaHRtbCArPSBmaWxlTWVudS5odG1sKCk7XHJcbiAgICAgICAgLy8gaHRtbCArPSBlZGl0TWVudS5odG1sKCk7XHJcbiAgICAgICAgLy8gaHRtbCArPSB0YWJzTWVudS5odG1sKCk7XHJcbiAgICAgICAgLy8gaHRtbCArPSBoZWxwTWVudS5odG1sKCk7XHJcblxyXG4gICAgICAgIC8vIHVsLmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG4gICAgICAgIC8vXHJcblx0ICAgIC8vIE1lbnUgb3B0aW9uIGZvciB0ZXN0aW5nIHRoZSBUb2FzdCBlcnJvciByZXBvcnRpbmcgbWVjaGFuaXNtXHJcblx0ICAgIC8vXHJcblxyXG5cdCAgICAvLyBodG1sICs9IGA8bGk+PGEgY2xhc3M9XCJ0b2FzdC10ZXN0XCI+VG9hc3QhPC9hPjwvbGk+YDtcclxuXHQgICAgLy8gdWwuaW5uZXJIVE1MID0gaHRtbDtcclxuXHRcdC8vXHJcblx0ICAgIC8vIHRoaXMudG9hc3RzID0gMDtcclxuICAgICAgICAvLyB0aGlzLmNsaWNrKCcudG9hc3QtdGVzdCcsIChldmVudCk9PiB7XHJcbiAgICAgICAgLy8gXHR0aGlzLnRvYXN0cysrO1xyXG4gICAgICAgIC8vIFx0bWFpbi50b2FzdC5tZXNzYWdlKCdUb2FzdCBtZXNzYWdlICcgKyB0aGlzLnRvYXN0cyk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gSW5zdGFsbCBjbGljayBoYW5kbGVycyBmb3IgYWxsIHRvcC1sZXZlbCBtZW51c1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gZm9yKGNvbnN0IG5vZGUgb2YgdWwuY2hpbGROb2Rlcykge1xyXG4gICAgICAgIC8vICAgICBpZihub2RlLnRhZ05hbWUgPT09ICdMSScpIHtcclxuICAgICAgICAvLyAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Ly9cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBGaW5kIHRoZSA8dWw+IGluIHRoaXMgbWVudVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCB1bFN1YiA9IFRvb2xzLmNoaWxkKG5vZGUsICdVTCcpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKHVsU3ViICE9PSBudWxsKSB7XHJcblx0ICAgIC8vICAgICAgICAgICAgICAgICBpZihnZXRDb21wdXRlZFN0eWxlKHVsU3ViKS5nZXRQcm9wZXJ0eVZhbHVlKCd2aXNpYmlsaXR5JykgPT09ICdoaWRkZW4nKSB7XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgIG9wZW4obm9kZSk7XHJcblx0ICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIElmIGFscmVhZHkgb3BlbiwgY2xvc2UgYWxsXHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VBbGwoKTtcclxuXHQgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gQWN0aXZhdGUgYWxsIG9mIHRoZSBtZW51c1xyXG4gICAgICAgIC8vIGZpbGVNZW51LmFjdGl2YXRlKCk7XHJcbiAgICAgICAgLy8gZWRpdE1lbnUuYWN0aXZhdGUoKTtcclxuICAgICAgICAvLyB0YWJzTWVudS5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIC8vIGhlbHBNZW51LmFjdGl2YXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogTGlzdGVuIHRvIGtleSBkb3duIGV2ZW50cyBzbyB3ZSBjYW4gY2xvc2UgdGhlIG1lbnVcclxuICAgICAqIGlmIHdlIGNsaWNrIG91dHNpZGUgb2YgdGhlIG1lbnUgd2hpbGUgaXQgaXMgb3Blbi5cclxuXHQgKiBAcGFyYW0gZXZlbnRcclxuXHQgKi9cclxuXHRjb25zdCBjbG9zZUxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gU2VlIGlmIHdlIGNsaWNrZWQgb24gc29tZSBjaGlsZCBvZiBuYXYuLi5cclxuICAgICAgICBsZXQgbm9kZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgIGZvciggOyBub2RlICE9PSBudWxsOyBub2RlID0gbm9kZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgIGlmKG5vZGUgPT09IHRoaXMubmF2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cdCAgICB0aGlzLmNsb3NlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3BlbiBhIG1lbnVcclxuICAgIGNvbnN0IG9wZW4gPSAobGkpID0+IHtcclxuICAgICAgICAvLyBIaWRlIGFueSBvdGhlciBtZW51c1xyXG4gICAgICAgIGZvcihjb25zdCBub2RlIG9mIHRoaXMudWwuY2hpbGROb2Rlcykge1xyXG4gICAgICAgICAgICBpZihub2RlLnRhZ05hbWUgPT09ICdMSScpIHtcclxuXHQgICAgICAgICAgICBjb25zdCB1bCA9IFRvb2xzLmNoaWxkKG5vZGUsICdVTCcpO1xyXG4gICAgICAgICAgICAgICAgaWYodWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgIC8vIFRvb2xzLnJlbW92ZUNsYXNzKHVsLCAnY2wtcGctbWVudS1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cdCAgICAvLyBBbmQgb3BlbiB0aGlzIG1lbnVcclxuXHQgICAgY29uc3QgdWwgPSBUb29scy5jaGlsZChsaSwgJ1VMJyk7XHJcblx0ICAgIGlmKHVsICE9PSBudWxsKSB7XHJcblx0ICAgIFx0dWwuY2xhc3NMaXN0LmFkZCgnY2wtcGctbWVudS1vcGVuJyk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENsb3NlIGFsbCBtZW51cyAqL1xyXG4gICAgdGhpcy5jbG9zZUFsbCA9ICgpID0+IHtcclxuXHQgICAgZm9yKGNvbnN0IG5vZGUgb2YgdGhpcy51bC5jaGlsZE5vZGVzKSB7XHJcblx0XHQgICAgaWYobm9kZS50YWdOYW1lID09PSAnTEknKSB7XHJcblx0XHRcdCAgICBjb25zdCB1bCA9IFRvb2xzLmNoaWxkKG5vZGUsICdVTCcpO1xyXG5cdFx0XHQgICAgaWYodWwgIT09IG51bGwpIHtcclxuXHRcdFx0XHQgICAgVG9vbHMucmVtb3ZlQ2xhc3ModWwsICdjbC1wZy1tZW51LW9wZW4nKTtcclxuXHRcdFx0ICAgIH1cclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjbG9zZUxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBFbmFibGUgb3IgZGlzYWJsZSBhIG1lbnUgb3B0aW9uIGJ5IHNlbGVjdG9yXHJcblx0ICogQHBhcmFtIHNlbCBTZWxlY3RvciBmb3IgdGhlIG1lbnUgb3B0aW9uIChsaWtlICcudGFicy1hZGQnKVxyXG5cdCAqIEBwYXJhbSBlbmFibGUgVHJ1ZSB0byBlbmFibGVcclxuXHQgKi9cclxuXHR0aGlzLmVuYWJsZSA9IChzZWwsIGVuYWJsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnVsLnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcclxuICAgICAgICBpZihlbGVtZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGVuYWJsZSkge1xyXG4gICAgICAgICAgICBUb29scy5yZW1vdmVDbGFzcyhlbGVtZW50LnBhcmVudE5vZGUsIFwibWVudS1kaXNhYmxlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5hZGRDbGFzcyhlbGVtZW50LnBhcmVudE5vZGUsIFwibWVudS1kaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHQvKipcclxuICAgICAqIEZpbmQgYSBtZW51IG9wdGlvbiBieSBzZWxlY3RvclxyXG5cdCAqIEBwYXJhbSBzZWxcclxuXHQgKiBAcmV0dXJucyB7RWxlbWVudH1cclxuXHQgKi9cclxuXHR0aGlzLmZpbmQgPSAoc2VsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudWwucXVlcnlTZWxlY3RvcihzZWwpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIEluc3RhbGwgYSBtZW51IG9wdGlvbiBjbGljayBoYW5kZXJcclxuXHQgKiBAcGFyYW0gc2VsIFNlbGVjdG9yIGZvciB0aGUgbWVudSBvcHRpb25cclxuXHQgKiBAcGFyYW0gY2xvc3VyZSBUaGUgY2xvc3VyZSB0byBjYWxsIChwYXNzZXMgJ2V2ZW50JylcclxuXHQgKi9cclxuXHR0aGlzLmNsaWNrID0gKHNlbCwgY2xvc3VyZSkgPT4ge1xyXG5cdCAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5maW5kKHNlbCk7XHJcblx0ICAgIGlmKGVsZW1lbnQgIT09IG51bGwpIHtcclxuXHQgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHQgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCAgICAgICAgICAgIHRoaXMuY2xvc2VBbGwoKTtcclxuXHQgICAgICAgICAgICBjbG9zdXJlKGV2ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKTtcclxufTtcclxuIiwiLyoqXHJcbiAqIFBsYXlncm91bmQgb3B0aW9ucy5cclxuICogQHBhcmFtIG9wdGlvbnMgVXNlciBwcm92aWRlZCBvcHRpb25zIHRoYXQgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdmFsdWVzLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBvcHRpb25zIDoge307XHJcblxyXG4gICAgLy8vIERpc3BsYXkgb3B0aW9uc1xyXG4gICAgLy8vIHdpbmRvdyAtIERpc3BsYXlzIGFzIGEgc3RhbmRhcmQgZGl2IChkZWZhdWx0KVxyXG4gICAgdGhpcy5kaXNwbGF5ID0gJ3dpbmRvdyc7XHJcblxyXG4gICAgLy8vIE9wdGlvbmFsIGhlaWdodCBzZXR0aW5nXHJcbiAgICB0aGlzLmhlaWdodCA9IG51bGw7XHJcblxyXG4gICAgLy8vIFRoZSBwbGF5Z3JvdW5kIHJvb3QgcGFuZVxyXG4gICAgdGhpcy5wYW5lID0ge307XHJcblxyXG4gICAgLy8vIFRoZSB0b3AtbGV2ZWwgbWVudSBvcHRpb25zXHJcbiAgICB0aGlzLm1lbnVzID0gW3tuYW1lOiAnQWJvdXQnfV07XHJcblxyXG4gICAgLy8vIENvbnRlbnQgdG8gaW5pdGlhbGx5IGxvYWQgaW50byB0aGUgdGFic1xyXG4gICAgdGhpcy5sb2FkID0gbnVsbDtcclxuXHJcblxyXG4gICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbiBcIiArIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgQVBJIG9wZXJhdGlvbnMgZm9yIGEgZ2l2ZW4gZmlsZSBtb2RlLlxyXG4gICAgICogQHBhcmFtIG1vZGUgJ3NhdmUnLCAnb3BlbidcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmdldEFQSSA9IGZ1bmN0aW9uKG1vZGUpIHtcclxuICAgICAgICBpZih0aGlzLmFwaSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYXBpID09PSBPYmplY3QodGhpcy5hcGkpKSB7XHJcbiAgICAgICAgICAgIGxldCBvYmo7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmFwaVttb2RlXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiBcclxuICAgICAgICAgICAgICAgIC8vIE1vZGUgaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcclxuICAgICAgICAgICAgICAgIHZhciBtb2RlT2JqID0gdGhpcy5hcGlbbW9kZV07XHJcbiAgICAgICAgICAgICAgICBpZihtb2RlT2JqLnVybCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTW9kZSBpcyBub3Qgc3VwcG9ydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2VuZCBjb250ZW50IHR5cGVcclxuICAgICAgICAgICAgICAgIG9iaiA9IHt1cmw6IG1vZGVPYmoudXJsfTtcclxuICAgICAgICAgICAgICAgIGlmKG1vZGVPYmouY29udGVudFR5cGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5jb250ZW50VHlwZSA9IG1vZGVPYmouY29udGVudFR5cGU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5hcGkuY29udGVudFR5cGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5jb250ZW50VHlwZSA9IHRoaXMuYXBpLmNvbnRlbnRUeXBlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihtb2RlT2JqLmV4dHJhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSBtb2RlT2JqLmV4dHJhO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuYXBpLmV4dHJhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSB0aGlzLmFwaS5leHRyYTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoubmFtZSA9IG1vZGVPYmoubmFtZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmFwaS5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoubmFtZSA9IHRoaXMuYXBpLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFwaS51cmwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG9iaiA9IHt1cmw6IHRoaXMuYXBpLnVybH07XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFwaS5leHRyYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0gdGhpcy5hcGkuZXh0cmE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXBpLm5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5uYW1lID0gdGhpcy5hcGkubmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge3VybDogdGhpcy5hcGl9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1RhYnN9IGZyb20gJy4vVGFicyc7XHJcblxyXG4vKipcclxuICogQSBQYW5lIGlzIGFuIGFyZWEgb2YgdGhlIElERSBzY3JlZW4gdGhhdCBlaXRoZXIgY29udGFpbnMgYSB0YWIgc2V0IG9yIHR3byBjaGlsZCBwYW5lcy5cclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0aGF0IGlzIHRoZSBob3N0IGZvciB0aGUgcGFuZVxyXG4gKiBAcGFyYW0gcGFyZW50IFBhbmUgcGFyZW50IG9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBQYW5lID0gZnVuY3Rpb24obWFpbiwgZWxlbWVudCwgcGFyZW50KSB7XHJcblx0dGhpcy5taW5TcGxpdCA9IDEwO1xyXG5cdHRoaXMubWF4U3BsaXQgPSA5MDtcclxuXHJcblx0bGV0IGRpdiA9IG51bGwsIGNoaWxkMSA9IG51bGwsIGNoaWxkMiA9IG51bGw7XHJcblx0bGV0IGhvcml6b250YWxTcGxpdCA9IG51bGw7XHJcblx0bGV0IHRhYnMgPSBudWxsO1xyXG5cclxuXHRjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG5cdFx0Ly9cclxuXHRcdC8vIENyZWF0ZSBhbmQgYWRkIHRoZSBkaXZcclxuXHRcdC8vXHJcblxyXG5cdFx0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmRpdiA9IGRpdjtcclxuXHJcblx0XHRpZihwYXJlbnQgPT09IG51bGwpIHtcclxuXHRcdFx0ZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtcm9vdCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcblx0XHQvLyBpZihkb25vclRhYnMgIT09IG51bGwpIHtcclxuXHRcdC8vIFx0dGFicyA9IGRvbm9yVGFicztcclxuXHRcdC8vIFx0dGFicy5uZXdQYXJlbnQodGhpcyk7XHJcblx0XHQvLyB9IGVsc2Uge1xyXG5cdFx0Ly8gXHR0YWJzID0gbmV3IFRhYnMobWFpbiwgZGl2KTtcclxuXHRcdC8vIH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIExvYWQgdGhlIHBhbmUgZnJvbSB0aGUgZGF0YVxyXG5cdCAqIEBwYXJhbSBkYXRhIERhdGEgZnJvbSBvcHRpb25zIGZvciB0aGlzIHBhbmVcclxuXHQgKi9cclxuXHR0aGlzLmxvYWQgPSBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRpZihkYXRhLmNoaWxkMSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdC8vIFRoaXMgaXMgYSBzcGxpdCBwYW5lXHJcblx0XHRcdHRoaXMuc3BsaXQoZGF0YS5ob3JpeiwgZGF0YS5jaGlsZDEsIGRhdGEuY2hpbGQyKTtcclxuXHRcdFx0dGhpcy5wZXJjZW50YWdlKGRhdGEucGVyY2VudGFnZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0YWJzID0gbmV3IFRhYnMobWFpbiwgZGl2KTtcclxuXHRcdFx0dGFicy5sb2FkKGRhdGEudGFicyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0aGlzLnNwbGl0ID0gZnVuY3Rpb24oaG9yaXpvbnRhbCwgY2hpbGQxRGF0YSwgY2hpbGQyRGF0YSkge1xyXG5cdFx0aG9yaXpvbnRhbFNwbGl0ID0gaG9yaXpvbnRhbDtcclxuXHJcblx0XHRjaGlsZDEgPSBuZXcgUGFuZShtYWluLCBkaXYsIHRoaXMsIHRhYnMpO1xyXG5cdFx0Y2hpbGQyID0gbmV3IFBhbmUobWFpbiwgZGl2LCB0aGlzLCBudWxsKTtcclxuXHJcblx0XHR0YWJzID0gbnVsbDtcclxuXHJcblx0XHRpZihob3Jpem9udGFsKSB7XHJcblx0XHRcdGNoaWxkMS5kaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1sZWZ0Jyk7XHJcblx0XHRcdGNoaWxkMi5kaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1yaWdodCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGl2LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcclxuXHRcdFx0Y2hpbGQxLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLXRvcCcpO1xyXG5cdFx0XHRjaGlsZDIuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtYm90dG9tJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRiYXIuY2xhc3NMaXN0LmFkZCgnY2wtYmFyJyk7XHJcblx0XHRjaGlsZDEuZGl2LmFwcGVuZENoaWxkKGJhcik7XHJcblxyXG5cdFx0YmFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRzdGFydERyYWdnaW5nKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblxyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZSk7XHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0YmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKGV2ZW50KTtcclxuXHJcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRzdGFydERyYWdnaW5nKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblxyXG5cclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmUpO1xyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmQpO1xyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hDYW5jZWwpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5jaGlsZDEgPSBjaGlsZDE7XHJcblx0XHR0aGlzLmNoaWxkMiA9IGNoaWxkMjtcclxuXHJcblx0XHR0aGlzLnBlcmNlbnRhZ2UoNTApO1xyXG5cclxuXHRcdGlmKGNoaWxkMURhdGEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRjaGlsZDEubG9hZChjaGlsZDFEYXRhKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihjaGlsZDJEYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0Y2hpbGQyLmxvYWQoY2hpbGQyRGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtjaGlsZDE6IGNoaWxkMSwgY2hpbGQyOiBjaGlsZDJ9O1xyXG5cdH1cclxuXHJcblx0bGV0IHN0YXJ0WCA9IG51bGwsIHN0YXJ0WSA9IG51bGw7XHJcblxyXG5cdGNvbnN0IHN0YXJ0RHJhZ2dpbmcgPSAoeCwgeSkgPT4ge1xyXG5cdFx0c3RhcnRYID0geDtcclxuXHRcdHN0YXJ0WSA9IHk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBlbmREcmFnZ2luZyA9ICgpID0+IHtcclxuXHRcdHN0YXJ0WCA9IG51bGw7XHJcblx0XHRzdGFydFkgPSBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbnN0IGRyYWdnaW5nID0gKHgsIHkpID0+IHtcclxuXHRcdGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHJcblx0XHRpZihob3Jpem9udGFsU3BsaXQpIHtcclxuXHRcdFx0Y29uc3QgbWFpblggPSByZWN0LmxlZnQgKyBlbGVtZW50LnNjcm9sbExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQ7XHJcblx0XHRcdGNvbnN0IHdpZCA9IHJlY3QucmlnaHQgLSByZWN0LmxlZnQ7XHJcblx0XHRcdGlmKHdpZCA8PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBwZXIgPSAoeCAtIG1haW5YKSAvIHdpZCAqIDEwMDtcclxuXHRcdFx0dGhpcy5wZXJjZW50YWdlKHBlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBtYWluWSA9IHJlY3QudG9wICArIGVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0Y29uc3QgaGl0ID0gcmVjdC5ib3R0b20gLSByZWN0LnRvcDtcclxuXHRcdFx0aWYoaGl0IDw9IDApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHBlciA9ICh5IC0gbWFpblkpIC8gaGl0ICogMTAwO1xyXG5cdFx0XHR0aGlzLnBlcmNlbnRhZ2UocGVyKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRpZihldmVudC53aGljaCA9PT0gMCkge1xyXG5cdFx0XHRtb3VzZVVwKGV2ZW50KTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGRyYWdnaW5nKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3VzZVVwID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmUpO1xyXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcCk7XHJcblx0XHRlbmREcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdG91Y2hNb3ZlICA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0ZHJhZ2dpbmcodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHRvdWNoRW5kID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRkcmFnZ2luZyh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cclxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2hNb3ZlKTtcclxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEVuZCk7XHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hDYW5jZWwpO1xyXG5cclxuXHRcdGVuZERyYWdnaW5nKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB0b3VjaENhbmNlbCA9IChldmVudCkgPT4ge1xyXG5cdFx0dG91Y2hFbmQoZXZlbnQpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5wZXJjZW50YWdlID0gZnVuY3Rpb24ocGVyKSB7XHJcblx0XHRpZihwZXIgPCB0aGlzLm1pblNwbGl0KSB7XHJcblx0XHRcdHBlciA9IHRoaXMubWluU3BsaXQ7XHJcblx0XHR9IGVsc2UgaWYocGVyID4gdGhpcy5tYXhTcGxpdCkge1xyXG5cdFx0XHRwZXIgPSB0aGlzLm1heFNwbGl0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGhvcml6b250YWxTcGxpdCkge1xyXG5cdFx0XHRjaGlsZDEuZGl2LnN0eWxlLndpZHRoID0gcGVyICsgJyUnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y2hpbGQxLmRpdi5zdHlsZS5oZWlnaHQgPSBwZXIgKyAnJSc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0aGlzLmdldFRhYiA9IGZ1bmN0aW9uKHRhZykge1xyXG5cdFx0Zm9yKGNvbnN0IGNvbGxlY3Rpb24gb2YgW3RhYnMsIGNoaWxkMSwgY2hpbGQyXSkge1xyXG5cdFx0XHRpZihjb2xsZWN0aW9uICE9PSBudWxsKSB7XHJcblx0XHRcdFx0bGV0IHRhYiA9IGNvbGxlY3Rpb24uZ2V0VGFiKHRhZyk7XHJcblx0XHRcdFx0aWYodGFiICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGFiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxufSIsImltcG9ydCB7TWFpbn0gZnJvbSAnLi9NYWluJztcclxuaW1wb3J0IHtPcHRpb25zfSBmcm9tICcuL09wdGlvbnMnO1xyXG5pbXBvcnQge1JlYWR5fSBmcm9tICcuL1V0aWxpdHkvUmVhZHknO1xyXG5pbXBvcnQge0FjdGlvbn0gZnJvbSAnLi9BY3Rpb25zL0FjdGlvbic7XHJcbmltcG9ydCB7QWxsQWN0aW9uc30gZnJvbSAnLi9BY3Rpb25zL0FsbEFjdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgUGxheWdyb3VuZFxyXG4gKlxyXG4gKiBUaGlzIGNyZWF0ZXMgYSBzaW5nbGUgSW5zdGFuY2UgdGhhdCBtYW5hZ2VzIHRoZVxyXG4gKiBjb21wb25lbnRzIGFuZCBzdGFydHMgYWN0dWFsIFBsYXlncm91bmQgd2luZG93cy5cclxuICpcclxuICogQ29uc3RydWN0IGFuZCBzdGFydCBydW5uaW5nIGxpa2UgdGhpczpcclxuICpcclxuICogR2l2ZW4gYW4gSFRNTCBkaXY6XHJcbiAqICAgICA8ZGl2IGlkPVwicGxheWdyb3VuZFwiPjwvZGl2PlxyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIHNjcmlwdCBzdGFydHMgUGxheWdyb3VuZCBpbiB0aGF0IGRpdjpcclxuICpcclxuICogICAgIHZhciBwbGF5Z3JvdW5kID0gbmV3IFBsYXlncm91bmQoJyNwbGF5Z3JvdW5kJyk7XHJcbiAqICAgICBwbGF5Z3JvdW5kLnN0YXJ0KCk7XHJcbiAqXHJcbiAqIEBwYXJhbSBzaXRlIFNpdGUgb2JqZWN0XHJcbiAqIEBwYXJhbSBzZWwgU2VsZWN0b3Igb3IgZWxlbWVudCB0byBjcmVhdGUgUGxheWdyb3VuZCBpbiAoY2FuIGJlIG1hbnkpXHJcbiAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCBjb250YWluaW5nIFBsYXlncm91bmQgb3B0aW9ucy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUGxheWdyb3VuZCA9IGZ1bmN0aW9uKHNpdGUsIHNlbCwgb3B0aW9ucykge1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBNYXN0ZXIgc2V0IG9mIHRoZSB2ZXJzaW9uXHJcbiAgICAvL1xyXG4gICAgbGV0IFBBQ0tBR0UgPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKTtcclxuICAgIHRoaXMudmVyc2lvbiA9IFBBQ0tBR0UudmVyc2lvbjtcclxuXHJcbiAgICB0aGlzLnNpdGUgPSBzaXRlO1xyXG5cclxuICAgIC8vIFJlY29yZCB0aGUgc2VsZWN0b3JcclxuICAgIHRoaXMuc2VsID0gc2VsO1xyXG5cclxuICAgIC8vIFRoZSBPcHRpb25zIG9iamVjdCB0aGF0IG1hbmFnZXMgdXNlciBvcHRpb25zXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcclxuXHJcbiAgICAvLyBBIGNvbGxlY3Rpb24gb2YgTWFpbiBvYmplY3RzLlxyXG4gICAgdmFyIG1haW5zID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCB0aGUgUGxheWdyb3VuZCBydW5uaW5nLCBjcmVhdGluZyB0aGUgdXNlciBpbnRlcmZhY2UuXHJcbiAgICAgKiBUaGlzIGRvZXMgd2FpdCBmb3IgZG9jdW1lbnQgcmVhZHkgYmVmb3JlIGNhbGxpbmdcclxuICAgICAqIHRoaXMuc3RhcnROb3coKSB1bmxlc3Mgd2UgYXJlIHJ1bm5pbmcgaW4gbm8td2luZG93XHJcbiAgICAgKiBtb2RlLiBJbiB0aGF0IGNhc2UgaXQgcmV0dXJucyBhIHN0YXJ0ZWQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc2VsID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0Tm93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZWFkeS5nbygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnROb3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHRoZSBQbGF5Z3JvdW5kIHJ1bm5pbmcgbm93LiBEb2VzIG5vdCB3YWl0IGZvciBkb2N1bWVudCByZWFkeS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5zdGFydE5vdyA9ICgpID0+IHtcclxuICAgICAgICBpZihzZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbih0aGlzLCBzZWwpO1xyXG4gICAgICAgICAgICBtYWlucy5wdXNoKG1haW4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFpbiA9IG5ldyBNYWluKHRoaXMsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgbWFpbnMucHVzaChtYWluKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobWFpbnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYWluc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYSBjb25zdHJ1Y3RlZCBBY3Rpb24gb2JqZWN0IGZyb20gdGhlIGF2YWlsYWJsZSBwbGF5Z3JvdW5kIGFjdGlvbnMuXHJcblx0ICogQHBhcmFtIGFjdGlvbiBUaGUgYWN0aW9uIGRhdGEgZnJvbSB0aGUgc2VydmVyLlxyXG5cdCAqIEByZXR1cm5zIEFjdGlvbiBvYmplY3RcclxuXHQgKi9cclxuXHR0aGlzLmdldEFjdGlvbiA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgXHRpZihQbGF5Z3JvdW5kLmFjdGlvbnNbYWN0aW9uLnRhZ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgXHRcdHJldHVybiBuZXcgKFBsYXlncm91bmQuYWN0aW9uc1thY3Rpb24udGFnXSkoc2l0ZSwgYWN0aW9uKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgY29uc29sZS5sb2coJ1BsYXlncm91bmQgYWN0aW9uICcgKyBhY3Rpb24udGFnICsgJyBkb2VzIG5vdCBleGlzdCcpO1xyXG5cdCAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuUGxheWdyb3VuZC5BY3Rpb24gPSBBY3Rpb247XHJcblxyXG5QbGF5Z3JvdW5kLmFjdGlvbnMgPSB7fTtcclxuXHJcblBsYXlncm91bmQuYWRkQWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uKSB7XHJcblx0dGhpcy5hY3Rpb25zW2FjdGlvbi50YWddID0gYWN0aW9uO1xyXG59XHJcblxyXG5BbGxBY3Rpb25zLmFkZEFsbChQbGF5Z3JvdW5kKTsiLCJpbXBvcnQge1Rvb2xzfSBmcm9tICcuL0RPTS9Ub29scyc7XHJcbmltcG9ydCB7T3V0cHV0VGFifSBmcm9tICcuL1RhYnMvT3V0cHV0VGFiJztcclxuaW1wb3J0IHtFZGl0b3JUYWJ9IGZyb20gJy4vVGFicy9FZGl0b3JUYWInO1xyXG5cclxuaW1wb3J0IG1lbnViYXJzIGZyb20gJy4uLy4uL2ltZy9tZW51YmFycy5wbmcnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBNYW5hZ2VzIHRoZSB0YWJzIGluIHRoZSBtb2RlbFxyXG4gKiBAcGFyYW0gbWFpbiBNYWluIG9iamVjdFxyXG4gKiBAcGFyYW0gZWxlbWVudCBQYXJlbnQgZWxlbWVudFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBUYWJzID0gZnVuY3Rpb24obWFpbiwgZWxlbWVudCkge1xyXG4gICAgLy8vIFRoZSBjdXJyZW50bHkgYWN0aXZlIHZpZXcvdGFiXHJcbiAgICB0aGlzLmFjdGl2ZSA9IC0xO1xyXG5cclxuICAgIC8vLyBUaGUgTWFpbiBvYmplY3RcclxuICAgIHRoaXMubWFpbiA9IG1haW47XHJcblxyXG4gICAgLy8vIFRoZSBTaXRlIG9iamVjdFxyXG4gICAgdGhpcy5zaXRlID0gbWFpbi5zaXRlO1xyXG5cclxuICAgIC8vIFRoZSBjb2xsZWN0aW9uIG9mIHRhYnNcclxuICAgIHZhciB0YWJzID0gW107XHJcblxyXG4gICAgLy9cclxuICAgIC8vIFRoZSBzdHJ1Y3R1cmU6IDxkaXYgY2xhc3M9XCJjbC10YWJzXCI+PHVsPjwvdWw+PGRpdiBjbGFzcz1cImNsLXZpZXdzXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAvLyBkaXYudGFicyAtIEVuY2xvc3VyZSBmb3IgYWxsIHRhYnMgY29udGVudFxyXG4gICAgLy8gdWwgLSBUaGUgdGFicyB3ZSBzZWxlY3QgZnJvbVxyXG4gICAgLy8gdmlld3NEaXYgLSBUaGUgdmlld3Mgd2l0aCB0aGUgdGFiIGNvbnRlbnRzXHJcbiAgICAvL1xyXG5cclxuICAgIGxldCB0YWJzRGl2ID0gbnVsbCwgdWwgPSBudWxsLCB2aWV3c0RpdiA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQ3JlYXRlIHRoZSB0YWJzIHN5c3RlbVxyXG5cdCAqIEBwYXJhbSBkaXYgVGhlIGRpdiB3ZSBwdXQgdGhlIHRhYnMgaW50b1xyXG5cdCAqL1xyXG5cdHRoaXMuY3JlYXRlID0gZnVuY3Rpb24oZGl2KSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlOiA8ZGl2IGNsYXNzPVwiY2wtdGFic1wiPjx1bD48L3VsPjxkaXYgY2xhc3M9XCJjbC12aWV3c1wiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgIHRhYnNEaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdjbC1wZy10YWJzJyk7XHJcbiAgICAgICAgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIHRhYnNEaXYuYXBwZW5kQ2hpbGQodWwpO1xyXG5cclxuICAgICAgICB2aWV3c0RpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXBnLXZpZXdzJyk7XHJcbiAgICAgICAgdGFic0Rpdi5hcHBlbmRDaGlsZCh2aWV3c0Rpdik7XHJcblxyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0YWJzRGl2KTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgdGhlIHRhYnMgY29sbGVjdGlvblxyXG4gICAgICAgIHRhYnMgPSBbXTtcclxuXHJcblx0Ly9cdHRoaXMuYWRkKCdwcm9ncmFtJyk7XHJcbi8vXHRcdHRoaXMuYWRkKCdvdXRwdXQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxvYWQgPSBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRmb3IoY29uc3QgdGFiRGF0YSBvZiBkYXRhKSB7XHJcblx0XHRcdHRoaXMuYWRkKHRhYkRhdGEpO1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmV3UGFyZW50ID0gZnVuY3Rpb24ocGFuZSkge1xyXG5cdFx0cGFuZS5kaXYuYXBwZW5kQ2hpbGQodGFic0Rpdik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGQgPSBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRsZXQgdGFiID0gbnVsbDtcclxuXHJcblx0ICAgIHN3aXRjaChkYXRhLnR5cGUpIHtcclxuXHRcdCAgICBjYXNlICdlZGl0b3InOlxyXG5cdFx0XHQgICAgdGFiID0gbmV3IEVkaXRvclRhYih0aGlzLCBkYXRhKTtcclxuXHRcdCAgICBcdGJyZWFrO1xyXG5cclxuXHRcdCAgICBjYXNlICdvdXRwdXQnOlxyXG5cdFx0ICAgIFx0dGFiID0gbmV3IE91dHB1dFRhYih0aGlzLCBkYXRhKTtcclxuXHRcdCAgICBcdGJyZWFrO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBpZih0YWIgIT09IG51bGwpIHtcclxuXHRcdCAgICB1bC5hcHBlbmRDaGlsZCh0YWIubGkpO1xyXG5cdFx0ICAgIHZpZXdzRGl2LmFwcGVuZENoaWxkKHRhYi52aWV3KTtcclxuXHRcdCAgICB0YWJzLnB1c2goe3RhYjogdGFiLCBsaTogdGFiLmxpLCB2aWV3OiB0YWIudmlld30pO1xyXG5cclxuXHRcdCAgICB0YWIuc2VsZWN0KCk7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGEgdGFiIGJ5IHRhZy5cclxuXHQgKiBAcGFyYW0gdGFnIFRhYiB0YWdcclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHR0aGlzLmdldFRhYiA9IGZ1bmN0aW9uKHRhZykge1xyXG5cdCAgICBmb3IoY29uc3QgdGFiIG9mIHRhYnMpIHtcclxuXHRcdCAgICBpZih0YWIudGFiLnRhZyA9PT0gdGFnKSB7XHJcblx0XHRcdCAgICByZXR1cm4gdGFiLnRhYjtcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudW5zZWxlY3RBbGwgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgLy9cclxuXHQgICAgLy8gQ2xlYXIgYWxsIHNlbGVjdGlvbnNcclxuXHQgICAgLy9cclxuXHQgICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcclxuXHQgICAgXHR0YWIubGkuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuXHQgICAgXHR0YWIudmlldy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG5cdCAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSAtMTtcclxuICAgICAgICB0YWJzRGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFic0Rpdik7XHJcbiAgICAgICAgdGFic0RpdiA9IG51bGw7XHJcbiAgICAgICAgdGFicyA9IFtdO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZShlbGVtZW50KTtcclxufTtcclxuIiwiaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuXHJcbmV4cG9ydCBjb25zdCBFZGl0b3JUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGNvbnN0IHNpdGUgPSB0YWJzLnNpdGU7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdlZGl0b3InKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cclxuXHRsZXQgaW5uZXJWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5hcHBlbmRDaGlsZChpbm5lclZpZXcpO1xyXG5cclxuXHRsZXQgbnVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG51bXMuY2xhc3NMaXN0LmFkZCgnY2wtcGctbnVtcycpO1xyXG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChudW1zKTtcclxuXHJcblx0bGV0IGVkaXRvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGVkaXRvckRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wZy1lZGl0b3InKTtcclxuXHRpbm5lclZpZXcuYXBwZW5kQ2hpbGQoZWRpdG9yRGl2KTtcclxuXHJcblx0Y29uc3QgZWRpdG9yID0gbmV3IHNpdGUuRWRpdG9yKGVkaXRvckRpdiwge1xyXG5cdFx0cmVzaXplOiAnbm9uZScsXHJcblx0XHR0YWI6IHRydWUsXHJcblx0XHRhdXRvSW5kZW50OiB0cnVlLFxyXG5cdFx0c3R5bGVzOiBudWxsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHNjcm9sbGFibGUgPSBlZGl0b3IudGV4dGFyZWE7XHJcblx0c2Nyb2xsYWJsZS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXZlbnQpID0+IHtcclxuXHRcdC8vIGVkaXRvckRpdi5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnMHB4ICcgKyAoLXByZS5zY3JvbGxUb3ApICsgJ3B4JztcclxuXHRcdG51bXMuc2Nyb2xsVG9wID0gc2Nyb2xsYWJsZS5zY3JvbGxUb3A7XHJcblx0fSk7XHJcblxyXG5cdHRoaXMuc2V0ID0gZnVuY3Rpb24odGV4dCkge1xyXG5cdFx0Ly8gRGF0YSBmcm9tIHRoZSBmaWxlIHN5c3RlbSBtYXkgY29uc2lzdCBvZiBlaXRoZXIganVzdFxyXG5cdFx0Ly8gdGV4dCAob2xkIGZvcm1hdCkgb3IgdGV4dCBpbiBhbiBvYmplY3QuIFRoaXMgYWxsb3dzXHJcblx0XHQvLyBlaXRoZXIgY2FzZSB0byB3b3JrLlxyXG5cdFx0aWYodGV4dC5kYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGV4dCA9IHRleHQuZGF0YTtcclxuXHRcdH1cclxuXHJcblx0XHRlZGl0b3IudGV4dGFyZWEudmFsdWUgPSB0ZXh0O1xyXG5cclxuXHRcdGxldCBsaW5lcyA9IDA7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7ICsraSl7XHJcblx0XHRcdGlmKHRleHRbaV0gPT09ICdcXG4nKSB7XHJcblx0XHRcdFx0bGluZXMrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGxpbmVzIDwgMTAwKSB7XHJcblx0XHRcdGxpbmVzID0gMTAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFRoZSBleHRyYSBhZGRlZCBvbiBoZXJlIGVuc3VyZXMgd2UgZ2V0IHBhc3QgYW55IHNjcm9sbCBiYXJcclxuXHRcdC8vIHRoYXQgbWF5IHRha2UgdXAgaG9yaXpvbnRhbCByb29tLlxyXG5cdFx0bnVtcy5pbm5lckhUTUwgPSAnJztcclxuXHRcdGZvcihsZXQgaT0xOyBpPD1saW5lcys1OyBpKyspIHtcclxuXHRcdFx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdFx0cC5pbm5lclRleHQgPSAnJyArIGk7XHJcblx0XHRcdG51bXMuYXBwZW5kQ2hpbGQocCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIGNvbnRlbnRzIG9mIHRoZSBlZGl0b3JcclxuXHQgKiBAcmV0dXJucyB7KnxzdHJpbmd9XHJcblx0ICovXHJcblx0dGhpcy5nZXQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBlZGl0b3IudGV4dGFyZWEudmFsdWU7XHJcblx0fVxyXG5cclxuXHR0aGlzLnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0VGFiLnByb3RvdHlwZS5zZWxlY3QuY2FsbCh0aGlzKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0ZWRpdG9yLnRleHRhcmVhLmZvY3VzKCk7XHJcblx0XHR9LCAwKTtcclxuXHJcblx0fVxyXG5cclxuXHR0aGlzLnNldCgnJyk7XHJcbn1cclxuXHJcbkVkaXRvclRhYi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRhYi5wcm90b3R5cGUpO1xyXG5FZGl0b3JUYWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRWRpdG9yVGFiOyIsImltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cclxuXHRsZXQgaW5uZXJWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5hcHBlbmRDaGlsZChpbm5lclZpZXcpO1xyXG5cclxuXHRsZXQgbnVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG51bXMuY2xhc3NMaXN0LmFkZCgnY2wtcGctbnVtcycpO1xyXG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChudW1zKTtcclxuXHJcblx0bGV0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xyXG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChwcmUpO1xyXG5cclxuXHRwcmUuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGV2ZW50KSA9PiB7XHJcblx0XHRwcmUuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJzBweCAnICsgKC1wcmUuc2Nyb2xsVG9wKSArICdweCc7XHJcblx0XHRudW1zLnNjcm9sbFRvcCA9IHByZS5zY3JvbGxUb3A7XHJcblx0fSk7XHJcblxyXG5cdHRoaXMuc2V0ID0gZnVuY3Rpb24odGV4dCkge1xyXG5cdFx0cHJlLmlubmVySFRNTCA9IHRleHQ7XHJcblxyXG5cdFx0bGV0IGxpbmVzID0gMDtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKXtcclxuXHRcdFx0aWYodGV4dFtpXSA9PT0gJ1xcbicpIHtcclxuXHRcdFx0XHRsaW5lcysrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYobGluZXMgPCAxMDApIHtcclxuXHRcdFx0bGluZXMgPSAxMDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVGhlIGV4dHJhIGFkZGVkIG9uIGhlcmUgZW5zdXJlcyB3ZSBnZXQgcGFzdCBhbnkgc2Nyb2xsIGJhclxyXG5cdFx0Ly8gdGhhdCBtYXkgdGFrZSB1cCBob3Jpem9udGFsIHJvb20uXHJcblx0XHRudW1zLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0Zm9yKGxldCBpPTE7IGk8PWxpbmVzKzU7IGkrKykge1xyXG5cdFx0XHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0XHRwLmlubmVyVGV4dCA9ICcnICsgaTtcclxuXHRcdFx0bnVtcy5hcHBlbmRDaGlsZChwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IHRleHQgPSBgaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtleHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge2V4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cdFxyXG5cdHZpZXcuaW5uZXJUZXh0ID0gXFxgXFxgO1xyXG59XHJcblxyXG5pbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHRcclxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcclxufVxyXG5pbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHRcclxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcclxufVxyXG5cclxuT3V0cHV0VGFiLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVGFiLnByb3RvdHlwZSk7XHJcbk91dHB1dFRhYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPdXRwdXRUYWI7YDtcclxuXHJcblx0Ly90aGlzLnNldCh0ZXh0ICsgdGV4dCArIHRleHQgKyB0ZXh0KTtcclxuXHR0aGlzLnNldCgnJyk7XHJcbn1cclxuXHJcbk91dHB1dFRhYi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRhYi5wcm90b3R5cGUpO1xyXG5PdXRwdXRUYWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3V0cHV0VGFiOyIsIlxyXG5leHBvcnQgY29uc3QgVGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdHRoaXMudGFicyA9IHRhYnM7XHJcblxyXG5cdHRoaXMudmlldyA9IG51bGw7XHJcblx0dGhpcy50YWcgPSBkYXRhLnRhZztcclxuXHR0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcblxyXG5cdGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0dGhpcy5saSA9IGxpO1xyXG5cclxuXHRsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHRsaS5hcHBlbmRDaGlsZChhKTtcclxuXHRhLmlubmVyVGV4dCA9IGRhdGEubmFtZTtcclxuXHJcblx0bGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblx0bGkuYXBwZW5kQ2hpbGQobWVudSk7XHJcblx0Ly8gbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cdC8vIG1lbnUuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHQvLyBpbWcuc3JjID0gbWVudWJhcnM7XHJcblxyXG5cdGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5zZWxlY3QoKTtcclxuXHR9KTtcclxuXHJcblx0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRoaXMuc2VsZWN0KCk7XHJcblx0fSk7XHJcblxyXG5cdHRoaXMuc2V0ID0gZnVuY3Rpb24odGV4dCkge31cclxuXHJcblx0Ly9cclxuXHQvLyBUaGUgbWVudVxyXG5cdC8vIE1heWJlIGFjdGl2YXRlIGxhdGVyIG9uP1xyXG5cdC8vXHJcblx0Ly8gY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdC8vIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnY2wtdGFiLW1lbnUnKTtcclxuXHQvLyBtZW51RGl2LmNsYXNzTGlzdC5hZGQoJ2NsLW1lbnUtb3BlbicpO1xyXG5cdC8vIGxpLmFwcGVuZENoaWxkKG1lbnVEaXYpO1xyXG5cdC8vXHJcblx0Ly8gY29uc3QgbWVudVVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHQvLyBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVVTCk7XHJcblx0Ly8gbWVudVVMLmlubmVySFRNTCA9XHJcblx0Ly8gXHQnPGxpPjxhIGNsYXNzPVwiZWRpdC11bmRvXCI+PHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC1hcnJvd3JldHVybnRoaWNrLTEtd1wiPjwvc3Bhbj5VbmRvPC9hPjwvbGk+JyArXHJcblx0Ly8gXHQnPGxpPjxhIGNsYXNzPVwiZWRpdC1kZWxldGVcIj48c3BhbiBjbGFzcz1cImljb25zLWNsIGljb25zLWNsLXRyYXNoXCI+PC9zcGFuPkRlbGV0ZTwvYT48L2xpPic7XHJcblx0Ly9cclxuXHQvLyBjb25zdCBjb25uZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Ly8gbWVudURpdi5hcHBlbmRDaGlsZChjb25uZWN0RGl2KTtcclxuXHQvL1xyXG5cdC8vIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cdC8vIGNvbm5lY3REaXYuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHQvLyBpbWcuc3JjID0gbWVudWJhcnM7XHJcbn1cclxuXHJcblRhYi5wcm90b3R5cGUuc2VsZWN0ICA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMudGFicy51bnNlbGVjdEFsbCgpO1xyXG5cclxuXHR0aGlzLmxpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcblx0dGhpcy52aWV3LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIERyYWcgYW5kIGRyb3Agc3VwcG9ydCBmb3IgdGhlIHBhbGV0dGVcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRHJhZ0FuZERyb3AgPSBmdW5jdGlvbihtYWluKSB7XHJcblxyXG5cdGxldCBkcmFnRWxlbWVudCA9IG51bGw7IC8vIERPTSBFbGVtZW50XHJcblx0bGV0IGRyYWdJdGVtID0gbnVsbDsgICAgLy8gUGFsZXR0ZUl0ZW1cclxuXHRsZXQgZHJvcFZpZXdzID0gW107ICAgICAvLyBWaWV3XHJcblxyXG5cdGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGlmKGV2ZW50LndoaWNoID09PSAwKSB7XHJcblx0XHRcdFx0bW91c2VVcChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bW91c2VNb3ZlKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRtb3VzZU1vdmUodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdG1vdXNlVXAoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudCkgPT4ge1xyXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdFx0bW91c2VVcCh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRtb3VzZVVwKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHRoaXMuZHJhZ2dhYmxlID0gKHBhbGV0dGVJdGVtKSA9PiB7XHJcblx0XHRwYWxldHRlSXRlbS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRjbGljayhwYWxldHRlSXRlbSk7XHJcblxyXG5cdFx0XHRtb3VzZU1vdmUoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHBhbGV0dGVJdGVtLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRjbGljayhwYWxldHRlSXRlbSk7XHJcblxyXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdFx0bW91c2VNb3ZlKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHRoaXMuZHJvcHBhYmxlID0gKHZpZXcsIGNhbGxiYWNrKSA9PiB7XHJcblx0XHRkcm9wVmlld3MucHVzaCh7XHJcblx0XHRcdCd2aWV3JzogdmlldyxcclxuXHRcdFx0J2NhbGxiYWNrJzogY2FsbGJhY2tcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xpY2sgPSAocGFsZXR0ZUl0ZW0pID0+IHtcclxuXHRcdC8vXHJcblx0XHQvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBlbGVtZW50IGFuZCBzZXQgaXQgdXAgZm9yIGRyYWdnaW5nXHJcblx0XHQvL1xyXG5cdFx0Y29uc3QgY2xvbmUgPSBwYWxldHRlSXRlbS5wYWxldHRlSW1hZ2UoKTtcclxuXHRcdG1haW4uZWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZSk7XHJcblx0XHRjbG9uZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblx0XHRjbG9uZS5zdHlsZS50b3AgPSAwO1xyXG5cdFx0Y2xvbmUuc3R5bGUubGVmdCA9IDA7XHJcblx0XHRjbG9uZS5zdHlsZS56SW5kZXggPSAxMDA7XHJcblx0XHRjbG9uZS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblxyXG5cdFx0ZHJhZ0l0ZW0gPSBwYWxldHRlSXRlbTtcclxuXHRcdGRyYWdFbGVtZW50ID0gY2xvbmU7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3VzZU1vdmUgPSAoeCwgeSkgPT4ge1xyXG5cdFx0aWYoZHJhZ0VsZW1lbnQgIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgcmVjdCA9IG1haW4uZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0Y29uc3QgbWFpblggPSByZWN0LmxlZnQgKyBtYWluLmVsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldDtcclxuXHRcdFx0Y29uc3QgbWFpblkgPSByZWN0LnRvcCAgKyBtYWluLmVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0ZHJhZ0VsZW1lbnQuc3R5bGUubGVmdCA9ICh4IC0gbWFpblggLSBkcmFnRWxlbWVudC5jbGllbnRXaWR0aCAvIDIpICsgJ3B4JztcclxuXHRcdFx0ZHJhZ0VsZW1lbnQuc3R5bGUudG9wID0gKHkgLSBtYWluWSAtIGRyYWdFbGVtZW50LmNsaWVudEhlaWdodCAvIDIpICsgJ3B4JztcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbW91c2VVcCA9ICh4LCB5KSA9PiB7XHJcblx0XHRpZihkcmFnRWxlbWVudCAhPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0Zm9yKGNvbnN0IHZpZXcgb2YgZHJvcFZpZXdzKSB7XHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHQvLyBJcyB0aGUgdmlldyBlbmFibGVkP1xyXG5cdFx0XHRcdC8vXHJcblx0XHRcdFx0Y29uc3Qgdmlld0VsZW1lbnQgPSB2aWV3LnZpZXcuZWxlbWVudDtcclxuXHRcdFx0XHRpZih2aWV3RWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL1xyXG5cdFx0XHRcdC8vIERldGVybWluZSB4LHkgaW4gdGhlIGNhbnZhc1xyXG5cdFx0XHRcdC8vXHJcblx0XHRcdFx0Y29uc3QgcmVjdCA9IHZpZXdFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdGNvbnN0IHZpZXdYID0gcmVjdC5sZWZ0ICsgdmlld0VsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldDtcclxuXHRcdFx0XHRjb25zdCB2aWV3WSA9IHJlY3QudG9wICsgdmlld0VsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHRpZih4ID49IHZpZXdYICYmXHJcblx0XHRcdFx0XHR5ID49IHZpZXdZICYmXHJcblx0XHRcdFx0XHR4IDwgdmlld1ggKyAocmVjdC5yaWdodCAtIHJlY3QubGVmdCkgJiZcclxuXHRcdFx0XHRcdHkgPCB2aWV3WSArIChyZWN0LmJvdHRvbSAtIHJlY3QudG9wKSkge1xyXG5cdFx0XHRcdFx0dmlldy5jYWxsYmFjayhkcmFnSXRlbSwgeCAtIHZpZXdYLCB5IC0gdmlld1kpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYWluLmVsZW1lbnQucmVtb3ZlQ2hpbGQoZHJhZ0VsZW1lbnQpO1xyXG5cdFx0XHRkcmFnRWxlbWVudCA9IG51bGw7XHJcblx0XHRcdGRyYWdJdGVtID0gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG59IiwiLyoqXHJcbiAqIFNpbXBsZSBEb2N1bWVudCByZWFkeSBmdW5jdGlvbiwgZXF1aXZhbGVudCB0byBqUXVlcnkncyBkb2N1bWVudCByZWFkeS5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUmVhZHkgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGwgYSBmdW5jdGlvbiB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkb24uXHJcbiAqIEBwYXJhbSBmbiBGdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gZG9jdW1lbnQgcmVhZHlcclxuICovXHJcblJlYWR5LmdvID0gZnVuY3Rpb24oZm4pIHtcclxuICAgIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKXtcclxuICAgICAgICBmbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7UGxheWdyb3VuZH0gZnJvbSBcIi4vUGxheWdyb3VuZC9QbGF5Z3JvdW5kXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGxheWdyb3VuZEZhY3RvcnkgPSBmdW5jdGlvbigpIHt9XHJcblxyXG5QbGF5Z3JvdW5kRmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG5cdGZ1bmN0aW9uIGluc3RhbGwoKSB7XHJcblx0XHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jbC1wbGF5Z3JvdW5kJyk7XHJcblx0XHRmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG5cdFx0XHRjb25zdCBqc29uID0gSlNPTi5wYXJzZShlbGVtZW50LnRleHRDb250ZW50KTtcclxuXHRcdFx0ZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0Y29uc3QgcGxheWdyb3VuZCA9IG5ldyBQbGF5Z3JvdW5kKHNpdGUsIGVsZW1lbnQsIGpzb24pO1xyXG5cdFx0XHRwbGF5Z3JvdW5kLnN0YXJ0Tm93KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzaXRlLnN0YXJ0KCAoKSA9PiB7XHJcblx0XHRpbnN0YWxsKCk7XHJcblx0fSk7XHJcblxyXG5cclxuXHRzaXRlLm1lc3NhZ2VMaXN0ZW5lcigobXNnLCBkYXRhKSA9PiB7XHJcblx0XHRzd2l0Y2gobXNnKSB7XHJcblx0XHRcdGNhc2UgJ2NsLXF1aXotYWZ0ZXItaW5zdGFsbGVkJzpcclxuXHRcdFx0XHRpbnN0YWxsKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdjbC1ncmFkZXMtZ3JhZGVyLWluc3RhbGxlZCc6XHJcblx0XHRcdFx0aW5zdGFsbCgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0c2l0ZS5QbGF5Z3JvdW5kID0gUGxheWdyb3VuZDtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
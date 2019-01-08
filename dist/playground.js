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
/******/ 	var hotCurrentHash = "71b8e194b2fe7bb9493a";
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
exports.push([module.i, "div.cl-playground div.toast {\n  position: absolute;\n  bottom: 0;\n  visibility: hidden;\n  transform: translateY(2.3em);\n  z-index: 400;\n  transition: all 0.4s ease-in-out 0s, visibility 0s linear 0.4s, z-index 0s linear 0.01s;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1.1em;\n  left: calc(50% - 30em/2);\n  width: 30em;\n  background-color: #151515;\n  color: white;\n  text-align: center;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding: 0.5em;\n}\n\ndiv.cl-playground div.toast.toast-active {\n  visibility: visible;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.4s;\n  z-index: 400;\n}\n\ndiv.cl-playground {\n  display: none;\n}\n\ndiv.cl-playground nav.menubar {\n  flex: 0 1 auto;\n  position: relative;\n  z-index: 100;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background-color: #f0f3f0;\n  border-bottom: thin solid #808080;\n  font-size: 0.9rem;\n}\n\ndiv.cl-playground nav.menubar li:hover {\n  background: #00796B;\n}\n\ndiv.cl-playground nav.menubar li {\n  user-select: none;\n  cursor: pointer;\n}\n\ndiv.cl-playground nav.menubar li a,\ndiv.cl-playground nav.menubar li a:link,\ndiv.cl-playground nav.menubar li a:visited {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\n\ndiv.cl-playground nav.menubar > ul {\n  list-style-type: none;\n  margin: 0;\n  border: 0;\n  padding: 0;\n}\n\ndiv.cl-playground nav.menubar > ul img.check {\n  vertical-align: baseline;\n  width: 19px;\n  height: 16px;\n  content: url(" + escape(__webpack_require__(/*! ./img/menu-check.png */ "./vendor/cl/playground/img/menu-check.png")) + ");\n}\n\ndiv.cl-playground nav.menubar > ul > li {\n  display: inline-block;\n  margin: 0;\n  border: 0;\n  padding: 0.25em 2em 0.25em 0.5em;\n  position: relative;\n}\n\ndiv.cl-playground nav.menubar > ul > li a,\ndiv.cl-playground nav.menubar > ul > li a:link,\ndiv.cl-playground nav.menubar > ul > li a:visited {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.9rem;\n  color: black;\n  text-decoration: none;\n}\n\ndiv.cl-playground nav.menubar > ul ul {\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n  list-style-type: none;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: 100%;\n  margin: 1px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n  border-top-width: 0;\n}\n\ndiv.cl-playground nav.menubar > ul ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\n\ndiv.cl-playground nav.menubar > ul ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\ndiv.cl-playground nav.menubar > ul ul > li.menu-disabled a {\n  opacity: 0.3;\n}\n\ndiv.cl-playground nav.menubar > ul ul.menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\n\ndiv.cl-playground nav.menubar > ul ul.edit-menu a {\n  width: 6em;\n}\n\ndiv.cl-playground nav.menubar > ul ul.option-menu a {\n  width: 11em;\n}\n\ndiv.cl-playground nav.menubar > ul ul.file-menu a {\n  width: 6em;\n}\n\ndiv.cl-playground nav.menubar > ul ul.help-menu a {\n  width: 7.5em;\n}\n\ndiv.cl-playground nav.menubar > ul .ul-state-active {\n  color: red;\n}\n\ndiv.cl-playground nav.menubar > ul li.menu-divider {\n  height: 1px;\n  border: 0 solid black;\n  border-top-width: 1px;\n}\n\ndiv.cl-playground div.work {\n  flex: 1 1 auto;\n  position: relative;\n  width: 100%;\n  background: black;\n}\n\ndiv.cl-playground div.cl-pg-overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #a00;\n  opacity: 0.05;\n  z-index: 2000;\n  display: none;\n}\n\ndiv.cl-playground div.cl-pg-main {\n  line-height: normal;\n  font-size: 1rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\ndiv.cl-playground-full {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: white;\n}\n\ndiv.cl-playground-window {\n  position: relative;\n  width: 100%;\n  height: 600px;\n  margin: 0;\n  padding: 0;\n  border: thin solid #aaaaaa;\n  border-bottom: none;\n  background: white;\n  min-height: 100px;\n  min-width: 400px;\n}\n\ndiv.cl-playground-gap-before,\ndiv.cl-playground-gap-after {\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 1px;\n}\n\ndiv.cl-playground-gap-after {\n  height: 1em;\n}\n\ndiv.cirsim div.dialog-content {\n  position: relative;\n  padding: 0.5em;\n  font-size: 0.95em;\n}\n\ndiv.cirsim div.dialog-content input {\n  padding: 3px;\n  box-sizing: border-box;\n  font-size: 1.1em;\n}\n\ndiv.cirsim div.dialog-content h2 {\n  margin: 0.75em 0;\n}\n\ndiv.cirsim div.dialog-content form {\n  position: relative;\n  height: 100%;\n}\n\ndiv.cirsim div.dialog-content .large {\n  font-size: 1.2em;\n}\n\ndiv.cirsim div.dialog-content fieldset {\n  position: relative;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  min-width: 0;\n  max-width: 100%;\n}\n\ndiv.cirsim div.dialog-content p.error {\n  margin: 1em 0 0 0;\n  text-align: center;\n  color: red;\n  font-size: 0.9em;\n  font-style: italic;\n}\n\ndiv.cirsim div.dialog-content div.control {\n  position: relative;\n  margin: 0 0 1em 0;\n}\n\ndiv.cirsim div.dialog-content div.control label {\n  display: block;\n  font-style: italic;\n  margin: 0.2em 0 0.1em 0;\n}\n\ndiv.cirsim div.dialog-content div.control input {\n  display: block;\n}\n\ndiv.cirsim div.dialog-content div.control input[type=text],\ndiv.cirsim div.dialog-content div.control input[type=file] {\n  width: 100%;\n}\n\ndiv.cirsim div.dialog-content div.control input[type=radio] {\n  display: inline-block;\n}\n\ndiv.cirsim div.dialog-content div.control input[type=range] {\n  width: 100%;\n}\n\ndiv.cirsim div.dialog-content div.control p.selector {\n  text-align: center;\n}\n\ndiv.cirsim div.dialog-content div.control select {\n  width: 6em;\n}\n\ndiv.cirsim div.dialog-content div.control select.files {\n  width: 100%;\n}\n\ndiv.cirsim div.dialog-content div.control div.notice {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 45%;\n  text-align: center;\n  font-style: italic;\n  color: saddlebrown;\n}\n\ndiv.cirsim div.dialog-content div.control textarea {\n  width: 100%;\n}\n\ndiv.cirsim div.dialog-content div.control1 {\n  margin: 0 0 1em 0;\n}\n\ndiv.cirsim div.dialog-content div.control1 label {\n  display: inline-block;\n  font-style: italic;\n  padding-right: 0.5em;\n}\n\ndiv.cirsim div.dialog-content div.control1 select {\n  width: 6em;\n}\n\ndiv.cirsim div.dialog-content div.control1 input.number {\n  width: 2em;\n  text-align: center;\n}\n\ndiv.cirsim div.dialog-content div.control1 input.compname {\n  width: 4em;\n}\n\ndiv.cirsim div.dialog-content div.control1 input.tabname {\n  width: 6em;\n}\n\ndiv.cirsim div.dialog-content div.center {\n  text-align: center;\n}\n\ndiv.cirsim div.dialog-content div.indent {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\ndiv.cirsim div.dialog-content h1 {\n  margin: 0 0 0.5em 0;\n}\n\ndiv.cirsim div.dialog-content p {\n  color: #606060;\n}\n\ndiv.cirsim div.dialog-content .gap {\n  margin-top: 1em;\n}\n\ndiv.cirsim.about {\n  width: 400px;\n  text-align: center;\n}\n\ndiv.cirsim.about img {\n  width: 171px;\n  height: 75px;\n}\n\ndiv.cirsim.about div.dialog-content {\n  padding: 1em;\n}\n\ndiv.cirsim.help {\n  width: 450px;\n  height: 600px;\n}\n\ndiv.cirsim.component a.helper {\n  display: block;\n  position: absolute;\n  right: 0.5em;\n  top: 0.5em;\n  float: right;\n  color: #606060;\n  font-style: italic;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.85em;\n  padding: 0;\n}\n\ndiv.cirsim .cirsim-error {\n  color: red;\n}\n\ndiv.cirsim-dialog {\n  padding: 1em;\n  font-size: 0.95em;\n}\n\n.ui-dialog-buttonset button {\n  width: 6em;\n}\n\n.ui-dialog .ui-dialog-buttonpane {\n  padding: 0;\n}\n\ndiv.cirsim table {\n  margin-left: auto;\n  margin-right: auto;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: 0.9em;\n}\n\ndiv.cirsim table th {\n  color: white;\n  background: #18453B;\n  /* #3e9c45; */\n  background: linear-gradient(#18453B, #73d189);\n  text-shadow: rgba(0, 0, 0, 0.4) 0 1px 0;\n  border-right: 1px solid #C1DAD7;\n  border-bottom: 1px solid #C1DAD7;\n  border-top: 1px solid #C1DAD7;\n  letter-spacing: 1px;\n  text-align: left;\n  padding: 2px 6px;\n  font-family: Helvetica, Arial, sans-serif;\n  text-decoration: none;\n  vertical-align: bottom;\n}\n\ndiv.cirsim table th a:link {\n  color: #F5F3EB;\n}\n\ndiv.cirsim table th a:visited {\n  color: #E3DCC5;\n}\n\ndiv.cirsim table th a:hover {\n  color: #ffffff;\n}\n\ndiv.cirsim table th.width40 {\n  width: 20%;\n}\n\ndiv.cirsim table th.width40em {\n  width: 40em;\n}\n\ndiv.cirsim table th.width20em {\n  width: 20em;\n}\n\ndiv.cirsim table td {\n  border-right: 1px solid #C1DAD7;\n  border-bottom: 1px solid #C1DAD7;\n  background: #ffffff;\n  padding: 0.25em 0.75em;\n  color: #4f6b72;\n}\n\ndiv.cirsim table td a:link {\n  color: #8A8A8A;\n  text-decoration: underline;\n}\n\ndiv.cirsim table td a:visited {\n  color: #B09D5B;\n  text-decoration: underline;\n}\n\ndiv.cirsim table td a:hover {\n  color: #3366cc;\n  text-decoration: underline;\n}\n\ndiv.cirsim table.center td,\ndiv.cirsim table.center th {\n  text-align: center;\n}\n\ndiv.cirsim table.truth-table th {\n  color: black;\n  background: white;\n  text-shadow: none;\n  border: none;\n  border-bottom: 1px solid black;\n  text-align: center;\n}\n\ndiv.cirsim table.truth-table td {\n  border: 0;\n}\n\ndiv.cirsim table.truth-table th:last-child,\ndiv.cirsim table.truth-table td:last-child {\n  border-left: thin solid black;\n}\n\ndiv.cl-playground div.cl-pg-tabs {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  font-size: 0.8rem;\n  padding: 0;\n  background: #ddd;\n  border: 0;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul {\n  margin: 0;\n  padding: 3px 0 0 2px;\n  background: transparent;\n  border: 0;\n  list-style: none;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li {\n  position: relative;\n  display: inline-block;\n  font-size: 0.8rem;\n  padding: 0.25em 0.25em 0.45em 0;\n  min-width: 6em;\n  text-align: center;\n  cursor: pointer;\n  background: #ccc;\n  border: 1px solid black;\n  border-bottom: none;\n  border-radius: 5px 5px 0 0;\n  margin: 1px 3px -1px 0;\n  white-space: nowrap;\n  z-index: 18;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li a:first-child {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  display: inline-block;\n  padding: 0 0.25em;\n  text-decoration: none;\n  color: black;\n  outline: 0;\n  user-select: none;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) {\n  float: right;\n  display: inline-block;\n  margin-top: -2px;\n  padding: 0;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) img {\n  width: 12px;\n  height: auto;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li.selected {\n  background: white;\n  z-index: 22;\n}\n\ndiv.cl-playground div.cl-pg-tabs > ul > li.selected a {\n  color: black;\n}\n\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-views {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n}\n\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-view {\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 20;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\ndiv.cl-playground div.cl-pg-tabs div.cl-pg-view.selected {\n  display: block;\n  border-top: 1px solid black;\n}\n\ndiv.cl-playground div.cl-tab-menu {\n  position: absolute;\n  left: calc(100% - 17px);\n  top: 0;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n}\n\ndiv.cl-playground div.cl-tab-menu div {\n  position: absolute;\n  width: 14px;\n  height: 27px;\n  top: 4px;\n  left: 0;\n  border: 1px solid #808080;\n  border-bottom-width: 0;\n  background-color: #f0f3f0;\n}\n\ndiv.cl-playground div.cl-tab-menu div img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 12px;\n  height: auto;\n}\n\ndiv.cl-playground div.cl-tab-menu ul {\n  list-style-type: none;\n  overflow: hidden;\n  margin: 30px 0 0 0;\n  background-color: #f0f3f0;\n  padding: 0;\n  border: 1px solid #808080;\n}\n\ndiv.cl-playground div.cl-tab-menu ul > li {\n  padding: 0 5px;\n  margin: 0;\n  overflow: hidden;\n}\n\ndiv.cl-playground div.cl-tab-menu ul > li a {\n  display: inline-block;\n  width: 8em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\ndiv.cl-playground div.cl-tab-menu ul > li.menu-disabled a {\n  opacity: 0.3;\n}\n\ndiv.cl-playground div.cl-tab-menu.cl-menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s;\n}\n\ndiv.cl-playground div.cl-playground-root,\ndiv.cl-playground div.cl-playground-left,\ndiv.cl-playground div.cl-playground-right,\ndiv.cl-playground div.cl-playground-top,\ndiv.cl-playground div.cl-playground-bottom {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  background: white;\n}\n\ndiv.cl-playground div.cl-playground-left {\n  position: relative;\n  flex: 0 1 auto;\n  border-right: 1px solid #888;\n}\n\ndiv.cl-playground div.cl-playground-left div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  top: 0;\n  height: 100%;\n  right: -5px;\n  width: 10px;\n  background: transparent;\n  z-index: 100;\n  cursor: ew-resize;\n}\n\ndiv.cl-playground div.cl-playground-top {\n  flex: 0 1 auto;\n  width: 100%;\n  border-bottom: 1px solid #888;\n}\n\ndiv.cl-playground div.cl-playground-top div.cl-bar {\n  position: absolute;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  bottom: -5px;\n  height: 10px;\n  width: 100%;\n  background: transparent;\n  z-index: 2;\n  cursor: ns-resize;\n}\n\ndiv.cl-playground div.cl-playground-bottom {\n  width: 100%;\n  height: auto;\n}\n\ndiv.cl-playground div.cl-playground-root {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\ndiv.cl-pg-nums {\n  display: inline-block;\n  flex: 0 0 auto;\n  background: #eee;\n  width: 2em;\n  padding: 4px 0;\n  overflow: hidden;\n  margin: 0;\n}\n\ndiv.cl-pg-nums p {\n  font-size: 0.8em;\n  line-height: 16px;\n  margin: 0;\n  padding: 0 3px 0 0;\n  border: 0;\n  text-align: right;\n  color: #777;\n}\n\ndiv.cl-playground div.cl-pg-view.editor {\n  overflow: hidden;\n}\n\ndiv.cl-playground div.cl-pg-view.editor > div {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\n\ndiv.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor {\n  margin: 0;\n  display: block;\n  flex: 1 1 auto;\n  height: 100%;\n}\n\ndiv.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor textarea {\n  line-height: 16px;\n  margin: 0;\n  padding: 4px 0 0 3px;\n  border: 0;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  font-size: 1em;\n  font-family: monospace, monospace;\n}\n\ndiv.cl-playground div.cl-pg-view.output {\n  overflow: hidden;\n}\n\ndiv.cl-playground div.cl-pg-view.output > div {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\n\ndiv.cl-playground div.cl-pg-view.output > div pre {\n  display: block;\n  flex: 1 1 auto;\n  background: url(" + escape(__webpack_require__(/*! ./img/bars.png */ "./vendor/cl/playground/img/bars.png")) + ");\n  line-height: 16px;\n  margin: 0;\n  padding: 4px 0 0 3px;\n  border: 0;\n  overflow: auto;\n  height: 100%;\n}\n\n", ""]);

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

/***/ "./vendor/cl/playground/js/Playground/Actions/Action.js":
/*!**************************************************************!*\
  !*** ./vendor/cl/playground/js/Playground/Actions/Action.js ***!
  \**************************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
var Action = function Action(site, options) {};

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
      this.toast.create(this.div);
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
    _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].addClass(_this.nav, 'menubar');
    main.div.appendChild(_this.nav);
    var ul = document.createElement('ul');

    _this.nav.appendChild(ul);

    _this.ul = ul;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = options.menus[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var menu = _step.value;
        var topLI = document.createElement('li');
        ul.appendChild(topLI);
        var a = document.createElement('a');
        topLI.appendChild(a);
        a.innerText = menu.name;

        if (menu.action !== undefined) {
          (function () {
            var action = main.playground.getAction(menu.action);
            a.addEventListener('click', function (event) {
              event.preventDefault();
              action.click(main);
            });
          })();
        }
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

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      var _loop = function _loop() {
        var node = _step2.value;

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

      for (var _iterator2 = ul.childNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        _loop();
      } // Activate all of the menus
      // fileMenu.activate();
      // editMenu.activate();
      // tabsMenu.activate();
      // helpMenu.activate();

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

          if (_ul !== null) {
            _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].removeClass(_ul, 'menu-open');
          }
        }
      } // tabsMenu.opening();
      // helpMenu.opening();
      // And open this menu

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
      _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].addClass(ul, 'menu-open');
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
            _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].removeClass(ul, 'menu-open');
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
  }];

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
  }); //
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9fcGxheWdyb3VuZC5zY3NzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL19wbGF5Z3JvdW5kLnNjc3M/NDZlMSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbWcvYmFycy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvaW1nL21lbnUtY2hlY2sucG5nIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2ltZy9tZW51YmFycy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9BY3Rpb25zL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0RPTS9Ub29scy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL0dyYXBoaWNzL1RvYXN0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvTWFpbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL01lbnUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9PcHRpb25zLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvUGFuZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1BsYXlncm91bmQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9UYWJzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVGFicy9FZGl0b3JUYWIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9UYWJzL091dHB1dFRhYi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1RhYnMvVGFiLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVUkvRHJhZ0FuZERyb3AuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9VdGlsaXR5L1JlYWR5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmRGYWN0b3J5LmpzIl0sIm5hbWVzIjpbIlBsYXlncm91bmRGYWN0b3J5IiwiY3JlYXRlIiwiU2l0ZSIsInNpdGUiLCJQbGF5Z3JvdW5kIiwiQWN0aW9uIiwib3B0aW9ucyIsIlRvb2xzIiwiaXNWaXNpYmxlIiwiZWxlbSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZ2V0Q2xpZW50UmVjdHMiLCJsZW5ndGgiLCJhZGRDbGFzcyIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRDbGFzc2VzIiwiY2xhc3NlcyIsInVuZGVmaW5lZCIsInNwbGl0IiwiZm9yRWFjaCIsImNscyIsInJlbW92ZUNsYXNzIiwicmVnRXgiLCJSZWdFeHAiLCJyZXBsYWNlIiwiY3JlYXRlQ2xhc3NlZERpdiIsImNvbnRlbnQiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhZGRDb250ZW50IiwiaXNTdHJpbmciLCJpbm5lckhUTUwiLCJpc0VsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInZhbCIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsIm5vZGVWYWx1ZSIsIm9mZnNldCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsIndpbmRvdyIsInBhZ2VYT2Zmc2V0IiwidG9wIiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJjaGlsZCIsInRhZ05hbWUiLCJjaGlsZE5vZGVzIiwibm9kZSIsIlRvYXN0IiwibWFpbiIsImRlZmF1bHREdXJhdGlvbiIsImludGVyVG9hc3REZWxheSIsIm1lc3NhZ2VzIiwiYWN0aXZlIiwic2hvdyIsIm1lc3NhZ2UiLCJzcGxpY2UiLCJtc2ciLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidGltZSIsInB1c2giLCJqc29uRXJyb3JzIiwianNvbkFwaSIsImVycm9ycyIsImVycm9yIiwidGl0bGUiLCJNYWluIiwicGxheWdyb3VuZCIsIm1lbnUiLCJ0YWJzIiwiZGl2T3ZlcmxheSIsImRpdldvcmsiLCJpbml0aWFsaXplIiwic3R5bGUiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiY29udGFpbnMiLCJSZXNpemVyIiwiaGFuZGxlIiwiZHJhZ0FuZERyb3AiLCJEcmFnQW5kRHJvcCIsIk1lbnUiLCJyb290UGFuZSIsIlBhbmUiLCJsb2FkIiwicGFuZSIsInRvYXN0IiwiZ2V0VGFiIiwidGFnIiwibmV3VGFiIiwibW9kYWwiLCJuYXYiLCJ1bCIsIm1lbnVzIiwidG9wTEkiLCJhIiwiaW5uZXJUZXh0IiwibmFtZSIsImFjdGlvbiIsImdldEFjdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xpY2siLCJ1bFN1YiIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwib3BlbiIsImNsb3NlQWxsIiwiY2xvc2VMaXN0ZW5lciIsInRhcmdldCIsInBhcmVudE5vZGUiLCJsaSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmFibGUiLCJzZWwiLCJxdWVyeVNlbGVjdG9yIiwiZmluZCIsImNsb3N1cmUiLCJPcHRpb25zIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwiZ2V0QVBJIiwibW9kZSIsImFwaSIsIm9iaiIsIm1vZGVPYmoiLCJ1cmwiLCJjb250ZW50VHlwZSIsImV4dHJhIiwicGFyZW50IiwibWluU3BsaXQiLCJtYXhTcGxpdCIsImNoaWxkMSIsImNoaWxkMiIsImhvcml6b250YWxTcGxpdCIsImRhdGEiLCJob3JpeiIsInBlcmNlbnRhZ2UiLCJUYWJzIiwiaG9yaXpvbnRhbCIsImNoaWxkMURhdGEiLCJjaGlsZDJEYXRhIiwiZmxleERpcmVjdGlvbiIsImJhciIsInN0YXJ0RHJhZ2dpbmciLCJwYWdlWCIsInBhZ2VZIiwibW91c2VNb3ZlIiwibW91c2VVcCIsImNvbnNvbGUiLCJsb2ciLCJ0b3VjaCIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2hNb3ZlIiwidG91Y2hFbmQiLCJ0b3VjaENhbmNlbCIsInN0YXJ0WCIsInN0YXJ0WSIsIngiLCJ5IiwiZW5kRHJhZ2dpbmciLCJkcmFnZ2luZyIsIm1haW5YIiwid2lkIiwicmlnaHQiLCJwZXIiLCJtYWluWSIsImhpdCIsImJvdHRvbSIsIndoaWNoIiwid2lkdGgiLCJjb2xsZWN0aW9uIiwidGFiIiwiUEFDS0FHRSIsInJlcXVpcmUiLCJ2ZXJzaW9uIiwibWFpbnMiLCJzdGFydCIsInN0YXJ0Tm93IiwiUmVhZHkiLCJnbyIsIkVsZW1lbnQiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwiYWN0aW9ucyIsImFkZEFjdGlvbiIsInRhYnNEaXYiLCJ2aWV3c0RpdiIsInRhYkRhdGEiLCJuZXdQYXJlbnQiLCJ0eXBlIiwiRWRpdG9yVGFiIiwiT3V0cHV0VGFiIiwidmlldyIsInNlbGVjdCIsInVuc2VsZWN0QWxsIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiVGFiIiwiaW5uZXJWaWV3IiwibnVtcyIsImVkaXRvckRpdiIsImVkaXRvciIsIkVkaXRvciIsInJlc2l6ZSIsImF1dG9JbmRlbnQiLCJzdHlsZXMiLCJzY3JvbGxhYmxlIiwidGV4dGFyZWEiLCJzZXQiLCJ0ZXh0IiwidmFsdWUiLCJsaW5lcyIsInAiLCJnZXQiLCJmb2N1cyIsImNvbnN0cnVjdG9yIiwicHJlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZHJhZ0VsZW1lbnQiLCJkcmFnSXRlbSIsImRyb3BWaWV3cyIsImRyYWdnYWJsZSIsInBhbGV0dGVJdGVtIiwiZHJvcHBhYmxlIiwiY2FsbGJhY2siLCJjbG9uZSIsInBhbGV0dGVJbWFnZSIsInBvc2l0aW9uIiwiekluZGV4IiwiY3Vyc29yIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJ2aWV3RWxlbWVudCIsInZpZXdYIiwidmlld1kiLCJmbiIsImF0dGFjaEV2ZW50IiwicmVhZHlTdGF0ZSIsImluc3RhbGwiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwidGV4dENvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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eUwsQ0FBQyxFQUFqQyxFQUFxQztBQUNwQyxVQUFJdkwsT0FBTyxHQUFHcUwsUUFBUSxDQUFDRSxDQUFELENBQXRCO0FBQ0EsVUFBTXlELElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdsUCxPQUFPLENBQUNtUCxXQUFuQixDQUFiO0FBQ0FuUCxhQUFPLENBQUNxQixTQUFSLEdBQW9CLEVBQXBCO0FBQ0EsVUFBTTJDLFVBQVUsR0FBRyxJQUFJM0UsaUVBQUosQ0FBZUQsSUFBZixFQUFxQlksT0FBckIsRUFBOEJnUCxJQUE5QixDQUFuQjtBQUNBaEwsZ0JBQVUsQ0FBQ2lILFFBQVg7QUFDQTtBQUNEOztBQUVEN0wsTUFBSSxDQUFDNEwsS0FBTCxDQUFZLFlBQU07QUFDakIrRCxXQUFPO0FBQ1AsR0FGRDtBQUlBM1AsTUFBSSxDQUFDQyxVQUFMLEdBQWtCQSxpRUFBbEI7QUFDQSxDQWxCRCxDIiwiZmlsZSI6InBsYXlncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJQbGF5Z3JvdW5kXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlBsYXlncm91bmRcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cbiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZV9uYW1lX1wiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHRpZiAobnVsbCkgc2NyaXB0LmNyb3NzT3JpZ2luID0gbnVsbDtcbiBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjcxYjhlMTk0YjJmZTdiYjk0OTNhXCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbiBcdFx0fTtcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuIFx0XHRyZXR1cm4gaG90O1xuIFx0fVxuXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcblxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuIFx0fVxuXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdERlZmVycmVkO1xuXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0Zm9yKHZhciBjaHVua0lkIGluIGluc3RhbGxlZENodW5rcylcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHQpXG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdCBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIlBsYXlncm91bmRcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY2wvZGlzdC9cIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbmRleC5qc1wiLFwiY29tbW9uXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuY2wtcGxheWdyb3VuZCBkaXYudG9hc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIuM2VtKTtcXG4gIHotaW5kZXg6IDQwMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjRzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMzBlbS8yKTtcXG4gIHdpZHRoOiAzMGVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYudG9hc3QudG9hc3QtYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjRzO1xcbiAgei1pbmRleDogNDAwO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjODA4MDgwO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMwMDc5NkI7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyIGxpIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciBsaSBhLFxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyIGxpIGE6bGluayxcXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciBsaSBhOnZpc2l0ZWQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgPiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciA+IHVsIGltZy5jaGVjayB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB3aWR0aDogMTlweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGNvbnRlbnQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9pbWcvbWVudS1jaGVjay5wbmdcIikpICsgXCIpO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciA+IHVsID4gbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMC4yNWVtIDJlbSAwLjI1ZW0gMC41ZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyID4gdWwgPiBsaSBhLFxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyID4gdWwgPiBsaSBhOmxpbmssXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgPiB1bCA+IGxpIGE6dmlzaXRlZCB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciA+IHVsIHVsIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAxMDAlO1xcbiAgbWFyZ2luOiAxcHggMCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxuICBib3JkZXItdG9wLXdpZHRoOiAwO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciA+IHVsIHVsID4gbGkge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciA+IHVsIHVsID4gbGkgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOGVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyID4gdWwgdWwgPiBsaS5tZW51LWRpc2FibGVkIGEge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciA+IHVsIHVsLm1lbnUtb3BlbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyID4gdWwgdWwuZWRpdC1tZW51IGEge1xcbiAgd2lkdGg6IDZlbTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgPiB1bCB1bC5vcHRpb24tbWVudSBhIHtcXG4gIHdpZHRoOiAxMWVtO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciA+IHVsIHVsLmZpbGUtbWVudSBhIHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5tZW51YmFyID4gdWwgdWwuaGVscC1tZW51IGEge1xcbiAgd2lkdGg6IDcuNWVtO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBuYXYubWVudWJhciA+IHVsIC51bC1zdGF0ZS1hY3RpdmUge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2Lm1lbnViYXIgPiB1bCBsaS5tZW51LWRpdmlkZXIge1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IDAgc29saWQgYmxhY2s7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi53b3JrIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogI2EwMDtcXG4gIG9wYWNpdHk6IDAuMDU7XFxuICB6LWluZGV4OiAyMDAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLW1haW4ge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZnVsbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtd2luZG93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IHRoaW4gc29saWQgI2FhYWFhYTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWJlZm9yZSxcXG5kaXYuY2wtcGxheWdyb3VuZC1nYXAtYWZ0ZXIge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZ2FwLWFmdGVyIHtcXG4gIGhlaWdodDogMWVtO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMC45NWVtO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBpbnB1dCB7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgaDIge1xcbiAgbWFyZ2luOiAwLjc1ZW0gMDtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IC5sYXJnZSB7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBmaWVsZHNldCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBwLmVycm9yIHtcXG4gIG1hcmdpbjogMWVtIDAgMCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMCAwIDFlbSAwO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbCBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIG1hcmdpbjogMC4yZW0gMCAwLjFlbSAwO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbCBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wgaW5wdXRbdHlwZT10ZXh0XSxcXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbCBpbnB1dFt0eXBlPWZpbGVdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbCBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sIGlucHV0W3R5cGU9cmFuZ2VdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbCBwLnNlbGVjdG9yIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wgc2VsZWN0IHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sIHNlbGVjdC5maWxlcyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wgZGl2Lm5vdGljZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDQ1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiBzYWRkbGVicm93bjtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wgdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sMSB7XFxuICBtYXJnaW46IDAgMCAxZW0gMDtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wxIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuY29udHJvbDEgc2VsZWN0IHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sMSBpbnB1dC5udW1iZXIge1xcbiAgd2lkdGg6IDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LmNpcnNpbSBkaXYuZGlhbG9nLWNvbnRlbnQgZGl2LmNvbnRyb2wxIGlucHV0LmNvbXBuYW1lIHtcXG4gIHdpZHRoOiA0ZW07XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jb250cm9sMSBpbnB1dC50YWJuYW1lIHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcblxcbmRpdi5jaXJzaW0gZGl2LmRpYWxvZy1jb250ZW50IGRpdi5jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBkaXYuaW5kZW50IHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBoMSB7XFxuICBtYXJnaW46IDAgMCAwLjVlbSAwO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCBwIHtcXG4gIGNvbG9yOiAjNjA2MDYwO1xcbn1cXG5cXG5kaXYuY2lyc2ltIGRpdi5kaWFsb2ctY29udGVudCAuZ2FwIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuXFxuZGl2LmNpcnNpbS5hYm91dCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi5jaXJzaW0uYWJvdXQgaW1nIHtcXG4gIHdpZHRoOiAxNzFweDtcXG4gIGhlaWdodDogNzVweDtcXG59XFxuXFxuZGl2LmNpcnNpbS5hYm91dCBkaXYuZGlhbG9nLWNvbnRlbnQge1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG5kaXYuY2lyc2ltLmhlbHAge1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgaGVpZ2h0OiA2MDBweDtcXG59XFxuXFxuZGl2LmNpcnNpbS5jb21wb25lbnQgYS5oZWxwZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMC41ZW07XFxuICB0b3A6IDAuNWVtO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgY29sb3I6ICM2MDYwNjA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZGl2LmNpcnNpbSAuY2lyc2ltLWVycm9yIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbmRpdi5jaXJzaW0tZGlhbG9nIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGZvbnQtc2l6ZTogMC45NWVtO1xcbn1cXG5cXG4udWktZGlhbG9nLWJ1dHRvbnNldCBidXR0b24ge1xcbiAgd2lkdGg6IDZlbTtcXG59XFxuXFxuLnVpLWRpYWxvZyAudWktZGlhbG9nLWJ1dHRvbnBhbmUge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUgdGgge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogIzE4NDUzQjtcXG4gIC8qICMzZTljNDU7ICovXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzE4NDUzQiwgIzczZDE4OSk7XFxuICB0ZXh0LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDAgMXB4IDA7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQzFEQUQ3O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDMURBRDc7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0MxREFENztcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMnB4IDZweDtcXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZSB0aCBhOmxpbmsge1xcbiAgY29sb3I6ICNGNUYzRUI7XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUgdGggYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiAjRTNEQ0M1O1xcbn1cXG5cXG5kaXYuY2lyc2ltIHRhYmxlIHRoIGE6aG92ZXIge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUgdGgud2lkdGg0MCB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG5cXG5kaXYuY2lyc2ltIHRhYmxlIHRoLndpZHRoNDBlbSB7XFxuICB3aWR0aDogNDBlbTtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZSB0aC53aWR0aDIwZW0ge1xcbiAgd2lkdGg6IDIwZW07XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUgdGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0MxREFENztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzFEQUQ3O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjc1ZW07XFxuICBjb2xvcjogIzRmNmI3MjtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZSB0ZCBhOmxpbmsge1xcbiAgY29sb3I6ICM4QThBOEE7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZSB0ZCBhOnZpc2l0ZWQge1xcbiAgY29sb3I6ICNCMDlENUI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZSB0ZCBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjMzM2NmNjO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmRpdi5jaXJzaW0gdGFibGUuY2VudGVyIHRkLFxcbmRpdi5jaXJzaW0gdGFibGUuY2VudGVyIHRoIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZS50cnV0aC10YWJsZSB0aCB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5kaXYuY2lyc2ltIHRhYmxlLnRydXRoLXRhYmxlIHRkIHtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuZGl2LmNpcnNpbSB0YWJsZS50cnV0aC10YWJsZSB0aDpsYXN0LWNoaWxkLFxcbmRpdi5jaXJzaW0gdGFibGUudHJ1dGgtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItbGVmdDogdGhpbiBzb2xpZCBibGFjaztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzcHggMCAwIDJweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMC4yNWVtIDAuMjVlbSAwLjQ1ZW0gMDtcXG4gIG1pbi13aWR0aDogNmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgbWFyZ2luOiAxcHggM3B4IC0xcHggMDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB6LWluZGV4OiAxODtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG91dGxpbmU6IDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpIGE6bnRoLWNoaWxkKDIpIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkgYTpudGgtY2hpbGQoMikgaW1nIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB6LWluZGV4OiAyMjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgPiB1bCA+IGxpLnNlbGVjdGVkIGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyBkaXYuY2wtcGctdmlld3Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMjlweDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogMjA7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIGRpdi5jbC1wZy12aWV3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXcuc2VsZWN0ZWQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiBjYWxjKDEwMCUgLSAxN3B4KTtcXG4gIHRvcDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMjdweDtcXG4gIHRvcDogNHB4O1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IGRpdiBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMzBweCAwIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwgPiBsaSBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4ZW07XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51IHVsID4gbGkubWVudS1kaXNhYmxlZCBhIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXRhYi1tZW51LmNsLW1lbnUtb3BlbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3QsXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtbGVmdCxcXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1yaWdodCxcXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC10b3AsXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtYm90dG9tIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtbGVmdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4ODg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQgZGl2LmNsLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcmlnaHQ6IC01cHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgei1pbmRleDogMTAwO1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXRvcCBkaXYuY2wtYmFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3R0b206IC01cHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgei1pbmRleDogMjtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1ib3R0b20ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG5kaXYuY2wtcGctbnVtcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICB3aWR0aDogMmVtO1xcbiAgcGFkZGluZzogNHB4IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5kaXYuY2wtcGctbnVtcyBwIHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgM3B4IDAgMDtcXG4gIGJvcmRlcjogMDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6ICM3Nzc7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiBkaXYuY2wtcGctZWRpdG9yIHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciA+IGRpdiBkaXYuY2wtcGctZWRpdG9yIHRleHRhcmVhIHtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNHB4IDAgMCAzcHg7XFxuICBib3JkZXI6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0ID4gZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQgPiBkaXYgcHJlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vaW1nL2JhcnMucG5nXCIpKSArIFwiKTtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNHB4IDAgMCAzcHg7XFxuICBib3JkZXI6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vX3BsYXlncm91bmQuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxMzkxNTNkNlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9fcGxheWdyb3VuZC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vX3BsYXlncm91bmQuc2Nzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQTRBQUFBZ0FnTUFBQUJmZ0tFRUFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFBRnpVa2RDQUs3T0hPa0FBQUFNVUV4VVJmLy8vK0wvOStILzkrWC8rT2g0SFRNQUFBQWVTVVJCVkFqWFkyQWdFdnovLy84RHc2cFZxeFl3aElhR0JsQk9FQWtBVTJNWTN0RGY5YVVBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQk1BQUFBT0NBWUFBQUROR0NlSkFBQUJTMmxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ05TNDJMV014TkRJZ056a3VNVFl3T1RJMExDQXlNREUzTHpBM0x6RXpMVEF4T2pBMk9qTTVJQ0FnSUNBZ0lDQWlQZ29nUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0S0lDQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJaTgrQ2lBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ284UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrbmh4Zzd3QUFBVmRKUkVGVU9JMlYwYkZyVTFFVUIrRHZSV05zSUpOUXU2dDFFOHlrdURnS0JRbElGd2RIa1E3K0F3VTd1cmwwRk1RNWNYRndzb01ndUloU3FvUHRKQTUxRUhHb2hlZFFmZzU1U1Y5amFlS0Z3NzF3RHQ4OWh5T0plc3g2MHU4M3NyUjBMbHdLdmRBckpvR2lLS1pEcTZ2ekJvT3VuWjFydUlnZkdQd1hsbTczbElPRFc3YTNsNVhsSW43aE5mcllOY3VZMmR1VFhtOHVQQWdmUWovY0Q0dWhHUVJUc2V6dnk4cEtKendNWDhLemNDR2NIaUdIR0hQaFNsZ0lSWnJOVmpZM2gxQlp5dHBhcCtyb1UzZ2E1djlCeGo4UGtSZGhON3dMZDhMbHROdnRySzkzd3Qzd01RekMrV09SR2lZVTRYcllDbDhyOUY2NEhUYkMrM0N6cWpzZXFtR2pPQk9laE8vaFczaFo0WTlENjBSb3ZJQ2pZQ004Q2o4cjlITzRPaFVhWTZNNEJGdmhUZmdkM29hejQ5ekU5dXZSbUpCSHJ6L1lRSW5uMVYzUHo5RFowUTY3NFZXMTdhbGRKVG1oWURqYWpWbWhKUDRDeTFaVTYrZENnM0FBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUJBTUFBQUR0M2VKU0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUVsQk1WRVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURnS3htaUFBQUFCWFJTVGxNQXYvSUJEVmFRc2o4QUFBQUJZa3RIUkFDSUJSMUlBQUFBQ1hCSVdYTUFBQXNTQUFBTEVnSFMzWDc4QUFBQUhFbEVRVlFJMTJOZ3dBMFlsY0JBQU1GZ2RnRURBd1NEUERXNEFRQjJYQXhiOEVuVnFRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJcclxuaW1wb3J0ICcuL19wbGF5Z3JvdW5kLnNjc3MnO1xyXG5pbXBvcnQge1BsYXlncm91bmR9IGZyb20gJy4vanMvUGxheWdyb3VuZC9QbGF5Z3JvdW5kJztcclxuaW1wb3J0IHtQbGF5Z3JvdW5kRmFjdG9yeX0gZnJvbSAnLi9qcy9QbGF5Z3JvdW5kRmFjdG9yeSc7XHJcblxyXG5leHBvcnQge1BsYXlncm91bmR9O1xyXG5leHBvcnQge1BsYXlncm91bmQgYXMgZGVmYXVsdH07XHJcblxyXG5QbGF5Z3JvdW5kRmFjdG9yeS5jcmVhdGUoU2l0ZS5zaXRlKTtcclxuXHJcblNpdGUuUGxheWdyb3VuZCA9IFBsYXlncm91bmQ7XHJcblxyXG4iLCJcclxuZXhwb3J0IGNvbnN0IEFjdGlvbiA9IGZ1bmN0aW9uKHNpdGUsIG9wdGlvbnMpIHtcclxuXHJcblxyXG5cclxufSIsIlxyXG5cclxuLyoqXHJcbiAqIENvbnZlbmllbmNlIGZ1bmN0aW9ucyBmb3IgdGhlIERPTS5cclxuICogVG9vbHMgdGhhdCBhdm9pZCBoYXZpbmcgdG8gaGF2ZSBqUXVlcnkgaW5zdGFsbGVkLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBUb29scyA9IGZ1bmN0aW9uKCkge1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIElzIGFuIGVsZW1lbnQgdmlzaWJsZT9cclxuICogQm9ycm93ZWQgZnJvbSBqUXVlcnkhXHJcbiAqIEBwYXJhbSBlbGVtXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuVG9vbHMuaXNWaXNpYmxlID0gZnVuY3Rpb24oIGVsZW0gKSB7XHJcbiAgICByZXR1cm4gISEoIGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZCBhIGNsYXNzIHRvIGFuIGVsZW1lbnRcclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBhZGQgdG9cclxuICogQHBhcmFtIGNsYXNzTmFtZSBDbGFzcyB0byBhZGRcclxuICovXHJcblRvb2xzLmFkZENsYXNzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xyXG59XHJcblxyXG5Ub29scy5hZGRDbGFzc2VzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc3Nlcykge1xyXG4gICAgaWYoY2xhc3NlcyA9PT0gdW5kZWZpbmVkIHx8IGNsYXNzZXMgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goKGNscykgPT4ge1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzKGVsZW1lbnQsIGNscyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuVG9vbHMucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICAgIGxldCByZWdFeCA9IG5ldyBSZWdFeHAoJ1xcXFxiJyArIGNsYXNzTmFtZSArICdcXFxcYicsICdnJyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmVnRXgsIFwiXCIpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgRElWIHdpdGggYSBwcm92aWRlZCBjbGFzcyBuYW1lLlxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIENsYXNzIHRvIGFkZCB0byB0aGUgZGl2XHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGRpdi4gSFRNTCBvciBFbGVtZW50XHJcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBDcmVhdGVkIERPTSBFbGVtZW50XHJcbiAqL1xyXG5Ub29scy5jcmVhdGVDbGFzc2VkRGl2ID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBjb250ZW50KSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBUb29scy5hZGRDbGFzcyhkaXYsIGNsYXNzTmFtZSk7XHJcbiAgICBpZihjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuXHQgICAgVG9vbHMuYWRkQ29udGVudChkaXYsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBjb250ZW50IHRvIGFuIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gYWRkIHRvXHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQuIENhbiBiZSBIVE1MIG9yIGFuIEVsZW1lbnQuXHJcbiAqL1xyXG5Ub29scy5hZGRDb250ZW50ID0gZnVuY3Rpb24oZWxlbWVudCwgY29udGVudCkge1xyXG4gICAgaWYoVG9vbHMuaXNTdHJpbmcoY29udGVudCkpIHtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSBjb250ZW50O1xyXG4gICAgfSBlbHNlIGlmKFRvb2xzLmlzRWxlbWVudChjb250ZW50KSkge1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJcyB0aGUgcGFzc2VkIHZhbHVlIGEgc3RyaW5nP1xyXG4gKiBAcGFyYW0gdmFsXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuVG9vbHMuaXNTdHJpbmcgPSBmdW5jdGlvbih2YWwpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCAoKCEhdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpO1xyXG59XHJcblxyXG4vKipcclxuICogSXMgdGhlIHBhc3NlZCB2YWx1ZSBhbiBIVE1MRWxlbWVudD9cclxuICogQHBhcmFtIHZhbFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcblRvb2xzLmlzRWxlbWVudCA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgcmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCAmJiB2YWwubm9kZVZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgYW4gZWxlbWVudCAoc3BlY2lmaWNhbGx5IGl0cyBib3JkZXIgYm94LCB3aGljaCBleGNsdWRlcyBtYXJnaW5zKSByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnQuXHJcbiAqIEBwYXJhbSBlbGVtZW50XHJcbiAqL1xyXG5Ub29scy5vZmZzZXQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0Y29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0cmV0dXJuIHtcclxuXHQgICAgbGVmdDogcmVjdC5sZWZ0ICsgZWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0LFxyXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyBlbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmluZCBhIGNoaWxkIGJ5IHRhZ05hbWVcclxuICogQHBhcmFtIGVsZW1lbnRcclxuICogQHBhcmFtIHRhZ05hbWVcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5Ub29scy5jaGlsZCA9IGZ1bmN0aW9uKGVsZW1lbnQsIHRhZ05hbWUpIHtcclxuXHRmb3IoY29uc3Qgbm9kZSBvZiBlbGVtZW50LmNoaWxkTm9kZXMpIHtcclxuXHQgICAgaWYobm9kZS50YWdOYW1lID09PSB0YWdOYW1lKSB7XHJcblx0ICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQge1Rvb2xzfSBmcm9tICcuLi9ET00vVG9vbHMnO1xyXG5cclxuLyoqXHJcbiAqIFRvYXN0IG5vdGlmaWNhdGlvbiBzeXN0ZW1cclxuICogalF1ZXJ5LWZyZWVcclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVG9hc3QgPSBmdW5jdGlvbihtYWluKSB7XHJcblx0LyoqIERlZmF1bHQgdG9hc3QgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzICovXHJcblx0dGhpcy5kZWZhdWx0RHVyYXRpb24gPSAyMDAwO1xyXG5cclxuXHQvKiogSW50ZXItdG9hc3QgZGVsYXkgdGltZSBpbiBtaWxsaXNlY29uZHMgKi9cclxuXHR0aGlzLmludGVyVG9hc3REZWxheSA9IDUwMDtcclxuXHJcbiAgICBsZXQgbWVzc2FnZXMgPSBbXTsgIC8vIFBlbmRpbmcgbWVzc2FnZXNcclxuICAgIGxldCBhY3RpdmUgPSBmYWxzZTsgLy8gSXMgdGhlcmUgYW4gYWN0aXZlIG1lc3NhZ2UgZGlzcGxheWluZz9cclxuXHJcblx0bGV0IGVsZW1lbnQgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgdGhlIHRvYXN0IGRpdlxyXG5cdCAqIEBwYXJhbSBkaXYgRGl2IHRvIHB1dCB0aGUgdG9hc3QgaW50b1xyXG5cdCAqL1xyXG4gICAgdGhpcy5jcmVhdGUgPSAoZGl2KSA9PiB7XHJcblx0XHRlbGVtZW50ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdigndG9hc3QnKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcblx0XHRlbGVtZW50LmlubmVySFRNTCA9ICd0ZXN0aW5nJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xyXG4gICAgXHRpZihtZXNzYWdlcy5sZW5ndGggPiAwICYmICFhY3RpdmUpIHtcclxuXHRcdCAgICAvLyBTZXQgdGhlIG1lc3NhZ2VcclxuXHRcdCAgICBsZXQgbWVzc2FnZSA9IG1lc3NhZ2VzWzBdO1xyXG4gICAgICAgICAgICBtZXNzYWdlcy5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gbWVzc2FnZS5tc2c7XHJcblxyXG4gICAgICAgICAgICAvLyBTaG93IGl0XHJcblx0XHQgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2FzdC1hY3RpdmUnKTtcclxuXHRcdCAgICBhY3RpdmUgPSB0cnVlO1xyXG5cclxuXHRcdCAgICAvLyBEZWxheSB3aGlsZSBhY3RpdmVcclxuXHRcdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdCAgICBcdC8vIEhpZGUgaXRcclxuXHRcdFx0ICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndG9hc3QtYWN0aXZlJyk7XHJcblxyXG5cdFx0XHQgICAgLy8gRGVsYXkgYmV0d2VlbiB0b2FzdHNcclxuXHRcdFx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHQgICAgXHRhY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0ICAgIFx0c2hvdygpO1xyXG5cdFx0XHQgICAgfSwgdGhpcy5pbnRlclRvYXN0RGVsYXkpXHJcblx0XHQgICAgfSwgbWVzc2FnZS50aW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERpc3BsYXkgYSB0b2FzdCBtZXNzYWdlXHJcblx0ICogQHBhcmFtIG1zZyBNZXNzYWdlIHRvIGRpc3BsYXlcclxuXHQgKiBAcGFyYW0gdGltZSBUaW1lIHRvIGRpc3BsYXkgaW4gbWlsbGlzZWNvbmRzLCBvbWl0IGZvciBkZWZhdWx0XHJcblx0ICovXHJcblx0dGhpcy5tZXNzYWdlID0gZnVuY3Rpb24obXNnLCB0aW1lKSB7XHJcbiAgICAgICAgaWYodGltZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRpbWUgPSB0aGlzLmRlZmF1bHREdXJhdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lc3NhZ2VzLnB1c2goe21zZzogbXNnLCB0aW1lOiB0aW1lfSk7XHJcbiAgICAgICAgc2hvdygpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBEaXNwbGF5IGFueSBKU09OIGVycm9ycyB3ZSBoYXZlIHJlY2VpdmVkLlxyXG5cdCAqIEBwYXJhbSBqc29uQXBpIEpzb25BUEkgb2JqZWN0XHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgYW55IGVycm9ycyBleGlzdGVkLlxyXG5cdCAqL1xyXG5cdHRoaXMuanNvbkVycm9ycyA9IGZ1bmN0aW9uKGpzb25BcGkpIHtcclxuICAgICAgICBpZihqc29uQXBpLmVycm9ycygpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGpzb25BcGkuZXJyb3JzKCkuZm9yRWFjaCgoZXJyb3IpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UoJ1NlcnZlciBFcnJvcjogJyArIGVycm9yLnRpdGxlLCA1MDAwKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IFJlc2l6ZXIgZnJvbSAncmVzaXplci1jbCc7XHJcblxyXG5pbXBvcnQge01lbnV9IGZyb20gJy4vTWVudSc7XHJcbmltcG9ydCB7VG9hc3R9IGZyb20gJy4vR3JhcGhpY3MvVG9hc3QnO1xyXG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuL1VJL0RyYWdBbmREcm9wJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSAnLi9ET00vVG9vbHMnO1xyXG5pbXBvcnQge1BhbmV9IGZyb20gXCIuL1BhbmVcIjtcclxuXHJcblxyXG4vKipcclxuICogQWN0dWFsIGluc3RhbmNlIG9mIHRoZSBQbGF5Z3JvdW5kIGZvciBhIHNpbmdsZSBlbGVtZW50LlxyXG4gKiBAcGFyYW0gcGxheWdyb3VuZCBUaGUgbWFpbiBQbGF5Z3JvdW5kIG9iamVjdFxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHdlIGFyZSBsb2FkaW5nIGludG9cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWFpbiA9IGZ1bmN0aW9uKHBsYXlncm91bmQsIGVsZW1lbnQpIHtcclxuICAgIHRoaXMucGxheWdyb3VuZCA9IHBsYXlncm91bmQ7XHJcbiAgICB0aGlzLnNpdGUgPSBwbGF5Z3JvdW5kLnNpdGU7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5vcHRpb25zID0gcGxheWdyb3VuZC5vcHRpb25zO1xyXG5cclxuICAgIC8vLyBkaXYubWFpblxyXG4gICAgdGhpcy5kaXYgPSBudWxsO1xyXG5cclxuICAgIGxldCBvcHRpb25zID0gcGxheWdyb3VuZC5vcHRpb25zO1xyXG5cclxuICAgIC8vLyBSZWZlcmVuY2VzIHRvIG90aGVyIEdVSSBjb21wb25lbnRzXHJcbiAgICBsZXQgbWVudT1udWxsLCB0YWJzPW51bGw7XHJcblxyXG4gICAgLy8vIGRpdi5vdmVybGF5XHJcbiAgICBsZXQgZGl2T3ZlcmxheSA9IG51bGwsIGRpdldvcms9bnVsbDtcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZCcpO1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG5cdCAgICBpZihvcHRpb25zLmhlaWdodCAhPT0gbnVsbCkge1xyXG5cdFx0ICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XHJcblx0ICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoKG9wdGlvbnMuZGlzcGxheSkge1xyXG4gICAgICAgICAgICBjYXNlICdmdWxsJzpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1mdWxsJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcblx0ICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLXdpbmRvdycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvcHRpb25zLmRpc3BsYXkgPT09ICd3aW5kb3cnKSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEFkZCByZXNpemVyIHRvIHRoZSB3aW5kb3cgaWYgaW4gd2luZG93IG1vZGVcclxuICAgICAgICAgICAgLy8gYW5kIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGFkZGVkXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGlmKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInJlc2l6ZXJcIikpIHtcclxuICAgICAgICAgICAgICAgIG5ldyBSZXNpemVyKGVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGU6ICcxMHB4IHNvbGlkICMxODQ1M0InXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kcmFnQW5kRHJvcCA9IG5ldyBEcmFnQW5kRHJvcCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBDcmVhdGUgYW5kIGFkZCB0aGUgd2luZG93IGNvbXBvbmVudHNcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmKG9wdGlvbnMuZGlzcGxheSAhPT0gJ2lubGluZScgJiYgb3B0aW9ucy5kaXNwbGF5ICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQWxsIHdpbmRvdy1iYXNlZCB2ZXJzaW9ucyBvdGhlciB0aGFuIGlubGluZSBnZXQgdGhlXHJcbiAgICAgICAgICAgIC8vIGZ1bGwgdXNlciBpbnRlcmZhY2VcclxuICAgICAgICAgICAgLy9cclxuXHJcbiAgICAgICAgICAgIC8vIDxkaXYgY2xhc3M9XCJtYWluXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIHRoaXMuZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtcGctbWFpbicpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kaXYpO1xyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQWRkIHRoZSBtZW51XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIG1lbnUgPSBuZXcgTWVudSh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5tZW51ID0gbWVudTtcclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFdvcmtpbmcgYXJlYVxyXG4gICAgICAgICAgICAvLyA8ZGl2IGNsYXNzPVwid29ya1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBkaXZXb3JrID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignd29yaycpO1xyXG4gICAgICAgICAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZChkaXZXb3JrKTtcclxuXHJcblxyXG5cdFx0XHQvL1xyXG5cdCAgICAgICAgLy8gQW5kIHRoZSByb290IHBhbmVcclxuXHQgICAgICAgIC8vXHJcblx0ICAgICAgICB0aGlzLnJvb3RQYW5lID0gbmV3IFBhbmUodGhpcywgZGl2V29yaywgbnVsbCwgbnVsbCk7XHJcblx0ICAgICAgICB0aGlzLnJvb3RQYW5lLmxvYWQob3B0aW9ucy5wYW5lKTtcclxuXHJcblx0ICAgICAgICAvL1xyXG5cdCAgICAgICAgLy8gQW5kIHRoZSBvdmVybGF5XHJcblx0ICAgICAgICAvLyA8ZGl2IGNsYXNzPVwiY2lyc2ltLW92ZXJsYXlcIj48L2Rpdj5cclxuXHQgICAgICAgIC8vXHJcblx0ICAgICAgICBkaXZPdmVybGF5ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtcGctb3ZlcmxheScpO1xyXG5cdCAgICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQoZGl2T3ZlcmxheSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvYXN0ID0gbmV3IFRvYXN0KHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnRvYXN0LmNyZWF0ZSh0aGlzLmRpdik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldFRhYiA9IGZ1bmN0aW9uKHRhZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvb3RQYW5lLmdldFRhYih0YWcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuZXZlciBhIG5ldyB0YWIgaXMgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgdGhpcy5uZXdUYWIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBvciBjbGVhciBpbnRlcmZhY2UgbW9kYWwgc3RhdGUuXHJcbiAgICAgKiBAcGFyYW0gbW9kYWwgVHJ1ZSBzZXRzIGludGVyZmFjZSB0byBtb2RhbCBzdGF0ZS5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHRoaXMubW9kYWwgPSBmdW5jdGlvbihtb2RhbCkge1xyXG4gICAgICAgIGlmKG1vZGFsKSB7XHJcbiAgICAgICAgICAgIGRpdk92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGl2T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbn1cclxuIiwiaW1wb3J0IHtUb29sc30gZnJvbSAnLi9ET00vVG9vbHMnO1xyXG5cclxuLy8gaW1wb3J0IHtGaWxlTWVudX0gZnJvbSAnLi9NZW51cy9GaWxlTWVudSc7XHJcbi8vIGltcG9ydCB7RWRpdE1lbnV9IGZyb20gJy4vTWVudXMvRWRpdE1lbnUnO1xyXG4vLyBpbXBvcnQge1RhYnNNZW51fSBmcm9tICcuL01lbnVzL1RhYnNNZW51JztcclxuLy8gaW1wb3J0IHtIZWxwTWVudX0gZnJvbSAnLi9NZW51cy9IZWxwTWVudSc7XHJcblxyXG4vKipcclxuICogVGhlIHByb2dyYW0gbWVudSBiYXJcclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWVudSA9IGZ1bmN0aW9uKG1haW4pIHtcclxuXHRjb25zdCBvcHRpb25zID0gbWFpbi5vcHRpb25zO1xyXG5cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gQ3JlYXRlIHRoZSBtZW51IGNvbXBvbmVudHNcclxuICAgIC8vXHJcbiAgICAvLyB2YXIgZmlsZU1lbnUgPSBuZXcgRmlsZU1lbnUodGhpcywgbWFpbik7XHJcbiAgICAvLyB2YXIgZWRpdE1lbnUgPSBuZXcgRWRpdE1lbnUodGhpcywgbWFpbik7XHJcbiAgICAvLyB2YXIgdGFic01lbnUgPSBuZXcgVGFic01lbnUodGhpcywgbWFpbik7XHJcbiAgICAvLyB2YXIgaGVscE1lbnUgPSBuZXcgSGVscE1lbnUodGhpcywgbWFpbik7XHJcblxyXG4gICAgLy8vIFRoZSBuYXYgZWxlbWVudFxyXG4gICAgdGhpcy5uYXYgPSBudWxsO1xyXG4gICAgdGhpcy51bCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIDxuYXYgY2xhc3M9XCJtZW51YmFyXCI+PHVsPjwvdWw+PC9uYXY+XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzKHRoaXMubmF2LCAnbWVudWJhcicpO1xyXG4gICAgICAgIG1haW4uZGl2LmFwcGVuZENoaWxkKHRoaXMubmF2KTtcclxuXHJcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIHRoaXMubmF2LmFwcGVuZENoaWxkKHVsKTtcclxuICAgICAgICB0aGlzLnVsID0gdWw7XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBtZW51IG9mIG9wdGlvbnMubWVudXMpIHtcclxuICAgICAgICBcdGNvbnN0IHRvcExJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBcdHVsLmFwcGVuZENoaWxkKHRvcExJKTtcclxuXHJcbiAgICAgICAgXHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIFx0dG9wTEkuYXBwZW5kQ2hpbGQoYSk7XHJcblxyXG4gICAgICAgIFx0YS5pbm5lclRleHQgPSBtZW51Lm5hbWU7XHJcbiAgICAgICAgXHRpZihtZW51LmFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgXHRcdGNvbnN0IGFjdGlvbiA9IG1haW4ucGxheWdyb3VuZC5nZXRBY3Rpb24obWVudS5hY3Rpb24pO1xyXG4gICAgICAgIFx0XHRhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcdFx0XHRhY3Rpb24uY2xpY2sobWFpbik7XHJcblx0XHQgICAgICAgIH0pO1xyXG5cclxuXHQgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIEFkZCB0aGUgbWVudSBjb21wb25lbnQncyBIVE1MXHJcbiAgICAgICAgLy9cclxuXHQgICAgLy8gbGV0IGh0bWwgPSAnJztcclxuXHJcblx0ICAgIC8vIGh0bWwgKz0gZmlsZU1lbnUuaHRtbCgpO1xyXG4gICAgICAgIC8vIGh0bWwgKz0gZWRpdE1lbnUuaHRtbCgpO1xyXG4gICAgICAgIC8vIGh0bWwgKz0gdGFic01lbnUuaHRtbCgpO1xyXG4gICAgICAgIC8vIGh0bWwgKz0gaGVscE1lbnUuaHRtbCgpO1xyXG5cclxuICAgICAgICAvLyB1bC5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgICAgICAvL1xyXG5cdCAgICAvLyBNZW51IG9wdGlvbiBmb3IgdGVzdGluZyB0aGUgVG9hc3QgZXJyb3IgcmVwb3J0aW5nIG1lY2hhbmlzbVxyXG5cdCAgICAvL1xyXG5cclxuXHQgICAgLy8gaHRtbCArPSBgPGxpPjxhIGNsYXNzPVwidG9hc3QtdGVzdFwiPlRvYXN0ITwvYT48L2xpPmA7XHJcblx0ICAgIC8vIHVsLmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHQvL1xyXG5cdCAgICAvLyB0aGlzLnRvYXN0cyA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5jbGljaygnLnRvYXN0LXRlc3QnLCAoZXZlbnQpPT4ge1xyXG4gICAgICAgIC8vIFx0dGhpcy50b2FzdHMrKztcclxuICAgICAgICAvLyBcdG1haW4udG9hc3QubWVzc2FnZSgnVG9hc3QgbWVzc2FnZSAnICsgdGhpcy50b2FzdHMpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIEluc3RhbGwgY2xpY2sgaGFuZGxlcnMgZm9yIGFsbCB0b3AtbGV2ZWwgbWVudXNcclxuICAgICAgICAvL1xyXG4gICAgICAgIGZvcihjb25zdCBub2RlIG9mIHVsLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgaWYobm9kZS50YWdOYW1lID09PSAnTEknKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgPHVsPiBpbiB0aGlzIG1lbnVcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdWxTdWIgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih1bFN1YiAhPT0gbnVsbCkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgaWYoZ2V0Q29tcHV0ZWRTdHlsZSh1bFN1YikuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAnaGlkZGVuJykge1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICBvcGVuKG5vZGUpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBhbHJlYWR5IG9wZW4sIGNsb3NlIGFsbFxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFjdGl2YXRlIGFsbCBvZiB0aGUgbWVudXNcclxuICAgICAgICAvLyBmaWxlTWVudS5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIC8vIGVkaXRNZW51LmFjdGl2YXRlKCk7XHJcbiAgICAgICAgLy8gdGFic01lbnUuYWN0aXZhdGUoKTtcclxuICAgICAgICAvLyBoZWxwTWVudS5hY3RpdmF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIExpc3RlbiB0byBrZXkgZG93biBldmVudHMgc28gd2UgY2FuIGNsb3NlIHRoZSBtZW51XHJcbiAgICAgKiBpZiB3ZSBjbGljayBvdXRzaWRlIG9mIHRoZSBtZW51IHdoaWxlIGl0IGlzIG9wZW4uXHJcblx0ICogQHBhcmFtIGV2ZW50XHJcblx0ICovXHJcblx0Y29uc3QgY2xvc2VMaXN0ZW5lciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIFNlZSBpZiB3ZSBjbGlja2VkIG9uIHNvbWUgY2hpbGQgb2YgbmF2Li4uXHJcbiAgICAgICAgbGV0IG5vZGUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICBmb3IoIDsgbm9kZSAhPT0gbnVsbDsgbm9kZSA9IG5vZGUucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBpZihub2RlID09PSB0aGlzLm5hdikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHQgICAgdGhpcy5jbG9zZUFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9wZW4gYSBtZW51XHJcbiAgICBjb25zdCBvcGVuID0gKGxpKSA9PiB7XHJcbiAgICAgICAgLy8gSGlkZSBhbnkgb3RoZXIgbWVudXNcclxuICAgICAgICBmb3IoY29uc3Qgbm9kZSBvZiB0aGlzLnVsLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgaWYobm9kZS50YWdOYW1lID09PSAnTEknKSB7XHJcblx0ICAgICAgICAgICAgY29uc3QgdWwgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcclxuICAgICAgICAgICAgICAgIGlmKHVsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMucmVtb3ZlQ2xhc3ModWwsICdtZW51LW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGFic01lbnUub3BlbmluZygpO1xyXG4gICAgICAgIC8vIGhlbHBNZW51Lm9wZW5pbmcoKTtcclxuXHJcblx0ICAgIC8vIEFuZCBvcGVuIHRoaXMgbWVudVxyXG5cdCAgICBjb25zdCB1bCA9IFRvb2xzLmNoaWxkKGxpLCAnVUwnKTtcclxuXHQgICAgaWYodWwgIT09IG51bGwpIHtcclxuXHRcdCAgICBUb29scy5hZGRDbGFzcyh1bCwgJ21lbnUtb3BlbicpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDbG9zZSBhbGwgbWVudXMgKi9cclxuICAgIHRoaXMuY2xvc2VBbGwgPSAoKSA9PiB7XHJcblx0ICAgIGZvcihjb25zdCBub2RlIG9mIHRoaXMudWwuY2hpbGROb2Rlcykge1xyXG5cdFx0ICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gJ0xJJykge1xyXG5cdFx0XHQgICAgY29uc3QgdWwgPSBUb29scy5jaGlsZChub2RlLCAnVUwnKTtcclxuXHRcdFx0ICAgIGlmKHVsICE9PSBudWxsKSB7XHJcblx0XHRcdFx0ICAgIFRvb2xzLnJlbW92ZUNsYXNzKHVsLCAnbWVudS1vcGVuJyk7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogRW5hYmxlIG9yIGRpc2FibGUgYSBtZW51IG9wdGlvbiBieSBzZWxlY3RvclxyXG5cdCAqIEBwYXJhbSBzZWwgU2VsZWN0b3IgZm9yIHRoZSBtZW51IG9wdGlvbiAobGlrZSAnLnRhYnMtYWRkJylcclxuXHQgKiBAcGFyYW0gZW5hYmxlIFRydWUgdG8gZW5hYmxlXHJcblx0ICovXHJcblx0dGhpcy5lbmFibGUgPSAoc2VsLCBlbmFibGUpID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy51bC5xdWVyeVNlbGVjdG9yKHNlbCk7XHJcbiAgICAgICAgaWYoZWxlbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihlbmFibGUpIHtcclxuICAgICAgICAgICAgVG9vbHMucmVtb3ZlQ2xhc3MoZWxlbWVudC5wYXJlbnROb2RlLCBcIm1lbnUtZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuYWRkQ2xhc3MoZWxlbWVudC5wYXJlbnROb2RlLCBcIm1lbnUtZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblx0LyoqXHJcbiAgICAgKiBGaW5kIGEgbWVudSBvcHRpb24gYnkgc2VsZWN0b3JcclxuXHQgKiBAcGFyYW0gc2VsXHJcblx0ICogQHJldHVybnMge0VsZW1lbnR9XHJcblx0ICovXHJcblx0dGhpcy5maW5kID0gKHNlbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVsLnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBJbnN0YWxsIGEgbWVudSBvcHRpb24gY2xpY2sgaGFuZGVyXHJcblx0ICogQHBhcmFtIHNlbCBTZWxlY3RvciBmb3IgdGhlIG1lbnUgb3B0aW9uXHJcblx0ICogQHBhcmFtIGNsb3N1cmUgVGhlIGNsb3N1cmUgdG8gY2FsbCAocGFzc2VzICdldmVudCcpXHJcblx0ICovXHJcblx0dGhpcy5jbGljayA9IChzZWwsIGNsb3N1cmUpID0+IHtcclxuXHQgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZmluZChzZWwpO1xyXG5cdCAgICBpZihlbGVtZW50ICE9PSBudWxsKSB7XHJcblx0ICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0ICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHQgICAgICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XHJcblx0ICAgICAgICAgICAgY2xvc3VyZShldmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBQbGF5Z3JvdW5kIG9wdGlvbnMuXHJcbiAqIEBwYXJhbSBvcHRpb25zIFVzZXIgcHJvdmlkZWQgb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHt9O1xyXG5cclxuICAgIC8vLyBEaXNwbGF5IG9wdGlvbnNcclxuICAgIC8vLyB3aW5kb3cgLSBEaXNwbGF5cyBhcyBhIHN0YW5kYXJkIGRpdiAoZGVmYXVsdClcclxuICAgIHRoaXMuZGlzcGxheSA9ICd3aW5kb3cnO1xyXG5cclxuICAgIC8vLyBPcHRpb25hbCBoZWlnaHQgc2V0dGluZ1xyXG4gICAgdGhpcy5oZWlnaHQgPSBudWxsO1xyXG5cclxuICAgIC8vLyBUaGUgcGxheWdyb3VuZCByb290IHBhbmVcclxuICAgIHRoaXMucGFuZSA9IHt9O1xyXG5cclxuICAgIC8vLyBUaGUgdG9wLWxldmVsIG1lbnUgb3B0aW9uc1xyXG4gICAgdGhpcy5tZW51cyA9IFt7bmFtZTogJ0Fib3V0J31dO1xyXG5cclxuXHJcblxyXG5cclxuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb24gXCIgKyBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIEFQSSBvcGVyYXRpb25zIGZvciBhIGdpdmVuIGZpbGUgbW9kZS5cclxuICAgICAqIEBwYXJhbSBtb2RlICdzYXZlJywgJ29wZW4nXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXRBUEkgPSBmdW5jdGlvbihtb2RlKSB7XHJcbiAgICAgICAgaWYodGhpcy5hcGkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmFwaSA9PT0gT2JqZWN0KHRoaXMuYXBpKSkge1xyXG4gICAgICAgICAgICBsZXQgb2JqO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5hcGlbbW9kZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gXHJcbiAgICAgICAgICAgICAgICAvLyBNb2RlIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXHJcbiAgICAgICAgICAgICAgICB2YXIgbW9kZU9iaiA9IHRoaXMuYXBpW21vZGVdO1xyXG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai51cmwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1vZGUgaXMgbm90IHN1cHBvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNlbmQgY29udGVudCB0eXBlXHJcbiAgICAgICAgICAgICAgICBvYmogPSB7dXJsOiBtb2RlT2JqLnVybH07XHJcbiAgICAgICAgICAgICAgICBpZihtb2RlT2JqLmNvbnRlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouY29udGVudFR5cGUgPSBtb2RlT2JqLmNvbnRlbnRUeXBlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuYXBpLmNvbnRlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouY29udGVudFR5cGUgPSB0aGlzLmFwaS5jb250ZW50VHlwZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai5leHRyYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0gbW9kZU9iai5leHRyYTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmFwaS5leHRyYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0gdGhpcy5hcGkuZXh0cmE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKG1vZGVPYmoubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLm5hbWUgPSBtb2RlT2JqLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5hcGkubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLm5hbWUgPSB0aGlzLmFwaS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcGkudXJsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvYmogPSB7dXJsOiB0aGlzLmFwaS51cmx9O1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcGkuZXh0cmEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHRoaXMuYXBpLmV4dHJhO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFwaS5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoubmFtZSA9IHRoaXMuYXBpLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt1cmw6IHRoaXMuYXBpfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtUYWJzfSBmcm9tICcuL1RhYnMnO1xyXG5cclxuLyoqXHJcbiAqIEEgUGFuZSBpcyBhbiBhcmVhIG9mIHRoZSBJREUgc2NyZWVuIHRoYXQgZWl0aGVyIGNvbnRhaW5zIGEgdGFiIHNldCBvciB0d28gY2hpbGQgcGFuZXMuXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdGhhdCBpcyB0aGUgaG9zdCBmb3IgdGhlIHBhbmVcclxuICogQHBhcmFtIHBhcmVudCBQYW5lIHBhcmVudCBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUGFuZSA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQsIHBhcmVudCkge1xyXG5cdHRoaXMubWluU3BsaXQgPSAxMDtcclxuXHR0aGlzLm1heFNwbGl0ID0gOTA7XHJcblxyXG5cdGxldCBkaXYgPSBudWxsLCBjaGlsZDEgPSBudWxsLCBjaGlsZDIgPSBudWxsO1xyXG5cdGxldCBob3Jpem9udGFsU3BsaXQgPSBudWxsO1xyXG5cdGxldCB0YWJzID0gbnVsbDtcclxuXHJcblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuXHRcdC8vXHJcblx0XHQvLyBDcmVhdGUgYW5kIGFkZCB0aGUgZGl2XHJcblx0XHQvL1xyXG5cclxuXHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5kaXYgPSBkaXY7XHJcblxyXG5cdFx0aWYocGFyZW50ID09PSBudWxsKSB7XHJcblx0XHRcdGRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLXJvb3QnKTtcclxuXHRcdH1cclxuXHJcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG5cdFx0Ly8gaWYoZG9ub3JUYWJzICE9PSBudWxsKSB7XHJcblx0XHQvLyBcdHRhYnMgPSBkb25vclRhYnM7XHJcblx0XHQvLyBcdHRhYnMubmV3UGFyZW50KHRoaXMpO1xyXG5cdFx0Ly8gfSBlbHNlIHtcclxuXHRcdC8vIFx0dGFicyA9IG5ldyBUYWJzKG1haW4sIGRpdik7XHJcblx0XHQvLyB9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBMb2FkIHRoZSBwYW5lIGZyb20gdGhlIGRhdGFcclxuXHQgKiBAcGFyYW0gZGF0YSBEYXRhIGZyb20gb3B0aW9ucyBmb3IgdGhpcyBwYW5lXHJcblx0ICovXHJcblx0dGhpcy5sb2FkID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0aWYoZGF0YS5jaGlsZDEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHQvLyBUaGlzIGlzIGEgc3BsaXQgcGFuZVxyXG5cdFx0XHR0aGlzLnNwbGl0KGRhdGEuaG9yaXosIGRhdGEuY2hpbGQxLCBkYXRhLmNoaWxkMik7XHJcblx0XHRcdHRoaXMucGVyY2VudGFnZShkYXRhLnBlcmNlbnRhZ2UpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGFicyA9IG5ldyBUYWJzKG1haW4sIGRpdik7XHJcblx0XHRcdHRhYnMubG9hZChkYXRhLnRhYnMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGhpcy5zcGxpdCA9IGZ1bmN0aW9uKGhvcml6b250YWwsIGNoaWxkMURhdGEsIGNoaWxkMkRhdGEpIHtcclxuXHRcdGhvcml6b250YWxTcGxpdCA9IGhvcml6b250YWw7XHJcblxyXG5cdFx0Y2hpbGQxID0gbmV3IFBhbmUobWFpbiwgZGl2LCB0aGlzLCB0YWJzKTtcclxuXHRcdGNoaWxkMiA9IG5ldyBQYW5lKG1haW4sIGRpdiwgdGhpcywgbnVsbCk7XHJcblxyXG5cdFx0dGFicyA9IG51bGw7XHJcblxyXG5cdFx0aWYoaG9yaXpvbnRhbCkge1xyXG5cdFx0XHRjaGlsZDEuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtbGVmdCcpO1xyXG5cdFx0XHRjaGlsZDIuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtcmlnaHQnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRpdi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XHJcblx0XHRcdGNoaWxkMS5kaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC10b3AnKTtcclxuXHRcdFx0Y2hpbGQyLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLWJvdHRvbScpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0YmFyLmNsYXNzTGlzdC5hZGQoJ2NsLWJhcicpO1xyXG5cdFx0Y2hpbGQxLmRpdi5hcHBlbmRDaGlsZChiYXIpO1xyXG5cclxuXHRcdGJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0c3RhcnREcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmUpO1xyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGJhci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhldmVudCk7XHJcblxyXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdFx0c3RhcnREcmFnZ2luZyh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cclxuXHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2hNb3ZlKTtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kKTtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoQ2FuY2VsKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuY2hpbGQxID0gY2hpbGQxO1xyXG5cdFx0dGhpcy5jaGlsZDIgPSBjaGlsZDI7XHJcblxyXG5cdFx0dGhpcy5wZXJjZW50YWdlKDUwKTtcclxuXHJcblx0XHRpZihjaGlsZDFEYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0Y2hpbGQxLmxvYWQoY2hpbGQxRGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoY2hpbGQyRGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGNoaWxkMi5sb2FkKGNoaWxkMkRhdGEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7Y2hpbGQxOiBjaGlsZDEsIGNoaWxkMjogY2hpbGQyfTtcclxuXHR9XHJcblxyXG5cdGxldCBzdGFydFggPSBudWxsLCBzdGFydFkgPSBudWxsO1xyXG5cclxuXHRjb25zdCBzdGFydERyYWdnaW5nID0gKHgsIHkpID0+IHtcclxuXHRcdHN0YXJ0WCA9IHg7XHJcblx0XHRzdGFydFkgPSB5O1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZW5kRHJhZ2dpbmcgPSAoKSA9PiB7XHJcblx0XHRzdGFydFggPSBudWxsO1xyXG5cdFx0c3RhcnRZID0gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHRjb25zdCBkcmFnZ2luZyA9ICh4LCB5KSA9PiB7XHJcblx0XHRjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblxyXG5cdFx0aWYoaG9yaXpvbnRhbFNwbGl0KSB7XHJcblx0XHRcdGNvbnN0IG1haW5YID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG5cdFx0XHRjb25zdCB3aWQgPSByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0O1xyXG5cdFx0XHRpZih3aWQgPD0gMCkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgcGVyID0gKHggLSBtYWluWCkgLyB3aWQgKiAxMDA7XHJcblx0XHRcdHRoaXMucGVyY2VudGFnZShwZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgbWFpblkgPSByZWN0LnRvcCAgKyBlbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdGNvbnN0IGhpdCA9IHJlY3QuYm90dG9tIC0gcmVjdC50b3A7XHJcblx0XHRcdGlmKGhpdCA8PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBwZXIgPSAoeSAtIG1haW5ZKSAvIGhpdCAqIDEwMDtcclxuXHRcdFx0dGhpcy5wZXJjZW50YWdlKHBlcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0aWYoZXZlbnQud2hpY2ggPT09IDApIHtcclxuXHRcdFx0bW91c2VVcChldmVudCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRkcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbW91c2VVcCA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlKTtcclxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXApO1xyXG5cdFx0ZW5kRHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHRvdWNoTW92ZSAgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdGRyYWdnaW5nKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB0b3VjaEVuZCA9IChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0ZHJhZ2dpbmcodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZSk7XHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmQpO1xyXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoQ2FuY2VsKTtcclxuXHJcblx0XHRlbmREcmFnZ2luZyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdG91Y2hDYW5jZWwgPSAoZXZlbnQpID0+IHtcclxuXHRcdHRvdWNoRW5kKGV2ZW50KTtcclxuXHR9XHJcblxyXG5cdHRoaXMucGVyY2VudGFnZSA9IGZ1bmN0aW9uKHBlcikge1xyXG5cdFx0aWYocGVyIDwgdGhpcy5taW5TcGxpdCkge1xyXG5cdFx0XHRwZXIgPSB0aGlzLm1pblNwbGl0O1xyXG5cdFx0fSBlbHNlIGlmKHBlciA+IHRoaXMubWF4U3BsaXQpIHtcclxuXHRcdFx0cGVyID0gdGhpcy5tYXhTcGxpdDtcclxuXHRcdH1cclxuXHJcblx0XHRpZihob3Jpem9udGFsU3BsaXQpIHtcclxuXHRcdFx0Y2hpbGQxLmRpdi5zdHlsZS53aWR0aCA9IHBlciArICclJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNoaWxkMS5kaXYuc3R5bGUuaGVpZ2h0ID0gcGVyICsgJyUnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGhpcy5nZXRUYWIgPSBmdW5jdGlvbih0YWcpIHtcclxuXHRcdGZvcihjb25zdCBjb2xsZWN0aW9uIG9mIFt0YWJzLCBjaGlsZDEsIGNoaWxkMl0pIHtcclxuXHRcdFx0aWYoY29sbGVjdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdGxldCB0YWIgPSBjb2xsZWN0aW9uLmdldFRhYih0YWcpO1xyXG5cdFx0XHRcdGlmKHRhYiAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRhYjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbn0iLCJpbXBvcnQge01haW59IGZyb20gJy4vTWFpbic7XHJcbmltcG9ydCB7T3B0aW9uc30gZnJvbSAnLi9PcHRpb25zJztcclxuaW1wb3J0IHtSZWFkeX0gZnJvbSAnLi9VdGlsaXR5L1JlYWR5JztcclxuaW1wb3J0IHtBY3Rpb259IGZyb20gJy4vQWN0aW9ucy9BY3Rpb24nO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgUGxheWdyb3VuZFxyXG4gKlxyXG4gKiBUaGlzIGNyZWF0ZXMgYSBzaW5nbGUgSW5zdGFuY2UgdGhhdCBtYW5hZ2VzIHRoZVxyXG4gKiBjb21wb25lbnRzIGFuZCBzdGFydHMgYWN0dWFsIFBsYXlncm91bmQgd2luZG93cy5cclxuICpcclxuICogQ29uc3RydWN0IGFuZCBzdGFydCBydW5uaW5nIGxpa2UgdGhpczpcclxuICpcclxuICogR2l2ZW4gYW4gSFRNTCBkaXY6XHJcbiAqICAgICA8ZGl2IGlkPVwicGxheWdyb3VuZFwiPjwvZGl2PlxyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIHNjcmlwdCBzdGFydHMgUGxheWdyb3VuZCBpbiB0aGF0IGRpdjpcclxuICpcclxuICogICAgIHZhciBwbGF5Z3JvdW5kID0gbmV3IFBsYXlncm91bmQoJyNwbGF5Z3JvdW5kJyk7XHJcbiAqICAgICBwbGF5Z3JvdW5kLnN0YXJ0KCk7XHJcbiAqXHJcbiAqIEBwYXJhbSBzaXRlIFNpdGUgb2JqZWN0XHJcbiAqIEBwYXJhbSBzZWwgU2VsZWN0b3Igb3IgZWxlbWVudCB0byBjcmVhdGUgUGxheWdyb3VuZCBpbiAoY2FuIGJlIG1hbnkpXHJcbiAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCBjb250YWluaW5nIFBsYXlncm91bmQgb3B0aW9ucy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUGxheWdyb3VuZCA9IGZ1bmN0aW9uKHNpdGUsIHNlbCwgb3B0aW9ucykge1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBNYXN0ZXIgc2V0IG9mIHRoZSB2ZXJzaW9uXHJcbiAgICAvL1xyXG4gICAgbGV0IFBBQ0tBR0UgPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKTtcclxuICAgIHRoaXMudmVyc2lvbiA9IFBBQ0tBR0UudmVyc2lvbjtcclxuXHJcbiAgICB0aGlzLnNpdGUgPSBzaXRlO1xyXG5cclxuICAgIC8vIFJlY29yZCB0aGUgc2VsZWN0b3JcclxuICAgIHRoaXMuc2VsID0gc2VsO1xyXG5cclxuICAgIC8vIFRoZSBPcHRpb25zIG9iamVjdCB0aGF0IG1hbmFnZXMgdXNlciBvcHRpb25zXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcclxuXHJcbiAgICAvLyBBIGNvbGxlY3Rpb24gb2YgTWFpbiBvYmplY3RzLlxyXG4gICAgdmFyIG1haW5zID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCB0aGUgUGxheWdyb3VuZCBydW5uaW5nLCBjcmVhdGluZyB0aGUgdXNlciBpbnRlcmZhY2UuXHJcbiAgICAgKiBUaGlzIGRvZXMgd2FpdCBmb3IgZG9jdW1lbnQgcmVhZHkgYmVmb3JlIGNhbGxpbmdcclxuICAgICAqIHRoaXMuc3RhcnROb3coKSB1bmxlc3Mgd2UgYXJlIHJ1bm5pbmcgaW4gbm8td2luZG93XHJcbiAgICAgKiBtb2RlLiBJbiB0aGF0IGNhc2UgaXQgcmV0dXJucyBhIHN0YXJ0ZWQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc2VsID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0Tm93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZWFkeS5nbygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnROb3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHRoZSBQbGF5Z3JvdW5kIHJ1bm5pbmcgbm93LiBEb2VzIG5vdCB3YWl0IGZvciBkb2N1bWVudCByZWFkeS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5zdGFydE5vdyA9ICgpID0+IHtcclxuICAgICAgICBpZihzZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbih0aGlzLCBzZWwpO1xyXG4gICAgICAgICAgICBtYWlucy5wdXNoKG1haW4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFpbiA9IG5ldyBNYWluKHRoaXMsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgbWFpbnMucHVzaChtYWluKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobWFpbnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYWluc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYSBjb25zdHJ1Y3RlZCBBY3Rpb24gb2JqZWN0IGZyb20gdGhlIGF2YWlsYWJsZSBwbGF5Z3JvdW5kIGFjdGlvbnMuXHJcblx0ICogQHBhcmFtIGFjdGlvbiBUaGUgYWN0aW9uIGRhdGEgZnJvbSB0aGUgc2VydmVyLlxyXG5cdCAqIEByZXR1cm5zIEFjdGlvbiBvYmplY3RcclxuXHQgKi9cclxuXHR0aGlzLmdldEFjdGlvbiA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgXHRpZihQbGF5Z3JvdW5kLmFjdGlvbnNbYWN0aW9uLnRhZ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgXHRcdHJldHVybiBuZXcgKFBsYXlncm91bmQuYWN0aW9uc1thY3Rpb24udGFnXSkoc2l0ZSwgYWN0aW9uKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgY29uc29sZS5sb2coJ1BsYXlncm91bmQgYWN0aW9uICcgKyBhY3Rpb24udGFnICsgJyBkb2VzIG5vdCBleGlzdCcpO1xyXG5cdCAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuUGxheWdyb3VuZC5BY3Rpb24gPSBBY3Rpb247XHJcblxyXG5QbGF5Z3JvdW5kLmFjdGlvbnMgPSB7fTtcclxuXHJcblBsYXlncm91bmQuYWRkQWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uKSB7XHJcblx0dGhpcy5hY3Rpb25zW2FjdGlvbi50YWddID0gYWN0aW9uO1xyXG59IiwiaW1wb3J0IHtUb29sc30gZnJvbSAnLi9ET00vVG9vbHMnO1xyXG5pbXBvcnQge091dHB1dFRhYn0gZnJvbSAnLi9UYWJzL091dHB1dFRhYic7XHJcbmltcG9ydCB7RWRpdG9yVGFifSBmcm9tICcuL1RhYnMvRWRpdG9yVGFiJztcclxuXHJcbmltcG9ydCBtZW51YmFycyBmcm9tICcuLi8uLi9pbWcvbWVudWJhcnMucG5nJztcclxuXHJcblxyXG4vKipcclxuICogTWFuYWdlcyB0aGUgdGFicyBpbiB0aGUgbW9kZWxcclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQHBhcmFtIGVsZW1lbnQgUGFyZW50IGVsZW1lbnRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVGFicyA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQpIHtcclxuICAgIC8vLyBUaGUgY3VycmVudGx5IGFjdGl2ZSB2aWV3L3RhYlxyXG4gICAgdGhpcy5hY3RpdmUgPSAtMTtcclxuXHJcbiAgICAvLy8gVGhlIE1haW4gb2JqZWN0XHJcbiAgICB0aGlzLm1haW4gPSBtYWluO1xyXG5cclxuICAgIC8vLyBUaGUgU2l0ZSBvYmplY3RcclxuICAgIHRoaXMuc2l0ZSA9IG1haW4uc2l0ZTtcclxuXHJcbiAgICAvLyBUaGUgY29sbGVjdGlvbiBvZiB0YWJzXHJcbiAgICB2YXIgdGFicyA9IFtdO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBUaGUgc3RydWN0dXJlOiA8ZGl2IGNsYXNzPVwiY2wtdGFic1wiPjx1bD48L3VsPjxkaXYgY2xhc3M9XCJjbC12aWV3c1wiPjwvZGl2PjwvZGl2PlxyXG4gICAgLy8gZGl2LnRhYnMgLSBFbmNsb3N1cmUgZm9yIGFsbCB0YWJzIGNvbnRlbnRcclxuICAgIC8vIHVsIC0gVGhlIHRhYnMgd2Ugc2VsZWN0IGZyb21cclxuICAgIC8vIHZpZXdzRGl2IC0gVGhlIHZpZXdzIHdpdGggdGhlIHRhYiBjb250ZW50c1xyXG4gICAgLy9cclxuXHJcbiAgICBsZXQgdGFic0RpdiA9IG51bGwsIHVsID0gbnVsbCwgdmlld3NEaXYgPSBudWxsO1xyXG5cclxuXHQvKipcclxuICAgICAqIENyZWF0ZSB0aGUgdGFicyBzeXN0ZW1cclxuXHQgKiBAcGFyYW0gZGl2IFRoZSBkaXYgd2UgcHV0IHRoZSB0YWJzIGludG9cclxuXHQgKi9cclxuXHR0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uKGRpdikge1xyXG4gICAgICAgIC8vIENyZWF0ZTogPGRpdiBjbGFzcz1cImNsLXRhYnNcIj48dWw+PC91bD48ZGl2IGNsYXNzPVwiY2wtdmlld3NcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICB0YWJzRGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtcGctdGFicycpO1xyXG4gICAgICAgIHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICB0YWJzRGl2LmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgICAgICAgdmlld3NEaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdjbC1wZy12aWV3cycpO1xyXG4gICAgICAgIHRhYnNEaXYuYXBwZW5kQ2hpbGQodmlld3NEaXYpO1xyXG5cclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGFic0Rpdik7XHJcblxyXG4gICAgICAgIC8vIENsZWFyIHRoZSB0YWJzIGNvbGxlY3Rpb25cclxuICAgICAgICB0YWJzID0gW107XHJcblxyXG5cdC8vXHR0aGlzLmFkZCgncHJvZ3JhbScpO1xyXG4vL1x0XHR0aGlzLmFkZCgnb3V0cHV0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2FkID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0Zm9yKGNvbnN0IHRhYkRhdGEgb2YgZGF0YSkge1xyXG5cdFx0XHR0aGlzLmFkZCh0YWJEYXRhKTtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5ld1BhcmVudCA9IGZ1bmN0aW9uKHBhbmUpIHtcclxuXHRcdHBhbmUuZGl2LmFwcGVuZENoaWxkKHRhYnNEaXYpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0bGV0IHRhYiA9IG51bGw7XHJcblxyXG5cdCAgICBzd2l0Y2goZGF0YS50eXBlKSB7XHJcblx0XHQgICAgY2FzZSAnZWRpdG9yJzpcclxuXHRcdFx0ICAgIHRhYiA9IG5ldyBFZGl0b3JUYWIodGhpcywgZGF0YSk7XHJcblx0XHQgICAgXHRicmVhaztcclxuXHJcblx0XHQgICAgY2FzZSAnb3V0cHV0JzpcclxuXHRcdCAgICBcdHRhYiA9IG5ldyBPdXRwdXRUYWIodGhpcywgZGF0YSk7XHJcblx0XHQgICAgXHRicmVhaztcclxuXHQgICAgfVxyXG5cclxuXHQgICAgaWYodGFiICE9PSBudWxsKSB7XHJcblx0XHQgICAgdWwuYXBwZW5kQ2hpbGQodGFiLmxpKTtcclxuXHRcdCAgICB2aWV3c0Rpdi5hcHBlbmRDaGlsZCh0YWIudmlldyk7XHJcblx0XHQgICAgdGFicy5wdXNoKHt0YWI6IHRhYiwgbGk6IHRhYi5saSwgdmlldzogdGFiLnZpZXd9KTtcclxuXHJcblx0XHQgICAgdGFiLnNlbGVjdCgpO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBhIHRhYiBieSB0YWcuXHJcblx0ICogQHBhcmFtIHRhZyBUYWIgdGFnXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0dGhpcy5nZXRUYWIgPSBmdW5jdGlvbih0YWcpIHtcclxuXHQgICAgZm9yKGNvbnN0IHRhYiBvZiB0YWJzKSB7XHJcblx0XHQgICAgaWYodGFiLnRhYi50YWcgPT09IHRhZykge1xyXG5cdFx0XHQgICAgcmV0dXJuIHRhYi50YWI7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVuc2VsZWN0QWxsID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIENsZWFyIGFsbCBzZWxlY3Rpb25zXHJcblx0ICAgIC8vXHJcblx0ICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XHJcblx0ICAgIFx0dGFiLmxpLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcblx0ICAgIFx0dGFiLnZpZXcuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuXHQgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gLTE7XHJcbiAgICAgICAgdGFic0Rpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhYnNEaXYpO1xyXG4gICAgICAgIHRhYnNEaXYgPSBudWxsO1xyXG4gICAgICAgIHRhYnMgPSBbXTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jcmVhdGUoZWxlbWVudCk7XHJcbn07XHJcbiIsImltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBFZGl0b3JUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGNvbnN0IHNpdGUgPSB0YWJzLnNpdGU7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdlZGl0b3InKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cclxuXHRsZXQgaW5uZXJWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5hcHBlbmRDaGlsZChpbm5lclZpZXcpO1xyXG5cclxuXHRsZXQgbnVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG51bXMuY2xhc3NMaXN0LmFkZCgnY2wtcGctbnVtcycpO1xyXG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChudW1zKTtcclxuXHJcblx0bGV0IGVkaXRvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGVkaXRvckRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wZy1lZGl0b3InKTtcclxuXHRpbm5lclZpZXcuYXBwZW5kQ2hpbGQoZWRpdG9yRGl2KTtcclxuXHJcblx0Y29uc3QgZWRpdG9yID0gbmV3IHNpdGUuRWRpdG9yKGVkaXRvckRpdiwge1xyXG5cdFx0cmVzaXplOiAnbm9uZScsXHJcblx0XHR0YWI6IHRydWUsXHJcblx0XHRhdXRvSW5kZW50OiB0cnVlLFxyXG5cdFx0c3R5bGVzOiBudWxsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHNjcm9sbGFibGUgPSBlZGl0b3IudGV4dGFyZWE7XHJcblx0c2Nyb2xsYWJsZS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXZlbnQpID0+IHtcclxuXHRcdC8vIGVkaXRvckRpdi5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnMHB4ICcgKyAoLXByZS5zY3JvbGxUb3ApICsgJ3B4JztcclxuXHRcdG51bXMuc2Nyb2xsVG9wID0gc2Nyb2xsYWJsZS5zY3JvbGxUb3A7XHJcblx0fSk7XHJcblxyXG5cdHRoaXMuc2V0ID0gZnVuY3Rpb24odGV4dCkge1xyXG5cdFx0ZWRpdG9yLnRleHRhcmVhLnZhbHVlID0gdGV4dDtcclxuXHJcblx0XHRsZXQgbGluZXMgPSAwO1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyArK2kpe1xyXG5cdFx0XHRpZih0ZXh0W2ldID09PSAnXFxuJykge1xyXG5cdFx0XHRcdGxpbmVzKys7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZihsaW5lcyA8IDEwMCkge1xyXG5cdFx0XHRsaW5lcyA9IDEwMDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBUaGUgZXh0cmEgYWRkZWQgb24gaGVyZSBlbnN1cmVzIHdlIGdldCBwYXN0IGFueSBzY3JvbGwgYmFyXHJcblx0XHQvLyB0aGF0IG1heSB0YWtlIHVwIGhvcml6b250YWwgcm9vbS5cclxuXHRcdG51bXMuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRmb3IobGV0IGk9MTsgaTw9bGluZXMrNTsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRcdHAuaW5uZXJUZXh0ID0gJycgKyBpO1xyXG5cdFx0XHRudW1zLmFwcGVuZENoaWxkKHApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHRoZSBjb250ZW50cyBvZiB0aGUgZWRpdG9yXHJcblx0ICogQHJldHVybnMgeyp8c3RyaW5nfVxyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gZWRpdG9yLnRleHRhcmVhLnZhbHVlO1xyXG5cdH1cclxuXHJcblx0dGhpcy5zZWxlY3QgPSBmdW5jdGlvbigpIHtcclxuXHRcdFRhYi5wcm90b3R5cGUuc2VsZWN0LmNhbGwodGhpcyk7XHJcblxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGVkaXRvci50ZXh0YXJlYS5mb2N1cygpO1xyXG5cdFx0fSwgMCk7XHJcblxyXG5cdH1cclxuXHJcblx0bGV0IHRleHQgPSBgaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtleHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge2V4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cdFxyXG5cdHZpZXcuaW5uZXJUZXh0ID0gXFxgXFxgO1xyXG59XHJcblxyXG5pbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHRcclxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcclxufVxyXG5pbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHRcclxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcclxufVxyXG5cclxuT3V0cHV0VGFiLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVGFiLnByb3RvdHlwZSk7XHJcbk91dHB1dFRhYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPdXRwdXRUYWI7YDtcclxuXHJcblx0dGV4dCA9IGAudGV4dFxyXG4udGh1bWJcclxuXHJcbmxvb3A6XHJcbiAgICBtb3YgcjAsIzdcclxuICAgIG1vdiByMSxyMlxyXG4gICAgYW5kIHIzLHI0XHJcbiAgICBiIGxvb3BgO1xyXG5cclxuXHR0aGlzLnNldCgnJyk7XHJcbn1cclxuXHJcbkVkaXRvclRhYi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRhYi5wcm90b3R5cGUpO1xyXG5FZGl0b3JUYWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRWRpdG9yVGFiOyIsImltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cclxuXHRsZXQgaW5uZXJWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5hcHBlbmRDaGlsZChpbm5lclZpZXcpO1xyXG5cclxuXHRsZXQgbnVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG51bXMuY2xhc3NMaXN0LmFkZCgnY2wtcGctbnVtcycpO1xyXG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChudW1zKTtcclxuXHJcblx0bGV0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xyXG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChwcmUpO1xyXG5cclxuXHRwcmUuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGV2ZW50KSA9PiB7XHJcblx0XHRwcmUuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJzBweCAnICsgKC1wcmUuc2Nyb2xsVG9wKSArICdweCc7XHJcblx0XHRudW1zLnNjcm9sbFRvcCA9IHByZS5zY3JvbGxUb3A7XHJcblx0fSk7XHJcblxyXG5cdHRoaXMuc2V0ID0gZnVuY3Rpb24odGV4dCkge1xyXG5cdFx0cHJlLmlubmVySFRNTCA9IHRleHQ7XHJcblxyXG5cdFx0bGV0IGxpbmVzID0gMDtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKXtcclxuXHRcdFx0aWYodGV4dFtpXSA9PT0gJ1xcbicpIHtcclxuXHRcdFx0XHRsaW5lcysrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYobGluZXMgPCAxMDApIHtcclxuXHRcdFx0bGluZXMgPSAxMDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVGhlIGV4dHJhIGFkZGVkIG9uIGhlcmUgZW5zdXJlcyB3ZSBnZXQgcGFzdCBhbnkgc2Nyb2xsIGJhclxyXG5cdFx0Ly8gdGhhdCBtYXkgdGFrZSB1cCBob3Jpem9udGFsIHJvb20uXHJcblx0XHRudW1zLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0Zm9yKGxldCBpPTE7IGk8PWxpbmVzKzU7IGkrKykge1xyXG5cdFx0XHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0XHRwLmlubmVyVGV4dCA9ICcnICsgaTtcclxuXHRcdFx0bnVtcy5hcHBlbmRDaGlsZChwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IHRleHQgPSBgaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtleHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge2V4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cdFxyXG5cdHZpZXcuaW5uZXJUZXh0ID0gXFxgXFxgO1xyXG59XHJcblxyXG5pbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHRcclxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcclxufVxyXG5pbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdFRhYi5jYWxsKHRoaXMsIHRhYnMsIGRhdGEpO1xyXG5cclxuXHRsZXQgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnY2wtcGctdmlldycpO1xyXG5cdHZpZXcuY2xhc3NMaXN0LmFkZCgnb3V0cHV0Jyk7XHJcblx0dGhpcy52aWV3ID0gdmlldztcclxuXHRcclxuXHR2aWV3LmlubmVyVGV4dCA9IFxcYFxcYDtcclxufVxyXG5cclxuT3V0cHV0VGFiLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVGFiLnByb3RvdHlwZSk7XHJcbk91dHB1dFRhYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPdXRwdXRUYWI7YDtcclxuXHJcblx0Ly90aGlzLnNldCh0ZXh0ICsgdGV4dCArIHRleHQgKyB0ZXh0KTtcclxuXHR0aGlzLnNldCgnJyk7XHJcbn1cclxuXHJcbk91dHB1dFRhYi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRhYi5wcm90b3R5cGUpO1xyXG5PdXRwdXRUYWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3V0cHV0VGFiOyIsIlxyXG5leHBvcnQgY29uc3QgVGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge1xyXG5cdHRoaXMudGFicyA9IHRhYnM7XHJcblxyXG5cdHRoaXMudmlldyA9IG51bGw7XHJcblx0dGhpcy50YWcgPSBkYXRhLnRhZztcclxuXHJcblx0bGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHR0aGlzLmxpID0gbGk7XHJcblxyXG5cdGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cdGxpLmFwcGVuZENoaWxkKGEpO1xyXG5cdGEuaW5uZXJUZXh0ID0gZGF0YS5uYW1lO1xyXG5cclxuXHRsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHRsaS5hcHBlbmRDaGlsZChtZW51KTtcclxuXHQvLyBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblx0Ly8gbWVudS5hcHBlbmRDaGlsZChpbWcpO1xyXG5cdC8vIGltZy5zcmMgPSBtZW51YmFycztcclxuXHJcblx0bGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0aGlzLnNlbGVjdCgpO1xyXG5cdH0pO1xyXG5cclxuXHRhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5zZWxlY3QoKTtcclxuXHR9KTtcclxuXHJcblxyXG5cdC8vXHJcblx0Ly8gVGhlIG1lbnVcclxuXHQvLyBNYXliZSBhY3RpdmF0ZSBsYXRlciBvbj9cclxuXHQvL1xyXG5cdC8vIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHQvLyBtZW51RGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXRhYi1tZW51Jyk7XHJcblx0Ly8gbWVudURpdi5jbGFzc0xpc3QuYWRkKCdjbC1tZW51LW9wZW4nKTtcclxuXHQvLyBsaS5hcHBlbmRDaGlsZChtZW51RGl2KTtcclxuXHQvL1xyXG5cdC8vIGNvbnN0IG1lbnVVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblx0Ly8gbWVudURpdi5hcHBlbmRDaGlsZChtZW51VUwpO1xyXG5cdC8vIG1lbnVVTC5pbm5lckhUTUwgPVxyXG5cdC8vIFx0JzxsaT48YSBjbGFzcz1cImVkaXQtdW5kb1wiPjxzcGFuIGNsYXNzPVwiaWNvbnMtY2wgaWNvbnMtY2wtYXJyb3dyZXR1cm50aGljay0xLXdcIj48L3NwYW4+VW5kbzwvYT48L2xpPicgK1xyXG5cdC8vIFx0JzxsaT48YSBjbGFzcz1cImVkaXQtZGVsZXRlXCI+PHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC10cmFzaFwiPjwvc3Bhbj5EZWxldGU8L2E+PC9saT4nO1xyXG5cdC8vXHJcblx0Ly8gY29uc3QgY29ubmVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdC8vIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY29ubmVjdERpdik7XHJcblx0Ly9cclxuXHQvLyBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHQvLyBjb25uZWN0RGl2LmFwcGVuZENoaWxkKGltZyk7XHJcblx0Ly8gaW1nLnNyYyA9IG1lbnViYXJzO1xyXG59XHJcblxyXG5UYWIucHJvdG90eXBlLnNlbGVjdCAgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLnRhYnMudW5zZWxlY3RBbGwoKTtcclxuXHJcblx0dGhpcy5saS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG5cdHRoaXMudmlldy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBEcmFnIGFuZCBkcm9wIHN1cHBvcnQgZm9yIHRoZSBwYWxldHRlXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERyYWdBbmREcm9wID0gZnVuY3Rpb24obWFpbikge1xyXG5cclxuXHRsZXQgZHJhZ0VsZW1lbnQgPSBudWxsOyAvLyBET00gRWxlbWVudFxyXG5cdGxldCBkcmFnSXRlbSA9IG51bGw7ICAgIC8vIFBhbGV0dGVJdGVtXHJcblx0bGV0IGRyb3BWaWV3cyA9IFtdOyAgICAgLy8gVmlld1xyXG5cclxuXHRjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xyXG5cdFx0XHRpZihldmVudC53aGljaCA9PT0gMCkge1xyXG5cdFx0XHRcdG1vdXNlVXAoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1vdXNlTW92ZShldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChldmVudCkgPT4ge1xyXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdFx0bW91c2VNb3ZlKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xyXG5cdFx0XHRtb3VzZVVwKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdG1vdXNlVXAodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIChldmVudCkgPT4ge1xyXG5cdFx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdFx0bW91c2VVcCh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLmRyYWdnYWJsZSA9IChwYWxldHRlSXRlbSkgPT4ge1xyXG5cdFx0cGFsZXR0ZUl0ZW0uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0Y2xpY2socGFsZXR0ZUl0ZW0pO1xyXG5cclxuXHRcdFx0bW91c2VNb3ZlKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRwYWxldHRlSXRlbS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0Y2xpY2socGFsZXR0ZUl0ZW0pO1xyXG5cclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdG1vdXNlTW92ZSh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLmRyb3BwYWJsZSA9ICh2aWV3LCBjYWxsYmFjaykgPT4ge1xyXG5cdFx0ZHJvcFZpZXdzLnB1c2goe1xyXG5cdFx0XHQndmlldyc6IHZpZXcsXHJcblx0XHRcdCdjYWxsYmFjayc6IGNhbGxiYWNrXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNsaWNrID0gKHBhbGV0dGVJdGVtKSA9PiB7XHJcblx0XHQvL1xyXG5cdFx0Ly8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZWxlbWVudCBhbmQgc2V0IGl0IHVwIGZvciBkcmFnZ2luZ1xyXG5cdFx0Ly9cclxuXHRcdGNvbnN0IGNsb25lID0gcGFsZXR0ZUl0ZW0ucGFsZXR0ZUltYWdlKCk7XHJcblx0XHRtYWluLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG5cdFx0Y2xvbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdFx0Y2xvbmUuc3R5bGUudG9wID0gMDtcclxuXHRcdGNsb25lLnN0eWxlLmxlZnQgPSAwO1xyXG5cdFx0Y2xvbmUuc3R5bGUuekluZGV4ID0gMTAwO1xyXG5cdFx0Y2xvbmUuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG5cclxuXHRcdGRyYWdJdGVtID0gcGFsZXR0ZUl0ZW07XHJcblx0XHRkcmFnRWxlbWVudCA9IGNsb25lO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbW91c2VNb3ZlID0gKHgsIHkpID0+IHtcclxuXHRcdGlmKGRyYWdFbGVtZW50ICE9PSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IHJlY3QgPSBtYWluLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdGNvbnN0IG1haW5YID0gcmVjdC5sZWZ0ICsgbWFpbi5lbGVtZW50LnNjcm9sbExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQ7XHJcblx0XHRcdGNvbnN0IG1haW5ZID0gcmVjdC50b3AgICsgbWFpbi5lbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdGRyYWdFbGVtZW50LnN0eWxlLmxlZnQgPSAoeCAtIG1haW5YIC0gZHJhZ0VsZW1lbnQuY2xpZW50V2lkdGggLyAyKSArICdweCc7XHJcblx0XHRcdGRyYWdFbGVtZW50LnN0eWxlLnRvcCA9ICh5IC0gbWFpblkgLSBkcmFnRWxlbWVudC5jbGllbnRIZWlnaHQgLyAyKSArICdweCc7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdXNlVXAgPSAoeCwgeSkgPT4ge1xyXG5cdFx0aWYoZHJhZ0VsZW1lbnQgIT09IG51bGwpIHtcclxuXHJcblx0XHRcdGZvcihjb25zdCB2aWV3IG9mIGRyb3BWaWV3cykge1xyXG5cdFx0XHRcdC8vXHJcblx0XHRcdFx0Ly8gSXMgdGhlIHZpZXcgZW5hYmxlZD9cclxuXHRcdFx0XHQvL1xyXG5cdFx0XHRcdGNvbnN0IHZpZXdFbGVtZW50ID0gdmlldy52aWV3LmVsZW1lbnQ7XHJcblx0XHRcdFx0aWYodmlld0VsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHQvLyBEZXRlcm1pbmUgeCx5IGluIHRoZSBjYW52YXNcclxuXHRcdFx0XHQvL1xyXG5cdFx0XHRcdGNvbnN0IHJlY3QgPSB2aWV3RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHRjb25zdCB2aWV3WCA9IHJlY3QubGVmdCArIHZpZXdFbGVtZW50LnNjcm9sbExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQ7XHJcblx0XHRcdFx0Y29uc3Qgdmlld1kgPSByZWN0LnRvcCArIHZpZXdFbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdFx0aWYoeCA+PSB2aWV3WCAmJlxyXG5cdFx0XHRcdFx0eSA+PSB2aWV3WSAmJlxyXG5cdFx0XHRcdFx0eCA8IHZpZXdYICsgKHJlY3QucmlnaHQgLSByZWN0LmxlZnQpICYmXHJcblx0XHRcdFx0XHR5IDwgdmlld1kgKyAocmVjdC5ib3R0b20gLSByZWN0LnRvcCkpIHtcclxuXHRcdFx0XHRcdHZpZXcuY2FsbGJhY2soZHJhZ0l0ZW0sIHggLSB2aWV3WCwgeSAtIHZpZXdZKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWFpbi5lbGVtZW50LnJlbW92ZUNoaWxkKGRyYWdFbGVtZW50KTtcclxuXHRcdFx0ZHJhZ0VsZW1lbnQgPSBudWxsO1xyXG5cdFx0XHRkcmFnSXRlbSA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxufSIsIi8qKlxyXG4gKiBTaW1wbGUgRG9jdW1lbnQgcmVhZHkgZnVuY3Rpb24sIGVxdWl2YWxlbnQgdG8galF1ZXJ5J3MgZG9jdW1lbnQgcmVhZHkuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFJlYWR5ID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxsIGEgZnVuY3Rpb24gd2hlbiB0aGUgZG9jdW1lbnQgaXMgcmVhZG9uLlxyXG4gKiBAcGFyYW0gZm4gRnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGRvY3VtZW50IHJlYWR5XHJcbiAqL1xyXG5SZWFkeS5nbyA9IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XHJcbiAgICAgICAgZm4oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1BsYXlncm91bmR9IGZyb20gXCIuL1BsYXlncm91bmQvUGxheWdyb3VuZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXlncm91bmRGYWN0b3J5ID0gZnVuY3Rpb24oKSB7fVxyXG5cclxuUGxheWdyb3VuZEZhY3RvcnkuY3JlYXRlID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cclxuXHRmdW5jdGlvbiBpbnN0YWxsKCkge1xyXG5cdFx0Y29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtcGxheWdyb3VuZCcpO1xyXG5cdFx0Zm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuXHRcdFx0Y29uc3QganNvbiA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XHJcblx0XHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdGNvbnN0IHBsYXlncm91bmQgPSBuZXcgUGxheWdyb3VuZChzaXRlLCBlbGVtZW50LCBqc29uKTtcclxuXHRcdFx0cGxheWdyb3VuZC5zdGFydE5vdygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2l0ZS5zdGFydCggKCkgPT4ge1xyXG5cdFx0aW5zdGFsbCgpO1xyXG5cdH0pO1xyXG5cclxuXHRzaXRlLlBsYXlncm91bmQgPSBQbGF5Z3JvdW5kO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
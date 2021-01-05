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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/
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
/******/ 	var hotCurrentHash = "b51a116647a55917ce6f";
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
/******/ 			_selfInvalidated: false,
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
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
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
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
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
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
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
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
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
/******/ 			var queue = outdatedModules.map(function(id) {
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
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
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
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
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
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
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
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
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
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./vendor/cl/playground/_playground.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./vendor/cl/playground/_playground.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./img/menu-check.png */ "./vendor/cl/playground/img/menu-check.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./img/bars.png */ "./vendor/cl/playground/img/bars.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "div.cl-playground div.toast {\n  position: absolute;\n  bottom: 0;\n  visibility: hidden;\n  transform: translateY(2.3em);\n  z-index: 400;\n  transition: all 0.4s ease-in-out 0s, visibility 0s linear 0.4s, z-index 0s linear 0.01s;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1.1em;\n  left: calc(50% - 30em/2);\n  width: 30em;\n  background-color: #151515;\n  color: white;\n  text-align: center;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding: 0.5em; }\n\ndiv.cl-playground div.toast.toast-active {\n  visibility: visible;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.4s;\n  z-index: 400; }\n\ndiv.cl-playground {\n  display: none; }\n\ndiv.cl-playground nav.cl-pg-menubar {\n  flex: 0 1 auto;\n  position: relative;\n  z-index: 100;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background-color: #f0f3f0;\n  border-bottom: thin solid #808080;\n  font-size: 0.9rem; }\n  div.cl-playground nav.cl-pg-menubar li:hover {\n    background: #00796B; }\n  div.cl-playground nav.cl-pg-menubar li {\n    user-select: none;\n    cursor: pointer; }\n    div.cl-playground nav.cl-pg-menubar li a {\n      font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n      font-size: 0.9rem;\n      color: black;\n      text-decoration: none; }\n    div.cl-playground nav.cl-pg-menubar li a:link, div.cl-playground nav.cl-pg-menubar li a:visited {\n      color: black; }\n  div.cl-playground nav.cl-pg-menubar > ul {\n    list-style-type: none;\n    margin: 0;\n    border: 0;\n    padding: 0; }\n    div.cl-playground nav.cl-pg-menubar > ul img.check {\n      vertical-align: baseline;\n      width: 19px;\n      height: 16px;\n      content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n    div.cl-playground nav.cl-pg-menubar > ul > li {\n      display: inline-block;\n      margin: 0;\n      border: 0;\n      padding: 0.25em 2em 0.25em 0.5em;\n      position: relative; }\n      div.cl-playground nav.cl-pg-menubar > ul > li a {\n        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        font-size: 0.9rem;\n        color: black;\n        text-decoration: none; }\n      div.cl-playground nav.cl-pg-menubar > ul > li a:link, div.cl-playground nav.cl-pg-menubar > ul > li a:visited {\n        color: black; }\n    div.cl-playground nav.cl-pg-menubar > ul ul {\n      visibility: hidden;\n      opacity: 0;\n      transform: translateY(-2em);\n      z-index: -1;\n      transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s;\n      list-style-type: none;\n      position: absolute;\n      overflow: hidden;\n      left: 0;\n      top: 100%;\n      margin: 1px 0 0 0;\n      background-color: #f0f3f0;\n      padding: 0;\n      border: 1px solid #808080;\n      border-top-width: 0; }\n      div.cl-playground nav.cl-pg-menubar > ul ul > li {\n        padding: 0 5px;\n        margin: 0;\n        overflow: hidden; }\n        div.cl-playground nav.cl-pg-menubar > ul ul > li a {\n          display: inline-block;\n          width: 8em;\n          padding-top: 5px;\n          padding-bottom: 5px; }\n      div.cl-playground nav.cl-pg-menubar > ul ul > li.menu-disabled a {\n        opacity: 0.3; }\n    div.cl-playground nav.cl-pg-menubar > ul ul.cl-pg-menu-open {\n      visibility: visible;\n      opacity: 1;\n      z-index: 100;\n      transform: translateY(0%);\n      transition-delay: 0s, 0s, 0.2s; }\n    div.cl-playground nav.cl-pg-menubar > ul ul.edit-menu a {\n      width: 6em; }\n    div.cl-playground nav.cl-pg-menubar > ul ul.option-menu a {\n      width: 11em; }\n    div.cl-playground nav.cl-pg-menubar > ul ul.file-menu a {\n      width: 6em; }\n    div.cl-playground nav.cl-pg-menubar > ul ul.help-menu a {\n      width: 7.5em; }\n    div.cl-playground nav.cl-pg-menubar > ul .ul-state-active {\n      color: red; }\n    div.cl-playground nav.cl-pg-menubar > ul li.menu-divider {\n      height: 1px;\n      border: 0 solid black;\n      border-top-width: 1px; }\n\ndiv.cl-playground div.work {\n  flex: 1 1 auto;\n  position: relative;\n  width: 100%;\n  background: black; }\n\ndiv.cl-playground div.cl-pg-overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #a00;\n  opacity: 0.05;\n  z-index: 2000;\n  display: none; }\n\ndiv.cl-playground div.cl-pg-main {\n  line-height: normal;\n  font-size: 1rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column; }\n\ndiv.cl-playground-full {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: white; }\n\ndiv.cl-playground-window {\n  position: relative;\n  width: 100%;\n  height: 600px;\n  margin: 0;\n  padding: 0;\n  border: thin solid #aaaaaa;\n  border-bottom: none;\n  background: white;\n  min-height: 100px;\n  min-width: 400px; }\n\ndiv.cl-playground-gap-before, div.cl-playground-gap-after {\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 1px; }\n\ndiv.cl-playground-gap-after {\n  height: 1em; }\n\ndiv.cl-playground div.cl-pg-tabs {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  font-size: 0.8rem;\n  padding: 0;\n  background: #ddd;\n  border: 0; }\n  div.cl-playground div.cl-pg-tabs > ul {\n    margin: 0;\n    padding: 3px 0 0 2px;\n    background: transparent;\n    border: 0;\n    list-style: none; }\n    div.cl-playground div.cl-pg-tabs > ul > li {\n      position: relative;\n      display: inline-block;\n      font-size: 0.8rem;\n      padding: 0.25em 0.25em 0.45em 0;\n      min-width: 6em;\n      text-align: center;\n      cursor: pointer;\n      background: #ccc;\n      border: 1px solid black;\n      border-bottom: none;\n      border-radius: 5px 5px 0 0;\n      margin: 1px 3px -1px 0;\n      white-space: nowrap;\n      z-index: 18; }\n      div.cl-playground div.cl-pg-tabs > ul > li a:first-child {\n        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        display: inline-block;\n        padding: 0 0.25em;\n        text-decoration: none;\n        color: black;\n        outline: 0;\n        user-select: none; }\n      div.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) {\n        float: right;\n        display: inline-block;\n        margin-top: -2px;\n        padding: 0; }\n        div.cl-playground div.cl-pg-tabs > ul > li a:nth-child(2) img {\n          width: 12px;\n          height: auto; }\n    div.cl-playground div.cl-pg-tabs > ul > li.selected {\n      background: white;\n      z-index: 22; }\n      div.cl-playground div.cl-pg-tabs > ul > li.selected a {\n        color: black; }\n  div.cl-playground div.cl-pg-tabs div.cl-pg-views {\n    position: absolute;\n    left: 0;\n    top: 29px;\n    right: 0;\n    bottom: 0;\n    z-index: 20; }\n  div.cl-playground div.cl-pg-tabs div.cl-pg-view {\n    position: absolute;\n    display: none;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 20;\n    margin: 0;\n    padding: 0;\n    border: 0; }\n  div.cl-playground div.cl-pg-tabs div.cl-pg-view.selected {\n    display: block;\n    border-top: 1px solid black; }\n\ndiv.cl-playground div.cl-tab-menu {\n  position: absolute;\n  left: calc(100% - 17px);\n  top: 0;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-2em);\n  z-index: -1;\n  transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.2s, z-index 0s linear 0.01s; }\n  div.cl-playground div.cl-tab-menu div {\n    position: absolute;\n    width: 14px;\n    height: 27px;\n    top: 4px;\n    left: 0;\n    border: 1px solid #808080;\n    border-bottom-width: 0;\n    background-color: #f0f3f0; }\n    div.cl-playground div.cl-tab-menu div img {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 12px;\n      height: auto; }\n  div.cl-playground div.cl-tab-menu ul {\n    list-style-type: none;\n    overflow: hidden;\n    margin: 30px 0 0 0;\n    background-color: #f0f3f0;\n    padding: 0;\n    border: 1px solid #808080; }\n    div.cl-playground div.cl-tab-menu ul > li {\n      padding: 0 5px;\n      margin: 0;\n      overflow: hidden; }\n      div.cl-playground div.cl-tab-menu ul > li a {\n        display: inline-block;\n        width: 8em;\n        padding-top: 5px;\n        padding-bottom: 5px; }\n    div.cl-playground div.cl-tab-menu ul > li.menu-disabled a {\n      opacity: 0.3; }\n\ndiv.cl-playground div.cl-tab-menu.cl-menu-open {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0%);\n  transition-delay: 0s, 0s, 0.2s; }\n\ndiv.cl-playground div.cl-playground-root, div.cl-playground div.cl-playground-left, div.cl-playground div.cl-playground-right,\ndiv.cl-playground div.cl-playground-top, div.cl-playground div.cl-playground-bottom {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  background: white; }\n\ndiv.cl-playground div.cl-playground-left {\n  position: relative;\n  flex: 0 1 auto;\n  border-right: 1px solid #888; }\n  div.cl-playground div.cl-playground-left div.cl-bar {\n    position: absolute;\n    margin: 0;\n    border: 0;\n    padding: 0;\n    top: 0;\n    height: 100%;\n    right: -5px;\n    width: 10px;\n    background: transparent;\n    z-index: 100;\n    cursor: ew-resize; }\n\ndiv.cl-playground div.cl-playground-top {\n  flex: 0 1 auto;\n  width: 100%;\n  border-bottom: 1px solid #888; }\n  div.cl-playground div.cl-playground-top div.cl-bar {\n    position: absolute;\n    margin: 0;\n    border: 0;\n    padding: 0;\n    bottom: -5px;\n    height: 10px;\n    width: 100%;\n    background: transparent;\n    z-index: 2;\n    cursor: ns-resize; }\n\ndiv.cl-playground div.cl-playground-bottom {\n  width: 100%;\n  height: auto; }\n\ndiv.cl-playground div.cl-playground-root {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\ndiv.cl-pg-nums {\n  display: inline-block;\n  flex: 0 0 auto;\n  background: #eee;\n  width: 2em;\n  padding: 4px 0;\n  overflow: hidden;\n  margin: 0; }\n  div.cl-pg-nums p {\n    font-size: 0.8em;\n    line-height: 16px;\n    margin: 0;\n    padding: 0 3px 0 0;\n    border: 0;\n    text-align: right;\n    color: #777; }\n\ndiv.cl-pg-about {\n  width: auto !important; }\n  div.cl-pg-about figure {\n    margin: 0;\n    width: 400px;\n    height: 225px;\n    background: black; }\n  div.cl-pg-about div.cl-pg-about-div {\n    padding: 1em; }\n    div.cl-pg-about div.cl-pg-about-div h1 {\n      font-size: 1.5em;\n      text-align: center; }\n    div.cl-pg-about div.cl-pg-about-div p {\n      text-align: center; }\n\ndiv.cl-playground div.cl-pg-view.editor {\n  overflow: hidden; }\n  div.cl-playground div.cl-pg-view.editor > div {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    background: white;\n    padding: 0;\n    display: flex;\n    flex-direction: row; }\n    div.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor {\n      margin: 0;\n      display: block;\n      flex: 1 1 auto;\n      height: 100%; }\n      div.cl-playground div.cl-pg-view.editor > div div.cl-pg-editor textarea {\n        line-height: 16px;\n        margin: 0;\n        padding: 4px 0 0 3px;\n        border: 0;\n        overflow: auto;\n        width: 100%;\n        height: 100%;\n        min-height: 100%;\n        font-size: 1em;\n        font-family: monospace, monospace;\n        white-space: pre;\n        overflow-wrap: normal; }\n\ndiv.cl-playground div.cl-pg-view.output {\n  overflow: hidden; }\n  div.cl-playground div.cl-pg-view.output > div {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    background: white;\n    padding: 0;\n    display: flex;\n    flex-direction: row; }\n    div.cl-playground div.cl-pg-view.output > div pre {\n      display: block;\n      flex: 1 1 auto;\n      background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n      line-height: 16px;\n      margin: 0;\n      padding: 4px 0 0 3px;\n      border: 0;\n      overflow: auto;\n      height: 100%; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./vendor/cl/playground/_playground.scss":
/*!***********************************************!*\
  !*** ./vendor/cl/playground/_playground.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js?sourceMap!./_playground.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./vendor/cl/playground/_playground.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("467b4c4c", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js?sourceMap!./_playground.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./vendor/cl/playground/_playground.scss", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js?sourceMap!./_playground.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./vendor/cl/playground/_playground.scss");
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAgAgMAAABfgKEEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURf///+L/9+H/9+X/+Oh4HTMAAAAeSURBVAjXY2AgEvz///8Dw6pVqxYwhIaGBlBOEAkAU2MY3tDf9aUAAAAASUVORK5CYII=");

/***/ }),

/***/ "./vendor/cl/playground/img/menu-check.png":
/*!*************************************************!*\
  !*** ./vendor/cl/playground/img/menu-check.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAOCAYAAADNGCeJAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAVdJREFUOI2V0bFrU1EUB+DvRWNsIJNQu6t1E8ykuDgKBQlIFwdHkQ7+AwU7url0FMQ5cXFwsoMguIhSqoPtJA51EHGohedQfg55SV9jaeKFw71wDt89hyOJesx60u83srR0LlwKvdArJoGiKKZDq6vzBoOunZ1ruIgfGPwXlm73lIODW7a3l5XlIn7hNfrYNcuY2duTXm8uPAgfQj/cD4uhGQRTsezvy8pKJzwMX8KzcCGcHiGHGHPhSlgIRZrNVjY3h1BZytpap+roU3ga5v9Bxj8PkRdhN7wLd8LltNvtrK93wt3wMQzC+WORGiYU4XrYCl8r9F64HTbC+3CzqjseqmGjOBOehO/hW3hZ4Y9D60RovICjYCM8Cj8r9HO4OhUaY6M4BFvhTfgd3oaz49zE9uvRmJBHrz/YQInn1V3Pz9DZ0Q674VW17aldJTmhYDjajVmhJP4Cy1ZU6+dCg3AAAAAASUVORK5CYII=");

/***/ }),

/***/ "./vendor/cl/playground/img/menubars.png":
/*!***********************************************!*\
  !*** ./vendor/cl/playground/img/menubars.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABXRSTlMAv/IBDVaQsj8AAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHElEQVQI12NgwA0YlcBAAMFgdgEDAwSDPDW4AQB2XAxb8EnVqQAAAABJRU5ErkJggg==");

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

  this["do"] = function (main) {
    _Action__WEBPACK_IMPORTED_MODULE_0__["Action"].prototype["do"].call(this, main); // Dialog box contents

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
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

  this["do"] = function (main) {
    var _this = this;

    _Action__WEBPACK_IMPORTED_MODULE_0__["Action"].prototype["do"].call(this, main); // Get the requisite tab contents

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


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
          var _ul = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].child(node, 'UL');

          if (_ul !== null) {// Tools.removeClass(ul, 'cl-pg-menu-open');
          }
        }
      } // And open this menu

    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
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
    var _iterator4 = _createForOfIteratorHelper(_this.ul.childNodes),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var node = _step4.value;

        if (node.tagName === 'LI') {
          var ul = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].child(node, 'UL');

          if (ul !== null) {
            _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].removeClass(ul, 'cl-pg-menu-open');
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
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

module.exports = JSON.parse("{\"name\":\"playground-cl\",\"version\":\"2.0.0\",\"description\":\"CourseLib Playground IDE\",\"main\":\"index.js\",\"keywords\":[\"Education\",\"Course Web Sites\",\"Karnaugh Maps\"],\"author\":\"Charles B. Owen\",\"license\":\"MIT\",\"devDependencies\":{},\"dependencies\":{\"course-cl\":\">=0.0.1\"}}");

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9fcGxheWdyb3VuZC5zY3NzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL19wbGF5Z3JvdW5kLnNjc3M/NDhhZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbWcvYmFycy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvaW1nL21lbnUtY2hlY2sucG5nIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2ltZy9tZW51YmFycy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9BY3Rpb25zL0Fib3V0QWN0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvQWN0aW9ucy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9BY3Rpb25zL0FsbEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9BY3Rpb25zL1NhdmVBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9ET00vVG9vbHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9HcmFwaGljcy9Ub2FzdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL01haW4uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9NZW51LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1BhbmUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9QbGF5Z3JvdW5kLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVGFicy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1RhYnMvRWRpdG9yVGFiLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVGFicy9PdXRwdXRUYWIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3BsYXlncm91bmQvanMvUGxheWdyb3VuZC9UYWJzL1RhYi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kL1VJL0RyYWdBbmREcm9wLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2pzL1BsYXlncm91bmQvVXRpbGl0eS9SZWFkeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9qcy9QbGF5Z3JvdW5kRmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJQbGF5Z3JvdW5kRmFjdG9yeSIsImNyZWF0ZSIsIlNpdGUiLCJzaXRlIiwiUGxheWdyb3VuZCIsIkFib3V0QWN0aW9uIiwib3B0aW9ucyIsIkFjdGlvbiIsImNhbGwiLCJtYWluIiwicHJvdG90eXBlIiwiY29udGVudCIsInJvb3QiLCJwYWNrYWdlanNvbiIsInZlcnNpb24iLCJkaWFsb2ciLCJEaWFsb2ciLCJ0aXRsZSIsIk9iamVjdCIsImNvbnN0cnVjdG9yIiwidGFnIiwiZ2V0U291cmNlcyIsInNvdXJjZXMiLCJ1bmRlZmluZWQiLCJzb3VyY2UiLCJ0YWIiLCJnZXRUYWIiLCJuYW1lIiwiZGF0YSIsImdldCIsIkFsbEFjdGlvbnMiLCJhZGRBbGwiLCJhZGRBY3Rpb24iLCJTYXZlQWN0aW9uIiwicGFyYW1zIiwiYXBwVGFnIiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGUiLCJhcGkiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImhhc0Vycm9yIiwidG9hc3QiLCJlcnJvciIsIlRvb2xzIiwiaXNWaXNpYmxlIiwiZWxlbSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZ2V0Q2xpZW50UmVjdHMiLCJsZW5ndGgiLCJhZGRDbGFzcyIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRDbGFzc2VzIiwiY2xhc3NlcyIsInNwbGl0IiwiZm9yRWFjaCIsImNscyIsInJlbW92ZUNsYXNzIiwicmVnRXgiLCJSZWdFeHAiLCJyZXBsYWNlIiwiY3JlYXRlQ2xhc3NlZERpdiIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFkZENvbnRlbnQiLCJpc1N0cmluZyIsImlubmVySFRNTCIsImlzRWxlbWVudCIsImFwcGVuZENoaWxkIiwidmFsIiwidG9TdHJpbmciLCJub2RlVmFsdWUiLCJvZmZzZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsInNjcm9sbExlZnQiLCJ3aW5kb3ciLCJwYWdlWE9mZnNldCIsInRvcCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiY2hpbGQiLCJ0YWdOYW1lIiwiY2hpbGROb2RlcyIsIm5vZGUiLCJUb2FzdCIsImRlZmF1bHREdXJhdGlvbiIsImludGVyVG9hc3REZWxheSIsIm1lc3NhZ2VzIiwiYWN0aXZlIiwic2hvdyIsIm1lc3NhZ2UiLCJzcGxpY2UiLCJtc2ciLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidGltZSIsInB1c2giLCJqc29uRXJyb3JzIiwianNvbkFwaSIsImVycm9ycyIsIk1haW4iLCJwbGF5Z3JvdW5kIiwibWVudSIsInRhYnMiLCJkaXZPdmVybGF5IiwiZGl2V29yayIsImluaXRpYWxpemUiLCJzdHlsZSIsImRpc3BsYXkiLCJoZWlnaHQiLCJjb250YWlucyIsIlJlc2l6ZXIiLCJoYW5kbGUiLCJkcmFnQW5kRHJvcCIsIkRyYWdBbmREcm9wIiwiTWVudSIsInJvb3RQYW5lIiwiUGFuZSIsImxvYWQiLCJwYW5lIiwiU3RyaW5nIiwicGFyc2UiLCJzZXQiLCJuZXdUYWIiLCJtb2RhbCIsIm5hdiIsInVsIiwibWVudXMiLCJhY3Rpb24iLCJ0b3BMSSIsImEiLCJpbm5lclRleHQiLCJnZXRBY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInN1YlVMIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJvcGVuIiwiY2xvc2VBbGwiLCJzdWJNZW51Iiwic3ViTEkiLCJjbG9zZUxpc3RlbmVyIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImxpIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVuYWJsZSIsInNlbCIsInF1ZXJ5U2VsZWN0b3IiLCJmaW5kIiwiY2xpY2siLCJjbG9zdXJlIiwiT3B0aW9ucyIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJFcnJvciIsImdldEFQSSIsIm1vZGUiLCJvYmoiLCJtb2RlT2JqIiwidXJsIiwiY29udGVudFR5cGUiLCJleHRyYSIsInBhcmVudCIsIm1pblNwbGl0IiwibWF4U3BsaXQiLCJjaGlsZDEiLCJjaGlsZDIiLCJob3Jpem9udGFsU3BsaXQiLCJob3JpeiIsInBlcmNlbnRhZ2UiLCJUYWJzIiwiaG9yaXpvbnRhbCIsImNoaWxkMURhdGEiLCJjaGlsZDJEYXRhIiwiZmxleERpcmVjdGlvbiIsImJhciIsInN0YXJ0RHJhZ2dpbmciLCJwYWdlWCIsInBhZ2VZIiwibW91c2VNb3ZlIiwibW91c2VVcCIsInRvdWNoIiwiY2hhbmdlZFRvdWNoZXMiLCJ0b3VjaE1vdmUiLCJ0b3VjaEVuZCIsInRvdWNoQ2FuY2VsIiwic3RhcnRYIiwic3RhcnRZIiwieCIsInkiLCJlbmREcmFnZ2luZyIsImRyYWdnaW5nIiwibWFpblgiLCJ3aWQiLCJyaWdodCIsInBlciIsIm1haW5ZIiwiaGl0IiwiYm90dG9tIiwid2hpY2giLCJ3aWR0aCIsImNvbGxlY3Rpb24iLCJQQUNLQUdFIiwicmVxdWlyZSIsIm1haW5zIiwic3RhcnQiLCJzdGFydE5vdyIsIlJlYWR5IiwiZ28iLCJFbGVtZW50IiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImFjdGlvbnMiLCJ0YWJzRGl2Iiwidmlld3NEaXYiLCJ0YWJEYXRhIiwibmV3UGFyZW50IiwiRWRpdG9yVGFiIiwiT3V0cHV0VGFiIiwidmlldyIsInNlbGVjdCIsInVuc2VsZWN0QWxsIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiVGFiIiwiaW5uZXJWaWV3IiwibnVtcyIsImVkaXRvckRpdiIsImVkaXRvciIsIkVkaXRvciIsInJlc2l6ZSIsImF1dG9JbmRlbnQiLCJzdHlsZXMiLCJzY3JvbGxhYmxlIiwidGV4dGFyZWEiLCJ0ZXh0IiwidmFsdWUiLCJsaW5lcyIsInAiLCJmb2N1cyIsInByZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRyYWdFbGVtZW50IiwiZHJhZ0l0ZW0iLCJkcm9wVmlld3MiLCJkcmFnZ2FibGUiLCJwYWxldHRlSXRlbSIsImRyb3BwYWJsZSIsImNhbGxiYWNrIiwiY2xvbmUiLCJwYWxldHRlSW1hZ2UiLCJwb3NpdGlvbiIsInpJbmRleCIsImN1cnNvciIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwidmlld0VsZW1lbnQiLCJ2aWV3WCIsInZpZXdZIiwiZm4iLCJhdHRhY2hFdmVudCIsInJlYWR5U3RhdGUiLCJpbnN0YWxsIiwianNvbiIsInRleHRDb250ZW50IiwibWVzc2FnZUxpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxHQUFHOztRQUVIO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLHFCQUFxQixnQkFBZ0I7UUFDckM7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxrQkFBa0IsOEJBQThCO1FBQ2hEO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLG9CQUFvQiwyQkFBMkI7UUFDL0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0EsbUJBQW1CLGNBQWM7UUFDakM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQixLQUFLO1FBQ3JCO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLFlBQVk7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxjQUFjLDRCQUE0QjtRQUMxQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7O1FBRUo7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7UUFDQSxlQUFlLDRCQUE0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QUNBaE8sYUFBTyxDQUFDbUIsU0FBUixHQUFvQixFQUFwQjtBQUNBLFVBQU1xQyxVQUFVLEdBQUcsSUFBSTVHLGlFQUFKLENBQWVELElBQWYsRUFBcUJxRCxPQUFyQixFQUE4QitOLElBQTlCLENBQW5CO0FBQ0F2SyxnQkFBVSxDQUFDNkcsUUFBWDtBQUNBO0FBQ0Q7O0FBRUQxTixNQUFJLENBQUN5TixLQUFMLENBQVksWUFBTTtBQUNqQjBELFdBQU87QUFDUCxHQUZEO0FBS0FuUixNQUFJLENBQUNzUixlQUFMLENBQXFCLFVBQUNsTCxHQUFELEVBQU0zRSxJQUFOLEVBQWU7QUFDbkMsWUFBTzJFLEdBQVA7QUFDQyxXQUFLLHlCQUFMO0FBQ0MrSyxlQUFPO0FBQ1A7O0FBRUQsV0FBSyw0QkFBTDtBQUNDQSxlQUFPO0FBQ1A7QUFQRjtBQVVBLEdBWEQ7QUFhQW5SLE1BQUksQ0FBQ0MsVUFBTCxHQUFrQkEsaUVBQWxCO0FBQ0EsQ0FoQ0QsQyIsImZpbGUiOiJwbGF5Z3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUGxheWdyb3VuZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJQbGF5Z3JvdW5kXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cbiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZV9uYW1lX1wiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHRpZiAobnVsbCkgc2NyaXB0LmNyb3NzT3JpZ2luID0gbnVsbDtcbiBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcImI1MWExMTY2NDdhNTU5MTdjZTZmXCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcbiBcdFx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG4gXHRcdFx0XHRzd2l0Y2ggKGhvdFN0YXR1cykge1xuIFx0XHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG4gXHRcdFx0XHRcdFx0aG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZShtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuIFx0XHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcbiBcdFx0XHRcdFx0XHQoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID1cbiBcdFx0XHRcdFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoLCBob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdGZvcih2YXIgY2h1bmtJZCBpbiBpbnN0YWxsZWRDaHVua3MpXG4gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4gXHRcdFx0e1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiBcdFx0cmV0dXJuIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucyk7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucykge1xuIFx0XHRob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdCFtb2R1bGUgfHxcbiBcdFx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuIFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cblxuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuIFx0XHRcdH07XG4gXHRcdH1cblxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuIFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4gXHRcdFx0KTtcbiBcdFx0fTtcblxuIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkICYmXG4gXHRcdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG4gXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG4gXHRcdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuIFx0XHRcdFx0IWluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkludmFsaWRhdGVkXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdHBhcmVudHM6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLnBhcmVudHMuc2xpY2UoKSxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aWYgKGhvdFVwZGF0ZU5ld0hhc2ggIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdW5kZWZpbmVkO1xuIFx0XHR9XG4gXHRcdGhvdFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gaXRlbS5wYXJlbnRzO1xuIFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IG1vZHVsZUlkO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRpZiAoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG4gXHRcdFx0cmV0dXJuIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucykudGhlbihmdW5jdGlvbihsaXN0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbihtb2R1bGVJZCkge1xuIFx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHJldHVybiBsaXN0O1xuIFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcbiBcdFx0aWYgKGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuIFx0XHRcdGlmICghaG90VXBkYXRlKSBob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKTtcbiBcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG4gXHRcdFx0cmV0dXJuIHRydWU7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHRpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIG1vZHVsZUlkKSlcbiBcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIlBsYXlncm91bmRcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY2wvZGlzdC9cIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi92ZW5kb3IvY2wvcGxheWdyb3VuZC9pbmRleC5qc1wiLFwiY29tbW9uXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vaW1nL21lbnUtY2hlY2sucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4vaW1nL2JhcnMucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLXBsYXlncm91bmQgZGl2LnRvYXN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjNlbSk7XFxuICB6LWluZGV4OiA0MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC40cywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDMwZW0vMik7XFxuICB3aWR0aDogMzBlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjVlbTsgfVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi50b2FzdC50b2FzdC1hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuNHM7XFxuICB6LWluZGV4OiA0MDA7IH1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIge1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDA7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzgwODA4MDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtOyB9XFxuICBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDc5NkI7IH1cXG4gIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciBsaSBhIHtcXG4gICAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyIGxpIGE6bGluaywgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgbGkgYTp2aXNpdGVkIHtcXG4gICAgICBjb2xvcjogYmxhY2s7IH1cXG4gIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwOyB9XFxuICAgIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgaW1nLmNoZWNrIHtcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAgICAgd2lkdGg6IDE5cHg7XFxuICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICAgIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IH1cXG4gICAgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBwYWRkaW5nOiAwLjI1ZW0gMmVtIDAuMjVlbSAwLjVlbTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgICBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsID4gbGkgYSB7XFxuICAgICAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgICAgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIGE6bGluaywgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCA+IGxpIGE6dmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogYmxhY2s7IH1cXG4gICAgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCB7XFxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcbiAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCB6LWluZGV4IDBzIGxpbmVhciAwLjAxcztcXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IDEwMCU7XFxuICAgICAgbWFyZ2luOiAxcHggMCAwIDA7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XFxuICAgICAgYm9yZGVyLXRvcC13aWR0aDogMDsgfVxcbiAgICAgIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwgPiBsaSB7XFxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgICAgIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwgPiBsaSBhIHtcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICB3aWR0aDogOGVtO1xcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4OyB9XFxuICAgICAgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bCA+IGxpLm1lbnUtZGlzYWJsZWQgYSB7XFxuICAgICAgICBvcGFjaXR5OiAwLjM7IH1cXG4gICAgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5jbC1wZy1tZW51LW9wZW4ge1xcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB6LWluZGV4OiAxMDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMnM7IH1cXG4gICAgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5lZGl0LW1lbnUgYSB7XFxuICAgICAgd2lkdGg6IDZlbTsgfVxcbiAgICBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIHVsLm9wdGlvbi1tZW51IGEge1xcbiAgICAgIHdpZHRoOiAxMWVtOyB9XFxuICAgIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgdWwuZmlsZS1tZW51IGEge1xcbiAgICAgIHdpZHRoOiA2ZW07IH1cXG4gICAgZGl2LmNsLXBsYXlncm91bmQgbmF2LmNsLXBnLW1lbnViYXIgPiB1bCB1bC5oZWxwLW1lbnUgYSB7XFxuICAgICAgd2lkdGg6IDcuNWVtOyB9XFxuICAgIGRpdi5jbC1wbGF5Z3JvdW5kIG5hdi5jbC1wZy1tZW51YmFyID4gdWwgLnVsLXN0YXRlLWFjdGl2ZSB7XFxuICAgICAgY29sb3I6IHJlZDsgfVxcbiAgICBkaXYuY2wtcGxheWdyb3VuZCBuYXYuY2wtcGctbWVudWJhciA+IHVsIGxpLm1lbnUtZGl2aWRlciB7XFxuICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgYm9yZGVyOiAwIHNvbGlkIGJsYWNrO1xcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDsgfVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi53b3JrIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBibGFjazsgfVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6ICNhMDA7XFxuICBvcGFjaXR5OiAwLjA1O1xcbiAgei1pbmRleDogMjAwMDtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctbWFpbiB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuZGl2LmNsLXBsYXlncm91bmQtZnVsbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgfVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLXdpbmRvdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkICNhYWFhYWE7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIG1pbi13aWR0aDogNDAwcHg7IH1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZC1nYXAtYmVmb3JlLCBkaXYuY2wtcGxheWdyb3VuZC1nYXAtYWZ0ZXIge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBoZWlnaHQ6IDFweDsgfVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kLWdhcC1hZnRlciB7XFxuICBoZWlnaHQ6IDFlbTsgfVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6ICNkZGQ7XFxuICBib3JkZXI6IDA7IH1cXG4gIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDNweCAwIDAgMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lOyB9XFxuICAgIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICBwYWRkaW5nOiAwLjI1ZW0gMC4yNWVtIDAuNDVlbSAwO1xcbiAgICAgIG1pbi13aWR0aDogNmVtO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgYmFja2dyb3VuZDogI2NjYztcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgICAgIG1hcmdpbjogMXB4IDNweCAtMXB4IDA7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICB6LWluZGV4OiAxODsgfVxcbiAgICAgIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgcGFkZGluZzogMCAwLjI1ZW07XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICBvdXRsaW5lOiAwO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkgYTpudGgtY2hpbGQoMikge1xcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcXG4gICAgICAgIHBhZGRpbmc6IDA7IH1cXG4gICAgICAgIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaSBhOm50aC1jaGlsZCgyKSBpbWcge1xcbiAgICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAgIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzID4gdWwgPiBsaS5zZWxlY3RlZCB7XFxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgei1pbmRleDogMjI7IH1cXG4gICAgICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyA+IHVsID4gbGkuc2VsZWN0ZWQgYSB7XFxuICAgICAgICBjb2xvcjogYmxhY2s7IH1cXG4gIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy10YWJzIGRpdi5jbC1wZy12aWV3cyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAyOXB4O1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB6LWluZGV4OiAyMDsgfVxcbiAgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXRhYnMgZGl2LmNsLXBnLXZpZXcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMjA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwOyB9XFxuICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdGFicyBkaXYuY2wtcGctdmlldy5zZWxlY3RlZCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7IH1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYygxMDAlIC0gMTdweCk7XFxuICB0b3A6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7IH1cXG4gIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSBkaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDI3cHg7XFxuICAgIHRvcDogNHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YwOyB9XFxuICAgIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudSBkaXYgaW1nIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgaGVpZ2h0OiBhdXRvOyB9XFxuICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1hcmdpbjogMzBweCAwIDAgMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDsgfVxcbiAgICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwgPiBsaSB7XFxuICAgICAgcGFkZGluZzogMCA1cHg7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwgPiBsaSBhIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHdpZHRoOiA4ZW07XFxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDsgfVxcbiAgICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtdGFiLW1lbnUgdWwgPiBsaS5tZW51LWRpc2FibGVkIGEge1xcbiAgICAgIG9wYWNpdHk6IDAuMzsgfVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC10YWItbWVudS5jbC1tZW51LW9wZW4ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjJzOyB9XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtcm9vdCwgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtbGVmdCwgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtcmlnaHQsXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtdG9wLCBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGxheWdyb3VuZC1ib3R0b20ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlOyB9XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtbGVmdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4ODg7IH1cXG4gIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWxlZnQgZGl2LmNsLWJhciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICByaWdodDogLTVweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIGN1cnNvcjogZXctcmVzaXplOyB9XFxuXFxuZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtdG9wIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODsgfVxcbiAgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBsYXlncm91bmQtdG9wIGRpdi5jbC1iYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3R0b206IC01cHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBjdXJzb3I6IG5zLXJlc2l6ZTsgfVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLWJvdHRvbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bzsgfVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wbGF5Z3JvdW5kLXJvb3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwOyB9XFxuXFxuZGl2LmNsLXBnLW51bXMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgd2lkdGg6IDJlbTtcXG4gIHBhZGRpbmc6IDRweCAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDsgfVxcbiAgZGl2LmNsLXBnLW51bXMgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgM3B4IDAgMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY29sb3I6ICM3Nzc7IH1cXG5cXG5kaXYuY2wtcGctYWJvdXQge1xcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDsgfVxcbiAgZGl2LmNsLXBnLWFib3V0IGZpZ3VyZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDIyNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjazsgfVxcbiAgZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYge1xcbiAgICBwYWRkaW5nOiAxZW07IH1cXG4gICAgZGl2LmNsLXBnLWFib3V0IGRpdi5jbC1wZy1hYm91dC1kaXYgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIGRpdi5jbC1wZy1hYm91dCBkaXYuY2wtcGctYWJvdXQtZGl2IHAge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbmRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3LmVkaXRvciB7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG4gICAgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcuZWRpdG9yID4gZGl2IGRpdi5jbC1wZy1lZGl0b3Ige1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgICBoZWlnaHQ6IDEwMCU7IH1cXG4gICAgICBkaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5lZGl0b3IgPiBkaXYgZGl2LmNsLXBnLWVkaXRvciB0ZXh0YXJlYSB7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDRweCAwIDAgM3B4O1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgICAgICBvdmVyZmxvdy13cmFwOiBub3JtYWw7IH1cXG5cXG5kaXYuY2wtcGxheWdyb3VuZCBkaXYuY2wtcGctdmlldy5vdXRwdXQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgZGl2LmNsLXBsYXlncm91bmQgZGl2LmNsLXBnLXZpZXcub3V0cHV0ID4gZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuICAgIGRpdi5jbC1wbGF5Z3JvdW5kIGRpdi5jbC1wZy12aWV3Lm91dHB1dCA+IGRpdiBwcmUge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDRweCAwIDAgM3B4O1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICBoZWlnaHQ6IDEwMCU7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL19wbGF5Z3JvdW5kLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNDY3YjRjNGNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL19wbGF5Z3JvdW5kLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4vX3BsYXlncm91bmQuc2Nzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE0QUFBQWdBZ01BQUFCZmdLRUVBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQUZ6VWtkQ0FLN09IT2tBQUFBTVVFeFVSZi8vLytMLzkrSC85K1gvK09oNEhUTUFBQUFlU1VSQlZBalhZMkFnRXZ6Ly8vOER3NnBWcXhZd2hJYUdCbEJPRUFrQVUyTVkzdERmOWFVQUFBQUFTVVZPUks1Q1lJST1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCTUFBQUFPQ0FZQUFBRE5HQ2VKQUFBQlMybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTlM0MkxXTXhORElnTnprdU1UWXdPVEkwTENBeU1ERTNMekEzTHpFekxUQXhPakEyT2pNNUlDQWdJQ0FnSUNBaVBnb2dQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRLSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlpOCtDaUE4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnbzhQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtuaHhnN3dBQUFWZEpSRUZVT0kyVjBiRnJVMUVVQitEdlJXTnNJSk5RdTZ0MUU4eWt1RGdLQlFsSUZ3ZEhrUTcrQXdVN3VybDBGTVE1Y1hGd3NvTWd1SWhTcW9QdEpBNTFFSEdvaGVkUWZnNTVTVjlqYWVLRnc3MXdEdDg5aHlPSmVzeDYwdTgzc3JSMExsd0t2ZEFySm9HaUtLWkRxNnZ6Qm9PdW5aMXJ1SWdmR1B3WGxtNzNsSU9EVzdhM2w1WGxJbjdoTmZyWU5jdVkyZHVUWG04dVBBZ2ZRai9jRDR1aEdRUlRzZXp2eThwS0p6d01YOEt6Y0NHY0hpR0hHSFBoU2xnSVJack5WalkzaDFCWnl0cGFwK3JvVTNnYTV2OUJ4ajhQa1JkaE43d0xkOExsdE52dHJLOTN3dDN3TVF6QytXT1JHaVlVNFhyWUNsOHI5RjY0SFRiQyszQ3pxanNlcW1Hak9CT2VoTy9oVzNoWjRZOUQ2MFJvdklDallDTThDajhyOUhPNE9oVWFZNk00QkZ2aFRmZ2Qzb2F6NDl6RTl1dlJtSkJIcnovWVFJbm4xVjNQejlEWjBRNjc0VlcxN2FsZEpUbWhZRGphalZtaEpQNEN5MVpVNitkQ2czQUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUJBTUFBQUR0M2VKU0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUVsQk1WRVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURnS3htaUFBQUFCWFJTVGxNQXYvSUJEVmFRc2o4QUFBQUJZa3RIUkFDSUJSMUlBQUFBQ1hCSVdYTUFBQXNTQUFBTEVnSFMzWDc4QUFBQUhFbEVRVlFJMTJOZ3dBMFlsY0JBQU1GZ2RnRURBd1NEUERXNEFRQjJYQXhiOEVuVnFRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJcclxuaW1wb3J0ICcuL19wbGF5Z3JvdW5kLnNjc3MnO1xyXG5pbXBvcnQge1BsYXlncm91bmR9IGZyb20gJy4vanMvUGxheWdyb3VuZC9QbGF5Z3JvdW5kJztcclxuaW1wb3J0IHtQbGF5Z3JvdW5kRmFjdG9yeX0gZnJvbSAnLi9qcy9QbGF5Z3JvdW5kRmFjdG9yeSc7XHJcblxyXG5leHBvcnQge1BsYXlncm91bmR9O1xyXG5leHBvcnQge1BsYXlncm91bmQgYXMgZGVmYXVsdH07XHJcblxyXG5QbGF5Z3JvdW5kRmFjdG9yeS5jcmVhdGUoU2l0ZS5zaXRlKTtcclxuXHJcblNpdGUuUGxheWdyb3VuZCA9IFBsYXlncm91bmQ7XHJcblxyXG4iLCJpbXBvcnQge0FjdGlvbn0gZnJvbSAnLi9BY3Rpb24nO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XHJcbmltcG9ydCBwYWNrYWdlanNvbiBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0QWN0aW9uID0gZnVuY3Rpb24oc2l0ZSwgb3B0aW9ucykge1xyXG5cdEFjdGlvbi5jYWxsKHRoaXMsIHNpdGUsIG9wdGlvbnMpO1xyXG5cclxuXHR0aGlzLmRvID0gZnVuY3Rpb24obWFpbikge1xyXG5cdFx0QWN0aW9uLnByb3RvdHlwZS5kby5jYWxsKHRoaXMsIG1haW4pO1xyXG5cclxuXHRcdC8vIERpYWxvZyBib3ggY29udGVudHNcclxuXHRcdGxldCBjb250ZW50ID0gYFxyXG48ZmlndXJlPjxpbWcgc3JjPVwiJHtzaXRlLnJvb3R9L3ZlbmRvci9jbC9wbGF5Z3JvdW5kL2ltZy9wbGF5Z3JvdW5kLmpwZ1wiIGFsdD1cIkNpcnNpbSBMb2dvXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIyMjVcIj48L2ZpZ3VyZT5cclxuPGRpdiBjbGFzcz1cImNsLXBnLWFib3V0LWRpdlwiPlxyXG48aDE+Q291cnNlTGliIFBsYXlncm91bmQ8L2gxPlxyXG48cD5WZXJzaW9uOiAke3BhY2thZ2Vqc29uLnZlcnNpb259PC9wPlxyXG48cD5Xcml0dGVuIGJ5OiBDaGFybGVzIEIuIE93ZW48L3A+PC9kaXY+YDtcclxuXHJcblx0XHRjb25zdCBkaWFsb2cgPSBuZXcgRGlhbG9nKHtcclxuXHRcdFx0dGl0bGU6ICdBYm91dCB0aGUgUGxheWdyb3VuZCcsXHJcblx0XHRcdGNvbnRlbnQ6IGNvbnRlbnQsXHJcblx0XHRcdCdhZGRDbGFzcyc6ICdjbC1wZy1hYm91dCdcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcbn1cclxuXHJcbkFib3V0QWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWN0aW9uLnByb3RvdHlwZSk7XHJcbkFib3V0QWN0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFib3V0QWN0aW9uO1xyXG5cclxuQWJvdXRBY3Rpb24udGFnID0gJ2Fib3V0JzsiLCIvKipcclxuICogQmFzZSBvYmplY3QgZm9yIGFuIGFjdGlvbi5cclxuICogQHBhcmFtIHNpdGUgU2l0ZSBvYmplY3RcclxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBwYXNzZWQgdG8gdGhpcyBhY3Rpb25cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQWN0aW9uID0gZnVuY3Rpb24oc2l0ZSwgb3B0aW9ucykge1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYWxsIHNvdXJjZXMgZm9yIHRoaXMgYWN0aW9uLlxyXG5cdCAqXHJcblx0ICogQmFzZWQgb24gdGhlIG9wdGlvbiAnc291cmNlcycsIHdoaWNoIGFyZSB0YWIgdGFncy5cclxuXHQgKiBAcmV0dXJuIG9iamVjdCB3aXRoIHRhYiBuYW1lcyBhbmQgc291cmNlcy5cclxuXHQgKi9cclxuXHR0aGlzLmdldFNvdXJjZXMgPSBmdW5jdGlvbigpIHtcclxuXHRcdC8vIEdldCB0aGUgcmVxdWlzaXRlIHRhYiBjb250ZW50c1xyXG5cdFx0Y29uc3Qgc291cmNlcyA9IHt9O1xyXG5cclxuXHRcdGlmKG9wdGlvbnMuc291cmNlcyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc291cmNlcyA9PT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gc291cmNlcztcclxuXHRcdH1cclxuXHJcblx0XHRmb3IoY29uc3Qgc291cmNlIG9mIG9wdGlvbnMuc291cmNlcykge1xyXG5cdFx0XHRjb25zdCB0YWIgPSB0aGlzLm1haW4uZ2V0VGFiKHNvdXJjZSk7XHJcblx0XHRcdGlmKHRhYiAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdHNvdXJjZXNbc291cmNlXSA9IHtuYW1lOiB0YWIubmFtZSwgZGF0YTogdGFiLmdldCgpfTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzb3VyY2VzO1xyXG5cdH1cclxuXHJcblxyXG59XHJcblxyXG5BY3Rpb24ucHJvdG90eXBlLmRvID0gZnVuY3Rpb24obWFpbikge1xyXG5cdHRoaXMubWFpbiA9IG1haW47XHJcbn0iLCJpbXBvcnQge1NhdmVBY3Rpb259IGZyb20gJy4vU2F2ZUFjdGlvbic7XHJcbmltcG9ydCB7QWJvdXRBY3Rpb259IGZyb20gJy4vQWJvdXRBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFsbEFjdGlvbnMgPSBmdW5jdGlvbigpIHt9XHJcblxyXG5BbGxBY3Rpb25zLmFkZEFsbCA9IGZ1bmN0aW9uKFBsYXlncm91bmQpIHtcclxuXHRQbGF5Z3JvdW5kLmFkZEFjdGlvbihTYXZlQWN0aW9uKTtcclxuXHRQbGF5Z3JvdW5kLmFkZEFjdGlvbihBYm91dEFjdGlvbik7XHJcbn0iLCJpbXBvcnQge0FjdGlvbn0gZnJvbSAnLi9BY3Rpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNhdmVBY3Rpb24gPSBmdW5jdGlvbihzaXRlLCBvcHRpb25zKSB7XHJcblx0QWN0aW9uLmNhbGwodGhpcywgc2l0ZSwgb3B0aW9ucyk7XHJcblxyXG5cdHRoaXMuZG8gPSBmdW5jdGlvbihtYWluKSB7XHJcblx0XHRBY3Rpb24ucHJvdG90eXBlLmRvLmNhbGwodGhpcywgbWFpbik7XHJcblxyXG5cdFx0Ly8gR2V0IHRoZSByZXF1aXNpdGUgdGFiIGNvbnRlbnRzXHJcblx0XHRjb25zdCBzb3VyY2VzID0gdGhpcy5nZXRTb3VyY2VzKCk7XHJcblxyXG5cdFx0Y29uc3QgcGFyYW1zID0ge1xyXG5cdFx0XHRhcHBUYWc6IG9wdGlvbnMuYXBwVGFnLFxyXG5cdFx0XHRuYW1lOiBvcHRpb25zLm5hbWUsXHJcblx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KHNvdXJjZXMpLFxyXG5cdFx0XHR0eXBlOiAnYXBwbGljYXRpb24vanNvbidcclxuXHRcdH07XHJcblxyXG5cdFx0c2l0ZS5hcGkucG9zdCgnL2FwaS9maWxlc3lzdGVtL3NhdmUnLCBwYXJhbXMpXHJcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdHNpdGUudG9hc3QodGhpcywgJ1N1Y2Nlc3NmdWxseSBzYXZlZCB0byBzZXJ2ZXInKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0c2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcblNhdmVBY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBY3Rpb24ucHJvdG90eXBlKTtcclxuU2F2ZUFjdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTYXZlQWN0aW9uO1xyXG5cclxuU2F2ZUFjdGlvbi50YWcgPSAnc2F2ZSc7IiwiXHJcblxyXG4vKipcclxuICogQ29udmVuaWVuY2UgZnVuY3Rpb25zIGZvciB0aGUgRE9NLlxyXG4gKiBUb29scyB0aGF0IGF2b2lkIGhhdmluZyB0byBoYXZlIGpRdWVyeSBpbnN0YWxsZWQuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRvb2xzID0gZnVuY3Rpb24oKSB7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogSXMgYW4gZWxlbWVudCB2aXNpYmxlP1xyXG4gKiBCb3Jyb3dlZCBmcm9tIGpRdWVyeSFcclxuICogQHBhcmFtIGVsZW1cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5Ub29scy5pc1Zpc2libGUgPSBmdW5jdGlvbiggZWxlbSApIHtcclxuICAgIHJldHVybiAhISggZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICk7XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkIGEgY2xhc3MgdG8gYW4gZWxlbWVudFxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGFkZCB0b1xyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIENsYXNzIHRvIGFkZFxyXG4gKi9cclxuVG9vbHMuYWRkQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdClcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIGVsc2VcclxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XHJcbn1cclxuXHJcblRvb2xzLmFkZENsYXNzZXMgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc2VzKSB7XHJcbiAgICBpZihjbGFzc2VzID09PSB1bmRlZmluZWQgfHwgY2xhc3NlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaCgoY2xzKSA9PiB7XHJcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3MoZWxlbWVudCwgY2xzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5Ub29scy5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgbGV0IHJlZ0V4ID0gbmV3IFJlZ0V4cCgnXFxcXGInICsgY2xhc3NOYW1lICsgJ1xcXFxiJywgJ2cnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZWdFeCwgXCJcIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBESVYgd2l0aCBhIHByb3ZpZGVkIGNsYXNzIG5hbWUuXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgQ2xhc3MgdG8gYWRkIHRvIHRoZSBkaXZcclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudCB0byBwbGFjZSBpbiB0aGUgZGl2LiBIVE1MIG9yIEVsZW1lbnRcclxuICogQHJldHVybnMge0VsZW1lbnR9IENyZWF0ZWQgRE9NIEVsZW1lbnRcclxuICovXHJcblRvb2xzLmNyZWF0ZUNsYXNzZWREaXYgPSBmdW5jdGlvbihjbGFzc05hbWUsIGNvbnRlbnQpIHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFRvb2xzLmFkZENsYXNzKGRpdiwgY2xhc3NOYW1lKTtcclxuICAgIGlmKGNvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xyXG5cdCAgICBUb29scy5hZGRDb250ZW50KGRpdiwgY29udGVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIGNvbnRlbnQgdG8gYW4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBhZGQgdG9cclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudC4gQ2FuIGJlIEhUTUwgb3IgYW4gRWxlbWVudC5cclxuICovXHJcblRvb2xzLmFkZENvbnRlbnQgPSBmdW5jdGlvbihlbGVtZW50LCBjb250ZW50KSB7XHJcbiAgICBpZihUb29scy5pc1N0cmluZyhjb250ZW50KSkge1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XHJcbiAgICB9IGVsc2UgaWYoVG9vbHMuaXNFbGVtZW50KGNvbnRlbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIElzIHRoZSBwYXNzZWQgdmFsdWUgYSBzdHJpbmc/XHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5Ub29scy5pc1N0cmluZyA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8ICgoISF2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBTdHJpbmddJyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJcyB0aGUgcGFzc2VkIHZhbHVlIGFuIEhUTUxFbGVtZW50P1xyXG4gKiBAcGFyYW0gdmFsXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuVG9vbHMuaXNFbGVtZW50ID0gZnVuY3Rpb24odmFsKSB7XHJcbiAgICByZXR1cm4gdmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsICYmIHZhbC5ub2RlVmFsdWUgIT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IChzcGVjaWZpY2FsbHkgaXRzIGJvcmRlciBib3gsIHdoaWNoIGV4Y2x1ZGVzIG1hcmdpbnMpIHJlbGF0aXZlIHRvIHRoZSBkb2N1bWVudC5cclxuICogQHBhcmFtIGVsZW1lbnRcclxuICovXHJcblRvb2xzLm9mZnNldCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRyZXR1cm4ge1xyXG5cdCAgICBsZWZ0OiByZWN0LmxlZnQgKyBlbGVtZW50LnNjcm9sbExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQsXHJcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIGVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kIGEgY2hpbGQgYnkgdGFnTmFtZVxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKiBAcGFyYW0gdGFnTmFtZVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcblRvb2xzLmNoaWxkID0gZnVuY3Rpb24oZWxlbWVudCwgdGFnTmFtZSkge1xyXG5cdGZvcihjb25zdCBub2RlIG9mIGVsZW1lbnQuY2hpbGROb2Rlcykge1xyXG5cdCAgICBpZihub2RlLnRhZ05hbWUgPT09IHRhZ05hbWUpIHtcclxuXHQgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7VG9vbHN9IGZyb20gJy4uL0RPTS9Ub29scyc7XHJcblxyXG4vKipcclxuICogVG9hc3Qgbm90aWZpY2F0aW9uIHN5c3RlbVxyXG4gKiBqUXVlcnktZnJlZVxyXG4gKiBAcGFyYW0gbWFpbiBNYWluIG9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBUb2FzdCA9IGZ1bmN0aW9uKG1haW4pIHtcclxuXHQvKiogRGVmYXVsdCB0b2FzdCBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgKi9cclxuXHR0aGlzLmRlZmF1bHREdXJhdGlvbiA9IDIwMDA7XHJcblxyXG5cdC8qKiBJbnRlci10b2FzdCBkZWxheSB0aW1lIGluIG1pbGxpc2Vjb25kcyAqL1xyXG5cdHRoaXMuaW50ZXJUb2FzdERlbGF5ID0gNTAwO1xyXG5cclxuICAgIGxldCBtZXNzYWdlcyA9IFtdOyAgLy8gUGVuZGluZyBtZXNzYWdlc1xyXG4gICAgbGV0IGFjdGl2ZSA9IGZhbHNlOyAvLyBJcyB0aGVyZSBhbiBhY3RpdmUgbWVzc2FnZSBkaXNwbGF5aW5nP1xyXG5cclxuXHRsZXQgZWxlbWVudCA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSB0aGUgdG9hc3QgZGl2XHJcblx0ICogQHBhcmFtIGRpdiBEaXYgdG8gcHV0IHRoZSB0b2FzdCBpbnRvXHJcblx0ICovXHJcbiAgICB0aGlzLmNyZWF0ZSA9IChkaXYpID0+IHtcclxuXHRcdGVsZW1lbnQgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCd0b2FzdCcpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuXHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gJ3Rlc3RpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XHJcbiAgICBcdGlmKG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgIWFjdGl2ZSkge1xyXG5cdFx0ICAgIC8vIFNldCB0aGUgbWVzc2FnZVxyXG5cdFx0ICAgIGxldCBtZXNzYWdlID0gbWVzc2FnZXNbMF07XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzLnNwbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBtZXNzYWdlLm1zZztcclxuXHJcbiAgICAgICAgICAgIC8vIFNob3cgaXRcclxuXHRcdCAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvYXN0LWFjdGl2ZScpO1xyXG5cdFx0ICAgIGFjdGl2ZSA9IHRydWU7XHJcblxyXG5cdFx0ICAgIC8vIERlbGF5IHdoaWxlIGFjdGl2ZVxyXG5cdFx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0ICAgIFx0Ly8gSGlkZSBpdFxyXG5cdFx0XHQgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0b2FzdC1hY3RpdmUnKTtcclxuXHJcblx0XHRcdCAgICAvLyBEZWxheSBiZXR3ZWVuIHRvYXN0c1xyXG5cdFx0XHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdCAgICBcdGFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHQgICAgXHRzaG93KCk7XHJcblx0XHRcdCAgICB9LCB0aGlzLmludGVyVG9hc3REZWxheSlcclxuXHRcdCAgICB9LCBtZXNzYWdlLnRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogRGlzcGxheSBhIHRvYXN0IG1lc3NhZ2VcclxuXHQgKiBAcGFyYW0gbXNnIE1lc3NhZ2UgdG8gZGlzcGxheVxyXG5cdCAqIEBwYXJhbSB0aW1lIFRpbWUgdG8gZGlzcGxheSBpbiBtaWxsaXNlY29uZHMsIG9taXQgZm9yIGRlZmF1bHRcclxuXHQgKi9cclxuXHR0aGlzLm1lc3NhZ2UgPSBmdW5jdGlvbihtc2csIHRpbWUpIHtcclxuICAgICAgICBpZih0aW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGltZSA9IHRoaXMuZGVmYXVsdER1cmF0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWVzc2FnZXMucHVzaCh7bXNnOiBtc2csIHRpbWU6IHRpbWV9KTtcclxuICAgICAgICBzaG93KCk7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERpc3BsYXkgYW55IEpTT04gZXJyb3JzIHdlIGhhdmUgcmVjZWl2ZWQuXHJcblx0ICogQHBhcmFtIGpzb25BcGkgSnNvbkFQSSBvYmplY3RcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBhbnkgZXJyb3JzIGV4aXN0ZWQuXHJcblx0ICovXHJcblx0dGhpcy5qc29uRXJyb3JzID0gZnVuY3Rpb24oanNvbkFwaSkge1xyXG4gICAgICAgIGlmKGpzb25BcGkuZXJyb3JzKCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAganNvbkFwaS5lcnJvcnMoKS5mb3JFYWNoKChlcnJvcik9PntcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSgnU2VydmVyIEVycm9yOiAnICsgZXJyb3IudGl0bGUsIDUwMDApO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVzaXplciBmcm9tICdyZXNpemVyLWNsJztcclxuXHJcbmltcG9ydCB7TWVudX0gZnJvbSAnLi9NZW51JztcclxuaW1wb3J0IHtUb2FzdH0gZnJvbSAnLi9HcmFwaGljcy9Ub2FzdCc7XHJcbmltcG9ydCB7RHJhZ0FuZERyb3B9IGZyb20gJy4vVUkvRHJhZ0FuZERyb3AnO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tICcuL0RPTS9Ub29scyc7XHJcbmltcG9ydCB7UGFuZX0gZnJvbSBcIi4vUGFuZVwiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBY3R1YWwgaW5zdGFuY2Ugb2YgdGhlIFBsYXlncm91bmQgZm9yIGEgc2luZ2xlIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBwbGF5Z3JvdW5kIFRoZSBtYWluIFBsYXlncm91bmQgb2JqZWN0XHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgd2UgYXJlIGxvYWRpbmcgaW50b1xyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBNYWluID0gZnVuY3Rpb24ocGxheWdyb3VuZCwgZWxlbWVudCkge1xyXG4gICAgdGhpcy5wbGF5Z3JvdW5kID0gcGxheWdyb3VuZDtcclxuICAgIHRoaXMuc2l0ZSA9IHBsYXlncm91bmQuc2l0ZTtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBwbGF5Z3JvdW5kLm9wdGlvbnM7XHJcblxyXG4gICAgLy8vIGRpdi5tYWluXHJcbiAgICB0aGlzLmRpdiA9IG51bGw7XHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSBwbGF5Z3JvdW5kLm9wdGlvbnM7XHJcblxyXG4gICAgLy8vIFJlZmVyZW5jZXMgdG8gb3RoZXIgR1VJIGNvbXBvbmVudHNcclxuICAgIGxldCBtZW51PW51bGwsIHRhYnM9bnVsbDtcclxuXHJcbiAgICAvLy8gZGl2Lm92ZXJsYXlcclxuICAgIGxldCBkaXZPdmVybGF5ID0gbnVsbCwgZGl2V29yaz1udWxsO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kJyk7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcblx0ICAgIGlmKG9wdGlvbnMuaGVpZ2h0ICE9PSBudWxsKSB7XHJcblx0XHQgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuXHQgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2gob3B0aW9ucy5kaXNwbGF5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Z1bGwnOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLWZ1bGwnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuXHQgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtd2luZG93Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMuZGlzcGxheSA9PT0gJ3dpbmRvdycpIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQWRkIHJlc2l6ZXIgdG8gdGhlIHdpbmRvdyBpZiBpbiB3aW5kb3cgbW9kZVxyXG4gICAgICAgICAgICAvLyBhbmQgaXQgaGFzIG5vdCBhbHJlYWR5IGJlZW4gYWRkZWRcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgaWYoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVzaXplclwiKSkge1xyXG4gICAgICAgICAgICAgICAgbmV3IFJlc2l6ZXIoZWxlbWVudCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogJzEwcHggc29saWQgIzE4NDUzQidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYWdBbmREcm9wID0gbmV3IERyYWdBbmREcm9wKHRoaXMpO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgYWRkIHRoZSB3aW5kb3cgY29tcG9uZW50c1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYob3B0aW9ucy5kaXNwbGF5ICE9PSAnaW5saW5lJyAmJiBvcHRpb25zLmRpc3BsYXkgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBBbGwgd2luZG93LWJhc2VkIHZlcnNpb25zIG90aGVyIHRoYW4gaW5saW5lIGdldCB0aGVcclxuICAgICAgICAgICAgLy8gZnVsbCB1c2VyIGludGVyZmFjZVxyXG4gICAgICAgICAgICAvL1xyXG5cclxuICAgICAgICAgICAgLy8gPGRpdiBjbGFzcz1cIm1haW5cIj48L2Rpdj5cclxuICAgICAgICAgICAgdGhpcy5kaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdjbC1wZy1tYWluJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmRpdik7XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBBZGQgdGhlIG1lbnVcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgbWVudSA9IG5ldyBNZW51KHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm1lbnUgPSBtZW51O1xyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gV29ya2luZyBhcmVhXHJcbiAgICAgICAgICAgIC8vIDxkaXYgY2xhc3M9XCJ3b3JrXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGRpdldvcmsgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCd3b3JrJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKGRpdldvcmspO1xyXG5cclxuXHJcblx0XHRcdC8vXHJcblx0ICAgICAgICAvLyBBbmQgdGhlIHJvb3QgcGFuZVxyXG5cdCAgICAgICAgLy9cclxuXHQgICAgICAgIHRoaXMucm9vdFBhbmUgPSBuZXcgUGFuZSh0aGlzLCBkaXZXb3JrLCBudWxsLCBudWxsKTtcclxuXHQgICAgICAgIHRoaXMucm9vdFBhbmUubG9hZChvcHRpb25zLnBhbmUpO1xyXG5cclxuXHQgICAgICAgIC8vXHJcblx0ICAgICAgICAvLyBBbmQgdGhlIG92ZXJsYXlcclxuXHQgICAgICAgIC8vIDxkaXYgY2xhc3M9XCJjaXJzaW0tb3ZlcmxheVwiPjwvZGl2PlxyXG5cdCAgICAgICAgLy9cclxuXHQgICAgICAgIGRpdk92ZXJsYXkgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdjbC1wZy1vdmVybGF5Jyk7XHJcblx0ICAgICAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZChkaXZPdmVybGF5KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9hc3QgPSBuZXcgVG9hc3QodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMudG9hc3QuY3JlYXRlKHRoaXMuZGl2KTtcclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEFueSBkYXRhIHRvIGxvYWQ/XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMubG9hZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvYWQgPSBvcHRpb25zLmxvYWQ7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgbG9hZCA9PT0gJ3N0cmluZycgfHwgbG9hZCBpbnN0YW5jZW9mIFN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWQgPSBKU09OLnBhcnNlKGxvYWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCB0YWcgaW4gbG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhYiA9IHRoaXMuZ2V0VGFiKHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGFiICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5zZXQobG9hZFt0YWddKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0VGFiID0gZnVuY3Rpb24odGFnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdFBhbmUuZ2V0VGFiKHRhZyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW5ldmVyIGEgbmV3IHRhYiBpcyBzZWxlY3RlZFxyXG4gICAgICovXHJcbiAgICB0aGlzLm5ld1RhYiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IG9yIGNsZWFyIGludGVyZmFjZSBtb2RhbCBzdGF0ZS5cclxuICAgICAqIEBwYXJhbSBtb2RhbCBUcnVlIHNldHMgaW50ZXJmYWNlIHRvIG1vZGFsIHN0YXRlLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgdGhpcy5tb2RhbCA9IGZ1bmN0aW9uKG1vZGFsKSB7XHJcbiAgICAgICAgaWYobW9kYWwpIHtcclxuICAgICAgICAgICAgZGl2T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXZPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcclxufVxyXG4iLCJpbXBvcnQge1Rvb2xzfSBmcm9tICcuL0RPTS9Ub29scyc7XHJcblxyXG4vLyBpbXBvcnQge0ZpbGVNZW51fSBmcm9tICcuL01lbnVzL0ZpbGVNZW51JztcclxuLy8gaW1wb3J0IHtFZGl0TWVudX0gZnJvbSAnLi9NZW51cy9FZGl0TWVudSc7XHJcbi8vIGltcG9ydCB7VGFic01lbnV9IGZyb20gJy4vTWVudXMvVGFic01lbnUnO1xyXG4vLyBpbXBvcnQge0hlbHBNZW51fSBmcm9tICcuL01lbnVzL0hlbHBNZW51JztcclxuXHJcbi8qKlxyXG4gKiBUaGUgcHJvZ3JhbSBtZW51IGJhclxyXG4gKiBAcGFyYW0gbWFpbiBNYWluIG9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBNZW51ID0gZnVuY3Rpb24obWFpbikge1xyXG5cdGNvbnN0IG9wdGlvbnMgPSBtYWluLm9wdGlvbnM7XHJcblxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBDcmVhdGUgdGhlIG1lbnUgY29tcG9uZW50c1xyXG4gICAgLy9cclxuICAgIC8vIHZhciBmaWxlTWVudSA9IG5ldyBGaWxlTWVudSh0aGlzLCBtYWluKTtcclxuICAgIC8vIHZhciBlZGl0TWVudSA9IG5ldyBFZGl0TWVudSh0aGlzLCBtYWluKTtcclxuICAgIC8vIHZhciB0YWJzTWVudSA9IG5ldyBUYWJzTWVudSh0aGlzLCBtYWluKTtcclxuICAgIC8vIHZhciBoZWxwTWVudSA9IG5ldyBIZWxwTWVudSh0aGlzLCBtYWluKTtcclxuXHJcbiAgICAvLy8gVGhlIG5hdiBlbGVtZW50XHJcbiAgICB0aGlzLm5hdiA9IG51bGw7XHJcbiAgICB0aGlzLnVsID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gPG5hdiBjbGFzcz1cIm1lbnViYXJcIj48dWw+PC91bD48L25hdj5cclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMubmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3ModGhpcy5uYXYsICdjbC1wZy1tZW51YmFyJyk7XHJcbiAgICAgICAgbWFpbi5kaXYuYXBwZW5kQ2hpbGQodGhpcy5uYXYpO1xyXG5cclxuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgdGhpcy5uYXYuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgICAgIHRoaXMudWwgPSB1bDtcclxuXHJcbiAgICAgICAgY29uc3QgbWVudXMgPSBvcHRpb25zLm1lbnVzO1xyXG4gICAgICAgIG1lbnVzLnB1c2goe1xyXG5cdCAgICAgICAgbmFtZTogJ0hlbHAnLFxyXG5cdCAgICAgICAgbWVudXM6IFtcclxuXHRcdCAgICAgICAge25hbWU6ICdBYm91dCcsIGFjdGlvbjoge3RhZzogJ2Fib3V0J319XHJcblx0ICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBtZW51IG9mIG1lbnVzKSB7XHJcbiAgICAgICAgXHRjb25zdCB0b3BMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgXHR1bC5hcHBlbmRDaGlsZCh0b3BMSSk7XHJcblxyXG4gICAgICAgIFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBcdHRvcExJLmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAgIFx0YS5pbm5lclRleHQgPSBtZW51Lm5hbWU7XHJcblxyXG4gICAgICAgIFx0aWYobWVudS5hY3Rpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIFx0XHQvLyBUb3AgbGV2ZWwgb25seSBtZW51XHJcbiAgICAgICAgXHRcdGNvbnN0IGFjdGlvbiA9IG1haW4ucGxheWdyb3VuZC5nZXRBY3Rpb24obWVudS5hY3Rpb24pO1xyXG5cdFx0ICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBbYSwgdG9wTEldKSB7XHJcblx0XHQgICAgICAgIFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0XHRcdCAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHQgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdCAgICAgICAgYWN0aW9uLmRvKG1haW4pO1xyXG5cdFx0XHQgICAgICAgIH0pO1xyXG5cdFx0ICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgaWYobWVudS5tZW51cyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0ICAgICAgICBcdC8vIFB1bGwtZG93biBtZW51XHJcblx0ICAgICAgICBcdGNvbnN0IHN1YlVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHQgICAgICAgIFx0dG9wTEkuYXBwZW5kQ2hpbGQoc3ViVUwpO1xyXG5cclxuXHQgICAgICAgIFx0Zm9yKGNvbnN0IGVsZW1lbnQgb2YgW2EsIHRvcExJXSkge1xyXG5cdFx0XHQgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0XHQgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0ICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdFx0ICAgICAgICBpZihnZXRDb21wdXRlZFN0eWxlKHN1YlVMKS5nZXRQcm9wZXJ0eVZhbHVlKCd2aXNpYmlsaXR5JykgPT09ICdoaWRkZW4nKSB7XHJcblx0XHRcdFx0XHQgICAgICAgIG9wZW4odG9wTEkpO1xyXG5cdFx0XHRcdCAgICAgICAgfSBlbHNlIHtcclxuXHRcdFx0XHRcdCAgICAgICAgLy8gSWYgYWxyZWFkeSBvcGVuLCBjbG9zZSBhbGxcclxuXHRcdFx0XHRcdCAgICAgICAgdGhpcy5jbG9zZUFsbCgpO1xyXG5cdFx0XHRcdCAgICAgICAgfVxyXG5cclxuXHRcdFx0ICAgICAgICB9KTtcclxuXHRcdCAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIFx0Zm9yKGNvbnN0IHN1Yk1lbnUgb2YgbWVudS5tZW51cykge1xyXG5cdFx0XHQgICAgICAgIGNvbnN0IHN1YkxJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHRcdFx0ICAgICAgICBzdWJVTC5hcHBlbmRDaGlsZChzdWJMSSk7XHJcblxyXG5cdFx0XHQgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblx0XHRcdCAgICAgICAgc3ViTEkuYXBwZW5kQ2hpbGQoYSk7XHJcblx0XHRcdCAgICAgICAgYS5pbm5lclRleHQgPSBzdWJNZW51Lm5hbWU7XHJcblxyXG5cdFx0XHQgICAgICAgIGlmKHN1Yk1lbnUuYWN0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHQgICAgICAgIC8vIFRvcCBsZXZlbCBvbmx5IG1lbnVcclxuXHRcdFx0XHQgICAgICAgIGNvbnN0IGFjdGlvbiA9IG1haW4ucGxheWdyb3VuZC5nZXRBY3Rpb24oc3ViTWVudS5hY3Rpb24pO1xyXG5cdFx0XHRcdCAgICAgICAgaWYoYWN0aW9uICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHQgICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIFthLCB0b3BMSV0pIHtcclxuXHRcdFx0XHRcdFx0ICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICBhY3Rpb24uZG8obWFpbik7XHJcblx0XHRcdFx0XHRcdCAgICAgICAgfSk7XHJcblx0XHRcdFx0XHQgICAgICAgIH1cclxuXHRcdFx0XHQgICAgICAgIH1cclxuXHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0ICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBBZGQgdGhlIG1lbnUgY29tcG9uZW50J3MgSFRNTFxyXG4gICAgICAgIC8vXHJcblx0ICAgIC8vIGxldCBodG1sID0gJyc7XHJcblxyXG5cdCAgICAvLyBodG1sICs9IGZpbGVNZW51Lmh0bWwoKTtcclxuICAgICAgICAvLyBodG1sICs9IGVkaXRNZW51Lmh0bWwoKTtcclxuICAgICAgICAvLyBodG1sICs9IHRhYnNNZW51Lmh0bWwoKTtcclxuICAgICAgICAvLyBodG1sICs9IGhlbHBNZW51Lmh0bWwoKTtcclxuXHJcbiAgICAgICAgLy8gdWwuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcbiAgICAgICAgLy9cclxuXHQgICAgLy8gTWVudSBvcHRpb24gZm9yIHRlc3RpbmcgdGhlIFRvYXN0IGVycm9yIHJlcG9ydGluZyBtZWNoYW5pc21cclxuXHQgICAgLy9cclxuXHJcblx0ICAgIC8vIGh0bWwgKz0gYDxsaT48YSBjbGFzcz1cInRvYXN0LXRlc3RcIj5Ub2FzdCE8L2E+PC9saT5gO1xyXG5cdCAgICAvLyB1bC5pbm5lckhUTUwgPSBodG1sO1xyXG5cdFx0Ly9cclxuXHQgICAgLy8gdGhpcy50b2FzdHMgPSAwO1xyXG4gICAgICAgIC8vIHRoaXMuY2xpY2soJy50b2FzdC10ZXN0JywgKGV2ZW50KT0+IHtcclxuICAgICAgICAvLyBcdHRoaXMudG9hc3RzKys7XHJcbiAgICAgICAgLy8gXHRtYWluLnRvYXN0Lm1lc3NhZ2UoJ1RvYXN0IG1lc3NhZ2UgJyArIHRoaXMudG9hc3RzKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBJbnN0YWxsIGNsaWNrIGhhbmRsZXJzIGZvciBhbGwgdG9wLWxldmVsIG1lbnVzXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBmb3IoY29uc3Qgbm9kZSBvZiB1bC5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgLy8gICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gJ0xJJykge1xyXG4gICAgICAgIC8vICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIEZpbmQgdGhlIDx1bD4gaW4gdGhpcyBtZW51XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IHVsU3ViID0gVG9vbHMuY2hpbGQobm9kZSwgJ1VMJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYodWxTdWIgIT09IG51bGwpIHtcclxuXHQgICAgLy8gICAgICAgICAgICAgICAgIGlmKGdldENvbXB1dGVkU3R5bGUodWxTdWIpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ2hpZGRlbicpIHtcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgb3Blbihub2RlKTtcclxuXHQgICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gSWYgYWxyZWFkeSBvcGVuLCBjbG9zZSBhbGxcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUFsbCgpO1xyXG5cdCAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBBY3RpdmF0ZSBhbGwgb2YgdGhlIG1lbnVzXHJcbiAgICAgICAgLy8gZmlsZU1lbnUuYWN0aXZhdGUoKTtcclxuICAgICAgICAvLyBlZGl0TWVudS5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIC8vIHRhYnNNZW51LmFjdGl2YXRlKCk7XHJcbiAgICAgICAgLy8gaGVscE1lbnUuYWN0aXZhdGUoKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBMaXN0ZW4gdG8ga2V5IGRvd24gZXZlbnRzIHNvIHdlIGNhbiBjbG9zZSB0aGUgbWVudVxyXG4gICAgICogaWYgd2UgY2xpY2sgb3V0c2lkZSBvZiB0aGUgbWVudSB3aGlsZSBpdCBpcyBvcGVuLlxyXG5cdCAqIEBwYXJhbSBldmVudFxyXG5cdCAqL1xyXG5cdGNvbnN0IGNsb3NlTGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBTZWUgaWYgd2UgY2xpY2tlZCBvbiBzb21lIGNoaWxkIG9mIG5hdi4uLlxyXG4gICAgICAgIGxldCBub2RlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgZm9yKCA7IG5vZGUgIT09IG51bGw7IG5vZGUgPSBub2RlLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgaWYobm9kZSA9PT0gdGhpcy5uYXYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblx0ICAgIHRoaXMuY2xvc2VBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPcGVuIGEgbWVudVxyXG4gICAgY29uc3Qgb3BlbiA9IChsaSkgPT4ge1xyXG4gICAgICAgIC8vIEhpZGUgYW55IG90aGVyIG1lbnVzXHJcbiAgICAgICAgZm9yKGNvbnN0IG5vZGUgb2YgdGhpcy51bC5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgICAgIGlmKG5vZGUudGFnTmFtZSA9PT0gJ0xJJykge1xyXG5cdCAgICAgICAgICAgIGNvbnN0IHVsID0gVG9vbHMuY2hpbGQobm9kZSwgJ1VMJyk7XHJcbiAgICAgICAgICAgICAgICBpZih1bCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgLy8gVG9vbHMucmVtb3ZlQ2xhc3ModWwsICdjbC1wZy1tZW51LW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblx0ICAgIC8vIEFuZCBvcGVuIHRoaXMgbWVudVxyXG5cdCAgICBjb25zdCB1bCA9IFRvb2xzLmNoaWxkKGxpLCAnVUwnKTtcclxuXHQgICAgaWYodWwgIT09IG51bGwpIHtcclxuXHQgICAgXHR1bC5jbGFzc0xpc3QuYWRkKCdjbC1wZy1tZW51LW9wZW4nKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjbG9zZUxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2xvc2UgYWxsIG1lbnVzICovXHJcbiAgICB0aGlzLmNsb3NlQWxsID0gKCkgPT4ge1xyXG5cdCAgICBmb3IoY29uc3Qgbm9kZSBvZiB0aGlzLnVsLmNoaWxkTm9kZXMpIHtcclxuXHRcdCAgICBpZihub2RlLnRhZ05hbWUgPT09ICdMSScpIHtcclxuXHRcdFx0ICAgIGNvbnN0IHVsID0gVG9vbHMuY2hpbGQobm9kZSwgJ1VMJyk7XHJcblx0XHRcdCAgICBpZih1bCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdCAgICBUb29scy5yZW1vdmVDbGFzcyh1bCwgJ2NsLXBnLW1lbnUtb3BlbicpO1xyXG5cdFx0XHQgICAgfVxyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIEVuYWJsZSBvciBkaXNhYmxlIGEgbWVudSBvcHRpb24gYnkgc2VsZWN0b3JcclxuXHQgKiBAcGFyYW0gc2VsIFNlbGVjdG9yIGZvciB0aGUgbWVudSBvcHRpb24gKGxpa2UgJy50YWJzLWFkZCcpXHJcblx0ICogQHBhcmFtIGVuYWJsZSBUcnVlIHRvIGVuYWJsZVxyXG5cdCAqL1xyXG5cdHRoaXMuZW5hYmxlID0gKHNlbCwgZW5hYmxlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMudWwucXVlcnlTZWxlY3RvcihzZWwpO1xyXG4gICAgICAgIGlmKGVsZW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZW5hYmxlKSB7XHJcbiAgICAgICAgICAgIFRvb2xzLnJlbW92ZUNsYXNzKGVsZW1lbnQucGFyZW50Tm9kZSwgXCJtZW51LWRpc2FibGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLmFkZENsYXNzKGVsZW1lbnQucGFyZW50Tm9kZSwgXCJtZW51LWRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cdC8qKlxyXG4gICAgICogRmluZCBhIG1lbnUgb3B0aW9uIGJ5IHNlbGVjdG9yXHJcblx0ICogQHBhcmFtIHNlbFxyXG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fVxyXG5cdCAqL1xyXG5cdHRoaXMuZmluZCA9IChzZWwpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy51bC5xdWVyeVNlbGVjdG9yKHNlbCk7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogSW5zdGFsbCBhIG1lbnUgb3B0aW9uIGNsaWNrIGhhbmRlclxyXG5cdCAqIEBwYXJhbSBzZWwgU2VsZWN0b3IgZm9yIHRoZSBtZW51IG9wdGlvblxyXG5cdCAqIEBwYXJhbSBjbG9zdXJlIFRoZSBjbG9zdXJlIHRvIGNhbGwgKHBhc3NlcyAnZXZlbnQnKVxyXG5cdCAqL1xyXG5cdHRoaXMuY2xpY2sgPSAoc2VsLCBjbG9zdXJlKSA9PiB7XHJcblx0ICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmZpbmQoc2VsKTtcclxuXHQgICAgaWYoZWxlbWVudCAhPT0gbnVsbCkge1xyXG5cdCAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdCAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0ICAgICAgICAgICAgdGhpcy5jbG9zZUFsbCgpO1xyXG5cdCAgICAgICAgICAgIGNsb3N1cmUoZXZlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG59O1xyXG4iLCIvKipcclxuICogUGxheWdyb3VuZCBvcHRpb25zLlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBVc2VyIHByb3ZpZGVkIG9wdGlvbnMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCB2YWx1ZXMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcclxuXHJcbiAgICAvLy8gRGlzcGxheSBvcHRpb25zXHJcbiAgICAvLy8gd2luZG93IC0gRGlzcGxheXMgYXMgYSBzdGFuZGFyZCBkaXYgKGRlZmF1bHQpXHJcbiAgICB0aGlzLmRpc3BsYXkgPSAnd2luZG93JztcclxuXHJcbiAgICAvLy8gT3B0aW9uYWwgaGVpZ2h0IHNldHRpbmdcclxuICAgIHRoaXMuaGVpZ2h0ID0gbnVsbDtcclxuXHJcbiAgICAvLy8gVGhlIHBsYXlncm91bmQgcm9vdCBwYW5lXHJcbiAgICB0aGlzLnBhbmUgPSB7fTtcclxuXHJcbiAgICAvLy8gVGhlIHRvcC1sZXZlbCBtZW51IG9wdGlvbnNcclxuICAgIHRoaXMubWVudXMgPSBbe25hbWU6ICdBYm91dCd9XTtcclxuXHJcbiAgICAvLy8gQ29udGVudCB0byBpbml0aWFsbHkgbG9hZCBpbnRvIHRoZSB0YWJzXHJcbiAgICB0aGlzLmxvYWQgPSBudWxsO1xyXG5cclxuXHJcbiAgICBmb3IodmFyIHByb3BlcnR5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICBpZihvcHRpb25zLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uIFwiICsgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXNbcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBBUEkgb3BlcmF0aW9ucyBmb3IgYSBnaXZlbiBmaWxlIG1vZGUuXHJcbiAgICAgKiBAcGFyYW0gbW9kZSAnc2F2ZScsICdvcGVuJ1xyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ2V0QVBJID0gZnVuY3Rpb24obW9kZSkge1xyXG4gICAgICAgIGlmKHRoaXMuYXBpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5hcGkgPT09IE9iamVjdCh0aGlzLmFwaSkpIHtcclxuICAgICAgICAgICAgbGV0IG9iajtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYXBpW21vZGVdICE9PSB1bmRlZmluZWQpIHtcclxuIFxyXG4gICAgICAgICAgICAgICAgLy8gTW9kZSBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxyXG4gICAgICAgICAgICAgICAgdmFyIG1vZGVPYmogPSB0aGlzLmFwaVttb2RlXTtcclxuICAgICAgICAgICAgICAgIGlmKG1vZGVPYmoudXJsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNb2RlIGlzIG5vdCBzdXBwb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZW5kIGNvbnRlbnQgdHlwZVxyXG4gICAgICAgICAgICAgICAgb2JqID0ge3VybDogbW9kZU9iai51cmx9O1xyXG4gICAgICAgICAgICAgICAgaWYobW9kZU9iai5jb250ZW50VHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNvbnRlbnRUeXBlID0gbW9kZU9iai5jb250ZW50VHlwZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmFwaS5jb250ZW50VHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNvbnRlbnRUeXBlID0gdGhpcy5hcGkuY29udGVudFR5cGU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5jb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKG1vZGVPYmouZXh0cmEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IG1vZGVPYmouZXh0cmE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5hcGkuZXh0cmEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5leHRyYSA9IHRoaXMuYXBpLmV4dHJhO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihtb2RlT2JqLm5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5uYW1lID0gbW9kZU9iai5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuYXBpLm5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5uYW1lID0gdGhpcy5hcGkubmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXBpLnVybCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb2JqID0ge3VybDogdGhpcy5hcGkudXJsfTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXBpLmV4dHJhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouZXh0cmEgPSB0aGlzLmFwaS5leHRyYTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmV4dHJhID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcGkubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLm5hbWUgPSB0aGlzLmFwaS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7dXJsOiB0aGlzLmFwaX07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7VGFic30gZnJvbSAnLi9UYWJzJztcclxuXHJcbi8qKlxyXG4gKiBBIFBhbmUgaXMgYW4gYXJlYSBvZiB0aGUgSURFIHNjcmVlbiB0aGF0IGVpdGhlciBjb250YWlucyBhIHRhYiBzZXQgb3IgdHdvIGNoaWxkIHBhbmVzLlxyXG4gKiBAcGFyYW0gbWFpbiBNYWluIG9iamVjdFxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRoYXQgaXMgdGhlIGhvc3QgZm9yIHRoZSBwYW5lXHJcbiAqIEBwYXJhbSBwYXJlbnQgUGFuZSBwYXJlbnQgb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBhbmUgPSBmdW5jdGlvbihtYWluLCBlbGVtZW50LCBwYXJlbnQpIHtcclxuXHR0aGlzLm1pblNwbGl0ID0gMTA7XHJcblx0dGhpcy5tYXhTcGxpdCA9IDkwO1xyXG5cclxuXHRsZXQgZGl2ID0gbnVsbCwgY2hpbGQxID0gbnVsbCwgY2hpbGQyID0gbnVsbDtcclxuXHRsZXQgaG9yaXpvbnRhbFNwbGl0ID0gbnVsbDtcclxuXHRsZXQgdGFicyA9IG51bGw7XHJcblxyXG5cdGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcblx0XHQvL1xyXG5cdFx0Ly8gQ3JlYXRlIGFuZCBhZGQgdGhlIGRpdlxyXG5cdFx0Ly9cclxuXHJcblx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuZGl2ID0gZGl2O1xyXG5cclxuXHRcdGlmKHBhcmVudCA9PT0gbnVsbCkge1xyXG5cdFx0XHRkaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1yb290Jyk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuXHRcdC8vIGlmKGRvbm9yVGFicyAhPT0gbnVsbCkge1xyXG5cdFx0Ly8gXHR0YWJzID0gZG9ub3JUYWJzO1xyXG5cdFx0Ly8gXHR0YWJzLm5ld1BhcmVudCh0aGlzKTtcclxuXHRcdC8vIH0gZWxzZSB7XHJcblx0XHQvLyBcdHRhYnMgPSBuZXcgVGFicyhtYWluLCBkaXYpO1xyXG5cdFx0Ly8gfVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTG9hZCB0aGUgcGFuZSBmcm9tIHRoZSBkYXRhXHJcblx0ICogQHBhcmFtIGRhdGEgRGF0YSBmcm9tIG9wdGlvbnMgZm9yIHRoaXMgcGFuZVxyXG5cdCAqL1xyXG5cdHRoaXMubG9hZCA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGlmKGRhdGEuY2hpbGQxICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0Ly8gVGhpcyBpcyBhIHNwbGl0IHBhbmVcclxuXHRcdFx0dGhpcy5zcGxpdChkYXRhLmhvcml6LCBkYXRhLmNoaWxkMSwgZGF0YS5jaGlsZDIpO1xyXG5cdFx0XHR0aGlzLnBlcmNlbnRhZ2UoZGF0YS5wZXJjZW50YWdlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRhYnMgPSBuZXcgVGFicyhtYWluLCBkaXYpO1xyXG5cdFx0XHR0YWJzLmxvYWQoZGF0YS50YWJzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRoaXMuc3BsaXQgPSBmdW5jdGlvbihob3Jpem9udGFsLCBjaGlsZDFEYXRhLCBjaGlsZDJEYXRhKSB7XHJcblx0XHRob3Jpem9udGFsU3BsaXQgPSBob3Jpem9udGFsO1xyXG5cclxuXHRcdGNoaWxkMSA9IG5ldyBQYW5lKG1haW4sIGRpdiwgdGhpcywgdGFicyk7XHJcblx0XHRjaGlsZDIgPSBuZXcgUGFuZShtYWluLCBkaXYsIHRoaXMsIG51bGwpO1xyXG5cclxuXHRcdHRhYnMgPSBudWxsO1xyXG5cclxuXHRcdGlmKGhvcml6b250YWwpIHtcclxuXHRcdFx0Y2hpbGQxLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLWxlZnQnKTtcclxuXHRcdFx0Y2hpbGQyLmRpdi5jbGFzc0xpc3QuYWRkKCdjbC1wbGF5Z3JvdW5kLXJpZ2h0Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkaXYuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xyXG5cdFx0XHRjaGlsZDEuZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBsYXlncm91bmQtdG9wJyk7XHJcblx0XHRcdGNoaWxkMi5kaXYuY2xhc3NMaXN0LmFkZCgnY2wtcGxheWdyb3VuZC1ib3R0b20nKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGJhci5jbGFzc0xpc3QuYWRkKCdjbC1iYXInKTtcclxuXHRcdGNoaWxkMS5kaXYuYXBwZW5kQ2hpbGQoYmFyKTtcclxuXHJcblx0XHRiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHN0YXJ0RHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlKTtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRiYXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coZXZlbnQpO1xyXG5cclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdHN0YXJ0RHJhZ2dpbmcodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHJcblxyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZSk7XHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEVuZCk7XHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaENhbmNlbCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmNoaWxkMSA9IGNoaWxkMTtcclxuXHRcdHRoaXMuY2hpbGQyID0gY2hpbGQyO1xyXG5cclxuXHRcdHRoaXMucGVyY2VudGFnZSg1MCk7XHJcblxyXG5cdFx0aWYoY2hpbGQxRGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGNoaWxkMS5sb2FkKGNoaWxkMURhdGEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGNoaWxkMkRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRjaGlsZDIubG9hZChjaGlsZDJEYXRhKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge2NoaWxkMTogY2hpbGQxLCBjaGlsZDI6IGNoaWxkMn07XHJcblx0fVxyXG5cclxuXHRsZXQgc3RhcnRYID0gbnVsbCwgc3RhcnRZID0gbnVsbDtcclxuXHJcblx0Y29uc3Qgc3RhcnREcmFnZ2luZyA9ICh4LCB5KSA9PiB7XHJcblx0XHRzdGFydFggPSB4O1xyXG5cdFx0c3RhcnRZID0geTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGVuZERyYWdnaW5nID0gKCkgPT4ge1xyXG5cdFx0c3RhcnRYID0gbnVsbDtcclxuXHRcdHN0YXJ0WSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHJcblx0Y29uc3QgZHJhZ2dpbmcgPSAoeCwgeSkgPT4ge1xyXG5cdFx0Y29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cclxuXHRcdGlmKGhvcml6b250YWxTcGxpdCkge1xyXG5cdFx0XHRjb25zdCBtYWluWCA9IHJlY3QubGVmdCArIGVsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldDtcclxuXHRcdFx0Y29uc3Qgd2lkID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdDtcclxuXHRcdFx0aWYod2lkIDw9IDApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHBlciA9ICh4IC0gbWFpblgpIC8gd2lkICogMTAwO1xyXG5cdFx0XHR0aGlzLnBlcmNlbnRhZ2UocGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IG1haW5ZID0gcmVjdC50b3AgICsgZWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRjb25zdCBoaXQgPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xyXG5cdFx0XHRpZihoaXQgPD0gMCkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgcGVyID0gKHkgLSBtYWluWSkgLyBoaXQgKiAxMDA7XHJcblx0XHRcdHRoaXMucGVyY2VudGFnZShwZXIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgbW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGlmKGV2ZW50LndoaWNoID09PSAwKSB7XHJcblx0XHRcdG1vdXNlVXAoZXZlbnQpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0ZHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdXNlVXAgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZSk7XHJcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwKTtcclxuXHRcdGVuZERyYWdnaW5nKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB0b3VjaE1vdmUgID0gKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRkcmFnZ2luZyh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdG91Y2hFbmQgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdGRyYWdnaW5nKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblxyXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmUpO1xyXG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kKTtcclxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaENhbmNlbCk7XHJcblxyXG5cdFx0ZW5kRHJhZ2dpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHRvdWNoQ2FuY2VsID0gKGV2ZW50KSA9PiB7XHJcblx0XHR0b3VjaEVuZChldmVudCk7XHJcblx0fVxyXG5cclxuXHR0aGlzLnBlcmNlbnRhZ2UgPSBmdW5jdGlvbihwZXIpIHtcclxuXHRcdGlmKHBlciA8IHRoaXMubWluU3BsaXQpIHtcclxuXHRcdFx0cGVyID0gdGhpcy5taW5TcGxpdDtcclxuXHRcdH0gZWxzZSBpZihwZXIgPiB0aGlzLm1heFNwbGl0KSB7XHJcblx0XHRcdHBlciA9IHRoaXMubWF4U3BsaXQ7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoaG9yaXpvbnRhbFNwbGl0KSB7XHJcblx0XHRcdGNoaWxkMS5kaXYuc3R5bGUud2lkdGggPSBwZXIgKyAnJSc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjaGlsZDEuZGl2LnN0eWxlLmhlaWdodCA9IHBlciArICclJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRoaXMuZ2V0VGFiID0gZnVuY3Rpb24odGFnKSB7XHJcblx0XHRmb3IoY29uc3QgY29sbGVjdGlvbiBvZiBbdGFicywgY2hpbGQxLCBjaGlsZDJdKSB7XHJcblx0XHRcdGlmKGNvbGxlY3Rpb24gIT09IG51bGwpIHtcclxuXHRcdFx0XHRsZXQgdGFiID0gY29sbGVjdGlvbi5nZXRUYWIodGFnKTtcclxuXHRcdFx0XHRpZih0YWIgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0YWI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG59IiwiaW1wb3J0IHtNYWlufSBmcm9tICcuL01haW4nO1xyXG5pbXBvcnQge09wdGlvbnN9IGZyb20gJy4vT3B0aW9ucyc7XHJcbmltcG9ydCB7UmVhZHl9IGZyb20gJy4vVXRpbGl0eS9SZWFkeSc7XHJcbmltcG9ydCB7QWN0aW9ufSBmcm9tICcuL0FjdGlvbnMvQWN0aW9uJztcclxuaW1wb3J0IHtBbGxBY3Rpb25zfSBmcm9tICcuL0FjdGlvbnMvQWxsQWN0aW9ucyc7XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBQbGF5Z3JvdW5kXHJcbiAqXHJcbiAqIFRoaXMgY3JlYXRlcyBhIHNpbmdsZSBJbnN0YW5jZSB0aGF0IG1hbmFnZXMgdGhlXHJcbiAqIGNvbXBvbmVudHMgYW5kIHN0YXJ0cyBhY3R1YWwgUGxheWdyb3VuZCB3aW5kb3dzLlxyXG4gKlxyXG4gKiBDb25zdHJ1Y3QgYW5kIHN0YXJ0IHJ1bm5pbmcgbGlrZSB0aGlzOlxyXG4gKlxyXG4gKiBHaXZlbiBhbiBIVE1MIGRpdjpcclxuICogICAgIDxkaXYgaWQ9XCJwbGF5Z3JvdW5kXCI+PC9kaXY+XHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgc2NyaXB0IHN0YXJ0cyBQbGF5Z3JvdW5kIGluIHRoYXQgZGl2OlxyXG4gKlxyXG4gKiAgICAgdmFyIHBsYXlncm91bmQgPSBuZXcgUGxheWdyb3VuZCgnI3BsYXlncm91bmQnKTtcclxuICogICAgIHBsYXlncm91bmQuc3RhcnQoKTtcclxuICpcclxuICogQHBhcmFtIHNpdGUgU2l0ZSBvYmplY3RcclxuICogQHBhcmFtIHNlbCBTZWxlY3RvciBvciBlbGVtZW50IHRvIGNyZWF0ZSBQbGF5Z3JvdW5kIGluIChjYW4gYmUgbWFueSlcclxuICogQHBhcmFtIG9wdGlvbnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgUGxheWdyb3VuZCBvcHRpb25zLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBQbGF5Z3JvdW5kID0gZnVuY3Rpb24oc2l0ZSwgc2VsLCBvcHRpb25zKSB7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIE1hc3RlciBzZXQgb2YgdGhlIHZlcnNpb25cclxuICAgIC8vXHJcbiAgICBsZXQgUEFDS0FHRSA9IHJlcXVpcmUoJy4uLy4uL3BhY2thZ2UuanNvbicpO1xyXG4gICAgdGhpcy52ZXJzaW9uID0gUEFDS0FHRS52ZXJzaW9uO1xyXG5cclxuICAgIHRoaXMuc2l0ZSA9IHNpdGU7XHJcblxyXG4gICAgLy8gUmVjb3JkIHRoZSBzZWxlY3RvclxyXG4gICAgdGhpcy5zZWwgPSBzZWw7XHJcblxyXG4gICAgLy8gVGhlIE9wdGlvbnMgb2JqZWN0IHRoYXQgbWFuYWdlcyB1c2VyIG9wdGlvbnNcclxuICAgIHRoaXMub3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuICAgIC8vIEEgY29sbGVjdGlvbiBvZiBNYWluIG9iamVjdHMuXHJcbiAgICB2YXIgbWFpbnMgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHRoZSBQbGF5Z3JvdW5kIHJ1bm5pbmcsIGNyZWF0aW5nIHRoZSB1c2VyIGludGVyZmFjZS5cclxuICAgICAqIFRoaXMgZG9lcyB3YWl0IGZvciBkb2N1bWVudCByZWFkeSBiZWZvcmUgY2FsbGluZ1xyXG4gICAgICogdGhpcy5zdGFydE5vdygpIHVubGVzcyB3ZSBhcmUgcnVubmluZyBpbiBuby13aW5kb3dcclxuICAgICAqIG1vZGUuIEluIHRoYXQgY2FzZSBpdCByZXR1cm5zIGEgc3RhcnRlZCBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5zdGFydCA9ICgpID0+IHtcclxuICAgICAgICBpZihzZWwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnROb3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlYWR5LmdvKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydE5vdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgdGhlIFBsYXlncm91bmQgcnVubmluZyBub3cuIERvZXMgbm90IHdhaXQgZm9yIGRvY3VtZW50IHJlYWR5LlxyXG4gICAgICovXHJcbiAgICB0aGlzLnN0YXJ0Tm93ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHNlbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgbWFpbiA9IG5ldyBNYWluKHRoaXMsIHNlbCk7XHJcbiAgICAgICAgICAgIG1haW5zLnB1c2gobWFpbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbCk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluID0gbmV3IE1haW4odGhpcywgZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBtYWlucy5wdXNoKG1haW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihtYWlucy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1haW5zWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBhIGNvbnN0cnVjdGVkIEFjdGlvbiBvYmplY3QgZnJvbSB0aGUgYXZhaWxhYmxlIHBsYXlncm91bmQgYWN0aW9ucy5cclxuXHQgKiBAcGFyYW0gYWN0aW9uIFRoZSBhY3Rpb24gZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuXHJcblx0ICogQHJldHVybnMgQWN0aW9uIG9iamVjdFxyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0QWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uKSB7XHJcbiAgICBcdGlmKFBsYXlncm91bmQuYWN0aW9uc1thY3Rpb24udGFnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBcdFx0cmV0dXJuIG5ldyAoUGxheWdyb3VuZC5hY3Rpb25zW2FjdGlvbi50YWddKShzaXRlLCBhY3Rpb24pO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBjb25zb2xlLmxvZygnUGxheWdyb3VuZCBhY3Rpb24gJyArIGFjdGlvbi50YWcgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XHJcblx0ICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5QbGF5Z3JvdW5kLkFjdGlvbiA9IEFjdGlvbjtcclxuXHJcblBsYXlncm91bmQuYWN0aW9ucyA9IHt9O1xyXG5cclxuUGxheWdyb3VuZC5hZGRBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb24pIHtcclxuXHR0aGlzLmFjdGlvbnNbYWN0aW9uLnRhZ10gPSBhY3Rpb247XHJcbn1cclxuXHJcbkFsbEFjdGlvbnMuYWRkQWxsKFBsYXlncm91bmQpOyIsImltcG9ydCB7VG9vbHN9IGZyb20gJy4vRE9NL1Rvb2xzJztcclxuaW1wb3J0IHtPdXRwdXRUYWJ9IGZyb20gJy4vVGFicy9PdXRwdXRUYWInO1xyXG5pbXBvcnQge0VkaXRvclRhYn0gZnJvbSAnLi9UYWJzL0VkaXRvclRhYic7XHJcblxyXG5pbXBvcnQgbWVudWJhcnMgZnJvbSAnLi4vLi4vaW1nL21lbnViYXJzLnBuZyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIE1hbmFnZXMgdGhlIHRhYnMgaW4gdGhlIG1vZGVsXHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBwYXJhbSBlbGVtZW50IFBhcmVudCBlbGVtZW50XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRhYnMgPSBmdW5jdGlvbihtYWluLCBlbGVtZW50KSB7XHJcbiAgICAvLy8gVGhlIGN1cnJlbnRseSBhY3RpdmUgdmlldy90YWJcclxuICAgIHRoaXMuYWN0aXZlID0gLTE7XHJcblxyXG4gICAgLy8vIFRoZSBNYWluIG9iamVjdFxyXG4gICAgdGhpcy5tYWluID0gbWFpbjtcclxuXHJcbiAgICAvLy8gVGhlIFNpdGUgb2JqZWN0XHJcbiAgICB0aGlzLnNpdGUgPSBtYWluLnNpdGU7XHJcblxyXG4gICAgLy8gVGhlIGNvbGxlY3Rpb24gb2YgdGFic1xyXG4gICAgdmFyIHRhYnMgPSBbXTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gVGhlIHN0cnVjdHVyZTogPGRpdiBjbGFzcz1cImNsLXRhYnNcIj48dWw+PC91bD48ZGl2IGNsYXNzPVwiY2wtdmlld3NcIj48L2Rpdj48L2Rpdj5cclxuICAgIC8vIGRpdi50YWJzIC0gRW5jbG9zdXJlIGZvciBhbGwgdGFicyBjb250ZW50XHJcbiAgICAvLyB1bCAtIFRoZSB0YWJzIHdlIHNlbGVjdCBmcm9tXHJcbiAgICAvLyB2aWV3c0RpdiAtIFRoZSB2aWV3cyB3aXRoIHRoZSB0YWIgY29udGVudHNcclxuICAgIC8vXHJcblxyXG4gICAgbGV0IHRhYnNEaXYgPSBudWxsLCB1bCA9IG51bGwsIHZpZXdzRGl2ID0gbnVsbDtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBDcmVhdGUgdGhlIHRhYnMgc3lzdGVtXHJcblx0ICogQHBhcmFtIGRpdiBUaGUgZGl2IHdlIHB1dCB0aGUgdGFicyBpbnRvXHJcblx0ICovXHJcblx0dGhpcy5jcmVhdGUgPSBmdW5jdGlvbihkaXYpIHtcclxuICAgICAgICAvLyBDcmVhdGU6IDxkaXYgY2xhc3M9XCJjbC10YWJzXCI+PHVsPjwvdWw+PGRpdiBjbGFzcz1cImNsLXZpZXdzXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgdGFic0RpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLXBnLXRhYnMnKTtcclxuICAgICAgICB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgdGFic0Rpdi5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG4gICAgICAgIHZpZXdzRGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtcGctdmlld3MnKTtcclxuICAgICAgICB0YWJzRGl2LmFwcGVuZENoaWxkKHZpZXdzRGl2KTtcclxuXHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRhYnNEaXYpO1xyXG5cclxuICAgICAgICAvLyBDbGVhciB0aGUgdGFicyBjb2xsZWN0aW9uXHJcbiAgICAgICAgdGFicyA9IFtdO1xyXG5cclxuXHQvL1x0dGhpcy5hZGQoJ3Byb2dyYW0nKTtcclxuLy9cdFx0dGhpcy5hZGQoJ291dHB1dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubG9hZCA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGZvcihjb25zdCB0YWJEYXRhIG9mIGRhdGEpIHtcclxuXHRcdFx0dGhpcy5hZGQodGFiRGF0YSk7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5uZXdQYXJlbnQgPSBmdW5jdGlvbihwYW5lKSB7XHJcblx0XHRwYW5lLmRpdi5hcHBlbmRDaGlsZCh0YWJzRGl2KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGxldCB0YWIgPSBudWxsO1xyXG5cclxuXHQgICAgc3dpdGNoKGRhdGEudHlwZSkge1xyXG5cdFx0ICAgIGNhc2UgJ2VkaXRvcic6XHJcblx0XHRcdCAgICB0YWIgPSBuZXcgRWRpdG9yVGFiKHRoaXMsIGRhdGEpO1xyXG5cdFx0ICAgIFx0YnJlYWs7XHJcblxyXG5cdFx0ICAgIGNhc2UgJ291dHB1dCc6XHJcblx0XHQgICAgXHR0YWIgPSBuZXcgT3V0cHV0VGFiKHRoaXMsIGRhdGEpO1xyXG5cdFx0ICAgIFx0YnJlYWs7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmKHRhYiAhPT0gbnVsbCkge1xyXG5cdFx0ICAgIHVsLmFwcGVuZENoaWxkKHRhYi5saSk7XHJcblx0XHQgICAgdmlld3NEaXYuYXBwZW5kQ2hpbGQodGFiLnZpZXcpO1xyXG5cdFx0ICAgIHRhYnMucHVzaCh7dGFiOiB0YWIsIGxpOiB0YWIubGksIHZpZXc6IHRhYi52aWV3fSk7XHJcblxyXG5cdFx0ICAgIHRhYi5zZWxlY3QoKTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYSB0YWIgYnkgdGFnLlxyXG5cdCAqIEBwYXJhbSB0YWcgVGFiIHRhZ1xyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0VGFiID0gZnVuY3Rpb24odGFnKSB7XHJcblx0ICAgIGZvcihjb25zdCB0YWIgb2YgdGFicykge1xyXG5cdFx0ICAgIGlmKHRhYi50YWIudGFnID09PSB0YWcpIHtcclxuXHRcdFx0ICAgIHJldHVybiB0YWIudGFiO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51bnNlbGVjdEFsbCA9IGZ1bmN0aW9uKCkge1xyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBDbGVhciBhbGwgc2VsZWN0aW9uc1xyXG5cdCAgICAvL1xyXG5cdCAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xyXG5cdCAgICBcdHRhYi5saS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG5cdCAgICBcdHRhYi52aWV3LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcblx0ICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IC0xO1xyXG4gICAgICAgIHRhYnNEaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWJzRGl2KTtcclxuICAgICAgICB0YWJzRGl2ID0gbnVsbDtcclxuICAgICAgICB0YWJzID0gW107XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY3JlYXRlKGVsZW1lbnQpO1xyXG59O1xyXG4iLCJpbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVkaXRvclRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcclxuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcclxuXHJcblx0Y29uc3Qgc2l0ZSA9IHRhYnMuc2l0ZTtcclxuXHJcblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2VkaXRvcicpO1xyXG5cdHRoaXMudmlldyA9IHZpZXc7XHJcblxyXG5cdGxldCBpbm5lclZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmFwcGVuZENoaWxkKGlubmVyVmlldyk7XHJcblxyXG5cdGxldCBudW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0bnVtcy5jbGFzc0xpc3QuYWRkKCdjbC1wZy1udW1zJyk7XHJcblx0aW5uZXJWaWV3LmFwcGVuZENoaWxkKG51bXMpO1xyXG5cclxuXHRsZXQgZWRpdG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0ZWRpdG9yRGl2LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLWVkaXRvcicpO1xyXG5cdGlubmVyVmlldy5hcHBlbmRDaGlsZChlZGl0b3JEaXYpO1xyXG5cclxuXHRjb25zdCBlZGl0b3IgPSBuZXcgc2l0ZS5FZGl0b3IoZWRpdG9yRGl2LCB7XHJcblx0XHRyZXNpemU6ICdub25lJyxcclxuXHRcdHRhYjogdHJ1ZSxcclxuXHRcdGF1dG9JbmRlbnQ6IHRydWUsXHJcblx0XHRzdHlsZXM6IG51bGxcclxuXHR9KTtcclxuXHJcblx0Y29uc3Qgc2Nyb2xsYWJsZSA9IGVkaXRvci50ZXh0YXJlYTtcclxuXHRzY3JvbGxhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4ge1xyXG5cdFx0Ly8gZWRpdG9yRGl2LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICcwcHggJyArICgtcHJlLnNjcm9sbFRvcCkgKyAncHgnO1xyXG5cdFx0bnVtcy5zY3JvbGxUb3AgPSBzY3JvbGxhYmxlLnNjcm9sbFRvcDtcclxuXHR9KTtcclxuXHJcblx0dGhpcy5zZXQgPSBmdW5jdGlvbih0ZXh0KSB7XHJcblx0XHQvLyBEYXRhIGZyb20gdGhlIGZpbGUgc3lzdGVtIG1heSBjb25zaXN0IG9mIGVpdGhlciBqdXN0XHJcblx0XHQvLyB0ZXh0IChvbGQgZm9ybWF0KSBvciB0ZXh0IGluIGFuIG9iamVjdC4gVGhpcyBhbGxvd3NcclxuXHRcdC8vIGVpdGhlciBjYXNlIHRvIHdvcmsuXHJcblx0XHRpZih0ZXh0LmRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0ZXh0ID0gdGV4dC5kYXRhO1xyXG5cdFx0fVxyXG5cclxuXHRcdGVkaXRvci50ZXh0YXJlYS52YWx1ZSA9IHRleHQ7XHJcblxyXG5cdFx0bGV0IGxpbmVzID0gMDtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKXtcclxuXHRcdFx0aWYodGV4dFtpXSA9PT0gJ1xcbicpIHtcclxuXHRcdFx0XHRsaW5lcysrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYobGluZXMgPCAxMDApIHtcclxuXHRcdFx0bGluZXMgPSAxMDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVGhlIGV4dHJhIGFkZGVkIG9uIGhlcmUgZW5zdXJlcyB3ZSBnZXQgcGFzdCBhbnkgc2Nyb2xsIGJhclxyXG5cdFx0Ly8gdGhhdCBtYXkgdGFrZSB1cCBob3Jpem9udGFsIHJvb20uXHJcblx0XHRudW1zLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0Zm9yKGxldCBpPTE7IGk8PWxpbmVzKzU7IGkrKykge1xyXG5cdFx0XHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0XHRwLmlubmVyVGV4dCA9ICcnICsgaTtcclxuXHRcdFx0bnVtcy5hcHBlbmRDaGlsZChwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgY29udGVudHMgb2YgdGhlIGVkaXRvclxyXG5cdCAqIEByZXR1cm5zIHsqfHN0cmluZ31cclxuXHQgKi9cclxuXHR0aGlzLmdldCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGVkaXRvci50ZXh0YXJlYS52YWx1ZTtcclxuXHR9XHJcblxyXG5cdHRoaXMuc2VsZWN0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRUYWIucHJvdG90eXBlLnNlbGVjdC5jYWxsKHRoaXMpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRlZGl0b3IudGV4dGFyZWEuZm9jdXMoKTtcclxuXHRcdH0sIDApO1xyXG5cclxuXHR9XHJcblxyXG5cdHRoaXMuc2V0KCcnKTtcclxufVxyXG5cclxuRWRpdG9yVGFiLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVGFiLnByb3RvdHlwZSk7XHJcbkVkaXRvclRhYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFZGl0b3JUYWI7IiwiaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiJztcclxuaW1wb3J0IHtUb29sc30gZnJvbSBcIi4uL0RPTS9Ub29sc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcclxuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcclxuXHJcblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ291dHB1dCcpO1xyXG5cdHRoaXMudmlldyA9IHZpZXc7XHJcblxyXG5cdGxldCBpbm5lclZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmFwcGVuZENoaWxkKGlubmVyVmlldyk7XHJcblxyXG5cdGxldCBudW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0bnVtcy5jbGFzc0xpc3QuYWRkKCdjbC1wZy1udW1zJyk7XHJcblx0aW5uZXJWaWV3LmFwcGVuZENoaWxkKG51bXMpO1xyXG5cclxuXHRsZXQgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XHJcblx0aW5uZXJWaWV3LmFwcGVuZENoaWxkKHByZSk7XHJcblxyXG5cdHByZS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXZlbnQpID0+IHtcclxuXHRcdHByZS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnMHB4ICcgKyAoLXByZS5zY3JvbGxUb3ApICsgJ3B4JztcclxuXHRcdG51bXMuc2Nyb2xsVG9wID0gcHJlLnNjcm9sbFRvcDtcclxuXHR9KTtcclxuXHJcblx0dGhpcy5zZXQgPSBmdW5jdGlvbih0ZXh0KSB7XHJcblx0XHRwcmUuaW5uZXJIVE1MID0gdGV4dDtcclxuXHJcblx0XHRsZXQgbGluZXMgPSAwO1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyArK2kpe1xyXG5cdFx0XHRpZih0ZXh0W2ldID09PSAnXFxuJykge1xyXG5cdFx0XHRcdGxpbmVzKys7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZihsaW5lcyA8IDEwMCkge1xyXG5cdFx0XHRsaW5lcyA9IDEwMDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBUaGUgZXh0cmEgYWRkZWQgb24gaGVyZSBlbnN1cmVzIHdlIGdldCBwYXN0IGFueSBzY3JvbGwgYmFyXHJcblx0XHQvLyB0aGF0IG1heSB0YWtlIHVwIGhvcml6b250YWwgcm9vbS5cclxuXHRcdG51bXMuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRmb3IobGV0IGk9MTsgaTw9bGluZXMrNTsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRcdHAuaW5uZXJUZXh0ID0gJycgKyBpO1xyXG5cdFx0XHRudW1zLmFwcGVuZENoaWxkKHApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgdGV4dCA9IGBpbXBvcnQge1RhYn0gZnJvbSAnLi9UYWInO1xyXG5pbXBvcnQge1Rvb2xzfSBmcm9tIFwiLi4vRE9NL1Rvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3V0cHV0VGFiID0gZnVuY3Rpb24odGFicywgZGF0YSkge2V4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7ZXhwb3J0IGNvbnN0IE91dHB1dFRhYiA9IGZ1bmN0aW9uKHRhYnMsIGRhdGEpIHtcclxuXHRUYWIuY2FsbCh0aGlzLCB0YWJzLCBkYXRhKTtcclxuXHJcblx0bGV0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ2NsLXBnLXZpZXcnKTtcclxuXHR2aWV3LmNsYXNzTGlzdC5hZGQoJ291dHB1dCcpO1xyXG5cdHRoaXMudmlldyA9IHZpZXc7XHJcblx0XHJcblx0dmlldy5pbm5lclRleHQgPSBcXGBcXGA7XHJcbn1cclxuXHJcbmltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cdFxyXG5cdHZpZXcuaW5uZXJUZXh0ID0gXFxgXFxgO1xyXG59XHJcbmltcG9ydCB7VGFifSBmcm9tICcuL1RhYic7XHJcbmltcG9ydCB7VG9vbHN9IGZyb20gXCIuLi9ET00vVG9vbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPdXRwdXRUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0VGFiLmNhbGwodGhpcywgdGFicywgZGF0YSk7XHJcblxyXG5cdGxldCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdjbC1wZy12aWV3Jyk7XHJcblx0dmlldy5jbGFzc0xpc3QuYWRkKCdvdXRwdXQnKTtcclxuXHR0aGlzLnZpZXcgPSB2aWV3O1xyXG5cdFxyXG5cdHZpZXcuaW5uZXJUZXh0ID0gXFxgXFxgO1xyXG59XHJcblxyXG5PdXRwdXRUYWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUYWIucHJvdG90eXBlKTtcclxuT3V0cHV0VGFiLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE91dHB1dFRhYjtgO1xyXG5cclxuXHQvL3RoaXMuc2V0KHRleHQgKyB0ZXh0ICsgdGV4dCArIHRleHQpO1xyXG5cdHRoaXMuc2V0KCcnKTtcclxufVxyXG5cclxuT3V0cHV0VGFiLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVGFiLnByb3RvdHlwZSk7XHJcbk91dHB1dFRhYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPdXRwdXRUYWI7IiwiXHJcbmV4cG9ydCBjb25zdCBUYWIgPSBmdW5jdGlvbih0YWJzLCBkYXRhKSB7XHJcblx0dGhpcy50YWJzID0gdGFicztcclxuXHJcblx0dGhpcy52aWV3ID0gbnVsbDtcclxuXHR0aGlzLnRhZyA9IGRhdGEudGFnO1xyXG5cdHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuXHJcblx0bGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHR0aGlzLmxpID0gbGk7XHJcblxyXG5cdGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cdGxpLmFwcGVuZENoaWxkKGEpO1xyXG5cdGEuaW5uZXJUZXh0ID0gZGF0YS5uYW1lO1xyXG5cclxuXHRsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHRsaS5hcHBlbmRDaGlsZChtZW51KTtcclxuXHQvLyBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblx0Ly8gbWVudS5hcHBlbmRDaGlsZChpbWcpO1xyXG5cdC8vIGltZy5zcmMgPSBtZW51YmFycztcclxuXHJcblx0bGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0aGlzLnNlbGVjdCgpO1xyXG5cdH0pO1xyXG5cclxuXHRhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5zZWxlY3QoKTtcclxuXHR9KTtcclxuXHJcblx0dGhpcy5zZXQgPSBmdW5jdGlvbih0ZXh0KSB7fVxyXG5cclxuXHQvL1xyXG5cdC8vIFRoZSBtZW51XHJcblx0Ly8gTWF5YmUgYWN0aXZhdGUgbGF0ZXIgb24/XHJcblx0Ly9cclxuXHQvLyBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Ly8gbWVudURpdi5jbGFzc0xpc3QuYWRkKCdjbC10YWItbWVudScpO1xyXG5cdC8vIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnY2wtbWVudS1vcGVuJyk7XHJcblx0Ly8gbGkuYXBwZW5kQ2hpbGQobWVudURpdik7XHJcblx0Ly9cclxuXHQvLyBjb25zdCBtZW51VUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdC8vIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudVVMKTtcclxuXHQvLyBtZW51VUwuaW5uZXJIVE1MID1cclxuXHQvLyBcdCc8bGk+PGEgY2xhc3M9XCJlZGl0LXVuZG9cIj48c3BhbiBjbGFzcz1cImljb25zLWNsIGljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS13XCI+PC9zcGFuPlVuZG88L2E+PC9saT4nICtcclxuXHQvLyBcdCc8bGk+PGEgY2xhc3M9XCJlZGl0LWRlbGV0ZVwiPjxzcGFuIGNsYXNzPVwiaWNvbnMtY2wgaWNvbnMtY2wtdHJhc2hcIj48L3NwYW4+RGVsZXRlPC9hPjwvbGk+JztcclxuXHQvL1xyXG5cdC8vIGNvbnN0IGNvbm5lY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHQvLyBtZW51RGl2LmFwcGVuZENoaWxkKGNvbm5lY3REaXYpO1xyXG5cdC8vXHJcblx0Ly8gaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblx0Ly8gY29ubmVjdERpdi5hcHBlbmRDaGlsZChpbWcpO1xyXG5cdC8vIGltZy5zcmMgPSBtZW51YmFycztcclxufVxyXG5cclxuVGFiLnByb3RvdHlwZS5zZWxlY3QgID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy50YWJzLnVuc2VsZWN0QWxsKCk7XHJcblxyXG5cdHRoaXMubGkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuXHR0aGlzLnZpZXcuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxufVxyXG4iLCIvKipcclxuICogRHJhZyBhbmQgZHJvcCBzdXBwb3J0IGZvciB0aGUgcGFsZXR0ZVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBEcmFnQW5kRHJvcCA9IGZ1bmN0aW9uKG1haW4pIHtcclxuXHJcblx0bGV0IGRyYWdFbGVtZW50ID0gbnVsbDsgLy8gRE9NIEVsZW1lbnRcclxuXHRsZXQgZHJhZ0l0ZW0gPSBudWxsOyAgICAvLyBQYWxldHRlSXRlbVxyXG5cdGxldCBkcm9wVmlld3MgPSBbXTsgICAgIC8vIFZpZXdcclxuXHJcblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0aWYoZXZlbnQud2hpY2ggPT09IDApIHtcclxuXHRcdFx0XHRtb3VzZVVwKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtb3VzZU1vdmUoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1haW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdG1vdXNlTW92ZSh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0bW91c2VVcChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bWFpbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRtb3VzZVVwKHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRtYWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0bGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdG1vdXNlVXAodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dGhpcy5kcmFnZ2FibGUgPSAocGFsZXR0ZUl0ZW0pID0+IHtcclxuXHRcdHBhbGV0dGVJdGVtLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGNsaWNrKHBhbGV0dGVJdGVtKTtcclxuXHJcblx0XHRcdG1vdXNlTW92ZShldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cGFsZXR0ZUl0ZW0uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGNsaWNrKHBhbGV0dGVJdGVtKTtcclxuXHJcblx0XHRcdGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRtb3VzZU1vdmUodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dGhpcy5kcm9wcGFibGUgPSAodmlldywgY2FsbGJhY2spID0+IHtcclxuXHRcdGRyb3BWaWV3cy5wdXNoKHtcclxuXHRcdFx0J3ZpZXcnOiB2aWV3LFxyXG5cdFx0XHQnY2FsbGJhY2snOiBjYWxsYmFja1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjbGljayA9IChwYWxldHRlSXRlbSkgPT4ge1xyXG5cdFx0Ly9cclxuXHRcdC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGVsZW1lbnQgYW5kIHNldCBpdCB1cCBmb3IgZHJhZ2dpbmdcclxuXHRcdC8vXHJcblx0XHRjb25zdCBjbG9uZSA9IHBhbGV0dGVJdGVtLnBhbGV0dGVJbWFnZSgpO1xyXG5cdFx0bWFpbi5lbGVtZW50LmFwcGVuZENoaWxkKGNsb25lKTtcclxuXHRcdGNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHRcdGNsb25lLnN0eWxlLnRvcCA9IDA7XHJcblx0XHRjbG9uZS5zdHlsZS5sZWZ0ID0gMDtcclxuXHRcdGNsb25lLnN0eWxlLnpJbmRleCA9IDEwMDtcclxuXHRcdGNsb25lLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuXHJcblx0XHRkcmFnSXRlbSA9IHBhbGV0dGVJdGVtO1xyXG5cdFx0ZHJhZ0VsZW1lbnQgPSBjbG9uZTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdXNlTW92ZSA9ICh4LCB5KSA9PiB7XHJcblx0XHRpZihkcmFnRWxlbWVudCAhPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCByZWN0ID0gbWFpbi5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRjb25zdCBtYWluWCA9IHJlY3QubGVmdCArIG1haW4uZWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG5cdFx0XHRjb25zdCBtYWluWSA9IHJlY3QudG9wICArIG1haW4uZWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRkcmFnRWxlbWVudC5zdHlsZS5sZWZ0ID0gKHggLSBtYWluWCAtIGRyYWdFbGVtZW50LmNsaWVudFdpZHRoIC8gMikgKyAncHgnO1xyXG5cdFx0XHRkcmFnRWxlbWVudC5zdHlsZS50b3AgPSAoeSAtIG1haW5ZIC0gZHJhZ0VsZW1lbnQuY2xpZW50SGVpZ2h0IC8gMikgKyAncHgnO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3VzZVVwID0gKHgsIHkpID0+IHtcclxuXHRcdGlmKGRyYWdFbGVtZW50ICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHRmb3IoY29uc3QgdmlldyBvZiBkcm9wVmlld3MpIHtcclxuXHRcdFx0XHQvL1xyXG5cdFx0XHRcdC8vIElzIHRoZSB2aWV3IGVuYWJsZWQ/XHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHRjb25zdCB2aWV3RWxlbWVudCA9IHZpZXcudmlldy5lbGVtZW50O1xyXG5cdFx0XHRcdGlmKHZpZXdFbGVtZW50LnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vXHJcblx0XHRcdFx0Ly8gRGV0ZXJtaW5lIHgseSBpbiB0aGUgY2FudmFzXHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHRjb25zdCByZWN0ID0gdmlld0VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0Y29uc3Qgdmlld1ggPSByZWN0LmxlZnQgKyB2aWV3RWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG5cdFx0XHRcdGNvbnN0IHZpZXdZID0gcmVjdC50b3AgKyB2aWV3RWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRcdGlmKHggPj0gdmlld1ggJiZcclxuXHRcdFx0XHRcdHkgPj0gdmlld1kgJiZcclxuXHRcdFx0XHRcdHggPCB2aWV3WCArIChyZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0KSAmJlxyXG5cdFx0XHRcdFx0eSA8IHZpZXdZICsgKHJlY3QuYm90dG9tIC0gcmVjdC50b3ApKSB7XHJcblx0XHRcdFx0XHR2aWV3LmNhbGxiYWNrKGRyYWdJdGVtLCB4IC0gdmlld1gsIHkgLSB2aWV3WSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1haW4uZWxlbWVudC5yZW1vdmVDaGlsZChkcmFnRWxlbWVudCk7XHJcblx0XHRcdGRyYWdFbGVtZW50ID0gbnVsbDtcclxuXHRcdFx0ZHJhZ0l0ZW0gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbn0iLCIvKipcclxuICogU2ltcGxlIERvY3VtZW50IHJlYWR5IGZ1bmN0aW9uLCBlcXVpdmFsZW50IHRvIGpRdWVyeSdzIGRvY3VtZW50IHJlYWR5LlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBSZWFkeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4vKipcclxuICogQ2FsbCBhIGZ1bmN0aW9uIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWRvbi5cclxuICogQHBhcmFtIGZuIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBkb2N1bWVudCByZWFkeVxyXG4gKi9cclxuUmVhZHkuZ28gPSBmdW5jdGlvbihmbikge1xyXG4gICAgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50ID8gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpe1xyXG4gICAgICAgIGZuKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtQbGF5Z3JvdW5kfSBmcm9tIFwiLi9QbGF5Z3JvdW5kL1BsYXlncm91bmRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5Z3JvdW5kRmFjdG9yeSA9IGZ1bmN0aW9uKCkge31cclxuXHJcblBsYXlncm91bmRGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcblx0ZnVuY3Rpb24gaW5zdGFsbCgpIHtcclxuXHRcdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNsLXBsYXlncm91bmQnKTtcclxuXHRcdGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcblx0XHRcdGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG5cdFx0XHRlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRjb25zdCBwbGF5Z3JvdW5kID0gbmV3IFBsYXlncm91bmQoc2l0ZSwgZWxlbWVudCwganNvbik7XHJcblx0XHRcdHBsYXlncm91bmQuc3RhcnROb3coKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNpdGUuc3RhcnQoICgpID0+IHtcclxuXHRcdGluc3RhbGwoKTtcclxuXHR9KTtcclxuXHJcblxyXG5cdHNpdGUubWVzc2FnZUxpc3RlbmVyKChtc2csIGRhdGEpID0+IHtcclxuXHRcdHN3aXRjaChtc2cpIHtcclxuXHRcdFx0Y2FzZSAnY2wtcXVpei1hZnRlci1pbnN0YWxsZWQnOlxyXG5cdFx0XHRcdGluc3RhbGwoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2NsLWdyYWRlcy1ncmFkZXItaW5zdGFsbGVkJzpcclxuXHRcdFx0XHRpbnN0YWxsKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRzaXRlLlBsYXlncm91bmQgPSBQbGF5Z3JvdW5kO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
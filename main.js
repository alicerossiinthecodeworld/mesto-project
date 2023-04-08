/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
/******/ 		};
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
/******/ 		var dataWebpackPrefix = "mesto-project:";
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"289":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
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
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
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
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmesto_project"] = self["webpackChunkmesto_project"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* binding */ config)
});

// UNUSED EXPORTS: setUserCards

;// CONCATENATED MODULE: ./src/components/modal.js
function closePopUp(popUp) {
  popUp.classList.remove('pop-up_opened');
  document.removeEventListener('keydown', handleEscKey);
}
function openPopUp(popUp) {
  popUp.classList.add('pop-up_opened');
  document.addEventListener('keydown', handleEscKey);
}
function handleEscKey(event) {
  if (event.key === 'Escape') {
    var activePopUp = document.querySelector('.pop-up_opened');
    if (activePopUp) {
      closePopUp(activePopUp, {});
    }
  }
}
function handleClickOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopUp(event.currentTarget, {});
  }
}
function showLoading(button) {
  button.textContent = 'Сохранение...';
  button.disabled = true;
}
function hideLoading(button) {
  button.textContent = 'Сохранить';
  button.disabled = false;
}
;// CONCATENATED MODULE: ./src/components/api.js
var apiconfig = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-22',
  headers: {
    authorization: '2c63f497-70a5-4968-bb2d-b0ce27af4805',
    'Content-Type': 'application/json'
  },
  id: "51fb06311bd4f4f79497ac7b"
};
function getUser() {
  return fetch("".concat(apiconfig.baseUrl, "/users/me"), {
    headers: apiconfig.headers
  }).then(function (res) {
    return res.json();
  }).then(function (result) {
    return result;
  }).catch(function (error) {
    console.error(error);
  });
}
function updateProfile(name, about) {
  return fetch("".concat(apiconfig.baseUrl, "/users/me"), {
    method: 'PATCH',
    headers: apiconfig.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  }).catch(function (error) {
    console.log('Error:', error);
  });
}
function getCards() {
  {
    return fetch("".concat(apiconfig.baseUrl, "/cards"), {
      headers: apiconfig.headers
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      return result;
    }).catch(function (error) {
      console.error(error);
    });
  }
}
function postCard(name, link) {
  return fetch("".concat(apiconfig.baseUrl, "/cards"), {
    method: 'POST',
    headers: apiconfig.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  }).catch(function (error) {
    console.error('Error:', error);
  });
}
function deleteCard(id) {
  return fetch("".concat(apiconfig.baseUrl, "/cards/").concat(id), {
    method: 'DELETE',
    headers: apiconfig.headers
  }).then(function (response) {
    return response;
  }).catch(function (error) {
    console.error('Error:', error);
  });
}
function toggleLike(cardId, isLiked) {
  var method = isLiked ? 'DELETE' : 'PUT';
  return fetch("".concat(apiconfig.baseUrl, "/cards/likes/").concat(cardId), {
    method: method,
    headers: apiconfig.headers
  }).then(function (res) {
    return res.json();
  }).then(function (result) {
    return result;
  }).catch(function (error) {
    console.error(error);
  });
}
function changeAvatar(newAvatarURL) {
  fetch("".concat(apiconfig.baseUrl, "/users/me/avatar"), {
    method: 'PATCH',
    headers: apiconfig.headers,
    body: JSON.stringify({
      avatar: newAvatarURL
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
  }).catch(function (error) {
    console.error(error);
  });
}
;// CONCATENATED MODULE: ./src/components/card.js



var cardsTemplate = document.querySelector('#card-template');
var cardsList = document.querySelector('.cards__gallery');
var cardAddButton = document.querySelector('.profile__add-button');
var cardAddPopUp = document.querySelector('.card-add-pop-up');
var cardAddForm = cardAddPopUp.querySelector('.pop-up__form');
var titleInput = document.querySelector('.pop-up__input[name="title"]');
var linkInput = document.querySelector('.pop-up__input[name="link"]');
var imagePopUp = document.querySelector('.pop-up_type_image');
var card_image = document.querySelector(".pop-up__image");
var imageText = document.querySelector('.pop-up__image-text');
function addCard(evt) {
  var buttonElement = cardAddPopUp.querySelector(config.submitButtonSelector);
  showLoading(buttonElement);
  evt.preventDefault();
  var cardData = {
    name: titleInput.value,
    link: linkInput.value
  };
  postCard(cardData.name, cardData.link).then(function (res) {
    return res.json();
  }).then(function (data) {
    var card = createSingleCard(data);
    cardsList.prepend(card);
    card._id = data._id;
    evt.target.reset();
    hideLoading(buttonElement);
    closePopUp(cardAddPopUp);
  }).catch(function (err) {
    console.log(err);
  });
}
function createSingleCard(cardData) {
  var card = cardsTemplate.content.cloneNode(true);
  var cardImage = card.querySelector('.cards__picture');
  var likeCounter = card.querySelector('.cards__like-counter');
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  card.id = cardData._id;
  if (cardData.likeCounter) {
    likeCounter.textContent = cardData.likes.length;
  }
  var cardText = card.querySelector('.cards__text');
  cardText.textContent = cardData.name;
  var deleteButton = card.querySelector('.cards__delete-button');
  if (cardData.owner._id !== apiconfig.id) {
    var _deleteButton = card.querySelector('.cards__delete-button');
    _deleteButton.remove();
  } else {
    deleteButton.addEventListener('click', function (evt) {
      deleteCard(card.id);
      var cardElement = evt.target.closest('.cards__item');
      cardElement.remove();
    });
  }
  var likeButton = card.querySelector('.cards__like-button');
  likeButton.addEventListener('click', function () {
    var isLiked = likeButton.classList.contains('cards__like-button_active');
    toggleLike(card.id, isLiked, likeCounter).then(function (data) {
      likeCounter.textContent = data.likes.length;
    });
    likeButton.classList.toggle('cards__like-button_active');
  });
  cardImage.addEventListener('click', openImage);
  return card;
}
function createCard(cardsData) {
  cardsData.forEach(function (cardData) {
    var card = createSingleCard(cardData);
    cardsList.appendChild(card);
  });
}
function openImage(event) {
  var imgSrc = event.target.getAttribute("src");
  var imgAlt = event.target.getAttribute("alt");
  card_image.setAttribute('src', imgSrc);
  card_image.setAttribute('alt', imgAlt);
  imageText.textContent = imgAlt;
  openPopUp(imagePopUp);
}
;// CONCATENATED MODULE: ./src/components/validate.js
function showInputError(inputElement, errorMessage, submitButton, config) {
  var errorElement = document.querySelector(".".concat(inputElement.name, "-error"));
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
  blockSubmitButton(submitButton, config.inactiveButtonClass);
}
;
function hideInputError(input, config) {
  var inputElement = input.target || input;
  var errorElement = document.querySelector(".".concat(inputElement.name, "-error"));
  if (errorElement) {
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
  }
  inputElement.classList.remove(config.inputErrorClass);
}
;
function checkInputValidity(input, submitButton, config) {
  input.setCustomValidity('');
  if (!input.checkValidity()) {
    if (input.validity.patternMismatch) {
      input.setCustomValidity(input.dataset.errorMessage);
    }
    showInputError(input, input.validationMessage, submitButton, config);
    return false;
  } else {
    hideInputError(input, config);
    return true;
  }
}
function hasInvalidInput(inputList) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
}
function blockSubmitButton(submitButton, inactiveButtonClass) {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
}
function unlockSubmitButton(submitButton, inactiveButtonClass) {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
}
function toggleButtonState(inputList, submitButton, config) {
  if (hasInvalidInput(inputList)) {
    blockSubmitButton(submitButton, config.inactiveButtonClass);
  } else {
    unlockSubmitButton(submitButton, config.inactiveButtonClass);
  }
}
function setEventListeners(inputList, submitButton, config) {
  toggleButtonState(inputList, submitButton, config);
  inputList.forEach(function (inputElement) {
    inputElement.addEventListener('input', function () {
      checkInputValidity(inputElement, submitButton, config);
      toggleButtonState(inputList, submitButton, config);
    });
  });
}
;
function enableValidation(config) {
  var formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(function (formElement) {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    var inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    var buttonElement = formElement.querySelector(config.submitButtonSelector);
    setEventListeners(inputList, buttonElement, config);
  });
}
;
;// CONCATENATED MODULE: ./src/components/index.js
__webpack_require__.e(/* import() */ 289).then(__webpack_require__.bind(__webpack_require__, 289));




var config = {
  popUpSelector: '.pop-up',
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__input',
  submitButtonSelector: '.pop-up__submit',
  inactiveButtonClass: 'pop-up__submit_inavailible',
  inputErrorClass: 'pop-up__input_error',
  errorClass: 'pop-up__error_visible',
  errorElementSelector: '.pop-up__error'
};
var profileEditButton = document.querySelector('.profile__edit-button');
var profileName = document.querySelector('.profile__name');
var profileJob = document.querySelector('.profile__description');
var closeButtons = document.querySelectorAll('.pop-up__close');
var profileEditPopUp = document.querySelector('.profile-edit-pop-up');
var nameInput = profileEditPopUp.querySelector('.pop-up__input[name="name"]');
var jobInput = profileEditPopUp.querySelector('.pop-up__input[name="profession"]');
var profileEditForm = profileEditPopUp.querySelector('.pop-up__form');
var profileAvatar = document.querySelector('.profile__avatar-image');
var avatarPopUp = document.querySelector('.avatar__change__pop-up');
var avatarEditForm = avatarPopUp.querySelector('.pop-up__form');
var avatarEditIcon = document.querySelector('.edit-icon');
var avatarLinkInput = avatarPopUp.querySelector('.pop-up__input[name="avatar-link"]');
closeButtons.forEach(function (button) {
  var popUp = button.closest('.pop-up');
  button.addEventListener('click', function () {
    return closePopUp(popUp, config);
  });
});
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  var name = nameInput.value;
  var about = jobInput.value;
  var buttonElement = profileEditPopUp.querySelector(config.submitButtonSelector);
  showLoading(buttonElement);
  updateProfile(name, about).then(function (userData) {
    profileName.textContent = userData.name;
    profileJob.textContent = userData.about;
    profileAvatar.src = userData.avatar;
    hideLoading(buttonElement);
    closePopUp(profileEditPopUp);
  });
}
profileEditButton.addEventListener("click", function () {
  var inputs = profileEditPopUp.querySelectorAll(config.inputSelector);
  inputs.forEach(function (input) {
    hideInputError(input, config);
  });
  openPopUp(profileEditPopUp);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  profileEditForm.addEventListener('submit', handleProfileFormSubmit);
});
cardAddButton.addEventListener("click", function () {
  titleInput.value = '';
  linkInput.value = '';
  var inputs = cardAddPopUp.querySelectorAll(config.inputSelector);
  inputs.forEach(function (input) {
    hideInputError(input, config);
  });
  openPopUp(cardAddPopUp);
  var buttonElement = cardAddPopUp.querySelector(config.submitButtonSelector);
  blockSubmitButton(buttonElement, config.inactiveButtonClass);
});
document.addEventListener('DOMContentLoaded', function () {
  enableValidation(config);
});
cardAddForm.addEventListener('submit', function (evt) {
  addCard(evt);
});
avatarEditForm.addEventListener('submit', function (evt) {
  var buttonElement = avatarEditForm.querySelector(config.submitButtonSelector);
  showLoading(buttonElement);
  changeAvatar(avatarLinkInput.value);
  hideLoading(buttonElement);
  closePopUp(avatarPopUp);
});
function openAvatarForm() {
  var inputs = avatarPopUp.querySelectorAll(config.inputSelector);
  inputs.forEach(function (input) {
    hideInputError(input, config);
  });
  avatarLinkInput.value = '';
  console.log(avatarPopUp);
  openPopUp(avatarPopUp);
  var buttonElement = cardAddPopUp.querySelector(config.submitButtonSelector);
  blockSubmitButton(buttonElement, config.inactiveButtonClass);
}
avatarEditIcon.addEventListener('click', openAvatarForm);
var popUpList = document.querySelectorAll(config.popUpSelector);
popUpList.forEach(function (popUp) {
  popUp.addEventListener('click', handleClickOverlay);
});
window.addEventListener('load', function () {
  setUserInfo();
  setUserCards();
});
function setUserInfo() {
  getUser().then(function (result) {
    profileName.textContent = result.name;
    profileJob.textContent = result.about;
    profileAvatar.src = result.avatar;
  });
}
function setUserCards() {
  var cards;
  getCards().then(function (result) {
    cards = result;
    createCard(cards);
  }).catch(function (error) {
    console.error(error);
  });
}
/******/ })()
;
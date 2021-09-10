/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {
  var _this = this; // drawer


  var appDrawerState = false;

  var handleAppDrawer = function handleAppDrawer(e) {
    e.preventDefault();
    appDrawerState = !appDrawerState;
    var appDrawer = $('.app-drawer');

    if (appDrawerState) {
      appDrawer.css('right', 0 - appDrawer.width()).removeClass('hidden').animate({
        right: 0
      });
      $('.app-drawer-bg').fadeIn(1000, function () {
        return $(_this).removeClass('hidden');
      });
      $('body').css('overflow', 'hidden');
    } else {
      appDrawer.animate({
        right: 0 - appDrawer.width()
      }, {
        complete: function complete() {
          return appDrawer.addClass('hidden');
        }
      });
      $('.app-drawer-bg').fadeOut(500, function () {
        return $(_this).addClass('hidden');
      });
      $('body').css('overflow', 'auto');
    }
  };

  $('.app-drawer-bg').on('click', handleAppDrawer);
  $('.app-drawer-btn').on('click', handleAppDrawer); // sticky

  $(document).on("scroll", function () {
    var items = document.querySelectorAll('.sticky');
    if (items.length == 0) return;

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var offset = item.getAttribute('data-sticky-offset') || 50;

      if ($(document).scrollTop() >= item.offsetTop - offset) {
        item.style.position = 'sticky';
        item.style.top = offset + 'px';
        item.setAttribute('data-sticky-position', item.style.position);
      } else {
        item.style.position = item.getAttribute('data-sticky-position') || 'static';
      }
    }
  }); // reloaded animation

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      $('#app').removeClass('hidden');
      $('.loading').fadeOut(); // set

      $('.min-h-full').each(function (index, el) {
        var outer = $('.footer').height() + $('nav.nav').height();
        var total = $(window).height() - outer;
        $('.min-h-full').css('min-height', total + 'px');
      });
    }, 100);
  });
  $(window).bind('beforeunload', function (e) {
    $('#app').addClass('hidden');
    $('.loading').css('display', 'flex');
  }); // pages
  // home

  if (document.querySelector('section.hero')) {
    document.addEventListener('mousemove', function (e) {
      document.querySelectorAll('section.hero .layer').forEach(function (el) {
        var speed = el.getAttribute('data-speed');
        var direction = el.getAttribute('data-direction');
        var applyX = true;
        var applyY = true;
        if (direction == 'x') applyY = false;
        if (direction == 'y') applyX = false;
        var x = 0;
        var y = 0;

        if (applyX) {
          x = (window.innerWidth - e.pageX * speed) / 100 + 30;
        }

        if (applyY) {
          y = (window.innerHeight - e.pageY * speed) / 100 + 30;
        }

        el.style.transform = "translateX(".concat(x, "px) translateY(").concat(y, "px)");
      });
    });
  }

  __webpack_require__(/*! ./pages/discussion */ "./resources/js/pages/discussion.js");
})();

/***/ }),

/***/ "./resources/js/pages/discussion.js":
/*!******************************************!*\
  !*** ./resources/js/pages/discussion.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', main);

function main() {
  // discussion
  if (document.querySelectorAll('.discussion-item').length > 0) {
    var items = document.querySelectorAll('.discussion-item');

    var _loop = function _loop(i) {
      var item = items[i];
      var btnUpvote = item.querySelector('.vote-up');
      var btnDownvote = item.querySelector('.vote-down');
      var vote = item.querySelector('.vote-count');
      btnUpvote.addEventListener('click', function (e) {
        var voteup = item.getAttribute('data-vote-up');
        var votedown = item.getAttribute('data-vote-down');

        if (votedown) {
          vote.innerHTML = parseInt(vote.innerHTML) + 1;
          item.removeAttribute('data-vote-down');
        }

        if (!voteup) {
          item.setAttribute('data-vote-up', 1);
          btnUpvote.classList.add('text-blue-500');
          btnDownvote.classList.remove('text-blue-500');
          vote.innerHTML = parseInt(vote.innerHTML) + 1;
        } else {
          item.removeAttribute('data-vote-up');
          btnUpvote.classList.remove('text-blue-500');
          vote.innerHTML = parseInt(vote.innerHTML) - 1;
        }

        console.log({
          voteup: voteup,
          votedown: votedown,
          vote: parseInt(vote.innerHTML)
        });
      });
      btnDownvote.addEventListener('click', function (e) {
        var voteup = item.getAttribute('data-vote-up');
        var votedown = item.getAttribute('data-vote-down');

        if (voteup) {
          vote.innerHTML = parseInt(vote.innerHTML) - 1;
          item.removeAttribute('data-vote-up');
        }

        if (!votedown) {
          item.setAttribute('data-vote-down', 1);
          btnDownvote.classList.add('text-blue-500');
          btnUpvote.classList.remove('text-blue-500');
          vote.innerHTML = parseInt(vote.innerHTML) - 1;
        } else {
          item.removeAttribute('data-vote-down');
          btnDownvote.classList.remove('text-blue-500');
          vote.innerHTML = parseInt(vote.innerHTML) + 1;
        }

        console.log({
          voteup: voteup,
          votedown: votedown,
          vote: parseInt(vote.innerHTML)
        });
      });
    };

    for (var i = 0; i < items.length; i++) {
      _loop(i);
    }
  }
}

/***/ }),

/***/ 1:
/*!***********************************!*\
  !*** multi ./resources/js/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/viandwi24/Project/Dev/forum/resources/js/app.js */"./resources/js/app.js");


/***/ })

/******/ });
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var AnimationService = (function () {
    function AnimationService(document) {
        this._mode = "default";
        this._animationClasses = [];
        this._classHistory = [];
        this.document = document;
    }
    AnimationService.prototype.animationEndEvent = function (element) {
        var el = this.document.createElement("endAnimationElement");
        var animations;
        animations = {
            'animation': 'animationend',
            'OAnimation': 'oAnimationEnd',
            'MozAnimation': 'animationend',
            'WebkitAnimation': 'webkitAnimationEnd'
        };
        for (var animation in animations) {
            if (el.style[animation] !== undefined) {
                return animations[animation];
            }
        }
        return null;
    };
    AnimationService.prototype.animationStartEvent = function (element) {
        var el = this.document.createElement("startAnimationElement");
        var animations;
        animations = {
            'animation': 'animationstart',
            'OAnimation': 'oAnimationStart',
            'MozAnimation': 'animationstart',
            'WebkitAnimation': 'webkitAnimationStart'
        };
        for (var animation in animations) {
            if (el.style[animation] !== undefined) {
                return animations[animation];
            }
        }
        return null;
    };
    AnimationService.prototype.animate = function (element, mode) {
        var _this = this;
        if (mode === void 0) { mode = "default"; }
        return new Promise(function (resolve, reject) {
            _this.removeCSSClass(element);
            var animationStartEvent = _this.animationStartEvent(element);
            var animationEndEvent = _this.animationEndEvent(element);
            element.removeAttribute("hidden");
            _this.applyCSSStyle(element);
            var startHandler;
            if (mode == "hide") {
                element.setAttribute("hidden", "");
                element.style.display = null;
            }
            element.addEventListener(animationStartEvent, startHandler = function () {
                element.removeEventListener(animationStartEvent, startHandler);
                return startHandler;
            });
            var endHandler;
            element.addEventListener(animationEndEvent, endHandler = function () {
                element.removeEventListener(animationEndEvent, endHandler);
                _this.removeCSSClass(element);
                resolve(element);
                return endHandler;
            });
        });
    };
    AnimationService.prototype.show = function (element) {
        element.removeAttribute("hidden");
        return this.animate(element, "show");
    };
    AnimationService.prototype.hide = function (element) {
        element.setAttribute("hidden", "");
        return this.animate(element, "hide");
    };
    AnimationService.prototype.setType = function (type) {
        if (this._classHistory.indexOf(type) === -1) {
            this._classHistory.push(type);
        }
        return this;
    };
    AnimationService.prototype.applyCSSStyle = function (element, add) {
        if (add === void 0) { add = true; }
        this._classHistory.forEach(function (name) {
            if (add === true) {
                element.classList.add("animated");
                element.classList.add(name);
            }
            else {
                element.classList.remove(name);
                element.classList.remove("animated");
            }
        });
        return this;
    };
    AnimationService.prototype.removeCSSClass = function (element) {
        this.applyCSSStyle(element, false);
    };
    AnimationService = __decorate([
        __param(0, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [Object])
    ], AnimationService);
    return AnimationService;
}());
exports.AnimationService = AnimationService;
//# sourceMappingURL=animation.service.js.map
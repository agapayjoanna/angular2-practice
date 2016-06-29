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
var animation_service_1 = require('./animation.service');
var LoginOptionsDirective = (function () {
    function LoginOptionsDirective(el, render, document, service) {
        this.el = el;
        this.render = render;
        this.service = service;
        this._isShown = false;
        this.onShow = new core_1.EventEmitter();
        this.onShown = new core_1.EventEmitter();
        this.onHide = new core_1.EventEmitter();
        this.onHidden = new core_1.EventEmitter();
        this.element = el;
        this.renderer = render;
        this.document = document;
        this.animationService = service;
    }
    LoginOptionsDirective.prototype.ngOnDestroy = function () {
        this._isShown = void 0;
    };
    LoginOptionsDirective.prototype.ngAfterViewInit = function () { };
    LoginOptionsDirective.prototype.showLoginPanel = function () {
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        if (this.document && this.document.body) {
            this.renderer.setElementClass(this.document.body, "open", true);
        }
        this.animationService.setType("slideInLeft").hide(this.element.nativeElement);
        this.animationService.setType("slideInLeft").animate(this.document.querySelector(".login-panel"));
        this.onHidden.emit(this);
    };
    LoginOptionsDirective.prototype.showLoginPanelWithID = function () {
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        if (this.document && this.document.body) {
            this.renderer.setElementClass(this.document.body, "open", true);
        }
        this.animationService.setType("slideInRight").hide(this.document.querySelector(".login-panel"));
        this.animationService.setType("slideInRight").show(this.element.nativeElement);
        this.onHidden.emit(this);
    };
    __decorate([
        core_1.Input("login-options"),
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LoginOptionsDirective.prototype, "onShow", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LoginOptionsDirective.prototype, "onShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LoginOptionsDirective.prototype, "onHide", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LoginOptionsDirective.prototype, "onHidden", void 0);
    LoginOptionsDirective = __decorate([
        core_1.Directive({
            selector: '[loginOptions]',
            exportAs: 'login-options'
        }),
        __param(2, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, animation_service_1.AnimationService])
    ], LoginOptionsDirective);
    return LoginOptionsDirective;
}());
exports.LoginOptionsDirective = LoginOptionsDirective;
//# sourceMappingURL=loginoptions.directive.js.map
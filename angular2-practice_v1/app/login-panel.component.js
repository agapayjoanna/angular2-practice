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
var core_1 = require('@angular/core');
var loginoptions_directive_1 = require('./loginoptions.directive');
var animation_service_1 = require('./animation.service');
var LoginPanelComponent = (function () {
    function LoginPanelComponent() {
        this.onToggle = new core_1.EventEmitter();
        this._activeColor = '#fff';
        this._activeBgColor = '#9f2521';
        this._inactiveColor = '#9f2521';
        this._inactiveBgColor = '#fff';
    }
    LoginPanelComponent.prototype.setStyles = function () {
        var styles = {
            'color': this.isNotifActive ? this._activeColor : this._inactiveColor,
            'background-color': this.isNotifActive ? this._activeBgColor : this._inactiveBgColor
        };
        return styles;
    };
    LoginPanelComponent.prototype.toggleNotifPanelState = function () {
        this.isNotifActive = !this.isNotifActive;
        this.onToggle.emit(this.isNotifActive);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], LoginPanelComponent.prototype, "isNotifActive", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LoginPanelComponent.prototype, "onToggle", void 0);
    LoginPanelComponent = __decorate([
        core_1.Component({
            selector: 'div.login-wrapper',
            templateUrl: 'app/html/login-panel.component.html',
            directives: [loginoptions_directive_1.LoginOptionsDirective],
            providers: [animation_service_1.AnimationService]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginPanelComponent);
    return LoginPanelComponent;
}());
exports.LoginPanelComponent = LoginPanelComponent;
//# sourceMappingURL=login-panel.component.js.map
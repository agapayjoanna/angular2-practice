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
var notification_panel_service_1 = require('./notification-panel.service');
var NotificationPanelComponent = (function () {
    function NotificationPanelComponent(notificationPanelService) {
        this.notificationPanelService = notificationPanelService;
        this.onToggle = new core_1.EventEmitter();
    }
    NotificationPanelComponent.prototype.getNotifications = function () {
        var _this = this;
        this.notificationPanelService
            .getNotifications()
            .then(function (notifications) { return _this.notifications = notifications.slice(notifications.length - 2, notifications.length).reverse(); });
    };
    NotificationPanelComponent.prototype.toggleNotifPanelState = function () {
        this.isNotifActive = !this.isNotifActive;
        this.onToggle.emit(this.isNotifActive);
    };
    NotificationPanelComponent.prototype.ngOnInit = function () {
        this.getNotifications();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NotificationPanelComponent.prototype, "isNotifActive", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NotificationPanelComponent.prototype, "onToggle", void 0);
    NotificationPanelComponent = __decorate([
        core_1.Component({
            selector: 'div.notifications-container',
            templateUrl: 'app/notification-panel.component.html'
        }), 
        __metadata('design:paramtypes', [notification_panel_service_1.NotificationPanelService])
    ], NotificationPanelComponent);
    return NotificationPanelComponent;
}());
exports.NotificationPanelComponent = NotificationPanelComponent;
//# sourceMappingURL=notification-panel.component.js.map
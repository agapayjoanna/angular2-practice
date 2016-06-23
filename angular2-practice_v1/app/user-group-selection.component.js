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
var UserGroup = (function () {
    function UserGroup() {
    }
    return UserGroup;
}());
exports.UserGroup = UserGroup;
var USERGROUPS = [
    { id: 1, name: 'User Group 1' },
    { id: 2, name: 'User Group 2' },
    { id: 3, name: 'User Group 3' },
    { id: 4, name: 'User Group 4' },
    { id: 5, name: 'User Group 5' },
    { id: 6, name: 'User Group 6' },
    { id: 7, name: 'User Group 7' }
];
var UserGroupSelectionComponent = (function () {
    function UserGroupSelectionComponent() {
        this.title = "Or, you can explore the group which you belong to";
        this.userGroups = USERGROUPS;
        this.selectUserGroup = UserGroup;
    }
    UserGroupSelectionComponent.prototype.onSelect = function (userGroup) { };
    UserGroupSelectionComponent = __decorate([
        core_1.Component({
            selector: 'div.user-selection',
            templateUrl: 'app/user-group-selection.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], UserGroupSelectionComponent);
    return UserGroupSelectionComponent;
}());
exports.UserGroupSelectionComponent = UserGroupSelectionComponent;
//# sourceMappingURL=user-group-selection.component.js.map
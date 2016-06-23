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
var subGroup = (function () {
    function subGroup() {
    }
    return subGroup;
}());
var USERGROUPS = [
    { id: 1, name: 'Group 1', description: 'this is Group1', detail: [{ groupName: "hello1", url: "www.google.com" }, { groupName: "its me1", url: "www.yahoo.com" }] },
    { id: 2, name: 'Group 2', description: 'this is Group2', detail: null },
    { id: 3, name: 'Group 3', description: 'this is Group3', detail: [{ groupName: "hello3", url: "www.facebook.com" }, { groupName: "its me3", url: "www.accenture.com" }] },
    { id: 4, name: 'Group 4', description: 'this is Group4', detail: [{ groupName: "hello4", url: "www.sunstar.ph" }, { groupName: "its me4", url: "www.philstar.com" }] },
    { id: 5, name: 'Group 5', description: 'this is Group5', detail: [{ groupName: "hello5", url: "www.maps.google.com" }, { groupName: "its me5", url: "www.bing.com" }] },
    { id: 6, name: 'Group 6', description: 'this is Group6', detail: [{ groupName: "hello6", url: "www.instagram.com" }, { groupName: "its me6", url: "www.mangareader.net" }] },
    { id: 7, name: 'Group 7', description: 'this is Group7', detail: [{ groupName: "hello7", url: "www.mangastream.com" }, { groupName: "its me7", url: "www.yahoo.com" }] },
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
            templateUrl: 'app/user-group-selection.component.html',
            styleUrls: ['app/css/usergroup.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], UserGroupSelectionComponent);
    return UserGroupSelectionComponent;
}());
exports.UserGroupSelectionComponent = UserGroupSelectionComponent;
//# sourceMappingURL=user-group-selection.component.js.map
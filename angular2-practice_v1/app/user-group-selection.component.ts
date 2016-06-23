import { Component } from '@angular/core';

export class UserGroup {
    id: number;
    name: string;
    description: string;
    detail: subGroup[];
}

class subGroup{
groupName: string;
url:string;
}

const USERGROUPS: UserGroup[] = [
    {id: 1, name: 'Group 1', description: 'this is Group1', detail: [{groupName: "hello1", url: "www.google.com"}, {groupName: "its me1", url: "www.yahoo.com"}]},
    {id: 2, name: 'Group 2', description: 'this is Group2', detail: null},
    {id: 3, name: 'Group 3', description: 'this is Group3', detail: [{groupName: "hello3", url: "www.facebook.com"}, {groupName: "its me3", url: "www.accenture.com"}]},
    {id: 4, name: 'Group 4', description: 'this is Group4', detail: [{groupName: "hello4", url: "www.sunstar.ph"}, {groupName: "its me4", url: "www.philstar.com"}]},
    {id: 5, name: 'Group 5', description: 'this is Group5', detail: [{groupName: "hello5", url: "www.maps.google.com"}, {groupName: "its me5", url: "www.bing.com"}]},
    {id: 6, name: 'Group 6', description: 'this is Group6', detail: [{groupName: "hello6", url: "www.instagram.com"}, {groupName: "its me6", url: "www.mangareader.net"}]},
    {id: 7, name: 'Group 7', description: 'this is Group7', detail: [{groupName: "hello7", url: "www.mangastream.com"}, {groupName: "its me7", url: "www.yahoo.com"}]},
];

@Component({
    selector: 'div.user-selection',
    templateUrl: 'app/user-group-selection.component.html',
    styleUrls: ['app/css/usergroup.component.css']
})

export class UserGroupSelectionComponent { 
    title = "Or, you can explore the group which you belong to";
    userGroups = USERGROUPS; 
    selectUserGroup = UserGroup;

    onSelect(userGroup: UserGroup) { /* not yet implemented */}
}
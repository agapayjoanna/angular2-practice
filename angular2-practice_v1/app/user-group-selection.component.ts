import { Component } from '@angular/core';

export class UserGroup {
    id: number;
    name: string;
}

const USERGROUPS: UserGroup[] = [
    { id: 1, name: 'User Group 1' },
    { id: 2, name: 'User Group 2' },
    { id: 3, name: 'User Group 3' },
    { id: 4, name: 'User Group 4' },
    { id: 5, name: 'User Group 5' },
    { id: 6, name: 'User Group 6' },
    { id: 7, name: 'User Group 7' }
];

@Component({
    selector: 'div.user-selection',
    templateUrl: 'app/user-group-selection.component.html'
})

export class UserGroupSelectionComponent { 
    title = "Or, you can explore the group which you belong to";
    userGroups = USERGROUPS; 
    selectUserGroup = UserGroup;

    onSelect(userGroup: UserGroup) { /* not yet implemented */}
}
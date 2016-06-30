import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Notification } from './notification';
import { NotificationPanelService } from './notification-panel.service';

@Component({
    selector: 'div.notifications-container',
    templateUrl: 'app/notification-panel.component.html'
})

export class NotificationPanelComponent implements OnInit {
    notifications: Notification[];
    @Input() isNotifActive:boolean;
    @Output() onToggle = new EventEmitter<boolean>();

    constructor(private notificationPanelService: NotificationPanelService) { }

    getNotifications() {
        this.notificationPanelService
            .getNotifications()
            .then(notifications => this.notifications = notifications.slice(notifications.length - 2, notifications.length).reverse());
    }

    toggleNotifPanelState() {
        this.isNotifActive = !this.isNotifActive;
        this.onToggle.emit(this.isNotifActive);
    }    

    ngOnInit() {
        this.getNotifications();
    }    
}
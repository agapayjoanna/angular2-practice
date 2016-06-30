import { Injectable } from '@angular/core';

import { NOTIFICATIONS } from './mock-notifications';

@Injectable()
export class NotificationPanelService {
    getNotifications() {
        return Promise.resolve(NOTIFICATIONS);
    }
}
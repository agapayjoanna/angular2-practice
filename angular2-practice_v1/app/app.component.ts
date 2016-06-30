import { Component } from '@angular/core';
import { Collapse } from './collapse.directive';

import { NotificationPanelService } from './notification-panel.service';
import { NotificationPanelComponent } from './notification-panel.component';
import { BackgroundComponent } from './background.component'; 
import { UserGroupSelectionComponent } from './user-group-selection.component';
import { LoginPanelComponent } from './login-panel.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'my-app',
  template: `    
        <div class="bold notifications-container" [collapse]="isCollapsedContent" [isNotifActive]="!isCollapsedContent" (onToggle)="toggleNotification($event)"></div>
        <header>
            <div class="logo">
                <img src="app/img/logo.png"/>
            </div>
        </header>        
        <div class="bg-container"></div>
        <div class="login-panel" [isNotifActive]="!isCollapsedContent" (onToggle)="toggleNotification($event)"></div>
        <div class="user-selection"></div>        
        <div class="footer"></div>
    `,    
    directives: [
      Collapse,
      NotificationPanelComponent,
      BackgroundComponent,
      UserGroupSelectionComponent,
      LoginPanelComponent,
      FooterComponent
    ],
    providers: [ NotificationPanelService ]
})

export class AppComponent {
    isCollapsedContent:boolean = false;

    toggleNotification(isActive: boolean) {
        this.isCollapsedContent = (isActive ? false : true);
    }
 }

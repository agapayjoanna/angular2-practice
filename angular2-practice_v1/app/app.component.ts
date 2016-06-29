import { Component } from '@angular/core';

import { NotificationPanelComponent } from './notification-panel.component';
import { BackgroundComponent } from './background.component'; 
import { UserGroupSelectionComponent } from './user-group-selection.component';
import { LoginPanelComponent } from './login-panel.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'my-app',
  template: `    
        <div class="bold notifications-container"></div>
        <header>
            <div class="logo">
                <img src="app/img/logo.png"/>
            </div>
        </header>        
        <div class="container"></div>
        <div class="login-wrapper"></div>
        <div class="user-selection"></div>        
        <div class="footer"></div>
    `,
    directives: [
      NotificationPanelComponent,
      BackgroundComponent,
      UserGroupSelectionComponent,
      LoginPanelComponent,
      FooterComponent
    ]
})

export class AppComponent { }

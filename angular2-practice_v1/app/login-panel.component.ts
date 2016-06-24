import { Component } from '@angular/core';
import { LoginOptionsDirective} from './loginoptions.directive';

@Component({
    selector: 'div.login-panel',
    templateUrl: 'app/html/login-panel.component.html',
    directives: [LoginOptionsDirective]
})

export class LoginPanelComponent { }
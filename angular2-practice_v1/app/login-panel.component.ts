import { Component } from '@angular/core';
import {LoginOptionsDirective} from './loginoptions.directive';
import {AnimationService} from './animation.service';

@Component({
    selector: 'div.login-wrapper',
    templateUrl: 'app/html/login-panel.component.html',
    directives: [LoginOptionsDirective],
    providers: [AnimationService]
})

export class LoginPanelComponent { 
    
}
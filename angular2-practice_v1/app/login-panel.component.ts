import { Component, Input, Output, EventEmitter } from '@angular/core';

import { LoginOptionsDirective } from './loginoptions.directive';
import { AnimationService } from './animation.service';
import { Collapse } from './collapse.directive';

@Component({
    selector: 'div.login-wrapper',
    templateUrl: 'app/html/login-panel.component.html',
    directives: [LoginOptionsDirective],
    providers: [AnimationService]
})

export class LoginPanelComponent { 
    // Notification Button
    @Input() isNotifActive: boolean;
    @Output() onToggle = new EventEmitter<boolean>();    
    private _activeColor:string = '#fff';
    private _activeBgColor:string = '#9f2521';
    private _inactiveColor:string = '#9f2521';    
    private _inactiveBgColor:string = '#fff';

    setStyles() {
        let styles = {
            'color': this.isNotifActive ? this._activeColor : this._inactiveColor,
            'background-color': this.isNotifActive ? this._activeBgColor : this._inactiveBgColor
        };
        return styles;
    }

    toggleNotifPanelState() {
        this.isNotifActive = !this.isNotifActive;
        this.onToggle.emit(this.isNotifActive);
    }     
}
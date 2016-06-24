import {Directive, ElementRef, Renderer, } from '@angular/core';


@Directive({
    selector: '[login-method]',
    host: {
        '(click)':'onClick()'
    }
})

export class LoginOptionsDirective{
    
    constructor(private el: ElementRef, private renderer: Renderer){
      
    }

    onclick(){
        this.renderer.setElementStyle(this.el, 'color','black');
        console.log(this.el.nativeElement.getAttribute("login-method"));
    }
}
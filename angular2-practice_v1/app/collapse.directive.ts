import { Directive, Input, HostBinding, ElementRef } from '@angular/core';


@Directive({
    selector: '[collapse]'
})
export class Collapse {
    // style
    @HostBinding('style.height')
    private height:string; 
    // shown
    @HostBinding('class.in')
    @HostBinding('attr.aria-expanded')
    private isExpanded:boolean = true;
    // hidden
    @HostBinding('attr.aria-hidden')
    private isCollapsed:boolean = false;
    // stale state
    @HostBinding('class.collapse')
    private isCollapse:boolean = true;
    // animation state
    @HostBinding('class.collapsing')
    private isCollapsing:boolean = false;

    private el: HTMLElement;
    private offsetHeight:number = 0;       

    @Input()
    private set collapse(value:boolean) {
        this.isExpanded = value;
        this.toggle();
    }

    private get collapse():boolean {
        return this.isExpanded;
    }

    constructor(private elementRef:ElementRef) {
        this.el = elementRef.nativeElement;       
    }

    toggle() {
        if (this.isExpanded) {
            this.hide();
        } else {
            this.show();
        }
    }

    hide() {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.height = '0';
        this.isExpanded = false;        
        setTimeout(() => {
            this.isCollapsed = true;
            this.isCollapse = true;
            this.isCollapsing = false;
        }, 350);
    }

    show() {
        this.isCollapse = false;
        this.isCollapsing = true;

        setTimeout(() => {
            if(this.offsetHeight == 0) {
                this.height = 'auto';
                setTimeout(() => {
                    this.offsetHeight = this.el.offsetHeight;
                    this.height = this.offsetHeight + 'px';
                }, 100);
            } else {
                this.height = this.offsetHeight + 'px';
            }
            this.isExpanded = true;        
            setTimeout(() => {
                this.isCollapsed = false;       
                this.isCollapse = true;
                this.isCollapsing = false;          
            }, 350);              
        }, 100);  
    }
}

import {ComponentRef,AfterViewInit,ElementRef,Inject,EventEmitter,Renderer,Directive,HostListener,Input,OnDestroy,Output} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {AnimationService} from './animation.service';

@Directive({
    selector: '[loginOptions]',
    exportAs: 'login-options'
})

export class LoginOptionsDirective implements AfterViewInit, OnDestroy{

    protected _isShown:boolean = false;
    private element:ElementRef;
    private renderer:Renderer;
    private document:any;
    private animationService: AnimationService;

    @Input("login-options")

    @Output() public onShow:EventEmitter<LoginOptionsDirective> = new EventEmitter();
    @Output() public onShown:EventEmitter<LoginOptionsDirective> = new EventEmitter();
    @Output() public onHide:EventEmitter<LoginOptionsDirective> = new EventEmitter();
    @Output() public onHidden:EventEmitter<LoginOptionsDirective> = new EventEmitter();
    
    constructor(private el: ElementRef, private render: Renderer,@Inject(DOCUMENT) document:any, private service: AnimationService){
       this.element = el;
       this.renderer = render;
       this.document = document;
       this.animationService = service;
    }

     public ngOnDestroy():any{
         this._isShown=void 0;
     }
     public ngAfterViewInit():any{}

     public showLoginPanel():void {
         this.onShow.emit(this);
         if(this._isShown){
             return;
         }
         if(this.document && this.document.body){
             this.renderer.setElementClass(this.document.body, "open", true);
         }
         this.animationService.setType("slideInLeft").hide(this.element.nativeElement);
         this.animationService.setType("slideInLeft").animate(this.document.querySelector(".login-panel"));
         this.onHidden.emit(this);
     }
     public showLoginPanelWithID():void {
         this.onShow.emit(this);
         if(this._isShown){
             return;
         }
         if(this.document && this.document.body){
             this.renderer.setElementClass(this.document.body, "open", true);
         }
         this.animationService.setType("slideInRight").hide(this.document.querySelector(".login-panel"));
         this.animationService.setType("slideInRight").show(this.element.nativeElement);
         this.onHidden.emit(this);
        
     }
}
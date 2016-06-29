import {Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

export class AnimationService {
    private _mode = "default";
    private document: any;
    private _animationClasses: string[] = [];
    private _classHistory: string[] = [];

    constructor(@Inject(DOCUMENT) document: any){
        this.document = document;
    }

    private animationEndEvent(element: HTMLElement): string {
        let el = this.document.createElement("endAnimationElement");
        let animations: { [key: string]: string };
        animations = {
        'animation': 'animationend',
        'OAnimation': 'oAnimationEnd',
        'MozAnimation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd'
        };

        for (let animation in animations) {
            if (el.style[animation] !== undefined) {
                return animations[animation];
            }
        }

        return null;
    }

    private animationStartEvent(element: HTMLElement): string {
        let el = this.document.createElement("startAnimationElement");
        let animations: { [key: string]: string };
        animations = {
        'animation': 'animationstart',
        'OAnimation': 'oAnimationStart',
        'MozAnimation': 'animationstart',
        'WebkitAnimation': 'webkitAnimationStart'
        };

        for (let animation in animations) {
            if (el.style[animation] !== undefined) {
                return animations[animation];
            }
        }

        return null;
    }

    public animate(element: HTMLElement,mode="default"): Promise<HTMLElement>{
        return new Promise<HTMLElement>((resolve,reject)=>{
            this.removeCSSClass(element);
            let animationStartEvent = this.animationStartEvent(element);
            let animationEndEvent = this.animationEndEvent(element);
            element.removeAttribute("hidden");
            this.applyCSSStyle(element);
            let startHandler:()=>any;
            if(mode=="hide"){
                    element.setAttribute("hidden","");
                    element.style.display = null;
            }
            element.addEventListener(animationStartEvent, startHandler=()=>{
                element.removeEventListener(animationStartEvent, startHandler);
                return startHandler;
            });
            let endHandler:()=>any;
            element.addEventListener(animationEndEvent,endHandler=()=>{
                element.removeEventListener(animationEndEvent, endHandler);
                this.removeCSSClass(element);
                resolve(element);
                return endHandler;
            });
        });
    }

    public show(element: HTMLElement): Promise<HTMLElement>{
        element.removeAttribute("hidden");
        return this.animate(element,"show");
    }

    public hide(element : HTMLElement): Promise<HTMLElement>{
        element.setAttribute("hidden","");
        return this.animate(element,"hide");
    }
    public setType(type: string): AnimationService{
        if(this._classHistory.indexOf(type) === -1){
            this._classHistory.push(type);
        }
        return this;
    }

    public applyCSSStyle(element: HTMLElement, add=true){
        this._classHistory.forEach((name)=>{
            if(add === true){
                element.classList.add("animated");
                element.classList.add(name);
            } else {
                element.classList.remove(name);
                element.classList.remove("animated");
            }
        });
        return this;
    }

    public removeCSSClass(element : HTMLElement){
        this.applyCSSStyle(element, false);
    }
}
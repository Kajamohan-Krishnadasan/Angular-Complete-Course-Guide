import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appRenderHighlight]',
})
export class RenderHighlightDirective implements OnInit {
  @HostBinding('style.fontSize') fontSize!: string ;

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.setStyle(this.el.nativeElement, 'background-color', 'green');
  }

  // this will be called when the mouse is over the element
  @HostListener('mouseover') onmouseover(event: Event) {
    this.render.setStyle(this.el.nativeElement, 'background-color', 'red');
    this.fontSize = '20px';
  }

  // this will be called when the mouse is out of the element
  @HostListener('mouseleave') onmouseleave(event: Event) {
    this.render.setStyle(this.el.nativeElement, 'background-color', 'black');
    this.render.setStyle(this.el.nativeElement, 'color', 'white');
    this.fontSize = '16px';
  }

  // this will be called when the mouse is clicked on the element
  @HostListener('click') onclick(event: Event) {
    this.render.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    this.render.setStyle(this.el.nativeElement, 'color', 'black');
    this.fontSize = '30px';
  }
}

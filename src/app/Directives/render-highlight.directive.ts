import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appRenderHighlight]',
})
export class RenderHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'red';
  @Input() highlightColor: string = 'yellow';

  @HostBinding('style.fontSize') fontSize!: string;
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    // method 1
    // this.render.setStyle(this.el.nativeElement, 'background-color', 'green');

    // method 2
    this.backgroundColor = 'green';
  }

  // this will be called when the mouse is over the element
  @HostListener('mouseover') onmouseover(event: Event) {
    // method 1
    // this.render.setStyle(this.el.nativeElement, 'background-color', 'red');

    // method 2
    // this.backgroundColor = 'red';
    this.backgroundColor = this.defaultColor;
    this.fontSize = '20px';
  }

  // this will be called when the mouse is out of the element
  @HostListener('mouseleave') onmouseleave(event: Event) {
    // method 1
    // this.render.setStyle(this.el.nativeElement, 'background-color', 'black');
    this.render.setStyle(this.el.nativeElement, 'color', 'white');

    // method 2
    this.backgroundColor = 'black';
    // this.backgroundColor = this.defaultColor;
    this.fontSize = '16px';
  }

  // this will be called when the mouse is clicked on the element
  @HostListener('click') onclick(event: Event) {
    // method 1
    // this.render.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    this.render.setStyle(this.el.nativeElement, 'color', 'black');

    // method 2
    // this.backgroundColor = 'yellow';
    this.backgroundColor = this.highlightColor;
    this.fontSize = '30px';
  }
}

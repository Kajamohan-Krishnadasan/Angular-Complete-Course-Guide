import { Directive, ElementRef, OnInit } from '@angular/core';

// Convert the class into a directive
@Directive({
  // this as attribute
  selector: '[appHighlightText2]',
})
export class HighlightTextDirective2 implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit() {
    (this.element.nativeElement as HTMLElement).style.backgroundColor = 'purple';
  }
}

import { Directive, ElementRef, OnInit } from '@angular/core';

// Convert the class into a directive
@Directive({
  // this as tag name
  selector: 'appHighlightText1',

})
export class HighlightTextDirective1 implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit() {
    (this.element.nativeElement as HTMLElement).style.backgroundColor =
      'yellow';
  }
}

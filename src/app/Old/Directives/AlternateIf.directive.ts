import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAlternateIf]',
})
export class AlternateIfDirective {
  // // method 1
  // @Input() appAlternateIf!: boolean;

  // // if we use this method if the boolean value changes it will work
  // ngOnChanges() {
  //   if (this.appAlternateIf) {
  //     this.viewContainerRef.createEmbeddedView(this.templateRef);
  //   } else {
  //     this.viewContainerRef.clear();
  //   }
  // }

  // method 2
  @Input() set appAlternateIf(condition: boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  // //  if we use this method if the boolean value changes it will not work
  //   ngOnInit() {
  //       if (this.appAlternateIf) {
  //         this.viewContainerRef.createEmbeddedView(this.templateRef);
  //       } else {
  //         this.viewContainerRef.clear();
  //       }
  //     }
}

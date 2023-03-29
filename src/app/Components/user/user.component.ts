import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input('usernameFromParent') username!: string;
  @Input() name: string = '';

  @ContentChild('userSpan') userSpan!: ElementRef;

  constructor() {
    console.log('UserComponent constructor Called');
  }
  
  /*
  ngOnChanges(element: SimpleChanges): void {
    console.log(element);
    console.log('UserComponent ngOnchanges Called');
  }

  ngOnInit(): void {
    console.log('UserComponent ngOnInit Called');
    console.log(this.userSpan);
  }

  // this will affect the performance of the application
  ngDoCheck(): void {
    console.log('UserComponent ngDoCheck Called');
  }

  ngAfterContentInit(): void {
    console.log('UserComponent ngAfterContentInit Called');
    console.log(this.userSpan.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('UserComponent ngAfterContentChecked Called');
  }

  ngAfterViewInit(): void {
    console.log('UserComponent ngAfterViewInit Called');
  }

  ngAfterViewChecked(): void {
    console.log('UserComponent ngAfterViewChecked Called');
  }

  ngOnDestroy(): void {
    console.log('UserComponent ngOnDestroy Called');
  }
  */
}

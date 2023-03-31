import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { filter, interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // this is for the route subscription in Angular Observable
  routeSubscription!: Subscription;

  // this is for the interval observable in rjxs Observable
  intervalSubscription!: Subscription;

  // this is for the custom observable
  customObservableSubscription!: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    /*
     * subscribing to the route observable in Angular
     */
    // this.routeSubscription = this.route.data.subscribe((data: Data) => {
    //   console.log('Angular Observable : ', data);
    // });
    /*****************************************************/
    /*
     * subscribing to the interval observable in rjxs
     */
    // this.intervalSubscription = interval(1000).subscribe((data) => {
    //   // this will print 0, 1, 2, 3,.... every second
    //   console.log('rjxs Observable : ', data);
    // });
    /*****************************************************/
    /*
     * custom observable
     */
    // let customObservable = Observable.create((observer: any) => {
    //   let count = -1;
    //   setInterval(() => {
    //     // this will send the value to the subscriber
    //     observer.next(count);
    //     // this will send the error to the subscriber
    //     if (count > 20) {
    //       observer.error('Count is greater than 20');
    //     }
    //     // this will complete the observable
    //     if (count > 15) {
    //       observer.complete();
    //     }
    //     count += 2;
    //   }, 1000);
    // });
    /*****************************************************/
    /*
     * subscribing to the custom observable
     * without using observable operators
     */
    // this.customObservableSubscription = customObservable.subscribe(
    //   (data: Data) => {
    //     console.log('Custom Observable : ', data);
    //   },
    //   (error: Error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log('Completed');
    //   }
    // );
    /*****************************************************/
    /*
     * using the map operator in the Observable
     */
    // this.customObservableSubscription = customObservable
    //   .pipe(
    //     filter((data: number) => {
    //       if (data > 0) return true;
    //       return false;
    //     }),
    //     map((data: number) => {
    //       data = data + 1;
    //       return 'Count is : ' + data;
    //     })
    //   )
    //   .subscribe(
    //     (data: Data) => {
    //       console.log('Custom Observable : ', data);
    //     },
    //     (error: Error) => {
    //       console.log(error);
    //     },
    //     () => {
    //       console.log('Completed');
    //     }
    //   );
  }

  ngOnDestroy() {
    /*
     * here we are unsubscribing from the observable
     * so that it will not print any more values
     * after the component is destroyed
     * otherwise it will print values even after the component is destroyed
     */
    // this.intervalSubscription.unsubscribe();
    /*****************************************************/
    /*
     * this is for the route subscription
     * this is also not necessary because,
     * angular will do this automatically when the component is destroyed
     */
    // this.routeSubscription.unsubscribe();
    /*****************************************************/
    // this is for the custom observable
    // this.customObservableSubscription.unsubscribe();
  }
}

import { DatePipe,CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";

@Component({
  selector: 'app-dashboard-1',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dashboard-1.component.html',
  styleUrl: './dashboard-1.component.css',
  providers: [DatePipe]
})
export class Dashboard1Component {
  currentDate = new Date();
  
/*    time :any = new Date()
    
  getCurrentDate() {
  setInterval(() => {
  this.time = new Date().toLocaleString; 
  }, 1000);
  } */
  time = new Date();
    rxTime = new Date();
    intervalId :any;
    subscription: Subscription = new Subscription;
  
    ngOnInit() {
      // Using Basic Interval
      this.intervalId = setInterval(() => {
        this.time = new Date();
      }, 1000);
  
      // Using RxJS Timer
      this.subscription = timer(0, 1000)
        .pipe(
          map(() => new Date()),
          share()
        )
        .subscribe(time => {
          let hour = this.rxTime.getHours();
          let minuts = this.rxTime.getMinutes();
          let seconds = this.rxTime.getSeconds();
          //let a = time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
          let NewTime = hour + ":" + minuts + ":" + seconds
          console.log(NewTime);
          this.rxTime = time;
        });
    }
  
    ngOnDestroy() {
      clearInterval(this.intervalId);
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
}

 
    


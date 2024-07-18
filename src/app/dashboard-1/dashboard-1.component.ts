import { Component } from '@angular/core';
import { DatePipe,CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';


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
 
}

import { Component } from '@angular/core';
import { DatePipe,CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-2',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dashboard-2.component.html',
  styleUrl: './dashboard-2.component.css',
  providers: [DatePipe]
})
export class Dashboard2Component {
  currentDate = new Date();
}

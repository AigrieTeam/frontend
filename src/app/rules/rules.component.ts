import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent {
  constructor(private router: Router) {}

  launchGame() {
    this.router.navigate(['/inputuser']);
  }
}

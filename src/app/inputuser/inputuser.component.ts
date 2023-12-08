import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inputuser',
  templateUrl: './inputuser.component.html',
  styleUrls: ['./inputuser.component.scss']
})
export class InputuserComponent {

  constructor(private router: Router) {}

  inputuser: string | undefined

  validateUsername() {
    if (this.inputuser != "") {
      localStorage.setItem('username', this.inputuser!)
      this.router.navigate(['/game'])
    }
  }

}

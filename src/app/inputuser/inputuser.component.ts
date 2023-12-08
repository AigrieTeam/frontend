import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-inputuser',
  templateUrl: './inputuser.component.html',
  styleUrls: ['./inputuser.component.scss']
})
export class InputuserComponent {

  constructor(private router: Router) {}

  inputuser: string | null = null;

  validateUsername() {
    if (this.inputuser != null) {

      // Easter egg
      if (this.inputuser === 'Je ne suis pas aigrie') {
        window.open('https://nosgestesclimat.fr/', '_blank')
        this.inputuser = null
        return
      }

      localStorage.setItem('username', this.inputuser)
      this.router.navigate(['/game'])
    } else {
      alert('Veuillez entrer un nom d\'utilisateur')
    }
  }

}

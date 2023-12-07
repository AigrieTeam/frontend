import { Component } from '@angular/core';
import {
  faClock,
  faMoneyBill,
  faSmog,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-jeu',
  templateUrl: './page-jeu.component.html',
  styleUrls: ['./page-jeu.component.scss'],
})
export class PageJeuComponent {
  icons = {
    faClock: faClock,
    faMoneyBill: faMoneyBill,
    faSmog: faSmog,
    faUser: faUser,
  };
}

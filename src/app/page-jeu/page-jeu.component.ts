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

  protected listeReponse: string[] = [
    "Oui, j'en prends 2",
    "Non, c'est trop cher",
    "Ce n'est pas très abordable sachant que c'est un produit d'import",
  ];
}

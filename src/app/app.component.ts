import { Component } from '@angular/core';
import { CarteJeuComponent } from './carte-jeu/carte-jeu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  protected listeReponse: string[] = [
    "Oui, j'en prends 2",
    "Non, c'est trop cher",
    "Ce n'est pas très abordable sachant que c'est un produit d'import",
  ];
}

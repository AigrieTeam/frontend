import { Component, OnInit } from '@angular/core';
import { CarteJeuComponent } from './carte-jeu/carte-jeu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  keySequence: string[] = [];
  keySequenceString: string[] = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  // ↑ ↑ ↓ ↓ ← → ← → b a
  keySequenceStringIndex = 0;

  keySequenceTrigger() {
    document.addEventListener('keydown', (event) => {
      this.keySequence.push(event.key);
      if (this.keySequenceString[this.keySequenceStringIndex] === event.key) {
        this.keySequenceStringIndex++;
      } else {
        this.keySequenceStringIndex = 0;
      }
      if (this.keySequenceStringIndex === this.keySequenceString.length) {
        this.keySequenceStringIndex = 0;
        this.keySequence = [];
        this.trigger();
      }
    });
  }

  trigger() {
    window.open('https://reseauactionclimat.org/urgence-climatique/', '_blank');
  }

  ngOnInit() {
    this.keySequenceTrigger();
  }

  protected listeReponse: string[] = [
    "Oui, j'en prends 2",
    "Non, c'est trop cher",
    "Ce n'est pas très abordable sachant que c'est un produit d'import",
  ];
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carte-jeu',
  templateUrl: './carte-jeu.component.html',
  styleUrls: ['./carte-jeu.component.scss'],
})
export class CarteJeuComponent {
  @Input() title!: string;
  @Input() question!: string;
  @Input() reponse!: string[];
  @Input() image!: string;
  @Input() info!: string;

  protected liste: boolean = true;
}

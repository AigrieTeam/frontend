import { Component, OnInit } from '@angular/core';
import { ChoicesService } from 'src/services/backend/choices/choices.service';
import { ScenariosService } from 'src/services/backend/scenarios/scenarios.service';
import { StoriesService } from 'src/services/backend/stories/stories.service';
import {
  faClock,
  faMoneyBill,
  faSmog,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { InformationsService } from 'src/services/backend/informations/informations.service';
import { ScenariosChoicesService } from 'src/services/backend/scenarios-choices/scenarios-choices.service';

@Component({
  selector: 'app-page-jeu',
  templateUrl: './page-jeu.component.html',
  styleUrls: ['./page-jeu.component.scss'],
})
export class PageJeuComponent implements OnInit {
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

  stories: any
  story: any

  scenarios: any
  scenario: any

  constructor(
    private storiesService: StoriesService,
    private scenariosService: ScenariosService,
    private choicesService: ChoicesService,
    private informationsService: InformationsService,
    private scenariosChoicesService: ScenariosChoicesService,
  ) {}

  ngOnInit(): void {
    this.storiesService.getStories().then((data) => {
      this.stories = data
      //this.story = this.stories[Math.floor(Math.random() * this.stories.length)]
      this.story = this.stories[0]
      console.log(this.stories)

      this.scenariosService.getScenarios().then((data) => {
        console.log(data);
        this.scenarios = data.filter((scenario: any) => {
          scenario.Story === this.story.id;
        })
        console.log(this.scenarios)
      })
    });
  }


}

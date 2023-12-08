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

  constructor(
    private storiesService: StoriesService,
    private scenariosService: ScenariosService,
    private choicesService: ChoicesService,
    private informationsService: InformationsService,
    private scenariosChoicesService: ScenariosChoicesService,
  ) {}

  ngOnInit(): void {
    this.getScenariosChoices();
  }

  // STORIES

  async getStories() {
    const stories = await this.storiesService.getStories();
    console.log(stories);
  }

  async getStory() {
    const story = await this.storiesService.getStory(2);
    console.log(story);
  }

  //SCENARIOS

  async getScenarios() {
    const scenarios = await this.scenariosService.getScenarios();
    console.log(scenarios);
  }

  async getScenario() {
    const scenario = await this.scenariosService.getScenario(1);
    console.log(scenario);
  }

  //CHOICES

  async getChoices() {
    const choices = await this.choicesService.getChoices();
    console.log(choices);
  }

  async getChoice() {
    const choice = await this.choicesService.getChoice(2);
    console.log(choice);
  }

  //INFORMATIONS

  async getInformations() {
    const informations = await this.informationsService.getInformations();
    console.log(informations);
  }

  async getInformation() {
    const information = await this.informationsService.getInformation(1);
    console.log(information);
  }

  //SCENARIOS CHOICES

  async getScenariosChoices() {
    const informations = await this.scenariosChoicesService.getScenariosChoices();
    console.log(informations);
  }

  async getScenarioChoices() {
    const information = await this.scenariosChoicesService.getScenarioChoices(1);
    console.log(information);
  }
}

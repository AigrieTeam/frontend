import { Component, OnInit } from '@angular/core';
import { ChoicesService } from 'src/services/backend/choices/choices.service';
import { InformationsService } from 'src/services/backend/informations/informations.service';
import { ScenariosService } from 'src/services/backend/scenarios/scenarios.service';
import { StoriesService } from 'src/services/backend/stories/stories.service';
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
export class PageJeuComponent implements OnInit {
  icons = {
    faClock: faClock,
    faMoneyBill: faMoneyBill,
    faSmog: faSmog,
    faUser: faUser,
  };
  
  constructor(private storiesService: StoriesService, private scenariosService: ScenariosService, private choicesService: ChoicesService, private informationsService: InformationsService) {}

  ngOnInit(): void {
    this.getInformation()
  }


  // STORIES

  async getStories() {
    const stories = await this.storiesService.getStories()
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
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScenariosChoicesService {
  url = 'http://www.aigrie-team.fr/api/scenarios_choices';

  async getScenariosChoices() {
    try {
      const stories = await fetch(this.url);
      const stories_jsonned = await stories.json();
      return stories_jsonned;
    } catch (error) {
      console.error(error);
    }
  }

  async getScenarioChoices(id: number) {
    try {
      const story = await fetch(this.url + '/' + id);
      const story_jsonned = await story.json();
      return story_jsonned;
    } catch (error) {
      console.error(error);
    }
  }
}
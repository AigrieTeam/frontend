import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScenariosService {
  url = 'http://www.aigrie-team.fr/api/scenarios';

  async getScenarios() {
    try {
      const scenarios = await fetch(this.url);
      const scenarios_jsonned = await scenarios.json();
      return scenarios_jsonned;
    } catch (error) {
      console.error(error);
    }
  }

  async getScenario(id: number) {
    try {
      const scenario = await fetch(this.url + '/' + id);
      const scenario_jsonned = await scenario.json();
      return scenario_jsonned;
    } catch (error) {
      console.error(error);
    }
  }
}
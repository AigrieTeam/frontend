import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChoicesService {
  url = 'http://localhost:3000/api/choices';

  async getChoices() {
    try {
      const choices = await fetch(this.url);
      const choices_jsonned = await choices.json();
      return choices_jsonned;
    } catch (error) {
      console.error(error);
    }
  }

  async getChoice(id: number) {
    try {
      const choice = await fetch(this.url + '/' + id);
      const choice_jsonned = await choice.json();
      return choice_jsonned;
    } catch (error) {
      console.error(error);
    }
  }
}

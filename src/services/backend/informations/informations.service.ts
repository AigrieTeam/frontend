import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformationsService {

  url = 'http://localhost:3000/api/informations'

  async getInformations() {
    try {
      const informations = await fetch(this.url);
      const informations_jsonned = await informations.json();
      return informations_jsonned;
    } catch (error) {
      console.log(error)
    }
  }

  async getInformation(id: number){
    try {
      const information = await fetch(this.url + '/' + id);
      const information_jsonned = await information.json();
      return information_jsonned;
    } catch (error) {
      console.log(error);
    }
  }
}

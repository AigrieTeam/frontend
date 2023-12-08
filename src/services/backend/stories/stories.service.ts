import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  url = 'http://localhost:3000/api/stories';

  async getStories() {
    try {
      const stories = await fetch(this.url);
      const stories_jsonned = await stories.json();
      return stories_jsonned;
    } catch (error) {
      console.error(error);
    }
  }

  async getStory(id: number) {
    try {
      const story = await fetch(this.url + '/' + id);
      const story_jsonned = await story.json();
      return story_jsonned;
    } catch (error) {
      console.error(error);
    }
  }
}

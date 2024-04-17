import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-next',
  templateUrl: './game-next.component.html',
  styleUrls: ['./game-next.component.scss']
})
export class GameNextComponent implements OnInit {
  footballMatches: any[] = [];

  private apiUrl = 'https://api.football-data.org/v2/';
  private apiKey = 'b15c0be9bdd84016b736ea883720c774';

  constructor() { }

  ngOnInit(): void {
    this.fetchFootballMatches();
  }

  async fetchFootballMatches() {
    const headers = new Headers({
      'X-Auth-Token': this.apiKey
    });

    try {
      const response = await fetch(this.apiUrl, { headers });
      if (!response) {
        throw new Error('Network response was not ok.');
      }
      const footballData = await response.json();
      this.footballMatches = footballData.matches;
    } catch (error) {
      console.error('Fehler beim Abrufen von Fußballspielen:', error);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../football-data.service';

@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  styleUrl: './premier-league.component.scss'
})
export class PremierLeagueComponent implements OnInit{
  footballMatches: any[] = [];

  constructor(private footballDataService: FootballDataService) { }

  ngOnInit(): void {
    this.fetchFootballMatches();
  }

  fetchFootballMatches(): void {
    this.footballDataService.getFootballMatches().subscribe(
      (matches: any) => {
        this.footballMatches = matches.matches;
        console.log(this.footballMatches)
      },
      (error: any) => {
        console.error('Error fetching football matches:', error);
      }
    );
  }
}

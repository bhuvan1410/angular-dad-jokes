import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-dad-jokes',
  templateUrl: './dad-jokes.component.html',
  styleUrls: ['./dad-jokes.component.css']
})
export class DadJokesComponent implements OnInit {
  jokes: string[] = [];
  currentJokeIndex = 0;

  constructor() { }

  ngOnInit(): void {

    this.fetchJokes();
  }

  fetchJokes() {
    const numberOfJokes = 20; 
    axios.get(`https://icanhazdadjoke.com/search?limit=${numberOfJokes}`, {
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      this.jokes = response.data.results.map((joke: any) => joke.joke);
    })
    .catch(error => {
      console.error(error);
    });
  }

  nextJoke() {

    this.currentJokeIndex = (this.currentJokeIndex + 1) % this.jokes.length;
  }
}

import { Restaurant } from './../restaurant';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    // call the function when the component in loaded
    this.getRestData();
  }
  // get the data from the API
  getRestData() {
    this.httpClient
      .get<any>('https://foodbukka.herokuapp.com/api/v1/restaurant')
      .subscribe((response) => {
        let results = response.Result;
        this.restaurants = results;
      });
  }
}

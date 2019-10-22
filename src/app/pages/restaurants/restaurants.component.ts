import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: 'restaurants.component.html',
  styleUrls: ['restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {

  constructor(private restaurantService: RestaurantsService) { }

  restaurants: Restaurant[];
  selectedRestaurant: Restaurant;

  ngOnInit() {
    this.getRestaurants();
  }

  onSelect(restaurant: Restaurant): void {
    this.selectedRestaurant = restaurant;
    console.log(restaurant.nome);
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe(args => this.restaurants = args);
    // this.restaurantService.getResources()
    //   .subscribe(restaurants => {
    //     console.log(JSON.stringify(restaurants))
    //     this.restaurants = restaurants;
    //   })
  }

}

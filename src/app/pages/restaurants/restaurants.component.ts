import { Component, OnInit } from "@angular/core";
import { Restaurant } from 'src/app/restaurant';
import { RestaurantsService } from 'src/app/restaurants.service';

@Component({
  selector: "app-restaurants",
  templateUrl: "restaurants.component.html",
  styleUrls: ["restaurants.component.scss"],
})
export class RestaurantsComponent implements OnInit {
  constructor(private restaurantService: RestaurantsService) { }
  
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant;

  ngOnInit() {
    this.gerRestaurants();
  };

  onSelect(restaurant: Restaurant): void {
    this.selectedRestaurant = restaurant;
    console.log(restaurant.nome);
  }

  gerRestaurants(): void {
    this.restaurantService.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}

import { Component, OnInit } from "@angular/core";
import { MENUS } from 'src/app/mock-menus';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-menus",
  templateUrl: "menus.component.html",
  styleUrls: ["menus.component.scss"]
})
export class MenusComponent implements OnInit {
 
  private idRestaurant: string = "";

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.idRestaurant = params.get('id');
      console.log(this.idRestaurant)
    });
  }

  menus = MENUS;

  ngOnInit() {};
}

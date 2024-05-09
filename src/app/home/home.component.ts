import { Component } from '@angular/core';
import { HeroService } from '../hero.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private service: HeroService){
    this.service.Service_Provider('get_schools',{"country_id":"India"}).then((schoolData : any)=>{
    });
  }

}

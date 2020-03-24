import { Component, OnInit } from '@angular/core';
import{ CoronaService } from './corona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'corona-app';

  id:0;
  locations: [];
  confirmed: 0;
  deaths: 0;
  recovered: 0;

  constructor(private coronaService:CoronaService){}

  ngOnInit(){
    this.coronaService.getLocations().subscribe(data => this.getTodos(data));
  }
  latestData(data){
    this.confirmed=data.location.latest.confirmed;
    this.deaths=data.location.latest.deaths;
    this.recovered=data.location.latest.recovered;
  }
  getTodos(data){
    this.locations = data.locations;
  }  
  onChange(id){
    this.coronaService.getByCountryID(id).subscribe(data => this.latestData(data));
  }

}

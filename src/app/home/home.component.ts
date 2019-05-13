import { Component, OnInit } from '@angular/core';
import { HomeService } from "./home.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  placeholderValue = "Selectionner un championat";
  allLeags: any;
  selectedLeague: any;
  selectedClube: any;
  leagIndex: Number = 0;
  
  constructor(private homeService : HomeService) { }

  ngOnInit() {
    this.homeService.getListOfChampions()
      .subscribe(data => {
        this.allLeags = data.countrys;
      })
  }

  changeValue(value){
    this.selectedLeague = value;
  }

  setClube(event){
    this.selectedClube = event;
  }

}

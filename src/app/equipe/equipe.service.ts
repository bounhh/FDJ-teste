import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private http : HttpClient ) { }

  public getListOfclube(league: any): any {
    return this.http.get("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=" + league);
  }

  public showTeamsClube(item){
    console.log(item);
  }

}

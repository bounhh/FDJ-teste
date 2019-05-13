import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : HttpClient) { }

  public getListOfChampions(): any {
    return this.http.get("https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?s=Soccer");
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JoueursService {

  constructor(private http : HttpClient) { }

  public getTeams(id){
    return this.http.get("https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=" + id);
  }
}

import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { JoueursService } from './joueurs.service';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent implements OnInit {

  @Input() teams: any;
  clubeTeam: any;

  constructor(private joueursService : JoueursService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.teams.currentValue){
      this.joueursService.getTeams(changes.teams.currentValue.idTeam)
        .subscribe(data => {
          this.clubeTeam = data;
        });
    }
  }

}

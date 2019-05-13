import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { EquipeService } from './equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  @Input() league: any;  
  @Output() selectedClube: EventEmitter<String> = new EventEmitter<String>();
  allClubes : any;
  
  /** Event that inform the select status change */
  @Output() showPlayersOfThisClube: EventEmitter<any> = new EventEmitter<any>();

  constructor(private equipeService : EquipeService) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    this.equipeService.getListOfclube(changes.league.currentValue)
    .subscribe(data => {
      this.allClubes = data.teams;
    });
  }

  showTeamsClube(item){
    this.selectedClube.emit(item);
  }

}

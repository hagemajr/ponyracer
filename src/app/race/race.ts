import { Component, input } from '@angular/core';
import { RaceModel } from '../models/race-model';
import { Pony } from '../pony/pony';
import { PonyModel } from '../models/pony-model';
import { DatePipe } from '@angular/common';
import { FromNowPipe } from '../from-now-pipe';


@Component({
  selector: 'pr-race',
  imports: [Pony, DatePipe, FromNowPipe],
  templateUrl: './race.html',
  styleUrl: './race.css'
})
export class Race {
  readonly raceModel = input.required<RaceModel>();

  protected betOnPony(ponyModel: PonyModel) {
    console.log(`Bet on ${ponyModel.name}`);
  }
}

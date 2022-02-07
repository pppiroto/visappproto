import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as input from '@grapecity/wijmo.input';

import { Actor } from 'src/app/models/sakila';
import { SakilaService } from 'src/app/services/sakila.service';

@Component({
  selector: 'app-sakila',
  templateUrl: './sakila.component.html',
  styleUrls: ['./sakila.component.css']
})
export class SakilaComponent implements OnInit {
  actors: Actor[] = [];
  constructor(private sakilaService: SakilaService) { }

  ngOnInit(): void {
  }

  flexInitialized(flexgrid: wjcGrid.FlexGrid) {
    let sd = new wjcCore.SortDescription('actor_id', true);
    flexgrid.collectionView.sortDescriptions.push(sd);
    flexgrid.collectionView.currentChanged.addHandler(this._updateCurrentInfo.bind(this));
    this._updateCurrentInfo();
  }

  private _updateCurrentInfo() {
  }

  async searchActor() {
    try {
      this.actors = await this.sakilaService.getActor().toPromise();
    } catch(error) {
      console.log(error);
    }
  }
}

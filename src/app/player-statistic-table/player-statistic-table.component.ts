import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-player-statistic-table',
  templateUrl: './player-statistic-table.component.html',
  styleUrls: ['./player-statistic-table.component.scss'],
})
export class PlayerStatisticTableComponent {
  private gridApi: any;
  private gridColumnApi: any;
  private battingStatsData = 'https://raw.githubusercontent.com/Adrian609/player-catalog/main/src/assets/Data/BattingStats.json';
  rowData: any;
  columnDefs = [
    {
      headerName: 'Players',
      field: 'playerID',
      sortable: true,
      filter: true,
      minWidth: 120,
    },
    { headerName: 'Year', field: 'yearID', sortable: true, filter: true },
    { field: 'stint', sortable: true },
    {
      headerName: 'Teams',
      field: 'teamID',
      sortable: true,
      filter: 'agNumberColumnFilter',
      minWidth: 120,
    },
    {
      headerName: 'League',
      field: 'lgID',
      sortable: true,
      filter: 'agTextColumnFilter',
    },
    { field: 'G' },
    { field: 'AB' },
    { field: 'R' },
    { field: 'H' },
    { field: '2B' },
    { field: '3B' },
    { field: 'HR' },
    { field: 'RBI' },
    { field: 'SB' },
    { field: 'CS' },
    { field: 'BB' },
    { field: 'SO' },
    { field: 'IBB' },
    { field: 'HBP' },
    { field: 'SH' },
    { field: 'SF' },
    { field: 'GIDP' },
  ];
  defaultColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
    resizable: true,
    suppressMenuHide: false,
  };

  constructor(private http: HttpClient) {
  }

  onGridReady(params: { api: any; columnApi: any }): any {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.rowData = this.http.get(this.battingStatsData);
  }
}

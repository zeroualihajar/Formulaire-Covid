import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule, GoogleMap } from '@angular/google-maps';
import { GoogleMapsAPIWrapper } from '@agm/core';


declare var google;
 

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor() { }

  ngOnInit() {
    
  google.charts.load('current', {
     'packages': ['geochart'],
     // Note: you will need to get a mapsApiKey for your project.
     // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
     'mapsApiKey': 'AIzaSyBxUszCfNRtQb9snnD4Td8C_RG3jE-Wra8'
   });
  google.charts.setOnLoadCallback(this.showChart());
  }
  

  showChart()
  {
   
      var data =  google.visualization.arrayToDataTable([
        ['City',   'Population', 'Area'],
        ['Rome',      2761477,    1285.31],
        ['Milan',     1324110,    181.76],
        ['Naples',    959574,     117.27],
        ['Turin',     907563,     130.17],
        ['Palermo',   655875,     158.9],
        ['Genoa',     607906,     243.60],
        ['Bologna',   380181,     140.7],
        ['Florence',  371282,     102.41],
        ['Fiumicino', 67370,      213.44],
        ['Anzio',     52192,      43.43],
        ['Ciampino',  38262,      11]
      ]);

      var options = {
        region: 'IT',
        displayMode: 'markers',
        colorAxis: {colors: ['green', 'blue']}
      };

      var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    };
  
}

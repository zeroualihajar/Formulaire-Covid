import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { DataService } from 'src/app/Services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Tableau } from './tableau';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css'],
})
export class TableauComponent implements OnInit {
  data1:number;

  // chart:any;
  // pie: any;
  // doughnut: any;
  // data: any;
  // tableau = new Tableau();

  // constructor(
  //   private dataService: DataService,
  //   private route: ActivatedRoute
  // ) {}



  // ngOnInit() {
  //   this.route.snapshot.params;
  //   this.dessiner();

  //  }

  //  dessiner() {
  //    this.getGraphes();



  //    console.log(this.tableau.nonTraite, this.tableau.positive, this.tableau.negative);

  //    var myChart = new Chart('myChart', {
  //      type: 'bar',
  //      data: {
  //        labels: ['Positive', 'Négative'],
  //        datasets: [
  //          {
  //            label: 'Résultats',
  //            data: [
  //              this.tableau.positive,
  //              this.tableau.negative,
  //            ],
  //            backgroundColor: [
  //              'rgba(54, 162, 235, 0.2)',
  //              'rgba(153, 102, 255, 0.2)',
  //            ],
  //            borderColor: [
  //              'rgba(54, 162, 235, 1)',
  //              'rgba(153, 102, 255, 1)',
  //            ],
  //            borderWidth: 1,
  //          },
  //        ],
  //      },
  //      options: {
  //        scales: {
  //          yAxes: [
  //            {
  //              ticks: {
  //                beginAtZero: true,
  //              },
  //            },
  //          ],
  //        },
  //      },
  //    });


  //    //------------ cercle---------
  //    this.doughnut = new Chart('doughnut', {
  //      type: 'doughnut',
  //      options: {
  //        responsive: true,
  //        title: {
  //          display: true,
  //          text: 'Test Traité / Teste Non traité',
  //        },
  //        legend: {
  //          position: 'top',
  //        },
  //        animation: {
  //          animateScale: true,
  //          animateRotate: true,
  //        },
  //      },
  //      data: {
  //        datasets: [
  //          {
  //            data: [this.tableau.nonTraite, this.tableau.positive + this.tableau.negative],
  //            backgroundColor: ['red', 'blue'],
  //            label: 'Dataset 1',
  //          },
  //        ],
  //        labels: ['Non traité', 'Traité'],
  //      },
  //    });

  //    this.pie = new Chart('pie', {
  //      type: 'pie',
  //      options: {
  //        responsive: true,
  //        title: {
  //          display: true,
  //          text: 'Pie Chart',
  //        },
  //        legend: {
  //          position: 'top',
  //        },
  //        animation: {
  //          animateScale: true,
  //          animateRotate: true,
  //        },
  //      },
  //      data: {
  //        datasets: [
  //          {
  //            data: [this.tableau.nonTraite, this.tableau.positive + this.tableau.negative].reverse(),
  //            backgroundColor: ['red', 'blue'],
  //            label: 'Dataset 1',
  //          },
  //        ],
  //        labels: ['Non traité', 'Traité'],
  //      },
  //    });
  //    this.tableau.nonTraite = this.dataService.getNonTraite();
  //    this.tableau.positive = this.dataService.getPositive();
  //    this.tableau.negative = this.dataService.getNegative();

  //  }


  //     addData(chart, label, data) {
  //       chart.data.labels.push(label);
  //       chart.data.datasets.forEach((dataset) => {
  //         dataset.data.push(data);
  //       });
  //       chart.update();
  //     }

  //     removeData(chart) {
  //       chart.data.labels.pop();
  //       chart.data.datasets.forEach((dataset) => {
  //         dataset.data.pop();
  //       });
  //       chart.update();
  //     }

  //     updateChartData(chart, data, dataSetIndex) {
  //       chart.data.datasets[dataSetIndex].data = data;
  //       chart.update();
  //     }

  // getGraphes() {
  //   this.dataService.graphes().subscribe((res) => {
  //     // this.data = res;
  //     // this.tableau = this.data;
  //     // console.log(this.data);
  //   });
  // }
  tableau= new Tableau();

  LineChart = [];
  BarChart = [];
  PieChart = [];

  constructor(
    private dataService: DataService, private route: ActivatedRoute, private http:HttpClient,
  ) { }

  async ngOnInit() {
    // Line chart:
    // this.LineChart = new Chart('lineChart', {
    //   type: 'line',
    // data: {
    // labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
    // datasets: [{
    //     label: 'Variation du nombre des tests négatif pendant un mois',
    //     data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
    //     fill:false,
    //     lineTension:0.2,
    //     borderColor:"red",
    //     borderWidth: 1
    // }]
    // },
    // options: {
    // title:{
    //     text:"Line Chart",
    //     display:true
    // },
    // scales: {
    //     yAxes: [{
    //         ticks: {
    //             beginAtZero:true
    //         }
    //     }]
    // }
    // }
    // });
    this.route.snapshot.params;
    await this.dataService.graphes();
    await this.dataService.genre();

    // console.log(this.dataService.getPositive())
    // this.dataService.getNegative()
    // Bar chart:
    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ["Positif", "Négatif"],
        datasets: [{
          label: 'Les Résultats',
          data: [this.dataService.getPositive(), this.dataService.getNegative()],
          backgroundColor: [
            'rgba(173, 79, 9)',
            'rgba(128, 0, 128)',

          ],
          borderColor: [
            'rgba(173, 79, 9)',
            'rgba(128, 0, 128)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Statistiques concernant les résultats positifs et négatifs",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });


    // pie chart:
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ["Non Traité", "Traité"],
        datasets: [{
          label: '# of Votes',
          data: [this.dataService.getNonTraite(), this.dataService.getPositive()+this.dataService.getNegative()],

          backgroundColor: [
            'rgba(54, 16, 235, 0.5)',
            'rgba(255, 206, 86, 1)',

          ],
          borderColor: [
            'rgba(54, 16, 235, 1)',
            'rgba(255, 206, 86, 1)',

          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Statistiques concernant les tests Traités et les tests Non Traités",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });



    this.PieChart = new Chart('pieChart2', {
      type: 'pie',
      data: {
        labels: ["Homme", "Femme"],
        datasets: [{
          label: '# of Votes',
          data: [this.dataService.getHomme(), this.dataService.getFemme()],

          backgroundColor: [
            'rgba(0,255,0,0.5)',
            'rgba(25, 0, 150, 0.9)',

          ],
          borderColor: [
            'rgba(0, 255, 0, 1)',
            'rgba(25, 0, 150, 1)',

          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "La distribution des demandes selon le Genre des patients",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  }
}

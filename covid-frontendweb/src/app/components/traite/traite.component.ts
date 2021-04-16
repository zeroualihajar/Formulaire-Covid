import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { Traite } from './traite.model';

@Component({
  selector: 'app-traite',
  templateUrl: './traite.component.html',
  styleUrls: ['./traite.component.css']
})
export class TraiteComponent implements OnInit {

  data: any;
  traite = new Traite();
  constructor(private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.route.snapshot.params;
    this.dataService.getTraiter().subscribe(
      res => {
        this.data = res;
        this.traite = this.data;
      },
      error =>{
        console.log(error)
      }
    )

  }

}

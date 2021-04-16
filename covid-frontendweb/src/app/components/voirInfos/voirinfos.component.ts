import { Component, OnInit } from '@angular/core';
import { Infos } from './voirinfos';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-voirinfos',
  templateUrl: './voirinfos.component.html',
  styleUrls: ['./voirinfos.component.css']
})
export class VoirinfosComponent implements OnInit {

  id: number;
  data: any;
  infos = new Infos();
  resultat:string;
  dt:any;
  public error:null;
  constructor(private route: ActivatedRoute,
    private dataService: DataService) { }

    ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
    // await 
    this.getResult();
  //  this.resultat=this.dataService.getValeur();
  }

  getData() {

    this.dataService.getInfos(this.id).subscribe(
      res => {
        this.data = res;
        this.infos = this.data;
    }
    ,
    error => {
      this.handleError(error)
      console.log("Error")
    })
  }
  getResult() {
     this.dataService.getRes(this.id).subscribe(
       res => {
         this.dt = res;
        this.resultat = this.dt['resultat'][0]['resultat'];
    })
  }

  handleError(error){
    this.error=error.error.message;
  }



}

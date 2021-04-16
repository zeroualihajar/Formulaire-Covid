import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { Traitement } from './traitement';

@Component({
  selector: 'app-traitement',
  templateUrl: './traitement.component.html',
  styleUrls: ['./traitement.component.css']
})
export class TraitementComponent implements OnInit {

  id:number;
  data:any;
  traitement = new Traitement();
  constructor(private route: ActivatedRoute,
    private dataService: DataService,
    private router:Router) { }


   ngOnInit(): void{
    this.id=this.route.snapshot.params.id;
    this.getData();

  }

  getData(){
    this.dataService.getTraitement(this.id).subscribe(res => {
      this.data = res;
      
      this.traitement = this.data;
      this.traitement.patient_id = this.traitement[0]['patient_id']
    })
  }

  updateData(){
    console.log(this.id,this.traitement.resultat);
    this.dataService.getUpdate(this.id,this.traitement.resultat).subscribe(res=>{
      console.log("inside");
      this.router.navigateByUrl('/traite');

    })

  }
}

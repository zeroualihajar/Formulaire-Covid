import { Component, OnInit } from '@angular/core';
import { PersonelInfoService } from 'src/app/services/personel-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-personnel',
  templateUrl: './info-personnel.page.html',
  styleUrls: ['./info-personnel.page.scss'],
})
export class InfoPersonnelPage implements OnInit {

  form ={
    first_name: null,
    last_name : null,
    sexe: null,
    age: null,
    address:null,
    city: null                 
  ,
    phone: null

  }
  citie=[
    {name:'Casablanca'},{name:'Marrakech'},{name:'Fès'},{name:'Tanger'},{name:'Salé'},{name:'Meknès'},{name:'Rabat'},{name:'Oujda'},{name:'Kénitra'},{name:'Agadir'},{name:'Tétouan'},
      {name:'Témara'},{name:'Safi'},{name:'Mohammédia'},{name:'Khouribga'},{name:'El Jadida'},{name:'Béni Mellal'}	
      ,{name:'Nador'},{name:'Taza'},{name:'Khémisset'}, 
  ]
  info = new Array();

  ver :boolean=false;
  constructor(private personelInfoS: PersonelInfoService,
              private route :Router) { 
               
              }

     ngOnInit() {
    this.getInfo();
   
     
  }

  onSubmit()
  {
    this.personelInfoS.personelInfoStore(this.form).subscribe(
      data =>this.route.navigateByUrl('home'),
        
    )
  }

  test(event)
 {
  this.form.sexe=event.detail.value;
 }

 getInfo()
 {
   this.personelInfoS.getInfo().subscribe(
    () => {
      this.info = this.personelInfoS.getDataInfo();
      if(this.info!=[])
      {
        this.ver=true;
      }
      console.log(this.info)
    }
    
  );
 }

 ville(event)
 {
   this.form.city=event.detail.value
 }
}

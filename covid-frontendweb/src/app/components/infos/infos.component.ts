import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { Infos } from './infos';
@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  id: number;
  data: any;
  infos = new Infos() ;

  constructor(private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData() {
    this.dataService.getInfos(this.id).subscribe(res => {
      this.data = res;
      this.infos = this.data;
    })
  }
  openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

  closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { Patient } from './patient.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],

})
export class PatientComponent implements OnInit {
  id: any;
  patient = new Patient();
  data: any;

  constructor(private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.route.snapshot.params;
    this.dataService.getOnePatient().subscribe(res => {
      this.data = res;
      this.patient = this.data;
    })
  }

}

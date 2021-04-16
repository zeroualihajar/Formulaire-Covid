import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  results = new Array();
  constructor(
      private questionS:QuestionsService,
      private router :Router
  ) { console.log(this.results);}
  
  getResult()
  {
    this.questionS.getResult().subscribe(
      () => {
        this.results = this.questionS.getDataResult();
        
        console.log('trait')
      },
      error =>{
        console.log(error)
      }
    );
  }
  ngOnInit() {
    
    this.getResult();
  }

  
}

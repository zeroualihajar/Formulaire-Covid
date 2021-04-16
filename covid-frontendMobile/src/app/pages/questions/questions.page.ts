import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  checkedIdx=0;
  formShow={
    test_corona :[
      {id:1, content:'Non effectué.'},
      {id:2, content:'Oui. et le résultat du test est négatif.'},
      {id:3, content:'Oui et en attente du résultat du test .'},
      {id:4, content:'Oui. et le résultat du test est positif.'}
    ],
    isolement_medical: [
      {id:1, content:'Je suis en isolement médical parce que j\'ai rencontré une personne contaminée.',isChecked:false},
      {id:2, content:'Je suis en isolement médical parce que j\'ai des symptômes.',isChecked:false},
      {id:3, content:'Je ne suis pas en isolement médical mais j\'étais proche de quelqu\'un en isolement médical.',isChecked:false},
      {id:4, content:'Je ne suis pas en isolement médical.',isChecked:false}
    ],
    situations : [
                  {id:1, content:'Insuffisance cardiaque chronique.',isChecked:false},
                  {id:2, content:'Cas précédent de crise cardiaque.',isChecked:false},
                  {id:3, content:'Diabète.',isChecked:false},
                  {id:4, content:'Hypertension artérielle.',isChecked:false},
                  {id:5, content:'Maladie rénale chronique.',isChecked:false},
                  {id:6, content:'Maladie pulmonaire chronique.',isChecked:false},
                  {id:7, content:'Le cancer.',isChecked:false},
                  {id:8, content:'Système immunitaire affaibli.',isChecked:false},
                  {id:9, content:'Prenez des médicaments anti-immuns.',isChecked:false},
    ],
    symptomes :[
      {id:1, content:'Fièvre supérieure à 38 degrés.',isChecked:true},
      {id:2, content:'Difficulté à respirer.',isChecked:false},
      {id:3, content:'Maux d\'estomac.',isChecked:false},
      {id:4, content:'Douleurs musculaires.',isChecked:false},
      {id:5, content:'Fatigue ou faiblesse importante.',isChecked:false},
      {id:6, content:'Congestion nasale ou nez qui coule.',isChecked:false},
      {id:7, content:'Inflammation de la gorge.',isChecked:false},
      {id:8, content:'Toux sèche.',isChecked:false},
      {id:9, content:'Toux Avec mucus.',isChecked:false},
    ],
    temps_tousse : null,
  }
  form={
    test_corona:'',
    isolement_medical:'',
    situations:'',
    symptomes:'',
    temps_tousse:0
  }
  constructor(private questionS : QuestionsService,
              private route : Router) { 
          
              }

  ngOnInit() { 
  }

  onSubmit($event)
  {
    console.log(this.form.test_corona['content']+
      this.form.isolement_medical['content']+
      this.form.situations ['content']+
      this.form.symptomes['content']+
      this.form.temps_tousse )

    this.questionS.questionsResponse(this.form).subscribe(
      data =>this.handleResponse(data),
      error =>this.handleError(error)
    )
  }
  changeStatR(content: string) {
    this.formShow.situations.forEach(x => {
     
        if(x.content === content) {
          x.isChecked= true;
          alert('changedsi');
        }
    })
 }

 changeStatIm(content){
  this.formShow.symptomes.forEach(x => {
     
    if(x.content === content) {
      x.isChecked= true;
      alert('changedsy');
    }
    
})
 }

 situations(event)
 {
  this.form.situations=this.form.situations.concat(event.detail.value);
 }
 symptomes(event){
  this.form.symptomes=this.form.symptomes.concat(event.detail.value);
 }
 test(event){

 }

 handleResponse(data){
   this.route.navigateByUrl('home')
 }
 handleError(error){
   console.log(error)
 }
}

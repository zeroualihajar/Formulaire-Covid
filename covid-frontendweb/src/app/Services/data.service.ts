import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  variable: any;
  nonTraite:any;
  positive:any;
  negative:any;
  Homme:any;
  Femme:any;
  constructor(private httpClient: HttpClient) {}

  getOnePatient() {
    return this.httpClient.get('http://127.0.0.1:8000/api/showStatut');
  }

  getTraitement(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/traiter/' + id);
  }

  getInfos(id) {
    console.log(id)
    return this.httpClient.get('http://127.0.0.1:8000/api/infos/' + id);
  }

  getUpdate(id, data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/updateRes', {
      id: id,
      resultat: data,
    });
  }

  getTraiter() {
    return this.httpClient.get('http://127.0.0.1:8000/api/dejaTraiter');
  }

  getRes(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/getRes/' + id).pipe(
      tap(
        (data) => {
          this.variable = data['resultat'][0]['resultat'];
        },
        (error) => {
          console.log('error!!!!!!!!!!!!!!!!');
        }
      )
    );
  }

  // getValeur() {
  //   return this.variable;
  // }

  graphes() {
    return this.httpClient.get('http://127.0.0.1:8000/api/graphe').toPromise().then(
        (data) => {
          this.nonTraite = data['nonTraite'][0]['nonTraite'];
          this.positive = data['positive'][0]['positive'];
          this.negative = data['negative'][0]['negative'];
        },
        (error) => {
          console.log('error!!!!!!!!!!!!!!!!');
        }
      )
  }

  public getNonTraite() {
    return this.nonTraite;

  }
  public getPositive() {
    return this.positive;
  }
  public getNegative() {
    return this.negative;
  }

  genre() {
    return this.httpClient.get('http://127.0.0.1:8000/api/genre').toPromise().then(
      (data) => {
        this.Homme = data['Homme'][0]['Homme'];
        this.Femme = data['Femme'][0]['Femme'];

      },
      (error) => {
        console.log('error!!!!!!!!!!!!!!!!');
      }
    )
  }

  getHomme()
  {
    return this.Homme;
  }

  getFemme()
  {
    return this.Femme;
  }


}

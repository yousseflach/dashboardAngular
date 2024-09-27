import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { apiurl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //declaration des variables==========================================================================


  constructor(private router: Router, private http: HttpClient) { }

  login(mail: string): boolean | string {
    let isconnecter = false;
    const params = new HttpParams()
      .set('mail', mail);

    this.http.post(`${apiurl}/login/authenticate`, {}, { params }).subscribe(
      (response) => {
        console.log(response);
        if (response == null) {
          alert("Login echoue");
          isconnecter = false;
          return isconnecter;
        } 
        else{
        localStorage.setItem('utilisateur', JSON.stringify(response));
        alert("Login reussi");
        this.router.navigate(['/taches']);
        isconnecter = true;
        return isconnecter;}
      },(error) => {
        alert("Login echoue");
        isconnecter = false;
        return isconnecter;
      }
    );
    return isconnecter;
  }
}

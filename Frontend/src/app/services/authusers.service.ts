import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthusersService {
  constructor(private http: HttpClient) {}
  //auth
  postData(data: any) {
    return this.http.post('https://skoolify-api.vercel.app/register', data);
  }
  loginData(data: any) {
    return this.http.post('https://skoolify-api.vercel.app/login', data);
  }

  forgotPassword(data:any){
    return this.http.post('https://skoolify-api.vercel.app/account/forgotPassword', data);
  }
  //saving data
  saveToken(token: string) {
    sessionStorage.setItem('key', token);
  }
}

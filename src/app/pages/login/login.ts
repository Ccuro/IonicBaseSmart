import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';
import { ApiService } from '../../services/api.service';
import { HttpHeaders } from '@angular/common/http';
import swal from "sweetalert2";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})

export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;
  Datalogin:any;
  
  constructor(
    private api: ApiService,
    public userData: UserData,
    public router: Router
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;
    
    const headers = new HttpHeaders({
      'X-Amz-Target':'AWSCognitoIdentityProviderService.InitiateAuth',
      'Content-Type':'application/x-amz-json-1.1'
    });
    const data_post = {
      AuthFlow: "USER_PASSWORD_AUTH",
      AuthParameters: {
          PASSWORD: this.login.password,
          USERNAME: this.login.username
      },
      ClientId: "64co804e4rom9je29tevbei3mf"
    } 

    if (form.valid) {
      this.api.LoginUser(data_post, headers).subscribe((data: any) => {
        console.log(data);
        
        this.Datalogin = data;
        localStorage.setItem('token', data.AuthenticationResult.IdToken);
        localStorage.setItem('username', this.login.username);

        this.router.navigateByUrl('/app/tabs/schedule');
      },(data: any) => {
        if(data.name == "HttpErrorResponse"){
          swal.fire({
            title: "Error",
            icon: "error",
            text:'Hubo un error en Autentificación',
            showDenyButton: true,
            confirmButtonText: "Confirmar",
            denyButtonText: "Aceptar",
            denyButtonColor: 'grey',
            confirmButtonColor: '#3085d6',
            heightAuto: false
          })
        }
      });
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}

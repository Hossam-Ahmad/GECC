import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email = '';
  public password = '';

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    if (this.email !== '' && this.password !== '') {
      this.authService.login(this.email, this.password).subscribe(result => {
        if (result['Authenicated']) {
          console.log('Authenicated');
        } else {
          console.log('Not Authenicated');
        }
        console.log(result);
      });
    } else {
      alert('Enter email and password');
    }
  }

}

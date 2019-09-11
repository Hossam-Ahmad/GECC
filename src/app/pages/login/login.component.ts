import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email = '';
  public password = '';
  public height;

  constructor(public authService: AuthService, public router: Router) {
    this.height = window.innerHeight + 'px';
  }

  ngOnInit() {
  }

  login() {
    if (this.email !== '' && this.password !== '') {
      this.authService.login(this.email, this.password).subscribe(result => {
        if (result['Authenicated']) {
          this.authService.setToken(result['token']);
          this.router.navigateByUrl('/cpanel/dashboard');
        } else {
          alert('Wrong email or password');
        }
      });
    } else {
      alert('Enter email and password');
    }
  }

}

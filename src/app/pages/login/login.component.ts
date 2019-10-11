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
      this.authService.login().subscribe(result => {
        if (this.email === result[0]['admin_username'] && this.password === result[0]['admin_password']) {
          this.authService.setToken(result[0]['token']);
          this.router.navigateByUrl('/cpanel/dashboard');
        } else {
          alert('هناك خطأ في الايميل او كلمة المرور');
        }
      });
    } else {
      alert('ادخل كل البيانات');
    }
  }

  change() {
    this.router.navigateByUrl('/cpanel/change');
  }

  forget() {
    this.router.navigateByUrl('/cpanel/forget');
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { LoginService } from '../service/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  submitted = false;
  data: any;
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthenticationService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  signin(signinForm: any) {

    this.submitted = true;
    if (this.signinForm.invalid) {
      return;
    }
    let obj = {
      "username": signinForm.username,
      "password": signinForm.password,
      "grant_type": 'password'
    }
    this.loginService.Login(obj).subscribe((data) => {
      this.data = data;

      if (this.data.token_type == "bearer") {
        this.auth.setAuth(this.data);
        this.router.navigate(['dashboard'])
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
    
        Toast.fire({
          icon: 'success',
          title: 'Signin successfully'
        })
      }
    })

  }
}

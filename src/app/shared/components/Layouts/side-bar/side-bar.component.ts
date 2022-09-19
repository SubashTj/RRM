import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  mobileQuery: MediaQueryList
  isMenuOpen = false;
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  SignOut() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You SignOut!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, SignOut it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
    
        Toast.fire({
          icon: 'success',
          title: 'SignOut successfully'
        })
        this.authenticationService.logout();
        this.router.navigate(['signin']);
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
    
        Toast.fire({
          icon: 'error',
          title: 'SignOut Canceled'
        })
      }
    })
  }
  toggle() {
    this.isMenuOpen = !this.isMenuOpen
  }
}

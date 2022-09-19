import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { TechnologyService } from '../service/technology.service';
@Component({
  selector: 'app-technology-create',
  templateUrl: './technology-create.component.html',
  styleUrls: ['./technology-create.component.scss']
})
export class TechnologyCreateComponent implements OnInit {
  addForm: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<TechnologyCreateComponent>, private dialog: MatDialog, private techService: TechnologyService) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      Technology_Name: new FormControl('', [Validators.required])
    })
  }
  Create(addForm: any) {
    let obj = {
      'Technology_Id': 0,
      'Technology_Name': addForm.value.Technology_Name
    }
    this.techService.Create(obj).subscribe((data) => {

    })
    const Toast = Swal.mixin({
      toast: true,
      width: 400,
      position: 'bottom',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'Technology created successfully'
    })
  }
  Close() {
    this.dialogRef.close();
  }
}

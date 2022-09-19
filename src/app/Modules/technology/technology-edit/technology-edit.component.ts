import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { TechnologyService } from '../service/technology.service';
@Component({
  selector: 'app-technology-edit',
  templateUrl: './technology-edit.component.html',
  styleUrls: ['./technology-edit.component.scss']
})
export class TechnologyEditComponent implements OnInit {
  addForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private fb: FormBuilder, private dialogRef: MatDialogRef<TechnologyEditComponent>, private dialog: MatDialog,private techService:TechnologyService) { }

  ngOnInit(): void {
    this.retriveForm(this.data.payload);
  }
  retriveForm(item: any) {
    this.addForm = this.formBuilder.group({
      Technology_Id: [item.TechnologyId || '', [Validators.required]],
      Technology_Name: [item.TechnologyName || '', [Validators.required]],
    })
  }
  Update(addForm:any) {
    let obj = {
      'Technology_Id': addForm.value.Technology_Id,
      'Technology_Name': addForm.value.Technology_Name,
      
    }
    this.techService.Create(obj).subscribe((data) => {

    })
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'Technology edited successfully'
    })
  }
  Close() {
    this.dialogRef.close();
  }
}

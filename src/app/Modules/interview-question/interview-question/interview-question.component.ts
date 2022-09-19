import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TechnologyCreateComponent } from '../../technology/technology-create/technology-create.component';
import { TechnologyEditComponent } from '../../technology/technology-edit/technology-edit.component';
import { QuestionCreateComponent } from '../question-create/question-create.component';
import { QuestionUpdateComponent } from '../question-update/question-update.component';
import Swal from 'sweetalert2';
import { InterviewQuestionService } from '../service/interview-question.service';
import { PaginationDTO } from 'src/app/shared/helpers/model/paginationDTO';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { constant } from 'src/app/core/helpers/global.helper';
export interface PeriodicElement {
  questions: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { questions: 'What is the use of Interfaces and why we go for interface ? Ans: An interface is mainly used only when we do not require the implementation of methods or functionalities. Multiple inheritance is not possible in C# so we go for interface.' },
  { questions: 'What is the difference between UNION and UNION ALL in SQL ? Ans: UNION SQL syntax is used to select information from two tables. But it selects only distinct records from both the table, while UNION ALL selects all records from both the tables.' },
  { questions: 'What is difference between abstract classes and interfaces? Ans: 1.) Abstract classes can have concrete methods while interfaces have no methods implemented. 2.) Interfaces do not come in inheriting chain, while abstract classes come in inheritance.' },
  { questions: 'What is a candidate key in SQL? Ans: A table may have more than one combination of columns that could uniquely identify the rows in a table; each combination is a candidate key.' },
  { questions: 'What are the different types of results in MVC? Ans: Important results are : ActionResult, ViewResult, and JsonResult Other results: partial view result, empty result, redirectresult, content result etc' },
  { questions: '6' },
  { questions: ' 7 ' },
  { questions: '8' },
  { questions: '9' },
  { questions: '10' },
  { questions: '11' },
  { questions: '12' },
  { questions: '13' },
  { questions: '14' },
  { questions: '15' },
  { questions: '16' },
  { questions: '17' },
  { questions: '18' },
  { questions: '19' },
  { questions: '20' },
];
@Component({
  selector: 'app-interview-question',
  templateUrl: './interview-question.component.html',
  styleUrls: ['./interview-question.component.scss']
})
export class InterviewQuestionComponent implements OnInit {
  displayedColumns: string[] = ['questions', 'action'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild('MatPaginator') paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  paginationDTO: PaginationDTO = new PaginationDTO();
  selection = new SelectionModel<any>(true, []);
  pageSizeOptions: any = 0;
  start: number;
  draw: number;
  length: number;
  technology: any;
  id: any;
  list: any;
  data: any;
  datas: any;
  constructor(private dialog: MatDialog, private iqService: InterviewQuestionService) {
    this.pageSizeOptions = constant().app.table.filtering.pageSizeOptions;
    this.paginationDTO = new PaginationDTO();
    this.start = this.paginationDTO.start;
    this.draw = this.paginationDTO.draw;
    this.length = this.paginationDTO.length;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getTechnology();
  }
  private refreshtable(actionType: any) {
    this.paginationDTO.start = this.paginator.pageSize;
    this.paginationDTO.draw = this.paginator.pageIndex;
    this.paginationDTO.length = this.paginator.pageSize;
    this.paginationDTO.totalSize = this.paginator.length;

    if (actionType == 'add') {
      this.paginationDTO.draw = 1;
    }
    this.GetQuestions(this.id);
    this.paginator.pageSize = this.paginationDTO.start
    this.paginator.pageIndex = this.paginationDTO.draw;
    this.paginator.pageSize = this.paginationDTO.length;
    this.paginator.length = this.paginationDTO.totalSize;

    this.selection = new SelectionModel<any>(true, []);
  }
  onPaginateChange(event: any) {
    this.draw = event.pageIndex;
    this.length = event.pageSize;
    this.start = (event.pageIndex * event.pageSize);
    this.GetQuestions(this.id);
  }
  GetQuestions(id: any) {
    let obj = {
      'draw': this.draw,
      'columns[0][data]': 'questions',
      'columns[0][name]': '',
      'columns[0][searchable]': true,
      'columns[0][orderable]': true,
      'columns[0][search][value]': '',
      'columns[0][search][regex]': false,
      'columns[1][data]': 'Action',
      'columns[1][name]': '',
      'columns[1][searchable]': true,
      'columns[1][orderable]': false,
      'columns[1][search][value]': '',
      'columns[1][search][regex]': false,
      'order[0][column]': 0,
      'order[0][dir]': 'desc',
      'start': this.start,
      'length': this.length,
      'search[value]': '',
      'search[regex]': false,
      'search[technologyID]': id
    }
    this.iqService.GetQuestions(obj).subscribe((res) => {
      this.paginationDTO.totalSize = res.recordsTotal;
      this.paginationDTO.start = res.data.length;
      this.dataSource = new MatTableDataSource<any>(res.data);
    })
  }
  Create() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to create new interview-question",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Create it!'
    }).then((result) => {
      const dialogRef = this.dialog.open(QuestionCreateComponent, {
        disableClose: true,
        data: { payload: this.id }
      })
    })

  }
  Update(element: any) {
    this.data = element;
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to update interview-question",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update it!'
    }).then((result) => {
      const dialogRef = this.dialog.open(QuestionUpdateComponent, {
        disableClose: true,
        data: { payload: this.data }
      })
    })
  }
  Delete(element: any) {
    console.log(element.Id)
    let obj = {
      'Id': element.Id
    }
    this.iqService.DeleteIq(obj).subscribe((data) => {
    })
    Swal.fire({
      title: 'Are you sure?',
      text: "You want delete this Interview-Question!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Interview-Question has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Interview-Question Not Deleted :)',
          'error'
        )
      }
    })
  }
  onSelectChange(select: any, tech: any) {
    this.datas = tech;
    this.id = tech.TechnologyId;
    this.GetQuestions(this.id);
  }
  add() {
    const dialogRef = this.dialog.open(TechnologyCreateComponent, {
      disableClose: true
    })
  }
  edit() {
    const dialogRef = this.dialog.open(TechnologyEditComponent, {
      disableClose: true,
      data: { payload: this.datas }
    })
  }
  delete() {
    let obj = {
      'id': this.id
    }
    console.log(obj)
    this.iqService.DeleteTech(obj).subscribe((data) => {

    })
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this technology!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Technology has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Technology Not Deleted :)',
          'error'
        )
      }
    })
  }
  reset() {

  }
  getTechnology() {
    this.iqService.getIQ().subscribe((data) => {
      this.technology = data
    })
  }
}

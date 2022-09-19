import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from 'src/app/core/interface/IMenu';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  menuList: Observable<IMenu[]>;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.menuList = this.apiService.getList<IMenu>("assets/menu.json")
  }

}

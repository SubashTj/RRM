import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart, NavigationEnd, Router } from '@angular/router';
import { filter, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  componentTitle: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    this.router.events.subscribe(data => {
      if (data instanceof ActivationStart) {
        this.componentTitle = data.snapshot.data['title'];
      }

    });
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        startWith(this.router)
      )
  }
  ngOnInit(): void {
  }

}

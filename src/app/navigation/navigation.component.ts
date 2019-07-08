import { Component, OnInit } from '@angular/core';
import { routes } from '../app-routing.module';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  items: any = routes.filter(item => item.path.length !== 0);
  constructor() { }

  ngOnInit() {
    console.log(routes);
  }

}

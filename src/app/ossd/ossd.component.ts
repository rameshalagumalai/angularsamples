import { Component } from '@angular/core';

@Component({
  selector: 'app-ossd',
  templateUrl: './ossd.component.html',
  styleUrls: ['./ossd.component.css']
})
export class OssdComponent {
  got = false

  styles = {
    'font-size': '10rem'
  }

  lists = [1, 2, 3, 4, 5]

  choice = 2
}

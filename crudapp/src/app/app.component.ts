import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudapp';

  constructor(private router: Router){}

/*   List(){
    this.router.navigate(["list"]);
  } */

  Add(){
    this.router.navigate(["add"]);
  }

  getUrl(){
  return "url('https://wallpapersfortech.com/wp-content/uploads/2021/03/Aesthetic-Minimalist-Background.png')";
  }
}

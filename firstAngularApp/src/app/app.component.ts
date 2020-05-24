import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstAngularApp';

  hero = "Batman";

  avengers = ['Iron Man', 'The Hulk', 'Thor', 'Black Window', 'Ant-Man', 'Captain America', 'Star Lord'];

  onSubmit(data){
    console.table(data);
  }

  fetchChildData(data){
    console.log(data);
  }

}

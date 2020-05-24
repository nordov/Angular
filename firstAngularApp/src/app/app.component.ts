import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstAngularApp';

  hero = "Superman";

  avengers = ['Iron Man', 'The Hulk', 'Thor', 'Black Window', 'Ant-Man', 'Captain America', 'Star Lord'];

  onSubmit(data){
    console.table(data);
  }

}

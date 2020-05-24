import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css']
})
export class SuperheroesComponent implements OnInit {

  // When there is Input the constructor is not necessary
  // constructor() { }

  @Input() hero;
  @Input() avengers;

  ngOnInit() {
    console.log("My hero", this.hero);
    console.log("Avengers", this.avengers);
  }

}

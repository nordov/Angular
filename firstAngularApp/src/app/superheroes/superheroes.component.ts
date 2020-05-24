import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() callParentFunction:EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    if (!this.hero)
      this.callParentFunction.emit("I'm the child component");
  }

}

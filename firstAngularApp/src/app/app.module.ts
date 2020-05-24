import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersModule } from './users/users.module';
import { OperationsModule } from './operations/operations.module';
import { SuperheroesComponent } from './superheroes/superheroes.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperheroesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    OperationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

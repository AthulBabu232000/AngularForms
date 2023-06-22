import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import {Router, Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  {path:'',component:FormsComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

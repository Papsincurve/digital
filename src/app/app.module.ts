import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { Routes, RouterModule } from '@angular/router';
import { MmmmmmmComponent } from './mmmmmmm/mmmmmmm.component';
import { SallesComponent } from './salles/salles.component';

const appRoutes : Routes = [  
{
  path : 'home', component : AcceuilComponent
}];
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    MmmmmmmComponent,
    SallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

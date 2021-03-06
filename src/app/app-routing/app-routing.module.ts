import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component'

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'about', component: AboutComponent },
  { path : 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent,AboutComponent,ContactComponent]

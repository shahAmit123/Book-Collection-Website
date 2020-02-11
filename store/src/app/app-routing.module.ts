import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
// import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { AddComponent } from './add/add.component';
const routes: Routes = [
  { path : '', component : BooklistComponent },  
  { path : 'details/:id', component : DetailsComponent },
  { path : 'add', component : AddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ BooklistComponent,
                                    DetailsComponent,
                                    AddComponent
                                  ]
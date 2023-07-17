import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrapejsComponent } from './grapejs/grapejs.component';

const routes: Routes = [{
  path: '',
  component: GrapejsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

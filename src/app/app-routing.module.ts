import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { SubmittedFormComponent } from './submitted-form/submitted-form.component';

const routes: Routes = [
  {path: 'reactive', component: ReactiveFormComponent },
  {path: 'template', component: TemplateFormComponent },
  {path: 'submitted', component: SubmittedFormComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

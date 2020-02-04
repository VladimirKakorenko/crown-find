import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management.component';
import { ProjectCardFormComponent } from './project-card-form/project-card-form.component';
import {EditProjectCardComponent} from './project-card-form/edit-project-card.component';
import {CreateProjectCardComponent} from './project-card-form/create-project-card.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
  },
  {
    path: 'edit',
    component: EditProjectCardComponent,
  },
  {
    path: 'create',
    component: CreateProjectCardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule {
}

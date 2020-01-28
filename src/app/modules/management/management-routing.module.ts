import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management.component';
import { ProjectCardFormComponent } from './project-card-form/project-card-form.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
  },
  {
    path: 'edit',
    component: ProjectCardFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule {
}

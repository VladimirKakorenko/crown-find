import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { ManagementRoutingModule } from './management-routing.module';
import { ProjectCardModule } from '../project-card/project-card.module';
import { CreateProjectCardComponent } from './project-card-form/create-project-card.component';
import { EditProjectCardComponent } from './project-card-form/edit-project-card.component';
import { ProjectCardFormComponent } from './project-card-form/project-card-form.component';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseTextFieldModule } from '../../components/base-text-field/base-text-field.module';


@NgModule({
  declarations: [
    ManagementComponent,
    CreateProjectCardComponent,
    EditProjectCardComponent,
    ProjectCardFormComponent,
  ],
  imports: [
    ManagementRoutingModule,
    CommonModule,
    ProjectCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BaseTextFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class ManagementModule {
}

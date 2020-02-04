import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { ManagementRoutingModule } from './management-routing.module';
import { ProjectCardModule } from '../project-card/project-card.module';
import { CreateProjectCardComponent } from './project-card-form/create-project-card.component';
import { EditProjectCardComponent } from './project-card-form/edit-project-card.component';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseTextFieldModule } from '../../components/base-text-field/base-text-field.module';
import { ImageDndModule } from '../../components/image-dnd/image-dnd.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ManagementComponent,
    CreateProjectCardComponent,
    EditProjectCardComponent,
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
        ImageDndModule,
        MatButtonModule,
    ],
})
export class ManagementModule {
}

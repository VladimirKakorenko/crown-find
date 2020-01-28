import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card.component';
import { MatButtonModule, MatCardModule } from '@angular/material';


@NgModule({
  declarations: [
    ProjectCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    ProjectCardComponent,
  ],
})
export class ProjectCardModule {
}

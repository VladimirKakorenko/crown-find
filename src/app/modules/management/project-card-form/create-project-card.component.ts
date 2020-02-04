import { Component, OnInit } from '@angular/core';
import { ProjectCardFormComponent } from './project-card-form.component';

@Component({
  selector: 'app-create-project-card',
  templateUrl: './project-card-form.component.html',
  styleUrls: ['./project-card-form.component.scss'],
})
export class CreateProjectCardComponent extends ProjectCardFormComponent {
  get submitText(): string {
    return 'Create';
  }
}

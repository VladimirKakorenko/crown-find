import { FormControl, Validators } from '@angular/forms';


export class ProjectCardFormComponent {
  nameControl = new FormControl('', [
    Validators.required,
  ]);
  cashControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
  ]);
  descriptionControl = new FormControl('', [
    Validators.required,
  ]);
  videoUrlControl = new FormControl('', [
    Validators.required,
  ]);
  expirationDateControl = new FormControl('', [
    Validators.required,
  ]);
}

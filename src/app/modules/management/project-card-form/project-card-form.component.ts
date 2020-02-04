import { FormControl, Validators } from '@angular/forms';
import { ElementRef, OnInit, ViewChild } from '@angular/core';


export abstract class ProjectCardFormComponent implements OnInit {
  fileImage: File;

  @ViewChild('imageElement', { static: true })
  imageElement: ElementRef<HTMLImageElement>;

  nameControl = new FormControl('', [Validators.required]);
  cashControl = new FormControl('', [Validators.required, Validators.min(1)]);
  descriptionControl = new FormControl('', [Validators.required]);
  videoUrlControl = new FormControl('', [Validators.required]);
  expirationDateControl = new FormControl('', [Validators.required]);

  get imageUrl(): string {
    return this.fileImage ? URL.createObjectURL(this.fileImage) : 'assets/add.png';
  }

  get projectFormData(): FormData {
    const formData = new FormData();
    formData.append('name', this.nameControl.value);
    formData.append('cash', this.cashControl.value);
    formData.append('description', this.descriptionControl.value);
    formData.append('video', this.videoUrlControl.value);
    formData.append('expiration', this.expirationDateControl.value);

    return formData;
  }

  handleFile(file: File) {
    this.fileImage = file;
    this.imageElement.nativeElement.src = this.imageUrl;
  }

  ngOnInit(): void {
    this.handleFile(null);
  }

  abstract get submitText(): string;
}

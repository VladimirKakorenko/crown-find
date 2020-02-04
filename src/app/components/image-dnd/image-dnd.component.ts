import { Component, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-image-dnd',
  templateUrl: './image-dnd.component.html',
  styleUrls: ['./image-dnd.component.scss'],
})
export class ImageDndComponent {
  @Output()
  file = new EventEmitter<File>();
  background: string;

  @HostListener('dragover', ['$event'])
  onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#9ecbec';
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#88897b';
  }

  @HostListener('drop', ['$event'])
  public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#88897b';
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.file.emit(files[0]);
    }
  }
}
